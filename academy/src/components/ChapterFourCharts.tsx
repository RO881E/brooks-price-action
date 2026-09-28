import type { ReactNode } from 'react';
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

function SetupDirection() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Der größere Trend entscheidet, welche Seite weniger beweisen muss
      </text>
      <polyline
        className="chart-price-line"
        points="54,266 102,223 145,177 190,126 235,76 280,115 327,151 372,119 418,82 463,105 510,66 559,91 610,58"
      />
      <path className="trend-channel soft" d="M45 282 L624 49" />
      <circle className="chart-focus" cx="327" cy="151" r="8" />
      <text className="chart-region-label gold" x="327" y="177" textAnchor="middle">gleiches Pullback-Tief</text>
      <g transform="translate(50 54)">
        <rect className="chart-panel bull" width="171" height="86" rx="16" />
        <text className="chart-panel-title bull" x="85" y="29" textAnchor="middle">LONG · WITH-TREND</text>
        <text className="chart-small" x="85" y="53" textAnchor="middle">Trendträgheit hilft</text>
        <text className="chart-small" x="85" y="70" textAnchor="middle">oberhalb Signal-Bar</text>
      </g>
      <path className="chart-arrow buy" d="M222 105 C262 118 292 134 319 148" />
      <g transform="translate(565 173)">
        <rect className="chart-panel warning" width="155" height="91" rx="16" />
        <text className="chart-panel-title bear" x="77" y="29" textAnchor="middle">SHORT · COUNTER</text>
        <text className="chart-small" x="77" y="53" textAnchor="middle">Trendbruch fehlt</text>
        <text className="chart-small" x="77" y="70" textAnchor="middle">höhere Beweislast</text>
      </g>
      <path className="chart-arrow sell" d="M565 215 C487 199 409 176 337 154" />
      <text className="chart-small strong" x="380" y="312" textAnchor="middle">
        Setup = Möglichkeit · Richtung + Kontext = Qualität
      </text>
    </>
  );
}

function BarRoleLifecycle() {
  const bars = [
    { x: 151, open: 226, close: 161, high: 143, low: 243, width: 34 },
    { x: 300, open: 168, close: 112, high: 94, low: 184, width: 34 },
    { x: 449, open: 117, close: 93, high: 76, low: 137, width: 30 },
    { x: 598, open: 101, close: 61, high: 45, low: 119, width: 32 },
  ];
  const labels = [
    ['SETUP', 'vor Auslösung'],
    ['ENTRY', 'Order wird gefüllt'],
    ['PAUSE', 'These bleibt intakt'],
    ['FOLLOW-THROUGH', 'Richtung bestätigt'],
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Rollen entstehen durch das, was nach dem abgeschlossenen Bar passiert
      </text>
      <line className="chart-guide" x1="70" x2="690" y1="270" y2="270" />
      {bars.map((bar, index) => (
        <g key={index}>
          <CandleGlyph {...bar} />
          <rect
            className={index === 3 ? 'chart-panel bull' : 'chart-panel'}
            x={bar.x - 66}
            y="278"
            width="132"
            height="42"
            rx="12"
          />
          <text className="chart-small strong" x={bar.x} y="295" textAnchor="middle">{labels[index][0]}</text>
          <text className="chart-small" x={bar.x} y="311" textAnchor="middle">{labels[index][1]}</text>
        </g>
      ))}
      <line className="breakout-line" x1="93" x2="348" y1="143" y2="143" />
      <text className="chart-small" x="98" y="134">Buy-Stop über Setup</text>
      <path className="chart-arrow buy" d="M176 150 C218 134 252 120 282 112" />
      <g transform="translate(74 48)">
        <rect className="chart-pill" width="224" height="39" rx="19" />
        <text className="chart-small strong" x="112" y="17" textAnchor="middle">Nach dem Fill wird SETUP</text>
        <text className="chart-small" x="112" y="32" textAnchor="middle">rückblickend zum SIGNAL-BAR</text>
      </g>
      <path className="chart-arrow buy" d="M301 74 C338 82 377 88 417 92" />
      <text className="chart-region-label bull" x="586" y="142" textAnchor="middle">später Anschluss ist möglich</text>
    </>
  );
}

function OneBarOrderMap() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Ein Bar ist eine Mini-Range mit vier rationalen Orderideen
      </text>
      <CandleGlyph x={380} open={224} close={109} high={77} low={258} width={58} />
      <line className="breakout-line" x1="278" x2="482" y1="77" y2="77" />
      <line className="breakout-line" x1="278" x2="482" y1="258" y2="258" />
      <g transform="translate(40 49)">
        <rect className="chart-panel bull" width="190" height="77" rx="15" />
        <text className="chart-panel-title bull" x="95" y="28" textAnchor="middle">BUY-STOP</text>
        <text className="chart-small" x="95" y="52" textAnchor="middle">Breakout über Hoch</text>
      </g>
      <path className="chart-arrow buy" d="M232 89 C282 83 320 78 349 77" />
      <g transform="translate(530 49)">
        <rect className="chart-panel warning" width="190" height="77" rx="15" />
        <text className="chart-panel-title bear" x="95" y="28" textAnchor="middle">SELL-LIMIT</text>
        <text className="chart-small" x="95" y="52" textAnchor="middle">Fehlausbruch am Hoch</text>
      </g>
      <path className="chart-arrow sell" d="M528 89 C478 83 440 78 411 77" />
      <g transform="translate(40 220)">
        <rect className="chart-panel warning" width="190" height="77" rx="15" />
        <text className="chart-panel-title bear" x="95" y="28" textAnchor="middle">SELL-STOP</text>
        <text className="chart-small" x="95" y="52" textAnchor="middle">Breakout unter Tief</text>
      </g>
      <path className="chart-arrow sell" d="M232 257 C282 258 319 258 349 258" />
      <g transform="translate(530 220)">
        <rect className="chart-panel bull" width="190" height="77" rx="15" />
        <text className="chart-panel-title bull" x="95" y="28" textAnchor="middle">BUY-LIMIT</text>
        <text className="chart-small" x="95" y="52" textAnchor="middle">Fehlausbruch am Tief</text>
      </g>
      <path className="chart-arrow buy" d="M528 257 C478 258 441 258 411 258" />
      <text className="chart-small strong" x="380" y="319" textAnchor="middle">
        Gleicher Preis · andere Erwartung · intelligente Gegenseite
      </text>
    </>
  );
}

function ContextualImbalance() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Die Barform ist gleich – die erwartete Orderbalance nicht
      </text>
      <rect className="chart-panel bull" x="32" y="48" width="334" height="250" rx="18" />
      <rect className="chart-panel warning" x="394" y="48" width="334" height="250" rx="18" />
      <PanelTitle x={199} title="Pullback im Bullenmarkt" tone="bull" />
      <PanelTitle x={561} title="Mitte einer Trading Range" tone="bear" />
      <polyline className="chart-price-line" points="53,249 88,211 122,168 157,115 193,78 229,112 262,153 295,126 337,89" />
      <CandleGlyph x={265} open={165} close={123} high={108} low={179} width={27} />
      <line className="breakout-line" x1="231" x2="338" y1="108" y2="108" />
      <text className="chart-region-label bull" x="274" y="205" textAnchor="middle">mehr Käufer über Hoch</text>
      <g transform="translate(55 267)">
        {[0, 1, 2, 3].map((i) => <circle key={i} className="evidence-dot active" cx={i * 23} cy="0" r="6" />)}
        <circle className="evidence-dot" cx="92" cy="0" r="6" />
        <text className="chart-small" x="113" y="5">kleines Ungleichgewicht</text>
      </g>
      <rect className="chart-range" x="422" y="100" width="278" height="151" rx="16" />
      <polyline className="chart-price-line noisy" points="430,220 466,125 501,224 536,117 570,214 606,126 642,220 693,132" />
      <CandleGlyph x={572} open={216} close={174} high={158} low={231} width={27} />
      <line className="breakout-line" x1="536" x2="610" y1="158" y2="158" />
      <text className="chart-region-label bear" x="562" y="278" textAnchor="middle">beide Seiten ähnlich stark</text>
    </>
  );
}

function SignalFamilyMap() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Viele Muster lassen sich auf Fortsetzung oder Kontrollwechsel reduzieren
      </text>
      <rect className="chart-panel bull" x="34" y="48" width="210" height="250" rx="18" />
      <rect className="chart-panel warning" x="275" y="48" width="210" height="250" rx="18" />
      <rect className="chart-panel bull" x="516" y="48" width="210" height="250" rx="18" />
      <PanelTitle x={139} title="Spike-Fortsetzung" tone="bull" />
      <PanelTitle x={380} title="Trend-Reversal" tone="bear" />
      <PanelTitle x={621} title="Pullback-Reversal" tone="bull" />
      <polyline className="chart-price-line" points="53,252 82,214 109,171 137,126 165,82 192,111 219,71" />
      <path className="chart-arrow buy" d="M187 104 C201 92 209 81 218 70" />
      <text className="chart-small" x="139" y="279" textAnchor="middle">bestehende Initiative</text>
      <polyline className="chart-price-line noisy" points="295,230 324,189 350,145 379,97 406,77 431,112 455,163 432,211 407,252" />
      <circle className="chart-focus" cx="406" cy="77" r="6" />
      <text className="chart-small" x="380" y="279" textAnchor="middle">Trendrichtung wechselt</text>
      <polyline className="chart-price-line" points="536,242 565,201 594,151 622,103 651,72 678,111 697,154 714,119" />
      <circle className="chart-focus" cx="697" cy="154" r="6" />
      <path className="chart-arrow buy" d="M699 148 C706 139 710 129 714 119" />
      <text className="chart-small" x="621" y="279" textAnchor="middle">Gegenbein endet</text>
    </>
  );
}

function TinyBar({ x, high, low, tone = 'bull' }: { x: number; high: number; low: number; tone?: 'bull' | 'bear' }) {
  const center = (high + low) / 2;
  return (
    <>
      <line className={`candle-wick ${tone}`} x1={x} x2={x} y1={high} y2={low} />
      <rect className={`candle-body ${tone}`} x={x - 8} y={center - 2} width="16" height="4" rx="2" />
    </>
  );
}

function InsideOutsideSequences() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Range-Beziehungen statt magischer Buchstabencodes
      </text>
      {[28, 174, 320, 466, 612].map((x, index) => (
        <rect key={x} className="chart-panel" x={x} y="49" width="120" height="247" rx="16" />
      ))}
      <text className="chart-panel-title" x="88" y="78" textAnchor="middle">i</text>
      <text className="chart-panel-title" x="234" y="78" textAnchor="middle">ii</text>
      <text className="chart-panel-title" x="380" y="78" textAnchor="middle">iii</text>
      <text className="chart-panel-title" x="526" y="78" textAnchor="middle">ioi</text>
      <text className="chart-panel-title" x="672" y="78" textAnchor="middle">oo</text>
      <CandleGlyph x={71} open={221} close={126} high={99} low={246} width={24} />
      <TinyBar x={104} high={133} low={211} />
      <CandleGlyph x={207} open={221} close={126} high={99} low={246} width={24} />
      <TinyBar x={235} high={133} low={211} />
      <TinyBar x={262} high={151} low={195} tone="bear" />
      <CandleGlyph x={345} open={221} close={126} high={99} low={246} width={23} />
      <TinyBar x={369} high={133} low={211} />
      <TinyBar x={393} high={150} low={195} tone="bear" />
      <TinyBar x={417} high={160} low={184} />
      <CandleGlyph x={492} open={209} close={139} high={112} low={235} width={22} />
      <TinyBar x={516} high={145} low={204} />
      <CandleGlyph x={541} open={157} close={202} high={91} low={251} width={22} />
      <TinyBar x={565} high={131} low={218} tone="bear" />
      <CandleGlyph x={641} open={201} close={143} high={111} low={232} width={22} />
      <CandleGlyph x={674} open={145} close={211} high={87} low={253} width={25} />
      <CandleGlyph x={708} open={204} close={121} high={69} low={271} width={28} />
      <text className="chart-small" x="88" y="277" textAnchor="middle">1× innen</text>
      <text className="chart-small" x="234" y="277" textAnchor="middle">2× enger</text>
      <text className="chart-small" x="380" y="277" textAnchor="middle">3× enger</text>
      <text className="chart-small" x="526" y="277" textAnchor="middle">innen–außen–innen</text>
      <text className="chart-small" x="672" y="277" textAnchor="middle">2× Expansion</text>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Richtung entsteht erst durch Kontext + Breakout + Follow-through</text>
    </>
  );
}

function ContextualFailureSetups() {
  const panels = [
    { x: 30, y: 47, title: 'Reversal scheitert', tone: 'bear' },
    { x: 390, y: 47, title: 'Fortsetzung scheitert', tone: 'bull' },
    { x: 30, y: 181, title: 'Trendbar am Rand', tone: 'bear' },
    { x: 390, y: 181, title: 'Higher Low im Trend', tone: 'bull' },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="26" textAnchor="middle">
        Nicht die Farbe, sondern die Reaktion macht das Setup
      </text>
      {panels.map((panel) => (
        <g key={panel.title} transform={`translate(${panel.x} ${panel.y})`}>
          <rect className={`chart-panel ${panel.tone === 'bull' ? 'bull' : 'warning'}`} width="340" height="119" rx="16" />
          <text className={`chart-panel-title ${panel.tone}`} x="170" y="27" textAnchor="middle">{panel.title}</text>
        </g>
      ))}
      <polyline className="chart-price-line" points="50,139 89,105 127,81 163,104 199,78 235,102 275,140 327,155" />
      <circle className="chart-focus" cx="235" cy="102" r="6" />
      <text className="chart-small" x="186" y="158" textAnchor="middle">Trapped Longs treiben Gegenmove</text>
      <polyline className="chart-price-line" points="410,78 449,104 487,137 525,151 564,132 601,154 642,118 707,83" />
      <circle className="chart-focus" cx="601" cy="154" r="6" />
      <text className="chart-small" x="560" y="158" textAnchor="middle">letzter Sell-Versuch ohne Anschluss</text>
      <rect className="chart-range" x="50" y="220" width="299" height="52" rx="11" />
      <polyline className="chart-price-line noisy" points="57,258 94,228 131,260 168,225 205,254 243,218 281,202 321,238 345,260" />
      <CandleGlyph x={281} open={255} close={204} high={192} low={266} width={22} />
      <text className="chart-small" x="190" y="286" textAnchor="middle">später Bull-Bar wird oben verkauft</text>
      <polyline className="chart-price-line" points="412,277 451,245 489,228 527,240 565,252 602,236 641,218 683,220 710,232" />
      <circle className="chart-focus" cx="565" cy="252" r="6" />
      <path className="chart-arrow buy" d="M574 247 C600 236 621 225 641 218" />
      <text className="chart-small" x="560" y="286" textAnchor="middle">Pullback hält oberhalb des alten Tiefs</text>
      <text className="chart-small strong" x="380" y="321" textAnchor="middle">Fehlschlag und Lage bewerten die Kerze neu</text>
    </>
  );
}

function BeginnerSignalFilter() {
  const stages = [
    { x: 60, title: '1 · TREND', detail: 'bullisch?', ok: true },
    { x: 270, title: '2 · SIGNAL', detail: 'Bull-Trendbar?', ok: true },
    { x: 480, title: '3 · TRADE', detail: 'Long darüber?', ok: true },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Drei gleichgerichtete Antworten – sonst vorerst auslassen
      </text>
      {stages.map((stage, index) => (
        <g key={stage.title} transform={`translate(${stage.x} 72)`}>
          <rect className="chart-panel bull" width="170" height="132" rx="20" />
          <circle className="evidence-dot active" cx="85" cy="34" r="12" />
          <text className="chart-marker-text" x="85" y="38" textAnchor="middle">✓</text>
          <text className="chart-panel-title bull" x="85" y="70" textAnchor="middle">{stage.title}</text>
          <text className="chart-small" x="85" y="96" textAnchor="middle">{stage.detail}</text>
          <text className="chart-small strong" x="85" y="116" textAnchor="middle">JA</text>
          {index < stages.length - 1 ? <path className="chart-arrow buy" d="M174 66 C185 66 194 66 205 66" /> : null}
        </g>
      ))}
      <g transform="translate(170 234)">
        <rect className="chart-panel warning" width="420" height="62" rx="18" />
        <text className="chart-panel-title bear" x="210" y="26" textAnchor="middle">STOPP-FILTER</text>
        <text className="chart-small" x="210" y="47" textAnchor="middle">Countertrend · falsche Barfarbe · Range-Mitte → AUSLASSEN</text>
      </g>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Einfachheit schützt Lernkapital und Aufmerksamkeit</text>
    </>
  );
}

function TrendSignalStrength() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Je mehr Marktträgheit gegen dich arbeitet, desto stärker muss die Beweiskette sein
      </text>
      <rect className="chart-panel bull" x="32" y="48" width="334" height="250" rx="18" />
      <rect className="chart-panel warning" x="394" y="48" width="334" height="250" rx="18" />
      <PanelTitle x={199} title="With-trend · Bar darf schwach sein" tone="bull" />
      <PanelTitle x={561} title="Countertrend · alles muss passen" tone="bear" />
      <polyline className="chart-price-line" points="53,257 88,215 122,171 156,119 191,78 225,111 259,151 293,133 337,91" />
      <CandleGlyph x={259} open={128} close={157} high={113} low={171} width={22} />
      <line className="breakout-line" x1="215" x2="315" y1="162" y2="162" />
      <text className="chart-region-label bull" x="218" y="193">Support-Konfluenz</text>
      <text className="chart-small" x="199" y="279" textAnchor="middle">Bear-Bar wird im starken Bulltrend gekauft</text>
      <polyline className="chart-price-line noisy" points="415,260 448,222 481,183 514,138 548,94 582,69 611,105 638,144 670,121 701,160" />
      <line className="trend-channel soft" x1="410" x2="618" y1="278" y2="63" />
      <path className="chart-arrow sell" d="M604 101 C623 123 640 140 655 147" />
      <circle className="chart-focus" cx="670" cy="121" r="6" />
      <CandleGlyph x={704} open={135} close={190} high={112} low={205} width={25} />
      <text className="chart-small" x="561" y="279" textAnchor="middle">Bruch → Test → starker Reversal-Bar</text>
    </>
  );
}

function StopEntryLifecycle() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Eine Order gehört zu einer konkreten These und zu einem konkreten Zeitpunkt
      </text>
      <rect className="chart-panel bull" x="28" y="48" width="224" height="250" rx="18" />
      <rect className="chart-panel" x="268" y="48" width="224" height="250" rx="18" />
      <rect className="chart-panel warning" x="508" y="48" width="224" height="250" rx="18" />
      <PanelTitle x={140} title="A · Ausgelöst" tone="bull" />
      <PanelTitle x={380} title="B · Nicht erreicht" />
      <PanelTitle x={620} title="C · Ein-Tick-Falle" tone="bear" />
      <CandleGlyph x={112} open={225} close={145} high={124} low={242} width={30} />
      <line className="breakout-line" x1="61" x2="219" y1="124" y2="124" />
      <CandleGlyph x={168} open={151} close={91} high={75} low={166} width={28} />
      <text className="chart-small" x="140" y="277" textAnchor="middle">Buy-Stop → Fill → Signal-Rolle</text>
      <CandleGlyph x={352} open={205} close={151} high={133} low={221} width={28} />
      <line className="breakout-line" x1="303" x2="457" y1="133" y2="133" />
      <CandleGlyph x={411} open={160} close={194} high={143} low={211} width={25} />
      <text className="chart-region-label bear" x="380" y="104" textAnchor="middle">Order löschen</text>
      <path className="chart-arrow sell" d="M410 118 C397 112 389 108 382 104" />
      <text className="chart-small" x="380" y="277" textAnchor="middle">neue Bars → alter Plan verfällt</text>
      <CandleGlyph x={584} open={218} close={151} high={128} low={235} width={28} />
      <line className="breakout-line" x1="535" x2="701" y1="128" y2="128" />
      <polyline className="chart-price-line noisy" points="611,149 636,121 654,139 675,181 705,218" />
      <circle className="chart-focus" cx="636" cy="121" r="6" />
      <line className="chart-guide" x1="535" x2="701" y1="104" y2="104" />
      <text className="chart-small" x="620" y="94" textAnchor="middle">zusätzlicher Filterabstand</text>
      <text className="chart-small" x="620" y="277" textAnchor="middle">1 Tick hinaus → sofort zurück</text>
    </>
  );
}

function CandleNameReduction() {
  const questions = [
    { y: 76, title: '1 · KONTROLLE', detail: 'Trendbar oder Doji?' },
    { y: 151, title: '2 · LAGE', detail: 'Trend, Rand oder Mitte?' },
    { y: 226, title: '3 · BESTÄTIGUNG', detail: 'Follow-through oder Fehlschlag?' },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Ein kompliziertes Kerzenlexikon wird zu drei handelbaren Fragen
      </text>
      <g transform="translate(38 61)">
        <rect className="chart-panel warning" width="246" height="223" rx="20" />
        <text className="chart-panel-title bear" x="123" y="31" textAnchor="middle">VIELE MUSTERNAMEN</text>
        {['Name A', 'Name B', 'Name C', 'Name D', 'Name E', 'Name F'].map((name, index) => (
          <g key={name} transform={`translate(${25 + (index % 2) * 108} ${59 + Math.floor(index / 2) * 49})`}>
            <rect className="chart-pill" width="88" height="31" rx="15" />
            <text className="chart-small" x="44" y="20" textAnchor="middle">{name}</text>
          </g>
        ))}
        <text className="chart-small" x="123" y="208" textAnchor="middle">mehr Begriffe ≠ mehr Edge</text>
      </g>
      <path className="chart-arrow buy" d="M296 172 C326 172 343 172 369 172" />
      {questions.map((question) => (
        <g key={question.title} transform={`translate(394 ${question.y})`}>
          <rect className="chart-panel bull" width="328" height="58" rx="16" />
          <text className="chart-panel-title bull" x="22" y="24">{question.title}</text>
          <text className="chart-small" x="22" y="43">{question.detail}</text>
        </g>
      ))}
      <text className="chart-small strong" x="380" y="318" textAnchor="middle">Preisbeziehung schlägt Etikett</text>
    </>
  );
}

function FormingBarClimax() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Der Bar-Schluss verändert den Einstieg – der Pause-Bar verändert die Phase
      </text>
      <rect className="chart-panel warning" x="32" y="48" width="334" height="250" rx="18" />
      <rect className="chart-panel" x="394" y="48" width="334" height="250" rx="18" />
      <PanelTitle x={199} title="A · Der Entry wandert" tone="bear" />
      <PanelTitle x={561} title="B · Pause beendet Klimax" />
      <rect className="chart-range" x="52" y="181" width="294" height="75" rx="13" />
      <polyline className="chart-price-line noisy" points="58,241 92,207 126,244 160,202 194,235 228,195 264,228 299,189 340,218" />
      <CandleGlyph x={188} open={255} close={196} high={174} low={269} width={29} />
      <CandleGlyph x={278} open={266} close={145} high={122} low={280} width={38} />
      <line className="breakout-line" x1="155" x2="323" y1="174" y2="174" />
      <text className="chart-small" x="188" y="287" textAnchor="middle">vor Schluss</text>
      <text className="chart-small" x="278" y="287" textAnchor="middle">Bar-Schluss</text>
      <path className="chart-arrow sell" d="M211 221 C236 191 253 162 269 134" />
      <text className="chart-region-label bear" x="278" y="108" textAnchor="middle">Entry jetzt am Flag-Hoch</text>
      <CandleGlyph x={452} open={269} close={221} high={204} low={282} width={25} />
      <CandleGlyph x={500} open={226} close={169} high={152} low={241} width={27} />
      <CandleGlyph x={548} open={175} close={112} high={94} low={190} width={29} />
      <TinyBar x={601} high={102} low={164} />
      <CandleGlyph x={651} open={133} close={162} high={118} low={179} width={22} />
      <rect className="chart-zone" x="423" y="84" width="151" height="205" rx="14" />
      <circle className="chart-focus" cx="601" cy="133" r="7" />
      <text className="chart-region-label bull" x="620" y="205">Pause-Bar</text>
      <text className="chart-region-label gold" x="499" y="286" textAnchor="middle">3-Bar-Klimax</text>
      <text className="chart-small strong" x="380" y="319" textAnchor="middle">Pause beendet die Klimaxphase – nicht automatisch den Trend</text>
    </>
  );
}

function SignalEntryCase() {
  const bars = [
    { x: 60, open: 87, close: 117, high: 72, low: 131, width: 16 },
    { x: 91, open: 111, close: 148, high: 98, low: 162, width: 18 },
    { x: 122, open: 142, close: 180, high: 129, low: 194, width: 18 },
    { x: 153, open: 176, close: 224, high: 163, low: 238, width: 20 },
    { x: 184, open: 219, close: 190, high: 175, low: 234, width: 18 },
    { x: 215, open: 195, close: 214, high: 180, low: 229, width: 17 },
    { x: 246, open: 210, close: 197, high: 184, low: 224, width: 16, label: '2' },
    { x: 285, open: 202, close: 226, high: 189, low: 241, width: 17 },
    { x: 324, open: 221, close: 249, high: 207, low: 264, width: 18 },
    { x: 367, open: 245, close: 174, high: 156, low: 260, width: 28, label: '3' },
    { x: 411, open: 179, close: 143, high: 127, low: 194, width: 23 },
    { x: 455, open: 149, close: 117, high: 101, low: 164, width: 23 },
    { x: 500, open: 122, close: 145, high: 106, low: 161, width: 19, label: '4' },
    { x: 544, open: 139, close: 118, high: 103, low: 154, width: 18 },
    { x: 588, open: 124, close: 143, high: 108, low: 158, width: 18, label: '5' },
    { x: 632, open: 138, close: 106, high: 90, low: 153, width: 21 },
    { x: 676, open: 112, close: 78, high: 62, low: 127, width: 22 },
  ];
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Trendlinienbruch → zweites Verkaufsbein → Reversal → Entry → Follow-through
      </text>
      <path className="trend-channel soft" d="M44 58 L339 224" />
      <path className="chart-guide" d="M46 101 C193 113 333 151 474 184 C573 204 650 178 716 137" />
      <line className="breakout-line" x1="43" x2="714" y1="238" y2="238" />
      <text className="chart-small" x="48" y="230">Vortagestief</text>
      {bars.map((bar, index) => <CandleGlyph key={index} {...bar} />)}
      <rect className="chart-zone" x="344" y="151" width="48" height="116" rx="11" />
      <line className="breakout-line" x1="342" x2="436" y1="156" y2="156" />
      <text className="chart-region-label bull" x="367" y="294" textAnchor="middle">Signal-Bar nach Fill</text>
      <text className="chart-region-label bull" x="411" y="92" textAnchor="middle">Entry-Bar</text>
      <text className="chart-region-label bull" x="455" y="76" textAnchor="middle">Follow-through</text>
      <path className="chart-arrow buy" d="M377 164 C390 154 399 148 409 143" />
      <rect className="chart-zone" x="479" y="101" width="82" height="68" rx="10" />
      <rect className="chart-zone" x="567" y="102" width="45" height="65" rx="10" />
      <text className="chart-small" x="518" y="193" textAnchor="middle">ii → Einstieg 4</text>
      <text className="chart-small" x="602" y="211" textAnchor="middle">Pullback → Einstieg 5</text>
      <text className="chart-small strong" x="380" y="319" textAnchor="middle">Barrollen entstehen aus Ausführung und Folgebewegung</text>
    </>
  );
}

export function ChapterFourChart({ scenario }: { scenario: ChartScenarioId }) {
  let chart: ReactNode = null;

  if (scenario === 'setup-direction') chart = <SetupDirection />;
  if (scenario === 'bar-role-lifecycle') chart = <BarRoleLifecycle />;
  if (scenario === 'one-bar-order-map') chart = <OneBarOrderMap />;
  if (scenario === 'contextual-imbalance') chart = <ContextualImbalance />;
  if (scenario === 'signal-family-map') chart = <SignalFamilyMap />;
  if (scenario === 'inside-outside-sequences') chart = <InsideOutsideSequences />;
  if (scenario === 'contextual-failure-setups') chart = <ContextualFailureSetups />;
  if (scenario === 'beginner-signal-filter') chart = <BeginnerSignalFilter />;
  if (scenario === 'trend-signal-strength') chart = <TrendSignalStrength />;
  if (scenario === 'stop-entry-lifecycle') chart = <StopEntryLifecycle />;
  if (scenario === 'candle-name-reduction') chart = <CandleNameReduction />;
  if (scenario === 'forming-bar-climax') chart = <FormingBarClimax />;
  if (scenario === 'signal-entry-case') chart = <SignalEntryCase />;

  return chart ? <g className="chapter-four-chart">{chart}</g> : null;
}
