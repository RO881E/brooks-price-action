/*
 * Bar-Album (Stufe 3): Sammelkarten zu Bar-Formen, die in Lektionen vorkommen. Die
 * Bilder sind eigene, schematische Bars (keine Buchabbildungen, keine echten Kurse);
 * die Beschreibung ist die vorhandene Glossar-Definition des Begriffs. Eine Karte wird
 * sichtbar freigeschaltet, sobald die zugeordnete Lektion abgeschlossen ist – nichts
 * anderes schaltet Karten frei.
 */

/** Ein Bar als [Eröffnung, Hoch, Tief, Schluss] auf einer frei gewählten Skala. */
export type AlbumBar = readonly [open: number, high: number, low: number, close: number];

export interface AlbumEntry {
  /** Stabil; nie umbenennen oder wiederverwenden. */
  id: string;
  /** Begriff aus dem Glossar (`glossaryEntries[].term`) – liefert die Beschreibung. */
  term: string;
  /** Lektion, deren Abschluss die Karte freischaltet. */
  lessonId: string;
  /** Kurze Bildbeschreibung für Screenreader (nur was zu sehen ist, keine Lehre). */
  look: string;
  bars: readonly AlbumBar[];
  /** Index des Bars, um den es geht (wird hervorgehoben). */
  focus: number;
  /** Optionale waagerechte Referenzlinie (z. B. alter Rand). */
  level?: number;
}

export const barAlbum: readonly AlbumEntry[] = [
  {
    id: 'album.trendbar',
    term: 'Trendbar',
    lessonId: 'price-action-trends.chapter-02.lesson-04',
    look: 'Zwei kleine Bars, dann ein großer Bar nach oben mit kurzen Schatten.',
    bars: [[50, 52, 49, 51], [51, 53, 50, 52], [52, 64, 51.5, 63.5]],
    focus: 2,
  },
  {
    id: 'album.doji',
    term: 'Doji',
    lessonId: 'price-action-trends.chapter-02.lesson-12',
    look: 'Zwei Bars nach oben, dann ein Bar mit sehr kleinem Körper und langen Schatten.',
    bars: [[50, 56, 49, 55], [55, 60, 54, 59], [59, 63, 55, 59.4]],
    focus: 2,
  },
  {
    id: 'album.inside-bar',
    term: 'Inside-Bar',
    lessonId: 'price-action-trends.chapter-04.lesson-10',
    look: 'Ein großer Bar, danach ein kleinerer Bar, der ganz innerhalb der Spanne des ersten liegt.',
    bars: [[50, 62, 48, 60], [55, 59, 52, 57]],
    focus: 1,
  },
  {
    id: 'album.ii-iii',
    term: 'ii / iii',
    lessonId: 'price-action-trends.chapter-04.lesson-11',
    look: 'Ein großer Bar, danach drei immer kleinere Bars, jeder innerhalb des vorherigen.',
    bars: [[48, 66, 46, 64], [56, 62, 50, 58], [55, 59, 52, 57], [56, 58, 54, 55.5]],
    focus: 3,
  },
  {
    id: 'album.ioi',
    term: 'ioi',
    lessonId: 'price-action-trends.chapter-04.lesson-12',
    look: 'Ein großer Bar, ein kleiner darin, ein umfassender größerer Bar, dann wieder ein kleiner darin.',
    bars: [[50, 62, 46, 60], [54, 60, 50, 57], [50, 64, 44, 62], [54, 60, 48, 56]],
    focus: 3,
  },
  {
    id: 'album.outside-bar',
    term: 'Outside-Bar',
    lessonId: 'price-action-trends.chapter-04.lesson-13',
    look: 'Ein kleiner Bar, danach ein größerer Bar, der dessen Hoch und Tief überragt.',
    bars: [[52, 58, 50, 56], [51, 62, 46, 60]],
    focus: 1,
  },
  {
    id: 'album.reversal-bar',
    term: 'Reversal-Bar',
    lessonId: 'price-action-trends.chapter-04.lesson-07',
    look: 'Drei Bars abwärts, dann ein Bar mit langem unteren Schatten und Schluss nahe dem Hoch.',
    bars: [[72, 73, 68, 69], [69, 70, 64, 65], [65, 66, 59, 60], [60, 61, 52, 60.5]],
    focus: 3,
  },
  {
    id: 'album.zwei-bar-reversal',
    term: 'Zwei-Bar-Reversal',
    lessonId: 'price-action-trends.chapter-04.lesson-08',
    look: 'Ein großer Bar nach unten, direkt danach ein großer Bar nach oben, der fast bis zum Anfang zurückreicht.',
    bars: [[66, 67, 58, 59], [59, 68, 58.5, 66.5]],
    focus: 1,
  },
  {
    id: 'album.drei-bar-reversal',
    term: 'Drei-Bar-Reversal',
    lessonId: 'price-action-trends.chapter-04.lesson-09',
    look: 'Ein großer Bar nach unten, ein kleiner Bar als Pause, dann ein großer Bar nach oben.',
    bars: [[66, 67, 58, 59], [59, 60, 57, 58.5], [58.5, 68, 58, 67]],
    focus: 2,
  },
  {
    id: 'album.klimax',
    term: 'Klimax',
    lessonId: 'price-action-trends.chapter-02.lesson-08',
    look: 'Fünf immer größere Bars nach oben, danach ein kleiner Bar als erste Pause.',
    bars: [[40, 44, 39, 43], [43, 49, 42, 48], [48, 55, 47, 54], [54, 63, 53, 62], [62, 74, 61, 73], [73, 76, 72, 74.5]],
    focus: 5,
  },
  {
    id: 'album.test',
    term: 'Test',
    lessonId: 'price-action-trends.chapter-03.lesson-05',
    look: 'Ein Ausbruch über eine waagerechte Linie, ein Rücklauf bis nahe an die Linie, dann ein Bar nach oben.',
    bars: [[52, 60, 50, 58], [58, 60, 51, 53], [57, 68, 56, 67], [67, 68, 59.5, 62], [62, 70, 60, 69]],
    focus: 4,
    level: 60,
  },
  {
    id: 'album.fehlausbruch',
    term: 'Fehlausbruch',
    lessonId: 'price-action-trends.chapter-01.lesson-07',
    look: 'Ein Bar über eine waagerechte Linie, dann fällt der Kurs zurück unter die Linie.',
    bars: [[52, 60, 50, 58], [57, 64, 56, 62], [62, 63, 54, 55], [55, 56, 50, 51]],
    focus: 1,
    level: 60,
  },
];
