import type { ChartScenarioId } from '../content/types';
export const initialBase=[
 {open:68.2,high:69.2,low:68,close:68.8},
 {open:68.8,high:70,low:68.4,close:68.5},
 {open:68.5,high:69.9,low:68.4,close:69.4},
 {open:69.4,high:69.8,low:68.9,close:69.4},
];
export const initialBars=[...initialBase,
 {open:69.4,high:71.2,low:69.3,close:71.1},
 {open:71.1,high:72,low:71.1,close:71.9},
 {open:71.9,high:72.6,low:71.9,close:72.5},
 {open:72.5,high:72.55,low:72.1,close:72.2},
 {open:72.2,high:73.4,low:72.15,close:73.3},
];
export const initialPause={open:71.1,high:71.15,low:70.6,close:70.9};
export const initialResume={open:70.9,high:72.3,low:70.8,close:72.2};
export const initialFailure={open:70.9,high:71,low:69.4,close:69.8};
export const initialRange=[{open:70.9,high:71.2,low:70.5,close:70.8},{open:70.8,high:71.1,low:70.4,close:70.9}];
export const initialTrap=[
 {open:74,high:74.1,low:73,close:73.2},
 {open:73.2,high:73.3,low:72.1,close:72.3},
 {open:72.3,high:72.4,low:71,close:71.2},
 {open:71.2,high:71.4,low:70.6,close:70.8},
 {open:70.8,high:71.3,low:69.1,close:69.2},
 {open:69.4,high:70.4,low:68.6,close:69.5},
 {open:69.5,high:69.8,low:69.1,close:69.3},
 {open:69.3,high:69.4,low:68.3,close:68.4},
 {open:68.4,high:69.9,low:68.1,close:69.7},
 {open:69.7,high:70.5,low:69.6,close:70.3},
];
export const initialMirror=(bar:typeof initialBars[number])=>({open:140-bar.open,high:140-bar.low,low:140-bar.high,close:140-bar.close});
export function initialScenarioBars(scenario:ChartScenarioId){
 const start=initialBars.slice(0,5);
 if(scenario==='par3-inside')return [...start,initialPause];
 if(scenario==='par3-resume')return [...start,initialPause,initialResume];
 if(scenario==='par3-failure')return [...start,initialPause,initialFailure];
 if(scenario==='par3-range')return [...start,initialPause,...initialRange];
 if(scenario==='par3-bear')return initialBars.slice(0,7).map(initialMirror);
 if(scenario==='par3-trap')return initialTrap.slice(0,8);
 if(scenario==='par3-recovery')return initialTrap;
 return initialBars.slice(0,scenario==='par3-pause'?9:scenario==='par3-pressure'?7:5);
}
export function InitialMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=initialScenarioBars(scenario),trap=scenario==='par3-trap'||scenario==='par3-recovery';
 const min=scenario==='par3-bear'?67:68,max=trap?74.5:74;
 const y=(price:number)=>250-(price-min)/(max-min)*207;
 const x=(i:number)=>100+i*(trap?48:56);
 return <g>
  <text x="80" y="23" className="chart-small strong">Eigene abgeschlossene Minuten · Preise in Punkten</text>
  {[min,70,max-1].map((v,i)=><g key={i}><line x1="80" x2="620" y1={y(v)} y2={y(v)} stroke="currentColor" opacity="0.15"/><text x="65" y={y(v)+4} textAnchor="end" className="chart-small">{v}</text></g>)}
  <line x1="80" x2="620" y1={y(70)} y2={y(70)} stroke="currentColor" strokeDasharray="6 4"/>
  <text x="630" y={y(70)+4} className="chart-small">Bezug 70</text>
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}>
   <line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/>
   <rect x={x(i)-10} y={y(Math.max(b.open,b.close))} width="20" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/>
   <text x={x(i)} y="278" textAnchor="middle" className="chart-small">{i+1}</text>
  </g>})}
  {scenario==='par3-risk'?[[71.1,'Einstieg 71,1'],[69.2,'Stop 69,2']].map(([v,label])=><g key={label}><line x1="80" x2="620" y1={y(Number(v))} y2={y(Number(v))} stroke="currentColor" strokeDasharray="3 5"/><text x="630" y={y(Number(v))+4} className="chart-small">{label}</text></g>):null}
  {scenario==='par3-targets'?<>
   <line x1="80" x2="620" y1={y(72.8)} y2={y(72.8)} stroke="currentColor" strokeDasharray="3 5"/>
   <text x="400" y={y(72.8)+18} className="chart-small">Open–Close: 72,8</text>
   <line x1="80" x2="620" y1={y(73.1)} y2={y(73.1)} stroke="currentColor" strokeDasharray="3 5"/>
   <text x="630" y={y(73.1)-7} className="chart-small">Tief–Hoch: 73,1</text>
  </>:null}
  <text x="80" y="302" className="chart-small">{scenario==='par3-first'?'Stand nach Minute 5 · Folgekerzen unbekannt':scenario==='par3-inside'?'Stand nach Minute 6 · beide Richtungen offen':scenario==='par3-targets'?'Ziele als Messpläne · spätere Kerzen verborgen':scenario==='par3-risk'?'Plan nach Minute 5 · Kosten und Ausführung gesondert prüfen':trap?'Schattenversuch und neue spätere Informationen': 'Minutenfolge · Entscheidungen nur mit damals sichtbaren Informationen'}</text>
  <text x="80" y="324" className="chart-small">Erfundene Daten · Preisberührung bestätigt keine eigene Ausführung</text>
 </g>;
}
