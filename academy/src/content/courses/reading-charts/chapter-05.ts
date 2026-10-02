import type { Lesson, ChartScenarioId } from '../../types';
const drafts = [
  {
    "title": "Eine Kerzenform kann berechnete Preise enthalten",
    "summary": "Heikin-Ashi sieht vertraut aus, verwendet aber andere Werte.",
    "paragraphs": [
      "Nora öffnet einen Heikin-Ashi-Chart. Sie sieht Körper und Schatten wie bei normalen Kerzen. Trotzdem darf sie die Körpergrenzen nicht sofort als ersten und letzten Geschäftspreis lesen. Heikin-Ashi, hier kurz HA, berechnet eigene Werte aus vorhandenen Preisdaten.",
      "Eine normale Kerze zeigt die vier Kennwerte ihres Abschnitts: Eröffnung, Hoch, Tief und Schluss. HA verwendet diese Ausgangswerte und zusätzlich Werte der vorherigen HA-Kerze. Die Form bleibt ähnlich, die Bedeutung verändert sich.",
      "Denke an ein Foto mit einem Glättungsfilter. Das gefilterte Bild kann größere Zusammenhänge übersichtlicher zeigen. Einzelne Details sind danach aber anders dargestellt. Auch ein geglätteter Chart braucht daher eine Erklärung seiner Eingaben und Rechenregeln."
    ],
    "columns": [
      {
        "title": "Normale Kerze",
        "tone": "neutral",
        "points": [
          "Körper zwischen Original-O und Original-C.",
          "Schatten bis Original-H und Original-L."
        ]
      },
      {
        "title": "HA-Kerze",
        "tone": "positive",
        "points": [
          "Körper zwischen HA-O und HA-C.",
          "Alle vier Zeichenwerte nach HA-Regeln."
        ]
      }
    ],
    "prompt": "Was prüft Nora zuerst?",
    "answers": [
      {
        "label": "Die Berechnung hinter der Kerzenform.",
        "explanation": "Richtig: Gleiche Formen können unterschiedliche Daten bedeuten."
      },
      {
        "label": "Nur die Lieblingsfarbe.",
        "explanation": "Eine Farbe erklärt keine Datenquelle."
      },
      {
        "label": "Ob jede Körpergrenze ein Handel war.",
        "explanation": "Diese Behauptung ist bei berechneten Preisen nicht vorauszusetzen."
      }
    ],
    "correct": 0,
    "rule": "Prüfe die Bedeutung der Werte, bevor du eine Kerze liest.",
    "diagram": null
  },
  {
    "title": "Vier eigene Minuten als Ausgangsdaten festhalten",
    "summary": "Ein festes Zahlenbeispiel macht jede Rechnung nachprüfbar.",
    "paragraphs": [
      "Unsere erfundene Luma-Aktie liefert vier abgeschlossene Minuten von 09:00 bis 09:04. Jeder Abschnitt umfasst seine Startzeit, aber nicht die nächste volle Minute. Alle Preise sind Euro je Aktie. Wir nennen jeweils O, H, L und C in dieser Reihenfolge.",
      "Minute 1, 09:00–09:01: 100, 104, 98, 102. Minute 2, 09:01–09:02: 102, 108, 100, 104. Minute 3, 09:02–09:03: 104, 106, 100, 101. Minute 4, 09:03–09:04: 112, 114, 110, 113.",
      "Das sind eigene Übungsdaten, keine Empfehlung und keine echte Kursaufnahme. Jede Minute hat vier bekannte Kennwerte. Die Liste enthält weder alle Einzelgeschäfte noch Stückzahlen. Nora behält diese Ausgangsliste neben den später berechneten HA-Werten."
    ],
    "columns": [
      {
        "title": "Minuten 1 und 2",
        "tone": "neutral",
        "points": [
          "O/H/L/C: 100/104/98/102.",
          "O/H/L/C: 102/108/100/104."
        ]
      },
      {
        "title": "Minuten 3 und 4",
        "tone": "positive",
        "points": [
          "O/H/L/C: 104/106/100/101.",
          "O/H/L/C: 112/114/110/113."
        ]
      }
    ],
    "prompt": "Welcher Originalschluss gehört zu Minute 3?",
    "answers": [
      {
        "label": "106 Euro.",
        "explanation": "106 ist ihr Hoch."
      },
      {
        "label": "101 Euro.",
        "explanation": "Das vierte Kennwort C nennt den Schluss: 101."
      },
      {
        "label": "104 Euro.",
        "explanation": "104 ist ihre Eröffnung."
      }
    ],
    "correct": 1,
    "rule": "Bewahre Ausgangsdaten und berechnete Zeichenwerte getrennt.",
    "diagram": "rc5-pair"
  },
  {
    "title": "Den HA-Schluss aus vier Werten berechnen",
    "summary": "Vier gleich gewichtete Kennwerte ergeben einen neuen Wert.",
    "paragraphs": [
      "Für den HA-Schluss addieren wir Original-O, Original-H, Original-L und Original-C derselben Minute. Anschließend teilen wir durch vier. Die Kurzform lautet HA-C = (O + H + L + C) / 4.",
      "In Minute 1 rechnen wir 100 + 104 + 98 + 102 = 404. Geteilt durch vier ergibt das 101 Euro. Der Originalschluss liegt dagegen bei 102 Euro. Beide Werte gehören zum gleichen Abschnitt, beantworten aber verschiedene Fragen.",
      "Der HA-Schluss ist der Mittelwert dieser vier Kennwerte. Das Wort Schluss bezeichnet hier eine berechnete Zeichengrenze. Es behauptet nicht, dass das letzte Geschäft der Minute bei 101 lag. Genau deshalb schreibt Nora das HA vor den Buchstaben C."
    ],
    "columns": [
      {
        "title": "Original-C",
        "tone": "neutral",
        "points": [
          "Letzter Geschäftspreis: 102.",
          "Ein Kennwert des Abschnitts."
        ]
      },
      {
        "title": "HA-C",
        "tone": "positive",
        "points": [
          "(100 + 104 + 98 + 102) / 4.",
          "Ergebnis: 101."
        ]
      }
    ],
    "prompt": "Wie groß ist HA-C in Minute 1?",
    "answers": [
      {
        "label": "102 Euro.",
        "explanation": "Das ist der Originalschluss."
      },
      {
        "label": "404 Euro.",
        "explanation": "Die Summe muss noch durch vier geteilt werden."
      },
      {
        "label": "101 Euro.",
        "explanation": "404 geteilt durch vier ergibt 101."
      }
    ],
    "correct": 2,
    "rule": "Berechne HA-C aus den vier aktuellen Originalwerten.",
    "diagram": "rc5-formula"
  },
  {
    "title": "Ein Vierer-Mittel ist kein Durchschnitt aller Geschäfte",
    "summary": "Die Formel kennt keine Stückzahlen und keine Meldungshäufigkeit.",
    "paragraphs": [
      "Nora hört das Wort Durchschnitt und fragt: Ist 101 der durchschnittlich bezahlte Preis aller Aktien? Diese Frage lässt sich aus unseren vier Kennwerten nicht beantworten. Die HA-C-Formel gibt jedem der vier Zahlenfelder das Gewicht ein Viertel.",
      "Das Hoch kann einmal oder hundertmal gehandelt worden sein. Ein Preis zwischen Hoch und Tief kann sehr viel Volumen tragen. Diese Häufigkeiten und Mengen fehlen in der Rechnung. Das Ergebnis ist deshalb kein nach gehandelten Aktien gewichteter Durchschnitt.",
      "Auch wenn O und C zufällig gleich sind, kommen beide Felder in der Formel vor. Das ist kein Fehler: Vier Kennwerte werden gemittelt, nicht vier verschiedene Preise ausgewählt. Ein Durchschnitt aller Geschäftsmeldungen wäre eine andere Berechnung mit anderen Eingaben."
    ],
    "columns": [
      {
        "title": "HA-C kennt",
        "tone": "neutral",
        "points": [
          "Vier Original-Kennwerte.",
          "Gleiches Gewicht pro Zahlenfeld."
        ]
      },
      {
        "title": "HA-C kennt nicht",
        "tone": "positive",
        "points": [
          "Menge je Geschäft.",
          "Häufigkeit aller Zwischenpreise."
        ]
      }
    ],
    "prompt": "Was beschreibt HA-C?",
    "answers": [
      {
        "label": "Den gleich gewichteten Mittelwert von O, H, L und C.",
        "explanation": "Die vier Kennwerte zählen jeweils einmal als Feld."
      },
      {
        "label": "Den volumengewichteten Preis aller Aktien.",
        "explanation": "Dafür fehlen Mengen und alle Einzelpreise."
      },
      {
        "label": "Immer einen tatsächlich gehandelten Preis.",
        "explanation": "Ein Mittelwert muss nicht selbst gehandelt worden sein."
      }
    ],
    "correct": 0,
    "rule": "Verwechsle den Mittelwert von Kennwerten nicht mit einem Geschäftsdurchschnitt.",
    "diagram": null
  },
  {
    "title": "Für die erste HA-Eröffnung eine Startregel nennen",
    "summary": "Die erste Kerze hat in unserer Liste noch keinen HA-Vorgänger.",
    "paragraphs": [
      "Die normale HA-Eröffnungsformel braucht eine vorherige HA-Kerze. Unsere Übung beginnt aber erst mit Minute 1. Deshalb legen wir ausdrücklich einen Startwert fest: HA-O der ersten Minute = (Original-O + Original-C) / 2.",
      "Hier ergibt (100 + 102) / 2 genau 101. Das ist unsere Lernregel für den Anfang. Wir behaupten nicht, dass jedes Programm seine Datenreihe an derselben Stelle mit genau dieser Regel beginnt. Manche laden ältere Kerzen mit oder nutzen einen anderen Start.",
      "Ohne Startangabe kann Nora die erste Rechnung nicht vollständig nachvollziehen. Sie notiert daher Zeitraum, Ausgangswerte und Startregel zusammen. Ein neuer sichtbarer Bildausschnitt bedeutet übrigens nicht zwingend, dass das Programm seine HA-Rechnung dort neu startet."
    ],
    "columns": [
      {
        "title": "Erste Kerze",
        "tone": "neutral",
        "points": [
          "Kein Vorgänger in unserer Liste.",
          "Startregel (100 + 102) / 2 = 101."
        ]
      },
      {
        "title": "Spätere Kerzen",
        "tone": "positive",
        "points": [
          "Vorgänger bereits berechnet.",
          "Normale HA-Eröffnungsregel verwenden."
        ]
      }
    ],
    "prompt": "Welche HA-Eröffnung setzen wir für Minute 1?",
    "answers": [
      {
        "label": "Jedes Programm muss hier 100 nutzen.",
        "explanation": "Ein universeller Startwert wurde nicht vereinbart."
      },
      {
        "label": "101 Euro nach der erklärten Startregel.",
        "explanation": "Die Startregel mittelt Original-O und Original-C."
      },
      {
        "label": "Automatisch 98 Euro.",
        "explanation": "98 ist das Originaltief."
      }
    ],
    "correct": 1,
    "rule": "Nenne den Startwert und starte die Rechnung nicht stillschweigend neu.",
    "diagram": null
  },
  {
    "title": "Spätere HA-Eröffnungen vom HA-Vorgänger ableiten",
    "summary": "Der Körpermittelpunkt der vorherigen HA-Kerze wird übernommen.",
    "paragraphs": [
      "Ab Minute 2 gilt HA-O aktuell = (HA-O vorher + HA-C vorher) / 2. Beide Eingaben stammen aus der vorherigen berechneten Kerze. Die Formel verwendet nicht das vorherige Original-O und Original-C.",
      "Minute 1 hat HA-O101 und HA-C101. Ihre Mitte liegt bei 101. Also eröffnet die HA-Kerze der Minute 2 bei 101, obwohl das erste Originalgeschäft dieser Minute bei 102 liegt.",
      "Der neue Körper beginnt am Körpermittelpunkt des HA-Vorgängers. Ein Mittelpunkt ist eine Rechenstelle zwischen zwei Werten. Er ist weder ein zusätzliches Geschäft noch eine Garantie, dass dort gerade ein Kaufangebot vorliegt. Nora verfolgt die Rechenkette von links nach rechts."
    ],
    "columns": [
      {
        "title": "Richtige Eingaben",
        "tone": "neutral",
        "points": [
          "Vorheriges HA-O: 101.",
          "Vorheriges HA-C: 101."
        ]
      },
      {
        "title": "Nicht dieselbe Rechnung",
        "tone": "positive",
        "points": [
          "Vorheriges Original-O: 100.",
          "Vorheriges Original-C: 102."
        ]
      }
    ],
    "prompt": "Welche Werte braucht die spätere HA-Eröffnung?",
    "answers": [
      {
        "label": "Nur das aktuelle Originalhoch.",
        "explanation": "Das Hoch gehört nicht in diese Eröffnungsformel."
      },
      {
        "label": "Immer die aktuellen Original-O und C.",
        "explanation": "Diese Regel gilt bei uns nur zur ersten Initialisierung."
      },
      {
        "label": "HA-O und HA-C der vorherigen HA-Kerze.",
        "explanation": "Die Eröffnung hängt rekursiv am berechneten Vorgänger."
      }
    ],
    "correct": 2,
    "rule": "Verwende für spätere HA-O die beiden Körperwerte des HA-Vorgängers.",
    "diagram": null
  },
  {
    "title": "HA-Hoch als größtes der drei passenden Werte bestimmen",
    "summary": "Der obere Rand muss auch den berechneten Körper enthalten.",
    "paragraphs": [
      "Nachdem HA-O und HA-C feststehen, berechnen wir HA-H = Maximum aus aktuellem Original-H, aktuellem HA-O und aktuellem HA-C. Maximum heißt: Wähle die größte dieser drei Zahlen.",
      "In Minute 2 ist Original-H108, HA-O101 und HA-C103,50. Das Maximum ist 108. Der gezeichnete obere Schatten reicht deshalb in diesem Fall genau bis zum Originalhoch. Erst der Vergleich belegt diese Gleichheit.",
      "Die drei Eingaben gehören alle zur gerade gezeichneten Kerze. Das vorherige Hoch gehört nicht direkt in diese Formel. Der vorherige Körper kann allerdings über HA-O indirekt hineinwirken. Deshalb darf Nora HA-H und Original-H nicht ohne Prüfung gleichsetzen."
    ],
    "columns": [
      {
        "title": "Drei Kandidaten",
        "tone": "neutral",
        "points": [
          "Original-H: 108.",
          "HA-O: 101; HA-C: 103,50."
        ]
      },
      {
        "title": "Größter Kandidat",
        "tone": "positive",
        "points": [
          "HA-H: 108.",
          "Der Körper bleibt innerhalb des gezeichneten Hochs."
        ]
      }
    ],
    "prompt": "Welche Regel berechnet HA-H?",
    "answers": [
      {
        "label": "Maximum aus aktuellem Original-H, HA-O und HA-C.",
        "explanation": "So umfasst die Zeichenspanne den berechneten Körper."
      },
      {
        "label": "Nur vorheriges Original-H.",
        "explanation": "Der obere Rand wird aus aktuellen Kandidaten bestimmt."
      },
      {
        "label": "Durchschnitt aller drei Kandidaten.",
        "explanation": "Hier wählen wir das Maximum, keinen Mittelwert."
      }
    ],
    "correct": 0,
    "rule": "Vergleiche Original-H mit den aktuellen berechneten Körpergrenzen.",
    "diagram": null
  },
  {
    "title": "HA-Tief als kleinstes der drei passenden Werte bestimmen",
    "summary": "Der untere Rand kann durch die berechnete Eröffnung entstehen.",
    "paragraphs": [
      "Für HA-L gilt die spiegelbildliche Regel: Minimum aus aktuellem Original-L, aktuellem HA-O und aktuellem HA-C. Minimum heißt, die kleinste Zahl auszuwählen. Damit enthält die Zeichenspanne auch die untere Körpergrenze.",
      "In Minute 2 vergleichen wir Original-L100, HA-O101 und HA-C103,50. Das Minimum ist 100. In dieser Minute entspricht das HA-Tief also dem Originaltief. Später werden wir einen Fall sehen, in dem diese Gleichheit nicht gilt.",
      "Hoch und Tief werden erst nach den Körperwerten berechnet. Sonst fehlen zwei Eingaben für ihren Vergleich. Die Rechnung schafft keine neuen Geschäfte: Sie legt fest, wie groß das Zeichen auf dem Chart sein muss."
    ],
    "columns": [
      {
        "title": "Drei Kandidaten",
        "tone": "neutral",
        "points": [
          "Original-L: 100.",
          "HA-O: 101; HA-C: 103,50."
        ]
      },
      {
        "title": "Kleinster Kandidat",
        "tone": "positive",
        "points": [
          "HA-L: 100.",
          "Der untere Rand enthält den ganzen Körper."
        ]
      }
    ],
    "prompt": "Wie groß ist HA-L in Minute 2?",
    "answers": [
      {
        "label": "103,50 Euro.",
        "explanation": "Dieser Kandidat ist der größte der drei."
      },
      {
        "label": "100 Euro.",
        "explanation": "100 ist kleiner als 101 und 103,50."
      },
      {
        "label": "101 Euro.",
        "explanation": "Das HA-O ist höher als das Originaltief."
      }
    ],
    "correct": 1,
    "rule": "Vergleiche Original-L mit den aktuellen berechneten Körpergrenzen.",
    "diagram": null
  },
  {
    "title": "Die erste vollständige HA-Kerze zusammenbauen",
    "summary": "Gleiche Körpergrenzen ergeben einen flachen Körper.",
    "paragraphs": [
      "Jetzt setzt Nora die vier berechneten Werte der Minute 1 zusammen. HA-O ist 101 nach unserer Startregel. HA-C ist ebenfalls 101 nach der Vierer-Formel. HA-H ist 104, HA-L ist 98.",
      "Die Körperhöhe beträgt |101 − 101| = 0. Im Bild erscheint der Körper als waagerechter Strich. Der obere Schatten reicht von 101 bis 104, der untere von 101 bis 98. Die gesamte gezeichnete Spanne beträgt sechs Euro.",
      "Die normale Kerze derselben Minute steigt dagegen innerhalb ihres Körpers von 100 auf 102. Ein flacher HA-Körper bedeutet also nicht, dass die Originalpreise stillstanden. Nora nennt immer die Darstellung, zu der ihre Aussage gehört."
    ],
    "columns": [
      {
        "title": "Original Minute 1",
        "tone": "neutral",
        "points": [
          "O100, H104, L98, C102.",
          "Körperhöhe: 2 Euro."
        ]
      },
      {
        "title": "HA Minute 1",
        "tone": "positive",
        "points": [
          "O101, H104, L98, C101.",
          "Körperhöhe: 0 Euro."
        ]
      }
    ],
    "prompt": "Was bedeutet der flache HA-Körper hier?",
    "answers": [
      {
        "label": "In der Minute gab es keine Bewegung.",
        "explanation": "Originalhoch und -tief liegen sechs Euro auseinander."
      },
      {
        "label": "Original-O und Original-C sind gleich.",
        "explanation": "Sie betragen 100 und 102."
      },
      {
        "label": "HA-O und HA-C sind gleich.",
        "explanation": "Die Originalpreise können trotzdem verschieden sein."
      }
    ],
    "correct": 2,
    "rule": "Beschreibe einen flachen Körper anhand seiner tatsächlich verwendeten Werte.",
    "diagram": "rc5-pair"
  },
  {
    "title": "Die zweite HA-Kerze vollständig nachrechnen",
    "summary": "Erst der Vorgänger, dann die aktuellen Originalwerte.",
    "paragraphs": [
      "In Minute 2 liefert die Vorgängerrechnung HA-O = (101 + 101) / 2 = 101. Der HA-Schluss kommt aus der aktuellen Minute: (102 + 108 + 100 + 104) / 4 = 414 / 4 = 103,50.",
      "Der höchste der Kandidaten 108, 101 und 103,50 ist 108. Der kleinste der Kandidaten 100, 101 und 103,50 ist 100. Unsere zweite HA-Kerze hat also O101, H108, L100 und C103,50.",
      "Der Körper steigt um 2,50 Euro. Die Originalkerze steigt von 102 auf 104, also um zwei Euro. Unterschiedliche Körperhöhen entstehen aus unterschiedlichen Bezugspunkten. Beide Darstellungen lassen sich aus denselben Ausgangsdaten sauber nachrechnen."
    ],
    "columns": [
      {
        "title": "HA-Körper",
        "tone": "neutral",
        "points": [
          "O101 → C103,50.",
          "Körperhöhe: 2,50."
        ]
      },
      {
        "title": "Originalkörper",
        "tone": "positive",
        "points": [
          "O102 → C104.",
          "Körperhöhe: 2."
        ]
      }
    ],
    "prompt": "Welcher HA-Schluss gehört zu Minute 2?",
    "answers": [
      {
        "label": "103,50 Euro.",
        "explanation": "Die vier aktuellen Originalwerte ergeben zusammen 414."
      },
      {
        "label": "101 Euro.",
        "explanation": "Das ist ihr HA-O."
      },
      {
        "label": "104 Euro.",
        "explanation": "Das ist ihr Original-C."
      }
    ],
    "correct": 0,
    "rule": "Rechne jede Kerze in der Reihenfolge HA-O, HA-C, HA-H, HA-L.",
    "diagram": "rc5-formula"
  },
  {
    "title": "Eine fallende Originalkerze kann einen steigenden HA-Körper haben",
    "summary": "Die Körperrichtung hängt von der verwendeten Darstellung ab.",
    "paragraphs": [
      "Minute 3 eröffnet im Original bei 104 und schließt bei 101. Ihr normaler Körper fällt um drei Euro. Für HA-O verwenden wir aber die vorige HA-Kerze: (101 + 103,50) / 2 = 102,25.",
      "HA-C ergibt (104 + 106 + 100 + 101) / 4 = 411 / 4 = 102,75. Der HA-Körper steigt somit von 102,25 auf 102,75. HA-H ist 106, HA-L100. Die steigende berechnete Körperrichtung widerspricht keiner der Originalzahlen.",
      "Unser Bild kennzeichnet steigende Körper mit einem Aufwärtspfeil und fallende mit einem Abwärtspfeil. Es verlässt sich nicht allein auf Farbe. Wer die HA-Farbe als Original-O-zu-C-Richtung liest, würde Minute 3 falsch beschreiben."
    ],
    "columns": [
      {
        "title": "Original Minute 3",
        "tone": "neutral",
        "points": [
          "104 → 101: Körper fällt.",
          "Änderung −3 Euro."
        ]
      },
      {
        "title": "HA Minute 3",
        "tone": "positive",
        "points": [
          "102,25 → 102,75: Körper steigt.",
          "Änderung +0,50 Euro."
        ]
      }
    ],
    "prompt": "Welche Aussage stimmt für Minute 3?",
    "answers": [
      {
        "label": "Der Originalschluss muss 102,75 sein.",
        "explanation": "102,75 ist der berechnete HA-Schluss."
      },
      {
        "label": "Originalkörper fällt, HA-Körper steigt.",
        "explanation": "Beide Richtungen beziehen sich auf unterschiedliche Körpergrenzen."
      },
      {
        "label": "Beide Körper müssen fallen.",
        "explanation": "HA-O und HA-C ergeben hier einen Anstieg."
      }
    ],
    "correct": 1,
    "rule": "Nenne bei Richtungsangaben, ob du Original- oder HA-Körper meinst.",
    "diagram": "rc5-pair"
  },
  {
    "title": "Körperrichtung und Änderung zum Vorgänger trennen",
    "summary": "Zwei verschiedene Vergleiche können verschiedene Vorzeichen haben.",
    "paragraphs": [
      "Der HA-Körper der Minute 3 steigt um 0,50. Vergleichen wir dagegen ihren HA-Schluss102,75 mit dem vorherigen HA-Schluss103,50, ergibt sich −0,75. Innerhalb des Körpers steigt der Wert, von HA-Schluss zu HA-Schluss fällt er.",
      "Das ist dieselbe Unterscheidung, die Nora bereits bei normalen Kerzen gelernt hat. Der Bezugspunkt macht den Unterschied. Programme können Körperfarben nach dem eigenen O-C-Vergleich oder nach dem vorherigen Schluss einstellen.",
      "Für unsere Zeichnungen gilt ausdrücklich der eigene HA-O-zu-HA-C-Vergleich. Nora kontrolliert bei fremden Bildern zuerst die Farbregel. Sie ersetzt eine genaue Aussage wie „HA-C sinkt gegenüber der vorigen Minute“ nicht durch eine unerklärte Farbe."
    ],
    "columns": [
      {
        "title": "HA-Körpervergleich",
        "tone": "neutral",
        "points": [
          "102,75 − 102,25 = +0,50.",
          "Vergleich innerhalb Minute 3."
        ]
      },
      {
        "title": "HA-Schlussvergleich",
        "tone": "positive",
        "points": [
          "102,75 − 103,50 = −0,75.",
          "Vergleich zwischen Minuten 2 und 3."
        ]
      }
    ],
    "prompt": "Wie verändert sich HA-C von Minute 2 zu Minute 3?",
    "answers": [
      {
        "label": "Es steigt um 0,50 Euro.",
        "explanation": "Das ist der eigene Körpervergleich der dritten Kerze."
      },
      {
        "label": "Es bleibt unverändert.",
        "explanation": "Die beiden HA-Schlüsse unterscheiden sich."
      },
      {
        "label": "Es sinkt um 0,75 Euro.",
        "explanation": "103,50 wird zu 102,75."
      }
    ],
    "correct": 2,
    "rule": "Nenne beide Bezugspunkte einer Preisänderung.",
    "diagram": null
  },
  {
    "title": "Den Preissprung der vierten Minute im Original erkennen",
    "summary": "Ein Abstand zwischen Abschnitten braucht seine Originalbezüge.",
    "paragraphs": [
      "Der letzte Originalpreis der Minute 3 beträgt 101. Der erste der Minute 4 beträgt 112. Der Abstand vom vorherigen Schluss zur neuen Eröffnung ist also elf Euro. Aus OHLC allein kennen wir keine zusätzlichen Geschäfte zwischen diesen Punkten.",
      "Außerdem liegt das Tief der Minute 4 bei 110 und das Hoch der Minute 3 bei 106. Die Originalspannen überlappen deshalb nicht. Zwischen 106 und 110 liegt ein Abstand von vier Euro, den keine der beiden Minuten umfasst.",
      "Diese beiden Abstände sind nicht dieselbe Messung. Elf Euro vergleichen Schluss und Eröffnung. Vier Euro vergleichen die benachbarten Spannenränder. Nora nennt genau, welche Lücke sie beschreibt, und behauptet keine vollständige Zwischenfolge."
    ],
    "columns": [
      {
        "title": "Schluss zu Eröffnung",
        "tone": "neutral",
        "points": [
          "101 → 112.",
          "Abstand: 11 Euro."
        ]
      },
      {
        "title": "Spanne zu Spanne",
        "tone": "positive",
        "points": [
          "Vorheriges H106; neues L110.",
          "Abstand: 4 Euro."
        ]
      }
    ],
    "prompt": "Wie groß ist der Abstand von Original-C3 zu Original-O4?",
    "answers": [
      {
        "label": "11 Euro.",
        "explanation": "112 minus 101 ergibt elf."
      },
      {
        "label": "4 Euro.",
        "explanation": "Vier ist der Abstand der beiden Spannenränder."
      },
      {
        "label": "0 Euro.",
        "explanation": "Die Originalwerte sind deutlich verschieden."
      }
    ],
    "correct": 0,
    "rule": "Beschreibe einen Preissprung mit klar genannten Originalbezugspunkten.",
    "diagram": "rc5-gap"
  },
  {
    "title": "Ein HA-Tief kann außerhalb der Originalspanne liegen",
    "summary": "Die Vorgängerrechnung kann den gezeichneten Rand erweitern.",
    "paragraphs": [
      "Für Minute 4 berechnen wir HA-O = (102,25 + 102,75) / 2 = 102,50. HA-C = (112 + 114 + 110 + 113) / 4 = 112,25. HA-H ist das Maximum aus 114, 102,50 und 112,25: also 114.",
      "HA-L ist das Minimum aus 110, 102,50 und 112,25: also 102,50. Dieser Wert liegt unter dem Originaltief110. Die HA-Zeichenspanne reicht deshalb weiter nach unten als die Originalspanne dieser Minute.",
      "Das Tief102,50 ist hier durch die übernommene Körpermitte entstanden. Aus unseren Originaldaten folgt kein Geschäft zu102,50 in Minute 4. Die Regel sorgt dafür, dass der ganze berechnete Körper in die Kerzenzeichnung passt."
    ],
    "columns": [
      {
        "title": "Original Minute 4",
        "tone": "neutral",
        "points": [
          "Spanne 110 bis 114.",
          "Kein Originalwert unter 110."
        ]
      },
      {
        "title": "HA Minute 4",
        "tone": "positive",
        "points": [
          "Spanne 102,50 bis 114.",
          "HA-L entsteht aus HA-O."
        ]
      }
    ],
    "prompt": "Welches HA-Tief erhält Minute 4?",
    "answers": [
      {
        "label": "112,25 Euro.",
        "explanation": "Das ist HA-C und liegt höher."
      },
      {
        "label": "102,50 Euro.",
        "explanation": "Die berechnete Eröffnung ist der kleinste Kandidat."
      },
      {
        "label": "110 Euro zwingend.",
        "explanation": "110 ist nur das Originaltief und hier nicht der kleinste Kandidat."
      }
    ],
    "correct": 1,
    "rule": "Ein HA-Extrem ist nicht automatisch ein Originalextrem.",
    "diagram": "rc5-gap"
  },
  {
    "title": "Eine Original-Lücke kann im HA-Bild überdeckt sein",
    "summary": "Die Zeichenspannen können überlappen, obwohl die Originalspannen getrennt sind.",
    "paragraphs": [
      "Die Originalspanne der Minute 3 endet oben bei106. Die Originalspanne der Minute 4 beginnt unten bei110. Diese beiden Preisbereiche haben keine gemeinsame Stelle. Im Originalbild ist ihre Trennung deutlich.",
      "Die HA-Spanne der Minute 3 reicht von100 bis106. Die HA-Spanne der Minute 4 reicht dagegen von102,50 bis114. Beide HA-Zeichen überlappen zwischen102,50 und106. Die ursprüngliche Spannenlücke wird durch die berechnete Eröffnung überdeckt.",
      "Das bedeutet nicht, dass sich die ursprünglichen Geschäfte geändert haben. Nur die Darstellung verwendet andere Werte. Für Fragen zu tatsächlichen Lücken oder gehandelten Extremen zieht Nora deshalb immer die Originaldaten hinzu."
    ],
    "columns": [
      {
        "title": "Originalspannen",
        "tone": "neutral",
        "points": [
          "100–106 und 110–114.",
          "Keine Überlappung."
        ]
      },
      {
        "title": "HA-Spannen",
        "tone": "positive",
        "points": [
          "100–106 und 102,50–114.",
          "Überlappung 102,50–106."
        ]
      }
    ],
    "prompt": "Warum überlappen die HA-Zeichen hier?",
    "answers": [
      {
        "label": "Die Originalminute hatte doch ein Tief100.",
        "explanation": "Ihr Originaltief ist110."
      },
      {
        "label": "Alle ursprünglichen Geschäfte wurden verschoben.",
        "explanation": "Die Ausgangsdaten bleiben dieselben."
      },
      {
        "label": "HA-O4 erweitert die vierte Zeichenspanne nach unten.",
        "explanation": "Die Vorgängerrechnung liefert102,50 statt der Originaleröffnung112."
      }
    ],
    "correct": 2,
    "rule": "Prüfe echte Preislücken anhand der Originalpreise.",
    "diagram": "rc5-gap"
  },
  {
    "title": "Schatten aus den berechneten Körpergrenzen messen",
    "summary": "Die bekannte Form braucht neue Rechenbezüge.",
    "paragraphs": [
      "Die zweite HA-Kerze hat O101, C103,50, H108 und L100. Die obere Körpergrenze ist103,50, die untere101. Ihr oberer Schatten ist108 minus103,50 gleich4,50 Euro lang.",
      "Der untere Schatten beträgt101 minus100 gleich1 Euro. Die Körperhöhe beträgt2,50. Zusammen ergeben4,50 plus2,50 plus1 genau8 Euro, also die gesamte HA-Spanne108 minus100.",
      "Diese Messungen beschreiben das gezeichnete HA-Zeichen. Sie sind nicht automatisch dieselben Schattenlängen wie bei der Originalkerze. Nora verwendet jeweils die zugehörigen Körpergrenzen und addiert nicht Werte aus zwei unterschiedlichen Darstellungen."
    ],
    "columns": [
      {
        "title": "HA Minute 2",
        "tone": "neutral",
        "points": [
          "O101, C103,50.",
          "H108, L100."
        ]
      },
      {
        "title": "Zerlegte Höhe",
        "tone": "positive",
        "points": [
          "Oben4,50; Körper2,50; unten1.",
          "Summe8 Euro."
        ]
      }
    ],
    "prompt": "Wie lang ist der obere HA-Schatten der Minute 2?",
    "answers": [
      {
        "label": "4,50 Euro.",
        "explanation": "108 minus103,50 ergibt4,50."
      },
      {
        "label": "7 Euro.",
        "explanation": "Sieben wäre108 minusHA-O101, also einschließlich Körper."
      },
      {
        "label": "1 Euro.",
        "explanation": "Das ist der untere Schatten."
      }
    ],
    "correct": 0,
    "rule": "Miss HA-Schatten von den HA-Körpergrenzen aus.",
    "diagram": null
  },
  {
    "title": "Ein fehlender HA-Schatten beweist keine einseitigen Orders",
    "summary": "Eine Zeichenregel zeigt keine vollständige Auftragsliste.",
    "paragraphs": [
      "In Minute 4 ist HA-L gleich HA-O: beide102,50. Zwischen unterem Körperrand und Tief liegt damit keine Strecke. Unsere vierte HA-Kerze hat keinen unteren Schatten.",
      "Dies entsteht, weil die berechnete Eröffnung unter dem Originaltief liegt. Es beweist weder, dass niemand verkauft hat, noch dass alle Geschäfte an steigenden Preisen stattfanden. Die vier Originalkennwerte enthalten keine vollständige Orderfolge.",
      "Auch ein sehr langer berechneter Körper garantiert keine künftige Fortsetzung. Nora kann die sichtbare Form korrekt beschreiben und zugleich die Grenze der Aussage kennen. Aus einer geometrischen Eigenschaft entsteht keine sichere Aussage über alle Marktteilnehmer."
    ],
    "columns": [
      {
        "title": "Sichtbare Eigenschaft",
        "tone": "neutral",
        "points": [
          "HA-L = HA-O =102,50.",
          "Unterer HA-Schatten:0."
        ]
      },
      {
        "title": "Nicht belegt",
        "tone": "positive",
        "points": [
          "Keine Verkaufsorders.",
          "Sichere nächste Richtung."
        ]
      }
    ],
    "prompt": "Was beweist der fehlende untere HA-Schatten?",
    "answers": [
      {
        "label": "Die nächste Minute wird sicher steigen.",
        "explanation": "Die Zeichnung enthält keine Zukunftsgarantie."
      },
      {
        "label": "HA-L und untere HA-Körpergrenze fallen zusammen.",
        "explanation": "Das ist eine Aussage über die berechnete Form."
      },
      {
        "label": "Niemand hat Aktien verkauft.",
        "explanation": "Jedes Geschäft hat eine Kauf- und Verkaufsseite."
      }
    ],
    "correct": 1,
    "rule": "Leite aus Schattenformen keine vollständige Ordergeschichte ab.",
    "diagram": null
  },
  {
    "title": "Eine laufende HA-Kerze kann sich verändern",
    "summary": "Aktuelle Originalwerte liefern aktuelle berechnete Werte.",
    "paragraphs": [
      "Vor Abschluss der Minute 4 sind ihre endgültigen Originalwerte noch unbekannt. In einem getrennten frühen Zwischenstand nehmen wir O112, H112, L112 und aktuellen letzten Preis112 an. HA-O bleibt102,50, weil Minute 3 schon abgeschlossen ist.",
      "Der vorläufige HA-C lautet dann112. Später erreicht die Minute H114, L110 und ihren endgültigen Schluss113. Dadurch wird HA-C112,25. Auch Hoch, Tief, Körper und gegebenenfalls Richtung können sich während einer laufenden Minute ändern.",
      "Für die Berechnung dieses Zwischenstands brauchen wir keine zukünftige Minute. Wir benutzen den feststehenden Vorgänger und die bisher bekannten aktuellen Daten. Nora unterscheidet laufende Werte von abgeschlossenen Werten und vergleicht einen Live-Zustand nicht ungefragt mit dem späteren Endbild."
    ],
    "columns": [
      {
        "title": "Früher Zwischenstand",
        "tone": "neutral",
        "points": [
          "Original112/112/112/112.",
          "Vorläufiges HA-C112."
        ]
      },
      {
        "title": "Abgeschlossen Minute 4",
        "tone": "positive",
        "points": [
          "Original112/114/110/113.",
          "Endgültiges HA-C112,25."
        ]
      }
    ],
    "prompt": "Welche Angabe kann im laufenden Abschnitt noch wechseln?",
    "answers": [
      {
        "label": "Der feststehende HA-C der vorherigen Minute ohne Datenkorrektur.",
        "explanation": "Der Vorgänger ist in unserem unveränderten Datensatz abgeschlossen."
      },
      {
        "label": "Immer der vereinbarte Startwert jeder Minute.",
        "explanation": "Die Startregel wird nicht bei jedem Update neu angewandt."
      },
      {
        "label": "HA-C mit den aktuellen Originalwerten.",
        "explanation": "Hoch, Tief und letzter Preis sind vor Abschluss veränderlich."
      }
    ],
    "correct": 2,
    "rule": "Kennzeichne laufende HA-Werte als vorläufig.",
    "diagram": null
  },
  {
    "title": "Glättung bedeutet Einfluss früherer Werte",
    "summary": "Die Rechenkette reagiert anders als der Originalkörper.",
    "paragraphs": [
      "Warum steigt der HA-Körper der Minute 3 trotz fallendem Originalkörper? Seine Eröffnung hängt noch am HA-Körper der Minute 2. Sein Schluss mittelt vier aktuelle Kennwerte. Das Zusammenwirken dieser Regeln verändert das sichtbare Ergebnis.",
      "Frühere Werte wirken über die Eröffnung in spätere Körper hinein. Diesen Zusammenhang nennen wir hier Glättung. Er kann wechselnde Originalkörper weniger wechselhaft erscheinen lassen. Er gibt jedoch keine feste Zahl von Minuten an, nach der jede Richtungsänderung sichtbar werden muss.",
      "Nora beschreibt daher eine Rechenabhängigkeit statt einer sicheren Verzögerungsregel. HA kann aktuelle Daten verwenden und trotzdem frühere Körperwerte enthalten. Ein ruhigeres Bild ersetzt keine Prüfung der ursprünglichen Preise und erlaubt keine sichere Prognose."
    ],
    "columns": [
      {
        "title": "Aktuelle Einflüsse",
        "tone": "neutral",
        "points": [
          "HA-C aus aktuellem O/H/L/C.",
          "Laufende Werte können sich ändern."
        ]
      },
      {
        "title": "Frühere Einflüsse",
        "tone": "positive",
        "points": [
          "HA-O aus vorherigem HA-O und HA-C.",
          "Rechenkette statt fester Wartezeit."
        ]
      }
    ],
    "prompt": "Welche Aussage erklärt die Glättung?",
    "answers": [
      {
        "label": "Die HA-Eröffnung enthält Werte des berechneten Vorgängers.",
        "explanation": "Frühere Körperwerte wirken in die neue Kerze hinein."
      },
      {
        "label": "HA kennt zukünftige Preise.",
        "explanation": "Die Formeln benötigen keine zukünftigen Daten."
      },
      {
        "label": "Jede Umkehr erscheint genau zwei Minuten später.",
        "explanation": "Eine feste Verzögerung folgt aus den Formeln nicht."
      }
    ],
    "correct": 0,
    "rule": "Beschreibe Glättung als Abhängigkeit von früheren Rechenwerten.",
    "diagram": null
  },
  {
    "title": "Ein anderer Startwert wirkt zunächst weiter",
    "summary": "Gleiche Originaldaten reichen ohne Startregel nicht für identische Körper.",
    "paragraphs": [
      "Für eine getrennte Variante setzt Nora das erste HA-O auf100 statt101. Die Originaldaten und alle HA-C bleiben unverändert. Die zweite HA-Eröffnung wird nun(100 +101)/2 =100,50 statt101.",
      "Die dritte wird(100,50 +103,50)/2 =102 statt102,25. Die vierte wird(102 +102,75)/2 =102,375 statt102,50. Der anfängliche Unterschied von einem Euro halbiert sich bei jedem weiteren HA-O, solange die übrigen Eingaben und Regeln gleich bleiben.",
      "Das zeigt, warum mitgeladene frühere Daten und Initialisierung wichtig sind. Nora behauptet nicht, dass jeder andere Start stets sichtbare große Unterschiede verursacht. Sie nennt die Rechenbasis und erkennt, dass ein begrenzter sichtbarer Ausschnitt älteren Rechenzustand enthalten kann."
    ],
    "columns": [
      {
        "title": "Unser Hauptstart101",
        "tone": "neutral",
        "points": [
          "HA-O2:101; HA-O3:102,25.",
          "HA-O4:102,50."
        ]
      },
      {
        "title": "Getrennter Start100",
        "tone": "positive",
        "points": [
          "HA-O2:100,50; HA-O3:102.",
          "HA-O4:102,375."
        ]
      }
    ],
    "prompt": "Wie groß ist HA-O4 in der getrennten Start100-Variante?",
    "answers": [
      {
        "label": "102,50 Euro unverändert.",
        "explanation": "Dieser Wert gehört zum Hauptstart101."
      },
      {
        "label": "102,375 Euro.",
        "explanation": "Die Mitte aus102 und102,75 ist102,375."
      },
      {
        "label": "112 Euro.",
        "explanation": "112 ist die Originaleröffnung."
      }
    ],
    "correct": 1,
    "rule": "Vergleiche HA-Reihen nur mit bekannten Start- und Verlaufsregeln.",
    "diagram": null
  },
  {
    "title": "Rundung und das Preisraster getrennt prüfen",
    "summary": "Ein Rechenwert kann zwischen erlaubten Originalpreisen liegen.",
    "paragraphs": [
      "Ein Produkt kann nur bestimmte Geschäftspreise erlauben, etwa Schritte von0,01 Euro. Eine HA-Rechnung kann trotzdem einen Wert wie102,375 liefern. Dieser Wert muss nicht auf dem Geschäftsraster liegen, weil er ein Mittelwert ist.",
      "In unserem Modell rechnen wir intern ohne Zwischenrundung. Die Hauptdaten ergeben Werte, die mit zwei Nachkommastellen exakt darstellbar sind. Die Start100-Variante zeigt102,375 ausdrücklich mit drei Nachkommastellen, damit keine versteckte Rundung entsteht.",
      "Programme können berechnete Werte anders runden oder nur gerundet anzeigen. Anzeige und interne Rechnung sind dabei zu unterscheiden. Nora prüft die jeweilige Regel, bevor sie eine kleine Abweichung als Datenfehler bezeichnet oder einen HA-Wert als möglichen Auftragspreis behandelt."
    ],
    "columns": [
      {
        "title": "Unser Rechenmodell",
        "tone": "neutral",
        "points": [
          "Keine Zwischenrundung.",
          "102,375 bleibt in der Variante erhalten."
        ]
      },
      {
        "title": "Einstellungen prüfen",
        "tone": "positive",
        "points": [
          "Gerundete Anzeige oder gerundete Rechnung?",
          "Geschäftsraster ist eine eigene Vorgabe."
        ]
      }
    ],
    "prompt": "Muss jeder berechnete HA-Wert ein erlaubter Geschäftspreis sein?",
    "answers": [
      {
        "label": "Ja, die Formel erzeugt echte Geschäfte.",
        "explanation": "Sie erzeugt Zeichenwerte."
      },
      {
        "label": "Ja, jedes Programm rundet identisch.",
        "explanation": "Rundungsregeln können sich unterscheiden."
      },
      {
        "label": "Nein, ein Mittelwert kann zwischen Rasterpreisen liegen.",
        "explanation": "Berechnung und zulässige Ausführungspreise sind verschiedene Größen."
      }
    ],
    "correct": 2,
    "rule": "Trenne Rechengenauigkeit, Anzeige und erlaubtes Geschäftsraster.",
    "diagram": null
  },
  {
    "title": "Für Indikatoren und Tests die Preisquelle benennen",
    "summary": "Weiterverarbeitung kann Original- oder HA-Werte verwenden.",
    "paragraphs": [
      "Nora berechnet beispielhaft den Mittelwert der letzten beiden Schlüsse, Minuten 3 und4. Mit Original-C ergibt(101 +113)/2 =107. Mit HA-C ergibt(102,75 +112,25)/2 =107,50. Dieselbe Rechenart liefert bei anderer Preisquelle andere Ergebnisse.",
      "Ein Indikator ist hier eine zusätzliche aus Daten berechnete Kennzahl. Sein Name allein verrät nicht, welche Preise er verwendet. Nora prüft die eingestellte Quelle, den Zeitraum und die Berechnung, statt auf die sichtbare Chartart allein zu vertrauen.",
      "Auch bei historischen Tests müssen Signale und angenommene Ausführungen erklärt sein. Der berechnete HA-Schluss112,25 ist kein Beleg für Noras eigene Ausführung. Dafür braucht es geeignete Originaldaten, Auftragsbedingungen und nachvollziehbare Kosten- und Zuteilungsannahmen."
    ],
    "columns": [
      {
        "title": "Zwei Originalschlüsse",
        "tone": "neutral",
        "points": [
          "(101 +113)/2 =107.",
          "Eingabe:Original-C."
        ]
      },
      {
        "title": "Zwei HA-Schlüsse",
        "tone": "positive",
        "points": [
          "(102,75 +112,25)/2 =107,50.",
          "Eingabe:HA-C."
        ]
      }
    ],
    "prompt": "Welcher Mittelwert entsteht aus HA-C3 und HA-C4?",
    "answers": [
      {
        "label": "107,50 Euro.",
        "explanation": "215 geteilt durch zwei ergibt107,50."
      },
      {
        "label": "107 Euro.",
        "explanation": "Das ist der Mittelwert der Originalschlüsse."
      },
      {
        "label": "Garantiert Noras ausführbarer Kaufpreis.",
        "explanation": "Eine Kennzahl belegt weder Angebot noch Zuteilung."
      }
    ],
    "correct": 0,
    "rule": "Nenne die Preisquelle von Kennzahlen und prüfe Ausführungen gesondert.",
    "diagram": null
  },
  {
    "title": "Zwei Preislabels am Chart sauber auseinanderhalten",
    "summary": "Letzter Originalpreis und letzter HA-Schluss sind verschiedene Angaben.",
    "paragraphs": [
      "Am Ende der Minute 4 kennt Nora den Originalschluss113 und den HA-Schluss112,25. Eine Chartanzeige könnte beide Werte an der Preisachse markieren. Der Unterschied beträgt0,75 Euro und entsteht aus der HA-C-Rechnung.",
      "Sie liest daher erst die Beschriftung: Meint ein Label den letzten Originalpreis oder einen berechneten HA-Wert? Bei laufenden Abschnitten fragt sie zusätzlich nach dem Zeitpunkt des Updates. Sichtbare Linien und Zahlen sind nur mit ihrer Bedeutung eindeutig.",
      "Keines der beiden Labels bestätigt automatisch eine eigene Ausführung. Ein Originalgeschäft berichtet einen vergangenen Handel; ein HA-Label einen Rechenwert. Nora nutzt diese Unterscheidung auch dann, wenn beide Zahlen zufällig gleich sind oder das Programm ähnliche Farben verwendet."
    ],
    "columns": [
      {
        "title": "Original-Label",
        "tone": "neutral",
        "points": [
          "Schluss Minute 4:113.",
          "Letzter Geschäftspreis des Abschnitts."
        ]
      },
      {
        "title": "HA-Label",
        "tone": "positive",
        "points": [
          "HA-C Minute 4:112,25.",
          "Berechneter Vierer-Mittelwert."
        ]
      }
    ],
    "prompt": "Welche beiden Schlussangaben passen zur abgeschlossenen Minute 4?",
    "answers": [
      {
        "label": "Beide müssen113 sein.",
        "explanation": "Die Vierer-Rechnung liefert112,25."
      },
      {
        "label": "Original113 und HA112,25.",
        "explanation": "Beide stammen aus derselben Minute, haben aber andere Bedeutungen."
      },
      {
        "label": "Original112,25 und HA113.",
        "explanation": "Damit würden die Bezeichnungen vertauscht."
      }
    ],
    "correct": 1,
    "rule": "Lies Bedeutung und Zeitpunkt jedes Preislabels vor dem Zahlenvergleich.",
    "diagram": null
  },
  {
    "title": "Den HA-Bericht mit seinen Grenzen abschließen",
    "summary": "Ausgangsdaten, Formeln und Deutung gehören zusammen.",
    "paragraphs": [
      "Nora fasst ihre vier abgeschlossenen Minuten zusammen. Die HA-Körperwerte O/C lauten101/101,101/103,50,102,25/102,75 und102,50/112,25. Die normalen Originalkerzen verwenden weiterhin die ursprüngliche OHLC-Liste.",
      "Sie ergänzt die Regeln: Start-O als Mitte von Original-O und C; spätere HA-O als Mitte des vorherigen HA-Körpers; HA-C als Mittel der aktuellen vier Originalwerte; HA-H und HA-L als Maximum und Minimum ihrer drei Kandidaten. Intern erfolgt keine Zwischenrundung.",
      "Ihr Bericht hält die Grenzen fest: Minute 3 hat gegensätzliche Körperrichtungen. Das HA-Tief der Minute 4 liegt unter dem Originaltief und überdeckt die Spannenlücke. Laufende Werte sind vorläufig, und berechnete Preise garantieren keine Ausführung. Als Nächstes untersucht Nora Point & Figure und weitere Regeln der Verdichtung."
    ],
    "columns": [
      {
        "title": "Nachprüfbare Rechnung",
        "tone": "neutral",
        "points": [
          "Originaldaten und Startregel vorhanden.",
          "Berechnete Werte klar als HA bezeichnet."
        ]
      },
      {
        "title": "Saubere Interpretation",
        "tone": "positive",
        "points": [
          "Originalrichtung und HA-Richtung getrennt.",
          "Keine Ausführungs- oder Zukunftsgarantie."
        ]
      }
    ],
    "prompt": "Welche Aussage gehört in einen sorgfältigen HA-Bericht?",
    "answers": [
      {
        "label": "Jede HA-Grenze war ein Geschäft.",
        "explanation": "Minute4 liefert ein Gegenbeispiel unter dem Originaltief."
      },
      {
        "label": "Gleiche Körperfarben sichern die Zukunft.",
        "explanation": "Die Rechnung beschreibt vorhandene Eingaben."
      },
      {
        "label": "Startregel, Originaldaten und Grenzen der berechneten Werte.",
        "explanation": "Damit sind Rechnung und Bedeutung nachprüfbar."
      }
    ],
    "correct": 2,
    "rule": "Berichte Rechenregeln und Aussagegrenzen gemeinsam.",
    "diagram": null
  }
];
export const chartsChapterFiveLessons: Lesson[] = drafts.map((draft,index) => {
  const key = `reading-charts.chapter-05.lesson-${String(index+1).padStart(2,'0')}`;
  return {
    id:key,title:draft.title,summary:draft.summary,
    sourceUnit:'Kapitel 5 · Heikin-Ashi und berechnete Preise',sourceAnchors:[draft.title],
    durationMinutes:6,xp:35,status:'published',
    steps:[
      {id:`${key}.explain`,type:'explanation',eyebrow:'Charts verstehen · Kapitel 5',title:draft.title,paragraphs:draft.paragraphs,callout:draft.rule},
      ...(draft.diagram ? [{id:`${key}.diagram`,type:'diagram' as const,title:'Originalpreise und HA-Rechnung',scenario:draft.diagram as ChartScenarioId,caption:'Vier abgeschlossene Luma-Minuten · Euro je Aktie · eigene Übungsdaten und erklärte Startregel.',observations:draft.diagram==='rc5-gap'?['Originalspanne der Minute 4:110–114; HA-Spanne:102,50–114.','HA-L102,50 ist kein belegtes Geschäft in Minute 4.']:draft.diagram==='rc5-formula'?['HA-O2 aus dem vorherigen HA-Körper:101.','HA-C2 aus aktuellem Original-O/H/L/C:103,50.']:['Minute 3:Originalkörper fällt, HA-Körper steigt.','Gleiche Daten, unterschiedliche Rechenwerte; keine Ausführungszusage.']}] : []),
      {id:`${key}.compare`,type:'comparison',title:'Das Beispiel auf einen Blick',columns:draft.columns.map(c=>({...c,tone:c.tone as 'neutral'|'positive'}))},
      {id:`${key}.question`,type:'question',title:'Kurz prüfen',prompt:draft.prompt,correctOptionId:`choice-${draft.correct}`,options:draft.answers.map((a,i)=>({id:`choice-${i}`,...a}))},
      {id:`${key}.recap`,type:'recap',title:'Das nimmst du mit',points:[draft.rule,draft.summary]},
    ],
  };
});
