/*
 * Bibliothek: Themengebiete und ihre Kurse. Einzige Liste dafür – die Navigation
 * (`components/LibraryView.tsx`) und der Themenkatalog (`docs/THEMENKATALOG.md`, erzeugt mit
 * `npm run catalog`) lesen nur von hier. Ein neues Thema ist ein weiterer Eintrag; Anleitung und
 * Grenzen stehen in `docs/DESIGN_BIBLIOTHEK.md`.
 *
 * `available` heißt: Der Kurs hat Inhalt und ist als Kurs der App registriert (`units.ts`).
 * `planned` heißt: nur angekündigt, ohne Inhalt – die Karte ist sichtbar, aber nicht anklickbar.
 * Titel, Beschreibungen und Unterthemen sind eigene, knappe Formulierungen und versprechen keine Inhalte.
 */

export type CourseStatus = 'available' | 'planned';

export interface LibraryCourse {
  /** Stabile ID; bei `available` die ID des registrierten Kurses (`courseInfo.id`). */
  id: string;
  title: string;
  /** Kurzer Zusatz, z. B. „Teil 1 von 3“. */
  label?: string;
  description: string;
  status: CourseStatus;
  /** Mögliche Kapitel oder Lektionen des Kurses, in sinnvoller Reihenfolge. */
  subtopics: string[];
}

export interface LibrarySubject {
  id: string;
  title: string;
  description: string;
  /** Welche Übungsformen der App zu diesem Gebiet passen (für den Themenkatalog). */
  exercises: string;
  courses: LibraryCourse[];
}

const planned = (id: string, title: string, description: string, subtopics: string[], label?: string): LibraryCourse => ({
  id,
  title,
  ...(label ? { label } : {}),
  description,
  status: 'planned',
  subtopics,
});

export const librarySubjects: LibrarySubject[] = [
  {
    id: 'market-basics',
    title: 'Marktgrundlagen',
    description: 'Wie Börsen, Orders und Charts funktionieren – das Fundament für alles Weitere.',
    exercises: 'Fragen, Begriffe-Memory, „Ordne die Schritte“ (z. B. Weg einer Order).',
    courses: [
      {
        id: 'how-exchanges-work',
        title: 'Wie Börsen funktionieren',
        label: 'Trading von null · Kapitel 1–2 verfügbar',
        description: 'Kapitel 1 und 2: Handel, Teilnehmer, Preisbildung und Produktarten. Weitere Kapitel folgen.',
        status: 'available',
        subtopics: [
          'Börse, außerbörslicher Handel (OTC), Market Maker',
          'Auktionsprinzip: Angebot, Nachfrage, Preisfindung',
          'Marktteilnehmer: Privatanleger, Fonds, Banken, Hochfrequenzhandel, Notenbanken',
          'Liquidität, Geld-Brief-Spanne (Spread), Markttiefe',
          'Handelszeiten und Sessions (Asien, Europa, USA), vor- und nachbörslicher Handel',
          'Eröffnungs- und Schlussauktion, Handelsunterbrechungen bei starken Schwankungen',
        ],
      },
      planned('orders-and-execution', 'Orders und Ausführung', 'Welche Orderarten es gibt und was bei der Ausführung passiert.', [
        'Market-, Limit-, Stop- und Stop-Limit-Order',
        'OCO- und Bracket-Order, Trailing Stop',
        'Gültigkeit (Tag, bis auf Widerruf), Teilausführung',
        'Slippage, Gebühren, Ausführungsqualität, Wahl des Handelsplatzes',
      ]),
      planned('reading-charts', 'Charts lesen', 'Charttypen, Bar-Arten, Zeitebenen und Skalen im Überblick.', [
        'Charttypen: Linie, Balken, Kerzen, Heikin-Ashi, Renko, Point & Figure',
        'Zeit-, Tick-, Volumen- und Range-Bars',
        'Zeitebenen und wie sie zusammenhängen',
        'Lineare und logarithmische Skala',
        'Bereinigte Kurse (Splits, Dividenden), fortlaufende Futures-Charts',
      ]),
    ],
  },
  {
    id: 'price-action',
    title: 'Price Action und Marktstruktur',
    description: 'Kursbewegungen Bar für Bar lesen: Kontext, Setups und Entscheidungen.',
    exercises: 'Chart-Trainer, „Finde den Bar“, „Ordne die Schritte“, Fragen.',
    courses: [
      {
        id: 'price-action-trends',
        title: 'Price Action: Trends',
        label: 'Teil 1 von 3',
        description: 'Vom einzelnen Bar bis zum vollständigen Trendtag.',
        status: 'available',
        subtopics: [
          'Price Action als Entscheidungsmodell, Stärkezeichen, Bars zählen',
          'Das Spektrum von Trend bis Range',
          'Trendbars, Dojis und Klimaxe',
          'Ausbrüche, Ranges, Tests und Umkehrbewegungen',
          'Signal-Bars, Entry-Bars, Setups und Kerzenmuster',
          'Reversal-Bars und weitere Signal-Bars im Kontext',
          'Outside-Bars, warum der Bar-Schluss zählt',
          'Vergleichscharts (ETFs, inverse Charts)',
          'Zweite Einstiege im Kontext',
        ],
      },
      planned(
        'price-action-ranges',
        'Price Action: Ranges',
        'Ausbrüche, Gaps, Unterstützung und Widerstand, Pullbacks, Ranges und Trade-Management.',
        [
          'Ausbrüche und ihr Anschluss',
          'Kurslücken (Gaps) und Messbewegungen',
          'Magnete: Unterstützung, Widerstand, Kursziele',
          'Pullbacks und Flaggen',
          'Trading Ranges und ihre Ränder',
          'Order- und Trade-Management',
          'Wahrscheinlichkeit und Erwartungswert beim Trading',
        ],
        'Teil 2 von 3',
      ),
      planned(
        'price-action-reversals',
        'Price Action: Umkehrungen',
        'Umkehrungen, Tageshandel, größere Zeitebenen und selektive Setups.',
        [
          'Trendumkehr: Trendlinienbruch, Test des Extrems, letzte Flagge',
          'Keile, Doppelhoch und Doppeltief',
          'Klimax-Umkehrungen',
          'Tageshandel: Eröffnung, Tagestypen, Schlussphase',
          'Tages-, Wochen- und Monatscharts',
          'Die verlässlichsten Setups',
        ],
        'Teil 3 von 3',
      ),
      planned('chart-patterns', 'Klassische Chartformationen', 'Die bekannten Formationen, ihre Kursziele und wie verlässlich sie sind.', [
        'Kopf-Schulter-Formation, Doppel- und Dreifachboden bzw. -top',
        'Dreiecke (symmetrisch, steigend, fallend) und Rechtecke',
        'Flaggen, Wimpel, Keile',
        'Untertasse, Tasse mit Henkel',
        'Arten von Kurslücken: Ausbruchs-, Fortsetzungs- und Erschöpfungslücke',
        'Kursziele aus Formationen und ihre Grenzen',
      ]),
      planned('candlestick-patterns', 'Kerzenmuster (klassisch)', 'Die gängigen Kerzennamen – und warum der Ort im Chart mehr zählt.', [
        'Hammer, Hanging Man, Shooting Star',
        'Engulfing, Harami, Piercing Line, Dark Cloud Cover',
        'Morning Star, Evening Star, drei weiße Soldaten, drei schwarze Krähen',
        'Warum der Ort im Chart mehr zählt als der Name',
      ]),
      planned('market-structure', 'Marktstruktur, Unterstützung und Widerstand', 'Hochs, Tiefs und Preiszonen, an denen der Markt reagiert.', [
        'Swing-Hochs und -Tiefs, höhere Hochs und höhere Tiefs',
        'Strukturbruch und Wechsel des Marktcharakters',
        'Angebots- und Nachfragezonen',
        'Runde Zahlen, Vortageshoch und -tief, Wochen- und Monatsmarken',
        'Pivot-Punkte',
        'Rollentausch: Aus Widerstand wird Unterstützung',
      ]),
      planned('multiple-timeframes', 'Mehrere Zeitebenen', 'Wie größere und kleinere Zeitebenen gemeinsam eine Entscheidung tragen.', [
        'Höhere Zeitebene als Kontext, niedrigere als Auslöser',
        'Zeitebenen sinnvoll kombinieren',
        'Wenn Zeitebenen sich widersprechen',
      ]),
      planned('dow-fibonacci-waves', 'Dow-Theorie, Fibonacci und Wellen', 'Ältere Denkmodelle für Trends und Rücksetzer – mit ihren Grenzen.', [
        'Dow-Theorie: übergeordneter, mittlerer und kurzer Trend; gegenseitige Bestätigung',
        'Fibonacci-Retracements und -Projektionen',
        'Elliott-Wellen: Impuls- und Korrekturwellen',
        'Grenzen, Deutungsspielraum, sich selbst erfüllende Marken',
      ]),
      planned('popular-concepts', 'Populäre Konzepte, kritisch eingeordnet', 'Verbreitete Begriffe aus dem Netz – was sie meinen und was davon trägt.', [
        '„Smart Money“-Begriffe: Order-Blocks, Fair-Value-Gaps, Liquiditätsabgriffe',
        'Premium- und Discount-Zonen, bevorzugte Handelszeitfenster',
        'Was sich davon mit klassischer Price Action deckt – und was nicht',
        'Gann-Winkel und Zeitzyklen (Nischenthema)',
      ]),
    ],
  },
  {
    id: 'indicators',
    title: 'Technische Indikatoren',
    description: 'Was Indikatoren aus Kursen berechnen und wann sie helfen – oder nur verzögern.',
    exercises: 'Fragen, Chart-Trainer mit eingeblendetem Indikator, Begriffe-Memory, Rechenaufgaben (z. B. Durchschnitt, ATR).',
    courses: [
      planned('moving-averages', 'Gleitende Durchschnitte', 'Durchschnitte als Trendfilter, Marke und Maß für Überdehnung.', [
        'Einfacher (SMA), exponentieller (EMA) und gewichteter Durchschnitt',
        'Durchschnitt als Trendfilter und bewegliche Unterstützung',
        'Kreuzungen („Golden Cross“, „Death Cross“) und ihre Verzögerung',
        'Abstand zum Durchschnitt als Maß für Überdehnung',
      ]),
      planned('momentum-oscillators', 'Momentum und Oszillatoren', 'Schwung messen und Divergenzen richtig einordnen.', [
        'RSI, Stochastik, MACD, CCI, Williams %R, Rate of Change',
        'Überkauft und überverkauft: im Trend etwas anderes als in der Range',
        'Divergenzen und wie oft sie wirklich etwas bedeuten',
      ]),
      planned('volatility-indicators', 'Volatilität', 'Wie stark ein Markt schwankt – und was das für Stops und Ausbrüche heißt.', [
        'ATR (Average True Range) und Stop-Abstände',
        'Bollinger-Bänder, Keltner- und Donchian-Kanäle',
        'Squeeze: wenn die Schwankung zusammenschrumpft',
        'Historische und implizite Volatilität',
      ]),
      planned('trend-strength', 'Trendstärke', 'Indikatoren, die messen, ob ein Trend trägt.', [
        'ADX und DMI',
        'Parabolic SAR, Supertrend',
        'Ichimoku (Wolke)',
      ]),
      planned('market-breadth', 'Marktbreite', 'Wie viele Aktien eine Indexbewegung wirklich mittragen.', [
        'Advance-Decline-Linie, neue Hochs und Tiefs',
        'Tick- und Arms-Index (TRIN)',
        'Anteil der Aktien über ihrem 200-Tage-Durchschnitt',
        'McClellan-Oszillator',
      ]),
      planned('using-indicators', 'Umgang mit Indikatoren', 'Typische Fehler beim Einsatz von Indikatoren und wie man sie vermeidet.', [
        'Verzögerung und Doppelungen (mehrere Indikatoren messen dasselbe)',
        'Parameter optimieren, ohne die Vergangenheit auswendig zu lernen',
        'Indikator als Bestätigung statt als alleiniges Signal',
      ]),
    ],
  },
  {
    id: 'volume',
    title: 'Volumen',
    description: 'Wie Handelsumsatz Bewegungen bestätigt oder in Frage stellt.',
    exercises: 'Chart-Trainer mit Volumenbalken, „Finde den Bar“ (z. B. Klimax-Volumen), Fragen.',
    courses: [
      planned('volume-basics', 'Volumen-Grundlagen', 'Was Volumen misst und wann es eine Bewegung bestätigt oder davor warnt.', [
        'Was Volumen misst; Tick-Volumen und echtes Volumen',
        'Volumen im Tagesverlauf, relatives Volumen',
        'Volumen bei Ausbrüchen, Pullbacks und Klimax',
        'Volumen als Bestätigung oder Warnung im Trend',
        'Volumen-Indikatoren: On-Balance-Volume, Akkumulation/Distribution, Money Flow',
      ]),
      planned('vwap', 'VWAP', 'Der volumengewichtete Durchschnittspreis als Marke für Händler und Institutionen.', [
        'Berechnung und Bedeutung als volumengewichteter Durchschnittspreis',
        'Verankerter VWAP (ab Hoch, Tief oder Ereignis)',
        'Standardabweichungsbänder',
        'VWAP als Maßstab für die Ausführung großer Orders',
      ]),
      planned('volume-profile', 'Volumenprofil', 'Wo am meisten gehandelt wurde – und warum der Preis dorthin zurückkehrt.', [
        'Point of Control (POC), Value Area (oberer und unterer Rand)',
        'Knoten mit hohem und niedrigem Volumen',
        'Profilformen (P, b, D, doppelte Verteilung)',
        'Tages-, Wochen- und zusammengesetzte Profile',
        'Unberührter POC als Magnet',
      ]),
      planned('volume-spread-analysis', 'Volume Spread Analysis', 'Spanne, Schluss und Volumen eines Bars gemeinsam lesen.', [
        'Spanne, Schlusslage und Volumen gemeinsam lesen',
        'Kein Angebot, keine Nachfrage',
        'Bremsendes Volumen, Upthrust, Test',
      ]),
      planned('wyckoff', 'Wyckoff-Methode', 'Akkumulation und Distribution in Phasen erkennen.', [
        'Akkumulation und Distribution',
        'Phasen A bis E, Spring und Upthrust',
        'Zeichen von Stärke und Schwäche',
        'Ursache und Wirkung, Kursziele aus Point & Figure',
      ]),
    ],
  },
  {
    id: 'orderflow',
    title: 'Orderflow und Marktmikrostruktur',
    description: 'Wie sich Aufträge im Handelsstrom zeigen – vom Orderbuch bis zur Auktion.',
    exercises: 'Fragen, Begriffe-Memory; für Orderbuch- und Footprint-Bilder bräuchte es eine neue Übungsform.',
    courses: [
      planned('market-microstructure', 'Marktmikrostruktur', 'Wie Orders aufeinandertreffen und wer dabei auf welcher Seite steht.', [
        'Orderbuch, Geld- und Briefseite, Markttiefe',
        'Aggressive (Market) und passive (Limit) Orders',
        'Tickgröße, Warteschlange, Preis-Zeit-Priorität',
        'Eisberg-Orders, versteckte Liquidität, Dark Pools',
        'Hochfrequenzhandel und Market Making',
        'Verbotene Praktiken: Spoofing und Layering',
      ]),
      planned('order-book', 'Orderbuch lesen', 'Liquidität im Orderbuch sehen und erkennen, wann sie verschwindet.', [
        'Liquiditätswände und Lücken im Orderbuch',
        'Orders, die gezogen oder nachgelegt werden',
        'Absorption: Der Preis bewegt sich trotz Druck nicht',
        'Orderbuch als Wärmebild über die Zeit',
      ]),
      planned('time-and-sales', 'Time & Sales', 'Einzelne Abschlüsse lesen: Größe, Tempo und Richtung.', [
        'Einzelne Abschlüsse lesen, große Abschlüsse',
        'Tempo des Handels, Durchgreifen über mehrere Preisstufen',
      ]),
      planned('footprint-charts', 'Footprint-Charts', 'Volumen auf Geld- und Briefseite je Preisstufe im Bar.', [
        'Volumen auf Geld- und Briefseite je Preisstufe',
        'Delta je Bar, Ungleichgewichte (diagonal), gestapelte Ungleichgewichte',
        'Unvollständige Auktionen, Erschöpfung',
        'POC je Bar',
      ]),
      planned('delta', 'Delta und kumuliertes Delta', 'Kauf- gegen Verkaufsdruck messen und mit dem Preis vergleichen.', [
        'Kaufdruck gegen Verkaufsdruck',
        'Abweichungen zwischen Delta und Preis',
        'Aktive gegen reagierende Teilnehmer',
      ]),
      planned('auction-market-profile', 'Auktionstheorie und Market Profile', 'Märkte als fortlaufende Auktion: Balance, Ungleichgewicht und Tagestypen.', [
        'Gleichgewicht (Balance) und Ungleichgewicht',
        'TPO-Profil, Initial Balance, Value Area',
        'Tagestypen (normal, Trend, doppelte Verteilung, neutral)',
        'Eröffnungstypen (Open Drive, Open Test Drive, Open Rejection Reverse, Open Auction)',
        'Exzess, schwache Hochs und Tiefs, Single Prints',
      ]),
      planned('liquidity-and-stops', 'Liquidität und Stops', 'Wo Stops liegen und was passiert, wenn der Kurs sie erreicht.', [
        'Wo Stops liegen und warum der Kurs sie anläuft',
        'Gefangene Trader, Short Squeeze',
        'Datenlage: zentrale Börsen (Futures) gegen dezentrale Märkte (Devisen)',
      ]),
    ],
  },
  {
    id: 'instruments',
    title: 'Märkte und Instrumente',
    description: 'Was man handeln kann und wie die einzelnen Instrumente funktionieren.',
    exercises: 'Fragen, Begriffe-Memory, Rechenaufgaben (Tickwert, Hebel, Margin, Optionswert).',
    courses: [
      planned('stocks-and-indices', 'Aktien und Indizes', 'Aktien, Indizes und die Ereignisse, die ihre Kurse verändern.', [
        'Aktienarten, Indizes und ihre Gewichtung (Preis, Marktkapitalisierung)',
        'Kapitalmaßnahmen: Split, Dividende, Kapitalerhöhung, Aktienrückkauf',
        'Leerverkauf, Leihgebühr, Leerverkaufsquote',
        'Berichtssaison, Indexaufnahme und Indexumstellung',
      ]),
      planned('etfs-and-funds', 'ETFs und Fonds', 'Wie ETFs Indizes nachbilden und was sie kosten.', [
        'Physische und synthetische Nachbildung',
        'Kosten (TER) und Tracking-Differenz',
        'Hebel- und Short-ETFs (Pfadabhängigkeit)',
        'Ausschüttend oder thesaurierend',
      ]),
      planned('futures', 'Futures', 'Terminkontrakte: Tickwert, Margin, Verfall und Rollover.', [
        'Kontraktdaten: Tickgröße, Tickwert, Multiplikator',
        'Margin (Einschuss, Mindestmargin), tägliche Abrechnung',
        'Verfall, Rollover, fortlaufende Kontrakte',
        'Contango und Backwardation, Basis',
        'Mikro-Kontrakte; Index-, Zins-, Rohstoff- und Devisen-Futures',
      ]),
      planned('options', 'Optionen', 'Calls, Puts, ihre Kennzahlen und die wichtigsten Strategien.', [
        'Call und Put, innerer Wert und Zeitwert',
        'Kennzahlen: Delta, Gamma, Theta, Vega, Rho',
        'Implizite Volatilität, Volatilitätslächeln und Schiefe',
        'Strategien: gedeckter Call, Absicherungs-Put, Spreads, Straddle, Strangle, Iron Condor',
        'Bewertungsmodelle: Binomialmodell, Black-Scholes',
        'Absicherung der Händler und Gamma-Effekte, Optionen mit sehr kurzer Laufzeit',
        'Verfallstage und ihre Wirkung auf den Basiswert',
      ]),
      planned('forex', 'Devisen', 'Währungspaare, Zinsdifferenzen und Handelszeiten rund um die Welt.', [
        'Währungspaare, Pips, Lots',
        'Zinsdifferenz und Carry Trade',
        'Sessions und Liquidität, Eingriffe von Notenbanken',
      ]),
      planned('bonds', 'Anleihen', 'Wie Kurs, Kupon und Rendite zusammenhängen.', [
        'Kupon, Kurs und Rendite',
        'Duration und Konvexität',
        'Zinsstrukturkurve',
        'Kreditrisiko, Ratings, Risikoaufschläge',
        'Staats-, Unternehmens- und inflationsgeschützte Anleihen',
      ]),
      planned('commodities', 'Rohstoffe', 'Energie, Metalle und Agrarrohstoffe mit ihren Eigenheiten.', [
        'Energie, Metalle, Agrarrohstoffe',
        'Lagerkosten, Rollrendite, Saisonalität',
        'Gold als Krisenschutz',
      ]),
      planned('crypto', 'Kryptowährungen', 'Wie Kryptomärkte funktionieren und welche Risiken dort besonders sind.', [
        'Blockchain-Grundlagen, Verwahrung, Handelsplätze',
        'Unbefristete Futures (Perpetuals) und Finanzierungsrate',
        'On-Chain-Daten',
        'Besondere Risiken: Pleiten von Handelsplätzen, Manipulation, Regulierung',
      ]),
      planned('leveraged-products', 'Hebelprodukte', 'CFDs, Zertifikate und Optionsscheine: Hebel, Kosten und Risiken.', [
        'CFDs, Knock-out-Zertifikate, Optionsscheine, Faktor-Zertifikate',
        'Emittentenrisiko, Spread, Finanzierungskosten',
        'Hebel, Margin Call, Nachschusspflicht, Zwangsschließung',
      ]),
    ],
  },
  {
    id: 'risk',
    title: 'Risiko- und Money-Management',
    description: 'Wie viel man je Trade riskiert und wie man ein Konto vor großen Verlusten schützt.',
    exercises: 'Rechenaufgaben (Positionsgröße, Chance-Risiko, Erwartungswert), Szenarien, Fragen.',
    courses: [
      planned('position-sizing', 'Positionsgröße', 'Die Größe einer Position aus dem Risiko ableiten statt aus dem Bauch.', [
        'Fester Anteil des Kontos (z. B. 1 % Risiko je Trade)',
        'Größe nach Volatilität (ATR)',
        'Kelly-Kriterium und vorsichtige Bruchteile davon',
        'Positionsgröße bei Futures und Hebelprodukten',
      ]),
      planned('stops-and-targets', 'Stops und Ziele', 'Wo Stops und Ziele hingehören und wie man sie nachzieht.', [
        'Stop an der Struktur oder nach Volatilität',
        'Nachziehen, Break-even, Teilgewinne',
        'Chance-Risiko-Verhältnis',
        'Zeit-Stop',
      ]),
      planned('risk-math', 'Mathematik des Risikos', 'Trefferquote, Erwartungswert, Verlustserien und Drawdowns durchrechnen.', [
        'Trefferquote, Chance-Risiko-Verhältnis und Erwartungswert',
        'Verlustserien: wie lang sie werden können',
        'Ruinwahrscheinlichkeit',
        'Drawdown und die Asymmetrie der Erholung (−50 % braucht +100 %)',
      ]),
      planned('risk-metrics', 'Risikokennzahlen', 'Kennzahlen, die Schwankung, Verlust und Rendite vergleichbar machen.', [
        'Volatilität, Beta, maximaler Drawdown',
        'Value at Risk, Expected Shortfall',
        'Sharpe-, Sortino- und Calmar-Ratio',
      ]),
      planned('portfolio-risk', 'Risiko im Gesamtdepot', 'Wie offene Positionen zusammenwirken und wo Klumpenrisiken entstehen.', [
        'Korrelation und Klumpenrisiko',
        'Gesamtrisiko aller offenen Positionen',
        'Seltene Extremereignisse („dicke Ränder“)',
      ]),
      planned('hedging', 'Absicherung', 'Positionen absichern – womit und zu welchem Preis.', [
        'Mit Futures, Optionen oder Short-Produkten',
        'Kosten und Grenzen der Absicherung',
      ]),
      planned('account-rules', 'Kontoregeln', 'Feste Grenzen, die ein Konto auch an schlechten Tagen schützen.', [
        'Tages- und Wochenverlustgrenze',
        'Pausenregeln nach Verlusten',
        'Positionsgröße schrittweise erhöhen und verringern',
        'Regeln von Prop-Trading-Firmen',
      ]),
    ],
  },
  {
    id: 'strategies',
    title: 'Handelsstile und Strategien',
    description: 'Wie Trader vorgehen – vom Scalping bis zur Trendfolge über Monate.',
    exercises: 'Chart-Trainer, „Ordne die Schritte“ (Ablauf eines Setups), Fragen.',
    courses: [
      planned('trading-styles', 'Handelsstile', 'Vom Scalping bis zum Investieren: Zeitaufwand, Kosten und Anforderungen.', [
        'Scalping, Daytrading, Swingtrading, Positionstrading, langfristiges Investieren',
        'Zeitaufwand, Kosten und Anforderungen je Stil',
      ]),
      planned('trend-following', 'Trendfolge', 'Mit dem Trend handeln, Gewinne laufen lassen, kleine Verluste in Kauf nehmen.', [
        'Ausbruchsregeln (z. B. neues 20-Tage-Hoch)',
        'Systeme mit gleitenden Durchschnitten',
        'Aufstocken im Trend, lange Haltedauer, niedrige Trefferquote',
      ]),
      planned('mean-reversion', 'Rückkehr zum Mittelwert', 'Überdehnungen handeln, die sich wieder zurückbilden.', [
        'Überdehnung und Rücklauf',
        'Handel innerhalb von Ranges',
        'Paarhandel und statistische Arbitrage',
      ]),
      planned('breakout-trading', 'Ausbruchshandel', 'Ausbrüche handeln – und Fehlausbrüche erkennen.', [
        'Ausbrüche aus Ranges und Formationen',
        'Ausbruch aus der Eröffnungsspanne',
        'Ausbrüche nach Volatilitätskompression',
        'Fehlausbrüche als Gegensignal',
      ]),
      planned('pullback-trading', 'Pullback-Handel', 'Rücksetzer im Trend als Einstieg nutzen.', [
        'Rücksetzer im Trend erkennen',
        'Einstiegsmuster und Stop-Platzierung',
      ]),
      planned('intraday', 'Intraday-Konzepte', 'Wie ein Handelstag typischerweise abläuft und was das für Einstiege heißt.', [
        'Eröffnungsphase, Mittagsflaute, Schlussphase',
        'Tagestypen, Eröffnungslücken',
        'Vortagesmarken und nächtlicher Handel',
      ]),
      planned('event-trading', 'Ereignis- und Nachrichtenhandel', 'Handeln rund um Termine, Zahlen und Nachrichten.', [
        'Wirtschaftsdaten und Notenbanktermine',
        'Quartalszahlen, Kurslücken nach Nachrichten',
        'Spreads und Slippage rund um Ereignisse',
      ]),
      planned('seasonality', 'Saisonalität und Kalendereffekte', 'Wiederkehrende Muster im Kalender – und wie belastbar sie sind.', [
        'Monatswechsel, Jahresende, Feiertage',
        'Verfallstage, Quartalsende, Indexumstellungen',
      ]),
      planned('relative-strength', 'Relative Stärke und Rotation', 'Die stärksten Werte und Sektoren finden und dem Geld folgen.', [
        'Relative Stärke gegenüber dem Index',
        'Sektorrotation im Konjunkturzyklus',
        'Ranglisten nach Momentum',
      ]),
      planned('arbitrage', 'Arbitrage', 'Preisunterschiede zwischen Märkten nutzen – und warum das selten einfach ist.', [
        'Kassa-Termin-Arbitrage',
        'Index-Arbitrage',
        'Grenzen: Kosten, Geschwindigkeit, Kapital',
      ]),
    ],
  },
  {
    id: 'psychology',
    title: 'Trading-Psychologie',
    description: 'Wie Denken und Gefühle Entscheidungen beeinflussen – und was dagegen hilft.',
    exercises: 'Fragen, Szenarien („Was tust du jetzt?“), kurze Reflexionsaufgaben.',
    courses: [
      planned('cognitive-biases', 'Denkfehler', 'Typische Verzerrungen, die zu schlechten Trading-Entscheidungen führen.', [
        'Bestätigungsfehler, Rückschaufehler, Ankereffekt',
        'Verlustaversion und Dispositionseffekt (Gewinne zu früh, Verluste zu spät schließen)',
        'Selbstüberschätzung, Kontrollillusion',
        'Spielerfehlschluss, Überbewertung der letzten Trades',
      ]),
      planned('emotions', 'Emotionen', 'Angst, Gier und Frust erkennen, bevor sie den nächsten Trade bestimmen.', [
        'Angst, Gier, Angst etwas zu verpassen (FOMO)',
        'Rachetrading, „Tilt“, Trades aus Langeweile',
      ]),
      planned('probabilistic-thinking', 'Denken in Wahrscheinlichkeiten', 'Einzelne Trades gelassen sehen, weil erst viele zusammen etwas zeigen.', [
        'Gute Entscheidung ist nicht gleich gutes Ergebnis',
        'Viele Trades als Stichprobe statt Einzeltrade',
        'Unsicherheit aushalten',
      ]),
      planned('discipline-routines', 'Disziplin und Routinen', 'Regeln, Checklisten und feste Abläufe vor und nach dem Handel.', [
        'Regeln und Checklisten',
        'Vorbereitung vor dem Handel, Nachbereitung danach',
        'Umgang mit Verlust- und Gewinnserien',
      ]),
      planned('learning-performance', 'Lernen und Leistung', 'Wie man Trading gezielt übt und Fortschritte misst.', [
        'Gezieltes Üben, Wiederholung, Rückmeldung',
        'Replay und Simulation',
        'Realistische Erwartungen, Geduld, Lernkurve',
      ]),
      planned('trading-conditions', 'Rahmenbedingungen', 'Schlaf, Stress und Alltag – und wann man besser nicht handelt.', [
        'Schlaf, Stress, Bewegung',
        'Trading neben dem Beruf',
        'Wann man besser nicht handelt',
      ]),
    ],
  },
  {
    id: 'trading-process',
    title: 'Trading-Plan, Journal und Auswertung',
    description: 'Trading als wiederholbaren Ablauf planen, festhalten und auswerten.',
    exercises: '„Ordne die Schritte“, Fragen, Vorlagen zum Ausfüllen.',
    courses: [
      planned('trading-plan', 'Trading-Plan', 'Schriftlich festlegen, was, wann und wie gehandelt wird.', [
        'Märkte, Zeitfenster, Setups',
        'Einstieg, Ausstieg, Risiko',
        'Regeln für Ausnahmen und Pausen',
      ]),
      planned('journal', 'Journal', 'Trades so festhalten, dass man später daraus lernen kann.', [
        'Was festhalten: Bild, Setup, Begründung, Gefühl, Fehler',
        'Kategorien und Schlagworte',
      ]),
      planned('trade-review', 'Auswertung', 'Aus den eigenen Zahlen herausfinden, was funktioniert.', [
        'Kennzahlen je Setup, Tageszeit und Wochentag',
        'Wochen- und Monatsrückblick',
        'Regeln anpassen, ohne sich an die Vergangenheit zu überanpassen',
      ]),
      planned('practice-to-live', 'Vom Üben zum echten Geld', 'Schrittweise vom Simulator zum echten Konto.', [
        'Papiertrading und Simulation',
        'Mit kleiner Größe beginnen, schrittweise steigern',
      ]),
    ],
  },
  {
    id: 'statistics',
    title: 'Statistik und Finanzmathematik',
    description: 'Die Rechnungen hinter Rendite, Risiko und Wahrscheinlichkeit.',
    exercises: 'Rechenaufgaben, Fragen.',
    courses: [
      planned('financial-math', 'Rechengrundlagen', 'Prozente, Zinseszins und Renditen richtig rechnen.', [
        'Prozentrechnung bei Gewinn und Verlust, Hebel',
        'Zins und Zinseszins, Barwert und Endwert',
        'Rendite: einfach, durchschnittlich (arithmetisch und geometrisch), auf das Jahr gerechnet, logarithmisch',
      ]),
      planned('probability-statistics', 'Wahrscheinlichkeit und Statistik', 'Erwartungswert, Streuung und Zufall verstehen, ohne sich täuschen zu lassen.', [
        'Wahrscheinlichkeit und Erwartungswert',
        'Mittelwert, Median, Standardabweichung',
        'Verteilungen und dicke Ränder',
        'Korrelation ist nicht Kausalität',
        'Stichprobengröße, Zufall und Aussagekraft',
        'Regression (Grundidee)',
      ]),
    ],
  },
  {
    id: 'systematic-trading',
    title: 'Systematisches Trading und Backtesting',
    description: 'Handelsregeln mit Daten prüfen, automatisieren und überwachen.',
    exercises: 'Fragen, Fallbeispiele, Rechenaufgaben.',
    courses: [
      planned('backtesting', 'Backtesting', 'Handelsregeln an historischen Daten prüfen – ohne sich selbst zu täuschen.', [
        'Datenqualität und bereinigte Daten',
        'Überlebensverzerrung (Survivorship Bias), Blick in die Zukunft (Look-ahead Bias)',
        'Kosten und Slippage einrechnen',
        'Trainings- und Testzeitraum, rollierende Tests (Walk-Forward)',
        'Überanpassung und robuste Parameter',
        'Monte-Carlo-Simulation',
      ]),
      planned('strategy-development', 'Strategieentwicklung', 'Von der Idee zur geprüften Handelsregel.', [
        'Hypothese, Regeln, Test, Bewertung',
        'Mehrere Strategien kombinieren',
        'Wenn eine Strategie nicht mehr funktioniert (Regimewechsel)',
      ]),
      planned('programming', 'Programmieren für Trader', 'Mit Tabellen, Python und Skripten eigene Auswertungen bauen.', [
        'Tabellenkalkulation als Einstieg',
        'Python und Datenanalyse',
        'Skriptsprachen von Chartprogrammen',
        'Datenquellen und Schnittstellen (APIs)',
      ]),
      planned('automated-trading', 'Automatisierter Handel', 'Orders automatisch ausführen und dabei die Kontrolle behalten.', [
        'Order-Schnittstellen, Ausführungsalgorithmen (VWAP, TWAP)',
        'Risikokontrollen, Überwachung, Ausfälle',
        'Latenz und Infrastruktur',
      ]),
      planned('factor-investing', 'Faktor-Investing', 'Systematisch nach Eigenschaften wie Value oder Momentum anlegen.', [
        'Value, Momentum, Qualität, Größe, niedrige Volatilität',
        'Faktorprämien und ihre langen Durststrecken',
      ]),
      planned('machine-learning', 'Maschinelles Lernen (Ausblick)', 'Was lernende Verfahren mit Kursdaten können – und was nicht.', [
        'Merkmale, Training, Prüfung',
        'Warum Finanzdaten besonders schwierig sind',
      ]),
    ],
  },
  {
    id: 'valuation',
    title: 'Fundamentalanalyse und Unternehmensbewertung',
    description: 'Wie sich der Wert eines Unternehmens aus Zahlen und Annahmen herleiten lässt.',
    exercises: 'Rechenaufgaben (Kennzahlen, Multiplikatoren, DCF), Fallbeispiele mit erfundenen Zahlen, Fragen.',
    courses: [
      planned('financial-statements', 'Jahresabschluss lesen', 'Bilanz, Gewinn- und Verlustrechnung und Kapitalflussrechnung verstehen.', [
        'Bilanz, Gewinn- und Verlustrechnung, Kapitalflussrechnung',
        'Anhang und Segmentberichte',
        'Rechnungslegung (IFRS, US-GAAP) in Grundzügen',
        'Bilanzpolitik und Warnsignale',
      ]),
      planned('company-metrics', 'Kennzahlen von Unternehmen', 'Wachstum, Margen, Renditen und Verschuldung einordnen.', [
        'Umsatzwachstum, Brutto-, operative und Nettomarge',
        'Eigenkapitalrendite, Rendite auf das eingesetzte Kapital (ROIC), Gesamtkapitalrendite',
        'Verschuldung (z. B. Nettoverschuldung zu EBITDA), Liquidität',
        'Freier Cashflow, Working Capital, Investitionsquote',
      ]),
      planned('multiples', 'Bewertung mit Multiplikatoren', 'Unternehmen über Kennzahlen wie das KGV miteinander vergleichen.', [
        'KGV, KBV, KUV, EV/EBITDA, EV/EBIT, PEG',
        'Rendite des freien Cashflows, Dividendenrendite',
        'Vergleich mit Wettbewerbern und mit der eigenen Historie',
        'Fallstricke: Einmaleffekte, Zyklen, Schulden',
      ]),
      planned('dcf', 'Discounted-Cashflow-Bewertung (DCF)', 'Den Wert eines Unternehmens aus künftigen Cashflows herleiten.', [
        'Prognose der freien Cashflows',
        'Kapitalkosten (WACC; Eigenkapitalkosten nach CAPM)',
        'Endwert (ewiges Wachstum oder Ausstiegsmultiplikator)',
        'Sensitivitäten und Szenarien',
        'Umgekehrte DCF: Was steckt schon im Kurs?',
      ]),
      planned('other-valuation', 'Weitere Bewertungsverfahren', 'Dividenden-, Übergewinn- und Substanzwertmodelle.', [
        'Dividendendiskontierung',
        'Übergewinnmodell (Residual Income)',
        'Summe der Teile, Substanz- und Liquidationswert',
      ]),
      planned('business-quality', 'Geschäftsmodell und Qualität', 'Was ein Unternehmen dauerhaft besser macht als seine Konkurrenz.', [
        'Wettbewerbsvorteile („Burggraben“): Netzwerkeffekte, Wechselkosten, Kostenvorteile, Marken',
        'Branchenanalyse (Fünf-Kräfte-Modell, Lebenszyklus einer Branche)',
        'Management, Kapitalverwendung, Unternehmensführung',
      ]),
      planned('valuation-special-cases', 'Sonderfälle der Bewertung', 'Banken, Immobilien, Zykliker und Unternehmen ohne Gewinn.', [
        'Banken und Versicherungen',
        'Immobiliengesellschaften und REITs',
        'Zyklische Unternehmen und Rohstoffkonzerne',
        'Wachstumsunternehmen ohne Gewinn',
      ]),
      planned('corporate-events', 'Unternehmensereignisse', 'Quartalszahlen, Übernahmen und andere Ereignisse richtig deuten.', [
        'Quartalszahlen, Prognosen, Telefonkonferenzen',
        'Übernahmen, Abspaltungen, Kapitalmaßnahmen',
        'Meldepflichtige Käufe und Verkäufe des Managements',
      ]),
      planned('investment-styles', 'Anlagestile', 'Value, Growth, Dividende und weitere Wege, Aktien auszuwählen.', [
        'Value, Growth, Qualität, Dividende',
        'Sanierungsfälle, Sondersituationen, Nebenwerte',
        'Nachhaltige Geldanlage (ESG)',
      ]),
    ],
  },
  {
    id: 'macro',
    title: 'Makroökonomie und Marktumfeld',
    description: 'Wie Wirtschaft, Zinsen und Notenbanken die Märkte bewegen.',
    exercises: 'Fragen, „Ordne die Schritte“ (Wirkungsketten), Fallbeispiele.',
    courses: [
      planned('business-cycle', 'Konjunktur', 'Wie die Wirtschaft wächst und schrumpft – und woran man das früh erkennt.', [
        'Bruttoinlandsprodukt, Konjunkturzyklus, Rezession',
        'Frühindikatoren (Einkaufsmanagerindizes, Geschäftsklima)',
        'Arbeitsmarktdaten',
      ]),
      planned('inflation', 'Inflation', 'Wie Inflation gemessen wird und was sie für Zinsen und Kurse bedeutet.', [
        'Verbraucherpreise und Kerninflation',
        'Inflationserwartungen',
        'Folgen für Zinsen und Bewertungen',
      ]),
      planned('monetary-policy', 'Geldpolitik', 'Was Notenbanken tun und wie Märkte darauf reagieren.', [
        'Leitzins und Notenbanken (z. B. Fed, EZB)',
        'Kommunikation und Erwartungen',
        'Anleihekäufe und Bilanzabbau (QE, QT)',
        'Liquidität im Finanzsystem',
      ]),
      planned('interest-rates', 'Zinsen', 'Nominal- und Realzins, Zinsstrukturkurve und ihr Einfluss auf Bewertungen.', [
        'Nominal- und Realzins',
        'Zinsstrukturkurve: normal, flach, invers',
        'Zinsen und Aktienbewertung',
      ]),
      planned('fiscal-policy', 'Staatshaushalt', 'Staatsausgaben, Defizite und Schulden als Einfluss auf die Märkte.', [
        'Staatsausgaben, Defizite, Verschuldung',
      ]),
      planned('currencies-and-flows', 'Währungen und Kapitalflüsse', 'Was Wechselkurse bewegt und wohin Kapital in Krisen fließt.', [
        'Was Wechselkurse bewegt',
        'Sichere Häfen',
      ]),
      planned('intermarket', 'Zusammenspiel der Märkte (Intermarket)', 'Wie Aktien, Anleihen, Rohstoffe und Dollar zusammenhängen.', [
        'Aktien, Anleihen, Rohstoffe und Dollar im Zusammenspiel',
        'Risikofreude und Risikoscheu („Risk-on“, „Risk-off“)',
        'Sektoren im Konjunkturzyklus',
      ]),
      planned('economic-calendar', 'Wirtschaftskalender', 'Welche Termine zählen und wie Märkte auf Überraschungen reagieren.', [
        'Die wichtigsten Termine',
        'Erwartung gegen Ergebnis, Marktreaktion',
      ]),
      planned('market-phases', 'Marktphasen', 'Bullen- und Bärenmärkte, ruhige und unruhige Zeiten.', [
        'Bullen- und Bärenmärkte, ruhige und unruhige Phasen',
        'Geopolitik und Ereignisrisiken',
      ]),
    ],
  },
  {
    id: 'sentiment',
    title: 'Stimmung und Positionierung',
    description: 'Wie Anleger gestimmt und positioniert sind – und wann das zum Signal wird.',
    exercises: 'Fragen, Fallbeispiele.',
    courses: [
      planned('sentiment-measures', 'Stimmung messen', 'Volatilitätsindizes, Optionsdaten und Umfragen als Stimmungsbarometer.', [
        'Volatilitätsindizes (z. B. VIX, VDAX) und ihre Laufzeitstruktur',
        'Put-Call-Verhältnis',
        'Umfragen und Stimmungsindizes',
      ]),
      planned('positioning', 'Positionierung', 'Wer wie stark investiert ist – und wann antizyklisches Handeln Sinn ergibt.', [
        'Positionen am Terminmarkt (COT-Bericht)',
        'Fondsflüsse, Leerverkaufsquote, Wertpapierkredite',
        'Antizyklisch handeln – und wo das an Grenzen stößt',
      ]),
    ],
  },
  {
    id: 'portfolio',
    title: 'Portfolio und Vermögensaufbau',
    description: 'Langfristig Vermögen aufbauen: aufteilen, streuen, Kosten und Steuern im Blick.',
    exercises: 'Rechenaufgaben (Zinseszins, Entnahme), Fragen, Szenarien.',
    courses: [
      planned('asset-allocation', 'Vermögensaufteilung', 'Geld sinnvoll auf verschiedene Anlageklassen verteilen.', [
        'Aktien, Anleihen, Liquidität, Rohstoffe, Immobilien',
        'Risikoprofil und Anlagehorizont',
        'Streuung und Korrelation',
        'Moderne Portfoliotheorie, effiziente Grenze, CAPM',
      ]),
      planned('passive-investing', 'Passives Investieren', 'Breit gestreut und günstig mit ETFs anlegen.', [
        'ETF-Sparplan, weltweit gestreutes Depot',
        'Kosten und ihre Wirkung über Jahrzehnte',
        'Umschichten auf die Zielgewichtung (Rebalancing)',
      ]),
      planned('goals-and-withdrawal', 'Ziele und Entnahme', 'Sparziele setzen, fürs Alter vorsorgen und später sinnvoll entnehmen.', [
        'Notgroschen und Sparziele',
        'Entnahmeplan, Entnahmerate, Reihenfolgerisiko der Renditen',
        'Altersvorsorge: gesetzlich, betrieblich, privat (länderspezifisch)',
      ]),
      planned('investor-behavior', 'Verhalten beim Investieren', 'Typische Fehler, die Anleger Rendite kosten.', [
        'Versuche, den Markt zu timen',
        'Heimatmarkt-Neigung (Home Bias)',
        'Renditen hinterherlaufen, prozyklisches Verhalten',
      ]),
      planned(
        'taxes-and-costs',
        'Steuern und Kosten (Beispiel Deutschland)',
        'Was an Steuern und Kosten anfällt – länderspezifisch und ohne Steuerberatung.',
        [
          'Abgeltungsteuer, Sparerpauschbetrag',
          'Verlustverrechnung, Vorabpauschale, Teilfreistellung',
          'Quellensteuer und Doppelbesteuerung',
        ],
      ),
    ],
  },
  {
    id: 'brokers-and-rules',
    title: 'Broker, Regeln und Werkzeuge',
    description: 'Womit und unter welchen Regeln gehandelt wird – und wie man sich vor Betrug schützt.',
    exercises: 'Fragen, Checklisten.',
    courses: [
      planned('brokers-and-platforms', 'Broker und Handelsplattformen', 'Den passenden Broker finden und seine Kosten verstehen.', [
        'Brokerwahl, Gebührenmodelle, Ausführung',
        'Einlagensicherung und Anlegerentschädigung',
        'Marktdaten und Datenabos',
      ]),
      planned('regulation', 'Regulierung', 'Welche Regeln für Anleger und Trader gelten.', [
        'Aufsicht (z. B. BaFin, ESMA, SEC, CFTC)',
        'Anlegerschutz (MiFID II), Hebelgrenzen für Privatanleger',
        'US-Regel für häufige Daytrader (Pattern Day Trader)',
        'Insiderhandel und Marktmanipulation (verboten)',
        'Meldepflichten und Ad-hoc-Mitteilungen',
      ]),
      planned('prop-firms', 'Prop-Trading-Firmen', 'Wie Prüfungen und Regeln bei finanzierten Konten funktionieren.', [
        'Prüfungsphasen, Regeln, Kosten, Risiken',
      ]),
      planned('trading-tools', 'Werkzeuge', 'Chartprogramme, Scanner und Alarme sinnvoll einsetzen.', [
        'Chartprogramme, Scanner, Alarme',
        'Tastenkürzel, Ausfallsicherheit',
      ]),
      planned('fraud-protection', 'Schutz vor Betrug', 'Typische Maschen erkennen und das eigene Konto schützen.', [
        'Signalgruppen, Schneeballsysteme, „Pump and Dump“',
        'Phishing und Kontosicherheit',
      ]),
    ],
  },
  {
    id: 'market-history',
    title: 'Marktgeschichte und Fallstudien',
    description: 'Was Blasen, Crashs und Skandale über Märkte lehren.',
    exercises: 'Fallbeispiele, „Ordne die Schritte“ (Ablauf einer Krise), Fragen.',
    courses: [
      planned('bubbles-and-crashes', 'Blasen und Crashs', 'Die großen Einbrüche der Marktgeschichte und was sie gemeinsam haben.', [
        'Frühe Spekulationsblasen (Tulpenmanie, Südseeblase)',
        'Crash 1929 und Weltwirtschaftskrise',
        'Schwarzer Montag 1987',
        'Platzen der Dotcom-Blase 2000',
        'Finanzkrise 2008',
        'Flash Crash 2010',
        'Corona-Crash 2020',
      ]),
      planned('case-studies', 'Lehrreiche Einzelfälle', 'Short Squeezes, Fondspleiten und Bilanzskandale als Lehrstücke.', [
        'Short Squeezes bei Meme-Aktien (2021)',
        'Zusammenbrüche großer Fonds durch Hebel (z. B. 1998, 2021)',
        'Bilanzskandale (z. B. Enron, Wirecard)',
      ]),
    ],
  },
];

/** Ein Thema ist verfügbar, sobald mindestens einer seiner Kurse verfügbar ist. */
export function subjectStatus(subject: LibrarySubject): CourseStatus {
  return subject.courses.some((course) => course.status === 'available') ? 'available' : 'planned';
}

/** Anzahl der Themengebiete, Kurse und Kurse mit Inhalt. */
export function libraryCounts(subjects: readonly LibrarySubject[]): { subjects: number; courses: number; available: number } {
  const courses = subjects.flatMap((subject) => subject.courses);
  return {
    subjects: subjects.length,
    courses: courses.length,
    available: courses.filter((course) => course.status === 'available').length,
  };
}

export interface LibraryIssue {
  path: string;
  message: string;
}

const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Prüft die Liste: eindeutige IDs, verfügbar sind genau die registrierten Kurse (darunter der Standardkurs), Texte und Unterthemen vorhanden. */
export function validateLibrary(
  subjects: readonly LibrarySubject[],
  defaultCourseId: string,
  availableCourseIds: readonly string[],
): LibraryIssue[] {
  const issues: LibraryIssue[] = [];
  const ids = new Set<string>();
  const claim = (id: string, path: string) => {
    if (!ID_PATTERN.test(id)) issues.push({ path, message: `Ungültige ID „${id}“.` });
    if (ids.has(id)) issues.push({ path, message: `Doppelte ID „${id}“.` });
    ids.add(id);
  };
  const text = (value: unknown, min: number) => typeof value === 'string' && value.trim().length >= min;

  subjects.forEach((subject, s) => {
    const base = `subjects[${s}]`;
    claim(subject.id, `${base}.id`);
    if (!text(subject.title, 1)) issues.push({ path: `${base}.title`, message: 'Der Titel fehlt.' });
    if (!text(subject.description, 10)) issues.push({ path: `${base}.description`, message: 'Die Beschreibung fehlt.' });
    if (!text(subject.exercises, 5)) issues.push({ path: `${base}.exercises`, message: 'Die passenden Übungen fehlen.' });
    if (subject.courses.length === 0) issues.push({ path: `${base}.courses`, message: 'Ein Themengebiet braucht mindestens ein Thema.' });
    subject.courses.forEach((course, c) => {
      const path = `${base}.courses[${c}]`;
      claim(course.id, `${path}.id`);
      if (!text(course.title, 1)) issues.push({ path: `${path}.title`, message: 'Der Titel fehlt.' });
      if (!text(course.description, 10)) issues.push({ path: `${path}.description`, message: 'Die Beschreibung fehlt.' });
      const subtopics = Array.isArray(course.subtopics) ? course.subtopics : [];
      if (subtopics.length === 0 || !subtopics.every((entry) => text(entry, 3))) {
        issues.push({ path: `${path}.subtopics`, message: 'Mindestens ein Unterthema mit Text ist nötig.' });
      }
      if (new Set(subtopics).size !== subtopics.length) {
        issues.push({ path: `${path}.subtopics`, message: 'Ein Unterthema steht doppelt.' });
      }
      const registered = availableCourseIds.includes(course.id);
      if (course.status === 'available' && !registered) {
        issues.push({ path, message: 'Als verfügbar markiert, aber kein registrierter Kurs mit dieser ID.' });
      }
      if (course.status === 'planned' && registered) {
        issues.push({ path, message: 'Ein registrierter Kurs mit Inhalt darf nicht als geplant stehen.' });
      }
    });
  });

  const standard = subjects.flatMap((subject) => subject.courses).find((course) => course.id === defaultCourseId);
  if (!standard) issues.push({ path: 'defaultCourseId', message: 'Der Standardkurs fehlt in der Bibliothek.' });
  else if (standard.status !== 'available') issues.push({ path: 'defaultCourseId', message: 'Der Standardkurs muss verfügbar sein.' });
  return issues;
}
