import type {ChartScenarioId} from '../content/types';
export const timingDuration=5*60*1000;
export const timingZone='America/New_York';
export type TimingBar={start:number;open:number;high:number;low:number;close:number};
type Prices=Omit<TimingBar,'start'>;
const timed=(prices:Prices[],start:string):TimingBar[]=>prices.map((b,i)=>({...b,start:Date.parse(start)+i*timingDuration}));
export const timingMorning=timed([
 {open:100,high:102,low:99.8,close:101.8},{open:101.8,high:104,low:101.6,close:103.8},{open:103.8,high:106,low:103.6,close:105.8},
 {open:105.8,high:106,low:102,close:102.4},{open:102.4,high:106.5,low:102.2,close:106.3},{open:106.3,high:108,low:106.1,close:107.8},{open:107.8,high:109.5,low:107.6,close:109.3},
],'2026-02-04T14:45:00Z');
export const timingMorningReversal=timed([...timingMorning.slice(0,4),{open:102.4,high:102.6,low:99,close:99.3},{open:99.3,high:99.5,low:97,close:97.3}],'2026-02-04T14:45:00Z');
export const timingMorningQuiet=timed([...timingMorning.slice(0,3),{open:105.8,high:106,low:105.5,close:105.9},{open:105.9,high:106.1,low:105.4,close:105.8}],'2026-02-04T14:45:00Z');
export const timingOpeningRange=timed([
 {open:101,high:104,low:99,close:101.5},{open:101.5,high:104.5,low:98.5,close:101},{open:101,high:104.2,low:99,close:101.2},
 {open:101.2,high:102,low:97.5,close:98},{open:98,high:105,low:97.8,close:104.6},{open:104.6,high:104.8,low:99,close:99.4},
],'2026-02-04T14:45:00Z');
export const timingAfternoon=timed([
 {open:108,high:109,low:107.8,close:108.8},{open:108.8,high:110,low:108.6,close:109.8},{open:109.8,high:111,low:109.6,close:110.8},
 {open:110.8,high:111.2,low:108.5,close:110},{open:110,high:111.5,low:109.9,close:111.2},{open:111.2,high:111.3,low:108.9,close:110.4},
 {open:110.4,high:110.5,low:104.8,close:105.2},{open:105.2,high:107.8,low:105,close:107.5},{open:107.5,high:108.1,low:105.3,close:106},
 {open:106,high:106.2,low:104.6,close:105},{open:105,high:106,low:104.8,close:105.8},{open:105.8,high:109,low:105.6,close:108.8},
 {open:108.8,high:111.4,low:108.6,close:111.2},{open:111.2,high:112,low:111,close:111.8},
],'2026-02-04T18:55:00Z');
export const timingAfternoonFailure=timed([...timingAfternoon.slice(0,7),{open:105.2,high:106,low:102,close:102.5},{open:102.5,high:103,low:101,close:101.4}],'2026-02-04T18:55:00Z');
export const timingMirror=(b:TimingBar):TimingBar=>({...b,open:220-b.open,high:220-b.low,low:220-b.high,close:220-b.close});
const upper:Prices[]=Array.from({length:24},(_,i)=>{const closes=[105.8,106.6,105.6,106.2],close=closes[i%4],open=i===0?105.2:closes[(i-1)%4];return {open,high:Math.max(open,close)+.7,low:Math.min(open,close)-.7,close};});
const middle:Prices[]=[];let preceding=102.5;for(const close of [102.1,101.7,102.3,101.9,102.2,101.6,102,101.7,102.1,101.9,101.8]){middle.push({open:preceding,high:Math.max(preceding,close)+.3,low:Math.min(preceding,close)-.3,close});preceding=close;}
export const timingRange=timed([...upper,
 {open:106.2,high:106.3,low:95.5,close:96},{open:96,high:98,low:95.6,close:97.7},{open:97.7,high:98.3,low:96.2,close:96.6},
 {open:96.6,high:96.8,low:95.2,close:95.6},{open:95.6,high:96.5,low:95.4,close:96.2},{open:96.2,high:100.5,low:96,close:100.1},
 {open:100.1,high:103,low:100,close:102.5},...middle,
],'2026-02-04T17:30:00Z');
// Independently given completed context; never inferred from the afternoon excerpt ending 15:05.
export const timingPreviousSession={high:112,low:104.5,close:111.6};
export const timingNext=timed([{open:111.4,high:112.4,low:111,close:112.2},{open:112.2,high:112.3,low:109,close:109.4},{open:109.4,high:110.3,low:109.2,close:110},{open:110,high:110.1,low:107.5,close:108}],'2026-02-05T14:30:00Z');
export const timingPriorLine={start:Date.parse('2026-02-04T18:15:00Z'),price:106.2,secondStart:Date.parse('2026-02-04T18:55:00Z'),secondPrice:107.8};
export const timingLine=(start:number)=>timingPriorLine.price+(start-timingPriorLine.start)/60000*.04;
export const timingClock=(epoch:number,zone=timingZone)=>new Intl.DateTimeFormat('en-GB',{timeZone:zone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(epoch);
export const timingKnown=(bars:TimingBar[],asOf:number)=>bars.filter(b=>b.start+timingDuration<=asOf);
export const timingContains=(bar:TimingBar,event:number)=>bar.start<=event&&event<bar.start+timingDuration;
export function timingEma(bars:TimingBar[],seed=108):number[]{let previous=seed;return bars.map(b=>{previous+=2/21*(b.close-previous);return previous;});}
export const timingUnits=(budget:number,cost:number,entry:number,stop:number)=>{const cents=Math.round(Math.abs(entry-stop)*100);return cents>0&&budget>=cost?Math.floor(Math.round((budget-cost)*100)/cents):0;};
type Kind='morning'|'opening'|'afternoon'|'bear'|'range'|'next'|'clock';
export function timingScenario(s:ChartScenarioId):{bars:TimingBar[];kind:Kind;asOf:number}{
 let source=timingAfternoon,n=source.length,kind:Kind='afternoon';
 switch(s){
 case 'par15-clock':case 'par15-dst':return{bars:[],kind:'clock',asOf:Date.parse('2026-02-04T15:00:00Z')};
 case 'par15-morning-pre':source=timingMorning;n=3;kind='morning';break;
 case 'par15-morning-event':source=timingMorning;n=4;kind='morning';break;
 case 'par15-morning-resume':source=timingMorning;n=7;kind='morning';break;
 case 'par15-morning-reversal':source=timingMorningReversal;n=6;kind='morning';break;
 case 'par15-morning-quiet':source=timingMorningQuiet;n=5;kind='morning';break;
 case 'par15-opening-range':source=timingOpeningRange;n=3;kind='opening';break;
 case 'par15-opening-traps':source=timingOpeningRange;n=6;kind='opening';break;
 case 'par15-afternoon-before':n=6;break;
 case 'par15-late-shock':case 'par15-late-line':n=7;break;
 case 'par15-late-gap':n=8;break;
 case 'par15-late-first':n=9;break;
 case 'par15-late-second-low':n=10;break;
 case 'par15-late-signal':case 'par15-execution':n=11;break;
 case 'par15-late-resume':case 'par15-late-cost':n=14;break;
 case 'par15-late-failure':source=timingAfternoonFailure;n=9;break;
 case 'par15-late-bear':source=timingAfternoon.map(timingMirror);n=14;kind='bear';break;
 case 'par15-range-upper':source=timingRange;n=24;kind='range';break;
 case 'par15-range-break':source=timingRange;n=25;kind='range';break;
 case 'par15-range-second':source=timingRange;n=29;kind='range';break;
 case 'par15-range-middle':source=timingRange;n=31;kind='range';break;
 case 'par15-range-close':source=timingRange;n=42;kind='range';break;
 case 'par15-next-day':source=timingNext;n=4;kind='next';break;
 default:throw new Error(`Unknown timing scenario ${s}`);
 }
 const asOf=source[n-1].start+timingDuration;return{bars:timingKnown(source,asOf),kind,asOf};
}
function ClockMarks({dst}:{dst:boolean}){
 const dates=dst?['2026-02-04T15:00:00Z','2026-03-18T14:00:00Z','2026-04-08T14:00:00Z','2026-10-29T14:00:00Z']:['2026-02-04T15:00:00Z'];
 return <g><text x="80" y="30" className="chart-small strong">Datierte Zeitumrechnung · ein Zeitpunkt, mehrere Ortsanzeigen</text>
  {['Datum 2026','New York','UTC','Berlin'].map((v,i)=><text key={v} x={80+i*165} y="75" className="chart-small strong">{v}</text>)}
  {dates.map((date,i)=>{const epoch=Date.parse(date),label=`${date.slice(8,10)}.${date.slice(5,7)}.`;return <g key={date}><line x1="80" x2="770" y1={104+i*42} y2={104+i*42} stroke="currentColor" opacity="0.1"/>{[label,timingClock(epoch),timingClock(epoch,'UTC'),timingClock(epoch,'Europe/Berlin')].map((v,j)=><text key={j} x={80+j*165} y={98+i*42} className="chart-small">{v}</text>)}</g>;})}
  {!dst?<><text x="80" y="165" className="chart-small">Derselbe Winterzeitpunkt: Los Angeles 07:00 · New York 10:00 · Berlin 16:00</text><text x="80" y="200" className="chart-small">10:00 allein benennt ohne Datum und Zeitzone keinen eindeutigen Zeitpunkt.</text></>:null}
  <text x="80" y="292" className="chart-small">Benannte Zeitzonen statt fester Stundenverschiebung · keine Preisprognose</text>
  <text x="80" y="320" className="chart-small">Datierte Beispiele · America/New_York / Europe/Berlin · keine realen Ereignistermine</text>
 </g>;
}
const fmt=(p:number)=>Number(p.toFixed(3)).toString().replace('.',',');
export function TimingMarks({scenario}:{scenario:ChartScenarioId}){
 const model=timingScenario(scenario);if(model.kind==='clock')return <ClockMarks dst={scenario==='par15-dst'}/>;
 const {bars,kind,asOf}=model,bear=kind==='bear',range=kind==='range',afternoon=kind==='afternoon'||bear,ema=timingEma(bars,bear?112:108);
 const levels:{price:number;label:string}[]=range?[{price:108,label:'Alte Tagesoberkante 108'},{price:102,label:'Alte Rangemitte 102'},{price:96,label:'Alte Tagesunterkante 96'}]:kind==='next'?[{price:112,label:'Separates Vortagshoch 112'}]:kind==='opening'?[{price:104.5,label:'Vorherige Oberkante 104,5'},{price:98.5,label:'Vorherige Unterkante 98,5'}]:afternoon?[{price:bear?108.5:111.5,label:bear?'Voriger Tiefbezug 108,5':'Voriger Hochbezug 111,5'},{price:bear?115.5:104.5,label:bear?'Älterer Hochbezug 115,5':'Älteres Kontexttief 104,5'}]:[{price:106,label:'Hoch vor Termin 106'}];
 if(['par15-late-signal','par15-late-resume','par15-execution'].includes(scenario))levels.push({price:106.1,label:'Neuer Kaufplan 106,1'});
 if(scenario==='par15-execution')levels.push({price:104.5,label:'Schutzmodell 104,5'});
 if(scenario==='par15-late-first')levels.push({price:107.9,label:'Erste Schwelle 107,9'});
 if(scenario==='par15-range-second')levels.push({price:96.6,label:'Neuer Kaufplan 96,6'});
 const line=scenario==='par15-late-line'?[timingLine(bars[0].start),timingLine(bars.at(-1)!.start)]:[];
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price),...(afternoon?ema:[]),...line)-.5),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price),...(afternoon?ema:[]),...line)+.5);
 const y=(p:number)=>245-(p-min)/(max-min)*196,x=(i:number)=>94+i*Math.min(48,476/Math.max(1,bars.length-1)),width=bars.length>24?6:bars.length>16?10:14,stride=Math.max(1,Math.ceil(bars.length/10));
 let previous=80;const labelY=new Map<string,number>();for(const l of [...levels].sort((a,b)=>b.price-a.price)){previous=Math.max(previous+19,y(l.price)+4);labelY.set(l.label,previous);}
 const event=Date.parse(kind==='morning'||kind==='opening'?'2026-02-04T15:00:00Z':'2026-02-04T19:30:00Z');
 const notes:Partial<Record<ChartScenarioId,string>>={
 'par15-morning-pre':'Stand10:00 · Termin10:00 fiktiv · dessen Kerze noch unbekannt',
 'par15-morning-event':'Stand10:05 · Ereigniskerze L102 / C102,4 · Anschluss noch offen',
 'par15-morning-resume':'Späterer Ausgang · Erholung über106 statt weiterer Abwärtsfortsetzung',
 'par15-morning-reversal':'Gleiche vier Anfangskerzen · danach weiterer Rückgang bis97',
 'par15-morning-quiet':'Gleicher Vorlauf · trotz Termin nur enge Überlappung um106',
 'par15-opening-range':'Anderer Vorlauf · breite Spannen, lange Dochte und starke Überlappung',
 'par15-opening-traps':'Zuerst unter98,5, dann über104,5 · fremde Positionen bleiben unbekannt',
 'par15-afternoon-before':'Stand14:25 · Hoch111,5 · Kontakte in14:10 und14:20 · Zukunft offen',
 'par15-late-shock':'Stand14:30 · Gegenkerze14:25 H110,5 / L104,8 / C105,2',
 'par15-late-line':'Externe Anker13:15=106,2 und13:55=107,8 · Linienwert14:25=109',
 'par15-late-gap':'Stand14:35 · Hoch der Gegenkerze107,8 liegt unter ihrem EMA20',
 'par15-late-first':'Stand14:40 · erste Schwelle107,9 erreicht, Schluss der Kerze106',
 'par15-late-second-low':'Stand14:45 · Tief104,6 unter104,8, zugleich über Kontexttief104,5',
 'par15-late-signal':'Stand14:50 · Signal mit Start14:45 jetzt fertig · neue Schwelle106,1',
 'par15-late-resume':'Erst um15:05 neues Hoch112 bekannt · Sitzungsschluss16:00 noch offen',
 'par15-late-failure':'Gleicher Gegenstoß bis14:30 bekannt · danach weiterer Rückgang bis101',
 'par15-late-bear':'220 minus Preis · späte Aufwärtsgegenbewegung scheitert später',
 'par15-range-upper':'24 Kerzen12:30–14:30 in oberer Hälfte · Kontextgrenzen96 und108',
 'par15-range-break':'Stand14:35 · nach langem Aufenthalt oben Tief95,5 unter alter96',
 'par15-range-second':'Stand14:55 · Tiefs95,5 /95,2 · neues Signalhoch96,5 erst jetzt bekannt',
 'par15-range-middle':'Stand15:05 · Hoch103 erreicht alte Mitte102, nicht alte Oberkante108',
 'par15-range-close':'Stand16:00 · letzte Kerze startet15:55 und schließt101,8',
 'par15-late-cost':'Spätes Rechenmodell111,3 →111,5 · Menge5 · Kosten2 · Ziel netto−1',
 'par15-execution':'Modell · Budget20 · Einstieg106,1: Menge11 / schlechter106,4: Menge9',
 'par15-next-day':'Separater Folgetag05.02. · kompletter Vortagskontext vorgegeben',
 };
 return <g>
  <text x="80" y="22" className="chart-small strong">Eigene Zeitfenster · Fünf-Minuten-Kurse · America/New_York · Preise in Punkten</text>
  <text x="620" y="44" className="chart-small">{kind==='next'?'05.02.2026':'04.02.2026'}</text><text x="620" y="66" className="chart-small">Bekannt ab {timingClock(asOf)}</text>
  {bars.map((b,i)=>Math.abs(b.start-event)<=timingDuration?<rect key={`window-${i}`} x={x(i)-width} y="37" width={width*2} height="214" fill="currentColor" opacity="0.05"/>:null)}
  {[min,(min+max)/2,max].map(p=><g key={p}><line x1="80" x2="610" y1={y(p)} y2={y(p)} stroke="currentColor" opacity="0.1"/><text x="67" y={y(p)+4} textAnchor="end" className="chart-small">{fmt(p)}</text></g>)}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" strokeDasharray="5 4" opacity="0.55"/><line x1="610" x2="616" y1={y(l.price)} y2={labelY.get(l.label)!-4} stroke="currentColor" opacity="0.4"/><text x="620" y={labelY.get(l.label)} className="chart-small">{l.label}</text></g>)}
  {afternoon?<polyline points={ema.map((v,i)=>`${x(i)},${y(v)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2"/>:null}
  {scenario==='par15-late-line'?<line x1={x(0)} x2={x(bars.length-1)} y1={y(timingLine(bars[0].start))} y2={y(timingLine(bars.at(-1)!.start))} stroke="currentColor" strokeDasharray="3 4"/>:null}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={b.start}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-width/2} y={y(Math.max(b.open,b.close))} width={width} height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/>{i===bars.length-1||(i%stride===0&&i<=bars.length-1-stride)?<text x={x(i)} y="273" textAnchor="middle" className="chart-small">{timingClock(b.start)}</text>:null}</g>})}
  <text x="80" y="301" className="chart-small">{notes[scenario]}</text>
  <text x="80" y="325" className="chart-small">Startzeiten auf Achse · Kerze erst nach Ende bekannt · erfundene Kurse und Termine</text>
 </g>;
}
