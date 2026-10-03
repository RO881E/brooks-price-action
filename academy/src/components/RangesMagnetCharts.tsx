import type {ChartScenarioId} from '../content/types';
export type MagnetBar={open:number;high:number;low:number;close:number};
export const magnetBars:MagnetBar[]=[
 {open:99,high:101,low:98,close:100},
 {open:100,high:102,low:99,close:101.5},
 {open:101.5,high:102,low:99.5,close:100},
 {open:100,high:102,low:99.8,close:101.8},
 {open:101.8,high:107,low:101.8,close:106.8},
 {open:106.8,high:106.9,low:104.8,close:105.2},
 {open:105.2,high:105.3,low:101.6,close:102.5},
 {open:102.5,high:105,low:102.1,close:104.7},
 {open:104.7,high:107.2,low:104.5,close:107},
 {open:107,high:110.2,low:106.8,close:110},
 {open:110,high:110.1,low:108.5,close:109},
 {open:109,high:111,low:108.8,close:110.8},
];
export const magnetFailureBars:MagnetBar[]=[...magnetBars.slice(0,6),{open:105.2,high:105.3,low:99,close:99.5},{open:99.5,high:100,low:97,close:97.5}];
export const magnetNoTestBars:MagnetBar[]=[...magnetBars.slice(0,5),{open:106.8,high:110.2,low:106.5,close:110}];
export const magnetEntryTestBars:MagnetBar[]=[...magnetBars.slice(0,9),{open:107,high:107.1,low:105,close:105.4}];
export const magnetTrendBars:MagnetBar[]=[
 {open:100,high:102,low:99,close:101},{open:101,high:103,low:100,close:102},{open:102,high:104,low:101,close:103},
 {open:103,high:105,low:102,close:104},{open:104,high:106,low:103,close:105},{open:105,high:107.6,low:104,close:107},
 {open:107,high:107.1,low:104.5,close:105},
];
export const magnetGapBars:MagnetBar[]=[{open:99,high:100.2,low:98.8,close:100},{open:103,high:104,low:102.8,close:103.8},{open:103.8,high:104,low:101.5,close:101.8},{open:101.8,high:102,low:100.1,close:100.5}];
export const magnetTightBars:MagnetBar[]=[{open:100,high:101,low:99.5,close:100.4},{open:100.4,high:100.9,low:99.7,close:100.1},{open:100.1,high:101,low:99.6,close:100.5},{open:100.5,high:100.8,low:99.5,close:100.2}];
export const magnetFlagBars:MagnetBar[]=[{open:98,high:102,low:97.8,close:101.8},{open:101.8,high:106,low:101.5,close:105.8},{open:105.8,high:106.8,low:104.8,close:105.5},{open:105.5,high:106.5,low:104.8,close:106},{open:106,high:108,low:105.9,close:107.8},{open:107.8,high:108.1,low:104.9,close:105},{open:105,high:105.1,low:102.8,close:103.2}];
export const magnetPreviousDay={open:100,high:109,low:97,close:104,session:'09:00–17:00 UTC'};
export const magnetMirror=(b:MagnetBar):MagnetBar=>({open:200-b.open,high:200-b.low,low:200-b.high,close:200-b.close});
export const magnetLine=(minute:number)=>98+minute;
export const magnetChannel=(minute:number)=>magnetLine(minute)+3;
export const magnetSma=(bars:MagnetBar[],n:number)=>bars.slice(-n).reduce((sum,b)=>sum+b.close,0)/n;
export const magnetRetracement=(low:number,high:number,fraction:number)=>high-(high-low)*fraction;
export function magnetAggregate(bars:MagnetBar[],size:number):MagnetBar[]{
 const out:MagnetBar[]=[];
 for(let i=0;i+size<=bars.length;i+=size){const group=bars.slice(i,i+size);out.push({open:group[0].open,high:Math.max(...group.map(b=>b.high)),low:Math.min(...group.map(b=>b.low)),close:group.at(-1)!.close});}
 return out;
}
export function magnetScenarioBars(s:ChartScenarioId):MagnetBar[]{
 switch(s){
 case 'par10-map':case 'par10-day':case 'par10-measure':case 'par10-range':return magnetBars.slice(0,4);
 case 'par10-average-gap':case 'par10-big':case 'par10-day-after':case 'par10-fib':return magnetBars.slice(0,5);
 case 'par10-inside':return magnetBars.slice(0,6);
 case 'par10-test':return magnetBars.slice(0,7);
 case 'par10-rebound':case 'par10-risk':case 'par10-profit':return magnetBars.slice(0,8);
 case 'par10-entry':return magnetBars.slice(0,9);
 case 'par10-entry-retest':return magnetEntryTestBars;
 case 'par10-round':return magnetBars.slice(0,10);
 case 'par10-late':return magnetBars;
 case 'par10-failure':return magnetFailureBars;
 case 'par10-no-test':return magnetNoTestBars;
 case 'par10-mirror':return magnetBars.slice(0,8).map(magnetMirror);
 case 'par10-line':case 'par10-channel':return magnetTrendBars.slice(0,6);
 case 'par10-average':return magnetTrendBars;
 case 'par10-higher':return magnetAggregate(magnetTrendBars.slice(0,6),3);
 case 'par10-gap':return magnetGapBars.slice(0,3);
 case 'par10-gap-filled':return magnetGapBars;
 case 'par10-tight':return magnetTightBars;
 case 'par10-flag-start':return magnetFlagBars.slice(0,4);
 case 'par10-flag-return':return magnetFlagBars;
 default:return magnetBars.slice(0,4);
 }
}
const fmt=(v:number)=>Number(v.toFixed(3)).toString().replace('.',',');
export function MagnetMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=magnetScenarioBars(scenario),bear=scenario==='par10-mirror',trend=['par10-line','par10-channel','par10-average','par10-higher'].includes(scenario),gap=scenario==='par10-gap'||scenario==='par10-gap-filled',flag=scenario==='par10-flag-start'||scenario==='par10-flag-return',tight=scenario==='par10-tight',day=scenario==='par10-day'||scenario==='par10-day-after';
 const levels:{price:number;label:string}[]=day?[{price:109,label:'Vortagshoch 109'},{price:104,label:'Vortagsschluss 104'},{price:100,label:'Vortagseröffnung 100'},{price:97,label:'Vortagstief 97'}]:gap?[{price:102.8,label:'Oberer Lückenrand 102,8'},{price:100.2,label:'Unterer Lückenrand 100,2'}]:flag?[{price:106.8,label:'Pausenhoch 106,8'},{price:104.8,label:'Pausentief 104,8'}]:tight?[{price:101,label:'Oberkante 101'},{price:100.25,label:'Mitte 100,25'},{price:99.5,label:'Unterkante 99,5'}]:trend?[]:[{price:bear?98:102,label:bear?'Alter Ausbruchsrand 98':'Alter Ausbruchsrand 102'}];
 if(['par10-map','par10-range','par10-measure'].includes(scenario))levels.push({price:98,label:'Rangeunterkante 98'},{price:100,label:'Rangemitte 100'});
 if(scenario==='par10-map'||scenario==='par10-measure')levels.push({price:106,label:'Vorbereitetes Ziel 106'});
 if(['par10-big','par10-inside','par10-test','par10-rebound','par10-entry','par10-failure','par10-no-test'].includes(scenario))levels.push({price:107,label:'Großes Kerzenhoch 107'},{price:101.8,label:'Großes Kerzentief 101,8'});
 if(scenario==='par10-test')levels.push({price:101.7,label:'Modellstop 101,7'});
 if(scenario==='par10-rebound')levels.push({price:99.8,label:'Früheres Tief 99,8'});
 if(scenario==='par10-entry')levels.push({price:105.1,label:'Kaufplan 105,1'},{price:102,label:'Schutz unter Signal 102'},{price:104.4,label:'Schutz unter Entry 104,4'});
 if(scenario==='par10-entry-retest')levels.push({price:105.1,label:'Modellkauf 105,1'});
 if(scenario==='par10-risk')levels.push({price:105.1,label:'Angenommener Kauf 105,1'},{price:101.5,label:'Modellstop 101,5'},{price:108.7,label:'Ein-R-Preisziel 108,7'},{price:110,label:'Weiterer Bezug 110'});
 if(scenario==='par10-profit')levels.push({price:105.1,label:'Modellkauf 105,1'},{price:106.1,label:'Ein Punkt Ziel 106,1'},{price:108.1,label:'Drei Punkte Ziel 108,1'});
 if(scenario==='par10-round'||scenario==='par10-late')levels.push({price:110,label:'Runde Zahl 110'},{price:109,label:'Bekanntes Vortagshoch 109'});
 if(scenario==='par10-late')levels.push({price:109.8,label:'Später Modellkauf 109,8'},{price:108.4,label:'Modellstop 108,4'});
 if(scenario==='par10-fib')levels.push({price:99.8,label:'Ausgewählter Start 99,8'},{price:107,label:'Ausgewähltes Hoch 107'},{price:103.4,label:'50-Prozent-Rücklauf 103,4'},{price:102.6,label:'61,8 Prozent gerundet 102,6'},{price:114.2,label:'Verlängerung 114,2'});
 if(scenario==='par10-mirror')levels.push({price:98.2,label:'Großes Kerzenhoch 98,2'},{price:98.3,label:'Modellstop 98,3'},{price:93,label:'Großes Kerzentief 93'});
 if(scenario==='par10-higher')levels.push({price:104,label:'Hoch erster 3-Min-Bar 104'});
 if(scenario==='par10-average-gap')levels.push({price:101.1,label:'SMA nach Minute 4: 101,1'},{price:101.8,label:'Tief Minute 5: 101,8'});
 if(scenario==='par10-average')levels.push({price:magnetSma(magnetTrendBars.slice(0,6),3),label:'SMA nach Minute 6: 105,333'},{price:magnetSma(magnetTrendBars,3),label:'SMA nach Minute 7: 105,667'});
 const extra=trend&&scenario!=='par10-higher'?[magnetLine(1),magnetLine(bars.length),magnetChannel(bars.length)]:[];
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price),...extra)-.5),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price),...extra)+.5);
 const y=(v:number)=>249-(v-min)/(max-min)*204,x=(i:number)=>96+i*Math.min(48,460/Math.max(1,bars.length-1));
 let last=27;const labels=new Map<string,number>();for(const l of [...levels].sort((a,b)=>b.price-a.price)){const pos=Math.max(last+19,y(l.price)+4);labels.set(l.label,pos);last=pos;}
 const notes:Partial<Record<ChartScenarioId,string>>={
 'par10-map':'Vier bekannte Minuten · mögliche Ziele entstehen vor dem späteren Ausbruch',
 'par10-day':'Getrennter Kontextdatensatz · Vortagssitzung 09:00 bis 17:00 UTC',
 'par10-day-after':'Stand nach Minute 5 · Schluss 106,8 → Vortagshoch 109: 2,2 Punkte',
 'par10-measure':'Rangehöhe 4 Punkte · Ziel 106 schon vor der Ausbruchskerze bekannt',
 'par10-range':'Range 98 bis 102 · Mitte 100 ist kein nachgewiesenes Volumenmaximum',
 'par10-big':'Kerze 5: O/L 101,8 · H 107 · C 106,8 · Körper 5 / Spanne 5,2',
 'par10-inside':'Kerze 6 in Spanne 5 · erstes örtliches Hoch 107 jetzt bestätigt',
 'par10-test':'Tief 7: 101,6 · Schluss 7: 102,5 · fremde Stoporders unbekannt',
 'par10-rebound':'Tief 101,6 unter 101,8, aber über älterem Tief 99,8 · Erholung in 8',
 'par10-entry':'Signal 8 → Kaufplan 105,1 · endgültiges Tief 9 erst nach Minute 9',
 'par10-entry-retest':'Eigener Vergleich nach Minute 9 · Tief 10: 105 / Schluss 10: 105,4',
 'par10-failure':'Gleiche ersten 6 Minuten · dann Schlüsse 99,5 und 97,5',
 'par10-no-test':'Gleiche ersten 5 Minuten · danach sofortiger Anschluss statt Tief-Test',
 'par10-mirror':'200 minus Preis · Hoch 7: 98,4 über Stop 98,3 · Schluss 7: 97,5',
 'par10-line':'Separater Trendfall · Gerade durch L1=99 / L3=101 · Wert6=104',
 'par10-channel':'Parallele durch H2=103 · Kanalwert6=107 · Hoch6=107,6',
 'par10-average-gap':'Vorher bekannter SMA4=101,1 · Tief5=101,8 · Kerzenspannen überlappen',
 'par10-average':'Tief7=104,5 durch vorher bekannten SMA6 · neuer SMA7 separat bekannt',
 'par10-higher':'Echte Dreieraggregation aus Minuten 1 bis 6 · nur abgeschlossene Gruppen',
 'par10-gap':'Alte letzte Minute, dann neue Sitzung · Tief101,5 füllt nur einen Teil',
 'par10-gap-filled':'Späterer Vergleich · Tief100,1 unterschreitet unteren Rand100,2',
 'par10-tight':'Eigenständiger Engbereich · vier kleine überlappende Minutenkerzen',
 'par10-flag-start':'Nur frühe Pause bekannt · Bezeichnung letzte Flagge noch unbestätigt',
 'par10-flag-return':'Späterer Vergleich · Rückkehr in Pause, dann Schluss7 unter104,8',
 'par10-profit':'Zielstrecken ab Modellkauf105,1 · feste Regeln, keine Teilnehmerstatistik',
 'par10-risk':'Modell: 1 Euro/Punkt/Einheit · Menge7 · Kosten2 · Verlust27,2 Euro',
 'par10-fib':'Ausgewählter Swing99,8–107 · 61,8 Prozent: 102,5504 → Preisstufe102,6',
 'par10-round':'Hoch10=110,2 / Schluss10=110 · runde Zahl überschritten',
 'par10-late':'Hypothese: 109,8 → 110 · Menge5 · Kosten2 · Netto minus1 Euro',
 };
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigene Preisbezüge · abgeschlossene Zeitabschnitte · Preise in Punkten</text>
  {[min,(min+max)/2,max].map(v=><g key={v}><line x1="80" x2="610" y1={y(v)} y2={y(v)} stroke="currentColor" opacity="0.1"/><text x="67" y={y(v)+4} textAnchor="end" className="chart-small">{fmt(v)}</text></g>)}
  {flag?<rect x="80" y={y(106.8)} width="530" height={y(104.8)-y(106.8)} fill="currentColor" opacity="0.06"/>:null}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" strokeDasharray="5 4" opacity="0.65"/><line x1="610" x2="616" y1={y(l.price)} y2={labels.get(l.label)!-4} stroke="currentColor" opacity="0.4"/><text x="620" y={labels.get(l.label)} className="chart-small">{l.label}</text></g>)}
  {trend&&scenario!=='par10-higher'?<line x1={x(0)} x2={x(bars.length-1)} y1={y(magnetLine(1))} y2={y(magnetLine(bars.length))} stroke="currentColor" strokeWidth="1.5"/>:null}
  {scenario==='par10-channel'?<line x1={x(0)} x2={x(bars.length-1)} y1={y(magnetChannel(1))} y2={y(magnetChannel(bars.length))} stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4"/>:null}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-8} y={y(Math.max(b.open,b.close))} width="16" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/><text x={x(i)} y="277" textAnchor="middle" className="chart-small">{gap?(i===0?'Alt':`Neu ${i}`):scenario==='par10-higher'?`${i*3+1}–${i*3+3}`:i+1}</text></g>})}
  <text x="80" y="302" className="chart-small">{notes[scenario]}</text>
  <text x="80" y="324" className="chart-small">Erfundene Daten · Test und Reaktion getrennt · eigene Ausführungen nur als Modellannahmen</text>
 </g>;
}
