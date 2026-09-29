import type { CourseOutline, LessonOutline } from '../content/types';
import { nextAvailableLesson } from './courseAccess';
import { earnedXp, questionView } from './lessonResults';
import { resumeTarget } from './navigation';
import type { AcademyProgress } from './progress';
import { addDays, type DayKey } from './reviewScheduler';
import { dueItems, reviewPool } from './reviewSession';

/** Ganzzahliger Prozentwert ohne `NaN`, negative Werte oder Werte über 100. */
export function safePercent(part: number, total: number): number {
  if (!Number.isFinite(part) || !Number.isFinite(total) || total <= 0 || part <= 0) return 0;
  return Math.min(100, Math.round((part / total) * 100));
}

function publishedLessons(course: CourseOutline): LessonOutline[] {
  return course.units.flatMap((unit) =>
    unit.lessons.filter((lesson) => lesson.status === 'published'),
  );
}

export interface LessonStats {
  completed: number;
  published: number;
  percent: number;
}

/** Abgeschlossene veröffentlichte Lektionen – veraltete IDs zählen nicht. */
export function lessonStats(course: CourseOutline, progress: AcademyProgress): LessonStats {
  const published = publishedLessons(course);
  const completed = new Set(progress.completedLessonIds);
  const done = published.filter((lesson) => completed.has(lesson.id)).length;
  return { completed: done, published: published.length, percent: safePercent(done, published.length) };
}

export interface FirstAttemptStats {
  /** Fragen mit erfasstem Erstversuch. */
  known: number;
  correct: number;
  /** `null`, solange kein Erstversuch erfasst ist. */
  rate: number | null;
  /** Beantwortete Fragen ohne erfassten Erstversuch (ältere Versionen). */
  unrecorded: number;
}

/** Trefferquote im ersten Lektionsversuch über alle veröffentlichten Fragen. */
export function firstAttemptStats(course: CourseOutline, progress: AcademyProgress): FirstAttemptStats {
  let known = 0;
  let correct = 0;
  let unrecorded = 0;

  for (const lesson of publishedLessons(course)) {
    for (const step of lesson.steps) {
      if (step.type !== 'question') continue;
      const view = questionView(step, progress);
      if (view.firstAttemptCorrect !== null) {
        known += 1;
        if (view.firstAttemptCorrect) correct += 1;
      } else if (view.legacy || step.id in progress.questionResults) {
        unrecorded += 1;
      }
    }
  }

  return { known, correct, rate: known === 0 ? null : safePercent(correct, known), unrecorded };
}

export interface ActivityDay {
  day: DayKey;
  active: boolean;
}

export interface ActivityStats {
  last7: number;
  last30: number;
  /** Die letzten 30 Kalendertage, ältester zuerst, heute zuletzt. */
  days: ActivityDay[];
}

/** Aktive Lerntage in den letzten 7 und 30 lokalen Kalendertagen (inklusive heute). */
export function activityStats(progress: AcademyProgress, today: DayKey): ActivityStats {
  const active = new Set(progress.activityDays);
  const days = Array.from({ length: 30 }, (_, index) => {
    const day = addDays(today, index - 29);
    return { day, active: active.has(day) };
  });

  return {
    last7: days.slice(-7).filter((entry) => entry.active).length,
    last30: days.filter((entry) => entry.active).length,
    days,
  };
}

export interface UnitStats {
  id: string;
  label: string;
  title: string;
  completed: number;
  published: number;
  /** Laut Quellenplan vorgesehene Lektionen. */
  planned: number;
  percent: number;
}

/** Fortschritt je Buchabschnitt, bezogen auf die veröffentlichten Lektionen. */
export function unitStats(course: CourseOutline, progress: AcademyProgress): UnitStats[] {
  const completed = new Set(progress.completedLessonIds);
  return course.units.map((unit) => {
    const published = unit.lessons.filter((lesson) => lesson.status === 'published');
    const done = published.filter((lesson) => completed.has(lesson.id)).length;
    return {
      id: unit.id,
      label: unit.label,
      title: unit.title,
      completed: done,
      published: published.length,
      planned: Math.max(unit.estimatedLessonCount, unit.lessons.length),
      percent: safePercent(done, published.length),
    };
  });
}

export type NextAction =
  | { kind: 'resume'; lesson: LessonOutline; stepIndex: number }
  | { kind: 'review'; due: number }
  | { kind: 'lesson'; lesson: LessonOutline };

/**
 * Empfohlene nächste Schritte, wichtigster zuerst: begonnene Lektion
 * fortsetzen, fällige Wiederholungen, nächste Lektion. Leer, wenn nichts
 * ansteht.
 */
export function nextActions(
  course: CourseOutline,
  progress: AcademyProgress,
  today: DayKey,
): NextAction[] {
  const actions: NextAction[] = [];

  const resume = resumeTarget(course, progress);
  if (resume) actions.push({ kind: 'resume', lesson: resume.lesson, stepIndex: resume.stepIndex });

  const due = dueItems(reviewPool(course, progress), progress, today).length;
  if (due > 0) actions.push({ kind: 'review', due });

  const next = nextAvailableLesson(course, progress.completedLessonIds);
  if (next && next.id !== resume?.lesson.id) actions.push({ kind: 'lesson', lesson: next });

  return actions;
}

export type ProgressState = 'new' | 'active' | 'complete';

export interface ProgressOverview {
  state: ProgressState;
  lessons: LessonStats;
  xp: number;
  firstAttempt: FirstAttemptStats;
  dueToday: number;
  activity: ActivityStats;
  units: UnitStats[];
  /** Abgeschlossene Lektionen ohne erfasstes Abschlussdatum (ältere Versionen). */
  undatedCompletions: number;
  /** Gelesene Kapitel der alten Website. */
  legacyReadChapters: number;
  actions: NextAction[];
}

export function progressOverview(
  course: CourseOutline,
  progress: AcademyProgress,
  today: DayKey,
): ProgressOverview {
  const lessons = lessonStats(course, progress);
  const published = publishedLessons(course);
  const completed = new Set(progress.completedLessonIds);
  const firstAttempt = firstAttemptStats(course, progress);
  const activity = activityStats(progress, today);

  const hasLearningData =
    lessons.completed > 0 ||
    progress.activityDays.length > 0 ||
    firstAttempt.known + firstAttempt.unrecorded > 0;

  return {
    state:
      lessons.published > 0 && lessons.completed === lessons.published
        ? 'complete'
        : hasLearningData
          ? 'active'
          : 'new',
    lessons,
    xp: earnedXp(progress, published),
    firstAttempt,
    dueToday: dueItems(reviewPool(course, progress), progress, today).length,
    activity,
    units: unitStats(course, progress),
    undatedCompletions: published.filter(
      (lesson) =>
        completed.has(lesson.id) && !progress.lessonResults[lesson.id]?.firstCompletedAt,
    ).length,
    legacyReadChapters: progress.legacyReadChapters.length,
    actions: nextActions(course, progress, today),
  };
}
