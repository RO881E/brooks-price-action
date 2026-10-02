# Kapitelplan: Orders und Ausführung

Eigenständiger zweiter Kurs der Marktgrundlagen. Zehn geplante Kapitel.
Die Sprachregeln aus MARKTGRUNDLAGEN_SPRACHE.md gelten auch hier.

| Kapitel | Thema | Stand |
| --- | --- | --- |
| 1 | Vom Handelswunsch zum Auftrag | 20 Lektionen verfügbar |
| 2 | Market-Orders und verfügbare Angebote | 22 Lektionen verfügbar |
| 3 | Limit-Orders und Warteschlangen | 22 Lektionen verfügbar |
| 4 | Stop- und Stop-Limit-Orders | Geplant |
| 5 | Gültigkeit und Mengenbedingungen | Geplant |
| 6 | Positionen schließen, OCO und Brackets | Geplant |
| 7 | Trailing Stops und bedingte Aufträge | Geplant |
| 8 | Slippage, Gebühren und Ausführungsqualität | Geplant |
| 9 | Handelswege, Technik und Fehlerfälle | Geplant |
| 10 | Einen Ausführungsplan selbst prüfen | Geplant |

## Quellen und Modellgrenzen

Die bereitgestellte Datei Trading and Exchanges von Larry Harris wurde für
Kapitel 1 im Abschnitt 4.1–4.2 (Orders and Order Properties, PDF-Druckseiten
4-1 bis 4-3) geprüft: Aufträge als Anweisungen, Produkt/Seite/Menge,
Preis- und Zeitbedingungen, offene Aufträge und Änderungen/Stornierungen.
Die bereitgestellte Fassung kennzeichnet sich als Draft Copy (2002).
Sie liefert hier allgemeine Begriffe, keine aktuellen Anbieterregeln.
Texte, Firmen, Zahlen, Quizfragen und Ablaufbeispiele sind eigenständig.
Keine Buch- oder Autorennamen in den sichtbaren Lerntexten.

Alle Aktienfälle sind erfunden. Eurobeträge meinen Aktienpreise je Stück.
Tagesende 17 Uhr und die genannten Restregeln sind ausdrücklich Übungsregeln.
Annahme durch einen Broker und Annahme am Handelsplatz können verschieden sein.
Änderungsanfragen und Stornierungsanfragen können sich mit Ausführungen
überschneiden. Bestätigte Stornierungen entfernen nur den offenen Rest.
Kein allgemeiner Anspruch auf Warteschlangenposition oder bestimmte Gebühren.

Die Fünfer-Ausführung zu 2 × 20,00 und 3 × 20,10 Euro ist ein eigener
Market-Fall (100,30 Euro; Durchschnitt 20,06 Euro). Der Abschlussfall ist
separat: 2 × 20,00 und 1 × 20,10 Euro, zwei Reststücke storniert,
0,90 Euro Kaufgebühr, insgesamt 61,00 Euro. Der Kurs beschreibt
Auftragsmechanik und empfiehlt keine Produkte oder Trades.


## Kapitel 2: Quellenprüfung und eigene Fälle

Geprüft wurden zusätzlich die bereitgestellten PDF-Druckseiten 2-3
(Market/Limit-Grunddefinition) und 18-2 bis 18-3 (18.1 Market versus
Limit Orders: Ausführungsdringlichkeit, Preis/Ausführungs-Abwägung und
Grenzen einfacher Spread-Regeln). Die ältere Draft-Fassung liefert
Begriffshintergrund; keine aktuellen Börsen- oder Brokerregeln.
Die sichtbaren Texte, Nera-Fälle und Rechnungen sind eigenständig.

22 neue Lektionen; Gesamtstand des Kurses: 42 Lektionen, 21 Glossarbegriffe.
Der Hauptkauf startet bei zwei Aktien zu 50,00 Euro, drei zu 50,20 Euro,
vier zu 50,50 Euro. Vier Stück kosten 200,40 Euro, im Schnitt 50,10 Euro.
Resttiefe: null / eins / vier. Plus 0,80 Euro Kaufgebühr = 201,20 Euro.
Die Abweichung von 0,40 Euro gegenüber dem vorherigen Ask steckt bereits
im Ausführungswert und wird nicht erneut als Gebühr addiert.

Alle Alternativfälle starten separat mit dem ausdrücklich beschriebenen
Buch. Sechs Stück im ursprünglichen Buch kosten 301,10 Euro; beim
separaten Verkauf kosten drei Gebote zu 49,90 und eines zu 49,70 insgesamt
199,40 Euro (Durchschnitt 49,85 Euro). Unverändertes Bid/Ask 49,90/50,00
für einen sofortigen Ein-Aktien-Hin-und-Rückhandel bedeutet minus 0,10 Euro
vor Gebühren, nicht zwei zusätzlich abzuziehende Spreads.

Feste Buchrechnungen nehmen keine Stornierungen, neuen Aufträge,
versteckten Angebote oder Zwischenänderungen an. Zeitfolgefälle nennen
Buchänderungen ausdrücklich. Restlöschung bei unzureichender Menge und
Systemschutzgrenze 50,25 Euro sind erfundene Übungsregeln.
Marktphase, Annahme, Ausführung und endgültiger Reststatus bleiben getrennt.


## Kapitel 3: Limit-Orders und Warteschlangen

22 neue Lektionen, zehn neue Glossarbegriffe. Gesamt: 64 Lektionen, 31 Begriffe.
Geprüfte bereitgestellte Quelle: Trading and Exchanges, PDF-Druckseiten 2-3
(Limitgrenze), 4-1 bis 4-3 (Auftrag/Rest/Änderungsrisiken), 6-1 bis 6-3
(Regelunterschiede, Preisvorrang und Zeitvorrang im dortigen Oral-Auction-Kontext).
Die elektronisch lesbare Draft-Datei enthält dort keinen vollständig ausgeführten
Abschnitt zum modernen elektronischen Matching. Die folgenden Regeln sind daher
bewusst eigene Lernmodelle, keine Behauptung über einen bestimmten Handelsplatz.
Keine Buchnamen oder Autorennamen in sichtbaren Lerntexten.

Hauptmodell: höherer Bid/niedrigerer Ask zuerst, innerhalb derselben Stufe
frühere Annahme zuerst, Ausführung zum Preis des ruhenden Auftrags.
Nur sichtbare Mengen, keine Reserven, keine gleichzeitigen Ankünfte.
A drei, B zwei, Lea vier Stück bei 40,00 Euro. Der erste Verkäufer liefert vier:
A drei, B eins, Lea null. Der nächste liefert drei: B eins, Lea zwei.
Lea kauft zwei für 80,00 Euro und storniert ihren Rest von zwei bestätigt.
Kein Zwischenhandel während dieser Stornierung. Einmalige Kaufgebühr 0,60 Euro:
80,60 Euro belastet. Zeitfolgen und getrennte Alternativen ausdrücklich bezeichnet.

Separater sofortiger Kauf: zwei Stück 39,90 plus zwei 40,00 = 159,80 Euro,
Durchschnitt 39,95 Euro. Separater Teilkauf: zwei 39,90 plus eines 40,00 =
119,80 Euro, ein Stück ruht. Separater Verkauf: zwei 40,10 plus zwei 40,00 =
160,20 Euro. Neuer besserer Bid D zwei bei 40,10 vor niedrigeren alten Geboten.
Neuer C am gleichen Preis liegt hinten. Bestätigte B-Stornierung verringert
Wartemenge von fünf auf drei ohne Trade. Preisänderung erhält im Lernmodell
neue Annahmezeit. Separates Proportionalmodell: A sechs, Lea vier, Verkäufer
fünf, daher A drei und Lea zwei; keine Rundung nötig. Erfundenes Tickmodell:
0,10 Euro, ungültige 40,03 werden abgelehnt. Diese Regeln nicht generalisieren.


Die zusätzliche Gliederung überschritt zunächst das bestehende 120-kB-gzip-Budget.
Der Build kodiert Objektfelder nun als flache Schlüsselindex/Wert-Paare statt
als wiederholte JSON-Objektschlüssel. Der Decoder stellt dieselben öffentlichen
Gliederungen vollständig wieder her und liest weiterhin die ältere Form.
Keine Änderung an gespeicherten Fortschritten oder Kurs-/Schrittkennungen.
Roundtrip-Tests aller Produktions- und Testkurse, Marker-/Prototyp-Schlüssel
und fehlerhafter Paarfolgen prüfen die Änderung. Das Größenlimit bleibt gleich.
