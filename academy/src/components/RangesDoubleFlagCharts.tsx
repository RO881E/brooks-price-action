import type { ChartScenarioId } from '../content/types';
export type DoubleFlagBar = {open:number;high:number;low:number;close:number};
export const doubleFlagBars:DoubleFlagBar[]=[
 {open:80,high:84,low:79.8,close:83.8},
 {open:83.8,high:89,low:83.6,close:88.8},
 {open:88.8,high:96,low:88.5,close:93.8},
 {open:93.8,high:93.8,low:90,close:90.6},
 {open:90.6,high:94,low:90.4,close:93.5},
 {open:93.5,high:93.5,low:90.2,close:91},
 {open:91,high:92.8,low:90.3,close:92.6},
 {open:92.6,high:95,low:92.5,close:94.8},
 {open:94.8,high:98.5,low:94.5,close:98},
 {open:98,high:98.2,low:97.2,close:97.6},
 {open:97.6,high:101,low:97.5,close:100.8},
 {open:100.8,high:100.8,low:97.3,close:98},
];
export const doubleFlagEqual=doubleFlagBars.slice(0,6).map((b,i)=>i===5?{...b,low:90}:b);
export const doubleFlagUndercut=doubleFlagBars.slice(0,6).map((b,i)=>i===5?{...b,low:89.8}:b);
export const doubleFlagUntriggered:DoubleFlagBar[]=[...doubleFlagBars.slice(0,7),{open:92.6,high:92.7,low:88,close:88.5}];
export const doubleFlagTriggerFail:DoubleFlagBar[]=[...doubleFlagBars.slice(0,7),{open:92.6,high:93.1,low:89.6,close:90}];
export const doubleFlagDownFollow:DoubleFlagBar[]=[...doubleFlagUntriggered,{open:88.5,high:89,low:86,close:86.5}];
export const doubleFlagThird:DoubleFlagBar[]=[...doubleFlagUntriggered,{open:88.5,high:92.2,low:88.2,close:92},{open:92,high:94,low:91.8,close:93.8}];
export const doubleFlagDefense:DoubleFlagBar[]=[...doubleFlagBars.slice(0,6),{open:91,high:93.8,low:90.3,close:93.6},{open:93.6,high:93.7,low:88,close:88.5}];
export const doubleFlagTwoSided:DoubleFlagBar[]=[...doubleFlagBars.slice(0,7),{open:92.6,high:94.3,low:92.5,close:93.9},{open:93.9,high:94,low:89.5,close:90}];
export const doubleFlagEntryTest:DoubleFlagBar[]=[...doubleFlagBars.slice(0,8),{open:94.8,high:95,low:92.9,close:94}];
export const doubleFlagChannel:DoubleFlagBar[]=[
 {open:100,high:110,low:99.8,close:109.8},
 {open:109.8,high:110,low:106,close:107},
 {open:107,high:113,low:107,close:112},
 {open:112,high:116,low:110,close:115},
 {open:115,high:119,low:113,close:118},
 {open:118,high:118,low:106.2,close:108},
 {open:108,high:113.5,low:107.8,close:113},
 {open:113,high:114,low:112.7,close:113.8},
];
// This independently disclosed pause variant, not the breakout path, produces ii after aggregation.
export const doubleFlagInside:DoubleFlagBar[]=[...doubleFlagBars.slice(0,7),{open:92.6,high:93,low:91,close:92.5},{open:92.5,high:92.9,low:91.5,close:92}];
export const doubleFlagMirror=(b:DoubleFlagBar):DoubleFlagBar=>({open:200-b.open,high:200-b.low,low:200-b.high,close:200-b.close});
export const doubleFlagProjection=(bottom:number,top:number,direction:'up'|'down')=>direction==='up'?top+(top-bottom):bottom-(top-bottom);
export const doubleFlagMaxUnits=(budget:number,cost:number,entry:number,stop:number)=>{
 const riskCents=Math.round(Math.abs(entry-stop)*100);if(riskCents<=0||budget<cost)return 0;
 return Math.floor(Math.round((budget-cost)*100)/riskCents);
};
export function doubleFlagAggregate(bars:DoubleFlagBar[],size:number):DoubleFlagBar[]{
 if(!Number.isInteger(size)||size<1)throw new Error('Group size must be a positive integer');
 const out:DoubleFlagBar[]=[];for(let i=0;i+size<=bars.length;i+=size){const g=bars.slice(i,i+size);out.push({open:g[0].open,high:Math.max(...g.map(b=>b.high)),low:Math.min(...g.map(b=>b.low)),close:g.at(-1)!.close});}return out;
}
export function doubleFlagScenarioBars(s:ChartScenarioId):DoubleFlagBar[]{
 switch(s){
 case 'par12-context':return doubleFlagBars.slice(0,3);
 case 'par12-first':case 'par12-zone':return doubleFlagBars.slice(0,5);
 case 'par12-bottom':case 'par12-anchors':return doubleFlagBars.slice(0,6);
 case 'par12-top':return doubleFlagBars.slice(0,6).map(doubleFlagMirror);
 case 'par12-equal':return doubleFlagEqual;
 case 'par12-undercut':return doubleFlagUndercut;
 case 'par12-signal':case 'par12-entry':case 'par12-measure':case 'par12-alternative':case 'par12-small-bounce':case 'par12-risk':case 'par12-wide-risk':return doubleFlagBars.slice(0,7);
 case 'par12-untriggered':return doubleFlagUntriggered;
 case 'par12-trigger-fail':return doubleFlagTriggerFail;
 case 'par12-breakout':case 'par12-trail':return doubleFlagBars.slice(0,8);
 case 'par12-defense':return doubleFlagDefense.slice(0,7);
 case 'par12-defense-down':return doubleFlagDefense;
 case 'par12-down-follow':return doubleFlagDownFollow;
 case 'par12-third':case 'par12-third-risk':return doubleFlagThird.slice(0,9);
 case 'par12-third-entry':return doubleFlagThird;
 case 'par12-two-sided':return doubleFlagTwoSided;
 case 'par12-target':return doubleFlagBars.slice(0,9);
 case 'par12-high-pause':return doubleFlagBars.slice(0,10);
 case 'par12-follow':return doubleFlagBars.slice(0,11);
 case 'par12-nested':return doubleFlagBars;
 case 'par12-entry-test':return doubleFlagEntryTest;
 case 'par12-channel':return doubleFlagChannel.slice(0,6);
 case 'par12-shoulders':return doubleFlagChannel.slice(0,7);
 case 'par12-shoulder-fail':return doubleFlagChannel;
 case 'par12-higher':return doubleFlagAggregate(doubleFlagInside,3);
 default:throw new Error(`Unknown double flag scenario ${s}`);
 }
}
const fmt=(p:number)=>Number(p.toFixed(2)).toString().replace('.',',');
export function DoubleFlagMarks({scenario}:{scenario:ChartScenarioId}){
 const bars=doubleFlagScenarioBars(scenario),mirror=scenario==='par12-top',higher=scenario==='par12-higher';
 const channel=['par12-channel','par12-shoulders','par12-shoulder-fail'].includes(scenario);
 const levels:{price:number;label:string}[]=[];
 if(channel)levels.push({price:106,label:'Erster Kanalboden 106'},{price:106.2,label:'Testboden 106,2'},{price:119,label:'Mittelhoch 119'});
 else if(scenario!=='par12-context'&&!higher) levels.push({price:mirror?110:90,label:mirror?'Erster Hochtest 110':'Erster Boden 90'},{price:mirror?106:94,label:mirror?'Zwischentief 106':'Zwischenhoch 94'});
 if(scenario==='par12-anchors')levels.push({price:79.8,label:'Älteres Gesamttief 79,8'});
 if(['par12-entry','par12-untriggered','par12-trigger-fail','par12-risk','par12-wide-risk','par12-trail','par12-entry-test'].includes(scenario))levels.push({price:92.9,label:'Modellkaufplan 92,9'});
 if(['par12-entry','par12-risk','par12-entry-test'].includes(scenario))levels.push({price:90.1,label:'Schutzplan 90,1'});
 if(scenario==='par12-wide-risk')levels.push({price:89.9,label:'Breiter Schutz 89,9'});
 if(scenario==='par12-trail')levels.push({price:92.4,label:'Neuer Schutzplan 92,4'});
 if(['par12-measure','par12-target','par12-risk'].includes(scenario))levels.push({price:98,label:'Messprojektion 98'});
 if(scenario==='par12-alternative')levels.push({price:97.8,label:'Andere Projektion 97,8'});
 if(scenario==='par12-small-bounce')levels.push({price:91.2,label:'Rechenvergleich 91,2'});
 if(['par12-bottom','par12-signal','par12-breakout','par12-target'].includes(scenario))levels.push({price:96,label:'Altes Trendhoch 96'});
 if(scenario==='par12-top')levels.push({price:104,label:'Altes Trendtief 104'});
 if(scenario==='par12-defense')levels.push({price:93.8,label:'Zweiter Hochtest 93,8'});
 if(scenario==='par12-down-follow')levels.push({price:86,label:'Abwärtsprojektion 86'});
 if(['par12-third','par12-third-entry','par12-third-risk'].includes(scenario))levels.push({price:88,label:'Dritter Tiefstoß 88'});
 if(['par12-third-entry','par12-third-risk'].includes(scenario))levels.push({price:92.3,label:'Neuer Kaufplan 92,3'});
 if(scenario==='par12-third-risk')levels.push({price:87.9,label:'Neuer Schutzplan 87,9'});
 if(['par12-shoulders','par12-shoulder-fail'].includes(scenario))levels.push({price:113.5,label:'Rechtes Hoch 113,5'});
 if(scenario==='par12-shoulder-fail')levels.push({price:113.6,label:'Früher Shortschutz 113,6'});
 if(scenario==='par12-nested')levels.push({price:97.2,label:'Jüngeres Tief 97,2'},{price:97.3,label:'Jüngerer Test 97,3'});
 const min=Math.floor(Math.min(...bars.map(b=>b.low),...levels.map(l=>l.price))-1),max=Math.ceil(Math.max(...bars.map(b=>b.high),...levels.map(l=>l.price))+1);
 const y=(p:number)=>249-(p-min)/(max-min)*204,x=(i:number)=>96+i*Math.min(48,460/Math.max(1,bars.length-1));
 let prev=27;const labelY=new Map<string,number>();for(const l of [...levels].sort((a,b)=>b.price-a.price)){prev=Math.max(prev+19,y(l.price)+4);labelY.set(l.label,prev);}
 const notes:Partial<Record<ChartScenarioId,string>>={
 'par12-context':'Stand 3 · Aufwärtsschub · spätere Bodenform unbekannt',
 'par12-first':'Stand 5 · erster Tiefpunkt 90 mit anschließender Erholung bis 94',
 'par12-zone':'Stand 5 · vorab gewählte Beobachtungszone 89,7–90,3',
 'par12-bottom':'Stand 6 · Tief4 90 / Tief6 90,2 · Ausgang offen',
 'par12-top':'200 minus Preis · Hoch4 110 / Hoch6 109,8 · Ausgang offen',
 'par12-equal':'Eigene Variante · L6 90 genau am ersten Boden · spätere Reaktion offen',
 'par12-undercut':'Eigene Variante · L6 89,8 unter 90 · weiterhin in der festen Testzone',
 'par12-signal':'Stand 7 · H7 92,8 / L7 90,3 / C7 92,6 · zweite Schwelle noch offen',
 'par12-entry':'Stand 7 · Schritt 0,1 · Plan über Signalhoch, noch keine Ausführung',
 'par12-untriggered':'Gleiche Minuten 1–7 · H8 92,7 unter Kaufplan · L8 88',
 'par12-trigger-fail':'Gleiche Minuten 1–7 · H8 93,1 / L8 89,6 / C8 90 · Reihenfolge offen',
 'par12-breakout':'Stand 8 · H8 95 über Zwischenhoch 94, noch unter Trendhoch 96',
 'par12-defense':'Eigene Variante ab 7 · Hoch 93,8 bleibt unter Zwischenhoch 94',
 'par12-defense-down':'Gleiche Verteidigungsvariante · Minute8 fällt auf 88 / C8 88,5',
 'par12-anchors':'Stand 6 · lokaler Boden 90 bleibt über frühem Gesamttief 79,8',
 'par12-channel':'Zusatzfall · Tief2 106 / Tief6 106,2 · neues Hoch 119 dazwischen',
 'par12-shoulders':'Zusatzfall · äußere Hochs 110 / 113,5 · höherer Mittelteil 119',
 'par12-shoulder-fail':'Späterer Vergleich · Hoch8 114 über rechter Schulter, unter Kopf119',
 'par12-down-follow':'Gleiche Minuten 1–8 wie Nichtauslösung · weiterer Rückgang bis 86',
 'par12-third':'Gleiche Bodenverletzung · Rückkehrkerze9 mit Hoch92,2 / Schluss92',
 'par12-third-entry':'Neue Entscheidung nach 9 · Hoch10 94 erreicht neue Schwelle92,3',
 'par12-third-risk':'Stand 9 · bis94 nur1,7 Punkte · Schutzabstand92,3–87,9: 4,4',
 'par12-two-sided':'Gleiche Minuten 1–7 · zuerst Hoch94,3 · später Tief89,5',
 'par12-measure':'Stand 7 · Anker90 und94 · Höhe4 · Aufwärtsprojektion98',
 'par12-alternative':'Stand 7 · anderer Bodenanker90,2 · Höhe3,8 · Projektion97,8',
 'par12-small-bounce':'Reiner Größenvergleich · ein Viertel von4 ist1 · 90,2 plus1 =91,2',
 'par12-target':'Stand 9 · Hoch98,5 erreicht Projektion98 und überschreitet altes Hoch96',
 'par12-high-pause':'Stand 10 · Tief97,2 über altem Zwischenhoch94 · Zukunft offen',
 'par12-follow':'Späterer Anschluss · nach hoher Pause Hoch11 101',
 'par12-nested':'Stand 12 · eigene jüngere Tiefs97,2 /97,3 mit Zwischenhoch101',
 'par12-trail':'Stand 8 · erst jetzt Tief8 92,5 bekannt · Nachziehidee92,4',
 'par12-entry-test':'Gleiche Minuten 1–8 · anderer Verlauf9 mit Tief92,9 / Schluss94',
 'par12-risk':'Modell · Menge10 · Preisrisiko2,8 · Kosten2 · Verlust30 / Gewinn49 Euro',
 'par12-wide-risk':'Modell · Budget30 · Preisrisiko3 · Kosten2 · Menge9 · Verlust29 Euro',
 'par12-higher':'Eigene Pausenvariante · echte Gruppen1–3 /4–6 /7–9 · zweimal innen',
 };
 return <g>
  <text x="80" y="24" className="chart-small strong">Eigene Doppeltestfälle · abgeschlossene Kerzen · Preise in Punkten</text>
  {[min,(min+max)/2,max].map(p=><g key={p}><line x1="80" x2="610" y1={y(p)} y2={y(p)} stroke="currentColor" opacity="0.1"/><text x="67" y={y(p)+4} textAnchor="end" className="chart-small">{fmt(p)}</text></g>)}
  {['par12-zone','par12-undercut','par12-equal'].includes(scenario)?<rect x="80" y={y(90.3)} width="530" height={y(89.7)-y(90.3)} fill="currentColor" opacity="0.12"/>:null}
  {levels.map(l=><g key={l.label}><line x1="80" x2="610" y1={y(l.price)} y2={y(l.price)} stroke="currentColor" opacity="0.6" strokeDasharray="5 4"/><line x1="610" x2="616" y1={y(l.price)} y2={labelY.get(l.label)!-4} stroke="currentColor" opacity="0.4"/><text x="620" y={labelY.get(l.label)} className="chart-small">{l.label}</text></g>)}
  {bars.map((b,i)=>{const tone=b.close>=b.open?'bull':'bear';return <g key={i}><line x1={x(i)} x2={x(i)} y1={y(b.high)} y2={y(b.low)} className={`candle-wick ${tone}`}/><rect x={x(i)-8} y={y(Math.max(b.open,b.close))} width="16" height={Math.max(2,Math.abs(y(b.open)-y(b.close)))} className={`candle-body ${tone}`}/><text x={x(i)} y="277" textAnchor="middle" className="chart-small">{higher?`${i*3+1}–${i*3+3}`:i+1}</text></g>})}
  <text x="80" y="302" className="chart-small">{notes[scenario]}</text>
  <text x="80" y="324" className="chart-small">Erfundene Daten · Muster, Plan und tatsächliche Ausführung getrennt prüfen</text>
 </g>;
}
