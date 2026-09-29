import { useId } from 'react';
import {
  DEFAULT_READING_OPTIONS,
  READING_SIZES,
  READING_SPACINGS,
  sameReadingOptions,
  type ReadingOptions,
  type ReadingSize,
  type ReadingSpacing,
} from '../features/progress';

export const READING_SIZE_LABELS: Record<ReadingSize, string> = {
  standard: 'Standard',
  large: 'Groß',
  larger: 'Sehr groß',
};

export const READING_SPACING_LABELS: Record<ReadingSpacing, string> = {
  standard: 'Standard',
  relaxed: 'Weit',
  wide: 'Sehr weit',
};

export function readingOptionsLabel(options: ReadingOptions): string {
  if (sameReadingOptions(options, DEFAULT_READING_OPTIONS)) return 'Lesetext Standard';
  return `Schrift ${READING_SIZE_LABELS[options.size]}, Zeilenabstand ${READING_SPACING_LABELS[options.spacing]}`;
}

/**
 * Leseoptionen im Buchmodus (F-22): wenige benannte Stufen für Schriftgröße
 * und Zeilenabstand. Die Wahl wirkt sofort über CSS-Variablen; „Standard“
 * setzt nur diese beiden Optionen zurück.
 */
export function ReadingOptionsPanel({
  options,
  onChange,
}: {
  options: ReadingOptions;
  onChange: (changes: Partial<ReadingOptions>) => void;
}) {
  const ids = useId();
  const isDefault = sameReadingOptions(options, DEFAULT_READING_OPTIONS);

  return (
    <details className="reading-options">
      <summary>
        Leseansicht
        <span className="reading-options-current"> · {readingOptionsLabel(options)}</span>
      </summary>
      <div className="reading-options-body">
        <fieldset>
          <legend>Schriftgröße</legend>
          <div className="reading-options-choices">
            {READING_SIZES.map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  name={`${ids}-size`}
                  value={size}
                  checked={options.size === size}
                  onChange={() => onChange({ size })}
                />
                <span>{READING_SIZE_LABELS[size]}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Zeilenabstand</legend>
          <div className="reading-options-choices">
            {READING_SPACINGS.map((spacing) => (
              <label key={spacing}>
                <input
                  type="radio"
                  name={`${ids}-spacing`}
                  value={spacing}
                  checked={options.spacing === spacing}
                  onChange={() => onChange({ spacing })}
                />
                <span>{READING_SPACING_LABELS[spacing]}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <button
          type="button"
          className="secondary-button"
          disabled={isDefault}
          onClick={() => onChange(DEFAULT_READING_OPTIONS)}
        >
          Standard
        </button>
        <p className="reading-options-note">
          Gilt für den Lesetext im Buchmodus und bleibt auf diesem Gerät gespeichert. Der Zoom des
          Browsers funktioniert weiterhin.
        </p>
      </div>
    </details>
  );
}
