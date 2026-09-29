import { useId, useMemo, useState } from 'react';
import { arrangeSaved, type SavedBookmark, type SavedNote, type SavedOverview, type SavedSort, type SavedTarget } from '../features/savedItems';

interface SavedViewProps {
  overview: SavedOverview;
  onOpen: (target: SavedTarget) => void;
  onRemoveBookmark: (key: string) => void;
  onDeleteNote: (key: string) => void;
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? ''
    : date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function OpenButton({ target, onOpen }: { target: SavedTarget; onOpen: (target: SavedTarget) => void }) {
  return (
    <button
      type="button"
      className="secondary-button"
      disabled={!target.openable}
      onClick={() => onOpen(target)}
      aria-label={`${target.title} öffnen`}
    >
      {target.stepIndex !== null ? 'Zur Fundstelle' : 'Öffnen'}
    </button>
  );
}

function BookmarkItem({
  item,
  onOpen,
  onRemove,
}: {
  item: SavedBookmark;
  onOpen: (target: SavedTarget) => void;
  onRemove: (key: string) => void;
}) {
  return (
    <li className="saved-item">
      <span className="saved-mark" aria-hidden="true">
        ★
      </span>
      <div className="saved-copy">
        <strong>{item.title}</strong>
        <small>
          {item.bookmark.stepId ? '' : 'Lektion · '}
          {item.context}
          {item.lesson && !item.openable ? ' · derzeit gesperrt' : ''}
        </small>
      </div>
      <div className="saved-actions">
        <OpenButton target={item} onOpen={onOpen} />
        <button
          type="button"
          className="text-button"
          onClick={() => onRemove(item.key)}
          aria-label={`Lesezeichen „${item.title}“ entfernen`}
        >
          Entfernen
        </button>
      </div>
    </li>
  );
}

function NoteItem({
  item,
  onOpen,
  onDelete,
}: {
  item: SavedNote;
  onOpen: (target: SavedTarget) => void;
  onDelete: (key: string) => void;
}) {
  return (
    <li className="saved-item saved-note">
      <span className="saved-mark" aria-hidden="true">
        ✎
      </span>
      <div className="saved-copy">
        <strong>{item.title}</strong>
        <small>
          {item.context} · zuletzt geändert {formatDate(item.note.updatedAt)}
        </small>
        {/* Notizen sind reiner Text – React gibt sie maskiert aus, nie als HTML. */}
        <p className="saved-note-text">{item.note.text}</p>
      </div>
      <div className="saved-actions">
        <OpenButton target={item} onOpen={onOpen} />
        <button
          type="button"
          className="text-button"
          onClick={() => onDelete(item.key)}
          aria-label={`Notiz zu „${item.title}“ löschen`}
        >
          Löschen
        </button>
      </div>
    </li>
  );
}

export function SavedView({ overview: source, onOpen, onRemoveBookmark, onDeleteNote }: SavedViewProps) {
  const ids = useId();
  const [sort, setSort] = useState<SavedSort>('recent');
  const [query, setQuery] = useState('');
  const overview = useMemo(() => arrangeSaved(source, sort, query), [source, sort, query]);
  const empty = source.bookmarks.length === 0 && source.notes.length === 0;
  const filtered = query.trim() !== '';

  return (
    <div className="page-shell saved-page">
      <header className="page-heading">
        <p className="eyebrow">Deine Fundstellen</p>
        <h1>Gespeichert</h1>
        <p>
          Lesezeichen und persönliche Notizen aus den Lektionen. Alles bleibt nur in diesem Browser
          gespeichert.
        </p>
      </header>

      {empty ? (
        <div className="empty-state saved-empty">
          <strong>Noch nichts gespeichert</strong>
          <p>
            Öffne in einer Lektion „Notiz &amp; Lesezeichen“, um dir eine Lektion oder einen Schritt
            zu merken oder eigene Gedanken festzuhalten.
          </p>
        </div>
      ) : (
        <>
          <div className="saved-tools">
            <label className="saved-search" htmlFor={`${ids}-search`}>
              <span>In Lesezeichen und Notizen suchen</span>
              <input
                id={`${ids}-search`}
                type="search"
                value={query}
                autoComplete="off"
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <fieldset className="saved-sort">
              <legend>Sortierung</legend>
              <label>
                <input type="radio" name={`${ids}-sort`} checked={sort === 'recent'} onChange={() => setSort('recent')} />
                <span>Neueste zuerst</span>
              </label>
              <label>
                <input type="radio" name={`${ids}-sort`} checked={sort === 'book'} onChange={() => setSort('book')} />
                <span>Buchreihenfolge</span>
              </label>
            </fieldset>
            <p className="visually-hidden" role="status">
              {filtered
                ? `${overview.bookmarks.length + overview.notes.length} Treffer in Lesezeichen und Notizen.`
                : ''}
            </p>
          </div>
          <section className="progress-panel" aria-labelledby="saved-bookmarks-heading">
            <div className="progress-panel-head">
              <h2 id="saved-bookmarks-heading">Lesezeichen</h2>
              <p>
                <strong>{overview.bookmarks.length}</strong>
              </p>
            </div>
            {overview.bookmarks.length ? (
              <ul className="saved-list">
                {overview.bookmarks.map((item) => (
                  <BookmarkItem key={item.key} item={item} onOpen={onOpen} onRemove={onRemoveBookmark} />
                ))}
              </ul>
            ) : (
              <p className="progress-note">{filtered ? 'Keine Lesezeichen passen zur Suche.' : 'Noch keine Lesezeichen.'}</p>
            )}
          </section>

          <section className="progress-panel" aria-labelledby="saved-notes-heading">
            <div className="progress-panel-head">
              <h2 id="saved-notes-heading">Notizen</h2>
              <p>
                <strong>{overview.notes.length}</strong>
              </p>
            </div>
            {overview.notes.length ? (
              <ul className="saved-list">
                {overview.notes.map((item) => (
                  <NoteItem key={item.key} item={item} onOpen={onOpen} onDelete={onDeleteNote} />
                ))}
              </ul>
            ) : (
              <p className="progress-note">{filtered ? 'Keine Notizen passen zur Suche.' : 'Noch keine Notizen.'}</p>
            )}
          </section>
        </>
      )}
    </div>
  );
}
