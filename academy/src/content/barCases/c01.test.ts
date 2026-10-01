import { describe, expect, it } from 'vitest';
import { c01BarCases } from './c01';

describe('C-01: kuratierte Erstfälle', () => {
  it('deckt die veröffentlichten Kapitel 1 bis 7 mit sieben freigegebenen Fällen ab', () => {
    expect(c01BarCases).toHaveLength(7);
    expect(c01BarCases.every((barCase) => barCase.status === 'approved')).toBe(true);
    expect(c01BarCases.map((barCase) => barCase.unitId)).toEqual(
      Array.from({ length: 7 }, (_, index) => `price-action-trends.chapter-0${index + 1}`),
    );
    const waitCases = c01BarCases.filter((barCase) =>
      barCase.decisions.some((point) =>
        point.options.some((option) => option.decision === 'wait' && option.verdict === 'best'),
      ),
    );
    expect(waitCases.length).toBeGreaterThanOrEqual(2);
    expect(c01BarCases.some((barCase) => barCase.decisions.length > 1)).toBe(true);
  });

  it('zeichnet die unterscheidenden Bar-Formen tatsächlich in den relativen Daten', () => {
    const insideCase = c01BarCases.find((barCase) => barCase.id.endsWith('.inside-pause'))!;
    const [prior, inside, breakBar] = insideCase.bars.slice(3, 6);
    expect(inside.high).toBeLessThan(prior.high);
    expect(inside.low).toBeGreaterThan(prior.low);
    expect(breakBar.low).toBeLessThan(inside.low);
    expect(breakBar.close).toBeLessThan(inside.low);

    const outsideCase = c01BarCases.find((barCase) => barCase.id.endsWith('.outside-in-range'))!;
    const previous = outsideCase.bars[3];
    const outside = outsideCase.bars[4];
    expect(outside.high).toBeGreaterThan(previous.high);
    expect(outside.low).toBeLessThan(previous.low);
    expect(outside.close).toBe((outside.high + outside.low) / 2);
  });
});
