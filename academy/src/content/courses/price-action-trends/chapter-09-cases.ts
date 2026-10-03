import { chapterNineLesson, type ChapterNineDraft } from './chapter-09-model';

// Die Abbildungen werden in ihrer Buchreihenfolge besprochen; Grafiken sind
// synthetische Lehrschemata mit eigenen Preisfolgen, keine Nachzeichnungen.
const drafts: ChapterNineDraft[] = [
  {
    number: 8, title: 'Fall 9.1: Emini und SPY lesen sich ähnlich',
    summary: 'Weil beide Märkte verwandt sind, wirkt ein Einzelbar auf SPY manchmal klarer.',
    section: 'Fall 9.1 · Emini und SPY',
    anchors: ['Fall 9.1 · obere und mittlere Ansicht', 'Ähnliche Bewegungsfolge von Emini und SPY', 'Feinere SPY-Preisschritte im Beispiel'],
    scenario: 'c09-figure-91-pair',
    paragraphs: [
      'Fall 9.1 stellt oben den Emini und in der Mitte SPY über dieselbe Handelsphase nebeneinander. Wichtig ist der gemeinsame Verlauf: Auf einen Richtungsabschnitt folgen in beiden Ansichten vergleichbare Pausen und Reaktionen. Dafür müssen weder die Zahlenwerte noch jeder kleine Bar übereinstimmen.',
      'Die feinere Preisunterteilung des SPY zeichnet im Beispiel manche Bar-Folge deutlicher. Zweifelst du im Emini an einer kleinen Form, kannst du prüfen, ob die parallele Reaktion im SPY deine Vermutung stützt oder schwächt. Gerade kleine Schatten und Schlüsse sehen je nach Darstellung anders aus.',
      'Lies das Bild in dieser Reihenfolge: erst Richtung und Ort im Emini, dann dieselbe Zeitstelle im SPY, zuletzt den nächsten Anschluss im Markt, den du handelst. Die eigene Grafik unten nutzt frei gewählte Werte und eine andere Folge; sie zeigt nur die Vergleichsmethode.',
    ],
    callout: 'Den ähnlichen Rhythmus vergleichen, nicht Kerzen oder Preiswerte gleichsetzen.',
    diagramTitle: 'Fall 9.1 · Ähnlicher Rhythmus auf getrennten Skalen',
    caption: 'Eigenes Beispiel mit zwei unabhängigen, normierten Preisreihen; ein Wendebereich erscheint im ETF etwas feiner aufgelöst.',
    observations: ['Richtungsabschnitte liegen zeitlich ähnlich.', 'Einzelne Körper und Schatten bleiben verschieden.', 'Die Zusatzansicht dient der Lesbarkeit, nicht dem Ausführungspreis.'],
    prompt: 'Was soll der SPY-Vergleich in Fall 9.1 vor allem zeigen?',
    answers: [['Dass ein verwandter Chart dieselbe Bewegung teilweise besser lesbar macht.', 'Richtig. Die Ähnlichkeit der Bewegung und die abweichende Detailzeichnung sind der Punkt.'], ['Dass beide Instrumente denselben absoluten Preis haben.', 'Die beiden Kursachsen sind verschieden.'], ['Dass jede SPY-Kerze mit der Emini-Kerze identisch sein muss.', 'Kleine Bars können in den Produkten unterschiedlich aussehen.']], correct: 0,
    takeaways: ['Zeitstellen und Bewegungsphasen gegenüberstellen.', 'Feinere Einzelbars können eine Deutung klären.', 'Stop und Einstieg weiterhin im eigenen Markt planen.'],
  },
  {
    number: 9, title: 'Fall 9.1: SDS hält die Gegenfrage offen',
    summary: 'Das dritte Bild stellt die Emini- und SPY-Lesart mit der inversen Seite auf die Probe.',
    section: 'Fall 9.1 · SDS',
    anchors: ['Fall 9.1 · untere Ansicht', 'SDS gegen SPY', 'Mögliche Neubewertung der Emini-These'],
    scenario: 'c09-figure-91-inverse',
    paragraphs: [
      'Unter Emini und SPY steht in Fall 9.1 die inverse SDS-Ansicht. Ihre Richtung läuft in der gezeigten Phase im Wesentlichen gegen den breiten Markt. Der dritte Chart stellt dir eine Gegenfrage: Wirkt die andere Seite der Bewegung überzeugender, als es deine erste Long- oder Short-Idee vermuten ließ?',
      'Für die Übung startest du mit einem markierten Richtungswechsel in SPY und suchst dieselbe Handelszeit im inversen Chart. Achte auf die Reihenfolge von Pause, erneutem Versuch und Schlusslage. Ein gegenläufiger ETF muss dafür nicht jeden Bar exakt spiegeln.',
      'Bleibt die Gegenansicht unklar, hast du daraus kein Signal gewonnen. Fällt dort dagegen ein auffälligeres Muster auf, prüfst du deine ursprüngliche These noch mal und wartest auf die weitere Bewegung. So bleibt der Vergleich eine Entscheidungshilfe und wird kein zweites, heimliches Handelssystem.',
    ],
    callout: 'Die dritte Ansicht kann Zweifel begründen, aber keine Auslösung vorwegnehmen.',
    diagramTitle: 'Fall 9.1 · SPY und die inverse Gegenprobe',
    caption: 'Zwei eigene, verschieden skalierte Beispielverläufe vergleichen die Richtung von SPY und einem inversen ETF; keine echten Kursdaten.',
    observations: ['Die grobe Richtung ist gegenläufig.', 'Einzelne Bars brauchen keine exakte Spiegelung.', 'Die nächste Reaktion entscheidet über die ursprüngliche These.'],
    prompt: 'Du erkennst in SDS eine stärkere Gegenthese als im Emini. Was folgt aus dem Vergleich allein?',
    answers: [['Ein garantierter Short zum nächsten Emini-Preis.', 'Ein Vergleich liefert weder Garantie noch gültige Future-Preisniveaus.'], ['Die ursprüngliche Lesart prüfen und den weiteren Emini-Verlauf abwarten.', 'Richtig. Eine Gegenprobe ändert die Aufmerksamkeit, nicht rückwirkend den Chart.'], ['Den SPY-Chart ignorieren und nur noch SDS handeln.', 'Das ist nicht die Funktion der zusätzlichen Ansicht im Beispiel.']], correct: 1,
    takeaways: ['Die dritte Ansicht ist eine Gegenprobe.', 'Gegenläufig nicht mit pixelgenau gespiegelt verwechseln.', 'Widerspruch im gehandelten Markt durch Folgebars klären.'],
  },
  {
    number: 10, title: 'Fall 9.2: Nach der Lücke zählt der Handel',
    summary: 'Eine abweichende ETF-Eröffnung und ein ähnlicher Tagesverlauf können gleichzeitig vorkommen.',
    section: 'Fall 9.2 · Eröffnung und Verlauf',
    anchors: ['Fall 9.2 · SPY links und Emini rechts', 'SPY-Anpassung am dreifachen Verfall', 'Weitgehend gleichgerichteter Intraday-Handel'],
    scenario: 'c09-figure-92-gap',
    paragraphs: [
      'Fall 9.2 stellt SPY links und den Emini rechts gegenüber. Der Blick auf die Eröffnung kann täuschen: Im Fallbeispiel wurde SPY an einem Tag mit dreifachem Verfall angepasst und startete mit einer deutlich größeren sichtbaren Lücke. Die Größe der beiden Gaps allein erzählt also nicht dieselbe Geschichte.',
      'Nach dem Start verhalten sich die beiden im Beispiel wieder ähnlich: Auf gemeinsame Richtungsphasen folgen vergleichbare Gegenbewegungen. Entscheidend ist, wohin die Bars nach der jeweiligen Eröffnung laufen, wie Rückläufe beantwortet werden und ob ein Ausbruch Anschluss bekommt.',
      'Halte beim Nachzeichnen zwei Fragen auseinander: „Wo liegt der erste Bar gegenüber dem vorherigen Schluss?“ und „Wie handeln beide danach?“. Die eigene Grafik nutzt frei gewählte normierte Werte und zeigt einen größeren Startversatz bei ähnlicher Folge. Eine konkrete Abrechnung oder Anpassung historischer ETF-Preise kann sie nicht nachbauen.',
    ],
    callout: 'Eröffnungsversatz und laufende Price Action getrennt beurteilen.',
    diagramTitle: 'Fall 9.2 · Unterschiedlicher Start, ähnlicher Tagesrhythmus',
    caption: 'Eigenes Zwei-Panel-Schema: links ein größerer symbolischer SPY-Versatz, rechts ein kleinerer Emini-Versatz; nach der Eröffnung ähnliche relative Bewegungen.',
    observations: ['Der Abstand zum Vortagesschluss ist links größer.', 'Die Handelsabschnitte danach verlaufen ähnlich.', 'Die Grafik liefert keine echten Preise oder eine Gap-Prognose.'],
    prompt: 'Weshalb kann die größere SPY-Eröffnungslücke in Fall 9.2 irreführen?',
    answers: [['Weil ein ETF nie ein Gap zeigen darf.', 'Gaps sind möglich; hier ist die Anpassung für den Vergleich wichtig.'], ['Weil der Emini ab dann keinen Bezug mehr zum S&P 500 hat.', 'Die Märkte zeigen im Beispiel danach weitgehend ähnliche Bewegungen.'], ['Weil eine Produktanpassung den Startpunkt verändert, ohne den weiteren Tagesrhythmus grundsätzlich zu trennen.', 'Richtig. Startversatz und anschließende Preisfolge sind getrennte Beobachtungen.']], correct: 2,
    takeaways: ['SPY und Emini an ihren eigenen Eröffnungen lesen.', 'Produktanpassung als mögliche Gap-Ursache beachten.', 'Die anschließende Price Action im eigenen Markt verfolgen.'],
  },
];

export const chapterNineCaseLessons = drafts.map(chapterNineLesson);
