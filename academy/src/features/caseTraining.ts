import { barCases as registeredCases } from '../content/barCases';
import type { BarCase } from '../content/barCaseTypes';
import type { CourseOutline, LessonOutline } from '../content/types';
import {
  caseSummary,
  restoreSession,
  sessionProgress,
  startSession,
  type CaseSession,
  type SessionProgress,
} from './barTrainer';
import { lessonAccessState } from './courseAccess';
import { tidyCaseRuns, type AcademyProgress, type CaseRun } from './progress';

/*
 * Bar-für-Bar-Trainer (F-15): welche Fälle angeboten werden, in welchem
 * Zustand sie sind und wie Runden gespeichert werden. Reine Funktionen – die
 * Oberfläche (`TrainerView`) ruft sie auf, die Engine bleibt `barTrainer.ts`.
 *
 * Verhalten bei Abbruch/Reload: Eine begonnene Runde wird exakt fortgesetzt
 * (gespeichert nach jeder Aktion). Passt sie nicht mehr zum Fall, wird sie
 * nicht repariert; die Oberfläche bietet dann ausdrücklich einen Neustart an.
 * Abgeschlossene Runden werden gezählt, vergeben aber keine XP.
 */

/** Nur fachlich freigegebene Fälle werden angezeigt. */
export function publishedCases(cases: readonly BarCase[] = registeredCases): BarCase[] {
  return cases.filter((barCase) => barCase.status === 'approved');
}

export function findPublishedCase(caseId: string, cases: readonly BarCase[] = registeredCases): BarCase | undefined {
  return publishedCases(cases).find((barCase) => barCase.id === caseId);
}

function findLesson(course: CourseOutline, lessonId: string): LessonOutline | undefined {
  for (const unit of course.units) {
    const lesson = unit.lessons.find((item) => item.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

function canOpenLesson(course: CourseOutline, lesson: LessonOutline, progress: AcademyProgress): boolean {
  const state = lessonAccessState(course, lesson, progress.completedLessonIds);
  return state === 'available' || state === 'complete';
}

/**
 * Erste Lektion des Falls, die noch nicht zugänglich ist – `undefined`, wenn
 * alle zugeordneten Lektionen bereits geöffnet werden können. Unbekannte
 * Lektionen sperren den Fall.
 */
export function caseLockedBy(
  course: CourseOutline,
  progress: AcademyProgress,
  barCase: BarCase,
): LessonOutline | { id: string; title: string } | undefined {
  for (const lessonId of barCase.lessonIds) {
    const lesson = findLesson(course, lessonId);
    if (!lesson) return { id: lessonId, title: 'eine noch nicht veröffentlichte Lektion' };
    if (!canOpenLesson(course, lesson, progress)) return lesson;
  }
  return undefined;
}

export function caseAvailable(course: CourseOutline, progress: AcademyProgress, barCase: BarCase): boolean {
  return caseLockedBy(course, progress, barCase) === undefined;
}

export type CaseState = 'locked' | 'available' | 'in-progress' | 'completed';

export interface CaseEntry {
  barCase: BarCase;
  state: CaseState;
  unitLabel: string;
  /** Bei gesperrten Fällen: die Lektion, die zuerst erreicht werden muss. */
  lockedBy?: { id: string; title: string };
  /** Bei begonnenen Runden: aktueller Stand. */
  progress?: SessionProgress;
  runs: number;
}

/** Laufende Runde eines Falls – nur, wenn sie noch exakt zum Fall passt. */
export function activeSession(progress: AcademyProgress, barCase: BarCase): CaseSession | null {
  const stored = progress.caseSessions[barCase.id];
  return stored ? restoreSession(barCase, stored.session) : null;
}

export function caseEntries(
  course: CourseOutline,
  progress: AcademyProgress,
  cases: readonly BarCase[] = registeredCases,
): CaseEntry[] {
  return publishedCases(cases).map((barCase) => {
    const unit = course.units.find((item) => item.id === barCase.unitId);
    const runs = progress.caseRuns[barCase.id]?.length ?? 0;
    const base = { barCase, unitLabel: unit?.label ?? barCase.unitId, runs };
    const lockedBy = caseLockedBy(course, progress, barCase);
    if (lockedBy) return { ...base, state: 'locked', lockedBy: { id: lockedBy.id, title: lockedBy.title } };
    const session = activeSession(progress, barCase);
    if (session && !session.finished) {
      return { ...base, state: 'in-progress', progress: sessionProgress(barCase, session) };
    }
    return { ...base, state: runs > 0 ? 'completed' : 'available' };
  });
}

/** Zugängliche, freigegebene Fälle zu einer Lektion – für „Chart trainieren“-Links. */
export function casesForLesson(
  course: CourseOutline,
  progress: AcademyProgress,
  lessonId: string,
  cases: readonly BarCase[] = registeredCases,
): BarCase[] {
  return publishedCases(cases).filter(
    (barCase) => barCase.lessonIds.includes(lessonId) && caseAvailable(course, progress, barCase),
  );
}

/* ------------------------------------------------------------------ */
/* Runden speichern                                                    */
/* ------------------------------------------------------------------ */

/** Stabile, zufällige Runden-ID. */
export function newSessionId(random: () => number = Math.random): string {
  const uuid = globalThis.crypto?.randomUUID?.();
  if (uuid) return `run-${uuid}`;
  return `run-${Date.now().toString(36)}-${Math.floor(random() * 1e9).toString(36)}`;
}

/** Beginnt eine neue Runde und ersetzt eine vorhandene (nach Bestätigung in der Oberfläche). */
export function beginCaseRun(
  progress: AcademyProgress,
  barCase: BarCase,
  sessionId: string = newSessionId(),
  now: string = new Date().toISOString(),
): AcademyProgress {
  return {
    ...progress,
    caseSessions: {
      ...progress.caseSessions,
      [barCase.id]: { sessionId, startedAt: now, updatedAt: now, session: startSession(barCase) },
    },
  };
}

/**
 * Speichert den neuen Zustand der laufenden Runde. Ist die Runde damit
 * beendet, wird sie genau einmal als abgeschlossen gezählt (Schlüssel:
 * `sessionId`) und aus den laufenden Runden entfernt.
 */
export function updateCaseRun(
  progress: AcademyProgress,
  barCase: BarCase,
  session: CaseSession,
  now: string = new Date().toISOString(),
): AcademyProgress {
  const stored = progress.caseSessions[barCase.id];
  if (!stored || session.caseId !== barCase.id) return progress;
  if (!session.finished) {
    return {
      ...progress,
      caseSessions: { ...progress.caseSessions, [barCase.id]: { ...stored, updatedAt: now, session } },
    };
  }
  const summary = caseSummary(barCase, session);
  const run: CaseRun = {
    sessionId: stored.sessionId,
    completedAt: now,
    best: summary.counts.best,
    defensible: summary.counts.defensible,
    mistake: summary.counts.mistake,
    missedCues: summary.missedCues,
    // Einzelantworten für die Fehlerübersicht (F-16).
    answers: Object.fromEntries(
      Object.entries(session.answers).map(([decisionId, answer]) => [
        decisionId,
        { decision: answer.decision, cueIds: [...answer.cueIds] },
      ]),
    ),
  };
  const { [barCase.id]: _finished, ...caseSessions } = progress.caseSessions;
  const previous = progress.caseRuns[barCase.id] ?? [];
  return {
    ...progress,
    caseSessions,
    caseRuns: { ...progress.caseRuns, [barCase.id]: tidyCaseRuns([...previous, run]) },
  };
}

/** Bricht eine laufende Runde ab, ohne sie zu zählen. */
export function discardCaseRun(progress: AcademyProgress, caseId: string): AcademyProgress {
  if (!(caseId in progress.caseSessions)) return progress;
  const { [caseId]: _discarded, ...caseSessions } = progress.caseSessions;
  return { ...progress, caseSessions };
}

/** Letzte abgeschlossene Runde eines Falls. */
export function lastCaseRun(progress: AcademyProgress, caseId: string): CaseRun | undefined {
  return progress.caseRuns[caseId]?.at(-1);
}
