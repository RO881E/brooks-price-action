import { useId } from 'react';
import type { LessonOutline } from '../content/types';
import type { AlbumBar, AlbumEntry } from '../content/barAlbum';
import type { AlbumOverview } from '../features/barAlbum';
import { Icon } from './Icon';

const WIDTH = 120;
const HEIGHT = 84;
const PAD = 8;

/** Kleines, schematisches Bar-Bild. Gesperrte Karten zeigen nur graue Silhouetten. */
export function AlbumBars({ entry, locked = false }: { entry: AlbumEntry; locked?: boolean }) {
  const all = entry.bars.flatMap((bar: AlbumBar) => [bar[1], bar[2]]).concat(entry.level ?? []);
  const min = Math.min(...all);
  const max = Math.max(...all);
  const y = (value: number) => PAD + ((max - value) / (max - min || 1)) * (HEIGHT - PAD * 2);
  const step = (WIDTH - PAD * 2) / entry.bars.length;
  const barWidth = Math.min(16, step * 0.5);
  return (
    <svg
      className={`album-bars${locked ? ' locked' : ''}`}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role={locked ? undefined : 'img'}
      aria-label={locked ? undefined : `Schematische Bars: ${entry.look}`}
      aria-hidden={locked ? 'true' : undefined}
      focusable="false"
    >
      {entry.level !== undefined ? <line className="album-level" x1={PAD} x2={WIDTH - PAD} y1={y(entry.level)} y2={y(entry.level)} /> : null}
      {entry.bars.map(([open, high, low, close], index) => {
        const x = PAD + step * index + step / 2;
        const up = close >= open;
        const top = y(Math.max(open, close));
        const bottom = y(Math.min(open, close));
        return (
          <g key={index} className={`album-bar ${up ? 'up' : 'down'}${index === entry.focus ? ' focus' : ''}`}>
            <line x1={x} x2={x} y1={y(high)} y2={y(low)} />
            <rect x={x - barWidth / 2} y={top} width={barWidth} height={Math.max(2, bottom - top)} rx="2" />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Bar-Album: Sammelkarten zu Bar-Formen. Eine Karte wird frei, sobald ihre Lektion
 * abgeschlossen ist – die Beschreibung ist die vorhandene Glossar-Definition.
 */
export function BarAlbum({
  album,
  onOpenLesson,
}: {
  album: AlbumOverview;
  onOpenLesson?: (lesson: LessonOutline) => void;
}) {
  const ids = useId();
  return (
    <section className="progress-panel bar-album" aria-labelledby={`${ids}-title`}>
      <div className="progress-panel-head">
        <h2 id={`${ids}-title`}>Bar-Album</h2>
        <p>
          <strong>{album.unlocked}</strong> von {album.cards.length} Karten
        </p>
      </div>
      <p className="progress-note">
        Jede Karte zeigt eine Bar-Form in eigenen, schematischen Bars. Sie wird frei, sobald du die
        zugehörige Lektion abgeschlossen hast.
      </p>
      <ul className="album-grid">
        {album.cards.map(({ entry, definition, lesson, unlocked }) => (
          <li key={entry.id} className={unlocked ? 'unlocked' : 'locked'}>
            <AlbumBars entry={entry} locked={!unlocked} />
            <h3>
              {entry.term}
              {unlocked ? null : (
                <span className="album-lock" aria-hidden="true">
                  <Icon name="lock" size={14} />
                </span>
              )}
            </h3>
            {unlocked ? (
              <>
                <p>{definition}</p>
                {onOpenLesson ? (
                  <button
                    type="button"
                    className="link-button"
                    aria-label={`Lektion öffnen: ${lesson.title}`}
                    onClick={() => onOpenLesson(lesson)}
                  >
                    Zur Lektion
                  </button>
                ) : null}
              </>
            ) : (
              <p className="album-hint">
                Noch gesperrt. Schließe die Lektion „{lesson.title}“ ab, um diese Karte freizuschalten.
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
