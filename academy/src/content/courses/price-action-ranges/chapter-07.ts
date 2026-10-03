import { makeLessons } from './lessons';
export const rangesChapterSevenLessons = makeLessons('chapter-07', 'Kapitel 7 · Ziele aus der ersten Bewegungsstrecke ableiten', [
  {
    "title": "Ein Zielbereich ist ein möglicher nächster Bezug",
    "summary": "Die gleiche Strecke kann als Projektion nach einer Pause dienen.",
    "paragraphs": [
      "Nora untersucht einen eigenen Minutenfall. Ein erster Aufwärtsschub beginnt bei 96 und erreicht 102,4. Danach kommt ein Rücklauf. Sie möchte einen möglichen Bereich für eine weitere Aufwärtsbewegung ableiten.",
      "Dazu verwendet sie die Größe der ersten Strecke. Das ist eine Messprojektion: Eine bekannte Entfernung wird von einem klar benannten neuen Punkt aus noch einmal abgetragen. Die Rechnung sagt nicht, welchen Weg der Markt dorthin nehmen wird.",
      "Der Zielbereich kann erreicht, knapp verfehlt oder deutlich überschritten werden. Er kann auch unerreicht bleiben. Nora benutzt ihn zur Planung und prüft den weiteren Verlauf, statt die Linie als Pflicht des Marktes zu lesen."
    ],
    "prompt": "Was beschreibt eine Messprojektion?",
    "answers": [
      "Eine bekannte Strecke wird ab einem benannten Punkt erneut abgetragen.",
      "Ein Preis, den der Markt garantiert als Nächstes erreicht.",
      "Die tatsächliche Ausführung jeder eigenen Order."
    ],
    "rule": "Projektion, Weg und tatsächliches Ergebnis auseinanderhalten.",
    "diagram": "par7-leg"
  },
  {
    "title": "Den ersten Bewegungsteil konkret begrenzen",
    "summary": "A=96 und B=102,4 ergeben 6,4 Punkte.",
    "paragraphs": [
      "Für die erste Rechnung setzt Nora A auf den Eröffnungspreis 96 der ersten Schubkerze. Ihr Tief liegt ebenfalls bei 96. B setzt sie auf das Hoch 102,4 der dritten Schubkerze. Die erste Strecke ist damit klar benannt.",
      "B minus A ergibt 102,4 minus 96 gleich 6,4 Punkte. Der Schluss der dritten Kerze liegt bei 102. Würde Nora ihn statt des Hochs verwenden, hätte sie eine andere, 6 Punkte lange Strecke.",
      "Die Auswahl muss zur vorher festgelegten Regel passen. Nora wechselt nicht heimlich zwischen Hoch und Schluss, um nachträglich eine schönere Übereinstimmung mit dem Endchart zu erhalten."
    ],
    "prompt": "Wie lang ist die Strecke von A 96 zu B 102,4?",
    "answers": [
      "6,4 Punkte.",
      "6 Punkte, unabhängig vom gewählten Endpreis.",
      "102,4 Punkte."
    ],
    "rule": "Start- und Endpreis vor der Messung ausdrücklich auswählen.",
    "diagram": "par7-leg"
  },
  {
    "title": "Den Rücklauf als eigenen Abschnitt erkennen",
    "summary": "Die Gegenbewegung verbindet den ersten mit einem möglichen zweiten Schub.",
    "paragraphs": [
      "Nach den drei steigenden Schubkerzen folgt eine kleine Pause. Anschließend fällt Minute 5 auf 100 und schließt bei 100,5. Diese Bewegung liegt entgegen dem ersten Aufwärtsschub.",
      "Nora bezeichnet sie als Rücklauf. Das Tief 100 wird für die Übung zum Bezug C. Ein weiterer Aufwärtsabschnitt wäre dann der zweite Schub, nicht einfach jede einzelne grüne Kerze nach Minute 3.",
      "Am Schluss von Minute 5 weiß Nora noch nicht, ob 100 das endgültige Rücksetzertief bleiben wird. C ist zu diesem Zeitpunkt ein beobachteter Kandidat. Die nächste Gegenbewegung könnte tiefer greifen und ihre Idee verändern."
    ],
    "prompt": "Was ist nach Minute 5 noch offen?",
    "answers": [
      "Ob 100 das endgültige Rücksetzertief bleibt.",
      "Ob Minute 5 bis 100 gehandelt hat.",
      "Ob die früheren abgeschlossenen Kerzen existieren."
    ],
    "rule": "Beobachteten Rücklauf und endgültig bestätigten Wendepunkt unterscheiden.",
    "diagram": "par7-leg"
  },
  {
    "title": "Die gleiche Strecke ab dem Rücksetzertief abtragen",
    "summary": "C 100 plus 6,4 ergibt den Bereich 106,4.",
    "paragraphs": [
      "Die erste Strecke von 96 bis 102,4 ist 6,4 Punkte lang. Nora trägt sie nun vom Rücksetzertief C 100 nach oben ab. Der Zielpreis lautet 100 plus 6,4 gleich 106,4.",
      "Diese Variante heißt erster Schub gleich zweiter Schub. Die zweite Strecke beginnt bei C, nicht am alten Hoch B. Deshalb ist das Ziel nicht einfach B plus die erste Höhe.",
      "Nach Minute 5 sind die verwendeten Preise sichtbar, das Ziel aber noch nicht erreicht. Die Projektion ist eine bedingte Idee für die Fortsetzung. Eine stärkere Gegenbewegung könnte die angenommene Struktur verwerfen."
    ],
    "prompt": "Welcher Zielpreis gehört zu dieser Rechnung?",
    "answers": [
      "106,4.",
      "108,8, weil immer am alten Hoch angesetzt wird.",
      "100,0, das Rücksetzertief selbst."
    ],
    "rule": "Bei gleicher Strecke den zweiten Ausgangspunkt korrekt verwenden.",
    "diagram": "par7-equal"
  },
  {
    "title": "AB gleich CD verständlich übersetzen",
    "summary": "Die Buchstaben beschreiben die beiden Schübe und den Rücklauf.",
    "paragraphs": [
      "Eine häufige Beschriftung nennt den ersten Start A, sein Ende B und das Rücksetzertief C. Der projizierte Endpunkt ist D. AB ist der erste Aufwärtsschub, BC der Rücklauf und CD der zweite Aufwärtsschub.",
      "AB gleich CD bedeutet hier: Beide Aufwärtsstrecken sollen nach der Messidee etwa gleich groß sein. Die Rechnung lautet C plus B minus A. Mit unseren Zahlen ergibt sie 100 plus 102,4 minus 96 gleich 106,4.",
      "Andere Beschriftungssysteme verwenden ABC für drei Bewegungsteile und ordnen die Buchstaben anders zu. Nora hält deshalb bei jeder Skizze fest, was die Buchstaben konkret bezeichnen. Namen sind Hilfen, keine zusätzliche Bestätigung."
    ],
    "prompt": "Welche Strecke ist in unserer Beschriftung der Rücklauf?",
    "answers": [
      "BC.",
      "AB.",
      "CD muss der Rücklauf sein."
    ],
    "rule": "Buchstaben mit den tatsächlichen Punkten verbinden.",
    "diagram": "par7-equal"
  },
  {
    "title": "Die Mitte des Rücklaufbereichs liefert dieselbe Rechnung",
    "summary": "M 101,2 und A 96 ergeben ebenfalls 106,4.",
    "paragraphs": [
      "Die gewählten Rücklaufränder B 102,4 und C 100 haben einen Mittelpunkt M 101,2. Vom Start A 96 bis zu M sind es 5,2 Punkte. Noch einmal 5,2 oberhalb von M ergibt 106,4.",
      "Die Formel 2 mal M minus A ist hier identisch mit C plus B minus A, weil M der Durchschnitt von B und C ist. Es sind zwei Darstellungen derselben gewählten Preise.",
      "Die arithmetische Mitte dieser Ränder ist nicht automatisch der Preis mit den meisten Abschlüssen oder dem höchsten Volumen. Dafür bräuchte Nora eine entsprechende Auswertung. Auch die zweite Darstellungsform ist kein unabhängiger zusätzlicher Beweis."
    ],
    "prompt": "Warum ergeben beide Darstellungen dasselbe Ziel?",
    "answers": [
      "M ist der Durchschnitt der gleichen Ränder B und C.",
      "Jede beliebige eingezeichnete Mitte führt immer zum gleichen Ziel.",
      "Zwei Formeln beweisen automatisch eine höhere Trefferquote."
    ],
    "rule": "Gleiche Daten in zwei Formeln nicht als doppelte Bestätigung zählen.",
    "diagram": "par7-midpoint"
  },
  {
    "title": "Ein wachsender Rücklauf verändert die Mitte",
    "summary": "Neue Ränder benötigen einen neuen Informationsstand.",
    "paragraphs": [
      "Nehmen wir an, der beobachtete Rücklauf erweitert sich statt bis 100 bis auf 99,6. B bleibt bei 102,4. Der neue Mittelpunkt zwischen beiden Preisen ist 101,0.",
      "Mit A 96 ergibt die Mittelprojektion nun 106,0. Ebenso liefert die gleiche erste Strecke 6,4 ab C 99,6 das Ziel 106,0. Die frühere Rechnung auf 106,4 verwendete einen anderen Rand.",
      "Nora dokumentiert beide Zeitpunkte. Sie bewertet die frühe Idee mit dem damals bekannten Tief und die spätere Idee mit dem neuen Tief. Eine Linie ständig nachträglich anzupassen wäre keine ehrliche Prüfung der ursprünglichen Prognose."
    ],
    "prompt": "Welches neue Ziel entsteht mit C 99,6 und erster Strecke 6,4?",
    "answers": [
      "106,0.",
      "106,4 ohne Änderung.",
      "101,0, nur die neue Mitte."
    ],
    "rule": "Geänderte Rücklaufränder und frühere Prognosen sichtbar getrennt halten.",
    "diagram": "par7-deeper"
  },
  {
    "title": "Eine Pause hilft beim Abgrenzen des schnellen Schubs",
    "summary": "Das Schubende wird erst durch folgende Information als Kandidat erkennbar.",
    "paragraphs": [
      "Die ersten drei Minuten schließen bei 98, 100 und 102. Sie haben große steigende Körper. Minute 4 eröffnet bei 102 und schließt bei 102,1; ihr Hoch liegt bei 102,3 und ihr Tief bei 101,6.",
      "Der kleine Körper der vierten Minute zeigt weniger Vorwärtsbewegung. Für unsere Schubregel markieren wir deshalb den letzten kräftigen Schluss in Minute 3 als Ende. Diese Einordnung wird erst nach Beobachtung der Pause möglich.",
      "Eine Pause kann später vom Anstieg überwunden werden. Sie beweist weder eine endgültige Wende noch das Ende jeder größeren Bewegung. Nora nennt die verwendete Zeitskala und die Regel zur Schubabgrenzung."
    ],
    "prompt": "Wann kann Nora das Schubende mit dieser Pausenregel markieren?",
    "answers": [
      "Erst nachdem die folgende Pause beobachtet wurde.",
      "Schon vor der dritten Schubkerze.",
      "Eine Pause garantiert das Ende des ganzen Tagestrends."
    ],
    "rule": "Schubabgrenzung auf die tatsächlich folgende Pause stützen.",
    "diagram": "par7-pause"
  },
  {
    "title": "Den Schub von Eröffnung zu Schluss messen",
    "summary": "O 1=96 bis C 3=102 umfasst 6 Punkte.",
    "paragraphs": [
      "Eine zweite Methode verwendet die erste Schuberöffnung und den letzten kräftigen Schluss. Im Modell sind das 96 und 102. Die gemessene Körperstrecke des ganzen Schubs beträgt 6 Punkte.",
      "Für die direkte Verlängerung trägt Nora diese 6 Punkte vom Schubschluss 102 nach oben ab. Daraus entsteht der Bereich 108. Ein späterer Rücklauf verändert den Ausgangspunkt dieser speziellen Regel nicht automatisch.",
      "Das ist eine andere Projektion als gleiche Schübe ab dem Rücksetzertief. Beide können parallel betrachtet werden, müssen aber mit eigenen Ankern beschriftet bleiben. Nora nennt nicht beide einfach das einzig richtige Ziel."
    ],
    "prompt": "Welches Ziel liefert die direkte Verlängerung ab C 3=102?",
    "answers": [
      "108,0.",
      "106,4, obwohl am Schluss statt am Rücklauf angesetzt wird.",
      "102,0, ohne zweite Strecke."
    ],
    "rule": "Eröffnung-Schluss-Schub und Rücklaufprojektion als verschiedene Regeln benennen.",
    "diagram": "par7-spike"
  },
  {
    "title": "Alternative Schubränder ergeben andere Zielbereiche",
    "summary": "Hoch statt Schluss verändert Strecke und Ansatz.",
    "paragraphs": [
      "Verwendet Nora das erste Tief 96 und das letzte Schubhoch 102,4, ist die Spanne 6,4 Punkte lang. Direkt vom Hoch 102,4 aus abgetragen ergibt sie 108,8.",
      "Die Eröffnung-Schluss-Variante ergab dagegen 108. Die gleiche Strecke ab dem Rücksetzertief ergab 106,4. Der Unterschied liegt in der Auswahl der Ränder und dem Ausgangspunkt der zweiten Strecke.",
      "Nora legt ihre bevorzugte Regel vor der späteren Reaktion fest. Weitere mögliche Werte bleiben alternative Bezüge. Sie kann sie prüfen, ohne nachträglich nur den passendsten Treffer als einzige ursprüngliche Prognose auszugeben."
    ],
    "prompt": "Was unterscheidet 108,8 von der Projektion 108?",
    "answers": [
      "Hoch als Schubende und Ausgangspunkt statt Schluss.",
      "Ein garantierter weiterer Gewinn von 0,8.",
      "Ein Rechenfehler in jeder Alternative."
    ],
    "rule": "Alternative Ankerpaare mit eigener Regel und Priorität dokumentieren.",
    "diagram": "par7-spike"
  },
  {
    "title": "Der schnelle Schub kann in einen langsameren Kanal übergehen",
    "summary": "Gleiche Richtung bedeutet nicht unveränderte Stärke.",
    "paragraphs": [
      "Nach dem ersten Schub und dem Rücklauf kann der Markt langsamer weiter steigen. Im Fortsetzungsfall werden neue Hochbereiche erreicht, aber die Gegenbewegungen und überlappenden Bereiche sind größer als im ersten schnellen Abschnitt.",
      "Nora nennt diesen späteren Verlauf einen Kanal: eine gerichtete Bewegung, die sich zwischen ungefähr parallelen Begrenzungen beschreiben lässt. Die Grenzen sind ihre vorab gewählten Hilfslinien, keine erzwungenen Preiswege.",
      "Der langsamere Verlauf kann einen projizierten Bereich erreichen oder vorher enden. Die Stärke des frühen Schubs darf nicht ungeprüft auf einen viel späteren Einstieg übertragen werden. Neue Lage, Stopabstand und Reststrecke zählen ebenfalls."
    ],
    "prompt": "Warum ist ein späterer Kanaleinstieg neu zu prüfen?",
    "answers": [
      "Der Verlauf und die verbleibende Zielstrecke haben sich verändert.",
      "Die erste Schubstärke bleibt für immer unverändert.",
      "Jede Kanalgrenze garantiert den nächsten Preis."
    ],
    "rule": "Schub und späteren Kanal im aktuellen Informationsstand unterscheiden.",
    "diagram": "par7-channel"
  },
  {
    "title": "Spätere Einstiege haben weniger Strecke zum gleichen Ziel",
    "summary": "Ein unverändertes Ziel bedeutet nicht unverändertes Verhältnis von Chance und Risiko.",
    "paragraphs": [
      "Angenommen, Nora prüft einen Einstieg bei 103,8 und einen anderen bei 105. Das Ziel bleibt 106,4; der gedachte Stop liegt bei 102,8. Der frühe Plan hat 1 Punkt Stopabstand und 2,6 Punkte Zielentfernung.",
      "Der spätere Plan hat 2,2 Punkte Stopabstand und nur 1,4 Punkte Zielentfernung. Bei gleicher Menge verändert sich die Rechnung deutlich. Ein früher starker Schub hebt diesen Unterschied nicht auf.",
      "Beide Preise sind reine bestätigte Ausführungsszenarien für die Rechnung. Nora benötigt zusätzlich gemessene Erfolgsquoten und Ausführungsdaten, bevor sie einen Erwartungswert behaupten kann. Die hübsche Zielgerade genügt nicht."
    ],
    "prompt": "Welche Zielentfernung bleibt beim Einstieg 105 bis 106,4?",
    "answers": [
      "1,4 Punkte.",
      "2,6 Punkte wie beim früheren Preis.",
      "6,4 Punkte unabhängig vom Einstieg."
    ],
    "rule": "Reststrecke und Stopabstand beim konkreten Einstiegszeitpunkt rechnen.",
    "diagram": "par7-risk"
  },
  {
    "title": "Einen Zielbereich knapp verfehlen ist kein exakter Kontakt",
    "summary": "Hoch 106,2 bleibt 0,2 Punkt unter 106,4.",
    "paragraphs": [
      "Im ersten weiteren Ausschnitt erreicht Minute 7 ein Hoch von 106,2. Die Projektion liegt bei 106,4. Nora kann sagen, dass der Kurs in die Nähe des Bereichs kam. Exakt gehandelt wurde der Zielpreis in diesem Ausschnitt noch nicht.",
      "Wenn ihre Zielzone vorher zum Beispiel 106,1 bis 106,6 lautete, liegt 106,2 in dieser Zone. Eine vorher geplante Verkaufsorder genau bei 106,4 wäre damit aber noch nicht durch einen Preisberührungstest bestätigt.",
      "Zone, genauer Preis und eigene Ausführung sind unterschiedliche Dinge. Nora verbreitert die Zone nicht erst nach einem knappen Fehlschlag, um daraus einen Erfolg zu machen."
    ],
    "prompt": "Was zeigt H 7=106,2 relativ zum Ziel 106,4?",
    "answers": [
      "Ein Unterschreiten des Ziels um 0,2 Punkt.",
      "Einen exakten Zielkontakt.",
      "Die vollständige Ausführung jeder Zielorder."
    ],
    "rule": "Nähe, vorab benannte Zone und exakten Kontakt getrennt zählen.",
    "diagram": "par7-near"
  },
  {
    "title": "Ein Zielkontakt beendet die Bewegung nicht automatisch",
    "summary": "Minute 8 handelt über 106,4; danach kann der Kurs weiterlaufen.",
    "paragraphs": [
      "Der nächste Ausschnitt zeigt Minute 8 mit Hoch 106,6. Damit wird der Zielpreis 106,4 erreicht und überschritten. Die Preisbedingung ist erfüllt, aber der Markt erhält dadurch keine Pflicht zum Umkehren.",
      "Im weiteren Beispiel erreicht Minute 9 sogar 108,8. Wer am ersten Ziel einen geplanten Teilverkauf hatte, hätte damit einen anderen Plan als jemand, der eine Restposition auf weitere Bezüge hält. Beide benötigen tatsächliche Ausführungsdaten.",
      "Nora beurteilt ihre Entscheidung anhand des vorab gewählten Plans. Die spätere Mehrstrecke macht eine korrekt geplante frühere Gewinnmitnahme nicht automatisch zu einem Fehler. Sie kann unterschiedliche Ausstiegsregeln über viele Fälle vergleichen."
    ],
    "prompt": "Was beweist der Kontakt mit 106,4 nicht?",
    "answers": [
      "Dass der Kurs dort zwingend umkehren wird.",
      "Dass der Preisbereich im Chart erreicht wurde.",
      "Dass 106,6 oberhalb 106,4 liegt."
    ],
    "rule": "Zielkontakt und anschließenden Verlauf gesondert beurteilen.",
    "diagram": "par7-contact"
  },
  {
    "title": "Gewinnmitnahme und Gegentrade brauchen verschiedene Begründungen",
    "summary": "Eine Longposition schließen eröffnet noch keine Shortidee.",
    "paragraphs": [
      "Ein erreichter Projektionsbereich kann Teil einer vorab geplanten Gewinnmitnahme sein. Nora verringert dabei eine bestehende Position oder schließt sie. Sie muss dafür keine neue Abwärtsstrategie begründen.",
      "Ein Short an derselben Stelle ist dagegen ein neuer Trade in die Gegenrichtung. Er braucht einen eigenen Auslöser, Schutzstop, eine Mengenrechnung und Hinweise, dass tatsächlich eine Gegenbewegung entsteht.",
      "Bei starkem Anschluss über das Ziel hinweg könnte ein automatischer Short verlieren. Nora trennt deshalb die Entscheidung, Gewinn zu sichern, von der Behauptung, an dieser Stelle müsse ein neuer Abwärtsschub beginnen."
    ],
    "prompt": "Was benötigt ein Short am erreichten Longziel zusätzlich?",
    "answers": [
      "Eine eigene bestätigte Idee mit Auslöser und Risikoplan.",
      "Nur die Tatsache, dass eine Longposition geschlossen wird.",
      "Die Zielgerade macht jeden Stop unnötig."
    ],
    "rule": "Gewinnmitnahme und neue Gegenposition getrennt planen.",
    "diagram": "par7-contact"
  },
  {
    "title": "Ein erreichter Bereich kann in Seitwärtshandel übergehen",
    "summary": "Eine Pause nach dem Ziel ist eine neue Struktur.",
    "paragraphs": [
      "Nach einem kräftigen Schub und einer weiteren Strecke können Käufer Gewinne mitnehmen und Verkäufer Gegenideen prüfen. Der Kurs könnte dann zunächst seitwärts handeln, statt sofort einen neuen großen Trend zu bilden.",
      "Nora beobachtet, ob neue Hochs schnell weitergeführt werden oder ob mehrere Kerzen in ähnlichen Bereichen überlappen. Erst die tatsächliche Folge beschreibt die neue Range. Ein Zielpreis allein erzeugt keine vollständig bekannte Rangegrenze.",
      "Die Mitte einer neu entstehenden Range kann ein anderer Kontext sein als der frühere Schub. Alte Einstiegsregeln müssen dort erneut geprüft werden. Für eine spätere Prognose verwendet Nora nur inzwischen entstandene Daten."
    ],
    "prompt": "Wann ist eine neue Seitwärtsstruktur erkennbar?",
    "answers": [
      "Wenn tatsächlich wiederholtes überlappendes Hin und Her entsteht.",
      "Allein durch das Einzeichnen eines Zielpreises.",
      "Jeder Zielkontakt erzeugt garantiert dieselbe Rangehöhe."
    ],
    "rule": "Projektionskontakt und erst später entstandene Range unterscheiden.",
    "diagram": "par7-channel"
  },
  {
    "title": "Die Fortsetzung kann ganz ausbleiben",
    "summary": "Der Vergleichsfall teilt die frühen fünf Minuten.",
    "paragraphs": [
      "Der scheiternde Fall hat bis Minute 5 denselben Schub und denselben Rücklauf auf 100. Danach fällt Minute 6 deutlich bis 98 und schließt 98,3. Minute 7 handelt sogar bis 95,4, unter dem Schubbeginn 96.",
      "Die frühe Projektion 106,4 wird in diesem Verlauf nicht erreicht. Die Rückkehr unter den ersten Start ist ein starkes Gegenargument gegen die gezeigte Fortsetzungsidee. Ein hypothetischer Stop kann schon deutlich vorher ausgelöst worden sein.",
      "Nora nimmt den Vergleichsfall in ihre Auswertung auf. Würde sie nur passende Zieltreffer speichern, sähe die Methode zuverlässig aus, ohne dass Verluste, ausgelassene Fälle und Ausführungsbedingungen sichtbar würden."
    ],
    "prompt": "Was zeigt der Rückfall unter 96 in diesem Vergleich?",
    "answers": [
      "Ein starkes Gegenargument zur ursprünglichen Aufwärtsfortsetzung.",
      "Das Ziel 106,4 gilt trotzdem als sicher erreicht.",
      "Die frühen fünf Minuten waren rückwirkend anders."
    ],
    "rule": "Identische frühe Daten mit verschiedenen möglichen Ausgängen prüfen.",
    "diagram": "par7-failure"
  },
  {
    "title": "Ein gescheiterter Aufwärtsschub kann einen Abwärtsbezug liefern",
    "summary": "Neue Richtung braucht eigene Bestätigung und einen eigenen Ansatz.",
    "paragraphs": [
      "Der ursprüngliche Eröffnung-Schluss-Schub war von 96 bis 102 insgesamt 6 Punkte hoch. Scheitert die Fortsetzung und fällt der Kurs deutlich unter 96, kann Nora diese Höhe als möglichen Abwärtsbezug verwenden.",
      "Trägt sie 6 Punkte unter dem ausdrücklich benannten unteren Bezug 96 ab, ergibt sich 90. Das ist eine neue Projektion in der Gegenrichtung. Sie ist nicht dieselbe Regel wie die frühere Verlängerung ab 102 auf 108.",
      "Im gezeigten erweiterten Vergleich erreicht der Kurs später 90. Diese spätere Entwicklung war beim frühen Aufwärtsschub unbekannt. Für einen tatsächlichen Short benötigt Nora ein eigenes Signal und eine eigene Ausführungsrechnung."
    ],
    "prompt": "Welches neue Ziel ergibt sich aus 96 minus 6?",
    "answers": [
      "90,0.",
      "108,0 wie bei der Aufwärtsverlängerung.",
      "102,0, der alte Schubschluss."
    ],
    "rule": "Gescheiterten Schub und neue Gegenprojektion mit eigener Bestätigung behandeln.",
    "diagram": "par7-opposite"
  },
  {
    "title": "Nachrichtenschübe mit denselben Preisregeln prüfen",
    "summary": "Der vermutete Auslöser ersetzt keine Messung.",
    "paragraphs": [
      "Eine überraschende Veröffentlichung kann einen schnellen Schub auslösen. Für die Preisrechnung bleibt wichtig, wo dieser Schub begann, welche Kerzen dazugehören und welche Pause die gewählte Abgrenzung unterstützt.",
      "Im gespiegelten Abwärtsfall liegen erste Eröffnung bei 104 und letzter Schubschluss bei 98. Die Strecke beträgt 6 Punkte abwärts. Direkt vom Schluss 98 projiziert ergibt sich 92. Eine Hoch-Tief-Variante hätte andere Anker.",
      "Nora benötigt für diese Rechnung keine erfundene Nachrichtengeschichte. Wenn eine reale Veröffentlichung untersucht wird, muss ihr Zeitpunkt zur Preisfolge passen. Der Nachrichtenname beweist nicht, dass die projizierte Strecke tatsächlich folgt."
    ],
    "prompt": "Welches Ziel entsteht aus Schluss 98 minus 6 Punkten?",
    "answers": [
      "92,0.",
      "104,0, der Start.",
      "98,0 ohne zweite Strecke."
    ],
    "rule": "Nachrichtenanlass, Schubabgrenzung und Preisprojektion getrennt belegen.",
    "diagram": "par7-bear-spike"
  },
  {
    "title": "Den Abwärtsfall für gleiche Schübe spiegeln",
    "summary": "A 104, B 97,6 und C 100 ergeben 93,6.",
    "paragraphs": [
      "Die gespiegelte erste Strecke läuft von 104 bis 97,6. Sie ist 6,4 Punkte lang. Ein zwischenzeitlicher Rücklauf steigt auf 100 und wird für die Gleichstreckenregel zum neuen Ausgangspunkt C.",
      "Der mögliche zweite Abwärtsschub endet rechnerisch bei 100 minus 6,4 gleich 93,6. Dies unterscheidet sich von der direkten Schubschlussprojektion 92. Die Richtung ist gleich, die Ankerregel verschieden.",
      "Nora tauscht bei der Spiegelung Hoch und Tief korrekt. Der Stop für einen Short liegt nach ihrem gewählten Plan oberhalb eines Bezugspunkts, nicht einfach dort, wo der Longstop im ursprünglichen Bild stand."
    ],
    "prompt": "Welches Ziel gehört zu gleichen Abwärtsschüben ab C 100?",
    "answers": [
      "93,6.",
      "106,4, das alte Aufwärtsziel.",
      "92,0, obwohl eine andere Regel verwendet wird."
    ],
    "rule": "Abwärtsstrecke, Ausgangspunkt und Schutzseite vollständig spiegeln.",
    "diagram": "par7-bear-leg"
  },
  {
    "title": "Der erste Schub muss nicht am äußersten Tief enden",
    "summary": "Ein späteres neues Tief kann Teil der Korrektur sein.",
    "paragraphs": [
      "Im Variantenfall fällt der Kurs zuerst von einem benannten Start 110 bis 104. Danach steigt er bis 106, fällt in der Korrektur aber nochmals auf 103 und steigt später bis 107.",
      "Nora kann den ersten klaren Abwärtsschub bei 104 begrenzen und die folgenden drei Teile als Korrektur untersuchen. Eine andere Regel würde das tiefere 103 in die erste Gesamtstrecke aufnehmen. Beide Beschreibungen benötigen konkrete Punkte und eine Begründung.",
      "Dass 103 das niedrigste zwischenzeitliche Tief ist, macht 104 nicht automatisch zu einem unmöglichen Ende des ersten Schubs. Wichtig ist der zeitliche Aufbau. Eine Korrektur kann das alte Extrem kurz überschreiten, wie wir im vorherigen Kapitel gesehen haben."
    ],
    "prompt": "Warum kann 104 trotz späterem 103 ein Schubendkandidat bleiben?",
    "answers": [
      "Weil der dazwischen begonnene Korrekturaufbau gesondert betrachtet wird.",
      "Nur das absolute spätere Tief darf je verwendet werden.",
      "Die Zahl 104 liefert immer ein sichereres Ergebnis."
    ],
    "rule": "Äußerstes Extrem und regelbasiertes Ende des ersten Abschnitts unterscheiden.",
    "diagram": "par7-variant"
  },
  {
    "title": "Zwei vertretbare Endpunkte liefern zwei Abwärtsziele",
    "summary": "Start 110, Korrekturhoch 107 und Endpunkte 104 oder 103.",
    "paragraphs": [
      "Mit erstem Endpunkt 104 ist der erste Schub 6 Punkte lang. Vom späteren Korrekturhoch 107 aus abgetragen ergibt sich 101. Mit Endpunkt 103 wäre die erste Strecke 7 Punkte lang und das Ziel 100.",
      "Der gezeigte nächste Rückgang erreicht zunächst 101. Nora beobachtet dort die Reaktion, weil es der näher liegende vorab benannte Bereich ist. Das weiter entfernte 100 ist in diesem Ausschnitt noch nicht erreicht.",
      "Sie darf nach dem Kontakt nicht behaupten, nur die passende 101-Linie sei schon immer eindeutig gewesen. Die alternative 100-Projektion und ihre ursprüngliche Priorität bleiben im Protokoll erhalten."
    ],
    "prompt": "Welche Projektion gehört zum ersten Schub 110 bis 104?",
    "answers": [
      "101,0 ab Korrekturhoch 107.",
      "100,0 unabhängig vom ersten Endpunkt.",
      "104,0, der erste Endpunkt allein."
    ],
    "rule": "Mehrdeutige Endpunkte und Zielpriorität vor der Reaktion offenlegen.",
    "diagram": "par7-variant"
  },
  {
    "title": "Ein Korrekturausbruch kann selbst scheitern",
    "summary": "Neue Hochs in einer Pause beweisen nicht deren dauerhafte Fortsetzung.",
    "paragraphs": [
      "Im Variantenfall steigt die Korrektur zuerst bis 106, testet danach tiefer und kommt wieder in den Bereich 106. Der nächste Schub erreicht 107 und handelt damit oberhalb der zuvor benannten Korrekturhochbereiche.",
      "Danach fällt der Kurs wieder. Der neue Hochversuch liefert also keine dauerhafte Aufwärtsfortsetzung. Er kann als zusätzlicher Schub innerhalb der Korrektur vor der erneuten Abwärtsbewegung gelesen werden.",
      "Vor dem Rückfall ist dieser Ausgang noch offen. Nora braucht die neue Gegenreaktion, statt den Ausbruch schon bei 107 sicher gescheitert zu nennen. Eine passende Schubzählung allein ersetzt keine bestätigte Richtung."
    ],
    "prompt": "Welche Information stützt das Scheitern des Korrekturausbruchs?",
    "answers": [
      "Der spätere deutliche Rückfall nach dem Hoch 107.",
      "Das Hoch 107 für sich allein.",
      "Die Zahl drei garantiert ein Ende der Bewegung."
    ],
    "rule": "Korrekturausbruch und erst später erkennbares Scheitern getrennt beschreiben.",
    "diagram": "par7-variant"
  },
  {
    "title": "Kleine und große Schübe können ineinander liegen",
    "summary": "Ein späterer Gesamtabschnitt kann zwei frühere Teilstrecken enthalten.",
    "paragraphs": [
      "Im erweiterten Aufwärtsfall beginnt die ganze Bewegung bei 96 und erreicht später 106,6. Dazwischen liegen der erste Schub, der Rücklauf und der zweite Schub. Die größere Strecke von 96 bis 106,6 beträgt 10,6 Punkte.",
      "Ein weiterer Rücklauf endet im Modell bei 103,5. Wird die größere Strecke von dort noch einmal nach oben abgetragen, ergibt sich 114,1. Das ist eine neue gröbere Messidee, nicht die ursprüngliche kleine Projektion 106,4.",
      "Nora muss warten, bis die größere Strecke und der neue Rücklauf tatsächlich vorliegen. Sonst verwendet sie künftige Punkte. Verschiedene Größenordnungen helfen beim Vergleichen, dürfen aber nicht beliebig ineinander umbenannt werden."
    ],
    "prompt": "Welches neue Ziel entsteht aus 103,5 plus 10,6?",
    "answers": [
      "114,1.",
      "106,4, immer das ursprüngliche Ziel.",
      "103,5 ohne neue Strecke."
    ],
    "rule": "Verschachtelte Bewegungen mit eigener Größe und eigenem Zeitpunkt markieren.",
    "diagram": "par7-nested"
  },
  {
    "title": "Eine Pause auf dem kleinen Chart kann im großen Schub stecken",
    "summary": "Zeitrahmen beeinflussen die Abgrenzung der Strecke.",
    "paragraphs": [
      "Die ersten drei Minuten bilden einen schnellen Schub. Auf einem größeren Zeitrahmen können diese Minuten samt einer kurzen Pause in wenigen Kerzen zusammengefasst erscheinen. Die Pause kann dort weniger deutlich sichtbar sein.",
      "Das bedeutet nicht, dass die kleinen Gegenpreise verschwunden sind. Für eine Messregel muss Nora entscheiden, ob sie den unmittelbaren Minutenschub oder den größeren Abschnitt misst. Beide können verschiedene Start- und Endpunkte besitzen.",
      "Nora legt diese Auswahl vorab fest. Wenn sie erst nach einem Zielkontakt zu dem Zeitrahmen wechselt, der am besten passt, kann sie die ursprüngliche Idee nicht mehr sauber prüfen."
    ],
    "prompt": "Was muss bei verschiedenen Zeitrahmen gleich bleiben?",
    "answers": [
      "Eine offen benannte Regel für die tatsächlich verwendeten Anker.",
      "Jede Projektion muss auf allen Charts exakt gleich sein.",
      "Kleine Rückläufe sind im größeren Chart nie gehandelt worden."
    ],
    "rule": "Zeitrahmenwechsel und neue Schubdefinition dokumentieren.",
    "diagram": "par7-pause"
  },
  {
    "title": "Den Stopbezug vor der Positionsmenge bestimmen",
    "summary": "Ein weiter Anfangsstop gehört zu einer anderen Hypothese als ein enger Rücklaufstop.",
    "paragraphs": [
      "Eine breite Fortsetzungsidee könnte verlangen, dass der Anfang 96 nicht erneut unterschritten wird. Bei einer Preisstufe 0,1 wäre ein Modellstop eine Stufe darunter, bei 95,9. Ein engerer Stop unter dem Rücksetzertief 100 wäre dagegen 99,9.",
      "Die breite Variante toleriert mehr Rücklauf, hat aber beim gleichen Einstieg einen größeren Preisabstand. Nora wählt den Bezug nach der Handelsidee und prüft dann die passende Menge. Sie verschiebt den Stop nicht erst aus Angst während eines Verlusts.",
      "Kein Stop garantiert seinen genauen Ausführungspreis. Die geplante Linie beschreibt zunächst die Ausstiegsregel. Das Risikobudget muss auch Kosten und mögliche Abweichungen berücksichtigen."
    ],
    "prompt": "Welche Preislinie liegt eine Stufe unter dem Start 96?",
    "answers": [
      "95,9.",
      "96,1 oberhalb des Starts.",
      "99,9 ist derselbe breite Anfangsstop."
    ],
    "rule": "Ausstiegshypothese und Stopabstand vor der Menge festlegen.",
    "diagram": "par7-stop"
  },
  {
    "title": "Bei größerem Abstand die Menge entsprechend prüfen",
    "summary": "Ein weit entfernter Stop muss ins Geldbudget passen.",
    "paragraphs": [
      "Für eine einfache Rechnung nehmen wir einen bestätigten Einstieg 102 und den breiten Stop 95,9 an. Der Abstand beträgt 6,1 Punkte. Ein Punkt je Einheit entspricht im Modell einem Euro.",
      "Das Gesamtbudget beträgt 30 Euro, pauschale Gesamtkosten 2 Euro. Für den Preisabstand bleiben 28 Euro. Vier ganze Einheiten benötigen 24,4 Euro Preisrisiko plus 2 Euro Kosten, also 26,4 Euro. Fünf würden 32,5 Euro benötigen und das Budget überschreiten.",
      "Falls selbst eine Einheit zu groß wäre, kann Nora den Trade auslassen. Ein großes Ziel macht einen ungeeigneten Geldverlust nicht automatisch akzeptabel. Die Rechnung setzt den angenommenen Stoppreis voraus, keine garantierte reale Verlustobergrenze."
    ],
    "prompt": "Wie viele ganze Einheiten passen in das Modellbudget?",
    "answers": [
      "Vier.",
      "Fünf, weil das Ziel weit entfernt ist.",
      "Immer die übliche Menge ohne neue Rechnung."
    ],
    "rule": "Bei verändertem Stopabstand das Budget mit ganzen Einheiten neu prüfen.",
    "diagram": "par7-stop"
  },
  {
    "title": "Offener Gewinn und aktuelles Risiko sind verschiedene Größen",
    "summary": "Der Blick ab heute unterscheidet sich vom Blick ab dem Einstieg.",
    "paragraphs": [
      "Nora hat im Rechenmodell eine Einheit zu 98 gekauft. Der Kurs steht jetzt bei 102, der unveränderte Stop bei 95,9. Ihr offener Preisgewinn beträgt 4 Euro. Der mögliche Preisverlust ab Einstieg bis zum Stop beträgt 2,1 Euro.",
      "Vom aktuellen Marktwert 102 bis zum Stop 95,9 könnten dagegen 6,1 Euro zurückgegeben werden. Darin stecken 4 Euro offener Gewinn und 2,1 Euro Verlust unter dem Einstieg. Alle Werte gelten vor Kosten und Ausführungsabweichungen.",
      "Wer nur sagt, das Risiko sei noch 2,1, blendet die mögliche Rückgabe des bereits aufgelaufenen Gewinns aus. Wer 6,1 als ursprüngliches Einstiegsrisiko bezeichnet, vermischt die Zeitpunkte. Nora dokumentiert beide Sichtweisen."
    ],
    "prompt": "Wie groß ist die mögliche Rückgabe vom aktuellen 102 bis 95,9?",
    "answers": [
      "6,1 Euro je Modelleinheit vor Kosten.",
      "2,1 Euro einschließlich des offenen Gewinns.",
      "4 Euro, weil der Kurs nie unter den Einstieg fallen kann."
    ],
    "rule": "Einstiegsrisiko, offenes Ergebnis und aktuelle Rückgabe getrennt rechnen.",
    "diagram": "par7-stop"
  },
  {
    "title": "Eine Aufstockung hat ihr eigenes zusätzliches Risiko",
    "summary": "Der neue Teil darf nicht durch den offenen Gewinn des alten schön gerechnet werden.",
    "paragraphs": [
      "Angenommen, Nora hält eine Einheit ab 98 und kauft eine weitere zu 102. Beide würden im Modell am gleichen Stop 95,9 ausgeführt. Die erste Einheit verliert dort 2,1 Euro, die zweite 6,1 Euro.",
      "Der gesamte Preisverlust beträgt 8,2 Euro vor Kosten. Der Durchschnittseinstieg beider Einheiten liegt bei 100. Diese Durchschnittszahl verändert den Gesamtverlust nicht:100 minus 95,9 mal 2 ist wieder 8,2.",
      "Das offene Plus der ersten Einheit am aktuellen 102 ist noch kein realisierter Schutz für den neuen Teil. Eine Aufstockung braucht deshalb eine eigene Regel und eine Prüfung des gemeinsamen Budgets, statt nur ein Gefühl von bereits verdientem Spielgeld."
    ],
    "prompt": "Wie groß ist der gemeinsame Modellpreisverlust am Stop?",
    "answers": [
      "8,2 Euro vor Kosten.",
      "2,1 Euro, weil nur der erste Trade zählt.",
      "Null, weil eine Einheit vorher im Gewinn lag."
    ],
    "rule": "Neue Teilposition und gemeinsames Geldrisiko vollständig rechnen.",
    "diagram": "par7-stop"
  },
  {
    "title": "Eine gedachte Trefferquote ist noch keine gemessene Quote",
    "summary": "Stärkezeichen ersetzen keine Auswertung vieler Fälle.",
    "paragraphs": [
      "Ein kräftiger Schub kann eine Fortsetzungsidee plausibel machen. Daraus lässt sich aber nicht automatisch eine persönliche Trefferquote von 60 oder 70 Prozent ableiten. Der Chartfall zeigt einen Verlauf, keine Stichprobe einer fest definierten Regel.",
      "Für eine gemessene Quote müsste Nora dieselben Einstiegs-, Stop- und Ausstiegsbedingungen auf viele Fälle anwenden. Auch nicht ausgeführte Signale, Kosten und mögliche Unterschiede zwischen Marktphasen müssen nachvollziehbar behandelt werden.",
      "Weder ein erreichter Zielpreis noch eine genaue mathematische Projektion beweist den Vorteil der Strategie. Die folgenden Wahrscheinlichkeitsrechnungen sind deshalb ausdrücklich hypothetische Modelle und keine Leistungsangaben dieses Kurses."
    ],
    "prompt": "Was wäre für eine belegte Trefferquote nötig?",
    "answers": [
      "Viele nachvollziehbare Fälle mit denselben Regeln.",
      "Ein einzelner schöner Schub mit Zielkontakt.",
      "Die feste Annahme, dass große Körper immer gewinnen."
    ],
    "rule": "Preisbegründung und gemessene Wahrscheinlichkeit auseinanderhalten.",
    "diagram": "par7-equal"
  },
  {
    "title": "Erwartungswert mit frei gesetzten Modellannahmen prüfen",
    "summary": "Trefferquote, Gewinnhöhe, Verlusthöhe und Kosten wirken gemeinsam.",
    "paragraphs": [
      "Nora nimmt für eine reine Rechenübung 60 Prozent Gewinnfälle an. Ein Gewinnfall bringt vor Kosten 3 Euro, ein Verlustfall kostet 4 Euro. Der Modellmittelwert ist 0,6 mal 3 minus 0,4 mal 4 gleich 0,2 Euro je Trade.",
      "Pauschale Kosten von 0,3 Euro pro Trade machen daraus minus 0,1 Euro. Das Modell wäre nach diesen Annahmen negativ, obwohl mehr als die Hälfte der Fälle gewinnen. Die angenommene Trefferquote wurde hier nicht gemessen.",
      "Ein Gewinn muss bei hoher Quote mathematisch nicht immer mindestens so groß wie ein Verlust sein. Umgekehrt macht ein großes Ziel eine niedrige Quote nicht automatisch profitabel. Entscheidend ist die vollständige Rechnung mit belegbaren Eingaben."
    ],
    "prompt": "Welcher Nettomittelwert entsteht in diesem Modell?",
    "answers": [
      "Minus 0,1 Euro pro Trade.",
      "Plus 0,2 Euro auch nach Kosten.",
      "Jede 60-Prozent-Regel ist automatisch profitabel."
    ],
    "rule": "Modellannahmen, Kosten und daraus folgenden Erwartungswert getrennt prüfen.",
    "diagram": "par7-risk"
  },
  {
    "title": "Ein ähnlicher Tagesausschlag ist eine andere Symmetrie",
    "summary": "Eröffnung in der Mitte liefert einen Bezug, keine Pflicht zum Tagesende.",
    "paragraphs": [
      "Im Symmetriefall eröffnet der Tag bei 100. Ein früher Anstieg erreicht 103, später fällt der Kurs bis 97. Beide Extreme liegen 3 Punkte von der Eröffnung entfernt. Die bisherige Hoch-Tief-Spanne beträgt 6 Punkte.",
      "Ein Schluss nahe der Eröffnung würde einen kleinen Tageskörper zeigen. Im Modell ist der spätere Schluss 100,1. Das beschreibt diesen Verlauf, beweist aber keine feste Regel, dass jeder symmetrische Tag dort schließen muss.",
      "Die Durchschnittsspanne vergleichbarer Tage kann zusätzlichen Kontext liefern. Sie garantiert ebenfalls keinen exakten Tagesendpreis. Nora trennt diese Eröffnungsbetrachtung von den vorherigen Schubprojektionen mit Rücksetzertief."
    ],
    "prompt": "Wie groß ist die bisherige Spanne von 97 bis 103?",
    "answers": [
      "6 Punkte.",
      "3 Punkte, nur eine Seite der Eröffnung.",
      "0,1 Punkt, nur der Schlussunterschied."
    ],
    "rule": "Eröffnungssymmetrie, Gesamtspanne und tatsächlichen Schluss unterscheiden.",
    "diagram": "par7-symmetry"
  },
  {
    "title": "Den Fall mit einem überprüfbaren Plan abschließen",
    "summary": "Anker, Zeitpunkt, Zielregel, Risiko und Ergebnis bleiben getrennt.",
    "paragraphs": [
      "Nora beginnt mit dem bekannten Schub und ihrer Ankerregel. Für gleiche Strecken hält sie A 96, B 102,4, Kandidat C 100 und Ziel 106,4 fest. Für die direkte Eröffnung-Schluss-Verlängerung notiert sie separat 96,102 und 108.",
      "Sie ergänzt den Zeitpunkt, ab dem jeder Punkt bekannt war, und für einen Trade Einstieg, Stop, Menge, Kosten und Verwerfung. Neue Tiefs oder ein größerer Gesamtabschnitt bekommen eine eigene Version der Rechnung.",
      "Zur Prüfung gehören knapp verfehlte Ziele, Kontakte mit weiterer Fortsetzung und vollständig gescheiterte Fälle. Nur bestätigte eigene Ausführungen zählen als tatsächlich realisierte Trades. So wird eine Messidee zu einem nachvollziehbaren Lernfall."
    ],
    "prompt": "Was macht die Auswertung nachvollziehbar?",
    "answers": [
      "Vorab benannte Anker und getrennte Informationsstände einschließlich der Gegenfälle.",
      "Nur die nachträglich passendste Linie behalten.",
      "Jeden Zielkontakt als vollständig ausgeführten Gewinner buchen."
    ],
    "rule": "Ankerregel, Informationszeitpunkt und tatsächlichen Trade-Ausgang getrennt protokollieren.",
    "diagram": "par7-risk"
  }
]).map(lesson=>({...lesson,steps:lesson.steps.map(step=>step.type==='diagram'&&step.scenario==='par7-symmetry'?{...step,caption:'Erfundener Tagesfall · vier ausgewählte Minutenabschnitte · Zwischenzeiten ausgelassen · Preise in Punkten.'}:step)}));
