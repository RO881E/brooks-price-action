/*
 * C-03: Redaktionell geprüfte Themenkarte (Stand: Entwurf zur fachlichen Prüfung).
 *
 * Eine kleine Zuordnung stabiler Brooks-Themen-IDs zu bereits veröffentlichten
 * Lehrstellen (Lektion + vorhandener Quellenanker), Lektionsfragen und
 * freigegebenen Trainerfällen. Sie erfindet keine Marktlehre: Jede Zuordnung
 * verweist auf Bestehendes; Themen-Titel und Kurztexte sind nur Beschriftungen.
 *
 * - `teaching`: Lehrstellen des Themas. `anchor` ist ein vorhandener
 *   `sourceAnchors`-Eintrag der Lektion.
 * - `questionIds`: Fragen aus genau diesen Lektionen. Nicht jede Frage einer
 *   Lektion muss zugeordnet sein; zweifelhafte bleiben offen (siehe
 *   `academy/docs/C03_THEMENKARTE.md`).
 * - `caseIds`: nur freigegebene Fälle des gewöhnlichen Trainers (C-01), deren
 *   Lektionen sich mit den Lehrstellen des Themas überschneiden.
 * - `transferCaseIds`: freigegebene Transferfälle (C-02) mit gemeinsamer Lektion.
 *   Sie werden bei „Nach Thema üben“ nur als Hinweis mit Sprung in die
 *   Transferprüfung gezeigt – nie im gewöhnlichen Trainer geöffnet.
 *
 * Diese Karte ändert weder UI noch XP, Review-Plan oder Datenmodell. Sie wird erst
 * von F-27 („Nach Thema üben“) gelesen. Mehrfachzuordnung ist erlaubt.
 * Validierung: `src/features/topicMapValidation.ts`.
 */

export interface TopicTeachingRef {
  /** Veröffentlichte Lektion, die das Thema lehrt. */
  lessonId: string;
  /** Ein vorhandener Quellenanker dieser Lektion. */
  anchor: string;
}

export interface BrooksTopic {
  /** Stabil, `brooks-topic.<name>`; nie umbenennen oder wiederverwenden. */
  id: string;
  title: string;
  /** Kurze, eigenformulierte Beschriftung – keine neue Lehre. */
  summary: string;
  teaching: TopicTeachingRef[];
  questionIds: string[];
  caseIds: string[];
  /** Freigegebene Transferfälle (C-02); nur Hinweis auf die Transferprüfung. */
  transferCaseIds?: string[];
}

export const brooksTopics: readonly BrooksTopic[] = [
  {
    id: 'brooks-topic.trend-strength',
    title: "Trendstärke und Trendbars",
    summary: "Wie stark eine Bewegung ist, zeigen Größe, Schluss und Anschluss der Bars – und wann ungewöhnliche Größe eher warnt.",
    teaching: [
      { lessonId: 'brooks-trends.chapter-01.lesson-04', anchor: "Starker erster Abwärtstrend bis zum ersten Wendepunkt" },
      { lessonId: 'brooks-trends.chapter-02.lesson-01', anchor: "Trend oder Trading Range als grundlegende Marktzustände" },
      { lessonId: 'brooks-trends.chapter-02.lesson-04', anchor: "Körpergröße als relatives Stärkezeichen" },
      { lessonId: 'brooks-trends.chapter-02.lesson-08', anchor: "Trendbar als Bestandteil eines Klimax" },
      { lessonId: 'brooks-trends.chapter-02.lesson-09', anchor: "Moderater Körper relativ zu den letzten Bars" },
      { lessonId: 'brooks-trends.chapter-02.lesson-10', anchor: "Bullische Körper in Range oder Bärentrend als Kaufdruck" },
      { lessonId: 'brooks-trends.chapter-05.lesson-06', anchor: "Starke Trendrichtung als Kontextvorteil" },
      { lessonId: 'brooks-trends.chapter-06.lesson-02', anchor: "Strong Trend Bar" },
      { lessonId: 'brooks-trends.chapter-06.lesson-14', anchor: "Ungewöhnliche Größe spät im Trend" },
      { lessonId: 'brooks-trends.chapter-06.lesson-15', anchor: "Mit-Trend-Einstieg nach Pullback" },
    ],
    questionIds: [
      'chapter-01-04-question',
      'chapter-02-01-question',
      'chapter-02-04-question',
      'chapter-02-08-question',
      'chapter-02-09-question',
      'chapter-02-10-question',
      'chapter-05-06-question',
      'chapter-06-02-question',
      'chapter-06-14-question',
      'chapter-06-15-question',
    ],
    caseIds: [],
    transferCaseIds: ['bar-case.c02.chapter-01.tight-pause-in-trend', 'bar-case.c02.chapter-02.climax-is-not-reversal'],
  },
  {
    id: 'brooks-topic.range-and-inertia',
    title: "Trading Range und Marktträgheit",
    summary: "Zwischen Trend und Range gibt es ein Spektrum; viele Ausbruchs- und Umkehrversuche scheitern zunächst an der Trägheit des Marktes.",
    teaching: [
      { lessonId: 'brooks-trends.chapter-01.lesson-01', anchor: "Extremer Trend und extreme Trading Range als Endpunkte" },
      { lessonId: 'brooks-trends.chapter-01.lesson-02', anchor: "Kleinere Ranges innerhalb von Trends" },
      { lessonId: 'brooks-trends.chapter-01.lesson-03', anchor: "Marktverhalten besitzt Trägheit" },
      { lessonId: 'brooks-trends.chapter-03.lesson-03', anchor: "Kanalbeginn als Keim der späteren Trading Range" },
      { lessonId: 'brooks-trends.chapter-03.lesson-07', anchor: "Mehrheit der Umkehrversuche führt zunächst in eine Range" },
      { lessonId: 'brooks-trends.chapter-05.lesson-09', anchor: "Überlappung mehrerer Bars" },
      { lessonId: 'brooks-trends.chapter-05.lesson-11', anchor: "Große Gesamtspanne bei kleinem Körper" },
      { lessonId: 'brooks-trends.chapter-06.lesson-06', anchor: "Drei oder mehr überlappende Bars" },
      { lessonId: 'brooks-trends.chapter-07.lesson-06', anchor: "Outside Bars · Mitte einer Trading Range" },
    ],
    questionIds: [
      'chapter-01-01-question',
      'chapter-01-02-question',
      'chapter-01-03-question',
      'chapter-03-03-question',
      'chapter-03-07-question',
      'chapter-05-09-question',
      'chapter-05-11-question',
      'chapter-06-06-question',
      'chapter-07-06-question',
    ],
    caseIds: ['bar-case.chapter-01.range-high-test', 'bar-case.chapter-07.outside-in-range'],
    transferCaseIds: ['bar-case.c02.chapter-01.tight-pause-in-trend'],
  },
  {
    id: 'brooks-topic.breakout-and-test',
    title: "Ausbruch, Follow-through und Test",
    summary: "Ein Ausbruch beginnt als Kontrollwechsel; ob er trägt, zeigen Anschluss, Rücklauf und der Test einer Preiszone.",
    teaching: [
      { lessonId: 'brooks-trends.chapter-01.lesson-07', anchor: "Eröffnungsausbruch über das Hoch des Vortags" },
      { lessonId: 'brooks-trends.chapter-02.lesson-05', anchor: "Ausbleibende Gegenseite als Ursache schneller Preisbewegung" },
      { lessonId: 'brooks-trends.chapter-02.lesson-06', anchor: "Kräftiger Gegen-Spike innerhalb eines bestehenden Trends" },
      { lessonId: 'brooks-trends.chapter-03.lesson-01', anchor: "Trendphase und zweiseitiger Handel als Grundzustände" },
      { lessonId: 'brooks-trends.chapter-03.lesson-02', anchor: "Pullbacks nach der ersten Ausbruchsphase" },
      { lessonId: 'brooks-trends.chapter-03.lesson-05', anchor: "Test als Rückkehr zu einer relevanten Preiszone" },
      { lessonId: 'brooks-trends.chapter-03.lesson-09', anchor: "Test und Fehlausbruch unter dem Vortagestief" },
      { lessonId: 'brooks-trends.chapter-03.lesson-10', anchor: "Bar 1 als Signalbereich des frühen Selloffs" },
      { lessonId: 'brooks-trends.chapter-06.lesson-17', anchor: "Inside-Bar nach großem Ausbruch" },
    ],
    questionIds: [
      'chapter-02-05-question',
      'chapter-02-06-question',
      'chapter-03-01-question',
      'chapter-03-02-question',
      'chapter-03-05-question',
      'chapter-03-09-question',
      'chapter-03-10-question',
      'chapter-06-17-question',
    ],
    caseIds: ['bar-case.chapter-01.range-high-test', 'bar-case.chapter-02.breakout-follow-through', 'bar-case.chapter-03.failed-low-test'],
    transferCaseIds: ['bar-case.c02.chapter-03.breakout-test-holds'],
  },
  {
    id: 'brooks-topic.signals-and-orders',
    title: "Setup, Signal-Bar und Order",
    summary: "Ein Setup ist zunächst nur eine Möglichkeit: Erst die Auslösung macht daraus ein Signal, und eine nicht ausgelöste Order wird gestrichen.",
    teaching: [
      { lessonId: 'brooks-trends.chapter-04.lesson-01', anchor: "Setup als ein- oder mehrbarige Grundlage einer möglichen Order" },
      { lessonId: 'brooks-trends.chapter-04.lesson-02', anchor: "Signal-Bar als rückblickende Bezeichnung nach ausgelöstem Einstieg" },
      { lessonId: 'brooks-trends.chapter-04.lesson-03', anchor: "Buy-Stops über und Sell-Stops unter dem vorherigen Bar" },
      { lessonId: 'brooks-trends.chapter-04.lesson-06', anchor: "Starker Bull- oder Bear-Trendbar am Ende eines Spikes als Fortsetzungssignal" },
      { lessonId: 'brooks-trends.chapter-04.lesson-19', anchor: "Einstieg nur bei Signal-Bar als Trendbar in Trade-Richtung" },
      { lessonId: 'brooks-trends.chapter-04.lesson-20', anchor: "Stärkere Signal-Bars für Trendwenden als für Pullbacks und Range-Trades" },
      { lessonId: 'brooks-trends.chapter-04.lesson-21', anchor: "Mehrheit potenzieller Signal-Bars führt nie zu einem Einstieg" },
      { lessonId: 'brooks-trends.chapter-04.lesson-23', anchor: "Signal-Bar sieht vor seinem Schluss zeitweise ideal aus" },
      { lessonId: 'brooks-trends.chapter-05.lesson-05', anchor: "Möglicher Setup-Bar vor dem Einstieg" },
      { lessonId: 'brooks-trends.chapter-06.lesson-01', anchor: "Signal-Bar und Setup-Bar" },
    ],
    questionIds: [
      'chapter-04-01-question',
      'chapter-04-02-question',
      'chapter-04-03-question',
      'chapter-04-06-question',
      'chapter-04-19-question',
      'chapter-04-20-question',
      'chapter-04-21-question',
      'chapter-04-23-question',
      'chapter-05-05-question',
      'chapter-06-01-question',
    ],
    caseIds: ['bar-case.chapter-04.signal-and-entry', 'bar-case.chapter-06.inside-pause'],
    transferCaseIds: ['bar-case.c02.chapter-04.unfilled-order-cancelled'],
  },
  {
    id: 'brooks-topic.reversal-in-context',
    title: "Reversal-Bars im Kontext",
    summary: "Eine Reversal-Bar ist ein Versuch, keine Trendwende – Kontext, Struktur und Beweislast entscheiden, ob er trägt.",
    teaching: [
      { lessonId: 'brooks-trends.chapter-04.lesson-07', anchor: "Ein-Bar-Reversal als mögliche Umkehrformation" },
      { lessonId: 'brooks-trends.chapter-04.lesson-08', anchor: "Zwei-Bar-Reversal als Umkehrformation" },
      { lessonId: 'brooks-trends.chapter-04.lesson-09', anchor: "Drei-Bar-Reversal als Umkehrformation" },
      { lessonId: 'brooks-trends.chapter-05.lesson-01', anchor: "Bar kehrt eine Eigenschaft der vorangegangenen Bewegung um" },
      { lessonId: 'brooks-trends.chapter-05.lesson-02', anchor: "Bullischer Körper oder Schluss über der Barmitte" },
      { lessonId: 'brooks-trends.chapter-05.lesson-03', anchor: "Bärischer Körper oder Schluss unter der Barmitte" },
      { lessonId: 'brooks-trends.chapter-05.lesson-04', anchor: "Schluss relativ zu den Schlüssen mehrerer Vorbars" },
      { lessonId: 'brooks-trends.chapter-05.lesson-07', anchor: "Trendbruch vor größerer Gegen-Trend-These" },
      { lessonId: 'brooks-trends.chapter-05.lesson-12', anchor: "Oberer Schatten am bullischen Reversal-Bar" },
      { lessonId: 'brooks-trends.chapter-05.lesson-15', anchor: "Langer unterer Schatten mit kleinem Körper" },
      { lessonId: 'brooks-trends.chapter-06.lesson-03', anchor: "Beweislast gegen einen starken Trend" },
      { lessonId: 'brooks-trends.chapter-06.lesson-04', anchor: "Zwei-Bar-Reversal" },
      { lessonId: 'brooks-trends.chapter-03.lesson-07', anchor: "Mehrheit der Umkehrversuche führt zunächst in eine Range" },
    ],
    questionIds: [
      'chapter-04-07-question',
      'chapter-04-08-question',
      'chapter-04-09-question',
      'chapter-05-01-question',
      'chapter-05-02-question',
      'chapter-05-03-question',
      'chapter-05-04-question',
      'chapter-05-07-question',
      'chapter-05-12-question',
      'chapter-05-15-question',
      'chapter-06-03-question',
      'chapter-06-04-question',
      'chapter-03-07-question',
    ],
    caseIds: ['bar-case.chapter-05.range-top-reversal'],
    transferCaseIds: ['bar-case.c02.chapter-05.counter-trend-needs-evidence'],
  },
  {
    id: 'brooks-topic.inside-and-outside',
    title: "Inside- und Outside-Bars",
    summary: "Inside-Bars, ii, ioi und Outside-Bars zeigen Kompression und Ausweitung – ihre Aussage hängt von Ort, Größe und Anschluss ab.",
    teaching: [
      { lessonId: 'brooks-trends.chapter-04.lesson-10', anchor: "Kleiner Bar als mögliches Signal" },
      { lessonId: 'brooks-trends.chapter-04.lesson-11', anchor: "ii als Folge zweier Inside-Bars" },
      { lessonId: 'brooks-trends.chapter-04.lesson-12', anchor: "ioi als Inside-Outside-Inside-Folge" },
      { lessonId: 'brooks-trends.chapter-04.lesson-13', anchor: "Outside-Bar überschreitet Hoch und Tief des Vorgängers" },
      { lessonId: 'brooks-trends.chapter-06.lesson-08', anchor: "Inside-Bar und Gleichstand der Extreme" },
      { lessonId: 'brooks-trends.chapter-06.lesson-09', anchor: "ii und iii" },
      { lessonId: 'brooks-trends.chapter-06.lesson-10', anchor: "Inside–Outside–Inside" },
      { lessonId: 'brooks-trends.chapter-07.lesson-01', anchor: "Outside Bars · Definition" },
      { lessonId: 'brooks-trends.chapter-07.lesson-02', anchor: "Outside Bars · Kontext" },
      { lessonId: 'brooks-trends.chapter-07.lesson-04', anchor: "Outside Bars · vorheriger Signal-Bar" },
      { lessonId: 'brooks-trends.chapter-07.lesson-07', anchor: "Outside Bars · ioi" },
      { lessonId: 'brooks-trends.chapter-07.lesson-11', anchor: "Outside Bars · Unsicherheit" },
      { lessonId: 'brooks-trends.chapter-06.lesson-17', anchor: "Inside-Bar nach großem Ausbruch" },
      { lessonId: 'brooks-trends.chapter-07.lesson-05', anchor: "Outside Bars · zweiter Einstieg" },
    ],
    questionIds: [
      'chapter-04-10-question',
      'chapter-04-11-question',
      'chapter-04-12-question',
      'chapter-04-13-question',
      'chapter-06-08-question',
      'chapter-06-09-question',
      'chapter-06-10-question',
      'chapter-07-01-question',
      'chapter-07-02-question',
      'chapter-07-04-question',
      'chapter-07-07-question',
      'chapter-07-11-question',
      'chapter-06-17-question',
      'chapter-07-05-question',
    ],
    caseIds: ['bar-case.chapter-06.inside-pause', 'bar-case.chapter-07.outside-in-range'],
  },
  {
    id: 'brooks-topic.bar-close-and-stops',
    title: "Bar-Schluss und Schutz",
    summary: "Ein Bar kann bis zum Schluss kippen; deshalb zählt der Schluss – und ein zu enger Stop kann einen guten Trade beenden.",
    teaching: [
      { lessonId: 'brooks-trends.chapter-05.lesson-14', anchor: "Vorläufiger Reversal-Eindruck während des Bars" },
      { lessonId: 'brooks-trends.chapter-08.lesson-01', anchor: "Einstieg vor dem Bar-Schluss" },
      { lessonId: 'brooks-trends.chapter-08.lesson-02', anchor: "Tagesbar während seiner Bildung" },
      { lessonId: 'brooks-trends.chapter-08.lesson-03', anchor: "Kapitel 8 · erster häufiger Fehler" },
      { lessonId: 'brooks-trends.chapter-08.lesson-04', anchor: "Kapitel 8 · erster häufiger Fehler" },
      { lessonId: 'brooks-trends.chapter-08.lesson-05', anchor: "Kapitel 8 · zweiter häufiger Fehler" },
      { lessonId: 'brooks-trends.chapter-08.lesson-06', anchor: "Kapitel 8 · Schluss des Entry-Bars" },
      { lessonId: 'brooks-trends.chapter-08.lesson-07', anchor: "Kapitel 8 · Schlusskurs in Liniencharts" },
      { lessonId: 'brooks-trends.chapter-08.lesson-09', anchor: "Abbildung 8.1 · Signal um Bar 11" },
    ],
    questionIds: [
      'chapter-05-14-question',
      'chapter-08-01-question',
      'chapter-08-02-question',
      'chapter-08-03-question',
      'chapter-08-04-question',
      'chapter-08-05-question',
      'chapter-08-06-question',
      'chapter-08-07-question',
      'chapter-08-09-question',
    ],
    caseIds: [],
  },
  {
    id: 'brooks-topic.second-entries',
    title: "Zweiter Versuch und zweiter Einstieg",
    summary: "Ein zweiter Versuch am selben Bereich hat mehr Gewicht als der erste – ist aber keine Garantie, und ein auffällig günstiger zweiter Preis warnt.",
    teaching: [
      { lessonId: 'brooks-trends.chapter-05.lesson-08', anchor: "Erster Kaufimpuls aus einem Tief" },
      { lessonId: 'brooks-trends.chapter-07.lesson-05', anchor: "Outside Bars · zweiter Einstieg" },
      { lessonId: 'brooks-trends.chapter-10.lesson-01', anchor: "Zweiter Umkehrversuch am Tief" },
      { lessonId: 'brooks-trends.chapter-10.lesson-02', anchor: "Vergleich erster und zweiter Entry" },
      { lessonId: 'brooks-trends.chapter-10.lesson-03', anchor: "Gleicher oder ungünstigerer zweiter Preis" },
      { lessonId: 'brooks-trends.chapter-10.lesson-04', anchor: "Frühere Entries auf kleinerer Zeitebene" },
      { lessonId: 'brooks-trends.chapter-10.lesson-05', anchor: "Mehrere kräftige Trendbars vor Gegen-Entry" },
    ],
    questionIds: [
      'chapter-05-08-question',
      'chapter-07-05-question',
      'chapter-10-01-question',
      'chapter-10-02-question',
      'chapter-10-03-question',
      'chapter-10-04-question',
      'chapter-10-05-question',
    ],
    caseIds: [],
    transferCaseIds: ['bar-case.c02.chapter-10.second-short-attempt'],
  },
  {
    id: 'brooks-topic.chart-views',
    title: "Darstellung wechseln: ETF, Index und inverse Charts",
    summary: "Eine zweite Ansicht – ETF, verwandter Index oder inverser Chart – kann ein Muster klären, ersetzt aber nicht die Analyse des Hauptcharts.",
    teaching: [
      { lessonId: 'brooks-trends.chapter-09.lesson-01', anchor: "Bar- und Linienchart" },
      { lessonId: 'brooks-trends.chapter-09.lesson-02', anchor: "Emini und SPY im Vergleich" },
      { lessonId: 'brooks-trends.chapter-09.lesson-03', anchor: "SDS als inverse Perspektive" },
      { lessonId: 'brooks-trends.chapter-09.lesson-04', anchor: "Bull Flag im Emini oder SPY" },
      { lessonId: 'brooks-trends.chapter-09.lesson-05', anchor: "Auf Ausbruch der möglichen Flagge warten" },
      { lessonId: 'brooks-trends.chapter-09.lesson-06', anchor: "Emini Nasdaq-100 und QQQ" },
      { lessonId: 'brooks-trends.chapter-09.lesson-07', anchor: "Kosten und Anpassungen eines ETF" },
    ],
    questionIds: [
      'chapter-09-01-question',
      'chapter-09-02-question',
      'chapter-09-03-question',
      'chapter-09-04-question',
      'chapter-09-05-question',
      'chapter-09-06-question',
      'chapter-09-07-question',
    ],
    caseIds: [],
  },
];
