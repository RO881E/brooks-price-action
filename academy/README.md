# WQT Academy V2

Technisches Grundgerüst für den neuen, kursbasierten Lernbereich. Die bestehende Website im
Stammverzeichnis bleibt während der Entwicklung unverändert.

## Was der Pilot bereits kann

- Lernpfad mit aufeinander aufbauenden Mikro-Lektionen
- alternative Kapitelansicht in der Reihenfolge der Buchvorlage
- Erklärungen, eigene interaktive Schaubilder, Verständnisfragen und Zusammenfassungen
- Review-Zentrale unter „Üben“ mit „Heute fällig“, „Fehler trainieren“, „Kapitel auswählen“
  und „Alles mischen“ (nur Fragen aus abgeschlossenen Lektionen, bis zu 10 pro Runde)
- Fortschrittsseite (`#/progress`) mit abgeschlossenen Lektionen, Kursfortschritt, einmalig
  verdienter XP, Erstversuch-Trefferquote, heute fälligen Wiederholungen, aktiven Lerntagen
  der letzten 7 und 30 Tage, Fortschritt je Buchabschnitt und einer direkten nächsten Aktion
- wählbares Tagesziel (Lernaktivitäten oder XP), Serie aus echten Lerntagen, Wochenansicht und
  fünf einmalige Meilensteine mit dezenter Meldung (ohne Animation bei `prefers-reduced-motion`)
- durchsuchbares Glossar, auch als Link `#/glossary?term=<Begriff>`
- Lesezeichen für Lektionen und Schritte, persönliche Klartextnotizen je Schritt mit Autosave
  und die Übersicht „Gespeichert“ (`#/saved`) mit Sprung zur Fundstelle und „Rückgängig“ beim
  Löschen
- globale Suche (Schaltfläche „Suchen“ oder Taste `/`) über Lektionsname, Zusammenfassung,
  Quelle, Schrittüberschrift, Glossarbegriff und Alias; Umlaute und Groß-/Kleinschreibung
  werden gleich behandelt, gesperrte Lektionen erscheinen nur als Vorschau
- lokaler Lernfortschritt unter `wqt-academy-progress-v1`
- reload-feste Hash-URLs für alle Ansichten und Lektionen, zum Beispiel `#/glossary` oder
  `#/lesson/<lesson-id>?step=3`; Browser-Zurück und -Vorwärts funktionieren
- exaktes Fortsetzen: begonnene Lektionen öffnen sich über „Weiterlernen“ am zuletzt
  gültigen Schritt, abgeschlossene Lektionen bewusst von vorn
- wiederholbare Fragen: nach einer falschen Antwort erscheint die Erklärung, danach „Noch
  einmal versuchen“ oder „Lösung anzeigen“
- Abschlussansicht (`#/lesson/<lesson-id>/result`) mit beantworteten Fragen,
  Erstversuch-Trefferquote, Status und tatsächlich verdienter XP; XP und Abschluss entstehen
  je Lektion nur einmal, auch bei „Lektion wiederholen“
- lesender Kompatibilitätscheck für `brooks-progress` und `brooks-tr-best`
- responsive Navigation für Desktop und Mobilgeräte

## Gespeicherte Daten

Der Schlüssel `wqt-academy-progress-v1` behält seinen Namen. Der Datensatz darin trägt
seit F-07 `version: 7`:

- `lessonPositions` (seit F-01): letzter Schritt je begonnener Lektion
- `answers`: zuletzt abgegebene Auswahl je Frage – Format seit v1 unverändert
- `questionResults` (seit F-02): je Frage aktuelle Auswahl, Anzahl der Versuche, Ergebnis des
  ersten erfassten Versuchs und Stand im aktuellen Durchgang
- `lessonResults` (seit F-02): je Lektion erster und letzter Abschluss sowie die einmalig
  gutgeschriebenen XP
- `reviewCards` (seit F-03): Wiederholungsplan je Frage – Stufe, nächster Fälligkeitstag,
  letztes Ergebnis, Anzahl der Wiederholungen und Fehler
- `reviewSession` (seit F-03): die laufende Wiederholungsrunde, damit ein Reload sie nicht
  zurücksetzt
- `activityDays` (seit F-04): lokale Kalendertage mit echter Lernaktivität – abgeschlossene
  Lektion oder (seit F-05) beendete Wiederholungsrunde mit beantworteten Fragen; höchstens die
  letzten 400, beim Upgrade älterer Stände aus vorhandenen Zeitstempeln abgeleitet
- `dailyActivity` (seit F-05): je Tag abgeschlossene Lektionen, beendete Wiederholungsrunden und
  gutgeschriebene XP
- `dailyGoal` (seit F-05): gewähltes Tagesziel
- `milestones` (seit F-05): einmalig erhaltene Meilensteine mit Tag
- `bookmarks` und `notes` (seit F-07): Lesezeichen und Klartextnotizen (höchstens 5000 Zeichen)
  je Lektion bzw. Schritt, Schlüssel `lessonId` oder `lessonId::stepId`

Ältere Datensätze (v1–v6) werden beim Laden verlustfrei migriert; der Wiederholungsplan
startet leer. Unbekannte Zusatzfelder bleiben erhalten. Alte Antworten werden nicht in Versuche
umgedeutet: Ihr Erstversuch gilt als „nicht erfasst“. Ein unlesbarer Datensatz wird vor dem Ersetzen unter
`wqt-academy-progress-backup` gesichert. `brooks-progress` und `brooks-tr-best` werden nur
gelesen, nie verändert.

## Wiederholungsplan

Der Scheduler (`src/features/reviewScheduler.ts`) arbeitet mit fünf Stufen und den Abständen
1, 3, 7, 14 und 30 Tage. Eine richtige Antwort am oder nach dem Fälligkeitstag hebt die Stufe
an, eine falsche setzt sie zurück und macht die Frage am nächsten Tag wieder fällig. Richtige
Antworten vor dem Fälligkeitstag ändern den Plan nicht. Neue Fragen werden am Tag nach dem
Lektionsabschluss fällig. Gerechnet wird mit lokalen Kalendertagen, nicht mit
24-Stunden-Abständen.

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
