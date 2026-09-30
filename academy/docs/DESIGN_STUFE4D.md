# Stufe 4d: „Finde den Bar“ und „Ordne die Schritte“

Umsetzung von S4d aus [`SPIELERISCH_STUFE4_5_PLAN.md`](SPIELERISCH_STUFE4_5_PLAN.md). Inhalte: Content-Pack
C-04 ([Prüfliste](C04_AUFGABEN.md)), Status **Entwurf** – in der App erst nach fachlicher Freigabe sichtbar.

Beide Übungen (unter „Üben“) sind **reine Übung**: kein XP, keine Serie, kein Einfluss auf den
Wiederholungsplan, nichts wird gespeichert.

- **Finde den Bar:** Chart antippen. Jeder Bar ist ein echter Button (Tastatur, Screenreader-Beschreibung
  mit Eröffnung, Hoch, Tief, Schluss). Ein falscher Tipp erklärt, warum der Bar nicht passt; nach zwei
  Fehlversuchen gibt es „Lösung zeigen“. Am Ende erklärt Bo die Lösung, mit Link zu den Lektionen.
- **Ordne die Schritte:** Schritte mit Hoch/Runter-Knöpfen verschieben (kein Ziehen nötig), „Reihenfolge
  prüfen“ meldet, wie viele Schritte richtig stehen. Die Startreihenfolge ist nie die Lösung.
- **Freischaltung:** Eine Aufgabe ist offen, wenn sie freigegeben ist **und** alle zugehörigen Lektionen
  abgeschlossen sind; sonst erklärt die Karte das. Ohne freigegebene Aufgabe erscheint nichts.
- **Prüfung:** `features/practiceTaskValidation.ts` rechnet nach, dass der Zielbar die genannte Regel erfüllt
  (und kein anderer), dass Lektionen veröffentlicht sind und zur Einheit gehören. Nur die fachliche Richtigkeit
  bleibt redaktionell.

Tests: `practiceTasks.test.ts`, `PracticeTasks.test.tsx` (Unit), `tests/practice-tasks.spec.ts` (E2E, läuft ab
Freigabe). Screenshots: `docs/design/s4d/`.
