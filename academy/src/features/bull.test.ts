import { describe, expect, it } from 'vitest';
import { bullFeedbackMood, bullGreeting } from './bull';
import type { TodayAction } from './today';

const lesson = { id: 'l', title: 'L', steps: [] } as never;
const actions: TodayAction[] = [
  { kind: 'review-resume', remaining: 3 },
  { kind: 'review-due', count: 4 },
  { kind: 'lesson-resume', lesson, stepIndex: 1 },
  { kind: 'lesson-next', lesson },
  { kind: 'train', caseId: 'c', title: 'T', resume: false },
  { kind: 'done' },
] as TodayAction[];

describe('Bulle Bo', () => {
  it('hat zu jeder nächsten Aktion einen kurzen Satz und eine Stimmung', () => {
    for (const action of actions) {
      const line = bullGreeting(action);
      expect(line.text.length).toBeGreaterThan(10);
      expect(line.text.length).toBeLessThan(90);
      expect(['happy', 'think', 'cheer', 'calm']).toContain(line.mood);
    }
  });

  it('macht keine Zahlen- oder Ergebnisaussagen und wiederholt keine Überschriften', () => {
    for (const action of actions) {
      const { text } = bullGreeting(action);
      expect(text).not.toMatch(/\d/);
      expect(text).not.toMatch(/Gewinn|Verlust|Profit|garantiert|fällig|erledigt/i);
    }
  });

  it('ist deterministisch', () => {
    for (const action of actions) expect(bullGreeting(action)).toEqual(bullGreeting(action));
  });

  it('Rückmeldung: Jubel bei richtig, Nachdenken bei falsch', () => {
    expect(bullFeedbackMood(true)).toBe('cheer');
    expect(bullFeedbackMood(false)).toBe('think');
  });
});
