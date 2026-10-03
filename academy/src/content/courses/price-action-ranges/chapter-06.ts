import { makeLessons } from './lessons';
export const rangesChapterSixLessons = makeLessons('chapter-06', 'Kapitel 6 · Kurslücken verstehen', [
  {
    "title": "Eine klassische Kurslücke erkennen",
    "summary": "Der ganze zweite Tagesbereich liegt über dem ersten.",
    "paragraphs": [
      "Nora liest zwei abgeschlossene Tageskerzen. Der erste Tag hat ein Hoch von 100 und ein Tief von 96. Der zweite hat ein Tief von 101 und ein Hoch von 104. Zwischen 100 und 101 liegt ein sichtbarer Zwischenraum.",
      "Diese klassische Aufwärtslücke hat eine Höhe von 1 Punkt. Der zweite Tagesbereich überlappt den ersten nicht. Entscheidend ist das Tief des zweiten Tages im Vergleich zum Hoch des ersten, nicht nur die Farbe der Körper.",
      "Die Aussage gilt für die dargestellte Datenserie und ihre Sitzungseinteilung. Andere Handelszeiten oder ein anderer Markt können in derselben Zeit gehandelte Preise zeigen. Nora benennt deshalb, welchen Chart sie untersucht."
    ],
    "prompt": "Welche Beziehung zeigt die klassische Aufwärtslücke?",
    "answers": [
      "Tief des zweiten Tages 101 liegt über dem vorherigen Hoch 100.",
      "Nur der Schluss liegt über der alten Eröffnung.",
      "Jede grüne Kerze bildet eine klassische Lücke."
    ],
    "rule": "Die vollständigen Hoch-Tief-Bereiche vergleichen.",
    "diagram": "par6-classic"
  },
  {
    "title": "Die Breite der Lücke mit zwei Grenzen messen",
    "summary": "Oberkante 101 minus Unterkante 100 ergibt 1 Punkt.",
    "paragraphs": [
      "Im Aufwärtsfall ist das ältere Hoch 100 die untere Grenze des Zwischenraums. Das neue Tief 101 ist seine obere Grenze. Nora rechnet 101 minus 100 gleich 1 Punkt.",
      "Das neue Hoch 104 ist kein Rand der Lücke. Es beschreibt die spätere Reichweite des zweiten Tages. Auch der Unterschied der Schlusskurse ist eine andere Größe als die Lückenbreite.",
      "Nora beschriftet beide Grenzen, bevor sie rechnet. Damit lassen sich ein Berühren der oberen Kante, ein teilweises Durchlaufen und ein Erreichen der unteren Kante später eindeutig unterscheiden."
    ],
    "prompt": "Welche Rechnung misst hier die Lückenbreite?",
    "answers": [
      "101 minus 100 gleich 1 Punkt.",
      "104 minus 96 gleich 8 Punkte.",
      "Jeder Unterschied der Schlüsse ist dieselbe Lücke."
    ],
    "rule": "Lückenränder und Tagesreichweite auseinanderhalten.",
    "diagram": "par6-classic"
  },
  {
    "title": "Eine Abwärtslücke richtig spiegeln",
    "summary": "Das neue Hoch liegt unter dem vorherigen Tief.",
    "paragraphs": [
      "Der Abwärtsfall spiegelt die Tagespreise nach der Regel 200 minus Preis. Der ältere Tag hat ein Tief von 100. Der neue Tag hat ein Hoch von 99 und ein Tief von 96.",
      "Zwischen 99 und 100 liegt eine klassische Abwärtslücke. Ihre positive Größe beträgt 1 Punkt. Für eine gerichtete Differenz wäre das neue Hoch minus altes Tief dagegen minus 1. Größe und Richtung müssen getrennt benannt werden.",
      "Ein Short verdient im einfachen Preismodell bei fallenden Kursen. Daraus folgt noch kein Einstieg. Nora prüft Anschluss, eine mögliche Gegenbewegung und ihr Geldrisiko, genau wie beim Aufwärtsfall."
    ],
    "prompt": "Welche Beziehung zeigt die klassische Abwärtslücke?",
    "answers": [
      "Neues Hoch 99 liegt unter altem Tief 100.",
      "Neues Tief muss über dem alten Hoch liegen.",
      "Nur rote Körper sind für die Lücke erforderlich."
    ],
    "rule": "Bei Abwärtslücken Hoch und Tief konsequent tauschen.",
    "diagram": "par6-classic-bear"
  },
  {
    "title": "Eine Eröffnungslücke ist noch keine getrennte Tagesspanne",
    "summary": "Eröffnung über dem Schluss ist eine andere Definition.",
    "paragraphs": [
      "Ein weiterer zweiter Tag eröffnet bei 101. Der vorherige Schluss liegt bei 99. Während des zweiten Tages handelt der Kurs aber bis 99,5 zurück. Der vorherige Tageshöchstpreis war 100.",
      "Zwischen altem Schluss und neuer Eröffnung liegen 2 Punkte. Die vollständigen Tagesbereiche überlappen jedoch zwischen 99,5 und 100. Das ist eine Eröffnungslücke relativ zum Schluss, aber kein vollständig getrennter Tagesbereich.",
      "Vor dem Ende des Tages steht sein endgültiges Tief noch nicht fest. Nora kann die Eröffnungsdifferenz sofort beschreiben und die vollständige Tageslücke erst nach den tatsächlich gehandelten Preisen beurteilen."
    ],
    "prompt": "Warum sind die Tagesbereiche hier nicht vollständig getrennt?",
    "answers": [
      "Das neue Tief 99,5 liegt unter dem alten Hoch 100.",
      "Die Eröffnung 101 liegt über 99.",
      "Ein höherer Eröffnungspreis verbietet jeden Rücklauf."
    ],
    "rule": "Schluss-Eröffnungs-Abstand und vollständige Spannenlücke unterscheiden.",
    "diagram": "par6-overlap"
  },
  {
    "title": "Eine Sitzungslücke braucht klare Handelszeiten",
    "summary": "Die letzte Minute und der ganze Vortag sind verschiedene Bezüge.",
    "paragraphs": [
      "Noras vorangegangener Handelstag erreichte insgesamt 103. Seine letzte dargestellte Minute hatte jedoch nur ein Hoch von 100. Die erste Minute der neuen Sitzung hat ein Tief von 101.",
      "Zwischen den beiden unmittelbar gezeigten Minuten liegt deshalb ein Zwischenraum von 1 Punkt. Auf dem Tageschart ist noch keine Aufwärtslücke über dem ganzen Vortag belegt, denn 101 liegt unter dem Vortagshoch 103.",
      "Zusätzlich können Charts Nachthandel zeigen oder ausblenden. Nora notiert die verwendete Sitzung, bevor sie zwei Lücken vergleicht. Ein scheinbarer Widerspruch zwischen Minuten- und Tageschart kann allein aus unterschiedlichen Bezugsbereichen entstehen."
    ],
    "prompt": "Warum beweist diese Minutenlücke keine Tageslücke?",
    "answers": [
      "Das Vortagshoch 103 liegt über dem neuen Minutentief 101.",
      "Minutencharts können grundsätzlich keine Lücken zeigen.",
      "Der letzte Minutenhöchstpreis ist immer das Tageshoch."
    ],
    "rule": "Zeitrahmen und Sitzung bei jeder Lückenaussage nennen.",
    "diagram": "par6-session"
  },
  {
    "title": "Der Name der Lücke kann sich später verändern",
    "summary": "Die frühen zwei Tage zeigen noch keinen endgültigen Ausgang.",
    "paragraphs": [
      "Eine Lücke am Beginn eines Ausbruchs kann zunächst nach neuer Stärke aussehen. In unserem frühen Ausschnitt sind nur die beiden ersten Tage bekannt. Ein langer weiterer Aufstieg ist noch nicht sichtbar.",
      "Im Fortsetzungsfall erreicht der dritte Tag ein Hoch von 106 und schließt bei 105,5. Im scheiternden Vergleich fällt der dritte Tag bis 99 zurück und schließt bei 99,4. Beide Fälle teilen die gleichen ersten beiden Tage.",
      "Die spätere Rolle der Lücke ist damit verschieden. Nora verwendet zunächst mögliche Ausbruchslücke und hält den Ausgang offen. Ein rückblickender Name darf nicht als frühes Wissen in die Auswertung rutschen."
    ],
    "prompt": "Bis wann teilen die Vergleichsfälle denselben Informationsstand?",
    "answers": [
      "Bis zum Abschluss des zweiten Tages.",
      "Bis zum endgültigen Ausgang.",
      "Ihre Vorgeschichten sind völlig verschieden."
    ],
    "rule": "Frühe Kandidaten und spätere Einordnung zeitlich trennen.",
    "diagram": "par6-classic-follow"
  },
  {
    "title": "Ausbruchslücken als Stärkezeichen lesen",
    "summary": "Eine Lücke beim Verlassen eines Bereichs kann einen neuen Schub unterstützen.",
    "paragraphs": [
      "Wenn der Markt aus einer vorherigen Range heraus nach oben springt und anschließende Preise dort bleiben, kann die Lücke als Ausbruchslücke eingeordnet werden. Die alte Grenze wird dann nicht sofort wieder unterschritten.",
      "Im Fortsetzungsfall bleiben die ersten neuen Tagesbereiche oberhalb von 100. Das unterstützt den Aufwärtsausbruch. Ein ähnlicher Sprung ohne Anschluss würde weniger Unterstützung liefern.",
      "Nora benutzt den Namen zur Beschreibung des Verlaufs. Er ist weder eine Order noch eine Garantie, dass jeder Rücksetzer oberhalb der alten Grenze enden wird. Auch ein zunächst starker Ausbruch kann später scheitern."
    ],
    "prompt": "Welche Beobachtung unterstützt die Ausbruchslücke?",
    "answers": [
      "Weitere Preise bleiben zunächst oberhalb der alten Grenze.",
      "Alle späteren Kurse müssen aufwärts laufen.",
      "Eine grüne erste Kerze genügt unabhängig vom Anschluss."
    ],
    "rule": "Die neue Lage und den Anschluss gemeinsam prüfen.",
    "diagram": "par6-classic-follow"
  },
  {
    "title": "Messlücken sind Kandidaten für eine Streckenrechnung",
    "summary": "Der Mittelpunkt wird als mögliche Mitte eines Schubs verwendet.",
    "paragraphs": [
      "Eine Lücke im bereits laufenden Schub kann für eine Projektion genutzt werden. Nora prüft die Annahme: Der Abstand vom Beginn der Bewegung bis zur Mitte der Lücke könnte sich oberhalb dieser Mitte noch einmal wiederholen.",
      "Diese Konstruktion heißt Messlücke. Sie liefert einen rechnerischen Bereich, an dem der Kurs beobachtet werden kann. Sie beweist nicht, dass die Mitte tatsächlich die Hälfte des späteren Trends ist.",
      "Die Rechnung braucht einen klar benannten Bewegungsbeginn und klare Lückenränder. Wer nachträglich nur die passende Kombination auswählt, kann fast jeden historischen Wendepunkt scheinbar erklären."
    ],
    "prompt": "Welche Annahme steckt in der Messlückenrechnung?",
    "answers": [
      "Die Strecke bis zum Mittelpunkt wird darüber noch einmal projiziert.",
      "Jede Lücke liegt garantiert exakt in der Trendmitte.",
      "Das spätere Ziel darf vorab als erreicht gelten."
    ],
    "rule": "Messlücke als prüfbare Projektion statt als versprochenes Ziel lesen.",
    "diagram": "par6-measure"
  },
  {
    "title": "Eine große Trendkerze ist keine leere Preisstrecke",
    "summary": "Die funktionale Lückendeutung beschreibt den schnellen Schub.",
    "paragraphs": [
      "Im Minutenfall liegt vor dem Schub ein Hoch bei 100. Die große nächste Kerze eröffnet bei 99,8, fällt kurz bis 99,7, steigt bis 103 und schließt bei 102,8. Ihr Körper ist 3 Punkte hoch.",
      "In einer breiten Lückendeutung kann dieser schnelle Ortswechsel wie eine Ausbruchslücke behandelt werden. Es bleibt trotzdem eine Kerze mit innerhalb der Minute gehandelten Preisen. Der Körper ist kein Beleg, dass die ganze Strecke ohne Handel übersprungen wurde.",
      "Nora nennt deshalb die Definition. Klassischer Zwischenraum und funktionale Ausbruchskerze können ähnliche Stärke oder späteres Scheitern zeigen, sind aber unterschiedliche sichtbare Objekte. Das verhindert Verwechslungen beim Lernen."
    ],
    "prompt": "Was beweist der große Körper allein nicht?",
    "answers": [
      "Dass die ganze Strecke ohne Handel übersprungen wurde.",
      "Dass die Kerze zwischen Eröffnung und Schluss stark stieg.",
      "Dass ihre Eröffnung bei 99,8 liegt."
    ],
    "rule": "Funktionale Lückendeutung und tatsächlichen Zwischenraum unterscheiden.",
    "diagram": "par6-micro-start"
  },
  {
    "title": "Eine Mikrolücke über drei Kerzen prüfen",
    "summary": "Die mittlere Kerze kann im Zwischenraum gehandelt haben.",
    "paragraphs": [
      "Minute 1 hat ein Hoch von 100. Minute 2 ist der große Aufwärtsschub. Minute 3 hat ein Tief von 101. Die Bereiche der ersten und dritten Kerze überlappen somit nicht.",
      "Der Abstand 101 minus 100 beträgt 1 Punkt. Er ist eine Mikrolücke um die mittlere Kerze. Der Zwischenraum ist nicht zwischen zwei unmittelbar aufeinanderfolgenden Kerzen leer: Minute 2 kann dort Preise gehandelt haben.",
      "Erst nach Minute 3 ist ihr endgültiges Tief 101 bekannt. Nora darf diese Mikrolücke nicht schon nach Minute 2 mit dem späteren Rand berechnen. Ein weiteres tieferes Tief wäre damals noch möglich gewesen."
    ],
    "prompt": "Wann ist der Rand L3=101 endgültig bekannt?",
    "answers": [
      "Nach Abschluss von Minute 3.",
      "Schon vor Beginn von Minute 2.",
      "Sobald das Hoch von Minute 1 eingezeichnet ist."
    ],
    "rule": "Bei Mikrolücken die drei Kerzen und ihren Informationszeitpunkt nennen.",
    "diagram": "par6-micro"
  },
  {
    "title": "Mittelpunkt und Ziel vollständig ausrechnen",
    "summary": "Beginn 96, Ränder 100 und 101, Mittelpunkt 100,5.",
    "paragraphs": [
      "Der Aufwärtsschub beginnt für unsere Rechnung bei 96. Die Mikrolücke liegt zwischen 100 und 101. Ihr Mittelpunkt ist der Durchschnitt beider Ränder: 100,5.",
      "Vom Beginn 96 bis zur Mitte 100,5 sind es 4,5 Punkte. Dieselbe Strecke über der Mitte ergibt 105. Nora kann auch 2 mal 100,5 minus 96 rechnen. Das Ergebnis ist derselbe Modellzielbereich.",
      "Der Chart der drei Minuten endet bisher bei einem Hoch von 104. Das Ziel 105 ist darin nicht erreicht. Nora zeichnet es als Projektion und bezeichnet den Unterschied ausdrücklich."
    ],
    "prompt": "Welches Ziel ergibt die Rechnung?",
    "answers": [
      "105,0.",
      "104,0, weil das bisherige Hoch automatisch das Ziel ist.",
      "101,0, der obere Lückenrand."
    ],
    "rule": "Beginn, Ränder, Mittelpunkt, Strecke und Projektion gemeinsam dokumentieren.",
    "diagram": "par6-measure"
  },
  {
    "title": "Ein später Test kann die Lückenrechnung verändern",
    "summary": "Das neue Rücksetzertief liegt näher an der Ausbruchsgrenze.",
    "paragraphs": [
      "Nach Minute 3 fällt die spätere Testminute 4 auf 100,6 zurück und schließt bei 102. Der alte Ausbruchsbezug bleibt 100. Der Abstand zum nun beobachteten Testtief ist nur noch 0,6 Punkt.",
      "Verwendet Nora diesen späteren Test als neuen Rand, ergibt sich ein Mittelpunkt von 100,3. Mit demselben Beginn 96 wird daraus die Projektion 104,6. Die frühere Rechnung auf 105 beruhte auf dem Rand 101.",
      "Beide Rechnungen haben verschiedene Informationsstände und Randregeln. Nora überschreibt die frühe Prognose nicht unbemerkt. Sie hält fest, wann und warum sie den Bezug geändert hat."
    ],
    "prompt": "Welcher neue Zielbereich ergibt sich aus Mitte 100,3 und Beginn 96?",
    "answers": [
      "104,6.",
      "105,0 ohne jede Änderung.",
      "100,6, nur das Testtief."
    ],
    "rule": "Spätere Randänderungen mit Zeitpunkt und Regel dokumentieren.",
    "diagram": "par6-retest"
  },
  {
    "title": "Eine geschlossene Lücke ist nicht automatisch eine Trendwende",
    "summary": "Ein vollständiger Rücklauf und weiterer Anschluss sind verschiedene Ereignisse.",
    "paragraphs": [
      "Im scheiternden Tagesfall fällt das Tief des dritten Tages bis 99. Damit wurden sowohl der obere Rand 101 als auch die untere Kante 100 des Zwischenraums erreicht und unterschritten. Die klassische Lücke ist geschlossen.",
      "Der Schluss 99,4 liegt wieder unter der alten Obergrenze. Das unterstützt hier eine schwächere Lage. Ein bloßer Kontakt mit 100 hätte dagegen nur die Füllung nach unserer Berührungsregel belegt.",
      "Eine anschließende Umkehr braucht weitere Preisstruktur. Ein Markt kann eine Lücke schließen und danach wieder steigen oder seitwärts laufen. Nora lässt den Namen Füllung nicht mehr behaupten, als tatsächlich gezeigt wird."
    ],
    "prompt": "Was beweist ein Kontakt mit dem unteren Rand 100 zunächst?",
    "answers": [
      "Die Füllung nach der festgelegten Berührungsregel.",
      "Einen sicheren neuen Abwärtstrend.",
      "Dass vorher nie eine Lücke existiert hat."
    ],
    "rule": "Füllung und anschließenden Richtungswechsel getrennt prüfen.",
    "diagram": "par6-fill"
  },
  {
    "title": "Nicht auf eine unvermeidliche Füllung wetten",
    "summary": "Ein offener Zwischenraum hat keinen festen Ablaufplan.",
    "paragraphs": [
      "Der Satz, jede Lücke werde gefüllt, verrät weder Zeitpunkt noch Zwischenbewegung. Ein Markt könnte vorher weit steigen, die Lücke lange offenlassen oder den beobachteten Bereich über den gesamten eigenen Zeithorizont nicht erreichen.",
      "Im kurzen Fortsetzungsfall bleibt die Lücke offen. Das ist ein sichtbares Ergebnis dieses Ausschnitts. Es liefert noch keine allgemeine Wahrscheinlichkeit dafür, wann irgendeine andere Lücke geschlossen wird.",
      "Nora verkauft daher nicht allein wegen eines offenen Zwischenraums. Für eine Gegenidee braucht sie aktuelle Hinweise, einen Ausstieg und ein Budget. Eine irgendwann erwartete Rückkehr schützt nicht vor einem vorherigen Verlust."
    ],
    "prompt": "Warum genügt die Füllungsidee nicht als Handelsplan?",
    "answers": [
      "Zeitpunkt und möglicher vorheriger Verlust bleiben offen.",
      "Weil offene Lücken keine Preisgrenzen besitzen.",
      "Weil jedes Ziel automatisch sofort erreicht wird."
    ],
    "rule": "Füllungserwartung mit Zeithorizont und Risiko verbinden.",
    "diagram": "par6-classic-follow"
  },
  {
    "title": "Erschöpfung erst an der weiteren Reaktion einordnen",
    "summary": "Ein spätes großes Ereignis kann eine Korrektur oder eine Umkehr vorbereiten.",
    "paragraphs": [
      "Nach einem längeren Aufstieg kann ein weiterer Sprung auftreten. Wenn der Kurs bald zurückfällt und die Lücke schließt, kann sie im Rückblick als Erschöpfungslücke beschrieben werden.",
      "Der Rückgang kann zunächst nur eine größere Pause sein. Erst weiterer deutlicher Gegenanschluss unterstützt eine neue Trendrichtung. Weder eine große Kerze noch eine bestimmte Schubzahl garantiert den nächsten Ablauf.",
      "Nora prüft deshalb die Vorgeschichte und die folgenden Kerzen gemeinsam. Am Entstehungszeitpunkt nennt sie den Fall mögliche Erschöpfung. Der endgültige Name entsteht aus der Entwicklung und ersetzt keine damals fehlende Information."
    ],
    "prompt": "Wann ist die Erschöpfungsdeutung besser gestützt?",
    "answers": [
      "Wenn nach dem späten Sprung ein deutlicher Rückfall folgt.",
      "Allein durch die größte Körperfarbe.",
      "Jeder neue Sprung erschöpft zwingend den Trend."
    ],
    "rule": "Spätes Ereignis, Rückfall und Folgebewegung zusammen lesen.",
    "diagram": "par6-fill"
  },
  {
    "title": "Eine Inselumkehr mit zwei klassischen Lücken erkennen",
    "summary": "Ein abgegrenzter Hochbereich liegt zwischen Aufwärts- und Abwärtslücke.",
    "paragraphs": [
      "Tag 1 hat ein Hoch von 100. Tage 2 und 3 handeln vollständig oberhalb davon, mit Tiefs 101 und 102. Tag 4 hat dagegen nur noch ein Hoch von 100,5, unter dem Tief 102 von Tag 3.",
      "Damit gibt es erst eine Aufwärtslücke und anschließend eine Abwärtslücke. Die beiden hohen Tage dazwischen bilden eine Insel. Für diese klassische Inseldefinition reichen große Gegenkörper mit überlappenden Spannen nicht aus.",
      "Am Tag 2 kennt Nora die spätere Abwärtslücke noch nicht. Sie darf die Inselumkehr erst beschreiben, wenn der neue Abstand tatsächlich vorliegt. Der Name allein sagt noch nicht, wie weit der weitere Rückgang geht."
    ],
    "prompt": "Welche zweite Beziehung grenzt die Insel nach rechts ab?",
    "answers": [
      "Hoch von Tag 4 bei 100,5 liegt unter Tief von Tag 3 bei 102.",
      "Ein beliebiger roter Körper an Tag 4.",
      "Der Schluss des ersten Tages liegt unter dessen Hoch."
    ],
    "rule": "Für klassische Inseln beide vollständigen Lücken nachweisen.",
    "diagram": "par6-island"
  },
  {
    "title": "Das Testen einer Inselkante als neue Prüfung lesen",
    "summary": "Ein Rücklauf kann den Bereich des Abwärtsausbruchs erneut besuchen.",
    "paragraphs": [
      "Nach der Abwärtslücke im Inselbeispiel kann ein Rücklauf den unteren Inselbereich um 101 bis 102 wieder aufsuchen. Verkäufer könnten dort einen erneuten Abwärtsschub erwarten; Käufer könnten auf eine Rückeroberung setzen.",
      "Diese mögliche Reaktion ist noch nicht im frühen Inselchart gezeigt. Nora zeichnet den Bereich als künftigen Prüfbezug. Erst Stabilisierung, Ablehnung oder deutlicher Gegenanschluss liefern neue Informationen.",
      "Eine Shortidee am Test ist ein anderer Trade als ein früher Verkauf beim Abwärtsausbruch. Sie braucht einen eigenen Auslöser, Stop und Preisvergleich. Das später bessere Wissen rechtfertigt keinen rückwirkend perfekten Einstieg."
    ],
    "prompt": "Wie ist ein noch nicht erfolgter Inselkantentest zu behandeln?",
    "answers": [
      "Als geplanter Prüfbezug, dessen Reaktion noch offen ist.",
      "Als schon bestätigter Gewinner.",
      "Als automatischer Auftrag ohne Mengenrechnung."
    ],
    "rule": "Inselkante, tatsächlichen Test und neuen Trade getrennt behandeln.",
    "diagram": "par6-island"
  },
  {
    "title": "Eine neue Aufwärtskerze kann nach einer Wende anders wirken",
    "summary": "Frühere High-1- oder High-2-Ideen brauchen aktuellen Kontext.",
    "paragraphs": [
      "Nach einem starken Abwärtsschub kann ein kleiner steigender Abschnitt erscheinen. Im alten Aufwärtstrend wäre eine solche Pause vielleicht ein erster oder zweiter Fortsetzungsversuch gewesen. Die vorherige große Gegenbewegung hat aber den Kontext verändert.",
      "Nora vergleicht deshalb die Stärke des neuen Versuchs mit dem Abwärtsausbruch. Ein kleiner steigender Körper allein stellt die alte Aufwärtsrichtung nicht wieder her. Umgekehrt darf ein starker neuer Aufwärtsschub nicht ignoriert werden.",
      "Auch ein dritter Versuch mit drei kleinen Schüben kann die Abwärtsidee scheitern lassen. Die Zählung ersetzt nie die Prüfung, ob der relevante Bereich zurückerobert wird und ob die folgende Bewegung Anschluss erhält."
    ],
    "prompt": "Was muss vor einer alten Fortsetzungsregel neu geprüft werden?",
    "answers": [
      "Der durch den starken Gegenschub veränderte Kontext.",
      "Die Zahl zwei garantiert dieselbe Wirkung in jedem Markt.",
      "Frühere Trendrichtung gilt nach jeder neuen Information unverändert."
    ],
    "rule": "Versuchszählung zusammen mit aktueller Stärke und Grenzen anwenden.",
    "diagram": "par6-fill"
  },
  {
    "title": "Ein negativer Lückenabstand beschreibt Überlappung",
    "summary": "Testtief 99,8 minus Ausbruchsgrenze 100 ist minus 0,2.",
    "paragraphs": [
      "Im negativen Vergleich fällt die Testminute auf 99,8. Die frühere Ausbruchsgrenze liegt bei 100. Die gerichtete Rechnung Testtief minus Grenze ergibt minus 0,2 Punkt.",
      "Hier gibt es keinen positiven leeren Zwischenraum. Der Rücklauf hat die Grenze unterschritten. Die Bezeichnung negativer Gap ist eine Rechenkonvention für diese Überlappung, nicht ein klassisches Loch im Chart.",
      "Die spätere Aufwärtsfortsetzung kann trotzdem gelingen. Nora prüft, wie tief der Test greift und wie der Kurs reagiert. Das Minuszeichen ist ein sichtbarer Stärkeunterschied, aber kein alleiniger Beweis einer Trendwende."
    ],
    "prompt": "Was bedeutet der negative Abstand hier?",
    "answers": [
      "Der Test handelt 0,2 Punkt unter der Ausbruchsgrenze.",
      "Es gibt einen leeren Zwischenraum von minus 0,2 Punkt.",
      "Der Kurs muss danach sofort weiter fallen."
    ],
    "rule": "Negativen Abstand als Überlappung und Rücklauf beschreiben.",
    "diagram": "par6-negative"
  },
  {
    "title": "Auch mit Überlappung bleibt die Rechnung nachvollziehbar",
    "summary": "Mitte 99,9 ergibt bei Beginn 96 eine Projektion 103,8.",
    "paragraphs": [
      "Die beiden verwendeten Ränder sind 100 und 99,8. Ihr arithmetischer Mittelpunkt ist 99,9. Vom benannten Beginn 96 bis zu dieser Mitte sind es 3,9 Punkte.",
      "Noch einmal 3,9 Punkte oberhalb der Mitte ergeben 103,8. Die Formel funktioniert auch bei negativem gerichteten Abstand. Daraus folgt nicht, dass diese Projektion genauso gut gestützt ist wie bei einem Test, der deutlich über der Grenze hält.",
      "Das frühere Hoch von Minute 3 lag bereits bei 104, also oberhalb dieser später berechneten Projektion 103,8. Sie ist nach dem Test kein noch unerreichter Zukunftspreis. Nora kennzeichnet deshalb den neuen Informationsstand: Eine korrekte Formel ist allein noch kein sinnvoller Zielplan."
    ],
    "prompt": "Welche Projektion ergibt sich hier?",
    "answers": [
      "103,8.",
      "104,6, der andere Testfall.",
      "105,0, ohne die Ränder zu berücksichtigen."
    ],
    "rule": "Rechenrichtigkeit und Marktbegründung getrennt bewerten.",
    "diagram": "par6-negative"
  },
  {
    "title": "Ein exakter Kontakt hat Abstand null",
    "summary": "Tief 100 und altes Hoch 100 berühren sich.",
    "paragraphs": [
      "Im Nullfall endet der Test genau bei 100. Das frühere Hoch liegt ebenfalls bei 100. Die Bereiche berühren sich, ohne eine positive Strecke dazwischen zu lassen.",
      "Nach einer breiten Testdefinition kann dieser exakte Kontakt weiterhin ein Ausbruchstest sein. Nach der strengen Definition einer sichtbaren positiven Lücke beträgt die Lückenbreite aber null. Nora sagt ausdrücklich, welche Definition sie verwendet.",
      "Der Mittelpunkt ist dann 100. Mit Beginn 96 ergibt die reine Projektion 104. Minute 3 hat 104 bereits vor diesem späteren Test erreicht. Nora bezeichnet das als rückblickende Rechnung und nicht als noch offenes neues Ziel. Exakter Kontakt macht aus der Formel keine Zukunftskenntnis."
    ],
    "prompt": "Wie groß ist der positive Zwischenraum im Nullfall?",
    "answers": [
      "Null Punkte; die Grenzen berühren sich.",
      "Ein Punkt, weil der Test gelungen aussehen kann.",
      "Minus ein Punkt."
    ],
    "rule": "Exakten Kontakt, positive Lücke und negative Überlappung unterscheiden.",
    "diagram": "par6-zero"
  },
  {
    "title": "Die Abwärtsprojektion mit dem Mittelpunkt rechnen",
    "summary": "Spiegelung liefert Start 104, Mitte 99,5 und Ziel 95.",
    "paragraphs": [
      "Der Abwärtsfall spiegelt den Minutenfall um 100. Der Beginn 96 wird zu 104. Die ursprünglichen Ränder 100 und 101 werden zu 100 und 99. Ihr Mittelpunkt liegt bei 99,5.",
      "Die Strecke vom Start 104 zur Mitte 99,5 beträgt 4,5 Punkte abwärts. Dieselbe Strecke unter der Mitte ergibt 95. Nora kann auch 2 mal 99,5 minus 104 rechnen.",
      "Die Messregel bleibt dieselbe, nur die Richtung wechselt. Hoch und Tief der gespiegelten Kerzen müssen korrekt getauscht werden. Wer nur die Körperfarben umdreht, erhält noch keinen sauberen Abwärtsfall."
    ],
    "prompt": "Welches Abwärtsziel liefert diese Rechnung?",
    "answers": [
      "95,0.",
      "105,0 wie im Aufwärtsfall.",
      "99,5, nur den Mittelpunkt."
    ],
    "rule": "Beginn, Ränder und Projektionsrichtung gemeinsam spiegeln.",
    "diagram": "par6-measure-bear"
  },
  {
    "title": "Frühe Projektionen können für den Plan zu nah liegen",
    "summary": "Ein Stärkezeichen ist nicht automatisch das passende Gewinnziel.",
    "paragraphs": [
      "Die erste kleine Lücke nach einem Ausbruch kann eine kurze Projektion liefern. Der neue Trend könnte darüber hinausgehen; er könnte aber auch vorher scheitern. Nora muss die Formel nicht zur einzigen Ausstiegsregel erklären.",
      "Im Modell ergibt die frühe Mikrolücke 105. Dieses Ziel kann beobachtet werden, ohne schon den ganzen möglichen Tagesverlauf zu beschreiben. Alternative Ziele benötigen eigene Regeln statt nachträglicher Verlängerung aus Hoffnung.",
      "Für den Ausstiegsplan prüft Nora Reststrecke, Stopabstand, Kosten und den gezeigten Kontext. Stärke des Ausbruchs und Eignung eines berechneten Zielpreises sind verschiedene Fragen."
    ],
    "prompt": "Was muss ein frühes Lückenziel zusätzlich erfüllen?",
    "answers": [
      "Es muss zur geplanten Reststrecke, zum Risiko und zum Kontext passen.",
      "Jeder rechnerische Wert muss zwingend der Ausstieg sein.",
      "Ein frühes Stärkezeichen garantiert eine unbegrenzte Bewegung."
    ],
    "rule": "Stärkezeichen und konkreten Ausstiegsbereich getrennt bewerten.",
    "diagram": "par6-measure"
  },
  {
    "title": "Tagesreichweite ist ein Vergleichswert",
    "summary": "Ein Durchschnitt schreibt den heutigen Endpreis nicht vor.",
    "paragraphs": [
      "Angenommen, vergangene vergleichbare Tage hatten im Mittel eine Hoch-Tief-Spanne von 12 Punkten. Die heutige bisherige Spanne beträgt erst 3 Punkte. Eine frühe Projektion könnte eine Tagesgesamtspanne von 6 Punkten nahelegen.",
      "Nora kann diese Größen vergleichen. Sie darf daraus aber keine Pflicht des Marktes ableiten, heute noch exakt 12 Punkte zu erreichen. Der Mittelwert früherer Tage ist keine sichere Mindeststrecke.",
      "Die Auswahl vergleichbarer Tage, Handelszeiten und Ausreißer beeinflusst den Durchschnitt. Für ein Ziel braucht Nora deshalb aktuelle Preisstruktur und einen Plan, nicht nur das Gefühl, heute fehle noch etwas Reichweite."
    ],
    "prompt": "Was beweist die frühere Durchschnittsspanne 12 nicht?",
    "answers": [
      "Dass die heutige Spanne zwingend genau 12 Punkte erreichen wird.",
      "Dass 6 kleiner als 12 ist.",
      "Dass verschiedene Tage unterschiedliche Spannen besitzen können."
    ],
    "rule": "Durchschnittliche Reichweite als Kontext statt als Tagespflicht nutzen.",
    "diagram": "par6-session"
  },
  {
    "title": "Mehrere Grenzen erzeugen mehrere mögliche Ziele",
    "summary": "Die Auswahl des Bezugspunkts verändert die Rechnung.",
    "paragraphs": [
      "Der gleiche Schub kann über mehrere bekannte Hochbereiche ausbrechen. Verwenden wir mit Testtief 101 den Bezug 100, entsteht Mitte 100,5 und bei Start 96 Ziel 105. Mit einem früheren Hoch 99 entsteht dagegen Mitte 100 und Ziel 104.",
      "Die unterschiedliche Projektion ist kein Rechenfehler. Nora hat unterschiedliche Grenzen gewählt. Sie legt deshalb ihre Priorität vor der späteren Reaktion fest, etwa die gut sichtbare zuletzt mehrfach getestete Grenze.",
      "Mehrere ähnliche Zielbereiche können Aufmerksamkeit verdienen. Wenn alle aus denselben Kerzen abgeleitet werden, sind sie jedoch keine unabhängigen Beweise. Nora zählt dieselbe Information nicht mehrfach als zusätzliche Sicherheit."
    ],
    "prompt": "Warum liefern die Bezüge 99 und 100 verschiedene Ziele?",
    "answers": [
      "Sie erzeugen verschiedene Mittelpunkte zum gleichen Testtief.",
      "Ein Chart kann mathematisch nur ein einziges Ziel haben.",
      "Jede weitere Linie erhöht automatisch die Trefferquote."
    ],
    "rule": "Alternative Bezüge offenlegen und gemeinsame Daten nicht doppelt zählen.",
    "diagram": "par6-measure"
  },
  {
    "title": "Zielkontakt und eigener Gewinn sind verschiedene Dinge",
    "summary": "Ein gehandelter Zielpreis bestätigt keine eigene Ausführung.",
    "paragraphs": [
      "Ein späterer Kurs könnte den geplanten Bereich 105 erreichen. Nora kann dann sagen, dass die Projektion im Preisverlauf berührt wurde. Das bestätigt weder ihre eigene Limitorder noch deren ausgeführte Menge.",
      "Sie braucht dafür tatsächliche Orderdaten. Ein Teilverkauf, ein Stop davor oder ein nicht ausgeführter Einstieg führen zu anderen Ergebnissen. Auch ein Kurs knapp vor dem Ziel ist nicht dasselbe wie ein bestätigter Verkauf.",
      "Eine automatische Gegenposition am Ziel wäre zusätzlich eine neue Handelsidee. Ein möglicher Gewinnmitnahmebereich beweist nicht, dass der Kurs dort umkehren muss. Nora prüft erst die neue Reaktion."
    ],
    "prompt": "Was ist beim bloßen Kontakt mit 105 belegt?",
    "answers": [
      "Der Zielpreis wurde gehandelt, nicht automatisch die eigene Order ausgeführt.",
      "Jede eigene Limitorder wurde vollständig gefüllt.",
      "Der Markt muss dort sofort nach unten wenden."
    ],
    "rule": "Projektion, Kurskontakt und tatsächlich realisierten Gewinn trennen.",
    "diagram": "par6-measure"
  },
  {
    "title": "Preisrisiko und Zielentfernung als Modell rechnen",
    "summary": "Einstieg 101, Stop 99,7 und Ziel 105 ergeben unterschiedliche Strecken.",
    "paragraphs": [
      "Für eine Übungsrechnung nehmen wir eine bestätigte Longposition bei 101 an. Der Stop liegt bei 99,7, das Ziel bei 105. Der Stopabstand beträgt 1,3 Punkte; die Zielentfernung 4 Punkte.",
      "Ein Punkt je Einheit entspricht im Modell einem Euro. Zehn Einheiten ergeben 13 Euro Preisrisiko und 40 Euro möglichen Preisgewinn. Bei 2 Euro pauschalen Gesamtkosten wären es 15 Euro Verlust am angenommenen Stoppreis oder 38 Euro Gewinn am angenommenen Zielpreis.",
      "Die Größen sind vorgegebene Ausführungsszenarien. Ein Stop kann abweichend ausgeführt werden; ein Ziel kann unerreicht bleiben. Die Rechnung zeigt die geplanten Beträge, keine nachgewiesene Erfolgswahrscheinlichkeit."
    ],
    "prompt": "Wie groß ist der Modellverlust mit zehn Einheiten und 2 Euro Kosten?",
    "answers": [
      "15 Euro bei Ausführung genau am geplanten Stop.",
      "13 Euro einschließlich aller Kosten.",
      "40 Euro, weil Ziel und Stop dieselbe Strecke haben."
    ],
    "rule": "Preisstrecken, Mengen und Kosten ausdrücklich verbinden.",
    "diagram": "par6-risk"
  },
  {
    "title": "Beide Schwellen in einer Kerze lassen die Reihenfolge offen",
    "summary": "OHLC verrät nicht jeden Weg innerhalb des Intervalls.",
    "paragraphs": [
      "Eine spätere Beispielkerze könnte ein Hoch über dem Ziel 105 und ein Tief unter dem Stop 99,7 zeigen. Aus Eröffnung, Hoch, Tief und Schluss allein wissen wir nicht, welche Schwelle nach dem Einstieg zuerst erreicht wurde.",
      "Nora darf daraus nicht automatisch den gewinnenden Ablauf auswählen. Für eine genaue historische Auswertung braucht sie feinere Daten oder eine vorab festgelegte vorsichtige Auswertungsregel.",
      "Derselbe Grundsatz gilt bei einer Eröffnungslücke über den Stop hinweg. Der eingezeichnete Stoppreis ist kein garantierter Ausführungspreis. Die reale Reihenfolge und Ausführung entscheiden über das tatsächliche Ergebnis."
    ],
    "prompt": "Was fehlt bei einer Kerze mit beiden berührten Schwellen?",
    "answers": [
      "Die Reihenfolge der Kontakte nach dem Einstieg.",
      "Die Höhe von Hoch und Tief.",
      "Die Information, dass nur der Gewinner zählen darf."
    ],
    "rule": "Kerzenkontakte ohne bekannte Reihenfolge nicht als sicheren Trade-Ausgang ausgeben.",
    "diagram": "par6-risk"
  },
  {
    "title": "Abstand zum Durchschnitt ist eine weitere Lückendeutung",
    "summary": "Die ganze Kerze kann oberhalb einer berechneten Linie liegen.",
    "paragraphs": [
      "Ein gleitender Durchschnitt fasst mehrere vergangene Schlusskurse zusammen. In unserem Beispiel verwenden wir einen einfachen Durchschnitt der letzten drei Schlüsse, kurz SMA 3. Die Schlusswerte der Minuten 4 bis 6 sind 97, 99 und 101.",
      "Nach Minute 6 liegt SMA 3 daher bei 99. Ihr Tief beträgt 100,4 und liegt 1,4 Punkte darüber. Die ganze Kerze handelt oberhalb des zu diesem Abschluss berechneten Durchschnitts. Das ist ein Durchschnittsabstand, keine klassische Lücke zwischen zwei Kerzen.",
      "Während die Kerze noch läuft, können Schluss und Durchschnitt noch variieren. Nora verwendet hier bewusst abgeschlossene Werte und benennt ihre Berechnung, statt eine beliebige Linie als gemeinsamen Standard vorauszusetzen."
    ],
    "prompt": "Welcher SMA-3-Wert entsteht aus 97, 99 und 101?",
    "answers": [
      "99,0.",
      "101,0, nur der letzte Schluss.",
      "100,4, das Tief der Kerze."
    ],
    "rule": "Durchschnittsart, Zeitraum und Abschlusswerte nennen.",
    "diagram": "par6-average"
  },
  {
    "title": "Der erste vollständige Abstand kann im Trend eine Rücklaufprüfung sein",
    "summary": "Nach dem Abwärtsschub liegt die erste ganze Kerze über SMA 3.",
    "paragraphs": [
      "Die ersten drei Minuten schließen bei 100, 98 und 96. Danach steigen die Schlüsse auf 97, 99 und 101. Minute 5 überlappt ihren Durchschnitt noch; erst Minute 6 liegt mit ihrem Tief 100,4 vollständig darüber.",
      "In diesem Abwärtskontext kann der neue Abstand als weit fortgeschrittener Rücklauf gelesen werden. Eine mögliche Shortregel wäre eine Stufe unter dem Tief von Minute 6, also 100,3, mit einem vorher geplanten Stop über ihrem Hoch 101,4.",
      "Die nächste gezeigte Minute fällt wieder. Der Abstand allein hat diesen Verlauf nicht bewiesen. Ein weiterer starker Anstieg hätte die Gegenidee geschwächt. Nora beurteilt das Signal relativ zum vorherigen Schub."
    ],
    "prompt": "Wo läge die Modellschwelle unter dem Tief 100,4 bei Stufe 0,1?",
    "answers": [
      "100,3.",
      "100,5, oberhalb des Tiefs.",
      "99,0, automatisch am Durchschnitt."
    ],
    "rule": "Ersten Durchschnittsabstand mit vorherigem Trend und aktueller Reaktion verbinden.",
    "diagram": "par6-average-follow"
  },
  {
    "title": "Ein nicht ausgelöster Auftrag bleibt eine offene Bedingung",
    "summary": "Neue Bezugskerzen ergeben neue Schwellen und neues Risiko.",
    "paragraphs": [
      "Nach einem Durchschnittsabstand könnte der Markt weiter steigen, ohne die Shortschwelle unter der ersten Kerze zu erreichen. Eine Regel könnte dann nach jeder abgeschlossenen Kerze eine neue Schwelle unter deren Tief bestimmen.",
      "Das ist eine ausdrücklich bewegte Einstiegsregel. Nora muss dabei auch den Stopbezug und die Menge neu prüfen. Eine höher liegende Schwelle ist nicht automatisch günstiger, wenn der Abstand zum Schutzstop ebenfalls wächst.",
      "Wird der erste Trade ausgestoppt und später ein zweiter Versuch geplant, ist das ein eigener Wiedereinstieg. Der erste Verlust und zusätzliche Kosten bleiben in der Bilanz. Ein zweiter Abstand ist keine Garantie für einen besseren Ausgang."
    ],
    "prompt": "Was erfordert eine neue Einstiegsschwelle?",
    "answers": [
      "Eine erneute Prüfung von Auslösung, Stopbezug und Geldrisiko.",
      "Nur das Verschieben der Linie ohne weitere Rechnung.",
      "Den ersten Verlust aus der Bilanz löschen."
    ],
    "rule": "Bewegte Einstiegsregeln und zweite Versuche vollständig auswerten.",
    "diagram": "par6-average"
  },
  {
    "title": "In einer Range kann derselbe Abstand ein anderes Ziel haben",
    "summary": "Rückkehr zum Mittelwert und Trendfortsetzung sind verschiedene Ideen.",
    "paragraphs": [
      "In einer seitwärts gehandelten Phase kann ein großer Abstand zum Durchschnitt als Kandidat für einen Rücklauf zur Linie betrachtet werden. In einem starken Trend kann dieselbe Lage dagegen anhalten oder sich weiter vergrößern.",
      "Nora entscheidet deshalb zuerst, welchen Marktzustand sie bis dahin beobachtet. Für eine Gegenbewegung zur Linie braucht sie eine passende Reaktion und genügend Reststrecke im Verhältnis zu Kosten und Stopabstand.",
      "Eine Kerze vollständig unter dem Durchschnitt kann spiegelbildlich ein Aufwärtskandidat sein. Sie ist aber kein Auftrag zum Kaufen. Dieselbe Methode braucht in Range und Trend unterschiedliche Begründungen und eine getrennte Auswertung."
    ],
    "prompt": "Warum reicht Abstand zum Durchschnitt allein nicht?",
    "answers": [
      "Der Marktzustand und die passende Reaktion verändern die Bedeutung.",
      "Jeder Abstand wird in der nächsten Minute geschlossen.",
      "Ein Durchschnitt entfernt das Geldrisiko."
    ],
    "rule": "Abstandsgröße, Marktzustand und geplantes Ziel zusammen prüfen.",
    "diagram": "par6-average"
  },
  {
    "title": "Kleine Schluss-Eröffnungs-Abstände sorgfältig lesen",
    "summary": "Ein neuer Eröffnungspreis kann oberhalb des letzten Schlusses liegen.",
    "paragraphs": [
      "Im kleinen Minutenfall schließt Kerze 1 bei 99,8. Kerze 2 eröffnet bei 99,9 und schließt bei 100,6. Kerze 3 eröffnet bei 100,7 und schließt bei 101,4. Beide Eröffnungen liegen 0,1 Punkt über dem vorherigen Schluss.",
      "Die gesamten benachbarten Kerzenbereiche überlappen trotzdem. Wir sehen Schluss-Eröffnungs-Abstände, keine vollständig leeren Zwischenräume zwischen den Hoch-Tief-Spannen. Die steigenden Körper liefern zusätzlich Richtungskontext.",
      "Einzelne Unterschiede können auch durch geringe Aktivität, Datenaufbereitung oder die verwendeten Preisarten entstehen. Nora prüft die Datenserie, bevor sie daraus ein genaues Bild aggressiver Teilnehmer ableitet."
    ],
    "prompt": "Welche Differenz zeigt der zweite Eröffnungspreis 100,7 zum vorherigen Schluss 100,6?",
    "answers": [
      "Plus 0,1 Punkt.",
      "Eine klassische Spannenlücke von 1 Punkt.",
      "Null, obwohl die Preise verschieden sind."
    ],
    "rule": "Kleine Eröffnungsabstände mit Körpern und Datengrundlage vergleichen.",
    "diagram": "par6-open-close"
  },
  {
    "title": "Ähnliche Bewegungen können in verschiedenen Datenserien anders aussehen",
    "summary": "Dünner Handel und verdichtete Kerzen verändern die sichtbare Form.",
    "paragraphs": [
      "Ein häufig gehandelter Markt kann viele einzelne Abschlüsse über eine Strecke zeigen. Ein seltener gehandelter Markt kann zwischen zwei Abschlüssen einen größeren Preissprung zeigen. Im Chart kann der eine Weg als großer Körper, der andere als Zwischenraum erscheinen.",
      "Auch verwandte Märkte haben jedoch eigene Handelszeiten, Teilnehmer und Preisbildung. Nora darf nicht behaupten, ihre Kerzen müssten Punkt für Punkt identisch sein. Die funktionale Ähnlichkeit ist eine Erklärung des Bewegungscharakters.",
      "Ein sichtbarer Zwischenraum sagt außerdem nicht, wie viele Aufträge im Orderbuch standen. Die Unterscheidung hilft beim Lesen der Daten, ersetzt aber keine Prüfung von Liquidität und tatsächlicher Ausführbarkeit."
    ],
    "prompt": "Was kann die unterschiedliche sichtbare Form erklären?",
    "answers": [
      "Unterschiedliche Abschlussdichte und Chartaufbereitung.",
      "Verwandte Märkte müssen identische Preise handeln.",
      "Ein leerer Chartbereich beweist ein vollständig leeres Orderbuch."
    ],
    "rule": "Ähnliche Preisbewegung und unterschiedliche Datenform auseinanderhalten.",
    "diagram": "par6-open-close"
  },
  {
    "title": "Mögliche Teilnehmergeschichten nicht für gemessenen Vorteil halten",
    "summary": "Eine Stärkevermutung ist noch keine geprüfte Strategie.",
    "paragraphs": [
      "Bei einem raschen Schub könnten Käufer dringend einsteigen oder Verkäufer zunächst auf höhere Preise warten. Diese möglichen Motive erklären, warum wenig Gegenseite sichtbar sein könnte. Die Kerzen beweisen die persönlichen Absichten nicht.",
      "Nora prüft stattdessen den konkreten Verlauf: Lückenränder, Anschluss, Testtiefe und Gegenargumente. Eine vermutete Überzahl künftiger Käufer ist eine Hypothese, keine direkt gemessene Handelsstatistik.",
      "Ein nachgewiesener Vorteil benötigt viele Fälle nach denselben Regeln, mit Kosten, Verlusten und tatsächlichen Ausführungen. Ein beeindruckendes Einzelbild und ein weit entferntes Ziel liefern diesen Beleg noch nicht."
    ],
    "prompt": "Was fehlt einem einzelnen überzeugenden Chart als Strategiebeleg?",
    "answers": [
      "Eine breitere Auswertung nach gleichen Regeln einschließlich Kosten und Verlusten.",
      "Ein weiterer schöner Name.",
      "Die Möglichkeit, zwei Preise voneinander abzuziehen."
    ],
    "rule": "Teilnehmererklärung, Stärkehypothese und belegten Vorteil trennen.",
    "diagram": "par6-micro"
  },
  {
    "title": "Den Lückenfall mit allen Definitionen abschließen",
    "summary": "Definition, Informationsstand und Plan müssen zusammenpassen.",
    "paragraphs": [
      "Nora beginnt mit der Frage: Welche Lücke meine ich? Sie benennt klassische Spannenlücke, Eröffnungsabstand, Mikrolücke, funktionale Ausbruchskerze oder Abstand zum Durchschnitt. Anschließend hält sie die konkreten Ränder fest.",
      "Für eine Projektion dokumentiert sie Bewegungsbeginn, Mittelpunkt und Preisbereich. Für einen Trade ergänzt sie Auslöser, Stop, Menge, Kosten und Verwerfungsbedingungen. Neue Testkerzen werden erst nach ihrem Abschluss berücksichtigt.",
      "In die Auswertung gehören offene Lücken, Füllungen, Erschöpfungsfälle und nicht ausgeführte oder ausgelassene Ideen. Dadurch lernt Nora aus der Entscheidung mit damaligem Wissen statt nur aus einem nachträglich passend benannten Endchart."
    ],
    "prompt": "Welche erste Frage verhindert viele Verwechslungen?",
    "answers": [
      "Welche Lückendefinition und welche konkreten Ränder werden verwendet?",
      "Wie kann ich den späteren Ausgang als frühes Wissen eintragen?",
      "Welcher Name garantiert den größten Gewinn?"
    ],
    "rule": "Definition, Ränder, Zeitpunkt, Rechnung und tatsächliche Ausführung getrennt dokumentieren.",
    "diagram": "par6-risk"
  }
]).map(lesson=>({...lesson,steps:lesson.steps.map(step=>step.type==='diagram'?{...step,caption:'Erfundene Übungsdaten · abgeschlossene Intervalle wie im Schaubild benannt · Preise in Punkten · keine Leistungsstatistik.'}:step)}));
