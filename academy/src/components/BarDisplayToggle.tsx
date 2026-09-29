import { useState } from 'react';

export type BarDisplay = 'chart' | 'table';

/*
 * Wahl „Chart“ oder „Tabelle“ (F-26, P09). Sie bleibt beim Wechsel zwischen Trainer, Rückblick
 * und Fällen erhalten – nur im Arbeitsspeicher der geöffneten Seite: Nach einem Reload gilt wieder
 * der Chart, und es wird nichts gespeichert.
 */
let remembered: BarDisplay = 'chart';

export function useBarDisplay(): [BarDisplay, (next: BarDisplay) => void] {
  const [display, setDisplay] = useState<BarDisplay>(remembered);
  return [
    display,
    (next) => {
      remembered = next;
      setDisplay(next);
    },
  ];
}

/** Test-Hilfe: Erinnerung zurücksetzen. */
export function resetBarDisplayMemory() {
  remembered = 'chart';
}

/**
 * Umschalter mit sichtbarer Erklärung: Die Tabelle zeigt genau die Bars des Charts als Text.
 * Beide Darstellungen erhalten denselben, bereits freigegebenen Barbestand.
 */
export function BarDisplayToggle({ display, onChange }: { display: BarDisplay; onChange: (next: BarDisplay) => void }) {
  return (
    <div className="bar-display">
      <div className="bar-display-toggle" role="group" aria-label="Darstellung der Bars">
        <button type="button" aria-pressed={display === 'chart'} onClick={() => onChange('chart')}>
          Chart
        </button>
        <button type="button" aria-pressed={display === 'table'} onClick={() => onChange('table')}>
          Tabelle
        </button>
      </div>
      <p className="bar-display-hint">Die Tabelle zeigt genau die Bars des Charts als Text.</p>
    </div>
  );
}
