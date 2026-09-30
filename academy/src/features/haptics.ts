import type { UiPreferences } from './uiPreferences';

/*
 * Vibration als zusätzliche Rückmeldung (Stufe 5). Nur nach einer echten Nutzeraktion
 * aufgerufen (nie beim Laden), nur bei eingeschalteter Einstellung und nur, wenn das Gerät
 * `navigator.vibrate` kennt (z. B. Android-Chrome; nicht iPhone-Safari – dort passiert nichts).
 * Eine falsche Antwort löst bewusst nichts aus. Vibration ist nie der einzige Träger einer
 * Information: Texte und Symbole bleiben.
 */

export type CueKind = 'correct' | 'complete' | 'milestone';

export const VIBRATION_PATTERNS: Record<CueKind, number[]> = {
  correct: [18],
  complete: [30, 40, 30],
  milestone: [40, 60, 40, 60, 80],
};

export function vibrationSupported(nav: Pick<Navigator, 'vibrate'> | undefined = typeof navigator === 'undefined' ? undefined : navigator): boolean {
  return typeof nav?.vibrate === 'function';
}

export function vibrate(
  kind: CueKind,
  preferences: Pick<UiPreferences, 'haptics'>,
  nav: Pick<Navigator, 'vibrate'> | undefined = typeof navigator === 'undefined' ? undefined : navigator,
): boolean {
  if (!preferences.haptics || !vibrationSupported(nav)) return false;
  try {
    return nav!.vibrate(VIBRATION_PATTERNS[kind]);
  } catch {
    return false;
  }
}
