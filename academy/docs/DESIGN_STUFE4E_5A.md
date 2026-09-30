# Stufe 4e und 5a: „Fast geschafft“, Vibration und Töne

Umsetzung aus [`SPIELERISCH_STUFE4_5_PLAN.md`](SPIELERISCH_STUFE4_5_PLAN.md) (S4e, S5-0, S5a) mit den
Standardentscheidungen des Plans. Nur Rückmeldung und Darstellung: Lernstand, XP, Serie und
Fälligkeiten bleiben unverändert.

## S4e – „Fast geschafft“-Runde

- Die Karte **Fehler trainieren** unter „Üben“ bekommt eine ermutigende Zeile mit dem Bullen
  („Fast geschafft – jede dieser Fragen ist eine neue Chance.“). Der Knopf heißt weiter „Fehler
  trainieren“ (gleiche Bedienung wie bisher).
- Am Ende jeder Runde zeigt der Bulle einen kurzen Satz: bei fehlerfreier Runde „Fehlerfrei – das
  saß!“, in der Fehler-Runde „Das saß! Diese Fehler hast du jetzt richtig beantwortet.“; bleiben in
  der Fehler-Runde Fragen offen, „Fast geschafft – die übrigen Fragen bleiben einfach für die nächste
  Runde.“ Die vorhandene Fehlerlogik (F-16) ist unverändert; nichts wird zusätzlich gespeichert.

## S5-0 – Geräteeinstellungen

- Neuer, **eigener** lokaler Schlüssel `wqt-academy-ui-v1` (`src/features/uiPreferences.ts`) mit
  `{ sound, haptics }`. Er liegt **nicht** im Lernstand und **nicht** im Backup (geräteabhängige
  Kosmetik); `wqt-academy-progress-v1` und die Altschlüssel bleiben unberührt.
- Standard: **Ton aus, Vibration an**. Fehlender, defekter oder gesperrter Speicher führt zu diesen
  Standardwerten; unbekannte Werte werden verworfen.
- Einstellungen → „Rückmeldung: Vibration und Töne“ mit Wirkungsnotiz je Option (wie in P11).

## S5a – Vibration und Töne

| Auslöser | Vibration | Ton |
|---|---|---|
| richtige Antwort (Lektion, Wiederholung) | kurz (18 ms) | zwei leise Töne |
| Lektion bzw. Runde abgeschlossen | 30-40-30 ms | drei leise Töne |
| Meilenstein erreicht | 40-60-40-60-80 ms | vier leise Töne |
| **falsche Antwort** | **nichts** | **nichts** |

- **Nur nach eigener Aktion, nie beim Laden:** Ein Signal kommt nur beim *Übergang* auf „richtig“
  bzw. beim Erscheinen einer Ansicht, die eine Aktion öffnet – nicht beim Neuladen einer schon
  beantworteten Frage. Gleiche Signale innerhalb von 400 ms zählen als eines.
- **Vibration** nutzt `navigator.vibrate`; wo es fehlt (z. B. iPhone-Safari), passiert nichts. Die
  Einstellung erklärt das.
- **Töne** entstehen selbst per Web Audio (keine Audiodateien, keine Lizenzfragen), leise, nur wenn
  „Töne“ eingeschaltet ist; ohne Einstellung wird nie ein Audiokontext angelegt.
- **Nie der einzige Träger:** Texte und Symbole bleiben unverändert.

## Tests

`uiPreferences.test.ts`, `feedbackCues.test.tsx` (Unit: Standardwerte, defekter Speicher,
Übergang statt Laden, Entprellung, Ton/Vibration aus) und `tests/feedback-cues.spec.ts` (E2E mit
Fake-`vibrate` und Fake-`AudioContext`: Standard, falsche Antwort still, Reload still, Ton an, Tastatur,
axe, Runde bis „Das saß!“). Bilder: [`docs/design/s5a`](design/s5a).
