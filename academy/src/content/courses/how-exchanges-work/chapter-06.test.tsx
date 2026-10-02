import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterSixLessons as lessons } from './chapter-06';
import { marketBasicsDefinition } from './index';
import { marketBasicsGlossary } from './glossary';
import { ComparisonStep } from '../../../components/LessonSteps';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { courseOfLesson } from '../../catalog';
import { librarySubjects } from '../../library';

afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'how-exchanges-work')!;
const comparison = (index: number) => lessons[index].steps.find((step) => step.type === 'comparison')!;
const points = (index: number) => comparison(index).columns.flatMap((column) => column.points);
const correctAnswer = (index: number) => {
  const question = lessons[index].steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!;
};

const asks = [{ price: 101, quantity: 3 }, { price: 102, quantity: 5 }, { price: 104, quantity: 4 }];
const bids = [{ price: 99, quantity: 4 }, { price: 98, quantity: 6 }, { price: 97, quantity: 8 }];
function consume(levels: typeof asks, requested: number) {
  let remaining = requested;
  let total = 0;
  const fills: { price: number; quantity: number }[] = [];
  for (const level of levels) {
    const quantity = Math.min(level.quantity, remaining);
    if (quantity) fills.push({ price: level.price, quantity });
    total += quantity * level.price;
    remaining -= quantity;
    if (!remaining) break;
  }
  return { fills, total, remaining, average: total / (requested - remaining) };
}

describe('Marktgrundlagen: Orderbuch', () => {
  it('loads chapter six and unlocks it only after all 99 preceding lessons', async () => {
    expect(await marketBasicsDefinition.units[5].load()).toEqual(lessons);
    expect(marketBasicsDefinition.units[5].estimatedLessonCount).toBe(24);
    const libraryEntry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(libraryEntry.label).toBe(marketBasicsDefinition.info.eyebrow);
    expect(libraryEntry.description).toContain('Orderbuch');
    const outline = toCourseOutline(course);
    const previous = course.units.slice(0, 5).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(previous).toHaveLength(99);
    expect(course.units.slice(0, 6).flatMap((unit) => unit.lessons)).toHaveLength(123);
    expect(lessonAccessState(outline, lessons[0], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], ['price-action-trends.chapter-01.lesson-01'])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], previous.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], previous)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], previous)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...previous, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('provides 24 stable lessons with complete steps and distinct quiz feedback', () => {
    expect(lessons).toHaveLength(24);
    for (const [index, lesson] of lessons.entries()) {
      const key = `how-exchanges-work.chapter-06.lesson-${String(index + 1).padStart(2, '0')}`;
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

  it('renders each comparison with visible headings and complete example points', () => {
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

  it('checks cumulative quantities and buy/sell averages against the stated book', () => {
    expect(asks.filter((level) => level.price <= 102).reduce((sum, level) => sum + level.quantity, 0)).toBe(8);
    expect(points(5)).toContain('Bis 101: 3; bis 102: 8.');
    const buy = consume(asks, 6);
    expect(buy).toEqual({ fills: [{ price: 101, quantity: 3 }, { price: 102, quantity: 3 }], total: 609, remaining: 0, average: 101.5 });
    expect(points(7)).toContain('6 Einheiten; Preisbetrag 609 Euro.');
    expect(points(7)).toContain('Bei 102 bleiben 2 Einheiten.');
    const sell = consume(bids, 7);
    expect(sell.total).toBe(690);
    expect(sell.average).toBeCloseTo(98.57142857);
    expect(points(8)).toContain('Durchschnitt etwa 98,57; letzter Teilpreis 98.');
    const gapBuy = consume(asks, 10);
    expect(gapBuy.total).toBe(1021);
    expect(gapBuy.average).toBe(102.1);
    expect(gapBuy.fills.map((fill) => fill.price)).toEqual([101, 102, 104]);
    expect(points(9)).toContain('Keine Ausführung bei 103.');
    const finalBuy = consume(asks, 4);
    expect(finalBuy.total).toBe(405);
    expect(finalBuy.average).toBe(101.25);
    expect(points(23)).toContain('Bei 102 bleiben 4 Einheiten.');
  });

  it('protects the limit and the explicitly stated price/time queue examples', () => {
    const limitBuy = consume(asks.filter((level) => level.price <= 101), 4);
    expect(limitBuy.total).toBe(303);
    expect(limitBuy.remaining).toBe(1);
    expect(points(10)).toContain('1 bleibt gültig und wartet.');
    expect(correctAnswer(11).label).toBe('Das Angebot von B zu 101 Euro.');
    // At one price, five units precede our two-unit order in the stated FIFO model.
    const allocatedToUs = (sellQuantity: number) => Math.min(2, Math.max(0, sellQuantity - 5));
    expect(allocatedToUs(4)).toBe(0);
    expect(points(12)).toContain('A kauft 3; B kauft 1; du kaufst 0.');
    expect(allocatedToUs(6)).toBe(1);
    expect(points(13)).toContain('1 deiner 2 Einheiten bleibt offen.');
    expect(points(14)).toContain('Vor dir: 3 Einheiten.');
    expect(points(14)).toContain('Vor dir: 4 Einheiten.');
  });

  it('keeps new orders, cancellations, executions and ambiguous snapshots separate', () => {
    expect(points(15)).toContain('Kein neuer Trade; kein zusätzliches Handelsvolumen.');
    expect(points(16)).toContain('Spread 3 Euro; kein neuer Trade.');
    expect(points(17)).toContain('Handelsliste: 2 zu 101; Volumen 2.');
    expect(points(18)).toContain('2 gehandelt oder 2 storniert.');
    expect(points(18)).toContain('Auch möglich: 3 gehandelt, danach 1 neu.');
    expect(correctAnswer(18).label).toContain('der Ablauf bleibt offen');
  });

  it('checks the stated reserve and scoped imbalance without inferring an owner or direction', () => {
    expect(12 - 4).toBe(8);
    expect(points(19)).toContain('12 − 4 = 8 insgesamt übrig.');
    expect(points(19)).toContain('Jetzt sichtbar 2; Reserve 6.');
    expect(correctAnswer(20).label).toContain('nicht sicher seinen Eigentümer');
    expect(correctAnswer(21).label).toBe('Dort steht im beobachteten Ausschnitt eine große sichtbare Kaufmenge.');
    const bidQuantity = bids.reduce((sum, level) => sum + level.quantity, 0);
    const askQuantity = asks.reduce((sum, level) => sum + level.quantity, 0);
    expect(bidQuantity).toBe(18);
    expect(askQuantity).toBe(12);
    expect(bidQuantity / (bidQuantity + askQuantity)).toBe(0.6);
    expect(points(22)).toContain('Gesamt: 30; Bid-Anteil: 18 / 30 = 60 %.');
    expect(correctAnswer(22).label).toBe('60 % der gezählten sichtbaren Angebotsmenge stehen auf der Bid-Seite.');
    const terms = marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 6').map((entry) => entry.term);
    expect(terms).toHaveLength(17);
    for (const term of ['Orderbuch', 'Markttiefe', 'Zeitvorrang', 'Snapshot', 'Iceberg-Order', 'Market by Order', 'Book Imbalance']) expect(terms).toContain(term);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
