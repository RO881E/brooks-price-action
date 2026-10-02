import type { ChartScenarioId, ChapterTwentySixScenarioId } from '../content/types';

type Bar = readonly [open: number, high: number, low: number, close: number];
export interface TeachingLine {
  start: readonly [index: number, price: number]; end: readonly [index: number, price: number];
  kind: 'trend' | 'channel' | 'reference' | 'average'; label?: string;
}
interface Panel { title: string; note: string; bars: readonly Bar[]; lines: readonly TeachingLine[]; focus: readonly number[]; zones?: readonly (readonly [number,number])[]; }
interface Definition { heading: string; panels: readonly [Panel, Panel]; footer: string; description: string; comparison?: Panel; }

interface PanelDraft { points: number[]; title: string; refs: [number,string][]; note: string; lines: TeachingLine[]; }
interface ChartDraft { heading: string; panels: [PanelDraft, PanelDraft]; footer: string; description: string; comparison?: PanelDraft; }
const toBars = (points: readonly number[]): Bar[] => points.slice(1).map((c,i) => [points[i],Math.max(points[i],c)+1,Math.min(points[i],c)-1,c]);
export function aggregateThree(values: readonly Bar[]): Bar[] {
 if(values.length % 3 !== 0) throw new Error('Incomplete three-bar block');
 return Array.from({length: values.length/3}, (_,i) => { const block=values.slice(i*3,i*3+3); return [block[0][0],Math.max(...block.map(b=>b[1])),Math.min(...block.map(b=>b[2])),block[2][3]]; });
}
const makePanel = (p: PanelDraft, aggregated = false): Panel => { const raw=toBars(p.points);const bars=aggregated?aggregateThree(raw):raw; return {title:p.title,note:p.note,bars,focus:[],lines:[...p.lines,...p.refs.map(([price,label])=>({start:[0,price] as const,end:[bars.length-1,price] as const,kind:'reference' as const,label}))]}; };
const drafts: Record<ChapterTwentySixScenarioId,ChartDraft> = {
  "c26-01": {
    "heading": "26.01 · Mehrere Swings bilden eine Treppe",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51,
          43
        ],
        "title": "Erste zwei Hochanläufe",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68,
          58,
          75
        ],
        "title": "Weitere Stufen",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Die Treppe entsteht aus einer Folge, nicht aus einer einzelnen Bar.",
    "description": "Eigenes schematisches Beispiel: links Erste zwei Hochanläufe, rechts Weitere Stufen. Links liegen zunächst zwei Hochanläufe vor. Rechts kommen weitere höhere Hochs und höhere Rücklauftiefs hinzu. Die neue Folge ergänzt den früheren Stand, ohne dessen Bars zu verändern."
  },
  "c26-02": {
    "heading": "26.02 · Neue Hochs trotz tiefer Rückläufe",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51
        ],
        "title": "Neues Hoch 52",
        "refs": [
          [
            43,
            "Altes Hoch 43"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60
        ],
        "title": "Rücklauf und neuer Anlauf",
        "refs": [
          [
            43,
            "Altes Hoch 43"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Überlappung kann zu einem gerichteten Kanal gehören.",
    "description": "Eigenes schematisches Beispiel: links Neues Hoch 52, rechts Rücklauf und neuer Anlauf. Das erste gezeigte Swinghoch liegt bei 43. Nach dem nächsten Hoch 52 fällt der Schluss auf 43 zurück und der Wick bis 42. Der alte Ausbruchspunkt wird damit unterschritten, während die Folge später neue Hochs erreicht."
  },
  "c26-03": {
    "heading": "26.03 · Die bärische Treppe spiegeln",
    "panels": [
      {
        "points": [
          70,
          58,
          65,
          49,
          57
        ],
        "title": "Erster Verkäuferabschnitt",
        "refs": [
          [
            57,
            "Früheres Tief 57"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          70,
          58,
          65,
          49,
          57,
          40,
          49,
          32,
          42,
          25
        ],
        "title": "Weitere tiefere Stufen",
        "refs": [
          [
            57,
            "Früheres Tief 57"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Eine Gegenrally beendet den Abwärtstrend nicht allein.",
    "description": "Eigenes schematisches Beispiel: links Erster Verkäuferabschnitt, rechts Weitere tiefere Stufen. Die Folge links fällt zunächst von 70 auf 58, steigt auf 65 und erreicht danach 49. Rechts folgen weitere tiefere Tiefs. Die Rally nach dem neuen Tief handelt wieder oberhalb der früheren Tiefreferenz 57."
  },
  "c26-04": {
    "heading": "26.04 · Versetzte Ranges und durchgehende Swings",
    "panels": [
      {
        "points": [
          30,
          41,
          39,
          42,
          40,
          51,
          49,
          52,
          50,
          62,
          60,
          63
        ],
        "title": "Versetzte Balancen",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68,
          58,
          75
        ],
        "title": "Breite Swingfolge",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Der Preisweg zählt mehr als ein sauberer Mustername.",
    "description": "Eigenes schematisches Beispiel: links Versetzte Balancen, rechts Breite Swingfolge. Links bewegen sich die Preise in kurzen versetzten Balancen. Rechts entsteht eine Folge breiter Rückläufe ohne längere horizontale Ruhe. Beide Varianten gewinnen nach oben Raum, aber ihr Ablauf ist verschieden."
  },
  "c26-05": {
    "heading": "26.05 · Eine einzelne Trendverletzung neu einordnen",
    "panels": [
      {
        "points": [
          72,
          59,
          66,
          50,
          56,
          43
        ],
        "title": "Gegenhoch 57",
        "refs": [
          [
            57,
            "Gegenhoch 57"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          72,
          59,
          66,
          50,
          56,
          43,
          59,
          39
        ],
        "title": "Überschreiten und Rückkehr",
        "refs": [
          [
            57,
            "Gegenhoch 57"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Eine spätere Fortsetzung löscht eine frühere Verletzung nicht.",
    "description": "Eigenes schematisches Beispiel: links Gegenhoch 57, rechts Überschreiten und Rückkehr. Links liegt eine bärische Treppe mit Gegenhoch 57 vor. Rechts steigt die nächste Rally mit Hoch 60 darüber und fällt anschließend auf 39. Der Gegenausbruch war real; der spätere Verkäuferanschluss ebenfalls."
  },
  "c26-06": {
    "heading": "26.06 · Kanalgrenzen sind eine Arbeitshypothese",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51
        ],
        "title": "Linien im frühen Stand",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": [
          {
            "start": [
              0,
              28
            ],
            "end": [
              5,
              45.5
            ],
            "kind": "trend"
          },
          {
            "start": [
              0,
              46
            ],
            "end": [
              5,
              63.5
            ],
            "kind": "channel"
          }
        ]
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68,
          58,
          75
        ],
        "title": "Dieselbe Zeichnung später",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": [
          {
            "start": [
              0,
              28
            ],
            "end": [
              8,
              56
            ],
            "kind": "trend"
          },
          {
            "start": [
              0,
              46
            ],
            "end": [
              8,
              74
            ],
            "kind": "channel"
          }
        ]
      }
    ],
    "footer": "Ein Kanal ist eine überprüfbare Näherung.",
    "description": "Eigenes schematisches Beispiel: links Linien im frühen Stand, rechts Dieselbe Zeichnung später. Beide Panels verwenden dieselben zwei Linien. Ihr Abstand beträgt an jedem gemeinsamen Index 18 Einheiten. Rechts kommen weitere Bars hinzu; die Linien werden für diese Vergleichsfolge nicht nachträglich verschoben."
  },
  "c26-07": {
    "heading": "26.07 · Breite messen, ohne Wahrscheinlichkeit zu erfinden",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51
        ],
        "title": "Breite 18",
        "refs": [
          [
            40,
            "Unten 40"
          ],
          [
            58,
            "Oben 58"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51
        ],
        "title": "Breite 30",
        "refs": [
          [
            40,
            "Unten 40"
          ],
          [
            70,
            "Oben 70"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Kanalbreite misst Raum und nicht Erfolgswahrscheinlichkeit.",
    "description": "Eigenes schematisches Beispiel: links Breite 18, rechts Breite 30. Links liegen am markierten Index die Grenzen bei 40 und 58. Rechts liegen sie bei 40 und 70. Die Abstände betragen 18 beziehungsweise 30 relative Einheiten; die Zahlen beschreiben ausschließlich Geometrie."
  },
  "c26-08": {
    "heading": "26.08 · Lokal aufwärts, im größeren Ausschnitt abwärts",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          63
        ],
        "title": "Lokale Käufer-Treppe",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          90,
          72,
          51,
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          63,
          47,
          34,
          24
        ],
        "title": "Größerer Verkäuferkontext",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Lokale Richtung und größere Struktur können gegeneinander stehen.",
    "description": "Eigenes schematisches Beispiel: links Lokale Käufer-Treppe, rechts Größerer Verkäuferkontext. Links ist nur die Käuferfolge von 30 bis 63 sichtbar. Rechts geht ihr ein Verkäuferimpuls von 90 bis 30 voraus, danach folgt ein Abwärtsbein. Die lokale Treppe ist im längeren Verlauf ein Rücklauf gegen die frühere Verkäuferbewegung."
  },
  "c26-09": {
    "heading": "26.09 · Verdichten verändert die sichtbare Struktur",
    "panels": [
      {
        "points": [
          30,
          40,
          35,
          46,
          42,
          51,
          45,
          55,
          49,
          59,
          53,
          62,
          56
        ],
        "title": "Zwölf kleine Bars",
        "refs": [],
        "note": "Kleine Zeitebene",
        "lines": []
      },
      {
        "points": [
          30,
          40,
          35,
          46,
          42,
          51,
          45,
          55,
          49,
          59,
          53,
          62,
          56
        ],
        "title": "Vier Dreierblock-Bars",
        "refs": [],
        "note": "Exakte Dreier-Aggregation",
        "lines": []
      }
    ],
    "footer": "Aggregation bewahrt die Hülle und verliert Zwischenwege.",
    "description": "Eigenes schematisches Beispiel: links Zwölf kleine Bars, rechts Vier Dreierblock-Bars. Links stehen zwölf erfundene kleine Bars. Rechts wird jeweils ein Dreierblock exakt verdichtet. Die vier großen Bars haben dieselben Block-Extreme und Schlusskurse; rechts werden keine neuen Kurse erfunden."
  },
  "c26-10": {
    "heading": "26.10 · Ein früher Dreh vor der Grenze zählt als Information",
    "panels": [
      {
        "points": [
          67,
          55,
          43
        ],
        "title": "Tief 42 vor Grenze 40",
        "refs": [
          [
            40,
            "Referenz 40"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          67,
          55,
          43,
          51,
          59
        ],
        "title": "Frühe Käuferreaktion",
        "refs": [
          [
            40,
            "Referenz 40"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Einen früheren Dreh nicht als perfekte Berührung umdeuten.",
    "description": "Eigenes schematisches Beispiel: links Tief 42 vor Grenze 40, rechts Frühe Käuferreaktion. Links endet ein Verkäuferbein mit einem Wick bis 42 bei einer Referenz 40. Rechts folgt eine Käuferreaktion. Die Grenze wird in keinem der beiden Panels berührt; die Reaktion beginnt zwei Einheiten darüber."
  },
  "c26-11": {
    "heading": "26.11 · Richtungshandel und Gegenbewegung getrennt planen",
    "panels": [
      {
        "points": [
          70,
          58,
          64,
          48,
          55
        ],
        "title": "Lokales Käuferbein",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          70,
          58,
          64,
          48,
          55,
          39,
          46,
          31
        ],
        "title": "Verkäuferfolge setzt fort",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Gegenbein und größere Richtung brauchen getrennte Pläne.",
    "description": "Eigenes schematisches Beispiel: links Lokales Käuferbein, rechts Verkäuferfolge setzt fort. Links wird nur das lokale Käuferbein im Bearkanal hervorgehoben. Rechts kommt die folgende Verkäuferstrecke hinzu. Der kurzfristige Käufergewinn und die größere Abwärtsrichtung widersprechen sich in dieser Folge nicht."
  },
  "c26-12": {
    "heading": "26.12 · Den Kanalrand nicht ohne Signal vorwegnehmen",
    "panels": [
      {
        "points": [
          47,
          53
        ],
        "title": "Signalhoch 54",
        "refs": [
          [
            55,
            "Trigger 55"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          47,
          53,
          60,
          57,
          65
        ],
        "title": "Trigger später besucht",
        "refs": [
          [
            55,
            "Trigger 55"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Die Nähe zum Rand ersetzt keinen festgelegten Trigger.",
    "description": "Eigenes schematisches Beispiel: links Signalhoch 54, rechts Trigger später besucht. Links endet die Rücklaufbar mit Hoch 54. Der gedachte Käufertrigger liegt bei 55 und ist noch nicht erreicht. Rechts steigt eine spätere Bar darüber. Der Preis hat sich dann bereits bewegt; der zusätzliche Auslöser kann einen schlechteren Entry bedeuten."
  },
  "c26-13": {
    "heading": "26.13 · Nicht ausgeführte Limits sind keine Gewinne",
    "panels": [
      {
        "points": [
          65,
          54,
          44,
          52,
          58
        ],
        "title": "Dreh vor Limit 40",
        "refs": [
          [
            40,
            "Kauflimit 40"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          65,
          54,
          39,
          48,
          55
        ],
        "title": "Limitpreis wird besucht",
        "refs": [
          [
            40,
            "Kauflimit 40"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Ein verpasster Preis ist kein ausgeführter Einstieg.",
    "description": "Eigenes schematisches Beispiel: links Dreh vor Limit 40, rechts Limitpreis wird besucht. Links liegt die Kaufgrenze bei 40, der Markt dreht aber schon mit Tief 43. Rechts unterschreitet ein anderer Verlauf 40. Nur im rechten Verlauf ist der gedachte Preis überhaupt besucht; auch dort liefert das Schema keinen Brokerbeleg."
  },
  "c26-14": {
    "heading": "26.14 · Ausdehnung beobachten, ohne feste Umkehrdistanz",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51,
          43
        ],
        "title": "Bisherige Hochschritte",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68,
          82,
          90,
          87,
          96
        ],
        "title": "Spätere Beschleunigung",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Eine vorige Extension bestimmt nicht die nächste.",
    "description": "Eigenes schematisches Beispiel: links Bisherige Hochschritte, rechts Spätere Beschleunigung. Links erweitert sich der zweite Hochpunkt um zehn Einheiten. Rechts vergrößert die nächste Käuferstrecke den Raum viel stärker. Die vorherige Distanz war bekannt; die nächste Extension bleibt bis zu ihrem Verlauf offen."
  },
  "c26-15": {
    "heading": "26.15 · Nachkaufen braucht ein gemeinsames Risikobudget",
    "panels": [
      {
        "points": [
          62,
          50,
          46
        ],
        "title": "Zwei gedachte Käufe",
        "refs": [
          [
            50,
            "Kauf 50"
          ],
          [
            46,
            "Kauf 46"
          ],
          [
            40,
            "Stop 40"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          62,
          50,
          46,
          39
        ],
        "title": "Beide Verluststrecken",
        "refs": [
          [
            50,
            "Kauf 50"
          ],
          [
            46,
            "Kauf 46"
          ],
          [
            40,
            "Stop 40"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Ein besserer Durchschnittspreis kann trotzdem mehr Gesamtrisiko bedeuten.",
    "description": "Eigenes schematisches Beispiel: links Zwei gedachte Käufe, rechts Beide Verluststrecken. Im gedachten Plan wird eine Einheit bei 50 und eine weitere bei 46 gekauft. Beide besitzen Stop 40. Bei einem angenommenen Dollar pro Preiseinheit beträgt das Bruttorisiko 10 + 6 = 16 Dollar, noch ohne Kosten oder Slippage."
  },
  "c26-16": {
    "heading": "26.16 · Eine Stufe kann den Rhythmus wechseln",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68
        ],
        "title": "Überlappende Treppe",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68,
          82,
          90,
          87,
          96
        ],
        "title": "Neuer schneller Impuls",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Neue Geschwindigkeit verlangt eine neue Beurteilung.",
    "description": "Eigenes schematisches Beispiel: links Überlappende Treppe, rechts Neuer schneller Impuls. Links endet die bekannte Treppe bei 68. Rechts steigen die nächsten Schlusskurse auf 82 und 90; die folgende Rückgabe endet bei 87. Die neue Erweiterung ist größer als die bisherigen Hochschritte."
  },
  "c26-17": {
    "heading": "26.17 · Eine Gegenbar kann sichtbar und unausgelöst bleiben",
    "panels": [
      {
        "points": [
          82,
          79
        ],
        "title": "Gegenbar nach Ausbruch",
        "refs": [
          [
            77,
            "Shorttrigger 77"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          82,
          79,
          88,
          94
        ],
        "title": "Käufer setzen fort",
        "refs": [
          [
            77,
            "Shorttrigger 77"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Eine rote Gegenbar ist noch kein ausgelöster Short.",
    "description": "Eigenes schematisches Beispiel: links Gegenbar nach Ausbruch, rechts Käufer setzen fort. Links besitzt die rote Gegenbar Tief 78; der Beispieltrigger liegt bei 77. Rechts folgt eine neue Käuferbar, deren Tief bei 78 bleibt, und anschließend höhere Preise. Der Trigger wird in dieser gesamten Folge nicht besucht."
  },
  "c26-18": {
    "heading": "26.18 · Ausbruch aus dem Kanal oder kurze Überschreitung",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68,
          82,
          90,
          87,
          96
        ],
        "title": "Ausbruch setzt fort",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68,
          82,
          66,
          58,
          63,
          49
        ],
        "title": "Überschreitung kippt",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Die erste Überschreitung entscheidet den weiteren Verlauf nicht.",
    "description": "Eigenes schematisches Beispiel: links Ausbruch setzt fort, rechts Überschreitung kippt. Beide Verläufe erreichen aus derselben Treppe zunächst 82. Links folgen weitere Hochs, rechts kehrt der Preis auf 66 und 58 zurück. Die identische erste Erweiterung liefert allein noch keine Entscheidung zwischen den beiden Folgen."
  },
  "c26-19": {
    "heading": "26.19 · Eine parallele Projektion mit festen Ankern",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68
        ],
        "title": "Zwei parallele Linien",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              6,
              48
            ],
            "kind": "trend"
          },
          {
            "start": [
              0,
              48
            ],
            "end": [
              6,
              66
            ],
            "kind": "channel"
          }
        ]
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68,
          82,
          90
        ],
        "title": "Dritte Linie als Projektion",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": [
          {
            "start": [
              0,
              30
            ],
            "end": [
              8,
              54
            ],
            "kind": "trend"
          },
          {
            "start": [
              0,
              48
            ],
            "end": [
              8,
              72
            ],
            "kind": "channel"
          },
          {
            "start": [
              0,
              66
            ],
            "end": [
              8,
              90
            ],
            "kind": "channel"
          }
        ]
      }
    ],
    "footer": "Gleiche parallele Abstände sind Geometrie, keine Gewinnzusage.",
    "description": "Eigenes schematisches Beispiel: links Zwei parallele Linien, rechts Dritte Linie als Projektion. Am gemeinsamen letzten Index liegen die unteren beiden Linien bei 54 und 72. Die dritte Linie liegt bei 90. Jeder Abstand beträgt 18 Einheiten; die Steigung beträgt für alle Linien drei Einheiten pro Barindex."
  },
  "c26-20": {
    "heading": "26.20 · Eine Überschreitung kann in zwei Gegenbeinen korrigieren",
    "panels": [
      {
        "points": [
          60,
          70,
          82,
          72,
          66,
          73
        ],
        "title": "Erstes Bein und Gegenreaktion",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          60,
          70,
          82,
          72,
          66,
          73,
          63,
          55
        ],
        "title": "Zweites Verkäuferbein",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Ein zweites Gegenbein wird erst mit seinen Bars sichtbar.",
    "description": "Eigenes schematisches Beispiel: links Erstes Bein und Gegenreaktion, rechts Zweites Verkäuferbein. Links stehen das erste Verkäuferbein von 82 auf 66 und ein Rücklauf auf 73. Rechts folgt ein zweites Verkäuferbein bis 55. Die Zwischenreaktion trennt beide Abschnitte; der zweite Abschnitt ist links noch unbekannt."
  },
  "c26-21": {
    "heading": "26.21 · Die Extension vom alten Extrem messen",
    "panels": [
      {
        "points": [
          30,
          44,
          36,
          54,
          45,
          60
        ],
        "title": "Erste kleinere Erweiterung",
        "refs": [
          [
            45,
            "Hoch 45"
          ],
          [
            55,
            "Hoch 55"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          44,
          36,
          54,
          45,
          60,
          51,
          63,
          55
        ],
        "title": "Weitere schrumpfende Stufe",
        "refs": [
          [
            55,
            "Hoch 55"
          ],
          [
            61,
            "Hoch 61"
          ],
          [
            64,
            "Hoch 64"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Weniger neuer Raum bedeutet nicht automatisch Trendende.",
    "description": "Eigenes schematisches Beispiel: links Erste kleinere Erweiterung, rechts Weitere schrumpfende Stufe. Die gezeigten Hochs liegen bei 45, 55, 61 und 64. Die Erweiterungen betragen damit zehn, sechs und drei Einheiten. Zwischen den Hochpunkten bestehen weiterhin Rückläufe und überwiegend höhere Tiefs."
  },
  "c26-22": {
    "heading": "26.22 · Auch die Tiefschritte können schrumpfen",
    "panels": [
      {
        "points": [
          70,
          56,
          64,
          46,
          55,
          40,
          49,
          37,
          45
        ],
        "title": "Tiefschritte werden kleiner",
        "refs": [
          [
            55,
            "Tief 55"
          ],
          [
            45,
            "Tief 45"
          ],
          [
            39,
            "Tief 39"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          70,
          56,
          64,
          46,
          55,
          40,
          49,
          37,
          45,
          53,
          61
        ],
        "title": "Neue Käuferreaktion",
        "refs": [
          [
            36,
            "Tief 36"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Kleinere Tiefschritte und neue Käuferkontrolle getrennt prüfen.",
    "description": "Eigenes schematisches Beispiel: links Tiefschritte werden kleiner, rechts Neue Käuferreaktion. Die gespiegelte Folge besitzt Tiefs bei 55, 45, 39 und 36. Die Erweiterungen betragen wieder zehn, sechs und drei Einheiten. Rechts kommt nach dem letzten Tief eine Käuferbewegung hinzu; sie ist eine neue Beobachtung und keine im Tief enthaltene Garantie."
  },
  "c26-23": {
    "heading": "26.23 · Drei Anläufe allein erzwingen keine Umkehr",
    "panels": [
      {
        "points": [
          30,
          44,
          36,
          54,
          45,
          60,
          51,
          63,
          55
        ],
        "title": "Schrumpfende Extensions",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          44,
          36,
          54,
          45,
          60,
          51,
          63,
          55,
          61,
          71,
          68,
          80
        ],
        "title": "Käufer setzen trotzdem fort",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Die Zahl der Anläufe ersetzt keine Gegenbestätigung.",
    "description": "Eigenes schematisches Beispiel: links Schrumpfende Extensions, rechts Käufer setzen trotzdem fort. Links stehen vier Hochpunkte mit kleiner werdender Extension. Rechts endet ein kurzer Rücklauf, danach folgen neue Hochs bis 80. Die Zählung war korrekt, doch die größere Verkäuferumkehr bleibt in dieser Folge aus."
  },
  "c26-24": {
    "heading": "26.24 · Schrumpfende Stufen sind nicht immer ein sauberer Keil",
    "panels": [
      {
        "points": [
          30,
          44,
          36,
          54,
          45,
          60,
          51,
          63,
          55
        ],
        "title": "Regelmäßige Rückläufe",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          44,
          31,
          54,
          34,
          60,
          39,
          63,
          42
        ],
        "title": "Unregelmäßige tiefere Rückläufe",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Extension und geometrische Form sind getrennte Eigenschaften.",
    "description": "Eigenes schematisches Beispiel: links Regelmäßige Rückläufe, rechts Unregelmäßige tiefere Rückläufe. Beide Panels erreichen dieselben Hochpunkte 45, 55, 61 und 64. Rechts liegen die Rücklauftiefs deutlich tiefer und unregelmäßiger. Die Hochfortschritte schrumpfen trotzdem; die untere Begrenzung passt nicht zur gleichen engen Zeichnung."
  },
  "c26-25": {
    "heading": "26.25 · Schwäche, Bruch und Rücktest zeitlich trennen",
    "panels": [
      {
        "points": [
          30,
          44,
          36,
          54,
          45,
          60,
          51,
          63,
          55
        ],
        "title": "Kleinere Hochschritte",
        "refs": [
          [
            50,
            "Vorheriges Tief 50"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          44,
          36,
          54,
          45,
          60,
          51,
          63,
          55,
          48,
          54,
          42,
          47,
          36
        ],
        "title": "Bruch, Rücktest, Anschluss",
        "refs": [
          [
            50,
            "Vorheriges Tief 50"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Warnhinweis, Bruch und Rücktest liefern nacheinander Information.",
    "description": "Eigenes schematisches Beispiel: links Kleinere Hochschritte, rechts Bruch, Rücktest, Anschluss. Links endet die Folge bei 55 nach dem letzten kleineren Hoch. Rechts fällt der Preis unter die Rücklauftiefreferenz 50, erholt sich auf 54 und fällt weiter auf 36. Erst rechts stehen Bruch, Rücktest und neuer Verkäuferanschluss gemeinsam zur Verfügung."
  },
  "c26-26": {
    "heading": "26.26 · Den Stop dem breiten Rücklauf zuordnen",
    "panels": [
      {
        "points": [
          48,
          56,
          60
        ],
        "title": "Zwei Stopbezüge",
        "refs": [
          [
            60,
            "Entry 60"
          ],
          [
            55,
            "Eng 55"
          ],
          [
            47,
            "Weiter 47"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          48,
          56,
          60,
          52,
          63,
          70
        ],
        "title": "Rücklauf trifft engeren Stop",
        "refs": [
          [
            60,
            "Entry 60"
          ],
          [
            55,
            "Eng 55"
          ],
          [
            47,
            "Weiter 47"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Ein gehaltener Kanal kann trotzdem einen engen Stop auslösen.",
    "description": "Eigenes schematisches Beispiel: links Zwei Stopbezüge, rechts Rücklauf trifft engeren Stop. Links markiert der gedachte Plan Entry 60, engen Stop 55 und weiteren Stop 47. Rechts reicht der Rücklauf mit Wick bis 51 und wird danach wieder aufgenommen. Damit ist 55 besucht, während 47 in dieser Folge unberührt bleibt."
  },
  "c26-27": {
    "heading": "26.27 · Großer Stop begrenzt die Stückzahl",
    "panels": [
      {
        "points": [
          48,
          56,
          60
        ],
        "title": "Abstand 13 Punkte",
        "refs": [
          [
            60,
            "Entry 60"
          ],
          [
            47,
            "Stop 47"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          48,
          56,
          60,
          52,
          63,
          70
        ],
        "title": "Budget 80; je Einheit 30",
        "refs": [
          [
            60,
            "Entry 60"
          ],
          [
            47,
            "Stop 47"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Stopstrecke, Punktwert und Kostenreserve gehören in dieselbe Rechnung.",
    "description": "Eigenes schematisches Beispiel: links Abstand 13 Punkte, rechts Budget 80; je Einheit 30. Für Entry 60 und Stop 47 beträgt die Strecke 13 Punkte. Mit dem ausdrücklich angenommenen Punktwert zwei Dollar und vier Dollar Kostenreserve ergibt das 30 Dollar Planrisiko je Einheit. In 80 Dollar Budget passen zwei Einheiten mit zusammen 60 Dollar."
  },
  "c26-28": {
    "heading": "26.28 · Ein Teilverkauf verändert den verbleibenden Plan",
    "panels": [
      {
        "points": [
          45,
          50,
          58
        ],
        "title": "Ein Teil erreicht Ziel 58",
        "refs": [
          [
            50,
            "Entry 50"
          ],
          [
            58,
            "Teilziel 58"
          ],
          [
            44,
            "Reststop 44"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          45,
          50,
          58,
          52,
          61
        ],
        "title": "Restposition bleibt offen",
        "refs": [
          [
            50,
            "Entry 50"
          ],
          [
            58,
            "Teilziel 58"
          ],
          [
            44,
            "Reststop 44"
          ]
        ],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Teilgewinn und Restposition müssen getrennt gerechnet werden.",
    "description": "Eigenes schematisches Beispiel: links Ein Teil erreicht Ziel 58, rechts Restposition bleibt offen. Im Gedankenbeispiel starten zwei Einheiten bei 50. Eine wird bei 58 geschlossen, die andere bleibt mit Stop 44 offen. Ohne Kosten ergeben acht Einheiten realisierter Preisgewinn und sechs Einheiten verbleibendes Preisrisiko vom Entry zum Stop."
  },
  "c26-29": {
    "heading": "26.29 · Lernfall: Gegenimpulse wechseln die Kontrolle",
    "panels": [
      {
        "points": [
          70,
          56,
          38,
          59,
          43
        ],
        "title": "Früher Käuferimpuls kippt",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          70,
          56,
          38,
          59,
          43,
          52,
          40,
          31
        ],
        "title": "Verkäufer gewinnen neuen Raum",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Ein einzelner Impuls beweist keine dauerhafte Kontrolle.",
    "description": "Eigenes schematisches Beispiel: links Früher Käuferimpuls kippt, rechts Verkäufer gewinnen neuen Raum. Links steigt der Preis kräftig von 38 auf 59, verliert den Raum aber bis 43. Rechts folgen nach einer Zwischenrally auf 52 neue Verkäufe bis 31. Eine lokale Käuferidee und die spätere größere Verkäuferkontrolle sind zeitlich verschiedene Zustände."
  },
  "c26-30": {
    "heading": "26.30 · Lernfall: Drei mögliche Folgen derselben Treppe",
    "panels": [
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          60,
          51,
          68,
          58,
          75
        ],
        "title": "Normale Treppe",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      },
      {
        "points": [
          30,
          42,
          35,
          51,
          43,
          57,
          47,
          60,
          52,
          62
        ],
        "title": "Kleinere Fortschritte",
        "refs": [],
        "note": "Relative Preise · Zeit →",
        "lines": []
      }
    ],
    "footer": "Die nächste Stufe wird erst mit der nächsten Folge bekannt.",
    "description": "Eigenes schematisches Beispiel: links normale Treppe, Mitte Beschleunigung, rechts kleinere Hochfortschritte. Alle drei Folgen beginnen mit denselben vier OHLC-Bars.",
    "comparison": {
      "points": [
        30,
        42,
        35,
        51,
        43,
        71,
        83,
        80,
        94
      ],
      "title": "Beschleunigung",
      "refs": [],
      "note": "Relative Preise · Zeit →",
      "lines": []
    }
  }
};
export const chapterTwentySixCharts = Object.fromEntries(Object.entries(drafts).map(([id,d]) => [id,{...d,panels:[makePanel(d.panels[0]),makePanel(d.panels[1],id==='c26-09')] as const,comparison:d.comparison?makePanel(d.comparison):undefined}])) as Record<ChapterTwentySixScenarioId,Definition>;

export const chapterTwentySixDescriptions = Object.fromEntries(
  Object.entries(chapterTwentySixCharts).map(([id, definition]) => [id, definition.description]),
) as Record<ChapterTwentySixScenarioId, string>;

function WrappedLabel({ text, x, y, width = 64 }: { text: string; x: number; y: number; width?: number }) {
 const lines: string[] = []; for (const word of text.split(' ')) { if (!lines.length || (lines.at(-1)!.length + word.length + 1 > width)) lines.push(word); else lines[lines.length - 1] += ` ${word}`; }
 return <text className="chart-small strong" x={x} y={y} textAnchor="middle">{lines.map((line, i) => <tspan key={i} x={x} dy={i === 0 ? 0 : 13}>{line}</tspan>)}</text>;
}
function PanelDrawing({ value, x, width = 343 }: { value: Panel; x: number; width?: number }) {
  const y = (price: number) => 260 - price * 1.55;
  const spacing = (width - 52) / value.bars.length;
  const bodyWidth = Math.min(23, spacing * 0.48);
  const cx = (index: number) => x + 26 + (index + 0.5) * spacing;
  return <g>
    <rect className="chart-panel" x={x} y={65} width={width} height={230} rx={14} />
    <text className="chart-panel-title" x={x + width / 2} y={87} textAnchor="middle">{value.title}</text>
    {value.zones?.map(([low,high], index) => <rect key={`zone-${index}`} className="chart-zone" x={x+15} y={y(high)} width={width-30} height={y(low)-y(high)} rx={5} />)}
    {value.lines.map((line, index) => <g key={`line-${index}`}><line
      className="c26-teaching-line" data-kind={line.kind}
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

export function ChapterTwentySixChart({ scenario }: { scenario: ChartScenarioId }) {
  if (!Object.hasOwn(chapterTwentySixCharts, scenario)) return null;
  const definition = chapterTwentySixCharts[scenario as ChapterTwentySixScenarioId];
  return <g className="chapter-twenty-six-chart">
    <WrappedLabel text={definition.heading} x={380} y={23} width={76} />
    {definition.comparison ? <>
      <PanelDrawing value={definition.panels[0]} x={20} width={233} />
      <PanelDrawing value={definition.comparison} x={263} width={233} />
      <PanelDrawing value={definition.panels[1]} x={506} width={233} />
    </> : definition.panels.map((value, index) => <PanelDrawing key={index} value={value} x={30 + index * 357} />)}
    <WrappedLabel text={definition.footer} x={380} y={307} width={82} />
  </g>;
}
