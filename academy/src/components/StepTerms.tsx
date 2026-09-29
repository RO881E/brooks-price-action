import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import type { GlossaryEntry } from '../content/glossary';
import { prefersReducedMotion } from '../features/motion';
import { formatRoute } from '../features/navigation';

/**
 * Begriffe am Lernort (F-21): wenige ausdrücklich zugeordnete Glossarbegriffe
 * unter einem Leseabschnitt. Ein Panel zeigt die bestehende Definition und
 * verlinkt zum Glossar. Schließen (Schaltfläche oder Escape) bringt Fokus und
 * Leseposition zum auslösenden Begriff zurück. Nichts davon wird gespeichert.
 */
export function StepTerms({ entries }: { entries: GlossaryEntry[] }) {
  const ids = useId();
  const [open, setOpen] = useState<string | null>(null);
  const triggers = useRef(new Map<string, HTMLButtonElement>());
  const panel = useRef<HTMLDivElement>(null);
  const scrollBeforeOpen = useRef(0);
  const focusPanel = useRef(false);

  useEffect(() => {
    if (open && focusPanel.current) {
      focusPanel.current = false;
      panel.current?.focus({ preventScroll: true });
      // Ganz sichtbar machen, ohne unnötig zu springen (auch über der Mobilnavigation).
      panel.current?.scrollIntoView?.({ block: 'nearest', behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  }, [open]);

  if (entries.length === 0) return null;
  const entry = entries.find((item) => item.term === open) ?? null;
  const panelId = `${ids}-panel`;

  const toggle = (term: string) => {
    if (open === term) {
      close();
      return;
    }
    if (open === null) scrollBeforeOpen.current = window.scrollY;
    focusPanel.current = true;
    setOpen(term);
  };

  const close = () => {
    const term = open;
    setOpen(null);
    if (!term) return;
    const y = scrollBeforeOpen.current;
    // Nach dem Entfernen des Panels: Fokus zurück an den Begriff, Leseposition wie vorher.
    window.requestAnimationFrame(() => {
      triggers.current.get(term)?.focus({ preventScroll: true });
      window.scrollTo({ top: y, behavior: 'auto' });
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' && open) {
      event.stopPropagation();
      close();
    }
  };

  return (
    <div className="step-terms" onKeyDown={onKeyDown}>
      <p className="step-terms-label" id={`${ids}-label`}>
        Begriffe nachschlagen
      </p>
      <ul className="step-terms-list" aria-labelledby={`${ids}-label`}>
        {entries.map((item) => (
          <li key={item.term}>
            <button
              type="button"
              className="step-term-button"
              aria-expanded={open === item.term}
              aria-controls={open === item.term ? panelId : undefined}
              ref={(element) => {
                if (element) triggers.current.set(item.term, element);
                else triggers.current.delete(item.term);
              }}
              onClick={() => toggle(item.term)}
            >
              {item.term}
            </button>
          </li>
        ))}
      </ul>
      {entry ? (
        <div
          className="step-term-panel"
          id={panelId}
          role="region"
          aria-labelledby={`${panelId}-title`}
          tabIndex={-1}
          ref={panel}
        >
          <div className="step-term-panel-head">
            <h4 id={`${panelId}-title`}>{entry.term}</h4>
            <span>{entry.firstUnit}</span>
          </div>
          <p>{entry.definition}</p>
          {entry.aliases.length ? (
            <p className="step-term-aliases">Auch: {entry.aliases.join(', ')}</p>
          ) : null}
          <div className="step-term-actions">
            <a href={formatRoute({ kind: 'view', view: 'glossary', term: entry.term })}>
              Im Glossar öffnen
            </a>
            <button type="button" className="secondary-button" aria-label={`Schließen: ${entry.term}`} onClick={close}>
              Schließen
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
