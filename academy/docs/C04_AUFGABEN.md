# C-04: Aufgabenpaket für „Finde den Bar“ und „Ordne die Schritte“ – Prüfliste

Stand: **Entwurf (`draft`)**. Die Aufgaben sind in der App **nicht sichtbar**, bis du sie freigibst.

Alle Bars sind eigenständig konstruierte, relative Zahlenfolgen (keine Buchabbildungen, keine echten Kurse). Die Aufgabentexte sind eigene Formulierungen. Jede Aufgabe stützt sich auf bereits vermittelte Lektionen und ist erst offen, wenn **alle** genannten Lektionen abgeschlossen sind.

## So prüfst du

Für jede Signal-Bar-Aufgabe: **Ist der Zielbar nur mit den sichtbaren Bars begründbar, und stimmt die Erklärung mit der Lektion überein?** Für jede Reihenfolge-Aufgabe: **Folgt die Reihenfolge dem Ablauf der genannten Lektion, und ist sie eindeutig?**

Technisch geprüft ist bereits (Unit-Tests): Zielbar erfüllt die genannte Regel und ist der einzige (bzw. erste) Treffer, Lektionen sind veröffentlicht und gehören zur Einheit, IDs eindeutig, Schritte vollständig. Die **fachliche** Richtigkeit bleibt deine Entscheidung.

## Freigabe

Sag mir Bescheid (ggf. mit Streichungen/Änderungen je Aufgabe). Freigegeben wird, indem der Status in den beiden Dateien `src/content/practiceTasks/c04Signal.ts` und `c04Order.ts` von `draft` auf `approved` gesetzt wird; danach laufen die zusätzlichen E2E-Tests in `tests/practice-tasks.spec.ts` automatisch mit.

## Teil 1: Finde den Bar (8 Aufgaben)

| # | Titel | Lektionen | Zielbar | Regel | Aufgabe |
|---|---|---|---|---|---|
| 1 | Der kontrollierte Trendbar | chapter-02.lesson-01, chapter-02.lesson-09 | Bar 5 | `trend-bar-up` | Die meisten Bars überlappen stark. Tippe auf den bullischen Trendbar mit klarem Körper, Open nahe dem Tief und Schluss nahe dem Hoch. |
| 2 | Der bärische Trendbar | chapter-02.lesson-01, chapter-02.lesson-09 | Bar 5 | `trend-bar-down` | Nach mehreren ruhigen Bars fällt der Kurs deutlich. Tippe auf den bärischen Trendbar mit klarem Körper und Schluss nahe dem Tief. |
| 3 | Der Bar ohne Schlusskontrolle | chapter-02.lesson-01, chapter-02.lesson-03 | Bar 5 | `doji` | Ein Aufwärtstrend mit kräftigen Bars. Tippe auf den Bar, der praktisch als Doji funktioniert: winziger Körper im Verhältnis zur Gesamthöhe. |
| 4 | Der Fehlausbruch | chapter-01.lesson-07 | Bar 6 | `failed-breakout` | Der Markt pendelt in einer Range. Tippe auf den Bar, der über die bisherigen Hochs ausbricht, aber wieder unter diese Grenze zurückschließt. |
| 5 | Der erste Schluss über der engen Zone | chapter-01.lesson-04 | Bar 7 | `breakout-close` | Der Markt verharrt in einer engen Zone. Tippe auf den ersten Bar, der deutlich über dem Hoch der Zone schließt. |
| 6 | Der Gegen-Spike im Aufwärtstrend | chapter-02.lesson-06 | Bar 5 | `counter-spike` | Ein Bullenmarkt steigt bar für bar. Tippe auf den kräftigen bärischen Bar, der als Gegen-Spike Anschluss braucht. |
| 7 | Der ungewöhnlich große Bar | chapter-02.lesson-08, chapter-02.lesson-09 | Bar 6 | `climax-bar` | Der Markt steigt gleichmäßig in kleinen Schritten. Tippe auf den Bar, dessen Körper im Vergleich zu den Nachbarn ungewöhnlich groß ist. |
| 8 | Die erste Pause nach dem Klimax | chapter-02.lesson-08 | Bar 5 | `first-pause` | Mehrere kräftige Aufwärtsbars folgen aufeinander. Tippe auf den ersten Bar, der diese einseitige Phase unterbricht. |

Regeln (mechanisch geprüft): `trend-bar-up/down` = Körper ≥ 2× Median, ≥ 60 % der Spanne, Schluss im äußeren Fünftel; `doji` = Körper ≤ 15 % der Spanne bei mindestens medianer Spanne; `failed-breakout` = Hoch über allen früheren Hochs, Schluss nicht darüber; `breakout-close` = erster Schluss über allen früheren Hochs; `counter-spike` = bärischer Bar mit ≥ 1,5× Median-Körper; `climax-bar` = Körper ≥ 2,5× Median und größte Spanne; `first-pause` = erster Nicht-Trendbar nach mindestens drei Aufwärts-Trendbars.

## Teil 2: Ordne die Schritte (8 Aufgaben)

### 1. Einen einzelnen Bar lesen
Lektionen: chapter-02.lesson-01

1. Fragen: Hat eine Seite den Preis vom Open bis zum Close durchgesetzt – oder wurde die Bewegung ausgeglichen?
2. Den Körper mit den Nachbarbars vergleichen.
3. Tails und die Position des Schlusses als Zusatzzeichen prüfen.
4. Erst danach einen Namen für den Bar wählen.

### 2. Einen Gegen-Spike einordnen
Lektionen: chapter-02.lesson-06

1. Den kräftigen Gegen-Bar bemerken, ohne sofort auf seine Größe zu reagieren.
2. Den übergeordneten Trend als Ausgangshypothese festhalten.
3. Den nächsten Bar prüfen: Schafft die Gegenseite Anschluss?
4. Die Einordnung anpassen: ohne Anschluss eher Flag im alten Trend, mit Anschluss gewinnt die Umkehr an Gewicht.

### 3. Vom Klimax zur möglichen Umkehr
Lektionen: chapter-02.lesson-08

1. Die schnelle einseitige Bewegung (Klimax) erkennen.
2. Die erste Pause abwarten: Doji, Inside-Bar, Gegenbar oder auffälliger Tail.
3. Prüfen, ob ein überzeugender Breakout der Gegenseite folgt.
4. Nur mit diesem Gegen-Breakout eine mögliche klimaktische Umkehr annehmen.

### 4. Einen Ausbruch prüfen
Lektionen: chapter-01.lesson-07

1. Das Referenzniveau festhalten, zum Beispiel das Vortageshoch.
2. Den Ausbruch darüber als Versuch erkennen – noch nicht als Erfolg.
3. Prüfen, ob Preise außerhalb der Grenze angenommen werden und Anschluss folgt.
4. Kehrt der Markt schnell in den alten Bereich zurück, die Breakout-Hypothese schwächen.

### 5. Die Trendwiederaufnahme
Lektionen: chapter-01.lesson-08

1. Starker Trend direkt nach der Eröffnung (Impuls).
2. Mehrstündige enge Range (Kompression).
3. Ein kleiner Ausbruch gegen den frühen Trend scheitert sofort (Falle).
4. Der Markt nimmt die frühe Richtung mit Anschluss wieder auf.

### 6. Die High-2-Zählung
Lektionen: chapter-01.lesson-06

1. Eine Abwärtskorrektur beginnt (erstes Bein).
2. Ein Bar handelt über dem Hoch seines Vorgängerbars: High 1.
3. High 1 scheitert, es folgt ein zweites Abwärtsbein.
4. Ein erneuter Bruch über ein Vorgängerhoch ist High 2.

### 7. Vom Signal-Bar zum Low-2-Entry
Lektionen: chapter-01.lesson-06

1. Bärenkontext: eine Aufwärtskorrektur beginnt (erstes Bein).
2. Das erste Bein scheitert, ein zweites Aufwärtsbein entsteht.
3. Ein bearischer Signal-Bar bereitet das Setup vor.
4. Der folgende Bruch nach unten erzeugt den Entry-Bar.

### 8. Die Qualität eines Trendbars prüfen
Lektionen: chapter-02.lesson-09

1. Den Körper mit den letzten fünf bis zehn Bars vergleichen.
2. Open, Close und Tails prüfen.
3. Die Position im Trend beachten: Ein ungewöhnlich großer Bar spät im Trend warnt vor Erschöpfung.
4. Auf gute Folgebars als Bestätigung warten.
