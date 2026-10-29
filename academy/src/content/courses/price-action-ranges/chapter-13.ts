import { makeLessons } from './lessons';
export const rangesChapterThirteenLessons = makeLessons('chapter-13', 'Kapitel 13 · Lange Bewegungen ohne Kontakt zum Durchschnitt', [
  {
    "title": "Eine lange Strecke ohne Durchschnittskontakt erkennen",
    "summary": "Zwanzig ganze Kerzen können auf derselben Seite einer Durchschnittslinie liegen.",
    "paragraphs": [
      "Nora zeichnet einen gleitenden Durchschnitt ein. Diese Linie glättet vergangene Schlusskurse. Liegen ganze Kerzen darüber, gibt es zwischen ihrem Tief und der Linie einen Abstand.",
      "Bleibt dieser Abstand über viele aufeinanderfolgende Kerzen bestehen, beschreibt das eine anhaltend einseitige Lage. In einem Abwärtstrend ist es spiegelbildlich: Dort bleiben ganze Kerzen unter der Linie.",
      "Daraus entsteht eine Beobachtungsidee für die spätere Rückkehr zum Durchschnitt. Der Abstand zwingt den Markt aber weder sofort zurück noch garantiert er anschließend eine neue Bewegung in der alten Richtung."
    ],
    "prompt": "Was wird bei einer kontaktfreien Folge beobachtet?",
    "answers": [
      "Ganze Kerzen bleiben auf derselben Seite des benannten Durchschnitts.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Abstand als beobachtete Lage beschreiben und den Ausgang offenlassen.",
    "diagram": "par13-twenty"
  },
  {
    "title": "EMA20 und zwanzig kontaktfreie Kerzen unterscheiden",
    "summary": "Berechnungsperiode und Länge der beobachteten Folge sind zwei verschiedene Zahlen.",
    "paragraphs": [
      "EMA bedeutet exponentieller gleitender Durchschnitt. Der jüngste Schluss bekommt darin ein festes Gewicht. Beim EMA20 beträgt dieses Gewicht 2 geteilt durch 21.",
      "Die 20 in EMA20 beschreibt die Einstellung des Durchschnitts. Zwanzig kontaktfreie Kerzen beschreibt dagegen eine gezählte Folge von Kerzenspannen. Auch bei einem anderen Durchschnitt könnte man eine solche Folge zählen.",
      "Nora notiert deshalb beides: welchen Durchschnitt sie verwendet und wie viele Kerzen ihn nach ihrer Kontaktregel nicht berührt haben. Die gleiche Zahl macht diese beiden Angaben nicht austauschbar."
    ],
    "prompt": "Wofür steht die 20 in EMA20?",
    "answers": [
      "Für die Einstellung des Durchschnitts, nicht für die gezählte Kontaktpause.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Durchschnittseinstellung und Kontaktzählung separat führen.",
    "diagram": "par13-twenty"
  },
  {
    "title": "Die ganze Kerzenspanne prüfen",
    "summary": "Ein Schluss über dem Durchschnitt reicht für kontaktfrei nicht aus.",
    "paragraphs": [
      "Für unsere Regel liegt eine Kerze nur dann vollständig darüber, wenn ihr Tief größer als der gleichzeitig berechnete EMA ist. Vollständig darunter heißt: Ihr Hoch ist kleiner als dieser EMA.",
      "Liegt die Linie innerhalb der Hoch-Tief-Spanne oder genau auf einem Rand, zählen wir das als Kontakt. Eine Kerze kann über der Linie schließen und sie mit ihrem unteren Docht trotzdem erreicht haben.",
      "Nora betrachtet darum Körper und Dochte. Nur Schlusskurse zu zählen würde eine andere Regel ergeben und könnte zu einem anderen Ergebnis führen."
    ],
    "prompt": "Eine Kerze schließt über dem EMA, ihr Tief liegt darunter: kontaktfrei?",
    "answers": [
      "Nein, ihre ganze Spanne schneidet den Durchschnitt.",
      "Ja, es zählt ausschließlich die Körperfarbe.",
      "Ja, jeder Schluss über der Linie bedeutet vollständigen Abstand."
    ],
    "rule": "Hoch und Tief mit dem Wert derselben abgeschlossenen Kerze vergleichen.",
    "diagram": "par13-boundary"
  },
  {
    "title": "Anfangswert und verfügbare Daten offenlegen",
    "summary": "Unser EMA20 beginnt mit vierzig vorgegebenen Vorbereitungsschlüssen bei 100.",
    "paragraphs": [
      "Der Übungsmarkt hat vor der sichtbaren Folge vierzig abgeschlossene Schlüsse bei 100. Der erste EMA wird auf 100 gesetzt. Jeder neue Schluss verändert ihn um 2/21 seines Abstands zum bisherigen EMA.",
      "Die sichtbare Folge beginnt danach mit einer Eröffnung bei 104 und Schluss 104,8. Der Übergang von 100 auf 104 ist ausdrücklich Teil der erfundenen Ausgangsdaten. Wir behaupten dafür keine reale Sitzungslücke.",
      "Jeder eingezeichnete EMA-Wert verwendet nur Schlüsse bis zu seiner Kerze. Spätere Rückgänge verändern nicht rückwirkend die frühere Linie. Die Vorbereitung wird erklärt, aber nicht als kontaktfreier Trend mitgezählt."
    ],
    "prompt": "Gehen spätere Schlüsse in den EMA einer früheren Kerze ein?",
    "answers": [
      "Nein, jeder Wert verwendet nur die bis dahin bekannten Schlüsse.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Initialisierung, sichtbaren Beginn und verfügbare Daten offenlegen.",
    "diagram": "par13-warmup"
  },
  {
    "title": "Neunzehn und zwanzig Abschlüsse sauber zählen",
    "summary": "Nach Minute 19 sind erst neunzehn kontaktfreie Minuten abgeschlossen.",
    "paragraphs": [
      "Unser Hauptfall zeigt gleichmäßigen Aufwärtsfortschritt. In jeder sichtbaren Minute liegt das Tief über dem zugehörigen EMA20. Wir beginnen die Zählung mit Minute 1.",
      "Nach Abschluss von Minute 19 beträgt die beobachtete Folge neunzehn. Minute 20 darf erst nach ihrem eigenen Abschluss hinzukommen. Ihr endgültiges Tief ist während ihrer Entstehung noch nicht bekannt.",
      "Die Übung zählt abgeschlossene Minuten. Eine laufende Kerze kann den Durchschnitt noch erreichen und die bis dahin angenommene Kontaktfreiheit aufheben."
    ],
    "prompt": "Wie viele abgeschlossene kontaktfreie Kerzen sind nach Minute 19 belegt?",
    "answers": [
      "Neunzehn, nicht schon zwanzig.",
      "Zwanzig, weil die nächste Minute schon erwartet wird.",
      "Vierzig, weil die Vorbereitung immer dazugehört."
    ],
    "rule": "Laufende Kerzen nicht als fertige Beobachtungen mitzählen.",
    "diagram": "par13-nineteen"
  },
  {
    "title": "Zwanzig ist eine Orientierung, kein Umschalter",
    "summary": "Minute 20 vervollständigt die Folge; der Markt erhält dadurch keinen Befehl.",
    "paragraphs": [
      "Nach dem zwanzigsten Abschluss hat unser Fall zwanzig ganze Kerzen oberhalb des EMA20. Das Hoch der letzten Kerze beträgt 124, ihr Schluss 123,8.",
      "Die Zahl hilft, eine ungewöhnlich lange einseitige Phase bewusst wahrzunehmen. Zwischen neunzehn, zwanzig oder einundzwanzig Kerzen entsteht aber keine plötzlich sichere Handelschance.",
      "Nora wartet weder blind bis exakt zwanzig noch verkauft sie automatisch gegen den Anstieg. Stärke, mögliche Überdehnung und ein späterer Rücksetzer können gleichzeitig wichtige Fragen sein."
    ],
    "prompt": "Was ändert das Erreichen der zwanzigsten Kerze sicher?",
    "answers": [
      "Die gezählte Folge hat jetzt zwanzig Abschlüsse; der nächste Ausgang bleibt offen.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Eine Orientierung nicht als starre Ergebnisregel behandeln.",
    "diagram": "par13-twenty"
  },
  {
    "title": "Kerzenzahl in Zeit übersetzen",
    "summary": "Zwanzig Fünf-Minuten-Kerzen umfassen 100 Minuten Kerzenzeit.",
    "paragraphs": [
      "Die Zahl der Kerzen ist nicht dieselbe wie eine feste Stundenzahl. Zwanzig Ein-Minuten-Kerzen umfassen zwanzig Minuten; zwanzig Fünf-Minuten-Kerzen umfassen hundert Minuten.",
      "Zwei volle Stunden entsprechen bei fünf Minuten je Kerze vierundzwanzig vollständigen Kerzen. Bei Sitzungspausen oder ausgelassenen Daten kann die verstrichene Uhrzeit zusätzlich größer sein.",
      "Unsere Diagramme bleiben Minutenfälle. Nora überträgt den Gedanken auf andere Zeitebenen, ohne aus einer Kerzenanzahl heimlich eine falsche Uhrzeit zu machen."
    ],
    "prompt": "Wie viel Kerzenzeit entsprechen zwanzig Fünf-Minuten-Kerzen?",
    "answers": [
      "100 Minuten.",
      "Genau zwei Stunden unter allen Bedingungen.",
      "Immer zwanzig Minuten, unabhängig vom Zeitrahmen."
    ],
    "rule": "Zeitebene, Kerzenzahl und verstrichene Uhrzeit getrennt benennen.",
    "diagram": "par13-twenty"
  },
  {
    "title": "Die Folge kann mitten im Tag beginnen",
    "summary": "Unsere Zählung startet an einem benannten Beobachtungsbeginn, nicht automatisch zur Eröffnung.",
    "paragraphs": [
      "Einer kontaktfreien Folge können bereits viele Kerzen eines Handelstags vorausgehen. Sie muss nicht mit der Tageseröffnung beginnen und sagt ohne Zeitstempel nichts über die Tageszeit aus.",
      "Die Nummern 1 bis 20 im Hauptfall sind Beobachtungsnummern. Sie sind keine Behauptung über die ersten zwanzig Minuten einer realen Sitzung. Vorbereitungsdaten und Sitzungsgrenzen bleiben eigene Angaben.",
      "Nora prüft außerdem Datenlücken. Fehlt eine Kerze, weiß sie ohne zusätzliche Information nicht, ob der Markt in dieser Zeit den Durchschnitt berührt hat. Unbekannt ist kein weiterer kontaktfreier Beweis."
    ],
    "prompt": "Beweisen die Nummern 1–20 die erste Tagesstunde?",
    "answers": [
      "Nein, es sind hier nur Nummern ab einem benannten Beobachtungsbeginn.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Beginn und Datenvollständigkeit vor der Kontaktzählung festhalten.",
    "diagram": "par13-warmup"
  },
  {
    "title": "Knapp davor ist noch kein Kontakt",
    "summary": "Eine Variante dreht mit Tief 115,4 knapp über ihrem EMA20.",
    "paragraphs": [
      "Nach denselben ersten zwanzig Minuten fällt die Variante deutlich zurück. Minute 21 hat Tief 115,4 und Schluss 118. Ihr gleichzeitig berechneter EMA20 liegt bei rund 115,349.",
      "Das Tief bleibt damit etwa 0,051 Punkte über der Linie. Es ist ein naher Besuch, nach unserer exakten Regel aber kein Kontakt. Die Folge vollständig darüber liegender Kerzen beträgt jetzt einundzwanzig.",
      "Nora erklärt die Rundung: Für die Entscheidung verwenden wir die ungerundeten Rechenwerte. Eine dick gezeichnete Linie oder gerundete Beschriftung ersetzt diese Regel nicht."
    ],
    "prompt": "Berührt Tief 115,4 einen EMA von ungefähr 115,349?",
    "answers": [
      "Nein, das Tief bleibt etwas darüber.",
      "Ja, sobald der Abstand klein aussieht.",
      "Ja, weil eine rote Kerze immer einen EMA-Kontakt erzeugt."
    ],
    "rule": "Nähe, grafische Dicke und exakten Kontakt auseinanderhalten.",
    "diagram": "par13-near"
  },
  {
    "title": "Exakte Gleichheit beendet die kontaktfreie Folge",
    "summary": "Ein eigener Grenzfall hat Tief und EMA bei genau 101.",
    "paragraphs": [
      "Für eine klare Grenzprüfung verwenden wir eine separate Kerze: Eröffnung 102, Hoch 111, Tief 101 und Schluss 110,5. Mit derselben Vorbereitung bei 100 ergibt der neue EMA20 genau 101.",
      "Das Tief liegt exakt auf der Linie. Nach unserer Regel ist das bereits Kontakt. Strikt größer wäre nötig, um die Kerze vollständig oberhalb zu zählen.",
      "Dieser kurze Rechenfall ist keine zwanzig Kerzen lange Vorgeschichte. Er prüft nur die Gleichheitsgrenze. Nora ergänzt nicht aus Gewohnheit eine lange Folge, die in diesem Bild gar nicht vorkommt."
    ],
    "prompt": "Zählt Tief gleich EMA als vollständig oberhalb?",
    "answers": [
      "Nein, Gleichheit gilt hier als Kontakt.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Die Gleichheitsgrenze ausdrücklich festlegen.",
    "diagram": "par13-boundary"
  },
  {
    "title": "Den ersten wirklichen Kontakt nach der Folge lesen",
    "summary": "Im Hauptfall reicht Minute 21 bis 114 durch den EMA20.",
    "paragraphs": [
      "Im Hauptfall fällt Minute 21 bis 114 und schließt bei 116. Ihr EMA20 liegt jetzt bei ungefähr 115,159. Die Linie liegt innerhalb ihrer Spanne von 114 bis 124.",
      "Damit ist der erste Kontakt nach den zwanzig kontaktfreien Minuten bekannt. Der frühere EMA nach Minute 20 lag bei ungefähr 115,070. Wir verwechseln den alten und den neuen Wert nicht.",
      "Der Kontakt beendet die kontaktfreie Folge. Eine folgende ganze Kerze beginnt auf ihrer Seite eine neue Zählung. Der Kontakt beweist noch keine sofortige Wiederaufnahme des Anstiegs. Die relativ große Abwärtskerze gehört ebenfalls zum aktuellen Befund."
    ],
    "prompt": "Was zeigt Minute 21 sicher?",
    "answers": [
      "Einen ersten Spannen-Kontakt nach der langen Folge, noch keine bestätigte Fortsetzung.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Kontakt und Reaktion auf den Kontakt getrennt beobachten.",
    "diagram": "par13-contact"
  },
  {
    "title": "Kauf am Durchschnitt und Kauf nach Signal trennen",
    "summary": "Eine direkte Kontaktidee und ein späterer Stopkauf brauchen verschiedene Regeln.",
    "paragraphs": [
      "Ein direkter Kauf an einer Durchschnittsregion setzt darauf, dass der Rückgang dort hält. Eine Limitorder könnte auf einen vorab festgelegten Preis warten. Eine Marktorder würde dagegen den verfügbaren Preis nehmen.",
      "Eine andere Idee wartet auf eine abgeschlossene Aufwärtsreaktion und plant anschließend eine Stopkaufschwelle über deren Hoch. Dabei kann der Einstieg höher liegen oder ganz ausbleiben.",
      "Der EMA einer noch laufenden Kerze verändert sich mit ihrem Schluss. Nora behauptet deshalb keine exakt vorher platzierte Limitorder an einem erst später bekannten EMA-Wert und keine genaue Füllung allein aus dem Bild."
    ],
    "prompt": "Sind direkter Kontaktkauf und späterer Stopkauf derselbe Plan?",
    "answers": [
      "Nein, sie verlangen verschiedene Ereignisse und Ausführungsannahmen.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Orderregel und Zeitpunkt des bekannten Bezugspreises zusammen nennen.",
    "diagram": "par13-contact"
  },
  {
    "title": "Eine Aufwärtsreaktion als neue Information ergänzen",
    "summary": "Minute 22 schließt bei 118,7; ihr Hoch beträgt 119.",
    "paragraphs": [
      "Nach dem Kontakt steigt Minute 22. Sie eröffnet bei 116, hat Tief 115,8 und schließt nahe ihrem Hoch 119 bei 118,7. Diese abgeschlossene Kerze ist eine erkennbare Aufwärtsreaktion.",
      "Nora wählt sie für einen eigenen Stopkaufplan. Bei einer Preisstufe von 0,1 liegt die Schwelle über ihrem Hoch bei 119,1. Das alte Extrem 124 liegt noch darüber.",
      "Im Bild nach Minute 22 ist die Schwelle nur vorbereitet. Das Wissen über den späteren Verlauf darf nicht zur Begründung einer schon damals sicheren Fortsetzung werden."
    ],
    "prompt": "Wo liegt eine Preisstufe von 0,1 über dem Signalhoch 119?",
    "answers": [
      "Bei 119,1.",
      "Bei 118,7, weil Schluss und Hoch dasselbe sind.",
      "Bei 115,8 unter der Signalkerze."
    ],
    "rule": "Reaktion, geplante Schwelle und spätere Auslösung getrennt halten.",
    "diagram": "par13-signal"
  },
  {
    "title": "Auch nach einer Reaktion kann die Auslösung fehlen",
    "summary": "Ein Gegenfall bleibt nach Signal 22 mit Hoch 119 unter 119,1.",
    "paragraphs": [
      "Der Gegenfall teilt die Minuten 1 bis 22 mit dem Hauptfall. Minute 23 erreicht höchstens 119 und fällt bis 111. Die Stopkaufschwelle 119,1 wird nicht erreicht.",
      "Das Signal bekommt keinen unmittelbaren Aufwärtsanschluss. In diesem Stopkaufmodell ist deshalb noch keine Longposition belegt. Eine andere Order könnte ein anderes Ergebnis haben.",
      "Nora hält ein ungünstiges Chartende von einem tatsächlich eingegangenen Verlust auseinander. Der vorher beschriebene Kontakt und die grüne Reaktion waren trotzdem echte frühere Beobachtungen."
    ],
    "prompt": "Ist der geplante Stopkauf bei Hoch 119 ausgelöst?",
    "answers": [
      "Nein, die Schwelle 119,1 liegt darüber.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Nichtauslösung als eigenen Ausgang dokumentieren.",
    "diagram": "par13-untriggered"
  },
  {
    "title": "Ein erster Test darf vor dem alten Extrem enden",
    "summary": "Minute 24 erreicht 123,5 und bleibt unter dem alten Hoch 124.",
    "paragraphs": [
      "Im Hauptfall steigt Minute 23 über die geplante Kaufschwelle. Die folgende Minute 24 erreicht ein Hoch von 123,5. Der Markt hat sich dem alten Hoch deutlich genähert.",
      "Der Abstand zu 124 beträgt noch 0,5 Punkte. Eine solche Annäherung ist nicht gleichbedeutend mit exaktem Kontakt oder neuem Hoch. Der Test kann vorher drehen, genau treffen oder darüber hinausgehen.",
      "Nora legt ihren Testbereich vorab fest und nennt daneben den exakten Preis. Ein naher Besuch darf nicht stillschweigend als erfülltes exaktes Preisziel abgerechnet werden."
    ],
    "prompt": "Ist Hoch 123,5 ein exakter Kontakt an 124?",
    "answers": [
      "Nein, es bleibt 0,5 Punkte darunter.",
      "Ja, jedes fast erreichte Ziel gilt als ausgeführt.",
      "Ja, weil das Signal vorher grün war."
    ],
    "rule": "Annäherung, exakten Kontakt und neues Extrem unterscheiden.",
    "diagram": "par13-near-extreme"
  },
  {
    "title": "Ein neues Hoch erst später bestätigen",
    "summary": "Erst Minute 25 steigt bis 124,5 über das alte Hoch 124.",
    "paragraphs": [
      "Das spätere Bild erweitert denselben Verlauf um Minute 25. Ihr Hoch beträgt 124,5, ihr Schluss 124,2. Jetzt ist ein neues Hoch über dem alten Extrem 124 sichtbar.",
      "Dieser Ausgang ist eine gelungene Fortsetzung im erfundenen Beispiel. Er liefert keine historische Trefferquote und war weder bei der zwanzigsten Kerze noch beim ersten Kontakt sicher.",
      "Nora betrachtet erfolgreiche und erfolglose Wege mit demselben früheren Informationsstand. So wird aus einer fertigen Grafik keine angebliche Vorhersage."
    ],
    "prompt": "Wann ist das neue Hoch in diesem Verlauf sichtbar?",
    "answers": [
      "Erst nach dem späteren Hoch 25 bei 124,5.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Den ersten verfügbaren Zeitpunkt einer Bestätigung erhalten.",
    "diagram": "par13-extreme"
  },
  {
    "title": "Ein tiefer Kontakt kann in Gegenfortschritt übergehen",
    "summary": "Ein alternativer Rückgang fällt schon in Minute 21 bis 108.",
    "paragraphs": [
      "Eine weitere Variante übernimmt dieselben zwanzig kontaktfreien Anfangskerzen. Ihre Minute 21 schließt bei 109 und erreicht ein Tief 108. Die folgende Minute fällt weiter bis 104.",
      "Der Markt hat den Durchschnitt zwar erreicht, aber die alte Richtung bekommt keine schnelle Erholung. Mehrere starke Gegenkerzen sind ein anderes Umfeld als eine kurze Pause mit klarer Rückkehr.",
      "Nora kauft nicht nur wegen der langen vorherigen Folge. Sie muss prüfen, ob die alte Trendidee durch den neuen Verlauf noch gestützt wird. Auch eine lange starke Bewegung kann sich umkehren."
    ],
    "prompt": "Beweist die lange frühere Folge, dass jeder spätere Kontakt hält?",
    "answers": [
      "Nein, derselbe Anfang kann in einen deutlichen weiteren Rückgang übergehen.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Aktuelle Gegenstärke über eine alte Zählung hinaus ernst nehmen.",
    "diagram": "par13-reversal"
  },
  {
    "title": "Im Abwärtstrend dieselbe Kontaktlogik anwenden",
    "summary": "Der gespiegelte Anfang endet bei Tief 76 statt Hoch 124.",
    "paragraphs": [
      "Wir spiegeln die ersten zwanzig Minuten mit 200 minus jedem Preis. Aus früheren Hochs werden Tiefs und umgekehrt. Der EMA wird mit einem Anfang bei 100 ebenfalls korrekt gespiegelt.",
      "Jetzt bleiben zwanzig ganze Kerzen unter dem EMA20. Für eine spätere Fortsetzung nach unten wäre ein Test des alten Tiefs 76 ein benannter Bezug. Die Gegenbewegung zum Durchschnitt läuft nach oben.",
      "Nora spiegelt auch die Orderseite: Ein möglicher Stopverkauf läge unter einem benannten Signal, der Schutz oberhalb. Ein bloßer Durchschnittskontakt führt noch keinen Verkauf aus."
    ],
    "prompt": "Welcher alte Extrempreis gehört zum gespiegelten Abwärtsfall?",
    "answers": [
      "Das alte Tief 76.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Bei Spiegelung auch Extrem, EMA-Anfang und Orderseite tauschen.",
    "diagram": "par13-bear-away"
  },
  {
    "title": "Mehrere Gegenkerzen verändern den ersten Kontakt",
    "summary": "Im Zusatzfall erreicht erst die sechste grüne Gegenkerze den EMA.",
    "paragraphs": [
      "Nach dem gespiegelten Abwärtsschub steigen sechs aufeinanderfolgende Minuten. Die ersten fünf bleiben noch vollständig unter dem jeweiligen EMA. Minute 26 reicht mit Hoch 84,4 über die Linie.",
      "Die sechs grünen Körper zeigen einen kräftigeren Rücklauf als eine einzige kleine Pause. Ein Kontakt nach langer Abwesenheit ist damit sichtbar, aber ein sofortiger Verkauf braucht weiterhin eine eigene Regel.",
      "Nora prüft beides zusammen: die Stärke des alten Rückgangs und die Stärke der neuen Erholung. Sie blendet die Gegenkerzen nicht aus, nur weil die frühere Zählung zwanzig erreicht hatte."
    ],
    "prompt": "Was ergänzt die Kontaktzählung im Abwärtszusatzfall?",
    "answers": [
      "Die Stärke der sechs aufeinanderfolgenden grünen Gegenkerzen.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Vorgeschichte und aktuelle Gegenbewegung gemeinsam bewerten.",
    "diagram": "par13-bear-contact"
  },
  {
    "title": "Ein schwacher erster Anschluss ist ein Gegenargument",
    "summary": "Nach kleiner Innenkerze 27 wird die erste Verkaufsschwelle erreicht, aber der Schluss bleibt hoch.",
    "paragraphs": [
      "Minute 27 liegt innerhalb der Spanne von Minute 26 und hat einen kleinen roten Körper. Ihr Tief beträgt 82,7. Eine Verkaufsschwelle eine Preisstufe darunter läge bei 82,6.",
      "Die folgende Minute fällt bis 82,3, schließt aber wieder bei 83,6. Damit ist die Schwelle erreicht, ein kräftiger dauerhafter Verkaufsanschluss bis zum Schluss jedoch ausgeblieben.",
      "Ein genauer Füllpreis oder Stopverlust folgt daraus nicht. Nora beschreibt nur Schwellenkontakt und Schlusslage. Die vorherige starke Erholung macht den schwachen ersten Versuch besonders beachtenswert."
    ],
    "prompt": "Was zeigen Tief 82,3 und Schluss 83,6 gegenüber Schwelle 82,6?",
    "answers": [
      "Die Schwelle wurde erreicht, der Schluss liefert aber keinen kräftigen Abwärtsanschluss.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Auslösung und Qualität des Anschlusses separat prüfen.",
    "diagram": "par13-bear-first"
  },
  {
    "title": "Den zweiten Versuch als neue Entscheidung prüfen",
    "summary": "Nach Erholung 29 wird eine neue Verkaufsschwelle bei 83,3 vorbereitet.",
    "paragraphs": [
      "Nach dem schwachen ersten Versuch steigt Minute 29 noch einmal. Sie hat Hoch 84,5 und Tief 83,4. Für eine neue Regel liegt die Verkaufsschwelle unter ihrem Tief bei 83,3.",
      "Minute 30 fällt später bis 81,8 und schließt bei 82. Der zweite Versuch bekommt damit mehr Abwärtsfortschritt. Das alte Tief 76 ist trotzdem noch weit entfernt.",
      "Der zweite Versuch ist kein Nachkaufen zur Rettung des ersten. Nora rechnet ihn als neue Entscheidung im verbleibenden Budget. Wäre der erste noch offen, müsste das gesamte gemeinsame Risiko begrenzt bleiben."
    ],
    "prompt": "Welchen Preis muss die zweite Verkaufsidee hier unterschreiten?",
    "answers": [
      "83,3, eine Preisstufe unter Tief 29 bei 83,4.",
      "Immer den alten Einstieg, unabhängig vom neuen Signal.",
      "76, weil nur das fernste Tief als Schwelle erlaubt ist."
    ],
    "rule": "Neue Schwelle und gemeinsames Geldrisiko ausdrücklich festlegen.",
    "diagram": "par13-bear-second"
  },
  {
    "title": "Ein höheres Testtief ist noch kein neues Abwärtstief",
    "summary": "Minute 31 erreicht 77 und bleibt über dem alten Tief 76.",
    "paragraphs": [
      "Im späteren Abwärtsvergleich fällt der Markt bis 77 und schließt bei 77,5. Der Rückgang hat sich dem alten Tief 76 angenähert, es aber nicht unterschritten.",
      "Das ist ein höheres Testtief. Die kräftige vorherige Erholung kann Anlass sein, einen erneuten Aufwärtsversuch zu berücksichtigen. Sie beweist ihn aber ebenso wenig wie das Testtief eine fertige große Umkehr.",
      "Nora verfolgt das vorab genannte Ziel genau. Eine Position auf einen großen neuen Tiefbruch hätte einen anderen Anspruch als eine kurze Bewegung zum alten Tiefbereich."
    ],
    "prompt": "Wie liegt das neue Testtief 77 relativ zu 76?",
    "answers": [
      "Einen Punkt höher; ein neues tieferes Tief fehlt.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Kleinen Abwärtserfolg und großes neues Extrem getrennt bewerten.",
    "diagram": "par13-bear-test"
  },
  {
    "title": "Spätere Hochtests mit dem bisherigen Lernstoff verbinden",
    "summary": "Nach dem höheren Testtief steigt ein weiterer Versuch bis 84,4.",
    "paragraphs": [
      "Der Zusatzfall erhält noch eine spätere Minute mit Hoch 84,4. Dieses Hoch liegt nahe am vorigen Hoch 29 bei 84,5. Zwischen beiden liegt der Rückgang bis 77.",
      "Die beiden Hochbesuche können als neuer Doppelhochversuch beschrieben werden. Gleichzeitig zeigt die kräftige Rückkehr nach oben, dass der Markt nicht einfach geradlinig unter sein altes Tief gefallen ist.",
      "Nora beginnt eine neue Beurteilung. Ein späteres Doppeltestbild macht die ursprüngliche EMA-Idee nicht rückwirkend sicher und zwingt auch den nächsten Abwärtsausbruch nicht."
    ],
    "prompt": "Welcher neue Vergleich ist im späteren Bild möglich?",
    "answers": [
      "Hoch 84,4 mit dem vorherigen Hoch 84,5 vergleichen.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Spätere Muster als neue Information mit neuen Ankern behandeln.",
    "diagram": "par13-bear-double"
  },
  {
    "title": "Ein Kaufhöhepunkt verändert den Kontext",
    "summary": "Der Climax-Zusatzfall beschleunigt stark bis Hoch 145.",
    "paragraphs": [
      "Ein Climax, hier Kaufhöhepunkt genannt, ist eine auffällig beschleunigte Schlussphase. Unser Zusatzfall teilt die ersten siebzehn Minuten mit dem Hauptfall, steigt dann aber mit immer größeren Schüben bis Hoch 145.",
      "Auch dort bleiben die zwanzig Kerzen zunächst über dem EMA20. Die gleiche Zählung steht jetzt neben einem anderen Stärkeverlauf: dem steilen Endanstieg statt nur gleichmäßigem Fortschritt.",
      "Nora nimmt eine mögliche Erschöpfung als Kontextfrage hinzu. Ein Kaufhöhepunkt sagt nicht die genaue Spitze voraus; er macht den späteren Durchschnittskontakt aber nicht automatisch zum einfachen Fortsetzungskauf."
    ],
    "prompt": "Ist dieselbe Kontaktzählung nach starkem Endanstieg schon derselbe Kontext?",
    "answers": [
      "Nein, die Beschleunigung ist eine zusätzliche wichtige Beobachtung.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Kontaktzahl mit Form und Beschleunigung der Bewegung verbinden.",
    "diagram": "par13-climax"
  },
  {
    "title": "Starker Abwärtsschub nach Beschleunigung ist mehr als ein Berühren",
    "summary": "Im Climax-Fall folgt auf den Endanstieg eine Folge großer roter Kerzen.",
    "paragraphs": [
      "Nach Hoch 145 fallen drei abgeschlossene Minuten mit deutlichen roten Körpern. Der erste Kontakt mit dem EMA tritt während dieses kräftigen Rückgangs auf.",
      "Ein Aufwärtsschub und kurz darauf ein starker Abwärtsschub zeigen Gegenkraft. Daraus kann zunächst eine beidseitige Seitwärtsphase oder eine größere Korrektur entstehen. Ein einzelner Kauf direkt am Durchschnitt ignoriert diese neue Lage.",
      "Nora prüft die ganze Folge, bevor sie wieder eine Fortsetzungsidee auswählt. Sie behandelt den EMA nicht wie einen festen Boden, der jeden schnellen Rückgang stoppen muss."
    ],
    "prompt": "Warum genügt die alte Zählung im Climax-Gegenfall nicht?",
    "answers": [
      "Weil inzwischen ein kräftiger Gegenschub sichtbar ist.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Durchschnittskontakt im aktuellen Marktverlauf einordnen.",
    "diagram": "par13-climax-contact"
  },
  {
    "title": "Zwei Gegenstrecken können trotz besserem Signal scheitern",
    "summary": "Eine Erholung und ein zweiter tiefer Besuch bilden im Climax-Fall eine längere Pause.",
    "paragraphs": [
      "Nach dem starken Rückgang erholt sich Minute 24. Minute 25 macht dann ein weiteres Tief bei 104,8, worauf Minute 26 mit grünem Körper bis 111,8 reagiert.",
      "Jetzt gibt es zwei abgegrenzte Abwärtsstrecken mit einer Erholung dazwischen. Das ist mehr Information als der erste schnelle EMA-Kontakt. Die größere Form bleibt dennoch weit unter dem alten Hoch 145.",
      "Eine spätere bessere Signalkerze kann ebenfalls scheitern. Nora unterscheidet verständlichere Struktur von zugesagtem Erfolg und rechnet auch einen neuen Versuch unabhängig."
    ],
    "prompt": "Garantiert die spätere grüne Reaktion den Weg zurück zu 145?",
    "answers": [
      "Nein, auch eine klarere zweite Gegenstrecke kann ohne Fortsetzung enden.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Mehr Bestätigung nicht mit Ergebnissicherheit verwechseln.",
    "diagram": "par13-climax-second"
  },
  {
    "title": "Ein zweites Signal mit Gegenfall zu Ende verfolgen",
    "summary": "Nach Hoch 112,1 folgen im Climax-Fall noch tiefere Kurse bis 99.",
    "paragraphs": [
      "Nach Signal 26 wäre eine neue Kaufschwelle bei 111,9 möglich. Minute 27 erreicht 112,1, schließt aber bei 103. Die nächste Minute fällt sogar bis 99.",
      "Die Signalkerze und die Schwelle waren sichtbar, doch ein haltbarer Aufwärtsanschluss fehlt. Hoch und Tief der Minute 27 verraten keine genaue Intrabarreihenfolge und damit keine vollständige Handelsabrechnung.",
      "Der gezeigte Zeitraum endet hier. Über eine viel spätere Erholung behaupten wir nichts. Nora lässt nicht jeden gescheiterten Versuch unbegrenzt als angeblich noch ausstehenden Gewinn weiterlaufen."
    ],
    "prompt": "Was belegt die spätere Fortsetzung bis 99?",
    "answers": [
      "Das zweite Signal hat bis zum gezeigten Ende keinen haltbaren Aufwärtsanschluss bekommen.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Auch zweite Versuche bis zu einem benannten Auswertungsende prüfen.",
    "diagram": "par13-climax-fail"
  },
  {
    "title": "Lange frühere Abwesenheit bleibt keine dauerhafte Erlaubnis",
    "summary": "Eine ganze Kerze unter dem EMA ist nach starker Gegenbewegung anders einzuordnen.",
    "paragraphs": [
      "Eine spätere Kerze kann vollständig unter dem EMA liegen, obwohl der Markt vorher lange darüber geblieben war. Damit besteht nun ein Abstand auf der anderen Seite.",
      "Im Climax-Zusatzfall geschieht das nach dem starken Gegenrückgang. Wer diese Kerze allein als Kaufsignal des alten Aufwärtstrends behandelt, blendet die bereits veränderte Vorgeschichte aus.",
      "Der erste vollständige Abstand auf der Gegenseite ist ein eigenes Thema des nächsten Kapitels. Hier genügt: Kontakt, ganze Gegenkerze und alter Trendkontext sind verschiedene Beobachtungen."
    ],
    "prompt": "Ist eine spätere ganze Gegenkerze immer automatisch ein Kauf nach alter Trendrichtung?",
    "answers": [
      "Nein, der inzwischen veränderte Kontext muss erneut geprüft werden.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Eine alte Kontaktfolge nicht als zeitlich unbegrenzte Handelsfreigabe verwenden.",
    "diagram": "par13-opposite-gap"
  },
  {
    "title": "Zwei Fehlversuche verlangen eine neue Beurteilung",
    "summary": "Ein dritter gleich begründeter Versuch ist keine Pflicht.",
    "paragraphs": [
      "Wenn zwei geplante Fortsetzungsversuche keinen brauchbaren Anschluss bekommen, hat Nora neue Gegenargumente. Der Markt könnte inzwischen seitwärts oder in einem Gegenkanal laufen.",
      "Sie eröffnet deshalb nicht automatisch einen dritten Versuch nur mit derselben alten EMA-Begründung. Das gilt unabhängig davon, ob die vorherigen Ideen nicht ausgelöst wurden, schwach endeten oder nach klaren Ausführungsannahmen Verluste erzeugten.",
      "Eine neue Entscheidung braucht neue aktuelle Information und ein verbleibendes Budget. Nora unterscheidet dabei Chartversuche von tatsächlich ausgeführten Trades. Die Zahl zwei erzwingt umgekehrt auch keine sichere Gegenposition."
    ],
    "prompt": "Was folgt aus zwei gescheiterten Fortsetzungsversuchen?",
    "answers": [
      "Eine neue Kontext- und Budgetprüfung, kein automatischer dritter Versuch.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Fehlversuche als neue Information behandeln statt Risiko zu steigern.",
    "diagram": "par13-climax-fail"
  },
  {
    "title": "Reststrecke und Preisrisiko vor dem Einstieg rechnen",
    "summary": "Modellkauf 119,1, Schutz 113,9, altes Hoch 124.",
    "paragraphs": [
      "Für eine reine Modellrechnung setzen wir eine Füllung bei 119,1 voraus. Ein Schutz unter dem Kontakttief 114 liegt bei 113,9. Die Preisstrecke zum Schutz beträgt 5,2 Punkte, zum alten Hoch 124 nur 4,9.",
      "Bei einem Euro je Punkt und Einheit, zwei Euro Gesamtkosten und 30 Euro Budget passen fünf ganze Einheiten: fünf mal 5,2 plus zwei ergibt 28 Euro Modellverlust. Bis 124 blieben netto 22,5 Euro Modellgewinn.",
      "Die kürzere Zielstrecke ist keine Aussage über eine Gewinnwahrscheinlichkeit. Die Rechnung zeigt lediglich, dass ein erkennbares Setup und ein alter Extrempreis noch keinen automatisch günstigen Geldplan bilden."
    ],
    "prompt": "Wie groß ist der Modellverlust bei fünf Einheiten einschließlich Kosten?",
    "answers": [
      "28 Euro.",
      "26 Euro, weil die Gesamtkosten nicht zählen.",
      "22,5 Euro, weil Zielgewinn und Stopverlust immer gleich sind."
    ],
    "rule": "Schutzstrecke, Zielstrecke, Menge und Kosten zusammen prüfen.",
    "diagram": "par13-risk"
  },
  {
    "title": "Eine Teilposition braucht eine eigene Restregel",
    "summary": "Zwei Einheiten am Ziel und drei weiter gehaltene Einheiten sind ein ausdrücklich neuer Modellplan.",
    "paragraphs": [
      "Nora kann für die fünf angenommenen Einheiten verschiedene Ausstiegsregeln vergleichen. Nimmt sie zwei bei 124 heraus, beträgt deren Bruttogewinn 9,8 Euro. Drei Einheiten bleiben danach noch dem weiteren Verlauf ausgesetzt.",
      "Für den Rest muss der Schutz ausdrücklich feststehen. Bliebe er bei 113,9, läge dessen Preisverlust vom Einstieg aus bei 15,6 Euro. Zusammen mit den ersten Gewinnen wäre das vor Kosten minus 5,8 Euro.",
      "Eine Teilgewinnnahme macht den Rest also nicht kostenlos oder risikofrei. Zusätzliche Ausführungskosten könnten die Rechnung verschlechtern. Nora nimmt weder blind alles heraus noch hält sie ohne benannte Regel unbegrenzt weiter."
    ],
    "prompt": "Ist der verbleibende Rest nach einem Teilgewinn automatisch risikofrei?",
    "answers": [
      "Nein, sein Schutzpreis und die Kosten bestimmen das verbleibende Ergebnis.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Teilgewinn und verbleibendes Risiko gemeinsam weiterrechnen.",
    "diagram": "par13-partial"
  },
  {
    "title": "Größere Zeitebene aus echten Gruppen prüfen",
    "summary": "Nach Minute 20 sind nur sechs Drei-Minuten-Gruppen vollständig abgeschlossen.",
    "paragraphs": [
      "Wir fassen je drei Minuten zu einer größeren Kerze zusammen. Die erste Eröffnung, das größte Hoch, das tiefste Tief und der letzte Schluss der Gruppe bestimmen deren vier Werte.",
      "Nach Minute 20 sind nur die Gruppen bis 16–18 abgeschlossen. Minuten 19 und 20 dürfen die noch offene Gruppe 19–21 nicht mit einem späteren Schluss auffüllen. Für deren EMA20 bereiten wir vierzig größere Schlüsse bei 100 vor, entsprechend 120 flachen Minuten.",
      "Die größere Ansicht hat hier sechs ganze Kerzen über ihrem eigenen EMA20, keine zwanzig. Ein Trend kann auf mehreren Ebenen deutlich sein, ohne dass die Kontaktzählung auf allen Ebenen gleich ist."
    ],
    "prompt": "Wie viele größere Kerzen sind nach Minute 20 sicher abgeschlossen?",
    "answers": [
      "Sechs Drei-Minuten-Kerzen; die Gruppe 19–21 ist noch offen.",
      "Zwanzig, weil die kleine Ebene zwanzig Kerzen hatte.",
      "Sieben, weil zwei Minuten bereits einen vollständigen Schluss ersetzen."
    ],
    "rule": "Kontaktzählung auf jeder Ebene aus deren eigenen abgeschlossenen Daten ableiten.",
    "diagram": "par13-higher"
  },
  {
    "title": "Die Kontaktidee vollständig erklären",
    "summary": "Durchschnitt, Zählregel, Kontext, Signal und Geldplan gehören zusammen.",
    "paragraphs": [
      "Nora beschreibt den Hauptfall nach Minute 22: Zwanzig abgeschlossene Minuten zuvor ganz über dem EMA20, dann erster Kontakt in Minute 21 und abgeschlossene Aufwärtsreaktion in Minute 22. Die Kaufschwelle 119,1 ist noch offen.",
      "Sie prüft daneben, ob ein Kaufhöhepunkt oder ein kräftiger Gegenkanal die alte Idee schwächt. Erst danach kommen eine mögliche Order, Schutz, Ziel, Menge und Kosten als eigener Plan hinzu.",
      "Du kannst dieselbe Reihenfolge für den Abwärtsfall üben. Entscheidend ist, dass eine beobachtete lange Folge nicht als Versprechen behandelt wird und jeder spätere Abschluss neues Wissen liefert."
    ],
    "prompt": "Welche Aussage ist nach Minute 22 im Hauptfall vollständig?",
    "answers": [
      "Lange Folge, Kontakt und Signal sind bekannt; Auslösung und Erfolg bleiben offen.",
      "Die Zahl garantiert den nächsten Gewinn.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Befund, Plan und späteren Ausgang getrennt formulieren.",
    "diagram": "par13-signal"
  }
]);
for (const lesson of rangesChapterThirteenLessons) for (const step of lesson.steps) if (step.type==='diagram' && step.scenario==='par13-higher') step.caption='Erfundener Markt · abgeschlossene Drei-Minuten-Gruppen · eigener EMA20 aus abgeschlossenen Gruppenschlüssen mit erklärter Vorbereitung · Preise in Punkten.';
