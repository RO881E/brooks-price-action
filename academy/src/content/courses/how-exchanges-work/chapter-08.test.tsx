import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { marketBasicsChapterEightLessons as lessons } from './chapter-08';
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

describe('Marktgrundlagen: Preisbewegungen', () => {
  it('loads chapter eight and unlocks it after 145 preceding lessons', async () => {
    expect(await marketBasicsDefinition.units[7].load()).toEqual(lessons);
    expect(marketBasicsDefinition.units[7].estimatedLessonCount).toBe(24);
    const libraryEntry = librarySubjects.flatMap((subject) => subject.courses).find((entry) => entry.id === course.id)!;
    expect(libraryEntry.label).toBe(marketBasicsDefinition.info.eyebrow);
    expect(libraryEntry.description).toContain('Preisbewegungen');
    const previous = course.units.slice(0, 7).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(previous).toHaveLength(145);
    expect(course.units.slice(0, 8).flatMap((unit) => unit.lessons)).toHaveLength(169);
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
      const key = `how-exchanges-work.chapter-08.lesson-${String(index + 1).padStart(2, '0')}`;
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
        for (const point of column.points) expect(screen.getByText(point)).toBeVisible();
      }
      cleanup();
    }
  });

  it('checks both sweep directions and different depth without unequal executed sides', () => {
    expect(2 * 100 + 2 * 101).toBe(402);
    expect(points(1)).toContain('Durchschnitt 100,50; letzter Teilpreis 101.');
    expect(2 * 99 + 2 * 98).toBe(394);
    expect(points(2)).toContain('Durchschnitt 98,50; letzter Teilpreis 98.');
    expect(correctAnswer(2).label).toBe('Vier gekaufte und dieselben vier verkaufte Einheiten.');
    expect(points(3)).toContain('4 gekauft; dieselben 4 verkauft.');
    expect(3 * 100).toBe(300);
    expect(100 + 2 * 103).toBe(306);
    expect(points(8)).toContain('Kauf von 3: 306 Euro; Durchschnitt 102; letzter Teilpreis 103.');
  });

  it('separates quotes, midpoint, cancellations and bid-ask bounce from new information', () => {
    expect(points(0)).toContain('Letzter Trade: weiterhin 100.');
    expect(points(4)).toContain('Kein neuer Trade.');
    expect(points(5)).toContain('Gehandelte Menge in diesem Schritt: 0.');
    expect(99 - 101).toBe(-2);
    expect(points(6)).toContain('Letzter Trade fällt 2; Angebotsmitte bleibt 100.');
    expect((99 + 101) / 2).toBe(100);
    expect((100 + 102) / 2).toBe(101);
    expect(points(7)).toContain('Mitte 101; letzter Trade weiter 99.');
    expect(points(9)).toContain('Bisher nur Angebotsänderungen, kein neuer Trade.');
  });

  it('protects the distinction between growth, surprise, pre-release expectation and revision', () => {
    const previous = 8;
    const expected = 12;
    const actual = 10;
    expect(actual - previous).toBe(2);
    expect(actual - expected).toBe(-2);
    expect(points(10)).toContain('Veränderung: +2 Millionen.');
    expect(points(10)).toContain('Überraschung: −2 Millionen.');
    expect(points(11)).toContain('Erste Meldung: 12; Überraschung +2.');
    expect(correctAnswer(11).label).toBe('Die vor der Meldung gespeicherte 10.');
    expect(lessons[11].steps.find((step) => step.type === 'explanation')!.paragraphs.join(' ')).toContain('Revision');
    expect(correctAnswer(12).label).toContain('andere Angaben können');
    expect(correctAnswer(15).label).toContain('Sicherheit des Ergebnisses');
  });

  it('checks discounted payments, funding flow, position closure and currency conversion separately', () => {
    expect(110 / 1.1).toBeCloseTo(100);
    expect(110 / 1.2).toBeCloseTo(91.6666667);
    expect(points(13)).toContain('Heutiger Modellwert: 110 / 1,10 = 100 Euro.');
    expect(points(13)).toContain('Heutiger Modellwert: 110 / 1,20 ≈ 91,67 Euro.');
    expect(1000 - 400).toBe(600);
    expect(points(16)).toContain('6 × 100 = 600 Euro vor Kosten.');
    expect(points(17)).toContain('Danach 0: Verkaufsposition geschlossen.');
    expect(points(17)).toContain('Danach +3: neue Kaufposition.');
    expect(100 / 1.2).toBeCloseTo(83.3333333);
    expect(100 / 1.25).toBe(80);
    expect(correctAnswer(18).label).toBe('Weil sich die Währungsumrechnung geändert hat.');
  });

  it('checks the auction price change independently from the displayed result', () => {
    const buys = [{ quantity: 4, limit: 100 }];
    const sells = [{ quantity: 2, limit: 100 }, { quantity: 3, limit: 101 }];
    const executable = (price: number, extra: number) => Math.min(
      buys.filter((order) => order.limit >= price).reduce((sum, order) => sum + order.quantity, extra),
      sells.filter((order) => order.limit <= price).reduce((sum, order) => sum + order.quantity, 0),
    );
    expect([100, 101].map((price) => executable(price, 0))).toEqual([2, 0]);
    // The new order allows both candidate prices, so all five units enter each buy-side count.
    expect([100, 101].map((price) => executable(price, 5))).toEqual([2, 5]);
    expect(correctAnswer(19).label).toBe('101 Euro mit fünf handelbaren Einheiten.');
  });

  it('keeps source/time limitations and mixed causes explicit while checking the final execution', () => {
    expect(correctAnswer(20).label).toContain('späteres Angebot an einem anderen Platz');
    expect(correctAnswer(21).label).toContain('Nicht der genaue Beitrag');
    expect(correctAnswer(22).label).toContain('Zeit- und Wissensannahmen');
    expect(101 + 2 * 103).toBe(307);
    expect(307 / 3).toBeCloseTo(102.3333333);
    expect(points(23)).toContain('Bei 103 bleiben 2; Handelsvolumen 3.');
    expect(correctAnswer(23).label).toContain('vollständige Kaufgrund bleibt offen');
    const terms = marketBasicsGlossary.filter((entry) => entry.firstUnit === 'Kapitel 8').map((entry) => entry.term);
    expect(terms).toHaveLength(13);
    for (const term of ['Bid-Ask-Bounce', 'Nachrichtenüberraschung', 'Revision', 'Abzinsen', 'Korrelation', 'Kausalität', 'Informationsstand']) expect(terms).toContain(term);
    expect(new Set(marketBasicsGlossary.map((entry) => entry.term)).size).toBe(marketBasicsGlossary.length);
  });
});
