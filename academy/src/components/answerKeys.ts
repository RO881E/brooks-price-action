import type { KeyboardEvent } from 'react';

const FORWARD = ['ArrowDown', 'ArrowRight'];
const BACKWARD = ['ArrowUp', 'ArrowLeft'];

/**
 * Pfeiltasten in einer Antwortgruppe (`role="radiogroup"`): Der Fokus wandert
 * zwischen den freien Antworten. Gewählt wird erst mit Enter oder Leertaste,
 * weil jede Wahl sofort ausgewertet wird.
 */
export function moveAnswerFocus(event: KeyboardEvent<HTMLElement>): void {
  const forward = FORWARD.includes(event.key);
  if (!forward && !BACKWARD.includes(event.key)) return;
  const buttons = [
    ...event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not(:disabled)'),
  ];
  if (buttons.length === 0) return;
  event.preventDefault();
  const current = buttons.indexOf(document.activeElement as HTMLButtonElement);
  const next =
    current === -1 ? 0 : (current + (forward ? 1 : -1) + buttons.length) % buttons.length;
  buttons[next].focus();
}
