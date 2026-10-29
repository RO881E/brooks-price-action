import type {ChartScenarioId} from '../content/types';
export type AverageGapBar={open:number;high:number;low:number;close:number};
export const averageGapMain:AverageGapBar[]=[
 {open:110,high:112,low:109.8,close:111.8},
 {open:111.8,high:114,low:111.6,close:113.8},
 {open:113.8,high:116,low:113.6,close:115.8},
 {open:115.8,high:118,low:115.6,close:117.8},
 {open:117.8,high:120,low:117.6,close:119.8},
 {open:119.8,high:119.8,low:110,close:111},
 {open:111,high:111.2,low:110.2,close:110.5},
 {open:110.5,high:111.4,low:110.3,close:111.2},
 {open:111.2,high:111.2,low:109,close:109.5},
 {open:109.5,high:111,low:109.1,close:110.8},
 {open:110.8,high:114,low:110.6,close:113.8},
 {open:113.8,high:116,low:113.6,close:115.8},
 {open:115.8,high:119.5,low:115.6,close:119},
 {open:119,high:120.5,low:118.8,close:120.2},
 {open:120.2,high:120.2,low:114,close:115},
 {open:115,high:117,low:114.8,close:116.6},
 {open:116.6,high:116.8,low:110,close:111},
];
export const averageGapUntriggered:AverageGapBar[]=[...averageGapMain.slice(0,10),{open:110.8,high:111,low:105,close:106}];
export const averageGapSecondFail:AverageGapBar[]=[...averageGapMain.slice(0,10),{open:110.8,high:111.3,low:107,close:108}];
export const averageGapRange:AverageGapBar[]=[
 {open:100.2,high:101.5,low:98.5,close:99.8},
 {open:99.8,high:101.8,low:98.4,close:100.2},
 {open:100.2,high:101.6,low:98.6,close:99.9},
 {open:99.9,high:100.1,low:98,close:98.5},
 {open:98.5,high:98.8,low:97.5,close:98.1},
 {open:98.1,high:100.2,low:98,close:100},
];
export const averageGapStrong:AverageGapBar[]=[...averageGapRange.slice(0,5),
 {open:98.1,high:103,low:98,close:102.8},
 {open:102.8,high:102.9,low:101,close:101.5},
 {open:101.5,high:104,low:101.3,close:103.8},
];
export const averageGapTight:AverageGapBar[]=[{open:100.3,high:100.5,low:100.2,close:100.4}];
export const averageGapBoundary:AverageGapBar[]=[{open:108,high:109,low:99,close:99.5}];
export const averageGapMirror=(b:AverageGapBar):AverageGapBar=>({open:220-b.open,high:220-b.low,low:220-b.high,close:220-b.close});
export function averageGapEma(bars:AverageGapBar[],seed=110,period=20):number[]{
 if(!Number.isInteger(period)||period<1)throw new Error('Invalid EMA period');
 // Forty prior completed closes equal seed: first initialization is seed.
 let previous=seed;return bars.map(b=>{previous+=2/(period+1)*(b.close-previous);return previous;});
}
export const averageGapSide=(b:AverageGapBar,ema:number)=>b.high<ema?'below':b.low>ema?'above':'contact';
export function averageGapFirstOpposite(bars:AverageGapBar[],trend:'bull'|'bear',seed=110):number|undefined{
 const ema=averageGapEma(bars,seed),target=trend==='bull'?'below':'above';const index=bars.findIndex((b,i)=>averageGapSide(b,ema[i])===target);return index<0?undefined:index+1;
}
export const averageGapLine=(minute:number)=>109.8+(minute-1)*1.9;
export const averageGapUnits=(budget:number,cost:number,entry:number,stop:number)=>{const cents=Math.round(Math.abs(entry-stop)*100);return cents>0&&budget>=cost?Math.floor(Math.round((budget-cost)*100)/cents):0;};
export function averageGapScenarioBars(s:ChartScenarioId):AverageGapBar[]{
 switch(s){
 case 'par14-trend':return averageGapMain.slice(0,5);
 case 'par14-contact':case 'par14-line':return averageGapMain.slice(0,6);
 case 'par14-first':case 'par14-entry':return averageGapMain.slice(0,7);
 case 'par14-first-try':return averageGapMain.slice(0,8);
 case 'par14-first-fail':return averageGapMain.slice(0,9);
 case 'par14-second-signal':case 'par14-risk':case 'par14-shared-risk':case 'par14-adding':return averageGapMain.slice(0,10);
 case 'par14-second-entry':case 'par14-average-test':return averageGapMain.slice(0,11);
 case 'par14-untriggered':return averageGapUntriggered;
 case 'par14-second-fail':return averageGapSecondFail;
 case 'par14-near-extreme':return averageGapMain.slice(0,13);
 case 'par14-new-extreme':return averageGapMain.slice(0,14);
 case 'par14-post-test':return averageGapMain;
 case 'par14-bear':return averageGapMain.slice(0,14).map(averageGapMirror);
 case 'par14-range':return averageGapRange.slice(0,5);
 case 'par14-range-return':return averageGapRange;
 case 'par14-tight':return averageGapTight;
 case 'par14-strong-return':return averageGapStrong;
 case 'par14-boundary':return averageGapBoundary;
 default:throw new Error(`Unknown average gap scenario ${s}`);
 }
}
const fmt=(n:number)=>Number(n.toFixed(3)).toString().replace('.',',');
export function AverageGapMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=averageGapScenarioBars(scenario),range=['par14-range','par14-range-return','par14-tight','par14-strong-return'].includes(scenario),bear=scenario==='par14-bear';
 const ema=averageGapEma(bars,range?100:110),levels:{price:number;label:string}[]=[];
 if(!range&&scenario!=='par14-boundary')levels.push({price:bear?100:120,label:bear?'Altes Trendtief 100':'Altes Trendhoch 120'});
 if(['par14-entry','par14-first-try','par14-first-fail'].includes(scenario))levels.push({price:111.3,label:'Erster Kaufplan 111,3'},{price:110.1,label:'Erster Schutz 110,1'});
 if(['par14-second-signal','par14-second-entry','par14-untriggered','par14-second-fail','par14-risk','par14-shared-risk','par14-adding'].includes(scenario))levels.push({price:111.1,label:'Zweiter Kaufplan 111,1'},{price:108.9,label:'Neuer Schutz 108,9'});
 if(scenario==='par14-first')levels.push({price:111.2,label:'Ganzes Kerzenhoch 111,2'});
 if(scenario==='par14-average-test')levels.push({price:averageGapEma(averageGapMain.slice(0,10)).at(-1)!,label:'EMA20 nach 10: 111,705'});
 if(['par14-range','par14-range-return'].includes(scenario))levels.push({price:98.9,label:'Range-Kaufplan 98,9'},{price:99.6,label:'Festes Modellziel 99,6'});
 if(scenario==='par14-tight')levels.push({price:100.1,label:'Shortplan 100,1'},{price:100.6,label:'Schutzplan 100,6'},{price:100,label:'Festes Modellziel 100'});
 if(scenario==='par14-boundary')levels.push({price:109,label:'Hoch = EMA: 109'});
 if(scenario==='par14-adding')levels.push({price:109.1,label:'Zusatzkauf als Modell 109,1'});
 const extras=scenario==='par14-line'?[averageGapLine(1),averageGapLine(bars.length)]:[];
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...ema,...levels.map(l=>l.price),...extras)-.5),max=Math.ceil(Math.max(...bars.map(b=>b.high),...ema,...levels.map(l=>l.price),...extras)+.5);
 const y=(p:number)=>249-(p-min)/(max-min)*204,x=(i:number)=>96+i*Math.min(48,470/Math.max(1,bars.length-1));
 let previous=78;const labelY=new Map<string,number>();for(const l of [...levels].sort((a,b)=>b.price-a.price)){previous=Math.max(previous+19,y(l.price)+4);labelY.set(l.label,previous);}
 const notes:Partial<Record<ChartScenarioId,string>>={
 'par14-trend':'Stand5 · EMA20 mit vierzig Vorbereitungsschlüssen110 · spätere Pause offen',
 'par14-contact':'Stand6 · Schluss111 unter EMA112,303 · Hoch119,8 bleibt darüber',
 'par14-first':'Stand7 · erstes ganzes Hoch111,2 unter EMA112,132 · noch keine Auslösung',
 'par14-line':'Eigene Gerade L1–L3 · Wert6 119,3 · Tief6 110 unterschreitet sie',
 'par14-entry':'Stand7 · Preisstufe0,1 · Kaufplan111,3 / Schutz110,1',
 'par14-first-try':'Stand8 · Hoch111,4 über Kaufschwelle, aber noch unter EMA112,043',
 'par14-first-fail':'Stand9 · Tief109 unter Schutz110,1 · Füllungen nur als Modellannahmen',
 'par14-second-signal':'Stand10 · erneute grüne Reaktion · Hoch111 / Tief109,1 / Schluss110,8',
 'par14-second-entry':'Stand11 · Hoch114 / Schluss113,8 · neue Schwelle und EMA erreicht',
 'par14-untriggered':'Gleiche Minuten1–10 · alternative11 mit Hoch111 unter Schwelle111,1',
 'par14-second-fail':'Gleiche Minuten1–10 · Hoch11 111,3 / Tief107 / Schluss108 · Folge offen',
 'par14-average-test':'Stand11 · aktueller EMA111,905 separat vom vorherigen EMA111,705',
 'par14-near-extreme':'Stand13 · Hoch119,5 bleibt0,5 unter altem Trendhoch120',
 'par14-new-extreme':'Stand14 · erst jetzt Hoch120,5 über altem Extrem120',
 'par14-post-test':'Späterer Vergleich · Abwärtsstrecken15 und17 mit Erholung16',
 'par14-bear':'220 minus Preis · erste ganze Gegenkerze7 über EMA · neues Tief erst14',
 'par14-range':'Eigener Überlappungsfall · EMA-Start100 · ganze Kerze5 unter Linie',
 'par14-range-return':'Späterer Vergleich6 · Hoch100,2 erreicht Festziel99,6 und eigenen EMA',
 'par14-tight':'Reines Modell · Menge10 · Ziel netto−1 / Schutzverlust7 Euro inkl.Kosten2',
 'par14-strong-return':'Gleiche Range-Minuten1–5 · starker neuer Schub, höheres Tief, Anschluss',
 'par14-boundary':'Separater Grenzfall · Schluss99,5 → EMA109 · Hoch109 ist Kontakt',
 'par14-risk':'Eigenständiges Modell · Budget30 · Preisrisiko2,2 · Kosten2 · Menge12',
 'par14-shared-risk':'Gemeinsames Budget30 · erster Verlust14 · Rest16 · zweite Menge6',
 'par14-adding':'Reine Füllannahmen2×111,1 +2×109,1 · keine behaupteten Ausführungen',
 };
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigene Durchschnittsabstände · EMA20 aus bekannten Schlüssen · Preise in Punkten</text>
  {[min,(min+max)/2,max].map(p=><g key={p}><line x1="80" x2="610" y1={y(p)} y2={y(p)} stroke="currentColor" opacity="0.1"/><text x="67" y={y(p)+4} textAnchor="end" className="chart-small">{fmt(p)}</text></g>)}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" opacity="0.55" strokeDasharray="5 4"/><line x1="610" x2="616" y1={y(l.price)} y2={labelY.get(l.label)!-4} stroke="currentColor" opacity="0.4"/><text x="620" y={labelY.get(l.label)} className="chart-small">{l.label}</text></g>)}
  {scenario==='par14-line'?<line x1={x(0)} x2={x(bars.length-1)} y1={y(averageGapLine(1))} y2={y(averageGapLine(bars.length))} stroke="currentColor" strokeDasharray="3 4"/>:null}
  <polyline points={ema.map((v,i)=>`${x(i)},${y(v)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2"/>
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-7} y={y(Math.max(b.open,b.close))} width="14" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/><text x={x(i)} y="277" textAnchor="middle" className="chart-small">{i+1}</text></g>})}
  <text x="620" y="45" className="chart-small">EMA20: {fmt(ema.at(-1)!)}</text>
  <text x="80" y="302" className="chart-small">{notes[scenario]}</text>
  <text x="80" y="324" className="chart-small">Erfundene Daten · Kontakt, Auslösung und tatsächliche Ausführung getrennt prüfen</text>
 </g>;
}
