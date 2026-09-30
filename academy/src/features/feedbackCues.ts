import { useEffect, useRef } from 'react';
import { vibrate, type CueKind } from './haptics';
import { playCue } from './sounds';
import { getUiPreferences } from './uiPreferences';

export type { CueKind } from './haptics';

/** Gleiche Signale innerhalb dieser Zeit zählen als eines (z. B. doppelt aufgerufene Effekte). */
export const CUE_DEDUPE_MS = 400;
let lastCue: { kind: CueKind; at: number } | null = null;

/** Nur für Tests. */
export function resetCueDedupe(): void {
  lastCue = null;
}

/** Löst Vibration und/oder Ton gemäß den Geräteeinstellungen aus. */
export function cue(kind: CueKind): void {
  const now = Date.now();
  if (lastCue && lastCue.kind === kind && now - lastCue.at < CUE_DEDUPE_MS) return;
  lastCue = { kind, at: now };
  const preferences = getUiPreferences();
  vibrate(kind, preferences);
  playCue(kind, preferences);
}

/**
 * Signal nur beim **Übergang** auf „aktiv“ nach dem ersten Anzeigen – nie beim Laden mit
 * schon vorhandenem Zustand (z. B. nach Reload einer beantworteten Frage).
 */
export function useCueOnTransition(kind: CueKind, active: boolean): void {
  const previous = useRef(active);
  useEffect(() => {
    if (active && !previous.current) cue(kind);
    previous.current = active;
  }, [active, kind]);
}

/** Signal einmal beim Erscheinen einer Ansicht, die nur nach einer Nutzeraktion erscheint. */
export function useCueOnMount(kind: CueKind, enabled = true): void {
  useEffect(() => {
    if (enabled) cue(kind);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
