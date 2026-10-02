# Kapitelplan: Orders und Ausführung

Eigenständiger zweiter Kurs der Marktgrundlagen. Zehn geplante Kapitel.
Die Sprachregeln aus MARKTGRUNDLAGEN_SPRACHE.md gelten auch hier.

| Kapitel | Thema | Stand |
| --- | --- | --- |
| 1 | Vom Handelswunsch zum Auftrag | 20 Lektionen verfügbar |
| 2 | Market-Orders und verfügbare Angebote | 22 Lektionen verfügbar |
| 3 | Limit-Orders und Warteschlangen | 22 Lektionen verfügbar |
| 4 | Stop- und Stop-Limit-Orders | 22 Lektionen verfügbar |
| 5 | Gültigkeit und Mengenbedingungen | 22 Lektionen verfügbar |
| 6 | Positionen schließen, OCO und Brackets | 22 Lektionen verfügbar |
| 7 | Trailing Stops und bedingte Aufträge | 22 Lektionen verfügbar |
| 8 | Slippage, Gebühren und Ausführungsqualität | 22 Lektionen verfügbar |
| 9 | Handelswege, Technik und Fehlerfälle | 22 Lektionen verfügbar |
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


## Kapitel 4: Stop und Stop-Limit

22 neue Lektionen und neun Begriffe; Gesamt: 86 Lektionen, 40 Begriffe.
Die bereitgestellte Murphy-EPUB wurde in OEBPS/xhtml/26_chapter016.xhtml,
Abschnitt Types of Orders, geprüft (Index verweist auf Druckseite 404):
Stop als neue Position/Verlustbegrenzungsabsicht/Gewinnschutzabsicht,
Kauf oberhalb und Verkauf unterhalb des aktuellen Markts. Alte allgemeine
Formulierungen werden nicht als Ausführungsgarantie übernommen.
Die bereitgestellte Harris-Draft-PDF enthält lediglich verstreute Stop-Nennungen;
sie ist hier nicht als ausführliche Stopmechanik-Quelle ausgewiesen.

Ergänzende Primärquellen, geprüft 2026-10-02:
- Investor.gov, Stop, Stop-Limit, and Trailing Stop Orders – Investor Bulletin:
  https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-15
- FINRA Rule 5350:
  https://www.finra.org/rules-guidance/rulebooks/finra-rules/5350

Grundprüfung: Stop aktiviert Market, Stop-Limit aktiviert Limit. Der Stoppreis
ist keine Preiszusage; ein Limit kann ungefüllt bleiben. Der US-Wertpapierkontext
von FINRA definiert die Bezeichnung Stop anhand von Transaktionen; anders
getriggerte bedingte Aufträge benötigen dort eine unterscheidbare Bezeichnung.
Keine allgemeine Übertragung dieser Namensregel auf Futures oder andere Länder.
Texte, Zahlen, Unternehmen und Fragen sind eigenständig; keine Buch- oder
Autorennamen in sichtbaren Lerntexten.

Hauptmodell: neue bestätigte Trades nach Annahme derselben Quelle;
Sell bei Trade <= Stop, Buy bei Trade >= Stop; zuverlässige Überwachung.
Ausführung erst anschließend zum unveränderten angegebenen Buch, keine
weiteren Aufträge oder Reserven. Hauptverkauf vier Stück, Stop 58, Trade 57,90;
zwei Bid-Stücke 57,80, zwei 57,50: 230,60 Euro, Durchschnitt 57,65.
Kauf vier zu 60 plus 0,80 Kaufgebühr; Verkauf minus 0,80 Verkaufsgebühr:
229,80 minus 240,80 = minus 11,00 Euro. 1,40 Euro Abweichung zur Stopreferenz
steckt bereits im Erlös, keine zusätzliche Gebühr.

Separate Stop-Limit-Alternative: Stop 58, Limit 57,80; zunächst nur zwei
für 115,60 verkauft, zwei gehalten und offen. Bei ausdrücklich späteren
Geboten 57,90 werden diese für 115,80 verkauft: 231,40 Gesamterlös.
Bereits aktivierte Limits kehren im Modell bei Erholung nicht zum Stop zurück.
Sprungfall separat: Trade 55, danach zwei Bid-Stücke 54,90, zwei 54,50:
218,80 Erlös. Stop-Limit bleibt bei Geboten unter 57,80 vollständig ungefüllt.
Kaufalternative: Stop 61, Trade 61,20; Ask eins 61,30 und zwei 61,50:
184,30 Wert, gerundet 61,43 Durchschnitt. Kauflimit 61,40 kauft dagegen nur eins.

Restregel: aktive Limits dürfen weiter ruhen. Ablauf 17 Uhr und Überwachung
9–17 Uhr sind eigene Übungsbedingungen. Kein universeller Handelskalender,
keine zugesicherte Plattformüberwachung. Manuelle Schließung löscht andere
Aufträge nur nach ausdrücklich bestehender und bestätigter Verknüpfung.


## Kapitel 5: Gültigkeit und Mengenbedingungen

22 neue Lektionen, zehn Begriffe. Gesamt: 108 Lektionen, 50 Glossarbegriffe.
Bereitgestellte Harris-PDF, Abschnitt 4.1–4.2, Druckseiten 4-1 bis 4-3:
Preis-, Zeit- und Teilmengenbedingungen, offener Rest und Stornierungsrennen.
Ergänzende Primärquellen geprüft 2026-10-02:
- FINRA, Trading Terms: Time Parameters and Qualifiers on Stock Orders:
  https://www.finra.org/investors/insights/time-parameters-qualifiers-stock-orders
- Charles Schwab, Stock order types and conditions: An overview:
  https://international.schwab.com/content/stock-order-types-and-conditions-overview

Grundbegriffe: DAY befristet, GTC kann Höchstdauer haben, IOC Teilmenge sofort
mit Restlöschung, FOK volle Menge sofort, AON volle Menge mit eigener Zeitregel.
Mindestmengen und Ausführungswege benötigen genaue Zusatzregeln. Die konkrete
Verfügbarkeit ist anbieter-/produktspezifisch. Quellen liefern keine aktuellen
Zusagen für eine Futuresplattform. Alle Texte, Zahlen und Firmen eigenständig.
Keine Buch-/Autorennamen in sichtbaren Lerntexten.

Hauptbuch: Ask zwei 30,00, eins 30,10, zwei 30,20, fünf 30,40 Euro.
Sechs kaufen mit Limit 30,20, DAY und erlaubten Teilmengen: fünf ausgeführt
für 150,50 Euro, eine ruht und läuft bestätigt ab. Einmalige Kaufgebühr 0,50:
151,00 Euro belastet. Mengenbilanz sechs = fünf ausgeführt + eins abgelaufen.
Alternativen starten jeweils unabhängig neu: IOC fünf gekauft/eins gelöscht;
FOK sechs verlangt null gekauft/sechs gelöscht; FOK fünf verlangt alle fünf
für 150,50 gekauft; AON+DAY sechs verlangt zunächst null, wartet beim Anbieter,
später ein neuer Ask 30,20 bei unverändert erhaltenen alten Angeboten:
sechs gemeinsam für 180,70. Kein Zusammenzählen verschiedener Zeitbilder.

Eigene Kalender: DAY Ende 17 Uhr, Session 9–17 Uhr Marktzeit. GTC maximal
Ende der dritten Lernsession; GTD Mittwoch 15 Uhr, Grenzzeit nicht mehr gültig.
Keine realen Anbieterhöchstdauern oder Börsenkalender behauptet. Gültigkeit
ist keine automatische Nachtfreigabe und keine Positionsschließung.
Separates Stornierungsrennen: letzte Aktie vor Verarbeitung zu 30,20 gekauft,
sechs insgesamt für 180,70. Separate Erstschritt-Mindestmenge drei:
fünf zunächst erlaubt, zwei nicht; nach erfülltem ersten Schritt darf im
Tagesfall ein kleiner Einserrest noch handeln. Diese Regel nicht verallgemeinern.
Einzelweg-FOK mit A drei/B drei darf im Modell nicht zusammenführen und kauft null.
FOK darf im normalen Buchmodell mehrere zulässige Preisstufen nutzen.
IOC/FOK während einer Pause im eigenen Modell abgelehnt, kein universeller Ablauf.


## Kapitel 6: Positionen schließen, OCO und Brackets

22 eigene Lektionen, zehn Begriffe. Gesamt: 130 Lektionen, 60 Glossarbegriffe.
Die bereitgestellte Harris-PDF behandelt in Abschnitt 4.1–4.2 Auftragsbedingungen
und in 26.1 (Druckseite 26-3) verknüpfte, von anderen Ausführungen abhängige Orders.
Sie ist hier Hintergrund für Auftrags- und Statusdenken, keine Quelle für heutige
OCO-/Bracket-Plattformregeln. Ergänzende Primärquellen geprüft 2026-10-02:
- Fidelity, Conditional order types:
  https://www.fidelity.com/learning-center/trading-investing/trading/conditional-order-types
- IBKR, Define Order Preset Value, OCA Group Defaults:
  https://ibkrguides.com/traderworkstation/define-order-preset-value.htm
- Schwab, How to Use Advanced Stock Order Types:
  https://www.schwab.com/learn/story/how-to-use-advanced-stock-order-types
- IBKR TWS API, Placing Orders (ältere, als deprecated markierte Dokumentation;
  nur Beleg einer möglichen Aktivierung nach vollständigem Parent-Fill):
  https://interactivebrokers.github.io/tws-api/order_submission.html

Alle Firmen, Zahlen, Texte und konkreten Abläufe eigenständig. Keine Buch- oder
Autorennamen in sichtbaren Lerntexten. Keine aktuellen Futuresplattformzusagen.

Hauptposition sechs Nera-Aktien zu 40,00, Kaufwert 240,00 Euro. Zielverkaufslimit
42,00; Stop-Market-Schwelle 38,00, neuer zulässiger letzter Handel <= 38,00;
Session 9–17 Uhr Marktzeit. Eigene Gebühr einmal 0,60 je ausgeführtem Kauf- bzw.
Ausstiegsauftrag, auch bei mehreren Teilfills; keine Löschgebühr, Steuern oder
weiteren Kosten im Modell. Zielzweig: Bids zwei 42,20 und vier 42,00 ergeben
252,40 Erlös, 12,40 brutto, 11,20 netto. Getrennter Stopzweig: Last 37,90 löst
aus, Bids zwei 37,80 und vier 37,60 ergeben 226,00 Erlös, -14,00 brutto,
-15,20 netto. Schwellenannahme zu 38,00 ergibt -13,20 netto, Differenz 2,00.

Haupt-OCO: Teilfill reduziert Gegenmenge, voller Ausstieg löscht Gegenorder.
Der eigene Lernanbieter bestätigt Gruppenänderungen vor weiterem möglichen
Handel. Das ist eine ausdrückliche geordnete Übungsannahme, keine allgemeine
Garantie atomarer Verarbeitung. Zwei Zielverkäufe => Position vier, Zielrest
vier, bestätigter Stop vier. Getrennte Alternative: erster Fill löscht Stop,
Zielrest vier bleibt. Getrenntes Verzögerungsmodell erlaubt beide Verkäufe vor
Löschbestätigung: sechs - sechs - sechs = Short minus sechs. In Short- und
Umkehrfällen sind Kontoerlaubnis und erforderliche Leihe ausdrücklich gegeben.

Bracket-Hauptregel: Parent sechs Limit 40,00; Children zunächst inaktiv und erst
nach vollem Parent-Fill aktiv, danach Haupt-OCO. Zwei Parent-Fills lassen zwei
Aktien ohne aktive Children stehen. Parentrest vier löschen => Bestand zwei;
eigene Zusatzregel beendet auch die inaktiven Children. Getrenntes Fehlermodell:
Parent voll, Ziel angenommen, Stop abgelehnt, kein Kauf-Rollback. Manuelle
zusätzliche Ausstiege sind im jeweiligen Modell unabhängig und löschen alte
Children nicht. Bei manueller Teilmenge zwei bleiben vier Aktien; bestätigte
Änderung beider Children von sechs auf vier nur unter expliziter Annahme ohne
weiteren Trade im Änderungsfenster. Reduce-only beim eigenen Anbieter prüft
jede Verarbeitung gegen den aktuellen Bestand und beendet Überschuss; keine
Aussage universeller Produktunterstützung. Stop-Limit-Alternative 38,00/37,80,
Last 37,70, Bids nur 37,60 => null Verkäufe, Position sechs. OCO erst bei Fill,
nicht bei Trigger, bleibt im Modell nach Umwandlung erhalten. Alternativen
beginnen unabhängig; keine Vermischung ihrer Trades oder Kosten.


## Kapitel 7: Trailing Stops und bedingte Aufträge

22 eigene Lektionen, zehn neue Begriffe. Gesamt: 152 Lektionen, 70 Glossarbegriffe.
Die bereitgestellte Harris-PDF wurde erneut in 4.1–4.2 (Druckseiten 4-1 bis 4-3)
auf Anweisungen, Zeit-/Preisbedingungen und Änderungsrennen geprüft. Abschnitt
26.1 (Druckseite 26-3) behandelt komplexe bedingte Orderverarbeitung. Sie dient
als Hintergrund, nicht als Beleg heutiger konkreter Trailing-Plattformregeln.
Ergänzende Primärquellen geprüft 2026-10-02:
- Schwab, Setting Trailing Stops on thinkorswim desktop:
  https://www.schwab.com/learn/story/setting-trailing-stops-on-thinkorswim-desktop
- IBKR, Trailing Stop Limit (Dokumentation und Unterricht):
  https://www.interactivebrokers.com/docs/general/order-types/trailing-stop-limit
  https://www.interactivebrokers.com/campus/trading-lessons/trailing-stop-limit/
- Fidelity, Conditional order types:
  https://www.fidelity.com/learning-center/trading-investing/trading/conditional-order-types

Keine Quellenbeispiele übernommen. Firmen, Zahlen, Kalender, Texte und konkrete
Verarbeitungsregeln eigenständig. Keine Buch-/Autorennamen in sichtbaren Lektionen.
Die Schwab-Seite enthält bei der Short-Beschreibung eine widersprüchliche Angabe
zur Orderseite; für den Rückkauf gilt die bereits geprüfte Bestandsbilanz aus
Kapitel 6: negative Position wird durch Käufe geschlossen. Keine solchen Fehler
übernommen. Keine aktuellen Plattformzusagen oder Rendite-/Preisgarantien.

Hauptfall: vier Vela-Aktien zu 60,00, Kaufwert 240,00. Aktivierung 10 Uhr Marktzeit,
Last-Start 60,00, früheres Tageshoch 65,00 ausgeschlossen. Zulässige neue Lasts
61,00, 60,80, 63,00, 62,40, 61,00. Referenzhoch monotones Maximum seit Start;
Schwelle Referenzhoch minus 2,00: 58,00 anfangs, danach 59,00, 59,00, 61,00,
61,00. Last <= Schwelle löst einmalig aus und beendet die Nachziehphase.
Market-Verkauf vier: Bid eine 60,90 plus drei 60,70 = Erlös 243,00, Durchschnitt
60,75, brutto +3,00, netto +2,20. Eigene Gebühr einmal 0,40 je tatsächlich
gehandeltem Kauf-/Verkaufsauftrag, auch bei Teilfills; keine Steuern/weiteren
Kosten. Lückenzweig unabhängig: schon bestätigte Schwelle 61,00, neuer Last59,00,
Bids eine58,80/drei58,60 =>234,60 Erlös, brutto -5,40, netto -6,20. Teilzweig:
eine60,90 zunächst, Marketrest drei bleibt gemäß eigener DAY-Warteregel aktiv;
Last70,00 reaktiviert den Trail nicht; spätere drei60,70 ergeben denselben
Gesamterlös, Verkaufsgebühr bleibt einmal0,40. Kein Zusammenzählen der Zweige.

Prozentfall Start100,00, fünf Prozent=>95,00; Hoch108,00=>102,60, Rückgang104,00
lockert nicht. Fester Abstand5,00 ergibt bei108,00 Schwelle103,00. Eigenes
Stopraster0,05 mit ausdrücklichem Abrunden: Hoch101,20, Abstand2,5%=2,53,
Rohschwelle98,67=>98,65 bestätigt. Short-Zweig minusdrei mit erlaubter Leihe:
Referenztief50,00/49,00/47,00, Abstand1,00, Schwellen51,00/50,00/48,00;
47,60 lockert nicht, 48,00 löst nach >= eine Market-Kauforder drei aus.
Quellenvergleich beginnt mit getrennten bestätigten Referenzhochs63,00 und
Schwellen61,00: neues Datenbild Last62,40/Bid60,90/Ask61,10. Nur Bid-Modell
löst aus; keine Bid-Historie aus Last-Meldungen rekonstruiert.

Trailing-Limit-Alternative: Nachziehbetrag2,00, Limitversatz0,30 unter Schwelle.
Start58,00/57,70, Hoch63,00=>61,00/60,70. Trigger erzeugt festes Verkaufslimit
60,70 ohne erneutes Trailing. Bids nur60,60=>null verkauft, später zwei60,80=>
Positionzwei, Limitrestzwei. Keine Garantie rechtzeitigen vollständigen Ausstiegs.

Indexbedingung: neue zulässige Mira-Meldung >=1.000 aktiviert einmalig Kaufvier
Vela Limit60,50; Ask60,80=>kein Kauf. Levelregel verlangt keinen Schwellenwechsel,
keine wiederholte Aktivierung oder automatische Rücknahme beim späteren Rückgang.
UND-Regel prüft aktuellen vollständigen Datenstand ohne historische Wahr-Speicherung:
9:59/1.002 nein, 10:00/999 nein, 10:01/1.002 ja. Signalfrist bis vor16Uhr,
Folgeorder DAY bis vor17Uhr: Trigger15:59, Kauf eines Stücks16:30, drei Reste
laufen17Uhr ab, Bestandeins bleibt. Haupt-Trail auf Anbieter-Server mit weiter
verfügbaren Daten läuft bei Bildschirm-Ausfall; getrenntes lokales Modell stoppt
Prüfungen bei ausgeschaltetem Gerät. Fehlerzweig: Signal erfüllt, unzulässige
Orderkombination abgelehnt, Positionnull, kein Auto-Retry. Änderungen erst nach
Bestätigung wirksam. Sämtliche konkreten Abläufe ausdrücklich Lernmodelle.


Die gemeinsame Gliederungsdatei überschritt mit Kapitel 7 das bestehende Limit.
Sie ist nun in statisch importierte Dateien je Kurs aufgeteilt. Der synchrone
Katalog für Suche, Freischaltung und gespeicherten Fortschritt bleibt vollständig
verfügbar. Das 120-kB-gzip-Limit gilt für jeden Kursbaustein; die gemeinsame
Offline-Grenze von 1,5 MB bleibt ebenfalls unverändert. Die Prüfung zeigt auch
Gesamtsumme und größtes Kursstück. Tests vergleichen den zusammengefügten
Produktions- und E2E-Katalog exakt mit den vollständigen Inhaltsgliederungen.


## Kapitel 8: Slippage, Gebühren und Ausführungsqualität

22 eigene Lektionen, zehn neue Begriffe. Gesamt: 174 Lektionen, 80 Glossarbegriffe.
Bereitgestellte Harris-PDF: Kapitel 21, Einleitung und Abschnitt 21.1,
Druckseiten 21-1 bis 21-2. Geprüft auf explizite/implizite Kosten, hypothetische
entgangene Möglichkeiten und die Abgrenzung von Strategie und Umsetzung.
Ergänzende Primärquellen geprüft 2026-10-02:
- Fidelity, Commitment to Execution Quality:
  https://www.fidelity.com/trading/execution-quality/overview
- FINRA, Best Execution, historischer Bericht 2021 (nur zur Einordnung mehrerer
  Qualitätsdimensionen und Interessenkonflikte, keine aktuelle Rechtsdarstellung):
  https://www.finra.org/rules-guidance/guidance/reports/2021-finras-examination-and-risk-monitoring-program/best-execution
- Investor.gov, Understanding Fees:
  https://www.investor.gov/introduction-investing/getting-started/understanding-fees

Firmen, Texte, Zahlen und Tarife vollständig eigenständig. Keine Anbieterpreise,
Werbekennzahlen oder Quellenbeispiele übernommen. Kein rechtlicher Anbieter-
vergleich. Keine Buch-/Autorennamen in sichtbaren Lerntexten.

Hauptkauf: sechs Arvo-Aktien; Entscheidungsbild Bid24,90/Ask25,10, Mitte25,00.
Asks zwei25,10/vier25,25 => Kaufwert151,20, Durchschnitt25,20. Abweichung zur
Mitte1,20, zum Ausgangsask0,60. Zerlegung0,60 Mitte->Ask plus0,60 Ask->Fill:
keine Addition überlappender Benchmarks. Haupttarif je ausgeführtem Auftrag
0,30 fest +0,02 je ausgeführter Aktie, plus vollständig weitergereichte
Handelsplatzgebühr0,01 je Aktie. Kein Entgelt für vollständig unausgeführte
Orders im Modell; Teilfills verändern feste Auftragsgebühr nicht. Kaufgebühren
0,42+0,06=0,48, Belastung151,68. Hauptverkauf drei25,60/drei25,50 =>153,30,
Durchschnitt25,55; Verkaufsreferenz25,60 =>0,30 ungünstige Abweichung. Dieselben
Gebühren0,48, Gutschrift152,82. Brutto2,10, netto1,14, Bestandnull, keine Reste.
Gewinnschwelle (151,20+0,96)/6=25,36 bei vollständigem Verkauf und gleichem
Tarif. Keine weiteren Kosten oder Steuern im Modell. Historischer Spread oder
Slippage wird niemals zusätzlich von tatsächlich berechneten Handelswerten
abgezogen; Preisvergleich ist keine neue Kontobuchung.

Unabhängige Alternativen: sechs Käufe24,98 =>149,88, zur Mitte0,12 günstiger,
eigenes verändertes Angebot, nicht unverändertes Hauptbuch. Sechs Käufe25,08
gegen zeitgleichen Vergleichsask25,10 verbessern0,12, gegen Mitte25,00 kosten
sie0,48 mehr. Ankunftsmitte25,15 vs Entscheidung25,00 beobachtete Bewegung0,15,
kein Kausalitätsnachweis. Dieselben Hauptfills auf zwei Kennungen => Gebühren
0,78, Belastung151,98, Unterschied0,30; keine Zusage, dass echtes Orderteilen
die Preise unverändert lässt. Separater Mindesttarif max(0,30;0,05*q), ohne
weitere Gebühren: zwei=>0,30, acht=>0,40. Nullprovision mit weiterhin0,01
Handelsplatz je Stück =>151,26. Unausgeführtes Limit25,00, spätere Referenz26,00:
gedachte sechs Käufe und Verkäufe=>6,00 vor Kosten, Ausführbarkeit nicht
bewiesen, kein tatsächlicher Gewinn/Abzug. Teilbericht zwei von sechs25,10,
vier offen, Quote1/3; kein vollständiger Vergleich mit Hauptausführung.

Eigene synchronisierte Uhr: Senden100ms, Annahme120ms, erster Fill170ms,
letzter230ms =>70ms bis erstem,130ms bis letztem. Wegvergleich gleicher Menge:
A sechs Durchschnitt25,20+Gebühren0,48=>151,68; B sechs25,15+0,90=>151,80,
A um0,12 geringere Belastung. Sammelbericht sechs25,20 und zwei25,10=>201,40
für acht, Durchschnitt25,175, Abweichung zur gemeinsamen vorherigen25,00
insgesamt1,40. Keine Rundung der tatsächlichen Einzelwerte durch gerundete
Durchschnitte. Bewertungsrahmen umfasst Referenz, Kosten, Vollständigkeit,
Zeit und vergleichbare Orderarten/Marktphasen. Alternativen nicht vermischt.


## Kapitel 9: Handelswege, Technik und Fehlerfälle

22 eigene Lektionen und zehn neue Begriffe. Gesamt: 196 Lektionen,
90 Glossarbegriffe. Die bereitgestellte Harris-PDF wurde in Kapitel 5,
Einleitung und Abschnitt 5.1, Druckseiten 5-1 bis 5-2 geprüft: Informations-
und Auftragswege, Rückmeldungen, offene Orders und Marktdaten als eigene Systeme.
Die ältere Draft-Fassung begründet keine aktuellen Anbieterregeln.
Ergänzende Primärquellen geprüft am 2026-10-02:
- Interactive Brokers, Order Placement Considerations:
  https://www.interactivebrokers.com/docs/tws-api/doc/orders/place-order/order-placement-considerations
- Interactive Brokers, Error Codes:
  https://www.interactivebrokers.com/docs/tws-api/doc/error-handling/error-codes
- Interactive Brokers, dokumentierte Verbindungs- und Statusmeldungen:
  https://interactivebrokers.github.io/tws-api/message_codes.html

Die Quellen wurden zur Abgrenzung von Meldungen, Fehlern, Auftragsannahme,
Verbindungsabbruch und Ausführung geprüft. Sichtbare Texte, Firmen, Aufträge,
Tarife und Ereignisse sind vollständig eigenständig. Keine API-Codes oder
aktuellen Anbieterzusagen werden in den Lernfällen behauptet.

Hauptfall Mira/Elva: Startgeld 500,00; vorher bestätigter Kauf sieben zu40,00,
Gebühr0,50 => Geld219,50, Bestand7. Verkaufsorder S17 sieben, Limit40,20.
Brokerannahme und Platzannahme getrennt; App-Verbindung bricht ab, im Modell
kein automatischer Storno. E1 zwei zu40,30; Stornoanfrage; E2 drei zu40,20 vor
wirksamem Storno; Rest2 bestätigt storniert. Identische Wiederholung E1 ist
kein neuer Handel; keine Handelskorrekturen im Modell. Kumulierte Stände2 und5
sind nicht zu7 zu addieren; neu hinzu3. Verkauf80,60+120,60=201,20,
Gebühr einmal0,40+fünf*0,01=0,45; Gutschrift200,75. Endgeld420,25,
Bestand2, Orderrest0. Geldstand ist kein Gesamtgewinn bei offenen Aktien.
Empfangszeit und Ereigniszeit werden unterschieden, fehlende Zeiten nicht erfunden.

Eigenständige Alternativen: vier Rila-Käufe auf West/Ost zu je2*25,00 und
2*25,10 =>100,20; je Teilauftrag0,20 plus0,01 je Aktie =>0,44 Gebühren,
Belastung100,64. Feste erfundene Routing-Aufteilung, kein Optimalitätsanspruch.
Direkter Süd-Weg nur1zu25,00, drei weiter offen; kein vergleichbarer voller Kauf.
Timeout-Startvariante kennt weder Annahme noch Ausführung und bleibt ungeklärt.
Noah kauft nach doppeltem Versand K21/K22 jeweils7 =>14 statt Ziel7; keine
vorausgesetzte Wiederholungserkennung. Datenalter10:01:10 minus10:00:40=30s,
gleiche Uhrzeitbasis; keine allgemeine Fehlergrenze. Abgelehnte Änderung auf40,50
lässt laut eigener Regel fünf offene Verkäufe bei40,20 bestehen. Separat R31
Limit18,03 abgelehnt bei0,05-Preisstufe, keine automatische Rundung oder Ausführung.

Eigene Handelspause erlaubt Annahme, keine Ausführung. Lokale Prüfung L fällt
mit Laptop aus; entfernte Prüfung S bleibt im Modell aktiv und kann bei38,90
unter Schwelle39,00 eine Folgeorder erzeugen, ohne Ausführungs-/Preisgarantie.
Zwei Geräte im selben Konto zeigen denselben S17; neue Klicks können neue
Orders erzeugen. Simulation bleibt getrennt vom Live-Konto. Ersatzweg nur mit
vorher verifizierten Möglichkeiten; keine Sofortbearbeitung zugesagt, kein
Versand an reale Personen, keine Passwörter in Protokollen.
