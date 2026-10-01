import { barCases as registeredCases } from '../content/barCases';
import type { BarCase, DecisionCue, DecisionPoint, OptionVerdict } from '../content/barCaseTypes';
import type { CourseOutline, LessonOutline, QuestionOutline, UnitOutline } from '../content/types';
import { caseAvailable, caseInCourse, findPublishedCase } from './caseTraining';
import { lessonAccessState } from './courseAccess';
import type { AcademyProgress, CaseRunAnswer } from './progress';
import { reviewPool } from './reviewSession';

/*
 * „Was ich noch verwechsle“ (F-16): sachliche Übersicht wiederholter Fehler –
 * nur aus erfassten Daten. Fragen: `questionResults` und `reviewCards`.
 * Trainerfälle: gespeicherte Einzelantworten der Runden (`caseRuns[].answers`,
 * seit v12) und die redaktionell gepflegten Hinweise aus C-01.
 *
 * Keine Diagnosen, keine erfundenen Ursachen, keine Prozentwerte: Gezeigt wird,
 * was wann wie oft falsch war und was zuletzt übersehen wurde. Ein Erstversuch
 * aus einer älteren Version (`firstAttemptCorrect: null`) bleibt „nicht
 * erfasst“ und zählt nicht als Fehler.
 */

/** Zuletzt noch falsch/offen – oder später richtig beantwortet bzw. entschieden. */
export type MistakeState = 'open' | 'later-correct';

export interface QuestionMistake {
  kind: 'question';
  key: string;
  question: QuestionOutline;
  lesson: LessonOutline;
  unit: UnitOutline;
  /** Position in der Buchreihenfolge. */
  order: number;
  /** Ergebnis des ersten Versuchs in der Lektion. */
  firstAttempt: 'correct' | 'wrong' | 'unknown';
  /** Lösung in der Lektion aufgedeckt. */
  revealed: boolean;
  /** Falsch gewählte Antworten im aktuellen Lektionsdurchgang. */
  lessonWrongOptions: string[];
  /** Falsche Antworten in der Wiederholung und Zahl der Wiederholungen. */
  reviewWrong: number;
  reviews: number;
  /** Erfasste falsche Antworten insgesamt (Lektion + Wiederholung). */
  count: number;
  state: MistakeState;
  lessonAccessible: boolean;
}

export interface CaseMistake {
  kind: 'case';
  key: string;
  barCase: BarCase;
  decision: DecisionPoint;
  /** Position des Falls in der Registry (×1000) plus Entscheidungsindex – stabile Reihenfolge. */
  order: number;
  /** Runden mit erfasster Antwort an diesem Punkt. */
  answeredRuns: number;
  /** Davon mit Fehler: Einordnung „mistake“ oder übersehener relevanter Hinweis. */
  count: number;
  /** Letzte Runde mit Fehler: gewählte Entscheidung, Einordnung, übersehene Hinweise. */
  last: { answer: CaseRunAnswer; verdict: OptionVerdict; missed: DecisionCue[]; completedAt: string };
  state: MistakeState;
  caseAvailable: boolean;
}

export type Mistake = QuestionMistake | CaseMistake;

export interface MistakeOverview {
  items: Mistake[];
  open: number;
  laterCorrect: number;
  /** Beantwortete Fragen mit unbekanntem Erstversuch (älterer Stand). */
  unknownFirstAttempts: number;
  /** Abgeschlossene Runden ohne erfasste Einzelantworten (vor v12). */
  runsWithoutAnswers: number;
  /** Runden zu Fällen, die es nicht (mehr) gibt oder die nicht freigegeben sind. */
  runsOfUnknownCases: number;
}

function canOpen(course: CourseOutline, lesson: LessonOutline, progress: AcademyProgress): boolean {
  const state = lessonAccessState(course, lesson, progress.completedLessonIds);
  return state === 'available' || state === 'complete';
}

/** Fehler zu Lektionsfragen – nur aus bereits abgeschlossenen Lektionen. */
export function questionMistakes(course: CourseOutline, progress: AcademyProgress): {
  items: QuestionMistake[];
  unknownFirstAttempts: number;
} {
  const items: QuestionMistake[] = [];
  let unknownFirstAttempts = 0;
  for (const item of reviewPool(course, progress)) {
    const id = item.question.id;
    const result = progress.questionResults[id];
    const card = progress.reviewCards[id];
    const answeredLegacy = !result && id in progress.answers;
    const firstAttempt: QuestionMistake['firstAttempt'] =
      !result || result.firstAttemptCorrect === null ? 'unknown' : result.firstAttemptCorrect ? 'correct' : 'wrong';
    if ((result && result.firstAttemptCorrect === null) || answeredLegacy) unknownFirstAttempts += 1;

    const lessonWrongOptions = result ? [...result.wrongOptionIds] : [];
    const lessonWrong = firstAttempt === 'wrong' ? Math.max(1, lessonWrongOptions.length) : lessonWrongOptions.length;
    const reviewWrong = card?.lapses ?? 0;
    const revealed = result?.status === 'revealed';
    const count = lessonWrong + reviewWrong;
    if (count === 0 && !revealed) continue;

    // Letzter Stand: in der Wiederholung das letzte Ergebnis, sonst der Lektionsstand.
    const state: MistakeState = card
      ? card.lastResult === 'wrong'
        ? 'open'
        : 'later-correct'
      : result?.status === 'correct'
        ? 'later-correct'
        : 'open';

    items.push({
      kind: 'question',
      key: `question:${id}`,
      question: item.question,
      lesson: item.lesson,
      unit: item.unit,
      order: item.order,
      firstAttempt,
      revealed,
      lessonWrongOptions,
      reviewWrong,
      reviews: card?.reviews ?? 0,
      count,
      state,
      lessonAccessible: canOpen(course, item.lesson, progress),
    });
  }
  return { items, unknownFirstAttempts };
}

function evaluate(decision: DecisionPoint, answer: CaseRunAnswer): { verdict: OptionVerdict; missed: DecisionCue[] } | null {
  const option = decision.options.find((candidate) => candidate.decision === answer.decision);
  if (!option) return null;
  const chosen = new Set(answer.cueIds);
  return { verdict: option.verdict, missed: decision.cues.filter((cue) => cue.relevant && !chosen.has(cue.id)) };
}

/** Fehler in Trainerfällen je Entscheidungspunkt – nur mit erfassten Einzelantworten. */
export function caseMistakes(
  course: CourseOutline,
  progress: AcademyProgress,
  cases: readonly BarCase[] = registeredCases,
): { items: CaseMistake[]; runsWithoutAnswers: number; runsOfUnknownCases: number } {
  const items: CaseMistake[] = [];
  let runsWithoutAnswers = 0;
  let runsOfUnknownCases = 0;
  for (const [caseId, runs] of Object.entries(progress.caseRuns)) {
    const barCase = findPublishedCase(caseId, cases);
    if (!barCase) {
      runsOfUnknownCases += runs.length;
      continue;
    }
    // Fälle anderer Kurse zeigt deren eigene Übersicht.
    if (!caseInCourse(course, barCase)) continue;
    runsWithoutAnswers += runs.filter((run) => !run.answers).length;
    const order = cases.findIndex((item) => item.id === caseId);
    const available = caseAvailable(course, progress, barCase);
    for (const [decisionIndex, decision] of barCase.decisions.entries()) {
      let answeredRuns = 0;
      let count = 0;
      let last: CaseMistake['last'] | null = null;
      let latestOk = false;
      // Runden sind nach Abschluss sortiert; die letzte erfasste Antwort entscheidet über den Stand.
      for (const run of runs) {
        const answer = run.answers?.[decision.id];
        const result = answer ? evaluate(decision, answer) : null;
        if (!answer || !result) continue;
        answeredRuns += 1;
        const wrong = result.verdict === 'mistake' || result.missed.length > 0;
        latestOk = !wrong;
        if (wrong) {
          count += 1;
          last = { answer, verdict: result.verdict, missed: result.missed, completedAt: run.completedAt };
        }
      }
      if (count === 0 || !last) continue;
      items.push({
        kind: 'case',
        key: `case:${caseId}:${decision.id}`,
        barCase,
        decision,
        // Fall in Registerreihenfolge, darin die Entscheidungen in Fallreihenfolge.
        order: order * 1000 + decisionIndex,
        answeredRuns,
        count,
        last,
        state: latestOk ? 'later-correct' : 'open',
        caseAvailable: available,
      });
    }
  }
  return { items, runsWithoutAnswers, runsOfUnknownCases };
}

/**
 * Reihenfolge: zuerst offene Fehler, dann häufigere, dann Fragen vor Fällen in
 * Buch- bzw. Registerreihenfolge. Stabil und ohne Zufall.
 */
export function sortMistakes(items: readonly Mistake[]): Mistake[] {
  return [...items].sort((a, b) => {
    if (a.state !== b.state) return a.state === 'open' ? -1 : 1;
    if (a.count !== b.count) return b.count - a.count;
    if (a.kind !== b.kind) return a.kind === 'question' ? -1 : 1;
    return a.order - b.order || a.key.localeCompare(b.key);
  });
}

export type MistakeFilter = 'open' | 'all';

export function filterMistakes(items: readonly Mistake[], filter: MistakeFilter): Mistake[] {
  return filter === 'all' ? [...items] : items.filter((item) => item.state === 'open');
}

export function mistakeOverview(
  course: CourseOutline,
  progress: AcademyProgress,
  cases: readonly BarCase[] = registeredCases,
): MistakeOverview {
  const questions = questionMistakes(course, progress);
  const trainer = caseMistakes(course, progress, cases);
  const items = sortMistakes([...questions.items, ...trainer.items]);
  return {
    items,
    open: items.filter((item) => item.state === 'open').length,
    laterCorrect: items.filter((item) => item.state === 'later-correct').length,
    unknownFirstAttempts: questions.unknownFirstAttempts,
    runsWithoutAnswers: trainer.runsWithoutAnswers,
    runsOfUnknownCases: trainer.runsOfUnknownCases,
  };
}

/** Lektion zu einer Hinweis-Lektions-ID – nur, wenn sie zugänglich ist. */
export function accessibleLesson(
  course: CourseOutline,
  progress: AcademyProgress,
  lessonId: string | undefined,
): LessonOutline | undefined {
  if (!lessonId) return undefined;
  for (const unit of course.units) {
    const lesson = unit.lessons.find((item) => item.id === lessonId);
    if (lesson) return canOpen(course, lesson, progress) ? lesson : undefined;
  }
  return undefined;
}
