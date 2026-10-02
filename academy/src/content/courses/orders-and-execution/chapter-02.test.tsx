import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterTwoLessons as lessons } from './chapter-02';
import { ordersChapterOneLessons } from './chapter-01';
import { ordersDefinition } from './index';
import { ordersGlossary } from './glossary';

afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'orders-and-execution')!;
const answer = (title: string) => {
  const lesson = lessons.find((entry) => entry.title === title)!;
  const question = lesson.steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!.label;
};
const euro = (cents: number) => `${(cents / 100).toFixed(2).replace('.', ',')} Euro.`;

// Independent price-time-free matching calculation for the fixed exercise books.
// Cents keep sums exact; production teaching data has no execution engine.
function match(book: { cents: number; quantity: number }[], wanted: number, side: 'buy' | 'sell', cap?: number) {
  const levels = book.map((level) => ({ ...level })).sort((a, b) => side === 'buy' ? a.cents - b.cents : b.cents - a.cents);
  let remaining = wanted;
  const fills: { cents: number; quantity: number }[] = [];
  for (const level of levels) {
    if (cap !== undefined && (side === 'buy' ? level.cents > cap : level.cents < cap)) break;
    const quantity = Math.min(remaining, level.quantity);
    if (quantity) fills.push({ cents: level.cents, quantity });
    remaining -= quantity;
    level.quantity -= quantity;
    if (!remaining) break;
  }
  return { fills, levels, remaining, total: fills.reduce((sum, fill) => sum + fill.cents * fill.quantity, 0) };
}
const initial = [{ cents: 5000, quantity: 2 }, { cents: 5020, quantity: 3 }, { cents: 5050, quantity: 4 }];

describe('Market-Orders: chapter two', () => {
  it('loads 22 lessons and opens chapter two only after all 20 preceding lessons', async () => {
    expect(await ordersDefinition.units[1].load()).toEqual(lessons);
    expect(lessons).toHaveLength(22);
    expect(ordersDefinition.units[1].estimatedLessonCount).toBe(22);
    expect(course.units.slice(0, 2).flatMap((unit) => unit.lessons)).toHaveLength(42);
    const outline = toCourseOutline(course);
    const prior = ordersChapterOneLessons.map((lesson) => lesson.id);
    expect(lessonAccessState(outline, lessons[0], prior.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
    expect(ordersGlossary.filter((entry) => ['Kapitel 1', 'Kapitel 2'].includes(entry.firstUnit ?? ''))).toHaveLength(21);
  });

  it('matches the main buy, weighted average, book remainder and costs', () => {
    const result = match(initial, 4, 'buy');
    expect(answer('Vier Aktien brauchen zwei Preisstufen')).toBe(euro(result.total));
    expect(answer('Den Durchschnitt des Hauptkaufs bestimmen')).toBe(euro(result.total / 4).replace('.', ' je Aktie.'));
    expect(result.levels.map((level) => level.quantity)).toEqual([0, 1, 4]);
    expect(answer('Welche Angebote bleiben nach dem Kauf?')).toBe('Eine Aktie.');
    expect(answer('Preisabweichung braucht eine klare Referenz')).toBe(euro(result.total - 4 * initial[0].cents));
    expect(answer('Den Hauptkauf mit Kosten abschließen')).toBe(euro(result.total + 80));
    // Displayed slippage is part of execution value, not an additional fee.
    expect(result.total - 4 * 5000 + 80).toBe(120);
    expect(result.remaining).toBe(0);
  });

  it('computes larger buys and sells on their respective book sides', () => {
    expect(answer('Eine größere Menge im selben Ausgangsbuch')).toBe(euro(match(initial, 6, 'buy').total));
    const sell = match([{ cents: 4990, quantity: 3 }, { cents: 4970, quantity: 2 }], 4, 'sell');
    expect(answer('Eine größere Verkaufsorder durchrechnen')).toBe(euro(sell.total));
    expect(sell.total / 4).toBe(4985);
    const bid = 4990, ask = 5000;
    expect(answer('Der Spread kostet auch ohne Kursbewegung')).toBe(`Minus ${euro(ask - bid)}`);
    const thin = match([{ cents: 5000, quantity: 1 }, { cents: 5040, quantity: 5 }], 6, 'buy');
    expect(answer('Ein kleiner Spread reicht nicht als Mengenprüfung')).toBe(euro(thin.total));
  });

  it('handles quantity shortage and the explicitly invented system cap', () => {
    const shortage = match(initial.slice(0, 2).map((level, index) => ({ ...level, quantity: index ? 1 : 2 })), 5, 'buy');
    expect(shortage.fills.reduce((sum, fill) => sum + fill.quantity, 0)).toBe(3);
    expect(shortage.remaining).toBe(2);
    expect(answer('Zu wenig Menge: den Reststatus nachlesen')).toBe('Drei Stück ausgeführt, zwei Reststücke gelöscht.');
    const capped = match(initial, 6, 'buy', 5025);
    expect(capped.remaining).toBe(1);
    expect(capped.total).toBe(25060);
    expect(answer('Preisgrenzen des Systems können eingreifen')).toBe('Fünf Stück.');
    const text = JSON.stringify(lessons.find((entry) => entry.title === 'Preisgrenzen des Systems können eingreifen'));
    expect(text).toContain('keine reale Anbieterregel');
  });

  it('separates book-change scenarios from the fixed-book case', () => {
    const changed = match([{ cents: 5030, quantity: 4 }], 4, 'buy');
    expect(changed.total - 4 * 5000).toBe(120);
    const improved = match([{ cents: 4995, quantity: 4 }, { cents: 5000, quantity: 4 }], 4, 'buy');
    expect(answer('Eine günstigere Abweichung ist ebenfalls möglich')).toBe(euro(4 * 5000 - improved.total).replace('.', ' insgesamt.'));
    expect(answer('Wenn das Buch vor Ankunft wechselt')).toBe('Die verfügbaren Angebote bei Ankunft des Auftrags.');
  });

  it('renders comparisons and provides distinct feedback without visible source names', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`orders-and-execution.chapter-02.lesson-${String(index + 1).padStart(2, '0')}`);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.correctOptionId).toBe(`choice-${index % 3}`);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
      const explanation = lesson.steps.find((step) => step.type === 'explanation')!;
      expect(explanation.paragraphs).toHaveLength(3);
      const step = lesson.steps.find((step) => step.type === 'comparison')!;
      render(<ComparisonStep step={step} />);
      for (const column of step.columns) {
        const heading = screen.getByRole('heading', { name: column.title, level: 2 });
        expect(heading).toBeVisible();
        for (const point of column.points) expect(within(heading.parentElement!).getByText(point)).toBeVisible();
      }
      cleanup();
    }
    expect(JSON.stringify(lessons)).not.toMatch(/Larry Harris|Trading and Exchanges|OceanofPDF|pdfcoffee/);
  });
});
