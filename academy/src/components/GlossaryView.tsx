import { useMemo, useState } from 'react';
import type { GlossaryEntry } from '../content/glossary';

export function GlossaryView({
  entries,
  initialQuery,
  title = 'Price-Action-Glossar',
}: {
  entries: GlossaryEntry[];
  /** Vorbelegung aus einem Such-Sprung oder Link `#/glossary?term=…`. */
  initialQuery?: string;
  /** Überschrift – je Kurs (mehrere Kurse). */
  title?: string;
}) {
  const [query, setQuery] = useState(initialQuery ?? '');
  const normalized = query.trim().toLocaleLowerCase('de');
  const filtered = useMemo(
    () =>
      entries.filter((entry) => {
        const haystack = [
          entry.term,
          ...entry.aliases,
          entry.definition,
          entry.firstUnit,
        ]
          .join(' ')
          .toLocaleLowerCase('de');
        return !normalized || haystack.includes(normalized);
      }),
    [entries, normalized],
  );

  // Kurse ohne eigene Begriffe (mehrere Kurse): kein leeres Suchfeld, sondern ein klarer Hinweis.
  if (entries.length === 0) {
    return (
      <div className="page-shell glossary-page">
        <header className="page-heading">
          <p className="eyebrow">Nachschlagen statt raten</p>
          <h1>{title}</h1>
        </header>
        <div className="empty-state">
          <strong>Noch keine Begriffe</strong>
          <p>Für diesen Kurs gibt es noch kein Glossar. Begriffe kommen mit seinen Lektionen dazu.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell glossary-page">
      <header className="page-heading">
        <p className="eyebrow">Nachschlagen statt raten</p>
        <h1>{title}</h1>
        <p>
          Deutsche Erklärungen, englische Suchbegriffe und direkte Zuordnung zur ersten
          passenden Lerneinheit.
        </p>
      </header>

      <label className="glossary-search">
        <span aria-hidden="true">⌕</span>
        <span className="sr-only">Glossar durchsuchen</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Begriff oder Alias suchen …"
        />
        <kbd>{filtered.length}</kbd>
      </label>

      <div className="glossary-note">
        <strong>Pilotbestand</strong>
        <p>
          Hier sind zunächst {entries.length} Begriffe technisch eingebunden. Die vollständige
          Liste mit 165 geprüften Einträgen wird danach ergänzt.
        </p>
      </div>

      {filtered.length ? (
        <div className="glossary-grid">
          {filtered.map((entry) => (
            <article className="glossary-card" key={entry.term}>
              <div className="glossary-card-head">
                <h2>{entry.term}</h2>
                <span>{entry.firstUnit}</span>
              </div>
              <p>{entry.definition}</p>
              {entry.aliases.length ? (
                <div className="alias-row">
                  {entry.aliases.map((alias) => (
                    <span key={alias}>{alias}</span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <strong>Kein Treffer</strong>
          <p>Versuche einen englischen Alias oder einen kürzeren Suchbegriff.</p>
        </div>
      )}
    </div>
  );
}
