import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Drei Regeln gehören zum selben Auftrag",
    "summary": "Preis, Zeit und Menge beantworten verschiedene Fragen.",
    "paragraphs": [
      "Lea möchte sechs Aktien der erfundenen Firma Miro kaufen. Ihre Preisgrenze beträgt 30,20 Euro je Stück. Damit ist noch nicht klar, wie lange der Auftrag gelten soll. Auch ist offen, ob Lea eine kleinere Teilmenge akzeptiert.",
      "Die Preisregel sagt: höchstens 30,20 Euro. Die Zeitregel sagt zum Beispiel: bis zum Ende der heutigen Lernsession. Die Mengenregel kann Teilausführungen erlauben oder die volle Menge verlangen. Eine Angabe ersetzt die anderen nicht.",
      "Alle folgenden Fälle sind eigene Lernmodelle. Jedes Modell nennt seinen Handelsweg, seine erlaubten Bedingungen und die Restbehandlung. Ob ein echter Anbieter dieselbe Kombination unterstützt, prüfst du in dessen Auftragsregeln."
    ],
    "columns": [
      {
        "title": "Preis und Zeit",
        "tone": "neutral",
        "points": [
          "Höchstens 30,20 Euro je Stück.",
          "Bis zu einem festgelegten Ende."
        ]
      },
      {
        "title": "Menge",
        "tone": "positive",
        "points": [
          "Sechs Aktien gewünscht.",
          "Teilausführungen erlauben oder volle Menge verlangen."
        ]
      }
    ],
    "prompt": "Welche Frage beantwortet die Preisgrenze nicht?",
    "answers": [
      {
        "label": "Ob eine Teilmenge gekauft werden darf und wie lange der Auftrag gilt.",
        "explanation": "Richtig: Zeit- und Mengenbedingungen brauchen eigene Angaben."
      },
      {
        "label": "Welcher höchste Stückpreis akzeptiert wird.",
        "explanation": "Genau diese Frage beantwortet das Kauflimit."
      },
      {
        "label": "Ob 30,40 Euro innerhalb von 30,20 liegt.",
        "explanation": "Die Grenze zeigt eindeutig, dass 30,40 zu hoch ist."
      }
    ],
    "correct": 0,
    "rule": "Lies Preisregel, Zeitregel und Mengenregel gemeinsam."
  },
  {
    "title": "Tagesorder bedeutet ein festgelegtes Sessionende",
    "summary": "Ein Handelstag endet nicht überall um Mitternacht.",
    "paragraphs": [
      "Unser erfundener Lernmarkt handelt heute von 9 bis 17 Uhr Marktzeit. Seine Tagesorders gelten bis unmittelbar vor 17 Uhr. Noch offene Mengen laufen um 17 Uhr ab. Das System meldet den Ablauf anschließend.",
      "Eine um 16:58 angenommene Tagesorder hat damit nur ein kurzes Restfenster. Es beginnt keine neue Gültigkeit von 24 Stunden. Auch endet sie nicht automatisch um Mitternacht in Leas Wohnort.",
      "Die Uhrzeiten sind ausdrücklich Übungsregeln. Echte Produkte und Anbieter können andere Sessions und Tagesgrenzen haben. Prüfe die betreffende Zeitzone und das bestätigte Ende, bevor du aus dem Wort Tag eine Dauer ableitest."
    ],
    "columns": [
      {
        "title": "Lernkalender",
        "tone": "neutral",
        "points": [
          "Session 9 bis 17 Uhr Marktzeit.",
          "Tagesorder endet um 17 Uhr."
        ]
      },
      {
        "title": "Späte Annahme",
        "tone": "positive",
        "points": [
          "Order um 16:58 angenommen.",
          "Nur bis zum genannten Sessionende gültig."
        ]
      }
    ],
    "prompt": "Wann endet die um 16:58 angenommene Tagesorder im Lernmarkt?",
    "answers": [
      {
        "label": "Immer um Mitternacht in Deutschland.",
        "explanation": "Die Regel verwendet die ausdrücklich genannte Marktzeit."
      },
      {
        "label": "Um 17 Uhr Marktzeit.",
        "explanation": "Richtig: Sie endet mit der festgelegten Session, nicht erst nach 24 Stunden."
      },
      {
        "label": "Am nächsten Tag um 16:58.",
        "explanation": "Diese Dauer steht nicht in der Tagesorder-Regel."
      }
    ],
    "correct": 1,
    "rule": "Tagesorder heißt die festgelegte Tagesgrenze und keine feste 24-Stunden-Dauer."
  },
  {
    "title": "Den Hauptauftrag am unveränderten Buch prüfen",
    "summary": "Innerhalb des Limits fehlt noch ein Stück.",
    "paragraphs": [
      "Der Hauptfall bietet zwei Aktien zu 30,00 Euro, eine zu 30,10 und zwei zu 30,20 Euro an. Weitere fünf liegen bei 30,40. Lea kauft sechs Stück mit Limit 30,20 als Tagesorder. Teilausführungen sind erlaubt.",
      "Die ersten fünf liegen innerhalb der Preisgrenze. Ihr Kaufwert ist 60,00 + 30,10 + 60,40 = 150,50 Euro. Die sechste Aktie wäre erst bei 30,40 verfügbar und darf nicht gekauft werden. Ein Kaufrest von einer Aktie wartet bei 30,20.",
      "Wir nehmen für diesen Schritt keine weiteren Aufträge, Reserven oder Buchänderungen an. Im Hauptfall wird der Rest vor Tagesende nicht ausgeführt. Getrennte Alternativen beginnen jeweils mit ihrem ausdrücklich genannten Ausgangsbuch."
    ],
    "columns": [
      {
        "title": "Zulässige Menge",
        "tone": "neutral",
        "points": [
          "Zwei bei 30,00; eine bei 30,10; zwei bei 30,20 Euro.",
          "Fünf gekauft für 150,50 Euro."
        ]
      },
      {
        "title": "Nicht zulässig",
        "tone": "positive",
        "points": [
          "Nächster Ask 30,40 Euro.",
          "Eine Aktie wartet bei Limit 30,20."
        ]
      }
    ],
    "prompt": "Wie viele Aktien sind zunächst gekauft?",
    "answers": [
      {
        "label": "Sechs Aktien.",
        "explanation": "Die sechste müsste zu einem Preis über dem Limit gekauft werden."
      },
      {
        "label": "Keine, weil sechs gewünscht waren.",
        "explanation": "Diese Tagesorder erlaubt ausdrücklich Teilausführungen."
      },
      {
        "label": "Fünf Aktien.",
        "explanation": "Richtig: Nur fünf angebotene Stück liegen innerhalb der Kaufgrenze."
      }
    ],
    "correct": 2,
    "rule": "Zähle nur verfügbare Stücke innerhalb der bestätigten Preisgrenze."
  },
  {
    "title": "Ablauf betrifft nur die offene Menge",
    "summary": "Gekaufte Aktien bleiben nach Tagesende bestehen.",
    "paragraphs": [
      "Wir setzen den Hauptfall fort. Lea hat fünf Aktien gekauft und eine noch offen. Bis unmittelbar vor 17 Uhr kommt kein weiterer zulässiger Verkäufer. Um 17 Uhr läuft die offene Restmenge nach der Tagesregel ab.",
      "Der bestätigte Abschluss lautet: fünf ausgeführt, eine abgelaufen, null offen. Die fünf gekauften Aktien bleiben im Bestand. Das Tagesende hat keine Positionsschließung und keinen Rückverkauf ausgelöst.",
      "Eine verschwundene Zeile in einer Ansicht genügt nicht als Nachweis. Lea prüft den endgültigen Status der richtigen Auftragskennung und die Ausführungsberichte. Der Ablauf betrifft eine Anweisung, nicht automatisch die schon gehaltenen Produkte."
    ],
    "columns": [
      {
        "title": "Vor 17 Uhr",
        "tone": "neutral",
        "points": [
          "Fünf Aktien im Bestand.",
          "Eine Kaufaktie noch offen."
        ]
      },
      {
        "title": "Nach bestätigtem Ablauf",
        "tone": "positive",
        "points": [
          "Eine Restaktie abgelaufen; null offen.",
          "Fünf Aktien weiterhin gehalten."
        ]
      }
    ],
    "prompt": "Wie viele Aktien besitzt Lea nach dem Ablauf des Hauptrests?",
    "answers": [
      {
        "label": "Fünf Aktien.",
        "explanation": "Richtig: Nur die nicht ausgeführte Restmenge endet."
      },
      {
        "label": "Keine, weil Tagesorders täglich den Bestand verkaufen.",
        "explanation": "Eine Auftragsgültigkeit ist keine automatische Positionsschließung."
      },
      {
        "label": "Sechs, weil der Ablauf die letzte Aktie nachliefert.",
        "explanation": "Die offene Aktie wurde nicht gekauft."
      }
    ],
    "correct": 0,
    "rule": "Ablauf entfernt einen offenen Rest und macht frühere Ausführungen nicht rückgängig."
  },
  {
    "title": "Laufzeit und Handelsphase sind getrennt",
    "summary": "Ein langer Auftrag muss nicht rund um die Uhr handeln.",
    "paragraphs": [
      "Ein eigener Lernfall erlaubt einen Auftrag bis Mittwoch um 17 Uhr Marktzeit. Ausführungen sind aber nur in den Lernsessions Montag, Dienstag und Mittwoch von 9 bis 17 Uhr zulässig. In den übrigen Stunden bleibt die Anweisung erhalten, ohne zu handeln.",
      "Die Laufzeit beschreibt, wie lange der Auftrag bestehen kann. Die Ausführungsphase beschreibt, wann das System ihn handeln lassen darf. Ein bis Mittwoch gültiger Auftrag hat deshalb im Lernfall keine Nacht-Ausführungserlaubnis.",
      "Echte Anbieter können spezielle Vor- und Nachbörsenbedingungen anbieten oder ausschließen. Auch eine App mit laufenden Kursen beweist keine aktive Ausführungsphase deiner Order. Lies Laufzeit und zugelassene Sessions getrennt."
    ],
    "columns": [
      {
        "title": "Laufzeit",
        "tone": "neutral",
        "points": [
          "Gültig bis Mittwoch 17 Uhr.",
          "Kann zwischen Sessions erhalten bleiben."
        ]
      },
      {
        "title": "Ausführungsphase",
        "tone": "positive",
        "points": [
          "Im Modell nur jeweils 9 bis 17 Uhr.",
          "Keine automatische Nacht-Handelsfreigabe."
        ]
      }
    ],
    "prompt": "Was folgt aus einer mehrtägigen Gültigkeit allein?",
    "answers": [
      {
        "label": "Dass die Order nachts zwingend gelöscht wird.",
        "explanation": "Das Modell lässt sie zwischen Sessions bestehen."
      },
      {
        "label": "Keine automatische Ausführungserlaubnis rund um die Uhr.",
        "explanation": "Richtig: Zulässige Handelsphasen sind eine eigene Regel."
      },
      {
        "label": "Dass jede Kursanzeige sofort eine Ausführung erlaubt.",
        "explanation": "Anzeige und zugelassene Handelsphase sind verschieden."
      }
    ],
    "correct": 1,
    "rule": "Gültigkeitsdauer und aktive Ausführungsphase sind zwei Regeln."
  },
  {
    "title": "GTC bedeutet keine unendliche Laufzeit",
    "summary": "Auch bis auf Widerruf kann Grenzen haben.",
    "paragraphs": [
      "GTC heißt Good Til Canceled, auf Deutsch etwa bis auf Widerruf. Widerruf bedeutet hier eine bestätigte Rücknahme. Ein solcher Auftrag kann über ein Tagesende hinaus bestehen. Sein Name allein verspricht aber keine unbegrenzte Dauer.",
      "Unser Anbieter im erfundenen Lernfall setzt als Höchstgrenze das Ende der dritten Lernsession. Die zulässigen Sessions bleiben jeweils 9 bis 17 Uhr. Ohne Ausführung oder frühere Stornierung meldet das System am dritten Ende den Ablauf.",
      "Diese Höchstgrenze ist keine pauschale Anbieterregel. In echten Bedingungen können andere Grenzen und weitere Löschereignisse stehen. Lea kontrolliert das bestätigte Enddatum und bestehende Orders regelmäßig, auch wenn sie die App länger nicht öffnet."
    ],
    "columns": [
      {
        "title": "GTC-Grundidee",
        "tone": "neutral",
        "points": [
          "Kann über die aktuelle Session hinaus bestehen.",
          "Bestätigte Rücknahme möglich."
        ]
      },
      {
        "title": "Grenze im Modell",
        "tone": "positive",
        "points": [
          "Spätestens Ende der dritten Lernsession.",
          "Keine unbegrenzte Zusage aus dem Namen."
        ]
      }
    ],
    "prompt": "Muss GTC im Lernfall unbegrenzt bestehen?",
    "answers": [
      {
        "label": "Ja, der Name verbietet jede Höchstdauer.",
        "explanation": "Die konkrete Laufzeit ergibt sich aus den Anbieterbedingungen."
      },
      {
        "label": "Nein, jede GTC-Order endet nach einer Minute.",
        "explanation": "Diese Behauptung gehört nicht zu unserer Regel."
      },
      {
        "label": "Nein, der Anbieter setzt das Ende der dritten Session als Grenze.",
        "explanation": "Richtig: Die ausdrücklich genannte Höchstdauer begrenzt den Auftrag."
      }
    ],
    "correct": 2,
    "rule": "GTC ist keine Zusage für ewige Gültigkeit."
  },
  {
    "title": "GTD braucht ein eindeutiges Ende",
    "summary": "Datum, Uhrzeit und Zeitzone gemeinsam lesen.",
    "paragraphs": [
      "GTD bedeutet hier Good Til Date: gültig bis zu einem festgelegten Termin. Leas Lernauftrag soll bis Mittwoch um 15 Uhr Marktzeit gelten. Die aktive Session reicht eigentlich bis 17 Uhr, aber ihr früherer Endtermin begrenzt die Order.",
      "Wir legen ausdrücklich fest: Um 15 Uhr läuft ein offener Rest ab. Ein Ereignis genau um 15 Uhr darf ihn nicht mehr ausführen. Vor 15 Uhr kann er nach den übrigen Regeln noch handeln. Das System bestätigt den endgültigen Ablauf.",
      "Die Behandlung einer exakten Grenzzeit ist eine Modellregel. Bei einem echten Auftrag prüfst du Datumsformat, Zeitzone und wirksames Ende beim Anbieter. Ein Datum ohne klare Uhrzeit kann für den gewünschten Ablauf zu ungenau sein."
    ],
    "columns": [
      {
        "title": "Anweisung",
        "tone": "neutral",
        "points": [
          "Bis Mittwoch 15 Uhr Marktzeit.",
          "Dieses Ende liegt vor Sessionende."
        ]
      },
      {
        "title": "Zeitgrenze im Modell",
        "tone": "positive",
        "points": [
          "Vor 15 Uhr noch gültig.",
          "Ab 15 Uhr kein Handel des offenen Rests."
        ]
      }
    ],
    "prompt": "Ist der Lernauftrag um genau 15 Uhr noch ausführbar?",
    "answers": [
      {
        "label": "Nein, die festgelegte Gültigkeit endet bereits um 15 Uhr.",
        "explanation": "Richtig: Die Übungsregel schließt den Grenzzeitpunkt ausdrücklich aus."
      },
      {
        "label": "Ja, weil die Session noch bis 17 Uhr läuft.",
        "explanation": "Der eigene Endtermin ist früher als das Sessionende."
      },
      {
        "label": "Ja, jeder Termin bedeutet automatisch Mitternacht.",
        "explanation": "Die Uhrzeit wurde hier ausdrücklich festgelegt."
      }
    ],
    "correct": 0,
    "rule": "Ein Termin braucht Datum, Uhrzeit, Zeitzone und eine klare Grenzregel."
  },
  {
    "title": "Eine Stornierungsanfrage beendet noch nichts sicher",
    "summary": "Verarbeitungsreihenfolge kann die Restmenge verändern.",
    "paragraphs": [
      "In einer getrennten Folge hat Lea fünf Aktien gekauft und eine offene Tagesorder-Aktie. Um 16:59 fragt sie die Stornierung des Rests an. Bevor die Anfrage verarbeitet wird, wird die letzte Aktie zu 30,20 Euro gekauft.",
      "Der Auftrag ist damit vollständig ausgeführt. Die Antwort meldet, dass kein offener Rest mehr storniert werden kann. Lea hat sechs Aktien gekauft. Der Kaufwert beträgt 150,50 + 30,20 = 180,70 Euro vor Gebühren.",
      "Dieser Fall ist nicht der Hauptablauf mit einem abgelaufenen Rest. Er zeigt, dass Sendezeit und Verarbeitungszeit verschieden sein können. Lies die endgültigen Ausführungen und die Antwort zur passenden Auftragskennung."
    ],
    "columns": [
      {
        "title": "Anfrage",
        "tone": "neutral",
        "points": [
          "Eine Restaktie soll gelöscht werden.",
          "Anfrage wird noch verarbeitet."
        ]
      },
      {
        "title": "Zwischenereignis",
        "tone": "positive",
        "points": [
          "Eine Aktie vorher zu 30,20 gekauft.",
          "Sechs ausgeführt für 180,70 Euro."
        ]
      }
    ],
    "prompt": "Wie viele Aktien hat Lea am Ende dieser getrennten Folge?",
    "answers": [
      {
        "label": "Keine, weil Stornieren frühere Ausführungen entfernt.",
        "explanation": "Bereits gekaufte Aktien werden dadurch nicht rückgängig gemacht."
      },
      {
        "label": "Sechs Aktien.",
        "explanation": "Richtig: Die letzte Aktie wurde vor der Verarbeitung der Stornierung gekauft."
      },
      {
        "label": "Fünf, weil der Klick alle weiteren Trades verhindert.",
        "explanation": "Eine Anfrage ist noch keine bestätigte Löschung."
      }
    ],
    "correct": 1,
    "rule": "Die endgültige Menge folgt der Verarbeitung, nicht nur deinem Klickzeitpunkt."
  },
  {
    "title": "IOC nimmt den sofort möglichen Teil",
    "summary": "Nicht ausgeführter Rest wird gelöscht.",
    "paragraphs": [
      "IOC heißt Immediate or Cancel. In unserem Modell wird bei Ankunft die sofort mögliche Menge gehandelt. Danach wird der nicht ausführbare Rest gelöscht. Teilausführungen sind dabei erlaubt; ein Rest wartet nicht weiter.",
      "Lea sendet einen IOC-Kauf über sechs Aktien mit Limit 30,20. Das ursprüngliche Buch bietet innerhalb der Grenze zwei zu 30,00, eine zu 30,10 und zwei zu 30,20. Fünf Stück werden für 150,50 Euro gekauft. Eine wird als Rest gelöscht.",
      "Diese IOC-Alternative startet neu, unabhängig vom Tagesauftrag. Ihr Bestand ist anschließend fünf, der offene Rest null. Sofort beschreibt die Verarbeitungsregel, keine allgemeine Zusage einer bestimmten Millisekundenzeit."
    ],
    "columns": [
      {
        "title": "Sofort verfügbar",
        "tone": "neutral",
        "points": [
          "Fünf Stück innerhalb des Limits.",
          "Kaufwert 150,50 Euro."
        ]
      },
      {
        "title": "IOC-Abschluss",
        "tone": "positive",
        "points": [
          "Eine Restaktie gelöscht.",
          "Fünf gekauft, null offen."
        ]
      }
    ],
    "prompt": "Was passiert mit der sechsten Aktie in der IOC-Alternative?",
    "answers": [
      {
        "label": "Sie wartet automatisch bis Tagesende.",
        "explanation": "Damit würde die IOC-Restregel verletzt."
      },
      {
        "label": "Sie wird ungeachtet des Limits zu 30,40 gekauft.",
        "explanation": "Die Zeitbedingung hebt die Preisgrenze nicht auf."
      },
      {
        "label": "Der nicht ausführbare Rest wird gelöscht.",
        "explanation": "Richtig: IOC lässt diesen Rest nicht auf spätere Angebote warten."
      }
    ],
    "correct": 2,
    "rule": "IOC kann teilweise handeln und löscht den nicht sofort ausführbaren Rest."
  },
  {
    "title": "IOC kann auch ohne Ausführung enden",
    "summary": "Eine Zeitregel schafft keine passende Gegenseite.",
    "paragraphs": [
      "Ein neuer IOC-Fall enthält nur Verkäufer zu 30,40 Euro. Lea möchte sechs Aktien mit Kauflimit 30,20. Keine verfügbare Aktie erfüllt die Preisregel. Für diesen Verarbeitungsschritt gibt es keine anderen Angebote.",
      "Der Lernmarkt kauft null und löscht die gesamte Restmenge von sechs. Lea besitzt durch diese Order keine neue Aktie. Der Abschluss ist ein normaler Ausgang der ausdrücklich gewählten IOC-Bedingung, kein Beweis für einen technischen Fehler.",
      "Gibt es vor Annahme eine Ablehnung wegen ungültiger Angaben, wäre das ein anderer Zustand. Hier wurde die gültige Order verarbeitet, fand aber keine zulässige sofortige Menge. Der Bericht trennt Ablehnung, null Ausführung und bestätigte Restlöschung."
    ],
    "columns": [
      {
        "title": "Nicht passend",
        "tone": "neutral",
        "points": [
          "Alle Asks bei 30,40 Euro.",
          "Kaufgrenze nur 30,20."
        ]
      },
      {
        "title": "IOC verarbeitet",
        "tone": "positive",
        "points": [
          "Null gekauft.",
          "Sechs Reststücke bestätigt gelöscht."
        ]
      }
    ],
    "prompt": "Wie lautet der Abschluss dieses IOC-Falls?",
    "answers": [
      {
        "label": "Null ausgeführt, sechs Reststücke gelöscht.",
        "explanation": "Richtig: Innerhalb der Preisgrenze stand keine sofortige Menge bereit."
      },
      {
        "label": "Sechs gekauft, weil IOC sofort garantiert.",
        "explanation": "Die Bedingung erzeugt keine passenden Verkäufer."
      },
      {
        "label": "Sechs Stück offen für morgen.",
        "explanation": "IOC löscht den nicht sofort ausführbaren Rest."
      }
    ],
    "correct": 0,
    "rule": "IOC kann gültig verarbeitet werden und trotzdem null Ausführung liefern."
  },
  {
    "title": "FOK verlangt sofort die volle Menge",
    "summary": "Eine Teilmenge wird nicht gekauft.",
    "paragraphs": [
      "FOK heißt Fill or Kill. Unser Lernmodell verlangt die vollständige gewünschte Menge sofort innerhalb der Preisregel. Reicht sie nicht, wird nichts gehandelt und der gesamte Auftrag gelöscht. Eine Teilausführung ist ausgeschlossen.",
      "Lea sendet sechs Stück mit Limit 30,20 als FOK. Im ursprünglichen Buch sind nur fünf Stück innerhalb dieser Grenze vorhanden. Deshalb kauft sie keine einzige Aktie. Auch die fünf möglichen Stücke werden für diesen Auftrag nicht verbraucht.",
      "FOK ist nicht dasselbe wie IOC. IOC hätte hier fünf gekauft und eins gelöscht. FOK beendet sechs ungefüllt. Für echte Aufträge gelten zusätzlich die konkreten Möglichkeiten des Anbieters und seines Handelswegs."
    ],
    "columns": [
      {
        "title": "Innerhalb des Limits",
        "tone": "neutral",
        "points": [
          "Fünf sofort verfügbare Aktien.",
          "Sechs erforderlich."
        ]
      },
      {
        "title": "FOK-Abschluss",
        "tone": "positive",
        "points": [
          "Null gekauft; sechs gelöscht.",
          "Die fünf angebotenen Stücke bleiben im festen Lernbuch."
        ]
      }
    ],
    "prompt": "Wie viele Aktien kauft die FOK-Order über sechs Stück?",
    "answers": [
      {
        "label": "Sechs, davon eine über dem Limit.",
        "explanation": "FOK hebt die Preisgrenze nicht auf."
      },
      {
        "label": "Keine Aktie.",
        "explanation": "Richtig: Die vollständige Sechsermenge ist nicht sofort innerhalb des Limits verfügbar."
      },
      {
        "label": "Fünf Aktien wie IOC.",
        "explanation": "FOK erlaubt in diesem Fall keine Teilmenge."
      }
    ],
    "correct": 1,
    "rule": "FOK bedeutet sofort vollständig oder gar keine Ausführung."
  },
  {
    "title": "Volle Menge bedeutet nicht einen einzigen Preis",
    "summary": "FOK kann mehrere zulässige Stufen nutzen.",
    "paragraphs": [
      "Ein getrennt gestarteter FOK-Fall verlangt nur fünf Aktien mit Limit 30,20. Das ursprüngliche Buch enthält fünf passende Stücke verteilt auf 30,00, 30,10 und 30,20 Euro. Unser Modell darf diese Stufen in einer vollständigen Verarbeitung zusammen nutzen.",
      "Der Auftrag kauft alle fünf für 150,50 Euro. Der Durchschnitt ist 150,50 / 5 = 30,10 Euro. Vollständig bedeutet hier, dass die ganze Wunschmenge gehandelt wurde. Es bedeutet nicht, dass jeder Einzelpreis gleich sein muss.",
      "Alle verwendeten Preise liegen unter oder auf dem Limit. Die erlaubte vollständige Verarbeitung über mehrere Stufen ist ausdrücklich eine Lernregel. Für echte Systeme muss auch bekannt sein, welche Mengen und Handelswege gemeinsam berücksichtigt werden dürfen."
    ],
    "columns": [
      {
        "title": "Vollständige Fünfermenge",
        "tone": "neutral",
        "points": [
          "Zwei zu 30,00; eine zu 30,10; zwei zu 30,20.",
          "Mehrere zulässige Preisstufen."
        ]
      },
      {
        "title": "FOK erfolgreich",
        "tone": "positive",
        "points": [
          "150,50 Euro für fünf Aktien.",
          "Durchschnitt 30,10 Euro."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Kaufwert der vollständigen FOK-Fünferorder?",
    "answers": [
      {
        "label": "151,00 Euro zwingend.",
        "explanation": "Ein Limit erzwingt nicht für alle Stücke den höchsten zulässigen Preis."
      },
      {
        "label": "Null, weil FOK nur einen Stückpreis verwenden darf.",
        "explanation": "Unsere Übungsregel erlaubt ausdrücklich mehrere passende Stufen."
      },
      {
        "label": "150,50 Euro.",
        "explanation": "Richtig: Die gesamte Menge darf im Modell über die zulässigen Preisstufen gekauft werden."
      }
    ],
    "correct": 2,
    "rule": "Volle Ausführung ist eine Mengenbedingung und keine Ein-Preis-Bedingung."
  },
  {
    "title": "AON verlangt die volle Menge und darf warten",
    "summary": "Alles-oder-nichts ist nicht automatisch sofort-oder-nichts.",
    "paragraphs": [
      "AON heißt All or None, also alles oder nichts. Unser getrennter Lernfall kombiniert diese Mengenbedingung mit einer Tagesgültigkeit. Die Anweisung wird beim Lernanbieter gehalten und darf warten, bis die volle Menge gemeinsam ausführbar ist.",
      "Lea verlangt sechs Aktien mit Limit 30,20. Zu Beginn sind im ursprünglichen Buch nur fünf zulässig. Es wird zunächst nichts gekauft. Alle sechs bleiben als Anweisung beim Lernanbieter aktiv. Wir behaupten nicht, dass diese Bedingung an jeder Börse sichtbar im Buch stehen kann.",
      "Bei FOK wären in derselben Ausgangslage alle sechs sofort gelöscht worden. Bei IOC wären fünf gekauft worden. AON verhindert hier den Teilkauf, setzt aber keine Sofortfrist. Ihre Dauer stammt aus der getrennten Tagesregel."
    ],
    "columns": [
      {
        "title": "Mengenregel",
        "tone": "neutral",
        "points": [
          "Sechs gemeinsam oder keine Teilmenge.",
          "Der Lernanbieter hält die Anweisung."
        ]
      },
      {
        "title": "Zeitregel",
        "tone": "positive",
        "points": [
          "In diesem Fall bis Sessionende.",
          "Kann auf ausreichende Angebote warten."
        ]
      }
    ],
    "prompt": "Was unterscheidet diese AON-Tagesorder von FOK?",
    "answers": [
      {
        "label": "Sie darf auf die volle Menge warten.",
        "explanation": "Richtig: AON ist hier die Vollmengenregel; die Tagesgültigkeit erlaubt späteres Handeln."
      },
      {
        "label": "Sie muss ebenfalls immer sofort gelöscht werden.",
        "explanation": "Damit würde AON mit der zusätzlichen Sofortbedingung von FOK verwechselt."
      },
      {
        "label": "Sie kauft immer einen kleinen Teil vorab.",
        "explanation": "Die genannte AON-Regel verhindert Teilausführungen."
      }
    ],
    "correct": 0,
    "rule": "AON bestimmt die volle Menge; ihre Laufzeit braucht eine eigene Regel."
  },
  {
    "title": "Eine spätere volle AON-Ausführung durchrechnen",
    "summary": "Wartende Bedingungen brauchen tatsächlich passende Gesamtmenge.",
    "paragraphs": [
      "Wir setzen den AON-Tagesfall fort. Die fünf vorhandenen zulässigen Angebote bleiben vollständig erhalten. Eine weitere Aktie zu 30,20 kommt hinzu. Keine anderen Aufträge greifen ein, bevor der Lernanbieter die Sechsermenge prüft.",
      "Nun sind sechs innerhalb des Limits gemeinsam ausführbar. Ihr Kaufwert beträgt 150,50 + 30,20 = 180,70 Euro. Alle sechs werden in der festgelegten vollständigen Verarbeitung gekauft. Der offene Rest ist danach null.",
      "Die sechste Aktie allein hätte vorher keine Teilfüllung erlaubt. Entscheidend war die komplette gleichzeitige Verfügbarkeit. In einem echten Ablauf könnten frühere Angebote inzwischen verschwunden sein. Die Anzeige über die Zeit darf nicht blind zusammengerechnet werden."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "Fünf Stück noch vollständig verfügbar.",
          "Eine neue Aktie bei 30,20 kommt hinzu."
        ]
      },
      {
        "title": "AON-Ausführung",
        "tone": "positive",
        "points": [
          "Alle sechs gemeinsam zulässig.",
          "180,70 Euro Kaufwert; null offen."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Kaufwert der späteren vollständigen AON-Ausführung?",
    "answers": [
      {
        "label": "150,50 Euro.",
        "explanation": "Das war der Wert von fünf Stück, nicht der nun ausgeführten sechs."
      },
      {
        "label": "180,70 Euro.",
        "explanation": "Richtig: Die erhaltenen fünf Angebote plus eine neue Aktie zu 30,20 ergeben die Sechsermenge."
      },
      {
        "label": "30,20 Euro.",
        "explanation": "Dieser Betrag betrifft nur das neu hinzugekommene Stück."
      }
    ],
    "correct": 1,
    "rule": "Addiere nur Angebote, die zur gemeinsamen Prüfung noch verfügbar sind."
  },
  {
    "title": "Vier Bedingungen am selben Ausgangsbuch vergleichen",
    "summary": "Gleiche Preisgrenze kann unterschiedliche Ergebnisse liefern.",
    "paragraphs": [
      "Wir starten jede Alternative neu: sechs Kaufstücke mit Limit 30,20, aber nur fünf passende Aktien verfügbar. Eine normale Tagesorder darf teilweise handeln. Sie kauft fünf und lässt eines offen. IOC kauft fünf und löscht eines.",
      "FOK kauft null und löscht sechs. AON mit Tagesgültigkeit kauft zunächst null und lässt die Sechseranweisung beim Lernanbieter aktiv. Die Unterschiede stammen aus Mengen- und Zeitbedingungen, nicht aus anderen Preisgrenzen.",
      "Diese vier Fälle laufen nicht gemeinsam am selben Buch ab. Wenn sie tatsächlich nacheinander gesendet würden, könnte der erste Auftrag die Angebote für den nächsten verbrauchen. Der Vergleich verwendet deshalb jeweils einen unabhängigen Neustart."
    ],
    "columns": [
      {
        "title": "Teilmenge erlaubt",
        "tone": "neutral",
        "points": [
          "DAY: fünf gekauft, eins offen.",
          "IOC: fünf gekauft, eins gelöscht."
        ]
      },
      {
        "title": "Volle Menge verlangt",
        "tone": "positive",
        "points": [
          "FOK: null gekauft, sechs gelöscht.",
          "AON + DAY: null gekauft, sechs warten."
        ]
      }
    ],
    "prompt": "Welche Variante kauft fünf und lässt keinen offenen Rest?",
    "answers": [
      {
        "label": "Die normale Tagesorder im Ausgangsfall.",
        "explanation": "Sie lässt den einen Rest nach unserer Regel weiter offen."
      },
      {
        "label": "FOK über sechs Stück.",
        "explanation": "Die FOK-Order kauft bei nur fünf passenden Aktien gar nichts."
      },
      {
        "label": "IOC.",
        "explanation": "Richtig: Sie handelt die sofort zulässige Teilmenge und löscht das letzte Wunschstück."
      }
    ],
    "correct": 2,
    "rule": "Vergleiche Bedingungen bei gleichem Buch, gleicher Menge und gleichem Limit."
  },
  {
    "title": "Eine Mindestmenge muss genau definiert sein",
    "summary": "Sie ist nicht automatisch alles-oder-nichts.",
    "paragraphs": [
      "Unser neuer Lernfall verlangt sechs Aktien mit Limit 30,20 und eine Mindestmenge von drei. Die Regel lautet ausdrücklich: Der erste Verarbeitungsschritt muss mindestens drei Stück liefern. Danach darf ein Rest auch in kleineren Mengen handeln.",
      "Fünf sofort verfügbare Stück erfüllen diese Mindestmenge. In der IOC-Alternative werden die fünf für 150,50 Euro gekauft, das verbleibende Wunschstück wird gelöscht. Die Mindestmenge drei fordert nicht zwingend alle sechs.",
      "Was die Mindestmenge bei Folgeteilen bedeutet, unterscheidet sich je nach System. Manche Regeln beziehen sich auf einen Verarbeitungsschritt, andere auf weitere Ausführungen. Unsere Erstschrittregel ist erfunden und wird nicht auf Anbieter verallgemeinert."
    ],
    "columns": [
      {
        "title": "Eigene Mindestregel",
        "tone": "neutral",
        "points": [
          "Beim ersten Schritt mindestens drei Aktien.",
          "Danach kleinere Teilmengen erlaubt."
        ]
      },
      {
        "title": "Mit IOC im Ausgangsbuch",
        "tone": "positive",
        "points": [
          "Fünf erfüllen die Mindestmenge.",
          "Fünf gekauft, eine Restaktie gelöscht."
        ]
      }
    ],
    "prompt": "Sind unter dieser Regel fünf Stück genug für den ersten Schritt?",
    "answers": [
      {
        "label": "Ja, fünf sind mindestens drei.",
        "explanation": "Richtig: Die Mindestregel verlangt nicht die volle Sechsermenge."
      },
      {
        "label": "Nein, Mindestmenge bedeutet immer alle sechs.",
        "explanation": "Eine Mindestmenge drei ist nicht die AON-Bedingung über sechs."
      },
      {
        "label": "Nein, Mindestmenge erlaubt ausschließlich genau drei.",
        "explanation": "Mindestens drei erlaubt auch größere zulässige Mengen."
      }
    ],
    "correct": 0,
    "rule": "Mindestmenge heißt nicht zwingend genau diese Menge oder die ganze Order."
  },
  {
    "title": "Zu kleine Erstmenge erfüllt die Mindestbedingung nicht",
    "summary": "Eine Preisgrenze allein reicht nicht.",
    "paragraphs": [
      "Eine separate IOC-Order verlangt wieder sechs Aktien mit Limit 30,20 und Erstschritt-Mindestmenge drei. Jetzt sind nur zwei Stück zu 30,00 verfügbar. Alle weiteren Angebote liegen über dem Limit. Andere Änderungen gibt es nicht.",
      "Die zwei zulässigen Stücke reichen für die genannte Mindestbedingung nicht. Deshalb wird nichts gekauft. Nach der IOC-Regel wird die ganze Restmenge sechs gelöscht. Ohne Mindestbedingung hätte dieselbe IOC-Order zwei kaufen können.",
      "Dieser Vergleich verwendet getrennte Aufträge am jeweils neu gestarteten Buch. Die Bedingung kann kleine unerwünschte Teilmengen verhindern. Sie kann zugleich dazu führen, dass ein sonst möglicher Handel ausbleibt."
    ],
    "columns": [
      {
        "title": "Sofort verfügbare Menge",
        "tone": "neutral",
        "points": [
          "Zwei Aktien innerhalb des Limits.",
          "Erste Mindestmenge: drei."
        ]
      },
      {
        "title": "Mindestmenge plus IOC",
        "tone": "positive",
        "points": [
          "Null gekauft.",
          "Sechs Reststücke gelöscht."
        ]
      }
    ],
    "prompt": "Wie viele Aktien kauft die Order mit Mindestmenge drei in diesem Fall?",
    "answers": [
      {
        "label": "Drei, weil die Mindestmenge den Verkäufer erzeugt.",
        "explanation": "Eine Bedingung schafft keine zusätzlichen Angebote."
      },
      {
        "label": "Keine Aktie.",
        "explanation": "Richtig: Die erste zulässige Menge von zwei unterschreitet die Mindestbedingung."
      },
      {
        "label": "Zwei wie jede IOC-Order.",
        "explanation": "IOC hebt die zusätzliche Mindestmengenregel nicht auf."
      }
    ],
    "correct": 1,
    "rule": "Eine Mindestmengenregel kann eine sonst mögliche Teilfüllung verhindern."
  },
  {
    "title": "Ein kleiner Folgerest braucht seine eigene Regel",
    "summary": "Die Erstschrittregel gilt nicht automatisch für jeden Rest.",
    "paragraphs": [
      "Eine separate Tagesorder über sechs Stück verwendet unsere Erstschritt-Mindestmenge drei. Zuerst werden fünf Aktien innerhalb des Limits gekauft. Eine bleibt offen. Die erste Ausführung hat die Mindestbedingung bereits erfüllt.",
      "Später wird eine weitere Aktie zu 30,20 Euro verfügbar. Nach unserer ausdrücklich festgelegten Regel darf der letzte Einserrest handeln. Der Gesamtkauf umfasst sechs Aktien für 180,70 Euro. Ein Rest von weniger als drei wird hier nicht automatisch gelöscht.",
      "Würde ein anderes System die Mindestmenge bei jeder Ausführung verlangen, könnte der Ablauf anders sein. Genau deshalb muss klar sein, wann eine Mengenbedingung geprüft wird. Übertrage eine Erstschrittregel nicht ohne Prüfung auf jeden späteren Handel."
    ],
    "columns": [
      {
        "title": "Erster Schritt",
        "tone": "neutral",
        "points": [
          "Fünf Stück erfüllen mindestens drei.",
          "Eine Restaktie wartet."
        ]
      },
      {
        "title": "Folgeschritt im Modell",
        "tone": "positive",
        "points": [
          "Kleine Restmenge ausdrücklich erlaubt.",
          "Sechs insgesamt gekauft für 180,70 Euro."
        ]
      }
    ],
    "prompt": "Darf die letzte Aktie im genannten Tagesfall noch ausgeführt werden?",
    "answers": [
      {
        "label": "Nein, jeder Anbieter fordert bei jedem Rest mindestens drei.",
        "explanation": "Das ist keine universelle Regel und widerspricht unserem Modell."
      },
      {
        "label": "Nein, fünf Stück waren zu viel für eine Mindestmenge drei.",
        "explanation": "Mindestens drei erlaubt den früheren Fünferteil."
      },
      {
        "label": "Ja, die Mindestregel galt nur für den ersten Schritt.",
        "explanation": "Richtig: Die ausdrücklich festgelegte Folgeregel erlaubt die kleine Restmenge."
      }
    ],
    "correct": 2,
    "rule": "Prüfe, ob eine Mengenbedingung nur zuerst oder auch für spätere Teile gilt."
  },
  {
    "title": "Zulässige Mengen verschiedener Handelswege getrennt prüfen",
    "summary": "Eine Gesamtsumme ist keine universelle Vollmengenzusage.",
    "paragraphs": [
      "Ein eigener Fall zeigt drei passende Aktien auf Weg A und drei auf Weg B. Der Lernanbieter erlaubt für diesen FOK-Auftrag nur einen einzelnen Weg. Er darf die Mengen der beiden Wege nicht in einer gemeinsamen Vollausführung kombinieren.",
      "Leas FOK-Kauf verlangt sechs Stück. Obwohl über beide Anzeigen sechs passende Aktien zu sehen sind, liefert keiner der erlaubten Einzelwege sechs. Der Auftrag handelt nach dieser Regel gar nicht. Seine gesamte Menge wird gelöscht.",
      "Ein anderes Modell könnte andere Kombinationen erlauben. Wir behaupten hier keine allgemeine Ein-Handelsplatz-Regel für jede FOK-Order. Verfügbare Menge braucht den zugehörigen Handelsweg und die ausdrücklich erlaubte Zusammenführung."
    ],
    "columns": [
      {
        "title": "Zwei Anzeigen",
        "tone": "neutral",
        "points": [
          "Weg A: drei passende Aktien.",
          "Weg B: drei passende Aktien."
        ]
      },
      {
        "title": "Eigene Wegregel",
        "tone": "positive",
        "points": [
          "FOK darf hier nur einen Weg nutzen.",
          "Kein Weg liefert sechs Stück."
        ]
      }
    ],
    "prompt": "Reicht die Summe drei plus drei für diese FOK-Regel?",
    "answers": [
      {
        "label": "Nein, die beiden Wege dürfen hier nicht zusammengeführt werden.",
        "explanation": "Richtig: Die ausdrücklich gesetzte Vollausführungsregel verlangt die Menge auf einem erlaubten Einzelweg."
      },
      {
        "label": "Ja, jede sichtbare Summe ist überall gemeinsam verfügbar.",
        "explanation": "Die Weg- und Ausführungsregeln können die Zusammenführung begrenzen."
      },
      {
        "label": "Ja, die Hälfte wird einfach sofort gekauft.",
        "explanation": "FOK erlaubt in diesem Fall keine Teilfüllung."
      }
    ],
    "correct": 0,
    "rule": "Volle Menge bedeutet volle zulässige Menge auf den erlaubten Handelswegen."
  },
  {
    "title": "Ein Zeitparameter macht aus einer Pause keinen Handel",
    "summary": "Auftragsannahme und Ausführung bleiben getrennt.",
    "paragraphs": [
      "Im Lernfall ist der fortlaufende Handel unterbrochen. Der Anbieter nimmt während dieser Pause keine IOC- und FOK-Aufträge an. Leas IOC-Anfrage wird deshalb mit einem eindeutigen Ablehnungsgrund zurückgewiesen. Das ist eine ausdrücklich festgelegte Regel.",
      "Es gab keine verarbeitete IOC-Ausführung und keine gekauften Aktien. Das unterscheidet sich vom angenommenen IOC-Auftrag, der bei aktivem Handel keine passende Menge findet und anschließend seinen Rest löscht.",
      "Echte Systeme können während Pausen andere Regeln verwenden oder eine spätere Auktion zulassen. Die Wörter sofort und vollständig setzen keine Handelsunterbrechung außer Kraft. Lea liest Annahme, Ablehnung und endgültigen Status im jeweiligen Kontext."
    ],
    "columns": [
      {
        "title": "Pause im Lernfall",
        "tone": "neutral",
        "points": [
          "IOC/FOK-Annahme nicht erlaubt.",
          "Leas IOC wird abgelehnt."
        ]
      },
      {
        "title": "Anderer Zustand",
        "tone": "positive",
        "points": [
          "Angenommene IOC mit null Füllung wäre etwas anderes.",
          "Kein Preis und kein Handel aus der Ablehnung ableitbar."
        ]
      }
    ],
    "prompt": "Welcher Status gilt für Leas Anfrage während dieser Lernpause?",
    "answers": [
      {
        "label": "Automatisch sechs Stück gekauft morgen.",
        "explanation": "Eine solche spätere Ausführung ist nicht bestätigt und nicht Teil der Regel."
      },
      {
        "label": "Abgelehnt nach der ausdrücklich genannten Pausenregel.",
        "explanation": "Richtig: Sie wurde nicht als ausführbarer IOC-Auftrag angenommen."
      },
      {
        "label": "Garantiert vollständig gekauft.",
        "explanation": "Die Zeitbedingung hebt die Pause nicht auf."
      }
    ],
    "correct": 1,
    "rule": "Zeitbedingungen ersetzen keine Auftragszulassung in der aktuellen Handelsphase."
  },
  {
    "title": "Bedingungen schützen nicht vor allen Kosten",
    "summary": "Die tatsächlichen Mengen bestimmen den Geldbetrag.",
    "paragraphs": [
      "Für den Haupt-Tagesfall und die getrennte IOC-Alternative wurden jeweils fünf Aktien für 150,50 Euro gekauft. Unser Gebührenmodell verlangt genau einmal 0,50 Euro für die tatsächlich handelnde Order. Für den offenen, abgelaufenen oder gelöschten Rest fällt in diesem Modell nichts zusätzlich an.",
      "Die Kaufbelastung beträgt damit 151,00 Euro. Für die FOK-Sechseralternative ohne jede Ausführung beträgt sie im ausdrücklich genannten Gebührenmodell null. Das ist keine allgemeine Gebührenzusage anderer Anbieter.",
      "Die fünf Aktien besitzen einen durchschnittlichen Ausführungspreis von 30,10 Euro. Einschließlich der Kaufgebühr sind es 151,00 / 5 = 30,20 Euro je Aktie. Ein Limit von 30,20 begrenzt trotzdem den Ausführungspreis je Stück, nicht pauschal jede zusätzliche Kostenart."
    ],
    "columns": [
      {
        "title": "Tatsächlicher Kauf",
        "tone": "neutral",
        "points": [
          "Fünf Stück für 150,50 Euro.",
          "Eine gesamte Kaufgebühr von 0,50 Euro."
        ]
      },
      {
        "title": "Geldbetrag",
        "tone": "positive",
        "points": [
          "151,00 Euro Kaufbelastung.",
          "Keine zusätzliche Restgebühr in diesem Modell."
        ]
      }
    ],
    "prompt": "Wie hoch ist die Kaufbelastung bei den fünf Ausführungen?",
    "answers": [
      {
        "label": "150,50 Euro.",
        "explanation": "Dieser Wert enthält die genannte Gebühr noch nicht."
      },
      {
        "label": "181,20 Euro, weil sechs Stück gewünscht waren.",
        "explanation": "Die Wunschmenge wurde nicht vollständig gekauft; Kosten folgen den tatsächlichen Ausführungen."
      },
      {
        "label": "151,00 Euro.",
        "explanation": "Richtig: Zum tatsächlichen Kaufwert kommt die einmalige Ordergebühr hinzu."
      }
    ],
    "correct": 2,
    "rule": "Rechne tatsächliche Ausführungen und ausdrücklich genannte Gebühren."
  },
  {
    "title": "Den Hauptfall als Mengenbilanz abschließen",
    "summary": "Jedes Wunschstück bekommt einen bestätigten Abschlussstatus.",
    "paragraphs": [
      "Leas Hauptauftrag lautet: sechs Miro-Aktien kaufen, Limit 30,20, Tagesende 17 Uhr Marktzeit, Teilausführungen erlaubt. Fünf wurden für 150,50 Euro gekauft. Die eine offene Aktie fand bis zum Ende keinen passenden Verkäufer und lief bestätigt ab.",
      "Die Mengenbilanz ist sechs beauftragt = fünf ausgeführt + eine abgelaufen + null offen. Die Position enthält fünf Aktien. Die einmalige Kaufgebühr beträgt 0,50 Euro, deshalb wurden 151,00 Euro belastet. Eine abgelaufene Wunschaktie gehört nicht zum Bestand.",
      "Ein vollständiger Bericht nennt zusätzlich Quelle, Zeit, Handelsweg und die gültigen Mengenregeln. Für die getrennten IOC-, FOK- und AON-Fälle würden andere Restzustände gelten. Gleiche Preisgrenze und Wunschmenge reichen daher nicht für denselben Handelsabschluss."
    ],
    "columns": [
      {
        "title": "Mengenbilanz",
        "tone": "neutral",
        "points": [
          "Sechs beauftragt = fünf ausgeführt + eine abgelaufen.",
          "Null offen; fünf Aktien im Bestand."
        ]
      },
      {
        "title": "Geldbilanz",
        "tone": "positive",
        "points": [
          "150,50 Euro Kaufwert plus 0,50 Gebühr.",
          "151,00 Euro belastet."
        ]
      }
    ],
    "prompt": "Welcher Abschlussbericht passt zum Haupt-Tagesfall?",
    "answers": [
      {
        "label": "Fünf gekauft, eine abgelaufen, null offen, 151,00 Euro belastet.",
        "explanation": "Richtig: Menge, Reststatus, Bestand und Gebühren sind vollständig getrennt berücksichtigt."
      },
      {
        "label": "Sechs gekauft, weil sechs beauftragt wurden.",
        "explanation": "Die eine abgelaufene Aktie wurde nie ausgeführt."
      },
      {
        "label": "Null im Bestand, weil die Tagesorder abgelaufen ist.",
        "explanation": "Der Ablauf des Rests entfernt die fünf gekauften Aktien nicht."
      }
    ],
    "correct": 0,
    "rule": "Beauftragt, ausgeführt, beendet und offen müssen in der Mengenbilanz zusammenpassen."
  }
];
export const ordersChapterFiveLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-05.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 5 · Gültigkeit und Mengenbedingungen',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 5', title: draft.title,
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
