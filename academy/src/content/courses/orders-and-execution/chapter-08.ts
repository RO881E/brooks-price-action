import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Slippage braucht einen vorher festgelegten Vergleich",
    "summary": "Ohne Preisart und Zeitpunkt ist eine Abweichung unklar.",
    "paragraphs": [
      "Lea möchte sechs Aktien der erfundenen Firma Arvo kaufen. Bei ihrer Entscheidung steht der beste Geldkurs bei 24,90 und der beste Briefkurs bei 25,10 Euro. Die Mitte zwischen beiden liegt bei 25,00. Diesen Mittelwert hält sie als Entscheidungsreferenz fest.",
      "Slippage beschreibt hier die Abweichung des tatsächlichen Ausführungspreises von einer vorher genannten Referenz. Beim Kauf ist ein höherer Preis ungünstiger, ein niedrigerer günstiger. Eine Referenz ist keine Zusage, dass Lea zu diesem Preis handeln kann.",
      "Alle Beispiele verwenden eigene Preisbilder und Gebührenregeln. Der Kursmittelwert 25,00 ist in unserem Bild kein vorhandenes Verkaufsangebot. Lea notiert Produkt, Seite, Menge, Preisart und Zeitpunkt, bevor sie später die Ausführungen bewertet."
    ],
    "columns": [
      {
        "title": "Entscheidungsbild",
        "tone": "neutral",
        "points": [
          "Geldkurs 24,90, Briefkurs 25,10.",
          "Mitte 25,00 als Referenz."
        ]
      },
      {
        "title": "Ausführungsprüfung",
        "tone": "positive",
        "points": [
          "Kauf höher als Referenz: ungünstig.",
          "Kauf niedriger als Referenz: günstig."
        ]
      }
    ],
    "prompt": "Welche Angabe macht die Slippage-Bewertung nachvollziehbar?",
    "answers": [
      {
        "label": "Eine vorher festgelegte Referenz mit Preisart und Zeitpunkt.",
        "explanation": "Richtig: Erst damit ist klar, womit der tatsächliche Preis verglichen wird."
      },
      {
        "label": "Ein beliebiger günstiger Kurs aus einem späteren Chart.",
        "explanation": "Ein nachträglich gewählter Kurs verändert den Vergleich."
      },
      {
        "label": "Nur die Zahl der gesendeten Aufträge.",
        "explanation": "Diese Zahl nennt weder Ausführungspreis noch Preisreferenz."
      }
    ],
    "correct": 0,
    "rule": "Lege Preisart, Zeitpunkt und Handelsseite fest, bevor du eine Abweichung beurteilst."
  },
  {
    "title": "Den Hauptkauf mengenrichtig ausrechnen",
    "summary": "Mehrere Preisstufen ergeben einen gewichteten Durchschnitt.",
    "paragraphs": [
      "Lea sendet eine Market-Kauforder über sechs Arvo-Aktien. Beim Verarbeiten sind zwei Stück zu 25,10 und vier zu 25,25 verfügbar. Weitere Buchänderungen und konkurrierende Aufträge lassen wir in diesem Schritt weg. Alle sechs Käufe werden bestätigt.",
      "Die ersten zwei kosten 50,20, die nächsten vier 101,00. Zusammen sind es 151,20 Euro Kaufwert. Geteilt durch sechs ergibt das einen durchschnittlichen Stückpreis von 25,20. Die Preisstufe mit vier Stück zählt doppelt so stark wie die mit zwei.",
      "Gegen die vorher festgelegte Entscheidungsmitte 25,00 beträgt die ungünstige Kaufabweichung 0,20 je Aktie. Für sechs sind das 1,20 Euro. Gebühren sind in diesem Vergleich noch nicht enthalten; sie werden später separat berechnet."
    ],
    "columns": [
      {
        "title": "Bestätigte Käufe",
        "tone": "neutral",
        "points": [
          "Zwei zu 25,10 und vier zu 25,25.",
          "Kaufwert 151,20 Euro."
        ]
      },
      {
        "title": "Durchschnitt und Abweichung",
        "tone": "positive",
        "points": [
          "Durchschnitt 25,20 je Aktie.",
          "Gegen Mitte 25,00: insgesamt 1,20 ungünstiger."
        ]
      }
    ],
    "prompt": "Welcher durchschnittliche Kaufpreis ergibt sich aus den Mengen?",
    "answers": [
      {
        "label": "25,10 Euro für alle sechs.",
        "explanation": "Zu diesem Preis waren nur zwei Stück verfügbar."
      },
      {
        "label": "25,20 Euro.",
        "explanation": "Richtig: 151,20 geteilt durch sechs ergibt 25,20."
      },
      {
        "label": "25,175 Euro ohne Mengenbezug.",
        "explanation": "Das mittelt nur die zwei Preisstufen gleich stark."
      }
    ],
    "correct": 1,
    "rule": "Gewichte jeden tatsächlichen Preis mit seiner ausgeführten Menge."
  },
  {
    "title": "Mitte und Briefkurs beantworten verschiedene Fragen",
    "summary": "Zwei Benchmarks sind keine zwei zusätzlichen Rechnungen.",
    "paragraphs": [
      "Der Hauptkauf hat Durchschnitt 25,20. Gegen die Entscheidungsmitte 25,00 beträgt die Abweichung 0,20 je Aktie. Gegen den Briefkurs 25,10 im unveränderten Ausgangsbild beträgt sie nur 0,10. Beide Zahlen können für denselben Kauf richtig sein.",
      "Von Mitte 25,00 bis zum ersten Briefkurs 25,10 liegen 0,10. Vom Briefkurs bis zum durchschnittlichen Kauf 25,20 liegen weitere 0,10. Für sechs Aktien sind das 0,60 plus 0,60, zusammen die schon bekannten 1,20 Euro.",
      "Die Abweichung zur Mitte enthält hier also bereits den Weg zum Briefkurs. Lea darf nicht 1,20 zur Mitte und nochmals 0,60 zum Briefkurs als voneinander unabhängige Mehrkosten addieren. Sie erklärt die Zerlegung einer einzigen Abweichung."
    ],
    "columns": [
      {
        "title": "Gegen die Mitte",
        "tone": "neutral",
        "points": [
          "25,20 minus 25,00 = 0,20 je Aktie.",
          "Sechs Stück: 1,20 Euro."
        ]
      },
      {
        "title": "Zerlegung",
        "tone": "positive",
        "points": [
          "Mitte bis Brief: 0,60 für sechs.",
          "Brief bis Durchschnitt: weitere 0,60."
        ]
      }
    ],
    "prompt": "Wie hoch ist die gesamte Kaufabweichung zur Mitte?",
    "answers": [
      {
        "label": "1,80 Euro durch Addition aller genannten Vergleiche.",
        "explanation": "Das zählt den Briefkursanteil doppelt."
      },
      {
        "label": "Nur 0,60 Euro, weil der Briefkurs die Mitte ersetzt.",
        "explanation": "Das wäre ausschließlich der andere Vergleich zum Briefkurs."
      },
      {
        "label": "1,20 Euro; die zwei Teile von 0,60 sind darin enthalten.",
        "explanation": "Richtig: Die Teile zerlegen denselben Vergleich statt zusätzliche Kosten zu erzeugen."
      }
    ],
    "correct": 2,
    "rule": "Nenne unterschiedliche Benchmarks getrennt und addiere keine überlappenden Preisvergleiche."
  },
  {
    "title": "Beim Verkauf dreht sich die ungünstige Richtung um",
    "summary": "Ein niedrigerer Verkaufspreis bringt weniger Erlös.",
    "paragraphs": [
      "Für den späteren Hauptverkauf hält Lea 25,60 als vorherige Verkaufsreferenz fest. Dann verkauft sie drei Arvo-Aktien zu 25,60 und drei zu 25,50. Die bestätigten Einzelpreise ergeben 76,80 plus 76,50, also 153,30 Euro Erlös.",
      "Der durchschnittliche Verkaufspreis ist 153,30 geteilt durch sechs, also 25,55. Er liegt 0,05 unter der Referenz 25,60. Beim Verkauf ist das ungünstiger: Lea erhält für sechs Stück insgesamt 0,30 weniger als im Referenzvergleich.",
      "Ein höherer Verkaufspreis wäre dagegen günstiger. Die gleiche Preisänderung hat bei Kauf und Verkauf deshalb unterschiedliche Bedeutung. Der Vergleich enthält noch keine Verkaufsgebühren und verändert nicht die tatsächlich gemeldeten Preise."
    ],
    "columns": [
      {
        "title": "Verkaufsbericht",
        "tone": "neutral",
        "points": [
          "Drei zu 25,60 und drei zu 25,50.",
          "Erlös 153,30, Durchschnitt 25,55."
        ]
      },
      {
        "title": "Referenz 25,60",
        "tone": "positive",
        "points": [
          "0,05 weniger je Aktie.",
          "Für sechs: 0,30 ungünstige Abweichung."
        ]
      }
    ],
    "prompt": "Welche Gesamtabweichung entsteht gegenüber der Verkaufsreferenz?",
    "answers": [
      {
        "label": "0,30 Euro ungünstiger.",
        "explanation": "Richtig: Sechs mal 0,05 weniger Verkaufserlös ergibt 0,30."
      },
      {
        "label": "0,30 Euro günstiger, weil der Preis niedriger ist.",
        "explanation": "Ein niedrigerer Preis hilft einem Käufer, bringt einem Verkäufer aber weniger Erlös."
      },
      {
        "label": "0,60 Euro zusätzlich berechnete Gebühr.",
        "explanation": "Die Zahl beschreibt Preisabweichung, nicht eine separat erhobene Gebühr."
      }
    ],
    "correct": 0,
    "rule": "Für Käufer sind höhere Preise ungünstig, für Verkäufer niedrigere."
  },
  {
    "title": "Auch günstige Preisabweichungen sind möglich",
    "summary": "Slippage muss nicht immer ein Nachteil sein.",
    "paragraphs": [
      "Ein getrenntes Kaufbeispiel verwendet wieder die vorherige Mitte 25,00. Eine eigene Ausführungsmeldung bestätigt sechs Arvo-Aktien zu je 24,98. Dieses alternative Ergebnis stammt nicht aus dem unveränderten Hauptbuch; sein späteres Angebot hat sich entsprechend verändert.",
      "Der Kaufwert beträgt 149,88 Euro. Gegen sechs mal 25,00, also 150,00, sind das 0,12 weniger. Die Kaufabweichung ist um 0,02 je Aktie günstig. Manche Auswertungen nennen günstige Abweichungen negative Slippage.",
      "Wir nennen Betrag und Richtung ausdrücklich, weil Vorzeichenregeln verschieden sein können. Das günstige Ergebnis ist kein Versprechen für zukünftige Orders. Gebühren müssen weiterhin nach dem vereinbarten Tarif berücksichtigt werden."
    ],
    "columns": [
      {
        "title": "Eigene Alternative",
        "tone": "neutral",
        "points": [
          "Sechs Käufe zu 24,98.",
          "Kaufwert 149,88 Euro."
        ]
      },
      {
        "title": "Gegen Referenz 25,00",
        "tone": "positive",
        "points": [
          "0,02 je Aktie günstiger.",
          "Für sechs: 0,12 günstiger."
        ]
      }
    ],
    "prompt": "Wie ist die alternative Kaufabweichung zu beurteilen?",
    "answers": [
      {
        "label": "Keine Abweichung, weil Gebühren noch fehlen.",
        "explanation": "Der Preisvergleich ist bereits möglich; Gebühren sind eine separate Rechnung."
      },
      {
        "label": "0,12 Euro insgesamt günstiger als die Referenz.",
        "explanation": "Richtig: 150,00 minus 149,88 ergibt 0,12."
      },
      {
        "label": "0,12 Euro ungünstiger, weil es eine Abweichung gibt.",
        "explanation": "Die Richtung der Abweichung ist bei einem niedrigeren Kaufpreis günstig."
      }
    ],
    "correct": 1,
    "rule": "Gib Betrag und günstige oder ungünstige Richtung an statt nur ein uneindeutiges Vorzeichen."
  },
  {
    "title": "Preisverbesserung hängt ebenfalls vom Vergleich ab",
    "summary": "Besser als ein Angebot kann schlechter als die Mitte sein.",
    "paragraphs": [
      "Ein anderer Lernfall bestätigt sechs Käufe zu 25,08. Der festgelegte zeitgleiche Vergleichsbriefkurs beträgt 25,10. Gegen diesen Briefkurs ist der Kaufpreis 0,02 je Aktie besser, insgesamt 0,12. Das nennen wir Preisverbesserung gegenüber diesem Angebot.",
      "Gegen die Entscheidungsmitte 25,00 kostet derselbe Kauf aber 0,08 je Aktie mehr, für sechs insgesamt 0,48. Preisverbesserung zum Angebot bedeutet deshalb nicht automatisch eine günstige Abweichung gegenüber jeder anderen Referenz.",
      "Die zeitgleichen Angebote und die frühere Entscheidungsreferenz werden getrennt dokumentiert. Wir verwenden eigene Vergleichsbilder, keine Kennzahl eines echten Anbieters. Eine Prozentwerbung ohne Referenz, Mengen und betrachtete Orderarten genügt nicht zur Bewertung des eigenen Auftrags."
    ],
    "columns": [
      {
        "title": "Gegen Briefkurs 25,10",
        "tone": "neutral",
        "points": [
          "Kauf 25,08 ist 0,02 günstiger.",
          "Preisverbesserung für sechs: 0,12."
        ]
      },
      {
        "title": "Gegen Mitte 25,00",
        "tone": "positive",
        "points": [
          "Kauf 25,08 ist 0,08 teurer.",
          "Abweichung für sechs: 0,48 ungünstiger."
        ]
      }
    ],
    "prompt": "Welche Aussagen können beim Kauf zu 25,08 zugleich stimmen?",
    "answers": [
      {
        "label": "Besser als Brief bedeutet zwingend günstiger als jede Mitte.",
        "explanation": "Diese Schlussfolgerung ignoriert die unterschiedlichen Vergleichswerte."
      },
      {
        "label": "Preisverbesserung beweist einen späteren Verkaufsgewinn.",
        "explanation": "Ein günstigerer Kaufvergleich sagt keinen späteren Verkauf voraus."
      },
      {
        "label": "Besser als Brief 25,10, aber teurer als Mitte 25,00.",
        "explanation": "Richtig: Die Aussagen verwenden verschiedene Referenzen."
      }
    ],
    "correct": 2,
    "rule": "Prüfe auch bei Preisverbesserung den konkreten Vergleich und seine Zeitangabe."
  },
  {
    "title": "Entscheidung und Ankunft können andere Marktpreise haben",
    "summary": "Eine beobachtete Bewegung erklärt ihre Ursache noch nicht.",
    "paragraphs": [
      "Im Hauptvergleich liegt die Entscheidungsmitte bei 25,00. Ein getrenntes Zeitbeispiel hält beim Ankommen der Order dagegen eine Mitte von 25,15 fest. Der bestätigte Kaufdurchschnitt liegt weiterhin bei 25,20. Alle Zeitstempel beziehen sich auf dieselbe synchronisierte Lernuhr.",
      "Gegen die Entscheidungsmitte sind es 0,20 je Aktie, gegen die Ankunftsmitte 0,05. Die Differenz von 0,15 beschreibt die beobachtete Marktbewegung zwischen beiden Messpunkten. Sie ist keine zweite Kontogebühr.",
      "Aus diesen Angaben allein wissen wir nicht, ob andere Teilnehmer, neue Nachrichten oder Leas Auftrag die Veränderung verursacht haben. Die Auswertung trennt gemessene Preisbewegung von vermuteter Ursache. Ein späterer Marktanstieg beweist nicht automatisch einen Fehler des Handelswegs."
    ],
    "columns": [
      {
        "title": "Entscheidung",
        "tone": "neutral",
        "points": [
          "Mitte 25,00.",
          "Kaufvergleich je Aktie 0,20."
        ]
      },
      {
        "title": "Ankunft",
        "tone": "positive",
        "points": [
          "Mitte 25,15.",
          "Kaufvergleich je Aktie 0,05."
        ]
      }
    ],
    "prompt": "Was lässt sich allein aus den beiden Mittelkursen sicher sagen?",
    "answers": [
      {
        "label": "Die Mitte hat sich zwischen den Messpunkten um 0,15 erhöht.",
        "explanation": "Richtig: Die Preisbewegung ist beobachtet, ihre Ursache daraus noch nicht bewiesen."
      },
      {
        "label": "Leas Auftrag hat sicher die ganze Bewegung verursacht.",
        "explanation": "Die Messpunkte belegen keine alleinige Ursache."
      },
      {
        "label": "Es wurden zusätzlich 0,15 Gebühren abgebucht.",
        "explanation": "Ein Marktpreisvergleich ist keine Gebührenmeldung."
      }
    ],
    "correct": 0,
    "rule": "Halte Entscheidung, Ankunft und Ausführung auseinander und behaupte keine ungeprüfte Ursache."
  },
  {
    "title": "Auftragsgebühr und Stückgebühr getrennt rechnen",
    "summary": "Unser Tarif zählt den Auftrag und die tatsächlich gehandelten Stücke.",
    "paragraphs": [
      "Der eigene Haupttarif verlangt 0,30 Euro je tatsächlich ausgeführtem Auftrag. Zusätzlich verlangt er 0,02 je ausgeführter Aktie. Eine unvollständig oder gar nicht ausgeführte Menge wird für die Stückgebühr nicht mitgezählt. Für einen völlig unausgeführten Auftrag fällt hier auch keine Auftragsgebühr an.",
      "Der Hauptkauf handelt sechs Aktien in zwei Preisgruppen, bleibt aber ein Auftrag. Die Auftragsgebühr beträgt einmal 0,30, die Stückgebühr sechs mal 0,02, also 0,12. Zusammen erhält der Anbieter 0,42 Euro.",
      "Teilausführungen lösen in diesem Tarif keine zweite feste Auftragsgebühr aus. Andere Anbieter können andere Regeln haben. Lea liest deshalb die Gebührengrundlage und den Ausführungsbericht, statt die Zahl der Meldungen mit der Zahl kostenpflichtiger Orders gleichzusetzen."
    ],
    "columns": [
      {
        "title": "Feste Komponente",
        "tone": "neutral",
        "points": [
          "Ein ausgeführter Kaufauftrag.",
          "Einmal 0,30 Euro."
        ]
      },
      {
        "title": "Variable Komponente",
        "tone": "positive",
        "points": [
          "Sechs ausgeführte Aktien mal 0,02.",
          "0,12 Stückgebühr, zusammen 0,42."
        ]
      }
    ],
    "prompt": "Wie hoch ist die Anbietergebühr für den Hauptkauf?",
    "answers": [
      {
        "label": "0,12 Euro ohne feste Komponente.",
        "explanation": "Der Haupttarif enthält zusätzlich 0,30 je ausgeführtem Auftrag."
      },
      {
        "label": "0,42 Euro.",
        "explanation": "Richtig: Einmal 0,30 plus sechs mal 0,02 ergibt 0,42."
      },
      {
        "label": "0,72 Euro wegen der zwei Preisgruppen.",
        "explanation": "Das würde die feste Gebühr zweimal statt je Auftrag einmal zählen."
      }
    ],
    "correct": 1,
    "rule": "Lies, ob eine Gebühr je Auftrag, je Ausführung oder je gehandeltem Stück gilt."
  },
  {
    "title": "Zusätzliche Handelskosten zur Kontobelastung addieren",
    "summary": "Die Geldbilanz beginnt mit dem wirklichen Kaufwert.",
    "paragraphs": [
      "Zusätzlich zur Anbietergebühr berechnet unser Hauptmodell eine Handelsplatzgebühr von 0,01 je ausgeführter Aktie. Bei sechs Aktien sind das 0,06 Euro. Der Lernanbieter reicht diese Gebühr vollständig weiter; es gibt keine weiteren Zuschläge.",
      "Der Kaufwert aus den tatsächlichen Preisen beträgt 151,20. Dazu kommen 0,42 Anbietergebühr und 0,06 Handelsplatzgebühr. Insgesamt wird das Konto mit 151,68 Euro belastet. Für spätere Steuerfragen macht dieser vereinfachte Fall keine Rechnung.",
      "Die Kaufabweichung von 1,20 gegenüber der Mitte ist schon im tatsächlichen Kaufwert enthalten. Sie wird nicht noch einmal zur Kontobelastung addiert. Kosten, die als eigene Geldbuchung entstehen, nennen wir hier explizite Kosten."
    ],
    "columns": [
      {
        "title": "Ausgeführter Kauf",
        "tone": "neutral",
        "points": [
          "Kaufwert 151,20 Euro.",
          "Anbietergebühr 0,42 Euro."
        ]
      },
      {
        "title": "Zusätzliche Buchung",
        "tone": "positive",
        "points": [
          "Handelsplatzgebühr 0,06 Euro.",
          "Kontobelastung insgesamt 151,68 Euro."
        ]
      }
    ],
    "prompt": "Welche Kontobelastung ergibt der Hauptkauf?",
    "answers": [
      {
        "label": "152,88 Euro einschließlich nochmals 1,20 Slippage.",
        "explanation": "Die tatsächlichen Kaufpreise enthalten diese Abweichung bereits."
      },
      {
        "label": "150,48 Euro auf Basis der Entscheidungsmitte.",
        "explanation": "Die Mitte war die Referenz, nicht der tatsächliche Kaufpreis."
      },
      {
        "label": "151,68 Euro.",
        "explanation": "Richtig: 151,20 plus 0,42 plus 0,06 ergibt 151,68."
      }
    ],
    "correct": 2,
    "rule": "Addiere eigene Geldgebühren zu tatsächlichen Handelswerten und vermeide doppelte Preisanteile."
  },
  {
    "title": "Zwei getrennte Orders können zwei feste Gebühren auslösen",
    "summary": "Mehr Meldungen und mehr Aufträge sind nicht dasselbe.",
    "paragraphs": [
      "Ein eigener Gebührenvergleich verteilt dieselben sechs tatsächlichen Käufe auf zwei Orderkennungen. Die erste Order kauft zwei zu 25,10 und eine zu 25,25. Die zweite kauft drei zu 25,25. Die Preis- und Mengenberichte sind ausdrücklich vorgegeben, kein Versprechen identischer Ausführungen bei echter Aufteilung.",
      "Der Kaufwert bleibt 151,20. Die feste Auftragsgebühr fällt nun zweimal an: 0,60 statt 0,30. Die sechs Stück kosten weiterhin 0,12 Stückgebühr und 0,06 Handelsplatzgebühr. Alle Kaufgebühren zusammen betragen 0,78 statt 0,48.",
      "Die zusätzliche feste Gebühr erhöht die Kontobelastung auf 151,98. Diese Rechnung bewertet nur die vorgegebenen Berichte und den Tarif. In echten Märkten kann eine Aufteilung auch Preise, Wartezeit und Ausführbarkeit verändern."
    ],
    "columns": [
      {
        "title": "Eine Order",
        "tone": "neutral",
        "points": [
          "Dieselben sechs Stück, eine Kennung.",
          "Gesamte Kaufgebühren 0,48."
        ]
      },
      {
        "title": "Zwei Orders",
        "tone": "positive",
        "points": [
          "Dieselben vorgegebenen Käufe, zwei Kennungen.",
          "Gesamte Kaufgebühren 0,78."
        ]
      }
    ],
    "prompt": "Wie viel zusätzliche Gebühr verursacht die zweite Kennung in diesem Tarifvergleich?",
    "answers": [
      {
        "label": "0,30 Euro.",
        "explanation": "Richtig: Die variable Menge bleibt gleich, nur die feste Gebühr fällt zusätzlich an."
      },
      {
        "label": "0,06 Euro.",
        "explanation": "Das ist die unveränderte Handelsplatzgebühr für alle sechs Stück."
      },
      {
        "label": "0,78 Euro zusätzlich zur Gebühr von 0,48.",
        "explanation": "0,78 ist der neue Gesamtbetrag, nicht der Unterschied."
      }
    ],
    "correct": 0,
    "rule": "Vergleiche Orderkennungen und Tarifkomponenten, ohne identische Marktpreise zu versprechen."
  },
  {
    "title": "Eine Mindestgebühr kann kleine Mengen anders treffen",
    "summary": "Ein Mindestbetrag wird nicht zusätzlich zum berechneten Betrag addiert.",
    "paragraphs": [
      "Ein anderer Lernanbieter verwendet statt des Haupttarifs nur 0,05 Euro je ausgeführter Aktie, mindestens 0,30 je ausgeführtem Auftrag. In diesem getrennten Fall gibt es keine weiteren Gebühren. Es gilt der größere der zwei Beträge.",
      "Für zwei ausgeführte Aktien wäre die Stückrechnung 0,10. Die Mindestgebühr hebt sie auf 0,30. Für acht Aktien ergibt die Stückrechnung 0,40; das ist bereits höher als die Mindestgebühr und bleibt 0,40.",
      "Die Mindestgebühr 0,30 wird nicht nochmals auf 0,40 aufgeschlagen. Sie ist eine Untergrenze in dieser eigenen Tarifregel. Lea prüft außerdem, ob ein Mindestbetrag pro Auftrag, Tag oder anderer Abrechnungseinheit gilt."
    ],
    "columns": [
      {
        "title": "Zwei Aktien",
        "tone": "neutral",
        "points": [
          "Stückrechnung 0,10.",
          "Mindestgebühr ergibt 0,30."
        ]
      },
      {
        "title": "Acht Aktien",
        "tone": "positive",
        "points": [
          "Stückrechnung 0,40.",
          "Gebühr 0,40, kein weiterer Mindestaufschlag."
        ]
      }
    ],
    "prompt": "Wie hoch ist die Gebühr für acht Aktien bei diesem anderen Tarif?",
    "answers": [
      {
        "label": "Immer 0,30 Euro unabhängig von der Menge.",
        "explanation": "Bei acht Aktien ist die Stückrechnung höher als der Mindestbetrag."
      },
      {
        "label": "0,40 Euro.",
        "explanation": "Richtig: Die berechneten 0,40 überschreiten bereits das Minimum 0,30."
      },
      {
        "label": "0,70 Euro.",
        "explanation": "Das würde die Untergrenze zusätzlich zum schon ausreichenden Betrag addieren."
      }
    ],
    "correct": 1,
    "rule": "Eine Mindestgebühr ist im beschriebenen Tarif eine Untergrenze und kein zusätzlicher Summand."
  },
  {
    "title": "Null Auftragsprovision bedeutet nicht null Gesamtkosten",
    "summary": "Preisunterschiede und andere Buchungen bleiben zu prüfen.",
    "paragraphs": [
      "Ein eigener Nullprovisionsfall streicht die feste und variable Anbieterprovision. Die tatsächlichen sechs Kaufpreise bleiben wie im Hauptbuch und ergeben 151,20 Euro. Eine ausdrücklich vereinbarte Handelsplatzgebühr von 0,01 je Aktie bleibt aber bestehen.",
      "Das Konto wird mit 151,26 Euro belastet. Gegen einen rein gedachten Kauf von sechs zu 25,00 liegt die Belastung 1,26 höher: 1,20 Preisabweichung und 0,06 zusätzliche Gebühr. Der Referenzkauf war kein vorhandenes ausführbares Angebot.",
      "Bei echten Angeboten müssen auch andere Kosten wie Datenzugang oder laufende Kontogebühren nach ihrem Tarif geprüft werden. Dieser Fall behauptet keine Preise eines realen Anbieters. Das Wort kostenlos allein beschreibt weder Ausführungspreise noch alle möglichen Geldbuchungen."
    ],
    "columns": [
      {
        "title": "Null Anbieterprovision",
        "tone": "neutral",
        "points": [
          "Kaufwert trotzdem 151,20.",
          "Handelsplatzgebühr hier weiter 0,06."
        ]
      },
      {
        "title": "Kontobelastung",
        "tone": "positive",
        "points": [
          "151,26 Euro insgesamt.",
          "Preisvergleich zur Mitte bleibt eine eigene Bewertung."
        ]
      }
    ],
    "prompt": "Welche Belastung gilt im ausdrücklich beschriebenen Nullprovisionsfall?",
    "answers": [
      {
        "label": "150,00 Euro allein aus der Entscheidungsmitte.",
        "explanation": "Null Provision ändert die tatsächlichen Kaufpreise nicht."
      },
      {
        "label": "Null Euro, weil der Anbieter keine Provision verlangt.",
        "explanation": "Die Aktien selbst haben einen Kaufwert."
      },
      {
        "label": "151,26 Euro.",
        "explanation": "Richtig: Der wirkliche Kaufwert plus weiterbestehende Handelsplatzgebühr ergibt 151,26."
      }
    ],
    "correct": 2,
    "rule": "Prüfe tatsächliche Preise und den vollständigen Tarif auch bei Nullprovisionsangeboten."
  },
  {
    "title": "Kauf und Verkauf ergeben erst zusammen den Nettogewinn",
    "summary": "Eine Verkaufsgebühr gehört auf die Erlösseite.",
    "paragraphs": [
      "Wir verbinden jetzt nur die beiden Hauptaufträge. Der Kaufwert beträgt 151,20, der spätere Verkaufserlös 153,30. Das ergibt 2,10 Euro Bruttogewinn aus den tatsächlichen Preisen. Alle sechs gekauften Aktien wurden verkauft; Bestand null.",
      "Für jeden der zwei ausgeführten Aufträge gelten 0,30 fest, sechs mal 0,02 Stückgebühr und sechs mal 0,01 Handelsplatzgebühr. Je Seite sind das 0,48, zusammen 0,96. Der Nettogewinn nach diesen Modellkosten beträgt 2,10 minus 0,96, also 1,14.",
      "Als Kontorechnung werden beim Kauf 151,68 belastet und beim Verkauf 153,30 minus 0,48, also 152,82 gutgeschrieben. Die Differenz ist wieder 1,14. Steuern und weitere Kosten sind ausdrücklich nicht Teil dieses Lernmodells."
    ],
    "columns": [
      {
        "title": "Handelswerte",
        "tone": "neutral",
        "points": [
          "Verkauf 153,30 minus Kauf 151,20.",
          "Bruttogewinn 2,10 Euro."
        ]
      },
      {
        "title": "Nach Modellgebühren",
        "tone": "positive",
        "points": [
          "Kauf und Verkauf zusammen 0,96.",
          "Nettogewinn 1,14 Euro."
        ]
      }
    ],
    "prompt": "Welcher Nettogewinn folgt aus den beiden Hauptaufträgen?",
    "answers": [
      {
        "label": "1,14 Euro.",
        "explanation": "Richtig: 2,10 Bruttogewinn minus 0,96 Modellgebühren ergibt 1,14."
      },
      {
        "label": "2,10 Euro.",
        "explanation": "Dieser Betrag berücksichtigt die Gebühren noch nicht."
      },
      {
        "label": "1,62 Euro nach nur einer Seite Gebühren.",
        "explanation": "Auch der ausgeführte Verkauf hat Gebühren von 0,48."
      }
    ],
    "correct": 0,
    "rule": "Rechne beide Handelsseiten und alle im Modell enthaltenen Gebühren zusammen."
  },
  {
    "title": "Die Gewinnschwelle aus den bekannten Kosten ableiten",
    "summary": "Ein kostendeckender Durchschnitt ist keine Ausführungszusage.",
    "paragraphs": [
      "Lea hat sechs Aktien mit Kaufwert 151,20 gekauft. Für diesen Kauf und einen vollständigen Verkauf von sechs sind im Haupttarif zusammen 0,96 Gebühren festgelegt. Für Nettogewinn null muss der spätere Verkaufserlös deshalb 152,16 betragen.",
      "152,16 geteilt durch sechs ergibt 25,36 Euro als nötigen durchschnittlichen Verkaufspreis. Das ist die Gewinnschwelle dieses vereinfachten Falls. Ein Durchschnitt von 25,20 würde nur den Kaufwert decken und nach Gebühren einen Verlust lassen.",
      "Die Rechnung setzt vollständige Verkäufe von sechs, denselben Tarif und keine weiteren Kosten voraus. Sie sagt nicht, dass Käufer zu 25,36 bereitstehen. Tatsächliche Ausführungen können mehrere Preise haben; der erforderliche Durchschnitt ist keine garantierte einzelne Preisstufe."
    ],
    "columns": [
      {
        "title": "Kostendeckender Erlös",
        "tone": "neutral",
        "points": [
          "Kaufwert 151,20 plus beide Seiten Gebühren 0,96.",
          "Nötiger Erlös 152,16."
        ]
      },
      {
        "title": "Durchschnitt",
        "tone": "positive",
        "points": [
          "152,16 geteilt durch sechs.",
          "Gewinnschwelle 25,36 je Aktie."
        ]
      }
    ],
    "prompt": "Welcher durchschnittliche Verkaufspreis deckt Kaufwert und beide Modellgebühren?",
    "answers": [
      {
        "label": "25,00 Euro als Entscheidungsmitte.",
        "explanation": "Der wirkliche Kauf war teurer und hatte eigene Gebühren."
      },
      {
        "label": "25,36 Euro.",
        "explanation": "Richtig: Sechs mal 25,36 ergibt 152,16 und deckt die angegebenen Kosten."
      },
      {
        "label": "25,20 Euro.",
        "explanation": "Das deckt nur den Kaufwert ohne die zusätzlichen Gebühren."
      }
    ],
    "correct": 1,
    "rule": "Berechne eine Gewinnschwelle nur mit den angegebenen Mengen und Kostenannahmen."
  },
  {
    "title": "Den Spread nicht nochmals vom Ergebnis abziehen",
    "summary": "Tatsächliche Preise enthalten bereits die Preiswege.",
    "paragraphs": [
      "Der Hauptkauf wurde durchschnittlich zu 25,20 und der Hauptverkauf zu 25,55 ausgeführt. Aus den tatsächlichen sechs Stück je Seite entsteht Bruttogewinn 2,10. Nach den Modellgebühren sind es 1,14.",
      "Im früheren Entscheidungsbild war der Spread 25,10 minus 24,90, also 0,20. Diesen historischen Spread nochmals mit sechs zu multiplizieren und vom Nettogewinn abzuziehen wäre keine weitere Kontobuchung. Die tatsächlichen Kauf- und Verkaufspreise stehen schon in der Ergebnisrechnung.",
      "Spreadvergleiche können erklären, wie teuer ein Handel relativ zu einem Preisbild war. Sie sind aber keine zusätzliche Gebühr auf bereits verwendete Ausführungen. Das gilt genauso für die Kaufabweichung zur Mitte und die Verkaufsabweichung zu ihrer Referenz."
    ],
    "columns": [
      {
        "title": "Ergebnis aus Trades",
        "tone": "neutral",
        "points": [
          "Tatsächliche Preise: brutto 2,10.",
          "Nach eigenen Gebühren netto 1,14."
        ]
      },
      {
        "title": "Keine Doppelzählung",
        "tone": "positive",
        "points": [
          "Historischen Spread nicht zusätzlich abbuchen.",
          "Slippage-Benchmarks ebenfalls nicht nochmals abziehen."
        ]
      }
    ],
    "prompt": "Was bleibt der Nettogewinn bei korrekter Rechnung aus tatsächlichen Trades?",
    "answers": [
      {
        "label": "Minus 0,06 Euro nach nochmals 1,20 Spreadabzug.",
        "explanation": "Das würde Preisanteile zusätzlich zu den tatsächlichen Preisen zählen."
      },
      {
        "label": "2,34 Euro durch Gutschrift des alten Spreads.",
        "explanation": "Ein historischer Spread ist auch keine eigene Gutschrift."
      },
      {
        "label": "1,14 Euro ohne zusätzlichen Spreadabzug.",
        "explanation": "Richtig: Der Spreadvergleich ist keine neue Geldbuchung."
      }
    ],
    "correct": 2,
    "rule": "Trenne erklärende Preisvergleiche von zusätzlichen Gebühren in der Geldbilanz."
  },
  {
    "title": "Ein nicht ausgeführtes Limit ist kein bestätigter Gewinn",
    "summary": "Ein entgangener Vergleich ist eine hypothetische Bewertung.",
    "paragraphs": [
      "Ein getrennter Lernauftrag möchte sechs Arvo-Aktien mit Kauflimit 25,00. Es gibt während seiner Gültigkeit keine eigene Ausführung. Danach liegt ein Vergleichskurs bei 26,00. Lea besitzt aus diesem Auftrag keine Aktie.",
      "Für eine rein hypothetische Bewertung nehmen wir ausdrücklich an, sechs Aktien wären rechtzeitig zu 25,00 gekauft und später zu 26,00 verkauft worden. Ohne Gebühren wäre diese gedachte Differenz 6,00 Euro. Wir nennen sie hier einen entgangenen Vergleich oder Opportunitätskosten.",
      "Der angenommene Kauf war tatsächlich nicht geschehen und seine Ausführbarkeit ist nicht bewiesen. Die 6,00 sind deshalb weder realisierter Gewinn noch bestätigte Abbuchung. Solche Bewertungen brauchen klare Annahmen und dürfen nicht stillschweigend in die echte Kontobilanz eingehen."
    ],
    "columns": [
      {
        "title": "Tatsächlich",
        "tone": "neutral",
        "points": [
          "Null eigene Käufe.",
          "Aus diesem Auftrag kein Bestand und kein Verkaufsgewinn."
        ]
      },
      {
        "title": "Hypothetischer Vergleich",
        "tone": "positive",
        "points": [
          "Angenommene sechs Käufe 25,00 und Verkäufe 26,00.",
          "Gedachte Differenz 6,00 vor Kosten."
        ]
      }
    ],
    "prompt": "Welche Aussage ist für die echte Kontobilanz korrekt?",
    "answers": [
      {
        "label": "Die gedachten 6,00 Euro sind kein bestätigter Handelsgewinn oder Gebührenabzug.",
        "explanation": "Richtig: Die angenommenen Trades fanden nicht statt."
      },
      {
        "label": "Lea hat sicher 6,00 Euro verdient.",
        "explanation": "Ohne gekaufte Aktien gab es keinen solchen eigenen Verkauf."
      },
      {
        "label": "Der Anbieter muss sicher 6,00 Euro als Gebühr abbuchen.",
        "explanation": "Die hypothetische Differenz ist keine vereinbarte Geldgebühr."
      }
    ],
    "correct": 0,
    "rule": "Kennzeichne entgangene Vergleiche als hypothetisch und halte sie aus tatsächlichen Geldbuchungen heraus."
  },
  {
    "title": "Einen günstigen Teilfill nicht mit einer vollen Ausführung verwechseln",
    "summary": "Preisqualität und Mengenabdeckung sind zwei Prüfungen.",
    "paragraphs": [
      "Ein eigener Alternativbericht bestätigt nur zwei Käufe zu 25,10 von sechs gewünschten Aktien. Vier Stück sind nach der angegebenen Restregel noch offen. Der Durchschnitt der bisher ausgeführten Menge ist 25,10, niedriger als 25,20 im vollständig ausgeführten Hauptfall.",
      "Damit ist aber nicht derselbe Handelswunsch erfüllt. Die Ausführungsquote beträgt zwei von sechs, also ein Drittel. Die übrigen vier sind noch nicht im Bestand. Ihren zukünftigen Preis kennen wir nicht und setzen ihn nicht stillschweigend auf 25,10.",
      "Ob der bessere Teilpreis den offenen Rest aufwiegt, lässt sich ohne Ziel und weitere Angaben nicht entscheiden. Lea berichtet Preis, ausgeführte Menge und Restzustand zusammen. Fehlende Ausführungen verschwinden sonst aus einer scheinbar günstigen Durchschnittszahl."
    ],
    "columns": [
      {
        "title": "Alternativer Teilbericht",
        "tone": "neutral",
        "points": [
          "Zwei von sechs zu 25,10 gekauft.",
          "Vier offen, Quote ein Drittel."
        ]
      },
      {
        "title": "Hauptbericht",
        "tone": "positive",
        "points": [
          "Sechs von sechs, Durchschnitt 25,20.",
          "Vollständig ausgeführt."
        ]
      }
    ],
    "prompt": "Welche Ausführungsquote hat der alternative Teilbericht?",
    "answers": [
      {
        "label": "Zwei zusätzliche Aktien neben den sechs.",
        "explanation": "Die zwei sind ein Teil der gewünschten sechs."
      },
      {
        "label": "Ein Drittel, also zwei von sechs.",
        "explanation": "Richtig: Vier gewünschte Stücke sind noch nicht ausgeführt."
      },
      {
        "label": "Hundert Prozent, weil die zwei einen guten Preis hatten.",
        "explanation": "Ein günstiger Preis ersetzt die fehlende Menge nicht."
      }
    ],
    "correct": 1,
    "rule": "Vergleiche Ausführungspreis und erfüllte Menge gemeinsam, einschließlich des offenen Rests."
  },
  {
    "title": "Wartezeit vom richtigen Ereignis aus messen",
    "summary": "Annahme, erster Fill und letzter Fill haben eigene Zeitpunkte.",
    "paragraphs": [
      "Eine eigene Zeitmessung verwendet dieselbe synchronisierte Lernuhr. Lea sendet bei 100 Millisekunden. Die Annahme wird bei 120 gemeldet, die erste Ausführung bei 170 und die letzte bei 230. Eine Millisekunde ist ein Tausendstel einer Sekunde.",
      "Vom Senden bis zur ersten Ausführung sind es 70 Millisekunden. Bis zur letzten sind es 130. Die 20 Millisekunden bis zur Annahme sind eine andere Messung. Die Zahl 70 darf nicht als Dauer bis zum vollständigen Abschluss bezeichnet werden.",
      "Bei echten Systemen können Uhren, Datenwege und Meldungsverzögerungen unterschiedlich sein. Eine Zeitmessung braucht daher Ereignisnamen und vergleichbare Zeitstempel. Auch eine lange gemessene Dauer beweist allein noch nicht, wer eine Preisbewegung verursacht hat."
    ],
    "columns": [
      {
        "title": "Erste Ereignisse",
        "tone": "neutral",
        "points": [
          "Senden 100, Annahme 120.",
          "Erster Fill 170."
        ]
      },
      {
        "title": "Vollständiger Abschluss",
        "tone": "positive",
        "points": [
          "Letzter Fill 230.",
          "Von Senden bis zuletzt: 130 Millisekunden."
        ]
      }
    ],
    "prompt": "Wie lange dauert es von Senden bis zur letzten Ausführung auf der Lernuhr?",
    "answers": [
      {
        "label": "70 Millisekunden.",
        "explanation": "Das misst nur bis zur ersten Ausführung."
      },
      {
        "label": "20 Millisekunden.",
        "explanation": "Das misst nur bis zur Annahme."
      },
      {
        "label": "130 Millisekunden.",
        "explanation": "Richtig: 230 minus 100 ergibt 130."
      }
    ],
    "correct": 2,
    "rule": "Nenne Start- und Endereignis sowie die verwendete Uhr bei jeder Latenzmessung."
  },
  {
    "title": "Preis und Gebühren bei zwei Wegen gemeinsam vergleichen",
    "summary": "Der günstigere Stückpreis kann die höhere Belastung ergeben.",
    "paragraphs": [
      "Zwei getrennte Lernwege führen jeweils sechs Käufe vollständig aus. Weg A bestätigt Durchschnitt 25,20 und gesamte Kaufgebühren 0,48. Weg B bestätigt Durchschnitt 25,15 und gesamte Kaufgebühren 0,90. Mengen, Währung und Bewertungszeitraum sind gleich; andere Unterschiede betrachten wir hier nicht.",
      "Weg A kostet sechs mal 25,20 plus 0,48, also 151,68. Weg B kostet sechs mal 25,15 plus 0,90, also 151,80. Obwohl Weg B den niedrigeren Stückpreis hat, ist seine tatsächliche Belastung 0,12 höher.",
      "Die beiden Berichte sind eigene Alternativen und werden nicht gleichzeitig gehandelt. Diese kleine Gegenprobe macht keine Rangliste realer Anbieter. Für eine vollständige Bewertung wären außerdem Zeit, Restregeln und weitere Ziele zu prüfen."
    ],
    "columns": [
      {
        "title": "Weg A",
        "tone": "neutral",
        "points": [
          "Sechs zu Durchschnitt 25,20, Gebühren 0,48.",
          "Belastung 151,68."
        ]
      },
      {
        "title": "Weg B",
        "tone": "positive",
        "points": [
          "Sechs zu Durchschnitt 25,15, Gebühren 0,90.",
          "Belastung 151,80."
        ]
      }
    ],
    "prompt": "Welcher Weg hat im angegebenen Vergleich die niedrigere Kaufbelastung?",
    "answers": [
      {
        "label": "Weg A mit 151,68 Euro.",
        "explanation": "Richtig: Der bessere Preis von B gleicht dessen höhere Gebühren hier nicht aus."
      },
      {
        "label": "Weg B allein wegen des Stückpreises 25,15.",
        "explanation": "Die gesamte Belastung von B beträgt 151,80."
      },
      {
        "label": "Beide haben dieselbe Belastung, weil die Menge gleich ist.",
        "explanation": "Gleiche Mengen heben Preis- und Gebührenunterschiede nicht auf."
      }
    ],
    "correct": 0,
    "rule": "Vergleiche den tatsächlichen Gesamtbetrag bei gleich abgegrenzten Fällen."
  },
  {
    "title": "Mehrere Orders nach gehandelter Menge zusammenfassen",
    "summary": "Ein einfacher Mittelwert der Orderdurchschnitte kann täuschen.",
    "paragraphs": [
      "Ein eigener Sammelbericht enthält einen Kaufauftrag über sechs mit Durchschnitt 25,20 und einen über zwei mit Durchschnitt 25,10. Beide sind vollständig ausgeführt. Die Kaufwerte lauten 151,20 und 50,20, zusammen 201,40 Euro für acht Aktien.",
      "Der gemeinsame Durchschnitt ist 201,40 geteilt durch acht, also 25,175. Gegen eine für beide vorher festgelegte Referenz 25,00 ergibt sich die gesamte ungünstige Preisabweichung 201,40 minus 200,00, also 1,40. Gebühren sind in dieser Preiskennzahl nicht enthalten.",
      "Der ungewichtete Mittelwert 25,15 würde beide Orders gleich stark zählen, obwohl sie verschiedene Mengen haben. Ein Durchschnitt darf mehr Dezimalstellen als eine einzelne Preisstufe besitzen. Für die Geldsumme verwenden wir die tatsächlichen Kaufwerte und runden nicht jeden Zwischenschritt auf Cent."
    ],
    "columns": [
      {
        "title": "Zwei Orderberichte",
        "tone": "neutral",
        "points": [
          "Sechs zu Durchschnitt 25,20.",
          "Zwei zu Durchschnitt 25,10."
        ]
      },
      {
        "title": "Gemeinsame Kennzahl",
        "tone": "positive",
        "points": [
          "Kaufwert 201,40 für acht Aktien.",
          "Abweichung zur gemeinsamen Referenz: 1,40 Euro."
        ]
      }
    ],
    "prompt": "Wie groß ist die gesamte Kaufabweichung zur Referenz 25,00?",
    "answers": [
      {
        "label": "0,10 Euro als Unterschied der zwei Durchschnitte.",
        "explanation": "Der Unterschied der Durchschnitte ist nicht die gesamte Abweichung zur Referenz."
      },
      {
        "label": "1,40 Euro.",
        "explanation": "Richtig: 201,40 tatsächlicher Kaufwert minus acht mal 25,00 ergibt 1,40."
      },
      {
        "label": "1,20 Euro aus acht mal dem ungewichteten Unterschied 0,15.",
        "explanation": "Das ignoriert die unterschiedlichen Mengen der beiden Orders."
      }
    ],
    "correct": 1,
    "rule": "Fasse Preise mit ihren gehandelten Mengen zusammen und vermeide frühes Runden."
  },
  {
    "title": "Ausführungsqualität braucht mehrere passende Angaben",
    "summary": "Eine einzelne Kennzahl beschreibt nicht den ganzen Auftrag.",
    "paragraphs": [
      "Lea sammelt je Order Produkt, Seite, gewünschte und ausgeführte Menge, Vergleichspreise mit Zeiten, Einzelpreise, Gebühren und Reststatus. Ausführungsgeschwindigkeit und Vollständigkeit ergänzen die Preisbewertung. Ein sehr guter Teilpreis kann einen wichtigen offenen Rest verdecken.",
      "Sie vergleicht ähnliche Fälle: dieselbe Orderart, ähnliche Mengen und vergleichbare Marktphasen. Eine kleine sofort ausführbare Order ist kein fairer direkter Maßstab für ein großes weit entferntes Limit. Auch Mittelwerte können einzelne ungünstige Verläufe verstecken.",
      "Ein einzelner Lernfall beweist keinen besten Anbieter. Ausführungsqualität ist hier eine nachvollziehbare Prüfung von Preis, Kosten, Menge und Zeit gegen den vorherigen Handelswunsch. Reale rechtliche Pflichten oder Anbieterbewertungen werden daraus nicht abgeleitet."
    ],
    "columns": [
      {
        "title": "Je Order prüfen",
        "tone": "neutral",
        "points": [
          "Preisreferenz, tatsächliche Menge, Gebühren.",
          "Zeitpunkte und offener Rest."
        ]
      },
      {
        "title": "Vergleich abgrenzen",
        "tone": "positive",
        "points": [
          "Ähnliche Orderarten und Bedingungen.",
          "Einzelne Abweichungen neben Mittelwerten ansehen."
        ]
      }
    ],
    "prompt": "Was ergänzt einen günstigen durchschnittlichen Ausführungspreis sinnvoll?",
    "answers": [
      {
        "label": "Nur ein später besonders günstiger Chartpunkt.",
        "explanation": "Das wäre eine neue nachträgliche Referenz ohne passenden Vergleich."
      },
      {
        "label": "Die Annahme, dass jede schnelle Order vollständig ausgeführt ist.",
        "explanation": "Erste Ausführung und vollständiger Abschluss können auseinanderliegen."
      },
      {
        "label": "Ausgeführte Menge, Reststatus, Gebühren und vergleichbare Zeitangaben.",
        "explanation": "Richtig: Diese Angaben zeigen weitere Teile des Handelswunschs."
      }
    ],
    "correct": 2,
    "rule": "Prüfe Preis, Kosten, Menge und Zeit anhand ähnlicher Fälle statt nur einer günstigen Zahl."
  },
  {
    "title": "Den Hauptfall als Geld- und Mengenbilanz abschließen",
    "summary": "Bewertungszahlen dürfen die bestätigte Kontobilanz nicht verändern.",
    "paragraphs": [
      "Der Hauptkauf bestätigt zwei Aktien zu 25,10 und vier zu 25,25. Kaufwert 151,20 und eigene Kaufgebühren 0,48 ergeben Belastung 151,68. Die Referenzmitte 25,00 erklärt eine Preisabweichung von 1,20, ist aber kein weiterer Rechnungsbetrag.",
      "Der Hauptverkauf bestätigt drei Aktien zu 25,60 und drei zu 25,50. Erlös 153,30 minus Verkaufsgebühren 0,48 ergibt Gutschrift 152,82. Aus sechs Käufen und sechs Verkäufen bleibt Bestand null; beide Aufträge haben keinen offenen Rest.",
      "Die Differenz der Geldbuchungen lautet 152,82 minus 151,68, also 1,14 Euro. Alle anderen Fälle sind unabhängige Vergleiche. Lea kann nun Referenzen, tatsächliche Preise, explizite Gebühren und hypothetische entgangene Chancen getrennt erklären, ohne dieselben Kosten doppelt zu zählen."
    ],
    "columns": [
      {
        "title": "Kaufabschluss",
        "tone": "neutral",
        "points": [
          "Belastung 151,68 Euro.",
          "Sechs Aktien tatsächlich gekauft."
        ]
      },
      {
        "title": "Verkaufsabschluss",
        "tone": "positive",
        "points": [
          "Gutschrift 152,82 Euro, Bestand null.",
          "Differenz netto 1,14, keine Orderreste."
        ]
      }
    ],
    "prompt": "Welcher Abschlussbericht passt zum Hauptfall?",
    "answers": [
      {
        "label": "Bestand null, keine Orderreste, 1,14 Euro Gewinn nach Modellgebühren.",
        "explanation": "Richtig: Tatsächliche Mengen und Geldbuchungen ergeben diesen Abschluss."
      },
      {
        "label": "Bestand sechs, weil die ursprüngliche Order sechs kaufen sollte.",
        "explanation": "Die späteren sechs Verkäufe haben den Bestand geschlossen."
      },
      {
        "label": "6,00 Euro Gewinn aus dem unausgeführten Limitfall zusätzlich.",
        "explanation": "Diese gedachte Alternative gehört nicht in die Hauptkontobilanz."
      }
    ],
    "correct": 0,
    "rule": "Schließe die Auswertung mit bestätigten Trades, Restzuständen und tatsächlichen Geldbuchungen ab."
  }
];
export const ordersChapterEightLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-08.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 8 · Slippage, Gebühren und Ausführungsqualität',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 8', title: draft.title,
        paragraphs: draft.paragraphs, callout: draft.rule,
      },
      {
        id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick',
        columns: draft.columns.map((column) => ({ ...column, tone: column.tone as 'neutral' | 'positive' })),
      },
      {
        id: `${key}.question`, type: 'question', title: 'Kurz prüfen',
        prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`,
        options: draft.answers.map((answer, optionIndex) => ({ id: `choice-${optionIndex}`, ...answer })),
      },
      {
        id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit',
        points: [draft.rule, draft.summary],
      },
    ],
  };
});
