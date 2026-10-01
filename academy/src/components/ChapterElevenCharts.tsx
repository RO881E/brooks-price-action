import type { ChartScenarioId, ChapterElevenScenarioId } from '../content/types';

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

export const chapterElevenCharts: Record<ChapterElevenScenarioId, Definition> = {
  "c11-missed-trend": pair("Früherer Preis · heutige Entscheidung",
    panel("Frühes Signal","vor der Fortsetzung",[35, 44, 40, 52, 62],{}),
    panel("Jetzt sichtbar","Trend noch intakt?",[35, 44, 40, 52, 62, 69, 75],{}),
    "Aktuelle Halteidee prüfen", "Eigene schematische Gegenüberstellung: links frühes signal (vor der Fortsetzung), rechts jetzt sichtbar (Trend noch intakt?). Aktuelle Halteidee prüfen."),
  "c11-clear-direction": pair("Trend oder wechselnder Druck?",
    panel("Käuferkontrolle","kleine Rückläufe",[27, 38, 49, 46, 58, 69, 66, 78],{}),
    panel("Breite Range","wechselnde Richtung",[45, 65, 44, 63, 42, 61, 46],{}),
    "Druck und Überlappung gemeinsam lesen", "Eigene schematische Gegenüberstellung: links käuferkontrolle (kleine Rückläufe), rechts breite range (wechselnde Richtung). Druck und Überlappung gemeinsam lesen."),
  "c11-swing-size": pair("Anfangsposition und Trendrest",
    panel("Drei Einheiten","früher geplanter Start",[35, 44, 53, 60],{}),
    panel("Eine Einheit","verbleibender Trendrest",[35, 44, 53, 60, 67, 75],{}),
    "Restgröße ist keine feste Drittelregel", "Eigene schematische Gegenüberstellung: links drei einheiten (früher geplanter Start), rechts eine einheit (verbleibender Trendrest). Restgröße ist keine feste Drittelregel."),
  "c11-risk-size": pair("Gleicher Stop · anderer Abstand",
    panel("Früher Preis 60","Abstand zum Stop 10",[45, 52, 60],{"level": [50, "Stop 50"]}),
    panel("Später Preis 80","Abstand zum Stop 30",[45, 52, 60, 70, 80],{"level": [50, "Stop 50"]}),
    "Dreifacher Abstand → ein Drittel der Menge", "Eigene schematische Gegenüberstellung: links früher preis 60 (Abstand zum Stop 10), rechts später preis 80 (Abstand zum Stop 30). Dreifacher Abstand → ein Drittel der Menge."),
  "c11-hold-vs-enter": pair("Ab jetzt gleiche mögliche Rückgabe",
    panel("Alt: Einstieg 45","heute 75, Stop 60",[45, 55, 65, 75],{"level": [60, "Stop 60"]}),
    panel("Neu: Einstieg 75","heute 75, Stop 60",[45, 55, 65, 75],{"level": [60, "Stop 60"]}),
    "Bisherige Bilanz bleibt verschieden", "Eigene schematische Gegenüberstellung: links alt: einstieg 45 (heute 75, Stop 60), rechts neu: einstieg 75 (heute 75, Stop 60). Bisherige Bilanz bleibt verschieden."),
  "c11-four-bars": pair("Kontinuierlicher Druck oder Klimax?",
    panel("Moderate Trendbars","vergleichbare Größe",[32, 39, 46, 53, 60, 67],{}),
    panel("Späte Beschleunigung","steigende Bargrößen",[32, 36, 42, 51, 66, 88],{}),
    "Kerzen zählen ersetzt keine Größeneinordnung", "Eigene schematische Gegenüberstellung: links moderate trendbars (vergleichbare Größe), rechts späte beschleunigung (steigende Bargrößen). Kerzen zählen ersetzt keine Größeneinordnung."),
  "c11-wait-pullback": pair("Der Pullback muss nicht kommen",
    panel("Warten auf Rabatt","Trend steigt weiter",[30, 42, 54, 65, 77],{}),
    panel("Kleine Teilnahme","begrenzte Position",[30, 42, 54, 65, 77, 73, 83],{}),
    "Jeder Weg hat Kosten und Risiko", "Eigene schematische Gegenüberstellung: links warten auf rabatt (Trend steigt weiter), rechts kleine teilnahme (begrenzte Position). Jeder Weg hat Kosten und Risiko."),
  "c11-failed-bear": pair("Verkaufsversuch scheitert",
    panel("Bärische Idee","noch Druck nach unten",[70, 61, 55, 62, 51],{}),
    panel("Käuferreaktion","Tief zurückgekauft",[70, 61, 55, 62, 51, 66, 73],{}),
    "Fehlschlag → Umkehr → Anschluss", "Eigene schematische Gegenüberstellung: links bärische idee (noch Druck nach unten), rechts käuferreaktion (Tief zurückgekauft). Fehlschlag → Umkehr → Anschluss."),
  "c11-inside-signal": pair("Inside-Bar nach einer Umkehr",
    custom("Pause innerhalb","Hoch und Tief innen",[[70, 74, 49, 52], [52, 73, 48, 70], [68, 71, 53, 69]],{}),
    custom("Auslösung","Käufer kehren zurück",[[70, 74, 49, 52], [52, 73, 48, 70], [68, 71, 53, 69], [69, 81, 66, 78]],{}),
    "Kontext gibt der kleinen Pause Gewicht", "Eigene schematische Gegenüberstellung: links pause innerhalb (Hoch und Tief innen), rechts auslösung (Käufer kehren zurück). Kontext gibt der kleinen Pause Gewicht."),
  "c11-late-arrival": pair("Du schaust erst jetzt hin",
    panel("Früher Trigger","Referenzpreis 48",[35, 43, 48, 57],{"level": [48, "Stop 48"]}),
    panel("Später Einstieg","jetzt 76, Stop 48",[35, 43, 48, 57, 68, 76],{"level": [48, "Stop 48"]}),
    "Heutigen Stop-Abstand neu rechnen", "Eigene schematische Gegenüberstellung: links früher trigger (Referenzpreis 48), rechts später einstieg (jetzt 76, Stop 48). Heutigen Stop-Abstand neu rechnen."),
  "c11-add-position": pair("Zusatzorder nach Pullback",
    panel("Kleine Position","Pause abwarten",[35, 48, 61, 57, 54],{}),
    panel("Neues Setup","Gesamtstop prüfen",[35, 48, 61, 57, 54, 63, 72],{}),
    "Gesamtmenge und gemeinsamen Stop berechnen", "Eigene schematische Gegenüberstellung: links kleine position (Pause abwarten), rechts neues setup (Gesamtstop prüfen). Gesamtmenge und gemeinsamen Stop berechnen."),
  "c11-tight-channel": pair("Ein Linienbruch ist noch kein Trendwechsel",
    panel("Enger Kanal","kleine Rückläufe",[31, 42, 52, 50, 61, 71, 69, 80],{}),
    panel("Erste Störung","Hochzone erneut testen",[31, 42, 52, 50, 61, 71, 69, 80, 64, 76],{}),
    "Vortrend und neue Gegenreaktion zusammen lesen", "Eigene schematische Gegenüberstellung: links enger kanal (kleine Rückläufe), rechts erste störung (Hochzone erneut testen). Vortrend und neue Gegenreaktion zusammen lesen."),
  "c11-ma-gap": pair("Kontakt oder ganzer Bar unter der Linie?",
    custom("Nur ein Kontakt","Tief an der Referenz",[[76, 80, 60, 67], [67, 71, 58, 64]],{"level": [60, "Durchschnitt"]}),
    custom("Ganzer Bar darunter","auch Hoch unter der Linie",[[76, 80, 60, 67], [56, 59, 45, 48]],{"level": [60, "Durchschnitt"]}),
    "Durchschnitt ist eine Referenz, keine Prognose", "Eigene schematische Gegenüberstellung: links nur ein kontakt (Tief an der Referenz), rechts ganzer bar darunter (auch Hoch unter der Linie). Durchschnitt ist eine Referenz, keine Prognose."),
  "c11-twenty-gap": pair("Erste Rückkehr nach langem Abstand",
    panel("20 Bars ohne Kontakt","Tiefs über der Referenz",[52.0, 53.6, 55.2, 56.8, 58.4, 60.0, 61.6, 63.2, 64.8, 66.4, 68.0, 69.6, 71.2, 72.8, 74.4, 76.0, 77.6, 79.2, 80.8, 82.4],{"level": [45, "Referenz"], "focus": [19]}),
    panel("Rückkehr und Hochtest","Fortsetzung nur möglich",[64, 76, 83, 68, 58, 72, 87, 78, 88],{"level": [45, "Referenz"], "focus": [4]}),
    "Lange Abwesenheit verändert den Kontext", "Eigene schematische Gegenüberstellung: links 20 bars ohne kontakt (Tiefs über der Referenz), rechts rückkehr und hochtest (Fortsetzung nur möglich). Lange Abwesenheit verändert den Kontext."),
  "c11-higher-timeframe": pair("Viele kleine Bars · wenige große Bars",
    panel("Arbeitschart","mehr Zwischenreaktionen",[32, 38, 44, 50, 55, 61, 66, 72],{}),
    custom("Größere Ebene","zusammengefasster Impuls",[[32, 53, 29, 50], [50, 75, 47, 72]],{}),
    "Kontext erklärt · Plan begrenzt", "Eigene schematische Gegenüberstellung: links arbeitschart (mehr Zwischenreaktionen), rechts größere ebene (zusammengefasster Impuls). Kontext erklärt · Plan begrenzt."),
  "c11-checklist": pair("Späte Teilnahme oder Abwarten?",
    panel("Klare Halteidee","Stop und Menge passen",[31, 42, 53, 50, 61, 72],{}),
    panel("Unklare Halteidee","Druck wechselt",[40, 61, 43, 59, 41, 57],{}),
    "Kein tragbares Risiko → keine Order", "Eigene schematische Gegenüberstellung: links klare halteidee (Stop und Menge passen), rechts unklare halteidee (Druck wechselt). Kein tragbares Risiko → keine Order."),
};

export const chapterElevenDescriptions = Object.fromEntries(
  Object.entries(chapterElevenCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterElevenScenarioId, string>;

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

export function ChapterElevenChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterElevenCharts, scenario)) return null;
  const definition = chapterElevenCharts[scenario as ChapterElevenScenarioId];
  return <g className="chapter-eleven-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
