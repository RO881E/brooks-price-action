import { makeLessons } from './lessons';
export const rangesChapterFourteenLessons = makeLessons('chapter-14', 'Kapitel 14 · Der erste Abstand zum gleitenden Durchschnitt', [
  {
    "title": "Den ersten Abstand auf der Gegenseite erkennen",
    "summary": "Im Aufwärtstrend liegt eine ganze Gegenkerze mit ihrem Hoch unter dem Durchschnitt.",
    "paragraphs": [
      "Nora sieht einen Anstieg und anschließend einen Rückgang durch die Durchschnittslinie. Eine spätere Kerze kann vollständig darunter liegen. Dann bleibt zwischen ihrem Hoch und der Linie ein sichtbarer Abstand.",
      "Dieser Abstand heißt hier Durchschnittslücke. Für die Fortsetzungsidee im vorherigen Aufwärtstrend interessiert uns die erste ganze Kerze auf der Gegenseite. Ein neuer Aufwärtsversuch wäre zunächst nur eine Möglichkeit.",
      "Im Abwärtstrend ist es umgekehrt: Eine ganze Gegenkerze liegt mit ihrem Tief über der Linie. Die Richtung davor und der betrachtete Zeitraum müssen ausdrücklich feststehen."
    ],
    "prompt": "Welche ganze Gegenkerze betrachten wir nach einem Anstieg?",
    "answers": [
      "Eine Kerze, deren Hoch unter dem gleichzeitig berechneten Durchschnitt liegt.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Abstand, Gegenseite und vorherige Richtung gemeinsam nennen.",
    "diagram": "par14-first"
  },
  {
    "title": "Durchschnittslücke ist keine notwendige Kurslücke",
    "summary": "Die Kerzen können sich überlappen, während eine davon Abstand zum EMA hat.",
    "paragraphs": [
      "Eine klassische Kurslücke vergleicht zwei Preisabschnitte, etwa Hoch und Tief aufeinanderfolgender Tageskerzen. Eine Durchschnittslücke vergleicht dagegen eine Kerze mit einer berechneten Linie.",
      "In unserem Minutenfall überlappen die Bereiche der Kontaktkerze 6 und der folgenden Kerze 7. Trotzdem liegt Kerze 7 vollständig unter ihrem EMA20. Beide Aussagen können gleichzeitig stimmen.",
      "Nora fragt deshalb immer: Abstand zwischen welchen zwei Dingen? Das Wort Lücke allein erklärt weder eine Sitzungseröffnung noch einen handelbaren Vorteil."
    ],
    "prompt": "Braucht eine Durchschnittslücke eine leere Preisspanne zwischen zwei Kerzen?",
    "answers": [
      "Nein, sie beschreibt den Abstand einer Kerze zur Durchschnittslinie.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Die beiden verglichenen Objekte ausdrücklich benennen.",
    "diagram": "par14-first"
  },
  {
    "title": "EMA20 mit erklärtem Anfang berechnen",
    "summary": "Vierzig Vorbereitungsschlüsse bei 110 stehen vor dem sichtbaren Fall.",
    "paragraphs": [
      "EMA bedeutet exponentieller gleitender Durchschnitt. Der jüngste Schluss erhält beim EMA20 das Gewicht 2/21. Unser erster Wert wird auf 110 gesetzt; vierzig vorgegebene Vorbereitungsschlüsse liegen ebenfalls bei 110.",
      "Danach verändert jeder neue Schluss den EMA um 2/21 seines Abstands zum bisherigen Wert. Die erste sichtbare Minute schließt bei 111,8. Ihr EMA liegt deshalb bei ungefähr 110,171.",
      "Jeder Wert benutzt nur Schlüsse bis zu genau dieser abgeschlossenen Minute. Ein späteres Signal darf weder frühere Durchschnittswerte noch frühere Kerzenextreme nachträglich verbessern."
    ],
    "prompt": "Welche Schlüsse gehören in den EMA nach Minute 5?",
    "answers": [
      "Die Vorbereitung und die sichtbaren Schlüsse bis Minute 5.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Initialisierung und Zeitpunkt jedes Durchschnittswerts offenlegen.",
    "diagram": "par14-trend"
  },
  {
    "title": "Vor dem Rückgang die größere Richtung prüfen",
    "summary": "Minuten 1–5 steigen bis zum Hoch 120.",
    "paragraphs": [
      "Unser erfundener Hauptfall beginnt mit steigenden Schlüssen von 111,8 bis 119,8. Die fünfte Minute erreicht ein Hoch von 120. Die großen grünen Körper zeigen klaren Aufwärtsfortschritt.",
      "Das ist die Vorgeschichte der späteren Fortsetzungsidee. Im Bild nach Minute 5 sind weder der tiefe Rücksetzer noch eine spätere Erholung bekannt. Nora erklärt die Richtung aus den bereits sichtbaren Kerzen.",
      "Ein späterer Gegenrückgang kann den Zustand verändern. Der frühere Anstieg ist ein Teil der Beurteilung, aber keine Erlaubnis, jede tiefere Kerze blind zu kaufen."
    ],
    "prompt": "Was ist nach Minute 5 bekannt?",
    "answers": [
      "Ein vorheriger Anstieg bis Hoch 120; der spätere Rückgang bleibt offen.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Vorgeschichte am eigenen Abschluss beurteilen.",
    "diagram": "par14-trend"
  },
  {
    "title": "Kontakt und Schluss unter dem EMA zuerst trennen",
    "summary": "Minute 6 schließt bei 111 unter ihrem EMA, überschneidet ihn aber noch.",
    "paragraphs": [
      "Die sechste Minute fällt bis 110 und schließt bei 111. Ihr Hoch beträgt 119,8. Der gleichzeitig berechnete EMA20 liegt ungefähr bei 112,303 und damit innerhalb der Kerzenspanne.",
      "Der Schluss liegt bereits darunter, doch die ganze Kerze liegt noch nicht darunter. Das Hoch reicht weit über den EMA. Eine rote Kerze oder ein tiefer Schluss erfüllt unsere vollständige Abstandsregel also nicht allein.",
      "Der kräftige Gegenkörper ist zugleich ein Warnhinweis. Nora beschreibt ihn zusammen mit dem Kontakt und wartet auf neue Information, statt die alte Stärke unverändert vorauszusetzen."
    ],
    "prompt": "Ist Minute 6 schon eine ganze Kerze unter dem EMA?",
    "answers": [
      "Nein, ihre Spanne schneidet die Linie trotz Schluss darunter.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Schlusswechsel, Kontakt und vollständigen Abstand getrennt prüfen.",
    "diagram": "par14-contact"
  },
  {
    "title": "Die erste ganze Gegenkerze am Abschluss feststellen",
    "summary": "Hoch 7 bei 111,2 liegt unter EMA 7 bei ungefähr 112,132.",
    "paragraphs": [
      "Minute 7 eröffnet bei 111 und schließt bei 110,5. Ihr Tief beträgt 110,2, ihr Hoch 111,2. Jetzt liegt selbst der höchste Preis dieser Kerze unter dem zugehörigen EMA20.",
      "Der Abstand vom Hoch zur Linie beträgt ungefähr 0,932 Punkte. Im bisherigen sichtbaren Verlauf gab es noch keine vollständig darunterliegende Kerze. Damit ist sie für diesen Abschnitt die erste.",
      "Die Klassifikation steht erst nach ihrem Abschluss fest. Eine noch laufende Kerze könnte weiter steigen und die Linie doch noch erreichen. Nora zählt sie nicht vorzeitig als fertig."
    ],
    "prompt": "Warum erfüllt Minute 7 die ganze Abstandsregel?",
    "answers": [
      "Weil ihr Hoch 111,2 unter dem EMA derselben abgeschlossenen Minute liegt.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Die vollständige Hoch-Tief-Spanne gegen den gleichzeitigen EMA prüfen.",
    "diagram": "par14-first"
  },
  {
    "title": "Erste Gegenkerze verlangt keine zwanzig kontaktfreien Vorgänger",
    "summary": "Unser kurzer Trendabschnitt reicht zur getrennten Beobachtung des ersten Gegenabstands.",
    "paragraphs": [
      "Das vorige Kapitel zählte lange Folgen ganzer Kerzen auf einer Seite des Durchschnitts. Dieses Kapitel fragt nach der ersten ganzen Kerze auf der Gegenseite einer benannten Trendbewegung.",
      "In unserem kurzen Fall sind keine zwanzig kontaktfreien Vorgänger gegeben. Trotzdem lässt sich nach Minute 7 eindeutig prüfen, ob erstmals eine ganze Kerze unter ihrem EMA liegt.",
      "Beide Ideen können in anderen Verläufen zusammen auftreten. Nora nennt sie aber nicht gleich: Kontaktfolgen zählen Zeitabschnitte, der erste Gegenabstand klassifiziert ein neues Ereignis im gewählten Kontext."
    ],
    "prompt": "Braucht unser erster Gegenabstand zwingend zwanzig kontaktfreie Kerzen davor?",
    "answers": [
      "Nein, das sind verschiedene Beobachtungsregeln.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Kontaktfolge und ersten Gegenabstand separat definieren.",
    "diagram": "par14-first"
  },
  {
    "title": "Eine größere Linie kann schon vorher brechen",
    "summary": "Die gewählte Gerade durch Tief 1 und Tief 3 wird in Minute 6 unterschritten.",
    "paragraphs": [
      "Als eigenen Strukturbezug zeichnen wir eine Gerade durch Tief 1 bei 109,8 und Tief 3 bei 113,6. Ihre Steigung beträgt 1,9 Punkte je Minute. Die Anker sind nach Minute 3 bekannt.",
      "Für Minute 6 ergibt das einen Linienwert von 119,3. Ihr Tief 110 liegt deutlich darunter. Dieser Bruch ist schon sichtbar, bevor die erste ganze EMA-Gegenkerze in Minute 7 entsteht.",
      "Nora setzt Linienbruch und Durchschnittsabstand nicht gleich. Beide liefern eigene Information über einen vertieften Rücksetzer. Eine sofortige große Umkehr folgt daraus ebenso wenig wie eine sichere alte Trendfortsetzung."
    ],
    "prompt": "Welches Ereignis wird im Fall zuerst sichtbar?",
    "answers": [
      "Der Bruch der benannten Gerade in Minute 6.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Linienanker, Bruchzeitpunkt und EMA-Ereignis separat führen.",
    "diagram": "par14-line"
  },
  {
    "title": "Einen ersten Kaufplan über dem Hoch vorbereiten",
    "summary": "Bei Preisstufe 0,1 liegt die erste Schwelle bei 111,3.",
    "paragraphs": [
      "Nach Abschluss der ganzen Gegenkerze 7 könnte Nora einen ersten Stopkaufplan über deren Hoch 111,2 prüfen. Bei einem Tick, also einer Preisstufe, von 0,1 liegt diese Schwelle bei 111,3.",
      "Eine mögliche Schutzidee liegt unter dem Tief 110,2 bei 110,1. Einstieg und Schutz sind verschiedene Regeln. Solange die Kaufschwelle nicht erreicht ist, liegt zunächst nur ein Plan vor.",
      "Ein Kauf am Durchschnitt wäre ein anderer Plan mit anderen Ausführungsannahmen. Die endgültige EMA-Linie einer laufenden Kerze war vorher noch nicht bekannt und ist kein rückwirkend verfügbarer Limitpreis."
    ],
    "prompt": "Wo liegt eine Preisstufe über 111,2?",
    "answers": [
      "Bei 111,3.",
      "Bei 112,2.",
      "Bei 110,1, weil jede Stoporder unter dem Markt liegt."
    ],
    "rule": "Signalabschluss, Kaufschwelle und Schutz getrennt benennen.",
    "diagram": "par14-entry"
  },
  {
    "title": "Auslösung füllt die Durchschnittslücke noch nicht automatisch",
    "summary": "Minute 8 erreicht 111,4, bleibt aber ganz unter ihrem EMA.",
    "paragraphs": [
      "Die achte Minute steigt bis 111,4 und schließt bei 111,2. Damit ist die vorbereitete Kaufschwelle 111,3 erreicht. Ihr EMA20 liegt jedoch noch ungefähr bei 112,043.",
      "Das Hoch bleibt unter der Linie. Der erste Aufwärtsversuch hat somit seine Schwelle erreicht, aber noch nicht einmal den gleichzeitig berechneten Durchschnitt. Das alte Hoch 120 ist ein viel weiterer Bezug.",
      "Einen genauen Kaufpreis können wir aus der Kerze nicht als tatsächliche Ausführung beweisen. Für nachfolgende Geldbeispiele nehmen wir eine Füllung bei 111,3 ausdrücklich nur als Modell an."
    ],
    "prompt": "Beweist Hoch 8 bei 111,4 schon Kontakt mit EMA 8 bei ungefähr 112,043?",
    "answers": [
      "Nein, die Auslösung ist erfolgt, der Durchschnitt noch unerreicht.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Auslösung, Durchschnittskontakt und Extremtest auseinanderhalten.",
    "diagram": "par14-first-try"
  },
  {
    "title": "Den ersten Fehlversuch zeitlich sauber beschreiben",
    "summary": "Nach der achten Kerze fällt Minute 9 bis 109.",
    "paragraphs": [
      "Der erste Versuch erhält keinen weiteren Aufwärtsanschluss. Minute 9 fällt bis 109 und schließt bei 109,5. Der vorher geplante Schutzpreis 110,1 liegt in ihrer Spanne.",
      "Für unser Ausführungsmodell gilt: Kauf 111,3 während Minute 8 und Schutzfüllung 110,1 in der späteren Minute 9 werden angenommen. Das Tief 8 bei 110,3 lag noch über diesem Schutz.",
      "Diese Annahmen erlauben eine eindeutige Modellrechnung über zwei abgeschlossene Kerzen. Sie ersetzen trotzdem keine realen Füllinformationen. Nora nennt Chartfehlschlag und angenommene Handelsausführung getrennt."
    ],
    "prompt": "Welche Ausführungsannahmen benutzt die Modellrechnung?",
    "answers": [
      "Kauf 111,3 in Minute 8 und späterer Schutz 110,1 in Minute 9.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Rechenannahmen offenlegen und zeitlich widerspruchsfrei halten.",
    "diagram": "par14-first-fail"
  },
  {
    "title": "Zweiter Versuch zählt Versuche und nicht Abstandskerzen",
    "summary": "Mehrere ganze Kerzen unter der Linie können zu nur zwei Aufwärtsversuchen gehören.",
    "paragraphs": [
      "Die Minuten 7 bis 10 bleiben hier ganz unter ihrem jeweiligen EMA. Das sind vier Abstandskerzen. Nach dem ersten Aufwärtsversuch in Minute 8 entsteht mit Minute 9 aber zunächst ein neuer Rückgang.",
      "Minute 10 reagiert grün: Hoch 111, Tief 109,1 und Schluss 110,8. Ihr Hoch liegt noch unter Hoch 9 bei 111,2. Eine weitere Schwelle über Hoch 10 kann nun einen zweiten Versuch vorbereiten.",
      "Nora verwechselt also nicht die zweite Abstandskerze mit einem zweiten Einstieg. Die Zahl der Kerzen und die Zahl getrennt ausgelöster Aufwärtsversuche beantworten verschiedene Fragen."
    ],
    "prompt": "Sind vier ganze Abstandskerzen automatisch vier Einstiege?",
    "answers": [
      "Nein, Einstiegsschwellen und Versuche müssen gesondert gezählt werden.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Kerzenklassifikation und Versuchszählung getrennt führen.",
    "diagram": "par14-second-signal"
  },
  {
    "title": "Den zweiten Plan mit neuer Schwelle prüfen",
    "summary": "Nach Signal 10 liegt die neue Stopkaufschwelle bei 111,1.",
    "paragraphs": [
      "Das Hoch der abgeschlossenen Reaktionskerze 10 beträgt 111. Eine Preisstufe darüber liegt bei 111,1. Ein Schutz unter dem tieferen Rücksetzertief 109 könnte bei 108,9 geplant werden.",
      "Im Hauptfall steigt Minute 11 bis 114 und schließt bei 113,8. Die neue Kaufschwelle wird erreicht und auch der EMA20 dieser Minute liegt innerhalb ihrer Spanne.",
      "Dies ist ein späterer eigener Versuch. Er gewinnt nicht automatisch, nur weil der erste scheiterte. Nora rechnet den neuen Schutzabstand und das noch verfügbare Gesamtbudget erneut."
    ],
    "prompt": "Welche neue Schwelle gehört zu Hoch 10 bei 111?",
    "answers": [
      "111,1, unabhängig vom früheren Plan 111,3.",
      "Immer wieder 111,3, weil der erste Preis nie verändert werden darf.",
      "120, weil nur das alte Trendhoch als Einstieg erlaubt ist."
    ],
    "rule": "Jeden weiteren Versuch mit eigener Schwelle und aktuellem Budget prüfen.",
    "diagram": "par14-second-entry"
  },
  {
    "title": "Ein zweites Signal kann unausgelöst bleiben",
    "summary": "Ein Gegenfall erreicht nach Signal 10 nur Hoch 111.",
    "paragraphs": [
      "Dieser Gegenfall teilt die ersten zehn Minuten mit dem Hauptfall. Seine Minute 11 bleibt mit Hoch 111 unter der neuen Schwelle 111,1 und fällt bis 105.",
      "Die zweite Kaufschwelle wird nicht erreicht. Das Signal liefert also keinen neuen ausgeführten Stopkauf nach unserer Regel. Der frühere erste Versuch kann im ausdrücklich angenommenen Modell bereits beendet sein.",
      "Nora trennt diese beiden Vorgänge. Kein zweiter Einstieg ist ein anderer Ausgang als ein zweiter tatsächlicher Verlust. Eine kleine Preisstufe kann dafür entscheidend sein."
    ],
    "prompt": "Ist die zweite Stopkaufschwelle 111,1 bei Hoch 111 erreicht?",
    "answers": [
      "Nein, der zweite Plan bleibt unausgelöst.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Nichtauslösung von einem ausgeführten Verlust unterscheiden.",
    "diagram": "par14-untriggered"
  },
  {
    "title": "Auch ein ausgelöster zweiter Versuch kann scheitern",
    "summary": "Eine Variante erreicht 111,3, schließt danach aber bei 108.",
    "paragraphs": [
      "Ein anderer Verlauf teilt ebenfalls die Minuten 1 bis 10. Minute 11 hat Hoch 111,3, Tief 107 und Schluss 108. Damit umfasst ihre Spanne sowohl den neuen Kaufpreis 111,1 als auch den Schutzplan 108,9.",
      "Die genaue Reihenfolge von Hoch und Tief ist aus diesen vier Kerzenwerten nicht bekannt. Wir behaupten daher keinen exakt abgerechneten Kauf mit anschließendem Stop innerhalb derselben Minute.",
      "Der tiefe Schluss belegt jedoch fehlenden haltbaren Anschluss. Nora muss die Lage neu beurteilen und einen dritten gleich begründeten Versuch nicht automatisch anschließen."
    ],
    "prompt": "Was belegt die Variantenkerze sicher?",
    "answers": [
      "Schwellenkontakt und schwachen Schluss, aber keine genaue Intrabarreihenfolge.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "OHLC-Information und genaue Handelsabrechnung getrennt behandeln.",
    "diagram": "par14-second-fail"
  },
  {
    "title": "Eine bewegliche Lücke ist kein unveränderlicher Preisbereich",
    "summary": "Der EMA steigt oder fällt mit den neu abgeschlossenen Schlüssen.",
    "paragraphs": [
      "Nach Signal 10 liegt der EMA bei ungefähr 111,705. In der nächsten Hauptfallkerze 11 liegt er nach Schluss 113,8 ungefähr bei 111,905. Beide Werte gehören zu verschiedenen Zeitpunkten.",
      "In Minute 11 umfasst die ganze Spanne den neuen EMA. Das ist ein Kontakt nach unserer gleichzeitigen Regel. Ein schon vorher festgelegter Zielpreis aus dem alten EMA wäre eine separate feste Preisregel.",
      "Nora nennt deshalb den Zeitpunkt des Linienwerts. Das Schließen einer Durchschnittslücke ist kein unveränderlicher leerer Preisstreifen wie ein fest benannter historischer Tagesbereich."
    ],
    "prompt": "Welcher EMA-Wert gehört zur Kontaktprüfung von Minute 11?",
    "answers": [
      "Der gleichzeitig berechnete EMA 11, ungefähr 111,905.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Dynamische Linienkontakte und vorab festgelegte Preisziele auseinanderhalten.",
    "diagram": "par14-average-test"
  },
  {
    "title": "Ein naher Hochtest bleibt unter dem alten Extrem",
    "summary": "Minute 13 erreicht 119,5 statt des alten Hochs 120.",
    "paragraphs": [
      "Die Erholung des Hauptfalls erreicht nach weiteren grünen Kerzen ein Hoch 119,5. Der Abstand zum alten Trendhoch 120 beträgt noch 0,5 Punkte.",
      "Damit ist ein naher Test sichtbar, aber kein exakter Kontakt und kein neues Hoch. Ein bereits angenommener Kauf kann bis dahin Fortschritt gemacht haben, ohne sein exaktes Ziel erreicht zu haben.",
      "Nora kann einen vorher definierten Testbereich auswerten. Sie rechnet einen Verkauf exakt bei 120 aber nicht als ausgeführt ab, nur weil der Kurs nahe herangekommen ist."
    ],
    "prompt": "Ist Hoch 119,5 ein exaktes Erreichen von 120?",
    "answers": [
      "Nein, es bleibt 0,5 Punkte darunter.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Annäherung, Zielkontakt und neues Hoch unterscheiden.",
    "diagram": "par14-near-extreme"
  },
  {
    "title": "Ein neues Hoch erst mit neuer Information bestätigen",
    "summary": "Erst Minute 14 steigt mit Hoch 120,5 über das alte Extrem.",
    "paragraphs": [
      "Der spätere Hauptfall erweitert den bekannten Verlauf um Minute 14. Sie erreicht 120,5 und schließt bei 120,2. Jetzt ist das alte Hoch 120 tatsächlich überschritten.",
      "Dieser Ausgang zeigt eine gelungene Rückkehr über das alte Extrem. Er war beim ersten Abstand, beim ersten Fehlversuch und beim zweiten Signal noch nicht bekannt.",
      "Eine synthetische Fortsetzung liefert keine Trefferquote. Nora vergleicht sie mit den Gegenfällen, die bis zum jeweiligen Entscheidungszeitpunkt dieselben Daten hatten."
    ],
    "prompt": "Wann ist ein Hoch über 120 im Hauptfall erstmals sichtbar?",
    "answers": [
      "In Minute 14 mit Hoch 120,5.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Den ersten verfügbaren Zeitpunkt der Bestätigung beibehalten.",
    "diagram": "par14-new-extreme"
  },
  {
    "title": "Nach einem Extremtest kann eine größere Korrektur folgen",
    "summary": "Auf das neue Hoch folgen zwei getrennte Abwärtsstrecken.",
    "paragraphs": [
      "In einem späteren Vergleich fällt Minute 15 nach dem neuen Hoch bis 114. Minute 16 erholt sich bis 117, bevor Minute 17 bis 110 fällt. Zwei Abwärtsstrecken sind durch eine Erholung getrennt.",
      "Die vorherige Rückkehr zum Trendhoch hat den Markt also nicht vor einer erneuten größeren Korrektur geschützt. Das neue Gegenverhalten gehört zu einer neuen Entscheidungslage.",
      "Nora behandelt diesen Weg als möglichen Ausgang, nicht als zwangsläufige Regel nach jedem Test. Ein gehaltener Rest braucht eine eigene Schutz- und Ausstiegsregel."
    ],
    "prompt": "Was zeigen die Minuten 15–17?",
    "answers": [
      "Zwei abgegrenzte Abwärtsstrecken mit einer Zwischenerholung.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Nach dem Extremtest den aktuellen Zustand erneut prüfen.",
    "diagram": "par14-post-test"
  },
  {
    "title": "Den Abwärtsfall samt EMA spiegeln",
    "summary": "Aus der ersten Kerze unter dem EMA wird eine erste ganze Kerze darüber.",
    "paragraphs": [
      "Wir spiegeln den Hauptfall mit 220 minus jedem Preis. Hoch und Tief tauschen dabei ihre Rollen. Der vorbereitete Durchschnitt bleibt wegen 220 minus 110 ebenfalls bei 110.",
      "Nach dem Abwärtsschub liegt die erste ganze Gegenkerze über dem EMA. Ein möglicher Stopverkauf würde unter ihrem Tief liegen. Das frühere Trendhoch 120 des Aufwärtsfalls wird zum alten Tief 100.",
      "Im späteren Vergleich bleibt ein erster tiefer Test noch bei 100,5 darüber. Erst die folgende Minute erreicht 99,5 und damit ein neues tieferes Extrem. Kontext und Ausführungsannahmen bleiben genauso nötig."
    ],
    "prompt": "Welches alte Extrem entsteht aus 120 bei der Spiegelung 220 minus Preis?",
    "answers": [
      "Das alte Tief 100.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Auch Durchschnittsanfang, Hoch/Tief und Schutzseite spiegeln.",
    "diagram": "par14-bear"
  },
  {
    "title": "Im Seitwärtsbereich zunächst nur den Durchschnitt als Idee prüfen",
    "summary": "Der Range-Zusatzfall überlappt stark und hat keine klare neue Trendfortsetzung.",
    "paragraphs": [
      "Ein eigener Zusatzfall verwendet einen EMA20 mit Vorbereitung bei 100. Mehrere Kerzen überlappen stark, ihre Schlüsse wechseln um 100. Eine spätere ganze Kerze liegt darunter.",
      "Hier gibt es kein starkes neues Trendhoch, dessen Fortsetzung automatisch als fernes Ziel gelten könnte. Eine mögliche Rückkehr zum Durchschnitt wäre zunächst eine kurze Bewegungsidee, oft Scalp genannt.",
      "Auch dafür braucht Nora eine passende Reaktion, eine Schwelle und genügend Reststrecke nach Kosten. Ein beliebiger Abstand irgendwo in einer Range ist noch kein guter Handelsplan."
    ],
    "prompt": "Welcher erste Bezug passt zur kurzen Range-Idee?",
    "answers": [
      "Der benannte Durchschnittsbereich statt eines automatisch erfundenen großen Trendziels.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Marktzustand und Zielhorizont gemeinsam festlegen.",
    "diagram": "par14-range"
  },
  {
    "title": "Alten Linienwert in einen festen Modellzielpreis übersetzen",
    "summary": "EMA 5 ungefähr 99,683 ist vor Minute 6 bekannt; Modellziel 99,6 wird fest eingefroren.",
    "paragraphs": [
      "Im Range-Zusatzfall hat die fünfte Minute Hoch 98,8 und Tief 97,5. Ihr EMA liegt ungefähr bei 99,683. Eine Kaufschwelle über dem Hoch läge bei 98,9.",
      "Für eine eigene feste Preisregel runden wir diesen bekannten EMA auf die tiefere Preisstufe 99,6. Das ist nun ein vorher festgelegter Zielpreis und kein automatisch nachgeführter Durchschnitt.",
      "Die spätere Minute erreicht in diesem Beispiel den festen Zielpreis und auch ihren eigenen EMA. Nora hält beide Kontakte getrennt fest: Ein anderer Verlauf könnte nur einen der beiden Bezüge erreichen."
    ],
    "prompt": "Ist Modellziel 99,6 nach Festlegung weiterhin die bewegliche EMA-Linie?",
    "answers": [
      "Nein, es ist ein ausdrücklich eingefrorener Preis aus einem früher bekannten Linienwert.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Preisrundung, Festlegung und dynamischen EMA-Kontakt separat erklären.",
    "diagram": "par14-range-return"
  },
  {
    "title": "Zu wenig Reststrecke kann die Idee unbrauchbar machen",
    "summary": "Ein enger Rechenfall bietet ab Shortplan 100,1 bis Ziel 100 nur 0,1 Punkte.",
    "paragraphs": [
      "In einem separaten engen Rechenfall beträgt die Vorbereitung konstant 100. Die einzige sichtbare Kerze liegt mit Tief 100,2 vollständig über ihrem EMA20 von ungefähr 100,038. Ein starker Trend wird nicht vorgegeben.",
      "Eine gedachte Verkaufsschwelle liegt bei 100,1, Schutz bei 100,6 und festes Modellziel bei 100. Bei zehn Einheiten zu einem Euro je Punkt und zwei Euro Kosten ergäbe der Zielweg einen Euro brutto und minus einen Euro netto.",
      "Der Modellverlust läge dagegen bei sieben Euro. Der Abstand ist sichtbar, aber die kurze Zielstrecke trägt die angenommenen Kosten nicht. Nora kann auslassen, ohne ein besseres Signal erzwingen zu müssen."
    ],
    "prompt": "Wie groß wäre der Nettoertrag am festen Ziel dieses engen Modells?",
    "answers": [
      "Minus ein Euro nach zwei Euro Kosten.",
      "Plus ein Euro, weil Kosten nur bei Verlusten gelten.",
      "Sieben Euro, weil Ziel und Schutz dieselbe Strecke haben."
    ],
    "rule": "Reststrecke nach Kosten prüfen, bevor ein Abstand handelbar genannt wird.",
    "diagram": "par14-tight"
  },
  {
    "title": "Neue Aufwärtsstärke kann einen Gegenverkauf entkräften",
    "summary": "Eine kräftige Erholung und ein höheres Tief sind mehr als bloßer Abstand über dem EMA.",
    "paragraphs": [
      "Eine Variante des Range-Falls teilt zunächst dieselben fünf Minuten. Ihre sechste Minute steigt aber kräftig bis 103 und schließt bei 102,8. Nach einer Pause mit Tief 101 folgt weiterer Aufwärtsfortschritt.",
      "Die Pausenkerze liegt ganz über dem EMA. Das allein macht sie nicht zu einem guten Gegenverkauf in Richtung Durchschnitt. Der neue Schub und das höhere Tief sind zusätzliche Gegenargumente.",
      "Nora ignoriert den gerade sichtbaren Aufwärtsanschluss nicht für eine alte Seitwärtsannahme. Derselbe Abstandstyp kann je nach Vorgeschichte eine andere Bedeutung haben."
    ],
    "prompt": "Was muss neben dem Abstand oberhalb des EMA berücksichtigt werden?",
    "answers": [
      "Der kräftige neue Anstieg und das höhere Tief.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Ein Abstandssignal gegen den aktuellen Anschluss prüfen.",
    "diagram": "par14-strong-return"
  },
  {
    "title": "Ganze Kerze heißt strikt größer oder kleiner",
    "summary": "Ein eigenes Grenzbeispiel hat Hoch und EMA genau bei 109.",
    "paragraphs": [
      "Unsere separate Prüfkerze hat Eröffnung 108, Hoch 109, Tief 99 und Schluss 99,5. Nach Vorbereitung bei 110 ergibt sich ein EMA20 von genau 109.",
      "Der Schluss liegt weit darunter, aber das Hoch berührt die Linie exakt. Damit gilt die Kerze nach unserer Regel als Kontakt und nicht als vollständig darunterliegend.",
      "Nora benutzt für die Entscheidung die ungerundeten Werte. Eine gezeichnete Liniendicke oder ein gerundetes Etikett darf die Gleichheitsregel nicht heimlich verändern."
    ],
    "prompt": "Ist Hoch gleich EMA bereits vollständiger Abstand darunter?",
    "answers": [
      "Nein, Gleichheit zählt als Kontakt.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Strikte Abstandsregel und Rundung offenlegen.",
    "diagram": "par14-boundary"
  },
  {
    "title": "Eigenständiges Geldbudget für den zweiten Plan rechnen",
    "summary": "Modellkauf 111,1 bis Schutz 108,9 ergibt 2,2 Punkte Preisrisiko.",
    "paragraphs": [
      "Wir nehmen für eine eigenständige Geldrechnung eine tatsächliche Füllung bei 111,1 an. Ein Punkt je Einheit entspricht einem Euro; die gesamten Kosten des Versuchs betragen zwei Euro. Das Budget ist 30 Euro.",
      "Zwölf ganze Einheiten ergeben zwölf mal 2,2 plus zwei gleich 28,4 Euro Modellverlust. Dreizehn ergäben 30,6 Euro und wären zu viel. Bis zum festen alten Hoch 120 wäre der Modellgewinn mit zwölf Einheiten netto 104,8 Euro.",
      "Das Verhältnis dieser Modellbeträge sagt nichts über die Gewinnwahrscheinlichkeit. Füllabweichungen und höhere Kosten können die Rechnung verändern. Das Budget gilt außerdem nur dann ganz neu, wenn kein vorheriger Verlust davon abzuziehen ist."
    ],
    "prompt": "Wie viele ganze Einheiten passen eigenständig in 30 Euro Budget?",
    "answers": [
      "Zwölf Einheiten mit 28,4 Euro Modellverlust.",
      "Dreizehn Einheiten, weil nur der nackte Kursabstand zählt.",
      "Beliebig viele, weil das alte Hoch weit weg ist."
    ],
    "rule": "Menge aus Preisrisiko und Kosten ableiten, keine Erfolgsquote aus Zielentfernung behaupten.",
    "diagram": "par14-risk"
  },
  {
    "title": "Nach dem ersten Verlust bleibt weniger gemeinsames Budget",
    "summary": "Zehn Einheiten im ersten Modellversuch kosten bei Stop inklusive Kosten 14 Euro.",
    "paragraphs": [
      "Für eine gemeinsame Budgetübung beginnen beide Versuche zusammen mit 30 Euro. Der erste hat angenommenen Kauf 111,3, Schutz 110,1, zehn Einheiten und zwei Euro Kosten. Sein Modellverlust beträgt 14 Euro.",
      "Es bleiben 16 Euro für den zweiten Versuch. Bei 2,2 Punkten Preisrisiko und weiteren zwei Euro Kosten passen jetzt nur sechs ganze Einheiten: 15,2 Euro. Zusammen wären das 29,2 Euro Modellverlust.",
      "Nora setzt nicht nach jedem Versuch heimlich das volle Budget zurück. Solange beide Ideen zu einem gemeinsamen Budget gehören, zählen bereits angefallene Verluste mit. Offene Positionen müssten zusätzlich gemeinsam begrenzt werden."
    ],
    "prompt": "Welche Menge passt nach dem angenommenen ersten Verlust ins Restbudget?",
    "answers": [
      "Sechs Einheiten im zweiten Plan.",
      "Wieder zwölf Einheiten, weil jeder Einstieg das Budget automatisch erneuert.",
      "Zwanzig Einheiten, um den ersten Verlust schneller aufzuholen."
    ],
    "rule": "Gemeinsames Budget über mehrere Versuche hinweg erhalten.",
    "diagram": "par14-shared-risk"
  },
  {
    "title": "Ein niedrigerer Durchschnittskaufpreis macht Nachkaufen nicht kostenlos",
    "summary": "Zwei angenommene Käufe können den Durchschnitt senken und trotzdem mehr Geld riskieren.",
    "paragraphs": [
      "Eine eigene hypothetische Rechnung setzt zwei Einheiten zu 111,1 und weitere zwei zu 109,1 voraus. Diese beiden Füllungen werden im Hauptchart nicht als geschehen behauptet. Ihr gleich gewichteter Durchschnitt läge bei 110,1.",
      "Bei gemeinsamem Schutz 108,9 beträgt das Preisrisiko insgesamt 4,8 Euro zu einem Euro je Punkt und Einheit. Die ersten zwei Einheiten allein hätten 4,4 Euro Preisrisiko gehabt. Der niedrigere Durchschnitt beseitigt die zusätzliche Menge also nicht.",
      "Kosten kämen noch hinzu. Nora plant alle Mengen und das gemeinsame Risiko vorher. Ein Kauf während weiteren Fallens ist eine neue Entscheidung und kein automatisch sicherer Weg zurück zum alten Hoch."
    ],
    "prompt": "Sinkt das gesamte Preisrisiko hier durch den zweiten angenommenen Kauf?",
    "answers": [
      "Nein, es steigt vor Kosten von 4,4 auf 4,8 Euro.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Durchschnittspreis, Gesamtmenge und gemeinsames Schutzrisiko zusammen rechnen.",
    "diagram": "par14-adding"
  },
  {
    "title": "Kurzen Durchschnittstest und längeren Trendtest unterscheiden",
    "summary": "Scalp und Swing unterscheiden sich durch den geplanten Weg und die Ausstiegsregel.",
    "paragraphs": [
      "Ein Scalp meint hier eine kurze Bewegung zu einem nahen Bezug. Ein Swing meint einen längeren gehaltenen Versuch, etwa vom Rücksetzer in Richtung altes Trendhoch. Die Begriffe liefern selbst keine feste Minutenzahl.",
      "Im Hauptfall wird der Durchschnitt schon in Minute 11 erreicht. Das alte Hoch 120 wird viel später geprüft. Wer nur den kleinen Linienweg plant, verfolgt deshalb einen anderen Versuch als jemand mit fernerem Ziel.",
      "Nora hält Schutz, Kosten und Ausstiegsregel passend zum eigenen Horizont fest. Ein kleiner Gewinn wird nicht nachträglich zum verfehlten Swing erklärt und ein verfehltes fernes Ziel nicht heimlich als erfüllter Scalp abgerechnet."
    ],
    "prompt": "Ist der EMA-Kontakt in Minute 11 dasselbe wie das spätere alte Hoch?",
    "answers": [
      "Nein, das sind unterschiedliche Wege und Ausstiegsbezüge.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Zielhorizont und Ergebnis vor dem späteren Verlauf definieren.",
    "diagram": "par14-average-test"
  },
  {
    "title": "Zwei Fehlversuche sind Anlass für neue Information",
    "summary": "Ein dritter Versuch mit derselben alten Begründung ist keine Pflicht.",
    "paragraphs": [
      "Zwei erfolglose Fortsetzungsversuche können anzeigen, dass ein Gegenkanal oder ein Seitwärtsbereich entstanden ist. Nora prüft dann den aktuellen Verlauf neu, statt nur weitere Abstandskerzen zu zählen.",
      "Dabei unterscheidet sie auch zwei Chartideen von zwei ausgeführten Verlusten. Ein unausgelöster Plan hat ein anderes Geldresultat als ein tatsächlich nach Modellannahmen ausgestoppter Versuch.",
      "Neue Regeln, verbliebenes Budget oder Auslassen sind mögliche Antworten. Eine Gegenposition wäre ebenfalls eine neue Idee und nicht automatisch sicher, nur weil die alte Seite bisher nicht erfolgreich war."
    ],
    "prompt": "Was ist nach zwei fehlenden Fortsetzungen sinnvoll zu prüfen?",
    "answers": [
      "Aktuellen Kontext, tatsächliche Ausführungen und verbleibendes Budget.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Fehlversuche als neue Information behandeln und nicht mechanisch wiederholen.",
    "diagram": "par14-second-fail"
  },
  {
    "title": "Deinen ersten Gegenabstand vollständig erklären",
    "summary": "Kontext, gleichzeitiger EMA, erste ganze Kerze, Schwelle und offene Ausgänge gehören zusammen.",
    "paragraphs": [
      "Nora fasst den Stand nach Minute 7 zusammen: Vorheriger Anstieg bis 120, tiefer Rückgang mit Linien- und Durchschnittskontakt, jetzt erstmals eine ganze Kerze unter dem EMA20. Ein Aufwärtsversuch ist möglich, aber noch nicht ausgelöst.",
      "Danach nennt sie getrennt einen möglichen Kaufplan, dessen Schutz, Menge, Kosten und Ziel. Sie berücksichtigt auch die Variante ohne Auslösung oder mit weiterem Gegenfortschritt.",
      "Du kannst dieselbe Beschreibung gespiegelt nach einem Abwärtsschub verwenden. Wichtig ist, dass der Mustername keinen Schritt zwischen Beobachtung, Entscheidung und tatsächlichem Ergebnis überspringt."
    ],
    "prompt": "Welche Aussage passt nach Minute 7?",
    "answers": [
      "Der erste ganze Gegenabstand ist bekannt; Einstieg und erfolgreiche Rückkehr bleiben offen.",
      "Der Abstand garantiert eine erfolgreiche Umkehr.",
      "Der spätere Ausgang war schon vorher bekannt."
    ],
    "rule": "Beobachtung, Plan und späteres Ergebnis in getrennten Sätzen erklären.",
    "diagram": "par14-entry"
  }
]);
