import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterFiveLessons as lessons } from './chapter-05';
import { marketBasicsDefinition } from './index';
import { marketBasicsGlossary } from './glossary';
import { ComparisonStep } from '../../../components/LessonSteps';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { courseOfLesson } from '../../catalog';

afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'how-exchanges-work')!;
const comparison = (index: number) => lessons[index].steps.find((step) => step.type === 'comparison')!;
const correctAnswer = (index: number) => {
  const question = lessons[index].steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!;
};

describe('Marktgrundlagen: Auktionsprozess', () => {
  it('loads chapter five and requires all four preceding chapters', async () => {
    expect(await marketBasicsDefinition.units[4].load()).toEqual(lessons);
    const outline = toCourseOutline(course);
    const complete = course.units.slice(0, 4).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(lessonAccessState(outline, lessons[0], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], complete.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], complete)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], complete)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...complete, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('provides original explanations and distinct answer feedback', () => {
    expect(lessons).toHaveLength(20);
    for (const lesson of lessons) {
      expect(JSON.stringify(lesson)).not.toMatch(/Larry Harris|Valdez|Molyneux|Trading and Exchanges|Introduction to Global Financial Markets|pdfcoffee|OceanofPDF/);
      expect(lesson.steps.find((step) => step.type === 'explanation')!.paragraphs).toHaveLength(3);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.options.filter((option) => option.id === question.correctOptionId)).toHaveLength(1);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
    }
  });

  it('renders all comparisons with accessible headings and complete points', () => {
    for (const lesson of lessons) {
      const step = lesson.steps.find((entry) => entry.type === 'comparison')!;
      render(<ComparisonStep step={step} />);
      for (const column of step.columns) {
        expect(screen.getByRole('heading', { name: column.title, level: 2 })).toBeVisible();
        for (const point of column.points) expect(screen.getByText(point)).toBeVisible();
      }
      cleanup();
    }
  });

  it('preserves quantity and weighted-price examples in both directions', () => {
    expect(comparison(3).columns[1].points).toContain('2 Einheiten gehandelt; Preisbetrag 200 Euro.');
    expect(comparison(4).columns[1].points).toContain('3 ausgeführt; 2 bleiben wartend.');
    expect(comparison(8).columns[1].points).toContain('2 × 100 + 2 × 101 = 402 Euro.');
    expect(comparison(9).columns[1].points).toContain('2 × 99 + 2 × 98 = 394 Euro.');
    expect(correctAnswer(19).label).toBe('Vier Einheiten, 402 Euro Preisbetrag und 100,50 Euro Durchschnitt.');
  });

  it('checks the stated single-price model against its submitted orders and amended demand', () => {
    const buys = [{ quantity: 2, limit: 102 }, { quantity: 3, limit: 101 }, { quantity: 4, limit: 100 }];
    const sells = [{ quantity: 3, limit: 99 }, { quantity: 4, limit: 101 }, { quantity: 2, limit: 102 }];
    const executable = (price: number, extraBuy = 0) => Math.min(
      buys.filter((order) => order.limit >= price).reduce((sum, order) => sum + order.quantity, extraBuy),
      sells.filter((order) => order.limit <= price).reduce((sum, order) => sum + order.quantity, 0),
    );
    expect([100, 101, 102].map((price) => executable(price))).toEqual([3, 5, 2]);
    expect(comparison(14).columns[1].points).toContain('Auktionspreis 101 Euro; fünf gehandelte Einheiten.');
    expect(comparison(14).columns[1].points).toContain('Preisbetrag: 5 × 101 = 505 Euro.');
    expect(comparison(15).columns[1].points).toContain('2 erlaubte Verkaufseinheiten ab 101 bleiben übrig.');
    expect([100, 101, 102].map((price) => executable(price, 4))).toEqual([3, 7, 6]);
    expect(correctAnswer(16).label).toBe('Die mögliche Menge steigt auf sieben; der Kandidat bleibt bei 101.');
  });

  it('distinguishes quote improvement, cancellation, trade and uncertain value', () => {
    expect(correctAnswer(6).label).toBe('Nein, im Beispiel verbessert sich nur das Kaufangebot.');
    expect(correctAnswer(7).label).toBe('Keine.');
    expect(correctAnswer(17).label).toBe('Dass ein entsprechender Austausch zustande kam.');
    expect(correctAnswer(18).label).toBe('Nein, erst eine neue Ausführung verändert den letzten Trade.');
    const terms = marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 5').map((entry) => entry.term);
    expect(terms).toHaveLength(10);
    for (const term of ['Auktion', 'Sammelauktion', 'Preisgrenze', 'Stornierung', 'Auktionspreis', 'Zuteilung']) expect(terms).toContain(term);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
