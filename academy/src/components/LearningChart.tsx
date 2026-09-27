import type { ChartScenarioId } from '../content/types';

interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
  label?: string;
}

interface LearningChartProps {
  scenario: ChartScenarioId;
  title: string;
}

const WIDTH = 760;
const HEIGHT = 330;
const PAD_X = 48;
const PAD_Y = 36;

const scenarioDescriptions: Record<ChartScenarioId, string> = {
  'auction-balance':
    'Ein großer Bar mit markiertem Hoch, Tief, Eröffnung und Schluss sowie Pfeilen für aggressives Kaufen und Verkaufen.',
  'institutional-flow':
    'Mehrere institutionelle Motive treffen in einer gemeinsamen Auktion aufeinander und verdichten sich zum sichtbaren Kurs.',
  'fractal-timeframes':
    'Drei Zeitebenen zeigen dieselbe Grundbewegung mit unterschiedlich vielen Details.',
  'indicator-lag':
    'Eine Kursbewegung dreht, bevor ein geglätteter Indikator seine Richtung sichtbar ändert.',
  'news-reaction':
    'Nach einer positiven Nachricht eröffnet der Markt mit einem Gap, verkauft jedoch sofort ab und schließt schwach.',
  'timeframe-discipline':
    'Dasselbe Pullback wirkt im Plan-Zeitrahmen geordnet und in einer kleineren Zeitebene chaotisch.',
  'risk-reward':
    'Einstieg, Stop und Ziel zeigen, wie Trefferwahrscheinlichkeit und Chance-Risiko-Verhältnis zusammenwirken.',
  'martingale-growth':
    'Eine Balkenreihe zeigt die exponentiell steigende Positionsgröße nach aufeinanderfolgenden Verlusten.',
  'trend-strength':
    'Eine bullische Kerzenfolge zeigt große Trendbars, geringe Überlappung, kleine Pullbacks und erfolglose Gegenbewegungen.',
  'breakout-strength':
    'Ein Markt verlässt eine Range mit einem großen Ausbruchsbar, Anschluss und einem flachen Test.',
  'reversal-bars':
    'Ein bullischer und ein bearisher Reversal-Bar werden spiegelbildlich mit Körper, Schluss und Zurückweisung gezeigt.',
  'reversal-strength':
    'Eine Abwärtsstruktur bricht, testet das Tief und baut mit Anschluss eine neue Aufwärtsstruktur auf.',
  'probability-spectrum':
    'Ein Spektrum von ausgeglichener Wahrscheinlichkeit bis zu stärkerer bullischer oder bärischer Evidenz.',
  'trend-range-transition':
    'Eine Kerzenfolge beginnt als Aufwärtstrend, geht in eine überlappende Range über und bricht anschließend nach oben aus.',
  'bar-anatomy':
    'Ein einzelner Bar mit Beschriftung seiner vier Preispunkte und der beiden Tails.',
  'high-low-count':
    'Eine Aufwärtsstruktur mit einem zweibeinigen Pullback und markierten High-1- und High-2-Versuchen.',
  'high-low-failure':
    'Vier Aufwärtsversuche innerhalb eines Pullbacks verlieren nacheinander an Wirkung; der letzte Fehlschlag kippt die Erwartung.',
};

function yScale(value: number, min: number, max: number): number {
  const usable = HEIGHT - PAD_Y * 2;
  return PAD_Y + ((max - value) / (max - min)) * usable;
}

function CandleSeries({
  candles,
  range,
  annotations = true,
}: {
  candles: Candle[];
  range?: { from: number; to: number; label: string };
  annotations?: boolean;
}) {
  const min = Math.min(...candles.map((candle) => candle.low)) - 1;
  const max = Math.max(...candles.map((candle) => candle.high)) + 1;
  const step = (WIDTH - PAD_X * 2) / candles.length;
  const bodyWidth = Math.max(10, Math.min(24, step * 0.52));

  return (
    <>
      {[0, 1, 2, 3, 4].map((index) => {
        const y = PAD_Y + ((HEIGHT - PAD_Y * 2) / 4) * index;
        return (
          <line
            className="chart-grid"
            key={index}
            x1={PAD_X}
            x2={WIDTH - PAD_X}
            y1={y}
            y2={y}
          />
        );
      })}

      {range ? (
        <g>
          <rect
            className="chart-range"
            x={PAD_X + range.from * step}
            y={PAD_Y}
            width={(range.to - range.from + 1) * step}
            height={HEIGHT - PAD_Y * 2}
            rx="14"
          />
          <text
            className="chart-region-label"
            x={PAD_X + ((range.from + range.to + 1) * step) / 2}
            y={PAD_Y + 20}
            textAnchor="middle"
          >
            {range.label}
          </text>
        </g>
      ) : null}

      {candles.map((candle, index) => {
        const x = PAD_X + step * index + step / 2;
        const isBull = candle.close >= candle.open;
        const openY = yScale(candle.open, min, max);
        const closeY = yScale(candle.close, min, max);
        const highY = yScale(candle.high, min, max);
        const lowY = yScale(candle.low, min, max);
        const bodyY = Math.min(openY, closeY);
        const bodyHeight = Math.max(3, Math.abs(openY - closeY));

        return (
          <g key={`${index}-${candle.open}-${candle.close}`}>
            <line
              className={isBull ? 'candle-wick bull' : 'candle-wick bear'}
              x1={x}
              x2={x}
              y1={highY}
              y2={lowY}
            />
            <rect
              className={isBull ? 'candle-body bull' : 'candle-body bear'}
              x={x - bodyWidth / 2}
              y={bodyY}
              width={bodyWidth}
              height={bodyHeight}
              rx="2"
            />
            {annotations && candle.label ? (
              <g>
                <circle
                  className="chart-marker"
                  cx={x}
                  cy={highY - 14}
                  r="13"
                />
                <text
                  className="chart-marker-text"
                  x={x}
                  y={highY - 10}
                  textAnchor="middle"
                >
                  {candle.label}
                </text>
              </g>
            ) : null}
          </g>
        );
      })}
    </>
  );
}

function AuctionBalance() {
  const top = 58;
  const bottom = 274;
  const open = 219;
  const close = 112;
  const center = WIDTH / 2;

  return (
    <>
      <line className="candle-wick bull hero" x1={center} x2={center} y1={top} y2={bottom} />
      <rect
        className="candle-body bull hero"
        x={center - 34}
        y={close}
        width="68"
        height={open - close}
        rx="6"
      />
      <line className="chart-guide" x1={center - 96} x2={center + 96} y1={top} y2={top} />
      <line className="chart-guide" x1={center - 96} x2={center + 96} y1={bottom} y2={bottom} />
      <line className="chart-guide" x1={center - 96} x2={center - 34} y1={open} y2={open} />
      <line className="chart-guide" x1={center + 34} x2={center + 96} y1={close} y2={close} />
      <text className="chart-label" x={center + 108} y={top + 5}>Hoch · Angebot reagiert</text>
      <text className="chart-label" x={center + 108} y={bottom + 5}>Tief · Nachfrage reagiert</text>
      <text className="chart-label" x={center - 108} y={open + 5} textAnchor="end">Eröffnung</text>
      <text className="chart-label" x={center + 108} y={close + 5}>Schluss</text>
      <path className="chart-arrow buy" d="M130 240 C170 210 205 162 280 132" />
      <path className="chart-arrow sell" d="M630 112 C585 122 548 140 480 166" />
      <text className="chart-action buy" x="122" y="264">aggressive Käufer</text>
      <text className="chart-action sell" x="650" y="100" textAnchor="end">aktive Verkäufer</text>
    </>
  );
}

function ProbabilitySpectrum() {
  return (
    <>
      <defs>
        <linearGradient id="probability" x1="0" x2="1">
          <stop offset="0" stopColor="#bd4a45" />
          <stop offset="0.5" stopColor="#d9c8a5" />
          <stop offset="1" stopColor="#268064" />
        </linearGradient>
      </defs>
      <text className="chart-kicker" x={WIDTH / 2} y="58" textAnchor="middle">
        Evidenz verschiebt die Erwartung – sie beseitigt das Risiko nicht
      </text>
      <rect x="90" y="132" width="580" height="28" rx="14" fill="url(#probability)" />
      <line className="probability-tick" x1="380" x2="380" y1="112" y2="181" />
      <circle className="probability-marker" cx="505" cy="146" r="20" />
      <text className="probability-marker-text" x="505" y="151" textAnchor="middle">?</text>
      <text className="chart-label" x="90" y="202">bärische Evidenz</text>
      <text className="chart-label" x="380" y="202" textAnchor="middle">ungefähr ausgeglichen</text>
      <text className="chart-label" x="670" y="202" textAnchor="end">bullische Evidenz</text>
      <text className="chart-small" x="505" y="104" textAnchor="middle">Vorteil, keine Sicherheit</text>
      <g transform="translate(165 250)">
        <circle className="evidence-dot active" cx="0" cy="0" r="7" />
        <circle className="evidence-dot active" cx="28" cy="0" r="7" />
        <circle className="evidence-dot active" cx="56" cy="0" r="7" />
        <circle className="evidence-dot" cx="84" cy="0" r="7" />
        <text className="chart-small" x="112" y="5">mehrere Hinweise stimmen überein</text>
      </g>
    </>
  );
}

const trendRangeCandles: Candle[] = [
  { open: 22, high: 27, low: 20, close: 26 },
  { open: 25, high: 31, low: 24, close: 30 },
  { open: 29, high: 35, low: 28, close: 34 },
  { open: 33, high: 40, low: 32, close: 39 },
  { open: 38, high: 44, low: 37, close: 43 },
  { open: 43, high: 46, low: 39, close: 40 },
  { open: 40, high: 44, low: 38, close: 43 },
  { open: 43, high: 45, low: 39, close: 40 },
  { open: 40, high: 44, low: 38, close: 42 },
  { open: 42, high: 45, low: 39, close: 41 },
  { open: 41, high: 44, low: 38, close: 43 },
  { open: 43, high: 49, low: 42, close: 48 },
  { open: 48, high: 54, low: 47, close: 53 },
  { open: 52, high: 59, low: 51, close: 58 },
];

const highLowCandles: Candle[] = [
  { open: 31, high: 36, low: 30, close: 35 },
  { open: 35, high: 41, low: 34, close: 40 },
  { open: 40, high: 45, low: 39, close: 44 },
  { open: 44, high: 45, low: 39, close: 40 },
  { open: 40, high: 42, low: 36, close: 37 },
  { open: 37, high: 40, low: 35, close: 39, label: 'H1' },
  { open: 39, high: 40, low: 34, close: 35 },
  { open: 35, high: 37, low: 31, close: 33 },
  { open: 33, high: 38, low: 32, close: 37, label: 'H2' },
  { open: 37, high: 43, low: 36, close: 42 },
  { open: 42, high: 48, low: 41, close: 47 },
];

const indicatorCandles: Candle[] = [
  { open: 24, high: 28, low: 22, close: 27 },
  { open: 27, high: 33, low: 26, close: 32 },
  { open: 32, high: 38, low: 31, close: 37 },
  { open: 37, high: 43, low: 36, close: 42 },
  { open: 42, high: 47, low: 41, close: 46 },
  { open: 46, high: 48, low: 42, close: 44 },
  { open: 44, high: 45, low: 37, close: 38 },
  { open: 38, high: 39, low: 31, close: 33 },
  { open: 33, high: 34, low: 27, close: 29 },
  { open: 29, high: 33, low: 27, close: 32 },
  { open: 32, high: 36, low: 30, close: 35 },
];

const newsCandles: Candle[] = [
  { open: 31, high: 35, low: 29, close: 34 },
  { open: 34, high: 37, low: 32, close: 35 },
  { open: 35, high: 38, low: 33, close: 36 },
  { open: 47, high: 49, low: 42, close: 43 },
  { open: 43, high: 44, low: 37, close: 38 },
  { open: 38, high: 40, low: 33, close: 34 },
  { open: 34, high: 36, low: 29, close: 31 },
  { open: 31, high: 34, low: 28, close: 33 },
  { open: 33, high: 34, low: 27, close: 29 },
  { open: 29, high: 31, low: 25, close: 27 },
];

const trendStrengthCandles: Candle[] = [
  { open: 20, high: 27, low: 19, close: 26 },
  { open: 26, high: 34, low: 25, close: 33 },
  { open: 33, high: 40, low: 32, close: 39 },
  { open: 39, high: 42, low: 36, close: 38 },
  { open: 38, high: 45, low: 37, close: 44 },
  { open: 44, high: 51, low: 43, close: 50 },
  { open: 50, high: 53, low: 47, close: 49 },
  { open: 49, high: 57, low: 48, close: 56 },
  { open: 56, high: 63, low: 55, close: 62 },
  { open: 62, high: 65, low: 59, close: 61 },
  { open: 61, high: 69, low: 60, close: 68 },
];

const breakoutCandles: Candle[] = [
  { open: 31, high: 37, low: 29, close: 35 },
  { open: 35, high: 38, low: 31, close: 33 },
  { open: 33, high: 37, low: 30, close: 36 },
  { open: 36, high: 39, low: 32, close: 34 },
  { open: 34, high: 38, low: 31, close: 37 },
  { open: 37, high: 50, low: 36, close: 49 },
  { open: 49, high: 58, low: 48, close: 57 },
  { open: 57, high: 63, low: 55, close: 61 },
  { open: 61, high: 63, low: 56, close: 58 },
  { open: 58, high: 64, low: 57, close: 63 },
];

const reversalCandles: Candle[] = [
  { open: 62, high: 64, low: 56, close: 58 },
  { open: 58, high: 59, low: 50, close: 52 },
  { open: 52, high: 54, low: 45, close: 47 },
  { open: 47, high: 49, low: 40, close: 42 },
  { open: 42, high: 45, low: 36, close: 38 },
  { open: 38, high: 44, low: 35, close: 43 },
  { open: 43, high: 49, low: 41, close: 48 },
  { open: 48, high: 51, low: 44, close: 46 },
  { open: 46, high: 53, low: 45, close: 52 },
  { open: 52, high: 60, low: 51, close: 59 },
  { open: 59, high: 66, low: 58, close: 65 },
];

const highLowFailureCandles: Candle[] = [
  { open: 58, high: 62, low: 56, close: 60 },
  { open: 60, high: 61, low: 53, close: 55 },
  { open: 55, high: 59, low: 52, close: 58, label: 'H1' },
  { open: 58, high: 59, low: 49, close: 51 },
  { open: 51, high: 56, low: 48, close: 55, label: 'H2' },
  { open: 55, high: 56, low: 45, close: 47 },
  { open: 47, high: 53, low: 44, close: 52, label: 'H3' },
  { open: 52, high: 53, low: 42, close: 44 },
  { open: 44, high: 50, low: 41, close: 49, label: 'H4' },
  { open: 49, high: 50, low: 38, close: 40 },
  { open: 40, high: 42, low: 31, close: 33 },
];

function InstitutionalFlow() {
  return (
    <>
      <text className="chart-kicker" x="380" y="36" textAnchor="middle">
        Unterschiedliche Motive treffen in derselben Auktion zusammen
      </text>
      <g transform="translate(34 70)">
        <rect className="chart-panel bull" width="205" height="190" rx="18" />
        <text className="chart-panel-title bull" x="102" y="30" textAnchor="middle">Kaufseite</text>
        <text className="chart-label" x="24" y="68">Fonds baut Position auf</text>
        <text className="chart-label" x="24" y="102">Algorithmus nimmt Angebot</text>
        <text className="chart-label" x="24" y="136">Short deckt Risiko</text>
        <text className="chart-label" x="24" y="170">Market Maker quotiert</text>
      </g>
      <g transform="translate(521 70)">
        <rect className="chart-panel bear" width="205" height="190" rx="18" />
        <text className="chart-panel-title bear" x="102" y="30" textAnchor="middle">Verkaufsseite</text>
        <text className="chart-label" x="24" y="68">Fonds reduziert Bestand</text>
        <text className="chart-label" x="24" y="102">Algorithmus nimmt Gebote</text>
        <text className="chart-label" x="24" y="136">Long sichert Gewinn</text>
        <text className="chart-label" x="24" y="170">Hedge schützt Portfolio</text>
      </g>
      <path className="chart-arrow buy" d="M238 164 C285 164 300 164 332 164" />
      <path className="chart-arrow sell" d="M522 164 C475 164 460 164 428 164" />
      <circle className="auction-core" cx="380" cy="164" r="52" />
      <text className="auction-core-title" x="380" y="156" textAnchor="middle">PREIS</text>
      <text className="chart-small inverse" x="380" y="178" textAnchor="middle">sichtbares Ergebnis</text>
      <text className="chart-small" x="380" y="292" textAnchor="middle">
        Dein einzelner Stop ist Teil des Flusses – nicht dessen persönliches Ziel
      </text>
    </>
  );
}

function FractalTimeframes() {
  const panels = [
    { x: 28, label: 'Tageschart', detail: 'großer Swing', points: '18,151 58,126 94,139 132,93 174,60 212,78' },
    { x: 274, label: 'Stundenchart', detail: 'Trend + Pullbacks', points: '18,151 44,130 65,137 86,115 108,121 132,89 153,100 177,63 212,78' },
    { x: 520, label: '5-Minuten', detail: 'viele kleine Kämpfe', points: '18,151 34,137 48,143 61,125 76,133 89,111 104,120 120,94 137,103 151,78 166,88 181,61 197,69 212,78' },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">Eine Struktur · drei Auflösungen</text>
      {panels.map((panel) => (
        <g key={panel.label} transform={`translate(${panel.x} 64)`}>
          <rect className="chart-panel" width="220" height="208" rx="16" />
          <line className="chart-guide" x1="18" x2="212" y1="151" y2="151" />
          <polyline className="chart-price-line" points={panel.points} />
          <text className="chart-panel-title" x="110" y="28" textAnchor="middle">{panel.label}</text>
          <text className="chart-small" x="110" y="187" textAnchor="middle">{panel.detail}</text>
        </g>
      ))}
      <text className="chart-small" x="380" y="307" textAnchor="middle">Form ähnlich · Bedeutung nur mit Kontext und Zeitrahmen</text>
    </>
  );
}

function IndicatorLag() {
  return (
    <>
      <CandleSeries candles={indicatorCandles} annotations={false} />
      <path className="indicator-line" d="M74 224 C150 194 224 136 300 105 C370 76 430 81 478 124 C535 176 590 216 686 202" />
      <circle className="chart-focus" cx="436" cy="97" r="7" />
      <line className="chart-guide" x1="436" x2="436" y1="58" y2="272" />
      <text className="chart-region-label" x="425" y="49" textAnchor="end">Preis dreht zuerst</text>
      <text className="chart-region-label gold" x="596" y="188">Glättung reagiert später</text>
    </>
  );
}

function NewsReaction() {
  return (
    <>
      <CandleSeries candles={newsCandles} annotations={false} />
      <rect className="chart-news-badge" x="236" y="44" width="132" height="30" rx="15" />
      <text className="chart-news-text" x="302" y="64" textAnchor="middle">POSITIVE NEWS</text>
      <path className="chart-arrow buy" d="M302 78 C302 92 294 100 280 112" />
      <line className="chart-guide" x1="48" x2="712" y1="204" y2="204" />
      <text className="chart-small" x="54" y="196">vorherige Akzeptanz</text>
      <text className="chart-region-label" x="348" y="102">Gap</text>
      <text className="chart-region-label bear" x="568" y="264">Verkauf übernimmt</text>
    </>
  );
}

function TimeframeDiscipline() {
  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">Der Plan bestimmt den Beobachtungsmaßstab</text>
      <g transform="translate(35 64)">
        <rect className="chart-panel" width="320" height="220" rx="16" />
        <text className="chart-panel-title" x="160" y="30" textAnchor="middle">5-Minuten-Plan</text>
        <polyline className="chart-price-line" points="24,173 76,131 119,92 162,112 201,129 244,93 294,57" />
        <path className="chart-zone" d="M152 99 L214 99 L214 145 L152 145 Z" />
        <text className="chart-small" x="183" y="161" textAnchor="middle">geplanter Pullback</text>
      </g>
      <g transform="translate(405 64)">
        <rect className="chart-panel warning" width="320" height="220" rx="16" />
        <text className="chart-panel-title bear" x="160" y="30" textAnchor="middle">Zoom auf 1 Minute</text>
        <polyline className="chart-price-line noisy" points="24,173 44,151 61,162 80,127 96,139 116,100 133,116 149,91 166,127 181,104 197,139 214,111 231,126 248,92 265,104 282,72 298,57" />
        <text className="chart-small" x="160" y="196" textAnchor="middle">mehr Rauschen · gleicher übergeordneter Plan</text>
      </g>
      <text className="chart-small" x="380" y="312" textAnchor="middle">Ein kleinerer Chart darf den Stop nicht nachträglich neu erfinden</text>
    </>
  );
}

function RiskReward() {
  return (
    <>
      <text className="chart-kicker" x="380" y="35" textAnchor="middle">Erwartungswert = Trefferchance × Gewinn − Verlustchance × Verlust</text>
      <line className="risk-spine" x1="160" x2="600" y1="166" y2="166" />
      <circle className="risk-point entry" cx="380" cy="166" r="14" />
      <circle className="risk-point stop" cx="220" cy="166" r="14" />
      <circle className="risk-point target" cx="620" cy="166" r="14" />
      <text className="chart-panel-title" x="380" y="137" textAnchor="middle">Einstieg</text>
      <text className="chart-panel-title bear" x="220" y="137" textAnchor="middle">Stop · −1R</text>
      <text className="chart-panel-title bull" x="620" y="137" textAnchor="middle">Ziel · +1,5R</text>
      <path className="risk-bracket stop" d="M220 200 L220 218 L380 218 L380 200" />
      <path className="risk-bracket target" d="M380 200 L380 250 L620 250 L620 200" />
      <text className="chart-small" x="300" y="239" textAnchor="middle">Risiko</text>
      <text className="chart-small" x="500" y="271" textAnchor="middle">möglicher Gewinn</text>
      <g transform="translate(92 278)">
        <rect className="chart-pill" width="576" height="34" rx="17" />
        <text className="chart-small strong" x="288" y="22" textAnchor="middle">Kein einzelner Treffer beweist die Qualität · die Serie entscheidet</text>
      </g>
    </>
  );
}

function MartingaleGrowth() {
  const stakes = [1, 2, 4, 8, 16];
  const heights = [16, 30, 58, 108, 196];

  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">Verdopplung nach jedem Verlust</text>
      <line className="chart-guide" x1="82" x2="690" y1="278" y2="278" />
      {stakes.map((stake, index) => {
        const x = 110 + index * 124;
        const height = heights[index];
        return (
          <g key={stake}>
            <rect className={index < 3 ? 'martingale-bar' : 'martingale-bar danger'} x={x} y={278 - height} width="64" height={height} rx="7" />
            <text className="chart-panel-title" x={x + 32} y={264 - height} textAnchor="middle">{stake}R</text>
            <text className="chart-small" x={x + 32} y="302" textAnchor="middle">Verlust {index + 1}</text>
          </g>
        );
      })}
      <path className="chart-arrow sell" d="M450 90 C514 54 588 50 648 67" />
      <text className="chart-region-label bear" x="650" y="46" textAnchor="end">Risiko wächst exponentiell</text>
    </>
  );
}

function TrendStrength() {
  return (
    <>
      <CandleSeries candles={trendStrengthCandles} annotations={false} />
      <path className="trend-channel" d="M65 269 L697 59" />
      <path className="trend-channel soft" d="M65 211 L697 21" />
      <text className="chart-region-label bull" x="116" y="286">kleine Rücksetzer</text>
      <text className="chart-region-label bull" x="612" y="62">Schlüsse nahe Hoch</text>
      <g transform="translate(296 258)">
        <rect className="chart-pill" width="190" height="32" rx="16" />
        <text className="chart-small strong" x="95" y="21" textAnchor="middle">Gegenseite ohne Anschluss</text>
      </g>
    </>
  );
}

function BreakoutStrength() {
  return (
    <>
      <CandleSeries candles={breakoutCandles} range={{ from: 0, to: 4, label: 'Trading Range' }} annotations={false} />
      <line className="breakout-line" x1="48" x2="712" y1="185" y2="185" />
      <text className="chart-region-label" x="382" y="176">Ausbruchsgrenze</text>
      <text className="chart-region-label bull" x="476" y="68">Impuls + Anschluss</text>
      <path className="chart-arrow buy" d="M633 111 C650 128 650 146 634 164" />
      <text className="chart-region-label" x="684" y="105" textAnchor="end">flacher Test</text>
    </>
  );
}

function ReversalBars() {
  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">Zurückweisung im Bar · Bestätigung erst im nächsten Schritt</text>
      <g transform="translate(95 62)">
        <rect className="chart-panel bull" width="250" height="222" rx="18" />
        <line className="candle-wick bull hero" x1="125" x2="125" y1="48" y2="184" />
        <rect className="candle-body bull hero" x="93" y="72" width="64" height="64" rx="5" />
        <text className="chart-panel-title bull" x="125" y="28" textAnchor="middle">Bullischer Reversal-Bar</text>
        <text className="chart-small" x="174" y="84">Schluss nahe Hoch</text>
        <text className="chart-small" x="174" y="177">langer unterer Tail</text>
      </g>
      <g transform="translate(415 62)">
        <rect className="chart-panel bear" width="250" height="222" rx="18" />
        <line className="candle-wick bear hero" x1="125" x2="125" y1="48" y2="184" />
        <rect className="candle-body bear hero" x="93" y="96" width="64" height="64" rx="5" />
        <text className="chart-panel-title bear" x="125" y="28" textAnchor="middle">Bearisher Reversal-Bar</text>
        <text className="chart-small" x="174" y="65">langer oberer Tail</text>
        <text className="chart-small" x="174" y="151">Schluss nahe Tief</text>
      </g>
      <text className="chart-small" x="380" y="312" textAnchor="middle">Signalbar beschreibt Potenzial · Entry-Bar und Follow-through prüfen Übernahme</text>
    </>
  );
}

function ReversalStrength() {
  return (
    <>
      <CandleSeries candles={reversalCandles} annotations={false} />
      <path className="structure-line bear" d="M72 63 L323 239" />
      <path className="structure-line bull" d="M372 247 L690 49" />
      <line className="breakout-line" x1="48" x2="712" y1="174" y2="174" />
      <circle className="chart-focus" cx="384" cy="252" r="7" />
      <text className="chart-region-label bear" x="142" y="89">alter Abwärtstrend</text>
      <text className="chart-region-label" x="388" y="285" textAnchor="middle">Test hält</text>
      <text className="chart-region-label bull" x="642" y="72">neuer Anschluss</text>
    </>
  );
}

function HighLowFailure() {
  return (
    <>
      <CandleSeries candles={highLowFailureCandles} />
      <path className="structure-line bear" d="M75 70 L688 270" />
      <text className="chart-region-label" x="342" y="46" textAnchor="middle">Versuche verlieren an Höhe</text>
      <text className="chart-region-label bear" x="688" y="294" textAnchor="end">H4 scheitert · Kontrollfrage neu stellen</text>
    </>
  );
}

export function LearningChart({ scenario, title }: LearningChartProps) {
  return (
    <div className="learning-chart">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby={`chart-title-${scenario} chart-desc-${scenario}`}
      >
        <title id={`chart-title-${scenario}`}>{title}</title>
        <desc id={`chart-desc-${scenario}`}>{scenarioDescriptions[scenario]}</desc>
        {scenario === 'auction-balance' || scenario === 'bar-anatomy' ? (
          <AuctionBalance />
        ) : null}
        {scenario === 'institutional-flow' ? <InstitutionalFlow /> : null}
        {scenario === 'fractal-timeframes' ? <FractalTimeframes /> : null}
        {scenario === 'indicator-lag' ? <IndicatorLag /> : null}
        {scenario === 'news-reaction' ? <NewsReaction /> : null}
        {scenario === 'timeframe-discipline' ? <TimeframeDiscipline /> : null}
        {scenario === 'risk-reward' ? <RiskReward /> : null}
        {scenario === 'martingale-growth' ? <MartingaleGrowth /> : null}
        {scenario === 'trend-strength' ? <TrendStrength /> : null}
        {scenario === 'breakout-strength' ? <BreakoutStrength /> : null}
        {scenario === 'reversal-bars' ? <ReversalBars /> : null}
        {scenario === 'reversal-strength' ? <ReversalStrength /> : null}
        {scenario === 'probability-spectrum' ? <ProbabilitySpectrum /> : null}
        {scenario === 'trend-range-transition' ? (
          <>
            <CandleSeries
              candles={trendRangeCandles}
              range={{ from: 5, to: 10, label: 'Balance · mehr Überlappung' }}
              annotations={false}
            />
            <text className="chart-region-label" x="132" y="58">gerichteter Impuls</text>
            <text className="chart-region-label" x="650" y="58">Akzeptanz höher</text>
          </>
        ) : null}
        {scenario === 'high-low-count' ? (
          <CandleSeries candles={highLowCandles} />
        ) : null}
        {scenario === 'high-low-failure' ? <HighLowFailure /> : null}
      </svg>
    </div>
  );
}
