import type { ChartScenarioId, ChapterTwentyFiveScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number]; end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average'; label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; zones?: readonly (readonly [number,number])[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; }

export const chapterTwentyFiveCharts: Record<ChapterTwentyFiveScenarioId,Definition> = {
  "c25-01": {
    "heading": "25.01 · Drei Phasen auf einer Zeitachse",
    "panels": [
      {
        "title": "Impuls und Pause",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ]
        ],
        "lines": [],
        "focus": []
      },
      {
        "title": "Spätere Wiederaufnahme",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            69,
            62,
            68
          ],
          [
            68,
            75,
            67,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            81,
            71,
            80
          ]
        ],
        "lines": [],
        "focus": []
      }
    ],
    "footer": "Ein Tagestyp beschreibt den Verlauf; er garantiert ihn nicht.",
    "description": "Eigenes schematisches Beispiel: links Impuls und Pause, rechts Spätere Wiederaufnahme. Links steigt der erfundene Preis von 30 auf 63 und pendelt danach um 62. Rechts kommen neue Käuferbars hinzu. Die ersten Bars sind in beiden Panels identisch; der spätere Ausbruch darf den frühen Einstieg nicht nachträglich rechtfertigen."
  },
  "c25-02": {
    "heading": "25.02 · Zeitkorrektur und Preiskorrektur auseinanderhalten",
    "panels": [
      {
        "title": "Lange, flache Pause",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ]
        ],
        "lines": [],
        "focus": []
      },
      {
        "title": "Gleich lang, aber tief",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            58,
            59
          ],
          [
            59,
            60,
            53,
            54
          ],
          [
            54,
            55,
            49,
            50
          ],
          [
            50,
            51,
            45,
            46
          ],
          [
            46,
            47,
            41,
            42
          ],
          [
            42,
            43,
            39,
            40
          ],
          [
            40,
            44,
            39,
            43
          ],
          [
            43,
            44,
            37,
            38
          ]
        ],
        "lines": [],
        "focus": []
      }
    ],
    "footer": "Dauer und Rückgabe messen verschiedene Eigenschaften.",
    "description": "Eigenes schematisches Beispiel: links Lange, flache Pause, rechts Gleich lang, aber tief. Links dauert die Pause acht Bars und bleibt nahe dem frühen Hoch. Rechts dauert die Gegenstrecke ebenfalls acht Bars, gibt aber deutlich mehr Preisraum zurück. Gleiche Dauer bedeutet deshalb keine gleiche Wirkung."
  },
  "c25-03": {
    "heading": "25.03 · Starker Anfang ist Kontext, kein späterer Auftrag",
    "panels": [
      {
        "title": "Käufer gewinnen Raum",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            69,
            62,
            68
          ],
          [
            68,
            75,
            67,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            81,
            71,
            80
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              59
            ],
            "end": [
              15,
              59
            ],
            "kind": "reference",
            "label": "Pause unten 59"
          },
          {
            "start": [
              0,
              65
            ],
            "end": [
              15,
              65
            ],
            "kind": "reference",
            "label": "Pause oben 65"
          }
        ],
        "focus": []
      },
      {
        "title": "Verkäufer gewinnen Raum",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            64,
            57,
            58
          ],
          [
            58,
            59,
            52,
            53
          ],
          [
            53,
            57,
            52,
            56
          ],
          [
            56,
            57,
            47,
            48
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              59
            ],
            "end": [
              15,
              59
            ],
            "kind": "reference",
            "label": "Pause unten 59"
          },
          {
            "start": [
              0,
              65
            ],
            "end": [
              15,
              65
            ],
            "kind": "reference",
            "label": "Pause oben 65"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Neue Bars dürfen die frühe Trendannahme entkräften.",
    "description": "Eigenes schematisches Beispiel: links Käufer gewinnen Raum, rechts Verkäufer gewinnen Raum. Beide Panels besitzen denselben starken Beginn und dieselbe Balance. Links folgen höhere Preise; rechts bricht der Markt unter die Balance und gewinnt Raum nach unten. Die Frühphase allein unterscheidet die beiden Folgen nicht."
  },
  "c25-04": {
    "heading": "25.04 · Bärische Wiederaufnahme spiegelbildlich lesen",
    "panels": [
      {
        "title": "Früher Abverkauf und Pause",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            70,
            71,
            60,
            61
          ],
          [
            61,
            62,
            51,
            52
          ],
          [
            52,
            53,
            42,
            43
          ],
          [
            43,
            44,
            36,
            37
          ],
          [
            37,
            40,
            36,
            39
          ],
          [
            39,
            40,
            35,
            36
          ],
          [
            36,
            41,
            35,
            40
          ],
          [
            40,
            41,
            36,
            37
          ],
          [
            37,
            40,
            36,
            39
          ],
          [
            39,
            40,
            35,
            36
          ],
          [
            36,
            39,
            35,
            38
          ],
          [
            38,
            39,
            36,
            37
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              35
            ],
            "end": [
              11,
              35
            ],
            "kind": "reference",
            "label": "Pause unten 35"
          },
          {
            "start": [
              0,
              41
            ],
            "end": [
              11,
              41
            ],
            "kind": "reference",
            "label": "Pause oben 41"
          }
        ],
        "focus": []
      },
      {
        "title": "Neue Tiefs",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            70,
            71,
            60,
            61
          ],
          [
            61,
            62,
            51,
            52
          ],
          [
            52,
            53,
            42,
            43
          ],
          [
            43,
            44,
            36,
            37
          ],
          [
            37,
            40,
            36,
            39
          ],
          [
            39,
            40,
            35,
            36
          ],
          [
            36,
            41,
            35,
            40
          ],
          [
            40,
            41,
            36,
            37
          ],
          [
            37,
            40,
            36,
            39
          ],
          [
            39,
            40,
            35,
            36
          ],
          [
            36,
            39,
            35,
            38
          ],
          [
            38,
            39,
            36,
            37
          ],
          [
            37,
            38,
            31,
            32
          ],
          [
            32,
            33,
            25,
            26
          ],
          [
            26,
            29,
            25,
            28
          ],
          [
            28,
            29,
            19,
            20
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              35
            ],
            "end": [
              15,
              35
            ],
            "kind": "reference",
            "label": "Pause unten 35"
          },
          {
            "start": [
              0,
              41
            ],
            "end": [
              15,
              41
            ],
            "kind": "reference",
            "label": "Pause oben 41"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Das Phasenmodell gilt für beide Richtungen.",
    "description": "Eigenes schematisches Beispiel: links Früher Abverkauf und Pause, rechts Neue Tiefs. Die linke Folge fällt von 70 auf 37 und pausiert. Rechts kommen neue Tiefs bis 20 hinzu. Unterkante, Ausbruch und Rücktest ersetzen dabei Hoch, Käuferausbruch und Rücksetzer der bullischen Variante."
  },
  "c25-05": {
    "heading": "25.05 · Das Gap braucht einen festen Bezug",
    "panels": [
      {
        "title": "Open 48, alter Schluss 40",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            48,
            57,
            47,
            56
          ],
          [
            56,
            65,
            55,
            64
          ],
          [
            64,
            68,
            63,
            67
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              40
            ],
            "end": [
              2,
              40
            ],
            "kind": "reference",
            "label": "Alter Schluss 40"
          }
        ],
        "focus": []
      },
      {
        "title": "Rücklauf nach frühem Impuls",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            48,
            57,
            47,
            56
          ],
          [
            56,
            65,
            55,
            64
          ],
          [
            64,
            68,
            63,
            67
          ],
          [
            67,
            68,
            62,
            63
          ],
          [
            63,
            64,
            58,
            59
          ],
          [
            59,
            60,
            54,
            55
          ],
          [
            55,
            56,
            50,
            51
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              40
            ],
            "end": [
              6,
              40
            ],
            "kind": "reference",
            "label": "Alter Schluss 40"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Ein Gap lässt sich nur mit benanntem Bezug prüfen.",
    "description": "Eigenes schematisches Beispiel: links Open 48, alter Schluss 40, rechts Rücklauf nach frühem Impuls. Der bekannte Schluss liegt bei 40, die neue Folge eröffnet bei 48. Der Abstand beträgt acht relative Einheiten. Die Markierung bleibt in beiden Panels bei 40, auch wenn der neue Markt zuerst steigt und später zurückläuft."
  },
  "c25-06": {
    "heading": "25.06 · Ein Test muss das Gap nicht schließen",
    "panels": [
      {
        "title": "Test endet oberhalb 40",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            48,
            57,
            47,
            56
          ],
          [
            56,
            65,
            55,
            64
          ],
          [
            64,
            68,
            63,
            67
          ],
          [
            67,
            68,
            62,
            63
          ],
          [
            63,
            64,
            58,
            59
          ],
          [
            59,
            60,
            54,
            55
          ],
          [
            55,
            56,
            50,
            51
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              40
            ],
            "end": [
              6,
              40
            ],
            "kind": "reference",
            "label": "Alter Schluss 40"
          }
        ],
        "focus": []
      },
      {
        "title": "Käufer nehmen erneut auf",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            48,
            57,
            47,
            56
          ],
          [
            56,
            65,
            55,
            64
          ],
          [
            64,
            68,
            63,
            67
          ],
          [
            67,
            68,
            62,
            63
          ],
          [
            63,
            64,
            58,
            59
          ],
          [
            59,
            60,
            54,
            55
          ],
          [
            55,
            56,
            50,
            51
          ],
          [
            51,
            56,
            50,
            55
          ],
          [
            55,
            62,
            54,
            61
          ],
          [
            61,
            69,
            60,
            68
          ],
          [
            68,
            74,
            67,
            73
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              40
            ],
            "end": [
              10,
              40
            ],
            "kind": "reference",
            "label": "Alter Schluss 40"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Annäherung, Berührung und Durchbruch getrennt benennen.",
    "description": "Eigenes schematisches Beispiel: links Test endet oberhalb 40, rechts Käufer nehmen erneut auf. Links erreicht der tiefste Wick des Rücklaufs 50 und bleibt oberhalb der Schlussreferenz 40. Rechts dreht die Folge wieder aufwärts. Die Erholung folgt somit auf einen unvollständigen Test; eine Berührung von 40 hat nicht stattgefunden."
  },
  "c25-07": {
    "heading": "25.07 · Berührung ist noch keine Käuferbestätigung",
    "panels": [
      {
        "title": "Wick berührt Schluss 40",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            65,
            56,
            64
          ],
          [
            64,
            65,
            58,
            59
          ],
          [
            59,
            60,
            50,
            51
          ],
          [
            51,
            52,
            43,
            44
          ],
          [
            44,
            45,
            40,
            41
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              40
            ],
            "end": [
              5,
              40
            ],
            "kind": "reference",
            "label": "Alter Schluss 40"
          }
        ],
        "focus": []
      },
      {
        "title": "Neue Käuferfolge",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            65,
            56,
            64
          ],
          [
            64,
            65,
            58,
            59
          ],
          [
            59,
            60,
            50,
            51
          ],
          [
            51,
            52,
            43,
            44
          ],
          [
            44,
            45,
            40,
            41
          ],
          [
            41,
            48,
            40,
            47
          ],
          [
            47,
            56,
            46,
            55
          ],
          [
            55,
            65,
            54,
            64
          ],
          [
            64,
            73,
            63,
            72
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              40
            ],
            "end": [
              9,
              40
            ],
            "kind": "reference",
            "label": "Alter Schluss 40"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Das Schließen einer Lücke erzeugt keinen Pflichtanstieg.",
    "description": "Eigenes schematisches Beispiel: links Wick berührt Schluss 40, rechts Neue Käuferfolge. Der letzte linke Bar hat einen Schluss bei 41 und einen Wick bis 40. Rechts gewinnt eine neue Käuferfolge wieder Raum. Die Berührung ist bereits links bekannt; der Käuferanschluss erst rechts."
  },
  "c25-08": {
    "heading": "25.08 · Ein Gap-Test kann die Tagesidee zerstören",
    "panels": [
      {
        "title": "Kontakt mit altem Schluss",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            65,
            56,
            64
          ],
          [
            64,
            65,
            58,
            59
          ],
          [
            59,
            60,
            50,
            51
          ],
          [
            51,
            52,
            43,
            44
          ],
          [
            44,
            45,
            40,
            41
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              40
            ],
            "end": [
              5,
              40
            ],
            "kind": "reference",
            "label": "Alter Schluss 40"
          }
        ],
        "focus": []
      },
      {
        "title": "Verkäufer setzen durch",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            65,
            56,
            64
          ],
          [
            64,
            65,
            58,
            59
          ],
          [
            59,
            60,
            50,
            51
          ],
          [
            51,
            52,
            43,
            44
          ],
          [
            44,
            45,
            40,
            41
          ],
          [
            41,
            42,
            34,
            35
          ],
          [
            35,
            36,
            28,
            29
          ],
          [
            29,
            34,
            28,
            33
          ],
          [
            33,
            34,
            23,
            24
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              40
            ],
            "end": [
              9,
              40
            ],
            "kind": "reference",
            "label": "Alter Schluss 40"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Eine frühe Gaprichtung darf durch spätere Struktur ungültig werden.",
    "description": "Eigenes schematisches Beispiel: links Kontakt mit altem Schluss, rechts Verkäufer setzen durch. Links wird die Referenz 40 berührt. Rechts folgen Schlusskurse bei 35 und 29. Der alte Schluss hält in dieser Folge nicht; die ursprüngliche Richtung bleibt deshalb kein überzeugender Grund für einen neuen Kauf."
  },
  "c25-09": {
    "heading": "25.09 · Eine enge Balance braucht feste Grenzen",
    "panels": [
      {
        "title": "Pause nach Impuls",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              9,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              9,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      },
      {
        "title": "Balance bleibt eng",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            75,
            72,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              12,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              12,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Rangegrenzen aus dem benannten Pausenabschnitt ableiten.",
    "description": "Eigenes schematisches Beispiel: links Pause nach Impuls, rechts Balance bleibt eng. Die Pause beginnt im Beispiel nach dem Preis 73. Ihre OHLC-Hülle reicht von 71 bis 75; der frühe Impuls stammt aus dem Bereich 50. Die gepunkteten Linien beziehen sich auf die Pause und bleiben im zweiten Panel unverändert."
  },
  "c25-10": {
    "heading": "25.10 · Ein Gegenausbruch kann ohne Anschluss scheitern",
    "panels": [
      {
        "title": "Gegenausbruch nach unten",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              10,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              10,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      },
      {
        "title": "Zurück in die Range",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              11,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              11,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Rückkehr in die Range und neuer Trendausbruch sind zwei Schritte.",
    "description": "Eigenes schematisches Beispiel: links Gegenausbruch nach unten, rechts Zurück in die Range. Links fällt der Preis mit einem Schluss bei 70 unter die Grenze 71. Rechts kommt ein Schluss bei 74 zurück in die alte Balance hinzu. Diese Rückkehr schwächt die Verkäuferidee, beweist aber noch keinen Ausbruch über 75."
  },
  "c25-11": {
    "heading": "25.11 · Der Fehlausbruch wird erst später zum Fortsetzungsfall",
    "panels": [
      {
        "title": "Rückkehr, noch in Balance",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              11,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              11,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      },
      {
        "title": "Käufer erweitern nach oben",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              15,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              15,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Eine Fortsetzung braucht einen eigenen Auslöser.",
    "description": "Eigenes schematisches Beispiel: links Rückkehr, noch in Balance, rechts Käufer erweitern nach oben. Links endet die Folge wieder bei 74 innerhalb der Range. Rechts folgt ein Bar mit Schluss 78 oberhalb von 75 und danach weiterer Raumgewinn. Nur die neue Folge rechts zeigt eine tatsächliche Käufererweiterung."
  },
  "c25-12": {
    "heading": "25.12 · Eine enge Range kann in Gegenrichtung expandieren",
    "panels": [
      {
        "title": "Wiederaufnahme nach oben",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              15,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              15,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      },
      {
        "title": "Gegenrichtung übernimmt",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            66,
            67
          ],
          [
            67,
            68,
            58,
            59
          ],
          [
            59,
            63,
            58,
            62
          ],
          [
            62,
            63,
            48,
            49
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              13,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              13,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Eine enge Pause kann sich nach beiden Seiten auflösen.",
    "description": "Eigenes schematisches Beispiel: links Wiederaufnahme nach oben, rechts Gegenrichtung übernimmt. Beide Verläufe starten mit derselben engen Pause. Links folgt die Käuferwiederaufnahme; rechts entsteht ein Verkäuferbein bis 49. Das Gegenbeispiel verhindert, dass nur der erfolgreiche Ausgang im Gedächtnis bleibt."
  },
  "c25-13": {
    "heading": "25.13 · Signalabschluss und Trigger trennen",
    "panels": [
      {
        "title": "Signal bekannt, Trigger offen",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              76
            ],
            "end": [
              11,
              76
            ],
            "kind": "reference",
            "label": "Trigger 76"
          }
        ],
        "focus": []
      },
      {
        "title": "Trigger später erreicht",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              76
            ],
            "end": [
              15,
              76
            ],
            "kind": "reference",
            "label": "Trigger 76"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Signal fertig bedeutet noch nicht Order ausgelöst.",
    "description": "Eigenes schematisches Beispiel: links Signal bekannt, Trigger offen, rechts Trigger später erreicht. Links endet die Rückkehrbar bei 74 und ihr Hoch liegt bei 75. Der Beispieltrigger liegt bei 76 und ist noch unberührt. Rechts überschreitet der nächste Bar 76. Die Darstellung trennt dadurch bekannte Signalform und spätere Triggerberührung."
  },
  "c25-14": {
    "heading": "25.14 · Rücktests unterscheiden: halten, eindringen, scheitern",
    "panels": [
      {
        "title": "Rücktest dringt ein",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            79,
            75,
            76
          ],
          [
            76,
            77,
            72,
            73
          ],
          [
            73,
            78,
            72,
            77
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              75
            ],
            "end": [
              15,
              75
            ],
            "kind": "reference",
            "label": "Alte Obergrenze 75"
          }
        ],
        "focus": []
      },
      {
        "title": "Spätere Käuferwirkung",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            79,
            75,
            76
          ],
          [
            76,
            77,
            72,
            73
          ],
          [
            73,
            78,
            72,
            77
          ],
          [
            77,
            84,
            76,
            83
          ],
          [
            83,
            90,
            82,
            89
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              75
            ],
            "end": [
              17,
              75
            ],
            "kind": "reference",
            "label": "Alte Obergrenze 75"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Ein eindringender Rücktest ist weder automatisch Erfolg noch Misserfolg.",
    "description": "Eigenes schematisches Beispiel: links Rücktest dringt ein, rechts Spätere Käuferwirkung. Links läuft der Preis nach Schluss 78 zurück auf 73 und damit unter die alte Obergrenze 75. Rechts folgt neue Käuferwirkung bis 89. Dieser Rücktest dringt ein, wird in der gezeigten Folge aber nicht zum anhaltenden Verkäufertrend."
  },
  "c25-15": {
    "heading": "25.15 · Breiter Strukturstop verlangt kleinere Stückzahl",
    "panels": [
      {
        "title": "Engerer Stop: Abstand 5",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              78
            ],
            "end": [
              15,
              78
            ],
            "kind": "reference",
            "label": "Entry 78"
          },
          {
            "start": [
              0,
              73
            ],
            "end": [
              15,
              73
            ],
            "kind": "reference",
            "label": "Stop 73"
          }
        ],
        "focus": []
      },
      {
        "title": "Weiterer Stop: Abstand 9",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              78
            ],
            "end": [
              15,
              78
            ],
            "kind": "reference",
            "label": "Entry 78"
          },
          {
            "start": [
              0,
              69
            ],
            "end": [
              15,
              69
            ],
            "kind": "reference",
            "label": "Stop 69"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Ein weiterer Stop erhöht das Risiko pro Einheit.",
    "description": "Eigenes schematisches Beispiel: links Engerer Stop: Abstand 5, rechts Weiterer Stop: Abstand 9. Im Beispiel liegt der gedachte Einstieg bei 78, der engere Stop bei 73 und der weitere Stop bei 69. Die Abstände betragen fünf und neun relative Einheiten. Die Linien zeigen Planpreise; sie behaupten keine garantierten Ausführungen."
  },
  "c25-16": {
    "heading": "25.16 · Positionsgröße mit Abrundung berechnen",
    "panels": [
      {
        "title": "Stopabstand 9 Punkte",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              78
            ],
            "end": [
              15,
              78
            ],
            "kind": "reference",
            "label": "Entry 78"
          },
          {
            "start": [
              0,
              69
            ],
            "end": [
              15,
              69
            ],
            "kind": "reference",
            "label": "Stop 69"
          }
        ],
        "focus": []
      },
      {
        "title": "Budget 120; je Einheit 50",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              78
            ],
            "end": [
              15,
              78
            ],
            "kind": "reference",
            "label": "Entry 78"
          },
          {
            "start": [
              0,
              69
            ],
            "end": [
              15,
              69
            ],
            "kind": "reference",
            "label": "Stop 69"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Das Risikobudget wird eingehalten, indem die Stückzahl abgerundet wird.",
    "description": "Eigenes schematisches Beispiel: links Stopabstand 9 Punkte, rechts Budget 120; je Einheit 50. Damit beträgt das geplante Risiko je Kontrakt 9 × 5 + 5 = 50 Dollar. Bei 120 Dollar Gesamtbudget passen zwei Kontrakte: 100 Dollar Planrisiko. Drei würden 150 Dollar ergeben und das Budget überschreiten."
  },
  "c25-17": {
    "heading": "25.17 · Eine späte Auslösung hat weniger verbleibende Zeit",
    "panels": [
      {
        "title": "Lange Pause bis spät",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            64,
            61,
            62
          ],
          [
            62,
            65,
            61,
            64
          ],
          [
            64,
            65,
            60,
            61
          ],
          [
            61,
            64,
            60,
            63
          ],
          [
            63,
            64,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              65
            ],
            "end": [
              17,
              65
            ],
            "kind": "reference",
            "label": "Pause oben 65"
          }
        ],
        "focus": []
      },
      {
        "title": "Nur zwei weitere Bars",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            64,
            61,
            62
          ],
          [
            62,
            65,
            61,
            64
          ],
          [
            64,
            65,
            60,
            61
          ],
          [
            61,
            64,
            60,
            63
          ],
          [
            63,
            64,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            69,
            62,
            68
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
              65
            ],
            "end": [
              19,
              65
            ],
            "kind": "reference",
            "label": "Pause oben 65"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Verbleibende Zeit gehört ebenso zum Plan wie Preisraum.",
    "description": "Eigenes schematisches Beispiel: links Lange Pause bis spät, rechts Nur zwei weitere Bars. Links bleibt der Markt bis zur markierten späten Phase in seiner Balance. Rechts folgen nur noch zwei Bars mit Schluss 68 und 71. Die Zeitachse endet danach ausdrücklich; ein späteres Ziel oberhalb dieser Folge ist nicht gezeigt."
  },
  "c25-18": {
    "heading": "25.18 · Ein Projektionsziel braucht Start und Ansatzpunkt",
    "panels": [
      {
        "title": "Impuls 30 bis 63: 33",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
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
              11,
              30
            ],
            "kind": "reference",
            "label": "Start 30"
          },
          {
            "start": [
              0,
              63
            ],
            "end": [
              11,
              63
            ],
            "kind": "reference",
            "label": "Ende 63"
          }
        ],
        "focus": []
      },
      {
        "title": "Ansatz 60; Projektion 93",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            69,
            62,
            68
          ],
          [
            68,
            75,
            67,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            81,
            71,
            80
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              60
            ],
            "end": [
              15,
              60
            ],
            "kind": "reference",
            "label": "Ansatz 60"
          },
          {
            "start": [
              0,
              93
            ],
            "end": [
              15,
              93
            ],
            "kind": "reference",
            "label": "Ziel 93"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Eine Zielrechnung ist keine Aussage über ihre Erreichbarkeit.",
    "description": "Eigenes schematisches Beispiel: links Impuls 30 bis 63: 33, rechts Ansatz 60; Projektion 93. Der angenommene Ansatzpunkt liegt bei 60. Somit ergibt sich 60 + 33 = 93. Rechts erreicht die spätere Folge lediglich ein Hoch von 81. Das eingezeichnete Projektionsziel bleibt in diesem Beispiel unbesucht."
  },
  "c25-19": {
    "heading": "25.19 · Kleines Restziel und großer Stop passen nicht automatisch",
    "panels": [
      {
        "title": "Entry 78; Ziel nur 81",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              78
            ],
            "end": [
              15,
              78
            ],
            "kind": "reference",
            "label": "Entry 78"
          },
          {
            "start": [
              0,
              81
            ],
            "end": [
              15,
              81
            ],
            "kind": "reference",
            "label": "Ziel 81"
          }
        ],
        "focus": []
      },
      {
        "title": "Stop 69: Risiko 9",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              78
            ],
            "end": [
              15,
              78
            ],
            "kind": "reference",
            "label": "Entry 78"
          },
          {
            "start": [
              0,
              69
            ],
            "end": [
              15,
              69
            ],
            "kind": "reference",
            "label": "Stop 69"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Eine attraktive Struktur ersetzt keine Rechnung des konkreten Entries.",
    "description": "Eigenes schematisches Beispiel: links Entry 78; Ziel nur 81, rechts Stop 69: Risiko 9. Der Beispielentry liegt bei 78, das Ziel bei 81 und der Stop bei 69. Damit stehen drei Einheiten möglichem Bruttogewinn neun Einheiten geplantem Preisrisiko gegenüber. Der Zielraum beträgt ein Drittel des Stopabstands."
  },
  "c25-20": {
    "heading": "25.20 · Nach dem Ausbruch wieder in Balance: Plan neu beurteilen",
    "panels": [
      {
        "title": "Ausbruch über 65",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            69,
            62,
            68
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              59
            ],
            "end": [
              12,
              59
            ],
            "kind": "reference",
            "label": "Pause unten 59"
          },
          {
            "start": [
              0,
              65
            ],
            "end": [
              12,
              65
            ],
            "kind": "reference",
            "label": "Pause oben 65"
          }
        ],
        "focus": []
      },
      {
        "title": "Zurück in alte Balance",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            69,
            62,
            68
          ],
          [
            68,
            69,
            62,
            63
          ],
          [
            63,
            64,
            59,
            60
          ],
          [
            60,
            63,
            59,
            62
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              59
            ],
            "end": [
              15,
              59
            ],
            "kind": "reference",
            "label": "Pause unten 59"
          },
          {
            "start": [
              0,
              65
            ],
            "end": [
              15,
              65
            ],
            "kind": "reference",
            "label": "Pause oben 65"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Ein gescheiterter Ausbruch verlangt eine neue Beurteilung.",
    "description": "Eigenes schematisches Beispiel: links Ausbruch über 65, rechts Zurück in alte Balance. Links bricht die Balance mit Schluss 68 nach oben. Rechts folgen 63, 60 und 62 zurück im alten Bereich. Der Käuferausbruch ist sichtbar, ebenso seine Rückgabe; das Signal muss deshalb im Verlauf neu beurteilt werden."
  },
  "c25-21": {
    "heading": "25.21 · Eine Pause kann mehrere Sitzungen dauern",
    "panels": [
      {
        "title": "Impuls und fünf Sitzungen Pause",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            43,
            29,
            42
          ],
          [
            42,
            57,
            41,
            56
          ],
          [
            56,
            65,
            55,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            66,
            61,
            65
          ],
          [
            65,
            66,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            62,
            63
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
            "label": "Balance unten 60"
          },
          {
            "start": [
              0,
              66
            ],
            "end": [
              7,
              66
            ],
            "kind": "reference",
            "label": "Balance oben 66"
          }
        ],
        "focus": []
      },
      {
        "title": "Zwei neue Käufer-Sitzungen",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            43,
            29,
            42
          ],
          [
            42,
            57,
            41,
            56
          ],
          [
            56,
            65,
            55,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            66,
            61,
            65
          ],
          [
            65,
            66,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            62,
            63
          ],
          [
            63,
            71,
            62,
            70
          ],
          [
            70,
            79,
            69,
            78
          ]
        ],
        "lines": [
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
            "label": "Balance unten 60"
          },
          {
            "start": [
              0,
              66
            ],
            "end": [
              9,
              66
            ],
            "kind": "reference",
            "label": "Balance oben 66"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Eine größere Zeitebene verlangt passende Risiko- und Halteregeln.",
    "description": "Eigenes schematisches Beispiel: links Impuls und fünf Sitzungen Pause, rechts Zwei neue Käufer-Sitzungen. Jede Kerze dieser beiden Panels stellt eine erfundene vollständige Sitzung dar. Nach dem Impuls pendeln fünf Tagesbars in einem Bereich; rechts folgen zwei neue Käufer-Tagesbars. Die Beschriftung wechselt ausdrücklich von Intraday-Bars zu Sitzungen."
  },
  "c25-22": {
    "heading": "25.22 · Gleiche Tageshülle, verschiedener Intraday-Weg",
    "panels": [
      {
        "title": "Früher Impuls, lange Pause",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            69,
            62,
            68
          ],
          [
            68,
            75,
            67,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            81,
            71,
            80
          ]
        ],
        "lines": [],
        "focus": []
      },
      {
        "title": "Andere Folge, gleiche Hülle",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            36,
            29,
            35
          ],
          [
            35,
            36,
            32,
            33
          ],
          [
            33,
            43,
            32,
            42
          ],
          [
            42,
            43,
            39,
            40
          ],
          [
            40,
            56,
            39,
            55
          ],
          [
            55,
            56,
            50,
            51
          ],
          [
            51,
            61,
            50,
            60
          ],
          [
            60,
            61,
            56,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            59,
            60
          ],
          [
            60,
            75,
            59,
            74
          ],
          [
            74,
            81,
            73,
            80
          ]
        ],
        "lines": [],
        "focus": []
      }
    ],
    "footer": "Eine OHLC-Hülle bewahrt Extreme, aber nicht den gesamten Weg.",
    "description": "Eigenes schematisches Beispiel: links Früher Impuls, lange Pause, rechts Andere Folge, gleiche Hülle. Links kommt der frühe Hochbereich vor der langen Pause. Rechts erreicht der Preis denselben Hochbereich erst nach einem tieferen Zwischenweg. Beide Folgen eröffnen bei 30, besitzen Hoch 81 und Tief 29 und schließen bei 80."
  },
  "c25-23": {
    "heading": "25.23 · Replay: Entscheidungen nur mit sichtbaren Bars",
    "panels": [
      {
        "title": "Entscheidung vor Rückkehr",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              10,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              10,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      },
      {
        "title": "Spätere Bars erst danach",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            50,
            61,
            49,
            60
          ],
          [
            60,
            69,
            59,
            68
          ],
          [
            68,
            74,
            67,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            74,
            71,
            73
          ],
          [
            73,
            74,
            71,
            72
          ],
          [
            72,
            75,
            71,
            74
          ],
          [
            74,
            75,
            72,
            73
          ],
          [
            73,
            74,
            69,
            70
          ],
          [
            70,
            75,
            69,
            74
          ],
          [
            74,
            79,
            73,
            78
          ],
          [
            78,
            84,
            77,
            83
          ],
          [
            83,
            84,
            80,
            81
          ],
          [
            81,
            89,
            80,
            88
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              71
            ],
            "end": [
              15,
              71
            ],
            "kind": "reference",
            "label": "Unten 71"
          },
          {
            "start": [
              0,
              75
            ],
            "end": [
              15,
              75
            ],
            "kind": "reference",
            "label": "Oben 75"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Ein guter Replay-Eintrag erhält die damals bekannte Information.",
    "description": "Eigenes schematisches Beispiel: links Entscheidung vor Rückkehr, rechts Spätere Bars erst danach. Links endet der Verlauf mit dem Gegenausbruch auf 70. Rechts zeigt die längere Folge Rückkehr und Käuferausbruch. Das linke Präfix ist unverändert; die rechte Zukunft stand der linken Entscheidung nicht zur Verfügung."
  },
  "c25-24": {
    "heading": "25.24 · Zwei gleiche Starts brauchen unterschiedliche Endurteile",
    "panels": [
      {
        "title": "Wiederaufnahme gelingt",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            69,
            62,
            68
          ],
          [
            68,
            75,
            67,
            74
          ],
          [
            74,
            75,
            71,
            72
          ],
          [
            72,
            81,
            71,
            80
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              59
            ],
            "end": [
              15,
              59
            ],
            "kind": "reference",
            "label": "Pause unten 59"
          },
          {
            "start": [
              0,
              65
            ],
            "end": [
              15,
              65
            ],
            "kind": "reference",
            "label": "Pause oben 65"
          }
        ],
        "focus": []
      },
      {
        "title": "Wiederaufnahme bleibt aus",
        "note": "Relative Preise · Zeit →",
        "bars": [
          [
            30,
            40,
            29,
            39
          ],
          [
            39,
            49,
            38,
            48
          ],
          [
            48,
            58,
            47,
            57
          ],
          [
            57,
            64,
            56,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            59,
            60
          ],
          [
            60,
            64,
            59,
            63
          ],
          [
            63,
            64,
            60,
            61
          ],
          [
            61,
            65,
            60,
            64
          ],
          [
            64,
            65,
            61,
            62
          ],
          [
            62,
            64,
            61,
            63
          ],
          [
            63,
            64,
            57,
            58
          ],
          [
            58,
            59,
            52,
            53
          ],
          [
            53,
            57,
            52,
            56
          ],
          [
            56,
            57,
            47,
            48
          ]
        ],
        "lines": [
          {
            "start": [
              0,
              59
            ],
            "end": [
              15,
              59
            ],
            "kind": "reference",
            "label": "Pause unten 59"
          },
          {
            "start": [
              0,
              65
            ],
            "end": [
              15,
              65
            ],
            "kind": "reference",
            "label": "Pause oben 65"
          }
        ],
        "focus": []
      }
    ],
    "footer": "Prozessqualität und günstiger Ausgang sind verschiedene Dinge.",
    "description": "Eigenes schematisches Beispiel: links Wiederaufnahme gelingt, rechts Wiederaufnahme bleibt aus. Links folgen aus dem bekannten Pausenpräfix Schlusskurse bis 80. Rechts folgen aus exakt demselben Präfix tiefere Schlusskurse bis 48. Beide Verläufe gehören in die Übung, obwohl nur der linke zum gesuchten Tagesnamen passt."
  }
};

export const chapterTwentyFiveDescriptions = Object.fromEntries(
  Object.entries(chapterTwentyFiveCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterTwentyFiveScenarioId, string>;

function WrappedLabel({ text, x, y, width = 64 }: { text: string; x: number; y: number; width?: number }) {
 const lines: string[] = []; for (const word of text.split(' ')) { if (!lines.length || (lines.at(-1)!.length + word.length + 1 > width)) lines.push(word); else lines[lines.length - 1] += ` ${word}`; }
 return <text className="chart-small strong" x={x} y={y} textAnchor="middle">{lines.map((line, i) => <tspan key={i} x={x} dy={i === 0 ? 0 : 13}>{line}</tspan>)}</text>;
}
function PanelDrawing({ value, x }: { value: Panel; x: number }) {
  const width = 343;
  const y = (price: number) => 260 - price * 1.55;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(23, spacing * 0.48);
  const cx = (index: number) => x + 26 + (index + 0.5) * spacing;
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.zones?.map(([low,high], index) => <rect key={`zone-${index}`} className="chart-zone" x={x+15} y={y(high)} width={width-30} height={y(low)-y(high)} rx={5} />)}
    {value.lines.map((line, index) => <g key={`line-${index}`}><line
      className="c25-teaching-line" data-kind={line.kind}
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

export function ChapterTwentyFiveChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterTwentyFiveCharts, scenario)) return null;
  const definition = chapterTwentyFiveCharts[scenario as ChapterTwentyFiveScenarioId];
  return <g className="chapter-twenty-five-chart">
    <WrappedLabel text={definition.heading} x={380} y={23} width={76} />
    {definition.panels.map((value, index) =>
      <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <WrappedLabel text={definition.footer} x={380} y={307} width={82} />
  </g>;
}
