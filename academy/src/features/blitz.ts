import type { ReviewItem } from './reviewSession';
import { seededRandom } from './matchPairs';

/*
 * Blitzrunde (Stufe 4c): kurze, freiwillige Runde mit bekannten Fragen. Reine Übung – die
 * Antworten werden nicht gespeichert und verändern weder Wiederholungsplan noch XP, Serie
 * oder Lernstand. Die Zeit ist zuschaltbar: „Ohne Zeit spielen“ ist gleichwertig (WCAG 2.2.1
 * „Zeitvorgaben anpassbar“), eine Pause ist jederzeit möglich.
 */

export const BLITZ_SECONDS = 60;
export const BLITZ_SIZE = 10;
export const BLITZ_MIN_QUESTIONS = 3;

/** Bis zu `size` Fragen aus dem zugänglichen Bestand, deterministisch je Startwert, ohne Doppelte. */
export function blitzQuestions(items: readonly ReviewItem[], seed: number, size: number = BLITZ_SIZE): ReviewItem[] {
  if (items.length < BLITZ_MIN_QUESTIONS) return [];
  const random = seededRandom(seed);
  const list = [...items];
  for (let index = list.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [list[index], list[other]] = [list[other], list[index]];
  }
  return list.slice(0, Math.min(size, list.length));
}

/** Ansage für Screenreader – nur zu wenigen Zeitpunkten, nicht jede Sekunde. */
export function timerAnnouncement(remaining: number): string | null {
  if (remaining === 30) return 'Noch 30 Sekunden.';
  if (remaining === 10) return 'Noch 10 Sekunden.';
  if (remaining === 0) return 'Die Zeit ist um.';
  return null;
}

export interface BlitzResult {
  item: ReviewItem;
  correct: boolean;
}

export function blitzSummary(results: readonly BlitzResult[]): { answered: number; correct: number; wrong: BlitzResult[] } {
  return {
    answered: results.length,
    correct: results.filter((result) => result.correct).length,
    wrong: results.filter((result) => !result.correct),
  };
}
