import type { BarCase } from './barCaseTypes';
import { c01BarCases } from './barCases/c01';
import { c02BarCases } from './barCases/c02';

/**
 * Registrierte Bar-für-Bar-Fälle des gewöhnlichen Trainers (C-01). Ein
 * Unit-Test prüft jeden Eintrag gegen den Vertrag und die Kursgliederung.
 * Angezeigt werden nur Fälle mit `status: 'approved'`.
 *
 * Siehe `academy/docs/BAR_CASE_CONTRACT.md`.
 */
export const barCases: readonly BarCase[] = [...c01BarCases];

/**
 * Transferpool (C-02): ungesehene Fälle für die spätere Transferprüfung (F-17).
 * Bewusst **nicht** in `barCases`: Kein Fall erscheint im gewöhnlichen Trainer,
 * Fehlerübersicht, Kurzlernen oder Rückblick. Die Fall-IDs sind disjunkt zu
 * C-01 (Test in `barCases/c02.test.ts`); die Prüfung gegen den Vertrag läuft
 * über `allBarCases`.
 */
export const transferCases: readonly BarCase[] = [...c02BarCases];

/** Alle registrierten Fälle beider Pools – nur für Vertrags- und Inhaltsprüfungen. */
export const allBarCases: readonly BarCase[] = [...barCases, ...transferCases];
