import type {ChartScenarioId} from '../content/types';
type Bar={open:number;high:number;low:number;close:number};
export const testBars:Bar[]=[
 {open:98.5,high:99.8,low:98,close:99.4},
 {open:99.4,high:100,low:98.7,close:99},
 {open:99,high:99.7,low:98.2,close:99.3},
 {open:99.3,high:99.8,low:98.9,close:99.5},
 {open:99.5,high:101.2,low:99.4,close:101},
 {open:101,high:101.8,low:100.8,close:101.6},
 {open:101.6,high:101.7,low:100.2,close:100.6},
 {open:100.6,high:102,low:100.5,close:101.9},
];
export const failedTestBars:Bar[]=[...testBars.slice(0,5),
 {open:101,high:101.1,low:98.9,close:99.1},
 {open:99.1,high:99.4,low:98.4,close:98.7},
];
export const openTestBars:Bar[]=[...testBars.slice(0,5),{open:101,high:101.1,low:100.3,close:100.8}];
export const deepTestBars:Bar[]=[...testBars.slice(0,6),
 {open:101.6,high:101.7,low:99.7,close:100.3},
 {open:100.3,high:102.1,low:100.2,close:101.9},
];
export const stairsTestBars:Bar[]=[
 {open:98,high:99,low:97.8,close:98.8},
 {open:98.8,high:100,low:98.7,close:99.8},
 {open:99.8,high:99.9,low:98.5,close:99.1},
 {open:99.1,high:101.4,low:99,close:101.2},
 {open:101.2,high:102,low:101.1,close:101.8},
 {open:101.8,high:101.9,low:100.4,close:100.7},
 {open:100.7,high:100.9,low:99.5,close:99.9},
 {open:99.9,high:102,low:99.8,close:101.8},
 {open:101.8,high:103,low:101.7,close:102.8},
];
export const reversalTestBars:Bar[]=[
 {open:101.8,high:102,low:100.7,close:100.9},
 {open:100.9,high:101,low:99.3,close:99.5},
 {open:99.5,high:99.6,low:98,close:98.3},
 {open:98.3,high:99.1,low:98.2,close:98.9},
 {open:98.9,high:100,low:98.8,close:99.8},
 {open:99.8,high:99.9,low:98.5,close:98.7},
 {open:98.7,high:98.9,low:97.8,close:98.2},
 {open:98.2,high:100.6,low:98.1,close:100.4},
 {open:100.4,high:101.6,low:100.3,close:101.4},
];
export const doubleTestBars:Bar[]=reversalTestBars.map((b,i)=>i===6?{...b,low:98.2,close:98.4}:i===7?{...b,open:98.4,low:98.3}:b);
export const delayedTestBars:Bar[]=[...testBars.slice(0,6),
 {open:101.6,high:103,low:101.5,close:102.8},
 {open:102.8,high:102.9,low:101,close:101.2},
 {open:101.2,high:101.3,low:100.1,close:100.4},
 {open:100.4,high:102,low:100.3,close:101.8},
];
export const nearTestBars:Bar[]=[
 {open:98.8,high:100.8,low:98.7,close:100.6},
 {open:100.6,high:100.7,low:99.5,close:99.8},
 {open:99.8,high:101.2,low:99.7,close:101},
 {open:101,high:101.9,low:100.9,close:101.7},
 {open:101.7,high:101.8,low:100.7,close:101},
 {open:101,high:101.3,low:100.8,close:101.1},
 {open:101.1,high:102.4,low:101,close:102.2},
];
export const testMirror=(b:Bar):Bar=>({open:200-b.open,high:200-b.low,low:200-b.high,close:200-b.close});
export function testScenarioBars(scenario:ChartScenarioId):Bar[]{
 switch(scenario){
 case 'par5-top':return reversalTestBars.map(testMirror);
 case 'par5-failure':return failedTestBars;
 case 'par5-open':return openTestBars;
 case 'par5-deep':return deepTestBars;
 case 'par5-stairs':return stairsTestBars;
 case 'par5-reversal':return reversalTestBars;
 case 'par5-double':return doubleTestBars;
 case 'par5-delayed':return delayedTestBars;
 case 'par5-near':return nearTestBars;
 case 'par5-bear':return testBars.map(testMirror);
 case 'par5-start':return testBars.slice(0,5);
 case 'par5-test':case 'par5-levels':case 'par5-risk':return testBars.slice(0,7);
 default:return testBars;
 }
}
export function TestMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=testScenarioBars(scenario),risk=scenario==='par5-risk',near=scenario==='par5-near',reversal=scenario==='par5-reversal'||scenario==='par5-double',top=scenario==='par5-top';
 const levels:{price:number;label:string}[]=risk?[{price:100.1,label:'Stop 100,1'},{price:101.8,label:'Schwelle 101,8'},{price:103.5,label:'Ziel 103,5'}]:top?[{price:100,label:'Flaggentief 100'},{price:102,label:'Frühes Hoch 102'}]:near?[{price:102,label:'Großes Hoch 102'},{price:100.8,label:'Klein 100,8'}]:reversal?[{price:100,label:'Flaggenhoch 100'},{price:98,label:'Frühes Tief 98'}]:[{price:100,label:'Grenze 100'}];
 if(scenario==='par5-levels')levels.push({price:99.8,label:'Signalhoch 99,8'},{price:99.4,label:'Kerzentief 99,4'});
 if(scenario==='par5-stairs')levels.push({price:98.5,label:'Frühes Tief 98,5'},{price:99.5,label:'Testtief 99,5'});
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price))-.5),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price))+.5);
 const y=(v:number)=>250-(v-min)/(max-min)*207,x=(i:number)=>95+i*47;
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigener Testfall · abgeschlossene Minuten · Punkte</text>
  {[min,(min+max)/2,max].map(v=><g key={v}><line x1="80" x2="615" y1={y(v)} y2={y(v)} stroke="currentColor" opacity="0.12"/><text x="65" y={y(v)+4} textAnchor="end" className="chart-small">{v}</text></g>)}
  {scenario==='par5-test'||scenario==='par5-resume'?<rect x="80" y={y(100.3)} width="535" height={y(99.8)-y(100.3)} fill="currentColor" opacity="0.08"/>:null}
  {levels.map((l,i)=><g key={l.label}><line x1="80" x2="615" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" strokeDasharray="5 4"/>
   <text x="625" y={scenario==='par5-levels'?y(100)+i*18:y(l.price)+4} className="chart-small">{l.label}</text>
  </g>)}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}>
   <line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/>
   <rect x={x(i)-10} y={y(Math.max(b.open,b.close))} width="20" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/>
   <text x={x(i)} y="278" textAnchor="middle" className="chart-small">{i+1}</text>
  </g>})}
  {reversal?<><line x1={x(0)} y1={y(102)} x2={x(4)} y2={y(98)} stroke="currentColor" opacity="0.5" strokeDasharray="2 5"/><line x1={x(2)} y1={y(98)} x2={x(8)} y2={y(100.8)} stroke="currentColor" opacity="0.4" strokeDasharray="6 6"/></>:null}
  <text x="80" y="302" className="chart-small">{scenario==='par5-start'?'Stand nach Minute 5 · Folgeverlauf verborgen':risk?'Ziel nur geplant · 1 Euro je Punkt und Einheit':scenario==='par5-open'?'Stand nach Minute 6 · Ausgang offen':scenario==='par5-levels'?'Rechts: Rangegrenze / Signalhoch / Ausbruchskerzentief':reversal?'Gepunktet: alte fallende Linie · gestrichelt: verlängerte Pause':'Zahlen = Minutenfolge · spätere Information erst später verwenden'}</text>
  <text x="80" y="324" className="chart-small">Erfundene Kurse · Preisverlauf allein bestätigt keine eigene Orderausführung</text>
 </g>;
}
