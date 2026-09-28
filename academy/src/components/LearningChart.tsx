import type { ChartScenarioId } from '../content/types';
import { ChapterFourChart } from './ChapterFourCharts';
import { ChapterThreeChart } from './ChapterThreeCharts';
import { ChapterTwoChart } from './ChapterTwoCharts';

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
  'order-flow-cycle':
    'Ein Kreislauf zeigt, wie neue Positionen, erzwungene Ausstiege und Gewinnmitnahmen dieselbe Preisbewegung nacheinander verstärken.',
  'trend-range-choice':
    'Zwei Chartfelder vergleichen einen bestätigten Trend mit einem kurzen Ausbruch am Rand einer Trading Range.',
  'breakout-outcomes':
    'Zwei Ausbrüche über dieselbe Grenze: einer erhält Anschluss, der andere fällt sofort in die alte Range zurück.',
  'pattern-evolution':
    'Eine kleine Flag-Struktur wächst durch Rücklauf zu einer größeren, noch offenen Formation.',
  'tick-auction':
    'Eine vereinfachte Orderleiter zeigt, wie aggressive Käufer das aktuelle Angebot verbrauchen und den nächsten Preis handeln.',
  'institutional-wave':
    'Ein großer institutioneller Kaufauftrag wird in mehrere Teilausführungen entlang eines steigenden Marktes zerlegt.',
  'hft-small-edge':
    'Kurze Ergebnisserien schwanken stark, während sich eine kleine positive Erwartung über viele Versuche stabilisiert.',
  'latency-race':
    'Datenfeed, Algorithmus und Börse reagieren zuerst; der manuelle Trader beurteilt danach die sichtbare Struktur.',
  'liquidity-crowding':
    'Immer mehr gleichgerichtete Systeme konkurrieren um eine begrenzte Gegenseite und verschlechtern dadurch ihre Ausführung.',
  'inertia-excess':
    'Eine Trendbewegung setzt sich fort, überdehnt sich und kehrt erst nach sichtbarem Kontrollverlust zum Mittel zurück.',
  'bar-close-trap':
    'Ein laufender bullischer Reversal-Bar wird in den letzten Sekunden verkauft und schließt als starker bearischer Bar.',
  'bar-anatomy':
    'Ein einzelner Bar mit Beschriftung seiner vier Preispunkte und der beiden Tails.',
  'high-low-count':
    'Eine Aufwärtsstruktur mit einem zweibeinigen Pullback und markierten High-1- und High-2-Versuchen.',
  'high-low-failure':
    'Vier Aufwärtsversuche innerhalb eines Pullbacks verlieren nacheinander an Wirkung; der letzte Fehlschlag kippt die Erwartung.',
  'price-action-spectrum':
    'Vier Felder ordnen Marktverhalten vom extrem gerichteten Trend bis zur extrem engen Trading Range ein.',
  'market-inertia':
    'Ein Gegenversuch im Trend und ein Ausbruchsversuch in der Range scheitern jeweils am bestehenden Marktregime.',
  'bear-range-resumption':
    'Ein starker Abwärtstrend pausiert in einer engen Range, weist einen kleinen Aufwärtsausbruch zurück und setzt sich kräftig fort.',
  'two-leg-labels':
    'Drei Felder beschriften dieselbe zweibeinige Bewegung als ABC-Korrektur, Elliott-Wellen und AB=CD-Move.',
  'failed-open-breakout':
    'Der Markt eröffnet oberhalb des Vortageshochs, fällt unter die Grenze zurück und entwickelt einen Abwärtstrend vom Open.',
  'midday-false-breakout':
    'Nach einem frühen Abwärtstrend und langer enger Range scheitert ein kleiner Aufwärtsausbruch vor der bärischen Wiederaufnahme.',
  'bar-control-spectrum':
    'Vier Bars zeigen abnehmende Schlusskontrolle vom großen Trendkörper bis zur Ein-Bar-Range.',
  'two-sided-trend-bar':
    'Vier professionelle Motive treffen rund um Hoch und Tief desselben bullischen Trendbars aufeinander.',
  'relative-doji':
    'Ein Intraday-Future und ein langfristiger Aktienchart zeigen relativ kleine Körper trotz verschiedener absoluter Preisabstände.',
  'trend-bar-four-roles':
    'Ein bullischer Trendbar wird gleichzeitig als Spike, Breakout, funktionale Lücke und Klimax betrachtet.',
  'vacuum-vs-follow-through':
    'Zwei identische Aufwärtsspikes enden entweder in scharfer Zurückweisung oder anhaltender Akzeptanz.',
  'follow-through-decision':
    'Ein bearischer Gegen-Spike im Bullenmarkt erhält links Verkaufsanschluss und scheitert rechts an einem Bullenschluss.',
  'human-vs-tick-speed':
    'Ein einzelner Fünf-Minuten-Bar wird einer kaum manuell verarbeitbaren Folge vieler Tickbewegungen gegenübergestellt.',
  'climax-vs-reversal':
    'Auf einen Kaufklimax und eine Pause folgen wahlweise Trendfortsetzung oder der notwendige bearische Gegen-Breakout.',
  'ideal-trend-bar':
    'Ein moderater hochwertiger Trendbar wird mit einer späten extremen und sofort zurückgewiesenen Kerze verglichen.',
  'cumulative-pressure':
    'In einem fallenden Kanal häufen sich untere Tails und bullische Körper, bevor der Kaufdruck den Kanal bricht.',
  'strong-weak-range':
    'Starke Teilnehmer handeln an den Rändern einer Range, während schwache Teilnehmer Hochs und Tiefs verspätet verfolgen.',
  'trending-dojis':
    'Vier Dojis mit steigenden Hochs, Tiefs und Schlusskursen bilden gemeinsam eine bullische Sequenz.',
  'late-buy-climax':
    'Nach einem reifen Bullenlauf folgen ein außergewöhnlicher Kaufklimax, ein bearischer Gegen-Spike und zweiseitiger Handel.',
  'contextual-doji':
    'Derselbe kleine Körper wirkt in ruhiger Umgebung wie ein Trendbar und zwischen großen Bars wie eine Pause.',
  'multiframe-doji-reversal':
    'Vier steigende kleine Bars werden auf einer größeren Zeitebene zu einem bullischen Reversal-Bar verdichtet.',
  'bear-day-context':
    'Ein Bärentag zeigt Gap, Gegenversuch, Fortsetzung, Kanalüberschuss und den späteren Test des Tiefs.',
  'failed-bull-breakout':
    'Ein großer bullischer Ausbruch und sein zweiter Verteidigungsversuch scheitern vor mehreren Abwärtsbeinen.',
  'quiet-collapse':
    'Nach einer langen ruhigen Range erzeugen zwei kaum überlappende Bear-Bars einen starken Fortsetzungsspike mit Risikoplan.',
  'exhaustion-bear-spike':
    'Zunehmend große Bear-Bars erreichen Unterstützung, worauf Short-Gewinnmitnahmen und neue Longs eine Rally antreiben.',
  'trend-to-range-pressure':
    'Wiederholt zurückgewiesene Swing-Tiefs führen vom Bärentrend über eine Range zur Rally und späterem Verkaufsdruck.',
  'breakout-spike-channel':
    'Eine überlappende Trading Range bricht mit kräftigen Bull-Bars aus und entwickelt nach einem haltenden Pullback einen Kanal.',
  'channel-shallowing':
    'Ein steiler bullischer Spike geht nach dem ersten Pullback in einen flacheren und breiteren Trendkanal über.',
  'channel-to-range-cycle':
    'Ein bullischer Kanal sammelt Gewinnmitnahmen und Shorts, läuft zum Kanalbeginn zurück und verbreitert sich dort zur Trading Range.',
  'channel-counter-flag':
    'Drei Felder zeigen den häufigen Kanalrücktest, eine seitliche Trendflag und eine seltene, anschließend scheiternde Beschleunigung.',
  'test-area-decision':
    'Zwei Tests desselben alten Hochs enden links in Akzeptanz mit Breakout-Pullback und rechts in einer scharfen Zurückweisung.',
  'behavior-reversal':
    'Drei Felder vergleichen den direkten Richtungswechsel, den Übergang vom Trend zur Range und den Breakout aus einer Range.',
  'reversal-inertia':
    'Mehrere zunächst kleine, später größere Pullbacks werden zu einer Trading Range, aus der ein neuer Bärentrend ausbricht.',
  'reversal-multiframe-map':
    'Dieselbe bearische Umkehr erscheint als Monatsbar, Zwei-Bar-Wochenumkehr und detaillierte Tagessequenz aus Spike, Range und Breakout.',
  'failed-low-breakout':
    'Ein Bruch unter das Vortagestief scheitert und löst durch Short-Eindeckungen und neue Longs einen bullischen Spike aus.',
  'repeated-high-test':
    'Ein starkes bullisches Momentum testet ein altes Hoch zweimal, bricht darüber aus und prüft den Bereich anschließend als Unterstützung.',
  'spike-to-overlap':
    'Ein bullischer Spike wird zu einem überlappenden Kanal und läuft schließlich zum Bereich seines ersten Pullbacks zurück.',
  'breakeven-defense':
    'Eine Kurssequenz verbindet Doppeltief, oberen Widerstand, gleitenden Durchschnitt und knapp verteidigten Long-Einstieg.',
  'breakout-gap-always-in':
    'Ein großer Bull-Bar schafft eine funktionale Breakout-Lücke; spätere schwache Abwärtsversuche ändern den bullischen Always-in-Zustand nicht.',
  'spike-channel-playbook':
    'Der vollständige Zyklus führt vom Tief-Fehlausbruch über Spike und Keilkanal in einen zweibeinigen Kanalbodentest mit offenen Folgepfaden.',
  'setup-direction':
    'Dasselbe Pullback-Tief zeigt einen Long-Einstieg mit dem Bullenmarkt und einen deutlich anspruchsvolleren Short-Einstieg gegen den Trend.',
  'bar-role-lifecycle':
    'Vier Bars zeigen, wie aus einem Setup erst nach Auslösung ein Signal-Bar, ein Entry-Bar und später ein Follow-through-Bar werden.',
  'one-bar-order-map':
    'Rund um Hoch und Tief desselben Bars stehen sich Breakout-Orders und Limit-Orders mit gegensätzlichen Erwartungen gegenüber.',
  'contextual-imbalance':
    'Dieselbe bullische Barform erzeugt im Pullback eines Bullenmarkts eine andere Orderbalance als mitten in einer Trading Range.',
  'signal-family-map':
    'Drei Kursfolgen unterscheiden Spike-Fortsetzung, echte Trendumkehr und das Ende eines Pullbacks zurück in Trendrichtung.',
  'inside-outside-sequences':
    'Fünf Felder zeigen Inside-Bar, ii, iii, ioi und oo als Beziehungen zwischen den jeweiligen Bar-Ranges.',
  'contextual-failure-setups':
    'Vier Felder zeigen gescheiterte Umkehr und Fortsetzung, einen Trendbar am Range-Rand und ein Higher Low im Trend.',
  'beginner-signal-filter':
    'Ein dreistufiger Filter verlangt Trendrichtung, passende Signal-Bar-Farbe und einen Einstieg in dieselbe Richtung.',
  'trend-signal-strength':
    'Ein schwacher With-trend-Signal-Bar wird einer Gegenbewegung mit Trendlinienbruch, Test und starkem Reversal-Bar gegenübergestellt.',
  'stop-entry-lifecycle':
    'Drei Felder vergleichen eine ausgelöste Stop-Order, eine zu löschende nicht erreichte Order und eine Ein-Tick-Falle.',
  'candle-name-reduction':
    'Viele Kerzenmusternamen werden auf die drei Fragen nach Kontrolle, Lage und Bestätigung reduziert.',
  'forming-bar-climax':
    'Ein sich vergrößernder laufender Bar verschiebt den Einstieg; daneben beendet der erste Pause-Bar eine Klimaxphase.',
  'signal-entry-case':
    'Der Chartfall verbindet Trendlinienbruch, zweites Verkaufsbein, bullischen Reversal-Bar, Entry und Follow-through mit den Bars 2 bis 5.',
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

const bearRangeResumptionCandles: Candle[] = [
  { open: 74, high: 76, low: 65, close: 67 },
  { open: 67, high: 69, low: 59, close: 61 },
  { open: 61, high: 63, low: 52, close: 54 },
  { open: 54, high: 57, low: 46, close: 48 },
  { open: 48, high: 51, low: 41, close: 43 },
  { open: 43, high: 46, low: 41, close: 44 },
  { open: 44, high: 46, low: 42, close: 43 },
  { open: 43, high: 45, low: 41.5, close: 44 },
  { open: 44, high: 45.5, low: 42.5, close: 43 },
  { open: 43, high: 45, low: 41.8, close: 44.2 },
  { open: 44.2, high: 45.2, low: 42.8, close: 43.8 },
  { open: 43.8, high: 46.2, low: 42.5, close: 43.5 },
  { open: 43.5, high: 44, low: 35, close: 36 },
  { open: 36, high: 37, low: 28, close: 30 },
  { open: 30, high: 32, low: 22, close: 24 },
  { open: 24, high: 26, low: 15, close: 17 },
  { open: 17, high: 19, low: 10, close: 12 },
];

const failedOpenCandles: Candle[] = [
  { open: 40, high: 45, low: 38, close: 43 },
  { open: 43, high: 48, low: 42, close: 46 },
  { open: 46, high: 50, low: 44, close: 48 },
  { open: 53, high: 56, low: 48, close: 49 },
  { open: 49, high: 50, low: 42, close: 44 },
  { open: 44, high: 46, low: 37, close: 39 },
  { open: 39, high: 41, low: 33, close: 35 },
  { open: 35, high: 38, low: 30, close: 32 },
  { open: 32, high: 36, low: 29, close: 34 },
  { open: 34, high: 35, low: 26, close: 28 },
  { open: 28, high: 31, low: 22, close: 24 },
  { open: 24, high: 27, low: 18, close: 20 },
];

function OrderFlowCycle() {
  const stages = [
    { x: 48, title: 'Neue Shorts', detail: 'verkaufen den Bruch', tone: 'bear' },
    { x: 228, title: 'Long-Exits', detail: 'werden zu Verkäufen', tone: 'bear' },
    { x: 408, title: 'Gewinnmitnahme', detail: 'Shorts kaufen zurück', tone: 'bull' },
    { x: 588, title: 'Neue Longs', detail: 'verstärken den Anstieg', tone: 'bull' },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="36" textAnchor="middle">
        Positionen wechseln ihre Orderrichtung
      </text>
      {stages.map((stage, index) => (
        <g key={stage.title} transform={`translate(${stage.x} 92)`}>
          <rect className={`chart-panel ${stage.tone}`} width="124" height="112" rx="16" />
          <circle className={stage.tone === 'bull' ? 'risk-point target' : 'risk-point stop'} cx="62" cy="31" r="12" />
          <text className={`chart-panel-title ${stage.tone}`} x="62" y="64" textAnchor="middle">
            {stage.title}
          </text>
          <text className="chart-small" x="62" y="84" textAnchor="middle">
            {stage.detail}
          </text>
          {index < stages.length - 1 ? (
            <path
              className={index < 2 ? 'chart-arrow sell' : 'chart-arrow buy'}
              d="M124 56 C142 56 146 56 162 56"
            />
          ) : null}
        </g>
      ))}
      <path className="structure-line bear" d="M92 250 L330 286" />
      <path className="structure-line bull" d="M430 286 L668 238" />
      <text className="chart-region-label bear" x="92" y="240">Abwärtsdruck</text>
      <text className="chart-region-label bull" x="668" y="230" textAnchor="end">Aufwärtsdruck</text>
      <text className="chart-small" x="380" y="314" textAnchor="middle">
        Derselbe Trader kann wenige Minuten später die Gegenseite stellen
      </text>
    </>
  );
}

function TrendRangeChoice() {
  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">
        Der Ort des neuen Hochs verändert seine Bedeutung
      </text>
      <g transform="translate(34 62)">
        <rect className="chart-panel bull" width="330" height="224" rx="18" />
        <text className="chart-panel-title bull" x="165" y="28" textAnchor="middle">Trend · Akzeptanz höher</text>
        <polyline className="chart-price-line" points="24,180 68,154 98,165 138,123 171,136 214,91 248,104 300,52" />
        <line className="breakout-line" x1="32" x2="300" y1="111" y2="111" />
        <text className="chart-small" x="42" y="104">altes Hoch</text>
        <text className="chart-region-label bull" x="298" y="44" textAnchor="end">Fortsetzung</text>
      </g>
      <g transform="translate(396 62)">
        <rect className="chart-panel warning" width="330" height="224" rx="18" />
        <text className="chart-panel-title bear" x="165" y="28" textAnchor="middle">Range · Ausbruch scheitert</text>
        <rect className="chart-range" x="28" y="72" width="274" height="112" rx="12" />
        <polyline className="chart-price-line noisy" points="32,158 72,94 116,156 158,88 204,151 248,62 276,87 300,143" />
        <line className="breakout-line" x1="28" x2="302" y1="72" y2="72" />
        <text className="chart-small" x="40" y="66">Range-Hoch</text>
        <text className="chart-region-label bear" x="300" y="160" textAnchor="end">Rückkehr</text>
      </g>
      <text className="chart-small" x="380" y="316" textAnchor="middle">
        Trend: Breakout kaufen prüfen · Range: Fehlausbruch und Rückkehr prüfen
      </text>
    </>
  );
}

function BreakoutOutcomes() {
  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">
        Die Folgebewegung beurteilt den Grenzbruch
      </text>
      <g transform="translate(32 62)">
        <rect className="chart-panel bull" width="334" height="226" rx="18" />
        <text className="chart-panel-title bull" x="167" y="28" textAnchor="middle">Akzeptierter Ausbruch</text>
        <line className="breakout-line" x1="26" x2="308" y1="142" y2="142" />
        <polyline className="chart-price-line" points="28,181 68,158 106,174 143,149 172,112 204,81 232,100 266,67 306,49" />
        <text className="chart-small" x="32" y="134">Grenze</text>
        <text className="chart-region-label bull" x="304" y="42" textAnchor="end">höhere Tiefs</text>
      </g>
      <g transform="translate(394 62)">
        <rect className="chart-panel warning" width="334" height="226" rx="18" />
        <text className="chart-panel-title bear" x="167" y="28" textAnchor="middle">Gescheiterter Ausbruch</text>
        <line className="breakout-line" x1="26" x2="308" y1="142" y2="142" />
        <polyline className="chart-price-line noisy" points="28,181 70,160 108,174 146,151 178,104 207,82 230,96 250,151 278,174 306,190" />
        <text className="chart-small" x="32" y="134">Grenze</text>
        <text className="chart-region-label bear" x="304" y="206" textAnchor="end">zurück in der Range</text>
      </g>
      <text className="chart-small" x="380" y="316" textAnchor="middle">
        Gleicher erster Bruch · gegensätzliche Information danach
      </text>
    </>
  );
}

function PatternEvolution() {
  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">
        Ein Setup wird Teil der nächstgrößeren Struktur
      </text>
      <rect className="chart-range" x="222" y="101" width="146" height="74" rx="12" />
      <rect className="chart-zone" x="196" y="78" width="356" height="148" rx="16" />
      <polyline className="chart-price-line" points="54,252 104,211 152,168 202,112 240,137 278,116 316,148 356,109 392,82 430,126 470,167 508,142 548,190 590,158 640,119 704,83" />
      <text className="chart-region-label" x="294" y="94" textAnchor="middle">kleiner Flag</text>
      <text className="chart-region-label gold" x="374" y="244" textAnchor="middle">größere Struktur</text>
      <circle className="chart-focus" cx="392" cy="82" r="7" />
      <text className="chart-small" x="410" y="70">kleines Ziel erreicht</text>
      <text className="chart-region-label bull" x="700" y="74" textAnchor="end">späterer Ausbruch</text>
      <text className="chart-small" x="380" y="305" textAnchor="middle">
        Kurzfristig funktioniert · übergeordnet bleibt die Auflösung noch offen
      </text>
    </>
  );
}

function TickAuction() {
  const rows = [
    { price: '5001,00', ask: 58, bid: 0 },
    { price: '5000,75', ask: 34, bid: 0 },
    { price: '5000,50', ask: 12, bid: 0 },
    { price: '5000,25', ask: 0, bid: 42 },
    { price: '5000,00', ask: 0, bid: 67 },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="30" textAnchor="middle">Vereinfachte Orderleiter</text>
      <text className="chart-panel-title bear" x="230" y="58" textAnchor="middle">ASK · Angebot</text>
      <text className="chart-panel-title bull" x="530" y="58" textAnchor="middle">BID · Nachfrage</text>
      {rows.map((row, index) => {
        const y = 77 + index * 43;
        return (
          <g key={row.price}>
            <rect className="chart-panel" x="315" y={y} width="130" height="32" rx="8" />
            <text className="chart-panel-title" x="380" y={y + 21} textAnchor="middle">{row.price}</text>
            {row.ask ? <rect x={305 - row.ask * 2.2} y={y + 5} width={row.ask * 2.2} height="22" rx="5" fill="rgba(177,77,71,.34)" /> : null}
            {row.ask ? <text className="chart-small" x={294 - row.ask * 2.2} y={y + 20} textAnchor="end">{row.ask}</text> : null}
            {row.bid ? <rect x="455" y={y + 5} width={row.bid * 2.2} height="22" rx="5" fill="rgba(50,131,102,.34)" /> : null}
            {row.bid ? <text className="chart-small" x={466 + row.bid * 2.2} y={y + 20}>{row.bid}</text> : null}
          </g>
        );
      })}
      <path className="chart-arrow buy" d="M265 175 C286 152 300 134 313 116" />
      <text className="chart-action buy" x="92" y="183">aggressive Käufe verbrauchen das Ask</text>
      <text className="chart-small" x="380" y="312" textAnchor="middle">Sichtbare Größen können sich jederzeit ändern oder verschwinden</text>
    </>
  );
}

function InstitutionalWave() {
  const fills = [
    { x: 124, y: 242, label: '1' },
    { x: 216, y: 203, label: '2' },
    { x: 312, y: 182, label: '3' },
    { x: 408, y: 139, label: '4' },
    { x: 506, y: 115, label: '5' },
    { x: 612, y: 73, label: '6' },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">Ein Bedarf · mehrere Ausführungen</text>
      <polyline className="chart-price-line" points="70,269 124,242 169,259 216,203 264,218 312,182 356,196 408,139 458,159 506,115 554,132 612,73 692,52" />
      {fills.map((fill) => (
        <g key={fill.label}>
          <circle className="probability-marker" cx={fill.x} cy={fill.y} r="13" />
          <text className="probability-marker-text" x={fill.x} y={fill.y + 5} textAnchor="middle">{fill.label}</text>
        </g>
      ))}
      <path className="trend-channel soft" d="M74 286 L695 70" />
      <text className="chart-region-label bull" x="688" y="38" textAnchor="end">Auftrag wird weiter gefüllt</text>
      <g transform="translate(225 280)">
        <rect className="chart-pill" width="310" height="32" rx="16" />
        <text className="chart-small strong" x="155" y="21" textAnchor="middle">Rückläufe nutzen · höhere Preise notfalls akzeptieren</text>
      </g>
    </>
  );
}

function HftSmallEdge() {
  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">Gleiche kleine Edge · andere Stichprobengröße</text>
      <g transform="translate(34 64)">
        <rect className="chart-panel warning" width="330" height="220" rx="18" />
        <text className="chart-panel-title bear" x="165" y="28" textAnchor="middle">10 Versuche · starkes Rauschen</text>
        <line className="chart-guide" x1="24" x2="306" y1="176" y2="176" />
        <polyline className="chart-price-line noisy" points="25,176 56,141 87,190 118,154 149,116 180,167 211,128 242,174 273,119 305,137" />
        <text className="chart-small" x="165" y="205" textAnchor="middle">kurze Verlust- und Gewinnserien dominieren</text>
      </g>
      <g transform="translate(396 64)">
        <rect className="chart-panel bull" width="330" height="220" rx="18" />
        <text className="chart-panel-title bull" x="165" y="28" textAnchor="middle">Viele Versuche · Edge wird sichtbar</text>
        <line className="chart-guide" x1="24" x2="306" y1="176" y2="176" />
        <polyline className="chart-price-line" points="25,181 47,169 68,174 90,154 111,160 132,143 154,149 175,127 197,135 218,112 240,119 262,92 283,99 305,70" />
        <path className="trend-channel soft" d="M25 184 L305 73" />
        <text className="chart-small" x="165" y="205" textAnchor="middle">Verteilung nähert sich der Erwartung</text>
      </g>
      <text className="chart-small" x="380" y="315" textAnchor="middle">Kosten können die kleine Brutto-Edge trotzdem vollständig aufzehren</text>
    </>
  );
}

function LatencyRace() {
  const nodes = [
    { x: 30, title: 'Datenfeed', detail: 'Zahl erscheint' },
    { x: 210, title: 'Algorithmus', detail: 'vergleicht & entscheidet' },
    { x: 390, title: 'Börse', detail: 'Order wird ausgeführt' },
    { x: 570, title: 'Chart', detail: 'Reaktion wird sichtbar' },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">Maschinen handeln zuerst · du liest die Folge</text>
      {nodes.map((node, index) => (
        <g key={node.title} transform={`translate(${node.x} 78)`}>
          <rect className={index === 3 ? 'chart-panel bull' : 'chart-panel'} width="160" height="92" rx="16" />
          <text className="chart-panel-title" x="80" y="36" textAnchor="middle">{node.title}</text>
          <text className="chart-small" x="80" y="61" textAnchor="middle">{node.detail}</text>
          {index < nodes.length - 1 ? <path className="chart-arrow buy" d="M160 46 L176 46" /> : null}
        </g>
      ))}
      <g transform="translate(200 221)">
        <rect className="chart-panel warning" width="360" height="66" rx="18" />
        <text className="chart-panel-title bear" x="180" y="28" textAnchor="middle">Manueller Trader</text>
        <text className="chart-small" x="180" y="48" textAnchor="middle">wartet auf Akzeptanz, Pullback oder Fehlschlag</text>
      </g>
      <path className="chart-arrow sell" d="M650 174 C620 211 584 237 562 246" />
      <text className="chart-small" x="380" y="315" textAnchor="middle">Der spätere Einstieg tauscht Geschwindigkeit gegen bessere Lesbarkeit</text>
    </>
  );
}

function LiquidityCrowding() {
  const systems = [
    { x: 48, y: 75, label: 'System A' },
    { x: 48, y: 183, label: 'System B' },
    { x: 568, y: 75, label: 'System C' },
    { x: 568, y: 183, label: 'System D' },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">Viele Signale treffen auf begrenzte Gegenseite</text>
      {systems.map((system) => (
        <g key={system.label} transform={`translate(${system.x} ${system.y})`}>
          <rect className="chart-panel" width="144" height="62" rx="14" />
          <text className="chart-panel-title" x="72" y="37" textAnchor="middle">{system.label}</text>
        </g>
      ))}
      <circle className="auction-core" cx="380" cy="160" r="67" />
      <text className="auction-core-title" x="380" y="151" textAnchor="middle">LIQUIDITÄT</text>
      <text className="chart-small inverse" x="380" y="174" textAnchor="middle">begrenzte Gegenseite</text>
      <text className="chart-small inverse" x="380" y="193" textAnchor="middle">schlechtere Fills</text>
      <path className="chart-arrow buy" d="M192 106 C252 110 285 130 318 145" />
      <path className="chart-arrow buy" d="M192 214 C252 210 285 189 318 176" />
      <path className="chart-arrow sell" d="M568 106 C508 110 475 130 442 145" />
      <path className="chart-arrow sell" d="M568 214 C508 210 475 189 442 176" />
      <g transform="translate(190 274)">
        <rect className="chart-pill" width="380" height="34" rx="17" />
        <text className="chart-small strong" x="190" y="22" textAnchor="middle">Mehr Konkurrenz → weniger Edge pro Ausführung</text>
      </g>
    </>
  );
}

function InertiaExcess() {
  return (
    <>
      <text className="chart-kicker" x="380" y="30" textAnchor="middle">Trendträgheit endet nicht beim ersten Extremwert</text>
      <path className="indicator-line" d="M52 250 C180 228 292 193 404 154 C520 114 612 91 710 77" />
      <polyline className="chart-price-line" points="54,263 102,234 145,241 193,198 232,205 280,158 323,166 370,112 418,90 463,58 508,74 548,43 586,62 620,108 654,137 704,159" />
      <line className="chart-guide" x1="556" x2="556" y1="36" y2="278" />
      <text className="chart-region-label bull" x="104" y="216">Fortsetzung</text>
      <text className="chart-region-label gold" x="548" y="30" textAnchor="end">Überdehnung</text>
      <text className="chart-region-label bear" x="704" y="179" textAnchor="end">Kontrollverlust</text>
      <path className="chart-arrow sell" d="M592 77 C620 92 646 112 670 137" />
      <text className="chart-small" x="380" y="307" textAnchor="middle">Goldene Linie = gleitender Mittelbereich · nicht automatisch ein Entry</text>
    </>
  );
}

function BarCloseTrap() {
  const panels = [
    { x: 60, title: '30 Sek. offen', openY: 166, closeY: 92, highY: 70, lowY: 190, tone: 'bull' },
    { x: 290, title: '5 Sek. offen', openY: 166, closeY: 137, highY: 68, lowY: 191, tone: 'bull' },
    { x: 520, title: 'geschlossen', openY: 166, closeY: 205, highY: 68, lowY: 218, tone: 'bear' },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="32" textAnchor="middle">Ein laufender Bar ist noch kein Signal</text>
      {panels.map((panel, index) => {
        const bodyY = Math.min(panel.openY, panel.closeY);
        const bodyHeight = Math.max(4, Math.abs(panel.openY - panel.closeY));
        return (
          <g key={panel.title} transform={`translate(${panel.x} 58)`}>
            <rect className={index === 2 ? 'chart-panel warning' : 'chart-panel'} width="180" height="220" rx="18" />
            <text className={`chart-panel-title ${panel.tone}`} x="90" y="28" textAnchor="middle">{panel.title}</text>
            <line className={`candle-wick ${panel.tone} hero`} x1="90" x2="90" y1={panel.highY} y2={panel.lowY} />
            <rect className={`candle-body ${panel.tone} hero`} x="60" y={bodyY} width="60" height={bodyHeight} rx="5" />
            <text className="chart-small" x="90" y="204" textAnchor="middle">
              {index === 0 ? 'wirkt stark bullisch' : index === 1 ? 'Käufer verlieren' : 'schließt bearisch'}
            </text>
          </g>
        );
      })}
      <path className="chart-arrow sell" d="M240 168 L280 168" />
      <path className="chart-arrow sell" d="M470 168 L510 168" />
      <text className="chart-small" x="380" y="311" textAnchor="middle">Erst der fertige Schlusskurs fixiert Körper und Tails</text>
    </>
  );
}

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

function PriceActionSpectrum() {
  const panels = [
    {
      x: 20,
      title: 'Extremtrend',
      detail: 'kaum Rücklauf',
      tone: 'bull',
      line: '18,174 48,143 76,116 106,83 136,54',
      noisy: false,
    },
    {
      x: 205,
      title: 'Breiter Kanal',
      detail: 'tiefe Pullbacks',
      tone: 'bull',
      line: '18,170 52,112 82,148 113,82 143,111',
      noisy: false,
    },
    {
      x: 390,
      title: 'Trading Range',
      detail: 'beide Seiten aktiv',
      tone: 'warning',
      line: '18,142 48,82 79,151 109,76 141,145',
      noisy: true,
    },
    {
      x: 575,
      title: 'Enge Range',
      detail: 'sofortige Rückkehr',
      tone: 'warning',
      line: '18,118 44,105 70,121 96,107 122,119 145,110',
      noisy: true,
    },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">
        Richtung nimmt ab · Überlappung und Zweiseitigkeit nehmen zu
      </text>
      {panels.map((panel) => (
        <g key={panel.title} transform={`translate(${panel.x} 62)`}>
          <rect className={`chart-panel ${panel.tone}`} width="165" height="202" rx="16" />
          <text className="chart-panel-title" x="82.5" y="27" textAnchor="middle">
            {panel.title}
          </text>
          <line className="chart-guide" x1="17" x2="148" y1="72" y2="72" />
          <line className="chart-guide" x1="17" x2="148" y1="126" y2="126" />
          <polyline
            className={panel.noisy ? 'chart-price-line noisy' : 'chart-price-line'}
            points={panel.line}
          />
          <text className="chart-small" x="82.5" y="188" textAnchor="middle">
            {panel.detail}
          </text>
        </g>
      ))}
      <text className="chart-region-label bull" x="22" y="304">
        mehr Dringlichkeit
      </text>
      <line className="breakout-line" x1="137" x2="620" y1="300" y2="300" />
      <text className="chart-region-label bear" x="738" y="304" textAnchor="end">
        mehr Balance
      </text>
    </>
  );
}

function MarketInertia() {
  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">
        Das bestehende Regime bleibt die Ausgangshypothese
      </text>
      <g transform="translate(30 62)">
        <rect className="chart-panel bull" width="338" height="226" rx="18" />
        <text className="chart-panel-title bull" x="169" y="28" textAnchor="middle">
          Trend · Umkehrversuch scheitert
        </text>
        <polyline
          className="chart-price-line"
          points="24,188 67,157 102,127 139,94 177,129 207,143 240,103 274,75 312,43"
        />
        <circle className="chart-focus" cx="207" cy="143" r="6" />
        <text className="chart-small" x="196" y="169" textAnchor="middle">
          Gegenbewegung
        </text>
        <text className="chart-region-label bull" x="308" y="64" textAnchor="end">
          Fortsetzung
        </text>
      </g>
      <g transform="translate(392 62)">
        <rect className="chart-panel warning" width="338" height="226" rx="18" />
        <text className="chart-panel-title bear" x="169" y="28" textAnchor="middle">
          Range · Ausbruchsversuch scheitert
        </text>
        <rect className="chart-range" x="25" y="75" width="286" height="106" rx="12" />
        <line className="breakout-line" x1="25" x2="311" y1="75" y2="75" />
        <polyline
          className="chart-price-line noisy"
          points="29,154 68,100 107,160 146,92 184,155 222,60 250,92 280,132 309,166"
        />
        <circle className="chart-focus" cx="222" cy="60" r="6" />
        <text className="chart-small" x="214" y="48" textAnchor="middle">
          kein Anschluss
        </text>
        <text className="chart-region-label bear" x="306" y="194" textAnchor="end">
          zurück in Balance
        </text>
      </g>
      <text className="chart-small" x="380" y="316" textAnchor="middle">
        Erst Follow-through und Akzeptanz rechtfertigen einen Regimewechsel
      </text>
    </>
  );
}

function BearRangeResumption() {
  const markers = [
    { x: 224, y: 190, label: '1' },
    { x: 497, y: 128, label: '2' },
    { x: 692, y: 278, label: '3' },
  ];

  return (
    <>
      <CandleSeries
        candles={bearRangeResumptionCandles}
        range={{ from: 5, to: 10, label: 'extrem enge Range' }}
        annotations={false}
      />
      <text className="chart-region-label bear" x="72" y="58">
        starker Bärentrend
      </text>
      <text className="chart-region-label bear" x="706" y="302" textAnchor="end">
        außergewöhnlich starke Fortsetzung
      </text>
      <path className="chart-arrow sell" d="M500 143 C522 155 532 173 542 203" />
      <text className="chart-small" x="516" y="118" textAnchor="middle">
        minimaler Ausbruch
      </text>
      {markers.map((marker) => (
        <g key={marker.label}>
          <circle className="chart-marker" cx={marker.x} cy={marker.y} r="13" />
          <text
            className="chart-marker-text"
            x={marker.x}
            y={marker.y + 4}
            textAnchor="middle"
          >
            {marker.label}
          </text>
        </g>
      ))}
    </>
  );
}

function TwoLegLabels() {
  const panels = [
    {
      x: 32,
      title: 'ABC-Pullback',
      footer: 'Korrektur im Trend',
      labels: [
        { x: 77, y: 158, pointY: 138, label: 'A' },
        { x: 127, y: 78, pointY: 92, label: 'B' },
        { x: 192, y: 205, pointY: 184, label: 'C' },
      ],
    },
    {
      x: 270,
      title: 'Elliott 1–2–3',
      footer: 'Schub · Pullback · Schub',
      labels: [
        { x: 77, y: 158, pointY: 138, label: '1' },
        { x: 127, y: 78, pointY: 92, label: '2' },
        { x: 192, y: 205, pointY: 184, label: '3' },
      ],
    },
    {
      x: 508,
      title: 'AB=CD',
      footer: 'Bein AB ≈ Bein CD',
      labels: [
        { x: 22, y: 39, pointY: 48, label: 'A' },
        { x: 77, y: 158, pointY: 138, label: 'B' },
        { x: 127, y: 78, pointY: 92, label: 'C' },
        { x: 192, y: 205, pointY: 184, label: 'D' },
      ],
    },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="34" textAnchor="middle">
        Gleiche Geometrie · andere Fachsprache
      </text>
      {panels.map((panel) => (
        <g key={panel.title} transform={`translate(${panel.x} 62)`}>
          <rect className="chart-panel" width="220" height="226" rx="18" />
          <text className="chart-panel-title" x="110" y="28" textAnchor="middle">
            {panel.title}
          </text>
          <polyline
            className="chart-price-line noisy"
            points="22,48 77,138 127,92 192,184"
          />
          {panel.labels.map((label) => (
            <g key={`${panel.title}-${label.label}`}>
              <circle
                className="chart-focus"
                cx={label.x}
                cy={label.pointY}
                r="4"
              />
              <text className="chart-region-label gold" x={label.x} y={label.y} textAnchor="middle">
                {label.label}
              </text>
            </g>
          ))}
          <text className="chart-small" x="110" y="214" textAnchor="middle">
            {panel.footer}
          </text>
        </g>
      ))}
      <text className="chart-small" x="380" y="316" textAnchor="middle">
        Das Label ändert die Interpretation – nicht die sichtbare Bewegung
      </text>
    </>
  );
}

function FailedOpenBreakout() {
  return (
    <>
      <CandleSeries candles={failedOpenCandles} annotations={false} />
      <line className="breakout-line" x1="48" x2="712" y1="81" y2="81" />
      <line className="chart-guide" x1="214" x2="214" y1="36" y2="294" />
      <rect className="chart-zone" x="219" y="40" width="66" height="76" rx="12" />
      <text className="chart-region-label" x="120" y="58" textAnchor="middle">
        Vortag
      </text>
      <text className="chart-region-label" x="235" y="306" textAnchor="middle">
        Eröffnung
      </text>
      <text className="chart-small" x="54" y="74">
        Vortageshoch
      </text>
      <text className="chart-region-label gold" x="251" y="32" textAnchor="middle">
        Gap darüber
      </text>
      <path className="chart-arrow sell" d="M276 96 C302 115 326 133 356 151" />
      <text className="chart-region-label bear" x="368" y="145">
        keine Akzeptanz
      </text>
      <text className="chart-region-label bear" x="700" y="282" textAnchor="end">
        Trend from the Open
      </text>
    </>
  );
}

function MiddayFalseBreakout() {
  return (
    <>
      <text className="chart-kicker" x="380" y="30" textAnchor="middle">
        Vollständige Sequenz statt isoliertem Uhrzeit-Signal
      </text>
      <line className="chart-guide" x1="224" x2="224" y1="45" y2="286" />
      <line className="chart-guide" x1="516" x2="516" y1="45" y2="286" />
      <rect className="chart-range" x="228" y="139" width="284" height="61" rx="13" />
      <line className="breakout-line" x1="228" x2="566" y1="139" y2="139" />
      <polyline
        className="chart-price-line noisy"
        points="54,62 94,95 132,87 172,131 215,169 250,158 286,184 322,162 358,183 394,159 430,179 468,156 500,171 530,112 554,152 578,192 614,221 650,250 706,282"
      />
      <text className="chart-region-label bear" x="72" y="52">
        1 · Trend vom Open
      </text>
      <text className="chart-region-label gold" x="370" y="126" textAnchor="middle">
        2 · mehrstündige enge Range
      </text>
      <circle className="chart-focus" cx="530" cy="112" r="7" />
      <text className="chart-region-label bear" x="548" y="91">
        3 · Fehlausbruch
      </text>
      <path className="chart-arrow sell" d="M548 125 C566 148 582 172 594 197" />
      <text className="chart-region-label bear" x="704" y="302" textAnchor="end">
        4 · Wiederaufnahme bis zum Schluss
      </text>
      <g transform="translate(247 45)">
        <rect className="chart-pill" width="266" height="32" rx="16" />
        <text className="chart-small strong" x="133" y="21" textAnchor="middle">
          historischer Fall: ca. 11–12 Uhr PST
        </text>
      </g>
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
        {scenario === 'order-flow-cycle' ? <OrderFlowCycle /> : null}
        {scenario === 'trend-range-choice' ? <TrendRangeChoice /> : null}
        {scenario === 'breakout-outcomes' ? <BreakoutOutcomes /> : null}
        {scenario === 'pattern-evolution' ? <PatternEvolution /> : null}
        {scenario === 'tick-auction' ? <TickAuction /> : null}
        {scenario === 'institutional-wave' ? <InstitutionalWave /> : null}
        {scenario === 'hft-small-edge' ? <HftSmallEdge /> : null}
        {scenario === 'latency-race' ? <LatencyRace /> : null}
        {scenario === 'liquidity-crowding' ? <LiquidityCrowding /> : null}
        {scenario === 'inertia-excess' ? <InertiaExcess /> : null}
        {scenario === 'bar-close-trap' ? <BarCloseTrap /> : null}
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
        {scenario === 'price-action-spectrum' ? <PriceActionSpectrum /> : null}
        {scenario === 'market-inertia' ? <MarketInertia /> : null}
        {scenario === 'bear-range-resumption' ? <BearRangeResumption /> : null}
        {scenario === 'two-leg-labels' ? <TwoLegLabels /> : null}
        {scenario === 'failed-open-breakout' ? <FailedOpenBreakout /> : null}
        {scenario === 'midday-false-breakout' ? <MiddayFalseBreakout /> : null}
        <ChapterTwoChart scenario={scenario} />
        <ChapterThreeChart scenario={scenario} />
        <ChapterFourChart scenario={scenario} />
      </svg>
    </div>
  );
}
