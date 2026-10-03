import type { ChartScenarioId } from '../content/types';
// Own illustrative data, not a reproduction of a historical source chart.
export const rangesBars = [
 {open:98.4,high:99.4,low:98,close:99.1},
 {open:99.1,high:100,low:98.5,close:98.8},
 {open:98.8,high:99.8,low:98.4,close:99.3},
 {open:99.3,high:99.9,low:98.7,close:99.2},
 {open:99.2,high:101.5,low:99.1,close:101.4},
 {open:101.4,high:102.3,low:101.2,close:102.2},
 {open:102.2,high:102.4,low:101.5,close:101.8},
 {open:101.8,high:103.2,low:101.6,close:103.1},
 {open:103.1,high:104,low:102.9,close:103.8},
];
export const rangesFailureBar = {open:101.4,high:101.6,low:99.5,close:99.7};
export function RangesBreakoutMarks({scenario}:{scenario:ChartScenarioId}) {
 const count = scenario==='par1-context'?4:scenario==='par1-breakout'||scenario==='par1-risk'?5:scenario==='par1-pullback'?8:9;
 const bars = scenario==='par1-failure' ? [...rangesBars.slice(0,5),rangesFailureBar] : rangesBars.slice(0,count);
 const y = (price:number)=>255-(price-97.5)*35;
 const risk = scenario==='par1-risk';
 return <g>
  <text x="80" y="18" className="chart-small strong">{scenario==='par1-failure'?'Alternative: Rückfall':'Eigener Übungsmarkt'} · Punkte</text>
  {[98,100,102,104].map(price=><g key={price}>
   <line x1="80" x2="615" y1={y(price)} y2={y(price)} stroke="currentColor" opacity="0.15"/>
   <text x="65" y={y(price)+4} textAnchor="end" className="chart-small">{price}</text>
  </g>)}
  <rect x="80" y={y(100)} width="535" height={y(98)-y(100)} fill="currentColor" opacity="0.05"/>
  <line x1="80" x2="615" y1={y(100)} y2={y(100)} stroke="currentColor" strokeDasharray="6 4"/>
  <text x="630" y={y(100)+4} className="chart-small">Grenze 100</text>
  {bars.map((bar,i)=>{const x=110+i*55; const tone=bar.close>=bar.open?'bull':'bear';return <g key={i}>
   <line x1={x} x2={x} y1={y(bar.high)} y2={y(bar.low)} className={`candle-wick ${tone}`}/>
   <rect x={x-12} y={y(Math.max(bar.open,bar.close))} width="24" height={Math.max(2,Math.abs(y(bar.open)-y(bar.close)))} className={`candle-body ${tone}`}/>
   <text x={x} y="282" textAnchor="middle" className="chart-small">{i+1}</text>
  </g>})}
  {risk && [[101.4,'Einstieg 101,4'],[98.4,'Stop 98,4'],[103.9,'Ziel 103,9']].map(([price,label])=><g key={label}>
   <line x1="80" x2="615" y1={y(Number(price))} y2={y(Number(price))} stroke="currentColor" strokeDasharray="3 5"/>
   <text x="630" y={y(Number(price))+4} className="chart-small">{label}</text>
  </g>)}
  <text x="80" y="303" className="chart-small">Abgeschlossene Minuten · Zahlen unter den Kerzen = Minutenfolge</text>
  <text x="80" y="323" className="chart-small">{risk?'Plan nach Minute 5 · spätere Kerzen verborgen':'Erfundene Daten · keine historische Leistungsstatistik'}</text>
 </g>;
}
