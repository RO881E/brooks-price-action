# Keine Buch- und Autorenverweise in der App

Für eine mögliche Veröffentlichung als App soll nichts in der Oberfläche oder in den Lektionstexten auf
den Autor oder die Titel der Quellbücher verweisen. Stand dieser Änderung:

- **Oberfläche:** Kurstitel „Price Action: Trends“, Zusatz „Teil 1 von 3“, „Pilot · Teil 1“, Bibliothek
  mit „Teil 1/2/3“, Willkommenstext, „Nach Thema üben“, Sortierung „Kapitelreihenfolge“,
  „Fortschritt je Kursabschnitt“, Abzeichen „Erster Kursabschnitt“.
- **Lektionstexte:** Autorennennungen („Brooks beschreibt …“) sind neutral formuliert („man“, „im Beispiel“,
  Passiv); „Buchfall“, „Buchchart“, „Buchbeispiel“, „Buchreihe“, „Buchquelle“, „im Buch“ und „Band 1–3“
  sind durch Beispiel-, Fall- und „Kursteil“-Formulierungen ersetzt; „Abbildung X.Y“ heißt jetzt „Fall X.Y“
  bzw. „Chartfall X.Y“. Englische Kapitelnamen in den Quellenzeilen („Signs of Strength“ …) sind deutsch.
- **IDs:** Kurs-, Einheiten- und Lektions-IDs heißen jetzt `price-action-trends.…` (vorher mit dem Namen
  des Quellwerks), Themen-IDs `topic.…`, Code-Bezeichner und Ordner neutral (`priceActionTrendsCourse`,
  `courses/price-action-trends`). Es gab noch keinen Lernstand, deshalb ohne Migration der alten IDs
  (alte Stände mit den früheren IDs würden bei der Umbenennung ihre Zuordnung verlieren).
- **Alte Einzeldatei-Website:** entfernt (samt PDFs, Import ihrer Fortschrittsschlüssel und Hinweisen darauf).
- **Bewusst unverändert:** die Bezeichnung „Buchmodus“ für den Lesemodus, die Kapitelstruktur und
  Entwicklerkommentare.
- **Prüfung:** Ein Test (`src/content/noBookReferences.test.ts`) sucht in allen sichtbaren Texten nach
  „Brooks“, „Buchfall“, „Abbildung X.Y“, „Buchreihe“ usw. und schlägt bei einem Rückfall an.
