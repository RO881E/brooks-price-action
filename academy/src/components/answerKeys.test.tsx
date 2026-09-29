import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { moveAnswerFocus } from './answerKeys';

afterEach(cleanup);

function Group() {
  return (
    <div role="radiogroup" aria-label="Frage" onKeyDown={moveAnswerFocus}>
      <button type="button" role="radio" aria-checked={false}>A</button>
      <button type="button" role="radio" aria-checked={false} disabled>B</button>
      <button type="button" role="radio" aria-checked={false}>C</button>
    </div>
  );
}

describe('moveAnswerFocus', () => {
  it('wandert mit den Pfeiltasten über freie Antworten und springt am Ende um', () => {
    render(<Group />);
    const group = screen.getByRole('radiogroup');
    screen.getByRole('radio', { name: 'A' }).focus();
    fireEvent.keyDown(group, { key: 'ArrowDown' });
    expect(screen.getByRole('radio', { name: 'C' })).toHaveFocus();
    fireEvent.keyDown(group, { key: 'ArrowRight' });
    expect(screen.getByRole('radio', { name: 'A' })).toHaveFocus();
    fireEvent.keyDown(group, { key: 'ArrowUp' });
    expect(screen.getByRole('radio', { name: 'C' })).toHaveFocus();
    fireEvent.keyDown(group, { key: 'ArrowLeft' });
    expect(screen.getByRole('radio', { name: 'A' })).toHaveFocus();
  });

  it('wählt nichts aus und ignoriert andere Tasten', () => {
    render(<Group />);
    const group = screen.getByRole('radiogroup');
    screen.getByRole('radio', { name: 'A' }).focus();
    fireEvent.keyDown(group, { key: 'Tab' });
    expect(screen.getByRole('radio', { name: 'A' })).toHaveFocus();
    expect(screen.getByRole('radio', { name: 'A' })).toHaveAttribute('aria-checked', 'false');
  });
});
