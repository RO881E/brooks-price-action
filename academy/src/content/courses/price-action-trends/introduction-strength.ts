import type { Lesson } from '../../types';

export const introductionStrengthLessons = [
  {
    id: 'price-action-trends.introduction.lesson-16',
    title: 'Stärke eines Trends lesen',
    summary:
      'Vier Merkmalsgruppen fassen die vielen Einzelhinweise zu einer brauchbaren Trenddiagnose zusammen.',
    durationMinutes: 14,
    xp: 45,
    sourceUnit: 'Einleitung · Stärkezeichen',
    sourceAnchors: ['24 Merkmale starker Trends', 'Trendbars, Gaps und Pullbacks', 'Scheitern von Gegentrendversuchen'],
    status: 'published',
    steps: [
      {
        id: 'intro-16-explain',
        type: 'explanation',
        eyebrow: 'Evidenz sammeln',
        title: 'Trendstärke ist eine Summe, kein einzelnes Signal',
        paragraphs: [
          'Ein starker Trend hat selten nur ein einziges auffälliges Merkmal. Mehrere Beobachtungen zeigen gleichzeitig in dieselbe Richtung: Swing-Hochs und Swing-Tiefs wandern weiter, Trendbars dominieren, Pullbacks bleiben klein, und Gegenbewegungen finden keinen Anschluss. Je mehr unabhängige Hinweise zusammenkommen, desto riskanter wird die Suche nach dem exakten Wendepunkt.',
          'Stärke kann spektakulär aussehen – ein Gap oder ein großer Ausbruch – oder ganz unscheinbar. Gerade sehr starke Trends laufen manchmal in kleinen Bars weiter, sodass der ersehnte tiefe Pullback nie kommt. Große Gegenbars sehen dann verführerisch aus, scheitern aber und werden selbst zu Flaggen mit dem Trend.',
          'Gaps versteht man in Price Action ziemlich breit. Neben sichtbaren Eröffnungsgaps zählen auch nicht überlappende Tests und Mikrogaps um einen starken Trendbar. Sie zeigen, dass die Gegenseite den Preis kaum zurückholen konnte.',
          'Keins der folgenden Merkmale ist für sich allein ein Kauf- oder Verkaufssignal. Die Liste ist ein Beweissystem: Du bewertest Struktur, Barqualität, Pullbackverhalten und das Scheitern der Gegenseite zusammen.',
        ],
        callout:
          'Je stärker der Trend, desto besser sehen Gegentrend-Setups oft aus – und desto häufiger scheitern sie.',
      },
      {
        id: 'intro-16-diagram',
        type: 'diagram',
        title: 'Stärke zeigt sich auch zwischen den großen Bars',
        scenario: 'trend-strength',
        caption:
          'Der synthetische Trend kombiniert gerichtete Swings, geringe Überlappung, kleine Pullbacks und scheiternde Gegenbewegungen.',
        observations: [
          'Hochs und Tiefs steigen in geordneter Folge.',
          'Viele Bars schließen in Trendrichtung und besitzen kleine Gegentails.',
          'Pullbacks bleiben kurz, seitwärts und erreichen wichtige Bruchpunkte nicht.',
          'Der Gegentrendimpuls bekommt keinen Anschluss und wird zur Fortsetzungsflagge.',
        ],
      },
      {
        id: 'intro-16-structure',
        type: 'comparison',
        title: 'Struktur und Bars',
        columns: [
          {
            title: 'Gerichtete Struktur',
            tone: 'positive',
            points: [
              'großes Eröffnungsgap kann den Tag gerichtet starten',
              'Hochs und Tiefs entwickeln sich in Trendrichtung',
              'mehr Trendbars mit der Richtung als dagegen',
              'Bewegung überwindet EMA, Swingpunkte und Linien deutlich',
              'lange Folgen ohne Berührung der EMA können Stärke zeigen',
              'zwei aufeinanderfolgende kräftige Schlüsse jenseits der EMA gegen den Trend fehlen',
            ],
          },
          {
            title: 'Barqualität und Gaps',
            tone: 'neutral',
            points: [
              'wenig Körperüberlappung zwischen aufeinanderfolgenden Bars',
              'kleine Tails oder Schluss nahe dem Trendextrem',
              'gelegentliche Körpergaps unterstreichen Dringlichkeit',
              'Breakout-Gap markiert den Start eines Impulses',
              'nicht überlappender Test kann als Measuring Gap wirken',
              'Mikrogap um einen starken Trendbar zeigt fehlenden Rücklauf',
            ],
          },
        ],
      },
      {
        id: 'intro-16-pullbacks',
        type: 'comparison',
        title: 'Pullbacks und Gegenseite',
        columns: [
          {
            title: 'Korrekturen bleiben kontrolliert',
            tone: 'positive',
            points: [
              'Pullbacks sind klein, selten und eher seitwärts',
              'wiederholte zweibeinige Pullbacks bieten Trendfortsetzungen',
              'Trendlinienbrüche führen eher zu Balance als zu sofortiger Umkehr',
              'große Climaxes und starke Kanal-Overshoots fehlen häufig',
              'manchmal sind gerade schwache Signalbars im Pullback Ausdruck großer Trendstärke',
              'anhaltende Bewegung ohne idealen Einstieg erzeugt spürbare Dringlichkeit',
            ],
          },
          {
            title: 'Gegentrend bleibt erfolglos',
            tone: 'warning',
            points: [
              'profitable Gegentrades sind selten',
              'große Gegenbars locken Trader in die falsche Richtung',
              'Wedges und andere Reversal-Versuche scheitern',
              'Gegenspikes erhalten keinen Anschluss',
              'gescheiterte Umkehr wird zur Flagge mit dem Trend',
              'ein gutes Aussehen des Gegensignals wiegt weniger als sein fehlender Erfolg',
            ],
          },
        ],
      },
      {
        id: 'intro-16-question',
        type: 'question',
        title: 'Das schönste Signal handelt gegen den stärksten Markt',
        prompt:
          'Ein Aufwärtstrend besitzt kleine Pullbacks, viele bullische Schlüsse und gescheiterte Shorts. Nun erscheint ein großer bearisher Bar. Was ist die sinnvollste erste Annahme?',
        options: [
          {
            id: 'reversal',
            label: 'Ein einzelner Bar bestätigt die komplette Umkehr',
            explanation:
              'In einem starken Trend braucht die Gegenseite Anschluss und strukturellen Fortschritt.',
          },
          {
            id: 'test',
            label: 'Gegenstärke beobachten, aber zunächst Pullback oder Falle einkalkulieren',
            explanation:
              'Richtig. Große Gegenbars scheitern in starken Trends häufig, solange Anschluss fehlt.',
          },
          {
            id: 'ignore',
            label: 'Der Bar kann niemals relevant werden',
            explanation:
              'Er ist neue Information; er reicht nur noch nicht für die stärkste Schlussfolgerung.',
          },
        ],
        correctOptionId: 'test',
      },
      {
        id: 'intro-16-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Trendstärke entsteht aus übereinstimmender Struktur-, Bar- und Pullbackevidenz.',
          'Gaps und geringe Überlappung zeigen fehlende Gegenkontrolle.',
          'Sehr starke Trends können unscheinbar und ohne idealen Pullback verlaufen.',
          'Scheiternde Gegentrendversuche bestätigen häufig die ursprüngliche Richtung.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-17',
    title: 'Stärke eines Breakouts lesen',
    summary:
      'Barqualität, Reichweite, Follow-through, Pullback und Kontext entscheiden gemeinsam über einen Ausbruch.',
    durationMinutes: 14,
    xp: 45,
    sourceUnit: 'Einleitung · Stärkezeichen',
    sourceAnchors: ['18 Merkmale bullischer Breakouts', '19 Merkmale bearischer Breakouts', 'Symmetrie und Kontext von Ausbrüchen'],
    status: 'published',
    steps: [
      {
        id: 'intro-17-explain',
        type: 'explanation',
        eyebrow: 'Ausbruch bewerten',
        title: 'Die Linie ist nicht der Breakout – die Akzeptanz danach ist es',
        paragraphs: [
          'Ein Ausbruch fängt damit an, dass der Preis eine Grenze überschreitet. Stark wird er aber erst durch das, was außerhalb der alten Zone passiert. Ein großer Trendkörper mit kleinem Gegentail zeigt Dringlichkeit. Noch wichtiger ist, was danach kommt: weitere Bars in Ausbruchsrichtung, kleine Rückläufe und ein erster Test, der den Bruchpunkt nicht komplett zurücknimmt.',
          'Reichweite zählt. Ein Impuls, der mehrere frühere Hochs, Tiefs, Schlüsse, eine EMA und eine Trendlinie überwindet, verändert mehr Struktur als ein knappes Überschreiten um einen Tick. Zusätzliche Evidenz: wie viele vorherige Bars mit dem Schluss – und nicht nur mit dem Extrempunkt – überwunden werden.',
          'Volumen kann einen außergewöhnlichen Ausbruch stützen, vor allem wenn es ein Vielfaches des jüngsten Normalwerts erreicht. Es ersetzt aber keinen Kursanschluss. Ohne Follow-through kann sogar ein lauter Volumenspike eine Erschöpfung markieren.',
          'Bullische und bärische Kriterien sind weitgehend Spiegelbilder. In beiden Fällen entscheiden Barqualität, Dauer des Spikes, Mikrogaps, Vorgeschichte und die Qualität des ersten Pullbacks.',
        ],
        callout:
          'Ein starker Breakout entkommt nicht nur der Range – er verhindert zunächst auch, dass der Preis einfach wieder hineinläuft.',
      },
      {
        id: 'intro-17-diagram',
        type: 'diagram',
        title: 'Range, Ausbruch, Anschluss und flacher Test',
        scenario: 'breakout-strength',
        caption:
          'Mehrere unabhängige Hinweise machen den Ausbruch belastbarer als das bloße Überschreiten der oberen Grenze.',
        observations: [
          'Vor dem Bruch baut sich Druck durch stärkere Bars zur Grenze auf.',
          'Der Ausbruchsbar schließt nahe seinem Extrem außerhalb der Range.',
          'Folgebars akzeptieren die neue Zone statt sofort zurückzufallen.',
          'Der erste Pullback bleibt kurz und hält oberhalb des Bruchpunkts.',
        ],
      },
      {
        id: 'intro-17-impulse',
        type: 'comparison',
        title: 'Was der Impuls selbst verrät',
        columns: [
          {
            title: 'Bullischer Breakout',
            tone: 'positive',
            points: [
              'großer bullischer Körper, kleiner oberer und unterer Tail',
              'Bar verbringt viel Zeit nahe dem Hoch',
              'mehrere Widerstände und frühere Schlüsse werden überwunden',
              'Folgebars besitzen weiter brauchbare bullische Körper',
              'Spike wächst mehrere Bars ohne tiefen Rücklauf',
              'Open, Low und Close zeigen wiederholt aufwärtsgerichtete Dringlichkeit',
            ],
          },
          {
            title: 'Bearischer Breakout',
            tone: 'warning',
            points: [
              'großer bearisher Körper, kleine Tails',
              'Bar verbringt viel Zeit nahe dem Tief',
              'Unterstützungen, Swing-Tiefs und frühere Schlüsse brechen',
              'Folgebars behalten brauchbare bearishe Körper',
              'Spike fällt mehrere Bars ohne kräftige Rally',
              'Open, High und Close zeigen wiederholt abwärtsgerichtete Dringlichkeit',
            ],
          },
        ],
      },
      {
        id: 'intro-17-context',
        type: 'comparison',
        title: 'Was vor und nach dem Ausbruchsbar zählt',
        columns: [
          {
            title: 'Unterstützender Kontext',
            tone: 'positive',
            points: [
              'Fortsetzung eines vorhandenen Trends nach Pullback',
              'mehrere starke Trendtage in derselben Richtung',
              'zunehmend dominante Trendbars innerhalb der Range',
              'Ausbruch folgt einem sinnvollen Test des alten Extrempunkts',
              'außergewöhnliches Volumen bestätigt Aktivität, wenn der Preis ebenfalls folgt',
            ],
          },
          {
            title: 'Qualität des ersten Tests',
            tone: 'neutral',
            points: [
              'erster Pullback beginnt erst nach mehreren Ausbruchsbars',
              'Korrektur dauert nur ein oder zwei Bars',
              'Gegen-Signalbar ist nicht besonders stark',
              'Breakoutpunkt und Breakeven-Zone werden nicht erreicht',
              'Mikrogap oder nicht überlappender Test bleibt erhalten',
            ],
          },
        ],
      },
      {
        id: 'intro-17-question',
        type: 'question',
        title: 'Welcher Ausbruch besitzt mehr Evidenz?',
        prompt:
          'Variante A schließt knapp über der Range und fällt im nächsten Bar zurück. Variante B schließt deutlich darüber, erhält zwei Folgebars und testet die Grenze später von oben. Welche ist stärker?',
        options: [
          {
            id: 'a',
            label: 'Variante A, weil sie zuerst ausgebrochen ist',
            explanation:
              'Ein frühes Überschreiten ohne Akzeptanz ist schwächer als ein bestätigter Ausbruch.',
          },
          {
            id: 'b',
            label: 'Variante B wegen Reichweite, Anschluss und gehaltenem Test',
            explanation:
              'Richtig. Drei unabhängige Merkmalsgruppen stimmen überein.',
          },
          {
            id: 'equal',
            label: 'Beide sind immer gleichwertig',
            explanation:
              'Die Qualität der Bewegung nach der Grenze verändert die Wahrscheinlichkeit deutlich.',
          },
        ],
        correctOptionId: 'b',
      },
      {
        id: 'intro-17-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Bargröße allein genügt nicht; Anschluss und Akzeptanz sind entscheidend.',
          'Reichweite über mehrere Strukturpunkte erhöht die Bedeutung.',
          'Der erste Pullback ist ein zentraler Qualitätstest.',
          'Bullische und bearishe Breakouts folgen weitgehend derselben gespiegelten Logik.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-18',
    title: 'Anatomie eines Reversal-Bars',
    summary:
      'Mindestanforderungen, Qualitätsmerkmale und die entscheidende Rolle des Entry-Bars danach.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Einleitung · Stärkezeichen',
    sourceAnchors: ['Bullischer Reversal-Bar', 'Bearischer Reversal-Bar', 'Signalbar und Entry-Bar'],
    status: 'published',
    steps: [
      {
        id: 'intro-18-explain',
        type: 'explanation',
        eyebrow: 'Signalbar',
        title: 'Zurückweisung im Bar – Bestätigung erst danach',
        paragraphs: [
          'Ein bullischer Reversal-Bar zeigt, dass tiefere Preise innerhalb seines Zeitfensters abgewiesen wurden. Mindestens braucht er einen bullischen Körper oder einen Schluss oberhalb seiner Mitte. Die bärische Variante ist das Spiegelbild: bärischer Körper oder Schluss unterhalb der Mitte.',
          'Besser wird er, wenn er nahe am vorherigen Schluss eröffnet, deutlich in Gegenrichtung schließt, auf der abgewiesenen Seite einen aussagekräftigen Tail hat und am neuen Ende nur einen kleinen. Wenig Überlappung und das Überwinden mehrerer früherer Schlüsse oder Extrempunkte machen die Reaktion besser sichtbar.',
          'Trotzdem ist der Signalbar nur ein Setup. Der folgende Entry-Bar sollte die neue Richtung bestätigen. Ein schwacher Inside-Doji nach einem angeblich starken Reversal zeigt weniger Dringlichkeit als ein kräftiger Trendbar, der zügig über den Signalbar hinaus (oder darunter) ausbricht.',
          'Der Kontext steht über allem. Ein optisch perfekter bullischer Reversal-Bar mitten in einem starken Abwärtstrend startet vielleicht nur einen kleinen Pullback. Derselbe Bar nach einem gescheiterten Ausbruch unter einer Range bedeutet etwas ganz anderes.',
        ],
        callout:
          'Der Signalbar beschreibt die Möglichkeit. Entry-Bar und Folgebewegung zeigen, ob andere Marktteilnehmer sie tatsächlich handeln.',
      },
      {
        id: 'intro-18-diagram',
        type: 'diagram',
        title: 'Bullischer und bearisher Reversal-Bar',
        scenario: 'reversal-bars',
        caption:
          'Die Tails zeigen Zurückweisung; der Schluss und die Folgebewegung zeigen, welche Seite am Ende Kontrolle gewann.',
        observations: [
          'Bullisch: unterer Tail, Schluss oberhalb der Mitte und idealerweise nahe dem Hoch.',
          'Bärisch: oberer Tail, Schluss unterhalb der Mitte und idealerweise nahe dem Tief.',
          'Wenig Überlappung und das Reversieren früherer Schlüsse erhöhen die Aussagekraft.',
          'Ein starker Entry-Bar liefert Anschluss; ein Doji lässt die Lage offener.',
        ],
      },
      {
        id: 'intro-18-comparison',
        type: 'comparison',
        title: 'Gespiegelte Qualitätsmerkmale',
        columns: [
          {
            title: 'Bullischer Reversal-Bar',
            tone: 'positive',
            points: [
              'Open nahe oder unter vorherigem Close',
              'Close über Open und vorherigem Close',
              'deutlicher unterer, kleiner oberer Tail',
              'wenig Überlappung mit vorherigen Bars',
              'kräftiger bullischer Entry-Bar folgt',
              'Close über mehreren früheren Hochs oder Schlüssen',
            ],
          },
          {
            title: 'Bearischer Reversal-Bar',
            tone: 'warning',
            points: [
              'Open nahe oder über vorherigem Close',
              'Close unter Open und vorherigem Close',
              'deutlicher oberer, kleiner unterer Tail',
              'wenig Überlappung mit vorherigen Bars',
              'kräftiger bearisher Entry-Bar folgt',
              'Close unter mehreren früheren Tiefs oder Schlüssen',
            ],
          },
        ],
      },
      {
        id: 'intro-18-question',
        type: 'question',
        title: 'Welcher Teil bestätigt das Setup?',
        prompt:
          'Nach einem bullischen Reversal-Bar folgt ein kleiner Inside-Doji. Was fehlt gegenüber einem hochwertigen Reversal?',
        options: [
          {
            id: 'tail',
            label: 'Ein längerer Tail im ursprünglichen Signalbar',
            explanation:
              'Der Tail kann bereits gut sein; die Schwäche liegt in der fehlenden Folgebewegung.',
          },
          {
            id: 'follow',
            label: 'Ein starker Entry-Bar mit bullischem Anschluss',
            explanation:
              'Richtig. Der Doji bestätigt keine klare Dringlichkeit der Käufer.',
          },
          {
            id: 'name',
            label: 'Ein anderer Kerzenname',
            explanation:
              'Die Funktion der Sequenz ist wichtiger als ein zusätzlicher Name.',
          },
        ],
        correctOptionId: 'follow',
      },
      {
        id: 'intro-18-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Reversal-Bars zeigen eine Zurückweisung innerhalb des Zeitfensters.',
          'Körper, Tails, Überlappung und überwundene Bars bestimmen die Qualität.',
          'Der Entry-Bar danach ist ein eigener Beweis für oder gegen die Idee.',
          'Ein schöner Bar ohne passenden Ort bleibt ein schwaches Setup.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-19',
    title: 'Stärke einer vollständigen Umkehr',
    summary:
      'Eine Umkehr braucht mehr als einen Bar: Bruch, Test, zweiter Versuch, Anschluss und kontrollierte Pullbacks.',
    durationMinutes: 14,
    xp: 45,
    sourceUnit: 'Einleitung · Stärkezeichen',
    sourceAnchors: ['23 Merkmale starker bullischer Reversals', '23 Merkmale starker bearischer Reversals', 'Trendbruch, Test und Follow-through'],
    status: 'published',
    steps: [
      {
        id: 'intro-19-explain',
        type: 'explanation',
        eyebrow: 'Prozess statt Kerze',
        title: 'Eine starke Umkehr baut eine neue Trendstruktur auf',
        paragraphs: [
          'Ein Reversal-Bar ist nur der mögliche Startschuss. Eine belastbare Umkehr muss die alte Trendlogik beschädigen und eigene Stärke aufbauen. Dazu gehören ein kraftvoller Gegenspike, das Überwinden mehrerer Bars und Strukturpunkte und Folgebars, die den neuen Druck bestätigen.',
          'Der Kontext vor dem Signal ist wichtig. Ein Bruch der alten Trendlinie, ein gescheiterter Test des Extrempunkts, ein Overshoot der Kanallinie oder ein zweiter Umkehrversuch geben dir mehr Grundlage als der allererste Gegenbar in einem intakten Trend.',
          'Nach dem Start sagt dir der erste Pullback viel. Bleibt er kurz und seitwärts, hält er oberhalb (bzw. unterhalb) deines Einstiegs und scheitert er an der alten Trendlinie oder EMA, spricht das für die neue Richtung. Eine tiefe, dynamische Rückkehr in den alten Trend schwächt die Umkehrthese.',
          'Bullische und bärische Umkehrungen sind wieder Spiegelbilder. Es geht nicht darum, zwei Listen auswendig zu lernen. Du sollst dieselben vier Phasen erkennen: Ausgangskontext, kraftvoller Bruch, erfolgreicher Test und neuer Anschluss.',
        ],
        callout:
          'Die beste Umkehr ist nicht nur ein starkes Signal gegen den alten Trend – sie verhält sich danach wie ein neuer Trend.',
      },
      {
        id: 'intro-19-diagram',
        type: 'diagram',
        title: 'Bruch, Test und neuer Anschluss',
        scenario: 'reversal-strength',
        caption:
          'Die Sequenz zeigt, wie mehrere Beweise eine Umkehr aufbauen. Kein einzelner Punkt genügt allein.',
        observations: [
          'Der alte Trend verliert erstmals mit Momentum seine Trendlinie.',
          'Ein Test des Extrempunkts schafft keinen nachhaltigen neuen Tiefpunkt.',
          'Der zweite bullische Versuch überwindet mehrere frühere Bars.',
          'Der erste Pullback im neuen Impuls bleibt flach und erhält anschließend Follow-through.',
        ],
      },
      {
        id: 'intro-19-context',
        type: 'comparison',
        title: 'Vor dem Umkehrsignal',
        columns: [
          {
            title: 'Unterstützender Kontext',
            tone: 'positive',
            points: [
              'alter Trendkanal wurde überschossen',
              'Trendlinie war bereits zuvor gebrochen',
              'Test des alten Extrempunkts verliert Momentum',
              'zweiter Umkehrversuch statt erster spontaner Versuch',
              'bedeutendes Swing-Hoch oder -Tief wird kurz verletzt und zurückgewiesen',
            ],
          },
          {
            title: 'Schwächerer Kontext',
            tone: 'warning',
            points: [
              'erster Gegenbar in einem intakten starken Trend',
              'keine vorherige strukturelle Beschädigung',
              'Test des Extrempunkts beschleunigt weiter',
              'Signal liegt mitten in der Struktur ohne Bezugspunkt',
              'neue Richtung erreicht keinen früheren Swingpunkt',
            ],
          },
        ],
      },
      {
        id: 'intro-19-follow',
        type: 'comparison',
        title: 'Nach dem Umkehrsignal',
        columns: [
          {
            title: 'Neue Richtung übernimmt',
            tone: 'positive',
            points: [
              'mehrere Trendkörper mit brauchbarer Größe folgen',
              'Spike wächst mehrere Bars mit kleinen Gegenbewegungen',
              'Schlüsse, Hochs oder Tiefs entwickeln sich gerichtet',
              'mehrere frühere Bars, Swings und Flaggen werden überwunden',
              'H1/H2 beziehungsweise L1/L2 unterstützen den neuen Trend',
              'erster Pullback bleibt kurz und hält die Einstiegszone',
            ],
          },
          {
            title: 'Test entscheidet',
            tone: 'neutral',
            points: [
              'alte Trendlinie oder EMA stoppt den Rücklauf',
              'Pullback besitzt viel Überlappung statt altem Momentum',
              'Gegenseite schafft keinen tiefen Rücklauf',
              'neuer Impuls bricht weitere Unterstützung oder Widerstände',
              'Dringlichkeit bleibt durch kleine Tails und Mikrogaps sichtbar',
              'Close überwindet mehr Struktur als nur der Extrempunkt',
            ],
          },
        ],
      },
      {
        id: 'intro-19-question',
        type: 'question',
        title: 'Was macht aus einem Bar eine Umkehr?',
        prompt:
          'Nach einem starken bullischen Reversal-Bar in einem Abwärtstrend folgt sofort ein neues Tief mit kräftigem bearischem Anschluss. Wie ist das Signal zu bewerten?',
        options: [
          {
            id: 'complete',
            label: 'Die bullische Umkehr bleibt vollständig bestätigt',
            explanation:
              'Die Folgebewegung widerspricht der Umkehr und stärkt den alten Trend.',
          },
          {
            id: 'failed',
            label: 'Der Umkehrversuch ist gescheitert oder mindestens stark geschwächt',
            explanation:
              'Richtig. Ohne Anschluss ist der schöne Signalbar allein nicht ausreichend.',
          },
          {
            id: 'irrelevant',
            label: 'Folgebars spielen bei Reversals keine Rolle',
            explanation:
              'Gerade die Folgebewegung zeigt, ob die neue Seite echte Kontrolle gewinnt.',
          },
        ],
        correctOptionId: 'failed',
      },
      {
        id: 'intro-19-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Starke Umkehrungen beschädigen zuerst die alte Struktur.',
          'Zweiter Versuch, Extremtest und Kanal-Overshoot verbessern den Kontext.',
          'Folgebars und flache Pullbacks bauen die neue Trendlogik auf.',
          'Ohne Follow-through bleibt ein Reversal-Bar nur ein Versuch.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01-introduction.lesson-01',
    title: 'High 1 und High 2 richtig zählen',
    summary:
      'Die ersten beiden Versuche, nach einer Korrektur wieder in den bullischen Kontext einzusteigen.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Einleitung · Bars zählen (Grundlagen)',
    sourceAnchors: ['High 1 und High 2', 'Zweibeinige ABC-Korrektur', 'Versuch statt Anzahl bullischer Bars'],
    status: 'published',
    steps: [
      {
        id: 'part-01-count-explain',
        type: 'explanation',
        eyebrow: 'Bar Counting',
        title: 'Gezählt werden Fortsetzungsversuche im Pullback',
        paragraphs: [
          'In einem bullischen Kontext korrigiert der Markt seitwärts oder abwärts. Der erste Bar, dessen Hoch über dem Hoch des unmittelbar vorherigen Bars liegt, ist der erste Aufwärtsversuch: High 1. Das heißt nicht, dass genau ein bärischer Bar davor lag, und auch nicht, dass der Trade automatisch gut ist. Es markiert nur das Ende des ersten kleinen Korrekturbeins.',
          'Scheitert dieser Versuch und der Pullback läuft weiter, ist das nächste Überschreiten eines Vorgängerhochs ein High 2. Damit startet der Markt einen zweiten Anlauf, die übergeordnete Aufwärtsrichtung wieder aufzunehmen.',
          'Die verbreitete ABC-Beschreibung meint dieselbe Grundstruktur aus einem anderen Blickwinkel: A ist das erste Korrekturbein, B der Zwischenversuch um High 1 und C das zweite Korrekturbein. Der Ausbruch aus C ist der High-2-Versuch.',
          'High 2 sagt dir mehr über die Abfolge als High 1, bleibt aber vom Kontext abhängig. In einem starken Aufwärtstrend kann es ein hochwertiger Einstieg in die Fortsetzung sein. In einer fallenden Struktur oder direkt unter starkem Widerstand kann derselbe Count scheitern.',
        ],
        callout:
          'Die Zahl beschreibt den Versuch. Trend, Ort, Signalbar und Platz bis zum Ziel bestimmen seine Qualität.',
      },
      {
        id: 'part-01-count-diagram',
        type: 'diagram',
        title: 'Zwei Aufwärtsversuche innerhalb eines Pullbacks',
        scenario: 'high-low-count',
        caption:
          'Der erste Versuch schafft keine Fortsetzung. Nach einem weiteren Abwärtsbein markiert der nächste Bruch über ein Vorgängerhoch High 2.',
        observations: [
          'High 1 beendet das erste kleine Korrekturbein.',
          'Der fehlende Anschluss lässt den Pullback weiterlaufen.',
          'High 2 erscheint erst nach dem erneuten Abwärtsversuch.',
          'Der Count ordnet die Sequenz; er bewertet sie noch nicht vollständig.',
        ],
      },
      {
        id: 'part-01-count-comparison',
        type: 'comparison',
        title: 'Count und Kontext auseinanderhalten',
        columns: [
          {
            title: 'Stärkerer High 2',
            tone: 'positive',
            points: [
              'übergeordneter Aufwärtstrend intakt',
              'zwei kontrollierte Korrekturbeine',
              'bullische Signal- und Entry-Bar',
              'ausreichend Platz bis zum Widerstand',
            ],
          },
          {
            title: 'Schwächerer High 2',
            tone: 'warning',
            points: [
              'Abwärtstrend besitzt weiter Momentum',
              'Pullback ist außergewöhnlich tief',
              'Signalbar schließt schwach',
              'Entry läuft direkt in Widerstand',
            ],
          },
        ],
      },
      {
        id: 'part-01-count-question',
        type: 'question',
        title: 'Was sagt High 2 wirklich aus?',
        prompt: 'Welche Aussage trifft am besten zu?',
        options: [
          {
            id: 'guarantee',
            label: 'High 2 garantiert die Trendfortsetzung',
            explanation:
              'Kein einzelnes Price-Action-Muster garantiert einen Verlauf.',
          },
          {
            id: 'attempt',
            label: 'Es ist der zweite Aufwärtsversuch innerhalb der Korrektur',
            explanation:
              'Richtig. Qualität und Trade ergeben sich erst aus dem Kontext.',
          },
          {
            id: 'two-bars',
            label: 'Es sind genau zwei bullische Bars',
            explanation:
              'Gezählt werden Versuche, nicht die Anzahl bullischer Kerzen.',
          },
        ],
        correctOptionId: 'attempt',
      },
      {
        id: 'part-01-count-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'High 1 ist der erste Aufwärtsversuch im Pullback.',
          'High 2 folgt erst nach einem erneuten Korrekturbein.',
          'ABC und High 2 können dieselbe zweibeinige Struktur beschreiben.',
          'Der Count ist Sprache für Sequenz, kein automatisches Signal.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-21',
    title: 'High 3, High 4 und der Punkt des Zweifelns',
    summary:
      'Was dritte und vierte Versuche über Wedge-Struktur, höheren Zeitrahmen und möglichen Kontrollverlust verraten.',
    durationMinutes: 11,
    xp: 40,
    sourceUnit: 'Einleitung · Bars zählen (Grundlagen)',
    sourceAnchors: ['High 3 als Wedge Bull Flag', 'High 4 als zweite High-2-Struktur', 'Fehlschlag und möglicher bearisher Swing'],
    status: 'published',
    steps: [
      {
        id: 'intro-21-explain',
        type: 'explanation',
        eyebrow: 'Fortgeschrittener Count',
        title: 'Mehr Versuche bedeuten nicht automatisch mehr Qualität',
        paragraphs: [
          'Läuft der Pullback nach High 2 weiter und es entsteht ein drittes Korrekturbein, ist der nächste Aufwärtsversuch High 3. Diese dreiteilige Struktur erinnert oft an eine Wedge Bull Flag: Die Verkäufer schaffen mehrere Schübe, kommen aber womöglich jedes Mal weniger weit.',
          'Ein High 4 lässt sich auf zwei Arten lesen. Manchmal besteht die große Struktur aus zwei gescheiterten High-2-Sequenzen hintereinander – auf einem höheren Zeitrahmen kann das Ganze dann wie ein einziger High 2 aussehen. In anderen Fällen sieht die Abwärtskorrektur aus wie ein kleiner Spike-and-Channel-Bärentrend.',
          'Mit jedem weiteren Versuch wächst die Zwiespältigkeit. Einerseits kann die Korrektur reif für ihr Ende sein. Andererseits zeigt ein vierter Versuch, dass der ursprüngliche Trend mehrfach keinen überzeugenden Anschluss gefunden hat. Verstehe die Zahl deshalb nicht als wachsende Garantie.',
          'Scheitert High 4 und fällt der Markt unter den Signalbar, ist die Annahme eines bloßen Pullbacks deutlich geschwächt. Der Markt kann schon in einen bärischen Swing oder eine zweiseitige Phase gekippt sein. Dann ist Beobachten besser, als reflexhaft an der alten Trendidee festzuhalten.',
        ],
        callout:
          'Ein später Count ist beides: mögliche Erschöpfung der Korrektur und Warnung vor verlorener Trendkontrolle.',
      },
      {
        id: 'intro-21-diagram',
        type: 'diagram',
        title: 'Vom dritten Versuch zum Regime-Zweifel',
        scenario: 'high-low-failure',
        caption:
          'Mehrere Aufwärtsversuche erscheinen innerhalb einer ausgedehnten Korrektur. Der Fehlschlag des späten Versuchs verändert die Regimefrage.',
        observations: [
          'Drei Korrekturschübe können eine Wedge Bull Flag bilden.',
          'Zwei kleine High-2-Strukturen können zusammen ein größeres High 2 ergeben.',
          'Ein High 4 innerhalb eines kleinen Bärenkanals braucht besonders guten Kontext.',
          'Der Bruch unter das späte Signal macht einen neuen bearischen Swing plausibel.',
        ],
      },
      {
        id: 'intro-21-question',
        type: 'question',
        title: 'Was folgt aus einem gescheiterten High 4?',
        prompt:
          'High 4 wird ausgelöst, bekommt keinen Anschluss und der Markt fällt kräftig unter seinen Signalbar. Was ist die beste Reaktion?',
        options: [
          {
            id: 'buy-more',
            label: 'Automatisch nachkaufen, weil der Count hoch ist',
            explanation:
              'Der Fehlschlag ist Information gegen die alte Trendfortsetzung.',
          },
          {
            id: 'reassess',
            label: 'Pullback-Annahme neu prüfen und weitere Price Action abwarten',
            explanation:
              'Richtig. Kontrolle kann in einen bearischen Swing oder eine zweiseitige Phase gewechselt sein.',
          },
          {
            id: 'reset',
            label: 'Jeden Bar sofort wieder als High 1 zählen',
            explanation:
              'Der Count wird nicht willkürlich zurückgesetzt; zuerst muss die neue Struktur bestimmt werden.',
          },
        ],
        correctOptionId: 'reassess',
      },
      {
        id: 'intro-21-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'High 3 steht häufig mit einer dreischübigen Wedge-Korrektur in Verbindung.',
          'High 4 kann aus zwei High-2-Sequenzen oder einem kleinen Bärenkanal entstehen.',
          'Höhere Counts sind keine höheren Garantien.',
          'Der Fehlschlag eines späten Counts verlangt eine neue Regimebewertung.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-22',
    title: 'Low 1 bis Low 4 spiegeln die Logik',
    summary:
      'Abwärtsversuche in einer Rally zählen und aus dem Fehlschlag eines späten Low-Setups auf Kontrollverlust schließen.',
    durationMinutes: 10,
    xp: 40,
    sourceUnit: 'Einleitung · Bars zählen (Grundlagen)',
    sourceAnchors: ['Low 1 bis Low 4', 'Low 2 als ABC-Korrektur', 'Low-4-Fehlschlag und Kontrollwechsel'],
    status: 'published',
    steps: [
      {
        id: 'intro-22-explain',
        type: 'explanation',
        eyebrow: 'Gespiegelte Logik',
        title: 'In einer Rally werden neue Abwärtsversuche gezählt',
        paragraphs: [
          'In einem bärischen Kontext korrigiert der Markt seitwärts oder aufwärts. Der erste Bar, dessen Tief unter dem Tief des unmittelbar vorherigen Bars liegt, startet Low 1. Scheitert die Abwärtsfortsetzung und die Rally läuft weiter, markiert der nächste solche Bruch Low 2.',
          'Low 2 entspricht der bärischen ABC-Korrektur: erster Rallyschub, Zwischenversuch nach unten und zweiter Rallyschub. Der erneute Bruch nach unten ist der zweite Anlauf, den übergeordneten Abwärtstrend wieder aufzunehmen.',
          'Low 3 und Low 4 zählst du genauso. Mit späteren Versuchen stellt sich auch hier die Frage, ob die Korrektur nur ausreift oder ob die Bären schon die Kontrolle verlieren.',
          'Scheitert Low 4, weil der Markt nach einem ausgelösten Short über den Signalbar steigt, spricht das gegen eine weiterhin klare Bärenkontrolle. Der Markt kann zweiseitig werden oder in einen bullischen Swing kippen. Neue Bärenstärke müsste sich dann durch einen überzeugenden Bruch der bullischen Trendstruktur zeigen.',
        ],
        callout:
          'High- und Low-Counts sind Spiegelbilder. Auch Kontext und Fehlschlag liest du spiegelbildlich.',
      },
      {
        id: 'intro-22-comparison',
        type: 'comparison',
        title: 'High und Low als gemeinsame Sprache',
        columns: [
          {
            title: 'Bullischer Kontext',
            tone: 'positive',
            points: [
              'Korrektur läuft seitwärts oder abwärts',
              'Bruch über Vorgängerhoch erzeugt High-Count',
              'High 2 entspricht häufig ABC',
              'gescheitertes High 4 warnt vor Bärenkontrolle',
            ],
          },
          {
            title: 'Bearischer Kontext',
            tone: 'warning',
            points: [
              'Korrektur läuft seitwärts oder aufwärts',
              'Bruch unter Vorgängertief erzeugt Low-Count',
              'Low 2 entspricht häufig ABC',
              'gescheitertes Low 4 warnt vor Bullenkontrolle',
            ],
          },
        ],
      },
      {
        id: 'intro-22-diagram',
        type: 'diagram',
        title: 'Zählung ordnet Versuche, nicht Farben',
        scenario: 'high-low-count',
        caption:
          'Drehe die Logik gedanklich um: Für Low-Counts zählt der Bruch unter das vorherige Tief innerhalb einer Aufwärtskorrektur.',
        observations: [
          'Count und Trendkontext müssen gemeinsam genannt werden.',
          'Ein Low 2 besteht nicht einfach aus zwei roten Bars.',
          'Der Fehlschlag nach Auslösung ist selbst neue Richtungsinformation.',
        ],
      },
      {
        id: 'intro-22-question',
        type: 'question',
        title: 'Was signalisiert der Low-4-Fehlschlag?',
        prompt:
          'Ein Low 4 wird in einer Rally ausgelöst, danach steigt der Markt deutlich über den Signalbar. Welche Aussage passt am besten?',
        options: [
          {
            id: 'bear-control',
            label: 'Die Bärenkontrolle ist stärker als zuvor',
            explanation:
              'Der gescheiterte Fortsetzungsversuch spricht zunächst gegen klare Bärenkontrolle.',
          },
          {
            id: 'two-sided',
            label: 'Zweiseitiger Handel oder bullische Übernahme wird plausibler',
            explanation:
              'Richtig. Die Bären müssten Kontrolle mit neuer struktureller Stärke zurückgewinnen.',
          },
          {
            id: 'nothing',
            label: 'Ein Fehlschlag enthält keine Information',
            explanation:
              'Gescheiterte Setups zeigen, welche Seite eine erwartete Gelegenheit nicht nutzen konnte.',
          },
        ],
        correctOptionId: 'two-sided',
      },
      {
        id: 'intro-22-recap',
        type: 'recap',
        title: 'Einleitung vollständig eingeordnet',
        points: [
          'Low-Counts spiegeln High-Counts in einem bearischen Kontext.',
          'Low 2 bezeichnet den zweiten Abwärtsversuch innerhalb der Rally.',
          'Späte Counts verlangen mehr Kontext, nicht blind mehr Vertrauen.',
          'Nach dem Low-4-Fehlschlag ist neue Bärenstärke erst wieder zu beweisen.',
        ],
      },
    ],
  },
] satisfies Lesson[];
