import type { ChapterSevenScenarioId, ChartScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
interface Panel {
  title: string;
  note: string;
  bars: readonly Bar[];
  focus: readonly number[];
  range?: readonly [low: number, high: number];
  level?: readonly [price: number, label: string];
}
interface Definition {
  heading: string;
  panels: readonly [Panel, Panel];
  footer: string;
  description: string;
}

// Relative OHLC teaching paths. No original prices, screenshots, book layouts,
// instrument identifiers or reconstructed source figures are used.
const paths = {
  outsideUp: [[39,61,27,55],[55,76,17,70],[70,84,66,81],[81,90,76,87]] as Bar[],
  oneSide: [[39,61,27,55],[55,76,46,70],[70,83,65,79]] as Bar[],
  outsideDown: [[48,68,35,62],[62,82,19,24],[24,34,11,16],[16,28,9,20]] as Bar[],
  middleOutside: [[46,68,31,61],[61,73,37,44],[44,81,22,52],[52,70,33,63],[63,77,36,47]] as Bar[],
  range: [[46,70,30,62],[62,76,39,47],[47,72,27,57],[57,78,37,44],[44,73,29,61],[61,76,34,48]] as Bar[],
  bearStart: [[86,89,64,68],[68,72,47,51],[51,70,42,65],[65,76,36,71],[71,74,30,34],[34,40,17,22]] as Bar[],
  bearChannel: [[86,91,70,74],[74,79,52,58],[58,68,49,64],[64,67,37,41],[41,52,34,48],[48,51,23,27],[27,39,20,35]] as Bar[],
  bullStart: [[19,38,14,34],[34,54,29,50],[50,55,38,42],[42,65,39,62],[62,78,57,75]] as Bar[],
  bullPullback: [[21,41,17,38],[38,58,34,55],[55,70,50,67],[67,72,49,53],[53,61,43,47],[47,79,41,75],[75,88,70,84]] as Bar[],
  secondLow: [[83,87,63,68],[68,72,42,46],[46,64,37,59],[59,67,46,52],[52,58,38,42],[42,78,35,74],[74,87,68,82]] as Bar[],
  higherLow: [[79,84,57,61],[61,66,35,40],[40,67,30,63],[63,73,55,69],[69,74,42,47],[47,52,38,45],[45,77,36,73]] as Bar[],
  trappedBear: [[77,82,55,59],[59,65,38,44],[44,53,35,50],[50,55,26,30],[30,72,22,68],[68,83,63,80],[80,88,75,85]] as Bar[],
  trappedBull: [[23,43,19,40],[40,61,36,58],[58,67,46,51],[51,72,45,68],[68,78,28,31],[31,36,17,21]] as Bar[],
  wideIoi: [[41,73,24,65],[65,68,34,50],[50,84,18,79],[79,80,28,45],[45,62,26,55]] as Bar[],
  edgeIoi: [[44,73,25,65],[65,68,35,55],[55,86,22,82],[82,84,61,65],[65,68,37,42]] as Bar[],
  failedIoi: [[44,72,28,64],[64,67,37,53],[53,85,22,79],[79,80,60,68],[68,89,62,86],[86,88,56,61],[61,64,35,39]] as Bar[],
  ooRange: [[45,66,30,59],[59,78,20,40],[40,85,15,28],[28,52,22,47],[47,72,30,63]] as Bar[],
  failedLow: [[57,75,39,44],[44,68,28,61],[61,72,31,47],[47,52,15,20],[20,68,17,64],[64,77,56,73]] as Bar[],
  failedHigh: [[42,66,25,60],[60,73,36,47],[47,69,28,63],[63,87,58,83],[83,88,34,40],[40,64,30,52]] as Bar[],
  doubleLow: [[80,84,60,64],[64,68,37,42],[42,62,34,57],[57,65,40,45],[45,53,36,49],[49,68,45,64]] as Bar[],
  rangeDay: [[49,72,30,66],[66,77,36,43],[43,68,21,25],[25,68,18,63],[63,76,33,39],[39,66,27,60],[60,78,38,45]] as Bar[],
  twoLegBull: [[21,42,17,39],[39,61,35,58],[58,74,53,71],[71,73,55,59],[59,66,48,62],[62,68,44,49],[49,81,41,77]] as Bar[],
  earlyClimax: [[84,89,70,73],[73,77,55,58],[58,62,37,40],[40,43,18,21],[21,45,16,42],[42,53,30,34]] as Bar[],
  highFailures: [[25,46,19,43],[43,65,38,61],[61,85,57,82],[82,84,60,63],[63,70,49,55],[55,64,39,44],[44,68,24,28]] as Bar[],
  trendTest: [[31,51,25,47],[47,67,41,64],[64,74,56,59],[59,66,44,48],[48,76,42,71],[71,83,65,79]] as Bar[],
} as const;

const p = (title: string, note: string, bars: readonly Bar[], focus: readonly number[],
  range?: readonly [number, number], level?: readonly [number, string]): Panel =>
  ({ title, note, bars, focus, range, level });
const d = (heading: string, left: Panel, right: Panel, footer: string,
  description: string): Definition => ({ heading, panels: [left, right], footer, description });

export const chapterSevenCharts: Record<ChapterSevenScenarioId, Definition> = {
  'c07-boundaries': d('Outside braucht beide Extreme',
    p('Außen', 'Hoch höher · Tief tiefer', paths.outsideUp, [0,1], undefined, [27,'altes Tief']),
    p('Nur oben', 'kein neues Tief', paths.oneSide, [0,1], undefined, [27,'altes Tief']),
    'Eine Grenze allein reicht nicht', 'Links umschließt der zweite Bar beide Grenzen des Vorbars; rechts überschreitet der Folgebalken nur dessen Hoch.'),
  'c07-three-roles': d('Gleiche Form, anderer Marktort',
    p('Range-Mitte', 'mittiger Schluss', paths.middleOutside, [2], [22,81]),
    p('Umkehr am Tief', 'kräftiger Gegenschluss', paths.secondLow, [4,5]),
    'Vorgeschichte und Folge lesen', 'Ein neutraler Outside-Bar überlappt eine Range; ein späterer Bar weist nach erneutem Tief-Test Verkäufer zurück.'),
  'c07-breakout-risk': d('Einstieg und Schutzabstand',
    p('Große Außenkerze', 'weiter Gegenspielraum', paths.middleOutside, [2], [22,81], [81,'Einstieg?']),
    p('Kleiner Folgebar', 'engerer Prüfpunkt', paths.edgeIoi, [3], undefined, [61,'kleines Tief']),
    'Der geplante Stop bestimmt das Risiko', 'Der Ausbruch über eine große Outside-Spanne liegt viel weiter vom gegenüberliegenden Tief entfernt als ein kleineres späteres Signal.'),
  'c07-prior-signal': d('Vorbar signalisiert, Folgebalken löst aus',
    p('Bullisches Signal', 'Hoch als Trigger', paths.secondLow, [4], undefined, [58,'Signalhoch']),
    p('Outside-Up-Entry', 'erst Tief, dann Hoch', paths.trappedBear, [3,4], undefined, [53,'altes Hoch']),
    'Nicht auf das neue Outside-Hoch warten müssen', 'Ein brauchbarer bullischer Vorbar gibt den Long-Plan vor; der nächste Bar bricht erst abwärts und läuft dann über sein Hoch.'),
  'c07-second-entry': d('Erster und zweiter Tiefversuch',
    p('Früher Versuch', 'Kanal fällt weiter', paths.bearChannel, [2,3]),
    p('Späterer Test', 'kurzer Bruch wird gekauft', paths.secondLow, [1,4,5]),
    'Spätere Struktur verändert die Chance', 'Ein frühes Gegensignal bleibt schwach; nach Kanalbruch und zweitem Tief-Test entsteht eine deutlichere Outside-Up-Reaktion.'),
  'c07-range-middle': d('Außenbar in der Range',
    p('Mitte', 'große Spanne ohne Vorteil', paths.middleOutside, [2], [22,81]),
    p('Rand', 'kleiner Folgetest', paths.failedHigh, [3,4], [28,88]),
    'Marktort zählt mehr als Expansion', 'Ein großer mittiger Outside-Bar steht einem späteren kleinen Gegenbar an der oberen Range-Grenze gegenüber.'),
  'c07-ioi-context': d('ioi am Rand oder in der Mitte',
    p('Obere Zone', 'kleiner Bären-Inside', paths.edgeIoi, [1,2,3]),
    p('Mitte', 'breiter letzter Bar', paths.wideIoi, [1,2,3], [18,84]),
    'Gleiche Abfolge, anderes Ziel', 'Zwei Inside-Outside-Inside-Folgen unterscheiden sich durch Lage und Größe des letzten Signal-Bars.'),
  'c07-trend-outside': d('Außenbar als neuer Trend-Bar',
    p('Höheres Tief', 'alter Short scheitert', paths.higherLow, [4,5]),
    p('Käufer übernehmen', 'hoch schließender Outside', paths.trappedBear, [3,4,5]),
    'Starker Schluss braucht Kontext', 'Nach einem höheren Tief wird ein kurzer Short-Bruch aufgefangen und in einen kräftigen Aufwärtsschub gedreht.'),
  'c07-leg-origin': d('Zwei mögliche Startpunkte',
    p('Optisches Tief', 'erster Gegenschub', paths.higherLow, [1,2]),
    p('Funktionales Tief', 'Short scheitert später', paths.higherLow, [4,6]),
    'Kontrollwechsel ist der neue Ausgangspunkt', 'Das absolute Tief liegt früher; das spätere höhere Tief erhält mit einem gescheiterten Verkaufsversuch die neue Aufwärtsrolle.'),
  'c07-trapped-orders': d('Gefangene Verkäufer, flache Rückläufe',
    p('Short-Falle', 'Bruch wird zurückgenommen', paths.trappedBear, [3,4]),
    p('Anschluss', 'kleine Rücksetzer', paths.bullStart, [2,3]),
    'Ausstieg und Neueinstieg können zusammenfallen', 'Nach einem fehlgeschlagenen Tiefbruch steigen die Bars stark; spätere Rückläufe bleiben zunächst klein.'),
  'c07-wait': d('Gleicher Outside-Bar, zwei Folgen',
    p('Bruch hält', 'Folge außerhalb', paths.outsideUp, [1,2]),
    p('Bruch fällt zurück', 'erneut überlappt', paths.middleOutside, [2,3], [22,81]),
    'Warten macht die Folge sichtbar', 'Ein einzelner großer Outside-Bar kann fortgesetzt werden oder direkt in die alte Zone zurücklaufen.'),
  'c07-figure-71-trend': d('Fall 7.1 · Gegenbar im Bärentrend',
    p('Erster Rücklauf', 'Outside-Up gegen Trend', paths.bearStart, [2,3]),
    p('Folgebalken', 'Bären schließen tief', paths.bearChannel, [3,4,5]),
    'Die Folgebars bestätigen zuerst die alte Seite', 'Ein frühes bullisches Außenmuster in starkem Bärentrend wird von einem neuen Verkaufsschub abgelöst.'),
  'c07-figure-71-range': d('Fall 7.1 · Großes ioi in Balance',
    p('Seitliche Zone', 'Bar 5 weitet nach unten aus', paths.range, [3,4], [27,78]),
    p('Breiter Innenbar', 'beide Trigger ungünstig', paths.wideIoi, [2,3], [18,84]),
    'Keine Richtung allein aus den drei Bars', 'Nach einem trendigen Anfang wird der Markt seitlich; das spätere breite ioi liegt ungünstig zu seinen Range-Grenzen.'),
  'c07-figure-72-failed-ioi': d('Fall 7.2 · ioi-Long scheitert oben',
    p('Versuch', 'Long nahe Range-Hoch', paths.failedIoi, [2,3,4], [22,89]),
    p('Kleiner Gegenbar', 'Short nach Rückfall', paths.failedHigh, [3,4,5], [28,88]),
    'Der zweite Trigger hat einen anderen Ort', 'Ein ioi-Kauf nahe dem oberen Rand wird zurückgenommen; ein kleiner Folgebalken zeigt eine engere Gegenentscheidung.'),
  'c07-figure-72-upper-edge': d('Fall 7.2 · Stärke und späterer Rand',
    p('Dritter Tiefschub', 'Käufer werden stärker', paths.secondLow, [1,4,5]),
    p('Oberer Rand', 'kleiner bärischer Inside', paths.edgeIoi, [2,3], [22,86]),
    'Jeder Bar erhält seine eigene Aufgabe', 'Eine starke Käuferreaktion nach wiederholtem Tief-Test steht einem späteren kleinen Bärenbar am Range-Hoch gegenüber.'),
  'c07-figure-72-later-bottom': d('Fall 7.2 · Schwacher Verkaufsanschluss',
    p('Bärenausbruch', 'keine neue Beschleunigung', paths.doubleLow, [1,2,4]),
    p('Höheres Tief', 'neue Käufergrenze', paths.higherLow, [1,4,5]),
    'Ausbleibender Druck verändert den Plan', 'Nach einem Bärenbar halten nahe Tiefs; später entsteht ein höheres Tief nach vorherigem Strukturbruch.'),
  'c07-figure-73-open': d('Fall 7.3 · Gap-Down scheitert',
    p('Eröffnung', 'Tief wird gekauft', paths.failedLow, [3,4]),
    p('Outside-Entry', 'Inside-Pause erst unterschritten', paths.trappedBear, [2,3,4]),
    'Vorherige Käuferreaktion trägt den Einstieg', 'Nach einer tieferen Eröffnung drehen Käufer den ersten Verkauf um; der spätere Bar durchläuft beide Grenzen seiner Pause.'),
  'c07-figure-73-higher-low': d('Fall 7.3 · Erster Pullback',
    p('Starke Bullenbars', 'kleiner Gegenbar', paths.bullStart, [1,2]),
    p('Höheres Tief', 'enge Pause und Anschluss', paths.higherLow, [3,4,5,6]),
    'Der erste Short kann nur eine Korrektur sein', 'Ein kleiner bärischer Bar nach stärkerem Kauf führt zu einem höheren Tief statt zu einer vollständigen Umkehr.'),
  'c07-figure-73-oo': d('Fall 7.3 · Outside–Outside',
    p('Barbwire', 'größere gemeinsame Spanne', paths.ooRange, [1,2], [15,85]),
    p('Tiefbruch scheitert', 'kleine Käuferreaktion', paths.failedLow, [3,4], [15,77]),
    'Mehr Ausdehnung bedeutet nicht automatisch Trend', 'Zwei aufeinanderfolgende Außenbars erweitern eine überlappende Zone; ein Tiefbruch kehrt zurück.'),
  'c07-figure-73-day-type': d('Fall 7.3 · Wechselhafter Tag',
    p('Frühe Bars', 'mehrere Seitenwechsel', paths.rangeDay, [0,2,3], [18,78]),
    p('Späteres Hoch', 'Outside-Down weist zurück', paths.failedHigh, [3,4], [28,88]),
    'Tagescharakter und Randtest verbinden', 'Nach einem wechselhaften Open wird ein neues Hoch am oberen Rand in einem starken Außenbar zurückgewiesen.'),
  'c07-figure-74-bull-entry': d('Fall 7.4 · Long nach zwei Pullback-Beinen',
    p('Zwei Rückläufe', 'alte Käuferkraft bleibt', paths.twoLegBull, [2,3,5]),
    p('Outside-Up', 'früher und später Trigger', paths.bullPullback, [4,5,6], undefined, [79,'neues Hoch']),
    'Mehr Bestätigung verändert den Preis', 'Ein Bullenlauf korrigiert in zwei Etappen, bevor ein Outside-Up-Bar mit hohem Schluss Käufer zurückbringt.'),
  'c07-figure-74-bear-trap': d('Fall 7.4 · High-2-Kauf gefangen',
    p('Vorgeschichte', 'Bären dominieren', paths.highFailures, [3,4,5]),
    p('Entry kippt', 'Outside-Down', paths.trappedBull, [3,4,5]),
    'Ein Zählpunkt ist keine Käuferstärke', 'Nach vielen Bärenbars löst ein kleiner Hochbruch Longs aus; derselbe Bar kehrt um und schließt tief.'),
  'c07-figure-74-second-signal': d('Fall 7.4 · Zweiter Tief-Test',
    p('Früher Klimax', 'erstes Signal zu schwach', paths.earlyClimax, [3,4]),
    p('Höheres Tief', 'spätere Käuferbasis', paths.higherLow, [1,4,5,6]),
    'Zusätzliche Struktur vor dem Kauf abwarten', 'Ein schneller Abverkauf liefert zunächst nur ein mögliches Tief; später scheitert ein neuer Short an einem höheren Tief.'),
  'c07-figure-74-failed-highs': d('Fall 7.4 · High 1 und High 2 scheitern',
    p('Später Hochtest', 'bärischer Inside danach', paths.highFailures, [2,3]),
    p('Zwei Fehlversuche', 'Outside-Down schließt tief', paths.highFailures, [4,5,6]),
    'Die Folge wiegt mehr als die Zählung', 'Auf einen späten Hochtest folgen ein bärischer Innenbar und zwei misslingende Käuferauslösungen.'),
};

export const chapterSevenDescriptions = Object.fromEntries(
  Object.entries(chapterSevenCharts).map(([key, definition]) => [key, definition.description]),
) as Record<ChapterSevenScenarioId, string>;

function PanelDrawing({ panel, x, width }: { panel: Panel; x: number; width: number }) {
  const y = (price: number) => 258 - price * 1.65;
  const spacing = (width - 52) / panel.bars.length;
  const bodyWidth = Math.min(22, spacing * 0.48);
  return <g>
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
      const tone = close >= open ? 'bull' : 'bear';
      return <g key={index}>
        {panel.focus.includes(index) ? <rect className="chart-zone"
          x={cx - bodyWidth / 2 - 7} y={y(high) - 9}
          width={bodyWidth + 14} height={y(low) - y(high) + 18} rx={6} /> : null}
        <line className={`candle-wick ${tone}`} x1={cx} x2={cx} y1={y(high)} y2={y(low)} />
        <rect className={`candle-body ${tone}`} x={cx - bodyWidth / 2}
          y={Math.min(y(open), y(close))} width={bodyWidth}
          height={Math.max(3, Math.abs(y(open) - y(close)))} rx={2} />
      </g>;
    })}
    <text className="chart-small strong" x={x + width / 2} y={286} textAnchor="middle">{panel.note}</text>
  </g>;
}

export function ChapterSevenChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterSevenCharts, scenario)) return null;
  const definition = chapterSevenCharts[scenario as ChapterSevenScenarioId];
  const width = 343;
  return <g className="chapter-seven-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((panel, index) =>
      <PanelDrawing key={index} panel={panel} x={30 + index * (width + 14)} width={width} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
