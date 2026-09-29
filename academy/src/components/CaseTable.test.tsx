import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { twoStepFixture } from '../test/fixtures/barCases';
import { advance, chooseDecision, publicView, startSession, submitDecision, toggleCue } from '../features/barTrainer';
import { CaseTable } from './CaseTable';

afterEach(cleanup);

describe('CaseTable (F-26)', () => {
  it('zeigt genau die freigegebenen Bars mit Spaltenköpfen und Beschriftung', () => {
    const session = startSession(twoStepFixture);
    const { bars } = publicView(twoStepFixture, session);
    render(<CaseTable bars={bars} decisionText="Entscheidungspunkt 1 von 2" />);
    const table = screen.getByRole('table', { name: /Sichtbare Bars \(4\) – relative Lernwerte/ });
    expect(within(table).getAllByRole('columnheader').map((cell) => cell.textContent)).toEqual([
      'Bar',
      'Eröffnung (Open)',
      'Hoch (High)',
      'Tief (Low)',
      'Schluss (Close)',
      'Richtung',
      ...(bars.some((bar) => bar.label) ? ['Beschriftung'] : []),
    ]);
    // Kopfzeile + sichtbare Bars, keine Zeile für spätere Bars.
    expect(within(table).getAllByRole('row')).toHaveLength(1 + twoStepFixture.decisions[0].afterBar + 1);
    expect(table).toHaveAccessibleDescription('Entscheidungspunkt 1 von 2');
    expect(screen.getByRole('region', { name: /Sichtbare Bars/ })).toHaveAttribute('tabindex', '0');
    const first = twoStepFixture.bars[0];
    expect(within(table).getAllByRole('row')[1]).toHaveTextContent(`1${first.open}${first.high}${first.low}${first.close}`);
  });

  it('nach dem Reveal kommen nur die freigegebenen Bars hinzu und sind als neu markiert', () => {
    const point = twoStepFixture.decisions[0];
    let session = chooseDecision(startSession(twoStepFixture), 'wait');
    session = toggleCue(twoStepFixture, session, point.cues[0].id);
    session = submitDecision(twoStepFixture, session);
    const { bars } = publicView(twoStepFixture, session);
    render(<CaseTable bars={bars} newFrom={point.afterBar + 1} decisionText="Aufgelöst" />);
    const rows = screen.getAllByRole('row').slice(1);
    expect(rows).toHaveLength(twoStepFixture.decisions[1].afterBar + 1);
    expect(rows.filter((row) => row.className === 'new')).toHaveLength(twoStepFixture.decisions[1].afterBar - point.afterBar);
    expect(rows.at(-1)).toHaveTextContent('neu');

    const finished = advance(twoStepFixture, session);
    expect(finished.index).toBe(1);
  });
});
