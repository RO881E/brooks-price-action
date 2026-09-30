# Stufe 3: Wochenblick, Ziel-Ring, Missionstruhe, Bar-Album

Dritte Umsetzung aus [`SPIELERISCH_IDEEN.md`](SPIELERISCH_IDEEN.md) (Ideen 19, 20, 21, 23). Alles wird
**aus dem echten Lernstand abgeleitet**; es gibt keinen neuen gespeicherten Zustand, keine Migration
und keine Änderung an XP, Serie oder Fälligkeiten.

## Was sich ändert

| Idee | Wo | Was |
|---|---|---|
| Wochenblick (19) | „Heute“ | Sieben runde Punkte Mo–So; gelernte Tage gefüllt, heute umrandet, Zukunft blass. Darunter „Diese Woche: N von 7 Tagen gelernt“ (nur echte Lernaktivität zählt). Eine Pause heißt neutral „kein Lerntag“ – nie „verpasst“ oder „Serie verloren“. |
| Ziel-Ring (23) | „Heute“ | Ring um den Bullen füllt sich mit dem Tagesziel (Prozent aus dem vorhandenen Ziel); daneben „Tagesziel heute: X von Y“. |
| Missionstruhe (20) | Fortschritt → „Kleine Vorschläge für heute“ | Truhe zeigt „Noch N von M Vorschlägen“ und öffnet sich (mit jubelndem Bullen), wenn alle Vorschläge erledigt sind. **Reine Anzeige**: keine Punkte, keine XP, kein Einfluss auf den Lernstand. |
| Bar-Album (21) | Fortschritt | Zwölf Sammelkarten zu Bar-Formen (Trendbar, Doji, Inside-Bar, ii/iii, ioi, Outside-Bar, Reversal-Bar, Zwei-/Drei-Bar-Reversal, Klimax, Test, Fehlausbruch). Eine Karte wird frei, sobald ihre **Lektion abgeschlossen** ist – sonst nichts. |

## Bar-Album: Inhalt und Herkunft

- **Bilder:** eigene, schematische Bars (`src/content/barAlbum.ts`), keine Buchabbildungen und keine
  echten Kurse. Farben sind neutral (blau = Schluss über Eröffnung, violett = darunter), keine
  Gewinn-/Verlustfarben. Gesperrte Karten zeigen graue Silhouetten.
- **Beschreibung:** die vorhandene **Glossar-Definition** des Begriffs – kein neuer Fachtext. Ein
  Unit-Test stellt sicher, dass Karte und Glossar übereinstimmen.
- **Prüfungen (Unit):** jeder Begriff steht im Glossar, jede Lektion ist veröffentlicht, alle Bars
  sind gültig, und die beschriebenen Formen stehen wirklich in den Werten (Inside-Bar innerhalb des
  Vorgängers, Outside-Bar umfasst ihn, ii/iii verschachtelt, ioi, Doji mit kleinem Körper).
- **Fachliche Sichtung durch Robert:** Zuordnung Begriff ↔ Lektion und die Bildformen (vor allem
  Reversal-Muster, Test, Fehlausbruch) bitte kurz prüfen. Neue Karten lassen sich in
  `barAlbum.ts` ergänzen; die Tests prüfen sie automatisch.

## Barrierefreiheit

- Wochenblick als Liste mit Text je Tag („Mi, 2026-09-30: Ziel erreicht“); Punkte und Ring sind
  Dekoration. Der Ziel-Ring ist `aria-hidden`; die Zahl steht als Text daneben.
- Album-Bilder sind `role="img"` mit Beschreibung („Schematische Bars: …“); gesperrte Silhouetten
  sind für Screenreader ausgeblendet, der Hinweis „Noch gesperrt. Schließe die Lektion … ab“ steht
  als Text.
- Tests: `tests/motivation-fun.spec.ts` (axe, 360 px, Tastatur) und Unit-Tests für Wochenblick,
  Truhe und Album.

## Bildschirmfotos

[`docs/design/s3`](design/s3): „Heute“ mit Wochenblick und Ring, Missionstruhe, Bar-Album
(Desktop und 360 px).
