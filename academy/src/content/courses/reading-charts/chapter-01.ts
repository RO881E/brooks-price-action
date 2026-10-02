import type { Lesson, ChartScenarioId } from '../../types';
const drafts = [
  {
    "title": "Ein Chart ordnet Preise und Zeit",
    "summary": "Ein Bild wird erst mit Achsen und Datenquelle verständlich.",
    "paragraphs": [
      "Nora öffnet einen Chart der erfundenen Aktie Vela. Auf der waagerechten Achse stehen Zeitabschnitte. Auf der senkrechten Achse stehen Euro je Aktie. Ein höherer Punkt bedeutet in diesem Bild einen höheren Preis.",
      "Ein Chart ist eine Darstellung ausgewählter Daten. Wir verwenden bestätigte Geschäfte aus einem eigenen Übungsdatensatz. Das Bild ist weder ein neuer Auftrag noch eine Zusage, zu diesen Preisen handeln zu können.",
      "Vor dem Lesen prüft Nora Produkt, Preiseinheit, Zeitabschnitt und Datenart. Derselbe Bildausschnitt könnte bei einem anderen Produkt oder einer anderen Skala etwas anderes bedeuten. Alle folgenden Bilder sind eigene, vereinfachte Schaubilder."
    ],
    "columns": [
      {
        "title": "Zeitachse",
        "tone": "neutral",
        "points": [
          "Links früher, rechts später.",
          "Hier drei abgeschlossene Minuten."
        ]
      },
      {
        "title": "Preisachse",
        "tone": "positive",
        "points": [
          "Euro je Vela-Aktie.",
          "Höher im Bild heißt höherer Preis."
        ]
      }
    ],
    "prompt": "Was steht auf der senkrechten Achse dieser Schaubilder?",
    "answers": [
      {
        "label": "Euro je Vela-Aktie.",
        "explanation": "Richtig: Prüfe Achsen, Produkt und Datenart, bevor du das Bild deutest."
      },
      {
        "label": "Die Anzahl ihrer offenen Orders.",
        "explanation": "Unsere Achse zeigt Preise, keine Aufträge."
      },
      {
        "label": "Eine sichere Gewinnwahrscheinlichkeit.",
        "explanation": "Das Chartbild enthält keine solche Zusage."
      }
    ],
    "correct": 0,
    "rule": "Prüfe Achsen, Produkt und Datenart, bevor du das Bild deutest.",
    "diagram": "rc1-line"
  },
  {
    "title": "Gehandelte Preise sind keine aktuellen Angebote",
    "summary": "Ein vergangenes Geschäft ist nicht die eigene Ausführung.",
    "paragraphs": [
      "In Noras Datensatz steht um 09:00:10 ein Geschäft zu 50,00 Euro. Das bedeutet: Zu diesem Zeitpunkt wurde eine Vela-Aktie oder Menge tatsächlich gehandelt. Nora selbst war daran nicht beteiligt.",
      "Der aktuelle Geldkurs ist ein Kaufangebot, der Briefkurs ein Verkaufsangebot. Ein Chart aus letzten Geschäften zeigt etwas anderes als ein Chart aus Geld- oder Briefkursen. Die Datenart muss genannt sein.",
      "Wenn Nora jetzt kaufen möchte, braucht sie aktuelle passende Verkaufsangebote und eine eigene Bestätigung. Der frühere Punkt 50,00 allein beweist keinen aktuellen Kaufpreis. Die folgenden OHLC-Werte werden ausdrücklich aus gehandelten Preisen gebildet."
    ],
    "columns": [
      {
        "title": "Geschäftsdaten",
        "tone": "neutral",
        "points": [
          "Vergangene bestätigte Preise.",
          "Kein Beleg für Noras eigene Order."
        ]
      },
      {
        "title": "Angebotsdaten",
        "tone": "positive",
        "points": [
          "Aktueller Geld- oder Briefkurs.",
          "Andere Datenart als letzter Handel."
        ]
      }
    ],
    "prompt": "Was beweist ein früheres Geschäft zu 50,00 für Noras jetzigen Kauf?",
    "answers": [
      {
        "label": "Dass der Briefkurs jetzt sicher 50,00 ist.",
        "explanation": "Ein vergangener Handel ist kein aktuelles Verkaufsangebot."
      },
      {
        "label": "Keinen garantierten jetzigen Kaufpreis.",
        "explanation": "Richtig: Unterscheide vergangene Geschäfte, aktuelle Angebote und die eigene Ausführung."
      },
      {
        "label": "Dass Nora bereits gekauft hat.",
        "explanation": "Der Datensatz enthält nicht ihre Order."
      }
    ],
    "correct": 1,
    "rule": "Unterscheide vergangene Geschäfte, aktuelle Angebote und die eigene Ausführung.",
    "diagram": "rc1-bar"
  },
  {
    "title": "Eine Minute aus einzelnen Geschäften bilden",
    "summary": "Der Abschnitt muss vor dem Zusammenfassen feststehen.",
    "paragraphs": [
      "Die erste Übungsminute beginnt um 09:00 und endet unmittelbar vor 09:01. Geschäfte genau um 09:01 gehören zur nächsten Minute. Der Zeitstempel unserer Minutenanzeige nennt den Beginn des Abschnitts.",
      "In der ersten Minute liegen vier Geschäfte: 09:00:10 zu 50,00 über vier Aktien; 09:00:25 zu 50,30 über zwei; 09:00:40 zu 49,80 über drei; 09:00:55 zu 50,20 über eine. Alle Zeiten verwenden dieselbe Uhr.",
      "Daraus wird ein Minuten-Bar, also eine Zusammenfassung dieses Zeitabschnitts. Die Auswahl der vier Kennwerte ist eine Rechenregel. Sie erfindet keinen Handel genau am Minutenbeginn oder Minutenende."
    ],
    "columns": [
      {
        "title": "Abschnitt",
        "tone": "neutral",
        "points": [
          "09:00 bis unmittelbar vor 09:01.",
          "Vier genannte Geschäfte."
        ]
      },
      {
        "title": "Zuordnung",
        "tone": "positive",
        "points": [
          "09:00:55 gehört zur ersten Minute.",
          "09:01:00 gehört zur nächsten."
        ]
      }
    ],
    "prompt": "Zu welcher Minute gehört ein Geschäft genau um 09:01:00 nach unserer Regel?",
    "answers": [
      {
        "label": "Zur ersten Minute ab 09:00.",
        "explanation": "Die erste Minute endet unmittelbar vor 09:01."
      },
      {
        "label": "Zu beiden Minuten gleichzeitig.",
        "explanation": "Unsere Regel ordnet jedes Geschäft nur einmal zu."
      },
      {
        "label": "Zur nächsten Minute ab 09:01.",
        "explanation": "Richtig: Lege die Zeitgrenzen fest und ordne jedes Geschäft genau einem Abschnitt zu."
      }
    ],
    "correct": 2,
    "rule": "Lege die Zeitgrenzen fest und ordne jedes Geschäft genau einem Abschnitt zu.",
    "diagram": "rc1-bar"
  },
  {
    "title": "Eröffnung und Schluss als erstes und letztes Geschäft lesen",
    "summary": "O und C beziehen sich auf den gewählten Abschnitt.",
    "paragraphs": [
      "Das erste Geschäft der ersten Minute liegt um 09:00:10 bei 50,00. Dieser Preis ist die Eröffnung des Minuten-Bars. Englisch heißt sie Open; dafür steht der Buchstabe O.",
      "Das letzte Geschäft des abgeschlossenen Abschnitts liegt um 09:00:55 bei 50,20. Das ist sein Schluss, englisch Close oder C. Beide Werte werden nicht als Durchschnitt berechnet.",
      "Ein Minuten-Open ist nicht automatisch die Eröffnung des ganzen Börsentages. Ein Minuten-Close bedeutet auch nicht, dass der Markt danach geschlossen ist. Es sind der erste und letzte vorhandene Preis dieses ausgewählten Abschnitts."
    ],
    "columns": [
      {
        "title": "Eröffnung O",
        "tone": "neutral",
        "points": [
          "Erstes Geschäft im Abschnitt.",
          "50,00 Euro."
        ]
      },
      {
        "title": "Schluss C",
        "tone": "positive",
        "points": [
          "Letztes Geschäft im Abschnitt.",
          "50,20 Euro."
        ]
      }
    ],
    "prompt": "Welcher Schluss gehört zur ersten abgeschlossenen Minute?",
    "answers": [
      {
        "label": "50,20 Euro.",
        "explanation": "Richtig: Lies Eröffnung und Schluss als ersten und letzten Preis des festgelegten Abschnitts."
      },
      {
        "label": "50,00 Euro.",
        "explanation": "Das ist die Eröffnung."
      },
      {
        "label": "50,30 Euro.",
        "explanation": "Das ist das Hoch, nicht das letzte Geschäft."
      }
    ],
    "correct": 0,
    "rule": "Lies Eröffnung und Schluss als ersten und letzten Preis des festgelegten Abschnitts.",
    "diagram": "rc1-bar"
  },
  {
    "title": "Hoch und Tief aus derselben Minute bestimmen",
    "summary": "H und L suchen die höchsten und niedrigsten gehandelten Preise.",
    "paragraphs": [
      "Die vier Preise der ersten Minute sind 50,00, 50,30, 49,80 und 50,20. Der höchste ist 50,30. Er heißt Hoch, englisch High oder H. Der niedrigste ist 49,80: Tief, englisch Low oder L.",
      "Damit sind die vier Kennwerte O50,00, H50,30, L49,80 und C50,20. Die Abkürzung OHLC nennt diese vier Werte in genau dieser Reihenfolge. Jeder Wert gehört zu derselben Minute und Datenart.",
      "Eine spätere Minute kann andere Hochs und Tiefs haben. Die einzelnen Werte dürfen nicht beliebig zwischen Abschnitten getauscht werden. Ein ungültiges Bild wäre etwa ein Schluss oberhalb seines eigenen höchsten gehandelten Preises."
    ],
    "columns": [
      {
        "title": "Vier Kennwerte",
        "tone": "neutral",
        "points": [
          "O50,00, H50,30.",
          "L49,80, C50,20."
        ]
      },
      {
        "title": "Gemeinsamer Bezug",
        "tone": "positive",
        "points": [
          "Dieselbe Minute und Datenart.",
          "Eröffnung und Schluss liegen innerhalb H und L."
        ]
      }
    ],
    "prompt": "Welches Hoch und Tief gehören zur ersten Minute?",
    "answers": [
      {
        "label": "Hoch 49,80 und Tief 50,30.",
        "explanation": "Das vertauscht höchste und niedrigste Preise."
      },
      {
        "label": "Hoch 50,30 und Tief 49,80.",
        "explanation": "Richtig: Bestimme Hoch und Tief aus allen vorhandenen Preisen desselben Abschnitts."
      },
      {
        "label": "Hoch 50,20 und Tief 50,00.",
        "explanation": "Das wären nur Schluss und Eröffnung; die anderen Geschäfte fehlen."
      }
    ],
    "correct": 1,
    "rule": "Bestimme Hoch und Tief aus allen vorhandenen Preisen desselben Abschnitts.",
    "diagram": "rc1-bar"
  },
  {
    "title": "Die gesamte Preisspanne berechnen",
    "summary": "Hoch minus Tief ist etwas anderes als Schluss minus Eröffnung.",
    "paragraphs": [
      "Für die erste Minute beträgt die Preisspanne 50,30 minus 49,80, also 0,50 Euro je Aktie. Sie umfasst die gesamte Entfernung zwischen höchstem und niedrigstem Preis.",
      "Die Veränderung vom ersten zum letzten Geschäft beträgt dagegen 50,20 minus 50,00, also plus 0,20. Die Minute endete höher, obwohl innerhalb der Minute auch 49,80 gehandelt wurde.",
      "Die Spanne verrät nicht, wie viele Aktien gehandelt wurden oder wie viel Nora verdient hat. Sie ist eine Preisentfernung. Ohne eigene Käufe, Verkäufe und Kosten ist daraus kein persönlicher Gewinn zu berechnen."
    ],
    "columns": [
      {
        "title": "Preisspanne",
        "tone": "neutral",
        "points": [
          "50,30 − 49,80 = 0,50.",
          "Gesamte Entfernung von Tief bis Hoch."
        ]
      },
      {
        "title": "Netto-Preisänderung",
        "tone": "positive",
        "points": [
          "50,20 − 50,00 = +0,20.",
          "Nur Schluss gegenüber Eröffnung."
        ]
      }
    ],
    "prompt": "Wie groß ist die gesamte Preisspanne der ersten Minute?",
    "answers": [
      {
        "label": "0,20 Euro je Aktie.",
        "explanation": "Das ist nur Schluss minus Eröffnung."
      },
      {
        "label": "10 Aktien.",
        "explanation": "Das ist eine Menge und keine Preisentfernung."
      },
      {
        "label": "0,50 Euro je Aktie.",
        "explanation": "Richtig: Unterscheide Hoch-Tief-Spanne und Schluss-Eröffnungs-Änderung."
      }
    ],
    "correct": 2,
    "rule": "Unterscheide Hoch-Tief-Spanne und Schluss-Eröffnungs-Änderung.",
    "diagram": "rc1-bar"
  },
  {
    "title": "Im Balkenchart links die Eröffnung und rechts den Schluss lesen",
    "summary": "Ein OHLC-Balken kodiert vier Preise ohne breiten Körper.",
    "paragraphs": [
      "Unser Balkenbild zeichnet eine senkrechte Linie vom Tief 49,80 bis zum Hoch 50,30. Der kurze Strich links markiert O50,00. Der kurze Strich rechts markiert C50,20.",
      "Diese Zeichnung wird auch OHLC-Bar genannt. Das englische Wort Bar meint hier den Balken, nicht ein neues Geschäft. Die Breite der kurzen Striche hat in unserem Schaubild keinen Mengenwert.",
      "Es gibt auch Darstellungen mit nur Hoch, Tief und Schluss. In unseren beschrifteten Bildern ist die Eröffnung enthalten. Nora prüft die Darstellung, statt aus jedem senkrechten Balken ungefragt vier Kennwerte abzuleiten."
    ],
    "columns": [
      {
        "title": "Langer Strich",
        "tone": "neutral",
        "points": [
          "Von Tief 49,80 bis Hoch 50,30.",
          "Zeigt die ganze Preisspanne."
        ]
      },
      {
        "title": "Kurze Striche",
        "tone": "positive",
        "points": [
          "Links O50,00.",
          "Rechts C50,20."
        ]
      }
    ],
    "prompt": "Welcher kleine Strich zeigt in unserem OHLC-Balken den Schluss?",
    "answers": [
      {
        "label": "Der Strich rechts.",
        "explanation": "Richtig: Lies die markierten Kennwerte nach der ausdrücklich verwendeten Balkendarstellung."
      },
      {
        "label": "Der Strich links.",
        "explanation": "Links steht in dieser Darstellung die Eröffnung."
      },
      {
        "label": "Die obere Spitze.",
        "explanation": "Die Spitze markiert das Hoch."
      }
    ],
    "correct": 0,
    "rule": "Lies die markierten Kennwerte nach der ausdrücklich verwendeten Balkendarstellung.",
    "diagram": "rc1-bar"
  },
  {
    "title": "Der Kerzenkörper verbindet Eröffnung und Schluss",
    "summary": "Die breitere Fläche ist nur ein Teil der gesamten Spanne.",
    "paragraphs": [
      "Die Kerze der ersten Minute hat einen Körper von 50,00 bis 50,20. Das ist die breitere Fläche zwischen Eröffnung und Schluss. Ihr Körper ist damit 0,20 Euro hoch.",
      "Die feinen Linien darüber und darunter reichen zu Hoch 50,30 und Tief 49,80. Sie heißen Schatten oder Dochte. Der obere Schatten ist 0,10, der untere 0,20 Euro lang.",
      "Der Körper reicht nicht bis zum Hoch oder Tief, wenn diese außerhalb von Eröffnung und Schluss liegen. Seine Breite ist in unserem Bild nur eine Zeichenbreite; sie zeigt kein Handelsvolumen."
    ],
    "columns": [
      {
        "title": "Körper",
        "tone": "neutral",
        "points": [
          "O50,00 bis C50,20.",
          "Körperhöhe 0,20."
        ]
      },
      {
        "title": "Schatten",
        "tone": "positive",
        "points": [
          "Oben bis H50,30: 0,10.",
          "Unten bis L49,80: 0,20."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Körper der ersten Kerze?",
    "answers": [
      {
        "label": "0,10 Euro.",
        "explanation": "Das ist der obere Schatten."
      },
      {
        "label": "0,20 Euro.",
        "explanation": "Richtig: Unterscheide Kerzenkörper und Schatten, statt die gesamte Spanne als Körper zu lesen."
      },
      {
        "label": "0,50 Euro.",
        "explanation": "Das ist die gesamte Hoch-Tief-Spanne."
      }
    ],
    "correct": 1,
    "rule": "Unterscheide Kerzenkörper und Schatten, statt die gesamte Spanne als Körper zu lesen.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Eine Kerzenfarbe braucht eine erklärte Regel",
    "summary": "Farbe allein ist kein Kaufauftrag und keine Prognose.",
    "paragraphs": [
      "Unsere Zeichnung verwendet für Schluss über Eröffnung eine gefüllte Kerze mit aufwärts gerichteter Kennzeichnung. Für Schluss unter Eröffnung verwendet sie die entgegengesetzte Darstellung. Die Beschriftung nennt die Preise zusätzlich.",
      "In der ersten Minute gilt 50,20 größer als 50,00. Die Kerze zeigt deshalb einen höheren Schluss als ihre eigene Eröffnung. Das sagt nicht, dass der nächste Preis steigen muss oder dass Nora kaufen sollte.",
      "Andere Oberflächen können Farben verändern oder andere Vergleichsregeln benutzen. Nora liest deshalb O und C und die Bildlegende. Eine Farbe ohne Regel ist keine ausreichende Preisbeschreibung."
    ],
    "columns": [
      {
        "title": "Unsere Regel",
        "tone": "neutral",
        "points": [
          "C größer O: Schluss höher.",
          "C kleiner O: Schluss niedriger."
        ]
      },
      {
        "title": "Aussagegrenze",
        "tone": "positive",
        "points": [
          "Vergleich innerhalb dieser Kerze.",
          "Keine Zusage für den nächsten Preis."
        ]
      }
    ],
    "prompt": "Was bedeutet die Aufwärtskennzeichnung der ersten Kerze hier?",
    "answers": [
      {
        "label": "Die nächste Minute steigt sicher.",
        "explanation": "Die Darstellung beweist keine Zukunft."
      },
      {
        "label": "Nora hat automatisch Gewinn.",
        "explanation": "Das Bild zeigt keine eigene Position und keine Kosten."
      },
      {
        "label": "Der Schluss liegt über ihrer eigenen Eröffnung.",
        "explanation": "Richtig: Prüfe die Farbregel und bestätige sie mit Eröffnung und Schluss."
      }
    ],
    "correct": 2,
    "rule": "Prüfe die Farbregel und bestätige sie mit Eröffnung und Schluss.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Eine fallende Kerze mit vier Preisen prüfen",
    "summary": "Auch ein niedrigerer Schluss hat ein eigenes Hoch und Tief.",
    "paragraphs": [
      "Die zweite abgeschlossene Minute hat O50,40, H50,50, L50,10 und C50,15. Der Schluss liegt 0,25 unter der Eröffnung. Ihr Körper reicht von 50,15 bis 50,40.",
      "Die gesamte Spanne ist 50,50 minus 50,10, also 0,40. Der obere Schatten misst 0,10; der untere 0,05. Körper und Schatten ergeben zusammen wieder die gesamte Spanne.",
      "Die höhere Eröffnung gegenüber dem vorherigen Schluss 50,20 ist ein getrennter Vergleich. Zwischen den Minuten wurde nicht jede Zwischenstufe bestätigt. Eine fallende Kerze bedeutet nur C kleiner O in diesem Abschnitt."
    ],
    "columns": [
      {
        "title": "Minute zwei",
        "tone": "neutral",
        "points": [
          "O50,40, H50,50.",
          "L50,10, C50,15."
        ]
      },
      {
        "title": "Maße",
        "tone": "positive",
        "points": [
          "Körper 0,25, gesamte Spanne 0,40.",
          "Oberer Schatten 0,10, unterer 0,05."
        ]
      }
    ],
    "prompt": "Wie groß ist der Körper der zweiten Kerze?",
    "answers": [
      {
        "label": "0,25 Euro.",
        "explanation": "Richtig: Berechne den Körper als absolute Entfernung zwischen Eröffnung und Schluss."
      },
      {
        "label": "0,40 Euro.",
        "explanation": "Das ist die gesamte Spanne."
      },
      {
        "label": "0,05 Euro.",
        "explanation": "Das ist nur der untere Schatten."
      }
    ],
    "correct": 0,
    "rule": "Berechne den Körper als absolute Entfernung zwischen Eröffnung und Schluss.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Gleiche Eröffnung und gleicher Schluss bedeuten keine Ruhe",
    "summary": "Ein Doji kann trotzdem eine deutliche Preisspanne haben.",
    "paragraphs": [
      "Die dritte Minute hat O50,10, H50,20, L49,90 und C50,10. Eröffnung und Schluss sind gleich. Der Körper wird in unserem Bild als schmaler waagerechter Strich gezeichnet.",
      "Eine Kerze mit gleichem oder sehr nahe liegendem O und C wird häufig Doji genannt. Hier sind beide genau gleich. Trotzdem beträgt die gesamte Spanne 50,20 minus 49,90, also 0,30 Euro.",
      "Der gleiche Start- und Endpreis beweist nicht, dass dazwischen kein Handel stattfand. Er zeigt auch keine sichere spätere Umkehr. Für eine Bewertung braucht es weitere Daten und einen passenden Zusammenhang."
    ],
    "columns": [
      {
        "title": "Start und Ende",
        "tone": "neutral",
        "points": [
          "O50,10 und C50,10.",
          "Körperhöhe null."
        ]
      },
      {
        "title": "Zwischenwerte",
        "tone": "positive",
        "points": [
          "H50,20 und L49,90.",
          "Spanne 0,30."
        ]
      }
    ],
    "prompt": "Welche Spanne hat diese Kerze trotz O gleich C?",
    "answers": [
      {
        "label": "0,10 Euro.",
        "explanation": "Das wäre nur der Abstand vom Schluss zum Hoch."
      },
      {
        "label": "0,30 Euro.",
        "explanation": "Richtig: Gleiche Eröffnung und gleicher Schluss bedeuten nicht, dass keine Preisbewegung stattfand."
      },
      {
        "label": "Null Euro.",
        "explanation": "Gleiche Endpunkte entfernen die zwischenzeitlichen Hochs und Tiefs nicht."
      }
    ],
    "correct": 1,
    "rule": "Gleiche Eröffnung und gleicher Schluss bedeuten nicht, dass keine Preisbewegung stattfand.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Ein Linienchart zeigt hier nur die Schlusswerte",
    "summary": "Die gezeichnete Verbindung ergänzt keine unbekannten Geschäfte.",
    "paragraphs": [
      "Unser Linienchart verbindet die drei abgeschlossenen Minuten-Schlüsse 50,20, 50,15 und 50,10. Jeder markierte Punkt gehört zum Schluss eines Abschnitts. Die Achsenbeschriftung lautet deshalb Minute eins, zwei und drei.",
      "Die Linie enthält nicht die Hochs, Tiefs oder Eröffnungen dieser Minuten. So fehlt das zweite Hoch 50,50 in dieser Darstellung. Das ist keine fehlerhafte Datenrechnung, sondern eine bewusst kleinere Auswahl.",
      "Die geraden Strecken zwischen den Punkten sind eine Zeichenverbindung. Sie beweisen nicht, dass der Kurs dazwischen gleichmäßig verlief oder jeden Zwischenpreis gehandelt hat. Andere Liniencharts können andere Preisquellen verwenden; hier ist es ausdrücklich der Schluss."
    ],
    "columns": [
      {
        "title": "Verwendete Punkte",
        "tone": "neutral",
        "points": [
          "C1 50,20; C2 50,15; C3 50,10.",
          "Nur abgeschlossene Schlusswerte."
        ]
      },
      {
        "title": "Nicht dargestellt",
        "tone": "positive",
        "points": [
          "Eröffnungen, Hochs und Tiefs.",
          "Keine belegte gleichmäßige Zwischenbewegung."
        ]
      }
    ],
    "prompt": "Welcher Wert fehlt als eigener Punkt in unserem Schluss-Linienchart?",
    "answers": [
      {
        "label": "Der Schluss 50,15 der zweiten Minute.",
        "explanation": "Dieser Wert gehört zu den drei Punkten."
      },
      {
        "label": "Der Schluss 50,10 der dritten Minute.",
        "explanation": "Auch dieser Schluss ist ausdrücklich enthalten."
      },
      {
        "label": "Das Hoch 50,50 der zweiten Minute.",
        "explanation": "Richtig: Lies einen Linienchart nach seiner gewählten Preisquelle und erfinde keine Zwischenbewegung."
      }
    ],
    "correct": 2,
    "rule": "Lies einen Linienchart nach seiner gewählten Preisquelle und erfinde keine Zwischenbewegung.",
    "diagram": "rc1-line"
  },
  {
    "title": "Balken und Kerzen können dieselben Daten zeigen",
    "summary": "Darstellung wechseln heißt nicht automatisch Daten wechseln.",
    "paragraphs": [
      "Für die erste Minute zeigt der OHLC-Balken O50,00, H50,30, L49,80 und C50,20. Die Kerze daneben verwendet genau diese vier Werte. Beide beschreiben denselben abgeschlossenen Abschnitt.",
      "Beim Balken markieren kleine Seitenstriche O und C. Bei der Kerze verbindet sie ein breiter Körper. Die Schatten und die lange Balkenlinie reichen zu denselben Hochs und Tiefs.",
      "Nora kann zwischen diesen beiden Darstellungen wechseln, ohne daraus neue Geschäfte zu machen. Ein Wechsel zum Schluss-Linienchart reduziert dagegen die sichtbar verwendeten Werte. Sie prüft Datenquelle und Zeichenregel getrennt."
    ],
    "columns": [
      {
        "title": "OHLC-Balken",
        "tone": "neutral",
        "points": [
          "O und C als Seitenstriche.",
          "H und L als Enden der langen Linie."
        ]
      },
      {
        "title": "Kerze",
        "tone": "positive",
        "points": [
          "O und C begrenzen den Körper.",
          "H und L begrenzen die Schatten."
        ]
      }
    ],
    "prompt": "Was bleibt beim beschriebenen Wechsel vom Balken zur Kerze gleich?",
    "answers": [
      {
        "label": "Die vier OHLC-Werte derselben Minute.",
        "explanation": "Richtig: Trenne die Zeichnung von den Daten, auf denen sie beruht."
      },
      {
        "label": "Die genaue Reihenfolge aller Geschäfte wird sichtbar.",
        "explanation": "Vier Kennwerte enthalten nicht jede Zwischenstation."
      },
      {
        "label": "Eine neue Ausführung wird erzeugt.",
        "explanation": "Ein Darstellungswechsel ist kein Auftrag."
      }
    ],
    "correct": 0,
    "rule": "Trenne die Zeichnung von den Daten, auf denen sie beruht.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Vier Kennwerte verraten nicht die gesamte Reihenfolge",
    "summary": "Gleiche OHLC-Werte können verschiedene Wege enthalten.",
    "paragraphs": [
      "Der erste Abschnitt entstand bei uns aus dem Weg 50,00 → 50,30 → 49,80 → 50,20. Hier kam das Hoch vor dem Tief. Diese Reihenfolge kennen wir nur, weil die einzelnen Geschäfte genannt wurden.",
      "Ein anderer möglicher Abschnitt könnte 50,00 → 49,80 → 50,30 → 50,20 zeigen. Auch er hätte O50,00, H50,30, L49,80 und C50,20. In diesem alternativen Verlauf käme aber das Tief zuerst.",
      "Die abgeschlossene Kerze allein trennt diese beiden Wege nicht. Nora darf daher nicht aus ihrer Form behaupten, welcher Zwischenpreis zuerst erreicht wurde. Für eine zeitliche Entscheidung braucht sie die dazu passenden Einzel- oder feineren Daten."
    ],
    "columns": [
      {
        "title": "Weg A",
        "tone": "neutral",
        "points": [
          "O → H → L → C.",
          "Hoch vor Tief."
        ]
      },
      {
        "title": "Weg B",
        "tone": "positive",
        "points": [
          "O → L → H → C.",
          "Tief vor Hoch; dieselbe Kerze."
        ]
      }
    ],
    "prompt": "Was lässt sich aus dieser Kerze allein nicht bestimmen?",
    "answers": [
      {
        "label": "Ihr Hoch 50,30.",
        "explanation": "Auch das Hoch ist ausdrücklich enthalten."
      },
      {
        "label": "Ob das Hoch oder das Tief zuerst kam.",
        "explanation": "Richtig: Leite aus vier Kennwerten keine unbelegte Reihenfolge der Zwischenpreise ab."
      },
      {
        "label": "Ihr Schluss 50,20.",
        "explanation": "Der Schluss ist einer der vier bekannten Werte."
      }
    ],
    "correct": 1,
    "rule": "Leite aus vier Kennwerten keine unbelegte Reihenfolge der Zwischenpreise ab.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Eine laufende Kerze ist noch nicht abgeschlossen",
    "summary": "Ihr aktueller letzter Preis kann sich bis zum Ende ändern.",
    "paragraphs": [
      "In einer eigenen Live-Variante steht die erste Minute erst bei 09:00:30. Bisher wurden 50,00 und 50,30 gehandelt. Zu diesem Stand gelten O50,00, H50,30, L50,00 und aktueller letzter Preis 50,30.",
      "Vor dem Ende kommen im vollständigen Datensatz noch 49,80 und 50,20 hinzu. Das Tief sinkt auf 49,80 und der endgültige Schluss wird 50,20. Die frühere laufende Anzeige war für ihren Zeitpunkt richtig, aber noch nicht endgültig.",
      "Wenn eine Oberfläche den aktuellen letzten Preis schon als C anzeigt, muss der offene Zustand erkennbar sein. Nora behandelt ihn nicht als fertigen Minutenschluss. Die noch nicht bekannte spätere Bewegung darf sie auch nicht rückwirkend als damals bekannt ausgeben."
    ],
    "columns": [
      {
        "title": "Zwischenstand 09:00:30",
        "tone": "neutral",
        "points": [
          "Aktueller letzter Preis 50,30.",
          "Tief bisher 50,00."
        ]
      },
      {
        "title": "Abgeschlossene Minute",
        "tone": "positive",
        "points": [
          "C50,20, L49,80.",
          "Neue Geschäfte änderten die Kennwerte."
        ]
      }
    ],
    "prompt": "Welcher Schluss war um 09:00:30 bereits endgültig bekannt?",
    "answers": [
      {
        "label": "Sicher 50,30.",
        "explanation": "Weitere Geschäfte können den letzten Preis verändern."
      },
      {
        "label": "Sicher 50,20.",
        "explanation": "Dieser spätere Schluss war damals noch nicht bekannt."
      },
      {
        "label": "Noch kein endgültiger Schluss der laufenden Minute.",
        "explanation": "Richtig: Unterscheide laufende Kennwerte von endgültigen Werten eines abgeschlossenen Abschnitts."
      }
    ],
    "correct": 2,
    "rule": "Unterscheide laufende Kennwerte von endgültigen Werten eines abgeschlossenen Abschnitts.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Kerzenänderung und Änderung zum vorherigen Schluss trennen",
    "summary": "Zwei Vergleiche können unterschiedliche Richtungen zeigen.",
    "paragraphs": [
      "Dies ist ein eigener Vergleich, nicht unsere zweite Übungsminute. Ein vorheriger Abschnitt schließt bei 50,20. Der neue Abschnitt eröffnet bei 50,00 und schließt bei 50,10.",
      "Innerhalb der neuen Kerze ist der Schluss 0,10 höher als die Eröffnung. Gegen den vorherigen Schluss liegt er jedoch 0,10 niedriger. Beide Beschreibungen sind richtig, weil sie verschiedene Vergleichspunkte nutzen.",
      "Eine Kerzenfarbe nach O-C-Regel zeigt nur den ersten Vergleich. Eine Anzeige der Änderung zum vorherigen Schluss zeigt den zweiten. Nora nennt den Bezug, statt aus einer positiven Kerze ungefragt eine positive Folgeänderung abzuleiten."
    ],
    "columns": [
      {
        "title": "Neue Kerze intern",
        "tone": "neutral",
        "points": [
          "50,10 − 50,00 = +0,10.",
          "Schluss über eigener Eröffnung."
        ]
      },
      {
        "title": "Gegen vorherigen Schluss",
        "tone": "positive",
        "points": [
          "50,10 − 50,20 = −0,10.",
          "Schluss unter vorherigem Schluss."
        ]
      }
    ],
    "prompt": "Wie liegt der neue Schluss 50,10 gegenüber dem vorherigen Schluss 50,20?",
    "answers": [
      {
        "label": "0,10 Euro niedriger.",
        "explanation": "Richtig: Nenne den Vergleichspunkt, bevor du eine Preisänderung beschreibst."
      },
      {
        "label": "0,10 Euro höher.",
        "explanation": "Das ist die Änderung zur neuen Eröffnung 50,00."
      },
      {
        "label": "Unverändert.",
        "explanation": "Die beiden Schlusswerte sind verschieden."
      }
    ],
    "correct": 0,
    "rule": "Nenne den Vergleichspunkt, bevor du eine Preisänderung beschreibst.",
    "diagram": "rc1-line"
  },
  {
    "title": "Handelsvolumen zählt Stücke, nicht Kerzenhöhe",
    "summary": "Die vier Preise enthalten keine vollständige Mengenangabe.",
    "paragraphs": [
      "In der ersten Minute wurden Mengen von vier, zwei, drei und einer Aktie gehandelt. Das Handelsvolumen beträgt vier plus zwei plus drei plus eins, also zehn Aktien. Jede gehandelte Aktie wird in dieser Rechnung einmal gezählt.",
      "Ein Geschäft hat eine Kauf- und eine Verkaufsseite. Daraus werden nicht zwanzig Aktien Volumen. Die Kerzenhöhe 0,50 ist wiederum eine Preisentfernung, keine Stückzahl.",
      "OHLC allein nennt keine Mengen. Die gleiche Preiskerze könnte bei anderen Geschäftsmengen ein anderes Volumen haben. Nora braucht die Mengenangaben zusätzlich, wenn sie das Handelsvolumen prüfen möchte."
    ],
    "columns": [
      {
        "title": "Mengen des Datensatzes",
        "tone": "neutral",
        "points": [
          "Vier, zwei, drei und eins.",
          "Volumen zehn Aktien."
        ]
      },
      {
        "title": "Andere Größen",
        "tone": "positive",
        "points": [
          "Spanne 0,50 Euro.",
          "Käufer und Verkäufer verdoppeln nicht das Volumen."
        ]
      }
    ],
    "prompt": "Wie hoch ist das Handelsvolumen der ersten Minute?",
    "answers": [
      {
        "label": "0,50 Aktien.",
        "explanation": "0,50 ist eine Preisentfernung in Euro."
      },
      {
        "label": "Zehn Aktien.",
        "explanation": "Richtig: Zähle gehandelte Stücke einmal und trenne Volumen von Preisentfernungen."
      },
      {
        "label": "Zwanzig Aktien.",
        "explanation": "Das zählt jede gehandelte Aktie auf beiden Vertragsseiten doppelt."
      }
    ],
    "correct": 1,
    "rule": "Zähle gehandelte Stücke einmal und trenne Volumen von Preisentfernungen.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Eine Lücke in den Daten nicht als Ruhe deuten",
    "summary": "Fehlende Meldungen und ein unveränderter Markt sind verschieden.",
    "paragraphs": [
      "In einer getrennten Anzeigevariante fehlen nach Minute drei die Meldungen für einen Zeitraum. Wir wissen nicht, ob kein Geschäft stattfand oder ob die Verbindung keine Daten lieferte. Das muss als Datenlücke geprüft werden.",
      "Ein Anbieter könnte für handelarme Zeitabschnitte keine Kerze zeichnen oder einen besonderen Platzhalter verwenden. Welche Regel gilt, muss erklärt sein. Eine erfundene Kerze mit identischem O, H, L und C würde aus fehlenden Daten keine belegten Preise machen.",
      "Nora prüft Verbindung, Zeitstempel und die Regeln der Darstellung. Sie nimmt fehlende Daten nicht als sicheren Beweis für einen stillen Markt. Unser gezeichneter Dreiminutenfall enthält ausdrücklich vollständige Übungsdaten."
    ],
    "columns": [
      {
        "title": "Bekannte Lücke",
        "tone": "neutral",
        "points": [
          "Meldungen fehlen.",
          "Ursache zunächst ungeklärt."
        ]
      },
      {
        "title": "Zu prüfen",
        "tone": "positive",
        "points": [
          "Verbindung und Zeitstempel.",
          "Regel für leere Zeitabschnitte."
        ]
      }
    ],
    "prompt": "Was beweist eine ungeklärte Datenlücke über den Markt?",
    "answers": [
      {
        "label": "Dass es garantiert keinen Handel gab.",
        "explanation": "Die Meldungen könnten technisch fehlen."
      },
      {
        "label": "Dass alle Preise sicher unverändert waren.",
        "explanation": "Fehlende Daten bestätigen keinen Preis."
      },
      {
        "label": "Noch keine sichere Ruhe oder Nullbewegung.",
        "explanation": "Richtig: Markiere fehlende Daten und prüfe ihre Ursache, statt eine Marktbewegung zu erfinden."
      }
    ],
    "correct": 2,
    "rule": "Markiere fehlende Daten und prüfe ihre Ursache, statt eine Marktbewegung zu erfinden.",
    "diagram": "rc1-line"
  },
  {
    "title": "Die vier Kennwerte auf innere Widersprüche prüfen",
    "summary": "Eröffnung und Schluss müssen zwischen Hoch und Tief liegen.",
    "paragraphs": [
      "Ein eigener fehlerhafter Bericht nennt O50,00, H50,10, L49,80 und C50,20. Wenn alle Werte aus denselben Geschäften desselben Abschnitts stammen, ist das widersprüchlich: Der Schluss liegt über dem angeblichen Hoch.",
      "Der Bericht muss geprüft werden, bevor Nora ihn als gültige Kerze verwendet. Ein anderer Widerspruch wäre ein Tief oberhalb des Hochs. Gute Beschriftung oder eine schöne Farbe macht falsche Kennwerte nicht richtig.",
      "Unser erster vollständiger Datensatz besteht die Gegenprobe: 49,80 ist höchstens O50,00 und C50,20; beide sind höchstens H50,30. Diese Strukturprüfung beweist nicht, dass eine externe Datenquelle lückenlos oder korrekt ist, findet aber offensichtliche Unstimmigkeiten."
    ],
    "columns": [
      {
        "title": "Fehlerhafter Bericht",
        "tone": "neutral",
        "points": [
          "H50,10, aber C50,20.",
          "Schluss über angeblichem Hoch."
        ]
      },
      {
        "title": "Gültiger erster Abschnitt",
        "tone": "positive",
        "points": [
          "L49,80 ≤ O50,00 und C50,20 ≤ H50,30.",
          "Kennwerte passen zueinander."
        ]
      }
    ],
    "prompt": "Welcher Fehler steckt im eigenen fehlerhaften Bericht?",
    "answers": [
      {
        "label": "Der Schluss 50,20 liegt über dem Hoch 50,10.",
        "explanation": "Richtig: Prüfe Hoch, Tief, Eröffnung und Schluss auf innere Widersprüche."
      },
      {
        "label": "Die Eröffnung liegt außerhalb der Spanne.",
        "explanation": "50,00 liegt zwischen 49,80 und 50,10."
      },
      {
        "label": "Jede fallende Kerze wäre ungültig.",
        "explanation": "Ein Schluss unter Eröffnung ist kein Strukturfehler."
      }
    ],
    "correct": 0,
    "rule": "Prüfe Hoch, Tief, Eröffnung und Schluss auf innere Widersprüche.",
    "diagram": "rc1-bar"
  },
  {
    "title": "Ein Chartbild als Datenbericht abschließen",
    "summary": "Beobachtung, Darstellung und unbekannte Dinge getrennt nennen.",
    "paragraphs": [
      "Nora beschreibt die erste abgeschlossene Minute: Vela, Euro je Aktie, Geschäfte von 09:00 bis unmittelbar vor 09:01. O50,00, H50,30, L49,80 und C50,20; Spanne0,50, Körper0,20, Volumen10 Aktien.",
      "Die Kerze und der OHLC-Balken zeigen dieselben vier Preise. Der Schluss-Linienchart zeigt nur C50,20 als ersten Punkt. Die Kerze allein verrät weder Volumen noch die Reihenfolge von Hoch und Tief; die zusätzlichen Geschäftsdaten liefern diese Angaben im Übungsfall.",
      "Keines dieser Bilder bestätigt eine eigene Order oder eine sichere künftige Richtung. Mit diesem Bericht ist der erste Schritt zum Chartlesen geschafft. Die nächsten Kapitel ergänzen weitere Charttypen, Zeitebenen, Skalen und Datenbedingungen."
    ],
    "columns": [
      {
        "title": "Bekannte Daten",
        "tone": "neutral",
        "points": [
          "O50,00, H50,30, L49,80, C50,20.",
          "Spanne0,50; Volumen10 aus den Geschäftsmengen."
        ]
      },
      {
        "title": "Aussagegrenzen",
        "tone": "positive",
        "points": [
          "OHLC allein liefert keine genaue Zwischenfolge.",
          "Kein eigener Trade und keine Zukunftszusage."
        ]
      }
    ],
    "prompt": "Welcher Bericht passt zur ersten abgeschlossenen Minute?",
    "answers": [
      {
        "label": "Sicherer Kaufgewinn von 0,50 Euro.",
        "explanation": "Die Spanne beweist keinen eigenen Handel oder Gewinn."
      },
      {
        "label": "O50,00, H50,30, L49,80, C50,20; Volumen zehn Aktien.",
        "explanation": "Richtig: Schließe das Lesen mit einem Datenbericht und den Grenzen der Darstellung ab."
      },
      {
        "label": "O50,00, H50,20, L50,00, C50,30.",
        "explanation": "Das verwechselt laufende und endgültige Kennwerte."
      }
    ],
    "correct": 1,
    "rule": "Schließe das Lesen mit einem Datenbericht und den Grenzen der Darstellung ab.",
    "diagram": "rc1-candles"
  }
];
export const chartsChapterOneLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `reading-charts.chapter-01.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 1 · Vom Geschäft zum Chartbild',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Charts verstehen · Kapitel 1', title: draft.title,
        paragraphs: draft.paragraphs, callout: draft.rule,
      },
      {
        id: `${key}.diagram`, type: 'diagram', title: 'Die Daten im Schaubild',
        scenario: draft.diagram as ChartScenarioId,
        caption: 'Eigener Vela-Datensatz · abgeschlossene Minuten · gehandelte Preise in Euro je Aktie.',
        observations: draft.diagram === 'rc1-bar' ? ['Einzelner OHLC-Balken der ersten Minute.', 'Links O50,00 und rechts C50,20.', 'Oben H50,30 und unten L49,80.'] : draft.diagram === 'rc1-line' ? ['Schlusspunkte: 50,20; 50,15; 50,10.', 'Hochs, Tiefs und Eröffnungen sind nicht als Punkte enthalten.', 'Die Verbindung beweist keine gleichmäßige Zwischenbewegung.'] : ['Minute 1: O50,00 H50,30 L49,80 C50,20.', 'Minute 2: O50,40 H50,50 L50,10 C50,15.', 'Minute 3: O50,10 H50,20 L49,90 C50,10.'],
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
