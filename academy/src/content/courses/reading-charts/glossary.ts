import type { GlossaryEntry } from '../../glossary';
export const chartsGlossary: GlossaryEntry[] = [
  {
    "term": "Chart",
    "definition": "Eine Darstellung ausgewählter Daten mit festgelegten Achsen und Zeichenregeln. Sie ist kein Auftrag und keine Ausführungszusage.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Zeitachse",
    "definition": "Die Achse, auf der im Zeit-Chart die Abschnitte von früher nach später angeordnet sind.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Preisachse",
    "definition": "Die Achse, auf der Preise nach der genannten Einheit und Skala dargestellt werden.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Eröffnung",
    "definition": "Der erste vorhandene Preis im ausgewählten Abschnitt und in der genannten Datenart. Nicht automatisch die Eröffnung des ganzen Handelstages.",
    "aliases": [
      "Open",
      "O"
    ],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Schluss",
    "definition": "Der letzte vorhandene Preis eines abgeschlossenen Abschnitts. In einer laufenden Anzeige ist der aktuelle letzte Preis noch nicht endgültig.",
    "aliases": [
      "Close",
      "C"
    ],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Hoch",
    "definition": "Der höchste Preis des ausgewählten Abschnitts aus der genannten Datenart.",
    "aliases": [
      "High",
      "H"
    ],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Tief",
    "definition": "Der niedrigste Preis des ausgewählten Abschnitts aus der genannten Datenart.",
    "aliases": [
      "Low",
      "L"
    ],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "OHLC",
    "definition": "Vier Kennwerte in der Reihenfolge Eröffnung, Hoch, Tief und Schluss. Sie enthalten nicht jede Zwischenstation.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Preisspanne",
    "definition": "Die Entfernung von Tief bis Hoch im betrachteten Abschnitt. Eine Preisentfernung, keine Stückzahl oder persönliche Gewinnangabe.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Kerzenkörper",
    "definition": "Die Fläche zwischen Eröffnung und Schluss in einer Kerzendarstellung. Ihre Höhe ist die absolute Preisentfernung zwischen diesen Werten.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Schatten",
    "definition": "Die Linie vom Körper zum Hoch oder Tief einer Kerze. Sie zeigt Preise außerhalb des Körpers.",
    "aliases": [
      "Docht"
    ],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Doji",
    "definition": "Eine Kerze mit gleichem oder nahe liegendem Eröffnungs- und Schlusswert. Ihre gesamte Preisspanne muss deshalb nicht klein sein.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Handelsvolumen",
    "definition": "Die im genannten Abschnitt gehandelte Menge. Jede gehandelte Einheit zählt einmal; Kauf- und Verkaufsseite verdoppeln sie nicht.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Datenlücke",
    "definition": "Ein Bereich mit fehlenden Daten. Seine Ursache ist zu prüfen; fehlende Meldungen beweisen keinen unveränderten Markt.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Schlusslinie",
    "definition": "Eine Linie, die die Schlusswerte aufeinanderfolgender Abschnitte verbindet. Die Verbindung belegt keine genaue Zwischenfolge.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "HLC",
    "definition": "Eine Darstellung mit Hoch, Tief und Schluss, ohne Eröffnungsangabe.",
    "aliases": [
      "HLC-Balken"
    ],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Legende",
    "definition": "Die Erklärung der Zeichen, Farben und Abkürzungen einer Darstellung.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Körperanteil",
    "definition": "Die Körperhöhe geteilt durch die gesamte Hoch-Tief-Spanne. Ein Formanteil, keine Gewinnwahrscheinlichkeit; bei Spanne null nicht definiert.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Schlusslage",
    "definition": "Die Entfernung des Schlusses vom Tief geteilt durch die gesamte Spanne. Null Prozent bedeutet am Tief, hundert Prozent am Hoch; bei Spanne null nicht definiert.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Eröffnungslücke",
    "definition": "Hier der Abstand der neuen Eröffnung vom vorherigen Schluss. Die Definition nennt diese beiden Bezugspreise; vollständige Spannen können trotzdem überlappen.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Spannenüberlappung",
    "definition": "Der gemeinsame Bereich zweier Hoch-Tief-Spannen. Seine Breite gibt weder Aufenthaltsdauer noch tatsächlich gehandelte Mengen an.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Verdichtung",
    "definition": "Das Zusammenfassen mehrerer Daten durch eine kleinere Auswahl. Weggelassene Werte lassen sich daraus meist nicht eindeutig zurückrechnen.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  }
];
