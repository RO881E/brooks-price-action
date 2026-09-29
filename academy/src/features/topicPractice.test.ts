import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { barCases } from '../content/barCases';
import { brooksTrendsCourse } from '../content/course';
import { brooksTopics } from '../content/topicMap';
import { completeLesson, createEmptyProgress, migrateProgress, type AcademyProgress } from './progress';
import { buildQuestionSession, dueItems, reviewPool, startSession } from './reviewSession';
import { planTopicRound, topicEntries, topicSources, TOPIC_ROUND_SIZE } from './topicPractice';

const course = toCourseOutline(brooksTrendsCourse);
const today = '2026-09-29';
const published = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');

function completedThrough(count: number): AcademyProgress {
  return published
    .slice(0, count)
    .reduce((progress, lesson) => completeLesson(progress, lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z'), createEmptyProgress());
}
/** Alles bis einschließlich der Einheit `chapter-NN` abgeschlossen. */
function completedThroughChapter(chapter: string): AcademyProgress {
  const index = course.units.findIndex((unit) => unit.id === `brooks-trends.chapter-${chapter}`);
  return course.units
    .slice(0, index + 1)
    .flatMap((unit) => unit.lessons)
    .filter((lesson) => lesson.status === 'published')
    .reduce((progress, lesson) => completeLesson(progress, lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z'), createEmptyProgress());
}
const entryOf = (progress: AcademyProgress, id: string) =>
  topicEntries(course, progress, today).find((entry) => entry.topic.id === `brooks-topic.${id}`)!;

describe('Nach Thema üben (F-27)', () => {
  it('neuer Stand: kein Thema hat Fragen, Lernlink auf die erste Lektion, nichts gesperrt Angebotenes', () => {
    const entries = topicEntries(course, createEmptyProgress(), today);
    expect(entries).toHaveLength(brooksTopics.length);
    for (const entry of entries) {
      expect(entry.questions).toEqual([]);
      expect(entry.cases).toEqual([]);
    }
    // Ein Thema, dessen erste Lehrstelle die nächste Lektion ist, bietet sie an; alle anderen verweisen auf den Lernpfad.
    const range = entryOf(createEmptyProgress(), 'range-and-inertia');
    expect(range.nextLesson?.id ?? range.courseNextLesson?.id).toBe(published[0].id);
    const locked = entryOf(createEmptyProgress(), 'chart-views');
    expect(locked.nextLesson).toBeUndefined();
    expect(locked.courseNextLesson?.id).toBe(published[0].id);
  });

  it('zeigt nur Fragen aus abgeschlossenen Lektionen – Kapitelmix, keine gesperrte Frage', () => {
    const progress = completedThroughChapter('03');
    const done = new Set(progress.completedLessonIds);
    const pool = new Set(reviewPool(course, progress).map((item) => item.question.id));
    for (const entry of topicEntries(course, progress, today)) {
      for (const item of entry.questions) {
        expect(done.has(item.lesson.id)).toBe(true);
        expect(pool.has(item.question.id)).toBe(true);
        expect(entry.topic.questionIds).toContain(item.question.id);
      }
    }
    const breakout = entryOf(progress, 'breakout-and-test');
    expect(new Set(breakout.questions.map((item) => item.unit.id)).size).toBeGreaterThan(1);
  });

  it('Fälle: nur freigegebene, zugängliche Fälle; gesperrte werden nur gezählt', () => {
    const none = entryOf(createEmptyProgress(), 'breakout-and-test');
    expect(none.cases).toEqual([]);
    expect(none.lockedCases).toBeGreaterThan(0);
    const much = entryOf(completedThrough(published.length), 'breakout-and-test');
    expect(much.cases.length).toBeGreaterThan(0);
    for (const entry of much.cases) expect(barCases.find((item) => item.id === entry.barCase.id)?.status).toBe('approved');
  });

  it('Runde: deterministisch, ohne Doppelte, begrenzt, fällige zuerst, Kapitel reihum', () => {
    const progress = completedThroughChapter('05');
    const entry = entryOf(progress, 'reversal-in-context');
    expect(entry.questions.length).toBeGreaterThan(TOPIC_ROUND_SIZE);
    const round = planTopicRound(entry, progress, today);
    expect(round).toHaveLength(TOPIC_ROUND_SIZE);
    expect(new Set(round).size).toBe(round.length);
    expect(planTopicRound(entry, progress, today)).toEqual(round);
    const units = new Set(round.map((id) => entry.questions.find((item) => item.question.id === id)!.unit.id));
    expect(units.size).toBeGreaterThan(1);
    // Eine später fällige Frage rückt hinter fällige; alle sind sonst neu und damit fällig → gleiche Gruppe.
    const someone = entry.questions[0].question.id;
    const later: AcademyProgress = {
      ...progress,
      reviewCards: { [someone]: { stage: 2, dueDay: '2026-12-01', lastReviewedDay: today, lastResult: 'correct', reviews: 2, lapses: 0 } },
    };
    expect(planTopicRound(entryOf(later, 'reversal-in-context'), later, today)).not.toContain(someone);
    expect(planTopicRound(entry, progress, today, 3)).toHaveLength(3);
  });

  it('Mehrfachzuordnung: dieselbe Frage taucht je Thema auf, zählt aber nur einmal pro Runde', () => {
    const progress = completedThrough(published.length);
    const doubled = brooksTopics.flatMap((topic) => topic.questionIds).find((id, _, all) => all.indexOf(id) !== all.lastIndexOf(id))!;
    const holders = topicEntries(course, progress, today).filter((entry) => entry.questions.some((item) => item.question.id === doubled));
    expect(holders.length).toBeGreaterThan(1);
    for (const entry of holders) {
      const round = planTopicRound(entry, progress, today, 100);
      expect(round.filter((id) => id === doubled)).toHaveLength(1);
    }
  });

  it('Themenrunde nutzt die vorhandene Wiederholung: keine neuen IDs, kein zweites Fälligkeitssystem', () => {
    const progress = completedThroughChapter('05');
    const entry = entryOf(progress, 'reversal-in-context');
    const ids = planTopicRound(entry, progress, today);
    const session = buildQuestionSession(ids, reviewPool(course, progress), today, entry.topic.id)!;
    expect(session.topicId).toBe(entry.topic.id);
    expect(session.questionIds).toEqual(ids);
    const started = startSession(progress, session);
    // Kein neuer gespeicherter Lernstand außerhalb der Runde.
    expect({ ...started, reviewSession: null }).toEqual({ ...progress, reviewSession: null });
    expect(dueItems(reviewPool(course, progress), progress, today).length).toBe(dueItems(reviewPool(course, started), started, today).length);
  });

  it('Fundstellen zu einer Frage nur aus der Themenkarte', () => {
    const progress = completedThroughChapter('05');
    const item = reviewPool(course, progress).find((entry) => entry.question.id === 'chapter-05-04-question')!;
    const sources = topicSources(item);
    expect(sources.length).toBeGreaterThan(0);
    for (const source of sources) {
      expect(source.lesson.id).toBe(item.lesson.id);
      expect(source.anchor.length).toBeGreaterThan(0);
    }
    const untagged = reviewPool(course, progress).find((entry) => topicSources(entry).length === 0)!;
    expect(untagged).toBeTruthy();
  });

  it('gespeichertes Thema: Import alter Daten, unbekannte Themen-ID überlebt defensiv', () => {
    const session = { mode: 'mixed', unitId: null, questionIds: ['chapter-01-01-question'], index: 0, answers: {}, startedDay: today, activityRecorded: false };
    const ok = migrateProgress({ ...createEmptyProgress(), reviewSession: { ...session, topicId: 'brooks-topic.gibt-es-nicht-mehr' } });
    expect(ok?.reviewSession?.topicId).toBe('brooks-topic.gibt-es-nicht-mehr');
    const bad = migrateProgress({ ...createEmptyProgress(), reviewSession: { ...session, topicId: '<script>' } });
    expect(bad?.reviewSession).not.toHaveProperty('topicId');
    const old = migrateProgress({ version: 12, completedLessonIds: [], answers: {}, reviewSession: session });
    expect(old?.reviewSession).not.toHaveProperty('topicId');
  });
});
