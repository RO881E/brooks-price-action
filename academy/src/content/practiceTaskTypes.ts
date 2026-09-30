import type { BarCaseStatus, CaseBar } from './barCaseTypes';

/*
 * Datenvertrag für die Übungsaufgaben aus Content-Pack C-04 (Stufe 4d):
 * „Finde den Signal-Bar“ und „Ordne die Schritte“.
 *
 * Beide Formen sind reine Übung: Sie zählen nichts, speichern nichts und ändern den
 * Lernstand nicht. Die Bars sind eigenständig konstruierte, relative Zahlenfolgen –
 * keine Buchabbildungen, keine echten Kurse. Nur `approved` wird angezeigt.
 */

export const PRACTICE_TASK_SCHEMA_VERSION = 1;

/**
 * Mechanische Regel, nach der der Zielbar aus den sichtbaren Bars folgt. Der Validator
 * rechnet sie nach (`features/practiceTaskValidation.ts`): Zielbar und Text können so
 * nicht auseinanderlaufen. Die fachliche Freigabe bleibt trotzdem redaktionell.
 */
export type SignalRule =
  | 'trend-bar-up'
  | 'trend-bar-down'
  | 'doji'
  | 'failed-breakout'
  | 'breakout-close'
  | 'counter-spike'
  | 'climax-bar'
  | 'first-pause';

export interface SignalHint {
  /** Nullbasierter Index eines naheliegenden falschen Bars. */
  barIndex: number;
  /** Warum dieser Bar die Aufgabe nicht erfüllt. */
  text: string;
}

export interface SignalBarTask {
  /** Stabile ID, z. B. `practice.c04.signal.trend-bar-up`. */
  id: string;
  schemaVersion: typeof PRACTICE_TASK_SCHEMA_VERSION;
  status: BarCaseStatus;
  title: string;
  unitId: string;
  /** Veröffentlichte Lektionen dieser Einheit; die Aufgabe ist erst nach allen davon offen. */
  lessonIds: string[];
  /** Die Frage – nur mit den gezeigten Bars beantwortbar. */
  prompt: string;
  bars: CaseBar[];
  targetBarIndex: number;
  rule: SignalRule;
  /** Begründung nach dem Treffer. */
  explanation: string;
  /** Allgemeiner Hinweis bei einem Fehlversuch ohne eigenen `hints`-Eintrag. */
  retryHint: string;
  /** Gezielte Rückmeldungen zu naheliegenden falschen Bars (optional). */
  hints: SignalHint[];
  sourceAnchors: string[];
}

export interface OrderStep {
  /** Innerhalb der Aufgabe eindeutig. */
  id: string;
  text: string;
}

export interface OrderTask {
  /** Stabile ID, z. B. `practice.c04.order.read-a-bar`. */
  id: string;
  schemaVersion: typeof PRACTICE_TASK_SCHEMA_VERSION;
  status: BarCaseStatus;
  title: string;
  unitId: string;
  lessonIds: string[];
  prompt: string;
  /** Die Schritte in der **richtigen** Reihenfolge; die App mischt sie. */
  steps: OrderStep[];
  /** Warum diese Reihenfolge – nach dem Lösen sichtbar. */
  explanation: string;
  sourceAnchors: string[];
}
