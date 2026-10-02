# Kapitelplan: Charts lesen

Dritter Kurs der Marktgrundlagen. Zehn geplante Kapitel. Direkter Einstieg ohne
abgeschlossene andere Kurse; Sprache nach MARKTGRUNDLAGEN_SPRACHE.md.

| Kapitel | Thema | Stand |
| --- | --- | --- |
| 1 | Vom Geschäft zum Chartbild | 20 Lektionen verfügbar |
| 2 | Linien, Balken und Kerzen sicher vergleichen | 20 Lektionen verfügbar |
| 3 | Zeit-Bars, Tick-Bars und Volumen-Bars | 24 Lektionen verfügbar |
| 4 | Range-Bars und Renko | 24 Lektionen verfügbar |
| 5 | Heikin-Ashi und berechnete Preise | 24 Lektionen verfügbar |
| 6 | Point & Figure und regelbasierte Verdichtung | 24 Lektionen verfügbar |
| 7 | Zeitebenen und gemeinsame Daten | 24 Lektionen verfügbar |
| 8 | Lineare und logarithmische Skalen | 24 Lektionen verfügbar |
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

## Quellenprüfung und Modellgrenzen – Kapitel 4

Murphy-EPUB auf eigene Renko-Abschnitte geprüft: keine gefunden. Kapitel3 liefert
nur den bereits geprüften OHLC-/Spannenhintergrund. Renko- und Range-Regeln
werden nicht als Buchinhalt ausgegeben. Fachbegriffe ergänzend anhand folgender
Primärdokumentation geprüft am2026-10-02:
- https://www.tradingview.com/support/solutions/43000502284-understanding-renko-charts/
- https://www.tradingview.com/support/solutions/43000474007-understanding-range-charts/
- https://static.ninjatrader.com/support/helpGuides/nt8/bar_types.htm

Allgemeiner Hintergrund: preisabhängige Bildung, virtuelle Zwischenstufen,
vorläufige Projektionen, Datenauflösung und Grenzen synthetischer Preise.
Keine Buch-/Webformulierungen, Beispiele, Bilder oder Prognosebehauptungen
übernommen. Alle Regeln und Beispiele ausdrücklich eigene Lehrmodelle,
keine Simulation der vollständigen Plattformimplementierungen.

Eigene Arvo-Liste: Sekunden seit09:00/Cent jeAktie/Aktien:
1:5/10000/2;2:20/10010/1;3:35/9990/3;4:50/10020/2;5:65/10030/1;
6:80/10020/2;7:100/10000/3;8:120/10010/1;9:125/10050/4;
10:150/10040/2;11:175/10030/1;12:205/10040/2;13:245/10000/3;
14:260/9960/1;15:290/9970/2. Gesamt15Meldungen/30Aktien.
Aufnahme nachG15, keine weiteren Meldungen und kein Sitzungsneustart.
Erfundenes Preisraster10Cent, Range-Schwelle30Cent, Renko-Größe20Cent.

Range: erstes H−L>=30 schließt mit ganzer auslösender Meldung; nächste
Meldung startet neu. Gruppen1–4/5–7/8–9/10–13/14–15;
OHLC beziehungsweise aktuelles O/H/L/Letzter inCent:
10000/10020/9990/10020;10030/10030/10000/10000;
10010/10050/10010/10050;10040/10040/10000/10000;
9960/9970/9960/9970. Spannen30/30/40/40/10, Mengen8/6/5/8/3.
Letzte Gruppe offen. Keine Interpolation, Grenzvervielfachung oder erfundenen
Geschäfte; deshalb sind abgeschlossene Spannen nicht immer exakt30.

Renko: Anker10000, festeGröße20, inklusive Schwellen, Einzelmeldungen in
Reihenfolge, ersteRichtung ab±20, Fortsetzung je20, Umkehr erst ab40 vom
letztenSteinschluss. ErsterGegenstein startet eineGröße vom letztenSchluss
in Gegenrichtung, keine überlappende Zwischenbox. Keine Schatten/Projektionen.
Steine(O→C/Auslöser):10000→10020/G4;10020→10040/G9;
10020→10000/G13;10000→9980/G14;9980→9960/G14.
Letzter gehandelt9970, letzterSteinschluss9960; nächste Aufwärtsumkehr10000.
Keine Meldung bei9980. Keine Volumenzuteilung an berechnete Steine.
Zwischenbild bisG11: letzterStein10020→10040, beobachtet10030,
Fortsetzung10060, Umkehr10000. Eigene SVGs mit fixer linearer Preisachse,
expliziten Einheiten und offenerRestkennzeichnung; Bar-/Steinfolge ordinal.

Getrennte Varianten ohne Hauptbild: Range50 ersteGruppe1–9/Spanne60;
RenkoAnker10010 ersteAbwärtsschwelle9990/G3; Größe40 ersterAufwärtsschwelle10040.
IdentischesOHLC10000/10040/9980/10020 bei Folgen
A:10000,10040,9980,10020 => fünfSteine(↑↑↓↓↑),
B:10000,9980,10040,10020 => dreiSteine(↓↑↑).
ATR/Prozent nur Methodenbegriffe, keine behauptete dynamische Implementierung.
Minutenschluss-Projektionen getrennt vom bestätigten Einzelmeldungsmodell.

24 neue Lektionen, zwölf Glossarbegriffe; Kurs gesamt88/44. Neue Diagramme
werden separat nachgeladen. Gemeinsamer Zoom-/Fokusrahmen bleibt derselbe;
ältere Diagrammaufrufe behalten ihre Schnittstelle und ihre Bedienung.
Separat geladene Kapitelgrafiken unterliegen dem bestehenden40kB-Kapitelbudget;
keine bestehenden Größenlimits erhöht. IDs und Fortschrittsschlüssel erhalten.

## Quellenprüfung und Modellgrenzen – Kapitel 5

Murphy-EPUB vollständig auf Heikin-/Heiken-Ashi-Erwähnungen geprüft: keine
gefunden. Allgemeiner OHLC-/Kerzenhintergrund stammt aus dem bereits geprüften
Kapitel3. HA wird nicht als eigener Murphy-Abschnitt dargestellt.
Primärdokumentation geprüft am2026-10-02:
- https://www.tradingview.com/support/solutions/43000619436-understanding-heikin-ashi-charts/
- https://static.ninjatrader.com/support/helpGuides/nt8/bar_types.htm

Fachlicher Hintergrund: berechnete Kerzenwerte, rekursive Eröffnung,
Original-/HA-Preislabels und unterschiedliche Rundungs-/Farbregeln.
Keine Prognoseversprechen, Quellenbilder oder Quellformulierungen übernommen.
Eigenständige Erklärungen, Rechnungen, Vergleiche und drei native SVGs.

Neuer eigenständiger Luma-OHLC-Datensatz, keine Fortsetzung der Geschäftsliste
in Kapitel3: vier abgeschlossene Minuten ab09:00, Intervalle links inklusive,
rechts exklusiv, Euro je Aktie. Keine Einzelgeschäftsfolge oder Mengen bekannt.
Original(O/H/L/C):100/104/98/102;102/108/100/104;
104/106/100/101;112/114/110/113.
Initialisierung HA-O1=(Original-O1+Original-C1)/2=101 ausdrücklich Lernregel,
nicht universell. Später HA-O=(vorheriges HA-O+vorheriges HA-C)/2;
HA-C=(aktuelles Original-O+H+L+C)/4;
HA-H=max(Original-H,HA-O,HA-C),HA-L=min(Original-L,HA-O,HA-C).
Keine Zwischenrundung. HA(O/H/L/C):101/104/98/101;
101/108/100/103,50;102,25/106/100/102,75;
102,50/114/102,50/112,25.

Minute3:Originalkörper−3,HA-Körper+0,50,HA-Schlussänderung−0,75.
Minute4:Original-C3→O4 Abstand11;Original-H3→L4 Spannenlücke4.
HA-Spannen3/4 überlappen102,50–106;HA-L4 unter Original-L4.
Keine Geschäftsbehauptung bei102,50 inMinute4. HA-Schatten2 oben4,50/unten1;
HA-UntererSchatten4 null aus Berechnung, keine Order-/Prognoseaussage.
Getrennte Variante Start100:HA-O100/100,50/102/102,375;
HA-C unverändert, Startunterschied halbiert sich pro Schritt.
Getrennter früher Zwischenstand Minute4 Original112/112/112/112:
HA-O102,50,HA-C112,HA-H112,HA-L102,50;keine Zukunftsdaten benötigt.
Zwei-Schluss-Mittel Minuten3/4:Original107,HA107,50.

Alle Grafiken feste lineare Preisabbildung, Original und HA auf derselben
Skala. Körperrichtung durch Textpfeile und Gleichheitszeichen, nicht nur Farbe.
Formelgrafik trennt Vorgänger-HA von aktuellen Originaldaten. Vorhandene
Vergrößerungs-/Zoomoberfläche mit eigenem lazy geladenem Grafikmodul.
Keine Budgeterhöhung. Bestehende IDs und Fortschrittsschlüssel erhalten.
24 neue Lektionen, zwölf Glossarbegriffe; Kurs gesamt112/56.

## Quellenprüfung und Modellgrenzen – Kapitel 6

Bereitgestellte Murphy-EPUB, Kapitel11 (Point and Figure Charting):
The Point and Figure versus the Bar Chart, Construction of the Intraday
Point and Figure Chart sowie Construction of the 3 Point Reversal Chart
geprüft. Fachlicher Hintergrund: Preisraster statt gleichmäßiger Zeitachse,
X-/O-Spalten, volle Kästchen, Umkehrzahl, Eingabemethoden und Reihenfolge.
Ein-Kästchen-Sonderkonventionen, Buchbeispiele, Muster-Prognosen, Kursziele
und Handelsregeln werden nicht übernommen. Alle Texte und Daten eigenständig.

Primärdokumentation ergänzend geprüft am2026-10-02:
- https://chartschool.stockcharts.com/table-of-contents/chart-analysis/point-and-figure-charts/point-and-figure-basics/introduction-to-point-and-figure-charts
- https://chartschool.stockcharts.com/table-of-contents/chart-analysis/point-and-figure-charts/point-and-figure-basics/point-and-figure-scaling-and-timeframes

Übernommen nur allgemeine Begriffe zu Kästchen, Umkehr, Preisquellen und
Hoch-Tief-Fortsetzungspriorität. Plattformabhängige Raster-/Rundungsdetails,
Monatskodierungen oder Erfolgsversprechen werden nicht als universell erklärt.
Keine Quellbilder, Passagen oder engen Umschreibungen übernommen.

Eigener unabhängiger Nivo-Datensatz: id/Sekunde seit09:00/Cent je Aktie:
1/5/5000;2/20/5050;3/40/5210;4/55/5150;5/80/5050;6/120/5000;
7/180/5100;8/185/5150;9/220/5250;10/260/5100;11/290/5050;12/360/5150.
Aufnahme nachG12; keine weiteren Meldungen/Sitzungsneustarts. Mengen unbekannt.
Rasteranker5000 ohne eigenes Zeichen; feste Kästchengröße50; Umkehrzahl3.
Inklusive Grenzen. Erste Richtung ab±50 vom Anker. Volle Rasterstufen,
keine Teilzeichen; gezeichnetes Extrem steuert nächste Bedingungen.
Umkehr startet eine Stufe neben dem alten Extrem, welches nicht dupliziert wird.
Modell unterstützt nur Umkehrzahlen>=2, keine Ein-Kästchen-Sonderfälle.

Exakte Spalten mit Auslösern (Rasterstufe:G):
X[5050:G2,5100:G3,5150:G3,5200:G3];
O[5150:G5,5100:G5,5050:G5,5000:G6];
X[5050:G8,5100:G8,5150:G8,5200:G9,5250:G9];
O[5200:G10,5150:G10,5100:G10,5050:G11].
Zwölf Meldungen,17 Zeichen, vier Spalten. G4/G7/G12 zeichnen nichts Neues.
Kein Originalgeschäft bei5200; G3 bei5210 überschreitet diese Rasterstufe.
Letzter Originalpreis5150, aktuelles O-Tief5050, Fortsetzung5000, Umkehr5200.
Spaltenstarts beiSekunden20/80/185/260; Abstände60/105/75, keine feste Dauer.

Getrennte Varianten: Kästchen100/Umkehr3 ergibt eine X-Spalte[5100,5200];
Kästchen50/Umkehr2 dreht bereits mitG7 und erzeugt mitG12 fünfte X[5100,5150].
Weitere20 Meldungen bei5150 ändern Hauptbild nachG12 nicht; Menge unbestimmt.
Grenzprüfungen: nachX5200 Preis5051 ohneUmkehr,5050 mitUmkehr;
nachO5050 Preis5199 ohneUmkehr,5200 mitUmkehr;5001 ohneFortsetzung,5000 mit.

Getrennt ab bereits vorhandener X-Spalte bis5200:
OHLC5200/5300/5000/5200. SchlussmethodeC5200 ohne Änderung;
erklärte Hoch-Tief-Fortsetzungspriorität verlängert X bis5300 und ignoriert L5000.
Vollständige Folgen A:5200,5300,5000,5200 und B:5200,5000,5300,5200
haben gleiche OHLC. A alteX bis5300, letzteX bis5200;
B alteX bis5200, letzteX bis5300. Beide erzeugen zwei weitere Spalten.
Methodenbild nennt Ausgänge, ohne eine tatsächliche OHLC-Zwischenfolge zu erfinden.

Drei native SVGs mit zugänglichen Beschreibungen, expliziten Einheiten,
linearer Preisabbildung, X/O statt reiner Farbcodierung und bestehendem
Fokus-/Zoomrahmen. Eigene lazy geladene Grafiken unter bestehendem Budget.
24 neue Lektionen, zwölf Glossarbegriffe; Kurs gesamt136/68.
Vorhandene IDs und Fortschrittsschlüssel bleiben erhalten.

## Quellenprüfung und Modellgrenzen – Kapitel 7

Bereitgestellte Murphy-EPUB: Kapitel3, Construction of the Daily Bar Chart
und Weekly and Monthly Bar Charts; Kapitel8, Long Term to Short Term Charts
geprüft. Fachlicher Hintergrund: zeitliche OHLC-Zusammenfassung und Wechsel
zwischen gröberen und feineren Ansichten. Keine empfohlenen Handelsregeln,
Prognosebehauptungen, Buchbeispiele oder Formulierungen übernommen.

Primärdokumentation ergänzend geprüft am2026-10-02:
- https://www.tradingview.com/charting-library-docs/latest/connecting_data/time-and-sessions/Trading-Sessions/
- https://static.ninjatrader.com/support/helpGuides/nt8/how_bars_are_built.htm
- https://static.ninjatrader.com/support/helpGuides/nt8/bar_types.htm

Hintergrund: Sitzungen und Fensterausrichtung beeinflussen Gruppengrenzen;
Anfangs- und Endzeitlabels unterscheiden sich je nach Programm; Datenquellen
können abweichen. Tagesschluss kann je nach Quelle Abrechnungswert sein.
Keine Plattformkonfiguration oder vollständige Kalenderimplementierung zugesagt.
Alle Lerntexte, Vergleichsfelder, Fragen, Daten und Grafiken eigenständig.

Neuer unabhängiger Riva-Datensatz: id/Sekunde seit09:00/Cent je Aktie/Aktien:
1/5/3000/2;2/20/3020/1;3/50/3010/3;4/60/3010/1;5/85/2990/2;6/110/3030/2;
7/125/3040/3;8/150/3050/1;9/175/3020/4;10/180/3010/1;11/200/2980/1;12/235/3000/2;
13/245/3000/2;14/275/3060/3;15/295/3040/2;16/300/3030/1;17/330/3020/2;18/355/3070/3.
HauptaufnahmeSekunde360=09:06. 18Meldungen/36Aktien. Fenster[start,end),
Anker09:00, keine Sitzungsgrenze, gehandelte Preise und erklärte vollständige
Übungsliste. Kein realer Börsenkalender oder Zeitzonenwechsel behauptet.

Ein-Minuten-O/H/L/C/Menge inCent undAktien:
3000/3020/3000/3010/6;3010/3030/2990/3030/5;3040/3050/3020/3020/8;
3010/3010/2980/3000/4;3000/3060/3000/3040/7;3030/3070/3020/3070/6.
Drei-Minuten-GruppenG1–9 undG10–18:
3000/3050/2990/3020/19;3010/3070/2980/3070/17.
Sechs-Minuten-G1–18:3000/3070/2980/3070/36.
OHLC-Aggregation:erstesO,maxH,minL,letztesC; Menge addieren.
Direkte Geschäftsdaten und ausgerichtete Teilbars ergeben identische Werte.
Minute3 Körper−20Cent, erstesDrei-Minuten-Fenster Körper+20Cent;
Minute6 Körper+40Cent, Schlussänderung zum vorigenC+30Cent.
Drei Ansichten enthalten denselben Umfang, keine108Aktien oder unabhängigen
neun Handelsereignisse. Sechs+zwei+eine sind lediglich sichtbare Kerzenzahlen.

Getrennte Ausrichtung09:01–09:04:Minuten2–4,
3010/3050/2980/3000/17. Ein Zwei-Minuten-Bar09:02–09:04 schneidet die
Drei-Minuten-Zielgrenze; Reaggregation ohne feinere Daten wird abgewiesen.
Leere Fenster erhalten keine erfundenen Bars. Zeitlich beendet bedeutet im
Modell nicht zugesicherte Datenabdeckung; entfernte Meldungen können Menge
und Extreme unvollständig machen. Fehlende Daten nicht als Handelsruhe lesen.

Frühere Aufnahme275=09:04:35 enthält nurG1–14 und28Aktien.
ErsterDrei-Minuten-Bar abgeschlossen;zweiter offen:
3010/3060/2980/aktuellerLetzter3060/9. Sechs-Minuten-Bar noch offen,
3000/3060/2980/aktuellerLetzter3060/28. Endhoch3070 erst später bekannt.
Minute5 offen;Minuten1–4 zeitlich beendet. G14 am Aufnahmezeitpunkt enthalten.
BeiSekunde175 ersterDrei-Minuten-Bar noch offen;bei180 beendet, G10 gehört
bereits zum neuen Fenster. Zusätzliches Testgeschäft bei360 eröffnet neues
Minutenfenster[360,420), ohne die abgeschlossenen sechs Minuten zu verändern.

Weitere getrennte Folgen3000,3070,2980,3070 und3000,2980,3070,3070 haben
identischesOHLC, aber andere Zwischenfolge. Keine behauptete Rekonstruktion
oder Volumenangabe für diese Varianten.30 nominelle1-Minuten-Fenster30Minuten,
30 nominelle3-Minuten-Fenster90Minuten nur ohne Lücken/Handelspausen.
Kalendermonate nicht automatisch vier Wochen; passende Sitzung/Quelle nötig.

Drei eigene SVGs für Minuten, Drei-Minuten-Aggregation und frühen Zwischenstand.
Gleiche lineare Preis- und Zeitabbildung, Zeitfenster durch Achse und Labels,
Körperrichtungen durch Textpfeile, laufender Status textlich und gestrichelt.
Aktueller letzter Preis ausdrücklich kein endgültiger Schluss. Beschreibungen
und Fokus-/Zoomrahmen erhalten, eigenes lazy geladenes Grafikmodul.
24 neue Lektionen, zwölf Glossarbegriffe; Kurs gesamt160/80.
Bestehende IDs, Fortschrittsschlüssel und Größenbudgets erhalten.

## Quellenprüfung und Modellgrenzen – Kapitel 8

Bereitgestellte Murphy-EPUB, Kapitel3, Arithmetic versus Logarithmic Scale
geprüft. Allgemeiner Hintergrund: Preis-Differenzen versus Preisverhältnisse,
lineare/arithmetic und logarithmische Preisabbildung. Buchbeispiele, Bilder,
Aussagen über typische Plattform-/Marktnutzung und Prognosen nicht übernommen.
Alle Lerntexte, Zahlen, Fragen und SVGs eigenständig erstellt.

Primärdokumentation ergänzend geprüft am2026-10-02:
- https://chartschool.stockcharts.com/table-of-contents/chart-analysis/what-are-charts
- https://www.tradingview.com/support/solutions/43000748166-how-to-configure-your-supercharts/

Übernommen nur allgemeine Unterscheidung zwischen linearer, logarithmischer,
fester Basis-Prozentdarstellung und Indexierung. Keine Plattformimplementierung
oder Erfolgsbehauptung zugesagt. Insbesondere keine pauschale lineare Proportionalität
zwischen Prozentwert und Log-Höhe behauptet: Log-Abstände entsprechen log(Ende/Anfang).
Die konkrete ungenaue Verhältnisbehauptung in der zweiten Webquelle wird nicht
übernommen. Unabhängige Modellrechnungen und mathematische Abbildungsregeln geprüft.

Neuer eigener Sora-Hauptfall: vier abgeschlossene gleich lange Abschnitte mit
Schlüssen15/30/60/120 Euro je Aktie, keine OHLC/Mengen/Einzelgeschäftsfolge.
Beide Vergleichsbilder gleiche Höhe und Grenzen15–120;waagerechte Abstände gleich.
Euro-Differenzen15/30/60;Faktoren2/2/2;einfacher Zuwachs je100%.
Gesamtfaktor8,Gesamtzuwachs700%;feste Startbasis15 ergibt0/100/300/700%.
Index auf100 ergibt100/200/400/800. Keine Zusage einer weiteren Verdopplung.

Getrennte additive Folge15/30/45/60, Grenzen15–60:
Euro-Schritte je15,Faktoren2/1,5/4/3,Änderungen100/50/33,333…%.
Linear gleiche Höhen,logarithmisch abnehmende Höhen.
Getrennte25%-Beispiele16→20 und64→80:Faktor1,25,Euro-Schritte4 und16.
15→30 ergibt+100%;30→15 ergibt−50%,gleiche Log-Entfernung in Gegenrichtung.
+20% dann−20% ergibt Faktor0,96,kein vollständiges Aufheben.

Getrennte normale OHLC-Beispiele A15/30/12/24 undB60/120/48/96:
B vierfache Preise,beide Körperfaktor1,6(+60%). Gemeinsamer Bereich12–120.
Körperhöhen inEuro9/36,Spannen18/72,Preis-Körperanteil jeweils50%.
Log-Körperanteil log(1,6)/log(2,5)≈51,294159%;keine Pixelmessung als Ersatz
für den inEuro-Abständen definierten Körperanteil. O/H/L/C und Körperrichtung
bei reinem Skalenwechsel unverändert,keine HA-Neuberechnung.

Reines Log-Modell nur positive endliche Preise und Grenzen;Null/negative Werte
abgewiesen. Lineare Zahlenabbildung erlaubt negative Zahlen undNull. Einfache
Prozentberechnung braucht positive Anfangsbasis,aber Endpreis0 ist gültig(−100%);
Index0 ebenfalls gültig. Darstellbarkeit nicht mit gültiger Division verwechseln.
Spezielle Vorzeichen-/Übergangsverfahren nicht als reine Log-Skala ausgegeben.

Geometrische Zwischenposition zwischen30/120 bei60;linearer Mittelpunkt75.
Gedachte gerade Endpunktlinien15→120 über drei Schritte:
linear15/50/85/120,logarithmisch15/30/60/120. Kein belegter Zwischenhandel.
Lineare Höhe30→60 im Bereich15–120:30/105≈28,6%derZeichenhöhe;
im Bereich15–75:30/60=50%,unveränderte Euro-Differenz.
Seitenverhältnis/Achsengrenzen verändern sichtbare Winkel,nicht Originaldaten.
Zeitachse unverändert;semilogarithmisch bedeutet hier nur Preisachse logarithmisch.

Zwei getrennte gedachte bestätigte Aktienkäufe,je2Aktien:
15→30 Kaufbetrag30,Differenz vorKosten30Euro;
60→120 Kaufbetrag120,Differenz vorKosten120Euro. Gleiches+100% bedeutet nicht
gleichen Eurobetrag. Chartschlüsse bestätigen keine eigene Ausführung;
Kosten/Produktregeln für echte Ergebnisse gesondert nötig.

Drei native Vergleichs-SVGs,je zwei klar bezeichnete Panels mit gleichen
Preisgrenzen und Höhe. Nur senkrechte Abbildung geändert;positive Werte,
zugängliche Beschreibungen,Einheiten,Textpfeile statt reiner Farbe.
Bestehender Fokus-/Zoomrahmen und eigenes lazy geladenes Grafikmodul.
24 neue Lektionen,zwölf Glossarbegriffe;Kurs gesamt184/92.
IDs,Fortschrittsschlüssel und bestehende Größenbudgets erhalten.

## Quellenprüfung und Modellgrenzen – Kapitel 9

„Datenquellen, Bereinigungen und fortlaufende Kontrakte“ ergänzt24 eigene
Lektionen, zwölf Glossarbegriffe und drei native SVG-Schaubilder. Gesamt208
Lektionen und104 Begriffe. Bestehende IDs bleiben erhalten.

Fachprüfung am02.10.2026:

- Nutzerseitige Murphy-Ausgabe, Appendix D: Konstruktionen fortlaufender
  Futures-Reihen und Wechselregeln. Keine Empfehlungen oder Beispiele übernommen.
- https://www.tradingview.com/support/solutions/43000685266-how-can-i-enable-backadjustment-for-continuous-futures/
  Additive historische Anpassung anhand eines Kontraktabstands; kein universeller Standard.
- https://www.tradingview.com/support/solutions/43000765406-what-are-stock-splits/
  Stück- und theoretische Preisänderung bei Splits.
- https://www.tradingview.com/support/solutions/43000590597-how-to-adjust-data-for-dividends/
  Historische Dividendenbereinigungen. Keine zwingende Marktpreisänderung oder stets
  steigende Gesamtrendite aus den Anbieterformulierungen abgeleitet.
- https://www.investor.gov/introduction-investing/investing-basics/glossary/ex-dividend-dates-when-are-you-entitled-stock-and
  Ex-Tag, Anspruch und Zahlung getrennt; keine US-Kalenderregeln verallgemeinert.

Alle Lehrtexte und Beispiele eigenständig. Keine WQT-Fachbände verwendet.

Eigene Modelle:

- Split:4 ×80 =8 ×40 =320 Euro. Später8 ×41 =328 Euro, +8 Euro bzw.+2,5%.
  Roh80 →41 =−48,75% wechselt die Stückbasis. OHLC78/82/76/80 wird39/41/38/40.
  Menge10 ×80 =20 ×40 =800 Euro ist eine erklärte Umrechnung, keine Anbieterregel.
- Separater Dividendenfall:8 ×51 =408 Euro; Ex:8 ×50 +8 Euro Anspruch =408 Euro.
  Zahlung ersetzt Anspruch durch Bargeld. Keine anderen Markteinflüsse, Steuern
  oder Kosten; realer Preisabschlag nicht zwingend exakt. Eigener historischer
  Faktor50/51 erklärt eine Preisumrechnung, keine Zahlung oder Wiederanlage.
- Futures: F-A72/74/76; F-B83 gleichzeitig an T3, danach84. Wechsel nach T3.
  Roh72/74/76/84: letzter Schritt8 =7 Kontraktabstand +1 Bewegung.
  Additiv alte Werte+7:79/81/83/84. Faktor83/76 erhält alte Verhältnisse,
  verändert Punktdifferenzen. Weitere Rückbereinigungen können die Geschichte
  erneut verändern; Regel, Datenstand und Export aufbewahren.
- Bestätigte eigene Ausführungen F-A72 →76, F-B83 →84 mit je einem Kontrakt:
  5 Punkte ×10 Euro/Punkt =50 Euro; vier Gebühren à2 Euro ergeben42 Euro.
  Die Kontraktlücke ist kein Haltegewinn. Produkt und Ausführungen sind fiktiv.

Modelle und Grafiken werden bei Bedarf geladen. Alle Bilder besitzen vollständige
Textbeschreibungen und die vorhandene Tastatur-/Vergrößerungsansicht. Tests prüfen
Werterhaltung, Anspruch/Geld-Trennung, Bereinigungsinvarianten und Kontraktpaare.
Browserprüfungen bei fehlendem Chromium ausdrücklich nicht ausgeführt.
