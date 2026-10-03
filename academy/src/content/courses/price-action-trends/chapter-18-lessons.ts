import type { ChapterEighteenScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterEighteenScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Trend handeln: Richtung wählen, Verlust begrenzen",
    "summary": "Trendkontrolle ist Kontext, noch kein vollständiger Auftrag.",
    "section": "Grundidee",
    "scenario": "c18-01",
    "paragraphs": [
      "Ein gerichteter Markt bietet viele mögliche Einstiege. Im Bullenverlauf liegt der Schwerpunkt dieser Übung auf Käufen mit der bestehenden Kontrolle, im Bärenverlauf auf Verkäufen. Flat heißt, keine Position zu halten; auch das ist eine bewusste Wahl.",
      "Die Trendlesart allein sagt noch nicht, welchen Preis du handelst, wo die Idee scheitert oder wie groß die Position sein darf. Ein kleiner Markteinstieg ist eine mögliche Vorgehensweise erfahrener Trader, aber keine Pflicht, jeden erkennbaren Trend sofort zu handeln.",
      "Halte zuerst Richtung, Verlustgrenze und geplanten Umgang mit der Position fest. Ist der Preis zu weit vom sinnvollen Schutz entfernt oder kannst du den Ablauf nicht sicher ausführen, darf die Übung ohne Einstieg enden."
    ],
    "callout": "Die Trendlesart ersetzt keinen Verlustplan.",
    "takeaways": [
      "Mit der größeren Kontrolle planen.",
      "Flat bleibt eine vollständige Entscheidung.",
      "Trendlesart ersetzt keinen Verlustplan."
    ],
    "prompt": "Was fehlt bei der Aussage „Der Trend ist aufwärts“ noch?",
    "answers": [
      {
        "label": "Einstieg, Verlustgrenze, Positionsgröße und Management.",
        "explanation": "Richtig. Die Richtung ist nur ein Teil des Plans."
      },
      {
        "label": "Nur eine größere Bildschirmauflösung.",
        "explanation": "Die verändert das Risiko und die Preisstruktur nicht."
      },
      {
        "label": "Nichts; jede Kauforder ist damit sicher.",
        "explanation": "Auch im Trend können einzelne Einstiege verlieren."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Stop, Limit und Market: drei verschiedene Einstiegswege",
    "summary": "Bestätigung, Preisangebot und sofortige Ausführung unterscheiden.",
    "section": "Orderlogik",
    "scenario": "c18-02",
    "paragraphs": [
      "Eine Buy-Stop-Order über einem Signalhoch wartet auf einen Aufwärtsdurchbruch. Eine Buy-Limit-Order unter dem aktuellen Kurs wartet auf einen Rücklauf zu deinem angebotenen Preis. Eine Market-Order sucht eine sofortige Ausführung am dann verfügbaren Marktpreis.",
      "Für Shorts wird die Logik gespiegelt: Sell Stop unter einem Signaltief, Sell Limit über dem aktuellen Kurs. Ein Einstieg per Stop ist nicht dasselbe wie ein Schutzstop. Die eine Order eröffnet eine Position, die andere soll den Verlust einer bestehenden Position begrenzen.",
      "Ein Limit kann ungefüllt bleiben, eine Stop-Auslösung kann bei schnellen Bewegungen ungünstiger ausgeführt werden, und eine Market-Order legt keinen exakten Preis fest. Entscheide vorab, welcher Weg zu deinem konkreten Setup passt."
    ],
    "callout": "Auslösung und tatsächlicher Ausführungspreis können abweichen.",
    "takeaways": [
      "Einstiegsstop und Schutzstop trennen.",
      "Limit verlangt einen Preisbesuch, keine Umkehrbestätigung.",
      "Auslösung und tatsächlicher Ausführungspreis können abweichen."
    ],
    "prompt": "Welche Order wartet beim Kauf auf einen Rücklauf unter den aktuellen Kurs?",
    "answers": [
      {
        "label": "Eine Market-Order mit garantiertem Festpreis.",
        "explanation": "Eine Market-Order garantiert keinen Festpreis."
      },
      {
        "label": "Eine Buy-Limit-Order.",
        "explanation": "Richtig. Sie bietet einen Preis für den Rücklauf an."
      },
      {
        "label": "Eine Buy-Stop-Order über dem Signalhoch.",
        "explanation": "Diese wartet auf einen Aufwärtsdurchbruch."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "High 2 und Low 2 am Durchschnitt",
    "summary": "Zwei getrennte Versuche mit der Trendrichtung prüfen.",
    "section": "Einstieg mit Stop",
    "scenario": "c18-03",
    "paragraphs": [
      "Im Bullenpullback kann ein erster Aufwärtsversuch stocken. Nach einem erneuten Rücklauf folgt eine zweite Auslösung nach oben: High 2. Im Bärenpullback beschreibt Low 2 die entsprechende zweite Auslösung nach unten.",
      "Der gleitende Durchschnitt ergänzt den Ort des Pullbacks. Er macht nicht jeden zweiten Bar zum zweiten Versuch. Zwischen den Versuchen muss eine unterscheidbare Gegenbewegung liegen; den größeren Trendkontext liest du dabei mit.",
      "Eine Stop-Order über dem Käufer-Signal beziehungsweise unter dem Verkäufer-Signal wartet auf diese erneute Richtung. Die Auslösung garantiert keinen Anschluss. Den Schutz leitest du vorher aus dem geplanten Strukturbruch ab."
    ],
    "callout": "Die Auslösung bleibt vom weiteren Anschluss getrennt.",
    "takeaways": [
      "Versuche durch Gegenbewegungen trennen.",
      "Durchschnitt ist ein Kontextmerkmal.",
      "Auslösung bleibt von weiterem Anschluss getrennt."
    ],
    "prompt": "Was ist für eine High-2-Zählung nötig?",
    "answers": [
      {
        "label": "Genau zwei grüne Bars irgendwo im Chart.",
        "explanation": "Farbe allein zählt keine strukturierten Versuche."
      },
      {
        "label": "Eine Berührung des Durchschnitts ohne weitere Bars.",
        "explanation": "Sie liefert noch keine zweite Auslösung."
      },
      {
        "label": "Ein erster Aufwärtsversuch, ein neuer Rücklauf und eine zweite Auslösung.",
        "explanation": "Richtig. Die Reihenfolge bildet die Struktur."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Keilflaggen: drei Schübe gegen den Trend",
    "summary": "Keilartige Rückläufe in beiden Richtungen lesen.",
    "section": "Einstieg mit Stop",
    "scenario": "c18-04",
    "paragraphs": [
      "Ein Bullenpullback kann drei Abwärtsversuche enthalten. Eine neue Käuferreaktion nach dem dritten Versuch bereitet eine mögliche Keil-Bullenflagge vor. Im Bärenverlauf liegt die gespiegelte Idee in drei Aufwärtsschüben des Rücklaufs.",
      "Eine perfekte Dreiecksform ist nicht erforderlich. Zähl nachvollziehbare Schübe mit Zwischenreaktionen und benenne die betrachtete Größe. Drei einzelne rote oder grüne Bars können auch nur ein einziger Schub sein.",
      "Die Stop-Auslösung erfolgt mit dem größeren Trend nach dem Signal, nicht automatisch am dritten Extrem. Arbeitet der Rücklauf kräftig gegen den Trend weiter, ist die Flaggenidee geschwächt."
    ],
    "callout": "Weiterer Gegenanschluss kann die Idee widerlegen.",
    "takeaways": [
      "Drei Schübe sind mehr als drei Kerzenfarben.",
      "Mit der größeren Trendrichtung auslösen lassen.",
      "Weiterer Gegenanschluss kann die Idee widerlegen."
    ],
    "prompt": "In welche Richtung wird die Bullenflagge hier geprüft?",
    "answers": [
      {
        "label": "Nach oben, mit dem größeren Bullenverlauf.",
        "explanation": "Richtig. Die fallenden Schübe bilden den Pullback."
      },
      {
        "label": "Zwingend nach unten, weil drei Tiefs sichtbar sind.",
        "explanation": "Die Tiefserie allein bestimmt nicht den größeren Kontext."
      },
      {
        "label": "Ohne Signal sofort am endgültigen Tief.",
        "explanation": "Dieses Tief ist vorher nicht bekannt."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Ausbruchspullback nach der Flagge",
    "summary": "Nach dem ersten Ausbruch einen erneuten Test beurteilen.",
    "section": "Einstieg mit Stop",
    "scenario": "c18-05",
    "paragraphs": [
      "Eine Flagge kann mit einem kräftigen Trendbar verlassen werden. Anschließend prüft ein kleiner Rücklauf den Ausbruchsbereich. Übernimmt die Trendseite dort wieder, entsteht eine zweite Möglichkeit, die Fortsetzung zu beurteilen.",
      "Der spätere Pullback ist eine eigene Struktur. Auslöser, Schutz und Zielraum prüfst du vom aktuellen Preis aus. Dass der erste Ausbruch schon gut aussah, macht die neue Order nicht verlustfrei.",
      "In den Bildern liegen Flagge, erster Ausbruch und nachfolgender Test nacheinander. Eine deutliche Rückkehr durch den ganzen Flaggenbereich widerspricht der Erwartung eines kleinen haltenden Pullbacks."
    ],
    "callout": "Eine tiefe Rückkehr schwächt die Fortsetzung.",
    "takeaways": [
      "Erster Ausbruch und späterer Test unterscheiden.",
      "Neue Order vom aktuellen Preis aus planen.",
      "Tiefe Rückkehr schwächt die Fortsetzung."
    ],
    "prompt": "Was wird beim Ausbruchspullback erneut geprüft?",
    "answers": [
      {
        "label": "Ob alte Verluste durch doppelte Menge verschwinden.",
        "explanation": "Menge verändert das Risiko, nicht die Struktur."
      },
      {
        "label": "Ob die Trendseite am Ausbruchsbereich wieder Anschluss findet.",
        "explanation": "Richtig. Der kleine Rücklauf ist die neue Beobachtung."
      },
      {
        "label": "Ob der erste Gewinn jede spätere Order absichert.",
        "explanation": "Ein früherer Gewinn garantiert den nächsten Trade nicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "High 1 im Spike: Stärke und späte Beschleunigung trennen",
    "summary": "Der erste kleine Rücklauf hat je nach Phase anderes Gewicht.",
    "section": "Einstieg mit Stop",
    "scenario": "c18-06",
    "paragraphs": [
      "In einem frischen starken Bullen-Spike kann die erste kleine Pause schnell wieder gekauft werden. Eine High-1-Auslösung ist dann der erste Aufwärtsversuch nach dem Rücklauf. Im Bären-Spike wird das als Low 1 gespiegelt.",
      "Nach einer bereits langen Folge mit auffälliger Beschleunigung kann dieselbe kleine Pause vor einer größeren Korrektur liegen. Ein möglicher Kauf- oder Verkaufsklimax verändert deshalb die Prüfung. Frische Stärke und späte Überdehnung sind verschiedene Kontexte.",
      "Vergleiche den neuen Schub mit den vorherigen Bars und der Länge der Bewegung. Ein erstes Signal ist weder grundsätzlich schlecht noch grundsätzlich gut. Es braucht eine passende Phase und ein vorab begrenztes Risiko."
    ],
    "callout": "Die Phase gehört zum Setup.",
    "takeaways": [
      "Erster Rücklauf im frischen Spike anders als nach langer Beschleunigung.",
      "High 1 und Low 1 spiegeln dieselbe Versuchsidee.",
      "Die Phase gehört zum Setup."
    ],
    "prompt": "Was schwächt die einfache High-1-Fortsetzungsidee?",
    "answers": [
      {
        "label": "Dass überhaupt ein erster Pullback entsteht.",
        "explanation": "Dieser ist gerade Voraussetzung der Versuchszählung."
      },
      {
        "label": "Nur die Bezeichnung High 1.",
        "explanation": "Der Name entscheidet ohne Kontext nicht."
      },
      {
        "label": "Eine bereits reife Bewegung mit auffälliger später Beschleunigung.",
        "explanation": "Richtig. Eine größere Pause wird dann plausibler."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Stop über Swinghoch: Trendstärke zuerst",
    "summary": "Neue Extreme können Einstieg oder Gewinnbereich sein.",
    "section": "Einstieg mit Stop",
    "scenario": "c18-07",
    "paragraphs": [
      "Bei ausgeprägter Käuferkontrolle kann eine Stop-Order über einem früheren Swinghoch einen weiteren Ausbruch handeln. Im Bärenfall spiegelt sich das als Verkaufsstop unter dem alten Swingtief. Bei dieser Vorgehensweise kaufst beziehungsweise verkaufst du erst nach dem Durchbruch.",
      "Ein Pullback-Einstieg liegt oft näher an einem sinnvollen Strukturstop, verlangt dafür aber die Entscheidung während einer Gegenbewegung. Der Ausbruchseinstieg wartet länger und kann einen größeren Preisabstand zum Schutz haben.",
      "Wird der Markt später deutlich zweiseitig, werden alte Hochs zunehmend auch für Gewinnmitnahmen oder Gegenversuche genutzt. Nimm deshalb nicht blind denselben Ausbruchsauftrag in jeder Tagesphase."
    ],
    "callout": "Die Rolle alter Extreme kann sich verändern.",
    "takeaways": [
      "Swingdurchbruch nur mit passendem Kontext prüfen.",
      "Spätere Auslösung kann weiter vom Schutz liegen.",
      "Rolle alter Extreme kann sich verändern."
    ],
    "prompt": "Warum reicht das alte Swinghoch allein nicht für den Kaufstop?",
    "answers": [
      {
        "label": "Weil Trendstärke und Tagesphase die Bedeutung des Durchbruchs verändern.",
        "explanation": "Richtig. Eine Range verhält sich anders als eine starke gerichtete Folge."
      },
      {
        "label": "Weil horizontale Preise grundsätzlich bedeutungslos sind.",
        "explanation": "Sie können einen wichtigen Prüfbereich liefern."
      },
      {
        "label": "Weil jeder Ausbruch genau gleich viel Risiko hat.",
        "explanation": "Preisabstand und Ausführung können unterschiedlich sein."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Market im Spike: Preisabstand und Menge zusammen ändern",
    "summary": "Schnelle Stärke kann einen weit entfernten Schutz verlangen.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-08",
    "paragraphs": [
      "Erfahrene Trader können einen starken Spike während der Bewegung oder am Schluss eines gerichteten Bars handeln. Der Kurs läuft schnell; ein sinnvoller Schutzbereich kann am Anfang des Spikes liegen und damit weit vom aktuellen Preis entfernt sein.",
      "Ein dreimal größerer Preisabstand bedeutet bei gleichem Wert pro Einheit ungefähr dreimal mehr Verlust pro Stück oder Kontrakt. Um das geplante Geldrisiko gleich zu halten, muss die Menge entsprechend kleiner werden.",
      "Kannst du diese Anpassung unter Zeitdruck nicht zuverlässig rechnen und ausführen, ist Warten zulässig. Ein starker Chart rechtfertigt keine Order mit ungeprüfter Größe. Die spätere Rückkehr kann den ganzen Spike testen."
    ],
    "callout": "Wenn die Geschwindigkeit nicht beherrschbar ist, darfst du abwarten.",
    "takeaways": [
      "Spike-Einstiege verlangen schnelle Planung.",
      "Weiterer Schutz benötigt kleinere Menge bei gleichem Geldbudget.",
      "Nicht beherrschbare Geschwindigkeit erlaubt Abwarten."
    ],
    "prompt": "Wie verändert sich die rechnerische Menge bei dreifachem Schutzabstand und gleichem Budget?",
    "answers": [
      {
        "label": "Sie bleibt unabhängig vom Abstand gleich.",
        "explanation": "Dann steigt das Geldrisiko mit dem Abstand."
      },
      {
        "label": "Sie sinkt auf etwa ein Drittel.",
        "explanation": "Richtig. Das gilt bei unverändertem Wert pro Preiseinheit vor Kosten."
      },
      {
        "label": "Sie wird verdreifacht.",
        "explanation": "Damit würde der geplante Verlust stark steigen."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Limit am Vorbar und erster Gegenbar im Spike",
    "summary": "Eine Order kann vor der sichtbaren Trendreaktion ausgeführt werden.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-09",
    "paragraphs": [
      "Eine Kauf-Limit-Order am oder unter dem Tief des vorherigen Bars kann einen kleinen Rücklauf in einer starken Käuferfolge handeln. Eine andere erfahrene Variante kauft am Schluss des ersten Verkäuferbars im Bullen-Spike. Im Bären-Spike wird beides gespiegelt.",
      "Diese Einstiege warten nicht auf einen späteren Durchbruch mit dem Trend. Die Position kann deshalb schon bestehen, während der Kurs noch gegen sie läuft. Ein erster Gegenbar kann klein bleiben oder eine größere Pause beginnen.",
      "Benenne im Replay, ob du nur ein Preisangebot, einen Gegenbar-Schluss oder eine bestätigte Trendreaktion verwendest. Das sind verschiedene Entscheidungen. Eine nicht gefüllte Limit-Order ist kein Fehler, den du durch blindes Hinterherlaufen ausgleichen müsstest."
    ],
    "callout": "Nicht gefüllt ist ein möglicher Ausgang.",
    "takeaways": [
      "Limit und Gegenbar-Schluss können vor Bestätigung liegen.",
      "Spiegelung gilt für den Bärenfall.",
      "Nicht gefüllt ist ein möglicher Ausgang."
    ],
    "prompt": "Was unterscheidet den Limit-Einstieg von der Stop-Bestätigung?",
    "answers": [
      {
        "label": "Das Limit garantiert die nächste Trendkerze.",
        "explanation": "Eine Preisberührung garantiert keine Reaktion."
      },
      {
        "label": "Ein Limit kann niemals ungefüllt bleiben.",
        "explanation": "Ein nicht besuchter Preis kann ungefüllt bleiben."
      },
      {
        "label": "Die Limit-Position kann schon während der Gegenbewegung entstehen.",
        "explanation": "Richtig. Sie wartet nicht auf die spätere Trendauslösung."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Trendlinie und alter Swing als Limitbereich",
    "summary": "Preisnähe ist nicht dasselbe wie ein sicherer Wendepunkt.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-10",
    "paragraphs": [
      "Ein Bullenpullback kann an die steigende Trendlinie oder in den Bereich eines älteren Swingtiefs laufen. Dort lässt sich eine mögliche Doppeltief-Bullenflagge prüfen. Im Bärenverlauf dienen fallende Trendlinie und altes Swinghoch als gespiegelte Referenzen.",
      "Ein Limitangebot an dieser Stelle setzt auf eine Reaktion, bevor sie vollständig sichtbar ist. Der Preis kann durch die Linie und das alte Extrem weiterlaufen. Der Schutz muss deshalb schon vor dem Test zu dieser frühen Einstiegsart passen.",
      "Die geneigte Linie und der horizontale Swingpreis beschreiben verschiedene Eigenschaften. Liegen beide nah beieinander, entsteht ein gemeinsamer Prüfbereich, aber keine automatische Vervielfachung der Erfolgschance."
    ],
    "callout": "Ein gemeinsamer Bereich ist keine Garantie.",
    "takeaways": [
      "Trendlinie und Swingpreis haben verschiedene Rollen.",
      "Frühes Limit braucht passenden Schutzplan.",
      "Gemeinsamer Bereich ist keine Garantie."
    ],
    "prompt": "Was muss vor einem Limit am alten Swing feststehen?",
    "answers": [
      {
        "label": "Wie viel Gegenbewegung die Idee verträgt und welcher Verlust daraus folgt.",
        "explanation": "Richtig. Der frühe Einstieg besitzt noch keine bestätigte Reaktion."
      },
      {
        "label": "Dass der Preis nie einen Tick weiterläuft.",
        "explanation": "Das ist nicht gewährleistet."
      },
      {
        "label": "Nur die Farbe der gezeichneten Linie.",
        "explanation": "Sie verändert den Preisverlauf nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Schwaches Gegensignal im neuen Trend",
    "summary": "Lokale Versuchsnamen und größere Kontrolle auseinanderhalten.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-11",
    "paragraphs": [
      "Nach einer kräftigen Aufwärtsumkehr kann ein schwaches Low-1- oder Low-2-Verkaufssignal auftreten. Erfahrene Käufer prüfen dann ein Limit am oder unter diesem Signal, wenn sie das lokale Verkaufssignal eher als scheiternden Gegenversuch lesen.",
      "Nach einer starken Abwärtsumkehr gilt die Gegenidee für ein schwaches High-1- oder High-2-Kaufsignal. Auch der Rand einer Range kann eine Rolle spielen. Entscheidend ist der Ort; im starken alten Trend würdest du denselben Gegenplan anders bewerten.",
      "Ein schwacher Signalbar ist noch kein bewiesener Fehlschlag. Beschreib größere Umkehr, lokales Gegensignal und spätere Reaktion einzeln. Kauf oder verkauf nicht allein, weil das Signal der anderen Seite klein aussieht."
    ],
    "callout": "Ein schwacher Bar ist noch kein bestätigter Fehlschlag.",
    "takeaways": [
      "Gegensignal im größeren Kontext beurteilen.",
      "Neue Trendrichtung muss durch Stärke begründet sein.",
      "Schwacher Bar ist noch kein bestätigter Fehlschlag."
    ],
    "prompt": "Warum kann ein lokales Verkaufssignal nach starker Aufwärtsumkehr anders bewertet werden?",
    "answers": [
      {
        "label": "Weil kleine Bars keine Verluste verursachen können.",
        "explanation": "Der folgende Verlauf kann trotzdem weit gegen die Position laufen."
      },
      {
        "label": "Weil es gegen die neue größere Käuferkontrolle arbeitet.",
        "explanation": "Richtig. Lokales Signal und größere Richtung sind getrennte Ebenen."
      },
      {
        "label": "Weil Low 2 immer einen Kauf bezeichnet.",
        "explanation": "Low 2 zählt eine lokale Abwärtsauslösung."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Ruhige Flagge am Durchschnitt",
    "summary": "Kleine Bars senken nicht automatisch das Gesamtrisiko.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-12",
    "paragraphs": [
      "Eine ruhige Bullenflagge am Durchschnitt kann ein Limit am oder unter dem vorherigen Bartief anbieten. In der Bärenflagge liegt das gespiegelte Angebot am oder über dem Vorbarhoch. Die geringe Bargröße macht das Tempo leichter beobachtbar.",
      "Die Flagge kann sich trotzdem verbreitern oder in eine Range übergehen. Ein enger lokaler Barstop und ein weiter Strukturstop sind unterschiedliche Pläne. Such den Schutz nicht erst nach einer ungünstigen Ausführung aus.",
      "Prüf auch den Platz bis zur nächsten Grenze. Kleine Bars bedeuten oft engen Zielraum. Geht der erwartete Gewinn kaum über Kosten und Ausführungsabweichungen hinaus, löst die ruhige Optik dieses Problem nicht."
    ],
    "callout": "Kleine Bars können auch kleinen Zielraum bedeuten.",
    "takeaways": [
      "Ruhiger Ablauf kann Entscheidungen erleichtern.",
      "Barstop und Strukturstop vorher unterscheiden.",
      "Kleine Bars können auch kleinen Zielraum bedeuten."
    ],
    "prompt": "Warum reicht eine ruhige Flagge allein nicht?",
    "answers": [
      {
        "label": "Weil ruhige Bars grundsätzlich keinen Trend begleiten können.",
        "explanation": "Sie können zu einer Trendflagge gehören."
      },
      {
        "label": "Weil kleine Bars automatisch jede Limit-Order füllen.",
        "explanation": "Auch kleine Bars müssen den Preis tatsächlich besuchen."
      },
      {
        "label": "Weil Schutzabstand, Zielraum und Kosten weiterhin geprüft werden müssen.",
        "explanation": "Richtig. Das ruhige Tempo ersetzt die Rechnung nicht."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Limit nach dem Ausbruchsbar: Pullback vorwegnehmen",
    "summary": "Frühes Preisangebot und spätere Bestätigung trennen.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-13",
    "paragraphs": [
      "Nach einem Käuferbar über einer Bullenflagge kann ein Limit unter diesem Bar einen Rücklauf zum Ausbruch kaufen. Nach dem Verkäuferausbruch unter einer Bärenflagge liegt das gespiegelte Angebot darüber.",
      "Das Angebot nimmt einen haltenden Ausbruchspullback vorweg. Eine Stop-Order nach einem späteren Signal würde dagegen erst die erneute Trendreaktion handeln. Beide Wege können zu verschiedenen Ausführungen und verschiedenen sinnvollen Schutzabständen führen.",
      "Wird der Ausbruchsbar vollständig zurückgenommen und entsteht Gegenanschluss, passt das nicht mehr zur einfachen kleinen Pullback-Erwartung. Eine frühe Ausführung darfst du dann nicht mit immer neuen nachträglichen Begründungen halten."
    ],
    "callout": "Eine starke Rücknahme kann die frühe Idee widerlegen.",
    "takeaways": [
      "Limit antizipiert den späteren Test.",
      "Stop-Bestätigung wartet länger.",
      "Starke Rücknahme kann die frühe Idee widerlegen."
    ],
    "prompt": "Welche Information hat das frühe Limit noch nicht?",
    "answers": [
      {
        "label": "Die spätere bestätigte Trendreaktion im Pullback.",
        "explanation": "Richtig. Genau diese wird mit dem Preisangebot erst erwartet."
      },
      {
        "label": "Dass schon ein Ausbruchsbar sichtbar ist.",
        "explanation": "Das ist die Voraussetzung des Angebots."
      },
      {
        "label": "Den angebotenen Limitpreis.",
        "explanation": "Dieser muss vor der Order festgelegt sein."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Rücktest des Einstiegs: Breakeven ist ein Preis",
    "summary": "Ein Rücklauf kann frühe Schutzorders treffen und dann fortsetzen.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-14",
    "paragraphs": [
      "Nach einem Ausbruch kann ein Rücklauf den ursprünglichen Einstieg erneut besuchen. Wer den Schutz sofort auf diesen Preis gezogen hat, kann ausgestoppt werden, obwohl die größere Trendstruktur noch hält.",
      "Erfahrene Trader können einen solchen Ausbruchstest für einen neuen Einstieg oder eine geplante Ergänzung prüfen. Der alte Einstieg ist dabei nur eine Referenz; er macht die neue Position nicht sicher. Kosten sorgen außerdem dafür, dass eine Ausführung am Einstandspreis nicht zwingend netto null ergibt.",
      "Benenne den Unterschied zwischen persönlichem Einstiegspreis und struktureller Verlustgrenze. Eine Ergänzung braucht ein gemeinsames Geldbudget. Einen alten ausgestoppten Trade darfst du nicht unbemerkt durch einen ungeprüften größeren Trade ersetzen."
    ],
    "callout": "Breakeven vor Kosten ist nicht zwingend netto null.",
    "takeaways": [
      "Persönlicher Einstand ist kein automatischer Strukturpunkt.",
      "Test kann eine neue Prüfung ermöglichen.",
      "Breakeven vor Kosten ist nicht zwingend netto null."
    ],
    "prompt": "Warum kann ein sehr früher Breakeven-Stop ausgelöst werden?",
    "answers": [
      {
        "label": "Weil ein Einstandspreis immer die endgültige Trendgrenze ist.",
        "explanation": "Persönlicher Einstieg und Marktstruktur sind verschieden."
      },
      {
        "label": "Weil ein normaler Ausbruchstest noch einmal den Einstiegspreis besucht.",
        "explanation": "Richtig. Die größere Struktur kann dabei weiterhin bestehen."
      },
      {
        "label": "Weil Schutzorders den Markt garantiert umkehren.",
        "explanation": "Das lässt sich daraus nicht ableiten."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Fester Rücklaufabstand aus der bisherigen Bewegung",
    "summary": "Ticks und Punkte nur im konkreten Markt einordnen.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-15",
    "paragraphs": [
      "Ein Preisangebot kann sich an der Größe bisheriger Pullbacks orientieren. Waren die letzten Rückgaben im synthetischen Beispiel etwa acht Einheiten groß, ist ein Angebot nach sechs bis acht Einheiten eine überprüfbare Hypothese statt einer beliebigen Zahl.",
      "Im Bärenfall spiegelt sich diese Idee als Abstand nach oben. Die frühere größte Rückgabe ist kein Grenzwert für alle späteren Rückläufe. Schwankungsbreite und Tagesphase können sich verändern.",
      "Übertrage historische Punkt- oder Centabstände nicht als heutige Standardwerte auf einen anderen Markt. Notier die aktuellen Bars, die Einheit, den Zielraum und die Stelle, an der die Trendidee für deinen Plan scheitert."
    ],
    "callout": "Einheit und aktuelle Schwankung gehören zur Zahl.",
    "takeaways": [
      "Rücklaufabstand mit bisherigen Bewegungen vergleichen.",
      "Frühere Größe ist keine spätere Obergrenze.",
      "Einheit und aktuelle Schwankung gehören zur Zahl."
    ],
    "prompt": "Was bedeutet eine bisher größte Rückgabe von acht Einheiten?",
    "answers": [
      {
        "label": "Der nächste Rücklauf darf mathematisch nie größer sein.",
        "explanation": "Dafür gibt es keine Garantie."
      },
      {
        "label": "Acht Punkte gelten ab jetzt für jedes Instrument.",
        "explanation": "Die Einheit und das Instrument müssen getrennt geprüft werden."
      },
      {
        "label": "Sie liefert einen Vergleich, aber keine garantierte Grenze für den nächsten Pullback.",
        "explanation": "Richtig. Die Marktphase kann sich verändern."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Staffeln gegen den Verlauf: Gesamtbudget zuerst",
    "summary": "Mehrere Einstiege teilen eine vorher begrenzte Verlustsumme.",
    "section": "Positionsgröße",
    "scenario": "c18-16",
    "paragraphs": [
      "Eine erste Longtranche kann im Pullback entstehen, eine zweite tiefer. Der mittlere Einstieg verbessert sich dadurch rechnerisch. Gleichzeitig wächst die Menge; ein besserer Durchschnitt heißt deshalb nicht automatisch weniger Geldrisiko.",
      "Im Lernbeispiel werden zwei Einheiten bei 60 und zwei bei 56 gekauft, der gemeinsame Schutz liegt bei 50. Bei einem Geldwert von 1 pro Preiseinheit beträgt der geplante Verlust 2 × 10 plus 2 × 6, also 32 vor Kosten und Ausführungsabweichung.",
      "Beide Tranchen und der gemeinsame Schutz müssen vor dem ersten Einstieg im Budget liegen. Spontan nachzukaufen, um einen Verlust schneller auszugleichen, ist ein anderer, ungeplanter Ablauf. Auch ein Exit am ersten Preis 60 wäre für den gesamten Korb nicht bloß Breakeven."
    ],
    "callout": "Nachkaufen ist keine automatische Risikoreduktion.",
    "takeaways": [
      "Durchschnittspreis und Gesamtrisiko getrennt rechnen.",
      "Alle Tranchen vor der ersten Order budgetieren.",
      "Nachkaufen ist keine automatische Risikoreduktion."
    ],
    "prompt": "Wie groß ist der geplante Verlust der vier Einheiten bis 50?",
    "answers": [
      {
        "label": "32 Geldeinheiten vor Kosten.",
        "explanation": "Richtig. Zwei Einheiten riskieren je 10, zwei weitere je 6."
      },
      {
        "label": "Nur 8, weil der Durchschnitt besser wurde.",
        "explanation": "Damit wird die gewachsene Menge übersehen."
      },
      {
        "label": "Null, weil es zwei Kaufpreise gibt.",
        "explanation": "Beide Tranchen können bis zum gemeinsamen Schutz verlieren."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Lange Trennung vom Durchschnitt: erster Test",
    "summary": "Ein Durchschnittskontakt braucht seine Vorgeschichte.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-17",
    "paragraphs": [
      "Bleiben zwanzig oder mehr Bars vollständig auf einer Seite des Durchschnitts, zeigt das einen lange gerichteten Abschnitt. Der spätere erste Test kann für einen Trendpullback interessant sein. Im Bullenfall kommt der Preis von oben, im Bärenfall von unten.",
      "Ein Limit nahe dem Durchschnitt nimmt die Trendreaktion vorweg. Eine Staffelung weiter gegen den Verlauf braucht dieselbe vorab begrenzte Gesamtrechnung wie jede andere Ergänzung. Die Zahl zwanzig liefert keine allgemeine Trefferquote.",
      "Ein späterer Test des alten Extrembereichs ist eine mögliche Folge, keine Pflicht des Marktes. Bei tieferer Rückgabe und schwachem Anschluss kann sich stattdessen eine Range entwickeln. Beide Ergebnisse gehören in die Übung."
    ],
    "callout": "Die Staffelung bleibt an das Gesamtbudget gebunden.",
    "takeaways": [
      "Lange Trennung ist ein Kontextmerkmal.",
      "Erster Test kann halten oder weiterlaufen.",
      "Staffelung bleibt an das Gesamtbudget gebunden."
    ],
    "prompt": "Was garantiert eine lange Folge ohne Durchschnittskontakt?",
    "answers": [
      {
        "label": "Dass nach zwanzig Bars jede Position verdoppelt werden muss.",
        "explanation": "Eine Barzahl bestimmt kein zulässiges Geldrisiko."
      },
      {
        "label": "Keine bestimmte Folge; sie beschreibt die gerichtete Vorgeschichte.",
        "explanation": "Richtig. Der neue Test muss trotzdem beurteilt werden."
      },
      {
        "label": "Dass jede Limit-Order am Durchschnitt gewinnt.",
        "explanation": "Der Preis kann weiter dagegen laufen."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Erster Gegenbar-Schluss jenseits des Durchschnitts",
    "summary": "Eine frühe erfahrene Variante ohne bestätigten Anschluss.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-18",
    "paragraphs": [
      "In einem starken Bullenverlauf kann der erste Verkäuferbar unter dem Durchschnitt schließen. Erfahrene Käufer prüfen manchmal schon diesen Schluss für einen Trendpullback. Im Bärenverlauf wird der erste Käuferbar-Schluss darüber gespiegelt.",
      "Der Schluss jenseits der Linie kann genauso gut den Beginn größerer Gegenstärke zeigen. Entscheidend sind Vorgeschichte und folgendes Verhalten. Ein kleiner Käufer-Insidebar nach dem Verkäuferbar wäre etwas anderes als mehrere große Verkäuferbars mit weiterem Anschluss.",
      "Vergleiche im Replay frühe Ausführung und spätere Bestätigung. Die frühe Variante braucht einen Schutz gegen die noch laufende Gegenbewegung. Die spätere Variante kann zu einem anderen Preis ausgelöst werden oder ungehandelt bleiben."
    ],
    "callout": "Folgebars können die Hypothese stützen oder widerlegen.",
    "takeaways": [
      "Erster Schluss jenseits der Linie beendet den Trend nicht automatisch.",
      "Frühe Variante benötigt passenden Schutz.",
      "Folgebars können die Hypothese stützen oder widerlegen."
    ],
    "prompt": "Was fehlt beim Kauf des ersten Verkäufer-Schlusses unter dem Durchschnitt?",
    "answers": [
      {
        "label": "Der Schluss des betrachteten Bars.",
        "explanation": "Die Variante verwendet gerade diesen abgeschlossenen Schluss."
      },
      {
        "label": "Jede Information über die Vorgeschichte.",
        "explanation": "Der starke vorherige Trend ist ihr wesentlicher Kontext."
      },
      {
        "label": "Eine bereits bestätigte spätere Käuferfortsetzung.",
        "explanation": "Richtig. Diese wird zu diesem Zeitpunkt erst erwartet."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Der Pullback ist lokal ein Gegentrend",
    "summary": "Kleine Swingausbrüche im größeren Trend einordnen.",
    "section": "Erfahrene Einstiege",
    "scenario": "c18-19",
    "paragraphs": [
      "Ein Bullenpullback kann lokal tiefere Hochs und Tiefs bilden. Ein weiterer Durchbruch unter ein kleines Pullbacktief passt lokal zum Bärenverlauf, kann im größeren Bullenverlauf aber ein scheiternder Gegenversuch sein.",
      "Erfahrene Käufer prüfen dort manchmal ein Limit. Im größeren Bärenverlauf gilt die Spiegelung für einen lokalen Aufwärtsausbruch im Pullback. Diese frühen Angebote setzen voraus, dass die größere Trendkontrolle noch plausibel ist.",
      "Bekommt der kleine Durchbruch große gerichtete Gegenbars und Anschluss, ist die einfache Fehlschlagthese geschwächt. Höher und tiefer brauchen deshalb immer einen benannten Bezugspunkt und eine benannte Größe."
    ],
    "callout": "Starker Gegenanschluss kann einen größeren Wechsel anzeigen.",
    "takeaways": [
      "Lokaler Gegentrend und größere Kontrolle unterscheiden.",
      "Kleiner Durchbruch kann scheitern.",
      "Starker Gegenanschluss kann einen größeren Wechsel anzeigen."
    ],
    "prompt": "Kann ein lokaler Abwärtsausbruch im Bullenpullback scheitern?",
    "answers": [
      {
        "label": "Ja, wenn die größere Käuferkontrolle weiter trägt und Käufer zurückkehren.",
        "explanation": "Richtig. Der lokale Durchbruch muss nicht zum großen Bärentrend werden."
      },
      {
        "label": "Nein, jeder kleine Tiefbruch dreht den ganzen Tag.",
        "explanation": "Das verwechselt die Strukturgrößen."
      },
      {
        "label": "Ja, daher braucht ein Limit keinen Schutz.",
        "explanation": "Der mögliche Fehlschlag ist nicht garantiert."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Spike und Kanal: verschiedene Schwierigkeiten",
    "summary": "Tempo und schwache Signale erschweren unterschiedliche Phasen.",
    "section": "Entscheidungspraxis",
    "scenario": "c18-20",
    "paragraphs": [
      "Der Spike bewegt sich schnell und kann einen weit entfernten Schutz verlangen. Der spätere Kanal läuft langsamer, enthält aber viele scheinbare Umkehrversuche und schwache Signale. Ein Trend kann deshalb erkennbar sein, während ein vertrauter Einstieg ausbleibt.",
      "Ein Signal am oberen Rand eines schwachen Bullenkanals kann ungünstig wirken, obwohl der Markt weiter steigt. Der große mögliche Verlauf und die Wahrscheinlichkeit des konkreten Einstiegs sind verschiedene Größen. Eine sichere Trefferquote lässt sich aus der Form nicht ablesen.",
      "Warte auf einen Ablauf, den du tatsächlich beherrschst. Einen Trend zu verpassen ist nicht automatisch ein Planfehler. Eine neue Methode solltest du zuerst im Replay prüfen, statt sie unter Druck mitten im laufenden Trade zu erfinden."
    ],
    "callout": "Ein verpasster Trend rechtfertigt keine ungeprüfte Methode.",
    "takeaways": [
      "Spike verlangt Tempo und Größenanpassung.",
      "Kanal kann viele schwache lokale Signale enthalten.",
      "Ein verpasster Trend rechtfertigt keine ungeprüfte Methode."
    ],
    "prompt": "Warum kann ein Trader trotz klarer Aufwärtsrichtung flat bleiben?",
    "answers": [
      {
        "label": "Weil er den nächsten Gewinn schon sicher kennt.",
        "explanation": "Die weitere Folge bleibt offen."
      },
      {
        "label": "Weil kein Einstieg nach seinem beherrschten Plan entsteht.",
        "explanation": "Richtig. Richtung und ausführbares Setup sind verschieden."
      },
      {
        "label": "Weil jedes schwache Signal den Trend endgültig beendet.",
        "explanation": "Ein Kanal kann trotz schwacher Signale fortlaufen."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Scalp oder Swing: den Plan nicht aus Frust wechseln",
    "summary": "Die Halteabsicht vor dem Einstieg festlegen.",
    "section": "Management",
    "scenario": "c18-21",
    "paragraphs": [
      "Ein Scalp zielt hier auf eine kurze begrenzte Bewegung, ein Swing auf einen größeren Abschnitt der Trendfolge. Die genaue Dauer hängt von Chart und Markt ab. Vor der Order steht fest, welcher dieser Wege und welche Teilgewinnregeln gelten.",
      "Nach mehreren Verlusten kann ein geplanter Swing aus Angst zu früh beendet werden. Umgekehrt kann ein geplanter Scalp nach einem verpassten großen Trend plötzlich länger gehalten werden, obwohl der ursprüngliche Zielbereich schon erreicht war.",
      "Beides verändert die tatsächlich gehandelten Gewinn- und Verlustgrößen. Neue Marktinformation kann eine begründete Anpassung auslösen; bloßer Ärger über den vorherigen Trade genügt nicht. Trenne im Protokoll Signaländerung und Gefühlsänderung."
    ],
    "callout": "Anpassungen brauchen neue beobachtbare Gründe.",
    "takeaways": [
      "Halteabsicht und Zielregeln vorab notieren.",
      "Frühere Ergebnisse dürfen den neuen Plan nicht heimlich ersetzen.",
      "Anpassungen brauchen neue beobachtbare Gründe."
    ],
    "prompt": "Welche Änderung ist besonders problematisch?",
    "answers": [
      {
        "label": "Vor der Order einen Swingplan mit Teilgewinn festlegen.",
        "explanation": "Das ist eine bewusste Planung."
      },
      {
        "label": "Nach klarer neuer Gegenstärke die Hypothese erneut prüfen.",
        "explanation": "Neue Information kann eine begründete Anpassung verlangen."
      },
      {
        "label": "Einen Scalp aus Ärger über den vorigen verpassten Trend ungeplant zum Swing machen.",
        "explanation": "Richtig. Die ursprüngliche Ausstiegsregel wird ohne neue Struktur ersetzt."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Erwartungswert: Gewinnabstand ersetzt keine Trefferquote",
    "summary": "Hypothetische Wahrscheinlichkeiten nur als Rechenannahmen verwenden.",
    "section": "Risikorechnung",
    "scenario": "c18-22",
    "paragraphs": [
      "Für eine einfache Modellrechnung multiplizierst du die angenommene Gewinnwahrscheinlichkeit mit dem möglichen Gewinn. Davon ziehst du die angenommene Verlustwahrscheinlichkeit mal Verlust ab. Gebühren und Ausführungsabweichungen kommen zusätzlich hinzu.",
      "Bei angenommener Wahrscheinlichkeit 0,5, Gewinn 2R und Verlust 1R ergibt das 0,5 × 2R − 0,5 × 1R = 0,5R vor Kosten. R steht hier für den ursprünglich geplanten Verlust. Diese Beispielwahrscheinlichkeit wurde nicht aus dem gezeichneten Chart gemessen.",
      "Ein kleines Ziel von 0,5R bei einem Verlust von 1R braucht ohne Kosten mehr als zwei Drittel Gewinntrades für einen positiven Modellwert. Eine hübsche Form beweist diese Quote nicht. Reale Auswertungen müssen tatsächliche Gewinne, Verluste und Kosten berücksichtigen."
    ],
    "callout": "Modellannahmen sind keine gemessene Trefferquote.",
    "takeaways": [
      "Preisabstand und Wahrscheinlichkeit getrennt behandeln.",
      "R bezeichnet das ursprüngliche geplante Risiko.",
      "Modellannahmen sind keine gemessene Trefferquote."
    ],
    "prompt": "Wie groß ist der Modellwert bei 50 Prozent, 2R Gewinn und 1R Verlust?",
    "answers": [
      {
        "label": "0,5R vor Kosten.",
        "explanation": "Richtig. 0,5 mal 2 minus 0,5 mal 1 ergibt 0,5."
      },
      {
        "label": "2R sicher pro Trade.",
        "explanation": "Das wäre der einzelne Gewinnfall, nicht der Erwartungswert."
      },
      {
        "label": "Eine belegte Quote für alle Trendcharts.",
        "explanation": "Die Wahrscheinlichkeit war nur eine Rechenannahme."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Teilgewinn bei 2R und Rest halten",
    "summary": "Eine einfache Regel schafft einen überprüfbaren Ablauf.",
    "section": "Management",
    "scenario": "c18-23",
    "paragraphs": [
      "Eine mögliche Swingregel verkauft die Hälfte bei einem Gewinn von 2R und hält den Rest bis zur geplanten Strukturänderung oder zum Sitzungsende. Andere Regeln sind möglich; entscheidend ist, dass die Variante vor dem Einstieg eindeutig ist.",
      "Bei vier Einheiten, Einstieg 40 und ursprünglichem Schutz 30 ist R pro Einheit 10. Werden zwei Einheiten bei 60 verkauft, ist deren realisierter Gewinn 40. Die zwei verbleibenden Einheiten sind weiterhin einer eigenen Kursfolge ausgesetzt.",
      "Ein Teilgewinn garantiert keinen positiven Gesamtausgang. Die Restposition braucht einen klaren Schutz- und Exitplan. Der ursprüngliche Risikomaßstab bleibt für die Auswertung erhalten, auch wenn der Stop später enger wird."
    ],
    "callout": "Das ursprüngliche R nicht nachträglich umdefinieren.",
    "takeaways": [
      "Teilgewinnregel vor der Order festlegen.",
      "Realisierter Gewinn und offener Rest getrennt führen.",
      "Ursprüngliches R nicht nachträglich umdefinieren."
    ],
    "prompt": "Was passiert beim Verkauf von zwei der vier Einheiten bei 60?",
    "answers": [
      {
        "label": "Das ursprüngliche R wird automatisch null.",
        "explanation": "R bleibt der anfängliche Bewertungsmaßstab."
      },
      {
        "label": "40 werden vor Kosten realisiert; zwei Einheiten bleiben offen.",
        "explanation": "Richtig. Jede verkaufte Einheit gewinnt 20."
      },
      {
        "label": "Die ganze Position ist damit geschlossen.",
        "explanation": "Zwei Einheiten verbleiben."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Stop hinter dem jüngsten höheren Tief nachführen",
    "summary": "Erst strukturelle Bestätigung, dann die neue Schutzmarke.",
    "section": "Management",
    "scenario": "c18-24",
    "paragraphs": [
      "Ein Bullenverlauf bildet höhere Hochs und höhere Tiefs. Nach einem bestätigten neuen Hoch kann ein vorab definierter Trailingplan den Schutz unter das jüngste sichtbare Pullbacktief verlegen. Im Bärenverlauf spiegelt sich das über ein tieferes Rücklaufhoch.",
      "Der Kandidat für ein höheres Tief ist während des Rücklaufs noch nicht fertig. Reagiert der Markt erst davon aufwärts und erreicht ein neues Hoch, ist seine Rolle klarer. Ein späteres Tief darfst du nicht schon früher zum Schutzpunkt erklären.",
      "Ein engerer Stop verändert die weitere Verlust- oder Gewinnsicherung, nicht das ursprüngliche R der Auswertung. Bei einem Sprung durch den Stop kann die reale Ausführung trotzdem vom geplanten Preis abweichen."
    ],
    "callout": "Stoppreis und tatsächliche Ausführung unterscheiden.",
    "takeaways": [
      "Nur bereits erkennbare Swingpunkte verwenden.",
      "Neues Hoch kann den Nachführschritt bestätigen.",
      "Stoppreis und tatsächliche Ausführung unterscheiden."
    ],
    "prompt": "Wann ist die Nachführung unter das neue Pullbacktief nachvollziehbar?",
    "answers": [
      {
        "label": "Schon vor der Entstehung des Rücklaufs.",
        "explanation": "Das wäre späteres Wissen."
      },
      {
        "label": "Bei jedem grünen Tick ohne Strukturbezug.",
        "explanation": "Dann fehlt eine begründete neue Schutzmarke."
      },
      {
        "label": "Wenn dieses Tief sichtbar ist und der geplante Bestätigungsschritt eintritt.",
        "explanation": "Richtig. Die Linie wird aus verfügbaren Daten gewählt."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Breakeven nach Test und neuem Extrem",
    "summary": "Nicht jeder erste Gewinn verlangt einen Stop am Einstand.",
    "section": "Management",
    "scenario": "c18-25",
    "paragraphs": [
      "Ein früher Ausbruchstest kann noch einmal zum Einstieg zurücklaufen. Ein sofort auf Einstand gezogener Stop würde diesen Test womöglich nicht erlauben. Ein strukturbezogener Stop kann anders liegen.",
      "Eine mögliche Regel zieht den Schutz erst nach einem sichtbaren Einstiegstest und anschließendem neuen Hoch näher an den Einstand. Andere Trader nehmen das Tief des Testpullbacks als Referenz. Beide Varianten müssen schon vor der Folge unterscheidbar sein.",
      "Keine dieser Regeln ist für jeden Markt optimal. Vergleiche im Replay, ob der neue Stop zu deiner Halteabsicht passt. Einstand vor Kosten heißt weiterhin nicht zwingend ein tatsächlicher Netto-Null-Ausgang."
    ],
    "callout": "Die Breakeven-Regel gehört zum vorherigen Plan.",
    "takeaways": [
      "Ersten Gewinn und bestätigten Strukturfortschritt trennen.",
      "Test plus neues Extrem kann eine andere Lage schaffen.",
      "Breakeven-Regel gehört zum vorherigen Plan."
    ],
    "prompt": "Welche Information kommt nach dem Einstiegstest hinzu?",
    "answers": [
      {
        "label": "Ob der Markt anschließend wieder ein neues Trendextrem erreicht.",
        "explanation": "Richtig. Das zeigt zusätzliche Fortsetzung nach dem Test."
      },
      {
        "label": "Die Sicherheit, dass es nie wieder einen Rücklauf gibt.",
        "explanation": "Weitere Pullbacks bleiben möglich."
      },
      {
        "label": "Dass Kosten ab jetzt wegfallen.",
        "explanation": "Die Ausführung hat weiterhin Kosten."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "High 2 scheitert: High 3 ist ein neuer Versuch",
    "summary": "Signalstop und weiter Strukturplan dürfen nicht vertauscht werden.",
    "section": "Management",
    "scenario": "c18-26",
    "paragraphs": [
      "Ein High-2-Einstieg kann verlieren, während der größere Pullback später drei Schübe ausbildet. Daraus kann eine neue High-3- oder Keil-Bullenflaggen-Prüfung entstehen. Das macht den ursprünglichen Verlust nicht rückwirkend falsch.",
      "Ein Trader mit engem Signalstop beendet den ersten Versuch und beurteilt das neue Signal separat. Ein vorab weit geplanter Strukturstop mit kleinerer Menge erlaubt eine andere Gegenbewegung. Erst nach dem Verlust den engen Stop zum weiten umzubenennen hieße, den Plan zu wechseln.",
      "Eine halbe Anfangsgröße und eine spätere normale Größe sind ebenfalls eigene Entscheidungen. Ein zweites Signal rechtfertigt keine beliebige Verdopplung nach einem Verlust. Beziehe alle offenen Tranchen auf das gemeinsame erlaubte Budget."
    ],
    "callout": "Einen Verlust nicht durch spontane Größensteigerung ausgleichen.",
    "takeaways": [
      "Späteres Signal ist eine neue Entscheidung.",
      "Signalstop und Strukturstop vorher unterscheiden.",
      "Verlust nicht durch spontane Größensteigerung ausgleichen."
    ],
    "prompt": "Was ist bei einem neuen High-3-Signal nach ausgestopptem High 2 sinnvoll?",
    "answers": [
      {
        "label": "Unabhängig vom Budget die Menge verdoppeln.",
        "explanation": "Die Zählung bestimmt das zulässige Risiko nicht."
      },
      {
        "label": "Einen neuen Plan mit eigenem Risiko prüfen.",
        "explanation": "Richtig. Das erste Ergebnis bleibt erhalten."
      },
      {
        "label": "Den alten Stop nachträglich als nie gültig erklären.",
        "explanation": "Das würde die frühere Entscheidung umschreiben."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Weiter Schutz, kleine Menge: kein Freibrief",
    "summary": "Die Verlustgrenze bleibt eine echte Grenze.",
    "section": "Positionsgröße",
    "scenario": "c18-27",
    "paragraphs": [
      "Ein weiter Strukturstop kann zu einem Swingplan passen, wenn die Menge von Anfang an entsprechend klein ist. Ein Stopabstand von 12 statt 4 verlangt bei gleichem Wert pro Einheit ungefähr ein Drittel der ursprünglichen Menge.",
      "Eine historische Tagesrange oder ein früher typischer Pullback ist dabei nur Kontext. Sie beweist nicht, dass der nächste Rücklauf innerhalb dieser Größe bleibt. Der Preis, an dem dein konkreter Plan endet, muss eindeutig sein.",
      "Bei diskreten Kontrakten kann die Rechnung unter die kleinste handelbare Menge fallen. Dann ist der Plan mit diesem Instrument und Budget nicht ausführbar. Den Stop schiebst du nicht weiter weg, nur weil die größere Trendrichtung noch plausibel aussieht."
    ],
    "callout": "Unter der Mindestmenge bleibt der Trade ungehandelt.",
    "takeaways": [
      "Weiten Schutz vorab mit kleiner Menge verbinden.",
      "Historische Abstände sind keine feste Marktgrenze.",
      "Unter Mindestmenge bleibt der Trade ungehandelt."
    ],
    "prompt": "Was folgt, wenn selbst ein einzelner Kontrakt das geplante Budget übersteigt?",
    "answers": [
      {
        "label": "Das Budget muss automatisch steigen.",
        "explanation": "Die Marktform hebt die Grenze nicht auf."
      },
      {
        "label": "Der Schutz darf nachträglich unbegrenzt entfernt werden.",
        "explanation": "Damit würde das Risiko weiter wachsen."
      },
      {
        "label": "Dieser Plan ist mit diesem Instrument und Budget nicht ausführbar.",
        "explanation": "Richtig. Eine gedachte Bruchteilmenge kann dann nicht gehandelt werden."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Trend wird Range: erst neu beurteilen",
    "summary": "Ein tieferer Rücklauf bedeutet nicht sofort die gegenteilige Position.",
    "section": "Kontextwechsel",
    "scenario": "c18-28",
    "paragraphs": [
      "Werden Rückläufe größer, überlappen die Swings stärker und bekommen neue Extreme weniger Anschluss, kann eine gerichtete Folge in eine Range übergehen. Die vorherige Trendmethode prüfst du dann erneut.",
      "Ein Bruch des letzten höheren Tiefs kann diese Veränderung unterstützen. Er beweist allein noch keinen kräftigen Bärentrend. Zwischen Long halten und sofort Short werden liegt die Möglichkeit, die Position zu beenden und flat neu zu beurteilen.",
      "Für die neue Lage gelten neue Ziele und neue Auslöser. Ein bisheriger Swingplan darf nicht heimlich zum endlosen Hoffen in der Range werden. Benenne die Bars, die die größere Kontrolle tatsächlich verändert haben."
    ],
    "callout": "Flat erlaubt eine neue Prüfung.",
    "takeaways": [
      "Mehr Überlappung kann einen Rangeübergang anzeigen.",
      "Ausstieg und Richtungswechsel sind verschiedene Entscheidungen.",
      "Flat erlaubt eine neue Prüfung."
    ],
    "prompt": "Muss ein Long-Ausstieg sofort ein Short-Einstieg sein?",
    "answers": [
      {
        "label": "Nein; die neue Lage kann zunächst flat beurteilt werden.",
        "explanation": "Richtig. Für einen Short fehlt möglicherweise noch ein eigenes Setup."
      },
      {
        "label": "Ja, jede geschlossene Longposition verlangt einen Short.",
        "explanation": "Ausstieg und neuer Einstieg sind getrennt."
      },
      {
        "label": "Nein, deshalb darf ein Long nie beendet werden.",
        "explanation": "Eine geschwächte Hypothese kann einen Ausstieg verlangen."
      }
    ],
    "correct": 0
  },
  {
    "number": 29,
    "title": "Tagesfall: frühes Gap und unscheinbare Umkehr",
    "summary": "Die spätere Tagesform war am Anfang noch offen.",
    "section": "Chartfall 18.1 · Eröffnung",
    "scenario": "c18-29",
    "paragraphs": [
      "Der Tagesfall beginnt mit einem Sprung nach oben und einer frühen Käuferreaktion. Danach entstehen kleine Gegenbars und ein unauffälliger erneuter Tiefbereichstest. Diese kurze Zweibarreaktion kann einen Trendbeginn vorbereiten, ohne schon überzeugend auszusehen.",
      "Ein frühes Signal verlangt eine Entscheidung mit wenig bestätigter Folge. Wer späteren Anschluss abwartet, zahlt womöglich einen anderen Preis, bekommt dafür aber zusätzliche Information. Die beiden Wege nutzen verschiedene Informationsstände.",
      "Die größere Käuferbewegung wird Schritt für Schritt sichtbar. Erklär den kleinen frühen Bar nicht rückwirkend zum sicheren Tagestief. Auch die Gaprichtung legt den endgültigen Tagesverlauf nicht fest."
    ],
    "callout": "Spätere Stärke nicht in den frühen Signalbar hineinlesen.",
    "takeaways": [
      "Frühes Gap liefert Kontext, keine Tagesgarantie.",
      "Frühe und spätere Einstiege kennen unterschiedlich viele Bars.",
      "Spätere Stärke nicht in den frühen Signalbar hineinlesen."
    ],
    "prompt": "Was unterscheidet frühen Test und späteren Ausbruchseinstieg?",
    "answers": [
      {
        "label": "Ein Gap garantiert beide Gewinne.",
        "explanation": "Die Gaprichtung garantiert keine Folge."
      },
      {
        "label": "Der Umfang der bereits verfügbaren Bestätigung.",
        "explanation": "Richtig. Die spätere Order kennt zusätzliche Folgebars."
      },
      {
        "label": "Der frühe Einstieg kennt den ganzen Tag.",
        "explanation": "Der spätere Verlauf war noch verdeckt."
      }
    ],
    "correct": 1
  },
  {
    "number": 30,
    "title": "Ausbruch über den Eröffnungsbereich",
    "summary": "Ein großer Käuferbar verändert die Arbeitshypothese.",
    "section": "Chartfall 18.1 · Frühe Stärke",
    "scenario": "c18-30",
    "paragraphs": [
      "Ein großer Käuferbar verlässt den Eröffnungsbereich und schließt über einem früheren Hoch. Damit bekommt die Bullenlesart mehr sichtbare Unterstützung. Der nächste Bar kann diese Stärke bestätigen oder den Ausbruch zurücknehmen.",
      "Mögliche Wege sind eine Stop-Auslösung über dem alten Hoch, eine Ausführung am Ausbruchsschluss oder ein späterer Rücklauf. Jeder Weg hat einen anderen tatsächlichen Preis und möglicherweise einen anderen Schutzabstand.",
      "Im Lernbeispiel wird ein Schutzbereich am Ursprung dieses kräftigen Bars gewählt. Der Abstand ist so groß, dass du die Menge vorher klein rechnen musst. Das spätere Trendbild erlaubt keine nachträgliche Vergrößerung der frühen Position."
    ],
    "callout": "Ein großer Bar verlangt eine vorher passende Menge.",
    "takeaways": [
      "Eröffnungsbruch liefert neue sichtbare Stärke.",
      "Orderweg verändert Preis und Schutzabstand.",
      "Großer Bar verlangt eine vorher passende Menge."
    ],
    "prompt": "Was macht den großen Eröffnungs-Ausbruchsbar bedeutsam?",
    "answers": [
      {
        "label": "Er garantiert den endgültigen Tagesschluss.",
        "explanation": "Dieser bleibt unbekannt."
      },
      {
        "label": "Er erlaubt ohne Rechnung jede Menge.",
        "explanation": "Das Preisrisiko muss weiterhin budgetiert werden."
      },
      {
        "label": "Er zeigt neue Käuferstärke außerhalb des bisherigen Bereichs.",
        "explanation": "Richtig. Das ist zusätzliche Information zur frühen Hypothese."
      }
    ],
    "correct": 2
  },
  {
    "number": 31,
    "title": "Erster Mikrokanalbruch wird zurückgenommen",
    "summary": "Die kleine Gegenbewegung kann ein Trendpullback bleiben.",
    "section": "Chartfall 18.1 · Frühe Stärke",
    "scenario": "c18-31",
    "paragraphs": [
      "Nach dem Eröffnungsbruch steigen die Tiefs über mehrere Bars. Ein erster Gegenbar unterschreitet die enge Mikrostruktur. Das macht den lokalen Bruch sichtbar, aber noch keinen großen Verkäuferwechsel.",
      "Eine Käuferreaktion bringt den Preis wieder in die Trendfolge. Frühe Limits am Vorbartief, ein Gegenbar-Schluss und eine Stop-Auslösung nach der Reaktion wären unterschiedliche Einstiegsvarianten desselben Abschnitts.",
      "Wähl im Replay nur eine davon und notier den Zeitpunkt. Mit späterem Wissen alle drei gleichzeitig als sichere Einstiege zu markieren würde ihre verschiedenen Unsicherheiten verdecken."
    ],
    "callout": "Eine klar gewählte Variante macht das Replay prüfbar.",
    "takeaways": [
      "Mikrobruch und großer Wechsel sind verschieden.",
      "Mehrere Orderwege können denselben Abschnitt nutzen.",
      "Eine klar gewählte Variante macht das Replay prüfbar."
    ],
    "prompt": "Was fehlt beim ersten Mikrobruch noch?",
    "answers": [
      {
        "label": "Der Beweis eines größeren Verkäuferwechsels.",
        "explanation": "Richtig. Die neue Gegenreaktion kann klein bleiben."
      },
      {
        "label": "Ein sichtbarer lokaler Grenzübertritt.",
        "explanation": "Dieser ist gerade entstanden."
      },
      {
        "label": "Jede Information über den vorherigen Spike.",
        "explanation": "Der Spike bleibt wichtiger Kontext."
      }
    ],
    "correct": 0
  },
  {
    "number": 32,
    "title": "Lokales höheres Hoch mit Shortidee",
    "summary": "Ein Gegensetup im größeren Bullenverlauf begrenzen.",
    "section": "Chartfall 18.1 · Pullback",
    "scenario": "c18-32",
    "paragraphs": [
      "Nach dem engen Mikrobruch steigt der Preis noch einmal zu einem höheren Hoch. Lokal lässt sich eine Ausbruchspullback-Shortidee beschreiben. Die größere Vorgeschichte bleibt jedoch stark aufwärtsgerichtet.",
      "Ein Abwärtsversuch kann deshalb nur einen Rücklauf zum früheren höheren Tief eröffnen. Käufer prüfen dort eine mögliche Trendfortsetzung. Derselbe Preisabschnitt hat für kurzfristige Gegentrader und für Swingtrader unterschiedliche Rollen.",
      "In dieser Übung bleibt der Hauptplan mit der größeren Richtung. Ein lokaler Shortname ersetzt keinen überzeugenden großen Trendbruch. Benenne zuerst den Umfang der Gegenstärke, bevor du einen ganzen Tageswechsel erwartest."
    ],
    "callout": "Eine kurze Gegenidee ist kein großer Umkehrbeweis.",
    "takeaways": [
      "Lokales Gegensetup im größeren Kontext lesen.",
      "Rücklauf kann Käufer an einen höheren Tiefbereich führen.",
      "Kurze Gegenidee ist kein großer Umkehrbeweis."
    ],
    "prompt": "Warum ist die lokale Shortidee hier kein sicherer großer Trendwechsel?",
    "answers": [
      {
        "label": "Weil ein höheres Hoch immer gewinnen muss.",
        "explanation": "Auch die Käuferidee bleibt widerlegbar."
      },
      {
        "label": "Weil die größere Käuferstärke bislang kaum widerlegt wurde.",
        "explanation": "Richtig. Lokale und größere Struktur sind verschieden."
      },
      {
        "label": "Weil Shortpositionen grundsätzlich nie möglich sind.",
        "explanation": "Es geht um den konkreten Kontext, nicht ein allgemeines Verbot."
      }
    ],
    "correct": 1
  },
  {
    "number": 33,
    "title": "Doppeltief und High 2 nach dem Rücklauf",
    "summary": "Ort und Versuchszählung ergänzen sich.",
    "section": "Chartfall 18.1 · Pullback",
    "scenario": "c18-33",
    "paragraphs": [
      "Der Rücklauf prüft einen früheren lokalen Tiefbereich. Dazwischen lag ein erster Käuferversuch. Eine erneute Reaktion nach dem zweiten Tief lässt sich deshalb als Doppeltief-Bullenflagge und als High-2-Prüfung lesen.",
      "Doppeltief beschreibt die ähnlichen Preise. High 2 beschreibt die Reihenfolge mit einem ersten Versuch, einer Gegenbewegung und einer zweiten Auslösung. Beide Bezeichnungen beziehen sich auf denselben Abschnitt.",
      "Ein Einstieg über dem Signal braucht genug Raum bis zum alten Hoch und einen zuvor gewählten Schutz. Der große Trend kann tragen, aber das Signal kann trotzdem scheitern. Mehr Musternamen bedeuten keine gemessene zusätzliche Trefferquote."
    ],
    "callout": "Das Signal bleibt mit eigenem Risiko zu prüfen.",
    "takeaways": [
      "Ort und Zählung getrennt benennen.",
      "Zwei Namen können dieselben Bars beschreiben.",
      "Signal bleibt mit eigenem Risiko zu prüfen."
    ],
    "prompt": "Was beschreibt das Doppeltief zusätzlich zur High-2-Zählung?",
    "answers": [
      {
        "label": "Eine garantierte doppelte Gewinnchance.",
        "explanation": "Die Namen liefern keine gemessene Wahrscheinlichkeit."
      },
      {
        "label": "Einen zweiten unabhängigen historischen Trade.",
        "explanation": "Beide Perspektiven nutzen denselben Abschnitt."
      },
      {
        "label": "Den ähnlichen Preisbereich der beiden lokalen Tiefs.",
        "explanation": "Richtig. Die Zählung beschreibt dagegen die zeitliche Reihenfolge."
      }
    ],
    "correct": 2
  },
  {
    "number": 34,
    "title": "Nächster Mikrobruch: Limit oder Bestätigung",
    "summary": "Frühe Füllung und spätere Auslösung nicht zusammenwerfen.",
    "section": "Chartfall 18.1 · Fortsetzung",
    "scenario": "c18-34",
    "paragraphs": [
      "Nach einem neuen Hoch entsteht wieder ein enger kleiner Aufwärtsabschnitt. Ein späterer Bar unterschreitet die Mikro-Trendlinie. Ein Limit am vorherigen Tief kann schon dabei gefüllt werden.",
      "Eine Stop-Variante wartet dagegen auf die anschließende Rückkehr über den Signalbar. Im Diagramm enthält die zweite Bildhälfte genau diese Folgebars. Für das frühe Limit waren sie noch nicht bekannt.",
      "Vergleiche die möglichen Preisabstände zum Schutz. Der frühe Weg kann einen besseren Preis, aber weniger Bestätigung haben. Der spätere Weg kann teurer sein und trotzdem scheitern. Einen pauschal überlegenen Ordertyp gibt es nicht."
    ],
    "callout": "Beide Wege brauchen einen Schutzplan.",
    "takeaways": [
      "Frühes Limit kennt die spätere Reaktion noch nicht.",
      "Bestätigung kann einen anderen Preis kosten.",
      "Beide Wege benötigen einen Schutzplan."
    ],
    "prompt": "Was weiß die frühe Limit-Variante noch nicht?",
    "answers": [
      {
        "label": "Ob die anschließende Käuferreaktion tatsächlich entsteht.",
        "explanation": "Richtig. Diese Information erscheint erst später."
      },
      {
        "label": "Den bereits bekannten Vorbarpreis.",
        "explanation": "Dieser ist Grundlage des Angebots."
      },
      {
        "label": "Dass gerade ein Mikrobruch stattfindet.",
        "explanation": "Dieser ist bei der Füllung sichtbar."
      }
    ],
    "correct": 0
  },
  {
    "number": 35,
    "title": "Seitwärtsflagge: High 2, Dreieck oder Keil",
    "summary": "Kleine Bars können eine längere Pause bedeuten.",
    "section": "Chartfall 18.1 · Mittlerer Abschnitt",
    "scenario": "c18-35",
    "paragraphs": [
      "Nach mehreren Aufwärtsschüben bewegen sich kleine Bars längere Zeit seitwärts. Eine High-2-Idee im unteren Bereich ist möglich, aber die enge Range kann weiterlaufen. Ein anderer Plan wartet auf einen dritten Rücklauf oder den Ausbruch aus der ganzen Pause.",
      "Je nach gewählter Größe wirkt derselbe Abschnitt wie eine Keilflagge oder ein kleines Dreieck. Halte eine Hauptlesart fest. Die Strukturbezeichnungen ändern nichts am sichtbaren Mangel an starkem Anschluss innerhalb der Pause.",
      "Ein kräftiger Ausbruch beendet die seitliche Überlappung erst als neue Information. Ein anschließender kleiner Test kann einen Ausbruchspullback liefern. Warte nicht auf eine spätere Gewissheit, die während der Pause noch gar nicht existiert."
    ],
    "callout": "Ausbruch und späterer Test sind neue Schritte.",
    "takeaways": [
      "Seitwärtsphase kann länger als erwartet dauern.",
      "Mehrere Namen brauchen eine klare Hauptlesart.",
      "Ausbruch und späterer Test sind neue Schritte."
    ],
    "prompt": "Was ist bei kleinen seitwärts überlappenden Bars möglich?",
    "answers": [
      {
        "label": "Dass alle bisherigen Trendbars bedeutungslos werden.",
        "explanation": "Sie bleiben der größere Kontext."
      },
      {
        "label": "Dass die enge Range weiterläuft, obwohl ein lokales Signal erscheint.",
        "explanation": "Richtig. Das Signal beendet die Pause nicht automatisch."
      },
      {
        "label": "Dass jeder High-2-Name einen sofortigen Ausbruch garantiert.",
        "explanation": "Die Zählung garantiert keine Folge."
      }
    ],
    "correct": 1
  },
  {
    "number": 36,
    "title": "Limit bleibt ungefüllt: Planwechsel bewusst prüfen",
    "summary": "Ein verpasster Preis ist kein Auftrag zum Hinterherlaufen.",
    "section": "Chartfall 18.1 · Mittlerer Abschnitt",
    "scenario": "c18-36",
    "paragraphs": [
      "Eine Limit-Order erwartet einen Rücklauf von acht Einheiten. Der Markt gibt aber nur sechs Einheiten zurück und steigt anschließend weiter. Dein Preis wurde nicht besucht; die Order bleibt im schematischen Beispiel ungefüllt.",
      "Einen neuen Stop-Ausbruch kannst du trotzdem als eigenen Plan prüfen. Er hat einen höheren Preis, einen anderen Schutzabstand und einen anderen verbleibenden Zielraum. Ärger über die verpasste Füllung reicht dafür nicht.",
      "Notier im Replay sowohl ungefüllte als auch gefüllte Angebote. Zeigst du nur die später erfolgreichen Durchbrüche, verschwindet die reale Entscheidung zwischen Warten, neuer Prüfung und Abbruch."
    ],
    "callout": "Eine neue Order aus Struktur ableiten, nicht aus Ärger.",
    "takeaways": [
      "Nicht besuchtes Limit ist ein normaler Ausgang.",
      "Späterer Stop ist ein eigener Plan.",
      "Neue Order aus Struktur statt aus Ärger ableiten."
    ],
    "prompt": "Was folgt aus dem ungefüllten Limit?",
    "answers": [
      {
        "label": "Die Pflicht, sofort die doppelte Menge am Markt zu kaufen.",
        "explanation": "Das wäre ein ungeplanter Risikosprung."
      },
      {
        "label": "Ein bewiesener Fehler der ursprünglichen Rechnung.",
        "explanation": "Auch ein plausibles Angebot kann ungefüllt bleiben."
      },
      {
        "label": "Nur, dass der angebotene Preis nicht erreicht wurde.",
        "explanation": "Richtig. Eine spätere Order verlangt eine neue Prüfung."
      }
    ],
    "correct": 2
  },
  {
    "number": 37,
    "title": "Tagesfall: Größe aus Preisverlust berechnen",
    "summary": "Eine eigene Rechenstrecke statt historischer Kurswerte.",
    "section": "Chartfall 18.1 · Risikoplan",
    "scenario": "c18-37",
    "paragraphs": [
      "Im synthetischen Fall liegt ein Kaufplan bei 60 und die Verlustgrenze bei 53. Der Abstand ist sieben Preiseinheiten. Bei einem Geldwert von 1 je Einheit und einem Budget von 140 lassen sich rechnerisch höchstens zwanzig Stück vor Kosten planen.",
      "Kosten und ungünstige Stop-Ausführung können den realen Verlust erhöhen. Planst du dafür eine Reserve von 14 ein, bleiben 126 für den reinen Preisverlust. Bei ganzen Stückzahlen passen dann höchstens achtzehn Stück in diese Modellrechnung.",
      "Das ist ein Rechenbeispiel, kein konkreter Kontraktauftrag. Ein anderes Instrument kann einen anderen Wert pro Einheit und andere Mindestmengen haben. Erst danach lässt sich der Plan in Geld und ausführbare Menge übersetzen."
    ],
    "callout": "Instrument und Mindestmenge gesondert prüfen.",
    "takeaways": [
      "Abstand mal Wert mal Menge ergibt geplanten Preisverlust.",
      "Kostenreserve reduziert die verfügbare Menge.",
      "Instrument und Mindestmenge gesondert prüfen."
    ],
    "prompt": "Welche ganze Menge passt bei sieben je Stück und 126 verfügbarem Preisbudget?",
    "answers": [
      {
        "label": "Achtzehn Stück.",
        "explanation": "Richtig. 18 mal 7 ergibt 126."
      },
      {
        "label": "Zwanzig Stück trotz der Reserve.",
        "explanation": "Dann würden 140 allein für den Preisverlust benötigt."
      },
      {
        "label": "Siebenundzwanzig Stück.",
        "explanation": "Diese Menge überschreitet das verfügbare Budget."
      }
    ],
    "correct": 0
  },
  {
    "number": 38,
    "title": "Teilgewinn und Rest: den Korb vollständig abrechnen",
    "summary": "Der sichtbare erste Gewinn ist nur ein Teil des Ergebnisses.",
    "section": "Chartfall 18.1 · Positionsführung",
    "scenario": "c18-38",
    "paragraphs": [
      "Der Tagesfall rechnet den Ausstieg mit vier Einheiten bei 40 und ursprünglichem Schutz 30 durch. Bei 60 werden zwei Einheiten verkauft. Das realisiert 40; zwei Einheiten bleiben als Swingrest offen.",
      "Wird der Rest später bei 75 beendet, kommen 2 × 35 = 70 hinzu. Insgesamt sind das 110 vor Kosten gegenüber 40 ursprünglichem Gesamtpreisrisiko, also 2,75R. Bei einem Restexit bei 55 wären es dagegen insgesamt 70 beziehungsweise 1,75R.",
      "Die Rechenwege verwenden dieselben Anfangsdaten und verschiedene spätere Ausgänge. Sie sind keine Vorhersage. Für die echte Auswertung führst du jede Tranche mit tatsächlicher Menge, Preis und Kosten."
    ],
    "callout": "Verschiedene Restexits verändern den Gesamtausgang.",
    "takeaways": [
      "Alle Tranchen in die Ergebnisrechnung aufnehmen.",
      "Ursprüngliches Gesamt-R als Maßstab erhalten.",
      "Verschiedene Restexits verändern den Gesamtausgang."
    ],
    "prompt": "Wie groß ist das Gesamtergebnis bei Restexit 75?",
    "answers": [
      {
        "label": "70R, weil der letzte Gewinn 70 ist.",
        "explanation": "Geldbetrag und Risikovielfaches sind verschiedene Einheiten."
      },
      {
        "label": "110 vor Kosten, entsprechend 2,75R.",
        "explanation": "Richtig. 40 Teilgewinn plus 70 Restgewinn werden durch das ursprüngliche Risiko 40 geteilt."
      },
      {
        "label": "Nur 40, weil der Rest nicht zählt.",
        "explanation": "Auch die Restposition gehört zum Trade."
      }
    ],
    "correct": 1
  },
  {
    "number": 39,
    "title": "Neue Hochs und bestätigte höhere Tiefs",
    "summary": "Die Nachführung als zeitliche Folge zeigen.",
    "section": "Chartfall 18.1 · Positionsführung",
    "scenario": "c18-39",
    "paragraphs": [
      "Der Kurs erreicht ein neues Hoch, läuft zurück und bildet einen sichtbaren Tiefbereich. Erst der anschließende neue Aufwärtsschub bestätigt, dass der Rücklauf in diesem Abschnitt gehalten hat. Dann kann der festgelegte Trailingplan den Schutz unter dieses Tief ziehen.",
      "Im Beispiel entstehen die Pullbacktiefs 48 und später 60. Die Schutzmarken setzt du jeweils erst nach der Folgebestätigung. Die erste Bildhälfte kennt das spätere Tief 60 noch nicht.",
      "Der nachgeführte Stop schützt den verbleibenden Teil der Position. Er macht weder den nächsten Bar sicher noch das alte Einstiegssignal rückwirkend besser. Ein späterer Bruch löst die vorher definierte Restentscheidung aus."
    ],
    "callout": "Der Stop regelt den Rest, keine zukünftige Gewissheit.",
    "takeaways": [
      "Nachführung an sichtbare Struktur koppeln.",
      "Späteres Tief nicht früher verwenden.",
      "Stop regelt den Rest, keine zukünftige Gewissheit."
    ],
    "prompt": "Warum erscheint die zweite Schutzmarke erst in der späteren Bildhälfte?",
    "answers": [
      {
        "label": "Weil frühe Stops grundsätzlich verboten sind.",
        "explanation": "Ein Anfangsstop ist weiterhin nötig."
      },
      {
        "label": "Weil der nächste Gewinn garantiert ist.",
        "explanation": "Die spätere Folge bleibt ungewiss."
      },
      {
        "label": "Weil das zugehörige Tief und die Bestätigung erst später sichtbar werden.",
        "explanation": "Richtig. Die Übung verwendet die Information zeitgerecht."
      }
    ],
    "correct": 2
  },
  {
    "number": 40,
    "title": "Später dritter Schub und Klimax",
    "summary": "Stärke kann zugleich eine größere Pause vorbereiten.",
    "section": "Chartfall 18.1 · Reife Bewegung",
    "scenario": "c18-40",
    "paragraphs": [
      "Nach langer Käuferkontrolle beschleunigt ein dritter größerer Aufwärtsschub. Der letzte Käuferbar ist auffällig groß und erreicht die äußere Kanalgrenze. Für Käufer kann das ein geplanter Gewinnbereich sein, während Gegentrader eine Korrektur prüfen.",
      "Die starke Farbe allein ist deshalb kein gleichwertiges frisches Kaufsignal wie am Tagesanfang. Reife Bewegung, wiederholte Beschleunigung und Grenzüberschreitung gehören zusammen. Eine größere seitliche oder abwärts gerichtete Korrektur wird plausibler.",
      "Eine genaue Zahl späterer Bars oder ein bestimmtes Korrekturziel ist nicht garantiert. Der nächste schwache Gegenbar liefert erst weitere Information. Plane eine Teil- oder Restentscheidung, statt aus einem großen Gewinn einen ungeprüften Gegentrade zu machen."
    ],
    "callout": "Die Korrekturlänge bleibt offen.",
    "takeaways": [
      "Späte Stärke in ihrer Phase lesen.",
      "Dritter Schub an Kanalgrenze kann Gewinnprüfung stützen.",
      "Korrekturlänge bleibt offen."
    ],
    "prompt": "Warum wird der große späte Käuferbar anders als der frühe Spike geprüft?",
    "answers": [
      {
        "label": "Weil die lange Vorgeschichte und wiederholte Beschleunigung eine größere Pause plausibel machen.",
        "explanation": "Richtig. Gleichfarbige Bars können verschiedene Rollen haben."
      },
      {
        "label": "Weil große grüne Bars immer sofort fallen müssen.",
        "explanation": "Das ist keine allgemeine Regel."
      },
      {
        "label": "Weil der Tagesanfang nachträglich anders aussieht.",
        "explanation": "Der frühe Informationsstand bleibt unverändert."
      }
    ],
    "correct": 0
  },
  {
    "number": 41,
    "title": "Erster Durchschnittstest nach langer Käuferfolge",
    "summary": "Starken Verkäuferbar, Insidebar und Rückkehr getrennt lesen.",
    "section": "Chartfall 18.1 · Später Pullback",
    "scenario": "c18-41",
    "paragraphs": [
      "Der größere Rücklauf führt zum ersten Mal nach einer langen Trennung zum Durchschnitt. Ein Verkäuferbar schließt darunter. Das zeigt Gegenstärke und kann zugleich im größeren Bullenplan ein Pullbackbereich sein.",
      "Ein kleiner Käufer-Insidebar folgt, ohne sofort alle Verkäuferstärke zurückzunehmen. Erst die weitere Käuferreaktion schließt wieder über dem Durchschnitt. Frühes Limit, Kauf des Gegenschlusses und spätere Stop-Bestätigung arbeiten deshalb mit unterschiedlichen Daten.",
      "Für einen großen Bärenwechsel würden weitere gerichtete Gegenbars und Anschluss stärker sprechen als der isolierte erste Schluss. Die gezeigte Käuferreaktion kann aber ebenfalls schwach bleiben und in eine Range führen."
    ],
    "callout": "Die Rückkehr zum Durchschnitt kann Trendtest oder Rangebeginn sein.",
    "takeaways": [
      "Erster Gegenschluss und Folgebars getrennt lesen.",
      "Insidebar ist noch keine vollständige Umkehrbestätigung.",
      "Rückkehr zum Durchschnitt kann Trendtest oder Rangebeginn sein."
    ],
    "prompt": "Was ergänzt der Käuferbar nach dem Insidebar?",
    "answers": [
      {
        "label": "Die Löschung des vorherigen Verkäuferbars.",
        "explanation": "Die Gegenstärke bleibt Teil der Vorgeschichte."
      },
      {
        "label": "Neue sichtbare Rückkehr über den Durchschnitt.",
        "explanation": "Richtig. Diese Information lag beim frühen Gegenschluss noch nicht vor."
      },
      {
        "label": "Eine Garantie für ein neues Tageshoch.",
        "explanation": "Die spätere Bewegung bleibt offen."
      }
    ],
    "correct": 1
  },
  {
    "number": 42,
    "title": "Zwei Beine, Insidebar und spätere High-2-Auslösung",
    "summary": "Signalpreis und Auslösebar können mehrere Bars auseinanderliegen.",
    "section": "Chartfall 18.1 · Später Pullback",
    "scenario": "c18-42",
    "paragraphs": [
      "Nach dem größeren Rücklauf entstehen zwei unterscheidbare Abwärtsbeine. Eine Käuferreaktion beginnt den ersten Aufwärtsversuch, wird erneut unterbrochen und liefert anschließend eine zweite Auslösung. Das ergänzt die High-2-Lesart des Pullbacks.",
      "Ein Insidebar kann den engeren Signalbereich liefern. Die Order über seinem Hoch muss aber nicht auf dem direkt nächsten Bar ausgelöst werden. Solange der vorher festgelegte Plan gilt, kann ein späterer Bar den Preis erst erreichen.",
      "Den weiteren Verlauf darfst du nicht in die Zählung zurückprojizieren. Eine dritte kleine Tiefprüfung kann zusätzlich eine Keilflaggen-Lesart ermöglichen. Nimm eine klare Hauptzählung und benenne die zweite Perspektive als Ergänzung."
    ],
    "callout": "Mehrere Namen ändern die alten Daten nicht.",
    "takeaways": [
      "Beine und Auslösungen zeitlich unterscheiden.",
      "Insidebar-Signal kann später ausgelöst werden.",
      "Mehrere Namen ändern die alten Daten nicht."
    ],
    "prompt": "Muss eine Stop-Order über einem Insidebar sofort im nächsten Bar auslösen?",
    "answers": [
      {
        "label": "Ja, sonst war der Insidebar rückwirkend keiner.",
        "explanation": "Die Barform ändert sich dadurch nicht."
      },
      {
        "label": "Nein, deshalb darf die Order ohne Verlustgrenze bestehen.",
        "explanation": "Gültigkeit und Schutz müssen weiterhin definiert sein."
      },
      {
        "label": "Nein; ein späterer Bar kann den Preis erst erreichen, sofern der Plan weiter gültig ist.",
        "explanation": "Richtig. Signal und Auslösung sind getrennte Zeitpunkte."
      }
    ],
    "correct": 2
  },
  {
    "number": 43,
    "title": "Lokaler Tiefbruch scheitert nur langsam",
    "summary": "Eine verzögerte Käuferreaktion kann mehr Balance ankündigen.",
    "section": "Chartfall 18.1 · Kontextwechsel",
    "scenario": "c18-43",
    "paragraphs": [
      "Der zweite Abwärtsabschnitt bildet lokal ein tieferes Hoch und unterschreitet ein kleines früheres Tief. Verkäufer erwarten weiteren Anschluss. Die ersten Folgebars schaffen jedoch keine große gerichtete Abwärtsstrecke.",
      "Die Käufer bringen den Markt später zurück, aber weniger schnell als in den frühen engen Pullbacks. Dieser Zeitunterschied ist neue Information. Der große Bullenverlauf kann noch bestehen, während die Tagesstruktur bereits stärker zweiseitig wird.",
      "Ein gescheiterter kleiner Tiefbruch heißt daher nicht zwingend einen neuen kräftigen Bullen-Spike. Eine breitere Range ist ebenfalls möglich. Senke im Replay die Erwartung an den Anschluss, wenn sich Rückgabe und Überlappung deutlich vergrößern."
    ],
    "callout": "Ein Fehlausbruch kann in Balance statt in einen neuen Spike führen.",
    "takeaways": [
      "Fehlender Abwärtsanschluss schwächt den lokalen Short.",
      "Langsame Rückkehr zeigt weniger Käuferdringlichkeit.",
      "Fehlausbruch kann in Balance statt in neuen Spike führen."
    ],
    "prompt": "Was macht die langsame Rückkehr im späten Abschnitt bedeutsam?",
    "answers": [
      {
        "label": "Sie zeigt weniger unmittelbare Käuferkontrolle als die frühen raschen Reaktionen.",
        "explanation": "Richtig. Das Tempo der Folge verändert den Kontext."
      },
      {
        "label": "Sie beweist, dass die ersten Käuferbars nie existierten.",
        "explanation": "Die Vorgeschichte bleibt erhalten."
      },
      {
        "label": "Sie garantiert einen großen neuen Aufwärtsspike.",
        "explanation": "Eine Range bleibt ebenfalls möglich."
      }
    ],
    "correct": 0
  },
  {
    "number": 44,
    "title": "Trendlinien für Einstieg und Gewinnprüfung",
    "summary": "Trendseite und äußere Grenze behalten unterschiedliche Rollen.",
    "section": "Chartfall 18.1 · Linien",
    "scenario": "c18-44",
    "paragraphs": [
      "Ein Pullback kann die innere steigende Trendlinie unterschreiten und anschließend zurückkehren. Ein anderer kleiner Rücklauf endet nach dem Bruch seiner fallenden Gegenlinie. Beide Beobachtungen können den Abschluss eines Pullbacks prüfen.",
      "Die äußere Kanalgrenze erreicht dagegen eher der späte Aufwärtsschub. Dort kannst du Teilgewinne oder eine Restentscheidung prüfen. Eine Überschreitung dieser Grenze ist nicht derselbe Vorgang wie der Bruch der inneren Trendseite.",
      "Bleiben spätere Bars längere Zeit unter der alten Trendlinie und ist der Aufwärtstest schwach, verändert sich die Kontrolllesart. Zieh die alte Linie nicht einfach nach unten, nur um jede neue Lage weiter als denselben starken Trend zu beschreiben."
    ],
    "callout": "Längeres Bleiben unter der alten Linie ist neue Information.",
    "takeaways": [
      "Trendseite und äußere Kanalgrenze trennen.",
      "Gegenlinie kann das Pullbackendstück beschreiben.",
      "Längeres Bleiben unter der alten Linie ist neue Information."
    ],
    "prompt": "Warum sind die beiden Linienbrüche unterschiedlich?",
    "answers": [
      {
        "label": "Weil jede neue Linie alte Verluste entfernt.",
        "explanation": "Eine Zeichnung verändert kein Ergebnis."
      },
      {
        "label": "Die innere Trendseite und die äußere Schubgrenze erfüllen verschiedene Aufgaben.",
        "explanation": "Richtig. Ihre Rollen dürfen nicht vertauscht werden."
      },
      {
        "label": "Weil gestrichelte Linien immer sichere Käufe bedeuten.",
        "explanation": "Das Linienmuster bezeichnet hier nur die Rolle."
      }
    ],
    "correct": 1
  },
  {
    "number": 45,
    "title": "Alte Swinghochs und größere Zeitebenen",
    "summary": "Ausbruchspreis und Bargröße gemeinsam beurteilen.",
    "section": "Chartfall 18.1 · Ausbrüche",
    "scenario": "c18-45",
    "paragraphs": [
      "Während der starken Käuferphase werden frühere Swinghochs mehrfach überboten. Ein später Stop-Einstieg über einem alten Hoch kann derselbe Preisbereich sein, den ein größerer Chart als Durchbruch über einen vorherigen Bar darstellt.",
      "Der größere Bar umfasst mehr Einzelbars und kann einen weiteren Schutzabstand haben. Ein gleich großer Geldverlust verlangt dann eine kleinere Menge. Eine größere Zeitebene erhöht nicht automatisch die Sicherheit der Richtung.",
      "Die Bilder aggregieren dieselbe synthetische Preisfolge. So kannst du den gemeinsamen Preisbezug prüfen, ohne zwei unabhängige Beweise zu erfinden. Den geplanten Zielraum misst du weiter vom tatsächlichen Einstieg aus."
    ],
    "callout": "Zwei Ansichten derselben Daten sind keine unabhängigen Signale.",
    "takeaways": [
      "Gleicher Preisbereich kann auf mehreren Zeitebenen erscheinen.",
      "Größere Bars können weiteren Schutz verlangen.",
      "Zwei Ansichten derselben Daten sind keine unabhängigen Signale."
    ],
    "prompt": "Was verändert sich beim Blick auf aggregierte größere Bars?",
    "answers": [
      {
        "label": "Die ursprüngliche Preisfolge wird gelöscht.",
        "explanation": "Aggregation fasst dieselben Einzelbars zusammen."
      },
      {
        "label": "Die Trefferquote wird automatisch verdoppelt.",
        "explanation": "Zwei Ansichten liefern keine solche Messung."
      },
      {
        "label": "Die Bargröße und damit möglicherweise der sinnvolle Schutzabstand.",
        "explanation": "Richtig. Der zugrunde liegende Preisweg bleibt derselbe."
      }
    ],
    "correct": 2
  },
  {
    "number": 46,
    "title": "Mehr Verkaufsdruck: neues Hoch wird zum Gewinnbereich",
    "summary": "Frühe Ausbruchskäufe nicht blind in die späte Range übertragen.",
    "section": "Chartfall 18.1 · Kontextwechsel",
    "scenario": "c18-46",
    "paragraphs": [
      "Später erscheinen deutlichere Verkäuferbars und tiefere Rückläufe. Ein neues Hoch über einer alten Referenz kann nun eher zum Abbau bestehender Longpositionen genutzt werden als zur nächsten frischen Ergänzung.",
      "Ein schwacher Aufwärtstest des früheren tieferen Hochs kann eine Doppeltop-Bärenflagge oder einen tieferen Hoch-Umkehrversuch vorbereiten. Für einen ausgeprägten Bärenverlauf prüfst du trotzdem weiteren Gegenanschluss.",
      "Die ursprüngliche Trendlesart passt du ab diesen neuen Bars an. Die frühe Ausbruchsregel ist nicht plötzlich grundsätzlich falsch; sie passt nur möglicherweise nicht mehr zur aktuellen Tagesphase."
    ],
    "callout": "Phase und Regel zusammen aktualisieren.",
    "takeaways": [
      "Mehr Verkaufsdruck verändert die Rolle neuer Hochs.",
      "Schwacher Test kann Gegenstruktur vorbereiten.",
      "Phase und Regel zusammen aktualisieren."
    ],
    "prompt": "Warum kann der neue Hochbereich später anders genutzt werden?",
    "answers": [
      {
        "label": "Weil stärkere Rückgabe und Überlappung die frühe Käuferkontrolle schwächen.",
        "explanation": "Richtig. Neue Daten verändern den Kontext."
      },
      {
        "label": "Weil jedes spätere Hoch exakt denselben Auftrag verlangt.",
        "explanation": "Die Tagesphase kann sich verändern."
      },
      {
        "label": "Weil ein Gewinnbereich schon den großen Short beweist.",
        "explanation": "Gewinnmitnahme und Shortsetup sind getrennte Entscheidungen."
      }
    ],
    "correct": 0
  },
  {
    "number": 47,
    "title": "Viele Signale, ein gemeinsames Risiko",
    "summary": "Nicht jede vernünftige Gelegenheit braucht eine neue Position.",
    "section": "Chartfall 18.1 · Auswahl",
    "scenario": "c18-47",
    "paragraphs": [
      "Der Tagesfall enthält viele mögliche Einstiege. Wer bereits eine passende Swingposition hält, muss nicht jedes weitere Signal handeln. Wiederholtes Ergänzen kann eine unbeabsichtigt große Gesamtmenge erzeugen.",
      "Eine mögliche Variante hält den Rest und realisiert nach vorherigen Regeln Teile. Eine andere ergänzt nach festem Budget auf einem späteren Pullback. Das laufende Halten, Teilverkaufen und erneute Aufstocken gleichzeitig zu steuern ist anspruchsvoller als eine einzige klare Positionsregel.",
      "Wähl im Replay wenige konkrete Entscheidungen. Führe jede offene Tranche in derselben Verlustrechnung. Eine neue Gelegenheit heißt nicht, dass das ursprüngliche erlaubte Geldrisiko automatisch erneut zur Verfügung steht."
    ],
    "callout": "Ein einfacher Plan kann bewusst weitere Signale auslassen.",
    "takeaways": [
      "Viele Signale sind Alternativen, keine Pflichtliste.",
      "Alle offenen Tranchen gemeinsam rechnen.",
      "Ein einfacher Plan kann bewusst weitere Signale auslassen."
    ],
    "prompt": "Warum darf nicht bei jedem Signal ungeprüft ergänzt werden?",
    "answers": [
      {
        "label": "Weil Teilgewinne jeden späteren Verlust unmöglich machen.",
        "explanation": "Auch nach Teilgewinn bleibt Risiko."
      },
      {
        "label": "Weil Menge und gemeinsamer möglicher Verlust sonst unbemerkt wachsen.",
        "explanation": "Richtig. Neue Signale liefern kein neues automatisches Budget."
      },
      {
        "label": "Weil ein Trader nur einmal pro Jahr handeln darf.",
        "explanation": "Es geht um den konkreten Plan und die offene Position."
      }
    ],
    "correct": 1
  },
  {
    "number": 48,
    "title": "Dein Trend-Protokoll: wenige Entscheidungen sauber führen",
    "summary": "Einstieg, Haltung und Exit als zusammengehörigen Plan üben.",
    "section": "Abschluss · Replay",
    "scenario": "c18-48",
    "paragraphs": [
      "Notier vor der ersten Order die größere Richtung, den gewählten Orderweg, die Verlustgrenze, die Menge und die Halteabsicht. Leg Teilgewinn, Nachführung und den Exit bei geschwächter Hypothese eindeutig fest.",
      "Deck die Folge Bar für Bar auf. Wähl im Tagesfall zum Beispiel einen frühen oder bestätigten Einstieg, einen geplanten Teilgewinn und eine Restentscheidung. Das ist eine Übungsauswahl, keine Vorgabe einer täglichen Tradezahl.",
      "Rechne danach tatsächliche Tranchen, Kosten und ungefüllte Angebote ab. Markier jede Änderung mit der neuen Beobachtung, die sie ausgelöst hat. Ein verpasster Trend, ein kontrollierter Verlust und bewusstes Flatbleiben sind prüfbare Ergebnisse desselben Lernprozesses."
    ],
    "callout": "Jede Planänderung braucht eine sichtbare neue Beobachtung.",
    "takeaways": [
      "Order und Management vorab als einen Plan notieren.",
      "Wenige Entscheidungen im Replay vollständig führen.",
      "Jede Planänderung braucht eine sichtbare neue Beobachtung."
    ],
    "prompt": "Was macht das Trend-Replay nachvollziehbar?",
    "answers": [
      {
        "label": "Erst alle Gewinne anschauen und dann Signale auswählen.",
        "explanation": "Das würde die Zukunft als Entscheidungshilfe nutzen."
      },
      {
        "label": "Nur die Anzahl grüner Bars zählen.",
        "explanation": "Damit fehlen Order, Risiko und Management."
      },
      {
        "label": "Vorab definierter Plan und zeitgerecht begründete Änderungen.",
        "explanation": "Richtig. So werden Einstieg, Haltung und Exit gemeinsam geprüft."
      }
    ],
    "correct": 2
  }
];

export const chapterEighteenLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-18-${number}`;
  return {
    id: `price-action-trends.chapter-18.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 18 · ${d.section}`,
    sourceAnchors: [`Kapitel 18 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 18 · Trend handeln',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Trendplan und Positionsführung beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
