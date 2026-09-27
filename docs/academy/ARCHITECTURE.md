# WQT Academy – verbindliche Produkt- und Inhaltsarchitektur

Stand: 27. September 2026  
Geltungsbereich: Neuentwicklung des Brooks-Lernpfads und spätere Erweiterung zur WQT Academy

## 1. Ziel

Die neue Anwendung wird keine verkürzte Zusammenfassungsseite, sondern eine vollständige, visuelle Lernplattform. Sie soll die Reihenfolge und fachliche Tiefe der jeweiligen Quelle erhalten und den Stoff gleichzeitig in kleine, verständliche Lerneinheiten zerlegen.

Die Duolingo-Idee betrifft Navigation, Lernrhythmus, Rückmeldung und Wiederholung. Sie ist ausdrücklich kein Auftrag zur inhaltlichen Kürzung.

## 2. Unverhandelbare Regeln

1. Die Originalreihenfolge von Buch, Teil und Kapitel bleibt erhalten.
2. Teil-Einführungen und andere fachlich relevante Frontmatter werden als eigene Einheiten abgebildet und nicht stillschweigend anderen Kapiteln zugeschlagen.
3. Lernpfade dürfen Kapitel intern gliedern, aber keine Inhalte zwischen Kapiteln verschieben.
4. Jede fachliche Aussage wird eigenständig formuliert. Buchtext und Buchgrafiken werden nicht übernommen.
5. Zu jedem relevanten Chartfall entsteht eine eigene Grafik mit eigenständigen Kursdaten und eigenem Design.
6. Informationsdichte und Verständlichkeit sind gleichrangige Qualitätsziele.
7. WQT-Fachbände ergänzen die Buchkurse später als klar gekennzeichnete Vertiefungen. Sie verändern nicht rückwirkend die Reihenfolge des Buchkurses.
8. Bestehende Fortschrittsdaten werden migriert, niemals still gelöscht.

## 3. Quellenhierarchie

Bei Konflikten gilt folgende Reihenfolge:

1. Originalbuch für Reihenfolge, Themenumfang und konzeptionelle Abdeckung
2. Eigenständig erstellte WQT-Kurserklärung für Didaktik, Beispiele und Visualisierung
3. Bestehende Website als Rohentwurf und Inventar bereits formulierter Inhalte
4. WQT-Fachbände als spätere Vertiefung, Forschungsrahmen und Verbindung zu weiteren Kursen

Die bestehende Website ist damit kein vollständiger Sollstand. Sie ist Ausgangsmaterial, das gegen die Originalquelle geprüft wird.

## 4. Inhaltshierarchie

```text
Academy
└── Kursreihe
    └── Buch
        ├── Referenzmaterial
        ├── Einleitung
        └── Buchteil
            ├── Teil-Einführung
            └── Originalkapitel
                └── Lernpfad
                    └── Lektion
                        └── Lernschritt
```

Die stabilen IDs folgen der Quelle, zum Beispiel:

```text
brooks-trends
brooks-trends.part-01
brooks-trends.chapter-06
brooks-trends.chapter-06.path-03
brooks-trends.chapter-06.path-03.lesson-02
```

Anzeigenamen dürfen später verbessert werden; stabile IDs und Fortschrittsbezüge dürfen sich nicht ohne Migration ändern.

## 5. Drei Ansichten auf dieselben Inhalte

### Kursmodus

Häppchenweiser Lernpfad mit klarer Reihenfolge, kurzen Schritten, unmittelbaren Aufgaben und sichtbarem Fortschritt.

### Kapitelmodus

Alle freigeschalteten Inhalte eines Originalkapitels als zusammenhängende, ausführliche Darstellung. Dieser Modus verhindert, dass der Kurs wie eine Sammlung isolierter Karteikarten wirkt.

### Übungsmodus

Gezielte Wiederholung nach Thema und Fehlertyp. Falsche Antworten erzeugen keine Strafe, sondern einen späteren Wiederholungstermin.

Alle drei Ansichten greifen auf dieselben strukturierten Inhaltsblöcke zu. Es gibt keine verkürzte Kursfassung neben einer separat gepflegten Langfassung.

## 6. Lektionsmodell

Eine Lektion besteht abhängig vom Thema aus mehreren dieser Schritte:

- Lernziel und Vorwissen
- kurze Orientierung
- ausführliche Erklärung
- Begriffsklärung
- eigenständiges Schaubild
- schrittweise Chartanalyse
- Positivbeispiel
- Gegenbeispiel oder Grenzfall
- Entscheidungsaufgabe
- unmittelbares Feedback mit Begründung
- Zusammenfassung
- Vertiefung
- Wiederholungsfrage

Nicht jede Lektion muss künstlich gleich lang sein. Einfache Begriffe dürfen kurz bleiben; schwierige Chartsequenzen erhalten den nötigen Raum.

## 7. Inhaltstypen

Der Kurskern unterstützt mindestens folgende Bausteine:

| Typ | Zweck |
| --- | --- |
| `explanation` | eigenständige ausführliche Erklärung |
| `definition` | präzise Begriffsklärung |
| `diagram` | statisches oder animiertes Schaubild |
| `chart-walkthrough` | Bar-für-Bar-Analyse einer Sequenz |
| `comparison` | Muster, Bedingungen oder Handlungsoptionen vergleichen |
| `example` | geführtes Anwendungsbeispiel |
| `counterexample` | ähnlich aussehenden, aber fachlich anderen Fall abgrenzen |
| `decision` | Entry, Abwarten, Exit oder keine Position wählen |
| `identify` | Bar, Muster, Trendphase oder Range erkennen |
| `sequence` | Bars oder Analyseschritte ordnen |
| `quiz` | Verständnis prüfen |
| `recap` | Kernaussagen verdichten |
| `deep-dive` | Detailwissen ohne Kürzung des Hauptpfads |
| `source-coverage` | interne Zuordnung zur Abdeckungsmatrix |

## 8. Visualisierungssystem

Die Plattform erhält eine eigene wiederverwendbare Chartbibliothek. Sie arbeitet mit synthetischen oder eigenständig konstruierten OHLC-Daten.

Geplante Grundkomponenten:

- einzelne Bar mit Open, High, Low und Close
- Trendbar, Doji, Reversal-Bar, Inside- und Outside-Bar
- mehrteilige Barsequenz
- Trend, Trading Range und Übergang
- Trendlinie und Trendkanallinie
- Breakout, Test, Fehlausbruch und Retest
- High/Low-Zählung
- Spike-and-Channel
- Microchannel
- Entry, Initial Stop, Trailing Stop und Ziel
- schrittweise Enthüllung der nächsten Bars
- auswählbare Chartbereiche und Entscheidungspunkte

Jede Grafik benötigt eine Textalternative und darf nicht allein über Farbe kommunizieren.

## 9. Technische Zielarchitektur

Für die erste produktive Neufassung wird folgende Basis empfohlen:

- React mit TypeScript im strikten Modus
- Vite als schlanker Build- und Entwicklungsrahmen
- dateibasierte, validierte Kursinhalte in MDX beziehungsweise strukturierten TypeScript-Daten
- wiederverwendbare SVG-Komponenten für Price-Action-Charts
- versionierter Progress-Adapter
- Vitest und Testing Library für Logik und Komponenten
- Playwright für vollständige Browserabläufe
- automatisierte Barrierefreiheitsprüfungen
- statischer Build für einfache Bereitstellung

Ein Backend wird erst ergänzt, wenn Benutzerkonten, geräteübergreifende Synchronisierung oder eine redaktionelle Oberfläche tatsächlich benötigt werden. Die Inhaltsstruktur darf davon nicht abhängen.

## 10. Vorgesehene Projektstruktur

```text
src/
├── app/
├── components/
│   ├── course/
│   ├── lesson/
│   └── ui/
├── content/
│   └── courses/
│       └── brooks-trends/
│           ├── course.ts
│           ├── glossary.ts
│           ├── introduction/
│           ├── part-01/
│           ├── part-02/
│           ├── part-03/
│           └── part-04/
├── features/
│   ├── progress/
│   ├── practice/
│   ├── search/
│   └── review/
├── visuals/
│   ├── charts/
│   └── scenarios/
└── tests/
```

## 11. Fortschritt und Migration

Die bestehenden Schlüssel `brooks-progress` und `brooks-tr-best` bleiben lesbar.

Die Neufassung erhält zusätzlich ein versioniertes Datenmodell. Beim ersten Start wird der alte Zustand nur gelesen und in das neue Modell übertragen. Die alten Daten bleiben als Rückfalloption bestehen.

Fortschritt wird künftig getrennt erfasst:

- angesehen
- verstanden
- Übung bestanden
- sicher beherrscht
- zur Wiederholung fällig

Ein altes „Kapitel gelesen“ darf nicht automatisch als fachliche Beherrschung interpretiert werden.

## 12. Abdeckungsmatrix

Jeder fachliche Quellabschnitt erhält intern eine eindeutige Zuordnung:

| Feld | Bedeutung |
| --- | --- |
| Quellen-Einheit | Einleitung, Teil-Einführung oder Kapitel |
| Themenanker | eigenständig formulierter Begriff für den behandelten Abschnitt |
| Ziel-Lernpfad | Position im Kurs |
| Erklärung | Entwurf, geprüft oder fertig |
| Visualisierung | nicht nötig, geplant, erstellt oder geprüft |
| Beispiel | geplant, erstellt oder geprüft |
| Übung | geplant, erstellt oder geprüft |
| Fachprüfung | offen oder bestanden |
| Copyright-Prüfung | offen oder bestanden |

Eine Kapitelanzeige darf erst „vollständig“ heißen, wenn alle zugehörigen Zeilen geprüft sind.

## 13. Definition of Done für eine Lektion

Eine Lektion ist erst fertig, wenn:

- sie an der richtigen Stelle der Originalreihenfolge steht,
- alle zugeordneten Quellkonzepte behandelt sind,
- die Erklärung ohne Buchtext verständlich ist,
- notwendige Fachbegriffe erklärt oder verlinkt sind,
- mindestens ein passendes Beispiel oder eine begründete Ausnahme vorhanden ist,
- eine sinnvolle aktive Aufgabe existiert,
- Feedback nicht nur „richtig/falsch“, sondern die Ursache erklärt,
- Visualisierungen eigenständig und mobil lesbar sind,
- Tastaturbedienung und Textalternativen funktionieren,
- Inhalts-, Komponenten- und Browsertests erfolgreich sind.

## 14. Umsetzungsreihenfolge

1. Quelleninventur und Abdeckungsmatrix für Buch 1
2. technischer Spike für Inhaltsmodell, Routing, Diagramm und Progress-Migration
3. Academy-Shell mit Startseite, Kursseite und Lernpfad
4. Einleitung, Teil-I-Einführung und Kapitel 1 als vollständiger Pilot
5. fachliche und didaktische Prüfung des Piloten
6. Ausbau in Originalreihenfolge
7. erst nach Buch 1: Buch 2 und Buch 3
8. danach Einbindung der WQT-Fachbände als eigene Kurse oder Vertiefungen

## 15. Bewusste Nicht-Ziele der ersten Version

- kein Echtgeld-Trading aus der Lernplattform
- keine Social-Feed-Funktionen
- keine künstliche Bestrafung durch Herzen
- keine Rangliste, bevor fachliche Qualität und Wiederholungssystem funktionieren
- keine automatische KI-Erstellung ungeprüfter Kursinhalte
- kein Backend nur aus Prestigegründen
