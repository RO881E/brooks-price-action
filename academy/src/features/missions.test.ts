import { describe, expect, it } from 'vitest';
import { toCourseOutline } from '../../build/courseOutline';
import { barCases } from '../content/barCases';
import { brooksTrendsCourse } from '../content/course';
import { beginCaseRun, updateCaseRun } from './caseTraining';
import { advance, chooseDecision, startSession as startCase, submitDecision, toggleCue } from './barTrainer';
import { MILESTONES, awardMilestone, awardMilestones } from './goals';
import { dailyMissions } from './missions';
import { completeLesson, createEmptyProgress, type AcademyProgress } from './progress';
import { progressSummary } from './progressSummary';

const course = toCourseOutline(brooksTrendsCourse);
const today = '2026-09-29';
const published = course.units.flatMap((unit) => unit.lessons).filter((lesson) => lesson.status === 'published');
const complete = (progress: AcademyProgress, count: number, at: string) =>
  published.slice(0, count).reduce((p, lesson) => completeLesson(p, lesson.id, lesson.xp, at), progress);

describe('Tagesmissionen (P07)', () => {
  it('neuer Stand: nur die nächste Lektion, freiwillig und ohne Fälligkeit', () => {
    const missions = dailyMissions(course, createEmptyProgress(), today);
    expect(missions.map((mission) => mission.kind)).toEqual(['lesson']);
    expect(missions[0].done).toBe(false);
    expect(missions[0].lesson?.id).toBe(published[0].id);
  });

  it('fällige Fragen und ein zugänglicher Fall erscheinen als Vorschläge', () => {
    const progress = complete(createEmptyProgress(), published.length, '2026-09-20T08:00:00.000Z');
    const missions = dailyMissions(course, progress, today);
    expect(missions.map((mission) => mission.kind)).toEqual(['review', 'train']);
    expect(missions.every((mission) => !mission.done)).toBe(true);
    expect(missions[1].caseId).toBeTruthy();
  });

  it('erledigt ergibt sich nur aus gezählten Aktivitäten – Öffnen oder Überspringen ändert nichts', () => {
    const base = complete(createEmptyProgress(), 3, '2026-09-20T08:00:00.000Z');
    const before = JSON.stringify(base);
    dailyMissions(course, base, today);
    dailyMissions(course, base, today);
    expect(JSON.stringify(base)).toBe(before);
    const learned = {
      ...base,
      dailyActivity: { ...base.dailyActivity, [today]: { lessons: 1, reviewSessions: 1, xp: 30 } },
    };
    const missions = dailyMissions(course, learned, today);
    expect(missions.find((mission) => mission.kind === 'lesson')?.done).toBe(true);
    expect(missions.find((mission) => mission.kind === 'review')?.done).toBe(true);
    expect(missions.filter((mission) => mission.done).every((mission) => !mission.lesson && !mission.caseId)).toBe(true);
  });

  it('Chart-Training heute abgeschlossen: erledigt aus der gespeicherten Runde', () => {
    const barCase = barCases.find((item) => item.id === 'bar-case.chapter-01.range-high-test')!;
    const unitIndex = course.units.findIndex((unit) => unit.id === barCase.unitId);
    const count = published.findIndex((lesson) => !course.units.slice(0, unitIndex + 1).some((unit) => unit.lessons.includes(lesson)));
    let progress = complete(createEmptyProgress(), count, '2026-09-20T08:00:00.000Z');
    progress = beginCaseRun(progress, barCase, 'run-mission', '2026-09-29T09:00:00.000Z');
    let session = startCase(barCase);
    for (const point of barCase.decisions) {
      session = chooseDecision(session, 'wait');
      session = toggleCue(barCase, session, point.cues[0].id);
      session = advance(barCase, submitDecision(barCase, session));
    }
    progress = updateCaseRun(progress, barCase, session, '2026-09-29T09:05:00.000Z');
    const train = dailyMissions(course, progress, today).find((mission) => mission.kind === 'train');
    expect(train?.done).toBe(true);
    expect(dailyMissions(course, progress, '2026-09-30').find((mission) => mission.kind === 'train')?.done).toBe(false);
  });

  it('nichts zu tun: keine Vorschläge statt Druck', () => {
    const done = complete(createEmptyProgress(), published.length, '2026-09-20T08:00:00.000Z');
    const idle: AcademyProgress = {
      ...done,
      reviewCards: {},
    };
    // Keine Fragen fällig (Karten in der Zukunft) und keine Fälle: nur was wirklich offen ist erscheint.
    const missions = dailyMissions(course, idle, today, []);
    expect(missions.every((mission) => mission.kind !== 'lesson')).toBe(true);
  });
});

describe('Abzeichen und Überblick (P07)', () => {
  it('jedes Abzeichen hat Symbol und erklärtes Kriterium; Vergabe bleibt einmalig', () => {
    for (const milestone of MILESTONES) {
      expect(milestone.symbol.length).toBeGreaterThan(0);
      expect(milestone.description.length).toBeGreaterThan(10);
    }
    expect(new Set(MILESTONES.map((milestone) => milestone.symbol)).size).toBe(MILESTONES.length);
    const once = awardMilestone(createEmptyProgress(), 'first-lesson', '2026-09-01');
    expect(awardMilestone(once, 'first-lesson', '2026-09-29')).toBe(once);
    expect(once.milestones['first-lesson']?.achievedDay).toBe('2026-09-01');
    const progress = complete(createEmptyProgress(), 1, '2026-09-29T08:00:00.000Z');
    const awarded = awardMilestones(progress, course, today);
    expect(awardMilestones(awarded, course, '2026-10-05')).toBe(awarded);
  });

  it('Überblick zählt nur Gespeichertes: Wiederholungskarten und Trainerfälle', () => {
    expect(progressSummary(createEmptyProgress())).toMatchObject({ reviewedQuestions: 0, trainedCases: 0, caseRuns: 0 });
    const withCards: AcademyProgress = {
      ...createEmptyProgress(),
      reviewCards: {
        a: { stage: 1, dueDay: today, lastReviewedDay: today, lastResult: 'correct', reviews: 2, lapses: 0 },
        b: { stage: 0, dueDay: today, lastReviewedDay: today, lastResult: 'wrong', reviews: 0, lapses: 0 },
      },
      caseRuns: {
        'bar-case.chapter-01.range-high-test': [
          { sessionId: 'run-1', completedAt: '2026-09-28T10:00:00.000Z', best: 1, defensible: 1, mistake: 0, missedCues: 0 },
          { sessionId: 'run-2', completedAt: '2026-09-29T10:00:00.000Z', best: 1, defensible: 1, mistake: 0, missedCues: 0 },
        ],
        'bar-case.geloescht': [
          { sessionId: 'run-x', completedAt: '2026-09-27T10:00:00.000Z', best: 1, defensible: 0, mistake: 0, missedCues: 0 },
        ],
      },
    };
    const summary = progressSummary(withCards);
    expect(summary.reviewedQuestions).toBe(1);
    expect(summary.trainedCases).toBe(1);
    expect(summary.caseRuns).toBe(2);
    expect(summary.totalCases).toBe(barCases.filter((barCase) => barCase.status === 'approved').length);
  });
});
