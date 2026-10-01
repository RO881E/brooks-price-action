# Bibliothek: alle Themen der App

Die **Bibliothek** zeigt alle Themengebiete und ihre Kurse – heute 18 Gebiete mit 106 Kursen, von
Marktgrundlagen und Price Action über Volumen, Orderflow, Risiko und Psychologie bis zu Unternehmensbewertung,
Makroökonomie und Marktgeschichte. Sie besteht aus drei eigenen Seiten:

| Seite | Adresse | Inhalt |
| --- | --- | --- |
| Übersicht | `#/library` | „Deine Kurse“ (alle Kurse mit Inhalt, mit eigenem Stand) und alle Themengebiete als Kacheln |
| Themengebiet | `#/library/<gebiet-id>` | Beschreibung, passende Übungen und die Kurse des Gebiets |
| Kurs | `#/course/<kurs-id>` | Beschreibung, Unterthemen und – bei Kursen mit Inhalt – Start oder Wechsel und der Aufbau |

Erreichbar über „Bibliothek“ im Menü und über „Alle Themen ansehen“ im Kursblock der Seitenleiste (auch auf
dem Handy, über das Menü). Auf allen drei Seiten bleibt „Bibliothek“ in der Navigation markiert; Brotkrumen
(„Bibliothek / Volumen / VWAP“) führen zurück, ebenso der Zurück-Knopf des Browsers. Jede Seite hat ihre
eigene Adresse und lässt sich teilen, neu laden oder in einem neuen Tab öffnen.

## Was sichtbar ist

- **Übersicht:** Unter „Deine Kurse“ steht jeder Kurs mit Inhalt mit seinem Stand („Noch nicht begonnen“ oder
  „x % geschafft · y von z Lektionen“); der gewählte Kurs ist als „Aktiver Kurs“ markiert und hat
  „Weiterlernen“. Darunter alle Themengebiete als Kacheln mit Status („Aktiv“ oder „Geplant“), Anzahl der
  Kurse und kurzer Beschreibung – die ganze Kachel ist klickbar, der Link ist der Titel.
- **Themengebiet:** Kurskarten mit Titel (Link zur Kursseite), Teil-Angabe, Beschreibung und Status
  („Aktiver Kurs“, „Verfügbar“ oder „Geplant“).
- **Kursseite:** Unterthemen als Liste. Ein **Kurs mit Inhalt** zeigt seinen Stand und je nach Lage
  „Kurs starten“ (noch nichts gelernt), „Zu diesem Kurs wechseln“ (schon begonnen) oder – beim aktiven Kurs –
  „Weiterlernen“, dazu den Aufbau (Kursabschnitte, aufklappbar). Ein **geplanter Kurs** sagt klar, dass es
  noch keine Lektionen gibt: kein Start, kein Inhalt, keine Versprechen.
- Unbekannte Gebiete oder Kurse (z. B. ein veralteter Link) zeigen „… nicht gefunden“ mit Weg zur Bibliothek.
- Die Bibliotheksseiten werden erst beim Öffnen geladen (ein gemeinsamer Baustein, offline vorgeladen).

Was das Starten und Wechseln technisch bedeutet (Lernstand je Kurs, gemeinsame XP und Serie, Testkurs), steht in
[`DESIGN_MEHRERE_KURSE.md`](DESIGN_MEHRERE_KURSE.md).

## Neues Thema oder neuen Kurs eintragen

Einzige Liste: `librarySubjects` in `src/content/library.ts`. Daraus entsteht auch der
[Themenkatalog](THEMENKATALOG.md) (`npm run catalog`).

1. **Ankündigen:** Kurs mit `status: 'planned'` (Hilfsfunktion `planned(…)`) im passenden Themengebiet
   ergänzen – mit Titel, kurzer Beschreibung und mindestens einem Unterthema. Ein neues Themengebiet
   braucht zusätzlich eine Beschreibung und die passenden Übungsformen. Texte in eigenen Worten.
2. **Katalog erneuern:** `npm run catalog` schreibt `docs/THEMENKATALOG.md` neu.
3. **Freischalten:** erst wenn der Kurs Lektionen hat und im Kursregister (`src/content/registry.ts`)
   eingetragen ist, den Eintrag auf `status: 'available'` setzen – siehe
   [`DESIGN_MEHRERE_KURSE.md`](DESIGN_MEHRERE_KURSE.md).
4. `npm test` prüft die Liste (`library.test.ts`, `registry.test.ts`): eindeutige IDs, Texte und Unterthemen
   vorhanden, „verfügbar“ genau für registrierte Kurse, der Standardkurs ist verfügbar.
   `build/catalog.test.ts` schlägt an, wenn der Katalog nicht mehr zur Liste passt.

## Tests und Bilder

`src/content/library.test.ts` (Liste), `build/catalog.test.ts` (Katalog aktuell), `tests/library.spec.ts`
(E2E: Kursblock → Übersicht, Gebiet → geplanter Kurs mit Unterthemen und ohne Start, Brotkrumen und Zurück,
aktiver Kurs mit „Weiterlernen“, unbekannte Adressen, Markierung in der Navigation, axe und 360 px auf allen
drei Seiten); `themes` und `quality` prüfen Übersicht, Gebiet und Kursseite zusätzlich in Dunkel/Bunt, bei
200 % Zoom, mit reduzierter Bewegung und auf Zielgrößen; `pwa` prüft die Seiten offline.
Screenshots: `docs/design/library/`.
