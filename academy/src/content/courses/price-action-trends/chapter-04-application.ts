import type { Lesson } from '../../types';

export const chapterFourApplicationLessons = [
  {
    id: 'price-action-trends.chapter-04.lesson-19',
    title: 'Der Anfängerfilter entfernt die gefährlichsten Trades',
    summary:
      'Warum Einsteiger nur Trendbars in Trade-Richtung und ausschließlich mit dem bestehenden Trend handeln sollten.',
    durationMinutes: 12,
    xp: 45,
    sourceUnit: 'Kapitel 4 · Auswahlregeln für Einsteiger',
    sourceAnchors: [
      'Einstieg nur bei Signal-Bar als Trendbar in Trade-Richtung',
      'Short nur mit bearischem Signal-Bar im Bärentrend',
      'Long nur mit bullischem Signal-Bar im Bullenmarkt',
      'Sichtbarer Druck vor Einstieg als höhere Follow-through-Chance',
      'Verzicht auf Countertrend- und uneindeutige Signale',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-19-explain',
        type: 'explanation',
        eyebrow: 'Sicherheitsfilter',
        title: 'Am Anfang müssen Trend, Signal und Trade dieselbe Richtung zeigen',
        paragraphs: [
          'Ein erfahrener Trader kann schwache Signal-Bars, Limit-Einstiege und Fehlschläge gegeneinander abwägen. Ein Anfänger besitzt diese Geschwindigkeit und Erfahrung noch nicht. Er braucht deshalb einen engen Filter, der viele interessante, aber schwer zu bewertende Trades konsequent entfernt.',
          'Für einen Short sollte der Markt bereits bärisch sein und der Signal-Bar als Bear-Trendbar schließen. Für einen Long sollte ein Bullenmarkt bestehen und der Signal-Bar einen bullischen Körper mit erkennbarem Kaufdruck zeigen. Trend, Bar und geplante Richtung stimmen dann überein.',
          'Dieser Filter garantiert keinen Erfolg. Er erhöht aber die Chance, dass vor dem Einstieg bereits sichtbarer Druck auf deiner Seite vorhanden ist und nach der Auslösung Anschluss entsteht. Gleichzeitig verhindert er, dass du jede auffällige Kerze gegen einen starken Trend handelst.',
          'Später kann der Filter erweitert werden. Zuerst sollst du jedoch lernen, saubere With-trend-Entscheidungen wiederholbar auszuführen. Komplexität ist keine Abkürzung zur Erfahrung.',
        ],
        callout:
          'Anfängerregel: bullischer Signal-Bar im Bullenmarkt für Long – bearischer Signal-Bar im Bärenmarkt für Short.',
      },
      {
        id: 'chapter-04-19-diagram',
        type: 'diagram',
        title: 'Der Drei-Punkte-Filter für den Einstieg',
        scenario: 'beginner-signal-filter',
        caption:
          'Nur wenn Markttrend, Signal-Bar und Trade-Richtung zusammenpassen, erreicht das Setup die Anfänger-Freigabe.',
        observations: [
          'Der Trend liefert die Grundrichtung.',
          'Der Signal-Bar muss sichtbaren Druck in derselben Richtung zeigen.',
          'Der geplante Einstieg folgt oberhalb beziehungsweise unterhalb des Signal-Bars.',
          'Countertrend, falsche Barfarbe oder unklare Range-Lage führen zunächst zu „Auslassen“.',
        ],
      },
      {
        id: 'chapter-04-19-compare',
        type: 'comparison',
        title: 'Freigabe oder Auslassen',
        columns: [
          {
            title: 'Anfänger-Freigabe',
            tone: 'positive',
            points: [
              'klarer Trend',
              'Signal-Bar schließt in Trade-Richtung',
              'logischer Stop und ausreichend Raum zum Ziel',
            ],
          },
          {
            title: 'Vorerst auslassen',
            tone: 'warning',
            points: [
              'Trade gegen den Trend',
              'Signal-Bar widerspricht der Richtung',
              'enge Mitte einer Trading Range',
            ],
          },
        ],
      },
      {
        id: 'chapter-04-19-question',
        type: 'question',
        title: 'Welche Kombination besteht den Filter?',
        prompt:
          'Welche Situation ist für einen Anfänger am saubersten?',
        options: [
          {
            id: 'bull-bull-long',
            label: 'Bullischer Signal-Bar im Bullenmarkt für Long',
            explanation:
              'Richtig. Trend, sichtbarer Druck und Trade-Richtung stimmen überein.',
          },
          {
            id: 'bear-bull-long',
            label: 'Bearischer Signal-Bar im Bärentrend für Long',
            explanation:
              'Das wäre ein Countertrend-Trade mit widersprechendem Bar und ist für Einsteiger ungeeignet.',
          },
          {
            id: 'doji-middle',
            label: 'Doji mitten in einer engen Range für beliebige Richtung',
            explanation:
              'Hier fehlen Trendrichtung, klare Lage und sichtbarer Druck.',
          },
        ],
        correctOptionId: 'bull-bull-long',
      },
      {
        id: 'chapter-04-19-recap',
        type: 'recap',
        title: 'Ein enger Filter ist ein Vorteil',
        points: [
          'Einsteiger handeln zunächst ausschließlich mit dem Trend.',
          'Der Signal-Bar soll in Trade-Richtung schließen.',
          'Sichtbarer Druck verbessert die Chance auf Follow-through.',
          'Viele ausgelassene Trades sind der Preis für klarere Lernsignale.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-20',
    title: 'Trendstärke bestimmt, wie schön das Signal sein muss',
    summary:
      'Warum starke Trends schlechte Signal-Bars erlauben, Countertrend-Einstiege dagegen außergewöhnlich viel Bestätigung brauchen.',
    durationMinutes: 16,
    xp: 55,
    sourceUnit: 'Kapitel 4 · Asymmetrische Anforderungen an Signal-Bars',
    sourceAnchors: [
      'Stärkere Signal-Bars für Trendwenden als für Pullbacks und Range-Trades',
      'Mehrheit der Countertrend-Versuche scheitert',
      'Sehr starke Trends mit schlecht aussehenden, aber guten Signal-Bars',
      'Offensichtliche Setups werden schnell und klein korrigiert',
      'Swing-Setups mit häufig nur ausgeglichener oder niedriger Trefferchance',
      'Zweite Einstiege am Range-Rand trotz Barfarbe gegen den Trade',
      'Trendlinienbruch, Pullback und starker Reversal-Bar als Mindeststruktur',
      'Neues Extrem nach Trendlinienbruch weiterhin möglich',
      'Signal-Bar-Form wird mit wachsender Trendstärke weniger wichtig',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-20-explain',
        type: 'explanation',
        eyebrow: 'Beweislast',
        title: 'Mit Trägheit darf das Signal hässlich sein – gegen Trägheit nicht',
        paragraphs: [
          'In einem sehr starken Trend sind Trader bereit, kleine Pullbacks sofort zu handeln. Sie warten nicht darauf, dass ein perfekter Signal-Bar erscheint. Ein Bärentrend-Bar am gleitenden Durchschnitt kann deshalb ein guter Long-Setup-Bar sein, wenn zugleich ein früheres Swing-Tief, eine Trendlinie oder eine andere Unterstützungszone getestet wird.',
          'Starke Trends halten viele Trader absichtlich draußen: Jeder Pullback sieht zu klein, jeder Einstieg zu spät und jeder Signal-Bar unattraktiv aus. Wer auf die perfekte Kerze wartet, muss dem Markt später hinterherlaufen. Je eindeutiger die Trendkontrolle, desto weniger Gewicht besitzt die isolierte Barform.',
          'Ein Countertrend-Trade trägt die gegenteilige Beweislast. Die meisten frühen Umkehrversuche werden nur zu Pullbacks und erzeugen den nächsten Einstieg in Trendrichtung. Für eine Trendwende brauchst du deshalb einen unterstützenden Gesamtchart, einen kräftigen Bruch der Trendstruktur, einen anschließenden Test und einen starken Reversal-Bar. Selbst der Test darf noch ein neues Extrem bilden.',
          'Zweite Umkehrversuche am oberen Range-Rand können einen bullischen Signal-Bar besitzen und trotzdem gute Shorts werden. Am unteren Rand kann ein Bear-Bar einen Long vorbereiten. Hier liefern Lage und wiederholtes Scheitern mehr Information als die Körperfarbe.',
          'Sehr offensichtliche kleine Fehlbewertungen werden oft schnell geschlossen und liefern eher kurze Scalps. Größere Swing-Setups bleiben dagegen häufig unsicher und können zunächst wie eine fortgesetzte Range aussehen. Eine schöne Optik ist daher nicht gleichbedeutend mit hoher Trefferwahrscheinlichkeit.',
        ],
        callout:
          'Je stärker der Trend, desto weniger wichtig ist die Signal-Bar-Optik. Je stärker der Trade gegen den Trend läuft, desto wichtiger werden perfekter Kontext und ein starkes Signal.',
      },
      {
        id: 'chapter-04-20-diagram',
        type: 'diagram',
        title: 'Signalqualität und Trendstärke wirken gegeneinander',
        scenario: 'trend-signal-strength',
        caption:
          'Links reicht im starken Bullenmarkt ein optisch schwacher Pullback-Bar. Rechts benötigt die bärische Umkehr eine ganze Beweiskette.',
        observations: [
          'Starker Trend plus Konfluenz kann eine ungünstige Barfarbe überwiegen.',
          'Der Countertrend-Trade muss erst Trendlinie und Marktstruktur brechen.',
          'Der Rücktest kann ein letztes neues Hoch oder Tief produzieren.',
          'Der starke Reversal-Bar ist erst am Ende der Kette sinnvoll.',
          'Ohne Folgebewegung bleibt auch das perfekte Bild nur ein Setup.',
        ],
      },
      {
        id: 'chapter-04-20-compare',
        type: 'comparison',
        title: 'Asymmetrische Anforderungen',
        columns: [
          {
            title: 'With-trend im starken Trend',
            tone: 'positive',
            points: [
              'übergeordnete Kontrolle ist bereits bewiesen',
              'schwacher Signal-Bar kann akzeptabel sein',
              'kleiner Pullback und günstige Lage reichen oft',
            ],
          },
          {
            title: 'Countertrend',
            tone: 'warning',
            points: [
              'Basisrate arbeitet gegen die Umkehr',
              'Strukturbruch und Rücktest werden benötigt',
              'Signal-Bar und Gesamtchart müssen außergewöhnlich stark sein',
            ],
          },
        ],
      },
      {
        id: 'chapter-04-20-question',
        type: 'question',
        title: 'Welche Umkehr besitzt genug Evidenz?',
        prompt:
          'Nach einem langen Bullenmarkt erscheint der erste Bear-Bar, aber Trendlinie und Swing-Tiefs sind intakt. Reicht das für einen hochwertigen Countertrend-Short?',
        options: [
          {
            id: 'yes-first',
            label: 'Ja, die erste rote Kerze bestätigt die Trendwende',
            explanation:
              'Frühe Gegenbars werden in starken Trends häufig nur Teil des nächsten Pullbacks.',
          },
          {
            id: 'wait-structure',
            label: 'Nein, Strukturbruch, Test und starkes Signal fehlen',
            explanation:
              'Richtig. Ein Countertrend-Trade braucht eine deutlich größere Beweiskette.',
          },
          {
            id: 'color-never',
            label: 'Nein, weil Bear-Bars grundsätzlich keine Signale sind',
            explanation:
              'Bear-Bars können gute Signale sein; hier fehlt der unterstützende Umkehrkontext.',
          },
        ],
        correctOptionId: 'wait-structure',
      },
      {
        id: 'chapter-04-20-recap',
        type: 'recap',
        title: 'Die Regel der Beweislast',
        points: [
          'Starke Trends produzieren oft unattraktive, aber brauchbare With-trend-Signale.',
          'Die isolierte Barform verliert mit wachsender Trendstärke an Gewicht.',
          'Countertrend-Versuche scheitern häufig und werden zu neuen Trendflags.',
          'Strukturbruch, Rücktest und starker Reversal-Bar bilden eine robustere Umkehrkette.',
          'Offensichtlichkeit und Schönheit sind keine Garantie für hohe Trefferwahrscheinlichkeit.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-21',
    title: 'Eine nicht ausgelöste Order wird gestrichen',
    summary:
      'Wie Stop-Einstiege außerhalb des Signal-Bars geplant, nach verpasster Auslösung gelöscht und gegen Ein-Tick-Fallen angepasst werden.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 4 · Stop-Einstieg und Orderpflege',
    sourceAnchors: [
      'Mehrheit potenzieller Signal-Bars führt nie zu einem Einstieg',
      'Viele vorbereitete Daytrading-Orders bleiben unausgeführt',
      'Stop-Einstieg einen Tick jenseits des vorherigen Bars',
      'Streichen der Order bei ausbleibender Auslösung',
      'Mehrere Ticks Abstand bei Aktien wegen Ein-Tick-Fallen',
      'Setup-Bar mit Stop-Orders in beide Richtungen',
      'Signal-Bar-Rolle erst nach tatsächlicher Ausführung',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-21-explain',
        type: 'explanation',
        eyebrow: 'Execution',
        title: 'Eine Order ist ein zeitlich begrenzter Plan',
        paragraphs: [
          'Fast jeder Bar könnte theoretisch ein Signal werden, doch die meisten führen nie zu einem Einstieg. Professionelles Daytrading enthält deshalb viele vorbereitete Orders, die wieder gelöscht werden. Das ist keine verpasste Chance, sondern normale Selektion.',
          'Für einen Long liegt der Buy-Stop häufig einen Tick über dem potenziellen Signal-Bar; für einen Short der Sell-Stop einen Tick darunter. Der Markt muss damit zuerst etwas Fortschritt in Trade-Richtung zeigen, bevor du beteiligt bist.',
          'Wird die Order nicht zeitnah erreicht und verändert sich der Chart, streichst du sie. Ein neuer Bar schafft neue Informationen und möglicherweise einen besseren Ort. Eine alte Order darf nicht unsichtbar liegen bleiben und später in einem völlig anderen Kontext ausgelöst werden.',
          'Bei einzelnen Aktien können minimale Grenzbrüche häufiger sofort zurückdrehen. Ein Einstieg mit etwas mehr Abstand jenseits des Signal-Bars kann solche Ein-Tick-Fallen reduzieren, erhöht aber den Einstiegspreis und verändert Stop-Distanz sowie Chance-Risiko-Verhältnis.',
          'Manche Bars sind in beide Richtungen handelbar. Dann können Buy-Stop und Sell-Stop außerhalb beider Extreme vorbereitet werden. Erst der ausgelöste Breakout bestimmt den Trade; die andere Order muss nach Einstieg gelöscht oder als bewusst geplante Umkehrorder separat behandelt werden.',
        ],
        callout:
          'Nicht ausgelöst heißt nicht verloren: Lösche die veraltete Order und bewerte den neuen Chart, statt einem alten Plan hinterherzulaufen.',
      },
      {
        id: 'chapter-04-21-diagram',
        type: 'diagram',
        title: 'Planen, auslösen oder löschen',
        scenario: 'stop-entry-lifecycle',
        caption:
          'Das Schaubild zeigt den normalen Stop-Einstieg, eine nicht ausgelöste und gestrichene Order sowie die Ein-Tick-Falle mit zusätzlichem Filterabstand.',
        observations: [
          'Die Stop-Order wartet außerhalb des Signal-Bars auf Richtungsfortschritt.',
          'Ohne Auslösung bleibt der Bar ein Setup-Bar und die Order wird neu bewertet.',
          'Ein Ein-Tick-Ausbruch kann Breakout-Trader fangen und sofort zurückkehren.',
          'Mehr Abstand filtert einige Fallen, verschlechtert aber den Einstiegspreis.',
          'Bei zwei Richtungsorders muss die nicht benötigte Gegenseite aktiv verwaltet werden.',
        ],
      },
      {
        id: 'chapter-04-21-question',
        type: 'question',
        title: 'Was tust du mit einer alten Order?',
        prompt:
          'Dein Buy-Stop über einem Setup-Bar wird nicht ausgelöst. Zwei neue Bars verändern den Kontext deutlich. Was ist die saubere Reaktion?',
        options: [
          {
            id: 'leave',
            label: 'Order unbegrenzt liegen lassen',
            explanation:
              'Sie könnte später in einem Kontext ausgelöst werden, für den sie nie geplant war.',
          },
          {
            id: 'cancel',
            label: 'Order löschen und den neuen Chart bewerten',
            explanation:
              'Richtig. Eine Entry-Order gehört zu einer konkreten, zeitlich begrenzten These.',
          },
          {
            id: 'market-chase',
            label: 'Sofort per Market-Order hinterherspringen',
            explanation:
              'Ohne gültiges Setup ersetzt Ungeduld keine neue Analyse.',
          },
        ],
        correctOptionId: 'cancel',
      },
      {
        id: 'chapter-04-21-recap',
        type: 'recap',
        title: 'Orderpflege gehört zum Setup',
        points: [
          'Die meisten möglichen Signal-Bars erzeugen keinen Trade.',
          'Stop-Einstiege verlangen einen kleinen Fortschritt jenseits des Bars.',
          'Nicht ausgelöste Orders werden gelöscht, sobald die ursprüngliche These veraltet.',
          'Zusätzlicher Filterabstand kann Ein-Tick-Fallen reduzieren, verändert aber das Risiko.',
          'Bei Orders in beide Richtungen muss die Gegenseite nach Auslösung kontrolliert werden.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-22',
    title: 'Kerzennamen ersetzen keine Price Action',
    summary:
      'Warum Trendbar, Doji, Körper und Tail meist ausreichen und exotische Candlestick-Namen vom Marktregime ablenken können.',
    durationMinutes: 12,
    xp: 45,
    sourceUnit: 'Kapitel 4 · Candle Patterns ohne Mystik',
    sourceAnchors: [
      'Trend oder Trading Range als wichtigste Marktfrage',
      'Einzelbar als Trendbar oder Doji',
      'Körper als sichtbare Kontrolle einer Marktseite',
      'Kleiner oder fehlender Körper als Balance',
      'Wick, Shadow und Tail als Begriffe für Bar-Enden',
      'Candlestick-Namen ohne stabilen Kontextvorteil',
      'Bar-Bedeutung ausschließlich in Relation zur Price Action',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-22-explain',
        type: 'explanation',
        eyebrow: 'Weniger Vokabular, mehr Verständnis',
        title: 'Reduziere die Kerze auf Kontrolle, Balance und Lage',
        paragraphs: [
          'Exotische Candlestick-Namen wirken präzise und versprechen eine geheime Bedeutung. Für die praktische Entscheidung können sie jedoch zusätzliche Denkarbeit erzeugen, ohne die Wahrscheinlichkeit zuverlässig zu verbessern.',
          'Die wichtigste Chartfrage bleibt: Trend oder Trading Range? Beim einzelnen Bar lautet dieselbe Frage: gerichtete Kontrolle oder Balance? Ein sichtbarer Körper zeigt Fortschritt vom Open zum Close und damit relative Kontrolle. Ein sehr kleiner oder fehlender Körper zeigt, dass beide Seiten den Bar weitgehend ausgeglichen beendet haben.',
          'Die Linien oberhalb und unterhalb des Körpers werden je nach Tradition Wick, Shadow oder Tail genannt. Für unsere Analyse ist „Tail“ nützlich, weil er sofort an eine Zurückweisung vom Bar-Extrem erinnert. Der Name ändert aber nicht die gehandelten Preise.',
          'Ein Bar ist nur in Beziehung zu vorheriger Bewegung, Trend, Range-Rand, Unterstützung, Widerstand und Folgebars bedeutend. Dasselbe Kerzenmuster kann am richtigen Ort ein gutes Setup und wenige Bars später bedeutungslos sein.',
          'Du brauchst daher kein Lexikon mystischer Formen. Trendbar oder Doji, Körper, Tails, Lage und Follow-through liefern eine klarere und schneller anwendbare Sprache.',
        ],
        callout:
          'Wenn ein Kerzenname nicht erklärt, wer Kontrolle hat, wo der Bar liegt und was danach bestätigt werden muss, hilft er der Entscheidung kaum.',
      },
      {
        id: 'chapter-04-22-diagram',
        type: 'diagram',
        title: 'Viele Namen werden zu drei Fragen',
        scenario: 'candle-name-reduction',
        caption:
          'Statt Formen auswendig zu lernen, wird jeder Bar auf Kontrolle, Lage und Folgebewegung reduziert.',
        observations: [
          'Körpergröße und Schlussposition beschreiben relative Kontrolle.',
          'Tails zeigen Zurückweisung oder zweiseitigen Handel.',
          'Trend oder Range bestimmt die Ausgangserwartung.',
          'Lage an einer Referenzzone gibt der Form erst Bedeutung.',
          'Follow-through bestätigt oder widerlegt die Signalidee.',
        ],
      },
      {
        id: 'chapter-04-22-question',
        type: 'question',
        title: 'Welche Frage kommt zuerst?',
        prompt:
          'Du erkennst ein Candlestick-Muster mit bekanntem Namen. Was solltest du vor einem Trade zuerst klären?',
        options: [
          {
            id: 'origin-name',
            label: 'Woher der historische Name stammt',
            explanation:
              'Die Wortgeschichte verändert weder Orderlage noch Wahrscheinlichkeit.',
          },
          {
            id: 'context',
            label: 'Trend, Lage, Kontrolle und nötiger Follow-through',
            explanation:
              'Richtig. Diese Punkte verbinden den Bar mit der aktuellen Auktion.',
          },
          {
            id: 'memorize-more',
            label: 'Ob es noch einen spezielleren Namen gibt',
            explanation:
              'Zusätzliche Etiketten können die eigentliche Marktentscheidung verdecken.',
          },
        ],
        correctOptionId: 'context',
      },
      {
        id: 'chapter-04-22-recap',
        type: 'recap',
        title: 'Die einfache Sprache',
        points: [
          'Bestimme zuerst Trend oder Trading Range.',
          'Lies den einzelnen Bar als Kontrolle oder Balance.',
          'Körper und Tails beschreiben die sichtbare Auktion.',
          'Lage und Folgebars geben dem Muster seinen Wert.',
          'Exotische Namen sind optional und niemals ein eigenständiger Edge.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-23',
    title: 'Der unfertige Bar kann dein Setup verschieben',
    summary:
      'Wie späte Bar-Ausdehnung einen guten Einstieg an den falschen Ort verlegt und warum der erste Pause-Bar eine Klimaxphase beendet.',
    durationMinutes: 15,
    xp: 55,
    sourceUnit: 'Kapitel 4 · Schlusssekunden und Klimaxende',
    sourceAnchors: [
      'Signal-Bar sieht vor seinem Schluss zeitweise ideal aus',
      'Schnelle Vergrößerung in den letzten Sekunden',
      'Gute Form bei schlechterem Einstieg nahe dem Flag-Hoch',
      'Zweiter Einstieg als sicherere Anfängerentscheidung',
      'Gefangene Bären als mögliche Ausnahme mit erhöhtem Risiko',
      'Große überlappende Range-Bars als Risikowarnung',
      'Jeder Trendbar als Klimax oder Teil einer Klimax',
      'Erster Pause-Bar beendet die laufende Klimaxphase',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-23-explain',
        type: 'explanation',
        eyebrow: 'Bar-Schluss abwarten',
        title: 'Gute Form kann in wenigen Sekunden zu schlechter Lage werden',
        paragraphs: [
          'Ein noch laufender Fünf-Minuten-Bar kann drei Minuten lang wie ein idealer bullischer Reversal-Bar aussehen. Wenn er in den letzten Sekunden mehrere Ticks wächst, bleibt seine Form vielleicht bullisch – sein Hoch liegt nun aber deutlich höher und dein Stop-Einstieg würde an einem viel schlechteren Preis erfolgen.',
          'Besonders problematisch ist das nach einem Ausbruch aus einer letzten Bärenflagge. Der geplante Kauf lag zunächst nahe dem günstigen Tief, befindet sich nach der späten Expansion plötzlich am oberen Rand der alten Flag. Form und Richtung stimmen weiterhin, aber Lage, Stop-Distanz und verbleibender Zielraum haben sich verschlechtert.',
          'Solange du noch nicht schnell und konstant profitabel liest, lässt du diesen Trade besser aus und wartest auf einen zweiten Einstieg. Ein erfahrener Trader kann ihn handeln, wenn viele Bären sichtbar gefangen sind. Mehrere große, stark überlappende Range-Bars erhöhen jedoch das Risiko und sprechen gegen blinde Aggressivität.',
          'Die Sequenz hilft zugleich, Klimaxe sauber zu definieren. Jeder Trendbar kann als kleine Klimax oder Teil einer mehrbarigen Klimax gelesen werden. Die Klimaxphase endet mit dem ersten Pause-Bar: etwa einem kleinen Bar mit deutlichem Tail, einem Inside-Bar, Doji oder kräftigen Gegenbar.',
          'Das Ende der Klimax ist noch keine bestätigte Trendwende. Es zeigt nur, dass die ununterbrochene Beschleunigung pausiert. Danach können Range, Pullback, Fortsetzung oder echte Umkehr folgen.',
        ],
        callout:
          'Entscheide mit dem abgeschlossenen Bar. Wenn späte Expansion den Einstieg verschlechtert, ist Auslassen oder ein zweiter Einstieg oft die bessere Wahl.',
      },
      {
        id: 'chapter-04-23-diagram',
        type: 'diagram',
        title: 'Späte Expansion und das Ende der Klimax',
        scenario: 'forming-bar-climax',
        caption:
          'Links wandert der geplante Einstieg durch die letzten Sekunden nach oben. Rechts beendet der erste Pause-Bar die vorherige Folge starker Trendbars.',
        observations: [
          'Vorläufig gute Barform ist keine fertige Handelsinformation.',
          'Ein höheres Bar-Hoch vergrößert Einstiegspreis und Stop-Distanz.',
          'Der zweite Einstieg erlaubt eine neue Bewertung nach dem ersten Fehlschlag oder Pullback.',
          'Der erste Pause-Bar beendet die Klimaxphase, nicht automatisch den gesamten Trend.',
          'Überlappende große Bars warnen vor hoher zweiseitiger Volatilität.',
        ],
      },
      {
        id: 'chapter-04-23-compare',
        type: 'comparison',
        title: 'Form bleibt gut, Tradequalität kann sinken',
        columns: [
          {
            title: 'Vor der Expansion',
            tone: 'positive',
            points: [
              'Einstieg nahe günstiger Reversal-Zone',
              'kleinere Stop-Distanz',
              'mehr Raum bis zum nächsten Widerstand',
            ],
          },
          {
            title: 'Nach der Expansion',
            tone: 'warning',
            points: [
              'Einstieg nahe Flag-Hoch',
              'größere Stop-Distanz oder kleinere Position nötig',
              'weniger Zielraum und mehr Überlappungsrisiko',
            ],
          },
        ],
      },
      {
        id: 'chapter-04-23-question',
        type: 'question',
        title: 'Was bedeutet der erste Pause-Bar?',
        prompt:
          'Nach drei starken Bull-Bars erscheint ein kleiner Inside-Bar. Was ist dadurch sicher beendet?',
        options: [
          {
            id: 'whole-trend',
            label: 'Der gesamte Bullenmarkt',
            explanation:
              'Eine Pause kann auch nur einen kurzen Pullback vor weiterer Fortsetzung einleiten.',
          },
          {
            id: 'climax-phase',
            label: 'Die ununterbrochene Klimaxphase',
            explanation:
              'Richtig. Die Beschleunigung pausiert; die nächste Marktphase ist noch offen.',
          },
          {
            id: 'all-buying',
            label: 'Jede weitere Kaufmöglichkeit',
            explanation:
              'Der Markt kann nach der Pause erneut bullisch ausbrechen.',
          },
        ],
        correctOptionId: 'climax-phase',
      },
      {
        id: 'chapter-04-23-recap',
        type: 'recap',
        title: 'Timing und Phase sauber trennen',
        points: [
          'Ein laufender Bar kann Form, Größe und Einstiegslage bis zum Schluss verändern.',
          'Späte Expansion kann einen guten Setup-Ort in einen schlechten Einstieg verwandeln.',
          'Ein zweiter Einstieg ist für weniger erfahrene Trader oft die bessere Wahl.',
          'Jeder Trendbar kann Teil einer Klimax sein.',
          'Der erste Pause-Bar beendet die Klimaxphase, bestätigt aber noch keine Trendwende.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-24',
    title: 'Chartfall 4.1: Warum Bar 3 ein starkes Signal braucht',
    summary:
      'Wie Trendlinienbruch, zweibeiniger Selloff und zwei gebündelte Tests den Countertrend-Kauf über Bar 3 vorbereiten.',
    durationMinutes: 11,
    xp: 45,
    sourceUnit: 'Kapitel 4 · Chartfall 4.1 · Umkehrbereich und Bar 3',
    sourceAnchors: [
      '15-Minuten-Chart mit Bruch der Bärentrendlinie',
      'Zweibeiniger Selloff zu einem Lower Low unter dem Vortagestief',
      'Erstes Bein endet in iii bei Bar 2',
      'Bar 3 als starker bullischer Reversal-Bar an zwei Testzonen',
      'Buy-Stop oberhalb von Bar 3 macht ihn nach Auslösung zum Signal-Bar',
      'Starkes Signal wegen Countertrend-Charakter erforderlich',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-24-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 4.1 · Vorbereitung',
        title: 'Trendlinienbruch und Lower Low schaffen noch keine fertige Umkehr',
        paragraphs: [
          'Der Fall beginnt mit einem bestehenden Bärentrend. Der Markt bricht zunächst über die fallende Trendlinie, verkauft anschließend jedoch in zwei Beinen erneut ab und erreicht ein tieferes Tief unter dem Vortagestief. Damit entsteht noch kein bestätigter Bullenmarkt, aber eine mögliche Umkehrzone.',
          'Das erste Verkaufsbein endet in einer dreifachen Inside-Kompression bei Bar 2. Nach einer Zwischenreaktion folgt das zweite Bein zum neuen Tief. Bar 3 dreht kräftig bullisch und weist gleichzeitig den Bruch des Vortagestiefs sowie den Rücktest der zuvor gebrochenen Bärentrendlinie zurück.',
          'Solange keine Order ausgeführt ist, bleibt Bar 3 ein Setup-Bar. Ein Buy-Stop knapp über seinem Hoch verlangt zumindest einen kleinen bullischen Fortschritt. Erst wenn diese Order im nächsten Bar erreicht wird, erhält Bar 3 rückblickend die Rolle des Signal-Bars.',
          'Der Long arbeitet gegen den vorherigen Bärentrend. Deshalb ist der starke bullische Reversal-Bar an einer mehrfach bestätigten Testzone besonders wichtig. Mit einem schwachen Signal wäre die Wahrscheinlichkeit geringer, dass aus dem Countertrend-Versuch mehr als ein kurzer Bounce wird.',
        ],
        callout:
          'Bar 3 bündelt drei Dinge: Zurückweisung des Vortagestiefs, Test der gebrochenen Trendlinie und einen starken bullischen Schluss.',
      },
      {
        id: 'chapter-04-24-diagram',
        type: 'diagram',
        title: 'Der Weg vom Trendlinienbruch zum Reversal-Bar 3',
        scenario: 'signal-entry-case',
        caption:
          'Das Schaubild zeigt den gesamten Fall, während diese Lektion bewusst die linke Hälfte fokussiert: Trendlinienbruch, zwei Verkaufsbeine, Lower Low und die Zurückweisung durch Bar 3.',
        observations: [
          'Der Trendlinienbruch bereitet die Umkehr vor, bestätigt sie aber noch nicht.',
          'Das Lower Low unter dem Vortagestief wird von Bar 3 zurückgewiesen.',
          'Der Buy-Stop über Bar 3 verlangt erste Bestätigung, bevor die Rolle Signal-Bar feststeht.',
        ],
      },
      {
        id: 'chapter-04-24-compare',
        type: 'comparison',
        title: 'Die Beweiskette vor dem Einstieg',
        columns: [
          {
            title: 'Vor Bar 3',
            tone: 'warning',
            points: [
              'Bärentrend bleibt die Ausgangsstruktur',
              'Trendlinienbruch war nur eine Vorbereitung',
              'zweiter Selloff schafft sogar ein Lower Low',
            ],
          },
          {
            title: 'Bar 3',
            tone: 'positive',
            points: [
              'Vortagestief wird zurückgewiesen',
              'gebrochene Trendlinie wird erfolgreich getestet',
              'starker Bull-Bar liefert die nötige Countertrend-Qualität',
            ],
          },
        ],
      },
      {
        id: 'chapter-04-24-question',
        type: 'question',
        title: 'Welche Rolle besitzt Bar 3 vor dem Fill?',
        prompt:
          'Bar 3 ist abgeschlossen und ein Buy-Stop liegt über seinem Hoch, wurde aber noch nicht erreicht. Wie wird Bar 3 zu diesem Zeitpunkt korrekt bezeichnet?',
        options: [
          {
            id: 'setup',
            label: 'Potenzieller Setup-Bar',
            explanation:
              'Richtig. Erst die tatsächliche Ausführung macht ihn rückblickend zum Signal-Bar.',
          },
          {
            id: 'entry',
            label: 'Entry-Bar',
            explanation:
              'Der Entry-Bar ist der nachfolgende Bar, in dem der Buy-Stop ausgelöst wird.',
          },
          {
            id: 'followthrough',
            label: 'Follow-through-Bar',
            explanation:
              'Follow-through folgt erst nach dem Entry und bestätigt weitere bullische Bewegung.',
          },
        ],
        correctOptionId: 'setup',
      },
      {
        id: 'chapter-04-24-recap',
        type: 'recap',
        title: 'Die Umkehr wird vorbereitet, nicht erraten',
        points: [
          'Der Trendlinienbruch allein bestätigt noch keine Umkehr.',
          'Der zweibeinige Selloff endet unter dem Vortagestief.',
          'Bar 3 weist zwei wichtige Testzonen kräftig zurück.',
          'Vor dem Fill bleibt Bar 3 ein möglicher Setup-Bar.',
          'Die starke Signalqualität ist nötig, weil der Long gegen den vorherigen Trend arbeitet.',
        ],
      },
    ],
  },
] satisfies Lesson[];
