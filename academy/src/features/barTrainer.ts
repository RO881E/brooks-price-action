import {
  TRADE_DECISIONS,
  type BarCase,
  type CaseBar,
  type DecisionCue,
  type DecisionOption,
  type DecisionPoint,
  type OptionVerdict,
  type TradeDecision,
} from '../content/barCaseTypes';

/*
 * Engine des Bar-für-Bar-Trainers (F-14) – nur reine Funktionen, keine
 * Oberfläche und kein Speichern. Die Sitzung ist ein einfaches, serialisierbares
 * Objekt; jede Aktion liefert einen neuen Zustand (oder denselben, wenn die
 * Aktion in diesem Zustand nicht erlaubt ist).
 *
 * Ablauf je Entscheidungspunkt: wählen (Long/Short/Abwarten) → Hinweise zur
 * Begründung markieren → abgeben (Reveal) → weiter. Eine abgegebene Antwort
 * lässt sich nicht mehr ändern; zurückliegende Punkte sind nur noch lesbar.
 */

export interface CaseAnswer {
  decision: TradeDecision;
  cueIds: string[];
}

export interface CaseSession {
  caseId: string;
  /** Index des aktuellen Entscheidungspunkts. */
  index: number;
  /** Noch nicht abgegebene Auswahl am aktuellen Punkt. */
  draft: { decision: TradeDecision | null; cueIds: string[] };
  /** Abgegebene Antworten je Entscheidungspunkt-ID. */
  answers: Record<string, CaseAnswer>;
  /** Der aktuelle Punkt ist abgegeben und aufgelöst. */
  revealed: boolean;
  /** Alle Punkte sind abgegeben und der Fall ist zu Ende gelesen. */
  finished: boolean;
}

/** Zum Abgeben braucht es eine Entscheidung und mindestens einen Hinweis. */
export const MIN_CUES_TO_SUBMIT = 1;

const EMPTY_DRAFT: CaseSession['draft'] = { decision: null, cueIds: [] };

export function startSession(barCase: BarCase): CaseSession {
  return { caseId: barCase.id, index: 0, draft: EMPTY_DRAFT, answers: {}, revealed: false, finished: false };
}

export function currentDecision(barCase: BarCase, session: CaseSession): DecisionPoint | undefined {
  return session.finished ? undefined : barCase.decisions[session.index];
}

/**
 * Wie viele Bars sichtbar sind: bis zum aktuellen Entscheidungspunkt; nach dem
 * Reveal bis zum nächsten Punkt (bzw. alle nach dem letzten); am Ende alle.
 */
export function visibleBarCount(barCase: BarCase, session: CaseSession): number {
  if (session.finished) return barCase.bars.length;
  const decision = barCase.decisions[session.index];
  if (!decision) return barCase.bars.length;
  if (!session.revealed) return decision.afterBar + 1;
  const next = barCase.decisions[session.index + 1];
  return next ? next.afterBar + 1 : barCase.bars.length;
}

export function visibleBars(barCase: BarCase, session: CaseSession): CaseBar[] {
  return barCase.bars.slice(0, visibleBarCount(barCase, session));
}

function isOpen(session: CaseSession): boolean {
  return !session.revealed && !session.finished;
}

export function chooseDecision(session: CaseSession, decision: TradeDecision): CaseSession {
  if (!isOpen(session) || !TRADE_DECISIONS.includes(decision)) return session;
  if (session.draft.decision === decision) return session;
  return { ...session, draft: { ...session.draft, decision } };
}

/** Markiert oder entfernt einen Hinweis des aktuellen Punkts. */
export function toggleCue(barCase: BarCase, session: CaseSession, cueId: string): CaseSession {
  const decision = currentDecision(barCase, session);
  if (!decision || !isOpen(session) || !decision.cues.some((cue) => cue.id === cueId)) return session;
  const selected = session.draft.cueIds.includes(cueId);
  // Reihenfolge wie im Fall – so ist das Ergebnis unabhängig von der Klickfolge.
  const cueIds = decision.cues
    .map((cue) => cue.id)
    .filter((id) => (id === cueId ? !selected : session.draft.cueIds.includes(id)));
  return { ...session, draft: { ...session.draft, cueIds } };
}

export function canSubmit(session: CaseSession): boolean {
  return isOpen(session) && session.draft.decision !== null && session.draft.cueIds.length >= MIN_CUES_TO_SUBMIT;
}

/** Gibt die Auswahl ab und löst den aktuellen Punkt auf. */
export function submitDecision(barCase: BarCase, session: CaseSession): CaseSession {
  const decision = currentDecision(barCase, session);
  if (!decision || !canSubmit(session) || session.draft.decision === null) return session;
  return {
    ...session,
    answers: {
      ...session.answers,
      [decision.id]: { decision: session.draft.decision, cueIds: session.draft.cueIds },
    },
    draft: EMPTY_DRAFT,
    revealed: true,
  };
}

/** Nach dem Reveal zum nächsten Punkt – oder zum Ende des Falls. */
export function advance(barCase: BarCase, session: CaseSession): CaseSession {
  if (!session.revealed || session.finished) return session;
  if (session.index >= barCase.decisions.length - 1) {
    return { ...session, revealed: false, finished: true };
  }
  return { ...session, index: session.index + 1, revealed: false, draft: EMPTY_DRAFT };
}

export interface AnswerEvaluation {
  verdict: OptionVerdict;
  option: DecisionOption;
  /** Relevante Hinweise, die markiert wurden. */
  recognized: DecisionCue[];
  /** Relevante Hinweise, die nicht markiert wurden. */
  missed: DecisionCue[];
  /** Markierte Hinweise, die hier nicht tragen. */
  misleading: DecisionCue[];
}

/** Deterministische Auswertung einer Antwort – nur aus den Falldaten. */
export function evaluateAnswer(decision: DecisionPoint, answer: CaseAnswer): AnswerEvaluation {
  const option = decision.options.find((candidate) => candidate.decision === answer.decision)!;
  const chosen = new Set(answer.cueIds);
  return {
    verdict: option.verdict,
    option,
    recognized: decision.cues.filter((cue) => cue.relevant && chosen.has(cue.id)),
    missed: decision.cues.filter((cue) => cue.relevant && !chosen.has(cue.id)),
    misleading: decision.cues.filter((cue) => !cue.relevant && chosen.has(cue.id)),
  };
}

export interface DecisionResult {
  decision: DecisionPoint;
  answer: CaseAnswer;
  evaluation: AnswerEvaluation;
}

export interface CaseSummary {
  results: DecisionResult[];
  counts: Record<OptionVerdict, number>;
  recognizedCues: number;
  missedCues: number;
  /**
   * Lektionen zum Nacharbeiten: zuerst die der übersehenen Hinweise, dann die
   * dem Fall zugeordneten – ohne Doppelungen, in stabiler Reihenfolge.
   */
  lessonIds: string[];
  finished: boolean;
}

/** Sachliche Auswertung der bisher abgegebenen Punkte. Keine Prognose, kein P&L. */
export function caseSummary(barCase: BarCase, session: CaseSession): CaseSummary {
  const results = barCase.decisions.flatMap((decision) => {
    const answer = session.answers[decision.id];
    return answer ? [{ decision, answer, evaluation: evaluateAnswer(decision, answer) }] : [];
  });
  const counts: Record<OptionVerdict, number> = { best: 0, defensible: 0, mistake: 0 };
  for (const result of results) counts[result.evaluation.verdict] += 1;
  const missedLessons = results.flatMap((result) =>
    result.evaluation.missed.flatMap((cue) => (cue.lessonId ? [cue.lessonId] : [])),
  );
  return {
    results,
    counts,
    recognizedCues: results.reduce((sum, result) => sum + result.evaluation.recognized.length, 0),
    missedCues: results.reduce((sum, result) => sum + result.evaluation.missed.length, 0),
    lessonIds: [...new Set([...missedLessons, ...barCase.lessonIds])],
    finished: session.finished,
  };
}

export interface SessionProgress {
  /** 1-basierte Nummer des aktuellen Punkts (am Ende: Anzahl der Punkte). */
  position: number;
  total: number;
  answered: number;
}

export function sessionProgress(barCase: BarCase, session: CaseSession): SessionProgress {
  const total = barCase.decisions.length;
  return {
    position: session.finished ? total : session.index + 1,
    total,
    answered: Object.keys(session.answers).length,
  };
}

/* ------------------------------------------------------------------ */
/* Öffentliche Sicht                                                   */
/* ------------------------------------------------------------------ */

export type SessionPhase = 'decide' | 'revealed' | 'finished';

export interface PublicCue {
  id: string;
  label: string;
}

export interface PublicDecision {
  id: string;
  prompt: string;
  /** Wählbare Entscheidungen – ohne Einordnung. */
  options: TradeDecision[];
  /** Hinweise zur Begründung – ohne `relevant` und ohne Erklärung. */
  cues: PublicCue[];
}

export interface PublicCaseView {
  caseId: string;
  title: string;
  setup: string;
  timeframe?: string;
  /** Nur bereits bekannte Bars. */
  bars: CaseBar[];
  phase: SessionPhase;
  progress: SessionProgress;
  /** Aktueller Punkt vor dem Reveal (sonst `null`). */
  current: PublicDecision | null;
  selection: CaseSession['draft'];
  /** Bereits aufgelöste Punkte mit vollständiger Einordnung. */
  revealed: DecisionResult[];
}

/**
 * Alles, was die Oberfläche zeigen darf – und nur das. Vor dem Reveal enthält
 * die Sicht keine späteren Bars, keine Einordnung, keine Rückmeldungen und
 * keine Markierung relevanter Hinweise. Ein clientseitiges Angebot kann seine
 * gebündelten Falldaten nicht vor absichtlicher Quellcode-Inspektion
 * verbergen; die Sicht verhindert aber jedes versehentliche Verraten im
 * gerenderten DOM, in ARIA-Texten oder über Vor/Zurück.
 */
export function publicView(barCase: BarCase, session: CaseSession): PublicCaseView {
  const decision = currentDecision(barCase, session);
  const phase: SessionPhase = session.finished ? 'finished' : session.revealed ? 'revealed' : 'decide';
  const summary = caseSummary(barCase, session);
  return {
    caseId: barCase.id,
    title: barCase.title,
    setup: barCase.setup,
    ...(barCase.timeframe ? { timeframe: barCase.timeframe } : {}),
    bars: visibleBars(barCase, session).map((bar) => ({ ...bar })),
    phase,
    progress: sessionProgress(barCase, session),
    current:
      phase === 'decide' && decision
        ? {
            id: decision.id,
            prompt: decision.prompt,
            options: [...TRADE_DECISIONS],
            cues: decision.cues.map((cue) => ({ id: cue.id, label: cue.label })),
          }
        : null,
    selection: { decision: session.draft.decision, cueIds: [...session.draft.cueIds] },
    revealed: summary.results,
  };
}

/* ------------------------------------------------------------------ */
/* Fortsetzen nach Reload oder Abbruch                                 */
/* ------------------------------------------------------------------ */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function validAnswer(decision: DecisionPoint, value: unknown): CaseAnswer | null {
  if (!isRecord(value) || !TRADE_DECISIONS.includes(value.decision as TradeDecision)) return null;
  if (!Array.isArray(value.cueIds)) return null;
  const known = new Set(decision.cues.map((cue) => cue.id));
  const cueIds = value.cueIds.filter((id): id is string => typeof id === 'string' && known.has(id));
  if (cueIds.length !== value.cueIds.length || cueIds.length < MIN_CUES_TO_SUBMIT) return null;
  return { decision: value.decision as TradeDecision, cueIds: decision.cues.map((cue) => cue.id).filter((id) => cueIds.includes(id)) };
}

/**
 * Stellt eine gespeicherte Sitzung exakt wieder her – oder liefert `null`,
 * wenn sie nicht (mehr) zum Fall passt (anderer Fall, geänderte Punkte,
 * beschädigte Daten). Dann beginnt die Oberfläche nach Bestätigung von vorn;
 * geraten oder repariert wird nie.
 */
export function restoreSession(barCase: BarCase, stored: unknown): CaseSession | null {
  if (!isRecord(stored) || stored.caseId !== barCase.id) return null;
  const { index, revealed, finished, answers, draft } = stored;
  const total = barCase.decisions.length;
  if (typeof index !== 'number' || !Number.isInteger(index) || index < 0 || index >= total) return null;
  if (typeof revealed !== 'boolean' || typeof finished !== 'boolean' || !isRecord(answers) || !isRecord(draft)) {
    return null;
  }
  if (finished && (revealed || index !== total - 1)) return null;

  // Abgegeben sein müssen genau die Punkte vor dem aktuellen – plus der
  // aktuelle, wenn er aufgelöst oder der Fall beendet ist.
  const answeredCount = index + (revealed || finished ? 1 : 0);
  const expected = barCase.decisions.slice(0, answeredCount).map((decision) => decision.id);
  if (Object.keys(answers).length !== expected.length) return null;
  const restored: Record<string, CaseAnswer> = {};
  for (const [position, id] of expected.entries()) {
    const answer = validAnswer(barCase.decisions[position], answers[id]);
    if (!answer) return null;
    restored[id] = answer;
  }

  const current = barCase.decisions[index];
  const draftDecision = draft.decision;
  if (draftDecision !== null && !TRADE_DECISIONS.includes(draftDecision as TradeDecision)) return null;
  if (!Array.isArray(draft.cueIds)) return null;
  const known = new Set(current.cues.map((cue) => cue.id));
  if (!draft.cueIds.every((id) => typeof id === 'string' && known.has(id))) return null;
  const open = !revealed && !finished;
  if (!open && (draftDecision !== null || draft.cueIds.length > 0)) return null;

  return {
    caseId: barCase.id,
    index,
    draft: {
      decision: (draftDecision as TradeDecision | null) ?? null,
      cueIds: current.cues.map((cue) => cue.id).filter((id) => (draft.cueIds as string[]).includes(id)),
    },
    answers: restored,
    revealed,
    finished,
  };
}
