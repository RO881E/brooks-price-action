import type { ChartScenarioId } from '../content/types';
import { groupedMinuteBars, groupedTickBars, groupedVolumeBars } from '../content/courses/reading-charts/chapter-03-model';
export const groupingChartDescriptions = {
  'rc3-time': 'Luma, Euro je Aktie: vier fertige Minuten-Bars bei 09:04.',
  'rc3-tick': 'Luma, Euro je Aktie: vier fertige 3-Tick-Bars ohne feste Zeitdauer.',
  'rc3-volume': 'Luma, Euro je Aktie: Fünfer-Ganzgeschäftsregel ohne feste Zeitdauer. Vier fertige Bars, fünfter noch offen.',
} as const;
export const groupingPriceY = (cents: number) => 45 + (2030-cents)*150/45;
const euro = (cents: number) => (cents/100).toFixed(2).replace('.',',');
const clock = (seconds: number) => new Date(seconds*1000).toISOString().slice(14,19);
export function ReadingChartsGrouping({scenario}: {scenario: ChartScenarioId}) {
  if(!(scenario in groupingChartDescriptions)) return null;
  const time = scenario === 'rc3-time', tick = scenario === 'rc3-tick';
  const bars = time ? groupedMinuteBars : tick ? groupedTickBars : groupedVolumeBars;
  const x = (index: number) => bars.length === 4 ? 172+index*155 : 138+index*126;
  return <g className="reading-charts-grouping">
    <text className="chart-small strong" x="390" y="23" textAnchor="middle">{time ? '1 Minute' : tick ? '3 Geschäftsticks' : '5 Aktien · ganze Geschäfte'}</text>
    {[1985,2000,2015,2030].map(price => <g key={price}>
      <line className="chart-grid" x1="70" x2="742" y1={groupingPriceY(price)} y2={groupingPriceY(price)}/>
      <text className="chart-small" x="62" y={groupingPriceY(price)+5} textAnchor="end">{euro(price)}</text>
    </g>)}
    {bars.map((bar,i) => <g key={i}>
      <line x1={x(i)} x2={x(i)} y1={groupingPriceY(bar.high)} y2={groupingPriceY(bar.low)}/>
      <line x1={x(i)-19} x2={x(i)} y1={groupingPriceY(bar.open)} y2={groupingPriceY(bar.open)} />
      <line x1={x(i)} x2={x(i)+19} y1={groupingPriceY(bar.close)} y2={groupingPriceY(bar.close)} />
      <text className="chart-small strong" x={x(i)} y="221" textAnchor="middle">{time ? `09:0${i}` : `Bar ${i+1}${bar.complete ? '' : ' · offen'}`}</text>
      <text className="chart-small" x={x(i)} y="240" textAnchor="middle">{`G ${bar.ids[0]}${bar.ids.length > 1 ? `–${bar.ids.at(-1)}` : ''} · ${bar.shares} Aktien`}</text>
      <text className="chart-small" x={x(i)} y="259" textAnchor="middle">O {euro(bar.open)} · C {euro(bar.close)}</text>
      <text className="chart-small" x={x(i)} y="278" textAnchor="middle">H {euro(bar.high)} · L {euro(bar.low)}</text>
      <text className="chart-small" x={x(i)} y="299" textAnchor="middle">{clock(bar.firstSecond)}–{clock(bar.lastSecond)}</text>
    </g>)}
    <text className="chart-small" x="390" y="325" textAnchor="middle">Eigene Geschäfte · Euro je Aktie · Geschäftszeiten 09:mm:ss</text>
  </g>;
}
