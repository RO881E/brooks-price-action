# Stufe 4: Chart-Trainer als Mini-Spiel, Begriffe-Memory, Blitzrunde

Umsetzung von S4a, S4b und S4c aus [`SPIELERISCH_STUFE4_5_PLAN.md`](SPIELERISCH_STUFE4_5_PLAN.md) mit den
Standardentscheidungen des Plans. **Nicht enthalten:** S4d („Finde den Signal-Bar“, „Ordne die
Schritte“) – dafür braucht es ein Content-Pack C-04 mit deiner fachlichen Freigabe.

Grundsatz für die beiden neuen Übungen: **reine Übung** – sie zählen nichts (keine XP, keine Serie,
kein Einfluss auf den Wiederholungsplan), speichern nichts und ändern den Lernstand nicht.

## S4a – Chart-Trainer als Mini-Spiel

- **Entscheidung als drei große Kacheln** (Long / Abwarten / Short) mit Symbol und Text. Die
  eigentliche Bedienung bleibt eine echte Radiogruppe (Pfeiltasten, Screenreader-Namen unverändert);
  die Kacheln sind nur die Darstellung. Long und Short nutzen neutrale Modusfarben (blau/violett),
  keine Gewinn- oder Verlustfarben; Symbol und Text tragen die Bedeutung, nicht die Farbe.
- **Neue Bars erscheinen nacheinander** (kurze Animation, nur ohne „Bewegung reduzieren“). Die
  markierten neuen Bars und alle Regeln (keine Vorschau künftiger Bars) sind unverändert.
- **Auflösung mit Bulle**: ein kurzer Satz je Einordnung („Gut gesehen …“, „Das lässt sich
  vertreten …“, „Kein Drama …“); er bewertet nur die Einordnung, nie einen Markterfolg.

## S4b – Begriffe-Memory (unter „Üben“)

- Begriff antippen, dann die passende **Beschreibung** (die vorhandene Glossar-Definition, kein neuer
  Fachtext). Es sind nur Begriffe aus Einheiten mit mindestens einer abgeschlossenen Lektion
  verfügbar, mindestens vier; sonst erklärt die Karte, wie sie sich freischaltet.
- Fünf Paare je Runde, deterministisch je Startwert, Beschreibungen nie in der Reihenfolge der Begriffe.
- **Kein Ziehen nötig**: alles sind normale Buttons (Tastatur, `aria-pressed`). Ein Fehlversuch
  erklärt („Diese Beschreibung gehört zu …“) und kostet nichts.

## S4c – Blitzrunde (unter „Üben“)

- Bis zu zehn Fragen aus den abgeschlossenen Lektionen, sofort mit Erklärung, kein Einfluss auf den
  Wiederholungsplan.
- **Zeit ist zuschaltbar**: „Mit 60 Sekunden“ oder gleichwertig „Ohne Zeit spielen“ (WCAG 2.2.1),
  jederzeit **Pause**, „Beenden“ möglich. Screenreader bekommen nur wenige Ansagen (30 s, 10 s, Ende),
  keinen Sekundentakt.
- Ergebnis freundlich („N von M beantworteten Fragen richtig“), falsche Fragen mit Sprung zur Lektion.

## Tests

`matchPairs.test.ts`, `blitz.test.ts` (Unit); `tests/trainer-game.spec.ts`, `tests/match-game.spec.ts`,
`tests/blitz-game.spec.ts` (E2E inkl. Tastatur, 360 px, axe, reduzierte Bewegung, Uhr-Simulation für
die Blitzrunde, unveränderter Lernstand).
