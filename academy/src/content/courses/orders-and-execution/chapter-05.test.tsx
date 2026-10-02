import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterFiveLessons as lessons } from './chapter-05';
import { ordersDefinition } from './index';
import { ordersGlossary } from './glossary';
afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'orders-and-execution')!;
const answer = (title: string) => {
  const question = lessons.find((lesson) => lesson.title === title)!.steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!.label;
};
const euro = (cents: number) => `${(cents / 100).toFixed(2).replace('.', ',')} Euro.`;
type Level = { cents: number; quantity: number };
const book: Level[] = [{ cents: 3000, quantity: 2 }, { cents: 3010, quantity: 1 }, { cents: 3020, quantity: 2 }, { cents: 3040, quantity: 5 }];
// Independent oracle for the explicitly supported exercise conditions.
function execute(levels: Level[], wanted: number, limit: number, tif: 'DAY' | 'IOC' | 'FOK' | 'AON', minimum = 0) {
  const eligible = levels.filter((level) => level.cents <= limit).sort((a, b) => a.cents - b.cents);
  const available = eligible.reduce((sum, level) => sum + level.quantity, 0);
  const amount = Math.min(wanted, available);
  const allowed = amount >= minimum && (!(tif === 'FOK' || tif === 'AON') || amount === wanted);
  let rest = allowed ? amount : 0, value = 0;
  for (const level of eligible) {
    const take = Math.min(rest, level.quantity); value += take * level.cents; rest -= take;
  }
  const filled = allowed ? amount : 0;
  const open = tif === 'DAY' || tif === 'AON' ? wanted - filled : 0;
  return { filled, open, ended: wanted - filled - open, value };
}
describe('Time and quantity conditions: chapter five', () => {
  it('loads 22 lessons and unlocks after the existing 86 lessons', async () => {
    expect(await ordersDefinition.units[4].load()).toEqual(lessons);
    expect(lessons).toHaveLength(22);
    expect(course.units.slice(0, 5).flatMap((unit) => unit.lessons)).toHaveLength(108);
    expect(ordersGlossary.filter((entry) => /^Kapitel [1-5]$/.test(entry.firstUnit ?? ''))).toHaveLength(50);
    const prior = course.units.slice(0, 4).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(prior).toHaveLength(86);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], prior.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });
  it('compares DAY, IOC, FOK and AON using the same initial book', () => {
    const day = execute(book, 6, 3020, 'DAY');
    expect(day).toEqual({ filled: 5, open: 1, ended: 0, value: 15050 });
    expect(execute(book, 6, 3020, 'IOC')).toEqual({ ...day, open: 0, ended: 1 });
    expect(execute(book, 6, 3020, 'FOK')).toEqual({ filled: 0, open: 0, ended: 6, value: 0 });
    expect(execute(book, 6, 3020, 'AON')).toEqual({ filled: 0, open: 6, ended: 0, value: 0 });
    expect(answer('Den Hauptauftrag am unveränderten Buch prüfen')).toBe('Fünf Aktien.');
    expect(answer('FOK verlangt sofort die volle Menge')).toBe('Keine Aktie.');
    expect(answer('Vier Bedingungen am selben Ausgangsbuch vergleichen')).toBe('IOC.');
    const original = JSON.stringify(book);
    execute(book, 6, 3020, 'FOK');
    expect(JSON.stringify(book)).toBe(original);
  });
  it('allows full fills at multiple prices and waits for simultaneous AON availability', () => {
    const fok = execute(book, 5, 3020, 'FOK');
    expect(fok.filled).toBe(5);
    expect(answer('Volle Menge bedeutet nicht einen einzigen Preis')).toBe(euro(fok.value));
    const later = execute([...book, { cents: 3020, quantity: 1 }], 6, 3020, 'AON');
    expect(later).toEqual({ filled: 6, open: 0, ended: 0, value: 18070 });
    expect(answer('Eine spätere volle AON-Ausführung durchrechnen')).toBe(euro(later.value));
    const disappeared = execute([{ cents: 3020, quantity: 1 }], 6, 3020, 'AON');
    expect(disappeared.filled).toBe(0);
  });
  it('enforces the stated first-step minimum and permitted individual routes', () => {
    expect(execute(book, 6, 3020, 'IOC', 3).filled).toBe(5);
    const thin = [{ cents: 3000, quantity: 2 }, { cents: 3040, quantity: 5 }];
    expect(execute(thin, 6, 3020, 'IOC', 3)).toEqual({ filled: 0, open: 0, ended: 6, value: 0 });
    expect(answer('Zu kleine Erstmenge erfüllt die Mindestbedingung nicht')).toBe('Keine Aktie.');
    const first = execute(book, 6, 3020, 'DAY', 3);
    const last = execute([{ cents: 3020, quantity: 1 }], first.open, 3020, 'DAY');
    expect(first.value + last.value).toBe(18070);
    expect(answer('Ein kleiner Folgerest braucht seine eigene Regel')).toBe('Ja, die Mindestregel galt nur für den ersten Schritt.');
    for (const route of ['A', 'B']) {
      expect(execute([{ cents: 3000, quantity: 3 }], 6, 3020, 'FOK').filled, route).toBe(0);
    }
    expect(answer('Zulässige Mengen verschiedener Handelswege getrennt prüfen')).toBe('Nein, die beiden Wege dürfen hier nicht zusammengeführt werden.');
  });
  it('preserves completed quantities after expiry and counts the stated fee once', () => {
    const day = execute(book, 6, 3020, 'DAY');
    const final = { ...day, ended: day.open, open: 0 };
    expect(final.filled + final.ended + final.open).toBe(6);
    expect(answer('Ablauf betrifft nur die offene Menge')).toBe('Fünf Aktien.');
    expect(answer('Bedingungen schützen nicht vor allen Kosten')).toBe(euro(day.value + 50));
    const cancelledTooLateValue = day.value + 3020;
    expect(cancelledTooLateValue).toBe(18070);
    expect(answer('Eine Stornierungsanfrage beendet noch nichts sicher')).toBe('Sechs Aktien.');
    expect(answer('Den Hauptfall als Mengenbilanz abschließen')).toBe('Fünf gekauft, eine abgelaufen, null offen, 151,00 Euro belastet.');
    expect(answer('GTD braucht ein eindeutiges Ende')).toBe('Nein, die festgelegte Gültigkeit endet bereits um 15 Uhr.');
  });
  it('renders comparisons and keeps rule limits and distinct feedback explicit', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`orders-and-execution.chapter-05.lesson-${String(index + 1).padStart(2, '0')}`);
      const question = lesson.steps.find((step) => step.type === 'question')!;
      expect(question.correctOptionId).toBe(`choice-${index % 3}`);
      expect(new Set(question.options.map((option) => option.explanation)).size).toBe(3);
      expect(lesson.steps.find((step) => step.type === 'explanation')!.paragraphs).toHaveLength(3);
      const step = lesson.steps.find((step) => step.type === 'comparison')!;
      render(<ComparisonStep step={step} />);
      for (const column of step.columns) {
        const heading = screen.getByRole('heading', { name: column.title, level: 2 });
        expect(heading).toBeVisible();
        for (const point of column.points) expect(within(heading.parentElement!).getByText(point)).toBeVisible();
      }
      cleanup();
    }
    expect(JSON.stringify(lessons.find((lesson) => lesson.title === 'Eine Mindestmenge muss genau definiert sein'))).toContain('Erstschrittregel ist erfunden');
    expect(JSON.stringify(lessons)).not.toMatch(/Larry Harris|Trading and Exchanges|pdfcoffee|OceanofPDF/);
  });
});
