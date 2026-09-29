import type { BarCase } from './barCaseTypes';
import { c01BarCases } from './barCases/c01';

/**
 * Registrierte Bar-für-Bar-Fälle. Ein Unit-Test prüft jeden Eintrag gegen den
 * Vertrag und die Kursgliederung. Später werden nur fachlich freigegebene
 * Fälle mit `status: 'approved'` angezeigt.
 *
 * Siehe `academy/docs/BAR_CASE_CONTRACT.md`.
 */
export const barCases: readonly BarCase[] = [...c01BarCases];
