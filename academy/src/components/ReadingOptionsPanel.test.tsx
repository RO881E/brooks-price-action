import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_READING_OPTIONS } from '../features/progress';
import { ReadingOptionsPanel, readingOptionsLabel } from './ReadingOptionsPanel';

afterEach(cleanup);

describe('ReadingOptionsPanel', () => {
  it('zeigt benannte Stufen als Optionsgruppen und meldet Änderungen', () => {
    const onChange = vi.fn();
    render(<ReadingOptionsPanel options={DEFAULT_READING_OPTIONS} onChange={onChange} />);
    const sizes = screen.getByRole('group', { name: 'Schriftgröße' });
    expect(sizes).toHaveTextContent('StandardGroßSehr groß');
    expect(screen.getByRole('group', { name: 'Zeilenabstand' })).toHaveTextContent('StandardWeitSehr weit');
    fireEvent.click(screen.getByRole('radio', { name: 'Sehr groß' }));
    expect(onChange).toHaveBeenLastCalledWith({ size: 'larger' });
    fireEvent.click(screen.getByRole('radio', { name: 'Weit' }));
    expect(onChange).toHaveBeenLastCalledWith({ spacing: 'relaxed' });
    expect(screen.getByRole('button', { name: 'Standard' })).toBeDisabled();
  });

  it('„Standard“ setzt beide Optionen zurück', () => {
    const onChange = vi.fn();
    render(<ReadingOptionsPanel options={{ size: 'large', spacing: 'wide' }} onChange={onChange} />);
    expect(screen.getByRole('radio', { name: 'Groß' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Sehr weit' })).toBeChecked();
    fireEvent.click(screen.getByRole('button', { name: 'Standard' }));
    expect(onChange).toHaveBeenLastCalledWith(DEFAULT_READING_OPTIONS);
  });

  it('beschreibt die Wahl in Worten', () => {
    expect(readingOptionsLabel(DEFAULT_READING_OPTIONS)).toBe('Lesetext Standard');
    expect(readingOptionsLabel({ size: 'larger', spacing: 'standard' })).toBe('Schrift Sehr groß, Zeilenabstand Standard');
  });
});
