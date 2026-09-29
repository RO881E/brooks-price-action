# Claude-Aufträge – Brooks-Academy Phase 3

Für `RO881E/brooks-price-action`. Die genaue Produkt- und technische
Abnahme steht in [FUNCTIONALITY_ROADMAP_PHASE_3.md](FUNCTIONALITY_ROADMAP_PHASE_3.md).
**Immer nur einen** der Kästen kopieren. Claude beginnt den nächsten erst
nach Roberts ausdrücklichem Auftrag und dem Merge der Voraussetzungen.
Der unmittelbare nächste Funktionsauftrag ist weiterhin **F-12** aus
[Phase 2](CLAUDE_PROMPTS_PHASE_2.md), nicht F-21.

## F-21 – Begriffe direkt am Lernort

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-21 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md. Beginne erst, wenn F-13
(Buchleser) auf main ist. Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md,
die Roadmaps Phase 2 und 3 und den F-21-Abschnitt vollständig. Prüfe git
status und origin/main, erstelle claude/f21-context-glossary vom aktuellen
main. Nutze nur bestehende Brooks-Lektionen und Glossardefinitionen.

Zeige unter ausgewählten Leseabschnitten wenige explizit zugeordnete Begriffe.
Ein Panel verwendet die vorhandene Definition und verlinkt zum bestehenden
Glossar. Erstelle eine nachvollziehbare Zuordnung stabiler Schritt-IDs zu
existierenden Glossareinträgen; keine automatische Wortsuche im Fließtext,
keine zweite Kopie der Definitionen und keine neue Fachbehauptung. Bei
fehlender Referenz sicher ausblenden und im Test/Build melden. Das Schließen
stellt Fokus und Leseposition wieder her. Gesperrte Abschnitte bleiben
gesperrt; Fragen, Abschluss und XP bleiben unverändert.

Teste verlinkte/nicht verlinkte Schritte, Glossar-Deep-Link, Browser-Zurück,
Escape, Tastatur/Fokus, Screenreader, 360 px, Reload und Offline. Führe aus
academy/ npm test, npm run build und npm run test:e2e aus; fehlendes Chromium
als nicht ausgeführt dokumentieren. Prüfe den Diff, committe/pushe nur F-21,
öffne einen PR gegen main und merge nicht. Nenne die zugeordneten Begriffe,
Tests, Mobilbefund und bekannte Grenzen.
```

## F-22 – Leseoptionen

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-22 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md, nach Merge von F-13.
Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und beide Phase-2/3-
Roadmaps. Prüfe git status, hole origin/main und erstelle
claude/f22-reading-comfort. Ändere keine Buchtexte, IDs, Reihenfolge,
Frageantworten oder Chartdaten.

Ergänze im Buchmodus wenige benannte Stufen für Leseschriftgröße und
Zeilenabstand sowie „Standard“. Die Wahl wirkt sofort, bleibt nach Reload
erhalten und respektiert Browser-Zoom. Nutze CSS-Variablen statt einer zweiten
Inhaltsansicht. Wenn du die Optionen im Academy-Datensatz speicherst,
aktualisiere Version, Migration, Validierung, JSON-Export, Import-Vorschau,
Merge und Reset. Behalte alle bisherigen localStorage-Schlüssel und alte
Fortschritte unverändert. Kein vollständiges Redesign und keine neue
Abhängigkeit ohne begründeten Bedarf.

Prüfe lange Überschriften, Vergleich, Frage und Diagramm-Fokus in Standard-
und größter Stufe bei 360 px und Desktop: kein abgeschnittener Text oder
horizontaler Überlauf. Teste Speichern/Reload, Altstand, Import, Offline,
Tastatur, Screenreader und unveränderte Leseposition. Führe npm test,
npm run build und npm run test:e2e aus academy/ aus; E2E ohne Chromium als
nicht ausgeführt kennzeichnen. Diff prüfen, F-22 allein committen/pushen,
PR gegen main öffnen, nicht mergen; Datenmigration im PR erklären.
```

## F-23 – Kurze Lernsitzung

```text
Arbeite in RO881E/brooks-price-action nur an F-23 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md, nachdem F-15 und F-16 auf
main sind. Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die
Phase-2/3-Roadmaps. Prüfe git status und origin/main, erstelle
claude/f23-short-study-session von main.

Baue „Kurz lernen“ mit Wahl von ungefähr zehn oder zwanzig Minuten. Biete
in klarer Reihenfolge höchstens einige fällige Review-Fragen, die nächste
zugängliche Lektion und gegebenenfalls einen freigegebenen Trainerfall an.
Jede Aktion darf übersprungen werden. Leite Vorschläge in einer reinen
Funktion aus vorhandenen Fälligkeiten, Freischaltungen und Fortschritten
ab; keine gesperrten Deep Links, doppelten Aufgaben oder erfundenen
Restzeiten. Die Sitzung selbst gibt keine XP, keinen Streak und keine
Abschlüsse; bestehende Aktionen behalten ihre Regeln. Wenn kein passender
Fall verfügbar ist, zeige ihn nicht. Erfinde keine neuen Chartfälle.

Teste neu/fortgeschritten/alles erledigt, fällige Fragen aus verschiedenen
Kapiteln, gesperrte nächste Lektion, leere Offline-Auswahl, Überspringen,
Abbruch/Reload, falsche Antwort und wiederholte Lektion. Prüfe 360 px,
Tastatur, Screenreader und Offline. Führe npm test, npm run build und
npm run test:e2e aus academy/ aus; fehlendes Chromium ehrlich benennen.
Prüfe den Diff, committe/pushe nur F-23, öffne PR gegen main, merge nicht.
Dokumentiere die exakte Vorschlagsreihenfolge und ob neuer Zustand nötig war.
```

## F-24 – Eigene Trainerbegründung

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-24 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md nach Merge von F-15.
Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und die Phase-2/3-
Roadmaps. Prüfe git status, hole origin/main, erstelle
claude/f24-trainer-reasoning. Ändere keine kuratierten Fälle oder Lösungen.

Vor einer Long-/Short-/Abwarten-Entscheidung kann die lernende Person
optional einen kurzen Grund als Klartext und eine der drei Sicherheitsstufen
festhalten. Speichere die Fassung pro Fall, Entscheidungs-ID und Versuch
vor dem Reveal. Danach zeige die eigene Formulierung neben der vorhandenen
fachlichen Erklärung; bewerte den Freitext niemals automatisch. Leere
Eingabe bleibt erlaubt. Verwende ein Längenlimit und sichere Textausgabe.
Die Information liegt nur lokal. Implementiere Datenmodellversion,
Migration, Validierung, Backup-Export, Import/Vorschau/Merge und Reset;
alte Lektionsnotizen und die drei Storage-Schlüssel bleiben erhalten.

Teste leer/lang/ungültig, alle Sicherheitsstufen, Reload vor/nach Wahl,
zweiten Versuch, Import von Alt-/Neustand, Offline und fehlenden Fall.
Prüfe keine Zukunftsbars oder Lösungen vor Reveal im DOM/ARIA; keine
zusätzlichen XP. Prüfe 360 px, Tastatur und Screenreader. Führe aus
academy/ npm test, npm run build, npm run test:e2e aus; fehlendes Chromium
als nicht ausgeführt melden. Diff prüfen, nur F-24 committen/pushen, PR
gegen main eröffnen, nicht mergen. Beschreibe Daten- und Merge-Regeln.
```

## F-25 – Rückblick auf abgeschlossene Chartfälle

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-25 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md. F-15 muss auf main sein;
prüfe, ob F-24 bereits gemergt ist, bevor du einen Notizvergleich einbindest.
Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und Phase 2/3.
Prüfe git status/origin/main und erstelle claude/f25-case-replay.

Baue nur für abgeschlossene Trainerfälle einen Schritt-für-Schritt-Rückblick.
Je Entscheidung zunächst die damals sichtbaren Bars und eigene Wahl, danach
die bereits freigegebene Erklärung und Folgebars. Zeige einen klaren
Schrittindex und eine Aktion „Erneut trainieren“ für einen getrennten
Durchlauf. Falls F-24 vorhanden ist, zeige den gespeicherten damaligen
Grund und die damalige Sicherheitsstufe. Ein Replay darf keine neue Antwort,
XP oder Lernaktivität schreiben. Unfertige Fälle dürfen auch über direkte
URLs nicht zur Auflösung gelangen. Fehlende oder geänderte Fall-IDs erhalten
eine verständliche Fehlermeldung; keine falsche Rekonstruktion.

Teste mehrstufig, falsch/richtig/Abwarten, Erst- und Zweitversuch,
Abbruch vor Abschluss, Deep Link, Reload, alten Import, unbekannte ID,
Offline, 360 px, Tastatur und Screenreader. Führe npm test, npm run build
und npm run test:e2e aus academy/ aus. Fehlendes Chromium benennen. Prüfe
den Diff, committe/pushe nur F-25, öffne einen PR gegen main und merge nicht.
```

## F-26 – Zugängliche Tabelle zum Trainerchart

```text
Arbeite in RO881E/brooks-price-action nur an F-26 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md nach Merge von F-15.
Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und Phase 2/3;
prüfe git status, hole origin/main und erstelle
claude/f26-trainer-chart-table.

Ergänze im Bar-für-Bar-Trainer eine Umschaltung zwischen dem Chart und einer
zugänglichen Tabelle der schon sichtbaren OHLC-Bars. Die Tabelle nutzt
exakt die bestehende Sichtbarkeitsfunktion des Trainers, nicht das ganze
Fallobjekt. Benenne Barfolge, Open, High, Low, Close und relative
Lerneinheiten; Spaltenköpfe, Tabellenbeschriftung und aktueller
Entscheidungspunkt müssen per Screenreader verständlich sein. Umschalten
verliert keine Wahl und keinen Fokus. Nach Reveal kommen nur freigegebene
Bars hinzu. Versuche nicht, ältere freie SVG-Lehrbilder in Kursdaten
zurückzurechnen. Keine neuen Marktbeispiele oder gespeicherten Felder.

Teste mehrstufigen Fall vor/nach Reveal und jede Umschaltung; insbesondere
keine Zukunftsbars oder Lösungen in sichtbarem/verstecktem DOM, ARIA oder
der Tabellendarstellung. Prüfe Screenreader, Tastatur, 200-%-Textzoom,
360 px, Offline und gespeicherten Sitzungsstand. Führe npm test,
npm run build und npm run test:e2e aus academy/ aus; nicht ausführbares
E2E ehrlich dokumentieren. Nur F-26 committen/pushen, PR gegen main öffnen,
nicht mergen; die gemeinsame Sichtbarkeitsquelle im PR erklären.
```

## Redaktionelle Übergabe C-03

Diese Zuordnung ist **kein Claude-Auftrag**. Codex erstellt 6–10 geprüfte
Brooks-Themen mit stabilen IDs und Links zu bestehenden Fragen, Fällen und
Lehrstellen in einem gesonderten Content-PR. Erst nach Roberts Merge C-03
den folgenden Prompt an Claude geben.

## F-27 – Themenbezogen üben

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-27 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md. F-16 und der redaktionell
geprüfte Content-PR C-03 müssen auf main sein. Lies CLAUDE.md,
CONTRIBUTING.md, academy/README.md und die Phase-2/3-Roadmaps. Prüfe git
status, hole origin/main, erstelle claude/f27-topic-practice.

Ergänze in „Üben“ eine überschaubare Auswahl der tatsächlich vorhandenen
Brooks-Themen aus C-03. Ein gewähltes Thema filtert nur zugängliche,
zugeordnete Fragen und Trainerfälle. Nutze die bestehenden Review- und
Trainermechanismen, ohne Frage-IDs, Erstversuche, XP oder Fälligkeitsplan zu
duplizieren. Mehrfach zugeordnete Fragen erscheinen in einer Runde nur
einmal. Bei leerer Auswahl erkläre den Grund und verlinke auf die passende
veröffentlichte Lehrstelle. Zeige konkrete Begründungen und Fundstellen,
keine künstliche Beherrschungsquote oder automatische Fachdiagnose.

Teste Mehrfachzuordnung, mehrere Kapitel, gesperrte Lektion, neuen und
fortgeschrittenen Stand, fällige Review-Frage, gelöschtes Thema, Import,
Reload, Offline, 360 px, Tastatur und Screenreader. Führe aus academy/
npm test, npm run build und npm run test:e2e aus; fehlendes Chromium als
nicht ausgeführt kennzeichnen. Prüfe Diff, committe/pushe nur F-27,
eröffne PR gegen main und merge nicht.
```

## F-28 – Fehlerbericht vorbereiten, ohne Versand

```text
Arbeite in RO881E/brooks-price-action ausschließlich an F-28 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md nach einer geprüften F-20-
Beta. Lies CLAUDE.md, CONTRIBUTING.md, academy/README.md und Phase 2/3;
prüfe git status/origin/main und erstelle claude/f28-local-feedback-report.

Ergänze unter „Hilfe“ ein Formular für einen selbst formulierten Fehler und
die Schritte zur Wiederholung. Zeige vor „Kopieren“ oder „Herunterladen“
den exakten Textbericht. Er darf App-Version, groben Browser/Gerätetyp,
Online-/Offline-Zustand und die vom Nutzer eingegebenen Schritte enthalten.
Standardmäßig keine Notizen, Antworten, Fallbegründungen, Local-Storage-
Inhalte, Importdateien, präzisen Gerätekennungen oder URL-Parameter. Nichts
automatisch versenden, keine Telemetrie, kein Konto und kein Backend. Wenn
Clipboard nicht funktioniert, bleibt Download oder manuelles Kopieren.

Teste mit privaten Beispielnotizen und Antworten ausdrücklich, dass sie
nicht im Bericht auftauchen. Prüfe Vorschau=Export, Offline, fehlende
Clipboard-Berechtigung, 360 px, Tastatur und Screenreader. Führe aus
academy/ npm test, npm run build und npm run test:e2e aus; Chromium-Ausfall
ehrlich dokumentieren. Diff prüfen, nur F-28 committen/pushen, PR gegen
main öffnen, nicht mergen. Berichtsbeispiel ohne echte Nutzerdaten beifügen.
```

## F-29 – Struktureller Content-Check

```text
Arbeite in RO881E/brooks-price-action nur an F-29 aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md. F-12 muss gemergt sein;
F-29 darf vor anderen Phase-3-Paketen vorgezogen werden. Lies CLAUDE.md,
CONTRIBUTING.md, academy/README.md und alle Funktionsroadmaps. Prüfe git
status, hole origin/main und erstelle claude/f29-content-validation.

Baue einen lokalen/CI-Prüfbefehl für maschinell erkennbare Strukturfehler:
duplizierte Lektions-/Schritt-IDs, Buchreihenfolge, verwaiste Diagramme,
fehlende Bildbeschreibungen, ungültige Fragen, kaputte Glossar-/Fallbezüge
und unbeabsichtigte Änderungen an bekannten veröffentlichten IDs. Die
bekannten IDs müssen bewusst und nachvollziehbar bei neuen Kapiteln
ergänzt werden können. Behalte das Prüfwerkzeug aus dem Browser-Bundle.
Teste gültigen Bestand und gezielt defekte Fixtures mit konkreter
Fehlermeldung samt Datei/ID. Ändere keine Brooks-Texte oder Diagramme bloß,
um einen Test grün zu bekommen; fachliche und urheberrechtliche Qualität
bleiben redaktionelle Prüfung und dürfen nicht als automatisch validiert
gelten.

Führe npm test, npm run build, den neuen Check und npm run test:e2e aus
academy/ aus; fehlendes Chromium als nicht ausgeführt nennen. Prüfe
CI-Einbindung und Diff, committe/pushe nur F-29, eröffne einen PR gegen
main und merge nicht. Beschreibe genau, welche Fehler der Check findet und
welche nicht.
```

## Kontrollprompt vor einem Merge

```text
Prüfe PR #NUMMER in RO881E/brooks-price-action lesend gegen CLAUDE.md,
CONTRIBUTING.md und genau sein Paket aus
academy/docs/FUNCTIONALITY_ROADMAP_PHASE_3.md. Ändere nichts und merge
nichts. Prüfe Diff, Speicher-/Backup-/Importregeln, Zugriffslogik, IDs,
Tests, 360 px, Tastatur/Screenreader und Offline. Melde konkrete Blocker
zuerst mit Datei und Reproduktionsschritt; danach kleinere Punkte. Behaupte
nur Prüfungen, die du selbst ausgeführt hast.
```
