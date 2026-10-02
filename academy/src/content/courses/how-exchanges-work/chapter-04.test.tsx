import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterFourLessons as lessons } from './chapter-04';
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

describe('Marktgrundlagen: Handelsplätze und Ausführungswege', () => {
  it('loads chapter four and requires all three preceding chapters for access', async () => {
    expect(await marketBasicsDefinition.units[3].load()).toEqual(lessons);
    expect(course.units[3].lessons).toEqual(lessons);
    const outline = toCourseOutline(course);
    const complete = course.units.slice(0, 3).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(lessonAccessState(outline, lessons[0], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], complete.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], complete)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], complete)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...complete, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('provides complete original lessons and unique answer feedback', () => {
    expect(lessons).toHaveLength(21);
    for (const lesson of lessons) {
      expect(JSON.stringify(lesson)).not.toMatch(/Larry Harris|Valdez|Molyneux|Trading and Exchanges|Introduction to Global Financial Markets|pdfcoffee|OceanofPDF/);
      expect(lesson.steps.find((step) => step.type === 'explanation')!.paragraphs).toHaveLength(3);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.options.filter((option) => option.id === question.correctOptionId)).toHaveLength(1);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
    }
  });

  it('renders every venue comparison with accessible headings and all points', () => {
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

  it('compares whole quantities and costs instead of the first quoted price', () => {
    expect(comparison(11).columns[0].points).toContain('2 × 100 + 3 × 101 = 503 Euro.');
    expect(comparison(11).columns[1].points).toContain('5 × 100,40 = 502 Euro.');
    expect(correctAnswer(11).label).toBe('Auf Platz B mit insgesamt 502 Euro.');
    expect(comparison(12).columns[0].points).toContain('Gesamtausgabe: 502 Euro.');
    expect(comparison(12).columns[1].points).toContain('Gesamtausgabe: 501 Euro.');
    expect(comparison(13).columns[1].points).toContain('201,40 / 10 = 20,14 Euro je Einheit.');
    expect(comparison(14).columns[1].points).toContain('120 / 1,20 = 100 Euro vor Kosten.');
  });

  it('distinguishes data source, routing access, request and confirmed execution', () => {
    expect(correctAnswer(0).label).toBe('Nein, Datenquelle und Ausführungsort müssen getrennt geprüft werden.');
    expect(correctAnswer(8).label).toBe('Es wurde um Angebote gebeten, noch kein Handel bestätigt.');
    expect(correctAnswer(10).label).toBe('Nein, der Platz muss für den Auftrag tatsächlich erreichbar sein.');
    expect(correctAnswer(15).label).toBe('Nein, Quelle, Zeit, Preisbezug und Bedingungen müssen zuerst geprüft werden.');
    expect(correctAnswer(17).label).toBe('Ihre Preisbedingung und die Ausführungsregeln.');
  });

  it('adds venue vocabulary while preserving distinct terms', () => {
    const terms = marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 4').map((entry) => entry.term);
    expect(terms).toHaveLength(14);
    for (const term of ['Handelsplatz', 'OTC', 'RFQ', 'Orderrouting', 'Teilausführung', 'Latenz', 'Clearing', 'Settlement']) expect(terms).toContain(term);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
