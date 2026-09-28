import type { ChartScenarioId } from '../content/types';

interface CandleProps {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  width?: number;
}

function Candle({ x, open, close, high, low, width = 22 }: CandleProps) {
  const bull = close < open;
  const bodyY = Math.min(open, close);
  const bodyHeight = Math.max(3, Math.abs(open - close));

  return (
    <g>
      <line
        className={bull ? 'candle-wick bull' : 'candle-wick bear'}
        x1={x}
        x2={x}
        y1={high}
        y2={low}
      />
      <rect
        className={bull ? 'candle-body bull' : 'candle-body bear'}
        x={x - width / 2}
        y={bodyY}
        width={width}
        height={bodyHeight}
        rx="2"
      />
    </g>
  );
}

function Panel({
  x,
  title,
  tone = 'bull',
}: {
  x: number;
  title: string;
  tone?: 'bull' | 'bear';
}) {
  return (
    <g>
      <rect
        className={tone === 'bull' ? 'chart-panel bull' : 'chart-panel warning'}
        x={x}
        y="49"
        width="220"
        height="247"
        rx="18"
      />
      <text
        className={`chart-panel-title ${tone}`}
        x={x + 110}
        y="78"
        textAnchor="middle"
      >
        {title}
      </text>
    </g>
  );
}

function ChannelTwoSidedOrders() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Die Richtung bleibt bullisch – die Auktion wird trotzdem zweiseitiger
      </text>
      <Panel x={28} title="Spike" />
      <Panel x={270} title="Kanal" />
      <Panel x={512} title="Orderwechsel" tone="bear" />
      <polyline className="chart-price-line" points="50,259 82,218 113,168 145,111 179,82 213,61" />
      <text className="chart-small" x="138" y="278" textAnchor="middle">Distanz · kaum Überlappung</text>
      <Candle x={306} open={235} close={174} high={155} low={253} width={28} />
      <Candle x={350} open={180} close={134} high={116} low={198} width={25} />
      <Candle x={394} open={140} close={169} high={124} low={188} width={23} />
      <Candle x={438} open={165} close={121} high={104} low={183} width={24} />
      <Candle x={472} open={128} close={150} high={111} low={170} width={21} />
      <path className="trend-channel soft" d="M290 260 L479 101" />
      <path className="trend-channel soft" d="M309 163 L488 83" />
      <text className="chart-small" x="380" y="278" textAnchor="middle">Tails · Gegenbars · Überlappung</text>
      <polyline className="chart-price-line" points="536,244 569,203 602,160 636,119 674,92 709,115" />
      <path className="chart-arrow sell" d="M691 92 C673 109 658 126 643 146" />
      <path className="chart-arrow sell" d="M709 119 C689 137 673 153 657 170" />
      <text className="chart-region-label bear" x="618" y="191" textAnchor="middle">Bären staffeln</text>
      <path className="chart-arrow buy" d="M548 216 C566 200 582 181 598 160" />
      <text className="chart-region-label bull" x="618" y="226" textAnchor="middle">Bullen nehmen Gewinne</text>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Weniger Effizienz ≠ bestätigte Umkehr</text>
    </>
  );
}

function ChannelStartMagnet() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Der erste Pullback wird zum späteren Ziel für mehrere Ordergruppen
      </text>
      <polyline
        className="chart-price-line"
        points="42,268 78,218 114,150 151,82 190,129 229,98 270,139 311,103 353,145 397,110 439,151 479,119 518,162 556,214 594,246 632,215 675,172 716,135"
      />
      <line className="chart-guide" x1="190" x2="190" y1="65" y2="290" />
      <rect className="chart-zone" x="164" y="204" width="470" height="62" rx="13" />
      <text className="chart-region-label gold" x="190" y="292" textAnchor="middle">Kanalbeginn</text>
      <path className="trend-channel soft" d="M184 79 L521 126" />
      <path className="trend-channel soft" d="M192 139 L552 184" />
      <g transform="translate(38 58)">
        <rect className="chart-panel warning" width="153" height="78" rx="15" />
        <text className="chart-panel-title bear" x="76" y="28" textAnchor="middle">Shorts decken</text>
        <text className="chart-small" x="76" y="52" textAnchor="middle">Gewinn oder Einstand</text>
      </g>
      <path className="chart-arrow sell" d="M190 110 C314 128 446 177 574 241" />
      <g transform="translate(606 55)">
        <rect className="chart-panel bull" width="119" height="80" rx="15" />
        <text className="chart-panel-title bull" x="59" y="28" textAnchor="middle">Longs kaufen</text>
        <text className="chart-small" x="59" y="52" textAnchor="middle">alte Unterstützung</text>
      </g>
      <path className="chart-arrow buy" d="M659 139 C637 178 617 214 596 244" />
      <circle className="chart-focus" cx="594" cy="246" r="7" />
      <text className="chart-small strong" x="380" y="319" textAnchor="middle">Eindeckung + erneuter Kauf = gemeinsamer Kaufdruck</text>
    </>
  );
}

function ChannelBreakoutPaths() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Derselbe reife Kanal kann in drei unterschiedliche Übergänge münden
      </text>
      <Panel x={28} title="1 · Rücklauf" tone="bear" />
      <Panel x={270} title="2 · Seitwärts" />
      <Panel x={512} title="3 · Beschleunigung" />
      <polyline className="chart-price-line" points="49,257 78,219 107,179 136,137 166,96 197,126 226,157 202,203 169,241" />
      <path className="trend-channel soft" d="M45 270 L191 78" />
      <path className="chart-arrow sell" d="M226 157 C210 191 190 220 169 241" />
      <text className="chart-small" x="138" y="278" textAnchor="middle">Kanal wird zurückverfolgt</text>
      <polyline className="chart-price-line" points="291,245 321,205 351,162 381,116 411,91 438,119 464,101" />
      <rect className="chart-range" x="397" y="86" width="94" height="72" rx="12" />
      <path className="chart-arrow buy" d="M469 99 C478 91 484 82 491 72" />
      <text className="chart-small" x="380" y="278" textAnchor="middle">Zeitkorrektur hält den Preis</text>
      <polyline className="chart-price-line" points="533,251 562,211 591,168 620,122 648,93 676,59 700,88 718,142" />
      <line className="breakout-line" x1="617" x2="722" y1="108" y2="108" />
      <path className="chart-arrow buy" d="M651 94 C666 79 675 66 683 55" />
      <path className="chart-arrow sell" d="M704 90 C710 108 715 124 718 142" />
      <text className="chart-small" x="622" y="278" textAnchor="middle">später Ausbruch fällt zurück</text>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Follow-through entscheidet, nicht die gebrochene Linie</text>
    </>
  );
}

function RangeDualRole() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Die Range ist Fortsetzungsflag und mögliche Brücke in den Gegentrend
      </text>
      <polyline className="chart-price-line" points="45,264 80,222 115,174 150,124 187,77 222,111 253,141" />
      <rect className="chart-range" x="244" y="103" width="248" height="121" rx="16" />
      <polyline className="chart-price-line noisy" points="250,185 280,126 311,200 342,119 374,194 406,126 437,201 486,136" />
      <text className="chart-region-label gold" x="368" y="241" textAnchor="middle">zweiseitige Balance</text>
      <path className="chart-arrow buy" d="M490 132 C530 104 560 78 588 52" />
      <polyline className="chart-price-line" points="488,136 526,110 560,76 594,48 632,78" />
      <text className="chart-region-label bull" x="615" y="45" textAnchor="middle">Bull Flag</text>
      <path className="chart-arrow sell" d="M477 207 C519 232 556 253 591 275" />
      <polyline className="chart-price-line noisy" points="486,201 526,226 562,252 598,279 635,252 675,286 715,264" />
      <text className="chart-region-label bear" x="654" y="226" textAnchor="middle">Umkehrkeim</text>
      <g transform="translate(45 57)">
        <rect className="chart-panel bull" width="170" height="72" rx="15" />
        <text className="chart-panel-title bull" x="85" y="27" textAnchor="middle">Vorgeschichte</text>
        <text className="chart-small" x="85" y="51" textAnchor="middle">gibt Fortsetzung Vorteil</text>
      </g>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Ausbruch + Akzeptanz bestimmen die endgültige Rolle</text>
    </>
  );
}

function TestReferenceLayers() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Mehrere Erinnerungen verdichten sich zu einer beobachteten Preiszone
      </text>
      <rect className="chart-zone" x="288" y="126" width="184" height="74" rx="16" />
      <text className="chart-region-label gold" x="380" y="166" textAnchor="middle">TESTZONE</text>
      <line className="breakout-line" x1="63" x2="697" y1="145" y2="145" />
      <text className="chart-small" x="67" y="133">Vortageshoch</text>
      <path className="trend-channel soft" d="M78 269 L505 89" />
      <text className="chart-small" x="88" y="286">Trendlinie</text>
      <polyline className="chart-price-line" points="52,253 104,224 157,183 211,149 264,191 316,151 367,193 419,154 472,188 526,139 579,106 632,133 708,94" />
      <circle className="chart-focus" cx="211" cy="149" r="6" />
      <circle className="chart-focus" cx="419" cy="154" r="6" />
      <text className="chart-small" x="188" y="113">Swinghoch</text>
      <g transform="translate(516 204)">
        <rect className="chart-panel" width="196" height="84" rx="15" />
        <text className="chart-small strong" x="98" y="24" textAnchor="middle">weitere Erinnerungen</text>
        <text className="chart-small" x="98" y="45" textAnchor="middle">Entry-/Signal-Bar · Ziel</text>
        <text className="chart-small" x="98" y="65" textAnchor="middle">Vortagesschluss · Kanal</text>
      </g>
      <path className="chart-arrow buy" d="M502 204 C477 190 454 176 432 159" />
      <g transform="translate(55 52)">
        <rect className="chart-panel bull" width="188" height="70" rx="15" />
        <text className="chart-panel-title bull" x="94" y="27" textAnchor="middle">Konfluenz</text>
        <text className="chart-small" x="94" y="50" textAnchor="middle">Aufmerksamkeit, keine Garantie</text>
      </g>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Die aktuelle Reaktion macht die Referenz handelbar</text>
    </>
  );
}

function EverySwingTestMap() {
  const points = [
    [70, 116, '1'],
    [128, 268, '2'],
    [198, 103, '4'],
    [268, 173, '5'],
    [347, 81, '6'],
    [430, 213, '7'],
    [512, 119, '8'],
    [594, 221, '9'],
    [687, 73, 'H'],
  ] as const;
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Jeder neue Swing beantwortet mindestens eine frühere Preisfrage
      </text>
      <line className="breakout-line" x1="42" x2="720" y1="247" y2="247" />
      <text className="chart-small" x="48" y="268">Vortagestief</text>
      <line className="chart-guide" x1="43" x2="720" y1="111" y2="111" />
      <text className="chart-small" x="49" y="99">früher Verkaufsbereich</text>
      <polyline className="chart-price-line" points="70,116 128,268 198,103 268,173 347,81 430,213 512,119 594,221 687,73" />
      {points.map(([x, y, label]) => (
        <g key={label}>
          <circle className="chart-marker" cx={x} cy={y} r="11" />
          <text className="chart-marker-text" x={x} y={y + 4} textAnchor="middle">{label}</text>
        </g>
      ))}
      <path className="chart-arrow buy" d="M130 250 C153 217 174 169 195 112" />
      <path className="chart-arrow sell" d="M350 94 C383 122 406 171 427 204" />
      <path className="chart-arrow buy" d="M597 210 C622 174 649 121 682 81" />
      <g transform="translate(247 264)">
        <rect className="chart-pill" width="292" height="43" rx="20" />
        <text className="chart-small strong" x="146" y="18" textAnchor="middle">Sessionmarke · Swing · Signalbereich</text>
        <text className="chart-small" x="146" y="34" textAnchor="middle">werden nacheinander getestet und neu bewertet</text>
      </g>
    </>
  );
}

function BarNineDefense() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Bar 9 testet Unterstützung und lässt den Long-Einstand knapp unangetastet
      </text>
      <path className="chart-guide" d="M45 211 C168 205 290 190 415 178 C526 166 625 158 715 150" />
      <text className="chart-small" x="65" y="198">gleitender Durchschnitt</text>
      <Candle x={110} open={225} close={164} high={147} low={244} width={30} />
      <Candle x={180} open={170} close={119} high={101} low={187} width={28} />
      <Candle x={250} open={125} close={151} high={108} low={171} width={25} />
      <Candle x={320} open={146} close={105} high={89} low={164} width={26} />
      <Candle x={390} open={111} close={145} high={94} low={165} width={25} />
      <Candle x={475} open={139} close={204} high={123} low={218} width={31} />
      <line className="breakout-line" x1="74" x2="548" y1="218" y2="218" />
      <text className="chart-region-label bear" x="491" y="208">Bar 9</text>
      <text className="chart-small" x="450" y="238" textAnchor="end">Long-Einstieg / Breakeven</text>
      <line className="chart-guide" x1="78" x2="548" y1="224" y2="224" />
      <text className="chart-small strong" x="548" y="257" textAnchor="end">Stop bleibt 1 Tick entfernt</text>
      <circle className="chart-focus" cx="475" cy="218" r="7" />
      <Candle x={570} open={200} close={151} high={133} low={217} width={29} />
      <Candle x={640} open={156} close={102} high={83} low={174} width={30} />
      <Candle x={700} open={108} close={62} high={45} low={126} width={30} />
      <path className="chart-arrow buy" d="M503 204 C552 173 603 126 686 66" />
      <text className="chart-region-label bull" x="635" y="52" textAnchor="middle">neues Tageshoch</text>
      <text className="chart-small strong" x="380" y="316" textAnchor="middle">Verteidigung wird erst durch den neuen Ausbruch bestätigt</text>
    </>
  );
}

function BarThreeBreakoutGap() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Sichtbare Lücke und starker Trendbar überspringen beide längere Balance
      </text>
      <rect className="chart-panel bull" x="34" y="48" width="330" height="248" rx="18" />
      <rect className="chart-panel bull" x="396" y="48" width="330" height="248" rx="18" />
      <text className="chart-panel-title bull" x="199" y="78" textAnchor="middle">Dünner Markt · echte Lücke</text>
      <text className="chart-panel-title bull" x="561" y="78" textAnchor="middle">Liquider Markt · Bar 3</text>
      <Candle x={130} open={229} close={188} high={172} low={246} width={34} />
      <Candle x={130} open={126} close={91} high={74} low={143} width={34} />
      <rect className="chart-zone" x="103" y="143" width="54" height="29" rx="8" />
      <text className="chart-small" x="199" y="278" textAnchor="middle">keine Trades zwischen den Bars</text>
      <Candle x={507} open={232} close={205} high={190} low={248} width={30} />
      <Candle x={590} open={207} close={91} high={73} low={224} width={49} />
      <Candle x={673} open={97} close={73} high={58} low={113} width={28} />
      <rect className="chart-zone" x="555" y="82" width="70" height="151" rx="12" />
      <text className="chart-small" x="561" y="278" textAnchor="middle">Trades, aber kaum Gegenauktion</text>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Funktionale Lücke = schnelle Distanz ohne längere zweiseitige Akzeptanz</text>
    </>
  );
}

function ChannelPositioningCycle() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Gestaffelte Shorts planen den Kanalbodentest – nicht das perfekte Hoch
      </text>
      <polyline className="chart-price-line" points="44,264 85,218 126,152 169,83 212,122 256,91 301,132 346,97 391,139 437,103 482,146 528,112 566,162 604,211 642,242 681,208 718,166" />
      <path className="trend-channel soft" d="M163 71 L535 98" />
      <path className="trend-channel soft" d="M205 140 L573 177" />
      <circle className="chart-focus" cx="212" cy="122" r="5" />
      <circle className="chart-focus" cx="346" cy="97" r="5" />
      <circle className="chart-focus" cx="482" cy="146" r="5" />
      <text className="chart-small" x="214" y="156">früh</text>
      <text className="chart-small" x="347" y="80">ergänzen</text>
      <text className="chart-small" x="481" y="177">spät</text>
      <line className="breakout-line" x1="160" x2="544" y1="126" y2="126" />
      <text className="chart-region-label bear" x="383" y="118" textAnchor="middle">Durchschnitts-Short</text>
      <rect className="chart-zone" x="185" y="205" width="475" height="61" rx="14" />
      <text className="chart-region-label gold" x="420" y="286" textAnchor="middle">Kanalbeginn · gemeinsames Ziel</text>
      <path className="chart-arrow sell" d="M531 119 C558 148 584 190 633 237" />
      <path className="chart-arrow buy" d="M647 237 C668 219 688 192 712 166" />
      <g transform="translate(43 53)">
        <rect className="chart-panel warning" width="144" height="69" rx="14" />
        <text className="chart-small strong" x="72" y="25" textAnchor="middle">späte Shorts: Gewinn</text>
        <text className="chart-small" x="72" y="48" textAnchor="middle">frühe Shorts: etwa BE</text>
      </g>
      <text className="chart-small strong" x="380" y="319" textAnchor="middle">Skalierung verbessert den Einstand und erhöht gleichzeitig das Risiko</text>
    </>
  );
}

function WedgePushes() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Zwei Dreierfolgen teilen die Mechanik – ihr Kontext gibt ihnen die Rolle
      </text>
      <rect className="chart-panel bull" x="34" y="48" width="330" height="248" rx="18" />
      <rect className="chart-panel bull" x="396" y="48" width="330" height="248" rx="18" />
      <text className="chart-panel-title bull" x="199" y="78" textAnchor="middle">Bar 2 · Wedge-Reversal</text>
      <text className="chart-panel-title bull" x="561" y="78" textAnchor="middle">Bar 7 · Wedge-Bull-Flag</text>
      <polyline className="chart-price-line noisy" points="55,103 89,135 121,112 153,166 185,140 218,205 252,176 286,247 332,151" />
      <text className="chart-region-label bear" x="153" y="191" textAnchor="middle">1</text>
      <text className="chart-region-label bear" x="218" y="230" textAnchor="middle">2</text>
      <text className="chart-region-label bear" x="286" y="270" textAnchor="middle">3</text>
      <path className="chart-arrow buy" d="M293 238 C310 209 321 180 332 151" />
      <polyline className="chart-price-line" points="416,238 456,194 495,145 534,95 573,126 607,161 638,146 672,211 707,141" />
      <text className="chart-region-label bear" x="584" y="150" textAnchor="middle">1</text>
      <text className="chart-region-label bear" x="632" y="177" textAnchor="middle">2</text>
      <text className="chart-region-label bear" x="672" y="235" textAnchor="middle">3</text>
      <path className="chart-arrow buy" d="M681 203 C692 181 699 160 707 141" />
      <text className="chart-small" x="199" y="281" textAnchor="middle">Abwärtsmove endet</text>
      <text className="chart-small" x="561" y="281" textAnchor="middle">Pullback im Bullenregime endet</text>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Drei Schübe zeigen Ermüdung · das Regime bestimmt den Trade</text>
    </>
  );
}

function NestedFlagsMap() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Ein Kursabschnitt kann mehrere gültige Musterbeziehungen zugleich tragen
      </text>
      <rect className="chart-range" x="124" y="79" width="560" height="187" rx="18" />
      <polyline className="chart-price-line" points="76,238 145,173 214,112 283,178 353,96 423,205 493,124 563,216 633,139 707,84" />
      <line className="breakout-line" x1="181" x2="664" y1="112" y2="112" />
      <text className="chart-region-label bear" x="355" y="94" textAnchor="middle">Double-Top-Bear-Flag</text>
      <line className="breakout-line" x1="205" x2="594" y1="205" y2="205" />
      <text className="chart-region-label bull" x="391" y="229" textAnchor="middle">Double-Bottom-Bull-Flag</text>
      <path className="trend-channel soft" d="M215 111 L635 139" />
      <path className="trend-channel soft" d="M283 178 L563 216" />
      <text className="chart-region-label gold" x="596" y="251" textAnchor="middle">Dreieck</text>
      <circle className="chart-focus" cx="493" cy="124" r="7" />
      <text className="chart-region-label bear" x="493" y="91" textAnchor="middle">Final Flag</text>
      <g transform="translate(34 52)">
        <rect className="chart-panel bull" width="154" height="78" rx="15" />
        <text className="chart-small strong" x="77" y="27" textAnchor="middle">Hierarchie</text>
        <text className="chart-small" x="77" y="48" textAnchor="middle">Regime → Zone</text>
        <text className="chart-small" x="77" y="65" textAnchor="middle">→ lokaler Trigger</text>
      </g>
      <path className="chart-arrow buy" d="M639 133 C666 116 686 99 707 84" />
      <text className="chart-small strong" x="380" y="318" textAnchor="middle">Musternamen ordnen Ausschnitte – der bullische Kontext gewichtet sie</text>
    </>
  );
}

export function ChapterThreeExpansionChart({ scenario }: { scenario: ChartScenarioId }) {
  if (scenario === 'channel-two-sided-orders') return <ChannelTwoSidedOrders />;
  if (scenario === 'channel-start-magnet') return <ChannelStartMagnet />;
  if (scenario === 'channel-breakout-paths') return <ChannelBreakoutPaths />;
  if (scenario === 'range-dual-role') return <RangeDualRole />;
  if (scenario === 'test-reference-layers') return <TestReferenceLayers />;
  if (scenario === 'every-swing-test-map') return <EverySwingTestMap />;
  if (scenario === 'bar-nine-defense') return <BarNineDefense />;
  if (scenario === 'bar-three-breakout-gap') return <BarThreeBreakoutGap />;
  if (scenario === 'channel-positioning-cycle') return <ChannelPositioningCycle />;
  if (scenario === 'wedge-pushes') return <WedgePushes />;
  if (scenario === 'nested-flags-map') return <NestedFlagsMap />;
  return null;
}
