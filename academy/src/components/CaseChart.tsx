import { useId } from 'react';
import type { CaseBar } from '../content/barCaseTypes';

const WIDTH = 640;
const HEIGHT = 300;
const PAD_X = 18;
const PAD_Y = 22;

function describeBar(bar: CaseBar): string {
  const direction = bar.close > bar.open ? 'steigend' : bar.close < bar.open ? 'fallend' : 'unverändert';
  return `Eröffnung ${bar.open}, Hoch ${bar.high}, Tief ${bar.low}, Schluss ${bar.close} (${direction})`;
}

/**
 * Schematischer Kerzenchart des Trainers (F-15). Gezeichnet werden nur die
 * übergebenen – also bereits bekannten – Bars; Maßstab und Breite ergeben sich
 * allein aus ihnen, damit nichts über spätere Bars verrät. Ein freier Platz
 * rechts markiert die Stelle der Entscheidung.
 */
export function CaseChart({
  bars,
  newFrom,
  deciding,
}: {
  bars: CaseBar[];
  /** Ab diesem Index sind die Bars gerade neu aufgedeckt (hervorgehoben). */
  newFrom?: number;
  /** Vor der Abgabe: Markierung „Entscheidung hier“. */
  deciding: boolean;
}) {
  const ids = useId();
  const low = Math.min(...bars.map((bar) => bar.low));
  const high = Math.max(...bars.map((bar) => bar.high));
  const span = high - low || 1;
  const slots = bars.length + 1;
  const slot = (WIDTH - PAD_X * 2) / slots;
  const body = Math.max(4, Math.min(22, slot * 0.55));
  const y = (value: number) => PAD_Y + ((high - value) / span) * (HEIGHT - PAD_Y * 2);
  const x = (index: number) => PAD_X + slot * index + slot / 2;
  const last = bars.at(-1);
  const labels = bars.flatMap((bar, index) => (bar.label ? [`Bar ${index + 1}: ${bar.label}`] : []));

  return (
    <figure className="case-chart">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby={`${ids}-desc`}
        preserveAspectRatio="none"
      >
        {newFrom !== undefined && newFrom < bars.length ? (
          <rect
            className="case-chart-new"
            x={PAD_X + slot * newFrom}
            y={0}
            width={slot * (bars.length - newFrom)}
            height={HEIGHT}
          />
        ) : null}
        {bars.map((bar, index) => {
          const tone = bar.close > bar.open ? 'up' : bar.close < bar.open ? 'down' : 'flat';
          const top = y(Math.max(bar.open, bar.close));
          const bottom = y(Math.min(bar.open, bar.close));
          return (
            <g
              key={index}
              className={`case-bar ${tone}${newFrom !== undefined && index >= newFrom ? ' is-new' : ''}`}
              data-bar-index={index}
              style={newFrom !== undefined && index >= newFrom ? ({ '--n': index - newFrom } as React.CSSProperties) : undefined}
            >
              <line x1={x(index)} x2={x(index)} y1={y(bar.high)} y2={y(bar.low)} />
              <rect x={x(index) - body / 2} y={top} width={body} height={Math.max(2, bottom - top)} rx={2} />
            </g>
          );
        })}
        {deciding ? (
          <line
            className="case-chart-now"
            x1={PAD_X + slot * bars.length + slot * 0.15}
            x2={PAD_X + slot * bars.length + slot * 0.15}
            y1={PAD_Y / 2}
            y2={HEIGHT - PAD_Y / 2}
          />
        ) : null}
      </svg>
      <figcaption id={`${ids}-desc`} className="visually-hidden">
        Schematischer Chart mit {bars.length} sichtbaren Bars.
        {last ? ` Letzter sichtbarer Bar: ${describeBar(last)}.` : ''}
        {labels.length ? ` Beschriftungen: ${labels.join('; ')}.` : ''}
      </figcaption>
      {labels.length ? (
        <ul className="case-chart-labels" aria-hidden="true">
          {labels.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      ) : null}
    </figure>
  );
}
