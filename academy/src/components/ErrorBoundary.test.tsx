import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AppCrashScreen, ErrorBoundary } from './ErrorBoundary';

let shouldThrow = true;
function Fragile() {
  if (shouldThrow) throw new Error('Renderfehler im Test');
  return <p>Alles gut</p>;
}

beforeEach(() => {
  shouldThrow = true;
  // React meldet abgefangene Fehler zusätzlich in der Konsole.
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  window.location.hash = '';
});

describe('ErrorBoundary', () => {
  it('zeigt statt einer leeren Seite eine verständliche Wiederherstellung', () => {
    render(
      <ErrorBoundary fallback={(props) => <AppCrashScreen {...props} />}>
        <Fragile />
      </ErrorBoundary>,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Hier ist etwas schiefgelaufen.' })).toHaveFocus();
    expect(screen.getByText(/Lernfortschritt, deine Notizen und\s+Einstellungen/)).toBeInTheDocument();
    expect(screen.getByText('Renderfehler im Test')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Seite neu laden' })).toBeInTheDocument();
  });

  it('„Zum Lernpfad“ setzt Route und Fehlerzustand zurück', () => {
    render(
      <ErrorBoundary fallback={(props) => <AppCrashScreen {...props} />}>
        <Fragile />
      </ErrorBoundary>,
    );
    shouldThrow = false;
    fireEvent.click(screen.getByRole('button', { name: 'Zum Lernpfad' }));
    expect(window.location.hash).toBe('#/path');
    expect(screen.getByText('Alles gut')).toBeInTheDocument();
  });

  it('ruft beim Zurücksetzen onReset auf', () => {
    const onReset = vi.fn();
    render(
      <ErrorBoundary
        onReset={onReset}
        fallback={({ reset }) => (
          <button type="button" onClick={reset}>
            Erneut versuchen
          </button>
        )}
      >
        <Fragile />
      </ErrorBoundary>,
    );
    shouldThrow = false;
    fireEvent.click(screen.getByRole('button', { name: 'Erneut versuchen' }));
    expect(onReset).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Alles gut')).toBeInTheDocument();
  });

  it('bleibt bei einem erneuten Fehler in der Ersatzansicht statt in einer Schleife', () => {
    render(
      <ErrorBoundary fallback={(props) => <AppCrashScreen {...props} />}>
        <Fragile />
      </ErrorBoundary>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Zum Lernpfad' }));
    expect(screen.getByRole('heading', { name: 'Hier ist etwas schiefgelaufen.' })).toBeInTheDocument();
  });
});
