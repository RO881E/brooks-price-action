import type { BarCase } from '../content/barCaseTypes';
import type { CourseOutline, LessonOutline } from '../content/types';
import { caseEntries } from './caseTraining';
import { nextAvailableLesson } from './courseAccess';
import { isoToLocalDay, type AcademyProgress } from './progress';
import type { DayKey } from './reviewScheduler';
import { dueItems, reviewPool } from './reviewSession';

/*
 * Freiwillige Tagesmissionen (P07): kleine Vorschläge aus dem, was gerade
 * verfügbar ist – eine Wiederholungsrunde, eine neue Lektion, ein Chart-Training.
 * Rein abgeleitet: kein neues Zielsystem, kein gespeicherter Zustand, keine
 * Pflicht und keine Strafe. „Erledigt“ ergibt sich allein aus den heutigen,
 * bereits gezählten Lernaktivitäten – Öffnen oder Überspringen zählt nie als
 * Lerntag.
 */

export type MissionKind = 'review' | 'lesson' | 'train';

export interface Mission {
  kind: MissionKind;
  title: string;
  detail: string;
  /** Heute bereits erledigt (aus den gezählten Aktivitäten). */
  done: boolean;
  /** Ziel der Aktion, nur wenn noch etwas zu tun ist. */
  lesson?: LessonOutline;
  caseId?: string;
}

/** Trainerrunde heute abgeschlossen? Nur aus gespeicherten Runden. */
function trainedToday(progress: AcademyProgress, today: DayKey): boolean {
  return Object.values(progress.caseRuns).some((runs) => runs.some((run) => isoToLocalDay(run.completedAt) === today));
}

export function dailyMissions(
  course: CourseOutline,
  progress: AcademyProgress,
  today: DayKey,
  cases?: readonly BarCase[],
): Mission[] {
  const missions: Mission[] = [];
  const activity = progress.dailyActivity[today];

  const due = dueItems(reviewPool(course, progress), progress, today).length;
  const reviewedToday = (activity?.reviewSessions ?? 0) > 0;
  if (due > 0 || reviewedToday) {
    missions.push({
      kind: 'review',
      title: 'Eine Wiederholungsrunde',
      detail: reviewedToday ? 'Heute schon erledigt.' : `${due === 1 ? '1 Frage ist' : `${due} Fragen sind`} fällig.`,
      done: reviewedToday,
    });
  }

  const next = nextAvailableLesson(course, progress.completedLessonIds);
  const learnedToday = (activity?.lessons ?? 0) > 0;
  if (next || learnedToday) {
    missions.push({
      kind: 'lesson',
      title: 'Eine neue Lektion',
      detail: learnedToday ? 'Heute schon erledigt.' : `Als Nächstes: ${next?.title ?? ''}`,
      done: learnedToday,
      ...(next && !learnedToday ? { lesson: next } : {}),
    });
  }

  const open = caseEntries(course, progress, cases).filter((entry) => entry.state !== 'locked');
  const pick = open.find((entry) => entry.state === 'in-progress') ?? open.find((entry) => entry.state === 'available') ?? open[0];
  const doneTrain = trainedToday(progress, today);
  if (pick || doneTrain) {
    missions.push({
      kind: 'train',
      title: 'Ein Chart-Training',
      detail: doneTrain ? 'Heute schon erledigt.' : `Zum Beispiel: ${pick?.barCase.title ?? ''}`,
      done: doneTrain,
      ...(pick && !doneTrain ? { caseId: pick.barCase.id } : {}),
    });
  }
  return missions;
}
