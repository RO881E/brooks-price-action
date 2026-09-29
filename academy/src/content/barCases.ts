import type { BarCase } from './barCaseTypes';

/**
 * Registrierte Bar-für-Bar-Fälle (F-14). Absichtlich leer: Die fachlich
 * geprüften Erstfälle liefert ein eigener Content-PR (C-01). Neue Fälle werden
 * hier eingetragen; ein Unit-Test prüft jeden Eintrag gegen den Vertrag und
 * die Kursgliederung. Angezeigt werden später nur Fälle mit `status: 'approved'`.
 *
 * Siehe `academy/docs/BAR_CASE_CONTRACT.md`.
 */
export const barCases: readonly BarCase[] = [];
