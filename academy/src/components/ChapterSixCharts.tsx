import type { ChapterSixScenarioId, ChartScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
interface Panel {
  title: string;
  note: string;
  bars: readonly Bar[];
  focus?: readonly number[];
  range?: readonly [low: number, high: number];
  level?: readonly [price: number, label: string];
}
interface Definition {
  heading: string;
  panels: readonly Panel[];
  footer: string;
  description: string;
}

// Hand-constructed relative OHLC paths. These are teaching sketches: no book
// chart, ticker, original price series, figure layout or image is reproduced.
const paths = {
  bull: [[22,43,18,40],[40,58,36,55],[55,70,51,67],[67,80,62,76],[76,88,71,85]] as Bar[],
  bear: [[83,87,65,69],[69,74,50,55],[55,60,37,42],[42,47,23,28],[28,32,12,17]] as Bar[],
  bullPullback: [[25,45,20,42],[42,62,38,59],[59,62,47,50],[50,54,40,45],[45,68,42,65],[65,82,60,78]] as Bar[],
  bearPullback: [[84,88,64,68],[68,72,48,52],[52,65,47,62],[62,67,54,58],[58,61,35,40],[40,43,18,23]] as Bar[],
  range: [[46,70,31,62],[62,76,41,50],[50,72,27,57],[57,78,37,46],[46,73,29,61],[61,75,36,48]] as Bar[],
  rangeBreakUp: [[48,68,28,61],[61,74,36,48],[48,71,30,64],[64,83,60,80],[80,92,75,89]] as Bar[],
  rangeFailUp: [[48,70,28,64],[64,76,36,49],[49,71,27,65],[65,88,61,84],[84,89,35,42],[42,65,28,52]] as Bar[],
  rangeFailDown: [[58,75,38,44],[44,70,28,62],[62,73,30,48],[48,53,15,20],[20,67,17,62],[62,79,55,74]] as Bar[],
  twoUp: [[79,83,54,59],[59,63,32,38],[38,76,30,71],[71,86,67,82]] as Bar[],
  twoDown: [[25,50,20,45],[45,72,40,68],[68,75,31,35],[35,40,17,21]] as Bar[],
  overlapPair: [[31,67,24,62],[62,70,26,30],[30,52,25,45],[45,72,40,67]] as Bar[],
  tripleUp: [[78,83,52,56],[56,65,45,53],[53,78,49,73],[73,85,69,82]] as Bar[],
  inside: [[35,78,22,69],[69,72,31,54],[54,64,39,60],[60,81,54,77]] as Bar[],
  ii: [[28,78,20,68],[68,72,31,48],[48,64,39,58],[58,75,51,70]] as Bar[],
  iii: [[29,77,19,64],[64,70,29,46],[46,62,36,55],[55,61,43,58],[58,79,51,75]] as Bar[],
  ioi: [[35,76,22,67],[67,70,31,49],[49,83,17,72],[72,76,34,60],[60,88,56,84]] as Bar[],
  microLow: [[81,87,52,56],[56,61,30,35],[35,58,30,53],[53,58,31,37],[37,42,16,20]] as Bar[],
  microHigh: [[23,45,19,41],[41,68,36,65],[65,68,45,48],[48,68,42,64],[64,82,61,78]] as Bar[],
  failedBull: [[78,84,55,58],[58,63,34,39],[39,70,22,65],[65,67,17,21],[21,29,9,13]] as Bar[],
  failedBear: [[24,45,18,41],[41,67,37,62],[62,78,58,66],[66,85,62,82],[82,90,77,87]] as Bar[],
  climaxDown: [[84,89,69,72],[72,76,55,59],[59,63,40,45],[45,48,23,27],[27,31,7,12],[12,38,9,35],[35,59,31,55]] as Bar[],
  climaxUp: [[21,41,17,38],[38,58,33,55],[55,70,50,67],[67,82,62,79],[79,96,75,93],[93,95,65,69],[69,76,56,72]] as Bar[],
  retestLow: [[77,83,51,55],[55,60,29,34],[34,63,27,58],[58,74,52,70],[70,74,31,35],[35,70,29,65]] as Bar[],
  retestHigh: [[26,46,20,42],[42,69,38,65],[65,74,43,47],[47,72,41,67],[67,74,38,42]] as Bar[],
  bearChannel: [[85,89,69,72],[72,76,52,56],[56,68,48,63],[63,66,38,43],[43,53,35,49],[49,52,26,31],[31,43,23,39],[39,43,15,20]] as Bar[],
  bullChannel: [[18,37,14,34],[34,53,30,50],[50,54,36,41],[41,61,39,58],[58,64,48,52],[52,72,50,69],[69,74,59,63],[63,83,61,79]] as Bar[],
  channelBreak: [[83,88,65,69],[69,75,50,54],[54,65,44,61],[61,64,32,37],[37,59,29,55],[55,72,49,68],[68,72,33,39],[39,76,35,72]] as Bar[],
  smallPause: [[80,85,60,64],[64,67,44,49],[49,55,43,51],[51,54,30,34],[34,39,16,20]] as Bar[],
  shavedDown: [[82,82,60,60],[60,65,44,47],[47,47,28,28],[28,34,15,18]] as Bar[],
  shavedRange: [[39,65,29,65],[65,71,38,38],[38,69,28,69],[69,77,39,39],[39,68,30,68]] as Bar[],
  openingWhipsaw: [[48,73,33,68],[68,77,39,43],[43,67,20,24],[24,68,19,65],[65,72,32,40],[40,65,28,61]] as Bar[],
  higherLow: [[73,80,46,51],[51,58,26,31],[31,59,23,55],[55,72,48,67],[67,71,36,40],[40,70,33,66]] as Bar[],
} as const;

const p = (title: string, note: string, bars: readonly Bar[], focus: readonly number[] = [],
  range?: readonly [number, number], level?: readonly [number, string]): Panel =>
  ({ title, note, bars, focus, range, level });
const d = (heading: string, left: Panel, right: Panel, footer: string,
  description: string): Definition => ({ heading, panels: [left, right], footer, description });

export const chapterSixCharts: Record<ChapterSixScenarioId, Definition> = {
  'c06-signal-context': d('Signalform und Marktphase',
    p('Trend-Pullback', 'Raum für Fortsetzung', paths.bullPullback, [3]),
    p('Enge Range', 'naher Widerstand', paths.range, [4], [27,78]),
    'Auslösung ≠ guter Folgeweg', 'Ein bullischer Bar liegt einmal am Ende eines Pullbacks und einmal mitten in einer engen Range.'),
  'c06-strong-spike': d('Schlüsse in einem frischen Spike',
    p('Neuer Bruch', 'mehrere hohe Schlüsse', paths.rangeBreakUp, [3,4], undefined, [73,'alte Grenze']),
    p('Nur ein Test', 'Rückfall in Balance', paths.rangeFailUp, [3,4], [27,76]),
    'Der Schluss braucht Anschluss', 'Ein Ausbruch erhält mehrere starke Folgekerzen oder fällt in die alte Range zurück.'),
  'c06-trend-asymmetry': d('Trend und Gegenversuch',
    p('Mit Trend', 'kleine Korrektur', paths.bullPullback, [3]),
    p('Gegen Trend', 'erste Gegenkerze', paths.bullChannel, [6]),
    'Trendseite trägt schwächere Bars', 'Ein kleiner Pullback in einem Bullenmarkt steht einem frühen Short-Versuch gegenüber.'),
  'c06-two-bar': d('Eine Umkehr über zwei Bars',
    p('Am getesteten Tief', 'deutliche Gegenkerze', paths.twoUp, [1,2]),
    p('Im Bärenspike', 'nur kurze Pause', paths.bearPullback, [2]),
    'Das gleiche Paar hat andere Aufgaben', 'Gegenläufige Bars können eine Umkehr am Tief oder eine Fortsetzungsflag im Abwärtstrend bilden.'),
  'c06-pair-boundary': d('Die äußere Grenze des Paars',
    p('Starke Überlappung', 'zweites Tief ist innen', paths.overlapPair, [0,1], undefined, [24,'Paar-Tief']),
    p('Kurzer Bruch', 'altes Tief hält', paths.overlapPair, [1,2], undefined, [24,'Paar-Tief']),
    'Nur das Paar verlässt die Mini-Range', 'Der jüngere Bärenbar wird unterboten, das ältere tiefere Tief nicht.'),
  'c06-overlap-ma': d('Viele Bars: kleine gemeinsame Range',
    p('Balance', 'überlappende Spannen', paths.range, [1,2,3], [27,78]),
    p('Paar am oberen Rand', 'wenig freier Raum', paths.rangeFailUp, [3,4], [27,76]),
    'Die übrigen Bars gehören zum Signal', 'Ein bullisches Paar am Rand einer mehrteiligen Überlappung scheitert.'),
  'c06-three-bar': d('Drei Schritte einer Umkehr',
    p('Kleinere Bars', 'Druck – Pause – Gegenzug', paths.tripleUp, [0,1,2]),
    p('Gesamtbewegung', 'tiefer Test, hoher Schluss', paths.twoUp, [1,2]),
    'Zeitfenster bestimmt die Gesamtkerze', 'Ein fallender Bar, eine Pause und ein starker Gegenbar werden auf größerer Zeitebene zusammengefasst.'),
  'c06-small-inside': d('Kleine Barform, verschiedener Ort',
    p('Pullback', 'gerichteter Schluss', paths.inside, [1,2]),
    p('Range-Mitte', 'Doji ohne Vorteil', paths.range, [2,3], [27,78]),
    'Pause allein ist keine Richtung', 'Ein kleiner Inside-Bar steht einmal in einem Trend-Pullback und einmal in der Range-Mitte.'),
  'c06-ii-iii': d('Verschachtelte Grenzen',
    p('ii', 'zweite Innenkerze', paths.ii, [1,2]),
    p('iii', 'dritte Verengung', paths.iii, [1,2,3]),
    'Beide Ausbruchsseiten bleiben offen', 'Ein ii und ein iii verengen ihre Hoch- und Tiefbereiche schrittweise.'),
  'c06-ioi-outside': d('Innen – außen – innen',
    p('ioi', 'erst Expansion', paths.ioi, [1,2,3]),
    p('Fehlversuche', 'beide Seiten möglich', paths.openingWhipsaw, [1,2,3]),
    'Richtung folgt erst mit dem Bruch', 'Ein Outside-Bar weitet die Spanne aus, bevor ein neuer Inside-Bar sie wieder einschränkt.'),
  'c06-micro-double': d('Gleiche Extreme, andere Phase',
    p('Im Bärenspike', 'Bärenflag', paths.microLow, [1,2]),
    p('Nach Tief-Test', 'Käuferreaktion', paths.retestLow, [1,4]),
    'Doppelstruktur ist kein Richtungsbefehl', 'Nahe gleiche Tiefs erscheinen einmal im starken Abwärtsspike und einmal nach einem späteren Test.'),
  'c06-failed-reversal': d('Umkehr scheitert vor dem Trigger',
    p('Kaufversuch', 'Hoch bleibt unberührt', paths.failedBull, [2], undefined, [70,'Long?']),
    p('Trend hält', 'Bruch unten', paths.bear, [2,3]),
    'Frühe Longs verlassen die Falle', 'Ein bullischer Gegenbar wird unterboten, bevor sein Hoch erreicht wurde.'),
  'c06-shaved': d('Kein Schatten an der Schlussseite',
    p('Starker Trend', 'gerichtete Folge', paths.shavedDown, [0,2]),
    p('Ruhige Range', 'wechselnde Seiten', paths.shavedRange, [0,1,2], [28,77]),
    'Form und Umfeld trennen', 'Schattenlose Schlüsse begleiten einmal einen Bärenspike und einmal seitliche Überlappung.'),
  'c06-exhaustion': d('Früher Bruch oder später Klimax?',
    p('Neuer Ausbruch', 'Raum wird geöffnet', paths.rangeBreakUp, [3]),
    p('Später Verkauf', 'größter Bar am Ende', paths.climaxDown, [4]),
    'Folgebars bestimmen die Deutung', 'Ein großer früher Ausbruch wird einem ungewöhnlich großen Bar nach langem Abverkauf gegenübergestellt.'),
  'c06-trend-range': d('Trend-Bar an zwei Orten',
    p('Pullback-Ende', 'alte Richtung hält', paths.bullPullback, [3,4]),
    p('Range-Oberkante', 'erst Akzeptanz prüfen', paths.rangeFailUp, [3], [27,76]),
    'Grün allein ist keine Marktphase', 'Ein kräftiger Bullenbar setzt einen Trend fort oder scheitert am oberen Rand einer Range.'),
  'c06-channel-orders': d('Orders um Bars im Kanal',
    p('Bullenkanal', 'Pullbacks werden gekauft', paths.bullChannel, [2,4]),
    p('Oberer Test', 'Gegenseite wartet', paths.retestHigh, [1,3]),
    'Bar-Extreme verbinden beide Pläne', 'Ein steigender Kanal enthält kleine Rückläufe und wiederholte Tests von Swinghochs.'),
  'c06-breakout-pause': d('Inside-Bar nach dem Ausbruch',
    p('Pause hält', 'Folgekauf', paths.rangeBreakUp, [3,4], undefined, [73,'Grenze']),
    p('Bruch scheitert', 'zurück in die Zone', paths.rangeFailUp, [3,4], [27,76]),
    'Kleine Pause hat zwei Wege', 'Nach einem großen Ausbruch folgt entweder Anschluss oder Rückkehr in die Ausgangsrange.'),
  'c06-final-flag': d('Letzte Flag nach langem Trend',
    p('Reifer Kanal', 'enge Pause', paths.bullChannel, [6,7]),
    p('Ausbruch fällt zurück', 'Gegenseite übernimmt', paths.climaxUp, [4,5]),
    'Nicht den ersten Bruch überbewerten', 'Eine Kompression am Ende eines reifen Aufwärtsschubs kann zuletzt scheitern.'),
  'c06-small-location': d('Kleine Bar in Mitte oder Rand',
    p('Mitte', 'kein äußerer Test', paths.range, [2], [27,78]),
    p('Unterer Rand', 'zweiter Tief-Test', paths.retestLow, [4], [27,78]),
    'Der Ort gibt der Form Gewicht', 'Ein kleiner Gegenbar steht einmal in der Range-Mitte und einmal nach einem zweiten Tief-Test.'),
  'c06-case-01': d('Fall 6.1 · Schwache Signale im Trend',
    p('Bärenkanal', 'kleine Rückläufe', paths.bearChannel, [2,4,6]),
    p('Später Bruch', 'zweiter Tief-Test', paths.channelBreak, [4,7]),
    'Erst die Struktur ändert die Richtung', 'Mehrere kleine Pullbacks in einem Bärentrend stehen einer späteren Käuferreaktion nach Kanalbruch gegenüber.'),
  'c06-case-02': d('Fall 6.2 · Reversal-Bar scheitert',
    p('Bullischer Versuch', 'kein Bruch oben', paths.failedBull, [2], undefined, [70,'Long?']),
    p('Bärischer Versuch', 'kein Bruch unten', paths.failedBear, [2], undefined, [58,'Short?']),
    'Die Gegenseite des Bars wird wichtiger', 'Ein bullischer und ein bärischer Reversal-Bar lösen auf der geplanten Seite nicht aus.'),
  'c06-case-03': d('Fall 6.3 · Klimax und Gegenkontrolle',
    p('Verkaufsklimax', 'später großer Bar', paths.climaxDown, [4]),
    p('Bullenreaktion', 'Inside und Folge', paths.twoUp, [1,2]),
    'Korrektur zuerst, Wende bleibt offen', 'Nach langem Abwärtstrend wird ein großer Schluss unter dem Kanal von einem bullischen Gegenpaar beantwortet.'),
  'c06-case-04': d('Fall 6.4 · Zwei Zeitebenen',
    p('Drei Teilbars', 'Umkehr nach Test', paths.tripleUp, [0,1,2]),
    p('Zusammengefasst', 'hoher Schluss', paths.twoUp, [1,2]),
    'Zeitliche Bündelung mitdenken', 'Drei kleine Bars bilden eine Umkehrfolge, die in einem größeren Fenster zusammengefasst werden kann.'),
  'c06-case-05': d('Fall 6.5 · Zeitfenster versetzt',
    p('Kleine Umkehr', 'gut sichtbare Folge', paths.tripleUp, [0,1,2]),
    p('Anderer Abschluss', 'größerer Bar bleibt offen', paths.higherLow, [2,3]),
    'Keine Bestätigung hinzudichten', 'Die kleine Drei-Bar-Folge sieht überzeugender aus als die zeitlich anders gebündelte größere Kerze.'),
  'c06-case-06': d('Fall 6.6 · Das falsche Tief',
    p('Überlapptes Paar', 'jüngeres Tief innen', paths.overlapPair, [0,1], undefined, [24,'Paar-Tief']),
    p('Test hält', 'Rückkehr nach Bruch', paths.overlapPair, [1,2], undefined, [24,'Paar-Tief']),
    'Äußere Grenze zuerst markieren', 'Ein kurzer Ausbruch unter den zweiten Bar hält oberhalb des ersten, tieferen Tiefs.'),
  'c06-case-07': d('Fall 6.7 · Zweiter Boden am Open',
    p('Früher Wechsel', 'beide Seiten scheitern', paths.openingWhipsaw, [1,2]),
    p('Spätere Struktur', 'höheres Tief mit ii', paths.higherLow, [1,4,5]),
    'Warten schafft einen klareren Plan', 'Nach widersprüchlichen ersten Bars bilden ein zweiter Tief-Test und ein höheres Tief eine geordnetere Käuferfolge.'),
  'c06-case-08': d('Fall 6.8 · Winziger Bar, wichtige Stelle',
    p('Enger Bärenkanal', 'erster Versuch zu früh', paths.bearChannel, [4]),
    p('Höheres Tief', 'kleiner zweiter Bar', paths.higherLow, [4]),
    'Struktur zählt mehr als Größe', 'Ein kaum auffälliger Bar markiert nach dem Bruch eines Bärenkanals ein höheres Tief.'),
  'c06-case-09': d('Fall 6.9 · ii und kleine Tests',
    p('Fünf Minuten', 'verschachtelte Spannen', paths.iii, [1,2,3]),
    p('Kleiner Blick', 'Tiefs werden gehalten', paths.higherLow, [1,4]),
    'Die Details erklären die Kompression', 'Ein ii beziehungsweise iii auf größerem Chart bündelt mehrere verteidigte Tief-Tests.'),
  'c06-case-10': d('Fall 6.10 · Mikro-Doppel als Flag',
    p('Verkaufsspike', 'gleiche Tiefs', paths.microLow, [1,2]),
    p('Kaufspike', 'gleiche Hochs', paths.microHigh, [1,3]),
    'Die gleiche Form folgt dem Trend', 'Benachbarte Extrempunkte dienen im Bären- und Bullen-Spike als mögliche Fortsetzungsgrenzen.'),
  'c06-case-11': d('Fall 6.11 · Starker Gegenstoß nach Klimax',
    p('Drei Verkaufsschübe', 'später Kanalrand', paths.climaxDown, [2,4]),
    p('Zwei-Bar-Boden', 'kräftiger Gegenschluss', paths.twoUp, [1,2]),
    'Erst die Korrektur ist belegt', 'Mehrere immer tiefere Bars und ein starker Gegenschluss schaffen eine plausible Korrekturthese.'),
  'c06-case-12': d('Fall 6.12 · Zwei-Bar-Top nach Ausbruch',
    p('Reifer Aufstieg', 'letzter Hochtest', paths.climaxUp, [4]),
    p('Gegenpaar', 'unter beide Tiefs?', paths.twoDown, [1,2]),
    'Ort und gemeinsame Grenze prüfen', 'Eine späte Aufwärtsüberdehnung geht in ein großes, stark überlappendes bärisches Paar über.'),
  'c06-case-13': d('Fall 6.13 · Kein Tail, aber welcher Trend?',
    p('Früher Spike', 'durchgehender Verkauf', paths.shavedDown, [0,2]),
    p('Spätere Range', 'abwechselnde Schlüsse', paths.shavedRange, [1,2,3], [28,77]),
    'Spätere Form ist nicht gleich stark', 'Ein schattenloser Bärenbar gehört einmal zu einem Spike und einmal zu einem seitlichen Bar-Cluster.'),
  'c06-case-14': d('Fall 6.14 · Marktphase verändert Signale',
    p('Dojizone', 'Widerstand direkt oben', paths.range, [1,2], [27,78]),
    p('Zweiter Tief-Test', 'neuer Kaufdruck', paths.retestLow, [1,4,5]),
    'Später neue Phase, neue Bewertung', 'Ein attraktiver Doji unter Widerstand wird einer späteren Käuferreaktion nach zweitem Tief-Test gegenübergestellt.'),
  'c06-case-15': d('Fall 6.15 · Bullenbar als Bärenflag',
    p('Im Bärenspike', 'frühe Käufer gefangen', paths.failedBull, [2,3]),
    p('Nach Kanalbruch', 'neue Long-Lage', paths.channelBreak, [4,7]),
    'Gleiche Form, anderer Trendstatus', 'Ein bullischer Umkehr-Bar scheitert im Bärenspike; erst ein späterer Strukturbruch schafft neue Käuferargumente.'),
  'c06-case-16': d('Fall 6.16 · Mehrere Setups in Folge',
    p('Erster Boden', 'Anschluss nach Paar', paths.twoUp, [1,2,3]),
    p('Späterer Hochtest', 'erster Doji zu schwach', paths.retestHigh, [1,3]),
    'Nacheinander prüfen, nicht zugleich', 'Auf eine frühe Käuferfolge folgen ein späterer Hochtest und ein schwieriger erster Gegenversuch.'),
  'c06-case-17': d('Fall 6.17 · Gegenbar oder Bull-Flag?',
    p('Parabolischer Kauf', 'erster Bärenbar', paths.climaxUp, [4,5]),
    p('Späterer Test', 'zweite Käuferchance', paths.channelBreak, [4,7]),
    'Nicht am Extrem reflexhaft handeln', 'Ein erster Bärenbar nach starkem Kauf kann Pullback sein; später wird ein zweiter Gegenversuch beurteilt.'),
  'c06-case-18': d('Fall 6.18 · Kleiner Bar am starken Ort',
    p('Fehlbruch nach unten', 'altes Tief hält', paths.rangeFailDown, [3,4], undefined, [28,'alte Zone']),
    p('Fehlbruch nach oben', 'erneute Rückkehr', paths.rangeFailUp, [3,4], [27,76]),
    'Ort und Folge helfen schwacher Form', 'Ein kleiner Gegenbar erhält Bedeutung durch einen gescheiterten Ausbruch und den Test einer älteren Zone.'),
  'c06-case-19': d('Fall 6.19 · Shaved-Cluster täuscht',
    p('Gerichteter Anfang', 'Schlüsse bestätigen', paths.shavedDown, [0,2]),
    p('Spätere Balance', 'kein gerichteter Anschluss', paths.shavedRange, [0,1,2,3], [28,77]),
    'Viele ähnliche Bars mindern den Einzelwert', 'Eine Folge schattenloser Bars wirkt im Abwärtsspike anders als in einer engen, wechselnden Range.'),
};

export const chapterSixDescriptions = Object.fromEntries(
  Object.entries(chapterSixCharts).map(([key, definition]) => [key, definition.description]),
) as Record<ChapterSixScenarioId, string>;

function PanelDrawing({ panel, x, width }: { panel: Panel; x: number; width: number }) {
  const y = (price: number) => 258 - price * 1.65;
  const spacing = (width - 52) / panel.bars.length;
  const bodyWidth = Math.min(22, spacing * 0.48);
  return (
    <g>
      <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
      <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{panel.title}</text>
      {panel.range ? <rect className="chart-zone" x={x + 12} y={y(panel.range[1])}
        width={width - 24} height={y(panel.range[0]) - y(panel.range[1])} rx={6} /> : null}
      {panel.level ? <>
        <line className="breakout-line" x1={x + 12} x2={x + width - 12}
          y1={y(panel.level[0])} y2={y(panel.level[0])} />
        <text className="chart-small strong" x={x + 18} y={y(panel.level[0]) - 7}>
          {panel.level[1]}
        </text>
      </> : null}
      {panel.bars.map(([open, high, low, close], index) => {
        const cx = x + 26 + (index + 0.5) * spacing;
        const bull = close >= open;
        const className = bull ? 'bull' : 'bear';
        return <g key={index}>
          {panel.focus?.includes(index) ? <rect className="chart-zone"
            x={cx - bodyWidth / 2 - 7} y={y(high) - 9}
            width={bodyWidth + 14} height={y(low) - y(high) + 18} rx={6} /> : null}
          <line className={`candle-wick ${className}`} x1={cx} x2={cx} y1={y(high)} y2={y(low)} />
          <rect className={`candle-body ${className}`}
            x={cx - bodyWidth / 2} y={Math.min(y(open), y(close))}
            width={bodyWidth} height={Math.max(3, Math.abs(y(open) - y(close)))} rx={2} />
        </g>;
      })}
      <text className="chart-small strong" x={x + width / 2} y={286} textAnchor="middle">{panel.note}</text>
    </g>
  );
}

export function ChapterSixChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterSixCharts, scenario)) return null;
  const definition = chapterSixCharts[scenario as ChapterSixScenarioId];
  const width = 343;
  return <g className="chapter-six-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((panel, index) =>
      <PanelDrawing key={index} panel={panel} x={30 + index * (width + 14)} width={width} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
