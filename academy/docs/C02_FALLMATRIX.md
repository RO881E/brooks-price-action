# C-02 – Fallmatrix und Review-Notiz

Sechs ungesehene Transferfälle (`src/content/barCases/c02.ts`), Status `draft`.
Sie liegen im Transferpool `transferCases` und erscheinen **nicht** im
gewöhnlichen Trainer (C-01), in der Fehlerübersicht, im Kurzlernen oder im
Rückblick. Alle Preisfolgen sind eigene, schematische OHLC-Werte auf einer
frei gewählten Skala – keine Buchabbildungen, keine echten Kurse.

## Matrix

| Fall-ID | Einheit | Lektionen | Beobachtbarer Lernpunkt | Beste Wahl je Punkt | Unterschied zu C-01 |
|---|---|---|---|---|---|
| `bar-case.c02.chapter-01.tight-pause-in-trend` | Kap. 1 | 01.03, 01.04 | Enge Pause nach starkem Lauf ist eine kleine Range; erst ihr Ausbruch entscheidet | Abwarten → Long | C-01 Kap. 1 zeigt einen Fehlausbruch an einer Range-Grenze; hier Fortsetzung nach enger Pause im Trend |
| `bar-case.c02.chapter-02.climax-is-not-reversal` | Kap. 2 | 02.08, 02.09 | Ein ungewöhnlich großer Bar ist Risiko- und Erschöpfungsinformation, keine Umkehr | Abwarten | C-01 Kap. 2 prüft Follow-through nach einem Ausbruch; hier ein überdehnter Bar in einem gleichmäßigen Anstieg |
| `bar-case.c02.chapter-03.breakout-test-holds` | Kap. 3 | 03.01, 03.05 | Test einer Zone, nicht eines Ticks; Bestätigung durch Zurückweisung | Long | C-01 Kap. 3 zeigt einen gescheiterten Tiefausbruch; hier ein gehaltener Test nach Ausbruch nach oben |
| `bar-case.c02.chapter-04.unfilled-order-cancelled` | Kap. 4 | 04.03, 04.21 | Nicht ausgelöste Order wird gestrichen; kein Gegensignal | Abwarten | C-01 Kap. 4 zeigt Signal und Entry mit Auslösung; hier bleibt die Auslösung aus |
| `bar-case.c02.chapter-05.counter-trend-needs-evidence` | Kap. 5 | 05.07, 05.15 | Langer Schatten gegen starken Trend ist Hinweis, kein Beleg; erst der gescheiterte Rücklauf ändert die Lage | Abwarten → Short | C-01 Kap. 5 zeigt eine Umkehr am Range-Rand; hier ein Abwärtstrend mit Gegenversuch |
| `bar-case.c02.chapter-10.second-short-attempt` | Kap. 10 | 10.01, 10.05 | Erster Versuch gegen starken Trend auslassen; zweiter Versuch am selben Hoch hat mehr Gewicht | Abwarten → Short | C-01 hat keinen Fall zu Kap. 10 (zweite Einstiege) |

Pro Fall sind **drei Optionen mit Rückmeldung**, **mindestens zwei Hinweise**
(relevante und irreführende) und die **Lernlinks auf veröffentlichte Lektionen
derselben Einheit** hinterlegt. Insgesamt neun Entscheidungspunkte: fünfmal
Abwarten, zweimal Long, zweimal Short als beste Wahl; drei Fälle haben zwei
Entscheidungspunkte.

## Quellenanker je Fall

Die Anker verweisen auf die vorhandenen Lehrstellen der Lektionen (ihre
`sourceAnchors`), nicht auf Buchtext:

- Kap. 1 · Ungewöhnlich enge Trading Range; Marktverhalten besitzt Trägheit
- Kap. 2 · Extrem große Bars als mögliche Erschöpfung oder Falle; Klimax als Übergang zu zweiseitigem Handel
- Kap. 3 · Test als Rückkehr zu einer relevanten Preiszone; Zurückweisung wichtiger als exakte Hochform; Erfolgreicher und gescheiterter Ausbruch als zentrale Entscheidung
- Kap. 4 · Streichen der Order bei ausbleibender Auslösung; Jeder Bar als Signalgrundlage für Long und Short
- Kap. 5 · Langer unterer Schatten mit kleinem Körper; Trendbruch vor größerer Gegen-Trend-These; Gegen-Trend-Signal unter höherer Beweislast
- Kap. 10 · Zweiter Umkehrversuch am Tief; Gleiches Prinzip an einem Hoch; Ersten Versuch auslassen und zweiten abwarten

## Automatisch geprüft

- Gültigkeit nach `BAR_CASE_CONTRACT.md` (`validateBarCases` über beide Pools, auch in `npm run check:content`).
- Fall-IDs eindeutig und disjunkt zu C-01; `barCases` enthält keinen C-02-Fall.
- Die beschriebenen Formationen stehen tatsächlich in den OHLC-Werten (z. B. enge Pause, überdehnter Bar, Test oberhalb der alten Kante, nicht überschrittenes Signal-Hoch, tieferes Hoch nach dem Hammer, zweiter Versuch mit Schluss unter dem früheren Tief).
- Keine C-01-Preisfolge wurde kopiert; Setup, Prompt und Hinweistexte nutzen kein Zukunftsvokabular.

## Für Roberts fachliche Sichtung

Nicht maschinell prüfbar und daher bitte redaktionell zu bewerten:

1. **Fachliche Einordnung je Option.** Besonders die Bewertungen mit `defensible`
   gegenüber `mistake` (z. B. Kap. 4: Short = `mistake`; Kap. 10: Long und Short
   beim ersten Versuch je `defensible`).
2. **Passung zur Lehrstelle.** Ob Begründung und Hinweise mit der jeweiligen
   Lektion übereinstimmen, ohne neue Marktlehre zu erfinden. Die Buchquelle war
   in dieser Umgebung nicht zugänglich: geprüft wurde gegen die vorhandenen
   Lektionstexte und deren Quellenanker, nicht gegen das Buch selbst.
3. **Eigenständigkeit der Formulierungen.** Alle Texte sind eigenformuliert.
4. **Schwierigkeit.** Ob die Fälle als „ungesehen“ gegenüber C-01 genug
   Transfer verlangen.

**Freigabe:** Nach deiner Rückmeldung ändert ein Commit im selben PR den Status
je Fall auf `approved` (oder Texte werden angepasst). Ohne Freigabe kein Merge
als öffentliche Transferfälle; F-17 baut erst danach darauf auf.
