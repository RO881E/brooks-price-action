# Arbeitsregeln

Diese Regeln gelten für alle, die an diesem Repository arbeiten — Menschen
ebenso wie KI-Assistenten (Claude, Codex u. a.).

## Ablauf

1. **Vor jeder Aufgabe den aktuellen `main`-Stand prüfen:** `git status`
   ausführen, `git fetch origin main` und sicherstellen, dass die Arbeit auf dem
   neuesten `main` aufsetzt.
2. **Ein Branch pro zusammengehörigem Arbeitspaket.** Unabhängige Änderungen
   kommen in getrennte Branches.
3. **Niemals direkt auf `main` arbeiten** — weder committen noch pushen.
4. **Branch-Präfix nach Urheber:**
   - `claude/` für Claude
   - `codex/` für Codex
5. **Website nach Codeänderungen vollständig testen** (siehe unten).
6. **Änderungen committen, pushen und als Pull Request gegen `main`
   einreichen.**
7. **Pull Requests niemals selbst mergen.** Das Zusammenführen entscheidet
   ausschließlich der Repository-Inhaber.

## Bestehendes erhalten

- Bestehende `localStorage`-Schlüssel (derzeit `brooks-progress`,
  `brooks-tr-best` und `wqt-academy-progress-v1`) und bestehende Funktionen
  bleiben erhalten — nicht umbenennen, entfernen oder in ihrem Verhalten
  ändern, sofern das nicht ausdrücklich verlangt wird. Sonst gehen
  gespeicherte Fortschritte der Nutzer verloren.
- Erweiterungen des Academy-Datenmodells benötigen eine ausdrücklich getestete
  Migration. Alte oder beschädigte Speicherstände dürfen die Anwendung nicht
  unbenutzbar machen.

## Was nicht ins Repository gehört

- Keine Geheimnisse, Zugangsdaten, Tokens oder API-Schlüssel.
- Keine generierten oder temporären Dateien (Testskripte für den Einmalgebrauch,
  Screenshots, Logs, Build-Ausgaben, Editor-/OS-Dateien).

## Urheberrecht

- Keine wörtlichen Passagen aus urheberrechtlich geschützten Büchern
  übernehmen — auch keine kurzen Zitate oder eng angelehnten Umschreibungen.
- Inhalte ausschließlich eigenständig formulieren: eigene Worte, eigene
  Tabellen, eigene Diagramme.

## Vollständiger Test der Stammwebsite

Nach jeder Änderung an `index.html` die Seite im Browser öffnen und prüfen:

- Die Browser-Konsole zeigt beim Laden **keine JavaScript-Fehler**.
- **Jedes Kapitel** in der Navigation lässt sich öffnen und zeigt Inhalt
  (bzw. den „pending“-Hinweis bei noch nicht fertigen Kapiteln).
- Quizze der fertigen Kapitel lassen sich beantworten und auswerten.
- **Glossar & Suche** sowie **alle vier Übungen** (Bar-Typ erkennen, Beine
  zählen, Glossar-Flashcards, Trend oder Range?) funktionieren.
- „Als gelesen markieren“ aktualisiert den Fortschrittsbalken und
  bleibt nach einem Neuladen erhalten.
- Die Darstellung funktioniert auch in schmaler (mobiler) Fensterbreite.

Häufigste Fehlerquelle: unmaskierte Backticks oder `${` in den
Template-Strings von `CONTENT[...]` sowie Apostrophe in einfach
angeführten Strings.

## Vollständiger Test der React-Academy

Nach Änderungen unter `academy/src/` mindestens im Verzeichnis `academy/`
ausführen:

```bash
npm test
npm run build
npm run test:e2e
```

Zusätzlich prüfen:

- Beim Laden und in den geänderten Abläufen entstehen keine JavaScript-Fehler.
- Lernpfad, Buchmodus, Üben und Glossar bleiben erreichbar.
- Betroffene Lektionen, Fragen und Fortschrittsfunktionen funktionieren vor und
  nach einem Reload.
- `brooks-progress`, `brooks-tr-best` und `wqt-academy-progress-v1` bleiben
  gemäß ihrer Migrationsregeln erhalten.
- Die geänderten Abläufe funktionieren per Tastatur und bei schmaler mobiler
  Breite ohne horizontalen Seitenüberlauf.

Wenn Chromium in der Arbeitsumgebung technisch nicht verfügbar ist, wird der
E2E-Test im Pull Request ausdrücklich als **nicht ausgeführt** dokumentiert. Er
darf dann nicht als bestanden bezeichnet werden.
