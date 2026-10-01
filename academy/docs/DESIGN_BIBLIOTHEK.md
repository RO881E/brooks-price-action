# Bibliothek: alle Themen der App

Die **Bibliothek** (`#/library`) listet alle Themengebiete und ihre Kurse – heute 18 Gebiete mit 106 Kursen,
von Marktgrundlagen und Price Action über Volumen, Orderflow, Risiko und Psychologie bis zu
Unternehmensbewertung, Makroökonomie und Marktgeschichte. Erreichbar über den Eintrag „Bibliothek“ im Menü
und über „Alle Themen ansehen“ im Kursblock der Seitenleiste (auch auf dem Handy, über das Menü).

## Was sichtbar ist

- **Aufklappbare Themengebiete** (wie die Kapitel im Lernpfad): Titel, Status („Aktiv“ oder „Geplant“),
  Anzahl der Kurse und eine kurze Beschreibung. Offen ist zu Beginn nur das Gebiet mit Inhalt
  (Price Action); „Alle öffnen“ und „Alle schließen“ stehen darüber. Welche Gebiete offen sind, merkt sich
  der Browser-Tab (`sessionStorage`, Schlüssel `wqt-academy-library-open`) – nicht Teil des Lernstands und
  nicht in der Sicherung.
- **Kurskarten** mit Titel, kurzer Beschreibung und ausklappbaren **Unterthemen** (mögliche Kapitel).
- **Price Action: Trends** (Teil 1 von 3) ist aktiv – mit Fortschritt und Sprung in den Lernpfad. Alle
  anderen Kurse stehen als „Geplant“ da: **kein Link, kein Inhalt**; sie versprechen nichts außer dem Platz
  in der Navigation.
- Die Bibliothek wird erst beim Öffnen geladen (eigener Baustein, offline vorgeladen).

## Neues Thema oder neuen Kurs eintragen

Einzige Liste: `librarySubjects` in `src/content/library.ts`. Daraus entsteht auch der
[Themenkatalog](THEMENKATALOG.md) (`npm run catalog`).

1. **Ankündigen:** Kurs mit `status: 'planned'` (Hilfsfunktion `planned(…)`) im passenden Themengebiet
   ergänzen – mit Titel, kurzer Beschreibung und mindestens einem Unterthema. Ein neues Themengebiet
   braucht zusätzlich eine Beschreibung und die passenden Übungsformen. Texte in eigenen Worten.
2. **Katalog erneuern:** `npm run catalog` schreibt `docs/THEMENKATALOG.md` neu.
3. **Freischalten:** erst wenn der Kurs Inhalt hat und in `src/content/units.ts` als Kurs registriert ist,
   den Eintrag auf `status: 'available'` setzen.
4. `npm test` prüft die Liste (`library.test.ts`): eindeutige IDs, Texte und Unterthemen vorhanden,
   „verfügbar“ nur für registrierte Kurse, „geplant“ nur für nicht registrierte, der aktive Kurs ist
   verfügbar. `build/catalog.test.ts` schlägt an, wenn der Katalog nicht mehr zur Liste passt.

## Grenzen (bewusst noch nicht gebaut)

Die App arbeitet weiterhin mit **einem aktiven Kurs** (`ACTIVE_COURSE_ID`, heute `price-action-trends`):
Lernpfad, Buchmodus, Üben, Fortschritt, Glossar und Suche beziehen sich auf ihn, der Lernstand liegt in
einem Speicher (`wqt-academy-progress-v1`, unverändert). Ein zweiter **verfügbarer** Kurs bräuchte ein
eigenes Arbeitspaket: Kurswahl in Routen und Seitenleiste, Lernstand je Kurs (Datenmodell, Sicherung,
Migration), Glossar und Suche je Kurs, Lernpfad-Einstieg je Kurs. Bis dahin ist die Bibliothek die
Übersicht und der Platz, an dem neue Themen sichtbar werden.

Tests: `src/content/library.test.ts` (Liste), `build/catalog.test.ts` (Katalog aktuell),
`tests/library.spec.ts` (E2E: Auf- und Zuklappen per Klick und Tastatur, Zustand im Tab, alle Karten,
axe und 360 px zugeklappt und ganz geöffnet); `themes` und `quality` prüfen die Ansicht zusätzlich in
Dunkel/Bunt, Zielgrößen und Bewegung. Screenshots: `docs/design/library/`.
