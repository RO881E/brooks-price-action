import type { Lesson, ChartScenarioId } from '../../types';
const drafts = [
  {
    "title": "Eine Preisbewegung in Kästchen übersetzen",
    "summary": "Point & Figure zeichnet Preisstufen nach erklärten Regeln.",
    "paragraphs": [
      "Nora sieht zum ersten Mal einen Point-&-Figure-Chart, kurz P&F. Statt normaler Kerzen stehen dort Kreuze und Kreise in senkrechten Spalten. Jedes Zeichen liegt auf einer Preisstufe. Das Bild ändert sich erst, wenn ein Preis die festgelegten Bedingungen erfüllt.",
      "Denke an eine Treppe mit gleich hohen Stufen. Ein kleiner Schritt auf derselben Stufe schafft noch keine neue Stufe. Auch P&F fasst kleinere Preisänderungen zusammen. Die Regeln bestimmen, wann eine Spalte wächst und wann eine neue beginnt.",
      "In diesem Kapitel verwenden wir ein eigenes festes Preisraster und eine Drei-Kästchen-Umkehr. Es gibt andere Verfahren für Start, Größe und Eingabedaten. Nora lernt deshalb die Konstruktion anhand unserer Regeln, statt alle P&F-Bilder automatisch gleich zu lesen."
    ],
    "columns": [
      {
        "title": "Normale Zeitkerze",
        "tone": "neutral",
        "points": [
          "Ein Zeichen pro vorhandenem Zeitabschnitt.",
          "Original-O/H/L/C des Abschnitts."
        ]
      },
      {
        "title": "Unser P&F-Modell",
        "tone": "positive",
        "points": [
          "X oder O auf Preisstufen.",
          "Neue Spalte erst nach ausreichend großer Umkehr."
        ]
      }
    ],
    "prompt": "Was braucht Nora zum Lesen eines P&F-Bilds?",
    "answers": [
      {
        "label": "Die Regeln für Raster, Eingaben und Umkehr.",
        "explanation": "Diese Angaben erklären, wann Zeichen entstehen."
      },
      {
        "label": "Nur die Farbe der Kreise.",
        "explanation": "Farbe erklärt die Konstruktion nicht."
      },
      {
        "label": "Immer einen Minutenabstand zwischen Spalten.",
        "explanation": "Unsere Spalten haben keine feste Zeitdauer."
      }
    ],
    "correct": 0,
    "rule": "Lies P&F-Zeichen mit den zugehörigen Konstruktionsregeln.",
    "diagram": null
  },
  {
    "title": "X und O als Spaltenrichtungen lesen",
    "summary": "Zeichen beschreiben das Raster, keine Liste von Käufern und Verkäufern.",
    "paragraphs": [
      "In unserem Modell enthält eine X-Spalte steigende Preisstufen. Sie wächst nach oben. Eine O-Spalte enthält fallende Preisstufen und wächst nach unten. X ist das Kreuz; O ist der Kreis, nicht die Zahl null.",
      "Eine neue Spalte steht rechts neben ihrer Vorgängerin. X und O wechseln sich ab, weil eine neue Spalte hier erst bei einem Richtungswechsel entsteht. Eine fortgesetzte Bewegung erweitert die vorhandene Spalte.",
      "Ein X bedeutet nicht „ein Käufer“, und ein O bedeutet nicht „ein Verkäufer“. Jedes abgeschlossene Geschäft hat beide Seiten. P&F zeigt eine bestimmte Verdichtung von Preisen; die Zeichen zählen weder Personen noch vollständige Aufträge. Nora beschreibt deshalb zuerst die gezeichnete Richtung."
    ],
    "columns": [
      {
        "title": "X-Spalte",
        "tone": "neutral",
        "points": [
          "Preisraster wächst aufwärts.",
          "Weitere X bleiben in derselben Spalte."
        ]
      },
      {
        "title": "O-Spalte",
        "tone": "positive",
        "points": [
          "Preisraster wächst abwärts.",
          "Weitere O bleiben in derselben Spalte."
        ]
      }
    ],
    "prompt": "Wofür steht ein O in unserem Modell?",
    "answers": [
      {
        "label": "Für einen garantiert fallenden nächsten Preis.",
        "explanation": "Es sagt keine Zukunft voraus."
      },
      {
        "label": "Für eine Stufe in einer fallenden Preisspalte.",
        "explanation": "O beschreibt die Zeichnungsrichtung."
      },
      {
        "label": "Für genau einen Verkäufer.",
        "explanation": "Das Zeichen zählt keine Personen."
      }
    ],
    "correct": 1,
    "rule": "Trenne Spaltenrichtung von Aussagen über Marktteilnehmer.",
    "diagram": null
  },
  {
    "title": "Die Kästchengröße in Euro angeben",
    "summary": "Ein Kästchen meint eine Preisentfernung, keine Stückzahl.",
    "paragraphs": [
      "Unsere erfundene Nivo-Aktie verwendet Kästchen von 0,50 Euro je Aktie. Wir rechnen intern in Cent: Ein Kästchen entspricht 50 Cent. Der Abstand zwischen zwei benachbarten Rasterstufen beträgt also 0,50 Euro.",
      "Das Raster beginnt bei einem erklärten Anker von 50,00 Euro. Seine Stufen lauten beispielsweise 50,00; 50,50; 51,00; 51,50 und 52,00. Das Raster ist eine Zeichenregel. Es ist nicht automatisch der kleinste erlaubte Geschäftspreisschritt des Produkts.",
      "Ein Geschäft kann beispielsweise bei 52,10 liegen, obwohl unser Raster dort kein eigenes Kästchen hat. Die Darstellung verdichtet dann auf erreichte Rasterstufen. Weder fünfzig Cent noch ein gezeichnetes Kästchen sagt, wie viele Aktien gehandelt wurden."
    ],
    "columns": [
      {
        "title": "Preisraster",
        "tone": "neutral",
        "points": [
          "Anker 50,00 Euro.",
          "Kästchengröße 0,50 Euro."
        ]
      },
      {
        "title": "Getrennte Angaben",
        "tone": "positive",
        "points": [
          "Menge: Aktien, hier unbekannt.",
          "Erlaubter Geschäftspreisschritt ist eine eigene Produkteigenschaft."
        ]
      }
    ],
    "prompt": "Welche Entfernung liegt zwischen zwei benachbarten Rasterstufen?",
    "answers": [
      {
        "label": "50 Aktien.",
        "explanation": "Das wäre eine Stückzahl."
      },
      {
        "label": "Immer 50 Sekunden.",
        "explanation": "Das wäre eine Zeitdauer."
      },
      {
        "label": "0,50 Euro je Aktie.",
        "explanation": "Das ist die erklärte Kästchengröße."
      }
    ],
    "correct": 2,
    "rule": "Nenne Kästchengröße, Preiseinheit und Rasteranker.",
    "diagram": null
  },
  {
    "title": "Drei Kästchen in eine Umkehrentfernung umrechnen",
    "summary": "Kästchengröße und Umkehrzahl sind zwei Einstellungen.",
    "paragraphs": [
      "Nora stellt eine Umkehrzahl von drei Kästchen ein. Bei 0,50 Euro je Kästchen beträgt die erforderliche Gegenbewegung 3 × 0,50 = 1,50 Euro. Eine Fortsetzung braucht dagegen nur die nächste volle Rasterstufe.",
      "Die Umkehrzahl ist eine Anzahl; die Umkehrentfernung ist ein Preisabstand. Wer nur „drei“ sagt, lässt die Einheit offen. Drei bei Kästchen von einem Euro wären drei Euro Gegenbewegung, nicht dieselbe Einstellung wie in unserem Hauptfall.",
      "Wir messen die Gegenbewegung vom äußersten bereits gezeichneten Zeichen der aktuellen Spalte. Bei einer X-Spalte ist dies das oberste X, bei einer O-Spalte das unterste O. Die Schwelle ist in unserem Modell inklusive: Genaues Erreichen genügt."
    ],
    "columns": [
      {
        "title": "Fortsetzung",
        "tone": "neutral",
        "points": [
          "Nächste Rasterstufe in gleicher Richtung.",
          "Eine Kästchengröße: 0,50 Euro."
        ]
      },
      {
        "title": "Umkehr",
        "tone": "positive",
        "points": [
          "Drei Kästchengrößen vom gezeichneten Extrem.",
          "Preisabstand: 1,50 Euro."
        ]
      }
    ],
    "prompt": "Wie groß ist unsere Umkehrentfernung?",
    "answers": [
      {
        "label": "1,50 Euro.",
        "explanation": "Drei mal 0,50 ergibt 1,50."
      },
      {
        "label": "0,50 Euro.",
        "explanation": "Das ist eine einzelne Kästchengröße."
      },
      {
        "label": "Drei Minuten.",
        "explanation": "Die Einstellung ist keine Zeitregel."
      }
    ],
    "correct": 0,
    "rule": "Berechne die Umkehrentfernung aus Kästchengröße mal Umkehrzahl.",
    "diagram": null
  },
  {
    "title": "Die zwölf eigenen Nivo-Meldungen festhalten",
    "summary": "Die Reihenfolge der Preise ist Teil der Eingabe.",
    "paragraphs": [
      "Wir beginnen einen neuen eigenständigen Lernfall. Die Zeiten nennen Sekunden nach 09:00; Preise sind Euro je Aktie. G1 kommt bei Sekunde 5 zu 50,00; G2 bei 20 zu 50,50; G3 bei 40 zu 52,10; G4 bei 55 zu 51,50.",
      "Es folgen G5 bei 80 zu 50,50; G6 bei 120 zu 50,00; G7 bei 180 zu 51,00; G8 bei 185 zu 51,50. Zum Schluss kommen G9 bei 220 zu 52,50; G10 bei 260 zu 51,00; G11 bei 290 zu 50,50; G12 bei 360 zu 51,50.",
      "Wir betrachten den Zustand direkt nach G12. Keine spätere Meldung und kein Sitzungsneustart gehört zum Hauptfall. Mengen wurden nicht vorgegeben. Nora kann die zwölf Meldungen zählen, aber keine Gesamtstückzahl aus ihnen berechnen."
    ],
    "columns": [
      {
        "title": "Erste Hälfte",
        "tone": "neutral",
        "points": [
          "G1–G6: 50,00 / 50,50 / 52,10 / 51,50 / 50,50 / 50,00.",
          "Zeiten: 5 / 20 / 40 / 55 / 80 / 120 Sekunden."
        ]
      },
      {
        "title": "Zweite Hälfte",
        "tone": "positive",
        "points": [
          "G7–G12: 51,00 / 51,50 / 52,50 / 51,00 / 50,50 / 51,50.",
          "Zeiten: 180 / 185 / 220 / 260 / 290 / 360 Sekunden."
        ]
      }
    ],
    "prompt": "Welche Gesamtmenge lässt sich aus dieser Liste bestimmen?",
    "answers": [
      {
        "label": "Genau siebzehn Aktien.",
        "explanation": "Zeichen im späteren Raster sind keine Mengenangaben."
      },
      {
        "label": "Keine Aktienmenge; die Mengenangaben fehlen.",
        "explanation": "Zwölf Meldungen können unterschiedliche Stückzahlen enthalten."
      },
      {
        "label": "Genau zwölf Aktien.",
        "explanation": "Eine Meldung muss nicht genau eine Aktie umfassen."
      }
    ],
    "correct": 1,
    "rule": "Erhalte Preisfolge und Zeitangaben, ohne fehlende Mengen zu erfinden.",
    "diagram": null
  },
  {
    "title": "Am Anfang Anker und Zeichen unterscheiden",
    "summary": "Unser Anker startet das Raster, erhält aber noch kein X oder O.",
    "paragraphs": [
      "G1 liegt bei 50,00 und entspricht unserem Rasteranker. Zu diesem Zeitpunkt ist noch keine Richtung festgelegt. Unsere eigene Startregel zeichnet daher am Anker noch kein X oder O.",
      "Erreicht ein späterer Preis mindestens 50,50, beginnen wir eine X-Spalte bei 50,50. Erreicht er stattdessen zuerst höchstens 49,50, beginnen wir eine O-Spalte bei 49,50. Bei einem größeren Sprung werden alle erreichten Rasterstufen vom Anker aus ergänzt.",
      "Das ist ausdrücklich die Initialisierung unseres Lernmodells. Initialisierung bedeutet, einen Anfangszustand festzulegen. Andere Programme können anders beginnen oder ältere Daten einbeziehen. Nora notiert die Startregel und setzt die Rechnung nicht bei jedem sichtbaren Bildausschnitt neu an."
    ],
    "columns": [
      {
        "title": "Noch ohne Richtung",
        "tone": "neutral",
        "points": [
          "Anker 50,00.",
          "G1 erzeugt bei uns noch kein Zeichen."
        ]
      },
      {
        "title": "Erste Richtung",
        "tone": "positive",
        "points": [
          "Aufwärts ab 50,50 oder abwärts ab 49,50.",
          "Anker bleibt kein zusätzliches Geschäft."
        ]
      }
    ],
    "prompt": "Was zeichnet unser Modell allein nach G1?",
    "answers": [
      {
        "label": "Zwingend drei X.",
        "explanation": "Eine Umkehrzahl bestimmt nicht die erste Zeichenanzahl."
      },
      {
        "label": "Ein O als Verkäufer.",
        "explanation": "Das wäre weder unsere Startregel noch die Bedeutung eines O."
      },
      {
        "label": "Noch kein X und kein O.",
        "explanation": "G1 liegt am Anker; eine erste Rasterstufe wurde noch nicht erreicht."
      }
    ],
    "correct": 2,
    "rule": "Erkläre die Startregel, bevor du die erste Spalte zählst.",
    "diagram": null
  },
  {
    "title": "Mit G2 das erste X zeichnen",
    "summary": "Eine erreichte Aufwärtsstufe legt die erste Richtung fest.",
    "paragraphs": [
      "G2 wird zu 50,50 gemeldet. Damit ist die erste Aufwärtsstufe genau erreicht. Unser Modell beginnt eine X-Spalte und zeichnet ein X auf der Stufe 50,50.",
      "Das X liegt in der ersten Spalte, nicht in einer eigenen Zeitkerze für Sekunde 20. Der Anker 50,00 wird dabei nicht nachträglich als zusätzliches X eingezeichnet. Die erste Richtung ist jetzt aufwärts.",
      "Nora kann den Auslöser dieses Zeichens nennen: G2. Ein Auslöser ist die Meldung, deren Preis die Regel erfüllt. Das Zeichen ist trotzdem kein zusätzlicher Handel neben G2. Es übersetzt nur die bekannte Meldung in die Rasterdarstellung."
    ],
    "columns": [
      {
        "title": "Vor G2",
        "tone": "neutral",
        "points": [
          "Nur Anker 50,00 bekannt.",
          "Noch keine Richtung gezeichnet."
        ]
      },
      {
        "title": "Mit G2",
        "tone": "positive",
        "points": [
          "X bei 50,50.",
          "Auslöser G2; erste Spalte aufwärts."
        ]
      }
    ],
    "prompt": "Welche Stufe trägt das erste X?",
    "answers": [
      {
        "label": "50,50 Euro.",
        "explanation": "G2 erreicht die erste Stufe über dem Anker."
      },
      {
        "label": "50,00 Euro.",
        "explanation": "Unser Startanker erhält kein eigenes Zeichen."
      },
      {
        "label": "52,10 Euro.",
        "explanation": "Dieser Preis gehört erst zu G3 und liegt nicht auf unserem Raster."
      }
    ],
    "correct": 0,
    "rule": "Ordne das erste Zeichen seiner erreichten Rasterstufe und seinem Auslöser zu.",
    "diagram": "rc6-columns"
  },
  {
    "title": "Ein Preissprung ergänzt mehrere X in derselben Spalte",
    "summary": "Der letzte gezeichnete Rand muss nicht der letzte Geschäftspreis sein.",
    "paragraphs": [
      "G3 springt von 50,50 auf 52,10. Die nächste volle Rasterstufe liegt bei 51,00. Danach folgen 51,50 und 52,00. Alle drei sind durch G3 erreicht und werden als X in derselben Spalte ergänzt.",
      "Die erste Spalte trägt jetzt X bei 50,50; 51,00; 51,50 und 52,00. Ihr oberstes X liegt bei 52,00. Für ein weiteres X bei 52,50 reicht G3 noch nicht aus. Der verbleibende Abstand von 0,10 Euro wird nicht als Teilzeichen gezeichnet.",
      "In unserer Liste wurde kein einzelnes Geschäft zu 52,00 gemeldet. Diese Stufe ist trotzdem eine gültige Zeichnungsstufe, weil G3 sie überschritten hat. Mehrere Rasterzeichen aus einer Meldung bedeuten keine zusätzlichen Geschäfte und keine zusätzliche Aktienmenge."
    ],
    "columns": [
      {
        "title": "Originalmeldung G3",
        "tone": "neutral",
        "points": [
          "Geschäftspreis 52,10.",
          "Ein einzelner Auslöser."
        ]
      },
      {
        "title": "Gezeichnet nach G3",
        "tone": "positive",
        "points": [
          "Vier X insgesamt; oberstes bei 52,00.",
          "Nächstes X erst bei 52,50."
        ]
      }
    ],
    "prompt": "Wie viele neue X ergänzt G3?",
    "answers": [
      {
        "label": "Genau ein X bei 52,10.",
        "explanation": "52,10 liegt nicht auf unserem Raster; mehrere volle Stufen wurden erreicht."
      },
      {
        "label": "Drei neue X.",
        "explanation": "51,00, 51,50 und 52,00 werden neu erreicht."
      },
      {
        "label": "Vier neue X.",
        "explanation": "Das X bei 50,50 war bereits durch G2 vorhanden."
      }
    ],
    "correct": 1,
    "rule": "Ergänze volle Rasterstufen und trenne sie von gemeldeten Geschäftspreisen.",
    "diagram": "rc6-columns"
  },
  {
    "title": "Ein kleiner Rückgang erzeugt noch keine O-Spalte",
    "summary": "Die Umkehr wird vom gezeichneten Extrem gemessen.",
    "paragraphs": [
      "G4 liegt bei 51,50. Gegenüber dem Geschäftspreis von G3 bei 52,10 ist das ein Rückgang von 0,60 Euro. Unsere Umkehrregel startet aber nicht bei 52,10, sondern beim obersten bereits gezeichneten X bei 52,00.",
      "Die Schwelle für die erste O-Spalte beträgt 52,00 − 1,50 = 50,50. G4 liegt deutlich darüber. Es entsteht deshalb weder ein neues X noch eine neue O-Spalte. Die erste Spalte bleibt unverändert.",
      "Keine Bildänderung bedeutet nicht, dass kein Geschäft stattfand. G4 ist weiterhin Teil der ursprünglichen Liste. Die Darstellungsregel lässt seine kleinere Gegenbewegung lediglich ohne neues Zeichen. Nora kann sie bei Bedarf in den Originaldaten wiederfinden."
    ],
    "columns": [
      {
        "title": "Beobachtet",
        "tone": "neutral",
        "points": [
          "G4 bei 51,50.",
          "Rückgang vom letzten Geschäft: 0,60."
        ]
      },
      {
        "title": "Für das Raster nötig",
        "tone": "positive",
        "points": [
          "Umkehrschwelle 50,50.",
          "Noch nicht erreicht."
        ]
      }
    ],
    "prompt": "Was ändert G4 im gezeichneten P&F-Bild?",
    "answers": [
      {
        "label": "Eine neue O-Spalte bei jeder Preisabnahme.",
        "explanation": "Unsere Umkehr braucht drei Kästchengrößen."
      },
      {
        "label": "Das oberste X wird nach unten verschoben.",
        "explanation": "Bereits gezeichnete Stufen bleiben in unserem Modell erhalten."
      },
      {
        "label": "Kein Zeichen und keine Spalte.",
        "explanation": "Die nächste Aufwärtsstufe und die Abwärtsumkehr fehlen beide."
      }
    ],
    "correct": 2,
    "rule": "Miss die Umkehr vom gezeichneten Spaltenextrem, nicht vom letzten Einzelpreis.",
    "diagram": null
  },
  {
    "title": "Mit G5 die Drei-Kästchen-Umkehr genau erreichen",
    "summary": "Gleichheit mit der Schwelle genügt in unserem Modell.",
    "paragraphs": [
      "G5 wird zu 50,50 gemeldet. Die Entfernung vom obersten X52,00 beträgt genau 1,50 Euro. Damit erreicht G5 unsere inklusive Umkehrschwelle und eröffnet rechts daneben eine O-Spalte.",
      "Wir steigen vom vorherigen Extrem eine Stufe ab und zeichnen O bei 51,50, dann bei 51,00 und bei 50,50. Die neue Spalte erhält also gleich drei O. Die drei Zeichen werden alle durch dieselbe Meldung G5 ausgelöst.",
      "Eine Meldung zu 50,51 würde dagegen nicht genügen: Sie läge einen Cent über der Schwelle. Wir prüfen „höchstens 50,50“, nicht nur eine ungefähr große Abwärtsbewegung. Nora nennt diese Grenzregel ausdrücklich, weil Rundung oder andere Verfahren zu abweichenden Ergebnissen führen könnten."
    ],
    "columns": [
      {
        "title": "Knapp darüber",
        "tone": "neutral",
        "points": [
          "Getrennter Prüfpreis 50,51.",
          "Noch keine Umkehr."
        ]
      },
      {
        "title": "Schwelle erreicht",
        "tone": "positive",
        "points": [
          "G5 bei 50,50.",
          "Neue O bei 51,50 / 51,00 / 50,50."
        ]
      }
    ],
    "prompt": "Welche Meldung beginnt im Hauptfall die zweite Spalte?",
    "answers": [
      {
        "label": "G5 bei 50,50.",
        "explanation": "Sie erreicht genau die Drei-Kästchen-Umkehr."
      },
      {
        "label": "Schon G4 bei 51,50.",
        "explanation": "Der Rückgang beträgt vom gezeichneten Extrem erst ein Kästchen."
      },
      {
        "label": "Erst eine Meldung unter 50,50.",
        "explanation": "Unsere inklusive Schwelle erlaubt Gleichheit."
      }
    ],
    "correct": 0,
    "rule": "Prüfe Umkehrschwellen einschließlich ihrer erklärten Gleichheitsregel.",
    "diagram": "rc6-columns"
  },
  {
    "title": "Den alten Extremplatz in der neuen Spalte auslassen",
    "summary": "Eine Umkehrspalte beginnt eine Stufe neben dem bisherigen Extrem.",
    "paragraphs": [
      "Nora fragt, warum die neue O-Spalte kein O bei 52,00 enthält. Unser gezeichnetes Extrem52,00 gehört noch zur alten X-Spalte. Die neue Gegenrichtung beginnt eine Kästchengröße darunter, also bei 51,50.",
      "Drei Kästchengrößen Abstand vom alten Extrem führen damit zu drei neuen Zeichen: 51,50; 51,00; 50,50. Wer den alten Extremplatz mitzählt, würde versehentlich vier Zeichen aus einer Drei-Kästchen-Umkehr machen.",
      "Bei einer späteren Umkehr von O nach X gilt die spiegelbildliche Regel: Das erste neue X liegt eine Stufe über dem tiefsten O. Nora unterscheidet daher den Messpunkt der Umkehr von dem ersten gezeichneten Platz der neuen Spalte."
    ],
    "columns": [
      {
        "title": "Messpunkt",
        "tone": "neutral",
        "points": [
          "Altes oberstes X: 52,00.",
          "Von dort 1,50 Euro abwärts messen."
        ]
      },
      {
        "title": "Neuer Anfang",
        "tone": "positive",
        "points": [
          "Erstes O: 51,50.",
          "Danach O51,00 und O50,50."
        ]
      }
    ],
    "prompt": "Wo steht das erste O der zweiten Spalte?",
    "answers": [
      {
        "label": "Nur bei 50,50 Euro.",
        "explanation": "Das wäre nur das letzte der drei neuen O."
      },
      {
        "label": "Bei 51,50 Euro.",
        "explanation": "Eine Stufe unter dem alten obersten X."
      },
      {
        "label": "Bei 52,00 Euro.",
        "explanation": "Dieser Extremplatz wird in der Gegenrichtung nicht dupliziert."
      }
    ],
    "correct": 1,
    "rule": "Trenne den alten Messpunkt vom ersten Zeichen der Umkehrspalte.",
    "diagram": null
  },
  {
    "title": "Mit G6 die O-Spalte weiter nach unten verlängern",
    "summary": "Eine Fortsetzung braucht keine neue Spalte.",
    "paragraphs": [
      "G6 erreicht 50,00. Das tiefste O liegt bislang bei 50,50. Die nächste Stufe darunter ist 50,00 und wird genau erreicht. Nora ergänzt ein O in der vorhandenen zweiten Spalte.",
      "Diese Spalte enthält jetzt O bei 51,50; 51,00; 50,50 und 50,00. Drei O wurden durch G5 erzeugt, das vierte durch G6. Der tiefste gezeichnete Punkt ist nun50,00.",
      "Die nächste Abwärtsfortsetzung wäre bei49,50 möglich. Eine neue X-Spalte würde hingegen erst bei50,00 plus1,50 gleich51,50 beginnen. Je nach Richtung gibt es also unterschiedliche nächste Schwellen. Die jüngste gezeichnete Spitze der Spalte bestimmt die Rechnung."
    ],
    "columns": [
      {
        "title": "O-Spalte nach G6",
        "tone": "neutral",
        "points": [
          "Vier O insgesamt.",
          "Tiefstes O:50,00."
        ]
      },
      {
        "title": "Nächste Bedingungen",
        "tone": "positive",
        "points": [
          "Weiteres O ab49,50.",
          "Neue X-Spalte ab51,50."
        ]
      }
    ],
    "prompt": "Was zeichnet G6 neu?",
    "answers": [
      {
        "label": "Eine dritte O-Spalte.",
        "explanation": "Fortsetzungen beginnen bei uns keine neue Spalte."
      },
      {
        "label": "Drei X.",
        "explanation": "G6 bewegt sich abwärts, nicht zur Aufwärtsumkehr."
      },
      {
        "label": "Ein O bei50,00 in Spalte2.",
        "explanation": "Die Abwärtsrichtung wird in derselben Spalte fortgesetzt."
      }
    ],
    "correct": 2,
    "rule": "Verlängere eine gleichgerichtete Bewegung in der bestehenden Spalte.",
    "diagram": "rc6-columns"
  },
  {
    "title": "G7 und G8 an der Aufwärtsumkehr unterscheiden",
    "summary": "Die Gegenbewegung wird jetzt vom tiefsten O gerechnet.",
    "paragraphs": [
      "G7 liegt bei51,00. Vom tiefsten O50,00 sind das zwei Kästchen beziehungsweise ein Euro aufwärts. Unsere Umkehrzahl beträgt aber drei. Das Bild bleibt deshalb nach G7 unverändert.",
      "G8 liegt bei51,50 und erfüllt die Aufwärtsumkehr genau. Die dritte Spalte wird eine X-Spalte. Ihr erstes X liegt eine Stufe über dem alten O-Tief: bei50,50. Danach folgen X51,00 und X51,50.",
      "Die fünf Sekunden zwischen G7 und G8 ändern nichts an der Preisregel. G8 kann drei X zugleich auslösen, auch wenn kurz davor noch kein neues Zeichen entstand. Nora prüft den Preisabstand und zählt nicht einfach die vergangenen Sekunden oder Meldungen."
    ],
    "columns": [
      {
        "title": "G7 bei51,00",
        "tone": "neutral",
        "points": [
          "Zwei Kästchen über O50,00.",
          "Noch keine Umkehr."
        ]
      },
      {
        "title": "G8 bei51,50",
        "tone": "positive",
        "points": [
          "Drei Kästchen über O50,00.",
          "X50,50 / X51,00 / X51,50."
        ]
      }
    ],
    "prompt": "Welche Meldung beginnt Spalte3?",
    "answers": [
      {
        "label": "G8 bei51,50.",
        "explanation": "Sie erreicht die volle Aufwärtsumkehr."
      },
      {
        "label": "G7 bei51,00.",
        "explanation": "Zwei Kästchen reichen im Hauptmodell nicht."
      },
      {
        "label": "Jede Meldung nach G6.",
        "explanation": "Zeitfolge allein erzeugt keinen Richtungswechsel."
      }
    ],
    "correct": 0,
    "rule": "Prüfe eine Aufwärtsumkehr vom tiefsten gezeichneten O.",
    "diagram": "rc6-columns"
  },
  {
    "title": "Mit G9 die dritte Spalte um zwei X erweitern",
    "summary": "Ein neues Hoch kann mehrere volle Rasterstufen erreichen.",
    "paragraphs": [
      "Nach G8 liegt das oberste X der dritten Spalte bei51,50. G9 wird zu52,50 gemeldet. Es erreicht die nächsten beiden Stufen52,00 und52,50. Beide werden in derselben X-Spalte ergänzt.",
      "Die dritte Spalte enthält jetzt fünf X:50,50;51,00;51,50;52,00;52,50. Ihr oberstes X liegt ein Kästchen über dem obersten X der ersten Spalte bei52,00. Das ist ein Vergleich zweier gezeichneter Spaltenextreme.",
      "Dieser höhere Rasterpunkt ist keine Garantie für weiter steigende Preise. Nora kann das neue gezeichnete Hoch benennen, ohne daraus einen sicheren Kauf abzuleiten. Für die nächste Umkehr misst sie jetzt von52,50 aus, weil die aktuelle X-Spalte weiter gewachsen ist."
    ],
    "columns": [
      {
        "title": "Spalte3 vor G9",
        "tone": "neutral",
        "points": [
          "Drei X bis51,50.",
          "Nächste Stufe52,00."
        ]
      },
      {
        "title": "Spalte3 nach G9",
        "tone": "positive",
        "points": [
          "Fünf X bis52,50.",
          "Umkehrschwelle jetzt51,00."
        ]
      }
    ],
    "prompt": "Wie viele X hat Spalte3 nach G9 insgesamt?",
    "answers": [
      {
        "label": "Sieben X.",
        "explanation": "Eine zusätzliche neue Spalte wird hier nicht begonnen."
      },
      {
        "label": "Fünf X.",
        "explanation": "Drei vorhandene plus zwei neue X ergeben fünf."
      },
      {
        "label": "Nur zwei X.",
        "explanation": "Zwei ist die Anzahl der neuen Zeichen, nicht der gesamten Spalte."
      }
    ],
    "correct": 1,
    "rule": "Unterscheide neue Zeichen von der Gesamtzahl einer Spalte.",
    "diagram": "rc6-columns"
  },
  {
    "title": "G10 beginnt die vierte Spalte und G11 verlängert sie",
    "summary": "Ein gewachsenes Extrem verändert die Umkehrschwelle.",
    "paragraphs": [
      "Das oberste X liegt jetzt bei52,50. Drei Kästchen darunter liegt51,00. G10 wird genau dort gemeldet und löst eine neue O-Spalte aus. Ihre ersten O stehen bei52,00;51,50 und51,00.",
      "G11 liegt bei50,50 und erweitert diese vierte Spalte um ein weiteres O. Sie enthält nun vier O, ihr tiefstes Zeichen steht bei50,50. Die nächste Aufwärtsumkehr würde erst bei52,00 beginnen.",
      "G12 bei51,50 liegt einen Euro über dem tiefsten O. Das sind nur zwei Kästchen. Es entsteht daher keine fünfte Spalte im Hauptmodell. Der letzte Geschäftspreis51,50 und das letzte gezeichnete O50,50 sind nach G12 verschiedene Werte."
    ],
    "columns": [
      {
        "title": "Spalte4",
        "tone": "neutral",
        "points": [
          "G10: O52,00 / O51,50 / O51,00.",
          "G11 ergänzt O50,50."
        ]
      },
      {
        "title": "Nach G12",
        "tone": "positive",
        "points": [
          "Letzter Geschäftspreis51,50.",
          "Letztes gezeichnetes O50,50."
        ]
      }
    ],
    "prompt": "Welche Werte gelten direkt nach G12?",
    "answers": [
      {
        "label": "Beide Werte müssen51,50 sein.",
        "explanation": "Der aktuelle Einzelpreis kann vom gezeichneten Extrem abweichen."
      },
      {
        "label": "Es gibt schon eine fünfte X-Spalte.",
        "explanation": "Für diese fehlen im Hauptmodell noch0,50 Euro."
      },
      {
        "label": "Letzter Geschäftspreis51,50; tiefstes aktuelles O50,50.",
        "explanation": "G12 erreicht die neue Umkehrschwelle noch nicht."
      }
    ],
    "correct": 2,
    "rule": "Berichte letzten Geschäftspreis und aktuellen Rasterrand getrennt.",
    "diagram": "rc6-columns"
  },
  {
    "title": "Vier Spalten und siebzehn Zeichen nachzählen",
    "summary": "Zeichenanzahl ist weder Meldungszahl noch Volumen.",
    "paragraphs": [
      "Nora zählt die fertige Aufnahme nach G12: Die erste X-Spalte hat vier Zeichen, die zweite O-Spalte vier, die dritte X-Spalte fünf und die vierte O-Spalte vier. Die Summe beträgt4 +4 +5 +4 =17 Zeichen.",
      "Die ursprüngliche Liste enthält zwölf Meldungen. Einige ergänzen mehrere Zeichen; andere ergänzen keines. Deshalb müssen Meldungszahl und Zeichenanzahl nicht übereinstimmen. Auch die aktuelle Spalte ist kein zeitlich abgeschlossener Minutenbar; spätere Meldungen könnten sie noch verlängern oder umkehren.",
      "Für die Aktienmenge fehlen weiterhin Daten. Ein gedachter Auftrag darf zudem nicht automatisch auf einer gezeichneten Rasterstufe als ausgeführt gelten. Zum Beispiel ist52,00 in unserer Liste kein eigener Geschäftspreis. Ein Rasterzeichen schafft weder ein Angebot noch eine persönliche Zuteilung."
    ],
    "columns": [
      {
        "title": "Zeichnung",
        "tone": "neutral",
        "points": [
          "Spaltenfolge X/O/X/O.",
          "Zeichenanzahlen4/4/5/4; gesamt17."
        ]
      },
      {
        "title": "Originaldaten",
        "tone": "positive",
        "points": [
          "Zwölf Meldungen.",
          "Gesamtmenge unbekannt; eigene Ausführungen nicht belegt."
        ]
      }
    ],
    "prompt": "Wie viele P&F-Zeichen zeigt die Aufnahme?",
    "answers": [
      {
        "label": "17 Zeichen.",
        "explanation": "Vier plus vier plus fünf plus vier ergibt siebzehn."
      },
      {
        "label": "Zwölf Zeichen zwingend.",
        "explanation": "Zwölf ist die Meldungszahl."
      },
      {
        "label": "17 gehandelte Aktien.",
        "explanation": "Zeichen sind keine Mengenbelege."
      }
    ],
    "correct": 0,
    "rule": "Zähle Rasterzeichen, Meldungen und Aktien als unterschiedliche Größen.",
    "diagram": "rc6-columns"
  },
  {
    "title": "Die nächsten Schwellen vom aktuellen O-Tief bestimmen",
    "summary": "Eine Fortsetzung und eine Umkehr liegen auf verschiedenen Seiten.",
    "paragraphs": [
      "Nach G12 liegt das tiefste O der aktuellen Spalte bei50,50. Die nächste Abwärtsstufe liegt bei50,00. Ein Preis von50,00 oder darunter könnte die O-Spalte fortsetzen. Ein kleiner Rückgang auf50,25 erreicht diese volle Stufe noch nicht.",
      "Die Aufwärtsumkehr liegt bei50,50 plus3 ×0,50 gleich52,00. G12 bei51,50 erreicht diese Grenze nicht. Ein getrennter Prüfpreis51,99 ebenfalls nicht;52,00 würde genau genügen.",
      "Diese Schwellen stammen vom gezeichneten O-Tief, nicht vom zuletzt gemeldeten Preis51,50. Das Schaubild zeigt ausdrücklich den Zustand nach G12. Nora verschiebt den Rechenanker nicht bei jeder kleinen Bewegung, solange kein neues gezeichnetes Extrem entsteht."
    ],
    "columns": [
      {
        "title": "Abwärtsfortsetzung",
        "tone": "neutral",
        "points": [
          "Aktuelles O-Tief50,50.",
          "Nächstes O ab50,00."
        ]
      },
      {
        "title": "Aufwärtsumkehr",
        "tone": "positive",
        "points": [
          "50,50 +1,50 =52,00.",
          "G12 bei51,50 genügt noch nicht."
        ]
      }
    ],
    "prompt": "Welche Grenze beginnt die nächste X-Spalte?",
    "answers": [
      {
        "label": "53,00 Euro.",
        "explanation": "Das wäre fälschlich vom letzten Einzelpreis51,50 gerechnet."
      },
      {
        "label": "52,00 Euro.",
        "explanation": "Drei Kästchen über dem aktuellen O-Tief50,50."
      },
      {
        "label": "51,50 Euro.",
        "explanation": "Das sind erst zwei Kästchen."
      }
    ],
    "correct": 1,
    "rule": "Berechne nächste Schwellen vom aktuellen gezeichneten Extrem.",
    "diagram": "rc6-threshold"
  },
  {
    "title": "Gleich breite Spalten bedeuten keine gleich langen Zeiten",
    "summary": "P&F verschiebt sich bei Umkehr, nicht nach einem festen Uhrentakt.",
    "paragraphs": [
      "Die erste Spalte beginnt mit G2 bei09:00:20. Die zweite beginnt mit G5 bei09:01:20, die dritte mit G8 bei09:03:05 und die vierte mit G10 bei09:04:20. Diese Zeiten stammen aus den bekannten Auslösern der neuen Spalten.",
      "Zwischen diesen Spaltenanfängen liegen60,105 und75 Sekunden. Trotzdem stehen die Spalten im P&F-Bild in gleichen horizontalen Abständen. Der Abstand im Bild zeigt die Reihenfolge, keine gleichmäßig laufende Uhr.",
      "Auch eine sehr lange unveränderte Phase könnte ohne neue Spalte vergehen. Datumshinweise oder Zeitlabels können zusätzliche Information geben, machen die Spaltenbreite aber nicht zu einer festen Dauer. Nora greift für genaue Zeitfragen auf die Originalzeitstempel zurück."
    ],
    "columns": [
      {
        "title": "Bildabstand",
        "tone": "neutral",
        "points": [
          "Spalten stehen gleich weit auseinander.",
          "Bedeutung: Reihenfolge der Umkehrspalten."
        ]
      },
      {
        "title": "Bekannte Startabstände",
        "tone": "positive",
        "points": [
          "60 /105 /75 Sekunden.",
          "Keine feste Spaltendauer."
        ]
      }
    ],
    "prompt": "Was bedeuten gleich breite P&F-Spalten hier?",
    "answers": [
      {
        "label": "Jede Spalte dauert eine Minute.",
        "explanation": "Das widerspricht den bekannten Startzeiten."
      },
      {
        "label": "Die Handelsgeschwindigkeit ist identisch.",
        "explanation": "Diese Größe folgt nicht aus gleichen Bildabständen."
      },
      {
        "label": "Gleiche Zeichnungsabstände, keine gleichen Zeitdauern.",
        "explanation": "Die Originalzeitstempel ergeben unterschiedliche Abstände."
      }
    ],
    "correct": 2,
    "rule": "Verwechsle Spaltenabstand nicht mit einem gleichmäßigen Zeitmaß.",
    "diagram": null
  },
  {
    "title": "Ein unverändertes Bild kann neue Geschäfte ausblenden",
    "summary": "Keine neue Rasterstufe bedeutet keine vollständige Handelsruhe.",
    "paragraphs": [
      "G4, G7 und G12 verändern unser Hauptbild nicht. Sie sind trotzdem echte Meldungen innerhalb des erfundenen Datensatzes. Ihre Preise erreichen weder eine neue Fortsetzungsstufe noch die erforderliche Umkehr.",
      "In einem getrennten Beispiel könnten zwanzig weitere Meldungen immer bei51,50 liegen. Solange der Zustand nach G12 und unsere Regeln gelten, würde keine davon das Bild erweitern. Ihre Mengen könnten klein oder groß sein; diese Angaben sind eine andere Datenart.",
      "Nora darf deshalb aus einem unveränderten P&F-Bild nicht schließen, dass keine Aktien gehandelt wurden oder dass genau null Sekunden vergingen. Die Zeichnung beantwortet eine Preisrasterfrage. Für Aktivität, Mengen und vergangene Zeit braucht sie zusätzliche Daten."
    ],
    "columns": [
      {
        "title": "Im Raster unverändert",
        "tone": "neutral",
        "points": [
          "Keine neue volle Stufe.",
          "Keine vollständige Umkehr."
        ]
      },
      {
        "title": "Trotzdem möglich",
        "tone": "positive",
        "points": [
          "Weitere Meldungen und vergangene Zeit.",
          "Gehandelte Mengen außerhalb der Zeicheninformation."
        ]
      }
    ],
    "prompt": "Was beweist ein unverändertes P&F-Bild?",
    "answers": [
      {
        "label": "Keine Meldung hat die nächste Zeichenbedingung erfüllt.",
        "explanation": "Unter den bekannten Eingaben blieb nur die Zeichnung unverändert."
      },
      {
        "label": "Es gab keine Geschäfte.",
        "explanation": "Mehrere Hauptfallmeldungen liefern Gegenbeispiele."
      },
      {
        "label": "Der Umsatz war exakt null.",
        "explanation": "Mengen lassen sich aus den Zeichen allein nicht ablesen."
      }
    ],
    "correct": 0,
    "rule": "Lies weggefilterte Preisbewegungen nicht als fehlende Handelsaktivität.",
    "diagram": null
  },
  {
    "title": "Eine größere Kästchengröße mit gleichen Daten prüfen",
    "summary": "Ein anderes Raster ergibt eine andere Verdichtung.",
    "paragraphs": [
      "Für eine getrennte Variante hält Nora den Anker50,00, die zwölf Meldungen und die Umkehrzahl drei fest. Sie vergrößert nur das Kästchen auf1,00 Euro. G2 bei50,50 erzeugt jetzt noch keine erste Richtung.",
      "G3 bei52,10 beginnt eine X-Spalte mit X51,00 und X52,00. Für eine neue O-Spalte müsste der Preis drei Ein-Euro-Kästchen unter52,00 fallen, also49,00 erreichen. Das tut keine unserer Meldungen. G9 bei52,50 erreicht auch das nächste X53,00 nicht.",
      "Die Variante zeigt deshalb nur eine X-Spalte mit zwei Zeichen. Das Hauptmodell zeigt vier Spalten mit17 Zeichen. Der Vergleich beschreibt diesen Datensatz; er beweist weder eine allgemein bessere Einstellung noch eine höhere Trefferquote. Nora ändert beim Vergleich bewusst nur eine Einstellung."
    ],
    "columns": [
      {
        "title": "Hauptfall0,50 ×3",
        "tone": "neutral",
        "points": [
          "Umkehrentfernung1,50 Euro.",
          "Vier Spalten,17 Zeichen."
        ]
      },
      {
        "title": "Variante1,00 ×3",
        "tone": "positive",
        "points": [
          "Umkehrentfernung3,00 Euro.",
          "Eine X-Spalte:51,00 und52,00."
        ]
      }
    ],
    "prompt": "Welche Zeichnung ergibt die Ein-Euro-Variante?",
    "answers": [
      {
        "label": "Drei Spalten, weil die Umkehrzahl drei ist.",
        "explanation": "Die Umkehrzahl legt keine Spaltenanzahl fest."
      },
      {
        "label": "Eine X-Spalte mit zwei Zeichen.",
        "explanation": "Keine Abwärtsumkehr erreicht49,00 und keine Fortsetzung erreicht53,00."
      },
      {
        "label": "Dieselben17 Zeichen.",
        "explanation": "Die Kästchengröße verändert die erreichbaren Stufen."
      }
    ],
    "correct": 1,
    "rule": "Vergleiche andere Raster mit gleichen Originaldaten und klaren Einstellungen.",
    "diagram": null
  },
  {
    "title": "Eine kleinere Umkehrzahl verändert den letzten Zustand",
    "summary": "Die Kästchengröße kann gleich bleiben, während Spalten früher wechseln.",
    "paragraphs": [
      "Nora testet eine zweite getrennte Variante: Kästchengröße0,50 und Anker50,00 bleiben gleich, aber die Umkehrzahl sinkt von drei auf zwei. Die Umkehrentfernung beträgt jetzt einen Euro.",
      "In dieser Variante reicht G7 bei51,00 bereits zur Umkehr vom O-Tief50,00. Später erreicht G12 bei51,50 genau einen Euro über dem O-Tief50,50. Es entsteht eine fünfte X-Spalte mit X51,00 und X51,50.",
      "Im Hauptfall mit drei Kästchen gibt es nach G12 dagegen vier Spalten. Die kleinere Umkehrzahl lässt bestimmte Gegenbewegungen früher als neue Spalte erscheinen. Das ist eine andere Filterung, kein automatischer Qualitätsgewinn. Für Vergleiche nennt Nora beide Einstellwerte zusammen."
    ],
    "columns": [
      {
        "title": "Drei-Kästchen-Hauptfall",
        "tone": "neutral",
        "points": [
          "Umkehrentfernung1,50.",
          "Nach G12 vier Spalten."
        ]
      },
      {
        "title": "Zwei-Kästchen-Variante",
        "tone": "positive",
        "points": [
          "Umkehrentfernung1,00.",
          "Nach G12 fünfte X-Spalte51,00 /51,50."
        ]
      }
    ],
    "prompt": "Was verändert G12 in der Zwei-Kästchen-Variante?",
    "answers": [
      {
        "label": "Es verändert auch im Hauptfall die Spalte.",
        "explanation": "Dort braucht die Gegenbewegung1,50 Euro."
      },
      {
        "label": "Es erhöht die Aktienmenge.",
        "explanation": "Eine andere Zeichenregel schafft keine neuen Aktien."
      },
      {
        "label": "Es beginnt eine fünfte X-Spalte.",
        "explanation": "Ein Euro Gegenbewegung genügt in dieser Variante."
      }
    ],
    "correct": 2,
    "rule": "Unterscheide Kästchengröße und Umkehrzahl bei jedem Vergleich.",
    "diagram": null
  },
  {
    "title": "Schlussmethode und Hoch-Tief-Methode auseinanderhalten",
    "summary": "Die Eingabeart entscheidet, welche Informationen verarbeitet werden.",
    "paragraphs": [
      "Unser Hauptmodell verarbeitet einzelne Meldungen in bekannter Reihenfolge. Eine andere Methode könnte nur abgeschlossene Minutenschlüsse verwenden. Zwischenhoch und Zwischentief wären dann keine eigenen Eingaben. Wir nennen dies hier Schlussmethode.",
      "Eine ebenfalls mögliche Hoch-Tief-Methode braucht eine zusätzliche Prioritätsregel. In der hier erklärten Variante wird zuerst geprüft, ob das Hoch eine X-Spalte verlängert. Wenn ja, wird das Tief dieses Abschnitts nicht zusätzlich zur Umkehr benutzt. Erst ohne neue X wird das Tief auf Umkehr geprüft; bei O gilt die spiegelbildliche Regel.",
      "Im getrennten Beispiel steht bereits eine X-Spalte bis52,00. Ein Abschnitt mit O52,00/H53,00/L50,00/C52,00 verlängert nach dieser Hoch-Tief-Regel bis53,00. Die Schlussmethode bleibt bei52,00 unverändert. Die zwei Methoden beantworten unterschiedliche Verdichtungsfragen."
    ],
    "columns": [
      {
        "title": "Nur Schluss52,00",
        "tone": "neutral",
        "points": [
          "Bestehende X-Spalte bis52,00.",
          "Kein neues Zeichen."
        ]
      },
      {
        "title": "Hoch-Tief-Priorität",
        "tone": "positive",
        "points": [
          "H53,00 verlängert zuerst X.",
          "L50,00 wird in diesem Abschnitt nicht zusätzlich verarbeitet."
        ]
      }
    ],
    "prompt": "Was macht die erklärte Hoch-Tief-Regel im getrennten Beispiel?",
    "answers": [
      {
        "label": "Sie verlängert X bis53,00 und verarbeitet das Tief nicht zusätzlich.",
        "explanation": "Die Fortsetzung hat hier ausdrücklich Vorrang."
      },
      {
        "label": "Sie verarbeitet automatisch Hoch und Tief in echter Reihenfolge.",
        "explanation": "OHLC verrät diese Reihenfolge nicht."
      },
      {
        "label": "Sie ignoriert auch das neue Hoch.",
        "explanation": "Das Hoch erreicht volle neue Aufwärtsstufen."
      }
    ],
    "correct": 0,
    "rule": "Nenne Eingabeart und Prioritätsregel, statt verschiedene P&F-Methoden zu vermischen.",
    "diagram": "rc6-methods"
  },
  {
    "title": "Gleiche OHLC-Werte legen keine genaue Zeichenfolge fest",
    "summary": "Hoch zuerst oder Tief zuerst kann andere Rasterextreme ergeben.",
    "paragraphs": [
      "Im selben getrennten Ausgangszustand steht eine X-Spalte bis52,00. Nun verarbeitet Nora zwei vollständige Einzelpreisfolgen mit Anker50,00, Kästchen0,50 und Drei-Kästchen-Umkehr. Folge A lautet52,00 →53,00 →50,00 →52,00. Folge B lautet52,00 →50,00 →53,00 →52,00.",
      "Beide Folgen haben O52,00, H53,00, L50,00 und C52,00. In A wird die alte X-Spalte zuerst bis53,00 erweitert; nach der Abwärtsbewegung entsteht zuletzt eine X-Spalte bis52,00. In B bleibt die alte X-Spalte bis52,00; die letzte X-Spalte wächst bis53,00.",
      "Der abschließende Rückgang auf52,00 ist in B für eine Umkehr von53,00 aus zu klein. Gleiche OHLC-Werte und gleicher letzter Originalpreis führen also nicht zwingend zum gleichen letzten Rasterrand. Eine angenommene Reihenfolge muss Nora ausdrücklich als zusätzliche Annahme nennen."
    ],
    "columns": [
      {
        "title": "Einzelpreisfolge A",
        "tone": "neutral",
        "points": [
          "52 →53 →50 →52.",
          "Letzte X-Spalte bis52."
        ]
      },
      {
        "title": "Einzelpreisfolge B",
        "tone": "positive",
        "points": [
          "52 →50 →53 →52.",
          "Letzte X-Spalte bis53."
        ]
      }
    ],
    "prompt": "Warum unterscheiden sich die letzten Rasterränder?",
    "answers": [
      {
        "label": "Weil OHLC die Zwischenfolge eindeutig bestimmt.",
        "explanation": "Die zeitliche Reihenfolge der Extreme fehlt in OHLC."
      },
      {
        "label": "Hoch und Tief treten in anderer Reihenfolge auf.",
        "explanation": "Die Einzelpreisfolge enthält mehr Information als vier Kennwerte."
      },
      {
        "label": "Weil die Originalschlüsse verschieden sind.",
        "explanation": "Beide schließen bei52,00."
      }
    ],
    "correct": 1,
    "rule": "Kennzeichne jede angenommene Zwischenfolge als zusätzliche Information.",
    "diagram": "rc6-methods"
  },
  {
    "title": "Einen Bericht über die Preisverdichtung vollständig abgeben",
    "summary": "Originaldaten, Konstruktion und Grenzen gehören zusammen.",
    "paragraphs": [
      "Nora berichtet ihren Hauptfall: Zwölf geordnete Nivo-Meldungen werden mit Anker50,00, Kästchengröße0,50 und inklusiver Drei-Kästchen-Umkehr verarbeitet. Der Anker bekommt kein eigenes Zeichen. Die Spaltenfolge lautet X/O/X/O mit4/4/5/4 Zeichen.",
      "Nach G12 ist der letzte Originalpreis51,50, das aktuelle gezeichnete O-Tief aber50,50. Eine neue Abwärtsstufe liegt bei50,00, die nächste Aufwärtsumkehr bei52,00. Spaltenabstände sind keine Minutenabstände, Zeichenanzahl ist kein Volumen und eine Rasterstufe ist keine bestätigte eigene Ausführung.",
      "Sie ergänzt: Andere Kästchengrößen, Umkehrzahlen und Preisquellen ergeben andere Verdichtungen. Kein Bild garantiert die nächste Kursrichtung. Ein nachvollziehbarer Bericht hält deshalb Einstellungen und Grenzen fest. Als Nächstes untersucht Nora verschiedene Zeitebenen und ihre gemeinsamen Ausgangsdaten."
    ],
    "columns": [
      {
        "title": "Rekonstruierbarer Hauptfall",
        "tone": "neutral",
        "points": [
          "Zwölf Meldungen; vier Spalten;17 Zeichen.",
          "Anker, Kästchengröße und Umkehr genannt."
        ]
      },
      {
        "title": "Aussagegrenzen",
        "tone": "positive",
        "points": [
          "Zeit und Menge nicht aus Spaltenbreite ableiten.",
          "Berechnete Stufen garantieren weder Ausführung noch Zukunft."
        ]
      }
    ],
    "prompt": "Welche Aussage passt zum vollständigen Bericht?",
    "answers": [
      {
        "label": "Jedes Zeichen bestätigt eine eigene Ausführung.",
        "explanation": "Dazu fehlen Order- und Zuteilungsdaten."
      },
      {
        "label": "Vier gleich breite Spalten bedeuten vier Minuten.",
        "explanation": "Unsere Spalten entstehen nach Preisbedingungen."
      },
      {
        "label": "Letzter Originalpreis51,50; aktuelles O-Tief50,50.",
        "explanation": "Das unveränderte Raster und der letzte Geschäftspreis sind getrennte Angaben."
      }
    ],
    "correct": 2,
    "rule": "Berichte Originaldaten, Einstellungen, aktuellen Zustand und Grenzen gemeinsam.",
    "diagram": null
  }
];
export const chartsChapterSixLessons: Lesson[] = drafts.map((draft,index) => {
  const key=`reading-charts.chapter-06.lesson-${String(index+1).padStart(2,'0')}`;
  const methods=draft.diagram==='rc6-methods',threshold=draft.diagram==='rc6-threshold';
  return {
    id:key,title:draft.title,summary:draft.summary,
    sourceUnit:'Kapitel 6 · Point & Figure und regelbasierte Verdichtung',sourceAnchors:[draft.title],
    durationMinutes:6,xp:35,status:'published',
    steps:[
      {id:`${key}.explain`,type:'explanation',eyebrow:'Charts verstehen · Kapitel 6',title:draft.title,paragraphs:draft.paragraphs,callout:draft.rule},
      ...(draft.diagram?[{id:`${key}.diagram`,type:'diagram' as const,title:methods?'Gleiche Kennwerte, andere Eingaben':threshold?'Nächste Preisbedingungen nach G12':'Vier Spalten im eigenen P&F-Modell',scenario:draft.diagram as ChartScenarioId,caption:methods?'Getrennte Varianten ab bestehender X-Spalte bis52,00 · Euro je Aktie · Kästchen0,50, Umkehr3.':'Eigene Nivo-Aufnahme nach G12 · Euro je Aktie · Anker50,00, Kästchen0,50, Umkehr3.',observations:methods?['Original-O/H/L/C in beiden Folgen:52/53/50/52.','Letztes X-Extrem:Folge A52,00; Folge B53,00.']:threshold?['Aktuelles O-Tief50,50; nächstes O ab50,00.','Neue X-Spalte ab52,00; G12 bei51,50 genügt nicht.']:['Spaltenfolge X/O/X/O mit4/4/5/4 Zeichen.','Zwölf Originalmeldungen,17 Rasterzeichen; Mengen unbekannt.']}] : []),
      {id:`${key}.compare`,type:'comparison',title:'Das Beispiel auf einen Blick',columns:draft.columns.map(c=>({...c,tone:c.tone as 'neutral'|'positive'}))},
      {id:`${key}.question`,type:'question',title:'Kurz prüfen',prompt:draft.prompt,correctOptionId:`choice-${draft.correct}`,options:draft.answers.map((a,i)=>({id:`choice-${i}`,...a}))},
      {id:`${key}.recap`,type:'recap',title:'Das nimmst du mit',points:[draft.rule,draft.summary]},
    ],
  };
});
