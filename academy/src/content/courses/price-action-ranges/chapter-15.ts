import { makeLessons } from './lessons';
export const rangesChapterFifteenLessons = makeLessons('chapter-15', 'Kapitel 15 · Zeitpunkte im Tagesverlauf einordnen', [
  {
    "title": "Eine Uhrzeit ist ein Beobachtungsanlass",
    "summary": "Zeitfenster sagen, wann du genauer hinsiehst, aber noch nicht, was du handelst.",
    "paragraphs": [
      "Nora markiert einen Zeitpunkt im Tagesverlauf. Vielleicht ist eine Veröffentlichung geplant oder die Sitzung nähert sich ihrem Ende. Solche Angaben helfen, die Aufmerksamkeit zu ordnen.",
      "Daraus entsteht noch keine Kauf- oder Verkaufsrichtung. Am selben Zeitpunkt kann ein Markt ausbrechen, einen Ausbruch zurücknehmen oder fast unverändert bleiben. Erst die tatsächliche Bewegung liefert weitere Information.",
      "Wir benutzen eigene erfundene Kurse. Die Zeitfenster sind Lernbeispiele und keine Statistik darüber, wie oft ein echter Markt an einer bestimmten Uhrzeit umkehrt."
    ],
    "prompt": "Was liefert eine Uhrzeit zunächst?",
    "answers": [
      "Einen Beobachtungsanlass, aber noch keine Handelsrichtung.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Uhrzeit und tatsächliche Preisreaktion getrennt beurteilen.",
    "diagram": "par15-morning-pre"
  },
  {
    "title": "Markt, Sitzung und Datum zuerst festlegen",
    "summary": "Der Grundfall verwendet den 4. Februar 2026 und America/New_York.",
    "paragraphs": [
      "Unser fiktiver Markt wird für diese Übung in einer Sitzung von 09:30 bis 16:00 New Yorker Ortszeit betrachtet. Das ist die gewählte Abgrenzung; wir zeigen keine echten Kursdaten eines Instruments.",
      "Das Grunddatum lautet 4. Februar 2026. Die Zeitzone heißt America/New_York. Vor- und Nachhandel sowie andere Instrumente können anders abgegrenzt sein. Auch Feiertage und verkürzte Sitzungen müssen bei realen Daten geprüft werden.",
      "Nora schreibt diese Angaben vor die Chartbeurteilung. Ein Uhrzeitmuster aus einer abgegrenzten Sitzung darf nicht ungeprüft auf einen rund um die Uhr gehandelten anderen Markt übertragen werden."
    ],
    "prompt": "Welche Angaben gehören vor die Zeitfensteranalyse?",
    "answers": [
      "Marktbezug, Datum, Zeitzone und die gewählte Sitzung.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Die betrachtete Sitzung ausdrücklich abgrenzen.",
    "diagram": "par15-morning-pre"
  },
  {
    "title": "Ortszeit ist keine feste deutsche Uhrzeit",
    "summary": "Am 4. Februar entsprechen 10:00 in New York 16:00 in Berlin.",
    "paragraphs": [
      "Eine Uhrzeit braucht eine Zeitzone. In unserem Winterbeispiel liegt 10:00 am 4. Februar 2026 in New York bei 15:00 UTC und bei 16:00 in Berlin. UTC ist eine gemeinsame Zeitbasis ohne saisonale Uhrumstellung.",
      "In Los Angeles ist derselbe Zeitpunkt 07:00. Es geht um einen einzigen Augenblick mit unterschiedlichen Ortsanzeigen. Die Anzeige 07:00 allein darf deshalb nicht als deutsche Morgenzeit gelesen werden.",
      "Nora verwendet in den Charts durchgehend New Yorker Startzeiten. Eine deutsche Anzeige wäre eine Umrechnung desselben datierten Zeitpunkts, keine zusätzliche Marktbewegung."
    ],
    "prompt": "Welcher Berliner Zeitpunkt gehört zum Winterbeispiel 10:00 New York?",
    "answers": [
      "16:00 am selben Datum.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Datierte Zeitpunkte umrechnen statt bloße Uhrzahlen kopieren.",
    "diagram": "par15-clock"
  },
  {
    "title": "Die Wochen zwischen den Zeitumstellungen berücksichtigen",
    "summary": "Am 18. März 2026 entsprechen 10:00 New York bereits 15:00 Berlin.",
    "paragraphs": [
      "USA und Europa stellen ihre Uhren nicht am selben Wochenende um. Deshalb ist der Abstand zwischen New York und Berlin nicht an jedem Handelstag gleich.",
      "Im datierten Beispiel am 18. März 2026 wird 10:00 New York als 15:00 Berlin angezeigt. Am 8. April 2026 wird derselbe New Yorker Stundenwert wieder zu 16:00 Berlin. Die Umrechnung nutzt jeweils Datum und benannte Zeitzone.",
      "Nora merkt sich keine ewige Regel plus sechs Stunden. Vor einem echten Termin prüft sie Kalender und Plattformanzeige. Die Beispiele sagen nichts über eine Preisrichtung an diesen Tagen."
    ],
    "prompt": "Warum genügt eine immer feste Verschiebung um sechs Stunden nicht?",
    "answers": [
      "Weil die unterschiedlichen Umstellungswochen den Zeitabstand verändern können.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Datum und Zeitzonenregeln für jede Umrechnung verwenden.",
    "diagram": "par15-dst"
  },
  {
    "title": "Startzeit und Schlusszeit der Kerze unterscheiden",
    "summary": "Eine Kerze mit Beschriftung 10:00 ist hier erst um 10:05 vollständig bekannt.",
    "paragraphs": [
      "Unsere Kerzen umfassen fünf Minuten und tragen ihre Startzeit. Die Kerze 10:00 beschreibt den Abschnitt ab 10:00 bis vor 10:05. Ihr vollständiger Schluss steht erst um 10:05 fest.",
      "Die vorherige Kerze 09:55 endet um 10:00. Ein genau für 10:00 geplantes Ereignis gehört nach unserer Abgrenzung in die neue Kerze. Es darf nicht rückwirkend in die abgeschlossene 09:55-Kerze eingeordnet werden.",
      "Nora kann um 10:00 also die drei bisherigen Morgenkerzen lesen. Hoch, Tief und Schluss der gerade beginnenden Ereigniskerze sind noch unbekannt."
    ],
    "prompt": "Ab wann ist die ganze mit 10:00 beschriftete Fünf-Minuten-Kerze bekannt?",
    "answers": [
      "Erst um 10:05.",
      "Schon um 09:55, weil die nächste Uhrzeit feststeht.",
      "Genau um 10:00 sind alle fünf Minuten bereits bekannt."
    ],
    "rule": "Startbeschriftung und tatsächlichen Informationsabschluss trennen.",
    "diagram": "par15-morning-pre"
  },
  {
    "title": "Ein Nachrichtenfenster vorab markieren",
    "summary": "10:00 ist im Morgenfall ein ausdrücklich fiktiver Veröffentlichungstermin.",
    "paragraphs": [
      "Für die Übung nehmen wir einen geplanten Termin um 10:00 New Yorker Zeit an. Er ist erfunden und keine Behauptung über eine tatsächliche Veröffentlichung am Grunddatum.",
      "Nora beobachtet als eigene Regel die Kerzen mit Startzeiten 09:55, 10:00 und 10:05 besonders genau. Dieses Fenster umfasst einen Abschnitt davor und zwei danach. Es ist keine garantierte Reaktionsdauer.",
      "Für reale Termine braucht sie den aktuellen Kalender des Herausgebers. Eine sichtbare schnelle Kerze beweist weder den Nachrichteninhalt noch, dass ausschließlich diese Meldung die Bewegung verursacht hat."
    ],
    "prompt": "Ist der Termin 10:00 in diesem Kurs ein recherchierter realer Datenbericht?",
    "answers": [
      "Nein, er ist ein ausdrücklich erfundener Übungstermin.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Geplanten Termin, Quelle und tatsächliche Reaktion auseinanderhalten.",
    "diagram": "par15-morning-event"
  },
  {
    "title": "Die Richtung vor dem Morgenfenster festhalten",
    "summary": "Die ersten drei Kerzen steigen von 100 bis zum Hoch 106.",
    "paragraphs": [
      "Der Morgenfall beginnt um 09:45. Die Schlüsse der drei abgeschlossenen Kerzen steigen bis 105,8; das bisherige Hoch beträgt 106. Dieser Befund ist um 10:00 bekannt.",
      "Die geplante Ereigniskerze beginnt erst jetzt. Nora hat einen vorherigen Aufwärtsschub vor sich, weiß aber noch nicht, wie stark die Gegenreaktion ausfallen und ob sie Anschluss bekommen wird.",
      "Die Vorgeschichte hilft beim Einordnen des nächsten Schritts. Sie bestimmt dessen Ausgang nicht. Ein vorheriger Trend kann sich fortsetzen oder durch neue Gegenstärke geschwächt werden."
    ],
    "prompt": "Was ist um 10:00 sicher bekannt?",
    "answers": [
      "Der bisherige Aufwärtsschub, aber nicht der Schluss der Ereigniskerze.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Vorgeschichte vor dem neuen Ereignis als eigenen Stand festhalten.",
    "diagram": "par15-morning-pre"
  },
  {
    "title": "Eine starke Gegenkerze ist zunächst nur eine Gegenkerze",
    "summary": "Die Ereigniskerze fällt bis 102 und schließt um 10:05 bei 102,4.",
    "paragraphs": [
      "Die mit 10:00 beschriftete Kerze eröffnet bei 105,8 und fällt bis 102. Ihr Schluss 102,4 liegt nahe dem Tief. Es ist eine deutliche Abwärtsreaktion nach dem vorherigen Anstieg.",
      "Eine einzelne rote Kerze kann der Beginn einer Umkehr sein oder Teil einer Pause bleiben. Um 10:05 sind die nächsten Kerzen noch unbekannt. Der große Körper allein beantwortet die Anschlussfrage nicht.",
      "Nora nennt außerdem nur die zeitliche Nähe zum fiktiven Termin. Unsichtbare Orders, gezielte Gerüchte oder Motive einer bestimmten Institution lassen sich daraus nicht beweisen."
    ],
    "prompt": "Beweist die rote Ereigniskerze schon einen dauerhaften Abwärtstrend?",
    "answers": [
      "Nein, der weitere Anschluss ist eine eigene Beobachtung.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Gegenstärke beschreiben und Anschluss offenlassen.",
    "diagram": "par15-morning-event"
  },
  {
    "title": "Einen gescheiterten Umkehrversuch erst am Anschluss erkennen",
    "summary": "Im Fortsetzungsfall steigt die Kerze 10:05 wieder über das frühere Hoch.",
    "paragraphs": [
      "Im ersten Ausgang folgt auf die rote Ereigniskerze eine grüne Kerze mit Hoch 106,5 und Schluss 106,3. Damit liegt ihr Schluss über dem vorherigen Hoch 106.",
      "Der Abwärtsversuch hat bis hier keinen anhaltenden Anschluss bekommen. Weitere grüne Kerzen führen später zu höheren Hochs. Das ist ein erfolgreicher Fortsetzungsverlauf unseres erfundenen Falls.",
      "Nora darf ihn erst mit diesen späteren Abschlüssen erklären. Um 10:00 oder direkt am Tief der roten Kerze war die anschließende Rückkehr noch keine bekannte Tatsache."
    ],
    "prompt": "Welche spätere Information schwächt die Umkehridee nach unten?",
    "answers": [
      "Der erneute Schluss 106,3 über dem vorherigen Hoch 106.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Einen Fehlversuch über sichtbaren Anschluss und dessen Zeitpunkt erklären.",
    "diagram": "par15-morning-resume"
  },
  {
    "title": "Zur gleichen Uhrzeit kann die Umkehr gelingen",
    "summary": "Ein Gegenfall teilt die Ereigniskerze, fällt danach aber weiter.",
    "paragraphs": [
      "Der zweite Ausgang hat dieselben ersten vier Morgenkerzen, einschließlich des Rückgangs um 10:00. Danach schließt die nächste Kerze jedoch bei 99,3; die folgende erreicht ein Tief 97.",
      "Damit entsteht weitergehender Abwärtsfortschritt statt der schnellen Erholung des ersten Falls. Termin, Zeitzone und Ausgangsreaktion waren gleich; der spätere Anschluss unterscheidet sich.",
      "Nora kann die Richtung deshalb nicht aus der Uhr ablesen. Sie vergleicht die nachfolgenden tatsächlichen Kerzen und muss die ursprüngliche Erwartung bei neuen Daten anpassen."
    ],
    "prompt": "Was unterscheidet die beiden Morgenfälle?",
    "answers": [
      "Der spätere Anschluss, nicht die Uhrzeit des Ereignisses.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Identische frühe Informationen mit verschiedenen Ausgängen vergleichen.",
    "diagram": "par15-morning-reversal"
  },
  {
    "title": "Auch wenig Bewegung ist ein möglicher Ausgang",
    "summary": "Eine Variante bleibt nach dem selben Vorlauf um 106 seitwärts.",
    "paragraphs": [
      "Eine ruhige Variante übernimmt den dreikerzigen Vorlauf. Die geplante Ereigniskerze und die nächste Kerze überlappen eng um 106. Es entsteht weder ein großer neuer Ausbruch noch eine klare Gegenumkehr.",
      "Ein Termin erzeugt nicht automatisch eine große handelbare Strecke. Die Reihenfolge von Erwartungen, Nachrichten und bereits vorhandenen Positionen kann aus unserem Bild ohnehin nicht vollständig abgelesen werden.",
      "Nora dokumentiert auch diesen Ausgang. Wer nur spektakuläre Beispiele sammelt, kann die Bedeutung einer Uhrzeit stark überschätzen."
    ],
    "prompt": "Muss ein vorab markiertes Fenster einen starken Ausbruch liefern?",
    "answers": [
      "Nein, auch eine kleine überlappende Bewegung ist möglich.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Ruhige und uneindeutige Ausgänge in den Vergleich aufnehmen.",
    "diagram": "par15-morning-quiet"
  },
  {
    "title": "Große Dochte zeigen eine andere Ausgangslage",
    "summary": "Der zusätzliche Morgenrange-Fall hat vor dem Termin breite Überlappung.",
    "paragraphs": [
      "In einem eigenen Morgenfall stehen schon vor 10:00 mehrere große Kerzen mit langen Dochten. Ihre Spannen überlappen stark zwischen ungefähr 98,5 und 104,5.",
      "Das ist eine andere Vorgeschichte als der klare dreikerzige Aufwärtsschub. Ein Kauf über einer einzelnen grünen Kerze kann bereits nahe der oberen Bereichsgrenze liegen. Körperfarbe allein beseitigt die Seitwärtsstruktur nicht.",
      "Nora benennt die Grenzen und die verbleibende Strecke. Der gleiche fiktive Termin wird nun in einem beidseitigen Markt beobachtet, nicht in derselben Trendsituation."
    ],
    "prompt": "Was ist im zusätzlichen Morgenfall vor dem Termin anders?",
    "answers": [
      "Die breite Überlappung mit langen Dochten statt eines klaren einseitigen Schubs.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Den Zustand vor dem Fenster gemeinsam mit der Uhrzeit prüfen.",
    "diagram": "par15-opening-range"
  },
  {
    "title": "Zwei Grenzverletzungen beweisen keine bestimmten Händlerpositionen",
    "summary": "Der Morgenrange-Fall handelt erst unter 98,5 und später über 104,5.",
    "paragraphs": [
      "Im zusätzlichen Fall fällt die Ereigniskerze bis 97,5. Die nächste steigt bis 105 und schließt bei 104,6. Danach fällt der Kurs wieder zurück.",
      "Das sind aufeinanderfolgende Verletzungen der zuvor benannten Grenzen. Manche Teilnehmer könnten nach diesen Bewegungen ungünstig positioniert sein. Wer tatsächlich gekauft, verkauft oder aufgegeben hat, wissen wir nicht.",
      "Der Begriff Falle beschreibt hier eine mögliche Deutung eines gescheiterten Ausbruchs. Nora trennt diese Deutung von den beweisbaren Preisen und macht daraus keine sichere nächste Richtung."
    ],
    "prompt": "Was belegt das Bild unmittelbar?",
    "answers": [
      "Preisbewegungen durch beide Grenzen; bestimmte fremde Positionen bleiben unbekannt.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Preisbeobachtung und Teilnehmerhypothese getrennt formulieren.",
    "diagram": "par15-opening-traps"
  },
  {
    "title": "Am Nachmittag den Zustand erneut bestimmen",
    "summary": "Der Nachmittagsfall steigt zunächst bis 111,5 und hat zwei EMA-Besuche.",
    "paragraphs": [
      "Unser eigenständiger Nachmittagsfall beginnt um 13:55 mit einer Aufwärtsbewegung. Nach mehreren Abschlüssen liegt das bisherige Hoch bei 111,5. Der spätere schnelle Rückgang ist noch nicht bekannt.",
      "Der EMA20 wird aus vierzig Vorbereitungsschlüssen bei 108 und den sichtbaren Schlüssen berechnet. Die Kerzen mit Start 14:10 und 14:20 umfassen den jeweiligen EMA. Es sind zwei sichtbare Linienbesuche.",
      "Nora zählt dafür nur die tatsächlich vorhandenen Daten. Eine zwanzig Kerzen lange kontaktfreie Vorgeschichte wird in diesem Fall nicht behauptet. Uhrzeit, Kontaktzahl und Trendstärke sind eigene Angaben."
    ],
    "prompt": "Welche EMA-Vorgeschichte ist in diesem Nachmittagsfall wirklich gezeigt?",
    "answers": [
      "Zwei Linienbesuche, aber keine behauptete zwanzig Kerzen lange kontaktfreie Folge.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Kontaktregeln nur mit der vorhandenen Vorgeschichte anwenden.",
    "diagram": "par15-afternoon-before"
  },
  {
    "title": "Den späten Gegenstoß als Preisereignis lesen",
    "summary": "Die Kerze 14:25 fällt bis 104,8 und schließt bei 105,2.",
    "paragraphs": [
      "Der Nachmittagsfall zeigt nun eine große rote Kerze von Eröffnung 110,4 bis Schluss 105,2, nahe ihrem Tief 104,8. Die Kerze liegt zeitlich nahe am hier gewählten Beobachtungsfenster um 14:30.",
      "Der Ausdruck Stop-Run würde vermuten, dass Schutzorders ausgelöst wurden. Unser OHLC-Bild zeigt Eröffnung, Hoch, Tief und Schluss, aber kein Orderbuch und keine fremden Stopfüllungen.",
      "Nora kann den deutlichen Gegenstoß und einen möglichen Strukturbruch prüfen. Sie unterstellt weder absichtliche Manipulation noch eine bestimmte Nachricht als bewiesene Ursache."
    ],
    "prompt": "Was lässt sich aus der großen roten Kerze sicher lesen?",
    "answers": [
      "Ihre Preise und Gegenstärke; fremde Stoporders und Absichten sind nicht belegt.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Den Ausdruck Stop-Run als Hypothese vom sichtbaren Verlauf trennen.",
    "diagram": "par15-late-shock"
  },
  {
    "title": "Eine bekannte Trendlinie als eigenen Bezug prüfen",
    "summary": "Die größere Übungsgerade hat um 14:25 einen Wert von 109.",
    "paragraphs": [
      "Ein getrennt vorgegebener früherer Anker liegt um 13:15 bei 106,2. Mit dem sichtbaren Tief um 13:55 bei 107,8 ergibt das eine Gerade, die je Minute um 0,04 Punkte steigt.",
      "Um 14:25 liegt sie damit bei 109. Das Tief der Gegenkerze bei 104,8 unterschreitet diese Linie deutlich. Die vorherigen sichtbaren Tiefs lagen noch darüber.",
      "Der erste Anker ist zusätzlicher bekannter Kontext und wird nicht aus den späteren Kerzen erfunden. Der Linienbruch ist ein neues Gegenargument; eine anschließende Erholung und eine echte weitere Umkehr bleiben beide möglich."
    ],
    "prompt": "Wie liegt Tief 104,8 gegenüber Linienwert 109?",
    "answers": [
      "Darunter; die vorher definierte Gerade ist gebrochen.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Ankerherkunft, Linienrechnung und Bruchzeitpunkt offenlegen.",
    "diagram": "par15-late-line"
  },
  {
    "title": "Eine ganze Gegenkerze braucht den gleichzeitigen EMA",
    "summary": "Die Kerze 14:30 liegt vollständig unter ihrem EMA20.",
    "paragraphs": [
      "Nach dem starken Rückgang steigt die nächste Kerze etwas, hat aber nur ein Hoch von 107,8. Dieses Hoch bleibt unter dem EMA20 derselben abgeschlossenen Kerze.",
      "Damit entsteht eine erste ganze Gegenkerze unter der Linie im sichtbaren Abschnitt. Die EMA-Besuche davor und dieser ganze Abstand sind unterschiedliche Ereignisse. Eine Aufwärtsreaktion muss daraus nicht automatisch folgen.",
      "Nora verbindet hier den Lernstoff des vorherigen Kapitels mit dem Tagesverlauf. Die Uhrzeit fügt Kontext hinzu; sie ersetzt die Preisregel und die Prüfung der neuen Gegenstärke nicht."
    ],
    "prompt": "Welche Bedingung macht die Kerze zu einer ganzen Gegenkerze unter dem EMA?",
    "answers": [
      "Ihr Hoch liegt unter dem EMA desselben abgeschlossenen Abschnitts.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Uhrzeit als Zusatzkontext zur geprüften Kerzenregel verwenden.",
    "diagram": "par15-late-gap"
  },
  {
    "title": "Erster Aufwärtsversuch und schwacher Anschluss",
    "summary": "Die Kerze 14:35 erreicht 108,1, schließt aber wieder bei 106.",
    "paragraphs": [
      "Nach dem Hoch 107,8 der vorigen Kerze könnte eine erste Stopkaufschwelle bei 107,9 liegen. Die folgende Kerze erreicht 108,1 und schließt anschließend bei 106.",
      "Die Schwelle wurde erreicht, der Schluss zeigt aber keinen kräftigen anhaltenden Aufwärtsanschluss. Ob und zu welchem Preis eine echte Order gefüllt wurde, ist eine zusätzliche Ausführungsfrage.",
      "Nora unterscheidet diesen ersten Versuch von einer späteren neuen Idee. Sie zählt nicht jede kleine grüne Kerze sofort als weitere sichere Gelegenheit."
    ],
    "prompt": "Was belegen Hoch 108,1 und Schluss 106 gegenüber Schwelle 107,9?",
    "answers": [
      "Die Schwelle wurde erreicht, der Schluss blieb schwach.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Schwellenkontakt und Qualität des Anschlusses separat bewerten.",
    "diagram": "par15-late-first"
  },
  {
    "title": "Ein zweiter tiefer Besuch kann den ersten unterlaufen",
    "summary": "Die Kerze 14:40 fällt bis 104,6, bleibt aber über Kontexttief 104,5.",
    "paragraphs": [
      "Der erste Gegenstoß hatte ein Tief 104,8. Nach einer Zwischenbewegung erreicht der nächste Rückgang 104,6. Er liegt 0,2 Punkte tiefer als der erste örtliche Besuch.",
      "Ein zusätzlicher vorab vorgegebener Kanalbeginn liegt bei 104,5. Beide örtlichen Tests bleiben darüber. Unter dem ersten Test und über dem älteren Kontexttief sind deshalb keine widersprüchlichen Aussagen.",
      "Nora nennt die Anker getrennt. Ein Doppelbodenversuch darf leicht ungleich aussehen; der sichtbare Verlauf muss aber erst zeigen, ob eine neue Aufwärtsreaktion hält."
    ],
    "prompt": "Welche Aussage über 104,6 stimmt?",
    "answers": [
      "Es liegt unter 104,8 und zugleich über dem älteren Kontexttief 104,5.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Örtliche und ältere Testanker auseinanderhalten.",
    "diagram": "par15-late-second-low"
  },
  {
    "title": "Zweites Signal erst nach dem Abschluss verwenden",
    "summary": "Hoch 14:45 bei 106 ergibt eine neue Schwelle 106,1.",
    "paragraphs": [
      "Die mit 14:45 beschriftete Kerze schließt bei 105,8 und hat Hoch 106. Ihr Schluss steht erst um 14:50 fest. Eine Stopkaufschwelle eine Preisstufe von 0,1 darüber läge bei 106,1.",
      "Die Reaktion bleibt zunächst unter dem Hoch der vorherigen Abwärtskerze bei 106,2. Erst ein späterer Handel über dem ausgewählten Signal kann den neuen Versuch beginnen.",
      "Nora legt Schwelle und Schutz erst mit bekanntem Signal fest. Ein möglicher Schutz unter dem tieferen Test 104,6 könnte bei 104,5 liegen; tatsächliche Füllungen sind damit noch nicht bewiesen."
    ],
    "prompt": "Ab wann ist das fertige Signalhoch der mit 14:45 beschrifteten Kerze bekannt?",
    "answers": [
      "Um 14:50, nach ihrem Abschluss.",
      "Bereits um 14:45 mit sämtlichen späteren Extremwerten.",
      "Erst nach dem Ende des nächsten Handelstages."
    ],
    "rule": "Eine bekannte Startzeit nicht mit schon verfügbarem Signalinhalt verwechseln.",
    "diagram": "par15-late-signal"
  },
  {
    "title": "Späte Fortsetzung erst im späteren Bild bestätigen",
    "summary": "Der zweite Plan wird erreicht; ein neues Hoch entsteht erst in der Kerze 15:00.",
    "paragraphs": [
      "Im Fortsetzungsfall erreicht die Kerze 14:50 ein Hoch 109 und schließt bei 108,8. Die neue Schwelle 106,1 ist damit erreicht. Danach folgt ein Hoch 111,4, noch knapp unter dem bisherigen Hoch 111,5.",
      "Erst die Kerze mit Start 15:00 erreicht 112. Dieses neue Hoch ist nach ihrem Abschluss um 15:05 bekannt. Der starke Gegenstoß hat hier die frühere Aufwärtsrichtung nicht dauerhaft beendet.",
      "Die Bewegung bis 15:05 ist kein Beweis für den späteren Tagesschluss um 16:00. Nora hält Auswertungsende, Zielkontakt und vollständigen Sitzungsschluss getrennt."
    ],
    "prompt": "Ab wann ist Hoch 112 dieses Beispiels vollständig bekannt?",
    "answers": [
      "Um 15:05 nach Abschluss der Kerze mit Start 15:00.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Spätere Bestätigung und noch unbekannten Sitzungsschluss getrennt halten.",
    "diagram": "par15-late-resume"
  },
  {
    "title": "Die gleiche späte Uhrzeit kann weiter nach unten führen",
    "summary": "Ein Gegenfall teilt den starken Gegenstoß und fällt anschließend bis 101.",
    "paragraphs": [
      "Der Gegenfall übernimmt alle Nachmittagskerzen bis einschließlich des großen Rückgangs 14:25. Danach bleiben eine schnelle Erholung und das spätere neue Hoch aus. Weitere Kerzen drücken den Kurs bis 101.",
      "Die Uhrzeit nahe 14:30 hat in diesem Fall keine Rückkehr erzwungen. Der gebrochene Linienbezug und weiterer Gegenanschluss können eine andere Marktphase anzeigen.",
      "Nora kauft nicht allein, weil ein früheres Beispiel zu dieser Uhrzeit gut ausging. Für einen neuen Versuch braucht sie aktuelle Preisregeln und ein begrenztes Risiko."
    ],
    "prompt": "Warum reicht das Zeitfenster nahe 14:30 hier nicht als Kaufgrund?",
    "answers": [
      "Weil derselbe frühe Gegenstoß auch weiteren Abwärtsanschluss bekommen kann.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Einen Zeitbezug nie gegen den tatsächlich sichtbaren Anschluss ausspielen.",
    "diagram": "par15-late-failure"
  },
  {
    "title": "Ein spätes Überschreiten kann auch nach unten scheitern",
    "summary": "Der gespiegelte Fall steigt gegen den Abwärtstrend und fällt anschließend wieder.",
    "paragraphs": [
      "Wir spiegeln den Nachmittagsfall mit 220 minus jedem Preis. Aus der vorherigen Aufwärtsbewegung wird eine Abwärtsbewegung. Der kräftige späte Gegenstoß läuft nun nach oben.",
      "Er überschreitet einen früheren Hochbezug, hält die höhere Lage im späteren Verlauf aber nicht. Das kann als gescheiterter Aufwärtsausbruch in einem Abwärtskontext beschrieben werden.",
      "Nora spiegelt auch Hoch und Tief, Linien- und EMA-Anfang sowie die Schutzseite. Sie behauptet aus den Kurven keine genaue Zahl neu gekaufter oder ausgestoppter Positionen."
    ],
    "prompt": "Welche Richtung hat der starke Gegenstoß im gespiegelten Abwärtsfall?",
    "answers": [
      "Nach oben, gegen die vorherige Abwärtsbewegung.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Bei Spiegelung Richtung, Extreme und Orderseite gemeinsam tauschen.",
    "diagram": "par15-late-bear"
  },
  {
    "title": "Eine Range kann lange an ihrer oberen Hälfte bleiben",
    "summary": "Ein eigener Range-Fall handelt zwei Stunden oberhalb der Mitte 102.",
    "paragraphs": [
      "Für den Range-Fall sind ein früheres Tagestief 96 und Tageshoch 108 als abgeschlossener Kontext vorgegeben. Die Mitte liegt bei 102. Zwischen 12:30 und 14:30 handeln vierundzwanzig Fünf-Minuten-Kerzen in der oberen Hälfte.",
      "Das lange Verweilen nahe einer Seite kann wie Vorbereitung eines Ausbruchs wirken. Trotzdem bleibt die andere Grenze als möglicher späterer Bezug wichtig. Die Tagesstruktur ist nicht durch die Aufenthaltsdauer entschieden.",
      "Nora trennt vorgegebene frühe Tagesgrenzen von den später sichtbaren Kerzen. Eine Verlagerung innerhalb der Range darf nicht als bereits geglückter Ausbruch über 108 bezeichnet werden."
    ],
    "prompt": "Beweist der zweistündige Aufenthalt oben einen späteren Ausbruch nach oben?",
    "answers": [
      "Nein, er beschreibt nur die bisherige Lage innerhalb des Bereichs.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Aufenthaltsort und tatsächlich überschrittene Grenze getrennt prüfen.",
    "diagram": "par15-range-upper"
  },
  {
    "title": "Ein schneller Gegenlauf kann die andere Tagesgrenze verletzen",
    "summary": "Die Range-Kerze 14:30 fällt bis 95,5 unter das frühere Tagestief 96.",
    "paragraphs": [
      "Im Range-Zusatzfall folgt nun ein schneller Rückgang bis 95,5. Der Schluss liegt bei 96. Damit hat der Kurs die bisherige Untergrenze 96 unterschritten, obwohl er vorher lange im oberen Teil lag.",
      "Das ist ein neuer Ausbruchversuch nach unten. Ob er hält oder in den Bereich zurückkehrt, ist nach Abschluss dieser Kerze noch offen. Früherer Aufenthalt oben macht die Verletzung unten nicht unmöglich.",
      "Einige hypothetische Teilnehmer könnten durch die Richtungswechsel ungünstig positioniert sein. Das bleibt eine mögliche Erklärung. Belegt sind zunächst der vorherige Bereich und die neue Preisverletzung."
    ],
    "prompt": "Was ist nach der Range-Kerze 14:30 sicher?",
    "answers": [
      "Ein Handel unter 96, aber noch kein bekannter späterer Ausgang.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Grenzverletzung und deren späteres Scheitern getrennt feststellen.",
    "diagram": "par15-range-break"
  },
  {
    "title": "Zwei untere Versuche können eine neue Gegenidee vorbereiten",
    "summary": "Im Range-Fall stehen Tiefs 95,5 und 95,2 einer späteren Erholung gegenüber.",
    "paragraphs": [
      "Nach dem ersten Unterlauf bis 95,5 entsteht eine Zwischenerholung. Ein erster Aufwärtsversuch erreicht seine kleine Schwelle, schließt jedoch wieder tief. Danach fällt der nächste Rückgang bis 95,2.",
      "Eine spätere Reaktionskerze mit Hoch 96,5 erlaubt einen neuen Plan bei 96,6. Erst der folgende Aufwärtsfortschritt kann zeigen, ob der Markt wieder in die alte Range zurückkehrt.",
      "Nora benennt jeden Versuch über seine Schwelle und seinen Abschluss. Die zwei ähnlichen Tiefs liefern keine automatisch ausgeführten Käufe und keine Zusage, dass der zweite Versuch gelingt."
    ],
    "prompt": "Welche neue Schwelle gehört zum späteren Signalhoch 96,5?",
    "answers": [
      "96,6 bei einer Preisstufe von 0,1.",
      "95,2, weil ein Kauf immer unter dem Tief ausgelöst wird.",
      "Immer 108, unabhängig von der Signalkerze."
    ],
    "rule": "Zwei Tests, Reaktion und neue Schwelle zeitlich auseinanderhalten.",
    "diagram": "par15-range-second"
  },
  {
    "title": "Zur Mitte zurückkehren heißt noch nicht oben ausbrechen",
    "summary": "Die spätere Erholung erreicht die alte Mitte 102.",
    "paragraphs": [
      "Im erfolgreichen Range-Ausgang steigt der Kurs nach dem zweiten unteren Besuch wieder in den Bereich. Die Kerze 15:00 erreicht ein Hoch 103 und schließt bei 102,5.",
      "Damit ist die vorher berechnete Mitte 102 erreicht, das alte Tageshoch 108 jedoch noch nicht. Eine begrenzte Erholung kann also ein anderes Ergebnis sein als ein neuer kräftiger Aufwärtstrend.",
      "Nora kann die Mitte als vorher benannten Bezug auswerten. Sie verwandelt einen kurzen Rücklauf nicht nachträglich in eine vorher sicher erwartete große Bewegung zur Oberkante."
    ],
    "prompt": "Welcher bekannte Bezug wird im späteren Range-Bild erreicht?",
    "answers": [
      "Die Mitte 102, während die Oberkante 108 weiter entfernt bleibt.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Begrenzte Rückkehr und großen Richtungsausbruch unterscheiden.",
    "diagram": "par15-range-middle"
  },
  {
    "title": "Ein mittiger Schluss ist ein Fallausgang, keine Tagespflicht",
    "summary": "Unser vollständiger Range-Ausgang endet bei 101,8.",
    "paragraphs": [
      "Der Range-Fall wird bis zum letzten Fünf-Minuten-Abschnitt der gewählten Sitzung verlängert. Dessen Startzeit ist 15:55; der Schluss 101,8 ist erst um 16:00 bekannt.",
      "Dieser Schluss liegt nahe der Mitte 102. Er ist das Ende eines erfundenen Verlaufs und keine Regel, dass jede Range in ihrer Mitte schließen muss. Andere Tage können an einer Grenze oder außerhalb enden.",
      "Nora nennt erst dann einen Tagesschluss, wenn die abgegrenzte Sitzung vollständig abgeschlossen ist. Das kürzere Hauptbeispiel bis 15:05 durfte diese Information vorher nicht behaupten."
    ],
    "prompt": "Wann ist der Schluss der letzten mit 15:55 beschrifteten Kerze bekannt?",
    "answers": [
      "Um 16:00.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Teilabschnitt und vollständigen Sitzungsschluss nicht verwechseln.",
    "diagram": "par15-range-close"
  },
  {
    "title": "Späte Einstiege können weniger Strecke übriglassen",
    "summary": "Von 111,3 bis zum alten Hoch 111,5 bleiben nur 0,2 Punkte.",
    "paragraphs": [
      "Wer der Erholung erst spät hinterherläuft, kann schon fast am alten Bezug ankommen. Als reine Rechnung nehmen wir einen Kauf bei 111,3 und Ziel 111,5 an. Der mögliche Bruttoweg beträgt nur 0,2 Punkte.",
      "Bei fünf Einheiten zu einem Euro je Punkt ergibt das einen Euro brutto. Nach zwei Euro Gesamtkosten bliebe minus ein Euro. Ein weiter Schutz bei 108,5 hätte dagegen 2,8 Punkte Preisrisiko je Einheit.",
      "Nora beurteilt die jetzt verfügbare Strecke. Dass ein früherer Einstieg besser ausgesehen hätte, vergrößert den verbleibenden Zielweg nicht. Auslassen ist eine mögliche Entscheidung."
    ],
    "prompt": "Wie viel bliebe am festen Ziel nach den angenommenen Kosten netto?",
    "answers": [
      "Minus ein Euro.",
      "Plus ein Euro, weil Gebühren nicht zum Ergebnis gehören.",
      "Vierzehn Euro, weil Schutzstrecke und Zielstrecke identisch sind."
    ],
    "rule": "Reststrecke nach Kosten am aktuellen möglichen Einstieg prüfen.",
    "diagram": "par15-late-cost"
  },
  {
    "title": "Ausführungsrisiko rund um schnelle Bewegungen modellieren",
    "summary": "Ein schlechterer Kaufpreis erhöht die Schutzstrecke.",
    "paragraphs": [
      "Für den zweiten Nachmittagsplan nehmen wir zunächst Kauf 106,1 und Schutz 104,5 an. Die Preisstrecke beträgt 1,6 Punkte. Bei einem Euro je Punkt, zwei Euro Gesamtkosten und Budget 20 Euro passen elf ganze Einheiten: 19,6 Euro Modellverlust.",
      "Einen schlechteren Kaufpreis 106,4 nennen wir eine mögliche negative Ausführungsabweichung. Dann beträgt die Strecke 1,9 Punkte. Mit demselben Budget passen nur neun ganze Einheiten hinein; elf würden 22,9 Euro riskieren.",
      "Das sind Rechenszenarien, keine zugesagten Füllungen. Ein schneller Markt kann zwischen geplantem und verfügbarem Preis unterscheiden. Nora hält die Menge auch unter einer ungünstigeren Annahme prüfbar."
    ],
    "prompt": "Welche Menge passt bei Kauf 106,4, Schutz 104,5 und zwei Euro Kosten ins 20-Euro-Budget?",
    "answers": [
      "Neun ganze Einheiten.",
      "Weiterhin elf, weil der Plan vor dem Ereignis erstellt wurde.",
      "Zwanzig, weil zwei Euro Kosten immer das einzige Risiko sind."
    ],
    "rule": "Geplante Schwelle und mögliche Füllabweichung getrennt in Geld rechnen.",
    "diagram": "par15-execution"
  },
  {
    "title": "Der nächste Morgen ist eine neue Sitzung",
    "summary": "Der eigene Folgetagsfall prüft ein separates, bereits abgeschlossenes Vortageshoch.",
    "paragraphs": [
      "Für einen getrennten Folgetagsfall geben wir eine vollständige frühere Sitzung ausdrücklich als Kontext vor: Hoch 112, Tief 104,5 und Schluss 111,6. Diese Werte werden nicht aus dem kürzeren Nachmittagsausschnitt abgeleitet.",
      "Am nächsten Übungstag steigt die erste Kerze bis 112,4, danach folgt ein deutlicher Rückgang. Eine spätere Erholung bleibt unter dem ersten Hoch; erneut fallende Kurse liefern weiteren Gegenanschluss.",
      "Ein früheres neues Hoch nach einem Linienbruch kann Anlass für eine neue Gegenprüfung sein. Es erzeugt aber keinen automatischen Verkauf zum nächsten Sitzungsbeginn. Neue Signale, Ziele und Risiken sind nötig."
    ],
    "prompt": "Welche Grundlage hat der Folgetagsfall?",
    "answers": [
      "Einen separat vorgegebenen abgeschlossenen Vortagskontext und neue heutige Kerzen.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Vorherige Sitzung und neue Eröffnungsinformation zeitlich trennen.",
    "diagram": "par15-next-day"
  },
  {
    "title": "Gefühlte Sicherheit nach einer Uhrzeit erkennen",
    "summary": "Angst vor Verpassen und schneller Rückkehr verändern nicht den bekannten Preisstand.",
    "paragraphs": [
      "Nach einem heftigen Gegenstoß kann Nora vorschnell den ganzen alten Trend für beendet halten. Steigt der Kurs danach rasch zurück, kann ebenso schnell die Angst entstehen, eine Fortsetzung zu verpassen.",
      "Diese Gefühle erklären keine Kursrichtung. Nora nennt den aktuellen Befund, die nächste Schwelle und den verbleibenden Zielweg. Ein späteres Hinterherspringen ist ein neuer Plan und braucht eine neue Rechnung.",
      "Sie wartet nicht nur auf ein beruhigendes Uhrsignal. Wenn Ausführung, Schutz oder Reststrecke unklar sind, darf sie den Versuch auslassen. Weder Panik noch eine schnelle Erholung erfordern eine sofortige Order."
    ],
    "prompt": "Was hilft nach einer überraschenden Gegenbewegung?",
    "answers": [
      "Den aktuellen Preisplan neu prüfen statt aus Angst vor Verpassen zu handeln.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Emotion, beobachteten Zustand und konkrete Regel getrennt festhalten.",
    "diagram": "par15-late-signal"
  },
  {
    "title": "Ein weiteres Fenster verlangt dieselbe Prüfung",
    "summary": "10:30 oder ein später Abschnitt ist keine automatische Wiederholung des ersten Falls.",
    "paragraphs": [
      "In unserer Lernplanung können weitere Beobachtungszeiten stehen, etwa ein eigener fiktiver Termin um 10:30. Derselbe Ablauf bleibt nötig: Zeitzone, bekannter Termin, vorheriger Zustand, neue Reaktion und Anschluss.",
      "Die Reaktion vom ersten Fenster liefert keine feste Richtung für das nächste. Dazwischen kann aus einem Trend eine Range oder aus einer Range ein stärkerer Schub geworden sein.",
      "Nora behandelt jeden neuen Zeitpunkt mit dem dann verfügbaren Wissen. Ein starres Schema zu festen Minuten würde genau die Kontextänderung übersehen, die dieses Kapitel üben soll."
    ],
    "prompt": "Legt die Richtung des 10:00-Falls schon das nächste 10:30-Fenster fest?",
    "answers": [
      "Nein, der dann aktuelle Kontext und neue Anschluss müssen geprüft werden.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Jedes Fenster mit eigenem Informationsstand beurteilen.",
    "diagram": "par15-morning-pre"
  },
  {
    "title": "Den Tagesverlauf ohne Kausalgeschichte zusammenfassen",
    "summary": "Zeit, Kontext, Preisereignis, Anschluss und offenes Risiko gehören in getrennte Aussagen.",
    "paragraphs": [
      "Nora formuliert nach Abschluss der Kerze 14:45: Im Nachmittagsfall gab es einen Aufwärtsschub, zwei EMA-Besuche, einen tiefen Gegenstoß und einen zweiten ähnlichen Tiefbesuch. Das neue Signalhoch 106 ist jetzt bekannt.",
      "Dann ergänzt sie einen möglichen Plan bei 106,1, Schutz 104,5 und eine gerechnete Menge. Ob der Kurs danach zurück zum alten Hoch läuft oder tiefer fällt, bleibt offen.",
      "Sie schreibt nicht, dass eine Institution den Markt zwingend absichtlich bewegt habe oder eine bestimmte Minute einen Gewinn garantiere. Eine präzise Beobachtung reicht; unbekannte Ursachen dürfen unbekannt bleiben."
    ],
    "prompt": "Welche Zusammenfassung ist nach dem zweiten Signal richtig?",
    "answers": [
      "Bekannter Zeit- und Preiskontext plus eigener Plan, bei offenem späterem Ausgang.",
      "Die Uhrzeit garantiert die nächste Richtung.",
      "Die spätere Kerze war schon vorher bekannt."
    ],
    "rule": "Beobachtung, mögliche Erklärung und Handelsentscheidung getrennt halten.",
    "diagram": "par15-late-signal"
  }
]);
for(const lesson of rangesChapterFifteenLessons) for(const step of lesson.steps) if(step.type==='diagram') step.caption='Erfundene Fünf-Minuten-Kurse · Grunddatum 04.02.2026 · America/New_York · Kerzen tragen Startzeiten und sind erst nach Ende bekannt. Zeitumrechnungen und Folgetag sind gesondert bezeichnet; Termine sind fiktiv.';
for(const lesson of rangesChapterFifteenLessons) for(const step of lesson.steps) if(step.type==='diagram'){ if(step.scenario==='par15-clock'||step.scenario==='par15-dst')step.caption='Datierte Zeitzonenumrechnung für 2026 · keine Kursdaten und keine realen Veröffentlichungstermine.'; if(step.scenario==='par15-next-day')step.caption='Erfundene Fünf-Minuten-Kurse · separater Folgetag 05.02.2026 · America/New_York · Startzeiten auf Achse · abgeschlossener Vortagskontext gesondert vorgegeben.'; }
