import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ChartWithFocus } from './ChartFocus';

afterEach(cleanup);

const props = {
  scenario: 'auction-balance' as const,
  title: 'Eine Auktion hinter jedem Bar',
  caption: 'Kurze Einordnung zum Schaubild.',
  observations: ['Erste Beobachtung', 'Zweite Beobachtung'],
};

function open() {
  render(<ChartWithFocus {...props} />);
  fireEvent.click(screen.getByRole('button', { name: /Vergrößern: Eine Auktion/ }));
  // jsdom blendet einen modalen <dialog> nicht immer ein – daher `hidden: true`.
  return screen.getByRole('dialog', { hidden: true });
}

function viewBox(dialog: HTMLElement) {
  return dialog.querySelector('svg[role="img"]')!.getAttribute('viewBox');
}

describe('ChartWithFocus', () => {
  it('zeigt Diagramm, Titel, Bildbeschreibung, Einordnung und Beobachtungen', () => {
    const dialog = open();
    expect(within(dialog).getByRole('heading', { name: props.title, hidden: true })).toBeInTheDocument();
    expect(within(dialog).getByText(/Ein großer Bar mit markiertem Hoch/, { selector: 'p' })).toBeInTheDocument();
    expect(within(dialog).getByText(props.caption)).toBeInTheDocument();
    expect(within(dialog).getByText('Zweite Beobachtung')).toBeInTheDocument();
    expect(viewBox(dialog)).toBe('0 0 760 330');
  });

  it('setzt den Fokus auf „Schließen“ und sperrt das Scrollen der Seite', () => {
    const dialog = open();
    expect(within(dialog).getByRole('button', { name: /Schließen/, hidden: true })).toHaveFocus();
    expect(document.documentElement.style.overflow).toBe('hidden');
  });

  it('hält Zoomgrenzen ein und setzt zurück', () => {
    const dialog = open();
    const zoomIn = within(dialog).getByRole('button', { name: 'Vergrößern', hidden: true });
    const zoomOut = within(dialog).getByRole('button', { name: 'Verkleinern', hidden: true });
    const reset = within(dialog).getByRole('button', { name: 'Zurücksetzen', hidden: true });
    expect(zoomOut).toBeDisabled();
    expect(reset).toBeDisabled();
    for (let i = 0; i < 6; i += 1) if (!zoomIn.hasAttribute('disabled')) fireEvent.click(zoomIn);
    expect(zoomIn).toBeDisabled();
    expect(within(dialog).getByText('400 %')).toBeInTheDocument();
    expect(viewBox(dialog)).toBe('285 123.75 190 82.5');
    fireEvent.click(within(dialog).getByRole('button', { name: 'Ansicht nach links schieben', hidden: true }));
    expect(viewBox(dialog)).not.toBe('285 123.75 190 82.5');
    fireEvent.click(reset);
    expect(viewBox(dialog)).toBe('0 0 760 330');
    expect(within(dialog).getByText('100 %')).toBeInTheDocument();
  });

  it('schließt mit Escape, gibt Scrollen frei und führt den Fokus zurück', () => {
    const dialog = open();
    act(() => {
      dialog.dispatchEvent(new Event('cancel', { cancelable: true }));
    });
    expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument();
    expect(document.documentElement.style.overflow).toBe('');
    expect(screen.getByRole('button', { name: /Vergrößern: Eine Auktion/ })).toHaveFocus();
  });

  it('beginnt nach erneutem Öffnen wieder mit der ganzen Ansicht', () => {
    let dialog = open();
    fireEvent.click(within(dialog).getByRole('button', { name: 'Vergrößern', hidden: true }));
    fireEvent.click(within(dialog).getByRole('button', { name: /Schließen/, hidden: true }));
    fireEvent.click(screen.getByRole('button', { name: /Vergrößern: Eine Auktion/ }));
    dialog = screen.getByRole('dialog', { hidden: true });
    expect(viewBox(dialog)).toBe('0 0 760 330');
  });

  it('hält Tab im Dialog', () => {
    const dialog = open();
    const close = within(dialog).getByRole('button', { name: /Schließen/, hidden: true });
    const text = within(dialog).getByRole('region', { name: 'Erläuterung zum Schaubild', hidden: true });
    text.focus();
    fireEvent.keyDown(dialog, { key: 'Tab' });
    expect(close).toHaveFocus();
    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true });
    expect(text).toHaveFocus();
  });

  it('vergibt eindeutige IDs, auch wenn das Schaubild zweimal im Dokument steht', () => {
    open();
    const titles = [...document.querySelectorAll('svg[role="img"] title')].map((title) => title.id);
    expect(titles).toHaveLength(2);
    expect(new Set(titles).size).toBe(2);
  });
});
