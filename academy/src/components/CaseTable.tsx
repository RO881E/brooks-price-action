import { useId } from 'react';
import type { CaseBar } from '../content/barCaseTypes';

function direction(bar: CaseBar): string {
  return bar.close > bar.open ? 'steigend' : bar.close < bar.open ? 'fallend' : 'unverändert';
}

/**
 * Tabellenansicht des Trainercharts (F-26). Sie erhält – wie der Chart – nur
 * die bereits freigegebenen Bars aus `publicView()`; spätere Bars kennt sie
 * nicht. Die Werte sind relative Lernwerte auf einer frei gewählten Skala.
 */
export function CaseTable({
  bars,
  newFrom,
  decisionText,
}: {
  bars: CaseBar[];
  /** Ab diesem Index gerade neu aufgedeckt (nach dem Reveal). */
  newFrom?: number;
  /** Kurzer Text zum aktuellen Entscheidungspunkt. */
  decisionText: string;
}) {
  const ids = useId();
  const hasLabels = bars.some((bar) => bar.label);
  return (
    <div className="case-table">
      <p className="case-table-point" id={`${ids}-point`}>
        {decisionText}
      </p>
      <div
        className="case-table-scroll"
        role="region"
        aria-labelledby={`${ids}-caption`}
        // Bei großer Schrift oder schmaler Ansicht horizontal per Tastatur scrollbar.
        tabIndex={0}
      >
        <table aria-describedby={`${ids}-point`}>
          <caption id={`${ids}-caption`}>
            Sichtbare Bars ({bars.length}) – relative Lernwerte auf frei gewählter Skala, keine echten Kurse
          </caption>
          <thead>
            <tr>
              <th scope="col">Bar</th>
              <th scope="col">Eröffnung (Open)</th>
              <th scope="col">Hoch (High)</th>
              <th scope="col">Tief (Low)</th>
              <th scope="col">Schluss (Close)</th>
              <th scope="col">Richtung</th>
              {hasLabels ? <th scope="col">Beschriftung</th> : null}
            </tr>
          </thead>
          <tbody>
            {bars.map((bar, index) => {
              const fresh = newFrom !== undefined && index >= newFrom;
              return (
                <tr key={index} className={fresh ? 'new' : undefined} data-bar-row={index}>
                  <th scope="row">
                    {index + 1}
                    {fresh ? <span className="case-table-new"> · neu</span> : null}
                  </th>
                  <td>{bar.open}</td>
                  <td>{bar.high}</td>
                  <td>{bar.low}</td>
                  <td>{bar.close}</td>
                  <td>{direction(bar)}</td>
                  {hasLabels ? <td>{bar.label ?? '–'}</td> : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
