import { barCases as registeredCases } from '../content/barCases';
import type { BarCase, DecisionCue, DecisionPoint, TradeDecision } from '../content/barCaseTypes';
import type { CourseOutline } from '../content/types';
import { caseAvailable, publishedCases } from './caseTraining';
import type { AcademyProgress } from './progress';

/*
 * Zwei freigegebene Fälle vergleichen (P09): eine ruhige Gegenüberstellung von
 * sichtbarem Kontext, bester Entscheidung und Begründung. Zur Auswahl stehen nur
 * Fälle des gewöhnlichen Trainers, die zugänglich sind **und** von der Person
 * schon abgeschlossen wurden – so verrät der Vergleich keinen ungespielten Fall.
 * Transferfälle (C-02) sind nie dabei. Reine Lesefunktion, schreibt nichts.
 */

export interface ComparableCase {
  barCase: BarCase;
  /** Abgeschlossene Runden (mindestens 1). */
  runs: number;
}

export function comparableCases(
  course: CourseOutline,
  progress: AcademyProgress,
  cases: readonly BarCase[] = registeredCases,
): ComparableCase[] {
  return publishedCases(cases).flatMap((barCase) => {
    const runs = progress.caseRuns[barCase.id]?.length ?? 0;
    return runs > 0 && caseAvailable(course, progress, barCase) ? [{ barCase, runs }] : [];
  });
}

export interface ComparisonPoint {
  decision: DecisionPoint;
  best: TradeDecision;
  /** Relevante Hinweise – die Begründung der besten Wahl. */
  relevantCues: DecisionCue[];
}

export interface ComparisonSide {
  barCase: BarCase;
  points: ComparisonPoint[];
}

export type Comparison =
  | { ok: true; a: ComparisonSide; b: ComparisonSide; differences: string[] }
  | { ok: false; problem: 'same-case' | 'not-comparable' };

const LABELS: Record<TradeDecision, string> = { long: 'Long', short: 'Short', wait: 'Abwarten' };

function side(barCase: BarCase): ComparisonSide {
  return {
    barCase,
    points: barCase.decisions.map((decision) => ({
      decision,
      best: decision.options.find((option) => option.verdict === 'best')!.decision,
      relevantCues: decision.cues.filter((cue) => cue.relevant),
    })),
  };
}

export function buildComparison(
  course: CourseOutline,
  progress: AcademyProgress,
  idA: string,
  idB: string,
  cases: readonly BarCase[] = registeredCases,
): Comparison {
  if (idA === idB) return { ok: false, problem: 'same-case' };
  const pool = comparableCases(course, progress, cases);
  const a = pool.find((entry) => entry.barCase.id === idA)?.barCase;
  const b = pool.find((entry) => entry.barCase.id === idB)?.barCase;
  if (!a || !b) return { ok: false, problem: 'not-comparable' };
  const left = side(a);
  const right = side(b);
  const line = (item: ComparisonSide) => item.points.map((point) => LABELS[point.best]).join(' → ');
  const differences = [
    `Entscheidungspunkte: ${left.points.length} gegenüber ${right.points.length}.`,
    `Beste Wahl im Verlauf: ${line(left)} gegenüber ${line(right)}.`,
    `Bars im Fall: ${a.bars.length} gegenüber ${b.bars.length}.`,
  ];
  return { ok: true, a: left, b: right, differences };
}
