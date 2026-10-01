import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { priceActionTrendsCourse } from '../content/course';
import { completeLesson, createEmptyProgress, recordLessonStep, recordReaderPosition, type AcademyProgress } from './progress';
import { buildQuestionSession, reviewPool, startSession } from './reviewSession';
import { planToday } from './today';

const course = toCourseOutline(priceActionTrendsCourse);
const today = '2026-09-29';
const published = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');

function completedThrough(count: number): AcademyProgress {
  return published
    .slice(0, count)
    .reduce((progress, lesson) => completeLesson(progress, lesson.id, lesson.xp, '2026-09-29T08:00:00.000Z'), createEmptyProgress());
}

describe('Startansicht „Heute“ (P06)', () => {
  it('neuer Stand: nächste Lektion, nichts fällig, Lesen zeigt dieselbe Stelle', () => {
    const plan = planToday(course, createEmptyProgress(), today);
    expect(plan.primary).toMatchObject({ kind: 'lesson-next' });
    expect(plan.primary.kind === 'lesson-next' && plan.primary.lesson.id).toBe(published[0].id);
    expect(plan.dueCount).toBe(0);
    expect(plan.reading).toMatchObject({ resume: false });
    expect(plan.reading?.lesson.id).toBe(published[0].id);
  });

  it('fällige Fragen haben Vorrang vor der nächsten Lektion', () => {
    // Abschluss am Vortag → Fragen sind heute fällig.
    const old = completeLesson(createEmptyProgress(), published[0].id, published[0].xp, '2026-09-20T08:00:00.000Z');
    const plan = planToday(course, old, today);
    expect(plan.dueCount).toBeGreaterThan(0);
    expect(plan.primary).toMatchObject({ kind: 'review-due' });
  });

  it('eine begonnene Lektion hat Vorrang und meldet den Schritt', () => {
    let progress = completedThrough(1);
    progress = recordLessonStep(progress, published[1].id, 2);
    const plan = planToday(course, progress, today);
    expect(plan.primary).toMatchObject({ kind: 'lesson-resume', stepIndex: 2 });
    expect(plan.primary.kind === 'lesson-resume' && plan.primary.lesson.id).toBe(published[1].id);
  });

  it('eine laufende Wiederholungsrunde wird fortgesetzt', () => {
    const progress = completeLesson(createEmptyProgress(), published[0].id, published[0].xp, '2026-09-20T08:00:00.000Z');
    const ids = reviewPool(course, progress).map((item) => item.question.id);
    const running = startSession(progress, buildQuestionSession(ids, reviewPool(course, progress), today));
    const plan = planToday(course, running, today);
    expect(plan.primary).toMatchObject({ kind: 'review-resume', remaining: ids.length });
  });

  it('Lesen: zuletzt gelesene zugängliche Stelle; eine gesperrte Stelle wird nie angeboten', () => {
    const progress = recordReaderPosition(completedThrough(3), published[1].id.split('.lesson')[0], published[1].id, null);
    const plan = planToday(course, progress, today);
    expect(plan.reading).toMatchObject({ resume: true });
    expect(plan.reading?.lesson.id).toBe(published[1].id);
    // Lesestelle in einer noch gesperrten Lektion: Fallback auf den nächsten zugänglichen Abschnitt.
    const locked = published[published.length - 1];
    const stale = recordReaderPosition(createEmptyProgress(), locked.id.split('.lesson')[0], locked.id, null);
    const fallback = planToday(course, stale, today);
    expect(fallback.reading?.resume).toBe(false);
    expect(fallback.reading?.lesson.id).toBe(published[0].id);
  });

  it('alles erledigt und keine offenen Fälle: „alles erledigt“, kein toter Link', () => {
    const done = completedThrough(published.length);
    const noneDue = {
      ...done,
      reviewCards: Object.fromEntries(
        reviewPool(course, done).map((item) => [
          item.question.id,
          { stage: 4, dueDay: '2027-01-01', lastReviewedDay: today, lastResult: 'correct' as const, reviews: 5, lapses: 0 },
        ]),
      ),
    };
    const plan = planToday(course, noneDue, today, []);
    expect(plan.primary).toEqual({ kind: 'done' });
  });

  it('bei abgeschlossenen Lektionen ohne Fälligkeit bietet „Heute“ einen zugänglichen Fall an', () => {
    const done = completedThrough(published.length);
    const noneDue = {
      ...done,
      reviewCards: Object.fromEntries(
        reviewPool(course, done).map((item) => [
          item.question.id,
          { stage: 4, dueDay: '2027-01-01', lastReviewedDay: today, lastResult: 'correct' as const, reviews: 5, lapses: 0 },
        ]),
      ),
    };
    const plan = planToday(course, noneDue, today);
    expect(plan.primary.kind).toBe('train');
  });

  it('deterministisch und ohne Nebenwirkung', () => {
    const progress = completedThrough(4);
    const before = JSON.stringify(progress);
    expect(planToday(course, progress, today)).toEqual(planToday(course, progress, today));
    expect(JSON.stringify(progress)).toBe(before);
  });
});
