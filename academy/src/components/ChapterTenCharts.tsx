import type { ChartScenarioId, ChapterTenScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
type Panel = {
  title: string;
  note: string;
  bars: readonly Bar[];
  focus?: readonly number[];
  level?: readonly [price: number, label: string];
};
type Definition = {
  heading: string;
  panels: readonly [Panel, Panel];
  footer: string;
  description: string;
};

// Frei erfundene relative Preise. Keine Digitalisierung oder Nachzeichnung der
// historischen Abbildungen 10.1/10.2; die Labels beschreiben nur Lernlogik.
function bars(closes: readonly number[]): Bar[] {
  return closes.map((close, index) => {
    const open = index === 0 ? close + 2 : closes[index - 1];
    return [open, Math.max(open, close) + 3, Math.min(open, close) - 3, close];
  });
}

const panel = (title: string, note: string, closes: readonly number[],
  options: Omit<Panel, 'title' | 'note' | 'bars'> = {}): Panel =>
  ({ title, note, bars: bars(closes), ...options });
const custom = (title: string, note: string, values: readonly Bar[],
  options: Omit<Panel, 'title' | 'note' | 'bars'> = {}): Panel =>
  ({ title, note, bars: values, ...options });
const pair = (heading: string, left: Panel, right: Panel, footer: string,
  description: string): Definition => ({ heading, panels: [left, right], footer, description });

const nestedInside: Bar[] = [
  [82,85,77,80], [80,82,69,72], [72,75,60,63], [63,67,52,55],
  [55,59,48,52], [52,57,49,53], [53,55,50,51], [51,53,36,39], [39,41,27,30],
];

export const chapterTenCharts: Record<ChapterTenScenarioId, Definition> = {
  'c10-second-at-extremes': pair('Erneuter Test statt einzelner Umkehr',
    panel('Am Tief', 'zwei Kaufversuche', [82,69,52,61,54,67,76], { focus: [2,4] }),
    panel('Am Hoch', 'zwei Verkaufsversuche', [25,41,63,55,62,48,35], { focus: [2,4] }),
    'Zwei Seiten derselben Logik',
    'Zwei frei erfundene Verläufe markieren links den wiederholten Tieftest und rechts den wiederholten Hochtest vor möglichen Richtungswechseln.'),
  'c10-first-second': pair('Was weiß der zweite Versuch mehr?',
    panel('Erster Versuch', 'Trenddruck hält', [78,66,54,59,47,40], { focus: [3] }),
    panel('Zweiter Versuch', 'Gegenreaktion sichtbar', [78,66,54,59,51,61,68], { focus: [3,5] }),
    'Mehr Information · keine Garantie',
    'Beide erfundenen Folgen starten mit Bärendruck; links fällt ein erster Kaufversuch zurück, rechts erhält ein späterer Versuch eine sichtbare Käuferreaktion.'),
  'c10-better-price': pair('Wie viel kostet der zweite Long?',
    panel('Mit Anschluss', 'zweiter Preis höher', [68,54,61,58,67,74], { level: [61,'erster Entry'], focus: [2,4] }),
    panel('Mit Druck', 'zweiter Preis tiefer', [68,54,61,50,46,43], { level: [61,'erster Entry'], focus: [2,4] }),
    'Billiger kann schwächer bedeuten',
    'Zwei schematische Long-Folgen markieren den ersten Auslösungspreis; im rechten Panel fällt der zweite Kaufversuch klar darunter, während Verkäufer dominieren.'),
  'c10-smaller-timeframe': pair('Eine Bewegung · verschieden viele Bars',
    panel('Kurzer Takt', 'frühe Zwischenversuche', [70,65,61,67,58,56,63,61,69,74], { focus: [3,6] }),
    panel('Fünf-Minuten-Blick', 'später zusammengefasst', [70,61,56,63,74], { focus: [3] }),
    'Andere sehen Versuche früher',
    'Ein erfundener Rücklauf enthält links mehr kleine Zwischenreaktionen und rechts weniger zusammengefasste Bars mit vergleichbarer grober Richtung.'),
  'c10-countertrend-wait': pair('Nach Trendbars nicht den ersten Gegenbar nehmen',
    panel('Bullenstärke', 'erster Short zu früh', [32,44,55,67,77,72,80,69], { focus: [5,7] }),
    panel('Bärenstärke', 'erster Long zu früh', [82,71,61,51,40,45,37,49], { focus: [5,7] }),
    'Erst Wiederaufnahme · dann zweiter Versuch',
    'Spiegelbildliche erfundene Trendfolgen zeigen nach mehreren starken Bars einen ersten Gegenbar, erneuten Trenddruck und einen zweiten Umkehrversuch.'),
  'c10-101-price-map': pair('Zwei Kaufgelegenheiten vergleichen',
    panel('Erste Auslösung', 'Preiszone merken', [70,56,63,58], { level: [63,'erster Entry'], focus: [2] }),
    panel('Erneute Auslösung', 'gleich oder höher', [70,56,63,59,66,71], { level: [63,'erster Entry'], focus: [2,4] }),
    'Preislage und Qualität getrennt prüfen',
    'Zwei eigenständig gebaute Ansichten einer Beispielidee markieren den ersten Kaufbereich und einen späteren, etwas höher liegenden zweiten Versuch.'),
  'c10-101-bargain-trap': pair('Billiger im engen Bärenkanal',
    panel('Erster Long', 'kaum Käuferraum', [81,74,67,60,57], { level: [60,'erster Versuch'], focus: [3] }),
    panel('Zweiter Long', 'tiefer statt stärker', [81,74,67,60,54,57,48], { level: [60,'erster Versuch'], focus: [3,5] }),
    'Der Bärendruck blieb bestehen',
    'Ein selbst entworfener enger Abwärtspfad markiert zwei bullische Zwischenversuche; der spätere liegt unter dem ersten Bereich und erhält keinen starken Anschluss.'),
  'c10-101-bull-evidence': pair('Welche Käuferreaktion ging voraus?',
    panel('Schwach', 'nur kleine Hochstiche', [82,73,65,62,55,51,45], { focus: [3,5] }),
    panel('Spürbar', 'echter Gegenstoß', [82,73,65,53,67,58,68], { focus: [4,6] }),
    'Vorbars vor dem Entry lesen',
    'Zwei erfundene Abwärtsphasen zeigen links winzige zurückgewiesene Anstiege und rechts einen deutlich größeren bullischen Gegenstoß vor einem erneuten Test.'),
  'c10-101-micro-doubles': pair('Kleine zweite Extremtests',
    panel('Mikro-Doppeltop', 'zweiter Hochtest', [38,52,67,59,65,50,42], { focus: [2,4] }),
    panel('Mikro-Doppeltief', 'zweiter Tieftest', [79,63,47,57,49,61,73], { focus: [2,4] }),
    'Die Reaktion danach bleibt offen',
    'Die eigenständigen Beispiele markieren zwei nahe Hochs beziehungsweise zwei nahe Tiefs, getrennt durch einen kurzen Zwischenabschnitt.'),
  'c10-102-first-short': pair('Fünf Bullenbars vor dem Short',
    panel('Erster Versuch', 'Käufer bleiben stark', [30,39,48,58,69,79,73,80], { focus: [6] }),
    panel('Zweiter Versuch', 'neuer Hochtest scheitert', [30,39,48,58,69,79,73,81,64], { focus: [6,7] }),
    'Nicht den ersten Gegenbar erraten',
    'Beide frei erfundenen Folgen steigen zunächst kräftig; rechts scheitert nach einem ersten Rücklauf ein erneuter Hochversuch.'),
  'c10-102-second-long': pair('Erst Druck, dann erneuter Kaufversuch',
    panel('Erster Long', 'schwache Vorgeschichte', [83,76,69,62,55,47,40,45], { focus: [7] }),
    panel('Zweiter Long', 'erneuter Tiefbereich', [83,76,69,62,55,47,40,45,41,55], { focus: [7,8] }),
    'Der zweite Versuch ist prüfbarer',
    'Synthetische Bärenbars ohne nennenswerten Käuferanschluss münden links in den ersten und rechts nach Zwischenreaktion in einen zweiten Tieftest.'),
  'c10-102-no-second': pair('Wenn die Bedingung ausbleibt',
    panel('Erster Long?', 'vier Bärenbars davor', [82,73,63,53,43,48], { focus: [5] }),
    panel('Weitere Folge', 'kein zweites Kaufsignal', [82,73,63,53,43,48,37,30], { focus: [5] }),
    'Kein zweiter Versuch · kein Trade',
    'Ein erster bullischer Gegenbar folgt auf einen erfundenen Abwärtsimpuls; rechts setzt sich der Druck fort, ohne einen erneuten Kauftrigger zu bilden.'),
  'c10-102-second-short': pair('Höhere Tiefs vor dem Short',
    panel('Erster Short', 'Käufer verteidigen', [38,44,49,55,61,66,72,69], { focus: [7] }),
    panel('Zweiter Short', 'erneuter Hochtest', [38,44,49,55,61,66,72,69,75,62], { focus: [7,8] }),
    'Erst zusätzliche Verkäuferreaktion prüfen',
    'Zwei erfundene Aufwärtsfolgen bilden steigende Tiefs; rechts wird nach einem ersten schwachen Short ein höherer Versuch erneut zurückgewiesen.'),
  'c10-deep-yesterday': pair('Kanalbruch und anschließender Test',
    panel('Gegenbruch', 'über fallende Grenze', [80,71,62,55,65,70], { focus: [4,5] }),
    panel('An Referenz', 'Anschluss misslingt', [80,71,62,55,65,70,60,49], { level: [73,'Referenz'], focus: [5,6] }),
    'Ein Linienbruch allein reicht nicht',
    'Eigene Kursfolge verlässt einen fallenden Abschnitt nach oben, scheitert jedoch rechts nahe einer separat markierten Referenz und fällt zurück.'),
  'c10-deep-low-failure': pair('Das tiefere Niveau hält nicht',
    panel('Ausbruch nach unten', 'unter Vor-Tief', [62,53,44,37], { level: [43,'Vor-Tief'], focus: [3] }),
    panel('Rückkehr', 'Tief zurückgekauft', [62,53,44,37,50,56], { level: [43,'Vor-Tief'], focus: [3,4] }),
    'Bruch und Rücknahme getrennt lesen',
    'Eine frei erfundene Folge unterschreitet zunächst eine Vor-Tief-Linie, kehrt im zweiten Feld aber mit bullischen Schlusskursen über sie zurück.'),
  'c10-deep-double-top': pair('Erholung schafft kein höheres Hoch',
    panel('Altes Hoch', 'Referenz bleibt darüber', [72,58,43,55,63], { level: [72,'früheres Hoch'], focus: [4] }),
    panel('Zweiter Hochtest', 'Verkäufer drücken erneut', [72,58,43,55,63,57,61,46], { level: [72,'früheres Hoch'], focus: [4,6] }),
    'Tiefere Hochfolge setzt sich fort',
    'Ein eigener Abwärtspfad erholt sich zweimal in eine niedrigere Hochzone, erreicht die frühere markierte Hochlinie aber nicht und fällt danach.'),
  'c10-deep-low4': pair('Pullback nach einem Bärenspike',
    panel('Mehrere Versuche', 'Verkaufspunkte zählen', [79,67,55,61,57,64,59,66,60], { focus: [4,6,8] }),
    panel('Auslösung', 'neuer Bärenspike', [79,67,55,61,57,64,59,66,60,45,35], { focus: [8,9] }),
    'Count · Trigger · Anschluss',
    'Frei erfundener Abwärtspfad mit gestuftem Pullback; rechts folgt auf einen erneuten Verkaufsversuch ein klarer Abwärtsbruch.'),
  'c10-deep-high2': pair('High 2 kann im falschen Umfeld liegen',
    panel('Zählbarer Versuch', 'vier Bärenbars', [79,69,58,47,38,44,35,41], { focus: [5,7] }),
    panel('Tatsächliche Stärke', 'Verkäufer bleiben', [79,69,58,47,38,44,35,41,30], { focus: [7] }),
    'Das Momentum überstimmt die Zahl',
    'Ein schematischer High-2-Kaufversuch nach mehreren Bärenbars erhält im rechten Panel keinen bullischen Anschluss und die Folge fällt weiter.'),
  'c10-deep-final-flag': pair('Eine ii-Pause spät im Bärenmove',
    custom('ii vor dem Bruch', 'zwei Inside-Bars', nestedInside.slice(0,7), { focus: [5,6] }),
    custom('Neuer Spike', 'Fortsetzung nach ii', nestedInside, { focus: [5,6,7,8] }),
    'Erst später lässt sich „letzte Flagge“ prüfen',
    'Ein frei konstruiertes Barschema zeigt zwei tatsächlich verschachtelte Innenbars innerhalb des vorherigen Bars und danach zwei weitere Bärenbars.'),
  'c10-deep-three-climaxes': pair('Drei späte Verkaufsschübe',
    panel('Abwärtskanal', 'wiederholte Beschleunigung', [84,71,66,70,57,52,56,44,37,42,31,28], { focus: [2,5,10] }),
    panel('Mögliche Erholung', 'zwei Aufwärtsbeine', [34,47,44,59], { focus: [1,3] }),
    'Möglichkeit ist noch kein Entry',
    'Links zeigt eine erfundene Folge drei voneinander getrennte Abwärtsabschnitte, rechts eine nur schematisch mögliche Rally mit Rücklauf zwischen zwei Aufwärtsbeinen.'),
  'c10-deep-micro-bottom': pair('Zweiter Tieftest und späterer Entry',
    panel('Mikro-Doppeltief', 'nahe Tiefzonen', [76,62,49,56,47,59], { focus: [2,4] }),
    panel('Käuferfolge', 'erst dann Long prüfen', [76,62,49,56,47,59,70], { focus: [4,5] }),
    'Reversal und Auslösung trennen',
    'Zwei frei erfundene Ausschnitte markieren wiederholte Tiefbereiche; erst im zweiten Feld folgt auf den erneuten Test eine sichtbare Käuferbewegung.'),
  'c10-deep-low1': pair('Erster Short gegen kräftige Rally',
    panel('Käuferimpuls', 'mehrere höhere Schlüsse', [31,42,53,64,75,71], { focus: [5] }),
    panel('Höheres Tief', 'Long-These bleibt offen', [31,42,53,64,75,69,79], { focus: [5,6] }),
    'Low 1 sagt wenig ohne Kontext',
    'Eine frei konstruierte Rally erreicht mehrere neue Schlussbereiche; ein erster kleiner Rücklauf endet rechts über dem früheren Tief und wird zurückgekauft.'),
  'c10-deep-bar11': pair('Späte Beschleunigung an alter Hochzone',
    panel('Kaufklimax?', 'großer später Bullenbar', [38,50,60,69,84,81], { level: [85,'altes Hoch'], focus: [4,5] }),
    panel('Rücklauf', 'höheres Tief möglich', [38,50,60,69,84,81,68,75], { level: [85,'altes Hoch'], focus: [5,6] }),
    'Korrektur ist kein sicherer neuer Bärentrend',
    'Eigenes Schema zeigt einen späten starken Käuferbar nahe einer alten Hochlinie und danach einen Rücklauf, der oberhalb des Ausgangstiefs endet.'),
};

export const chapterTenDescriptions = Object.fromEntries(
  Object.entries(chapterTenCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterTenScenarioId, string>;

function PanelDrawing({ value, x }: { value: Panel; x: number }) {
  const width = 343;
  const y = (price: number) => 260 - price * 1.55;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(23, spacing * 0.48);
  const cx = (index: number) => x + 26 + (index + 0.5) * spacing;
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.level ? <>
      <line className="breakout-line" x1={x + 12} x2={x + width - 12}
        y1={y(value.level[0])} y2={y(value.level[0])} />
      <text className="chart-small strong" x={x + 17} y={y(value.level[0]) - 7}>
        {value.level[1]}
      </text>
    </> : null}
    {value.bars.map(([open, high, low, close], index) => {
      const tone = close >= open ? 'bull' : 'bear';
      const xBar = cx(index);
      return <g key={index}>
        {value.focus?.includes(index) ? <rect className="chart-zone"
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

export function ChapterTenChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterTenCharts, scenario)) return null;
  const definition = chapterTenCharts[scenario as ChapterTenScenarioId];
  return <g className="chapter-ten-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
