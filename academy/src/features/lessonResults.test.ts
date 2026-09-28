import { describe, expect, it } from 'vitest';
import type { Lesson, LessonStep } from '../content/types';
import {
  earnedXp,
  isQuestionResolved,
  lessonSummary,
  questionView,
  restartLesson,
  retryQuestion,
  revealSolution,
  submitAnswer,
  type QuestionStep,
} from './lessonResults';
import { completeLesson, createEmptyProgress, type AcademyProgress } from './progress';

function question(id: string, correctOptionId = 'a'): QuestionStep {
  return {
    id,
    type: 'question',
    title: id,
    prompt: 'Frage?',
    options: [
      { id: 'a', label: 'A', explanation: 'Weil A.' },
      { id: 'b', label: 'B', explanation: 'Weil B.' },
      { id: 'c', label: 'C', explanation: 'Weil C.' },
    ],
    correctOptionId,
  };
}

const q1 = question('q1');
const q2 = question('q2');
const intro: LessonStep = { id: 'e1', type: 'explanation', title: 'E', paragraphs: ['x'] };
const lesson: Lesson = {
  id: 'lesson-1',
  title: 'Lektion',
  summary: '',
  durationMinutes: 3,
  xp: 30,
  sourceUnit: 'Test',
  status: 'published',
  steps: [intro, q1, q2],
};

function answerBothCorrectly(progress: AcademyProgress): AcademyProgress {
  return submitAnswer(submitAnswer(progress, q1, 'a'), q2, 'a');
}

describe('answering questions', () => {
  it('records a correct first attempt', () => {
    const progress = submitAnswer(createEmptyProgress(), q1, 'a');
    const view = questionView(q1, progress);

    expect(view).toMatchObject({
      selectedOptionId: 'a',
      status: 'correct',
      attempts: 1,
      firstAttemptCorrect: true,
      wrongOptionIds: [],
    });
    expect(isQuestionResolved(view)).toBe(true);
    expect(progress.answers.q1).toBe('a');
  });

  it('keeps a wrong answer open, allows a retry and remembers the first attempt', () => {
    let progress = submitAnswer(createEmptyProgress(), q1, 'b');
    expect(questionView(q1, progress)).toMatchObject({
      selectedOptionId: 'b',
      status: 'open',
      attempts: 1,
      firstAttemptCorrect: false,
      wrongOptionIds: ['b'],
    });
    expect(isQuestionResolved(questionView(q1, progress))).toBe(false);

    // Ohne „Noch einmal versuchen“ wird keine zweite Antwort angenommen.
    expect(submitAnswer(progress, q1, 'a')).toBe(progress);

    progress = retryQuestion(progress, q1);
    expect(questionView(q1, progress).selectedOptionId).toBeNull();
    // Eine bereits falsch gewählte Option zählt nicht erneut.
    expect(submitAnswer(progress, q1, 'b')).toBe(progress);

    progress = submitAnswer(progress, q1, 'a');
    expect(questionView(q1, progress)).toMatchObject({
      selectedOptionId: 'a',
      status: 'correct',
      attempts: 2,
      firstAttemptCorrect: false,
      wrongOptionIds: ['b'],
    });
  });

  it('ignores unknown options and answers after resolution', () => {
    const start = createEmptyProgress();
    expect(submitAnswer(start, q1, 'zzz')).toBe(start);

    const solved = submitAnswer(start, q1, 'a');
    expect(submitAnswer(solved, q1, 'b')).toBe(solved);
    expect(retryQuestion(solved, q1)).toBe(solved);
    expect(revealSolution(solved, q1)).toBe(solved);
  });

  it('reveals the solution only after a wrong attempt', () => {
    const start = createEmptyProgress();
    expect(revealSolution(start, q1)).toBe(start);

    const revealed = revealSolution(submitAnswer(start, q1, 'c'), q1);
    expect(questionView(q1, revealed)).toMatchObject({
      status: 'revealed',
      selectedOptionId: 'c',
      firstAttemptCorrect: false,
    });
    expect(isQuestionResolved(questionView(q1, revealed))).toBe(true);
  });
});

describe('old answers without attempt data', () => {
  const legacy: AcademyProgress = {
    ...createEmptyProgress(),
    answers: { q1: 'a', q2: 'b' },
  };

  it('keeps old answers as resolved without inventing attempts', () => {
    expect(questionView(q1, legacy)).toEqual({
      selectedOptionId: 'a',
      status: 'correct',
      attempts: 0,
      firstAttemptCorrect: null,
      wrongOptionIds: [],
      legacy: true,
    });
    expect(questionView(q2, legacy)).toMatchObject({
      status: 'revealed',
      attempts: 0,
      firstAttemptCorrect: null,
      legacy: true,
    });
  });

  it('does not count old answers as first attempts after a replay', () => {
    let progress = completeLesson(legacy, lesson.id, lesson.xp);
    progress = restartLesson(progress, lesson);
    expect(progress.answers).toEqual({ q1: 'a', q2: 'b' });
    expect(questionView(q1, progress).status).toBe('open');

    progress = answerBothCorrectly(progress);
    expect(questionView(q1, progress).firstAttemptCorrect).toBeNull();
    expect(questionView(q1, progress).attempts).toBe(1);

    const summary = lessonSummary(lesson, progress);
    expect(summary.firstAttemptRate).toBeNull();
    expect(summary.legacyQuestionCount).toBe(2);
  });
});

describe('replaying a lesson', () => {
  it('reopens questions but keeps attempts, first attempts and old answers', () => {
    let progress = submitAnswer(createEmptyProgress(), q1, 'b');
    progress = submitAnswer(retryQuestion(progress, q1), q1, 'a');
    progress = submitAnswer(progress, q2, 'a');
    progress = completeLesson(progress, lesson.id, lesson.xp);

    progress = restartLesson(progress, lesson);
    expect(questionView(q1, progress)).toMatchObject({
      selectedOptionId: null,
      status: 'open',
      attempts: 2,
      firstAttemptCorrect: false,
      wrongOptionIds: [],
    });
    expect(progress.answers).toEqual({ q1: 'a', q2: 'a' });
    expect(progress.completedLessonIds).toEqual([lesson.id]);

    progress = submitAnswer(progress, q1, 'a');
    expect(questionView(q1, progress)).toMatchObject({ attempts: 3, firstAttemptCorrect: false });
  });

  it('leaves untouched questions without a record', () => {
    const progress = restartLesson(createEmptyProgress(), lesson);
    expect(progress.questionResults).toEqual({});
  });
});

describe('lesson summary and XP', () => {
  it('summarises a first completion', () => {
    let progress = submitAnswer(createEmptyProgress(), q1, 'b');
    progress = submitAnswer(retryQuestion(progress, q1), q1, 'a');
    progress = submitAnswer(progress, q2, 'a');
    progress = completeLesson(progress, lesson.id, lesson.xp, '2026-09-28T10:00:00.000Z');

    expect(lessonSummary(lesson, progress)).toEqual({
      questionCount: 2,
      answeredCount: 2,
      firstAttemptKnown: 2,
      firstAttemptCorrect: 1,
      firstAttemptRate: 50,
      legacyQuestionCount: 0,
      completed: true,
      repeated: false,
      xpAwarded: 30,
      xpEarnedThisRun: 30,
    });
  });

  it('awards XP and completion only once, even after replays', () => {
    let progress = answerBothCorrectly(createEmptyProgress());
    progress = completeLesson(progress, lesson.id, lesson.xp, '2026-09-28T10:00:00.000Z');
    progress = restartLesson(progress, lesson);
    progress = answerBothCorrectly(progress);
    progress = completeLesson(progress, lesson.id, lesson.xp, '2026-09-28T11:00:00.000Z');
    progress = completeLesson(progress, lesson.id, lesson.xp, '2026-09-28T12:00:00.000Z');

    expect(progress.completedLessonIds).toEqual([lesson.id]);
    expect(progress.lessonResults[lesson.id]).toEqual({
      firstCompletedAt: '2026-09-28T10:00:00.000Z',
      lastCompletedAt: '2026-09-28T12:00:00.000Z',
      xpAwarded: 30,
    });
    expect(earnedXp(progress, [lesson])).toBe(30);

    const summary = lessonSummary(lesson, progress);
    expect(summary.repeated).toBe(true);
    expect(summary.xpEarnedThisRun).toBe(0);
    expect(summary.xpAwarded).toBe(30);
    expect(summary.firstAttemptRate).toBe(100);
  });

  it('keeps XP of lessons completed before results were recorded', () => {
    const legacyCompleted: AcademyProgress = {
      ...createEmptyProgress(),
      completedLessonIds: [lesson.id],
    };
    expect(earnedXp(legacyCompleted, [lesson])).toBe(30);

    const replayed = completeLesson(legacyCompleted, lesson.id, lesson.xp);
    expect(replayed.lessonResults[lesson.id].firstCompletedAt).toBeNull();
    expect(earnedXp(replayed, [lesson])).toBe(30);
    expect(lessonSummary(lesson, replayed)).toMatchObject({
      repeated: true,
      xpEarnedThisRun: 0,
      xpAwarded: 30,
    });
  });

  it('uses the XP stored at first completion and ignores incomplete lessons', () => {
    const progress = completeLesson(createEmptyProgress(), lesson.id, 30);
    expect(earnedXp(progress, [{ ...lesson, xp: 50 }])).toBe(30);
    expect(earnedXp(createEmptyProgress(), [lesson])).toBe(0);
  });

  it('handles lessons without questions', () => {
    const noQuestions: Lesson = { ...lesson, id: 'plain', steps: [intro] };
    const summary = lessonSummary(noQuestions, completeLesson(createEmptyProgress(), 'plain', 10));
    expect(summary).toMatchObject({
      questionCount: 0,
      answeredCount: 0,
      firstAttemptRate: null,
      xpEarnedThisRun: 10,
    });
  });
});
