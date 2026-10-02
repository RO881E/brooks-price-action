import type { BarCase } from '../content/barCaseTypes';
import type { CourseOutline, LessonOutline } from '../content/types';
import { caseEntries } from './caseTraining';
import { nextAvailableLesson } from './courseAccess';
import { resumeTarget } from './navigation';
import type { AcademyProgress } from './progress';
import type { DayKey } from './reviewScheduler';
import { dueItems, isSessionFinished, nextDueDay, reviewPool } from './reviewSession';

/*
 * Startansicht „Heute“ (P06): genau eine primäre nächste Aktion aus dem echten
 * Lernstand und darunter Kurzlernen und Fälliges. Reine Auswahl aus
 * vorhandenen Daten – kein eigener Zustand, kein Timer, kein Druck. Jeder
 * Vorschlag führt zu einem zugänglichen Ziel; gesperrte Inhalte kommen nie vor.
 *
 * Reihenfolge der primären Aktion: laufende Wiederholungsrunde, begonnene
 * Lektion, fällige Fragen, nächste Lektion, ein zugänglicher Trainerfall,
 * sonst „alles erledigt“.
 */

export type TodayAction =
  | { kind: 'review-resume'; remaining: number }
  | { kind: 'lesson-resume'; lesson: LessonOutline; stepIndex: number }
  | { kind: 'review-due'; count: number }
  | { kind: 'lesson-next'; lesson: LessonOutline }
  | { kind: 'train'; caseId: string; title: string; resume: boolean }
  | { kind: 'done' };

export interface TodayPlan {
  primary: TodayAction;
  /** Heute fällige Fragen (auch wenn eine andere Aktion Vorrang hat). */
  dueCount: number;
  /** Lektion für heute: die begonnene, sonst die nächste freigeschaltete (für die Startseite). */
  lesson: { lesson: LessonOutline; stepIndex: number | null } | null;
  /** Nächster Tag, an dem Karten fällig werden; nur, wenn heute nichts fällig ist. */
  nextDueDay: DayKey | null;
  /** Eine laufende Wiederholungsrunde mit den noch offenen Fragen. */
  runningRemaining: number | null;
}

export function planToday(
  course: CourseOutline,
  progress: AcademyProgress,
  today: DayKey,
  cases?: readonly BarCase[],
): TodayPlan {
  const pool = reviewPool(course, progress);
  const dueCount = dueItems(pool, progress, today).length;
  const running = progress.reviewSession && !isSessionFinished(progress.reviewSession) ? progress.reviewSession : null;
  const resume = resumeTarget(course, progress);
  const next = nextAvailableLesson(course, progress.completedLessonIds);

  let primary: TodayAction;
  if (running) primary = { kind: 'review-resume', remaining: running.questionIds.length - running.index };
  else if (resume) primary = { kind: 'lesson-resume', lesson: resume.lesson, stepIndex: resume.stepIndex };
  else if (dueCount > 0) primary = { kind: 'review-due', count: dueCount };
  else if (next) primary = { kind: 'lesson-next', lesson: next };
  else {
    const open = caseEntries(course, progress, cases).filter((entry) => entry.state !== 'locked');
    const pick = open.find((entry) => entry.state === 'in-progress') ?? open.find((entry) => entry.state === 'available');
    primary = pick
      ? { kind: 'train', caseId: pick.barCase.id, title: pick.barCase.title, resume: pick.state === 'in-progress' }
      : { kind: 'done' };
  }
  return {
    primary,
    dueCount,
    lesson: resume ? { lesson: resume.lesson, stepIndex: resume.stepIndex } : next ? { lesson: next, stepIndex: null } : null,
    nextDueDay: dueCount === 0 ? nextDueDay(pool, progress, today) : null,
    runningRemaining: running ? running.questionIds.length - running.index : null,
  };
}
