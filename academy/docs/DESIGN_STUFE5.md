# Stufe 5: Farbschema (Dunkel) und Thema „Bunt“

Umsetzung von S5b und S5c aus [`SPIELERISCH_STUFE4_5_PLAN.md`](SPIELERISCH_STUFE4_5_PLAN.md). Nur Darstellung:
Inhalte, Lernstand, XP und Sicherung bleiben unverändert. Die Wahl liegt wie Ton und Vibration im
Geräteschlüssel `wqt-academy-ui-v1` (nicht im Lernstand, nicht im Backup).

## S5b – Dunkles Thema

**Auswahl:** Einstellungen → „Farbschema“: *Hell* (Standard), *Dunkel*, *Bunt*, *Wie im System eingestellt*
(folgt dem Systemwunsch, auch während die App läuft). Die Wahl gilt sofort und bleibt nach dem Neuladen.
Ein kleines Skript in `index.html` setzt `data-theme` vor dem ersten Zeichnen – kein Aufblitzen.

### Wie die Farben umgestellt wurden

Bestandsaufnahme: rund 300 feste Farbwerte in 8000 Zeilen CSS (Flächen, Text, Ränder, Chart-Striche).
Statt Stelle für Stelle umzuschreiben, ist **jede Farbe ein Token** `--c-<hex>` (`src/theme-colors.json`):

- **hell** = der bisherige Wert. Das helle Thema ist dadurch unverändert (Bildvergleich vorher/nachher:
  nur Rundungsrauschen von höchstens zwei Stufen an einzelnen Pixeln).
- **dunkel** = abgeleitet (`build/theme.mjs`): Helligkeit gespiegelt, Farbtöne bleiben, neutrale Töne
  leicht bläulich; Mitteltöne (Text- und Akzentfarben) etwas heller, damit ihr Kontrast auf dunklem Grund
  erhalten bleibt. Einzelne Werte lassen sich in `theme-colors.json` (`dark`) überschreiben.
- Die **Seitenleiste** ist in beiden Themen dunkel und behält die Originalfarben
  (samt der abgeleiteten Variablen wie `--navy-900`).
- Erzeugt wird `src/theme.css` mit `npm run theme`. Ein Unit-Test (`build/themeTokens.test.ts`) prüft, dass
  die Datei aktuell ist, dass `styles.css` **keine festen hellen Farben mehr** enthält (neue Farben müssen als
  Token eingetragen werden) und dass die dunklen Textfarben genug Kontrast auf dunklem Grund haben.

### Prüfung

- `tests/themes.spec.ts` (Desktop und 360 px; gleiche Prüfungen für Dunkel und Bunt): Wahl und Reload, „Wie im System“ inkl. Wechsel, kein
  Aufblitzen, axe ohne Befund für alle Kernansichten (Lernpfad, Üben, Kurzlernen, Trainer,
  Rückblick, Fortschritt, Gespeichert, Glossar, Einstellungen) und wichtige Zustände (Antwort-Rückmeldung,
  Trainer-Auflösung, Bar-Album, Begriffe-Memory, Blitzrunde, Hilfe-Dialog), kein Überlauf.
- Bilder: [`docs/design/s5b`](design/s5b).

### Bekannte Grenzen

- Der Bulle „Bo“ behält seine Farben (helle Hörner); auf dunklem Grund gut lesbar, aber nicht eigens
  umgemalt. Bilder aus ChatGPT sollten auf hellem **und** dunklem Grund geprüft werden.
- Die Farbableitung ist automatisch; einzelne Stellen (z. B. Verläufe) können mit Geschmack nachjustiert
  werden – über `dark` in `theme-colors.json`.

## S5c – Thema „Bunt“

Gleiche helle Struktur, aber **gesättigtere Akzentfarben**: kräftigeres Blau, Türkis, Violett, Orange und Gold
für Lesen, Üben, Wiederholen, Trainieren und Fortschritt, satter getönte Flächen und ein leicht warmer
Grund. Umgesetzt mit denselben Tokens wie das dunkle Thema (`bunt` in `src/theme-colors.json` überschreibt nur
die Akzentwerte; `npm run theme` erzeugt `:root[data-theme='bunt']`). Die Seitenleiste bleibt dunkel.

- **Kontrast:** Die Akzent-Textfarben („Ink“) sind so gewählt, dass sie auf Weiß, auf der eigenen Fläche und auf dem
  Grund mindestens 4,5 : 1 erreichen (Unit-Test `build/themeTokens.test.ts`). axe ist für alle Kernansichten und
  wichtigen Zustände ohne Befund (`tests/themes.spec.ts`).
- Farbe bleibt Beiwerk: Status und Bedeutung stehen weiterhin als Text und Symbol; keine Gewinn-/Verlustfarben.
- Bilder: [`docs/design/s5c`](design/s5c).
