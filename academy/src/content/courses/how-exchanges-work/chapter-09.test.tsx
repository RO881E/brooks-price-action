import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterNineLessons as lessons } from './chapter-09';
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

describe('Marktgrundlagen: Handelszeiten', () => {
  it('loads chapter nine and unlocks it after 169 preceding lessons', async () => {
    expect(await marketBasicsDefinition.units[8].load()).toEqual(lessons);
    expect(marketBasicsDefinition.units[8].estimatedLessonCount).toBe(24);
    const libraryEntry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(libraryEntry.label).toBe(marketBasicsDefinition.info.eyebrow);
    expect(libraryEntry.description).toContain('Handelszeiten');
    const previous = course.units.slice(0, 8).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(previous).toHaveLength(169);
    expect(course.units.slice(0, 9).flatMap((unit) => unit.lessons)).toHaveLength(193);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], previous.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], previous)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], previous)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...previous, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('provides stable lesson/step IDs, complete teaching steps and distinct answer feedback', () => {
    expect(lessons).toHaveLength(24);
    for (const [index, lesson] of lessons.entries()) {
      const key = `how-exchanges-work.chapter-09.lesson-${String(index + 1).padStart(2, '0')}`;
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

  it('verifies datumspecific conversions against the runtime timezone database', () => {
    const time = (iso: string, zone: string) => new Intl.DateTimeFormat('en-GB', { timeZone: zone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date(iso));
    const cases = [
      ['2026-01-15T14:30:00Z', '15:30'], ['2026-07-15T14:30:00Z', '16:30'],
      ['2026-03-20T13:30:00Z', '14:30'], ['2026-04-10T13:30:00Z', '15:30'],
      ['2026-10-28T13:30:00Z', '14:30'], ['2026-11-04T14:30:00Z', '15:30'],
    ];
    for (const [iso, expected] of cases) expect(time(iso, 'Europe/Berlin')).toBe(expected);
    for (const iso of ['2026-03-20T13:30:00Z', '2026-04-10T13:30:00Z', '2026-10-28T13:30:00Z', '2026-11-04T14:30:00Z']) expect(time(iso, 'America/New_York')).toBe('09:30');
    expect(points(7)).toContain('Berlin 14:30; Abstand 5 Stunden.');
    expect(points(7)).toContain('Berlin 15:30; Abstand 6 Stunden.');
    expect(correctAnswer(8).label).toBe('14:30.');
    const date = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date('2026-07-15T23:30:00Z'));
    expect(date).toBe('16/07/2026');
    expect(time('2026-07-15T23:30:00Z', 'Europe/Berlin')).toBe('01:30');
    expect(time('2026-07-15T23:30:00Z', 'America/New_York')).toBe('19:30');
    expect(correctAnswer(9).label).toBe('16. Juli 2026.');
    expect(points(20)).toContain('Tagesgruppe 16. Juli.');
  });

  it('checks calendar duration, overlap and arrival delay without inventing execution', () => {
    expect(13 - 8).toBe(5);
    expect(correctAnswer(14).label).toBe('Fünf Stunden.');
    const overlap = Math.max(0, Math.min(12, 16) - Math.max(8, 10));
    expect(overlap).toBe(2);
    expect(points(17)).toContain('Dauer 2 Stunden.');
    expect((Date.parse('2026-07-15T12:00:02Z') - Date.parse('2026-07-15T12:00:00Z')) / 1000).toBe(2);
    expect(correctAnswer(19).label).toBe('Den Empfang in der App.');
    expect(correctAnswer(0).label).toBe('Nur, dass die App erreichbar ist.');
    expect(correctAnswer(10).label).toBe('Montag.');
    expect(correctAnswer(11).label).toContain('Gegenangebote');
    expect(correctAnswer(15).label).toContain('nur das Hauptfenster');
    expect(correctAnswer(21).label).toContain('verfällt');
    expect(correctAnswer(22).label).toContain('Zugang');
    expect(correctAnswer(23).label).toContain('zehn Minuten');
    expect(lessons[0].steps.find((step) => step.type === 'explanation')!.paragraphs.join(' ')).toContain('keine Öffnungszeiten einer echten Börse');
    const terms = marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 9');
    expect(terms).toHaveLength(17);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
