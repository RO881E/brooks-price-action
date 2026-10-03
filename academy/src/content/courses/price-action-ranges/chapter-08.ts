import { makeLessons } from './lessons';
export const rangesChapterEightLessons = makeLessons('chapter-08', 'Kapitel 8 · Ziele aus Kurslücken und Ranges ableiten', [
  {
    "title": "Ziele aus einem Preisbereich ableiten",
    "summary": "Die bekannte Range reicht von 98 bis 102.",
    "paragraphs": [
      "Nora liest vier abgeschlossene Minuten mit mehreren Bewegungen zwischen 98 und 102. Diese Grenzen bilden den für die Übung festgelegten Seitwärtsbereich. Ein späterer Ausbruch ist im ersten Ausschnitt noch nicht gezeigt.",
      "Sie kann aus der Höhe dieses Bereichs mögliche Preisziele berechnen. Dafür muss sie die Grenzen nennen und entscheiden, von welchem Ausbruchspunkt sie die Höhe abträgt. Ein Zielpreis beweist noch keine Richtung.",
      "Die Rechnung hilft, eine mögliche weitere Bewegung zu planen. Sie verpflichtet Nora nicht, schon innerhalb der Range eine Position zu eröffnen. Auslöser, Stop und Geldbudget sind eigene Bestandteile des Plans."
    ],
    "prompt": "Was muss vor der Rangeprojektion feststehen?",
    "answers": [
      "Die verwendeten Grenzen und der Ausgangspunkt der Projektion.",
      "Die später garantiert erfolgreiche Richtung.",
      "Eine eigene Order ist allein durch die Range schon bestätigt."
    ],
    "rule": "Rangegrenzen, Projektion und Einstieg getrennt festlegen.",
    "diagram": "par8-range"
  },
  {
    "title": "Die Rangehöhe ohne Verwechslung messen",
    "summary": "102 minus 98 ergibt 4 Punkte.",
    "paragraphs": [
      "Die obere Grenze liegt bei 102 und die untere bei 98. Ihre Differenz beträgt 4 Punkte. Nora verwendet die gesamte ausgewählte Hoch-Tief-Spanne, nicht nur die Körper einzelner Kerzen.",
      "Eine kleinere Innenrange hätte andere Grenzen und eine andere Höhe. Das kann eine eigene Messidee sein. Sie darf aber nicht unbemerkt statt der ursprünglich ausgewählten äußeren Range verwendet werden.",
      "Nora beschriftet deshalb den Zeitraum und beide Ränder. Beim späteren Vergleichen kann sie nachvollziehen, ob sich die gemessene Struktur tatsächlich verändert hat oder ob nur die Ankerregel ausgetauscht wurde."
    ],
    "prompt": "Wie hoch ist die Range 98 bis 102?",
    "answers": [
      "4 Punkte.",
      "2 Punkte, unabhängig von den Grenzen.",
      "102 Punkte."
    ],
    "rule": "Höhe aus den benannten Rändern der gewählten Range rechnen.",
    "diagram": "par8-range"
  },
  {
    "title": "Die Range nach oben verlängern",
    "summary": "Eine Höhe oberhalb der Grenze 102 ergibt 106.",
    "paragraphs": [
      "Für einen möglichen Ausbruch nach oben trägt Nora die 4 Punkte Rangehöhe von der oberen Grenze 102 ab. Die Rechnung lautet 102 plus 4 gleich 106.",
      "Das ist die einfache Rangehöhenprojektion. Sie benötigt noch keinen endgültigen Rücklauf nach dem Ausbruch. Der Zielpreis kann deshalb schon mit den bekannten Rangegrenzen vorbereitet werden.",
      "Die vorbereitete Linie ist keine Bestätigung einer späteren Fortsetzung. Nora benötigt eine tatsächlich beobachtete Ausbruchsbedingung und einen Plan für einen Rückfall. Derselbe Bereich kann auch weiter seitwärts gehandelt werden."
    ],
    "prompt": "Welches Aufwärtsziel ergibt die Rangehöhe?",
    "answers": [
      "106,0.",
      "104,0, automatisch die Mitte.",
      "98,0, die andere Rangegrenze."
    ],
    "rule": "Rangehöhe von der passenden Ausbruchsgrenze abtragen.",
    "diagram": "par8-up"
  },
  {
    "title": "Die Range nach unten spiegeln",
    "summary": "Vier Punkte unter 98 ergeben 94.",
    "paragraphs": [
      "Für einen möglichen Abwärtsausbruch trägt Nora dieselbe Höhe von 4 Punkten unter der unteren Grenze 98 ab. Daraus entsteht 94. Die obere Grenze 102 ist für diese direkte Verlängerung nicht der Ansatzpunkt.",
      "Der vorhandene Seitwärtsbereich kann also zwei bedingte Projektionen liefern. Welche Richtung tatsächlich bestätigt wird, zeigen erst neue Preise. Die zwei Linien sind keine Aufforderung, gleichzeitig gegensätzliche Trades zu eröffnen.",
      "Bei einem Short muss auch der Stop auf der passenden oberen Schutzseite geplant werden. Die Menge hängt vom Preisabstand ab. Eine sauber gespiegelte Zielgerade allein ergibt noch keine sauber gespiegelte Handelsregel."
    ],
    "prompt": "Welches Abwärtsziel gehört zu 98 minus 4?",
    "answers": [
      "94,0.",
      "106,0, auch beim Abwärtsausbruch.",
      "102,0, nur die obere Grenze."
    ],
    "rule": "Zielrichtung und Schutzseite zusammen spiegeln.",
    "diagram": "par8-down"
  },
  {
    "title": "Ein beobachteter Ausbruch ergänzt den Plan",
    "summary": "Minute 5 überschreitet die obere Grenze 102.",
    "paragraphs": [
      "Minute 5 eröffnet bei 101,8, erreicht 105 und schließt 104,6. Ihr Tief liegt bei 101,6. Der Kurs handelt über der vorab benannten Rangegrenze 102 und schließt darüber.",
      "Damit liegt ein Aufwärtsausbruch vor. Das Rangeziel 106 ist zu diesem Zeitpunkt noch nicht gehandelt: Das bisherige Hoch 105 bleibt darunter. Ein späterer Rückfall kann die Fortsetzung trotzdem scheitern lassen.",
      "Nora trennt das vorbereitete Ziel vom neu beobachteten Ausbruch. Sie trägt das spätere Hoch nicht als früheren Wissensstand in ihre Entscheidung ein. Auch eine sichtbare Preisüberschreitung bestätigt keine eigene Ausführung."
    ],
    "prompt": "Ist das Rangeziel 106 nach Minute 5 bereits erreicht?",
    "answers": [
      "Nein, das gezeigte Hoch liegt erst bei 105.",
      "Ja, jeder Ausbruch gilt sofort als Zieltreffer.",
      "Ja, weil die Zielgerade bereits gezeichnet ist."
    ],
    "rule": "Vorbereitetes Ziel und neu hinzugekommene Preisbestätigung getrennt halten.",
    "diagram": "par8-breakout"
  },
  {
    "title": "Den ersten wirklichen Pausenrand auswählen",
    "summary": "Eine weitere starke Kerze kann zum Schub gehören.",
    "paragraphs": [
      "Nach Minute 5 folgt Minute 6 mit großem steigenden Körper von 104,6 bis 106,0. Sie hat ein Tief 104,4. Eine Regel könnte dieses Tief sofort als vorläufigen Rand benutzen.",
      "Unsere Pausenregel wartet dagegen auf die erste deutlich kleinere Kerze. Minute 7 hat einen Körper von 106,0 bis 105,9 und ein Tief 103. Erst mit ihrem Abschluss ist dieser Pausenrand endgültig bekannt.",
      "Beide Regeln verwenden verschiedene Informationen. Nora legt fest, ob sie die unmittelbar folgende Kerze oder die erste kleine Pause meint. Das verhindert, dass die Lücke rückblickend genau so zugeschnitten wird, wie es zum Ergebnis passt."
    ],
    "prompt": "Welcher Rand gehört hier zur erklärten ersten kleinen Pause?",
    "answers": [
      "Das Tief 103 von Minute 7.",
      "Das Tief 104,4 von Minute 6 unter jeder denkbaren Regel.",
      "Ein späteres Tief darf schon vorab bekannt sein."
    ],
    "rule": "Sofortigen Folgerand und erste kleine Pause als eigene Regeln benennen.",
    "diagram": "par8-gap"
  },
  {
    "title": "Die Lückenmitte als andere Messidee rechnen",
    "summary": "Bezug 102, Pausenrand 103, Mitte 102,5.",
    "paragraphs": [
      "Der Abstand zwischen der Ausbruchsgrenze 102 und dem ersten Pausentief 103 beträgt 1 Punkt. Sein Mittelpunkt liegt bei 102,5. Für diese Rechnung benennt Nora den Start des ausgewählten Gesamtabschnitts bei 98.",
      "Von 98 bis 102,5 sind es 4,5 Punkte. Dieselbe Strecke oberhalb der Mitte ergibt 107. Die Formel 2 mal 102,5 minus 98 liefert denselben Zielpreis.",
      "Minute 6 hatte zwar schon 106,2 erreicht, aber 107 ist bis zur Pause noch nicht gehandelt. Diese Projektion wird erst mit dem Pausenrand 103 bekannt. Das frühere Rangeziel 106 beruhte auf einer anderen Methode und lag näher."
    ],
    "prompt": "Welcher Zielpreis ergibt sich aus der Lückenmitte 102,5 und Start 98?",
    "answers": [
      "107,0.",
      "106,0 ohne Unterschied zur Rangehöhe.",
      "103,0, nur das Pausentief."
    ],
    "rule": "Lückenränder, Start und Informationszeitpunkt gemeinsam dokumentieren.",
    "diagram": "par8-gap"
  },
  {
    "title": "Rangehöhe und Lückenmitte bewusst vergleichen",
    "summary": "106 und 107 stammen aus verschiedenen Messregeln.",
    "paragraphs": [
      "Die Rangehöhe 98 bis 102 ergibt 106. Die später bekannte Lückenmitte zwischen 102 und 103 ergibt mit Start 98 den Bereich 107. Beide Werte sind rechnerisch korrekt, weil sie unterschiedliche Messideen verwenden.",
      "Nora kann den näheren Bezug zuerst beobachten und den weiteren danach prüfen. Sie legt ihre Priorität vor dem Kontakt fest. Ein durchschlagener erster Bereich ist zusätzliche Information, kein Beweis, dass der zweite zwingend hält.",
      "Beide Rechnungen teilen viele derselben Kerzen. Sie dürfen nicht als zwei vollständig unabhängige Beweise für eine bestimmte Richtung gezählt werden. Der gemeinsame Ursprung gehört zu einer ehrlichen Bewertung."
    ],
    "prompt": "Warum unterscheiden sich die Ziele 106 und 107?",
    "answers": [
      "Rangehöhe und Lückenmitte benutzen unterschiedliche Messregeln.",
      "Mindestens eine Rechnung muss grundsätzlich falsch sein.",
      "Zwei Linien verdoppeln automatisch die Erfolgsquote."
    ],
    "rule": "Zielmethoden vergleichen und gemeinsame Daten nicht doppelt zählen.",
    "diagram": "par8-follow"
  },
  {
    "title": "Ein früherer Start verschiebt die Projektion",
    "summary": "Ein ausdrücklich bekannter älterer Start 96 ergibt 109.",
    "paragraphs": [
      "Nora könnte statt des Rangebeginns 98 ein früheres bekanntes Tief 96 aus dem vorherigen Ausschnitt verwenden. Der Lückenmittelpunkt bleibt 102,5. Die Strecke zur Mitte wäre dann 6,5 Punkte lang.",
      "Noch einmal 6,5 Punkte darüber ergibt 109. Der gezeigte aktuelle Ausschnitt enthält das frühere Tief nicht als Kerze; es ist als bekannter Kontextbezug beschriftet. Ohne einen solchen Nachweis wäre 96 nur eine erfundene nachträgliche Auswahl.",
      "Der näher liegende 107-Bezug aus dem aktuellen Abschnitt bleibt eine eigene Rechnung. Nora erklärt, warum sie einen älteren Beginn zusätzlich betrachtet, und behauptet nicht, alle Startpunkte seien gleich gut begründet."
    ],
    "prompt": "Welches Ziel ergibt sich aus Mitte 102,5 und älterem Start 96?",
    "answers": [
      "109,0.",
      "107,0 unabhängig vom Startpunkt.",
      "96,0, der Start selbst."
    ],
    "rule": "Aktuellen und älteren Start mit Herkunft und Priorität getrennt ausweisen.",
    "diagram": "par8-older"
  },
  {
    "title": "Die Mitte der Ausbruchskerze ist eine weitere Variante",
    "summary": "Die vollständige Kerzenspanne 105 bis 101,6 hat Mitte 103,3.",
    "paragraphs": [
      "Wenn Ausbruchsbezug und Pausenrand nicht klar gewählt werden können, lässt sich alternativ die Mitte der großen Ausbruchskerze prüfen. Nora definiert dafür hier die Mitte ihrer gesamten Hoch-Tief-Spanne.",
      "Minute 5 hat Hoch 105 und Tief 101,6. Der Mittelpunkt ist 103,3. Mit Start 98 ergibt die Projektion 108,6. Die Körpermitte aus Eröffnung 101,8 und Schluss 104,6 wäre dagegen 103,2 und würde 108,4 liefern.",
      "Nora benennt ausdrücklich, ob sie Spannenmitte oder Körpermitte meint. Die Nähe beider Ergebnisse macht sie nicht identisch. Auch diese Variante ist nur ein Preisbezug und keine zusätzliche Sicherheit allein durch eine weitere Formel."
    ],
    "prompt": "Welche Projektion liefert die Spannenmitte 103,3 mit Start 98?",
    "answers": [
      "108,6.",
      "108,4 unter jeder Mittendefinition.",
      "105,0, nur das Hoch."
    ],
    "rule": "Spannenmitte und Körpermitte vor der Projektion unterscheiden.",
    "diagram": "par8-bar-mid"
  },
  {
    "title": "Einen negativen Abstand als Überlappung lesen",
    "summary": "Im Vergleichsfall endet die erste Pause bei 101,5 statt über 102.",
    "paragraphs": [
      "Nach denselben ersten fünf Minuten fällt im negativen Vergleich die nächste Pause auf 101,5. Die Ausbruchsgrenze ist 102. Die gerichtete Differenz 101,5 minus 102 ergibt minus 0,5 Punkt.",
      "Es gibt dort keinen positiven Zwischenraum zwischen Grenze und Rücklauf. Der Test handelt unter dem alten Ausbruchsbezug. Der Begriff negativer Abstand beschreibt genau diese Überlappung.",
      "Die spätere Fortsetzung kann trotzdem wieder steigen. Nora prüft die neue Reaktion und nennt den tieferen Test als Gegenargument zur ursprünglichen Stärke. Eine mathematisch mögliche Projektion ist noch keine überzeugende Fortsetzungsregel."
    ],
    "prompt": "Was beschreibt minus 0,5 in diesem Fall?",
    "answers": [
      "Der Test greift 0,5 Punkt unter die Ausbruchsgrenze.",
      "Eine positive ungehandelte Strecke von 0,5 Punkt.",
      "Eine garantiert bereits bestätigte Abwärtsumkehr."
    ],
    "rule": "Negativen Abstand, Überlappung und weitere Reaktion getrennt beurteilen.",
    "diagram": "par8-negative"
  },
  {
    "title": "Mit negativen Rändern transparent weiterrechnen",
    "summary": "Mitte 101,75 ergibt mit Start 98 den Bereich 105,5.",
    "paragraphs": [
      "Die verwendeten Ränder sind 102 und 101,5. Ihr Mittelpunkt ist 101,75. Die Strecke ab 98 beträgt 3,75 Punkte; die gleich große Verlängerung ergibt 105,5.",
      "Bis zum Abschluss dieser Pause hatte der Kurs höchstens 105 erreicht. Die neue 105,5-Projektion war damit noch nicht gehandelt. Im später gezeigten Vergleich steigt Minute 7 bis 105,6.",
      "Dieser eine Treffer beweist keine Zuverlässigkeit negativer Abstände. Nora vergleicht zusätzlich die direktere Rangeprojektion 106 und dokumentiert die schwächere Testlage. Sie wählt nicht nur den Treffer aus und vergisst die anderen vorab benannten Möglichkeiten."
    ],
    "prompt": "Welches Ziel ergibt die neue Mitte 101,75?",
    "answers": [
      "105,5.",
      "107,0 wie beim positiven Test.",
      "101,5, nur den Pausenrand."
    ],
    "rule": "Korrekte Rechnung und Überzeugungskraft des tieferen Tests getrennt prüfen.",
    "diagram": "par8-negative-follow"
  },
  {
    "title": "Ein dünner Profilbereich braucht eine eigene Datengrundlage",
    "summary": "Zeitprofil und Volumenprofil zählen unterschiedliche Dinge.",
    "paragraphs": [
      "Ein Zeitprofil zählt, in wie vielen gleich definierten Zeitabschnitten ein Preisbereich besucht wurde. Ein Volumenprofil summiert dagegen die tatsächlich gehandelte Menge pro Preisbereich. Beide können schmale und breite Bereiche zeigen, messen aber verschiedene Größen.",
      "Ein schneller Übergang zwischen zwei länger besuchten Bereichen kann in einem Zeitprofil dünn aussehen. Die bloße Hoch-Tief-Spanne einer einzelnen Kerze beweist diese Zählung jedoch nicht. Nora benötigt die verwendeten Abschnitte und die Zuordnung zu den Preisstufen.",
      "Für das Schaubild verwenden wir deshalb separat erfundene Besuchszahlen. Sie sind keine aus den anderen Kerzen berechneten historischen Profildaten. Das hält Preisbild und tatsächliche Profilmessung sauber auseinander."
    ],
    "prompt": "Was zählt das hier verwendete Zeitprofil?",
    "answers": [
      "Besuche eines Preisbereichs in gleich definierten Zeitabschnitten.",
      "Die gehandelte Menge ohne Mengendaten.",
      "Nur die Körperhöhe der größten Kerze."
    ],
    "rule": "Profilart, Zählregel und Datengrundlage offenlegen.",
    "diagram": "par8-profile"
  },
  {
    "title": "Dünne und dicke Bereiche konkret vergleichen",
    "summary": "Unsere Besuchszahlen zeigen zwei breite Gruppen und eine schmale Mitte.",
    "paragraphs": [
      "Im erfundenen Zeitprofil haben die Preisstufen 98,99 und 100 die Besuchszahlen 8,12 und 10. Die Stufen 104,105 und 106 haben 9,11 und 8. Dazwischen haben 101,102 und 103 nur 4,2 und 3 Besuche.",
      "Damit ist der mittlere Abschnitt im Vergleich weniger oft besucht. Nora kann ihn als dünnen Übergang zwischen zwei häufiger besuchten Gruppen beschreiben. Die Zahlen beweisen weder ein leeres Orderbuch noch die genaue Motivation der Teilnehmer.",
      "Breitere Gruppen können zu wiederholtem beidseitigem Handel passen. Eine dünne Mitte kann zu einem schnellen Übergang passen. Das sind Lesarten der gezeigten Verteilung, keine automatische Aussage über eine künftige Richtung."
    ],
    "prompt": "Welche Gruppe ist in dieser Zählung am wenigsten besucht?",
    "answers": [
      "Die Stufen 101 bis 103.",
      "Die Stufen 98 bis 100.",
      "Alle Gruppen sind gleich, unabhängig von den Zahlen."
    ],
    "rule": "Relative Besuchsdichte von Teilnehmergeschichte und Prognose trennen.",
    "diagram": "par8-profile"
  },
  {
    "title": "Die geometrische Profilmitte ist nicht der häufigste Preis",
    "summary": "Mitte 102 und häufigster Preis 99 sind verschiedene Bezüge.",
    "paragraphs": [
      "Der benannte dünne Abschnitt reicht in unserer Zählung von 101 bis 103. Sein geometrischer Mittelpunkt ist 102. Der Preis mit den meisten Besuchen im gesamten Profil ist dagegen 99 mit 12 Besuchen.",
      "Verwendet Nora 102 als möglichen Mittebezug und 98 als Start, ergibt sich rechnerisch 106. Das ist eine Projektion aus gewählten Bereichsrändern. Sie entsteht nicht automatisch aus dem Preis mit dem höchsten Balken.",
      "Ein anderer dünner Bereich oder eine andere Startregel würde andere Werte liefern. Nora dokumentiert deshalb die Grenzen, statt jede optisch passende Engstelle nachträglich zum sichersten Messbezug zu erklären."
    ],
    "prompt": "Welcher Preis ist hier die geometrische Mitte des dünnen Bereichs 101 bis 103?",
    "answers": [
      "102,0.",
      "99,0, weil dort der höchste Besuchsbalken liegt.",
      "106,0, das projizierte Ziel."
    ],
    "rule": "Bereichsmitte, häufigsten Preis und projiziertes Ziel unterscheiden.",
    "diagram": "par8-profile"
  },
  {
    "title": "Breite Aufenthaltsbereiche sind keine unanfechtbare Zustimmung",
    "summary": "Die Verteilung zeigt Verhalten, nicht die Meinung aller Händler.",
    "paragraphs": [
      "Viele Besuche in einer Zone können zeigen, dass der Markt dort längere Zeit handelte. Man kann sie als Bereich wiederholten Austauschs beschreiben. Das heißt nicht, dass alle Käufer und Verkäufer diesen Preis persönlich für gleich fair halten.",
      "Ein schneller Durchgang durch eine andere Zone bedeutet ebenso wenig, dass dort niemand handeln wollte oder dass kein einziger Abschluss stattfand. Besonders eine funktional gelesene Lücke kann tatsächlich gehandelte Preise enthalten.",
      "Nora verwendet deshalb konkrete Messwörter wie Besuche, Zeitabschnitte und Mengen. Begriffe wie Übereinstimmung oder Fairness helfen höchstens als vereinfachte Erklärung. Die Daten selbst haben Vorrang vor einer zu glatten Teilnehmergeschichte."
    ],
    "prompt": "Was beweist ein dünner Profilbereich nicht?",
    "answers": [
      "Dass dort grundsätzlich niemand gehandelt hat.",
      "Dass seine gezeigten Besuchszahlen kleiner sind.",
      "Dass man benannte Ränder geometrisch mitteln kann."
    ],
    "rule": "Messbare Aufenthaltsdichte nicht mit vollständiger Teilnehmerabsicht gleichsetzen.",
    "diagram": "par8-profile"
  },
  {
    "title": "Einen Zielbereich knapp verfehlen sauber verbuchen",
    "summary": "106,8 bleibt 0,2 unter der Lückenprojektion 107.",
    "paragraphs": [
      "Nach der positiven Pause erreicht Minute 8 im Näherungsfall ein Hoch 106,8. Die Lückenprojektion liegt 107. Der Preis bleibt also 0,2 Punkt darunter. Eine zuvor benannte Zone 106,7 bis 107,2 wurde betreten.",
      "Eine exakte Zielorder bei 107 wird durch dieses Hoch allein nicht als ausgeführt bestätigt. Ein anderer Plan mit einem Verkauf schon beim Eintritt in die Zone hätte eine andere Ausstiegsregel.",
      "Nora vergrößert die Zone nicht erst nach dem Ergebnis. Ein Tickabstand muss ebenfalls zur ausdrücklich benannten Preisstufe passen. Im Modell beträgt die Preisstufe 0,1, also entspricht das Verfehlen zwei Preisstufen."
    ],
    "prompt": "Wie viele Modellpreisstufen liegt 106,8 unter 107 bei Stufe 0,1?",
    "answers": [
      "Zwei.",
      "Eine, unabhängig von der Preisstufe.",
      "Null, weil die Zone betreten wurde."
    ],
    "rule": "Zonenkontakt, Abstand in Preisstufen und exakten Zielkontakt getrennt zählen.",
    "diagram": "par8-near"
  },
  {
    "title": "Überschreiten ist kein Beweis einer Umkehr",
    "summary": "Ein Ziel kann durchlaufen und später erneut besucht werden.",
    "paragraphs": [
      "Im Fortsetzungsfall steigt Minute 9 bis 107,2 und über das Lückenziel 107. Im erweiterten Fall handelt Minute 10 später sogar bis 109. Die erste Projektion ist damit bereits überschritten.",
      "Nora kann die weiteren Bereiche beobachten, ohne zu behaupten, jeder Überschritt sei sofort Erschöpfung. Eine kräftige Fortsetzung liefert andere Hinweise als ein großer Rückfall mit schwachem Anschluss.",
      "Ein eigener Teilverkauf am ersten Bereich ist nach seinem Plan zu prüfen. Die spätere Mehrstrecke macht den früheren Ausstieg nicht rückwirkend ungültig. Ein Limitauftrag braucht weiterhin tatsächliche Ausführungsdaten."
    ],
    "prompt": "Was zeigt ein Hoch 107,2 relativ zum Ziel 107?",
    "answers": [
      "Einen Zielkontakt mit Überschreitung, aber noch keine sichere Umkehr.",
      "Eine automatische Shortbestätigung.",
      "Das Ziel wird durch die Überschreitung rückwirkend ungültig."
    ],
    "rule": "Kontakt, Überschreitung und anschließende Reaktion getrennt auswerten.",
    "diagram": "par8-overshoot"
  },
  {
    "title": "Ein früher Zielkontakt darf nicht mit späterem Wissen begründet werden",
    "summary": "Rangeziel 106 wurde vor dem endgültigen Pausenrand erreicht.",
    "paragraphs": [
      "Die Rangeprojektion 106 war bereits nach den ersten vier Minuten berechenbar. Minute 6 handelt bis 106,2 und erreicht diesen Preis. Erst Minute 7 liefert den endgültigen Rand für die Pausenregel zur Lückenprojektion 107.",
      "Nora kann einen vorab geplanten Rangeausstieg bei 106 untersuchen. Sie darf aber nicht behaupten, die erst danach bekannte Pause hätte diesen früheren Auftrag begründet. Das wäre eine Vermischung der Zeitpunkte.",
      "Auch die Zwischenrechnung mit dem direkten Folgerand 104,4 gehört zu einem eigenen Informationsstand. Ihre Mitte 103,2 würde 108,4 ergeben. Sie war eine andere Regel als das Warten auf die kleine Pause."
    ],
    "prompt": "Welche Projektion war schon vor Minute 6 aus der Range bekannt?",
    "answers": [
      "106,0.",
      "107,0 aus dem erst später bekannten Pausenrand.",
      "Alle späteren Ziele waren automatisch schon bekannt."
    ],
    "rule": "Frühe Entscheidungen mit früh bekannten Ankern begründen.",
    "diagram": "par8-gap"
  },
  {
    "title": "Zielkontakt und Gewinnmitnahme sind unterschiedliche Nachweise",
    "summary": "Gehandelter Preis allein ist keine vollständige Orderabrechnung.",
    "paragraphs": [
      "Ein Kurskontakt am geplanten Bereich 107 zeigt zunächst nur, dass diese Preisstufe gehandelt wurde. Eine eigene Order kann ganz, teilweise oder gar nicht ausgeführt worden sein. Ein vorheriger Stop kann die Position bereits geschlossen haben.",
      "Nora trennt deshalb geplante Zielgerade, Preisverlauf und bestätigte Ausführung. Für eine tatsächliche Gewinnrechnung braucht sie Einstieg, Ausstieg, Mengen und Kosten.",
      "Ein weit entferntes berechnetes Ziel hilft wenig, wenn der eigene Handelsplan vorher beendet wurde. Die spätere Rückkehr zum Ziel darf weder einen früheren Verlust löschen noch eine damals nicht eröffnete Position nachträglich entstehen lassen."
    ],
    "prompt": "Welche Angaben braucht die tatsächliche Gewinnrechnung?",
    "answers": [
      "Bestätigte Preise, Mengen und Kosten.",
      "Nur das höchste spätere Hoch.",
      "Die Zielgerade allein bestätigt jeden Gewinn."
    ],
    "rule": "Preisziel und tatsächlich realisierten Trade getrennt abrechnen.",
    "diagram": "par8-follow"
  },
  {
    "title": "Gewinnmitnahme ist noch keine Gegenposition",
    "summary": "Ein Short am Longziel benötigt eine neue Begründung.",
    "paragraphs": [
      "Der erreichbare Projektionsbereich kann ein vorab festgelegter Ort für einen Teilverkauf oder vollständigen Longausstieg sein. Dabei reduziert Nora eine bestehende Aufwärtsposition.",
      "Ein Short dort wäre ein neuer Trade in die Gegenrichtung. Er braucht eigene Hinweise, Auslöser, Stop und Geldrechnung. Das vorhandene Longziel liefert für sich allein keine bestätigte Abwärtsbewegung.",
      "Ein Rückfall nach dem Ziel und ein neuer niedrigerer Hochversuch können bessere Zusatzinformationen liefern als nur der Kontakt. Auch diese Folge kann scheitern. Nora bewertet sie als neue Idee statt als automatische Fortsetzung der Gewinnmitnahme."
    ],
    "prompt": "Was ist für den Gegentrade zusätzlich erforderlich?",
    "answers": [
      "Eine eigene begründete Gegenidee mit Auslöser und Risikoplan.",
      "Nur der erfolgreiche Abschluss eines Longtrades.",
      "Ein Zielpreis ersetzt die komplette Shortregel."
    ],
    "rule": "Reduktion der bisherigen Position und neuer Gegentrade getrennt prüfen.",
    "diagram": "par8-reversal"
  },
  {
    "title": "Einen Linienbruch und niedrigeren Test zeitlich lesen",
    "summary": "Neue Gegenstärke kann den Kontext nach dem Ziel verändern.",
    "paragraphs": [
      "Im Wendefall erreicht Minute 9 ein Hoch 107,2. Danach fällt Minute 10 mit einem Tief 104,9 zurück. Unsere zuvor gewählte steigende Linie durch L 5=101,6 und L 7=103 läge in Minute 10 bei 105,1. Der Rückfall unterschreitet sie.",
      "Minute 11 erreicht danach nur 106,6 und bleibt unter 107,2. Das ist ein niedrigerer Hochtest. Die folgende fallende Minute unterstützt die neue Gegenidee weiter. Alle drei Informationen waren beim ersten Zielkontakt noch unbekannt.",
      "Eine Linie mit anderen Ankerpunkten könnte einen anderen Bruchzeitpunkt liefern. Nora nennt deshalb die Punkte und prüft zusätzlich die tatsächliche Körper- und Preisfolge. Ein Linienbruch allein garantiert keinen neuen Trend."
    ],
    "prompt": "Welcher zusätzliche Hinweis folgt nach dem Linienbruch?",
    "answers": [
      "Ein niedrigerer Hochtest 106,6 unter 107,2.",
      "Ein garantiertes Tagesende bei 102.",
      "Alle Informationen waren schon beim ursprünglichen Ausbruch bekannt."
    ],
    "rule": "Linienanker, Bruch, Test und Gegenanschluss als zeitliche Folge dokumentieren.",
    "diagram": "par8-reversal"
  },
  {
    "title": "Zwei Schübe können auch nur eine größere Korrektur abschließen",
    "summary": "Die höhere Zeitskala verändert den Zusammenhang.",
    "paragraphs": [
      "Auf dem Minutenchart kann die Bewegung nach oben wie ein erfolgreicher Ausbruch mit zweitem Schub aussehen. Auf einem größeren Zeitrahmen könnte derselbe Abschnitt innerhalb einer breiteren Abwärtskorrektur liegen.",
      "Für diese Zusatzdeutung braucht Nora tatsächlich bekannte Daten des größeren Rahmens. Sie darf nicht erst nach der Umkehr eine unsichtbare frühere Trendlinie erfinden. Ein klein erfolgreiches Ziel beweist keinen langfristigen Richtungswechsel.",
      "Wird später eine kräftige Gegenbewegung bestätigt, kann ihr eigener Plan einen größeren Rücklauf bis zur alten Ausbruchszone prüfen. Ohne diese Zusatzinformationen bleibt ein solcher Test nur eine Möglichkeit."
    ],
    "prompt": "Was benötigt eine Deutung als höhere Korrektur?",
    "answers": [
      "Bekannte Daten und benannte Bezüge des größeren Zeitrahmens.",
      "Nur den Namen zweiter Schub.",
      "Jeder Zielkontakt beendet automatisch jeden größeren Trend."
    ],
    "rule": "Größere Kontextdeutung mit tatsächlich vorhandenen Daten begründen.",
    "diagram": "par8-reversal"
  },
  {
    "title": "Die Projektion kann nach der Pause scheitern",
    "summary": "Der Gegenfall teilt dieselben ersten sieben Minuten.",
    "paragraphs": [
      "Der scheiternde Fall enthält denselben Rangeausbruch, Anschluss und Pausenrand 103. Danach fällt Minute 8 bis 100 und schließt 100,5. Minute 9 erreicht 97,7 und schließt 98. Das Lückenziel 107 wird in diesem Verlauf nicht erreicht.",
      "Schon der deutliche Rückfall unter die Ausbruchsgrenze 102 ist ein Gegenargument zur Fortsetzung. Ein persönlicher Stop kann vorher ausgelöst worden sein. Der frühere Treffer des näheren Rangeziels 106 macht den späteren Lückenplan nicht automatisch erfolgreich.",
      "Nora speichert deshalb auch diesen Gegenfall. Die unterschiedlichen Zielmethoden dürfen nicht nachträglich so zusammengelegt werden, dass irgendein früherer Treffer jeden späteren Fehlschlag überdeckt."
    ],
    "prompt": "Was unterscheidet Rangezieltreffer und späteren Lückenplan?",
    "answers": [
      "Es sind verschiedene Regeln und Informationsstände mit unterschiedlichen Ergebnissen.",
      "Jeder frühere Treffer macht alle späteren Trades erfolgreich.",
      "Der Rückfall unter 102 ist bedeutungslos."
    ],
    "rule": "Gegenfälle pro tatsächlich verwendeter Zielregel auswerten.",
    "diagram": "par8-failure"
  },
  {
    "title": "Den Abwärtslückenfall konsequent spiegeln",
    "summary": "Start 102 und Mitte 97,5 ergeben 93.",
    "paragraphs": [
      "Der gespiegelte Fall verwendet die Regel 200 minus Preis. Der ursprüngliche Start 98 wird zu 102. Die alte Aufwärtsgrenze 102 wird zum Abwärtsbezug 98; das Pausentief 103 wird zum Rücklaufhoch 97.",
      "Die Mitte zwischen 98 und 97 ist 97,5. Von Start 102 bis zu ihr sind es 4,5 Punkte abwärts. Dieselbe Strecke darunter ergibt 93. Die gespiegelte direkte Rangehöhe ergäbe dagegen 94.",
      "Nora benennt wieder die unterschiedliche Zielregel. Auch Stopseite und Auslöser müssen für einen Short korrekt wechseln. Der Chartpfeil allein genügt nicht zur vollständigen Spiegelung des Handelsplans."
    ],
    "prompt": "Welches Ziel liefert 2 mal 97,5 minus 102?",
    "answers": [
      "93,0.",
      "107,0, das frühere Aufwärtsziel.",
      "94,0 unter jeder Zielregel."
    ],
    "rule": "Abwärtsbezüge und verschiedene Zielmethoden vollständig spiegeln.",
    "diagram": "par8-bear"
  },
  {
    "title": "Ein spätes Ziel braucht einen passenden Zeithorizont",
    "summary": "Es bleiben im Modell nur noch zwei Minuten bis zum geplanten Ende.",
    "paragraphs": [
      "Im späten Abwärtsbeispiel steht der Kurs nach der Pause bei 94,1. Die Lückenprojektion liegt 93. Für diesen gesonderten Zeitfall nehmen wir an, dass noch zwei Minuten bis zum geplanten Ende der Position bleiben.",
      "Es fehlen 1,1 Punkte. Der Preis könnte diese Strecke schnell erreichen; er könnte sie auch bis zum eigenen Ende nicht zurücklegen. Die Richtungsidee beantwortet die Zeitfrage nicht automatisch.",
      "Nora legt fest, ob sie vor dem Ende aussteigt, eine Restposition regelgerecht länger halten kann oder den späten Einstieg auslässt. Sie verlängert den Zeithorizont nicht erst aus Frust, weil die schöne Zielgerade noch fehlt."
    ],
    "prompt": "Welche Zusatzfrage stellt das späte Ziel?",
    "answers": [
      "Ob die Reststrecke zum vorab geplanten Zeithorizont passt.",
      "Ob jedes Trendziel innerhalb von zwei Minuten garantiert folgt.",
      "Ob die Zeitbedingung nach Verlusten heimlich verschwinden darf."
    ],
    "rule": "Zielentfernung und Zeitbedingung gemeinsam planen.",
    "diagram": "par8-late"
  },
  {
    "title": "Eine Schubprojektion kann neben der Lückenprojektion stehen",
    "summary": "Ein eigener Fünfkerzenschub liefert einen weiteren Kandidaten.",
    "paragraphs": [
      "Im separaten Abwärtsfall fallen fünf starke Schlusskurse nacheinander von 108 über 106,104 und 102 auf 100. Der Schub begann bei 110. Die folgende kleine Pause hilft, sein vorläufiges Ende bei 100 zu markieren.",
      "Die direkte Eröffnung-Schluss-Strecke ist 10 Punkte lang. Vom letzten Schubschluss 100 nochmals 10 Punkte abgetragen ergibt 90. Im späteren Ausschnitt fällt der Kurs bis 90,1 und verfehlt 90 um eine Preisstufe 0,1.",
      "Das ist eine Schubregel wie im vorherigen Kapitel. Sie ist nicht dieselbe Methode wie eine Lückenmitte oder eine Rangehöhe. Nora kann die Kandidaten vergleichen, muss sie aber mit eigener Herkunft dokumentieren."
    ],
    "prompt": "Wie weit verfehlt das Tief 90,1 die Projektion 90?",
    "answers": [
      "Eine Modellpreisstufe von 0,1.",
      "Gar nicht, jeder nahe Preis ist exakt gleich.",
      "Zehn Punkte."
    ],
    "rule": "Schub-, Range- und Lückenprojektion mit ihren jeweiligen Ankern getrennt zählen.",
    "diagram": "par8-spike"
  },
  {
    "title": "Einen konkreten Rangeplan mit Kosten rechnen",
    "summary": "Einstieg 102,1, Stop 97,9 und Ziel 106 sind Modellpreise.",
    "paragraphs": [
      "Für eine reine Rechnung nehmen wir einen bestätigten Einstieg 102,1 an. Der Stop 97,9 liegt eine Preisstufe unter der Rangeunterkante 98. Das Ziel 106 stammt aus der Rangehöhe. Stopabstand und Zielentfernung betragen 4,2 und 3,9 Punkte.",
      "Ein Punkt pro Einheit entspricht im Modell einem Euro. Bei sechs Einheiten und pauschal 2 Euro Gesamtkosten ergibt der angenommene Stopausstieg 27,2 Euro Verlust. Der angenommene Zielausstieg ergibt 21,4 Euro Nettogewinn.",
      "Bei einem Budget 30 Euro passen sechs ganze Einheiten hinein; sieben wären mit 31,4 Euro bereits zu viel. Das sind Ausführungsszenarien, keine garantierten Preise oder nachgewiesene Trefferquote."
    ],
    "prompt": "Wie hoch ist der Modellverlust bei sechs Einheiten einschließlich 2 Euro Kosten?",
    "answers": [
      "27,2 Euro.",
      "25,2 Euro einschließlich aller Kosten.",
      "21,4 Euro, weil Ziel und Stop austauschbar sind."
    ],
    "rule": "Konkrete Preisstrecken, Menge und Kosten vor dem Einstieg zusammenrechnen.",
    "diagram": "par8-risk"
  },
  {
    "title": "Ein später Einstieg kann wenig Reststrecke übrig lassen",
    "summary": "105,9 bis 107 sind nur 1,1 Punkte.",
    "paragraphs": [
      "Ein späterer Einstieg 105,9 würde zum Lückenziel 107 nur noch 1,1 Punkte Platz haben. Mit einem Modellstop 102,9 läge der Preisabstand dagegen bei 3 Punkten.",
      "Ein früher starker Ausbruch macht dieses spätere Verhältnis nicht automatisch günstiger. Nora prüft die aktualisierte Stärke, die Kosten und die tatsächliche Ausführung. Vielleicht passt die Regel zu diesem Zeitpunkt nicht mehr.",
      "Auch ein größeres alternatives Ziel 109 darf nicht nur gewählt werden, um die Rechnung schöner aussehen zu lassen. Es benötigt den dazugehörigen belegten älteren Start und eine vorher definierte Regel."
    ],
    "prompt": "Wie groß ist die Reststrecke vom späteren 105,9 bis 107?",
    "answers": [
      "1,1 Punkte.",
      "4,2 Punkte wie bei einem anderen Stopplan.",
      "6,5 Punkte unabhängig vom aktuellen Preis."
    ],
    "rule": "Späte Preisbedingungen und Zielwahl ohne nachträgliches Schönrechnen prüfen.",
    "diagram": "par8-risk"
  },
  {
    "title": "Das Protokoll erhält die unterschiedlichen Prognosen",
    "summary": "Bekannte Daten, Zielmethode und tatsächlicher Trade bleiben getrennt.",
    "paragraphs": [
      "Nora notiert zunächst die Range 98 bis 102 mit den Projektionen 106 und 94. Nach dem Ausbruch und der ersten kleinen Pause ergänzt sie die Lückenränder 102 und 103, den Start 98 und das neue Ziel 107.",
      "Ein älterer Start 96, eine Spannenmitte oder ein negativer Test bekommen eigene Einträge mit Zeitpunkt und Regel. Für einen Trade kommen Auslöser, Stop, Menge, Kosten und geplantes Zeitende hinzu.",
      "Die Auswertung enthält Nähe, exakten Kontakt, Überschritt, Scheitern und tatsächlich bestätigte Orderdaten. Ein schöner Endchart darf nicht rückwirkend entscheiden, welcher frühere Plan angeblich gegolten hat."
    ],
    "prompt": "Was gehört zu einer überprüfbaren Zielprognose?",
    "answers": [
      "Zielmethode, Anker, Informationszeitpunkt und Gegenfälle.",
      "Nur die passendste Linie im Endchart.",
      "Jeder Preisbereich zählt automatisch als realisierter Gewinn."
    ],
    "rule": "Zielmethoden und frühere Informationsstände vollständig erhalten.",
    "diagram": "par8-risk"
  }
]).map(lesson=>({...lesson,steps:lesson.steps.map(step=>step.type==='diagram'&&step.scenario==='par8-profile'?{...step,caption:'Eigene erfundene Besuchszählung gleicher Zeitabschnitte · kein Volumenprofil und nicht aus den anderen Chartfällen berechnet.'}:step)}));
