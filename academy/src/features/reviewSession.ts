import type { Course, CourseUnit, Lesson } from '../content/types';
import { questionView, type QuestionStep } from './lessonResults';
import { awardMilestone } from './goals';
import {
  logActivity,
  type AcademyProgress,
  type ReviewMode,
  type ReviewSession,
} from './progress';
import {
  addDays,
  isDue,
  localDayKey,
  scheduleReview,
  shuffle,
  type DayKey,
} from './reviewScheduler';

/** Höchstzahl an Fragen pro Runde. */
export const REVIEW_SESSION_SIZE = 10;

export interface ReviewItem {
  question: QuestionStep;
  lesson: Lesson;
  unit: CourseUnit;
  /** Position in der Buchreihenfolge über alle Fragen. */
  order: number;
}

/**
 * Alle wiederholbaren Fragen in Buchreihenfolge: nur aus veröffentlichten,
 * bereits abgeschlossenen Lektionen – so verrät die Wiederholung nichts aus
 * Lektionen, die noch vor dem Nutzer liegen.
 */
export function reviewPool(course: Course, progress: AcademyProgress): ReviewItem[] {
  const completed = new Set(progress.completedLessonIds);
  const items: ReviewItem[] = [];

  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      if (lesson.status !== 'published' || !completed.has(lesson.id)) continue;
      for (const step of lesson.steps) {
        if (step.type === 'question') {
          items.push({ question: step, lesson, unit, order: items.length });
        }
      }
    }
  }

  return items;
}

/**
 * Fälligkeitstag einer Frage. Noch nie wiederholte Fragen werden am Tag nach
 * dem letzten Lektionsabschluss fällig; Abschlüsse ohne Datum (ältere
 * Versionen) sofort.
 */
export function dueDayFor(item: ReviewItem, progress: AcademyProgress, today: DayKey): DayKey {
  const card = progress.reviewCards[item.question.id];
  if (card) return card.dueDay;

  const completedAt = progress.lessonResults[item.lesson.id]?.lastCompletedAt;
  const completedDate = completedAt ? new Date(completedAt) : null;
  if (!completedDate || Number.isNaN(completedDate.getTime())) return today;
  return addDays(localDayKey(completedDate), 1);
}

/** Heute fällige Fragen, die am längsten überfälligen zuerst. */
export function dueItems(
  items: ReviewItem[],
  progress: AcademyProgress,
  today: DayKey,
): ReviewItem[] {
  return items
    .map((item) => ({ item, dueDay: dueDayFor(item, progress, today) }))
    .filter(({ dueDay }) => isDue(dueDay, today))
    .sort((a, b) => a.dueDay.localeCompare(b.dueDay) || a.item.order - b.item.order)
    .map(({ item }) => item);
}

/**
 * Offene Fehler: in der Wiederholung zuletzt falsch beantwortet oder – noch
 * ohne Wiederholung – in der Lektion im ersten Versuch falsch bzw. nur über die
 * aufgedeckte Lösung erledigt.
 */
export function hasOpenMistake(item: ReviewItem, progress: AcademyProgress): boolean {
  const card = progress.reviewCards[item.question.id];
  if (card) return card.lastResult === 'wrong';

  const view = questionView(item.question, progress);
  return view.firstAttemptCorrect === false || view.status === 'revealed';
}

export function mistakeItems(items: ReviewItem[], progress: AcademyProgress): ReviewItem[] {
  return items.filter((item) => hasOpenMistake(item, progress));
}

export function unitItems(items: ReviewItem[], unitId: string): ReviewItem[] {
  return items.filter((item) => item.unit.id === unitId);
}

/** Frühester künftiger Fälligkeitstag – für den Zustand „alles erledigt“. */
export function nextDueDay(
  items: ReviewItem[],
  progress: AcademyProgress,
  today: DayKey,
): DayKey | null {
  const upcoming = items
    .map((item) => dueDayFor(item, progress, today))
    .filter((day) => !isDue(day, today))
    .sort();
  return upcoming[0] ?? null;
}

export interface StartOptions {
  today: DayKey;
  random: () => number;
  unitId?: string;
  size?: number;
}

/** Stellt eine Runde zusammen; `null`, wenn der Modus keine Fragen hat. */
export function buildSession(
  mode: ReviewMode,
  items: ReviewItem[],
  progress: AcademyProgress,
  options: StartOptions,
): ReviewSession | null {
  const size = options.size ?? REVIEW_SESSION_SIZE;
  let selection: ReviewItem[];

  switch (mode) {
    case 'due':
      selection = dueItems(items, progress, options.today);
      break;
    case 'mistakes':
      selection = mistakeItems(items, progress);
      break;
    case 'unit':
      selection = options.unitId ? unitItems(items, options.unitId) : [];
      break;
    case 'mixed':
      selection = shuffle(items, options.random);
      break;
  }

  const questionIds = selection.slice(0, size).map((item) => item.question.id);
  if (questionIds.length === 0) return null;

  return {
    mode,
    unitId: mode === 'unit' ? (options.unitId ?? null) : null,
    questionIds,
    index: 0,
    answers: {},
    startedDay: options.today,
    activityRecorded: false,
  };
}

export function startSession(
  progress: AcademyProgress,
  session: ReviewSession | null,
): AcademyProgress {
  return session ? { ...progress, reviewSession: session } : progress;
}

export function currentSessionItem(
  session: ReviewSession,
  items: ReviewItem[],
): ReviewItem | undefined {
  const id = session.questionIds[session.index];
  return items.find((item) => item.question.id === id);
}

/**
 * Entfernt Fragen, die es nicht mehr gibt oder die nicht mehr wiederholbar
 * sind. Eine dadurch leere Runde wird verworfen.
 */
export function sanitizeSession(
  progress: AcademyProgress,
  items: ReviewItem[],
): AcademyProgress {
  const session = progress.reviewSession;
  if (!session) return progress;

  const available = new Set(items.map((item) => item.question.id));
  const questionIds = session.questionIds.filter((id) => available.has(id));
  if (questionIds.length === session.questionIds.length) return progress;
  if (questionIds.length === 0) return { ...progress, reviewSession: null };

  const answered = session.questionIds
    .slice(0, session.index)
    .filter((id) => available.has(id)).length;

  return {
    ...progress,
    reviewSession: {
      ...session,
      questionIds,
      index: Math.min(answered, questionIds.length),
      answers: Object.fromEntries(
        Object.entries(session.answers).filter(([id]) => available.has(id)),
      ),
    },
  };
}

/**
 * Beantwortet die aktuelle Frage der Runde und aktualisiert sofort den Plan.
 * Eine bereits beantwortete Frage (z. B. nach Reload) wird nicht erneut gewertet.
 */
export function answerReview(
  progress: AcademyProgress,
  question: QuestionStep,
  optionId: string,
  today: DayKey,
): AcademyProgress {
  const session = progress.reviewSession;
  if (!session || session.questionIds[session.index] !== question.id) return progress;
  if (session.answers[question.id] !== undefined) return progress;
  if (!question.options.some((option) => option.id === optionId)) return progress;

  const correct = optionId === question.correctOptionId;

  return {
    ...progress,
    reviewCards: {
      ...progress.reviewCards,
      [question.id]: scheduleReview(progress.reviewCards[question.id], correct, today),
    },
    reviewSession: {
      ...session,
      answers: { ...session.answers, [question.id]: optionId },
    },
  };
}

/**
 * Zählt eine beendete Runde mit mindestens einer beantworteten Frage genau
 * einmal als Lernaktivität. Eine vollständig fehlerfrei beantwortete Runde
 * vergibt den Meilenstein „Fehlerfreie Runde“.
 */
function countFinishedSession(progress: AcademyProgress, today: DayKey): AcademyProgress {
  const session = progress.reviewSession;
  if (!session || session.activityRecorded) return progress;

  const answered = session.questionIds.filter((id) => session.answers[id] !== undefined);
  if (answered.length === 0) return progress;

  let next = logActivity(
    { ...progress, reviewSession: { ...session, activityRecorded: true } },
    today,
    { reviewSessions: 1 },
  );

  const complete = answered.length === session.questionIds.length;
  const allCorrect =
    complete &&
    // Jede Frage kommt in einer Runde genau einmal vor; ihr Plan spiegelt daher
    // die Antwort aus dieser Runde.
    answered.every((id) => progress.reviewCards[id]?.lastResult === 'correct');
  if (allCorrect) next = awardMilestone(next, 'perfect-review', today);
  return next;
}

/**
 * Weiter zur nächsten Frage – erst, wenn die aktuelle beantwortet ist. Mit der
 * letzten Frage ist die Runde beendet und zählt als Lernaktivität.
 */
export function advanceSession(progress: AcademyProgress, today: DayKey): AcademyProgress {
  const session = progress.reviewSession;
  if (!session || session.index >= session.questionIds.length) return progress;
  if (session.answers[session.questionIds[session.index]] === undefined) return progress;
  const next = { ...progress, reviewSession: { ...session, index: session.index + 1 } };
  return next.reviewSession.index >= session.questionIds.length
    ? countFinishedSession(next, today)
    : next;
}

/** Beendet die Runde; beantwortete Fragen zählen dabei als Lernaktivität. */
export function endSession(progress: AcademyProgress, today: DayKey): AcademyProgress {
  if (!progress.reviewSession) return progress;
  return { ...countFinishedSession(progress, today), reviewSession: null };
}

export function isSessionFinished(session: ReviewSession): boolean {
  return session.index >= session.questionIds.length;
}

export interface SessionResultEntry {
  item: ReviewItem;
  correct: boolean;
}

export interface SessionSummary {
  total: number;
  answered: number;
  correct: number;
  entries: SessionResultEntry[];
}

export function sessionSummary(session: ReviewSession, items: ReviewItem[]): SessionSummary {
  const entries = session.questionIds.flatMap((id) => {
    const item = items.find((candidate) => candidate.question.id === id);
    const answer = session.answers[id];
    if (!item || answer === undefined) return [];
    return [{ item, correct: answer === item.question.correctOptionId }];
  });

  return {
    total: session.questionIds.length,
    answered: entries.length,
    correct: entries.filter((entry) => entry.correct).length,
    entries,
  };
}

export interface ReviewOverview {
  total: number;
  due: number;
  mistakes: number;
  nextDueDay: DayKey | null;
  units: Array<{ unit: CourseUnit; count: number }>;
}

export function reviewOverview(
  course: Course,
  items: ReviewItem[],
  progress: AcademyProgress,
  today: DayKey,
): ReviewOverview {
  return {
    total: items.length,
    due: dueItems(items, progress, today).length,
    mistakes: mistakeItems(items, progress).length,
    nextDueDay: nextDueDay(items, progress, today),
    units: course.units
      .map((unit) => ({ unit, count: unitItems(items, unit.id).length }))
      .filter(({ count }) => count > 0),
  };
}
