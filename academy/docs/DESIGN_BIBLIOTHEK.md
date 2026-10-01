# Bibliothek: Navigation für weitere Themen

Die App kennt jetzt mehr als „die drei Brooks-Bücher“: Eine **Bibliothek** (`#/library`) listet
Themengebiete und ihre Kurse. Erreichbar über den Eintrag „Bibliothek“ im Menü und über „Alle Themen
ansehen“ im Kursblock der Seitenleiste (auch auf dem Handy, über das Menü).

## Was sichtbar ist

- **Price Action** mit den drei Brooks-Büchern: Buch 1 ist aktiv (mit Fortschritt und Sprung in den
  Lernpfad), Buch 2 und 3 stehen als „Geplant · noch ohne Inhalt“ da.
- **Volumen**, **Orderflow**, **Unternehmensbewertung** als „Geplant“-Karten.
- Geplante Einträge haben **keinen Link und keinen Inhalt**; sie versprechen nichts außer dem Platz in
  der Navigation.

## Neues Thema oder neuen Kurs eintragen

Einzige Liste: `librarySubjects` in `src/content/library.ts`.

1. **Ankündigen:** Eintrag mit `status: 'planned'` (Kurs) bzw. leerer `courses`-Liste (Thema) ergänzen.
   Titel und eine kurze Beschreibung genügen; Texte in eigenen Worten.
2. **Freischalten:** erst wenn der Kurs Inhalt hat und in `src/content/units.ts` als Kurs registriert ist,
   den Eintrag auf `status: 'available'` setzen.
3. `npm test` prüft die Liste (`library.test.ts`): eindeutige IDs, Texte vorhanden, „verfügbar“ nur für
   registrierte Kurse, „geplant“ nur für nicht registrierte, der aktive Kurs ist verfügbar.

## Grenzen (bewusst noch nicht gebaut)

Die App arbeitet weiterhin mit **einem aktiven Kurs** (`ACTIVE_COURSE_ID`, heute `brooks-trends`):
Lernpfad, Buchmodus, Üben, Fortschritt, Glossar und Suche beziehen sich auf ihn, der Lernstand liegt in
einem Speicher (`wqt-academy-progress-v1`, unverändert). Ein zweiter **verfügbarer** Kurs bräuchte ein
eigenes Arbeitspaket: Kurswahl in Routen und Seitenleiste, Lernstand je Kurs (Datenmodell, Sicherung,
Migration), Glossar und Suche je Kurs, Lernpfad-Einstieg je Kurs. Bis dahin ist die Bibliothek die
Übersicht und der Platz, an dem neue Themen sichtbar werden.

Tests: `src/content/library.test.ts` (Liste), `tests/library.spec.ts` (E2E inkl. axe, 360 px), `themes`
und `quality` prüfen die Ansicht zusätzlich in Dunkel/Bunt, Zielgrößen und Bewegung.
Screenshots: `docs/design/library/`.
