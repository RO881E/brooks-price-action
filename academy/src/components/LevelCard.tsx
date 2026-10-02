import { useId } from 'react';
import { levelInfo, RANKS, xpForLevel } from '../features/levels';

/** Kompakte Levelzeile (Lernpfad): Level, Rang und Weg zum nächsten Level. */
export function LevelLine({ xp }: { xp: number }) {
  const info = levelInfo(xp);
  return (
    <div className="level-line">
      <span className="level-badge" aria-hidden="true">
        {info.level}
      </span>
      <div>
        <p>
          <strong>Level {info.level}</strong> · {info.rank.title}
        </p>
        <div
          className="level-meter"
          role="progressbar"
          aria-label={`Fortschritt zu Level ${info.level + 1}`}
          aria-valuemin={0}
          aria-valuemax={info.levelSpan}
          aria-valuenow={info.intoLevel}
          aria-valuetext={`${info.intoLevel} von ${info.levelSpan} XP`}
        >
          <span style={{ width: `${info.percent}%` }} />
        </div>
        <small>
          Noch {info.toNext} XP bis Level {info.level + 1}
        </small>
      </div>
    </div>
  );
}

/** Level-Karte (Fortschritt): aktueller Stand und die Rangleiter. */
export function LevelPanel({ xp }: { xp: number }) {
  const ids = useId();
  const info = levelInfo(xp);
  return (
    <section className="progress-panel level-panel" aria-labelledby={`${ids}-title`}>
      <div className="progress-panel-head">
        <h2 id={`${ids}-title`}>Dein Level</h2>
        <p>
          <strong>{info.xp}</strong> XP gesammelt
        </p>
      </div>
      <LevelLine xp={xp} />
      <p className="progress-note">
        XP gibt es einmal je Lektion beim ersten Abschluss – über alle Kurse gemeinsam. Die Ränge zeigen deinen
        Lernweg, nicht wie gut du handelst.
        {info.nextRank ? ` Nächster Rang: „${info.nextRank.title}“ ab Level ${info.nextRank.fromLevel}.` : ''}
      </p>
      <details className="level-ladder">
        <summary>Alle Ränge</summary>
        <ol className="level-ranks" aria-label="Ränge">
          {RANKS.map((rank) => {
            const reached = info.level >= rank.fromLevel;
            const current = info.rank === rank;
            return (
              <li key={rank.title} data-reached={reached || undefined} aria-current={current ? 'step' : undefined}>
                <strong>{rank.title}</strong>
                <small>
                  ab Level {rank.fromLevel} · {xpForLevel(rank.fromLevel)} XP
                  {current ? ' · aktuell' : reached ? ' · erreicht' : ''}
                </small>
              </li>
            );
          })}
        </ol>
      </details>
    </section>
  );
}
