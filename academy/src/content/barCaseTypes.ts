/*
 * Datenvertrag für Bar-für-Bar-Trainingsfälle (F-14).
 *
 * Ein Fall ist ein eigenständig entworfener, schematischer Chartverlauf – kein
 * Originalchart, keine Buchabbildung, keine echten Kurse. Die Person sieht nur
 * die Bars bis zum jeweiligen Entscheidungspunkt, wählt Long, Short oder
 * Abwarten und begründet kurz über Hinweise. Erst danach erscheinen die
 * Einordnung aller Optionen und die folgenden Bars.
 *
 * Die vollständige Beschreibung für Content-PRs steht in
 * `academy/docs/BAR_CASE_CONTRACT.md`. Die Engine (`features/barTrainer.ts`)
 * und die Prüfung (`features/barCaseValidation.ts`) hängen nur von diesen
 * Typen ab – neue Fälle brauchen keine Änderung am Code.
 */

/** Version dieses Vertrags. Ändert sich nur bei inkompatiblen Anpassungen. */
export const BAR_CASE_SCHEMA_VERSION = 1;

/** Die drei Entscheidungen. „Abwarten“ kann die sachgerechte Wahl sein. */
export type TradeDecision = 'long' | 'short' | 'wait';

export const TRADE_DECISIONS: readonly TradeDecision[] = ['long', 'short', 'wait'];

export const TRADE_DECISION_LABELS: Record<TradeDecision, string> = {
  long: 'Long',
  short: 'Short',
  wait: 'Abwarten',
};

/**
 * Ein Bar mit **relativen** Werten: frei gewählte Skala (z. B. um 100), keine
 * echten Kurse. Es gilt `low ≤ min(open, close)` und `high ≥ max(open, close)`.
 */
export interface CaseBar {
  open: number;
  high: number;
  low: number;
  close: number;
  /** Optionale, kurze Beschriftung, die ab Sichtbarkeit des Bars gezeigt wird. */
  label?: string;
}

/**
 * Einordnung einer Option. Genau eine Option je Entscheidungspunkt ist
 * `best`. `defensible` heißt: vertretbar, aber nicht die klarste Wahl.
 */
export type OptionVerdict = 'best' | 'defensible' | 'mistake';

export interface DecisionOption {
  decision: TradeDecision;
  verdict: OptionVerdict;
  /** Begründete Rückmeldung zu genau dieser Wahl – erst nach dem Reveal sichtbar. */
  feedback: string;
}

/**
 * Hinweis, mit dem die Person ihre Wahl begründet. `relevant` markiert die
 * Hinweise, die am Entscheidungspunkt tatsächlich zählen; irrelevante
 * Hinweise sind plausible Ablenkungen. Beides wird erst nach dem Reveal
 * aufgelöst.
 */
export interface DecisionCue {
  /** Innerhalb des Entscheidungspunkts eindeutig. */
  id: string;
  label: string;
  relevant: boolean;
  /** Warum der Hinweis hier zählt oder nicht. */
  explanation: string;
  /** Optional: veröffentlichte Lektion, die den Hinweis erklärt (für Lernlinks). */
  lessonId?: string;
}

export interface DecisionPoint {
  /** Innerhalb des Falls eindeutig und stabil (Ergebnisse hängen daran). */
  id: string;
  /**
   * Nullbasierter Index des letzten sichtbaren Bars. Alles danach ist bis zur
   * Entscheidung verborgen. Streng aufsteigend über die Entscheidungspunkte;
   * nach dem letzten Punkt folgt mindestens ein Bar.
   */
  afterBar: number;
  /** Frage an dieser Stelle, nur mit bereits sichtbaren Informationen. */
  prompt: string;
  /** Genau eine Option je Entscheidung: Long, Short, Abwarten. */
  options: DecisionOption[];
  /** Mindestens zwei Hinweise, davon mindestens einer relevant. */
  cues: DecisionCue[];
  /** Zusammenfassende Einordnung nach dem Reveal. */
  explanation: string;
}

/**
 * `approved`: fachlich geprüft und für das Produkt freigegeben (C-01).
 * `draft`: in Arbeit – wird nie öffentlich angezeigt.
 */
export type BarCaseStatus = 'draft' | 'approved';

export interface BarCase {
  /** Stabile ID, z. B. `bar-case.chapter-02.trend-bar-follow-through`. */
  id: string;
  schemaVersion: typeof BAR_CASE_SCHEMA_VERSION;
  status: BarCaseStatus;
  title: string;
  /** Veröffentlichte Einheit, zu deren Thema der Fall gehört. */
  unitId: string;
  /** Veröffentlichte Lektionen dieser Einheit, deren Inhalt der Fall übt. */
  lessonIds: string[];
  /** Kurze Ausgangslage – nur, was vor dem ersten Bar bekannt ist. */
  setup: string;
  /** Optionaler Rahmen, z. B. „schematischer 5-Minuten-Chart“. */
  timeframe?: string;
  bars: CaseBar[];
  decisions: DecisionPoint[];
  /** Quellenanker (Abschnitte der Buchvorlage), mindestens einer. */
  sourceAnchors: string[];
}
