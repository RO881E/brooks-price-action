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
  'probability-spectrum':
    'Ein Spektrum von ausgeglichener Wahrscheinlichkeit bis zu stärkerer bullischer oder bärischer Evidenz.',
  'trend-range-transition':
    'Eine Kerzenfolge beginnt als Aufwärtstrend, geht in eine überlappende Range über und bricht anschließend nach oben aus.',
  'bar-anatomy':
    'Ein einzelner Bar mit Beschriftung seiner vier Preispunkte und der beiden Tails.',
  'high-low-count':
    'Eine Aufwärtsstruktur mit einem zweibeinigen Pullback und markierten High-1- und High-2-Versuchen.',
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
      </svg>
    </div>
  );
}
