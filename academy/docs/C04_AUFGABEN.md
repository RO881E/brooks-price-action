# C-04: Aufgabenpaket für „Finde den Bar“ und „Ordne die Schritte“ – Prüfliste

Stand: **Teil 1 (Kapitel 1–2, 16 Aufgaben) freigegeben (`approved`)** durch Robert – sichtbar, sobald die zugehörigen Lektionen abgeschlossen sind. **Teil 2 (Kapitel 3–10, 16 Aufgaben) ist Entwurf (`draft`)** und in der App erst nach deiner Freigabe sichtbar.

Alle Bars sind eigenständig konstruierte, relative Zahlenfolgen (keine Buchabbildungen, keine echten Kurse). Die Aufgabentexte sind eigene Formulierungen. Jede Aufgabe stützt sich auf bereits vermittelte Lektionen und ist erst offen, wenn **alle** genannten Lektionen abgeschlossen sind.

## So prüfst du

Für jede Signal-Bar-Aufgabe: **Ist der Zielbar nur mit den sichtbaren Bars begründbar, und stimmt die Erklärung mit der Lektion überein?** Für jede Reihenfolge-Aufgabe: **Folgt die Reihenfolge dem Ablauf der genannten Lektion, und ist sie eindeutig?**

Technisch geprüft ist bereits (Unit-Tests): Zielbar erfüllt die genannte Regel und ist der einzige (bzw. erste) Treffer, Lektionen sind veröffentlicht und gehören zur Einheit, IDs eindeutig, Schritte vollständig. Die **fachliche** Richtigkeit bleibt deine Entscheidung.

## Freigabe

Sag mir Bescheid (ggf. mit Streichungen/Änderungen je Aufgabe). Die Freigabe erfolgte, indem der Status in `src/content/practiceTasks/c04Signal.ts` und `c04Order.ts` auf `approved` gesetzt wurde; seitdem laufen auch die E2E-Tests in `tests/practice-tasks.spec.ts`.

## Teil 1 (freigegeben): Finde den Bar (8 Aufgaben)

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

## Teil 1 (freigegeben): Ordne die Schritte (8 Aufgaben)

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

---

# Teil 2 (Kapitel 3–10) – Entwurf, wartet auf Freigabe

Freigabe: Status in `src/content/practiceTasks/c04SignalPart2.ts` und `c04OrderPart2.ts` von `draft` auf `approved` setzen (oder mir Bescheid geben, ggf. mit Streichungen).

Zusätzliche Regeln (mechanisch geprüft): `failed-breakdown` = Tief unter allen früheren Tiefs, Schluss nicht darunter; `ii-first` = erster Inside-Bar, auf den direkt ein weiterer Inside-Bar folgt; `bull-reversal-bar` = bullisch, Tief unter allen früheren Tiefs, Schluss in den oberen 30 % der Spanne und über dem Vorschluss, oberer Schatten ≤ 20 %, unterer Schatten ≥ 30 %; `shaved-top` = bullischer Bar mit Schluss am Hoch (≤ 2 % der Spanne); `outside-bar` = höheres Hoch und tieferes Tief als der Vorbar; `weak-bear-close` = bärisch, neues Tief, Schluss ≥ 35 % der Spanne über dem Tief; `second-test` = erster bullischer Bar, der nach mindestens einem Bar Abstand das tiefste bisherige Tief erneut anläuft (innerhalb 25 % der mittleren Spanne) und hält; `failed-breakout` wie in Teil 1.

## Finde den Bar (8 Aufgaben)

| # | Titel | Lektionen | Zielbar | Regel | Aufgabe |
|---|---|---|---|---|---|
| 1 | Der gescheiterte Tiefausbruch | chapter-03.lesson-09 | Bar 5 | `failed-breakdown` | Der Markt fällt Bar für Bar auf neue Tiefs. Tippe auf den Bar, der die bisherigen Tiefs unterschreitet, aber wieder darüber schließt. |
| 2 | Der Beginn des ii | chapter-04.lesson-11 | Bar 4 | `ii-first` | Die Kursspanne verengt sich. Tippe auf den ersten Inside-Bar, auf den direkt ein weiterer Inside-Bar folgt (ii). |
| 3 | Der bullische Reversal-Bar | chapter-05.lesson-02, chapter-05.lesson-12 | Bar 5 | `bull-reversal-bar` | Nach einer Abwärtsbewegung erscheint ein bullischer Reversal-Bar: Er handelt unter dem früheren Tief, schließt aber weit oben mit kleinem oberem Schatten. |
| 4 | Der Bar ohne Schatten am Hoch | chapter-06.lesson-13 | Bar 4 | `shaved-top` | Ein Bullenlauf mit vielen Bars. Tippe auf den bullischen Bar, der genau an seinem Hoch schließt (kein oberer Schatten). |
| 5 | Der Outside-Bar | chapter-07.lesson-01 | Bar 5 | `outside-bar` | Tippe auf den Outside-Bar: Er hat ein höheres Hoch und ein tieferes Tief als der unmittelbar vorherige Bar. |
| 6 | Das bärische Signal mit nachlassender Schärfe | chapter-08.lesson-04 | Bar 4 | `weak-bear-close` | Ein Bärenlauf. Tippe auf den bärischen Bar, der ein neues Tief erreicht, aber deutlich über diesem Tief schließt. |
| 7 | Der gescheiterte Ausbruch aus der Flagge | chapter-09.lesson-05 | Bar 6 | `failed-breakout` | Der Markt schiebt sich in einer vermeintlichen Bullenflagge seitwärts. Tippe auf den Bar, der nach oben ausbricht, aber wieder darunter schließt. |
| 8 | Der zweite Test des Tiefs | chapter-10.lesson-01 | Bar 7 | `second-test` | Ein Markt fällt, springt zurück und läuft erneut zum Tief. Tippe auf den Bar, der das frühere Tief ein zweites Mal testet, dort hält und bullisch schließt. |

## Ordne die Schritte (8 Aufgaben)

### 1. Vom Tiefbruch zum Spike nach oben
Lektionen: chapter-03.lesson-09

1. Der Markt unterschreitet das Tief des Vortages und erzeugt ein neues Tief.
2. Er kann die tieferen Preise nicht halten: Es fehlt die Akzeptanz.
3. Bären reduzieren Verkäufe und decken Shorts ein, Bullen kaufen aggressiv.
4. Ein bullischer Spike sucht anschließend einen neuen Gleichgewichtsbereich.

### 2. Ein ii sauber lesen
Lektionen: chapter-04.lesson-11

1. Die Kompression erkennen: Hochs und Tiefs rücken zusammen.
2. Beide Seiten planen: Ein Ausbruch ist nach oben und nach unten möglich.
3. Den Kontext gewichten: Trend oder Trading Range, Lage im Chart.
4. Erst nach Auslösung und Anschluss bewerten.

### 3. Vom Setup-Bar zum Entry-Bar
Lektionen: chapter-05.lesson-05

1. Der bullische Bar ist zunächst nur ein mögliches Setup, noch kein Signal.
2. Vor dem Einstieg beide Fälle planen: guter Anschluss oder sofortige Rückkehr in die alte Struktur.
3. Der nächste Bar überschreitet die Schwelle, die Order wird ausgeführt: Der Vorbar wird rückblickend zum Signal-Bar.
4. Den Entry-Bar beurteilen: Schließt er kräftig in Handelsrichtung?

### 4. Setup, Auslösung, Raum
Lektionen: chapter-06.lesson-01

1. Das Setup erkennen: Der Bar bereitet eine Gelegenheit vor.
2. Die Auslösung abwarten: Erst dann wird der Bar zum Signal-Bar.
3. Den Raum für Anschluss beurteilen: Marktphase, Widerstand, Zielraum.

### 5. Bei Unklarheit abwarten
Lektionen: chapter-07.lesson-11

1. Die Unklarheit ausdrücklich benennen.
2. Grenzen und den nächsten aussagekräftigen Test notieren.
3. Folgebars beobachten: gehaltener Bruch mit Anschluss oder schnelle Rückkehr?
4. Erst mit einer klaren These handeln – sonst ist kein Trade der Plan.

### 6. Erst den geschlossenen Bar beurteilen
Lektionen: chapter-08.lesson-01

1. Den Einstieg als wiederholbaren Plan festlegen.
2. Das Ende des Bars abwarten.
3. Den geschlossenen Bar beurteilen: Schluss und Lage.
4. Erst dann nach Plan einsteigen.

### 7. Warnung, Abwarten, Fehlschlag
Lektionen: chapter-09.lesson-05

1. Das uneindeutige Muster mit Warnzeichen erkennen.
2. Nicht sofort handeln, sondern weitere Price Action abwarten.
3. Den versuchten Ausbruch und die Reaktion danach beobachten.
4. Erst dann die Gegenthese handeln – mit eigenem Auslöser und Schutzpunkt.

### 8. Gegen einen starken Trend: der zweite Versuch
Lektionen: chapter-10.lesson-05

1. Den ersten Gegenversuch als Beobachtung behandeln, keinen Gegentrend-Trade nehmen.
2. Die Wiederaufnahme des Trends für ein oder zwei Bars ansehen.
3. Auf einen erneuten Umkehrversuch warten.
4. Erst dann einen Entry erwägen – mit passendem Ort, Auslösung und begrenztem Schutz.

