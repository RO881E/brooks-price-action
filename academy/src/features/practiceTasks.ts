import type { CaseBar } from '../content/barCaseTypes';
import type { OrderTask, SignalBarTask, SignalRule } from '../content/practiceTaskTypes';
import { orderTasks, signalBarTasks } from '../content/practiceTasks';
import type { CourseOutline } from '../content/types';
import type { AcademyProgress } from './progress';
import { seededRandom } from './matchPairs';

/*
 * Übungsaufgaben „Finde den Signal-Bar“ und „Ordne die Schritte“ (Stufe 4d, Content-Pack C-04).
 * Reine Übung: kein Einfluss auf XP, Serie, Fälligkeiten oder Lernstand, nichts wird gespeichert.
 * Sichtbar sind nur freigegebene Aufgaben, deren Lektionen alle abgeschlossen sind.
 */

interface Unlockable {
  status: string;
  lessonIds: string[];
}

/** Aufgaben eines Kurses (mehrere Kurse): Ihre Einheit steht in dessen Gliederung. */
export function courseTasks<T extends { unitId: string }>(course: CourseOutline, tasks: readonly T[]): T[] {
  return tasks.filter((task) => course.units.some((unit) => unit.id === task.unitId));
}

export function approvedTasks<T extends Unlockable>(tasks: readonly T[]): T[] {
  return tasks.filter((task) => task.status === 'approved');
}

/** Freigegeben **und** alle zugehörigen Lektionen abgeschlossen. */
export function unlockedTasks<T extends Unlockable>(tasks: readonly T[], progress: AcademyProgress): T[] {
  const completed = new Set(progress.completedLessonIds);
  return approvedTasks(tasks).filter((task) => task.lessonIds.every((id) => completed.has(id)));
}

export const unlockedSignalTasks = (progress: AcademyProgress, tasks: readonly SignalBarTask[] = signalBarTasks) =>
  unlockedTasks(tasks, progress);

export const unlockedOrderTasks = (progress: AcademyProgress, tasks: readonly OrderTask[] = orderTasks) =>
  unlockedTasks(tasks, progress);

/** Nächste Aufgabe, ohne unmittelbare Wiederholung (bei mehr als einer verfügbaren). */
export function nextTaskIndex(count: number, seed: number, previous: number | null): number {
  if (count <= 1) return 0;
  const random = seededRandom(seed);
  let index = Math.floor(random() * count);
  if (index === previous) index = (index + 1) % count;
  return index;
}

/* ---------------------------------------------------------------- Signal-Bar */

const body = (bar: CaseBar) => Math.abs(bar.close - bar.open);
const range = (bar: CaseBar) => bar.high - bar.low;

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

const isTrendUp = (bar: CaseBar) => bar.close > bar.open && body(bar) >= 0.6 * range(bar);
const isInside = (bar: CaseBar, before: CaseBar) => bar.high < before.high && bar.low > before.low;

/**
 * Indizes der Bars, die die Regel erfüllen. Die Regeln sind bewusst einfache, nachrechenbare
 * Näherungen der Lektionsinhalte (relativer Körper, Schlussposition, Bruch früherer Extreme);
 * sie sichern nur, dass Zielbar und Aufgabentext zusammenpassen.
 */
export function ruleMatches(bars: readonly CaseBar[], rule: SignalRule): number[] {
  const medianBody = median(bars.map(body));
  const highestBefore = (index: number) => Math.max(...bars.slice(0, index).map((bar) => bar.high));
  const indices = bars.map((_, index) => index);

  switch (rule) {
    case 'trend-bar-up':
      return indices.filter((i) => {
        const bar = bars[i];
        return isTrendUp(bar) && body(bar) >= 2 * medianBody && bar.high - bar.close <= 0.2 * range(bar);
      });
    case 'trend-bar-down':
      return indices.filter((i) => {
        const bar = bars[i];
        return (
          bar.close < bar.open &&
          body(bar) >= 0.6 * range(bar) &&
          body(bar) >= 2 * medianBody &&
          bar.close - bar.low <= 0.2 * range(bar)
        );
      });
    case 'doji': {
      const medianRange = median(bars.map(range));
      return indices.filter((i) => body(bars[i]) <= 0.15 * range(bars[i]) && range(bars[i]) >= medianRange);
    }
    case 'failed-breakout':
      return indices.filter(
        (i) => i >= 1 && bars[i].high > highestBefore(i) && bars[i].close <= highestBefore(i),
      );
    case 'breakout-close':
      return indices.filter((i) => i >= 1 && bars[i].close > highestBefore(i));
    case 'counter-spike':
      return indices.filter((i) => bars[i].close < bars[i].open && body(bars[i]) >= 1.5 * medianBody);
    case 'climax-bar': {
      const largest = Math.max(...bars.map(range));
      return indices.filter((i) => body(bars[i]) >= 2.5 * medianBody && range(bars[i]) === largest);
    }
    case 'first-pause':
      return indices.filter(
        (i) => i >= 3 && bars.slice(0, i).every(isTrendUp) && (bars[i].close <= bars[i].open || body(bars[i]) < 0.3 * range(bars[i])),
      );
    case 'failed-breakdown': {
      const lowestBefore = (index: number) => Math.min(...bars.slice(0, index).map((bar) => bar.low));
      return indices.filter((i) => i >= 1 && bars[i].low < lowestBefore(i) && bars[i].close >= lowestBefore(i));
    }
    case 'ii-first':
      return indices.filter(
        (i) => i >= 1 && i + 1 < bars.length && isInside(bars[i], bars[i - 1]) && isInside(bars[i + 1], bars[i]),
      );
    case 'bull-reversal-bar': {
      const lowestBefore = (index: number) => Math.min(...bars.slice(0, index).map((bar) => bar.low));
      return indices.filter((i) => {
        const bar = bars[i];
        if (i < 1 || !(bar.low < lowestBefore(i)) || !(bar.close > bar.open) || !(bar.close > bars[i - 1].close)) return false;
        const upperTail = bar.high - bar.close;
        const lowerTail = bar.open - bar.low;
        return (bar.close - bar.low) >= 0.7 * range(bar) && upperTail <= 0.2 * range(bar) && lowerTail >= 0.3 * range(bar);
      });
    }
    case 'shaved-top':
      return indices.filter((i) => bars[i].close > bars[i].open && bars[i].high - bars[i].close <= 0.02 * range(bars[i]));
    case 'outside-bar':
      return indices.filter((i) => i >= 1 && bars[i].high > bars[i - 1].high && bars[i].low < bars[i - 1].low);
    case 'weak-bear-close': {
      const lowestBefore = (index: number) => Math.min(...bars.slice(0, index).map((bar) => bar.low));
      return indices.filter(
        (i) => i >= 1 && bars[i].close < bars[i].open && bars[i].low < lowestBefore(i) && bars[i].close - bars[i].low >= 0.35 * range(bars[i]),
      );
    }
    case 'second-test': {
      const medianRange = median(bars.map(range));
      return indices.filter((i) => {
        if (i < 3) return false;
        const before = bars.slice(0, i).map((bar) => bar.low);
        const lowest = Math.min(...before);
        const lowestAt = before.indexOf(lowest);
        return (
          lowestAt <= i - 2 &&
          bars[i].low >= lowest &&
          bars[i].low - lowest <= 0.25 * medianRange &&
          bars[i].close > bars[i].open
        );
      });
    }
  }
}

/** Regeln, bei denen der **erste** Treffer zählt (spätere Bars dürfen ebenfalls passen). */
export const FIRST_MATCH_RULES: readonly SignalRule[] = ['breakout-close', 'first-pause', 'second-test'];

export function describeSignalBar(bar: CaseBar, index: number): string {
  const direction = bar.close > bar.open ? 'steigend' : bar.close < bar.open ? 'fallend' : 'unverändert';
  return `Bar ${index + 1}: Eröffnung ${bar.open}, Hoch ${bar.high}, Tief ${bar.low}, Schluss ${bar.close}, ${direction}`;
}

/** Rückmeldung zu einem falschen Tipp: gezielter Hinweis, sonst der allgemeine. */
export function signalMissFeedback(task: SignalBarTask, barIndex: number): string {
  const hint = task.hints.find((entry) => entry.barIndex === barIndex);
  return `Das ist nicht der gesuchte Bar. ${hint ? hint.text : task.retryHint}`;
}

/* ------------------------------------------------------------ Schritte ordnen */

/** Gemischte Reihenfolge der Schrittindizes; nie identisch mit der richtigen (ab zwei Schritten). */
export function shuffledOrder(length: number, seed: number): number[] {
  const random = seededRandom(seed);
  const order = Array.from({ length }, (_, index) => index);
  for (let index = order.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [order[index], order[other]] = [order[other], order[index]];
  }
  if (length > 1 && order.every((value, position) => value === position)) {
    [order[0], order[1]] = [order[1], order[0]];
  }
  return order;
}

/** Anzahl der Schritte an der richtigen Stelle. */
export function correctPositions(current: readonly string[], task: OrderTask): boolean[] {
  return current.map((id, position) => task.steps[position]?.id === id);
}

export function moveStep<T>(items: readonly T[], from: number, to: number): T[] {
  if (to < 0 || to >= items.length || from === to) return [...items];
  const next = [...items];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}
