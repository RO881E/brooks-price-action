import { glossaryEntries, type GlossaryEntry } from '../content/glossary';
import type { CourseOutline } from '../content/types';
import type { AcademyProgress } from './progress';

/*
 * Begriffe-Memory (Stufe 4b): Begriffe den vorhandenen Glossar-Definitionen zuordnen.
 * Kein neuer Fachtext; nur Begriffe aus Einheiten, in denen schon eine Lektion abgeschlossen
 * ist. Reine Übung: kein Einfluss auf XP, Serie, Fälligkeiten oder Lernstand, nichts wird
 * gespeichert.
 */

export const MATCH_MIN_TERMS = 4;
export const MATCH_ROUND_SIZE = 5;

export interface MatchTerm {
  term: string;
  definition: string;
  unitLabel: string;
}

/** Glossar-Einheit („Teil I“) auf Kurseinheit („Teil I · Price Action“) abbilden. */
function unitOf(course: CourseOutline, firstUnit: string) {
  return course.units.find((unit) => unit.label === firstUnit || unit.label.startsWith(`${firstUnit} ·`));
}

/** Zugängliche Begriffe: Einheit mit mindestens einer abgeschlossenen Lektion, ohne doppelte Beschreibungen. */
export function matchTerms(
  course: CourseOutline,
  progress: AcademyProgress,
  entries: readonly GlossaryEntry[] = glossaryEntries,
): MatchTerm[] {
  const completed = new Set(progress.completedLessonIds);
  const open = new Set(
    course.units.filter((unit) => unit.lessons.some((lesson) => completed.has(lesson.id))).map((unit) => unit.id),
  );
  const seenDefinitions = new Set<string>();
  return entries.flatMap((entry): MatchTerm[] => {
    const unit = unitOf(course, entry.firstUnit);
    if (!unit || !open.has(unit.id) || seenDefinitions.has(entry.definition)) return [];
    seenDefinitions.add(entry.definition);
    return [{ term: entry.term, definition: entry.definition, unitLabel: unit.label }];
  });
}

/** Kleiner, deterministischer Zufall (mulberry32) – gleicher Startwert, gleiche Runde. */
export function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled<T>(items: readonly T[], random: () => number): T[] {
  const list = [...items];
  for (let index = list.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [list[index], list[other]] = [list[other], list[index]];
  }
  return list;
}

export interface MatchRound {
  /** Die Paare der Runde (Reihenfolge der Begriffe). */
  pairs: MatchTerm[];
  /** Anzeigereihenfolge der Beschreibungen als Indizes in `pairs`. */
  definitionOrder: number[];
}

/** Baut eine Runde aus bis zu `size` Begriffen; leer, wenn zu wenige Begriffe zugänglich sind. */
export function buildMatchRound(terms: readonly MatchTerm[], seed: number, size: number = MATCH_ROUND_SIZE): MatchRound {
  if (terms.length < MATCH_MIN_TERMS) return { pairs: [], definitionOrder: [] };
  const random = seededRandom(seed);
  const pairs = shuffled(terms, random).slice(0, Math.min(size, terms.length));
  let order = shuffled(pairs.map((_, index) => index), random);
  // Nie in derselben Reihenfolge wie die Begriffe: sonst wäre die Zuordnung geschenkt.
  if (order.every((value, index) => value === index) && pairs.length > 1) order = [...order.slice(1), order[0]];
  return { pairs, definitionOrder: order };
}
