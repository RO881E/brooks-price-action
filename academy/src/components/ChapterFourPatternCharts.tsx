import type { ReactNode } from 'react';
import type { ChartScenarioId } from '../content/types';

interface CandleProps {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  width?: number;
  label?: string;
}

function Candle({ x, open, close, high, low, width = 20, label }: CandleProps) {
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

function Panel({ x, title, tone = 'bull' }: { x: number; title: string; tone?: 'bull' | 'bear' }) {
  return (
    <g>
      <rect
        className={tone === 'bull' ? 'chart-panel bull' : 'chart-panel warning'}
        x={x}
        y="48"
        width="220"
        height="248"
        rx="18"
      />
      <text
        className={`chart-panel-title ${tone}`}
        x={x + 110}
        y="77"
        textAnchor="middle"
      >
        {title}
      </text>
    </g>
  );
}

function ContinuationSetupMap() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Fortsetzung entsteht aus Initiative, kurzer Pause und erneuter Akzeptanz
      </text>
      <Panel x={30} title="Spike-Pause" />
      <Panel x={270} title="Kanal-Pullback" />
      <Panel x={510} title="Breakout + Test" />
      <polyline className="chart-price-line" points="51,253 83,219 114,179 145,129 176,86 201,119 225,101" />
      <rect className="chart-zone" x="184" y="94" width="47" height="39" rx="9" />
      <path className="chart-arrow buy" d="M202 122 C214 114 220 107 226 101" />
      <text className="chart-small" x="140" y="278" textAnchor="middle">jede kleine Pause kann reichen</text>
      <path className="trend-channel soft" d="M289 267 L468 83" />
      <polyline className="chart-price-line" points="292,260 326,224 358,183 390,139 420,104 448,137 470,169 486,143" />
      <circle className="chart-focus" cx="470" cy="169" r="6" />
      <text className="chart-small" x="380" y="278" textAnchor="middle">kleiner Rücklauf im Kanal</text>
      <rect className="chart-range" x="531" y="171" width="180" height="72" rx="13" />
      <polyline className="chart-price-line" points="533,231 562,211 592,184 620,142 648,95 675,120 697,153 716,119" />
      <line className="breakout-line" x1="527" x2="718" y1="171" y2="171" />
      <circle className="chart-focus" cx="697" cy="153" r="6" />
      <text className="chart-small" x="620" y="278" textAnchor="middle">Ausbruch hält beim Rücktest</text>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Pause ist nicht Umkehr · Follow-through bleibt Pflicht</text>
    </>
  );
}

function OneBarReversalSetup() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Ein einzelner Bar kann Ablehnung zeigen – der Einstieg bestätigt sie erst
      </text>
      <rect className="chart-panel bull" x="32" y="48" width="334" height="248" rx="18" />
      <rect className="chart-panel warning" x="394" y="48" width="334" height="248" rx="18" />
      <text className="chart-panel-title bull" x="199" y="77" textAnchor="middle">Bullisches Reversal</text>
      <text className="chart-panel-title bear" x="561" y="77" textAnchor="middle">Bearishes Reversal</text>
      <polyline className="chart-price-line noisy" points="53,104 91,135 130,171 168,207 207,242" />
      <Candle x={258} open={226} close={139} high={119} low={267} width={36} />
      <line className="breakout-line" x1="220" x2="334" y1="119" y2="119" />
      <path className="chart-arrow buy" d="M278 130 C299 119 314 111 329 100" />
      <text className="chart-small" x="199" y="278" textAnchor="middle">langer unterer Tail · Schluss weit oben</text>
      <polyline className="chart-price-line" points="415,241 454,205 492,168 531,128 568,91" />
      <Candle x={621} open={118} close={210} high={76} low={232} width={36} />
      <line className="breakout-line" x1="585" x2="700" y1="232" y2="232" />
      <path className="chart-arrow sell" d="M640 219 C661 231 676 239 691 248" />
      <text className="chart-small" x="561" y="278" textAnchor="middle">langer oberer Tail · Schluss weit unten</text>
    </>
  );
}

function TwoBarReversalSetup() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Der zweite Bar muss die Kontrolle des ersten sichtbar zurücknehmen
      </text>
      <rect className="chart-panel bull" x="32" y="48" width="334" height="248" rx="18" />
      <rect className="chart-panel warning" x="394" y="48" width="334" height="248" rx="18" />
      <text className="chart-panel-title bull" x="199" y="77" textAnchor="middle">Bear → Bull</text>
      <text className="chart-panel-title bear" x="561" y="77" textAnchor="middle">Bull → Bear</text>
      <Candle x={142} open={111} close={220} high={94} low={243} width={38} />
      <Candle x={230} open={222} close={116} high={96} low={248} width={39} />
      <line className="breakout-line" x1="99" x2="319" y1="96" y2="96" />
      <path className="chart-arrow buy" d="M253 111 C276 99 294 89 312 78" />
      <text className="chart-small" x="199" y="278" textAnchor="middle">Bar 2 löscht fast den gesamten Verlust</text>
      <Candle x={504} open={219} close={112} high={94} low={242} width={38} />
      <Candle x={592} open={115} close={221} high={90} low={247} width={39} />
      <line className="breakout-line" x1="461" x2="681" y1="247" y2="247" />
      <path className="chart-arrow sell" d="M614 231 C637 243 655 253 673 264" />
      <text className="chart-small" x="561" y="278" textAnchor="middle">Bar 2 löscht fast den gesamten Gewinn</text>
    </>
  );
}

function ThreeBarReversalSetup() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Drei Bars zeigen Abbremsen, Übergang und Gegeninitiative
      </text>
      <rect className="chart-panel bull" x="32" y="48" width="334" height="248" rx="18" />
      <rect className="chart-panel warning" x="394" y="48" width="334" height="248" rx="18" />
      <text className="chart-panel-title bull" x="199" y="77" textAnchor="middle">Bullische Folge</text>
      <text className="chart-panel-title bear" x="561" y="77" textAnchor="middle">Bearishe Folge</text>
      <Candle x={122} open={105} close={199} high={90} low={220} width={34} />
      <Candle x={199} open={193} close={202} high={169} low={231} width={27} />
      <Candle x={276} open={205} close={112} high={94} low={224} width={35} />
      <path className="chart-arrow buy" d="M286 98 C305 88 318 80 331 70" />
      <text className="chart-small" x="199" y="278" textAnchor="middle">Druck ↓ · Pause · bullische Übernahme</text>
      <Candle x={484} open={218} close={122} high={101} low={235} width={34} />
      <Candle x={561} open={128} close={119} high={91} low={151} width={27} />
      <Candle x={638} open={116} close={210} high={95} low={232} width={35} />
      <path className="chart-arrow sell" d="M648 220 C667 231 680 240 693 251" />
      <text className="chart-small" x="561" y="278" textAnchor="middle">Druck ↑ · Pause · bearishe Übernahme</text>
    </>
  );
}

function SmallInsideContext() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Derselbe kleine Inside-Bar bekommt durch seine Lage eine andere Funktion
      </text>
      <Panel x={30} title="Am oberen Rand" tone="bear" />
      <Panel x={270} title="In der Mitte" tone="bear" />
      <Panel x={510} title="Am unteren Rand" />
      <Candle x={139} open={232} close={112} high={88} low={258} width={43} />
      <Candle x={184} open={128} close={143} high={108} low={167} width={22} />
      <line className="breakout-line" x1="64" x2="225" y1="108" y2="108" />
      <text className="chart-small" x="140" y="278" textAnchor="middle">möglicher Fade oder Pause</text>
      <Candle x={379} open={232} close={112} high={88} low={258} width={43} />
      <Candle x={424} open={173} close={158} high={139} low={194} width={22} />
      <text className="chart-small" x="380" y="278" textAnchor="middle">wenig Standortvorteil</text>
      <Candle x={619} open={232} close={112} high={88} low={258} width={43} />
      <Candle x={664} open={220} close={205} high={183} low={242} width={22} />
      <line className="breakout-line" x1="544" x2="705" y1="242" y2="242" />
      <text className="chart-small" x="620" y="278" textAnchor="middle">möglicher Long-Test</text>
    </>
  );
}

function IiIiiCompression() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Jede weitere Inside-Stufe verkleinert die sichtbare Auktion
      </text>
      <rect className="chart-panel bull" x="32" y="48" width="334" height="248" rx="18" />
      <rect className="chart-panel bull" x="394" y="48" width="334" height="248" rx="18" />
      <text className="chart-panel-title bull" x="199" y="77" textAnchor="middle">ii · zweifach innen</text>
      <text className="chart-panel-title bull" x="561" y="77" textAnchor="middle">iii · dreifach innen</text>
      <Candle x={131} open={229} close={114} high={88} low={257} width={39} />
      <Candle x={199} open={199} close={139} high={119} low={224} width={31} />
      <Candle x={267} open={181} close={151} high={139} low={202} width={24} />
      <line className="breakout-line" x1="236" x2="317" y1="139" y2="139" />
      <line className="breakout-line" x1="236" x2="317" y1="202" y2="202" />
      <text className="chart-small" x="199" y="278" textAnchor="middle">zwei Grenzenpaare verschachtelt</text>
      <Candle x={470} open={229} close={114} high={88} low={257} width={39} />
      <Candle x={527} open={199} close={139} high={119} low={224} width={31} />
      <Candle x={584} open={181} close={151} high={139} low={202} width={24} />
      <Candle x={641} open={168} close={157} high={150} low={185} width={18} />
      <line className="breakout-line" x1="616" x2="686" y1="150" y2="150" />
      <line className="breakout-line" x1="616" x2="686" y1="185" y2="185" />
      <text className="chart-small" x="561" y="278" textAnchor="middle">noch enger · Richtung weiterhin offen</text>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Kompression erhöht Breakout-Potenzial, nicht Breakout-Sicherheit</text>
    </>
  );
}

function IoiSequence() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        ioi wechselt von Einengung zu Expansion und zurück zur Einengung
      </text>
      <rect className="chart-panel bull" x="44" y="48" width="440" height="248" rx="18" />
      <rect className="chart-panel warning" x="510" y="48" width="206" height="248" rx="18" />
      <text className="chart-panel-title bull" x="264" y="77" textAnchor="middle">Die drei Beziehungen</text>
      <text className="chart-panel-title bear" x="613" y="77" textAnchor="middle">Was offen bleibt</text>
      <Candle x={118} open={220} close={121} high={91} low={249} width={36} />
      <Candle x={203} open={190} close={151} high={126} low={219} width={27} label="i" />
      <Candle x={288} open={143} close={207} high={70} low={265} width={40} label="o" />
      <Candle x={373} open={191} close={157} high={126} low={221} width={27} label="i" />
      <path className="chart-arrow buy" d="M397 149 C423 134 444 119 465 101" />
      <path className="chart-arrow sell" d="M397 214 C423 229 444 244 465 262" />
      <text className="chart-small" x="264" y="281" textAnchor="middle">innen → außen → innen</text>
      <text className="chart-small strong" x="613" y="123" textAnchor="middle">Richtung?</text>
      <text className="chart-small" x="613" y="151" textAnchor="middle">Kontext entscheidet</text>
      <text className="chart-small strong" x="613" y="190" textAnchor="middle">Qualität?</text>
      <text className="chart-small" x="613" y="218" textAnchor="middle">Follow-through entscheidet</text>
      <text className="chart-small" x="613" y="265" textAnchor="middle">Stops liegen auf beiden Seiten</text>
    </>
  );
}

function OutsideOoSequence() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Outside-Bars erweitern beide Grenzen und erhöhen das Ausführungsrisiko
      </text>
      <rect className="chart-panel warning" x="32" y="48" width="334" height="248" rx="18" />
      <rect className="chart-panel warning" x="394" y="48" width="334" height="248" rx="18" />
      <text className="chart-panel-title bear" x="199" y="77" textAnchor="middle">o · eine Expansion</text>
      <text className="chart-panel-title bear" x="561" y="77" textAnchor="middle">oo · zweite Expansion</text>
      <Candle x={145} open={196} close={142} high={116} low={221} width={28} />
      <Candle x={230} open={133} close={211} high={79} low={255} width={43} />
      <line className="chart-guide" x1="108" x2="279" y1="116" y2="116" />
      <line className="chart-guide" x1="108" x2="279" y1="221" y2="221" />
      <text className="chart-small" x="199" y="278" textAnchor="middle">neues Hoch und neues Tief</text>
      <Candle x={475} open={196} close={142} high={116} low={221} width={28} />
      <Candle x={556} open={133} close={211} high={79} low={255} width={43} />
      <Candle x={649} open={215} close={118} high={57} low={275} width={52} />
      <text className="chart-small" x="561" y="278" textAnchor="middle">größere Range · beide Seiten gefangen</text>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Mehr Bewegung bedeutet nicht automatisch mehr Richtung</text>
    </>
  );
}

function DoubleTestSetup() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Doppelte Tests prüfen, ob derselbe Bereich erneut verteidigt wird
      </text>
      <rect className="chart-panel warning" x="32" y="48" width="334" height="248" rx="18" />
      <rect className="chart-panel bull" x="394" y="48" width="334" height="248" rx="18" />
      <text className="chart-panel-title bear" x="199" y="77" textAnchor="middle">Doppeltop</text>
      <text className="chart-panel-title bull" x="561" y="77" textAnchor="middle">Doppeltief</text>
      <line className="breakout-line" x1="61" x2="337" y1="111" y2="111" />
      <polyline className="chart-price-line noisy" points="55,249 95,205 137,155 178,108 217,151 258,111 300,161 340,215" />
      <circle className="chart-focus" cx="178" cy="108" r="6" />
      <circle className="chart-focus" cx="258" cy="111" r="6" />
      <text className="chart-small" x="199" y="278" textAnchor="middle">zweiter Hochtest wird zurückgewiesen</text>
      <line className="breakout-line" x1="423" x2="699" y1="238" y2="238" />
      <polyline className="chart-price-line" points="417,91 458,136 500,191 540,240 582,194 623,237 664,187 704,127" />
      <circle className="chart-focus" cx="540" cy="240" r="6" />
      <circle className="chart-focus" cx="623" cy="237" r="6" />
      <text className="chart-small" x="561" y="278" textAnchor="middle">zweiter Tieftest wird gekauft</text>
    </>
  );
}

function FailedContinuationSetup() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Ein reifer Trend kann am nächsten Fortsetzungsversuch seine Effizienz verlieren
      </text>
      <rect className="chart-panel warning" x="32" y="48" width="334" height="248" rx="18" />
      <rect className="chart-panel bull" x="394" y="48" width="334" height="248" rx="18" />
      <text className="chart-panel-title bear" x="199" y="77" textAnchor="middle">Bull-Breakout scheitert</text>
      <text className="chart-panel-title bull" x="561" y="77" textAnchor="middle">Bear-Breakout scheitert</text>
      <polyline className="chart-price-line" points="52,260 89,219 126,174 164,126 201,82 238,119 273,91 304,70 329,102 341,146" />
      <line className="breakout-line" x1="245" x2="344" y1="91" y2="91" />
      <circle className="chart-focus" cx="304" cy="70" r="6" />
      <path className="chart-arrow sell" d="M316 83 C329 102 336 122 341 146" />
      <text className="chart-small" x="199" y="278" textAnchor="middle">neues Hoch ohne Anschluss</text>
      <polyline className="chart-price-line noisy" points="414,82 451,120 488,163 526,211 563,255 600,219 635,247 666,270 691,238 706,198" />
      <line className="breakout-line" x1="605" x2="710" y1="247" y2="247" />
      <circle className="chart-focus" cx="666" cy="270" r="6" />
      <path className="chart-arrow buy" d="M678 258 C691 239 699 218 706 198" />
      <text className="chart-small" x="561" y="278" textAnchor="middle">neues Tief ohne Anschluss</text>
      <text className="chart-small strong" x="380" y="320" textAnchor="middle">Fehlschlag allein reicht nicht: Reife und Lage müssen passen</text>
    </>
  );
}

function ShavedStructuralSetups() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Schlusskontrolle, Kanalrücklauf und Swing-Struktur liefern verschiedene Setups
      </text>
      <Panel x={30} title="Shaved Bar" />
      <Panel x={270} title="Kanal-Limit" />
      <Panel x={510} title="Higher Low" />
      <Candle x={111} open={229} close={101} high={101} low={251} width={40} />
      <Candle x={174} open={117} close={238} high={92} low={238} width={40} />
      <text className="chart-small" x="140" y="278" textAnchor="middle">kein Tail am kontrollierten Ende</text>
      <path className="trend-channel soft" d="M290 258 L477 84" />
      <polyline className="chart-price-line" points="292,252 330,214 367,171 404,126 441,91 469,124 485,158" />
      <circle className="chart-focus" cx="485" cy="158" r="6" />
      <text className="chart-small" x="380" y="278" textAnchor="middle">Limit-Kauf im Aufwärtskanal</text>
      <polyline className="chart-price-line" points="530,250 566,207 602,155 638,96 672,137 695,181 716,143" />
      <line className="chart-guide" x1="603" x2="716" y1="207" y2="207" />
      <circle className="chart-focus" cx="695" cy="181" r="6" />
      <path className="chart-arrow buy" d="M699 176 C706 163 711 152 716 143" />
      <text className="chart-small" x="620" y="278" textAnchor="middle">Pullback hält über altem Swing-Tief</text>
    </>
  );
}

function Figure41Followthrough() {
  return (
    <>
      <text className="chart-kicker" x="380" y="27" textAnchor="middle">
        Nach Bar 3 entscheidet die Folge: Fill, Anschluss, ii und Breakout-Pullback
      </text>
      <line className="chart-guide" x1="49" x2="712" y1="257" y2="257" />
      <Candle x={91} open={225} close={158} high={139} low={244} width={28} label="3" />
      <line className="breakout-line" x1="52" x2="166" y1="139" y2="139" />
      <Candle x={173} open={163} close={124} high={108} low={179} width={25} />
      <Candle x={255} open={130} close={91} high={74} low={147} width={28} />
      <Candle x={337} open={98} close={119} high={82} low={138} width={20} label="4" />
      <Candle x={382} open={114} close={99} high={87} low={129} width={18} />
      <Candle x={464} open={105} close={127} high={91} low={143} width={20} label="5" />
      <Candle x={509} open={124} close={102} high={89} low={139} width={19} />
      <Candle x={591} open={108} close={75} high={59} low={124} width={27} />
      <Candle x={673} open={81} close={51} high={36} low={97} width={27} />
      <rect className="chart-panel bull" x="119" y="195" width="109" height="51" rx="13" />
      <text className="chart-small strong" x="173" y="215" textAnchor="middle">ENTRY</text>
      <text className="chart-small" x="173" y="233" textAnchor="middle">Buy-Stop gefüllt</text>
      <rect className="chart-panel bull" x="201" y="153" width="109" height="51" rx="13" />
      <text className="chart-small strong" x="255" y="173" textAnchor="middle">FOLLOW</text>
      <text className="chart-small" x="255" y="191" textAnchor="middle">Bull-Bar trägt weiter</text>
      <rect className="chart-zone" x="319" y="73" width="83" height="76" rx="12" />
      <text className="chart-small" x="360" y="164" textAnchor="middle">ii → Bar 4</text>
      <rect className="chart-zone" x="446" y="82" width="83" height="72" rx="12" />
      <text className="chart-small" x="487" y="169" textAnchor="middle">Pullback → Bar 5</text>
      <path className="chart-arrow buy" d="M521 97 C545 84 566 73 585 63" />
      <text className="chart-small strong" x="380" y="294" textAnchor="middle">Signal ist nur der Start · Folge-Setups bauen den zweiten Aufwärtsschub</text>
      <text className="chart-small" x="380" y="316" textAnchor="middle">Die Barrollen beschreiben die Ausführung – nicht bloß die Kerzenform</text>
    </>
  );
}

export function ChapterFourPatternChart({ scenario }: { scenario: ChartScenarioId }) {
  let chart: ReactNode = null;

  if (scenario === 'continuation-setup-map') chart = <ContinuationSetupMap />;
  if (scenario === 'one-bar-reversal-setup') chart = <OneBarReversalSetup />;
  if (scenario === 'two-bar-reversal-setup') chart = <TwoBarReversalSetup />;
  if (scenario === 'three-bar-reversal-setup') chart = <ThreeBarReversalSetup />;
  if (scenario === 'small-inside-context') chart = <SmallInsideContext />;
  if (scenario === 'ii-iii-compression') chart = <IiIiiCompression />;
  if (scenario === 'ioi-sequence') chart = <IoiSequence />;
  if (scenario === 'outside-oo-sequence') chart = <OutsideOoSequence />;
  if (scenario === 'double-test-setup') chart = <DoubleTestSetup />;
  if (scenario === 'failed-continuation-setup') chart = <FailedContinuationSetup />;
  if (scenario === 'shaved-structural-setups') chart = <ShavedStructuralSetups />;
  if (scenario === 'figure-41-followthrough') chart = <Figure41Followthrough />;

  return chart ? <g className="chapter-four-chart">{chart}</g> : null;
}
