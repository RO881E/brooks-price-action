# Stufe 1: Bulle „Bo“ und kräftigere Formen

Erste Umsetzung aus [`SPIELERISCH_IDEEN.md`](SPIELERISCH_IDEEN.md). Nur Darstellung: Texte,
Zähler, XP, Lernstand und Speicherschlüssel bleiben unverändert.

## Entscheidungen (von Robert)

- Figur: **ein Bulle** („Bo“). Ton: locker und freundlich, gut verständlich ab 12.
- Töne standardmäßig **aus**, Vibration **an** (beides folgt in Stufe 5, nicht hier).
- Bilder zunächst als einfache SVG-Platzhalter von Claude; später ersetzbar durch eigene Bilder.

## Was sich ändert

| Bereich | Änderung |
|---|---|
| „Heute“ | Bulle mit Sprechblase über der Karte „Jetzt dran“; der Satz hängt nur von der nächsten Aktion ab (`src/features/bull.ts`). |
| Antwort-Rückmeldung (Lektion, Wiederholung) | Bulle links, Text rechts: nachdenklich bei „noch nicht ganz“, jubelnd bei richtig, ruhig bei „Lösung anzeigen“. Die vorhandenen Texte und Buttons bleiben. |
| Lektionsergebnis | Bulle mit kurzem Satz („Geschafft!“ bzw. „Kein Stress“). |
| Knöpfe | Modusfarbe statt Einheits-Dunkelblau, rundere Ecken, sichtbare „Kante“, die beim Drücken einsinkt. |
| Karten | Größere Rundung; Übungskarten mit sanftem Farbverlauf im Modusfarbton. |

**Bewusst noch nicht:** Der „Antwortstreifen“ klebt nicht am unteren Bildrand, sondern steht wie
bisher unter den Antworten. Ein fest verankerter Streifen würde Bedienelemente auf dem Handy
verdecken und braucht eigene Tests (folgt bei Bedarf).

## Barrierefreiheit und Bewegung

- Der Bulle ist Dekoration (`alt=""`): Screenreader hören nur den normalen Text daneben.
- Die Einblend-Animation (einmal kurz hüpfen) läuft nur ohne „Bewegung reduzieren“ (Systemwunsch
  oder Einstellung). Das Drücken der Knöpfe sinkt ebenfalls nur ohne Präferenz ein.
- Farben der Knöpfe sind die geprüften `ink`-Töne der Modi (weiße Schrift ≥ 4,5 : 1).
- `tests/bull.spec.ts`: Bilder laden, Dekoration, axe, 360 px, reduzierte Bewegung.

## Bilder austauschen (auch durch Bilder aus ChatGPT)

Die Bilder liegen in `public/mascot/`:

| Datei | Wann sichtbar |
|---|---|
| `bull-happy.svg` | Begrüßung |
| `bull-think.svg` | falsche Antwort, Chart-Training |
| `bull-cheer.svg` | richtige Antwort, Lektion abgeschlossen |
| `bull-calm.svg` | „Lösung anzeigen“, Lektion nicht abgeschlossen |

Zum Austausch die Datei mit **demselben Namen** ersetzen. Empfohlen: quadratisch, transparenter
Hintergrund, mindestens 240 × 240 px, gut lesbar bei 52 bis 84 px Anzeigegröße. Bei PNG oder WebP
statt SVG einmal `BULL_EXTENSION` in `src/components/Bull.tsx` ändern und alle vier Dateien
ersetzen. Beim Erstellen eigenständige Motive wählen, keine Nachbildung fremder Figuren, und
Rechte bzw. Lizenz des erzeugten Bildes prüfen. Die Bilder werden mit der App offline
vorgeladen; nach dem Austausch `npm run report:size` prüfen (Grenze für die Offline-Größe).

## Bildschirmfotos

Vorher/Nachher in [`docs/design/s1`](design/s1): `before-*` und `after-*` für Heute, Üben und die
Antwort-Rückmeldung, jeweils Desktop und 360 px.
