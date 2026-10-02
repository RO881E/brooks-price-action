import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterElevenLessons as lessons } from './chapter-11';
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

describe('Marktgrundlagen: Abwicklung', () => {
  it('loads chapter eleven and unlocks it after 215 preceding lessons', async () => {
    expect(await marketBasicsDefinition.units[10].load()).toEqual(lessons);
    expect(marketBasicsDefinition.units[10].estimatedLessonCount).toBe(24);
    const libraryEntry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(libraryEntry.label).toBe(marketBasicsDefinition.info.eyebrow);
    expect(libraryEntry.description).toContain('Abwicklung');
    const previous = course.units.slice(0, 10).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(previous).toHaveLength(215);
    expect(course.units.slice(0, 11).flatMap((unit) => unit.lessons)).toHaveLength(239);
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
      const key = `how-exchanges-work.chapter-11.lesson-${String(index + 1).padStart(2, '0')}`;
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

  it('computes partial executions, average and once-per-order fees independently', () => {
    const fills = [{ quantity: 2, price: 40 }, { quantity: 3, price: 42 }];
    const quantity = fills.reduce((sum, fill) => sum + fill.quantity, 0);
    const amount = fills.reduce((sum, fill) => sum + fill.quantity * fill.price, 0);
    expect({ quantity, amount, average: amount / quantity, withFee: amount + 2 }).toEqual({ quantity: 5, amount: 206, average: 41.2, withFee: 208 });
    expect(correctAnswer(1).label).toBe('Zwei.');
    expect(points(2)).toContain('Durchschnitt 206 / 5 = 41,20 Euro.');
    expect(correctAnswer(2).label).toBe('206 Euro vor Gebühren.');
    expect(correctAnswer(3).label).toBe('208 Euro.');
    expect(correctAnswer(23).label).toBe('Drei gekauft, 124 Euro Gesamtbelastung; Abwicklung noch offen.');
    expect(2 * 40 + 42 + 2).toBe(124);
  });

  it('keeps product obligations, cash netting and traded volume separate', () => {
    const trades = [{ quantity: 10, price: 20 }, { quantity: -6, price: 21 }];
    const netQuantity = trades.reduce((sum, trade) => sum + trade.quantity, 0);
    const netPayment = trades.reduce((sum, trade) => sum + trade.quantity * trade.price, 0);
    const volume = trades.reduce((sum, trade) => sum + Math.abs(trade.quantity), 0);
    expect({ netQuantity, netPayment, volume }).toEqual({ netQuantity: 4, netPayment: 74, volume: 16 });
    expect(correctAnswer(6).label).toBe('Vier Aktien erhalten.');
    expect(correctAnswer(7).label).toBe('74 Euro.');
    expect(correctAnswer(8).label).toBe('16 Einheiten.');
    expect(correctAnswer(9).label).toContain('verschiedene Produkte');
    expect(points(7)).toContain('200 − 126 = 74 Euro zahlen.');
  });

  it('counts settlement days using the specified calendar rather than elapsed hours', () => {
    const advance = (start: string, count: number, holidays: string[] = []) => {
      const date = new Date(`${start}T00:00:00Z`);
      while (count > 0) {
        date.setUTCDate(date.getUTCDate() + 1);
        const key = date.toISOString().slice(0, 10);
        if (![0, 6].includes(date.getUTCDay()) && !holidays.includes(key)) count--;
      }
      return date.toISOString().slice(0, 10);
    };
    expect(advance('2026-10-05', 1)).toBe('2026-10-06');
    expect(advance('2026-10-02', 1)).toBe('2026-10-05');
    // The holiday is an invented test-calendar entry, not a real holiday claim.
    expect(advance('2026-10-02', 2, ['2026-10-05'])).toBe('2026-10-07');
    expect(correctAnswer(12).label).toContain('Montag');
    expect(correctAnswer(13).label).toContain('Mittwoch');
  });

  it('distinguishes execution, clearing, delivery, role and withdrawal status', () => {
    expect(correctAnswer(0).label).toContain('Handelsgeschäft');
    expect(correctAnswer(4).label).toContain('Feststellen der Pflichten');
    expect(correctAnswer(5).label).toContain('Abwicklungsweg');
    expect(correctAnswer(10).label).toContain('bestätigte Übertragung');
    expect(correctAnswer(11).label).toContain('Zahlung zu verknüpfen');
    expect(correctAnswer(14).label).toContain('Aufzeichnungen');
    expect(correctAnswer(15).label).toContain('unterschiedliche Aufgaben');
    expect(correctAnswer(16).label).toContain('noch nicht auszahlbar');
    expect(correctAnswer(17).label).toContain('nicht erfolgreich');
    expect(correctAnswer(18).label).toContain('keine allgemeine Verlustgrenze');
  });

  it('computes futures value changes while protecting margin and position distinctions', () => {
    const multiplier = 10;
    expect(100 * multiplier).toBe(1000);
    const changes = [103 - 100, 101 - 103].map((delta) => delta * multiplier);
    expect(changes).toEqual([30, -20]);
    expect(changes.reduce((sum, value) => sum + value, 0)).toBe(10);
    expect(correctAnswer(19).label).toContain('anfängliche Sicherheit');
    expect(correctAnswer(20).label).toBe('Plus zehn Euro vor Kosten.');
    expect(points(20)).toContain('Saldo +30 − 20 = +10 Euro vor Kosten.');
    expect(correctAnswer(21).label).toContain('konkreten Vertrags');
    expect(1 - 1).toBe(0);
    expect(correctAnswer(22).label).toContain('ausgeführte Gegengeschäft');
    expect(lessons[20].steps.find((step) => step.type === 'explanation')!.paragraphs.join(' ')).toContain('weiterhin offen');
    expect(marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 11')).toHaveLength(18);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
