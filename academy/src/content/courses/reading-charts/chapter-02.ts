import type { Lesson, ChartScenarioId } from '../../types';
const drafts = [
  {
    "title": "Vor dem Vergleich dieselben Daten wählen",
    "summary": "Ein Wechsel der Zeichnung darf nicht heimlich die Daten wechseln.",
    "paragraphs": [
      "Nora legt drei Bilder der erfundenen Vela-Aktie nebeneinander. Alle zeigen dieselben drei abgeschlossenen Minuten ab 09:00, dieselbe Uhr und gehandelte Preise in Euro je Aktie. Die Preisachse ist linear: Gleiche Preisabstände erhalten gleiche Bildabstände.",
      "Die erste Minute hat O50,00, H50,30, L49,80 und C50,20. Die zweite hat O50,40, H50,50, L50,10 und C50,15. Die dritte hat O50,10, H50,20, L49,90 und C50,10. O ist Eröffnung, H Hoch, L Tief und C Schluss. Diese Kennwerte sind der gemeinsame Ausgangspunkt.",
      "Für einen fairen Vergleich bleibt dieser Ausgangspunkt gleich. Nora ändert nur die Darstellung. Ein anderes Zeitfenster oder ein Wechsel vom letzten Geschäft zum Briefkurs wäre zusätzlich ein Datenwechsel. Dann lassen sich Unterschiede im Bild nicht allein mit dem Charttyp erklären."
    ],
    "columns": [
      {
        "title": "Gleiche Grundlage",
        "tone": "neutral",
        "points": [
          "Vela, Euro je Aktie, drei abgeschlossene Minuten.",
          "Dieselbe Datenart und dieselben Abschnittsgrenzen."
        ]
      },
      {
        "title": "Geänderte Darstellung",
        "tone": "positive",
        "points": [
          "Linie: ausgewählte Einzelwerte.",
          "OHLC-Balken und Kerze: vier Kennwerte."
        ]
      }
    ],
    "prompt": "Was muss für den reinen Vergleich der Charttypen gleich bleiben?",
    "answers": [
      {
        "label": "Die Daten und ihre Abschnittsgrenzen.",
        "explanation": "Richtig: Vergleiche Zeichenregeln erst auf einer gemeinsamen Datengrundlage."
      },
      {
        "label": "Nur die Hintergrundfarbe.",
        "explanation": "Farben sichern keine gemeinsame Datengrundlage."
      },
      {
        "label": "Nur der Name der Aktie.",
        "explanation": "Zeitfenster und Datenart könnten trotzdem verschieden sein."
      }
    ],
    "correct": 0,
    "rule": "Vergleiche Zeichenregeln erst auf einer gemeinsamen Datengrundlage.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Die Schlusslinie aus der Tabelle nachbauen",
    "summary": "Drei Schlusspunkte ergeben zwei Verbindungen.",
    "paragraphs": [
      "Nora liest für jede Minute nur den Schluss ab: 50,20, dann 50,15, dann 50,10. Für unsere Schlusslinie setzt sie je einen Punkt am zugehörigen Minutenplatz. Anschließend verbindet sie benachbarte Punkte mit geraden Strecken.",
      "Von Punkt eins zu Punkt zwei fällt der ausgewählte Preis um 0,05 Euro. Von Punkt zwei zu Punkt drei fällt er noch einmal um 0,05. Zwischen erstem und drittem Schluss beträgt die Änderung minus 0,10 Euro je Aktie.",
      "Die Linie liefert einen schnellen Überblick über diese ausgewählten Werte. Sie zeigt weder die Eröffnungen noch die Hochs und Tiefs als eigene Punkte. Der Schlusspunkt beschreibt den letzten vorhandenen Handel der Minute; unser Minutenplatz benennt ihren Abschnittsbeginn."
    ],
    "columns": [
      {
        "title": "Eingang",
        "tone": "neutral",
        "points": [
          "C1=50,20; C2=50,15; C3=50,10.",
          "Je ein ausgewählter Wert pro Minute."
        ]
      },
      {
        "title": "Ergebnis",
        "tone": "positive",
        "points": [
          "Drei Punkte und zwei Verbindungen.",
          "Letzter gegen ersten Schluss: −0,10 Euro."
        ]
      }
    ],
    "prompt": "Wie ändert sich der Schluss von Minute eins bis Minute drei?",
    "answers": [
      {
        "label": "Er steigt um 0,10 Euro.",
        "explanation": "50,10 liegt unter 50,20."
      },
      {
        "label": "Er fällt um 0,10 Euro je Aktie.",
        "explanation": "Richtig: Nenne bei Linienänderungen die beiden verglichenen Schlusspunkte."
      },
      {
        "label": "Er fällt um 0,50 Euro.",
        "explanation": "0,50 ist die Hoch-Tief-Spanne der ersten Minute."
      }
    ],
    "correct": 1,
    "rule": "Nenne bei Linienänderungen die beiden verglichenen Schlusspunkte.",
    "diagram": "rc1-line"
  },
  {
    "title": "Eine Verbindung ist kein Protokoll der Zwischenpreise",
    "summary": "Eine gerade Strecke zeichnet keine einzelnen Geschäfte nach.",
    "paragraphs": [
      "Die Linie verbindet 50,20 mit 50,15. Auf dem Papier durchläuft die Strecke viele Höhen zwischen diesen Werten. Diese Höhen sind keine zusätzlichen Geschäftsmeldungen. Sie entstehen durch die Zeichenregel.",
      "Die zweite Minute eröffnet bei 50,40 und erreicht sogar 50,50. Beide Werte liegen über den beiden genannten Schlusspunkten. Die Schlusslinie kann diese Bewegung verdecken, weil sie nur einen Wert pro Abschnitt auswählt.",
      "Nora darf deshalb schreiben: Die beiden Schlüsse liegen 0,05 auseinander. Sie darf aus der Verbindung nicht schreiben: Der Preis fiel während des ganzen Zeitraums gleichmäßig. Dafür bräuchte sie genauer aufgelöste Daten innerhalb der Abschnitte."
    ],
    "columns": [
      {
        "title": "Belegt",
        "tone": "neutral",
        "points": [
          "Schlüsse 50,20 und 50,15.",
          "Zweiter Minutenhöchstpreis 50,50 aus OHLC."
        ]
      },
      {
        "title": "Nicht durch die Strecke belegt",
        "tone": "positive",
        "points": [
          "Gleichmäßiger Preisweg.",
          "Ein Geschäft an jeder gezeichneten Zwischenhöhe."
        ]
      }
    ],
    "prompt": "Beweist die gerade Verbindung einen gleichmäßigen Preisrückgang?",
    "answers": [
      {
        "label": "Ja, jedes Pixel ist ein Geschäft.",
        "explanation": "Pixel werden gezeichnet; sie sind keine Meldungen."
      },
      {
        "label": "Ja, Hoch und Tief müssen auf der Strecke liegen.",
        "explanation": "Die zweite Minute erreicht 50,50 außerhalb der Schlussverbindung."
      },
      {
        "label": "Nein, sie verbindet nur ausgewählte Punkte.",
        "explanation": "Richtig: Lies eine Verbindung als Zeichnung zwischen Datenpunkten."
      }
    ],
    "correct": 2,
    "rule": "Lies eine Verbindung als Zeichnung zwischen Datenpunkten.",
    "diagram": "rc1-line"
  },
  {
    "title": "Bei einer Linie die ausgewählte Preisart prüfen",
    "summary": "Linie bedeutet nicht automatisch Schlusslinie.",
    "paragraphs": [
      "Unsere Linie verwendet ausdrücklich Schlusswerte. Eine andere Anzeige könnte stattdessen je Abschnitt die Eröffnung verbinden. Mit denselben Vela-Minuten wären ihre Punkte 50,00, 50,40 und 50,10.",
      "Von erster zu zweiter Eröffnung ergibt sich plus 0,40. Zwischen erstem und zweitem Schluss ergibt sich dagegen minus 0,05. Die Unterschiede entstehen durch die Auswahl innerhalb desselben Datensatzes. Keine der beiden Rechnungen widerspricht der anderen.",
      "Nora prüft die Einstellung oder Beschriftung. Sie nennt ihre Linie eine Schlusslinie, wenn Schlusswerte ausgewählt sind. Bei einer unbekannten Linie lässt sie die Preisart offen, bis sie die verwendete Regel kennt. Das gezeigte Schaubild bleibt unsere Schlusslinie."
    ],
    "columns": [
      {
        "title": "Schlusslinie",
        "tone": "neutral",
        "points": [
          "50,20 → 50,15 → 50,10.",
          "Erster Vergleich −0,05."
        ]
      },
      {
        "title": "Getrennte Eröffnungslinie",
        "tone": "positive",
        "points": [
          "50,00 → 50,40 → 50,10.",
          "Erster Vergleich +0,40."
        ]
      }
    ],
    "prompt": "Welche Punkte hätte eine Linie aus den drei Eröffnungen?",
    "answers": [
      {
        "label": "50,00; 50,40; 50,10.",
        "explanation": "Richtig: Prüfe bei einer Linie, welcher Wert pro Abschnitt ausgewählt wird."
      },
      {
        "label": "50,20; 50,15; 50,10.",
        "explanation": "Das sind die Schlusswerte."
      },
      {
        "label": "50,30; 50,50; 50,20.",
        "explanation": "Das sind die Hochs."
      }
    ],
    "correct": 0,
    "rule": "Prüfe bei einer Linie, welcher Wert pro Abschnitt ausgewählt wird.",
    "diagram": null
  },
  {
    "title": "Die vier Balkenmarkierungen zuordnen",
    "summary": "Ein OHLC-Balken zeigt Preise durch Striche.",
    "paragraphs": [
      "Nora zeichnet die erste Minute als OHLC-Balken. Ein senkrechter Strich reicht von 49,80 bis 50,30. Ein kurzer Strich links steht auf 50,00, ein kurzer Strich rechts auf 50,20.",
      "Die Enden des langen Strichs zeigen Tief und Hoch. Der linke Querstrich zeigt Eröffnung, der rechte Schluss. Das Links und Rechts der Querstriche ist eine Kennzeichnung innerhalb eines Balkens. Ihre Länge entspricht keiner Zahl gehandelter Aktien.",
      "Nora liest zuerst alle vier Preise ab. Dann prüft sie ihre Bedeutung. Nur aus dem langen Strich kennt sie die gesamte Preisspanne. Für den Unterschied zwischen Anfang und Ende braucht sie zusätzlich die Querstriche."
    ],
    "columns": [
      {
        "title": "Langer Strich",
        "tone": "neutral",
        "points": [
          "Oben H50,30, unten L49,80.",
          "Spanne 0,50 Euro."
        ]
      },
      {
        "title": "Querstriche",
        "tone": "positive",
        "points": [
          "Links O50,00.",
          "Rechts C50,20."
        ]
      }
    ],
    "prompt": "Was zeigt der linke Querstrich in unserem OHLC-Balken?",
    "answers": [
      {
        "label": "Den Schluss 50,20.",
        "explanation": "Der Schluss ist rechts markiert."
      },
      {
        "label": "Die Eröffnung 50,00.",
        "explanation": "Richtig: Lies Hoch und Tief an den Enden, Eröffnung links und Schluss rechts."
      },
      {
        "label": "Das Tief 49,80.",
        "explanation": "Das Tief ist das untere Ende des langen Strichs."
      }
    ],
    "correct": 1,
    "rule": "Lies Hoch und Tief an den Enden, Eröffnung links und Schluss rechts.",
    "diagram": "rc1-bar"
  },
  {
    "title": "Einen HLC-Balken nicht um eine Eröffnung ergänzen",
    "summary": "Eine fehlende Markierung ist eine fehlende Angabe.",
    "paragraphs": [
      "In einer getrennten Variante zeichnet Nora nur Hoch, Tief und Schluss der ersten Minute: H50,30, L49,80 und C50,20. Die Darstellung heißt HLC, weil die Eröffnung O nicht enthalten ist. Der linke Eröffnungsstrich fehlt.",
      "Die gesamte Spanne bleibt mit 0,50 berechenbar. Die Körperhöhe einer entsprechenden Kerze wäre aus diesen drei Angaben allein nicht berechenbar. Dafür fehlt die Eröffnung. Sie ist zwar in unserer vollständigen Tabelle bekannt, aber nicht durch das HLC-Bild belegt.",
      "Nora trennt ablesbare Angaben von zusätzlichem Wissen. Hat sie nur das HLC-Bild, kann sie O nicht als 50,00 bestätigen. Aus einer Markierung, die nicht gezeichnet ist, entsteht kein Preis von null Euro."
    ],
    "columns": [
      {
        "title": "HLC enthält",
        "tone": "neutral",
        "points": [
          "Hoch, Tief und Schluss.",
          "Spanne bleibt berechenbar."
        ]
      },
      {
        "title": "HLC lässt offen",
        "tone": "positive",
        "points": [
          "Eröffnung ohne weitere Daten.",
          "Schluss minus Eröffnung."
        ]
      }
    ],
    "prompt": "Welche Angabe fehlt in einem HLC-Balken?",
    "answers": [
      {
        "label": "Der Schluss.",
        "explanation": "C steht für Schluss und ist enthalten."
      },
      {
        "label": "Das Hoch.",
        "explanation": "H steht für Hoch und ist enthalten."
      },
      {
        "label": "Die Eröffnung.",
        "explanation": "Richtig: Ergänze einen fehlenden Kennwert nur aus einer weiteren belegten Quelle."
      }
    ],
    "correct": 2,
    "rule": "Ergänze einen fehlenden Kennwert nur aus einer weiteren belegten Quelle.",
    "diagram": null
  },
  {
    "title": "Vom OHLC-Balken zur Kerze wechseln",
    "summary": "Der Körper hebt zwei der vier Preise hervor.",
    "paragraphs": [
      "Die erste Minute wird jetzt als Kerze gezeichnet. Der Körper reicht von O50,00 bis C50,20. Der obere Schatten reicht von 50,20 bis H50,30. Der untere Schatten reicht von L49,80 bis 50,00.",
      "Die vier Preiskennwerte bleiben gleich. Eine vollständige normale OHLC-Kerze und ein vollständiger OHLC-Balken enthalten dieselben vier Preise. Die Kerze betont den Abstand zwischen Eröffnung und Schluss durch eine breite Fläche.",
      "Der Wechsel macht die Daten anders lesbar. Er fügt aber keine Geschäfte hinzu und verrät keine Reihenfolge zwischen Hoch und Tief. Diese Gleichheit gilt für unsere gewöhnlichen OHLC-Kerzen. Berechnete Darstellungen werden später gesondert behandelt."
    ],
    "columns": [
      {
        "title": "Balken",
        "tone": "neutral",
        "points": [
          "O50,00 links, C50,20 rechts.",
          "Senkrechte Spanne 49,80 bis 50,30."
        ]
      },
      {
        "title": "Kerze",
        "tone": "positive",
        "points": [
          "Körper 50,00 bis 50,20.",
          "Schatten enden ebenfalls bei 49,80 und 50,30."
        ]
      }
    ],
    "prompt": "Welche neue Preisangabe entsteht beim Wechsel von OHLC-Balken zur normalen Kerze?",
    "answers": [
      {
        "label": "Keine; beide zeigen dieselben vier Kennwerte.",
        "explanation": "Richtig: Wechsle die Zeichenform, ohne ihr zusätzliche Daten zuzuschreiben."
      },
      {
        "label": "Die Reihenfolge von Hoch und Tief.",
        "explanation": "Diese Reihenfolge steckt in keinem der beiden OHLC-Bilder."
      },
      {
        "label": "Der aktuelle Briefkurs.",
        "explanation": "Ein Wechsel der Zeichnung liefert keine neuen Angebotsdaten."
      }
    ],
    "correct": 0,
    "rule": "Wechsle die Zeichenform, ohne ihr zusätzliche Daten zuzuschreiben.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Eine fallende Kerze zurück in vier Zahlen übersetzen",
    "summary": "Die Körpergrenzen tauschen bei fallendem Schluss ihre Rollen.",
    "paragraphs": [
      "Die zweite Minute eröffnet bei 50,40 und schließt bei 50,15. Deshalb liegt die Eröffnung am oberen Körperrand und der Schluss am unteren. Das Hoch liegt bei 50,50, das Tief bei 50,10.",
      "Der Körper ist 50,40 minus 50,15 gleich 0,25 Euro hoch. Der obere Schatten ist 50,50 minus 50,40 gleich 0,10. Der untere ist 50,15 minus 50,10 gleich 0,05. Zusammen ergeben sie die Spanne 0,40.",
      "Bei einer steigenden Kerze ist die Eröffnung unten am Körper. Bei dieser fallenden ist sie oben. Nora ordnet die Ränder deshalb mit der O-C-Regel zu. Hoch und Tief bleiben unabhängig davon an den äußeren Enden."
    ],
    "columns": [
      {
        "title": "Körper",
        "tone": "neutral",
        "points": [
          "Oben O50,40, unten C50,15.",
          "Körperhöhe 0,25."
        ]
      },
      {
        "title": "Schatten",
        "tone": "positive",
        "points": [
          "Oben 0,10, unten 0,05.",
          "Gesamtspanne 0,40."
        ]
      }
    ],
    "prompt": "Welcher Wert ist der obere Körperrand der zweiten Minute?",
    "answers": [
      {
        "label": "Das Hoch 50,50.",
        "explanation": "Es liegt am oberen Schattenende."
      },
      {
        "label": "Die Eröffnung 50,40.",
        "explanation": "Richtig: Ordne die Körpergrenzen nach dem Verhältnis von Eröffnung und Schluss zu."
      },
      {
        "label": "Der Schluss 50,15.",
        "explanation": "Er liegt an ihrem unteren Körperrand."
      }
    ],
    "correct": 1,
    "rule": "Ordne die Körpergrenzen nach dem Verhältnis von Eröffnung und Schluss zu.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Farben erst nach der Legende lesen",
    "summary": "Eine Farbe erhält ihre Bedeutung durch eine Regel.",
    "paragraphs": [
      "In unseren Bildern kennzeichnet die Farbe das Verhältnis von Schluss zu eigener Eröffnung. Minute eins endet höher als sie beginnt. Minute zwei endet niedriger. Zahlen und Beschriftungen ergänzen die Farben.",
      "Eine getrennte Anzeigevariante könnte Farbe nach dem vorherigen Schluss wählen. Oder sie könnte andere Farben und leere Körper nutzen. Nora liest deshalb die Legende, also die Erklärung der verwendeten Zeichen. Ein roter oder grüner Ton hat für sich allein keine verlässliche Preisbedeutung.",
      "Auch mit bekannter Farbregel sagt die Farbe nichts Sicheres über die nächste Minute. Sie beschreibt den genannten vergangenen Vergleich. Bei unklarer Farbregel liest Nora O und C direkt, sofern beide vorhanden sind."
    ],
    "columns": [
      {
        "title": "Unsere Regel",
        "tone": "neutral",
        "points": [
          "C gegen eigene Eröffnung O.",
          "Zahlen bestätigen die Bedeutung."
        ]
      },
      {
        "title": "Vor dem Deuten",
        "tone": "positive",
        "points": [
          "Legende und Einstellung prüfen.",
          "Farben versprechen keine nächste Richtung."
        ]
      }
    ],
    "prompt": "Wie prüft Nora eine unbekannte Kerzenfarbe?",
    "answers": [
      {
        "label": "Grün bedeutet überall denselben Vergleich.",
        "explanation": "Andere Farbregeln sind möglich."
      },
      {
        "label": "Rot beweist den nächsten Preisrückgang.",
        "explanation": "Eine Farbe enthält keine sichere Zukunftsaussage."
      },
      {
        "label": "Sie prüft die Legende und die verglichenen Preise.",
        "explanation": "Richtig: Lies Farben nur zusammen mit ihrer erklärten Vergleichsregel."
      }
    ],
    "correct": 2,
    "rule": "Lies Farben nur zusammen mit ihrer erklärten Vergleichsregel.",
    "diagram": null
  },
  {
    "title": "Eine steigende Kerze neben fallenden Schlüssen verstehen",
    "summary": "Die Bezugsgröße entscheidet über die Richtung.",
    "paragraphs": [
      "Dies ist ein eigener Übungsfall außerhalb der Vela-Tabelle. Die vorige Minute schließt bei 80,00. Die neue Minute eröffnet bei 79,00 und schließt bei 79,50. Hoch und Tief brauchen wir für diese beiden Vergleiche nicht.",
      "Innerhalb der neuen Minute beträgt die Änderung 79,50 minus 79,00 gleich plus 0,50 Euro. Gegen den vorherigen Schluss beträgt sie 79,50 minus 80,00 gleich minus 0,50. Eine O-C-Kerze steigt also, während die Schlusslinie fällt.",
      "Das ist kein Zeichenfehler. Die Bilder betonen verschiedene Vergleiche. Nora schreibt beide Bezugspunkte auf. Eine positive Kerze bedeutet hier nicht, dass der neue Schluss den vorherigen Schluss übertroffen hat."
    ],
    "columns": [
      {
        "title": "Eigene Kerze",
        "tone": "neutral",
        "points": [
          "O79,00 → C79,50.",
          "Änderung +0,50."
        ]
      },
      {
        "title": "Schlusslinie",
        "tone": "positive",
        "points": [
          "Voriger C80,00 → neuer C79,50.",
          "Änderung −0,50."
        ]
      }
    ],
    "prompt": "Wie können steigende Kerze und fallende Schlusslinie zusammenpassen?",
    "answers": [
      {
        "label": "Sie vergleichen den Schluss mit unterschiedlichen Ausgangspreisen.",
        "explanation": "Richtig: Nenne den Ausgangspreis jeder Richtungsbeschreibung."
      },
      {
        "label": "Mindestens eine Anzeige muss falsch sein.",
        "explanation": "Beide Rechnungen sind mit ihren Bezugspunkten richtig."
      },
      {
        "label": "Der neue Schluss muss über 80,00 liegen.",
        "explanation": "Er beträgt in diesem Fall 79,50."
      }
    ],
    "correct": 0,
    "rule": "Nenne den Ausgangspreis jeder Richtungsbeschreibung.",
    "diagram": null
  },
  {
    "title": "Den Körperanteil an der Spanne berechnen",
    "summary": "Ein Verhältnis braucht einen klaren Nenner.",
    "paragraphs": [
      "Für Minute eins beträgt der Körper 0,20 Euro und die gesamte Spanne 0,50. Nora fragt, welcher Anteil der Spanne auf den Körper entfällt. Sie teilt 0,20 durch 0,50 und erhält 0,40. Das sind 40 Prozent.",
      "Für Minute zwei teilt sie 0,25 durch 0,40. Das ergibt 0,625, also 62,5 Prozent. Minute zwei hat den größeren Körperanteil, obwohl ihre gesamte Spanne kleiner ist. Anteil und absolute Preisentfernung beantworten verschiedene Fragen.",
      "Dieser Anteil beschreibt die Form vergangener Preise. Er ist keine Gewinnwahrscheinlichkeit. Wenn Hoch und Tief gleich sind, ist die Spanne null. Dann würde die Rechnung durch null teilen und ist nicht definiert; Nora meldet stattdessen den Sonderfall."
    ],
    "columns": [
      {
        "title": "Minute eins",
        "tone": "neutral",
        "points": [
          "0,20 ÷ 0,50 = 0,40.",
          "40 Prozent Körperanteil."
        ]
      },
      {
        "title": "Minute zwei",
        "tone": "positive",
        "points": [
          "0,25 ÷ 0,40 = 0,625.",
          "62,5 Prozent Körperanteil."
        ]
      }
    ],
    "prompt": "Wie groß ist der Körperanteil der ersten Minute?",
    "answers": [
      {
        "label": "Eine Gewinnchance von 40 Prozent.",
        "explanation": "Das Verhältnis beschreibt eine Form, keine Erfolgsquote."
      },
      {
        "label": "40 Prozent.",
        "explanation": "Richtig: Teile Körperhöhe durch gesamte Spanne und benenne das Ergebnis als Formanteil."
      },
      {
        "label": "20 Prozent.",
        "explanation": "0,20 ist die Körperhöhe in Euro, nicht direkt der Anteil."
      }
    ],
    "correct": 1,
    "rule": "Teile Körperhöhe durch gesamte Spanne und benenne das Ergebnis als Formanteil.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Die Lage des Schlusses innerhalb der Spanne bestimmen",
    "summary": "Körperrichtung und Schlusslage sind unterschiedliche Angaben.",
    "paragraphs": [
      "In Minute eins liegt das Tief bei 49,80 und der Schluss bei 50,20. Die Entfernung vom Tief zum Schluss ist 0,40. Die gesamte Spanne beträgt 0,50. Der Anteil 0,40 geteilt durch 0,50 ist 80 Prozent.",
      "Wir zählen die Schlusslage vom Tief aus: null Prozent entspricht dem Tief, hundert Prozent dem Hoch. Für Minute zwei sind es 50,15 minus 50,10 gleich 0,05, geteilt durch 0,40: 12,5 Prozent. Minute drei schließt bei 50,10 in einer Spanne von 49,90 bis 50,20; das sind ungefähr 66,7 Prozent.",
      "Die Schlusslage nennt die Position des letzten Preises innerhalb der beobachteten Spanne. Sie sagt nicht, wie lange der Preis dort blieb. Bei einer Spanne von null ist auch dieses Verhältnis nicht definiert. Keine der Prozentzahlen garantiert eine nächste Richtung."
    ],
    "columns": [
      {
        "title": "Minute eins",
        "tone": "neutral",
        "points": [
          "Abstand vom Tief 0,40.",
          "Schlusslage 80 Prozent."
        ]
      },
      {
        "title": "Minute zwei",
        "tone": "positive",
        "points": [
          "Abstand vom Tief 0,05.",
          "Schlusslage 12,5 Prozent."
        ]
      }
    ],
    "prompt": "Wo liegt der erste Schluss, vom Tief aus gemessen?",
    "answers": [
      {
        "label": "Bei 40 Prozent der Spanne.",
        "explanation": "40 Prozent ist hier der Körperanteil."
      },
      {
        "label": "Genau am Hoch.",
        "explanation": "Das Hoch 50,30 liegt noch 0,10 über dem Schluss."
      },
      {
        "label": "Bei 80 Prozent der Spanne.",
        "explanation": "Richtig: Berechne Schlusslage als Abstand vom Tief geteilt durch die gesamte Spanne."
      }
    ],
    "correct": 2,
    "rule": "Berechne Schlusslage als Abstand vom Tief geteilt durch die gesamte Spanne.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Ein Doji kann innerhalb der Minute stark schwanken",
    "summary": "Gleicher Anfang und Schluss entfernen die Zwischenpreise nicht.",
    "paragraphs": [
      "Minute drei eröffnet bei 50,10 und schließt ebenfalls bei 50,10. Der Körper hat damit die Höhe null. Eine Kerze mit gleichem oder sehr nahem Anfang und Ende wird Doji genannt. Hier verwenden wir genau gleiche Werte.",
      "Das Hoch ist aber 50,20, das Tief 49,90. Die Spanne beträgt 0,30. Oberhalb der gemeinsamen Körperhöhe liegen 0,10, unterhalb 0,20. Nora sieht die gemeinsame O-C-Markierung sowie beide Schatten.",
      "Eine Schlusslinie lässt diesen Unterschied besonders leicht übersehen. Der kleine oder fehlende Körper belegt keinen Stillstand und keinen gleichmäßigen Ausgleich aller Aufträge. Er besagt nur, dass erster und letzter Preis hier gleich sind."
    ],
    "columns": [
      {
        "title": "Anfang und Ende",
        "tone": "neutral",
        "points": [
          "O=C=50,10.",
          "Körperhöhe null."
        ]
      },
      {
        "title": "Zwischenpreise",
        "tone": "positive",
        "points": [
          "H50,20, L49,90.",
          "Spanne 0,30."
        ]
      }
    ],
    "prompt": "Was ist trotz Körperhöhe null in Minute drei vorhanden?",
    "answers": [
      {
        "label": "Eine Hoch-Tief-Spanne von 0,30 Euro.",
        "explanation": "Richtig: Prüfe bei gleichem Anfang und Ende zusätzlich Hoch und Tief."
      },
      {
        "label": "Gar keine Preisbewegung.",
        "explanation": "Hoch und Tief sind verschieden."
      },
      {
        "label": "Sicher null Handelsvolumen.",
        "explanation": "Die Preise allein nennen keine Stückzahlen."
      }
    ],
    "correct": 0,
    "rule": "Prüfe bei gleichem Anfang und Ende zusätzlich Hoch und Tief.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Gleiche Schlüsse können verschiedene Minuten verdecken",
    "summary": "Aus einer Schlusslinie lassen sich die fehlenden Kennwerte nicht zurückrechnen.",
    "paragraphs": [
      "Nora konstruiert zwei getrennte Übungsminuten. Fall A hat O10,00, H10,40, L9,80 und C10,20. Fall B hat O10,20, H10,25, L10,15 und C10,20. Beide sind abgeschlossene Minuten desselben erfundenen Produkts.",
      "Eine Schlusslinie erhält in beiden Fällen den Punkt 10,20. Der erste Fall hat aber eine Spanne von 0,60 und einen Körper von 0,20. Der zweite hat eine Spanne von 0,10 und keinen Körperabstand. OHLC-Balken und Kerzen unterscheiden die beiden Fälle.",
      "Eine Verdichtung lässt bestimmte Angaben weg. Verdichtung bedeutet hier: Mehrere Werte werden durch eine kleinere Auswahl ersetzt. Aus dem verbliebenen Schluss allein kann Nora die weggelassenen Werte nicht eindeutig wiederherstellen."
    ],
    "columns": [
      {
        "title": "Fall A",
        "tone": "neutral",
        "points": [
          "C10,20; Spanne 0,60.",
          "Körper 0,20."
        ]
      },
      {
        "title": "Fall B",
        "tone": "positive",
        "points": [
          "C10,20; Spanne 0,10.",
          "Körper null."
        ]
      }
    ],
    "prompt": "Was unterscheidet die beiden Minuten trotz gleichem Schluss?",
    "answers": [
      {
        "label": "Die aktuelle Ausführungszusage.",
        "explanation": "Die Fälle enthalten keine solche Zusage."
      },
      {
        "label": "Ihre Hoch-Tief-Spanne und ihr Eröffnungswert.",
        "explanation": "Richtig: Ein einzelner ausgewählter Preis bestimmt die übrigen Kennwerte nicht."
      },
      {
        "label": "Der Schlusswert.",
        "explanation": "Beide schließen bei 10,20."
      }
    ],
    "correct": 1,
    "rule": "Ein einzelner ausgewählter Preis bestimmt die übrigen Kennwerte nicht.",
    "diagram": null
  },
  {
    "title": "Eine Eröffnungslücke und eine vollständige Preislücke trennen",
    "summary": "Zwei Lückenbegriffe brauchen verschiedene Prüfungen.",
    "paragraphs": [
      "Von Minute eins zu Minute zwei steigt die Eröffnung gegenüber dem vorherigen Schluss: 50,40 minus 50,20 gleich 0,20 Euro. Diesen Abstand nennen wir in unserem Bericht Eröffnungslücke. Er beschreibt nur diese beiden Preise.",
      "Die vollständigen Spannen sind 49,80 bis 50,30 und 50,10 bis 50,50. Sie überlappen von 50,10 bis 50,30. Zwischen ihnen liegt daher keine vollständige Preislücke. Mit vollständiger Preislücke meinen wir hier getrennte Spannen, nicht bloß unterschiedliche Eröffnung und vorherigen Schluss.",
      "Die Wörter werden in Anzeigen und Gesprächen unterschiedlich verwendet. Nora legt ihre Definition offen. Aus der Eröffnungslücke allein weiß sie weder, warum der Preis versetzt begann, noch ob ihre eigene Order dazwischen ausgeführt worden wäre."
    ],
    "columns": [
      {
        "title": "Eröffnung gegen vorigen Schluss",
        "tone": "neutral",
        "points": [
          "50,40 − 50,20 = +0,20.",
          "Eröffnungslücke nach unserer Definition."
        ]
      },
      {
        "title": "Gesamte Spannen",
        "tone": "positive",
        "points": [
          "Gemeinsamer Bereich 50,10 bis 50,30.",
          "Keine vollständig getrennten Spannen."
        ]
      }
    ],
    "prompt": "Sind die Spannen der ersten beiden Minuten vollständig getrennt?",
    "answers": [
      {
        "label": "Ja, weil O2 höher als C1 liegt.",
        "explanation": "Das vergleicht nur zwei Preise, nicht beide Spannen."
      },
      {
        "label": "Ja, weil Minute zwei fallend ist.",
        "explanation": "Die Körperrichtung entscheidet nicht über die Überlappung."
      },
      {
        "label": "Nein, sie überlappen von 50,10 bis 50,30.",
        "explanation": "Richtig: Lege fest, welche Preise du für eine Lücke vergleichst."
      }
    ],
    "correct": 2,
    "rule": "Lege fest, welche Preise du für eine Lücke vergleichst.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Die gemeinsame Preisspanne zweier Minuten berechnen",
    "summary": "Überlappung ist eine gemeinsame Preiszone, keine Zeitdauer.",
    "paragraphs": [
      "Nora will die Überlappung von Minute eins und zwei genau messen. Der höhere der beiden Tiefpreise ist 50,10. Der niedrigere der beiden Hochpreise ist 50,30. Dazwischen liegt der gemeinsame Bereich.",
      "Dessen Breite beträgt 50,30 minus 50,10 gleich 0,20 Euro. Das sind 40 Prozent der ersten Spanne 0,50, aber 50 Prozent der zweiten Spanne 0,40. Ein Prozentanteil braucht deshalb auch hier einen genannten Bezug.",
      "Die Rechnung beschreibt nur die gemeinsamen Preisgrenzen. Sie beweist nicht, dass in beiden Minuten jeder Preis darin gehandelt wurde. Sie sagt auch nicht, dass sich der Markt dort 40 Prozent der Zeit aufhielt. Zeit und Geschäftsmengen sind andere Angaben."
    ],
    "columns": [
      {
        "title": "Gemeinsamer Bereich",
        "tone": "neutral",
        "points": [
          "Untergrenze 50,10; Obergrenze 50,30.",
          "Breite 0,20 Euro."
        ]
      },
      {
        "title": "Je nach Bezug",
        "tone": "positive",
        "points": [
          "40 Prozent der ersten Spanne.",
          "50 Prozent der zweiten Spanne."
        ]
      }
    ],
    "prompt": "Wie breit ist der gemeinsame Bereich der ersten beiden Spannen?",
    "answers": [
      {
        "label": "0,20 Euro.",
        "explanation": "Richtig: Prüfe gemeinsame Grenzen und trenne Preisbreite von Aufenthaltsdauer."
      },
      {
        "label": "0,90 Euro.",
        "explanation": "Das wäre die Summe beider Spannen ohne Berücksichtigung ihrer Lage."
      },
      {
        "label": "40 Sekunden.",
        "explanation": "Die Rechnung liefert eine Preisentfernung, keine Dauer."
      }
    ],
    "correct": 0,
    "rule": "Prüfe gemeinsame Grenzen und trenne Preisbreite von Aufenthaltsdauer.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Ein Schatten nennt weder Dauer noch Absicht",
    "summary": "Eine Preisentfernung erklärt nicht die Gründe des Handels.",
    "paragraphs": [
      "Der untere Schatten der ersten Minute ist 0,20 Euro lang. Er reicht vom Tief 49,80 bis zum unteren Körperrand 50,00. Daraus kennt Nora die Entfernung zwischen zwei Kennwerten.",
      "Sie kennt allein aus dem Schatten nicht die Dauer am Tief. Zwei verschiedene Geschäftsfolgen können dieselben vier Kennwerte ergeben. Auch die Zahl offener Kaufaufträge und die Motive einzelner Käufer stehen nicht im Schatten.",
      "Nora beschreibt deshalb zunächst den Befund: Der Preis erreichte 49,80 und der letzte Preis lag bei 50,20. Eine Erklärung wie Käufer mussten den Markt retten wäre eine zusätzliche Vermutung. Für die genaue zeitliche Folge bräuchte sie die einzelnen Meldungen."
    ],
    "columns": [
      {
        "title": "Aus OHLC bekannt",
        "tone": "neutral",
        "points": [
          "Tief und Körpergrenze.",
          "Unterer Schatten 0,20 Euro."
        ]
      },
      {
        "title": "Aus OHLC allein unbekannt",
        "tone": "positive",
        "points": [
          "Dauer am Tief.",
          "Absichten und offene Kaufaufträge."
        ]
      }
    ],
    "prompt": "Welche Angabe liefert der untere Schatten allein nicht?",
    "answers": [
      {
        "label": "Die Lage des Tiefs bei beschrifteter Achse.",
        "explanation": "Das Tief ist sein unteres Ende."
      },
      {
        "label": "Wie lange der Preis am Tief blieb.",
        "explanation": "Richtig: Beschreibe Schatten als Preisentfernungen und kennzeichne zusätzliche Vermutungen."
      },
      {
        "label": "Die Entfernung vom Tief zum unteren Körperrand.",
        "explanation": "Diese Entfernung bildet der Schatten ab."
      }
    ],
    "correct": 1,
    "rule": "Beschreibe Schatten als Preisentfernungen und kennzeichne zusätzliche Vermutungen.",
    "diagram": "rc1-candles"
  },
  {
    "title": "Breite Kerzen sind keine größeren Stückzahlen",
    "summary": "Die horizontale Zeichenbreite kann bloß eine Layoutregel sein.",
    "paragraphs": [
      "Nora vergrößert das Fenster. Die drei Kerzen werden breiter, ihre vier Preise bleiben gleich. In unseren Schaubildern hat die Körperbreite keinen Mengenwert. Der Abstand zwischen den Minutenplätzen ordnet die Abschnitte.",
      "Für Minute eins kennen wir das Volumen aus den Geschäftsmengen: vier plus zwei plus drei plus eins gleich zehn Aktien. Für die zweite und dritte Minute sind hier keine Mengen vorgegeben. Ihre Körperbreite füllt diese fehlenden Angaben nicht auf.",
      "Ein gesonderter Volumenbalken müsste eine eigene Mengenachse und erklärte Regel haben. Erst diese Angaben könnten Stückzahlen liefern. Nora verwechselt deshalb einen breiten Kerzenkörper nicht mit einem hohen Mengenbalken."
    ],
    "columns": [
      {
        "title": "Preisbild",
        "tone": "neutral",
        "points": [
          "Körperhöhe: Preisabstand.",
          "Breite hier: Gestaltung."
        ]
      },
      {
        "title": "Mengeninformation",
        "tone": "positive",
        "points": [
          "Minute eins: zehn Aktien aus Meldungen.",
          "Minuten zwei und drei: Menge hier unbekannt."
        ]
      }
    ],
    "prompt": "Was erfährt Nora aus der Körperbreite unserer zweiten Kerze über ihr Volumen?",
    "answers": [
      {
        "label": "Genau zehn Aktien.",
        "explanation": "Zehn gehört zur ersten Minute; für die zweite fehlen Mengen."
      },
      {
        "label": "Mehr Aktien als in Minute eins.",
        "explanation": "Die Breite trägt hier keine Mengenbedeutung."
      },
      {
        "label": "Keine Stückzahl.",
        "explanation": "Richtig: Lies Mengen nur aus ausdrücklich genannten Mengendaten."
      }
    ],
    "correct": 2,
    "rule": "Lies Mengen nur aus ausdrücklich genannten Mengendaten.",
    "diagram": null
  },
  {
    "title": "Für die eigene Frage die passende Darstellung wählen",
    "summary": "Eine Auswahl soll die gesuchten Angaben enthalten.",
    "paragraphs": [
      "Nora möchte erst prüfen, ob die drei Schlüsse höher oder tiefer werden. Die beschriftete Schlusslinie reicht dafür aus: 50,20, 50,15 und 50,10. Für diese Frage sind andere Kennwerte nicht notwendig.",
      "Nun möchte sie wissen, wie weit die zweite Minute zwischen Hoch und Tief reichte. Die Schlusslinie reicht dafür nicht. Der OHLC-Balken oder die normale Kerze enthält H50,50 und L50,10. Die Spanne beträgt 0,40 Euro.",
      "Für die Frage, ob Hoch oder Tief zuerst kam, reicht auch keines dieser beiden OHLC-Bilder allein. Dazu braucht Nora die Meldungsfolge oder andere ausreichend genaue Daten. Eine Darstellung wird passend durch die Frage und ihren Informationsbedarf."
    ],
    "columns": [
      {
        "title": "Schlussfolge",
        "tone": "neutral",
        "points": [
          "Schlusslinie genügt für diesen Vergleich.",
          "Drei Schlüsse fallen schrittweise."
        ]
      },
      {
        "title": "Spanne und Reihenfolge",
        "tone": "positive",
        "points": [
          "OHLC genügt für Hoch-Tief-Spanne.",
          "Genauer Ablauf benötigt zusätzliche Daten."
        ]
      }
    ],
    "prompt": "Welche Darstellung genügt für die Spanne der zweiten Minute?",
    "answers": [
      {
        "label": "Ein vollständiger OHLC-Balken oder eine normale OHLC-Kerze.",
        "explanation": "Richtig: Wähle eine Darstellung, die die für deine Frage nötigen Angaben enthält."
      },
      {
        "label": "Nur die Schlusslinie.",
        "explanation": "Die Hochs und Tiefs fehlen als eigene Angaben."
      },
      {
        "label": "Jede Linie ohne bekannte Preisart.",
        "explanation": "Ohne ausgewählte Preisart ist die Bedeutung noch unklar."
      }
    ],
    "correct": 0,
    "rule": "Wähle eine Darstellung, die die für deine Frage nötigen Angaben enthält.",
    "diagram": null
  },
  {
    "title": "Drei Bilder in einen überprüfbaren Bericht übersetzen",
    "summary": "Ein guter Bericht trennt Preisbefund und offene Fragen.",
    "paragraphs": [
      "Nora schreibt ihren Abschlussbericht: Gezeigt sind drei abgeschlossene Vela-Minuten mit gehandelten Preisen in Euro je Aktie. Die Schlusslinie fällt von 50,20 auf 50,10. Die erste Kerze steigt intern, die zweite fällt, die dritte hat denselben Eröffnungs- und Schlusswert.",
      "Sie ergänzt: Die erste Spanne ist 0,50, die zweite 0,40 und die dritte 0,30. Vollständige OHLC-Balken und normale Kerzen zeigen dafür dieselben vier Preise je Minute. Der bekannte Mengenwert ist zehn Aktien für Minute eins; weitere Mengen sind hier nicht angegeben.",
      "Die Bilder verraten allein keine vollständige Reihenfolge der Zwischenpreise und keine aktuellen ausführbaren Angebote. Nora hat damit Befunde und Grenzen benannt. Als Nächstes untersucht sie, nach welchen Regeln die Abschnitte selbst entstehen: durch Zeit, Anzahl der Geschäfte oder Volumen."
    ],
    "columns": [
      {
        "title": "Prüfbarer Bericht",
        "tone": "neutral",
        "points": [
          "Schlussfolge −0,10; Spannen 0,50/0,40/0,30.",
          "Balken und Kerzen haben dieselben OHLC-Kennwerte."
        ]
      },
      {
        "title": "Offene Angaben",
        "tone": "positive",
        "points": [
          "Intrabar-Reihenfolge aus OHLC allein unbekannt.",
          "Mengen der Minuten zwei und drei fehlen."
        ]
      }
    ],
    "prompt": "Welcher Bericht passt zu den drei Vela-Minuten?",
    "answers": [
      {
        "label": "Minute drei war bewegungslos.",
        "explanation": "Ihre Spanne beträgt 0,30 Euro."
      },
      {
        "label": "Die Schlüsse fallen, obwohl die erste Kerze intern steigt.",
        "explanation": "Richtig: Berichte nur die belegten Angaben und nenne die verbleibenden offenen Fragen."
      },
      {
        "label": "Alle Kerzen fallen, weil die Schlusslinie fällt.",
        "explanation": "Minute eins steigt von eigener Eröffnung zu Schluss; Minute drei ist unverändert."
      }
    ],
    "correct": 1,
    "rule": "Berichte nur die belegten Angaben und nenne die verbleibenden offenen Fragen.",
    "diagram": "rc1-candles"
  }
];
export const chartsChapterTwoLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `reading-charts.chapter-02.lesson-${String(index + 1).padStart(2, '0')}`;
  const observations = draft.diagram === 'rc1-bar'
    ? ['Minute 1: O50,00 links, C50,20 rechts.', 'H50,30 und L49,80 begrenzen die Spanne.']
    : draft.diagram === 'rc1-line'
    ? ['Schlusspunkte 50,20; 50,15; 50,10.', 'Die Verbindungen protokollieren keine Zwischenpreise.']
    : ['Minute 1: O50,00 H50,30 L49,80 C50,20.', 'Minute 2: O50,40 H50,50 L50,10 C50,15.', 'Minute 3: O50,10 H50,20 L49,90 C50,10.'];
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 2 · Linien, Balken und Kerzen sicher vergleichen', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Charts verstehen · Kapitel 2', title: draft.title, paragraphs: draft.paragraphs, callout: draft.rule },
      ...(draft.diagram ? [{ id: `${key}.diagram`, type: 'diagram' as const, title: 'Die gemeinsame Datengrundlage', scenario: draft.diagram as ChartScenarioId, caption: 'Eigener Vela-Datensatz · drei abgeschlossene Minuten · gehandelte Preise in Euro je Aktie.', observations }] : []),
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map(column => ({ ...column, tone: column.tone as 'neutral' | 'positive' })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, i) => ({ id: `choice-${i}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
