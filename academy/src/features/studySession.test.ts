import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { barCases } from '../content/barCases';
import { priceActionTrendsCourse } from '../content/course';
import type { QuestionOutline } from '../content/types';
import { beginCaseRun } from './caseTraining';
import { formatRoute, parseRoute, resolveRoute } from './navigation';
import { completeLesson, createEmptyProgress, recordLessonStep, type AcademyProgress } from './progress';
import { buildQuestionSession, dueItems, reviewPool, startSession } from './reviewSession';
import { planStudySession, visibleStudyItems } from './studySession';

const course = toCourseOutline(priceActionTrendsCourse);
const today = '2026-09-29';
const published = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const questionsOf = (lessonIndex: number) =>
  published[lessonIndex].steps.filter((step): step is QuestionOutline => step.type === 'question');

function completedThrough(count: number): AcademyProgress {
  return published
    .slice(0, count)
    .reduce((progress, lesson) => completeLesson(progress, lesson.id, lesson.xp, '2026-09-20T08:00:00.000Z'), createEmptyProgress());
}

const kinds = (plan: ReturnType<typeof planStudySession>) => plan.items.map((item) => item.kind);

describe('Kurz lernen: Vorschläge (F-23)', () => {
  it('neuer Stand: nur die erste Lektion – keine Wiederholung, kein gesperrter Fall', () => {
    for (const minutes of [10, 20] as const) {
      const plan = planStudySession(course, createEmptyProgress(), today, minutes);
      expect(kinds(plan)).toEqual(['lesson']);
      const [item] = plan.items;
      expect(item.kind === 'lesson' && item.lesson.id).toBe(published[0].id);
    }
  });

  it('fortgeschritten: fällige Fragen aus mehreren Kapiteln zuerst, begrenzt je Rahmen, dann Lektion und Fall', () => {
    // Alles bis einschließlich Kapitel 1 vor Tagen abgeschlossen → viele Fragen fällig.
    const unitIndex = course.units.findIndex((unit) => unit.id === 'price-action-trends.chapter-01');
    const count = published.findIndex((lesson) => !course.units.slice(0, unitIndex + 1).some((unit) => unit.lessons.includes(lesson)));
    const base = completedThrough(count);
    // Eine Kapitel-1-Frage ist schon länger fällig (Wiederholungsplan) → Fragen aus mehreren Einheiten.
    const chapterOneQuestion = reviewPool(course, base).find((item) => item.unit.id === 'price-action-trends.chapter-01')!;
    const progress: AcademyProgress = {
      ...base,
      reviewCards: {
        [chapterOneQuestion.question.id]: {
          stage: 1,
          dueDay: '2026-09-10',
          lastReviewedDay: '2026-09-07',
          lastResult: 'wrong',
          reviews: 1,
          lapses: 1,
        },
      },
    };
    const ten = planStudySession(course, progress, today, 10);
    const twenty = planStudySession(course, progress, today, 20);
    expect(kinds(ten)).toEqual(['review', 'lesson']);
    expect(kinds(twenty)).toEqual(['review', 'lesson', 'case']);
    const review10 = ten.items[0];
    const review20 = twenty.items[0];
    expect(review10.kind === 'review' && review10.questionIds).toHaveLength(5);
    expect(review20.kind === 'review' && review20.questionIds).toHaveLength(10);
    expect(review20.kind === 'review' && review20.totalDue).toBeGreaterThan(10);
    // Die ältesten fälligen Fragen in Buchreihenfolge – hier aus mehreren Einheiten.
    const due = dueItems(reviewPool(course, progress), progress, today).slice(0, 10).map((item) => item.question.id);
    expect(review20.kind === 'review' && review20.questionIds).toEqual(due);
    expect(due[0]).toBe(chapterOneQuestion.question.id);
    expect(review20.kind === 'review' && review20.units.length).toBeGreaterThan(1);
    // Nächste Lektion ist die erste noch offene.
    const lesson = twenty.items[1];
    expect(lesson.kind === 'lesson' && lesson.lesson.id).toBe(published[count].id);
  });

  it('eine begonnene Lektion und eine laufende Wiederholungsrunde werden fortgesetzt', () => {
    let progress = completedThrough(2);
    progress = recordLessonStep(progress, published[2].id, 2);
    const questionIds = questionsOf(0).map((question) => question.id);
    progress = startSession(progress, buildQuestionSession(questionIds, reviewPool(course, progress), today));
    const plan = planStudySession(course, progress, today, 10);
    expect(plan.items[0]).toMatchObject({ kind: 'review-resume', remaining: questionIds.length });
    expect(plan.items[1]).toMatchObject({ kind: 'lesson', resume: true, stepIndex: 2 });
    expect(plan.items[1].kind === 'lesson' && plan.items[1].lesson.id).toBe(published[2].id);
  });

  it('keine gesperrten Links: nur zugängliche Lektionen und Fälle; laufende Trainerrunde zuerst', () => {
    const plan = planStudySession(course, completedThrough(1), today, 20);
    for (const item of plan.items) {
      if (item.kind === 'lesson') expect(item.lesson.id).toBe(published[1].id);
      expect(item.kind).not.toBe('case');
    }
    // Mit freigeschaltetem Fall und begonnener Runde: dieser Fall.
    const barCase = barCases.find((item) => item.id === 'bar-case.chapter-01.range-high-test')!;
    const unitIndex = course.units.findIndex((unit) => unit.id === barCase.unitId);
    const count = published.findIndex((lesson) => !course.units.slice(0, unitIndex + 1).some((unit) => unit.lessons.includes(lesson)));
    const unlocked = beginCaseRun(completedThrough(count), barCase, 'run-x', '2026-09-29T08:00:00.000Z');
    const withCase = planStudySession(course, unlocked, today, 20);
    const caseItem = withCase.items.find((item) => item.kind === 'case');
    expect(caseItem).toMatchObject({ kind: 'case', resume: true });
    expect(caseItem?.kind === 'case' && caseItem.barCase.id).toBe(barCase.id);
  });

  it('alles erledigt und ohne Fälle: leerer Plan', () => {
    const all = completedThrough(published.length);
    const noneDue = {
      ...all,
      reviewCards: Object.fromEntries(
        reviewPool(course, all).map((item) => [
          item.question.id,
          { stage: 4, dueDay: '2027-01-01', lastReviewedDay: today, lastResult: 'correct' as const, reviews: 5, lapses: 0 },
        ]),
      ),
    };
    expect(planStudySession(course, noneDue, today, 20, []).items).toEqual([]);
  });

  it('keine Duplikate, Überspringen blendet nur in der Ansicht aus, nichts wird verändert', () => {
    const progress = completedThrough(5);
    const before = JSON.stringify(progress);
    const plan = planStudySession(course, progress, today, 20);
    const keys = plan.items.map((item) => item.key);
    expect(new Set(keys).size).toBe(keys.length);
    expect(visibleStudyItems(plan, new Set([keys[0]])).map((item) => item.key)).toEqual(keys.slice(1));
    expect(JSON.stringify(progress)).toBe(before);
    // Deterministisch: gleicher Stand, gleicher Plan.
    expect(planStudySession(course, progress, today, 20)).toEqual(plan);
  });

  it('Route #/study/10 und #/study/20', () => {
    expect(parseRoute('#/study/10')).toEqual({ kind: 'study', minutes: 10 });
    expect(parseRoute('#/study/20')).toEqual({ kind: 'study', minutes: 20 });
    expect(parseRoute('#/study/15')).toBeNull();
    expect(formatRoute({ kind: 'study', minutes: 20 })).toBe('#/study/20');
    expect(resolveRoute({ kind: 'study', minutes: 10 }, course, createEmptyProgress())).toEqual({ kind: 'study', minutes: 10 });
  });
});
