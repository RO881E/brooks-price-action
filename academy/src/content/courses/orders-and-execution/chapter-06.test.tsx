import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterSixLessons as lessons } from './chapter-06';
import { ordersDefinition } from './index';
import { ordersGlossary } from './glossary';
afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'orders-and-execution')!;
const answer = (title: string) => {
  const question = lessons.find((lesson) => lesson.title === title)!.steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!.label;
};
const position = (initial: number, trades: { side: 'buy' | 'sell'; quantity: number }[]) =>
  trades.reduce((remaining, trade) => remaining + (trade.side === 'buy' ? trade.quantity : -trade.quantity), initial);
const value = (fills: { cents: number; quantity: number }[]) => fills.reduce((total, fill) => total + fill.cents * fill.quantity, 0);
const euro = (cents: number) => `${(cents / 100).toFixed(2).replace('.', ',')} Euro.`;
// Independent event ledger for the stated alternatives, not a production order engine.
const exits = (initial: number, filled: number, policy: 'reduce' | 'cancel') => ({
  position: initial - filled,
  target: initial - filled,
  stop: policy === 'reduce' ? initial - filled : 0,
});
describe('Closing positions, OCO and brackets: chapter six', () => {
  it('loads 22 lessons and unlocks after the existing 108 lessons', async () => {
    expect(await ordersDefinition.units[5].load()).toEqual(lessons);
    expect(lessons).toHaveLength(22);
    expect(course.units.slice(0, 6).flatMap((unit) => unit.lessons)).toHaveLength(130);
    expect(ordersGlossary.filter((entry) => /^Kapitel [1-6]$/.test(entry.firstUnit ?? ''))).toHaveLength(60);
    const prior = course.units.slice(0, 5).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(prior).toHaveLength(108);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], prior.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });
  it('closes long and short using executed quantities and detects over-selling', () => {
    expect(position(6, [{ side: 'sell', quantity: 6 }])).toBe(0);
    expect(position(6, [{ side: 'sell', quantity: 2 }])).toBe(4);
    expect(position(-4, [{ side: 'buy', quantity: 4 }])).toBe(0);
    expect(position(-4, [{ side: 'sell', quantity: 4 }])).toBe(-8);
    const twice = [{ side: 'sell' as const, quantity: 6 }, { side: 'sell' as const, quantity: 6 }];
    expect(position(6, twice)).toBe(-6);
    expect(answer('Ein Teilausstieg lässt eine Restposition')).toBe('Vier Aktien.');
    expect(answer('Eine Short-Position braucht Käufe zum Schließen')).toBe('Vier Aktien kaufen.');
    expect(answer('Zwei einzelne Ausstiege sind noch keine Verknüpfung')).toBe('Eine Short-Position von minus sechs.');
  });
  it('computes both independent main exits from price-level fills and fees', () => {
    const bought = value([{ cents: 4000, quantity: 6 }]);
    const target = value([{ cents: 4220, quantity: 2 }, { cents: 4200, quantity: 4 }]);
    const stop = value([{ cents: 3780, quantity: 2 }, { cents: 3760, quantity: 4 }]);
    expect(bought).toBe(24000); expect(target).toBe(25240); expect(stop).toBe(22600);
    const fees = 60 + 60;
    expect(answer('Den Zielausstieg über zwei Preisstufen rechnen')).toBe(euro(target - bought - fees));
    expect(answer('Der Stopausstieg kann unter der Schwelle handeln')).toBe('15,20 Euro einschließlich der Modellgebühren.');
    expect(bought - stop + fees).toBe(1520);
    const assumed = bought - 6 * 3800 + fees;
    expect(assumed).toBe(1320);
    expect(answer('Den geplanten Verlust mit dem tatsächlichen vergleichen')).toBe(euro(1520 - assumed));
    expect(answer('Den vollständigen Ausstieg als Abschlussbericht lesen')).toBe('Position null, Stop gelöscht, keine offenen Orders, Gewinn 11,20 Euro.');
  });
  it('keeps OCO partial-fill policies and delayed cancellation distinct', () => {
    expect(exits(6, 2, 'reduce')).toEqual({ position: 4, target: 4, stop: 4 });
    expect(exits(6, 2, 'cancel')).toEqual({ position: 4, target: 4, stop: 0 });
    expect(answer('Eine OCO-Teilmenge muss zur Restposition passen')).toBe('Vier Stück.');
    expect(answer('Eine andere OCO-Regel kann den Stop früher löschen')).toBe('Vier Aktien, Zielrest vier und kein aktiver Stop.');
    expect(exits(6, 6, 'reduce')).toEqual({ position: 0, target: 0, stop: 0 });
    expect(answer('Schnelle Ausführungen können eine Löschung überholen')).toBe('Eine bestätigte Löschung vor einer weiteren Ausführung.');
    const race = position(6, [{ side: 'sell', quantity: 6 }, { side: 'sell', quantity: 6 }]);
    expect(race).toBe(-6);
    expect(lessons[4].steps.find((step) => step.type === 'explanation')!.paragraphs.join(' ')).toContain('vor dem nächsten möglichen Handel');
  });
  it('checks parent partial fills, child rejection, manual exits and reduce-only separately', () => {
    const parentFilled = 2, parentWanted = 6;
    const childActive = parentFilled === Number(parentWanted);
    expect(childActive).toBe(false);
    expect(parentWanted - parentFilled).toBe(4);
    expect(answer('Eine Parent-Teilmenge kann noch ohne aktive Children stehen')).toBe('Keine; die Children warten auf die volle Parent-Ausführung.');
    expect(answer('Den Parentrest löschen lässt gekaufte Stücke bestehen')).toBe('Zwei Aktien.');
    expect(answer('Ein abgelehntes Child hinterlässt eine unvollständige Klammer')).toBe('Sechs Aktien und ein aktives Ziel, aber kein aktiver Stop.');
    const manual = position(6, [{ side: 'sell', quantity: 2 }]);
    expect(manual).toBe(4);
    const capped = Math.min(6, Math.max(0, manual));
    expect(capped).toBe(4); expect(manual - capped).toBe(0); expect(6 - capped).toBe(2);
    expect(answer('Reduce-only braucht eine konkrete Anbieterregel')).toBe('Eine neue Short-Position durch diesen Verkaufsauftrag.');
    const availableBids = [{ cents: 3760, quantity: 6 }];
    const limitFill = availableBids.filter((bid) => bid.cents >= 3780).reduce((n, bid) => n + bid.quantity, 0);
    expect(limitFill).toBe(0);
    expect(answer('Stop-Limit kann auch im Bracket offen bleiben')).toBe('Sechs Aktien.');
  });
  it('renders every comparison and supplies original beginner explanations with distinct feedback', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`orders-and-execution.chapter-06.lesson-${String(index + 1).padStart(2, '0')}`);
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
