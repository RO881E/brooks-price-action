import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterNineLessons as lessons } from './chapter-09';
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
describe('Routing and recovery: chapter nine', () => {
  it('loads 22 lessons and unlocks after the existing 174 lessons', async () => {
    expect(await ordersDefinition.units[8].load()).toEqual(lessons);
    expect(lessons).toHaveLength(22);
    expect(course.units.slice(0, 9).flatMap((unit) => unit.lessons)).toHaveLength(196);
    expect(ordersGlossary.filter((entry) => /^Kapitel [1-9]$/.test(entry.firstUnit ?? ''))).toHaveLength(90);
    const prior = course.units.slice(0, 8).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(prior).toHaveLength(174);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], prior.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });
  it('reconciles fixed child-order costs without treating partial fills as a full comparison', () => {
    const fills = [{ cents: 2500, quantity: 2 }, { cents: 2510, quantity: 2 }];
    const cost = value(fills), fees = 2 * 20 + 4;
    expect(cost).toBe(10020); expect(fees).toBe(44);
    expect(answer('Ein Auftrag kann mehrere Teilaufträge bekommen')).toBe(euro(cost + fees));
    const desired = 4, available = 1;
    expect(desired - available).toBe(3);
    expect(answer('Ein fest gewählter Platz garantiert keine volle Menge')).toBe('Eine Aktie.');
    expect(answer('Eine Annahme ist nur für ihre Station eindeutig')).toBe('Null bestätigte Verkäufe.');
  });
  it('counts unique trades once regardless of replay and distinguishes cumulative reports', () => {
    const first = { id: 'E1', quantity: 2, cents: 4030 };
    const second = { id: 'E2', quantity: 3, cents: 4020 };
    for (const reports of [[first, first, second], [second, first, second, first]]) {
      const unique = [...new Map(reports.map((report) => [report.id, report])).values()];
      expect(unique.reduce((sum, fill) => sum + fill.quantity, 0)).toBe(5);
      expect(value(unique)).toBe(20120);
    }
    expect(answer('Doppelte Meldungen sind nicht doppelte Geschäfte')).toBe('Fünf Aktien.');
    const cumulative = [2, 5];
    expect(answer('Gesamtstände nicht als neue Teilmengen addieren')).toBe('Drei Aktien.');
    expect(cumulative[1] - cumulative[0]).toBe(3);
    expect(answer('Ein erneuter Klick kann eine zweite Order erzeugen')).toBe(`${7 + 7} Aktien.`);
  });
  it('conserves quantities across a cancellation race and leaves an old limit after a rejected change', () => {
    const original = 7;
    let filled = 0, cancelled = 0;
    const events = [{ type: 'fill', quantity: 2 }, { type: 'cancel-request', quantity: 5 }, { type: 'fill', quantity: 3 }, { type: 'cancel-confirm', quantity: 2 }];
    for (const event of events) {
      if (event.type === 'fill') filled += event.quantity;
      if (event.type === 'cancel-confirm') cancelled += event.quantity;
      expect(original - filled - cancelled).toBeGreaterThanOrEqual(0);
    }
    expect(filled).toBe(5); expect(cancelled).toBe(2);
    expect(original - filled - cancelled).toBe(0);
    expect(answer('Stornowunsch und weitere Ausführung können sich kreuzen')).toBe('Zwei Aktien.');
    expect(answer('Nach dem Wiederverbinden einen vollständigen Abgleich machen')).toBe('Zwei Aktien.');
    expect(answer('Eine abgelehnte Änderung lässt die alte Order nicht verschwinden')).toBe('Das bisherige Limit 40,20 Euro.');
    expect(1803 % 5).not.toBe(0); expect(1800 % 5).toBe(0); expect(1805 % 5).toBe(0);
    expect(answer('Eine Ablehnung mit Grund ist etwas anderes als Schweigen')).toBe('Abgelehnt, keine Ausführung.');
  });
  it('balances actual cash and remaining holdings while leaving missing responses unresolved', () => {
    const startCash = 50000, buyCost = 7 * 4000 + 50;
    const sellValue = value([{ cents: 4030, quantity: 2 }, { cents: 4020, quantity: 3 }]);
    const saleFee = 40 + 5;
    expect(startCash - buyCost).toBe(21950);
    expect(sellValue - saleFee).toBe(20075);
    expect(answer('Die Geldbuchungen trotz Störung vollständig rechnen')).toBe(euro(startCash - buyCost + sellValue - saleFee));
    expect(answer('Einen Technikfall mit Belegen abschließen')).toBe('Zwei Aktien, kein Orderrest, Geldstand 420,25 Euro.');
    expect(answer('Keine Antwort bedeutet einen ungeklärten Zustand')).toBe('Die Antwort fehlt; der Auftragszustand ist ungeklärt.');
    expect(answer('Ein Verbindungsabbruch storniert nicht automatisch')).toBe('S17 kann am Platz weiterhin aktiv sein.');
    const now = 10 * 3600 + 1 * 60 + 10, last = 10 * 3600 + 40;
    expect(answer('Alte Preise am Zeitstempel erkennen')).toBe(`${now - last} Sekunden.`);
    expect(answer('Den Ausführungsort einer Schutzregel kennen')).toBe('Modell S auf dem weiterhin aktiven entfernten System.');
  });
  it('renders all comparisons and keeps feedback, model limits and original text explicit', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`orders-and-execution.chapter-09.lesson-${String(index + 1).padStart(2, '0')}`);
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
