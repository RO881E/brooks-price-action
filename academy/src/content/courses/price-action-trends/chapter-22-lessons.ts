import type { ChapterTwentyTwoScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterTwentyTwoScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Ein Trend aus mehreren Handelsbereichen",
    "summary": "Richtung kann trotz vieler Seitwärtsphasen bestehen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-01",
    "paragraphs": [
      "Ein Tag kann lange in einer Range handeln, ausbrechen und in einer neuen höheren oder tieferen Range weiterlaufen. Die versetzten Bereiche ergeben gemeinsam eine gerichtete Tagesstruktur.",
      "Eine Range ist ein Bereich mit wiederholtem Gegenhandel. Ihre späteren endgültigen Grenzen sind am Anfang noch nicht vollständig bekannt. Markiere nur bisher sichtbare Hochs und Tiefs.",
      "Im Beispiel liegt der erste Bereich zwischen 30 und 46. Nach einem Käuferausbruch entsteht oberhalb davon mehr Gegenhandel. Die fertige Tagesbeschreibung darf den frühen Ausbruch nicht rückwirkend sicher machen."
    ],
    "callout": "Tagesrichtung und innere Seitwärtsphasen getrennt lesen.",
    "takeaways": [
      "Richtung kann trotz vieler Seitwärtsphasen bestehen.",
      "Eine Range ist ein Bereich mit wiederholtem Gegenhandel.",
      "Tagesrichtung und innere Seitwärtsphasen getrennt lesen."
    ],
    "prompt": "Wie kann ein Tag mit vielen Seitwärtsbars trotzdem gerichtet sein?",
    "answers": [
      {
        "label": "Wenn seine Handelsbereiche zunehmend höher oder tiefer liegen.",
        "explanation": "Richtig. Tagesrichtung und innere Seitwärtsphasen getrennt lesen."
      },
      {
        "label": "Nur wenn jeder Bar dieselbe Farbe hat.",
        "explanation": "Gerichtete Tage können viele Gegenbars enthalten."
      },
      {
        "label": "Wenn die spätere Tagesrichtung schon am Start bekannt ist.",
        "explanation": "Das wäre Zukunftswissen."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Die Eröffnungsrange relativ messen",
    "summary": "Breite mit einer vorher bekannten Referenz vergleichen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-02",
    "paragraphs": [
      "Die Eröffnungsrange ist der bisherige Preisraum am Tagesanfang. Vergleiche ihre Breite mit der durchschnittlichen Tagesbreite abgeschlossener vorheriger Sitzungen derselben Datenreihe.",
      "Unser Beispiel hat eine Breite von 16 bei einer Referenz von 40, also 40 Prozent. Ein Drittel bis die Hälfte kann eine Arbeitsheuristik für mögliche spätere Erweiterung sein, kein universeller Grenzwert.",
      "Lege Sitzungsdefinition und Vergleichsfenster vorher fest. Die heutige endgültige Tagesbreite darf nicht schon im morgendlichen Nenner stehen. Aus dem Verhältnis entsteht noch keine gemessene Ausbruchsquote."
    ],
    "callout": "Breitenverhältnis ist keine Trefferquote.",
    "takeaways": [
      "Breite mit einer vorher bekannten Referenz vergleichen.",
      "Unser Beispiel hat eine Breite von 16 bei einer Referenz von 40, also 40 Prozent.",
      "Breitenverhältnis ist keine Trefferquote."
    ],
    "prompt": "Was misst 16 geteilt durch 40?",
    "answers": [
      {
        "label": "Die bereits bekannte heutige Endrange.",
        "explanation": "Die Referenz muss aus früher abgeschlossenen Sitzungen stammen."
      },
      {
        "label": "Die relative Breite von 40 Prozent im Beispiel.",
        "explanation": "Richtig. Breitenverhältnis ist keine Trefferquote."
      },
      {
        "label": "Eine 40-Prozent-Trefferquote.",
        "explanation": "Die Rechnung enthält keine gewonnenen und verlorenen Trades."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Lange Anfangsbalance und spätere Verlagerung",
    "summary": "Wenig frühe Dringlichkeit ist relevante Information.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-03",
    "paragraphs": [
      "Wenn der Markt zunächst mehrfach durch denselben Bereich läuft, ist die frühe Kontrolle weniger einseitig als bei einem direkten Eröffnungsimpuls. Ein späterer Ausbruch kann dennoch Richtung gewinnen.",
      "Ein später Start macht eine neue Range plausibel, bestimmt sie aber nicht sicher. Auch ein kräftiger später Impuls kann einen starken Kanal entwickeln. Eine feste Uhrzeit allein reicht für die Einordnung nicht.",
      "Vergleiche die ausgedehnte Balance mit dem anschließenden schnellen Übergang. Die neue Folge entscheidet, ob sich oben ein Bereich bildet oder eine engere Trendfortsetzung bleibt."
    ],
    "callout": "Uhrzeit und Preisfolge gemeinsam prüfen.",
    "takeaways": [
      "Wenig frühe Dringlichkeit ist relevante Information.",
      "Ein später Start macht eine neue Range plausibel, bestimmt sie aber nicht sicher.",
      "Uhrzeit und Preisfolge gemeinsam prüfen."
    ],
    "prompt": "Was liefert die lange Anfangsbalance?",
    "answers": [
      {
        "label": "Ein Gesetz, dass jeder spätere Trend schwach bleibt.",
        "explanation": "Kräftiger später Anschluss ist weiterhin möglich."
      },
      {
        "label": "Eine zwingende Gegenorder bei jedem Ausbruch.",
        "explanation": "Ein eigener Ausführungsplan fehlt noch."
      },
      {
        "label": "Hinweise auf bisher starken Gegenhandel.",
        "explanation": "Richtig. Uhrzeit und Preisfolge gemeinsam prüfen."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Gerichtete Swings innerhalb einer Range",
    "summary": "Höhere Bezugspunkte können früh Käuferdruck zeigen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-04",
    "paragraphs": [
      "Innerhalb einer Range können größere Swinghochs und Swingtiefs allmählich steigen. Damit ist schon gerichtete Struktur sichtbar, obwohl die alte Obergrenze noch nicht klar überwunden wurde.",
      "Vergleiche Swings derselben Größe und bestätige sie erst mit nachfolgender Reaktion. Kleine einzelne Kerzentiefs sind nicht automatisch größere Swingpunkte.",
      "Die eigenen Beispiele zeigen höher liegende Wendepunkte vor einem späteren Käuferausbruch. Notiere die Hinweise früh, aber halte Fehlausbruch und Rückkehr in die Range als Alternativen offen."
    ],
    "callout": "Innere Richtung ist eine Hypothese, kein fertiger Ausbruch.",
    "takeaways": [
      "Höhere Bezugspunkte können früh Käuferdruck zeigen.",
      "Vergleiche Swings derselben Größe und bestätige sie erst mit nachfolgender Reaktion.",
      "Innere Richtung ist eine Hypothese, kein fertiger Ausbruch."
    ],
    "prompt": "Was stützt Käuferdruck vor dem Rangeausbruch?",
    "answers": [
      {
        "label": "Bestätigte höhere Hochs und Tiefs derselben Größe.",
        "explanation": "Richtig. Innere Richtung ist eine Hypothese, kein fertiger Ausbruch."
      },
      {
        "label": "Ein beliebiger einzelner grüner Bar.",
        "explanation": "Ein einzelner Bar ersetzt keine Swingstruktur."
      },
      {
        "label": "Eine Garantie für die nächste obere Überschreitung.",
        "explanation": "Die alte Grenze kann weiterhin halten."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Starker Spike oder Übergang in eine neue Range?",
    "summary": "Barqualität und Anschluss helfen bei der Unterscheidung.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-05",
    "paragraphs": [
      "Ein schneller Ausbruch mit großen gerichteten Körpern und kleiner Rückgabe passt eher zu starker Trendkontrolle. Mehr Schatten, Überlappung und längere Pausen passen eher zu zweiseitiger Folge.",
      "Beide Beschreibungen können auf unterschiedlichen Größen gleichzeitig passen. Wähle den Kontext für den konkreten Plan, statt aus dem Musterwort eine sichere Gewinnwahrscheinlichkeit abzuleiten.",
      "Links setzt ein direkter Käuferweg fort. Rechts bilden sich nach derselben Auslösung mehrere Gegenbars. Diese neuen Bars begründen den unterschiedlichen Arbeitsmodus."
    ],
    "callout": "Anschluss ist wichtiger als ein starrer Tagesname.",
    "takeaways": [
      "Barqualität und Anschluss helfen bei der Unterscheidung.",
      "Beide Beschreibungen können auf unterschiedlichen Größen gleichzeitig passen.",
      "Anschluss ist wichtiger als ein starrer Tagesname."
    ],
    "prompt": "Was spricht eher für die neue Range?",
    "answers": [
      {
        "label": "Immer die erste Barfarbe des Tages.",
        "explanation": "Der Kontext kann sich später ändern."
      },
      {
        "label": "Anhaltende Überlappung und deutliche Gegenbewegungen nach dem Ausbruch.",
        "explanation": "Richtig. Anschluss ist wichtiger als ein starrer Tagesname."
      },
      {
        "label": "Nur der Name des Ausbruchs.",
        "explanation": "Ein Name enthält keine spätere Folge."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Ein Bar oder mehrere Bars als Brücke",
    "summary": "Der schnelle Übergang verbindet zwei langsamere Bereiche.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-06",
    "paragraphs": [
      "Der Weg zwischen zwei Ranges kann ein einzelner großer Bar oder eine kurze Folge sein. Er verlagert den Preis schnell aus dem alten Bereich.",
      "Ein bestätigender Folgebar ergänzt die Ausbruchsidee. Er garantiert trotzdem weder eine bestimmte Zielhöhe noch eine neue obere Range. Die weitere Struktur bleibt zu beobachten.",
      "Markiere alte Obergrenze, Ausbruchsbar und Folgeschluss. Spätere Balance wird erst beim Entstehen eingezeichnet; ihre Endgrenzen dürfen nicht schon auf dem ersten Ausbruchsbar stehen."
    ],
    "callout": "Übergang und fertige Folgerange sind verschiedene Zeitpunkte.",
    "takeaways": [
      "Der schnelle Übergang verbindet zwei langsamere Bereiche.",
      "Ein bestätigender Folgebar ergänzt die Ausbruchsidee.",
      "Übergang und fertige Folgerange sind verschiedene Zeitpunkte."
    ],
    "prompt": "Was liefert ein gerichteter Folgebar?",
    "answers": [
      {
        "label": "Ein bereits fertiges Bild aller späteren Rangegrenzen.",
        "explanation": "Diese entstehen erst mit neuen Bars."
      },
      {
        "label": "Die Garantie eines doppelten Tagesraums.",
        "explanation": "Die Ausdehnung kann anders ausfallen."
      },
      {
        "label": "Zusätzlichen sichtbaren Anschluss zur Ausbruchsidee.",
        "explanation": "Richtig. Übergang und fertige Folgerange sind verschiedene Zeitpunkte."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Ein Ausbruch allein ist kein vollständiger Einstieg",
    "summary": "Preis und Verlustgrenze zusätzlich vergleichen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-07",
    "paragraphs": [
      "Ein Rangeausbruch kann scheitern und schnell zurückkehren. Ein Einstieg direkt an einem großen Ausbruchsbar kann außerdem einen weiten Schutzabstand verlangen.",
      "Ein Rücklauf zum bekannten Ausbruchspunkt kann eine andere Ausführung ermöglichen. Ein früheres Signal vom gegenüberliegenden Rand ist wieder ein anderer Plan. Diese Varianten werden mit ihren damaligen Preisen bewertet.",
      "Unsere Panels zeigen Auslösung und späteren Rücklauftest. Ein nicht erreichtes Rücklauflimit ist kein ausgeführter Gewinntrade. Lege Menge und zulässiges Geldrisiko vor der jeweiligen Auslösung fest."
    ],
    "callout": "Orderplan bleibt vom Muster getrennt.",
    "takeaways": [
      "Preis und Verlustgrenze zusätzlich vergleichen.",
      "Ein Rücklauf zum bekannten Ausbruchspunkt kann eine andere Ausführung ermöglichen.",
      "Orderplan bleibt vom Muster getrennt."
    ],
    "prompt": "Was macht den Ausbruchseinstieg prüfbar?",
    "answers": [
      {
        "label": "Ein bekannter Einstieg samt Verlustgrenze, Menge und Halteabsicht.",
        "explanation": "Richtig. Orderplan bleibt vom Muster getrennt."
      },
      {
        "label": "Nur das Wort Ausbruch.",
        "explanation": "Das nennt weder Preis noch Risiko."
      },
      {
        "label": "Eine nachträglich perfekte Rücklauffüllung.",
        "explanation": "Eine tatsächlich nicht besuchte Order darf nicht erfunden werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Rücklauf zum Ausbruchspunkt",
    "summary": "Test und neue Auslösung zeitlich auseinanderhalten.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-08",
    "paragraphs": [
      "Nach dem Ausbruch kann der Preis den alten Rand prüfen. Eine Reaktion dort ist erst ein Signalangebot; eine geplante Stoporder benötigt anschließend ihre eigene Auslösung.",
      "Der Test kann knapp oberhalb des alten Bereichs bleiben, ihn berühren oder hineinreichen. Die Varianten liefern unterschiedliche Rückgabe und müssen am gleichen bekannten Bezug gemessen werden.",
      "Im Beispiel ist die alte Obergrenze 46. Der Test wird gegen diese Referenz geprüft, ohne sie zum späteren Tief zu verschieben. Käuferanschluss stützt erst danach eine neue Fortsetzungsidee."
    ],
    "callout": "Alte Grenze vor dem Test festhalten.",
    "takeaways": [
      "Test und neue Auslösung zeitlich auseinanderhalten.",
      "Der Test kann knapp oberhalb des alten Bereichs bleiben, ihn berühren oder hineinreichen.",
      "Alte Grenze vor dem Test festhalten."
    ],
    "prompt": "Was darf beim Rücklauftest nicht nachträglich geändert werden?",
    "answers": [
      {
        "label": "Die aktuelle Lesart aufgrund neuer Folge.",
        "explanation": "Sie darf mit neuer Information angepasst werden."
      },
      {
        "label": "Die vorher bekannte Ausbruchsreferenz.",
        "explanation": "Richtig. Alte Grenze vor dem Test festhalten."
      },
      {
        "label": "Der spätere sichtbare Orderstatus.",
        "explanation": "Neue Bars können den Status tatsächlich verändern."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Rangehöhe als Projektionsstrecke",
    "summary": "Die Rechnung nennt ein Zielgebiet, keine Pflicht.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-09",
    "paragraphs": [
      "Die erste Range reicht im Beispiel von 30 bis 46. Ihre Höhe beträgt 16. Eine gleich große Strecke über der Obergrenze ergibt eine Projektionszone bei 62.",
      "Damit würde sich der Raum von 30 bis 62 auf 32 verdoppeln. Das ist eine mögliche Zielrechnung, nicht die sichere spätere Tagesbreite. Ein Ausbruch kann vorher scheitern oder weiter laufen.",
      "Schreibe beide Grenzen und den Projektionsanker auf. Prüfe Zielbesuch und tatsächlichen Anschluss getrennt. Die Rechnung liefert keine automatische Gegenorder am Ziel."
    ],
    "callout": "46 plus 16 ergibt 62, nicht Gewissheit.",
    "takeaways": [
      "Die Rechnung nennt ein Zielgebiet, keine Pflicht.",
      "Damit würde sich der Raum von 30 bis 62 auf 32 verdoppeln.",
      "46 plus 16 ergibt 62, nicht Gewissheit."
    ],
    "prompt": "Welches Projektionsziel entsteht aus 30 bis 46?",
    "answers": [
      {
        "label": "Immer genau die Tagesendrange.",
        "explanation": "Die endgültige Breite bleibt offen."
      },
      {
        "label": "Eine sichere Verkaufsorder bei 62.",
        "explanation": "Ein Gegensignal muss zusätzlich entstehen."
      },
      {
        "label": "62 bei Projektion der 16 Einheiten über 46.",
        "explanation": "Richtig. 46 plus 16 ergibt 62, nicht Gewissheit."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Bei neuer Balance das Management anpassen",
    "summary": "Gewinnplan und Schutz haben unterschiedliche Aufgaben.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-10",
    "paragraphs": [
      "Wenn am Projektionsgebiet mehr Gegenhandel entsteht, kann eine vorab geplante Gewinnmitnahme auf Stärke besser zum Rangeplan passen als das Warten auf einen engen Rücklaufstop.",
      "Ein notwendiger Schutzstop bleibt bestehen. Er wird nicht entfernt oder ungeplant erweitert, nur weil die neue Range häufig durch kleine Swings läuft. Ein enger Trend-Trailingstop und ein katastrophenbegrenzender Schutz sind verschiedene Funktionen.",
      "Vergleiche Trendfortsetzung mit oberer Balance. Lege Teilgewinn, Restmenge und Invalidierung vorher fest. Das Muster darf aus einem begrenzten Trade keine offene Verlusthoffnung machen."
    ],
    "callout": "Range-Management entfernt keine Verlustgrenze.",
    "takeaways": [
      "Gewinnplan und Schutz haben unterschiedliche Aufgaben.",
      "Ein notwendiger Schutzstop bleibt bestehen.",
      "Range-Management entfernt keine Verlustgrenze."
    ],
    "prompt": "Was ist bei der Umstellung auf Range-Management richtig?",
    "answers": [
      {
        "label": "Gewinnführung anpassen und den begrenzenden Schutz beibehalten.",
        "explanation": "Richtig. Range-Management entfernt keine Verlustgrenze."
      },
      {
        "label": "Jeden Schutzstop abschaffen.",
        "explanation": "Das würde das Geldrisiko unbegrenzt lassen."
      },
      {
        "label": "Den Schutz beliebig weiter weglegen.",
        "explanation": "Eine ungeplante Erweiterung verändert das erlaubte Risiko."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Oberer Rand, unterer Rand und Mitte",
    "summary": "Eine Range braucht benannte Bezüge.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-11",
    "paragraphs": [
      "In einer Range sind Randzonen und Mitte unterschiedliche Arbeitsbereiche. Ein Gegenplan nahe einem Rand kann mehr Zielraum zum anderen Rand haben als ein später Einstieg mitten in der Balance.",
      "Die endgültige Mitte ist anfangs nicht bekannt. Verwende die bisher sichtbaren Grenzen. Ein Randbesuch muss nicht halten; ein erfolgreicher Ausbruch ist weiterhin möglich.",
      "Markiere beide Ränder der neuen Range und vergleiche den Preisplan vor dem Einstieg. Der Ausdruck günstig beschreibt hier Abstand und Lage, keine Garantie einer profitablen Ausführung."
    ],
    "callout": "Randlage ersetzt kein Signal.",
    "takeaways": [
      "Eine Range braucht benannte Bezüge.",
      "Die endgültige Mitte ist anfangs nicht bekannt.",
      "Randlage ersetzt kein Signal."
    ],
    "prompt": "Was hilft beim Zielraumvergleich?",
    "answers": [
      {
        "label": "Eine erst nach Tagesschluss berechnete Mitte.",
        "explanation": "Sie war früher noch nicht vollständig bekannt."
      },
      {
        "label": "Bekannte Rangegrenzen und der konkrete Einstiegspreis.",
        "explanation": "Richtig. Randlage ersetzt kein Signal."
      },
      {
        "label": "Eine garantierte Rückkehr von jedem Rand.",
        "explanation": "Ausbrüche können gelingen."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Großer Trendbar im Zielbereich",
    "summary": "Ein auffälliger Körper kann auch spät sein.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-12",
    "paragraphs": [
      "Ein großer Käuferbar am Projektionsgebiet kann neue Trendstärke oder eine späte Überdehnung zeigen. Die Gegenfolge entscheidet, welche Lesart mehr Gewicht gewinnt.",
      "Eine Fade-Idee bedeutet Handel gegen den frischen Impuls. Sie ist anspruchsvoll und benötigt klare Invalidierung. Der Zielname rechtfertigt kein unbegrenztes Shortnachkaufen.",
      "Die Vergleichspfade setzen den großen Bar fort oder nehmen ihn zurück. Vermutete Gewinnmitnahmen bleiben eine Erklärung; OHLC zeigt keine vollständigen Positionen der Käufer und Verkäufer."
    ],
    "callout": "Großer Zielbar ist kein sicherer Umkehrbefehl.",
    "takeaways": [
      "Ein auffälliger Körper kann auch spät sein.",
      "Eine Fade-Idee bedeutet Handel gegen den frischen Impuls.",
      "Großer Zielbar ist kein sicherer Umkehrbefehl."
    ],
    "prompt": "Welche Information stärkt die Überdehnungslesart?",
    "answers": [
      {
        "label": "Allein die große grüne Farbe.",
        "explanation": "Der Trend kann weiterlaufen."
      },
      {
        "label": "Die sichere Kenntnis aller Gewinnmitnahmen.",
        "explanation": "OHLC enthält diese vollständigen Motive nicht."
      },
      {
        "label": "Sichtbare Rücknahme und anschließender Gegenanschluss.",
        "explanation": "Richtig. Großer Zielbar ist kein sicherer Umkehrbefehl."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Rücktest bleibt vor der alten Range",
    "summary": "Wenig Rückgabe kann die Trendseite stützen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-13",
    "paragraphs": [
      "Wenn die neue obere Balance zurücksetzt, aber oberhalb des alten Bereichs hält, bleibt der bisherige Abstand offen. Das unterstützt zunächst stärkere Käuferkontrolle als eine tiefe Rückkehr.",
      "Benenne genau, ob die Grenze nicht erreicht, berührt oder unterschritten wurde. Ein Tief eine Einheit über 46 ist ein anderer Befund als ein Tief bei 46.",
      "Links erreicht der Test nur 47, rechts reicht er in den Bereich. Beide haben dieselbe Vorgeschichte. Keiner garantiert das spätere Ergebnis; die Reaktion bleibt getrennt zu prüfen."
    ],
    "callout": "Knapp davor und hinein sind unterschiedliche Preisbesuche.",
    "takeaways": [
      "Wenig Rückgabe kann die Trendseite stützen.",
      "Benenne genau, ob die Grenze nicht erreicht, berührt oder unterschritten wurde.",
      "Knapp davor und hinein sind unterschiedliche Preisbesuche."
    ],
    "prompt": "Welcher Befund hält den alten Abstand offen?",
    "answers": [
      {
        "label": "Ein Rücklauftief 47 oberhalb der alten Obergrenze 46.",
        "explanation": "Richtig. Knapp davor und hinein sind unterschiedliche Preisbesuche."
      },
      {
        "label": "Ein Tief 44 innerhalb der alten Range.",
        "explanation": "Das hat die Grenze bereits unterschritten."
      },
      {
        "label": "Eine garantierte spätere Verlängerung.",
        "explanation": "Auch ein flacher Test kann später scheitern."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Rückkehr in den alten Bereich",
    "summary": "Wiedereintritt kann einen weiteren Durchlauf ermöglichen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-14",
    "paragraphs": [
      "Wenn der Preis wieder in der ersten Range handelt und dort Anschluss findet, wird ein Test der anderen Randzone plausibel. Die frühere Ausbruchsrichtung verliert damit einen Teil ihrer Kontrolle.",
      "Ein einzelner Schatten innerhalb des Bereichs und eine gehaltene Rückkehr sind unterschiedliche Folgen. Notiere Schlusslage, Folge und Gegenreaktion, bevor du einen ganzen Durchlauf erwartest.",
      "Unser Beispiel kehrt unter 46 zurück und bewegt sich weiter in Richtung 30. Die Untergrenze bleibt ein Zielgebiet, kein sicherer Halt. Ein neuer Ausbruch unten ist möglich."
    ],
    "callout": "Wiedereintritt und Anschluss gemeinsam lesen.",
    "takeaways": [
      "Wiedereintritt kann einen weiteren Durchlauf ermöglichen.",
      "Ein einzelner Schatten innerhalb des Bereichs und eine gehaltene Rückkehr sind unterschiedliche Folgen.",
      "Wiedereintritt und Anschluss gemeinsam lesen."
    ],
    "prompt": "Was stützt einen möglichen Durchlauf der alten Range?",
    "answers": [
      {
        "label": "Ein garantiertes Halten am anderen Rand.",
        "explanation": "Auch dieser Rand kann brechen."
      },
      {
        "label": "Gehaltene Rückkehr mit weiterer gerichteter Folge darin.",
        "explanation": "Richtig. Wiedereintritt und Anschluss gemeinsam lesen."
      },
      {
        "label": "Nur eine kurze Berührung der Grenze.",
        "explanation": "Das belegt noch keinen Durchlauf."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Vom Range-Trend zum Umkehrtag",
    "summary": "Die späte Gegenstrecke kann mehrere Bereiche überwinden.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-15",
    "paragraphs": [
      "Ein zunächst gerichteter Range-Tag kann später durch den alten Bereich zurücklaufen. Hält die Gegenrichtung bis nahe das andere Tagesende, kann die fertige Tageskerze eine Umkehr zeigen.",
      "Der Name Umkehrtag ist früh nur eine Möglichkeit. Die spätere Schlusslage ist erst am Ende bekannt. Beurteile den Gegenplan an seiner damaligen Struktur und verbleibenden Zeit.",
      "Im Beispiel steigt die Gegenbewegung aus einem unteren Bereich zurück nach oben. Ihre später größere Strecke darf nicht zum rückwirkend garantierten frühen Ziel werden."
    ],
    "callout": "Tagesname folgt dem Verlauf.",
    "takeaways": [
      "Die späte Gegenstrecke kann mehrere Bereiche überwinden.",
      "Der Name Umkehrtag ist früh nur eine Möglichkeit.",
      "Tagesname folgt dem Verlauf."
    ],
    "prompt": "Wann steht die endgültige Tages-Schlusslage fest?",
    "answers": [
      {
        "label": "Schon beim ersten Gegenbar.",
        "explanation": "Der Tag kann danach erneut drehen."
      },
      {
        "label": "Beim früheren Projektionstreffer.",
        "explanation": "Ein Zielbesuch bestimmt den Schluss nicht."
      },
      {
        "label": "Erst am Ende der betrachteten Sitzung.",
        "explanation": "Richtig. Tagesname folgt dem Verlauf."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Mehrere versetzte Ranges",
    "summary": "Häufige Verlagerung kann stärkere Trendkontrolle zeigen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-16",
    "paragraphs": [
      "Wenn der Markt mehrfach ausbricht und die neuen Bereiche immer weiter in dieselbe Richtung verlagert, kann die Trendseite stärker sein als bei nur zwei breiten Balancen.",
      "Dann ist es unpassend, jeden neuen Rand automatisch gegen den Trend zu handeln. Prüfe, ob Rückläufe kurz bleiben und alte Grenzen kaum zurückgenommen werden.",
      "Unsere Folge enthält drei höher liegende Bereiche. Späterer Gegenhandel ist weiterhin möglich, aber erst tatsächlicher Bruch und Anschluss ändern den Schwerpunkt des Plans."
    ],
    "callout": "Viele Ranges bedeuten nicht automatisch schwachen Trend.",
    "takeaways": [
      "Häufige Verlagerung kann stärkere Trendkontrolle zeigen.",
      "Dann ist es unpassend, jeden neuen Rand automatisch gegen den Trend zu handeln.",
      "Viele Ranges bedeuten nicht automatisch schwachen Trend."
    ],
    "prompt": "Was stützt eine stärkere Trendlesart?",
    "answers": [
      {
        "label": "Wiederholte Verlagerung mit geringer Rückgabe.",
        "explanation": "Richtig. Viele Ranges bedeuten nicht automatisch schwachen Trend."
      },
      {
        "label": "Die Pflicht zu Gegentrades an jedem neuen Hoch.",
        "explanation": "Die Trendkontrolle kann anhalten."
      },
      {
        "label": "Eine sichere Umkehr nach der dritten Range.",
        "explanation": "Die Anzahl ist kein Umkehrgesetz."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Ein Tagesbar, viele Intraday-Swings",
    "summary": "Verdichtung versteckt den inneren Weg.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-17",
    "paragraphs": [
      "Ein Tag kann nahe einem Ende eröffnen und nahe dem anderen schließen, obwohl innen zahlreiche Gegenbewegungen und Ranges liegen. Die Tageskerze allein zeigt diese Reihenfolge nicht.",
      "Für den Vergleich wird exakt dieselbe synthetische Barfolge zu einem OHLC-Bar aggregiert: erster Open, höchstes High, niedrigstes Low und letzter Close.",
      "Links bleiben die einzelnen Swings sichtbar, rechts nur ihre Tageshülle. Die Tagesform ist keine unabhängige Bestätigung und durfte intraday nicht schon mit ihrem späteren Schluss verwendet werden."
    ],
    "callout": "Gleiche Daten liefern verschiedene Ansichten.",
    "takeaways": [
      "Verdichtung versteckt den inneren Weg.",
      "Für den Vergleich wird exakt dieselbe synthetische Barfolge zu einem OHLC-Bar aggregiert: erster Open, höchstes High, niedrigstes Low und letzter Close..",
      "Gleiche Daten liefern verschiedene Ansichten."
    ],
    "prompt": "Welche Information fehlt dem einzelnen Tagesbar?",
    "answers": [
      {
        "label": "Sein erster Open.",
        "explanation": "Der Aggregatbar übernimmt den ersten Open."
      },
      {
        "label": "Die zeitliche Reihenfolge seiner inneren Swings.",
        "explanation": "Richtig. Gleiche Daten liefern verschiedene Ansichten."
      },
      {
        "label": "Sein endgültiges High und Low.",
        "explanation": "Diese Werte sind im fertigen OHLC enthalten."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Alte Gegen-Signalpreise als Testzonen",
    "summary": "Bekannte Preisstellen können Rücklaufziele liefern.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-18",
    "paragraphs": [
      "Eine Rückkehr in eine frühere Range kann alte Preise gescheiterter Gegensignale testen. Das sind bekannte Bezüge, keine vollständige Karte fremder Stops oder Positionen.",
      "Benenne den konkreten Signalpreis und die betrachtete Größe. Ein altes Signal kann bereits irrelevant geworden sein; ein Preisbesuch garantiert weder dortige Orderaktivität noch Reaktion.",
      "Unser Beispiel markiert einen früheren Bezug im alten Bereich. Die spätere Gegenstrecke besucht ihn. Verwende diesen Besuch als beobachtbaren Befund und halte vermutete Ausstiege als Interpretation getrennt."
    ],
    "callout": "Preisreferenz ist keine sichtbare Orderliste.",
    "takeaways": [
      "Bekannte Preisstellen können Rücklaufziele liefern.",
      "Benenne den konkreten Signalpreis und die betrachtete Größe.",
      "Preisreferenz ist keine sichtbare Orderliste."
    ],
    "prompt": "Was zeigt der spätere Besuch direkt?",
    "answers": [
      {
        "label": "Die Identität aller damaligen Händler.",
        "explanation": "OHLC liefert keine solche Liste."
      },
      {
        "label": "Eine garantierte sofortige Reaktion.",
        "explanation": "Auch ein bekannter Preis kann durchhandelt werden."
      },
      {
        "label": "Dass der Markt den alten Signalpreis erreicht.",
        "explanation": "Richtig. Preisreferenz ist keine sichtbare Orderliste."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Späte Gegenbewegung und verbleibende Zeit",
    "summary": "Ein Ziel kann erreichbar wirken und trotzdem Zeit brauchen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-19",
    "paragraphs": [
      "Zweiseitiger Handel kann gegen Sitzungsende eine Rückkehr in vorherige Bereiche ermöglichen. Das ist eine Möglichkeit, kein an jeder Uhrzeit verlässlicher Umkehrtermin.",
      "Vergleiche Zielabstand, aktuelle Struktur und verbleibendes Zeitfenster. Ein großes Gleichstreckenziel braucht mehr Strecke als ein naher Randtest. Die spätere Zeitgrenze darf nicht zu ungeplanten Verlustnachkäufen führen.",
      "Im Beispiel ist ein naher Test mit weniger Strecke verbunden als das fernere Ziel. Halte im Replay auch einen nicht erreichten Test fest; der Tag muss seine durchschnittliche Breite nicht nachholen."
    ],
    "callout": "Zeitrest gehört zum Halteplan.",
    "takeaways": [
      "Ein Ziel kann erreichbar wirken und trotzdem Zeit brauchen.",
      "Vergleiche Zielabstand, aktuelle Struktur und verbleibendes Zeitfenster.",
      "Zeitrest gehört zum Halteplan."
    ],
    "prompt": "Was muss bei einem späten Plan berücksichtigt werden?",
    "answers": [
      {
        "label": "Verbleibende Zeit neben Zielraum und Risikogrenze.",
        "explanation": "Richtig. Zeitrest gehört zum Halteplan."
      },
      {
        "label": "Eine garantierte Umkehr zu einer festen Uhrzeit.",
        "explanation": "Die Preisfolge entscheidet weiterhin mit."
      },
      {
        "label": "Die Pflicht, ein entferntes Ziel noch zu erreichen.",
        "explanation": "Die Sitzung kann vorher enden."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Beide Ausbruchsseiten scheitern",
    "summary": "Range-Erweiterung kann ohne Trendfortsetzung entstehen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-20",
    "paragraphs": [
      "Eine kleine Anfangsrange kann oben und unten überschritten werden, ohne dass eine dauerhafte Richtung entsteht. So wächst der Tagesraum, während der Markt weiter pendelt.",
      "Ein steigender Tagesraum belegt deshalb keinen gelungenen Trendtag. Prüfe jeden Ausbruch mit seinem Anschluss und die Rückkehr in den alten Bereich.",
      "Links ist die frühe Balance, rechts die beidseitige Erweiterung mit Schluss näher der Mitte. Ein erwartetes Projektionsziel kann dabei unerreicht bleiben. Dokumentiere den abweichenden Verlauf ausdrücklich."
    ],
    "callout": "Größerer Raum ist nicht dasselbe wie Trend.",
    "takeaways": [
      "Range-Erweiterung kann ohne Trendfortsetzung entstehen.",
      "Ein steigender Tagesraum belegt deshalb keinen gelungenen Trendtag.",
      "Größerer Raum ist nicht dasselbe wie Trend."
    ],
    "prompt": "Was zeigen gescheiterte Ausbrüche auf beiden Seiten?",
    "answers": [
      {
        "label": "Nur erfolgreiche Ausbrüche wegen neuer Extreme.",
        "explanation": "Neue Extreme allein beweisen keinen Anschluss."
      },
      {
        "label": "Eine mögliche Erweiterung der Range ohne gerichtete Fortsetzung.",
        "explanation": "Richtig. Größerer Raum ist nicht dasselbe wie Trend."
      },
      {
        "label": "Einen garantiert erfüllten Trendplan.",
        "explanation": "Die Richtung kann immer wieder zurückgenommen werden."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Später Ausbruch aus kleiner Tagesrange",
    "summary": "Eine lange Pause darf dennoch später verlassen werden.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-21",
    "paragraphs": [
      "Ein Tag kann über viele Bars relativ klein bleiben und erst spät ausbrechen. Eine niedrige bisherige Breite ist ein Anlass zum Beobachten, keine Zusage, dass der Markt vor Schluss expandieren muss.",
      "Vergleiche nur frühere abgeschlossene Tagesdaten und dieselbe Sessiondefinition. Historische Häufigkeiten aus einem anderen Markt oder Zeitraum liefern keine aktuelle garantierte Ausbruchsquote.",
      "Unsere späte Variante gewinnt noch Strecke, bildet aber keine lange zweite Range mehr. Die alternative kleine Schlussrange bleibt im Plan zulässig. Einstieg und Zeitrest sind gesondert zu prüfen."
    ],
    "callout": "Kleine Tagesrange erzwingt keinen Ausbruch.",
    "takeaways": [
      "Eine lange Pause darf dennoch später verlassen werden.",
      "Vergleiche nur frühere abgeschlossene Tagesdaten und dieselbe Sessiondefinition.",
      "Kleine Tagesrange erzwingt keinen Ausbruch."
    ],
    "prompt": "Wie behandelst du die späte Ausbruchserwartung?",
    "answers": [
      {
        "label": "Als universelle 90-Prozent-Garantie.",
        "explanation": "Eine solche Quote wird hier nicht gemessen."
      },
      {
        "label": "Als Pflicht des Marktes zur Durchschnittsbreite.",
        "explanation": "Der heutige Tag darf kleiner bleiben."
      },
      {
        "label": "Als offene Hypothese mit historisch sauberem Vergleich.",
        "explanation": "Richtig. Kleine Tagesrange erzwingt keinen Ausbruch."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Mehrere plausible Anfangsgrenzen",
    "summary": "Zielanker vorher benennen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-22",
    "paragraphs": [
      "Bei unsauberer Eröffnungsstruktur können ein kleiner innerer Bereich und eine größere äußere Range gleichzeitig plausibel sein. Ihre Höhen ergeben unterschiedliche Projektionen.",
      "Lege zuerst fest, welchen Bezug dein Plan benutzt. Weitere bekannte Ziele können zusätzliche Prüfgebiete sein. Verschiebe den alten Anker nicht erst nach dem Ergebnis, damit jede Wende passend wirkt.",
      "Das eigene Beispiel vergleicht eine 16-Einheiten-Range mit einer kleineren inneren Höhe. Beide Rechnungen bleiben sichtbar. Ein Ziel, das nicht besucht wurde, wird nicht nachträglich als Treffer geführt."
    ],
    "callout": "Zielrechnungen brauchen unveränderte Anker.",
    "takeaways": [
      "Zielanker vorher benennen.",
      "Lege zuerst fest, welchen Bezug dein Plan benutzt.",
      "Zielrechnungen brauchen unveränderte Anker."
    ],
    "prompt": "Was macht mehrere Projektionen nachvollziehbar?",
    "answers": [
      {
        "label": "Vorab benannte verschiedene Grenzen und Anker.",
        "explanation": "Richtig. Zielrechnungen brauchen unveränderte Anker."
      },
      {
        "label": "Nach jeder Wende ein neues passendes Ziel erfinden.",
        "explanation": "Das wäre rückblickende Anpassung."
      },
      {
        "label": "Jede Wende als Beweis eines bestimmten Algorithmus.",
        "explanation": "OHLC belegt ihre genaue Ursache nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Wahrscheinlichkeit nicht aus einem Gefühl messen",
    "summary": "Eine gute Lesart ist noch keine geprüfte Trefferquote.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-23",
    "paragraphs": [
      "Du kannst Käuferdruck oder günstigen Zielraum begründet beschreiben. Daraus folgt keine exakt gemessene 60- oder 70-Prozent-Chance für den nächsten Trade.",
      "Eine solche Zahl braucht definierte Setups, Daten, Ausführungsmodell und Auswertung. Relative Ziel- und Verluststrecken können dagegen aus den geplanten Preisen direkt gerechnet werden.",
      "Im Beispiel liegen Einstieg 42, Schutz 38 und Ziel 50 vor: vier Einheiten Verluststrecke und acht Zielstrecke ergeben vor Kosten 2 zu 1. Die Rechnung misst keine Trefferquote."
    ],
    "callout": "Preisrechnung und Wahrscheinlichkeitsmessung getrennt halten.",
    "takeaways": [
      "Eine gute Lesart ist noch keine geprüfte Trefferquote.",
      "Eine solche Zahl braucht definierte Setups, Daten, Ausführungsmodell und Auswertung.",
      "Preisrechnung und Wahrscheinlichkeitsmessung getrennt halten."
    ],
    "prompt": "Was lässt sich aus 42, 38 und 50 direkt berechnen?",
    "answers": [
      {
        "label": "Ein sicher erreichter Gewinn von acht Einheiten.",
        "explanation": "Das Ziel kann unerreicht bleiben."
      },
      {
        "label": "Ein Ziel-Verlust-Verhältnis von 2 zu 1 vor Kosten.",
        "explanation": "Richtig. Preisrechnung und Wahrscheinlichkeitsmessung getrennt halten."
      },
      {
        "label": "Eine garantierte 70-Prozent-Trefferquote.",
        "explanation": "Die Preise enthalten keine solche Häufigkeitsmessung."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Dein Range-Übergangsprotokoll",
    "summary": "Grenzen, Ausbruch, Rücktest und Orderstatus führen.",
    "section": "Range-Übergänge verstehen",
    "scenario": "c22-24",
    "paragraphs": [
      "Notiere die bisherige erste Range, ihre historische Breitenreferenz und ein vorab berechnetes Zielgebiet. Halte fest, welche Folge Trendkontrolle oder neue Balance stützen würde.",
      "Decke Bars schrittweise auf und unterscheide neue Range, Test davor, Wiedereintritt und Durchlauf. Eine alte Zone wird nur anhand neuer sichtbarer Struktur ergänzt, nicht heimlich verschoben.",
      "Führe ausgelöste, ungefüllte, verworfene und ausgelassene Pläne getrennt. Ein großer späterer Tagesbar rechtfertigt keine frühere unklare Order. Geldrisiko und Zeitrest bleiben Teil jedes konkreten Plans."
    ],
    "callout": "Lesart und Ausführung zeitgerecht dokumentieren.",
    "takeaways": [
      "Grenzen, Ausbruch, Rücktest und Orderstatus führen.",
      "Decke Bars schrittweise auf und unterscheide neue Range, Test davor, Wiedereintritt und Durchlauf.",
      "Lesart und Ausführung zeitgerecht dokumentieren."
    ],
    "prompt": "Was lässt sich später fair prüfen?",
    "answers": [
      {
        "label": "Nur die fertig schönsten Trendtage.",
        "explanation": "Dann fehlen abweichende und gescheiterte Fälle."
      },
      {
        "label": "Eine nachträglich immer passende Range.",
        "explanation": "Das würde die Grenzen ans Ergebnis anpassen."
      },
      {
        "label": "Ein zeitgerechtes Protokoll mit festen Bezügen und tatsächlichem Orderstatus.",
        "explanation": "Richtig. Lesart und Ausführung zeitgerecht dokumentieren."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Erster Bereich reicht über die Sessiongrenze",
    "summary": "Eine bekannte Range kann am Folgetag weiterwirken.",
    "section": "Lernfall 1",
    "scenario": "c22-25",
    "paragraphs": [
      "Im ersten Lernfall beginnt der untere Bereich schon in der vorherigen Sitzung. Der neue Handel bleibt zunächst darin und liefert noch keinen sicheren Käuferausbruch.",
      "Die Sessiongrenze macht die bekannte Zone nicht automatisch ungültig. Verwende aber die aktuelle Sitzung für heutige Tagesbreite und Schlusslage; alte Bars gehören nicht heimlich in den heutigen Tagesbar.",
      "Die Panels zeigen Fortsetzung des alten Bereichs und späteren Käuferanschluss. Beide Zeitabschnitte behalten ihren eigenen Sitzungsbezug. Die höhere Range wird erst danach sichtbar."
    ],
    "callout": "Alte Zone und heutige Tageskerze auseinanderhalten.",
    "takeaways": [
      "Eine bekannte Range kann am Folgetag weiterwirken.",
      "Die Sessiongrenze macht die bekannte Zone nicht automatisch ungültig.",
      "Alte Zone und heutige Tageskerze auseinanderhalten."
    ],
    "prompt": "Was kann über die Sessiongrenze erhalten bleiben?",
    "answers": [
      {
        "label": "Ein bereits bekannter Rangebereich.",
        "explanation": "Richtig. Alte Zone und heutige Tageskerze auseinanderhalten."
      },
      {
        "label": "Die frühere sichere heutige Schlusslage.",
        "explanation": "Der neue Tag ist noch offen."
      },
      {
        "label": "Eine gemeinsame Tageskerze ohne Sessionregel.",
        "explanation": "Das würde die Sitzungseinteilung verändern."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Starker Übergang und kleine obere Balance",
    "summary": "Verhältnisse der Phasen liefern zusätzliche Hinweise.",
    "section": "Lernfall 1",
    "scenario": "c22-26",
    "paragraphs": [
      "Im ersten Lernfall gewinnt der Ausbruch viel neue Strecke, während die obere Range vergleichsweise klein bleibt. Der Abstand zum alten Bereich ist damit im bisherigen Bild auffällig.",
      "Das macht einen späteren Test des Übergangs plausibel, garantiert ihn aber nicht. Ein weiterer Käuferausbruch kann ebenfalls entstehen.",
      "Markiere die alte Obergrenze und den bekannten unteren Rand der neuen Balance. Vergleiche den funktionalen Abstand mit der oberen Rangehöhe. Die Impulsstrecke war tatsächlich gehandelt und ist nicht automatisch eine Voll-Lücke."
    ],
    "callout": "Abstand und Rangehöhe getrennt messen.",
    "takeaways": [
      "Verhältnisse der Phasen liefern zusätzliche Hinweise.",
      "Das macht einen späteren Test des Übergangs plausibel, garantiert ihn aber nicht.",
      "Abstand und Rangehöhe getrennt messen."
    ],
    "prompt": "Was kann ein großer Übergang mit kleiner oberer Balance nahelegen?",
    "answers": [
      {
        "label": "Eine garantierte komplette Tagesumkehr.",
        "explanation": "Die neue Range kann weiter oben bleiben."
      },
      {
        "label": "Einen später zu prüfenden Rücktest des Übergangsgebiets.",
        "explanation": "Richtig. Abstand und Rangehöhe getrennt messen."
      },
      {
        "label": "Eine sicher ungehandelte Voll-Lücke.",
        "explanation": "Die Impulsbars können diese Preise gehandelt haben."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Oberer Ausbruch scheitert, alter Bereich wirkt wieder",
    "summary": "Neue Gegenfolge verändert die Startlesart.",
    "section": "Lernfall 1",
    "scenario": "c22-27",
    "paragraphs": [
      "Im ersten Lernfall bricht die obere Range kurz oben aus, kehrt zurück und wird danach unten verlassen. Die Verkäuferstrecke erreicht das Übergangsgebiet zur früheren Range.",
      "Ein starker Käufergegenspike am alten Bereich schwächt die sofortige Bärenkanal-Erwartung. Neuer zweiseitiger Handel ist dann eine passende Alternative.",
      "Links steht die kleine obere Auslösung, rechts ihre Rücknahme und der spätere Starttest. Bewerte die spätere Käuferfolge erst bei ihrem Entstehen. Das ursprüngliche Ausbruchswort entscheidet die weitere Richtung nicht."
    ],
    "callout": "Gegenanschluss kann eine neue Balance begründen.",
    "takeaways": [
      "Neue Gegenfolge verändert die Startlesart.",
      "Ein starker Käufergegenspike am alten Bereich schwächt die sofortige Bärenkanal-Erwartung.",
      "Gegenanschluss kann eine neue Balance begründen."
    ],
    "prompt": "Was schwächt hier die reine Bärenfortsetzung?",
    "answers": [
      {
        "label": "Nur das vorherige Käuferetikett.",
        "explanation": "Die neue Verkäuferfolge muss ebenfalls gewichtet werden."
      },
      {
        "label": "Eine sichere Kenntnis aller Käuferabsichten.",
        "explanation": "OHLC zeigt keine vollständigen Motive."
      },
      {
        "label": "Kräftige Käuferreaktion am alten Bereich.",
        "explanation": "Richtig. Gegenanschluss kann eine neue Balance begründen."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Abwärtsausbruch aus einer mittleren Anfangsrange",
    "summary": "Eine untere Range ist möglich, kein Muss.",
    "section": "Lernfall 2",
    "scenario": "c22-28",
    "paragraphs": [
      "Im zweiten Lernfall nimmt die Anfangsrange einen erheblichen Teil der historischen Tagesreferenz ein. Der spätere Verkäuferausbruch schafft eine tiefere Handelszone.",
      "Der große Verkäuferbar allein legt weder das Tagestief noch einen ununterbrochenen Bärenkanal fest. Die nachfolgende Rückgabe ist zusätzliche Information.",
      "Vergleiche die obere Balance mit den späteren kleineren Swings unten. Ein Käuferplan für den Rücktest braucht ein eigenes Signal und begrenztes Risiko; blindes Nachkaufen wird daraus nicht abgeleitet."
    ],
    "callout": "Neue tiefere Zone mit ihrer eigenen Folge lesen.",
    "takeaways": [
      "Eine untere Range ist möglich, kein Muss.",
      "Der große Verkäuferbar allein legt weder das Tagestief noch einen ununterbrochenen Bärenkanal fest.",
      "Neue tiefere Zone mit ihrer eigenen Folge lesen."
    ],
    "prompt": "Was entscheidet zwischen unterer Balance und Bärenkanal?",
    "answers": [
      {
        "label": "Die tatsächliche Gegenbewegung und der neue Anschluss.",
        "explanation": "Richtig. Neue tiefere Zone mit ihrer eigenen Folge lesen."
      },
      {
        "label": "Allein der erste große Verkäuferbar.",
        "explanation": "Er bestimmt die ganze spätere Struktur nicht."
      },
      {
        "label": "Die Pflicht zum Longnachkauf.",
        "explanation": "Ein Gegenplan benötigt ein eigenes begrenztes Risiko."
      }
    ],
    "correct": 0
  },
  {
    "number": 29,
    "title": "Zweiter Käuferversuch im unteren Bereich",
    "summary": "Erste und zweite Auslösung auseinanderhalten.",
    "section": "Lernfall 2",
    "scenario": "c22-29",
    "paragraphs": [
      "Im zweiten Lernfall reagiert die untere Zone mit einem ersten Käuferimpuls, Rückgabe und einem weiteren Käuferversuch. Der zweite Versuch kann den Test des alten Randes stützen.",
      "Die Zahl zwei ist keine Garantie. Bestimme Signalhoch, spätere Auslösung und eine vorab festgelegte Invalidierung. Ein tieferer Test kann vor der Käuferfolge liegen.",
      "Die Beispiele zeigen die getrennten Versuche. Ein ungefüllter erster Plan bleibt ohne Position; ein tatsächlich ausgelöster zweiter Plan wird nach seinen eigenen Preisen bewertet."
    ],
    "callout": "Zweiter Versuch ist ein neues Angebot, keine Pflicht.",
    "takeaways": [
      "Erste und zweite Auslösung auseinanderhalten.",
      "Die Zahl zwei ist keine Garantie.",
      "Zweiter Versuch ist ein neues Angebot, keine Pflicht."
    ],
    "prompt": "Was macht die zweite Käuferidee prüfbar?",
    "answers": [
      {
        "label": "Eine garantierte Umkehr nach zwei Tiefs.",
        "explanation": "Ein weiterer Verkäuferabschnitt ist möglich."
      },
      {
        "label": "Getrennte Versuche mit bekanntem Signal, Trigger und Schutz.",
        "explanation": "Richtig. Zweiter Versuch ist ein neues Angebot, keine Pflicht."
      },
      {
        "label": "Nur die Beschriftung High 2.",
        "explanation": "Die Ausführung fehlt dann noch."
      }
    ],
    "correct": 1
  },
  {
    "number": 30,
    "title": "Gehaltene Rückkehr wird zum Umkehrtag",
    "summary": "Die letzte Schlusslage bleibt bis zum Ende offen.",
    "section": "Lernfall 2",
    "scenario": "c22-30",
    "paragraphs": [
      "Im zweiten Lernfall steigt die Käuferfolge zurück in die obere Range und gewinnt dort weiteren Raum. Ein Schluss nahe ihrem Hoch könnte die Tagesform als Umkehr erscheinen lassen.",
      "Vor dem Schluss bleibt das eine Möglichkeit. Prüfe den gehaltenen Wiedereintritt, statt aus einer bloßen Randberührung bereits die ganze spätere Aufwärtsstrecke abzuleiten.",
      "Links endet das Replay am ersten Rücktest, rechts kommt weiterer Käuferanschluss hinzu. Diese neuen Bars durften nicht im frühen Plan als sicherer Gewinn verwendet werden."
    ],
    "callout": "Wiedereintritt braucht sichtbaren Anschluss.",
    "takeaways": [
      "Die letzte Schlusslage bleibt bis zum Ende offen.",
      "Vor dem Schluss bleibt das eine Möglichkeit.",
      "Wiedereintritt braucht sichtbaren Anschluss."
    ],
    "prompt": "Was unterstützt die spätere Umkehrlesart?",
    "answers": [
      {
        "label": "Nur eine kurze Berührung von unten.",
        "explanation": "Das kann sofort zurückgewiesen werden."
      },
      {
        "label": "Ein vorab sicher bekannter Tagesschluss.",
        "explanation": "Der endgültige Schluss war früh unbekannt."
      },
      {
        "label": "Gehaltene Rückkehr und weiterer Käuferanschluss im oberen Bereich.",
        "explanation": "Richtig. Wiedereintritt braucht sichtbaren Anschluss."
      }
    ],
    "correct": 2
  },
  {
    "number": 31,
    "title": "Große Signalbars am falschen Ort",
    "summary": "Signalqualität enthält auch Randlage und Schutzabstand.",
    "section": "Lernfall 3",
    "scenario": "c22-31",
    "paragraphs": [
      "Im dritten Lernfall liegt der frühe Handel in einer engen Range. Große Bars relativ zur Rangehöhe können auffällig wirken, zugleich aber einen weiten Schutz und wenig Zielraum verlangen.",
      "Ein Short direkt nahe der Untergrenze kann schlecht zum beabsichtigten Ziel passen. Ein späterer Rücklauf an einen besser benannten Bezug ist ein anderer Plan.",
      "Vergleiche den frühen Randpreis mit einer späteren Ausführung nach dem Bruch. Beide werden vor Kosten und mit ihren damaligen Schutzpreisen gerechnet, nicht nur nach Barfarbe ausgewählt."
    ],
    "callout": "Gute Form kann am ungünstigen Preis stehen.",
    "takeaways": [
      "Signalqualität enthält auch Randlage und Schutzabstand.",
      "Ein Short direkt nahe der Untergrenze kann schlecht zum beabsichtigten Ziel passen.",
      "Gute Form kann am ungünstigen Preis stehen."
    ],
    "prompt": "Warum ist ein großer Signalbar hier nicht automatisch günstig?",
    "answers": [
      {
        "label": "Weil Schutzabstand und naher Rangerand den Plan begrenzen können.",
        "explanation": "Richtig. Gute Form kann am ungünstigen Preis stehen."
      },
      {
        "label": "Weil große Bars nie informativ sind.",
        "explanation": "Sie liefern Information, aber nicht den ganzen Preisplan."
      },
      {
        "label": "Weil das Tagestief schon bekannt ist.",
        "explanation": "Das wäre Rückblickwissen."
      }
    ],
    "correct": 0
  },
  {
    "number": 32,
    "title": "Untere Basis und Rücktestziel",
    "summary": "Preisabstand kann vorab gerechnet werden.",
    "section": "Lernfall 3",
    "scenario": "c22-32",
    "paragraphs": [
      "Im dritten Lernfall bildet sich nach dem Verkauf eine kleinere untere Basis. Käuferanschluss von dort kann einen Test des alten oberen Bereichs ermöglichen.",
      "Für den eigenen Plan liegen Einstieg 42, Schutz 38 und Ziel 50 vor. Das ist eine Beispielrechnung; sie wird nicht als gemessene Gewinnchance ausgegeben.",
      "Ein erstes Käufersignal kann scheitern und später ein neues entstehen. Führe beide Pläne getrennt, einschließlich Teilgewinn und tatsächlicher Restposition. Der zweite Trade erbt keinen garantierten Erfolg vom ersten."
    ],
    "callout": "Neuer Versuch braucht einen neuen vollständigen Plan.",
    "takeaways": [
      "Preisabstand kann vorab gerechnet werden.",
      "Für den eigenen Plan liegen Einstieg 42, Schutz 38 und Ziel 50 vor.",
      "Neuer Versuch braucht einen neuen vollständigen Plan."
    ],
    "prompt": "Was bleibt nach einem gescheiterten ersten Versuch nötig?",
    "answers": [
      {
        "label": "Eine aus dem Zielverhältnis abgeleitete Trefferquote.",
        "explanation": "Streckenverhältnis und Trefferquote sind verschiedene Größen."
      },
      {
        "label": "Eine neue Auslösung mit eigenem begrenztem Risiko.",
        "explanation": "Richtig. Neuer Versuch braucht einen neuen vollständigen Plan."
      },
      {
        "label": "Ein automatischer gewinnsicherer zweiter Trade.",
        "explanation": "Ein zweiter Versuch kann ebenfalls scheitern."
      }
    ],
    "correct": 1
  },
  {
    "number": 33,
    "title": "Gerichteter Tagesbar trotz vieler Ranges",
    "summary": "Die spätere Tagesform darf frühe Unklarheit nicht löschen.",
    "section": "Lernfall 3",
    "scenario": "c22-33",
    "paragraphs": [
      "Im dritten Lernfall liegen die neuen Bereiche überwiegend tiefer. Der fertige Tagesbar wirkt dadurch bearish, obwohl innen viele Käuferreaktionen auftraten.",
      "Die Tageshülle zeigt Open, High, Low und Close, aber keine vollständige intraday Reihenfolge. Frühe unklare Signale bleiben bei ihrer damaligen Information zu bewerten.",
      "Beide Ansichten verwenden dieselben synthetischen Daten. Die Aggregation erfindet keine zweite Quelle. Einzelne späte Gegenbewegungen können trotzdem zum schwächeren Range-Trend passen."
    ],
    "callout": "Tageshülle ist keine frühe Zukunftsinformation.",
    "takeaways": [
      "Die spätere Tagesform darf frühe Unklarheit nicht löschen.",
      "Die Tageshülle zeigt Open, High, Low und Close, aber keine vollständige intraday Reihenfolge.",
      "Tageshülle ist keine frühe Zukunftsinformation."
    ],
    "prompt": "Was belegt der fertige bearish Tagesbar nicht?",
    "answers": [
      {
        "label": "Den tatsächlichen Tages-Close.",
        "explanation": "Dieser ist im fertigen OHLC enthalten."
      },
      {
        "label": "Das tatsächlich erreichte Low.",
        "explanation": "Auch dieses ist im Tagesbar enthalten."
      },
      {
        "label": "Dass jeder frühe Shortplan klar und profitabel gewesen wäre.",
        "explanation": "Richtig. Tageshülle ist keine frühe Zukunftsinformation."
      }
    ],
    "correct": 2
  },
  {
    "number": 34,
    "title": "Vorherige Schlussrange als Bärenflagge",
    "summary": "Ein alter Bereich kann zugleich eine Gegenbewegung sein.",
    "section": "Lernfall 4",
    "scenario": "c22-34",
    "paragraphs": [
      "Im vierten Lernfall bildet die vorherige Schlussrange eine kleine Erholung im größeren Verkäuferkontext. Ein späterer Bruch darunter kann zu einem neuen tieferen Bereich führen.",
      "Die Namen Range und Flagge sind unterschiedliche Sichtweisen auf dieselben Bars. Sie zählen nicht als unabhängige Beweise und ersetzen keinen Trigger.",
      "Die Panels zeigen den alten Bereich und die neue Verkäuferfolge. Halte die damalige Untergrenze fest. Ein Test zurück in die Zone wird erst mit tatsächlich neuen Bars bewertet."
    ],
    "callout": "Mehr passende Namen erhöhen nicht automatisch die Sicherheit.",
    "takeaways": [
      "Ein alter Bereich kann zugleich eine Gegenbewegung sein.",
      "Die Namen Range und Flagge sind unterschiedliche Sichtweisen auf dieselben Bars.",
      "Mehr passende Namen erhöhen nicht automatisch die Sicherheit."
    ],
    "prompt": "Wie bewertest du Range und Flagge auf denselben Bars?",
    "answers": [
      {
        "label": "Als zwei Beschreibungen desselben bekannten Preiswegs.",
        "explanation": "Richtig. Mehr passende Namen erhöhen nicht automatisch die Sicherheit."
      },
      {
        "label": "Als automatisch multiplizierte Trefferquote.",
        "explanation": "Die Beobachtungen sind nicht unabhängig."
      },
      {
        "label": "Als bereits ausgeführte Order.",
        "explanation": "Ein Trigger fehlt noch."
      }
    ],
    "correct": 0
  },
  {
    "number": 35,
    "title": "Späte Reaktion aus der letzten unteren Range",
    "summary": "Schwächerer Trend kann kräftig zurücksetzen.",
    "section": "Lernfall 4",
    "scenario": "c22-35",
    "paragraphs": [
      "Im vierten Lernfall entstehen mehrere tiefere Bereiche. Aus der letzten unteren Range entwickelt sich spät Käuferanschluss zurück zu einem vorherigen Bereich.",
      "Ein Tag mit mehr Gegenhandel muss nicht auf seinem Tief schließen. Der Rücktest kann gelingen, scheitern oder wegen Zeitmangels unvollständig bleiben.",
      "Vergleiche die frühere Verkäuferfolge mit der späten Erholung. Der alte Trendname darf diese neue Käuferinformation nicht ausblenden. Ein fernes Ziel bleibt eine offene Halteidee."
    ],
    "callout": "Aktuelle Gegenfolge neben der Tagesrichtung lesen.",
    "takeaways": [
      "Schwächerer Trend kann kräftig zurücksetzen.",
      "Ein Tag mit mehr Gegenhandel muss nicht auf seinem Tief schließen.",
      "Aktuelle Gegenfolge neben der Tagesrichtung lesen."
    ],
    "prompt": "Was bleibt beim späten Rücktest offen?",
    "answers": [
      {
        "label": "Eine garantierte volle Tagesumkehr.",
        "explanation": "Der Test kann begrenzt bleiben."
      },
      {
        "label": "Ob er vor Schluss das entfernte Ziel erreicht.",
        "explanation": "Richtig. Aktuelle Gegenfolge neben der Tagesrichtung lesen."
      },
      {
        "label": "Ein sicherer Schluss auf dem Tagestief.",
        "explanation": "Die Gegenreaktion kann weiterlaufen."
      }
    ],
    "correct": 1
  },
  {
    "number": 36,
    "title": "Drei höhere Bereiche und Trendvorrang",
    "summary": "Mehrfache Verlagerung kann Gegenpläne unattraktiv machen.",
    "section": "Lernfall 5",
    "scenario": "c22-36",
    "paragraphs": [
      "Im fünften Lernfall liegen drei nacheinander gebildete Ranges höher. Ihre Zwischenimpulse gewinnen schnell Raum und die Rückgaben bleiben zunächst begrenzt.",
      "Die vielen Seitwärtsbars machen den Tag nicht automatisch schwach. Die Trendrichtung bleibt für neue Pläne vorrangig, solange Gegenanschluss fehlt.",
      "Markiere jede Range mit ihren damaligen Grenzen. Ein früher Käufer-Rücklauf und ein später Gegensignal werden getrennt behandelt; die dritte Zone ist kein zwingendes Umkehrziel."
    ],
    "callout": "Anschluss entscheidet stärker als die Anzahl der Boxen.",
    "takeaways": [
      "Mehrfache Verlagerung kann Gegenpläne unattraktiv machen.",
      "Die vielen Seitwärtsbars machen den Tag nicht automatisch schwach.",
      "Anschluss entscheidet stärker als die Anzahl der Boxen."
    ],
    "prompt": "Was stützt hier Trendvorrang?",
    "answers": [
      {
        "label": "Jede Range als Beweis eines sicheren Gegentrades.",
        "explanation": "Gerichtete Verlagerung kann anhalten."
      },
      {
        "label": "Die Pflicht zur Umkehr nach drei Bereichen.",
        "explanation": "Die Zahl drei ist kein Gesetz."
      },
      {
        "label": "Mehrfache Verlagerung mit zunächst begrenzter Rückgabe.",
        "explanation": "Richtig. Anschluss entscheidet stärker als die Anzahl der Boxen."
      }
    ],
    "correct": 2
  },
  {
    "number": 37,
    "title": "Letzte obere Balance als scheiternde Flagge",
    "summary": "Ein neuer Ausbruch kann die letzte Fortsetzung sein.",
    "section": "Lernfall 5",
    "scenario": "c22-37",
    "paragraphs": [
      "Im fünften Lernfall wird eine kleine obere Balance kurz nach oben verlassen. Die neue Strecke wird zurückgenommen und Verkäufer handeln wieder darunter.",
      "Die alte Balance wird erst mit ihrem tatsächlich gescheiterten Anschluss als letzte Flagge deutlicher. Das war bei ihrem Entstehen noch kein feststehendes Ergebnis.",
      "Links ist der Ausbruch offen, rechts die Rücknahme sichtbar. Ein neuer Shortplan braucht eigene Auslösung und Schutz; bloße Hoffnung auf die frühere untere Range genügt nicht."
    ],
    "callout": "Letzte Flagge ist früh nur eine Möglichkeit.",
    "takeaways": [
      "Ein neuer Ausbruch kann die letzte Fortsetzung sein.",
      "Die alte Balance wird erst mit ihrem tatsächlich gescheiterten Anschluss als letzte Flagge deutlicher.",
      "Letzte Flagge ist früh nur eine Möglichkeit."
    ],
    "prompt": "Wann gewinnt die Scheiternslesart mehr Gewicht?",
    "answers": [
      {
        "label": "Bei sichtbarer Ausbruchsrücknahme mit Gegenanschluss.",
        "explanation": "Richtig. Letzte Flagge ist früh nur eine Möglichkeit."
      },
      {
        "label": "Schon beim ersten seitlichen Bar.",
        "explanation": "Die Balance kann weiterhin erfolgreich ausbrechen."
      },
      {
        "label": "Durch eine fest vorgeschriebene Uhrzeit.",
        "explanation": "Die tatsächliche Preisfolge bleibt entscheidend."
      }
    ],
    "correct": 0
  },
  {
    "number": 38,
    "title": "Gegenbewegung durch mehrere alte Zonen",
    "summary": "Frühere Grenzen liefern gestaffelte Prüfgebiete.",
    "section": "Lernfall 5",
    "scenario": "c22-38",
    "paragraphs": [
      "Im fünften Lernfall fällt die Gegenstrecke aus der höchsten Range in den nächsttieferen Bereich. Später prüft sie weitere bekannte Gegen-Signalpreise.",
      "Ein ganzer Durchlauf ist dabei möglich, aber nicht sicher. Betrachte jeden Wiedereintritt und den neuen Anschluss, bevor du ein noch ferneres Ziel als Pflicht behandelst.",
      "Die Panels erhalten alle alten Referenzen. Die Strecke wird nicht nachträglich in einen von Beginn an sicheren Shortgewinn umgerechnet. Restmenge und Zeitlimit bleiben vorher zu führen."
    ],
    "callout": "Fernere Ziele erst mit neuer Folge neu gewichten.",
    "takeaways": [
      "Frühere Grenzen liefern gestaffelte Prüfgebiete.",
      "Ein ganzer Durchlauf ist dabei möglich, aber nicht sicher.",
      "Fernere Ziele erst mit neuer Folge neu gewichten."
    ],
    "prompt": "Was macht den Zielweg prüfbar?",
    "answers": [
      {
        "label": "Nachträgliches Verschieben aller Zonen.",
        "explanation": "Das würde die damaligen Bezüge verfälschen."
      },
      {
        "label": "Gestaffelte alte Referenzen und zeitgerecht bewerteter Anschluss.",
        "explanation": "Richtig. Fernere Ziele erst mit neuer Folge neu gewichten."
      },
      {
        "label": "Ein garantiert sofortiger Test aller früheren Grenzen.",
        "explanation": "Der Verlauf kann vorher reagieren."
      }
    ],
    "correct": 1
  },
  {
    "number": 39,
    "title": "Schwacher Intraday-Trend unter starker Tageshülle",
    "summary": "Ein Schluss am Tief erzählt nicht die ganze Geschichte.",
    "section": "Lernfall 6",
    "scenario": "c22-39",
    "paragraphs": [
      "Im sechsten Lernfall bewegt sich der Tagesraum überwiegend abwärts. Gleichzeitig enthält der innere Preisweg deutliche Gegenbewegungen und längere Balancen.",
      "Eine später bearish Tageskerze kann deshalb nicht die Ausführung wie in einem ununterbrochenen Eröffnungstrend rechtfertigen. Die lokalen Rangegrenzen bleiben relevant.",
      "Die eigenen Beispiele zeigen den inneren Weg und seine OHLC-Hülle. Gleiche Endrichtung bedeutet nicht gleiche Einstiegssituation oder Haltebedingungen."
    ],
    "callout": "Tagesrichtung ersetzt keine Intraday-Struktur.",
    "takeaways": [
      "Ein Schluss am Tief erzählt nicht die ganze Geschichte.",
      "Eine später bearish Tageskerze kann deshalb nicht die Ausführung wie in einem ununterbrochenen Eröffnungstrend rechtfertigen.",
      "Tagesrichtung ersetzt keine Intraday-Struktur."
    ],
    "prompt": "Was muss zusätzlich zum bearish Tagesbar geprüft werden?",
    "answers": [
      {
        "label": "Nur die spätere Schlussfarbe.",
        "explanation": "Sie zeigt den inneren Ablauf nicht."
      },
      {
        "label": "Eine automatisch profitable frühe Shortausführung.",
        "explanation": "Der tatsächliche Einstieg kann ungünstig gewesen sein."
      },
      {
        "label": "Die inneren Swings und Rangebedingungen des konkreten Plans.",
        "explanation": "Richtig. Tagesrichtung ersetzt keine Intraday-Struktur."
      }
    ],
    "correct": 2
  },
  {
    "number": 40,
    "title": "Zwei gescheiterte Käuferideen im unteren Kontext",
    "summary": "Versuchszahl und größere Kontrolle zusammen lesen.",
    "section": "Lernfall 6",
    "scenario": "c22-40",
    "paragraphs": [
      "Im sechsten Lernfall versuchen Käufer zweimal, eine neue untere Zone zu drehen. Beide Versuche gewinnen nur begrenzten Raum; danach setzt Verkäuferfolge ein.",
      "Ein grüner Bar mit viel Überlappung kann schwach sein. Ein neues tieferes Verkäufersignal und tatsächlicher Trigger sind andere Beobachtungen als ein bloßes High-2-Etikett.",
      "Markiere die getrennten Käufer-Versuche und die anschließende Rücknahme. Ein nicht getriggerter Longplan bleibt ohne Position; eine tatsächlich ausgeführte Variante erhält ihren eigenen Verluststatus."
    ],
    "callout": "Zwei Versuche können beide scheitern.",
    "takeaways": [
      "Versuchszahl und größere Kontrolle zusammen lesen.",
      "Ein grüner Bar mit viel Überlappung kann schwach sein.",
      "Zwei Versuche können beide scheitern."
    ],
    "prompt": "Was unterstützt den erneuten Verkäuferplan?",
    "answers": [
      {
        "label": "Zurücknahme der Käuferideen mit neuem Verkäufertrigger.",
        "explanation": "Richtig. Zwei Versuche können beide scheitern."
      },
      {
        "label": "Die Garantie, dass High 2 immer hält.",
        "explanation": "Auch der zweite Versuch kann scheitern."
      },
      {
        "label": "Die Behauptung jeder grünen Bar sei ein Trade.",
        "explanation": "Signal und Ausführung sind verschieden."
      }
    ],
    "correct": 0
  },
  {
    "number": 41,
    "title": "Früher Käufertrend, später Verkäufer-Range",
    "summary": "Der Tag kann die Hauptlesart wechseln.",
    "section": "Lernfall 7",
    "scenario": "c22-41",
    "paragraphs": [
      "Im siebten Lernfall beginnt der Handel mit Käuferanschluss und einem späteren Klimax. Danach entsteht Verkäuferdruck, der die alte steigende Struktur bricht.",
      "Ein Rücklauf als tieferes Hoch kann die Gegenlesart ergänzen. Bis zu seinem tatsächlichen Entstehen war die spätere Verkäuferkontrolle noch nicht sicher.",
      "Vergleiche frühere Käuferstrecke und späteren Gegenbruch. Schreibe beide Phasen chronologisch auf. Der fertige Tagesname darf die anfangs sichtbare Stärke nicht aus der Historie löschen."
    ],
    "callout": "Neue Kontrolle darf die alte Lesart verändern.",
    "takeaways": [
      "Der Tag kann die Hauptlesart wechseln.",
      "Ein Rücklauf als tieferes Hoch kann die Gegenlesart ergänzen.",
      "Neue Kontrolle darf die alte Lesart verändern."
    ],
    "prompt": "Was rechtfertigt die spätere Anpassung?",
    "answers": [
      {
        "label": "Das rückwirkende Entfernen der Käuferstrecke.",
        "explanation": "Die alten Preise bleiben Teil des Verlaufs."
      },
      {
        "label": "Sichtbarer Gegenbruch und anschließender Verkäuferanschluss.",
        "explanation": "Richtig. Neue Kontrolle darf die alte Lesart verändern."
      },
      {
        "label": "Ein vorher sicher bekannter Tageswechsel.",
        "explanation": "Er war früh noch offen."
      }
    ],
    "correct": 1
  },
  {
    "number": 42,
    "title": "Breite Bärentreppen statt enger Kanal",
    "summary": "Überlappende Rückläufe verändern den Arbeitsmodus.",
    "section": "Lernfall 7",
    "scenario": "c22-42",
    "paragraphs": [
      "Im siebten Lernfall fallen neue Bereiche tiefer, während ihre Erholungen in vorherige Swingzonen zurückreichen. Das passt zugleich zu breiten Bärentreppen und versetzten Ranges.",
      "Die beiden Namen beziehen sich auf dieselben Preise. Mehr Rückgabe kann lokale Gegenpläne prüfbar machen, bedeutet aber keine garantiert bevorstehende Bullenumkehr.",
      "Markiere Überlappung und die größere Folge tieferer Hochs. Ein späterer höherer Test bleibt möglich, ohne dass er schon aus jedem kleinen Käuferbar sicher abgeleitet werden darf."
    ],
    "callout": "Breite Rückgabe und größere Richtung zusammen halten.",
    "takeaways": [
      "Überlappende Rückläufe verändern den Arbeitsmodus.",
      "Die beiden Namen beziehen sich auf dieselben Preise.",
      "Breite Rückgabe und größere Richtung zusammen halten."
    ],
    "prompt": "Was beschreibt die breitere Folge?",
    "answers": [
      {
        "label": "Einen garantiert engen einseitigen Kanal.",
        "explanation": "Deutlicher Gegenraum gehört gerade zur Beobachtung."
      },
      {
        "label": "Zwei unabhängige statistische Beweise.",
        "explanation": "Treppen und Ranges beschreiben denselben Weg."
      },
      {
        "label": "Tiefere Bereiche mit Rückläufen in vorherige Zonen.",
        "explanation": "Richtig. Breite Rückgabe und größere Richtung zusammen halten."
      }
    ],
    "correct": 2
  },
  {
    "number": 43,
    "title": "Käuferdruck wächst innerhalb der Anfangsrange",
    "summary": "Mehrere Hinweise können sich ergänzen.",
    "section": "Lernfall 8",
    "scenario": "c22-43",
    "paragraphs": [
      "Im achten Lernfall steigen bestätigte innere Tiefs und Hochs. Kleine frühe dojiartige Bars bleiben trotzdem unklare Umkehrsignale, bis gerichteter Käuferanschluss hinzukommt.",
      "Die spätere starke Folge darf nicht rückwirkend jede frühe Form gut machen. Notiere höheres Tief, konkrete Reaktion und weitere Käuferbars zeitgerecht.",
      "Unsere synthetische Folge zeigt den schrittweisen Druckaufbau vor dem Ausbruch. Überlappende Hinweise sind teilweise abhängig; ihre Anzahl ist keine gemessene Trefferquote."
    ],
    "callout": "Käuferdruck aus der ganzen sichtbaren Folge lesen.",
    "takeaways": [
      "Mehrere Hinweise können sich ergänzen.",
      "Die spätere starke Folge darf nicht rückwirkend jede frühe Form gut machen.",
      "Käuferdruck aus der ganzen sichtbaren Folge lesen."
    ],
    "prompt": "Was verbessert die frühe Käuferlesart?",
    "answers": [
      {
        "label": "Bestätigte höhere Swings plus gerichteter Anschluss.",
        "explanation": "Richtig. Käuferdruck aus der ganzen sichtbaren Folge lesen."
      },
      {
        "label": "Jede kleine Dojiform automatisch.",
        "explanation": "Sie kann in unklarer Balance liegen."
      },
      {
        "label": "Eine feste aus Hinweiszahlen abgeleitete Quote.",
        "explanation": "Diese Zahl wird hier nicht gemessen."
      }
    ],
    "correct": 0
  },
  {
    "number": 44,
    "title": "Ein Test dringt ein, der nächste berührt nur",
    "summary": "Preisgeometrie zeigt unterschiedliche Rückgabe.",
    "section": "Lernfall 8",
    "scenario": "c22-44",
    "paragraphs": [
      "Im achten Lernfall kehrt ein erster Test in den alten Bereich zurück. Der spätere zweite Test hält genau an der alten Obergrenze, bevor Käufer weiterlaufen.",
      "Eine Berührung ist weder eine Unterschreitung noch ein Nichtbesuch. Vergleiche alle Tests mit derselben bekannten Referenz und halte Ausführung gesondert.",
      "Die Beispiele zeigen Tiefs bei 44, 46 und 47 gegenüber der Obergrenze 46. Der spätere stärkere Befund garantiert dennoch keine unbegrenzte Fortsetzung."
    ],
    "callout": "Preisbesuch exakt benennen.",
    "takeaways": [
      "Preisgeometrie zeigt unterschiedliche Rückgabe.",
      "Eine Berührung ist weder eine Unterschreitung noch ein Nichtbesuch.",
      "Preisbesuch exakt benennen."
    ],
    "prompt": "Wie ordnest du ein Tief genau bei 46 ein?",
    "answers": [
      {
        "label": "Als garantierte Limitfüllung.",
        "explanation": "Preisberührung allein belegt keine Ausführung."
      },
      {
        "label": "Als Berührung der bekannten Grenze 46.",
        "explanation": "Richtig. Preisbesuch exakt benennen."
      },
      {
        "label": "Als Nichtbesuch oberhalb davon.",
        "explanation": "Gleichheit ist eine tatsächliche Berührung."
      }
    ],
    "correct": 1
  },
  {
    "number": 45,
    "title": "Erweiterung oben und unten statt Zieltrend",
    "summary": "Eine plausible Erwartung darf widerlegt werden.",
    "section": "Lernfall 9",
    "scenario": "c22-45",
    "paragraphs": [
      "Im neunten Lernfall ist die erste Range relativ klein. Ausbrüche oben und unten schaffen neue Tagesextreme, werden aber jeweils wieder zurückgenommen.",
      "Die projizierten Trendziele bleiben unerreicht. Das ist ein abweichender Verlauf, kein Grund, nachträglich andere Grenzen als die ursprünglichen zu verwenden.",
      "Unsere Vergleichspanels erhalten die Anfangsrange und zeigen spätere beidseitige Erweiterung. Die neue Hauptlesart bleibt Balance statt der erwarteten klaren Richtung."
    ],
    "callout": "Nicht erfüllte Ziele ehrlich führen.",
    "takeaways": [
      "Eine plausible Erwartung darf widerlegt werden.",
      "Die projizierten Trendziele bleiben unerreicht.",
      "Nicht erfüllte Ziele ehrlich führen."
    ],
    "prompt": "Wie behandelst du die unerreichten Trendziele?",
    "answers": [
      {
        "label": "Als heimlich erfüllt durch neue passende Grenzen.",
        "explanation": "Das wäre rückblickende Anpassung."
      },
      {
        "label": "Als sicheren Beweis einer ausgeführten Gewinnorder.",
        "explanation": "Ein Preisplan und Trigger fehlen dann noch."
      },
      {
        "label": "Als nicht erfüllt bei unveränderten ursprünglichen Ankern.",
        "explanation": "Richtig. Nicht erfüllte Ziele ehrlich führen."
      }
    ],
    "correct": 2
  },
  {
    "number": 46,
    "title": "Erster Gegenversuch und spätere zweite Reaktion",
    "summary": "Ein Gegensignal im engen Abschnitt kann früh sein.",
    "section": "Lernfall 9",
    "scenario": "c22-46",
    "paragraphs": [
      "Im neunten Lernfall läuft ein Käuferabschnitt zunächst eng nach oben. Der erste neue Hoch-Gegenbar muss dadurch noch kein geeigneter größerer Short sein.",
      "Eine spätere zweite Reaktion mit mehr Verkäuferanschluss kann ein anderes Signalangebot bilden. Versuchszahl, Kontext und tatsächliche Auslösung werden gemeinsam geprüft.",
      "Links erscheint nur der erste Gegenbar. Rechts entwickeln sich Rückgabe und neuer Test. Auch die zweite Idee ist kein garantiert profitabler Scalp; ihr Zielraum und Risiko bleiben zu rechnen."
    ],
    "callout": "Zweiter Versuch bringt neue Information, keine Garantie.",
    "takeaways": [
      "Ein Gegensignal im engen Abschnitt kann früh sein.",
      "Eine spätere zweite Reaktion mit mehr Verkäuferanschluss kann ein anderes Signalangebot bilden.",
      "Zweiter Versuch bringt neue Information, keine Garantie."
    ],
    "prompt": "Was muss beim zweiten Gegensignal geprüft werden?",
    "answers": [
      {
        "label": "Neue Reaktion, Auslösung, Zielraum und begrenztes Risiko.",
        "explanation": "Richtig. Zweiter Versuch bringt neue Information, keine Garantie."
      },
      {
        "label": "Nur die Zahl zwei.",
        "explanation": "Sie enthält keinen vollständigen Tradeplan."
      },
      {
        "label": "Ein garantierter Gewinn wegen der Range.",
        "explanation": "Auch Range-Trades können scheitern."
      }
    ],
    "correct": 0
  },
  {
    "number": 47,
    "title": "Lange kleine Range und später Käuferausbruch",
    "summary": "Die alte Tagesbreite ist kein Pflichtziel.",
    "section": "Lernfall 10",
    "scenario": "c22-47",
    "paragraphs": [
      "Im zehnten Lernfall bleibt der bekannte Bereich lange unverändert. Zunehmender Käuferdruck und ein später Ausbruchsbar schaffen schließlich neue Strecke.",
      "Eine historische Seltenheit kleiner Schlussranges wäre nur mit definierter Datenbasis auszuwerten. Hier wird keine aktuelle 90-Prozent-Chance aus einer alten Einzelbeobachtung übernommen.",
      "Die Panels zeigen frühe Balance und späten Anschluss. Ein ausbleibender Ausbruch bleibt als alternative Folge gültig. Wer spät handelt, berücksichtigt den kurzen verbleibenden Zeitraum."
    ],
    "callout": "Historische Beobachtung ist keine heutige Garantie.",
    "takeaways": [
      "Die alte Tagesbreite ist kein Pflichtziel.",
      "Eine historische Seltenheit kleiner Schlussranges wäre nur mit definierter Datenbasis auszuwerten.",
      "Historische Beobachtung ist keine heutige Garantie."
    ],
    "prompt": "Was trägt den tatsächlichen späten Käuferplan?",
    "answers": [
      {
        "label": "Die Pflicht zur durchschnittlichen Tagesbreite.",
        "explanation": "Der heutige Bereich darf kleiner bleiben."
      },
      {
        "label": "Sichtbarer Druck und neuer Ausbruch mit eigenem Risikoplan.",
        "explanation": "Richtig. Historische Beobachtung ist keine heutige Garantie."
      },
      {
        "label": "Eine universelle Quote ohne Datenauswertung.",
        "explanation": "Diese wird hier nicht gemessen."
      }
    ],
    "correct": 1
  },
  {
    "number": 48,
    "title": "Spätes Ziel und wenig Raum für eine zweite Range",
    "summary": "Sitzungsende begrenzt die noch mögliche Folge.",
    "section": "Lernfall 10",
    "scenario": "c22-48",
    "paragraphs": [
      "Im zehnten Lernfall erreicht der späte Impuls ein Projektionsgebiet. Für eine lange obere Range bleibt danach wenig Zeit.",
      "Ein Zielbesuch und ein möglicher Teilgewinn werden am tatsächlich erreichten Preis bewertet. Fernere Projektionen dürfen beobachtet werden, sind aber vor Schluss nicht zwingend erreichbar.",
      "Das letzte Panel zeigt den kurzen Anschluss nach dem Ausbruch. Halte die vorherige Zielrechnung und den geplanten Ausstieg fest. Ein am Ende schöner Tagesbar ersetzt keine frühere Füllung."
    ],
    "callout": "Zeitrest und Zielerreichung getrennt führen.",
    "takeaways": [
      "Sitzungsende begrenzt die noch mögliche Folge.",
      "Ein Zielbesuch und ein möglicher Teilgewinn werden am tatsächlich erreichten Preis bewertet.",
      "Zeitrest und Zielerreichung getrennt führen."
    ],
    "prompt": "Was folgt aus dem späten Projektionsbesuch?",
    "answers": [
      {
        "label": "Eine garantierte lange obere Range.",
        "explanation": "Die Sitzung kann bald enden."
      },
      {
        "label": "Ein sicherer Besuch aller weiteren Ziele.",
        "explanation": "Die Strecke kann vorher stoppen."
      },
      {
        "label": "Die Prüfung des geplanten Gewinnmanagements bei begrenztem Zeitrest.",
        "explanation": "Richtig. Zeitrest und Zielerreichung getrennt führen."
      }
    ],
    "correct": 2
  }
];

export const chapterTwentyTwoLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-22-${number}`;
  return {
    id: `price-action-trends.chapter-22.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 22 · ${d.section}`,
    sourceAnchors: [`Kapitel 22 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 22 · Trendtage aus Ranges',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Rangegrenzen, Übergänge und Tests beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
