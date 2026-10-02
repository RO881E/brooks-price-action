import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterTwelveLessons as lessons } from './chapter-12';
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

describe('Marktgrundlagen: Abschlussfälle', () => {
  it('loads chapter twelve and unlocks it after 239 preceding lessons', async () => {
    expect(await marketBasicsDefinition.units[11].load()).toEqual(lessons);
    expect(marketBasicsDefinition.units[11].estimatedLessonCount).toBe(24);
    const libraryEntry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(libraryEntry.label).toBe(marketBasicsDefinition.info.eyebrow);
    expect(libraryEntry.description).toContain('Abschlussfälle');
    const previous = course.units.slice(0, 11).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(previous).toHaveLength(239);
    expect(course.units.slice(0, 12).flatMap((unit) => unit.lessons)).toHaveLength(263);
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
      const key = `how-exchanges-work.chapter-12.lesson-${String(index + 1).padStart(2, '0')}`;
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

  it('computes the main execution, residual depth and alternative limit independently', () => {
    const execute = (limit: number) => {
      let remaining = 5;
      let amount = 0;
      const fills: { quantity: number; price: number }[] = [];
      const book = [{ price: 50, quantity: 2 }, { price: 51, quantity: 4 }];
      for (const ask of book) {
        if (ask.price > limit) break;
        const quantity = Math.min(remaining, ask.quantity);
        remaining -= quantity; amount += quantity * ask.price; ask.quantity -= quantity;
        fills.push({ quantity, price: ask.price });
      }
      return { fills, remaining, amount, book };
    };
    const main = execute(51);
    expect(main.fills).toEqual([{ quantity: 2, price: 50 }, { quantity: 3, price: 51 }]);
    expect(main.amount).toBe(253);
    expect(main.amount / 5).toBe(50.6);
    expect(main.remaining).toBe(0);
    expect(main.book[1].quantity).toBe(1);
    expect(correctAnswer(9).label).toBe('Fünf Aktien für 253 Euro vor Kosten.');
    const limited = execute(50);
    expect(limited.amount).toBe(100);
    expect(limited.remaining).toBe(3);
    expect(correctAnswer(10).label).toBe('Zwei.');
    expect(correctAnswer(8).label).toContain('nur zwei');
    expect(points(9)).toContain('5 für 253 Euro; Durchschnitt 50,60.');
  });

  it('compares full costs on equal inputs and isolates the depth counterfactual', () => {
    const costA = 2 * 50 + 3 * 51 + 2;
    const costB = 5 * 50.8 + 0.5;
    expect(costA).toBe(255);
    expect(costB).toBe(254.5);
    expect(costA - costB).toBe(0.5);
    expect(correctAnswer(11).label).toBe('B mit 254,50 Euro.');
    expect(253 - 5 * 50).toBe(3);
    expect(correctAnswer(15).label).toContain('Menge zu 50');
    expect(correctAnswer(6).label).toContain('aktuelle Stand');
    expect(correctAnswer(4).label).toBe('Ein passendes Angebot und die Ausführungsbedingungen an A.');
    expect(8 + 2).toBe(10);
    expect(correctAnswer(5).label).toContain('für später');
  });

  it('derives the auction and distinguishes individual allocation from its volume', () => {
    const buys = [{ limit: 101, quantity: 4 }];
    const sells = [{ limit: 100, quantity: 2 }, { limit: 101, quantity: 3 }];
    const volumes = [100, 101].map((price) => Math.min(
      buys.filter((order) => order.limit >= price).reduce((sum, order) => sum + order.quantity, 0),
      sells.filter((order) => order.limit <= price).reduce((sum, order) => sum + order.quantity, 0),
    ));
    expect(volumes).toEqual([2, 4]);
    expect(4 * 101).toBe(404);
    expect(correctAnswer(13).label).toBe('Vier Einheiten zu 101.');
    expect(correctAnswer(14).label).toBe('Eine Einheit zu 101.');
    expect(points(14)).toContain('Eigener Betrag 101 Euro; Rest 1 offen.');
    expect(correctAnswer(12).label).toContain('ohne neuen Trade');
  });

  it('checks unit conversion, news comparison and evidence boundaries', () => {
    expect(50 * 10 * 2).toBe(1000);
    expect(correctAnswer(2).label).toContain('Multiplikator');
    expect((49 + 51) / 2).toBe(50);
    expect(correctAnswer(7).label).toContain('berechneter Wert');
    expect(12 - 8).toBe(4);
    expect(12 - 15).toBe(-3);
    expect(correctAnswer(16).label).toContain('plus vier');
    expect(correctAnswer(17).label).toContain('Grund für die Angebotsänderung');
    expect(correctAnswer(18).label).toContain('Menge sind gleich');
    expect(correctAnswer(3).label).toContain('Motiv bleibt offen');
    expect((100 - 99) * 10 * 2).toBe(20);
    expect(99 * 10 * 2).toBe(1980);
    expect(80 * 2).toBe(160);
    expect(correctAnswer(19).label).toBe('Plus 20 Euro vor Kosten.');
  });

  it('computes post-trade obligations and publishes the completed twelve-chapter course', () => {
    expect(253 + 2).toBe(255);
    expect(correctAnswer(20).label).toContain('Lieferung steht noch offen');
    expect(5 - 2).toBe(3);
    expect(253 - 2 * 52 + 2 + 1).toBe(152);
    expect(5 + 2).toBe(7);
    expect(correctAnswer(21).label).toContain('152 Euro');
    expect(correctAnswer(22).label).toContain('offen');
    expect(correctAnswer(23).label).toContain('Merkmale, Einheiten');
    expect(marketBasicsDefinition.units).toHaveLength(12);
    expect(marketBasicsDefinition.info.eyebrow).toContain('Alle 12 Kapitel verfügbar');
    expect(marketBasicsDefinition.info.sourceOrderNotice).toContain('Alle zwölf Kapitel');
    expect(marketBasicsDefinition.info.subtitle).not.toContain('weitere Kapitel folgen');
    const libraryEntry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(libraryEntry.description).not.toContain('Weitere Kapitel folgen');
    const finalText = lessons[23].steps.find((step) => step.type === 'explanation')!.paragraphs.join(' ');
    expect(finalText).toContain('Einführungskurs ist mit diesem Kapitel abgeschlossen');
    expect(marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 12')).toHaveLength(9);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
