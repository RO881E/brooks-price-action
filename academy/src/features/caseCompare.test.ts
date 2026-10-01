import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { barCases } from '../content/barCases';
import { c02BarCases } from '../content/barCases/c02';
import { priceActionTrendsCourse } from '../content/course';
import { buildComparison, comparableCases } from './caseCompare';
import { completeLesson, createEmptyProgress, type AcademyProgress, type CaseRun } from './progress';

const course = toCourseOutline(priceActionTrendsCourse);
const published = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const everything = published.reduce(
  (progress, lesson) => completeLesson(progress, lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z'),
  createEmptyProgress(),
);
const run = (id: string): CaseRun => ({ sessionId: id, completedAt: '2026-09-28T10:00:00.000Z', best: 1, defensible: 0, mistake: 0, missedCues: 0 });
const withRuns = (...ids: string[]): AcademyProgress => ({
  ...everything,
  caseRuns: Object.fromEntries(ids.map((id, index) => [id, [run(`run-${index}`)]])),
});

describe('Zwei Fälle vergleichen (P09)', () => {
  it('nur abgeschlossene, zugängliche Fälle stehen zur Auswahl', () => {
    expect(comparableCases(course, everything)).toEqual([]);
    const [a, b] = barCases;
    const ids = comparableCases(course, withRuns(a.id, b.id)).map((entry) => entry.barCase.id);
    expect(ids).toEqual([a.id, b.id]);
    // Noch gesperrter Fall (Lektionen nicht abgeschlossen) fällt heraus, auch mit gespeicherter Runde.
    const locked: AcademyProgress = { ...createEmptyProgress(), caseRuns: { [a.id]: [run('run-x')] } };
    expect(comparableCases(course, locked)).toEqual([]);
  });

  it('Transferfälle sind nie vergleichbar', () => {
    const progress = withRuns(...c02BarCases.map((barCase) => barCase.id));
    expect(comparableCases(course, progress)).toEqual([]);
    expect(comparableCases(course, progress, c02BarCases.map((barCase) => ({ ...barCase, status: 'approved' as const })))).toHaveLength(c02BarCases.length);
    // Die Voreinstellung nutzt ausschließlich den gewöhnlichen Trainerpool.
    expect(comparableCases(course, progress).some((entry) => entry.barCase.id.includes('.c02.'))).toBe(false);
  });

  it('Vergleich: beste Wahl, Begründung und Unterschiede aus den Falldaten', () => {
    const [a, b] = barCases;
    const comparison = buildComparison(course, withRuns(a.id, b.id), a.id, b.id);
    expect(comparison.ok).toBe(true);
    if (!comparison.ok) return;
    expect(comparison.a.points).toHaveLength(a.decisions.length);
    for (const point of comparison.a.points) {
      expect(point.decision.options.find((option) => option.decision === point.best)?.verdict).toBe('best');
      expect(point.relevantCues.every((cue) => cue.relevant)).toBe(true);
    }
    expect(comparison.differences.join(' ')).toContain('Entscheidungspunkte');
  });

  it('Probleme: derselbe Fall, ungespielter Fall', () => {
    const [a, b, c] = barCases;
    const progress = withRuns(a.id, b.id);
    expect(buildComparison(course, progress, a.id, a.id)).toEqual({ ok: false, problem: 'same-case' });
    expect(buildComparison(course, progress, a.id, c.id)).toEqual({ ok: false, problem: 'not-comparable' });
  });

  it('schreibt nichts', () => {
    const [a, b] = barCases;
    const progress = withRuns(a.id, b.id);
    const before = JSON.stringify(progress);
    buildComparison(course, progress, a.id, b.id);
    expect(JSON.stringify(progress)).toBe(before);
  });
});
