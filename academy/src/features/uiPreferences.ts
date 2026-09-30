import { useSyncExternalStore } from 'react';

/*
 * Geräteeinstellungen für Rückmeldung (Stufe 5): Ton, Vibration und Farbschema. Bewusst **nicht** im
 * Lernstand und **nicht** im Backup – sie gelten nur für dieses Gerät und ändern nichts an
 * Fortschritt, Antworten oder Fälligkeiten. Eigener Schlüssel, damit `wqt-academy-progress-v1`
 * und die Altschlüssel unberührt bleiben. Fehlender, defekter oder gesperrter Speicher führt
 * zu den Standardwerten (Ton aus, Vibration an, helles Farbschema).
 */

export const UI_PREFERENCES_KEY = 'wqt-academy-ui-v1';

export type ThemePreference = 'light' | 'dark' | 'auto';

export interface UiPreferences {
  sound: boolean;
  haptics: boolean;
  /** Farbschema: hell (Standard), dunkel oder wie im System. */
  theme: ThemePreference;
}

export const DEFAULT_UI_PREFERENCES: Readonly<UiPreferences> = { sound: false, haptics: true, theme: 'light' };

const isTheme = (value: unknown): value is ThemePreference => value === 'light' || value === 'dark' || value === 'auto';

/** Liest gespeicherten Text; unbekannte oder falsch getypte Werte fallen auf den Standard zurück. */
export function parseUiPreferences(raw: string | null | undefined): UiPreferences {
  try {
    const value = raw ? (JSON.parse(raw) as Partial<Record<keyof UiPreferences, unknown>>) : {};
    return {
      sound: typeof value.sound === 'boolean' ? value.sound : DEFAULT_UI_PREFERENCES.sound,
      haptics: typeof value.haptics === 'boolean' ? value.haptics : DEFAULT_UI_PREFERENCES.haptics,
      theme: isTheme(value.theme) ? value.theme : DEFAULT_UI_PREFERENCES.theme,
    };
  } catch {
    return { ...DEFAULT_UI_PREFERENCES };
  }
}

function storage(): Storage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
}

export function readUiPreferences(source: Pick<Storage, 'getItem'> | null = storage()): UiPreferences {
  try {
    return parseUiPreferences(source?.getItem(UI_PREFERENCES_KEY));
  } catch {
    return { ...DEFAULT_UI_PREFERENCES };
  }
}

export function writeUiPreferences(preferences: UiPreferences, target: Pick<Storage, 'setItem'> | null = storage()): boolean {
  try {
    target?.setItem(UI_PREFERENCES_KEY, JSON.stringify(preferences));
    return Boolean(target);
  } catch {
    return false;
  }
}

/* Kleiner Speicher, damit Einstellungen und Auslöser denselben Stand sehen. */
let cache: UiPreferences | null = null;
const listeners = new Set<() => void>();

export function getUiPreferences(): UiPreferences {
  cache ??= readUiPreferences();
  return cache;
}

export function setUiPreferences(changes: Partial<UiPreferences>): void {
  cache = { ...getUiPreferences(), ...changes };
  writeUiPreferences(cache);
  listeners.forEach((listener) => listener());
}

/** Nur für Tests: verwirft den zwischengespeicherten Stand. */
export function resetUiPreferencesCache(): void {
  cache = null;
  listeners.forEach((listener) => listener());
}

export function useUiPreferences(): [UiPreferences, (changes: Partial<UiPreferences>) => void] {
  const preferences = useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getUiPreferences,
    () => DEFAULT_UI_PREFERENCES as UiPreferences,
  );
  return [preferences, setUiPreferences];
}
