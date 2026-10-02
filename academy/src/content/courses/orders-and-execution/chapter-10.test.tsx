import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterTenLessons as lessons } from './chapter-10';
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
describe('Execution-plan capstone: chapter ten', () => {
  it('loads 24 lessons and unlocks after the existing 196 lessons', async () => {
    expect(await ordersDefinition.units[9].load()).toEqual(lessons);
    expect(lessons).toHaveLength(24);
    expect(course.units.slice(0, 10).flatMap((unit) => unit.lessons)).toHaveLength(220);
    expect(ordersGlossary.filter((entry) => /^Kapitel (?:[1-9]|10)$/.test(entry.firstUnit ?? ''))).toHaveLength(98);
    const prior = course.units.slice(0, 9).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(prior).toHaveLength(196);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], prior.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });
  it('finds the maximum whole-share size within the explicit planning assumptions', () => {
    const budget = 500, perShare = (3010 - 2950) + 10 + 2 * 2, fixed = 2 * 30;
    const maximum = Math.floor((budget - fixed) / perShare);
    expect(maximum).toBe(5);
    expect(maximum * perShare + fixed).toBe(430);
    expect((maximum + 1) * perShare + fixed).toBe(504);
    expect(answer('Die geplante Stückzahl mit einer Gegenprobe bestimmen')).toBe('Fünf Aktien.');
    expect(answer('Den Geldbedarf getrennt vom Preisrisiko prüfen')).toBe(euro(maximum * 3010 + 30 + maximum * 2));
    expect(answer('Gebühren und Preisannahmen vor der Größenrechnung festlegen')).toBe('Eine zusätzliche Preisannahme je Aktie in der Planung.');
  });
  it('matches only limit-eligible offers and conserves bought and cancelled quantities', () => {
    const offers = [{ cents: 3000, quantity: 2 }, { cents: 3010, quantity: 1 }, { cents: 3020, quantity: 4 }];
    const fills = offers.filter((offer) => offer.cents <= 3010);
    const bought = fills.reduce((sum, fill) => sum + fill.quantity, 0);
    const cost = value(fills), fee = 30 + bought * 2;
    expect(bought).toBe(3); expect(cost).toBe(9010); expect(fee).toBe(36);
    expect(answer('Ein Kursbild nur mit seiner Zeit und Menge verwenden')).toBe('Drei Aktien.');
    expect(answer('Den tatsächlichen Teilkauf mengenrichtig buchen')).toBe(euro(cost + fee));
    const cancelled = 5 - bought;
    expect(cancelled).toBe(2); expect(bought + cancelled).toBe(5);
    expect(answer('Den Kaufrest erst nach bestätigtem Storno entfernen')).toBe('Drei Aktien im Bestand, kein offener Kaufrest.');
    expect(answer('Die Ausstiegsmenge an den bestätigten Bestand anpassen')).toBe('Drei Aktien.');
    const reports = [{ id: 'B1', ...fills[0] }, { id: 'B2', ...fills[1] }, { id: 'B1', ...fills[0] }];
    expect(value([...new Map(reports.map((fill) => [fill.id, fill])).values()])).toBe(cost);
    expect(answer('Wiederholte Berichte und Gesamtstände vor dem Abschluss abgleichen')).toBe('Drei Aktien.');
  });
  it('balances the main stop exit without subtracting overlapping price benchmarks again', () => {
    const buy = 2 * 3000 + 3010, sale = value([{ cents: 2945, quantity: 1 }, { cents: 2940, quantity: 2 }]);
    const orderFee = 30 + 3 * 2;
    expect(sale).toBe(8825);
    expect(answer('Die wirklichen Stop-Verkäufe vollständig zusammenrechnen')).toBe(euro(sale - orderFee));
    const loss = buy + orderFee - (sale - orderFee);
    expect(loss).toBe(257);
    expect(answer('Den Hauptverlust aus echten Geldbuchungen bestimmen')).toBe(euro(loss));
    expect(3 * 2950 - sale).toBe(25);
    expect(answer('Den vollständigen Hauptfall selbst abschließen')).toBe('997,43 Euro, Bestand null, alle Orderreste null.');
    expect(100000 - loss).toBe(99743);
    expect(answer('Die Verknüpfungsregel der Ausstiege ausdrücklich lesen')).toBe('Es entfernt den noch offenen Zielzweig.');
    expect(answer('Die Stopauslösung von den Verkaufspreisen trennen')).toBe('Die Aktivierung des beschriebenen Market-Verkaufs.');
  });
  it('keeps target, gap, stop-limit, time and unknown-state alternatives independent', () => {
    const target = 2 * 3070 + 3060, debit = 9010 + 36;
    expect(answer('Einen Zielpfad als eigene Alternative rechnen')).toBe(euro(target - 36 - debit));
    expect(target - 36 - debit).toBe(118);
    const remaining = 3 - 2;
    expect(remaining).toBe(1);
    expect(answer('Teilweise Zielverkäufe verändern die verbleibende Schutzmenge')).toBe('Eine Aktie.');
    const stressedLoss = 5 * 3010 + 40 - (5 * 2850 - 40);
    expect(stressedLoss).toBe(880); expect(stressedLoss).toBeGreaterThan(500);
    expect(answer('Eine Preislücke als Stressfall gegenprüfen')).toBe(euro(stressedLoss));
    expect([{ cents: 2850, quantity: 3 }].filter((bid) => bid.cents >= 2940)).toHaveLength(0);
    expect(answer('Ein Stop-Limit kann den Preis begrenzen und den Ausstieg offen lassen')).toBe('Null Aktien.');
    expect(answer('Eine Frist löscht nicht den verbliebenen Bestand')).toBe('Drei Aktien.');
    expect(answer('Eine unbeantwortete Änderung nicht als wirksam eintragen')).toBe('Als ungeklärt bis zum bestätigten Abgleich.');
    expect(answer('Ablaufqualität und Ergebnisqualität getrennt beurteilen')).toBe('Der Gewinn beseitigt den Mengenfehler nicht.');
  });
  it('renders all comparisons and keeps feedback, model limits and original text explicit', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`orders-and-execution.chapter-10.lesson-${String(index + 1).padStart(2, '0')}`);
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
