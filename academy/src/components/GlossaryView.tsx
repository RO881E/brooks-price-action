import { useMemo, useState } from 'react';
import type { GlossaryEntry } from '../content/glossary';

export function GlossaryView({ entries }: { entries: GlossaryEntry[] }) {
  const [query, setQuery] = useState('');
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

  return (
    <div className="page-shell glossary-page">
      <header className="page-heading">
        <p className="eyebrow">Nachschlagen statt raten</p>
        <h1>Price-Action-Glossar</h1>
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
          Buchreferenz mit 165 geprüften Einträgen wird danach in Originalreihenfolge ergänzt.
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
