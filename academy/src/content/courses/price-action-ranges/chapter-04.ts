import { makeLessons } from './lessons';
export const rangesChapterFourLessons = makeLessons('chapter-04', 'Kapitel 4 · Ausbrüche innerhalb eines starken Trends', [
  {
    "title": "Ein neuer Ausbruch innerhalb eines bestehenden Trends",
    "summary": "Die Vorgeschichte unterscheidet diesen Fall vom ersten Ausbruch aus einer Range.",
    "paragraphs": [
      "Nora liest einen neuen eigenen Minutenfall. Vier Kerzen schließen bei 96,0; 97,1; 98,4 und 99,8. Die Hochs steigen von 96,2 bis 100,0. Diese Folge zeigt bereits einen deutlichen Anstieg.",
      "Dann folgt ein Rücksetzer in Kerze 5. Ein späterer Handel oberhalb von 100 wäre ein Ausbruch über ein vorheriges Trendhoch. Das ist ein anderer Bezug als der erste Ausbruch aus einem lange seitwärts gehandelten Bereich.",
      "Nora benennt deshalb zuerst den vorhandenen Trend und das konkrete Hoch. Der Name Ausbruch bleibt gleich, aber Vorgeschichte und mögliche Entscheidungen unterscheiden sich. Auch ein bestehender Trend kann enden."
    ],
    "prompt": "Was unterscheidet diesen Fall vom ersten Ausbruch aus einer Range?",
    "answers": [
      "Vor dem neuen Ausbruch besteht schon eine gerichtete Bewegung.",
      "Es braucht keinen Stop mehr.",
      "Das neue Hoch ist garantiert."
    ],
    "rule": "Den vorhandenen Trend und die neue Grenze zuerst benennen.",
    "diagram": "par4-context"
  },
  {
    "title": "Stärke vor dem Rücksetzer begründen",
    "summary": "Vier steigende Schlüsse sind sichtbare Hinweise, keine Zukunftsgarantie.",
    "paragraphs": [
      "Die ersten vier Kerzen haben große steigende Körper mit vergleichsweise kleinen Rückläufen. Die Tiefs liegen bei 94,8; 95,8; 97,0 und 98,2. Die gehandelten Bereiche verlagern sich schrittweise höher.",
      "Nora kann das als bisherigen Aufwärtsdruck beschreiben. Sie kennt aber aus diesen Kerzen weder die Absichten aller Teilnehmer noch die Zahl noch offener Kaufaufträge. Solche Geschichten bleiben zusätzliche Vermutungen.",
      "Die sichtbare Stärke liefert Kontext für den Rücksetzer. Sie hebt die Unsicherheit des nächsten Abschnitts nicht auf. Ein konkreter Einstieg muss weiterhin zu Preis, Ausstieg und Budget passen."
    ],
    "prompt": "Welche Angabe ist tatsächlich im Übungsfall sichtbar?",
    "answers": [
      "Die Folge steigender Schlüsse und Tiefs.",
      "Die komplette Liste institutioneller Kauforders.",
      "Eine sichere nächste steigende Kerze."
    ],
    "rule": "Sichtbare Stärke von Teilnehmergeschichten und Prognosen trennen.",
    "diagram": "par4-context"
  },
  {
    "title": "Die erste Korrektur als eigenen Abschnitt lesen",
    "summary": "Kerze 5 handelt tiefer, aber weit oberhalb des Trendbeginns.",
    "paragraphs": [
      "Kerze 5 eröffnet bei 99,8, erreicht 99,9, fällt auf 99,1 und schließt bei 99,3. Sie ist eine fallende Minute nach dem Anstieg bis H4=100,0.",
      "Das Tief liegt 0,9 Punkt unter diesem vorherigen Hoch. Dieser Rücklauf kann eine Pause sein oder sich ausweiten. Er setzt nicht automatisch den ganzen bisherigen Trend außer Kraft.",
      "Nora notiert Hoch, Tief und Schluss der Korrektur getrennt. Sie behauptet aus dem abgeschlossenen OHLC-Bild nicht, in welcher Reihenfolge Hoch und Tief innerhalb der Minute erreicht wurden."
    ],
    "prompt": "Wie weit liegt L5=99,1 unter H4=100,0?",
    "answers": [
      "0,9 Punkt.",
      "5,2 Punkte.",
      "Eine garantiert abgeschlossene Umkehr."
    ],
    "rule": "Tiefe des Rücksetzers mit konkretem Bezug messen.",
    "diagram": "par4-pullback"
  },
  {
    "title": "Vor dem alten Hoch kann ein früherer Auslöser liegen",
    "summary": "Das Pausenhoch und das vorherige Trendhoch sind verschiedene Grenzen.",
    "paragraphs": [
      "Nora prüft zwei Preisbedingungen. Das Hoch der Korrektur liegt bei 99,9; das ältere Trendhoch bei 100,0. Bei einer Preisstufe von 0,1 liegt ein Auslöser über der Korrektur bei 100,0 und einer über dem Trendhoch bei 100,1.",
      "Die frühere Bedingung kann somit erreicht sein, bevor das alte Trendhoch überschritten wird. Der Preis 100,0 berührt das alte Hoch lediglich. Er liegt nicht darüber.",
      "Das frühere Signal verwendet weniger Information über den endgültigen Ausbruch am alten Hoch. Die spätere Bedingung verlangt mehr Bewegung. Beide sind unterschiedliche Regeln und benötigen eine eigene Bewertung."
    ],
    "prompt": "Welche Schwelle liegt eine Preisstufe über dem Pausenhoch 99,9?",
    "answers": [
      "100,0; das alte Trendhoch wird damit nur berührt.",
      "100,1, genau dasselbe wie der spätere Auslöser.",
      "99,9, weil keine Überschreitung nötig ist."
    ],
    "rule": "Pausenhoch und altes Trendhoch getrennt verwenden.",
    "diagram": "par4-entries"
  },
  {
    "title": "Den ersten Aufwärtsversuch verständlich zählen",
    "summary": "High 1 bezeichnet hier den ersten erneuten Versuch nach Beginn der Korrektur.",
    "paragraphs": [
      "High 1 ist eine Zählweise für einen ersten Aufwärtsversuch in einer Korrektur eines Aufwärtsverlaufs. Für unsere Übung zählen wir den ersten Abschnitt, dessen Hoch nach Beginn des Rücksetzers das Hoch des vorherigen Abschnitts überschreitet.",
      "Im kurzen Fall überschreitet Kerze 6 das Hoch 99,9 von Kerze 5. Sie ist damit der erste solche Versuch. Das ist eine Beschreibung des Setups, keine Orderbestätigung und keine universell profitable Regel.",
      "Nora hält den Beginn der Korrektur und die verglichenen Kerzen fest. Ohne diesen Kontext wäre eine beliebige höhere Kerze nicht automatisch ein sinnvoller High-1-Einstieg."
    ],
    "prompt": "Welcher Abschnitt ist im kurzen Fall der erste Aufwärtsversuch?",
    "answers": [
      "Kerze 6 über dem Hoch von Kerze 5.",
      "Kerze 2 mitten im ursprünglichen Schub.",
      "Jede Kerze mit grünem Körper."
    ],
    "rule": "Zählung erst nach einem benannten Korrekturbeginn anwenden.",
    "diagram": "par4-entries"
  },
  {
    "title": "Mehr Bestätigung kann einen anderen Preis verlangen",
    "summary": "Der neue Schluss von Kerze 6 liegt bei 100,4.",
    "paragraphs": [
      "Kerze 6 hat O99,3 H100,6 L99,2 C100,4. Im Datensatz handelt sie sowohl über dem Pausenhoch als auch über dem alten Trendhoch. Sie schließt oberhalb beider Grenzen.",
      "Erst nach ihrem Abschluss kennt Nora den hohen Schluss 100,4. Ein Einstieg nach dieser Bestätigung wäre zu einem anderen Preis zu prüfen als die früheren Schwellen 100,0 oder 100,1.",
      "Das spätere gute Bild darf nicht rückwirkend als Information eines früheren Auftrags gelten. Nora vergleicht Entscheidungen mit den Daten, die am jeweiligen Zeitpunkt tatsächlich vorlagen."
    ],
    "prompt": "Wann kennt Nora den endgültigen Schluss 100,4?",
    "answers": [
      "Erst nach Abschluss von Kerze 6.",
      "Schon vor Beginn von Kerze 5.",
      "Sobald sie eine Stoporder plant."
    ],
    "rule": "Bestätigungszeitpunkt und Einstiegspreis gemeinsam prüfen.",
    "diagram": "par4-entries"
  },
  {
    "title": "Frühe und späte Einstiegsideen rechnen",
    "summary": "Gleicher Stop führt zu verschiedenen Abständen und Zielentfernungen.",
    "paragraphs": [
      "Für eine reine Rechnung nehmen wir bestätigte Einstiege genau bei 100,0 oder 100,1 an. Der gemeinsame geplante Stop liegt bei 99,0, das Ziel bei 101,8. Ein Punkt je Einheit entspricht im Modell einem Euro.",
      "Der frühere Preis hat 1 Punkt Stopabstand und 1,8 Punkte Zielentfernung. Der spätere hat 1,1 Punkte Stopabstand und 1,7 Punkte Zielentfernung. Bei zehn Einheiten ergeben sich 10 oder 11 Euro Preisrisiko vor Kosten.",
      "Die günstiger aussehende Rechnung beweist nicht, dass die frühere Regel den höheren Erwartungswert besitzt. Dafür fehlen unter anderem gemessene Erfolgsquoten und tatsächliche Ausführungen. Wir vergleichen zunächst nur die Annahmen."
    ],
    "prompt": "Welche Zielentfernung hat der spätere Einstieg 100,1 bis 101,8?",
    "answers": [
      "1,7 Punkte.",
      "1,8 Punkte.",
      "Eine garantierte Gewinnsumme."
    ],
    "rule": "Preisvorteil und belegten Erwartungswert unterscheiden.",
    "diagram": "par4-risk"
  },
  {
    "title": "Ein Stop unter dem Rücksetzertief ist eine konkrete Hypothese",
    "summary": "Das Tief von Kerze 5 ist ein Bezug, keine vorgeschriebene Stopposition.",
    "paragraphs": [
      "Nora setzt im Beispiel den Stop eine Preisstufe unter L5=99,1, also bei 99,0. Ihre Hypothese lautet: Der neue Aufwärtsversuch soll dieses Rücksetzertief nicht erneut unterschreiten.",
      "Ein viel weiter entfernter Stop würde eine andere Ausstiegsbedingung prüfen. Ein enger Stop knapp unter dem Einstieg könnte schon durch kleine normale Schwankungen erreicht werden. Keine Variante ist allein durch ihren Abstand richtig.",
      "Nora begründet die Position des Stops zuerst und leitet dann die Menge ab. Ein Stop garantiert weder den Ausführungspreis noch einen maximalen Verlust unter allen Marktbedingungen."
    ],
    "prompt": "Welche Hypothese steht hinter dem Beispielstop 99,0?",
    "answers": [
      "Das Rücksetzertief 99,1 soll nicht erneut unterschritten werden.",
      "Der Kurs darf niemals einen Tick zurücklaufen.",
      "Jeder Trendstop muss immer bei 99,0 liegen."
    ],
    "rule": "Stopbezug und Handelsidee müssen zusammenpassen.",
    "diagram": "par4-risk"
  },
  {
    "title": "Ein günstiger Limitpreis enthält weniger Bestätigung",
    "summary": "Ein Kauf unter dem Pausenhoch kann stattfinden, während die Korrektur noch läuft.",
    "paragraphs": [
      "Eine andere Idee wäre, innerhalb des Rücksetzers etwa zu 99,2 kaufen zu wollen. Der Preis wäre günstiger als 100,0. Zu diesem Zeitpunkt müsste aber noch kein neuer Aufwärtsversuch sichtbar sein.",
      "Die Korrektur könnte weiter fallen. Die günstigere Preisentfernung zum Stop allein macht die Regel daher nicht überlegen. Nora beschreibt, welche Information sie für den Preisvorteil aufgibt.",
      "Ein Chartkontakt bei 99,2 bestätigt ebenfalls keine eigene Limit-Ausführung. Sie benötigt Orderstatus und Menge. Ein früher Limitansatz und ein späterer Stopansatz dürfen nicht als derselbe Trade ausgewertet werden."
    ],
    "prompt": "Was gibt der frühere Limitansatz möglicherweise auf?",
    "answers": [
      "Bestätigung eines bereits beobachteten neuen Aufwärtsversuchs.",
      "Die Notwendigkeit eines Stopplans.",
      "Alle Kosten des Handels."
    ],
    "rule": "Preisvorteil und fehlende Bestätigung gemeinsam benennen.",
    "diagram": "par4-pullback"
  },
  {
    "title": "Auf einen zweiten Versuch warten kann den ersten verpassen",
    "summary": "Eine Regel für High 2 muss nicht in jeder kurzen Korrektur erscheinen.",
    "paragraphs": [
      "Nora bevorzugt manchmal zwei getrennte Aufwärtsversuche nach einem Rücksetzer. Im kurzen Hauptfall steigt Kerze 6 bereits deutlich, und Kerze 7 schließt bei 101,3. Es gab davor keinen zweiten getrennten Versuch.",
      "Eine High-2-Warte-Regel kann deshalb ohne Einstieg enden. Das ist kein Defekt der Chartdaten. Es ist eine Folge der gewählten Bedingung. In längeren Korrekturen könnte dieselbe Regel zusätzliche Information liefern.",
      "Nora ändert die Regel nicht mitten im Ärger über den verpassten ersten Versuch. Sie kann einen vorher festgelegten alternativen Einstieg prüfen, muss ihn aber als eigene Regel behandeln."
    ],
    "prompt": "Was kann bei Warten auf einen zweiten Versuch im Hauptfall passieren?",
    "answers": [
      "Die passende Bedingung erscheint nicht, der Einstieg bleibt aus.",
      "Der erste Versuch wird rückwirkend zu High 2.",
      "Ein besserer Preis ist garantiert."
    ],
    "rule": "Wartebedingungen und verpasste Chancen ehrlich auswerten.",
    "diagram": "par4-follow"
  },
  {
    "title": "Zwei Versuche benötigen eine erneute Gegenbewegung",
    "summary": "High 2 ist nicht einfach die zweite steigende Kerze.",
    "paragraphs": [
      "Im längeren Vergleichsfall steigt das Hoch von Kerze 6 zunächst über das Hoch von Kerze 5. Danach fällt Kerze 7 erneut zurück und unterschreitet das Tief von Kerze 6. Damit beginnt eine weitere Gegenbewegung.",
      "Kerze 8 bleibt mit ihrem Hoch unter dem Hoch von Kerze 7. Erst Kerze 9 überschreitet das Hoch von Kerze 8. Nach unserer erklärten Übungszählung ist dies der zweite getrennte Aufwärtsversuch.",
      "Zwei aufeinanderfolgende steigende Kerzen ohne neue Korrektur wären etwas anderes. Die Zählung soll den Verlauf nachvollziehbar machen und keine Sicherheit durch die Zahl zwei erzeugen."
    ],
    "prompt": "Was trennt die beiden Versuche in diesem Beispiel?",
    "answers": [
      "Eine erneute Gegenbewegung zwischen ihnen.",
      "Nur die zweite grüne Farbe.",
      "Der Wunsch, einen schöneren Namen zu verwenden."
    ],
    "rule": "Versuche anhand des Verlaufs statt der Kerzenfarbe zählen.",
    "diagram": "par4-second"
  },
  {
    "title": "Eine alternative Ausbruchsorder vorab planen",
    "summary": "Ein Ersatzplan am alten Hoch ist eine eigene Einstiegsidee.",
    "paragraphs": [
      "Nora könnte nach Kerze 5 festlegen: Wenn mein früherer Rücksetzereinstieg nicht ausgeführt wird, prüfe ich stattdessen eine Bedingung über dem alten Hoch bei 100,1. Das ist ein geplanter Alternativfall.",
      "Er ersetzt keinen Risikoplan. Bei einer Auslösung muss sie aktuelle Ausführung, Stop und Menge prüfen. Eine Order am alten Hoch darf nicht bloß dazu dienen, auf jeden Fall irgendwie in den Markt zu gelangen.",
      "Die Alternative kann ebenfalls scheitern oder unpassend teuer ausgeführt werden. Auslassen bleibt eine mögliche Entscheidung, wenn der geprüfte Plan nicht mehr passt."
    ],
    "prompt": "Wie sollte ein Alternativauftrag am alten Hoch behandelt werden?",
    "answers": [
      "Als eigene vorab definierte Regel mit Risikoplan.",
      "Als Pflicht, unbedingt zu kaufen.",
      "Als automatisch verlustfreie Ersatzlösung."
    ],
    "rule": "Alternativen vorher definieren statt der Bewegung hinterherlaufen.",
    "diagram": "par4-entries"
  },
  {
    "title": "Mehrere Kauforders können dieselbe Bewegung erwischen",
    "summary": "Bestätigte Menge und offener Orderstatus begrenzen das Risiko.",
    "paragraphs": [
      "Wenn Nora zugleich einen Limitauftrag im Rücksetzer und eine Stop-Kauforder am alten Hoch offen lässt, könnten beide ausgeführt werden. Das wäre mehr Position als ein einzelner geplanter Einstieg.",
      "Sie darf nicht annehmen, dass eine automatisch die andere beendet, wenn keine entsprechende verlässliche Verknüpfung eingerichtet ist. Selbst bei verknüpften Aufträgen muss sie deren konkrete Funktionsweise und Bestätigungen kennen.",
      "Vor einer Änderung gleicht sie offene Aufträge, ausgeführte Menge und bestätigte Stornierungen ab. Ihr Budget bezieht sich auf alle tatsächlich vorhandenen Teilpositionen."
    ],
    "prompt": "Welche Gefahr entsteht durch zwei unverbundene Kauforders?",
    "answers": [
      "Beide können ausgeführt werden und die Menge erhöhen.",
      "Sie garantieren einen günstigeren Durchschnitt ohne Zusatzrisiko.",
      "Eine löscht sich in jedem System automatisch."
    ],
    "rule": "Risiko aller Aufträge und Teilpositionen zusammen prüfen.",
    "diagram": "par4-risk"
  },
  {
    "title": "Die Reaktion nach dem alten Hoch lesen",
    "summary": "Ein höherer Schluss unterstützt die Ausbruchsidee erst nach dem Ereignis.",
    "paragraphs": [
      "Im Hauptfall schließt Kerze 6 bei 100,4 oberhalb des alten Hochs 100. Die folgende Kerze 7 hat H101,5 L100,2 C101,3. Der neu gehandelte Bereich bleibt weitgehend höher.",
      "Nora kann den Anschluss als Unterstützung für die Fortsetzung einordnen. Sie misst den tatsächlichen Verlauf nach der Grenze, statt allein aus deren Überschreitung ein gutes Ergebnis abzuleiten.",
      "Auch das ist keine Behauptung, dass im Markt keine Verkäufer vorhanden gewesen wären. Jedes Geschäft hat beide Seiten. Der Kerzenchart zeigt die Preisentwicklung, nicht alle Absichten."
    ],
    "prompt": "Welche folgende Angabe unterstützt den Ausbruch?",
    "answers": [
      "Kerze 7 schließt bei 101,3 und bleibt mit ihrem Tief über 100.",
      "Die bloße Existenz der Linie 100.",
      "Eine vollständige Liste neuer Käufer im Kerzenchart."
    ],
    "rule": "Reaktion nach der Grenze zusätzlich zur Überschreitung prüfen.",
    "diagram": "par4-follow"
  },
  {
    "title": "Ein neues Hoch kann sofort zurückfallen",
    "summary": "Ein bestehender Trend schützt einen späten Ausbruch nicht vor Scheitern.",
    "paragraphs": [
      "In der Fehlschlagvariante beginnt Kerze 6 bei 99,3 und erreicht 100,2. Sie überschreitet also das alte Hoch 100. Danach schließt sie jedoch bei 98,9 mit Tief 98,7.",
      "Die nächste Minute schließt bei 98,6. Statt weiteren Anschlusses sehen wir einen Rückfall. Der anfängliche Trend und die Korrektur bis Kerze 5 waren dieselben wie im Hauptfall.",
      "Nora kann daraus Schwäche des Fortsetzungsversuchs ableiten. Ob sich eine größere Range oder eine Umkehr entwickelt, bleibt eine weitere Frage. Ein Fehlausbruch bedeutet nicht automatisch einen fertigen Abwärtstrend."
    ],
    "prompt": "Was zeigt der Schluss 98,9 trotz Hoch 100,2?",
    "answers": [
      "Ein Rückfall nach Überschreitung des alten Hochs.",
      "Dass 100 niemals überschritten wurde.",
      "Einen garantiert vollständigen Abwärtstrend."
    ],
    "rule": "Alten Trend und neues Scheitern gleichzeitig wahrnehmen.",
    "diagram": "par4-failure"
  },
  {
    "title": "Trendstärke kann sich im Verlauf verändern",
    "summary": "Frühere Stärke ist kein dauerhaft gültiges Etikett.",
    "paragraphs": [
      "Die erste Folge war klar aufwärts gerichtet. Wenn neue Hochs später kaum Anschluss haben und schnell zurückfallen, ist der aktuelle Verlauf weniger einseitig. Nora verwendet ihre frühere Beschreibung nicht unverändert weiter.",
      "Sie prüft nun mehr Überlappung, Gegenkerzen und die Lage der Rücksetzer. Diese Hinweise können zu einer entstehenden Range passen. Für deren Grenzen braucht sie weitere beobachtete Preise.",
      "Eine aktualisierte Einschätzung ist keine schlechte Disziplin. Unbegründetes Festhalten an einer alten Idee wäre schlechter zu prüfen. Die Änderung muss aber aus Daten folgen und dokumentiert sein."
    ],
    "prompt": "Wie behandelt Nora frühere Trendstärke nach neuen Rückfällen?",
    "answers": [
      "Sie überprüft die aktuelle Beschreibung anhand der neuen Daten.",
      "Sie erklärt den Trend für immer stark.",
      "Sie verdoppelt die Position ohne neue Rechnung."
    ],
    "rule": "Marktzustand im Verlauf aktualisieren.",
    "diagram": "par4-failure"
  },
  {
    "title": "Der dritte Schub ist ein Hinweis, keine Uhr",
    "summary": "Mehrere Aufwärtsstrecken können zu späterer Ermüdung passen.",
    "paragraphs": [
      "Im erweiterten Hauptfall entstehen Hochbereiche bei 100,0, 101,5 und 102,0, jeweils mit Rückläufen dazwischen. Nora kann darin mehrere Aufwärtsstrecken beschreiben.",
      "Eine weitere Kerze erreicht 102,3, schließt aber bei 101,0. Dieser hohe Ausschlag mit tieferem Schluss unterscheidet sich vom frühen kräftigen Anschluss. Das liefert ein Gegenargument für einen späten Kauf.",
      "Die Anzahl drei allein erzwingt keine Umkehr. Unterschiedliche Zeitebenen oder Zählregeln können anders gruppieren. Nora nennt die verwendeten Abschnitte und prüft die tatsächliche Reaktion."
    ],
    "prompt": "Was ist am späten Schluss 101,0 nach Hoch 102,3 relevant?",
    "answers": [
      "Der Rückfall liefert ein Gegenargument zum späten Fortsetzungsversuch.",
      "Genau drei Schübe garantieren immer die Umkehr.",
      "Der hohe Ausschlag bestätigt automatisch weiteren Anstieg."
    ],
    "rule": "Schubzahl zusammen mit Verlauf und Schlusslage prüfen.",
    "diagram": "par4-late"
  },
  {
    "title": "Eine Trendlinie erst mit bekannten Punkten zeichnen",
    "summary": "Ein Linienbruch ist ein neuer Hinweis und kein fertiger Gegenhandel.",
    "paragraphs": [
      "Eine Trendlinie verbindet vorher festgelegte passende Punkte. Nora kann beispielsweise zwei bereits beobachtete Rücksetzertiefs verwenden. Spätere Tiefs darf sie nicht benutzen, um die Linie rückwirkend passend zu machen.",
      "Wenn der Kurs die Linie später durchbricht, ist das neue Information. Eine schräg eingezeichnete Linie kann aber verschieden gewählt sein. Der Bruch allein beweist weder eine komplette Trendwende noch die Qualität eines Shorts.",
      "Nora prüft zusätzlich Preisstruktur, Anschluss und einen eigenen Gegenplan. Die Linie darf die Beobachtung unterstützen, ohne sie als unabhängigen Beweis zu vervielfachen."
    ],
    "prompt": "Welche Punkte darf Nora für eine damalige Trendlinie verwenden?",
    "answers": [
      "Nur Punkte, die zu diesem Zeitpunkt bekannt waren.",
      "Das zukünftige Tief, damit die Linie schön passt.",
      "Beliebige Punkte bis die gewünschte Richtung entsteht."
    ],
    "rule": "Linienregel und damaligen Informationsstand festhalten.",
    "diagram": "par4-late"
  },
  {
    "title": "Kurzes Ziel und längeres Halten vergleichen",
    "summary": "Ein Trade auf wenig Bewegung ist anders als ein Plan für mehrere weitere Schübe.",
    "paragraphs": [
      "Ein kurzer Plan könnte eine kleine Zielentfernung nach dem neuen Hoch vorsehen. Ein längerer Plan würde mehr Bewegung abwarten und zwischenzeitliche Rückläufe akzeptieren. Diese Absichten verlangen unterschiedliche Ausstiegsregeln.",
      "Bei nachlassendem Anschluss kann ein ursprünglich kurzer Plan trotzdem früh enden. Ein länger gehaltener Trade braucht eine klare Bedingung, unter der die Fortsetzungsidee als gescheitert gilt. Die gute Vorgeschichte garantiert keines der Ziele.",
      "Nora benennt den Halteplan vor dem Einstieg. Sie macht aus einem unerreichten kleinen Ziel nicht spontan einen unbegrenzten Langzeittrade und wertet die beiden Regeltypen getrennt aus."
    ],
    "prompt": "Warum trennt Nora kurze und längere Haltepläne?",
    "answers": [
      "Sie verlangen unterschiedliche Ziel- und Ausstiegsregeln.",
      "Längere Pläne brauchen kein Risiko.",
      "Ein unerreichtes Ziel wird durch Warten automatisch erreicht."
    ],
    "rule": "Haltedauer und Ausstiegslogik vorab festlegen.",
    "diagram": "par4-follow"
  },
  {
    "title": "Ein Gegenhandel braucht mehr als einen hohen Preis",
    "summary": "Ein gestiegener Markt ist nicht automatisch zu teuer für weitere Bewegung.",
    "paragraphs": [
      "Manche Teilnehmer könnten ein neues Hoch verkaufen wollen, weil sie mit einem Rücklauf rechnen. Diese Gegenidee ist etwas anderes als die Fortsetzungsidee eines Käufers. Beide Seiten brauchen eigene Regeln.",
      "Nora lernt daraus, dass ein Preisbereich gegensätzliche Entscheidungen enthalten kann. Der Chart verrät nicht, welche konkrete Gegenposition bestehen wird oder wann alle anderen ihre Stops erreichen.",
      "Für sie ist ein hoher Preis allein kein Short-Auslöser. Sie benötigt beobachtbare Gegenargumente, einen eigenen Ausstieg und eine Größe, die in ihr Budget passt."
    ],
    "prompt": "Reicht ein neuer hoher Preis allein als begründeter Gegenhandel?",
    "answers": [
      "Nein, dafür braucht es eine eigene geprüfte Regel.",
      "Ja, weil jeder neue Höchstpreis sofort fällt.",
      "Ja, solange sie den Trend verpasst hat."
    ],
    "rule": "Gegenidee und eigenständigen Tradeplan unterscheiden.",
    "diagram": "par4-late"
  },
  {
    "title": "Aufstocken gegen den Trend kann den Verlust vergrößern",
    "summary": "Eine günstigere Durchschnittsrechnung begrenzt das Risiko nicht automatisch.",
    "paragraphs": [
      "Für eine reine Rechnung verkauft Nora gedanklich zehn Einheiten zu 100 und weitere zehn zu 101. Der Durchschnittspreis beträgt 100,5. Wenn sie alles zu 102 zurückkauft, verliert sie 20 mal 1,5, also 30 Euro vor Kosten.",
      "Ohne die zweite Teilposition hätte der Verlust der ersten zehn Einheiten bis 102 nur 20 Euro betragen. Das Aufstocken verbessert den Durchschnittspreis, vergrößert aber in diesem Beispiel den Geldverlust.",
      "Wir verwenden das als Risikovergleich und nicht als Anfängerregel zum Nachlegen in Verluste. Jeder zusätzliche Auftrag verändert Menge und Gesamtrisiko. Ein erwarteter Rücktest kann ausbleiben."
    ],
    "prompt": "Was zeigt die Rechnung mit zwei Short-Teilpositionen?",
    "answers": [
      "Der bessere Durchschnitt verhindert den höheren Geldverlust nicht.",
      "Nachlegen macht die Position garantiert sicherer.",
      "Ein Rücktest auf 100 ist verpflichtend."
    ],
    "rule": "Durchschnittspreis und Gesamtrisiko getrennt rechnen.",
    "diagram": "par4-risk"
  },
  {
    "title": "Den starken Vortag als Kontext verwenden",
    "summary": "Ein neuer Handelstag ist ein neuer Entscheidungspunkt.",
    "paragraphs": [
      "In einem weiteren eigenen Fall erreichte der vorherige Tag ein Hoch bei 100. Am neuen Tag beginnt der beobachtete Ausschnitt mit O99,1 H99,4 L98,6 C98,9. Es gibt zunächst einen Rücklauf statt sofortiger Fortsetzung.",
      "Die nächste Kerze schließt bei 99,7. Eine dritte erreicht 100,7 und schließt bei 100,5. Das frühere Hoch wird erst jetzt überschritten. Nora trennt den bekannten Vortagskontext von den neuen beobachteten Preisen.",
      "Ein starker Vortag garantiert keinen neuen steigenden Tag. Sitzungszeiten, Datenzuordnung und tatsächlich verfügbare Ausführungen müssen passen. Der alte Kontext ist ein Hinweis, keine Order für heute."
    ],
    "prompt": "Wann wird das Vortagshoch im gezeigten neuen Ausschnitt überschritten?",
    "answers": [
      "Erst in der dritten neuen Kerze.",
      "Schon durch den starken Vortag automatisch.",
      "In jeder ersten Minute des Folgetages."
    ],
    "rule": "Vortagskontext und neue Tagesdaten getrennt lesen.",
    "diagram": "par4-nextday"
  },
  {
    "title": "Kurze Gegenbewegung und dauerhafte Umkehr trennen",
    "summary": "Ein Rücklauf zum früheren Bereich ist noch kein ganzer neuer Trend.",
    "paragraphs": [
      "Im neuen Tagesfall oder im späteren Hauptfall kann der Kurs nach einem neuen Hoch zurücklaufen. Das könnte eine Pause, eine Range oder eine größere Umkehr werden. Die erste Gegenkerze entscheidet das nicht allein.",
      "Nora prüft, ob sie einen bestehenden Trade managt oder tatsächlich eine neue Gegenposition erwägt. Aussteigen und short gehen sind unterschiedliche Handlungen, mit unterschiedlichen Risiken und Ausführungen.",
      "Wer beide Richtungswechsel nicht zuverlässig nach seinen Regeln verarbeitet, kann den Gegenhandel auslassen. Es gibt keine Pflicht, aus jedem Rücklauf einen zweiten Trade zu machen."
    ],
    "prompt": "Welche zwei Handlungen müssen getrennt geprüft werden?",
    "answers": [
      "Eine Position schließen und eine Gegenposition eröffnen.",
      "Das Hoch und der identische Höchstpreis.",
      "Alle Rücksetzer und alle sicheren Umkehrungen."
    ],
    "rule": "Management und neue Gegenposition nicht miteinander vermischen.",
    "diagram": "par4-nextday"
  },
  {
    "title": "Den Fortsetzungsplan vollständig erklären",
    "summary": "Trend, Korrektur, Grenze, Auftrag und Gegenargument gehören in einen Bericht.",
    "paragraphs": [
      "Nach Kerze 5 beschreibt Nora den Anstieg bis zum alten Hoch 100, die Korrektur mit H99,9 und L99,1 und zwei mögliche Auslöser: 100,0 über dem Pausenhoch oder 100,1 über dem alten Trendhoch.",
      "Sie benennt den Beispielstop 99,0, die daraus berechnete Menge und den Umgang mit offenen Alternativaufträgen. Ihre Beobachtung der späteren Anschlusskerzen bleibt ein eigener neuer Entscheidungspunkt.",
      "Der Bericht nennt ebenfalls Gegenargumente: Ein Überschreiten kann zurückfallen, spätere Schübe können schwächer sein und tatsächliche Ausführung ist nicht aus Kerzen bewiesen. Eine klare Richtung ersetzt diese Angaben nicht."
    ],
    "prompt": "Was macht den Plan nachvollziehbar?",
    "answers": [
      "Kontext, konkrete Regeln, Risiko und mögliche Gegenargumente.",
      "Nur das spätere erfolgreiche Hoch.",
      "Die Pflicht, jeden Ausbruch zu kaufen."
    ],
    "rule": "Einen Fortsetzungsplan mit Preisbezügen und Grenzen dokumentieren.",
    "diagram": "par4-entries"
  },
  {
    "title": "Im Abwärtstrend die Bezüge spiegeln",
    "summary": "Ein früher Versuch kann oberhalb des alten Tiefs ausgelöst werden.",
    "paragraphs": [
      "Die eigene Spiegelung verwendet 200 minus Preis. Das alte Trendhoch 100 wird zum alten Trendtief 100. Das Hoch der Korrektur 99,9 wird zu deren Tief 100,1.",
      "Eine Preisstufe von 0,1 darunter ist 100,0: eine frühere Verkaufsschwelle, die das alte Tief nur berührt. Eine Schwelle unter dem alten Tief läge bei 99,9. Der Beispielstop wird zu 101,0 über dem Korrekturhoch.",
      "Kerze 6 schließt in der Spiegelung bei 99,6. Die gleiche Trennung von frühem Versuch, späterem Ausbruch, Risiko und tatsächlicher Ausführung gilt damit in der Gegenrichtung. Die Spiegelung ist eine Lernhilfe und keine Behauptung gleicher realer Häufigkeiten."
    ],
    "prompt": "Welche Schwelle liegt im Spiegelungsfall unter dem alten Tief 100?",
    "answers": [
      "99,9.",
      "100,0, obwohl das alte Tief nur berührt wird.",
      "101,0, der Beispielstop."
    ],
    "rule": "Die Grenzen und Ausstiegsbezüge für die Gegenrichtung korrekt umrechnen.",
    "diagram": "par4-bear"
  }
]);
