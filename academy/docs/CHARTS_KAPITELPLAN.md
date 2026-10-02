# Kapitelplan: Charts lesen

Dritter Kurs der Marktgrundlagen. Zehn geplante Kapitel. Direkter Einstieg ohne
abgeschlossene andere Kurse; Sprache nach MARKTGRUNDLAGEN_SPRACHE.md.

| Kapitel | Thema | Stand |
| --- | --- | --- |
| 1 | Vom Geschäft zum Chartbild | 20 Lektionen verfügbar |
| 2 | Linien, Balken und Kerzen sicher vergleichen | Geplant |
| 3 | Zeit-Bars, Tick-Bars und Volumen-Bars | Geplant |
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
