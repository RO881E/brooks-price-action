import type { TodayAction } from './today';

/*
 * Der Bulle „Bo“ (Stufe 1 „spielerischer“): freundliche Begleitfigur. Er sagt nur
 * Kurzes und Aufmunterndes – Fachaussagen, Zähler und Bewertungen bleiben in den
 * bestehenden Texten. Die Sätze sind fest und hängen nur von der nächsten Aktion ab
 * (kein Zufall, keine Behauptung über Können oder Handelserfolg).
 */

export type BullMood = 'happy' | 'think' | 'cheer' | 'calm';

export interface BullLine {
  mood: BullMood;
  text: string;
}

/** Begrüßung auf „Heute“ passend zur nächsten Aktion. */
export function bullGreeting(action: TodayAction): BullLine {
  switch (action.kind) {
    case 'review-resume':
      return { mood: 'happy', text: 'Weiter geht’s! Deine Runde wartet schon auf dich.' };
    case 'review-due':
      return { mood: 'happy', text: 'Hallo! Ein paar alte Bekannte wollen dich noch mal sehen.' };
    case 'lesson-resume':
      return { mood: 'happy', text: 'Schön, dass du wieder da bist! Ich weiß noch, wo du warst.' };
    case 'lesson-next':
      return { mood: 'happy', text: 'Bereit für etwas Neues? Ich bin dabei.' };
    case 'train':
      return { mood: 'think', text: 'Zeit für einen Chart! Schau genau hin – Bar für Bar.' };
    case 'done':
      return { mood: 'cheer', text: 'Stark gemacht! Ich halte hier die Stellung – bis später.' };
  }
}

/** Stimmung der Rückmeldung nach einer Antwort. */
export function bullFeedbackMood(correct: boolean): BullMood {
  return correct ? 'cheer' : 'think';
}
