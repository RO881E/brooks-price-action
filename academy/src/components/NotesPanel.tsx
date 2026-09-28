import { useEffect, useId, useRef, useState } from 'react';
import { MAX_NOTE_LENGTH } from '../features/progress';

/** Pause nach dem letzten Tastendruck, bevor automatisch gespeichert wird. */
export const AUTOSAVE_DELAY_MS = 600;

type SaveStatus = 'idle' | 'pending' | 'saved';

interface NotesPanelProps {
  stepNumber: number;
  stepTitle: string;
  lessonBookmarked: boolean;
  stepBookmarked: boolean;
  savedText: string;
  onToggleLessonBookmark: () => void;
  onToggleStepBookmark: () => void;
  /** Übernimmt den Text in den Fortschritt (normaler Weg). */
  onCommit: (text: string) => void;
  /** Schreibt sofort in den Speicher – beim Verlassen der Seite. */
  onCommitNow: (text: string) => void;
  onDelete: () => void;
}

function timeLabel(date: Date): string {
  return date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
}

/**
 * Lesezeichen und Klartextnotiz zum aktuellen Schritt. Eingaben werden nach
 * einer kurzen Pause gespeichert und spätestens beim Schritt- oder
 * Ansichtswechsel, beim Verlassen des Feldes oder der Seite.
 */
export function NotesPanel({
  stepNumber,
  stepTitle,
  lessonBookmarked,
  stepBookmarked,
  savedText,
  onToggleLessonBookmark,
  onToggleStepBookmark,
  onCommit,
  onCommitNow,
  onDelete,
}: NotesPanelProps) {
  const fieldId = useId();
  const statusId = useId();
  const [draft, setDraft] = useState(savedText);
  const [status, setStatus] = useState<SaveStatus>('idle');
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const draftRef = useRef(draft);
  const dirtyRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const commitRef = useRef(onCommit);
  const commitNowRef = useRef(onCommitNow);
  commitRef.current = onCommit;
  commitNowRef.current = onCommitNow;

  const flush = (immediate = false) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (!dirtyRef.current) return;
    dirtyRef.current = false;
    (immediate ? commitNowRef.current : commitRef.current)(draftRef.current);
  };

  // Von außen geänderter Text (z. B. „Rückgängig“) – nur ohne offene Eingabe übernehmen.
  useEffect(() => {
    if (dirtyRef.current) return;
    draftRef.current = savedText;
    setDraft(savedText);
  }, [savedText]);

  useEffect(() => {
    const onPageHide = () => flush(true);
    window.addEventListener('pagehide', onPageHide);
    return () => {
      window.removeEventListener('pagehide', onPageHide);
      // Schritt- oder Ansichtswechsel: bestätigte Eingaben nicht verlieren.
      flush();
    };
  }, []);

  const onChange = (value: string) => {
    draftRef.current = value;
    dirtyRef.current = true;
    setDraft(value);
    setStatus('pending');
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      flush();
      setStatus('saved');
      setSavedAt(new Date());
    }, AUTOSAVE_DELAY_MS);
  };

  const hasContent = draft.trim() !== '' || savedText.trim() !== '';
  // Beim Öffnen des Schritts aufgeklappt, wenn schon etwas gespeichert ist;
  // danach entscheidet allein der Nutzer.
  const [initiallyOpen] = useState(
    () => savedText.trim() !== '' || stepBookmarked || lessonBookmarked,
  );
  const statusText =
    status === 'pending'
      ? 'Wird gespeichert …'
      : status === 'saved'
        ? draft.trim() === ''
          ? 'Leere Notiz entfernt.'
          : `Gespeichert${savedAt ? ` um ${timeLabel(savedAt)}` : ''}.`
        : savedText
          ? 'Gespeichert.'
          : 'Noch keine Notiz.';

  return (
    <details className="lesson-notes" open={initiallyOpen}>
      <summary>
        <span>Notiz &amp; Lesezeichen</span>
        <span className="lesson-notes-flags" aria-hidden="true">
          {lessonBookmarked || stepBookmarked ? '★' : ''}
          {savedText ? ' ✎' : ''}
        </span>
      </summary>

      <div className="lesson-notes-body">
        <div className="bookmark-toggles">
          <button
            type="button"
            className="bookmark-toggle"
            aria-pressed={lessonBookmarked}
            onClick={onToggleLessonBookmark}
          >
            <span aria-hidden="true">{lessonBookmarked ? '★' : '☆'}</span> Lektion merken
          </button>
          <button
            type="button"
            className="bookmark-toggle"
            aria-pressed={stepBookmarked}
            onClick={onToggleStepBookmark}
          >
            <span aria-hidden="true">{stepBookmarked ? '★' : '☆'}</span> Schritt merken
          </button>
        </div>

        <label htmlFor={fieldId} className="note-label">
          Deine Notiz zu Schritt {stepNumber}
          <span className="visually-hidden">: {stepTitle}</span>
        </label>
        <textarea
          id={fieldId}
          className="note-field"
          rows={4}
          maxLength={MAX_NOTE_LENGTH}
          value={draft}
          placeholder="Eigene Gedanken, Fragen oder Beispiele – nur für dich, nur in diesem Browser."
          aria-describedby={statusId}
          onChange={(event) => onChange(event.target.value)}
          onBlur={() => {
            if (!dirtyRef.current) return;
            flush();
            setStatus('saved');
            setSavedAt(new Date());
          }}
        />
        <div className="note-footer">
          <p id={statusId} className="note-status" role="status">
            {statusText}
          </p>
          <span className="note-count">
            {Array.from(draft).length} / {MAX_NOTE_LENGTH}
          </span>
          {hasContent ? (
            <button
              type="button"
              className="text-button"
              onClick={() => {
                if (timerRef.current !== null) window.clearTimeout(timerRef.current);
                timerRef.current = null;
                dirtyRef.current = false;
                draftRef.current = '';
                setDraft('');
                setStatus('idle');
                onDelete();
              }}
            >
              Notiz löschen
            </button>
          ) : null}
        </div>
      </div>
    </details>
  );
}
