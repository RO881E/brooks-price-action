# Price Action Lernpfad — Al Brooks Zusammenfassung

Eine interaktive, selbst erstellte Lernwebsite mit Zusammenfassungen von Al Brooks'
Price-Action-Buchtrilogie ("Trading Price Action Trends", Buch 1 von 3).

**Wichtig:** Alle Inhalte sind eigenständige, in eigenen Worten verfasste
Zusammenfassungen der Kernkonzepte — kein Nachdruck oder Zitat des Originaltexts.
Das Original bleibt urheberrechtlich geschützt bei Al Brooks / Wiley. Bitte beim
Weiterbearbeiten (auch mit ChatGPT o.ä.) keine wörtlichen Auszüge aus dem Buch
selbst einfügen, sondern beim Stil "eigene Worte, Tabellen, Diagramme" bleiben.

## Struktur

```
index.html          Die komplette Lernwebsite (single-file, keine Build-Tools nötig)
pdfs/                Ältere PDF-Versionen von Einleitung & Kapitel 1 (Referenz/Backup)
```

## Was die Website enthält

- **Buch 1 komplett zusammengefasst:** Einleitung + alle 26 Kapitel
  (Teil I–IV: Price-Action-Grundlagen, Trendlinien/-kanäle, Trends,
  häufige Trendmuster)
- **Fortschritts-Tracking** pro Kapitel (lokal im Browser, `localStorage`)
- **Verständnis-Quiz** zu jedem fertigen Kapitel
- **Glossar & Suche** über die zentralen Fachbegriffe
- **Vier interaktive Übungen:**
  - Bar-Typ erkennen (Trend-Bar/Doji/Reversal)
  - Beine zählen (High/Low 1-2-3-4)
  - Glossar-Flashcards
  - Schnell-Drill "Trend oder Range?"
- **Navigationsgerüst für Buch 2 & 3** (Trading Ranges / Reversals) bereits
  angelegt, aber noch ohne Inhalt — wartet auf die jeweiligen Quellbücher

## Lokal öffnen

Einfach `index.html` doppelklicken bzw. im Browser öffnen — reines HTML/CSS/
Vanilla-JS, keine Abhängigkeiten, kein Server nötig.

## Mit GitHub Pages hosten (optional)

1. Repo-Settings → Pages → Branch `main`, Ordner `/ (root)` auswählen
2. Die Seite ist danach unter `https://<username>.github.io/<repo-name>/` erreichbar

## Weiterarbeiten (Claude oder ChatGPT)

Der gesamte Seiteninhalt liegt in `index.html` in zwei JS-Objekten:

- `DATA` — die Kapitel-Navigation (Buch/Teil/Kapitel-Struktur, `status: 'done'`
  oder `'pending'`)
- `CONTENT['<kapitel-id>']` — der HTML-Inhalt eines Kapitels als Template-String
- `QUIZZES['<kapitel-id>']` — die Quiz-Fragen dazu
- `GLOSSARY` — das Begriffs-Array `[["Begriff", "Erklärung"], ...]`

Um ein neues Kapitel zu ergänzen (z. B. für Buch 2/3):
1. Neuen Eintrag in `DATA` mit `status: 'done'` anlegen (oder bestehenden
   `'pending'`-Eintrag umstellen)
2. `CONTENT['neue-id'] = \`...\`;` mit dem Kapitelinhalt ergänzen (gleicher
   Karten/Tabellen-Stil wie die bestehenden Kapitel als Vorlage nehmen)
3. Optional `QUIZZES['neue-id'] = [...]` ergänzen

Nach jeder Änderung: Datei in einem Browser öffnen und die Konsole auf
JavaScript-Fehler prüfen (fehlende Anführungszeichen in Template-Strings sind
die häufigste Fehlerquelle bei String-Konkatenation mit Apostrophen).

## Lizenz / Nutzung

Nur für den persönlichen Lerngebrauch gedacht. Enthält keine Inhalte, Bilder
oder Textpassagen aus dem Originalbuch — nur eigenständig formulierte
Zusammenfassungen der darin behandelten (nicht schutzfähigen) Handelskonzepte.
