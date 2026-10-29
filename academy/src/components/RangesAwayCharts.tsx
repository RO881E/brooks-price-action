import type { ChartScenarioId } from '../content/types';
export type AwayBar={open:number;high:number;low:number;close:number};
export const awayTrend:AwayBar[]=Array.from({length:20},(_,i)=>({open:104+i,high:105+i,low:103.8+i,close:104.8+i}));
export const awayMain:AwayBar[]=[...awayTrend,
 {open:123.8,high:124,low:114,close:116},
 {open:116,high:119,low:115.8,close:118.7},
 {open:118.7,high:121.5,low:118.5,close:121.3},
 {open:121.3,high:123.5,low:121.1,close:123},
 {open:123,high:124.5,low:122.8,close:124.2},
];
export const awayNear:AwayBar[]=[...awayTrend,{open:123.8,high:124,low:115.4,close:118}];
export const awayBoundary:AwayBar[]=[{open:102,high:111,low:101,close:110.5}];
export const awayUntriggered:AwayBar[]=[...awayMain.slice(0,22),{open:118.7,high:119,low:111,close:112}];
export const awayReversal:AwayBar[]=[...awayTrend,{open:123.8,high:124,low:108,close:109},{open:109,high:109.5,low:104,close:105}];
export const awayMirror=(b:AwayBar):AwayBar=>({open:200-b.open,high:200-b.low,low:200-b.high,close:200-b.close});
export const awayBear:AwayBar[]=[...awayTrend.map(awayMirror),
 {open:76.2,high:77.4,low:76,close:77.2},
 {open:77.2,high:78.2,low:77,close:78},
 {open:78,high:79.1,low:77.8,close:78.9},
 {open:78.9,high:80,low:78.7,close:79.8},
 {open:79.8,high:81.2,low:79.6,close:81},
 {open:81,high:84.4,low:80.8,close:84.2},
 {open:84.2,high:84.3,low:82.7,close:83},
 {open:83,high:83.8,low:82.3,close:83.6},
 {open:83.6,high:84.5,low:83.4,close:84.2},
 {open:84.2,high:84.3,low:81.8,close:82},
 {open:82,high:82,low:77,close:77.5},
 {open:77.5,high:84.4,low:77.3,close:84},
];
export const awayClimax:AwayBar[]=[...awayTrend.slice(0,17),
 {open:120.8,high:127,low:120.6,close:126.8},
 {open:126.8,high:135,low:126.5,close:134.7},
 {open:134.7,high:145,low:134.5,close:144.8},
 {open:144.8,high:145,low:131,close:132},
 {open:132,high:132,low:116,close:117},
 {open:117,high:117,low:105,close:106},
 {open:106,high:112,low:105.5,close:111},
 {open:111,high:111.2,low:104.8,close:105},
 {open:105,high:111.8,low:104.9,close:111.5},
 {open:111.5,high:112.1,low:102,close:103},
 {open:103,high:104,low:99,close:100},
];
export function awayEma(bars:AwayBar[],period=20,warmup=40):number[]{
 if(!Number.isInteger(period)||period<1||!Number.isInteger(warmup)||warmup<1)throw new Error('Invalid EMA configuration');
 const closes=[...Array<number>(warmup).fill(100),...bars.map(b=>b.close)];let v=closes[0];
 return closes.map((c,i)=>{v=i===0?c:v+2/(period+1)*(c-v);return v;}).slice(warmup);
}
export function awaySide(b:AwayBar,ema:number):'above'|'below'|'contact'{return b.low>ema?'above':b.high<ema?'below':'contact';}
export function awayRuns(bars:AwayBar[],ema=awayEma(bars)):number[]{
 if(ema.length!==bars.length)throw new Error('EMA length mismatch');let previous='contact',count=0;
 return bars.map((b,i)=>{const side=awaySide(b,ema[i]);count=side==='contact'?0:side===previous?count+1:1;previous=side;return count;});
}
export function awayAggregate(bars:AwayBar[],size:number):AwayBar[]{
 if(!Number.isInteger(size)||size<1)throw new Error('Invalid aggregation size');
 const out:AwayBar[]=[];for(let i=0;i+size<=bars.length;i+=size){const g=bars.slice(i,i+size);out.push({open:g[0].open,high:Math.max(...g.map(b=>b.high)),low:Math.min(...g.map(b=>b.low)),close:g.at(-1)!.close});}return out;
}
export const awayMaxUnits=(budget:number,cost:number,entry:number,stop:number)=>{const cents=Math.round(Math.abs(entry-stop)*100);return cents>0&&budget>=cost?Math.floor(Math.round((budget-cost)*100)/cents):0;};
export function awayScenarioBars(s:ChartScenarioId):AwayBar[]{
 switch(s){
 case 'par13-warmup':return awayMain.slice(0,3);
 case 'par13-nineteen':return awayMain.slice(0,19);
 case 'par13-twenty':return awayTrend;
 case 'par13-near':return awayNear;
 case 'par13-boundary':return awayBoundary;
 case 'par13-contact':return awayMain.slice(0,21);
 case 'par13-signal':case 'par13-risk':return awayMain.slice(0,22);
 case 'par13-untriggered':return awayUntriggered;
 case 'par13-near-extreme':return awayMain.slice(0,24);
 case 'par13-extreme':case 'par13-partial':return awayMain;
 case 'par13-reversal':return awayReversal;
 case 'par13-bear-away':return awayBear.slice(0,20);
 case 'par13-bear-contact':return awayBear.slice(0,26);
 case 'par13-bear-first':return awayBear.slice(0,28);
 case 'par13-bear-second':return awayBear.slice(0,30);
 case 'par13-bear-test':return awayBear.slice(0,31);
 case 'par13-bear-double':return awayBear;
 case 'par13-climax':return awayClimax.slice(0,20);
 case 'par13-climax-contact':return awayClimax.slice(0,23);
 case 'par13-climax-second':return awayClimax.slice(0,26);
 case 'par13-climax-fail':return awayClimax;
 case 'par13-opposite-gap':return awayClimax.slice(0,24);
 case 'par13-higher':return awayAggregate(awayTrend,3);
 default:throw new Error(`Unknown away scenario ${s}`);
 }
}
const fmt=(p:number)=>Number(p.toFixed(3)).toString().replace('.',',');
export function AwayMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=awayScenarioBars(scenario),bear=scenario.startsWith('par13-bear-'),climax=scenario.startsWith('par13-climax')||scenario==='par13-opposite-gap',higher=scenario==='par13-higher';
 const ema=awayEma(bars),runs=awayRuns(bars,ema),levels:{price:number;label:string}[]=[];
 const withExtreme=['par13-contact','par13-signal','par13-near-extreme','par13-extreme','par13-risk','par13-partial'].includes(scenario)||bear||climax;
 if(withExtreme)levels.push({price:bear?76:climax?145:124,label:bear?'Altes Tief 76':climax?'Altes Hoch 145':'Altes Hoch 124'});
 if(['par13-signal','par13-untriggered','par13-risk','par13-partial'].includes(scenario))levels.push({price:119.1,label:'Kaufplan 119,1'});
 if(['par13-risk','par13-partial'].includes(scenario))levels.push({price:113.9,label:'Schutzplan 113,9'});
 if(scenario==='par13-bear-first')levels.push({price:82.6,label:'Erster Shortplan 82,6'});
 if(scenario==='par13-bear-second')levels.push({price:83.3,label:'Zweiter Shortplan 83,3'});
 if(scenario==='par13-bear-double')levels.push({price:84.5,label:'Voriger Hochtest 84,5'});
 if(scenario==='par13-climax-second'||scenario==='par13-climax-fail')levels.push({price:111.9,label:'Neuer Kaufplan 111,9'});
 if(scenario==='par13-boundary')levels.push({price:101,label:'Tief = EMA: 101'});
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...ema,...levels.map(l=>l.price))-1),max=Math.ceil(Math.max(...bars.map(b=>b.high),...ema,...levels.map(l=>l.price))+1);
 const y=(p:number)=>249-(p-min)/(max-min)*204,x=(i:number)=>96+i*Math.min(48,470/Math.max(1,bars.length-1)),width=bars.length>24?8:bars.length>16?11:16;
 let prev=78;const labelY=new Map<string,number>();for(const l of [...levels].sort((a,b)=>b.price-a.price)){prev=Math.max(prev+19,y(l.price)+4);labelY.set(l.label,prev);}
 const notes:Partial<Record<ChartScenarioId,string>>={
 'par13-warmup':'Vierzig vorherige Schlüsse100 · sichtbarer Beginn O104 · nur3 Abschlüsse',
 'par13-nineteen':'Stand19 · neunzehn ganze Kerzen über ihrem EMA20 · nächste noch offen',
 'par13-twenty':'Stand20 · zwanzig ganze Kerzen darüber · Hoch20 124 · Ausgang offen',
 'par13-near':'Alternative21 · Tief115,4 > EMA115,349 · weiterhin kontaktfrei',
 'par13-boundary':'Separater Rechenfall · C110,5 → EMA101 · Tief101 gilt als Kontakt',
 'par13-contact':'Stand21 · Tief114 / EMA115,159 / Schluss116 · Folge beendet',
 'par13-signal':'Stand22 · Reaktion H119 / C118,7 · Kaufplan119,1 noch offen',
 'par13-untriggered':'Gleiche Minuten1–22 · Hoch23 119 erreicht Kaufplan119,1 nicht',
 'par13-near-extreme':'Stand24 · Hoch123,5 bleibt0,5 unter altem Hoch124',
 'par13-extreme':'Stand25 · erst jetzt Hoch124,5 über altem Extrem124',
 'par13-reversal':'Gleiche ersten20 Minuten · Gegenfall mit Tiefs108 und104',
 'par13-bear-away':'200 minus Preis · zwanzig ganze Kerzen unter EMA20 · Tief76',
 'par13-bear-contact':'Sechs grüne Gegenkerzen21–26 · erster Kontakt in26',
 'par13-bear-first':'Stand28 · erste Schwelle82,6 erreicht · Schluss83,6 bleibt hoch',
 'par13-bear-second':'Stand30 · zweite Schwelle83,3 erreicht · Schluss82',
 'par13-bear-test':'Stand31 · höheres Testtief77 statt neuem Tief unter76',
 'par13-bear-double':'Späterer Stand32 · erneuter Hochtest84,4 nahe früheren84,5',
 'par13-climax':'Eigener Fall · gleiche ersten17 Minuten · beschleunigter Schluss bis145',
 'par13-climax-contact':'Stand23 · drei rote Gegenkerzen · erster EMA-Kontakt in22',
 'par13-climax-second':'Stand26 · erneutes Tief104,8 · grüne Reaktion bis111,8',
 'par13-climax-fail':'Stand28 · Hoch27 112,1 / Schluss103 · weiterer Rückgang bis99',
 'par13-opposite-gap':'Stand24 · ganze Kerze unter EMA nach starkem Gegenrückgang',
 'par13-risk':'Modell · 5 Einheiten · Verlust28 / Gewinn22,5 Euro einschließlich Kosten2',
 'par13-partial':'Modell · 2 am Ziel: +9,8 brutto · Rest3 bis Stop: −15,6 brutto',
 'par13-higher':'StandMinute20 · nur Gruppen1–3 bis16–18 · sechs abgeschlossene Kerzen',
 };
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigene Kontaktfolgen · EMA20 aus bekannten Schlüssen · Preise in Punkten</text>
  {[min,(min+max)/2,max].map(p=><g key={p}><line x1="80" x2="610" y1={y(p)} y2={y(p)} stroke="currentColor" opacity="0.1"/><text x="67" y={y(p)+4} textAnchor="end" className="chart-small">{fmt(p)}</text></g>)}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" opacity="0.55" strokeDasharray="5 4"/><line x1="610" x2="616" y1={y(l.price)} y2={labelY.get(l.label)!-4} stroke="currentColor" opacity="0.4"/><text x="620" y={labelY.get(l.label)} className="chart-small">{l.label}</text></g>)}
  <polyline points={ema.map((v,i)=>`${x(i)},${y(v)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2"/>
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-width/2} y={y(Math.max(b.open,b.close))} width={width} height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/>{bars.length<=24||(i%2===0&&i<bars.length-2)||i===bars.length-1?<text x={x(i)} y="277" textAnchor="middle" className="chart-small">{higher?`${i*3+1}–${i*3+3}`:i+1}</text>:null}</g>})}
  <text x="620" y="45" className="chart-small">EMA20: {fmt(ema.at(-1)!)}</text>
  <text x="620" y="67" className="chart-small">Aktuelle Folge: {runs.at(-1)}</text>
  <text x="80" y="302" className="chart-small">{notes[scenario]}</text>
  <text x="80" y="324" className="chart-small">Erfundene Daten · Kontakt beendet die Folge · keine historische Trefferquote</text>
 </g>;
}
