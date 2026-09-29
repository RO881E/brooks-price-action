# WQT Academy V2

Technisches Grundgerüst für den neuen, kursbasierten Lernbereich. Die bestehende Website im
Stammverzeichnis bleibt während der Entwicklung unverändert.

## Veröffentlichtes Buchmaterial

Die Academy bietet eine separate Begriffsreferenz. Der lineare Lernpfad enthält
die Einleitung, die Einführung zu Teil I und die Kapitel 1 bis 10 von
*Trading Price Action Trends*. Kapitel 5 enthält 25 Mikro-Lektionen zu
Reversal-Bars und den Chartfällen 5.1 bis 5.3. Kapitel 6 ergänzt 40 Lektionen
zu weiteren Signal-Bars und allen 19 Chartfällen 6.1 bis 6.19. Kapitel 7 ergänzt
24 Lektionen zu Outside-Bars und den Chartfällen 7.1 bis 7.4. Kapitel 8
enthält 12 Lektionen zum Bar-Schluss und dem Chartfall 8.1. Die Schaubilder
übernehmen weder Originalkurse noch Buchabbildungen. Kapitel 9 enthält zehn
Mikro-Lektionen zu Chartansichten, SPY, SDS und den Vergleichsfällen 9.1 und 9.2.
Kapitel 10 erschließt zweite Einstiege in 23 Lektionen, einschließlich beider
Chartfälle und der vertieften Besprechung von Abbildung 10.2.

## Was der Pilot bereits kann

- Lernpfad mit aufeinander aufbauenden Mikro-Lektionen
- Buchmodus mit Kapitelübersicht und echtem Buchleser (`#/read/<einheit>?lesson=<id>&step=<n>`):
  „Kapitel lesen“ zeigt die veröffentlichten Abschnitte in Buchreihenfolge als zusammenhängenden
  Text mit Schaubildern (inkl. Diagramm-Fokus), Vergleichen, Fragen und Zusammenfassung;
  Kapitelgliederung, Lesefortschritt als Zählung, „Weiterlesen“ an der gemerkten Stelle und klare
  Hinweise auf gesperrte Abschnitte
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
- Diagramm-Fokus: „Vergrößern“ unter jedem Schaubild öffnet einen Dialog mit Titel,
  Bildbeschreibung, Einordnung und Beobachtungen; Zoom (100–400 %) über Tasten, Mausrad oder
  zwei Finger, Verschieben durch Ziehen oder Pfeil-Tasten, „Zurücksetzen“ und „Schließen“.
  Gezoomt wird über die SVG-`viewBox`, daher bleibt das Diagramm scharf. Escape schließt, der
  Fokus kehrt zu „Vergrößern“ zurück, Lektionsstand und Scrollposition bleiben erhalten; jedes
  Öffnen beginnt mit der ganzen Ansicht
- installierbare Offline-App: Web-App-Manifest, eigene Icons und ein Service Worker; nach
  einem Online-Besuch funktionieren Lernpfad, Lektionen, Glossar und Fortschritt ohne
  Verbindung, neue Versionen werden angekündigt statt ungefragt geladen

## Gespeicherte Daten

Der Schlüssel `wqt-academy-progress-v1` behält seinen Namen. Der Datensatz darin trägt
seit F-24 `version: 14`:

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
- `readerPositions` (seit F-13, v9): Lesestelle im Buchleser je Einheit –
  `{ lessonId, stepId, updatedAt }`, Schlüssel ist die Einheit-ID. Sie ist unabhängig vom
  Lektionsabschluss und von `lessonPositions`.
- `readingOptions` (seit F-22, v10): Leseoptionen im Buchmodus – `size` (`standard`, `large`,
  `larger`) und `spacing` (`standard`, `relaxed`, `wide`)
- `caseSessions` (seit F-15, v11): laufende Runde im Bar-für-Bar-Trainer je Fall –
  `{ sessionId, startedAt, updatedAt, session }`, Schlüssel ist die Fall-ID; `session` ist der
  Zustand der Engine und wird beim Öffnen gegen den Fall geprüft
- `caseRuns` (seit F-15, v11): abgeschlossene Runden je Fall – `{ sessionId, completedAt, best,
  defensible, mistake, missedCues }`, eindeutig je `sessionId`, höchstens die jüngsten 50;
  Runden vergeben keine XP; seit F-16 (v12) zusätzlich `answers` – je Entscheidungspunkt
  `{ decision, cueIds }`. Runden aus v11 haben kein `answers` und gelten dort als „nicht erfasst“.
- `caseSessions[…].reasoningDraft`/`reasoning` und `caseRuns[…][].reasoning` (seit F-24, v14):
  eigene Begründung `{ text, confidence }` – Klartext bis 500 Zeichen, Sicherheit `unsure`,
  `fairly`, `sure` oder `null`; je Fall, Entscheidungs-ID und Versuch (`sessionId`)
- `guideSeenAt` (seit F-18, v13): Zeitpunkt, zu dem die Einführung geschlossen wurde, sonst `null`

Ältere Datensätze (v1–v13) werden beim Laden verlustfrei migriert; der Wiederholungsplan
startet leer, ebenso die Lesestellen (vor v9) und die Trainerrunden (vor v11); Leseoptionen
beginnen vor v10 bei „Standard“, unbekannte Stufen werden einzeln zu „Standard“. Defekte
Trainerrunden oder -sitzungen entfallen einzeln. Defekte Lesestellen (ohne Einheit oder Lektion)
entfallen, ein ungültiger Schritt wird zum Abschnittsanfang; eine Lesestelle auf eine unbekannte
oder gesperrte Lektion bleibt gespeichert, der Leser öffnet dann den nächsten lesbaren Abschnitt. Unbekannte Zusatzfelder bleiben erhalten. Alte Antworten werden nicht in Versuche
umgedeutet: Ihr Erstversuch gilt als „nicht erfasst“. Ein unlesbarer Datensatz wird vor dem Ersetzen unter
`wqt-academy-progress-backup` gesichert. `brooks-progress` und `brooks-tr-best` werden nur
gelesen, nie verändert.

## Sicherung, Import und Zurücksetzen

Eine Sicherung ist eine JSON-Datei mit `format: "wqt-academy-backup"`, `formatVersion: 1`,
`exportedAt`, `dataVersion` und `data`. Sie enthält alle Lerndaten, Tagesziel und Darstellung –
nicht aber eine laufende Wiederholungs- oder Trainerrunde, die Kopien von `brooks-progress`/`brooks-tr-best`
und unbekannte Zusatzfelder.

Der Import prüft streng (`src/features/backup.ts`): höchstens 10 MB, gültiges JSON, bekanntes
Format und keine neuere Version, alle Pflichtfelder, keine unbekannten Felder, gültige Einträge
und keine gefährlichen Schlüssel wie `__proto__`. Sicherungen aus v8 (vor dem Buchleser), v9 (vor den
Leseoptionen) und v10 (vor dem Trainer) bleiben gültig: Ihnen fehlen nur `readerPositions`,
`readingOptions` bzw. `caseRuns`, die leer bzw. mit „Standard“ ergänzt werden. Eine abgelehnte Datei ändert nichts. Vor jeder
Änderung erscheint eine Vorschau.

- **Zusammenführen** (Standard) ergänzt den Stand, ohne etwas doppelt zu zählen: Vereinigung von
  Lektionen, Lerntagen, Lesezeichen und Meilensteinen; früherer Erstabschluss samt XP;
  Datensatz mit mehr Versuchen; jüngerer Wiederholungsstand und jüngere Lektionsposition;
  Tageszählwerte je Feld mit dem größeren Wert; neuere Fassung einer Notiz; je Einheit die
  zuletzt gesetzte Lesestelle; abgeschlossene Trainerrunden vereinigt je `sessionId` (eine
  laufende lokale Runde bleibt); Antworten lokal vor Import. Tagesziel und Darstellung
  (einschließlich Leseoptionen) kommen aus der Sicherung, auf Wunsch bleiben die eigenen.
- **Vollständig ersetzen** braucht eine ausdrückliche Bestätigung; vorher wird ein Download des
  aktuellen Stands angeboten. Laufende Wiederholungs- und Trainerrunden enden dabei.
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
- Code-Splitting: React und App-Code liegen in eigenen Chunks, jede Kurseinheit ebenfalls (siehe
  „Kapitelweises Laden“); die Schaubilder werden erst im ersten Diagramm-Schritt geladen und vom
  Service Worker trotzdem für offline vorgehalten.

## Kapitelweises Laden

- `src/content/units.ts` ist die **einzige** Liste der Kurseinheiten in Buchreihenfolge. Jede
  Einheit hat Metadaten und einen `load()`-Aufruf mit dynamischem Import; daraus entsteht je
  Einheit ein eigener Chunk. **Neue Kapitel werden nur hier eingetragen.**
- Das Vite-Plugin `build/courseOutlinePlugin.ts` erzeugt beim Build und im Entwicklungsserver
  das virtuelle Modul `virtual:wqt-course-outline`: die Gliederung aller Einheiten, Lektionen
  und Schritte (IDs, Titel, Zusammenfassung, Quelle, XP, Status, bei Fragen die richtige
  Antwort-ID) – ohne Lehrtexte. Sie wird aus denselben Inhaltsdateien berechnet und kann nicht
  von ihnen abweichen.
- Lernpfad, Freischaltung, Direktlinks, Fortsetzen, Suche, Gespeichert, Fortschritt und die
  Auswahl der Review-Fragen arbeiten sofort mit dieser Gliederung. Ungültige, gesperrte oder
  geplante Lektionen werden deshalb ohne Ladezeit erkannt.
- `src/content/catalog.ts` lädt die vollständigen Lektionen einer Einheit erst, wenn der Lesson
  Player oder eine Review-Frage sie anzeigt, teilt parallele Anfragen und prüft, dass Inhalt und
  Gliederung zusammenpassen. Das Kapitel der nächsten Lektion wird im Leerlauf vorgeladen.
- Schlägt das Laden fehl, erscheint „Die Lektion konnte nicht geladen werden.“ mit „Erneut
  laden“ (lädt die Seite neu, weil Browser fehlgeschlagene Module zwischenspeichern) und „Zurück
  zur Übersicht“. Gespeicherte Daten bleiben unberührt.
- `src/content/course.ts` setzt den vollständigen Kurs zusammen und ist nur für Tests und die
  Build-Erzeugung da; ein Unit-Test verhindert, dass App-Code ihn importiert.
- Offline: Der Service Worker lädt weiterhin alle Einheiten vorab (wählbare Kapitel wären F-19).

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

## Bar-für-Bar-Trainer (F-14, F-15)

Seit F-14 gibt es einen typisierten Datenvertrag (`src/content/barCaseTypes.ts`), eine strenge
Prüfung (`src/features/barCaseValidation.ts`) und eine reine Engine
(`src/features/barTrainer.ts`): Sichtbarkeit der Bars, Auswahl von Long/Short/Abwarten mit
Begründung über Hinweise, Reveal, Übergänge, Auswertung, eine „öffentliche Sicht“ ohne
vorzeitige Lösungen und das Fortsetzen nach Reload. Die Fälle kommen aus eigenen Content-PRs
(C-01: `src/content/barCases/c01.ts`); die Vorgaben stehen in
[docs/BAR_CASE_CONTRACT.md](docs/BAR_CASE_CONTRACT.md). Technische Testfälle liegen nur in
`src/test/fixtures/`.

Die Oberfläche (F-15) steht unter **Üben → Chart trainieren** und unter `#/train/<Fall-ID>`:

- Angezeigt werden nur Fälle mit `status: 'approved'`. Ein Fall ist frei, sobald alle ihm
  zugeordneten Lektionen im Lernpfad zugänglich sind; vorher nennt die Karte die Lektion, die
  zuerst erreicht werden muss. Gesperrte oder unbekannte Fall-Links fallen sicher auf den
  Lernpfad zurück. Nach einer passenden Lektion (Auswertung im Lektionsmodus, abgeschlossener
  Abschnitt im Buchmodus) erscheint ein Link „Chart trainieren“.
- Je Entscheidung: Chart nur mit den bekannten Bars (Maßstab nur aus ihnen), Frage, Long/Short/
  Abwarten als Optionsfelder, Hinweise als Kontrollkästchen (mindestens einer). Erst nach
  „Entscheidung abgeben“ erscheinen Einordnung aller drei Optionen, Erklärung der Hinweise
  mit Lektionslinks und die Folgebars. Die Oberfläche rendert ausschließlich `publicView()`;
  vor der Abgabe stehen weder spätere Bars noch Lösungen im DOM oder in ARIA-Texten. Gegen
  absichtliche Inspektion des gebündelten Codes schützt ein clientseitiges Angebot nicht.
- **Eigene Begründung (F-24):** Vor der Entscheidung lässt sich optional notieren, warum man so
  entscheidet, und wie sicher man ist (Unsicher, Eher sicher, Sicher). Der Entwurf wird sofort
  gespeichert und übersteht Reload; bei „Entscheidung abgeben“ wird er für genau diesen Punkt
  eingefroren – spätere Änderungen gibt es nicht. Nach der Abgabe steht die eigene Fassung als
  Klartext neben der fachlichen Einordnung, ohne automatische Bewertung. Leer ist erlaubt. Jeder
  Versuch behält seine eigene Fassung (`sessionId`); beim Zusammenführen einer Sicherung wird
  nichts überschrieben. Die Einstellungen weisen darauf hin, dass Notizen und Begründungen im
  Klartext in der Sicherung stehen.
- **Rückblick (F-25):** Abgeschlossene Runden lassen sich Schritt für Schritt nachvollziehen –
  über „Diese Runde nachvollziehen“ in der Auswertung oder „Rückblick“ in der Liste
  „Abgeschlossene Runden nachvollziehen“ auf der Fallseite (`#/train/<Fall-ID>/review/<Runden-ID>`).
  Je Entscheidung zuerst die damals sichtbaren Bars, die eigene Wahl samt Hinweisen und die
  damalige Begründung (F-24), dann auf Wunsch „Auflösung zeigen“: Einordnung aller Optionen,
  übersehene Hinweise mit Lektionslink und die Folgebars; ein Schrittindex führt durch die Runde.
  „Erneut trainieren“ startet einen getrennten neuen Durchlauf (eine laufende Runde wird nicht
  ersetzt). Der Rückblick liest nur abgeschlossene Runden mit Einzelantworten und schreibt
  nichts. Für laufende oder unbekannte Runden, unbekannte Fälle, Runden aus älteren Versionen
  ohne Einzelantworten und geänderte Fälle erscheint eine klare Meldung statt einer Rekonstruktion.
- **Chart oder Tabelle (F-26):** Über „Chart“/„Tabelle“ lassen sich die sichtbaren Bars auch als
  Datentabelle lesen (Bar, Eröffnung, Hoch, Tief, Schluss, Richtung, ggf. Beschriftung; relative
  Lernwerte, keine echten Kurse) samt kurzem Text zum aktuellen Entscheidungspunkt. Beide
  Ansichten erhalten dieselbe Liste `publicView().bars` – die Tabelle greift nie auf das
  vollständige Fallobjekt zu; nach dem Reveal kommen nur die freigegebenen Bars hinzu (als „neu“
  markiert). Umschalten behält Auswahl und Fokus; die Wahl der Ansicht wird nicht gespeichert.
  Auf schmalen Bildschirmen scrollt die Tabelle in ihrem eigenen, per Tastatur erreichbaren
  Bereich.
- Auswertung: Einordnung je Entscheidung, übersehene Hinweise und Lektionen zum Nacharbeiten;
  „Neue Runde“ beginnt von vorn. Runden vergeben keine XP und ändern keinen Lektionsabschluss.
- **Abbruch und Reload:** Jede Aktion wird sofort gespeichert; nach Reload, Browser-Zurück oder
  Neustart der App geht es exakt an derselben Stelle weiter („Fortgesetzt“). „Von vorn
  beginnen“ und „Runde abbrechen“ verlangen eine Bestätigung; abgebrochene Runden werden nicht
  gezählt. Passt eine gespeicherte Runde nicht mehr zum Fall (geänderter Content), wird sie
  nicht repariert, sondern ausdrücklich neu begonnen.

## Einführung und Hilfe (F-18)

Beim ersten echten Besuch – ohne jeden Lernstand, auch keinen aus der alten Website – steht
oben im Lernpfad ein eingebetteter Abschnitt „So lernst du in der WQT Academy“ (kein Overlay,
keine Tour). Er erklärt je Weg in einem Satz Lernpfad, Buchmodus, Üben und – nur wenn es
freigegebene Fälle gibt – Chart trainieren (sind alle gesperrt, sagt der Text das), dazu die
lokale Speicherung und die JSON-Sicherung in den Einstellungen. Aktionen: „Erste Lektion
starten: …“ und „Einführung schließen“. Beides vermerkt `guideSeenAt`; danach erscheint die
Einführung nicht mehr von selbst. Wer schon Lernstand hat, sieht sie nie automatisch.
Jederzeit erreichbar ist derselbe Text über **Hilfe** oben rechts als Dialog (Escape schließt,
der Fokus kehrt zurück; „Zu den Einstellungen“ führt zur Sicherung). Öffnen oder Schließen
zählt weder als Lerntag noch bringt es XP.

## Was ich noch verwechsle (F-16)

Unter **Üben** listet „Was ich noch verwechsle“ erfasste Fehler – sachlich, ohne Diagnose oder
Prozentwert. Die Berechnung liegt in reinen Funktionen (`src/features/mistakeInsights.ts`):

- **Fragen** (nur aus abgeschlossenen Lektionen): erster Versuch in der Lektion (richtig, falsch
  oder „nicht erfasst“ bei älteren Ständen), aufgedeckte Lösung, falsche Antworten in der
  Wiederholung („1 von 2 Antworten falsch“), zuletzt falsch gewählte Antwort und die Zahl der
  erfassten falschen Antworten. Ein unbekannter Erstversuch zählt nie als Fehler.
- **Trainerfälle** je Entscheidungspunkt aus den gespeicherten Einzelantworten: zuletzt gewählte
  Entscheidung mit Einordnung, dabei übersehene Hinweise (redaktionelle C-01-Hinweise mit
  Erklärung und Lektionslink) und „in N von M Runden mit Fehler“. Ein Fehler ist die Einordnung
  „Nicht tragfähig“ oder ein übersehener relevanter Hinweis.
- **Stand:** „Zuletzt falsch“ oder „Später richtig“ (letztes Wiederholungsergebnis bzw.
  Lektionsstand; bei Fällen die letzte erfasste Runde). Filter „Noch offen“/„Alle“; sortiert nach
  offen, Häufigkeit, Fragen vor Fällen, Buchreihenfolge.
- **Erneut üben:** Bei Fragen eine Wiederholungsrunde mit genau dieser Frage (bzw. „Offene Fragen
  üben“), bei Fällen der Trainer. Lektionslinks und Übungen nur für zugängliche Inhalte;
  gesperrte Fälle sind als gesperrt benannt.
- Hinweise nennen ältere Antworten ohne Erstversuch, Runden ohne Einzelantworten (v11) und
  Runden zu nicht mehr angebotenen Fällen – gezählt, nicht gedeutet.

## Leseoptionen im Buchmodus (F-22)

Oben im Buchmodus öffnet „Leseansicht“ zwei Gruppen von Optionsfeldern: Schriftgröße
(Standard, Groß, Sehr groß) und Zeilenabstand (Standard, Weit, Sehr weit). Die Wahl wirkt sofort,
gilt nur für den Lesetext (Absätze, Hinweise, Vergleiche, Fragen, Antworten, Bildunterschriften,
Zusammenfassungen, Überschriften moderat) und wird in `readingOptions` gespeichert. „Standard“
setzt nur diese beiden Optionen zurück. Umgesetzt über CSS-Variablen und Datenattribute an
`.reader-page`; die Stufe „Standard“ lässt alle bisherigen Maße unverändert, größere Stufen
rechnen in `rem`, damit Browser-Schriftgröße und Zoom weiter wirken. Bedienelemente, Diagramme
und der Lektionsmodus bleiben unverändert.

## Begriffe am Lernort (F-21)

Unter ausgewählten Leseabschnitten im Buchmodus stehen wenige Begriffe zum Nachschlagen. Ein
Klick öffnet ein kleines Panel mit der bestehenden Glossardefinition, den Aliassen und dem Link
„Im Glossar öffnen“ (`#/glossary?term=…`). „Schließen“ oder Escape bringt Fokus und
Leseposition zum Begriff zurück; Browser-Zurück aus dem Glossar führt an die Lesestelle.
Nichts davon wird gespeichert, Fragen, Abschluss und XP bleiben unberührt.

Die Zuordnung steht ausdrücklich in `src/content/stepTerms.ts` (Lektions-ID, Schritt-ID,
Glossarbegriffe) – keine automatische Wortsuche. Regeln: veröffentlichter Schritt, keine Frage,
höchstens drei Begriffe, nur vorhandene Glossarbegriffe (Feld `term`), und der Begriff steht als
eigenes Wort im Text des Schritts. Verstöße melden `npm test` und `npm run check:content`
(Regel `begriff-am-lernort`); unbekannte Begriffe blendet die Oberfläche sicher aus.

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
npm run check:content
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
`tests/reader.spec.ts` (F-13) prüft Lesen mit Pflichtfrage (falsch, dann richtig, per Tastatur),
Weiterlesen, XP genau einmal, gesperrte Abschnitte und Kapitel, unbekannte IDs, Reload an der
Lesestelle, Wechsel über den Lernpfad, Diagramm-Fokus, Export/Import und 360 px mit axe.
`tests/chapter-loading.spec.ts` (F-12) prüft, dass der Lernpfad ohne Kapitelinhalte startet,
Direktlinks, Zurück/Vorwärts, gesperrte und unbekannte Lektionen, Suche über noch nicht
geladene Kapitel, Review aus anderen Kapiteln sowie Ladefehler mit erneutem Laden.

## Struktureller Content-Check (F-29)

```bash
npm run check:content                 # prüfen; Exit-Code 1 bei Fehlern
npm run check:content -- --accept-new # neue veröffentlichte IDs bewusst aufnehmen
```

Das Werkzeug liegt in `build/` (`contentCheck.ts`, `check-content.mjs`) und ist nicht Teil des
Browser-Bundles. Es lädt den vollständigen Kurs, das Glossar, die Diagrammbeschreibungen und die
Bar-für-Bar-Fälle und meldet jede Abweichung mit Regel, ID und Datei, z. B.
`✗ [bekannte-id] brooks-trends.introduction.lesson-02 (src/content/…): …`. Die CI führt den
Check nach den Unit-Tests aus.

**Fehler:** doppelte Einheits-, Lektions-, Frage- oder Schritt-IDs und IDs mit unzulässigen
Zeichen; Einheiten außerhalb der Buchreihenfolge (`order`); fehlende Pflichtfelder (Titel,
Bezeichnung, Status, XP, Schrittüberschrift, Bildunterschrift) und veröffentlichte Lektionen
ohne Schritte; ungültige Fragen (weniger als zwei Antworten, doppelte Antwort-IDs, fehlende
Erklärung, richtige Antwort gibt es nicht); Diagramme mit unbekanntem Szenario oder ohne
Bildbeschreibung; Glossareinträge mit doppeltem Begriff oder einer `firstUnit`, die keine
Einheit ist; Verstöße der Bar-für-Bar-Fälle gegen den F-14-Vertrag; ungültige
Begriffszuordnungen am Lernort (F-21); Abweichungen von `build/published-ids.json` (bekannte
Einheit, Lektion oder Schritt gelöscht, umbenannt, umgezogen, nicht mehr veröffentlicht oder
umsortiert) sowie neue veröffentlichte IDs, die noch nicht aufgenommen sind.

**Hinweise (kein Fehler):** definierte, aber nirgends genutzte Diagrammszenarien und
Glossar-Aliasse, die zugleich ein anderer Begriff oder Alias sind.

**Nicht geprüft:** fachliche Richtigkeit und Treue zur Buchvorlage, Formulierungen,
Rechtschreibung, Länge oder Wörtlichkeit von Texten, Bildrechte und inhaltliche Qualität der
Bildbeschreibungen.

`build/published-ids.json` ist die Liste der einmal veröffentlichten IDs, an denen Fortschritt,
Lesezeichen und Lesestellen hängen. Neue Lektionen oder Schritte werden nur mit `--accept-new`
ergänzt; das hängt ausschließlich an, entfernt nichts und verweigert die Aufnahme, solange
bekannte IDs fehlen oder verschoben sind. Die Änderung der Datei ist im Diff des PRs sichtbar.

## Geplanter Funktionsausbau

- [Funktionsroadmap Phase 2: F-11 bis F-20](docs/FUNCTIONALITY_ROADMAP_PHASE_2.md)
- [Einzeln kopierbare Claude-Prompts für Phase 2](docs/CLAUDE_PROMPTS_PHASE_2.md)
- [Funktionsroadmap Phase 3: F-21 bis F-29](docs/FUNCTIONALITY_ROADMAP_PHASE_3.md)
- [Einzeln kopierbare Claude-Prompts für Phase 3](docs/CLAUDE_PROMPTS_PHASE_3.md)
- [Bisherige Funktionsroadmap F-01 bis F-10](docs/FUNCTIONALITY_ROADMAP.md)
- [Bisherige Claude-Prompts F-01 bis F-10](docs/CLAUDE_PROMPTS.md)
- [Release-Checkliste](docs/RELEASE_CHECKLIST.md)

Jedes Arbeitspaket wird auf einem eigenen Branch umgesetzt, vollständig
getestet und als separater Pull Request eingereicht. Die Roadmap verändert
keine Buchinhalte und bindet keine WQT-Fachbände ein.
