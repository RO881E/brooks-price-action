import { Component, useEffect, useRef, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: (props: { error: Error; reset: () => void }) => ReactNode;
  /** Wird vor dem Zurücksetzen aufgerufen, z. B. um ein Nachladen neu zu starten. */
  onReset?: () => void;
}

interface ErrorBoundaryState {
  error: Error | null;
}

/**
 * Fängt Renderfehler ab, damit statt einer leeren Seite ein verständlicher
 * Hinweis mit Ausweg erscheint (F-10). Der Fortschritt liegt ohnehin schon im
 * Speicher und bleibt unberührt.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return { error: error instanceof Error ? error : new Error(String(error)) };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Für die Fehlersuche in der Konsole; die Oberfläche bleibt bedienbar.
    console.warn('WQT Academy: Ansicht konnte nicht angezeigt werden.', error, info.componentStack);
  }

  reset = () => {
    this.props.onReset?.();
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;
    return error ? this.props.fallback({ error, reset: this.reset }) : this.props.children;
  }
}

/** Ersatzansicht, wenn die ganze App nicht mehr angezeigt werden kann. */
export function AppCrashScreen({ error, reset }: { error: Error; reset: () => void }) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => heading.current?.focus(), []);

  return (
    <main className="app-crash">
      <div className="app-crash-card" role="alert">
        <p className="eyebrow">WQT Academy</p>
        <h1 tabIndex={-1} ref={heading}>
          Hier ist etwas schiefgelaufen.
        </h1>
        <p>
          Diese Ansicht konnte nicht angezeigt werden. Dein Lernfortschritt, deine Notizen und
          Einstellungen sind auf diesem Gerät gespeichert und bleiben erhalten.
        </p>
        <div className="app-crash-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              window.location.hash = '#/path';
              reset();
            }}
          >
            Zum Lernpfad
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => window.location.reload()}
          >
            Seite neu laden
          </button>
        </div>
        <details>
          <summary>Technische Details</summary>
          <code>{error.message || error.name}</code>
        </details>
      </div>
    </main>
  );
}
