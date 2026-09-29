import { transferCases as registeredTransferCases } from '../content/barCases';
import type { BarCase } from '../content/barCaseTypes';
import type { CourseOutline } from '../content/types';
import { advance, canSubmit, submitDecision, type CaseSession } from './barTrainer';
import { activeSession, beginCaseRun, caseAvailable, caseLockedBy, publishedCases, updateCaseRun } from './caseTraining';
import { buildReplay, type Replay } from './caseReplay';
import type { AcademyProgress } from './progress';

/*
 * Transferprüfung (F-17): ungesehene C-02-Fälle nacheinander ohne Zwischenlösung.
 * Die Prüfung nutzt den vorhandenen Trainer-Speicher (`caseSessions`, `caseRuns`)
 * und schreibt keinen neuen Zustand: Ein Durchlauf ergibt sich aus der Zahl der
 * abgeschlossenen Runden je Fall (Erstversuch = 0 bisherige Runden). Die
 * Auflösung zeigt erst die Auswertung nach dem letzten Fall. Keine XP, keine
 * Trading-Prognose – eine Lernstandsanzeige.
 */

export type TransferStatus =
  /** Kein zugänglicher, freigegebener Transferfall. */
  | 'none'
  /** Noch nie geprüft: Erstversuch bereit. */
  | 'ready'
  /** Ein Durchlauf ist begonnen (auch nach Reload oder Pause). */
  | 'active'
  /** Alle zugänglichen Fälle sind im letzten Durchlauf abgeschlossen. */
  | 'done';

export interface TransferPlan {
  status: TransferStatus;
  /** Freigegebene Transferfälle insgesamt (auch noch gesperrte). */
  approved: number;
  /** Zugängliche freigegebene Fälle in fester Reihenfolge. */
  cases: BarCase[];
  /** Freigegebene, aber noch gesperrte Fälle mit der Lektion, die zuerst fehlt. */
  locked: Array<{ barCase: BarCase; lockedBy: { id: string; title: string } }>;
  /** Nummer des laufenden bzw. nächsten Durchlaufs (1 = Erstversuch). */
  attempt: number;
  /** Fälle, die im laufenden bzw. nächsten Durchlauf noch offen sind. */
  pending: BarCase[];
}

const runsOf = (progress: AcademyProgress, barCase: BarCase) => progress.caseRuns[barCase.id]?.length ?? 0;

export function planTransfer(
  course: CourseOutline,
  progress: AcademyProgress,
  cases: readonly BarCase[] = registeredTransferCases,
): TransferPlan {
  const approved = publishedCases(cases);
  const accessible = approved.filter((barCase) => caseAvailable(course, progress, barCase));
  const locked = approved.flatMap((barCase) => {
    const lockedBy = caseLockedBy(course, progress, barCase);
    return lockedBy ? [{ barCase, lockedBy: { id: lockedBy.id, title: lockedBy.title } }] : [];
  });
  if (accessible.length === 0) {
    return { status: 'none', approved: approved.length, cases: [], locked, attempt: 1, pending: [] };
  }
  const counts = accessible.map((barCase) => runsOf(progress, barCase));
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  const pending = accessible.filter((barCase) => runsOf(progress, barCase) === min);
  const hasSession = accessible.some((barCase) => activeSession(progress, barCase) !== null);
  const status: TransferStatus = max > min || hasSession ? 'active' : min === 0 ? 'ready' : 'done';
  return { status, approved: approved.length, cases: accessible, locked, attempt: min + 1, pending };
}

/** Beginnt den nächsten offenen Fall – eine laufende Runde wird fortgesetzt, nie ersetzt. */
export function beginTransferCase(progress: AcademyProgress, barCase: BarCase): AcademyProgress {
  return activeSession(progress, barCase) ? progress : beginCaseRun(progress, barCase);
}

/** Wählt eine Entscheidung im laufenden Fall (Entwurf, wird mitgespeichert). */
export function updateTransferDraft(
  progress: AcademyProgress,
  barCase: BarCase,
  change: (session: CaseSession) => CaseSession,
): AcademyProgress {
  const session = activeSession(progress, barCase);
  return session ? updateCaseRun(progress, barCase, change(session)) : progress;
}

/**
 * Gibt den aktuellen Punkt ab und geht **ohne Auflösung** zum nächsten Punkt bzw.
 * Fall. Nach dem letzten Punkt wird die Runde wie im Trainer genau einmal
 * gezählt.
 */
export function answerTransferPoint(progress: AcademyProgress, barCase: BarCase): AcademyProgress {
  const session = activeSession(progress, barCase);
  if (!session || !canSubmit(session)) return progress;
  return updateCaseRun(progress, barCase, advance(barCase, submitDecision(barCase, session)));
}

export interface TransferResultEntry {
  barCase: BarCase;
  /** Durchlauf dieses Falls (1 = Erstversuch, sonst Wiederholung). */
  attempt: number;
  replay: Replay;
}

/** Auswertung des letzten abgeschlossenen Durchlaufs – nur, wenn er vollständig ist. */
export function transferResults(
  course: CourseOutline,
  progress: AcademyProgress,
  cases: readonly BarCase[] = registeredTransferCases,
): TransferResultEntry[] {
  const plan = planTransfer(course, progress, cases);
  if (plan.status !== 'done') return [];
  const approved = publishedCases(cases);
  return plan.cases.flatMap((barCase) => {
    const runs = progress.caseRuns[barCase.id] ?? [];
    const last = runs.at(-1);
    if (!last) return [];
    return [{ barCase, attempt: runs.length, replay: buildReplay(course, progress, barCase.id, last.sessionId, approved) }];
  });
}
