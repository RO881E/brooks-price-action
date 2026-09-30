# Vorbereitung Stufe 4 und 5 („spielerischer“)

Umsetzungsplan, noch nichts umgesetzt. Baut auf [`SPIELERISCH_IDEEN.md`](SPIELERISCH_IDEEN.md) und
den Stufen 1–3 auf (Bulle Bo, Wanderweg, Wochenblick/Bar-Album). Jedes Paket unten ist so
geschnitten, dass es einzeln beauftragt, geprüft und gemergt werden kann. Vor jedem Paket: Stand
von `main` prüfen und dieses Dokument mit den Entscheidungen von Robert abgleichen.

Grundregeln wie bisher: nur Darstellung und Bedienung, bis ausdrücklich anders vermerkt; keine
neuen Fachaussagen ohne Content-Pack und Freigabe; bestehende Speicherschlüssel
(`brooks-progress`, `brooks-tr-best`, `wqt-academy-progress-v1`) und Lernstand bleiben unberührt;
alles per Tastatur, mit Screenreader und mit „Bewegung reduzieren“ nutzbar; Tests und axe
gehören zu jedem Paket.

---

## Stufe 4 – Neue Aufgabenformen und Mini-Spiel

Ziel: Das vorhandene Material fühlt sich abwechslungsreicher an. Wichtig ist die Trennung
**Bedienung** (S4a–S4c, S4e, ohne neuen Inhalt) von **Inhalt** (S4d, braucht Content-Pack und
fachliche Freigabe). Die Wiederholungs-Planung (Fälligkeit, Intervalle, XP) wird von keiner
neuen Form verändert, sofern Robert nichts anderes entscheidet.

### S4a – Chart-Trainer als Mini-Spiel (nur Bedienung)

Idee 27. Dieselben Fälle, dieselbe Auswertung; nur das Erlebnis ändert sich.

| Nr. | Aufgabe | Abnahme |
|---|---|---|
| S4a-01 | Entscheidung als **großer Dreifach-Knopf** (Long / Abwarten / Short) mit klaren Farben und Symbolen; Auswahl per Antippen oder Tastatur. | Bestehende Radiogruppe bleibt der zugängliche Kern (Name, Pfeiltasten); gleiche Werte wie vorher. |
| S4a-02 | Bars erscheinen beim Fortschreiten **nacheinander mit kurzer Animation**. | Nur ohne „Bewegung reduzieren“; sonst sofort. Keine Vorschau künftiger Bars. |
| S4a-03 | Auflösung mit Bulle (jubelt/denkt) und ruhigem Text. | Kein Gewinn-/Verlustwort, keine Zahlen zu Erfolg im Markt. |
| S4a-04 | Tests: bestehende Trainer-Suites bleiben grün, neue e2e für Knöpfe, Tastatur, Zoom 200 %, 360 px. | axe ohne Befund, keine Überbreite. |

Risiko: mittel (Trainer ist die komplexeste Ansicht; viele bestehende Tests hängen an seinen
Beschriftungen). Deshalb Rollen und Namen beibehalten.

### S4b – Karten zuordnen (Begriff ↔ Beispiel)

Idee 25/26. Quelle: vorhandene Glossareinträge (Begriff + eigenformulierte Definition) aus bereits
abgeschlossenen Lektionen. Keine neuen Fachtexte.

| Nr. | Aufgabe | Abnahme |
|---|---|---|
| S4b-01 | Reine Logik `matchPairs.ts`: wählt 4–6 Paare aus zugänglichen Begriffen, deterministisch, ohne Doppelte, nur aus freigeschalteten Lektionen. | Unit-Tests: leerer Stand, wenige Begriffe, Reihenfolge, Zufallssaat fest. |
| S4b-02 | Oberfläche: zwei Spalten, Antippen-Paare; **Alternative per Tastatur** (Liste + Auswahl). | Kein Ziehen nötig; Screenreader-Namen; 360 px. |
| S4b-03 | Rückmeldung mit Bulle; Fehlversuche erklären mit Definition statt Strafe. | Kein Punktabzug. |
| S4b-04 | Einstieg unter „Üben“ als eigene Karte „Begriffe-Memory“. | Nur sichtbar, wenn ≥ 4 Begriffe zugänglich sind; sonst Erklärung mit Lernlink. |

Entscheidung R: Zählt eine Runde als Lernaktivität/XP? **Empfehlung: nein** (reine Übung,
kein Einfluss auf Serie, XP, Fälligkeit). Zustand ist flüchtig (nicht im Backup), wie
Kurzlernen.

### S4c – Blitzrunde (60 Sekunden), freiwillig

Idee 28. Wiederholung bekannter Fragen mit Zeitrahmen.

| Nr. | Aufgabe | Abnahme |
|---|---|---|
| S4c-01 | Logik: Auswahl aus bereits richtig beantworteten Fragen; **kein Einfluss auf Fälligkeiten** (eigener, klar getrennter Zähler oder gar keiner). | Unit-Tests; bestehender Wiederholungsplan unverändert. |
| S4c-02 | Zeitgeber sichtbar **und** für Screenreader (keine Dauerausgabe: nur Start, 30 s, Ende). | WCAG 2.2.1: Zeit abschaltbar → **„Ohne Zeit spielen“ ist Standardalternative**, Pause jederzeit. |
| S4c-03 | Ergebnis freundlich („7 richtig – bei X lohnt ein zweiter Blick“), Link zur Lektion. | Keine Ranglisten, kein Druck. |
| S4c-04 | Tests inkl. Fake-Timer und reduzierter Bewegung. | Kein Flackern, keine Sirenen. |

Risiko: mittel (Zeitdruck kann dem Konzept „Fehler werden erklärt, nicht bestraft“
widersprechen). Entscheidung R2: Blitzrunde überhaupt anbieten? **Empfehlung: ja, aber
optional, ohne Zeitdruck als gleichwertige Variante.**

### S4d – „Finde den Signal-Bar“ und „Ordne die Schritte“ (braucht Inhalt)

Ideen 25. Beide Formen brauchen **neue redaktionelle Daten**, die es bisher nicht gibt
(Zielbar je Chart, richtige Reihenfolge je Ablauf). Darum kein reines UI-Paket:

| Nr. | Aufgabe | Abnahme |
|---|---|---|
| S4d-01 | **Content-Pack C-04**: 8–12 kurze Aufgaben je Form aus bereits vermittelten Lektionen (eigene, synthetische Bars; Feld `targetBarIndex` bzw. `orderedSteps`), mit Entwurfsstatus wie C-02. | Validator prüft Formen, IDs, Lektionsbezug, Bars gegen Text; Status `draft`. |
| S4d-02 | Fachliche Freigabe durch Robert (Formel: „Ist der Bar nur mit den sichtbaren Bars begründbar?“). | Ohne Freigabe nichts in der App sichtbar. |
| S4d-03 | UI: Chart antippen (Tastatur: Bars einzeln fokussierbar, vorhandenes Diagramm-Fokus-Muster), Schritte ordnen (Hoch/Runter-Knöpfe statt nur Ziehen). | axe, 360 px, Tastatur. |
| S4d-04 | Auswertung mit Erklärung und Lernlink. | Keine unbelegte Bewertung. |

Empfehlung: S4d **nach** S4a–S4c und erst, wenn Robert C-04 freigeben kann. Bei ChatGPT lässt
sich C-04 gut vorbereiten (Aufgabenliste) – die Prüfung bleibt fachlich.

### S4e – „Fast geschafft“-Runde

Idee 29. Nutzt die vorhandene Fehlerübersicht (F-16) und das Übungsformat.

| Nr. | Aufgabe | Abnahme |
|---|---|---|
| S4e-01 | Einstieg „Zuletzt falsch“ mit ermutigendem Text und Bulle. | Nutzt vorhandene Logik, keine neue Speicherung. |
| S4e-02 | Abschluss-Moment („Das saß!“), sobald alle offenen Fehler dieser Runde richtig sind. | Bestehende Fehlerlogik unverändert. |

Risiko: niedrig.

### Reihenfolge Stufe 4

S4e → S4a → S4b → S4c → (S4d nach Freigabe C-04). Begründung: klein und sicher zuerst, komplexer
Trainer danach, inhaltliche Pakete zuletzt.

---

## Stufe 5 – Töne, Vibration, Thema

Ziel: Rückmeldung für Ohren und Hände sowie ein weiteres Aussehen. Das Paket hat das größte
Regressionsrisiko im Aussehen (Dunkel), deshalb wird es in drei Teile geteilt.

### Gemeinsame Vorbereitung S5-0 – Geräteeinstellungen

Entscheidung S: Wo werden Ton, Vibration und Thema gespeichert?
**Empfehlung: eigener lokaler Schlüssel `wqt-academy-ui-v1`, nicht im Lernstand und nicht im
Backup** (geräteabhängig, reine Kosmetik). Mit `try/catch`, sinnvollen Standardwerten und
Migration nicht nötig. Alternative: in den Lernstand (Version 16) aufnehmen – dann Backup,
Migration und FIELD_SINCE nötig; nur wählen, wenn die Einstellung geräteübergreifend gelten soll.

| Nr. | Aufgabe | Abnahme |
|---|---|---|
| S5-01 | Modul `uiPreferences.ts` (lesen/schreiben/abonnieren), Standard: Ton **aus**, Vibration **an**, Thema **hell**. | Unit-Tests: defekter Speicher, gesperrter Speicher, unbekannte Werte. |
| S5-02 | Einstellungen: Bereich „Rückmeldung und Aussehen“ mit Wirkungsnotiz je Option (wie P11). | Bestehende Einstellungen unverändert; axe. |

### S5a – Vibration und Töne

| Nr. | Aufgabe | Abnahme |
|---|---|---|
| S5a-01 | `haptics.ts`: `navigator.vibrate` nur bei echter Nutzeraktion (richtig, Abschluss); kurze Muster; **nie beim Laden**. Fehlt die Funktion (z. B. iPhone/Safari), passiert nichts. | Unit-Test mit Fake-`vibrate`; Einstellung „Vibration“ aus = nichts. |
| S5a-02 | `sounds.ts`: kurze, **selbst erzeugte** Töne mit Web Audio (keine Audiodateien, keine Lizenzfragen); nur nach Geste; leise; pausiert im Hintergrund. | Unit-Test mit Fake-`AudioContext`; Standard aus. |
| S5a-03 | Töne/Vibration sind **nie der einzige Träger** einer Information; Texte bleiben. | e2e prüft Meldungstexte unverändert. |
| S5a-04 | Auslöser: richtige Antwort, Lektion/Runde abgeschlossen, Meilenstein. Falsche Antwort: nur sanftes Signal oder keins (Entscheidung). | Keine Dauerschleifen. |

Risiko: niedrig. Hinweis: Vibration funktioniert nur auf Geräten und Browsern mit dieser
Funktion (Android-Chrome ja, iPhone-Safari nein). Das wird in der Einstellung erklärt.

### S5b – Dunkles Thema

| Nr. | Aufgabe | Abnahme |
|---|---|---|
| S5b-01 | Bestandsaufnahme: alle festen Farben in Stilen und **SVG-Charts** (Lehrdiagramme, Trainer-Charts, Album, Bulle) auflisten; in Tokens überführen. | Liste der Fundstellen; nichts Sichtbares ändert sich im hellen Thema (Bildvergleich). |
| S5b-02 | Dunkle Palette je Modus (Lesen/Üben/Wiederholen/Trainieren/Fortschritt) mit geprüftem Kontrast. | Kontrastwerte dokumentiert (wie `DESIGN_FOUNDATION.md`). |
| S5b-03 | `data-theme="dark"` auf `:root` mit Auswahl **Hell / Dunkel / Automatisch (Systemwunsch)**; kein Aufblitzen beim Start. | e2e in beiden Themen; Reload behält die Wahl. |
| S5b-04 | axe und 360 px **für alle Hauptansichten in beiden Themen**; Bilder (Bulle) auf dunklem Grund lesbar. | Erweiterte Fassung von `tests/quality.spec.ts` (Schleife über Themen). |

Risiko: **hoch** (viele feste Farben, Charts, Bilder). Nur beginnen, wenn S5b-01 zeigt, dass der
Umfang tragbar ist; sonst in Etappen (erst Lesen/Üben, dann Rest).

### S5c – Thema „Bunt“

Entscheidung T: Was heißt „Bunt“? Vorschlag: gleiche helle Struktur, aber gesättigtere
Akzentfarben und farbige Flächen je Bereich. Wegen Kontrast dieselben Prüfungen wie S5b. Erst
nach S5b, weil es dessen Token-Struktur nutzt.

### Reihenfolge Stufe 5

S5-0 → S5a → S5b → S5c.

---

## Entscheidungen für Robert (mit Vorschlag)

| # | Frage | Vorschlag |
|---|---|---|
| R | Zählen Karten-/Blitzrunden als Lernaktivität/XP? | Nein, reine Übung. |
| R2 | Blitzrunde anbieten? | Ja, optional, mit „Ohne Zeit“-Variante. |
| R3 | C-04 (Signal-Bar, Schritte ordnen): wer schreibt den Inhalt? | ChatGPT entwirft, Robert prüft; Claude baut Validator und Oberfläche. |
| S | Wo liegen Ton/Vibration/Thema? | Eigener lokaler Schlüssel, nicht im Backup. |
| S2 | Falsche Antwort mit Ton/Vibration? | Nur sehr sanft oder gar nicht. |
| T | Was ist „Bunt“? | Sattere Akzente auf heller Struktur. |
| U | Dunkel: mit „Automatisch“ nach Systemwunsch? | Ja. |

## Empfohlene Gesamtreihenfolge

Stufe 3 (läuft) → S4e → S5a (klein, schnell spürbar) → S4a → S4b → S4c → S5b → S5c → S4d
(sobald C-04 freigegeben ist).
