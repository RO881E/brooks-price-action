import type { ChapterFiveScenarioId, ChartScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
interface Panel {
  title: string;
  note: string;
  bars: Bar[];
  focus?: number[];
  level?: readonly [price: number, label: string];
  range?: readonly [low: number, high: number];
}
interface Definition {
  heading: string;
  panels: Panel[];
  footer: string;
  description: string;
}

// These are original teaching sketches in relative price units. No book chart,
// price series, image or figure geometry is reproduced.
export const chapterFiveCharts: Record<ChapterFiveScenarioId, Definition> = {
  'reversal-meaning': {
    heading: 'Ein Richtungswechsel im Bar ist noch kein neuer Trend',
    panels: [
      { title: 'Bisheriger Verlauf', note: 'fallende Schlüsse', bars: [[92,98,70,75],[76,82,53,59],[59,64,36,42],[43,50,17,24]], focus: [3] },
      { title: 'Reaktion und zwei Wege', note: 'Folgebars bleiben offen', bars: [[70,76,45,52],[51,55,19,25],[24,59,8,53],[52,62,41,47]], focus: [2] },
    ],
    footer: 'Barform → Hypothese → erst danach Anschluss prüfen',
    description: 'Ein Abwärtsbein endet mit einer bullischen Reaktion; der nächste Bar kann folgen oder zurückfallen.',
  },
  'bull-reversal-anatomy': {
    heading: 'Unterer Test und die Qualität des Schlusses',
    panels: [
      { title: 'Käufer halten', note: 'Schluss nahe dem Hoch', bars: [[42,72,12,68]], focus: [0], level: [35, 'Eröffnung'] },
      { title: 'Käufer geben ab', note: 'großer oberer Schatten', bars: [[42,76,12,49]], focus: [0], level: [35, 'Eröffnung'] },
    ],
    footer: 'Gleicher tiefer Test – unterschiedlicher Schluss',
    description: 'Zwei bullische Bars testen dasselbe Tief, aber einer hält die Erholung bis nahe an das Hoch.',
  },
  'bear-reversal-anatomy': {
    heading: 'Oberer Test und die Qualität des Schlusses',
    panels: [
      { title: 'Verkäufer halten', note: 'Schluss nahe dem Tief', bars: [[67,90,17,22]], focus: [0], level: [65, 'Eröffnung'] },
      { title: 'Käufer kommen zurück', note: 'großer unterer Schatten', bars: [[67,90,13,59]], focus: [0], level: [65, 'Eröffnung'] },
    ],
    footer: 'Gleicher Hochtest – unterschiedlicher Schluss',
    description: 'Zwei bärische Bars weisen ein Hoch zurück, doch nur einer hält den Verkaufsfortschritt.',
  },
  'reversal-many-closes': {
    heading: 'Wie viele frühere Schlüsse werden aufgehoben?',
    panels: [
      { title: 'Nur letzter Bar', note: 'kleine Rückeroberung', bars: [[84,89,65,70],[70,75,50,57],[57,61,35,43],[42,52,24,50]], focus: [3] },
      { title: 'Mehrere Bars', note: 'deutlicher Kontrollwechsel', bars: [[84,89,65,70],[70,75,50,57],[57,61,35,43],[42,82,24,78]], focus: [3] },
    ],
    footer: 'Der Schluss zählt im Verhältnis zu früheren Preisen',
    description: 'Zwei ähnliche Rückweisungen vergleichen einen nur leicht höheren mit einem weit zurückeroberten Schluss.',
  },
  'reversal-entry-chain': {
    heading: 'Form, Auslösung und Entry-Bar sind drei Schritte',
    panels: [
      { title: 'Setup', note: 'Order noch nicht gefüllt', bars: [[77,82,53,59],[59,62,30,37],[36,73,18,68]], focus: [2], level: [73, 'Buy-Stop'] },
      { title: 'Auslösung', note: 'Folge kann stark oder schwach sein', bars: [[59,62,30,37],[36,73,18,68],[68,88,61,82],[82,92,72,86]], focus: [2], level: [73, 'Entry'] },
    ],
    footer: 'Erst nach Fill heißt der Vorgänger Signal-Bar',
    description: 'Ein bullischer Setup-Bar wird erst nach dem Überschreiten seiner Schwelle zum Signal-Bar.',
  },
  'reversal-with-trend': {
    heading: 'Trendrichtung verändert die Beweislast',
    panels: [
      { title: 'Long im Trend', note: 'Pullback endet', bars: [[22,46,17,42],[42,64,36,58],[58,63,39,45],[44,66,40,61],[61,81,56,76]], focus: [3] },
      { title: 'Short gegen Trend', note: 'ein Bärenbar reicht kaum', bars: [[22,46,17,42],[42,64,36,58],[58,79,54,74],[74,77,52,57],[57,84,53,80]], focus: [3] },
    ],
    footer: 'Dieselbe Gegenreaktion kann nur eine Trendpause sein',
    description: 'Ein kleiner Rücklauf in einem Bullenkanal stützt eher einen Long-Plan als einen unbestätigten Short.',
  },
  'reversal-break-retest': {
    heading: 'Gegen-Trend-These aus einer Folge von Ereignissen',
    panels: [
      { title: 'Intakter Kanal', note: 'frühes Signal', bars: [[91,96,73,79],[79,83,60,64],[65,69,43,48],[47,58,28,54]], focus: [3] },
      { title: 'Bruch und Test', note: 'zweiter Tiefbereich hält', bars: [[85,90,63,67],[67,72,42,48],[48,79,44,74],[74,78,33,39],[39,74,29,69]], focus: [4], level: [33, 'altes Tief'] },
    ],
    footer: 'Strukturbruch → Rücktest → neuer Schluss',
    description: 'Ein erstes Gegen-Signal im Kanal wird einem späteren Test nach einem Kanalbruch gegenübergestellt.',
  },
  'reversal-second-test': {
    heading: 'Der zweite Verkaufsversuch prüft die Tiefzone',
    panels: [
      { title: 'Erster Test', note: 'Käufer reagieren', bars: [[76,81,49,55],[55,58,28,34],[34,58,27,52],[52,72,48,68]], focus: [2], level: [27, 'Tiefzone'] },
      { title: 'Zweiter Versuch', note: 'kein Anschluss unter Tief', bars: [[34,58,27,52],[52,72,48,68],[68,72,34,39],[39,70,23,65]], focus: [3], level: [27, 'erstes Tief'] },
    ],
    footer: 'Nicht nur der neue Schatten, sondern der zweite Fehlschlag zählt',
    description: 'Nach dem ersten Abprall testet ein späterer Bar die alte Tiefzone und kehrt zurück.',
  },
  'reversal-overlap-range': {
    heading: 'Überlappende Bars bilden einen gemeinsamen Raum',
    panels: [
      { title: 'Zweiseitige Zone', note: 'neuer Bar bleibt im Rechteck', bars: [[51,70,32,63],[63,74,37,44],[44,68,29,59],[59,77,35,46],[46,73,31,68]], range: [29,77], focus: [4] },
      { title: 'Kauf am oberen Rand', note: 'wenig freier Raum', bars: [[52,73,31,67],[67,77,35,45],[45,70,30,65],[65,79,43,73],[73,78,40,49]], range: [30,79], focus: [3] },
    ],
    footer: 'Ein Bar kann innerhalb der Range gut aussehen und trotzdem schwach sein',
    description: 'Zwei überlappende Folgen zeigen ein scheinbar bullisches Signal nahe der Range-Oberkante.',
  },
  'reversal-midpoint-overlap': {
    heading: 'Bar-Mitte macht Überschneidung sichtbar',
    panels: [
      { title: 'Hohe Überlappung', note: 'Mitte im alten Bereich', bars: [[70,80,24,31],[32,77,29,69]], focus: [1], level: [53, 'Mitte'] },
      { title: 'Weniger Überlappung', note: 'neues Tief zurückgewiesen', bars: [[70,80,42,49],[47,71,7,66]], focus: [1], level: [39, 'Mitte'] },
    ],
    footer: 'Eine Sichtprüfung, keine starre Handelsformel',
    description: 'Zwei Bar-Paare zeigen unterschiedlich viel gemeinsame Preisspanne und die Mitte des neuen Bars.',
  },
  'reversal-large-doji': {
    heading: 'Ein großer Doji handelt beide Seiten',
    panels: [
      { title: 'Weite Ein-Bar-Range', note: 'Schluss nahe Eröffnung', bars: [[49,90,9,51]], focus: [0], range: [9,90] },
      { title: 'Zweites Signal', note: 'erst danach neue Richtung', bars: [[49,90,9,51],[51,68,35,63],[63,84,58,78]], focus: [2], level: [68, 'Ausbruch'] },
    ],
    footer: 'Große Spanne und kleiner Körper = wenig Nettofortschritt',
    description: 'Ein weit ausschlagender Doji wird einer späteren Folge mit deutlicherem bullischem Schluss gegenübergestellt.',
  },
  'reversal-wrong-end-tail': {
    heading: 'Ein Vorsprung kann bis zum Schluss verloren gehen',
    panels: [
      { title: 'Bullisch stark', note: 'kaum Abgabe oben', bars: [[39,79,9,75]], focus: [0] },
      { title: 'Bullisch gebremst', note: 'langer oberer Schatten', bars: [[39,86,9,53]], focus: [0] },
    ],
    footer: 'Lage, Körper und zweiter Versuch bleiben relevant',
    description: 'Zwei Bars haben ein ähnliches Tief, aber der rechte gibt den größten Teil des Hochs wieder ab.',
  },
  'reversal-small-bar': {
    heading: 'Kleine Spanne an zwei sehr verschiedenen Orten',
    panels: [
      { title: 'Im starken Bärentrend', note: 'nur eine Pause', bars: [[91,96,72,76],[76,81,56,60],[60,65,38,43],[42,51,37,48],[48,50,26,30]], focus: [3] },
      { title: 'Am getesteten Tief', note: 'klarer Fehlpunkt', bars: [[78,84,52,58],[58,62,33,39],[39,60,29,54],[54,57,31,35],[35,53,30,50]], focus: [4], level: [30, 'Test'] },
    ],
    footer: 'Stop-Abstand ersetzt nicht die Qualität der Idee',
    description: 'Ein kleiner bullischer Bar im intakten Trend wird mit einem kleinen Bar an einem getesteten Tief verglichen.',
  },
  'reversal-forming-trap': {
    heading: 'Vorläufige Form und endgültiger Schluss',
    panels: [
      { title: 'Noch offen', note: 'scheinbar bullisch', bars: [[85,90,65,69],[69,74,43,47],[47,52,23,28],[28,61,11,57]], focus: [3] },
      { title: 'Nach Schluss', note: 'zurück ans Tief verkauft', bars: [[85,90,65,69],[69,74,43,47],[47,52,23,28],[28,61,8,11]], focus: [3] },
    ],
    footer: 'Der letzte Handel kann das Signal vollständig ändern',
    description: 'Derselbe laufende Bar erscheint vor dem Schluss bullisch und schließt nach Verkaufsdruck bärisch.',
  },
  'reversal-tail-context': {
    heading: 'Gleicher Schatten, andere Grenze',
    panels: [
      { title: 'Tief-Ausbruch scheitert', note: 'außerhalb getestet', bars: [[68,76,44,51],[51,58,30,35],[35,66,10,60]], focus: [2], level: [30, 'altes Tief'] },
      { title: 'Nur Überlappung', note: 'innerhalb geblieben', bars: [[47,71,28,62],[62,76,29,45],[45,69,27,59]], focus: [2], level: [27, 'alte Zone'] },
    ],
    footer: 'Ein Referenzpreis unterscheidet Rückweisung von Range-Handel',
    description: 'Links scheitert ein neues Tief, rechts bildet derselbe Schatten nur einen Ausschlag innerhalb alter Bars.',
  },
  'reversal-timeframe-zoom': {
    heading: 'Eine Preisfolge – mehrere Bar-Einteilungen',
    panels: [
      { title: 'Gröberer Chart', note: 'ein Reversal-Bar', bars: [[70,80,46,50],[50,56,27,34],[34,72,13,68]], focus: [2], level: [27, 'Tief'] },
      { title: 'Feinerer Chart', note: 'Fall, Test, Rückkehr', bars: [[70,76,52,56],[56,60,39,42],[42,47,25,29],[29,34,13,19],[19,40,16,36],[36,58,32,53],[53,72,49,68]], focus: [3,6], level: [27, 'gleiche Zone'] },
    ],
    footer: 'Preisfolge behalten; Barform darf sich ändern',
    description: 'Ein zusammengefasster Reversal-Bar zerfällt auf einer feineren Zeitebene in mehrere fallende und steigende Bars.',
  },
  'reversal-daily-compression': {
    heading: 'Tagesbar und die vielen Schritte in seinem Inneren',
    panels: [
      { title: 'Intraday', note: 'Fall → Range → Anstieg', bars: [[76,82,58,61],[61,67,35,39],[39,49,17,22],[22,44,19,40],[40,48,28,34],[34,58,31,54],[54,71,50,67]], focus: [2,6] },
      { title: 'Tagesergebnis', note: 'erst am Ende bekannt', bars: [[76,82,17,67]], focus: [0] },
    ],
    footer: 'Die Tagesform war während der Sitzung noch nicht fertig',
    description: 'Sieben Intraday-Abschnitte ergeben rückblickend einen Tagesbar mit unterem Schatten.',
  },
  'reversal-case-51-overlap': {
    heading: 'Fall 5.1 · Form innerhalb der überlappenden Zone',
    panels: [
      { title: 'Enger Abwärtslauf', note: 'Ausbruch nach oben offen', bars: [[92,96,71,76],[76,81,54,58],[58,65,39,43],[43,57,29,52]], focus: [3] },
      { title: 'Range danach', note: 'Long nahe Oberkante', bars: [[53,75,30,68],[68,78,35,44],[44,73,28,62],[62,76,33,48],[48,74,31,69]], focus: [4], range: [28,78] },
    ],
    footer: 'Eigenes Schema zum Lernpunkt aus Chartfall 5.1',
    description: 'Nach einem engen Abwärtslauf überlappt ein bullischer Bar mehrere ältere Bars und erreicht die Range-Oberkante.',
  },
  'reversal-case-51-failure': {
    heading: 'Fall 5.1 · Kaufausbruch wird zurückgenommen',
    panels: [
      { title: 'Versuch oberhalb', note: 'frühe Longs', bars: [[48,70,30,63],[63,76,41,68],[68,85,62,78]], focus: [2], level: [76, 'Range-Oberkante'] },
      { title: 'Bärische Antwort', note: 'Long-Ausstieg + Short', bars: [[48,70,30,63],[63,76,41,68],[68,85,62,78],[78,84,36,41],[41,50,24,29]], focus: [3], level: [76, 'Rückfall'] },
    ],
    footer: 'Eigenes Schema: Der Fehlausbruch liefert neuen Kontext',
    description: 'Ein zunächst bullischer Ausbruch fällt zurück und ein bärischer Bar eröffnet einen anderen Plan.',
  },
  'reversal-case-52-break': {
    heading: 'Fall 5.2 · Rückkehr über ein altes Tief',
    panels: [
      { title: 'Referenz vor dem Test', note: 'altes Swing-Tief', bars: [[78,84,56,62],[62,68,33,38],[38,60,29,54],[54,65,45,61]], level: [29, 'altes Tief'] },
      { title: 'Versuch scheitert', note: 'Käufer antworten', bars: [[62,68,33,38],[38,60,29,54],[54,65,45,61],[61,66,13,58],[58,74,53,70]], focus: [3], level: [29, 'Tief zurück'] },
    ],
    footer: 'Eigenes Schema: Test, Rückkehr, Anschluss prüfen',
    description: 'Ein früheres Swing-Tief wird unterschritten und vor dem Schluss zurückerobert.',
  },
  'reversal-case-52-inside': {
    heading: 'Fall 5.2 · Ähnliche Kerze ohne Grenztest',
    panels: [
      { title: 'Vorheriger Bereich', note: 'mehrfach gehandelt', bars: [[55,78,22,68],[68,81,29,45],[45,76,21,62]], range: [21,81] },
      { title: 'Langer Schatten', note: 'bleibt innerhalb', bars: [[55,78,22,68],[68,81,29,45],[45,76,21,62],[62,79,25,69]], focus: [3], range: [21,81] },
    ],
    footer: 'Eigenes Schema: Ohne neues Tief kein gescheiterter Ausbruch',
    description: 'Eine bullische Kerze mit langem unterem Schatten bleibt innerhalb der Spannen ihrer Vorgänger.',
  },
  'reversal-case-53-unconventional': {
    heading: 'Fall 5.3 · Tiefer Schluss ohne klassischen Docht',
    panels: [
      { title: 'Frühere Longs', note: 'steigende Referenzen', bars: [[25,46,19,42],[42,59,38,56],[56,72,52,68],[68,82,64,78]], focus: [3] },
      { title: 'Starker Bärenbar', note: 'mehrere Schlüsse gebrochen', bars: [[25,46,19,42],[42,59,38,56],[56,72,52,68],[68,82,64,78],[77,79,17,23]], focus: [4], level: [42, 'alte Schlüsse'] },
    ],
    footer: 'Eigenes Schema: Der Schluss verändert die alte Long-Lage',
    description: 'Ein großer Bärenbar durchbricht mehrere frühere Schlüsse, ohne das Hoch des Vorgängerbars zu überschreiten.',
  },
  'reversal-case-53-doji-entry': {
    heading: 'Fall 5.3 · Auslösung ohne kräftigen Anschluss',
    panels: [
      { title: 'Bullisches Signal', note: 'Entry-Schwelle', bars: [[70,76,48,52],[52,57,31,35],[35,68,19,63]], focus: [2], level: [68, 'Buy-Stop'] },
      { title: 'Enger Entry-Bar', note: 'wenig Dringlichkeit', bars: [[70,76,48,52],[52,57,31,35],[35,68,19,63],[63,72,59,65]], focus: [3], level: [68, 'kurz erreicht'] },
    ],
    footer: 'Eigenes Schema: Fill ist nicht automatisch Follow-through',
    description: 'Auf ein bullisches Signal folgt ein kleiner Doji, der die Einstiegsschwelle nur kurz überschreitet.',
  },
  'reversal-case-53-flag': {
    heading: 'Fall 5.3 · Starker Einzelbar innerhalb einer Flag',
    panels: [
      { title: 'Kumulativer Druck', note: 'mehrere Bären-Schlüsse', bars: [[75,86,41,47],[47,79,30,39],[39,76,27,34],[34,74,25,31]], range: [25,86] },
      { title: 'Bullische Falle', note: 'am oberen Rand', bars: [[75,86,41,47],[47,79,30,39],[39,76,27,34],[34,74,25,31],[32,82,28,77],[77,84,33,38]], focus: [4], range: [25,86] },
    ],
    footer: 'Eigenes Schema: Frühere Bars bleiben auch nach einem grünen Bar relevant',
    description: 'In einer Flag mit mehreren bärischen Schlüssen fällt ein bullischer Bar am oberen Rand wieder zurück.',
  },
  'reversal-three-decisions': {
    heading: 'Drei Kontexte – drei verschiedene nächste Entscheidungen',
    panels: [
      { title: 'Range', note: 'erst warten', bars: [[50,73,28,62],[62,77,34,45],[45,74,29,66]], focus: [2], range: [28,77] },
      { title: 'Tief-Test', note: 'Anschluss prüfen', bars: [[70,77,44,50],[50,56,30,36],[36,64,12,60]], focus: [2], level: [30, 'Tief'] },
      { title: 'Schlussbruch', note: 'Short-Plan prüfen', bars: [[28,48,22,43],[43,62,39,56],[56,76,51,70],[70,74,16,20]], focus: [3] },
    ],
    footer: 'Ort → Test → Schluss → Auslösung → Fehlpunkt',
    description: 'Drei schematische Fälle kontrastieren Range, gescheiterten Tief-Ausbruch und bärischen Bruch früherer Schlüsse.',
  },
};

export const chapterFiveDescriptions = Object.fromEntries(
  Object.entries(chapterFiveCharts).map(([key, value]) => [key, value.description]),
) as Record<ChapterFiveScenarioId, string>;

function PanelChart({ panel, x, width }: { panel: Panel; x: number; width: number }) {
  const y = (price: number) => 245 - price * 1.5;
  const spacing = (width - 54) / panel.bars.length;
  const candleWidth = Math.min(24, spacing * 0.48);
  return (
    <g>
      <rect className="chart-panel" x={x} y={75} width={width} height={225} rx={15} />
      <text className="chart-panel-title" x={x + width / 2} y={95} textAnchor="middle">{panel.title}</text>
      {panel.range ? (
        <rect className="chart-zone" x={x + 13} y={y(panel.range[1])} width={width - 26}
          height={y(panel.range[0]) - y(panel.range[1])} rx={7} />
      ) : null}
      {panel.level ? (
        <>
          <line className="breakout-line" x1={x + 13} x2={x + width - 13}
            y1={y(panel.level[0])} y2={y(panel.level[0])} />
          <text className="chart-small strong" x={x + 19} y={y(panel.level[0]) - 7}>{panel.level[1]}</text>
        </>
      ) : null}
      {panel.bars.map(([open, high, low, close], index) => {
        const cx = x + 27 + (index + 0.5) * spacing;
        const bull = close >= open;
        const focus = panel.focus?.includes(index);
        return (
          <g key={index}>
            {focus ? (
              <rect className="chart-zone" x={cx - candleWidth / 2 - 9} y={y(high) - 12}
                width={candleWidth + 18} height={y(low) - y(high) + 24} rx={7} />
            ) : null}
            <line className={bull ? 'candle-wick bull' : 'candle-wick bear'}
              x1={cx} x2={cx} y1={y(high)} y2={y(low)} />
            <rect className={bull ? 'candle-body bull' : 'candle-body bear'}
              x={cx - candleWidth / 2} y={Math.min(y(open), y(close))}
              width={candleWidth} height={Math.max(3, Math.abs(y(open) - y(close)))} rx={2} />
          </g>
        );
      })}
      <text className="chart-small strong" x={x + width / 2} y={287} textAnchor="middle">{panel.note}</text>
    </g>
  );
}

export function ChapterFiveChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterFiveCharts, scenario)) return null;
  const definition = chapterFiveCharts[scenario as ChapterFiveScenarioId];
  const panelWidth = (700 - (definition.panels.length - 1) * 14) / definition.panels.length;
  return (
    <g className="chapter-five-chart">
      <text className="chart-kicker" x={380} y={29} textAnchor="middle">{definition.heading}</text>
      {definition.panels.map((panel, index) => (
        <PanelChart key={index} panel={panel} x={30 + index * (panelWidth + 14)} width={panelWidth} />
      ))}
      <text className="chart-small strong" x={380} y={321} textAnchor="middle">{definition.footer}</text>
    </g>
  );
}
