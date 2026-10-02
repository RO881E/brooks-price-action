import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterEightLessons as lessons } from './chapter-08';
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
describe('Slippage and execution costs: chapter eight', () => {
  it('loads 22 lessons and unlocks after the existing 152 lessons', async () => {
    expect(await ordersDefinition.units[7].load()).toEqual(lessons);
    expect(lessons).toHaveLength(22);
    expect(course.units.slice(0, 8).flatMap((unit) => unit.lessons)).toHaveLength(174);
    expect(ordersGlossary.filter((entry) => /^Kapitel [1-8]$/.test(entry.firstUnit ?? ''))).toHaveLength(80);
    const prior = course.units.slice(0, 7).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(prior).toHaveLength(152);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], prior.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });
  it('weights fills and decomposes benchmark differences without double counting', () => {
    const buy = value([{ cents: 2510, quantity: 2 }, { cents: 2525, quantity: 4 }]);
    expect(buy).toBe(15120);
    expect(answer('Den Hauptkauf mengenrichtig ausrechnen')).toBe(euro(buy / 6));
    const midpoint = buy - 6 * 2500, quote = buy - 6 * 2510;
    expect(midpoint).toBe(120); expect(quote).toBe(60);
    expect(6 * (2510 - 2500) + quote).toBe(midpoint);
    expect(answer('Mitte und Briefkurs beantworten verschiedene Fragen')).toBe('1,20 Euro; die zwei Teile von 0,60 sind darin enthalten.');
    const sell = value([{ cents: 2560, quantity: 3 }, { cents: 2550, quantity: 3 }]);
    expect(6 * 2560 - sell).toBe(30);
    expect(answer('Beim Verkauf dreht sich die ungünstige Richtung um')).toBe('0,30 Euro ungünstiger.');
    expect(answer('Auch günstige Preisabweichungen sind möglich')).toBe(`${euro(6 * (2500 - 2498)).slice(0, -1)} insgesamt günstiger als die Referenz.`);
    expect(2508 < 2510 && 2508 > 2500).toBe(true);
    expect(answer('Preisverbesserung hängt ebenfalls vom Vergleich ab')).toBe('Besser als Brief 25,10, aber teurer als Mitte 25,00.');
  });
  it('respects per-order charges, quantity charges and alternative minimum tariffs', () => {
    const fee = (quantity: number, orders = 1) => 30 * orders + 3 * quantity;
    expect(answer('Auftragsgebühr und Stückgebühr getrennt rechnen')).toBe(euro(30 + 6 * 2));
    expect(fee(6)).toBe(48);
    expect(answer('Zusätzliche Handelskosten zur Kontobelastung addieren')).toBe(euro(15120 + fee(6)));
    expect(answer('Zwei getrennte Orders können zwei feste Gebühren auslösen')).toBe(euro(fee(6, 2) - fee(6)));
    expect(Math.max(30, 5 * 2)).toBe(30);
    expect(answer('Eine Mindestgebühr kann kleine Mengen anders treffen')).toBe(euro(Math.max(30, 5 * 8)));
    expect(answer('Null Auftragsprovision bedeutet nicht null Gesamtkosten')).toBe(euro(15120 + 6));
  });
  it('reconciles the full round trip and solves fee-adjusted break-even', () => {
    const buy = value([{ cents: 2510, quantity: 2 }, { cents: 2525, quantity: 4 }]);
    const sell = value([{ cents: 2560, quantity: 3 }, { cents: 2550, quantity: 3 }]);
    const fee = 30 + 6 * 2 + 6;
    const debit = buy + fee, credit = sell - fee;
    expect(debit).toBe(15168); expect(credit).toBe(15282);
    expect(answer('Kauf und Verkauf ergeben erst zusammen den Nettogewinn')).toBe(euro(credit - debit));
    const breakEven = (buy + 2 * fee) / 6;
    expect(answer('Die Gewinnschwelle aus den bekannten Kosten ableiten')).toBe(euro(breakEven));
    expect(6 * breakEven - fee - debit).toBe(0);
    expect(answer('Den Spread nicht nochmals vom Ergebnis abziehen')).toBe('1,14 Euro ohne zusätzlichen Spreadabzug.');
    expect(answer('Den Hauptfall als Geld- und Mengenbilanz abschließen')).toBe('Bestand null, keine Orderreste, 1,14 Euro Gewinn nach Modellgebühren.');
  });
  it('separates unfilled quantities, timestamps, route costs and aggregate price effects', () => {
    expect(answer('Ein nicht ausgeführtes Limit ist kein bestätigter Gewinn')).toBe('Die gedachten 6,00 Euro sind kein bestätigter Handelsgewinn oder Gebührenabzug.');
    expect(2 / 6).toBeCloseTo(1 / 3);
    expect(answer('Einen günstigen Teilfill nicht mit einer vollen Ausführung verwechseln')).toBe('Ein Drittel, also zwei von sechs.');
    expect(answer('Wartezeit vom richtigen Ereignis aus messen')).toBe(`${230 - 100} Millisekunden.`);
    expect(6 * 2520 + 48).toBeLessThan(6 * 2515 + 90);
    expect(answer('Preis und Gebühren bei zwei Wegen gemeinsam vergleichen')).toBe('Weg A mit 151,68 Euro.');
    const aggregate = value([{ cents: 2520, quantity: 6 }, { cents: 2510, quantity: 2 }]);
    expect(aggregate / 8).toBe(2517.5);
    expect(answer('Mehrere Orders nach gehandelter Menge zusammenfassen')).toBe(euro(aggregate - 8 * 2500));
    expect(answer('Ausführungsqualität braucht mehrere passende Angaben')).toBe('Ausgeführte Menge, Reststatus, Gebühren und vergleichbare Zeitangaben.');
  });
  it('renders all comparisons and keeps feedback, model limits and original text explicit', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`orders-and-execution.chapter-08.lesson-${String(index + 1).padStart(2, '0')}`);
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
