# Stufe 2: Lernpfad als Wanderweg

Zweite Umsetzung aus [`SPIELERISCH_IDEEN.md`](SPIELERISCH_IDEEN.md) (Ideen 7, 11, 12, 14).
Nur Darstellung: Buchreihenfolge, Sperrlogik, Texte, XP und Lernstand bleiben unverändert.

## Was sich ändert

| Bereich | Änderung |
|---|---|
| Lernpfad | Jede Lektion ist eine **runde Station** auf einem geschwungenen Weg; die Karte mit Titel, Kurztext, Dauer und XP steht rechts daneben. Abgeschlossene Abschnitte des Weges sind durchgezogen blau, der Rest gepunktet. |
| Aktuelle Station | Die nächste bzw. begonnene Lektion leuchtet (Ring, farbige Karte, kurzes Pulsen) und hat den **Bullen** an der Karte. |
| Kapitel | Die Kapitelnummer sitzt in einer **Medaille mit Fortschrittsring** (Anteil abgeschlossener Lektionen). Ist das Kapitel fertig, wird sie golden mit Stern. Die Beschriftung („✓ Abgeschlossen“, „▶ Hier geht es weiter“ …) bleibt. |
| Icons | Navigation (Lernpfad, Buchmodus, Üben, Fortschritt, Gespeichert, Glossar, Einstellungen) und Stationen (Häkchen, Play, Schloss, Punkte) nutzen einen **einheitlichen Satz Linien-Icons** (`src/components/Icon.tsx`) statt Zeichen. |
| Lektionsbalken | Der Fortschrittsbalken hat **Schritt-Marken** je Schritt der Lektion. Wert und Beschriftung („Schritt 2 von 5“) bleiben. |

Die Kapitel-Medaillen sind bewusst schlicht (Nummer, Ring, Stern). Eigene Illustrationen je Thema
(Idee 12) folgen später, wenn die Bilder vorliegen; die Medaille ist der vorgesehene Platz dafür.

## Barrierefreiheit und Bewegung

- Der Zugang bleibt gleich: jede Station ist ein Button mit dem bisherigen Namen
  („Titel: Abgeschlossen / Jetzt lernen / Noch gesperrt …“); gesperrte Stationen sind deaktiviert.
- Icons und Bulle sind Dekoration (`aria-hidden` bzw. leeres `alt`); der Status steht als Text.
- Das Pulsen der aktuellen Station (dreimal) und das Einhüpfen des Bullen laufen nur ohne
  „Bewegung reduzieren“.
- `tests/learning-path.spec.ts`: Reihenfolge, Sperren, Tastatur, Medaille, Icons, Schritt-Marken,
  axe, kein Überlauf, reduzierte Bewegung (Desktop und 360 px).

## Bildschirmfotos

Vorher/Nachher in [`docs/design/s2`](design/s2): Lernpfad gesamt, aktuelle Station mit Bulle,
Kapitel-Medaille (fertig/aktuell), Desktop und 360 px.

## Bewusst noch nicht

- Idee 13 (immer sichtbarer, großer „Nächster Schritt“-Knopf): auf „Heute“, im Lernpfad
  (rechte Karte, mobil oben) und an der aktuellen Station vorhanden; ein zusätzlicher fester
  Knopf am Bildrand würde auf dem Handy Bedienelemente verdecken.
- Eigene Kapitelabzeichen als Bilder (Idee 12) und Kapitelabzeichen im Fortschritt.
