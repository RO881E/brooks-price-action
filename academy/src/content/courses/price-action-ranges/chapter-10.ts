import { makeLessons } from './lessons';
export const rangesChapterTenLessons = makeLessons('chapter-10', 'Kapitel 10 · Weitere Preisbereiche mit Anziehungskraft', [
  {
    "title": "Was ein Preisbezug mit Anziehungskraft bedeutet",
    "summary": "Ein vorab bekannter Bereich kann später erneut gehandelt werden.",
    "paragraphs": [
      "Nora sucht im Chart Stellen, an denen später neue Entscheidungen entstehen könnten. Dazu gehören frühere Hochs, Rangegrenzen und berechnete Ziele. Der Ausdruck Anziehungskraft meint eine mögliche Rückkehr zu einem Preis, keine physikalische Kraft.",
      "Ein Test ist ein erneuter Besuch eines benannten Bereichs. Ein Kurs kann davor drehen, ihn genau erreichen oder darüber hinauslaufen. Auch nach dem Kontakt kann die Bewegung weitergehen.",
      "Nora ordnet wenige nachvollziehbare Bezüge nach Herkunft und Entfernung. Sie zeichnet nicht jede denkbare Linie ein. Der spätere Verlauf bleibt am ersten Entscheidungszeitpunkt verborgen."
    ],
    "prompt": "Was beschreibt Anziehungskraft hier?",
    "answers": [
      "Einen möglichen späteren Test eines bekannten Preisbereichs.",
      "Eine Pflicht des Kurses, jede Linie zu erreichen.",
      "Eine automatisch ausgeführte Gegenposition."
    ],
    "rule": "Bezug vorab benennen und Kontakt sowie Reaktion offenlassen.",
    "diagram": "par10-map"
  },
  {
    "title": "Mit dem laufenden Markt zum Bereich schauen",
    "summary": "Nach Minute 5 ist ein kräftiger Aufwärtsschub sichtbar.",
    "paragraphs": [
      "In unserem Hauptfall pendeln die ersten vier Minuten zwischen 98 und 102. Minute 5 steigt von 101,8 bis 107 und schließt bei 106,8. Der Kurs hat den vorherigen oberen Rand 102 deutlich überschritten.",
      "Ein höherer Preisbezug kann nun als mögliches Ziel in Bewegungsrichtung dienen. Nora verkauft nicht allein deshalb gegen den Schub, weil sie weiter oben eine Linie findet. Ein eigener Gegenversuch müsste erst sichtbar werden.",
      "Auch ein Einstieg in Schubrichtung braucht einen Plan. Ein entfernter Bezug garantiert keine ausreichende Reststrecke, passende Ausführung oder begrenztes Risiko. Auslassen bleibt möglich."
    ],
    "prompt": "Was rechtfertigt allein eine Linie über einem kräftigen Aufwärtsschub?",
    "answers": [
      "Eine Beobachtung beziehungsweise Zielidee, aber noch keinen Gegenverkauf.",
      "Einen sicheren sofortigen Short.",
      "Beliebig große Käufe ohne Schutz."
    ],
    "rule": "Bewegung, Zielidee und Gegenposition als eigene Fragen prüfen.",
    "diagram": "par10-big"
  },
  {
    "title": "Vortagspreise zuerst richtig abgrenzen",
    "summary": "Bekannter Vortag: Eröffnung 100, Hoch 109, Tief 97, Schluss 104.",
    "paragraphs": [
      "Für unsere Übung ist die Sitzung ausdrücklich als 09:00 bis 17:00 UTC definiert. Der abgeschlossene Vortag hat Eröffnung 100, Hoch 109, Tief 97 und Schluss 104. Diese vier Werte stammen aus einem getrennt vorgegebenen Kontextdatensatz.",
      "Die heutigen Minutenkerzen erzeugen die Vortagswerte nicht. Eine andere Sitzungsdefinition könnte andere Hochs, Tiefs oder Schlusswerte ergeben. Nora schreibt daher die verwendete Sitzung dazu.",
      "Der Schluss des laufenden Tages ist noch unbekannt. Er darf nicht wie ein bereits abgeschlossener Vortagsschluss in den frühen Plan eingehen. Herkunft und Verfügbarkeit gehören zu jeder Bezugslinie."
    ],
    "prompt": "Woher stammen die vier Vortagspreise?",
    "answers": [
      "Aus einem getrennten abgeschlossenen Kontext mit benannter Sitzung.",
      "Aus dem noch unbekannten heutigen Schluss.",
      "Automatisch aus den vier heutigen Kerzen."
    ],
    "rule": "Sitzung, Herkunft und Abschlusszeitpunkt eines Tagesbezugs nennen.",
    "diagram": "par10-day"
  },
  {
    "title": "Hoch und Tief des Vortags als äußere Bezüge lesen",
    "summary": "Vortagshoch 109 liegt über dem aktuellen Schluss 106,8.",
    "paragraphs": [
      "Nach Minute 5 beträgt die Reststrecke vom Schluss 106,8 bis zum Vortagshoch 109 noch 2,2 Punkte. Das Vortagstief 97 liegt auf der anderen Seite und ist kein gleich nahes Aufwärtsziel.",
      "Ein Handel über 109 würde einen Test oder eine Überschreitung dieses alten Hochs zeigen. Ob der Kurs danach zurückfällt oder weiter steigt, bleibt eine neue Beobachtung. Das Hoch selbst entscheidet diese Frage nicht.",
      "Nora prüft zunächst den in Bewegungsrichtung erreichbaren Bezug. Der andere Rand bleibt Hintergrund für einen anderen Verlauf. Sie behauptet keine gleiche Bedeutung aller vier Vortagswerte."
    ],
    "prompt": "Wie groß ist die Reststrecke von 106,8 bis 109?",
    "answers": [
      "2,2 Punkte.",
      "9 Punkte.",
      "0,2 Punkte."
    ],
    "rule": "Tagesränder nach Richtung und aktueller Entfernung beurteilen.",
    "diagram": "par10-day-after"
  },
  {
    "title": "Eröffnung und Schluss sind andere Tagesbezüge",
    "summary": "Die Preise 100 und 104 sind keine Tagesextreme.",
    "paragraphs": [
      "Die Vortagseröffnung 100 bezeichnet den ersten Preis der gewählten Sitzung, der Schluss 104 den letzten. Beide liegen zwischen dem Tief 97 und Hoch 109. Sie beantworten andere Fragen als die äußeren Ränder.",
      "Ein Rücklauf vom heutigen Schluss 106,8 zu 104 wäre ein Besuch des alten Schlusses. Er müsste weder den ganzen Vortagsbereich durchlaufen noch automatisch bei 104 drehen.",
      "Nora verwendet den passenden Bezug für ihre Hypothese. Wenn sie Schlussvergleich, Eröffnungslücke oder ein Tageshoch untersucht, nennt sie die jeweilige Größe. Eine unscharfe Beschriftung wie gestern führt leicht zu falschen Rechnungen."
    ],
    "prompt": "Was ist der Vortagsschluss 104?",
    "answers": [
      "Der letzte Preis der abgegrenzten alten Sitzung.",
      "Das Vortagshoch.",
      "Die heutige garantierte Untergrenze."
    ],
    "rule": "Eröffnung, Schluss und Extreme nicht unter derselben Beschriftung vermischen.",
    "diagram": "par10-day"
  },
  {
    "title": "Frühere Swingpunkte von beliebigen Kerzen unterscheiden",
    "summary": "Ein örtliches Hoch hat benachbarte niedrigere Hochs.",
    "paragraphs": [
      "Ein Swinghoch ist für eine gewählte Regel ein örtlicher Hochpunkt. Nora verlangt hier eine Kerze mit niedrigerem Hoch davor und danach. Erst nach der folgenden abgeschlossenen Kerze kann sie dieses Hoch so bestätigen.",
      "Im Hauptfall hat Minute 5 Hoch 107; Minute 4 hat 102 und Minute 6 hat 106,9. Nach Minute 6 ist 107 unter dieser einfachen Regel ein bestätigter Swingbezug. Nach Minute 5 war die folgende Kerze noch unbekannt.",
      "Ein späterer Rücklauf kann dieses Hoch testen. Ob daraus ein Doppeltest, ein Durchbruch oder eine Pause wird, benötigt neue Information. Größere Swingregeln würden andere Zeitfenster verwenden."
    ],
    "prompt": "Wann ist Hoch 107 unter der erklärten Nachbarregel bestätigt?",
    "answers": [
      "Erst nach dem Abschluss von Minute 6.",
      "Schon vor Minute 5.",
      "Erst wenn ein zukünftiger Gewinn bekannt ist."
    ],
    "rule": "Swingregel und Bestätigungszeitpunkt ausdrücklich festlegen.",
    "diagram": "par10-inside"
  },
  {
    "title": "Der alte Ausbruchspunkt kann wieder besucht werden",
    "summary": "Die Rangeoberkante 102 bleibt nach dem Ausbruch bekannt.",
    "paragraphs": [
      "Die ersten vier Minuten liefern den oberen Rangebezug 102. Der spätere Schub läuft darüber. Wenn der Markt danach zurückkommt, ist 102 ein möglicher Ausbruchstest: Ein früherer Rand wird erneut geprüft.",
      "Minute 7 handelt bis 101,6 und schließt bei 102,5. Sie greift also 0,4 Punkt unter die alte Grenze und endet wieder darüber. Der Test ist tiefer als ein exakter Kontakt bei 102.",
      "Das allein beweist keine dauerhafte Unterstützung. Nora braucht den weiteren Verlauf und einen eigenen Auslöser. Ein tieferer Kontakt kann sowohl vor einer Erholung als auch vor einem vollständigen Fehlausbruch auftreten."
    ],
    "prompt": "Wie weit greift Tief 101,6 unter den alten Rand 102?",
    "answers": [
      "0,4 Punkt.",
      "2,5 Punkte.",
      "Es bleibt oberhalb von 102."
    ],
    "rule": "Alten Ausbruchspunkt, Testtiefe und weitere Reaktion getrennt prüfen.",
    "diagram": "par10-test"
  },
  {
    "title": "Rangehöhe liefert einen vorab rechenbaren Bezug",
    "summary": "Range 98 bis 102 hat Höhe 4; die Aufwärtsprojektion ist 106.",
    "paragraphs": [
      "Zum Abschluss von Minute 4 ist die Range 98 bis 102 bekannt. Ihre Höhe beträgt 4 Punkte. Eine bedingte Verlängerung ab dem oberen Rand liefert 102 plus 4 gleich 106.",
      "Das Ziel lässt sich vorbereiten, bevor die Ausbruchskerze entsteht. In Minute 5 wird 106 später gehandelt. Wer erst nach dem Schluss 106,8 eine neue Position plant, kann 106 nicht mehr als noch vorausliegendes Aufwärtsziel behandeln.",
      "Nora behält den Bezug zur Auswertung. Sie nennt aber dessen Informationszeitpunkt und bereits erfolgten Kontakt. Ein rechnerisch richtiger Zielpreis kann für einen späten Einstieg längst hinter dem Markt liegen."
    ],
    "prompt": "Liegt 106 nach dem Schluss 106,8 noch als Aufwärtsziel voraus?",
    "answers": [
      "Nein, es wurde bereits gehandelt und liegt darunter.",
      "Ja, jede Projektion bleibt für immer voraus.",
      "Ja, weil die Range vier Punkte hoch ist."
    ],
    "rule": "Projektionsrechnung mit Zeitpunkt und bereits erfolgtem Kontakt verbinden.",
    "diagram": "par10-measure"
  },
  {
    "title": "Trendlinien brauchen gewählte Anker",
    "summary": "Im getrennten Trendfall liegen die Tiefs von Minute 1 und 3 bei 99 und 101.",
    "paragraphs": [
      "Der getrennte Trendfall verwendet neue Daten. Nora zieht eine Linie durch Tief 99 in Minute 1 und Tief 101 in Minute 3. Sie steigt um 1 Punkt je Minute. Ihr Wert in Minute 6 beträgt 104.",
      "Diese Linie ist ab dem bekannten zweiten Anker eine ausgewählte Orientierung. Sie wird nicht nachträglich an jeden neuen Docht angepasst. Zwei Anker erzeugen eine Gerade, beweisen aber keine zuverlässige Handelswirkung.",
      "Ein späterer Kontakt oder Bruch lässt sich mit dem dann gültigen Linienwert vergleichen. Ein höherer Preis allein kann eine steigende Linie verfehlen; Zeit und Preis müssen gemeinsam zur Rechnung gehören."
    ],
    "prompt": "Welchen Linienwert liefert die erklärte Gerade in Minute 6?",
    "answers": [
      "104.",
      "101 unabhängig von der Minute.",
      "107,6, automatisch das spätere Hoch."
    ],
    "rule": "Linienanker und zeitabhängigen Linienwert vor einem Test festhalten.",
    "diagram": "par10-line"
  },
  {
    "title": "Die Kanalgrenze ist eine eigene parallele Linie",
    "summary": "Eine Parallele durch Hoch 103 in Minute 2 liegt in Minute 6 bei 107.",
    "paragraphs": [
      "Die steigende Trendlinie hat in Minute 2 den Wert 100. Das dortige Hoch liegt bei 103. Eine dazu parallele obere Grenze wird deshalb 3 Punkte höher gezeichnet.",
      "In Minute 6 liegt die Trendlinie bei 104 und die obere Kanalgrenze bei 107. Das Hoch dieser Minute beträgt 107,6 und überschreitet die gewählte Parallele um 0,6 Punkt.",
      "Nora nennt das eine Überschreitung, nicht automatisch das Ende der Aufwärtsbewegung. Die Linie ist eine eigene Konstruktionsregel. Sie darf nicht rückblickend so verschoben werden, dass genau das spätere Hoch zur idealen Grenze wird."
    ],
    "prompt": "Wie weit liegt Hoch 107,6 über der Kanalgrenze 107?",
    "answers": [
      "0,6 Punkt.",
      "3 Punkte.",
      "Es liegt darunter."
    ],
    "rule": "Kanalrand und tatsächliche Überschreitung mit derselben Ankerregel messen.",
    "diagram": "par10-channel"
  },
  {
    "title": "Der Beginn eines Kanals kann zum Rücklaufbereich werden",
    "summary": "Im Hauptfall beginnt nach dem Schub eine Pause mit Tief 104,8.",
    "paragraphs": [
      "Minute 5 ist der kräftige Schub. Minute 6 ist kleiner und handelt bis 104,8. Nora wählt diese erste Pause als Beginn eines möglichen Kanalabschnitts. Der Name Kanalbeginn ist hier eine Arbeitshypothese mit erklärtem Zeitpunkt.",
      "Minute 7 fällt nicht nur zu 104,8 zurück, sondern weiter bis 101,6. Der ausgesuchte Beginn wird durchlaufen. Ein Rücktest des Kanalbeginns braucht daher keine punktgenaue Wende an seinem ersten Tief zu sein.",
      "Andere Regeln könnten den Kanal anders beginnen lassen. Nora gibt die gewählte Pause an, statt den Start erst nach dem Ergebnis zu suchen. Ein möglicher Rücklaufbereich ist weder Pflichtziel noch Schutzgarantie."
    ],
    "prompt": "Stoppt Minute 7 exakt am gewählten Beginn 104,8?",
    "answers": [
      "Nein, ihr Tief 101,6 liegt deutlich darunter.",
      "Ja, der Name Kanalbeginn garantiert das.",
      "Ja, sobald eine Pause sichtbar ist."
    ],
    "rule": "Kanalbeginn nach einer erklärten Regel wählen und Durchlaufen zulassen.",
    "diagram": "par10-test"
  },
  {
    "title": "Klassische Kurslücken haben zwei benannte Ränder",
    "summary": "Im getrennten Lückenfall endet die alte Spanne bei 100,2; die neue beginnt bei 102,8.",
    "paragraphs": [
      "Der Lückenfall zeigt eine letzte Minute der alten Sitzung und drei Minuten der neuen. Die alte Kerze hat Hoch 100,2. Die erste neue Kerze hat Tief 102,8. Zwischen den beiden Spannen liegen 2,6 Punkte ohne Überlappung.",
      "Nora notiert beide Ränder als mögliche Rücklaufbezüge. Die nächste neue Minute erreicht 101,5 und damit den Zwischenraum, aber noch nicht den unteren Rand 100,2. Eine teilweise Annäherung ist keine vollständige Schließung.",
      "Die danach gezeigte Minute handelt bis 100,1 und erreicht damit auch den unteren Rand. Diese spätere Information wird nur im vollständig aufgedeckten Vergleich gezeigt, nicht im frühen Lückenbild."
    ],
    "prompt": "Ist bei Tief 101,5 bereits der untere Lückenrand 100,2 erreicht?",
    "answers": [
      "Nein, der Rücklauf liegt noch 1,3 Punkte darüber.",
      "Ja, jeder Besuch des Zwischenraums schließt die Lücke.",
      "Ja, weil die Eröffnung höher war."
    ],
    "rule": "Teilkontakt, vollständigen Rücklauf und jeweiligen Wissensstand unterscheiden.",
    "diagram": "par10-gap"
  },
  {
    "title": "Eine Durchschnittslücke ist keine ungehandelte klassische Lücke",
    "summary": "Der festgehaltene SMA 3 nach Minute 6 beträgt rund 105,33.",
    "paragraphs": [
      "Im getrennten Trendfall heißen die letzten drei Schlüsse nach Minute 6: 104, 105 und 107. Ihr einfacher Mittelwert, der SMA 3, ist 316 geteilt durch 3, also rund 105,33. Die Kerze 6 hat Tief 104 und überlappt diesen Wert.",
      "Im Hauptfall ergibt der Durchschnitt der Schlüsse 2 bis 4 den vorher bekannten SMA 3 von 101,1. Das Tief der großen Kerze 5 liegt bei 101,8, also 0,7 Punkt darüber. Trotzdem überlappt ihre Spanne den alten Hochpreis 102: Das ist keine klassische Lücke zwischen den Kerzen. Ein Kerzenbereich vollständig oberhalb eines vorher bekannten Durchschnitts ist ein anderer Abstandsbezug. Der Name bedeutet nicht, dass im ganzen Zwischenraum keine Preise gehandelt wurden.",
      "Minute 7 fällt bis 104,5 und handelt damit durch den ausdrücklich eingefrorenen Durchschnittswert nach Minute 6. Der neue Durchschnitt nach Minute 7 ist rund 105,67. Nora verwechselt diese zwei Zeitpunkte nicht."
    ],
    "prompt": "Welche Aussage passt zum SMA 3 nach Minute 6?",
    "answers": [
      "Er beträgt rund 105,33 und wird hier als vorher bekannter Bezug verwendet.",
      "Er beweist eine klassische ungehandelte Lücke.",
      "Er war schon vor den drei verwendeten Schlüssen bekannt."
    ],
    "rule": "Durchschnittsdefinition und Berechnungszeitpunkt vor einem Abstandstest nennen.",
    "diagram": "par10-average"
  },
  {
    "title": "Alte Rangegrenzen und die Mitte trennen",
    "summary": "Der frühere Bereich 98 bis 102 hat Mitte 100.",
    "paragraphs": [
      "Ein früherer Seitwärtsbereich liefert mindestens drei verschiedene Bezüge: unterer Rand 98, oberer Rand 102 und arithmetische Mitte 100. Die Mitte liegt jeweils 2 Punkte von den Rändern entfernt.",
      "Ein Rücklauf in die Mitte ist eine andere Beobachtung als ein erneuter Test des oberen Randes. Die Mitte ist nicht automatisch der Preis mit dem größten Handelsvolumen oder den meisten Zeitbesuchen.",
      "Nora kann sie als Orientierung bei späterem Pendeln nutzen. Ohne zusätzliche Daten darf sie weder ein Volumenprofil erfinden noch eine sichere neutrale Erfolgsquote aus der geometrischen Mitte ableiten."
    ],
    "prompt": "Was ergibt die Rechnung 98 plus 102, geteilt durch 2?",
    "answers": [
      "Die geometrische Mitte 100.",
      "Ein bewiesenes Volumenmaximum.",
      "Ein sicherer zukünftiger Schluss."
    ],
    "rule": "Rangegröße, Ränder, geometrische Mitte und tatsächliche Aktivität getrennt halten.",
    "diagram": "par10-range"
  },
  {
    "title": "Eine enge überlappende Pause kann viele falsche Starts liefern",
    "summary": "Der getrennte Engbereich reicht von 99,5 bis 101.",
    "paragraphs": [
      "Im Engbereich liegen vier kleine Körper nahe beieinander. Ihre Spannen überlappen deutlich, und Dochte zeigen Bewegungen nach oben wie nach unten. Die äußersten bekannten Ränder sind 99,5 und 101.",
      "Der Begriff Barbwire beschreibt solche unübersichtlichen, eng verflochtenen Kerzen. Für Nora bedeutet er zunächst eine Beobachtung: Die kleinen Richtungswechsel liefern wenig klare Strecke bis zum nächsten Rand.",
      "Die Mitte liegt bei 100,25. Ein Breakout oder ein Test müsste erst sichtbar werden. Nora kann warten, statt jeden kleinen Körperwechsel als neues Trendangebot zu behandeln."
    ],
    "prompt": "Was ist bei diesem Engbereich zuerst zu beachten?",
    "answers": [
      "Überlappung und kurze Reststrecken bis zu den Rändern.",
      "Jeder Körperwechsel ist ein sicherer neuer Trend.",
      "Die Mitte ist automatisch ein perfekter Einstieg."
    ],
    "rule": "Enge überlappende Kerzen als unsicheren Bereich mit begrenzter Strecke lesen.",
    "diagram": "par10-tight"
  },
  {
    "title": "Eine letzte Flagge erkennt man erst am weiteren Verlauf",
    "summary": "Im Flaggenfall ist die Pause 104,8 bis 106,8 zunächst nur eine Pause.",
    "paragraphs": [
      "Nach einem Anstieg von 98 bis ungefähr 106 entsteht im getrennten Fall eine Pause zwischen 104,8 und 106,8. Zum Abschluss von Minute 4 weiß Nora nicht, ob diese Pause die letzte vor einer größeren Gegenbewegung sein wird.",
      "Ein späterer Ausbruch erreicht in Minute 5 Hoch 108. Anschließend kehrt der Markt zur Pause zurück; Minute 7 handelt bis 102,8 unter ihrem unteren Rand. Erst dieser weitere Verlauf stützt die rückblickende Einordnung als mögliche letzte Flagge.",
      "Nora markiert den Rücklauf zur Pause und den Bruch der anderen Seite gesondert. Eine gewöhnliche Pause darf im frühen Ausschnitt nicht bereits den Namen eines garantiert bevorstehenden Trendendes tragen."
    ],
    "prompt": "Ist die Pause nach Minute 4 schon sicher die letzte Flagge?",
    "answers": [
      "Nein, die spätere Rückkehr und Gegenbewegung sind noch unbekannt.",
      "Ja, jede kleine Pause ist die letzte.",
      "Ja, ihr Hoch liefert den späteren Schluss."
    ],
    "rule": "Vorläufige Pause und spätere Einordnung als letzte Flagge trennen.",
    "diagram": "par10-flag-start"
  },
  {
    "title": "Die Rückkehr zur Flagge kann tiefer weiterlaufen",
    "summary": "Minute 7 schließt bei 103,2 unter dem Pausenrand 104,8.",
    "paragraphs": [
      "Im vollständigen Flaggenvergleich fällt Minute 6 zurück in den alten Bereich. Minute 7 unterschreitet 104,8 und schließt bei 103,2. Der Rücklauf endet also nicht schon beim ersten erneuten Kontakt mit der Pause.",
      "Der alte Bereich ist weiterhin ein nachvollziehbarer Bezug. Seine begrenzende Wirkung wird hier jedoch überwunden. Wer dort eine Gegenbewegung handeln möchte, kann nicht allein auf den Namen Flagge vertrauen.",
      "Nora wertet Kontakt, Rückkehr in den Bereich und Bruch nach unten als getrennte Ereignisse. Im Trendfortsetzungsfall hätten dieselben frühen Minuten anders weitergehen können. Die gezeigte Variante ist keine feste Eintrittswahrscheinlichkeit."
    ],
    "prompt": "Was zeigt Schluss 103,2 im Vergleich zu 104,8?",
    "answers": [
      "Einen Schluss unter der vorherigen unteren Pausengrenze.",
      "Eine vollständige Aufwärtsfortsetzung.",
      "Einen nie erreichten Rücklauf."
    ],
    "rule": "Rückkehr zum Bereich und Ausbruch an der anderen Seite einzeln prüfen.",
    "diagram": "par10-flag-return"
  },
  {
    "title": "Große Kerzen liefern eine ganze Spanne",
    "summary": "Minute 5 steigt von 101,8 bis 106,8 und hat Hoch 107.",
    "paragraphs": [
      "Die große steigende Kerze hat Eröffnung 101,8, Tief 101,8, Hoch 107 und Schluss 106,8. Der Körper ist 5 Punkte groß, die ganze Spanne 5,2 Punkte. Am unteren Ende hat sie in diesen Übungsdaten keinen Docht.",
      "Das Gegenteil ihres oberen Endes ist das Tief 101,8. Käufer könnten ihren Schutz unter diesem Tief planen. Nora kann es deshalb als möglichen Rücklaufbezug markieren, ohne tatsächliche fremde Stops zu kennen.",
      "Der große Körper zeigt einen kräftigen Schub in der abgeschlossenen Minute. Er garantiert weder einen sofortigen Rücklauf noch, dass jede spätere Unterschreitung nur eine kurze Störung sein wird."
    ],
    "prompt": "Wie groß ist der Körper aus 101,8 und 106,8?",
    "answers": [
      "5 Punkte.",
      "5,2 Punkte, unter jeder Körperdefinition.",
      "0,2 Punkt."
    ],
    "rule": "Körper, gesamte Spanne und gegenüberliegenden Kerzenrand unterscheiden.",
    "diagram": "par10-big"
  },
  {
    "title": "Die Inside-Bar ist zunächst nur eine kleinere Pause",
    "summary": "Minute 6 liegt mit 104,8 bis 106,9 vollständig innerhalb von Minute 5.",
    "paragraphs": [
      "Die folgende Kerze eröffnet bei 106,8 und schließt bei 105,2. Ihr Hoch 106,9 bleibt unter 107, ihr Tief 104,8 über 101,8. Damit ist ihre gesamte Spanne innerhalb der vorigen Kerze: eine Inside-Bar.",
      "Sie kann als erster Hinweis auf eine Pause oder Gegenbewegung betrachtet werden. Ein beispielhafter Verkauf unter ihrem Tief wäre aber erst später ausgelöst. Nach Minute 6 weiß Nora noch nicht, wie weit ein Rücklauf gehen wird.",
      "Wer weiterhin auf eine Fortsetzung des größeren Schubs schaut, kann ebenfalls auf eine neue Kaufbedingung warten. Die Inside-Bar entscheidet allein weder die Richtung noch einen passenden Geldbetrag für die Position."
    ],
    "prompt": "Warum heißt Minute 6 hier Inside-Bar?",
    "answers": [
      "Ihre Hoch-Tief-Spanne liegt vollständig in der vorherigen Spanne.",
      "Ihr Körper ist immer grün.",
      "Sie bestätigt schon die spätere Wende."
    ],
    "rule": "Innenlage, erste Gegenidee und spätere Auslösung getrennt halten.",
    "diagram": "par10-inside"
  },
  {
    "title": "Ein Stopbereich wird im Modell unterschritten",
    "summary": "Modellstop 101,7 liegt eine Preisstufe unter dem großen Kerzentief 101,8.",
    "paragraphs": [
      "Eine Modellpreisstufe beträgt 0,1 Punkt. Ein geplanter Schutz eine Stufe unter dem Tief 101,8 liegt daher bei 101,7. Minute 7 fällt bis 101,6: Sie unterschreitet sowohl das Kerzentief als auch den Modellstop.",
      "Der Schluss 102,5 liegt wieder über dem alten Kerzentief und der Rangegrenze 102. Das ist eine sichtbare Rückkehr nach der Unterschreitung. Daraus lässt sich aber nicht beweisen, wer dort tatsächlich ausgestoppt wurde oder absichtlich Stops suchte.",
      "Nora sagt deshalb Preis unter dem angenommenen Schutzbereich. Eine reale Stopfüllung kann durch Orderart, Handelsbedingungen und Slippage abweichen. Ein späteres Zurückkommen macht einen vorher ausgeführten Stopverlust nicht rückgängig."
    ],
    "prompt": "Welcher Modellstop liegt eine Preisstufe unter 101,8?",
    "answers": [
      "101,7.",
      "101,8.",
      "102,5."
    ],
    "rule": "Angenommene Stoplage, Preisüberschreitung und reale Füllung auseinanderhalten.",
    "diagram": "par10-test"
  },
  {
    "title": "Ein tiefer Test kann trotzdem ein höheres Tief bilden",
    "summary": "101,6 liegt unter der großen Kerze, aber über dem früheren Tief 99,8.",
    "paragraphs": [
      "Das Tief der großen Kerze 101,8 wird in Minute 7 um 0,2 Punkt unterschritten. Gleichzeitig bleibt Tief 101,6 noch 1,8 Punkte über dem Tief 99,8 aus Minute 4. Die zwei Bezugspunkte beantworten verschiedene Strukturfragen.",
      "Ein höheres Tief im größeren Ablauf kann also mit einem Stopkontakt unter einer einzelnen Kerze zusammenfallen. Nora gibt den Vergleichspunkt an, statt nur höheres Tief oder neues Tief ohne Bezug zu schreiben.",
      "Minute 8 steigt danach bis 105 und schließt bei 104,7. Das ergänzt die Erholung, ist aber erst nach ihrem Abschluss bekannt. Eine Wende konnte nicht schon aus dem Tief der Minute 7 sicher vorhergesagt werden."
    ],
    "prompt": "Kann 101,6 gleichzeitig unter 101,8 und über 99,8 liegen?",
    "answers": [
      "Ja, die beiden Aussagen benutzen verschiedene Bezugspunkte.",
      "Nein, jeder Stopkontakt ist ein neues Gesamttief.",
      "Nein, ein höheres Tief muss jede ältere Kerze übertreffen."
    ],
    "rule": "Lokale Kerzenränder und größere Swingstruktur mit benannten Ankern vergleichen.",
    "diagram": "par10-rebound"
  },
  {
    "title": "Eine neue Kaufbedingung entsteht erst nach dem Test",
    "summary": "Nach Minute 8 ist ein Kaufplan über Hoch 105 bei 105,1 bekannt.",
    "paragraphs": [
      "Minute 8 hat Hoch 105, Tief 102,1 und Schluss 104,7. Nora kann nun einen Kaufplan eine Preisstufe über 105 vorbereiten, also 105,1. Das ist eine neue Bedingung nach dem Test, keine Rettung einer früheren ausgestoppten Position.",
      "Minute 9 handelt bis 107,2 und erreicht den Auslösepreis. Für eine Beispielrechnung wird eine tatsächliche Ausführung zu 105,1 ausdrücklich angenommen. Das Kerzenbild selbst belegt diese Füllung nicht.",
      "Die neue Position braucht einen neuen Schutz- und Kostenplan. Frühere Verluste bleiben in der Tagesbilanz. Nora addiert nicht unbemerkt einen erfolgreichen Wiedereinstieg und lässt den vorausgegangenen Verlust verschwinden."
    ],
    "prompt": "Wann kann der Kaufplan über Hoch 105 festgelegt werden?",
    "answers": [
      "Nach dem Abschluss der Signalminute 8.",
      "Schon vor deren noch unbekanntem Hoch.",
      "Erst nachdem alle Gewinne feststehen."
    ],
    "rule": "Neue Auslösung und neue Bilanz nach einem Stopkontakt eigenständig planen.",
    "diagram": "par10-entry"
  },
  {
    "title": "Der Gegenfall fällt weiter durch den großen Kerzenrand",
    "summary": "Im anderen Verlauf schließt Minute 7 bei 99,5 und Minute 8 bei 97,5.",
    "paragraphs": [
      "Der Gegenfall teilt genau die ersten sechs Minuten des Hauptfalls. Minute 7 fällt dann bis 99 und schließt bei 99,5; Minute 8 handelt bis 97 und schließt bei 97,5. Die kleine Rückkehr nach dem Test aus dem Hauptfall erscheint hier nicht.",
      "Der große Kerzenrand 101,8 wurde auch hier unterschritten. Der Verlauf zeigt aber weiteren Abwärtsanschluss. Die Annahme unter die Stops und dann sofort wieder hoch ist damit keine allgemein gültige Regel.",
      "Nora vergleicht die Wege ab demselben frühen Wissensstand. Beide hatten eine große steigende Kerze und eine Inside-Bar. Der Unterschied wurde erst danach sichtbar; der frühe Chart darf nicht nach dem späteren Ergebnis beschriftet werden."
    ],
    "prompt": "Garantiert die Unterschreitung von 101,8 eine anschließende Erholung?",
    "answers": [
      "Nein, der Gegenfall zeigt fallenden Anschluss.",
      "Ja, der große Körper erzwingt sie.",
      "Ja, wenn der Stop weit genug verschoben wird."
    ],
    "rule": "Gleiche frühe Struktur mit Erholung und weiterem Scheitern vergleichen.",
    "diagram": "par10-failure"
  },
  {
    "title": "Es muss keinen sofortigen Test der großen Kerze geben",
    "summary": "Ein weiterer Verlauf steigt nach Minute 5 direkt weiter bis 110,2.",
    "paragraphs": [
      "Im Fortsetzungsvergleich bleiben die ersten fünf Minuten gleich. Die nächste Kerze eröffnet bei 106,8, hat Tief 106,5, Hoch 110,2 und Schluss 110. Der Markt läuft unmittelbar weiter nach oben.",
      "Das Tief 101,8 der großen Kerze wird in diesem Ausschnitt nicht wieder besucht. Eine mögliche Anziehungskraft des gegenüberliegenden Randes ist keine Pflicht, die vor jeder weiteren Bewegung erfüllt werden müsste.",
      "Nora hält auch diesen Fall fest. Wer ausschließlich Stopkontakte mit späterer Erholung sammelt, würde die unmittelbaren Fortsetzungen und tieferen Fehlschläge aus seiner Auswertung entfernen."
    ],
    "prompt": "Was fehlt im unmittelbaren Fortsetzungsvergleich?",
    "answers": [
      "Ein sofortiger Rücktest des großen Kerzentiefs 101,8.",
      "Ein Handel oberhalb von 107.",
      "Eine neue abgeschlossene Kerze."
    ],
    "rule": "Auch ausbleibende Tests als eigenständiges Ergebnis zählen.",
    "diagram": "par10-no-test"
  },
  {
    "title": "Nach Rücksetzern kann das alte Trendextrem wieder Ziel werden",
    "summary": "Nach der Erholung bleibt das alte Hoch 107 ein bekannter Bezug.",
    "paragraphs": [
      "Im Hauptfall hat Minute 5 Hoch 107 erreicht. Nach dem Rücklauf und der neuen Erholung ist dieses alte Extrem erneut ein möglicher Aufwärtsbezug. Es wird nicht erst durch ein späteres neues Hoch erfunden.",
      "Minute 9 erreicht 107,2 und schließt bei 107. Das alte Extrem wurde überschritten, aber die Überschreitung allein sagt nichts über die weitere Dauer der Bewegung. Danach könnte eine Pause, ein tiefer Rücklauf oder mehr Anschluss folgen.",
      "Nora legt fest, ob sie schon die Nähe, den exakten Kontakt oder den Handel darüber zählt. Ein Ziel am alten Extrem ist nicht automatisch dieselbe Regel wie ein Ausbruchseinstieg darüber."
    ],
    "prompt": "Was zeigt Hoch 107,2 am alten Extrem 107?",
    "answers": [
      "Eine Überschreitung um 0,2 Punkt.",
      "Einen nicht erreichten Kontakt.",
      "Eine endgültige Wende."
    ],
    "rule": "Altes Trendextrem als Ziel und neuen Ausbruch darüber als eigene Regel behandeln.",
    "diagram": "par10-entry"
  },
  {
    "title": "Typische Gewinnstrecken bleiben marktabhängige Hypothesen",
    "summary": "Ab Modellkauf 105,1 liegen 1 und 3 Punkte höher bei 106,1 und 108,1.",
    "paragraphs": [
      "Trader können feste Gewinnstrecken verwenden, beispielsweise 1 oder 3 Punkte ab einer definierten Ausführung. Bei Kauf 105,1 ergibt das 106,1 beziehungsweise 108,1. Solche Ziele stammen aus einer Handelsregel, nicht aus einem alten Chart-Hoch.",
      "Wenn viele Marktteilnehmer ähnliche Regeln benutzen, könnte dort Interesse entstehen. Aus unserem Kerzenbild kennen wir deren Verteilung aber nicht. Es gibt keine für jedes Instrument und jeden Tag verbindliche übliche Gewinnstrecke.",
      "Nora nennt Markt, Preisstufe, Einstieg und Auswertungszeitraum. Gebühren und die aktuelle Bewegungsbreite beeinflussen, ob ein kleines Ziel für ihre eigene Position überhaupt sinnvoll ist."
    ],
    "prompt": "Welcher Preis liegt 3 Punkte über 105,1?",
    "answers": [
      "108,1.",
      "107,0 unter jeder Regel.",
      "101,8."
    ],
    "rule": "Feste Gewinnstrecken als erklärte marktabhängige Regeln rechnen.",
    "diagram": "par10-profit"
  },
  {
    "title": "Eine Strecke in Höhe des Risikos ist ein Planwert",
    "summary": "Kauf 105,1 und Stop 101,5 ergeben 3,6 Punkte Preisrisiko.",
    "paragraphs": [
      "Eine beispielhafte Ausführung zu 105,1 mit Schutz bei 101,5 hat Abstand 3,6 Punkte. Eine gleich große Aufwärtsstrecke ergibt den Zielpreis 108,7. Man nennt das ein Ziel von einem R vor Kosten, wobei R die anfängliche Risikostrecke meint.",
      "Ein breiterer Stop erzeugt rechnerisch ein weiter entferntes Ein-R-Ziel. Er macht den Markt nicht verpflichtet, diese Strecke zu liefern. Zielrechnung und erreichbare Bewegung bleiben unterschiedliche Fragen.",
      "Auch ein Preisgewinn von einem R entspricht nach Kosten nicht genau einem Netto-Geldverlust bis zum Stop. Nora schreibt dazu, welche Bezugsgröße sie meint: Punkte, Brutto-Geld oder Netto-Geld."
    ],
    "prompt": "Welches Ein-R-Preisziel ergibt sich ab 105,1 mit Abstand 3,6?",
    "answers": [
      "108,7.",
      "101,5.",
      "110,0 automatisch durch eine runde Zahl."
    ],
    "rule": "Risikostrecke projizieren, ohne daraus einen Anspruch an den Markt abzuleiten.",
    "diagram": "par10-risk"
  },
  {
    "title": "Preisziele in Geld übersetzen",
    "summary": "Sieben Einheiten ergeben 27,2 Euro Modellverlust einschließlich 2 Euro Kosten.",
    "paragraphs": [
      "Für diesen erfundenen Markt gilt 1 Euro je Punkt und Einheit. Mit Kauf 105,1, Stop 101,5 und pauschal 2 Euro Gesamtkosten verlieren sieben Einheiten im Modell 7 mal 3,6 plus 2 gleich 27,2 Euro. Das Budget ist 30 Euro.",
      "Acht Einheiten würden 30,8 Euro erfordern und liegen darüber. Bei einem Ausstieg zu 107 ergeben sieben Einheiten 11,3 Euro Nettogewinn; bei 110 sind es 32,3 Euro. Beide Ausstiege sind getrennte Alternativen für die volle Menge.",
      "Diese Preise und Füllungen sind angenommene Rechnungsszenarien. Slippage kann das Ergebnis verändern. Ein bekanntes Ziel muss mit Strecke, Kosten und Menge zusammenpassen, bevor Nora eine Position eröffnet."
    ],
    "prompt": "Wie viele ganze Einheiten passen hier in das Budget 30 Euro?",
    "answers": [
      "Sieben.",
      "Acht.",
      "Dreißig unabhängig vom Punktabstand."
    ],
    "rule": "Geldbudget und Nettoauszahlungen vor der Order mit tatsächlichen Bezugsgrößen rechnen.",
    "diagram": "par10-risk"
  },
  {
    "title": "Größere Zeitebenen liefern eigene abgeschlossene Bezüge",
    "summary": "Drei-Minuten-Kerze 1 hat Hoch 104; sie entsteht aus Minuten 1 bis 3.",
    "paragraphs": [
      "Im getrennten Trendfall fassen wir jeweils drei Minuten zusammen. Die erste Drei-Minuten-Kerze hat Eröffnung 100, Hoch 104, Tief 99 und Schluss 103. Die zweite hat Eröffnung 103, Hoch 107,6, Tief 102 und Schluss 107.",
      "Das Hoch 104 der ersten größeren Kerze ist erst nach Minute 3 vollständig bekannt. Die zweite größere Kerze ist während Minute 4 noch offen. Ihr endgültiges Hoch 107,6 darf dort nicht schon als fertiger Bezug verwendet werden.",
      "Tages-, Wochen- oder Monatsbezüge benötigen dieselbe saubere Abgrenzung ihrer eigenen Daten. Ein größerer Chart kann auch Durchschnitte, Kurslücken oder Trendlinien liefern. Seine größere Kerzengröße und ein eigener Stop verändern das Geldrisiko."
    ],
    "prompt": "Wann ist das Hoch der zweiten Drei-Minuten-Kerze abgeschlossen?",
    "answers": [
      "Nach Minute 6.",
      "Bereits beim Beginn von Minute 4.",
      "Schon nach Minute 1."
    ],
    "rule": "Größere Kerzen wirklich aggregieren und offene Abschnitte nicht vorwegnehmen.",
    "diagram": "par10-higher"
  },
  {
    "title": "Fibonacci-Rechnungen brauchen einen ausdrücklich gewählten Swing",
    "summary": "Swing 99,8 bis 107 hat Höhe 7,2 Punkte.",
    "paragraphs": [
      "Für einen separaten Rechenvergleich wählt Nora Tief 99,8 aus Minute 4 und Hoch 107 aus Minute 5. Die Strecke beträgt 7,2 Punkte. Ein Rücklauf um 50 Prozent ab dem Hoch liegt bei 103,4.",
      "Bei 61,8 Prozent lautet die Rechnung 107 minus 0,618 mal 7,2 gleich 102,5504. Der nächstgelegene ausführbare Modellpreis in Stufen von 0,1 ist 102,6. Eine Verlängerung um dieselbe Höhe über 107 ergäbe 114,2.",
      "Diese verschiedenen Projektionsregeln sind mathematische Bezüge, keine bewiesenen Wendewahrscheinlichkeiten. Ein anderer Swingstart verändert alle Ergebnisse. Nora benennt die Anker und die Rundungsregel, statt nach dem besten Treffer zu suchen."
    ],
    "prompt": "Was ergibt der 50-Prozent-Rücklauf aus dem gewählten Swing?",
    "answers": [
      "103,4.",
      "102,6 unter jeder Prozentregel.",
      "114,2, die Verlängerung nach oben."
    ],
    "rule": "Prozent, Anker, Richtung und Preisstufenrundung vorab nennen.",
    "diagram": "par10-fib"
  },
  {
    "title": "Runde Zahlen können besucht und überschritten werden",
    "summary": "Im Hauptfall erreicht Minute 10 die runde Zahl 110 und handelt bis 110,2.",
    "paragraphs": [
      "Eine runde Zahl wie 110 ist ohne komplizierte Messung sichtbar. Nora kann sie als zusätzlichen Beobachtungsbereich notieren. Ihre Bedeutung hängt aber vom Markt, Preisniveau und Umfeld ab.",
      "Minute 10 handelt bis 110,2 und schließt bei 110. Die Zahl wird also überschritten. Der nächste Verlauf kann sie wieder unterschreiten oder weiter steigen; sie ist keine präzise unsichtbare Mauer.",
      "Eine runde Zahl kann mit einem alten Tageshoch oder einem Messziel nahe zusammenliegen. Daraus folgt kein mechanischer Sicherheitsbonus. Nora prüft, welche Bezüge tatsächlich verschiedene Informationen liefern."
    ],
    "prompt": "Beweist der Kontakt bei 110 eine sofortige Wende?",
    "answers": [
      "Nein, Kontakt und weitere Reaktion sind getrennte Beobachtungen.",
      "Ja, jede runde Zahl beendet den Trend.",
      "Ja, schon das Notieren der Zahl löst eine Order aus."
    ],
    "rule": "Runde Zahlen als mögliche Bereiche und nicht als garantierte Barrieren nutzen.",
    "diagram": "par10-round"
  },
  {
    "title": "Mehrere Linien sind nicht automatisch mehrere unabhängige Gründe",
    "summary": "Rangehöhe und Range-Mitte stammen aus denselben vier Minuten.",
    "paragraphs": [
      "Die Rangegrenze 102, die Mitte 100 und das Höhe-Ziel 106 kommen aus derselben Auswahl 98 bis 102. Diese drei Linien tragen unterschiedliche Rechenrollen, aber keine drei voneinander unabhängigen Datengrundlagen.",
      "Das getrennt vorgegebene Vortagshoch 109 hat dagegen eine andere Herkunft. Auch eine runde Zahl 110 ist eine weitere Regel. Trotzdem wäre eine genaue gemeinsame Erfolgsquote erst aus einer passenden Stichprobe abzuleiten.",
      "Nora wählt wenige Bezüge, nennt ihren Ursprung und legt ihre Priorität vor dem Kontakt fest. Wenn sie jedes neue Ergebnis mit einer weiteren Linie erklären kann, ist ihre ursprüngliche Hypothese kaum noch überprüfbar."
    ],
    "prompt": "Sind drei Linien aus derselben Range drei unabhängige Beweise?",
    "answers": [
      "Nein, sie teilen dieselbe Datengrundlage.",
      "Ja, jede neue Farbe verdoppelt die Sicherheit.",
      "Ja, solange alle Linien gerade sind."
    ],
    "rule": "Gemeinsame Daten erkennen und keine Sicherheit aus der Linienanzahl erfinden.",
    "diagram": "par10-map"
  },
  {
    "title": "Ein sehr spätes Ziel kann nach Kosten unattraktiv sein",
    "summary": "Kauf 109,8 bis Ziel 110 liefert bei fünf Einheiten nur 1 Euro brutto.",
    "paragraphs": [
      "Ein späterer hypothetischer Kauf zu 109,8 hat zur runden Zahl 110 noch 0,2 Punkt. Bei fünf Einheiten und 1 Euro je Punkt entsteht 1 Euro Bruttogewinn. Mit 2 Euro Gesamtkosten wäre das Ergebnis minus 1 Euro.",
      "Ein beispielhafter Stop 108,4 läge 1,4 Punkte entfernt. Der Modellverlust wäre 7 plus 2 gleich 9 Euro. Das nahe Ziel kann also schon im Trefferfall netto negativ sein.",
      "Nora lässt diese Variante aus, wenn genau 110 ihr festes Ziel ist. Sie verschiebt es nicht nachträglich auf 111, nur um die Rechnung freundlicher aussehen zu lassen. Ein weiteres Ziel wäre ein neuer Plan mit neuen Annahmen."
    ],
    "prompt": "Welches Nettoergebnis liefert das erklärte Ziel 110?",
    "answers": [
      "Minus 1 Euro.",
      "Plus 1 Euro nach Kosten.",
      "Plus 9 Euro."
    ],
    "rule": "Reststrecke nach Kosten prüfen und unpassende Trades bewusst auslassen.",
    "diagram": "par10-late"
  },
  {
    "title": "Signal- und Einstiegskerze können verschiedene Schutzbezüge liefern",
    "summary": "Signalkerze 8 hat Tief 102,1; Einstiegskerze 9 hat Tief 104,5.",
    "paragraphs": [
      "Nach einer angenommenen Ausführung bei 105,1 unterscheiden wir die vorher abgeschlossene Signalkerze 8 und die Kerze 9, in der die Auslösung stattfindet. Ihre Tiefs 102,1 und 104,5 sind nicht identisch.",
      "Eine Preisstufe darunter liefert 102,0 beziehungsweise 104,4. Der erste Stop lässt mehr Preisraum; der zweite ist enger. Das vollständige Tief der Einstiegskerze 9 ist aber erst nach ihrem Abschluss bekannt. Es kann nicht schon vor der Auslösung als sicherer Endwert eingeplant werden.",
      "Nora benennt, wann ein Schutzpreis verfügbar wird, und ob eine spätere Anpassung erlaubt ist. Vermutete fremde Schutzbereiche bleiben Hypothesen. Eine engere Variante garantiert keinen kleineren tatsächlichen Verlust bei abweichender Ausführung."
    ],
    "prompt": "Welcher Schutzbezug ist vor Minute 9 schon vollständig bekannt?",
    "answers": [
      "Das Tief der abgeschlossenen Signalkerze 8.",
      "Das endgültige Tief der noch offenen Einstiegskerze 9.",
      "Jeder spätere Tiefpunkt im Chart."
    ],
    "rule": "Signal- und Einstiegskerze samt Verfügbarkeit und Schutzregel getrennt führen.",
    "diagram": "par10-entry"
  },
  {
    "title": "Der eigene Einstiegspreis kann ebenfalls wieder getestet werden",
    "summary": "Im eigenen Rücktestvergleich erreicht Minute 10 Tief 105 unter Modellkauf 105,1.",
    "paragraphs": [
      "Dieser Vergleich teilt die ersten neun Minuten des Hauptfalls. Anschließend fällt Minute 10 von 107 bis 105 und schließt bei 105,4. Der angenommene neue Kaufpreis 105,1 wird damit erneut gehandelt.",
      "Dieser Rücktest ist etwas anderes als der alte Ausbruchspunkt 102 oder das alte Kerzentief 101,8. Ein Kontakt am eigenen Einstieg ist vor Kosten rechnerisch ausgeglichen; netto können Gebühren und Slippage weiterhin einen Verlust erzeugen.",
      "Ein Stop am Einstieg würde nach einer eigenen Regel geprüft. Die bloße Rückkehr zum Kaufpreis ist kein Beweis, dass alle Trader dort handeln oder dass der Markt anschließend wieder steigt. Ein ursprünglicher Einstieg und eine später geplante neue Order bleiben getrennt."
    ],
    "prompt": "Welcher Preis wird hier erneut getestet?",
    "answers": [
      "Der angenommene Kaufpreis 105,1.",
      "Nur die alte Rangegrenze 102.",
      "Das Vortagstief 97."
    ],
    "rule": "Eigenen Einstiegsrücktest nicht mit anderen Chartbezügen oder Netto-Break-even verwechseln.",
    "diagram": "par10-entry-retest"
  },
  {
    "title": "Bei einer großen fallenden Kerze liegt der Gegenrand oben",
    "summary": "Die Spiegelung 200 minus Preis verwandelt Tief 101,8 in Hoch 98,2.",
    "paragraphs": [
      "Wir spiegeln den Hauptfall mit 200 minus jedem Preis. Die große Kerze 5 fällt nun von 98,2 auf 93,2, hat Tief 93 und Hoch 98,2. Ihr Körper bleibt 5 Punkte groß, aber die relevante obere Schutzseite liegt nun oberhalb von 98,2.",
      "Ein Modellstop eine Preisstufe darüber wäre 98,3. Der gespiegelte Test in Minute 7 erreicht Hoch 98,4 und schließt bei 97,5 wieder darunter. Die mögliche Gegenbewegung an einem großen Kerzenrand funktioniert damit als spiegelbildliche Idee.",
      "Auch auf dieser Seite gibt es keinen garantierten Stoptest mit sicherer Rückkehr. Nora spiegelt die Preisdefinitionen und die Schutzseite zusammen. Ein Short benötigt Käufe zum Schließen, wo ein Long Verkäufe benötigt."
    ],
    "prompt": "Wo liegt der gespiegelte Modellstop über Hoch 98,2?",
    "answers": [
      "Bei 98,3.",
      "Bei 101,7 unverändert.",
      "Bei 93,2, dem Schluss."
    ],
    "rule": "Gegenrand, Schutzseite und Ausstiegsrichtung bei der Spiegelung gemeinsam tauschen.",
    "diagram": "par10-mirror"
  },
  {
    "title": "Dein Preisplan bleibt auch bei einem verfehlten Bereich prüfbar",
    "summary": "Herkunft, Zeitpunkt, Kontaktregel und Risiko werden vor dem Ergebnis notiert.",
    "paragraphs": [
      "Nora notiert wenige bekannte Bezüge mit ihrer Herkunft: alter Tagespreis, Swing, Ausbruchspunkt, Projektionsziel oder feste Gewinnstrecke. Dazu kommen der aktuelle Preis, eine gegebenenfalls festgelegte Zone und das Auswertungsende.",
      "Beim weiteren Verlauf zählt sie verfehlte Bereiche, Kontakte, Überschreitungen und Gegenanschluss getrennt. Eigene Ausführungen und Kosten gehören in eine zusätzliche Handelsbilanz. Ein schönes Bild ersetzt keine Stichprobe aller vergleichbaren Fälle.",
      "Der vollständige Plan beantwortet zwei Fragen: Wo möchte sie die Reaktion beobachten, und unter welcher eigenen Bedingung würde sie handeln? Wenn keine passende Bedingung eintritt, ist Warten das korrekte protokollierte Ergebnis."
    ],
    "prompt": "Was macht den Plan später überprüfbar?",
    "answers": [
      "Vorab definierte Bezüge, Kontaktregel, Zeitgrenze und eigener Risikoplan.",
      "Eine erst nach dem Treffer gefundene Linie.",
      "Nur erfolgreiche Kontakte dokumentieren."
    ],
    "rule": "Beobachtungsbereich und Handelsbedingung vor dem Ergebnis nachvollziehbar festhalten.",
    "diagram": "par10-map"
  }
]);

// Erst der Vergleich deckt den späteren Kontakt am unteren Lückenrand auf.
const gapLesson = rangesChapterTenLessons.find(l => l.title === 'Klassische Kurslücken haben zwei benannte Ränder')!;
gapLesson.steps.splice(2, 0, {id: `${gapLesson.id}.gap-comparison`, type: 'diagram', title: 'Späterer Vergleich: unterer Rand erreicht', scenario: 'par10-gap-filled', caption: 'Erfundener Markt · letzte Minute der alten Sitzung und drei Minuten der neuen · Preise in Punkten.', observations: ['Die dritte neue Minute erreicht Tief 100,1.', 'Der untere Lückenrand 100,2 ist jetzt erreicht; frühere Entscheidungen kennen diese Kerze noch nicht.']});
for (const l of rangesChapterTenLessons) for (const step of l.steps) if (step.type === 'diagram') {
 if (step.scenario === 'par10-higher') step.caption = 'Erfundener Markt · zwei abgeschlossene Drei-Minuten-Kerzen aus sechs eigenen Minuten · Preise in Punkten.';
 else if (step.scenario === 'par10-gap') step.caption = 'Erfundener Markt · letzte Minute der alten Sitzung und zwei Minuten der neuen · Preise in Punkten.';
}

const averageLesson = rangesChapterTenLessons.find(l => l.title === 'Eine Durchschnittslücke ist keine ungehandelte klassische Lücke')!;
averageLesson.steps.splice(2, 0, {id: `${averageLesson.id}.average-gap`, type: 'diagram', title: 'Separater Vergleich: Abstand zum vorher bekannten Durchschnitt', scenario: 'par10-average-gap', caption: 'Erfundener Hauptfall · fünf abgeschlossene Minuten · eingefrorener SMA 3 nach Minute 4.', observations: ['SMA aus den Schlüssen 2 bis 4: 101,1; Tief 5: 101,8.', '0,7 Punkt Abstand zum vorher bekannten Durchschnitt; Überlappung mit altem Kerzenhoch 102.']});
