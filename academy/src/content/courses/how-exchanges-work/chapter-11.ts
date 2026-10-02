import type { Lesson } from '../../types';

// Eigene vereinfachte Abwicklungsfälle; Kalender, Gebühren, Margin und Vertragsregeln gelten nur wie angegeben.
const drafts = [
  {
    "title": "Ein Trade ist bestätigt – was fehlt noch?",
    "summary": "Ausführung und spätere Lieferung sind verschiedene Schritte.",
    "paragraphs": [
      "Ein Trade ist ein abgeschlossenes Handelsgeschäft. Bei einem Wertpapierkauf vereinbaren Käufer und Verkäufer damit Preis und Menge. Die spätere Übertragung des Geldes und der Wertpapiere kann ein weiterer Schritt sein.",
      "In unserem Fall werden drei Aktien zu je 40 Euro gekauft. Die Ausführung ist bestätigt. Der Preisbetrag beträgt drei mal 40, also 120 Euro. Geld und Aktien sollen nach unserem Übungskalender erst am nächsten Abwicklungstag übertragen werden.",
      "Dieses Kapitel erklärt die Aufgaben nach dem Abschluss. Alle Zahlen, Gebühren und Kalender sind eigene vereinfachte Fälle. Sie sind keine echten Brokerbedingungen. Bei Derivaten können andere Zahlungs- und Erfüllungsregeln gelten als bei einem Aktienkauf."
    ],
    "columns": [
      {
        "title": "Handel bestätigt",
        "tone": "neutral",
        "points": [
          "3 Aktien zu je 40 Euro.",
          "Preisbetrag 120 Euro."
        ]
      },
      {
        "title": "Noch ausstehend im Fall",
        "tone": "positive",
        "points": [
          "Geld- und Wertpapierübertragung.",
          "Geplanter nächster Abwicklungstag."
        ]
      }
    ],
    "prompt": "Was bestätigt die Ausführung bereits?",
    "answers": [
      {
        "label": "Das Handelsgeschäft über drei Aktien zu 40 Euro.",
        "explanation": "Richtig: Die spätere Übertragung ist im Fall noch offen."
      },
      {
        "label": "Die vollständige spätere Lieferung in jedem System.",
        "explanation": "Ausführung und Abwicklung sind unterschiedliche Statusangaben."
      },
      {
        "label": "Eine sichere Auszahlung aller 120 Euro an den Käufer.",
        "explanation": "Der Käufer muss im Fall bezahlen, nicht den Kaufbetrag ausgezahlt bekommen."
      }
    ],
    "correct": 0,
    "rule": "Bestätigten Abschluss und abgeschlossene Abwicklung getrennt prüfen."
  },
  {
    "title": "Den Ausführungsbericht lesen",
    "summary": "Produkt, Richtung, Menge und Preis müssen zusammenpassen.",
    "paragraphs": [
      "Ein Ausführungsbericht beschreibt ein tatsächlich ausgeführtes Geschäft. Er sollte den Auftrag und das Produkt eindeutig zuordnen. Wichtig sind außerdem Kauf oder Verkauf, ausgeführte Menge, Preis und Zeitpunkt.",
      "Der Auftrag im Fall wollte fünf Aktien. Der Bericht bestätigt bisher zwei zu 40 Euro. Das ist eine Teilausführung. Drei sind noch offen. Der Auftrag ist deshalb nicht automatisch vollständig erfüllt.",
      "Vergleiche den Bericht mit dem ursprünglichen Wunsch und dem aktuellen Status. Ein angenommener Auftrag ist noch kein Ausführungsbericht. Bei mehreren Teilfüllungen darf dieselbe bestätigte Ausführung nicht doppelt gezählt werden."
    ],
    "columns": [
      {
        "title": "Ursprünglicher Auftrag",
        "tone": "neutral",
        "points": [
          "Kauf von 5 Aktien.",
          "Preisgrenze gilt weiter."
        ]
      },
      {
        "title": "Bisheriger Bericht",
        "tone": "positive",
        "points": [
          "2 zu 40 Euro bestätigt.",
          "Restmenge 5 − 2 = 3."
        ]
      }
    ],
    "prompt": "Wie viele Aktien wurden bisher nachweislich gekauft?",
    "answers": [
      {
        "label": "Sieben, weil Auftrag und Bericht addiert werden.",
        "explanation": "Der Bericht beschreibt einen Teil des Auftrags."
      },
      {
        "label": "Zwei.",
        "explanation": "Richtig: Nur diese Menge steht im Ausführungsbericht."
      },
      {
        "label": "Fünf, weil der Wunsch fünf war.",
        "explanation": "Die gewünschte Menge ist größer als die bestätigte Menge."
      }
    ],
    "correct": 1,
    "rule": "Ausgeführte Menge aus dem Bericht lesen, nicht aus der Wunschmenge."
  },
  {
    "title": "Mehrere Teilfüllungen zusammenrechnen",
    "summary": "Ein Durchschnitt ersetzt nicht die einzelnen Ausführungsbeträge.",
    "paragraphs": [
      "Ein Auftrag kann in mehreren Teilen ausgeführt werden. Jede Teilfüllung hat eine Menge und einen Preis. Der gesamte Preisbetrag entsteht aus der Summe der einzelnen Mengen mal Preise.",
      "Im Beispiel werden zwei Aktien zu 40 und drei zu 42 gekauft. Der erste Teil kostet 80 Euro. Der zweite kostet 126 Euro. Zusammen sind es fünf Aktien für 206 Euro. Der Durchschnitt beträgt 206 geteilt durch fünf, also 41,20 Euro.",
      "Der letzte Teilpreis 42 ist nicht der Durchschnitt des ganzen Auftrags. Für die Abrechnung zählt hier der gesamte Betrag 206 vor Gebühren. Wir nehmen an, dass die Berichte eindeutig sind und keine Ausführung doppelt enthalten."
    ],
    "columns": [
      {
        "title": "Teilfüllungen",
        "tone": "neutral",
        "points": [
          "2 × 40 = 80 Euro.",
          "3 × 42 = 126 Euro."
        ]
      },
      {
        "title": "Gesamter Auftrag",
        "tone": "positive",
        "points": [
          "5 Aktien; 80 + 126 = 206 Euro.",
          "Durchschnitt 206 / 5 = 41,20 Euro."
        ]
      }
    ],
    "prompt": "Welcher Preisbetrag gehört zu allen fünf Aktien?",
    "answers": [
      {
        "label": "210 Euro, weil der letzte Preis 42 war.",
        "explanation": "Nicht alle fünf wurden zu 42 gekauft."
      },
      {
        "label": "82 Euro, weil 40 plus 42 gleich 82 ist.",
        "explanation": "Die Mengen fehlen in dieser Rechnung."
      },
      {
        "label": "206 Euro vor Gebühren.",
        "explanation": "Richtig: Die beiden Teilbeträge werden addiert."
      }
    ],
    "correct": 2,
    "rule": "Abrechnung aus den Teilmengen und Teilpreisen aufbauen."
  },
  {
    "title": "Gebühren zum Preisbetrag hinzurechnen",
    "summary": "Ein Kauf kostet im Fall mehr als Menge mal Preis.",
    "paragraphs": [
      "Der Preisbetrag ist nicht immer der gesamte Geldabfluss. Gebühren können dazukommen. Ob eine Gebühr je Auftrag oder je Teilfüllung anfällt, muss aus der genannten Regel hervorgehen.",
      "Unser Kauf über fünf Aktien hat einen Preisbetrag von 206 Euro. Die Übungsgebühr beträgt genau zwei Euro für den ganzen Auftrag, unabhängig von seinen Teilfüllungen. Der gesamte Geldabfluss ist deshalb 208 Euro.",
      "Bei einem Verkauf würde eine abgezogene Gebühr den Erlös verringern. Steuern und weitere Kosten lassen wir hier ausdrücklich weg. Die echte Abrechnung braucht deren tatsächliche Regeln. Zwei Teilfüllungen erzeugen in unserem Gebührenmodell keine doppelte Auftragsgebühr."
    ],
    "columns": [
      {
        "title": "Preisbetrag",
        "tone": "neutral",
        "points": [
          "5 Aktien für 206 Euro.",
          "Gebühr für gesamten Auftrag: 2 Euro."
        ]
      },
      {
        "title": "Gesamter Kaufbetrag",
        "tone": "positive",
        "points": [
          "206 + 2 = 208 Euro.",
          "Keine weitere Gebühr je Teilfüllung im Fall."
        ]
      }
    ],
    "prompt": "Wie viel Geld fließt nach dieser Gebührenregel insgesamt ab?",
    "answers": [
      {
        "label": "208 Euro.",
        "explanation": "Richtig: Zwei Euro werden einmal hinzugezählt."
      },
      {
        "label": "210 Euro, weil zwei Teilfüllungen vorliegen.",
        "explanation": "Die Gebühr gilt hier einmal für den gesamten Auftrag."
      },
      {
        "label": "204 Euro, weil Gebühren den Kauf billiger machen.",
        "explanation": "Beim Kauf erhöht diese Gebühr den Geldabfluss."
      }
    ],
    "correct": 0,
    "rule": "Preisbetrag und genannte Gebührenregel getrennt berechnen."
  },
  {
    "title": "Clearing bereitet die Erfüllung vor",
    "summary": "Nach dem Handel werden Daten und Verpflichtungen geordnet.",
    "paragraphs": [
      "Clearing bezeichnet Schritte vor der endgültigen Abwicklung. Dabei werden Geschäftsdaten abgeglichen und die Pflichten zur Lieferung und Zahlung festgestellt. Je nach System können mehrere Verpflichtungen auch verrechnet werden.",
      "In unserem Kauf schuldet die Käuferseite 120 Euro und soll drei Aktien erhalten. Die Verkäuferseite soll 120 Euro erhalten und drei Aktien liefern. Das Clearing ordnet diese Pflichten dem bestätigten Geschäft zu.",
      "Diese Prüfung ist noch nicht die tatsächliche Übertragung. Eine falsche Produktnummer oder eine abweichende Menge muss geklärt werden. Welche Stelle die Aufgaben übernimmt, hängt vom Handelsweg und dem verwendeten System ab."
    ],
    "columns": [
      {
        "title": "Käuferseite",
        "tone": "neutral",
        "points": [
          "Soll 120 Euro zahlen.",
          "Soll 3 Aktien erhalten."
        ]
      },
      {
        "title": "Verkäuferseite",
        "tone": "positive",
        "points": [
          "Soll 3 Aktien liefern.",
          "Soll 120 Euro erhalten."
        ]
      }
    ],
    "prompt": "Was beschreibt Clearing in diesem Fall?",
    "answers": [
      {
        "label": "Die automatische Verdoppelung der Aktienmenge.",
        "explanation": "Beide Seiten beziehen sich auf dieselben drei Aktien."
      },
      {
        "label": "Das Abgleichen der Daten und Feststellen der Pflichten.",
        "explanation": "Richtig: Die endgültige Übertragung folgt als eigener Schritt."
      },
      {
        "label": "Eine sichere neue Kursprognose.",
        "explanation": "Clearing bewertet nicht den nächsten Marktpreis."
      }
    ],
    "correct": 1,
    "rule": "Clearing als Vorbereitung und Ordnung der Erfüllung verstehen."
  },
  {
    "title": "Was macht eine zentrale Gegenpartei?",
    "summary": "Eine CCP kann zwischen die ursprünglichen Vertragsseiten treten.",
    "paragraphs": [
      "Eine zentrale Gegenpartei wird auch CCP genannt. Das ist die englische Abkürzung für Central Counterparty. In einem solchen Modell tritt sie zwischen die Vertragsseiten: gegenüber dem Verkäufer als Käufer und gegenüber dem Käufer als Verkäufer.",
      "Unser Übungshandel wird über eine CCP abgewickelt. Die teilnehmenden Firmen erfüllen ihre Pflichten gegenüber dieser CCP. Dadurch müssen sie nicht für jedes Geschäft die ursprüngliche andere Firma einzeln als Vertragspartner behalten.",
      "Nicht jeder Handel nutzt eine CCP. Ihr Einsatz macht ein Geschäft auch nicht risikolos. Die CCP braucht Sicherheiten, Regeln und Mittel für mögliche Ausfälle. Privatkunden stehen häufig über ihren Broker und dessen Abwicklungsweg mit diesem System in Verbindung."
    ],
    "columns": [
      {
        "title": "Ursprüngliches Geschäft",
        "tone": "neutral",
        "points": [
          "Käuferseite und Verkäuferseite handeln.",
          "Im Fall zentrale Abwicklung vorgesehen."
        ]
      },
      {
        "title": "Mit CCP im Modell",
        "tone": "positive",
        "points": [
          "CCP gegenüber Verkäufer als Käufer.",
          "CCP gegenüber Käufer als Verkäufer."
        ]
      }
    ],
    "prompt": "Ist jedes Geschäft weltweit automatisch über eine CCP abgewickelt?",
    "answers": [
      {
        "label": "Ja, auch jeder beliebige private Tausch.",
        "explanation": "Nicht jede Vereinbarung hat eine zentrale Gegenpartei."
      },
      {
        "label": "Ja, und dann bestehen keinerlei Risiken mehr.",
        "explanation": "Auch eine CCP braucht Risikovorsorge."
      },
      {
        "label": "Nein, das hängt vom Handels- und Abwicklungsweg ab.",
        "explanation": "Richtig: Das Kapitel beschreibt ein bestimmtes Modell."
      }
    ],
    "correct": 2,
    "rule": "CCP-Modell und tatsächlichen Abwicklungsweg des Produkts prüfen."
  },
  {
    "title": "Netting: gegenseitige Pflichten verrechnen",
    "summary": "Eine Nettomenge kann kleiner als die gehandelten Mengen sein.",
    "paragraphs": [
      "Netting bedeutet, geeignete gegenseitige Verpflichtungen zu verrechnen. Das ist nur möglich, wenn System und Regeln es erlauben. Es ändert nicht rückwirkend, welche Geschäfte abgeschlossen wurden.",
      "Unser Teilnehmer soll aus einem Geschäft zehn gleiche Aktien erhalten und aus einem anderen sechs liefern. Beide gehören nach unserer Annahme zur selben zulässigen Verrechnungsgruppe. Zehn minus sechs ergibt netto vier Aktien, die er erhalten soll.",
      "Die einzelnen Geschäfte über zehn und sechs bleiben im Nachweis bestehen. Das Netting verringert hier die zu übertragende Stückzahl. Es beschreibt weder die Marktbewegung noch automatisch den Gewinn des Teilnehmers."
    ],
    "columns": [
      {
        "title": "Einzelne Verpflichtungen",
        "tone": "neutral",
        "points": [
          "10 Aktien erhalten.",
          "6 gleiche Aktien liefern."
        ]
      },
      {
        "title": "Netto im Modell",
        "tone": "positive",
        "points": [
          "10 − 6 = 4 Aktien erhalten.",
          "Verrechnung ausdrücklich erlaubt."
        ]
      }
    ],
    "prompt": "Welche Nettolieferung bleibt nach der Verrechnung?",
    "answers": [
      {
        "label": "Vier Aktien erhalten.",
        "explanation": "Richtig: Die sechs zu liefernden werden gegengerechnet."
      },
      {
        "label": "16 Aktien erhalten.",
        "explanation": "Das wäre die Summe der Mengen ohne Gegenrichtung."
      },
      {
        "label": "Null Aktien, weil Netting alle Trades löscht.",
        "explanation": "Netting verrechnet Pflichten und löscht die Geschäfte nicht."
      }
    ],
    "correct": 0,
    "rule": "Nur geeignete Pflichten nach den genannten Regeln verrechnen."
  },
  {
    "title": "Auch Geldpflichten können verrechnet werden",
    "summary": "Nettostückzahl und Nettogeldbetrag sind verschiedene Rechnungen.",
    "paragraphs": [
      "Verrechnung kann auch den Geldbetrag betreffen. Preise verschiedener Geschäfte müssen dabei einzeln berücksichtigt werden. Eine Nettostückzahl mal nur einem Preis kann den falschen Geldbetrag ergeben.",
      "Im Fall kauft ein Teilnehmer zehn Aktien zu 20 Euro. Dafür schuldet er 200 Euro. Er verkauft sechs gleiche Aktien zu 21 Euro und erhält dafür 126 Euro. Gebühren fehlen. Die zulässige Geldverrechnung ergibt 200 minus 126, also 74 Euro zu zahlen.",
      "Netto erhält er vier Aktien. Vier mal 20 wären aber 80 Euro, nicht der richtige Nettogeldbetrag. Die unterschiedlichen Handelspreise erklären den Unterschied. Geldpflichten und Stückpflichten werden deshalb getrennt berechnet."
    ],
    "columns": [
      {
        "title": "Einzelne Geldbeträge",
        "tone": "neutral",
        "points": [
          "Kauf: 10 × 20 = 200 Euro zahlen.",
          "Verkauf: 6 × 21 = 126 Euro erhalten."
        ]
      },
      {
        "title": "Netto im Modell",
        "tone": "positive",
        "points": [
          "200 − 126 = 74 Euro zahlen.",
          "Stücknetto: 4 Aktien erhalten."
        ]
      }
    ],
    "prompt": "Welcher Nettogeldbetrag ist zu zahlen?",
    "answers": [
      {
        "label": "326 Euro, weil beide Beträge Abflüsse sind.",
        "explanation": "Der Verkauf erzeugt im Fall einen Zufluss."
      },
      {
        "label": "74 Euro.",
        "explanation": "Richtig: Die beiden tatsächlichen Preisbeträge werden verrechnet."
      },
      {
        "label": "80 Euro, weil vier Aktien mal 20 gerechnet werden.",
        "explanation": "Diese Rechnung ignoriert den Verkaufspreis 21."
      }
    ],
    "correct": 1,
    "rule": "Geldnetto aus den Geldbeträgen berechnen, Stücknetto aus den Stückzahlen."
  },
  {
    "title": "Nettolieferung ist nicht Handelsvolumen",
    "summary": "Verrechnung darf die Handelsstatistik nicht ersetzen.",
    "paragraphs": [
      "Handelsvolumen misst gehandelte Einheiten. Eine Nettolieferung misst verbleibende Übertragungspflichten nach der Verrechnung. Beide Zahlen beantworten unterschiedliche Fragen.",
      "Im Beispiel gibt es einen Kauf über zehn und einen Verkauf über sechs Aktien. Über diese beiden Geschäfte beträgt die gehandelte Menge zusammen 16 Einheiten. Jede Ausführung wird dabei einmal gezählt. Die Nettolieferung an den Teilnehmer beträgt dagegen vier Aktien.",
      "Die Zahl vier beweist nicht, dass nur vier Einheiten gehandelt wurden. Sie sagt auch nicht, wie viel der Teilnehmer verdient hat. Ohne Preisbeträge, Ausgangsbestand und weitere Annahmen wäre eine Gewinnrechnung unvollständig."
    ],
    "columns": [
      {
        "title": "Handelsmenge",
        "tone": "neutral",
        "points": [
          "Geschäfte über 10 und 6 Einheiten.",
          "Summe der einmal gezählten Ausführungen: 16."
        ]
      },
      {
        "title": "Nettolieferung",
        "tone": "positive",
        "points": [
          "10 erhalten minus 6 liefern.",
          "Verbleibend 4 Aktien erhalten."
        ]
      }
    ],
    "prompt": "Welche Zahl beschreibt die gehandelte Menge über beide Geschäfte?",
    "answers": [
      {
        "label": "Vier, weil nur das Netto als Trade zählt.",
        "explanation": "Vier ist die Nettolieferung."
      },
      {
        "label": "32, weil Kauf und Verkauf jeweils doppelt zählen.",
        "explanation": "Jede ausgeführte Einheit wird je Geschäft einmal gezählt."
      },
      {
        "label": "16 Einheiten.",
        "explanation": "Richtig: Das Netting verringert nicht rückwirkend die Ausführungen."
      }
    ],
    "correct": 2,
    "rule": "Handelsstatistik und verbleibende Abwicklungspflichten getrennt halten."
  },
  {
    "title": "Nicht alles darf miteinander verrechnet werden",
    "summary": "Produkt, Währung und Termin können die Verrechnungsgruppe begrenzen.",
    "paragraphs": [
      "Eine Verrechnungsgruppe umfasst die Verpflichtungen, die nach den Systemregeln zusammenpassen. Unterschiedliche Wertpapiere lassen sich nicht einfach als gleiche Stücke gegeneinander abziehen. Auch Termine und Währungen können Grenzen setzen.",
      "Unser Teilnehmer soll vier Aktien A erhalten und vier Aktien B liefern. A und B sind verschiedene Produkte. Nach unserer Regel bleiben beide Stückpflichten getrennt. Vier A minus vier B ist keine Nettolieferung von null Aktien eines bestimmten Produkts.",
      "Auch Geldbeträge in Euro und Dollar brauchen eine ausdrücklich geregelte Umrechnung, bevor man sie vergleichen könnte. Für dieses Beispiel ist keine solche Umrechnung vorgesehen. Gleiche Zahlen allein machen Pflichten nicht gleichartig."
    ],
    "columns": [
      {
        "title": "Produkt A",
        "tone": "neutral",
        "points": [
          "4 Aktien A erhalten.",
          "Eigene Lieferpflicht."
        ]
      },
      {
        "title": "Produkt B",
        "tone": "positive",
        "points": [
          "4 Aktien B liefern.",
          "Keine Stückverrechnung mit A im Fall."
        ]
      }
    ],
    "prompt": "Kannst du die beiden Stückpflichten einfach auf null setzen?",
    "answers": [
      {
        "label": "Nein, A und B sind verschiedene Produkte.",
        "explanation": "Richtig: Die Stücke gehören nicht zur gleichen Verrechnungsgruppe."
      },
      {
        "label": "Ja, weil beide Zahlen vier sind.",
        "explanation": "Die gleiche Zahl ersetzt nicht die Produktgleichheit."
      },
      {
        "label": "Ja, und Euro sind dann automatisch Dollar.",
        "explanation": "Verschiedene Währungen sind ebenfalls nicht identisch."
      }
    ],
    "correct": 0,
    "rule": "Vor Netting Produkt, Währung, Termin und Systemregeln abgleichen."
  },
  {
    "title": "Settlement ist die tatsächliche Erfüllung",
    "summary": "Geld und Wertpapiere werden nach dem vorgesehenen Verfahren übertragen.",
    "paragraphs": [
      "Settlement heißt Abwicklung oder Erfüllung des Geschäfts. Beim Wertpapierkauf betrifft das die tatsächliche Übertragung der Wertpapiere und des Geldes. Ein zuvor geplanter Termin ist noch keine Meldung über den Erfolg.",
      "Unser Geschäft betrifft drei Aktien für 120 Euro. Am vorgesehenen Tag wird die Übertragung der drei Aktien und der 120 Euro bestätigt. Nach den Regeln unseres Falls ist damit dieses Geschäft abgewickelt.",
      "Das sagt noch nichts über spätere Geschäfte, Dividenden oder den aktuellen Kurs. Eine endgültige Übertragung in einem System und eine Anzeige im Kundendepot können zudem unterschiedliche Meldungen sein. Lies immer, welchen Schritt der Status tatsächlich bestätigt."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "Pflichten festgestellt.",
          "Übertragung bisher nur geplant."
        ]
      },
      {
        "title": "Jetzt im Fall",
        "tone": "positive",
        "points": [
          "3 Aktien und 120 Euro übertragen.",
          "Abwicklung bestätigt."
        ]
      }
    ],
    "prompt": "Welche Meldung belegt hier das Settlement?",
    "answers": [
      {
        "label": "Nur die ursprüngliche Auftragsannahme.",
        "explanation": "Die lag vor der Ausführung und Abwicklung."
      },
      {
        "label": "Die bestätigte Übertragung von Aktien und Geld.",
        "explanation": "Richtig: Ein geplanter Termin allein reicht nicht."
      },
      {
        "label": "Nur ein unveränderter Aktienkurs.",
        "explanation": "Ein Kurs beschreibt keinen Übertragungsstatus."
      }
    ],
    "correct": 1,
    "rule": "Geplante Abwicklung und bestätigte Erfüllung unterscheiden."
  },
  {
    "title": "Lieferung gegen Zahlung",
    "summary": "DvP verknüpft Wertpapierlieferung und Geldzahlung.",
    "paragraphs": [
      "Delivery versus Payment heißt Lieferung gegen Zahlung. Die Abkürzung lautet DvP. Der Mechanismus verknüpft die beiden Seiten so, dass die Lieferung nur mit der entsprechenden Zahlung erfolgt.",
      "In unserem DvP-Fall sollen drei Aktien gegen 120 Euro übertragen werden. Steht das notwendige Geld nicht bereit, kann die Übertragung nach unserer Regel nicht erfolgreich abgeschlossen werden. Die Aktien werden nicht einfach ohne den passenden Geldteil endgültig ausgeliefert.",
      "Das verringert das Risiko, die eigene Leistung vollständig zu übertragen und die Gegenleistung nicht zu erhalten. DvP garantiert aber keinen steigenden Kurs und verhindert nicht jede Verzögerung. Auch Daten, Bestände und technische Voraussetzungen müssen passen."
    ],
    "columns": [
      {
        "title": "Verknüpfte Seiten",
        "tone": "neutral",
        "points": [
          "3 Aktien liefern.",
          "Passende Zahlung 120 Euro."
        ]
      },
      {
        "title": "Falls Geld fehlt",
        "tone": "positive",
        "points": [
          "DvP-Abwicklung im Fall nicht abgeschlossen.",
          "Kein Beleg für erfolgreiche Lieferung gegen Zahlung."
        ]
      }
    ],
    "prompt": "Welche Aufgabe hat DvP?",
    "answers": [
      {
        "label": "Jeden Kursverlust zu verhindern.",
        "explanation": "Die Übertragung schützt nicht vor einer Marktpreisänderung."
      },
      {
        "label": "Geldmangel automatisch durch neues Geld zu ersetzen.",
        "explanation": "DvP erzeugt keine fehlende Deckung."
      },
      {
        "label": "Die Wertpapierlieferung mit der Zahlung zu verknüpfen.",
        "explanation": "Richtig: Beide Leistungen werden im Mechanismus aneinander gebunden."
      }
    ],
    "correct": 2,
    "rule": "DvP als Schutz der gegenseitigen Leistung verstehen, nicht als Renditegarantie."
  },
  {
    "title": "T ist der Handelstag der Fristrechnung",
    "summary": "T+1 zählt einen vorgesehenen Abwicklungstag nach dem Geschäft.",
    "paragraphs": [
      "In Abwicklungsangaben steht T für das Geschäftsdatum. T+1 bedeutet in unserem Fall einen gültigen Abwicklungstag nach diesem Datum. Das ist keine pauschale Aussage für jedes Produkt und jedes Land.",
      "Unser Übungskalender zählt Montag bis Freitag und hat keine Feiertage. Ein Geschäft am Montag mit T+1 soll am Dienstag abgewickelt werden. Ein Geschäft am Freitag soll erst am Montag abgewickelt werden. Samstag und Sonntag zählen hier nicht.",
      "T+1 heißt deshalb nicht immer genau 24 Stunden nach dem Klick. Die Frist und der zugehörige Kalender müssen zum Produkt und Abwicklungsweg passen. Der errechnete Termin ist weiterhin geplant, bis der tatsächliche Abschluss bestätigt ist."
    ],
    "columns": [
      {
        "title": "Geschäft am Montag",
        "tone": "neutral",
        "points": [
          "T: Montag.",
          "T+1 im Fall: Dienstag."
        ]
      },
      {
        "title": "Geschäft am Freitag",
        "tone": "positive",
        "points": [
          "Wochenende zählt nicht.",
          "T+1 im Fall: Montag."
        ]
      }
    ],
    "prompt": "Welcher geplante Tag folgt auf das Freitagsgeschäft?",
    "answers": [
      {
        "label": "Montag nach unserem Kalender.",
        "explanation": "Richtig: Samstag und Sonntag werden übersprungen."
      },
      {
        "label": "Samstag, immer genau 24 Stunden später.",
        "explanation": "Der Fall zählt gültige Abwicklungstage, nicht Stunden."
      },
      {
        "label": "Freitag, weil T+1 dasselbe Datum bedeutet.",
        "explanation": "Der Zusatz eins verlangt einen weiteren gültigen Tag."
      }
    ],
    "correct": 0,
    "rule": "Frist mit dem passenden Abwicklungskalender rechnen."
  },
  {
    "title": "Feiertage können den Termin verschieben",
    "summary": "Der Abwicklungskalender muss nicht der Handelskalender sein.",
    "paragraphs": [
      "Ein Handelstag und ein Abwicklungstag können verschiedene Kalender haben. Ein Geschäft kann stattfinden, während das zuständige Abwicklungssystem an einem anderen Tag geschlossen bleibt. Darum reicht der Kurskalender nicht immer aus.",
      "Unser Geschäft findet am Freitag statt und hat T+2. Das Wochenende zählt nicht. Der folgende Montag ist im Übungskalender ein Abwicklungsfeiertag. Dienstag ist dann der erste und Mittwoch der zweite gültige Tag.",
      "Der geplante Termin lautet deshalb Mittwoch. Diese Regel ist erfunden; echte Feiertage werden hier nicht behauptet. Bei mehreren beteiligten Systemen müssen deren Kalender und Fristen zusammenpassen."
    ],
    "columns": [
      {
        "title": "Nicht gezählte Tage",
        "tone": "neutral",
        "points": [
          "Samstag und Sonntag.",
          "Montag: Abwicklungsfeiertag im Fall."
        ]
      },
      {
        "title": "Gezählte Tage",
        "tone": "positive",
        "points": [
          "Dienstag = erster gültiger Tag.",
          "Mittwoch = zweiter; geplanter Termin."
        ]
      }
    ],
    "prompt": "Wann liegt T+2 für dieses Freitagsgeschäft?",
    "answers": [
      {
        "label": "Am Dienstag trotz des Abwicklungsfeiertags.",
        "explanation": "Dienstag ist erst der erste gültige Tag."
      },
      {
        "label": "Am Mittwoch nach dem genannten Kalender.",
        "explanation": "Richtig: Erst Dienstag und Mittwoch zählen."
      },
      {
        "label": "Am Sonntag, weil zwei Kalendertage addiert werden.",
        "explanation": "Der Fall zählt Abwicklungstage."
      }
    ],
    "correct": 1,
    "rule": "Handelskalender und Abwicklungskalender bei Fristen unterscheiden."
  },
  {
    "title": "Verwahrung: wer führt die Wertpapierbestände?",
    "summary": "Ein Depotbestand braucht Aufzeichnungen und eine Verwahrungskette.",
    "paragraphs": [
      "Ein Depot ist ein Konto für Wertpapierbestände. Verwahrung beschreibt die Aufbewahrung und Verwaltung von Wertpapieren und den dazugehörigen Bestandsaufzeichnungen. Das englische Wort Custody meint diese Aufgabe. Viele Wertpapiere werden über Buchungen statt als Papier im eigenen Schrank geführt.",
      "Im Fall weist das Kundendepot nach bestätigter Abwicklung drei Aktien aus. Eine Verwahrstelle führt die passenden Bestandsaufzeichnungen im vorgesehenen Verwahrungsweg. Je nach Modell können mehrere Stellen beteiligt sein.",
      "Der Brokerzugang und die Verwahrungsaufgabe sind nicht automatisch dieselbe Rolle, auch wenn ein Unternehmen mehrere Aufgaben übernimmt. Ein Bestandseintrag erklärt außerdem noch nicht alle rechtlichen Eigentumsfragen. Dafür gelten die tatsächliche Depotvereinbarung und das konkrete Verwahrmodell."
    ],
    "columns": [
      {
        "title": "Kundensicht",
        "tone": "neutral",
        "points": [
          "Depot zeigt 3 abgewickelte Aktien.",
          "Zugehöriger Status genannt."
        ]
      },
      {
        "title": "Verwahrungsaufgabe",
        "tone": "positive",
        "points": [
          "Bestände führen und verwalten.",
          "Kann mehrere Stellen umfassen."
        ]
      }
    ],
    "prompt": "Welche Aufgabe gehört zur Verwahrung?",
    "answers": [
      {
        "label": "Für jeden Tag einen höheren Kurs festlegen.",
        "explanation": "Verwahrung bestimmt nicht den Marktpreis."
      },
      {
        "label": "Jeden Auftrag sofort ausführen.",
        "explanation": "Auftragsausführung ist eine andere Funktion."
      },
      {
        "label": "Wertpapierbestände und zugehörige Aufzeichnungen verwalten.",
        "explanation": "Richtig: Das ist eine andere Aufgabe als die Preisfindung beim Handel."
      }
    ],
    "correct": 2,
    "rule": "Depotanzeige, Brokerrolle und Verwahrungsweg unterscheiden."
  },
  {
    "title": "Zentralverwahrer und CCP sind verschiedene Rollen",
    "summary": "Bestandsführung und zentrale Gegenpartei beantworten andere Fragen.",
    "paragraphs": [
      "Ein Zentralverwahrer wird auch CSD genannt, kurz für Central Securities Depository. Er hat Aufgaben bei der zentralen Wertpapierverwahrung und kann ein Wertpapierabwicklungssystem betreiben. Eine CCP ist dagegen die zentrale Vertragsgegenpartei im Clearingmodell.",
      "Unser Fall hat beide Rollen. Die CCP ordnet die Vertragspflichten gegenüber den teilnehmenden Firmen. Im Abwicklungssystem des Zentralverwahrers werden die vorgesehenen Wertpapierübertragungen verbucht. Die Aufgaben arbeiten zusammen, sind aber nicht gleich.",
      "Eine Organisation kann je nach Aufbau mehrere Funktionen anbieten. Aus ihrem Namen allein solltest du deshalb keine vollständige Zuständigkeit ableiten. Frage konkret nach Clearing, Übertragung und Bestandsführung."
    ],
    "columns": [
      {
        "title": "CCP-Rolle im Fall",
        "tone": "neutral",
        "points": [
          "Zentrale Gegenpartei.",
          "Pflichten im Clearingmodell."
        ]
      },
      {
        "title": "CSD-Rolle im Fall",
        "tone": "positive",
        "points": [
          "Zentrale Wertpapierverwahrung.",
          "Abwicklungssystem für Wertpapierübertragungen."
        ]
      }
    ],
    "prompt": "Warum werden CCP und CSD getrennt erklärt?",
    "answers": [
      {
        "label": "Weil zentrale Gegenpartei und Verwahrungs-/Abwicklungsrolle unterschiedliche Aufgaben sind.",
        "explanation": "Richtig: Sie können zusammenarbeiten, ohne dieselbe Funktion zu sein."
      },
      {
        "label": "Weil eine CSD niemals Wertpapierbuchungen führt.",
        "explanation": "Gerade solche Aufgaben gehören zum beschriebenen Modell."
      },
      {
        "label": "Weil eine CCP den täglichen Aktienkurs festsetzt.",
        "explanation": "Das ist nicht ihre hier erklärte Aufgabe."
      }
    ],
    "correct": 0,
    "rule": "Institutionen über ihre konkrete Funktion unterscheiden."
  },
  {
    "title": "Angezeigt, abgewickelt und auszahlbar",
    "summary": "Eine Zahl im Konto sagt ohne Status noch nicht, was du damit tun kannst.",
    "paragraphs": [
      "Eine App kann ein Geschäft und seinen erwarteten Geldbetrag anzeigen, bevor die Abwicklung abgeschlossen ist. Manche Kontomodelle erlauben bestimmte neue Käufe schon vorher. Das heißt noch nicht, dass der Betrag auch auszahlbar ist.",
      "Unser Verkauf ergibt 150 Euro. Die App zeigt diesen Betrag als noch nicht abgewickelt. Nach unserer Brokerregel darf er bereits für bestimmte Käufe verwendet werden, aber noch nicht ausgezahlt werden. Das ist nur die Regel dieses Übungskontos.",
      "Unterscheide deshalb Kontostand, Kaufkraft und auszahlbaren Betrag. Kaufkraft bedeutet den nach den Kontoregeln für neue Geschäfte verfügbaren Rahmen. Ein echtes Konto braucht dafür seine tatsächlichen Bedingungen und Statusangaben."
    ],
    "columns": [
      {
        "title": "Anzeige im Fall",
        "tone": "neutral",
        "points": [
          "Verkaufserlös 150 Euro sichtbar.",
          "Noch nicht abgewickelt."
        ]
      },
      {
        "title": "Brokerregel im Fall",
        "tone": "positive",
        "points": [
          "Für bestimmte Käufe nutzbar.",
          "Noch nicht auszahlbar."
        ]
      }
    ],
    "prompt": "Was folgt aus der Anzeige von 150 Euro im Fall?",
    "answers": [
      {
        "label": "Der Verkauf hat nie stattgefunden.",
        "explanation": "Ein bestätigter Trade kann bereits angezeigt werden, bevor er abgewickelt ist."
      },
      {
        "label": "Der Betrag ist sichtbar, aber noch nicht auszahlbar.",
        "explanation": "Richtig: Die genannte Kaufmöglichkeit ist keine Auszahlungserlaubnis."
      },
      {
        "label": "Alle 150 Euro sind sicher sofort auszahlbar.",
        "explanation": "Die Brokerregel schließt das hier aus."
      }
    ],
    "correct": 1,
    "rule": "Kaufkraft, Abwicklungsstatus und Auszahlbarkeit getrennt prüfen."
  },
  {
    "title": "Eine gescheiterte Lieferung löscht nicht einfach den Trade",
    "summary": "Ein Settlement Fail betrifft die geplante Erfüllung.",
    "paragraphs": [
      "Ein Settlement Fail liegt vor, wenn eine vorgesehene Abwicklung zum fälligen Zeitpunkt nicht erfolgreich erfolgt. Dafür können etwa fehlende Wertpapiere, fehlendes Geld oder fehlerhafte Daten verantwortlich sein. Der genaue Grund muss geprüft werden.",
      "Im Fall ist der Kauf von drei Aktien zu 40 bestätigt. Am geplanten Tag fehlen bei der liefernden Seite die notwendigen Aktien. Das Abwicklungssystem meldet die Lieferung als nicht erfolgt. Der Handelsabschluss wird nach unserer Regel dadurch nicht automatisch gelöscht.",
      "Die zuständigen Stellen müssen den offenen Zustand nach den geltenden Regeln klären. Eine verspätete Lieferung ist nicht dasselbe wie ein nie angenommener Auftrag. Für mögliche Nachlieferung, weitere Maßnahmen oder Kosten braucht es den tatsächlichen Vertrag und die Systemregeln."
    ],
    "columns": [
      {
        "title": "Bereits bestätigt",
        "tone": "neutral",
        "points": [
          "Kauf 3 zu 40.",
          "Trade bleibt nach unserer Regel bestehen."
        ]
      },
      {
        "title": "Am geplanten Termin",
        "tone": "positive",
        "points": [
          "Aktienlieferung fehlt.",
          "Abwicklung als nicht erfolgt gemeldet."
        ]
      }
    ],
    "prompt": "Was beschreibt der Fail im Fall?",
    "answers": [
      {
        "label": "Der Auftrag wurde nie ausgeführt.",
        "explanation": "Der Fall bestätigt ausdrücklich den Handel."
      },
      {
        "label": "Die Aktien sind jetzt garantiert wertlos.",
        "explanation": "Eine Lieferstörung bestimmt nicht automatisch den Marktwert."
      },
      {
        "label": "Die fällige Lieferung ist nicht erfolgreich erfolgt.",
        "explanation": "Richtig: Der bestätigte Trade und der Lieferstatus sind unterschiedliche Angaben."
      }
    ],
    "correct": 2,
    "rule": "Handelsabschluss und Erfüllungsstörung als getrennte Zustände behandeln."
  },
  {
    "title": "Sicherheiten verringern Risiken – beseitigen sie aber nicht",
    "summary": "Auch zentrale Abwicklung braucht Risikovorsorge.",
    "paragraphs": [
      "Zwischen Geschäft und vollständiger Erfüllung können Risiken entstehen. Eine Vertragsseite könnte nicht mehr zahlen oder liefern. Systeme begrenzen solche Risiken mit Regeln und Sicherheiten. Der genaue Schutz hängt vom Modell ab.",
      "Unser Teilnehmer hinterlegt 30 Euro als Sicherheit für offene Verpflichtungen. Das bedeutet nicht, dass ein möglicher Verlust auf 30 Euro begrenzt ist. Im Fall kann die Verpflichtung bei einer ungünstigen Änderung höher werden und zusätzliche Mittel erfordern.",
      "Eine CCP kann Ausfallverfahren und gemeinsame Vorsorgemittel haben. Das macht Risiken beherrschbarer, aber nicht unsichtbar. Ob dein Broker oder Produkt bestimmte Sicherheiten verlangt, steht in den dafür geltenden Bedingungen."
    ],
    "columns": [
      {
        "title": "Sicherheit im Fall",
        "tone": "neutral",
        "points": [
          "30 Euro hinterlegt.",
          "Dient der Erfüllungsvorsorge."
        ]
      },
      {
        "title": "Grenze der Aussage",
        "tone": "positive",
        "points": [
          "Kein zugesagter Höchstverlust von 30.",
          "Zusätzliche Pflichten können entstehen."
        ]
      }
    ],
    "prompt": "Sind 30 Euro Sicherheit automatisch der größte mögliche Verlust?",
    "answers": [
      {
        "label": "Nein, die Sicherheit ist keine allgemeine Verlustgrenze.",
        "explanation": "Richtig: Höhe und Nachforderung folgen den konkreten Regeln."
      },
      {
        "label": "Ja, jeder höhere Verlust ist unmöglich.",
        "explanation": "Die Hinterlegung begrenzt nicht automatisch die Verpflichtung."
      },
      {
        "label": "Ja, deshalb braucht es keine Abwicklungsregeln.",
        "explanation": "Regeln und Vorsorge bleiben erforderlich."
      }
    ],
    "correct": 0,
    "rule": "Sicherheitsleistung nicht mit einer garantierten Verlustgrenze verwechseln."
  },
  {
    "title": "Initial Margin bei einem Future",
    "summary": "Eine Sicherheitsleistung ist nicht der Kaufpreis des Basiswerts.",
    "paragraphs": [
      "Bei Futures bezeichnet Initial Margin eine anfängliche Sicherheitsleistung nach den jeweiligen Regeln. Ein Future ist ein Vertrag mit künftigen Erfüllungspflichten. Der hinterlegte Betrag ist deshalb nicht einfach der vollständige Kaufpreis des Basiswerts.",
      "Unser erfundener Future hat einen Kurs von 100 Punkten und einen Multiplikator von zehn Euro je Punkt. Sein rechnerischer Nominalwert beträgt 1.000 Euro. Die Übungsregel verlangt 80 Euro Initial Margin. Diese Zahlen sind keine echte Produktanforderung.",
      "Der Nominalwert und die Sicherheitsleistung beantworten verschiedene Fragen. Die 80 Euro sind nicht automatisch eine Gebühr und begrenzen den möglichen Verlust nicht. Tatsächliche Anforderungen können sich nach Produkt, Position und Kontoregel ändern."
    ],
    "columns": [
      {
        "title": "Rechnerischer Bezug",
        "tone": "neutral",
        "points": [
          "100 Punkte × 10 Euro = 1.000 Euro.",
          "Nominalwert im Fall."
        ]
      },
      {
        "title": "Sicherheitsregel",
        "tone": "positive",
        "points": [
          "Initial Margin 80 Euro.",
          "Keine zugesagte Verlustobergrenze."
        ]
      }
    ],
    "prompt": "Was sind die 80 Euro im Beispiel?",
    "answers": [
      {
        "label": "Eine sichere maximale Verlustsumme.",
        "explanation": "Margin ist keine allgemeine Verlustgarantie."
      },
      {
        "label": "Die nach unserer Regel geforderte anfängliche Sicherheit.",
        "explanation": "Richtig: Sie sind nicht der vollständige Nominalwert."
      },
      {
        "label": "Der vollständige Kaufpreis von 1.000 Euro.",
        "explanation": "Die beiden Beträge haben verschiedene Bedeutungen."
      }
    ],
    "correct": 1,
    "rule": "Nominalwert, Sicherheitsleistung und Kosten getrennt lesen."
  },
  {
    "title": "Variation Margin: Wertänderungen ausgleichen",
    "summary": "Laufender Ausgleich ist nicht dasselbe wie anfängliche Sicherheit.",
    "paragraphs": [
      "Variation Margin bezeichnet einen Ausgleich von Wertänderungen nach den Vertrags- und Clearingregeln. Bei Futures werden Positionen regelmäßig zu festgelegten Abrechnungspreisen bewertet. Die Regeln können auch untertägige Zahlungen vorsehen.",
      "Unser Käufer hält einen erfundenen Future mit zehn Euro je Punkt. Der erste Abrechnungspreis ist 100, der nächste 103. Drei Punkte mal zehn Euro ergeben 30 Euro zugunsten der Kaufposition. Danach fällt der Abrechnungspreis von 103 auf 101: zwei Punkte mal zehn ergeben 20 Euro zu ihren Lasten.",
      "Ein Saldo ist das Ergebnis aus Zu- und Abflüssen. Über diese beiden Schritte beträgt er plus zehn Euro vor Kosten. Die Position ist dabei weiterhin offen. Der laufende Wertausgleich ist weder ein neuer Kauf des Basiswerts noch automatisch das Schließen des Vertrags."
    ],
    "columns": [
      {
        "title": "Erster Schritt",
        "tone": "neutral",
        "points": [
          "103 − 100 = +3 Punkte.",
          "3 × 10 = +30 Euro."
        ]
      },
      {
        "title": "Zweiter Schritt",
        "tone": "positive",
        "points": [
          "101 − 103 = −2 Punkte → −20 Euro.",
          "Saldo +30 − 20 = +10 Euro vor Kosten."
        ]
      }
    ],
    "prompt": "Wie groß ist der Saldo der beiden Wertänderungen?",
    "answers": [
      {
        "label": "Plus 50 Euro, weil beide Bewegungen Gewinne sind.",
        "explanation": "Die zweite Bewegung belastet die Kaufposition."
      },
      {
        "label": "Null, weil die Position noch offen ist.",
        "explanation": "Ein laufender Ausgleich kann auch bei offener Position stattfinden."
      },
      {
        "label": "Plus zehn Euro vor Kosten.",
        "explanation": "Richtig: Der zweite Schritt nimmt 20 der vorherigen 30 zurück."
      }
    ],
    "correct": 2,
    "rule": "Wertausgleich Schritt für Schritt ab dem jeweils vorherigen Abrechnungspreis rechnen."
  },
  {
    "title": "Barausgleich und Lieferung bei Fälligkeit",
    "summary": "Der Vertrag bestimmt, wie ein Derivat am Ende erfüllt wird.",
    "paragraphs": [
      "Derivate können unterschiedlich erfüllt werden. Barausgleich bedeutet eine nach der Vertragsformel berechnete Geldzahlung. Bei einem lieferbaren Vertrag kann dagegen eine bestimmte Ware oder ein Wertpapier übertragen werden. Das folgt aus den Produktregeln.",
      "Unser Vertrag A sieht nur einen Barausgleich vor. Vertrag B sieht die Lieferung einer genau beschriebenen Ware vor. Beide sind erfundene Modelle. Wer A hält, erhält deshalb nach diesem Modell nicht automatisch die Ware von B.",
      "Vor der Fälligkeit müssen auch die Vorgaben des Brokers und mögliche frühere Fristen bekannt sein. Dieses Kapitel lehrt die Unterscheidung, keine Anleitung zur echten Lieferung. Ein Aktienkauf und ein Future haben nicht automatisch dieselbe Abwicklung."
    ],
    "columns": [
      {
        "title": "Vertrag A",
        "tone": "neutral",
        "points": [
          "Barausgleich nach Formel.",
          "Keine Warenlieferung in diesem Modell."
        ]
      },
      {
        "title": "Vertrag B",
        "tone": "positive",
        "points": [
          "Vorgesehene Warenlieferung.",
          "Eigene Vertrags- und Zugangsregeln."
        ]
      }
    ],
    "prompt": "Welche Quelle entscheidet über die Erfüllungsart?",
    "answers": [
      {
        "label": "Die Regeln des konkreten Vertrags und Abwicklungswegs.",
        "explanation": "Richtig: Der Name Derivat allein legt die Erfüllung nicht fest."
      },
      {
        "label": "Allein die Farbe des Charts.",
        "explanation": "Ein Chart enthält keine vollständigen Lieferbedingungen."
      },
      {
        "label": "Immer der Ablauf eines beliebigen Aktienkaufs.",
        "explanation": "Ein Derivat kann andere Erfüllungsregeln haben."
      }
    ],
    "correct": 0,
    "rule": "Erfüllungsart und Fristen für das konkrete Produkt nachlesen."
  },
  {
    "title": "Eine Position schließen ist nicht dasselbe wie einen Auftrag löschen",
    "summary": "Ein Gegengeschäft kann eine offene Position ausgleichen.",
    "paragraphs": [
      "Ein offener Auftrag ist ein noch nicht vollständig ausgeführter Handelswunsch. Eine offene Position entsteht dagegen aus bereits ausgeführten Geschäften. Das Löschen eines Auftrags beendet deshalb nicht automatisch eine bestehende Position.",
      "Unser Teilnehmer hat einen gekauften Future, also eine Position von plus eins. Im selben Konto verkauft er einen identischen Kontrakt. Unser Kontomodell verrechnet beide Positionen. Plus eins minus eins ergibt null. Ein bloßer Stornierungswunsch für einen anderen Auftrag hätte das nicht bewirkt.",
      "Die bestätigten Geschäfte und ihre Geldfolgen bleiben in der Historie. Eine Positionsanzeige von null sagt nicht, dass nie gehandelt wurde. Bei anderen Produkten oder Kontomodellen können Zuordnung und Verrechnung anders geregelt sein."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "Identischer Future im selben Konto: +1.",
          "Bestehende Kaufposition."
        ]
      },
      {
        "title": "Bestätigtes Gegengeschäft",
        "tone": "positive",
        "points": [
          "Verkauf von 1; Positionsverrechnung erlaubt.",
          "+1 − 1 = 0; Historie bleibt."
        ]
      }
    ],
    "prompt": "Was schließt die Position nach unserem Modell?",
    "answers": [
      {
        "label": "Das Ausblenden der Position in der App.",
        "explanation": "Eine Anzeigeänderung ist kein Handelsabschluss."
      },
      {
        "label": "Das ausgeführte Gegengeschäft über einen identischen Kontrakt.",
        "explanation": "Richtig: Es wird im Konto mit der Kaufposition verrechnet."
      },
      {
        "label": "Nur das Löschen eines nicht ausgeführten anderen Auftrags.",
        "explanation": "Das ändert nicht die schon bestehende Position."
      }
    ],
    "correct": 1,
    "rule": "Auftragsstatus, Positionsstatus und Abwicklungsfolgen auseinanderhalten."
  },
  {
    "title": "Dein Check nach dem Trade",
    "summary": "Ein vollständiger Bericht verbindet Mengen, Geld und Status.",
    "paragraphs": [
      "Prüfe nach einem Geschäft Produkt, Konto, Richtung und bestätigte Ausführungen. Rechne Mengen und Preisbeträge zusammen. Ergänze die tatsächliche Gebührenregel. Lies dann Clearingpflichten, geplanten Termin, Abwicklungsstatus und verfügbare Beträge getrennt.",
      "Im Fall kaufst du zwei Aktien zu 40 und eine zu 42. Der Preisbetrag ist 80 plus 42, also 122 Euro. Eine einmalige Auftragsgebühr von zwei Euro ergibt 124 Euro Gesamtbelastung. Der Trade ist vollständig bestätigt. Die Lieferung der drei Aktien ist noch geplant, nicht bestätigt.",
      "Die App zeigt bereits drei Aktien, kennzeichnet sie aber als noch nicht abgewickelt. Daraus folgt keine abgeschlossene Lieferung. Du hältst fest: drei gekauft, 124 Euro nach unserer Kostenregel, Abwicklung offen. Im nächsten Kapitel erklärst du einen Markt selbst anhand der gelernten Schritte."
    ],
    "columns": [
      {
        "title": "Rechnung im Fall",
        "tone": "neutral",
        "points": [
          "2 × 40 + 1 × 42 = 122 Euro.",
          "122 + 2 Euro Gebühr = 124 Euro."
        ]
      },
      {
        "title": "Status im Fall",
        "tone": "positive",
        "points": [
          "3 Aktien gekauft, Trade bestätigt.",
          "Lieferung geplant; Abwicklung noch offen."
        ]
      }
    ],
    "prompt": "Welche Aussage wird durch den Fall gestützt?",
    "answers": [
      {
        "label": "Drei geliefert und Geld sicher bereits auszahlbar.",
        "explanation": "Diese Statusmeldungen fehlen ausdrücklich."
      },
      {
        "label": "Nur zwei gekauft, weil 42 ein anderer Preis ist.",
        "explanation": "Die dritte Aktie gehört als eigene Teilfüllung dazu."
      },
      {
        "label": "Drei gekauft, 124 Euro Gesamtbelastung; Abwicklung noch offen.",
        "explanation": "Richtig: Die Appanzeige ersetzt keine bestätigte Lieferung."
      }
    ],
    "correct": 2,
    "rule": "Menge, Gesamtbetrag und bestätigten Abwicklungsstatus zusammen dokumentieren."
  }
] as const;

export const marketBasicsChapterElevenLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-11.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 11 · Was passiert nach dem Trade?', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 11', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
