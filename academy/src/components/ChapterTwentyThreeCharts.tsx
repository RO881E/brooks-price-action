import type { ChartScenarioId, ChapterTwentyThreeScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number]; end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average'; label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; zones?: readonly (readonly [number,number])[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; }

const bars = (points: readonly number[]): Bar[] => points.slice(1).map((c,i)=>[points[i],Math.max(points[i],c)+1,Math.min(points[i],c)-1,c]);
const mirror = (values: readonly Bar[]): Bar[] => values.map(([o,h,l,c])=>[100-o,100-l,100-h,100-c]);
const panel = (title: string,note: string,values: readonly Bar[],refs: readonly (readonly [number,string])[] = [],focus: readonly number[] = []): Panel=>({title,note,bars:values,focus,lines:refs.map(([price,label])=>({start:[0,price],end:[values.length-1,price],kind:'reference',label}))});
const define = (heading: string,left: Panel,right: Panel,footer: string): Definition=>({heading,panels:[left,right],footer,description:`Eigenes schematisches Beispiel: links ${left.title} (${left.note}), rechts ${right.title} (${right.note}). Gepunktet: Preisreferenz; durchgezogen: Trendlinie; Strich-Punkt: berechneter SMA 20. ${footer}`});
export function sma20(values: readonly Bar[], history: readonly number[]): number[] {
 if(history.length<19)throw new Error('SMA 20 requires 19 preceding closes');
 const closes=[...history,...values.map(b=>b[3])];
 return values.map((_,i)=>closes.slice(history.length+i-19,history.length+i+1).reduce((sum,c)=>sum+c,0)/20);
}
const averagePanel = (title: string,note: string,values: readonly Bar[]): Panel=>{
 const averages=sma20(values,Array(19).fill(10));
 return {...panel(title,note,values),lines:averages.slice(1).map((v,i)=>({start:[i,averages[i]],end:[i+1,v],kind:'average'}))};
};
export function aggregateDay(values: readonly Bar[]): Bar {
 if(!values.length)throw new Error('Empty day');
 return [values[0][0],Math.max(...values.map(b=>b[1])),Math.min(...values.map(b=>b[2])),values.at(-1)![3]];
}
const opening: Bar[] = [[30,34,29,33],[33,43,32,42],[42,50,41,49]];
const signal: Bar[] = [...opening,[49,50,45,47]];
const up: Bar[] = [...signal,...bars([47,55,53,60,58,65,63,70])];
const slow = bars([35,39,37,42,40,45,43,48,46,51,49,54,52,57,55,60]);
const down=mirror(up);
const compact: Bar[] = [...opening,[49,50,46,48],[48,49,47,48]];
const compactBreak: Bar[] = [...compact,[48,59,47,58],[58,64,57,63]];
const firstRange: Bar[] = [[32,35,30,34],[34,38,32,36],[36,37,31,33],[33,37,32,35]];
const pretrend: Bar[] = [...bars([48,33,38,30]),...slow];
const stopRetest: Bar[] = [...signal,[47,57,46,55],[55,56,50,51]];
const stopResume: Bar[] = [...stopRetest,...bars([51,59,57,64])];
const lineBreak: Bar[] = [...down.slice(0,9),...bars([35,43,49])];
const lineResume: Bar[] = [...lineBreak,...bars([49,40,32,26])];
const linePanel=(title:string,note:string,values: readonly Bar[]):Panel=>({...panel(title,note,values),lines:[{start:[2,62],end:[values.length-1,62-(values.length-3)*2.5],kind:'trend'}]});
const small: Bar[] = [[44,50,43,49],[49,50,46,47],[47,56,46,55]];
const large: Bar[] = [[54,60,53,59],[59,60,55,56],[56,57,52,54],[54,63,53,62]];
const climax: Bar[] = [...slow,[60,72,59,71],[71,84,70,83]];
const climaxReturn: Bar[] = [...climax,...bars([83,75,78,68,74])];
const averageRun=bars(Array.from({length:23},(_,i)=>20+i*2));
const averageCross: Bar[] = [...averageRun,...bars([64,56,45,42,37,39])];
const forming: Bar[] = [[60,62,42,44]];
const finalBar: Bar[] = [[60,65,42,63]];
const priorClose: readonly (readonly [number,string])[] = [[30,'Vortagsschluss 30']];
const gapUp=bars([45,54,61,58,68]);
const gapBear=bars([45,35,26,31,20]);
const nextDay=bars([62,53,49,55,60,58,67]);
const firstRed: Bar[] = [[35,36,30,32],...bars([32,44,54,51,61])];
const balance: Bar[] = [[50,53,47,51],[51,54,48,49],[49,53,47,52],[52,53,45,46]];
const failedBalance: Bar[] = [...balance,[46,55,45,54],[54,61,53,60]];
const trapped: Bar[] = [[42,51,40,50],[50,53,48,51]];
const trappedFail: Bar[] = [...trapped,[51,52,37,38],...bars([38,29,32,24,27,19])];
const overlap: Bar[] = [[43,49,41,44],[44,50,42,45],[45,49,42,48],[48,50,43,46]];
const overlapFail: Bar[] = [...overlap,...bars([46,35,39,30])];
const gapOpenRetest: Bar[] = [[55,55,44,45],[45,46,35,36],[36,48,35,46],[46,54,45,51],[51,52,39,40],[40,41,29,30]];
const gapClimax: Bar[] = [[43,45,31,32],[32,33,22,23],[23,31,22,29],[29,30,19,20],[20,26,20,24]];
const gapReverse: Bar[] = [...gapClimax,...bars([24,35,43,40,51])];
const yesterdayTest: Bar[] = [[58,59,48,49],[49,50,40,42],[42,44,38,41],[41,49,40,48]];
const yesterdayLong: Bar[] = [...yesterdayTest,[48,56,47,55],[55,62,53,60]];
const changing=bars([62,49,39,45,56,52,57,51,56,52]);
const changingBreak: Bar[] = [...changing,...bars([52,40,29,34,24])];
const openHigh: Bar[] = [[78,78,63,64],[64,65,51,52],...bars([52,53,54,55,56,57,46,39])];
const unfilled: Bar[] = [[33,37,27,29],[29,35,28,34],[34,35,24,25]];
const lateReverse: Bar[] = [...unfilled,...bars([25,21,29,38,46])];
const earlyBear=bars([65,51,39,32,35,33,36,34]);
const earlyReverse: Bar[] = [...earlyBear,...bars([34,38,48,58,63])];
const projection: Bar[] = [[50,51,30,32],[32,43,31,40],[40,56,39,55],[55,56,50,51],[51,66,50,65],[65,69,64,68],[68,69,48,49]];
const wedge=bars([40,48,46,54,52,60,58,59,58,60]);
const wedgeResume: Bar[] = [...wedge,...bars([60,66,64,72])];
const signalProtection: Bar[] = [[50,52,44,46],[53,59,51,57],[57,58,47,49]];
const protectionResume: Bar[] = [...signalProtection,...bars([49,62,59,68])];
const openingBalance: Bar[] = [[50,55,48,54],[54,55,46,48],[48,53,46,51],[51,57,50,56]];
const openingFail: Bar[] = [...openingBalance,[56,57,43,44],...bars([44,35,38,29,32,25])];
const bearReaction=bars([74,61,48,52,43,39,50,56,48,40,34,41,50,57,53,57,46]);
const bearFailure: Bar[] = [...bearReaction,...bars([46,33,39,31,22])];
export const chapterTwentyThreeCharts: Record<ChapterTwentyThreeScenarioId,Definition> = {
 'c23-01': define("Ein Trend ab Handelsbeginn bleibt zunächst eine Annahme",panel('Erste Bars','nur eine frühe Käuferhypothese',opening),panel('Längere Folge','das frühe Tief hält in diesem Beispiel',up),"Frühe Richtung prüfen, statt das Tagesende vorwegzunehmen."),
 'c23-02': define("Kleine Anfangsrange und größere Balance unterscheiden",panel('Anfangsrange 8','38 minus 30',firstRange,[[30,'unten 30'],[38,'oben 38']]),panel('Referenzbreite 40','8 / 40 = 20 Prozent',firstRange,[[30,'Basis 30'],[70,'30 plus 40']]),"Zwanzig Prozent Breite sind keine zwanzig Prozent Wahrscheinlichkeit."),
 'c23-03': define("Ein Gap gibt keine feste Tagesrichtung vor",panel('Gap-up mit Käufern','Open 45 über Schluss 30',gapUp,priorClose),panel('Gap-up mit Verkäufern','gleiches Open, andere Folge',gapBear,priorClose),"Das Gap ist eine Ausgangslage, kein Richtungsauftrag."),
 'c23-04': define("Der erste Rücksetzer nach einem starken Impuls",panel('Erster kleiner Rücklauf','roter Signalbar am Impuls',signal,[[51,'Buy-Stop 51']],[3]),panel('Späterer Ausbruch','Trigger 51 wird erst jetzt erreicht',up,[[51,'Buy-Stop 51']],[4]),"Kontext, Auslösung und Schutz gehören zusammen."),
 'c23-05': define("Seitwärtspausen sind auch Korrekturen",panel('Zwei Inside-Bars','kaum Preisrückgabe',compact,[[50,'Pausenhoch 50']],[3,4]),panel('Ausbruch nach der Pause','neue Käuferfolge',compactBreak,[[50,'Pausenhoch 50']],[5,6]),"Zeit kann korrigieren, ohne viel Preis zurückzugeben."),
 'c23-06': define("Drei mögliche Folgen eines frühen Spikes",panel('Impuls und Kanal','kleine Rückgaben mit Anschluss',up),panel('Impuls und Gegenreaktion','größere Rückgabe als Alternative',climaxReturn),"Kanal, Balance und Umkehr als Alternativen führen."),
 'c23-07': define("Kleine Rückgaben seit dem Trendstart messen",panel('Vor dem Trendstart','größere frühe Korrektur',pretrend.slice(0,3)),panel('Ab markiertem Start','Start nach den ersten drei Bars',pretrend,[],[3]),"Messung ab Trendstart, mit Hoch und Tief."),
 'c23-08': define("Viele Gegenbars können trotzdem wenig bewirken",panel('Kurzer Ausschnitt','rote Bars, wenig Rückgabe',slow.slice(0,6)),panel('Längere Käuferstruktur','höhere Tiefs trotz Gegenbars',slow),"Die zurückgewonnene Strecke zählt neben der Barfarbe."),
 'c23-09': define("Enger Kanal kann langsam und trotzdem stark sein",panel('Schneller erster Impuls','wenige große Käuferbars',opening),panel('Langsamer Fortschritt','viele kleine gerichtete Swings',slow),"Langsamer Fortschritt kann mit schwacher Gegenwirkung zusammenfallen."),
 'c23-10': define("Stop und Limit bieten unterschiedliche Einstiege",panel('Stop wartet auf Stärke','Buy-Stop über Signalhoch',signal,[[51,'Stoptrigger 51']]),panel('Limit wartet auf Rücklauf','Preisangebot unter aktuellem Schluss',signal,[[46,'Limitangebot 46']]),"Orderart, Auslösung und Risiko getrennt halten."),
 'c23-11': define("Einstand ist keine neue Chartstruktur",panel('Entry erneut besucht','Tief 50 liegt unter Entry 51',stopRetest,[[51,'Entry 51'],[44,'Schutz 44']],[5]),panel('Nach neuem Hoch','höheres Swingtief als neuer Bezug',stopResume,[[50,'Swingtief 50']],[6]),"Schutz nach Plan und bestätigter Struktur führen."),
 'c23-12': define("Der erste Trendlinienbruch ist kein Richtungswechsel",linePanel('Erster Linienbruch','größerer Rücklauf im Beartrend',lineBreak),linePanel('Neue Verkäuferstrecke','zweite Strecke ist erst jetzt sichtbar',lineResume),"Linienbruch und bestätigten Kontrollwechsel unterscheiden."),
 'c23-13': define("Ein späterer Rücksetzer darf größer werden",panel('Frühere Rückgabe 4','Hoch 50 bis Tief 46',small,[[50,'Hoch 50'],[46,'Tief 46']]),panel('Spätere Rückgabe 8','Hoch 60 bis Tief 52',large,[[60,'Hoch 60'],[52,'Tief 52']]),"Größere Rückgabe messen und neuen Anschluss abwarten."),
 'c23-14': define("Späte Beschleunigung kann Erschöpfung anzeigen",panel('Späte Beschleunigung','Ausgang der großen Bars noch offen',climax,[],[15,16]),panel('Größere Gegenreaktion','neue Bars verändern den Kontext',climaxReturn,[],[17,18,19,20]),"Beschleunigung schafft Aufmerksamkeit, keine sichere Gegenorder."),
 'c23-15': define("SMA-Test nach langer Trennung richtig benennen",averagePanel('22 Bars ohne SMA-Berührung','SMA 20 mit 19 früheren Schlusskursen',averageRun),averagePanel('Test und spätere Trennung','Bar 27 liegt ganz unter dem SMA',averageCross),"SMA 20 berechnen und Berührung von vollständiger Trennung unterscheiden."),
 'c23-16': define("Nachrichtenbar erst nach dem Schluss beurteilen",panel('Noch laufender Bar','Open 60, bisheriger Schluss 44',forming,[],[0]),panel('Derselbe Bar abgeschlossen','gleiches Tief 42, neuer Schluss 63',finalBar,[],[0]),"Laufenden Zustand und endgültigen Bar getrennt führen."),
 'c23-17': define("Kleiner Stop macht einen Gegenhandel nicht automatisch gut",panel('Bisherige Rückgabe 8','Hoch 60 bis Tief 52',large,[[60,'Hoch 60'],[52,'Tief 52']]),panel('Gegenplan braucht 10','60 → 55 → 50',large,[[60,'Hoch 60'],[55,'Short 55'],[50,'Ziel 50']]),"Risiko, Zielraum und Kontext gemeinsam prüfen."),
 'c23-18': define("Fortsetzung am Folgetag neu prüfen",panel('Vorherige Sitzung','gerichtete Käuferfolge',slow),panel('Neue Sitzung','Rücklauf und neue Käuferreaktion',nextDay,[[60,'neuer Triggerbezug 60']]),"Vorherige Stärke liefert Kontext, keine Pflichtposition am Folgetag."),
 'c23-19': define("Lernfall 1: Erste Gegenfarbe und spätere Käuferfolge",panel('Erster roter Bar','Richtung noch vorläufig',firstRed.slice(0,1)),panel('Käufer übernehmen','neuer Kontext nach dem ersten Bar',firstRed),"Neue Bars können die erste Richtungshypothese entkräften."),
 'c23-20': define("Lernfall 1: Schwacher Pullback-Bar mit klarem Trigger",panel('Roter Signalbar','Buy-Stop 51 noch nicht erreicht',signal,[[51,'Trigger 51']],[3]),panel('Spätere Käuferauslösung','Bar 5 handelt über 51',up,[[51,'Trigger 51']],[4]),"Die spätere Auslösung vom Signalzeitpunkt trennen."),
 'c23-21': define("Lernfall 2: Kleine Rückgaben trotz vieler Verkäuferbars",panel('Kleine Gegenstrecken','mehrere rote Bars im Ausschnitt',slow.slice(0,8)),panel('Fortsetzung bleibt gerichtet','höhere Tiefs und weitere Hochs',slow),"Die gemeinsame Struktur neben einzelnen Gegenbars lesen."),
 'c23-22': define("Lernfall 2: Fehlausbruch aus der kleinen Balance",panel('Erst der Bruch','Schluss 46 unter Rand 47',balance,[[47,'Balancerand 47']],[3]),panel('Dann Rückkehr','neuer Käuferanschluss',failedBalance,[[47,'Balancerand 47']],[4,5]),"Fehlausbruch prüfen, ohne den Schutz rückwirkend umzuschreiben."),
 'c23-23': define("Lernfall 3: Kompakte Pause vor dem nächsten Ausbruch",panel('Kompakte Pause','verschachtelte Spannen',compact,[[50,'Pausenhoch 50']],[3,4]),panel('Neuer Ausbruch','Käufer über der Pausengrenze',compactBreak,[[50,'Pausenhoch 50']],[5]),"Kompakte Pause und späteren Anschluss getrennt lesen."),
 'c23-24': define("Lernfall 3: Größerer Rücklauf nach langem Anstieg",panel('Früherer kleiner Rücklauf','vier Einheiten',small,[[50,'Hoch 50'],[46,'Tief 46']]),panel('Späterer größerer Rücklauf','acht Einheiten, neuer Kontext',large,[[60,'Hoch 60'],[52,'Tief 52']]),"Das Größenverhältnis ist ein Beispiel, keine Tagesregel."),
 'c23-25': define("Lernfall 4: Winzige Pausen im Verkäufertrend",panel('Kleine Gegenbars','erster Teil der Verkäuferstrecke',down.slice(0,6)),panel('Weitere Tiefs','Gegenstrecken bleiben begrenzt',down),"Korrekturgröße vor Barfarbe gewichten."),
 'c23-26': define("Lernfall 4: Erst der größere Rücklauf bricht die Linie",linePanel('Größerer Rücklauf','erste steile Linie gebrochen',lineBreak),linePanel('Fortsetzungsversuch','neue Verkäuferfolge danach',lineResume),"Ein erster Linienbruch kann einen Fortsetzungsversuch vorbereiten."),
 'c23-27': define("Lernfall 5: Früher Käuferbar scheitert nach Gap-down",panel('Käufertrigger besucht','Buy-Stop 52 wird im zweiten Bar erreicht',trapped,[[52,'Buy-Stop 52']],[1]),panel('Danach Plan entkräftet','Schutz 39 im dritten Bar erreicht',trappedFail,[[39,'Schutz 39']],[2]),"Erst Auslösung, dann Scheitern, dann neuer Plan."),
 'c23-28': define("Lernfall 5: Überlappender Reversal-Bar in der Bearflag",panel('Grüner Körper überlappt','kleine Gegenbalance im Beartrend',overlap,[],[2]),panel('Verkäuferausbruch','neue Tiefs statt bestätigter Umkehr',overlapFail,[],[4]),"Überlappung und Trendkontext neben dem Reversal-Körper prüfen."),
 'c23-29': define("Lernfall 6: Gap-up mit sofortigem Verkäuferanschluss",panel('Gap-up und frühe Verkäufe','Open 55 über Schluss 30',gapOpenRetest.slice(0,2),[[30,'Schluss 30'],[55,'Open 55']]),panel('Gescheiterter Öffnungstest','Rücklaufhoch 54 bleibt unter 55',gapOpenRetest,[[55,'Open 55']],[3]),"Richtung aus der Folge statt aus dem Gap ableiten."),
 'c23-30': define("Lernfall 6: Gap-down ohne nachhaltigen Verkaufsdruck",panel('Gap-down ohne Anschluss','Inside-Bar nach großem Verkauf',gapClimax,[[60,'alter Schluss 60']],[4]),panel('Spätere Käuferreaktion','neue Käuferwirkung nach der Pause',gapReverse,[[60,'alter Schluss 60']],[5,6]),"Großen Anfangsbar und tragfähigen Anschluss unterscheiden."),
 'c23-31': define("Lernfall 7: Test des Vortagstiefs mit neuem Käuferbar",panel('Test und Käuferbar','Vortagstief 45 wird unterschritten',yesterdayTest,[[45,'altes Tief 45'],[50,'Buy-Stop 50']],[3]),panel('Neue Auslösung','spätere Bewegung über 50',yesterdayLong,[[50,'Buy-Stop 50']],[4]),"Bekannten Bezug, Signal und Trigger getrennt führen."),
 'c23-32': define("Lernfall 7: Erster Trendversuch wird zur Range",panel('Frühe Richtung wird Balance','Gegenhandel nach dem Anfang',changing),panel('Späterer neuer Ausbruch','neue Verkäuferstrecke aus Balance',changingBreak,[[51,'Balance-Unterbezug 51']],[10]),"Frühe Trendidee und spätere Rangephase getrennt benennen."),
 'c23-33': define("Lernfall 8: Open am Hoch und erster Rücklauf darunter",panel('Open auf höchstem Preis','Open = Hoch des ersten Bars = 78',openHigh.slice(0,2),[[78,'Open und Hoch 78']]),panel('Kleine grüne Rücklaufbars','erster Rücklauf dreht wieder ab',openHigh,[[78,'frühes Hoch 78']],[2,3,4,5,6]),"Kleine grüne Körper können eine Bearflag bilden."),
 'c23-34': define("Lernfall 8: Früher Umkehrversuch ohne Füllung",panel('Erster Buy-Stop ungefüllt','nach Signalhoch 35 kein Besuch von 36',unfilled,[[36,'Buy-Stop 36']],[1]),panel('Neue spätere Käuferstrecke','späterer Impuls ist eigener Zeitpunkt',lateReverse,[[36,'alter Trigger 36']],[5,6]),"Ungefüllte Idee und spätere neue Bewegung getrennt bilanzieren."),
 'c23-35': define("Lernfall 9: Früher Beartrend verliert seine Fortsetzung",panel('Erster Beartrendversuch','kleine Balance statt neuer Tiefs',earlyBear),panel('Höheres Tief und Ausbruch','neue Käuferstruktur',earlyReverse,[[37,'Balancehoch 37']],[8,9]),"Fehlenden Verkäuferanschluss als neue Information nutzen."),
 'c23-36': define("Lernfall 9: Projektionen mit verschiedenen Ankern",panel('Ziele mit benannten Ankern','50 − 30 = 20; 50 + 20 = 70',projection,[[30,'Basis 30'],[65,'Folgebein 65'],[70,'Projektionsziel 70']]),panel('Derselbe Tag verdichtet','OHLC-Hülle mit Schluss 49',[aggregateDay(projection)],[[49,'Schluss 49']]),"Start, Länge und Ansatzpunkt jeder Projektion nennen."),
 'c23-37': define("Lernfall 10: Wedgeformen korrigieren nur seitwärts",panel('Drei Hochanläufe','Korrektur bleibt klein und seitwärts',wedge,[],[0,2,4]),panel('Käufer setzen fort','Wedgeform ohne große Gegenstrecke',wedgeResume,[],[9,10,11]),"Musterform an ihrer tatsächlichen Folge messen."),
 'c23-38': define("Lernfall 10: Nachrichtenreaktion und zu früh enger Schutz",panel('Signal und engerer Entry-Bezug','Rücklauf unter Entry-Tief 51',signalProtection,[[43,'Signal-Schutz 43'],[50,'Entry-Schutz 50']],[2]),panel('Ursprünglicher Schutz hält','neues Hoch nach Rücklauf',protectionResume,[[43,'Signal-Schutz 43']],[3,4]),"Signalbar-Schutz nicht mit Entry-Bar-Schutz verwechseln."),
 'c23-39': define("Lernfall 11: Opening-Balance und geplante Positionsumkehr",panel('Eröffnungsbalance bricht auf','Buy-Stop 56 im vierten Bar erreicht',openingBalance,[[56,'Buy-Stop 56'],[45,'Umkehr 45']],[3]),panel('Long 1 → Verkauf 2 → Short 1','erste Einheit schließt den Long',openingFail,[[45,'Umkehr 45']],[4]),"Schließen und Neueröffnen bei Umkehrorders getrennt rechnen."),
 'c23-40': define("Lernfall 11: Größere Gegenreaktion und späteres Scheitern",panel('Größere Gegenreaktionen','nicht durchgehend winzige Rückgabe',bearReaction,[],[5,6,7,12,13,14,15]),panel('Doppeltest und Scheitern','neuer Verkäuferanschluss zum Schluss',bearFailure,[[58,'Doppeltesthoch 58']],[16,17,18,19]),"Etikett, tatsächliche Gegenstrecke und neuer Anschluss getrennt prüfen."),
};

export const chapterTwentyThreeDescriptions = Object.fromEntries(
  Object.entries(chapterTwentyThreeCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterTwentyThreeScenarioId, string>;

function PanelDrawing({ value, x }: { value: Panel; x: number }) {
  const width = 343;
  const y = (price: number) => 260 - price * 1.55;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(23, spacing * 0.48);
  const cx = (index: number) => x + 26 + (index + 0.5) * spacing;
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.zones?.map(([low,high], index) => <rect key={`zone-${index}`} className="chart-zone" x={x+15} y={y(high)} width={width-30} height={y(low)-y(high)} rx={5} />)}
    {value.lines.map((line, index) => <g key={`line-${index}`}><line
      className="c23-teaching-line" data-kind={line.kind}
      x1={cx(line.start[0])} y1={y(line.start[1])}
      x2={cx(line.end[0])} y2={y(line.end[1])}
      stroke="currentColor" strokeWidth={2} opacity={0.65}
      strokeDasharray={line.kind === 'channel' ? '6 4' : line.kind === 'reference' ? '2 4' : line.kind === 'average' ? '8 3 2 3' : undefined} />{line.label ? <text className="chart-small" x={x + width - 18 - (index % 3) * 95} y={y(line.end[1]) - 5} textAnchor="end">{line.label}</text> : null}</g>)}
    {value.bars.map(([open, high, low, close], index) => {
      const tone = close >= open ? 'bull' : 'bear';
      const xBar = cx(index);
      return <g key={index}>
        {value.focus.includes(index) ? <rect className="chart-zone"
          x={xBar - bodyWidth / 2 - 7} y={y(high) - 8}
          width={bodyWidth + 14} height={y(low) - y(high) + 16} rx={6} /> : null}
        <line className={`candle-wick ${tone}`} x1={xBar} x2={xBar} y1={y(high)} y2={y(low)} />
        <rect className={`candle-body ${tone}`} x={xBar - bodyWidth / 2}
          y={Math.min(y(open), y(close))} width={bodyWidth}
          height={Math.max(3, Math.abs(y(open) - y(close)))} rx={2} />
      </g>;
    })}
    <text className="chart-small strong" x={x + width / 2} y={286} textAnchor="middle">{value.note}</text>
  </g>;
}

export function ChapterTwentyThreeChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterTwentyThreeCharts, scenario)) return null;
  const definition = chapterTwentyThreeCharts[scenario as ChapterTwentyThreeScenarioId];
  return <g className="chapter-twenty-three-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
