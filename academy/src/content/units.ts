import type { Course, CourseUnit, Lesson } from './types';

/**
 * Einzige Liste der Kurseinheiten in Kursreihenfolge (F-12). Jede Einheit lädt
 * ihre vollständigen Lektionen als eigenen Chunk. Die sofort verfügbare
 * Gliederung (`virtual:wqt-course-outline`, siehe `build/courseOutlinePlugin.ts`)
 * wird beim Build aus genau diesen Loadern erzeugt – eine zweite, von Hand
 * gepflegte Liste gibt es nicht.
 */
export interface UnitDefinition extends Omit<CourseUnit, 'lessons'> {
  load: () => Promise<Lesson[]>;
}

export const courseInfo: Omit<Course, 'units'> = {
  id: 'price-action-trends',
  eyebrow: 'Teil 1 von 3 · Price Action',
  title: 'Price Action: Trends',
  subtitle:
    'Lerne, Kursbewegungen als fortlaufende Auktion zu lesen – vom einzelnen Bar bis zum vollständigen Trendtag.',
  sourceOrderNotice:
    'Der Lernpfad folgt der Reihenfolge der Kapitel. Kleine Lektionen ersetzen keine Inhalte, sondern machen sie schrittweise zugänglich.',
};

export const unitDefinitions: UnitDefinition[] = [
  {
    id: 'price-action-trends.introduction',
    order: 1,
    kind: 'introduction',
    label: 'Einleitung',
    title: 'Wie Price Action gedacht wird',
    description:
      'Marktlogik, Wahrscheinlichkeit, Disziplin, Stärkezeichen und die grundlegende High-/Low-Zählung in der Reihenfolge der Quelle.',
    estimatedLessonCount: 22,
    load: () =>
      import('./courses/price-action-trends/introduction').then((module) => module.introductionLessons),
  },
  {
    id: 'price-action-trends.part-01-introduction',
    order: 2,
    kind: 'part-introduction',
    label: 'Teil I · Price Action',
    title: 'Price Action als Entscheidungsmodell',
    description:
      'Vom einzelnen Tick über Trend- und Range-Entscheidungen bis zu institutioneller Ausführung, HFT, Pullback-Zählung und einer konkreten Trainingsmethode.',
    estimatedLessonCount: 24,
    load: () =>
      import('./courses/price-action-trends/part-01').then((module) => module.partOneLessons),
  },
  {
    id: 'price-action-trends.chapter-01',
    order: 3,
    kind: 'chapter',
    label: 'Kapitel 1',
    title: 'Das Spektrum von Trend bis Range',
    description:
      'Extremzustände, Marktträgheit, zweibeinige Bewegungen und Trendwiederaufnahme am zentralen Chartfall.',
    estimatedLessonCount: 8,
    load: () =>
      import('./courses/price-action-trends/chapter-01').then((module) => module.chapterOneLessons),
  },
  {
    id: 'price-action-trends.chapter-02',
    order: 4,
    kind: 'chapter',
    label: 'Kapitel 2',
    title: 'Trendbars, Dojis und Klimaxe',
    description:
      'Kontrolle im einzelnen Bar, Follow-through, kumulativer Druck, Klimaxlogik und alle sechs Chartfälle in der Reihenfolge der Kapitel.',
    estimatedLessonCount: 20,
    load: () =>
      import('./courses/price-action-trends/chapter-02').then((module) => module.chapterTwoLessons),
  },
  {
    id: 'price-action-trends.chapter-03',
    order: 5,
    kind: 'chapter',
    label: 'Kapitel 3',
    title: 'Breakouts, Ranges, Tests und Umkehrbewegungen',
    description:
      'Vom Breakout über Spike-and-Channel und Testzonen bis zur Umkehrlogik – einschließlich des vollständigen Chartfalls 3.1.',
    estimatedLessonCount: 25,
    load: () =>
      import('./courses/price-action-trends/chapter-03').then((module) => module.chapterThreeLessons),
  },
  {
    id: 'price-action-trends.chapter-04',
    order: 6,
    kind: 'chapter',
    label: 'Kapitel 4',
    title: 'Signal-Bars, Entry-Bars, Setups und Kerzenmuster',
    description:
      'Vom möglichen Setup über Auslösung und Follow-through bis zum vollständigen Chartfall – mit den Signalfolgen und Filtern des Kapitels.',
    estimatedLessonCount: 25,
    load: () =>
      import('./courses/price-action-trends/chapter-04').then((module) => module.chapterFourLessons),
  },
  {
    id: 'price-action-trends.chapter-05',
    order: 7,
    kind: 'chapter',
    label: 'Kapitel 5',
    title: 'Reversal-Bars im Chartkontext',
    description:
      'Bullische und bärische Reversal-Bars, Mit-Trend- und Gegentrend-Setups, Überlappung und Warnzeichen – mit den drei Chartfällen 5.1 bis 5.3.',
    estimatedLessonCount: 25,
    load: () =>
      import('./courses/price-action-trends/chapter-05').then((module) => module.chapterFiveLessons),
  },
  {
    id: 'price-action-trends.chapter-06',
    order: 8,
    kind: 'chapter',
    label: 'Kapitel 6',
    title: 'Weitere Signal-Bars und ihre Marktrolle',
    description:
      'Starke Trendbars, Zwei- und Drei-Bar-Umkehr, Inside-/Outside-Bars, Mikro-Doppel, Fehlsignale und alle 19 Chartfälle des Kapitels.',
    estimatedLessonCount: 40,
    load: () =>
      import('./courses/price-action-trends/chapter-06').then((module) => module.chapterSixLessons),
  },
  {
    id: 'price-action-trends.chapter-07',
    order: 9,
    kind: 'chapter',
    label: 'Kapitel 7',
    title: 'Outside Bars im Chartkontext',
    description:
      'Outside-Bars als Breakout, Umkehr oder Falle lesen – mit den vier Chartfällen 7.1 bis 7.4 der Reihe nach.',
    estimatedLessonCount: 24,
    load: () =>
      import('./courses/price-action-trends/chapter-07').then((module) => module.chapterSevenLessons),
  },
  {
    id: 'price-action-trends.chapter-08',
    order: 10,
    kind: 'chapter',
    label: 'Kapitel 8',
    title: 'Warum der Bar-Schluss zählt',
    description:
      'Vorzeitige Signale, späte Schlusswechsel, Stop-Disziplin und der Vergleich der Zeitebenen in Chartfall 8.1.',
    estimatedLessonCount: 12,
    load: () =>
      import('./courses/price-action-trends/chapter-08').then((module) => module.chapterEightLessons),
  },
  {
    id: 'price-action-trends.chapter-09',
    order: 11,
    kind: 'chapter',
    label: 'Kapitel 9',
    title: 'ETFs und inverse Charts',
    description:
      'Alternative Chartansichten, SPY und Emini, die SDS-Gegenprobe sowie die beiden Chartfälle zu Vergleich und Eröffnungslücke.',
    estimatedLessonCount: 10,
    load: () =>
      import('./courses/price-action-trends/chapter-09').then((module) => module.chapterNineLessons),
  },
  {
    id: 'price-action-trends.chapter-10',
    order: 12,
    kind: 'chapter',
    label: 'Kapitel 10',
    title: 'Zweite Einstiege im Kontext',
    description:
      'Erste und zweite Umkehrversuche, Preisfallen, Gegentrend-Momentum sowie beide Chartfälle mit der vertieften Besprechung von Fall 10.2.',
    estimatedLessonCount: 23,
    load: () =>
      import('./courses/price-action-trends/chapter-10').then((module) => module.chapterTenLessons),
  },
  {
    id: 'price-action-trends.chapter-11', order: 13, kind: 'chapter', label: 'Kapitel 11',
    title: 'Verpasste und späte Einstiege',
    description: 'Späte Trendteilnahme, Haltefrage, Stop-Abstand, Positionsgröße und Aufstocken – mit einem Chartfall und vertiefter Kanal- und Durchschnittslogik.',
    estimatedLessonCount: 16,
    load: () => import('./courses/price-action-trends/chapter-11').then((module) => module.chapterElevenLessons),
  },
  {
    id: 'price-action-trends.chapter-12', order: 14, kind: 'chapter', label: 'Kapitel 12',
    title: 'Wie Chartmuster sich entwickeln',
    description: 'Erweiterungen, Fehlschläge, festgesetzte Trader und Richtungswechsel – mit zwei Chartfällen, vertiefter Tagesentwicklung und einem Beobachtungsplan.',
    estimatedLessonCount: 21,
    load: () => import('./courses/price-action-trends/chapter-12').then((module) => module.chapterTwelveLessons),
  },
  {
    id: 'price-action-trends.chapter-13', order: 15, kind: 'chapter', label: 'Kapitel 13',
    title: 'Trendlinien und ihre Tests',
    description: 'Swinglinien, Gegenbrüche, Extremtests und parallele Kanalgrenzen – mit sieben Chartfällen, vertiefter Einordnung und einem klaren Beobachtungsplan.',
    estimatedLessonCount: 36,
    load: () => import('./courses/price-action-trends/chapter-13').then((module) => module.chapterThirteenLessons),
  },
  {
    id: 'price-action-trends.chapter-14', order: 16, kind: 'chapter', label: 'Kapitel 14',
    title: 'Kanalgrenzen und Überschreitungen',
    description: 'Parallele und direkte Kanalgrenzen, Keile, Fehlausbrüche und Beschleunigung – mit drei Chartfällen und einem überprüfbaren Beobachtungsplan.',
    estimatedLessonCount: 28,
    load: () => import('./courses/price-action-trends/chapter-14').then((module) => module.chapterFourteenLessons),
  },
  {
    id: 'price-action-trends.chapter-15', order: 17, kind: 'chapter', label: 'Kapitel 15',
    title: 'Kanäle im Marktkontext',
    description: 'Enge und breite Kanäle, Kontextwechsel, Zielprojektionen, Ausbruchsfehlschläge und Orderlogik – mit acht Chartfällen und einem überprüfbaren Beobachtungsplan.',
    estimatedLessonCount: 52,
    load: () => import('./courses/price-action-trends/chapter-15').then((module) => module.chapterFifteenLessons),
  },
  {
    id: 'price-action-trends.chapter-16', order: 18, kind: 'chapter', label: 'Kapitel 16',
    title: 'Mikrokanäle und erste Rückläufe',
    description: 'Mikro-Trendlinien, erste Gegenversuche, doppelte Fehlschläge und Kontextwechsel – mit sechs Chartfällen, Zeitebenenvergleich und einem überprüfbaren Replayplan.',
    estimatedLessonCount: 46,
    load: () => import('./courses/price-action-trends/chapter-16').then((module) => module.chapterSixteenLessons),
  },
  {
    id: 'price-action-trends.chapter-17', order: 19, kind: 'chapter', label: 'Kapitel 17',
    title: 'Horizontale Linien und wichtige Preisbereiche',
    description: 'Swingpreise, Fehlausbrüche, zweite Umkehrversuche und Ausbruchspullbacks – mit zwei Chartfällen zu Range, Trend und Kontextwechsel sowie einem eigenen Level-Protokoll.',
    estimatedLessonCount: 28,
    load: () => import('./courses/price-action-trends/chapter-17').then((module) => module.chapterSeventeenLessons),
  },
  {
    id: 'price-action-trends.chapter-18', order: 20, kind: 'chapter', label: 'Kapitel 18',
    title: 'Einen Trend handeln: Einstieg und Positionsführung',
    description: 'Stop-, Limit- und Market-Einstiege, gemeinsames Risikobudget, Teilgewinne und strukturelle Stop-Nachführung – mit einem ausführlichen Tagesfall von der Eröffnung bis zum Rangeübergang.',
    estimatedLessonCount: 48,
    load: () => import('./courses/price-action-trends/chapter-18').then((module) => module.chapterEighteenLessons),
  },
];
