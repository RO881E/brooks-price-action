import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterThreeLessons as lessons } from './chapter-03';
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

describe('Marktgrundlagen: Teilnehmer und Handelsmotive', () => {
  it('loads chapter three independently and requires all preceding lessons for access', async () => {
    expect(await marketBasicsDefinition.units[2].load()).toEqual(lessons);
    expect(course.units[2].lessons).toEqual(lessons);
    const outline = toCourseOutline(course);
    const completed = course.units.slice(0, 2).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(lessonAccessState(outline, lessons[0], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], completed.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], completed)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], completed)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...completed, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('provides complete explanations and individual feedback without source-book references', () => {
    expect(lessons).toHaveLength(22);
    for (const lesson of lessons) {
      expect(JSON.stringify(lesson)).not.toMatch(/Larry Harris|Valdez|Molyneux|Trading and Exchanges|Introduction to Global Financial Markets|pdfcoffee|OceanofPDF/);
      const explanation = lesson.steps.find((step) => step.type === 'explanation')!;
      expect(explanation.paragraphs).toHaveLength(3);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.options.filter((option) => option.id === question.correctOptionId)).toHaveLength(1);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
    }
  });

  it('renders every participant comparison with accessible headings and all points', () => {
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

  it('preserves worked hedge, rebalancing and arbitrage examples', () => {
    expect(comparison(5).columns[0].points).toContain('Ware: 100 × −5 = −500 Euro Erlösänderung.');
    expect(comparison(6).columns[1].points).toContain('−500 + 400 = −100 Euro.');
    expect(comparison(9).columns[1].points).toContain('Aktien: 0,60 × 11.000 = 6.600 Euro.');
    expect(correctAnswer(9).label).toBe('400 Euro.');
    expect(comparison(15).columns[1].points).toContain('1 − 0,60 = +0,40 Euro.');
    expect(comparison(15).columns[1].points).toContain('1 − 1,20 = −0,20 Euro.');
  });

  it('separates an observed buy from its prior position and inferred motive', () => {
    expect(comparison(18).columns[0].points).toContain('Danach 0: Verkaufsposition geschlossen.');
    expect(comparison(18).columns[1].points).toContain('Danach +5: Kaufposition eröffnet.');
    expect(correctAnswer(20).label).toBe('Die ausgeführte Kauftransaktion, nicht das vollständige Motiv.');
    expect(correctAnswer(21).label).toBe('Der Fonds muss seine Gewichtungsgrenze wieder einhalten.');
  });

  it('adds participant vocabulary without altering previous entries or duplicating terms', () => {
    const terms = marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 3').map((entry) => entry.term);
    expect(terms).toHaveLength(16);
    for (const term of ['Zeithorizont', 'Treasury', 'Mandat', 'Rebalancing', 'Dealer', 'Arbitrage', 'Eindecken']) expect(terms).toContain(term);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
