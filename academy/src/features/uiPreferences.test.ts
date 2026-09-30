import { afterEach, describe, expect, it, vi } from 'vitest';
import { vibrate, VIBRATION_PATTERNS, vibrationSupported } from './haptics';
import { playCue, resetSoundContext, TONE_NOTES } from './sounds';
import {
  DEFAULT_UI_PREFERENCES,
  getUiPreferences,
  parseUiPreferences,
  readUiPreferences,
  resetUiPreferencesCache,
  setUiPreferences,
  UI_PREFERENCES_KEY,
  writeUiPreferences,
} from './uiPreferences';

afterEach(() => {
  window.localStorage.clear();
  resetUiPreferencesCache();
  resetSoundContext();
});

describe('Geräteeinstellungen (Ton, Vibration)', () => {
  it('Standard: Ton aus, Vibration an – auch bei fehlendem oder defektem Speicher', () => {
    expect(DEFAULT_UI_PREFERENCES).toEqual({ sound: false, haptics: true, theme: 'light' });
    expect(parseUiPreferences(null)).toEqual(DEFAULT_UI_PREFERENCES);
    expect(parseUiPreferences('{kaputt')).toEqual(DEFAULT_UI_PREFERENCES);
    expect(parseUiPreferences('{"sound":"ja","haptics":3}')).toEqual(DEFAULT_UI_PREFERENCES);
    expect(parseUiPreferences('{"sound":true,"haptics":false,"x":1}')).toEqual({ sound: true, haptics: false, theme: 'light' });
    expect(parseUiPreferences('{"theme":"dark"}')).toEqual({ sound: false, haptics: true, theme: 'dark' });
    expect(parseUiPreferences('{"theme":"bunt"}').theme).toBe('bunt');
    expect(parseUiPreferences('{"theme":"neon"}').theme).toBe('light');
    expect(readUiPreferences({ getItem: () => { throw new Error('gesperrt'); } })).toEqual(DEFAULT_UI_PREFERENCES);
  });

  it('schreibt nur den eigenen Schlüssel und lässt den Lernstand unberührt', () => {
    window.localStorage.setItem('wqt-academy-progress-v1', 'LERNSTAND');
    setUiPreferences({ sound: true });
    expect(getUiPreferences()).toEqual({ sound: true, haptics: true, theme: 'light' });
    expect(JSON.parse(window.localStorage.getItem(UI_PREFERENCES_KEY)!)).toEqual({ sound: true, haptics: true, theme: 'light' });
    expect(window.localStorage.getItem('wqt-academy-progress-v1')).toBe('LERNSTAND');
    expect(writeUiPreferences({ sound: false, haptics: false, theme: 'light' }, { setItem: () => { throw new Error('voll'); } })).toBe(false);
  });

  it('Vibration: nur bei Einstellung und Unterstützung; falsche Antwort löst nichts aus', () => {
    const nav = { vibrate: vi.fn(() => true) };
    expect(vibrate('correct', { haptics: true }, nav)).toBe(true);
    expect(nav.vibrate).toHaveBeenCalledWith(VIBRATION_PATTERNS.correct);
    expect(vibrate('complete', { haptics: false }, nav)).toBe(false);
    expect(nav.vibrate).toHaveBeenCalledTimes(1);
    expect(vibrationSupported({} as Navigator)).toBe(false);
    expect(vibrate('correct', { haptics: true }, {} as Navigator)).toBe(false);
    expect(Object.keys(VIBRATION_PATTERNS)).toEqual(['correct', 'complete', 'milestone']);
  });

  it('Töne: ohne Einstellung nie ein Audiokontext; mit Einstellung ein leiser Ton je Note', () => {
    const factory = vi.fn();
    expect(playCue('correct', { sound: false }, factory)).toBe(false);
    expect(factory).not.toHaveBeenCalled();

    const oscillators: number[] = [];
    const gains: number[] = [];
    const audio = {
      currentTime: 1,
      destination: {},
      createOscillator: () => ({ type: '', frequency: { value: 0 }, connect() {}, start() {}, stop() { oscillators.push(1); } }),
      createGain: () => ({ gain: { setValueAtTime() {}, linearRampToValueAtTime: (value: number) => gains.push(value) }, connect() {} }),
    };
    expect(playCue('complete', { sound: true }, () => audio as never)).toBe(true);
    expect(oscillators).toHaveLength(TONE_NOTES.complete.length);
    expect(Math.max(...gains)).toBeLessThanOrEqual(0.06);
    resetSoundContext();
    expect(playCue('correct', { sound: true }, () => null)).toBe(false);
  });
});
