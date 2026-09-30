import type { CueKind } from './haptics';
import type { UiPreferences } from './uiPreferences';

/*
 * Kurze, selbst erzeugte Töne (Web Audio, keine Audiodateien, keine Lizenzfragen). Standard:
 * aus. Der Audiokontext entsteht erst beim ersten Ton nach einer Nutzeraktion; ohne
 * Einstellung „Töne“ wird nie ein Kontext angelegt. Töne sind leise und nie der einzige
 * Träger einer Information.
 */

export const TONE_NOTES: Record<CueKind, number[]> = {
  correct: [659.25, 880],
  complete: [523.25, 659.25, 783.99],
  milestone: [523.25, 659.25, 783.99, 1046.5],
};

const NOTE_LENGTH = 0.16;
const NOTE_GAP = 0.11;
const VOLUME = 0.05;

interface AudioLike {
  currentTime: number;
  state?: string;
  destination: unknown;
  resume?: () => Promise<void>;
  createOscillator: () => {
    type: string;
    frequency: { value: number };
    connect: (node: unknown) => void;
    start: (when: number) => void;
    stop: (when: number) => void;
  };
  createGain: () => {
    gain: {
      setValueAtTime: (value: number, when: number) => void;
      linearRampToValueAtTime: (value: number, when: number) => void;
    };
    connect: (node: unknown) => void;
  };
}

let context: AudioLike | null = null;

function defaultFactory(): AudioLike | null {
  const Ctor =
    typeof window === 'undefined'
      ? undefined
      : ((window as unknown as { AudioContext?: new () => AudioLike; webkitAudioContext?: new () => AudioLike }).AudioContext ??
        (window as unknown as { webkitAudioContext?: new () => AudioLike }).webkitAudioContext);
  return Ctor ? new Ctor() : null;
}

/** Nur für Tests: verwirft den zwischengespeicherten Kontext. */
export function resetSoundContext(): void {
  context = null;
}

export function playCue(
  kind: CueKind,
  preferences: Pick<UiPreferences, 'sound'>,
  factory: () => AudioLike | null = defaultFactory,
): boolean {
  if (!preferences.sound) return false;
  try {
    context ??= factory();
    if (!context) return false;
    if (context.state === 'suspended') void context.resume?.();
    const start = context.currentTime;
    TONE_NOTES[kind].forEach((frequency, index) => {
      const at = start + index * NOTE_GAP;
      const oscillator = context!.createOscillator();
      const gain = context!.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, at);
      gain.gain.linearRampToValueAtTime(VOLUME, at + 0.02);
      gain.gain.linearRampToValueAtTime(0.0001, at + NOTE_LENGTH);
      oscillator.connect(gain);
      gain.connect(context!.destination);
      oscillator.start(at);
      oscillator.stop(at + NOTE_LENGTH + 0.02);
    });
    return true;
  } catch {
    return false;
  }
}
