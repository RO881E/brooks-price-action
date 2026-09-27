export interface GlossaryEntry {
  term: string;
  aliases: string[];
  definition: string;
  firstUnit: string;
}

export const glossaryEntries: GlossaryEntry[] = [
  {
    term: 'Bar',
    aliases: ['Kerze', 'Candle'],
    definition:
      'Darstellung der in einem Zeitfenster gehandelten Eröffnung, des Hochs, des Tiefs und des Schlusses.',
    firstUnit: 'Einleitung',
  },
  {
    term: 'Price Action',
    aliases: ['Kursverhalten'],
    definition:
      'Analyse der sichtbaren Kursbewegung und ihrer Sequenzen, ohne eine Entscheidung von einer einzelnen externen Erklärung abhängig zu machen.',
    firstUnit: 'Einleitung',
  },
  {
    term: 'Trend',
    aliases: ['gerichteter Markt'],
    definition:
      'Marktzustand, in dem neue Preise über mehrere Bewegungen hinweg überwiegend in eine Richtung akzeptiert werden.',
    firstUnit: 'Einleitung',
  },
  {
    term: 'Trading Range',
    aliases: ['Range', 'Seitwärtsphase'],
    definition:
      'Zweiseitiger Marktbereich, in dem Ausbrüche häufiger zurückgewiesen werden und weder Käufer noch Verkäufer dauerhaft kontrollieren.',
    firstUnit: 'Einleitung',
  },
  {
    term: 'Pullback',
    aliases: ['Korrektur', 'Rücksetzer'],
    definition:
      'Zeitlich begrenzte Gegenbewegung innerhalb einer übergeordneten Bewegung oder eines angenommenen Trends.',
    firstUnit: 'Einleitung',
  },
  {
    term: 'Breakout',
    aliases: ['Ausbruch'],
    definition:
      'Bewegung über oder unter ein zuvor relevantes Preisniveau. Ob daraus ein Trend entsteht, hängt von Anschluss und Akzeptanz ab.',
    firstUnit: 'Einleitung',
  },
  {
    term: 'Follow-through',
    aliases: ['Anschlussbewegung', 'Bestätigung'],
    definition:
      'Weitere Kursbewegung nach einem Signal oder Ausbruch, die zeigt, dass Marktteilnehmer die neue Richtung weitertragen.',
    firstUnit: 'Einleitung',
  },
  {
    term: 'Reversal-Bar',
    aliases: ['Umkehrbar'],
    definition:
      'Bar, der eine mögliche Richtungsänderung sichtbar macht. Seine Aussagekraft entsteht erst durch Kontext und Folgebars.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Doji',
    aliases: ['Non-Trend-Bar'],
    definition:
      'Bar mit kleinem Körper, bei dem Eröffnung und Schluss relativ nah beieinanderliegen und keine Seite klar dominiert.',
    firstUnit: 'Kapitel 2',
  },
  {
    term: 'High 1',
    aliases: ['H1'],
    definition:
      'Erster Aufwärtsversuch über das Hoch des Vorgängerbars innerhalb einer Abwärtskorrektur.',
    firstUnit: 'Teil I',
  },
  {
    term: 'High 2',
    aliases: ['H2'],
    definition:
      'Zweiter Aufwärtsversuch innerhalb einer Abwärtskorrektur, nachdem der erste Versuch nicht zur Fortsetzung geführt hat.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Low 1',
    aliases: ['L1'],
    definition:
      'Erster Abwärtsversuch unter das Tief des Vorgängerbars innerhalb einer Aufwärtskorrektur.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Low 2',
    aliases: ['L2'],
    definition:
      'Zweiter Abwärtsversuch innerhalb einer Aufwärtskorrektur, nachdem der erste Versuch nicht zur Fortsetzung geführt hat.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Signal-Bar',
    aliases: ['Signalbar'],
    definition:
      'Bar, auf dessen Struktur ein möglicher Einstieg vorbereitet wird. Er ist Teil des Setups und nicht automatisch ein Trade.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'Entry-Bar',
    aliases: ['Einstiegsbar'],
    definition:
      'Bar, in dessen Verlauf die zuvor geplante Order ausgelöst und die Position tatsächlich eröffnet wird.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'Expectancy',
    aliases: ['Erwartungswert', 'Trader-Gleichung'],
    definition:
      'Langfristiger Durchschnitt aus Trefferwahrscheinlichkeit, Gewinnhöhe, Verlusthöhe und Kosten einer wiederholbaren Entscheidung.',
    firstUnit: 'Einleitung',
  },
  {
    term: 'Tick',
    aliases: ['Mindestpreisänderung', 'Transaktionstick'],
    definition:
      'Je nach Zusammenhang entweder die kleinste zulässige Preisänderung eines Instruments oder ein einzelner ausgeführter Handel im Datenstrom.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Trendbar',
    aliases: ['Trend-Bar'],
    definition:
      'Bar mit relativ großem Körper, dessen Eröffnung und Schluss nahe gegenüberliegenden Enden liegen und der dadurch gerichteten Druck zeigt.',
    firstUnit: 'Teil I',
  },
  {
    term: 'OCO-Order',
    aliases: ['One Cancels the Other', 'OCO'],
    definition:
      'Verknüpfte Orders, bei denen die Ausführung einer Order die jeweils andere automatisch löscht, etwa Ziel und Schutzstop.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Edge',
    aliases: ['statistischer Vorteil', 'Handelsvorteil'],
    definition:
      'Wiederholbarer Vorteil, bei dem Wahrscheinlichkeit, Gewinn, Verlust und Kosten zusammen einen positiven Erwartungswert ergeben.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Hochfrequenzhandel',
    aliases: ['HFT', 'High-Frequency Trading'],
    definition:
      'Automatisierter Handel mit sehr schneller Datenverarbeitung, vielen Orders und meist kleinen Vorteilen pro Ausführung.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Latenz',
    aliases: ['Latency', 'Verzögerung'],
    definition:
      'Zeit zwischen Datenereignis, Verarbeitung, Orderübermittlung und Bestätigung der Ausführung.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Liquidität',
    aliases: ['Marktliquidität'],
    definition:
      'Verfügbarkeit handelbarer Gegenseite zu Preisen, die auch bei einer Order möglichst wenig ungünstig weglaufen.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Markttiefe',
    aliases: ['DOM', 'Depth of Market', 'Orderbuch'],
    definition:
      'Momentaufnahme sichtbarer Limit-Orders auf mehreren Preisstufen; sie kann sich durch neue, geänderte oder stornierte Orders sofort verändern.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Slippage',
    aliases: ['Ausführungsabweichung'],
    definition:
      'Differenz zwischen erwartetem und tatsächlich erhaltenem Ausführungspreis, besonders relevant bei geringer Liquidität oder hoher Geschwindigkeit.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Mean Reversion',
    aliases: ['Mittelwertrückkehr', 'Regression zum Mittel'],
    definition:
      'Tendenz eines außergewöhnlich weit vom üblichen Bereich entfernten Zustands, später wieder in Richtung normalerer Werte zurückzukehren.',
    firstUnit: 'Teil I',
  },
  {
    term: 'ABC-Korrektur',
    aliases: ['ABC-Pullback', 'zweibeinige Korrektur'],
    definition:
      'Pullback mit erstem Gegenbein A, Zwischenreaktion B und zweitem Gegenbein C; die Struktur kann anschließend den übergeordneten Trend fortsetzen.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Runner',
    aliases: ['Restposition'],
    definition:
      'Nach einem Teilgewinn verbleibender Positionsanteil, der an einer möglicherweise größeren Bewegung teilnehmen soll.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Fibonacci-Retracement',
    aliases: ['Fibonacci-Rücklauf'],
    definition:
      'Prozentuale Näherung für die Tiefe eines Rücklaufs. Im Kurs dient sie nur als Zusatzkontext und nicht als eigenständige Eintrittsgarantie.',
    firstUnit: 'Teil I',
  },
  {
    term: 'Elliott-Wave-Theorie',
    aliases: ['Elliott Wave', 'Wellenzählung'],
    definition:
      'Ansatz, Kursbewegungen als wiederkehrende Wellenfolgen zu zählen; für kurzfristige Entscheidungen sind konkurrierende Zählungen häufig erst im Nachhinein eindeutig.',
    firstUnit: 'Teil I',
  },
];
