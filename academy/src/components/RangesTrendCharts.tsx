import type {ChartScenarioId} from '../content/types';
export const trendBars=[
 {open:95,high:96.2,low:94.8,close:96},
 {open:96,high:97.3,low:95.8,close:97.1},
 {open:97.1,high:98.6,low:97,close:98.4},
 {open:98.4,high:100,low:98.2,close:99.8},
 {open:99.8,high:99.9,low:99.1,close:99.3},
 {open:99.3,high:100.6,low:99.2,close:100.4},
 {open:100.4,high:101.5,low:100.2,close:101.3},
 {open:101.3,high:101.4,low:100.7,close:100.9},
 {open:100.9,high:102,low:100.8,close:101.8},
 {open:101.8,high:102.3,low:100.8,close:101},
];
export const secondAttemptBars=[...trendBars.slice(0,5),
 {open:99.3,high:100,low:99.2,close:99.8},
 {open:99.8,high:99.9,low:98.9,close:99.1},
 {open:99.1,high:99.8,low:99,close:99.6},
 {open:99.6,high:100.7,low:99.5,close:100.5},
];
export const trendFailureBars=[...trendBars.slice(0,5),
 {open:99.3,high:100.2,low:98.7,close:98.9},
 {open:98.9,high:99.5,low:98.4,close:98.6},
];
export const nextDayBars=[
 {open:99.1,high:99.4,low:98.6,close:98.9},
 {open:98.9,high:99.9,low:98.8,close:99.7},
 {open:99.7,high:100.7,low:99.6,close:100.5},
];
export const trendMirror=(b:typeof trendBars[number])=>({open:200-b.open,high:200-b.low,low:200-b.high,close:200-b.close});
export function trendScenarioBars(scenario:ChartScenarioId){
 if(scenario==='par4-nextday')return nextDayBars;
 if(scenario==='par4-second')return secondAttemptBars;
 if(scenario==='par4-failure')return trendFailureBars;
 if(scenario==='par4-bear')return trendBars.slice(0,6).map(trendMirror);
 return trendBars.slice(0,scenario==='par4-context'?4:scenario==='par4-pullback'?5:scenario==='par4-entries'||scenario==='par4-risk'?6:scenario==='par4-late'?10:9);
}
export function TrendMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=trendScenarioBars(scenario),day=scenario==='par4-nextday',bear=scenario==='par4-bear',risk=scenario==='par4-risk',entries=scenario==='par4-entries';
 const min=day?98:bear?98:94,max=day?102:bear?106:103;
 const y=(price:number)=>250-(price-min)/(max-min)*207,x=(i:number)=>100+i*48;
 return <g>
  <text x="80" y="24" className="chart-small strong">{day?'Neuer Handelstag · bekanntes Vortagshoch 100':'Eigener Trendfall · abgeschlossene Minuten · Punkte'}</text>
  {[min+1,100,max-1].map((v,i)=><g key={i}><line x1="80" x2="620" y1={y(v)} y2={y(v)} stroke="currentColor" opacity="0.15"/><text x="65" y={y(v)+4} textAnchor="end" className="chart-small">{v}</text></g>)}
  <line x1="80" x2="620" y1={y(100)} y2={y(100)} stroke="currentColor" strokeDasharray="6 4"/><text x="630" y={y(100)+4} className="chart-small">{bear?'Altes Tief 100':'Altes Hoch 100'}</text>
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}>
   <line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/>
   <rect x={x(i)-10} y={y(Math.max(b.open,b.close))} width="20" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/>
   <text x={x(i)} y="278" textAnchor="middle" className="chart-small">{i+1}</text>
  </g>})}
  {risk?<>
   <line x1="80" x2="620" y1={y(99)} y2={y(99)} stroke="currentColor" strokeDasharray="3 5"/><text x="630" y={y(99)+4} className="chart-small">Stop 99,0</text>
   <line x1="80" x2="620" y1={y(101.8)} y2={y(101.8)} stroke="currentColor" strokeDasharray="3 5"/><text x="630" y={y(101.8)+4} className="chart-small">Ziel 101,8</text>
  </>:null}
  {entries?<text x="380" y="70" className="chart-small">Frühe Schwelle 100,0 · spätere 100,1</text>:null}
  <text x="80" y="302" className="chart-small">{scenario==='par4-second'?'Versuch 1: Minute 6 · erneute Korrektur 7 · Versuch 2: Minute 9':risk?'Modellpreise · Kosten und tatsächliche Ausführungen gesondert':scenario==='par4-context'||scenario==='par4-pullback'?'Nur der damalige Ausschnitt · Zukunft verborgen': 'Zahlen = Minutenfolge · Zeitpunkt der Entscheidung beachten'}</text>
  <text x="80" y="324" className="chart-small">Erfundene Daten · kein Beleg für eigene Orders oder Teilnehmerabsichten</text>
 </g>;
}
