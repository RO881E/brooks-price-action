import type { Lesson, ChartScenarioId } from '../../types';
const drafts = [
  {
    "title": "Wenn Preisentfernungen den Abschnitt bestimmen",
    "summary": "Eine Preisregel fragt etwas anderes als Uhr oder Stückzahl.",
    "paragraphs": [
      "Nora wechselt zu einem eigenen Übungsdatensatz der erfundenen Arvo-Aktie. Jede Meldung nennt Zeit, Preis und Menge. Diesmal möchte sie neue Abschnitte bilden, wenn die Preise eine erklärte Entfernung erreichen. Sie zählt dafür weder feste Minuten noch eine feste Stücksumme.",
      "Ein Range-Bar fasst Preise nach einer Regel für die Hoch-Tief-Spanne zusammen. Range heißt hier Spanne. Renko zeichnet dagegen Steine auf einem Preisraster. Ein Stein ist ein gezeichnetes Preiselement, dessen Grenzen durch die gewählte Regel entstehen.",
      "Beide Darstellungen hängen von Preisbewegungen ab. Ihre Regeln sind aber nicht automatisch gleich. Wir verwenden ausdrücklich eigene Lernregeln. Reale Programme können Grenzen, Sprünge, Umkehr und Sitzungsneustart anders behandeln. Vor einem Vergleich muss Nora diese Einstellungen kennen."
    ],
    "columns": [
      {
        "title": "Range-Modell",
        "tone": "neutral",
        "points": [
          "Schwelle für Hoch minus Tief.",
          "Ganze Geschäfte bilden eine Gruppe."
        ]
      },
      {
        "title": "Renko-Modell",
        "tone": "positive",
        "points": [
          "Preisanker und feste Steingröße.",
          "Berechnete Stufen mit eigener Umkehrregel."
        ]
      }
    ],
    "prompt": "Welche Angabe bildet in diesem Kapitel die Grundlage neuer Elemente?",
    "answers": [
      {
        "label": "Eine erklärte Preisentfernung.",
        "explanation": "Richtig: Nenne die genaue Preisregel, bevor du Range und Renko liest."
      },
      {
        "label": "Immer eine Minute.",
        "explanation": "Das wäre eine Zeitregel."
      },
      {
        "label": "Immer fünf Aktien.",
        "explanation": "Das wäre eine Mengenregel."
      }
    ],
    "correct": 0,
    "rule": "Nenne die genaue Preisregel, bevor du Range und Renko liest.",
    "diagram": null
  },
  {
    "title": "Drei Preisschritte in Euro übersetzen",
    "summary": "Ein Range-Wert braucht eine bekannte Preiseinheit.",
    "paragraphs": [
      "Für unsere Arvo-Übung ist der kleinste erlaubte Preisschritt 0,10 Euro je Aktie. Wir wählen eine Range-Schwelle von drei solchen Schritten. Drei mal 0,10 ergibt 0,30 Euro.",
      "Diese drei Preis-Ticks sind keine drei Geschäftsmeldungen. Eine einzelne Meldung könnte einen großen Preisunterschied zur vorigen haben. Viele Meldungen könnten dagegen am selben Preis erfolgen. Der Begriff Tick braucht daher weiterhin eine erklärte Bedeutung.",
      "Alle Preise unseres Datensatzes liegen auf diesem Zehn-Cent-Raster. Das Raster ist eine erfundene Produkteigenschaft für den Lernfall. Nora überträgt 0,10 nicht ungefragt auf ein echtes Produkt oder eine andere Währung."
    ],
    "columns": [
      {
        "title": "Preisraster",
        "tone": "neutral",
        "points": [
          "Ein Schritt = 0,10 Euro je Aktie.",
          "Drei Schritte = 0,30 Euro."
        ]
      },
      {
        "title": "Andere Zählgrößen",
        "tone": "positive",
        "points": [
          "Drei Meldungen sind keine drei Preisschritte.",
          "Aktienmenge ist ebenfalls getrennt."
        ]
      }
    ],
    "prompt": "Wie groß ist eine Drei-Schritt-Schwelle im Arvo-Modell?",
    "answers": [
      {
        "label": "Drei Minuten.",
        "explanation": "Das wäre eine Zeitdauer."
      },
      {
        "label": "0,30 Euro je Aktie.",
        "explanation": "Richtig: Übersetze Preis-Ticks mit der angegebenen Schrittgröße."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Das ist eine Stückzahl, keine Preisentfernung."
      }
    ],
    "correct": 1,
    "rule": "Übersetze Preis-Ticks mit der angegebenen Schrittgröße.",
    "diagram": null
  },
  {
    "title": "Die vollständige Arvo-Liste als Ausgangspunkt sichern",
    "summary": "Fünfzehn Meldungen enthalten insgesamt dreißig Aktien.",
    "paragraphs": [
      "Alle folgenden Zeiten sind Sekunden nach 09:00; Preise sind Euro je Aktie, Mengen sind Aktien. Die ersten fünf Meldungen lauten: G1 bei 5 Sekunden zu 100,00 über 2; G2 bei 20 zu 100,10 über 1; G3 bei 35 zu 99,90 über 3; G4 bei 50 zu 100,20 über 2; G5 bei 65 zu 100,30 über 1.",
      "Es folgen G6 bei 80 Sekunden zu 100,20 über 2; G7 bei 100 zu 100,00 über 3; G8 bei 120 zu 100,10 über 1; G9 bei 125 zu 100,50 über 4; G10 bei 150 zu 100,40 über 2.",
      "Die letzten Meldungen sind G11 bei 175 Sekunden zu 100,30 über 1; G12 bei 205 zu 100,40 über 2; G13 bei 245 zu 100,00 über 3; G14 bei 260 zu 99,60 über 1; G15 bei 290 zu 99,70 über 2. Zusammen sind es 15 Meldungen und 30 Aktien. Wir betrachten die Aufnahme nach G15, ohne weitere Meldungen und ohne Sitzungsneustart."
    ],
    "columns": [
      {
        "title": "Bekannter Verlauf",
        "tone": "neutral",
        "points": [
          "Start 100,00; Hoch 100,50; Tief 99,60.",
          "Letzter Preis 99,70 nach G15."
        ]
      },
      {
        "title": "Zählgrößen",
        "tone": "positive",
        "points": [
          "15 einzelne Meldungen.",
          "30 Aktien, jede gehandelte Einheit einmal."
        ]
      }
    ],
    "prompt": "Welche Gesamtmenge enthält die vollständige Arvo-Liste?",
    "answers": [
      {
        "label": "15 Aktien.",
        "explanation": "15 ist die Meldungszahl, nicht die gesamte Menge."
      },
      {
        "label": "60 Aktien.",
        "explanation": "Kauf- und Verkaufsseite verdoppeln die gehandelte Menge nicht."
      },
      {
        "label": "30 Aktien.",
        "explanation": "Richtig: Bewahre die ursprüngliche Liste getrennt von ihrer Darstellung."
      }
    ],
    "correct": 2,
    "rule": "Bewahre die ursprüngliche Liste getrennt von ihrer Darstellung.",
    "diagram": null
  },
  {
    "title": "Die eigene Range-Regel Schritt für Schritt anwenden",
    "summary": "Das auslösende Geschäft bleibt ganz in der laufenden Gruppe.",
    "paragraphs": [
      "Unser Range-Modell beginnt mit G1. Es sammelt ganze Geschäfte und prüft nach jeder Meldung: Ist Hoch minus Tief mindestens 0,30 Euro? Wenn ja, schließt dieser Bar mit der auslösenden Meldung. Die nächste Meldung beginnt eine frische Gruppe.",
      "Nach G1 ist die Spanne null. Nach G2 reicht sie von 100,00 bis 100,10, also 0,10. Nach G3 reicht sie von 99,90 bis 100,10: 0,20. Erst G4 bei 100,20 erweitert die Spanne auf 0,30.",
      "Der erste Bar enthält deshalb G1 bis G4. Sein O ist 100,00, H100,20, L99,90 und C100,20. Seine Menge ist zwei plus eins plus drei plus zwei gleich acht Aktien. Das Modell enthält keine erfundenen Zwischenpreise."
    ],
    "columns": [
      {
        "title": "Vor G4",
        "tone": "neutral",
        "points": [
          "Nach G3: H100,10, L99,90.",
          "Spanne 0,20, noch offen."
        ]
      },
      {
        "title": "Mit G4",
        "tone": "positive",
        "points": [
          "Spanne 100,20 − 99,90 = 0,30.",
          "Gruppe G1–G4 abgeschlossen."
        ]
      }
    ],
    "prompt": "Welche Meldung schließt den ersten Range-Bar?",
    "answers": [
      {
        "label": "G4 bei 100,20.",
        "explanation": "Richtig: Prüfe nach jeder Meldung Hoch minus Tief gegen die erklärte Schwelle."
      },
      {
        "label": "G3, weil drei Meldungen vorhanden sind.",
        "explanation": "Die Regel fragt nach der Spanne, nicht der Meldungszahl."
      },
      {
        "label": "G2, weil der Preis steigt.",
        "explanation": "Eine positive Änderung allein erreicht die Schwelle noch nicht."
      }
    ],
    "correct": 0,
    "rule": "Prüfe nach jeder Meldung Hoch minus Tief gegen die erklärte Schwelle.",
    "diagram": "rc4-range"
  },
  {
    "title": "Den zweiten Range-Bar mit neuen Grenzen beginnen",
    "summary": "Die nächste Gruppe übernimmt keinen alten Schluss als Geschäft.",
    "paragraphs": [
      "G5 bei 100,30 beginnt den zweiten Bar. G6 bei 100,20 erweitert seine Spanne nach unten auf 0,10. G7 bei 100,00 macht die Spanne 0,30. Mit G7 ist der zweite Bar vollständig.",
      "Die vier Kennwerte sind O100,30, H100,30, L100,00 und C100,00. Die Mengen eins, zwei und drei ergeben sechs Aktien. Anders als der erste Bar braucht dieser nur drei Meldungen bis zum Abschluss.",
      "Der vorige Schluss 100,20 ist keine zusätzliche Meldung in dieser Gruppe. Unsere Regel ordnet jede Meldung genau einmal zu. Andere Verfahren könnten einen berechneten Anschlusswert verwenden; den dürfte Nora dann nicht als neues belegtes Geschäft zählen."
    ],
    "columns": [
      {
        "title": "Neuer Anfang",
        "tone": "neutral",
        "points": [
          "G5 bei 100,30.",
          "O ist der erste Preis dieser Gruppe."
        ]
      },
      {
        "title": "Abschluss",
        "tone": "positive",
        "points": [
          "G7 bei 100,00; Spanne 0,30.",
          "Drei Meldungen, sechs Aktien."
        ]
      }
    ],
    "prompt": "Welcher Preis ist die Eröffnung des zweiten Range-Bars?",
    "answers": [
      {
        "label": "100,00 Euro aus G7.",
        "explanation": "Das ist ihr Schluss und Tief."
      },
      {
        "label": "100,30 Euro aus G5.",
        "explanation": "Richtig: Beginne die neue Range-Gruppe mit ihrer ersten tatsächlich zugehörigen Meldung."
      },
      {
        "label": "100,20 Euro aus dem vorigen Schluss.",
        "explanation": "Dieser Preis ist in unserer neuen Gruppe nicht ihre erste Meldung."
      }
    ],
    "correct": 1,
    "rule": "Beginne die neue Range-Gruppe mit ihrer ersten tatsächlich zugehörigen Meldung.",
    "diagram": "rc4-range"
  },
  {
    "title": "Eine Range-Schwelle ist in unserem Modell kein exakter Höhenzwang",
    "summary": "Ein Preissprung kann die Schwelle überschreiten.",
    "paragraphs": [
      "Der dritte Bar beginnt mit G8 bei 100,10. G9 liegt schon bei 100,50. Die Spanne ist jetzt 0,40 Euro. Sie überschreitet unsere Schwelle von 0,30, also schließt der Bar nach G9.",
      "Er enthält O100,10, H100,50, L100,10 und C100,50. Seine Mengen eins und vier ergeben fünf Aktien. Unser Ganzgeschäftsmodell teilt den Preissprung nicht in mehrere exakt hohe Bars. Es erzeugt auch keinen Handel bei 100,40 zwischen diesen Meldungen.",
      "Ein anderes Verfahren kann mit berechneten Grenzen oder virtuellen Bars arbeiten. Virtuell heißt dann gezeichnet nach einer Regel, nicht als einzelnes Geschäft belegt. Nora muss deshalb prüfen, ob ein angegebener Range-Wert eine Schwelle oder eine genaue Zeichengröße meint."
    ],
    "columns": [
      {
        "title": "G8 zu G9",
        "tone": "neutral",
        "points": [
          "100,10 → 100,50.",
          "Spanne 0,40 Euro."
        ]
      },
      {
        "title": "Unsere Behandlung",
        "tone": "positive",
        "points": [
          "Ein abgeschlossener Bar über der Schwelle.",
          "Keine erfundenen Zwischenmeldungen."
        ]
      }
    ],
    "prompt": "Wie groß ist die Spanne unseres dritten Range-Bars?",
    "answers": [
      {
        "label": "Zwingend 0,30 Euro.",
        "explanation": "Die eigene Ganzgeschäftsregel erlaubt eine Überschreitung."
      },
      {
        "label": "0,10 Euro.",
        "explanation": "Das wäre nur der Unterschied zwischen Spanne und Schwelle."
      },
      {
        "label": "0,40 Euro.",
        "explanation": "Richtig: Unterscheide eine Auslöseschwelle von einer exakt vorgeschriebenen Zeichengröße."
      }
    ],
    "correct": 2,
    "rule": "Unterscheide eine Auslöseschwelle von einer exakt vorgeschriebenen Zeichengröße.",
    "diagram": "rc4-range"
  },
  {
    "title": "Den vierten Bar und den offenen Rest prüfen",
    "summary": "Ein späterer Rückgang kann eine lange laufende Gruppe beenden.",
    "paragraphs": [
      "Der vierte Range-Bar beginnt mit G10 bei 100,40. G11, G12 und G13 liefern 100,30, 100,40 und 100,00. Erst G13 macht die Spanne 0,40 und schließt die Gruppe. Die Menge beträgt zwei plus eins plus zwei plus drei gleich acht Aktien.",
      "G14 bei 99,60 beginnt den fünften Bar. G15 bei 99,70 erweitert seine Spanne nur auf 0,10. Er ist bei unserer Aufnahme noch offen. Seine Eröffnung ist 99,60, Hoch99,70, Tief99,60 und aktueller letzter Preis99,70.",
      "Die Mengen der fünf Gruppen sind acht, sechs, fünf, acht und drei. Ihre Summe ist 30 Aktien. Auch die drei Aktien des offenen Rests zählen zur tatsächlich gehandelten Gesamtmenge. Ein endgültiger Schluss des fünften Bars ist noch nicht bekannt."
    ],
    "columns": [
      {
        "title": "Vierter Bar",
        "tone": "neutral",
        "points": [
          "G10–G13; Spanne 0,40.",
          "Acht Aktien, abgeschlossen."
        ]
      },
      {
        "title": "Fünfter Bar",
        "tone": "positive",
        "points": [
          "G14–G15; Spanne 0,10.",
          "Drei Aktien, noch offen."
        ]
      }
    ],
    "prompt": "Welcher Zustand gilt für den fünften Range-Bar?",
    "answers": [
      {
        "label": "Spanne 0,10; drei Aktien; noch offen.",
        "explanation": "Richtig: Prüfe abgeschlossene Gruppen und offene Reste gemeinsam."
      },
      {
        "label": "Spanne 0,30; sicher fertig.",
        "explanation": "Die vorhandenen Preise liegen nur 0,10 auseinander."
      },
      {
        "label": "Kein Volumen, weil er offen ist.",
        "explanation": "Offen bedeutet nicht ungehandelt."
      }
    ],
    "correct": 0,
    "rule": "Prüfe abgeschlossene Gruppen und offene Reste gemeinsam.",
    "diagram": "rc4-range"
  },
  {
    "title": "Spanne und Körper trotz Preisregel getrennt messen",
    "summary": "Range meint Hoch minus Tief, nicht Schluss minus Eröffnung.",
    "paragraphs": [
      "Der erste Range-Bar eröffnet bei 100,00 und schließt bei 100,20. Seine Körperhöhe wäre als normale Kerze 0,20. Die gesamte Spanne beträgt aber 100,20 minus 99,90 gleich 0,30.",
      "Die Spanne ist größer, weil G3 unterhalb der Eröffnung lag. Für die Range-Abschlussregel zählt dieser niedrigere Preis mit. Wer nur die Entfernung vom ersten zum letzten Preis prüft, würde die falsche Größe berechnen.",
      "Der fünfte laufende Bar hat eine Spanne von 0,10 und einen aktuellen O-Letzter-Abstand von 0,10. Dass zwei Größen in einem Fall gleich sind, macht sie nicht grundsätzlich identisch. Nora behält beide Begriffe und die jeweils verwendeten Bezugspunkte bei."
    ],
    "columns": [
      {
        "title": "Erster Bar als Kerze",
        "tone": "neutral",
        "points": [
          "Körper |100,20 − 100,00| = 0,20.",
          "Nur Eröffnung gegen Schluss."
        ]
      },
      {
        "title": "Erste Range-Spanne",
        "tone": "positive",
        "points": [
          "100,20 − 99,90 = 0,30.",
          "Hoch gegen Tief."
        ]
      }
    ],
    "prompt": "Welche Entfernung löst unsere Range-Regel aus?",
    "answers": [
      {
        "label": "Immer Schluss minus vorheriger Schluss.",
        "explanation": "Das ist eine andere Preisänderung."
      },
      {
        "label": "Hoch minus Tief.",
        "explanation": "Richtig: Benutze für Range die erklärte Hoch-Tief-Spanne."
      },
      {
        "label": "Immer Schluss minus Eröffnung.",
        "explanation": "Das wäre die Körperänderung und lässt Zwischenextreme weg."
      }
    ],
    "correct": 1,
    "rule": "Benutze für Range die erklärte Hoch-Tief-Spanne.",
    "diagram": "rc4-range"
  },
  {
    "title": "Eine größere Schwelle ergibt andere Gruppengrenzen",
    "summary": "Einstellungen ändern die Verdichtung, nicht die Originalgeschäfte.",
    "paragraphs": [
      "In einer getrennten Variante wählt Nora 0,50 Euro statt 0,30. Sie beginnt wieder bei G1 und hält alle übrigen Regeln gleich. Bis G8 reichen die Preise von 99,90 bis 100,30: Spanne 0,40.",
      "G9 bei 100,50 erweitert das Hoch. Die Spanne beträgt nun 100,50 minus 99,90 gleich 0,60. Erst G9 schließt den ersten Bar dieser Variante. Er enthält daher mehr Meldungen als der erste Bar der kleineren Schwelle.",
      "Das ist ein eigener Vergleich, nicht das gezeigte Hauptbild. Eine größere Schwelle kann mehr Zwischenbewegungen zusammenfassen. Daraus folgt weder ein besseres Signal noch eine höhere Trefferquote. Nora wählt die Darstellung nach ihrer Frage und beschreibt die Einstellungen."
    ],
    "columns": [
      {
        "title": "Schwelle 0,30",
        "tone": "neutral",
        "points": [
          "Erster Bar G1–G4.",
          "Abschluss mit Spanne 0,30."
        ]
      },
      {
        "title": "Getrennte Schwelle 0,50",
        "tone": "positive",
        "points": [
          "Erster Bar G1–G9.",
          "Abschluss mit Spanne 0,60."
        ]
      }
    ],
    "prompt": "Wann schließt die erste Gruppe bei Schwelle 0,50 im getrennten Fall?",
    "answers": [
      {
        "label": "Schon mit G4.",
        "explanation": "Dort beträgt die Spanne erst 0,30."
      },
      {
        "label": "Immer nach fünf Meldungen.",
        "explanation": "Die Schwelle ist eine Preisentfernung, keine Anzahl."
      },
      {
        "label": "Mit G9 bei 100,50.",
        "explanation": "Richtig: Ändere beim Vergleich nur eine Regel und benenne die daraus entstehenden neuen Grenzen."
      }
    ],
    "correct": 2,
    "rule": "Ändere beim Vergleich nur eine Regel und benenne die daraus entstehenden neuen Grenzen.",
    "diagram": null
  },
  {
    "title": "Aus der Bar-Zahl keine feste Dauer oder Menge ableiten",
    "summary": "Eine Preisregel kann bei Stillstand lange offen bleiben.",
    "paragraphs": [
      "Der erste Range-Bar enthält Meldungen von 09:00:05 bis 09:00:50. Der zweite reicht von 09:01:05 bis 09:01:40. Diese belegten Geschäftszeiten haben unterschiedliche Abstände. Die Regeln schreiben keine feste Dauer vor.",
      "Die abgeschlossenen Gruppen enthalten außerdem vier, drei, zwei und vier Meldungen. Ihre Aktienmengen sind acht, sechs, fünf und acht. Die Range-Schwelle legt daher keine feste Tick-Zahl und keine feste Stückzahl fest.",
      "In einem eigenen Fall könnten viele Meldungen zum selben Preis eintreffen. Die Spanne bliebe null; ein Bar nach unserer Range-Regel bliebe offen. Der Chart würde damit eine bestimmte Preisveränderung filtern, aber die stattgefundenen Geschäfte nicht ungeschehen machen."
    ],
    "columns": [
      {
        "title": "Festgelegt",
        "tone": "neutral",
        "points": [
          "Preis-Abschlussbedingung.",
          "Unsere Schwelle 0,30."
        ]
      },
      {
        "title": "Nicht festgelegt",
        "tone": "positive",
        "points": [
          "Gleiche Geschäftsanzahl oder Stückmenge.",
          "Gleiche Zeitdauer."
        ]
      }
    ],
    "prompt": "Kann ein Range-Bar bei vielen Meldungen am selben Preis offen bleiben?",
    "answers": [
      {
        "label": "Ja, seine Preisspanne kann weiter null sein.",
        "explanation": "Richtig: Lies Preisaktivität, Meldungszahl, Menge und Zeit getrennt."
      },
      {
        "label": "Nein, jede Meldung beendet ihn.",
        "explanation": "Das wäre keine Range-Schwelle."
      },
      {
        "label": "Nein, viel Volumen ist automatisch große Spanne.",
        "explanation": "Menge und Preisentfernung sind verschiedene Größen."
      }
    ],
    "correct": 0,
    "rule": "Lies Preisaktivität, Meldungszahl, Menge und Zeit getrennt.",
    "diagram": null
  },
  {
    "title": "Den Preisanker und die Steingröße für Renko festlegen",
    "summary": "Ein Raster braucht einen Ausgangspunkt.",
    "paragraphs": [
      "Für das eigene Renko-Modell wählt Nora den Preisanker 100,00 Euro. Ein Preisanker ist der Ausgangswert für die berechneten Stufen. Die feste Steingröße beträgt 0,20 Euro, also zwei Schritte unseres Zehn-Cent-Rasters.",
      "Ohne bisherige Richtung entsteht ein erster Aufwärtsstein bei einem beobachteten Preis von mindestens 100,20. Ein erster Abwärtsstein würde bei höchstens 99,80 entstehen. Die gezeichneten Grenzen wären jeweils eine Steingröße vom Anker entfernt.",
      "Wir verarbeiten alle Meldungen der Liste in ihrer angegebenen Reihenfolge. Gleichheit mit einer Schwelle reicht in diesem Modell aus. Wir zeichnen nur bestätigte Modellsteine, keine zusätzlichen Schatten und keine laufenden Projektionen. Die Umkehrregel wird anschließend ausdrücklich ergänzt."
    ],
    "columns": [
      {
        "title": "Grundwerte",
        "tone": "neutral",
        "points": [
          "Anker 100,00.",
          "Feste Steingröße 0,20."
        ]
      },
      {
        "title": "Erster Stein",
        "tone": "positive",
        "points": [
          "Aufwärts ab 100,20.",
          "Abwärts ab 99,80."
        ]
      }
    ],
    "prompt": "Welche erste Aufwärtsschwelle gehört zum Anker 100,00 und Stein 0,20?",
    "answers": [
      {
        "label": "100,40 Euro.",
        "explanation": "Zwei Größen sind hier noch nicht für den ersten Stein nötig."
      },
      {
        "label": "100,20 Euro.",
        "explanation": "Richtig: Nenne bei Renko Anker, Größe, Eingangsfolge und Gleichheitsregel."
      },
      {
        "label": "100,10 Euro.",
        "explanation": "Das ist erst die halbe Steingröße."
      }
    ],
    "correct": 1,
    "rule": "Nenne bei Renko Anker, Größe, Eingangsfolge und Gleichheitsregel.",
    "diagram": null
  },
  {
    "title": "Den ersten Renko-Stein auslösen",
    "summary": "Kleine Zwischenänderungen erzeugen noch keinen Stein.",
    "paragraphs": [
      "G1 liegt auf dem Anker 100,00. G2 bei 100,10 bleibt darunter, G3 bei 99,90 liegt noch über der ersten Abwärtsschwelle 99,80. Deshalb entsteht bis G3 kein Stein in unserem Modell.",
      "G4 bei 100,20 erreicht die erste Aufwärtsschwelle genau. Ein Aufwärtsstein von 100,00 bis 100,20 wird bestätigt. Seine Grenzen sind nach der Regel berechnet. In diesem Fall kommen beide auch als beobachtete Preise in der Liste vor.",
      "Der Stein zeigt nicht die kleine Abwärtsbewegung zu 99,90 als eigenen Körper. Diese Meldung bleibt in den Originaldaten vorhanden. Nora darf aus einem glatteren Bild nicht folgern, dass alle Zwischenbewegungen verschwunden oder für einen offenen Trade harmlos gewesen wären."
    ],
    "columns": [
      {
        "title": "Bis G3",
        "tone": "neutral",
        "points": [
          "100,10 und 99,90 bleiben innerhalb der Startschwellen.",
          "Noch kein fertiger Stein."
        ]
      },
      {
        "title": "Mit G4",
        "tone": "positive",
        "points": [
          "100,20 erreicht die Aufwärtsschwelle.",
          "Stein 100,00 → 100,20."
        ]
      }
    ],
    "prompt": "Welche Meldung erzeugt den ersten Renko-Stein?",
    "answers": [
      {
        "label": "G2 bei 100,10.",
        "explanation": "Die erste Aufwärtsschwelle ist noch nicht erreicht."
      },
      {
        "label": "G3 bei 99,90.",
        "explanation": "Die erste Abwärtsschwelle liegt tiefer bei 99,80."
      },
      {
        "label": "G4 bei 100,20.",
        "explanation": "Richtig: Unterscheide Originalbewegungen von den nach einer Schwelle gezeichneten Steinen."
      }
    ],
    "correct": 2,
    "rule": "Unterscheide Originalbewegungen von den nach einer Schwelle gezeichneten Steinen.",
    "diagram": "rc4-renko"
  },
  {
    "title": "Den nächsten Stein und den Preisrest unterscheiden",
    "summary": "Der auslösende Handel muss nicht auf der berechneten Grenze liegen.",
    "paragraphs": [
      "Nach dem ersten Aufwärtsstein liegt die nächste Fortsetzungsschwelle bei 100,40. G5 bis G8 lösen weder diese Fortsetzung noch unsere spätere Zwei-Stein-Umkehr aus. G9 springt schließlich auf 100,50.",
      "Damit wird der zweite Aufwärtsstein von 100,20 bis 100,40 bestätigt. Die Meldung liegt zehn Cent über seinem gezeichneten Ende. Noch ein weiterer Stein würde 100,60 erfordern. Diese Schwelle ist nicht erreicht.",
      "Der aktuelle gehandelte Preis und der letzte Steinschluss sind also verschieden: 100,50 gegenüber 100,40. Der Rest von 0,10 ist eine Preisentfernung, keine zusätzliche Stückmenge. Eine berechnete Grenze ist keine Zusage, dort tatsächlich handeln zu können."
    ],
    "columns": [
      {
        "title": "Auslösende Meldung",
        "tone": "neutral",
        "points": [
          "G9 handelt bei 100,50.",
          "Ein neuer vollständiger Aufwärtsstein."
        ]
      },
      {
        "title": "Berechnete Darstellung",
        "tone": "positive",
        "points": [
          "Zweiter Stein endet bei 100,40.",
          "Noch 0,10 unter der nächsten Schwelle 100,60."
        ]
      }
    ],
    "prompt": "Welcher Wert ist der gezeichnete Schluss des zweiten Renko-Steins?",
    "answers": [
      {
        "label": "100,40 Euro.",
        "explanation": "Richtig: Trenne auslösenden Handelspreis und berechneten Steinschluss."
      },
      {
        "label": "100,50 Euro.",
        "explanation": "Das ist die auslösende Meldung, nicht das berechnete Steinende."
      },
      {
        "label": "100,60 Euro.",
        "explanation": "Diese weitere Schwelle wurde noch nicht erreicht."
      }
    ],
    "correct": 0,
    "rule": "Trenne auslösenden Handelspreis und berechneten Steinschluss.",
    "diagram": "rc4-renko"
  },
  {
    "title": "Die Zwei-Stein-Umkehr vom richtigen Rand aus prüfen",
    "summary": "Ein kleiner Rückgang erzeugt noch keinen Gegenstein.",
    "paragraphs": [
      "Unser letzter Aufwärtsstein reicht von 100,20 bis 100,40. Für einen neuen Aufwärtsstein braucht das Modell 100,60. Für einen ersten Abwärtsstein fordert es eine Bewegung von zwei Steingrößen unter den letzten Steinschluss.",
      "Die Rechnung lautet 100,40 minus zweimal 0,20 gleich 100,00. Bei 100,00 würde ein Gegenstein von 100,20 bis 100,00 entstehen. Ein Rückgang auf 100,30 nach G11 reicht noch nicht. Auch 100,20 allein würde die Umkehrschwelle nicht erreichen.",
      "Diese Regel verhindert in unserem Modell einen Gegenstein direkt auf derselben Preisfläche des vorigen Steins. Sie ist eine Zeichenregel und keine Aussage darüber, ob der echte Markt bereits gefallen ist. Der Preis kann sinken, obwohl noch kein Abwärtsstein erscheint."
    ],
    "columns": [
      {
        "title": "Fortsetzung",
        "tone": "neutral",
        "points": [
          "Letzter Steinschluss 100,40.",
          "Nächster Aufwärtsstein ab 100,60."
        ]
      },
      {
        "title": "Umkehr",
        "tone": "positive",
        "points": [
          "100,40 − 0,40 = 100,00.",
          "100,30 und 100,20 reichen nicht."
        ]
      }
    ],
    "prompt": "Wo liegt die Abwärts-Umkehrschwelle nach dem zweiten Aufwärtsstein?",
    "answers": [
      {
        "label": "100,30 Euro.",
        "explanation": "Das ist nur zehn Cent unter dem Schluss."
      },
      {
        "label": "100,00 Euro.",
        "explanation": "Richtig: Berechne Umkehrschwellen mit der ausdrücklich genannten Umkehrgröße."
      },
      {
        "label": "100,20 Euro.",
        "explanation": "Das wäre nur eine Steingröße unter dem Schluss."
      }
    ],
    "correct": 1,
    "rule": "Berechne Umkehrschwellen mit der ausdrücklich genannten Umkehrgröße.",
    "diagram": "rc4-reversal"
  },
  {
    "title": "Die erste Abwärtsumkehr bei G13 bestätigen",
    "summary": "Zwei Größen Auslösebewegung ergeben einen Gegenstein von einer Größe.",
    "paragraphs": [
      "G13 liegt bei 100,00. Damit erreicht es die zuvor berechnete Umkehrschwelle. Das Modell erzeugt einen ersten Abwärtsstein von 100,20 bis 100,00. Er ist der dritte fertige Stein des gesamten Verlaufs.",
      "Der Abstand vom vorherigen Steinschluss 100,40 zum Auslöser ist 0,40. Die Höhe des neu gezeichneten Steins bleibt trotzdem 0,20. Der übersprungene Abschnitt 100,40 bis 100,20 ist Teil der Umkehrregel; es entsteht dafür kein zusätzlicher abwärts gerichteter Überlappungsstein.",
      "Die Richtung der berechneten Steinfolge hat jetzt gewechselt. Nora bestätigt nur diesen Modellzustand. Das beweist weder eine kommende weitere Abwärtsbewegung noch einen Verkauf der eigenen Position. Für Letzteres bräuchte sie ihre Order und Ausführungsbestätigung."
    ],
    "columns": [
      {
        "title": "Auslösung",
        "tone": "neutral",
        "points": [
          "G13 bei 100,00.",
          "Abstand zum vorigen Steinschluss 0,40."
        ]
      },
      {
        "title": "Neuer Stein",
        "tone": "positive",
        "points": [
          "100,20 → 100,00.",
          "Höhe 0,20, erste Abwärtsrichtung."
        ]
      }
    ],
    "prompt": "Wie hoch ist der erste Abwärtsstein bei der Zwei-Stein-Umkehr?",
    "answers": [
      {
        "label": "0,40 Euro.",
        "explanation": "0,40 ist die nötige Auslösebewegung vom vorigen Steinschluss."
      },
      {
        "label": "0,10 Euro.",
        "explanation": "Die festgelegte Steingröße bleibt 0,20."
      },
      {
        "label": "0,20 Euro.",
        "explanation": "Richtig: Verwechsle Umkehr-Auslösebewegung und Steinhöhe nicht."
      }
    ],
    "correct": 2,
    "rule": "Verwechsle Umkehr-Auslösebewegung und Steinhöhe nicht.",
    "diagram": "rc4-renko"
  },
  {
    "title": "Zwei Steine können durch eine Meldung entstehen",
    "summary": "Mehr gezeichnete Elemente sind nicht mehr bestätigte Geschäfte.",
    "paragraphs": [
      "Nach G13 endet die Abwärtsfolge bei 100,00. G14 handelt bereits bei 99,60. In derselben Richtung sind 99,80 und dann 99,60 weitere Fortsetzungsschwellen. Eine Meldung überschreitet damit zwei Steingrößen.",
      "Das Modell zeichnet Stein vier von 100,00 bis 99,80 und Stein fünf von 99,80 bis 99,60. Beide haben G14 als Auslöser. G14 enthält aber nur eine Aktie und nur eine Meldung. Die Zahl der Steine verdoppelt das Geschäft nicht.",
      "Die Liste enthält überhaupt keine Meldung genau bei 99,80. Diese Zwischenstufe ist berechnet. G15 bei 99,70 löst danach noch keine Aufwärtsumkehr aus: Dazu müsste der Preis vom Steinschluss 99,60 um zweimal 0,20 auf 100,00 steigen."
    ],
    "columns": [
      {
        "title": "Ein Auslöser",
        "tone": "neutral",
        "points": [
          "G14: eine Aktie bei 99,60.",
          "Ein einzelnes Geschäft."
        ]
      },
      {
        "title": "Zwei neue Steine",
        "tone": "positive",
        "points": [
          "100,00 → 99,80 und 99,80 → 99,60.",
          "Beide durch G14 ausgelöst."
        ]
      }
    ],
    "prompt": "Wie viele echte Meldungen lösen im Hauptfall Stein vier und fünf aus?",
    "answers": [
      {
        "label": "Eine Meldung: G14.",
        "explanation": "Richtig: Zähle auslösende Meldungen getrennt von berechneten Preiselementen."
      },
      {
        "label": "Zwei Meldungen, eine je Stein.",
        "explanation": "Eine Meldung kann mehrere berechnete Stufen auslösen."
      },
      {
        "label": "Vier Meldungen, weil es Stein vier und fünf sind.",
        "explanation": "Die Steinnummer ist keine Geschäftsanzahl."
      }
    ],
    "correct": 0,
    "rule": "Zähle auslösende Meldungen getrennt von berechneten Preiselementen.",
    "diagram": "rc4-renko"
  },
  {
    "title": "Range und Renko nicht auf gleiche Stückzahlen festlegen",
    "summary": "Die beiden Modelle bilden unterschiedliche Dinge ab.",
    "paragraphs": [
      "Unser Range-Modell ordnet die fünfzehn Meldungen genau einer Gruppe zu. Seine Volumenfolge ist acht, sechs, fünf, acht und drei. Mit dem offenen Rest bleiben insgesamt 30 Aktien nachprüfbar.",
      "Unser Renko-Modell zeichnet fünf fertige Steine mit Auslösern G4, G9, G13, G14 und G14. Ein Stein ist kein Behälter für eine automatisch festgelegte Stückmenge. Ohne zusätzliche Zuteilungsregel verteilen wir das Handelsvolumen nicht auf die Steine.",
      "Nora kann deshalb nicht jedem Renko-Stein die Menge seiner auslösenden Meldung zuweisen und das dann als vollständiges Handelsvolumen addieren. G14 würde doppelt zählen, andere Meldungen würden fehlen. Die Originalliste bleibt die Grundlage für Menge und echte Geschäfte."
    ],
    "columns": [
      {
        "title": "Range-Gruppen",
        "tone": "neutral",
        "points": [
          "Ganze Meldungen genau einmal enthalten.",
          "Mengen einschließlich Rest = 30."
        ]
      },
      {
        "title": "Renko-Steine",
        "tone": "positive",
        "points": [
          "Berechnete Preisstufen, teilweise gleicher Auslöser.",
          "Keine automatische Volumenzuteilung."
        ]
      }
    ],
    "prompt": "Warum addieren wir die Auslösermengen nicht als vollständiges Renko-Volumen?",
    "answers": [
      {
        "label": "Weil jeder Stein immer eine Aktie enthält.",
        "explanation": "Diese Zuteilungsregel gibt es im Modell nicht."
      },
      {
        "label": "Ein Auslöser kann mehrfach vorkommen, andere Meldungen fehlen.",
        "explanation": "Richtig: Berechne Mengen aus einer erklärten Zuteilung, nicht aus der Anzahl gezeichneter Steine."
      },
      {
        "label": "Weil gar keine Aktien gehandelt wurden.",
        "explanation": "Die Liste enthält 30 gehandelte Aktien."
      }
    ],
    "correct": 1,
    "rule": "Berechne Mengen aus einer erklärten Zuteilung, nicht aus der Anzahl gezeichneter Steine.",
    "diagram": null
  },
  {
    "title": "Berechnete Zwischenpreise nicht als Handel nachweisen",
    "summary": "Ein synthetischer Wert entsteht aus einer Regel.",
    "paragraphs": [
      "Nora sieht die Renko-Grenze 99,80. Sie sucht diese Zahl in der Original-Liste und findet keine Meldung dazu. G13 liegt bei 100,00, G14 bei 99,60. Das Modell ergänzt die Stufe 99,80 allein durch das Preisraster.",
      "Dies ist ein synthetischer Preis: ein berechneter Darstellungswert. Er kann mit einem gehandelten Preis übereinstimmen, muss es aber nicht. Hier ist eine Meldung bei 99,80 gerade nicht belegt. Auch ein angebotenes oder für Nora ausführbares 99,80 folgt daraus nicht.",
      "Bei Range-Anzeigen können manche Verfahren ebenfalls virtuelle Zwischenbars zeichnen. Nora prüft deren Regel. Im eigenen Ganzgeschäfts-Range-Modell dieses Kapitels entstehen solche Zwischenmeldungen nicht. Die tatsächlichen Daten und die gezeichneten Grenzen bleiben getrennt."
    ],
    "columns": [
      {
        "title": "Originaldaten",
        "tone": "neutral",
        "points": [
          "G13 bei 100,00, G14 bei 99,60.",
          "Keine Meldung bei 99,80."
        ]
      },
      {
        "title": "Renko-Raster",
        "tone": "positive",
        "points": [
          "Zwischenstufe 99,80 gezeichnet.",
          "Berechneter Wert ohne eigene Handelsbestätigung."
        ]
      }
    ],
    "prompt": "Was beweist die gezeichnete Renko-Grenze 99,80 in unserem Fall?",
    "answers": [
      {
        "label": "Eine sichere Ausführung für Nora.",
        "explanation": "Dazu fehlen eigene Auftrags- und Ausführungsdaten."
      },
      {
        "label": "Eine zusätzliche Meldung über eine Aktie.",
        "explanation": "Die Zeichnung erzeugt kein neues Geschäft."
      },
      {
        "label": "Nur eine berechnete Stufe, keinen dort belegten Handel.",
        "explanation": "Richtig: Kennzeichne synthetische Werte und prüfe sie gegen die Originaldaten."
      }
    ],
    "correct": 2,
    "rule": "Kennzeichne synthetische Werte und prüfe sie gegen die Originaldaten.",
    "diagram": "rc4-renko"
  },
  {
    "title": "Ein anderer Anker verschiebt das Preisraster",
    "summary": "Die Steingröße allein beschreibt die Konstruktion nicht vollständig.",
    "paragraphs": [
      "In einer getrennten Renko-Variante wählt Nora den Anker 100,10 statt 100,00. Die Steingröße bleibt 0,20. Die erste Aufwärtsschwelle wäre dann 100,30, die erste Abwärtsschwelle 99,90.",
      "G3 bei 99,90 würde bereits den ersten Abwärtsstein dieser Variante auslösen. Im Hauptfall löste G3 keinen Stein aus, weil dort die erste Abwärtsschwelle 99,80 lag. Die Eingangsmeldungen sind gleich; das Raster hat sich geändert.",
      "Der Anker kann durch eine Startregel oder einen Datenbeginn festgelegt sein. Nora dokumentiert ihn beim Vergleich. Sie nimmt nicht an, dass zwei Charts mit gleicher Steingröße zwangsläufig dieselben Steine enthalten. Das Hauptbild bleibt die Variante mit Anker 100,00."
    ],
    "columns": [
      {
        "title": "Hauptfall",
        "tone": "neutral",
        "points": [
          "Anker 100,00.",
          "Erster Abwärtsstein ab 99,80."
        ]
      },
      {
        "title": "Getrennte Variante",
        "tone": "positive",
        "points": [
          "Anker 100,10.",
          "Erster Abwärtsstein schon ab 99,90."
        ]
      }
    ],
    "prompt": "Welche erste Abwärtsschwelle hat Anker 100,10 mit Größe 0,20?",
    "answers": [
      {
        "label": "99,90 Euro.",
        "explanation": "Richtig: Prüfe den Anker zusätzlich zur Steingröße."
      },
      {
        "label": "99,80 Euro.",
        "explanation": "Das gehört zum Hauptanker 100,00."
      },
      {
        "label": "100,30 Euro.",
        "explanation": "Das ist die erste Aufwärtsschwelle dieser Variante."
      }
    ],
    "correct": 0,
    "rule": "Prüfe den Anker zusätzlich zur Steingröße.",
    "diagram": null
  },
  {
    "title": "Feste und berechnete Steingrößen unterscheiden",
    "summary": "Eine bewegliche Regel braucht weitere Einstellungen.",
    "paragraphs": [
      "Unsere Renko-Steine haben durchgehend die feste Größe 0,20 Euro. In einer getrennten Variante mit Größe 0,40 und Anker 100,00 wären die ersten Schwellen 100,40 und 99,60. G4 bei 100,20 würde dann noch keinen Stein auslösen.",
      "Andere Regeln können eine Größe aus vergangenen Preisspannen berechnen. ATR ist eine Kennzahl für durchschnittliche vergangene Preisbewegung, die auch Abstände zum vorherigen Schluss berücksichtigt. Welche Daten und wie viele Abschnitte sie verwendet, muss angegeben sein.",
      "Eine daraus berechnete Steingröße ist nicht dasselbe wie unsere feste Größe. Auch eine Prozentregel braucht eine Preisreferenz und Rundung. Nora dokumentiert die konkrete Methode, statt aus einer automatisch berechneten Größe eine garantiert bessere Darstellung abzuleiten."
    ],
    "columns": [
      {
        "title": "Unser Hauptfall",
        "tone": "neutral",
        "points": [
          "Feste Größe 0,20.",
          "Gleiche Größe für alle fertigen Steine."
        ]
      },
      {
        "title": "Andere Methoden",
        "tone": "positive",
        "points": [
          "Getrennte feste Größe 0,40 verschiebt Schwellen.",
          "ATR- oder Prozentregel braucht zusätzliche Angaben."
        ]
      }
    ],
    "prompt": "Löst G4 bei 100,20 schon den ersten Aufwärtsstein mit Größe 0,40 aus?",
    "answers": [
      {
        "label": "Ja, jede positive Meldung bildet einen Stein.",
        "explanation": "Die festgelegte Schwelle bleibt maßgeblich."
      },
      {
        "label": "Nein, die Schwelle liegt bei 100,40.",
        "explanation": "Richtig: Vergleiche Steingrößen nur mit bekannter Methode und ihren Eingaben."
      },
      {
        "label": "Ja, weil G4 im Hauptfall auslöst.",
        "explanation": "Die Größe wurde in der Variante verändert."
      }
    ],
    "correct": 1,
    "rule": "Vergleiche Steingrößen nur mit bekannter Methode und ihren Eingaben.",
    "diagram": null
  },
  {
    "title": "Eine Projektion nicht mit einem bestätigten Stein verwechseln",
    "summary": "Ein vorläufiges Element kann später verschwinden.",
    "paragraphs": [
      "Unser Hauptmodell verarbeitet einzelne fest vorgegebene Meldungen und zeichnet nur fertige Steine. Jetzt betrachtet Nora eine andere Regel: Ein Programm nutzt den Schluss einer laufenden Minute als Eingabe. Bis zum Minutenende ist dieser Schluss noch vorläufig.",
      "Angenommen, der laufende letzte Preis erreicht eine Renko-Schwelle, fällt aber vor dem Minutenende wieder darunter. Eine währenddessen gezeigte Projektion könnte entstehen und anschließend verschwinden. Projektion meint hier einen vorläufigen Darstellungszustand, keinen endgültigen historischen Stein.",
      "Nora prüft deshalb Eingabefrequenz, Abschlussregel und Kennzeichnung. Sie darf eine spätere endgültige Darstellung nicht ungefragt als damalige Live-Anzeige behandeln. Ein bereits bestätigt verarbeiteter Originaltick und eine vorläufige Minutenprojektion sind unterschiedliche Eingaben."
    ],
    "columns": [
      {
        "title": "Unser Modell",
        "tone": "neutral",
        "points": [
          "Einzelne Meldungen in fester Reihenfolge.",
          "Nur bestätigte Modellsteine."
        ]
      },
      {
        "title": "Getrennte Projektionsregel",
        "tone": "positive",
        "points": [
          "Laufender Minutenschluss noch veränderlich.",
          "Vorläufige Elemente können entfallen."
        ]
      }
    ],
    "prompt": "Wie behandelt Nora einen als Projektion markierten Stein?",
    "answers": [
      {
        "label": "Immer als bestätigten historischen Handel.",
        "explanation": "Eine Projektion ist weder endgültiger Stein noch eigener Handel."
      },
      {
        "label": "Als garantierte nächste Richtung.",
        "explanation": "Vorläufige Zeichen enthalten keine sichere Prognose."
      },
      {
        "label": "Als vorläufigen Zustand nach der erklärten Regel.",
        "explanation": "Richtig: Prüfe bei vorläufigen Elementen, welche Daten sie bestätigen oder wieder entfernen."
      }
    ],
    "correct": 2,
    "rule": "Prüfe bei vorläufigen Elementen, welche Daten sie bestätigen oder wieder entfernen.",
    "diagram": null
  },
  {
    "title": "Gleiche OHLC-Werte können andere Renko-Folgen ergeben",
    "summary": "Die Reihenfolge der Zwischenpreise bleibt entscheidend.",
    "paragraphs": [
      "Wir betrachten zwei getrennte vollständige Preisfolgen, jeweils mit Anker100,00 und Größe0,20. Folge A lautet 100,00 → 100,40 → 99,80 → 100,20. Folge B lautet 100,00 → 99,80 → 100,40 → 100,20.",
      "Beide haben O100,00, H100,40, L99,80 und C100,20. Nach unserer Zwei-Stein-Regel erzeugt A aber fünf Steine: zwei aufwärts, zwei abwärts und einen aufwärts. B erzeugt drei: einen abwärts und zwei aufwärts. Der letzte Rückgang in B erreicht keine erneute Umkehrschwelle.",
      "OHLC allein nennt nicht, ob das Hoch oder Tief zuerst kam. Wer daraus eine genaue Renko-Folge bildet, muss eine zusätzliche Reihenfolge annehmen. Diese Annahme ist nicht schon durch die vier Werte bewiesen. Nora verwendet für genaue Rekonstruktionen ausreichend feine Daten."
    ],
    "columns": [
      {
        "title": "Folge A",
        "tone": "neutral",
        "points": [
          "100,00 → 100,40 → 99,80 → 100,20.",
          "Fünf Steine nach unserer Regel."
        ]
      },
      {
        "title": "Folge B",
        "tone": "positive",
        "points": [
          "100,00 → 99,80 → 100,40 → 100,20.",
          "Drei Steine bei gleichen OHLC-Werten."
        ]
      }
    ],
    "prompt": "Warum ergeben beide Folgen trotz gleicher OHLC-Werte verschiedene Renko-Steine?",
    "answers": [
      {
        "label": "Hoch und Tief kommen in anderer Reihenfolge.",
        "explanation": "Richtig: Kennzeichne jede angenommene Zwischenfolge als zusätzliche Annahme."
      },
      {
        "label": "Weil sich ihre Schlusswerte unterscheiden.",
        "explanation": "Beide schließen bei 100,20."
      },
      {
        "label": "Weil OHLC jede Zwischenfolge eindeutig festlegt.",
        "explanation": "Gerade die Reihenfolge fehlt in OHLC."
      }
    ],
    "correct": 0,
    "rule": "Kennzeichne jede angenommene Zwischenfolge als zusätzliche Annahme.",
    "diagram": null
  },
  {
    "title": "Eine Bildgrenze nicht als eigene Ausführung verwenden",
    "summary": "Ein Modelltest braucht echte Zeit- und Preisbezüge.",
    "paragraphs": [
      "Bei G14 werden im Lernfall 99,60 gehandelt. Renko zeichnet dabei auch die Zwischenstufe 99,80. Nora darf einen gedachten Kauf oder Verkauf nicht automatisch auf 99,80 als tatsächliche Ausführung buchen. Diese Meldung fehlt in der Liste.",
      "Selbst eine vorhandene Geschäftsmeldung belegt noch nicht Noras eigene Ausführung. Dafür braucht sie ihre Auftragsbedingungen, passende Angebote, Menge, Reihenfolge und Kosten. Ein Chartbild allein nennt diese Angaben nicht.",
      "Bei einem historischen Strategietest muss sie daher erklären, auf welchen tatsächlichen Daten die Orders simuliert werden. Synthetische Chartpreise als garantiert mögliche Käufe und Verkäufe einzusetzen kann Ergebnisse verzerren. Die Darstellung hilft beim Lesen, ersetzt aber keine Prüfung der Ausführungsannahmen."
    ],
    "columns": [
      {
        "title": "Bildinformation",
        "tone": "neutral",
        "points": [
          "Renko-Grenze 99,80.",
          "G14 tatsächlich bei 99,60."
        ]
      },
      {
        "title": "Für eigene Ausführung nötig",
        "tone": "positive",
        "points": [
          "Order und geeignete Markt-/Mengenbedingungen.",
          "Bestätigung beziehungsweise erklärte Simulation."
        ]
      }
    ],
    "prompt": "Darf Nora 99,80 allein wegen der gezeichneten Grenze als eigene Ausführung buchen?",
    "answers": [
      {
        "label": "Ja, Renko verdoppelt die verfügbare Menge.",
        "explanation": "Berechnete Steine schaffen keine zusätzlichen Aktien."
      },
      {
        "label": "Nein, eine Zeichengrenze ist keine Ausführungsbestätigung.",
        "explanation": "Richtig: Prüfe Ausführungen auf ihren tatsächlichen Daten, nicht nur auf berechneten Bildgrenzen."
      },
      {
        "label": "Ja, jeder sichtbare Preis war für sie verfügbar.",
        "explanation": "Sichtbarkeit ist keine Zusage eines Angebots oder ihrer Zuteilung."
      }
    ],
    "correct": 1,
    "rule": "Prüfe Ausführungen auf ihren tatsächlichen Daten, nicht nur auf berechneten Bildgrenzen.",
    "diagram": null
  },
  {
    "title": "Einen Range-und-Renko-Bericht vollständig abgeben",
    "summary": "Belegte Geschäfte und berechnete Elemente erhalten getrennte Aussagen.",
    "paragraphs": [
      "Nora schreibt: Der eigene Arvo-Datensatz enthält 15 Meldungen und 30 Aktien. Nach der Ganzgeschäfts-Range-Regel mit Schwelle0,30 entstehen vier abgeschlossene Gruppen und ein offener Rest. Die Mengenfolge8/6/5/8/3 erhält alle Aktien genau einmal.",
      "Das feste Renko-Modell nutzt Anker100,00, Größe0,20 und Zwei-Stein-Umkehr. Es erzeugt fünf fertige Steine: zwei aufwärts, drei abwärts. Ihre Auslöser sind G4, G9, G13, G14 und G14. Nach G15 liegt der letzte gehandelte Preis99,70 über dem letzten berechneten Steinschluss99,60.",
      "Sie ergänzt: Die Elemente haben keine feste Zeitdauer. Die Renko-Grenze99,80 ist nicht als Geschäft belegt. Vorläufige Elemente und alternative Start-/Größenregeln brauchen eigene Kennzeichnungen. Keine Richtung ist dadurch für die Zukunft gesichert. Als Nächstes untersucht Nora berechnete Kerzenpreise."
    ],
    "columns": [
      {
        "title": "Range-Bericht",
        "tone": "neutral",
        "points": [
          "Vier fertige Bars plus offener Rest.",
          "Mengen insgesamt 30 Aktien."
        ]
      },
      {
        "title": "Renko-Bericht",
        "tone": "positive",
        "points": [
          "Fünf fertige Steine bei festgelegten Regeln.",
          "Berechnete Grenzen sind keine Ausführungszusage."
        ]
      }
    ],
    "prompt": "Welche Aussage passt zum Hauptfall nach G15?",
    "answers": [
      {
        "label": "Beide Werte müssen gleich sein.",
        "explanation": "Das Raster und der letzte Handel können auseinanderliegen."
      },
      {
        "label": "Jeder der fünf Renko-Steine ist eine eigene Meldung.",
        "explanation": "Stein vier und fünf haben denselben Auslöser G14."
      },
      {
        "label": "Letzter Handel99,70; letzter Renko-Steinschluss99,60.",
        "explanation": "Richtig: Berichte Originaldaten, Konstruktion, offenen Zustand und Aussagegrenzen getrennt."
      }
    ],
    "correct": 2,
    "rule": "Berichte Originaldaten, Konstruktion, offenen Zustand und Aussagegrenzen getrennt.",
    "diagram": null
  }
];
export const chartsChapterFourLessons: Lesson[] = drafts.map((draft,index) => {
  const key = `reading-charts.chapter-04.lesson-${String(index+1).padStart(2,'0')}`;
  const observations = draft.diagram === 'rc4-range'
    ? ['Range-Gruppen G1–4, G5–7, G8–9, G10–13 und G14–15.', 'Mengen 8/6/5/8/3; letzter Bar noch offen.']
    : draft.diagram === 'rc4-reversal'
    ? ['Letzter Aufwärtsstein aus G9: 100,20 bis 100,40.', 'G11 bei 100,30 erreicht die Umkehrschwelle 100,00 noch nicht.']
    : ['Fünf fertige Modellsteine, ausgelöst durch G4, G9, G13, G14 und G14.', 'Die Zwischenstufe 99,80 ist nicht als Geschäft gemeldet.'];
  return {
    id:key,title:draft.title,summary:draft.summary,
    sourceUnit:'Kapitel 4 · Range-Bars und Renko', sourceAnchors:[draft.title],
    durationMinutes:6,xp:35,status:'published',
    steps:[
      {id:`${key}.explain`,type:'explanation',eyebrow:'Charts verstehen · Kapitel 4',title:draft.title,paragraphs:draft.paragraphs,callout:draft.rule},
      ...(draft.diagram ? [{id:`${key}.diagram`,type:'diagram' as const,title:'Preisgrenzen im eigenen Lernmodell',scenario:draft.diagram as ChartScenarioId,caption:draft.diagram==='rc4-reversal'?'Arvo-Zwischenstand bis G11 · Euro je Aktie · eigene Zwei-Stein-Regel.':'Arvo-Aufnahme nach G15 · Euro je Aktie · eigene Range- beziehungsweise Renko-Regel.',observations}] : []),
      {id:`${key}.compare`,type:'comparison',title:'Das Beispiel auf einen Blick',columns:draft.columns.map(column=>({...column,tone:column.tone as 'neutral'|'positive'}))},
      {id:`${key}.question`,type:'question',title:'Kurz prüfen',prompt:draft.prompt,correctOptionId:`choice-${draft.correct}`,options:draft.answers.map((a,i)=>({id:`choice-${i}`,...a}))},
      {id:`${key}.recap`,type:'recap',title:'Das nimmst du mit',points:[draft.rule,draft.summary]},
    ],
  };
});
