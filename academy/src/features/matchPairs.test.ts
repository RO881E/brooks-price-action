import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { brooksTrendsCourse } from '../content/course';
import { glossaryEntries } from '../content/glossary';
import { buildMatchRound, MATCH_MIN_TERMS, MATCH_ROUND_SIZE, matchTerms, seededRandom } from './matchPairs';
import { completeLesson, createEmptyProgress } from './progress';

const course = toCourseOutline(brooksTrendsCourse);
const firstLessonOf = (label: string) => course.units.find((unit) => unit.label === label)!.lessons.find((lesson) => lesson.status === 'published')!;
const withLesson = (label: string) => {
  const lesson = firstLessonOf(label);
  return completeLesson(createEmptyProgress(), lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z');
};

describe('Begriffe-Memory (Stufe 4b)', () => {
  it('neuer Stand: keine Begriffe, keine Runde', () => {
    const terms = matchTerms(course, createEmptyProgress());
    expect(terms).toEqual([]);
    expect(buildMatchRound(terms, 1)).toEqual({ pairs: [], definitionOrder: [] });
  });

  it('nur Begriffe aus Einheiten mit abgeschlossener Lektion; Beschreibung ist die Glossar-Definition', () => {
    const terms = matchTerms(course, withLesson('Einleitung'));
    expect(terms.length).toBeGreaterThanOrEqual(MATCH_MIN_TERMS);
    expect(terms.every((term) => term.unitLabel === 'Einleitung')).toBe(true);
    for (const term of terms) {
      expect(glossaryEntries.find((entry) => entry.term === term.term)!.definition).toBe(term.definition);
    }
    // „Teil I“ (Glossar) wird der Kurseinheit „Teil I · Price Action“ zugeordnet.
    const part = matchTerms(course, withLesson('Teil I · Price Action'));
    expect(part.length).toBeGreaterThan(0);
    expect(part.every((term) => term.unitLabel === 'Teil I · Price Action')).toBe(true);
  });

  it('Runde: deterministisch, ohne Doppelte, Beschreibungen nie in der Reihenfolge der Begriffe', () => {
    const terms = matchTerms(course, withLesson('Einleitung'));
    const a = buildMatchRound(terms, 42);
    const b = buildMatchRound(terms, 42);
    expect(a).toEqual(b);
    expect(a.pairs).toHaveLength(Math.min(MATCH_ROUND_SIZE, terms.length));
    expect(new Set(a.pairs.map((pair) => pair.term)).size).toBe(a.pairs.length);
    expect([...a.definitionOrder].sort()).toEqual(a.pairs.map((_, index) => index).sort());
    for (let seed = 0; seed < 50; seed += 1) {
      const round = buildMatchRound(terms, seed);
      expect(round.definitionOrder.every((value, index) => value === index)).toBe(false);
    }
  });

  it('zu wenige Begriffe: keine Runde', () => {
    const few = matchTerms(course, withLesson('Einleitung')).slice(0, MATCH_MIN_TERMS - 1);
    expect(buildMatchRound(few, 3).pairs).toEqual([]);
  });

  it('seededRandom liefert reproduzierbare Werte in [0, 1)', () => {
    const first = seededRandom(7);
    const second = seededRandom(7);
    for (let index = 0; index < 20; index += 1) {
      const value = first();
      expect(value).toBe(second());
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(1);
    }
  });
});
