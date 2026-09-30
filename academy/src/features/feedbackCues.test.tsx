import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cue, CUE_DEDUPE_MS, resetCueDedupe, useCueOnMount, useCueOnTransition } from './feedbackCues';
import { resetSoundContext } from './sounds';
import { resetUiPreferencesCache, setUiPreferences } from './uiPreferences';

let vibrateSpy: ReturnType<typeof vi.fn>;

beforeEach(() => {
  vibrateSpy = vi.fn(() => true);
  Object.defineProperty(navigator, 'vibrate', { value: vibrateSpy, configurable: true });
});

afterEach(() => {
  resetCueDedupe();
  vi.useRealTimers();
  window.localStorage.clear();
  resetUiPreferencesCache();
  resetSoundContext();
  Reflect.deleteProperty(navigator, 'vibrate');
});

describe('Signale (Vibration/Ton)', () => {
  it('Übergang: erst beim Wechsel auf „aktiv“, nie beim Laden mit fertigem Zustand', () => {
    const loaded = renderHook(() => useCueOnTransition('correct', true));
    expect(vibrateSpy).not.toHaveBeenCalled();
    loaded.unmount();

    const { rerender } = renderHook(({ active }) => useCueOnTransition('correct', active), { initialProps: { active: false } });
    expect(vibrateSpy).not.toHaveBeenCalled();
    rerender({ active: true });
    expect(vibrateSpy).toHaveBeenCalledTimes(1);
    rerender({ active: true });
    expect(vibrateSpy).toHaveBeenCalledTimes(1);
  });

  it('Mount: einmal, nur wenn aktiviert', () => {
    renderHook(() => useCueOnMount('complete', false));
    expect(vibrateSpy).not.toHaveBeenCalled();
    renderHook(() => useCueOnMount('complete'));
    expect(vibrateSpy).toHaveBeenCalledTimes(1);
  });

  it('bei ausgeschalteter Vibration bleibt alles still', () => {
    setUiPreferences({ haptics: false });
    renderHook(() => useCueOnMount('milestone'));
    expect(vibrateSpy).not.toHaveBeenCalled();
  });

  it('gleiches Signal innerhalb kurzer Zeit nur einmal, danach wieder', () => {
    vi.useFakeTimers();
    cue('correct');
    cue('correct');
    expect(vibrateSpy).toHaveBeenCalledTimes(1);
    cue('complete');
    expect(vibrateSpy).toHaveBeenCalledTimes(2);
    vi.advanceTimersByTime(CUE_DEDUPE_MS + 1);
    cue('complete');
    expect(vibrateSpy).toHaveBeenCalledTimes(3);
  });
});
