import { makeLessons } from './lessons';
export const rangesChapterThreeLessons = makeLessons('chapter-03', 'Kapitel 3 · Den ersten Ausbruch einordnen', [
  {
    "title": "Der erste Ausbruch ist noch kein fertiger Trend",
    "summary": "Nach Kerze 5 kennen wir nur den Beginn eines möglichen neuen Verlaufs.",
    "paragraphs": [
      "Nora beginnt einen neuen eigenen Minutenfall. Die ersten vier Kerzen bleiben zwischen 68 und 70 Punkten. Die fünfte Kerze eröffnet bei 69,4, erreicht 71,2 und schließt bei 71,1. Ihr Tief ist 69,3.",
      "Die Minute überschreitet die obere Grenze 70 und schließt darüber. Das nennen wir den ersten Ausbruch in diesem Ausschnitt. Noch gibt es keine abgeschlossene Folgekerze, die eine Fortsetzung unterstützen könnte.",
      "Ein späterer Tageschart könnte die Bewegung klar erscheinen lassen. Nora besitzt nach Minute 5 aber nicht das Wissen des Tagesendes. Sie beschreibt den Beginn und hält verschiedene Fortsetzungen offen."
    ],
    "prompt": "Was ist nach Minute 5 bekannt?",
    "answers": [
      "Ein abgeschlossener Ausbruch über 70, noch ohne Folgekerze.",
      "Der ganze spätere Trendtag.",
      "Ein sicherer Ausstieg am Ziel."
    ],
    "rule": "Den ersten Ausbruch mit dem damaligen Informationsstand beurteilen.",
    "diagram": "par3-first"
  },
  {
    "title": "Die erste Kerze liefert einen konkreten Bezug",
    "summary": "Der Schluss liegt nahe dem Hoch und 1,1 Punkte über der Grenze.",
    "paragraphs": [
      "Kerze 5 hat einen Körper von 71,1 minus 69,4, also 1,7 Punkten. Ihre Spanne beträgt 71,2 minus 69,3, also 1,9. Der obere und untere Schatten messen jeweils 0,1.",
      "Der hohe Schluss beschreibt sichtbare Stärke. Seine Entfernung zur Grenze 70 beträgt 1,1. Nora nennt die Werte, statt die Kerze nur als beeindruckend zu bezeichnen.",
      "Diese Angaben allein beantworten nicht, ob Nora kaufen soll. Dafür fehlen die konkrete Ausstiegsregel, Größe und Kosten. Ein Stärkehinweis ist ein Teil der Entscheidung, nicht die vollständige Entscheidung."
    ],
    "prompt": "Wie weit schließt Kerze 5 über 70?",
    "answers": [
      "1,1 Punkte.",
      "1,9 Punkte.",
      "0,1 Punkt."
    ],
    "rule": "Stärke beschreiben und den Handelsplan separat prüfen.",
    "diagram": "par3-first"
  },
  {
    "title": "Ein Limit am alten Schluss kann unerfüllt bleiben",
    "summary": "Ein früherer Schluss ist kein Anspruch auf eine spätere Ausführung.",
    "paragraphs": [
      "Nora möchte nach Minute 5 zu 71,1 kaufen. Sie denkt an eine Kauf-Limitorder mit diesem Höchstpreis. Die nächste Minute eröffnet im Beispiel bei 71,1 und steigt anschließend; ihr Tief beträgt ebenfalls 71,1.",
      "Auch wenn der Chart einen Handel zu 71,1 zeigt, beweist das nicht die Ausführung ihrer eigenen Order. Ihre Order könnte erst später angekommen sein; andere Aufträge und verfügbare Menge können ebenfalls eine Rolle spielen.",
      "Eine echte Bestätigung müsste aus dem Orderstatus kommen. Nora unterscheidet deshalb Preisberührung, angenommenen Auftrag und tatsächlich bestätigte Menge. Der Kerzenchart allein enthält diese Statusmeldungen nicht."
    ],
    "prompt": "Beweist das Tief 71,1 die Ausführung von Noras Limitorder?",
    "answers": [
      "Nein, dafür braucht sie ihre eigene Ausführungsbestätigung.",
      "Ja, immer vollständig.",
      "Ja, auch wenn ihre Order erst später ankommt."
    ],
    "rule": "Preisberührung und Orderausführung nicht gleichsetzen.",
    "diagram": "par3-pressure"
  },
  {
    "title": "Den Orderstatus vor einer Ersatzorder prüfen",
    "summary": "Ein ungeklärter Auftrag kann später noch ausgeführt werden.",
    "paragraphs": [
      "Der Preis steigt, und Nora ist unsicher, ob ihre Limitorder ausgeführt wurde. Sie möchte stattdessen sofort kaufen. Zuerst prüft sie, ob der alte Auftrag offen, teilweise ausgeführt, vollständig ausgeführt oder bestätigt storniert ist.",
      "Eine neue Kauforder neben einer noch offenen alten könnte zu mehr Position führen als geplant. Auch eine Stornierungsanfrage ist noch nicht dasselbe wie eine bestätigte Stornierung. Während ihrer Bearbeitung kann eine Ausführung eintreffen.",
      "Nora gleicht die tatsächlich bestätigte Position ab, bevor sie einen Ersatzauftrag berechnet. Damit verhindert sie nicht jede Ausführungsabweichung, hält aber das geplante Risiko nachvollziehbar."
    ],
    "prompt": "Was sollte Nora vor einer Ersatzorder prüfen?",
    "answers": [
      "Alten Orderstatus und bereits ausgeführte Menge.",
      "Nur die letzte Kerzenfarbe.",
      "Ob sie sich schnell genug ärgert."
    ],
    "rule": "Ungeklärte Orders zuerst abgleichen.",
    "diagram": "par3-pressure"
  },
  {
    "title": "Eine nicht ausgeführte Order ist kein Verlusttrade",
    "summary": "Ohne bestätigte Position gibt es keinen Positionsgewinn oder Positionsverlust.",
    "paragraphs": [
      "Noras Kaufauftrag wurde in einer Übungsvariante bestätigt storniert, ohne eine Ausführung erhalten zu haben. Der Kurs steigt weiter. Sie ist enttäuscht, aber sie hat aus diesem Auftrag keine offene Position.",
      "Ein verpasster möglicher Gewinn ist etwas anderes als ein tatsächlicher Verlust aus einer Position. Gebühren für Aufträge könnten je nach Modell trotzdem gesondert entstehen; in unserem einfachen Beispiel setzen wir dafür keine Kosten an.",
      "Nora protokolliert „kein Einstieg“, statt eine fiktive negative Rendite einzutragen. Später kann sie prüfen, wie oft ihre Limitregel Gelegenheiten auslässt. Das bleibt getrennt von der Auswertung ausgeführter Trades."
    ],
    "prompt": "Wie protokolliert sie einen ohne Ausführung stornierten Auftrag?",
    "answers": [
      "Als keinen Einstieg, ohne erfundenen Positionsverlust.",
      "Als verlorenen Trade in voller Stopgröße.",
      "Als sicher erzielten Gewinn."
    ],
    "rule": "Ausgeführte Trades und ausgebliebene Einstiege getrennt auswerten.",
    "diagram": "par3-pressure"
  },
  {
    "title": "Mehrere hohe Schlüsse zeigen gerichteten Anschluss",
    "summary": "Die Schlüsse 71,1, 71,9 und 72,5 gehören zur Druckfolge.",
    "paragraphs": [
      "Kerze 6 hat O71,1 H72,0 L71,1 C71,9. Kerze 7 hat O71,9 H72,6 L71,9 C72,5. In dieser Folge liegen ihre Tiefs jeweils am vorherigen Schluss, und die Schlüsse steigen weiter.",
      "Das zeigt im eigenen Datensatz wenig Rücklauf zwischen den Abschnitten. Die Käufer haben dabei keinen Vertrag unterschrieben, weiterzukaufen. Wir sehen Preise und können den Verlauf als gerichteten Anschluss beschreiben.",
      "Diese Folge kennt Nora erst nach Minute 7. Ein nach Minute 5 verfasster Bericht darf sie nicht enthalten. Eine spätere Entscheidung verwendet mehr Information und andere Einstiegspreise."
    ],
    "prompt": "Welche Schlüsse zeigt die Druckfolge?",
    "answers": [
      "71,1; 71,9; 72,5.",
      "69,3; 71,1; 71,9.",
      "70; 70; 70."
    ],
    "rule": "Anschluss mit Zeitbezug und konkreten Preisen beschreiben.",
    "diagram": "par3-pressure"
  },
  {
    "title": "Ein größerer Preisabstand verlangt eine kleinere Menge",
    "summary": "Gleiches Geldbudget kann bei höherem Einstieg weniger Einheiten erlauben.",
    "paragraphs": [
      "Nora verwendet für die Übung einen Stop bei 69,2 und einen Punktwert von einem Euro je Einheit. Beim gedachten Einstieg 71,1 beträgt der Abstand 1,9 Punkte. Zehn Einheiten ergeben 19 Euro geplantes Preisrisiko.",
      "Bei einem späteren Einstieg 72,5 beträgt derselbe Stopabstand 3,3 Punkte. Zehn Einheiten ergäben 33 Euro. Für ein Budget von höchstens 20 Euro vor Kosten passen nur sechs ganze Einheiten: sechs mal 3,3 ergibt 19,8.",
      "Die größere Punktentfernung fühlt sich vielleicht unangenehm an. Sie ist aber nicht dasselbe wie ein automatisch größeres Geldrisiko, wenn die Menge passend reduziert wird. Ausführungsabweichungen bleiben möglich."
    ],
    "prompt": "Welche ganze Menge bleibt bei 3,3 Punkten unter 20 Euro vor Kosten?",
    "answers": [
      "Sechs Einheiten.",
      "Zehn Einheiten.",
      "Sieben Einheiten."
    ],
    "rule": "Menge aus aktuellem Einstieg, Stop und Budget ableiten.",
    "diagram": "par3-risk"
  },
  {
    "title": "Warten kann ohne passende Gelegenheit enden",
    "summary": "Ein gewünschter tiefer Rücksetzer muss nicht erscheinen.",
    "paragraphs": [
      "Nora entscheidet sich für eine andere Regel: Sie möchte einen Rücksetzer bis in die Nähe von 70 sehen. In der Druckfolge bleiben die Tiefs von Kerze 6 und 7 deutlich höher. Ihr Wunschpreis erscheint nicht.",
      "Warten hat hier den Preis eines ausgebliebenen Einstiegs. Das bedeutet nicht, dass sofortiger Kauf immer besser wäre. In einer scheiternden Variante könnte dieselbe Warte-Regel einen ungeeigneten Einstieg vermeiden.",
      "Nora entscheidet vorab, welche Information sie für einen neuen Versuch benötigt. Sie ersetzt eine fehlende Bedingung nicht spontan durch die Angst, die Bewegung zu verpassen."
    ],
    "prompt": "Was folgt, wenn Noras Rücksetzerbedingung nicht erscheint?",
    "answers": [
      "Ihr geplanter Einstieg kann ausbleiben.",
      "Sie bekommt rückwirkend den Preis 70.",
      "Sie muss sofort doppelt kaufen."
    ],
    "rule": "Eine Warte-Regel darf ohne Einstieg enden.",
    "diagram": "par3-pressure"
  },
  {
    "title": "Die erste kleine Pause ist mehrdeutig",
    "summary": "Eine Inside-Bar kann Fortsetzung oder Scheitern vorbereiten.",
    "paragraphs": [
      "In einer zweiten Fortsetzung folgt auf Kerze 5 eine kleine Minute mit O71,1 H71,15 L70,6 C70,9. Hoch und Tief liegen innerhalb der vorherigen Spanne von 69,3 bis 71,2. Das ist eine Inside-Bar, also eine innen liegende Kerze.",
      "Die Minute endet etwas niedriger, aber noch über 70. Sie könnte eine kurze Pause sein. Sie könnte ebenso den Beginn eines stärkeren Rückfalls bilden. Beide Ideen passen zu den bisher bekannten Daten.",
      "Nora legt fest, welche nächsten Preise ihre Einschätzung ändern würden. Das kleine Bild allein sagt ihr nicht, welche Richtung anschließend gewinnt. Ein Mustertitel ersetzt die folgende Beobachtung nicht."
    ],
    "prompt": "Was beweist die Inside-Bar nach dem Ausbruch?",
    "answers": [
      "Eine engere Spanne, aber keine sichere spätere Richtung.",
      "Eine garantierte Fortsetzung nach oben.",
      "Ein garantierter neuer Abwärtstrend."
    ],
    "rule": "Eine kleine Pause mit beiden Richtungen im Blick lesen.",
    "diagram": "par3-inside"
  },
  {
    "title": "Die gleiche Pause kann wieder steigen",
    "summary": "Ein späterer hoher Schluss unterstützt die Fortsetzungsvariante.",
    "paragraphs": [
      "Nach der kleinen Kerze 6 eröffnet Kerze 7 bei 70,9. Sie erreicht 72,3, hat ihr Tief bei 70,8 und schließt bei 72,2. Jetzt liegt neue steigende Stärke oberhalb der Pause vor.",
      "Die zuvor unklare Inside-Bar wird in diesem Pfad zu einer Pause vor weiterem Anstieg. Nora konnte dieses Ergebnis nach Kerze 6 nicht wissen. Sie ergänzt ihre Einschätzung erst mit der neuen Minute.",
      "Wer auf mehr Bestätigung wartete, hat jetzt einen höheren möglichen Einstiegspreis. Die stärkere Bestätigung und die Entfernung zu einem Stop müssen zusammen geprüft werden."
    ],
    "prompt": "Welche neue Information liefert der Schluss 72,2?",
    "answers": [
      "Neue steigende Stärke nach der Pause.",
      "Die Pause war im Voraus sicher erfolgreich.",
      "Alle Orders bei 70,9 wurden garantiert ausgeführt."
    ],
    "rule": "Neue Information ergänzen, ohne früheres Wissen umzuschreiben.",
    "diagram": "par3-resume"
  },
  {
    "title": "Die gleiche Pause kann auch scheitern",
    "summary": "Ein Rückfall unter 70 unterstützt eine andere Einordnung.",
    "paragraphs": [
      "Eine alternative Kerze 7 eröffnet ebenfalls bei 70,9. Sie erreicht nur 71,0, fällt auf 69,4 und schließt bei 69,8. Damit endet sie wieder im ursprünglichen Bereich unter 70.",
      "Der erste Ausbruch und die Inside-Bar waren bis Minute 6 genau dieselben. Erst diese alternative siebte Minute unterscheidet die Pfade. Nora darf die Pause nicht rückwirkend als offensichtlich schlecht bezeichnen.",
      "Der Rückfall schwächt die Fortsetzungsidee. Ob eine vorhandene Position geschlossen wird, hängt von der festgelegten Ausstiegsregel ab. Ein verlorener ursprünglicher Plan rechtfertigt keine spontane größere Gegenposition."
    ],
    "prompt": "Was unterscheidet die beiden Varianten erstmals?",
    "answers": [
      "Die nach der gleichen Pause folgende siebte Kerze.",
      "Die vorherige Grenze, die in beiden 70 ist.",
      "Die identische fünfte Kerze."
    ],
    "rule": "Unsicherheit vor der Entscheidung und Ergebnis danach trennen.",
    "diagram": "par3-failure"
  },
  {
    "title": "Seitwärts ist eine dritte mögliche Entwicklung",
    "summary": "Mehr Überlappung kann die Fortsetzung verzögern, ohne sofort eine Umkehr zu beweisen.",
    "paragraphs": [
      "Eine dritte Variante folgt mit C70,8 und danach C70,9. Beide Minuten handeln ungefähr zwischen 70,4 und 71,2. Der Preis bleibt überwiegend über 70, zeigt aber keinen klaren weiteren Anstieg.",
      "Nora sieht nach dem ersten Ausbruch mehr Überlappung. Das passt zu einer entstehenden kleinen Range. Es ist weder der starke Anschluss der Druckfolge noch der klare Rückfall der Fehlschlagvariante.",
      "Ein Plan, der sofortige Fortsetzung braucht, würde diese Entwicklung anders bewerten als ein länger angelegter Plan. Deshalb schreibt Nora auch die erwartete Geschwindigkeit und ihre Regel bei fehlendem Anschluss auf."
    ],
    "prompt": "Welche dritte Möglichkeit zeigen die überlappenden Minuten?",
    "answers": [
      "Eine kleine Seitwärtsphase statt klarer Fortsetzung oder Rückfall.",
      "Ein bereits garantierter großer Gewinn.",
      "Ein zwingender Ausbruch nach unten."
    ],
    "rule": "Auch stockenden Verlauf als eigene Möglichkeit prüfen.",
    "diagram": "par3-range"
  },
  {
    "title": "Die Pause innerhalb eines starken Anstiegs vergleichen",
    "summary": "Eine spätere Pause besitzt eine andere Vorgeschichte.",
    "paragraphs": [
      "In der Druckfolge kommt die erste kleine Pause erst in Kerze 8. Sie hat O72,5 H72,55 L72,1 C72,2. Sie liegt innerhalb der Spanne von Kerze 7 und folgt drei deutlich steigenden Ausbruchsminuten.",
      "Die Inside-Bar direkt nach Kerze 5 und diese spätere Pause haben nicht dieselbe Vorgeschichte. Ein Mustername allein würde diesen Unterschied verstecken. Nora zählt die vorangegangenen bestätigten Abschnitte.",
      "Die stärkere Vorgeschichte macht die spätere Pause trotzdem nicht sicher. Eine Trendphase kann stocken oder enden. Wir verwenden den Vergleich, um Kontext zu erklären, nicht um eine feste Trefferquote zu vergeben."
    ],
    "prompt": "Warum sind die beiden Inside-Bars nicht gleich einzuordnen?",
    "answers": [
      "Die eine folgt einer Kerze, die andere einer längeren Druckfolge.",
      "Inside-Bars haben grundsätzlich nur eine Bedeutung.",
      "Die spätere Pause kann nie scheitern."
    ],
    "rule": "Gleiche Form mit unterschiedlicher Vorgeschichte vergleichen.",
    "diagram": "par3-pause"
  },
  {
    "title": "Einen Auslöser über dem Pausenhoch festlegen",
    "summary": "Signal, Auslösung und Ausführung bleiben verschiedene Schritte.",
    "paragraphs": [
      "Für eine reine Übungsregel möchte Nora nach Kerze 8 einen Anstieg über deren Hoch 72,55 sehen. Bei einer angenommenen Preisstufe von 0,05 setzt sie die Auslöseschwelle auf 72,60.",
      "In der erfolgreichen Folge handelt Kerze 9 bis 73,4 und schließt bei 73,3. Der Datensatz zeigt Preise über der Schwelle. Daraus darf Nora eine erreichte Preisbedingung ableiten, aber keine bestätigte eigene Ausführung.",
      "Eine tatsächliche Stop-Kauforder könnte anders ausgeführt werden als bei 72,60. Die Regel benötigt daher weiterhin Orderstatus, geplanten Stop und Menge. Ein präziser Schwellenwert ist nur ein Baustein."
    ],
    "prompt": "Wo liegt eine Preisstufe von 0,05 über 72,55?",
    "answers": [
      "Bei 72,60.",
      "Bei 72,56.",
      "Garantiert als Ausführung bei 72,60."
    ],
    "rule": "Auslöseschwelle und tatsächliche Ausführung trennen.",
    "diagram": "par3-pause"
  },
  {
    "title": "Ein Auslöser auf kleinerer Zeitebene braucht neue Daten",
    "summary": "Eine Minutenkerze enthält nicht automatisch den vollständigen Sekundenverlauf.",
    "paragraphs": [
      "Nora denkt darüber nach, einen kleineren Rücksetzer innerhalb einer Minute zu handeln. Dafür müsste sie einen feineren Chart oder die einzelnen zeitlich geordneten Preise sehen. Die Minutenwerte allein liefern keinen fertigen Sekundenchart.",
      "Ein Hoch und Tief einer Minute beweisen nicht ihre genaue Reihenfolge. Ein kleineres Setup darf deshalb nicht aus der großen Kerze erfunden werden. Die Datenanforderung ist Teil der Regel.",
      "Mit einer kleineren Zeitebene entstehen zusätzlich mehr Abschnitte und möglicherweise andere Auslöser. Nora hält den größeren Kontext fest und prüft den feineren Einstieg unabhängig mit passenden Daten."
    ],
    "prompt": "Welche Daten braucht ein Einstieg anhand eines Sekundenmusters?",
    "answers": [
      "Passende feinere zeitlich geordnete Daten.",
      "Nur die vier Minutenwerte.",
      "Nur den späteren Tagesschluss."
    ],
    "rule": "Kleinere Zeitebene tatsächlich beobachten statt hineininterpretieren.",
    "diagram": "par3-inside"
  },
  {
    "title": "Von raschem Schub zu langsameren Abschnitten",
    "summary": "Spike und Channel beschreiben verschiedene Phasen.",
    "paragraphs": [
      "Die rasche Folge bis Kerze 7 nennen wir hier einen Spike: einen kräftigen gerichteten Schub. Die kleine Pause und ein danach langsameres Steigen könnten in eine Kanalphase übergehen. Ein Kanal ist eine gerichtete Bewegung mit mehr Rückläufen.",
      "Die spätere Bewegung muss nicht die gleiche Geschwindigkeit behalten. Wer eine sofortige Fortsetzung erwartet, sollte neue Überlappung wahrnehmen. Nora zeichnet Kanalgrenzen erst mit genügend beobachteten Punkten, nicht mit zukünftigen Wendepunkten.",
      "Ein Spike-und-Kanal-Verlauf ist eine mögliche Entwicklung nach einem Ausbruch. Er ist weder nach der ersten Kerze vollständig bekannt noch ein festes Versprechen über die Zahl weiterer Schübe."
    ],
    "prompt": "Was unterscheidet den raschen Schub von einer möglichen Kanalphase?",
    "answers": [
      "Die Kanalphase kann mehr Rückläufe und langsamere Fortsetzung zeigen.",
      "Jede Kanalphase garantiert steigende Preise.",
      "Ein Kanal ist bereits nach Kerze 1 perfekt festgelegt."
    ],
    "rule": "Geschwindigkeit und Überlappung im Verlauf neu beurteilen.",
    "diagram": "par3-pause"
  },
  {
    "title": "Mehrere Messziele ausdrücklich benennen",
    "summary": "Verschiedene Ausgangsstrecken liefern verschiedene Ziele.",
    "paragraphs": [
      "Eine erste Messregel verwendet die Strecke von O5=69,4 bis C5=71,1. Sie misst 1,7 Punkte. Vom Schluss 71,1 nach oben abgetragen ergibt sie ein Ziel bei 72,8.",
      "Eine zweite Regel verwendet L5=69,3 bis H5=71,2. Sie misst 1,9 Punkte. Vom Hoch 71,2 abgetragen ergibt sich 73,1. Beide Rechnungen sind korrekt für ihre jeweils benannten Regeln.",
      "Nora wählt die Regel vor der Auswertung und beobachtet zunächst den näheren Bereich, wenn beide Teil ihres Plans sind. Sie sucht nach dem Ergebnis nicht beliebig das Ziel aus, das zufällig perfekt passte."
    ],
    "prompt": "Welches Ziel liefert die Open-Close-Regel?",
    "answers": [
      "72,8 Punkte.",
      "73,1 Punkte.",
      "Beide Regeln müssen dasselbe Ziel ergeben."
    ],
    "rule": "Messpunkte vorab nennen und alternative Ziele sichtbar lassen.",
    "diagram": "par3-targets"
  },
  {
    "title": "Ein Messziel ist kein automatischer Umkehrpunkt",
    "summary": "Zielplanung und Gegenposition brauchen unterschiedliche Begründungen.",
    "paragraphs": [
      "Ein Preisbereich bei 72,8 oder 73,1 kann für Gewinnplanung interessant sein. Wenn dort gehandelt wird, darf Nora prüfen, ob ihr Zielauftrag ausgeführt wurde oder ob ihre Managementregel eine Änderung verlangt.",
      "Die Berührung macht einen Short nicht automatisch sinnvoll. Dafür wären ein eigener Auslöser, eine Ausstiegsregel und eine Risikorechnung erforderlich. Ein bestehendes Ziel ist kein Beweis für die kommende Gegenrichtung.",
      "Die kräftige Kerze 9 kann einen Zielbereich sogar überschreiten. Nora bleibt bei der benannten Regel, statt eine exakt vorherbestimmte Wende zu behaupten."
    ],
    "prompt": "Was folgt aus einer Berührung eines Messziels?",
    "answers": [
      "Eine Planprüfung, aber kein automatisch sinnvoller Gegenhandel.",
      "Ein sicherer Abwärtstrend.",
      "Eine bestätigte eigene Ausführung ohne Orderbericht."
    ],
    "rule": "Gewinnziel und Umkehrsignal nicht gleichsetzen.",
    "diagram": "par3-targets"
  },
  {
    "title": "Den ersten Ausbruch nach unten spiegeln",
    "summary": "Das gleiche Entscheidungsproblem gilt in der Gegenrichtung.",
    "paragraphs": [
      "Wir bilden eine eigene Spiegelung mit neuem Preis gleich 140 minus altem Preis. Die Grenze 70 bleibt 70. Kerze 5 wird zu O70,6 H70,7 L68,8 C68,9.",
      "Die folgenden Schlüsse 68,1 und 67,5 unterstützen nun den Ausbruch nach unten. Auch hier kann ein auf einen besseren Preis wartender Trader ohne Einstieg bleiben. Die Richtung ändert die Preisbezüge, nicht die Notwendigkeit eines Plans.",
      "Beim Spiegeln wird das frühere Tief zum neuen Hoch und das frühere Hoch zum neuen Tief. Nora prüft deshalb die Zahlen und verwendet keinen identischen Hoch-Tief-Eintrag mit vertauschter Farbe."
    ],
    "prompt": "Wo liegt der gespiegelte Schluss von Kerze 5?",
    "answers": [
      "68,9 unter der Grenze 70.",
      "71,1 oberhalb von 70.",
      "70,7 am Hoch."
    ],
    "rule": "Die Logik mit korrekten Preisbezügen in beide Richtungen anwenden.",
    "diagram": "par3-bear"
  },
  {
    "title": "Ein langer Schatten ist im Abwärtstrend kein fertiger Kauf",
    "summary": "Eine einzelne Form kann trotz ihrer auffälligen Spitze scheitern.",
    "paragraphs": [
      "In einem eigenen Gegenfall fallen die Schlüsse zunächst von 73,2 über 72,3 und 71,2 auf 69,2. Danach folgt eine Kerze mit O69,4 H70,4 L68,6 C69,5. Sie besitzt einen kleinen Körper und lange Schatten.",
      "Ein langer unterer Schatten zeigt, dass Preise vom Tief zurückkamen. Er beweist aber keinen neuen Aufwärtstrend. Der vorherige Abwärtsverlauf und die folgenden Kerzen bleiben wichtig.",
      "Die nächste kleine Minute erreicht nur 69,8 und schließt bei 69,3. Ein geplanter Kauf über 70,4 wäre damit noch nicht durch diese Minute ausgelöst. Eine auffällige Form allein ist kein eigener Einstieg."
    ],
    "prompt": "Wurde ein Auslöser über 70,4 in der folgenden Minute mit Hoch 69,8 erreicht?",
    "answers": [
      "Nein, ihr Hoch bleibt darunter.",
      "Ja, weil die vorherige Kerze einen Schatten hat.",
      "Ja, jeder Doji löst einen Kauf aus."
    ],
    "rule": "Kerzenform, Auslöser und Anschluss getrennt prüfen.",
    "diagram": "par3-trap"
  },
  {
    "title": "Eine mögliche Falle ohne erfundene Orderkenntnis erklären",
    "summary": "Der Chart zeigt nicht alle tatsächlichen Stops anderer Trader.",
    "paragraphs": [
      "Wer die kleine Schattenkerze als sichere Umkehr betrachtete, könnte zu früh gekauft haben. Die schwache folgende Minute und ein späterer weiterer Rückgang würden diese Vermutung enttäuschen.",
      "Das ist eine mögliche Erklärung für eine Falle. Nora kennt aus dem OHLC-Chart aber weder die Teilnehmerliste noch deren Einstiege und Stops. Sie behauptet deshalb nicht, alle Käufe und Ausstiege anderer Menschen zu sehen.",
      "Bei eigenen Trades kann sie bestätigte Aufträge und die eigene Ausstiegsregel auswerten. Bei fremden Teilnehmern bleiben die Mechanismen eine Hypothese, solange geeignete Daten fehlen."
    ],
    "prompt": "Was kann Nora aus dem normalen Kerzenchart nicht sicher ablesen?",
    "answers": [
      "Die tatsächlichen Stops und Absichten aller anderen Trader.",
      "Das Hoch der abgeschlossenen Kerze.",
      "Den angegebenen Schluss."
    ],
    "rule": "Plausible Teilnehmergeschichten von nachgewiesenen Aufträgen trennen.",
    "diagram": "par3-trap"
  },
  {
    "title": "Ein späterer Umkehrversuch braucht neue Unterstützung",
    "summary": "Neue Stärke kann die Einschätzung ändern, ohne sie vorher sicher zu machen.",
    "paragraphs": [
      "Nach weiterem Rückgang folgt in einer zweiten Erweiterung eine Kerze mit O68,4 H69,9 L68,1 C69,7. Ihre Spanne überschreitet Hoch und Tief der vorherigen Kerze. Das ist eine Outside-Bar, also eine außen liegende Kerze.",
      "Eine folgende Minute schließt bei 70,3. Jetzt besitzt der neue Aufwärtsversuch mehr beobachteten Anschluss als die frühere Schattenkerze. Dieser Unterschied entsteht erst mit den späteren Daten.",
      "Die längere Vorgeschichte wird nicht gelöscht. Nora kann eine neue Hypothese prüfen, muss dafür aber erneut Auslöser, Risiko und Bedingungen festhalten. Ein erster gescheiterter Versuch und ein später stärkerer Versuch sind verschiedene Entscheidungspunkte."
    ],
    "prompt": "Was stärkt den späteren Versuch gegenüber der frühen Schattenkerze?",
    "answers": [
      "Zusätzliche neue Preisstärke und beobachteter Anschluss.",
      "Die Pflicht, den früheren Verlust sofort auszugleichen.",
      "Eine automatisch sichere Umkehr durch den Musternamen."
    ],
    "rule": "Neue Versuche mit ihrem eigenen Informationsstand bewerten.",
    "diagram": "par3-recovery"
  },
  {
    "title": "Bei Nachrichten Preisreaktion und Ausführungsbedingungen prüfen",
    "summary": "Eine Schlagzeile erklärt nicht automatisch die handelbare Gelegenheit.",
    "paragraphs": [
      "Ein schneller Preisrückgang kann zeitlich mit einer Nachricht zusammenfallen. Nora notiert den bekannten Termin und beobachtet die tatsächliche Reaktion. Aus einem einzelnen Chart lässt sich die genaue Ursache aber nicht sicher nachweisen.",
      "Auch eine für das Unternehmen gut klingende Nachricht kann mit fallenden Preisen einhergehen, etwa wenn andere Erwartungen im Spiel waren. Nora ersetzt den beobachteten Verlauf nicht durch eine Geschichte, die sie lieber hören möchte.",
      "Zugleich können schnelle Bewegungen ungünstige Ausführung und breite Spreads begleiten. Deshalb prüft sie verfügbare Informationen und ihre Regeln für Ereignistermine. Der Kurs lehrt keinen pauschalen Verzicht auf Nachrichten oder Risikokontrollen."
    ],
    "prompt": "Was sollte Nora neben der Preisreaktion bei einem Ereignistermin prüfen?",
    "answers": [
      "Ausführungsbedingungen und ihre vorab festgelegten Regeln.",
      "Nur die freundliche Formulierung der Schlagzeile.",
      "Eine Garantie, dass Kurse immer zur Nachricht passen."
    ],
    "rule": "Preisreaktion, mögliche Ursache und handelbares Risiko trennen.",
    "diagram": "par3-bear"
  },
  {
    "title": "Den ersten Ausbruch mit drei Fortsetzungen berichten",
    "summary": "Ein vollständiger Bericht hält Druckfolge, Pause und Scheitern offen.",
    "paragraphs": [
      "Nach Minute 5 schreibt Nora: Range 68 bis 70, Ausbruchsschluss 71,1, große steigende Kerze, noch keine Folgekerze. Sie trennt die Sicht auf den Markt von ihrem möglichen Auftrag und dessen noch unbestätigter Ausführung.",
      "Die späteren Übungspfade zeigen raschen Anschluss, kurze Pause mit Wiederaufnahme, Rückfall oder stockende Seitwärtsentwicklung. Aus demselben Anfang kann also mehr als ein Verlauf entstehen.",
      "Ein nachvollziehbarer Plan nennt Auslöser, Stop, Menge, Kosten und Verhalten bei fehlendem Anschluss. Nora bewertet danach, ob ihre damalige Entscheidung den Regeln entsprach, statt die Zukunft als schon vorher bekannt darzustellen."
    ],
    "prompt": "Was gehört in den Bericht nach Minute 5?",
    "answers": [
      "Der damalige Ausbruch und mehrere noch offene Fortsetzungen.",
      "Der sicher vorher bekannte spätere Gewinner.",
      "Nur ein Mustername ohne Risikoplan."
    ],
    "rule": "Ersten Ausbruch, Auftrag und mögliche Fortsetzungen getrennt dokumentieren.",
    "diagram": "par3-first"
  }
]);
