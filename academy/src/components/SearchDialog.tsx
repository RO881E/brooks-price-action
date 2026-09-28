import { useEffect, useId, useMemo, useRef, useState } from 'react';
import type { LessonAccessState } from '../features/courseAccess';
import {
  groupResults,
  search,
  type SearchIndex,
  type SearchResult,
} from '../features/search';

interface SearchDialogProps {
  open: boolean;
  index: SearchIndex;
  completedLessonIds: string[];
  onClose: () => void;
  onSelect: (result: SearchResult) => void;
}

/** Lupe als SVG – Schriftzeichen wie „⌕“ fehlen auf manchen Geräten. */
export function SearchIcon() {
  return (
    <svg className="search-icon" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
      <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12.8 12.8 17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const accessLabels: Record<LessonAccessState, string> = {
  complete: 'Abgeschlossen',
  available: 'Verfügbar',
  locked: 'Gesperrt',
  planned: 'In Vorbereitung',
};

function statusLabel(result: SearchResult): string {
  if (result.type === 'glossary') return 'Glossar';
  return result.access ? accessLabels[result.access] : '';
}

/**
 * Globale Suche als modaler Dialog. Pfeiltasten wählen, Enter öffnet,
 * Escape schließt. Gesperrte Treffer bleiben sichtbar, lassen sich aber
 * nicht öffnen.
 */
export function SearchDialog({ open, index, completedLessonIds, onClose, onSelect }: SearchDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [notice, setNotice] = useState('');
  const baseId = useId();

  const groups = useMemo(
    () => groupResults(search(index, query, completedLessonIds)),
    [index, query, completedLessonIds],
  );
  const flat = useMemo(() => groups.flatMap((group) => group.results), [groups]);
  const active = flat[Math.min(activeIndex, flat.length - 1)];
  const optionId = (result: SearchResult) => `${baseId}-${result.id}`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setQuery('');
      setActiveIndex(0);
      setNotice('');
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!active) return;
    document.getElementById(optionId(active))?.scrollIntoView({ block: 'nearest' });
  });

  const choose = (result: SearchResult | undefined) => {
    if (!result) return;
    if (!result.openable) {
      setNotice(
        result.access === 'planned'
          ? `„${result.title}“ ist noch in Vorbereitung.`
          : `„${result.title}“ ist noch gesperrt. Sie wird im Lernpfad der Reihe nach freigeschaltet.`,
      );
      return;
    }
    onSelect(result);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown' && flat.length) {
      event.preventDefault();
      setActiveIndex((current) => (Math.min(current, flat.length - 1) + 1) % flat.length);
    } else if (event.key === 'ArrowUp' && flat.length) {
      event.preventDefault();
      setActiveIndex((current) => (Math.min(current, flat.length - 1) - 1 + flat.length) % flat.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      choose(active);
    }
  };

  const trimmed = query.trim();

  return (
    <dialog
      ref={dialogRef}
      className="search-dialog"
      aria-label="Suche"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        // Klick auf den abgedunkelten Hintergrund schließt die Suche.
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="search-panel">
        <div className="search-field">
          <SearchIcon />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-label="Lektionen, Schritte und Glossar durchsuchen"
            aria-expanded={flat.length > 0}
            aria-controls={`${baseId}-list`}
            aria-activedescendant={active ? optionId(active) : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
            placeholder="Suchen – z. B. „Doji“, „High 2“, „Übung“"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
              setNotice('');
            }}
            onKeyDown={onKeyDown}
          />
          <button type="button" className="search-close" onClick={onClose} aria-label="Suche schließen">
            Esc
          </button>
        </div>

        <p className="search-status" role="status">
          {notice ||
            (trimmed === ''
              ? 'Tippe, um Lektionen, Schrittüberschriften und Glossarbegriffe zu finden.'
              : flat.length === 0
                ? `Keine Treffer für „${trimmed}“.`
                : `${groups.reduce((sum, group) => sum + group.total, 0)} Treffer. Pfeiltasten wählen, Enter öffnet.`)}
        </p>

        <div id={`${baseId}-list`} role="listbox" aria-label="Suchergebnisse" className="search-results">
          {groups.map((group) => (
            <div role="group" aria-label={group.label} key={group.type} className="search-group">
              <p className="search-group-label" aria-hidden="true">
                {group.label}
                {group.total > group.results.length
                  ? ` · ${group.results.length} von ${group.total}`
                  : ''}
              </p>
              {group.results.map((result) => {
                const selected = active?.id === result.id;
                return (
                  <div
                    key={result.id}
                    id={optionId(result)}
                    role="option"
                    aria-selected={selected}
                    aria-disabled={!result.openable}
                    className={`search-option ${selected ? 'active' : ''} ${result.openable ? '' : 'locked'}`}
                    onMouseMove={() => setActiveIndex(flat.indexOf(result))}
                    onClick={() => choose(result)}
                  >
                    <span className="search-option-main">
                      <strong>{result.title}</strong>
                      <small>{result.context}</small>
                    </span>
                    <span className="search-option-meta">
                      {result.section ? <small>{result.section}</small> : null}
                      <em className={`search-badge ${result.access ?? 'glossary'}`}>
                        {result.openable ? '' : '🔒 '}
                        {statusLabel(result)}
                      </em>
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}
