import type { Lesson } from '../../types';

export const chapterThreeExpansionCaseLessons = {
  everySwingTest: {
    id: 'price-action-trends.chapter-03.lesson-every-swing-test',
    title: 'Chartfall 3.1: Jeder Swing testet eine alte Entscheidung',
    summary:
      'Wie der Chartfall als Netz aus Vortageskursen, Swingpunkten, Signalbereichen und Referenzen anderer Zeitebenen gelesen wird.',
    durationMinutes: 10,
    xp: 40,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Testnetz',
    sourceAnchors: [
      'Jeder Swing als Test einer sichtbaren oder verdeckten Referenz',
      'Referenzen aus anderen Zeitebenen und Chartdarstellungen',
      'Vortagestief, Vortagesschluss und frühere Swingpunkte im Chartfall',
      'Tests als zusammenhängendes Netz statt isolierter Wendepunkte',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-every-swing-test-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Orientierung',
        title: 'Der sichtbare Wendepunkt ist meistens eine Antwort',
        paragraphs: [
          'Ein Swinghoch oder Swingtief entsteht nicht im luftleeren Raum. Die Bewegung erreicht einen Bereich, an dem frühere Käufer, Verkäufer oder ausgestoppte Trader erneut entscheiden müssen. Deshalb lässt sich praktisch jeder Swing als Test einer älteren Marktfrage lesen.',
          'Nicht jede Referenz ist auf dem gerade geöffneten Chart offensichtlich. Ein Niveau kann aus einer höheren Zeitebene, einer anderen Chartart, einem Durchschnitt, einer Projektionszone oder einer früheren Session stammen. Für die Price-Action-Lesart zählt weniger der Name als die beobachtete Reaktion.',
          'Im Chartfall 3.1 verbinden sich das Vortagestief, das Hoch des frühen Signal-Bars, spätere Higher Lows und Lower Highs, der Vortagesschluss und ein verteidigter Long-Einstieg. Jeder neue Swing nimmt auf mindestens eine dieser Entscheidungen Bezug.',
          'Wer nur nach einzelnen Mustern sucht, sieht viele zufällige Wendepunkte. Wer das Testnetz verfolgt, erkennt eine fortlaufende Auktion: Ein Bereich scheitert, der nächste wird angegriffen, zurückerobert und später erneut verteidigt.',
        ],
        callout:
          'Frage bei jedem Swing nicht nur „Was ist hier passiert?“, sondern auch „Welche frühere Entscheidung wurde hier erneut geprüft?“',
      },
      {
        id: 'chapter-03-every-swing-test-diagram',
        type: 'diagram',
        title: 'Das Testnetz hinter den Bars 1 bis 9',
        scenario: 'every-swing-test-map',
        caption:
          'Mehrere horizontale und strukturelle Referenzen verbinden die scheinbar einzelnen Wendepunkte zu einer nachvollziehbaren Folge.',
        observations: [
          'Der erste Tiefbruch prüft, ob Preise unter dem Vortagestief akzeptiert werden.',
          'Die Rally greift den frühen Verkaufsbereich erneut an.',
          'Higher Low und Lower High testen die neu entstandenen Grenzen.',
          'Der spätere Pullback prüft Unterstützung und Einstandsschutz gleichzeitig.',
        ],
      },
      {
        id: 'chapter-03-every-swing-test-question',
        type: 'question',
        title: 'Welche Frage verbessert die Analyse?',
        prompt:
          'Der Markt dreht an einem unscheinbaren Swingtief. Welche Untersuchung ist am nützlichsten?',
        options: [
          {
            id: 'random',
            label: 'Den Wendepunkt als Zufall behandeln',
            explanation:
              'Damit übersiehst du mögliche Referenzen und die Reaktion früherer Positionen.',
          },
          {
            id: 'reference',
            label: 'Nach der getesteten früheren Entscheidung suchen',
            explanation:
              'Richtig. Swing, Sessionmarke, Bar-Extrem oder Einstand können die aktuelle Reaktion erklären.',
          },
          {
            id: 'indicator-only',
            label: 'Nur einen neuen Indikator hinzufügen',
            explanation:
              'Ein Indikator kann dieselbe Zone markieren, ersetzt aber nicht die Analyse von Akzeptanz und Zurückweisung.',
          },
        ],
        correctOptionId: 'reference',
      },
      {
        id: 'chapter-03-every-swing-test-recap',
        type: 'recap',
        title: 'Den Chart als Erinnerung lesen',
        points: [
          'Swings beantworten häufig ältere Preisfragen.',
          'Die relevante Referenz kann aus einer anderen Zeitebene stammen.',
          'Mehrere Tests bilden eine Kette statt unabhängiger Muster.',
          'Reaktion und Anschluss zeigen, ob die alte Entscheidung weiter gilt.',
        ],
      },
    ],
  },
  barNineDefense: {
    id: 'price-action-trends.chapter-03.lesson-bar-nine-defense',
    title: 'Chartfall 3.1: Bar 9 verteidigt den Long-Einstand',
    summary:
      'Warum der Rücklauf zum Durchschnitt und knapp über den Breakeven-Stop bullische Stärke zeigt und ein neues Tageshoch vorbereitet.',
    durationMinutes: 10,
    xp: 40,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Bar 9',
    sourceAnchors: [
      'Rücklauf zu einem gleitenden Durchschnitt',
      'Pullback nach einem vorherigen Ausbruchsversuch',
      'Test des Long-Einstiegs über dem Bull-Bar nach Bar 7',
      'Knapp nicht erreichter Breakeven-Stop als Zeichen bullischer Stärke',
      'Neues Tageshoch nach erfolgreicher Verteidigung',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-bar-nine-defense-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Positionsverteidigung',
        title: 'Ein nicht erreichter Stop ist sichtbare Information',
        paragraphs: [
          'Nach dem erneuten Aufwärtsversuch läuft der Markt zu Bar 9 zurück. Oberflächlich wirkt die Bewegung wie eine weitere Schwäche. Strukturell prüft sie jedoch mehrere Unterstützungen: den Durchschnitt, den vorherigen Breakout-Bereich und den Long-Einstieg über dem bullischen Bar nach Bar 7.',
          'Trader, die dort Long sind, können ihren Stop am Einstand verwalten. Fällt der Markt bis zu diesem Preis, werden sie ohne Verlust aus der Position gedrängt. Im Chartfall bleibt der Rücklauf einen Tick darüber. Die Verkäufer schaffen es also nicht einmal, die frühen Bullen aus ihrem Trade zu lösen.',
          'Diese knappe Verteidigung ist kein magischer Ein-Tick-Code. Ihre Bedeutung entsteht aus dem Kontext: vorherige bullische Stärke, ein gehaltener Unterstützungsbereich und fehlender Verkaufsanschluss. Zusammen zeigen sie, dass Käufer ihre Positionen noch kontrollieren.',
          'Der anschließende Ausbruch zu einem neuen Tageshoch bestätigt diese Lesart. Bar 9 ist deshalb mehr als ein Tief am Durchschnitt; der Bar dokumentiert, dass der Markt den Preis der früheren Long-Entscheidung weiterhin verteidigt.',
        ],
        callout:
          'Stops zeigen, wo eine These praktisch aufgegeben würde. Bleibt der Markt davor stehen, hat die verteidigende Seite noch Kontrolle.',
      },
      {
        id: 'chapter-03-bar-nine-defense-diagram',
        type: 'diagram',
        title: 'Unterstützung, Einstand und ein Tick Abstand',
        scenario: 'bar-nine-defense',
        caption:
          'Der Pullback testet Durchschnitt und Einstieg, erreicht den Breakeven-Stop jedoch knapp nicht und dreht anschließend zum neuen Hoch.',
        observations: [
          'Mehrere Unterstützungen liegen im selben Pullback-Bereich.',
          'Der Long-Einstieg ist eine konkrete Positionsreferenz.',
          'Der Einstand wird nicht ausgelöst; Verkäufer erhalten keinen Follow-through.',
          'Das neue Hoch bestätigt die erfolgreiche Verteidigung erst im Nachhinein.',
        ],
      },
      {
        id: 'chapter-03-bar-nine-defense-question',
        type: 'question',
        title: 'Warum ist der eine Tick relevant?',
        prompt:
          'Bar 9 bleibt knapp über dem Breakeven-Stop früher Longs und der Markt steigt danach auf ein neues Hoch. Was zeigt das?',
        options: [
          {
            id: 'tick-magic',
            label: 'Jeder Abstand von einem Tick garantiert eine Rally',
            explanation:
              'Der Abstand ist nur im Zusammenspiel mit Struktur und fehlendem Verkaufsanschluss aussagekräftig.',
          },
          {
            id: 'bull-defense',
            label: 'Die Käufer konnten ihren Entscheidungsbereich verteidigen',
            explanation:
              'Richtig. Verkäufer erreichten den verwalteten Ausstieg nicht und verloren anschließend wieder die Initiative.',
          },
          {
            id: 'bear-control',
            label: 'Die Bären besitzen vollständige Kontrolle',
            explanation:
              'Ein geschützter Long-Einstand und das folgende neue Hoch sprechen gegen diese Einordnung.',
          },
        ],
        correctOptionId: 'bull-defense',
      },
      {
        id: 'chapter-03-bar-nine-defense-recap',
        type: 'recap',
        title: 'Positionsreferenzen mitlesen',
        points: [
          'Bar 9 testet mehrere Unterstützungen zugleich.',
          'Der frühere Long-Einstieg macht den Test praktisch relevant.',
          'Knapp verfehlter Einstand plus fehlender Anschluss zeigt Stärke.',
          'Das spätere neue Hoch bestätigt die Verteidigung.',
        ],
      },
    ],
  },
  barThreeGap: {
    id: 'price-action-trends.chapter-03.lesson-bar-three-gap',
    title: 'Chartfall 3.1: Bar 3 ist Trendbar und Breakout-Lücke',
    summary:
      'Wie ein großer Bull-Bar die Preisfindung beschleunigt, den Always-in-Bias vorbereitet und als funktionale Lücke gelesen wird.',
    durationMinutes: 10,
    xp: 40,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Bar 3',
    sourceAnchors: [
      'Bar 3 als großer bullischer Trendbar',
      'Beginn des bullischen Trends durch einen Breakout',
      'Trendbar als funktionale Breakout-Lücke',
      'Schnelle Bewegung durch einen zuvor nicht akzeptierten Preisbereich',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-bar-three-gap-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Schnelle Neubewertung',
        title: 'Eine Lücke kann gehandelt statt leer sein',
        paragraphs: [
          'Bar 3 ist ein großer Bull-Trendbar und markiert den Beginn des bullischen Trends im Chartfall. Der Markt verlässt den Bereich des gescheiterten Tiefausbruchs schnell und schließt deutlich höher. Käufer akzeptieren neue Preise, bevor Verkäufer eine stabile Gegenauktion aufbauen können.',
          'In dünnen Märkten kann ein Breakout als sichtbare Kurslücke erscheinen. In liquiden Intraday-Märkten werden die Zwischenpreise oft gehandelt, aber nur sehr kurz und überwiegend in eine Richtung. Ein starker Trendbar erfüllt dann dieselbe Funktion: Der Markt überspringt keine Notierung, wohl aber längere zweiseitige Preisfindung.',
          'Diese funktionale Lücke erklärt, warum spätere Pullbacks nicht automatisch bis zum Ausgangspunkt zurücklaufen. Solange der Markt den Bereich des Trendbars verteidigt und Gegenbewegungen schwach bleiben, prägt die schnelle Neubewertung weiterhin den Bias.',
          'Die Bezeichnung ist kein eigener Einstieg. Sie beschreibt die Stärke des Breakouts. Für einen Trade bleiben Stop, Rücklauf und Follow-through notwendig.',
        ],
        callout:
          'Eine funktionale Lücke bedeutet: Preise wurden zwar gedruckt, aber nicht lange genug zweiseitig akzeptiert.',
      },
      {
        id: 'chapter-03-bar-three-gap-diagram',
        type: 'diagram',
        title: 'Leere Kurslücke und gehandelter Trendbar erfüllen dieselbe Funktion',
        scenario: 'bar-three-breakout-gap',
        caption:
          'Links überspringt der Markt Preise sichtbar, rechts durchläuft Bar 3 sie schnell. Beide Formen zeigen fehlende längere Gegenauktion.',
        observations: [
          'Die sichtbare Gap-Variante enthält zwischen zwei Kursen keine Trades.',
          'Der Trendbar handelt die Zwischenpreise, hält sich dort aber kaum auf.',
          'Beide Varianten schaffen schnelle Distanz von der alten Balance.',
          'Spätere Verteidigung entscheidet, ob die funktionale Lücke bestehen bleibt.',
        ],
      },
      {
        id: 'chapter-03-bar-three-gap-question',
        type: 'question',
        title: 'Was bedeutet die funktionale Lücke?',
        prompt:
          'Bar 3 handelt jeden Zwischenpreis, steigt aber schnell und schließt stark. Warum kann der Bar trotzdem wie eine Lücke gelesen werden?',
        options: [
          {
            id: 'no-trades',
            label: 'Weil tatsächlich kein Preis gehandelt wurde',
            explanation:
              'Im Trendbar wurden die Zwischenpreise gehandelt; die Lückenidee ist funktional, nicht wörtlich.',
          },
          {
            id: 'no-balance',
            label: 'Weil keine längere zweiseitige Balance entstand',
            explanation:
              'Richtig. Der Markt bewegte sich so effizient, dass Verkäufer kaum Akzeptanz aufbauen konnten.',
          },
          {
            id: 'candle-name',
            label: 'Weil jeder grüne Bar automatisch eine Lücke ist',
            explanation:
              'Nur ein ausreichend starker Breakout-Bar erfüllt diese Funktion im passenden Kontext.',
          },
        ],
        correctOptionId: 'no-balance',
      },
      {
        id: 'chapter-03-bar-three-gap-recap',
        type: 'recap',
        title: 'Distanz ohne Balance',
        points: [
          'Bar 3 startet den bullischen Trend des Chartfalls.',
          'Ein Trendbar kann die Funktion einer Breakout-Lücke übernehmen.',
          'Entscheidend ist schnelle einseitige Preisfindung, nicht ein leerer Chartbereich.',
          'Follow-through und spätere Verteidigung bestätigen die Breakout-Qualität.',
        ],
      },
    ],
  },
  channelPositioning: {
    id: 'price-action-trends.chapter-03.lesson-channel-positioning',
    title: 'Chartfall 3.1: Der Kanal erlaubt gestaffelte Gegenpositionen',
    summary:
      'Wie frühe und späte Shorts im bullischen Kanal unterschiedliche Einstandspreise erhalten und beim zweibeinigen Rücklauf gemeinsam aussteigen.',
    durationMinutes: 12,
    xp: 45,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Positionierung im Kanal',
    sourceAnchors: [
      'Short-Einstieg unter Bar 4 als frühe Gegenposition',
      'Weitere Shorts an späteren Pullbacks und Hochs',
      'Warten auf den keilförmigen oberen Kanalbereich',
      'Zweibeinige Korrektur zum Kanalboden',
      'Gewinn später Shorts und ungefährer Breakeven früher Shorts',
      'Eindeckungen und erneute Longs erzeugen den Bounce',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-channel-positioning-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Durchschnitt statt perfektes Top',
        title: 'Gestaffelte Entries verändern das Ziel des Gegentrades',
        paragraphs: [
          'Einige Bären verkaufen bereits unter Bar 4, obwohl der bullische Spike stark war. Dieser frühe Short hat geringe unmittelbare Erfolgswahrscheinlichkeit und kann zunächst weit gegen die Position laufen. Der Plan basiert deshalb nicht darauf, dass genau Bar 4 das Hoch sein muss.',
          'Steigt der Kanal weiter, können die Bären an späteren Rückläufen oder oberhalb früherer Bars ergänzen. Andere warten ganz auf den reiferen, keilförmigen oberen Bereich. Durch die Staffelung liegt der durchschnittliche Short-Einstieg höher als der erste Einstieg.',
          'Vom Keilhoch fällt der Markt in zwei Beinen zum Bereich des Kanalbeginns. Späte Shorts besitzen dort Gewinn; der frühe Short unter Bar 4 kann ungefähr seinen Einstand erreichen. Der Trade lebt also von der erwarteten Kanalrückverfolgung, nicht von einer sofortigen vollständigen Trendumkehr.',
          'Am Ziel decken Bären ihre Positionen ein, während Bullen den früheren Pullback erneut kaufen. Der daraus entstehende Bounce beendet den Gegentrade. Ob danach Rally, Range oder Bärentrend folgt, ist eine neue Entscheidung.',
        ],
        callout:
          'Skalierung ersetzt keinen Stop. Sie verändert Einstand und Ziel, erhöht aber zugleich das Gesamtrisiko und verlangt einen vorher festgelegten Plan.',
      },
      {
        id: 'chapter-03-channel-positioning-diagram',
        type: 'diagram',
        title: 'Früher Short, spätere Ergänzungen und gemeinsamer Ausstieg',
        scenario: 'channel-positioning-cycle',
        caption:
          'Mehrere Short-Einstiege heben den Durchschnitt an. Der zweibeinige Rücklauf bezahlt späte Entries und entlastet den frühen Entry am Kanalboden.',
        observations: [
          'Der erste Short liegt gegen starkes bullisches Momentum.',
          'Spätere Entries entstehen erst bei reiferem Kanal und besserem Preis.',
          'Der Durchschnittseinstand liegt zwischen den einzelnen Ausführungen.',
          'Der Kanalbodentest ist das geplante Ziel, nicht zwingend ein neuer Bärentrend.',
          'Eindeckungen tragen anschließend zum Bounce bei.',
        ],
      },
      {
        id: 'chapter-03-channel-positioning-question',
        type: 'question',
        title: 'Was ist das realistische Ziel der Staffelung?',
        prompt:
          'Bären verkaufen einen bullischen Kanal mehrfach und der Markt beginnt eine zweibeinige Korrektur. Welche Erwartung passt zum beschriebenen Plan?',
        options: [
          {
            id: 'instant-bear',
            label: 'Nur ein sofortiger neuer Bärentrend macht den Plan sinnvoll',
            explanation:
              'Der beschriebene Gegentrade kann bereits durch den Rücklauf zum Kanalbeginn bezahlt werden.',
          },
          {
            id: 'channel-test',
            label: 'Späte Shorts gewinnen, frühe erreichen ungefähr Breakeven',
            explanation:
              'Richtig. Die Staffelung verbessert den Durchschnitt, während der Kanalbodentest das gemeinsame Ziel bildet.',
          },
          {
            id: 'no-risk',
            label: 'Durch Ergänzen verschwindet das Risiko',
            explanation:
              'Skalierung erhöht die Position und kann das Gesamtrisiko stark vergrößern; sie braucht feste Grenzen.',
          },
        ],
        correctOptionId: 'channel-test',
      },
      {
        id: 'chapter-03-channel-positioning-recap',
        type: 'recap',
        title: 'Das Ziel vor dem Einstieg kennen',
        points: [
          'Frühe Gegentrades können lange gegen die Position laufen.',
          'Spätere Entries verbessern den Durchschnitt, erhöhen aber das Risiko.',
          'Der zweibeinige Kanalbodentest kann den gesamten Trade bezahlen.',
          'Eindeckung und erneute Longs machen den Zielbereich zur Bounce-Zone.',
        ],
      },
    ],
  },
  wedgePushes: {
    id: 'price-action-trends.chapter-03.lesson-wedge-pushes',
    title: 'Chartfall 3.1: Wedges zählen nachlassende Versuche',
    summary:
      'Wie Bar 2 den dritten Abwärtsschub beendet und Bar 7 nach drei neuen Verkaufsversuchen zur Wedge-Bull-Flag wird.',
    durationMinutes: 10,
    xp: 40,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Wedge-Strukturen',
    sourceAnchors: [
      'Bar 2 als dritter Abwärtsschub und Wedge-Reversal',
      'Drei Verkaufsversuche als Prozess statt perfekte Geometrie',
      'Bar 7 als dritter Abwärtsschub ab Bar 6',
      'Wedge-Bull-Flag im bullischen Gesamtkontext',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-wedge-pushes-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Drei Schübe',
        title: 'Der dritte Versuch zeigt, ob die Gegenseite noch effizient ist',
        paragraphs: [
          'Das Tief bei Bar 2 beendet den dritten Abwärtsschub. Ein Wedge-Reversal verlangt dabei keine geometrisch perfekte Keilform. Entscheidend ist die wiederholte Anstrengung der Verkäufer: drei Versuche zu tieferen Preisen, denen nach dem letzten Schub der Anschluss fehlt.',
          'Der Fehlausbruch unter dem Vortagestief verstärkt die Aussage. Verkäufer erreichen zwar noch ein neues Tief, können es aber nicht halten. Short-Gewinnmitnahmen und aggressive Käufer drehen den Markt in den bullischen Spike.',
          'Später entsteht ab Bar 6 erneut eine dreiteilige Abwärtskorrektur. Bar 7 beendet den dritten Schub, bleibt als Higher Low über der größeren bullischen Struktur und testet zugleich den Bereich von Bar 5. Dadurch funktioniert die Wedge hier als Bull Flag.',
          'Die gleiche Zahl von Schüben kann also zwei Rollen besitzen: Am Tagestief bereitet sie eine Umkehr vor, innerhalb des neuen Bullenregimes beendet sie nur den Pullback. Der übergeordnete Kontext entscheidet, welche Bewegung tatsächlich dreht.',
        ],
        callout:
          'Zähle Versuche, nicht hübsche Linien. Ein Wedge misst nachlassende Effizienz über mehrere Schübe.',
      },
      {
        id: 'chapter-03-wedge-pushes-diagram',
        type: 'diagram',
        title: 'Drei Schübe am Tagestief und drei Schübe im Pullback',
        scenario: 'wedge-pushes',
        caption:
          'Links dreht der dritte Verkaufsschub den Tagesmove, rechts beendet er nur die Korrektur im bereits bullischen Kontext.',
        observations: [
          'Jeder Schub schafft weniger nachhaltige Abwärtsakzeptanz.',
          'Bar 2 verbindet dritten Schub und Fehlausbruch am Vortagestief.',
          'Bar 7 verbindet dritten Schub, Higher Low und Kanalbodentest.',
          'Wedge-Reversal und Wedge-Bull-Flag teilen die Mechanik, nicht die Rolle.',
        ],
      },
      {
        id: 'chapter-03-wedge-pushes-question',
        type: 'question',
        title: 'Warum sind Bar 2 und Bar 7 nicht dasselbe Setup?',
        prompt:
          'Beide beenden einen dritten Abwärtsschub. Was unterscheidet ihre Funktion?',
        options: [
          {
            id: 'nothing',
            label: 'Gar nichts; drei Schübe bedeuten immer denselben Trade',
            explanation:
              'Die übergeordnete Marktphase verändert, ob ein Trend oder nur ein Pullback endet.',
          },
          {
            id: 'context-role',
            label: 'Bar 2 dreht den Abwärtsmove, Bar 7 beendet den Bull-Pullback',
            explanation:
              'Richtig. Die Mechanik ähnelt sich, doch der bullische Kontext macht Bar 7 zur Fortsetzungsflag.',
          },
          {
            id: 'geometry-only',
            label: 'Nur der exakte Linienwinkel entscheidet',
            explanation:
              'Wedges werden über wiederholte Schübe und nachlassenden Anschluss gelesen, nicht über perfekte Geometrie.',
          },
        ],
        correctOptionId: 'context-role',
      },
      {
        id: 'chapter-03-wedge-pushes-recap',
        type: 'recap',
        title: 'Drei Versuche im Kontext',
        points: [
          'Ein Wedge beschreibt drei nachlassende Schübe.',
          'Bar 2 verbindet Wedge und gescheiterten Tiefbreakout.',
          'Bar 7 ist ein Wedge-Pullback innerhalb des neuen Bullenregimes.',
          'Die Struktur zeigt Erschöpfung; der Kontext bestimmt die Handelsrichtung.',
        ],
      },
    ],
  },
  flagStack: {
    id: 'price-action-trends.chapter-03.lesson-flag-stack',
    title: 'Chartfall 3.1: Mehrere Flags liegen ineinander',
    summary:
      'Wie Double-Top-Bear-Flag, Double-Bottom-Bull-Flag, Dreieck und Final Flag gleichzeitig gültig sein können, ohne die Gesamtlesart zu verwirren.',
    durationMinutes: 12,
    xp: 45,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Verschachtelte Muster',
    sourceAnchors: [
      'Bar 6 mit Vortagesende als Double-Top-Bear-Flag',
      'Bars 5 und 7 als Double-Bottom-Bull-Flag',
      'Bar 9 als weiterer Double-Bottom-Pullback',
      'Bars 5 bis 9 als mögliche Dreiecksstruktur',
      'Bar 8 als Final-Flag-Reversal nach mehrbariger Bull Flag',
      'Bullischer Kontext trotz neutraler geometrischer Form',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-flag-stack-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Musterhierarchie',
        title: 'Mehrere Namen beschreiben verschiedene Ausschnitte',
        paragraphs: [
          'Bar 6 erreicht ungefähr den Bereich des letzten Bars der Vorsession. Aus bärischer Sicht entsteht damit eine Double-Top-Bear-Flag: Der Markt testet einen früheren Hochbereich und könnte die Aufwärtsbewegung beenden.',
          'Gleichzeitig formen Bars 5 und 7 einen Doppelboden innerhalb des bullischen Tagesverlaufs. Diese Double-Bottom-Bull-Flag unterstützt die Erwartung eines zweiten Aufwärtsbeins. Bar 9 liefert später einen weiteren Double-Bottom-Pullback und verteidigt zusätzlich den früheren Long-Einstieg.',
          'Die Schwünge zwischen Bars 5 und 9 können außerdem als Dreieck gelesen werden. Ein Dreieck beschreibt zunächst nur engeren zweiseitigen Handel. Es löscht die vorherige bullische Stärke nicht. Deshalb bleibt der Breakout nach oben plausibler, solange Verkäufer keine eigene Distanz und keinen Anschluss schaffen.',
          'Bar 8 wirkt als Final-Flag-Reversal nach der mehrbarigen bullischen Pause. Der Begriff markiert einen letzten kleinen Fortsetzungsversuch, der scheitert und die Gegenseite aktiviert. Auch dieses Detail liegt innerhalb derselben größeren bullischen Auktionsgeschichte.',
          'Die Musternamen konkurrieren nicht um einen einzigen richtigen Titel. Sie organisieren verschiedene Zeitfenster und Tradeideen. Vorrang haben Regime, Breakout-Stärke, getestete Zone und Follow-through.',
        ],
        callout:
          'Wenn mehrere Muster gleichzeitig stimmen, ordne sie hierarchisch: Gesamtregime zuerst, getestete Zone danach, lokale Trigger zuletzt.',
      },
      {
        id: 'chapter-03-flag-stack-diagram',
        type: 'diagram',
        title: 'Ein Kursabschnitt, vier gültige Lesarten',
        scenario: 'nested-flags-map',
        caption:
          'Farbig markierte Ausschnitte zeigen, wie Double Top, Double Bottom, Dreieck und Final Flag unterschiedliche Beziehungen derselben Bars beschreiben.',
        observations: [
          'Das Double Top nutzt Bar 6 und einen älteren Hochbereich.',
          'Das Double Bottom verbindet die Pullback-Tiefs um Bars 5 und 7.',
          'Das Dreieck fasst die gesamte Kompression von Bars 5 bis 9 zusammen.',
          'Die Final Flag beschreibt einen lokalen Fehlschlag bei Bar 8.',
          'Der bullische Spike vor der Struktur gewichtet die neutrale Form.',
        ],
      },
      {
        id: 'chapter-03-flag-stack-question',
        type: 'question',
        title: 'Welches Muster hat Vorrang?',
        prompt:
          'Bars 5 bis 9 sehen wie Dreieck, Double Bottom und Final Flag aus. Wie vermeidest du widersprüchliche Trades?',
        options: [
          {
            id: 'choose-name',
            label: 'Einen Namen zufällig zum einzig gültigen erklären',
            explanation:
              'Die Begriffe beschreiben unterschiedliche Ausschnitte und müssen über Kontext gewichtet werden.',
          },
          {
            id: 'hierarchy',
            label: 'Regime, Zone und Trigger hierarchisch ordnen',
            explanation:
              'Richtig. Die vorherige bullische Stärke und die Testreaktion bestimmen, welches lokale Muster handelbar wird.',
          },
          {
            id: 'ignore-context',
            label: 'Nur die letzte Kerzenfarbe verwenden',
            explanation:
              'Damit gehen Breakout, Testnetz und die übergeordnete Kontrolle verloren.',
          },
        ],
        correctOptionId: 'hierarchy',
      },
      {
        id: 'chapter-03-flag-stack-recap',
        type: 'recap',
        title: 'Muster verschachtelt lesen',
        points: [
          'Double Top und Double Bottom können im selben Abschnitt vorkommen.',
          'Ein Dreieck beschreibt Balance, nicht automatisch gleiche Kontextwahrscheinlichkeit.',
          'Eine Final Flag ist ein lokaler Fehlschlag innerhalb einer größeren Struktur.',
          'Gesamtregime und Follow-through stehen über dem Musternamen.',
        ],
      },
    ],
  },
} satisfies Record<string, Lesson>;
