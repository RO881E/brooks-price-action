import type { ChartScenarioId, ChapterSeventeenScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number];
  end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average';
  label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; }

// Independent synthetic OHLC paths; no historical chart is reproduced.
export const chapterSeventeenCharts: Record<ChapterSeventeenScenarioId, Definition> = {
  "c17-01": {
    "heading": "Ein früherer Preis bleibt als Referenz",
    "panels": [
      {
        "title": "Sichtbares Swinghoch",
        "note": "Gegenbewegung ist schon sichtbar",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              4,
              70
            ],
            "kind": "reference",
            "label": "Swinghoch 70"
          }
        ],
        "focus": [
          1,
          2
        ]
      },
      {
        "title": "Späterer Besuch",
        "note": "gleicher Preis, neue Reaktion",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ],
          [
            65,
            76,
            62,
            68
          ],
          [
            68,
            70,
            53,
            55
          ],
          [
            55,
            57,
            43,
            45
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              7,
              70
            ],
            "kind": "reference",
            "label": "Swinghoch 70"
          }
        ],
        "focus": [
          5,
          6,
          7
        ]
      }
    ],
    "footer": "Die Linie zeigt den Ort; die Bars zeigen die Reaktion",
    "description": "Eigenes schematisches Beispiel: links Sichtbares Swinghoch (Gegenbewegung ist schon sichtbar), rechts Späterer Besuch (gleicher Preis, neue Reaktion). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Die Linie zeigt den Ort; die Bars zeigen die Reaktion"
  },
  "c17-02": {
    "heading": "Laufendes Hoch oder bestätigter Swing?",
    "panels": [
      {
        "title": "Noch laufender Schub",
        "note": "weiteres Hoch möglich",
        "bars": [
          [
            42,
            58,
            40,
            56
          ],
          [
            56,
            70,
            54,
            68
          ]
        ],
        "lines": [],
        "focus": [
          1
        ]
      },
      {
        "title": "Gegenbewegung folgt",
        "note": "lokaler Swing jetzt erkennbar",
        "bars": [
          [
            42,
            58,
            40,
            56
          ],
          [
            56,
            70,
            54,
            68
          ],
          [
            68,
            70,
            56,
            58
          ],
          [
            58,
            60,
            47,
            49
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              3,
              70
            ],
            "kind": "reference",
            "label": "Swinghoch 70"
          }
        ],
        "focus": [
          2,
          3
        ]
      }
    ],
    "footer": "Erst sichtbare Gegenbewegung bestätigt den Swing",
    "description": "Eigenes schematisches Beispiel: links Noch laufender Schub (weiteres Hoch möglich), rechts Gegenbewegung folgt (lokaler Swing jetzt erkennbar). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Erst sichtbare Gegenbewegung bestätigt den Swing"
  },
  "c17-03": {
    "heading": "Rangegrenze und Anschluss außerhalb",
    "panels": [
      {
        "title": "Viele Rückkehrbewegungen",
        "note": "überlappender Verlauf",
        "bars": [
          [
            42,
            57,
            40,
            55
          ],
          [
            55,
            70,
            53,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            46,
            48
          ],
          [
            48,
            50,
            34,
            36
          ],
          [
            36,
            46,
            34,
            44
          ],
          [
            44,
            60,
            42,
            58
          ],
          [
            58,
            68,
            56,
            66
          ],
          [
            66,
            68,
            52,
            54
          ],
          [
            54,
            56,
            40,
            42
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              9,
              70
            ],
            "kind": "reference",
            "label": "oben 70"
          },
          {
            "start": [
              0,
              30
            ],
            "end": [
              9,
              30
            ],
            "kind": "reference",
            "label": "unten 30"
          }
        ],
        "focus": []
      },
      {
        "title": "Neue Stärke außerhalb",
        "note": "Range-Lesart wird schwächer",
        "bars": [
          [
            42,
            57,
            40,
            55
          ],
          [
            55,
            70,
            53,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            71,
            52,
            69
          ],
          [
            69,
            81,
            67,
            79
          ],
          [
            79,
            89,
            77,
            87
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              6,
              70
            ],
            "kind": "reference",
            "label": "alte Grenze"
          }
        ],
        "focus": [
          5,
          6
        ]
      }
    ],
    "footer": "Kräftiger Anschluss kann die bisherige Lesart verändern",
    "description": "Eigenes schematisches Beispiel: links Viele Rückkehrbewegungen (überlappender Verlauf), rechts Neue Stärke außerhalb (Range-Lesart wird schwächer). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Kräftiger Anschluss kann die bisherige Lesart verändern"
  },
  "c17-04": {
    "heading": "Höheres Hoch kehrt unter die Referenz zurück",
    "panels": [
      {
        "title": "Alter Hochbereich",
        "note": "neuer Versuch folgt",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              4,
              70
            ],
            "kind": "reference",
            "label": "Referenz 70"
          }
        ],
        "focus": []
      },
      {
        "title": "76, dann Rückkehr",
        "note": "Verkäufer gewinnen Raum",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ],
          [
            65,
            76,
            62,
            68
          ],
          [
            68,
            70,
            53,
            55
          ],
          [
            55,
            57,
            43,
            45
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              7,
              70
            ],
            "kind": "reference",
            "label": "Referenz 70"
          }
        ],
        "focus": [
          5,
          6,
          7
        ]
      }
    ],
    "footer": "Hoch, Rückkehr und Gegenanschluss zeitlich trennen",
    "description": "Eigenes schematisches Beispiel: links Alter Hochbereich (neuer Versuch folgt), rechts 76, dann Rückkehr (Verkäufer gewinnen Raum). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Hoch, Rückkehr und Gegenanschluss zeitlich trennen"
  },
  "c17-05": {
    "heading": "Tieferes Tief kehrt über die Referenz zurück",
    "panels": [
      {
        "title": "Alter Tiefbereich",
        "note": "neuer Versuch folgt",
        "bars": [
          [
            52,
            54,
            40,
            42
          ],
          [
            42,
            44,
            30,
            32
          ],
          [
            32,
            42,
            30,
            40
          ],
          [
            40,
            48,
            38,
            46
          ],
          [
            46,
            48,
            33,
            35
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              4,
              30
            ],
            "kind": "reference",
            "label": "Referenz 30"
          }
        ],
        "focus": []
      },
      {
        "title": "24, dann Rückkehr",
        "note": "Käufer gewinnen Raum",
        "bars": [
          [
            52,
            54,
            40,
            42
          ],
          [
            42,
            44,
            30,
            32
          ],
          [
            32,
            42,
            30,
            40
          ],
          [
            40,
            48,
            38,
            46
          ],
          [
            46,
            48,
            33,
            35
          ],
          [
            35,
            38,
            24,
            32
          ],
          [
            32,
            47,
            30,
            45
          ],
          [
            45,
            57,
            43,
            55
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              7,
              30
            ],
            "kind": "reference",
            "label": "Referenz 30"
          }
        ],
        "focus": [
          5,
          6,
          7
        ]
      }
    ],
    "footer": "Die neue Tiefmarke allein ist noch keine Umkehr",
    "description": "Eigenes schematisches Beispiel: links Alter Tiefbereich (neuer Versuch folgt), rechts 24, dann Rückkehr (Käufer gewinnen Raum). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Die neue Tiefmarke allein ist noch keine Umkehr"
  },
  "c17-06": {
    "heading": "Zwei getrennte obere Versuche",
    "panels": [
      {
        "title": "Erster Versuch scheitert",
        "note": "Gegenbewegung dazwischen",
        "bars": [
          [
            46,
            59,
            44,
            57
          ],
          [
            57,
            70,
            55,
            68
          ],
          [
            68,
            70,
            59,
            61
          ],
          [
            61,
            63,
            52,
            54
          ],
          [
            54,
            76,
            53,
            69
          ],
          [
            69,
            71,
            58,
            60
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              5,
              70
            ],
            "kind": "reference",
            "label": "Referenz 70"
          }
        ],
        "focus": [
          4,
          5
        ]
      },
      {
        "title": "Zweiter Versuch scheitert",
        "note": "weiteres Hoch, erneute Rückkehr",
        "bars": [
          [
            46,
            59,
            44,
            57
          ],
          [
            57,
            70,
            55,
            68
          ],
          [
            68,
            70,
            59,
            61
          ],
          [
            61,
            63,
            52,
            54
          ],
          [
            54,
            76,
            53,
            69
          ],
          [
            69,
            71,
            58,
            60
          ],
          [
            60,
            74,
            59,
            72
          ],
          [
            72,
            80,
            70,
            74
          ],
          [
            74,
            76,
            55,
            57
          ],
          [
            57,
            59,
            44,
            46
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              9,
              70
            ],
            "kind": "reference",
            "label": "Referenz 70"
          }
        ],
        "focus": [
          7,
          8,
          9
        ]
      }
    ],
    "footer": "Zweite Signale brauchen eine erkennbare erste Reaktion",
    "description": "Eigenes schematisches Beispiel: links Erster Versuch scheitert (Gegenbewegung dazwischen), rechts Zweiter Versuch scheitert (weiteres Hoch, erneute Rückkehr). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Zweite Signale brauchen eine erkennbare erste Reaktion"
  },
  "c17-07": {
    "heading": "Die erwartete Rückkehr scheitert selbst",
    "panels": [
      {
        "title": "Rückkehr unter die Grenze",
        "note": "Shortidee noch offen",
        "bars": [
          [
            46,
            60,
            44,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            77,
            67,
            75
          ],
          [
            75,
            76,
            64,
            66
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              3,
              70
            ],
            "kind": "reference",
            "label": "Referenz 70"
          }
        ],
        "focus": [
          3
        ]
      },
      {
        "title": "Käufer setzen sich durch",
        "note": "Rückkehr wird zum Pullback",
        "bars": [
          [
            46,
            60,
            44,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            77,
            67,
            75
          ],
          [
            75,
            76,
            64,
            66
          ],
          [
            66,
            79,
            65,
            78
          ],
          [
            78,
            85,
            77,
            83
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              5,
              70
            ],
            "kind": "reference",
            "label": "Referenz 70"
          }
        ],
        "focus": [
          4,
          5
        ]
      }
    ],
    "footer": "Neuer Anschluss verändert die Arbeitshypothese",
    "description": "Eigenes schematisches Beispiel: links Rückkehr unter die Grenze (Shortidee noch offen), rechts Käufer setzen sich durch (Rückkehr wird zum Pullback). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Neuer Anschluss verändert die Arbeitshypothese"
  },
  "c17-08": {
    "heading": "Alte Grenze als Pullbackbereich im Trend",
    "panels": [
      {
        "title": "Bullenfall",
        "note": "Test von oben",
        "bars": [
          [
            30,
            46,
            28,
            44
          ],
          [
            44,
            56,
            42,
            54
          ],
          [
            54,
            69,
            53,
            67
          ],
          [
            67,
            80,
            66,
            78
          ],
          [
            78,
            79,
            63,
            65
          ],
          [
            65,
            66,
            58,
            61
          ],
          [
            61,
            76,
            60,
            74
          ],
          [
            74,
            85,
            73,
            83
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              60
            ],
            "end": [
              7,
              60
            ],
            "kind": "reference",
            "label": "Ausbruch 60"
          }
        ],
        "focus": [
          5,
          6,
          7
        ]
      },
      {
        "title": "Bärenfall",
        "note": "Test von unten",
        "bars": [
          [
            70,
            72,
            54,
            56
          ],
          [
            56,
            58,
            44,
            46
          ],
          [
            46,
            47,
            31,
            33
          ],
          [
            33,
            34,
            20,
            22
          ],
          [
            22,
            37,
            21,
            35
          ],
          [
            35,
            42,
            34,
            39
          ],
          [
            39,
            40,
            24,
            26
          ],
          [
            26,
            27,
            15,
            17
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              40
            ],
            "end": [
              7,
              40
            ],
            "kind": "reference",
            "label": "Ausbruch 40"
          }
        ],
        "focus": [
          5,
          6,
          7
        ]
      }
    ],
    "footer": "Gleiche horizontale Idee, gespiegelte Trendrichtung",
    "description": "Eigenes schematisches Beispiel: links Bullenfall (Test von oben), rechts Bärenfall (Test von unten). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Gleiche horizontale Idee, gespiegelte Trendrichtung"
  },
  "c17-09": {
    "heading": "Kleiner Gegenbar oder klare Gegenstärke?",
    "panels": [
      {
        "title": "Kurze Pause",
        "note": "Käufer kehren rasch zurück",
        "bars": [
          [
            20,
            34,
            18,
            32
          ],
          [
            32,
            45,
            30,
            43
          ],
          [
            43,
            57,
            41,
            55
          ],
          [
            55,
            66,
            53,
            64
          ],
          [
            64,
            74,
            62,
            72
          ],
          [
            72,
            82,
            70,
            80
          ],
          [
            80,
            81,
            72,
            75
          ],
          [
            75,
            86,
            74,
            84
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              82
            ],
            "end": [
              7,
              82
            ],
            "kind": "reference",
            "label": "altes Hoch"
          },
          {
            "start": [
              0,
              18
            ],
            "end": [
              7,
              67
            ],
            "kind": "trend",
            "label": ""
          }
        ],
        "focus": [
          6,
          7
        ]
      },
      {
        "title": "Größerer Gegenabschnitt",
        "note": "Umkehrprüfung besser begründet",
        "bars": [
          [
            20,
            34,
            18,
            32
          ],
          [
            32,
            45,
            30,
            43
          ],
          [
            43,
            57,
            41,
            55
          ],
          [
            55,
            66,
            53,
            64
          ],
          [
            64,
            74,
            62,
            72
          ],
          [
            72,
            82,
            70,
            80
          ],
          [
            80,
            81,
            60,
            62
          ],
          [
            62,
            63,
            47,
            49
          ],
          [
            49,
            63,
            48,
            61
          ],
          [
            61,
            62,
            43,
            45
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              82
            ],
            "end": [
              9,
              82
            ],
            "kind": "reference",
            "label": "altes Hoch"
          },
          {
            "start": [
              0,
              18
            ],
            "end": [
              7,
              67
            ],
            "kind": "trend",
            "label": ""
          }
        ],
        "focus": [
          6,
          7,
          8,
          9
        ]
      }
    ],
    "footer": "Bruchqualität ist wichtiger als die Existenz einer Linie",
    "description": "Eigenes schematisches Beispiel: links Kurze Pause (Käufer kehren rasch zurück), rechts Größerer Gegenabschnitt (Umkehrprüfung besser begründet). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Bruchqualität ist wichtiger als die Existenz einer Linie"
  },
  "c17-10": {
    "heading": "Zeitbezug des unteren Testbereichs",
    "panels": [
      {
        "title": "Vorheriger Tagesbereich",
        "note": "bekanntes Tief 30",
        "bars": [
          [
            60,
            62,
            46,
            48
          ],
          [
            48,
            50,
            34,
            36
          ],
          [
            36,
            38,
            29,
            34
          ],
          [
            34,
            48,
            33,
            46
          ],
          [
            46,
            59,
            45,
            57
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              4,
              30
            ],
            "kind": "reference",
            "label": "Vortag 30"
          }
        ],
        "focus": [
          2
        ]
      },
      {
        "title": "Neuer Test nahe 30",
        "note": "ähnlich, nicht exakt identisch",
        "bars": [
          [
            60,
            62,
            46,
            48
          ],
          [
            48,
            50,
            34,
            36
          ],
          [
            36,
            38,
            29,
            34
          ],
          [
            34,
            48,
            33,
            46
          ],
          [
            46,
            59,
            45,
            57
          ],
          [
            57,
            59,
            31,
            35
          ],
          [
            35,
            48,
            34,
            47
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              6,
              30
            ],
            "kind": "reference",
            "label": "Vortag 30"
          }
        ],
        "focus": [
          5,
          6
        ]
      }
    ],
    "footer": "Lokaler Swing und älterer Preis können denselben Bereich prüfen",
    "description": "Eigenes schematisches Beispiel: links Vorheriger Tagesbereich (bekanntes Tief 30), rechts Neuer Test nahe 30 (ähnlich, nicht exakt identisch). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Lokaler Swing und älterer Preis können denselben Bereich prüfen"
  },
  "c17-11": {
    "heading": "Raum vom tatsächlichen Einstieg aus messen",
    "panels": [
      {
        "title": "Frühere Auslösung 68",
        "note": "Schutz 78, Zielbereich 50",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ],
          [
            65,
            76,
            62,
            68
          ],
          [
            68,
            70,
            53,
            55
          ],
          [
            55,
            57,
            43,
            45
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              78
            ],
            "end": [
              7,
              78
            ],
            "kind": "reference",
            "label": "Schutz 78"
          },
          {
            "start": [
              0,
              68
            ],
            "end": [
              7,
              68
            ],
            "kind": "reference",
            "label": "Start 68"
          },
          {
            "start": [
              0,
              50
            ],
            "end": [
              7,
              50
            ],
            "kind": "reference",
            "label": "Ziel 50"
          }
        ],
        "focus": [
          6
        ]
      },
      {
        "title": "Späterer Preis 54",
        "note": "weniger Raum zum gleichen Ziel",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ],
          [
            65,
            76,
            62,
            68
          ],
          [
            68,
            70,
            53,
            55
          ],
          [
            55,
            57,
            43,
            45
          ],
          [
            45,
            57,
            43,
            55
          ],
          [
            55,
            57,
            51,
            53
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              78
            ],
            "end": [
              9,
              78
            ],
            "kind": "reference",
            "label": "Schutz 78"
          },
          {
            "start": [
              0,
              54
            ],
            "end": [
              9,
              54
            ],
            "kind": "reference",
            "label": "Start 54"
          },
          {
            "start": [
              0,
              50
            ],
            "end": [
              9,
              50
            ],
            "kind": "reference",
            "label": "Ziel 50"
          }
        ],
        "focus": [
          8
        ]
      }
    ],
    "footer": "18 zu 10 ist 1,8 zu 1 vor Kosten; die Trefferquote bleibt offen",
    "description": "Eigenes schematisches Beispiel: links Frühere Auslösung 68 (Schutz 78, Zielbereich 50), rechts Späterer Preis 54 (weniger Raum zum gleichen Ziel). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. 18 zu 10 ist 1,8 zu 1 vor Kosten; die Trefferquote bleibt offen"
  },
  "c17-12": {
    "heading": "Referenz zuerst, Folgebars danach",
    "panels": [
      {
        "title": "Vor dem neuen Test",
        "note": "Hoch 70 ist bereits sichtbar",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              4,
              70
            ],
            "kind": "reference",
            "label": "bekannt 70"
          }
        ],
        "focus": []
      },
      {
        "title": "Neue Daten aufdecken",
        "note": "jetzt Reaktion beurteilen",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ],
          [
            65,
            76,
            62,
            68
          ],
          [
            68,
            70,
            53,
            55
          ],
          [
            55,
            57,
            43,
            45
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              7,
              70
            ],
            "kind": "reference",
            "label": "bekannt 70"
          }
        ],
        "focus": [
          5,
          6,
          7
        ]
      }
    ],
    "footer": "Die alte Linie nicht heimlich an das spätere Extrem verschieben",
    "description": "Eigenes schematisches Beispiel: links Vor dem neuen Test (Hoch 70 ist bereits sichtbar), rechts Neue Daten aufdecken (jetzt Reaktion beurteilen). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Die alte Linie nicht heimlich an das spätere Extrem verschieben"
  },
  "c17-13": {
    "heading": "Zweites höheres Hoch mit drei kleinen Schüben",
    "panels": [
      {
        "title": "Erste obere Ablehnung",
        "note": "ein Rücklauf trennt die Versuche",
        "bars": [
          [
            42,
            58,
            40,
            56
          ],
          [
            56,
            70,
            54,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            49,
            51
          ],
          [
            51,
            74,
            50,
            67
          ],
          [
            67,
            69,
            57,
            59
          ],
          [
            59,
            73,
            57,
            71
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              6,
              70
            ],
            "kind": "reference",
            "label": "Referenz 70"
          }
        ],
        "focus": [
          5,
          6
        ]
      },
      {
        "title": "Drei Schübe im zweiten Angriff",
        "note": "keine perfekte Keilkontur nötig",
        "bars": [
          [
            42,
            58,
            40,
            56
          ],
          [
            56,
            70,
            54,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            49,
            51
          ],
          [
            51,
            74,
            50,
            67
          ],
          [
            67,
            69,
            57,
            59
          ],
          [
            59,
            73,
            57,
            71
          ],
          [
            71,
            73,
            63,
            65
          ],
          [
            65,
            78,
            63,
            76
          ],
          [
            76,
            78,
            68,
            70
          ],
          [
            70,
            80,
            68,
            74
          ],
          [
            74,
            75,
            54,
            56
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              11,
              70
            ],
            "kind": "reference",
            "label": "Referenz 70"
          }
        ],
        "focus": [
          6,
          8,
          10,
          11
        ]
      }
    ],
    "footer": "Zwei Perspektiven beschreiben dieselben Bars",
    "description": "Eigenes schematisches Beispiel: links Erste obere Ablehnung (ein Rücklauf trennt die Versuche), rechts Drei Schübe im zweiten Angriff (keine perfekte Keilkontur nötig). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Zwei Perspektiven beschreiben dieselben Bars"
  },
  "c17-14": {
    "heading": "Lokales Tief und älterer Tagesbereich",
    "panels": [
      {
        "title": "Erster Tiefversuch",
        "note": "lokales Tief 29",
        "bars": [
          [
            63,
            65,
            46,
            48
          ],
          [
            48,
            50,
            34,
            36
          ],
          [
            36,
            38,
            29,
            34
          ],
          [
            34,
            54,
            33,
            52
          ],
          [
            52,
            68,
            51,
            66
          ],
          [
            66,
            67,
            35,
            37
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              5,
              30
            ],
            "kind": "reference",
            "label": "Vortag 30"
          }
        ],
        "focus": [
          2
        ]
      },
      {
        "title": "Zweiter Tiefversuch",
        "note": "27 liegt nahe am Vortagsbereich",
        "bars": [
          [
            63,
            65,
            46,
            48
          ],
          [
            48,
            50,
            34,
            36
          ],
          [
            36,
            38,
            29,
            34
          ],
          [
            34,
            54,
            33,
            52
          ],
          [
            52,
            68,
            51,
            66
          ],
          [
            66,
            67,
            35,
            37
          ],
          [
            37,
            39,
            27,
            33
          ],
          [
            33,
            53,
            32,
            51
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              7,
              30
            ],
            "kind": "reference",
            "label": "Vortag 30"
          },
          {
            "start": [
              0,
              29
            ],
            "end": [
              7,
              29
            ],
            "kind": "reference",
            "label": "lokal 29"
          }
        ],
        "focus": [
          6,
          7
        ]
      }
    ],
    "footer": "Lokales tieferes Tief kann zugleich ein älterer Doppeltief-Test sein",
    "description": "Eigenes schematisches Beispiel: links Erster Tiefversuch (lokales Tief 29), rechts Zweiter Tiefversuch (27 liegt nahe am Vortagsbereich). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Lokales tieferes Tief kann zugleich ein älterer Doppeltief-Test sein"
  },
  "c17-15": {
    "heading": "Große Ausweitung und kleiner oberer Versuch",
    "panels": [
      {
        "title": "Spanne wird breiter",
        "note": "höhere Hochs, tiefere Tiefs",
        "bars": [
          [
            50,
            68,
            48,
            66
          ],
          [
            66,
            68,
            36,
            38
          ],
          [
            38,
            74,
            36,
            72
          ],
          [
            72,
            74,
            30,
            32
          ],
          [
            32,
            79,
            30,
            77
          ],
          [
            77,
            79,
            25,
            27
          ],
          [
            27,
            83,
            25,
            81
          ],
          [
            81,
            83,
            47,
            49
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              7,
              70
            ],
            "kind": "reference",
            "label": "früher oben"
          },
          {
            "start": [
              0,
              30
            ],
            "end": [
              7,
              30
            ],
            "kind": "reference",
            "label": "früher unten"
          }
        ],
        "focus": [
          3,
          4,
          5,
          6,
          7
        ]
      },
      {
        "title": "Kleinerer Abschnitt",
        "note": "zwei obere Angriffe trennen",
        "bars": [
          [
            48,
            66,
            46,
            64
          ],
          [
            64,
            66,
            56,
            58
          ],
          [
            58,
            73,
            56,
            71
          ],
          [
            71,
            73,
            62,
            64
          ],
          [
            64,
            82,
            62,
            80
          ],
          [
            80,
            82,
            52,
            54
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              73
            ],
            "end": [
              5,
              73
            ],
            "kind": "reference",
            "label": "erstes Hoch 73"
          }
        ],
        "focus": [
          2,
          4,
          5
        ]
      }
    ],
    "footer": "Die gewählte Größe bestimmt die Versuchszählung",
    "description": "Eigenes schematisches Beispiel: links Spanne wird breiter (höhere Hochs, tiefere Tiefs), rechts Kleinerer Abschnitt (zwei obere Angriffe trennen). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Die gewählte Größe bestimmt die Versuchszählung"
  },
  "c17-16": {
    "heading": "Großer Doppeltief-Pullback mit zwei Beinen",
    "panels": [
      {
        "title": "Zwei größere Abwärtsbeine",
        "note": "früher Tiefbereich wird geprüft",
        "bars": [
          [
            60,
            62,
            41,
            43
          ],
          [
            43,
            45,
            30,
            34
          ],
          [
            34,
            51,
            33,
            49
          ],
          [
            49,
            67,
            48,
            65
          ],
          [
            65,
            66,
            48,
            50
          ],
          [
            50,
            53,
            39,
            46
          ],
          [
            46,
            55,
            43,
            49
          ],
          [
            49,
            50,
            31,
            36
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              7,
              30
            ],
            "kind": "reference",
            "label": "Tiefbereich 30"
          }
        ],
        "focus": [
          1,
          7
        ]
      },
      {
        "title": "Zweite Käuferauslösung",
        "note": "Signal und Auslösung folgen",
        "bars": [
          [
            60,
            62,
            41,
            43
          ],
          [
            43,
            45,
            30,
            34
          ],
          [
            34,
            51,
            33,
            49
          ],
          [
            49,
            67,
            48,
            65
          ],
          [
            65,
            66,
            48,
            50
          ],
          [
            50,
            53,
            39,
            46
          ],
          [
            46,
            55,
            43,
            49
          ],
          [
            49,
            50,
            31,
            36
          ],
          [
            36,
            52,
            35,
            50
          ],
          [
            50,
            65,
            49,
            63
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              9,
              30
            ],
            "kind": "reference",
            "label": "Tiefbereich 30"
          },
          {
            "start": [
              0,
              50
            ],
            "end": [
              9,
              50
            ],
            "kind": "reference",
            "label": "Signalhoch 50"
          }
        ],
        "focus": [
          8,
          9
        ]
      }
    ],
    "footer": "Zwei komplexe Beine bestehen aus mehr als zwei Bars",
    "description": "Eigenes schematisches Beispiel: links Zwei größere Abwärtsbeine (früher Tiefbereich wird geprüft), rechts Zweite Käuferauslösung (Signal und Auslösung folgen). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Zwei komplexe Beine bestehen aus mehr als zwei Bars"
  },
  "c17-17": {
    "heading": "Abwärtsbruch des lokalen Gegenkanals",
    "panels": [
      {
        "title": "Steigender Gegenkanal",
        "note": "zunächst Bärenflaggen-Idee",
        "bars": [
          [
            34,
            47,
            32,
            45
          ],
          [
            45,
            47,
            38,
            40
          ],
          [
            40,
            56,
            38,
            54
          ],
          [
            54,
            56,
            46,
            48
          ],
          [
            48,
            64,
            46,
            62
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              4,
              30
            ],
            "kind": "reference",
            "label": "Tiefbereich 30"
          },
          {
            "start": [
              0,
              32
            ],
            "end": [
              4,
              46
            ],
            "kind": "trend",
            "label": ""
          },
          {
            "start": [
              0,
              47
            ],
            "end": [
              4,
              61
            ],
            "kind": "channel",
            "label": ""
          }
        ],
        "focus": []
      },
      {
        "title": "Ausbruch kehrt zurück",
        "note": "erwarteter Abwärtsanschluss fehlt",
        "bars": [
          [
            34,
            47,
            32,
            45
          ],
          [
            45,
            47,
            38,
            40
          ],
          [
            40,
            56,
            38,
            54
          ],
          [
            54,
            56,
            46,
            48
          ],
          [
            48,
            64,
            46,
            62
          ],
          [
            62,
            64,
            29,
            34
          ],
          [
            34,
            55,
            33,
            53
          ],
          [
            53,
            67,
            52,
            65
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              7,
              30
            ],
            "kind": "reference",
            "label": "Tiefbereich 30"
          },
          {
            "start": [
              0,
              32
            ],
            "end": [
              4,
              46
            ],
            "kind": "trend",
            "label": ""
          },
          {
            "start": [
              0,
              47
            ],
            "end": [
              4,
              61
            ],
            "kind": "channel",
            "label": ""
          }
        ],
        "focus": [
          5,
          6,
          7
        ]
      }
    ],
    "footer": "Horizontale Tiefreferenz und geneigte Kanalgrenze getrennt lesen",
    "description": "Eigenes schematisches Beispiel: links Steigender Gegenkanal (zunächst Bärenflaggen-Idee), rechts Ausbruch kehrt zurück (erwarteter Abwärtsanschluss fehlt). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Horizontale Tiefreferenz und geneigte Kanalgrenze getrennt lesen"
  },
  "c17-18": {
    "heading": "Drei Abwärtsversuche im komplexen Rücklauf",
    "panels": [
      {
        "title": "Erste zwei Versuche",
        "note": "Gegenbewegungen dazwischen",
        "bars": [
          [
            74,
            76,
            54,
            56
          ],
          [
            56,
            67,
            54,
            65
          ],
          [
            65,
            67,
            42,
            44
          ],
          [
            44,
            59,
            42,
            57
          ],
          [
            57,
            59,
            32,
            34
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              4,
              30
            ],
            "kind": "reference",
            "label": "unterer Bereich"
          }
        ],
        "focus": [
          0,
          2
        ]
      },
      {
        "title": "Dritter Versuch und Reaktion",
        "note": "keilartige Bullenflaggen-Idee",
        "bars": [
          [
            74,
            76,
            54,
            56
          ],
          [
            56,
            67,
            54,
            65
          ],
          [
            65,
            67,
            42,
            44
          ],
          [
            44,
            59,
            42,
            57
          ],
          [
            57,
            59,
            32,
            34
          ],
          [
            34,
            53,
            32,
            51
          ],
          [
            51,
            66,
            49,
            64
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              6,
              30
            ],
            "kind": "reference",
            "label": "unterer Bereich"
          }
        ],
        "focus": [
          4,
          5,
          6
        ]
      }
    ],
    "footer": "Die Zählung vor der Folge begründen",
    "description": "Eigenes schematisches Beispiel: links Erste zwei Versuche (Gegenbewegungen dazwischen), rechts Dritter Versuch und Reaktion (keilartige Bullenflaggen-Idee). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Die Zählung vor der Folge begründen"
  },
  "c17-19": {
    "heading": "Doppeltop-Idee wird von Käuferstärke überboten",
    "panels": [
      {
        "title": "Zwei obere Tests",
        "note": "Verkäuferhypothese ist noch offen",
        "bars": [
          [
            35,
            50,
            33,
            48
          ],
          [
            48,
            64,
            46,
            62
          ],
          [
            62,
            64,
            51,
            53
          ],
          [
            53,
            62,
            51,
            60
          ],
          [
            60,
            62,
            50,
            52
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              64
            ],
            "end": [
              4,
              64
            ],
            "kind": "reference",
            "label": "Hochbereich 64"
          }
        ],
        "focus": [
          1,
          3
        ]
      },
      {
        "title": "Großer Käuferausbruch",
        "note": "neue Stärke mit Anschluss",
        "bars": [
          [
            35,
            50,
            33,
            48
          ],
          [
            48,
            64,
            46,
            62
          ],
          [
            62,
            64,
            51,
            53
          ],
          [
            53,
            62,
            51,
            60
          ],
          [
            60,
            62,
            50,
            52
          ],
          [
            52,
            75,
            51,
            73
          ],
          [
            73,
            84,
            72,
            82
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              64
            ],
            "end": [
              6,
              64
            ],
            "kind": "reference",
            "label": "Hochbereich 64"
          }
        ],
        "focus": [
          5,
          6
        ]
      }
    ],
    "footer": "Neue Bars können die bisherige Gegenidee widerlegen",
    "description": "Eigenes schematisches Beispiel: links Zwei obere Tests (Verkäuferhypothese ist noch offen), rechts Großer Käuferausbruch (neue Stärke mit Anschluss). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Neue Bars können die bisherige Gegenidee widerlegen"
  },
  "c17-20": {
    "heading": "Lokale tiefere Tiefs im größeren höheren Tief",
    "panels": [
      {
        "title": "Rücklauf nach Käuferausbruch",
        "note": "kleine Tiefs 58, 56, 54",
        "bars": [
          [
            36,
            48,
            30,
            46
          ],
          [
            46,
            64,
            45,
            62
          ],
          [
            62,
            83,
            61,
            81
          ],
          [
            81,
            82,
            58,
            62
          ],
          [
            62,
            74,
            61,
            72
          ],
          [
            72,
            73,
            56,
            60
          ],
          [
            60,
            72,
            59,
            70
          ],
          [
            70,
            71,
            54,
            59
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              7,
              30
            ],
            "kind": "reference",
            "label": "großes Tief 30"
          },
          {
            "start": [
              0,
              60
            ],
            "end": [
              7,
              60
            ],
            "kind": "reference",
            "label": "Ausbruch 60"
          }
        ],
        "focus": [
          3,
          5,
          7
        ]
      },
      {
        "title": "Reaktion am Ausbruchsbereich",
        "note": "Käufer gewinnen erneut Raum",
        "bars": [
          [
            36,
            48,
            30,
            46
          ],
          [
            46,
            64,
            45,
            62
          ],
          [
            62,
            83,
            61,
            81
          ],
          [
            81,
            82,
            58,
            62
          ],
          [
            62,
            74,
            61,
            72
          ],
          [
            72,
            73,
            56,
            60
          ],
          [
            60,
            72,
            59,
            70
          ],
          [
            70,
            71,
            54,
            59
          ],
          [
            59,
            79,
            58,
            77
          ],
          [
            77,
            87,
            76,
            85
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              9,
              30
            ],
            "kind": "reference",
            "label": "großes Tief 30"
          },
          {
            "start": [
              0,
              60
            ],
            "end": [
              9,
              60
            ],
            "kind": "reference",
            "label": "Ausbruch 60"
          }
        ],
        "focus": [
          8,
          9
        ]
      }
    ],
    "footer": "54 liegt unter 56 und 58, aber weit über 30",
    "description": "Eigenes schematisches Beispiel: links Rücklauf nach Käuferausbruch (kleine Tiefs 58, 56, 54), rechts Reaktion am Ausbruchsbereich (Käufer gewinnen erneut Raum). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. 54 liegt unter 56 und 58, aber weit über 30"
  },
  "c17-21": {
    "heading": "Die Rolle der alten Grenze verändert sich",
    "panels": [
      {
        "title": "Früher überlappend",
        "note": "Range-Lesart begründet",
        "bars": [
          [
            44,
            66,
            42,
            64
          ],
          [
            64,
            66,
            35,
            37
          ],
          [
            37,
            71,
            35,
            69
          ],
          [
            69,
            71,
            31,
            33
          ],
          [
            33,
            68,
            31,
            66
          ],
          [
            66,
            68,
            46,
            48
          ],
          [
            48,
            63,
            46,
            61
          ],
          [
            61,
            63,
            51,
            53
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              7,
              70
            ],
            "kind": "reference",
            "label": "alte Grenze 70"
          }
        ],
        "focus": []
      },
      {
        "title": "Ausbruch und haltender Test",
        "note": "Käuferkontrolle wird deutlicher",
        "bars": [
          [
            44,
            66,
            42,
            64
          ],
          [
            64,
            66,
            35,
            37
          ],
          [
            37,
            71,
            35,
            69
          ],
          [
            69,
            71,
            31,
            33
          ],
          [
            33,
            68,
            31,
            66
          ],
          [
            66,
            68,
            46,
            48
          ],
          [
            48,
            63,
            46,
            61
          ],
          [
            61,
            63,
            51,
            53
          ],
          [
            53,
            76,
            52,
            74
          ],
          [
            74,
            82,
            73,
            80
          ],
          [
            80,
            81,
            60,
            64
          ],
          [
            64,
            83,
            63,
            81
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              11,
              70
            ],
            "kind": "reference",
            "label": "alte Grenze 70"
          }
        ],
        "focus": [
          8,
          9,
          10,
          11
        ]
      }
    ],
    "footer": "Kontext ab der sichtbaren Veränderung aktualisieren",
    "description": "Eigenes schematisches Beispiel: links Früher überlappend (Range-Lesart begründet), rechts Ausbruch und haltender Test (Käuferkontrolle wird deutlicher). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Kontext ab der sichtbaren Veränderung aktualisieren"
  },
  "c17-22": {
    "heading": "Zwanzig Bars getrennt vom Durchschnitt",
    "panels": [
      {
        "title": "Bullenfolge",
        "note": "20 vollständige Fünf-Minuten-Bars",
        "bars": [
          [
            30,
            34,
            29,
            33
          ],
          [
            32,
            36,
            31,
            35
          ],
          [
            34,
            38,
            33,
            37
          ],
          [
            36,
            40,
            35,
            39
          ],
          [
            38,
            42,
            37,
            41
          ],
          [
            40,
            44,
            39,
            43
          ],
          [
            42,
            46,
            41,
            45
          ],
          [
            44,
            48,
            43,
            47
          ],
          [
            46,
            50,
            45,
            49
          ],
          [
            48,
            52,
            47,
            51
          ],
          [
            50,
            54,
            49,
            53
          ],
          [
            52,
            56,
            51,
            55
          ],
          [
            54,
            58,
            53,
            57
          ],
          [
            56,
            60,
            55,
            59
          ],
          [
            58,
            62,
            57,
            61
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            62,
            66,
            61,
            65
          ],
          [
            64,
            68,
            63,
            67
          ],
          [
            66,
            70,
            65,
            69
          ],
          [
            68,
            72,
            67,
            71
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              24.0
            ],
            "end": [
              1,
              26.0
            ],
            "kind": "average",
            "label": "SMA 10"
          },
          {
            "start": [
              1,
              26.0
            ],
            "end": [
              2,
              28.0
            ],
            "kind": "average"
          },
          {
            "start": [
              2,
              28.0
            ],
            "end": [
              3,
              30.0
            ],
            "kind": "average"
          },
          {
            "start": [
              3,
              30.0
            ],
            "end": [
              4,
              32.0
            ],
            "kind": "average"
          },
          {
            "start": [
              4,
              32.0
            ],
            "end": [
              5,
              34.0
            ],
            "kind": "average"
          },
          {
            "start": [
              5,
              34.0
            ],
            "end": [
              6,
              36.0
            ],
            "kind": "average"
          },
          {
            "start": [
              6,
              36.0
            ],
            "end": [
              7,
              38.0
            ],
            "kind": "average"
          },
          {
            "start": [
              7,
              38.0
            ],
            "end": [
              8,
              40.0
            ],
            "kind": "average"
          },
          {
            "start": [
              8,
              40.0
            ],
            "end": [
              9,
              42.0
            ],
            "kind": "average"
          },
          {
            "start": [
              9,
              42.0
            ],
            "end": [
              10,
              44.0
            ],
            "kind": "average"
          },
          {
            "start": [
              10,
              44.0
            ],
            "end": [
              11,
              46.0
            ],
            "kind": "average"
          },
          {
            "start": [
              11,
              46.0
            ],
            "end": [
              12,
              48.0
            ],
            "kind": "average"
          },
          {
            "start": [
              12,
              48.0
            ],
            "end": [
              13,
              50.0
            ],
            "kind": "average"
          },
          {
            "start": [
              13,
              50.0
            ],
            "end": [
              14,
              52.0
            ],
            "kind": "average"
          },
          {
            "start": [
              14,
              52.0
            ],
            "end": [
              15,
              54.0
            ],
            "kind": "average"
          },
          {
            "start": [
              15,
              54.0
            ],
            "end": [
              16,
              56.0
            ],
            "kind": "average"
          },
          {
            "start": [
              16,
              56.0
            ],
            "end": [
              17,
              58.0
            ],
            "kind": "average"
          },
          {
            "start": [
              17,
              58.0
            ],
            "end": [
              18,
              60.0
            ],
            "kind": "average"
          },
          {
            "start": [
              18,
              60.0
            ],
            "end": [
              19,
              62.0
            ],
            "kind": "average"
          }
        ],
        "focus": []
      },
      {
        "title": "Bärenfolge",
        "note": "gleiche Dauer, andere Richtung",
        "bars": [
          [
            70,
            71,
            66,
            67
          ],
          [
            68,
            69,
            64,
            65
          ],
          [
            66,
            67,
            62,
            63
          ],
          [
            64,
            65,
            60,
            61
          ],
          [
            62,
            63,
            58,
            59
          ],
          [
            60,
            61,
            56,
            57
          ],
          [
            58,
            59,
            54,
            55
          ],
          [
            56,
            57,
            52,
            53
          ],
          [
            54,
            55,
            50,
            51
          ],
          [
            52,
            53,
            48,
            49
          ],
          [
            50,
            51,
            46,
            47
          ],
          [
            48,
            49,
            44,
            45
          ],
          [
            46,
            47,
            42,
            43
          ],
          [
            44,
            45,
            40,
            41
          ],
          [
            42,
            43,
            38,
            39
          ],
          [
            40,
            41,
            36,
            37
          ],
          [
            38,
            39,
            34,
            35
          ],
          [
            36,
            37,
            32,
            33
          ],
          [
            34,
            35,
            30,
            31
          ],
          [
            32,
            33,
            28,
            29
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              76.0
            ],
            "end": [
              1,
              74.0
            ],
            "kind": "average",
            "label": "SMA 10"
          },
          {
            "start": [
              1,
              74.0
            ],
            "end": [
              2,
              72.0
            ],
            "kind": "average"
          },
          {
            "start": [
              2,
              72.0
            ],
            "end": [
              3,
              70.0
            ],
            "kind": "average"
          },
          {
            "start": [
              3,
              70.0
            ],
            "end": [
              4,
              68.0
            ],
            "kind": "average"
          },
          {
            "start": [
              4,
              68.0
            ],
            "end": [
              5,
              66.0
            ],
            "kind": "average"
          },
          {
            "start": [
              5,
              66.0
            ],
            "end": [
              6,
              64.0
            ],
            "kind": "average"
          },
          {
            "start": [
              6,
              64.0
            ],
            "end": [
              7,
              62.0
            ],
            "kind": "average"
          },
          {
            "start": [
              7,
              62.0
            ],
            "end": [
              8,
              60.0
            ],
            "kind": "average"
          },
          {
            "start": [
              8,
              60.0
            ],
            "end": [
              9,
              58.0
            ],
            "kind": "average"
          },
          {
            "start": [
              9,
              58.0
            ],
            "end": [
              10,
              56.0
            ],
            "kind": "average"
          },
          {
            "start": [
              10,
              56.0
            ],
            "end": [
              11,
              54.0
            ],
            "kind": "average"
          },
          {
            "start": [
              11,
              54.0
            ],
            "end": [
              12,
              52.0
            ],
            "kind": "average"
          },
          {
            "start": [
              12,
              52.0
            ],
            "end": [
              13,
              50.0
            ],
            "kind": "average"
          },
          {
            "start": [
              13,
              50.0
            ],
            "end": [
              14,
              48.0
            ],
            "kind": "average"
          },
          {
            "start": [
              14,
              48.0
            ],
            "end": [
              15,
              46.0
            ],
            "kind": "average"
          },
          {
            "start": [
              15,
              46.0
            ],
            "end": [
              16,
              44.0
            ],
            "kind": "average"
          },
          {
            "start": [
              16,
              44.0
            ],
            "end": [
              17,
              42.0
            ],
            "kind": "average"
          },
          {
            "start": [
              17,
              42.0
            ],
            "end": [
              18,
              40.0
            ],
            "kind": "average"
          },
          {
            "start": [
              18,
              40.0
            ],
            "end": [
              19,
              38.0
            ],
            "kind": "average"
          }
        ],
        "focus": []
      }
    ],
    "footer": "20 × 5 Minuten = 100 Minuten; keine universelle Orderregel",
    "description": "Eigenes schematisches Beispiel: links Bullenfolge (20 vollständige Fünf-Minuten-Bars), rechts Bärenfolge (gleiche Dauer, andere Richtung). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. 20 × 5 Minuten = 100 Minuten; keine universelle Orderregel"
  },
  "c17-23": {
    "heading": "Kleines Gegensignal in starker Folge",
    "panels": [
      {
        "title": "Verkäuferbar am Hoch",
        "note": "Käuferkontrolle bleibt sichtbar",
        "bars": [
          [
            20,
            34,
            18,
            32
          ],
          [
            32,
            45,
            30,
            43
          ],
          [
            43,
            57,
            41,
            55
          ],
          [
            55,
            66,
            53,
            64
          ],
          [
            64,
            74,
            62,
            72
          ],
          [
            72,
            82,
            70,
            80
          ],
          [
            80,
            82,
            72,
            74
          ],
          [
            74,
            87,
            73,
            85
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              82
            ],
            "end": [
              7,
              82
            ],
            "kind": "reference",
            "label": "altes Hoch"
          },
          {
            "start": [
              0,
              18
            ],
            "end": [
              7,
              67
            ],
            "kind": "trend",
            "label": ""
          }
        ],
        "focus": [
          6
        ]
      },
      {
        "title": "Käuferreaktion am Tief",
        "note": "Bärenkontrolle bleibt sichtbar",
        "bars": [
          [
            80,
            82,
            66,
            68
          ],
          [
            68,
            70,
            55,
            57
          ],
          [
            57,
            59,
            43,
            45
          ],
          [
            45,
            47,
            34,
            36
          ],
          [
            36,
            38,
            26,
            28
          ],
          [
            28,
            30,
            18,
            20
          ],
          [
            20,
            28,
            18,
            26
          ],
          [
            26,
            27,
            13,
            15
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              18
            ],
            "end": [
              7,
              18
            ],
            "kind": "reference",
            "label": "altes Tief"
          },
          {
            "start": [
              0,
              82
            ],
            "end": [
              7,
              33
            ],
            "kind": "trend",
            "label": ""
          }
        ],
        "focus": [
          6
        ]
      }
    ],
    "footer": "Gegenbar und großer Kontrollwechsel sind verschiedene Aussagen",
    "description": "Eigenes schematisches Beispiel: links Verkäuferbar am Hoch (Käuferkontrolle bleibt sichtbar), rechts Käuferreaktion am Tief (Bärenkontrolle bleibt sichtbar). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Gegenbar und großer Kontrollwechsel sind verschiedene Aussagen"
  },
  "c17-24": {
    "heading": "Frühe Käuferreaktion verliert ihren Anschluss",
    "panels": [
      {
        "title": "Versuch am Tagesstart",
        "note": "Käufer reagieren auf den Bruch",
        "bars": [
          [
            70,
            72,
            58,
            60
          ],
          [
            60,
            69,
            59,
            67
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              58
            ],
            "end": [
              1,
              58
            ],
            "kind": "reference",
            "label": "erstes Tief 58"
          }
        ],
        "focus": [
          1
        ]
      },
      {
        "title": "Erneuter Abwärtsausbruch",
        "note": "Spike, danach Bärenkanal",
        "bars": [
          [
            70,
            72,
            58,
            60
          ],
          [
            60,
            69,
            59,
            67
          ],
          [
            67,
            68,
            55,
            57
          ],
          [
            57,
            59,
            42,
            44
          ],
          [
            44,
            46,
            35,
            37
          ],
          [
            37,
            44,
            36,
            42
          ],
          [
            42,
            43,
            30,
            32
          ],
          [
            32,
            37,
            31,
            35
          ],
          [
            35,
            36,
            23,
            25
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              58
            ],
            "end": [
              8,
              58
            ],
            "kind": "reference",
            "label": "erstes Tief 58"
          }
        ],
        "focus": [
          2,
          3,
          5,
          6,
          7,
          8
        ]
      }
    ],
    "footer": "Der spätere Kanal war beim zweiten Bar noch unbekannt",
    "description": "Eigenes schematisches Beispiel: links Versuch am Tagesstart (Käufer reagieren auf den Bruch), rechts Erneuter Abwärtsausbruch (Spike, danach Bärenkanal). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Der spätere Kanal war beim zweiten Bar noch unbekannt"
  },
  "c17-25": {
    "heading": "Doppelte Preisbereichstests als Trendflaggen",
    "panels": [
      {
        "title": "Doppeltief-Bullenflagge",
        "note": "Pullback in größerer Käuferfolge",
        "bars": [
          [
            20,
            38,
            18,
            36
          ],
          [
            36,
            56,
            34,
            54
          ],
          [
            54,
            72,
            52,
            70
          ],
          [
            70,
            72,
            55,
            57
          ],
          [
            57,
            66,
            55,
            64
          ],
          [
            64,
            66,
            55,
            57
          ],
          [
            57,
            75,
            55,
            73
          ],
          [
            73,
            85,
            71,
            83
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              55
            ],
            "end": [
              7,
              55
            ],
            "kind": "reference",
            "label": "lokaler Test 55"
          }
        ],
        "focus": [
          3,
          5,
          6
        ]
      },
      {
        "title": "Doppeltop-Bärenflagge",
        "note": "Pullback in größerer Verkäuferfolge",
        "bars": [
          [
            80,
            82,
            62,
            64
          ],
          [
            64,
            66,
            44,
            46
          ],
          [
            46,
            48,
            28,
            30
          ],
          [
            30,
            45,
            28,
            43
          ],
          [
            43,
            45,
            34,
            36
          ],
          [
            36,
            45,
            34,
            43
          ],
          [
            43,
            45,
            25,
            27
          ],
          [
            27,
            29,
            15,
            17
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              45
            ],
            "end": [
              7,
              45
            ],
            "kind": "reference",
            "label": "lokaler Test 45"
          }
        ],
        "focus": [
          3,
          5,
          6
        ]
      }
    ],
    "footer": "Gleiche Preise erhalten ihre Rolle aus dem größeren Verlauf",
    "description": "Eigenes schematisches Beispiel: links Doppeltief-Bullenflagge (Pullback in größerer Käuferfolge), rechts Doppeltop-Bärenflagge (Pullback in größerer Verkäuferfolge). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Gleiche Preise erhalten ihre Rolle aus dem größeren Verlauf"
  },
  "c17-26": {
    "heading": "Späterer Rücklauf zum Kanalbeginn",
    "panels": [
      {
        "title": "Spike und Kanal",
        "note": "Kanalstart 45, großer Ursprung 20",
        "bars": [
          [
            22,
            30,
            20,
            28
          ],
          [
            28,
            48,
            27,
            46
          ],
          [
            46,
            56,
            45,
            54
          ],
          [
            54,
            64,
            53,
            62
          ],
          [
            62,
            72,
            61,
            70
          ],
          [
            70,
            76,
            69,
            74
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              45
            ],
            "end": [
              5,
              45
            ],
            "kind": "reference",
            "label": "Kanalstart 45"
          },
          {
            "start": [
              0,
              20
            ],
            "end": [
              5,
              20
            ],
            "kind": "reference",
            "label": "Ursprung 20"
          }
        ],
        "focus": [
          2
        ]
      },
      {
        "title": "Test bis 44",
        "note": "großer Ursprung bleibt entfernt",
        "bars": [
          [
            22,
            30,
            20,
            28
          ],
          [
            28,
            48,
            27,
            46
          ],
          [
            46,
            56,
            45,
            54
          ],
          [
            54,
            64,
            53,
            62
          ],
          [
            62,
            72,
            61,
            70
          ],
          [
            70,
            76,
            69,
            74
          ],
          [
            74,
            75,
            58,
            60
          ],
          [
            60,
            61,
            44,
            48
          ],
          [
            48,
            65,
            47,
            63
          ],
          [
            63,
            78,
            62,
            76
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              45
            ],
            "end": [
              9,
              45
            ],
            "kind": "reference",
            "label": "Kanalstart 45"
          },
          {
            "start": [
              0,
              20
            ],
            "end": [
              9,
              20
            ],
            "kind": "reference",
            "label": "Ursprung 20"
          }
        ],
        "focus": [
          7,
          8,
          9
        ]
      }
    ],
    "footer": "Kanalbeginn und Ursprung der Gesamtbewegung auseinanderhalten",
    "description": "Eigenes schematisches Beispiel: links Spike und Kanal (Kanalstart 45, großer Ursprung 20), rechts Test bis 44 (großer Ursprung bleibt entfernt). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Kanalbeginn und Ursprung der Gesamtbewegung auseinanderhalten"
  },
  "c17-27": {
    "heading": "Später Durchschnittstest mit zwei offenen Folgen",
    "panels": [
      {
        "title": "Trendreaktion gelingt",
        "note": "Käufer kehren zurück",
        "bars": [
          [
            22,
            39,
            20,
            37
          ],
          [
            37,
            53,
            35,
            51
          ],
          [
            51,
            66,
            49,
            64
          ],
          [
            64,
            79,
            62,
            77
          ],
          [
            77,
            87,
            75,
            85
          ],
          [
            85,
            87,
            71,
            73
          ],
          [
            73,
            75,
            59,
            61
          ],
          [
            61,
            71,
            59,
            69
          ],
          [
            69,
            84,
            67,
            82
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              17.0
            ],
            "end": [
              1,
              26.0
            ],
            "kind": "average",
            "label": "SMA 5"
          },
          {
            "start": [
              1,
              26.0
            ],
            "end": [
              2,
              36.8
            ],
            "kind": "average"
          },
          {
            "start": [
              2,
              36.8
            ],
            "end": [
              3,
              49.4
            ],
            "kind": "average"
          },
          {
            "start": [
              3,
              49.4
            ],
            "end": [
              4,
              62.8
            ],
            "kind": "average"
          },
          {
            "start": [
              4,
              62.8
            ],
            "end": [
              5,
              70.0
            ],
            "kind": "average"
          },
          {
            "start": [
              5,
              70.0
            ],
            "end": [
              6,
              72.0
            ],
            "kind": "average"
          },
          {
            "start": [
              6,
              72.0
            ],
            "end": [
              7,
              73.0
            ],
            "kind": "average"
          },
          {
            "start": [
              7,
              73.0
            ],
            "end": [
              8,
              74.0
            ],
            "kind": "average"
          }
        ],
        "focus": [
          6,
          7,
          8
        ]
      },
      {
        "title": "Rückkehr wird stärker",
        "note": "Fortsetzungsidee geschwächt",
        "bars": [
          [
            22,
            39,
            20,
            37
          ],
          [
            37,
            53,
            35,
            51
          ],
          [
            51,
            66,
            49,
            64
          ],
          [
            64,
            79,
            62,
            77
          ],
          [
            77,
            87,
            75,
            85
          ],
          [
            85,
            87,
            71,
            73
          ],
          [
            73,
            75,
            59,
            61
          ],
          [
            61,
            63,
            48,
            50
          ],
          [
            50,
            52,
            39,
            41
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              17.0
            ],
            "end": [
              1,
              26.0
            ],
            "kind": "average",
            "label": "SMA 5"
          },
          {
            "start": [
              1,
              26.0
            ],
            "end": [
              2,
              36.8
            ],
            "kind": "average"
          },
          {
            "start": [
              2,
              36.8
            ],
            "end": [
              3,
              49.4
            ],
            "kind": "average"
          },
          {
            "start": [
              3,
              49.4
            ],
            "end": [
              4,
              62.8
            ],
            "kind": "average"
          },
          {
            "start": [
              4,
              62.8
            ],
            "end": [
              5,
              70.0
            ],
            "kind": "average"
          },
          {
            "start": [
              5,
              70.0
            ],
            "end": [
              6,
              72.0
            ],
            "kind": "average"
          },
          {
            "start": [
              6,
              72.0
            ],
            "end": [
              7,
              69.2
            ],
            "kind": "average"
          },
          {
            "start": [
              7,
              69.2
            ],
            "end": [
              8,
              62.0
            ],
            "kind": "average"
          }
        ],
        "focus": [
          6,
          7,
          8
        ]
      }
    ],
    "footer": "Uhrzeit allein entscheidet keine der beiden Folgen",
    "description": "Eigenes schematisches Beispiel: links Trendreaktion gelingt (Käufer kehren zurück), rechts Rückkehr wird stärker (Fortsetzungsidee geschwächt). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Uhrzeit allein entscheidet keine der beiden Folgen"
  },
  "c17-28": {
    "heading": "Dein Protokoll am horizontalen Bereich",
    "panels": [
      {
        "title": "Bekannter Preis und Kontext",
        "note": "Hypothese vor dem Test festhalten",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              70
            ],
            "end": [
              4,
              70
            ],
            "kind": "reference",
            "label": "Referenz 70"
          }
        ],
        "focus": []
      },
      {
        "title": "Neue Reaktion und Zielraum",
        "note": "Auslösung und Verlustgrenze prüfen",
        "bars": [
          [
            48,
            60,
            46,
            58
          ],
          [
            58,
            70,
            56,
            68
          ],
          [
            68,
            70,
            58,
            60
          ],
          [
            60,
            62,
            52,
            54
          ],
          [
            54,
            67,
            52,
            65
          ],
          [
            65,
            76,
            62,
            68
          ],
          [
            68,
            70,
            53,
            55
          ],
          [
            55,
            57,
            43,
            45
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              78
            ],
            "end": [
              7,
              78
            ],
            "kind": "reference",
            "label": "Schutz 78"
          },
          {
            "start": [
              0,
              68
            ],
            "end": [
              7,
              68
            ],
            "kind": "reference",
            "label": "Auslösung 68"
          },
          {
            "start": [
              0,
              50
            ],
            "end": [
              7,
              50
            ],
            "kind": "reference",
            "label": "Zielbereich 50"
          }
        ],
        "focus": [
          5,
          6,
          7
        ]
      }
    ],
    "footer": "Ein zweites Signal vergrößert kein vorab festgelegtes Geldrisiko",
    "description": "Eigenes schematisches Beispiel: links Bekannter Preis und Kontext (Hypothese vor dem Test festhalten), rechts Neue Reaktion und Zielraum (Auslösung und Verlustgrenze prüfen). Gepunktet: beschrifteter Preisbereich; durchgezogen: Trendseite; gestrichelt: Kanalgrenze; strichpunktiert: berechneter gleitender Durchschnitt. Ein zweites Signal vergrößert kein vorab festgelegtes Geldrisiko"
  }
};

export const chapterSeventeenDescriptions = Object.fromEntries(
  Object.entries(chapterSeventeenCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterSeventeenScenarioId, string>;

function PanelDrawing({ value, x }: { value: Panel; x: number }) {
  const width = 343;
  const y = (price: number) => 260 - price * 1.55;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(23, spacing * 0.48);
  const cx = (index: number) => x + 26 + (index + 0.5) * spacing;
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.lines.map((line, index) => <g key={`line-${index}`}><line
      className="c17-teaching-line" data-kind={line.kind}
      x1={cx(line.start[0])} y1={y(line.start[1])}
      x2={cx(line.end[0])} y2={y(line.end[1])}
      stroke="currentColor" strokeWidth={2} opacity={0.65}
      strokeDasharray={line.kind === 'channel' ? '6 4' : line.kind === 'reference' ? '2 4' : line.kind === 'average' ? '8 3 2 3' : undefined} />{line.label ? <text className="chart-small" x={x + width - 18 - (index % 3) * 95} y={y(line.end[1]) - 5} textAnchor="end">{line.label}</text> : null}</g>)}
    {value.bars.map(([open, high, low, close], index) => {
      const tone = close >= open ? 'bull' : 'bear';
      const xBar = cx(index);
      return <g key={index}>
        {value.focus.includes(index) ? <rect className="chart-zone"
          x={xBar - bodyWidth / 2 - 7} y={y(high) - 8}
          width={bodyWidth + 14} height={y(low) - y(high) + 16} rx={6} /> : null}
        <line className={`candle-wick ${tone}`} x1={xBar} x2={xBar} y1={y(high)} y2={y(low)} />
        <rect className={`candle-body ${tone}`} x={xBar - bodyWidth / 2}
          y={Math.min(y(open), y(close))} width={bodyWidth}
          height={Math.max(3, Math.abs(y(open) - y(close)))} rx={2} />
      </g>;
    })}
    <text className="chart-small strong" x={x + width / 2} y={286} textAnchor="middle">{value.note}</text>
  </g>;
}

export function ChapterSeventeenChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterSeventeenCharts, scenario)) return null;
  const definition = chapterSeventeenCharts[scenario as ChapterSeventeenScenarioId];
  return <g className="chapter-seventeen-chart">
    <text className="chart-kicker" x={380} y={28} textAnchor="middle">{definition.heading}</text>
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <text className="chart-small strong" x={380} y={320} textAnchor="middle">{definition.footer}</text>
  </g>;
}
