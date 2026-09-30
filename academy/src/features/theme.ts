import { useEffect } from 'react';
import { useUiPreferences, type ThemePreference } from './uiPreferences';

/*
 * Farbschema (Stufe 5b): hell, dunkel oder wie im System. Gesetzt wird `data-theme` am
 * <html>-Element (`light` | `dark`); die Farben stehen als Tokens in `src/theme.css`. Beim
 * Start setzt ein kleines Skript in `index.html` dasselbe Attribut vor dem ersten Zeichnen,
 * damit nichts aufblitzt. Der Speicher ist der Geräteschlüssel `wqt-academy-ui-v1`.
 */

export type ResolvedTheme = 'light' | 'dark';

export function resolveTheme(preference: ThemePreference, systemDark: boolean): ResolvedTheme {
  if (preference === 'dark') return 'dark';
  if (preference === 'auto') return systemDark ? 'dark' : 'light';
  return 'light';
}

export function systemPrefersDark(): boolean {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function applyTheme(theme: ResolvedTheme, root: HTMLElement = document.documentElement): void {
  root.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute('content', '#0d1728');
}

/** Wendet die gespeicherte Wahl an und folgt bei „wie im System“ dem Systemwunsch. */
export function useApplyTheme(): void {
  const [{ theme }] = useUiPreferences();
  useEffect(() => {
    applyTheme(resolveTheme(theme, systemPrefersDark()));
    if (theme !== 'auto' || typeof window.matchMedia !== 'function') return;
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme(resolveTheme('auto', query.matches));
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, [theme]);
}
