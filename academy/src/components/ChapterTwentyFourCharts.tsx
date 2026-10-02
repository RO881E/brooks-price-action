import type { ChartScenarioId, ChapterTwentyFourScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number]; end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average'; label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; zones?: readonly (readonly [number,number])[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; }

const bars = (points: readonly number[], wick=1): Bar[] => points.slice(1).map((c,i)=>[points[i],Math.max(points[i],c)+wick,Math.min(points[i],c)-wick,c]);
const panel = (title: string,note: string,values: readonly Bar[],refs: readonly (readonly [number,string])[] = [],focus: readonly number[] = []): Panel=>({title,note,bars:values,focus,lines:refs.map(([price,label])=>({start:[0,price],end:[values.length-1,price],kind:'reference',label}))});
const define = (heading: string,left: Panel,right: Panel,footer: string): Definition=>({heading,panels:[left,right],footer,description:`Eigenes schematisches Beispiel: links ${left.title} (${left.note}), rechts ${right.title} (${right.note}). Gepunktet: Preisreferenz; durchgezogen: Trendlinie; Strich-Punkt: berechneter SMA 20. ${footer}`});
export function aggregate(values: readonly Bar[]): Bar {
 if(!values.length)throw new Error('Empty price path');
 return [values[0][0],Math.max(...values.map(b=>b[1])),Math.min(...values.map(b=>b[2])),values.at(-1)![3]];
}
export function aggregateMinutes(values: readonly Bar[], period: number): Bar[] {
 if(!Number.isInteger(period)||period<1||values.length%period!==0)throw new Error('Complete aligned periods required');
 return Array.from({length:values.length/period},(_,i)=>aggregate(values.slice(i*period,(i+1)*period)));
}
const sma20=(values: readonly Bar[]):number[]=>{
 const closes=[...Array(19).fill(40),...values.map(b=>b[3])];
 return values.map((_,i)=>closes.slice(i,i+20).reduce((sum,c)=>sum+c,0)/20);
};
const averagePanel=(title:string,note:string,values:readonly Bar[]):Panel=>{
 const averages=sma20(values);
 return {...panel(title,note,values),lines:averages.slice(1).map((v,i)=>({start:[i,averages[i]],end:[i+1,v],kind:'average'}))};
};
const early=bars([35,48,44,60,56,70]);
const reversal=[...early,...bars([70,60,49,53,43,46,36,39,29])];
const upper: Bar[] = [[62,69,60,66],[66,71,61,64],[64,70,60,68],[68,73,63,65]];
const rangeBreak: Bar[] = [...upper,[65,66,45,47],[47,53,46,51],[51,52,37,39],[39,44,38,42],[42,43,30,32]];
const firstSpike=rangeBreak.slice(0,5);
const growing=bars([70,59,45,50,39,43,31,36,46]);
const grown=[...growing,...bars([46,43,51,48,59,55,66,63,74])];
const failedBuyer=bars([55,68,62,69,60]);
const failure=[...failedBuyer,...bars([60,49,54,43,46,34])];
const stopTest: Bar[] = [[65,67,46,48],[48,55,47,53],[53,54,39,40]];
const stopTrend: Bar[] = [...stopTest,...bars([40,44,34,38,29])];
const nextSession=bars([35,43,46,41,31,34,24]);
const caseOne: Bar[] = [[31,44,30,40],...bars([40,50,60,66]),[66,67,30,34],[34,40,32,38],[38,39,34,36],[36,55,35,53],[53,70,52,68],[68,80,67,78],[78,79,60,62],[62,74,61,72],[72,73,60,60],[60,67,60,65],[65,69,60,62],[62,66,60,64],[64,65,60,60],[60,61,45,46],[46,50,44,49],[49,50,38,40],[40,45,39,44],[44,45,32,34],[34,36,30,31]];
const openingRange: Bar[] = [[34,44,30,40],[40,42,32,35],[35,39,33,37],[37,38,34,36]];
const openingLong: Bar[] = [...openingRange,[36,51,35,50],[50,58,49,57]];
const higherHigh=caseOne.slice(0,10);
const higherFail=caseOne.slice(0,13);
const linePanel=(title:string,note:string,values:readonly Bar[]):Panel=>({...panel(title,note,values),lines:[{start:[7,35],end:[10,83],kind:'trend'}]});
const bearStart: Bar[] = [[70,71,52,54],[54,55,40,41],[41,42,27,28]];
const bearPause: Bar[] = [...bearStart,...bars([28,38,43,37,30])];
const doubleTop: Bar[] = [[60,60,43,45],[45,50,40,46],[46,60,45,58],[58,59,46,47],[47,59,46,57]];
const topBreak: Bar[] = [...doubleTop,[57,58,39,40],[40,42,25,27],[27,30,20,22]];
const failedWedge: Bar[] = [[59,60,56,58],[58,59,53,55],[55,57,50,54]];
const wedgeBreak: Bar[] = [...failedWedge,[54,55,43,44],[44,46,38,39]];
const wedgeBottom: Bar[] = [[70,71,40,42],[42,54,41,52],[52,53,30,32],[32,44,31,42],[42,43,20,22]];
const wedgeRecovery: Bar[] = [...wedgeBottom,...bars([22,31,27,38])];
const failedLowTwo: Bar[] = [[20,21,19,20],[20,33,19,32],[32,34,30,31],[31,32,27,28],[28,36,28,35],[35,36,32,33],[33,34,29,30]];
const buyerTrigger: Bar[] = [...failedLowTwo,[30,43,29,42],[42,50,41,49]];
const bullChannel=bars([22,33,31,38,36,43,41,48,46,53,51,58]);
const bullSpike=[...bullChannel,...bars([58,68,78,86])];
export const minuteBars: readonly Bar[] = bars([20,24,28,30,29,28,29,34,38,40,39,38,39,44,48,50,52,54,56,58,60,61,60,59,58,57,64,68,70,73,76],.4);
const threeEarly=aggregateMinutes(minuteBars.slice(0,15),3);
const fiveEarly=aggregateMinutes(minuteBars.slice(0,15),5);
const three=aggregateMinutes(minuteBars,3),five=aggregateMinutes(minuteBars,5);
export const chapterTwentyFourCharts: Record<ChapterTwentyFourScenarioId,Definition> = {
 'c24-01': define("Ein Umkehrtag hat zwei gerichtete Abschnitte",panel('Früher Käuferabschnitt','die weitere Sitzung ist noch offen',early),panel('Spätere Verkäuferkontrolle','Gegenrichtung bis zum gezeigten Schluss',reversal),"Frühe Richtung und spätere Kontrolle getrennt prüfen."),
 'c24-02': define("Versetzte Ranges können einer Umkehr vorausgehen",panel('Obere Balance','bekannter Bereich vor dem Ausbruch',upper,[[60,'Unterrand 60'],[73,'Oberrand 73']]),panel('Neuer tieferer Abschnitt','Bereichswechsel und Verkäuferanschluss',rangeBreak,[[60,'alter Rand 60']],[4,6,8]),"Tagesmuster als Beschreibung der Entwicklung verwenden."),
 'c24-03': define("Ein kräftiger Gegenspike verändert die Arbeitsannahme",panel('Beginn des Gegenspikes','erster kräftiger Verkäuferbar',firstSpike,[],[4]),panel('Weitere Verkäuferwirkung','neue Tiefs nach kurzem Rücklauf',rangeBreak,[],[6,8]),"Gegenspike und Anschluss zusammen beurteilen."),
 'c24-04': define("Ein später Einstieg braucht eine begrenzte Größe",panel('Früherer Entry-Bezug','Schutz 67, Entry 48: Abstand 19',rangeBreak,[[67,'Schutz 67'],[48,'Entry 48']]),panel('Späterer Entry-Bezug','Schutz 67, Entry 40: Abstand 27',rangeBreak,[[67,'Schutz 67'],[40,'Entry 40']]),"Schutzabstand, Größe und Reststrecke zusammen planen."),
 'c24-05': define("Ein wachsender Pullback kann zum Gegentrend werden",panel('Erste Käuferreaktion','Bearflag oder neuer Käuferimpuls?',growing,[],[7]),panel('Wachsende Gegenbewegung','Käufer über dem alten Startpreis 70',grown,[[70,'alter Start 70']]),"Die Korrekturhypothese am tatsächlichen Verlauf prüfen."),
 'c24-06': define("Der alte Plan darf neue Preiswirkung nicht überstimmen",panel('Letzter Käuferanlauf','neues Hoch wird wieder zurückgenommen',failedBuyer),panel('Neue Verkäuferfolge','tieferer Anschluss statt alter Erwartung',failure),"Neue Information vor der alten Erwartung gewichten."),
 'c24-07': define("Kanalmanagement nach bestätigten Swingpunkten",panel('Enger Stop überschritten','Hoch 55 erreicht den Bezug 54',stopTest,[[54,'enger Stop 54'],[68,'Strukturschutz 68']],[1]),panel('Nach neuem Tief','Rücklaufhoch als eigener Strukturbezug',stopTrend,[[55,'Rücklaufhoch 55']]),"Schutzführung aus dem vorher gewählten Plan ableiten."),
 'c24-08': define("Späte Umkehr kann am Folgetag Anschluss finden",panel('Späte vorherige Sitzung','Verkäufer bis zum Schluss',reversal),panel('Neue Sitzung','Rücklauf und neuer Verkäuferanschluss',nextSession),"Vortagesstärke ist Kontext, keine automatische neue Order."),
 'c24-09': define("Lernfall 1: Oberer Docht und ungewöhnlicher Gegenspike",panel('Früher oberer Docht','Verkäufer schon im Eröffnungsbar',caseOne.slice(0,4),[],[0]),panel('Ungewöhnlich großer Gegenspike','Test des frühen Tiefs 30',caseOne.slice(0,5),[[30,'frühes Tief 30']],[4]),"Gegenwirkung nicht wegen früher Käuferbars ausblenden."),
 'c24-10': define("Lernfall 1: Eröffnungstest und kompaktes Longsetup",panel('Range 14 und zwei Inside-Bars','44 minus 30 = 14',openingRange,[[30,'unten 30'],[44,'oben 44']],[2,3]),panel('Spätere Käuferauslösung','14 / 40 = 35 Prozent Referenzbreite',openingLong,[[40,'Buy-Stop 40']],[4]),"Auslösung und Erwartung an die Fortsetzung getrennt halten."),
 'c24-11': define("Lernfall 1: Höheres Hoch nach bereits sichtbarem Verkaufsdruck",panel('Höheres Hoch nach Gegenspike','früher Verkaufsdruck bleibt sichtbar',higherHigh,[[80,'neues Hoch 80']],[4,8,9]),panel('Spätere Rücknahme','tieferer Verkäuferanschluss',higherFail,[[80,'altes Hoch 80']],[10,12]),"Vorherige Gegenstärke und neue Rücknahme gemeinsam lesen."),
 'c24-12': define("Lernfall 1: Linienbruch, tieferes Hoch und SMA 20",linePanel('Käuferlinie gebrochen','Gegenwirkung nach dem höheren Hoch',higherFail),averagePanel('Tiefere Folge unter SMA 20','SMA aus 19 früheren Schlusskursen 40',caseOne),"Swingstruktur und Durchschnitt zusammen prüfen."),
 'c24-13': define("Lernfall 1: Ausbruch, offener Zwischenraum und Projektion",panel('Alter Unterrand bleibt getrennt','Rand 60, Rücklaufhoch 50',caseOne.slice(0,19),[[60,'Rand 60'],[50,'Rücklauf 50']],[17,18]),panel('Mitte 55, Beispielziel 30','80 → 55 → 30',caseOne,[[55,'Mitte 55'],[30,'Beispielziel 30']],[22]),"Zwischenraum, Mittelpunkt und Zielbesuch getrennt nachweisen."),
 'c24-14': define("Lernfall 1: Rücklauf gegen einen zu engen Shortstop",panel('Enger Stop tatsächlich erreicht','kleiner Rücklauf läuft über 54',stopTest,[[54,'enger Stop 54']],[1]),panel('Spätere neue Tiefs','Ausführung wird nicht rückgängig',stopTrend,[[55,'Rücklaufhoch 55']]),"Ausführung und späteres Trendbild getrennt bilanzieren."),
 'c24-15': define("Lernfall 1: Tagesdoji mit langem oberen Docht",panel('Der ganze innere Preisweg','Anstieg, Balance, spätere Gegenfolge',caseOne),panel('Exakt verdichteter Tagesbar','Open 31, Hoch 80, Tief 30, Schluss 31',[aggregate(caseOne)]),"Verdichtung und Handelsentscheidung auf Tagesbasis unterscheiden."),
 'c24-16': define("Lernfall 2: Starker Verkäuferstart und mehrere Klimaxbars",panel('Mehrere große Verkäufe','Gap-up 70 über altem Schluss 60',bearStart,[[60,'alter Schluss 60']],[0,1,2]),panel('Größere Gegenpause','neue Prüfung nach dem frühen Impuls',bearPause,[[60,'alter Schluss 60']],[3,4]),"Impulswirkung und mögliche Erschöpfung gemeinsam prüfen."),
 'c24-17': define("Lernfall 2: Doppeltest als Bearflag und neue Tiefs",panel('Doppeltest am oberen Bezug','Hochs 60 und 59',doubleTop,[[60,'oberer Bezug 60'],[40,'Basis 40']],[2,4]),panel('Neue Tiefs und Zielbesuch','40 − (60 − 40) = 20',topBreak,[[20,'Projektionsziel 20']],[5,7]),"Testbereich, Auslösung und Projektion zeitlich trennen."),
 'c24-18': define("Lernfall 2: Gescheiterte Wedge-Bullflag",panel('Mögliche Wedge-Bullflag','drei Anläufe bis Untergrenze 50',failedWedge,[[60,'oben 60'],[50,'unten 50']],[0,1,2]),panel('Ausbruch scheitert nach unten','50 − (60 − 50) = 40',wedgeBreak,[[40,'Projektionsziel 40']],[3,4]),"Musterform an Ausbruch und Anschluss messen."),
 'c24-19': define("Lernfall 2: Drei Tiefanläufe und die Größe der Erholung",panel('Drei tiefere Anläufe','Tiefs 40, 30 und 20',wedgeBottom,[],[0,2,4]),panel('Erste kurze Erholung','Höhe und Dauer weiter prüfen',wedgeRecovery,[[20,'letztes Tief 20']],[5,6,7]),"Form, Dauer und Strecke der Erholung gemeinsam lesen."),
 'c24-20': define("Lernfall 2: Höheres Tief und gescheiterter Verkäuferausbruch",panel('Zwei Verkäuferversuche','Tiefs 27 und 29; Trigger 35 noch offen',failedLowTwo,[[35,'Buy-Stop 35']],[3,6]),panel('Spätere Käuferauslösung','nach dem höheren Tief 29',buyerTrigger,[[35,'Buy-Stop 35']],[7]),"Versuche zählen und die neue Käuferauslösung abwarten."),
 'c24-21': define("Lernfall 2: Kein deutlicher Rücksetzer nach dem Käuferbein",panel('Erstes Käuferbein','kleine Rückgaben im Ausschnitt',bullChannel.slice(0,5)),panel('Gegenbein bleibt schwach','höhere Tiefs statt großem Rücklauf',bullChannel),"Ausbleibende Gegenwirkung als Information verwenden."),
 'c24-22': define("Lernfall 2: Später Käuferspike in den oberen Bereich",panel('Kanal vor der Beschleunigung','alter oberer Bereich noch nicht erreicht',bullChannel,[[70,'alter oberer Bereich 70']]),panel('Späterer Käuferspike','neuer Anschluss in den oberen Bereich',bullSpike,[[70,'alter oberer Bereich 70']],[11,12,13]),"Neuen Anschluss vor das passende Tagesetikett stellen."),
 'c24-23': define("Lernfall 3: Gleiche Preise, unterschiedliche Bargrenzen",panel('3 Minuten · gleiche 15 Minuten','zwei Inside-Gegenbars sichtbar',threeEarly,[],[1,3]),panel('5 Minuten · gleiche 15 Minuten','Pausen verschmelzen mit Nachbarbars',fiveEarly),"Zeitaggregation verändert Signalformen, nicht die zugrunde liegenden Preise."),
 'c24-24': define("Lernfall 3: Gegenfarbe bei gemeinsamem Käufertrigger",panel('3 Minuten · gleiche 30 Minuten','Signal endet bei Minute 24; Trigger 62',three,[[62,'Buy-Stop 62']],[7,8]),panel('5 Minuten · gleiche 30 Minuten','Signal endet bei Minute 25; Trigger 62',five,[[62,'Buy-Stop 62']],[4,5]),"Signalform, Barabschluss und späteren Triggerbesuch trennen."),
};

export const chapterTwentyFourDescriptions = Object.fromEntries(
  Object.entries(chapterTwentyFourCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterTwentyFourScenarioId, string>;

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
      className="c24-teaching-line" data-kind={line.kind}
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

export function ChapterTwentyFourChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterTwentyFourCharts, scenario)) return null;
  const definition = chapterTwentyFourCharts[scenario as ChapterTwentyFourScenarioId];
  return <g className="chapter-twenty-four-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
