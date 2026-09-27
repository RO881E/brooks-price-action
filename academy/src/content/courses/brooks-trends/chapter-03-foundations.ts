import type { Lesson } from '../../types';

export const chapterThreeFoundationLessons = [
  {
    id: 'brooks-trends.chapter-03.lesson-01',
    title: 'Ein Breakout beginnt als Kontrollwechsel',
    summary:
      'Wie ein Markt aus zweiseitigem Handel in einen gerichteten Spike wechselt und woran die eigentliche Entscheidung hängt.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Kapitel 3 · Breakouts, Ranges, Tests und Umkehrbewegungen',
    sourceAnchors: [
      'Trendphase und zweiseitiger Handel als Grundzustände',
      'Trendbar oder Gap als Beginn eines Breakouts',
      'Erfolgreicher und gescheiterter Ausbruch als zentrale Entscheidung',
      'Pullback und Kanal als spätere Entwicklungsstufen',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-01-explain',
        type: 'explanation',
        eyebrow: 'Kapitel 3 · Grundlogik',
        title: 'Vom Gleichgewicht zur schnellen Distanz',
        paragraphs: [
          'Jeder sichtbare Chartabschnitt lässt sich zunächst als gerichteter oder zweiseitiger Handel lesen. In einer Trendphase setzt eine Seite über mehrere Bars neue Preise durch. In einer Trading Range wechseln relative Kontrolle und Gegenkontrolle so oft, dass keine Seite dauerhaft Abstand gewinnt.',
          'Ein Breakout ist der Übergang aus dieser Balance in eine gerichtete Bewegung. Er kann mit nur einem Trendbar beginnen oder sofort aus mehreren kräftigen Bars bestehen. In einem dünn gehandelten Markt kann zwischen den Preisbereichen eine echte Kurslücke liegen; in einem liquiden Markt erfüllt ein schneller Trendbar oft dieselbe Funktion: Zwischen Ausgangsbereich und neuem Preisgebiet fand kaum ausgeglichener Handel statt.',
          'Die wichtige Frage ist nicht, ob eine Linie kurz überschritten wurde. Entscheidend ist, ob der Markt die neuen Preise akzeptiert. Bleiben Anschlussbars in Ausbruchsrichtung stark und Rückläufe flach, entwickelt sich aus dem Breakout ein Trend. Fällt der Preis schnell in den alten Bereich zurück, war der Ausbruch ein Test und möglicherweise eine Falle.',
          'Mit zunehmender Dauer werden selbst starke Bewegungen gewöhnlich langsamer. Erste Pullbacks erscheinen, die Steigung nimmt ab und aus dem Spike wird ein Kanal. Dieser Ablauf verbindet Breakout, Trend, Pullback und spätere Range zu einer einzigen Entwicklung.',
        ],
        callout:
          'Die Kernentscheidung lautet: Akzeptiert der Markt den neuen Preisbereich – oder kehrt er in die alte Balance zurück?',
      },
      {
        id: 'chapter-03-01-diagram',
        type: 'diagram',
        title: 'Range, Breakout, Spike und erste Akzeptanz',
        scenario: 'breakout-spike-channel',
        caption:
          'Die Linie markiert nur den Ausgangspunkt. Erst Distanz, Anschluss und ein haltender Pullback machen aus dem kurzen Grenzbruch einen tragfähigen Breakout.',
        observations: [
          'Vor dem Ausbruch überlappen sich Bewegungen und kehren wiederholt zurück.',
          'Der Spike schafft schnell Abstand zur alten Range.',
          'Anschluss in derselben Richtung zeigt Akzeptanz höherer Preise.',
          'Ein erster Pullback darf tiefer werden, ohne sofort die gesamte Breakout-Strecke aufzugeben.',
        ],
      },
      {
        id: 'chapter-03-01-compare',
        type: 'comparison',
        title: 'Zwei mögliche Antworten auf dieselbe Grenzüberschreitung',
        columns: [
          {
            title: 'Erfolgreicher Breakout',
            tone: 'positive',
            points: [
              'schnelle Distanz vom Ausgangsbereich',
              'Folgebars bestätigen die Richtung',
              'Pullback hält überwiegend außerhalb der Range',
            ],
          },
          {
            title: 'Gescheiterter Breakout',
            tone: 'warning',
            points: [
              'nur kurzer Stich durch die Grenze',
              'fehlender Anschluss oder starker Gegenbar',
              'zügige Rückkehr in den alten Preisbereich',
            ],
          },
        ],
      },
      {
        id: 'chapter-03-01-question',
        type: 'question',
        title: 'Welche Information wiegt am schwersten?',
        prompt:
          'Der Markt handelt einen Tick über dem Range-Hoch. Was brauchst du vor allem, um daraus einen erfolgreichen Breakout abzuleiten?',
        options: [
          {
            id: 'line-only',
            label: 'Nur den gedruckten Tick über der Linie',
            explanation:
              'Ein kurzer Grenzbruch kann sofort scheitern. Die Linie allein beweist keine Akzeptanz.',
          },
          {
            id: 'acceptance',
            label: 'Anschluss und gehaltene höhere Preise',
            explanation:
              'Richtig. Distanz, Follow-through und das Verhalten im Pullback zeigen, ob der neue Bereich akzeptiert wird.',
          },
          {
            id: 'pattern-name',
            label: 'Einen möglichst präzisen Musternamen',
            explanation:
              'Ein Name ersetzt nicht die Beobachtung, ob Käufer tatsächlich weitere Preise durchsetzen.',
          },
        ],
        correctOptionId: 'acceptance',
      },
      {
        id: 'chapter-03-01-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Breakout bedeutet Wechsel von Balance zu gerichteter Initiative.',
          'Ein Trendbar kann in liquiden Märkten wie eine funktionale Lücke wirken.',
          'Akzeptanz entsteht durch Anschluss und haltende Pullbacks, nicht durch die Linie allein.',
          'Viele Breakouts entwickeln sich später vom Spike zum flacheren Kanal.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-02',
    title: 'Der Spike wird zum Kanal',
    summary:
      'Warum ein explosiver Start gewöhnlich in eine langsamere, breitere Trendphase übergeht und Linien mitwachsen müssen.',
    durationMinutes: 12,
    xp: 45,
    sourceUnit: 'Kapitel 3 · Spike-and-Channel',
    sourceAnchors: [
      'Pullbacks nach der ersten Ausbruchsphase',
      'Abnehmende Steigung und breiter werdender Kanal',
      'Trendlinien und Kanallinien als laufende Näherungen',
      'Spike-and-Channel als häufige Tagesstruktur',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-02-explain',
        type: 'explanation',
        eyebrow: 'Entwicklungsstufen',
        title: 'Die Geschwindigkeit ändert sich, bevor die Richtung endet',
        paragraphs: [
          'Im Spike handeln Marktteilnehmer mit hoher Dringlichkeit. Viele wollen sofort in dieselbe Richtung, während die Gegenseite nur wenig Widerstand bietet. Der Kurs legt deshalb in kurzer Zeit viel Strecke zurück und Pullbacks bleiben klein oder fehlen ganz.',
          'Diese Dringlichkeit hält selten unverändert an. Nach dem ersten Rücksetzer setzt sich die Bewegung häufig fort, nun aber mit mehr Überlappung, kleineren Gegenbewegungen, sichtbaren Tails und einzelnen Bars gegen den Trend. Die Richtung kann weiter intakt sein, obwohl der Fortschritt pro Bar geringer wird.',
          'Aus dieser langsameren Fortsetzung entsteht der Kanal. Seine Steigung ist gewöhnlich flacher als die des Spikes und seine Breite nimmt mit neuen Schwüngen zu. Eine frühe Trendlinie ist deshalb keine starre Wahrheit. Sie wird neu gezeichnet, sobald zusätzliche Hochs oder Tiefs eine bessere Begrenzung liefern.',
          'Spike und Kanal sind nicht zwei unabhängige Setups. Sie sind Phasen desselben Moves: zuerst schnelle Neubewertung, danach geordnetere Fortsetzung mit wachsender Gegenaktivität.',
        ],
        callout:
          'Weniger Geschwindigkeit bedeutet nicht automatisch Umkehr. Es zeigt zunächst nur, dass der Markt von Eile zu Verhandlung wechselt.',
      },
      {
        id: 'chapter-03-02-diagram',
        type: 'diagram',
        title: 'Die Steigung wird flacher, der Kanal breiter',
        scenario: 'channel-shallowing',
        caption:
          'Der Spike schafft die erste Distanz. Danach folgen kleinere Fortschritte, Pullbacks und neu angepasste Begrenzungslinien.',
        observations: [
          'Der erste Impuls besitzt die höchste Steigung.',
          'Im Kanal überlappen sich benachbarte Schwünge stärker.',
          'Gegenbars und Tails zeigen wachsende, aber noch nicht dominante Gegenseite.',
          'Die jüngsten bestätigten Schwünge bestimmen die brauchbarste Kanallinie.',
        ],
      },
      {
        id: 'chapter-03-02-question',
        type: 'question',
        title: 'Wie liest du die langsamere Fortsetzung?',
        prompt:
          'Nach einem starken bullischen Spike folgen weiter höhere Hochs, aber mit Überlappung und kleinen Pullbacks. Was ist die präziseste Einordnung?',
        options: [
          {
            id: 'instant-bear',
            label: 'Der Bärentrend ist bereits bestätigt',
            explanation:
              'Mehr Gegenhandel schwächt den Move, bestätigt aber ohne bärischen Kontrollgewinn noch keinen Bärentrend.',
          },
          {
            id: 'bull-channel',
            label: 'Bullischer Kanal nach dem Spike',
            explanation:
              'Richtig. Die Richtung bleibt bullisch, während Tempo und Einseitigkeit nachlassen.',
          },
          {
            id: 'same-spike',
            label: 'Unverändert dieselbe Spike-Phase',
            explanation:
              'Ein Spike besitzt normalerweise mehr Dringlichkeit und weniger Überlappung als der beschriebene Abschnitt.',
          },
        ],
        correctOptionId: 'bull-channel',
      },
      {
        id: 'chapter-03-02-recap',
        type: 'recap',
        title: 'Der Ablauf in vier Bildern',
        points: [
          'Spike: schnelle Distanz mit hoher Dringlichkeit.',
          'Erster Pullback: die Gegenseite wird wieder sichtbar.',
          'Kanal: Trendfortsetzung mit mehr Überlappung und kleineren Rückläufen.',
          'Neue Schwünge erfordern angepasste, meist flachere Begrenzungslinien.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-03',
    title: 'Im Kanal wächst bereits die Range',
    summary:
      'Wie Gewinnmitnahmen, gestaffelte Gegentrades und Rückkäufe am Kanalbeginn den späteren Gleichgewichtsbereich vorbereiten.',
    durationMinutes: 15,
    xp: 50,
    sourceUnit: 'Kapitel 3 · Vom Kanal zur Trading Range',
    sourceAnchors: [
      'Kanalbeginn als Keim der späteren Trading Range',
      'Skalieren von Gegenpositionen während des Kanals',
      'Test des Kanalbodens oder Kanalbeginns',
      'Eindecken von Shorts und erneute Käufe der Bullen',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-03-explain',
        type: 'explanation',
        eyebrow: 'Zweiseitiger Handel',
        title: 'Die Range beginnt oft mit dem ersten Pullback',
        paragraphs: [
          'Der Beginn des Kanals ist mehr als ein geometrischer Punkt. Dort zeigte der Markt zum ersten Mal, dass die Spike-Richtung nicht mehr vollkommen einseitig ist. Aus diesem Grund wird der Preisbereich um den ersten Pullback später häufig erneut besucht und bildet einen Rand der entstehenden Trading Range.',
          'Während ein Bullenkanal weiter steigt, geben vorsichtige Bullen Teile ihrer Position ab. Gleichzeitig beginnen einige erfahrene Bären kleine Shorts aufzubauen. Sie können am ersten Pullback oder oberhalb älterer Hochs verkaufen und ihre Position bei weiteren Anstiegen staffeln. Das ist riskant und verlangt genügend Kapital, passende Positionsgröße und einen klaren Ausstiegsplan; es ist keine Einladung zum blinden Gegenhandeln.',
          'Wenn der Kurs später deutlich zum Kanalboden zurückläuft, schließen viele dieser Bären ihre jüngeren Shorts mit Gewinn. Frühe Short-Einstiege liegen dabei möglicherweise nur nahe am Einstand. Zugleich kaufen Trendbullen erneut in dem Preisbereich, in dem der Kanal begann. Beide Aktionen sind Kauforders: Short-Eindeckung und neue Long-Positionen.',
          'Diese gebündelten Käufe erzeugen oft einen Bounce. Danach ist die ursprüngliche Spike-and-Channel-Dynamik weitgehend abgearbeitet: Der Markt kann ein Doppeltief bilden, längere Zeit seitwärts handeln oder nach einem schwachen Bounce doch in einen Bärentrend kippen.',
        ],
        callout:
          'Der erste Pullback markiert häufig den Preisbereich, an dem Trendfolger und Gegenhändler später wieder gemeinsam aktiv werden.',
      },
      {
        id: 'chapter-03-03-diagram',
        type: 'diagram',
        title: 'Warum der Kanal zum Gleichgewicht zurückkehrt',
        scenario: 'channel-to-range-cycle',
        caption:
          'Im steigenden Kanal sammeln sich Verkäufe und Gewinnmitnahmen. Am Kanalbeginn treffen Short-Eindeckungen auf erneute Long-Käufe und verbreitern den Handel zur Range.',
        observations: [
          'Der erste Pullback definiert den Start des weniger dringlichen Kanals.',
          'Mit jedem neuen Hoch nimmt die zweiseitige Aktivität zu.',
          'Der tiefere Rücklauf testet die Zone des Kanalbeginns statt zwingend einen exakten Tick.',
          'Eindeckende Bären und kaufende Bullen erzeugen denselben Ordertyp: Käufe.',
        ],
      },
      {
        id: 'chapter-03-03-compare',
        type: 'comparison',
        title: 'Wer handelt wo?',
        columns: [
          {
            title: 'Oben im reifenden Kanal',
            tone: 'warning',
            points: [
              'Bullen nehmen schrittweise Gewinne',
              'Bären bauen kleine Gegenpositionen auf',
              'neue Hochs schaffen weniger sauberen Fortschritt',
            ],
          },
          {
            title: 'Zurück am Kanalbeginn',
            tone: 'positive',
            points: [
              'späte Shorts realisieren Gewinne',
              'frühe Shorts suchen den Einstand',
              'Bullen kaufen den vertrauten Pullback-Bereich',
            ],
          },
        ],
      },
      {
        id: 'chapter-03-03-question',
        type: 'question',
        title: 'Warum kann der Rücklauf dort drehen?',
        prompt:
          'Ein Bullenkanal fällt zum Bereich seines ersten Pullbacks zurück. Welche Kombination kann den Bounce verstärken?',
        options: [
          {
            id: 'sellers-only',
            label: 'Nur neue aggressive Verkäufer',
            explanation:
              'Zusätzliche Verkäufe würden den Rücklauf eher fortsetzen als den Bounce erklären.',
          },
          {
            id: 'buyers-and-covering',
            label: 'Neue Longs plus Short-Eindeckungen',
            explanation:
              'Richtig. Beide Gruppen müssen kaufen und können gemeinsam eine kräftige Reaktion erzeugen.',
          },
          {
            id: 'line-magic',
            label: 'Die gezeichnete Linie erzwingt die Umkehr',
            explanation:
              'Eine Linie visualisiert einen Bereich; sie erzeugt keine Orders und garantiert keine Reaktion.',
          },
        ],
        correctOptionId: 'buyers-and-covering',
      },
      {
        id: 'chapter-03-03-recap',
        type: 'recap',
        title: 'Vom Trend zur Balance',
        points: [
          'Der Kanalbeginn ist häufig der Anfang der späteren Range.',
          'Überlappung und Gegenbars verraten schon im Kanal wachsende Gegenseite.',
          'Gestaffelte Gegenpositionen sind professionelles Risikomanagement, kein sicheres Rezept.',
          'Der Test am Kanalbeginn bündelt oft Short-Eindeckung und Trendkäufe.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-04',
    title: 'Jeder Kanal kann als Gegenflagge enden',
    summary:
      'Warum Kanäle meist zurücklaufen, Ausbrüche über Kanallinien oft scheitern und Ranges den nächsten Trend vorbereiten.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 3 · Kanäle als Flags',
    sourceAnchors: [
      'Bullenkanal als potenzielle Bear Flag und umgekehrt',
      'Trendfortsetzung nach seitlicher Pause',
      'Seltene Beschleunigung über die Kanallinie',
      'Trading Range als Flag im größeren Zeitrahmen',
      'Range als Ursprung fast jeder großen Umkehr',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-04-explain',
        type: 'explanation',
        eyebrow: 'Mehrdeutige Struktur',
        title: 'Der Kanal trägt seine spätere Korrektur bereits in sich',
        paragraphs: [
          'Ein Trendkanal sieht gerichtet aus, enthält aber mehr zweiseitigen Handel als der vorangegangene Spike. Deshalb wird ein steigender Kanal irgendwann häufig vollständig oder zu großen Teilen zurückgenommen. Aus Sicht eines Bären kann derselbe Bullenkanal damit eine lang gezogene Bear Flag sein. Spiegelbildlich kann ein fallender Kanal als Bull Flag enden.',
          'Das bedeutet nicht, dass jeder Kanal sofort gehandelt werden sollte. Ein starker Trend kann seitwärts pausieren und danach in derselben Richtung ausbrechen. Die Range ist dann eine Flag für die ursprüngliche Bewegung. Auf einem größeren Zeitrahmen wirken viele scheinbar eigenständige Intraday-Ranges genau so.',
          'Manchmal überschreitet ein Bullenkanal seine obere Kanallinie und beschleunigt. Eine solche Trendbeschleunigung ist möglich, aber vergleichsweise selten. Häufiger verliert der Ausbruch innerhalb weniger Bars seinen Anschluss und der Markt kehrt in oder durch den Kanal zurück. Dasselbe gilt umgekehrt für einen Abwärtskanal.',
          'Diese Mehrdeutigkeit erklärt zwei wichtige Grundsätze: Viele Trading Ranges lösen sich in Richtung des vorangegangenen Trends auf, und fast jede echte Trendwende verbringt zuvor Zeit in Balance. Eine Range ist deshalb weder bedeutungslos noch automatisch eine Umkehr – sie ist der Entscheidungsraum zwischen Fortsetzung und Richtungswechsel.',
        ],
        callout:
          'Ein Kanal ist gleichzeitig Trendfortsetzung im kleinen Bild und mögliche Gegenflagge im nächsten Entwicklungsschritt.',
      },
      {
        id: 'chapter-03-04-diagram',
        type: 'diagram',
        title: 'Ein Kanal, drei mögliche nächste Kapitel',
        scenario: 'channel-counter-flag',
        caption:
          'Aus demselben reifenden Kanal kann eine Rückkehr zum Ursprung, eine seitliche Flag mit Trendfortsetzung oder selten eine echte Beschleunigung entstehen.',
        observations: [
          'Die häufige Variante testet den Kanalbeginn oder die gegenüberliegende Kanalseite.',
          'Eine seitliche Pause kann den ursprünglichen Trend neu laden.',
          'Der Ausbruch über die Kanallinie braucht sofortigen Anschluss.',
          'Fehlt dieser Anschluss nach wenigen Bars, steigt die Chance einer Rückkehr deutlich.',
        ],
      },
      {
        id: 'chapter-03-04-question',
        type: 'question',
        title: 'Welche Erwartung ist zu absolut?',
        prompt:
          'Ein Bullenkanal bricht über seine obere Kanallinie aus. Welche Aussage solltest du vermeiden?',
        options: [
          {
            id: 'check-followthrough',
            label: 'Ich prüfe die nächsten Bars auf Anschluss',
            explanation:
              'Das ist angemessen, weil Akzeptanz oder Fehlschlag erst danach sichtbar werden.',
          },
          {
            id: 'guaranteed-acceleration',
            label: 'Der Trend beschleunigt jetzt garantiert',
            explanation:
              'Richtig gewählt. Kanallinien-Ausbrüche scheitern häufig schnell; eine Garantie gibt es nicht.',
          },
          {
            id: 'possible-failure',
            label: 'Ein schneller Fehlschlag bleibt möglich',
            explanation:
              'Das ist eine zentrale Alternative bei einem reifen Kanal.',
          },
        ],
        correctOptionId: 'guaranteed-acceleration',
      },
      {
        id: 'chapter-03-04-recap',
        type: 'recap',
        title: 'Mehrere Zeithorizonte gleichzeitig denken',
        points: [
          'Bullenkanäle können Bear Flags, Bärenkanäle Bull Flags werden.',
          'Starke Trends können nach einer Range in ihrer alten Richtung weiterlaufen.',
          'Beschleunigung über eine Kanallinie braucht zügigen Follow-through.',
          'Fast jede große Umkehr beginnt zunächst als Balancebereich.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-05',
    title: 'Ein Test prüft einen Bereich, keinen perfekten Tick',
    summary:
      'Welche Referenzzonen der Markt erneut besucht und wie Bullen und Bären am alten Hoch gegensätzliche Bestätigungen suchen.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 3 · Tests von Unterstützung und Widerstand',
    sourceAnchors: [
      'Test als Rückkehr zu einer relevanten Preiszone',
      'Trendlinien, Ziele, Swingpunkte und Bar-Extrema als Referenzen',
      'Vortageskurse als häufig beobachtete Bereiche',
      'Breakout- und Umkehrentscheidung am alten Hoch',
      'Zurückweisung wichtiger als exakte Hochform',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-05-explain',
        type: 'explanation',
        eyebrow: 'Marktgedächtnis',
        title: 'Der Markt fragt: Gilt die alte Bewertung noch?',
        paragraphs: [
          'Ein Test ist die Rückkehr in die Nähe eines Preises, an dem zuvor sichtbar gehandelt oder entschieden wurde. Der Markt muss den exakten Tick nicht treffen. Entscheidend ist, wie sich Käufer und Verkäufer verhalten, sobald der relevante Bereich wieder erreicht wird.',
          'Getestet werden können Trendlinien und Kanallinien, ein Ziel aus einer gemessenen Bewegung, alte Swing-Hochs oder Swing-Tiefs sowie Hoch oder Tief eines Signal- oder Entry-Bars. Auch Eröffnung, Hoch, Tief und Schluss des Vortages dienen häufig als Referenzen. Mehrere Marken können in derselben Zone zusammenfallen und den Test bedeutender machen.',
          'Am alten Hoch wollen Bullen sehen, dass der Markt den Preis nicht erneut ablehnt. Sie können auf einen starken Breakout über das Hoch oder auf einen Breakout-Pullback warten, der oberhalb des Bereichs hält. Bären suchen das Gegenteil: einen schwachen Anstieg, mangelnden Anschluss und einen überzeugenden bearischen Reversal-Bar in der Widerstandszone.',
          'Für die bärische These ist es zweitrangig, ob der neue Wendepunkt minimal über, genau auf oder etwas unter dem alten Hoch liegt. Höheres Hoch, Doppeltop und tieferes Hoch sind Varianten derselben Information, wenn der Markt den teuren Bereich klar zurückweist.',
        ],
        callout:
          'Ein Test ist eine Verhaltensprüfung in einer Zone: Akzeptanz führt weiter, Zurückweisung führt zurück.',
      },
      {
        id: 'chapter-03-05-diagram',
        type: 'diagram',
        title: 'Dasselbe alte Hoch, zwei Entscheidungen',
        scenario: 'test-area-decision',
        caption:
          'Links akzeptiert der Markt den Preis über dem alten Hoch. Rechts dringt er nur in die Zone ein und wird mit einem Reversal zurückgewiesen.',
        observations: [
          'Die markierte Fläche ist wichtiger als eine haarfeine Linie.',
          'Breakout plus haltender Pullback bestätigt neue Unterstützung.',
          'Schwacher Anstieg plus starker Gegenbar stützt die Umkehrthese.',
          'Die Form des zweiten Hochs ist weniger wichtig als die Reaktion danach.',
        ],
      },
      {
        id: 'chapter-03-05-compare',
        type: 'comparison',
        title: 'Was beide Seiten am Widerstand sehen wollen',
        columns: [
          {
            title: 'Bullische Bestätigung',
            tone: 'positive',
            points: [
              'kräftiger Bruch über die Zone',
              'Folgekäufe oder kleiner Pullback',
              'alter Widerstand hält anschließend als Unterstützung',
            ],
          },
          {
            title: 'Bärische Bestätigung',
            tone: 'warning',
            points: [
              'Anstieg verliert in der Zone an Kraft',
              'bearischer Reversal-Bar zeigt Zurückweisung',
              'Verkauf unter dessen Tief erhält Anschluss',
            ],
          },
        ],
      },
      {
        id: 'chapter-03-05-question',
        type: 'question',
        title: 'Was macht den Test aussagekräftig?',
        prompt:
          'Der zweite Wendepunkt liegt zwei Ticks über dem alten Hoch und fällt danach kräftig. Ist das wegen des höheren Hochs kein bärischer Test?',
        options: [
          {
            id: 'invalid',
            label: 'Ja, nur ein exaktes Doppeltop zählt',
            explanation:
              'Tests sind Zonen. Eine starre geometrische Gleichheit würde die eigentliche Zurückweisung übersehen.',
          },
          {
            id: 'valid-rejection',
            label: 'Doch, die Zurückweisung ist entscheidend',
            explanation:
              'Richtig. Ein leicht höheres Hoch kann denselben gescheiterten Akzeptanzversuch zeigen.',
          },
          {
            id: 'no-reference',
            label: 'Alte Hochs haben grundsätzlich keine Bedeutung',
            explanation:
              'Alte Swingpunkte sind häufig beobachtete Referenzen, auch wenn sie keine sichere Reaktion erzwingen.',
          },
        ],
        correctOptionId: 'valid-rejection',
      },
      {
        id: 'chapter-03-05-recap',
        type: 'recap',
        title: 'Tests systematisch lesen',
        points: [
          'Markiere Preisbereiche statt perfekte Ein-Tick-Linien.',
          'Prüfe Linien, Ziele, Swingpunkte, Signal- und Entry-Bars sowie Vortagesmarken.',
          'Beobachte am Test zuerst Stärke, Anschluss und Zurückweisung.',
          'Höheres Hoch, Doppeltop und tieferes Hoch können funktional dieselbe Ablehnung zeigen.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-06',
    title: 'Umkehr heißt Verhaltenswechsel',
    summary:
      'Warum nicht nur Bull zu Bear, sondern auch Trend zu Range und Range zu Trend echte Marktveränderungen sind.',
    durationMinutes: 12,
    xp: 45,
    sourceUnit: 'Kapitel 3 · Definition der Umkehr',
    sourceAnchors: [
      'Reversal als Wechsel von einem Verhalten zum Gegenteil',
      'Bullischer zu bärischem Trend und spiegelbildlich',
      'Trend zur Trading Range als Verhaltensumkehr',
      'Trading Range zum Trend als Breakout',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-06-explain',
        type: 'explanation',
        eyebrow: 'Begriffe sauber trennen',
        title: 'Richtung ist nur eine Form der Umkehr',
        paragraphs: [
          'Im engsten Sinn beschreibt eine Umkehr den Wechsel von einem Bullen- zu einem Bärentrend oder umgekehrt. Der Markt, der zuvor höhere Preise akzeptierte, beginnt dann tiefere Preise dauerhaft durchzusetzen.',
          'Praktisch ist der Begriff breiter. Wenn ein starker Trend seine Einseitigkeit verliert und in eine Trading Range übergeht, hat sich das Marktverhalten ebenfalls umgekehrt: aus gerichteter Kontrolle wurde zweiseitige Balance. Es gibt noch keinen Gegentrend, aber die frühere Trendannahme gilt nicht mehr unverändert.',
          'Der spiegelbildliche Wechsel von einer Trading Range in einen Trend ist ebenfalls eine Verhaltensumkehr. Weil dabei eine sichtbare Grenze verlassen wird, nennen Trader diesen Fall gewöhnlich Breakout. Breakout und Reversal sind damit keine völlig getrennten Welten, sondern verschiedene Blickwinkel auf einen Regimewechsel.',
          'Diese Definition schützt vor einer häufigen Fehleinschätzung: Ein Trend kann enden, ohne sofort in die Gegenrichtung zu laufen. Oft ist die erste echte Veränderung nur der Übergang in Balance.',
        ],
        callout:
          'Frage zuerst, welches Verhalten endete und welches begann – nicht nur, ob der letzte Bar seine Farbe wechselte.',
      },
      {
        id: 'chapter-03-06-diagram',
        type: 'diagram',
        title: 'Drei Arten von Regimewechsel',
        scenario: 'behavior-reversal',
        caption:
          'Richtungswechsel, Verlust der Trendkontrolle und Ausbruch aus Balance sind unterschiedliche sichtbare Formen derselben Grundidee.',
        observations: [
          'Bull zu Bear wechselt Richtung und Kontrollseite.',
          'Trend zu Range beendet Einseitigkeit, ohne schon einen Gegentrend zu bestätigen.',
          'Range zu Trend beendet Balance und heißt praktisch Breakout.',
          'Ein einzelner Gegenbar kann ein Hinweis sein, aber noch kein vollständiger Regimewechsel.',
        ],
      },
      {
        id: 'chapter-03-06-question',
        type: 'question',
        title: 'Welcher Wechsel wird oft übersehen?',
        prompt:
          'Ein starker Bullenlauf verliert Momentum und handelt anschließend lange seitwärts. Was hat sich bereits verändert?',
        options: [
          {
            id: 'nothing',
            label: 'Nichts, weil noch kein Bärentrend existiert',
            explanation:
              'Die Richtung hat sich noch nicht gedreht, aber das einseitige Trendverhalten ist verschwunden.',
          },
          {
            id: 'trend-to-range',
            label: 'Trend wurde zu zweiseitiger Balance',
            explanation:
              'Richtig. Auch dieser Wechsel ist eine Umkehr des vorherigen Verhaltens.',
          },
          {
            id: 'breakout',
            label: 'Die Range ist bereits nach unten ausgebrochen',
            explanation:
              'Seitwärtshandel allein bestätigt noch keinen Ausbruch in die Gegenrichtung.',
          },
        ],
        correctOptionId: 'trend-to-range',
      },
      {
        id: 'chapter-03-06-recap',
        type: 'recap',
        title: 'Umkehr neu denken',
        points: [
          'Bull zu Bear oder Bear zu Bull ist die direkte Richtungsumkehr.',
          'Trend zu Range ist der Verlust einseitiger Kontrolle.',
          'Range zu Trend ist ein Regimewechsel, den Trader Breakout nennen.',
          'Das neue Verhalten braucht mehr als einen andersfarbigen Bar.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-07',
    title: 'Die erste Umkehr wird meist nur eine Range',
    summary:
      'Wie Marktträgheit frühe Gegenversuche absorbiert, Flags größer werden und Trader Gewinne vor der sicheren Trendwende schützen.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 3 · Marktträgheit bei Umkehrversuchen',
    sourceAnchors: [
      'Mehrheit der Umkehrversuche führt zunächst in eine Range',
      'Frühe Gegenbewegungen als Flags im starken Trend',
      'Wachsende Pullbacks durch Gewinnmitnahmen und Gegenseite',
      'Späterer Breakout der Range als möglicher neuer Trend',
      'Teilgewinn an realistischen ersten Zielen',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-07-explain',
        type: 'explanation',
        eyebrow: 'Trägheit',
        title: 'Ein Trend gibt seine Kontrolle selten beim ersten Versuch ab',
        paragraphs: [
          'Die meisten bullischen oder bärischen Umkehrsignale starten keinen sauberen Gegentrend. Marktträgheit sorgt dafür, dass Teilnehmer der bisherigen Richtung einen ersten Rücklauf als günstigeren Einstieg behandeln. Der Gegenmove wird dadurch häufig gestoppt und die alte Richtung setzt sich noch einmal fort.',
          'In einem starken Bullenmarkt werden frühe bearische Reversals daher oft zu Bull Flags. Mit jeder Wiederholung kann die Flag größer werden. Bullen sichern zunehmend Gewinne oder kaufen weniger aggressiv nach; Bären sehen mehr Beweise, halten ihre Shorts länger und erhöhen ihren Druck.',
          'Irgendwann entsteht aus den wachsenden Pullbacks eine echte Trading Range. Erst wenn Verkäufer diese Balance überzeugend nach unten verlassen und die tieferen Preise halten, beginnt ein belastbarer Bärentrend. Vor diesem Erfolg können mehrere scheinbar gute Umkehrversuche gescheitert sein.',
          'Auch ein Gegenmove, der nur eine Range erzeugt, kann groß genug für einen profitablen Swing sein. Deshalb ist Gewinnmanagement wichtig: An einem ersten realistischen Ziel kann ein Teil der Position gesichert werden. Der Rest kann weiterlaufen, falls aus der Balance doch eine vollständige Trendwende entsteht.',
        ],
        callout:
          'Behandle das erste Reversal als möglichen Beginn eines Übergangs – nicht als Beweis für den fertigen Gegentrend.',
      },
      {
        id: 'chapter-03-07-diagram',
        type: 'diagram',
        title: 'Von kleinen Flags zur echten Balance',
        scenario: 'reversal-inertia',
        caption:
          'Mehrere frühe Gegenversuche werden vom Trend absorbiert. Erst wachsende Pullbacks bilden eine Range, aus der ein neuer Trend ausbrechen kann.',
        observations: [
          'Der erste Gegenmove wird von Trendkäufern aufgefangen.',
          'Spätere Flags werden tiefer und dauern länger.',
          'In der Range haben beide Seiten genug Stärke für mehrere Schwünge.',
          'Erst Ausbruch und Akzeptanz außerhalb der Range bestätigen die neue Richtung.',
        ],
      },
      {
        id: 'chapter-03-07-compare',
        type: 'comparison',
        title: 'Signal und bestätigter Gegentrend auseinanderhalten',
        columns: [
          {
            title: 'Früher Umkehrversuch',
            tone: 'neutral',
            points: [
              'bisher nur ein Gegenimpuls',
              'Trendteilnehmer kaufen oder verkaufen den Pullback',
              'Rückkehr zur alten Richtung bleibt wahrscheinlich',
            ],
          },
          {
            title: 'Bestätigter Wechsel',
            tone: 'positive',
            points: [
              'Balance ist sichtbar entstanden',
              'Ausbruch schafft Distanz',
              'Pullback hält auf der neuen Seite der Range',
            ],
          },
        ],
      },
      {
        id: 'chapter-03-07-question',
        type: 'question',
        title: 'Wie gehst du mit dem ersten Ziel um?',
        prompt:
          'Du handelst einen Gegenmove in einem reifen Bullenmarkt. Er erreicht ein realistisches erstes Ziel, hat aber noch keinen Bärentrend bestätigt. Welche Logik passt am besten?',
        options: [
          {
            id: 'all-or-nothing',
            label: 'Alles halten, bis ein riesiger Bärentrend entsteht',
            explanation:
              'Viele Umkehrmoves enden nur in einer Range. Ein Alles-oder-nichts-Plan ignoriert diese Basisrate.',
          },
          {
            id: 'partial',
            label: 'Teilgewinn sichern und Rest aktiv führen',
            explanation:
              'Richtig. So wird der häufige Range-Move bezahlt, während ein Rest an einer größeren Umkehr teilnehmen kann.',
          },
          {
            id: 'reverse-long',
            label: 'Automatisch sofort Long drehen',
            explanation:
              'Ein Ziel allein bestätigt weder das Ende des Gegenmoves noch einen neuen Long-Einstieg.',
          },
        ],
        correctOptionId: 'partial',
      },
      {
        id: 'chapter-03-07-recap',
        type: 'recap',
        title: 'Die Basisrate respektieren',
        points: [
          'Frühe Reversals werden in starken Trends häufig zu Flags.',
          'Wachsende Flags zeigen, dass die alte Kontrolle schrittweise nachlässt.',
          'Eine Range ist meist die Brücke zwischen zwei Trendregimen.',
          'Teilgewinn schützt den profitablen Swing, wenn nur Balance statt Gegentrend entsteht.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-08',
    title: 'Dieselbe Umkehr sieht auf jedem Zeitrahmen anders aus',
    summary:
      'Wie ein großer Reversal-Bar auf höheren Zeitebenen in Spike, Range und Breakout der kleineren Zeitebene zerfällt.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Kapitel 3 · Umkehr über mehrere Zeitebenen',
    sourceAnchors: [
      'Großer monatlicher Reversal-Bar',
      'Zwei-Bar-Umkehr auf dem Wochenchart',
      'Spike, mehrtägige Range und bearischer Breakout im Tageschart',
      'Musterfunktion unabhängig von der gewählten Zeitebene',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-08-explain',
        type: 'explanation',
        eyebrow: 'Fraktale Struktur',
        title: 'Ein Bar kann innen eine vollständige Geschichte enthalten',
        paragraphs: [
          'Ein großer bearischer Reversal-Bar auf dem Monatschart kann wie ein einzelnes, plötzliches Ereignis wirken. Wechselt man auf den Wochenchart, kann dieselbe Bewegung als Zwei-Bar-Umkehr erscheinen: erst ein kräftiger Anstieg, dann ein starker Gegenbar.',
          'Auf dem Tageschart wird die innere Struktur noch deutlicher. Der Aufwärtsabschnitt kann als bullischer Spike und Kaufklimax erscheinen. Danach folgen möglicherweise etwa zwei Handelswochen zweiseitiger Balance, bevor zwei starke Bärenbars aus dieser Range nach unten ausbrechen.',
          'Keine dieser Darstellungen ist richtiger als die andere. Der Monatschart verdichtet das Ergebnis, der Wochenchart zeigt die grobe Übergabe, und der Tageschart macht die Auktion sichtbar, in der Trend, Range und neuer Breakout nacheinander entstanden.',
          'Für die Analyse reicht jeder Zeitrahmen, auf dem du die Funktion erkennst. Kleinere Zeitebenen dürfen die Entscheidung erklären, sollen aber nicht zu einer endlosen Suche nach dem einzig perfekten Muster führen.',
        ],
        callout:
          'Zeitkompression verändert die Form, aber nicht die zugrunde liegende Abfolge von Überdehnung, Balance und neuem Kontrollgewinn.',
      },
      {
        id: 'chapter-03-08-diagram',
        type: 'diagram',
        title: 'Ein Reversal in drei Auflösungen',
        scenario: 'reversal-multiframe-map',
        caption:
          'Monat, Woche und Tag zeigen dieselbe Marktveränderung mit wachsender Detailtiefe.',
        observations: [
          'Der Monatsbar verdichtet alle inneren Schwünge zu einem Körper mit Tails.',
          'Die Wochenansicht trennt letzte Kaufkraft und starke Gegenkontrolle.',
          'Die Tagesansicht zeigt Spike, Kaufklimax, mehrtägige Range und Breakout.',
          'Das wiederkehrende Prinzip ist wichtiger als die exakte Anzahl der Bars.',
        ],
      },
      {
        id: 'chapter-03-08-question',
        type: 'question',
        title: 'Welche Aussage verbindet die Zeitebenen?',
        prompt:
          'Ein Monatschart zeigt einen bearischen Reversal-Bar, der Tageschart zuvor einen Kaufklimax, eine Range und einen Abwärtsbreakout. Wie hängen beide zusammen?',
        options: [
          {
            id: 'contradiction',
            label: 'Die Charts widersprechen sich',
            explanation:
              'Die größere Kerze ist die zeitliche Verdichtung der kleineren Sequenz.',
          },
          {
            id: 'same-process',
            label: 'Sie zeigen denselben Prozess in anderer Auflösung',
            explanation:
              'Richtig. Die Form ändert sich mit der Zeitebene, die Verhaltensabfolge bleibt erhalten.',
          },
          {
            id: 'daily-only',
            label: 'Nur der Tageschart ist analytisch gültig',
            explanation:
              'Jeder Zeitrahmen kann nützlich sein, sofern Struktur und Handelsplan zusammenpassen.',
          },
        ],
        correctOptionId: 'same-process',
      },
      {
        id: 'chapter-03-08-recap',
        type: 'recap',
        title: 'Form und Funktion trennen',
        points: [
          'Ein großer Reversal-Bar kann innen viele Tage Preisfindung enthalten.',
          'Höhere Zeitebenen verdichten, kleinere erklären den Übergang.',
          'Spike, Range und Gegenbreakout können gemeinsam einen einzigen Reversal-Bar bilden.',
          'Wähle den Zeitrahmen nach Plan und Lesbarkeit, nicht nach vermeintlicher Perfektion.',
        ],
      },
    ],
  },
] satisfies Lesson[];
