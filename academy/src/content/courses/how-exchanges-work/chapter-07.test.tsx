import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterSevenLessons as lessons } from './chapter-07';
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
const cost = (fills: { quantity: number; price: number }[]) => fills.reduce((sum, fill) => sum + fill.quantity * fill.price, 0);

describe('Marktgrundlagen: Liquidität und Markttiefe', () => {
  it('loads chapter seven and unlocks it after the 123 preceding lessons', async () => {
    expect(await marketBasicsDefinition.units[6].load()).toEqual(lessons);
    expect(marketBasicsDefinition.units[6].estimatedLessonCount).toBe(22);
    const libraryEntry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(libraryEntry.label).toBe(marketBasicsDefinition.info.eyebrow);
    expect(libraryEntry.description).toContain('Liquidität');
    const previous = course.units.slice(0, 6).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(previous).toHaveLength(123);
    expect(course.units.slice(0, 7).flatMap((unit) => unit.lessons)).toHaveLength(145);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], [])).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], previous.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], previous)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], previous)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...previous, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });

  it('provides 22 stable lessons, complete steps and distinct answer feedback', () => {
    expect(lessons).toHaveLength(22);
    for (const [index, lesson] of lessons.entries()) {
      const key = `how-exchanges-work.chapter-07.lesson-${String(index + 1).padStart(2, '0')}`;
      expect(lesson.id).toBe(key);
      expect(lesson.steps.map((step) => step.id)).toEqual(['explain', 'compare', 'question', 'recap'].map((suffix) => `${key}.${suffix}`));
      expect(lesson.steps.map((step) => step.type)).toEqual(['explanation', 'comparison', 'question', 'recap']);
      expect(lesson.steps.find((step) => step.type === 'explanation')!.paragraphs).toHaveLength(3);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.correctOptionId).toBe(`choice-${index % 3}`);
      expect(question.options.filter((option) => option.id === question.correctOptionId)).toHaveLength(1);
      expect(question.options).toHaveLength(3);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
      expect(JSON.stringify(lesson)).not.toMatch(/Larry Harris|Valdez|Molyneux|Trading and Exchanges|Introduction to Global Financial Markets|pdfcoffee|OceanofPDF/);
    }
  });

  it('renders every comparison with accessible headings and all example points', () => {
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

  it('checks relative spread and the single counted round-trip price disadvantage', () => {
    const relativeSpread = (bid: number, ask: number) => (ask - bid) / ((bid + ask) / 2);
    expect(relativeSpread(99.5, 100.5)).toBe(0.01);
    expect(relativeSpread(999.5, 1000.5)).toBe(0.001);
    expect(points(2)).toContain('Spread 1 Euro; 1 / 100 = 1 %.');
    expect(points(2)).toContain('Spread 1 Euro; 1 / 1.000 = 0,1 %.');
    const quantity = 4;
    const roundTrip = quantity * 99 - quantity * 101;
    const againstMid = quantity * (101 - 100) + quantity * (100 - 99);
    expect(roundTrip).toBe(-8);
    expect(againstMid).toBe(-roundTrip);
    expect(points(3)).toContain('396 − 404 = −8 Euro.');
    expect(points(4)).toContain('Nicht zusätzlich noch einmal 8 Euro Spread abziehen.');
    expect(correctAnswer(4).label).toContain('doppelt zählen');
  });

  it('protects the size-dependent venue comparison and directional depth limits', () => {
    const aOne = cost([{ quantity: 1, price: 100 }]);
    const bOne = cost([{ quantity: 1, price: 100.5 }]);
    expect(aOne).toBeLessThan(bOne);
    const aSix = cost([{ quantity: 2, price: 100 }, { quantity: 4, price: 102 }]);
    const bSix = cost([{ quantity: 6, price: 100.5 }]);
    expect(aSix).toBe(608);
    expect(bSix).toBe(603);
    expect(aSix).toBeGreaterThan(bSix);
    expect(points(5)).toContain('Kauf von 6: 608 Euro; Durchschnitt etwa 101,33.');
    expect(points(5)).toContain('Kauf von 6: 603 Euro; Durchschnitt 100,50.');
    expect(correctAnswer(6).label).toContain('am bekannten Bid liegen nur zwei');
    expect(correctAnswer(7).label).toContain('Zugang fehlt');
    expect(correctAnswer(8).label).toContain('keinen Kauf zu 100');
  });

  it('checks unfavorable/favorable benchmark deviations and stated book consumption', () => {
    const buyFour = cost([{ quantity: 2, price: 101 }, { quantity: 2, price: 102 }]);
    expect(buyFour).toBe(406);
    expect(buyFour - 4 * 100).toBe(6);
    expect(points(9)).toContain('4 × 1,50 = 6 Euro über der Referenz.');
    const improvedBuy = cost([{ quantity: 5, price: 100.5 }]);
    expect(5 * 101 - improvedBuy).toBe(2.5);
    expect(points(10)).toContain('2,50 Euro günstiger vor Kosten.');
    const impactBuy = cost([{ quantity: 2, price: 101 }, { quantity: 4, price: 102 }]);
    expect(impactBuy).toBe(610);
    expect(points(11)).toContain('Neuer bester Ask 102 mit 2 Einheiten.');
    expect(correctAnswer(11).label).toContain('Stufe 101 leer');
  });

  it('keeps volume, volatility, unproven causes, time and contract identity separate', () => {
    expect(correctAnswer(12).label).toContain('vergangenes Volumen ersetzt keine aktuelle Menge');
    expect(correctAnswer(13).label).toContain('erreichbaren Angebote');
    expect(points(14)).toContain('Spread: 102 − 98 = 4 Euro; Grund nicht angegeben.');
    expect(correctAnswer(17).label).toContain('In diesen Daten');
    expect(correctAnswer(18).label).toContain('Laufzeit und Vertragsbedingungen');
    const terms = marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 7').map((entry) => entry.term);
    expect(terms).toHaveLength(14);
    for (const term of ['Referenzpreis', 'Slippage', 'Preisverbesserung', 'Handelsvolumen', 'Volatilität', 'Finanzierungsliquidität', 'Transaktionskosten']) expect(terms).toContain(term);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });

  it('checks replenishment, withdrawal, explicit fees and funding shortfall independently', () => {
    expect(6 - 4 + 5).toBe(7);
    expect(points(15)).toContain('2 + 5 = 7 sichtbare Einheiten bei 101.');
    const afterCancel = cost([{ quantity: 1, price: 101 }, { quantity: 2, price: 105 }]);
    expect(afterCancel).toBe(311);
    expect(afterCancel / 3).toBeCloseTo(103.6666667);
    expect(points(16)).toContain('1 × 101 + 2 × 105 = 311 Euro.');
    expect(4 * 103 - 4 * 101 - 3 - 3).toBe(2);
    expect(points(19)).toContain('8 − 6 = 2 Euro nach diesen Gebühren.');
    expect(900 - 500).toBe(400);
    expect(points(20)).toContain('Noch benötigtes Geld: 400 Euro.');
    const finalBuy = cost([{ quantity: 2, price: 50.1 }, { quantity: 2, price: 50.3 }]);
    expect(finalBuy).toBeCloseTo(200.8);
    expect(finalBuy / 4).toBeCloseTo(50.2);
    expect(finalBuy + 1).toBeCloseTo(201.8);
    expect(points(21)).toContain('Mit 1 Euro Gebühr: Ausgabe 201,80 Euro.');
    expect(correctAnswer(21).label).toBe('201,80 Euro.');
  });
});
