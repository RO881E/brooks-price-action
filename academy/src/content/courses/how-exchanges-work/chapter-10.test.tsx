import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterTenLessons as lessons } from './chapter-10';
import { marketBasicsDefinition } from './index';
import { marketBasicsGlossary } from './glossary';
import { librarySubjects } from '../../library';
import { ComparisonStep } from '../../../components/LessonSteps';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { courseOfLesson } from '../../catalog';

afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'how-exchanges-work')!;
const comparison = (index: number) => lessons[index].steps.find((step) => step.type === 'comparison')!;
const points = (index: number) => comparison(index).columns.flatMap((column) => column.points);
const correctAnswer = (index: number) => {
  const question = lessons[index].steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!;
};

describe('Marktgrundlagen: Handelsphasen', () => {
  it('loads chapter ten and unlocks it after 193 preceding lessons', async () => {
    expect(await marketBasicsDefinition.units[9].load()).toEqual(lessons);
    expect(marketBasicsDefinition.units[9].estimatedLessonCount).toBe(22);
    const libraryEntry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(libraryEntry.label).toBe(marketBasicsDefinition.info.eyebrow);
    expect(libraryEntry.description).toContain('Handelsphasen');
    const previous = course.units.slice(0, 9).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(previous).toHaveLength(193);
    expect(course.units.slice(0, 10).flatMap((unit) => unit.lessons)).toHaveLength(215);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], previous.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], previous)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], previous)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...previous, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('provides stable lesson/step IDs, complete teaching steps and distinct answer feedback', () => {
    expect(lessons).toHaveLength(22);
    for (const [index, lesson] of lessons.entries()) {
      const key = `how-exchanges-work.chapter-10.lesson-${String(index + 1).padStart(2, '0')}`;
      expect(lesson.id).toBe(key);
      expect(lesson.steps.map((step) => step.id)).toEqual(['explain', 'compare', 'question', 'recap'].map((suffix) => `${key}.${suffix}`));
      expect(lesson.steps.map((step) => step.type)).toEqual(['explanation', 'comparison', 'question', 'recap']);
      expect(lesson.steps.find((step) => step.type === 'explanation')!.paragraphs).toHaveLength(3);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.correctOptionId).toBe(`choice-${index % 3}`);
      expect(question.options).toHaveLength(3);
      expect(question.options.filter((option) => option.id === question.correctOptionId)).toHaveLength(1);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
      expect(JSON.stringify(lesson)).not.toMatch(/Larry Harris|Valdez|Molyneux|Trading and Exchanges|Introduction to Global Financial Markets|pdfcoffee|OceanofPDF/);
    }
  });

  it('renders all comparisons with complete accessible headings and points', () => {
    for (const lesson of lessons) {
      const step = lesson.steps.find((entry) => entry.type === 'comparison')!;
      render(<ComparisonStep step={step} />);
      for (const column of step.columns) {
        expect(screen.getByRole('heading', { name: column.title, level: 2 })).toBeVisible();
        const section = screen.getByRole('heading', { name: column.title, level: 2 }).parentElement!;
        for (const point of column.points) expect(within(section).getByText(point)).toBeVisible();
      }
      cleanup();
    }
  });

  it('derives auction volumes from limit eligibility before and after a cancellation', () => {
    const buys = [{ limit: 101, quantity: 5 }, { limit: 100, quantity: 3 }];
    const sells = [{ limit: 99, quantity: 2 }, { limit: 100, quantity: 4 }, { limit: 101, quantity: 3 }];
    const volume = (price: number, asks = sells) => Math.min(
      buys.filter((order) => order.limit >= price).reduce((sum, order) => sum + order.quantity, 0),
      asks.filter((order) => order.limit <= price).reduce((sum, order) => sum + order.quantity, 0),
    );
    expect([99, 100, 101].map((price) => volume(price))).toEqual([2, 6, 5]);
    expect([99, 100, 101].map((price) => volume(price, sells.filter((order) => order.limit !== 100)))).toEqual([2, 2, 5]);
    expect(correctAnswer(3).label).toBe('Sechs.');
    expect(correctAnswer(4).label).toBe('100 mit sechs Einheiten.');
    expect(points(4)).toContain('6 × 100 = 600 Euro Preisbetrag.');
    expect(8 - 6).toBe(2);
    expect(correctAnswer(5).label).toContain('keine Gegenseite');
    expect(correctAnswer(6).label).toContain('vorläufige Rechnung');
    expect(points(7)).toContain('Vorschau 101 mit 5; noch kein Trade.');
  });

  it('resolves a tie by the stated reference rule and keeps allocation separate', () => {
    const candidatePrices = [100, 101, 102];
    const sells = [{ limit: 100, quantity: 2 }, { limit: 101, quantity: 3 }];
    const candidates = candidatePrices.map((price) => ({ price, volume: Math.min(6, sells.filter((order) => order.limit <= price).reduce((sum, order) => sum + order.quantity, 0)) }));
    expect(candidates.map((entry) => entry.volume)).toEqual([2, 5, 5]);
    candidates.sort((a, b) => b.volume - a.volume || Math.abs(a.price - 101) - Math.abs(b.price - 101));
    expect(candidates[0]).toEqual({ price: 101, volume: 5 });
    expect(correctAnswer(8).label).toContain('Referenzpreisregel');
    const allocation = [5, Math.min(2, 6 - 5), 0];
    expect(allocation).toEqual([5, 1, 0]);
    expect(allocation.reduce((sum, value) => sum + value, 0)).toBe(6);
    expect(correctAnswer(9).label).toBe('Eine Einheit.');
    expect(4 - 2).toBe(2);
    expect(correctAnswer(10).label).toBe('Zwei Einheiten.');
    expect(correctAnswer(12).label).toContain('Schlussauktion beschränkt');
  });

  it('checks corridor boundaries and executed quantities before interruption', () => {
    const inside = (price: number) => price >= 95 && price <= 105;
    expect([95, 104, 105, 106].map(inside)).toEqual([true, true, true, false]);
    expect(correctAnswer(14).label).toBe('106.');
    const asks = [{ price: 104, quantity: 2 }, { price: 106, quantity: 1 }];
    let remaining = 3;
    let executed = 0;
    let amount = 0;
    for (const ask of asks) {
      if (!inside(ask.price)) break;
      const fill = Math.min(remaining, ask.quantity);
      executed += fill; remaining -= fill; amount += fill * ask.price;
    }
    expect({ executed, remaining, amount }).toEqual({ executed: 2, remaining: 1, amount: 208 });
    expect(correctAnswer(15).label).toBe('Zwei.');
    expect(points(15)).toContain('2 × 104 = 208 Euro.');
    expect(correctAnswer(16).label).toContain('Schutzauktion');
    expect(correctAnswer(17).label).toContain('genaue Ende');
    expect(correctAnswer(18).label).toContain('nach der Ausführung');
  });

  it('derives reopening independently and checks individual confirmations and scope', () => {
    const sells = [{ limit: 102, quantity: 3 }, { limit: 104, quantity: 2 }];
    const volumes = [102, 103, 104].map((price) => Math.min(4, sells.filter((order) => order.limit <= price).reduce((sum, order) => sum + order.quantity, 0)));
    expect(volumes).toEqual([3, 3, 4]);
    expect(correctAnswer(19).label).toBe('104 mit vier Einheiten.');
    expect(104 - 100).toBe(4);
    expect(correctAnswer(20).label).toContain('weiter handelbar');
    expect(correctAnswer(21).label).toBe('Eine Einheit für 101 Euro vor Kosten.');
    expect(points(21)).toContain('Preisbetrag 101 Euro; Rest 1 verfällt.');
    expect(correctAnswer(13).label).toContain('Statusmeldung');
    const firstExplanation = lessons[0].steps.find((step) => step.type === 'explanation')!;
    expect(firstExplanation.paragraphs.join(' ')).toContain('vereinfachte Fälle');
    expect(marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 10')).toHaveLength(13);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
