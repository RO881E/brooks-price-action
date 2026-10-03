import type { Lesson } from '../../types';

export const chapterTwoFoundationLessons = [
  {
    id: 'price-action-trends.chapter-02.lesson-01',
    title: 'Trendbar oder Ein-Bar-Range',
    summary:
      'Wie du jeden Bar zuerst entweder als gerichteten Kontrollgewinn oder als kurzfristige Balance einordnest.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Kapitel 2 · Trendbars, Dojis und Klimaxe',
    sourceAnchors: [
      'Trend oder Trading Range als grundlegende Marktzustände',
      'Überlappende Bars als Ausdruck zweiseitigen Handels',
      'Trendbar und Ein-Bar-Range als praktische Grundtypen',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-01-explain',
        type: 'explanation',
        eyebrow: 'Kapitel 2',
        title: 'Beginne mit Kontrolle, nicht mit Musternamen',
        paragraphs: [
          'Der Chart vor dir ist entweder in einer gerichteten Phase oder in irgendeiner Form von Trading Range. Sobald zwei oder mehr Bars stark überlappen, handeln Käufer und Verkäufer wiederholt im selben Preisgebiet. Ob diese Range später Flag, Dreieck oder Pennant heißt, ändert ihre Kernaussage nicht: Beide Seiten können handeln, ohne dass eine sich dauerhaft absetzt.',
          'Dieselbe Logik gilt auf der kleinsten sichtbaren Ebene. Ein einzelner Bar zeigt entweder einen erkennbaren Weg vom Open zum Close, oder er endet ungefähr dort, wo er angefangen hat. Im ersten Fall hat eine Seite in diesem Zeitfenster messbar Kontrolle gewonnen. Im zweiten ist der Bar eine sehr kurze Trading Range.',
          'Ein bullischer Körper heißt nur, dass der Schluss über der Eröffnung liegt; ein bärischer Körper das Gegenteil. Wie viel Kontrolle daraus folgt, hängt von der relativen Körpergröße, den Tails, der Position des Schlusses und dem Markt drumherum ab. Ein winziger Körper in einem großen Bar zeigt viel Bewegung, aber wenig bleibenden Fortschritt.',
          'Die erste Frage lautet daher nicht „Wie heißt diese Kerze?“, sondern: Hat eine Seite die Preise vom Open bis zum Close durchgesetzt – oder wurde die Bewegung wieder ausgeglichen?',
        ],
        callout:
          'Trendbar heißt: gerichteter Fortschritt im Bar. Doji heißt: vorübergehende Balance im Bar.',
      },
      {
        id: 'chapter-02-01-diagram',
        type: 'diagram',
        title: 'Kontrolle liegt auf einem Spektrum',
        scenario: 'bar-control-spectrum',
        caption:
          'Körpergröße, Schlussposition und Tails zeigen zunehmend weniger einseitige Kontrolle – bis aus dem Bar praktisch eine Ein-Bar-Range wird.',
        observations: [
          'Ein kräftiger Körper mit kleinem Gegentail zeigt deutlichen Fortschritt.',
          'Mit kleinerem Körper nimmt die Aussage über Kontrolle ab.',
          'Ein großer Gesamtrange kann trotz viel Bewegung nur einen winzigen Nettofortschritt besitzen.',
          'Die Einordnung ist relativ zu Instrument, Zeitrahmen und den Bars in der Umgebung.',
        ],
      },
      {
        id: 'chapter-02-01-question',
        type: 'question',
        title: 'Was ist die nützlichste erste Einordnung?',
        prompt:
          'Ein Bar besitzt einen langen oberen und unteren Tail, eröffnet und schließt aber fast am selben Preis. Was beschreibt ihn am besten?',
        options: [
          {
            id: 'strong-trend',
            label: 'Starker Trendbar wegen der großen Gesamthöhe',
            explanation:
              'Die große Handelsspanne zeigt Aktivität, aber der winzige Körper zeigt kaum dauerhaften Fortschritt einer Seite.',
          },
          {
            id: 'one-bar-range',
            label: 'Ein-Bar-Range mit zweiseitigem Handel',
            explanation:
              'Richtig. Beide Seiten bewegten den Preis, doch keine hielt bis zum Schluss die Kontrolle.',
          },
          {
            id: 'named-pattern',
            label: 'Nur der Kerzenname entscheidet',
            explanation:
              'Der Name erklärt weder Kontrolle noch Kontext und ist für die erste Entscheidung zweitrangig.',
          },
        ],
        correctOptionId: 'one-bar-range',
      },
      {
        id: 'chapter-02-01-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Mehrere stark überlappende Bars bilden funktional eine Trading Range.',
          'Ein einzelner Bar zeigt entweder gerichteten Fortschritt oder kurzfristige Balance.',
          'Der Körper misst den Weg vom Open zum Close; die Gesamthöhe allein misst keine Kontrolle.',
          'Beschreibe Kontrolle und Balance, bevor du Spezialnamen verwendest.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-02.lesson-02',
    title: 'Die kluge Gegenseite mitdenken',
    summary:
      'Warum selbst ein überzeugender Trendbar gleichzeitig Käufer, Verkäufer, Gewinnmitnehmer und Wartende anzieht.',
    durationMinutes: 14,
    xp: 45,
    sourceUnit: 'Kapitel 2 · Zwei Seiten jedes Trades',
    sourceAnchors: [
      'Mathematische Grundlage und konkurrierende rationale Sichtweisen',
      'Jeder ausgeführte Trade benötigt Käufer und Verkäufer',
      'Mehrere institutionelle Motive am Hoch und Tief eines Trendbars',
      'Beginn oder Ende einer Bewegung als zentrale Beurteilung',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-02-explain',
        type: 'explanation',
        eyebrow: 'Zweiseitige Auktion',
        title: 'Ein starker Bar überzeugt nie alle großen Teilnehmer',
        paragraphs: [
          'Jede Ausführung verbindet einen Käufer mit einem Verkäufer. In liquiden Märkten handeln auf beiden Seiten Profis mit getesteten Modellen. Bist du von einer Richtung überzeugt, gibt es deshalb sehr wahrscheinlich eine gut begründete Gegenposition. Das schützt dich vor der gefährlichen Annahme, ein auffälliger Bar könne nur eine Bedeutung haben.',
          'Nahe dem Hoch eines bullischen Trendbars kaufen manche Bullen die Stärke, weil sie noch höhere Preise erwarten. Andere Bullen warten auf einen Rücklauf zum Bartief. Gleichzeitig nehmen frühe Bullen dort Gewinne mit, während Bären die Bewegung für überdehnt halten und Shorts eröffnen. Weitere Bären warten erst auf einen Bruch unter das Tief als Schwächesignal.',
          'Am Ende eines starken bärischen Bars sieht es spiegelbildlich aus: Manche Bären verkaufen weiter, andere nehmen Gewinne mit; manche Bullen kaufen den scheinbar günstigen Preis, andere warten auf einen Bruch über das Barhoch. Der sichtbare Körper verrät, welche Seite in diesem Bar vorankam. Wer beim nächsten Bar recht behält, verrät er noch nicht sicher.',
          'Deshalb ist eine der wichtigsten Fähigkeiten, Anfang und Endphase zu unterscheiden. Derselbe große Trendbar kann einen neuen Impuls eröffnen oder die letzte Beschleunigung einer alten Bewegung sein.',
        ],
        callout:
          'Lies einen starken Bar in zwei Sätzen: Was spricht für die Fortsetzung – und wer könnte ihn als Ausstieg oder als Chance gegen den Trend nutzen?',
      },
      {
        id: 'chapter-02-02-diagram',
        type: 'diagram',
        title: 'Vier Motive rund um denselben bullischen Bar',
        scenario: 'two-sided-trend-bar',
        caption:
          'Die Preisbewegung ist eindeutig bullisch; die Absichten der großen Marktteilnehmer bleiben trotzdem verschieden.',
        observations: [
          'Momentum-Käufer akzeptieren das Hoch, weil sie Anschluss erwarten.',
          'Pullback-Käufer wollen dieselbe bullische These zu einem tieferen Preis handeln.',
          'Gewinnmitnehmer verkaufen Long-Positionen in die Stärke hinein.',
          'Konträre Bären verkaufen das Hoch oder warten auf den Bruch des Tiefs.',
        ],
      },
      {
        id: 'chapter-02-02-compare',
        type: 'comparison',
        title: 'Sichtbarer Bar, unsichtbare Entscheidung',
        columns: [
          {
            title: 'Fortsetzungsthese',
            tone: 'positive',
            points: [
              'Bar eröffnet nahe dem Tief und schließt nahe dem Hoch',
              'frühe Trendphase oder Ausbruch aus Balance',
              'nächste Bars bestätigen höhere Preise',
            ],
          },
          {
            title: 'Endphasenthese',
            tone: 'warning',
            points: [
              'ungewöhnliche Größe nach langem Lauf',
              'Widerstand oder anderes klares Ziel erreicht',
              'Pause, Gegenbar oder fehlender Anschluss folgt',
            ],
          },
        ],
      },
      {
        id: 'chapter-02-02-question',
        type: 'question',
        title: 'Was weißt du nach dem Schluss sicher?',
        prompt:
          'Ein großer bullischer Bar schließt an seinem Hoch. Welche Aussage ist ohne weitere Bars belastbar?',
        options: [
          {
            id: 'control-only',
            label: 'Die Käufer kontrollierten diesen Bar',
            explanation:
              'Richtig. Der Bar zeigt bullischen Fortschritt; Fortsetzung oder Erschöpfung muss der Kontext klären.',
          },
          {
            id: 'certain-rally',
            label: 'Die Rally wird sicher weitergehen',
            explanation:
              'Auch ein starker Schluss kann die Endbeschleunigung eines Trends sein.',
          },
          {
            id: 'no-sellers',
            label: 'Es gab am Hoch keine Verkäufer',
            explanation:
              'Jeder Kauf wurde von einer Verkaufsseite ausgeführt; Motive und Aggressivität unterscheiden sich.',
          },
        ],
        correctOptionId: 'control-only',
      },
      {
        id: 'chapter-02-02-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Jede Ausführung hat zwei rationale Seiten.',
          'Trendfolger, Pullback-Trader, Gewinnmitnehmer und Gegenhändler können gleichzeitig aktiv sein.',
          'Ein Trendbar beschreibt die Kontrolle im abgeschlossenen Zeitfenster, nicht die sichere Zukunft.',
          'Die Kernfrage lautet: Beginnt hier ein Move oder beschleunigt er zum Ende?',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-02.lesson-03',
    title: 'Ein Doji ist relativ, nicht perfekt',
    summary:
      'Warum ein kleiner Körper je nach Instrument und Zeitrahmen mehr zählt als die mathematisch identische Eröffnung und der Schluss.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Kapitel 2 · Relative Definition des Dojis',
    sourceAnchors: [
      'Non-Trend-Bar als praktische Doji-Kategorie',
      'Relative Körpergröße nach Markt und Zeitrahmen',
      'Funktionale Ähnlichkeit statt perfekter Musterform',
      'Begrenzter Nutzen spezieller Candlestick-Namen',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-03-explain',
        type: 'explanation',
        eyebrow: 'Relative Einordnung',
        title: 'Nahe genug kann dieselbe Information tragen',
        paragraphs: [
          'In der praktischen Analyse fasst man Bars mit winzigem oder unsichtbarem Körper als Dojis zusammen. Entscheidend ist nicht, ob Open und Close exakt gleich sind. Entscheidend ist, dass der Körper im Verhältnis zum ganzen Bar und seiner Umgebung so klein ist, dass weder Bullen noch Bären einen klaren Vorteil beim Schluss haben.',
          'Auf einem liquiden Fünf-Minuten-Future kann schon ein Körper von ein oder zwei Ticks die Grenze zwischen Doji und kleinem Trendbar sein. Auf einem Wochen- oder Monatschart einer teuren Aktie kann der Schluss deutlich vom Open abweichen, und der Körper wirkt im Verhältnis zum Kursmaßstab trotzdem wie ein Doji.',
          'Die Einordnung bleibt deshalb bewusst unscharf. Ein Bar kann in einer ruhigen Passage als kleiner Trendbar gelten und zwischen größeren Nachbarbars als Doji. Du suchst keine geometrische Perfektion, sondern eine schnelle Antwort auf die Frage: Kontrolle oder Patt?',
          'Spezialnamen wie Hammer, Hanging Man oder Harami ändern an dieser Grundfrage nichts. Richtung, Stärke und Kontext liefern meist mehr nutzbare Information als ein immer feineres Vokabular für Kerzenformen.',
        ],
        callout:
          'Beurteile den Körper im Verhältnis zum Bar, zu den Nachbarbars, zum Instrument und zum Zeitrahmen.',
      },
      {
        id: 'chapter-02-03-diagram',
        type: 'diagram',
        title: 'Derselbe Gedanke auf zwei Maßstäben',
        scenario: 'relative-doji',
        caption:
          'Der absolute Preisunterschied kann verschieden sein. Die relative Balancewirkung bleibt vergleichbar.',
        observations: [
          'Im kleinen Zeitrahmen kann ein Ein-Tick-Körper bereits fast neutral sein.',
          'Im großen Zeitrahmen kann ein absolut größerer Körper optisch und funktional klein bleiben.',
          'Perfektes Gleichsein von Open und Close ist keine Voraussetzung.',
          'Nachfolgende Preisbewegung reagiert auf die Balancefunktion, nicht auf das Etikett.',
        ],
      },
      {
        id: 'chapter-02-03-question',
        type: 'question',
        title: 'Welcher Vergleich entscheidet?',
        prompt:
          'Eine Monatskerze schließt 0,50 Euro über ihrer Eröffnung, besitzt aber einen sehr kleinen Körper gegenüber ihrer Gesamthöhe und den Nachbarbars. Wie gehst du vor?',
        options: [
          {
            id: 'reject',
            label: 'Doji ausschließen, weil Open und Close verschieden sind',
            explanation:
              'Eine starre Null-Differenz ignoriert den Preis- und Zeitmaßstab.',
          },
          {
            id: 'relative',
            label: 'Als funktionalen Doji im Kontext prüfen',
            explanation:
              'Richtig. Der kleine relative Körper kann dieselbe Balanceinformation tragen.',
          },
          {
            id: 'bull',
            label: 'Als starken Trendbar behandeln',
            explanation:
              'Ein positiver Schluss allein macht aus einem relativ winzigen Körper keinen starken Trendbar.',
          },
        ],
        correctOptionId: 'relative',
      },
      {
        id: 'chapter-02-03-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein Doji ist praktisch ein Bar ohne klare Schlusskontrolle.',
          'Absolute Tick- oder Geldbeträge lassen sich nicht blind zwischen Märkten vergleichen.',
          'Ähnliche Proportionen können ähnliche Funktionen besitzen, auch ohne perfekte Form.',
          'Kontrolle, Stärke und Kontext sind wichtiger als Kerzen-Untertypen.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-02.lesson-04',
    title: 'Ein Trendbar spielt vier Rollen',
    summary:
      'Wie derselbe gerichtete Bar gleichzeitig Spike, Breakout, funktionale Lücke und Teil eines Klimax sein kann.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Kapitel 2 · Funktionen eines Trendbars',
    sourceAnchors: [
      'Körpergröße als relatives Stärkezeichen',
      'Trendbar als Spike und Breakout',
      'Trendbar als funktionale Kurslücke',
      'Trendbar als Bestandteil von Vakuum und Klimax',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-04-explain',
        type: 'explanation',
        eyebrow: 'Mehrfachfunktion',
        title: 'Vier Begriffe beschreiben vier Blickwinkel desselben Ereignisses',
        paragraphs: [
          'Ein Körper zeigt, dass der Schluss vom Open weggetrieben wurde. Größere Körper stehen im Allgemeinen für mehr Stärke. Linear ist das aber nicht: Ein außergewöhnlich großer Bar nach einer langen Bewegung kann Erschöpfung statt frischer Kraft zeigen. Mehrere kräftige Bars hintereinander sind dagegen meist ein gesünderes Zeichen und erhöhen die Chance auf mindestens ein weiteres Extrem.',
          'Jeden Trendbar kannst du gleichzeitig aus vier Blickwinkeln sehen. Als Spike erzeugt er schnell Distanz. Als Breakout versucht er, den bisherigen Preisbereich zu verlassen. Als funktionale Lücke überspringt er Preise so entschieden, dass Teilnehmer später oft zu diesem Bereich zurückkehren oder ihn verteidigen. Als Klimax ist er Teil einer Bewegung, die kurzfristig weit und schnell gelaufen ist.',
          'Keine dieser Rollen hat automatisch Vorrang. Ein früher großer Bar aus einer engen Range ist vor allem ein Breakout-Spike. Ein sehr großer Bar nach dreißig Trendbars an Unterstützung wirkt eher als Vakuum und Erschöpfungsklimax. Der Kontext entscheidet, welche Funktion für die nächste Entscheidung zählt.',
          'Schließ deshalb nicht allein aus dem Aussehen. Benenne zuerst Position, Vorgeschichte und Anschluss und wähle dann die Rolle, die das aktuelle Verhalten am besten erklärt.',
        ],
        callout:
          'Ein Bar ändert sein Aussehen nicht – aber seine wichtigste Funktion ändert sich mit dem Kontext.',
      },
      {
        id: 'chapter-02-04-diagram',
        type: 'diagram',
        title: 'Vier Rollen in einem einzigen Trendbar',
        scenario: 'trend-bar-four-roles',
        caption:
          'Die vier Begriffe konkurrieren nicht. Sie beantworten unterschiedliche Fragen zu Tempo, Grenze, übersprungenem Bereich und Reife der Bewegung.',
        observations: [
          'Spike fragt: Wie schnell entstand die Distanz?',
          'Breakout fragt: Welcher bisherige Bereich wurde verlassen?',
          'Funktionale Lücke fragt: Welches Preisgebiet wurde nicht ausgewogen gehandelt?',
          'Klimax fragt: Ist die Bewegung kurzfristig zu weit und zu schnell geworden?',
        ],
      },
      {
        id: 'chapter-02-04-question',
        type: 'question',
        title: 'Welche Rolle dominiert?',
        prompt:
          'Nach einer langen Abwärtsbewegung entsteht direkt an Unterstützung der größte bearische Bar des Tages. Was ist die verantwortungsvolle Schlussfolgerung?',
        options: [
          {
            id: 'automatic-short',
            label: 'Die Größe beweist sofortige Fortsetzung',
            explanation:
              'Späte außergewöhnliche Größe kann gerade eine Erschöpfungs- oder Vakuumphase markieren.',
          },
          {
            id: 'context-wait',
            label: 'Klimax/Vakuum prüfen und Anschluss abwarten',
            explanation:
              'Richtig. Lage und Vorgeschichte machen die Endphasenthese relevant; die Folgebars entscheiden weiter.',
          },
          {
            id: 'ignore',
            label: 'Große Bars enthalten keine Information',
            explanation:
              'Sie enthalten viel Information, nur nicht immer die naive Fortsetzungsaussage.',
          },
        ],
        correctOptionId: 'context-wait',
      },
      {
        id: 'chapter-02-04-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Größere Körper bedeuten meist mehr Kraft, extreme späte Größe kann jedoch warnen.',
          'Jeder Trendbar ist zugleich Spike, Breakout, funktionale Lücke und Teil eines Klimax.',
          'Mehrere starke gleichgerichtete Bars erhöhen die Chance auf weitere Extreme.',
          'Vorgeschichte, Ort und Follow-through bestimmen die dominante Rolle.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-02.lesson-05',
    title: 'Vakuum oder echte Initiative?',
    summary:
      'Wie eine schnelle Bewegung entstehen kann, weil die Gegenseite ausweicht – und woran du mit Follow-through den Unterschied siehst.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 2 · Vakuumeffekt und Kontext',
    sourceAnchors: [
      'Ausbleibende Gegenseite als Ursache schneller Preisbewegung',
      'Reversal nach einem Spike im Gegensatz zu Anschlusskäufen',
      'Unterstützung und Widerstand als Wartesonen starker Teilnehmer',
      'Bear-Spike im Bullenmarkt als mögliche vorübergehende Fehlbewertung',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-05-explain',
        type: 'explanation',
        eyebrow: 'Liquiditätsvakuum',
        title: 'Manchmal bewegt fehlender Widerstand den Markt stärker als neue Überzeugung',
        paragraphs: [
          'Ein schneller bullischer Spike heißt nicht, dass plötzlich unbegrenzt viele Käufer aufgetaucht sind. Er kann auch entstehen, weil starke Bären vorübergehend nicht verkaufen und Bullen ihre Gewinnmitnahmen bis zu einem erwarteten Widerstand aufschieben. Verkaufen dort beide Gruppen, dreht der Spike scharf zurück. Die scheinbare Stärke war dann vor allem durch ein Angebotsvakuum möglich.',
          'Bekommt der Spike dagegen weitere bullische Bars, ist die Deutung anders. Starke Bullen kaufen weiter, und selbst starke Bären erwarten noch höhere Preise, bevor sie aggressiv verkaufen. Anschluss zeigt, dass der neue Bereich nicht nur kurz berührt, sondern zumindest vorläufig akzeptiert wird.',
          'Dasselbe Prinzip wirkt abwärts. An einer bekannten Unterstützung können Käufer und Gewinnmitnehmer warten, bis ein besonders kräftiger bärischer Bar erscheint. Ihre Zurückhaltung beschleunigt den Preis vorher. Ist der erwartete günstige Bereich erreicht, decken Bären ihre Shorts ein und Bullen eröffnen Longs. So kann gerade der stärkste bärische Bar die Umkehr vorbereiten.',
          'Langfristig orientierte Teilnehmer kaufen starke Abverkaufs-Spikes in intakten Bullenmärkten manchmal als Gelegenheit. Sie versuchen dabei nicht, das exakte Tief zu treffen. Ihre These: Der Abschlag bleibt im größeren Kontext wahrscheinlich nicht dauerhaft.',
        ],
        callout:
          'Schnelligkeit kann aus aggressiven Orders entstehen – oder daraus, dass die Gegenseite bis zu einem Ziel einfach fehlt.',
      },
      {
        id: 'chapter-02-05-diagram',
        type: 'diagram',
        title: 'Gleicher Spike, zwei völlig verschiedene Folgen',
        scenario: 'vacuum-vs-follow-through',
        caption:
          'Erst die Reaktion am Zielbereich zeigt, ob der Spike vor allem durch ein Vakuum oder durch anhaltende Initiative getragen wurde.',
        observations: [
          'Beim Vakuum warten Verkäufer bis zum Widerstand und treten dann gemeinsam auf.',
          'Ohne Anschluss fällt der Preis schnell in den alten Bereich zurück.',
          'Bei echter Initiative werden Rückläufe klein und weitere Hochs akzeptiert.',
          'Der erste Spike allein kann die beiden Pfade noch nicht unterscheiden.',
        ],
      },
      {
        id: 'chapter-02-05-compare',
        type: 'comparison',
        title: 'Woran du die Pfade auseinanderhältst',
        columns: [
          {
            title: 'Vakuum & Umkehr',
            tone: 'warning',
            points: [
              'Spike trifft auf offensichtliches Ziel',
              'Pause oder kräftiger Gegenbar folgt',
              'Ausbruchspreise werden nicht gehalten',
            ],
          },
          {
            title: 'Initiative & Fortsetzung',
            tone: 'positive',
            points: [
              'weitere gleichgerichtete Trendbars',
              'kleine Pullbacks und gute Schlusskurse',
              'neuer Preisbereich wird verteidigt',
            ],
          },
        ],
      },
      {
        id: 'chapter-02-05-question',
        type: 'question',
        title: 'Welche Information fehlt noch?',
        prompt:
          'Ein bullischer Spike erreicht einen alten Widerstand. Was brauchst du, bevor du ihn als Beginn eines starken Trends einordnest?',
        options: [
          {
            id: 'follow-through',
            label: 'Anschluss und Akzeptanz oberhalb des Bereichs',
            explanation:
              'Richtig. Ohne Anschluss kann der Spike lediglich das Ende eines Angebotsvakuums markieren.',
          },
          {
            id: 'size',
            label: 'Nur einen noch größeren ersten Bar',
            explanation:
              'Zusätzliche Größe im selben Bar trennt Initiative und Erschöpfung nicht zuverlässig.',
          },
          {
            id: 'label',
            label: 'Einen speziellen Candlestick-Namen',
            explanation:
              'Die Folgebewegung liefert mehr Information als ein Formetikett.',
          },
        ],
        correctOptionId: 'follow-through',
      },
      {
        id: 'chapter-02-05-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein Spike kann durch fehlende Gegenseite beschleunigt werden.',
          'Eine scharfe Umkehr am Zielbereich stützt die Vakuumthese.',
          'Gleichgerichteter Anschluss stützt echte Initiative und Akzeptanz.',
          'Der Kontext vor und nach dem Spike ist wichtiger als seine isolierte Größe.',
        ],
      },
    ],
  },
] satisfies Lesson[];
