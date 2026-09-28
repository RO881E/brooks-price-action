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
          <circle className="chart-marker" cx={x} cy={high - 13} r="11" />
          <text className="chart-marker-text" x={x} y={high - 9} textAnchor="middle">
            {label}
          </text>
        </>
      ) : null}
    </g>
  );
}

function PanelTitle({ x, title, tone }: { x: number; title: string; tone?: 'bull' | 'bear' }) {
  return (
    <text className={`chart-panel-title ${tone ?? ''}`} x={x} y="78" textAnchor="middle">
      {title}
    </text>
  );
}

function BreakoutSpikeChannel() {
  const bars = [
    { x: 360, open: 211, close: 133, high: 116, low: 226, width: 28 },
    { x: 405, open: 141, close: 91, high: 75, low: 155, width: 26 },
    { x: 450, open: 101, close: 72, high: 57, low: 118, width: 22 },
    { x: 495, open: 76, close: 111, high: 62, low: 127, width: 20 },
    { x: 540, open: 108, close: 84, high: 69, low: 121, width: 20 },
    { x: 585, open: 91, close: 70, high: 55, low: 107, width: 18 },
    { x: 630, open: 74, close: 93, high: 60, low: 109, width: 18 },
    { x: 675, open: 89, close: 66, high: 50, low: 103, width: 18 },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">
        Nicht der Grenzbruch, sondern die Akzeptanz macht den Breakout
      </text>
      <rect className="chart-range" x="42" y="164" width="275" height="105" rx="16" />
      <polyline
        className="chart-price-line noisy"
        points="50,238 84,188 119,248 153,180 190,241 226,187 264,246 307,201"
      />
      <line className="breakout-line" x1="42" x2="712" y1="164" y2="164" />
      <text className="chart-region-label gold" x="177" y="153" textAnchor="middle">alte Balance</text>
      {bars.map((bar, index) => <CandleGlyph key={index} {...bar} />)}
      <path className="chart-arrow buy" d="M328 183 C355 150 377 112 405 90" />
      <text className="chart-region-label bull" x="405" y="48" textAnchor="middle">Spike</text>
      <path className="trend-channel soft" d="M486 54 L706 43" />
      <path className="trend-channel soft" d="M493 128 L710 105" />
      <text className="chart-region-label bull" x="608" y="137" textAnchor="middle">haltender Pullback → Kanal</text>
      <text className="chart-small strong" x="380" y="314" textAnchor="middle">
        Distanz + Anschluss + verteidigter Rücklauf = Akzeptanz
      </text>
    </>
  );
}

function ChannelShallowing() {
  return (
    <>
      <text className="chart-kicker" x="380" y="28" textAnchor="middle">
        Der Trend bleibt bullisch, während Effizienz und Steigung sinken
      </text>
      <polyline
        className="chart-price-line"
        points="52,275 91,230 128,171 166,104 204,67 238,121 278,91 320,133 365,97 411,142 459,107 507,151 558,118 610,158 665,127 712,165"
      />
      <line className="trend-channel" x1="48" x2="221" y1="292" y2="40" />
      <line className="trend-channel soft" x1="232" x2="716" y1="136" y2="177" />
      <line className="trend-channel soft" x1="214" x2="696" y1="55" y2="118" />
      <line className="chart-guide" x1="230" x2="230" y1="46" y2="286" />
      <text className="chart-region-label bull" x="130" y="63" textAnchor="middle">1 · Spike</text>
      <text className="chart-region-label gold" x="238" y="307" textAnchor="middle">erster Pullback</text>
      <text className="chart-region-label bull" x="488" y="68" textAnchor="middle">2 · flacherer, breiterer Kanal</text>
      <g transform="translate(480 224)">
        <rect className="chart-pill" width="238" height="43" rx="20" />
        <text className="chart-small strong" x="119" y="18" textAnchor="middle">Linien werden neu angepasst</text>
        <text className="chart-small" x="119" y="34" textAnchor="middle">wenn neue Schwünge entstehen</text>
      </g>
    </>
  );
}

function ChannelToRangeCycle() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Im Kanal sammeln sich die Orders für den späteren Rücktest
      </text>
      <rect className="chart-range" x="445" y="166" width="270" height="103" rx="16" />
      <polyline
        className="chart-price-line"
        points="48,274 90,218 130,145 170,79 211,122 252,91 296,130 340,96 386,139 430,106 474,151 516,116 550,170 520,217 478,249 525,213 574,256 621,211 670,247 712,204"
      />
      <line className="chart-guide" x1="205" x2="205" y1="65" y2="288" />
      <line className="breakout-line" x1="194" x2="718" y1="218" y2="218" />
      <text className="chart-region-label gold" x="216" y="307">Kanalbeginn</text>
      <text className="chart-region-label bull" x="115" y="58" textAnchor="middle">Spike</text>
      <text className="chart-region-label bear" x="390" y="70" textAnchor="middle">Gewinne + gestaffelte Shorts</text>
      <path className="chart-arrow sell" d="M294 75 C342 91 405 119 462 151" />
      <path className="chart-arrow sell" d="M474 156 C474 187 481 216 493 244" />
      <g transform="translate(40 178)">
        <rect className="chart-panel bull" width="142" height="86" rx="15" />
        <text className="chart-panel-title bull" x="71" y="29" textAnchor="middle">Bullen</text>
        <text className="chart-small" x="71" y="52" textAnchor="middle">kaufen erneut</text>
        <text className="chart-small" x="71" y="69" textAnchor="middle">am Pullback</text>
      </g>
      <path className="chart-arrow buy" d="M184 224 C194 221 199 219 208 218" />
      <g transform="translate(280 226)">
        <rect className="chart-panel bull" width="154" height="70" rx="15" />
        <text className="chart-panel-title bull" x="77" y="27" textAnchor="middle">Bären decken ein</text>
        <text className="chart-small" x="77" y="51" textAnchor="middle">ebenfalls Kauforders</text>
      </g>
      <path className="chart-arrow buy" d="M438 255 C456 253 468 250 481 247" />
      <text className="chart-region-label gold" x="590" y="286" textAnchor="middle">breitere Range</text>
    </>
  );
}

function ChannelCounterFlag() {
  const panels = [38, 278, 518];
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Derselbe reife Bullenkanal · drei mögliche Fortsetzungen
      </text>
      {panels.map((x, index) => (
        <rect
          key={x}
          className={`chart-panel ${index === 1 ? 'bull' : 'warning'}`}
          x={x}
          y="48"
          width="204"
          height="250"
          rx="18"
        />
      ))}
      <PanelTitle x={140} title="häufig: Rücktest" tone="bear" />
      <PanelTitle x={380} title="Range → Fortsetzung" tone="bull" />
      <PanelTitle x={620} title="selten: Beschleunigung" tone="bear" />
      <polyline className="chart-price-line" points="62,245 91,201 118,218 144,170 169,187 197,136 220,153 205,198 176,239 146,268" />
      <line className="trend-channel soft" x1="55" x2="225" y1="263" y2="145" />
      <text className="chart-small" x="140" y="285" textAnchor="middle">Kanalstart wird geprüft</text>
      <polyline className="chart-price-line" points="300,234 326,193 351,211 375,167 399,184 426,143 450,160 467,174 485,156 501,169" />
      <rect className="chart-range" x="442" y="143" width="62" height="49" rx="9" />
      <path className="chart-arrow buy" d="M489 156 C503 130 508 109 511 93" />
      <text className="chart-small" x="380" y="285" textAnchor="middle">Pause lädt alten Trend neu</text>
      <polyline className="chart-price-line" points="540,237 566,197 589,215 612,173 636,190 658,148 682,162 700,119 715,87 704,137 683,184 654,231" />
      <line className="trend-channel soft" x1="533" x2="697" y1="251" y2="139" />
      <line className="trend-channel soft" x1="546" x2="697" y1="194" y2="102" />
      <text className="chart-small" x="620" y="285" textAnchor="middle">ohne Anschluss zurück</text>
    </>
  );
}

function TestAreaDecision() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Das alte Hoch ist eine Prüfzone – kein magischer Ein-Tick-Punkt
      </text>
      <rect className="chart-panel bull" x="32" y="48" width="334" height="250" rx="18" />
      <rect className="chart-panel warning" x="394" y="48" width="334" height="250" rx="18" />
      <PanelTitle x={199} title="Akzeptanz über dem Hoch" tone="bull" />
      <PanelTitle x={561} title="Zurückweisung der Zone" tone="bear" />
      <rect className="chart-zone" x="52" y="126" width="294" height="40" rx="10" />
      <rect className="chart-zone" x="414" y="126" width="294" height="40" rx="10" />
      <text className="chart-small" x="66" y="120">altes Hoch</text>
      <text className="chart-small" x="428" y="120">altes Hoch</text>
      <polyline className="chart-price-line" points="58,254 96,221 132,189 167,151 203,109 241,81 270,111 305,93 340,73" />
      <path className="chart-arrow buy" d="M243 108 C265 101 284 96 304 93" />
      <text className="chart-region-label bull" x="285" y="221" textAnchor="middle">Pullback hält darüber</text>
      <polyline className="chart-price-line noisy" points="420,254 456,222 492,189 530,151 566,119 600,101 631,127 665,176 704,221" />
      <CandleGlyph x={632} open={115} close={170} high={92} low={183} width={26} />
      <path className="chart-arrow sell" d="M646 146 C664 169 683 193 704 218" />
      <text className="chart-region-label bear" x="561" y="282" textAnchor="middle">höheres Hoch darf trotzdem scheitern</text>
    </>
  );
}

function BehaviorReversal() {
  const panels = [34, 275, 516];
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Reversal bedeutet: Das bisherige Verhalten gilt nicht mehr
      </text>
      {panels.map((x, index) => (
        <rect key={x} className="chart-panel" x={x} y="48" width="210" height="250" rx="18" />
      ))}
      <PanelTitle x={139} title="Bull → Bear" />
      <PanelTitle x={380} title="Trend → Range" />
      <PanelTitle x={621} title="Range → Trend" />
      <polyline className="chart-price-line" points="54,233 82,197 111,158 140,111 169,81 196,119 220,166 197,210 170,252" />
      <circle className="chart-focus" cx="169" cy="81" r="6" />
      <text className="chart-small" x="139" y="280" textAnchor="middle">Richtung wechselt</text>
      <polyline className="chart-price-line noisy" points="294,245 321,203 348,157 376,108 405,78 431,122 454,93 476,126 454,151 480,119" />
      <rect className="chart-range" x="403" y="83" width="80" height="76" rx="12" />
      <text className="chart-small" x="380" y="280" textAnchor="middle">Einseitigkeit endet</text>
      <rect className="chart-range" x="536" y="163" width="102" height="73" rx="12" />
      <polyline className="chart-price-line noisy" points="542,218 566,176 590,224 614,181 637,214 662,158 688,114 714,72" />
      <line className="breakout-line" x1="536" x2="716" y1="163" y2="163" />
      <text className="chart-small" x="621" y="280" textAnchor="middle">Balance endet: Breakout</text>
    </>
  );
}

function ReversalInertia() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Frühe Umkehrversuche werden Flags – bis Balance groß genug wird
      </text>
      <polyline
        className="chart-price-line"
        points="45,275 84,232 120,251 158,204 194,232 235,177 274,218 318,153 361,209 405,130 449,202 493,117 537,183 575,126 612,171 651,128 690,183 715,236"
      />
      <path className="trend-channel soft" d="M40 288 L505 100" />
      <rect className="chart-zone" x="101" y="225" width="39" height="39" rx="8" />
      <rect className="chart-zone" x="246" y="196" width="55" height="40" rx="8" />
      <rect className="chart-zone" x="432" y="172" width="105" height="48" rx="10" />
      <rect className="chart-range" x="548" y="112" width="154" height="81" rx="14" />
      <line className="breakout-line" x1="548" x2="718" y1="193" y2="193" />
      <text className="chart-region-label gold" x="120" y="305" textAnchor="middle">kleine Flag</text>
      <text className="chart-region-label gold" x="276" y="305" textAnchor="middle">größer</text>
      <text className="chart-region-label gold" x="483" y="305" textAnchor="middle">noch größer</text>
      <text className="chart-region-label bear" x="636" y="104" textAnchor="middle">echte Balance</text>
      <path className="chart-arrow sell" d="M680 182 C697 201 706 218 715 236" />
      <text className="chart-small strong" x="630" y="264" textAnchor="middle">erst Breakout + Anschluss bestätigen Bear</text>
    </>
  );
}

function ReversalMultiframeMap() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Eine Marktveränderung · drei zeitliche Auflösungen
      </text>
      <rect className="chart-panel warning" x="34" y="48" width="210" height="250" rx="18" />
      <rect className="chart-panel warning" x="275" y="48" width="210" height="250" rx="18" />
      <rect className="chart-panel warning" x="516" y="48" width="210" height="250" rx="18" />
      <PanelTitle x={139} title="Monat" tone="bear" />
      <PanelTitle x={380} title="Woche" tone="bear" />
      <PanelTitle x={621} title="Tag" tone="bear" />
      <CandleGlyph x={139} open={116} close={229} high={79} low={252} width={48} />
      <text className="chart-small" x="139" y="279" textAnchor="middle">ein großer Reversal-Bar</text>
      <CandleGlyph x={344} open={222} close={105} high={81} low={239} width={38} />
      <CandleGlyph x={415} open={108} close={232} high={87} low={250} width={40} />
      <text className="chart-small" x="380" y="279" textAnchor="middle">zwei Bars übergeben Kontrolle</text>
      <polyline className="chart-price-line" points="535,227 558,194 580,151 602,105 622,80 638,112 654,121 670,107 686,125 701,181 716,235" />
      <rect className="chart-range" x="637" y="101" width="56" height="39" rx="8" />
      <text className="chart-small" x="579" y="250" textAnchor="middle">Spike</text>
      <text className="chart-small" x="665" y="157" textAnchor="middle">Range</text>
      <text className="chart-small" x="703" y="278" textAnchor="middle">Breakout</text>
    </>
  );
}

function FailedLowBreakout() {
  const bars = [
    { x: 97, open: 126, close: 158, high: 111, low: 172, width: 20 },
    { x: 136, open: 151, close: 187, high: 139, low: 201, width: 20 },
    { x: 175, open: 181, close: 224, high: 168, low: 238, width: 22 },
    { x: 214, open: 218, close: 269, high: 204, low: 286, width: 24, label: '2' },
    { x: 258, open: 264, close: 174, high: 159, low: 278, width: 28, label: '3' },
    { x: 304, open: 180, close: 119, high: 102, low: 195, width: 27 },
    { x: 350, open: 128, close: 88, high: 72, low: 142, width: 24, label: '4' },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Das neue Tief wird nicht akzeptiert – beide Seiten erzeugen Käufe
      </text>
      <line className="breakout-line" x1="44" x2="718" y1="236" y2="236" />
      <text className="chart-small" x="51" y="226">Vortagestief</text>
      {bars.map((bar, index) => <CandleGlyph key={index} {...bar} />)}
      <rect className="chart-zone" x="190" y="231" width="93" height="66" rx="12" />
      <path className="chart-arrow buy" d="M236 279 C260 234 287 179 322 126" />
      <text className="chart-region-label bear" x="242" y="314" textAnchor="middle">Fehlausbruch</text>
      <g transform="translate(410 73)">
        <rect className="chart-panel bull" width="138" height="87" rx="15" />
        <text className="chart-panel-title bull" x="69" y="28" textAnchor="middle">Bären kaufen</text>
        <text className="chart-small" x="69" y="51" textAnchor="middle">Gewinne sichern</text>
        <text className="chart-small" x="69" y="69" textAnchor="middle">Shorts eindecken</text>
      </g>
      <g transform="translate(574 73)">
        <rect className="chart-panel bull" width="138" height="87" rx="15" />
        <text className="chart-panel-title bull" x="69" y="28" textAnchor="middle">Bullen kaufen</text>
        <text className="chart-small" x="69" y="51" textAnchor="middle">günstige Zone</text>
        <text className="chart-small" x="69" y="69" textAnchor="middle">neue Longs</text>
      </g>
      <path className="chart-arrow buy" d="M365 93 C386 90 394 94 407 103" />
      <text className="chart-small strong" x="558" y="203" textAnchor="middle">gemeinsam: bullischer Orderstrom</text>
    </>
  );
}

function RepeatedHighTest() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Momentum erzeugt nach dem ersten Kontakt einen zweiten Versuch
      </text>
      <line className="breakout-line" x1="45" x2="715" y1="112" y2="112" />
      <text className="chart-small" x="52" y="101">Hoch von Bar 1</text>
      <CandleGlyph x={103} open={105} close={159} high={88} low={173} width={24} label="1" />
      <polyline className="chart-price-line" points="125,168 171,223 217,274 263,219 309,158 352,103" />
      <CandleGlyph x={365} open={151} close={105} high={91} low={165} width={24} label="4" />
      <CandleGlyph x={407} open={111} close={148} high={97} low={163} width={20} />
      <CandleGlyph x={449} open={144} close={96} high={79} low={158} width={23} />
      <CandleGlyph x={493} open={102} close={77} high={62} low={116} width={21} />
      <CandleGlyph x={542} open={84} close={130} high={69} low={145} width={22} label="5" />
      <CandleGlyph x={588} open={126} close={91} high={75} low={140} width={21} />
      <CandleGlyph x={634} open={96} close={67} high={51} low={111} width={21} />
      <rect className="chart-zone" x="529" y="105" width="67" height="49" rx="10" />
      <path className="chart-arrow buy" d="M414 136 C432 121 441 108 450 96" />
      <text className="chart-region-label gold" x="405" y="186" textAnchor="middle">nur ein Bar Pullback</text>
      <text className="chart-region-label bull" x="500" y="48" textAnchor="middle">zweiter Angriff bricht durch</text>
      <text className="chart-region-label bull" x="571" y="177" textAnchor="middle">Higher-Low-Test</text>
      <text className="chart-small strong" x="380" y="311" textAnchor="middle">alte Verkaufszone → neue Unterstützung</text>
    </>
  );
}

function SpikeToOverlap() {
  const bars = [
    { x: 82, open: 271, close: 219, high: 204, low: 284, width: 24, label: '2' },
    { x: 124, open: 224, close: 139, high: 121, low: 238, width: 29, label: '3' },
    { x: 169, open: 146, close: 91, high: 74, low: 160, width: 27, label: '4' },
    { x: 217, open: 98, close: 142, high: 84, low: 158, width: 22, label: '5' },
    { x: 261, open: 136, close: 107, high: 91, low: 151, width: 20 },
    { x: 305, open: 112, close: 137, high: 96, low: 153, width: 20 },
    { x: 349, open: 133, close: 101, high: 84, low: 149, width: 20 },
    { x: 393, open: 108, close: 128, high: 91, low: 145, width: 20 },
    { x: 437, open: 124, close: 95, high: 78, low: 141, width: 20, label: '6' },
    { x: 481, open: 102, close: 139, high: 86, low: 155, width: 20 },
    { x: 525, open: 133, close: 166, high: 119, low: 181, width: 21 },
    { x: 569, open: 159, close: 196, high: 145, low: 211, width: 22 },
    { x: 613, open: 190, close: 220, high: 176, low: 235, width: 22, label: '7' },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Schnelle Neubewertung wird zu überlappendem Kanal und Rücktest
      </text>
      {bars.map((bar, index) => <CandleGlyph key={index} {...bar} />)}
      <path className="trend-channel soft" d="M205 75 L464 68" />
      <path className="trend-channel soft" d="M211 158 L471 146" />
      <line className="breakout-line" x1="202" x2="705" y1="218" y2="218" />
      <rect className="chart-zone" x="198" y="201" width="437" height="44" rx="12" />
      <text className="chart-region-label bull" x="127" y="48" textAnchor="middle">Spike</text>
      <text className="chart-region-label gold" x="347" y="183" textAnchor="middle">Überlappung + Tails = schwächerer Fortschritt</text>
      <path className="chart-arrow sell" d="M468 125 C508 149 558 188 607 218" />
      <text className="chart-small strong" x="380" y="309" textAnchor="middle">Bar 7 testet den Kanalbeginn bei Bar 5</text>
    </>
  );
}

function BreakevenDefense() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Mehrere alte Entscheidungen bündeln sich in denselben Zonen
      </text>
      <path className="chart-guide" d="M45 235 C170 215 286 189 396 171 C505 151 612 126 716 109" />
      <text className="chart-small" x="700" y="101" textAnchor="end">gleitender Durchschnitt</text>
      <line className="breakout-line" x1="44" x2="716" y1="228" y2="228" />
      <line className="breakout-line" x1="44" x2="716" y1="105" y2="105" />
      <text className="chart-small" x="53" y="218">Vortagestief / Unterstützung</text>
      <text className="chart-small" x="53" y="95">Vortagesschluss / Widerstand</text>
      <polyline className="chart-price-line" points="61,231 116,177 167,222 220,155 273,212 327,145 380,93 430,126 478,88 526,121 576,172 623,149 667,181 711,116" />
      <circle className="chart-focus" cx="273" cy="212" r="7" />
      <text className="chart-marker-text" x="273" y="216" textAnchor="middle">7</text>
      <circle className="chart-focus" cx="478" cy="88" r="7" />
      <text className="chart-marker-text" x="478" y="92" textAnchor="middle">8</text>
      <circle className="chart-focus" cx="667" cy="181" r="7" />
      <text className="chart-marker-text" x="667" y="185" textAnchor="middle">9</text>
      <line className="risk-spine" x1="555" x2="716" y1="181" y2="181" />
      <text className="chart-region-label bull" x="552" y="199" textAnchor="end">früher Long-Einstieg</text>
      <rect className="chart-zone" x="244" y="199" width="60" height="46" rx="10" />
      <rect className="chart-zone" x="448" y="78" width="61" height="48" rx="10" />
      <rect className="chart-zone" x="638" y="163" width="58" height="42" rx="10" />
      <text className="chart-region-label bull" x="274" y="278" textAnchor="middle">Doppeltief</text>
      <text className="chart-region-label bear" x="479" y="57" textAnchor="middle">Doppeltop-Zone</text>
      <text className="chart-region-label bull" x="638" y="236" textAnchor="middle">Breakeven hält knapp</text>
      <path className="chart-arrow buy" d="M681 170 C693 151 700 135 710 118" />
    </>
  );
}

function BreakoutGapAlwaysIn() {
  const bars = [
    { x: 70, open: 252, close: 224, high: 210, low: 267, width: 20, label: '2' },
    { x: 118, open: 220, close: 112, high: 94, low: 236, width: 34, label: '3' },
    { x: 166, open: 118, close: 83, high: 67, low: 134, width: 25 },
    { x: 215, open: 91, close: 132, high: 75, low: 149, width: 22, label: '5' },
    { x: 261, open: 126, close: 96, high: 80, low: 142, width: 20 },
    { x: 307, open: 102, close: 122, high: 86, low: 140, width: 20 },
    { x: 353, open: 118, close: 89, high: 73, low: 134, width: 20 },
    { x: 402, open: 97, close: 143, high: 81, low: 159, width: 22 },
    { x: 450, open: 137, close: 172, high: 123, low: 188, width: 22 },
    { x: 498, open: 166, close: 203, high: 152, low: 219, width: 23, label: '7' },
    { x: 546, open: 197, close: 154, high: 138, low: 213, width: 24 },
    { x: 594, open: 160, close: 118, high: 102, low: 176, width: 24 },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Der starke Bar 3 setzt die Richtung – Gegenversuche müssen sie erst zurückerobern
      </text>
      {bars.map((bar, index) => <CandleGlyph key={index} {...bar} />)}
      <rect className="chart-zone" x="99" y="92" width="39" height="148" rx="12" />
      <text className="chart-region-label bull" x="116" y="70" textAnchor="middle">Breakout-Lücke</text>
      <path className="trend-channel soft" d="M155 66 L387 73" />
      <path className="trend-channel soft" d="M207 151 L402 162" />
      <line className="breakout-line" x1="190" x2="625" y1="205" y2="205" />
      <text className="chart-small" x="621" y="224" textAnchor="end">früheres Swing-Tief</text>
      <circle className="chart-focus" cx="498" cy="219" r="7" />
      <path className="chart-arrow buy" d="M508 204 C530 179 552 152 580 127" />
      <g transform="translate(626 64)">
        <rect className="chart-panel bull" width="94" height="116" rx="16" />
        <text className="chart-panel-title bull" x="47" y="29" textAnchor="middle">ALWAYS-IN</text>
        <text className="chart-region-label bull" x="47" y="57" textAnchor="middle">UP</text>
        <text className="chart-small" x="47" y="82" textAnchor="middle">bis Bear</text>
        <text className="chart-small" x="47" y="99" textAnchor="middle">Kontrolle</text>
      </g>
      <text className="chart-small strong" x="380" y="309" textAnchor="middle">Kanallinienbruch ≠ bestätigter Richtungswechsel</text>
    </>
  );
}

function SpikeChannelPlaybook() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Vom Fehlausbruch bis zur neuen Entscheidung – ein vollständiger Zyklus
      </text>
      <polyline
        className="chart-price-line"
        points="43,270 76,292 111,224 143,138 176,76 212,121 248,93 286,132 324,99 362,142 401,106 439,152 476,119 511,168 548,224 586,194 623,231"
      />
      <line className="breakout-line" x1="38" x2="718" y1="270" y2="270" />
      <line className="chart-guide" x1="206" x2="206" y1="63" y2="293" />
      <line className="chart-guide" x1="540" x2="540" y1="86" y2="293" />
      <rect className="chart-zone" x="38" y="254" width="83" height="48" rx="10" />
      <rect className="chart-zone" x="529" y="208" width="111" height="48" rx="11" />
      <path className="trend-channel soft" d="M205 72 L493 108" />
      <path className="trend-channel soft" d="M211 130 L518 180" />
      <text className="chart-region-label bear" x="79" y="245" textAnchor="middle">1 · Fehlausbruch</text>
      <text className="chart-region-label bull" x="151" y="50" textAnchor="middle">2 · Spike</text>
      <text className="chart-region-label gold" x="352" y="72" textAnchor="middle">3 · Keilkanal</text>
      <text className="chart-region-label gold" x="580" y="298" textAnchor="middle">4 · zweibeiniger Test</text>
      <path className="chart-arrow sell" d="M463 130 C501 153 524 191 548 222" />
      <path className="chart-arrow buy" d="M622 229 C642 201 660 180 678 161" />
      <g transform="translate(642 69)">
        <rect className="chart-panel bull" width="82" height="80" rx="14" />
        <text className="chart-small strong" x="41" y="25" textAnchor="middle">Rally</text>
        <text className="chart-small" x="41" y="45" textAnchor="middle">Range</text>
        <text className="chart-small" x="41" y="64" textAnchor="middle">oder Bear</text>
      </g>
      <text className="chart-small strong" x="380" y="321" textAnchor="middle">
        Reaktion am Test entscheidet – der Mustername allein nicht
      </text>
    </>
  );
}

export function ChapterThreeChart({ scenario }: { scenario: ChartScenarioId }) {
  if (scenario === 'breakout-spike-channel') return <BreakoutSpikeChannel />;
  if (scenario === 'channel-shallowing') return <ChannelShallowing />;
  if (scenario === 'channel-to-range-cycle') return <ChannelToRangeCycle />;
  if (scenario === 'channel-counter-flag') return <ChannelCounterFlag />;
  if (scenario === 'test-area-decision') return <TestAreaDecision />;
  if (scenario === 'behavior-reversal') return <BehaviorReversal />;
  if (scenario === 'reversal-inertia') return <ReversalInertia />;
  if (scenario === 'reversal-multiframe-map') return <ReversalMultiframeMap />;
  if (scenario === 'failed-low-breakout') return <FailedLowBreakout />;
  if (scenario === 'repeated-high-test') return <RepeatedHighTest />;
  if (scenario === 'spike-to-overlap') return <SpikeToOverlap />;
  if (scenario === 'breakeven-defense') return <BreakevenDefense />;
  if (scenario === 'breakout-gap-always-in') return <BreakoutGapAlwaysIn />;
  if (scenario === 'spike-channel-playbook') return <SpikeChannelPlaybook />;
  return null;
}
