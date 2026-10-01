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
5. **Die App nach Codeänderungen vollständig testen** (siehe unten).
6. **Änderungen committen, pushen und als Pull Request gegen `main`
   einreichen.**
7. **Pull Requests niemals selbst mergen.** Das Zusammenführen entscheidet
   ausschließlich der Repository-Inhaber.

## Bestehendes erhalten

- Der bestehende `localStorage`-Schlüssel (derzeit `wqt-academy-progress-v1`)
  und bestehende Funktionen bleiben erhalten — nicht umbenennen, entfernen oder in ihrem Verhalten
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

## Vollständiger Test der App

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
- `wqt-academy-progress-v1` bleibt gemäß der Migrationsregeln erhalten.
- Die geänderten Abläufe funktionieren per Tastatur und bei schmaler mobiler
  Breite ohne horizontalen Seitenüberlauf.

Wenn Chromium in der Arbeitsumgebung technisch nicht verfügbar ist, wird der
E2E-Test im Pull Request ausdrücklich als **nicht ausgeführt** dokumentiert. Er
darf dann nicht als bestanden bezeichnet werden.
