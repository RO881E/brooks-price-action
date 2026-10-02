import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterThreeLessons as lessons } from './chapter-03';
import { ordersDefinition } from './index';
import { ordersGlossary } from './glossary';

afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'orders-and-execution')!;
const answer = (title: string) => {
  const question = lessons.find((lesson) => lesson.title === title)!.steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!.label;
};
const euro = (cents: number) => `${(cents / 100).toFixed(2).replace('.', ',')} Euro.`;

// Independent matching oracle for the stated exercise rules, not app code.
type Order = { id: string; quantity: number; cents: number; time: number };
function take(bids: Order[], quantity: number) {
  const fills: { id: string; quantity: number; cents: number }[] = [];
  for (const order of [...bids].sort((a, b) => b.cents - a.cents || a.time - b.time)) {
    const amount = Math.min(order.quantity, quantity);
    if (amount) fills.push({ id: order.id, quantity: amount, cents: order.cents });
    order.quantity -= amount;
    quantity -= amount;
    if (!quantity) break;
  }
  return fills;
}
const queue = (): Order[] => [
  { id: 'A', quantity: 3, cents: 4000, time: 1 },
  { id: 'B', quantity: 2, cents: 4000, time: 2 },
  { id: 'L', quantity: 4, cents: 4000, time: 3 },
];

describe('Limit orders and queues: chapter three', () => {
  it('loads chapter three and unlocks only after the existing 42 lessons', async () => {
    expect(await ordersDefinition.units[2].load()).toEqual(lessons);
    expect(lessons).toHaveLength(22);
    expect(course.units.flatMap((unit) => unit.lessons)).toHaveLength(64);
    expect(ordersGlossary).toHaveLength(31);
    const prior = course.units.slice(0, 2).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], prior.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('allows better prices inside limits and forbids the next worse level', () => {
    const buyValue = 2 * 3990 + 2 * 4000;
    expect(answer('Ein Limit kann sofort zugreifen')).toBe(euro(buyValue));
    expect(buyValue / 4).toBe(3995);
    const asks = [{ quantity: 2, cents: 3990 }, { quantity: 1, cents: 4000 }, { quantity: 5, cents: 4020 }];
    const allowed = asks.filter((level) => level.cents <= 4000).reduce((sum, level) => sum + level.quantity, 0);
    expect(allowed).toBe(3);
    expect(answer('Die Restmenge hält die Grenze ein')).toBe('Eine Aktie.');
    expect(answer('Das Verkaufslimit schützt nach unten')).toBe(euro(2 * 4010 + 2 * 4000));
    expect(answer('Ein Limit wartet nicht auf eine Kursrichtung')).toBe('Nein, es kann bereits zu 40,20 Euro handeln.');
  });

  it('trades at the limit without filling Lea, then fills only two of her shares', () => {
    const bids = queue();
    const first = take(bids, 4);
    expect(first).toEqual([{ id: 'A', quantity: 3, cents: 4000 }, { id: 'B', quantity: 1, cents: 4000 }]);
    expect(answer('Ein Trade am Limit kann an dir vorbeigehen')).toBe('Null Aktien.');
    const second = take(bids, 3);
    expect(second).toEqual([{ id: 'B', quantity: 1, cents: 4000 }, { id: 'L', quantity: 2, cents: 4000 }]);
    expect(answer('Der nächste Verkäufer erreicht einen Teil')).toBe('Zwei Aktien.');
    const own = second.filter((fill) => fill.id === 'L');
    expect(own.reduce((sum, fill) => sum + fill.quantity * fill.cents, 0)).toBe(8000);
    expect(bids.find((order) => order.id === 'L')!.quantity).toBe(2);
    expect(answer('Den Limitfall mit einem vollständigen Bericht abschließen')).toBe('Zwei Aktien gekauft, null offen, 80,60 Euro belastet.');
  });

  it('places later same-price orders behind Lea and better prices ahead', () => {
    const bids = queue();
    bids.push({ id: 'C', quantity: 10, cents: 4000, time: 4 });
    expect(take(bids, 6).find((fill) => fill.id === 'L')!.quantity).toBe(1);
    expect(answer('Ein neuer Auftrag hinten verändert deinen Vorrang nicht')).toBe('Fünf Stück.');
    const improved = queue();
    improved.push({ id: 'D', quantity: 2, cents: 4010, time: 4 });
    expect(take(improved, 3)).toEqual([{ id: 'D', quantity: 2, cents: 4010 }, { id: 'A', quantity: 1, cents: 4000 }]);
    expect(answer('Ein besseres Gebot kommt vor den alten Preis')).toBe('D mit dem Gebot von 40,10 Euro.');
  });

  it('distinguishes a cancellation, repricing and a separate proportional rule', () => {
    const bids = queue().filter((order) => order.id !== 'B');
    expect(bids.reduce((sum, order) => sum + order.quantity, 0)).toBe(7);
    expect(take(bids, 4).find((fill) => fill.id === 'L')!.quantity).toBe(1);
    expect(answer('Eine Stornierung vor dir kann die Menge verkleinern')).toBe('Drei Stück.');
    const repriced: Order[] = [{ id: 'D', quantity: 2, cents: 4010, time: 4 }, { id: 'L', quantity: 4, cents: 4010, time: 5 }];
    expect(take(repriced, 2).map((fill) => fill.id)).toEqual(['D']);
    expect(answer('Preisänderung kann deine alte Reihenfolge beenden')).toBe('Hinter den zwei Stück von D.');
    expect(5 * 4 / (6 + 4)).toBe(2);
    expect(answer('Andere Zuteilungsregeln führen zu anderen Mengen')).toBe('Zwei Aktien.');
    expect(answer('Liquidität anbieten ist kein sicherer Gewinn')).toBe(`Minus ${euro(2 * (4000 - 3970))} vor Gebühren.`.replace('Euro. vor', 'Euro vor'));
  });

  it('renders each comparison and keeps simplified model rules explicit', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`orders-and-execution.chapter-03.lesson-${String(index + 1).padStart(2, '0')}`);
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
    const rules = JSON.stringify(lessons.find((lesson) => lesson.title === 'Die Warteschlange hat feste Lernregeln'));
    expect(rules).toContain('keine Zusage für jede Börse');
    expect(JSON.stringify(lessons)).not.toMatch(/Larry Harris|Trading and Exchanges|pdfcoffee|OceanofPDF/);
  });
});
