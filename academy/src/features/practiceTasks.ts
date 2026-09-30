import type { CaseBar } from '../content/barCaseTypes';
import type { OrderTask, SignalBarTask, SignalRule } from '../content/practiceTaskTypes';
import { orderTasks, signalBarTasks } from '../content/practiceTasks';
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
  }
}

/** Regeln, bei denen der **erste** Treffer zählt (spätere Bars dürfen ebenfalls passen). */
export const FIRST_MATCH_RULES: readonly SignalRule[] = ['breakout-close', 'first-pause'];

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
