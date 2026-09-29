import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { glossaryEntries } from '../content/glossary';
import { StepTerms } from './StepTerms';

const entries = glossaryEntries.filter((entry) => ['Trend', 'Pullback'].includes(entry.term));

beforeEach(() => {
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    callback(0);
    return 0;
  });
  vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('StepTerms', () => {
  it('rendert ohne Begriffe nichts', () => {
    const { container } = render(<StepTerms entries={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('zeigt die bestehende Definition, Aliasse und den Glossar-Link', () => {
    render(<StepTerms entries={entries} />);
    expect(screen.getByRole('list', { name: 'Begriffe nachschlagen' })).toBeInTheDocument();
    const button = screen.getByRole('button', { name: 'Trend' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    const panel = screen.getByRole('region', { name: 'Trend' });
    expect(button).toHaveAttribute('aria-controls', panel.id);
    expect(panel).toHaveFocus();
    const trend = entries.find((entry) => entry.term === 'Trend')!;
    expect(panel).toHaveTextContent(trend.definition);
    expect(panel).toHaveTextContent(`Auch: ${trend.aliases.join(', ')}`);
    expect(screen.getByRole('link', { name: 'Im Glossar öffnen' })).toHaveAttribute('href', '#/glossary?term=Trend');
  });

  it('Escape und „Schließen“ geben Fokus und Leseposition zurück', () => {
    render(<StepTerms entries={entries} />);
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 640 });
    const button = screen.getByRole('button', { name: 'Pullback' });
    fireEvent.click(button);
    fireEvent.keyDown(screen.getByRole('region', { name: 'Pullback' }), { key: 'Escape' });
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
    expect(button).toHaveFocus();
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 640, behavior: 'auto' });

    fireEvent.click(button);
    act(() => screen.getByRole('button', { name: 'Schließen: Pullback' }).click());
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
    expect(button).toHaveFocus();
  });

  it('wechselt zwischen Begriffen und schließt beim zweiten Klick', () => {
    render(<StepTerms entries={entries} />);
    fireEvent.click(screen.getByRole('button', { name: 'Trend' }));
    fireEvent.click(screen.getByRole('button', { name: 'Pullback' }));
    expect(screen.getByRole('region', { name: 'Pullback' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Trend' })).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(screen.getByRole('button', { name: 'Pullback' }));
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });
});
