import type { ChartScenarioId } from '../content/types';
export const strengthBase = [
 {open:49,high:49.5,low:48.9,close:49.3},
 {open:49.3,high:49.8,low:49,close:49.1},
 {open:49.1,high:50,low:49,close:49.5},
 {open:49.5,high:49.9,low:49.2,close:49.3},
];
export const strengthBars = [...strengthBase,
 {open:49.4,high:51.5,low:49.3,close:51.4},
 {open:51.4,high:52.3,low:51.2,close:52.2},
 {open:52.2,high:52.4,low:51.6,close:51.9},
 {open:51.9,high:53.2,low:51.8,close:53.1},
];
export const weakBars = [...strengthBase,
 {open:49.4,high:51.5,low:49.3,close:49.8},
 {open:49.8,high:50,low:48.8,close:49.1},
];
export const smallBars = [...strengthBase,
 {open:49.4,high:50.3,low:49.3,close:50.2},
 {open:50.2,high:50.9,low:50.1,close:50.8},
 {open:50.8,high:51.4,low:50.6,close:51.3},
];
export const lateBars = [
 {open:49.8,high:50.6,low:49.7,close:50.4},
 {open:50.4,high:51.3,low:50.3,close:51.2},
 {open:51.2,high:52.2,low:51.1,close:52},
 {open:52,high:53,low:51.9,close:52.8},
 {open:52.8,high:55,low:52.7,close:54.8},
 {open:54.8,high:54.9,low:53.2,close:53.4},
];
export const strengthVolumes=[100,120,80,100,600];
export const strengthPaths=[[49.4,49.3,51.2,51.3,51.5,51.4],[49.4,51.5,49.3,51.2,49.6,51.4]];
export const mirrorStrength = (bar:typeof strengthBars[number]) => ({open:100-bar.open,high:100-bar.low,low:100-bar.high,close:100-bar.close});
export function StrengthMarks({scenario}:{scenario:ChartScenarioId}) {
 if(scenario==='par2-volume') return <g>
  <text x="80" y="25" className="chart-small strong">Gehandelte Menge · Einheiten je Minute</text>
  <line x1="80" x2="650" y1="255" y2="255" stroke="currentColor"/>
  {[0,100,300,600].map(v=><g key={v}><text x="65" y={255-v*.32+4} textAnchor="end" className="chart-small">{v}</text><line x1="80" x2="650" y1={255-v*.32} y2={255-v*.32} stroke="currentColor" opacity="0.15"/></g>)}
  {strengthVolumes.map((v,i)=><g key={i}><rect x={105+i*105} y={255-v*.32} width="55" height={v*.32} fill="currentColor" opacity={i===4?.7:.3}/><text x={132+i*105} y={255-v*.32-10} textAnchor="middle" className="chart-small">{v}</text><text x={132+i*105} y="279" textAnchor="middle" className="chart-small">Minute {i+1}</text></g>)}
  <text x="80" y="310" className="chart-small">Vorheriger Durchschnitt 100 · 600 / 100 = 6 · keine Trefferquote</text>
 </g>;
 const paths=scenario==='par2-paths';
 if(paths) return <g>
  <text x="80" y="25" className="chart-small strong">Gleiches OHLC · verschiedene Zwischenwege</text>
  {strengthPaths.map((points,row)=>{
   const py=(p:number)=>140+row*135-(p-49)*35;
   return <g key={row}><text x="80" y={55+row*135} className="chart-small">Weg {row===0?'A':'B'}</text><polyline points={points.map((p,i)=>`${180+i*85},${py(p)}`).join(' ')} stroke="currentColor" strokeWidth="2" fill="none"/>{points.map((p,i)=><g key={i}><circle cx={180+i*85} cy={py(p)} r="3" fill="currentColor"/><text x={180+i*85} y={py(p)-10} textAnchor="middle" className="chart-small">{p.toFixed(1).replace('.',',')}</text></g>)}</g>;
  })}
  <text x="80" y="303" className="chart-small">Meldungen 1–6 · Verbindung als Lesehilfe · Zeitabstände unbekannt</text>
  <text x="80" y="324" className="chart-small">Beide: O49,4 H51,5 L49,3 C51,4 · erfundene Daten</text>
 </g>;
 const bear=scenario==='par2-bear',late=scenario==='par2-late',gap=scenario==='par2-gap';
 const bars=late?lateBars:scenario==='par2-small'?smallBars:scenario==='par2-weak'?weakBars:bear?strengthBars.slice(0,6).map(mirrorStrength):strengthBars.slice(0,scenario==='par2-pause'?8:6);
 const min=bear?46.5:48.5,max=late?55.5:53.5;
 const y=(v:number)=>250-(v-min)/(max-min)*205;
 const boundary=late?53:50;
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigene abgeschlossene Minuten · Punkte</text>
  {[min+.5,boundary,max-.5].map((price,i)=><g key={i}><line x1="80" x2="620" y1={y(price)} y2={y(price)} stroke="currentColor" opacity="0.15"/><text x="65" y={y(price)+4} textAnchor="end" className="chart-small">{price}</text></g>)}
  <line x1="80" x2="620" y1={y(boundary)} y2={y(boundary)} stroke="currentColor" strokeDasharray="6 4"/>
  <text x="630" y={y(boundary)+4} className="chart-small">Grenze {boundary}</text>
  {gap?<rect x="287" y={y(51.2)} width="190" height={y(49.9)-y(51.2)} fill="currentColor" opacity="0.12"/>:null}
  {bars.map((bar,i)=>{const x=110+i*63,tone=bar.close>=bar.open?'bull':'bear';return <g key={i}>
   <line x1={x} x2={x} y1={y(bar.high)} y2={y(bar.low)} className={`candle-wick ${tone}`}/>
   <rect x={x-11} y={y(Math.max(bar.open,bar.close))} width="22" height={Math.abs(y(bar.open)-y(bar.close))} className={`candle-body ${tone}`}/>
   <text x={x} y="276" textAnchor="middle" className="chart-small">{i+1}</text>
  </g>})}
  <text x="80" y="302" className="chart-small">{gap?'H4 49,9 · L6 51,2 · Abstand 1,3 · Kerze 5 handelt dazwischen':bear?'Spiegelung: 100 minus Preis · O5 50,6 · C5 48,6':late?'Späte große Kerze · anschließend Rückfall · kein Vorwissen':'Zahlen = Minutenfolge · nur der jeweils beschriebene Ausschnitt'}</text>
  <text x="80" y="324" className="chart-small">Erfundene Daten · keine historische Leistungsstatistik</text>
 </g>;
}
