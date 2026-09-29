import { barCases as registeredCases } from '../content/barCases';
import type { BarCase, CaseBar, DecisionPoint } from '../content/barCaseTypes';
import type { CourseOutline } from '../content/types';
import { evaluateAnswer, type AnswerEvaluation, type CaseAnswer } from './barTrainer';
import { caseAvailable, findPublishedCase } from './caseTraining';
import type { AcademyProgress, CaseReasoning, CaseRun } from './progress';

/*
 * Rückblick auf abgeschlossene Trainerrunden (F-25). Reine Funktionen: Der
 * Rückblick liest ausschließlich gespeicherte, abgeschlossene Runden mit
 * Einzelantworten (`caseRuns[].answers`, seit v12) und schreibt nie etwas.
 * Passt eine Runde nicht (mehr) exakt zum Fall, gibt es einen klaren Grund
 * statt einer geratenen Rekonstruktion.
 */

export type ReplayProblem =
  /** Fall unbekannt oder nicht (mehr) freigegeben. */
  | 'unknown-case'
  /** Fall derzeit nicht zugänglich (z. B. nach Zurücksetzen und Import). */
  | 'locked'
  /** Keine abgeschlossene Runde mit dieser ID – auch eine laufende Runde zählt nicht. */
  | 'unknown-run'
  /** Runde vor F-16 ohne gespeicherte Einzelantworten. */
  | 'no-answers'
  /** Entscheidungspunkte oder Antworten passen nicht mehr zum Fall. */
  | 'changed';

export interface ReplayStep {
  index: number;
  decision: DecisionPoint;
  answer: CaseAnswer;
  evaluation: AnswerEvaluation;
  /** Bars, die vor der Entscheidung sichtbar waren. */
  barsBefore: CaseBar[];
  /** Bars nach der Auflösung – bis zum nächsten Punkt bzw. alle. */
  barsAfter: CaseBar[];
  /** Damalige eigene Begründung (F-24), falls notiert. */
  reasoning?: CaseReasoning;
  /** Dieselbe Entscheidung in der unmittelbar vorherigen abgeschlossenen Runde (nur Fakten, keine Bewertung). */
  previous?: PreviousAnswer;
}

export interface PreviousAnswer {
  completedAt: string;
  answer: CaseAnswer;
  reasoning?: CaseReasoning;
  /** Andere Wahl als in dieser Runde. */
  decisionChanged: boolean;
  /** Angegebene Sicherheit unterscheidet sich (nur wenn in beiden Runden notiert). */
  confidenceChanged: boolean;
}

export type Replay =
  | { ok: true; barCase: BarCase; run: CaseRun; steps: ReplayStep[] }
  | { ok: false; problem: ReplayProblem; barCase?: BarCase };

function validAnswer(decision: DecisionPoint, answer: CaseAnswer | undefined): answer is CaseAnswer {
  if (!answer || !decision.options.some((option) => option.decision === answer.decision)) return false;
  const known = new Set(decision.cues.map((cue) => cue.id));
  return answer.cueIds.every((id) => known.has(id));
}

export function buildReplay(
  course: CourseOutline,
  progress: AcademyProgress,
  caseId: string,
  sessionId: string,
  cases: readonly BarCase[] = registeredCases,
): Replay {
  const barCase = findPublishedCase(caseId, cases);
  if (!barCase) return { ok: false, problem: 'unknown-case' };
  if (!caseAvailable(course, progress, barCase)) return { ok: false, problem: 'locked', barCase };
  const run = progress.caseRuns[caseId]?.find((item) => item.sessionId === sessionId);
  if (!run) return { ok: false, problem: 'unknown-run', barCase };
  if (!run.answers) return { ok: false, problem: 'no-answers', barCase };

  const decisionIds = new Set(barCase.decisions.map((decision) => decision.id));
  if (Object.keys(run.answers).some((id) => !decisionIds.has(id))) return { ok: false, problem: 'changed', barCase };
  const steps: ReplayStep[] = [];
  const runs = progress.caseRuns[caseId] ?? [];
  const previousRun = runs[runs.findIndex((item) => item.sessionId === sessionId) - 1];
  for (const [index, decision] of barCase.decisions.entries()) {
    const answer = run.answers[decision.id];
    if (!validAnswer(decision, answer)) return { ok: false, problem: 'changed', barCase };
    const earlier = previousRun?.answers?.[decision.id];
    const earlierReasoning = previousRun?.reasoning?.[decision.id];
    const nowReasoning = run.reasoning?.[decision.id];
    const previous: PreviousAnswer | undefined =
      previousRun && validAnswer(decision, earlier)
        ? {
            completedAt: previousRun.completedAt,
            answer: earlier,
            ...(earlierReasoning ? { reasoning: earlierReasoning } : {}),
            decisionChanged: earlier.decision !== answer.decision,
            confidenceChanged: Boolean(
              earlierReasoning?.confidence && nowReasoning?.confidence && earlierReasoning.confidence !== nowReasoning.confidence,
            ),
          }
        : undefined;
    const next = barCase.decisions[index + 1];
    steps.push({
      index,
      decision,
      answer,
      evaluation: evaluateAnswer(decision, answer),
      barsBefore: barCase.bars.slice(0, decision.afterBar + 1),
      barsAfter: barCase.bars.slice(0, next ? next.afterBar + 1 : barCase.bars.length),
      ...(run.reasoning?.[decision.id] ? { reasoning: run.reasoning[decision.id] } : {}),
      ...(previous ? { previous } : {}),
    });
  }
  return { ok: true, barCase, run, steps };
}

/** Abgeschlossene Runden eines Falls, jüngste zuerst, mit Angabe, ob ein Rückblick möglich ist. */
export function completedRuns(progress: AcademyProgress, caseId: string): Array<{ run: CaseRun; replayable: boolean }> {
  return [...(progress.caseRuns[caseId] ?? [])]
    .reverse()
    .map((run) => ({ run, replayable: Boolean(run.answers) }));
}
