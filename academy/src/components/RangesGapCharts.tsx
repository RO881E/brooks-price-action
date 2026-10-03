import type {ChartScenarioId} from '../content/types';
type Bar={open:number;high:number;low:number;close:number};
export const dailyGapBars:Bar[]=[
 {open:97,high:100,low:96,close:99},
 {open:102,high:104,low:101,close:103.5},
 {open:104,high:106,low:103,close:105.5},
];
export const dailyGapFailure:Bar[]=[...dailyGapBars.slice(0,2),{open:103.3,high:103.8,low:99,close:99.4}];
export const dailyGapOverlap:Bar[]=[dailyGapBars[0],{open:101,high:104,low:99.5,close:103}];
export const islandGapBars:Bar[]=[...dailyGapBars.slice(0,2),{open:103.7,high:105,low:102,close:104.4},{open:100,high:100.5,low:98.5,close:99}];
export const microGapBars:Bar[]=[
 {open:96.5,high:100,low:96,close:99.8},
 {open:99.8,high:103,low:99.7,close:102.8},
 {open:102.8,high:104,low:101,close:103.5},
];
export const gapTestBar:Bar={open:103.5,high:103.6,low:100.6,close:102};
export const negativeGapTestBar:Bar={open:103.5,high:103.6,low:99.8,close:101.5};
export const zeroGapTestBar:Bar={open:103.5,high:103.6,low:100,close:101.7};
export const openCloseGapBars:Bar[]=[
 {open:99,high:100,low:98.8,close:99.8},
 {open:99.9,high:100.8,low:99.6,close:100.6},
 {open:100.7,high:101.6,low:100.4,close:101.4},
];
export const averageGapBars:Bar[]=[
 {open:101,high:101.2,low:99.8,close:100},
 {open:100,high:100.1,low:97.8,close:98},
 {open:98,high:98.1,low:95.8,close:96},
 {open:96,high:97.2,low:95.9,close:97},
 {open:97,high:99.2,low:97,close:99},
 {open:100.5,high:101.4,low:100.4,close:101},
 {open:101,high:101.2,low:98.6,close:98.9},
];
export const simpleAverage=(bars:Bar[],index:number,period=3)=>index<period-1?null:bars.slice(index-period+1,index+1).reduce((n,b)=>n+b.close,0)/period;
export const gapMidpoint=(a:number,b:number)=>(a+b)/2;
export const gapProjection=(start:number,midpoint:number)=>2*midpoint-start;
export const gapMirror=(b:Bar):Bar=>({open:200-b.open,high:200-b.low,low:200-b.high,close:200-b.close});
export function gapScenarioBars(s:ChartScenarioId):Bar[]{
 switch(s){
 case 'par6-classic':return dailyGapBars.slice(0,2);
 case 'par6-classic-bear':return dailyGapBars.slice(0,2).map(gapMirror);
 case 'par6-classic-follow':return dailyGapBars;
 case 'par6-overlap':return dailyGapOverlap;
 case 'par6-fill':return dailyGapFailure;
 case 'par6-island':return islandGapBars;
 case 'par6-session':return [{open:99,high:100,low:98.8,close:99.5},{open:102,high:102.5,low:101,close:102.2}];
 case 'par6-micro-start':return microGapBars.slice(0,2);
 case 'par6-retest':return [...microGapBars,gapTestBar];
 case 'par6-negative':return [...microGapBars,negativeGapTestBar];
 case 'par6-zero':return [...microGapBars,zeroGapTestBar];
 case 'par6-measure-bear':return microGapBars.map(gapMirror);
 case 'par6-average':return averageGapBars.slice(0,6);
 case 'par6-average-follow':return averageGapBars;
 case 'par6-open-close':return openCloseGapBars;
 default:return microGapBars;
 }
}
const fmt=(v:number)=>Number(v.toFixed(2)).toString().replace('.',',');
export function GapMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=gapScenarioBars(scenario),day=['par6-classic','par6-classic-bear','par6-classic-follow','par6-overlap','par6-fill','par6-island'].includes(scenario),avg=scenario.startsWith('par6-average'),session=scenario==='par6-session',bear=scenario==='par6-classic-bear'||scenario==='par6-measure-bear',oc=scenario==='par6-open-close',risk=scenario==='par6-risk';
 const spanGap=day&&!['par6-overlap'].includes(scenario),micro=!day&&!session&&!avg&&!oc&&scenario!=='par6-micro-start';
 const revised=['par6-retest','par6-negative','par6-zero'].includes(scenario);
 const testEdge=scenario==='par6-retest'?100.6:scenario==='par6-negative'?99.8:scenario==='par6-zero'?100:bear?99:101;
 const bottom=revised?Math.min(100,testEdge):bear?99:100,top=revised?Math.max(100,testEdge):bear?100:101;
 const levels:{price:number;label:string}[]=oc||avg||scenario==='par6-micro-start'?[]:[{price:100,label:day?'Alter Rand 100':session?'Letzte Minute H100':'Ausbruchsbezug 100'}];
 if(spanGap||micro)levels.push({price:revised?testEdge:bear?99:101,label:revised?`Test L4=${fmt(testEdge)}`:bear?'Neuer Rand 99':'Erster Rand 101'});
 let projection:number|null=null,midpoint:number|null=null;
 if(['par6-measure','par6-measure-bear','par6-retest','par6-negative','par6-zero'].includes(scenario)){
  const edge=scenario==='par6-retest'?100.6:scenario==='par6-negative'?99.8:scenario==='par6-zero'?100:bear?99:101;
  midpoint=gapMidpoint(100,edge);projection=gapProjection(bear?104:96,midpoint);
  levels.push({price:projection,label:`Projektion ${fmt(projection)}`});
 }
 if(scenario==='par6-island')levels.push({price:102,label:'Insel L3=102'},{price:100.5,label:'Neues H4=100,5'});
 if(session)levels.push({price:103,label:'Ganzes Vortagshoch 103'});
 if(risk)levels.push({price:99.7,label:'Stop 99,7'},{price:105,label:'Ziel 105 geplant'});
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price))-.5),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price))+.5);
 const y=(v:number)=>250-(v-min)/(max-min)*207,x=(i:number)=>95+i*60;
 const labelPositions=new Map<string,number>();let previous=25;
 for(const l of [...levels].sort((a,b)=>b.price-a.price)){const pos=Math.max(y(l.price)+4,previous+18);labelPositions.set(l.label,pos);previous=pos;}
 return <g>
  <text x="80" y="24" className="chart-small strong">{day?'Eigene Tageskerzen · vollständige Sitzungsspannen':session?'Letzte Minute / erste neue Minute · gleicher Sitzungsbezug':'Eigene abgeschlossene Minuten · Preise in Punkten'}</text>
  {[min,(min+max)/2,max].map(v=><g key={v}><line x1="80" x2="610" y1={y(v)} y2={y(v)} stroke="currentColor" opacity="0.12"/><text x="65" y={y(v)+4} textAnchor="end" className="chart-small">{fmt(v)}</text></g>)}
  {(spanGap||micro||session)?<rect x="80" y={y(top)} width="530" height={y(bottom)-y(top)} fill="currentColor" opacity="0.08"/>:null}
  {levels.map(l=>{const labelY=labelPositions.get(l.label)!;return <g key={l.label}>
   <line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" strokeDasharray="5 4"/>
   <line x1="610" x2="616" y1={y(l.price)} y2={labelY-4} stroke="currentColor" opacity="0.5"/>
   <text x="620" y={labelY} className="chart-small">{l.label}</text>
  </g>})}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}>
   <line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/>
   <rect x={x(i)-10} y={y(Math.max(b.open,b.close))} width="20" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/>
   <text x={x(i)} y="278" textAnchor="middle" className="chart-small">{session?i===0?'Vorher':'Neu':i+1}</text>
  </g>})}
  {avg?<><polyline points={bars.map((_,i)=>{const v=simpleAverage(bars,i);return v===null?'':`${x(i)},${y(v)}`;}).filter(Boolean).join(' ')} fill="none" stroke="currentColor" strokeWidth="2"/><text x="620" y="90" className="chart-small">SMA 3 · Schlüsse</text><text x="620" y="109" className="chart-small">Minute 6: SMA 99</text><text x="620" y="128" className="chart-small">L6=100,4</text></>:null}
  {midpoint!==null?<text x="80" y="302" className="chart-small">{`Mitte ${fmt(midpoint)} · Beginn ${bear?'104':'96'} · Ziel ${fmt(projection!)} nur projiziert`}</text>:<text x="80" y="302" className="chart-small">{scenario==='par6-micro-start'?'Nur bis Minute 2 · Rand der nächsten Kerze noch unbekannt':oc?'O2−C1=0,1 · O3−C2=0,1 · ganze Spannen überlappen':avg?'SMA erst aus abgeschlossenen Schlüssen berechnet':risk?'Modell: Einstieg 101 · Stop 99,7 · Ziel 105 · 1 Euro/Punkt/Einheit':session?'Minutenabstand ist kein Beleg einer Lücke über dem ganzen Vortag':day?'Zahlen = Tage · nur den jeweils bekannten Ausschnitt verwenden':'Schattierung: erster Abstand H1=100 zu L3=101 · kein ungehandeltes Loch'}</text>}
  <text x="80" y="324" className="chart-small">Erfundene Daten · Projektionen und Preise bestätigen keine eigene Orderausführung</text>
 </g>;
}
