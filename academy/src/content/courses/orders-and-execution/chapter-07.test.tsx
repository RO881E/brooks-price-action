import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterSevenLessons as lessons } from './chapter-07';
import { ordersDefinition } from './index';
import { ordersGlossary } from './glossary';
afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'orders-and-execution')!;
const answer = (title: string) => {
  const question = lessons.find((lesson) => lesson.title === title)!.steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!.label;
};
const value = (fills: { cents: number; quantity: number }[]) => fills.reduce((total, fill) => total + fill.cents * fill.quantity, 0);
const euro = (cents: number) => `${(cents / 100).toFixed(2).replace('.', ',')} Euro.`;
// Independent cents-based reference trace for the explicitly stated learning rule.
function trail(start: number, updates: number[], distance: number, side: 'sell' | 'buy' = 'sell') {
  let reference = start, triggered = false;
  const rows: { reference: number; stop: number; triggered: boolean }[] = [];
  for (const price of updates) {
    if (triggered) continue;
    reference = side === 'sell' ? Math.max(reference, price) : Math.min(reference, price);
    const stop = reference + (side === 'sell' ? -distance : distance);
    triggered = side === 'sell' ? price <= stop : price >= stop;
    rows.push({ reference, stop, triggered });
  }
  return rows;
}
describe('Trailing stops and conditional activation: chapter seven', () => {
  it('loads 22 lessons and unlocks after the existing 130 lessons', async () => {
    expect(await ordersDefinition.units[6].load()).toEqual(lessons);
    expect(lessons).toHaveLength(22);
    expect(course.units.slice(0, 7).flatMap((unit) => unit.lessons)).toHaveLength(152);
    expect(ordersGlossary.filter((entry) => /^Kapitel [1-7]$/.test(entry.firstUnit ?? ''))).toHaveLength(70);
    const prior = course.units.slice(0, 6).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(prior).toHaveLength(130);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], prior.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });
  it('tracks favorable reference values without loosening and stops tracking after trigger', () => {
    const rows = trail(6000, [6100, 6080, 6300, 6240, 6100, 7000], 200);
    expect(rows.map((row) => row.stop)).toEqual([5900, 5900, 6100, 6100, 6100]);
    expect(rows.map((row) => row.reference)).toEqual([6100, 6100, 6300, 6300, 6300]);
    expect(rows.map((row) => row.triggered)).toEqual([false, false, false, false, true]);
    expect(answer('Den Startwert und den Beobachtungsbeginn festhalten')).toBe(euro(6000 - 200));
    expect(answer('Neue Höchstwerte Schritt für Schritt übernehmen')).toBe(euro(rows[2].stop));
    expect(answer('Rückgänge senken die Verkaufsschwelle nicht')).toBe(euro(rows[3].stop));
    expect(answer('Berühren und Unterschreiten nach der Regel prüfen')).toBe('Die Market-Verkaufsorder über vier wird aktiviert.');
    expect(answer('Ein ausgelöster Rest beginnt nicht erneut zu trailen')).toBe('Eine Market-Verkaufsorder über drei ohne neue Trailing-Phase.');
    const buy = trail(5000, [4900, 4700, 4760, 4800], 100, 'buy');
    expect(buy.map((row) => row.stop)).toEqual([5000, 4800, 4800, 4800]);
    expect(buy.at(-1)?.triggered).toBe(true);
    expect(answer('Ein Kauftrail arbeitet in der anderen Richtung')).toBe('Eine Market-Kauforder über drei.');
  });
  it('reconciles actual main and gap fills with the one-fee-per-order model', () => {
    const purchase = 4 * 6000, fees = 40 + 40;
    const main = value([{ cents: 6090, quantity: 1 }, { cents: 6070, quantity: 3 }]);
    const gap = value([{ cents: 5880, quantity: 1 }, { cents: 5860, quantity: 3 }]);
    expect(main).toBe(24300); expect(main / 4).toBe(6075); expect(gap).toBe(23460);
    expect(answer('Den Hauptausstieg mit echten Kaufangeboten rechnen')).toBe(euro(main - purchase - fees));
    expect(purchase - gap + fees).toBe(620);
    expect(answer('Eine Preislücke kann auch den angehobenen Stop überholen')).toBe('6,20 Euro Verlust nach Modellgebühren.');
    expect(answer('Den Hauptpfad vom Start bis zum Abschluss prüfen')).toBe('Vier verkauft, Bestand null, kein Orderrest, Gewinn 2,20 Euro nach Modellgebühren.');
  });
  it('distinguishes percentages, price grids, source quotes and limit offsets', () => {
    const high = 10800;
    expect(high * 95 / 100).toBe(10260);
    expect(answer('Einen Prozentabstand vom Referenzhoch berechnen')).toBe(euro(high * 95 / 100));
    expect(answer('Feste und prozentuale Abstände unterscheiden')).toBe('Die feste Schwelle ist 103,00, die Prozentschwelle 102,60.');
    const rawCents = 10120 * 975 / 1000;
    expect(rawCents).toBe(9867);
    expect(answer('Die erlaubte Preisstufe und Rundung mitlesen')).toBe(euro(Math.floor(rawCents / 5) * 5));
    expect(6240 <= 6100).toBe(false); expect(6090 <= 6100).toBe(true);
    expect(answer('Die Referenzquelle kann das Ergebnis ändern')).toBe('Der Auftrag mit Bid als festgelegter Quelle.');
    const limit = 6300 - 200 - 30;
    expect(answer('Beim Trailing-Stop-Limit zwei Abstände unterscheiden')).toBe(euro(limit));
    const fillable = [{ cents: 6060, quantity: 4 }, { cents: 6080, quantity: 2 }].filter((bid) => bid.cents >= limit);
    expect(fillable.reduce((n, bid) => n + bid.quantity, 0)).toBe(2);
    expect(answer('Eine ausgelöste Limit-Alternative kann weiter offen sein')).toBe('Zwei Aktien.');
  });
  it('checks current AND snapshots, one-shot activation and independent expiry times', () => {
    const states = [{ minute: 599, index: 1002 }, { minute: 600, index: 999 }, { minute: 601, index: 1002 }];
    expect(states.map((s) => s.index >= 1000 && s.minute >= 600 && s.minute < 960)).toEqual([false, false, true]);
    expect(answer('UND-Bedingungen im selben aktuellen Datenstand prüfen')).toBe('Um 10:01 bei Index 1.002.');
    let armed = true, orders = 0;
    for (const index of [1002, 1003, 1004]) if (armed && index >= 1000) { orders++; armed = false; }
    expect(orders).toBe(1);
    expect(answer('Eine einmal erfüllte Bedingung muss nicht immer wieder handeln')).toBe('Eine Folgeorder.');
    expect(959 < 960).toBe(true); expect(960 < 960).toBe(false);
    expect(990 < 1020).toBe(true); expect(1020 < 1020).toBe(false);
    expect(answer('Bedingungsfrist und Orderfrist getrennt lesen')).toBe('Eine Aktie.');
    expect(answer('Eine allgemeine Bedingung aktiviert erst den eigentlichen Auftrag')).toBe('Der Kaufauftrag wird aktiviert, aber es ist noch keine Aktie gekauft.');
    expect(answer('Ein erfülltes Signal kann eine abgelehnte Folgeorder erzeugen')).toBe('Null Aktien und kein aktiver Kaufauftrag.');
  });
  it('renders all comparisons and keeps feedback, model limits and original text explicit', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`orders-and-execution.chapter-07.lesson-${String(index + 1).padStart(2, '0')}`);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.correctOptionId).toBe(`choice-${index % 3}`);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
      expect(lesson.steps.find((step) => step.type === 'explanation')!.paragraphs).toHaveLength(3);
      const step = lesson.steps.find((step) => step.type === 'comparison')!;
      render(<ComparisonStep step={step} />);
      for (const column of step.columns) {
        const heading = screen.getByRole('heading', { name: column.title, level: 2 });
        expect(heading).toBeVisible();
        for (const point of column.points) expect(within(heading.parentElement!).getByText(point)).toBeVisible();
      }
      cleanup();
    }
    expect(JSON.stringify(lessons)).not.toMatch(/Larry Harris|Trading and Exchanges|pdfcoffee|OceanofPDF/);
  });
});
