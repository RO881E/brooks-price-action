import { makeLessons } from './lessons';
export const rangesChapterTwoLessons = makeLessons('chapter-02', 'Kapitel 2 · Stärkezeichen eines Ausbruchs prüfen', [
  {
    "title": "Stärke ist ein Vergleich",
    "summary": "Eine Ausbruchskerze wird mit vorherigen Kerzen und ihrer Grenze verglichen.",
    "paragraphs": [
      "Nora beginnt einen neuen erfundenen Minutenfall. Vier Kerzen bleiben unter oder an 50 Punkten. Ihre Körper messen 0,3; 0,2; 0,4 und 0,2 Punkte. Die obere Grenze wird vor der fünften Kerze bei 50 festgelegt.",
      "Die fünfte Kerze eröffnet bei 49,4, erreicht 51,5 und schließt bei 51,4. Ihr Tief liegt bei 49,3. Der Körper von 2 Punkten ist deutlich größer als die vorherigen Körper. Dieser Vergleich ist aussagekräftiger als „Die Kerze sieht groß aus“.",
      "Wir beurteilen mehrere Hinweise zusammen: Körper, Schluss, Entfernung zur Grenze, Folgekerzen und vorherigen Verlauf. Die eigene Zeichnung liefert keine geprüfte Trefferquote. Stärke beschreibt hier das sichtbare Bild."
    ],
    "prompt": "Womit vergleicht Nora die Ausbruchskerze?",
    "answers": [
      "Mit den vorherigen Kerzen und der vorher festgelegten Grenze.",
      "Nur mit der Farbe des Hintergrunds.",
      "Mit dem späteren Kontogewinn."
    ],
    "rule": "Stärke braucht einen ausdrücklich benannten Bezug.",
    "diagram": "par2-strong"
  },
  {
    "title": "Ein großer Körper mit kleinen Schatten",
    "summary": "Die starke fünfte Kerze hat 2 Punkte Körper und 2,2 Punkte Spanne.",
    "paragraphs": [
      "Der Körper reicht von der Eröffnung 49,4 bis zum Schluss 51,4. Er misst 2 Punkte. Die gesamte Spanne reicht vom Tief 49,3 zum Hoch 51,5 und misst 2,2 Punkte.",
      "Der obere und untere Schatten messen jeweils 0,1. Damit nimmt der Körper rund 90,9 Prozent der Spanne ein. Das zeigt eine deutliche Preisveränderung zwischen Eröffnung und Schluss mit kleinen äußeren Schatten.",
      "Die Rechnung beschreibt abgeschlossene Daten. Sie beweist weder eine Teilnehmerabsicht noch eine sichere nächste Kerze. Nora hält den Unterschied zwischen einer Stärkebeschreibung und einer Prognose fest."
    ],
    "prompt": "Wie groß ist der Körper?",
    "answers": [
      "2 Punkte.",
      "2,2 Punkte.",
      "0,1 Punkt."
    ],
    "rule": "Körper und Schatten gemeinsam lesen.",
    "diagram": "par2-strong"
  },
  {
    "title": "Ein höheres Hoch reicht noch nicht",
    "summary": "Zwei Kerzen können dasselbe Hoch und sehr verschiedene Schlüsse haben.",
    "paragraphs": [
      "In der schwachen Variante erreicht Kerze 5 ebenfalls 51,5. Ihre Eröffnung 49,4 und ihr Tief 49,3 bleiben gleich. Sie schließt jedoch bei 49,8 statt bei 51,4.",
      "Der Körper misst nur 0,4 und der obere Schatten 1,7 Punkte. Obwohl Preise über 50 gehandelt wurden, endet diese Minute wieder unter der Grenze. Das ist eine andere Aussage als ein hoher Schluss über 50.",
      "Die beiden Varianten haben denselben höchsten Preis. Wer nur das Hoch betrachtet, würde den Rückfall der schwachen Variante übersehen. Nora vergleicht deshalb Hoch und Schluss getrennt."
    ],
    "prompt": "Was unterscheidet die schwache Variante trotz gleichem Hoch?",
    "answers": [
      "Ihr Schluss liegt wieder unter 50.",
      "Sie hat überhaupt keinen Ausbruchspreis gehandelt.",
      "Sie garantiert einen Abwärtstrend."
    ],
    "rule": "Überschreitung und Abschluss jenseits der Grenze getrennt prüfen.",
    "diagram": "par2-weak"
  },
  {
    "title": "Wie weit liegt der Schluss außerhalb?",
    "summary": "Die starke Variante schließt 1,4 Punkte über 50.",
    "paragraphs": [
      "Ein Schluss bei 51,4 liegt 1,4 Punkte über der Grenze. Ein Schluss bei 50,1 läge nur 0,1 Punkt darüber. Beide liegen außerhalb; die Entfernungen unterscheiden sich deutlich.",
      "Für die Einordnung braucht Nora außerdem die übliche Bewegung im Ausschnitt und die kleinste Preisstufe des Produkts. Wir verwenden hier einen erfundenen Markt mit einer Preisstufe von 0,1 Punkt.",
      "Die 1,4 Punkte entsprechen in diesem Modell 14 Preisstufen. Daraus entsteht kein universeller Mindestabstand für echte Märkte. Ein Zahlenwert erhält seine Bedeutung durch Produkt und Vergleichszeitraum."
    ],
    "prompt": "Wie viele Preisstufen von 0,1 entsprechen 1,4 Punkten?",
    "answers": [
      "14 Preisstufen.",
      "Eine Preisstufe.",
      "140 Preisstufen."
    ],
    "rule": "Abstand in Preisstufen und Kontext ausdrücken.",
    "diagram": "par2-strong"
  },
  {
    "title": "Mehrere vorherige Hochs überschreiten",
    "summary": "Der Schluss von Kerze 5 liegt über den Hochs der ersten vier Kerzen.",
    "paragraphs": [
      "Die ersten vier Hochs sind 49,5; 49,8; 50,0 und 49,9. Ein Schluss von 51,4 liegt über allen vier. Die Ausbruchskerze beendet ihren Abschnitt damit oberhalb der zuletzt besuchten Hochbereiche.",
      "Ein Hoch von 51,5 allein würde diese Bereiche ebenfalls überschreiten. Der schwache Schluss bei 49,8 zeigt aber, dass der Preis nicht oben blieb. Deshalb kann ein hoher Schluss ein anderer Hinweis sein als eine kurze Spitze.",
      "Vier vorherige Hochs sind nicht automatisch vier unabhängige Bestätigungen. Sie gehören zum selben Ausschnitt. Nora beschreibt die Reichweite des Ausbruchs, ohne daraus vier getrennte statistische Beweise zu machen."
    ],
    "prompt": "Was liegt in der starken Variante über allen vier vorherigen Hochs?",
    "answers": [
      "Auch der Schluss von Kerze 5.",
      "Nur ihr Tief.",
      "Ihr Handelsvolumen in Punkten."
    ],
    "rule": "Reichweite beschreiben und zusammenhängende Hinweise nicht doppelt zählen.",
    "diagram": "par2-strong"
  },
  {
    "title": "Anschluss liefert neue Information",
    "summary": "Kerze 6 endet mit 52,2 noch höher.",
    "paragraphs": [
      "Nach der starken fünften Kerze folgt O51,4 H52,3 L51,2 C52,2. Die sechste Kerze hat ebenfalls einen steigenden Körper und bleibt mit ihrem Tief über 50.",
      "Der neue Schluss unterstützt die Richtung. Nora konnte diese Kerze bei einer Entscheidung nach Minute 5 noch nicht verwenden. Ab Minute 6 hat sie mehr Information und zugleich einen anderen aktuellen Preis.",
      "Eine einzelne Anschlusskerze ist kein Vertrag über die Zukunft. Sie stärkt die Beschreibung einer gerichteten Bewegung. Nora fragt trotzdem nach Stopabstand, Ziel und Ausführungsbedingungen, bevor sie einen Einstieg prüft."
    ],
    "prompt": "Wann darf Nora Kerze 6 für ihre Entscheidung verwenden?",
    "answers": [
      "Erst wenn die betreffende Information vorliegt.",
      "Rückwirkend bereits nach Kerze 4.",
      "Sobald sie sich den Verlauf wünscht."
    ],
    "rule": "Zusätzliche Bestätigung kommt zu einem späteren Zeitpunkt.",
    "diagram": "par2-strong"
  },
  {
    "title": "Fehlender Anschluss ist ein Warnzeichen",
    "summary": "In der schwachen Variante folgt eine fallende sechste Kerze.",
    "paragraphs": [
      "Nach dem schwachen Schluss 49,8 eröffnet die nächste Minute dort. Sie erreicht 50,0, fällt auf 48,8 und schließt bei 49,1. Der fallende Körper und der Schluss unter 50 unterstützen den vorherigen Ausbruchsversuch nicht.",
      "Nora sieht jetzt eine Spitze über die Grenze mit anschließendem Rückfall. Ein sofortiger Kauf allein wegen des Hochs hätte eine andere Informationsgrundlage als ein Einstieg nach bestätigtem Anschluss.",
      "Das Warnzeichen garantiert keine weitere Abwärtsbewegung. Der Markt könnte erneut steigen. Es beantwortet die engere Frage: Gibt es in dieser Folge Unterstützung für den gerade geprüften Ausbruch nach oben?"
    ],
    "prompt": "Unterstützt die sechste Kerze den Ausbruch nach oben?",
    "answers": [
      "Nein, sie fällt zurück und schließt deutlich unter 50.",
      "Ja, weil zuvor 51,5 erreicht wurde.",
      "Ja, weil jeder Rücksetzer erfolgreich endet."
    ],
    "rule": "Fehlenden Anschluss ausdrücklich im Bericht nennen.",
    "diagram": "par2-weak"
  },
  {
    "title": "Wenig Überlappung erkennen",
    "summary": "Kerze 6 handelt nur kurz innerhalb der Spanne von Kerze 5.",
    "paragraphs": [
      "Die Spanne von Kerze 5 reicht von 49,3 bis 51,5. Kerze 6 reicht von 51,2 bis 52,3. Beide Spannen haben nur den Bereich 51,2 bis 51,5 gemeinsam: 0,3 Punkt.",
      "Wenig Überlappung kann eine rasche Verlagerung des gehandelten Preisbereichs zeigen. Viel Überlappung würde eher zeigen, dass neue Abschnitte denselben Bereich wiederholt besuchen.",
      "Eine geringe Überlappung ist ein Hinweis aus den Preisen. Sie verrät nicht die genaue Menge offener Orders. Nora prüft außerdem, ob mehrere Kerzen in diese Richtung passen oder ob es nur ein einzelner Sprung war."
    ],
    "prompt": "Wie groß ist die gemeinsame Spanne von Kerzen 5 und 6?",
    "answers": [
      "0,3 Punkt.",
      "2,2 Punkte.",
      "Keine Überlappung."
    ],
    "rule": "Gemeinsame Preisbereiche statt nur Farben vergleichen.",
    "diagram": "par2-strong"
  },
  {
    "title": "Eine Mikrolücke zwischen drei Kerzen",
    "summary": "Das Tief von Kerze 6 liegt über dem Hoch von Kerze 4.",
    "paragraphs": [
      "Nora vergleicht diesmal nicht benachbarte Kerzen. Zwischen Kerze 4 und Kerze 6 steht die kräftige Kerze 5. Das Hoch von Kerze 4 ist 49,9, das Tief von Kerze 6 ist 51,2.",
      "Der Abstand beträgt 1,3 Punkte. In diesem Dreiervergleich bleibt eine Mikrolücke. Das bedeutet nicht, dass während der gesamten Folge dort kein Preis gehandelt wurde: Kerze 5 läuft gerade durch diesen Bereich.",
      "Eine solche Mikrolücke kann schnelle gerichtete Bewegung anzeigen. Sie ist etwas anderes als eine Lücke zwischen dem Schluss einer Sitzung und der Eröffnung der nächsten. Nora nennt die verwendeten Kerzennummern, um den Bezug klar zu halten."
    ],
    "prompt": "Beweist diese Mikrolücke, dass zwischen 49,9 und 51,2 nie gehandelt wurde?",
    "answers": [
      "Nein, die mittlere Kerze 5 handelt in diesem Bereich.",
      "Ja, alle diese Preise fehlen dauerhaft.",
      "Ja, weil die Börse geschlossen war."
    ],
    "rule": "Eine Dreier-Mikrolücke ist keine Sitzungslücke.",
    "diagram": "par2-gap"
  },
  {
    "title": "Ein kleiner erster Ausbruch kann wachsen",
    "summary": "Eine kleine Kerze ist nicht automatisch ein gescheiterter Ausbruch.",
    "paragraphs": [
      "Im kleinen Vergleichsfall schließt Kerze 5 bei 50,2 nach O49,4 H50,3 L49,3. Der Körper misst 0,8 Punkt. Das ist kleiner als im starken Hauptfall, doch der Schluss liegt über 50.",
      "Die folgenden Schlüsse sind 50,8 und 51,3. Beide folgenden Kerzen haben steigende Körper und ihre Tiefs bleiben oberhalb von 50. Erst diese Folge ergibt den deutlicheren Verlauf.",
      "Nora hätte die späteren Kerzen nicht vorher kennen können. Das Beispiel zeigt daher keine Kaufregel für jede kleine Kerze. Es zeigt, warum „klein“ und „ohne Fortsetzung“ nicht dasselbe sind."
    ],
    "prompt": "Kann ein kleiner erster Ausbruch später klare Unterstützung erhalten?",
    "answers": [
      "Ja, passende Folgekerzen können neue Hinweise liefern.",
      "Nein, nur die erste Kerze entscheidet alles.",
      "Ja, deshalb ist jede kleine Kerze ein Kauf."
    ],
    "rule": "Den Verlauf weiter prüfen statt die erste Kerze allein entscheiden zu lassen.",
    "diagram": "par2-small"
  },
  {
    "title": "Den ersten Rücksetzer nach seiner Tiefe prüfen",
    "summary": "Im Hauptfall bleibt das Rücksetzertief bei 51,6.",
    "paragraphs": [
      "Kerze 7 fällt von O52,2 auf C51,9. Ihr Tief liegt bei 51,6. Gegenüber dem Hoch 52,3 von Kerze 6 sind das 0,7 Punkt Rücklauf, wobei Kerze 7 selbst ein neues Hoch bei 52,4 erreicht.",
      "Der Rücklauf bleibt deutlich über 50. Deshalb hat diese Pause den Ausbruch nicht vollständig zurückgenommen. Nora verwendet den genannten Bezug 52,3; bei einem Bezug zum neuen Hoch 52,4 ergäbe sich eine andere Entfernung von 0,8.",
      "Die genaue Bewegung innerhalb der Kerze ist aus OHLC nicht bekannt. Das Schaubild zeigt Hoch, Tief und Schluss, aber nicht, in welcher Reihenfolge das neue Hoch und Tief entstanden."
    ],
    "prompt": "Wie weit liegt das Tief 51,6 unter dem vorherigen Hoch 52,3?",
    "answers": [
      "0,7 Punkt.",
      "2,3 Punkte.",
      "Garantiert war zuerst das Hoch und dann das Tief erreicht."
    ],
    "rule": "Tiefe mit benanntem Bezug und ohne erfundene Reihenfolge prüfen.",
    "diagram": "par2-pause"
  },
  {
    "title": "Dauer und Tiefe sind verschiedene Fragen",
    "summary": "Eine kurze Pause und eine lange Rückkehr liefern unterschiedliche Bilder.",
    "paragraphs": [
      "Im Hauptfall steht eine fallende Kerze 7 zwischen den steigenden Kerzen 6 und 8. Der Rücklauf bleibt begrenzt, danach schließt Kerze 8 bei 53,1. Diese Pause dauert im gezeigten Ausschnitt einen abgeschlossenen Minutenabschnitt.",
      "Eine andere Folge könnte mehrere Minuten unter 50 handeln. Sie würde sowohl durch Dauer als auch durch Ort vom Hauptfall abweichen. Eine einzelne Kerzenfarbe beschreibt diese Unterschiede nicht vollständig.",
      "Das Wort kurz hängt vom gewählten Zeitrahmen ab. Eine Minute ist im Minutenchart ein Abschnitt; im Tageschart wäre ein Abschnitt ein Tag. Nora schreibt deshalb Zeitebene und Anzahl der betroffenen Kerzen auf."
    ],
    "prompt": "Welche Angaben braucht ein Bericht über die Rücksetzer-Dauer?",
    "answers": [
      "Zeitebene und Zahl der betroffenen Abschnitte.",
      "Nur die Farbe der letzten Kerze.",
      "Nur den gewünschten Einstiegspreis."
    ],
    "rule": "Dauer, Tiefe und Zeitebene gemeinsam benennen.",
    "diagram": "par2-pause"
  },
  {
    "title": "Eine neue hohe Eröffnung prüfen",
    "summary": "Eröffnung über dem vorherigen Schluss ist ein gesonderter Vergleich.",
    "paragraphs": [
      "Der Hauptfall eröffnet Kerze 6 genau am Schluss 51,4 von Kerze 5. Es gibt in diesem Beispiel keinen Abstand zwischen diesen beiden Werten. Eine hypothetische Eröffnung bei 51,6 läge dagegen 0,2 höher.",
      "Nora unterscheidet diesen Schluss-Eröffnungs-Abstand von der Mikrolücke zwischen Kerze 4 und 6. Unterschiedliche Bezugsgrößen können verschieden große Lücken ergeben, obwohl sie im selben Chart liegen.",
      "Auch ein höheres Open müsste im weiteren Verlauf beurteilt werden. Wenn die Kerze danach zurückfällt, ist der frühe höhere Preis nicht als dauerhafte Stärke bestätigt. Eine Angabe wird nicht durch ihren Namen zum sicheren Signal."
    ],
    "prompt": "Gibt es im Hauptfall eine höhere Eröffnung von Kerze 6 gegenüber C5?",
    "answers": [
      "Nein, beide Werte sind 51,4.",
      "Ja, die Mikrolücke beweist das automatisch.",
      "Ja, jede steigende Kerze eröffnet höher."
    ],
    "rule": "Lücken immer mit ihren beiden Bezugswerten benennen.",
    "diagram": "par2-gap"
  },
  {
    "title": "Volumen mit einem passenden Durchschnitt vergleichen",
    "summary": "600 Einheiten sind das Sechsfache des vorherigen Durchschnitts.",
    "paragraphs": [
      "Die ersten vier Minuten unseres Volumenbeispiels enthalten 100, 120, 80 und 100 gehandelte Einheiten. Zusammen sind das 400. Geteilt durch vier ergibt sich ein Durchschnitt von 100 Einheiten je Minute.",
      "Kerze 5 enthält 600 Einheiten. Das Verhältnis 600 zu 100 beträgt sechs. Wir vergleichen dieselbe Datenquelle, Einheit und Abschnittslänge. Ein Tagesvolumen mit einem Minutenvolumen zu vergleichen wäre ohne Anpassung irreführend.",
      "Hohes Volumen zeigt mehr gehandelte Menge. Es beweist nicht allein die zukünftige Richtung. Auch eine starke Gegenbewegung oder eine Erschöpfungsphase kann viel Volumen haben. Nora verbindet Menge mit Preisverlauf."
    ],
    "prompt": "Wie groß ist das Verhältnis 600 zum vorherigen Durchschnitt 100?",
    "answers": [
      "Sechsfach.",
      "Vierfach.",
      "Eine bewiesene Trefferquote von 60 Prozent."
    ],
    "rule": "Volumenverhältnis und Erfolgswahrscheinlichkeit sind verschiedene Größen.",
    "diagram": "par2-volume"
  },
  {
    "title": "Eine Order hat immer zwei Seiten",
    "summary": "Hohes Volumen ist nicht gleichbedeutend mit ausschließlich Käufen.",
    "paragraphs": [
      "Jedes ausgeführte Geschäft hat eine Kauf- und eine Verkaufsseite. Die 600 Einheiten des Beispiels sind gehandelte Menge. Der Volumenbalken allein zeigt nicht, welche Seite wie aggressiv Aufträge auslöste.",
      "Der steigende Preis kann zusammen mit dem Volumen als Aktivität in der Bewegung beschrieben werden. Aussagen über aggressive Käufer benötigen jedoch passendere Daten und eine ausdrücklich benannte Auswertungsmethode.",
      "Nora liest deshalb aus dem normalen Volumenbalken keine Teilnehmerliste und keine garantierte Fortsetzung. Ein einfacher Chart kann nützlich sein, wenn seine Informationsgrenzen klar bleiben."
    ],
    "prompt": "Beweisen 600 gehandelte Einheiten, dass es keine Verkäufer gab?",
    "answers": [
      "Nein, jedes Geschäft hat beide Seiten.",
      "Ja, wenn die Kerze steigt.",
      "Ja, wenn der Balken besonders hoch ist."
    ],
    "rule": "Gehandelte Menge nicht mit einseitigen Teilnehmerabsichten verwechseln.",
    "diagram": "par2-volume"
  },
  {
    "title": "Dasselbe OHLC kann verschiedene Wege enthalten",
    "summary": "Vier Kerzenwerte reichen nicht für Aussagen über alle Rückläufe innerhalb der Minute.",
    "paragraphs": [
      "Weg A besucht die Preise 49,4; 49,3; 51,2; 51,3; 51,5; 51,4. Weg B besucht 49,4; 51,5; 49,3; 51,2; 49,6; 51,4. Beide enden mit O49,4 H51,5 L49,3 C51,4.",
      "Weg A hält nach dem ersten starken Anstieg relativ hohe Preise. Weg B schwankt stärker zurück und steigt wieder. Aus der abgeschlossenen Kerze allein lassen sich diese unterschiedlichen Zwischenwege nicht rekonstruieren.",
      "Wer beurteilen möchte, wie lange ein laufender Bar nahe seinem Hoch blieb, benötigt feinere Daten oder eine zeitliche Aufzeichnung. Nora erfindet solche Informationen nicht aus einer hübschen abgeschlossenen Kerze."
    ],
    "prompt": "Welche Aussage ist bei gleichem OHLC zulässig?",
    "answers": [
      "Verschiedene Zwischenwege können zu denselben vier Werten führen.",
      "Beide Wege müssen in jeder Sekunde gleich sein.",
      "Der Schluss beweist die Dauer nahe dem Hoch."
    ],
    "rule": "Aussagen zum inneren Verlauf benötigen entsprechende Daten.",
    "diagram": "par2-paths"
  },
  {
    "title": "Das Gefühl von Eile ist kein Messwert",
    "summary": "Angst vor einer verpassten Bewegung ersetzt keine Chartprüfung.",
    "paragraphs": [
      "Eine schnelle Folge steigender Preise kann sich dringend anfühlen. Nora möchte kaufen, hofft zugleich auf einen günstigeren Rücksetzer und ärgert sich, wenn er nicht kommt. Das beschreibt ihre Reaktion.",
      "Dieses Gefühl kann beim Beobachten einer raschen Bewegung auftreten, liefert aber keine objektiv gemessene Chance. Nora kehrt deshalb zu den sichtbaren Angaben zurück: Grenze, Schlusslage, Anschluss, Rücksetzer und Risiko.",
      "Eine kurze Pause zum Rechnen ist Teil ihres Plans. Wenn sie dadurch keinen passenden Einstieg mehr findet, muss sie nicht hinterherlaufen. Emotion und Marktbeschreibung werden getrennt dokumentiert."
    ],
    "prompt": "Was soll Nora mit dem Gefühl „Ich muss sofort rein“ machen?",
    "answers": [
      "Es getrennt notieren und den Plan mit sichtbaren Daten prüfen.",
      "Es als garantierten Stärkeindikator behandeln.",
      "Die Positionsgröße verdoppeln."
    ],
    "rule": "Dringlichkeit im Kopf ist keine zusätzliche Bestätigung.",
    "diagram": "par2-strong"
  },
  {
    "title": "Stärke nach unten spiegeln",
    "summary": "Bei einem Abwärtsausbruch liegen starke Schlüsse nahe dem Tief.",
    "paragraphs": [
      "Wir spiegeln jeden Preis des Hauptfalls nach der Regel neuer Preis gleich 100 minus alter Preis. Die Grenze 50 bleibt dadurch 50. Die starke fünfte Kerze hat dann O50,6 H50,7 L48,5 C48,6.",
      "Ihr Schluss liegt nahe dem Tief und unter der Grenze. Kerze 6 schließt bei 47,8. Das ist das Gegenstück zum hohen Schluss und höherem Anschluss im Aufwärtsfall. Die Regel vertauscht Hoch und Tief beim Spiegeln.",
      "Ein Abwärtsausbruch wird also nicht durch steigende Farben geprüft. Nora benennt Richtung, Grenze und Folge. Das gespiegelt gezeichnete Beispiel erklärt die Logik, belegt aber keine gleiche Häufigkeit in echten Märkten."
    ],
    "prompt": "Wo liegt der starke Schluss im gespiegelten Abwärtsfall?",
    "answers": [
      "Nahe dem Tief und unter 50.",
      "Nahe dem Hoch und über 50.",
      "Ein Hoch und Tief bleiben beim Spiegeln unverändert."
    ],
    "rule": "Die Kriterien richtungsabhängig anwenden.",
    "diagram": "par2-bear"
  },
  {
    "title": "Mehrere Markierungen sind nicht automatisch unabhängig",
    "summary": "Nahe Preisgrenzen können zum selben Marktbereich gehören.",
    "paragraphs": [
      "Eine frühere Hochzone, eine Trendlinie und ein gleitender Durchschnitt könnten dicht beieinander liegen. Wenn ein Ausbruch diesen gemeinsamen Bereich überschreitet, sind mehrere Markierungen betroffen.",
      "Nora darf den Bereich beschreiben. Sie zählt aber nicht automatisch drei unabhängige Gründe: Die Linie könnte aus denselben Hochpunkten entstehen, und der Durchschnitt verwendet ebenfalls die bisherige Preisfolge.",
      "Wichtiger ist, ob die Bewegung über den Bereich hinausgeht und dort Unterstützung zeigt. Eine Sammlung ähnlicher Markierungen liefert ohne zusätzliche Prüfung kein mathematisch dreifach bestätigtes Signal."
    ],
    "prompt": "Wie sollte Nora eng zusammengehörige Markierungen bewerten?",
    "answers": [
      "Als mögliche zusammenhängende Hinweise mit gemeinsamem Datenbezug.",
      "Als drei sichere unabhängige Gewinne.",
      "Als Ersatz für den Risikoplan."
    ],
    "rule": "Zusammenhängende Hinweise nicht als unabhängige Beweise verkaufen.",
    "diagram": "par2-strong"
  },
  {
    "title": "Eine große späte Kerze kann Erschöpfung begleiten",
    "summary": "Größe allein unterscheidet Beginn und Ende einer Bewegung nicht.",
    "paragraphs": [
      "Im späten Vergleichsfall liegt vor Kerze 5 bereits eine Folge steigender Preise vor: Schlüsse 50,4; 51,2; 52,0 und 52,8. Kerze 5 steigt von 52,8 bis zum Schluss 54,8 mit Hoch 55,0.",
      "Danach folgt eine fallende Kerze mit Schluss 53,4. Die große späte Kerze hat also nicht dieselbe Vorgeschichte wie der Ausbruch aus einem ruhigen Bereich. Der Rückfall war am Schluss der fünften Kerze noch nicht bekannt.",
      "Nora nennt Erschöpfung als eine mögliche Deutung einer späten Beschleunigung. Sie kann erst mit folgenden Informationen mehr sagen. Weder eine große Kerze noch das Wort Klimax beweist sofort die nächste Richtung."
    ],
    "prompt": "Warum ist die Vorgeschichte für die große späte Kerze wichtig?",
    "answers": [
      "Sie folgt bereits mehreren steigenden Abschnitten.",
      "Große Kerzen sind immer das Ende.",
      "Große Kerzen sind immer der Anfang."
    ],
    "rule": "Beschleunigung zusammen mit Vorgeschichte und Folge lesen.",
    "diagram": "par2-late"
  },
  {
    "title": "Ein Fortsetzungsmuster kann in die andere Richtung brechen",
    "summary": "Die erwartete Richtung eines Musters bleibt eine Vermutung.",
    "paragraphs": [
      "Ein kleiner Rücksetzer in einem Abwärtstrend könnte wie eine Pause vor weiterem Fallen wirken. Wenn er stattdessen nach oben ausbricht und dort hohe Schlüsse zeigt, passt die tatsächliche Bewegung nicht zur ersten Erwartung.",
      "Nora hält ihre ursprüngliche Vermutung und die neuen Beobachtungen getrennt fest. Die Musterbezeichnung zwingt den Kurs nicht zur Fortsetzung nach unten. Neue Richtung und Anschluss müssen anhand der aktuellen Preise geprüft werden.",
      "Sie muss deswegen nicht sofort die Gegenposition handeln. Erst prüft sie einen neuen eigenständigen Plan. Eine widerlegte Vermutung ist Information und kein Grund für einen Rachetrade."
    ],
    "prompt": "Was gilt, wenn der Kurs entgegen der Mustererwartung ausbricht?",
    "answers": [
      "Die neuen Preise prüfen und die Vermutung aktualisieren.",
      "Die Preise ignorieren, bis das Muster recht bekommt.",
      "Sofort ohne Stop die Gegenrichtung handeln."
    ],
    "rule": "Die tatsächliche Bewegung hat Vorrang vor dem Musternamen.",
    "diagram": "par2-small"
  },
  {
    "title": "Eine Kriterienliste ist keine Trefferquote",
    "summary": "Ein Punktesystem braucht eigene Validierung.",
    "paragraphs": [
      "Nora notiert im Hauptfall großen Körper, hohen Schluss, Abstand zur Grenze, steigenden Anschluss und begrenzten Rücksetzer. Das hilft, ihren Bericht vollständig zu machen.",
      "Aus fünf Häkchen entstehen aber weder fünf unabhängige Beweise noch eine Erfolgsquote von 100 Prozent. Einige Hinweise hängen eng zusammen; manche sind erst nach dem ursprünglichen Einstieg bekannt.",
      "Für ein belastbares Punktesystem müssten Kriterien, Entscheidungszeitpunkt und Ausstiegsregel definiert und über viele Fälle geprüft werden. Hier dient die Liste dem Lernen und der nachvollziehbaren Beschreibung."
    ],
    "prompt": "Welche Aussage erlaubt die Kriterienliste?",
    "answers": [
      "Ein nachvollziehbarer Bericht über die geprüften Hinweise.",
      "Eine garantierte Trefferquote.",
      "Ein sicherer Gewinn ohne Risikorechnung."
    ],
    "rule": "Checklisten strukturieren Entscheidungen, sie erzeugen keine Statistik.",
    "diagram": "par2-strong"
  },
  {
    "title": "Starker Chart und passender Trade sind verschieden",
    "summary": "Ein überzeugender Verlauf kann für einen späten Einstieg ungünstig sein.",
    "paragraphs": [
      "Nach Kerze 8 sieht Nora einen starken Verlauf mit Schluss 53,1. Wenn sie einen Stop bei 49,2 und ein Ziel bei 53,9 prüft, ist der Stop 3,9 Punkte entfernt, das Ziel nur 0,8.",
      "Diese aktuelle Möglichkeit ist anders als ein früher Einstieg nach Kerze 5. Die spätere Stärke kann den großen Abstand nicht rückwirkend verkleinern. Menge und Kosten müssen aus dem neuen Plan berechnet werden.",
      "Nora kann das Marktbild stark nennen und den konkreten Trade trotzdem auslassen. Eine Beschreibung der Richtung ist keine vollständige Entscheidung über Preis, Menge und Ausstieg."
    ],
    "prompt": "Wie weit ist das Ziel 53,9 vom späten Einstieg 53,1 entfernt?",
    "answers": [
      "0,8 Punkt.",
      "3,9 Punkte.",
      "Ein starker Chart macht die Entfernung bedeutungslos."
    ],
    "rule": "Marktbeurteilung und konkrete Handelsentscheidung getrennt rechnen.",
    "diagram": "par2-pause"
  },
  {
    "title": "Einen Stärkebericht selbst erstellen",
    "summary": "Beobachtung, Gegenargument und offene Fragen gehören zusammen.",
    "paragraphs": [
      "Für eine Entscheidung nach Kerze 6 beschreibt Nora: Grenze 50; Kerze 5 mit O49,4 H51,5 L49,3 C51,4; Anschluss mit C52,2 und L51,2. Der große Körper und hohe Schlüsse sind beobachtbare Hinweise.",
      "Sie nennt auch Grenzen ihres Wissens: Der Rücksetzer von Kerze 7 ist noch nicht sichtbar. Teilnehmerabsichten, genaue Zwischenwege und eine geprüfte Trefferquote fehlen. Ein späterer Rückfall bleibt möglich.",
      "Anschließend trennt sie den konkreten Tradeplan von diesem Stärkebericht. So lässt sich nach einem Ergebnis prüfen, ob sie mit den damaligen Informationen nachvollziehbar entschieden hat. Eine gute Begründung bleibt auch bei einem Verlust überprüfbar."
    ],
    "prompt": "Welche Information gehört nach Kerze 6 noch nicht in den damaligen Bericht?",
    "answers": [
      "Der spätere Rücksetzer von Kerze 7.",
      "Der bereits abgeschlossene Schluss von Kerze 5.",
      "Die vorab bestimmte Grenze 50."
    ],
    "rule": "Einen Stärkebericht mit Zeitbezug, Grenzen und Gegenargument schreiben.",
    "diagram": "par2-strong"
  }
]);
