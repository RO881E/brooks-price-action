import type { ChartScenarioId } from '../content/types';
export const readingChartDescriptions = {
  'rc1-line': 'Eigener Schluss-Linienchart in Euro je Vela-Aktie: Minute eins 50,20, Minute zwei 50,15, Minute drei 50,10. Die Verbindung zeigt keine belegte Zwischenbewegung.',
  'rc1-bar': 'Eigener OHLC-Balken der ersten Vela-Minute: links Eröffnung 50,00, oben Hoch 50,30, unten Tief 49,80, rechts Schluss 50,20. Die Achse zeigt Euro je Aktie.',
  'rc1-candles': 'Drei eigene abgeschlossene Vela-Minutenkerzen in Euro je Aktie: zuerst O50,00 H50,30 L49,80 C50,20; dann O50,40 H50,50 L50,10 C50,15; zuletzt O50,10 H50,20 L49,90 C50,10. Die letzte Kerze hat keinen Körperabstand, aber eine Preisspanne.',
} as const;
/** Integer cents avoid early rounding of the teaching prices. */
export const readingChartBars = [
  { open: 5000, high: 5030, low: 4980, close: 5020 },
  { open: 5040, high: 5050, low: 5010, close: 5015 },
  { open: 5010, high: 5020, low: 4990, close: 5010 },
] as const;
export const readingPriceY = (cents: number) => 42 + (5060 - cents) * 183 / 90;
const euro = (cents: number) => (cents / 100).toFixed(2).replace('.', ',');
export function ReadingChartsBasics({ scenario }: { scenario: ChartScenarioId }) {
  if (!(scenario in readingChartDescriptions)) return null;
  const xs = [180, 390, 600];
  const single = scenario === 'rc1-bar';
  return <g className="reading-charts-basics">
    <text className="chart-small strong" x="380" y="23" textAnchor="middle">{single ? 'Ein OHLC-Balken · Minute 1' : scenario === 'rc1-line' ? 'Nur die drei Schlusswerte' : 'Drei Kerzen · dieselbe lineare Preisachse'}</text>
    {[4980, 5000, 5020, 5040, 5060].map((price) => <g key={price}>
      <line className="chart-grid" x1="80" x2="715" y1={readingPriceY(price)} y2={readingPriceY(price)} />
      <text className="chart-small" x="68" y={readingPriceY(price) + 5} textAnchor="end">{euro(price)}</text>
    </g>)}
    <line x1="80" x2="715" y1="240" y2="240" stroke="currentColor" />
    {scenario === 'rc1-line' ? <>
      <polyline points={readingChartBars.map((bar, i) => `${xs[i]},${readingPriceY(bar.close)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="3" />
      {readingChartBars.map((bar, i) => <g key={i}>
        <circle cx={xs[i]} cy={readingPriceY(bar.close)} r="5" fill="currentColor" />
        <text className="chart-small strong" x={xs[i]} y={readingPriceY(bar.close) - 16} textAnchor="middle">C {euro(bar.close)}</text>
      </g>)}
    </> : single ? <g>
      <line x1="390" x2="390" y1={readingPriceY(5030)} y2={readingPriceY(4980)} stroke="currentColor" strokeWidth="3" />
      <line x1="352" x2="390" y1={readingPriceY(5000)} y2={readingPriceY(5000)} stroke="currentColor" strokeWidth="3" />
      <line x1="390" x2="428" y1={readingPriceY(5020)} y2={readingPriceY(5020)} stroke="currentColor" strokeWidth="3" />
      <text className="chart-small strong" x="338" y={readingPriceY(5000) + 5} textAnchor="end">O 50,00 · links</text>
      <text className="chart-small strong" x="442" y={readingPriceY(5020) + 5}>C 50,20 · rechts</text>
      <text className="chart-small strong" x="406" y={readingPriceY(5030) - 10}>H 50,30</text>
      <text className="chart-small strong" x="406" y={readingPriceY(4980) + 17}>L 49,80</text>
    </g> : readingChartBars.map((bar, i) => {
      const tone = bar.close >= bar.open ? 'bull' : 'bear';
      return <g key={i}>
        <line className={`candle-wick ${tone}`} x1={xs[i]} x2={xs[i]} y1={readingPriceY(bar.high)} y2={readingPriceY(bar.low)} />
        {bar.open === bar.close ? <line x1={xs[i] - 22} x2={xs[i] + 22} y1={readingPriceY(bar.open)} y2={readingPriceY(bar.open)} stroke="currentColor" strokeWidth="3" /> : <rect className={`candle-body ${tone}`} x={xs[i] - 22} y={readingPriceY(Math.max(bar.open, bar.close))} width="44" height={Math.abs(readingPriceY(bar.open) - readingPriceY(bar.close))} />}
      </g>;
    })}
    {(single ? [1] : [0, 1, 2]).map((i) => <text key={i} className="chart-small strong" x={xs[i]} y="260" textAnchor="middle">Minute {single ? 1 : i + 1}</text>)}
    {scenario === 'rc1-candles' ? readingChartBars.map((bar, i) => <g key={i}>
      <text className="chart-small" x={xs[i]} y="280" textAnchor="middle">O {euro(bar.open)} · C {euro(bar.close)}</text>
      <text className="chart-small" x={xs[i]} y="299" textAnchor="middle">H {euro(bar.high)} · L {euro(bar.low)}</text>
    </g>) : <text className="chart-small" x="390" y="289" textAnchor="middle">{single ? 'Links O · rechts C · oben H · unten L' : 'Linien verbinden Punkte; sie sind keine weiteren Geschäfte.'}</text>}
    <text className="chart-small" x="390" y="322" textAnchor="middle">Eigene abgeschlossene Minuten · gehandelte Preise · Euro je Aktie</text>
  </g>;
}
