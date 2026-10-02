import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterOneLessons } from './chapter-01';
import { marketBasicsChapterTwoLessons as lessons } from './chapter-02';
import { marketBasicsDefinition } from './index';
import { marketBasicsGlossary } from './glossary';
import { ComparisonStep } from '../../../components/LessonSteps';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { courseOfLesson } from '../../catalog';

afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'how-exchanges-work')!;
const comparison = (index: number) => lessons[index].steps.find((step) => step.type === 'comparison')!;

describe('Marktgrundlagen: Produktarten', () => {
  it('loads chapter two through the registry and unlocks it only after its own preceding lesson', async () => {
    expect(await marketBasicsDefinition.units[1].load()).toEqual(lessons);
    expect(course.units[1].lessons).toEqual(lessons);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], ['price-action-trends.chapter-01.lesson-01'])).toBe('locked');
    const chapterOneComplete = marketBasicsChapterOneLessons.map((lesson) => lesson.id);
    expect(lessonAccessState(outline, lessons[0], chapterOneComplete.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], chapterOneComplete)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], [...chapterOneComplete, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('provides complete lessons, a correct answer and individual feedback without source-book references', () => {
    expect(lessons).toHaveLength(24);
    for (const lesson of lessons) {
      const text = JSON.stringify(lesson);
      expect(text).not.toMatch(/Valdez|Molyneux|OceanofPDF|pdfcoffee|Introduction to Global Financial Markets/);
      expect(lesson.steps.find((step) => step.type === 'explanation')!.paragraphs).toHaveLength(3);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.options.filter((option) => option.id === question.correctOptionId)).toHaveLength(1);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
    }
  });

  it('renders all product comparisons with complete points and accessible headings', () => {
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

  it('keeps the price, income, tick-value and FX examples consistent', () => {
    expect(comparison(2).columns[1].points).toContain('43 − 40 + 1 = 4 Euro.');
    expect(comparison(4).columns[1].points).toContain('30 / 950 ≈ 3,16 % laufende Verzinsung.');
    expect(comparison(6).columns[1].points).toContain('98.000 / 1.000 = 98 Euro.');
    expect(comparison(21).columns[1].points).toContain('3 × 8 × 0,50 = 12 Euro.');
    expect(comparison(22).columns[1].points).toContain('120 / 1,25 = 96 Euro.');
  });

  it('distinguishes margin from maximum loss and call value from net profit', () => {
    expect(comparison(15).columns[1].points).toContain('−300 Punkte × 2 Euro = −600 Euro.');
    const margin = lessons[15].steps.find((step) => step.type === 'question')!;
    expect(margin.options.find((option) => option.id === margin.correctOptionId)!.label).toBe('Die Margin-Zahl allein tut das nicht.');
    expect(comparison(17).columns[0].points).toContain('Ergebnis: 2 − 3 = −1 Euro.');
    expect(comparison(17).columns[1].points).toContain('Ergebnis: 5 − 3 = +2 Euro.');
  });

  it('introduces product vocabulary in the course-specific glossary', () => {
    const terms = marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 2').map((entry) => entry.term);
    for (const term of ['Aktie', 'Anleihe', 'Kupon', 'ETF', 'Index', 'Derivat', 'Future', 'Margin', 'Option', 'CFD', 'Tickwert', 'Währungsrisiko']) expect(terms).toContain(term);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
