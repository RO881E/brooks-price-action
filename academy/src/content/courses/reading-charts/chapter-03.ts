import type { Lesson, ChartScenarioId } from '../../types';
const drafts = [
  {
    "title": "Zuerst gruppieren, dann zeichnen",
    "summary": "Abschnittsregel und Zeichenform sind zwei verschiedene Entscheidungen.",
    "paragraphs": [
      "Nora betrachtet zwölf Geschäfte der erfundenen Luma-Aktie. Ein Geschäft hat eine Zeit, einen Preis und eine Menge. Sie möchte mehrere Geschäfte zu einem Bar zusammenfassen. Bar bedeutet hier eine Gruppe mit Eröffnung, Hoch, Tief und letztem Preis.",
      "Die erste Entscheidung lautet: Welche Geschäfte gehören zusammen? Eine feste Minute, drei Geschäftsmeldungen oder eine bestimmte Stückmenge ergeben unterschiedliche Gruppen. Erst danach entscheidet Nora, ob sie diese Kennwerte als Balken oder normale Kerze zeichnet.",
      "Ein Minuten-Bar muss daher kein Balkenbild sein. Er kann als Kerze erscheinen. Umgekehrt kann eine Kerze drei Geschäftsmeldungen enthalten. Die Form der Zeichnung und die Regel zum Bilden des Abschnitts dürfen nicht verwechselt werden."
    ],
    "columns": [
      {
        "title": "Gruppierung",
        "tone": "neutral",
        "points": [
          "Zeit, Anzahl der Meldungen oder Menge.",
          "Legt fest, welche Geschäfte zusammengehören."
        ]
      },
      {
        "title": "Darstellung",
        "tone": "positive",
        "points": [
          "Balken oder normale Kerze.",
          "Zeichnet die Kennwerte der fertigen Gruppe."
        ]
      }
    ],
    "prompt": "Was bestimmt, welche Geschäfte zu einem Bar gehören?",
    "answers": [
      {
        "label": "Die Gruppierungsregel.",
        "explanation": "Richtig: Trenne das Bilden eines Bars vom Zeichnen seiner Kennwerte."
      },
      {
        "label": "Allein die Kerzenfarbe.",
        "explanation": "Farbe beschreibt nach einer Regel Preise, nicht die Gruppengrenze."
      },
      {
        "label": "Allein die Breite des gezeichneten Körpers.",
        "explanation": "Eine normale Körperbreite legt hier keine Gruppierung fest."
      }
    ],
    "correct": 0,
    "rule": "Trenne das Bilden eines Bars vom Zeichnen seiner Kennwerte.",
    "diagram": null
  },
  {
    "title": "Den ersten Teil der Geschäftsliste lesen",
    "summary": "Jede Zeile hat eine Uhrzeit, einen Preis und eine Stückzahl.",
    "paragraphs": [
      "Unser vollständiger Übungsdatensatz beginnt um 09:00. Geschäft 1: 09:00:05, 20,00 Euro, zwei Aktien. Geschäft 2: 09:00:12, 20,10 Euro, eine Aktie. Geschäft 3: 09:00:20, 19,95 Euro, drei Aktien. Geschäft 4: 09:00:45, 20,05 Euro, zwei Aktien.",
      "Geschäft 5 folgt genau um 09:01:00 zu 20,15 Euro über vier Aktien. Geschäft 6 folgt um 09:01:10 zu 20,20 Euro über eine Aktie. Alle Zeiten nutzen dieselbe Uhr, Preise sind Euro je Aktie. Jede Zeile ist in unserem Modell eine eigene bestätigte Geschäftsmeldung.",
      "Die ersten sechs Zeilen enthalten sechs Meldungen, aber dreizehn Aktien: zwei plus eins plus drei plus zwei plus vier plus eins. Die Menge eines Geschäfts kann größer als eins sein. Jede gehandelte Aktie zählt einmal, obwohl ein Geschäft eine Kauf- und eine Verkaufsseite hat."
    ],
    "columns": [
      {
        "title": "Geschäfte 1–3",
        "tone": "neutral",
        "points": [
          "09:00:05 / 20,00 / 2; 09:00:12 / 20,10 / 1.",
          "09:00:20 / 19,95 / 3."
        ]
      },
      {
        "title": "Geschäfte 4–6",
        "tone": "positive",
        "points": [
          "09:00:45 / 20,05 / 2; 09:01:00 / 20,15 / 4.",
          "09:01:10 / 20,20 / 1."
        ]
      }
    ],
    "prompt": "Wie viele Aktien enthalten die ersten sechs Meldungen zusammen?",
    "answers": [
      {
        "label": "Sechsundzwanzig Aktien.",
        "explanation": "Das würde die beiden Vertragsseiten doppelt zählen."
      },
      {
        "label": "Dreizehn Aktien.",
        "explanation": "Richtig: Zähle Meldungen und Stückmengen getrennt."
      },
      {
        "label": "Sechs Aktien.",
        "explanation": "Sechs ist die Anzahl der Meldungen, nicht ihre gesamte Stückmenge."
      }
    ],
    "correct": 1,
    "rule": "Zähle Meldungen und Stückmengen getrennt.",
    "diagram": null
  },
  {
    "title": "Die Liste vervollständigen und die Gesamtsumme prüfen",
    "summary": "Zwölf Meldungen ergeben hier 27 gehandelte Aktien.",
    "paragraphs": [
      "Geschäft 7: 09:01:50, 20,00 Euro, zwei Aktien. Geschäft 8: 09:02:05, 19,90 Euro, eine Aktie. Geschäft 9: 09:02:10, 19,95 Euro, fünf Aktien. Geschäft 10: 09:02:35, 20,10 Euro, zwei Aktien.",
      "Geschäft 11: 09:03:05, 20,25 Euro, drei Aktien. Geschäft 12: 09:03:25, 20,15 Euro, eine Aktie. Die letzten sechs Geschäfte enthalten vierzehn Aktien. Zusammen mit den ersten dreizehn ergibt das 27.",
      "Wir nehmen die Anzeige um 09:04 auf. Alle zwölf Geschäfte liegen davor. Der Übungsdatensatz enthält bis zu dieser Aufnahme keine weiteren Geschäfte. Das ist eine Angabe zum Lernfall, keine Behauptung über einen echten Markt. Jede Gruppierung muss zusammen dieselben 27 Aktien bewahren."
    ],
    "columns": [
      {
        "title": "Geschäfte 7–9",
        "tone": "neutral",
        "points": [
          "09:01:50 / 20,00 / 2; 09:02:05 / 19,90 / 1.",
          "09:02:10 / 19,95 / 5."
        ]
      },
      {
        "title": "Geschäfte 10–12",
        "tone": "positive",
        "points": [
          "09:02:35 / 20,10 / 2; 09:03:05 / 20,25 / 3.",
          "09:03:25 / 20,15 / 1."
        ]
      }
    ],
    "prompt": "Welche Gesamtmenge muss jede Gruppierung einschließlich offener Reste erhalten?",
    "answers": [
      {
        "label": "Zwölf Aktien.",
        "explanation": "Zwölf ist die Anzahl der Meldungen."
      },
      {
        "label": "Nur die Menge fertiger Bars.",
        "explanation": "Auch ein offener Rest enthält bereits tatsächlich gehandelte Aktien."
      },
      {
        "label": "27 Aktien.",
        "explanation": "Richtig: Prüfe die Gesamtmenge über fertige Bars und offene Reste."
      }
    ],
    "correct": 2,
    "rule": "Prüfe die Gesamtmenge über fertige Bars und offene Reste.",
    "diagram": null
  },
  {
    "title": "Minuten mit klaren Grenzen bilden",
    "summary": "Ein Geschäft an der Grenze gehört genau einmal dazu.",
    "paragraphs": [
      "Noras erste Zeitgruppe reicht von 09:00:00 bis unmittelbar vor 09:01:00. Die zweite beginnt bei 09:01:00 und endet unmittelbar vor 09:02:00. Ein Start gehört dazu, der nächste Start bereits zur nächsten Gruppe.",
      "Deshalb gehören Geschäfte 1 bis 4 zur ersten Minute. Geschäft 5 genau um 09:01:00 gehört zur zweiten. Der zeitliche Abschnitt existiert als Regel unabhängig davon, ob genau an seiner Grenze ein Handel gemeldet wird.",
      "Unsere Beschriftung nennt jeweils den Minutenbeginn. Andere Anzeigen können einen anderen Zeitstempel verwenden. Nora prüft, ob ein Zeitstempel den Beginn, das Ende oder einen Geschäftszeitpunkt bezeichnet. Gleiche Zahlen auf der Uhr reichen für einen Vergleich ohne diese Regel nicht."
    ],
    "columns": [
      {
        "title": "Erste Minute",
        "tone": "neutral",
        "points": [
          "09:00:00 bis vor 09:01:00.",
          "Geschäfte 1–4."
        ]
      },
      {
        "title": "Zweite Minute",
        "tone": "positive",
        "points": [
          "09:01:00 bis vor 09:02:00.",
          "Geschäft 5 gehört schon hierher."
        ]
      }
    ],
    "prompt": "Wohin gehört Geschäft 5 um genau 09:01:00?",
    "answers": [
      {
        "label": "In die zweite Minute.",
        "explanation": "Richtig: Lege Abschnittsgrenzen und die Bedeutung der Zeitbeschriftung offen."
      },
      {
        "label": "In beide Minuten.",
        "explanation": "Unsere Grenzen ordnen es nur einmal zu."
      },
      {
        "label": "In die erste Minute.",
        "explanation": "Die erste endet unmittelbar vor diesem Zeitpunkt."
      }
    ],
    "correct": 0,
    "rule": "Lege Abschnittsgrenzen und die Bedeutung der Zeitbeschriftung offen.",
    "diagram": "rc3-time"
  },
  {
    "title": "Die erste Minuten-Zusammenfassung berechnen",
    "summary": "OHLC sucht erstes, höchstes, niedrigstes und letztes Geschäft.",
    "paragraphs": [
      "Die erste Minute enthält Preise von 20,00, 20,10, 19,95 und 20,05. Die Eröffnung O ist 20,00. Das Hoch H ist 20,10, das Tief L ist 19,95. Der Schluss C der abgeschlossenen Minute ist 20,05.",
      "Die gesamte Spanne beträgt 20,10 minus 19,95 gleich 0,15 Euro je Aktie. Die Mengen sind zwei, eins, drei und zwei. Ihr Volumen beträgt acht Aktien. Eröffnung und Schluss sind einzelne Preise, keine Durchschnittswerte.",
      "Erst nach dieser Gruppierung wird der Balken gezeichnet. Seine Eröffnung steht links, sein Schluss rechts. Das Schaubild zeigt auch die übrigen drei Minuten, die nach genau derselben Regel gebildet werden."
    ],
    "columns": [
      {
        "title": "Vier Preise",
        "tone": "neutral",
        "points": [
          "O20,00 H20,10 L19,95 C20,05.",
          "Spanne 0,15 Euro."
        ]
      },
      {
        "title": "Menge",
        "tone": "positive",
        "points": [
          "2 + 1 + 3 + 2 = 8 Aktien.",
          "Vier Meldungen in dieser Minute."
        ]
      }
    ],
    "prompt": "Welche Schlussangabe hat die erste abgeschlossene Minute?",
    "answers": [
      {
        "label": "20,10 Euro.",
        "explanation": "Das ist ihr Hoch."
      },
      {
        "label": "20,05 Euro.",
        "explanation": "Richtig: Berechne die Kennwerte nur aus den Geschäften der gewählten Gruppe."
      },
      {
        "label": "19,95 Euro.",
        "explanation": "Das ist ihr Tief und der Schluss des ersten 3-Tick-Bars, nicht dieser Minute."
      }
    ],
    "correct": 1,
    "rule": "Berechne die Kennwerte nur aus den Geschäften der gewählten Gruppe.",
    "diagram": "rc3-time"
  },
  {
    "title": "Die übrigen Minuten vollständig abgleichen",
    "summary": "Ein festes Zeitfenster hat keine feste Geschäftszahl.",
    "paragraphs": [
      "Minute zwei enthält Geschäfte 5 bis 7. Ihre Werte sind O20,15, H20,20, L20,00, C20,00. Die Mengen vier, eins und zwei ergeben sieben Aktien. Es sind drei Meldungen.",
      "Minute drei enthält Geschäfte 8 bis 10: O19,90, H20,10, L19,90, C20,10. Ihr Volumen ist eins plus fünf plus zwei gleich acht. Minute vier enthält nur Geschäfte 11 und 12: O20,25, H20,25, L20,15, C20,15, Volumen vier.",
      "Die vier Minuten haben also vier, drei, drei und zwei Meldungen. Ihre Mengen acht, sieben, acht und vier ergeben wieder 27 Aktien. Gleich lange Zeitfenster erhalten weder automatisch dieselbe Meldungszahl noch dieselbe Stückmenge."
    ],
    "columns": [
      {
        "title": "Minuten 1 und 2",
        "tone": "neutral",
        "points": [
          "Vier / drei Meldungen.",
          "Acht / sieben Aktien."
        ]
      },
      {
        "title": "Minuten 3 und 4",
        "tone": "positive",
        "points": [
          "Drei / zwei Meldungen.",
          "Acht / vier Aktien."
        ]
      }
    ],
    "prompt": "Welche Mengenfolge gehört zu den vier Minuten?",
    "answers": [
      {
        "label": "6, 7, 8 und 6 Aktien.",
        "explanation": "Diese Mengen gehören zu unseren 3-Tick-Gruppen."
      },
      {
        "label": "Immer fünf Aktien.",
        "explanation": "Das wäre keine feste Zeitregel und trifft die Minuten nicht."
      },
      {
        "label": "8, 7, 8 und 4 Aktien.",
        "explanation": "Richtig: Eine feste Zeitspanne legt weder Meldungszahl noch Volumen fest."
      }
    ],
    "correct": 2,
    "rule": "Eine feste Zeitspanne legt weder Meldungszahl noch Volumen fest.",
    "diagram": "rc3-time"
  },
  {
    "title": "Letztes Geschäft und Abschnittsende unterscheiden",
    "summary": "Eine fertige Minute braucht kein Geschäft an ihrer letzten Sekunde.",
    "paragraphs": [
      "Das letzte Geschäft der vierten Minute liegt um 09:03:25 bei 20,15. Die Minute endet erst bei 09:04:00. Nach dem vollständigen Lernfall kommen in dieser Minute keine weiteren Meldungen hinzu.",
      "Bei der Aufnahme um 09:04 ist die vierte Minute abgeschlossen. Ihr Schluss bleibt 20,15, obwohl kein Geschäft genau um 09:04 gemeldet wurde. Die Uhr schließt das Zeitfenster; sie erfindet keinen zusätzlichen Handel.",
      "Um 09:03:30 wäre die gleiche Gruppe noch laufend gewesen. Damals wäre 20,15 nur ihr aktueller letzter Preis gewesen. Ohne Wissen über die Zukunft hätte Nora nicht bestätigen können, dass dies auch der endgültige Schluss bleibt."
    ],
    "columns": [
      {
        "title": "Geschäftszeit",
        "tone": "neutral",
        "points": [
          "Letztes Geschäft 09:03:25.",
          "Preis 20,15."
        ]
      },
      {
        "title": "Zeitfenster",
        "tone": "positive",
        "points": [
          "Ende 09:04:00.",
          "Vorher ist der Bar noch laufend."
        ]
      }
    ],
    "prompt": "Ist die vierte Minute bei der Aufnahme um 09:04 abgeschlossen?",
    "answers": [
      {
        "label": "Ja, weil ihr Zeitfenster beendet ist.",
        "explanation": "Richtig: Unterscheide den letzten Geschäftszeitpunkt vom Ende des Zeitfensters."
      },
      {
        "label": "Nein, es fehlt ein Geschäft genau um 09:04.",
        "explanation": "Ein Geschäft am Abschnittsende ist für unsere Regel nicht erforderlich."
      },
      {
        "label": "Sie war schon um 09:03:25 sicher abgeschlossen.",
        "explanation": "Damals war das Zeitfenster noch offen."
      }
    ],
    "correct": 0,
    "rule": "Unterscheide den letzten Geschäftszeitpunkt vom Ende des Zeitfensters.",
    "diagram": "rc3-time"
  },
  {
    "title": "Eine leere Minute nicht mit Preisen füllen",
    "summary": "Keine vorhandene Meldung ergibt kein belegtes OHLC.",
    "paragraphs": [
      "Jetzt betrachten wir eine getrennte Fortsetzung: Für den Abschnitt 09:04 bis vor 09:05 fehlen in der Liste sämtliche Geschäfte. In unserer Zeichenregel entsteht für ein leeres Zeitfenster kein Preis-Bar. Die zwölf bekannten Geschäfte bleiben unverändert.",
      "Eine Anzeige könnte stattdessen einen Platzhalter zeichnen oder den letzten Preis weiterführen. Dann muss sie diesen Wert als Weiterführung erklären. Vier identische gezeichnete Preise würden keinen neuen Handel zu diesem Preis beweisen.",
      "Bei echten Daten prüft Nora außerdem, ob wirklich keine Geschäfte stattfanden oder ob Meldungen fehlen. Eine leere Liste hat ohne weitere Prüfung keine eindeutige Ursache. Sie darf daraus keinen unbekannten Preis und kein garantiert ruhiges Handelsumfeld ableiten."
    ],
    "columns": [
      {
        "title": "Unsere Regel",
        "tone": "neutral",
        "points": [
          "Leeres Zeitfenster: kein erfundener Preis-Bar.",
          "Bekannte Meldungen bleiben die Grundlage."
        ]
      },
      {
        "title": "Zusätzliche Prüfung",
        "tone": "positive",
        "points": [
          "Handelsruhe oder Datenlücke?",
          "Platzhalter braucht eine Erklärung."
        ]
      }
    ],
    "prompt": "Welche Eröffnung lässt sich aus einem leeren Zeitfenster ohne weitere Daten bestimmen?",
    "answers": [
      {
        "label": "Immer der vorige Schluss als echtes Geschäft.",
        "explanation": "Eine Weiterführung wäre nur eine zusätzliche Anzeigenregel."
      },
      {
        "label": "Keine belegte Eröffnung.",
        "explanation": "Richtig: Kennzeichne leere Fenster und prüfe die Ursache fehlender Meldungen."
      },
      {
        "label": "Automatisch null Euro.",
        "explanation": "Fehlende Daten sind kein Handel bei null."
      }
    ],
    "correct": 1,
    "rule": "Kennzeichne leere Fenster und prüfe die Ursache fehlender Meldungen.",
    "diagram": null
  },
  {
    "title": "Die laufende Minute nur mit bisherigen Daten lesen",
    "summary": "Ein späteres Tief ist nicht schon früher bekannt.",
    "paragraphs": [
      "Nora hält die Anzeige um 09:01:15 an. Von Minute zwei sind nur Geschäft 5 um 09:01:00 und Geschäft 6 um 09:01:10 bekannt. Ihr aktueller Zustand ist O20,15, H20,20, L20,15 und letzter Preis 20,20.",
      "Die bisherige Menge beträgt fünf Aktien. Geschäft 7 um 09:01:50 zu 20,00 ist noch nicht geschehen. Es darf weder als Tief noch als Schluss in diesen früheren Zustand einfließen.",
      "Erst nach Ende der Minute und mit vollständigen Daten kennen wir L20,00 und C20,00. Nora beschreibt Zwischenstände als laufend. Ein später fertig gezeichneter Chart darf beim Üben nicht mit dem damaligen Wissensstand verwechselt werden."
    ],
    "columns": [
      {
        "title": "Um 09:01:15 bekannt",
        "tone": "neutral",
        "points": [
          "O20,15 H20,20 L20,15; letzter Preis 20,20.",
          "Bisher fünf Aktien."
        ]
      },
      {
        "title": "Erst später bekannt",
        "tone": "positive",
        "points": [
          "Geschäft 7 bei 20,00.",
          "Endgültiges Tief und Schluss der Minute."
        ]
      }
    ],
    "prompt": "Welches Tief ist um 09:01:15 in Minute zwei bisher bekannt?",
    "answers": [
      {
        "label": "20,00 Euro.",
        "explanation": "Dieser Preis wird erst um 09:01:50 gemeldet."
      },
      {
        "label": "19,95 Euro.",
        "explanation": "Das gehört zur ersten Minute."
      },
      {
        "label": "20,15 Euro.",
        "explanation": "Richtig: Nutze für einen Zwischenstand nur Daten bis zu diesem Zeitpunkt."
      }
    ],
    "correct": 2,
    "rule": "Nutze für einen Zwischenstand nur Daten bis zu diesem Zeitpunkt.",
    "diagram": null
  },
  {
    "title": "Tick als Meldung und Tick als Preisschritt trennen",
    "summary": "Dasselbe Wort kann zwei verschiedene Größen meinen.",
    "paragraphs": [
      "Für unseren Tick-Bar zählt jede Zeile der Geschäftsliste als ein Tick. Ein 3-Tick-Bar enthält drei solcher Meldungen. Auch eine neue Meldung zum unveränderten Preis würde mitzählen.",
      "Ein Preis-Tick kann dagegen den kleinsten erlaubten Preisschritt eines Produkts meinen. Das ist eine Entfernung auf der Preisachse. Ein Geschäftstick ist hier eine gezählte Meldung; ein Preisschritt ist eine Preisentfernung. Drei Meldungen müssen keine Bewegung von drei Preisschritten ergeben.",
      "Die Datenquelle muss außerdem erklären, was sie als einzelne Meldung liefert. Zusammengefasste Meldungen können anders zählen. Im Lernfall ist unsere Zeilenregel eindeutig; sie ist keine Aussage über jede Datenquelle."
    ],
    "columns": [
      {
        "title": "Geschäftstick",
        "tone": "neutral",
        "points": [
          "Hier eine Zeile der Liste.",
          "Gleicher Preis kann erneut zählen."
        ]
      },
      {
        "title": "Preis-Tick",
        "tone": "positive",
        "points": [
          "Kleinster erlaubter Preisschritt.",
          "Eine Entfernung, keine Meldungszahl."
        ]
      }
    ],
    "prompt": "Was zählt in unserem 3-Tick-Modell als ein Tick?",
    "answers": [
      {
        "label": "Eine Geschäftsmeldung aus der Liste.",
        "explanation": "Richtig: Frage bei Tick nach: Meldung oder Preisschritt?"
      },
      {
        "label": "Eine Aktie unabhängig von der Meldung.",
        "explanation": "Das wäre eine Mengenregel."
      },
      {
        "label": "Jede Änderung um einen Preisschritt.",
        "explanation": "Hier zählen Meldungen auch ohne Preisänderung."
      }
    ],
    "correct": 0,
    "rule": "Frage bei Tick nach: Meldung oder Preisschritt?",
    "diagram": null
  },
  {
    "title": "Den ersten 3-Tick-Bar bilden",
    "summary": "Drei Meldungen schließen den ersten Zählabschnitt.",
    "paragraphs": [
      "Nora beginnt beim ersten Geschäft und zählt: Zeile eins ist der erste Tick, Zeile zwei der zweite, Zeile drei der dritte. Der erste 3-Tick-Bar schließt daher mit Geschäft 3 um 09:00:20.",
      "Seine Preise sind O20,00, H20,10, L19,95 und C19,95. Die Mengen zwei, eins und drei ergeben sechs Aktien. Der Minuten-Bar schloss dagegen erst mit Geschäft 4 bei 20,05, weil seine Zeitgrenze später liegt.",
      "Geschäft 4 beginnt den nächsten Tick-Bar. Der Schluss des vorigen wird nicht als zusätzliches Geschäft übernommen. Jede Zeile gehört genau zu einer Tick-Gruppe. Der unterschiedliche Schluss entsteht durch die andere Grenze, nicht durch einen Widerspruch in den Daten."
    ],
    "columns": [
      {
        "title": "Erster 3-Tick-Bar",
        "tone": "neutral",
        "points": [
          "Geschäfte 1–3; Volumen sechs Aktien.",
          "C19,95 um 09:00:20."
        ]
      },
      {
        "title": "Erste Minute",
        "tone": "positive",
        "points": [
          "Geschäfte 1–4; Volumen acht Aktien.",
          "C20,05 aus Geschäft 4."
        ]
      }
    ],
    "prompt": "Wann ist unser erster 3-Tick-Bar vollständig?",
    "answers": [
      {
        "label": "Nach drei gehandelten Aktien.",
        "explanation": "Die Regel zählt drei Meldungen, nicht drei Aktien."
      },
      {
        "label": "Mit Geschäft 3 um 09:00:20.",
        "explanation": "Richtig: Schließe eine Tick-Gruppe mit der festgelegten Zahl von Meldungen."
      },
      {
        "label": "Erst um 09:01:00.",
        "explanation": "Das wäre die Zeitgrenze der ersten Minute."
      }
    ],
    "correct": 1,
    "rule": "Schließe eine Tick-Gruppe mit der festgelegten Zahl von Meldungen.",
    "diagram": "rc3-tick"
  },
  {
    "title": "Alle vier Tick-Gruppen nachrechnen",
    "summary": "Neue Grenzen führen zu neuen Eröffnungen und Schlüssen.",
    "paragraphs": [
      "Die zweite Tick-Gruppe enthält Geschäfte 4, 5 und 6. Sie ergibt O20,05, H20,20, L20,05 und C20,20, mit sieben Aktien. Sie beginnt schon in der ersten Minute und endet in der zweiten.",
      "Die dritte enthält Geschäfte 7, 8 und 9: O20,00, H20,00, L19,90 und C19,95, mit acht Aktien. Die vierte enthält Geschäfte 10, 11 und 12: O20,10, H20,25, L20,10 und C20,15, mit sechs Aktien.",
      "Zwölf Meldungen geteilt durch drei ergeben vier vollständige Bars. Ihre Volumenfolge lautet sechs, sieben, acht, sechs; die Summe bleibt 27 Aktien. Eine Gruppierung kann eine Minutengrenze überschreiten, wenn sie nicht nach Minuten arbeitet."
    ],
    "columns": [
      {
        "title": "Tick-Gruppen 1 und 2",
        "tone": "neutral",
        "points": [
          "Geschäfte 1–3 / 4–6.",
          "Mengen sechs / sieben Aktien."
        ]
      },
      {
        "title": "Tick-Gruppen 3 und 4",
        "tone": "positive",
        "points": [
          "Geschäfte 7–9 / 10–12.",
          "Mengen acht / sechs Aktien."
        ]
      }
    ],
    "prompt": "Welche Geschäfte enthält unser zweiter 3-Tick-Bar?",
    "answers": [
      {
        "label": "Geschäfte 5, 6 und 7.",
        "explanation": "Das wäre die zweite Minutengruppe."
      },
      {
        "label": "Nur das zweite Geschäft.",
        "explanation": "Ein Bar ist eine Gruppe, keine einzelne Zeilennummer."
      },
      {
        "label": "Geschäfte 4, 5 und 6.",
        "explanation": "Richtig: Zähle Tick-Gruppen entlang der Geschäftsliste, unabhängig von Minutengrenzen."
      }
    ],
    "correct": 2,
    "rule": "Zähle Tick-Gruppen entlang der Geschäftsliste, unabhängig von Minutengrenzen.",
    "diagram": "rc3-tick"
  },
  {
    "title": "Gleiche Bar-Abstände bedeuten keine gleiche Dauer",
    "summary": "Die horizontale Bar-Reihenfolge ist keine gleichmäßige Uhr.",
    "paragraphs": [
      "Im Tick-Schaubild erhalten die Bars gleiche horizontale Abstände. Darunter stehen erste und letzte Geschäftszeit. Für Bar eins liegen diese bei 09:00:05 und 09:00:20: fünfzehn Sekunden Abstand.",
      "Für die weiteren Bars sind es fünfundzwanzig, zwanzig und fünfzig Sekunden zwischen erster und letzter Meldung. Das sind die Zeitabstände innerhalb der belegten Gruppen. Die Wartezeit zwischen dem letzten Geschäft einer Gruppe und dem ersten der nächsten ist zusätzlich zu beachten.",
      "Nora darf die gezeichneten Abstände deshalb nicht als gleich lange Zeitfenster lesen. Auch zwei Bars können bei raschen Meldungen sehr schnell entstehen. Der Zeitstempel ergänzt die Reihenfolge; er ersetzt nicht die Kenntnis der Zählregel."
    ],
    "columns": [
      {
        "title": "Erster bis letzter Tick",
        "tone": "neutral",
        "points": [
          "Bar 1: 15 Sekunden; Bar 2: 25.",
          "Bar 3: 20; Bar 4: 50."
        ]
      },
      {
        "title": "Gezeichnete Abstände",
        "tone": "positive",
        "points": [
          "Hier gleich breit nach Bar-Reihenfolge.",
          "Keine Garantie gleicher Zeitdauer."
        ]
      }
    ],
    "prompt": "Was bedeutet der gleiche Abstand zweier Tick-Bars in unserem Bild?",
    "answers": [
      {
        "label": "Ihre Reihenfolge, nicht eine feste Zeitdauer.",
        "explanation": "Richtig: Prüfe Zeitstempel, wenn ein Chart nach Ereignissen statt nach Zeit zählt."
      },
      {
        "label": "Immer genau eine Minute.",
        "explanation": "Die Zählregel legt keine Minute fest."
      },
      {
        "label": "Immer genau fünfzehn Sekunden.",
        "explanation": "Die Gruppen dauern unterschiedlich lange."
      }
    ],
    "correct": 0,
    "rule": "Prüfe Zeitstempel, wenn ein Chart nach Ereignissen statt nach Zeit zählt.",
    "diagram": "rc3-tick"
  },
  {
    "title": "Meldungszahl und Stückzahl bleiben verschieden",
    "summary": "Drei Ticks können unterschiedlich viel Volumen enthalten.",
    "paragraphs": [
      "Alle vier Tick-Gruppen enthalten genau drei Meldungen. Ihr Volumen beträgt trotzdem sechs, sieben, acht und sechs Aktien. Ein einzelner Handel kann mehrere Aktien umfassen.",
      "In der dritten Gruppe sind die Mengen zwei, eins und fünf. Drei Meldungen liefern damit acht Aktien. Ein hoher Mengenwert bedeutet nicht automatisch viele getrennte Meldungen. Umgekehrt können viele kleine Meldungen eine niedrige Stücksumme haben.",
      "Eine feste Tick-Zahl ist daher kein fester Volumenwert. Nora prüft, welche Zählgröße ein Chart verwendet. Sie multipliziert drei Meldungen nicht einfach mit einer gedachten Standardmenge."
    ],
    "columns": [
      {
        "title": "Zählgröße Tick",
        "tone": "neutral",
        "points": [
          "Drei Meldungen je fertiger Gruppe.",
          "Jede Zeile zählt einmal."
        ]
      },
      {
        "title": "Zählgröße Volumen",
        "tone": "positive",
        "points": [
          "Summe der gemeldeten Aktien.",
          "Hier sechs, sieben, acht und sechs."
        ]
      }
    ],
    "prompt": "Wie viele Aktien enthält unser dritter 3-Tick-Bar?",
    "answers": [
      {
        "label": "Sechs Aktien.",
        "explanation": "Sechs gehört zur ersten und vierten Tick-Gruppe."
      },
      {
        "label": "Acht Aktien.",
        "explanation": "Richtig: Ersetze eine Meldungszahl nicht durch eine Stückzahl."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Drei ist seine Meldungszahl."
      }
    ],
    "correct": 1,
    "rule": "Ersetze eine Meldungszahl nicht durch eine Stückzahl.",
    "diagram": "rc3-tick"
  },
  {
    "title": "Die eigene Volumenschwelle genau festlegen",
    "summary": "Für Volumen braucht man eine Regel am Schwellenrand.",
    "paragraphs": [
      "Nora wählt jetzt eine Schwelle von fünf Aktien. Sie addiert die Mengen ganzer Geschäfte, bis die Summe mindestens fünf erreicht. Das auslösende Geschäft bleibt vollständig in der laufenden Gruppe. Danach beginnt die nächste Meldung mit einer neuen Summe von null.",
      "Das ist unsere ausdrücklich gewählte Ganzgeschäftsregel. Deshalb kann ein fertiger Bar mehr als fünf Aktien enthalten. Wir verteilen den Überschuss nicht noch einmal auf den nächsten Bar. So bleibt jedes Geschäft mit seiner gesamten Menge genau einmal enthalten.",
      "Andere Verfahren können Mengen aufteilen und Bars mit genau fünf Einheiten bilden. Die Anzeige muss ihre tatsächliche Regel erklären. Unsere Zahlen sind Lernbeispiele für eine Mengen-Gruppierung und behaupten keine einheitliche Regel aller Programme."
    ],
    "columns": [
      {
        "title": "Unsere Schwelle",
        "tone": "neutral",
        "points": [
          "Mindestens fünf Aktien.",
          "Auslösendes Geschäft bleibt ganz enthalten."
        ]
      },
      {
        "title": "Neustart",
        "tone": "positive",
        "points": [
          "Nächste Meldung beginnt bei null.",
          "Kein doppelter Übertrag des Überschusses."
        ]
      }
    ],
    "prompt": "Was passiert im Lernmodell bei einer Überschreitung der Fünfer-Schwelle?",
    "answers": [
      {
        "label": "Jeder Bar muss trotzdem exakt fünf Aktien haben.",
        "explanation": "Unsere Ganzgeschäftsregel erlaubt Überschreitungen."
      },
      {
        "label": "Der Überschuss wird zusätzlich noch einmal gezählt.",
        "explanation": "Das würde gehandelte Aktien doppelt zählen."
      },
      {
        "label": "Das ganze auslösende Geschäft bleibt im fertigen Bar.",
        "explanation": "Richtig: Lege Schwelle, Aufteilung und Neustart vor dem Rechnen fest."
      }
    ],
    "correct": 2,
    "rule": "Lege Schwelle, Aufteilung und Neustart vor dem Rechnen fest.",
    "diagram": null
  },
  {
    "title": "Die ersten beiden Volumen-Bars aufbauen",
    "summary": "Mit ganzen Geschäften ergeben sich zweimal sechs Aktien.",
    "paragraphs": [
      "Im ersten Mengen-Bar sammelt Nora zwei Aktien aus Geschäft 1 und eine aus Geschäft 2. Die Summe drei liegt unter der Schwelle. Geschäft 3 ergänzt drei: Jetzt sind es sechs Aktien. Der Bar schließt um 09:00:20.",
      "Seine OHLC-Werte entsprechen hier zufällig dem ersten Tick-Bar: O20,00, H20,10, L19,95, C19,95. Der zweite Mengen-Bar beginnt bei Geschäft 4 mit zwei Aktien. Geschäft 5 ergänzt vier, also schließt diese Gruppe mit sechs Aktien.",
      "Der zweite Volumen-Bar hat O20,05, H20,15, L20,05 und C20,15. Der zweite Tick-Bar enthält zusätzlich Geschäft 6 und endet bei 20,20. Gleiche erste Grenzen bedeuten daher nicht, dass beide Gruppierungen dauerhaft gleich bleiben."
    ],
    "columns": [
      {
        "title": "Volumen-Bar 1",
        "tone": "neutral",
        "points": [
          "Geschäfte 1–3: 2 + 1 + 3 = 6.",
          "C19,95."
        ]
      },
      {
        "title": "Volumen-Bar 2",
        "tone": "positive",
        "points": [
          "Geschäfte 4–5: 2 + 4 = 6.",
          "C20,15."
        ]
      }
    ],
    "prompt": "Welche Geschäfte enthält unser zweiter Volumen-Bar?",
    "answers": [
      {
        "label": "Geschäfte 4 und 5.",
        "explanation": "Richtig: Vergleiche Gruppierungen anhand ihrer konkreten Grenzen."
      },
      {
        "label": "Geschäfte 4, 5 und 6.",
        "explanation": "Diese Gruppe gehört zur 3-Tick-Regel."
      },
      {
        "label": "Nur Geschäft 5.",
        "explanation": "Die zwei Aktien aus Geschäft 4 gehören ebenfalls dazu."
      }
    ],
    "correct": 0,
    "rule": "Vergleiche Gruppierungen anhand ihrer konkreten Grenzen.",
    "diagram": "rc3-volume"
  },
  {
    "title": "Die große Überschreitung im dritten Volumen-Bar prüfen",
    "summary": "Ein größeres Geschäft kann die Schwelle weit übertreffen.",
    "paragraphs": [
      "Der dritte Volumen-Bar beginnt mit Geschäft 6: eine Aktie. Geschäft 7 ergänzt zwei, die Summe ist drei. Geschäft 8 ergänzt eine, die Summe ist vier. Das reicht noch nicht.",
      "Geschäft 9 umfasst fünf Aktien. Mit ihm erreicht die Gruppe neun. Nach unserer Ganzgeschäftsregel gehören alle fünf in diesen Bar. Er enthält Geschäfte 6 bis 9 und hat O20,20, H20,20, L19,90 und C19,95.",
      "Die Überschreitung beträgt vier Aktien. Diese vier sind bereits im Volumen neun enthalten. Nora startet bei Geschäft 10 mit null; sie übernimmt nicht zusätzlich vier. Die Menge neun bleibt eine echte Summe der vier Meldungen, kein Rechenfehler."
    ],
    "columns": [
      {
        "title": "Vor Geschäft 9",
        "tone": "neutral",
        "points": [
          "1 + 2 + 1 = 4 Aktien.",
          "Noch unter Schwelle fünf."
        ]
      },
      {
        "title": "Mit Geschäft 9",
        "tone": "positive",
        "points": [
          "4 + 5 = 9 Aktien.",
          "Ganzes Geschäft enthalten; danach Neustart."
        ]
      }
    ],
    "prompt": "Wie groß ist das Volumen des dritten Mengen-Bars?",
    "answers": [
      {
        "label": "Dreizehn Aktien nach Übertrag.",
        "explanation": "Der Überschuss darf nicht zusätzlich gezählt werden."
      },
      {
        "label": "Neun Aktien.",
        "explanation": "Richtig: Zähle Überschussmengen genau einmal im Bar, der sie tatsächlich enthält."
      },
      {
        "label": "Fünf Aktien.",
        "explanation": "Das würde die Ganzgeschäftsregel verändern."
      }
    ],
    "correct": 1,
    "rule": "Zähle Überschussmengen genau einmal im Bar, der sie tatsächlich enthält.",
    "diagram": "rc3-volume"
  },
  {
    "title": "Den fertigen vierten Bar und den offenen Rest trennen",
    "summary": "Eine beendete Zeitspanne schließt keinen Mengenrest automatisch.",
    "paragraphs": [
      "Geschäft 10 beginnt den vierten Mengen-Bar mit zwei Aktien. Geschäft 11 bringt drei dazu. Genau fünf Aktien sind erreicht. Der Bar ist vollständig: O20,10, H20,25, L20,10, C20,25.",
      "Geschäft 12 beginnt den fünften Bar mit einer Aktie zu 20,15. Bei der Aufnahme um 09:04 fehlen vier Aktien bis zur Schwelle. Dieser Bar ist offen. Sein bisheriges O, H, L und letzter Preis sind alle 20,15; ein endgültiger Schluss steht noch nicht fest.",
      "Die Mengensumme lautet sechs plus sechs plus neun plus fünf plus eins gleich 27. Die vier Zeit-Bars sind bei 09:04 fertig, aber der fünfte Mengen-Bar nicht. In diesem Hauptfall gibt es keinen Sitzungsneustart, der ihn vorher beenden würde."
    ],
    "columns": [
      {
        "title": "Vierter Mengen-Bar",
        "tone": "neutral",
        "points": [
          "2 + 3 = 5 Aktien.",
          "Geschäfte 10–11; abgeschlossen."
        ]
      },
      {
        "title": "Fünfter Mengen-Bar",
        "tone": "positive",
        "points": [
          "Geschäft 12: eine Aktie.",
          "Vier fehlen; bei 09:04 noch offen."
        ]
      }
    ],
    "prompt": "Welcher Zustand gilt für den fünften Volumen-Bar bei 09:04?",
    "answers": [
      {
        "label": "Mit einer Aktie vollständig.",
        "explanation": "Unsere Mengenschwelle liegt bei fünf."
      },
      {
        "label": "Er muss fertig sein, weil vier Minuten vorbei sind.",
        "explanation": "Die Mengenregel hat keine Vier-Minuten-Grenze."
      },
      {
        "label": "Eine Aktie vorhanden, Bar noch offen.",
        "explanation": "Richtig: Unterscheide das Ende eines Zeitfensters vom Erreichen einer Mengenschwelle."
      }
    ],
    "correct": 2,
    "rule": "Unterscheide das Ende eines Zeitfensters vom Erreichen einer Mengenschwelle.",
    "diagram": "rc3-volume"
  },
  {
    "title": "Eine andere Aufteilungsregel als getrennten Fall behandeln",
    "summary": "Aufgeteilte Mengen sind keine zusätzlichen Geschäfte.",
    "paragraphs": [
      "Jetzt betrachten wir einen eigenen Fall außerhalb der zwölf Luma-Geschäfte. Ein Mengen-Bar enthält bereits drei Aktien. Ein neues Geschäft meldet sieben Aktien zu einem einzigen Preis. Insgesamt sind zehn Aktien vorhanden.",
      "Bei einer ausdrücklich gewählten Aufteilungsregel kann man zwei der sieben Aktien zum ersten Bar geben. Er erreicht fünf. Die verbleibenden fünf füllen den zweiten Bar. Beide haben genau fünf, zusammen zehn. Das neue Geschäft wurde rechnerisch aufgeteilt, nicht zweimal an der Börse abgeschlossen.",
      "Bei unserer Hauptregel bliebe das neue Geschäft ganz: Der laufende Bar würde mit zehn Aktien schließen. Beide Gruppierungen sind mit ihrer eigenen Definition nachvollziehbar. Sie dürfen aber nicht mitten in einer Rechnung vermischt werden."
    ],
    "columns": [
      {
        "title": "Ganzgeschäftsregel",
        "tone": "neutral",
        "points": [
          "3 + 7 = 10 in einem fertigen Bar.",
          "Kein zweiter Bar ohne neue Meldung."
        ]
      },
      {
        "title": "Getrennte Aufteilungsregel",
        "tone": "positive",
        "points": [
          "3 + 2 = 5; Rest 5 in zweitem Bar.",
          "Gesamtsumme bleibt zehn."
        ]
      }
    ],
    "prompt": "Wie viele Aktien enthalten beide Bars zusammen im Aufteilungsfall?",
    "answers": [
      {
        "label": "Zehn Aktien.",
        "explanation": "Richtig: Prüfe auch bei Aufteilungen die Erhaltung der Gesamtmenge."
      },
      {
        "label": "Vierzehn Aktien.",
        "explanation": "Die sieben dürfen nicht doppelt gezählt werden."
      },
      {
        "label": "Nur sieben Aktien.",
        "explanation": "Die schon vorhandenen drei fehlen dann."
      }
    ],
    "correct": 0,
    "rule": "Prüfe auch bei Aufteilungen die Erhaltung der Gesamtmenge.",
    "diagram": null
  },
  {
    "title": "Aus Minutenwerten keine genaue Tick-Folge erfinden",
    "summary": "Eine fertige Zusammenfassung enthält zu wenig Reihenfolgeinformation.",
    "paragraphs": [
      "Angenommen, Nora hat nur die vier fertigen Minutenwerte und ihre Mengen. Sie kennt dann erstes, höchstes, niedrigstes und letztes Geschäft je Minute sowie die Gesamtstückzahl. Die vollständige Meldungsliste ist nicht vorhanden.",
      "Damit kann sie nicht eindeutig bestimmen, welche drei aufeinanderfolgenden Meldungen den ersten Tick-Bar bildeten. Ebenso fehlen die einzelnen Mengen, die eine Volumenschwelle auslösen würden. Viele unterschiedliche Geschäftsfolgen können dieselben Minutenwerte und Mengen liefern.",
      "Für unsere Tick- und Volumenbilder verwenden wir deshalb ausdrücklich die zwölf Originalmeldungen. Ein Programm, das nur aus fertigen Minuten eine Zwischenfolge annimmt, rekonstruiert ein Modell. Es hat dadurch keine bewiesene echte Geschäftsfolge erhalten."
    ],
    "columns": [
      {
        "title": "Minutenwerte enthalten",
        "tone": "neutral",
        "points": [
          "O, H, L, C je Minute.",
          "Hier zusätzlich die Minutenmenge."
        ]
      },
      {
        "title": "Für exakte Neubildung nötig",
        "tone": "positive",
        "points": [
          "Einzelne Meldungen in Reihenfolge.",
          "Ihre Zeitstempel und Einzelmengen."
        ]
      }
    ],
    "prompt": "Reichen Minuten-OHLC und Minutenvolumen für eine eindeutige 3-Tick-Rekonstruktion?",
    "answers": [
      {
        "label": "Ja, Volumen ist die Meldungszahl.",
        "explanation": "Volumen zählt Aktien, nicht automatisch Meldungen."
      },
      {
        "label": "Nein, die einzelnen Meldungen und ihre Reihenfolge fehlen.",
        "explanation": "Richtig: Fordere ausreichend genaue Ausgangsdaten für eine andere Gruppierungsregel."
      },
      {
        "label": "Ja, OHLC nennt jedes einzelne Geschäft.",
        "explanation": "Vier Kennwerte lassen Zwischenmeldungen weg."
      }
    ],
    "correct": 1,
    "rule": "Fordere ausreichend genaue Ausgangsdaten für eine andere Gruppierungsregel.",
    "diagram": null
  },
  {
    "title": "Den Startpunkt und Sitzungsneustart angeben",
    "summary": "Der gleiche Schwellenwert allein sichert keine gleichen Gruppen.",
    "paragraphs": [
      "Unser Hauptfall beginnt bei Geschäft 1 und läuft ohne Sitzungsneustart bis zur Aufnahme um 09:04. Sitzung bedeutet hier ein festgelegter zusammenhängender Handelsabschnitt. Seine Grenzen können einen Zähler neu beginnen lassen.",
      "In einer getrennten Variante startet Nora erst bei Geschäft 2. Der erste 3-Tick-Bar enthält dann Geschäfte 2, 3 und 4: O20,10, H20,10, L19,95 und C20,05. Die Zahl drei bleibt gleich, aber die Gruppengrenzen haben sich verschoben.",
      "Ein Neustart kann auch einen Rest unterhalb der Schwelle beenden. Dann muss dieser verkürzte Bar als solcher erkennbar sein. Für vergleichbare Charts prüft Nora Datenbeginn, Sitzungsgrenzen und die Regel für offene Reste. Eine spätere Anzeige darf den Startpunkt nicht unbemerkt verändern."
    ],
    "columns": [
      {
        "title": "Hauptfall",
        "tone": "neutral",
        "points": [
          "Beginn bei Geschäft 1.",
          "Kein Neustart bis 09:04."
        ]
      },
      {
        "title": "Getrennte Startvariante",
        "tone": "positive",
        "points": [
          "Beginn bei Geschäft 2.",
          "Erste Dreiergruppe: 2–4 statt 1–3."
        ]
      }
    ],
    "prompt": "Was verändert sich, wenn die Dreierzählung erst bei Geschäft 2 beginnt?",
    "answers": [
      {
        "label": "Gar nichts, weil drei als Schwelle bleibt.",
        "explanation": "Der Startpunkt ist Teil der Gruppierungsregel."
      },
      {
        "label": "Die historischen Geschäfte selbst.",
        "explanation": "Die Meldungen bleiben gleich; nur ihre Gruppierung ändert sich."
      },
      {
        "label": "Die Gruppengrenzen und damit mögliche OHLC-Werte.",
        "explanation": "Richtig: Prüfe Startpunkt und Neustartregeln zusätzlich zur Schwelle."
      }
    ],
    "correct": 2,
    "rule": "Prüfe Startpunkt und Neustartregeln zusätzlich zur Schwelle.",
    "diagram": null
  },
  {
    "title": "Viele Ereignisse sind keine große Preisbewegung",
    "summary": "Aktivität und Preisentfernung sind verschiedene Eigenschaften.",
    "paragraphs": [
      "Nora betrachtet einen getrennten Fall mit drei Geschäftsmeldungen. Jede hat eine Aktie und denselben Preis 30,00. Ein 3-Tick-Bar wäre nach der dritten Meldung vollständig. Seine vier Preiswerte wären alle 30,00.",
      "Es wurde gehandelt, aber die Hoch-Tief-Spanne beträgt null. Umgekehrt kann eine kleine Zahl von Meldungen sehr verschiedene Preise enthalten. Wie schnell ein Tick-Bar entsteht, misst daher keine feste Größe der Preisbewegung.",
      "Eine Volumenschwelle beschreibt gehandelte Menge. Auch viel Menge kann bei unveränderten Preisen vorkommen. Nora beschreibt Meldungstempo, Volumen und Preisspanne getrennt. Aus einer raschen Barfolge ergibt sich kein automatisches Handelssignal."
    ],
    "columns": [
      {
        "title": "Drei Meldungen",
        "tone": "neutral",
        "points": [
          "Je eine Aktie bei 30,00.",
          "Dreier-Tick-Bar vollständig."
        ]
      },
      {
        "title": "Preisbewegung",
        "tone": "positive",
        "points": [
          "O=H=L=C=30,00.",
          "Spanne null trotz drei Geschäften."
        ]
      }
    ],
    "prompt": "Kann ein vollständiger 3-Tick-Bar eine Preisspanne von null haben?",
    "answers": [
      {
        "label": "Ja, wenn alle drei Meldungen denselben Preis haben.",
        "explanation": "Richtig: Trenne die Menge der Ereignisse von der Entfernung ihrer Preise."
      },
      {
        "label": "Nein, jeder Tick muss den Preis ändern.",
        "explanation": "Unsere Ticks zählen Meldungen, auch bei gleichem Preis."
      },
      {
        "label": "Nein, drei Meldungen sind drei Euro Bewegung.",
        "explanation": "Anzahl und Preisentfernung haben unterschiedliche Einheiten."
      }
    ],
    "correct": 0,
    "rule": "Trenne die Menge der Ereignisse von der Entfernung ihrer Preise.",
    "diagram": null
  },
  {
    "title": "Eine Datenquelle kann Meldungen zusammenfassen",
    "summary": "Die Zählregel braucht eine definierte Eingangseinheit.",
    "paragraphs": [
      "In einem eigenen Beispiel liegen zwei Geschäfte zu je einer Aktie am selben Preis vor. Quelle A liefert zwei getrennte Meldungen. Eine vereinfachte Quelle B fasst sie zu einer Meldung mit zwei Aktien zusammen. Der Preis und die Gesamtmenge sind gleich.",
      "Bei einer Tick-Zählung nach gelieferten Zeilen zählt A zwei, B eins. Bei einer Mengensumme ergeben beide zwei Aktien. Das heißt nicht, dass einer der Teilnehmer mehr Aktien gehandelt hätte. Die gelieferten Eingangseinheiten sind verschieden.",
      "Auch Reihenfolge, Zeitstempel und nachträgliche Korrekturen sind zu prüfen. Für unseren Lernfall ist die zwölfzeilige Liste die eindeutige Grundlage. Nora vergleicht reale Tick-Charts erst, wenn sie weiß, was deren Datenquellen als einen Tick zählen."
    ],
    "columns": [
      {
        "title": "Quelle A",
        "tone": "neutral",
        "points": [
          "Zwei Meldungen zu je einer Aktie.",
          "Tick-Zähler nach Zeilen: zwei."
        ]
      },
      {
        "title": "Vereinfachte Quelle B",
        "tone": "positive",
        "points": [
          "Eine Meldung über zwei Aktien.",
          "Tick-Zähler nach Zeilen: eins."
        ]
      }
    ],
    "prompt": "Welche Größe bleibt im Beispiel bei beiden Quellen gleich?",
    "answers": [
      {
        "label": "Jede daraus gebildete Tick-Grenze.",
        "explanation": "Andere Eingangseinheiten können andere Grenzen erzeugen."
      },
      {
        "label": "Die Gesamtmenge von zwei Aktien.",
        "explanation": "Richtig: Vergleiche Tick-Zählungen nur mit bekannter Meldungseinheit."
      },
      {
        "label": "Die Zahl gelieferter Zeilen.",
        "explanation": "A liefert zwei, B nur eine."
      }
    ],
    "correct": 1,
    "rule": "Vergleiche Tick-Zählungen nur mit bekannter Meldungseinheit.",
    "diagram": null
  },
  {
    "title": "Die drei Gruppierungen in einen Datenbericht übersetzen",
    "summary": "Ein vollständiger Bericht nennt Regel, Grenzen und Rest.",
    "paragraphs": [
      "Nora berichtet: Zwölf Luma-Meldungen über 27 Aktien werden ab Geschäft 1 gruppiert. Die Aufnahme ist um 09:04. Mit festen Minuten entstehen vier abgeschlossene Bars mit Mengen acht, sieben, acht und vier.",
      "Mit drei Meldungen je Tick-Bar entstehen vier abgeschlossene Bars mit Mengen sechs, sieben, acht und sechs. Mit Schwelle fünf und ganzen Geschäften entstehen vier abgeschlossene Mengen-Bars mit sechs, sechs, neun und fünf Aktien sowie ein offener Rest von einer Aktie.",
      "Die Gesamtsumme ist jedes Mal 27. Die OHLC-Werte ändern sich mit den Grenzen; die ursprünglichen Geschäfte ändern sich nicht. Keiner der drei Charts garantiert eine zukünftige Richtung oder eine eigene Ausführung. Im nächsten Kapitel untersucht Nora Bars, deren Bildung von Preisentfernungen abhängt."
    ],
    "columns": [
      {
        "title": "Zeit / Tick",
        "tone": "neutral",
        "points": [
          "Vier Minuten-Bars / vier 3-Tick-Bars.",
          "Alle bei der Aufnahme vollständig."
        ]
      },
      {
        "title": "Volumen",
        "tone": "positive",
        "points": [
          "Vier vollständige Bars und ein offener Rest.",
          "Ganzgeschäftsregel; insgesamt 27 Aktien."
        ]
      }
    ],
    "prompt": "Was bleibt bei allen drei Gruppierungen einschließlich Rest gleich?",
    "answers": [
      {
        "label": "Jeder Eröffnungs- und Schlusswert je Bar.",
        "explanation": "Andere Grenzen können andere Kennwerte ergeben."
      },
      {
        "label": "Die Zahl ausschließlich vollständiger und offener Bars.",
        "explanation": "Die Volumenregel erzeugt zusätzlich einen offenen Rest."
      },
      {
        "label": "Die zwölf Originalgeschäfte und ihre Gesamtmenge von 27 Aktien.",
        "explanation": "Richtig: Berichte Ausgangsdaten, Gruppierungsregel, Startpunkt und offene Reste."
      }
    ],
    "correct": 2,
    "rule": "Berichte Ausgangsdaten, Gruppierungsregel, Startpunkt und offene Reste.",
    "diagram": null
  }
];
export const chartsChapterThreeLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `reading-charts.chapter-03.lesson-${String(index + 1).padStart(2, '0')}`;
  const observations = draft.diagram === 'rc3-time'
    ? ['Vier abgeschlossene Zeitfenster bei Aufnahme 09:04.', 'Gruppen 1–4, 5–7, 8–10, 11–12; Mengen 8/7/8/4.']
    : draft.diagram === 'rc3-tick'
    ? ['Vier abgeschlossene Gruppen zu je drei Meldungen.', 'Gruppen 1–3, 4–6, 7–9, 10–12; Mengen 6/7/8/6.']
    : ['Ganzgeschäftsregel: Mengen 6/6/9/5/1 bei Schwelle fünf.', 'Gruppen 1–3, 4–5, 6–9, 10–11 und 12; letzter Bar noch offen.'];
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 3 · Zeit-Bars, Tick-Bars und Volumen-Bars', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Charts verstehen · Kapitel 3', title: draft.title, paragraphs: draft.paragraphs, callout: draft.rule },
      ...(draft.diagram ? [{ id: `${key}.diagram`, type: 'diagram' as const, title: 'Dieselben Geschäfte anders gruppiert', scenario: draft.diagram as ChartScenarioId, caption: 'Eigene Luma-Geschäfte · Preise in Euro je Aktie · Aufnahme 09:04 · Bar-Beginn und erstes Geschäft sind nicht immer gleich.', observations }] : []),
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map(column => ({ ...column, tone: column.tone as 'neutral' | 'positive' })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, i) => ({ id: `choice-${i}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
