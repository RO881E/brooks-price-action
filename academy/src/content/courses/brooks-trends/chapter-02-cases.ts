import type { Lesson } from '../../types';

export const chapterTwoCaseLessons = [
  {
    id: 'brooks-trends.chapter-02.lesson-15',
    title: 'Chartfall 2.3: Trendende Dojis auf zwei Zeitebenen',
    summary:
      'Wie vier unscheinbare Fünf-Minuten-Dojis gemeinsam einen bullischen Reversal-Bar im Fünfzehn-Minuten-Chart bilden.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Kapitel 2 · Chartfall 2.3',
    sourceAnchors: [
      'Vier steigende Dojis im Fünf-Minuten-Chart',
      'Steigende Schlusskurse, Hochs und Tiefs als Kaufdruck',
      'Zusammenfassung mehrerer Bars auf größerem Zeitrahmen',
      'Bullischer Reversal-Bar an einem neuen Swing-Tief',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-15-explain',
        type: 'explanation',
        eyebrow: 'Eigenständige Rekonstruktion · Fall 2.3',
        title: 'Mehrere kleine Patts können zusammen eine klare Umkehr zeigen',
        paragraphs: [
          'Auf dem Fünf-Minuten-Chart entstehen am Tief vier Dojis nacheinander. Isoliert zeigt jeder nur geringe Kontrolle. Als Folge besitzen sie jedoch überwiegend höhere Tiefs, höhere Hochs und höhere Schlusskurse. Käufer gewinnen damit nicht explosiv, aber konsequent immer höheres Preisgebiet.',
          'Wechselst du zur größeren Zeitebene, werden mehrere dieser kleinen Auktionen in einem Bar zusammengefasst. Aus dem anfänglichen Tief, der Ablehnung darunter und den anschließend höheren Schlusskursen entsteht dort ein bullischer Reversal-Bar an einem neuen Swing-Tief.',
          'Beide Ansichten widersprechen sich nicht. Der kleine Chart zeigt den Entstehungsprozess: zäher Kaufdruck über mehrere scheinbar neutrale Bars. Der größere Chart zeigt das komprimierte Ergebnis: tiefere Preise wurden zurückgewiesen und der Zeitraum schloss deutlich höher.',
          'Du musst nicht zwischen den Zeitebenen springen, um das Muster perfekt zu benennen. Wenn dein Arbeitschart die steigenden Extreme und Schlusskurse zeigt, besitzt du bereits den entscheidenden Hinweis. Der größere Chart erklärt lediglich, warum andere Teilnehmer dieselbe Bewegung als Reversal-Bar wahrnehmen.',
        ],
        callout:
          'Kleine Zeitebene: Prozess. Große Zeitebene: verdichtetes Ergebnis. Beide beschreiben dieselbe Auktion.',
      },
      {
        id: 'chapter-02-15-diagram',
        type: 'diagram',
        title: 'Vier kleine Bars werden zu einem Reversal-Bar',
        scenario: 'multiframe-doji-reversal',
        caption:
          'Die eigene Illustration zeigt links die schrittweise Entstehung und rechts ihre Verdichtung in einem größeren Zeitfenster.',
        observations: [
          'Die ersten kleinen Bars testen tiefere Preise.',
          'Steigende Schlusskurse bauen innerhalb der Gruppe Kaufdruck auf.',
          'Der große Bar übernimmt Open, Hoch, Tief und Schluss des gesamten Zeitblocks.',
          'Der markante untere Tail des großen Bars fasst die frühere Ablehnung zusammen.',
        ],
      },
      {
        id: 'chapter-02-15-question',
        type: 'question',
        title: 'Welche Aussage verbindet beide Charts?',
        prompt:
          'Der kleine Chart zeigt mehrere steigende Dojis, der größere Chart einen bullischen Reversal-Bar. Was ist die gemeinsame Kerninformation?',
        options: [
          {
            id: 'rejection-pressure',
            label: 'Tiefere Preise wurden abgelehnt und Kaufdruck entstand',
            explanation:
              'Richtig. Die kleine Folge zeigt den Prozess, der große Bar dessen verdichtetes Ergebnis.',
          },
          {
            id: 'contradiction',
            label: 'Nur einer der Charts kann korrekt sein',
            explanation:
              'Zeitebenen fassen dieselben Trades unterschiedlich zusammen und können beide richtig sein.',
          },
          {
            id: 'no-trend',
            label: 'Dojis schließen jede gerichtete Information aus',
            explanation:
              'Die steigende Lage der Bars enthält trotz kleiner Körper gerichtete Information.',
          },
        ],
        correctOptionId: 'rejection-pressure',
      },
      {
        id: 'chapter-02-15-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Mehrere Dojis können auf dem kleinen Chart gerichteten Druck bilden.',
          'Ein größerer Bar verdichtet die gesamte Sequenz zu vier Preispunkten.',
          'Eine bullische Mikrofolge kann dadurch als Reversal-Bar am Swing-Tief erscheinen.',
          'Du brauchst keine perfekte Mehrfach-Zeitrahmen-Suche, wenn der Arbeitschart die Struktur bereits zeigt.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-02.lesson-16',
    title: 'Chartfall 2.3: Der Tageskontext bleibt bärisch',
    summary:
      'Wie Gap, Bear-Spike, gescheiterte Bullenumkehr, Kanalüberschuss und ein Doji-Setup zu einem vollständigen Tagesplan werden.',
    durationMinutes: 17,
    xp: 60,
    sourceUnit: 'Kapitel 2 · Vertiefung Chartfall 2.3',
    sourceAnchors: [
      'Großes Abwärtsgap und bearischer Eröffnungsbar',
      'Gescheiterter bullischer Umkehrversuch mit gefangenen Tradern',
      'Fehlschlag eines Fehlausbruchs als Breakout-Pullback-Short',
      'Überschuss unter dem Trendkanal und nachlassende Beschleunigung',
      'Doji als Final-Flag- und Durchschnittslücken-Setup',
      'Test des Bärentiefs und Erwartung mehrerer Aufwärtsbeine',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-16-explain',
        type: 'explanation',
        eyebrow: 'Tagesstruktur zusammensetzen',
        title: 'Ein bullischer Bar beendet einen Bärentag nicht automatisch',
        paragraphs: [
          'Der Handelstag beginnt mit einem großen Gap nach unten und einem kräftigen bearischen Trendbar. Diese Kombination ist ein bärischer Breakout und macht einen Bärentrendtag wahrscheinlicher. Der Grundplan bleibt deshalb, Rallys auf Short-Gelegenheiten zu prüfen, statt jeden kleinen Boden sofort als Trendwende zu behandeln.',
          'Ein früher bullischer Trendbar versucht die Umkehr, erhält aber keinen Anschluss. Käufer werden in einer falschen Hoffnung festgehalten, während Bären den ersten Short verpasst haben. Als der bullische Versuch selbst scheitert, entsteht eine zweite Chance für die Trendseite: ein Breakout-Pullback-Short unter dem bullischen Bar. Der Fehlschlag des Gegenversuchs stärkt die ursprüngliche bärische These.',
          'Gleichzeitig beschleunigt der Markt kurz unter seine fallende Kanallinie. Solche Überschüsse scheitern häufig, weil reife Trends mit der Zeit an Kraft verlieren. Das ändert nicht sofort die Tagesrichtung, warnt aber davor, neue Tiefs gedankenlos zu verkaufen. Der folgende Test kann eine größere Erholung oder das Ende des letzten Abwärtsbeins einleiten.',
          'Ein späterer Doji dient trotz seiner Ein-Bar-Balance als hochwertiger Setup-Bar: Er liegt im Bärentrend an einer Lücke zum gleitenden Durchschnitt, folgt auf ein gescheitertes kleines Flag und bietet einen Test des bisherigen Tiefs. Fällt der Test auf ein tieferes Tief, sind danach häufig mindestens zwei Aufwärtsbeine plausibel. Bei einem höheren Tief wäre die vorherige Rally bereits das erste Bein und ein weiteres bliebe zu erwarten.',
        ],
        callout:
          'Ein Bar erhält seine Qualität aus dem Tageskontext: Gap, Trend, Fehlschlag, Durchschnitt, Kanal und Ziel wirken zusammen.',
      },
      {
        id: 'chapter-02-16-diagram',
        type: 'diagram',
        title: 'Vom Gap zum letzten Test des Tiefs',
        scenario: 'bear-day-context',
        caption:
          'Die synthetische Tagessequenz ordnet die entscheidenden Funktionen: bärischer Start, gescheiterte Bullenumkehr, Short-Fortsetzung und später erschöpfter Tiefentest.',
        observations: [
          'Gap und erster Bear-Bar setzen die bärische Ausgangswahrscheinlichkeit.',
          'Der bullische Gegenversuch scheitert und fängt frühe Käufer ein.',
          'Der erneute Abwärtsbruch bestätigt die Trendfortsetzung.',
          'Kanalüberschuss und späterer Tiefentest erhöhen die Chance auf eine mehrbeinige Rally.',
        ],
      },
      {
        id: 'chapter-02-16-compare',
        type: 'comparison',
        title: 'Dasselbe Doji, andere Funktion',
        columns: [
          {
            title: 'Ohne Kontext',
            tone: 'neutral',
            points: [
              'kleiner Körper',
              'zweiseitiger Handel',
              'Richtung offen',
            ],
          },
          {
            title: 'Im beschriebenen Bärentrend',
            tone: 'warning',
            points: [
              'Rally bis zur Durchschnittslücke',
              'gescheiterter bullischer Ausbruch',
              'Short-Setup für Test des bisherigen Tiefs',
            ],
          },
          {
            title: 'Nach dem Tiefentest',
            tone: 'positive',
            points: [
              'Trendkanal bereits überschossen',
              'letztes Abwärtsbein möglich',
              'mindestens zwei Aufwärtsbeine als Arbeitsthese',
            ],
          },
        ],
      },
      {
        id: 'chapter-02-16-question',
        type: 'question',
        title: 'Warum kann ein Doji ein gutes Setup sein?',
        prompt:
          'Ein Doji bildet sich nach einer Rally zum gleitenden Durchschnitt innerhalb eines starken Bärentrends; der bullische Ausbruch ist zuvor gescheitert. Was macht den Bar relevant?',
        options: [
          {
            id: 'context-stack',
            label: 'Mehrere Kontextfaktoren richten sich auf denselben Tiefentest',
            explanation:
              'Richtig. Der Bar allein ist neutral, doch Trend, Durchschnittslücke und Fehlschlag geben ihm eine klare Funktion.',
          },
          {
            id: 'doji-short',
            label: 'Jeder Doji ist automatisch ein Short-Signal',
            explanation:
              'Dojis zeigen Balance; die Handelsrichtung entsteht erst aus dem Kontext.',
          },
          {
            id: 'body',
            label: 'Sein kleiner Körper beweist starke Verkäuferkontrolle',
            explanation:
              'Der kleine Körper zeigt gerade keine klare Kontrolle innerhalb des Bars.',
          },
        ],
        correctOptionId: 'context-stack',
      },
      {
        id: 'chapter-02-16-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Gap und erster Trendbar prägen den Tagesplan.',
          'Ein gescheiterter Gegenversuch kann als Einstieg in Trendrichtung dienen.',
          'Kanalüberschüsse warnen vor nachlassender Beschleunigung.',
          'Ein Doji kann im richtigen Kontext ein starkes Setup für den letzten Tiefentest sein.',
          'Nach diesem Test wird die Erwartung von Fortsetzung auf eine mehrbeinige Erholung umgestellt.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-02.lesson-17',
    title: 'Chartfall 2.4: Trendbars ohne Trend',
    summary:
      'Wie ein starker bullischer Ausbruch ohne Anschluss zur Falle wird und zwei gescheiterte Kaufversuche mindestens zwei Abwärtsbeine erwarten lassen.',
    durationMinutes: 15,
    xp: 50,
    sourceUnit: 'Kapitel 2 · Chartfall 2.4',
    sourceAnchors: [
      'Starker Bullenbar aus einer Doji-Linie ohne Follow-through',
      'Bearischer Pause-Bar und Ausstieg der Longs',
      'Nicht ausgelöster Breakout-Pullback-Long',
      'Zwei gescheiterte Bullversuche und Erwartung zweier Abwärtsbeine',
      'Großer später Bear-Bar als Beginn des Trendendes',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-17-explain',
        type: 'explanation',
        eyebrow: 'Eigenständige Rekonstruktion · Fall 2.4',
        title: 'Das Aussehen des Bars kann das Gegenteil seiner späteren Funktion sein',
        paragraphs: [
          'Nach mehreren Dojis bricht ein großer bullischer Trendbar nach oben aus. Ein Anfänger sieht einen neuen Bullenmarkt. Der nächste Bar handelt jedoch nur minimal höher und schließt nahe seinem Tief. Der Ausbruch bekommt damit keinen Anschluss, und Käufer verlassen ihre Position unter dem bearischen Pause-Bar. Neue Bären verkaufen denselben Bruch als Fehlausbruch.',
          'Die Bullen versuchen anschließend, das Tief des Ausbruchsbars mit einem kleinen bullischen Setup zu verteidigen. Der geplante Breakout-Pullback-Long wird nicht ausgelöst; stattdessen fällt der Markt unter das Setup. Frühe Käufer müssen erneut verkaufen, während neue Shorts hinzukommen. Nach zwei gescheiterten Kaufversuchen sinkt die Bereitschaft der Bullen, ohne deutlich bessere Price Action zurückzukehren.',
          'Aus dieser Abfolge entsteht die Erwartung von mindestens zwei Abwärtsbeinen. Nicht weil zwei Versuche eine mathematische Garantie liefern, sondern weil mehrere Gruppen von Käufern gefangen sind und Erholungen wahrscheinlich zum Ausstieg nutzen. Trendbars vor weiteren markanten Punkten des Falls erzeugen dieselbe bullische Falle im bärischen Kontext.',
          'Später erscheint nach mehr als dreißig überwiegend bärischen Bars einer der größten Bear-Bars des Tages. Jetzt kann dieselbe Größe das Gegenteil bedeuten: Starke Bullen und Bären warten an Unterstützung auf den Sell Climax. Nach dem großen Bar decken Bären Gewinne und Bullen kaufen, sodass er den Anfang vom Ende des Abwärtstrends markieren kann.',
        ],
        callout:
          'Früh aus Balance + Anschluss kann Größe einen Trend starten. Spät nach langem Trend + Unterstützung kann dieselbe Größe ihn beenden.',
      },
      {
        id: 'chapter-02-17-diagram',
        type: 'diagram',
        title: 'Zwei bullische Versuche scheitern nacheinander',
        scenario: 'failed-bull-breakout',
        caption:
          'Der erste große Bar erzeugt den Ausbruchsversuch. Fehlender Anschluss und der Bruch des zweiten Setups verwandeln ihn in Verkaufsdruck.',
        observations: [
          'Der Ausbruch über die Doji-Zone sieht zunächst stark aus.',
          'Der nächste Bar weist die höheren Preise sofort zurück.',
          'Auch die Verteidigung am Ausbruchstief scheitert.',
          'Zwei gefangene Käufergruppen erhöhen die Chance auf mehrere Abwärtsbeine.',
        ],
      },
      {
        id: 'chapter-02-17-question',
        type: 'question',
        title: 'Wann wird der bullische Trendbar zur Falle?',
        prompt:
          'Ein großer Bullenbar bricht über eine Doji-Zone. Der nächste Bar macht nur ein minimales Hoch und schließt nahe seinem Tief; ein zweites Long-Setup wird ebenfalls nach unten gebrochen. Was folgt daraus?',
        options: [
          {
            id: 'two-failures',
            label: 'Bullische Versuche scheiterten zweimal; Abwärtsbeine werden wahrscheinlicher',
            explanation:
              'Richtig. Fehlender Anschluss und zusätzliche gefangene Käufer kippen die Funktion des ersten Bars.',
          },
          {
            id: 'bar-guarantees',
            label: 'Der erste große Bar garantiert weiterhin den Bullenmarkt',
            explanation:
              'Die Folgebewegung hat genau diese Ausbruchsthese widerlegt.',
          },
          {
            id: 'neutral',
            label: 'Zwei Fehlschläge verändern keine Wahrscheinlichkeit',
            explanation:
              'Wiederholte Fehlschläge verändern Positionierung und Bereitschaft beider Seiten deutlich.',
          },
        ],
        correctOptionId: 'two-failures',
      },
      {
        id: 'chapter-02-17-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein Trendbar erzeugt nur einen Ausbruchsversuch, noch keinen Trend.',
          'Fehlender Anschluss kann einen starken Bar in eine Falle verwandeln.',
          'Zwei gescheiterte Bullversuche erhöhen die Erwartung mehrerer Abwärtsbeine.',
          'Ein besonders großer Bear-Bar spät im langen Bärentrend kann dagegen ein Sell Climax sein.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-02.lesson-18',
    title: 'Chartfall 2.4: Der Kollaps nach der Ruhe',
    summary:
      'Wie zwei nicht überlappende Bear-Bars die Trendwiederaufnahme bestätigen und ein klarer Risikoplan die psychologisch schwere Ausführung ermöglicht.',
    durationMinutes: 15,
    xp: 55,
    sourceUnit: 'Kapitel 2 · Vertiefung Chartfall 2.4',
    sourceAnchors: [
      'Fehlausbruch über dem Vortageshoch und bearischer Tag',
      'Lange ruhige Trading Range vor dem entscheidenden Kollaps',
      'Große nicht überlappende Bear-Bars mit Follow-through',
      'Measured-Move-Erwartung aus dem Bear-Spike',
      'Kleine Positionsgröße, Schutzstop und späteres Stop-Management',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-18-explain',
        type: 'explanation',
        eyebrow: 'Trendwiederaufnahme handeln',
        title: 'Ruhe macht den guten Trade emotional schwer, nicht analytisch schwach',
        paragraphs: [
          'Der Tag scheitert zunächst über dem Vortageshoch und entwickelt einen Bärentrend vom Open. Danach handelt er mehrere Stunden überwiegend seitwärts. Diese Ruhe gewöhnt Trader an kleine Bewegungen und macht sie unvorbereitet, obwohl die frühe bärische Richtung nie überzeugend widerlegt wurde.',
          'Als der erste große Bear-Bar die Range verlässt, wird eine Trendwiederaufnahme möglich. Der nächste Bar besitzt einen noch größeren bearischen Körper und überlappt kaum. Spätestens diese Folge zeigt Spike plus Follow-through: Verkäufer schaffen schnell neuen Raum, und eine gemessene Fortsetzung aus dem Spike wird wahrscheinlicher.',
          'Psychologisch fühlt sich der Short riskant an, weil der Markt plötzlich schnell läuft und der Stop über einem großen Signalbar weit entfernt ist. Die Lösung ist nicht, das Signal zu ignorieren oder den Stop willkürlich zu eng zu setzen. Eine kleinere Positionsgröße hält das Geldrisiko kontrollierbar und erlaubt die strukturell sinnvolle Stopposition über dem Signalbar.',
          'Nach einem weiteren starken Bear-Bar kann der Stop auf Einstand oder über dessen Hoch nachgezogen werden. Das konkrete Management muss zur eigenen Strategie passen; der zentrale Gedanke lautet, Risiko über Positionsgröße und Struktur zu steuern, statt die Qualität des Breakouts aus Angst zu verleugnen.',
        ],
        callout:
          'Wenn der notwendige Stop groß ist, verkleinere die Position – nicht die logische Distanz des Stops.',
      },
      {
        id: 'chapter-02-18-diagram',
        type: 'diagram',
        title: 'Zwei Bars verwandeln Ruhe in Trendfortsetzung',
        scenario: 'quiet-collapse',
        caption:
          'Nach langer Überlappung schaffen zwei große Bear-Bars mit wenig Überlappung Distanz. Entry, Schutzstop und späteres Management werden an der Struktur ausgerichtet.',
        observations: [
          'Die ruhige Range erzeugt Gewöhnung, aber keine bullische Bestätigung.',
          'Der erste Bear-Bar öffnet die Möglichkeit der Trendwiederaufnahme.',
          'Der zweite größere Bar liefert entscheidenden Follow-through.',
          'Kleine Positionsgröße kann einen strukturell weiteren Stop tragbar machen.',
        ],
      },
      {
        id: 'chapter-02-18-compare',
        type: 'comparison',
        title: 'Emotion und Struktur trennen',
        columns: [
          {
            title: 'Emotion sagt',
            tone: 'warning',
            points: [
              '„Nach Stunden der Ruhe ist der Move bestimmt schon vorbei.“',
              '„Der Bar ist zu groß, ich kann nur einen engen Stop setzen.“',
              '„Ich warte, bis sich der Preis wieder bequem anfühlt.“',
            ],
          },
          {
            title: 'Struktur sagt',
            tone: 'positive',
            points: [
              'Breakout plus größerer Folgebar',
              'kaum Überlappung und klare Distanz',
              'Positionsgröße an sinnvollen Stop anpassen',
            ],
          },
        ],
      },
      {
        id: 'chapter-02-18-question',
        type: 'question',
        title: 'Wie behandelst du den großen Stop?',
        prompt:
          'Ein hochwertiger Bear-Breakout verlangt einen Schutzstop über einem großen Signalbar. Der Geldbetrag wäre mit normaler Größe zu hoch. Was ist die saubere Anpassung?',
        options: [
          {
            id: 'size-down',
            label: 'Positionsgröße reduzieren und strukturellen Stop beibehalten',
            explanation:
              'Richtig. Damit bleibt die Handelslogik intakt, während das Geldrisiko sinkt.',
          },
          {
            id: 'tight-stop',
            label: 'Den Stop ohne strukturellen Grund direkt hinter den Entry setzen',
            explanation:
              'Ein willkürlich enger Stop verändert den Trade und erhöht die Gefahr eines normalen Ausstoppens.',
          },
          {
            id: 'oversize',
            label: 'Normale Größe behalten und das höhere Risiko akzeptieren',
            explanation:
              'Ein gutes Setup rechtfertigt keine Verletzung des festgelegten Risikorahmens.',
          },
        ],
        correctOptionId: 'size-down',
      },
      {
        id: 'chapter-02-18-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Eine lange ruhige Phase kann eine spätere Trendwiederaufnahme psychologisch verschleiern.',
          'Große, kaum überlappende Bars mit Anschluss liefern starke Breakout-Evidenz.',
          'Gemessene Fortsetzung wird nach einem starken Spike plausibel, aber nicht garantiert.',
          'Positionsgröße, Schutzstop und späteres Nachziehen gehören zu einem gemeinsamen Risikoplan.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-02.lesson-19',
    title: 'Chartfall 2.5: Der stärkste Bear-Bar kann das Tief einleiten',
    summary:
      'Wie zunehmende Bear-Körper, Unterstützung und ausbleibende Käufe ein Sell Vacuum erzeugen – und warum der perfekte Tickchart trotzdem keine Lösung ist.',
    durationMinutes: 17,
    xp: 60,
    sourceUnit: 'Kapitel 2 · Chartfall 2.5',
    sourceAnchors: [
      'Großer Bear-Bar am Ende eines starken Fünf-Minuten-Bärentrends',
      'Zwei-Bar-Umkehr an einem gemessenen Ziel',
      'Tickchart-Doppeltief und gescheiterter Bear-Breakout',
      'Extrem viele Tickbars innerhalb einer Minute',
      'Zunehmende Körpergröße als Stärke und mögliches Sell Climax',
      'Sell Vacuum durch wartende Käufer und Short-Gewinnmitnehmer',
      'Erwartung mehrerer Rallybeine, ausreichender Bardauer und Durchschnittstest',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-19-explain',
        type: 'explanation',
        eyebrow: 'Eigenständige Rekonstruktion · Fall 2.5',
        title: 'Zunehmende Stärke wird an Unterstützung zur möglichen Erschöpfung',
        paragraphs: [
          'In einem starken Fünf-Minuten-Bärentrend werden die letzten bearischen Körper immer größer. Das zeigt zunächst zunehmenden Verkaufsdruck. Nach einem langen Lauf von vielen Bars und an einem gemessenen Unterstützungsziel besitzt dieselbe Beschleunigung jedoch eine zweite Bedeutung: Sie kann der Sell Climax sein, auf den starke Teilnehmer gewartet haben.',
          'Während der Preis auf die Unterstützung zufällt, halten sich potenzielle Käufer zurück. Auch Bären warten mit ihrer Gewinnmitnahme, weil sie einen letzten günstigen Schub erwarten. Das fehlende Kaufen erzeugt ein Sell Vacuum und lässt den letzten Bar besonders groß werden. Sobald er erscheint, decken Bären Shorts und Bullen kaufen neue Longs. Beide Orders sind Käufe und können eine scharfe Rally starten.',
          'Auf dem kleineren Tickchart ist rückblickend ein klassisches Doppeltief mit gescheitertem Abwärtsausbruch erkennbar. Doch allein in der letzten Minute des großen Bars entstehen mehrere Dutzend Mikro-Bars. Ein Mensch kann diese Folge nicht zuverlässig analysieren und rechtzeitig ausführen. Der brauchbare Plan bleibt daher auf dem langsameren Chart: Reaktion am Klimax beobachten und einen strukturellen Entry wählen.',
          'Nach einem ausgedehnten Trend und einem solchen Sell Vacuum erwarten erfahrene Trader keine winzige Ein-Bar-Reaktion. Eine sinnvolle Arbeitsthese ist eine Korrektur mit mindestens zwei Aufwärtsbeinen, ungefähr zehn oder mehr Bars und einem Test etwas oberhalb des gleitenden Durchschnitts. Ob daraus eine vollständige Trendwende wird, entscheidet erst die Stärke dieser Rally.',
        ],
        callout:
          'Der große Bear-Bar entsteht teilweise, weil Käufer warten. Wenn ihr Ziel erreicht ist, können Gewinnmitnahme und neue Longs gleichzeitig drehen.',
      },
      {
        id: 'chapter-02-19-diagram',
        type: 'diagram',
        title: 'Sell Vacuum: Beschleunigung direkt vor der Reaktion',
        scenario: 'exhaustion-bear-spike',
        caption:
          'Die synthetische Sequenz zeigt wachsende Bear-Körper bis zur Unterstützung und anschließend zwei getrennte Kaufquellen.',
        observations: [
          'Wachsende Körper zeigen echten Verkaufsdruck und zugleich potenzielle Endbeschleunigung.',
          'Unterstützung und lange Trenddauer machen Gewinnmitnahmen wahrscheinlicher.',
          'Bären kaufen Shorts zurück; Bullen eröffnen Longs.',
          'Die Stärke der anschließenden Rally bestimmt, ob nur Korrektur oder echte Umkehr folgt.',
        ],
      },
      {
        id: 'chapter-02-19-speed-diagram',
        type: 'diagram',
        title: 'Warum der Tickchart im Rückblick täuscht',
        scenario: 'human-vs-tick-speed',
        caption:
          'Das saubere Mikromuster existiert, doch die Informationsmenge innerhalb einer Minute übersteigt eine robuste manuelle Ausführung.',
        observations: [
          'Der Mikrochart kann den Entstehungsprozess erklären.',
          'Rückblickend markierte Divergenzen beseitigen das Live-Zeitproblem nicht.',
          'Computer verarbeiten und platzieren Orders in dieser Sequenz deutlich schneller.',
          'Der langsamere Chart bietet weniger Präzision, aber eine realistische Entscheidungschance.',
        ],
      },
      {
        id: 'chapter-02-19-question',
        type: 'question',
        title: 'Warum kann der größte Bear-Bar bullisch relevant werden?',
        prompt:
          'Nach einem sehr langen Bärentrend entsteht an Unterstützung der größte Bear-Bar. Welche Erklärung passt zu einem anschließenden scharfen Anstieg?',
        options: [
          {
            id: 'dual-buying',
            label: 'Short-Gewinnmitnahmen und neue Longs erzeugen gemeinsam Käufe',
            explanation:
              'Richtig. Beide Gruppen warteten auf den Sell Climax und handeln danach in dieselbe Orderrichtung.',
          },
          {
            id: 'bar-fake',
            label: 'Der bearische Bar enthielt keine echten Verkäufe',
            explanation:
              'Der Verkaufsdruck war real; seine Position und der Wechsel der Folgeorders verändern die nächste Phase.',
          },
          {
            id: 'instant-certainty',
            label: 'Jeder große Bear-Bar garantiert sofort einen Bullenmarkt',
            explanation:
              'Ohne langen Vorlauf, Unterstützung und Reaktion bleibt ein großer Bar häufig Trendfortsetzung.',
          },
        ],
        correctOptionId: 'dual-buying',
      },
      {
        id: 'chapter-02-19-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Zunehmende Bear-Körper zeigen gleichzeitig Stärke und – spät am Ziel – mögliches Klimaxrisiko.',
          'Das Warten beider Seiten kann vor der Unterstützung ein Sell Vacuum erzeugen.',
          'Short-Eindeckungen und neue Longs sind beide Kauforders.',
          'Ein Tickchart-Muster ist wertlos, wenn es live nicht verlässlich verarbeitet werden kann.',
          'Nach einem reifen Sell Climax ist eine mehrbeinige, mehrbarige Korrektur eine sinnvolle Erwartung.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-02.lesson-20',
    title: 'Chartfall 2.6: Vom Trend in die Trading Range',
    summary:
      'Wie wiederholte bullische Reaktionen an neuen Tiefs die Trendphase beenden und bearische Körper am späteren Hoch den nächsten Pullback ankündigen.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 2 · Chartfall 2.6',
    sourceAnchors: [
      'Neue Tiefs wechseln von Short-Chance zu Gewinnmitnahmezone',
      'Bull-Bar oder großer unterer Tail nach jedem Swing-Tiefbruch',
      'Kumulativer Kaufdruck und Übergang zu zweiseitigem Handel',
      'Mögliche große Rally oder vollständige Trendwende',
      'Kumulierende Bear-Körper am späteren Hoch als Pullback-Warnung',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-20-explain',
        type: 'explanation',
        eyebrow: 'Eigenständige Rekonstruktion · Fall 2.6',
        title: 'Der Trend endet schrittweise, wenn neue Tiefs keine sauberen Shorts mehr liefern',
        paragraphs: [
          'Zu Beginn des Falls setzt ein Bärentrend zuverlässig neue Tiefs. Später folgt auf nahezu jeden Bruch eines Swing-Tiefs innerhalb von ein oder zwei Bars entweder ein bullischer Körper oder ein auffälliger unterer Tail. Verkäufer erzielen zwar noch neue Extrempreise, können diese aber immer seltener bis zum Schluss halten.',
          'Das Verhalten zeigt einen Rollenwechsel. Bären betrachten neue Tiefs zunehmend als Ort für Gewinnmitnahmen statt als idealen neuen Short. Gleichzeitig sehen Bullen dort genügend Wert, um erste Longs aufzubauen. Beide Aktionen sind Käufe und nehmen dem Bärentrend seine einseitige Struktur.',
          'Jede einzelne Reaktion kann klein bleiben. Zusammen bilden sie kumulativen Kaufdruck. Sobald genügend Druck vorhanden ist, kann der Markt eine große Bärenmarktrally starten oder vollständig in einen Bullenmarkt wechseln. Häufig kommt zuerst eine Trading Range, weil starke Bullen unten kaufen und starke Bären erst bei höheren Preisen wieder verkaufen.',
          'Am späteren Rallyhoch sammelt sich die Gegeninformation: Mehrere bearische Körper erscheinen dicht beieinander. Nun baut sich Verkaufsdruck auf und warnt vor einem Pullback. Kapitel 2 endet damit bei derselben Grundregel, mit der es begann: Nicht ein einzelnes Etikett, sondern die fortlaufende Bilanz der Bars zeigt, welche Seite Kontrolle gewinnt oder verliert.',
        ],
        callout:
          'Beobachte, was nach einem neuen Extrem geschieht. Schnelle Zurückweisung ist kumulative Information gegen den alten Trend.',
      },
      {
        id: 'chapter-02-20-diagram',
        type: 'diagram',
        title: 'Neue Tiefs verlieren ihre Fortsetzungskraft',
        scenario: 'trend-to-range-pressure',
        caption:
          'Die eigene Sequenz markiert bullische Reaktionen nach Swing-Tiefbrüchen und später bearische Körper am Rallyhoch.',
        observations: [
          'Frühe Tiefbrüche schließen noch klar bearisch.',
          'Spätere Tiefbrüche werden schnell mit Tail oder Bull-Bar zurückgewiesen.',
          'Kaufdruck führt zunächst zu zweiseitigem Handel und dann zu einer größeren Rally.',
          'Bearische Körper am Rallyhoch bauen spiegelbildlich neuen Verkaufsdruck auf.',
        ],
      },
      {
        id: 'chapter-02-20-compare',
        type: 'comparison',
        title: 'Die Bedeutung eines neuen Tiefs verändert sich',
        columns: [
          {
            title: 'Früher Trend',
            tone: 'warning',
            points: [
              'Tiefbruch erhält bearischen Anschluss',
              'Bars schließen nahe ihren Tiefs',
              'Rallys bleiben klein und werden verkauft',
            ],
          },
          {
            title: 'Übergang',
            tone: 'neutral',
            points: [
              'Tiefbrüche werden schnell zurückgewiesen',
              'untere Tails und Bull-Bars häufen sich',
              'Shorts nehmen Gewinne statt neu zu verkaufen',
            ],
          },
          {
            title: 'Neue Balance',
            tone: 'positive',
            points: [
              'Bullen kaufen unten',
              'Bären verkaufen erst höher',
              'größere Rally oder Umkehr wird möglich',
            ],
          },
        ],
      },
      {
        id: 'chapter-02-20-question',
        type: 'question',
        title: 'Welches Zeichen warnt vor dem Regimewechsel?',
        prompt:
          'Nach jedem neuen Swing-Tief entstehen innerhalb von ein oder zwei Bars zunehmend bullische Körper oder lange untere Tails. Was ist die beste Schlussfolgerung?',
        options: [
          {
            id: 'transition',
            label: 'Der Bärentrend verliert Kontrolle und zweiseitiger Handel wird wahrscheinlicher',
            explanation:
              'Richtig. Wiederholte schnelle Zurückweisung zeigt kumulativen Kaufdruck und verändertes Verhalten der Bären.',
          },
          {
            id: 'short-more',
            label: 'Jedes neue Tief ist nun ein noch besserer Short',
            explanation:
              'Die fehlende Fortsetzung und die bullischen Reaktionen sprechen gerade gegen blindes Nachverkaufen.',
          },
          {
            id: 'instant-bull',
            label: 'Der Markt ist bereits sicher im Bullenmodus',
            explanation:
              'Zunächst wird Balance oder Rally wahrscheinlicher; ein vollständiger Bullenmarkt braucht weitere Bestätigung.',
          },
        ],
        correctOptionId: 'transition',
      },
      {
        id: 'chapter-02-20-recap',
        type: 'recap',
        title: 'Kapitel 2 abgeschlossen',
        points: [
          'Trendbar und Doji beschreiben relative Kontrolle oder Balance – keine sichere Zukunft.',
          'Follow-through trennt häufig Breakout, Fortsetzung, Fehlschlag und Umkehr.',
          'Klimax bedeutet zu weit und zu schnell; eine Umkehr braucht einen Gegen-Breakout.',
          'Kauf- und Verkaufsdruck sammeln sich über Körper, Tails, Schlusspositionen und Reaktionen an Extremen.',
          'Große Bars können am Trendbeginn bestätigen und spät am Ziel erschöpfen.',
          'Ein Trend geht häufig schrittweise über zweiseitige Reaktionen in eine Trading Range über.',
        ],
      },
    ],
  },
] satisfies Lesson[];
