import type { LessonOutline } from '../content/types';
import type { UnitLoadStatus } from '../content/catalog';

interface ContentLoadStateProps {
  status: UnitLoadStatus;
  /** Was geladen wird, z. B. „Die Lektion“. */
  what: string;
  onRetry: () => void;
  onBack?: () => void;
  backLabel?: string;
}

/**
 * Lade- und Fehlerhinweis für nachgeladene Kursinhalte (F-12). Der Hinweis
 * erscheint erst nach einer kurzen Pause, damit schnelle Ladevorgänge nicht
 * aufblitzen. Ein Fehler löscht nie Daten.
 */
export function ContentLoadState({ status, what, onRetry, onBack, backLabel }: ContentLoadStateProps) {
  if (status === 'error') {
    return (
      <div className="content-load error" role="alert">
        <strong>{what} konnte nicht geladen werden.</strong>
        <p>
          Prüfe die Verbindung und versuche es erneut. Dein Fortschritt, deine Notizen und
          Einstellungen bleiben gespeichert.
        </p>
        <div className="content-load-actions">
          <button type="button" className="primary-button" onClick={onRetry}>
            Erneut laden
          </button>
          {onBack ? (
            <button type="button" className="secondary-button" onClick={onBack}>
              {backLabel ?? 'Zurück'}
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <p className="content-load" role="status">
      {what} wird geladen …
    </p>
  );
}

interface LessonLoadingProps {
  lesson: LessonOutline;
  status: UnitLoadStatus;
  onRetry: () => void;
  onClose: () => void;
}

/** Platzhalter im Lektionslayout, bis die Lektion geladen ist. */
export function LessonLoading({ lesson, status, onRetry, onClose }: LessonLoadingProps) {
  return (
    <main className="lesson-player">
      <header className="lesson-topbar">
        <button className="icon-button" type="button" onClick={onClose} aria-label="Lektion schließen">
          ×
        </button>
      </header>
      <div className="lesson-stage">
        <div className="lesson-meta">
          <span>{lesson.sourceUnit}</span>
        </div>
        <article className="step-copy">
          <p className="eyebrow">Lektion</p>
          <h1 tabIndex={-1}>{lesson.title}</h1>
          <ContentLoadState
            status={status}
            what="Die Lektion"
            onRetry={onRetry}
            onBack={onClose}
            backLabel="Zurück zur Übersicht"
          />
        </article>
      </div>
    </main>
  );
}
