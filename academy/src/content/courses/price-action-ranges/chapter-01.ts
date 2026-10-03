import { makeLessons } from './lessons';
export const rangesChapterOneLessons = makeLessons('chapter-01', 'Kapitel 1 · Einen Ausbruch Schritt für Schritt verstehen', [
  {
    "title": "Die Ausgangslage zuerst festhalten",
    "summary": "Vier Minuten bilden einen Bereich zwischen 98 und 100.",
    "paragraphs": [
      "Die ersten vier Kerzen unseres erfundenen Minutencharts haben Hochs von 99,4; 100,0; 99,8 und 99,9. Ihre Tiefs liegen bei 98,0; 98,5; 98,4 und 98,7. Keine dieser Minuten handelt oberhalb von 100.",
      "Nora zeichnet die bisherige obere Grenze bei 100 und die untere bei 98 ein. Das beschreibt diesen Ausschnitt. Es beweist nicht, dass der Preis dort dauerhaft bleiben muss. Die Grenzen werden vor der Ausbruchskerze festgelegt.",
      "Wir nennen die Kurse Punkte. Ein Punkt entspricht im erfundenen Rechenprodukt einem Euro je Einheit. Der Chart zeigt abgeschlossene Minuten und enthält keine echten Handelsdaten."
    ],
    "prompt": "Welche obere Grenze wird vor Kerze 5 festgelegt?",
    "answers": [
      "100 Punkte.",
      "101,4 Punkte.",
      "103,5 Punkte."
    ],
    "rule": "Lege den Bezug vor dem Ereignis fest.",
    "diagram": "par1-context"
  },
  {
    "title": "Kerze 5 überschreitet die Grenze",
    "summary": "Der Ausbruch handelt über 100 und schließt bei 101,4.",
    "paragraphs": [
      "Kerze 5 eröffnet bei 99,2. Ihr Tief beträgt 99,1, ihr Hoch 101,5 und ihr Schluss 101,4. Sie handelt damit oberhalb der vorherigen Grenze von 100 und endet ebenfalls darüber.",
      "Der Schluss liegt nur 0,1 Punkt unter dem Hoch. Ihr steigender Körper reicht von 99,2 bis 101,4. Das ist in diesem Ausschnitt ein deutliches Stärkezeichen: Der Abschnitt endet nahe seinem höchsten Preis.",
      "Nora kann jetzt einen Ausbruch nach oben beschreiben. Eine Fortsetzung bleibt offen, denn bislang ist keine folgende Kerze abgeschlossen. Die gleiche Ausgangslage könnte sich später erfolgreich entwickeln oder scheitern."
    ],
    "prompt": "Welche Aussage ist nach Kerze 5 bereits beobachtbar?",
    "answers": [
      "Der Schluss liegt 1,4 Punkte über der alten Grenze.",
      "Das Ziel wurde schon erreicht.",
      "Die nächste Kerze steigt sicher."
    ],
    "rule": "Beschreibe den Ausbruch, ohne seine Zukunft vorwegzunehmen.",
    "diagram": "par1-breakout"
  },
  {
    "title": "Körper und Schlusslage rechnen",
    "summary": "Kerze 5 hat einen Körper von 2,2 und eine Spanne von 2,4 Punkten.",
    "paragraphs": [
      "Die gesamte Spanne beträgt Hoch minus Tief: 101,5 minus 99,1 ergibt 2,4 Punkte. Der Körper beträgt Schluss minus Eröffnung: 101,4 minus 99,2 ergibt 2,2 Punkte.",
      "Der obere Schatten misst 0,1 Punkt, der untere ebenfalls 0,1. Körper und beide Schatten ergeben wieder 2,4. Ein großer Körper im Verhältnis zur Spanne zeigt, dass der Abschnitt einen deutlichen Weg von Eröffnung zu Schluss zurückgelegt hat.",
      "Diese Rechnung ist eine Beschreibung der Kerze. Sie verrät nicht, wie viele Teilnehmer gekauft haben, welche Orders noch liegen oder ob die Bewegung weitergeht. Nora verwendet die Kennwerte als Hinweis, nicht als vollständige Erklärung aller Marktursachen."
    ],
    "prompt": "Wie groß ist der Körper von Kerze 5?",
    "answers": [
      "2,2 Punkte.",
      "2,4 Punkte.",
      "0,1 Punkt."
    ],
    "rule": "Körper und gesamte Spanne sind verschiedene Maße.",
    "diagram": "par1-breakout"
  },
  {
    "title": "Erster Anschluss mit Kerze 6",
    "summary": "Ein zweiter höherer Schluss ergänzt den ersten Ausbruch.",
    "paragraphs": [
      "Kerze 6 eröffnet bei 101,4, handelt zwischen 101,2 und 102,3 und schließt bei 102,2. Ihr Tief liegt oberhalb der alten Grenze 100. Der Schluss liegt höher als der Schluss von Kerze 5.",
      "Nora sieht nun zwei abgeschlossene steigende Kerzen, die den Ausbruch unterstützen. Diesen folgenden Druck nennen wir Anschluss oder Follow-through. Das ist zusätzliche Information gegenüber dem Zeitpunkt direkt nach Kerze 5.",
      "Der spätere Zeitpunkt hat auch einen Nachteil: Ein geplanter Kauf zu 102,2 ist teurer als einer zu 101,4. Mehr Bestätigung macht die Preisentfernung zu einem unveränderten Stop nicht kleiner."
    ],
    "prompt": "Was ist nach Kerze 6 neu bekannt?",
    "answers": [
      "Ein höherer Schluss unterstützt den Ausbruch.",
      "Der komplette spätere Trend steht fest.",
      "Der Stop kann sicher entfallen."
    ],
    "rule": "Zusätzliche Bestätigung und Einstiegspreis gemeinsam prüfen.",
    "diagram": "par1-followthrough"
  },
  {
    "title": "Auch Verkäufer können zu Käufern werden",
    "summary": "Short-Eindeckung ist eine mögliche Erklärung, kein sichtbarer Beweis.",
    "paragraphs": [
      "Wer zuvor auf fallende Preise gesetzt hat, kann seine Verkaufsposition durch einen Kauf schließen. Das heißt Short-Eindeckung. Solche Käufe können eine Aufwärtsbewegung unterstützen, ebenso wie neue Käufe anderer Teilnehmer.",
      "Unser Kerzenchart zeigt jedoch nur die zusammengefassten Preise. Nora kann nicht erkennen, welcher konkrete Kauf eine neue Position eröffnete und welcher eine alte schloss. Sie formuliert daher eine mögliche Erklärung statt einer sicheren Teilnehmergeschichte.",
      "Die beobachtbare Grundlage bleibt: höhere Preise, große steigende Körper und bisher wenig Rücklauf. Eine plausible Geschichte ersetzt diese Prüfung nicht. Auch ein Markt mit Eindeckungen kann anschließend wieder fallen."
    ],
    "prompt": "Kann Nora aus den Kerzen die Absicht jedes Käufers erkennen?",
    "answers": [
      "Nein, die Teilnehmerabsichten sind nicht enthalten.",
      "Ja, ein grüner Körper zeigt ausschließlich neue Käufer.",
      "Ja, jede steigende Kerze beweist Short-Eindeckung."
    ],
    "rule": "Trenne mögliche Marktmechanismen von sichtbaren Daten.",
    "diagram": "par1-followthrough"
  },
  {
    "title": "Eine kleine Position als bewusste Entscheidung",
    "summary": "Ein weiter Stop erfordert weniger Einheiten bei gleichem Budget.",
    "paragraphs": [
      "Nora prüft einen gedachten Einstieg zu 101,4. Für diese Übung legt sie vorab einen Stop bei 98,4 fest. Dieser liegt unter dem Tief 99,1 der Ausbruchskerze, aber innerhalb des früheren Bereichs. Es ist ihre konkrete Ausstiegsregel, keine allgemeine Vorschrift.",
      "Der Abstand beträgt 3 Punkte. Bei einem geplanten Budget von 30 Euro und einem Punktwert von einem Euro passen rechnerisch zehn Einheiten vor Kosten. Die Größe wird aus dem Budget abgeleitet, nicht aus ihrer Begeisterung für den Chart.",
      "Ein anderer Stop hätte einen anderen Abstand und würde eine andere Regel prüfen. Nora darf den Stop nicht einfach dichter setzen, um eine gewünschte Menge zu rechtfertigen. Erst erklärt sie den Ausstieg, dann berechnet sie die Größe."
    ],
    "prompt": "Welche Größe passt rechnerisch zu 30 Euro und 3 Punkten Abstand?",
    "answers": [
      "10 Einheiten vor Kosten.",
      "30 Einheiten.",
      "Eine beliebige Menge bei gutem Gefühl."
    ],
    "rule": "Die Menge folgt dem Risikoplan.",
    "diagram": "par1-risk"
  },
  {
    "title": "Der spätere Einstieg verändert die Rechnung",
    "summary": "Gleicher Stop, höherer Einstieg, größerer Abstand.",
    "paragraphs": [
      "Nach Kerze 6 prüft Nora stattdessen 102,2 als Einstieg. Der Übungsstop bleibt bei 98,4. Die Preisentfernung beträgt jetzt 3,8 Punkte statt 3. Zehn Einheiten würden daher 38 Euro geplantes Risiko vor Kosten bedeuten.",
      "Bei einem Budget von 30 Euro sind höchstens sieben ganze Einheiten möglich: sieben mal 3,8 ergibt 26,6. Acht Einheiten ergäben 30,4 und lägen schon ohne Kosten über dem Budget.",
      "Der frühere Einstieg ist zu diesem Zeitpunkt nicht mehr verfügbar, nur weil er im Bild steht. Nora bewertet die jetzt vorliegende Möglichkeit. Sie kann kleiner handeln oder auslassen; die frühere Rechnung darf sie nicht unverändert übernehmen."
    ],
    "prompt": "Welche ganze Menge bleibt bei 3,8 Punkten unter 30 Euro vor Kosten?",
    "answers": [
      "7 Einheiten.",
      "8 Einheiten.",
      "10 Einheiten."
    ],
    "rule": "Rechne nach jeder Änderung des Einstiegspreises neu.",
    "diagram": "par1-risk"
  },
  {
    "title": "Auf einen Rücksetzer warten",
    "summary": "Warten kann einen anderen Preis liefern oder ohne Einstieg enden.",
    "paragraphs": [
      "Nora entscheidet sich in einer zweiten Übungsvariante gegen den sofortigen Einstieg. Sie möchte zuerst einen Rücksetzer in Richtung 100 sehen und anschließend neue Käuferstärke. Ein Rücksetzer ist zunächst nur eine Bewegung entgegen der vorherigen Richtung.",
      "Wenn der Kurs direkt weiter steigt, bleibt ihr Einstieg aus. Das ist eine Folge ihrer Regel. Wenn der Kurs tief zurückfällt, ist der günstigere Preis allein kein Grund zum Kaufen: Der Ausbruch könnte gescheitert sein.",
      "Eine Warte-Regel braucht deshalb mehr als einen Wunschpreis. Nora benennt Ort und Auslöser, zum Beispiel eine abgeschlossene wieder steigende Kerze nach einem Test. Die tatsächliche Ausführung bleibt getrennt zu prüfen."
    ],
    "prompt": "Was folgt, wenn der gewünschte Rücksetzer nicht erscheint?",
    "answers": [
      "Die Warte-Regel kann ohne Einstieg enden.",
      "Nora erhält automatisch den alten Preis.",
      "Sie muss dem Kurs hinterherkaufen."
    ],
    "rule": "Warten hat Bedingungen und mögliche Kosten durch verpasste Chancen.",
    "diagram": "par1-pullback"
  },
  {
    "title": "Der erste Rücksetzer bleibt oberhalb von 100",
    "summary": "Kerze 7 fällt etwas zurück, ohne den Ausbruch vollständig zurückzunehmen.",
    "paragraphs": [
      "Kerze 7 eröffnet bei 102,2, erreicht 102,4 und fällt bis 101,5. Ihr Schluss liegt bei 101,8. Damit ist sie fallend, doch sämtliche Preise dieser Minute bleiben oberhalb von 100.",
      "Nora sieht eine Pause nach dem Anstieg. Eine einzelne fallende Kerze bedeutet nicht automatisch einen Abwärtstrend. Sie vergleicht Tiefe, Schluss und Ort mit den beiden vorherigen Minuten.",
      "Zugleich weiß sie noch nicht, ob der Rücksetzer endet. Erst die nächste abgeschlossene Kerze kann weitere Information liefern. Das Wort Pause beschreibt eine mögliche Einordnung und garantiert keine Wiederaufnahme."
    ],
    "prompt": "Warum beweist Kerze 7 allein keinen neuen Abwärtstrend?",
    "answers": [
      "Sie ist nur ein Abschnitt und bleibt über der alten Grenze.",
      "Fallende Kerzen zählen grundsätzlich nicht.",
      "Der Kurs kann über 100 niemals fallen."
    ],
    "rule": "Prüfe den Rücksetzer relativ zur vorherigen Bewegung.",
    "diagram": "par1-pullback"
  },
  {
    "title": "Eine neue steigende Kerze nach der Pause",
    "summary": "Kerze 8 liefert neue Stärke nach dem Rücksetzer.",
    "paragraphs": [
      "Kerze 8 eröffnet bei 101,8, hat ein Tief bei 101,6 und schließt bei 103,1 nahe ihrem Hoch von 103,2. Sie handelt höher als Kerze 7 und beendet den Abschnitt mit einem steigenden Körper.",
      "Im erfolgreichen Übungspfad folgt also neue Stärke auf eine begrenzte Pause. Nora kann jetzt eine Wiederaufnahme beschreiben. Eine Entscheidung erst nach Kerze 8 hatte jedoch keinen Anspruch auf den früheren Einstieg 101,4.",
      "Die bessere Bestätigung ist damit nicht kostenlos. Ob ein Einstieg noch sinnvoll erscheint, hängt auch vom neuen Abstand zu Stop und Ziel ab. Ein überzeugender Verlauf und ein passender neuer Trade sind verschiedene Fragen."
    ],
    "prompt": "Darf Nora nach Kerze 8 den früheren Einstieg 101,4 als ihre Ausführung annehmen?",
    "answers": [
      "Nein, eine frühere Chartmarke bestätigt keine jetzige Ausführung.",
      "Ja, wenn sie lange gewartet hat.",
      "Ja, weil die Richtung nun klar ist."
    ],
    "rule": "Ein guter Verlauf garantiert keinen passenden späteren Einstieg.",
    "diagram": "par1-pullback"
  },
  {
    "title": "Ein Messziel als Arbeitshypothese",
    "summary": "Die Strecke des Ausbruchs liefert ein mögliches Ziel, keine Zusage.",
    "paragraphs": [
      "Für diese Übung misst Nora die Strecke vom Tief 99,1 bis zum Hoch 101,5 der Ausbruchskerze. Das sind 2,4 Punkte. Sie trägt dieselbe Entfernung vom Hoch 101,5 nach oben ab: 101,5 plus 2,4 ergibt 103,9.",
      "Das ist eine ausdrücklich festgelegte Messregel. Eine andere Regel könnte beispielsweise die Höhe des früheren Bereichs verwenden und käme zu einem anderen Wert. Nora schreibt deshalb Startpunkt, Endpunkt und Projektionspunkt auf.",
      "Der Markt muss dieses Ziel nicht erreichen. Es ist eine Preiszone für ihre Planung. Der Chart allein liefert auch keine gemessene Wahrscheinlichkeit für eine Berührung. Ein Ziel ersetzt weder Stop noch Kostenrechnung."
    ],
    "prompt": "Welches Messziel ergibt 101,5 plus 2,4?",
    "answers": [
      "103,9 Punkte.",
      "102,4 Punkte.",
      "Garantiert 103,9 als Ausführung."
    ],
    "rule": "Ein Messziel ist eine benannte Rechenregel und eine Möglichkeit.",
    "diagram": "par1-risk"
  },
  {
    "title": "Zielentfernung und Stopentfernung vergleichen",
    "summary": "Das Ziel kann attraktiv aussehen und trotzdem näher als der Stop liegen.",
    "paragraphs": [
      "Beim gedachten Einstieg 101,4 und Ziel 103,9 beträgt die mögliche Zielentfernung 2,5 Punkte. Zum Stop 98,4 sind es 3 Punkte. Die Zielentfernung ist also kleiner als die Stopentfernung.",
      "Das Verhältnis Zielentfernung zu Stopentfernung beträgt 2,5 geteilt durch 3, ungefähr 0,83. Bei zehn Einheiten stehen 25 Euro vor Kosten einem geplanten Verlust von 30 Euro gegenüber.",
      "Das Verhältnis allein beweist keinen guten oder schlechten Erwartungswert. Dazu fehlen unter anderem die belegte Trefferquote und tatsächliche Ausführungen. Nora benennt deshalb zunächst nur die beiden Entfernungen, statt Gewinn aus dem Bild abzuleiten."
    ],
    "prompt": "Welche mögliche Zielentfernung hat der Einstieg 101,4 bis 103,9?",
    "answers": [
      "2,5 Punkte.",
      "3 Punkte.",
      "5,5 Punkte."
    ],
    "rule": "Vergleiche Ziel, Stop, Kosten und belastbare Wahrscheinlichkeit.",
    "diagram": "par1-risk"
  },
  {
    "title": "Kosten gehören zur Rechnung",
    "summary": "Die Beispielkosten verringern den Gewinn und vergrößern den Verlust.",
    "paragraphs": [
      "Wir setzen für die gesamte Beispielposition erfundene Gesamtkosten von 2 Euro an. Beim Ziel wären aus 25 Euro vor Kosten noch 23 Euro. Beim geplanten Stop wären aus 30 Euro Preisverlust insgesamt 32 Euro Verlust.",
      "Nur für eine Rechenübung nehmen wir an, jeder Trade ende exakt am Ziel oder exakt am Stop. Dann liegt die Gewinnschwelle bei 32 geteilt durch die Summe 23 plus 32: ungefähr 58,2 Prozent erfolgreiche Trades.",
      "Diese Gewinnschwelle ist keine Trefferquote der Methode. Sie sagt, welche Quote das vereinfachte Modell benötigen würde. Slippage, andere Ausstiege und wechselnde Kosten würden die Rechnung verändern."
    ],
    "prompt": "Was bedeutet die berechnete Gewinnschwelle von rund 58,2 Prozent?",
    "answers": [
      "Diese Quote wäre im vereinfachten Modell zum Ausgleich nötig.",
      "Diese Quote wurde im Markt bereits nachgewiesen.",
      "Jeder einzelne Trade gewinnt mit genau dieser Chance."
    ],
    "rule": "Benötigte Trefferquote und tatsächlich gemessene Trefferquote trennen.",
    "diagram": "par1-risk"
  },
  {
    "title": "Wenn derselbe Ausbruch scheitert",
    "summary": "Eine andere Fortsetzung kann in den alten Bereich zurückfallen.",
    "paragraphs": [
      "Unsere zweite Fortsetzung beginnt mit derselben Kerze 5. Danach folgt statt der starken Kerze 6 eine fallende Minute: Eröffnung 101,4, Hoch 101,6, Tief 99,5 und Schluss 99,7. Der Schluss liegt wieder im alten Bereich.",
      "Das schwächt die Fortsetzungsidee deutlich. Die anfängliche Kerze 5 war in beiden Pfaden identisch. Nora konnte nach ihrem Schluss nicht wissen, welcher Pfad folgen würde.",
      "Ein schneller Rückfall ist ein Grund, den Plan zu überprüfen. Ob Nora vorher aussteigt oder am geplanten Stop bleibt, muss ihre Managementregel beantworten. Den Stop weiter wegzuschieben, um einen Verlust nicht zu sehen, wäre ein anderer und riskanterer Plan."
    ],
    "prompt": "Welche Information liefert ein Schluss bei 99,7 nach dem Ausbruch?",
    "answers": [
      "Der Markt ist in den vorherigen Bereich zurückgefallen.",
      "Der erste Ausbruch hat nie stattgefunden.",
      "Das Ziel ist nun sicher."
    ],
    "rule": "Ein beobachteter Ausbruch kann anschließend scheitern.",
    "diagram": "par1-failure"
  },
  {
    "title": "Ein Stop knapp unter dem Einstieg ist kein Zauber",
    "summary": "Ein kleinerer Abstand verändert die getestete Idee.",
    "paragraphs": [
      "Ein Stop bei 101,3 hätte beim Einstieg 101,4 nur 0,1 Punkt Abstand. Schon ein kleiner Rücklauf könnte ihn erreichen. Die Ausbruchskerze selbst handelte deutlich tiefer bis 99,1.",
      "Der enge Stop prüft damit eine andere Idee: Der Preis soll fast sofort weitergehen, ohne nennenswerten Rücklauf. Das ist nicht dieselbe Regel wie ein Stop bei 98,4. Nora muss diesen Unterschied vor der Entscheidung benennen.",
      "Ein kleiner Abstand ermöglicht rechnerisch eine größere Menge, verstärkt aber auch die Wirkung kleiner Preisänderungen und von Kosten. Wir verwenden keinen engen Stop nur, um das Verhältnis auf dem Papier schöner zu machen."
    ],
    "prompt": "Was verändert ein viel engerer Stop?",
    "answers": [
      "Die Bedingung, unter der die Handelsidee beendet wird.",
      "Nur die Optik, sonst nichts.",
      "Er garantiert denselben Trade mit weniger Verlust."
    ],
    "rule": "Stopposition und Handelsidee müssen zusammenpassen.",
    "diagram": "par1-risk"
  },
  {
    "title": "Den Stop nachziehen braucht eine neue Begründung",
    "summary": "Ein Trailing Stop bewegt die Ausstiegsgrenze im Verlauf.",
    "paragraphs": [
      "Nach der starken Kerze 8 prüft Nora in einer gesonderten Variante einen Stop bei 101,4 unter dem Rücksetzertief 101,5 von Kerze 7. Ihre neue Bedingung lautet: Die Wiederaufnahme soll dieses Tief nicht erneut unterschreiten.",
      "Damit sinkt die geplante Verlustentfernung gegenüber dem alten Stop. Zugleich kann ein späterer normaler Rücklauf die Position früher beenden. Nachziehen verändert also nicht nur das Geldrisiko, sondern auch die Chance, eine längere Bewegung zu halten.",
      "Ein Stop am ursprünglichen Einstieg heißt auch nicht automatisch ein verlustfreier Trade. Kosten und abweichende Ausführung bleiben möglich. Nora dokumentiert Zeitpunkt und neue Regel; sie zeichnet den Stop nicht rückwirkend an die perfekte Stelle."
    ],
    "prompt": "Ist ein Stop am Einstieg automatisch ein verlustfreier Ausstieg?",
    "answers": [
      "Nein, Kosten und Ausführungsabweichungen können Verlust verursachen.",
      "Ja, immer exakt null Euro.",
      "Ja, wenn das Bild später steigt."
    ],
    "rule": "Einen Stop nachziehen heißt die Managementregel verändern.",
    "diagram": "par1-pullback"
  },
  {
    "title": "Aufstocken erhöht das Gesamtrisiko",
    "summary": "Eine zweite Teilposition hat ihren eigenen Einstiegspreis.",
    "paragraphs": [
      "Nora denkt über eine zusätzliche Teilposition nach. Zehn erste Einheiten zu 101,4 und fünf weitere zu 102,2 hätten bei demselben Stop 98,4 zusammen 30 plus 19, also 49 Euro geplantes Preisrisiko.",
      "Das übersteigt ihr ursprüngliches Budget von 30 Euro. Der bessere Verlauf erlaubt nicht automatisch mehr Risiko. Jede Teilposition trägt ihren Abstand zum gemeinsamen oder eigenen Stop zur Rechnung bei.",
      "Ein gestiegener Buchgewinn ist kein neuer Geldbetrag, der garantiert verfügbar bleibt. Nora muss Menge, Stop und Gesamtrisiko vor einer Änderung berechnen. Für diesen Anfängerfall bleibt die ursprüngliche Position ohne Aufstocken leichter nachvollziehbar."
    ],
    "prompt": "Wie hoch ist das geplante Preisrisiko der zwei Teilpositionen zusammen?",
    "answers": [
      "49 Euro vor Kosten.",
      "30 Euro, weil nur der erste Einstieg zählt.",
      "19 Euro, weil der Buchgewinn alles bezahlt."
    ],
    "rule": "Prüfe das Gesamtrisiko aller Teilpositionen.",
    "diagram": "par1-risk"
  },
  {
    "title": "Ein Zielkontakt bestätigt keine eigene Ausführung",
    "summary": "Chartpreis und Orderbestätigung sind verschiedene Belege.",
    "paragraphs": [
      "In der erfolgreichen Fortsetzung erreicht Kerze 9 ein Hoch von 104,0. Unser Messziel 103,9 liegt damit innerhalb ihrer gehandelten Spanne. Das Ziel wurde im Übungsdatensatz berührt.",
      "Ob eine eigene Verkaufsorder ausgeführt worden wäre, hängt unter anderem von Orderart, verfügbarer Menge und Ausführungsbedingungen ab. Der Kerzenchart enthält keine Orderbestätigung für Nora.",
      "Wir können daher sagen: Der Preis erreichte die geplante Zone. Für eine echte Auswertung müssten tatsächliche Einstiege, Ausstiege und Kosten separat vorliegen. Eine perfekte Chartberührung darf nicht als belegter Kontogewinn gezählt werden."
    ],
    "prompt": "Was beweist das Hoch von 104,0 für das Ziel 103,9?",
    "answers": [
      "Die Zielzone liegt innerhalb der gehandelten Spanne.",
      "Noras Limitorder wurde garantiert vollständig ausgeführt.",
      "Nora hat garantiert 25 Euro verdient."
    ],
    "rule": "Zielberührung und eigene Ausführung getrennt nachweisen.",
    "diagram": "par1-followthrough"
  },
  {
    "title": "Verpasste Bewegung ohne Ärger auswerten",
    "summary": "Nicht jeder steigende Chart ist eine versäumte Pflicht.",
    "paragraphs": [
      "Nora wartete auf einen Rücksetzer bis 100. Im erfolgreichen Pfad blieb das Rücksetzertief bei 101,5. Ihre Einstiegsbedingung erschien also nicht, obwohl das spätere Ziel erreicht wurde.",
      "Sie kann nun prüfen, ob ihre Warte-Regel zu ihren Zielen passt. Für eine Änderung braucht sie mehr als einen einzelnen verpassten Gewinner. Eine Regel, die manche gute Bewegungen auslässt, kann zugleich ungeeignete Fälle vermeiden.",
      "Beim nächsten Fall aus Ärger spontan früher einzusteigen wäre keine saubere Auswertung. Nora sammelt vergleichbare Situationen und prüft eine geänderte Regel zunächst im Üben. Das spätere Ergebnis wird nicht zum Vorwurf an ihr früheres Wissen."
    ],
    "prompt": "Was ist die passende erste Bewertung des ausgebliebenen Rücksetzers?",
    "answers": [
      "Ihre Einstiegsbedingung erschien nicht.",
      "Sie hätte sicher den perfekten Einstieg haben müssen.",
      "Sie muss im nächsten Fall doppelt handeln."
    ],
    "rule": "Bewerte Regel und Ergebnis getrennt.",
    "diagram": "par1-pullback"
  },
  {
    "title": "Den kompletten Ausbruchsplan erklären",
    "summary": "Grenze, Information, Einstieg, Stop, Ziel und Grenzen gehören in einen Bericht.",
    "paragraphs": [
      "Nora fasst den Entscheidungspunkt nach Kerze 5 zusammen: Bereich 98 bis 100, Ausbruchsschluss 101,4, großer steigender Körper und bislang keine abgeschlossene Anschlusskerze. Das sind die sichtbaren Angaben zu diesem Zeitpunkt.",
      "Ihr gedachter Plan nennt Einstieg 101,4, Stop 98,4, Messziel 103,9 und zehn Einheiten mit 30 Euro geplantem Preisrisiko. Die zwei Euro Beispielkosten führen zu 23 Euro möglichem Nettogewinn am Ziel oder 32 Euro Verlust am Stop unter den vereinfachten Annahmen.",
      "Sie ergänzt die offenen Fragen: tatsächliche Ausführung, mögliche Abweichungen und fehlende gemessene Trefferquote. Sowohl die erfolgreiche Fortsetzung als auch der Rückfall passen zu einer anfangs unbekannten Zukunft. Ein vollständiger Bericht lässt diese Unsicherheit sichtbar."
    ],
    "prompt": "Welche Angabe fehlt einem Bericht „Große Kerze, deshalb kaufen“?",
    "answers": [
      "Kontext, konkrete Regeln und eine Risikorechnung.",
      "Nur eine auffällige Farbe.",
      "Nur das spätere Hoch."
    ],
    "rule": "Ein guter Plan erklärt Handlung, Scheitern und Unsicherheit.",
    "diagram": "par1-risk"
  }
]);
