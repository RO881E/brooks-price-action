import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { baseCourses } from '../../allCourses';
import { courseOfLesson } from '../../catalog';
import { toCourseOutline } from '../../../../build/courseOutline';
import { lessonAccessState } from '../../../features/courseAccess';
import { ComparisonStep } from '../../../components/LessonSteps';
import { ordersChapterFourLessons as lessons } from './chapter-04';
import { ordersDefinition } from './index';
import { ordersGlossary } from './glossary';
afterEach(cleanup);
const course = baseCourses.find((entry) => entry.id === 'orders-and-execution')!;
const answer = (title: string) => {
  const question = lessons.find((lesson) => lesson.title === title)!.steps.find((step) => step.type === 'question')!;
  return question.options.find((option) => option.id === question.correctOptionId)!.label;
};
const euro = (cents: number) => `${(cents / 100).toFixed(2).replace('.', ',')} Euro.`;
// Independent exercise oracle: no live order execution or production matching code.
type Event = { kind: 'trade' | 'bid'; cents: number; source: string; time: number };
function triggers(side: 'buy' | 'sell', stop: number, event: Event) {
  return event.kind === 'trade' && event.source === 'learning' && event.time >= 9 && event.time < 17
    && (side === 'buy' ? event.cents >= stop : event.cents <= stop);
}
function fill(side: 'buy' | 'sell', wanted: number, book: { cents: number; quantity: number }[], limit?: number) {
  let rest = wanted, value = 0;
  for (const level of [...book].sort((a, b) => side === 'buy' ? a.cents - b.cents : b.cents - a.cents)) {
    if (limit !== undefined && (side === 'buy' ? level.cents > limit : level.cents < limit)) continue;
    const amount = Math.min(rest, level.quantity);
    value += amount * level.cents; rest -= amount;
  }
  return { value, rest, filled: wanted - rest };
}
const bids = [{ cents: 5780, quantity: 2 }, { cents: 5750, quantity: 2 }];
describe('Stop and stop-limit: chapter four', () => {
  it('loads 22 lessons and unlocks after all existing 64 lessons', async () => {
    expect(await ordersDefinition.units[3].load()).toEqual(lessons);
    expect(lessons).toHaveLength(22);
    expect(course.units.slice(0, 4).flatMap((unit) => unit.lessons)).toHaveLength(86);
    expect(ordersGlossary).toHaveLength(40);
    const prior = course.units.slice(0, 3).flatMap((unit) => unit.lessons.map((lesson) => lesson.id));
    expect(prior).toHaveLength(64);
    const outline = toCourseOutline(course);
    expect(lessonAccessState(outline, lessons[0], prior.slice(1))).toBe('locked');
    expect(lessonAccessState(outline, lessons[0], prior)).toBe('available');
    expect(lessonAccessState(outline, lessons[1], prior)).toBe('locked');
    expect(lessonAccessState(outline, lessons[1], [...prior, lessons[0].id])).toBe('available');
    for (const lesson of lessons) expect(courseOfLesson(lesson.id)?.id).toBe(course.id);
  });
  it('evaluates inclusive thresholds only for the named source and active window', () => {
    const event: Event = { kind: 'trade', cents: 5800, source: 'learning', time: 12 };
    expect(triggers('sell', 5800, event)).toBe(true);
    expect(triggers('sell', 5800, { ...event, cents: 5790 })).toBe(true);
    expect(triggers('sell', 5800, { ...event, cents: 5810 })).toBe(false);
    expect(triggers('sell', 5800, { ...event, kind: 'bid', cents: 5790 })).toBe(false);
    expect(triggers('sell', 5800, { ...event, source: 'other' })).toBe(false);
    expect(triggers('sell', 5800, { ...event, time: 17.05 })).toBe(false);
    expect(triggers('buy', 6100, { ...event, cents: 6100 })).toBe(true);
    expect(triggers('buy', 6100, { ...event, cents: 6120 })).toBe(true);
    expect(triggers('buy', 6100, { ...event, cents: 6090 })).toBe(false);
    expect(answer('Eine Quote ist nicht automatisch ein Triggertrade')).toBe('Nein, die Regel benötigt einen passenden bestätigten Trade.');
    expect(answer('Gültigkeit und Handelsphase beachten')).toBe('Nein, sie ist nach der Übungsregel nicht mehr aktiv.');
  });
  it('computes the market sell average and both fees without double slippage', () => {
    const actual = fill('sell', 4, bids);
    expect(answer('Den Stop-Market-Hauptfall ausführen')).toBe(euro(actual.value));
    expect(answer('Den Verkaufsdurchschnitt bestimmen')).toBe(euro(actual.value / actual.filled));
    expect(actual.rest).toBe(0);
    const net = actual.value - 80 - 4 * 6000 - 80;
    expect(net).toBe(-1100);
    expect(answer('Der geplante Verlust ist keine Obergrenze')).toBe(`Minus ${euro(-net)}`);
    expect(4 * 5800 - actual.value).toBe(140);
    expect(answer('Den Stopfall mit einem prüfbaren Bericht abschließen')).toBe('Vier verkauft, null Restbestand, minus 11,00 Euro mit Gebühren.');
  });
  it('keeps partially or wholly unfilled stop-limit quantities distinct from the position', () => {
    const first = fill('sell', 4, bids, 5780);
    expect(first).toEqual({ value: 11560, rest: 2, filled: 2 });
    expect(answer('Stop-Limit kann nur teilweise verkaufen')).toBe('Zwei Aktien.');
    const next = fill('sell', first.rest, [{ cents: 5790, quantity: 2 }], 5780);
    expect(first.value + next.value).toBe(23140);
    expect(answer('Nach Auslösung gibt es kein automatisches Zurückwarten')).toBe('Nein, er bleibt im Lernmodell eine aktive Limitorder.');
    const gap = [{ cents: 5490, quantity: 2 }, { cents: 5450, quantity: 2 }];
    expect(answer('Ein Preissprung kann die Abweichung vergrößern')).toBe(euro(fill('sell', 4, gap).value));
    expect(fill('sell', 4, gap, 5780)).toEqual({ value: 0, rest: 4, filled: 0 });
    expect(answer('Ein Stop-Limit kann vollständig ungefüllt bleiben')).toBe('Ausgelöst, null verkauft, vier Aktien noch im Bestand.');
  });
  it('computes buy market and buy limit alternatives on the correct side', () => {
    const asks = [{ cents: 6130, quantity: 1 }, { cents: 6150, quantity: 2 }];
    const market = fill('buy', 3, asks);
    expect(answer('Auch beim Kaufstop zählt die spätere Verkaufsmenge')).toBe(euro(market.value));
    expect(market).toEqual({ value: 18430, rest: 0, filled: 3 });
    expect(fill('buy', 3, asks, 6140)).toEqual({ value: 6130, rest: 2, filled: 1 });
    expect(answer('Das Kauf-Stop-Limit begrenzt nach oben')).toBe('Eine Aktie.');
  });
  it('renders comparisons and keeps simplified rules and distinct feedback explicit', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.id).toBe(`orders-and-execution.chapter-04.lesson-${String(index + 1).padStart(2, '0')}`);
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
    expect(JSON.stringify(lessons.find((lesson) => lesson.title === 'Unsere Auslösequelle ausdrücklich festlegen'))).toContain('ausdrücklich unser Modell');
    expect(JSON.stringify(lessons)).not.toMatch(/John.*Murphy|Trading and Exchanges|Larry Harris|pdfcoffee|OceanofPDF/);
  });
});
