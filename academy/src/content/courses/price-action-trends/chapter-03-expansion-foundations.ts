import type { Lesson } from '../../types';

export const chapterThreeExpansionFoundationLessons = {
  channelTwoSided: {
    id: 'price-action-trends.chapter-03.lesson-channel-two-sided',
    title: 'Im Kanal wird der Handel schrittweise zweiseitig',
    summary:
      'Wie Überlappung, Tails, kleine Pullbacks und Gegenbars zeigen, dass aus dem schnellen Spike eine langsamere Auktion wird.',
    durationMinutes: 11,
    xp: 40,
    sourceUnit: 'Kapitel 3 · Innere Struktur des Kanals',
    sourceAnchors: [
      'Mehr Überlappung nach dem ersten Pullback',
      'Kleine Pullbacks, Tails und Gegenbars im Trendkanal',
      'Gewinnmitnahmen der Trendseite während der Fortsetzung',
      'Aufbau gestaffelter Gegenpositionen im reifenden Kanal',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-channel-two-sided-explain',
        type: 'explanation',
        eyebrow: 'Vom Impuls zur Verhandlung',
        title: 'Die Richtung bleibt, aber beide Seiten handeln wieder',
        paragraphs: [
          'Im Spike kommt eine Seite schnell voran. Viele Bars schließen in Bewegungsrichtung, Rückläufe sind kurz, und die Gegenseite hat kaum Zeit, einen stabilen Preisbereich aufzubauen. Nach dem ersten deutlicheren Pullback ändert sich meist die Qualität der Bewegung.',
          'Im Bullenkanal danach überlappen sich mehr Bars. Untere und obere Tails werden häufiger, kleine Rückläufe entstehen, und einzelne Bear-Bars unterbrechen die Folge. Der Kurs kann weiter steigen, aber die Käufer kontrollieren nicht mehr jeden Tick. Im Bärenkanal gilt dasselbe spiegelbildlich.',
          'Ein Teil der Trendtrader nimmt unterwegs Gewinne mit. Gleichzeitig fangen Gegentrader an, kleine Positionen aufzubauen und bei weiteren ungünstigen Preisen aufzustocken. Diese Verkäufe in einem Bullenkanal sind noch kein bestätigter Bärentrend; sie erklären aber, warum die Auktion immer zweiseitiger wird.',
          'Ein langsamerer Kanal ist deshalb weder automatisch schwach noch automatisch eine Umkehr. Er ist eine Übergangsphase: Die alte Richtung hat noch einen Vorteil, während die Grundlage für einen größeren Test oder eine Trading Range wächst.',
        ],
        callout:
          'Überlappung zeigt nicht sofort eine Umkehr. Sie zeigt zuerst, dass die Gegenseite wieder handeln kann.',
      },
      {
        id: 'chapter-03-channel-two-sided-diagram',
        type: 'diagram',
        title: 'Vier Zeichen für den Wechsel zur zweiseitigen Auktion',
        scenario: 'channel-two-sided-orders',
        caption:
          'Der Spike verliert nicht zwingend seine Richtung, wohl aber seine Einseitigkeit: Überlappung, Tails, Gegenbars und gestaffelte Orders nehmen zu.',
        observations: [
          'Große Distanzbars prägen den ersten Impuls.',
          'Im Kanal überschneiden sich die sichtbaren Preisbereiche häufiger.',
          'Gewinnmitnahmen bremsen die Trendseite, ohne sie sofort zu besiegen.',
          'Gegenpositionen wachsen schrittweise statt durch einen einzigen perfekten Einstieg.',
        ],
      },
      {
        id: 'chapter-03-channel-two-sided-question',
        type: 'question',
        title: 'Was beweist die erste Überlappung?',
        prompt:
          'Nach einem starken Bull-Spike steigt der Markt in einem Kanal weiter, zeigt aber Tails, Bear-Bars und mehr Überlappung. Welche Aussage ist belastbar?',
        options: [
          {
            id: 'bear-confirmed',
            label: 'Der Bärentrend ist bereits bestätigt',
            explanation:
              'Die Gegenseite ist aktiver, aber der Markt kann im Bullenkanal weiterhin höhere Preise akzeptieren.',
          },
          {
            id: 'two-sided',
            label: 'Die Auktion wird zweiseitiger',
            explanation:
              'Richtig. Mehr Überlappung und Gegenbars zeigen nachlassende Einseitigkeit, noch nicht zwingend eine neue Trendrichtung.',
          },
          {
            id: 'spike-stronger',
            label: 'Der Spike beschleunigt sich weiter',
            explanation:
              'Ein Spike besitzt gewöhnlich weniger Überlappung und deutlich höhere Bewegungseffizienz.',
          },
        ],
        correctOptionId: 'two-sided',
      },
      {
        id: 'chapter-03-channel-two-sided-recap',
        type: 'recap',
        title: 'Richtung und Effizienz getrennt lesen',
        points: [
          'Der Spike ist schnell und überwiegend einseitig.',
          'Der Kanal enthält mehr Überlappung, Tails und Gegenbars.',
          'Trendtrader skalieren Gewinne aus, Gegentrader bauen Positionen auf.',
          'Zweiseitiger Handel bereitet einen Test vor, bestätigt aber noch keine Umkehr.',
        ],
      },
    ],
  },
  channelStartTest: {
    id: 'price-action-trends.chapter-03.lesson-channel-start-test',
    title: 'Der Kanalbeginn wird zur späteren Zielzone',
    summary:
      'Warum der erste Pullback nach dem Spike oft noch einmal getestet wird und dort Short-Eindeckungen und neue Longs denselben Kaufdruck erzeugen.',
    durationMinutes: 11,
    xp: 40,
    sourceUnit: 'Kapitel 3 · Test des Kanalbeginns',
    sourceAnchors: [
      'Erster Pullback als Beginn der Kanalphase',
      'Späterer Test des Kanalbodens oder Kanalbeginns',
      'Gewinnmitnahmen gestaffelter Gegentrader am Test',
      'Erneute Käufe der ursprünglichen Trendseite',
      'Bounce und Verbreiterung zur Trading Range',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-channel-start-test-explain',
        type: 'explanation',
        eyebrow: 'Ein alter Entscheidungsbereich zieht an',
        title: 'Der erste Pullback hinterlässt eine offene Marktfrage',
        paragraphs: [
          'Der erste größere Pullback nach einem Spike markiert den Übergang in die Kanalphase. Dort haben Trendtrader wieder gekauft oder verkauft und damit gezeigt, dass die ursprüngliche Richtung zunächst verteidigt wird. Dieser Bereich wird zu einer sichtbaren Referenz.',
          'Läuft der Kanal weiter, können Gegentrader ihre Positionen staffeln. In einem Bullenkanal verkaufen sie zum Beispiel an späteren Hochs oder bei Pullbacks nach oben. Ihr Plan muss nicht verlangen, das endgültige Top zu treffen. Ein Rücklauf zum Kanalbeginn kann reichen, damit späte Einstiege im Gewinn sind und frühe ungefähr ihren Einstand erreichen.',
          'Erreicht der Markt die Zone, kaufen zwei Gruppen gleichzeitig: Bären decken Shorts ein, und Bullen kaufen dort erneut, wo der erste Pullback schon gehalten hatte. Beides sind Kauforders. Deshalb gibt es am Kanalbeginn oft einen Bounce.',
          'Der Bounce beweist noch keine neue Rally. Er kann in einen zweiten Test, eine breitere Range oder eine neue Trendbewegung übergehen. Seine wichtigste Aussage: Der alte Kanalbeginn funktioniert weiterhin als akzeptierter Entscheidungsbereich.',
        ],
        callout:
          'Short-Eindeckung und neuer Long sehen im Orderticket unterschiedlich aus, wirken im Markt aber beide als Kaufdruck.',
      },
      {
        id: 'chapter-03-channel-start-test-diagram',
        type: 'diagram',
        title: 'Warum zwei Käufergruppen am Kanalbeginn zusammentreffen',
        scenario: 'channel-start-magnet',
        caption:
          'Der Rücklauf erreicht die Zone des ersten Pullbacks. Dort treffen Eindeckungen der Gegenseite und erneute Trendkäufe zusammen.',
        observations: [
          'Der erste Pullback definiert den sichtbaren Kanalbeginn.',
          'Gestaffelte Shorts besitzen beim Rücklauf unterschiedliche Einstandspreise.',
          'Späte Shorts realisieren Gewinn, frühe Shorts retten den Einstand.',
          'Bullen erkennen dieselbe Zone als früher verteidigte Unterstützung.',
          'Der gemeinsame Kaufdruck erzeugt oft den ersten Range-Bounce.',
        ],
      },
      {
        id: 'chapter-03-channel-start-test-question',
        type: 'question',
        title: 'Warum kann der Test kräftig reagieren?',
        prompt:
          'Ein Bullenkanal läuft zum Preisbereich seines ersten Pullbacks zurück. Welche Kombination kann dort gleichzeitig kaufen?',
        options: [
          {
            id: 'new-shorts-only',
            label: 'Nur neue Verkäufer',
            explanation:
              'Verkäufer können aktiv sein, aber die typische Gegenkraft entsteht aus Eindeckungen und erneuten Käufen.',
          },
          {
            id: 'cover-and-buy',
            label: 'Short-Eindeckungen und neue Longs',
            explanation:
              'Richtig. Beide Gruppen erzeugen Kauforders am selben Referenzbereich.',
          },
          {
            id: 'no-reference',
            label: 'Niemand, weil der Bereich bedeutungslos ist',
            explanation:
              'Der erste gehaltene Pullback ist gerade deshalb eine wichtige sichtbare Referenz.',
          },
        ],
        correctOptionId: 'cover-and-buy',
      },
      {
        id: 'chapter-03-channel-start-test-recap',
        type: 'recap',
        title: 'Den Magneten verstehen',
        points: [
          'Der erste Pullback markiert den Beginn der Kanalauktion.',
          'Ein reifender Kanal läuft häufig zu diesem Bereich zurück.',
          'Eindeckungen und neue Trendpositionen wirken dort in dieselbe Richtung.',
          'Der Bounce kann Rally, Range oder nur eine kurze Reaktion einleiten.',
        ],
      },
    ],
  },
  channelBreakoutPaths: {
    id: 'price-action-trends.chapter-03.lesson-channel-breakout-paths',
    title: 'Ein Kanalausbruch hat drei sehr verschiedene Wege',
    summary:
      'Wie du Rücklauf, seitliche Fortsetzung und seltene Beschleunigung unterscheidest, ohne jeden Linienbruch zur neuen Trendphase zu erklären.',
    durationMinutes: 10,
    xp: 40,
    sourceUnit: 'Kapitel 3 · Ausbrüche aus Trendkanälen',
    sourceAnchors: [
      'Häufiger Rücklauf nach reifem Trendkanal',
      'Seitwärtige Pause mit späterer Trendfortsetzung',
      'Seltener Ausbruch in Trendrichtung über die Kanallinie',
      'Häufiges Scheitern einer Beschleunigung nach wenigen Bars',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-channel-breakout-paths-explain',
        type: 'explanation',
        eyebrow: 'Nicht jeder Linienbruch bedeutet dasselbe',
        title: 'Rücklauf, Pause oder echte Beschleunigung',
        paragraphs: [
          'Ein reifer Kanal wird oft zumindest teilweise zurückverfolgt. Ein Bullenkanal kann so wie eine Bear Flag wirken, ein Bärenkanal wie eine Bull Flag. Der Bruch gegen die alte Richtung ist aber zunächst nur ein Test der Kanalstruktur und nicht automatisch der Beginn eines stabilen Gegentrends.',
          'Ist der übergeordnete Trend stark, kann der Markt statt eines tiefen Rücklaufs seitwärts gehen. Die Zeitkorrektur baut die Überdehnung ab, während der Preis einen Großteil der bisherigen Strecke hält. Danach kann die alte Richtung erneut ausbrechen.',
          'Seltener bricht der Kurs in Trendrichtung über die äußere Kanallinie aus und beschleunigt. Das sieht überzeugend aus, passiert aber spät in einer ohnehin schon ausgedehnten Struktur. Ohne anhaltenden Anschluss kann es innerhalb weniger Bars scheitern und scharf zurück in den Kanal fallen.',
          'Die Linie allein entscheidet deshalb nichts. Beurteile Distanz, Schlusskurse, Anschluss und den ersten Rücklauf. Erst die Reaktion nach dem Bruch zeigt, welcher der drei Pfade tatsächlich gespielt wird.',
        ],
        callout:
          'Ein Kanallinienbruch ist ein Ereignis. Akzeptanz oder Abweisung machen daraus erst eine Aussage.',
      },
      {
        id: 'chapter-03-channel-breakout-paths-diagram',
        type: 'diagram',
        title: 'Drei Ergebnisse derselben reifen Kanalstruktur',
        scenario: 'channel-breakout-paths',
        caption:
          'Links folgt der Rücklauf, in der Mitte korrigiert der Markt seitwärts, rechts beschleunigt er kurz und fällt anschließend in den Kanal zurück.',
        observations: [
          'Der Gegenbruch testet, ob der Kanal vollständig zurückverfolgt wird.',
          'Eine seitliche Pause kann Überdehnung abbauen, ohne Preis abzugeben.',
          'Die seltene Beschleunigung benötigt sofortigen Follow-through.',
          'Ein schneller Rückfall entlarvt den späten Trendbruch als Fehlausbruch.',
        ],
      },
      {
        id: 'chapter-03-channel-breakout-paths-question',
        type: 'question',
        title: 'Was bestätigt die Beschleunigung?',
        prompt:
          'Ein Bullenkanal bricht über seine obere Kanallinie aus. Welche Information ist jetzt am wichtigsten?',
        options: [
          {
            id: 'line-alone',
            label: 'Der Linienbruch allein garantiert die Rally',
            explanation:
              'Späte Beschleunigungen scheitern häufig, wenn die höheren Preise keinen Anschluss finden.',
          },
          {
            id: 'follow-through',
            label: 'Anschluss und gehaltener Rücklauf',
            explanation:
              'Richtig. Akzeptanz nach dem Bruch unterscheidet Beschleunigung und Fehlausbruch.',
          },
          {
            id: 'channel-name',
            label: 'Der Name des gezeichneten Kanals',
            explanation:
              'Die genaue Linienbezeichnung ist weniger wichtig als das Verhalten nach ihrem Bruch.',
          },
        ],
        correctOptionId: 'follow-through',
      },
      {
        id: 'chapter-03-channel-breakout-paths-recap',
        type: 'recap',
        title: 'Nach dem Bruch weiterlesen',
        points: [
          'Viele Kanäle werden gegen ihre Richtung zurückverfolgt.',
          'Starke Trends können eine Überdehnung seitwärts korrigieren.',
          'Beschleunigung über die Kanallinie ist selten und ausfallgefährdet.',
          'Follow-through und Rücklauf entscheiden zwischen den drei Wegen.',
        ],
      },
    ],
  },
  rangeDualRole: {
    id: 'price-action-trends.chapter-03.lesson-range-dual-role',
    title: 'Eine Trading Range ist Flag und Umkehrkeim zugleich',
    summary:
      'Warum dieselbe Balance im größeren Trend eine Pause sein kann und trotzdem die nötige Vorstufe jeder belastbaren Trendwende ist.',
    durationMinutes: 10,
    xp: 40,
    sourceUnit: 'Kapitel 3 · Doppelfunktion der Trading Range',
    sourceAnchors: [
      'Trading Ranges als häufige Flags auf höheren Zeitebenen',
      'Mehrheit der Range-Ausbrüche in Richtung des übergeordneten Trends',
      'Trading Range als notwendige Balance vor vielen großen Umkehrbewegungen',
      'Richtung erst durch Ausbruch und Akzeptanz bestätigt',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-range-dual-role-explain',
        type: 'explanation',
        eyebrow: 'Ein Zustand, zwei mögliche Rollen',
        title: 'Die Range pausiert den Trend und ermöglicht seinen Wechsel',
        paragraphs: [
          'Auf einer höheren Zeitebene sehen viele Trading Ranges wie einfache Pausen in einem Trend aus. Weil die alte Richtung schon Trägheit mitbringt, brechen solche Bereiche öfter mit dem Trend aus als gegen ihn. In dieser Rolle ist die Range eine Flag.',
          'Gleichzeitig braucht eine große Umkehr fast immer eine Phase, in der die bisher dominante Seite die Kontrolle verliert und beide Seiten wieder handeln können. Genau diese Balance liefert die Trading Range. Sie kann deshalb auch der Keim eines neuen Gegentrends sein.',
          'Die beiden Aussagen widersprechen sich nicht. Vor dem Ausbruch ist die Fortsetzung wegen der Basisrate oft etwas wahrscheinlicher. Ein überzeugender Gegenbreakout mit Anschluss kann diese Erwartung aber drehen und aus der Pause einen Regimewechsel machen.',
          'Behandle die Range deshalb als offene Auktion mit Vorgeschichte. Der alte Trend gibt dir den Ausgangsbias; Breakout, Pullback und Akzeptanz liefern die neue Entscheidung.',
        ],
        callout:
          'Die Range ist nicht neutral und ohne Vergangenheit: Sie trägt den alten Trend als Basisrate und den neuen Trend als Möglichkeit.',
      },
      {
        id: 'chapter-03-range-dual-role-diagram',
        type: 'diagram',
        title: 'Dieselbe Balance, zwei bestätigte Ausgänge',
        scenario: 'range-dual-role',
        caption:
          'Eine Range im Bullenmarkt kann als Bull Flag nach oben fortsetzen oder nach einem akzeptierten Abwärtsbreakout zur Brücke in einen Bärentrend werden.',
        observations: [
          'Der vorherige Trend gibt der Fortsetzung einen anfänglichen Vorteil.',
          'Innerhalb der Range handeln beide Seiten und der Vorteil schrumpft.',
          'Ein Gegenbreakout braucht Distanz und Anschluss, um die Basisrate zu überwinden.',
          'Der erste Pullback außerhalb der Range prüft, ob die neue Richtung akzeptiert wird.',
        ],
      },
      {
        id: 'chapter-03-range-dual-role-question',
        type: 'question',
        title: 'Welche Aussage verbindet Flag und Umkehr?',
        prompt:
          'Eine Trading Range entsteht nach einem starken Bullenmarkt. Wie sollte sie zunächst gelesen werden?',
        options: [
          {
            id: 'bear-certain',
            label: 'Als sicherer Beginn eines Bärentrends',
            explanation:
              'Die meisten Ranges im Trend setzen zunächst häufiger in Trendrichtung fort.',
          },
          {
            id: 'flag-open',
            label: 'Als Bull Flag mit offener Umkehrmöglichkeit',
            explanation:
              'Richtig. Der alte Trend prägt die Basisrate, ein bestätigter Gegenbreakout kann sie später ändern.',
          },
          {
            id: 'history-irrelevant',
            label: 'Ohne jede Bedeutung des vorherigen Trends',
            explanation:
              'Die Vorgeschichte beeinflusst, welcher Ausbruch zunächst wahrscheinlicher ist.',
          },
        ],
        correctOptionId: 'flag-open',
      },
      {
        id: 'chapter-03-range-dual-role-recap',
        type: 'recap',
        title: 'Die Doppelfunktion behalten',
        points: [
          'Viele Ranges sind Pausen innerhalb des größeren Trends.',
          'Fast jede große Umkehr braucht zuvor zweiseitige Balance.',
          'Der alte Trend liefert nur eine Basisrate, keine Garantie.',
          'Ausbruch, Anschluss und Pullback bestimmen die endgültige Rolle.',
        ],
      },
    ],
  },
  testReferenceMap: {
    id: 'price-action-trends.chapter-03.lesson-test-reference-map',
    title: 'Testzonen entstehen aus mehreren Erinnerungsebenen',
    summary:
      'Wie Swingpunkte, Bar-Extrema, Trendlinien, Ziele und Vortageskurse denselben Bereich zu einer Entscheidungszone verdichten, die du beobachten kannst.',
    durationMinutes: 11,
    xp: 40,
    sourceUnit: 'Kapitel 3 · Referenzen eines Tests',
    sourceAnchors: [
      'Trendlinie und Trendkanallinie als dynamische Referenzen',
      'Measured-Move-Ziel und frühere Swingpunkte',
      'Extrema früherer Entry- und Signal-Bars',
      'Vortageshoch, -tief, -schluss und -eröffnung',
      'Mehrere Referenzen können in derselben Preiszone zusammenfallen',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-test-reference-map-explain',
        type: 'explanation',
        eyebrow: 'Der Chart besitzt ein Gedächtnis',
        title: 'Ein Test beantwortet eine frühere Handelsentscheidung',
        paragraphs: [
          'Ein Test ist die Rückkehr zu einem Bereich, an dem vorher sichtbar gehandelt oder geplant wurde. Das kann ein Swinghoch sein, ein Swingtief, eine Trendlinie, die gegenüberliegende Kanallinie oder das Ziel einer gemessenen Bewegung.',
          'Auch einzelne Bars hinterlassen Referenzen. Das Tief eines bullischen Entry-Bars, das Hoch eines bärischen Entry-Bars sowie Hoch oder Tief früherer Signal-Bars markieren Bereiche, an denen Trader Einstiege, Stops oder Einstandsschutz verwalten können.',
          'Vortageshoch, Vortagestief, Schluss und Eröffnung beobachten viele Teilnehmer. Fallen mehrere Referenzen ungefähr zusammen, entsteht keine magische Linie, sondern eine Zone mit besonders vielen unterschiedlichen Handelsplänen.',
          'Auf anderen Zeitebenen oder in anderen Darstellungen können in derselben Zone zusätzlich Durchschnitte, Bänder oder Projektionsziele liegen. Du musst nicht jedes Werkzeug nutzen. Entscheidend ist die sichtbare Reaktion: Wird der Bereich akzeptiert, verteidigt oder scharf abgewiesen?',
        ],
        callout:
          'Konfluenz erklärt, warum in einer Zone viele Orders warten. Die Reaktion entscheidet, ob diese Orders tatsächlich die Kontrolle gewinnen.',
      },
      {
        id: 'chapter-03-test-reference-map-diagram',
        type: 'diagram',
        title: 'Fünf Referenzfamilien verdichten sich zu einer Testzone',
        scenario: 'test-reference-layers',
        caption:
          'Horizontale, schräge und barbezogene Erinnerungen müssen nicht tickgenau übereinstimmen, um denselben Entscheidungsbereich zu markieren.',
        observations: [
          'Swingpunkte erinnern an frühere Zurückweisung oder Akzeptanz.',
          'Trend- und Kanallinien bilden bewegliche Strukturreferenzen.',
          'Entry- und Signal-Bars enthalten verwaltete Stops und Einstände.',
          'Vortageskurse bündeln Aufmerksamkeit vieler Zeitrahmen.',
          'Ein Zielbereich wird erst durch das aktuelle Verhalten handelbar.',
        ],
      },
      {
        id: 'chapter-03-test-reference-map-question',
        type: 'question',
        title: 'Was macht Konfluenz nützlich?',
        prompt:
          'Ein altes Swinghoch, das Vortageshoch und eine Trendkanallinie liegen eng beieinander. Was weißt du dadurch?',
        options: [
          {
            id: 'certain-reversal',
            label: 'Der Markt muss dort umkehren',
            explanation:
              'Viele Referenzen erhöhen Aufmerksamkeit, garantieren aber keine Reaktion.',
          },
          {
            id: 'watched-zone',
            label: 'Der Bereich wird wahrscheinlich stark beobachtet',
            explanation:
              'Richtig. Mehrere Handelspläne können dort zusammentreffen; Akzeptanz oder Zurückweisung bleibt abzuwarten.',
          },
          {
            id: 'exact-tick',
            label: 'Nur ein einzelner Tick ist gültig',
            explanation:
              'Tests sind gewöhnlich Zonen und Doppeltops oder -tiefs müssen nicht exakt sein.',
          },
        ],
        correctOptionId: 'watched-zone',
      },
      {
        id: 'chapter-03-test-reference-map-recap',
        type: 'recap',
        title: 'Referenz vor Reaktion',
        points: [
          'Tests können horizontale, schräge und barbezogene Referenzen anlaufen.',
          'Mehrere Erinnerungen dürfen sich in einer breiten Zone überlagern.',
          'Konfluenz erzeugt Aufmerksamkeit, nicht Gewissheit.',
          'Erst die Reaktion zeigt Breakout, Verteidigung oder Zurückweisung.',
        ],
      },
    ],
  },
} satisfies Record<string, Lesson>;
