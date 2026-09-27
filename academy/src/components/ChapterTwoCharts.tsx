import type { ChartScenarioId } from '../content/types';

interface CandleGlyphProps {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  width?: number;
  label?: string;
}

function CandleGlyph({
  x,
  open,
  close,
  high,
  low,
  width = 18,
  label,
}: CandleGlyphProps) {
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
      {label ? (
        <>
          <circle className="chart-marker" cx={x} cy={high - 14} r="12" />
          <text className="chart-marker-text" x={x} y={high - 10} textAnchor="middle">
            {label}
          </text>
        </>
      ) : null}
    </g>
  );
}

function PanelTitle({ x, title, tone }: { x: number; title: string; tone?: 'bull' | 'bear' }) {
  return (
    <text className={`chart-panel-title ${tone ?? ''}`} x={x} y="79" textAnchor="middle">
      {title}
    </text>
  );
}

function BarControlSpectrum() {
  const items = [
    { x: 112, open: 245, close: 105, high: 88, low: 263, title: 'klare Kontrolle' },
    { x: 292, open: 225, close: 137, high: 98, low: 265, title: 'gerichtet' },
    { x: 472, open: 200, close: 162, high: 103, low: 267, title: 'schwache Kontrolle' },
    { x: 652, open: 181, close: 177, high: 98, low: 268, title: 'Ein-Bar-Range' },
  ];

  return (
    <>
      <text className="chart-kicker" x="380" y="30" textAnchor="middle">
        Körper im Verhältnis zur gesamten Handelsspanne
      </text>
      {items.map((item, index) => (
        <g key={item.title}>
          <rect
            className={index === 3 ? 'chart-panel warning' : 'chart-panel bull'}
            x={item.x - 76}
            y="52"
            width="152"
            height="242"
            rx="18"
          />
          <text className="chart-panel-title" x={item.x} y="79" textAnchor="middle">
            {item.title}
          </text>
          <CandleGlyph {...item} width={index === 3 ? 24 : 30} />
          <text className="chart-small" x={item.x} y="282" textAnchor="middle">
            {index === 0 ? 'großer Körper' : index === 3 ? 'Open ≈ Close' : 'mehr Gegenhandel'}
          </text>
        </g>
      ))}
      <path className="chart-arrow sell" d="M170 314 C310 328 450 328 590 314" />
      <text className="chart-small" x="380" y="318" textAnchor="middle">
        weniger dauerhafter Fortschritt →
      </text>
    </>
  );
}

function TwoSidedTrendBar() {
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">
        Derselbe bullische Bar · vier professionelle Motive
      </text>
      <CandleGlyph x={380} open={252} close={86} high={62} low={272} width={54} />
      <line className="chart-guide" x1="320" x2="440" y1="86" y2="86" />
      <line className="chart-guide" x1="320" x2="440" y1="252" y2="252" />
      <g transform="translate(40 58)">
        <rect className="chart-panel bull" width="224" height="76" rx="15" />
        <text className="chart-panel-title bull" x="112" y="29" textAnchor="middle">Momentum-Bullen</text>
        <text className="chart-small" x="112" y="52" textAnchor="middle">kaufen Stärke am Hoch</text>
      </g>
      <path className="chart-arrow buy" d="M266 96 C300 92 320 88 346 86" />
      <g transform="translate(40 206)">
        <rect className="chart-panel bull" width="224" height="76" rx="15" />
        <text className="chart-panel-title bull" x="112" y="29" textAnchor="middle">Pullback-Bullen</text>
        <text className="chart-small" x="112" y="52" textAnchor="middle">warten nahe dem Tief</text>
      </g>
      <path className="chart-arrow buy" d="M266 244 C298 248 320 251 346 252" />
      <g transform="translate(496 58)">
        <rect className="chart-panel warning" width="224" height="76" rx="15" />
        <text className="chart-panel-title bear" x="112" y="29" textAnchor="middle">Long-Gewinnmitnahme</text>
        <text className="chart-small" x="112" y="52" textAnchor="middle">verkauft in die Stärke</text>
      </g>
      <path className="chart-arrow sell" d="M494 96 C464 92 440 88 414 86" />
      <g transform="translate(496 206)">
        <rect className="chart-panel warning" width="224" height="76" rx="15" />
        <text className="chart-panel-title bear" x="112" y="29" textAnchor="middle">Konträre Bären</text>
        <text className="chart-small" x="112" y="52" textAnchor="middle">shorten oben oder unter Tief</text>
      </g>
      <path className="chart-arrow sell" d="M494 244 C464 248 440 251 414 252" />
      <text className="chart-small strong" x="380" y="312" textAnchor="middle">
        Sicher ist nur: Dieser Bar schloss mit bullischer Kontrolle
      </text>
    </>
  );
}

function RelativeDoji() {
  return (
    <>
      <text className="chart-kicker" x="380" y="30" textAnchor="middle">
        Absolute Differenz verschieden · relative Funktion gleich
      </text>
      <g transform="translate(34 52)">
        <rect className="chart-panel" width="330" height="238" rx="18" />
        <text className="chart-panel-title" x="165" y="30" textAnchor="middle">5 Minuten · Future</text>
        <CandleGlyph x={165} open={141} close={138} high={72} low={199} width={32} />
        <line className="chart-guide" x1="111" x2="219" y1="138" y2="138" />
        <text className="chart-region-label gold" x="165" y="224" textAnchor="middle">Körper: 1 Tick</text>
      </g>
      <g transform="translate(396 52)">
        <rect className="chart-panel" width="330" height="238" rx="18" />
        <text className="chart-panel-title" x="165" y="30" textAnchor="middle">Monat · Aktie</text>
        <CandleGlyph x={165} open={146} close={137} high={58} low={207} width={32} />
        <line className="chart-guide" x1="111" x2="219" y1="137" y2="137" />
        <text className="chart-region-label gold" x="165" y="224" textAnchor="middle">Körper: 0,50 €</text>
      </g>
      <text className="chart-small" x="380" y="318" textAnchor="middle">
        Beide Körper sind klein gegenüber Range und Nachbarbars
      </text>
    </>
  );
}

function TrendBarFourRoles() {
  const roles = [
    { x: 32, y: 58, title: 'SPIKE', detail: 'schnelle Distanz', tone: 'bull' },
    { x: 32, y: 210, title: 'BREAKOUT', detail: 'verlässt Bereich', tone: 'bull' },
    { x: 538, y: 58, title: 'LÜCKE', detail: 'wenig Balance', tone: 'bear' },
    { x: 538, y: 210, title: 'KLIMAX', detail: 'weit & schnell', tone: 'bear' },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Eine Kerze · vier analytische Blickwinkel</text>
      <rect className="chart-range" x="312" y="182" width="136" height="88" rx="14" />
      <CandleGlyph x={380} open={238} close={80} high={57} low={257} width={54} />
      <line className="breakout-line" x1="286" x2="474" y1="182" y2="182" />
      {roles.map((role) => (
        <g key={role.title} transform={`translate(${role.x} ${role.y})`}>
          <rect className={`chart-panel ${role.tone}`} width="190" height="78" rx="16" />
          <text className={`chart-panel-title ${role.tone}`} x="95" y="30" textAnchor="middle">{role.title}</text>
          <text className="chart-small" x="95" y="53" textAnchor="middle">{role.detail}</text>
        </g>
      ))}
      <path className="chart-arrow buy" d="M224 96 C276 92 306 88 348 86" />
      <path className="chart-arrow buy" d="M224 247 C277 226 309 207 348 190" />
      <path className="chart-arrow sell" d="M536 96 C488 92 454 88 412 86" />
      <path className="chart-arrow sell" d="M536 247 C488 224 451 193 412 156" />
      <text className="chart-small strong" x="380" y="314" textAnchor="middle">Der Kontext entscheidet, welche Rolle dominiert</text>
    </>
  );
}

function VacuumVsFollowThrough() {
  return (
    <>
      <text className="chart-kicker" x="380" y="30" textAnchor="middle">Gleicher erster Spike · andere Akzeptanz danach</text>
      <g transform="translate(32 56)">
        <rect className="chart-panel warning" width="334" height="238" rx="18" />
        <text className="chart-panel-title bear" x="167" y="30" textAnchor="middle">Vakuum & Umkehr</text>
        <line className="breakout-line" x1="25" x2="309" y1="71" y2="71" />
        <polyline className="chart-price-line noisy" points="28,203 71,178 105,165 142,123 180,78 214,47 244,76 273,129 307,168" />
        <text className="chart-small" x="29" y="64">Widerstand</text>
        <text className="chart-region-label bear" x="304" y="190" textAnchor="end">keine Akzeptanz</text>
      </g>
      <g transform="translate(394 56)">
        <rect className="chart-panel bull" width="334" height="238" rx="18" />
        <text className="chart-panel-title bull" x="167" y="30" textAnchor="middle">Initiative & Anschluss</text>
        <line className="breakout-line" x1="25" x2="309" y1="71" y2="71" />
        <polyline className="chart-price-line" points="28,203 71,178 105,165 142,123 180,78 214,47 244,62 273,36 307,47" />
        <text className="chart-small" x="29" y="64">Widerstand</text>
        <text className="chart-region-label bull" x="304" y="27" textAnchor="end">Preise halten höher</text>
      </g>
      <text className="chart-small" x="380" y="318" textAnchor="middle">Die Folgebewegung trennt Vakuum von anhaltender Initiative</text>
    </>
  );
}

function FollowThroughDecision() {
  const left = [
    { x: 73, open: 205, close: 166, high: 150, low: 220 },
    { x: 111, open: 171, close: 128, high: 111, low: 185 },
    { x: 149, open: 134, close: 92, high: 76, low: 149 },
    { x: 195, open: 104, close: 190, high: 91, low: 205 },
    { x: 233, open: 183, close: 237, high: 171, low: 250 },
    { x: 271, open: 231, close: 262, high: 221, low: 275 },
  ];
  const right = [
    { x: 435, open: 205, close: 166, high: 150, low: 220 },
    { x: 473, open: 171, close: 128, high: 111, low: 185 },
    { x: 511, open: 134, close: 92, high: 76, low: 149 },
    { x: 557, open: 104, close: 190, high: 91, low: 205 },
    { x: 595, open: 184, close: 146, high: 130, low: 199 },
    { x: 633, open: 151, close: 109, high: 92, low: 164 },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="29" textAnchor="middle">Der erste Gegen-Spike ist identisch</text>
      <rect className="chart-panel warning" x="32" y="50" width="334" height="248" rx="18" />
      <rect className="chart-panel bull" x="394" y="50" width="334" height="248" rx="18" />
      <PanelTitle x={199} title="Folgeverkäufe · Umkehr" tone="bear" />
      <PanelTitle x={561} title="Bullenschluss · Fehlschlag" tone="bull" />
      {left.map((c, i) => <CandleGlyph key={`l-${i}`} {...c} />)}
      {right.map((c, i) => <CandleGlyph key={`r-${i}`} {...c} />)}
      <text className="chart-region-label bear" x="271" y="287" textAnchor="middle">Verkäufer schaffen weitere Tiefe</text>
      <text className="chart-region-label bull" x="595" y="287" textAnchor="middle">Trendrichtung übernimmt erneut</text>
      <line className="chart-guide" x1="380" x2="380" y1="58" y2="290" />
    </>
  );
}

function HumanVsTickSpeed() {
  const ticks = Array.from({ length: 24 }, (_, index) => ({
    x: 412 + index * 12,
    high: 83 + Math.sin(index * 1.7) * 13 + index * 6,
  }));
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Gleiche fünf Minuten · völlig andere Verarbeitungslast</text>
      <g transform="translate(34 52)">
        <rect className="chart-panel" width="326" height="244" rx="18" />
        <text className="chart-panel-title" x="163" y="30" textAnchor="middle">Arbeitschart</text>
        <CandleGlyph x={163} open={76} close={201} high={55} low={218} width={52} />
        <text className="chart-region-label bear" x="163" y="232" textAnchor="middle">1 abgeschlossener 5-Minuten-Bar</text>
      </g>
      <g>
        <rect className="chart-panel warning" x="394" y="52" width="332" height="244" rx="18" />
        <text className="chart-panel-title bear" x="560" y="82" textAnchor="middle">Tickchart derselben Zeit</text>
        <polyline
          className="chart-price-line noisy"
          points={ticks.map((tick) => `${tick.x},${tick.high}`).join(' ')}
        />
        {ticks.map((tick, index) => (
          <circle key={index} className={index % 4 === 0 ? 'chart-focus' : 'evidence-dot active'} cx={tick.x} cy={tick.high} r={index % 4 === 0 ? 4 : 2.4} />
        ))}
        <text className="chart-region-label bear" x="560" y="282" textAnchor="middle">Dutzende Entscheidungen pro Minute</text>
      </g>
      <g transform="translate(226 303)">
        <rect className="chart-pill" width="308" height="25" rx="12" />
        <text className="chart-small strong" x="154" y="17" textAnchor="middle">Menschen brauchen verarbeitbare Struktur</text>
      </g>
    </>
  );
}

function ClimaxVsReversal() {
  const sequence = [
    { x: 96, open: 247, close: 202, high: 187, low: 259 },
    { x: 142, open: 205, close: 155, high: 140, low: 219 },
    { x: 188, open: 158, close: 102, high: 86, low: 172 },
    { x: 244, open: 111, close: 107, high: 84, low: 139 },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Der Pause-Bar beendet nur die Klimaxphase</text>
      <rect className="chart-panel" x="32" y="52" width="696" height="242" rx="18" />
      {sequence.map((c, i) => <CandleGlyph key={i} {...c} width={22} />)}
      <rect className="chart-zone" x="68" y="70" width="150" height="202" rx="16" />
      <text className="chart-region-label gold" x="143" y="62" textAnchor="middle">1 · Kaufklimax</text>
      <text className="chart-region-label" x="244" y="159" textAnchor="middle">2 · Pause</text>
      <line className="chart-guide" x1="282" x2="282" y1="70" y2="270" />
      <g transform="translate(318 72)">
        <rect className="chart-panel bull" width="170" height="184" rx="16" />
        <text className="chart-panel-title bull" x="85" y="28" textAnchor="middle">Pfad A</text>
        <polyline className="chart-price-line" points="22,115 54,91 83,104 115,70 148,45" />
        <text className="chart-small" x="85" y="158" textAnchor="middle">Trend setzt fort</text>
      </g>
      <g transform="translate(516 72)">
        <rect className="chart-panel warning" width="178" height="184" rx="16" />
        <text className="chart-panel-title bear" x="89" y="28" textAnchor="middle">Pfad B</text>
        <polyline className="chart-price-line noisy" points="22,62 54,79 84,108 116,137 151,151" />
        <text className="chart-small" x="89" y="167" textAnchor="middle">Gegen-Breakout</text>
      </g>
      <text className="chart-small strong" x="380" y="318" textAnchor="middle">Erst Pfad B bildet die vollständige klimaktische Umkehr</text>
    </>
  );
}

function IdealTrendBar() {
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Kontrollierter Fortschritt versus späte Extremgröße</text>
      <g transform="translate(34 52)">
        <rect className="chart-panel bull" width="330" height="242" rx="18" />
        <text className="chart-panel-title bull" x="165" y="30" textAnchor="middle">Gesunder bullischer Trendbar</text>
        <CandleGlyph x={165} open={202} close={87} high={73} low={215} width={42} />
        <text className="chart-small" x="224" y="83">Close nahe Hoch</text>
        <text className="chart-small" x="224" y="205">Open nahe Tief</text>
        <path className="chart-arrow buy" d="M218 86 L190 91" />
        <path className="chart-arrow buy" d="M218 201 L190 198" />
        <text className="chart-region-label bull" x="165" y="230" textAnchor="middle">moderater Körper · kleine Tails</text>
      </g>
      <g transform="translate(396 52)">
        <rect className="chart-panel warning" width="330" height="242" rx="18" />
        <text className="chart-panel-title bear" x="165" y="30" textAnchor="middle">Späte Übertreibung</text>
        <polyline className="chart-price-line" points="24,196 64,178 98,157 132,128" />
        <CandleGlyph x={183} open={188} close={50} high={38} low={199} width={48} />
        <polyline className="chart-price-line noisy" points="210,61 246,105 277,149 306,172" />
        <text className="chart-region-label bear" x="165" y="230" textAnchor="middle">riesig · spät · ohne Anschluss</text>
      </g>
      <text className="chart-small" x="380" y="318" textAnchor="middle">Relative Qualität entsteht aus Form, Position und Folgebewegung</text>
    </>
  );
}

function CumulativePressure() {
  const bars = [
    { x: 85, open: 86, close: 130, high: 73, low: 143 },
    { x: 128, open: 124, close: 164, high: 110, low: 182 },
    { x: 171, open: 159, close: 151, high: 139, low: 190 },
    { x: 214, open: 160, close: 199, high: 148, low: 222 },
    { x: 257, open: 202, close: 177, high: 163, low: 226 },
    { x: 300, open: 187, close: 226, high: 174, low: 251 },
    { x: 343, open: 231, close: 194, high: 180, low: 259 },
    { x: 386, open: 202, close: 239, high: 189, low: 268 },
    { x: 429, open: 242, close: 199, high: 185, low: 271 },
    { x: 472, open: 205, close: 170, high: 155, low: 228 },
    { x: 515, open: 176, close: 133, high: 119, low: 190 },
    { x: 558, open: 140, close: 94, high: 78, low: 154 },
    { x: 601, open: 101, close: 66, high: 52, low: 115 },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Der Trend fällt noch – Käufer hinterlassen immer mehr Spuren</text>
      <path className="trend-channel soft" d="M64 72 L446 274" />
      <path className="trend-channel soft" d="M80 130 L438 310" />
      {bars.map((bar, index) => <CandleGlyph key={index} {...bar} width={17} />)}
      {[171, 257, 343, 429].map((x, index) => (
        <g key={x}>
          <circle className="chart-focus" cx={x} cy={[190, 226, 259, 271][index]} r="5" />
          <text className="chart-marker-text" x={x} y={[194, 230, 263, 275][index]} textAnchor="middle">+</text>
        </g>
      ))}
      <path className="chart-arrow buy" d="M450 211 C494 177 531 130 563 92" />
      <text className="chart-region-label bull" x="636" y="58" textAnchor="end">Kaufdruck bricht den Kanal</text>
      <text className="chart-small" x="269" y="302" textAnchor="middle">Tails + Bull-Körper häufen sich an neuen Tiefs</text>
    </>
  );
}

function StrongWeakRange() {
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Starke Teilnehmer warten auf attraktive Ränder</text>
      <rect className="chart-range" x="205" y="72" width="350" height="190" rx="18" />
      <line className="breakout-line" x1="205" x2="555" y1="83" y2="83" />
      <line className="breakout-line" x1="205" x2="555" y1="250" y2="250" />
      <polyline className="chart-price-line noisy" points="211,224 263,105 321,230 377,96 436,238 493,107 549,217" />
      <g transform="translate(28 70)">
        <rect className="chart-panel bull" width="150" height="82" rx="15" />
        <text className="chart-panel-title bull" x="75" y="29" textAnchor="middle">Starke Bullen</text>
        <text className="chart-small" x="75" y="53" textAnchor="middle">kaufen unten</text>
      </g>
      <path className="chart-arrow buy" d="M180 112 C207 145 225 198 238 238" />
      <g transform="translate(582 70)">
        <rect className="chart-panel warning" width="150" height="82" rx="15" />
        <text className="chart-panel-title bear" x="75" y="29" textAnchor="middle">Starke Bären</text>
        <text className="chart-small" x="75" y="53" textAnchor="middle">verkaufen oben</text>
      </g>
      <path className="chart-arrow sell" d="M580 112 C551 105 524 99 493 104" />
      <text className="chart-region-label bear" x="380" y="62" textAnchor="middle">schwache Bullen jagen Hochs</text>
      <text className="chart-region-label bull" x="380" y="282" textAnchor="middle">schwache Bären verkaufen Tiefs</text>
      <text className="chart-small strong" x="380" y="317" textAnchor="middle">Dieses Gegenspiel stabilisiert zweiseitigen Handel</text>
    </>
  );
}

function TrendingDojis() {
  const dojis = [
    { x: 170, open: 226, close: 222, high: 188, low: 258 },
    { x: 300, open: 188, close: 184, high: 150, low: 219 },
    { x: 430, open: 151, close: 146, high: 111, low: 182 },
    { x: 560, open: 112, close: 108, high: 71, low: 143 },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="30" textAnchor="middle">Kleine Körper · steigende gesamte Auktionen</text>
      <path className="trend-channel soft" d="M118 280 L612 128" />
      <path className="trend-channel soft" d="M118 210 L612 58" />
      {dojis.map((doji, index) => (
        <g key={index}>
          <CandleGlyph {...doji} width={26} />
          <circle className="probability-marker" cx={doji.x} cy={doji.low + 22} r="13" />
          <text className="probability-marker-text" x={doji.x} y={doji.low + 27} textAnchor="middle">{index + 1}</text>
        </g>
      ))}
      <path className="chart-arrow buy" d="M612 177 C648 152 673 113 691 78" />
      <text className="chart-region-label bull" x="696" y="64" textAnchor="end">steigende H / T / C</text>
      <text className="chart-small strong" x="380" y="315" textAnchor="middle">Innerhalb jedes Bars Balance · über alle Bars Kaufdruck</text>
    </>
  );
}

function LateBuyClimax() {
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Langer Vorlauf → letzter Kaufrausch → Gegen-Spike</text>
      <polyline className="chart-price-line" points="50,252 92,227 132,239 174,196 212,207 252,165 292,177 332,136 369,149" />
      <CandleGlyph x={420} open={160} close={54} high={38} low={171} width={36} />
      <CandleGlyph x={466} open={61} close={176} high={45} low={190} width={36} />
      <rect className="chart-range" x="500" y="119" width="212" height="111" rx="15" />
      <polyline className="chart-price-line noisy" points="505,182 540,137 573,207 611,150 644,215 677,169 707,201" />
      <text className="chart-region-label bull" x="267" y="120" textAnchor="middle">reifer Bullenlauf</text>
      <text className="chart-region-label gold" x="407" y="253" textAnchor="end">1 · Kaufklimax</text>
      <text className="chart-region-label bear" x="479" y="253">2 · Gegen-Breakout</text>
      <text className="chart-region-label" x="606" y="107" textAnchor="middle">zweiseitige Range</text>
      <line className="chart-guide" x1="443" x2="443" y1="34" y2="234" />
      <text className="chart-small strong" x="380" y="310" textAnchor="middle">Zwei gegensätzliche Spikes benötigen anschließend neue Entscheidung</text>
    </>
  );
}

function ContextualDoji() {
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Der mittlere Bar ist geometrisch in beiden Feldern gleich</text>
      <g transform="translate(32 52)">
        <rect className="chart-panel bull" width="334" height="244" rx="18" />
        <text className="chart-panel-title bull" x="167" y="30" textAnchor="middle">Ruhige Umgebung</text>
        <CandleGlyph x={78} open={165} close={158} high={139} low={185} width={19} />
        <CandleGlyph x={125} open={157} close={151} high={132} low={178} width={19} />
        <CandleGlyph x={173} open={174} close={148} high={126} low={192} width={26} label="T" />
        <CandleGlyph x={221} open={149} close={141} high={120} low={169} width={19} />
        <CandleGlyph x={268} open={142} close={134} high={113} low={163} width={19} />
        <text className="chart-region-label bull" x="167" y="226" textAnchor="middle">relativ klarer Fortschritt</text>
      </g>
      <g transform="translate(394 52)">
        <rect className="chart-panel warning" width="334" height="244" rx="18" />
        <text className="chart-panel-title bear" x="167" y="30" textAnchor="middle">Große Nachbarbars</text>
        <CandleGlyph x={78} open={204} close={102} high={86} low={221} width={28} />
        <CandleGlyph x={126} open={106} close={191} high={90} low={210} width={28} />
        <CandleGlyph x={173} open={174} close={148} high={126} low={192} width={26} label="D" />
        <CandleGlyph x={221} open={185} close={92} high={76} low={202} width={28} />
        <CandleGlyph x={269} open={96} close={197} high={80} low={216} width={28} />
        <text className="chart-region-label bear" x="167" y="226" textAnchor="middle">relativ nur eine Pause</text>
      </g>
      <text className="chart-small" x="380" y="318" textAnchor="middle">T = kleiner Trendbar · D = funktionaler Doji</text>
    </>
  );
}

function MultiframeDojiReversal() {
  const dojis = [
    { x: 88, open: 232, close: 228, high: 189, low: 266 },
    { x: 145, open: 208, close: 204, high: 171, low: 242 },
    { x: 202, open: 181, close: 176, high: 142, low: 216 },
    { x: 259, open: 151, close: 146, high: 111, low: 185 },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Prozess auf kleiner Zeitebene · Ergebnis auf großer</text>
      <rect className="chart-panel" x="30" y="52" width="344" height="244" rx="18" />
      <rect className="chart-panel bull" x="406" y="52" width="324" height="244" rx="18" />
      <PanelTitle x={202} title="4 × kleine Auktion" />
      <PanelTitle x={568} title="1 × verdichteter Bar" tone="bull" />
      {dojis.map((doji, index) => <CandleGlyph key={index} {...doji} width={22} />)}
      <path className="chart-arrow buy" d="M308 166 C351 145 379 137 407 137" />
      <CandleGlyph x={568} open={224} close={112} high={87} low={257} width={54} />
      <line className="chart-guide" x1="486" x2="650" y1="112" y2="112" />
      <text className="chart-region-label bull" x="568" y="279" textAnchor="middle">unterer Tail + hoher Schluss</text>
      <text className="chart-small strong" x="380" y="318" textAnchor="middle">Dieselben Trades werden nur anders gruppiert</text>
    </>
  );
}

function BearDayContext() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">Tagesplan: Trend handeln, Reife am Tief respektieren</text>
      <path className="indicator-line" d="M54 88 C192 104 308 131 425 159 C535 185 621 188 706 172" />
      <polyline className="chart-price-line noisy" points="54,58 91,116 128,155 169,188 207,226 246,246 282,225 316,197 351,176 386,202 421,218 456,244 491,272 527,247 565,262 606,231 650,201 707,181" />
      <line className="chart-guide" x1="42" x2="720" y1="48" y2="48" />
      <text className="chart-region-label bear" x="85" y="38">Gap + Bear-Spike</text>
      <circle className="chart-focus" cx="351" cy="176" r="7" />
      <text className="chart-region-label bear" x="351" y="159" textAnchor="middle">Bullenversuch scheitert</text>
      <circle className="chart-focus" cx="491" cy="272" r="7" />
      <text className="chart-region-label gold" x="491" y="301" textAnchor="middle">Kanalüberschuss</text>
      <circle className="chart-focus" cx="565" cy="262" r="7" />
      <text className="chart-region-label bull" x="586" y="282">letzter Tiefentest</text>
      <text className="chart-small" x="696" y="161" textAnchor="end">20 EMA</text>
      <path className="chart-arrow buy" d="M588 244 C623 220 652 199 681 185" />
    </>
  );
}

function FailedBullBreakout() {
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Ausbruchskraft ohne Anschluss wird zur Positionierungsfalle</text>
      <rect className="chart-range" x="58" y="158" width="244" height="71" rx="14" />
      <polyline className="chart-price-line noisy" points="66,201 101,173 137,213 172,181 207,211 244,176 285,205" />
      <CandleGlyph x={334} open={202} close={87} high={69} low={217} width={34} label="1" />
      <CandleGlyph x={380} open={89} close={141} high={64} low={154} width={28} />
      <CandleGlyph x={430} open={151} close={132} high={115} low={169} width={24} label="2" />
      <CandleGlyph x={477} open={137} close={194} high={122} low={207} width={26} />
      <CandleGlyph x={524} open={190} close={230} high={177} low={244} width={26} />
      <CandleGlyph x={571} open={226} close={260} high={214} low={274} width={26} />
      <polyline className="chart-price-line noisy" points="590,260 632,283 675,260 710,289" />
      <line className="breakout-line" x1="58" x2="472" y1="158" y2="158" />
      <text className="chart-region-label bear" x="706" y="70" textAnchor="end">1 · kein Follow-through</text>
      <text className="chart-region-label bear" x="706" y="91" textAnchor="end">2 · Verteidigung scheitert</text>
      <path className="chart-arrow sell" d="M458 177 C502 210 549 241 590 258" />
      <text className="chart-region-label bear" x="705" y="308" textAnchor="end">mind. zwei Beine abwärts</text>
    </>
  );
}

function QuietCollapse() {
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Lange Ruhe · dann Spike mit klarer Folgebewegung</text>
      <rect className="chart-range" x="48" y="105" width="352" height="91" rx="16" />
      <polyline className="chart-price-line noisy" points="57,167 92,127 129,178 164,132 199,174 236,121 272,168 308,128 345,171 390,137" />
      <CandleGlyph x={438} open={135} close={211} high={119} low={224} width={33} label="12" />
      <CandleGlyph x={484} open={204} close={286} high={189} low={300} width={35} label="13" />
      <CandleGlyph x={530} open={278} close={310} high={263} low={320} width={31} label="14" />
      <line className="breakout-line" x1="40" x2="566" y1="196" y2="196" />
      <line className="risk-spine" x1="620" x2="620" y1="104" y2="280" />
      <circle className="risk-point stop" cx="620" cy="118" r="8" />
      <circle className="risk-point entry" cx="620" cy="230" r="8" />
      <circle className="risk-point target" cx="620" cy="279" r="8" />
      <text className="chart-small" x="640" y="121">Stop über Signal</text>
      <text className="chart-small" x="640" y="233">Entry im Spike</text>
      <text className="chart-small" x="640" y="282">Fortsetzungsraum</text>
      <text className="chart-region-label bear" x="469" y="73" textAnchor="middle">kaum Überlappung</text>
      <text className="chart-small strong" x="380" y="324" textAnchor="middle">Risiko über Positionsgröße steuern</text>
    </>
  );
}

function ExhaustionBearSpike() {
  const bars = [
    { x: 88, open: 74, close: 104, high: 60, low: 118, width: 19 },
    { x: 132, open: 98, close: 137, high: 84, low: 151, width: 21 },
    { x: 176, open: 131, close: 180, high: 117, low: 194, width: 24 },
    { x: 220, open: 172, close: 232, high: 158, low: 246, width: 27 },
    { x: 266, open: 224, close: 298, high: 210, low: 310, width: 31 },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Echter Verkaufsdruck trifft auf wartende Nachfrage</text>
      <line className="breakout-line" x1="42" x2="718" y1="298" y2="298" />
      <text className="chart-small" x="52" y="290">Unterstützung</text>
      {bars.map((bar, index) => <CandleGlyph key={index} {...bar} />)}
      <path className="chart-arrow sell" d="M284 238 C318 267 344 286 373 297" />
      <text className="chart-region-label bear" x="330" y="240">Sell Vacuum</text>
      <g transform="translate(410 68)">
        <rect className="chart-panel bull" width="142" height="92" rx="16" />
        <text className="chart-panel-title bull" x="71" y="31" textAnchor="middle">Bären kaufen</text>
        <text className="chart-small" x="71" y="55" textAnchor="middle">Shorts zurück</text>
        <text className="chart-small" x="71" y="72" textAnchor="middle">Gewinn sichern</text>
      </g>
      <g transform="translate(578 68)">
        <rect className="chart-panel bull" width="142" height="92" rx="16" />
        <text className="chart-panel-title bull" x="71" y="31" textAnchor="middle">Bullen kaufen</text>
        <text className="chart-small" x="71" y="55" textAnchor="middle">neue Longs</text>
        <text className="chart-small" x="71" y="72" textAnchor="middle">am günstigen Ziel</text>
      </g>
      <path className="chart-price-line" d="M294 298 C361 273 407 218 456 181 C514 138 587 194 692 92" />
      <text className="chart-region-label bull" x="700" y="51" textAnchor="end">mind. zwei Rallybeine prüfen</text>
      <text className="chart-small strong" x="380" y="324" textAnchor="middle">Beide Gruppen erzeugen nach dem Klimax Kauforders</text>
    </>
  );
}

function TrendToRangePressure() {
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">Jeder neue Tiefbruch wird schneller zurückgewiesen</text>
      <polyline className="chart-price-line noisy" points="48,65 90,103 132,88 174,139 214,122 256,176 297,153 338,211 378,181 418,244" />
      <line className="trend-channel soft" x1="44" x2="430" y1="48" y2="257" />
      {[{ x: 174, y: 139 }, { x: 256, y: 176 }, { x: 338, y: 211 }, { x: 418, y: 244 }].map((point, index) => (
        <g key={point.x}>
          <circle className="chart-focus" cx={point.x} cy={point.y} r="6" />
          <text className="chart-marker-text" x={point.x} y={point.y + 4} textAnchor="middle">{index + 1}</text>
        </g>
      ))}
      <rect className="chart-range" x="386" y="137" width="166" height="115" rx="16" />
      <polyline className="chart-price-line" points="420,244 455,202 487,224 519,172 551,189 584,132 622,104 658,119 706,83" />
      <CandleGlyph x={646} open={105} close={132} high={91} low={145} width={20} />
      <CandleGlyph x={676} open={116} close={145} high={102} low={158} width={20} />
      <CandleGlyph x={706} open={132} close={155} high={118} low={168} width={20} />
      <text className="chart-region-label gold" x="469" y="126" textAnchor="middle">Übergang zur Range</text>
      <text className="chart-region-label bull" x="565" y="77">Kaufdruck → Rally</text>
      <text className="chart-region-label bear" x="705" y="190" textAnchor="end">Bear-Körper sammeln sich</text>
      <text className="chart-small strong" x="380" y="315" textAnchor="middle">Reaktion nach dem Extrem zeigt den Kontrollwechsel</text>
    </>
  );
}

export function ChapterTwoChart({ scenario }: { scenario: ChartScenarioId }) {
  if (scenario === 'bar-control-spectrum') return <BarControlSpectrum />;
  if (scenario === 'two-sided-trend-bar') return <TwoSidedTrendBar />;
  if (scenario === 'relative-doji') return <RelativeDoji />;
  if (scenario === 'trend-bar-four-roles') return <TrendBarFourRoles />;
  if (scenario === 'vacuum-vs-follow-through') return <VacuumVsFollowThrough />;
  if (scenario === 'follow-through-decision') return <FollowThroughDecision />;
  if (scenario === 'human-vs-tick-speed') return <HumanVsTickSpeed />;
  if (scenario === 'climax-vs-reversal') return <ClimaxVsReversal />;
  if (scenario === 'ideal-trend-bar') return <IdealTrendBar />;
  if (scenario === 'cumulative-pressure') return <CumulativePressure />;
  if (scenario === 'strong-weak-range') return <StrongWeakRange />;
  if (scenario === 'trending-dojis') return <TrendingDojis />;
  if (scenario === 'late-buy-climax') return <LateBuyClimax />;
  if (scenario === 'contextual-doji') return <ContextualDoji />;
  if (scenario === 'multiframe-doji-reversal') return <MultiframeDojiReversal />;
  if (scenario === 'bear-day-context') return <BearDayContext />;
  if (scenario === 'failed-bull-breakout') return <FailedBullBreakout />;
  if (scenario === 'quiet-collapse') return <QuietCollapse />;
  if (scenario === 'exhaustion-bear-spike') return <ExhaustionBearSpike />;
  if (scenario === 'trend-to-range-pressure') return <TrendToRangePressure />;
  return null;
}
