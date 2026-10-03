import type { Lesson, ChartScenarioId } from '../../types';
import { reportDescriptions } from '../../../components/ReadingReportDescriptions';
const drafts = [
  {
    "title": "Die Frage vor dem Bild festlegen",
    "summary": "Ein Bericht beantwortet eine klar begrenzte Frage.",
    "paragraphs": [
      "Nora soll einen Chartbericht über zwei abgeschlossene Minuten der erfundenen Luma-Aktie prüfen. Die Frage lautet: Was zeigen diese Daten, und was lässt sich daraus nicht ableiten?",
      "Ein Chartbericht verbindet ein Bild mit einer Beschreibung seiner Daten und Regeln. Nora trennt Angaben, die sie nachrechnen kann, von Deutungen, die weitere Belege brauchen.",
      "Sie beginnt mit diesem engen Auftrag. Ein schönes Bild allein beantwortet weder die Frage nach einer eigenen Ausführung noch die Frage nach dem nächsten Preis."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Zwei abgeschlossene Minuten",
          "Erfundene Aktie, eigener Lernfall"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Daten und Regeln prüfen",
          "Aussagegrenzen nennen"
        ]
      }
    ],
    "prompt": "Was ist der Auftrag dieses Berichts?",
    "answers": [
      {
        "label": "Die vorgegebenen Daten und ihre Aussagegrenzen prüfen.",
        "explanation": "Daten und Regeln prüfen Aussagegrenzen nennen"
      },
      {
        "label": "Eine sichere nächste Richtung nennen.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Ein Bericht beantwortet eine klar begrenzte Frage."
      },
      {
        "label": "Einen eigenen Kauf allein aus dem Bild bestätigen.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Zwei abgeschlossene Minuten; Erfundene Aktie, eigener Lernfall."
      }
    ],
    "correct": 0,
    "rule": "Ein Bericht beantwortet eine klar begrenzte Frage.",
    "diagram": null
  },
  {
    "title": "Den Hauptfall mit einem Datenzettel beginnen",
    "summary": "Produkt, Einheit und Quelle müssen lesbar sein.",
    "paragraphs": [
      "Unsere Luma-Preise sind Euro je Aktie. Die Quelle ist eine eigene vollständige Übungsliste für den genannten Ausschnitt am erfundenen Tag D 1. Uhrzeiten verwenden UTC, eine eindeutig benannte gemeinsame Zeitbasis.",
      "Wir betrachten Geschäftspreise. Die Abschnitte sind 09:00 bis 09:01 und 09:01 bis 09:02. Es gibt in diesem Fall keinen Split, keine Dividendenbereinigung und keinen Kontraktwechsel.",
      "Nora nennt diese Angaben direkt beim Bild. Sie behauptet mit dem erfundenen Datum keine echte Handelssitzung. Die Liste umfasst nur den Lernfall, nicht den gesamten Aktienmarkt."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Luma · Euro je Aktie",
          "Eigene Geschäftsliste · D 1 · UTC"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Keine Bereinigung",
          "Ausschnitt von 09:00 bis 09:02"
        ]
      }
    ],
    "prompt": "Welche Preisart verwendet der Hauptfall?",
    "answers": [
      {
        "label": "Garantierte eigene Kaufpreise.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Luma · Euro je Aktie; Eigene Geschäftsliste · D 1 · UTC."
      },
      {
        "label": "Gemeldete Geschäftspreise der eigenen Übungsliste.",
        "explanation": "Keine Bereinigung Ausschnitt von 09:00 bis 09:02"
      },
      {
        "label": "Unbekannte Mittelpunkte aus Angeboten.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Produkt, Einheit und Quelle müssen lesbar sein."
      }
    ],
    "correct": 1,
    "rule": "Produkt, Einheit und Quelle müssen lesbar sein.",
    "diagram": null
  },
  {
    "title": "Vier Geschäfte der ersten Minute lesen",
    "summary": "Meldungen und Stückmengen sind unterschiedliche Größen.",
    "paragraphs": [
      "Die erste Minute enthält vier eigene Geschäfte:09:00:05 zu 30 Euro mit zwei Aktien;09:00:20 zu 32 mit einer Aktie;09:00:35 zu 29 mit vier Aktien;09:00:50 zu 31 mit drei Aktien.",
      "Jede Zeile nennt Zeitpunkt, Preis und Menge. Wir zählen jede der vier Meldungen einmal. Die Uhrzeiten bestimmen die Reihenfolge.",
      "Nora hält fest: Vier Meldungen sind nicht vier Aktien. Die Stückmengen werden gesondert addiert. Es liegen keine Angebote und keine persönlichen Auftragsbestätigungen vor."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Preise 30/32/29/31",
          "Mengen 2/1/4/3"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Vier Meldungen",
          "Stücksumme getrennt rechnen"
        ]
      }
    ],
    "prompt": "Wie viele Geschäftsmeldungen enthält die erste Minute?",
    "answers": [
      {
        "label": "Zehn.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Meldungen und Stückmengen sind unterschiedliche Größen."
      },
      {
        "label": "Eine.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Preise 30/32/29/31; Mengen 2/1/4/3."
      },
      {
        "label": "Vier.",
        "explanation": "Vier Meldungen Stücksumme getrennt rechnen"
      }
    ],
    "correct": 2,
    "rule": "Meldungen und Stückmengen sind unterschiedliche Größen.",
    "diagram": null
  },
  {
    "title": "Die Abschnittsgrenzen ausdrücklich setzen",
    "summary": "Eine Grenzmeldung darf nicht doppelt gezählt werden.",
    "paragraphs": [
      "Unsere Minuten beginnen einschließlich der linken Grenze und enden ohne die rechte Grenze. Eine Meldung um 09:01:00 würde deshalb zur zweiten Minute gehören.",
      "In der zweiten Minute stehen die eigenen Meldungen 09:01:05 zu 31 mit einer Aktie;09:01:20 zu 33 mit zwei;09:01:35 zu 30 mit zwei;09:01:50 zu 32 mit einer.",
      "Nora benutzt dieselbe Fensterregel für Preiswerte und Mengen. So kann sie beide Minuten später zu einem größeren Abschnitt verbinden, ohne eine Grenzmeldung doppelt einzurechnen."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Minute 1:[09:00,09:01)",
          "Minute 2:[09:01,09:02)"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Links enthalten",
          "Rechts nicht enthalten"
        ]
      }
    ],
    "prompt": "Wohin gehörte eine Meldung genau um 09:01:00?",
    "answers": [
      {
        "label": "Zur zweiten Minute.",
        "explanation": "Links enthalten Rechts nicht enthalten"
      },
      {
        "label": "Zu beiden Minuten.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Eine Grenzmeldung darf nicht doppelt gezählt werden."
      },
      {
        "label": "Zu keiner Minute.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Minute 1:[09:00,09:01); Minute 2:[09:01,09:02)."
      }
    ],
    "correct": 0,
    "rule": "Eine Grenzmeldung darf nicht doppelt gezählt werden.",
    "diagram": null
  },
  {
    "title": "Die erste OHLC-Kerze aus der Liste bilden",
    "summary": "Die vier Kennwerte haben verschiedene Aufgaben.",
    "paragraphs": [
      "O bedeutet der erste Preis, H der höchste, L der niedrigste und C der letzte Preis im Abschnitt. Aus der ersten Liste erhalten wir O 30, H 32, L 29 und C 31 Euro.",
      "Der erste Preis 30 ist nicht automatisch der tiefste. Hier folgt später ein Geschäft zu 29. Der Schluss 31 ist nicht das Hoch 32.",
      "Nora vergleicht jeden Kennwert mit der vollständigen Liste. Danach prüft sie das Bild. Die Kerze muss dieselben vier Werte zeigen, auch wenn Farbe oder Darstellung geändert werden."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "O 30 · H 32 · L 29 · C 31",
          "Vier klar benannte Werte"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Mit der Liste abgleichen",
          "Farbe ändert keine Werte"
        ]
      }
    ],
    "prompt": "Welcher Schluss gehört zur ersten Minute?",
    "answers": [
      {
        "label": "29 Euro.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: O 30 · H 32 · L 29 · C 31; Vier klar benannte Werte."
      },
      {
        "label": "31 Euro.",
        "explanation": "Mit der Liste abgleichen Farbe ändert keine Werte"
      },
      {
        "label": "32 Euro.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Die vier Kennwerte haben verschiedene Aufgaben."
      }
    ],
    "correct": 1,
    "rule": "Die vier Kennwerte haben verschiedene Aufgaben.",
    "diagram": "rc10-summary"
  },
  {
    "title": "Einen widersprüchlichen Kennwert stoppen",
    "summary": "Hoch und Tief müssen Öffnung und Schluss einschließen.",
    "paragraphs": [
      "Ein fehlerhafter Entwurf nennt O 30, H 32, L 29 und C 33. Das kann keine gültige OHLC-Zusammenfassung desselben Abschnitts sein: Der angebliche Schluss liegt über dem angeblichen Hoch.",
      "Nora markiert die Dateninkonsistenz. Das bedeutet, dass Angaben einander widersprechen. Sie fragt nach Quelle, Abschnitt und Übertragungsfehler, bevor sie die Kerze deutet.",
      "Sie repariert das Hoch nicht stillschweigend auf 33. In unserer vollständigen Liste ist der richtige Schluss 31. Eine solche Korrektur muss auf den Eingaben beruhen und nachvollziehbar bleiben."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Fehler:C 33 liegt über H 32",
          "Kennwerte widersprechen sich"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Liste prüfen",
          "Richtiger C ist 31"
        ]
      }
    ],
    "prompt": "Was stimmt am Entwurf O 30/H 32/L 29/C 33 nicht?",
    "answers": [
      {
        "label": "Der Körper ist grün.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Hoch und Tief müssen Öffnung und Schluss einschließen."
      },
      {
        "label": "Die Minute hat vier Meldungen.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Fehler:C 33 liegt über H 32; Kennwerte widersprechen sich."
      },
      {
        "label": "Der Schluss liegt über dem Hoch.",
        "explanation": "Liste prüfen Richtiger C ist 31"
      }
    ],
    "correct": 2,
    "rule": "Hoch und Tief müssen Öffnung und Schluss einschließen.",
    "diagram": null
  },
  {
    "title": "Die gesamte Spanne nachrechnen",
    "summary": "Spanne ist Hoch minus Tief.",
    "paragraphs": [
      "Die erste Minute reicht von 29 bis 32 Euro. Ihre Spanne beträgt 32 minus 29 gleich drei Euro je Aktie. Das beschreibt die gesamte beobachtete Preisspanne des Abschnitts.",
      "Der Körper zwischen O 30 und C 31 ist nur ein Euro hoch. Körper und Spanne sind also unterschiedliche Größen.",
      "Nora schreibt die Einheit dazu. Drei Euro Spanne sind kein nachgewiesener persönlicher Gewinn. Dafür müsste sie eigene Mengen, Ausführungen und Kosten kennen."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "H 32 − L 29 =3 Euro",
          "Gesamte Preisspanne"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Körper nur 1 Euro",
          "Keine eigene Auszahlung belegt"
        ]
      }
    ],
    "prompt": "Wie groß ist die erste Spanne?",
    "answers": [
      {
        "label": "Drei Euro je Aktie.",
        "explanation": "Körper nur 1 Euro Keine eigene Auszahlung belegt"
      },
      {
        "label": "Ein Euro je Aktie.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Spanne ist Hoch minus Tief."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: H 32 − L 29 =3 Euro; Gesamte Preisspanne."
      }
    ],
    "correct": 0,
    "rule": "Spanne ist Hoch minus Tief.",
    "diagram": null
  },
  {
    "title": "Körper und Schatten vollständig prüfen",
    "summary": "Die drei Teile ergeben zusammen die Spanne.",
    "paragraphs": [
      "Der Körper ist der Betrag von 31 minus 30, also ein Euro. Der obere Schatten reicht von 31 bis 32 und ist ebenfalls ein Euro. Der untere Schatten reicht von 29 bis 30 und ist ein Euro.",
      "Zusammen ergibt ein plus ein plus ein die Spanne von drei Euro. Der Körperanteil beträgt ein Drittel oder ungefähr 33,3 Prozent der Spanne.",
      "Nora prüft die Zahlen statt nur die sichtbaren Längen. Eine andere Achsenskala kann Bildabstände verändern. Auch die Körperbreite verrät keine Stückmenge."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Körper 1 · oben 1 · unten 1",
          "Summe 3 Euro"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Körperanteil 1/3",
          "Keine Mengeninformation in der Breite"
        ]
      }
    ],
    "prompt": "Welcher Körperanteil gehört zur ersten Kerze?",
    "answers": [
      {
        "label": "Drei Aktien.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Körper 1 · oben 1 · unten 1; Summe 3 Euro."
      },
      {
        "label": "Ein Drittel der Spanne.",
        "explanation": "Körperanteil 1/3 Keine Mengeninformation in der Breite"
      },
      {
        "label": "Die ganze Spanne.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Die drei Teile ergeben zusammen die Spanne."
      }
    ],
    "correct": 1,
    "rule": "Die drei Teile ergeben zusammen die Spanne.",
    "diagram": null
  },
  {
    "title": "Die Schlusslage mit einer genannten Basis messen",
    "summary": "Die Lage in der Spanne ist keine Zukunftsquote.",
    "paragraphs": [
      "Der Schluss 31 liegt zwei Euro über dem Tief 29. Die gesamte Spanne beträgt drei Euro. Die Schlusslage ist deshalb zwei geteilt durch drei, ungefähr 66,7 Prozent vom Tief aus.",
      "Eine Schlusslage von null wäre am Tief, eine von hundert Prozent am Hoch. Bei Spanne null müsste Nora die Verhältnisrechnung aussetzen, weil sie sonst durch null teilen würde.",
      "Die 66,7 Prozent beschreiben eine Position innerhalb der vergangenen Spanne. Sie sind keine 66,7-prozentige Wahrscheinlichkeit für einen kommenden Anstieg."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "C 31 − L 29 =2",
          "Spanne 3"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Schlusslage 2/3",
          "Keine Zukunftswahrscheinlichkeit"
        ]
      }
    ],
    "prompt": "Was bedeutet hier 66,7 Prozent?",
    "answers": [
      {
        "label": "Die sichere Gewinnwahrscheinlichkeit.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Die Lage in der Spanne ist keine Zukunftsquote."
      },
      {
        "label": "Die Aktienmenge.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: C 31 − L 29 =2; Spanne 3."
      },
      {
        "label": "Die Schlusslage innerhalb der beobachteten Spanne.",
        "explanation": "Schlusslage 2/3 Keine Zukunftswahrscheinlichkeit"
      }
    ],
    "correct": 2,
    "rule": "Die Lage in der Spanne ist keine Zukunftsquote.",
    "diagram": null
  },
  {
    "title": "Das Volumen aus Mengen statt Preisen addieren",
    "summary": "Volumen braucht eine erklärte Mengeneinheit.",
    "paragraphs": [
      "In der ersten Minute addieren wir zwei plus eins plus vier plus drei Aktien. Das ergibt zehn Aktien Volumen. Die Zahl der Meldungen bleibt vier.",
      "In der zweiten Minute sind es eins plus zwei plus zwei plus eins gleich sechs Aktien. In beiden Listen werden abgeschlossene Geschäfte einmal gezählt.",
      "Nora addiert weder die Preise zum Volumen noch zählt sie Käufer und Verkäufer doppelt. Die Mengen gelten nur für die erklärte Übungsauswahl."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Minute 1:10 Aktien",
          "Vier Geschäftsmeldungen"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Minute 2:6 Aktien",
          "Eigene vollständige Auswahl"
        ]
      }
    ],
    "prompt": "Welches Volumen hat die erste Minute?",
    "answers": [
      {
        "label": "Zehn Aktien.",
        "explanation": "Minute 2:6 Aktien Eigene vollständige Auswahl"
      },
      {
        "label": "Vier Aktien allein aus der Meldungszahl.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Volumen braucht eine erklärte Mengeneinheit."
      },
      {
        "label": "122 Euro aus der Preissumme.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Minute 1:10 Aktien; Vier Geschäftsmeldungen."
      }
    ],
    "correct": 0,
    "rule": "Volumen braucht eine erklärte Mengeneinheit.",
    "diagram": null
  },
  {
    "title": "Körperrichtung und Schlussvergleich trennen",
    "summary": "Ein Abschnitt kann intern steigen und zum Vorgänger fallen.",
    "paragraphs": [
      "Der vorgegebene Schluss vor unserem Ausschnitt ist 32 Euro. Die erste Minute beginnt bei 30 und endet bei 31. Innerhalb der Minute steigt der Preis deshalb um einen Euro.",
      "Verglichen mit dem vorherigen Schluss 32 liegt der neue Schluss 31 aber einen Euro niedriger. Das sind−3,125 Prozent zum vorherigen Schluss. Der Anstieg 30 →31 hat eine andere Anfangsbasis.",
      "Nora nennt bei jedem Wort „gestiegen“ oder „gefallen“ den Vergleich. Eine positive Körperrichtung allein beantwortet nicht den Vergleich zwischen aufeinanderfolgenden Schlüssen."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "O 30 → C 31:+1 Euro",
          "Körper zeigt Anstieg"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Voriger C 32 → C 31:−1 Euro",
          "Andere Referenz"
        ]
      }
    ],
    "prompt": "Kann die erste Kerze intern steigen und zum vorigen Schluss fallen?",
    "answers": [
      {
        "label": "Nein, die Farbe bestimmt alle Referenzen.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: O 30 → C 31:+1 Euro; Körper zeigt Anstieg."
      },
      {
        "label": "Ja, die Vergleichspreise unterscheiden sich.",
        "explanation": "Voriger C 32 → C 31:−1 Euro Andere Referenz"
      },
      {
        "label": "Nein, jede positive Kerze liegt über dem vorigen Schluss.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Ein Abschnitt kann intern steigen und zum Vorgänger fallen."
      }
    ],
    "correct": 1,
    "rule": "Ein Abschnitt kann intern steigen und zum Vorgänger fallen.",
    "diagram": null
  },
  {
    "title": "Eine Schlusslinie auf fehlende Werte prüfen",
    "summary": "Zwei Schlüsse sind keine vollständige Geschäftsliste.",
    "paragraphs": [
      "Die Schlusslinie der zwei Minuten verbindet 31 und 32 Euro. Sie zeigt damit einen Euro Anstieg zwischen den Schlüssen.",
      "Die Linie enthält weder das Tief 29 der ersten Minute noch das Hoch 33 der zweiten. Sie zeigt auch keine Geschäfte an jedem Punkt der Verbindung.",
      "Nora darf deshalb eine glatte Linie nicht als Beleg für einen Weg ohne Rückgänge verwenden. Für Kennwerte liest sie die OHLC, für den tatsächlichen Weg die Meldungsliste."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Schlüsse 31 →32",
          "Verbindung zweier Kennwerte"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Tief 29 und Hoch 33 fehlen",
          "Keine lückenlose Geschäftskurve"
        ]
      }
    ],
    "prompt": "Zeigt die Schlusslinie alle Hochs und Tiefs?",
    "answers": [
      {
        "label": "Ja, jeder Zwischenwert wurde gehandelt.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Zwei Schlüsse sind keine vollständige Geschäftsliste."
      },
      {
        "label": "Ja, sie zeigt zugleich alle Mengen.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Schlüsse 31 →32; Verbindung zweier Kennwerte."
      },
      {
        "label": "Nein, sie verbindet hier nur die zwei Schlüsse.",
        "explanation": "Tief 29 und Hoch 33 fehlen Keine lückenlose Geschäftskurve"
      }
    ],
    "correct": 2,
    "rule": "Zwei Schlüsse sind keine vollständige Geschäftsliste.",
    "diagram": null
  },
  {
    "title": "Gleiche OHLC mit zwei Wegen gegenprüfen",
    "summary": "Vier Kennwerte allein bestimmen die Reihenfolge nicht.",
    "paragraphs": [
      "Wir trennen jetzt zwei mögliche Wege ausdrücklich von der bekannten Hauptliste. Weg A lautet 30 →32 →29 →31. Weg B lautet 30 →29 →32 →31.",
      "Beide beginnen bei 30, erreichen 32 und 29 und enden bei 31. Beide erzeugen dieselben OHLC. In A kommt das Hoch zuerst, in B das Tief.",
      "Die Hauptliste belegt tatsächlich A. Würde Nora nur die Kerze besitzen, könnte sie A und B nicht unterscheiden. Die Gegenprobe zeigt, welche Information beim Zusammenfassen verloren geht."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "A:O → H → L → C",
          "B:O → L → H → C"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Gleiche OHLC",
          "Unterschiedliche Reihenfolge"
        ]
      }
    ],
    "prompt": "Was lässt sich aus diesen OHLC allein nicht entscheiden?",
    "answers": [
      {
        "label": "Ob das Hoch oder das Tief zuerst kam.",
        "explanation": "Gleiche OHLC Unterschiedliche Reihenfolge"
      },
      {
        "label": "Wo der Schluss liegt.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Vier Kennwerte allein bestimmen die Reihenfolge nicht."
      },
      {
        "label": "Wie hoch das Hoch ist.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: A:O → H → L → C; B:O → L → H → C."
      }
    ],
    "correct": 0,
    "rule": "Vier Kennwerte allein bestimmen die Reihenfolge nicht.",
    "diagram": "rc10-paths"
  },
  {
    "title": "Den größeren Abschnitt aus beiden Minuten bilden",
    "summary": "Aggregation verwendet passende Kennwerte und Mengen.",
    "paragraphs": [
      "Die gemeinsame Zwei-Minuten-Kerze beginnt mit dem ersten Preis der ersten Minute 30. Das höchste Hoch ist 33 und das tiefste Tief 29. Ihr Schluss ist der letzte Preis der zweiten Minute 32.",
      "Die zusammengefassten Kennwerte lauten O 30/H 33/L 29/C 32. Die Mengen werden addiert: zehn plus sechs gleich sechzehn Aktien.",
      "Der Schluss ist nicht der Durchschnitt 31,5 der beiden Minutenschlüsse. Nora prüft gleiche Quelle, Stückbasis und vollständige anschließende Fenster, bevor sie zusammenfasst."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "O 30/H 33/L 29/C 32",
          "Größere gemeinsame Spanne 4"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Volumen 16 Aktien",
          "Letzten Schluss verwenden"
        ]
      }
    ],
    "prompt": "Welcher Schluss gehört zur Zwei-Minuten-Kerze?",
    "answers": [
      {
        "label": "33 Euro als höchstes Hoch.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: O 30/H 33/L 29/C 32; Größere gemeinsame Spanne 4."
      },
      {
        "label": "32 Euro.",
        "explanation": "Volumen 16 Aktien Letzten Schluss verwenden"
      },
      {
        "label": "31,5 Euro als Durchschnitt.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Aggregation verwendet passende Kennwerte und Mengen."
      }
    ],
    "correct": 1,
    "rule": "Aggregation verwendet passende Kennwerte und Mengen.",
    "diagram": "rc10-summary"
  },
  {
    "title": "Die gröbere Kerze nicht wieder auseinanderrechnen",
    "summary": "Beim Verdichten geht Information verloren.",
    "paragraphs": [
      "Die Zwei-Minuten-Kerze kennt O 30, H 33, L 29 und C 32. Sie sagt allein nicht, dass der erste Minutenschluss 31 war. Auch die Aufteilung des Volumens in zehn und sechs fehlt.",
      "Viele verschiedene Einzelverläufe können dieselben größeren Kennwerte ergeben. Nora kann die kleineren Minuten deshalb nicht eindeutig aus der groben Kerze zurückgewinnen.",
      "Wenn der Bericht eine feinere Reihenfolge behauptet, verlangt sie zusätzliche Daten. Die Zusammenfassung ist eine eigene Sicht auf bekannte Daten, kein Ersatz für jede Detailfrage."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Große Kerze:vier Kennwerte",
          "Gesamtvolumen 16"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Einzelne Minuten fehlen",
          "Zusätzliche Daten nötig"
        ]
      }
    ],
    "prompt": "Kann die große Kerze allein die zwei Minutenschlüsse eindeutig liefern?",
    "answers": [
      {
        "label": "Ja, immer durch Halbieren.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Beim Verdichten geht Information verloren."
      },
      {
        "label": "Ja, die Kerzenbreite verrät sie.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Große Kerze:vier Kennwerte; Gesamtvolumen 16."
      },
      {
        "label": "Nein, diese Information wurde verdichtet.",
        "explanation": "Einzelne Minuten fehlen Zusätzliche Daten nötig"
      }
    ],
    "correct": 2,
    "rule": "Beim Verdichten geht Information verloren.",
    "diagram": null
  },
  {
    "title": "Eine laufende Minute ohne späteres Wissen beschreiben",
    "summary": "Der Aufnahmezeitpunkt begrenzt die bekannten Daten.",
    "paragraphs": [
      "Für eine getrennte Zwischenansicht schauen wir auf 09:00:30. Bis dahin kennen wir nur die Geschäfte zu 30 und 32. Der Zwischenstand ist O 30/H 32/L 30/letzter Preis 32.",
      "Der Abschnitt ist noch offen. Das spätere Tief 29 und der spätere Schluss 31 stehen in dieser Ansicht noch nicht fest.",
      "Nora nennt den aktuellen letzten Preis nicht endgültigen Schluss. Ein Bericht über damaliges Wissen darf die späteren Meldungen nicht so behandeln, als seien sie schon bekannt gewesen."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Aufnahme 09:00:30",
          "Nur erste zwei Meldungen bekannt"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "H 32/L 30/letzter 32",
          "Noch kein endgültiger C 31"
        ]
      }
    ],
    "prompt": "Ist 31 um 09:00:30 schon der bekannte endgültige Schluss?",
    "answers": [
      {
        "label": "Nein, die Minute läuft noch.",
        "explanation": "H 32/L 30/letzter 32 Noch kein endgültiger C 31"
      },
      {
        "label": "Ja, weil wir die spätere Liste heute kennen.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Der Aufnahmezeitpunkt begrenzt die bekannten Daten."
      },
      {
        "label": "Ja, jeder laufende Preis ist endgültig.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Aufnahme 09:00:30; Nur erste zwei Meldungen bekannt."
      }
    ],
    "correct": 0,
    "rule": "Der Aufnahmezeitpunkt begrenzt die bekannten Daten.",
    "diagram": null
  },
  {
    "title": "Eine Aussage mit einer Gegenprobe testen",
    "summary": "Ein mögliches Gegenbeispiel kann eine Behauptung widerlegen.",
    "paragraphs": [
      "Der Entwurf behauptet: „Ein positiver Körper beweist, dass der Schluss über dem vorigen Schluss liegt.“ Nora sucht eine Gegenprobe. Das ist ein gezielter Test einer Aussage.",
      "Unser Hauptfall liefert sie sofort: O 30 und C 31 ergeben einen positiven Körper, der vorgegebene vorige Schluss 32 liegt aber höher.",
      "Ein einziges passendes Gegenbeispiel reicht, um die behauptete allgemeine Regel zu widerlegen. Daraus folgt nicht, dass der Schlussvergleich immer negativ sein muss. Nora ersetzt die falsche Regel durch einen ausdrücklich benannten Vergleich."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Behauptung:Körper genügt",
          "Hauptfall hat O 30/C 31"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Voriger C 32 widerspricht",
          "Referenz ausdrücklich nennen"
        ]
      }
    ],
    "prompt": "Welche Zahl widerlegt hier die behauptete Schlussregel?",
    "answers": [
      {
        "label": "Die Breite des Körpers.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Behauptung:Körper genügt; Hauptfall hat O 30/C 31."
      },
      {
        "label": "Der vorige Schluss 32.",
        "explanation": "Voriger C 32 widerspricht Referenz ausdrücklich nennen"
      },
      {
        "label": "Die Menge von zehn Aktien.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Ein mögliches Gegenbeispiel kann eine Behauptung widerlegen."
      }
    ],
    "correct": 1,
    "rule": "Ein mögliches Gegenbeispiel kann eine Behauptung widerlegen.",
    "diagram": null
  },
  {
    "title": "Eine berechnete Kerze als solche kennzeichnen",
    "summary": "Heikin-Ashi-Werte sind umgerechnete Größen.",
    "paragraphs": [
      "Ein eigener Zusatzfall hat Originalwerte O 34/H 35/L 30/C 31. Der ursprüngliche Abschnitt schließt drei Euro unter seiner Eröffnung. Dieser Fall gehört nicht zur Luma-Geschäftsliste.",
      "Für die Heikin-Ashi-Rechnung geben wir die vorherige HA-Eröffnung 28 und den vorherigen HA-Schluss 30 ausdrücklich vor. Die neue HA-Eröffnung ist ihr Mittelwert 29. Der neue HA-Schluss ist(34 +35 +30 +31)/4 =32,5.",
      "Damit steigt der berechnete HA-Körper von 29 auf 32,5, obwohl die Originalkerze von 34 auf 31 fällt. Nora kennzeichnet HA und die Startwerte, bevor sie über die Körperrichtung berichtet."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Original:O 34/C 31",
          "Körper abwärts"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "HA:O 29/C 32,5",
          "Berechneter Körper aufwärts"
        ]
      }
    ],
    "prompt": "Beweist der aufwärts gerichtete HA-Körper hier einen Originalanstieg O → C?",
    "answers": [
      {
        "label": "Ja, jeder HA-Preis ist Originalpreis.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Heikin-Ashi-Werte sind umgerechnete Größen."
      },
      {
        "label": "Ja, die ursprünglichen Geschäfte wurden geändert.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Original:O 34/C 31; Körper abwärts."
      },
      {
        "label": "Nein, die Originalkerze fällt von 34 auf 31.",
        "explanation": "HA:O 29/C 32,5 Berechneter Körper aufwärts"
      }
    ],
    "correct": 2,
    "rule": "Heikin-Ashi-Werte sind umgerechnete Größen.",
    "diagram": "rc10-calculated"
  },
  {
    "title": "Eine synthetische Grenze nicht als Geschäft bezeichnen",
    "summary": "Die Berechnung kann außerhalb der Originalspanne liegen.",
    "paragraphs": [
      "Im selben Zusatzfall ist das HA-Hoch das größte von 35,29 und 32,5: also 35. Das HA-Tief ist das kleinste von 30,29 und 32,5: also 29.",
      "Die Originalpreise reichen dagegen nur von 30 bis 35. Der berechnete HA-Wert 29 liegt unter dem Originaltief. Er ist kein durch diese OHLC belegter Geschäftspreis.",
      "Nora nennt eine solche berechnete Grenze synthetisch. Das heißt hier: durch eine Rechenregel erzeugt. Ein Bericht darf daraus kein eigenes Kaufgeschäft bei 29 ableiten."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Originalspanne 30 bis 35",
          "Kein Originaltief 29"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "HA-Spanne 29 bis 35",
          "29 entsteht durch die Regel"
        ]
      }
    ],
    "prompt": "Was ist der HA-Wert 29 im Zusatzfall?",
    "answers": [
      {
        "label": "Eine berechnete Grenze, kein belegtes Originalgeschäft.",
        "explanation": "HA-Spanne 29 bis 35 29 entsteht durch die Regel"
      },
      {
        "label": "Ein sicher ausgeführter eigener Kauf.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Die Berechnung kann außerhalb der Originalspanne liegen."
      },
      {
        "label": "Das tatsächliche Originaltief.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Originalspanne 30 bis 35; Kein Originaltief 29."
      }
    ],
    "correct": 0,
    "rule": "Die Berechnung kann außerhalb der Originalspanne liegen.",
    "diagram": "rc10-calculated"
  },
  {
    "title": "Einen Skalenwechsel ohne neue Marktdaten erklären",
    "summary": "Das Bild kann anders aussehen bei gleichen Preisen.",
    "paragraphs": [
      "Nora lässt die Originalwerte unverändert und wechselt nur die Preisachse von linear zu logarithmisch. Linear stehen gleiche Euro-Abstände gleich weit auseinander, logarithmisch gleiche positive Preisverhältnisse.",
      "Die OHLC, Meldungszeiten und Stückmengen ändern sich dadurch nicht. Auch ein höheres oder schmaleres Fenster kann die sichtbaren Winkel verändern.",
      "Wenn ein Bericht eine neue Bewegung allein aus einem steileren Bild ableitet, verlangt Nora die Preis- und Zeitrechnung. Ein anderer Achsenbereich kann denselben Preisabstand größer zeigen."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Gleiche Originalwerte",
          "Andere Preisabbildung"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Skala und Grenzen nennen",
          "Winkel allein genügt nicht"
        ]
      }
    ],
    "prompt": "Was verändert ein reiner Wechsel der Preisachse?",
    "answers": [
      {
        "label": "Die Stückzahl im Depot.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Gleiche Originalwerte; Andere Preisabbildung."
      },
      {
        "label": "Die Bildzuordnung, nicht die Originalgeschäfte.",
        "explanation": "Skala und Grenzen nennen Winkel allein genügt nicht"
      },
      {
        "label": "Die damaligen Ausführungen.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Das Bild kann anders aussehen bei gleichen Preisen."
      }
    ],
    "correct": 1,
    "rule": "Das Bild kann anders aussehen bei gleichen Preisen.",
    "diagram": null
  },
  {
    "title": "Bereinigung und Kontraktwahl in den Bericht aufnehmen",
    "summary": "Eine historische Vergleichsreihe braucht ihre Methode.",
    "paragraphs": [
      "Der Luma-Hauptfall ist ausdrücklich unbereinigt und enthält keinen Produktwechsel. Nora hält auch diese einfache Regel fest. Sie lässt das Feld nicht stillschweigend offen.",
      "Bei einer anderen Aktie müsste sie eine verwendete Split- oder Dividendenbereinigung nennen. Bei einer fortlaufenden Futures-Reihe müsste sie konkrete Kontrakte, Wechselzeitpunkt und Anpassungsmethode angeben.",
      "Eine Preisreihe wird nicht durch das Wort „bereinigt“ vollständig erklärt. Nora bewahrt den Datenstand und die ursprünglichen Eingaben für die Nachprüfung auf."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Hauptfall:keine Bereinigung",
          "Keine Kontraktwechsel"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Andere Fälle:Methode nennen",
          "Datenstand erhalten"
        ]
      }
    ],
    "prompt": "Welche Angabe passt beim Luma-Hauptfall?",
    "answers": [
      {
        "label": "Unbekannte Regel als sicher bereinigt bezeichnen.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Eine historische Vergleichsreihe braucht ihre Methode."
      },
      {
        "label": "Jedes lange Bild ist ein einzelner Future.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Hauptfall:keine Bereinigung; Keine Kontraktwechsel."
      },
      {
        "label": "Keine Bereinigung und kein Kontraktwechsel.",
        "explanation": "Andere Fälle:Methode nennen Datenstand erhalten"
      }
    ],
    "correct": 2,
    "rule": "Eine historische Vergleichsreihe braucht ihre Methode.",
    "diagram": null
  },
  {
    "title": "Beobachtung, Deutung und Prognose markieren",
    "summary": "Der Bericht zeigt, wie weit seine Belege reichen.",
    "paragraphs": [
      "„Der erste Schluss ist 31“ ist eine Beobachtung aus unseren Daten. „Die Käufer wollten unbedingt höhere Preise“ wäre eine Deutung über Absichten, die diese Liste nicht belegt.",
      "„Der nächste Schluss wird sicher steigen“ wäre eine Prognose über die Zukunft. Unsere vergangenen Daten garantieren sie nicht. Eine Aussagegrenze benennt, wo die vorhandenen Belege aufhören.",
      "Nora darf Fragen offen lassen. Sie schreibt zum Beispiel „Absichten und nächster Preis sind unbekannt“. Das macht den Bericht genauer, auch wenn es weniger eindrucksvoll klingt."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Beobachtung:C 31",
          "Durch Liste nachprüfbar"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Absicht und Zukunft unbekannt",
          "Andere Belege erforderlich"
        ]
      }
    ],
    "prompt": "Welche Aussage ist durch die Liste direkt belegt?",
    "answers": [
      {
        "label": "Der erste Schluss beträgt 31 Euro.",
        "explanation": "Absicht und Zukunft unbekannt Andere Belege erforderlich"
      },
      {
        "label": "Alle Käufer verfolgen dieselbe Absicht.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Der Bericht zeigt, wie weit seine Belege reichen."
      },
      {
        "label": "Der nächste Preis steigt sicher.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Beobachtung:C 31; Durch Liste nachprüfbar."
      }
    ],
    "correct": 0,
    "rule": "Der Bericht zeigt, wie weit seine Belege reichen.",
    "diagram": null
  },
  {
    "title": "Eine behauptete eigene Ausführung zurückweisen",
    "summary": "Chartwerte allein sind kein persönlicher Ergebnisnachweis.",
    "paragraphs": [
      "Der Entwurf sagt: „Nora hat am Tief 29 gekauft und am Hoch 32 verkauft, also drei Euro verdient.“ Die Geschäftsliste bestätigt aber keine persönlichen Aufträge.",
      "Drei Euro ist nur die Spanne je Aktie. Für ein eigenes Ergebnis fehlen bestätigte Kauf- und Verkaufspreise, Stückzahl und alle Kosten. Bei offenen Positionen müsste zudem zwischen Wertänderung und Verkaufsergebnis unterschieden werden.",
      "Nora streicht den behaupteten eigenen Gewinn und hält die fehlenden Belege fest. Sie ergänzt keine angenommenen Ausführungen unbemerkt in einen Datenbericht."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Spanne 3 Euro je Aktie",
          "Keine persönlichen Belege"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Ausführungen, Menge, Kosten fehlen",
          "Kein eigener Gewinn bestätigt"
        ]
      }
    ],
    "prompt": "Was fehlt für den behaupteten persönlichen Gewinn?",
    "answers": [
      {
        "label": "Nur ein steilerer Zoom.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Spanne 3 Euro je Aktie; Keine persönlichen Belege."
      },
      {
        "label": "Eigene bestätigte Ausführungen, Stückzahl und Kosten.",
        "explanation": "Ausführungen, Menge, Kosten fehlen Kein eigener Gewinn bestätigt"
      },
      {
        "label": "Eine grüne Kerzenfarbe.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Chartwerte allein sind kein persönlicher Ergebnisnachweis."
      }
    ],
    "correct": 1,
    "rule": "Chartwerte allein sind kein persönlicher Ergebnisnachweis.",
    "diagram": null
  },
  {
    "title": "Den vollständigen Chartbericht abgeben",
    "summary": "Ein guter Bericht lässt sich mit denselben Daten nachprüfen.",
    "paragraphs": [
      "Noras Abschluss nennt Luma, Euro je Aktie, D 1, UTC und die eigene Geschäftsliste. Fenster sind links einschließlich und rechts ausschließlich; beide Minuten sind abgeschlossen. Es gibt keine Bereinigung und keinen Produktwechsel.",
      "Minute 1:O 30/H 32/L 29/C 31, Volumen zehn Aktien. Minute 2:O 31/H 33/L 30/C 32, Volumen sechs. Zusammen:O 30/H 33/L 29/C 32, sechzehn Aktien. Skala und Preisgrenzen werden beim Bild angegeben.",
      "Sie ergänzt: Die Zusammenfassung zeigt nicht jeden Preisweg. Synthetische Werte und spätere Daten gehören in getrennte erklärte Fälle. Absichten, nächste Richtung und eigene Ausführungen sind hier nicht belegt. Damit sind die zehn Kapitel des Kurses abgeschlossen."
    ],
    "columns": [
      {
        "title": "Bekannte Angaben",
        "tone": "neutral",
        "points": [
          "Datenzettel und Kennwerte",
          "Rechenweg nachvollziehbar"
        ]
      },
      {
        "title": "Prüfung und Grenze",
        "tone": "positive",
        "points": [
          "Unbekanntes klar nennen",
          "Alle zehn Kapitel abgeschlossen"
        ]
      }
    ],
    "prompt": "Was gehört zum vollständigen Abschlussbericht?",
    "answers": [
      {
        "label": "Nur die Zusage einer sicheren Fortsetzung.",
        "explanation": "Diese Aussage lässt sich aus den genannten Daten nicht ableiten: Ein guter Bericht lässt sich mit denselben Daten nachprüfen."
      },
      {
        "label": "Ein erfundener eigener Gewinn.",
        "explanation": "Prüfe stattdessen die erklärten Angaben: Datenzettel und Kennwerte; Rechenweg nachvollziehbar."
      },
      {
        "label": "Daten, Regeln, geprüfte Kennwerte und Aussagegrenzen.",
        "explanation": "Unbekanntes klar nennen Alle zehn Kapitel abgeschlossen"
      }
    ],
    "correct": 2,
    "rule": "Ein guter Bericht lässt sich mit denselben Daten nachprüfen.",
    "diagram": null
  }
];
export const chartsChapterTenLessons: Lesson[] = drafts.map((draft,index) => {
 const key=`reading-charts.chapter-10.lesson-${String(index+1).padStart(2,'0')}`;
 return {id:key,title:draft.title,summary:draft.summary,sourceUnit:'Kapitel 10 · Einen Chartbericht selbst prüfen',sourceAnchors:[draft.title],durationMinutes:6,xp:35,status:'published',steps:[
 {id:`${key}.explain`,type:'explanation',eyebrow:'Charts verstehen · Kapitel 10',title:draft.title,paragraphs:draft.paragraphs,callout:draft.rule},
 ...(draft.diagram?[{id:`${key}.diagram`,type:'diagram' as const,title:draft.diagram==='rc10-summary'?'Zwei Minuten und ihre Zusammenfassung':draft.diagram==='rc10-paths'?'Gleiche OHLC, zwei mögliche Wege':'Originalkerze und berechnete HA-Kerze',scenario:draft.diagram as ChartScenarioId,caption:'Eigene Lerndaten. Lineare Preisachse in Euro je Aktie; getrennte Fälle ausdrücklich gekennzeichnet.',observations:[reportDescriptions[draft.diagram as keyof typeof reportDescriptions]]}]:[]),
 {id:`${key}.compare`,type:'comparison',title:'Das Beispiel auf einen Blick',columns:draft.columns.map(c=>({...c,tone:c.tone as 'neutral'|'positive'}))},
 {id:`${key}.question`,type:'question',title:'Kurz prüfen',prompt:draft.prompt,correctOptionId:`choice-${draft.correct}`,options:draft.answers.map((a,i)=>({id:`choice-${i}`,...a}))},
 {id:`${key}.recap`,type:'recap',title:'Das nimmst du mit',points:[draft.rule,draft.paragraphs[2]]},
 ]};
});
