# Brooks-Academy – Funktionsroadmap Phase 3

Stand: 29. September 2026. Gegenstand ist ausschließlich Al Brooks' *Trading
Price Action Trends* in `academy/`. Diese Roadmap erweitert die bereits
gemergte [Phase 2](FUNCTIONALITY_ROADMAP_PHASE_2.md); sie ersetzt keines der
Pakete F-12 bis F-20. Zu jedem Funktionspaket steht ein einzeln kopierbarer
[Claude-Auftrag](CLAUDE_PROMPTS_PHASE_3.md) bereit.

## Tatsächlicher Ausgangspunkt

Kapitel 6 (PR #25) und der Diagramm-Fokus F-11 (PR #26) sind auf `main`.
F-01 bis F-11 sind erledigt. **Als Nächstes F-12** aus Phase 2: Kapitelweise
Ladung, ohne Suche, Deep Links, Review oder Offline-Betrieb zu beschädigen.
Danach folgen die noch offenen F-13 bis F-20 samt getrennten redaktionellen
Übergaben C-01/C-02. Ein Phase-3-Prompt ist kein Auftrag, Phase 2 zu
überspringen. Vor jedem neuen Paket den tatsächlichen Merge-Stand prüfen.

Die Phase-2-Funktionen decken den Kern ab: fortlaufender Buchleser,
Bar-für-Bar-Training, Fehlerübersicht, Transferprüfung und eine geprüfte
PWA-Beta. Phase 3 verbessert die tägliche Nutzung und die Qualität neuer
Buchkapitel. Sie ist kein Plan für Broker, Handelssignale, Konten oder ein
Bezahlmodell.

## Reihenfolge und Übergaben

| Paket | Ergebnis | Startbedingung | Einordnung |
| --- | --- | --- | --- |
| F-21 | Glossarbegriffe direkt an der Lernstelle nachschlagen | F-13 | zuerst nach Phase 2 |
| F-22 | Lesekomfort im Buchmodus einstellen | F-13 | klein, unabhängig |
| F-23 | Kurze, selbst gewählte Lernsitzungen | F-15 und F-16 | hoher Alltagsnutzen |
| F-24 | Eigene Begründung vor einer Trainerentscheidung festhalten | F-15 | nur lokale Daten |
| F-25 | Abgeschlossenen Chartfall Schritt für Schritt erneut ansehen | F-15; F-24 für Notizvergleich | Verständnis vertiefen |
| F-26 | Text-/Tabellenansicht der Trainer-Bars | F-15 | Zugang ohne visuelles Chartlesen |
| C-03 | Geprüfte Themen-Zuordnung für bestehende Fragen und Fälle | F-16 | separater Content-PR, nicht Claude |
| F-27 | Üben nach überprüften Brooks-Themen | C-03 und F-16 | keine erfundenen Diagnosen |
| F-28 | Freiwilligen Fehlerbericht lokal vorbereiten | F-20 | nach Beta-Rückmeldungen |
| F-29 | Automatische Strukturprüfung neuer Buchinhalte | F-12; vor vielen weiteren Kapiteln sinnvoll | interne Qualität |

F-21, F-22 und F-26 können nach ihren Voraussetzungen in beliebiger
Reihenfolge umgesetzt werden, **jeweils in einem eigenen PR**. F-24 und F-25
sind getrennt, weil der Replay ohne neue Speicherfelder bereits sinnvoll ist;
erst der spätere Notizvergleich benötigt F-24. F-29 darf vor anderen
Phase-3-Funktionen vorgezogen werden, sobald die kapitelweise Ladung stabil
ist. C-03 ist eine fachliche Zuordnung, kein Platzhalter für Claude.

## Gemeinsame Regeln für Claude

1. Vor jedem Auftrag `CLAUDE.md`, `CONTRIBUTING.md`, beide bisherigen
   Roadmaps, diesen Plan und den aktuellen `main` lesen. Ein
   `claude/`-Branch und ein fokussierter PR je Paket; nicht selbst mergen und
   nach dem PR auf den nächsten Auftrag warten.
2. Dieselben veröffentlichten Brooks-Inhalte, Quellenanker, stabilen
   Lektions-/Schritt-IDs, Frageantworten, XP-Regeln und Zugangssperren nutzen.
   Keine neuen Lehren, Chartfälle oder Buchabbildungen durch Claude.
3. `brooks-progress`, `brooks-tr-best` und `wqt-academy-progress-v1` nicht
   umbenennen. Gespeicherte Felder nur mit Versionserhöhung, Migration,
   Validierung, Export/Import/Merge/Reset und rückwärtskompatiblen Tests.
   Benutzernotizen bleiben privat auf dem Gerät, solange Robert keinen
   eigenen Datendienst beauftragt.
4. Kein Live-Feed, Brokerzugriff, Depot, P&L, automatische Trading-Empfehlung,
   Nutzerkonto, Cloud-Synchronisierung, Tracking, Push oder Bezahldienst.
   Eine richtige Übungsantwort belegt nur das Verständnis dieses Lernfalls.
5. Offline-PWA und relativen Basis-Pfad erhalten. 360 px ohne horizontalen
   Überlauf, Tastatur und Screenreader, `prefers-reduced-motion`, definierte
   Lade-/Fehler-/Leerzustände. Keine Zukunftsbars oder Lösungen vor der
   Entscheidung im sichtbaren DOM oder in ARIA-Texten.
6. In `academy/` `npm test`, `npm run build`, `npm run test:e2e` ausführen;
   nicht verfügbares Chromium als **nicht ausgeführt** im PR benennen.
   Betroffene Abläufe in Desktop- und Mobilansicht, online und soweit
   betroffen offline prüfen. Bei einem reinen Prüfwerkzeug zählen
   aussagekräftige Unit-/Integrationstests, die vorhandene E2E-Suite bleibt
   Regression.

## F-21 – Begriffe am Lernort nachschlagen

**Ablauf.** Unter einem Leseabschnitt können höchstens wenige ausdrücklich
zugeordnete Begriffe geöffnet werden. Ein kleines Panel zeigt die bestehende
Glossardefinition und einen Link zum ganzen Glossareintrag. Schließen bringt
Fokus und Leseposition zurück. Die Bezeichnungen sind keine automatisch
erkannten Wörter mitten im Fließtext.

**Technik.** Explizite, überprüfbare Zuordnung von stabiler `stepId` zu
bereits existierenden Glossar-IDs/Aliasen; zunächst eine kleine Auswahl
wiederkehrender Begriffe. Bestehende Definitionen wiederverwenden, ohne
zweite Glossarkopie. Nicht vorhandene Ziele beim Build melden, im UI sicher
ausblenden. Gesperrte Lektionsinhalte bleiben gesperrt. Keine neue
Speicherung nötig.

**Abnahme.** Mehrere zugeordnete und nicht zugeordnete Schritte, alter
Glossar-Deep-Link, Browser-Zurück, Tab/Escape/Fokusrückgabe, 360 px,
Screenreader, Reload und Offline-Aufruf. Der Begriff verändert weder
Frageantwort noch Lektionsfortschritt.

## F-22 – Lesekomfort ohne Designbruch

**Ablauf.** Im Buchmodus kann man Schriftgröße und Zeilenabstand zwischen
wenigen klar benannten Stufen wählen; die Änderung ist sofort sichtbar und
gilt auch nach Reload. „Standard“ setzt nur diese Leseoptionen zurück.
Diagramme, Fragen und Bedienelemente bleiben lesbar und erreichbar.

**Technik.** CSS-Variablen für Lesetext, keine freie Pixel-Eingabe und kein
separates Rendering des Buchinhalts. Betriebssystem-Zoom bleibt nutzbar.
Wenn Einstellungen gespeichert werden: Feld im bestehenden Datensatz,
Version/Migration/Backup/Import/Merge/Reset. Schriftgrößen testen, bevor
feste Dialog-/Chartmaße übernommen werden.

**Abnahme.** Standard und größte Stufe auf 360 px und Desktop, lange deutsche
Überschriften, Tabelle/Vergleich, Frage, Diagramm-Fokus, Tastatur und
Screenreader. Kein abgeschnittener Text, kein horizontaler Überlauf und
keine geänderte Lektionsposition.

## F-23 – Lernsitzung für zehn oder zwanzig Minuten

**Ablauf.** „Kurz lernen“ lässt die Person zehn oder zwanzig Minuten als
ungefähren Rahmen wählen. Die App bietet in fester, nachvollziehbarer
Reihenfolge höchstens einige **fällige** Wiederholungen, die nächste
zugängliche Lektion und gegebenenfalls einen freigegebenen Trainerfall an.
Jede Aktion kann übersprungen werden. Man kann die Sitzung verlassen und
später über die vorhandenen Fortsetzungsmechanismen weitermachen. Die
Zeitangabe ist eine Planung, kein Timer und kein Erfolgsversprechen.

**Technik.** Vorschläge aus bestehenden Fälligkeits-, Zugang- und
Lektionsdaten als reine Selektionsfunktion ableiten. Keine Duplikate, keine
gesperrten Links; bei null fälligen Fragen oder ohne Trainerfälle passende
Aktionen weglassen. Die Sitzung selbst speichert keine parallele Kopie von
Antworten, XP oder Abschluss. Start, Überspringen und bloßes Öffnen zählen
nicht als Lerntag; nur bestehende echte Lernaktionen tun das. Nur bei
nachgewiesenem Bedarf eine gespeicherte Sitzungsposition ergänzen, dann
vollständige Migration.

**Abnahme.** Neuer und fortgeschrittener Stand, alles erledigt, fällige
Fragen aus mehreren Kapiteln, gesperrte nächste Lektion, kein Fall offline,
Abbruch/Reload, bereits abgeschlossene Lektion, falsche Frage und Wiederholung.
Die Vorschläge und XP bleiben nach Reload konsistent.

## F-24 – Eigene Begründung vor dem Reveal

**Ablauf.** Vor Long/Short/Abwarten im Trainer kann man optional einen kurzen
Grund und die eigene Sicherheit („unsicher“, „eher sicher“, „sicher“)
festhalten. Nach der Entscheidung erscheint die eigene Formulierung neben
der vorhandenen, fachlich geprüften Erklärung. Sie wird nicht automatisch
als richtig oder falsch bewertet. Leeres Feld ist völlig zulässig.

**Technik.** Text als Klartext, Längenlimit und sichere Anzeige; Speicherung
pro stabiler Fall-ID, Entscheidungs-ID und Versuch. Snapshot der Eingabe vor
dem Reveal, damit eine spätere Änderung den Erstversuch nicht überschreibt.
Keine Trainerantwort als HTML rendern. Datensatzversion, Migration,
Import-Validierung und Merge-Regel für mehrere Versuche; Datenschutz bei
Export-Vorschau kenntlich machen. Bestehende Lektionsnotizen unangetastet.

**Abnahme.** Ohne Eingabe, langer/ungültiger Text, drei Sicherheitsstufen,
Reload vor und nach Entscheidung, zweiter Versuch, Import alt/neu und
Offline-Nutzung. Keine vorzeitige Erklärung und keine zusätzlichen XP.

## F-25 – Abgeschlossenen Chartfall nachvollziehen

**Ablauf.** Nach Abschluss eines Trainerfalls kann man jeden
Entscheidungspunkt erneut ansehen: Bars bis zu diesem Zeitpunkt, die eigene
Wahl, dann die freigegebene Erklärung und die späteren Bars. Eine Liste
benennt die Schritte. „Erneut trainieren“ startet einen getrennten neuen
Durchlauf. Falls F-24 gemergt ist, zeigt der Rückblick die damalige
Begründung und Sicherheit, niemals eine später überschriebene Fassung.

**Technik.** Replay liest ausschließlich abgeschlossene, validierte
Sitzungen. Bei gelöschten/geänderten Fall-IDs erscheint ein klarer Hinweis
statt falscher Bars. Der Replay schreibt keine Antwort, kein XP und keinen
Lerntag. Vor dem Fallabschluss existiert kein Deep Link zur Auflösung.

**Abnahme.** Mehrstufiger Fall, falsche und abwartende Wahl,
Erst-/Wiederholungsversuch, Reload, Import eines alten Stands, unbekannte
Fall-ID, Offline und Tastatur. Ein nicht abgeschlossener Fall kann den
Rückblick nicht öffnen.

## F-26 – Trainerchart auch als Daten lesen

**Ablauf.** Im Bar-für-Bar-Trainer kann zwischen Chart und zugänglicher
Tabelle gewechselt werden. Die Tabelle benennt für jeden bisher sichtbaren
Bar Reihenfolge, Open, High, Low und Close in relativen Einheiten; ein kurzer
Text nennt den aktuellen Entscheidungspunkt. Das Umschalten erhält die
Entscheidung und den Fokus. Nach dem Reveal kommen nur die dann tatsächlich
freigegebenen Bars dazu.

**Technik.** Die Tabelle wird aus genau der vom Trainer freigegebenen
sichtbaren Bar-Liste erzeugt, nie direkt aus dem vollständigen Fallobjekt.
Kein Versuch, beliebige ältere SVG-Lehrdiagramme automatisch in OHLC-Daten
zurückzuübersetzen. Einheiten als Lernwerte kennzeichnen. Sichtbarkeitslogik
für Chart und Tabelle teilen; keine Lösungen/Zukunftsbars im DOM/ARIA vor
Reveal. Ansichtswahl muss nicht dauerhaft gespeichert werden.

**Abnahme.** Mehrstufiger Fall vor/nach Reveal, Tabellencaption und
Spaltenköpfe, Screenreader-Navigation, 200-%-Textzoom, 360 px, Offline,
Tastaturwechsel und Tests gegen Spoiler über versteckte DOM-Knoten.

## C-03 – Redaktionell geprüfte Themenkarte

Codex erstellt in einem **eigenen Content-PR** einen kleinen Satz stabiler
Brooks-Themen-IDs (zunächst etwa 6–10) und ordnet bereits veröffentlichte
Lektionsfragen und freigegebene Trainerfälle nur dort zu, wo ein
nachprüfbarer Bezug besteht. Jedes Thema verweist auf eine vorhandene
Lehrstelle und deren Quellenanker. Mehrfachzuordnung ist erlaubt, leere
Themen oder fragliche Fälle werden nicht künstlich aufgefüllt. Eine
Bezeichnung ist keine neu erfundene Marktlehre. Vor F-27 fachlich prüfen
und mergen. Claude baut in F-27 ausschließlich die Auswahl und Navigation.

## F-27 – Nach Thema üben

**Ablauf.** In „Üben“ erscheint eine überschaubare Themenliste mit den
tatsächlich verfügbaren Fragen/Fällen. Nach Auswahl startet eine Runde aus
zugänglichen, geprüften Inhalten. Eine leere Auswahl sagt warum und bietet
den passenden Lernlink. Die Auswertung zeigt konkrete Antworten und
Fundstellen, keinen pauschalen „Mastery“-Prozentsatz.

**Technik.** Nur Zuordnungen aus C-03 nutzen. Review-Plan, Erstversuch,
Trainerwiederholung und XP bleiben in ihren bestehenden Mechanismen; ein
Themenfilter erzeugt keine neuen Frage-IDs oder Kopien von Versuchen.
Deterministische Reihenfolge mit fairer Begrenzung, keine gesperrten Fälle.
Beim Entfernen eines Themas bleiben gespeicherte Lernergebnisse erhalten.

**Abnahme.** Mehrfach getaggte Frage, gemischte Kapitel, neu/abgeschlossen,
leeres Thema, gesperrte Lektion, fällige Wiederholung, Import alter Daten,
Reload und Offline. Keine Doppelzählung, falsche Zugriffsfreigabe oder
erfundene Diagnose.

## F-28 – Freiwilliger Beta-Fehlerbericht

**Ablauf.** Unter „Hilfe“ kann man einen Fehler beschreiben und nach Vorschau
einen Textbericht kopieren oder herunterladen. Die App sendet nichts
automatisch. Der Bericht enthält App-Version, grobe Browser-/Geräteangabe,
Online-/Offline-Status und den vom Nutzer verfassten Reproduktionsweg.

**Technik.** Keine Notizen, Quizantworten, Trainerbegründungen, Importdateien,
Speicherinhalte, präzisen Geräte-IDs oder URL-Parameter im Standardbericht.
Route nur ohne private Parameter und nach Vorschau. Fehler beim Kopieren
haben einen Download-/Manuell-kopieren-Fallback. Kein Backend, Analytics,
Crash-SDK oder Kontaktversand. Ein Bericht kann auch völlig ohne
Lernfortschritt erstellt werden.

**Abnahme.** Beispiel mit privaten Notizen/Antworten zeigt, dass sie nicht
im Bericht stehen; offline, fehlende Clipboard-Berechtigung, Tastatur,
Screenreader und 360 px. Die Vorschau entspricht exakt dem kopierten Text.

## F-29 – Strukturprüfung für wachsende Buchinhalte

**Ergebnis.** Ein lokaler Prüf-Befehl findet maschinell überprüfbare Fehler
vor einem neuen Content-PR: doppelte/stabile IDs, Reihenfolge, verwaiste
Diagramm-Szenarien, fehlende Bildbeschreibungen, kaputte Glossar- und
Fall-Referenzen, ungültige Frageoptionen sowie unbeabsichtigte Änderungen an
bereits veröffentlichten IDs. Die Liste der bekannten veröffentlichten IDs
wird bewusst versioniert und bei einem neuen Kapitel ergänzt.

**Grenze.** Der Befehl beweist weder fachliche Treue zum Buch noch
Eigenständigkeit der Formulierungen oder Chartrechte. Das bleibt menschliche
redaktionelle Prüfung. Claude ändert in F-29 keine Buchinhalte, um Fehler
„grün“ zu machen; er meldet fachliche Befunde mit Datei und ID.

**Abnahme.** Valider Bestand besteht; gezielt defekte Fixtures für doppelte
ID, fehlende Referenz, falsche Reihenfolge und ungültige Frage scheitern mit
lesbarer Meldung. CI führt den Befehl zusätzlich zu den bestehenden Tests
aus. Kein Browser-Bundle wächst durch das Prüfwerkzeug.

## Store-Entscheidung bleibt ein eigener Schritt

Die vorhandene installierbare PWA und F-20 sind der erste öffentliche
App-Test. Auf dem iPhone lässt sich eine Website aus Safari zum Home-Bildschirm
hinzufügen; für Android gibt es einen separaten Weg über eine Trusted Web
Activity. Ein iOS-Store-Eintrag entsteht dadurch nicht automatisch. Vor
einer Einreichung braucht Robert eine eigene Entscheidung zu Plattform,
Aufwand, Rechten am veröffentlichten Lernmaterial und dem Nutzen einer
Store-App. Das ist **kein Claude-Paket** und keine Veröffentlichungserlaubnis.

- [Apple: Website auf dem iPhone als Web-App öffnen](https://support.apple.com/de-de/guide/iphone/iphea86e5236/ios)
- [Chrome: Trusted Web Activity](https://developer.chrome.com/docs/android/trusted-web-activity)
- [Apple: App Review Guidelines, Abschnitt 4.2](https://developer.apple.com/app-store/review/guidelines/)

## Abschluss eines einzelnen Pakets

Der PR nennt den Nutzerablauf, Voraussetzungen und betroffene Dateien,
Vorher/Nachher bei sichtbaren Änderungen, Datenmodell und Migration oder
ausdrücklich „keine“, konkrete Testresultate, Mobil-/Offline-Befund und
Grenzen. Er enthält nur dieses Paket. Robert entscheidet über den Merge;
erst danach bekommt Claude den nächsten Prompt.
