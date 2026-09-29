# Claude-Aufträge – Funktionsausbau Phase 2

Für `RO881E/brooks-price-action`. Die Pakete und Abnahmekriterien stehen in
[FUNCTIONALITY_ROADMAP_PHASE_2.md](FUNCTIONALITY_ROADMAP_PHASE_2.md).
Die untenstehenden Kästen sind **einzeln kopierbar**. Pro Claude-Sitzung nur
einen Auftrag verwenden; den nächsten erst nach Roberts Merge starten.
F-01 bis F-10 sind erledigt und werden nicht neu umgesetzt.

## Einmalig vor dem Funktionsausbau: G-00

Dieser Auftrag ist lesend und nur nötig, solange PR #23 offen ist.

```text
Prüfe im Repository RO881E/brooks-price-action den offenen PR #23 für Kapitel 5.
Lies CLAUDE.md, CONTRIBUTING.md und academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md.
Arbeite lesend: kein Commit, Push oder Merge.

Vergleiche den PR mit main: Buchreihenfolge, bestehende IDs und gespeicherte
Fortschritte, eigenständig gestaltete Diagramme, die drei Chartfälle und
Darstellung bei 360 px. Führe im PR-Branch aus academy/ npm test, npm run
build und npm run test:e2e aus. Wenn Chromium fehlt, melde E2E als nicht
ausgeführt. Prüfe Diagramme auf einem Handy oder in einer mobilen
Browseransicht. Nenne zuerst konkrete Merge-Blocker mit Datei und
Reproduktionsschritt, danach kleinere Punkte. Wenn du keine Blocker findest,
sage das ausdrücklich. Robert entscheidet selbst über den Merge.
```

## F-11 – Diagramme lesbar vergrößern

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-11 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md. Lies CLAUDE.md,
CONTRIBUTING.md, academy/README.md, die alte Funktionsroadmap für die
bestehenden Datenregeln und die Phase-2-Roadmap vollständig. Prüfe git status,
hole origin/main und erstelle claude/f11-chart-focus vom aktuellen main.
Wenn Kapitel 5 noch in PR #23 statt in main steht, baue die gemeinsame Lösung
für vorhandene Diagramme; ändere oder kopiere #23 nicht.

Ergänze eine sichtbare „Vergrößern“-Aktion an jedem Diagramm im LessonPlayer.
Die gemeinsame Ansicht zeigt Vektorchart, Titel, Beschreibung, Caption und
Beobachtungen; Zoom/Schwenken funktionieren mit Touch, Maus und beschrifteten
Tastatur-Buttons. Füge Reset, sinnvolle Zoom-Grenzen und eine gut sichtbare
Schließen-Aktion hinzu. Beim Öffnen Fokus in den Dialog, Tab bleibt darin,
Escape schließt, der Fokus geht zum Auslöser zurück. Behalte Lektionsposition,
Antwortzustand und Scrollposition sinnvoll bei. Achte auf 360 px und
prefers-reduced-motion.

Ändere keine Lehrtexte, IDs, Buchreihenfolge oder gespeicherten Fortschritt.
Teste Öffnen, Schließen/Fokus, Zoom-Grenzen, Reset und mindestens mehrere
Szenariotypen. Prüfe mobil und Desktop ohne Überlauf. Führe aus academy/ npm
test, npm run build und npm run test:e2e aus; unzugängliches Chromium als
„nicht ausgeführt“ dokumentieren. Prüfe den Diff, committe/pushe nur F-11,
öffne einen PR gegen main und merge nicht. Gib PR-Link, Mobilbefund und
verständliche Kurzfassung an.
```

## F-12 – Kapitel statt gemeinsamen Content-Chunk laden

```text
Arbeite in RO881E/brooks-price-action nur an F-12 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md. Lies CLAUDE.md,
CONTRIBUTING.md, academy/README.md und beide Funktionsroadmaps vollständig.
Prüfe den aktuellen main/PR-Stand, git status und origin/main; erstelle
claude/f12-chapter-loading von main. Warte bei Konflikten mit einem offenen
Kapitel-PR auf dessen Merge, statt seinen Content in diesen PR zu übernehmen.

Trenne kleine synchrone Kursmetadaten von den Lektionsschritten und lade die
Kapitel dynamisch erst bei Bedarf. Erhalte die originale Einheitenfolge,
Lektions- und Schritt-IDs, Zugriffsregeln, URLs, Suche, Review, Fortsetzen und
PWA-Offline-Verhalten. Suche muss Treffer aus noch nicht angezeigten Kapiteln
finden; ein Deep Link darf nicht an einem Ladezustand hängen bleiben. Ein
Netz-/Importfehler erhält einen verständlichen Retry, ohne Daten zu löschen.
Ändere keine Buchtexte und keine Freischaltung. Behalte vorerst die vollständige
Offline-Vorladung; wählbare Kapitel sind das gesonderte F-19.

Miss und dokumentiere vorher/nachher Initial-JS, größten Content-Chunk,
Vorladeumfang und nutzbaren Lernpfad auf einem gedrosselten Mobilprofil.
Teste Deep Link, Suche, Review, Reload, Browser-Zurück, geplante/ungültige
Lektionen und Offline-Neustart. Führe aus academy/ npm test, npm run build und
npm run test:e2e aus; nicht verfügbare E2E-Umgebung ehrlich benennen. Prüfe
den Diff, committe/pushe nur F-12 auf deinem Branch, eröffne einen PR gegen
main und merge nicht. Gib PR-Link, Messwerte und bekannte Grenzen aus.
```

## F-13 – Wirklicher Buchleser

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-13 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md; F-12 muss auf main sein.
Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und beide Roadmaps,
prüfe git status, aktualisiere main und erstelle claude/f13-book-reader.

Baue aus der jetzigen Kapitelübersicht einen wirklichen Leser. „Kapitel
lesen“ öffnet veröffentlichte Lektionsabschnitte in Originalreihenfolge mit
Erklärung, Diagramm, Vergleich, Frage und Zusammenfassung. Nach dem Ende
eines Abschnitts kann man ohne Rückweg über den Index weiterlesen. Zeige
Kapitelgliederung, aktuelle Stelle, „Weiterlesen“ und einen klaren Hinweis am
nächsten gesperrten Abschnitt. Nutze die bestehenden LessonStep-Daten und
Antwort-/Abschlussfunktionen: Pflichtfragen nicht umgehen, keine erfundene
Abschlussquote, keine doppelten XP bei Wiederholung. Die Chart-Vergrößerung
aus F-11 muss auch im Leser funktionieren.

Führe eine validierte Hash-Route für Kapitel/Leseposition und ein gespeichertes
readerPosition-Feld je Einheit ein. Leseposition ist unabhängig von
Lektionsabschluss. Erhöhe die Datenmodellversion, migriere alte/defekte
Stände, ergänze JSON-Export/Import/Merge und prüfe Reset; behalte die drei
bestehenden Storage-Schlüssel. Rendere Kapitel abschnittsweise, sodass nicht
alle Charts des Kurses gleichzeitig geladen werden. Unbekannte oder geplante
IDs fallen sicher zurück.

Teste Lesen → Frage falsch/richtig → weiterlesen, Sperre, Reload an genau
der Lesestelle, Wechsel Lernpfad/Buchmodus, bereits abgeschlossene Lektion,
Import und Offline-PWA. Prüfe Desktop, 360 px, Tastatur und Screenreader.
Führe npm test, npm run build, npm run test:e2e aus academy/ aus. Wenn E2E
nicht laufen kann, kennzeichne es im PR. Committe/pushe nur F-13 auf deinem
Branch, eröffne einen PR gegen main, merge nicht und gib Link sowie die
konkreten Datenmigrationsregeln an.
```

## F-14 – Vertrag für Bar-für-Bar-Fälle und reine Engine

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-14 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md. F-12 muss auf main sein.
Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und beide Roadmaps;
prüfe git status, hole origin/main und erstelle claude/f14-bar-trainer-engine.

Entwerfe ein schlankes TypeScript-Schema für eigenständig erstellte
Bar-für-Bar-Fälle: stabile Fall-ID; Bezug zu veröffentlichter Lerneinheit;
relative OHLC-Bars; Zeitpunkte, an denen eine Entscheidung verlangt wird;
Long/Short/Abwarten und begründete Rückmeldung zu jeder Option; verborgene
Folgebars; Quellenanker. Korrekte fachliche Einordnung darf „Abwarten“ sein.
Dokumentiere das Schema so, dass ein separater Content-PR anschließend 6–10
kuratierte Erstfälle liefern kann.

Baue Validatoren für eindeutige IDs, gültige Referenzen, endliche OHLC-Werte,
chronologische Entscheidungspunkte und vollständige Rückmeldungen. Lege
Sichtbarkeit, Auswahl, Reveal und Sitzungsübergänge in pure Funktionen. Teste
mit rein technischen Fixtures im Testverzeichnis; veröffentliche diese
Fixtures nicht als Brooks-Übungen. Ändere keine bestehenden Lerninhalte,
Frage-IDs oder Fortschrittsfelder und baue noch keine sichtbare Trainerseite.

Führe npm test, npm run build und npm run test:e2e aus academy/ aus. Für dieses
Paket stehen Schema- und Engine-Tests im Mittelpunkt; die bestehende E2E-Suite
ist Regression. Dokumentiere nicht ausführbares E2E transparent. Committe und
pushe nur F-14, öffne einen PR gegen main, merge nicht; gib PR-Link und den
Content-Vertrag samt Beispiel-Fall-ID (aus einer Test-Fixture) an.
```

## Übergabe zwischen F-14 und F-15

Der eigenständige Content-PR C-01 wird separat erstellt und geprüft.
Claude beginnt F-15 erst, wenn F-14 **und** C-01 auf `main` stehen. Er soll
die Trainingsfälle weder als technische Platzhalter im Produkt veröffentlichen
noch die fachliche Ausarbeitung an sich ziehen.

## F-15 – Interaktiver Bar-für-Bar-Trainer

```text
Arbeite in RO881E/brooks-price-action nur an F-15 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md. Vergewissere dich, dass F-14
und der kuratierte Content-PR C-01 auf main gemergt wurden. Lies CLAUDE.md,
CONTRIBUTING.md, academy/README.md und beide Roadmaps; prüfe git status,
hole origin/main und erstelle claude/f15-bar-trainer-ui.

Baue im Übungsbereich einen Einstieg „Chart trainieren“ und Links aus
passenden, bereits zugänglichen Lektionen. Zeige je Fall nur Bars und
Informationen, die vor der aktuellen Entscheidung bekannt sind. Nutzer
wählen Long/Short/Abwarten und einen angebotenen Begründungsgrund; danach
erst zeigst du Erklärung, Folgebars und später den nächsten Stopp. Abschluss
mit konkreten übersehenen Hinweisen und Links zur Lektion. Ein neuer Durchlauf
ist möglich. Keine Live-Daten, Signale, P&L oder Echtgeldaktionen.

Nutze nur freigegebene C-01-Fälle. Verhindere vorzeitiges Spoilern durch
gerendertes DOM, ARIA-Text und Navigation; beanspruche keinen Schutz vor
absichtlicher Inspektion des clientseitigen Bundles. Speichere stabile Fall-
und Sitzungs-IDs im
Academy-Datenmodell, mit Migration, Backup/Import/Merge/Reset und ohne
doppelte XP. Bei Abbruch/Reload ist Fortsetzen oder klarer Neustart nötig;
dokumentiere deine Wahl. Leere oder gesperrte Fallauswahl hat einen
verständlichen Zustand. Schreibe keine neuen Marktbeispiele nebenbei.

Teste mehrstufigen Fall, alle drei Entscheidungen, Reveal-Sperre, Reload,
erneuten Durchlauf, Offline, Tastatur, Screenreader und 360 px. Führe aus
academy/ npm test, npm run build und npm run test:e2e aus; fehlendes Chromium
als nicht ausgeführt benennen. Committe/pushe nur F-15, eröffne PR gegen main,
merge nicht und gib Link, Speicheränderungen und Testergebnisse an.
```

## F-16 – Fehlerübersicht

```text
Arbeite in RO881E/brooks-price-action nur an F-16 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md, nach Merge von F-15.
Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und beide Roadmaps.
Prüfe git status und origin/main und erstelle claude/f16-mistake-insights.

Ergänze eine sachliche Übersicht „Was ich noch verwechsle“. Nutze vorhandene
questionResults/reviewCards und die gespeicherten Trainerentscheidungen.
Zeige pro wiederholtem Fehler den konkreten Fall oder die Frage, den letzten
übersehenen Hinweis, eine nachvollziehbare Häufigkeit, Link zur zugänglichen
Lehrstelle und „Erneut üben“. Beziehe Begriffe nur aus geprüften Metadaten;
keine KI-Diagnosen, erfundenen Ursachen, Trading-Prognosen oder beliebigen
Mastery-Prozente. Ein alter Erstversuch mit null bleibt unbekannt.

Sortierung und Filter gehören in pure Funktionen. Behandle leeren/neuen
Stand, Fehler mit anschließend richtigem Versuch, importierte Altstände,
gelöschte Fall-ID und gesperrten Deep Link. Prüfe Backups nur dann neu, wenn
du das Datenformat tatsächlich erweiterst. Keine Änderungen an Lehrtexten.

Ergänze Tests für Berechnung und echte Navigation; prüfe Mobil, Tastatur und
Screenreader. Führe npm test, npm run build und npm run test:e2e aus academy/
aus. Fehlende Testumgebung ehrlich angeben. Committe/pushe nur F-16, öffne
PR gegen main, merge nicht; gib PR-Link und zwei konkrete Beispielzustände
aus den Tests an.
```

## F-17 – Transferprüfung mit neuen Fällen

```text
Arbeite in RO881E/brooks-price-action nur an F-17 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md. Beginne erst, wenn F-15 und
der gesondert redaktionell geprüfte Content-PR C-02 auf main sind.
Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und beide Roadmaps;
prüfe git status, hole origin/main, erstelle claude/f17-transfer-assessment.

Baue eine Übungsform mit ungesehenen C-02-Fällen: mehrere Entscheidungen
zunächst ohne sofortige Lösung, danach eine nachvollziehbare Auswertung mit
eigener Auswahl, Erklärung und Link zu passenden Lektionen. Derselbe Fall
darf vor dem ersten Transferdurchlauf nicht im gewöhnlichen Trainer
auftauchen. Spätere Durchläufe als „Wiederholung“ kennzeichnen und
Erstversuch vom neuen Versuch trennen. Keine Behauptung über spätere
Trading-Performance.

Leere Auswahl, Pausieren/Reload, nicht zugängliche Lektionen, Offline-Fälle
und Import sauber behandeln. Erweitere das Academy-Datenmodell nur, wenn nötig;
dann Version, Migration, Backup/Import/Merge/Reset explizit testen. Schreibe
keine neuen Falltexte. Teste keine Lösungen vor der Auswertung, Erst- und
Zweitversuch, Sperre, Reload und Mobil-/Tastatur-/Screenreader-Nutzung.

Führe aus academy/ npm test, npm run build und npm run test:e2e aus.
Dokumentiere fehlendes Chromium. Committe/pushe nur F-17, öffne einen PR
gegen main und merge nicht; gib PR-Link und verständliche Kurzfassung an.
```

## F-18 – Orientierung für den ersten Besuch

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-18 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md nach F-13 und F-15.
Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und beide Roadmaps.
Prüfe git status, origin/main und erstelle claude/f18-first-use-guide.

Erkläre beim ersten echten Besuch in wenigen Sätzen die vier Wege:
Lernpfad, fortlaufender Buchmodus, Üben und Chart trainieren. Biete einen
klaren Start in die erste Lektion und eine jederzeit erreichbare Hilfe.
Erkläre lokale Speicherung und den vorhandenen JSON-Export in den
Einstellungen. Bestehender Lernfortschritt darf keine erzwungene Einführung
auslösen. Leere oder noch nicht freigegebene Trainerfälle sollen nicht als
fertiges Angebot erscheinen. Keine Animationstour, Anmeldung oder zusätzliche
Tracking-Bibliothek.

Test: brandneuer Stand, vorhandener Fortschritt, Schließen/Wiederöffnen,
Reload, offline, Tastatur, Screenreader und 360 px. Öffnen allein zählt nicht
als Lerntag oder XP. Führe npm test, npm run build und npm run test:e2e aus
academy/ aus. Committe/pushe nur F-18 auf deinem Branch, öffne PR gegen
main, merge nicht; gib PR-Link und die genaue Einführungstextfassung an.
```

## F-19 – Offline-Kapitel nur nach Messung

```text
Prüfe zuerst lesend im Repository RO881E/brooks-price-action die in F-12
dokumentierten Größen, PWA-Update-Downloads und ein echtes Mobilgerät.
Wenn vollständige Offline-Vorladung weiterhin gut funktioniert, empfehle
ausdrücklich, F-19 zu verschieben, und eröffne keinen Code-PR. Nur wenn ein
konkretes Download- oder Speicherproblem nachgewiesen ist, implementiere
F-19 aus academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md.

Bei Umsetzung: Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und beide
Roadmaps. Prüfe git status, hole origin/main, erstelle
claude/f19-offline-chapters. Baue eine wählbare Kapitel-Offline-Funktion mit
Größe/Status, verlässlichem vollständigem Download, Fehler- und
Speicherknappheitsmeldung und bestätigtem Entfernen. App-Shell und zuletzt
genutzte Inhalte müssen weiterhin offline zuverlässig starten. Ein
abgebrochener Download darf nicht „bereit“ heißen. Entfernen von
Kapiteldateien darf nie Academy-Lerndaten löschen. Relativen Basis-Pfad,
Updates und alte Caches erhalten; keine Cloud oder Push-Funktion.

Teste erstmalige Installation, vollständige/abgebrochene Downloads,
Browser-Cache-Löschung, Offline-Deep-Link, App-Update und Fortschritt nach
Cache-Entfernung. Prüfe Mobil, Tastatur und Screenreader. Führe npm test,
npm run build und npm run test:e2e aus academy/ aus; fehlende E2E-Umgebung
ehrlich benennen. Committe/pushe nur F-19, eröffne PR gegen main und merge
nicht. Dokumentiere die Messung, die F-19 begründet.
```

## F-20 – PWA-Beta vorbereiten, ohne zu veröffentlichen

```text
Arbeite in RO881E/brooks-price-action nur an F-20 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md. F-11 bis F-18 und die
notwendigen Content-Übergaben sollen gemergt sein; F-19 nur bei belegtem
Bedarf. Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md, beide Roadmaps
und academy/docs/RELEASE_CHECKLIST.md. Prüfe git status, origin/main,
erstelle claude/f20-pwa-beta-readiness.

Prüfe Name, Icons, Startbildschirm, Installationshilfe, Offline- und
Update-Meldungen sowie die Hauptabläufe auf echten Geräten soweit
verfügbar: Android/Chrome, iPhone/Safari, Reader, Diagramm-Fokus, Trainer,
Lernstand, Export/Import, Deep Links und Neustart ohne Netz. Lege ein
kurzes nachvollziehbares Geräteprotokoll im Repository an. Verfügbare
Geräte, Betriebssystem/Browser, tatsächliche Prüfschritte und offen
gebliebene Punkte ausdrücklich benennen. Eigene Screenshots und Texte für
eine spätere Veröffentlichung vorbereiten, ohne Store-Einreichung.

Behebe nur echte Beta-Blocker in diesem PR. Keine neuen Kurskapitel, kein
Store-Paket, keine Veröffentlichung und keine Konto-/Cloud-Funktion.
Führe aus academy/ npm test, npm run build und npm run test:e2e aus;
nicht durchgeführte Gerätetests oder E2E nicht als bestanden ausgeben.
Prüfe den Diff, committe/pushe F-20 und öffne PR gegen main. Merge nicht.
Gib PR-Link, getestete Geräte und verbleibende Blocker an. Robert trifft
danach die Veröffentlichungsentscheidung.
```

## Optionaler Kontrollprompt vor Roberts Merge

```text
Prüfe den PR #PR_NUMMER in RO881E/brooks-price-action lesend gegen
CLAUDE.md, CONTRIBUTING.md und genau sein F-Paket in
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_2.md. Ändere nichts, pushe und
merge nichts. Prüfe Diff, Lernreihenfolge, stabile IDs, die drei
localStorage-Schlüssel, Migration/Import, Tests, mobile Lesbarkeit,
Tastatur/Screenreader und Offline-Verhalten. Nenne konkrete Blocker zuerst
mit Dateipfad und Reproduktionsschritt. Trenne danach kleine Verbesserungen.
Behaupte nur Tests und Geräteprüfungen, die du selbst ausgeführt hast.
```
