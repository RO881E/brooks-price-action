import type { ChartScenarioId, ChapterNineScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
type Panel = {
  title: string;
  note: string;
  bars: readonly Bar[];
  mode?: 'candles' | 'closes';
  focus?: readonly number[];
  level?: readonly [price: number, label: string];
};
type Definition = {
  heading: string;
  panels: readonly [Panel, Panel];
  footer: string;
  description: string;
};

// Sämtliche Preise sind synthetische, normierte Lehrwerte. Die Kursreihen sind
// nicht aus einer Buchabbildung digitalisiert und bilden keine ETF-Rendite ab.
function bars(closes: readonly number[]): Bar[] {
  return closes.map((close, index) => {
    const open = index === 0 ? close - 2 : closes[index - 1];
    return [open, Math.max(open, close) + 3, Math.min(open, close) - 3, close];
  });
}

const panel = (title: string, note: string, closes: readonly number[],
  options: Omit<Panel, 'title' | 'note' | 'bars'> = {}): Panel =>
  ({ title, note, bars: bars(closes), ...options });

const pair = (heading: string, left: Panel, right: Panel, footer: string,
  description: string): Definition => ({ heading, panels: [left, right], footer, description });

export const chapterNineCharts: Record<ChapterNineScenarioId, Definition> = {
  'c09-view-choice': pair('Was blendet eine andere Darstellung aus?',
    panel('Bars', 'Extremstiche sichtbar', [43,56,50,62,54,69], { focus: [2,4] }),
    panel('Schlusslinie', 'nur die Endpreise', [43,56,50,62,54,69], { mode: 'closes', focus: [2,4] }),
    'Gleiche Schlüsse · andere Details',
    'Dieselbe erfundene Folge wird links als sechs Bars samt Hoch und Tief und rechts als Linie der sechs Schlusskurse gezeigt.'),
  'c09-spy-context': pair('Zwei Instrumente für einen Marktbereich',
    panel('Emini', 'Arbeitschart', [73,68,58,53,61,65,62,72], { focus: [3,4] }),
    panel('SPY', 'ergänzender ETF', [74,69,57,55,62,66,63,73], { focus: [3,4] }),
    'Richtung vergleichen · Skalen getrennt halten',
    'Zwei erfundene normierte Preisfolgen durchlaufen links und rechts ähnliche Richtungsphasen, während die Einzelbars am Tief verschieden aussehen.'),
  'c09-inverse-view': pair('Die Gegenrichtung als Prüfstein',
    panel('Markt', 'erstes Bild', [36,48,61,68,66,73,79]),
    panel('Inverse Ansicht', 'Gegenfrage', [76,66,54,49,52,44,39]),
    'Gegenläufig ≠ punktgenau gespiegelt',
    'Ein normierter Beispielmarkt steigt überwiegend, während die separat skalierte inverse Ansicht überwiegend fällt; einzelne Zwischenschritte sind nicht gespiegelt.'),
  'c09-flag-or-bottom': pair('Zwei Lesarten derselben Phase',
    panel('Emini: Flaggenidee?', 'Pause nach einem Anstieg', [39,54,70,76,73,69,71,67], { focus: [4,5,6] }),
    panel('SDS: Bodenidee?', 'Gegenansicht stabilisiert', [76,61,49,44,43,47,54,61], { focus: [3,4,5] }),
    'Beide Ideen bleiben vorerst offen',
    'Links steigt eine erfundene Folge vor einer seitlichen Pause, rechts geht eine gegenläufige Folge von Abwärtsbars allmählich in eine Rundung über.'),
  'c09-failed-breakout': pair('Nach der Flaggenpause',
    panel('Ausbruch hält', 'Käufer bleiben oben', [40,51,62,66,68,77,83], { level: [72,'Ausbruchsgrenze'], focus: [5,6] }),
    panel('Ausbruch scheitert', 'zurück unter die Grenze', [40,51,62,66,68,77,61], { level: [72,'Ausbruchsgrenze'], focus: [5,6] }),
    'Erst die Folge trennt Fortsetzung und Fehlschlag',
    'Zwei selbst entworfene Alternativen verlassen eine Pause nach oben: links halten die Käufer die Zone, rechts fällt der Folgeschluss wieder unter die zuvor überschrittene Linie.'),
  'c09-extra-markets': pair('Vergleiche nur mit einer klaren Frage',
    panel('Emini', 'bestehender Plan', [37,49,62,57,69,63,78]),
    panel('Nasdaq/QQQ', 'anderer Index', [41,52,61,55,65,60,72]),
    'Ähnlich ist nicht identisch',
    'Zwei erfundene Indexpfade haben ähnliche Auf- und Abwärtsabschnitte, aber der zweite endet schwächer und hat eine eigene Skala.'),
  'c09-adjustments': pair('Ein Versatz zur Eröffnung',
    panel('SPY', 'größere Startlücke', [72,76,69,73,81], { level: [45,'Vortag'] }),
    panel('Emini', 'kleinere Startlücke', [57,61,54,58,66], { level: [45,'Vortag'] }),
    'Startabstand und weitere Richtung trennen',
    'Eine gemeinsame symbolische Vortagslinie steht links weiter unter dem SPY-Eröffnungskurs als rechts unter dem Emini-Start; die folgenden Bewegungen sind in der normierten Darstellung ähnlich.'),
  'c09-figure-91-pair': pair('Fall 9.1 · ähnlicher Marktverlauf',
    panel('Emini', 'Pause und Rückkehr', [76,66,55,58,51,56,65,70], { focus: [4,5] }),
    panel('SPY', 'Tief etwas klarer', [77,67,56,59,53,60,66,71], { focus: [4,5] }),
    'Gleiches Zeitfenster · getrennte Preisreihen',
    'Zwei unabhängig erfundene Reihen fallen, bilden eine Pause und steigen wieder; die Einzelbars um das Tief besitzen links und rechts leicht verschiedene Körper.'),
  'c09-figure-91-inverse': pair('Fall 9.1 · dritte Perspektive',
    panel('SPY', 'Rückgang und Erholung', [77,69,58,54,59,68,73]),
    panel('SDS', 'Gegenverlauf', [31,41,53,57,52,44,38]),
    'Das dritte Bild ist eine Gegenprobe',
    'Die frei konstruierten, getrennt skalierten ETF-Reihen laufen über weite Strecken gegenläufig, ohne dass jede Einzelkerze eine exakte Spiegelung wäre.'),
  'c09-figure-92-gap': pair('Fall 9.2 · Gap und Tagesverlauf',
    panel('SPY', 'größerer Versatz', [71,65,59,69,78,75,68], { level: [45,'Vortag'], focus: [0] }),
    panel('Emini', 'kleinerer Versatz', [55,49,44,52,64,61,55], { level: [45,'Vortag'], focus: [0] }),
    'Nach dem Start den Verlauf lesen',
    'Die zwei erfundenen Reihen starten unterschiedlich weit über einer symbolischen Vortagslinie, zeigen danach aber jeweils Rücklauf, Anstieg und erneuten Rücklauf.'),
};

export const chapterNineDescriptions = Object.fromEntries(
  Object.entries(chapterNineCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterNineScenarioId, string>;

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
      <text className="chart-small strong" x={x + 18} y={y(value.level[0]) - 8}>
        {value.level[1]}
      </text>
    </> : null}
    {value.mode === 'closes' ? <>
      <polyline fill="none" stroke="#2563eb" strokeWidth="3"
        points={value.bars.map((bar, index) => `${cx(index)},${y(bar[3])}`).join(' ')} />
      {value.bars.map((bar, index) => <circle key={index} cx={cx(index)} cy={y(bar[3])}
        r={value.focus?.includes(index) ? 6 : 4} fill="#2563eb" />)}
    </> : value.bars.map(([open, high, low, close], index) => {
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

export function ChapterNineChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterNineCharts, scenario)) return null;
  const definition = chapterNineCharts[scenario as ChapterNineScenarioId];
  return <g className="chapter-nine-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
