import type { ChapterEightScenarioId, ChartScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
interface Panel {
  title: string;
  note: string;
  bars: readonly Bar[];
  focus: readonly number[];
  level?: readonly [number, string];
  closeLine?: boolean;
}
interface Definition {
  heading: string;
  panels: readonly [Panel, Panel];
  footer: string;
  description: string;
}

// Relative OHLC teaching paths: no book charts, original prices or traced layouts.
const paths = {
  early: [[35,50,30,47],[47,61,43,58],[58,77,55,74]] as Bar[],
  earlyFinal: [[35,50,30,47],[47,61,43,58],[58,77,48,50]] as Bar[],
  day: [[40,57,36,53],[53,73,50,71],[71,85,65,84]] as Bar[],
  dayFinal: [[40,57,36,53],[53,73,50,71],[71,85,59,62]] as Bar[],
  bearPreview: [[85,90,70,74],[74,79,55,58],[58,67,45,49],[49,69,41,66]] as Bar[],
  bearFinal: [[85,90,70,74],[74,79,55,58],[58,67,45,49],[49,69,38,41]] as Bar[],
  shortPreview: [[23,40,19,35],[35,56,32,52],[52,55,32,34]] as Bar[],
  shortFinal: [[23,40,19,35],[35,56,32,52],[52,55,32,43]] as Bar[],
  stopRun: [[31,48,25,45],[45,61,41,58],[58,64,47,51],[51,59,38,54],[54,67,49,64]] as Bar[],
  strong: [[23,40,19,37],[37,58,34,54],[54,74,50,71],[71,86,67,83]] as Bar[],
  weak: [[23,40,19,37],[37,58,34,54],[54,68,45,55],[55,67,43,51]] as Bar[],
  closes: [[30,50,20,42],[42,67,32,58],[58,82,46,56],[56,74,44,67],[67,80,52,76]] as Bar[],
  smaller: [[84,88,69,73],[73,79,54,57],[57,73,45,67],[67,71,35,40],[40,65,32,61]] as Bar[],
  larger: [[84,88,69,73],[73,79,54,57],[57,73,35,61]] as Bar[],
  structure: [[76,80,58,62],[62,68,40,45],[45,67,36,63],[63,69,44,51],[51,76,38,73]] as Bar[],
  smallStop: [[78,83,59,63],[63,70,45,48],[48,68,40,64],[64,68,38,42],[42,71,40,68]] as Bar[],
  largeStop: [[78,83,59,63],[63,70,45,48],[48,68,40,64],[64,68,42,46],[46,71,41,68]] as Bar[],
  recovery: [[78,83,59,63],[63,70,45,48],[48,65,35,40],[40,70,30,68],[68,78,62,74]] as Bar[],
  higherLow: [[78,83,59,63],[63,70,45,48],[48,65,35,40],[40,70,38,68],[68,78,62,74]] as Bar[],
  failedTests: [[82,86,65,70],[70,74,48,52],[52,72,45,62],[62,67,38,42],[42,64,35,54],[54,58,28,31]] as Bar[],
} as const;

const panel = (title: string, note: string, bars: readonly Bar[], focus: readonly number[],
  level?: readonly [number, string], closeLine?: boolean): Panel =>
  ({ title, note, bars, focus, level, closeLine });
const figure = (heading: string, left: Panel, right: Panel, footer: string,
  description: string): Definition => ({ heading, panels: [left, right], footer, description });

export const chapterEightCharts: Record<ChapterEightScenarioId, Definition> = {
  'c08-early-entry': figure('Vorläufiger und endgültiger Bar',
    panel('Vor dem Schluss', 'Käufer scheinen stark', paths.early, [2]),
    panel('Nach dem Schluss', 'der Körper schrumpft', paths.earlyFinal, [2]),
    'Der letzte Preis ändert das Signal',
    'Links wirkt der letzte frei erfundene Bar vorläufig bullisch. Rechts hat derselbe Bar bei unverändertem Hoch einen deutlich schwächeren Endschluss.'),
  'c08-daily-close': figure('Ein Tagesbar ist lange offen',
    panel('Während des Tages', 'letzter Preis am Hoch', paths.day, [2]),
    panel('Am Tagesende', 'Schluss in der Mitte', paths.dayFinal, [2]),
    'Zwischenstand ist kein Tagessignal',
    'Eine schematische Tagesbewegung steht zunächst nahe dem Hoch und endet nach einem Rücklauf in der Mitte ihrer Spanne.'),
  'c08-false-bull-reversal': figure('Gegenbar verliert die Schlussphase',
    panel('Laufende Umkehr?', 'Käufer zunächst oben', paths.bearPreview, [3]),
    panel('Fertiger Bar', 'Verkäufer drücken zurück', paths.bearFinal, [3]),
    'Gegen den Trend besonders auf den Schluss achten',
    'Nach drei fallenden Bars erreicht ein vorläufig bullischer Gegenbar ein Hoch, schließt aber im zweiten Feld schwach nahe dem Tief.'),
  'c08-bear-signal-weakens': figure('Der Bärenschluss rückt vom Tief weg',
    panel('Zwischenstand', 'Preis direkt am Tief', paths.shortPreview, [2]),
    panel('Endstand', 'Käufer holen Ticks zurück', paths.shortFinal, [2]),
    'Gleiche Spanne, anderer Körper',
    'Zwei Ansichten desselben schematischen Bärenbars besitzen Hoch und Tief gemeinsam, aber der spätere Schluss liegt deutlich höher.'),
  'c08-premature-stop': figure('Zwei Schutzorte für denselben Long',
    panel('Spontan enger', 'Zwischenstich trifft Stop', paths.stopRun, [3], [40,'enger Stop']),
    panel('Strukturell geplant', 'größeres Tief hält', paths.stopRun, [3], [25,'Strukturtief']),
    'Der Schutzpunkt gehört zum Plan',
    'Ein Rückstich erreicht die nachträglich enge Schutzlinie, während die zuvor festgelegte tiefere Strukturgrenze unangetastet bleibt.'),
  'c08-entry-followthrough': figure('Schlüsse nach der Auslösung',
    panel('Anschluss', 'Körper bleiben kräftig', paths.strong, [2,3]),
    panel('Überlappung', 'Schlüsse verlieren Stärke', paths.weak, [2,3]),
    'Position nach beobachteter Folge verwalten',
    'Ein starker Entry und zwei weitere hoch schließende Bars stehen einer überlappenden Folge mit schwächeren Schlusslagen gegenüber.'),
  'c08-close-line': figure('Kerzen und Schlusslinie',
    panel('OHLC', 'Schatten bleiben sichtbar', paths.closes, [2]),
    panel('Nur Schlüsse', 'Extremstiche fehlen', paths.closes, [2], undefined, true),
    'Die Linie verbindet Endpreise',
    'Dieselben erfundenen Bars erscheinen einmal mit Körpern und Schatten und einmal als Linie ihrer fünf Schlusswerte.'),
  'c08-figure-context': figure('Kürzere und längere Arbeitsbars',
    panel('Kürzer', 'mehr Einzelreaktionen', paths.smaller, [3]),
    panel('Länger', 'breitere Struktur', paths.larger, [2]),
    'Die Zerlegung verändert die Schutzidee',
    'Zwei eigens entworfene Darstellungen einer fallenden und zurückgekauften Phase vergleichen viele kurze Bars mit wenigen größeren Bars.'),
  'c08-figure-stop-distance': figure('Stop am relevanten Tief',
    panel('Zu nah', 'innerhalb des Rücklaufs', paths.structure, [4], [44,'Zwischen-Stop']),
    panel('Unter Struktur', 'jenseits des wichtigen Tiefs', paths.structure, [4], [35,'Struktur-Stop']),
    'Positionsgröße statt Stop-Umetikettierung',
    'Bei einer schematischen Käuferreaktion liegt ein enger Schutzpunkt innerhalb des Pullbacks, der andere unter dem vorherigen tiefsten Bereich.'),
  'c08-figure-stopout': figure('Nur der kleinere Schutz löst aus',
    panel('Kurzer Blick', 'enger Stop berührt', paths.smallStop, [3], [40,'kleiner Stop']),
    panel('Größerer Blick', 'relevantes Tief hält', paths.largeStop, [3], [36,'großer Stop']),
    'Zwei Zeitebenen sind zwei Pläne',
    'Ein zusätzliches Zwischentief trifft nur die enge Schutzlinie; die unabhängig konstruierte größere Struktur bleibt über ihrer tiefen Grenze.'),
  'c08-figure-recovery': figure('Nach dem Stich die Rückeroberung',
    panel('Kleiner Blick', 'Outside-Up nach Tiefbruch', paths.recovery, [2,3]),
    panel('Planblick', 'Käuferreaktion hält Struktur', paths.higherLow, [2,3]),
    'Erst der Folgebalken zeigt die Rücknahme',
    'Ein bearisher Tiefstich wird links von einem starken bullischen Outside-Bar beantwortet; rechts bleibt die größere Schutzstruktur bestehen.'),
  'c08-figure-failed-breaks': figure('Gegenbrüche ohne Anschluss',
    panel('Erster Test', 'Hochstich fällt zurück', paths.failedTests, [2]),
    panel('Zweiter Test', 'Verkäufer schließen tiefer', paths.failedTests, [4,5]),
    'Bruch und Folge getrennt lesen',
    'Zwei kurze Gegenstiche innerhalb einer frei erfundenen Abwärtsfolge erhalten keinen bullischen Anschluss; die späteren Bars fallen erneut.'),
};

export const chapterEightDescriptions = Object.fromEntries(
  Object.entries(chapterEightCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterEightScenarioId, string>;

function PanelDrawing({ value, x, width }: { value: Panel; x: number; width: number }) {
  const y = (price: number) => 258 - price * 1.65;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(22, spacing * 0.48);
  const coords = value.bars.map((bar, index) => ({
    x: x + 26 + (index + 0.5) * spacing, y: y(bar[3]),
  }));
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.level ? <>
      <line className="breakout-line" x1={x + 12} x2={x + width - 12}
        y1={y(value.level[0])} y2={y(value.level[0])} />
      <text className="chart-small strong" x={x + 18} y={y(value.level[0]) - 7}>
        {value.level[1]}
      </text>
    </> : null}
    {value.closeLine ? <>
      <polyline className="chart-line" fill="none" stroke="#2563eb" strokeWidth="3"
        points={coords.map((point) => `${point.x},${point.y}`).join(' ')} />
      {coords.map((point, index) => <circle key={index} cx={point.x} cy={point.y}
        r={value.focus.includes(index) ? 6 : 4} fill="#2563eb" />)}
    </> : value.bars.map(([open, high, low, close], index) => {
      const cx = coords[index].x;
      const tone = close >= open ? 'bull' : 'bear';
      return <g key={index}>
        {value.focus.includes(index) ? <rect className="chart-zone"
          x={cx - bodyWidth / 2 - 7} y={y(high) - 9}
          width={bodyWidth + 14} height={y(low) - y(high) + 18} rx={6} /> : null}
        <line className={`candle-wick ${tone}`} x1={cx} x2={cx} y1={y(high)} y2={y(low)} />
        <rect className={`candle-body ${tone}`} x={cx - bodyWidth / 2}
          y={Math.min(y(open), y(close))} width={bodyWidth}
          height={Math.max(3, Math.abs(y(open) - y(close)))} rx={2} />
      </g>;
    })}
    <text className="chart-small strong" x={x + width / 2} y={286} textAnchor="middle">{value.note}</text>
  </g>;
}

export function ChapterEightChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterEightCharts, scenario)) return null;
  const definition = chapterEightCharts[scenario as ChapterEightScenarioId];
  const width = 343;
  return <g className="chapter-eight-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * (width + 14)} width={width} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
