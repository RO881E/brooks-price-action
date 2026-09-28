# WQT Academy V2

Technisches Grundgerüst für den neuen, kursbasierten Lernbereich. Die bestehende Website im
Stammverzeichnis bleibt während der Entwicklung unverändert.

## Was der Pilot bereits kann

- Lernpfad mit aufeinander aufbauenden Mikro-Lektionen
- alternative Kapitelansicht in der Reihenfolge der Buchvorlage
- Erklärungen, eigene interaktive Schaubilder, Verständnisfragen und Zusammenfassungen
- Übungsmodus für bereits abgeschlossene Lektionen
- durchsuchbares Glossar
- lokaler Lernfortschritt unter `wqt-academy-progress-v1`
- reload-feste Hash-URLs für alle Ansichten und Lektionen, zum Beispiel `#/glossary` oder
  `#/lesson/<lesson-id>?step=3`; Browser-Zurück und -Vorwärts funktionieren
- exaktes Fortsetzen: begonnene Lektionen öffnen sich über „Weiterlernen“ am zuletzt
  gültigen Schritt, abgeschlossene Lektionen bewusst von vorn
- lesender Kompatibilitätscheck für `brooks-progress` und `brooks-tr-best`
- responsive Navigation für Desktop und Mobilgeräte

## Gespeicherte Daten

Der Schlüssel `wqt-academy-progress-v1` behält seinen Namen. Der Datensatz darin trägt
seit F-01 `version: 2` und enthält zusätzlich `lessonPositions` (letzter Schritt je begonnener
Lektion). Ältere v1-Datensätze werden beim Laden verlustfrei migriert, unbekannte Zusatzfelder
bleiben erhalten. Ein unlesbarer Datensatz wird vor dem Ersetzen unter
`wqt-academy-progress-backup` gesichert. `brooks-progress` und `brooks-tr-best` werden nur
gelesen, nie verändert.

Der Inhalt ist bewusst als Pilot markiert. Die veröffentlichten Lektionen demonstrieren das
Format; geplante Einträge bilden die Quellenreihenfolge ab, ohne Vollständigkeit vorzutäuschen.

## Lokal starten

```bash
npm install
npm run dev
```

## Qualität prüfen

```bash
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Die End-to-End-Tests prüfen Desktop und Mobilansicht, Navigation, JavaScript-Fehler,
Fortschrittsspeicherung und den unveränderten Erhalt der bestehenden Local-Storage-Schlüssel.

## Geplanter Funktionsausbau

- [Funktionsroadmap](docs/FUNCTIONALITY_ROADMAP.md)
- [Fertige Claude-Prompts je Arbeitspaket](docs/CLAUDE_PROMPTS.md)

Jedes Arbeitspaket wird auf einem eigenen Branch umgesetzt, vollständig
getestet und als separater Pull Request eingereicht. Die Roadmap verändert
keine Buchinhalte und bindet keine WQT-Fachbände ein.
