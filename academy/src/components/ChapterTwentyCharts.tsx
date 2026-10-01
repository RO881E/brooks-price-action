import type { ChartScenarioId, ChapterTwentyScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number]; end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average'; label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; }

const bars = (points: readonly number[]): Bar[] => points.slice(1).map((close,i) => [points[i],Math.max(points[i],close)+1,Math.min(points[i],close)-1,close]);
const mirror = (values: readonly Bar[]): Bar[] => values.map(([o,h,l,c])=>[100-o,100-l,100-h,100-c]);
const panel = (title: string, note: string, values: readonly Bar[], refs: readonly (readonly [number,string])[] = [], focus: readonly number[] = [], extra: readonly TeachingLine[] = []): Panel => ({title,note,bars:values,focus,lines:[...refs.map(([price,label]): TeachingLine=>({start:[0,price],end:[values.length-1,price],kind:'reference',label})),...extra]});
const define = (heading: string, left: Panel, right: Panel, footer: string): Definition => ({heading,panels:[left,right],footer,description:`Eigenes schematisches Beispiel: links ${left.title} (${left.note}), rechts ${right.title} (${right.note}). Gepunktet: bekannte Preisreferenz; durchgezogen: zuvor festgelegte Trendlinie. ${footer}`});
export function aggregateThree(values: readonly Bar[]): Bar[] {
 if(values.length%3!==0) throw new Error('Only complete three-bar groups');
 return Array.from({length:values.length/3},(_,i)=>{const group=values.slice(i*3,i*3+3);return [group[0][0],Math.max(...group.map(b=>b[1])),Math.min(...group.map(b=>b[2])),group[2][3]];});
}
const two = bars([24,36,50,44,39,49,62,70]);
const abc = bars([78,68,60,65,69,62,54,62,73]);
abc[1] = [68,69,60,60];
abc[5] = [62,63,54,54];
const higherC = bars([78,68,60,65,69,65,63,70,77]);
higherC[1] = [68,69,60,60];
higherC[5] = [65,66,63,63];
const failed = bars([30,45,60,52,47,55,60,51,40]);
const success = bars([30,45,60,52,47,55,64,74,82]);
const complex = bars([24,33,43,40,47,42,36,46,54,50,59,68,65]);
const detail = bars([24,32,39,36,43,50,46,41,39,49,61,66,70]);
const double = bars([30,44,60,50,42,53,60,48,36]);
const bothAbove = bars([30,45,60,49,43,53,66,58,51,63,75,65]);
const onlySecond = bars([30,45,60,49,43,51,57,50,45,55,67,58]);
bothAbove[1] = [45,60,44,60];
onlySecond[1] = [45,60,44,60];
const unclear = bars([45,52,46,54,48,55,47,53,44,51,46]);
const linePath = bars([24,36,48,43,57,65,46,39,34]);
const trendLine: TeachingLine = {start:[0,23],end:[7,58],kind:'trend'};
export const chapterTwentyCharts: Record<ChapterTwentyScenarioId,Definition> = {
 'c20-01': define('Beine auf einer benannten Ebene',panel('Zwei größere Käuferbeine','Rücklauf trennt die Schübe',two,[],[1,3,6]),panel('Kleinere Teilbewegungen','mehr Wechsel im Detail',complex), 'Zählregel vor der Beobachtung festlegen'),
 'c20-02': define('Zweiter Versuch bleibt eine offene Möglichkeit',panel('Erneuter Käuferanschluss','Rücklauf zwischen zwei Schüben',two),panel('Kein zweiter Käuferanschluss','der erste Schub wird zurückgenommen',bars([24,36,50,43,34,25,18])), 'Die tatsächliche Folge entscheidet'),
 'c20-03': define('Trendbeine und Rücklaufbeine',panel('Zwei Schübe im Trend','größere Richtung aufwärts',two),panel('Zwei Schübe im Rücklauf','A und C arbeiten abwärts',abc,[],[1,5]), 'Richtung immer relativ zum größeren Kontext'),
 'c20-04': define('ABC: zwei Gegenbeine, eine Erholung',panel('A und B bereits sichtbar','60 → 69 als Zwischenbewegung',abc.slice(0,4),[[78,'Start 78']], [1,3]),panel('C und spätere Reaktion','zweites Gegenbein bis 54',abc,[[78,'Start 78']], [5,6]), 'A und C sind die beiden Gegenbeine'),
 'c20-05': define('Zweites Gegenbein mit unterschiedlichem Tief',panel('C unter A','60 → 54',abc,[[60,'A-Tief 60']], [5]),panel('C bleibt über A','60 → 63',higherC,[[60,'A-Tief 60']], [5]), 'Versuchszahl und Extremvergleich getrennt lesen'),
 'c20-06': define('ABC-Rücklauf im Bärenkontext',panel('Erstes Käuferbein und Pause','gespiegelter Gegenabschnitt',mirror(abc.slice(0,4))),panel('Zweites Käuferbein','anschließend Verkäuferreaktion',mirror(abc)), 'A und C arbeiten hier aufwärts'),
 'c20-07': define('Bruch einer zuvor festgelegten Trendlinie',panel('Vor dem Gegenbruch','alte Anker bleiben fest',linePath.slice(0,5),[],[],[{...trendLine,end:[4,43]}]),panel('Neuer Gegenabschnitt','Bars fallen unter dieselbe Linie',linePath,[],[5,6,7],[trendLine]), 'Kleiner Linienbruch ist noch keine große Umkehr'),
 'c20-08': define('Erster Impuls und erneuter Test',panel('Noch vor dem Test','nur bisherige Bars bekannt',success.slice(0,5),[[61,'erste Spitze 61']]),panel('Neue Käuferfolge','Test und Anschluss erst jetzt sichtbar',success,[[61,'erste Spitze 61']],[5,6,7]), 'Spätere Preise nicht früher vorwegnehmen'),
 'c20-09': define('Zwei Tests: Zurückweisung oder Anschluss',panel('Beide Versuche begrenzt','neue Verkäuferfolge',failed,[[61,'Testzone 61']],[1,5,6,7]),panel('Zweiter Versuch erfolgreich','Käufer handeln weiter darüber',success,[[61,'Testzone 61']],[5,6,7]), 'Ein Test allein ist noch kein Scheitern'),
 'c20-10': define('Fortsetzung beim zweiten Versuch',panel('Vor dem Durchbruch','gleicher erster Schub und Rücklauf',success.slice(0,5),[[61,'erste Spitze 61']]),panel('Anschluss über der Spitze','neue höhere Schlusskurse',success,[[61,'erste Spitze 61']],[5,6,7]), 'Mustername ersetzt keine Anschlussprüfung'),
 'c20-11': define('Lokaler Käuferanstieg im Bärenkontext',panel('Erster Rücklaufabschnitt','bekanntes größeres Hoch bleibt 88',failed.slice(0,5),[[88,'großes Hoch 88']]),panel('Zweiter Test und Verkäuferfolge','lokaler Anstieg bleibt darunter',failed,[[88,'größeres Hoch 88']],[5,6,7]), 'Lokale Richtung und größere Struktur trennen'),
 'c20-12': define('Testreaktion ohne sichtbare Teilnehmerliste',panel('Zweiter Besuch','Preis erreicht den alten Bereich',double.slice(0,6),[[61,'Testzone 61']],[5]),panel('Beobachtbare Zurückweisung','neue Verkäuferstrecke',double,[[61,'Testzone 61']],[6,7]), 'Gewinnmitnahmen bleiben eine mögliche Erklärung'),
 'c20-13': define('Komplexe Beine mit kleineren Unterbrechungen',panel('Erstes größeres Bein','kleine Rückgabe innerhalb des Schubs',complex.slice(0,6),[],[2,3,4]),panel('Zweites größeres Bein','zwei kleine Schübe darin',complex,[],[7,8,9,10,11]), 'Nicht jede kleine Pause hat denselben Rang'),
 'c20-14': define('Ein Preisweg, zwei Darstellungen',panel('Zwölf Ausgangsbars','gleiche chronologische Preise',detail),panel('Vier Dreierbars','Open / High / Low / Close aggregiert',aggregateThree(detail)), 'Aggregation ist keine unabhängige Bestätigung'),
 'c20-15': define('Kontext gezielt prüfen und zurückkehren',panel('Arbeitschart','Zählung auf festgelegter Ebene',detail),panel('Größerer Kontext','dieselben Daten verdichtet',aggregateThree(detail)), 'Eine Ansicht dient einer vorher benannten Frage'),
 'c20-16': define('Doppelhoch und gespiegeltes Doppeltief',panel('Zwei Besuche am Hoch','Gegenbewegung trennt die Tests',double,[[61,'Hochzone 61']],[1,5]),panel('Zwei Besuche am Tief','gespiegelte Käuferreaktion',mirror(double),[[39,'Tiefzone 39']],[1,5]), 'Gleichheit auf den letzten Tick ist nicht nötig'),
 'c20-17': define('Alte Spitze plus zweibeiniger späterer Test',panel('Erstes Extrem bekannt','Rücklauf folgt auf das alte Hoch',onlySecond.slice(0,4),[[60,'altes Hoch 60']]),panel('Zwei spätere Testschübe','erster bleibt unter der alten Spitze',onlySecond,[[60,'altes Hoch 60']],[5,9]), 'Zählstart und Bezugspunkt ausdrücklich benennen'),
 'c20-18': define('Zwei Testschübe überschreiten das alte Hoch',panel('Erster späterer Test','bereits oberhalb von 60',bothAbove.slice(0,6),[[60,'altes Hoch 60']],[5]),panel('Zweiter späterer Test','erneute Überschreitung nach Rücklauf',bothAbove,[[60,'altes Hoch 60']],[5,9]), 'Drei Schübe insgesamt, zwei Beine im späteren Test'),
 'c20-19': define('Nur der zweite Testschub überschreitet',panel('Erster späterer Test','High 58 bleibt unter 60',onlySecond.slice(0,6),[[60,'altes Hoch 60']],[5]),panel('Zweiter späterer Test','High 68 handelt über 60',onlySecond,[[60,'altes Hoch 60']],[9]), 'Zwei Versuche brauchen nicht zwei neue Hochs'),
 'c20-20': define('Größere Beine mit ungleicher innerer Form',panel('Kompaktes erstes Bein','einfacher Verlauf',two.slice(0,4)),panel('Komplexeres zweites Bein','kleine Rückgabe im größeren Anstieg',complex), 'Stärke, Dauer und Form auf derselben Ebene vergleichen'),
 'c20-21': define('Unklare Zählung und spätere Klarheit',panel('Unruhiger Abschnitt','Hierarchie bleibt uneindeutig',unclear),panel('Anderes klares Lernbeispiel','zwei deutlich getrennte Schübe',two), 'Auslassen ist eine gültige Entscheidung'),
 'c20-22': define('Replay: offene Erwartung und neue Folge',panel('Vor dem zweiten Test','Zählregel und Referenz festhalten',onlySecond.slice(0,6),[[60,'bekannte Referenz 60']]),panel('Späteres Testergebnis','neue Bars getrennt beurteilen',onlySecond,[[60,'bekannte Referenz 60']],[6,7,8,9]), 'Zählung und eigener Orderplan getrennt prüfen'),
};

export const chapterTwentyDescriptions = Object.fromEntries(
  Object.entries(chapterTwentyCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterTwentyScenarioId, string>;

function PanelDrawing({ value, x }: { value: Panel; x: number }) {
  const width = 343;
  const y = (price: number) => 260 - price * 1.55;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(23, spacing * 0.48);
  const cx = (index: number) => x + 26 + (index + 0.5) * spacing;
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.lines.map((line, index) => <g key={`line-${index}`}><line
      className="c20-teaching-line" data-kind={line.kind}
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

export function ChapterTwentyChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterTwentyCharts, scenario)) return null;
  const definition = chapterTwentyCharts[scenario as ChapterTwentyScenarioId];
  return <g className="chapter-twenty-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
