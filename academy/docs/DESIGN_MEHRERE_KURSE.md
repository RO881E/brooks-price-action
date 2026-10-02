# Mehrere Kurse parallel lernen

Jeder Kurs mit Inhalt lässt sich in der [Bibliothek](DESIGN_BIBLIOTHEK.md) starten und jederzeit wechseln.
Heute hat nur „Price Action: Trends“ Inhalt; die Technik ist trotzdem vollständig gebaut und wird in den
Browser-Tests mit einem kleinen **Testkurs** geprüft, den es nur dort gibt.

## Was der gewählte Kurs bestimmt

| Bereich | gilt für |
| --- | --- |
| Lernpfad, „Weiterlernen“, Kurz lernen, Heute-Karte | den gewählten Kurs |
| Üben: Wiederholung, Fehlerübersicht, Nach Thema üben, Spiele, Aufgaben, Chart trainieren, Transferprüfung | den gewählten Kurs |
| Fortschritt: Lektionen, Kapitel, fällige Fragen, Album, Missionen | den gewählten Kurs |
| Glossar, Suche, Gespeichert (Lesezeichen und Notizen) | den gewählten Kurs |
| **XP, Lerntage/Serie, Tagesziel, Meilensteine, Einstellungen** | **alle Kurse gemeinsam** |

- **Starten oder wechseln** ändert nur die Wahl. Der Lernstand aller Kurse bleibt, wie er ist; beim Zurückwechseln
  ist alles wieder da. Nach dem Wechsel öffnet der Lernpfad mit dem Hinweis „Du lernst jetzt „…““.
- Eine **laufende Wiederholungsrunde** gehört zum bisherigen Kurs und endet beim Wechsel – wie mit „Runde
  beenden“ (beantwortete Fragen zählen als Lernaktivität).
- **Links bleiben gültig:** Lektionen, Leser und Trainerfälle werden in ihrem eigenen Kurs geprüft (Freischaltung,
  gültige Schritte). Ein Link auf eine Lektion eines anderen Kurses öffnet sie also, ohne den gewählten Kurs zu
  ändern; „Nächste Lektion“ im Abschluss kommt aus demselben Kurs.
- Ein Kurs **ohne** Glossar, Trainerfälle, Themenkarte oder Aufgaben zeigt diese Bereiche nicht (statt leerer
  Kästen); das Glossar sagt „Noch keine Begriffe“.

## Daten

- **Kursregister** `src/content/registry.ts`: alle Kurse mit Inhalt (Kursinfo, Einheiten mit Ladefunktion je
  Kapitel, optional Glossar). Der erste ist der **Standardkurs** (`DEFAULT_COURSE_ID`). Die Gliederungen aller
  Kurse erzeugt `build/courseOutlinePlugin.ts` beim Build aus `src/content/allCourses.ts`; `src/content/catalog.ts`
  stellt sie bereit (`courseOutlines`, `courseOutlineFor`, `courseOfLesson`, `courseOfUnit`) und lädt Kapitel aller
  Kurse über einen gemeinsamen Katalog.
- **IDs sind kursübergreifend eindeutig:** Einheiten und Lektionen tragen die Kurs-ID als Präfix
  (`<kurs>.<einheit>.<lektion>`), Schritt-IDs sind ebenfalls eindeutig (Test `registry.test.ts`). Deshalb trennt
  sich der Lernstand ohne eigene Speicher je Kurs: Abschlüsse, Antworten, Wiederholungsplan und
  Trainerrunden hängen an diesen IDs. Was zu einem Kurs gehört, ergibt sich daraus: Fälle, Aufgaben und
  Albumkarten über ihre Einheit bzw. Lektion, Themen über ihre Lehrstellen, Lesezeichen und Notizen über das
  Präfix der Lektions-ID (Einträge ohne bekannten Kurs bleiben im angezeigten Kurs als „Nicht mehr verfügbar“
  sichtbar).
- **Datenmodell v16:** neues Feld `activeCourseId` (`null` = noch keine Wahl, dann gilt der Standardkurs).
  Ältere Stände werden mit `null` migriert. Eine unbekannte, aber gültige Kurs-ID (etwa aus einer späteren
  Version) bleibt gespeichert; die App zeigt dann den Standardkurs. In der **Sicherung** ist das Feld seit v16
  Pflicht (ältere Sicherungen bleiben gültig); beim Zusammenführen bleibt die lokale Wahl, beim Ersetzen gilt die
  der Sicherung.

## Testkurs und Modus `e2e`

`src/content/courses/test-course/` enthält einen Kurs mit einem Kapitel und zwei kurzen Lektionen plus ein
Testgebiet für die Bibliothek. Er ist nur im Vite-Modus `e2e` registriert – die Browser-Tests starten den
Entwicklungsserver mit `npm run dev -- --mode e2e` (siehe `playwright.config.ts`). Im normalen Build und in der
veröffentlichten App fehlt er; `tests/pwa.spec.ts` prüft am echten Produktions-Build, dass keine Datei ihn enthält.
Seine Lektionen sind deshalb bewusst statisch eingebunden (ein dynamischer Import erzeugte sonst auch im normalen
Build einen eigenen Baustein).

Zum Ausprobieren: `npm run dev -- --mode e2e`, dann `#/course/test-course` öffnen.

## Neuen Kurs mit Inhalt anlegen

1. Lektionen unter `src/content/courses/<kurs-id>/` anlegen; Einheiten- und Lektions-IDs mit dem Präfix
   `<kurs-id>.`, Schritt-IDs eindeutig.
2. Kursinfo und Einheiten (mit `load`) als `CourseDefinition` in `baseCourseDefinitions` in
   `src/content/registry.ts` eintragen, optional mit eigenem Glossar.
3. Den Kurs in `src/content/library.ts` auf `status: 'available'` setzen und `npm run catalog` ausführen.
4. `npm test` (Register, Bibliothek, Inhalte), `npm run check:content` und die Browser-Tests laufen lassen.

## Tests

`src/content/registry.test.ts` (eindeutige IDs mit Präfix, Testkurs nur im Modus `e2e`, Gliederungen passend,
Bibliothek mit Testgebiet gültig, Strukturprüfung des Testkurses, Glossar je Kurs),
`src/features/multiCourse.test.ts` (Fälle, Transfer, Themen, Aufgaben, Album, Memory, Fehler und Gespeichertes
je Kurs; Routen und Prüfung im eigenen Kurs), `progress.test.ts`/`backup.test.ts`/`legacyStates.test.ts`
(v16, Migration, Sicherung), `tests/multi-course.spec.ts` (Starten, eigener Lernpfad und Fortschritt, gemeinsame
XP, Neuladen, Zurückwechseln, Üben/Glossar/Gespeichert je Kurs, Links in andere Kurse, unbekannter Kurs, Ende
einer laufenden Runde).
