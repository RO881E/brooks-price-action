import { useId, useMemo, useRef, useState } from 'react';
import type { GlossaryEntry } from '../content/glossary';
import type { CourseOutline } from '../content/types';
import { buildMatchRound, MATCH_MIN_TERMS, matchTerms } from '../features/matchPairs';
import type { AcademyProgress } from '../features/progress';
import { BullSays } from './Bull';
import { Icon } from './Icon';

/**
 * Begriffe-Memory (Stufe 4b): Begriff antippen, dann die passende Beschreibung. Reine
 * Übung ohne Einfluss auf Lernstand, XP oder Fälligkeiten; nichts wird gespeichert. Alles
 * sind normale Buttons (Tastatur, kein Ziehen); Fehlversuche erklären statt zu bestrafen.
 */
export function MatchGame({
  course,
  progress,
  glossary,
}: {
  course: CourseOutline;
  progress: AcademyProgress;
  /** Begriffe des Kurses (mehrere Kurse); ohne Angabe das Price-Action-Glossar. */
  glossary?: readonly GlossaryEntry[];
}) {
  const ids = useId();
  const terms = useMemo(() => matchTerms(course, progress, glossary), [course, progress, glossary]);
  const [seed, setSeed] = useState<number | null>(null);
  const round = useMemo(() => (seed === null ? null : buildMatchRound(terms, seed)), [terms, seed]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<string | null>(null);
  const [misses, setMisses] = useState(0);
  const [message, setMessage] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);

  const start = () => {
    setSeed(Date.now() % 2147483647);
    setMatched(new Set());
    setSelected(null);
    setMisses(0);
    setMessage('');
  };
  const stop = () => setSeed(null);

  const enough = terms.length >= MATCH_MIN_TERMS;

  if (!round || round.pairs.length === 0) {
    return (
      <section className="topic-practice match-game" aria-labelledby={`${ids}-title`}>
        <h2 id={`${ids}-title`}>Begriffe-Memory</h2>
        <p className="topic-intro">
          Ordne Begriffe ihrer Beschreibung zu. Das Spiel ist reine Übung – es zählt nichts, ändert deinen
          Lernstand nicht und speichert nichts.
        </p>
        {enough ? (
          <button type="button" className="primary-button" onClick={start}>
            Spielen ({terms.length} Begriffe bereit)
          </button>
        ) : (
          <p className="topic-facts">
            Noch {terms.length} von mindestens {MATCH_MIN_TERMS} Begriffen bereit. Schließe weitere Lektionen ab,
            dann schaltet sich das Spiel frei.
          </p>
        )}
      </section>
    );
  }

  const done = matched.size === round.pairs.length;

  const pickTerm = (term: string) => {
    if (matched.has(term)) return;
    setSelected((current) => (current === term ? null : term));
    setMessage('');
  };

  const pickDefinition = (index: number) => {
    const target = round.pairs[index];
    if (matched.has(target.term)) return;
    if (!selected) {
      setMessage('Wähle zuerst einen Begriff.');
      return;
    }
    if (selected === target.term) {
      const next = new Set(matched).add(target.term);
      setMatched(next);
      setSelected(null);
      setMessage(`Passt: „${target.term}“.`);
      if (next.size === round.pairs.length) window.setTimeout(() => heading.current?.focus(), 0);
    } else {
      setMisses((count) => count + 1);
      setMessage(`Das passt nicht: Diese Beschreibung gehört zu „${target.term}“. Versuch es noch einmal.`);
      setSelected(null);
    }
  };

  return (
    <section className="topic-practice match-game playing" aria-labelledby={`${ids}-title`}>
      <h2 id={`${ids}-title`} tabIndex={-1} ref={heading}>
        Begriffe-Memory
      </h2>
      <p className="topic-intro">
        {done
          ? 'Alle Paare gefunden.'
          : 'Wähle einen Begriff und dann die passende Beschreibung. Ein Fehlversuch kostet nichts.'}
      </p>
      <p className="match-status" role="status">
        {message}
      </p>

      {done ? (
        <BullSays mood="cheer">
          {misses === 0 ? 'Alle Paare auf Anhieb – stark!' : 'Geschafft! Beim nächsten Mal sitzen sie noch besser.'}
        </BullSays>
      ) : null}

      <div className="match-columns">
        <ul className="match-terms" aria-label="Begriffe">
          {round.pairs.map((pair) => {
            const isMatched = matched.has(pair.term);
            return (
              <li key={pair.term}>
                <button
                  type="button"
                  className={`match-item${isMatched ? ' matched' : ''}${selected === pair.term ? ' selected' : ''}`}
                  aria-pressed={selected === pair.term}
                  disabled={isMatched}
                  onClick={() => pickTerm(pair.term)}
                >
                  <span>{pair.term}</span>
                  {isMatched ? (
                    <>
                      <span className="match-mark" aria-hidden="true">
                        <Icon name="check" size={16} />
                      </span>
                      <span className="visually-hidden"> – gefunden</span>
                    </>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="match-definitions" aria-label="Beschreibungen">
          {round.definitionOrder.map((pairIndex) => {
            const pair = round.pairs[pairIndex];
            const isMatched = matched.has(pair.term);
            return (
              <li key={pair.term}>
                <button
                  type="button"
                  className={`match-item definition${isMatched ? ' matched' : ''}`}
                  disabled={isMatched}
                  onClick={() => pickDefinition(pairIndex)}
                >
                  <span>{pair.definition}</span>
                  {isMatched ? (
                    <>
                      <span className="match-mark" aria-hidden="true">
                        <Icon name="check" size={16} />
                      </span>
                      <span className="visually-hidden"> – gefunden: {pair.term}</span>
                    </>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="topic-actions">
        {done ? (
          <button type="button" className="primary-button" onClick={start}>
            Neue Runde
          </button>
        ) : null}
        <button type="button" className="secondary-button" onClick={stop}>
          Beenden
        </button>
      </div>
      <p className="match-note">Fehlversuche in dieser Runde: {misses}. Nichts davon wird gespeichert.</p>
    </section>
  );
}
