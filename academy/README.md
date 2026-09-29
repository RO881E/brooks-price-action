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
- Einstellungen (`#/settings`): Tagesziel, „Bewegung immer reduzieren“, kompakte Darstellung,
  Datensicherung als JSON-Datei, Import mit strenger Prüfung und Vorschau sowie ein Reset, der
  nur Academy-Daten löscht
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
- installierbare Offline-App: Web-App-Manifest, eigene Icons und ein Service Worker; nach
  einem Online-Besuch funktionieren Lernpfad, Lektionen, Glossar und Fortschritt ohne
  Verbindung, neue Versionen werden angekündigt statt ungefragt geladen

## Gespeicherte Daten

Der Schlüssel `wqt-academy-progress-v1` behält seinen Namen. Der Datensatz darin trägt
seit F-08 `version: 8`:

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
- `settings` (seit F-08): `motion` (`system` oder `reduce`) und `compact`

Ältere Datensätze (v1–v7) werden beim Laden verlustfrei migriert; der Wiederholungsplan
startet leer. Unbekannte Zusatzfelder bleiben erhalten. Alte Antworten werden nicht in Versuche
umgedeutet: Ihr Erstversuch gilt als „nicht erfasst“. Ein unlesbarer Datensatz wird vor dem Ersetzen unter
`wqt-academy-progress-backup` gesichert. `brooks-progress` und `brooks-tr-best` werden nur
gelesen, nie verändert.

## Sicherung, Import und Zurücksetzen

Eine Sicherung ist eine JSON-Datei mit `format: "wqt-academy-backup"`, `formatVersion: 1`,
`exportedAt`, `dataVersion` und `data`. Sie enthält alle Lerndaten, Tagesziel und Darstellung –
nicht aber eine laufende Wiederholungsrunde, die Kopien von `brooks-progress`/`brooks-tr-best`
und unbekannte Zusatzfelder.

Der Import prüft streng (`src/features/backup.ts`): höchstens 10 MB, gültiges JSON, bekanntes
Format und keine neuere Version, alle Pflichtfelder, keine unbekannten Felder, gültige Einträge
und keine gefährlichen Schlüssel wie `__proto__`. Eine abgelehnte Datei ändert nichts. Vor jeder
Änderung erscheint eine Vorschau.

- **Zusammenführen** (Standard) ergänzt den Stand, ohne etwas doppelt zu zählen: Vereinigung von
  Lektionen, Lerntagen, Lesezeichen und Meilensteinen; früherer Erstabschluss samt XP;
  Datensatz mit mehr Versuchen; jüngerer Wiederholungsstand und jüngere Lektionsposition;
  Tageszählwerte je Feld mit dem größeren Wert; neuere Fassung einer Notiz; Antworten lokal vor
  Import. Tagesziel und Darstellung kommen aus der Sicherung, auf Wunsch bleiben die eigenen.
- **Vollständig ersetzen** braucht eine ausdrückliche Bestätigung; vorher wird ein Download des
  aktuellen Stands angeboten.
- **Zurücksetzen** löscht nur `wqt-academy-progress-v1`. `brooks-progress` und `brooks-tr-best`
  bleiben unangetastet.

## Barrierefreiheit und Leistung

- Tastatur: Pfeiltasten wandern durch Antworten, Enter/Leertaste wählt. Nach einer Antwort
  springt der Fokus zu „Noch einmal versuchen“ bzw. „Weiter“, bei einer offenen Frage direkt
  zur ersten Antwort, beim Öffnen einer Lektion zur Schrittüberschrift. Das mobile Menü
  meldet `aria-expanded`, schließt mit Escape und ist geschlossen nicht fokussierbar.
- Screenreader: Schrittwechsel, Antwort-Rückmeldungen und Speicherstände laufen über
  Live-Regions; richtig/falsch haben Symbol und Text, nicht nur Farbe; die aktive Ansicht trägt
  `aria-current="page"`.
- Fehlergrenzen: Ein Renderfehler zeigt statt einer leeren Seite „Hier ist etwas
  schiefgelaufen.“ mit „Zum Lernpfad“ und „Seite neu laden“. Kann ein Schaubild nicht geladen
  werden, bleibt der Schritt lesbar und bietet „Seite neu laden“ an.
- Code-Splitting: React, Kursinhalte (Einleitung/Teil 1 und Kapitel) und App-Code liegen in
  eigenen Chunks; die Schaubilder werden erst im ersten Diagramm-Schritt geladen und vom
  Service Worker trotzdem für offline vorgehalten.

## Offline-App und Updates

- `public/manifest.webmanifest` beschreibt Name, Farben und Icons; `start_url` und `scope`
  sind relativ (`./`), damit die App unter jedem Unterpfad (z. B. `/academy/`) läuft. Die Icons
  in `public/icons/` sind eigene SVGs; die PNG-Fassungen (192, 512, maskable 512,
  Apple-Touch 180) sind daraus gerendert.
- Kein zusätzliches Paket: Das Vite-Plugin `pwa/serviceWorkerPlugin.ts` schreibt nach dem
  Produktions-Build `sw.js` aus der Vorlage `pwa/sw-template.js`. Es trägt alle gebauten
  Dateien als Vorlade-Liste ein (ohne Source Maps und PDFs) und bildet die Version als Hash
  über deren Inhalt. Der Cache heißt `wqt-academy-<version>`.
- Der Service Worker bedient nur GET-Anfragen der eigenen Herkunft innerhalb seines Scopes
  und nur die vorgeladenen Dateien. PDFs, fremde Ressourcen und alles andere gehen
  unverändert ans Netz und werden nie gespeichert. Schlägt beim Installieren eine Datei fehl,
  wird die neue Version verworfen und die bisherige bleibt aktiv.
- Update-Strategie: Eine neue Version wird im Hintergrund vollständig geladen und wartet.
  Die App zeigt „Neue Version verfügbar“; erst „Jetzt aktualisieren“ (oder „Neue Version
  laden“ in den Einstellungen) aktiviert sie und lädt die Seite genau einmal neu. „Später“
  lässt die laufende Version weiterlaufen; spätestens nach dem Schließen aller Tabs startet die
  neue. Beim Aktivieren werden nur ältere `wqt-academy-`-Caches gelöscht.
- Registriert wird nur im Produktions-Build (`import.meta.env.PROD`); `npm run dev` bleibt ohne
  Service Worker. Ohne Verbindung erscheint ein schließbarer Offline-Hinweis.

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
`tests/release.spec.ts` ist die Release-Suite (F-10): Hauptansichten mit axe-Prüfung nach
WCAG 2.2 A/AA, keine Überbreite bei 360 px, ein vollständiger Lernabschnitt nur mit der
Tastatur, Review, Suche, Lesezeichen/Notiz und Export/Import per Tastatur sowie der Hinweis bei
einem nicht ladbaren Schaubild. Vor jedem Release gilt die
[Release-Checkliste](docs/RELEASE_CHECKLIST.md).
`tests/pwa.spec.ts` baut zusätzlich den Produktions-Build nach `.wqt-playwright-tmp/`, liefert
ihn unter `/academy/` aus und prüft Registrierung, Offline-Betrieb, Updates, fehlgeschlagene
Dateien und dass weder PDFs noch fremde Ressourcen im Cache landen.

## Geplanter Funktionsausbau

- [Funktionsroadmap Phase 2: F-11 bis F-20](docs/FUNCTIONALITY_ROADMAP_PHASE_2.md)
- [Einzeln kopierbare Claude-Prompts für Phase 2](docs/CLAUDE_PROMPTS_PHASE_2.md)
- [Bisherige Funktionsroadmap F-01 bis F-10](docs/FUNCTIONALITY_ROADMAP.md)
- [Bisherige Claude-Prompts F-01 bis F-10](docs/CLAUDE_PROMPTS.md)
- [Release-Checkliste](docs/RELEASE_CHECKLIST.md)

Jedes Arbeitspaket wird auf einem eigenen Branch umgesetzt, vollständig
getestet und als separater Pull Request eingereicht. Die Roadmap verändert
keine Buchinhalte und bindet keine WQT-Fachbände ein.
