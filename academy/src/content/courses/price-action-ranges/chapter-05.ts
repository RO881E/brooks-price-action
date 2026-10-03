import { makeLessons } from './lessons';
export const rangesChapterFiveLessons = makeLessons('chapter-05', 'Kapitel 5 · Fehlausbrüche, Rücksetzer und Tests', [
  {
    "title": "Ein Ausbruch ist der Anfang einer Prüfung",
    "summary": "Die Grenze 100 ist bekannt; die spätere Richtung bleibt zunächst offen.",
    "paragraphs": [
      "Nora betrachtet vier abgeschlossene Minuten in einer Range zwischen 98 und 100. In Minute 5 steigt der Kurs bis 101,2 und schließt bei 101,0. Damit hat er die vorher festgelegte obere Grenze 100 überschritten.",
      "Dieses erste Ereignis heißt Ausbruch. Noch offen ist, ob weitere steigende Kerzen folgen, der Markt zur Grenze zurückkehrt oder wieder längere Zeit innerhalb der alten Range handelt. Die erste Kerze entscheidet diese Fragen nicht allein.",
      "Nora speichert den Ausschnitt bis Minute 5. Spätere Kerzen darf sie erst verwenden, wenn sie abgeschlossen sind. So kann sie später vergleichen, welche Vermutung zu diesem frühen Zeitpunkt begründet war."
    ],
    "prompt": "Was ist nach Minute 5 bereits belegt?",
    "answers": [
      "Der Kurs hat die bekannte Grenze 100 überschritten.",
      "Die nächsten drei Minuten werden steigen.",
      "Der Ausbruch hat jeden späteren Test bestanden."
    ],
    "rule": "Ausbruch und späteres Ergebnis getrennt benennen.",
    "diagram": "par5-start"
  },
  {
    "title": "Rücksetzer, Test und Umkehr auseinanderhalten",
    "summary": "Ein Rücklauf ist sichtbar, sein endgültiges Ergebnis erst später.",
    "paragraphs": [
      "Ein Rücksetzer ist eine Bewegung gegen den vorherigen Schub. Nach einem Aufwärtsschub wird der Kurs zeitweise tiefer gehandelt. Ein Ausbruchstest ist ein Rücklauf in die Nähe eines benannten Ausbruchsbereichs. Nicht jeder kleine Rücksetzer erreicht diesen Bereich.",
      "Eine Umkehr geht weiter: Der Markt entwickelt einen Verlauf in die Gegenrichtung. Ein fallender Abschnitt allein beweist diese neue Richtung noch nicht. Nora beobachtet deshalb sowohl die Tiefe des Rücklaufs als auch die Kerzen danach.",
      "Beim ersten Rücklauf können Käufer eine Pause und Verkäufer den Beginn einer Umkehr sehen. Nora muss sich nicht sofort für eine Geschichte entscheiden. Sie formuliert Bedingungen, unter denen die eine oder andere Erklärung mehr Unterstützung erhält."
    ],
    "prompt": "Welcher Rücklauf ist zusätzlich ein Ausbruchstest?",
    "answers": [
      "Ein Rücklauf in die Nähe des ausdrücklich benannten Ausbruchsbereichs.",
      "Jede fallende Kerze an irgendeinem Preis.",
      "Nur ein Rücklauf, der später sicher Gewinn bringt."
    ],
    "rule": "Bewegung, getesteten Bezug und späteres Ergebnis unterscheiden.",
    "diagram": "par5-test"
  },
  {
    "title": "Warum der erste Rücklauf zwei Deutungen erlaubt",
    "summary": "Ein Umkehrversuch kann selbst scheitern.",
    "paragraphs": [
      "Nach dem Ausbruch bis 101,8 fällt Minute 7 auf 100,2 und schließt bei 100,6. Verkäufer konnten den Kurs zurückdrängen. Ob sie den ganzen Anstieg rückgängig machen, wissen wir noch nicht.",
      "Steigt der Markt danach wieder, bleibt der Rücklauf eine Pause im Aufwärtsverlauf. Fällt er dagegen kräftig in die Range zurück und bleibt dort, gewinnt die Deutung als Fehlausbruch an Gewicht. Beide Wege beginnen mit einer Gegenbewegung.",
      "Manche beschreiben schon die erste Gegenbewegung als gescheiterten Ausbruchsversuch. Für unsere Übung nennt Nora sie zunächst Rücklauf oder Umkehrversuch. Das Wort soll nicht vortäuschen, das spätere Ergebnis sei bereits bekannt."
    ],
    "prompt": "Was kann aus einem gescheiterten Umkehrversuch werden?",
    "answers": [
      "Ein Rücksetzer innerhalb einer fortgesetzten Ausbruchsbewegung.",
      "Ein rückwirkend verschwundener Rücklauf.",
      "Eine sichere Umkehr in jedem Fall."
    ],
    "rule": "Den vorläufigen Namen nicht mit dem endgültigen Ausgang verwechseln.",
    "diagram": "par5-test"
  },
  {
    "title": "Dieselbe Vorgeschichte kann verschieden weitergehen",
    "summary": "Die Fälle teilen Minuten 1 bis 5, unterscheiden sich danach.",
    "paragraphs": [
      "Im Fortsetzungsfall folgt auf Minute 5 eine weitere steigende Minute mit Schluss 101,6. Der Rücklauf beginnt erst danach. Im Vergleichsfall fällt bereits Minute 6 von 101,0 auf einen Schluss von 99,1 zurück.",
      "Beide Fälle haben denselben ursprünglichen Ausbruch über 100. Die unterschiedliche Folgekerze verändert jedoch die Beurteilung. Nora untersucht neue Hinweise, statt ihre erste Meinung gegen die sichtbare Veränderung zu verteidigen.",
      "Die erfolgreiche Fortsetzung darf den ersten Ausbruch im Nachhinein nicht sicher erscheinen lassen. Genau dieselben bis dahin bekannten Daten standen auch vor dem scheiternden Fall zur Verfügung. Eine Auswertung muss beide Wege enthalten."
    ],
    "prompt": "Bis zu welcher Minute stimmen beide Fälle überein?",
    "answers": [
      "Bis einschließlich Minute 5.",
      "Bis zum endgültigen Ausstieg.",
      "Sie haben überhaupt keine gemeinsame Vorgeschichte."
    ],
    "rule": "Vergleiche mit identischem frühem Informationsstand verwenden.",
    "diagram": "par5-failure"
  },
  {
    "title": "Starker Schub und ruhiger Rücklauf vergleichen",
    "summary": "Die Gegenbewegung ist kleiner als der vorherige Anstieg.",
    "paragraphs": [
      "Im Fortsetzungsfall schließen Minuten 5 und 6 bei 101,0 und 101,6. Ihre Körper sind deutlich aufwärts gerichtet. Minute 7 hat dagegen einen kleineren fallenden Körper von 101,6 auf 100,6.",
      "Nora vergleicht die Geschwindigkeit, Körpergröße, Überlappung und Schlusslage. Ein kleinerer Rücklauf nach kräftigen steigenden Kerzen passt eher zu einer Pause als ein sofortiger, ähnlich großer Gegenschub. Das ist eine begründete Einordnung, keine gemessene Trefferquote.",
      "Auch eine zunächst ruhige Pause kann sich später ausweiten. Nora benötigt daher eine Bedingung für die Fortsetzung und eine für das Verwerfen ihrer Idee. Sie liest nicht nur die Farbe der letzten Kerze."
    ],
    "prompt": "Welche Gegenbewegung spricht eher für eine ruhige Pause?",
    "answers": [
      "Ein kleinerer Rücklauf nach einem kräftigen Schub.",
      "Ein gleich großer Gegenschub wird grundsätzlich ignoriert.",
      "Die Körperfarbe allein genügt immer."
    ],
    "rule": "Schub und Gegenbewegung im selben Maßstab vergleichen.",
    "diagram": "par5-test"
  },
  {
    "title": "Ein kräftiger Rückfall verdient Gewicht",
    "summary": "Minute 6 schließt im Vergleichsfall wieder innerhalb der Range.",
    "paragraphs": [
      "Im scheiternden Fall erreicht Minute 6 noch 101,1, fällt aber bis 98,9 und schließt bei 99,1. Der Schluss liegt deutlich unter der Ausbruchsgrenze 100. Der große fallende Körper nimmt einen erheblichen Teil des Ausbruchsschubs zurück.",
      "Minute 7 schließt danach bei 98,7. Dieser zusätzliche Abwärtsanschluss unterstützt die Rückkehr in die Range. Er ist ein stärkeres Gegenargument als ein einzelner kurzer Stich unter die Grenze.",
      "Nora bezeichnet diesen gezeigten Verlauf als Fehlausbruch mit Abwärtsanschluss. Sie leitet daraus nicht ab, dass jede Rückkehr unter 100 genauso verlaufen muss. Andere Tests können tief sein und trotzdem wieder nach oben drehen."
    ],
    "prompt": "Welcher zusätzliche Hinweis unterstützt den Fehlausbruch?",
    "answers": [
      "Ein weiterer tieferer Schluss in Minute 7.",
      "Nur das Hoch von Minute 5.",
      "Die spätere Richtung ist schon vor Minute 6 bekannt."
    ],
    "rule": "Gegenschub und anschließende Bestätigung zusammen lesen.",
    "diagram": "par5-failure"
  },
  {
    "title": "Bei gleich starken Gegenargumenten warten",
    "summary": "Die unentschlossene Minute liefert noch keine klare Fortsetzung.",
    "paragraphs": [
      "Im offenen Vergleichsfall folgt auf Minute 5 eine Minute mit O101,0, H101,1, L100,3 und C100,8. Sie liegt im Bereich der Ausbruchskerze und zeigt wenig Veränderung zwischen Eröffnung und Schluss.",
      "Käufer haben die Grenze bisher gehalten; Verkäufer haben den Anstieg zunächst gebremst. Keine der beiden Beobachtungen darf verschwinden. Nora kann auf einen deutlicheren Ausbruch aus dieser kleinen Pause warten.",
      "Die zusätzliche Kerze kann den Preisvorteil eines früheren Einstiegs verringern. Sie kann aber auch einen vorschnellen Schluss verhindern. Abwarten ist eine konkrete Entscheidung, wenn die eigene Regel noch nicht erfüllt ist."
    ],
    "prompt": "Welche Entscheidung ist bei fehlender Regelbestätigung nachvollziehbar?",
    "answers": [
      "Auf neue Informationen warten.",
      "Eine Richtung als sicher erklären.",
      "Beide gegensätzlichen Trades ohne Risikoplan eröffnen."
    ],
    "rule": "Offene Fälle dürfen offen bleiben.",
    "diagram": "par5-open"
  },
  {
    "title": "Ein Test ist eine Preiszone",
    "summary": "Exakter Kontakt mit 100 ist nicht erforderlich.",
    "paragraphs": [
      "Im Hauptfall endet der Rücklauf zunächst bei 100,2. Die vorherige Ausbruchsgrenze liegt bei 100. Der Markt kommt also bis auf 0,2 Punkt an sie heran, ohne sie exakt zu berühren.",
      "Nora nennt vorab einen Übungsbereich von 99,8 bis 100,3 rund um diese Grenze. Das Tief 100,2 liegt darin. Diese Bandbreite ist eine Modellregel, keine feste Vorgabe für jedes Instrument.",
      "Die passende Zone hängt unter anderem von der Preisstufe und der üblichen Schwankung ab. Nora macht sie nicht erst nachträglich so groß, dass jede beliebige Wende als gelungener Test gezählt werden kann."
    ],
    "prompt": "Liegt das Tief 100,2 in der Übungszone 99,8 bis 100,3?",
    "answers": [
      "Ja, auch ohne exakten Kontakt mit 100.",
      "Nein, nur genau 100 zählt.",
      "Ja, weil jede mögliche Zahl darin liegt."
    ],
    "rule": "Testzone vor dem Ergebnis festlegen.",
    "diagram": "par5-test"
  },
  {
    "title": "Welche Grenze wird überhaupt getestet?",
    "summary": "Rangegrenze, Signalhoch und Kerzentief sind verschiedene Bezüge.",
    "paragraphs": [
      "Die obere Rangegrenze liegt bei 100. Minute 4, die Kerze direkt vor dem Ausbruch, hat ein Hoch von 99,8. Das Tief der Ausbruchskerze 5 liegt bei 99,4. Diese drei Preise sind nicht austauschbar.",
      "Ein Rücklauf auf 100,2 kommt der Rangegrenze nahe. Ein tieferer Rücklauf auf 99,7 handelt bereits unter dem Signalhoch 99,8, bleibt aber noch über dem Kerzentief 99,4. Nora benennt den jeweils gemeinten Bezug.",
      "Später können auch frühere Hochs, Tiefs oder der Ursprung einer Bewegung wichtig werden. Statt viele Linien ungeordnet einzuzeichnen, priorisiert Nora die wenigen Bereiche, die zu ihrer konkreten Frage passen."
    ],
    "prompt": "Welcher Preis ist das Tief der Ausbruchskerze im Modell?",
    "answers": [
      "99,4.",
      "100,0, weil alle Grenzen gleich sind.",
      "101,8, das spätere Hoch."
    ],
    "rule": "Jeden Test mit einer ausdrücklich benannten Grenze beschreiben.",
    "diagram": "par5-levels"
  },
  {
    "title": "Widerstand kann beim Rücklauf Unterstützung werden",
    "summary": "Entscheidend ist die Reaktion an der alten Grenze.",
    "paragraphs": [
      "Vor dem Ausbruch endeten mehrere Anstiege nahe 100. Nora nennt diesen Bereich Widerstand: Dort kam der Aufstieg bisher nicht dauerhaft weiter. Nach einem Ausbruch kann derselbe Bereich beim Rücklauf als Unterstützung wirken.",
      "Im Hauptfall endet der Rücklauf bei 100,2 und der Kurs steigt in Minute 8 wieder. Dieses Verhalten passt zu einem Wechsel der Rolle. Die alte Grenze ist jedoch keine Wand, die den Kurs zwingend aufhalten muss.",
      "Nora trennt die erwartete Rolle von ihrer Prüfung. Erst die sichtbare Stabilisierung und der erneute Anstieg unterstützen die Idee. Ein eingezeichneter Unterstützungsbereich allein ist noch keine bestätigte Kaufentscheidung."
    ],
    "prompt": "Was unterstützt hier die neue Rolle als Unterstützung?",
    "answers": [
      "Stabilisierung nahe 100 und anschließender Anstieg.",
      "Die Linie wurde grün eingefärbt.",
      "Jeder Preis oberhalb von 100 muss dauerhaft steigen."
    ],
    "rule": "Eine erwartete Unterstützungsrolle an der Reaktion prüfen.",
    "diagram": "par5-resume"
  },
  {
    "title": "Mögliche Käufer und Verkäufer erklären den Test",
    "summary": "Teilnehmermotive sind plausible Erklärungen des gleichen Rücklaufs.",
    "paragraphs": [
      "Nach einem Aufwärtsschub könnten einige bereits investierte Käufer Gewinne mitnehmen. Gleichzeitig könnten Verkäufer auf ein Scheitern setzen. Beide Tätigkeiten können einen Rücklauf unterstützen, obwohl ihre Motive verschieden sind.",
      "Am Ausbruchsbereich könnten neue Käufer einsteigen und frühere Verkäufer ihre Shortposition zurückkaufen. Beide handeln dann auf der Kaufseite. Ein Short-Rückkauf bedeutet, eine zuvor verkaufte Position durch einen Kauf zu schließen.",
      "Der Kurs zeigt uns die Preisreaktion, nicht die persönliche Absicht jedes Beteiligten. Nora nutzt diese Erklärungen, um verschiedene Kräfte zu verstehen. Sie behauptet nicht, aus einer Kerze die genaue Zusammensetzung der Kaufseite zu kennen."
    ],
    "prompt": "Welche Handlung kann einen Rückkauf auf der Kaufseite erzeugen?",
    "answers": [
      "Das Schließen einer bestehenden Shortposition.",
      "Nur das Eröffnen einer neuen Longposition.",
      "Eine Stoplinie ohne tatsächlichen Auftrag."
    ],
    "rule": "Mögliche Motive erklären, sichtbare Reaktion gesondert prüfen.",
    "diagram": "par5-resume"
  },
  {
    "title": "Ein Signal nach dem Test ist noch kein Einstieg",
    "summary": "Der Auslöser liegt im Modell über dem Hoch der Testkerze.",
    "paragraphs": [
      "Minute 7 hat H101,7, L100,2 und C100,6. Nora prüft eine Fortsetzungsregel: Erst ein Handel eine Preisstufe über ihrem Hoch soll die neue Aufwärtsbewegung auslösen. Bei einer Stufe von 0,1 liegt diese Schwelle bei 101,8.",
      "Nach dem Abschluss von Minute 7 kennt sie diese Werte. Minute 8 erreicht 102,0 und schließt bei 101,9. Damit wird die Preisbedingung später tatsächlich überschritten. Die Testkerze war zuvor lediglich der Bezug für die geplante Regel.",
      "Ein ausgelöster Preis ist noch keine Bestätigung ihrer eigenen Ordermenge und Ausführung. Im Übungsprotokoll hält Nora deshalb geplante Schwelle und tatsächlich bestätigten Einstieg getrennt fest."
    ],
    "prompt": "Wo liegt die Modellschwelle eine Stufe über H7=101,7?",
    "answers": [
      "101,8.",
      "100,2, am Tief der Testkerze.",
      "101,7, ohne Überschreitung."
    ],
    "rule": "Signal, Auslöser und bestätigten Einstieg auseinanderhalten.",
    "diagram": "par5-resume"
  },
  {
    "title": "Preisrisiko nach dem Test ausrechnen",
    "summary": "Der Beispielstop liegt unter dem Rücksetzertief.",
    "paragraphs": [
      "Für eine Rechnung nehmen wir einen bestätigten Einstieg bei 101,8 an. Nora plant den Stop bei 100,1, eine Preisstufe unter dem Testtief 100,2. Der Preisabstand beträgt 1,7 Punkte.",
      "Im erfundenen Modell entspricht ein Punkt je Einheit einem Euro. Bei zehn Einheiten sind das 17 Euro Preisrisiko vor Kosten. Ein gedachtes Ziel bei 103,5 wäre ebenfalls 1,7 Punkte entfernt. Es ist ein Planpreis, kein bereits erreichter Kurs.",
      "Bei einem Budget von 20 Euro und pauschal 2 Euro Gesamtkosten bleiben 18 Euro für den Preisabstand. Zehn ganze Einheiten passen mit 19 Euro Modellgesamtverlust hinein; elf wären mit 20,7 Euro bereits zu viel."
    ],
    "prompt": "Wie viele ganze Einheiten passen in dieses Modellbudget?",
    "answers": [
      "Zehn: 17 Euro Preisrisiko plus 2 Euro Kosten.",
      "Elf: Kosten spielen keine Rolle.",
      "Zwanzig, weil das Ziel gleich weit entfernt ist."
    ],
    "rule": "Stopbezug, Menge und Kosten gemeinsam rechnen.",
    "diagram": "par5-risk"
  },
  {
    "title": "Eine Zone kann halten und dein Stop trotzdem fallen",
    "summary": "Marktidee und persönlicher Ausstieg sind unterschiedliche Prüfungen.",
    "paragraphs": [
      "Im tiefen Vergleichsfall fällt Minute 7 bis 99,7. Sie unterschreitet damit die Ausbruchsgrenze 100 und auch einen möglichen Einstieg 100,1. Danach steigt Minute 8 bis 102,1 und schließt bei 101,9.",
      "Ein Schutzstop genau am Einstieg 100,1 würde bei diesem Preisverlauf berührt. Ein tatsächlicher Ausstieg hängt von Orderart und Ausführung ab. Die spätere Fortsetzung macht den zuvor geplanten Stop nicht rückwirkend unberührt.",
      "Nora kann mit ihrem ursprünglichen Plan ausgeschieden sein, obwohl die breitere Fortsetzungsidee später funktioniert. Sie bewertet daher die Marktstruktur und die konkrete Handelsregel getrennt. Eine schöne spätere Kerze ersetzt keine ehrliche Abrechnung."
    ],
    "prompt": "Was kann trotz späterer Fortsetzung geschehen?",
    "answers": [
      "Ein enger Stop am Einstieg kann vorher getroffen werden.",
      "Jeder Stop bleibt automatisch unberührt.",
      "Der frühere Verlust verschwindet rückwirkend."
    ],
    "rule": "Marktidee und eigene Ausstiegsregel getrennt auswerten.",
    "diagram": "par5-deep"
  },
  {
    "title": "Ein Stop am Einstieg ist netto nicht immer null",
    "summary": "Gebühren und abweichende Ausführung bleiben Teil der Rechnung.",
    "paragraphs": [
      "Nora hat im Modell zehn Einheiten zu 100,1 gekauft und später genau zu 100,1 verkauft. Die reine Preisdifferenz ist null. Bei 2 Euro Gesamtkosten bleibt aber ein Nettoverlust von 2 Euro.",
      "Liegt der bestätigte Ausstieg stattdessen bei 100,0, entsteht zusätzlich 1 Euro Preisverlust: 0,1 Punkt mal zehn Einheiten. Zusammen mit den Kosten sind es 3 Euro Verlust. Ein Stop am Einstieg garantiert diesen exakten Preis nicht.",
      "Der Ausdruck Break-even-Stop bezeichnet häufig eine Stopposition am Einstieg. Er ist eine Kurzbeschreibung des Plans. Wer das Ergebnis verstehen will, braucht ausgeführte Preise, Menge und Kosten."
    ],
    "prompt": "Wie hoch ist der Nettoverlust bei Einstieg und Ausstieg 100,1 und 2 Euro Kosten?",
    "answers": [
      "2 Euro.",
      "0 Euro unabhängig von Kosten.",
      "17 Euro, der ursprüngliche Stopabstand."
    ],
    "rule": "Break-even-Stop und tatsächlich kostenfreies Ergebnis unterscheiden.",
    "diagram": "par5-deep"
  },
  {
    "title": "Mehr Platz benötigt eine neue Mengenrechnung",
    "summary": "Einen Stop nicht nachträglich aus Angst verschieben.",
    "paragraphs": [
      "Ein Stop bei 100,1 kann im tiefen Test getroffen werden. Eine alternative, vorher geplante Regel könnte mehr Platz unter dem Ausbruchsbereich lassen, etwa bis 99,3. Sie prüft eine andere Ausstiegsbedingung.",
      "Bei gleichem Einstieg steigt damit der Abstand und bei gleicher Menge das Geldrisiko. Nora müsste diese weitere Stopregel vor dem Trade begründen, die passende Menge berechnen und separat auswerten. Mehr Platz ist nicht kostenlos.",
      "Während eines fallenden Trades den Stop spontan immer weiter wegzuschieben wäre keine saubere Anpassung. Die neue Regel darf nicht allein daraus entstehen, dass Nora den möglichen Verlust gerade nicht akzeptieren möchte."
    ],
    "prompt": "Was muss eine weiter entfernte Stopregel berücksichtigen?",
    "answers": [
      "Den größeren Abstand und eine entsprechend geprüfte Positionsmenge.",
      "Nur den angenehmeren Gefühlseffekt.",
      "Die Menge bleibt bei jedem Budget zwingend gleich."
    ],
    "rule": "Weitere Stops vorab begründen und mit dem Budget abstimmen.",
    "diagram": "par5-deep"
  },
  {
    "title": "Ein Wiedereinstieg ist eine zweite Entscheidung",
    "summary": "Nach einem Ausstieg muss eine neue Regel erfüllt sein.",
    "paragraphs": [
      "Nach einem ausgestoppten Trade sieht Nora im tiefen Fall einen erneuten Anstieg. Sie kann einen neuen Einstieg prüfen, wenn ihre vorher festgelegte Regel das zulässt. Der zweite Trade hat einen eigenen Preis und einen eigenen Stopbezug.",
      "Er muss nicht zu demselben Preis wie der erste Trade möglich sein. Zusätzliche Gebühren und eventuell ein größerer Abstand zum Ziel verändern die Rechnung. Die gemeinsame Tagesbilanz enthält trotzdem den ersten Verlust.",
      "Nora startet nicht automatisch einen Gegentrade oder verdoppelt die Menge, um den Verlust zurückzuholen. Ein neuer Chartabschnitt kann eine neue Idee unterstützen; der Wunsch nach Ausgleich ist kein Marktmerkmal."
    ],
    "prompt": "Was gehört in die gemeinsame Bilanz beider Trades?",
    "answers": [
      "Der erste Verlust, das zweite Ergebnis und alle Kosten.",
      "Nur der später erfolgreiche Trade.",
      "Der erste Trade zählt nach Wiedereinstieg nicht mehr."
    ],
    "rule": "Wiedereinstiege separat planen und vollständig abrechnen.",
    "diagram": "par5-deep"
  },
  {
    "title": "Ein tiefer Test kann die Trendstruktur erhalten",
    "summary": "Unter dem alten Hoch ist nicht automatisch unter dem letzten Tief.",
    "paragraphs": [
      "Im Treppenfall steigt der Markt zunächst bis 100. Der vorherige Rücksetzertiefpunkt liegt bei 98,5. Ein neuer Schub erreicht 102, danach fällt der Kurs auf 99,5 zurück.",
      "Dieser Rücklauf handelt unter dem früheren Hoch 100, bleibt aber über dem vorherigen Tief 98,5. Das ist mit einer Folge höherer Hochs und höherer Tiefs vereinbar. Der nächste gezeigte Schub erreicht 103,0.",
      "Tiefe allein entscheidet deshalb nicht über die Trendstruktur. Nora vergleicht den Rücklauf mit dem passenden vorangegangenen Tief. Würde der Kurs auch dieses Tief unterschreiten, wäre das ein anderes Gegenargument."
    ],
    "prompt": "Welche Beziehung erhält hier das höhere Tief?",
    "answers": [
      "99,5 liegt über dem vorangegangenen Tief 98,5.",
      "99,5 liegt über dem Hoch 102.",
      "Jeder Rücklauf unter 100 zerstört zwingend den Trend."
    ],
    "rule": "Rücklauf am alten Hoch und Rücklauf am letzten Tief unterscheiden.",
    "diagram": "par5-stairs"
  },
  {
    "title": "Eine Trendwende kann ein altes Extrem erneut testen",
    "summary": "Ein Trendlinienbruch allein vollendet noch keine Umkehr.",
    "paragraphs": [
      "Im Wendefall fällt der Kurs zunächst bis 98. Er steigt dann über eine zuvor festgelegte fallende Linie an und erreicht 100. Der nächste Rücklauf fällt auf 97,8, also sogar etwas unter das frühere Tief.",
      "Danach erreicht der gezeigte Aufwärtsschub 100,6 und schließt bei 100,4. Erst diese neuen Informationen unterstützen die breitere Wendedeutung. Das tiefere Testtief allein hat sie weder bewiesen noch jede mögliche Umkehr ausgeschlossen.",
      "Eine fortgesetzte Abwärtsbewegung hätte anders ausgesehen. Nora darf einen eigenen schon erreichten Stop nicht ausblenden, nur weil eine größere Umkehr später noch entsteht. Breite Struktur und konkrete Position bleiben getrennt."
    ],
    "prompt": "Was ist im Wendefall die wichtige spätere Zusatzinformation?",
    "answers": [
      "Der erneute kräftige Anstieg über das Zwischenhoch 100.",
      "Nur das tiefere Testtief 97,8.",
      "Der Linienbruch garantiert bereits den ganzen neuen Trend."
    ],
    "rule": "Trendlinienbruch, Extremtest und neue Bestätigung als Folge lesen.",
    "diagram": "par5-reversal"
  },
  {
    "title": "Tests können sofort oder später auftreten",
    "summary": "Der zeitliche Abstand bestimmt nicht allein die Bedeutung.",
    "paragraphs": [
      "Im Hauptfall kommt der Test wenige Minuten nach dem Ausbruch. Im verzögerten Fall steigt der Kurs erst weiter bis 103,0. Erst in Minute 9 erreicht der Rücklauf wieder den Bereich um 100.",
      "Die Ausbruchsgrenze bleibt als möglicher Bezug bekannt. Inzwischen sind aber neue Hochs, Zwischenpausen und andere Preisbereiche hinzugekommen. Ein später Test muss mit dieser erweiterten Vorgeschichte beurteilt werden.",
      "Nora verlangt deshalb keine feste Zahl von Kerzen bis zum Test. Sie notiert den zeitlichen Abstand und die zwischenzeitliche Bewegung. Ein langer Abstand macht den Test weder automatisch besser noch automatisch bedeutungslos."
    ],
    "prompt": "Was muss bei einem späteren Test zusätzlich berücksichtigt werden?",
    "answers": [
      "Die inzwischen entstandene Vorgeschichte.",
      "Nur die allererste Ausbruchskerze.",
      "Nach fünf Kerzen können nie mehr Tests entstehen."
    ],
    "rule": "Zeitabstand und neue Struktur gemeinsam berücksichtigen.",
    "diagram": "par5-delayed"
  },
  {
    "title": "Eine kurze Seitwärtspause kann selbst ein Rücksetzer sein",
    "summary": "Korrektur kann über Zeit und über Preis stattfinden.",
    "paragraphs": [
      "Nach einem kräftigen Aufwärtsschub kann der Kurs einige Minuten in einem kleinen Bereich verharren. Er muss nicht weit nach unten fallen, damit der Schub eine Pause bekommt. Im offenen Fall bleibt Minute 6 vollständig innerhalb des Bereichs von Minute 5.",
      "Diese Überlappung zeigt zunächst zwei Richtungen im kleinen Ausschnitt. Bleibt die Pause nahe dem oberen Teil des Schubs, wurde wenig Preisstrecke zurückgenommen. Das kann zu weiterem Aufwärtsdruck passen.",
      "Die Pause kann trotzdem später nach unten ausbrechen. Nora beschreibt daher geringe Rücklauftiefe und fehlende Bestätigung gleichzeitig. Ein noch nicht fallender Markt ist nicht dasselbe wie eine bereits bestätigte Fortsetzung."
    ],
    "prompt": "Welche Korrektur ist auch ohne tiefen Kursrückgang möglich?",
    "answers": [
      "Eine zeitliche Pause mit überlappenden Kerzen.",
      "Gar keine, Rücksetzer müssen immer 50 Prozent verlieren.",
      "Eine garantierte Umkehr."
    ],
    "rule": "Preisrückgang und Zeitpause als unterschiedliche Korrekturen erkennen.",
    "diagram": "par5-open"
  },
  {
    "title": "Ein fast erreichter großer Ausbruch braucht genaue Namen",
    "summary": "Am kleinen Bezug kann schon ein Ausbruch vorliegen.",
    "paragraphs": [
      "Im Beinahe-Fall liegt das große alte Hoch bei 102. Ein kleineres Zwischenhoch liegt bei 100,8. Der neue Anstieg erreicht 101,9: Er überschreitet das Zwischenhoch, bleibt aber 0,1 Punkt unter dem großen Hoch.",
      "Nach einem ruhigen Rücklauf steigt der Markt erneut. Der Aufbau kann einer Ausbruchsfortsetzung ähneln, obwohl am großen Hoch 102 noch kein Ausbruch stattfand. Am kleinen Zwischenhoch 100,8 hat es dagegen bereits eine Überschreitung gegeben.",
      "Nora nennt beide Bezüge ausdrücklich. Sie verschiebt die große Grenze nicht rückwirkend auf 101,9, nur damit der Fall einen bestimmten Namen erhält. Ähnliche Strukturen können nützlich sein, ohne die Preisdefinition aufzugeben."
    ],
    "prompt": "Welche Grenze wurde beim Hoch 101,9 schon überschritten?",
    "answers": [
      "Das kleine Zwischenhoch 100,8, nicht das große Hoch 102.",
      "Das große Hoch 102.",
      "Keine bekannte Grenze, 100,8 spielt keine Rolle."
    ],
    "rule": "Ähnliche Muster erklären, konkrete Grenzpreise beibehalten.",
    "diagram": "par5-near"
  },
  {
    "title": "Trendtag und Range liefern unterschiedlichen Kontext",
    "summary": "Die kleine Folge muss zur größeren Vorgeschichte passen.",
    "paragraphs": [
      "In einer langen Seitwärtsphase können viele kurze Ausbrüche wieder in den alten Bereich zurückkehren. Ein einzelner Ausbruch ist dort anders einzuordnen als nach mehreren bereits kräftigen Schüben in dieselbe Richtung.",
      "Nora beginnt deshalb nicht mit der neuesten Kerze. Sie prüft links davon, ob schon ein klarer Trend oder wiederholtes Hin und Her sichtbar war. Erst danach bewertet sie den aktuellen Rücklauf.",
      "Im Hauptfall ist der Ausbruch anfangs einer Range gefolgt. Nach zwei starken Anschlusskerzen hat sich der Informationsstand verändert. Kontext ist keine unveränderliche Tagesetikette, sondern eine Beschreibung des bis dahin gezeigten Verlaufs."
    ],
    "prompt": "Welche Vorgeschichte muss vor der letzten Kerze geprüft werden?",
    "answers": [
      "Vorhandener Trend oder wiederholtes Hin und Her.",
      "Nur die Farbe der letzten Minute.",
      "Die Tagesbezeichnung darf nach neuen Daten nie geändert werden."
    ],
    "rule": "Den aktuellen Test im bisher sichtbaren Verlauf einordnen.",
    "diagram": "par5-start"
  },
  {
    "title": "Eine starke Gegenkerze kann im größeren Trend eine Pause sein",
    "summary": "Die vorherige größere Bewegung bleibt Teil des Bildes.",
    "paragraphs": [
      "Im Abwärtsfall sinken die Kurse zunächst kräftig. Danach steigt eine Kerze deutlich. Wer nur diese letzte Kerze anschaut, könnte sie sofort als Beginn eines Aufwärtstrends deuten.",
      "Der größere Fall zeigt jedoch einen Rücklauf zur früheren Ausbruchsgrenze und danach einen erneuten Abwärtsschub. Die einzelne steigende Kerze war dort Teil einer Pause im Abwärtsverlauf. Das wird erst mit weiterer Entwicklung klarer.",
      "Nora vergleicht Größe und Lage der Gegenkerze mit dem vorherigen Schub. Auch eine durch Nachrichten ausgelöste Bewegung braucht diese Preisprüfung. Der vermeintliche Grund beweist weder Fortsetzung noch Scheitern."
    ],
    "prompt": "Was darf eine auffällige Gegenkerze nicht verdrängen?",
    "answers": [
      "Die größere vorherige Bewegung und die getesteten Bezüge.",
      "Jede vorherige Information ist danach bedeutungslos.",
      "Nachrichtenkerzen können nie Teil eines Rücksetzers sein."
    ],
    "rule": "Den auffälligen jüngsten Abschnitt mit dem größeren Verlauf vergleichen.",
    "diagram": "par5-bear"
  },
  {
    "title": "Ein später großer Schub kann zwei Ausgänge haben",
    "summary": "Erschöpfung und neuer Anschluss unterscheiden sich erst danach.",
    "paragraphs": [
      "Nach mehreren Schüben kann eine besonders große Kerze auftreten. Sie kann anzeigen, dass die Bewegung nochmals Kraft gewinnt. Sie kann aber auch kurz vor einem Rücklauf oder einer Umkehr liegen.",
      "Die Größe allein entscheidet nicht zwischen beiden Deutungen. Nora untersucht, ob folgende Kerzen weiter in derselben Richtung schließen oder den Schub schnell wieder zurücknehmen. Auch eine kurze seitliche Pause kann zunächst beide Wege offenlassen.",
      "Die spätere Einordnung als Erschöpfung erklärt den Verlauf im Rückblick. Nora darf diesen Namen nicht als Vorwissen beim ersten großen Schub verwenden. Für den frühen Plan braucht sie zusätzliche, damals sichtbare Bedingungen."
    ],
    "prompt": "Welche Information trennt die Deutungen besser als Größe allein?",
    "answers": [
      "Der weitere Anschluss oder kräftige Rückfall nach dem Schub.",
      "Ein besonders großer Körper garantiert eine Umkehr.",
      "Die dritte Bewegung endet immer exakt gleich."
    ],
    "rule": "Späten Schub und nachfolgende Reaktion zusammen beurteilen.",
    "diagram": "par5-delayed"
  },
  {
    "title": "Eine letzte Flagge wird erst durch den weiteren Verlauf erkennbar",
    "summary": "Die Pause vor der Wende kann zunächst wie eine normale Fortsetzung aussehen.",
    "paragraphs": [
      "Eine Flagge ist eine kleinere Pause gegen oder seitwärts zur bisherigen Trendrichtung. Im Wendefall fällt der Kurs zuerst auf 98 und steigt in einer Pause bis 100. Für sich genommen könnte dies eine Abwärtsflagge sein.",
      "Der nächste Rückfall erreicht 97,8, setzt den Abwärtsverlauf aber nicht dauerhaft fort. Danach folgt der Anstieg über das Flaggenhoch 100. Im gezeigten Rückblick war die Pause vor der Wende die letzte Abwärtsflagge.",
      "Das Wort letzte darf Nora vor der Bestätigung nicht als sicheren Hinweis verwenden. Dieselbe anfangs sichtbare Pause hätte auch zu einem neuen dauerhaften Abwärtsschub führen können."
    ],
    "prompt": "Wann erhält die Flagge im Beispiel die Wendedeutung?",
    "answers": [
      "Mit dem späteren Scheitern der Abwärtsfortsetzung und dem Anstieg über 100.",
      "Schon beim ersten kleinen steigenden Körper.",
      "Eine Flagge ist immer die letzte Pause eines Trends."
    ],
    "rule": "Die letzte Flagge als bestätigten Rückblick statt als Vorhersage benennen.",
    "diagram": "par5-reversal"
  },
  {
    "title": "Ein Doppeltief muss nicht exakt gleich sein",
    "summary": "Nahe Tiefs bilden einen Bereich, ihre Reaktion bleibt entscheidend.",
    "paragraphs": [
      "Ein erster Tiefbereich liegt im Wendefall bei 98. Im Vergleich mit höherem Testtief endet der zweite Rücklauf bei 98,2. Die beiden Tiefs unterscheiden sich um 0,2 Punkt, liegen aber nahe beieinander.",
      "Ein Doppeltief beschreibt zwei getrennte Besuche in einem ähnlichen Tiefbereich. Nora legt ihre Toleranz und den dazwischenliegenden Anstieg fest. Ohne einen getrennten zweiten Besuch wäre eine Folge benachbarter tiefer Kerzen noch nicht derselbe Aufbau.",
      "Erst der neue Anstieg über das Zwischenhoch 100 unterstützt hier die Wendedeutung. Ein Ausbruch nach unten aus einem vermeintlichen Doppeltief kann dagegen scheitern oder sich fortsetzen. Der Name enthält keine Erfolgsgarantie."
    ],
    "prompt": "Was gehört zu einem nachvollziehbaren Doppeltief?",
    "answers": [
      "Zwei getrennte ähnliche Tiefbereiche mit einem Anstieg dazwischen.",
      "Zwei beliebige benachbarte rote Kerzen.",
      "Zwei Tiefs müssen immer auf den exakten Tick gleich sein."
    ],
    "rule": "Toleranz, getrennte Besuche und neue Reaktion gemeinsam beschreiben.",
    "diagram": "par5-double"
  },
  {
    "title": "Die frühere Pause kann Teil des neuen Trends werden",
    "summary": "Ein Abschnitt kann im Rückblick eine zweite strukturelle Rolle erhalten.",
    "paragraphs": [
      "Im Wendefall war der Anstieg von 98 bis 100 zunächst eine Korrektur im Abwärtsverlauf. Nach dem erneuten Test und dem Anstieg über 100 kann er zugleich als erster Aufwärtsabschnitt des neuen Verlaufs gelesen werden.",
      "Es sind dieselben Kerzen. Was sich verändert, ist der größere Zusammenhang, den spätere Daten zeigen. Nora muss daher nicht behaupten, die erste Deutung sei damals völlig unvernünftig gewesen.",
      "Für eine Entscheidung vor der Wende darf sie den späteren Zusammenhang nicht vorwegnehmen. In ihrem Protokoll trennt sie damalige Interpretation und Rückblick. Das hilft, aus einer Entwicklung zu lernen, ohne sich nachträgliche Treffsicherheit einzureden."
    ],
    "prompt": "Was verändert sich bei dieser neuen Einordnung?",
    "answers": [
      "Der größere Zusammenhang, nicht die bereits gehandelten Kerzen.",
      "Die historischen Kurse werden umgeschrieben.",
      "Nora konnte die Zukunft schon beim ersten Anstieg sicher kennen."
    ],
    "rule": "Damals sichtbare Rolle und spätere strukturelle Rolle getrennt notieren.",
    "diagram": "par5-reversal"
  },
  {
    "title": "Die Neigung der letzten Pause kann später ähnlich aussehen",
    "summary": "Eine ähnliche Steigung ist eine Beobachtung, kein Fahrplan.",
    "paragraphs": [
      "Die frühere Aufwärtspause im Wendefall verläuft von 98 in Richtung 100. Später kann eine Linie entlang dieser Pause verlängert werden und ungefähr zur Neigung des neuen Aufwärtsverlaufs passen.",
      "Nora kann diese Ähnlichkeit im Rückblick untersuchen. Sie darf daraus weder ein festes Tempo noch eine garantierte Dauer des nächsten Trends ableiten. Unterschiedliche Ankerpunkte oder Maßstäbe verändern den optischen Eindruck.",
      "Ein brauchbarer Vergleich hält Zeitmaßstab und Preismaßstab gleich und benennt die gewählten Punkte. Für einen konkreten Trade benötigt Nora weiter aktuelle Bestätigung, einen Ausstieg und eine Mengenrechnung. Eine schöne verlängerte Linie genügt nicht."
    ],
    "prompt": "Was kann eine ähnliche Neigung tatsächlich liefern?",
    "answers": [
      "Eine prüfbare strukturelle Beobachtung bei gleichem Maßstab.",
      "Den garantierten Kurs jeder nächsten Minute.",
      "Eine feste Dauer des neuen Trends."
    ],
    "rule": "Neigung vergleichen, keine sichere Geschwindigkeit daraus ableiten.",
    "diagram": "par5-reversal"
  },
  {
    "title": "Der gleiche Vorgang sieht je nach Zeitrahmen anders aus",
    "summary": "Mehrere Minuten können eine einzige größere Kerze ergeben.",
    "paragraphs": [
      "Nora fasst die drei Minuten 5 bis 7 zu einem größeren Zeitabschnitt zusammen. Dessen Eröffnung ist 99,5, das höchste Hoch 101,8, das tiefste Tief 99,4 und der letzte Schluss 100,6.",
      "Auf dem Minutenchart sieht sie Ausbruch, Anschluss und Rücklauf getrennt. In der zusammengefassten Kerze steckt alles in einem einzigen Körper mit Dochten. Ein fehlendes kleines Muster auf dem größeren Chart bedeutet daher nicht, dass der Vorgang nicht stattgefunden hat.",
      "Viele Zeitrahmen gleichzeitig können allerdings widersprüchliche Detailbilder erzeugen. Nora legt zuerst fest, welchen Chart sie für Kontext und welchen sie für ihre Einstiegskriterien nutzt. Sie sucht nicht unbegrenzt nach einem passenden Bild."
    ],
    "prompt": "Welcher Schluss gehört zur zusammengefassten Kerze aus Minuten 5 bis 7?",
    "answers": [
      "100,6, der Schluss der letzten Minute.",
      "101,8, das höchste Hoch.",
      "99,5, die erste Eröffnung."
    ],
    "rule": "Aggregation erklären und Zeitrahmen vorab sinnvoll auswählen.",
    "diagram": "par5-test"
  },
  {
    "title": "Im Abwärtsfall wechseln die Preisrichtungen",
    "summary": "Die obere Testreaktion wird zur Prüfung für Verkäufer.",
    "paragraphs": [
      "Der Abwärtsfall spiegelt die Preise nach der Regel 200 minus ursprünglicher Preis. Aus der oberen Grenze 100 wird eine untere Grenze 100. Der Ausbruch schließt bei 99,0 und der Anschluss bei 98,4.",
      "Der Rücklauf erreicht 99,8 und schließt bei 99,4. Danach fällt der Kurs erneut. Ein möglicher Short-Auslöser liegt eine Stufe unter dem Testtief 98,3, also bei 98,2. Ein Short verdient im Preismodell bei fallenden Kursen.",
      "Nora spiegelt auch den Schutzstop: Er liegt über dem Testhoch, hier im Rechenmodell bei 99,9. Der Abstand zur Schwelle 98,2 beträgt wieder 1,7 Punkte. Nicht nur die Pfeilrichtung, auch Hoch und Tief müssen korrekt wechseln."
    ],
    "prompt": "Wo liegt die Short-Schwelle eine Stufe unter 98,3?",
    "answers": [
      "98,2.",
      "98,4, oberhalb des Tiefs.",
      "99,9, am Schutzstop."
    ],
    "rule": "Grenzen, Auslöser und Schutzstop konsequent spiegeln.",
    "diagram": "par5-bear"
  },
  {
    "title": "Nicht jedes kleine Muster muss gehandelt werden",
    "summary": "Ein erkennbarer Aufbau ist erst ein Kandidat.",
    "paragraphs": [
      "Ein großer Chart kann viele winzige Rückläufe und erneute Auslöser enthalten. Sie zeigen, dass der Vorgang Ausbruch und Test oft auf unterschiedlichen Größenordnungen vorkommt. Das verpflichtet Nora nicht, jede kleine Bewegung zu handeln.",
      "Wenn Stopabstand und Ziel sehr klein sind, können Gebühren, Spread und abweichende Ausführung einen großen Teil der erhofften Strecke aufbrauchen. Spread ist der Abstand zwischen angebotenen Kauf- und Verkaufspreisen.",
      "Nora konzentriert ihr Training zunächst auf gut sichtbare Schübe und klare Preisbereiche. Sie hält außerdem ausgelassene Fälle fest. Eine gute Lernentscheidung kann lauten: Muster verstanden, aber die eigenen Handelsbedingungen sind nicht erfüllt."
    ],
    "prompt": "Warum kann ein erkennbares kleines Muster ungeeignet sein?",
    "answers": [
      "Kosten und Ausführungsbedingungen können die kleine Strecke aufbrauchen.",
      "Jedes erkannte Muster muss gehandelt werden.",
      "Bei kleinen Mustern existiert kein Geldrisiko."
    ],
    "rule": "Erkennen und tatsächliche Handelstauglichkeit getrennt prüfen.",
    "diagram": "par5-open"
  },
  {
    "title": "Weitere Testbereiche nach einem größeren Verlauf ordnen",
    "summary": "Nicht jeder spätere Rücklauf prüft nur die ursprüngliche Rangegrenze.",
    "paragraphs": [
      "Nach einem schnellen Schub kann der Markt in einen langsameren Kanal übergehen. Bricht er aus diesem Kanal gegen die Trendrichtung aus, kann der Übergang vom schnellen Schub zum Kanal ein weiterer Testbereich werden. Ein Kanal ist ein Verlauf zwischen ungefähr parallel gerichteten Grenzen.",
      "Bei mehreren steigenden Ranges können die Oberkante und später auch die Unterkante der vorherigen tieferen Range wichtig werden. Bei einem Keil mit drei Schüben können frühere Schubhochs und der Beginn der Keilkorrektur weitere Bezüge liefern. Ein Keil hat zusammenlaufende Grenzen.",
      "Auch ein gleitender Durchschnitt, frühere Tiefs oder festgelegte Trendlinien können als Bezüge dienen. Nora wählt die zur Struktur passenden Bereiche und priorisiert sie. Sie erklärt nicht jede berührte Linie nachträglich zur alleinigen Ursache der Wende."
    ],
    "prompt": "Wie sollten weitere Testbereiche ausgewählt werden?",
    "answers": [
      "Aus dem bekannten Verlauf ableiten und vorab priorisieren.",
      "Beliebige Linien erst nach einer Wende hinzufügen.",
      "Jeder Verlauf hat nur die ursprüngliche Rangegrenze als Bezug."
    ],
    "rule": "Schub, Kanal, Keil und Range liefern unterschiedliche mögliche Testbezüge.",
    "diagram": "par5-delayed"
  },
  {
    "title": "Ein Test kann einen zweiten Bewegungsteil vorbereiten",
    "summary": "Die Fortsetzung und der Fehlausbruch liefern unterschiedliche nächste Aufgaben.",
    "paragraphs": [
      "Im Hauptfall ist der Schub über 100 ein erster Aufwärtsabschnitt. Der Rücklauf unterbricht ihn, danach folgt in Minute 8 ein weiterer Aufwärtsabschnitt. Das ist die einfache Folge Schub, Pause und zweiter Schub.",
      "Im Fehlausbruch kehrt der Markt kräftig in die Range zurück und erhält Abwärtsanschluss. Ehemalige Käufer könnten aussteigen und neue Käufer könnten zunächst abwarten. Dadurch ist ein weiterer Abwärts- oder Seitwärtsabschnitt eine prüfbare Möglichkeit.",
      "Nora zählt Bewegungsteile, statt aus dem zweiten Versuch eine sichere Mindeststrecke abzuleiten. Weder zwei Schübe noch zwei gescheiterte Versuche beweisen die Richtung einer kommenden Kerze. Sie benötigt weiterhin aktuelle Reaktion und eine klar benannte Verwerfungsbedingung."
    ],
    "prompt": "Welche Folge zeigt der Fortsetzungsfall?",
    "answers": [
      "Aufwärtsschub, Rücklauf und weiterer Aufwärtsabschnitt.",
      "Zwei sichere Gewinner mit identischer Strecke.",
      "Jeder Rücklauf muss sofort zum Trendwechsel werden."
    ],
    "rule": "Bewegungsteile zählen und ihre Fortsetzung weiterhin prüfen.",
    "diagram": "par5-resume"
  },
  {
    "title": "Auch ein höheres Hoch kann Teil einer Wendefolge sein",
    "summary": "Der Rücklauf eines Abwärtsausbruchs kann das alte Hoch überschreiten.",
    "paragraphs": [
      "Der obere Wendefall spiegelt den unteren nach der Regel 200 minus Preis. Zunächst steigt der Kurs bis 102. Es folgt ein Rückgang bis 100 und dann ein erneuter Test, der sogar 102,2 erreicht.",
      "Dieses höhere Hoch allein beweist keine dauerhaft erfolgreiche Aufwärtsfortsetzung. Danach fällt der gezeigte Kurs bis 99,4 und schließt bei 99,6. Erst diese spätere Entwicklung unterstützt die Wendedeutung. Sie war beim neuen Hoch noch nicht bekannt.",
      "Der Aufbau erklärt, warum ein Gegenrücklauf nach einem Trendlinienbruch nicht immer ein tieferes Hoch bilden muss. Eine breite Wendefolge kann das alte Extrem überschreiten. Ein konkreter Short mit engem Stop kann trotzdem schon ausgestoppt worden sein."
    ],
    "prompt": "Was zeigt die Überschreitung von 102 auf 102,2 allein?",
    "answers": [
      "Ein höheres Hoch, aber noch keine bestätigte dauerhafte Fortsetzung.",
      "Eine sichere spätere Abwärtswende.",
      "Dass kein Shortstop jemals getroffen werden kann."
    ],
    "rule": "Extremüberschreitung und bestätigte neue Richtung getrennt lesen.",
    "diagram": "par5-top"
  },
  {
    "title": "Mehrere Gegenstöße als veränderte Stärke erkennen",
    "summary": "Wiederholter Druck zählt mehr als eine einzelne auffällige Kerze.",
    "paragraphs": [
      "Im verzögerten Fall steigt der Kurs bis 103. Danach folgen zwei fallende Körper, erst bis 101,2 und dann bis 100,4. Der Rücklauf hat sich über mehrere abgeschlossene Abschnitte ausgeweitet.",
      "Nora vergleicht nicht nur die letzte Kerze mit dem ursprünglichen Schub. Sie beobachtet, ob Gegenstöße häufiger werden, tiefer greifen und mehr Preisstrecke zurücknehmen. Die ursprüngliche Stärke und der neu entstandene Druck können gleichzeitig sichtbar sein.",
      "In Minute 10 steigt der Kurs wieder. Dieses neue Gegenargument zählt ebenfalls. Nora aktualisiert ihre Beschreibung mit jeder abgeschlossenen Kerze, ohne die stärkste frühere Beobachtung zur unveränderlichen Wahrheit zu machen."
    ],
    "prompt": "Welchen Zusatzhinweis liefern mehrere zunehmende Gegenstöße?",
    "answers": [
      "Veränderten Druck über mehrere Abschnitte statt nur eine einzelne Kerze.",
      "Eine mathematisch sichere Umkehrquote.",
      "Alle ursprünglichen Kerzen werden dadurch ungültig."
    ],
    "rule": "Aufgebauten Gegendruck und neue Anschlussreaktionen gemeinsam bewerten.",
    "diagram": "par5-delayed"
  },
  {
    "title": "Den ganzen Fall ohne Zukunftswissen protokollieren",
    "summary": "Grenze, Schub, Test, Auslöser, Risiko und Gegenargumente gehören zusammen.",
    "paragraphs": [
      "Nora beginnt ihr Protokoll mit der Grenze 100 und dem Stand nach Minute 5. Nach Minute 7 ergänzt sie die Testzone, das Tief 100,2 und den Schluss 100,6. Ihre mögliche Fortsetzungsschwelle liegt bei 101,8.",
      "Für einen hypothetischen Einstieg hält sie Stop 100,1, Menge, Kosten und eine Verwerfungsbedingung fest. Erst nach Minute 8 ergänzt sie, dass die Preisschwelle überschritten wurde. Eigene Ausführungen bleiben durch Orderdaten zu prüfen.",
      "Zur Auswertung gehören auch der unmittelbare Fehlausbruch, der offene Fall und der tiefe Test mit engem ausgestopptem Trade. So lernt Nora nicht nur aus dem schönen Ergebnis, sondern aus den Entscheidungen unter unterschiedlichen möglichen Fortsetzungen."
    ],
    "prompt": "Was macht das Protokoll belastbarer?",
    "answers": [
      "Zeitlich getrennte Informationen und auch scheiternde oder ausgelassene Vergleichsfälle.",
      "Nur den erfolgreichen Endchart speichern.",
      "Den späteren Schluss schon als frühes Wissen eintragen."
    ],
    "rule": "Informationsstand, Marktverlauf und tatsächliches Trade-Ergebnis getrennt dokumentieren.",
    "diagram": "par5-risk"
  }
]);
