import { barCases as registeredCases } from '../content/barCases';
import type { BarCase } from '../content/barCaseTypes';
import type { AcademyProgress } from './progress';

/*
 * Zusammenfassung für die Fortschrittsansicht (P07): reine Zählwerte aus dem
 * gespeicherten Zustand – dieselben Daten wie die Kacheln darunter, nichts
 * geschätzt und nichts abgeleitet, was nicht gespeichert ist.
 */

export interface ProgressSummary {
  /** Fragen, die mindestens einmal in der Wiederholung beantwortet wurden. */
  reviewedQuestions: number;
  /** Freigegebene Trainerfälle mit mindestens einer abgeschlossenen Runde. */
  trainedCases: number;
  /** Alle freigegebenen Trainerfälle. */
  totalCases: number;
  /** Abgeschlossene Trainerrunden insgesamt. */
  caseRuns: number;
}

export function progressSummary(progress: AcademyProgress, cases: readonly BarCase[] = registeredCases): ProgressSummary {
  const approved = cases.filter((barCase) => barCase.status === 'approved');
  const runs = (id: string) => progress.caseRuns[id]?.length ?? 0;
  return {
    reviewedQuestions: Object.values(progress.reviewCards).filter((card) => card.reviews > 0).length,
    trainedCases: approved.filter((barCase) => runs(barCase.id) > 0).length,
    totalCases: approved.length,
    caseRuns: approved.reduce((sum, barCase) => sum + runs(barCase.id), 0),
  };
}
