# Claude-Prompts für den Funktionsausbau

Diese Prompts sind für Claude Code im Repository
`RO881E/brooks-price-action` gedacht.

## Verwendung

1. Immer nur **einen** Prompt verwenden.
2. Den nächsten Prompt erst starten, wenn der vorherige Pull Request von Robert
   gemergt wurde.
3. Claude darf den Pull Request erstellen, aber niemals selbst mergen.
4. Wenn Claude eine größere Abweichung von der Roadmap empfiehlt, soll es die
   Arbeit stoppen und die Entscheidung zuerst erklären.
5. Die Prompts betreffen nur Funktionalität. Buchinhalte und WQT-Fachbände
   bleiben unangetastet.

---

## Prompt F-01 – Fortsetzen und Navigation

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere
ausschließlich das Arbeitspaket F-01 „Exaktes Fortsetzen und stabile URLs“ aus
academy/docs/FUNCTIONALITY_ROADMAP.md.

Lies zuerst CLAUDE.md, CONTRIBUTING.md, academy/README.md und die vollständige
Roadmap. Prüfe danach git status, hole den aktuellen Stand von origin/main und
erstelle davon den neuen Branch claude/f01-resume-navigation. Arbeite niemals
direkt auf main.

Ziel: Ansichten und Lektionen erhalten reload-feste Hash-URLs. Eine begonnene
Lektion wird einschließlich des letzten gültigen Schritts gespeichert und kann
über „Weiterlernen“ exakt fortgesetzt werden. Browser-Zurück und -Vorwärts
müssen funktionieren. Ungültige Links fallen ohne Fehler auf den Lernpfad
zurück.

Entwirf eine ausdrücklich getestete Migration des Academy-Fortschritts. Die
Schlüssel brooks-progress, brooks-tr-best und wqt-academy-progress-v1 dürfen
weder gelöscht noch umbenannt werden. Bestehende v1-Daten, beschädigtes JSON
und leere Speicherstände müssen sicher behandelt werden. Ändere keine
Lerntexte, Lektionen, IDs oder deren Buchreihenfolge.

Halte die Navigations- und Migrationslogik in kleinen typisierten Funktionen
außerhalb großer React-Komponenten. Verwende keine zusätzliche Routing-
Bibliothek, solange eine kleine, verständliche Hash-Navigation ausreicht.

Ergänze Unit-Tests für URL-Parsing, ungültige Ziele und Migration sowie
Playwright-Tests für Deep Link, Reload, exaktes Fortsetzen und Browser-Zurück.
Führe npm test, npm run build und npm run test:e2e aus. Prüfe Desktop und eine
schmale Mobilansicht. Falls Chromium technisch nicht verfügbar ist, sage das
im Pull Request ausdrücklich und behaupte nicht, der E2E-Test sei bestanden.

Prüfe vor dem Commit den vollständigen Diff. Committe und pushe nur dieses
Arbeitspaket. Öffne anschließend einen Pull Request gegen main mit Ergebnis,
Migration, Tests und bekannten Grenzen. Merge den Pull Request nicht. Beende
die Aufgabe mit dem PR-Link und einer kurzen, nichttechnischen Zusammenfassung.
```

## Prompt F-02 – Fragen und Lektionsabschluss

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere
ausschließlich F-02 „Wiederholbare Fragen und Lektionsabschluss“ aus
academy/docs/FUNCTIONALITY_ROADMAP.md. Setze voraus, dass F-01 bereits in main
gemergt ist.

Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Roadmap vollständig.
Prüfe git status, hole origin/main und erstelle den Branch
claude/f02-lesson-results vom aktuellen main. Arbeite nie direkt auf main.

Ziel: Nach einer falschen Antwort liest der Nutzer die Erklärung und kann die
Frage erneut versuchen. Speichere Auswahl, Versuche und Ergebnis getrennt. Am
Ende jeder Lektion erscheint eine klare Abschlussansicht mit beantworteten
Fragen, Erstversuch-Trefferquote, Abschlussstatus und tatsächlich verdienter
XP. Dieselbe Lektion darf auch nach Reload oder erneutem Durchspielen nur
einmal XP und einen Abschluss erzeugen. Biete „Lektion wiederholen“ und „Zurück
zum Lernpfad“ an.

Alte Antworten müssen erhalten bleiben. Erfinde aus alten Antwortdaten keine
historischen Versuche. Sperre die nächste Lektion nicht aufgrund einer
schlechten Quote. Verändere keine Lerninhalte, Lektions-IDs oder
Freischaltungsreihenfolge. Füge noch keine Review-Intervalle, Streaks oder
Abzeichen hinzu.

Geschäftslogik für Versuche, Ersttreffer, Abschluss und einmalige XP gehört in
reine, unit-getestete Funktionen. Ergänze Playwright-Abläufe für richtig beim
ersten Versuch, falsch mit anschließendem Retry, wiederholten Abschluss und
Reload. Teste Desktop und Mobil.

Führe npm test, npm run build und npm run test:e2e aus. Prüfe den vollständigen
Diff, committe und pushe nur F-02 und öffne einen Pull Request gegen main.
Dokumentiere Datenänderungen, Tests und Grenzen. Merge nicht selbst. Gib am
Ende nur den PR-Link und eine kurze verständliche Ergebnisübersicht aus.
```

## Prompt F-03 – Intelligente Wiederholung

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere
ausschließlich F-03 „Intelligente Wiederholungswarteschlange“ aus
academy/docs/FUNCTIONALITY_ROADMAP.md. F-01 und F-02 müssen bereits in main
enthalten sein.

Lies zuerst CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Roadmap.
Prüfe git status, aktualisiere main und erstelle den Branch
claude/f03-smart-review.

Baue den bisherigen Übungsmodus zu einer lernwirksamen Review-Zentrale aus.
Implementiere einen einfachen, transparenten und rein testbaren Scheduler mit
Intervallen von ungefähr 1, 3, 7, 14 und 30 Tagen. Falsche Antworten werden
früher erneut fällig, richtige Antworten verschieben die nächste Wiederholung
schrittweise. Berechne Fälligkeit nach lokalen Kalendertagen.

Die Startansicht bietet „Heute fällig“, „Fehler trainieren“, „Kapitel
auswählen“ und „Alles mischen“. Nutze nur Fragen aus abgeschlossenen oder nach
den bestehenden Regeln zugänglichen Lektionen. Jede Sitzung braucht
Fortschritt, direkte Erklärungen und eine Ergebnisübersicht. Leere und komplett
erledigte Warteschlangen brauchen verständliche Zustände.

Verwende keinen komplexen SM-2-Algorithmus, keine Benachrichtigungen, kein
Backend und keine Cloud. Ändere keine Inhalte oder Reihenfolgen. Zufällige
Auswahl muss in Tests deterministisch steuerbar sein.

Friere in Unit-Tests die Zeit ein und prüfe alle Intervallwechsel, Fehlerfälle,
Reload und lokale Tagesgrenzen. Ergänze E2E-Tests für eine fällige Runde, eine
Fehler-Runde und den Empty State. Führe npm test, npm run build und
npm run test:e2e aus und prüfe Desktop sowie Mobil.

Committe und pushe nur F-03 auf claude/f03-smart-review. Öffne einen Pull
Request gegen main mit Erklärung des Schedulers, der Datenmigration und aller
Tests. Merge nicht selbst. Gib am Ende den PR-Link und die verständliche
Kurzfassung aus.
```

## Prompt F-04 – Fortschrittsseite

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere nur F-04
„Fortschrittsseite“ aus academy/docs/FUNCTIONALITY_ROADMAP.md. Beginne erst,
wenn F-03 in main gemergt ist.

Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Roadmap. Prüfe den
Arbeitsstand, hole origin/main und erstelle claude/f04-progress-dashboard.

Ergänze einen Navigationspunkt „Fortschritt“. Zeige ausschließlich
nachvollziehbare, aus den gespeicherten Lerndaten berechnete Werte:
abgeschlossene Lektionen, Kursfortschritt, einmalig verdiente XP,
Erstversuch-Trefferquote, heute fällige Wiederholungen, aktive Lerntage der
letzten 7 und 30 Tage sowie Fortschritt je Buchabschnitt. Zeige außerdem eine
konkrete nächste Aktion, die zur nächsten Lektion oder fälligen Wiederholung
führt.

Baue kleine CSS- oder SVG-Visualisierungen ohne schwere Chartbibliothek. Jede
Visualisierung braucht eine verständliche Textalternative. Neue Nutzer,
vollständig abgeschlossene Nutzer und migrierte Altstände benötigen saubere
Empty States. Vermeide erfundene Mastery-Prozente, soziale Vergleiche und
Trading-Performance-Prognosen.

Lege alle Berechnungen in reine Funktionen und teste Nullwerte, alte Daten,
vollständige Daten und Randfälle. Ergänze E2E-Tests für Navigation und direkte
Aktionen. Prüfe Tastaturbedienung, Desktop und 360-Pixel-Mobilbreite ohne
horizontalen Überlauf.

Führe npm test, npm run build und npm run test:e2e aus. Prüfe den Diff,
committe und pushe nur F-04 und öffne einen Pull Request gegen main. Merge nicht
selbst. Liefere den PR-Link und eine kurze nichttechnische Zusammenfassung.
```

## Prompt F-05 – Tagesziel, Streak und Meilensteine

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere nur F-05
„Tagesziel, Streak und Meilensteine“ aus
academy/docs/FUNCTIONALITY_ROADMAP.md. F-04 muss bereits in main sein.

Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Roadmap vollständig.
Prüfe git status, aktualisiere main und erstelle claude/f05-goals-streaks.

Füge ein wählbares, verständliches Tagesziel hinzu. Ein Streak darf nur durch
echte Lernaktivität wachsen: eine abgeschlossene Lektion oder eine beendete
Review-Sitzung mit beantworteten Fragen. Das bloße Öffnen der App zählt nie.
Zeige eine kleine Wochenansicht und dezente Meilensteine wie erste Lektion,
erstes Kapitel, 1000 XP, sieben Lerntage und eine vollständig gemeisterte
Review-Runde. Belohnungen und XP müssen auch bei Reload und Wiederholung
idempotent bleiben.

Verwende lokale Kalendertage und teste Monatswechsel, Jahreswechsel,
Sommer-/Winterzeit und ausgelassene Tage. Respektiere prefers-reduced-motion.
Baue keine Rangliste, Währung, Bezahlschranke, Streak-Käufe, manipulative
Warnungen oder Benachrichtigungen. Ändere keine Lerninhalte.

Ergänze Unit-Tests für Tageslogik und einmalige Meilensteine sowie E2E-Tests
für Zielerfüllung, nächsten Tag und reduzierte Animation. Führe npm test,
npm run build und npm run test:e2e aus. Prüfe Desktop und Mobil.

Committe und pushe nur F-05 auf claude/f05-goals-streaks, öffne einen Pull
Request gegen main und dokumentiere Logik, Migration und Tests. Merge nicht.
Gib abschließend PR-Link und Kurzfassung aus.
```

## Prompt F-06 – Globale Suche

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere nur F-06
„Globale Suche und Sprungnavigation“ aus
academy/docs/FUNCTIONALITY_ROADMAP.md. F-01 muss bereits in main sein; starte
vom aktuellsten main.

Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Roadmap. Prüfe git
status, hole origin/main und erstelle claude/f06-global-search.

Baue eine globale, lokale Suche über Lektionsname, Zusammenfassung, Quelle,
Schrittüberschrift, Glossarterm und Alias. Sie muss über eine sichtbare
Schaltfläche und über `/` erreichbar sein, sofern kein Eingabefeld fokussiert
ist. Gruppiere Treffer nach Typ und zeige Buchabschnitt sowie Zugriffsstatus.
Ein zugänglicher Treffer öffnet den passenden Schritt. Ein gesperrter Treffer
darf als Vorschau sichtbar sein, darf aber niemals die bestehende
Freischaltungslogik umgehen.

Die Suche soll Umlaute sowie Groß-/Kleinschreibung sinnvoll behandeln, rein
lokal funktionieren und keine externe Suchbibliothek benötigen, sofern eine
kleine getestete Indexfunktion ausreicht. Dialog, Fokusführung, Escape, Pfeile
und Enter müssen tastaturtauglich sein. Ändere keine Inhalte oder Reihenfolge.

Ergänze Unit-Tests für Alias, Umlaut, leere Suche, Ranking und gesperrte
Lektionen. Ergänze E2E-Tests für Tastaturöffnung, Suchsprung, Deep Link und
Browser-Zurück. Führe npm test, npm run build und npm run test:e2e aus und
prüfe Mobil sowie Desktop.

Committe und pushe nur F-06 auf claude/f06-global-search. Öffne einen Pull
Request gegen main, merge ihn nicht und liefere den Link samt verständlicher
Kurzfassung.
```

## Prompt F-07 – Lesezeichen und Notizen

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere nur F-07
„Lesezeichen und persönliche Notizen“ aus
academy/docs/FUNCTIONALITY_ROADMAP.md. Beginne auf dem aktuellen main, nachdem
F-01 gemergt wurde.

Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Roadmap. Prüfe git
status, hole origin/main und erstelle claude/f07-bookmarks-notes.

Ermögliche Lesezeichen für Lektionen und, wenn die vorhandene Architektur es
sauber zulässt, einzelne Schritte. Ergänze persönliche Klartextnotizen mit
sichtbarem Autosave-Status und eine Übersicht „Gespeichert“, die zur Fundstelle
springt. Notizen dürfen niemals als ungefiltertes HTML ausgegeben werden.
Löschen erhält eine kurze Rückgängig-Möglichkeit.

Speichere alles im migrierbaren Academy-Datenmodell. Prüfe lange Notizen,
Sonderzeichen, leere Inhalte und schnelle Ansichtswechsel. Baue keinen
Rich-Text-Editor, Dateiupload, öffentliche Kommentare, Cloudkonto oder
KI-Zusammenfassung. Verändere keine Lerninhalte.

Ergänze Unit-Tests für Normalisierung, Speichern und Rückgängig sowie E2E-Tests
für Lesezeichen, Autosave, Reload und Sprung aus der Übersicht. Prüfe
Tastaturbedienung, Screenreader-Labels, Desktop und Mobil. Führe npm test,
npm run build und npm run test:e2e aus.

Committe und pushe nur F-07 auf claude/f07-bookmarks-notes. Öffne einen Pull
Request gegen main, merge nicht selbst und gib PR-Link plus Kurzfassung aus.
```

## Prompt F-08 – Sicherung und Einstellungen

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere nur F-08
„Export, Import und sichere Einstellungen“ aus
academy/docs/FUNCTIONALITY_ROADMAP.md. F-05 und F-07 müssen vorher in main
gemergt sein.

Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Roadmap. Prüfe git
status, aktualisiere main und erstelle claude/f08-backup-settings.

Implementiere einen JSON-Export aller Academy-Daten mit Formatversion und
Exportdatum. Der Import muss Daten streng prüfen und vor jeder Änderung eine
verständliche Vorschau zeigen. Standard ist ein sicher dokumentierter Merge.
Vollständiges Ersetzen benötigt eine ausdrückliche Bestätigung und bietet
vorher automatisch einen Backup-Download an. Beschädigte, unbekannte oder
unangemessen große Daten werden ohne Änderung des bestehenden Fortschritts
abgelehnt.

Ergänze Einstellungen für Tagesziel, reduzierte Animation und eine optionale
kompakte Darstellung. Ein Reset darf ausschließlich Academy-eigene Daten
löschen. brooks-progress und brooks-tr-best bleiben garantiert unangetastet.
Baue keine Anmeldung, Cloud oder Hintergrundsynchronisierung.

Definiere Merge-Regeln als reine Funktionen und teste Export/Import-Roundtrip,
Versionsfehler, beschädigtes JSON, fehlende Felder, Duplikate, Replace und
Reset. Ergänze E2E-Tests für Export → Reset → Import sowie den Abbruch einer
ungültigen Datei. Führe npm test, npm run build und npm run test:e2e aus und
prüfe Mobil wie Desktop.

Committe und pushe nur F-08 auf claude/f08-backup-settings. Öffne den Pull
Request gegen main mit Sicherheits- und Migrationshinweisen. Merge nicht und
gib abschließend Link plus Kurzfassung aus.
```

## Prompt F-09 – Offline-App

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere nur F-09
„Installierbare Offline-App“ aus academy/docs/FUNCTIONALITY_ROADMAP.md. F-08
muss bereits in main enthalten sein.

Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Roadmap. Prüfe git
status, hole origin/main und erstelle claude/f09-pwa-offline.

Mache die Academy als PWA installierbar. Ergänze Manifest, eigene passende
Icons und einen kontrollierten Service Worker für App-Shell, gebündelte
Kursdaten und statische Assets. Die Lösung muss mit statischem Hosting und
einem relativen Basis-Pfad funktionieren. Bereits geladene Kernfunktionen wie
Lernpfad, Lektion, Glossar und lokaler Fortschritt müssen offline nutzbar sein.

Entwirf eine klare Update-Strategie. Neue Versionen dürfen laufende Arbeit
nicht überraschend ersetzen; zeige einen verständlichen Update-Hinweis.
Versioniere Caches und entferne alte Caches kontrolliert. Cache keine PDFs oder
fremden Ressourcen blind. Baue keine Push-Nachrichten,
Hintergrundsynchronisierung oder Cloud.

Begründe jede neue PWA-Abhängigkeit im Pull Request. Ergänze Tests für
Registrierung, Offline-Aufruf, Cache-Update und fehlgeschlagene Ressourcen.
Führe npm test, npm run build und npm run test:e2e aus. Prüfe zusätzlich den
Produktions-Build offline und kontrolliere die Konsole.

Committe und pushe nur F-09 auf claude/f09-pwa-offline. Öffne einen Pull
Request gegen main, merge nicht selbst und liefere PR-Link und Kurzfassung.
```

## Prompt F-10 – Release-Härtung

```text
Arbeite im Repository RO881E/brooks-price-action und implementiere nur F-10
„Barrierefreiheit, Leistung und Release-Gate“ aus
academy/docs/FUNCTIONALITY_ROADMAP.md. Alle zuvor beauftragten Funktionspakete
müssen bereits in main sein.

Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Roadmap. Prüfe git
status, aktualisiere main und erstelle claude/f10-release-hardening.

Dies ist kein Redesign. Prüfe und verbessere die bestehenden Hauptabläufe:
Fokusführung, semantische Beschriftung, Live-Regions, Kontrast, Nicht-Farb-
Signale, vollständige Tastaturbedienung und reduzierte Bewegung. Ergänze eine
verständliche Fehlergrenze. Reduziere die vorhandene Bundle-Warnung durch
sinnvolles Code-Splitting großer Chart- und Content-Bündel, ohne Inhalte oder
Reihenfolge zu verändern.

Erweitere die E2E-Release-Suite für Desktop und Mobil: Hauptnavigation,
vollständige Lektion, falscher und richtiger Retry, Review, Fortschritt, Suche,
Lesezeichen/Notiz, Export/Import und Offline-Aufruf. Kein horizontaler
Seitenüberlauf bei 360 Pixeln. Hauptabläufe müssen ohne Maus nutzbar sein.
Dokumentiere Bundle-Größe vor und nach der Änderung und füge eine kurze
Release-Checkliste hinzu.

Führe npm test, npm run build und npm run test:e2e vollständig aus. Behebe nur
Probleme, die zu F-10 gehören; starte keinen optischen Komplettumbau und ändere
keine Lerninhalte.

Committe und pushe nur F-10 auf claude/f10-release-hardening. Öffne einen Pull
Request gegen main mit Messwerten und Testergebnissen. Merge nicht selbst. Gib
am Ende den PR-Link und eine kurze verständliche Zusammenfassung aus.
```

---

## Optionaler Kontrollprompt vor einem Merge

Dieser Prompt verändert nichts. Er kann in einer zweiten Claude-Sitzung mit
der jeweiligen Pull-Request-Nummer verwendet werden.

```text
Prüfe den Pull Request #PR_NUMMER im Repository RO881E/brooks-price-action
gegen CLAUDE.md, CONTRIBUTING.md und das zugehörige Arbeitspaket in
academy/docs/FUNCTIONALITY_ROADMAP.md.

Arbeite ausschließlich lesend: Ändere keine Datei, pushe nichts und merge
nichts. Prüfe Diff, Datenmigration, Rückwärtskompatibilität der drei
localStorage-Schlüssel, Testabdeckung, Mobilansicht, Tastaturbedienung und ob
unbeabsichtigt Lerninhalte oder Reihenfolge geändert wurden.

Berichte zuerst echte Merge-Blocker mit Datei und genauer Begründung, danach
kleinere Verbesserungen. Wenn keine Blocker bestehen, sage ausdrücklich, dass
der PR aus deiner Prüfung merge-fähig ist. Behaupte keine Tests ausgeführt zu
haben, die du nicht tatsächlich ausgeführt hast.
```
