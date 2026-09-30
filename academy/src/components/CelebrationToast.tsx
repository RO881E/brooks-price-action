import { useEffect } from 'react';
import { FeedbackCue } from './FeedbackCue';

export interface Celebration {
  /** Wechselt bei jeder neuen Meldung, damit die Animation neu startet. */
  id: number;
  title: string;
  details: string[];
}

const AUTO_CLOSE_MS = 6000;

/**
 * Dezente Bestätigung für erreichte Tagesziele und Meilensteine. Die
 * Einblendung entfällt bei `prefers-reduced-motion`.
 */
export function CelebrationToast({
  celebration,
  onClose,
}: {
  celebration: Celebration;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, AUTO_CLOSE_MS);
    return () => window.clearTimeout(timer);
  }, [celebration.id, onClose]);

  // Escape schließt die Meldung, ohne den Fokus zu stehlen.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="celebration" role="status" aria-live="polite" key={celebration.id}>
      <FeedbackCue kind="milestone" mode="mount" />
      <span className="celebration-mark" aria-hidden="true">
        ✦
      </span>
      <div>
        <strong>{celebration.title}</strong>
        {celebration.details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>
      <button type="button" aria-label="Meldung schließen" onClick={onClose}>
        ×
      </button>
    </div>
  );
}
