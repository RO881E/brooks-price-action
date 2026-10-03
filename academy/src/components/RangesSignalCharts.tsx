import type {ChartScenarioId} from '../content/types';
export type SignalBar={open:number;high:number;low:number;close:number};
export const signalBars:SignalBar[]=[
 {open:110,high:110.2,low:105.8,close:106},
 {open:106,high:108,low:105,close:107.5},
 {open:107.5,high:108.2,low:104,close:104.5},
 {open:104.5,high:105.5,low:102.5,close:105},
 {open:105,high:105.7,low:101.8,close:102},
 {open:102,high:103,low:100,close:102.8},
 {open:102.8,high:103.2,low:98.5,close:99},
 {open:99,high:102.5,low:98.8,close:102},
 {open:102,high:104.2,low:101.7,close:104},
 {open:104,high:105.7,low:103.8,close:105.3},
 {open:105.3,high:108,low:105,close:107.8},
];
export const signalFailureBars:SignalBar[]=[...signalBars.slice(0,10),
 {open:105.3,high:105.4,low:103,close:103.2},
 {open:103.2,high:103.4,low:100,close:100.5},
];
export const signalThroughBars:SignalBar[]=[...signalBars,{open:107.8,high:110.3,low:107.5,close:110}];
export const signalTurnBars:SignalBar[]=[...signalBars,
 {open:107.8,high:107.9,low:105.5,close:105.8},
 {open:105.8,high:106.6,low:103.8,close:104},
];
export const untriggeredSignalBars:SignalBar[]=[...signalBars.slice(0,2),{...signalBars[2],high:108}];
export const signalReferences=[{name:'A',index:1,high:108,low:105,entry:108.1},{name:'B',index:3,high:105.5,low:102.5,entry:105.6},{name:'C',index:5,high:103,low:100,entry:103.1}];
export const signalMirror=(b:SignalBar):SignalBar=>({open:200-b.open,high:200-b.low,low:200-b.high,close:200-b.close});
export function signalScenarioBars(s:ChartScenarioId):SignalBar[]{
 switch(s){
 case 'par9-signal':return signalBars.slice(0,2);
 case 'par9-trigger':return signalBars.slice(0,3);
 case 'par9-untriggered':return untriggeredSignalBars;
 case 'par9-history':return signalBars.slice(0,7);
 case 'par9-first':return signalBars.slice(0,9);
 case 'par9-pause':return signalBars.slice(0,10);
 case 'par9-contact':return signalBars;
 case 'par9-failure':return signalFailureBars;
 case 'par9-through':return signalThroughBars;
 case 'par9-turn':return signalTurnBars;
 case 'par9-mirror':return signalBars.map(signalMirror);
 case 'par9-averaging':return signalBars.slice(0,7);
 default:return signalBars.slice(0,8);
 }
}
const fmt=(v:number)=>Number(v.toFixed(2)).toString().replace('.',',');
export function SignalMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=signalScenarioBars(scenario),mirror=scenario==='par9-mirror',early=scenario==='par9-signal'||scenario==='par9-trigger'||scenario==='par9-untriggered';
 const refs=signalReferences.filter(r=>r.index<bars.length);
 const levels=refs.map(r=>({price:mirror?200-r.high:r.high,label:`Signal ${r.name} ${fmt(mirror?200-r.high:r.high)}`}));
 if(early)levels.push({price:108.1,label:'Kaufplan A 108,1'});
 if(scenario==='par9-contact')levels.push({price:108.1,label:'Früherer Kaufplan 108,1'});
 if(scenario==='par9-risk')levels.push({price:98.4,label:'Modellstop 98,4'},{price:102,label:'Modellkauf 102'});
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price))-.5),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price))+.5);
 const y=(v:number)=>249-(v-min)/(max-min)*204,x=(i:number)=>96+i*Math.min(48,460/Math.max(1,bars.length-1));
 const labels=new Map<string,number>();let last=27;
 for(const l of [...levels].sort((a,b)=>b.price-a.price)){const pos=Math.max(y(l.price)+4,last+19);labels.set(l.label,pos);last=pos;}
 const notes:Partial<Record<ChartScenarioId,string>>={
 'par9-signal':'Stand: Minute 2 abgeschlossen · keine späteren Preise sichtbar',
 'par9-trigger':'H3 108,2 erreicht Kaufplan · C3 104,5 unter Signaltief 105',
 'par9-untriggered':'H3 108 verfehlt Kaufplan 108,1 · keine daraus eröffnete Position',
 'par9-history':'Drei Versuche · jeweils ausgelöst, dann Schluss unter Signaltief',
 'par9-recovery':'Stand: Minute 8 · C 103 / B 105,5 / A 108 noch nicht erreicht',
 'par9-levels':'Stand: Minute 8 · Bezüge bekannt, spätere Wirkung noch offen',
 'par9-first':'Minute 9 über C 103 · höher liegende Bezüge noch ungetestet',
 'par9-pause':'H10 105,7 über B · C10 105,3 darunter · Anschluss noch offen',
 'par9-contact':'H11 108 erreicht Signal A · früherer Kaufplan 108,1 verfehlt',
 'par9-failure':'Gegenfall nach Minute 10: B erreicht, A bis Minute 12 verfehlt',
 'par9-through':'Gleicher Anfang bis Minute 11 · danach H12 110,3 / C12 110',
 'par9-turn':'Gleicher Anfang bis Minute 11 · danach C12 105,8 / C13 104',
 'par9-mirror':'200 minus Preis · Signaltiefs C 97 / B 94,5 / A 92',
 'par9-risk':'Modell: 5 Einheiten · 3,6 Punkte Stop · 2 Euro Kosten · 20 Euro Risiko',
 'par9-averaging':'Hypothese: Käufe 108,1 + 103,1 · Mitte 105,6 · Tief 98,5',
 };
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigene Signalfälle · abgeschlossene Minuten · Preise in Punkten</text>
  {[min,(min+max)/2,max].map(v=><g key={v}><line x1="80" x2="610" y1={y(v)} y2={y(v)} stroke="currentColor" opacity="0.1"/><text x="67" y={y(v)+4} textAnchor="end" className="chart-small">{fmt(v)}</text></g>)}
  {scenario==='par9-contact'?<rect x="80" y={y(108.2)} width="530" height={y(107.8)-y(108.2)} fill="currentColor" opacity="0.07"/>:null}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" strokeDasharray="5 4" opacity="0.7"/><line x1="610" x2="616" y1={y(l.price)} y2={labels.get(l.label)!-4} stroke="currentColor" opacity="0.45"/><text x="620" y={labels.get(l.label)} className="chart-small">{l.label}</text></g>)}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-8} y={y(Math.max(b.open,b.close))} width="16" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/><text x={x(i)} y="277" textAnchor="middle" className="chart-small">{i+1}</text>{refs.some(r=>r.index===i)?<text x={x(i)} y={Math.max(40,y(b.high)-9)} textAnchor="middle" className="chart-small strong">{refs.find(r=>r.index===i)!.name}</text>:null}</g>})}
  <text x="80" y="302" className="chart-small">{notes[scenario]}</text>
  <text x="80" y="324" className="chart-small">Erfundene Daten · Motive unbekannt · Preisbesuch ist keine bestätigte eigene Füllung</text>
 </g>;
}
