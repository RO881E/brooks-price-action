import { useEffect } from 'react';

export interface UndoAction {
  id: number;
  message: string;
  undo: () => void;
}

/** Wie lange „Rückgängig“ angeboten wird. */
export const UNDO_WINDOW_MS = 8000;

export function UndoToast({ action, onDismiss }: { action: UndoAction; onDismiss: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onDismiss, UNDO_WINDOW_MS);
    return () => window.clearTimeout(timer);
  }, [action.id, onDismiss]);

  return (
    <div className="undo-toast" role="status" aria-live="polite">
      <span>{action.message}</span>
      <button
        type="button"
        onClick={() => {
          action.undo();
          onDismiss();
        }}
      >
        Rückgängig
      </button>
    </div>
  );
}
