import type { ChartScenarioId, ChapterTwelveScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
type Panel = {
  title: string;
  note: string;
  bars: readonly Bar[];
  focus?: readonly number[];
  level?: readonly [price: number, label: string];
};
type Definition = {
  heading: string;
  panels: readonly [Panel, Panel];
  footer: string;
  description: string;
};

// Frei erfundene relative Preise. Keine Digitalisierung oder Nachzeichnung der
// historischen Kurse; die Labels beschreiben nur Lernlogik.
function bars(closes: readonly number[]): Bar[] {
  return closes.map((close, index) => {
    const open = index === 0 ? close + 2 : closes[index - 1];
    return [open, Math.max(open, close) + 3, Math.min(open, close) - 3, close];
  });
}

const panel = (title: string, note: string, closes: readonly number[],
  options: Omit<Panel, 'title' | 'note' | 'bars'> = {}): Panel =>
  ({ title, note, bars: bars(closes), ...options });
const custom = (title: string, note: string, values: readonly Bar[],
  options: Omit<Panel, 'title' | 'note' | 'bars'> = {}): Panel =>
  ({ title, note, bars: values, ...options });
const pair = (heading: string, left: Panel, right: Panel, footer: string,
  description: string): Definition => ({ heading, panels: [left, right], footer, description });

export const chapterTwelveCharts: Record<ChapterTwelveScenarioId, Definition> = {
  "c12-current-bars": pair("Alte Idee · neue Bars",
    panel("Kaufsignal","zunächst plausibel",[35, 45, 41, 53, 62],{"focus": [4]}),
    panel("Neue Reaktion","Verkäufer drücken",[35, 45, 41, 53, 62, 49, 38],{"focus": [5, 6]}),
    "Aktuelles Bild statt altem Namen", "Eigene schematische Gegenüberstellung: links Kaufsignal (zunächst plausibel), rechts Neue Reaktion (Verkäufer drücken). Aktuelles Bild statt altem Namen."),
  "c12-expand-or-reverse": pair("Erweiterung oder neue Richtung?",
    panel("Größere Flagge","weitere Tests",[30, 46, 63, 55, 61, 51, 59, 68],{"focus": [3, 5]}),
    panel("Richtungswechsel","Ausbruch zurückgenommen",[30, 46, 63, 55, 68, 49, 37],{"focus": [4, 5]}),
    "Neue Bars können die Rolle ändern", "Eigene schematische Gegenüberstellung: links Größere Flagge (weitere Tests), rechts Richtungswechsel (Ausbruch zurückgenommen). Neue Bars können die Rolle ändern."),
  "c12-trapped-orders": pair("Auslösung und schnelle Rücknahme",
    panel("Long ausgelöst","über der Zone",[35, 42, 39, 53, 61],{"focus": [3], "level": [50, "Ausbruchszone"]}),
    panel("Longs unter Druck","Verlustausstiege möglich",[35, 42, 39, 53, 61, 43, 31],{"focus": [5, 6], "level": [50, "Ausbruchszone"]}),
    "Gegensignal braucht eigene Bestätigung", "Eigene schematische Gegenüberstellung: links Long ausgelöst (über der Zone), rechts Longs unter Druck (Verlustausstiege möglich). Gegensignal braucht eigene Bestätigung."),
  "c12-reset-context": pair("Nach Balance eine neue Gelegenheit",
    panel("Alte Rücknahme","erste Idee beendet",[40, 53, 61, 45, 42],{"focus": [3]}),
    panel("Neue Balance","eigene Grenzen",[45, 49, 44, 48, 43, 47, 44, 59],{"focus": [2, 4, 7]}),
    "Teilnehmergeschichte nicht festschreiben", "Eigene schematische Gegenüberstellung: links Alte Rücknahme (erste Idee beendet), rechts Neue Balance (eigene Grenzen). Teilnehmergeschichte nicht festschreiben."),
  "c12-scalp-vs-swing": pair("Kleines Ziel · längere Halteidee",
    panel("Ziel erreicht","kurzer Anschluss",[35, 42, 49, 58, 65],{"focus": [4], "level": [62, "kleines Ziel"]}),
    panel("Späterer Verlauf","größere Idee kippt",[35, 42, 49, 58, 65, 53, 43],{"focus": [5, 6], "level": [62, "kleines Ziel"]}),
    "Erfolgskriterien getrennt festlegen", "Eigene schematische Gegenüberstellung: links Ziel erreicht (kurzer Anschluss), rechts Späterer Verlauf (größere Idee kippt). Erfolgskriterien getrennt festlegen."),
  "c12-expanding-triangle": pair("Fünf Beine können sieben werden",
    panel("Fünf Beine","Extreme weiten sich aus",[50, 64, 43, 72, 35, 80],{"focus": [1, 3, 5]}),
    panel("Zwei weitere Beine","größere Struktur",[50, 64, 43, 72, 35, 80, 27, 88],{"focus": [5, 6, 7]}),
    "Beinzahl beschreibt, garantiert nicht", "Eigene schematische Gegenüberstellung: links Fünf Beine (Extreme weiten sich aus), rechts Zwei weitere Beine (größere Struktur). Beinzahl beschreibt, garantiert nicht."),
  "c12-micro-line": pair("Kleiner Gegenbruch · erneute Fortsetzung",
    panel("Mikro-Linienbruch","erste Störung",[30, 40, 50, 60, 53],{"focus": [4]}),
    panel("Rücknahme und Test","Trendseite hält wieder",[30, 40, 50, 60, 53, 66, 61, 72],{"focus": [5, 6, 7]}),
    "Reaktion nach dem Bruch lesen", "Eigene schematische Gegenüberstellung: links Mikro-Linienbruch (erste Störung), rechts Rücknahme und Test (Trendseite hält wieder). Reaktion nach dem Bruch lesen."),
  "c12-final-flag": pair("Umkehridee bleibt aus",
    panel("Späte Bärenflagge","Käufer versuchen es",[82, 68, 55, 48, 53],{"focus": [3, 4]}),
    panel("Fortsetzung und Test","Verkäufer kehren zurück",[82, 68, 55, 48, 53, 38, 45, 32],{"focus": [5, 6, 7]}),
    "Ausbleibende Umkehr verändert die Rolle", "Eigene schematische Gegenüberstellung: links Späte Bärenflagge (Käufer versuchen es), rechts Fortsetzung und Test (Verkäufer kehren zurück). Ausbleibende Umkehr verändert die Rolle."),
  "c12-channel-range": pair("Trend wird Balance",
    panel("Spike und Kanal","bullische Phase",[25, 43, 62, 58, 70, 66, 77],{"focus": [1, 2]}),
    panel("Range mit Tiefpaar","Fortsetzung prüfen",[77, 65, 71, 62, 72, 64, 74, 84],{"focus": [3, 5, 7]}),
    "Neue Balance braucht neue Grenzen", "Eigene schematische Gegenüberstellung: links Spike und Kanal (bullische Phase), rechts Range mit Tiefpaar (Fortsetzung prüfen). Neue Balance braucht neue Grenzen."),
  "c12-opening-flags": pair("Frühe Hoch- und Tiefversuche",
    panel("Doppeltop","Verkaufsversuch",[34, 63, 45, 65, 47],{"focus": [1, 3]}),
    panel("Doppeltief","Käufer verteidigen",[34, 63, 45, 65, 47, 67, 78],{"focus": [2, 4, 5]}),
    "Zwei Gelegenheiten, zwei Risikopläne", "Eigene schematische Gegenüberstellung: links Doppeltop (Verkaufsversuch), rechts Doppeltief (Käufer verteidigen). Zwei Gelegenheiten, zwei Risikopläne."),
  "c12-121-wedge-top": pair("Früher Low 2 · größeres Keiltop",
    panel("Erster Versuch","Short setzt sich nicht durch",[35, 51, 44, 64, 57, 69],{"focus": [4]}),
    panel("Dritter Hochschub","neues Verkaufssetup",[35, 51, 44, 64, 57, 76, 63, 49],{"focus": [5, 6]}),
    "Neue Hochstruktur statt alter Order", "Eigene schematische Gegenüberstellung: links Erster Versuch (Short setzt sich nicht durch), rechts Dritter Hochschub (neues Verkaufssetup). Neue Hochstruktur statt alter Order."),
  "c12-121-complex-low2": pair("Low 2 wächst weiter",
    panel("Kleine Flagge","erste Reaktion",[40, 59, 53, 63, 56],{"focus": [2, 4]}),
    custom("Weitere Zurückweisung","neue Zwei-Bar-Umkehr",[[40, 43, 37, 40], [40, 62, 37, 59], [59, 62, 49, 53], [53, 66, 50, 63], [63, 70, 59, 68], [68, 71, 50, 54], [54, 57, 42, 45]],{"focus": [4, 5, 6]}),
    "Aktueller Trigger zählt", "Eigene schematische Gegenüberstellung: links Kleine Flagge (erste Reaktion), rechts Weitere Zurückweisung (neue Zwei-Bar-Umkehr). Aktueller Trigger zählt."),
  "c12-121-wedge-bottom": pair("High 2 wird größerer Tiefaufbau",
    panel("Früher Kaufversuch","noch schwacher Anschluss",[80, 65, 53, 60, 49, 57],{"focus": [3, 5]}),
    panel("Dritter Abwärtsschub","Keil und Kanalende",[80, 65, 53, 60, 49, 57, 43, 62, 72],{"focus": [6, 7]}),
    "Käuferreaktion statt Zahl allein", "Eigene schematische Gegenüberstellung: links Früher Kaufversuch (noch schwacher Anschluss), rechts Dritter Abwärtsschub (Keil und Kanalende). Käuferreaktion statt Zahl allein."),
  "c12-121-failed-low2": pair("Low 2 gegen Bullenimpuls",
    panel("Kräftiger Spike","Short fragil",[30, 49, 70, 64, 69, 61],{"focus": [1, 2, 5]}),
    panel("Fehlschlag des Shorts","Käufer kommen zurück",[30, 49, 70, 64, 69, 61, 74, 83],{"focus": [5, 6, 7]}),
    "Momentum überstimmt formale Zählung", "Eigene schematische Gegenüberstellung: links Kräftiger Spike (Short fragil), rechts Fehlschlag des Shorts (Käufer kommen zurück). Momentum überstimmt formale Zählung."),
  "c12-121-channel-top": pair("Nach dem Gegeneinstieg neue Phase",
    panel("Bullischer Kanal","drei Hochschübe",[31, 51, 63, 58, 72, 65, 81],{"focus": [2, 4, 6]}),
    panel("Neue Hochreaktion","Umkehr erst prüfen",[31, 51, 63, 58, 72, 65, 81, 68, 58],{"focus": [6, 7]}),
    "Das neue Hoch braucht eigene Belege", "Eigene schematische Gegenüberstellung: links Bullischer Kanal (drei Hochschübe), rechts Neue Hochreaktion (Umkehr erst prüfen). Das neue Hoch braucht eigene Belege."),
  "c12-121-failed-high2": pair("High 2 am Hoch scheitert",
    panel("Kauf ausgelöst","noch keine Fortsetzung",[42, 59, 52, 66, 59, 75],{"focus": [5]}),
    panel("Entry zurückgenommen","neuer Short-Trigger",[42, 59, 52, 66, 59, 75, 57, 46],{"focus": [6, 7]}),
    "Neue Order statt Verlustjagd", "Eigene schematische Gegenüberstellung: links Kauf ausgelöst (noch keine Fortsetzung), rechts Entry zurückgenommen (neuer Short-Trigger). Neue Order statt Verlustjagd."),
  "c12-122-gap-reversal": pair("Abwärtslücke und Aufwärtsreaktion",
    panel("Vor der Eröffnung","alter Preisbereich",[80, 74, 70, 73],{"focus": []}),
    custom("Neuer Start","Käufer übernehmen",[[30, 45, 26, 43], [43, 58, 40, 55], [55, 72, 52, 69], [69, 76, 66, 73]],{"focus": [0, 1, 2], "level": [70, "vorherige Zone"]}),
    "Lücke legt Tagesrichtung nicht fest", "Eigene schematische Gegenüberstellung: links Vor der Eröffnung (alter Preisbereich), rechts Neuer Start (Käufer übernehmen). Lücke legt Tagesrichtung nicht fest."),
  "c12-122-double-flags": pair("Hochtest scheitert · Tief hält",
    panel("Doppeltop","früher Short-Versuch",[32, 62, 43, 61, 44],{"focus": [1, 3]}),
    panel("Doppeltief","neuer Long-Anschluss",[32, 62, 43, 61, 44, 66, 80],{"focus": [2, 4, 5]}),
    "Beide Trigger getrennt beurteilen", "Eigene schematische Gegenüberstellung: links Doppeltop (früher Short-Versuch), rechts Doppeltief (neuer Long-Anschluss). Beide Trigger getrennt beurteilen."),
  "c12-122-two-readings": pair("Welche Phase nennst du Spike?",
    panel("Früher Impuls","Balance als Pullback",[30, 62, 43, 61, 44, 68, 82, 78, 87],{"focus": [0, 1]}),
    panel("Später Impuls","Kanal beginnt danach",[30, 62, 43, 61, 44, 68, 82, 78, 87],{"focus": [4, 5, 6]}),
    "Druck und Grenzen vor Etiketten", "Eigene schematische Gegenüberstellung: links Früher Impuls (Balance als Pullback), rechts Später Impuls (Kanal beginnt danach). Druck und Grenzen vor Etiketten."),
  "c12-122-trending-ranges": pair("Gerichtete Schübe · gestaffelte Ranges",
    panel("Untere Balance","früher Handelsbereich",[35, 58, 43, 56, 44, 64],{"focus": [2, 4]}),
    panel("Obere Balance","späterer Test nach unten",[64, 79, 73, 82, 75, 57, 43, 63, 77],{"focus": [3, 6, 8]}),
    "Tagesform entwickelt sich", "Eigene schematische Gegenüberstellung: links Untere Balance (früher Handelsbereich), rechts Obere Balance (späterer Test nach unten). Tagesform entwickelt sich."),
  "c12-observation-plan": pair("Beobachten statt Recht behalten",
    panel("Erste Idee","Auslösung merken",[35, 48, 42, 61],{"focus": [3]}),
    panel("Aktuelle Prüfung","neue Tests und Richtung",[35, 48, 42, 61, 46, 39, 51],{"focus": [4, 5, 6]}),
    "Erst notieren, dann weitere Bars zeigen", "Eigene schematische Gegenüberstellung: links Erste Idee (Auslösung merken), rechts Aktuelle Prüfung (neue Tests und Richtung). Erst notieren, dann weitere Bars zeigen."),
};

export const chapterTwelveDescriptions = Object.fromEntries(
  Object.entries(chapterTwelveCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterTwelveScenarioId, string>;

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
      <text className="chart-small strong" x={x + 17} y={y(value.level[0]) - 7}>
        {value.level[1]}
      </text>
    </> : null}
    {value.bars.map(([open, high, low, close], index) => {
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

export function ChapterTwelveChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterTwelveCharts, scenario)) return null;
  const definition = chapterTwelveCharts[scenario as ChapterTwelveScenarioId];
  return <g className="chapter-twelve-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
