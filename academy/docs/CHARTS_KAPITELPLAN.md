# Kapitelplan: Charts lesen

Dritter Kurs der Marktgrundlagen. Zehn geplante Kapitel. Direkter Einstieg ohne
abgeschlossene andere Kurse; Sprache nach MARKTGRUNDLAGEN_SPRACHE.md.

| Kapitel | Thema | Stand |
| --- | --- | --- |
| 1 | Vom Geschäft zum Chartbild | 20 Lektionen verfügbar |
| 2 | Linien, Balken und Kerzen sicher vergleichen | 20 Lektionen verfügbar |
| 3 | Zeit-Bars, Tick-Bars und Volumen-Bars | 24 Lektionen verfügbar |
| 4 | Range-Bars und Renko | Geplant |
| 5 | Heikin-Ashi und berechnete Preise | Geplant |
| 6 | Point & Figure und regelbasierte Verdichtung | Geplant |
| 7 | Zeitebenen und gemeinsame Daten | Geplant |
| 8 | Lineare und logarithmische Skalen | Geplant |
| 9 | Datenquellen, Bereinigungen und fortlaufende Kontrakte | Geplant |
| 10 | Einen Chartbericht selbst prüfen | Geplant |

## Quellenprüfung und Modellgrenzen – Kapitel 1

Die bereitgestellte Murphy-EPUB wurde in Kapitel 3, Chart Construction geprüft:
Einleitung, Charttypen, Candlesticks und Konstruktion von Tagesbalken. Verwendet
wird der allgemeine Begriffshintergrund zu Zeit-/Preisachsen, OHLC, Körper,
Schatten, Schlusslinien und Volumen. Keine Quellenbilder, Beispiele, Passagen
oder engen Umschreibungen übernommen; keine Prognosebehauptungen des Buchs.
Andere Charttypen und Skalen werden in späteren Kapiteln behandelt.

Primärdokumentation ergänzend geprüft am 2026-10-02:
- TradingView, Learn to use line charts:
  https://www.tradingview.com/support/solutions/43000745271-learn-to-use-line-charts/
- TradingView, Understanding bar charts:
  https://www.tradingview.com/support/solutions/43000672403-understanding-bar-charts/
- TradingView, Introduction to candlestick charts and patterns:
  https://www.tradingview.com/support/solutions/43000745269-introduction-to-candlestick-charts-and-patterns/

Eigene Vela-Daten, Euro je Aktie, nur gehandelte Preise. Zeitgrenzen links
inklusive/rechts exklusiv, Minute1 ab09:00. Geschäftsdaten:
09:00:10 50,00×4;09:00:25 50,30×2;09:00:40 49,80×3;09:00:55 50,20×1.
OHLC1=50,00/50,30/49,80/50,20; Volumen10, Spanne0,50, Körper0,20,
oberer Schatten0,10, unterer0,20. OHLC2=50,40/50,50/50,10/50,15,
Spanne0,40, Körper0,25, Schatten0,10/0,05. OHLC3=50,10/50,20/49,90/50,10,
Doji-Körper0, Spanne0,30. Minuten2/3 verwenden eigene vorgegebene Kennwerte.
Keine Mengen für Minuten2/3 behauptet; keine Preisquellen-/Zeitzonenmischung.

Drei native SVG-Schaubilder: nur Schlüsse50,20/50,15/50,10 als Linie;
OHLC-Balken ausschließlich Minute1; drei Kerzen mit sämtlichen Kennwerten.
Beschriftete feste lineare Achsen, gleiche Preisabbildung, eindeutige Bild-
beschreibungen, vorhandene Fokusvergrößerung. Farben nicht als alleinige
Information. Beobachtungstexte passend zur tatsächlich gezeigten Darstellung.

Getrennte Alternativen: OHLC1 auch mit Weg O→L→H→C statt O→H→L→C möglich;
Zwischenstand09:00:30 nur O50,00/H50,30/L50,00/aktuellerLetzter50,30;
späterer Schluss50,20 damals unbekannt. Vergleichsfall vorherigerClose50,20,
neuerO50,00/C50,10 =>+0,10intern,−0,10zumvorherigenClose. Fehlerfall
O50,00/H50,10/L49,80/C50,20 wegen C>H widersprüchlich. Datenlücken nicht
als garantierte Handelsruhe interpretieren. Körperbreite kein Volumen.
Kein persönlicher Gewinn aus Preisspanne; keine aktuelle Ausführungszusage
oder sichere künftige Richtung aus vergangenen Preisen.

20 Lektionen, 14 Glossarbegriffe. Neue eigene Kurs-/Lektions-/Schrittkennungen;
vorhandene Kennungen, Standardkurs und Fortschrittsschlüssel unverändert.

## Quellenprüfung und Modellgrenzen – Kapitel 2

Murphy-EPUB, Kapitel 3 (Chart Construction), Abschnitte Types of Charts
Available, Candlesticks und Construction of the Daily Bar Chart erneut geprüft.
Allgemeiner Begriffshintergrund: Schlusslinien sowie OHLC in Balken und normalen
Kerzen. Keine Buchformulierungen, Beispiele, Abbildungen oder Prognosebehauptungen
übernommen. Alle Lektionen, Fragen und Tabellen eigenständig formuliert.

Kapitel 2 verwendet dieselben drei ausdrücklich abgeschlossenen Vela-Minuten
und die vorhandenen eigenen SVG-Schaubilder aus Kapitel 1. Jede Bildbeobachtung
bezieht sich auf diese Originaldaten; getrennte Beispiele und alternative
Zeichenregeln erhalten kein unpassendes Vela-Diagramm.

Unabhängige Rechnungen in Cent: Schlussfolge 5020/5015/5010; Änderung −10.
Körper/Spannen 20/50,25/40,0/30; Körperanteile 40%,62,5%,0%.
Schlusslagen (5020−4980)/50=80%,(5015−5010)/40=12,5%,
(5010−4990)/30≈66,7%. Bei Spanne null sind beide Verhältnisse undefiniert.
Eröffnungslücke Minute2:5040−5020=20; gemeinsame Spanne [5010,5030],
Breite20; Anteil erste Spanne40%,zweite50%. Spannenintervalle beweisen keine
vollständige Liste tatsächlich gehandelter Preise oder Aufenthaltsdauer.

Getrennte Fälle: VorigerC80,00/O79,00/C79,50 => intern+0,50,
gegen vorigenC−0,50. GleicherC10,20 bei OHLC10,00/10,40/9,80/10,20
und10,20/10,25/10,15/10,20 => gleiche Schlusslinie, Spannen0,60/0,10.
Alternative Eröffnungslinie50,00/50,40/50,10 wird ausschließlich textlich erklärt.
HLC lässt O aus; keine Rekonstruktion ohne zusätzliche Daten. Farbregeln werden
als erklärte Varianten behandelt, keine pauschale Plattformbehauptung.

20 neue Lektionen, acht neue Glossarbegriffe; Kurs gesamt40/22. Kapitel2 wird
separat nachgeladen, Freischaltung folgt ausschließlich dem eigenen Kursfortschritt.
Bestehende Kennungen und Fortschrittsschlüssel bleiben unverändert.

## Quellenprüfung und Modellgrenzen – Kapitel 3

Murphy-EPUB, Kapitel3, Construction of the Daily Bar Chart und Volume geprüft:
Begriffshintergrund zu zeitlich zugeordnetem OHLC und gehandelter Stückmenge.
Die detaillierten Ereignisgruppen sind eigene Modelle, keine Buchbeispiele.

Primärdokumentation geprüft am 2026-10-02:
- https://www.tradingview.com/support/solutions/43000709225-what-are-tick-based-intervals/
- https://ninjatrader.com/support/helpguides/nt8/bar_types.htm
- https://ninjatrader.com/support/helpGuides/nt8/break_at_eod.htm

Übernommen werden nur allgemeine Begriffe: Zeitfenster versus Meldungszahl
versus Stücksumme; Preis-Tick ist nicht Geschäftstick; Sitzungsgrenzen und
Zeitstempelregeln müssen bekannt sein. Keine Plattformfunktionen, Tarifangaben,
Prognosebehauptungen oder spezifische Aufteilungsimplementierung versprochen.
Ganzgeschäftsregel ausdrücklich eigenes Lehrmodell, keine NinjaTrader-Regel.

Originale Luma-Liste: Sekunden seit09:00 / Cent je Aktie / Aktien:
1:5/2000/2;2:12/2010/1;3:20/1995/3;4:45/2005/2;
5:60/2015/4;6:70/2020/1;7:110/2000/2;8:125/1990/1;
9:130/1995/5;10:155/2010/2;11:185/2025/3;12:205/2015/1.
Zwölf Meldungen,27 Aktien. Aufnahme beiSekunde240=09:04. Gleiche Uhr,
gehandelte Preise, keine Sitzungsgrenze im Hauptfall. Zeitfenster [start,end),
leere Fenster ohne erfundene OHLC-Bars. Uhrzeit im Zeitbild nennt Fensterbeginn;
unter jedem Bar separat erste/letzte tatsächlich zugehörige Meldung.

Minutengruppen1–4,5–7,8–10,11–12; Volumen8/7/8/4, alle abgeschlossen.
OHLC inCent:2000/2010/1995/2005;2015/2020/2000/2000;
1990/2010/1990/2010;2025/2025/2015/2015.
Tick3-Gruppen1–3,4–6,7–9,10–12; Volumen6/7/8/6, alle abgeschlossen.
OHLC:2000/2010/1995/1995;2005/2020/2005/2020;
2000/2000/1990/1995;2010/2025/2010/2015.
Abstand erste/letzte Meldung15/25/20/50Sekunden; nicht mit Fensterdauer oder
Zeit zwischen Bar-Abschlüssen gleichgesetzt.

Volumen5-Ganzgeschäftsregel: bei >=5 mit ganzer auslösender Meldung schließen,
nächste Meldung beginnt bei0; kein Überschussübertrag oder Doppelzählen.
Gruppen1–3,4–5,6–9,10–11,12; Mengen6/6/9/5/1. Letzte Gruppe offen.
OHLC:2000/2010/1995/1995;2005/2015/2005/2015;
2020/2020/1990/1995;2010/2025/2010/2025;
2015/2015/2015/2015 aktuell, letzterPreis kein endgültigerSchluss.
Drei native OHLC-SVGs, gleiche lineare Preisachse. Ereignis-Bar-Abstände ordinal,
keine gleichmäßige Zeitdauer. Offener Rest zusätzlich textlich gekennzeichnet.

Getrennte Fälle ohne unpassendes Hauptfallbild: AufnahmeSekunde75 nutzt nur
Geschäfte1–6, Minute2 O2015/H2020/L2015/letzter2020, Menge5.
Aufteilung bereits3 + neu7 => Bar5 und Bar5 statt Ganzgeschäftsbar10;
zehn Gesamtaktien, keine neue tatsächliche Ausführung durch Aufteilung.
Beginn beiGeschäft2 => ersteTickgruppe2–4 O2010/H2010/L1995/C2005.
Drei Ein-Aktien-Meldungen bei30,00 => Tick3 fertig,Spanne0.
Zwei Einzelmeldungen gegenüber einer Mengen-Zusammenfassung => gleicheMenge,
unterschiedliche Zeilenanzahl. Keine universelle Feed-Behauptung.

24 neue Lektionen, zehn neue Glossarbegriffe; Kurs gesamt64/32. Eigenständige
Formulierungen, Daten und Bilder; keine Buchpassagen oder Bilder übernommen.
Bestehende Kurs-/Schrittkennungen und Fortschrittsschlüssel bleiben erhalten.
