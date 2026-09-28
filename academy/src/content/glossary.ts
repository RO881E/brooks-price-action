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
      'Abgeschlossener Bar, dessen Hoch oder Tief eine Entry-Order auslöst. Seine Signal-Rolle steht deshalb erst nach dem Fill fest.',
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
    term: 'Setup',
    aliases: ['Handelsvorbereitung'],
    definition:
      'Ein oder mehrere Bars, deren Kontext einen möglichen Trade mit günstigem Erwartungswert nahelegt. Ohne ausgelöste Order bleibt es nur eine Möglichkeit.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'Setup-Bar',
    aliases: ['Set-up-Bar'],
    definition:
      'Letzter abgeschlossener Bar eines Setups, an dessen Hoch oder Tief eine Entry-Order geplant wird. Erst die spätere Auslösung macht ihn zum Signal-Bar.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'Follow-through-Bar',
    aliases: ['Anschlussbar'],
    definition:
      'Bar nach dem Entry, der den neuen Kursbereich weiter in Handelsrichtung trägt und damit die ursprüngliche These bestätigt.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'With-trend',
    aliases: ['mit dem Trend', 'Trendfolge'],
    definition:
      'Trade in Richtung des dominanten Trends. Die bestehende Marktträgheit senkt im Vergleich zu einem Countertrend-Trade die notwendige Beweislast.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'Countertrend',
    aliases: ['gegen den Trend', 'Gegentrend'],
    definition:
      'Trade gegen den dominanten Trend. Er verlangt deutlich mehr strukturelle Evidenz, weil die meisten frühen Umkehrversuche scheitern.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'Inside-Bar',
    aliases: ['i', 'Innenbar'],
    definition:
      'Bar, dessen Hoch unter oder auf dem vorherigen Hoch und dessen Tief über oder auf dem vorherigen Tief liegt. Er zeigt eine kleinere Ein-Bar-Range.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'ii / iii',
    aliases: ['Double Inside Bar', 'Triple Inside Bar'],
    definition:
      'Folge von zwei oder drei aufeinander bezogenen Inside-Bars. Die zunehmende Kompression schafft ein Breakout-Setup, aber noch keine Richtung.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'ioi',
    aliases: ['Inside-Outside-Inside'],
    definition:
      'Dreierfolge aus Inside-Bar, Outside-Bar und erneutem Inside-Bar. Sie verbindet Expansion und erneute Kompression vor einem möglichen Breakout.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'Outside-Bar',
    aliases: ['o', 'Außenbar'],
    definition:
      'Bar mit einem Hoch über dem vorherigen Hoch und einem Tief unter dem vorherigen Tief. Seine größere Range zeigt Expansion, aber allein keine verlässliche Richtung.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'oo',
    aliases: ['Double Outside Bar'],
    definition:
      'Zwei aufeinanderfolgende Outside-Bars. Die starke zweiseitige Expansion ist besonders kontextabhängig und kann ein Breakout- oder Reversal-Setup bilden.',
    firstUnit: 'Kapitel 4',
  },
  {
    term: 'Shaved Bar',
    aliases: ['rasierter Bar', 'Shaved Top', 'Shaved Bottom'],
    definition:
      'Bar ohne sichtbaren Tail an mindestens einem Ende, weil Hoch oder Tief mit Eröffnung oder Schluss zusammenfällt. Der fehlende Tail kann gerichtete Kontrolle zeigen.',
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
  {
    term: 'Marktträgheit',
    aliases: ['Inertia', 'Trägheit'],
    definition:
      'Tendenz des Marktes, sein aktuelles Verhalten zunächst fortzusetzen: Trends widerstehen frühen Umkehrversuchen, Ranges weisen viele Ausbruchsversuche zurück.',
    firstUnit: 'Kapitel 1',
  },
  {
    term: 'Leg',
    aliases: ['Bein', 'Push', 'Schub'],
    definition:
      'Gerichteter Abschnitt einer Kursbewegung. Mehrere Legs können zusammen einen Trend, Pullback oder eine Range-Struktur bilden.',
    firstUnit: 'Kapitel 1',
  },
  {
    term: 'Measured Move',
    aliases: ['gemessene Bewegung', 'Measured-Move-Ziel'],
    definition:
      'Projektion, bei der die Länge eines ersten Kursbeins als Näherung für ein späteres Bein verwendet wird; sie beschreibt ein mögliches Ziel, keine garantierte Umkehr.',
    firstUnit: 'Kapitel 1',
  },
  {
    term: 'Fehlausbruch',
    aliases: ['False Breakout', 'gescheiterter Ausbruch'],
    definition:
      'Bruch über oder unter eine relevante Grenze, der keine Akzeptanz erhält und schnell in den vorherigen Bereich zurückkehrt.',
    firstUnit: 'Kapitel 1',
  },
  {
    term: 'Trend from the Open',
    aliases: ['Trend-vom-Open-Tag'],
    definition:
      'Tagesstruktur, bei der sich die dominante Richtung bereits kurz nach der Eröffnung etabliert und den weiteren Handel wesentlich prägt.',
    firstUnit: 'Kapitel 1',
  },
  {
    term: 'Trend Resumption',
    aliases: ['Trendwiederaufnahme', 'Trend-Resumption-Tag'],
    definition:
      'Fortsetzung einer zuvor etablierten Trendrichtung nach einer deutlichen Pause, einem Pullback oder einer Trading Range.',
    firstUnit: 'Kapitel 1',
  },
  {
    term: 'Ein-Bar-Range',
    aliases: ['One-Bar Trading Range', 'Non-Trend-Bar'],
    definition:
      'Bar mit geringem Nettofortschritt vom Open zum Close, in dem beide Seiten handeln konnten; praktisch meist als Doji eingeordnet.',
    firstUnit: 'Kapitel 2',
  },
  {
    term: 'Klimax',
    aliases: ['Climax', 'Buy Climax', 'Sell Climax'],
    definition:
      'Schnelle, weit gelaufene Bewegung in eine Richtung. Sie endet mit der ersten Pause, bedeutet aber ohne Gegen-Breakout noch keine bestätigte Umkehr.',
    firstUnit: 'Kapitel 2',
  },
  {
    term: 'Vakuumeffekt',
    aliases: ['Vacuum Effect', 'Buy Vacuum', 'Sell Vacuum'],
    definition:
      'Beschleunigung, die teilweise entsteht, weil eine Gegenseite bis zu einem erwarteten Ziel kaum handelt und erst dort wieder aggressiv auftritt.',
    firstUnit: 'Kapitel 2',
  },
  {
    term: 'Kaufdruck',
    aliases: ['Buying Pressure'],
    definition:
      'Kumulative bullische Evidenz aus Körpern, Schlusskursen, Tails und Reaktionen an Tiefs, die eine Rally oder einen Regimewechsel wahrscheinlicher macht.',
    firstUnit: 'Kapitel 2',
  },
  {
    term: 'Verkaufsdruck',
    aliases: ['Selling Pressure'],
    definition:
      'Kumulative bearische Evidenz aus Körpern, Schlusskursen, Tails und Reaktionen an Hochs, die einen Rückgang oder Regimewechsel wahrscheinlicher macht.',
    firstUnit: 'Kapitel 2',
  },
  {
    term: 'Trendkanal-Überschuss',
    aliases: ['Trend Channel Line Overshoot', 'Overshoot'],
    definition:
      'Kurzzeitige Beschleunigung über eine Trendkanallinie hinaus. Ihr Scheitern kann auf einen reifen, nachlassenden Trend hinweisen.',
    firstUnit: 'Kapitel 2',
  },
  {
    term: 'Moving-Average-Gap-Bar',
    aliases: ['MA Gap Bar', 'Durchschnittslücken-Bar'],
    definition:
      'Bar in einem Trend, dessen Hoch oder Tief den gleitenden Durchschnitt nicht erreicht und damit eine sichtbare Lücke zur Durchschnittslinie lässt.',
    firstUnit: 'Kapitel 2',
  },
  {
    term: 'Spike',
    aliases: ['Impuls', 'schneller Breakout'],
    definition:
      'Schnelle, gerichtete Kursbewegung mit wenig zweiseitigem Handel, die den Markt aus einem alten Bereich in ein neues Preisgebiet verschiebt.',
    firstUnit: 'Kapitel 3',
  },
  {
    term: 'Trendkanal',
    aliases: ['Channel', 'Kanal'],
    definition:
      'Gerichtete, von zwei ungefähren Begrenzungen eingerahmte Bewegung mit Pullbacks und mehr Überlappung als in einem Spike.',
    firstUnit: 'Kapitel 3',
  },
  {
    term: 'Test',
    aliases: ['Retest', 'Prüfung einer Preiszone'],
    definition:
      'Rückkehr in die Nähe einer relevanten Referenz, an der Akzeptanz oder Zurückweisung anhand der anschließenden Kursreaktion beurteilt wird.',
    firstUnit: 'Kapitel 3',
  },
  {
    term: 'Breakout-Pullback',
    aliases: ['Ausbruchsrücklauf', 'Retest nach Breakout'],
    definition:
      'Rücklauf nach einem Ausbruch, der prüft, ob die zuvor überwundene Grenze auf ihrer neuen Seite als Unterstützung oder Widerstand hält.',
    firstUnit: 'Kapitel 3',
  },
  {
    term: 'Always-in',
    aliases: ['Always-in long', 'Always-in short'],
    definition:
      'Arbeitseinschätzung, welche Seite aktuell die stärkere Gesamtevidenz besitzt, falls ein Trader fortlaufend nur Long oder Short wählen müsste.',
    firstUnit: 'Kapitel 3',
  },
  {
    term: 'Doppeltop',
    aliases: ['Double Top', 'DT'],
    definition:
      'Zwei Hochtests in derselben ungefähren Widerstandszone; entscheidend ist die Zurückweisung, nicht die exakte Gleichheit der Hochs.',
    firstUnit: 'Kapitel 3',
  },
  {
    term: 'Doppeltief',
    aliases: ['Double Bottom', 'DB'],
    definition:
      'Zwei Tieftests in derselben ungefähren Unterstützungszone; die Stärke der Reaktion wiegt schwerer als eine perfekte geometrische Form.',
    firstUnit: 'Kapitel 3',
  },
  {
    term: 'Wedge',
    aliases: ['Keil', 'drei Schübe'],
    definition:
      'Struktur aus meist drei gerichteten Schüben, deren abnehmende Effizienz eine Korrektur oder Umkehr begünstigen kann, aber nicht garantiert.',
    firstUnit: 'Kapitel 3',
  },
  {
    term: 'Final Flag',
    aliases: ['letzte Flag', 'Final-Flag-Reversal'],
    definition:
      'Späte Pause oder kleine Fortsetzungsstruktur in einem reifen Move, deren Ausbruch scheitern und eine Gegenbewegung einleiten kann.',
    firstUnit: 'Kapitel 3',
  },
];
