import type { ChapterTwentyFiveScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterTwentyFiveScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Drei Phasen auf einer Zeitachse",
    "summary": "Impuls, Pause, Wiederaufnahme.",
    "section": "Impuls, Pause und neue Richtung",
    "scenario": "c25-01",
    "paragraphs": [
      "Ein Trendwiederaufnahmetag beginnt mit einer deutlichen Bewegung, verbringt anschließend längere Zeit in einer Pause und bewegt sich später erneut in der ursprünglichen Richtung. Erst die spätere Folge macht diese Beschreibung vollständig. Während der Pause bleibt auch eine Umkehr möglich.",
      "Links steigt der erfundene Preis von 30 auf 63 und pendelt danach um 62. Rechts kommen neue Käuferbars hinzu. Die ersten Bars sind in beiden Panels identisch; der spätere Ausbruch darf den frühen Einstieg nicht nachträglich rechtfertigen.",
      "Markier Beginn, Pausenbereich und Zeitpunkt des erneuten Ausbruchs getrennt. Plane aus den sichtbaren Bars, statt schon am Vormittag einen fertigen Tagestyp zu behaupten."
    ],
    "callout": "Ein Tagestyp beschreibt den Verlauf; er garantiert ihn nicht.",
    "takeaways": [
      "Ein Tagestyp beschreibt den Verlauf; er garantiert ihn nicht.",
      "Links steigt der erfundene Preis von 30 auf 63 und pendelt danach um 62.",
      "Markiere Beginn, Pausenbereich und Zeitpunkt des erneuten Ausbruchs getrennt."
    ],
    "prompt": "Was ist während der langen Pause bereits bekannt?",
    "answers": [
      {
        "label": "Ein früher Impuls und eine Balance; die spätere Richtung bleibt offen.",
        "explanation": "Richtig: Der rechte Verlauf ist zu diesem Zeitpunkt noch unbekannt."
      },
      {
        "label": "Der spätere Schluss am Tageshoch.",
        "explanation": "Diesen Schluss liefern erst spätere Bars."
      },
      {
        "label": "Ein sicherer Long ohne Verlustgrenze.",
        "explanation": "Auch nach einem starken Beginn kann der Markt umkehren."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Zeitkorrektur und Preiskorrektur auseinanderhalten",
    "summary": "Zeit und Preis getrennt messen.",
    "section": "Impuls, Pause und neue Richtung",
    "scenario": "c25-02",
    "paragraphs": [
      "Eine Korrektur kann einen großen Teil des Impulses zurückgeben oder vor allem Zeit verbrauchen. Viele seitliche Bars auf ähnlicher Höhe sind eine Zeitkorrektur. Das erklärt, wie ein früher Trend trotz einer langen Unterbrechung als Kontext erhalten bleiben kann.",
      "Links dauert die Pause acht Bars und bleibt nahe dem frühen Hoch. Rechts dauert die Gegenstrecke ebenfalls acht Bars, gibt aber deutlich mehr Preisraum zurück. Gleiche Dauer bedeutet deshalb keine gleiche Wirkung.",
      "Beschreib sowohl die Zahl der Bars als auch den Rücklauf vom Impulshoch. Eine lange Pause ist keine automatische Schwäche; eine tiefe Rückgabe verdient unabhängig von ihrer Dauer eine neue Bewertung."
    ],
    "callout": "Dauer und Rückgabe messen verschiedene Eigenschaften.",
    "takeaways": [
      "Dauer und Rückgabe messen verschiedene Eigenschaften.",
      "Links dauert die Pause acht Bars und bleibt nahe dem frühen Hoch.",
      "Beschreibe sowohl die Zahl der Bars als auch den Rücklauf vom Impulshoch."
    ],
    "prompt": "Welche Pause gibt mehr vom Impuls zurück?",
    "answers": [
      {
        "label": "Beide genau gleich viel, weil acht Bars folgen.",
        "explanation": "Barzahl misst Zeit und nicht die Preistiefe."
      },
      {
        "label": "Die rechte Gegenstrecke bis 38.",
        "explanation": "Richtig: Ihre Tiefe ist größer, obwohl beide Pausen gleich viele Bars haben."
      },
      {
        "label": "Die linke, weil sie mehrere rote Kerzen enthält.",
        "explanation": "Kerzenfarben allein messen die Rückgabe nicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Starker Anfang ist Kontext, kein späterer Auftrag",
    "summary": "Frühe Stärke neu überprüfen.",
    "section": "Impuls, Pause und neue Richtung",
    "scenario": "c25-03",
    "paragraphs": [
      "Große gerichtete Bars und wenig Überschneidung zeigen einen frühen Kontrollvorteil. Dieser Vorteil kann später verloren gehen. Wer jede Pause automatisch in Trendrichtung handelt, behandelt vergangene Stärke wie eine noch offene Order.",
      "Beide Panels haben denselben starken Beginn und dieselbe Balance. Links folgen höhere Preise; rechts bricht der Markt unter die Balance und gewinnt Raum nach unten. Die Frühphase allein unterscheidet die beiden Folgen nicht.",
      "Prüf die neue Ausbruchsrichtung, den Schluss relativ zur Grenze und die anschließende Rückgabe. Eine aktuelle Gegenbewegung gehört in den Plan, selbst wenn sie der anfänglichen Tagesidee widerspricht."
    ],
    "callout": "Neue Bars dürfen die frühe Trendannahme entkräften.",
    "takeaways": [
      "Neue Bars dürfen die frühe Trendannahme entkräften.",
      "Beide Panels besitzen denselben starken Beginn und dieselbe Balance.",
      "Prüfe die neue Ausbruchsrichtung, den Schluss relativ zur Grenze und die anschließende Rückgabe."
    ],
    "prompt": "Welche Information trennt die zwei Tagesverläufe?",
    "answers": [
      {
        "label": "Die erste grüne Kerze.",
        "explanation": "Sie ist in beiden Verläufen dieselbe."
      },
      {
        "label": "Die Wunschrichtung des Traders.",
        "explanation": "Eine Präferenz verändert keine Kursfolge."
      },
      {
        "label": "Der spätere Ausbruch und sein Anschluss.",
        "explanation": "Richtig: Die identische Frühphase erklärt nicht die unterschiedliche Folge."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Bärische Wiederaufnahme spiegelbildlich lesen",
    "summary": "Das Phasenmodell im Abwärtstrend.",
    "section": "Impuls, Pause und neue Richtung",
    "scenario": "c25-04",
    "paragraphs": [
      "Das gleiche Phasenmodell gilt für einen frühen Abwärtstrend: Verkäufer gewinnen zuerst Raum, danach entsteht eine Balance, später können neue Tiefs folgen. Ein tieferer Pausenbereich beweist allein noch keinen weiteren Abverkauf.",
      "Die linke Folge fällt von 70 auf 37 und pausiert. Rechts kommen neue Tiefs bis 20 hinzu. Unterkante, Ausbruch und Rücktest ersetzen dabei Hoch, Käuferausbruch und Rücksetzer der bullischen Variante.",
      "Beschreib den tatsächlichen Raumgewinn und die Verlustgrenze für einen Short. Die Struktur lässt sich spiegeln, während reale Abwärts- und Aufwärtsbewegungen nicht dieselben Häufigkeiten oder Ausführungskosten haben müssen."
    ],
    "callout": "Das Phasenmodell gilt für beide Richtungen.",
    "takeaways": [
      "Das Phasenmodell gilt für beide Richtungen.",
      "Die linke Folge fällt von 70 auf 37 und pausiert.",
      "Beschreibe den tatsächlichen Raumgewinn und die Verlustgrenze für einen Short."
    ],
    "prompt": "Was bestätigt hier eine neue Verkäuferphase?",
    "answers": [
      {
        "label": "Neue Tiefs unter der Balance mit anschließendem Raumgewinn.",
        "explanation": "Richtig: Erst die neue Folge ergänzt die frühe Verkäuferannahme."
      },
      {
        "label": "Jede grüne Kerze ist ein Verkaufssignal.",
        "explanation": "Eine einzelne Kerze reicht für diese Struktur nicht."
      },
      {
        "label": "Eine Pause schließt Shorts grundsätzlich aus.",
        "explanation": "Nach einer Pause kann der vorherige Trend erneut Raum gewinnen."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Das Gap braucht einen festen Bezug",
    "summary": "Ein Gap mit festen Ankern messen.",
    "section": "Gap und Test der Eröffnungslücke",
    "scenario": "c25-05",
    "paragraphs": [
      "Ein Gap ist ein Abstand zwischen zwei definierten Preisbereichen. Hier vergleichen wir den Vortagsschluss mit dem ersten Preis der neuen Sitzung. Bei Futures hängt dieser Bezug von der verwendeten Sitzung ab; ein anderer Tageszuschnitt kann ein anderes Gap zeigen.",
      "Der bekannte Schluss liegt bei 40, die neue Folge eröffnet bei 48. Der Abstand beträgt acht relative Einheiten. Die Markierung bleibt in beiden Panels bei 40, auch wenn der neue Markt zuerst steigt und später zurückläuft.",
      "Notier Sitzung, alten Referenzpreis und neuen Eröffnungspreis. Bleib während des gesamten Tests bei demselben Bezug; ein nachträglich verschobener Anker macht die Beobachtung unbrauchbar."
    ],
    "callout": "Ein Gap lässt sich nur mit benanntem Bezug prüfen.",
    "takeaways": [
      "Ein Gap lässt sich nur mit benanntem Bezug prüfen.",
      "Der bekannte Schluss liegt bei 40, die neue Folge eröffnet bei 48.",
      "Notiere Sitzung, alten Referenzpreis und neuen Eröffnungspreis."
    ],
    "prompt": "Wie groß ist das hier definierte Gap?",
    "answers": [
      {
        "label": "27 Einheiten: 67 minus 40.",
        "explanation": "67 ist ein späterer Preis, nicht die Eröffnung."
      },
      {
        "label": "Acht Einheiten: 48 minus 40.",
        "explanation": "Richtig: Eröffnung und Vortagsschluss sind die benannten Anker."
      },
      {
        "label": "Immer die gesamte Tagesrange.",
        "explanation": "Gap und Tagesrange messen verschiedene Abstände."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Ein Test muss das Gap nicht schließen",
    "summary": "Ein unvollständiger Gap-Test.",
    "section": "Gap und Test der Eröffnungslücke",
    "scenario": "c25-06",
    "paragraphs": [
      "Ein Rücklauf kann sich dem alten Schluss nähern und vorher drehen. Das ist ein Test des Bereichs, aber in unserer Definition noch kein vollständiges Schließen des Gaps. Eine Annäherung und eine tatsächliche Preisberührung sind unterschiedliche Beobachtungen.",
      "Links erreicht der tiefste Wick des Rücklaufs 50 und bleibt oberhalb der Schlussreferenz 40. Rechts dreht die Folge wieder aufwärts. Die Erholung folgt somit auf einen unvollständigen Test; eine Berührung von 40 hat nicht stattgefunden.",
      "Halte die Definition fest und prüf Tiefs beziehungsweise Hochs, nicht nur Schlusskurse. Ein ähnliches Bild rechtfertigt keine Aussage, dass alle offenen Preise bereits gehandelt wurden."
    ],
    "callout": "Annäherung, Berührung und Durchbruch getrennt benennen.",
    "takeaways": [
      "Annäherung, Berührung und Durchbruch getrennt benennen.",
      "Links erreicht der tiefste Wick des Rücklaufs 50 und bleibt oberhalb der Schlussreferenz 40.",
      "Halte die Definition fest und prüfe Tiefs beziehungsweise Hochs, nicht nur Schlusskurse."
    ],
    "prompt": "Wurde das Gap in diesem Beispiel vollständig geschlossen?",
    "answers": [
      {
        "label": "Ja, weil mehrere rote Bars erscheinen.",
        "explanation": "Kerzenfarbe beweist keine Berührung des Referenzpreises."
      },
      {
        "label": "Ja, weil der nächste Impuls steigt.",
        "explanation": "Spätere Richtung ändert den vorherigen Tiefstpreis nicht."
      },
      {
        "label": "Nein, der Wick am Rücklaufende bleibt bei 50 über der Referenz 40.",
        "explanation": "Richtig: Ein Test kann vor dem alten Schluss enden."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Berührung ist noch keine Käuferbestätigung",
    "summary": "Kontakt und Käuferanschluss trennen.",
    "section": "Gap und Test der Eröffnungslücke",
    "scenario": "c25-07",
    "paragraphs": [
      "Erreicht der Rücklauf den alten Schluss, ist die definierte Lücke geschlossen. Daraus folgt keine automatische Umkehr nach oben. Der Markt kann am Bezug reagieren, um ihn pendeln oder weiter darunter handeln.",
      "Der letzte linke Bar hat einen Schluss bei 41 und einen Wick bis 40. Rechts gewinnt eine neue Käuferfolge wieder Raum. Die Berührung ist bereits links bekannt; der Käuferanschluss erst rechts.",
      "Trenn Referenzkontakt, Signalabschluss und Auslösung einer geplanten Order. Bleibt eine gewünschte Reaktion aus, bleibt die Preisberührung trotzdem wahr und die Trendfortsetzung trotzdem unbestätigt."
    ],
    "callout": "Das Schließen einer Lücke erzeugt keinen Pflichtanstieg.",
    "takeaways": [
      "Das Schließen einer Lücke erzeugt keinen Pflichtanstieg.",
      "Der letzte linke Bar hat einen Schluss bei 41 und einen Wick bis 40.",
      "Trenne Referenzkontakt, Signalabschluss und Auslösung einer geplanten Order."
    ],
    "prompt": "Wann ist neuer Käuferanschluss sichtbar?",
    "answers": [
      {
        "label": "Erst mit den späteren aufwärts gerichteten Bars rechts.",
        "explanation": "Richtig: Kontakt und Anschluss sind verschiedene Ereignisse."
      },
      {
        "label": "Schon allein beim Wick auf 40.",
        "explanation": "Eine Berührung kann auch einer weiteren Abwärtsbewegung vorausgehen."
      },
      {
        "label": "Schon vor der Eröffnung.",
        "explanation": "Die neue Sitzung liefert ihre Information erst im Verlauf."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Ein Gap-Test kann die Tagesidee zerstören",
    "summary": "Verkäufer unter dem Gap-Bezug.",
    "section": "Gap und Test der Eröffnungslücke",
    "scenario": "c25-08",
    "paragraphs": [
      "Ein Gap nach oben mit frühem Anstieg kann anschließend so viel zurückgeben, dass die Käuferidee ihre Grundlage verliert. Ein Schluss unter dem alten Bezug und weitere tiefere Preise passen dann nicht mehr zu einem bloß flachen Test.",
      "Links wird die Referenz 40 berührt. Rechts folgen Schlusskurse bei 35 und 29. Der alte Schluss hält in dieser Folge nicht; die ursprüngliche Richtung bleibt deshalb kein überzeugender Grund für einen neuen Kauf.",
      "Definier vorab, welcher Verlust an Struktur deine Idee entkräftet. Ein persönlicher Stop und eine Marktinterpretation sind getrennte Größen, doch beide brauchen eine aktuelle Grundlage statt Hoffnung auf die Gaprichtung."
    ],
    "callout": "Eine frühe Gaprichtung darf durch spätere Struktur ungültig werden.",
    "takeaways": [
      "Eine frühe Gaprichtung darf durch spätere Struktur ungültig werden.",
      "Links wird die Referenz 40 berührt.",
      "Definiere vorab, welcher Verlust an Struktur deine Idee entkräftet."
    ],
    "prompt": "Welche Entwicklung spricht gegen den bloß flachen Gap-Test?",
    "answers": [
      {
        "label": "Die bloße Existenz eines Gaps.",
        "explanation": "Das Gap war schon bei Handelsbeginn vorhanden."
      },
      {
        "label": "Weitere Schlusskurse unter 40 und neue Tiefs.",
        "explanation": "Richtig: Die Verkäufer gewinnen Raum jenseits des alten Bezugs."
      },
      {
        "label": "Dass der erste Impuls grün war.",
        "explanation": "Frühere Stärke verhindert keine spätere Gegenkontrolle."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Eine enge Balance braucht feste Grenzen",
    "summary": "Wicks bestimmen die Pausengrenzen.",
    "section": "Enge Range und Fehlausbruch",
    "scenario": "c25-09",
    "paragraphs": [
      "Nach dem frühen Impuls können sich viele Bars in einem kleinen Bereich überschneiden. Diese Balance hat eigene Grenzen. Für einen späteren Ausbruch brauchst du die Hochs und Tiefs der Pause, nicht willkürlich den gesamten frühen Impuls.",
      "Die Pause beginnt im Beispiel nach dem Preis 73. Ihre OHLC-Hülle reicht von 71 bis 75; der frühe Impuls stammt aus dem Bereich 50. Die gepunkteten Linien beziehen sich auf die Pause und bleiben im zweiten Panel unverändert.",
      "Markier, ab welchem Bar die Balance zählt, und prüf die Wicks. Neue Bars können eine Grenze erweitern; dokumentiere diese Erweiterung, statt rückwirkend den alten Ausbruch unsichtbar zu machen."
    ],
    "callout": "Die Rangegrenzen aus dem benannten Pausenabschnitt ableiten.",
    "takeaways": [
      "Rangegrenzen aus dem benannten Pausenabschnitt ableiten.",
      "Die Pause beginnt im Beispiel nach dem Preis 73.",
      "Markiere, ab welchem Bar die Balance zählt, und prüfe die Wicks."
    ],
    "prompt": "Welche Preise begrenzen hier die enge Pause?",
    "answers": [
      {
        "label": "50 und 75, weil der frühe Impuls dazugehört.",
        "explanation": "Das beschreibt eine größere Tagesstrecke statt die enge Pause."
      },
      {
        "label": "Nur die Schlusskurse 72 und 74.",
        "explanation": "Damit verschwinden die tatsächlich gezeigten Wicks."
      },
      {
        "label": "71 und 75, einschließlich der Wicks.",
        "explanation": "Richtig: Diese Hülle gehört zum markierten Pausenabschnitt."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Ein Gegenausbruch kann ohne Anschluss scheitern",
    "summary": "Gegenausbruch und Rückkehr.",
    "section": "Enge Range und Fehlausbruch",
    "scenario": "c25-10",
    "paragraphs": [
      "Ein Ausbruch gegen den frühen Trend kann neue Kontrolle einleiten oder nach kurzer Zeit in die Range zurückkehren. Das Etikett Fehlausbruch gehört zur tatsächlich sichtbaren Rückkehr; bei der ersten Grenzverletzung ist das spätere Ergebnis noch offen.",
      "Links fällt der Preis mit einem Schluss bei 70 unter die Grenze 71. Rechts kommt ein Schluss bei 74 zurück in die alte Balance hinzu. Diese Rückkehr schwächt die Verkäuferidee, beweist aber noch keinen Ausbruch über 75.",
      "Bewerte erst Grenzverletzung, dann Rückkehr und anschließend die neue Fortsetzung. Ein möglicher Stop von Gegenhändlern ist eine Interpretation; die gezeigte Kursfolge bleibt die überprüfbare Information."
    ],
    "callout": "Rückkehr in die Range und neuer Trendausbruch sind zwei Schritte.",
    "takeaways": [
      "Rückkehr in die Range und neuer Trendausbruch sind zwei Schritte.",
      "Links fällt der Preis mit einem Schluss bei 70 unter die Grenze 71.",
      "Bewerte erst Grenzverletzung, dann Rückkehr und anschließend die neue Fortsetzung."
    ],
    "prompt": "Was zeigt das rechte Panel bereits?",
    "answers": [
      {
        "label": "Rückkehr in die Balance, aber noch keinen Schluss über 75.",
        "explanation": "Richtig: Die Verkäufer verlieren ihren Ausbruch, die Käufer haben noch keine neue Erweiterung."
      },
      {
        "label": "Einen vollendeten Käuferausbruch bis 88.",
        "explanation": "Diese späteren Bars stehen hier noch nicht zur Verfügung."
      },
      {
        "label": "Den Nachweis, wer seine Stoporders ausgeführt hat.",
        "explanation": "OHLC-Bars zeigen keine individuellen Ordermotive."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Der Fehlausbruch wird erst später zum Fortsetzungsfall",
    "summary": "Rückkehr vor Käuferausbruch.",
    "section": "Enge Range und Fehlausbruch",
    "scenario": "c25-11",
    "paragraphs": [
      "Der gescheiterte Gegenausbruch kann eine Ausgangslage für Trendwiederaufnahme sein. Die neue Richtung braucht trotzdem eigene Bestätigung. Eine Rückkehr in die Balance und ein erneuter Ausbruch in Trendrichtung dürfen nicht zum gleichen Moment zusammengezogen werden.",
      "Links endet die Folge wieder bei 74 innerhalb der Range. Rechts folgt ein Bar mit Schluss 78 oberhalb von 75 und danach weiterer Raumgewinn. Nur die neue Folge rechts zeigt eine tatsächliche Käufererweiterung.",
      "Ein Plan kann auf den Bruch des Signalhochs oder einen Rücktest warten. Benenne den Auslöser, die Verlustgrenze und den verfügbaren Zielraum, bevor du das Muster als handelbare Fortsetzung behandelst."
    ],
    "callout": "Eine Fortsetzung braucht einen eigenen Auslöser.",
    "takeaways": [
      "Eine Fortsetzung braucht einen eigenen Auslöser.",
      "Links endet die Folge wieder bei 74 innerhalb der Range.",
      "Ein Plan kann auf den Bruch des Signalhochs oder einen Rücktest warten."
    ],
    "prompt": "Welche neue Information liefert das rechte Panel?",
    "answers": [
      {
        "label": "Dass der frühere Verkauf niemals ausgelöst wurde.",
        "explanation": "Die vorherige Grenzverletzung bleibt Teil des Verlaufs."
      },
      {
        "label": "Ein Schluss über 75 und weitere höhere Preise.",
        "explanation": "Richtig: Das ergänzt die bloße Rückkehr in die Balance."
      },
      {
        "label": "Eine garantierte Ausführung zum Wunschpreis.",
        "explanation": "Ein Chartbild beweist keine konkrete Orderfüllung."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Eine enge Range kann in Gegenrichtung expandieren",
    "summary": "Beide Ausbruchsrichtungen offenhalten.",
    "section": "Enge Range und Fehlausbruch",
    "scenario": "c25-12",
    "paragraphs": [
      "Eine schmale Balance sammelt keine Verpflichtung zur Fortsetzung. Verlässt der Markt sie mit einem kräftigen Gegenausbruch und zeigt keine schnelle Rückkehr, verliert der frühe Trend als alleinige Handlungsgrundlage an Gewicht.",
      "Beide Verläufe starten mit derselben engen Pause. Links folgt die Käuferwiederaufnahme; rechts entsteht ein Verkäuferbein bis 49. Das Gegenbeispiel verhindert, dass dir nur der erfolgreiche Ausgang im Gedächtnis bleibt.",
      "Führe im Replay ein Protokoll aller passenden Ausgangslagen. Zähl auch Gegenläufe und ausbleibende Ausbrüche. Ohne eine definierte Stichprobe liefert ein anschauliches Muster keine verlässliche Trefferquote."
    ],
    "callout": "Eine enge Pause kann sich nach beiden Seiten auflösen.",
    "takeaways": [
      "Eine enge Pause kann sich nach beiden Seiten auflösen.",
      "Beide Verläufe starten mit derselben engen Pause.",
      "Führe im Replay ein Protokoll aller passenden Ausgangslagen."
    ],
    "prompt": "Was folgt aus der engen Balance allein?",
    "answers": [
      {
        "label": "Dass der spätere Ausbruch immer nach oben geht.",
        "explanation": "Das rechte Gegenbeispiel widerspricht dieser Behauptung."
      },
      {
        "label": "Eine gemessene Erfolgsquote von 80 Prozent.",
        "explanation": "Die erfundenen Fälle sind keine statistische Stichprobe."
      },
      {
        "label": "Noch keine festgelegte Ausbruchsrichtung.",
        "explanation": "Richtig: Die zwei konstruierten Folgen zeigen mögliche Alternativen."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Signalabschluss und Trigger trennen",
    "summary": "Signalabschluss vor Triggerberührung.",
    "section": "Auslösung, Rücktest und Verlustgrenze",
    "scenario": "c25-13",
    "paragraphs": [
      "Ein Käuferbar in der Balance kann ein Signalbar sein. Sein Abschluss bestätigt nur die Form dieses Bars. Eine geplante Stoporder über seinem Hoch wird erst ausgelöst, wenn der spätere Preis den festgelegten Trigger erreicht.",
      "Links endet der Rückkehrbar bei 74 und sein Hoch liegt bei 75. Der Beispieltrigger liegt bei 76 und ist noch unberührt. Rechts überschreitet der nächste Bar 76. Die Darstellung trennt dadurch bekannte Signalform und spätere Triggerberührung.",
      "Ein erreichter Trigger beweist keine Füllung zu genau 76. Spread, verfügbare Liquidität und Ordertyp beeinflussen die Ausführung; für das Schema bleiben tatsächliche Handelskosten unbekannt."
    ],
    "callout": "Signal fertig bedeutet noch nicht, dass die Order ausgelöst ist.",
    "takeaways": [
      "Signal fertig bedeutet noch nicht Order ausgelöst.",
      "Links endet die Rückkehrbar bei 74 und ihr Hoch liegt bei 75.",
      "Ein erreichter Trigger beweist keine Füllung zu genau 76."
    ],
    "prompt": "Ist der Trigger 76 im linken Panel bereits erreicht?",
    "answers": [
      {
        "label": "Nein, dort bleibt jedes Hoch unter 76.",
        "explanation": "Richtig: Der Abschluss der Signalbar ersetzt die Triggerberührung nicht."
      },
      {
        "label": "Ja, weil die Signalbar grün ist.",
        "explanation": "Kerzenfarbe löst keinen festgelegten Preis aus."
      },
      {
        "label": "Ja, weil rechts später 88 erreicht wird.",
        "explanation": "Spätere Bars dürfen nicht in den früheren Zustand zurückgerechnet werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Rücktests unterscheiden: halten, eindringen, scheitern",
    "summary": "Ein eindringender Rücktest mit neuer Fortsetzung.",
    "section": "Auslösung, Rücktest und Verlustgrenze",
    "scenario": "c25-14",
    "paragraphs": [
      "Nach einem Ausbruch kann der Markt oberhalb der alten Grenze bleiben, sie berühren oder in die Balance eindringen. Eindringen ist noch kein vollständiges Scheitern. Entscheidend wird, ob die alte Range erneut Kontrolle gewinnt oder der Ausbruch wieder aufgenommen wird.",
      "Links läuft der Preis nach Schluss 78 zurück auf 73 und damit unter die alte Obergrenze 75. Rechts folgt neue Käuferwirkung bis 89. Dieser Rücktest dringt ein, wird in der gezeigten Folge aber nicht zum anhaltenden Verkäufertrend.",
      "Unterscheide Marktbeurteilung und eigenen Stop. Ein zuvor eng gesetzter Stop kann längst ausgelöst sein, obwohl die größere Struktur später hält. Spätere Erholung macht den früheren Verlust nicht rückgängig."
    ],
    "callout": "Ein eindringender Rücktest ist weder automatisch Erfolg noch Misserfolg.",
    "takeaways": [
      "Ein eindringender Rücktest ist weder automatisch Erfolg noch Misserfolg.",
      "Links läuft der Preis nach Schluss 78 zurück auf 73 und damit unter die alte Obergrenze 75.",
      "Unterscheide Marktbeurteilung und eigenen Stop."
    ],
    "prompt": "Wie lässt sich der gezeigte Rücktest beschreiben?",
    "answers": [
      {
        "label": "Er bleibt jederzeit oberhalb der Grenze.",
        "explanation": "Der Schluss 73 und sein Wick liegen darunter."
      },
      {
        "label": "Er dringt unter 75 ein und wird später wieder aufgenommen.",
        "explanation": "Richtig: Eindringen und spätere Käuferwirkung sind beide sichtbar."
      },
      {
        "label": "Er garantiert, dass kein enger Stop erreicht wurde.",
        "explanation": "Die Range kann halten, obwohl ein engerer Stop vorher getroffen wird."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Breiter Strukturstop verlangt kleinere Stückzahl",
    "summary": "Stop und Stückzahl abstimmen.",
    "section": "Auslösung, Rücktest und Verlustgrenze",
    "scenario": "c25-15",
    "paragraphs": [
      "Ein Stop jenseits der Balance kann mehr Strukturraum geben als ein Stop unter der Ausbruchsbar. Dieser zusätzliche Abstand kostet Risiko pro Kontrakt. Bei gleichbleibendem Geldbudget muss deshalb die Stückzahl sinken oder der Einstieg entfallen.",
      "Im Beispiel liegt der gedachte Einstieg bei 78, der engere Stop bei 73 und der weitere Stop bei 69. Die Abstände betragen fünf und neun relative Einheiten. Die Linien zeigen Planpreise; sie behaupten keine garantierten Ausführungen.",
      "Rechne Abstand mal Wert pro Preiseinheit und addiere Kostenreserven. Die Kontraktzahl rundest du ab. Überschreitet selbst ein einzelner Kontrakt das Budget, löst ein kleineres Ziel das Risikoproblem nicht."
    ],
    "callout": "Ein weiterer Stop erhöht das Risiko pro Einheit.",
    "takeaways": [
      "Ein weiterer Stop erhöht das Risiko pro Einheit.",
      "Im Beispiel liegt der gedachte Einstieg bei 78, der engere Stop bei 73 und der weitere Stop bei 69.",
      "Rechne Abstand mal Wert pro Preiseinheit und addiere Kostenreserven."
    ],
    "prompt": "Wie verändert sich der Stopabstand von 73 auf 69 bei Einstieg 78?",
    "answers": [
      {
        "label": "Er bleibt gleich, weil das Muster gleich heißt.",
        "explanation": "Der Name der Struktur verändert keine Preisdifferenz."
      },
      {
        "label": "Er sinkt auf vier Einheiten.",
        "explanation": "Vier ist nur der Unterschied zwischen den zwei Stops."
      },
      {
        "label": "Er wächst von fünf auf neun Einheiten.",
        "explanation": "Richtig: Ein größeres Verlustbudget pro Einheit verlangt eine neue Positionsrechnung."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Positionsgröße mit Abrundung berechnen",
    "summary": "Planrisiko und Abrundung.",
    "section": "Auslösung, Rücktest und Verlustgrenze",
    "scenario": "c25-16",
    "paragraphs": [
      "Die Struktur wird erst durch die Positionsgröße zu einem begrenzten Geldrisiko. Für dieses reine Rechenbeispiel nehmen wir neun Punkte Stopabstand, fünf Dollar pro Punkt und fünf Dollar Kostenreserve je Kontrakt an. Diese Werte definieren das Beispiel und sind keine aktuellen Brokergebühren.",
      "Damit beträgt das geplante Risiko je Kontrakt 9 × 5 + 5 = 50 Dollar. Bei 120 Dollar Gesamtbudget passen zwei Kontrakte: 100 Dollar Planrisiko. Drei würden 150 Dollar ergeben und das Budget überschreiten.",
      "Rund die Anzahl ab und lass die ungenutzten 20 Dollar als Puffer. Ein Stop begrenzt den Plan, keine maximale tatsächliche Füllung; starke Slippage kann darüber hinausgehen. Pass die Reserve mit eigenen Ausführungsdaten an."
    ],
    "callout": "Das Risikobudget hältst du ein, indem du die Stückzahl abrundest.",
    "takeaways": [
      "Das Risikobudget wird eingehalten, indem die Stückzahl abgerundet wird.",
      "Damit beträgt das geplante Risiko je Kontrakt 9 × 5 + 5 = 50 Dollar.",
      "Runde die Anzahl ab und lass die ungenutzten 20 Dollar als Puffer."
    ],
    "prompt": "Wie viele Kontrakte passen bei 50 Dollar Planrisiko in 120 Dollar Budget?",
    "answers": [
      {
        "label": "Zwei Kontrakte mit zusammen 100 Dollar Planrisiko.",
        "explanation": "Richtig: 120 / 50 = 2,4 wird auf zwei abgerundet."
      },
      {
        "label": "Drei Kontrakte, weil 2,4 aufgerundet wird.",
        "explanation": "Drei mal 50 überschreitet das Budget um 30 Dollar."
      },
      {
        "label": "Zwölf Kontrakte, weil nur die Kostenreserve zählt.",
        "explanation": "Stopverlust und Kosten gehören zusammen in die Rechnung."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Eine späte Auslösung hat weniger verbleibende Zeit",
    "summary": "Die Zeit bis zum Schluss einplanen.",
    "section": "Späte Wiederaufnahme und Management",
    "scenario": "c25-17",
    "paragraphs": [
      "Ein später Ausbruch kann den ursprünglichen Trend erneut aufnehmen. Trotzdem bleibt weniger Sitzungszeit, um ein fernes Ziel zu erreichen. Dieselbe Struktur hat kurz vor dem Schluss andere Rahmenbedingungen als am frühen Nachmittag.",
      "Links bleibt der Markt bis zur markierten späten Phase in seiner Balance. Rechts folgen nur noch zwei Bars mit Schluss 68 und 71. Die Zeitachse endet danach ausdrücklich; ein späteres Ziel oberhalb dieser Folge ist nicht gezeigt.",
      "Leg vor dem Einstieg fest, wann du spätestens schließt und welche Orders danach gelöscht werden. Prüf die Handelszeiten und Regeln deiner konkreten Umgebung separat; die erfundene Folge behauptet keine aktuelle Prop-Firm-Regel."
    ],
    "callout": "Verbleibende Zeit gehört ebenso zum Plan wie Preisraum.",
    "takeaways": [
      "Verbleibende Zeit gehört ebenso zum Plan wie Preisraum.",
      "Links bleibt der Markt bis zur markierten späten Phase in seiner Balance.",
      "Lege vor dem Einstieg fest, wann du spätestens schließt und welche Orders danach gelöscht werden."
    ],
    "prompt": "Was begrenzt den späten Plan zusätzlich?",
    "answers": [
      {
        "label": "Die Garantie, dass der Schluss am Hoch liegt.",
        "explanation": "Die späte Uhrzeit liefert keine solche Garantie."
      },
      {
        "label": "Die verbleibende Sitzungszeit und der vorher festgelegte Ausstieg.",
        "explanation": "Richtig: Ein fernes Ziel kann innerhalb der restlichen Bars ausbleiben."
      },
      {
        "label": "Die Möglichkeit, jede Order unbegrenzt offen zu lassen.",
        "explanation": "Ein Plan benötigt Regeln für das Sitzungsende."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Ein Projektionsziel braucht Start und Ansatzpunkt",
    "summary": "Projektion ohne Zielbesuch.",
    "section": "Späte Wiederaufnahme und Management",
    "scenario": "c25-18",
    "paragraphs": [
      "Eine Zielprojektion überträgt eine gemessene Strecke auf einen neuen Ansatzpunkt. Hier verwenden wir den frühen Schlusskursimpuls von 30 bis 63. Seine Länge beträgt 33 Einheiten. Das ist bewusst eine Schlusskursstrecke, keine OHLC-Tagesrange.",
      "Der angenommene Ansatzpunkt liegt bei 60. Somit ergibt sich 60 + 33 = 93. Rechts erreicht die spätere Folge lediglich ein Hoch von 81. Das eingezeichnete Projektionsziel bleibt in diesem Beispiel unbesucht.",
      "Prüf vor dem Einstieg, ob zwischen Entry und Ziel andere Referenzen liegen. Ein berechnetes Ziel ist ein möglicher Plananker. Es beweist weder die künftige Weglänge noch, wie oft der Markt es tatsächlich erreicht."
    ],
    "callout": "Eine Zielrechnung ist keine Aussage über ihre Erreichbarkeit.",
    "takeaways": [
      "Eine Zielrechnung ist keine Aussage über ihre Erreichbarkeit.",
      "Der angenommene Ansatzpunkt liegt bei 60.",
      "Prüfe vor dem Einstieg, ob zwischen Entry und Ziel andere Referenzen liegen."
    ],
    "prompt": "Welches Ziel ergibt 33 Einheiten ab dem Ansatzpunkt 60?",
    "answers": [
      {
        "label": "81, weil das der spätere Höchstpreis ist.",
        "explanation": "Das ist der sichtbare Höchstpreis, nicht die berechnete Projektion."
      },
      {
        "label": "33, weil der Ansatzpunkt keine Rolle spielt.",
        "explanation": "33 beschreibt die Strecke; der Ansatzpunkt macht daraus einen Preis."
      },
      {
        "label": "93; es wird in der gezeigten Folge nicht erreicht.",
        "explanation": "Richtig: Rechnung und tatsächlicher Zielbesuch bleiben getrennt."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Kleines Restziel und großer Stop passen nicht automatisch",
    "summary": "Restziel gegen Stop rechnen.",
    "section": "Späte Wiederaufnahme und Management",
    "scenario": "c25-19",
    "paragraphs": [
      "Ein guter Tageskontext kann mit einem ungünstigen Einstiegspreis zusammenfallen. Bleibt nach einem späten Ausbruch kaum noch Raum zum Ziel, während die Verlustgrenze weit entfernt liegt, ist das Verhältnis für diesen Entry schwach.",
      "Der Beispielentry liegt bei 78, das Ziel bei 81 und der Stop bei 69. Damit stehen drei Einheiten möglichem Bruttogewinn neun Einheiten geplantem Preisrisiko gegenüber. Der Zielraum beträgt ein Drittel des Stopabstands.",
      "Bei exakt diesen festen Ergebnissen und ohne Kosten braucht der Plan mehr als 75 Prozent Gewinne für positiven Erwartungswert. Das ist eine rechnerische Schwelle, keine gemessene Trefferquote. Kosten und abweichende Füllungen erhöhen die Anforderungen."
    ],
    "callout": "Eine attraktive Struktur ersetzt keine Rechnung des konkreten Entries.",
    "takeaways": [
      "Eine attraktive Struktur ersetzt keine Rechnung des konkreten Entries.",
      "Der Beispielentry liegt bei 78, das Ziel bei 81 und der Stop bei 69.",
      "Bei exakt diesen festen Ergebnissen und ohne Kosten braucht der Plan mehr als 75 Prozent Gewinne für positiven Erwartungswert."
    ],
    "prompt": "Welche Aussage gilt bei Gewinn 3 und Verlust 9 ohne Kosten?",
    "answers": [
      {
        "label": "75 Prozent Gewinne sind rechnerisch der Nullpunkt.",
        "explanation": "Richtig: 0,75 × 3 − 0,25 × 9 = 0; für positiven Erwartungswert braucht es mehr."
      },
      {
        "label": "Jede Trefferquote über 50 Prozent reicht.",
        "explanation": "Bei 50 Prozent beträgt der Erwartungswert minus drei Einheiten."
      },
      {
        "label": "Das Muster besitzt nachweislich 75 Prozent Trefferquote.",
        "explanation": "Die Rechnung liefert eine erforderliche Schwelle, keine Beobachtungsstatistik."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Nach dem Ausbruch wieder in Balance: Plan neu beurteilen",
    "summary": "Ausbruch zurück in die Balance.",
    "section": "Späte Wiederaufnahme und Management",
    "scenario": "c25-20",
    "paragraphs": [
      "Eine neue Käufererweiterung kann sofort scheitern. Kehrt der Markt in die lange Pause zurück und handelt dort weiter, beschreibt das keine saubere neue Trendphase mehr. Der alte Impuls reicht dann nicht als Begründung, jede Longposition zu halten.",
      "Links bricht die Balance mit Schluss 68 nach oben. Rechts folgen 63, 60 und 62 zurück im alten Bereich. Der Käuferausbruch ist sichtbar, ebenso seine Rückgabe; das Signal musst du deshalb im Verlauf neu beurteilen.",
      "Führe deinen vorher definierten Exit aus und lösche überholte Folgeorders. Trenn den ursprünglichen Plan von einer neuen Rangeidee. Ein nachträglich weiter gesetzter Stop verwandelt eine schwache Fortsetzung nicht in einen besseren Einstieg."
    ],
    "callout": "Ein gescheiterter Ausbruch verlangt eine neue Beurteilung.",
    "takeaways": [
      "Ein gescheiterter Ausbruch verlangt eine neue Beurteilung.",
      "Links bricht die Balance mit Schluss 68 nach oben.",
      "Führe deinen vorher definierten Exit aus und lösche überholte Folgeorders."
    ],
    "prompt": "Was zeigen die späteren Bars rechts?",
    "answers": [
      {
        "label": "Einen niemals erfolgten Ausbruch.",
        "explanation": "Der vorherige Schluss 68 bleibt über der alten Grenze."
      },
      {
        "label": "Rückkehr in die alte Balance nach einem Käuferausbruch.",
        "explanation": "Richtig: Die zusätzliche Information schwächt die reine Fortsetzungsidee."
      },
      {
        "label": "Den Beweis, dass jeder weitere Long profitabel wird.",
        "explanation": "Die Rückkehr begründet keine solche Zusage."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Eine Pause kann mehrere Sitzungen dauern",
    "summary": "Mehrtägige Wiederaufnahme.",
    "section": "Mehrtägige Variante und Replay",
    "scenario": "c25-21",
    "paragraphs": [
      "Das Phasenmodell ist nicht auf einen einzelnen Handelstag beschränkt. Ein früher Tageschartimpuls kann von mehreren Sitzungen mit überlappenden Tagesbars abgelöst werden. Eine spätere Erweiterung bildet dann eine Wiederaufnahme auf dieser größeren Zeitebene.",
      "Jede Kerze dieser beiden Panels stellt eine erfundene vollständige Sitzung dar. Nach dem Impuls pendeln fünf Tagesbars in einem Bereich; rechts folgen zwei neue Käufer-Tagesbars. Die Beschriftung wechselt ausdrücklich von Intraday-Bars zu Sitzungen.",
      "Übertrage einen Intraday-Stop nicht blind auf die Tagesstruktur. Übernachtlücken, längere Haltedauer und die größere Preisstrecke verändern Risiko und Ausführung. Eine mehrtägige Beobachtung verlangt einen dazu passenden Plan."
    ],
    "callout": "Eine größere Zeitebene verlangt passende Risiko- und Halteregeln.",
    "takeaways": [
      "Eine größere Zeitebene verlangt passende Risiko- und Halteregeln.",
      "Jede Kerze dieser beiden Panels stellt eine erfundene vollständige Sitzung dar.",
      "Übertrage einen Intraday-Stop nicht blind auf die Tagesstruktur."
    ],
    "prompt": "Wofür steht hier jede Kerze?",
    "answers": [
      {
        "label": "Immer exakt eine Minute.",
        "explanation": "Die Beschriftung benennt hier ausdrücklich Sitzungen."
      },
      {
        "label": "Eine aktuelle historische Marktaufnahme.",
        "explanation": "Die Daten sind selbst konstruierte relative Beispiele."
      },
      {
        "label": "Eine vollständige erfundene Sitzung.",
        "explanation": "Richtig: Die Struktur wird auf Tagesbars dargestellt."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Gleiche Tageshülle, verschiedener Intraday-Weg",
    "summary": "Identisches Tages-OHLC, anderer Preisweg.",
    "section": "Mehrtägige Variante und Replay",
    "scenario": "c25-22",
    "paragraphs": [
      "Ein Tagesbar fasst Eröffnung, Hoch, Tief und Schluss zusammen. Er enthält nicht die zeitliche Reihenfolge sämtlicher Zwischenbewegungen. Zwei unterschiedliche Intraday-Folgen können dieselbe Tageshülle haben und verschiedene Einstiegsmöglichkeiten bieten.",
      "Links kommt der frühe Hochbereich vor der langen Pause. Rechts erreicht der Preis denselben Hochbereich erst nach einem tieferen Zwischenweg. Beide Folgen eröffnen bei 30, haben Hoch 81 und Tief 29 und schließen bei 80.",
      "Nutze Tagesbars für den größeren Bezug und Intraday-Daten für den Ablauf. Ein äußerlich passender Tagesbar beweist weder den konkreten Zeitpunkt einer Balance noch einen damals verfügbaren Trigger."
    ],
    "callout": "Eine OHLC-Hülle bewahrt Extreme, aber nicht den gesamten Weg.",
    "takeaways": [
      "Eine OHLC-Hülle bewahrt Extreme, aber nicht den gesamten Weg.",
      "Links kommt der frühe Hochbereich vor der langen Pause.",
      "Nutze Tagesbars für den größeren Bezug und Intraday-Daten für den Ablauf."
    ],
    "prompt": "Was lässt sich aus identischem Tages-OHLC allein nicht ableiten?",
    "answers": [
      {
        "label": "Die genaue Reihenfolge der Intraday-Swings.",
        "explanation": "Richtig: Mehrere Preiswege können dieselben vier Tageswerte haben."
      },
      {
        "label": "Der Tageseröffnungspreis.",
        "explanation": "Open ist ausdrücklich Teil von OHLC."
      },
      {
        "label": "Das höchste gehandelte Niveau der konstruierten Folge.",
        "explanation": "High gehört ebenfalls zur Hülle."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Replay: Entscheidungen nur mit sichtbaren Bars",
    "summary": "Den damaligen Informationsstand erhalten.",
    "section": "Mehrtägige Variante und Replay",
    "scenario": "c25-23",
    "paragraphs": [
      "Ein Übungsfall wird realistischer, wenn du die spätere Wiederaufnahme zunächst ausblendest. Notier nach dem frühen Impuls eine vorläufige Richtung. Aktualisiere sie während der Balance und nach jeder Grenzverletzung, bevor du den nächsten Bar aufdeckst.",
      "Links endet der Verlauf mit dem Gegenausbruch auf 70. Rechts zeigt die längere Folge Rückkehr und Käuferausbruch. Das linke Präfix ist unverändert; die rechte Zukunft stand der linken Entscheidung nicht zur Verfügung.",
      "Führe ein kurzes Log: bekannte Struktur, gewünschter Auslöser, Entkräftung und Orderstatus. Markier auch eine Entscheidung ohne Trade. Späteres Wissen gehört in die Auswertung und darf den ursprünglichen Eintrag nicht überschreiben."
    ],
    "callout": "Ein guter Replay-Eintrag erhält die damals bekannte Information.",
    "takeaways": [
      "Ein guter Replay-Eintrag erhält die damals bekannte Information.",
      "Links endet der Verlauf mit dem Gegenausbruch auf 70.",
      "Führe ein kurzes Log: bekannte Struktur, gewünschter Auslöser, Entkräftung und Orderstatus."
    ],
    "prompt": "Was darfst du für die linke Entscheidung verwenden?",
    "answers": [
      {
        "label": "Das spätere Hoch 89 als Einstiegsgarantie.",
        "explanation": "Die spätere Folge ist damals unbekannt; außerdem liegt hier das Hoch bei 89, nicht ein garantierter Gewinn."
      },
      {
        "label": "Nur die bis zur linken letzten Bar sichtbare Folge.",
        "explanation": "Richtig: So bleibt der frühere Informationsstand erhalten."
      },
      {
        "label": "Eine rückwirkend geänderte Signalbar.",
        "explanation": "Das wäre eine Veränderung des früheren Falls statt eine ehrliche Auswertung."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Zwei gleiche Starts brauchen unterschiedliche Endurteile",
    "summary": "Gleiche Starts, andere Folgen.",
    "section": "Mehrtägige Variante und Replay",
    "scenario": "c25-24",
    "paragraphs": [
      "Zum Abschluss vergleichst du zwei Fälle mit identischem frühen Impuls und identischer langer Pause. Einer nimmt den Käufertrend wieder auf; der andere verliert den Pausenbereich und setzt nach unten fort. Der Ausgang darf kein Auswahlkriterium für die ursprüngliche Stichprobe sein.",
      "Links folgen aus dem bekannten Pausenpräfix Schlusskurse bis 80. Rechts folgen aus exakt demselben Präfix tiefere Schlusskurse bis 48. Beide Verläufe gehören in die Übung, obwohl nur der linke zum gesuchten Tagesnamen passt.",
      "Bewerte, ob du deine Auslöser und Entkräftungen eingehalten hast, bevor du den Geldgewinn bewertest. Erfasse Kosten, ausgelöste und nicht ausgelöste Pläne getrennt. Erst viele sauber definierte Fälle erlauben eine belastbare Prüfung der eigenen Handelsidee."
    ],
    "callout": "Prozessqualität und günstiger Ausgang sind verschiedene Dinge.",
    "takeaways": [
      "Prozessqualität und günstiger Ausgang sind verschiedene Dinge.",
      "Links folgen aus dem bekannten Pausenpräfix Schlusskurse bis 80.",
      "Bewerte, ob du deine Auslöser und Entkräftungen eingehalten hast, bevor du den Geldgewinn bewertest."
    ],
    "prompt": "Wie sollte eine spätere Auswertung diese Starts behandeln?",
    "answers": [
      {
        "label": "Den rechten löschen, weil er kein Wiederaufnahmetag wurde.",
        "explanation": "So entsteht eine Auswahl nur nach bekannten Erfolgen."
      },
      {
        "label": "Jede profitable Entscheidung automatisch korrekt nennen.",
        "explanation": "Auch ein Regelbruch kann zufällig gewinnen."
      },
      {
        "label": "Beide erfassen und die tatsächliche Folge getrennt beurteilen.",
        "explanation": "Richtig: Gleiche Ausgangskriterien müssen auch ungünstige Folgen zulassen."
      }
    ],
    "correct": 2
  }
];

export const chapterTwentyFiveLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-25-${number}`;
  return {
    id: `price-action-trends.chapter-25.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 25 · ${d.section}`,
    sourceAnchors: [`Kapitel 25 · ${d.section}`],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 25 · Trendwiederaufnahme',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Pause, Auslösung und Wiederaufnahme beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
