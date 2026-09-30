import type { ReactNode } from 'react';
import type { BullMood } from '../features/bull';

/*
 * Der Bulle „Bo“. Die Bilder liegen als feste Dateien in `public/mascot/`
 * (`bull-happy.svg`, `bull-think.svg`, `bull-cheer.svg`, `bull-calm.svg`) und können
 * durch andere Bilder mit demselben Namen ersetzt werden, ohne den Code zu ändern
 * (quadratisch empfohlen; bei einem anderen Dateityp `BULL_EXTENSION` anpassen).
 * Der Bulle ist Dekoration: leeres `alt`, für Screenreader unsichtbar – jede Aussage
 * steht zusätzlich als normaler Text daneben.
 */

export const BULL_EXTENSION = 'svg';

export function bullSrc(mood: BullMood): string {
  return `${import.meta.env.BASE_URL}mascot/bull-${mood}.${BULL_EXTENSION}`;
}

export function Bull({ mood, size = 56, className = '' }: { mood: BullMood; size?: number; className?: string }) {
  return (
    <img
      className={`bull ${className}`.trim()}
      src={bullSrc(mood)}
      alt=""
      width={size}
      height={size}
      data-mood={mood}
      decoding="async"
      draggable={false}
    />
  );
}

/** Bulle mit Sprechblase; der Text ist normaler, lesbarer Inhalt. */
export function BullSays({ mood, children, size = 64 }: { mood: BullMood; children: ReactNode; size?: number }) {
  return (
    <div className="bull-says">
      <Bull mood={mood} size={size} />
      <p className="bull-bubble">{children}</p>
    </div>
  );
}
