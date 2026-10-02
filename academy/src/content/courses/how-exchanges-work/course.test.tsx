import known from '../../../../build/published-ids-how-exchanges-work.json';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterOneLessons as lessons } from './chapter-01';
import { marketBasicsGlossary } from './glossary';
import { marketBasicsDefinition } from './index';
import { checkContent, formatReport } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { ComparisonStep } from '../../../components/LessonSteps';
import { courseOfLesson } from '../../catalog';
import { DEFAULT_COURSE_ID, glossaryFor } from '../../registry';
import { lessonAccessState } from '../../../features/courseAccess';

afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'how-exchanges-work')!;

describe('Trading von null: erstes Kapitel', () => {
  it('registers the independent course and preserves the old default and glossary', async () => {
    expect(DEFAULT_COURSE_ID).toBe('price-action-trends');
    expect(course.units).toHaveLength(7);
    expect(await marketBasicsDefinition.units[0].load()).toEqual(lessons);
    expect(glossaryFor(course.id).entries).toEqual(marketBasicsGlossary);
    expect(glossaryFor(DEFAULT_COURSE_ID).entries).not.toEqual(marketBasicsGlossary);
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('protects durable lesson and step IDs and validates the entire new course', () => {
    const report = checkContent({
      course, glossary: marketBasicsGlossary, scenarioIds: [],
      describe: () => '', caseIssues: [], known,
    });
    expect(report.errors, formatReport(report)).toBe(0);
    expect(lessons).toHaveLength(12);
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`how-exchanges-work.chapter-01.lesson-${String(index + 1).padStart(2, '0')}`);
      expect(lesson.steps.map((step) => step.type)).toEqual(['explanation', 'comparison', 'question', 'recap']);
      expect(lesson.steps.find((step) => step.type === 'explanation')?.paragraphs).toHaveLength(3);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.correctOptionId).toBe(`choice-${index % 3}`);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
    }
  });

  it('unlocks its sequence from its own progress rather than old course progress', () => {
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], [])).toBe('available');
    expect(lessonAccessState(outline, lessons[1], ['price-action-trends.chapter-01.lesson-01'])).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [lessons[0].id])).toBe('available');
  });

  it('renders every comparison with accessible headings and complete example points', () => {
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

  it('preserves worked examples and distinguishes last price from executable offers', () => {
    const spread = lessons[7].steps.find((step) => step.type === 'comparison')!;
    expect(spread.columns[1].points).toContain('Verkauf zu 99: Differenz −2.');
    const book = lessons[8].steps.find((step) => step.type === 'comparison')!;
    expect(book.columns[1].points).toContain('2 × 100 + 1 × 101 = 301.');
    const question = lessons[5].steps.find((step) => step.type === 'question')!;
    expect(question.options.find((option) => option.id === question.correctOptionId)?.label).toContain('aktuellen Angebote');
  });
});
