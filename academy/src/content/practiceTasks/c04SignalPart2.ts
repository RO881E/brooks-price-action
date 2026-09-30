import { PRACTICE_TASK_SCHEMA_VERSION, type SignalBarTask } from '../practiceTaskTypes';
import type { CaseBar } from '../barCaseTypes';

// C-04 Teil 2 (Kapitel 3–10), „Finde den Bar“: eigenständig konstruierte, relative Preisfolgen –
// weder Buchabbildungen noch echte Kurse. Jede Aufgabe ist allein mit den gezeigten Bars lösbar und
// stützt sich auf bereits vermittelte Lektionen.
// Status `draft`: fachliche Freigabe steht aus (siehe docs/C04_AUFGABEN.md).
const bars = (...rows: [open: number, high: number, low: number, close: number][]): CaseBar[] =>
  rows.map(([open, high, low, close]) => ({ open, high, low, close }));

const draft = { schemaVersion: PRACTICE_TASK_SCHEMA_VERSION, status: 'draft' } as const;

export const c04SignalTasksPart2: SignalBarTask[] = [
  {
    ...draft,
    id: 'practice.c04.signal.failed-breakdown',
    title: 'Der gescheiterte Tiefausbruch',
    unitId: 'brooks-trends.chapter-03',
    lessonIds: ['brooks-trends.chapter-03.lesson-09'],
    prompt: 'Der Markt fällt Bar für Bar auf neue Tiefs. Tippe auf den Bar, der die bisherigen Tiefs unterschreitet, aber wieder darüber schließt.',
    bars: bars(
      [105, 106, 103.6, 103.8], [103.8, 104.2, 102.4, 102.6], [102.6, 103, 101.2, 101.4], [101.4, 101.8, 99.6, 99.8],
      [99.8, 100.2, 97.4, 100], [100, 103.6, 99.9, 103.4], [103.4, 105.4, 103, 105], [105, 106.4, 104.6, 106],
    ),
    targetBarIndex: 4,
    rule: 'failed-breakdown',
    explanation: 'Bar 5 handelt unter alle bisherigen Tiefs, schließt aber wieder darüber. Ein neues Extrem ist keine Bestätigung: Erst das Bleiben außerhalb der alten Grenze zeigt Akzeptanz. Hier fehlt sie, und die tieferen Preise werden nicht gehalten.',
    retryHint: 'Suche den Bar, dessen Tief unter allen früheren Tiefs liegt, dessen Schluss aber wieder über diesem Tief endet.',
    hints: [
      { barIndex: 3, text: 'Bar 4 schließt selbst nahe seinem neuen Tief – die tieferen Preise werden dort noch akzeptiert.' },
    ],
    sourceAnchors: ['Kapitel 3 · Chartfall 3.1: Der gescheiterte Tiefausbruch'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.ii-first',
    title: 'Der Beginn des ii',
    unitId: 'brooks-trends.chapter-04',
    lessonIds: ['brooks-trends.chapter-04.lesson-11'],
    prompt: 'Die Kursspanne verengt sich. Tippe auf den ersten Inside-Bar, auf den direkt ein weiterer Inside-Bar folgt (ii).',
    bars: bars(
      [100, 101, 99, 100.6], [100.6, 103, 100.2, 102.6], [102.6, 105.4, 102, 104.8], [104.8, 105, 103, 103.6],
      [103.7, 104.4, 103.3, 104], [104, 106.4, 103.8, 106], [106, 107.6, 105.6, 107.2], [107.2, 108.4, 106.6, 108],
    ),
    targetBarIndex: 3,
    rule: 'ii-first',
    explanation: 'Bar 4 liegt vollständig innerhalb von Bar 3, Bar 5 wiederum innerhalb von Bar 4: zusammen ein ii. Die aktuelle Ausbruchsrange wird kleiner; über die spätere Richtung sagt das noch nichts.',
    retryHint: 'Ein ii besteht aus zwei Inside-Bars in Folge: Suche den Bar, der in seinem Vorgänger liegt und selbst wieder einen Inside-Bar nach sich hat.',
    hints: [
      { barIndex: 4, text: 'Bar 5 ist zwar ebenfalls ein Inside-Bar, aber das ii beginnt mit dem Bar davor.' },
    ],
    sourceAnchors: ['Kapitel 4 · ii und iii verschachteln die Kompression'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.bull-reversal-bar',
    title: 'Der bullische Reversal-Bar',
    unitId: 'brooks-trends.chapter-05',
    lessonIds: ['brooks-trends.chapter-05.lesson-02', 'brooks-trends.chapter-05.lesson-12'],
    prompt: 'Nach einer Abwärtsbewegung erscheint ein bullischer Reversal-Bar: Er handelt unter dem früheren Tief, schließt aber weit oben mit kleinem oberem Schatten.',
    bars: bars(
      [106, 106.6, 104.4, 104.8], [104.8, 105.2, 102.8, 103], [103, 103.4, 101.2, 101.6], [101.6, 102, 99.6, 99.9],
      [99.9, 102.8, 97.8, 102.5], [102.5, 104.2, 101.8, 103.8], [103.8, 106.4, 103.4, 104.4], [104.4, 105.6, 104, 105.2],
    ),
    targetBarIndex: 4,
    rule: 'bull-reversal-bar',
    explanation: 'Bar 5 zeigt den Weg zum Tief und zurück: Er handelt unter dem früheren Tief und schließt weit oben nahe seinem Hoch. Das ist eine deutliche Rückeroberung. Ein solcher Bar bleibt trotzdem ein Versuch; sein Ort und die Folgebars entscheiden.',
    retryHint: 'Suche den bullischen Bar, dessen Tief unter allen früheren Tiefs liegt und der nahe seinem Hoch schließt.',
    hints: [
      { barIndex: 6, text: 'Bar 7 hat einen langen oberen Schatten: Käufer gaben die Hochs wieder ab. Ein früheres Tief unterschreitet er auch nicht.' },
    ],
    sourceAnchors: ['Kapitel 5 · Der bullische Bar: Rückweisung und Schluss', 'Kapitel 5 · Der Schatten am falschen Ende'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.shaved-top',
    title: 'Der Bar ohne Schatten am Hoch',
    unitId: 'brooks-trends.chapter-06',
    lessonIds: ['brooks-trends.chapter-06.lesson-13'],
    prompt: 'Ein Bullenlauf mit vielen Bars. Tippe auf den bullischen Bar, der genau an seinem Hoch schließt (kein oberer Schatten).',
    bars: bars(
      [100, 102, 99.6, 101.2], [101.2, 103.4, 100.8, 102.6], [102.6, 105.2, 102.2, 104.4], [104.4, 107.8, 104, 107.8],
      [107.8, 109.6, 107, 108.6], [108.6, 110.2, 108, 109.2], [109.2, 111, 108.8, 110], [110, 111.6, 109.4, 110.6],
    ),
    targetBarIndex: 3,
    rule: 'shaved-top',
    explanation: 'Bar 4 hat am Schlussende keinen Schatten: Käufer waren bis zuletzt aktiv. Im kräftigen Bullenlauf verstärkt das die Aussage; für sich allein zählt ein solcher Schluss aber nur zusammen mit Trend, Tempo und Folgebars.',
    retryHint: 'Suche den Bar, dessen Schluss genau mit seinem Hoch zusammenfällt.',
    hints: [
      { barIndex: 2, text: 'Bar 3 steigt zwar deutlich, gibt aber vor Schluss etwas ab – oben bleibt ein Schatten.' },
    ],
    sourceAnchors: ['Kapitel 6 · Shaved-Bar: kein Schatten, trotzdem Kontext nötig'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.outside-bar',
    title: 'Der Outside-Bar',
    unitId: 'brooks-trends.chapter-07',
    lessonIds: ['brooks-trends.chapter-07.lesson-01'],
    prompt: 'Tippe auf den Outside-Bar: Er hat ein höheres Hoch und ein tieferes Tief als der unmittelbar vorherige Bar.',
    bars: bars(
      [100, 102, 99, 101], [101, 103, 100.2, 102.4], [102.4, 103.4, 101, 101.6], [101.6, 102.8, 100.6, 102.4],
      [102.4, 105.4, 99.8, 103], [103, 104.4, 102.2, 103.8], [103.8, 105, 103, 104.6], [104.6, 106, 104, 105.6],
    ),
    targetBarIndex: 4,
    rule: 'outside-bar',
    explanation: 'Bar 5 überragt seinen Vorgänger nach oben und nach unten. Erst beide Grenzen machen ihn zum Outside-Bar. Er zeigt größere Spanne und zweiseitige Aktivität, aber noch keine feste Richtung.',
    retryHint: 'Suche den Bar, der den Vorbar oben und unten überragt – nicht nur auf einer Seite.',
    hints: [
      { barIndex: 1, text: 'Bar 2 macht nur ein höheres Hoch, das Tief liegt nicht tiefer – für einen Outside-Bar braucht es beides.' },
    ],
    sourceAnchors: ['Kapitel 7 · Ein Outside-Bar umfasst seinen Vorgänger'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.weak-bear-close',
    title: 'Das bärische Signal mit nachlassender Schärfe',
    unitId: 'brooks-trends.chapter-08',
    lessonIds: ['brooks-trends.chapter-08.lesson-04'],
    prompt: 'Ein Bärenlauf. Tippe auf den bärischen Bar, der ein neues Tief erreicht, aber deutlich über diesem Tief schließt.',
    bars: bars(
      [105, 105.6, 103.4, 103.6], [103.6, 104, 101.6, 101.8], [101.8, 102.2, 99.8, 100], [100, 100.4, 97.6, 99],
      [99, 100.6, 98.6, 100.2], [100.2, 101.4, 99.8, 101], [101, 101.8, 100.2, 100.6], [100.6, 101.6, 100, 101.2],
    ),
    targetBarIndex: 3,
    rule: 'weak-bear-close',
    explanation: 'Bar 4 erreicht ein neues Tief, schließt aber deutlich davon entfernt. Hoch und Tief bleiben gleich, doch die Verkäuferkontrolle ist weniger überzeugend als bei einem Schluss am Tief. Beurteile die Signalstärke am fertigen Bar, nicht an einem Zwischenstand.',
    retryHint: 'Suche den fallenden Bar, dessen Schluss nicht am neuen Tief liegt, sondern ein Stück darüber.',
    hints: [
      { barIndex: 2, text: 'Bar 3 schließt dicht an seinem Tief – das ist die stärkere Form, nicht die schwächere.' },
    ],
    sourceAnchors: ['Kapitel 8 · Ein bärisches Signal kann noch an Schärfe verlieren'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.failed-flag-breakout',
    title: 'Der gescheiterte Ausbruch aus der Flagge',
    unitId: 'brooks-trends.chapter-09',
    lessonIds: ['brooks-trends.chapter-09.lesson-05'],
    prompt: 'Der Markt schiebt sich in einer vermeintlichen Bullenflagge seitwärts. Tippe auf den Bar, der nach oben ausbricht, aber wieder darunter schließt.',
    bars: bars(
      [100, 102, 99.4, 101], [101, 101.8, 99.8, 100.4], [100.4, 102, 99.6, 101.4], [101.4, 101.8, 100.2, 100.8],
      [100.8, 102, 100, 101.6], [101.6, 104.6, 101.2, 101.9], [101.9, 102.2, 99.4, 99.8], [99.8, 100.4, 98, 98.6],
    ),
    targetBarIndex: 5,
    rule: 'failed-breakout',
    explanation: 'Bar 6 bricht über die Flagge aus und schließt wieder darin. Erst dieser beobachtete Fehlschlag öffnet die Gegenthese; die bloße Warnung vorher genügte dafür nicht. Ein möglicher Einstieg bräuchte zusätzlich seinen eigenen Auslöser und Schutzpunkt.',
    retryHint: 'Suche den Bar, dessen Hoch weit über die Flagge ragt, dessen Schluss aber wieder innerhalb liegt.',
    hints: [
      { barIndex: 4, text: 'Bar 5 erreicht nur das bisherige Hoch der Flagge – ein Ausbruch braucht ein Hoch darüber.' },
    ],
    sourceAnchors: ['Kapitel 9 · Erst der gescheiterte Ausbruch öffnet die Gegenthese'],
  },
  {
    ...draft,
    id: 'practice.c04.signal.second-test',
    title: 'Der zweite Test des Tiefs',
    unitId: 'brooks-trends.chapter-10',
    lessonIds: ['brooks-trends.chapter-10.lesson-01'],
    prompt: 'Ein Markt fällt, springt zurück und läuft erneut zum Tief. Tippe auf den Bar, der das frühere Tief ein zweites Mal testet, dort hält und bullisch schließt.',
    bars: bars(
      [106, 106.4, 104.2, 104.6], [104.6, 105, 102.4, 102.8], [102.8, 103.2, 100.4, 100.8], [100.8, 101.2, 98, 98.6],
      [98.6, 101.6, 98.4, 101.2], [101.2, 102.4, 99.8, 100.2], [98.8, 100.6, 98.2, 100.2], [100.2, 102.8, 100, 102.4],
    ),
    targetBarIndex: 6,
    rule: 'second-test',
    explanation: 'Bar 7 kehrt nach dem Rücklauf in den Bereich des Tiefs von Bar 4 zurück, unterschreitet es nicht und schließt bullisch. Der Markt hat das Preisgebiet ein zweites Mal geprüft; das liefert mehr Information als der erste Versuch – wenn Ort und Folgereaktion passen.',
    retryHint: 'Suche den Bar, der nach dem Rücksprung noch einmal an das tiefste Tief heranläuft, es hält und bullisch schließt.',
    hints: [
      { barIndex: 4, text: 'Bar 5 ist der erste Rücksprung direkt am Tief, noch kein zweiter Versuch nach einem Rücklauf.' },
    ],
    sourceAnchors: ['Kapitel 10 · Warum ein zweiter Versuch Gewicht hat'],
  },
];
