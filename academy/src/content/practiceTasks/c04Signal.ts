import { PRACTICE_TASK_SCHEMA_VERSION, type SignalBarTask } from '../practiceTaskTypes';
import type { CaseBar } from '../barCaseTypes';

// C-04 (Teil 1): „Finde den Signal-Bar“. Eigenständig konstruierte, relative Preisfolgen –
// weder Buchabbildungen noch echte Kurse. Jede Aufgabe ist allein mit den gezeigten Bars
// lösbar (kein späterer Bar wird gebraucht) und stützt sich auf bereits vermittelte Lektionen.
// Status `draft`: fachliche Freigabe steht aus (siehe docs/C04_AUFGABEN.md).
const bars = (...rows: [open: number, high: number, low: number, close: number][]): CaseBar[] =>
  rows.map(([open, high, low, close]) => ({ open, high, low, close }));

const draft = { schemaVersion: PRACTICE_TASK_SCHEMA_VERSION, status: 'draft' } as const;

export const c04SignalTasks: SignalBarTask[] = [
  {
    ...draft,
    id: 'practice.c04.signal.trend-bar-up',
    title: 'Der kontrollierte Trendbar',
    unitId: 'brooks-trends.chapter-02',
    lessonIds: ['brooks-trends.chapter-02.lesson-01', 'brooks-trends.chapter-02.lesson-09'],
    prompt: 'Die meisten Bars überlappen stark. Tippe auf den bullischen Trendbar mit klarem Körper, Open nahe dem Tief und Schluss nahe dem Hoch.',
    bars: bars(
      [100, 101.5, 99, 100.5], [100.5, 101.5, 99.5, 100.2], [100.2, 101.2, 99.4, 100.8], [100.8, 101.6, 99.8, 100.4],
      [100.4, 104.8, 100.2, 104.6], [104.6, 105.4, 103.4, 104], [104, 105, 103.2, 104.4], [104.4, 105.6, 103.8, 104.7],
    ),
    targetBarIndex: 4,
    rule: 'trend-bar-up',
    explanation: 'Bar 5 hat einen Körper, der deutlich über dem der Nachbarbars liegt, ein Open nahe dem Tief, einen Schluss nahe dem Hoch und kaum Tails. Die kaufende Seite hat den Bar bis zum Ende dominiert.',
    retryHint: 'Suche den Bar, dessen Körper deutlich größer ist als bei den Nachbarbars und der nahe seinem Hoch schließt.',
    hints: [
      { barIndex: 3, text: 'Bar 4 endet zwar über seinem Open, sein Körper ist aber klein und die Tails sind lang – das ist eher Balance als Kontrolle.' },
    ],
    sourceAnchors: ['Kapitel 2 · Körpergröße als relatives Stärkezeichen', 'Kapitel 2 · Der ideale Trendbar'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.trend-bar-down',
    title: 'Der bärische Trendbar',
    unitId: 'brooks-trends.chapter-02',
    lessonIds: ['brooks-trends.chapter-02.lesson-01', 'brooks-trends.chapter-02.lesson-09'],
    prompt: 'Nach mehreren ruhigen Bars fällt der Kurs deutlich. Tippe auf den bärischen Trendbar mit klarem Körper und Schluss nahe dem Tief.',
    bars: bars(
      [100, 100.8, 99, 99.6], [99.6, 100.6, 98.8, 99.9], [99.9, 100.7, 99.1, 99.4], [99.4, 100.2, 98.6, 99],
      [99, 99.3, 94.6, 94.9], [94.9, 96.2, 94, 95.5], [95.5, 96.4, 94.6, 95], [95, 95.9, 94.2, 95.2],
    ),
    targetBarIndex: 4,
    rule: 'trend-bar-down',
    explanation: 'Die Merkmale eines Trendbars gelten spiegelbildlich: großer Körper im Vergleich zu den Nachbarn, Open nahe dem Hoch, Schluss nahe dem Tief, kleine Tails. Bar 5 zeigt sie; die Verkäufer haben den Bar dominiert.',
    retryHint: 'Suche den fallenden Bar mit dem größten Körper, der nahe seinem Tief schließt.',
    hints: [
      { barIndex: 6, text: 'Bar 7 fällt zwar auch, aber mit kleinem Körper und langen Tails – das zeigt keine klare Kontrolle der Verkäufer.' },
    ],
    sourceAnchors: ['Kapitel 2 · Der ideale Trendbar'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.doji',
    title: 'Der Bar ohne Schlusskontrolle',
    unitId: 'brooks-trends.chapter-02',
    lessonIds: ['brooks-trends.chapter-02.lesson-01', 'brooks-trends.chapter-02.lesson-03'],
    prompt: 'Ein Aufwärtstrend mit kräftigen Bars. Tippe auf den Bar, der praktisch als Doji funktioniert: winziger Körper im Verhältnis zur Gesamthöhe.',
    bars: bars(
      [100, 103.5, 99.8, 103.2], [103.2, 106.8, 103, 106.5], [106.5, 110, 106.2, 109.7], [109.7, 113.5, 109.4, 113.2],
      [113.2, 116.5, 109.8, 113], [113, 116.8, 112.6, 116.4], [116.4, 120, 116, 119.7], [119.7, 123.4, 119.4, 123],
    ),
    targetBarIndex: 4,
    rule: 'doji',
    explanation: 'Bar 5 bewegt sich weit nach oben und unten, schließt aber fast dort, wo er eröffnete. Beide Seiten haben den Preis bewegt, keine hat den Schluss gewonnen: vorübergehende Balance mitten im Trend.',
    retryHint: 'Achte nicht auf die Höhe des Bars, sondern auf seinen Körper: Wo liegen Open und Close?',
    hints: [
      { barIndex: 3, text: 'Bar 4 ist groß, aber Open und Close liegen weit auseinander – das ist ein Trendbar, kein Doji.' },
    ],
    sourceAnchors: ['Kapitel 2 · Trendbar oder Ein-Bar-Range', 'Kapitel 2 · Ein Doji ist relativ'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.failed-breakout',
    title: 'Der Fehlausbruch',
    unitId: 'brooks-trends.chapter-01',
    lessonIds: ['brooks-trends.chapter-01.lesson-07'],
    prompt: 'Der Markt pendelt in einer Range. Tippe auf den Bar, der über die bisherigen Hochs ausbricht, aber wieder unter diese Grenze zurückschließt.',
    bars: bars(
      [101, 103, 100, 102], [102, 102.9, 100.5, 101], [101, 103, 100.2, 102.5], [102.5, 102.8, 101, 101.5],
      [101.5, 103, 100.4, 102.8], [102.8, 106.2, 101.8, 102.6], [102.6, 103, 99.6, 100], [100, 101.2, 98.4, 98.9],
    ),
    targetBarIndex: 5,
    rule: 'failed-breakout',
    explanation: 'Bar 6 handelt deutlich über alle bisherigen Hochs, schließt aber wieder innerhalb der Range. Ein Breakout ist zunächst nur ein Versuch; der Schluss zurück im alten Bereich zeigt, dass die höheren Preise nicht angenommen wurden.',
    retryHint: 'Suche den Bar, dessen Hoch weit über die Range ragt, dessen Schluss aber wieder darunter liegt.',
    hints: [
      { barIndex: 4, text: 'Bar 5 erreicht nur das bisherige Hoch der Range. Ein Ausbruch braucht ein Hoch darüber.' },
    ],
    sourceAnchors: ['Kapitel 1 · Fehlausbruch über dem Vortageshoch'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.breakout-close',
    title: 'Der erste Schluss über der engen Zone',
    unitId: 'brooks-trends.chapter-01',
    lessonIds: ['brooks-trends.chapter-01.lesson-04'],
    prompt: 'Der Markt verharrt in einer engen Zone. Tippe auf den ersten Bar, der deutlich über dem Hoch der Zone schließt.',
    bars: bars(
      [100, 101, 99.5, 100.6], [100.6, 101.2, 99.8, 100.2], [100.2, 101, 99.6, 100.8], [100.8, 101.3, 100, 100.5],
      [100.5, 101.1, 99.9, 100.9], [100.9, 101.3, 100.3, 101], [101, 104.6, 100.9, 104.3], [104.3, 106, 103.9, 105.6],
    ),
    targetBarIndex: 6,
    rule: 'breakout-close',
    explanation: 'Bar 7 verlässt die enge Zone und schließt klar darüber. Bis dahin blieb der Markt in einer kleinen Range; der Ausbruch mit Schlusskontrolle zeigt, welche Seite die Zone auflöst. Ob er Anschluss erhält, ist eine eigene Beobachtung.',
    retryHint: 'Suche den ersten Bar, dessen Schluss über dem höchsten Hoch der ruhigen Bars liegt.',
    hints: [
      { barIndex: 5, text: 'Bar 6 bleibt innerhalb der Zone – sein Schluss liegt nicht über dem bisherigen Hoch.' },
      { barIndex: 7, text: 'Bar 8 schließt ebenfalls hoch, aber der Ausbruch hat schon einen Bar früher begonnen.' },
    ],
    sourceAnchors: ['Kapitel 1 · Wann wird aus der Range wieder ein Trend?'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.counter-spike',
    title: 'Der Gegen-Spike im Aufwärtstrend',
    unitId: 'brooks-trends.chapter-02',
    lessonIds: ['brooks-trends.chapter-02.lesson-06'],
    prompt: 'Ein Bullenmarkt steigt bar für bar. Tippe auf den kräftigen bärischen Bar, der als Gegen-Spike Anschluss braucht.',
    bars: bars(
      [100, 102.5, 99.8, 102.2], [102.2, 104.6, 102, 104.3], [104.3, 106.8, 104.1, 106.5], [106.5, 107.4, 105.4, 107],
      [107, 107.2, 102.6, 103.2], [103.2, 107.6, 103, 107.3], [107.3, 109.8, 107.1, 109.5], [109.5, 111.7, 109.2, 111.4],
    ),
    targetBarIndex: 4,
    rule: 'counter-spike',
    explanation: 'Bar 5 fällt kräftig gegen den Trend. Ob daraus eine Umkehr wird, zeigt erst der nächste Bar: Hier schließt Bar 6 wieder bullisch, der Gegenseite fehlt der Anschluss. Der übergeordnete Trend bleibt die Ausgangshypothese.',
    retryHint: 'Suche den einzigen Bar, der deutlich fällt, während alle anderen steigen.',
    hints: [],
    sourceAnchors: ['Kapitel 2 · Follow-through entscheidet den Spike'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.climax-bar',
    title: 'Der ungewöhnlich große Bar',
    unitId: 'brooks-trends.chapter-02',
    lessonIds: ['brooks-trends.chapter-02.lesson-08', 'brooks-trends.chapter-02.lesson-09'],
    prompt: 'Der Markt steigt gleichmäßig in kleinen Schritten. Tippe auf den Bar, dessen Körper im Vergleich zu den Nachbarn ungewöhnlich groß ist.',
    bars: bars(
      [100, 101.8, 99.6, 101.5], [101.5, 103.3, 101.2, 103], [103, 104.8, 102.7, 104.5], [104.5, 106.4, 104.2, 106.1],
      [106.1, 108, 105.8, 107.7], [107.7, 116, 107.4, 115.6], [115.6, 116.2, 113.8, 114.6], [114.6, 116, 114.2, 115.5],
    ),
    targetBarIndex: 5,
    rule: 'climax-bar',
    explanation: 'Bar 6 ist um ein Vielfaches größer als die Bars davor. Ein solcher Klimax beschreibt Tempo und Ausdehnung, keine garantierte Umkehr; spät im Trend braucht er eher Bestätigung als reflexartiges Verfolgen.',
    retryHint: 'Vergleiche die Körper: Welcher ist um ein Vielfaches größer als der typische Körper der anderen Bars?',
    hints: [],
    sourceAnchors: ['Kapitel 2 · Klimax ist noch keine Umkehr', 'Kapitel 2 · Der ideale Trendbar – und wann Größe warnt'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.first-pause',
    title: 'Die erste Pause nach dem Klimax',
    unitId: 'brooks-trends.chapter-02',
    lessonIds: ['brooks-trends.chapter-02.lesson-08'],
    prompt: 'Mehrere kräftige Aufwärtsbars folgen aufeinander. Tippe auf den ersten Bar, der diese einseitige Phase unterbricht.',
    bars: bars(
      [100, 103, 99.8, 102.8], [102.8, 106, 102.6, 105.8], [105.8, 109, 105.5, 108.8], [108.8, 112, 108.6, 111.8],
      [111.8, 113.6, 110.2, 111.9], [111.9, 115, 111.7, 114.8], [114.8, 117.8, 114.5, 117.5],
    ),
    targetBarIndex: 4,
    rule: 'first-pause',
    explanation: 'Bar 5 hat kaum Körper: Er beendet die einseitige Klimaxphase, ab hier wird der Handel wieder zweiseitiger. Das beweist keine Umkehr – die Fortsetzung bleibt möglich, wie Bar 6 und 7 zeigen.',
    retryHint: 'Suche den ersten Bar, der nicht mehr wie ein kräftiger Aufwärtsbar aussieht.',
    hints: [],
    sourceAnchors: ['Kapitel 2 · Klimax ist noch keine Umkehr'],
  },
];
