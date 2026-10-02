import type {
  LessonOutline,
  LessonStep,
  QuestionOutline,
  StepOutline,
} from '../content/types';
import type { AcademyProgress, QuestionResult, QuestionStatus } from './progress';

export type QuestionStep = Extract<LessonStep, { type: 'question' }>;

type AnswerData = Pick<AcademyProgress, 'answers' | 'questionResults'>;

/** Sicht auf eine Frage im aktuellen Durchgang. */
export interface QuestionView {
  selectedOptionId: string | null;
  status: QuestionStatus;
  attempts: number;
  firstAttemptCorrect: boolean | null;
  wrongOptionIds: string[];
  /**
   * Stammt nur aus einer alten Antwort ohne Versuchsdaten. Die alte Oberfläche
   * zeigte nach jeder Antwort die Lösung, daher gilt die Frage als erledigt.
   */
  legacy: boolean;
}

function isQuestion(step: StepOutline): step is QuestionOutline {
  return step.type === 'question';
}

export function questionView(question: QuestionOutline, data: AnswerData): QuestionView {
  const record = data.questionResults[question.id];
  if (record) return { ...record, legacy: false };

  const legacyAnswer = data.answers[question.id];
  if (legacyAnswer !== undefined) {
    const correct = legacyAnswer === question.correctOptionId;
    return {
      selectedOptionId: legacyAnswer,
      status: correct ? 'correct' : 'revealed',
      attempts: 0,
      firstAttemptCorrect: null,
      wrongOptionIds: correct ? [] : [legacyAnswer],
      legacy: true,
    };
  }

  return {
    selectedOptionId: null,
    status: 'open',
    attempts: 0,
    firstAttemptCorrect: null,
    wrongOptionIds: [],
    legacy: false,
  };
}

/** Eine Frage ist erledigt, wenn sie richtig beantwortet oder die Lösung aufgedeckt wurde. */
export function isQuestionResolved(view: QuestionView): boolean {
  return view.status !== 'open';
}

export function isStepResolved(step: StepOutline, data: AnswerData): boolean {
  return !isQuestion(step) || isQuestionResolved(questionView(step, data));
}

function withQuestionResult(
  progress: AcademyProgress,
  questionId: string,
  result: QuestionResult,
): AcademyProgress {
  return {
    ...progress,
    questionResults: { ...progress.questionResults, [questionId]: result },
  };
}

/**
 * Wertet eine Antwort aus. Ohne vorherigen Versuch wird das Ergebnis als
 * Erstversuch festgehalten; danach bleibt dieser Wert unverändert. Ungültige
 * oder doppelte Eingaben ändern nichts.
 */
export function submitAnswer(
  progress: AcademyProgress,
  question: QuestionStep,
  optionId: string,
): AcademyProgress {
  const view = questionView(question, progress);
  if (view.status !== 'open' || view.selectedOptionId !== null) return progress;
  if (!question.options.some((option) => option.id === optionId)) return progress;
  if (view.wrongOptionIds.includes(optionId)) return progress;

  const correct = optionId === question.correctOptionId;
  const record = progress.questionResults[question.id];

  const next = withQuestionResult(progress, question.id, {
    selectedOptionId: optionId,
    attempts: view.attempts + 1,
    firstAttemptCorrect: record ? record.firstAttemptCorrect : correct,
    status: correct ? 'correct' : 'open',
    wrongOptionIds: correct ? view.wrongOptionIds : [...view.wrongOptionIds, optionId],
  });

  return { ...next, answers: { ...next.answers, [question.id]: optionId } };
}

/** Gibt die Frage nach einer falschen Antwort für einen neuen Versuch frei. */
export function retryQuestion(
  progress: AcademyProgress,
  question: QuestionOutline,
): AcademyProgress {
  const record = progress.questionResults[question.id];
  if (!record || record.status !== 'open' || record.selectedOptionId === null) {
    return progress;
  }
  return withQuestionResult(progress, question.id, { ...record, selectedOptionId: null });
}

/** Deckt die Lösung auf – erst nach mindestens einem falschen Versuch. */
export function revealSolution(
  progress: AcademyProgress,
  question: QuestionOutline,
): AcademyProgress {
  const record = progress.questionResults[question.id];
  if (!record || record.status !== 'open' || record.wrongOptionIds.length === 0) {
    return progress;
  }
  return withQuestionResult(progress, question.id, { ...record, status: 'revealed' });
}

/**
 * Startet einen neuen Durchgang: Fragen werden wieder offen, Versuchszahl und
 * Erstversuch bleiben erhalten. Alte Antworten in `answers` bleiben unberührt.
 */
export function restartLesson(progress: AcademyProgress, lesson: LessonOutline): AcademyProgress {
  let next = progress;

  for (const question of lesson.steps.filter(isQuestion)) {
    const view = questionView(question, next);
    const untouched =
      view.status === 'open' && view.selectedOptionId === null && view.wrongOptionIds.length === 0;
    if (untouched) continue;

    next = withQuestionResult(next, question.id, {
      selectedOptionId: null,
      attempts: view.attempts,
      firstAttemptCorrect: view.firstAttemptCorrect,
      status: 'open',
      wrongOptionIds: [],
    });
  }

  const { [lesson.id]: _position, ...positions } = next.lessonPositions;
  return { ...next, lessonPositions: positions };
}

export interface LessonSummary {
  questionCount: number;
  /** Fragen, die in diesem Durchgang richtig beantwortet oder aufgelöst wurden. */
  answeredCount: number;
  /** Fragen mit bekanntem Erstversuch. */
  firstAttemptKnown: number;
  firstAttemptCorrect: number;
  /** Gerundete Prozentzahl; `null`, wenn kein Erstversuch bekannt ist. */
  firstAttemptRate: number | null;
  /** Fragen ohne erfassten Erstversuch (aus älteren Versionen). */
  legacyQuestionCount: number;
  completed: boolean;
  /** Der letzte Abschluss war eine Wiederholung und brachte keine neuen XP. */
  repeated: boolean;
  /** Einmalig für diese Lektion gutgeschriebene XP. */
  xpAwarded: number;
  /** Durch den letzten Abschluss tatsächlich neu verdiente XP. */
  xpEarnedThisRun: number;
}

export function lessonSummary(lesson: LessonOutline, progress: AcademyProgress): LessonSummary {
  const questions = lesson.steps.filter(isQuestion);
  const views = questions.map((question) => questionView(question, progress));
  const known = views.filter((view) => view.firstAttemptCorrect !== null);
  // Beantwortet, aber ohne erfassten Erstversuch: stammt aus einer älteren Version.
  const legacyQuestionCount = questions.filter((question, index) => {
    const view = views[index];
    return (
      view.firstAttemptCorrect === null &&
      (view.legacy || question.id in progress.questionResults)
    );
  }).length;
  const firstCorrect = known.filter((view) => view.firstAttemptCorrect === true).length;

  const completed = progress.completedLessonIds.includes(lesson.id);
  const result = progress.lessonResults[lesson.id];
  const firstRunIsLatest =
    result !== undefined &&
    result.firstCompletedAt !== null &&
    result.firstCompletedAt === result.lastCompletedAt;
  const xpAwarded = result ? result.xpAwarded : completed ? lesson.xp : 0;

  return {
    questionCount: views.length,
    answeredCount: views.filter(isQuestionResolved).length,
    firstAttemptKnown: known.length,
    firstAttemptCorrect: firstCorrect,
    firstAttemptRate:
      known.length === 0 ? null : Math.round((firstCorrect / known.length) * 100),
    legacyQuestionCount,
    completed,
    repeated: completed && !firstRunIsLatest,
    xpAwarded,
    xpEarnedThisRun: firstRunIsLatest ? result.xpAwarded : 0,
  };
}

/**
 * Summe der verdienten XP: einmalig je Lektion plus XP für wiederholte Karten. Lektionen, die vor der Abschlusserfassung
 * erledigt wurden, zählen mit ihrem Lektionswert – wie bisher angezeigt.
 */
export function earnedXp(progress: AcademyProgress, lessons: LessonOutline[]): number {
  const completed = new Set(progress.completedLessonIds);
  // Dazu kommen die XP aus richtig wiederholten Karten (seit v18), kursübergreifend.
  return progress.reviewXp + lessons
    .filter((lesson) => completed.has(lesson.id))
    .reduce(
      (sum, lesson) => sum + (progress.lessonResults[lesson.id]?.xpAwarded ?? lesson.xp),
      0,
    );
}
