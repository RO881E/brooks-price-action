import type { Course } from '../content/types';
import { earnedXp } from './lessonResults';
import type { AcademyProgress, DailyGoal, MilestoneId } from './progress';
import { addDays, daysBetween, type DayKey } from './reviewScheduler';

/* ------------------------------------------------------------------ */
/* Tagesziel                                                           */
/* ------------------------------------------------------------------ */

/**
 * Aktivitäten eines Tages. Ein Tag aus der Lerntageliste ohne Zählwerte
 * (ältere Stände) zählt als genau eine Aktivität – mehr ist nicht belegt.
 */
export function activitiesOn(progress: AcademyProgress, day: DayKey): number {
  const entry = progress.dailyActivity[day];
  const counted = entry ? entry.lessons + entry.reviewSessions : 0;
  return Math.max(counted, progress.activityDays.includes(day) ? 1 : 0);
}

export function xpOn(progress: AcademyProgress, day: DayKey): number {
  return progress.dailyActivity[day]?.xp ?? 0;
}

export interface GoalProgress {
  goal: DailyGoal;
  value: number;
  met: boolean;
  percent: number;
}

export function goalProgress(progress: AcademyProgress, day: DayKey): GoalProgress {
  const goal = progress.dailyGoal;
  const value = goal.kind === 'xp' ? xpOn(progress, day) : activitiesOn(progress, day);
  return {
    goal,
    value,
    met: value >= goal.target,
    percent: Math.min(100, Math.round((value / goal.target) * 100)),
  };
}

export function goalLabel(goal: DailyGoal): string {
  if (goal.kind === 'xp') return `${goal.target} XP`;
  return goal.target === 1 ? '1 Lernaktivität' : `${goal.target} Lernaktivitäten`;
}

/* ------------------------------------------------------------------ */
/* Serie                                                               */
/* ------------------------------------------------------------------ */

export interface StreakStats {
  /** Aufeinanderfolgende Lerntage bis heute – oder bis gestern, solange heute noch offen ist. */
  current: number;
  longest: number;
  activeToday: boolean;
}

function runLengthEndingAt(days: Set<DayKey>, end: DayKey): number {
  let length = 0;
  let cursor = end;
  while (days.has(cursor)) {
    length += 1;
    cursor = addDays(cursor, -1);
  }
  return length;
}

export function streakStats(progress: AcademyProgress, today: DayKey): StreakStats {
  const days = new Set(progress.activityDays.filter((day) => day <= today));
  const activeToday = days.has(today);
  const current = activeToday
    ? runLengthEndingAt(days, today)
    : runLengthEndingAt(days, addDays(today, -1));

  let longest = 0;
  let run = 0;
  let previous: DayKey | null = null;
  for (const day of [...days].sort()) {
    run = previous !== null && daysBetween(previous, day) === 1 ? run + 1 : 1;
    longest = Math.max(longest, run);
    previous = day;
  }

  return { current, longest, activeToday };
}

/* ------------------------------------------------------------------ */
/* Wochenansicht                                                       */
/* ------------------------------------------------------------------ */

export type WeekDayStatus = 'met' | 'active' | 'missed' | 'open' | 'future';

export interface WeekDay {
  day: DayKey;
  label: string;
  status: WeekDayStatus;
  isToday: boolean;
}

const WEEKDAY_LABELS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

/** Montag der Woche, in der `day` liegt. */
export function weekStart(day: DayKey): DayKey {
  const [year, month, date] = day.split('-').map(Number);
  const weekday = (new Date(year, month - 1, date).getDay() + 6) % 7;
  return addDays(day, -weekday);
}

/** Montag bis Sonntag der aktuellen Woche mit Zielstatus je Tag. */
export function weekView(progress: AcademyProgress, today: DayKey): WeekDay[] {
  const monday = weekStart(today);
  return WEEKDAY_LABELS.map((label, index) => {
    const day = addDays(monday, index);
    const isToday = day === today;
    let status: WeekDayStatus;
    if (day > today) status = 'future';
    else if (goalProgress(progress, day).met) status = 'met';
    else if (activitiesOn(progress, day) > 0) status = 'active';
    else status = isToday ? 'open' : 'missed';
    return { day, label, status, isToday };
  });
}

/* ------------------------------------------------------------------ */
/* Meilensteine                                                        */
/* ------------------------------------------------------------------ */

export interface MilestoneDefinition {
  id: MilestoneId;
  title: string;
  description: string;
}

export const MILESTONES: readonly MilestoneDefinition[] = [
  { id: 'first-lesson', title: 'Erste Lektion', description: 'Die erste Lektion abgeschlossen.' },
  {
    id: 'first-chapter',
    title: 'Erster Buchabschnitt',
    description: 'Alle Lektionen eines vollständig veröffentlichten Buchabschnitts abgeschlossen.',
  },
  { id: 'xp-1000', title: '1000 XP', description: '1000 XP aus abgeschlossenen Lektionen gesammelt.' },
  { id: 'seven-days', title: 'Sieben Lerntage', description: 'An sieben verschiedenen Tagen gelernt.' },
  {
    id: 'perfect-review',
    title: 'Fehlerfreie Runde',
    description: 'Eine Wiederholungsrunde vollständig und ohne Fehler beendet.',
  },
];

/** Vergibt einen Meilenstein genau einmal; ein vorhandener bleibt unverändert. */
export function awardMilestone(
  progress: AcademyProgress,
  id: MilestoneId,
  today: DayKey,
): AcademyProgress {
  if (progress.milestones[id]) return progress;
  return { ...progress, milestones: { ...progress.milestones, [id]: { achievedDay: today } } };
}

function hasCompleteUnit(course: Course, progress: AcademyProgress): boolean {
  const completed = new Set(progress.completedLessonIds);
  return course.units.some((unit) => {
    const published = unit.lessons.filter((lesson) => lesson.status === 'published');
    return (
      published.length > 0 &&
      published.length === unit.lessons.length &&
      published.length >= unit.estimatedLessonCount &&
      published.every((lesson) => completed.has(lesson.id))
    );
  });
}

/**
 * Prüft alle zustandsbasierten Meilensteine. Gibt dasselbe Objekt zurück,
 * wenn nichts Neues erreicht wurde – so bleibt die Vergabe idempotent.
 */
export function awardMilestones(
  progress: AcademyProgress,
  course: Course,
  today: DayKey,
): AcademyProgress {
  const published = course.units.flatMap((unit) =>
    unit.lessons.filter((lesson) => lesson.status === 'published'),
  );
  const completed = new Set(progress.completedLessonIds);
  const reached: Record<Exclude<MilestoneId, 'perfect-review'>, boolean> = {
    'first-lesson': published.some((lesson) => completed.has(lesson.id)),
    'first-chapter': hasCompleteUnit(course, progress),
    'xp-1000': earnedXp(progress, published) >= 1000,
    'seven-days': progress.activityDays.filter((day) => day <= today).length >= 7,
  };

  let next = progress;
  for (const [id, done] of Object.entries(reached) as Array<[MilestoneId, boolean]>) {
    if (done) next = awardMilestone(next, id, today);
  }
  return next;
}

export function newMilestones(
  before: AcademyProgress,
  after: AcademyProgress,
): MilestoneDefinition[] {
  return MILESTONES.filter(({ id }) => after.milestones[id] && !before.milestones[id]);
}

export interface MilestoneStatus extends MilestoneDefinition {
  achievedDay: DayKey | null;
}

export interface GoalOverview {
  today: GoalProgress;
  streak: StreakStats;
  week: WeekDay[];
  milestones: MilestoneStatus[];
}

export function goalOverview(progress: AcademyProgress, today: DayKey): GoalOverview {
  return {
    today: goalProgress(progress, today),
    streak: streakStats(progress, today),
    week: weekView(progress, today),
    milestones: MILESTONES.map((milestone) => ({
      ...milestone,
      achievedDay: progress.milestones[milestone.id]?.achievedDay ?? null,
    })),
  };
}
