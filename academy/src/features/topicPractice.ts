import type { BarCase } from '../content/barCaseTypes';
import { brooksTopics, type BrooksTopic } from '../content/topicMap';
import type { CourseOutline, LessonOutline } from '../content/types';
import { caseEntries, type CaseEntry } from './caseTraining';
import { lessonAccessState, nextAvailableLesson, type LessonAccessState } from './courseAccess';
import type { AcademyProgress } from './progress';
import type { DayKey } from './reviewScheduler';
import { dueDayFor, hasOpenMistake, REVIEW_SESSION_SIZE, reviewPool, type ReviewItem } from './reviewSession';

/*
 * „Nach Thema üben“ (F-27): Auswahl und Runde aus der redaktionellen Themenkarte
 * (C-03, `content/topicMap.ts`). Ein Themenfilter erzeugt weder neue Frage-IDs
 * noch Kopien von Versuchen: Er wählt nur aus dem vorhandenen Übungsbestand –
 * Fälligkeit, Erstversuch, XP und Trainerzustand bleiben in ihren bestehenden
 * Mechanismen. Zugänglich ist nur, was schon aus abgeschlossenen Lektionen bzw.
 * freigeschalteten Fällen stammt; ein gesperrter Inhalt wird nie angeboten.
 */

/** Rundenlänge wie in der übrigen Wiederholung. */
export const TOPIC_ROUND_SIZE = REVIEW_SESSION_SIZE;

export interface TopicLesson {
  lesson: LessonOutline;
  state: LessonAccessState;
}

export interface TopicEntry {
  topic: BrooksTopic;
  /** Zugängliche, wiederholbare Fragen des Themas in Buchreihenfolge (ohne Doppelte). */
  questions: ReviewItem[];
  /** Davon heute fällig. */
  due: number;
  /** Zugängliche freigegebene Fälle des Themas (nicht gesperrt). */
  cases: CaseEntry[];
  /** Freigegebene, aber noch gesperrte Fälle. */
  lockedCases: number;
  /** Lehrstellen des Themas mit Zugangsstatus (für Lernlinks und Leerzustand). */
  lessons: TopicLesson[];
  /** Erste offene, freigeschaltete Lehrstelle – Ziel des Lernlinks im Leerzustand. */
  nextLesson: LessonOutline | undefined;
  /** Nächste freigeschaltete Lektion des Kurses, wenn alle Lehrstellen noch gesperrt sind. */
  courseNextLesson: LessonOutline | undefined;
}

/** Themen mit dem, was heute zugänglich ist. Reihenfolge wie in der Themenkarte. */
export function topicEntries(
  course: CourseOutline,
  progress: AcademyProgress,
  today: DayKey,
  topics: readonly BrooksTopic[] = brooksTopics,
  cases?: readonly BarCase[],
): TopicEntry[] {
  const pool = reviewPool(course, progress);
  const byId = new Map(pool.map((item) => [item.question.id, item]));
  const allCases = caseEntries(course, progress, cases);
  const lessonsById = new Map(course.units.flatMap((unit) => unit.lessons).map((lesson) => [lesson.id, lesson]));
  const completed = new Set(progress.completedLessonIds);

  return topics.map((topic) => {
    const seen = new Set<string>();
    const questions = topic.questionIds
      .filter((id) => !seen.has(id) && seen.add(id))
      .flatMap((id) => byId.get(id) ?? [])
      .sort((a, b) => a.order - b.order);
    const topicCases = allCases.filter((entry) => topic.caseIds.includes(entry.barCase.id));
    const lessons = topic.teaching.flatMap((ref) => {
      const lesson = lessonsById.get(ref.lessonId);
      return lesson ? [{ lesson, state: lessonAccessState(course, lesson, completed) }] : [];
    });
    const nextLesson = lessons.find((entry) => entry.state === 'available')?.lesson;
    return {
      topic,
      questions,
      due: questions.filter((item) => dueDayFor(item, progress, today) <= today).length,
      cases: topicCases.filter((entry) => entry.state !== 'locked'),
      lockedCases: topicCases.filter((entry) => entry.state === 'locked').length,
      lessons,
      nextLesson,
      courseNextLesson: nextLesson ? undefined : nextAvailableLesson(course, completed),
    };
  });
}

/**
 * Fragen einer Themenrunde: erst fällige (am längsten überfällige zuerst), dann noch nie
 * wiederholte, dann die am längsten nicht geübten. Reihum über die Kapitel verteilt, damit
 * ein Kapitel die Runde nicht allein füllt. Deterministisch, ohne Zufall und ohne Doppelte.
 */
export function planTopicRound(
  entry: TopicEntry,
  progress: AcademyProgress,
  today: DayKey,
  size: number = TOPIC_ROUND_SIZE,
): string[] {
  const rank = (item: ReviewItem) => {
    const card = progress.reviewCards[item.question.id];
    if (dueDayFor(item, progress, today) <= today) return { group: 0, key: dueDayFor(item, progress, today) };
    if (!card) return { group: 1, key: '' };
    return { group: 2, key: card.lastReviewedDay ?? '' };
  };
  const sorted = [...entry.questions].sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    return (
      ra.group - rb.group ||
      ra.key.localeCompare(rb.key) ||
      Number(hasOpenMistake(b, progress)) - Number(hasOpenMistake(a, progress)) ||
      a.order - b.order
    );
  });
  // Je Gruppe reihum über die Kapitel; eine spätere Gruppe füllt nur den Rest auf.
  const picked: string[] = [];
  for (const group of [0, 1, 2]) {
    const perUnit = new Map<string, ReviewItem[]>();
    for (const item of sorted.filter((candidate) => rank(candidate).group === group)) {
      perUnit.set(item.unit.id, [...(perUnit.get(item.unit.id) ?? []), item]);
    }
    const lanes = [...perUnit.values()];
    for (let round = 0; picked.length < size; round += 1) {
      const before = picked.length;
      for (const lane of lanes) {
        if (round < lane.length && picked.length < size) picked.push(lane[round].question.id);
      }
      if (picked.length === before) break;
    }
  }
  return picked;
}

export interface TopicSource {
  topicId: string;
  topicTitle: string;
  lesson: LessonOutline;
  /** Vorhandener Quellenanker der Lehrstelle. */
  anchor: string;
}

/** Fundstellen einer Frage laut Themenkarte – nur aus dem, was die Karte belegt. */
export function topicSources(item: ReviewItem, topics: readonly BrooksTopic[] = brooksTopics): TopicSource[] {
  return topics.flatMap((topic) => {
    if (!topic.questionIds.includes(item.question.id)) return [];
    const ref = topic.teaching.find((entry) => entry.lessonId === item.lesson.id);
    return ref ? [{ topicId: topic.id, topicTitle: topic.title, lesson: item.lesson, anchor: ref.anchor }] : [];
  });
}

export function findTopic(topicId: string | undefined, topics: readonly BrooksTopic[] = brooksTopics): BrooksTopic | undefined {
  return topicId ? topics.find((topic) => topic.id === topicId) : undefined;
}
