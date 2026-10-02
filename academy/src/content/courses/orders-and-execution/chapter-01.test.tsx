import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { checkContent, snapshotKnownIds, formatReport } from '../../../../build/contentCheck';
import { toCourseOutline } from '../../../../build/courseOutline';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { librarySubjects } from '../../library';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterOneLessons as lessons } from './chapter-01';
import { ordersDefinition } from './index';
import { ordersGlossary } from './glossary';
import known from '../../../../build/published-ids-orders-and-execution.json';

afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'orders-and-execution')!;
const answer = (title: string) => {
  const lesson = lessons.find((entry) => entry.title === title)!;
  const question = lesson.steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!.label;
};

describe('Orders: eigener Kurs und Auftragsfälle', () => {
  it('is available as an independent course and unlocks from its own progress', async () => {
    expect(await ordersDefinition.units[0].load()).toEqual(lessons);
    expect(lessons).toHaveLength(20);
    const entry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(entry.status).toBe('available');
    expect(entry.label).toBe(ordersDefinition.info.eyebrow);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], [])).toBe('available');
    expect(lessonAccessState(outline, lessons[1], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], ['how-exchanges-work.chapter-01.lesson-01'])).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('passes structural validation against the published ID snapshot', () => {
    const report = checkContent({ course, glossary: ordersGlossary, scenarioIds: [], describe: () => '', caseIssues: [], known });
    expect(report.errors, formatReport(report)).toBe(0);
    expect(snapshotKnownIds(course)).toEqual(known);
    expect(JSON.stringify([course, ordersGlossary])).not.toMatch(/Larry Harris|Trading and Exchanges|OceanofPDF|pdfcoffee/);
  });

  it('uses quantity-weighted prices and counts the fee exactly once', () => {
    const fills = [{ quantity: 2, cents: 2000 }, { quantity: 3, cents: 2010 }];
    const quantity = fills.reduce((sum, fill) => sum + fill.quantity, 0);
    const cents = fills.reduce((sum, fill) => sum + fill.quantity * fill.cents, 0);
    expect(answer('Mehrere Preise ergeben einen Durchschnitt')).toBe(`${(cents / quantity / 100).toFixed(2).replace('.', ',')} Euro.`);
    expect(answer('Gebühren zum Kaufwert hinzurechnen')).toBe(`${((cents + 100) / 100).toFixed(2).replace('.', ',')} Euro.`);
    expect(answer('Einen vollständigen Auftrag lesen')).toBe(`${(5 * 2010 / 100).toFixed(2).replace('.', ',')} Euro.`);
  });

  it('distinguishes cancelling the remainder from reversing prior executions', () => {
    expect(answer('Teilausführung: ein Teil ist schon gehandelt')).toBe('Drei Stück.');
    expect(answer('Stornieren ist zunächst eine Bitte')).toBe('Drei Aktien.');
    const executions = [{ quantity: 2, cents: 2000 }, { quantity: 1, cents: 2010 }];
    const bought = executions.reduce((sum, fill) => sum + fill.quantity, 0);
    const charged = executions.reduce((sum, fill) => sum + fill.quantity * fill.cents, 90);
    expect(answer('Abschlussfall: Wunsch, Handel und Rest verbinden')).toBe(`${bought === 3 ? 'Drei' : bought} Aktien gekauft, null Stück offen, ${(charged / 100).toFixed(2).replace('.', ',')} Euro belastet.`);
  });

  it('renders every comparison with accessible headings and full points', () => {
    for (const lesson of lessons) {
      const step = lesson.steps.find((step) => step.type === 'comparison')!;
      render(<ComparisonStep step={step} />);
      for (const column of step.columns) {
        const heading = screen.getByRole('heading', { name: column.title, level: 2 });
        expect(heading).toBeVisible();
        for (const point of column.points) expect(within(heading.parentElement!).getByText(point)).toBeVisible();
      }
      cleanup();
    }
  });
});
