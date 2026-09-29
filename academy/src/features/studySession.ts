import type { BarCase } from '../content/barCaseTypes';
import type { CourseOutline, LessonOutline, UnitOutline } from '../content/types';
import { caseEntries } from './caseTraining';
import { nextAvailableLesson } from './courseAccess';
import { resumeTarget } from './navigation';
import type { AcademyProgress } from './progress';
import type { DayKey } from './reviewScheduler';
import { dueItems, isSessionFinished, reviewPool } from './reviewSession';

/*
 * „Kurz lernen“ (F-23): Vorschläge für ungefähr zehn oder zwanzig Minuten –
 * als reine Auswahl aus vorhandenen Fälligkeiten, Freischaltungen und
 * Fortschritten. Kein Timer, keine Restzeit, kein eigener gespeicherter Zustand:
 * Der Plan ergibt sich jederzeit aus dem aktuellen Lernstand. XP, Lerntage und
 * Abschlüsse vergeben allein die vorhandenen Aktionen nach ihren Regeln.
 *
 * Feste Reihenfolge: 1. fällige Wiederholungen (bzw. die laufende Runde),
 * 2. die nächste zugängliche Lektion (eine begonnene zuerst), 3. ein
 * freigegebener, zugänglicher Trainerfall.
 */

export type StudyMinutes = 10 | 20;
export const STUDY_MINUTES: readonly StudyMinutes[] = [10, 20];

/** Höchstzahl fälliger Fragen je Rahmen. */
export const REVIEW_LIMIT: Record<StudyMinutes, number> = { 10: 5, 20: 10 };

export type StudyItem =
  | { kind: 'review-resume'; key: 'review'; remaining: number }
  | { kind: 'review'; key: 'review'; questionIds: string[]; units: UnitOutline[]; totalDue: number }
  | { kind: 'lesson'; key: string; lesson: LessonOutline; unit: UnitOutline; resume: boolean; stepIndex: number }
  | { kind: 'case'; key: string; barCase: BarCase; unitLabel: string; resume: boolean };

export interface StudyPlan {
  minutes: StudyMinutes;
  items: StudyItem[];
}

function unitOf(course: CourseOutline, lessonId: string): UnitOutline | undefined {
  return course.units.find((unit) => unit.lessons.some((lesson) => lesson.id === lessonId));
}

export function planStudySession(
  course: CourseOutline,
  progress: AcademyProgress,
  today: DayKey,
  minutes: StudyMinutes,
  cases?: readonly BarCase[],
): StudyPlan {
  const items: StudyItem[] = [];

  // 1. Wiederholung: eine laufende Runde wird fortgesetzt, sonst die ältesten fälligen Fragen.
  const running = progress.reviewSession;
  if (running && !isSessionFinished(running)) {
    items.push({ kind: 'review-resume', key: 'review', remaining: running.questionIds.length - running.index });
  } else {
    const due = dueItems(reviewPool(course, progress), progress, today);
    const selected = due.slice(0, REVIEW_LIMIT[minutes]);
    if (selected.length) {
      const units = [...new Map(selected.map((item) => [item.unit.id, item.unit])).values()];
      items.push({
        kind: 'review',
        key: 'review',
        questionIds: selected.map((item) => item.question.id),
        units,
        totalDue: due.length,
      });
    }
  }

  // 2. Lektion: eine begonnene, noch offene zuerst, sonst die nächste freigeschaltete.
  const resume = resumeTarget(course, progress);
  const lesson = resume?.lesson ?? nextAvailableLesson(course, progress.completedLessonIds);
  const lessonUnit = lesson ? unitOf(course, lesson.id) : undefined;
  if (lesson && lessonUnit) {
    items.push({
      kind: 'lesson',
      key: `lesson:${lesson.id}`,
      lesson,
      unit: lessonUnit,
      resume: Boolean(resume),
      stepIndex: resume?.stepIndex ?? 0,
    });
  }

  // 3. Trainerfall: bei 20 Minuten immer, bei 10 Minuten nur, wenn sonst weniger als zwei Vorschläge da sind.
  if (minutes === 20 || items.length < 2) {
    const entries = caseEntries(course, progress, cases).filter((entry) => entry.state !== 'locked');
    // Begonnene Runde zuerst, dann noch nie trainierte, dann die am seltensten trainierten.
    const pick =
      entries.find((entry) => entry.state === 'in-progress') ??
      entries.find((entry) => entry.state === 'available') ??
      [...entries].sort((a, b) => a.runs - b.runs)[0];
    if (pick) {
      items.push({
        kind: 'case',
        key: `case:${pick.barCase.id}`,
        barCase: pick.barCase,
        unitLabel: pick.unitLabel,
        resume: pick.state === 'in-progress',
      });
    }
  }

  return { minutes, items };
}

/** Übersprungene Vorschläge ausblenden (nur für die aktuelle Ansicht, nicht gespeichert). */
export function visibleStudyItems(plan: StudyPlan, skipped: ReadonlySet<string>): StudyItem[] {
  return plan.items.filter((item) => !skipped.has(item.key));
}
