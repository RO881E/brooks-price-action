import { makeLessons } from './lessons';
export const rangesChapterNineLessons = makeLessons('chapter-09', 'Kapitel 9 · Frühere Signalbereiche als mögliche Wendepunkte', [
  {
    "title": "Alte Versuche hinterlassen Preisbezüge",
    "summary": "Ein gescheiterter Kaufversuch kann später einen Zielbereich liefern.",
    "paragraphs": [
      "Nora sieht einen fallenden Markt. Zwischendurch entstehen kleine steigende Kerzen, an denen Käufer auf eine Wende hoffen könnten. Der Preis fällt danach trotzdem auf neue Tiefs. Diese Versuche haben die Abwärtsbewegung bisher nicht beendet.",
      "Später kann eine kräftigere Erholung wieder zu solchen früheren Preisstellen laufen. Nora merkt sich dafür die vorab benannten Signalhochs und möglichen Einstiegspreise. Ein Signal ist eine beobachtete Bedingung, aus der erst ein Handelsplan werden kann.",
      "Die alten Stellen sind mögliche Beobachtungs- und Zielbereiche. Sie sagen weder, dass der Kurs sie erreichen muss, noch, dass er dort zwingend wieder fällt. Nora beginnt mit dem bekannten Verlauf; die spätere Erholung bleibt zunächst verborgen."
    ],
    "prompt": "Was liefert ein früher gescheiterter Versuch?",
    "answers": [
      "Einen möglichen späteren Preisbezug.",
      "Einen garantierten Wendepunkt.",
      "Eine Pflicht, sofort gegen den Trend zu kaufen."
    ],
    "rule": "Alten Bezug markieren und spätere Reaktion offenlassen.",
    "diagram": "par9-history"
  },
  {
    "title": "Eine Signalkerze vor der Auslösung erkennen",
    "summary": "Minute 2 liefert Signal A mit Hoch 108 und Tief 105.",
    "paragraphs": [
      "Minute 1 fällt von 110 auf 106. Minute 2 eröffnet bei 106, handelt bis 108 und bis 105 und schließt bei 107,5. Die steigende zweite Kerze ist in dieser Übung der erste mögliche Kaufhinweis A.",
      "Nora nennt die ganze Hoch-Tief-Spanne 105 bis 108 den Signalbereich A. Ob daraus ein Einstieg wird, hängt von der Orderregel ab. Das Hoch 108 ist ein beobachteter Kerzenpreis, während ein Kauf darüber erst später ausgelöst werden könnte.",
      "Zum Abschluss von Minute 2 ist Minute 3 noch unbekannt. Nora darf den Versuch hier weder als erfolgreich noch als gescheitert beschriften. Eine freundlich aussehende Kerze allein ändert den zuvor fallenden Kontext nicht."
    ],
    "prompt": "Was ist beim Abschluss von Minute 2 bekannt?",
    "answers": [
      "Signal A und seine Spanne, aber noch kein späterer Verlauf.",
      "Der erfolgreiche Kauf in Minute 3.",
      "Der spätere Tiefpunkt des gesamten Falls."
    ],
    "rule": "Signalabschluss, Auslösung und Ergebnis zeitlich trennen.",
    "diagram": "par9-signal"
  },
  {
    "title": "Signalhoch und geplanten Einstieg auseinanderhalten",
    "summary": "Eine Modellpreisstufe beträgt 0,1 Punkt; Kaufplan A liegt bei 108,1.",
    "paragraphs": [
      "Die kleinste Preisstufe unseres erfundenen Marktes beträgt 0,1 Punkt. Nora plant für A eine Kauf-Stoporder eine solche Stufe über dem Hoch 108. Der Auslösepreis ist deshalb 108,1.",
      "Im vorgegebenen Ereignisablauf der Übung steigt Minute 3 zuerst bis 108,2, fällt danach und schließt bei 104,5. Diese Reihenfolge ist eine zusätzliche Falldefinition; OHLC allein beweist sie nicht. Der Kurs hat den geplanten Auslösepreis gehandelt. Für die Beispielrechnung nehmen wir ausdrücklich einen Kauf zu 108,1 an; aus der Kerze allein kennen wir die tatsächliche Ausführung nicht.",
      "Das Signalhoch 108 und der angenommene Einstieg 108,1 bleiben zwei verschiedene Preise. Auch wenn sie nah beieinanderliegen, ändern 0,1 Punkt die Reststrecke und das rechnerische Ergebnis. Ein späterer Kontakt bei 108 reicht nicht bis 108,1."
    ],
    "prompt": "Wo liegt der geplante Einstieg eine Preisstufe über 108?",
    "answers": [
      "Bei 108,1.",
      "Bei 108,0, ohne Unterschied zum Hoch.",
      "Bei 105,0, dem Signaltief."
    ],
    "rule": "Signalpreis, Orderauslöser und Ausführung gesondert nennen.",
    "diagram": "par9-trigger"
  },
  {
    "title": "Das Scheitern braucht eine erklärte Regel",
    "summary": "Minute 3 unterschreitet das Signaltief 105 und schließt bei 104,5.",
    "paragraphs": [
      "Für diesen Lernfall gilt der Versuch A als gescheitert, wenn der Markt nach der Auslösung unter das Signaltief 105 fällt und darunter schließt. Minute 3 hat Tief 104 und Schluss 104,5. Damit ist die erklärte Bedingung erfüllt.",
      "Ein eigener Schutzstop wäre eine zusätzliche Orderregel. Wer beispielsweise 104,9 gewählt hat, hätte seinen Auslösepreis ebenfalls erreicht gesehen. Seine Füllung, mögliche Slippage und die Reihenfolge innerhalb der Minute stehen nicht vollständig im OHLC-Bild.",
      "Die Beschriftung gescheiterter Versuch ist deshalb eine Bewertung der Struktur. Sie behauptet nicht, dass alle Käufer dieselbe Position eröffnet oder bis zum späteren Tief gehalten haben. Nora führt das Signal trotzdem als möglichen späteren Bezug weiter."
    ],
    "prompt": "Warum gilt A in unserem Lernfall als gescheitert?",
    "answers": [
      "Nach der Auslösung schließt der Preis unter dem Signaltief 105.",
      "Jede steigende Kerze in einem fallenden Markt ist schon gescheitert.",
      "Weil Nora den späteren Endpunkt kennt."
    ],
    "rule": "Scheitern anhand einer vorab erklärten Strukturregel prüfen.",
    "diagram": "par9-trigger"
  },
  {
    "title": "Einen zweiten Versuch ergänzen",
    "summary": "Signal B in Minute 4 hat Hoch 105,5 und Tief 102,5.",
    "paragraphs": [
      "Nach A entsteht Minute 4: Eröffnung 104,5, Hoch 105,5, Tief 102,5, Schluss 105. Nora benennt diese steigende Kerze als zweiten Kaufhinweis B. Ein Kauf eine Preisstufe über ihr Hoch läge bei 105,6.",
      "Im vorgegebenen Ereignisablauf erreicht Minute 5 zuerst 105,7 und schließt danach bei 102 unter dem Signaltief 102,5. Auch B wird unter der erklärten Regel ausgelöst und scheitert strukturell. Das ist ein neuer Versuch an einer tieferen Stelle, keine Bestätigung von A.",
      "Nora merkt sich beide Hochs mit ihrem Ursprung: B bei 105,5 und A bei 108. Aus den zwei Fehlschlägen folgt keine Regel, dass der nächste Versuch zwangsläufig gelingt. Wiederholte Gegenversuche können einen starken Trend auch einfach begleiten."
    ],
    "prompt": "Welcher ältere Signalbezug liegt näher über einem späteren Preis 102?",
    "answers": [
      "B bei 105,5.",
      "A bei 108.",
      "Beide liegen genau gleich weit entfernt."
    ],
    "rule": "Mehrere Versuche mit Herkunft und Reihenfolge dokumentieren.",
    "diagram": "par9-history"
  },
  {
    "title": "Auch ein dritter Versuch kann scheitern",
    "summary": "Signal C in Minute 6 hat Hoch 103 und Tief 100.",
    "paragraphs": [
      "Minute 6 steigt von 102 auf 102,8, handelt bis 103 und bis 100. Nora nennt sie C. Der angenommene Kaufplan eine Preisstufe darüber läge bei 103,1.",
      "Im vorgegebenen Ereignisablauf erreicht Minute 7 zuerst 103,2, fällt dann bis 98,5 und schließt bei 99. Damit wird auch C unter unserer Strukturregel ausgelöst und danach widerlegt. Der Markt hat drei steigende Zwischenkerzen überwunden und ein neues Tief gebildet.",
      "Die Anzahl drei ist nur eine Eigenschaft dieses erfundenen Verlaufs. Nora behandelt sie nicht als magische Wendezahl. Der nächste Entscheidungszeitpunkt benötigt neue sichtbare Informationen, statt aus der Anzahl der Fehlschläge abgeleitet zu werden."
    ],
    "prompt": "Beweisen drei gescheiterte Versuche eine nun sichere Wende?",
    "answers": [
      "Nein, die nächste Entscheidung braucht neue Informationen.",
      "Ja, der vierte Versuch muss gewinnen.",
      "Ja, allein die Zahl ersetzt einen Stop."
    ],
    "rule": "Wiederholungen zählen, aber keine Erfolgszusage daraus machen.",
    "diagram": "par9-history"
  },
  {
    "title": "Erholung und Trendwechsel unterscheiden",
    "summary": "Minute 8 schließt bei 102; Minute 9 ergänzt einen Schluss bei 104.",
    "paragraphs": [
      "Minute 8 steigt von 99 bis zum Schluss 102 und handelt höchstens 102,5. Sie zeigt kräftigere Gegenbewegung, bleibt mit ihrem Hoch aber noch unter C bei 103. Zum Abschluss dieser Minute ist C nicht erreicht.",
      "Minute 9 steigt weiter und schließt bei 104. Ihr Hoch 104,2 liegt über C. Dieser Anschluss stärkt die Erholung gegenüber einer einzelnen steigenden Kerze. Die weiter oben liegenden Bereiche B und A sind zu diesem Zeitpunkt noch nicht getestet.",
      "Nora nennt das eine Erholung mit Anschluss. Ob daraus ein längerer Aufwärtstrend oder eine Seitwärtsphase entsteht, bleibt offen. Selbst eine deutliche Gegenbewegung kann später erneut in den alten Abwärtstrend zurückfallen."
    ],
    "prompt": "Was ist nach Minute 8 sicher sichtbar?",
    "answers": [
      "Eine Erholung, aber noch kein Kontakt mit C bei 103.",
      "Alle drei früheren Zielbereiche sind erreicht.",
      "Ein langfristiger Aufwärtstrend ist endgültig bestätigt."
    ],
    "rule": "Gegenbewegung, Anschluss und längeren Trendwechsel unterscheiden.",
    "diagram": "par9-recovery"
  },
  {
    "title": "Die Ziele vor dem Kontakt ordnen",
    "summary": "Vom Schluss 102 aus folgen C 103, B 105,5 und A 108.",
    "paragraphs": [
      "Zum Abschluss von Minute 8 liegen alle drei Signalhochs oberhalb des aktuellen Schlusses 102. Ihre Abstände betragen 1 Punkt zu C, 3,5 Punkte zu B und 6 Punkte zu A. Das sind die Reststrecken vom aktuellen Preis, keine bereits verdienten Gewinne.",
      "Nora nimmt C als ersten Beobachtungsbereich, B als nächsten und A als weiteren. Wenn sie stattdessen eine Zone benutzt, legt sie deren Breite jetzt fest. Sie verschiebt die Ränder nicht später zum gezeigten Hoch.",
      "Die Staffelung hilft, die Entwicklung unterwegs neu zu bewerten. Sie fordert nicht, jedes Mal bis zum höchsten Ziel durchzuhalten. Ein weiter entfernter Bezug kann unerreichbar bleiben, während eine frühere Teilbewegung schon vorbei ist."
    ],
    "prompt": "Wie weit liegt B 105,5 vom aktuellen Schluss 102 entfernt?",
    "answers": [
      "3,5 Punkte.",
      "6 Punkte.",
      "1 Punkt."
    ],
    "rule": "Bekannte Ziele nach Abstand ordnen und unterwegs neu prüfen.",
    "diagram": "par9-recovery"
  },
  {
    "title": "Warum dort Verkaufsinteresse entstehen könnte",
    "summary": "Frühere Käufer könnten bei einer Erholung ihre Position schließen.",
    "paragraphs": [
      "Ein Käufer aus dem gescheiterten Versuch A könnte bei 108,1 noch im Markt sein. Erholt sich der Preis später dorthin, könnte er verkaufen, um seine Position zu beenden. Andere Käufer könnten schon am alten Signalhoch 108 Gewinne mitnehmen.",
      "Das sind mögliche Motive, keine aus den Kerzen ablesbaren Konten. Manche ursprünglichen Käufer wurden längst ausgestoppt; andere eröffneten dort nie eine Position. Auch neue Verkäufer könnten die Stelle nutzen, ohne einen früheren Verlust zu haben.",
      "Nora kann den Bereich als möglichen Treffpunkt verschiedener Entscheidungen beobachten. Sie behauptet aber nicht, im Chart seien alle festgesetzten Käufer oder ihre genauen Ordermengen sichtbar. Die spätere Preisreaktion ist die überprüfbare Beobachtung."
    ],
    "prompt": "Was lässt sich über frühere Käufer aus dem Kerzenbild beweisen?",
    "answers": [
      "Ihre Positionen und Absichten sind nicht direkt sichtbar.",
      "Alle halten bis zum ursprünglichen Einstieg.",
      "Alle verkaufen zur selben Sekunde."
    ],
    "rule": "Teilnehmermotive als Hypothesen behandeln, Preise als Beobachtung.",
    "diagram": "par9-levels"
  },
  {
    "title": "Ein Kontakt ist noch keine Umkehr",
    "summary": "Minute 9 überschreitet C 103 und schließt weiter darüber.",
    "paragraphs": [
      "Minute 9 hat Eröffnung 102, Tief 101,7, Hoch 104,2 und Schluss 104. Damit wurde der erste Signalbezug C bei 103 überschritten. Der Preis stoppt dort in dieser abgeschlossenen Kerze nicht mit einer bestätigten Abwärtsumkehr.",
      "Nora behandelt den Kontakt als neuen Prüfschritt. Ein bloßes Handeln am Bezug ist etwas anderes als ein Rückfall darunter, ein niedrigeres Hoch oder fallender Anschluss. Keines dieser zusätzlichen Zeichen folgt automatisch aus dem Preis 103.",
      "Wer am ersten Bezug eine Teilgewinnregel festgelegt hat, kann sie unabhängig von einer Umkehrhypothese prüfen. Wer dagegen gegen die Erholung verkaufen will, braucht seinen eigenen Auslöser, Schutz und Ausführungsplan."
    ],
    "prompt": "Was zeigt Minute 9 am Bezug C?",
    "answers": [
      "Einen Kontakt mit Überschreitung, aber noch keine bestätigte Abwärtsumkehr.",
      "Eine automatische sichere Shortposition.",
      "Den Beweis, dass A erreicht werden muss."
    ],
    "rule": "Zielkontakt und Gegenposition nicht verwechseln.",
    "diagram": "par9-first"
  },
  {
    "title": "Der nächste Bezug liefert eine Pause",
    "summary": "Minute 10 handelt bis 105,7 und schließt bei 105,3.",
    "paragraphs": [
      "Minute 10 steigt von 104 bis 105,7 und schließt bei 105,3. Ihr Tief liegt bei 103,8. Der Signalpreis B 105,5 und der angenommene frühere Einstieg 105,6 liegen beide innerhalb der gehandelten Spanne.",
      "Der Schluss unter 105,5 und der obere Docht passen zu einer Pause am Bezug. Für eine größere Abwärtsbewegung fehlt aber noch Anschluss. Nora nennt das eine erste Reaktion, statt den vollständigen weiteren Verlauf schon daraus abzuleiten.",
      "Ein neues Signal kann erst nach seinem Abschluss beurteilt werden. Bei einem Verkauf unter dem Tief 103,8 wäre die Auslösung erst in einer späteren Kerze zu prüfen. Eine Pause am Ziel erfüllt nicht automatisch jede Einstiegsregel."
    ],
    "prompt": "Was fehlt nach Minute 10 für die Bewertung einer größeren Abwärtsbewegung?",
    "answers": [
      "Weitere sichtbare Gegenbewegung beziehungsweise Anschluss.",
      "Eine neue frei erfundene Zielgerade.",
      "Die Annahme, dass der Docht alle späteren Preise verrät."
    ],
    "rule": "Erste Reaktion und bestätigten Gegenanschluss getrennt lesen.",
    "diagram": "par9-pause"
  },
  {
    "title": "Ein weiter oben liegender Bereich kann verfehlt werden",
    "summary": "Hoch 105,7 erreicht B, bleibt aber unter A 108.",
    "paragraphs": [
      "Vom selben Ende der Minute 10 geht ein eigener Gegenfall aus: Minute 11 fällt bis 103 und schließt bei 103,2. Minute 12 handelt bis 100 und schließt bei 100,5. Der Markt erholt sich in diesem Ausschnitt nicht bis A bei 108.",
      "Der fernere Bezug war vorab benannt und bleibt verfehlt. Nora darf B nicht nachträglich als einziges jemals geplantes Ziel darstellen. Erreichte Zwischenziele und nicht erreichte weitere Ziele gehören beide in die Auswertung.",
      "Das Ende des Übungsausschnitts ist zudem ein eigener Zeithorizont. Der Fall beweist nur, dass A bis zu diesem Ende nicht erreicht wurde. Ob Stunden später noch ein Test entsteht, lässt sich daraus nicht beantworten."
    ],
    "prompt": "Was berichtet Nora für diesen Gegenfall?",
    "answers": [
      "B erreicht; A innerhalb des gezeigten Horizonts verfehlt.",
      "A erreicht, weil B erreicht wurde.",
      "A muss aus dem ursprünglichen Plan gelöscht werden."
    ],
    "rule": "Erreichte, verfehlte und zeitlich offene Bezüge gemeinsam auswerten.",
    "diagram": "par9-failure"
  },
  {
    "title": "Eine Fortsetzung kann die Pause überwinden",
    "summary": "Im Fortsetzungsfall steigt Minute 11 bis 108 und schließt bei 107,8.",
    "paragraphs": [
      "Ein anderer Verlauf teilt dieselben ersten zehn Minuten. Danach steigt Minute 11 von 105,3 bis 108 und schließt bei 107,8. Die Pause bei B wurde überwunden, und das weiter entfernte Signalhoch A wird genau erreicht.",
      "Der angenommene frühere Kaufpreis A liegt dagegen bei 108,1. Das Hoch 108 bleibt eine Modellpreisstufe darunter. Eine Zielregel am Signalhoch und eine Rückkehr zum damaligen Kaufpreis haben somit unterschiedliche Ergebnisse.",
      "Nora vergleicht beide Wege erst jetzt. Am Ende von Minute 10 waren sowohl die Fortsetzung als auch der Gegenfall noch unbekannt. Wer nur den erfolgreichen Weg zeigt, verdeckt die Unsicherheit der damaligen Entscheidung."
    ],
    "prompt": "Ist der frühere Modellkauf 108,1 beim Hoch 108 erreicht?",
    "answers": [
      "Nein, es fehlt 0,1 Punkt.",
      "Ja, nah genug zählt bei jeder Order als Füllung.",
      "Ja, das Hoch liegt bei 108,2."
    ],
    "rule": "Fortsetzung zeigen und Signalhoch nicht mit Einstieg gleichsetzen.",
    "diagram": "par9-contact"
  },
  {
    "title": "Eine vorab gewählte Zone schafft eine eigene Regel",
    "summary": "Zone A reicht im Vergleich von 107,8 bis 108,2.",
    "paragraphs": [
      "Nora kann vor dem Kontakt einen Beobachtungsbereich um 108 festlegen, beispielsweise 107,8 bis 108,2. Ein Preis in dieser Zone zählt dann als Zonenbesuch. Diese Regel ist breiter als ein exakter Kontakt am Einzelpreis 108,1.",
      "Das Hoch 108 der Minute 11 besucht die Zone und erreicht das Signalhoch. Es erreicht weiterhin nicht den angenommenen Einstieg 108,1. Auch die Zonenregel beweist keine tatsächliche Ausführung einer Limitorder innerhalb des Bereichs.",
      "Nora protokolliert Einzelpreis und Zone getrennt. Wenn sie die Zone erst nach dem verfehlten Preis ausweitet, verliert der Vergleich seinen Aussagewert. Eine Definition ist hilfreich, solange sie vor dem Ergebnis feststeht."
    ],
    "prompt": "Welche Aussage passt zum Hoch 108?",
    "answers": [
      "Zone besucht und Signalhoch erreicht; Einstieg 108,1 noch nicht erreicht.",
      "Jede Order in 107,8 bis 108,2 sicher gefüllt.",
      "Der ganze Bereich ist eine einzige exakte Preisstufe."
    ],
    "rule": "Zonenbesuch, Einzelkontakt und Orderausführung gesondert zählen.",
    "diagram": "par9-contact"
  },
  {
    "title": "Ein Durchlaufen widerlegt den sofortigen Wendegedanken",
    "summary": "Minute 12 steigt bis 110,3 und schließt bei 110.",
    "paragraphs": [
      "Im Durchlauffall folgt auf Minute 11 eine weitere steigende Kerze. Minute 12 eröffnet bei 107,8, erreicht 110,3 und schließt bei 110. Der Preis geht deutlich über den alten Signalbereich A hinaus.",
      "Der frühere Bezug bleibt korrekt markiert. Widerlegt ist hier die Behauptung, er müsse die Erholung sofort stoppen. Ein Bereich kann gehandelt werden und danach seine bisher vermutete begrenzende Wirkung verlieren.",
      "Nora beurteilt die neue Stärke statt die Linie zum nächsthöheren Hoch zu verschieben. Ob später ein Rücktest auf 108 entsteht, ist noch offen. Auch ein Durchlaufen eines alten Bereichs liefert keine ewige Fortsetzungszusage."
    ],
    "prompt": "Was zeigt der Durchlauffall?",
    "answers": [
      "Der alte Bereich stoppt die Erholung hier nicht sofort.",
      "Die Linie darf rückblickend auf 110,3 verschoben werden.",
      "Alte Signalbereiche sind grundsätzlich immer wertlos."
    ],
    "rule": "Bezug erhalten und seine Wirkung anhand neuer Preise bewerten.",
    "diagram": "par9-through"
  },
  {
    "title": "Für einen Wendefall neuen Anschluss abwarten",
    "summary": "Ein eigener Verlauf schließt nach dem Kontakt erst 105,8 und dann 104.",
    "paragraphs": [
      "Im Wendefall teilen die Kerzen bis einschließlich Minute 11 den Kontakt bei 108. Minute 12 fällt von 107,8 auf 105,8. Minute 13 steigt zwischenzeitlich bis 106,6, schließt aber bei 104. Die Abwärtsbewegung erhält weiteren Anschluss.",
      "Das Hoch 106,6 bleibt unter dem früheren Kontakt bei 108. Nora hat jetzt mehr Gegeninformationen als allein am Zielkontakt. Sie kann einen entstehenden Rücksetzer oder eine stärkere Umkehr prüfen, ohne deren Dauer bereits zu kennen.",
      "Der Wendefall und der Durchlauffall sind unterschiedliche Fortsetzungen desselben bekannten Anfangs. Beide werden gezeigt, damit die Zielstelle nicht rückblickend als unfehlbares Signal erscheint. Der tatsächliche Managementplan muss mit dieser Unsicherheit zurechtkommen."
    ],
    "prompt": "Was ergänzt der Wendefall gegenüber dem bloßen Kontakt?",
    "answers": [
      "Fallende Schlusskurse und ein tieferes Zwischenhoch.",
      "Den Beweis eines für immer gültigen Abwärtstrends.",
      "Eine schon in Minute 8 bekannte Zukunft."
    ],
    "rule": "Gegenbewegung erst mit dem tatsächlich sichtbaren Anschluss bewerten.",
    "diagram": "par9-turn"
  },
  {
    "title": "Ein Doppeltest muss nicht genau denselben Preis treffen",
    "summary": "Ein älterer Versuch und ein späterer Rücklauf können denselben Bereich testen.",
    "paragraphs": [
      "Das Signalhoch A 108 stammt aus Minute 2. Minute 11 erreicht später erneut 108. Zwei getrennte Besuche derselben Gegend können zu einer Doppeltest-Idee gehören: Erst war dort ein Kaufversuch gescheitert, später kommt die Erholung dorthin zurück.",
      "Ein perfekter Gleichstand ist keine Pflicht für jeden ähnlichen Fall. Bei einer vorher definierten Zone können leicht verschiedene Hochs denselben Bereich besuchen. Ob daraus ein Doppelhoch mit Abwärtsanschluss entsteht, zeigen erst neue Kerzen.",
      "Nora erklärt dabei die Zeitpunkte und den dazwischenliegenden Rückgang. Zwei benachbarte Hochs ohne diese Struktur würden etwas anderes beschreiben. Die Form allein verrät auch nicht, wo eine eigene Order tatsächlich gefüllt würde."
    ],
    "prompt": "Wann ist die Doppeltest-Idee mehr als zwei Zahlen?",
    "answers": [
      "Wenn getrennte Besuche, Zwischenbewegung und weitere Reaktion erklärt sind.",
      "Sobald zwei beliebige Hochs im Chart stehen.",
      "Wenn man den Bereich erst nach dem Ergebnis wählt."
    ],
    "rule": "Getrennte Tests, Zwischenweg und Reaktion zusammen betrachten.",
    "diagram": "par9-turn"
  },
  {
    "title": "Aus einer Erholung kann eine Range entstehen",
    "summary": "Mehrere Rückwege würden einen Bereich erst nach und nach bestätigen.",
    "paragraphs": [
      "Zwischen dem Tief 98,5 und einem höheren alten Signalbezug kann sich ein neuer Seitwärtsbereich entwickeln. Anfangs ist das nur eine Arbeitshypothese: Ein Tief und eine Erholung liefern noch nicht mehrere bestätigte Pendelbewegungen.",
      "Nora müsste spätere Rückwege und Tests sehen, um die Rangegrenzen belastbarer zu beschreiben. Ihre spätere Mitte dürfte sie nicht rückwirkend als in Minute 8 bereits bekannte neutrale Zone einsetzen.",
      "Eine Rangeidee verändert den Plan: Nahe einer oberen Grenze kann die verbleibende Aufwärtsstrecke klein sein, in der Mitte fehlen klare Randbezüge. Solange Grenzen erst entstehen, bleiben sie vorläufig und können erweitert oder durchbrochen werden."
    ],
    "prompt": "Ist die spätere Rangemitte nach Minute 8 schon sicher bekannt?",
    "answers": [
      "Nein, spätere Grenzen und Rückwege fehlen noch.",
      "Ja, jeder steigende Schluss zeigt die endgültige Mitte.",
      "Ja, alle alten Signalhochs sind identische Rangegrenzen."
    ],
    "rule": "Entstehende Grenzen als vorläufig markieren, statt Zukunft zurückzuschreiben.",
    "diagram": "par9-levels"
  },
  {
    "title": "Den ganzen Gedanken nach unten spiegeln",
    "summary": "200 minus Preis spiegelt die Kaufversuche in frühere Verkaufsversuche.",
    "paragraphs": [
      "Im Gegenrichtungsfall verwenden wir 200 minus jeden Preis. Aus dem fallenden Markt wird ein steigender Markt mit gescheiterten Verkaufsversuchen. Ein ursprüngliches Hoch wird dabei zum gespiegelten Tief.",
      "Die alten Signaltiefs liegen nun bei C 97, B 94,5 und A 92. Der gespiegelte aktuelle Schluss nach Minute 8 ist 98. Eine spätere Abwärtsbewegung hat deshalb zunächst 1, dann 3,5 und dann 6 Punkte Strecke zu diesen Bezügen.",
      "Der mögliche Shortauslöser eine Preisstufe unter A wäre 91,9. Auch hier bleiben Signaltief 92 und früherer Auslösepreis 91,9 getrennt. Die gleiche Strukturidee gilt spiegelbildlich, nicht dieselbe ungespiegelte Schutzseite."
    ],
    "prompt": "Welche früheren Signaltiefs entstehen in der Spiegelung?",
    "answers": [
      "C 97, B 94,5, A 92.",
      "C 103, B 105,5, A 108.",
      "Alle liegen bei 100."
    ],
    "rule": "Bei der Spiegelung Hoch und Tief sowie Order- und Schutzseite tauschen.",
    "diagram": "par9-mirror"
  },
  {
    "title": "Zeitebenen verändern Bedeutung und Wartezeit",
    "summary": "Die Idee gilt auch für größere Kerzen; Minute bleibt hier Minute.",
    "paragraphs": [
      "Ein alter Signalbereich auf einem Monatschart kann über viele Monate beobachtet werden. Ein Minutenbezug betrifft einen viel kürzeren Ablauf. Ähnliche Geometrie macht die erwartete Dauer und das Geldrisiko dieser Fälle nicht gleich.",
      "Unsere eigenen Kerzen sind ausdrücklich abgeschlossene Minuten. Wir etikettieren sie nicht nachträglich als reale Monatsdaten. Wer verschiedene Zeitebenen vergleicht, nennt jeweils die Herkunft, Kerzendauer und den Zeitpunkt, an dem der Signalabschluss feststand.",
      "Ein höherer Bezug kann Hintergrund liefern, ein kleinerer Chart den Auslöser. Beide müssen zum selben Entscheidungszeitpunkt bekannt sein. Zwei Ansichten derselben Daten sind außerdem keine zwei unabhängigen Beweise für eine Wende."
    ],
    "prompt": "Was bleibt beim Vergleich verschiedener Zeitebenen nötig?",
    "answers": [
      "Zeiteinheit, Herkunft und Informationszeitpunkt benennen.",
      "Jede Minutenkerze als echte Monatskerze ausgeben.",
      "Die gleiche Geometrie als identisches Geldrisiko behandeln."
    ],
    "rule": "Zeitebene erklären und gemeinsame Daten nicht doppelt als Beweis zählen.",
    "diagram": "par9-levels"
  },
  {
    "title": "Geldrisiko vor dem Zielwunsch rechnen",
    "summary": "Modell: Kauf 102, Stop 98,4, 1 Euro je Punkt und Einheit, Kosten 2 Euro.",
    "paragraphs": [
      "Für einen neuen Erholungsplan nehmen wir eine Ausführung zu 102 nach Minute 8 an. Der Schutzstop liegt bei 98,4, eine Preisstufe unter dem bisherigen Tief 98,5. Der Abstand beträgt 3,6 Punkte. Das sind Modellannahmen, keine aus dem Chart belegten Füllungen.",
      "Eine Einheit bewegt sich in diesem Beispiel um 1 Euro je Punkt. Das Gesamtbudget einschließlich pauschal 2 Euro Kosten beträgt 20 Euro. Fünf Einheiten ergeben 5 mal 3,6 plus 2 gleich 20 Euro Modellverlust.",
      "Sechs Einheiten würden 23,6 Euro benötigen und überschreiten das Budget. Reale Slippage könnte auch bei fünf Einheiten mehr Verlust verursachen. Nora passt die Menge an den Abstand an, statt den Stop nur für eine größere Position enger zu setzen."
    ],
    "prompt": "Wie viele ganze Einheiten passen in das Modellbudget 20 Euro?",
    "answers": [
      "Fünf.",
      "Sechs.",
      "Zwanzig, unabhängig vom Stopabstand."
    ],
    "rule": "Stopabstand, Punktwert, Kosten und Menge gemeinsam rechnen.",
    "diagram": "par9-risk"
  },
  {
    "title": "Das nähere Ziel hat auch eine kleinere Auszahlung",
    "summary": "Bei fünf Einheiten liefert C netto 3 Euro, B 15,5 Euro, A 28 Euro.",
    "paragraphs": [
      "Vom angenommenen Kauf 102 ist C 103 nur 1 Punkt entfernt. Fünf Einheiten bringen dort brutto 5 Euro; nach 2 Euro Gesamtkosten bleiben 3 Euro. Dem steht im gleichen Modell ein Verlust von 20 Euro bis zum Stop gegenüber.",
      "B 105,5 liegt 3,5 Punkte entfernt: 17,5 Euro brutto und 15,5 Euro netto. A 108 liegt 6 Punkte entfernt: 30 Euro brutto und 28 Euro netto. Das jeweils weitere Ziel zahlt im Trefferfall mehr, ist aber damit nicht wahrscheinlicher erreichbar.",
      "Die drei Rechnungen vergleichen getrennte vollständige Ausstiege mit derselben Menge. Sie sind keine gleichzeitig addierbaren Gewinne. Für tatsächliche Teilverkäufe müssten Stückzahlen und jeweilige Kosten eigenständig gerechnet werden."
    ],
    "prompt": "Welcher Nettogewinn ergibt sich beim vollständigen Ausstieg zu B?",
    "answers": [
      "15,5 Euro.",
      "28 Euro.",
      "17,5 Euro nach bereits abgezogenen Kosten."
    ],
    "rule": "Zielabstand in Geld übersetzen und Nettoergebnis von Brutto trennen.",
    "diagram": "par9-risk"
  },
  {
    "title": "Eine Modellgewinnschwelle ist keine gemessene Trefferquote",
    "summary": "Für B ergibt 20 geteilt durch 35,5 ungefähr 56,3 Prozent.",
    "paragraphs": [
      "Bei einer reinen Treffer-oder-Stop-Regel mit Nettoverlust 20 Euro und Nettogewinn 15,5 Euro liegt die rechnerische Gewinnschwelle bei 20 geteilt durch 20 plus 15,5. Das ergibt ungefähr 56,3 Prozent. Darüber wäre der einfache Erwartungswert positiv.",
      "Für C mit 3 Euro Nettogewinn ergibt dieselbe Rechnung ungefähr 87 Prozent; für A mit 28 Euro Nettogewinn ungefähr 41,7 Prozent. Die Schwellen stammen nur aus den Auszahlungen. Sie messen nicht, wie oft die Zielpreise tatsächlich erreicht werden.",
      "Andere Ausstiege, Zeitenden, Teilverkäufe und schwankende Kosten verändern die Rechnung. Nora braucht eine sauber ausgewertete Stichprobe vergleichbarer Entscheidungen, bevor sie eine tatsächliche Trefferquote gegen eine passende Schwelle halten kann."
    ],
    "prompt": "Ist 56,3 Prozent eine gemessene Erfolgsquote des Bereichs B?",
    "answers": [
      "Nein, es ist die rechnerische Gewinnschwelle im erklärten Modell.",
      "Ja, sie folgt aus einem einzigen gezeichneten Verlauf.",
      "Ja, jede alte Signalstelle erreicht genau diese Quote."
    ],
    "rule": "Auszahlungsrechnung und empirische Erfolgsquote auseinanderhalten.",
    "diagram": "par9-risk"
  },
  {
    "title": "Ein später Einstieg kann zu wenig Reststrecke lassen",
    "summary": "Nach Minute 10: Preis 105,3, Ziel 108, Modellstop 103,7.",
    "paragraphs": [
      "Wer erst nach Minute 10 zu 105,3 kauft, hat bis A 108 noch 2,7 Punkte. Ein beispielhafter Stop eine Preisstufe unter dem Tief der Minute 10 liegt bei 103,7, also 1,6 Punkte entfernt. Der Einstiegspunkt verändert die Rechnung deutlich.",
      "Bei denselben fünf Einheiten und 2 Euro Gesamtkosten ergäben sich 11,5 Euro Nettogewinn am Ziel und 10 Euro Modellverlust am Stop. Ob dieser engere Schutz zur Handelsidee passt, ist zusätzlich zu prüfen: Der Markt kann ihn vor einem späteren Zieltest auslösen.",
      "Ein näher am Ziel liegender Preis rechtfertigt nicht automatisch einen größeren Einsatz. Nora kann den Trade auslassen, wenn die Reststrecke, der Kontext oder ihre Ausführungsregel nicht passen. Ein sichtbarer alter Bezug verpflichtet sie nicht zum Einstieg."
    ],
    "prompt": "Wie groß ist die Reststrecke von 105,3 bis 108?",
    "answers": [
      "2,7 Punkte.",
      "6 Punkte wie beim früheren Kauf 102.",
      "1,6 Punkte, der Stopabstand."
    ],
    "rule": "Bei einem späteren Einstieg Reststrecke und Schutz neu prüfen.",
    "diagram": "par9-pause"
  },
  {
    "title": "Nachkäufe erklären den Bezug, heilen aber kein Risiko",
    "summary": "Ein hypothetischer Käufer hält je eine Einheit zu 108,1 und 103,1.",
    "paragraphs": [
      "Als mögliche Teilnehmergeschichte betrachten wir zwei Käufe: eine Einheit bei 108,1 und eine bei 103,1. Der durchschnittliche Kaufpreis ist 105,6. Das Rechnen erklärt, warum ein Käufer schon unter seinem ersten Einstieg wieder einen Bruttogewinn erreichen könnte.",
      "Beim Verkauf beider Einheiten zu 108,1 beträgt das Bruttoergebnis 0 plus 5 gleich 5 Euro bei 1 Euro je Punkt. Mit beispielhaft 2 Euro Gesamtkosten verbleiben 3 Euro. Der erste Kauf für sich war nur vor Kosten ausgeglichen.",
      "Am vorherigen Tief 98,5 hätten die beiden Einheiten zusammen jedoch 9,6 plus 4,6 gleich 14,2 Euro Buchverlust getragen, ohne Kosten. Ein Durchschnittspreis beseitigt weder dieses Risiko noch die Möglichkeit weiterer Verluste. Die Teilnehmergeschichte ist keine Empfehlung zum ungeplanten Nachkaufen."
    ],
    "prompt": "Welchen Durchschnittspreis ergeben die zwei gleich großen Käufe?",
    "answers": [
      "105,6.",
      "108,1, weil der erste Kauf immer zählt.",
      "98,5, das spätere Tief."
    ],
    "rule": "Hypothetische Nachkäufe mit Gesamtrisiko rechnen und nicht aus Kerzen beweisen.",
    "diagram": "par9-averaging"
  },
  {
    "title": "Eine nicht ausgelöste Order hinterlässt keine eigene Position",
    "summary": "Der Gegenfall hat in Minute 3 Hoch 108 statt 108,2.",
    "paragraphs": [
      "In einem eigenen Ausführungskontrast bleiben die ersten beiden Minuten gleich. Minute 3 erreicht diesmal nur 108 und fällt bis zum Schluss 104,5. Die Kauf-Stoporder bei 108,1 wurde nicht erreicht; Nora hatte daraus keine Position.",
      "Das alte Signalhoch kann weiterhin ein Chartbezug sein. Die Begründung mein damaliger Kauf muss wieder gerettet werden gilt für diese nicht ausgelöste Order aber nicht. Eigene Orderhistorie und allgemein sichtbarer Preisbereich sind verschiedene Informationsquellen.",
      "Auch eine frühere simulierte Ausführung darf nicht im Nachhinein auf diesen Gegenfall übertragen werden. Nora protokolliert keine Auslösung als eigenständiges Ergebnis. Ein ausgelassener oder ungetriggerter Trade ist kein Gewinn und kein Stopverlust."
    ],
    "prompt": "Was geschieht mit der Kauf-Stoporder 108,1 bei Hoch 108?",
    "answers": [
      "Sie wird durch diesen Preisverlauf nicht ausgelöst.",
      "Sie wird garantiert zu 108,1 ausgeführt.",
      "Sie verliert automatisch bis zum späteren Tief."
    ],
    "rule": "Nicht ausgelöste Orders von Verlustpositionen und Chartbezügen trennen.",
    "diagram": "par9-untriggered"
  },
  {
    "title": "Eine nachträgliche Erklärung ist noch keine Strategie",
    "summary": "Die Zielregel wird eingefroren, bevor die Fortsetzungen gezeigt werden.",
    "paragraphs": [
      "Nora hält nach Minute 8 an und notiert C 103, B 105,5, A 108, die gegebenenfalls gewählte Zone, den Stop und ein festes Auswertungsende. Sie legt fest, ob sie Kontakt, Schlusskurs oder eine bestimmte Reaktion zählen möchte.",
      "Danach vergleicht sie Fortsetzung, Durchlaufen und Scheitern. Ein einzelner passender Chart macht die Regeln noch nicht zuverlässig. Vor allem darf sie die Zielstelle nicht nachträglich gegen irgendeine andere alte Kerze austauschen, die zufällig besser passt.",
      "Für eine spätere Untersuchung sammelt sie auch verfehlte und nicht ausgelöste Fälle. Gebühren, Zeithorizont und verfügbare Daten bleiben gleich definiert. So trennt sie eine anschauliche Erklärung von einer tatsächlich überprüften Handelsregel."
    ],
    "prompt": "Wann werden Ziele und Auswertung definiert?",
    "answers": [
      "Vor dem Aufdecken der späteren Fortsetzungen.",
      "Erst nach der Suche nach dem besten Treffer.",
      "Nur bei den Gewinnern."
    ],
    "rule": "Plan vor dem Ergebnis festhalten und Gegenfälle mitprüfen.",
    "diagram": "par9-recovery"
  },
  {
    "title": "Deine vollständige Entscheidung am alten Bereich",
    "summary": "Bezug, Informationsstand, Reaktion, Order und Risiko gehören zusammen.",
    "paragraphs": [
      "Nora fragt zuerst, welche frühere Kerze den Bezug liefert und ob sie Hoch, Tief, Auslösepreis oder eine Zone meint. Dann prüft sie, welche Informationen zu diesem Zeitpunkt schon bekannt sind und wie der aktuelle Markt dorthin gelangt.",
      "Beim Kontakt unterscheidet sie Pause, Gegenanschluss und Durchlaufen. Erst ein eigener Auslöser kann daraus eine Position machen. Zielstrecke, Stop, Menge, Kosten und Auswertungsende müssen zu dieser Position passen; Auslassen bleibt ein vollständiger möglicher Plan.",
      "Im Journal schreibt sie nicht nur alter Bereich hat gehalten. Sie nennt den ausgewählten Preis, seine Herkunft, Zeitpunkt und Regel sowie das beobachtete Ergebnis. Das verbindet den Chartgedanken mit einer überprüfbaren Entscheidung statt mit einer nachträglichen Erfolgsgeschichte."
    ],
    "prompt": "Welcher Plan ist vollständig?",
    "answers": [
      "Bekannter Bezug plus sichtbare Reaktion, eigene Orderregel und gerechnetes Risiko.",
      "Alte Linie gefunden, sofort maximal handeln.",
      "Späteren Treffer suchen und ursprüngliche Regeln ersetzen."
    ],
    "rule": "Preisbezug, Reaktion, Ausführung und Risiko in derselben Entscheidung verbinden.",
    "diagram": "par9-levels"
  }
]);
