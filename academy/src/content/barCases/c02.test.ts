import { describe, expect, it } from 'vitest';
import { c01BarCases } from './c01';
import { c02BarCases } from './c02';
import { barCases, transferCases } from '../barCases';

const bestOf = (point: (typeof c02BarCases)[number]['decisions'][number]) =>
  point.options.find((option) => option.verdict === 'best')!.decision;

describe('C-02: ungesehene Transferfälle', () => {
  it('liefert sechs Fälle in eigener Datei, alle noch als Entwurf bis zur fachlichen Freigabe', () => {
    expect(c02BarCases).toHaveLength(6);
    expect(c02BarCases.every((barCase) => barCase.status === 'draft')).toBe(true);
    expect(c02BarCases.every((barCase) => barCase.id.startsWith('bar-case.c02.'))).toBe(true);
    expect(c02BarCases.filter((barCase) => barCase.decisions.length >= 2).length).toBeGreaterThanOrEqual(2);
  });

  it('enthält echte „Abwarten“-Entscheidungen und beide Richtungen als beste Wahl', () => {
    const points = c02BarCases.flatMap((barCase) => barCase.decisions);
    const best = points.map(bestOf);
    expect(best.filter((decision) => decision === 'wait').length).toBeGreaterThanOrEqual(2);
    expect(best).toContain('long');
    expect(best).toContain('short');
    const waitCases = c02BarCases.filter((barCase) => barCase.decisions.some((point) => bestOf(point) === 'wait'));
    expect(waitCases.length).toBeGreaterThanOrEqual(2);
  });

  it('bleibt strikt vom gewöhnlichen Trainer getrennt', () => {
    const c01Ids = new Set(c01BarCases.map((barCase) => barCase.id));
    expect(c02BarCases.some((barCase) => c01Ids.has(barCase.id))).toBe(false);
    const trainerIds = new Set(barCases.map((barCase) => barCase.id));
    for (const barCase of transferCases) expect(trainerIds.has(barCase.id)).toBe(false);
    expect(transferCases.map((barCase) => barCase.id)).toEqual(c02BarCases.map((barCase) => barCase.id));
  });

  it('kopiert keine C-01-Preisfolge', () => {
    const key = (bars: { open: number; high: number; low: number; close: number }[]) =>
      bars.map((bar) => [bar.open, bar.high, bar.low, bar.close].join(',')).join(';');
    const c01Keys = new Set(c01BarCases.map((barCase) => key(barCase.bars)));
    for (const barCase of c02BarCases) expect(c01Keys.has(key(barCase.bars))).toBe(false);
  });

  it('zeichnet die beschriebenen Formationen tatsächlich in den relativen Daten', () => {
    const byId = (suffix: string) => c02BarCases.find((barCase) => barCase.id.endsWith(suffix))!;
    // Enge Pause: zwei kleine Bars, klar kleiner als die vier davor, dann Ausbruch mit starkem Schluss.
    const pause = byId('tight-pause-in-trend').bars;
    const range = (bar: (typeof pause)[number]) => bar.high - bar.low;
    expect(range(pause[4])).toBeLessThan(range(pause[3]));
    expect(range(pause[5])).toBeLessThan(range(pause[3]));
    expect(pause[7].close).toBeGreaterThan(Math.max(pause[4].high, pause[5].high, pause[6].high));
    // Überdehnter Bar: mehrfach größer als jeder Vorgänger.
    const climax = byId('climax-is-not-reversal').bars;
    for (const previous of climax.slice(0, 5)) expect(range(climax[5])).toBeGreaterThan(range(previous) * 2);
    // Rücklauf an den Rand: bleibt über der alten Kante, Folgebar schließt kräftig bullisch.
    const retest = byId('breakout-test-holds').bars;
    const oldTop = Math.max(...retest.slice(0, 5).map((bar) => bar.high));
    expect(retest[7].low).toBeGreaterThan(oldTop);
    expect(retest[8].close).toBeGreaterThan(retest[7].high - 2);
    // Nicht ausgelöste Order: Bar 5 überschreitet das Signal-Hoch nicht.
    const unfilled = byId('unfilled-order-cancelled').bars;
    expect(unfilled[5].high).toBeLessThan(unfilled[4].high);
    // Hammer: langer unterer Schatten; gescheiterter Rücklauf mit tieferem Hoch.
    const hammer = byId('counter-trend-needs-evidence').bars;
    expect(Math.min(hammer[5].open, hammer[5].close) - hammer[5].low).toBeGreaterThan(range(hammer[5]) * 0.6);
    expect(hammer[7].high).toBeLessThan(hammer[2].high);
    expect(hammer[8].close).toBeLessThan(hammer[5].low + range(hammer[8]));
    // Zweiter Versuch: neues Hoch, dann Schluss unter dem Tief des ersten bärischen Bars.
    const attempt = byId('second-short-attempt').bars;
    expect(attempt[6].high).toBeGreaterThan(attempt[4].high);
    expect(attempt[8].close).toBeLessThan(attempt[5].low);
  });

  it('nennt vor dem Reveal keine späteren Bars in Prompt, Setup oder Hinweisen', () => {
    // Prompts nutzen nur Bars bis afterBar; grobe Prüfung auf Zukunftsvokabular.
    const future = /(später|danach folgt|anschließend|wird sich|steigt weiter|fällt weiter|wurde tatsächlich)/i;
    for (const barCase of c02BarCases) {
      expect(barCase.setup).not.toMatch(future);
      for (const point of barCase.decisions) {
        expect(point.prompt).not.toMatch(future);
        for (const cue of point.cues) expect(cue.label).not.toMatch(future);
      }
    }
  });
});
