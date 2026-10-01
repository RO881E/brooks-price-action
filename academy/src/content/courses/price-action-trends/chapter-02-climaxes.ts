import type { Lesson } from '../../types';

export const chapterTwoClimaxLessons = [
  {
    id: 'price-action-trends.chapter-02.lesson-06',
    title: 'Follow-through entscheidet den Spike',
    summary:
      'Warum ein scharfer Gegenbar im Trend erst durch den nächsten Bar zur Umkehr oder zur neuen Einstiegschance wird.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 2 · Gegen-Spikes und Folgebewegung',
    sourceAnchors: [
      'Kräftiger Gegen-Spike innerhalb eines bestehenden Trends',
      'Nächster Bar als Entscheidung über Richtungswechsel oder Fehlschlag',
      'Häufiges Scheitern früher Umkehrversuche',
      'Short-Eindeckungen und neue Longs am Sell Climax',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-06-explain',
        type: 'explanation',
        eyebrow: 'Entscheidungsbar',
        title: 'Der Gegen-Spike stellt eine Frage – der Anschluss beantwortet sie',
        paragraphs: [
          'Starke Pullbacks sehen oft wie beginnende Umkehrtrends aus. In einem Bullenmarkt können ein oder zwei große bearische Bars unter den gleitenden Durchschnitt und sogar unter eine kleine Range fallen. Dadurch wird ein Wechsel der Always-in-Richtung möglich, aber noch nicht bestätigt.',
          'Alle beobachten nun die Folgebewegung. Ein weiterer großer bearischer Trendbar zeigt, dass Verkäufer nach dem ersten Schock weiter Druck ausüben; dann gewinnt die Umkehrthese deutlich an Gewicht. Schließt der nächste Bar hingegen bullisch, fehlt der entscheidende Anschluss. Der Abverkauf wird eher zu einer kurzen Preisreduktion innerhalb des Bullenmarkts.',
          'Anfänger reagieren häufig nur auf die Größe des Gegen-Spikes und verkaufen spät. Erfahrene Bullen prüfen zuerst den dominanten Trend und kaufen, wenn die Verkäufer keinen Anschluss erreichen. Gleichzeitig decken erfahrene Bären ihre Shorts. Beide Kaufmotive können den fehlgeschlagenen Umkehrversuch zurück in Trendrichtung beschleunigen.',
          'Die große Mehrheit früher Umkehrversuche endet als Fehlschlag. Die genaue Quote ist keine Naturkonstante für jeden Markt; die praktische Lehre lautet: Gegen einen starken Trend braucht eine Umkehr mehr als zwei überzeugende Bars. Ohne Fortsetzung wird sie häufig zur Flag für den alten Trend.',
        ],
        callout:
          'Handle nicht die Schockwirkung des ersten Gegenbars. Prüfe, ob die Gegenseite im nächsten Bar weiter Strecke schafft.',
      },
      {
        id: 'chapter-02-06-diagram',
        type: 'diagram',
        title: 'Ein Gegen-Spike, zwei Wege',
        scenario: 'follow-through-decision',
        caption:
          'Der erste bearische Spike ist in beiden Feldern identisch. Erst die Folgebars trennen bestätigten Richtungswechsel und gescheiterte Umkehr.',
        observations: [
          'Ein zweiter starker bearischer Bar bestätigt zunehmende Verkäuferkontrolle.',
          'Ein bullischer Folgeschluss zeigt, dass tiefere Preise keine Akzeptanz finden.',
          'Beim Fehlschlag kaufen sowohl Short-Gewinnmitnehmer als auch neue Bullen.',
          'Der übergeordnete Trend bleibt die Ausgangshypothese, bis Gegenbeweise reichen.',
        ],
      },
      {
        id: 'chapter-02-06-question',
        type: 'question',
        title: 'Wann kippt die Always-in-Richtung?',
        prompt:
          'Ein starker Bullenmarkt fällt mit zwei großen bearischen Bars unter den Durchschnitt. Der nächste Bar schließt kräftig bullisch. Welche Einordnung ist zunächst sinnvoller?',
        options: [
          {
            id: 'failed-reversal',
            label: 'Gescheiterter Umkehrversuch und mögliche Kaufchance',
            explanation:
              'Richtig. Der bullische Anschluss fehlt den Verkäufern und stützt die Fortsetzungsthese.',
          },
          {
            id: 'confirmed-bear',
            label: 'Bestätigter Bärenmarkt allein wegen der ersten zwei Bars',
            explanation:
              'Der bullische Folgeschluss ist ein wichtiger Gegenbeweis zur bestätigten Umkehr.',
          },
          {
            id: 'ignore-context',
            label: 'Der frühere Trend spielt keine Rolle mehr',
            explanation:
              'Gerade die Stärke des bestehenden Trends bestimmt, wie viel Beweis eine Umkehr braucht.',
          },
        ],
        correctOptionId: 'failed-reversal',
      },
      {
        id: 'chapter-02-06-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Kräftige Pullbacks können wie vollständige Umkehrtrends aussehen.',
          'Der nächste Bar zeigt, ob die neue Seite weiter Druck erzeugt.',
          'Fehlender Anschluss macht Gegen-Spikes häufig zu Flags im alten Trend.',
          'Short-Eindeckungen und neue Longs verstärken einen gescheiterten bärischen Versuch.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-02.lesson-07',
    title: 'Kämpfe nicht gegen Computer-Geschwindigkeit',
    summary:
      'Warum ein perfektes Muster im Tickchart für Menschen trotzdem unhandelbar sein kann und der Arbeitszeitrahmen Teil des Risikomanagements ist.',
    durationMinutes: 11,
    xp: 40,
    sourceUnit: 'Kapitel 2 · Zeitrahmen und Verarbeitungsgeschwindigkeit',
    sourceAnchors: [
      'Verdeckte Umkehrstruktur innerhalb eines großen Trendbars',
      'Algorithmen als Ursprung sehr schneller Mikrostrukturen',
      'Geschwindigkeitsnachteil manueller Trader',
      'Ausreichend langsamer Arbeitszeitrahmen für belastbare Entscheidungen',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-07-explain',
        type: 'explanation',
        eyebrow: 'Zeitrahmendisziplin',
        title: 'Mehr Detail ist nicht automatisch mehr nutzbare Information',
        paragraphs: [
          'Ein großer bearischer Bar kann am Tief schließen und kurz danach trotzdem stark nach oben drehen. Auf einem viel kleineren Chart findest du rückblickend häufig eine klassische Mikro-Umkehr: mehrere Schübe, ein Doppeltief oder einen fehlgeschlagenen Ausbruch. Das erklärt die größere Kerze, macht die Mikrostruktur aber nicht automatisch handelbar.',
          'Wenn Dutzende Bars in einer Minute entstehen, muss ein Mensch Muster erkennen, Risiko berechnen, eine Order platzieren und auf Änderungen reagieren, während Algorithmen all das in Bruchteilen einer Sekunde tun. Die sichtbare Schönheit des Musters im Nachhinein verdeckt, dass die Entscheidung live zu schnell war.',
          'Ein sinnvoller Arbeitszeitrahmen gibt dir genug Zeit, den Kontext zu verarbeiten. Der Fünf-Minuten-Chart ist ein Beispiel: nicht weil fünf Minuten magisch sind, sondern weil ein manueller Trader dort häufig den abgeschlossenen Bar, die Folgebewegung und ein vernünftiges Risiko beurteilen kann.',
          'Du verzichtest dadurch bewusst auf den frühesten Preis. Im Gegenzug handelst du Information, die du tatsächlich wahrnehmen und zuverlässig ausführen kannst. Dieser Tausch ist ein Vorteil, kein Mangel.',
        ],
        callout:
          'Wähle einen Zeitrahmen, in dem dein Entscheidungsprozess schneller ist als die nächste relevante Strukturänderung.',
      },
      {
        id: 'chapter-02-07-diagram',
        type: 'diagram',
        title: 'Ein Bar oben, eine Datenlawine unten',
        scenario: 'human-vs-tick-speed',
        caption:
          'Die kleinere Auflösung erklärt den Bar, überfordert aber die rechtzeitige manuelle Verarbeitung.',
        observations: [
          'Der Fünf-Minuten-Bar fasst die vollständige Auktion in einer handhabbaren Einheit zusammen.',
          'Im Tickchart entstehen in derselben Zeit viele Mikroentscheidungen.',
          'Algorithmen besitzen dort einen strukturellen Geschwindigkeitsvorteil.',
          'Der spätere Entry auf dem langsameren Chart kann weniger präzise, aber reproduzierbarer sein.',
        ],
      },
      {
        id: 'chapter-02-07-question',
        type: 'question',
        title: 'Welcher Chart ist für dich besser?',
        prompt:
          'Ein Tickchart zeigt rückblickend ein sauberes Doppeltief, produziert live jedoch dreißig Bars pro Minute. Was ist die bessere Konsequenz?',
        options: [
          {
            id: 'slower-frame',
            label: 'Auf einen verarbeitbaren Zeitrahmen wechseln',
            explanation:
              'Richtig. Ein handelbares Verfahren braucht genug Zeit für Analyse, Order und Risikokontrolle.',
          },
          {
            id: 'react-faster',
            label: 'Einfach schneller klicken lernen',
            explanation:
              'Manuelle Reaktionszeit kann den technischen Latenzvorteil automatisierter Systeme nicht zuverlässig einholen.',
          },
          {
            id: 'perfect-pattern',
            label: 'Jedes perfekte Rückblickmuster handeln',
            explanation:
              'Rückblickklarheit sagt nichts darüber aus, ob das Signal live rechtzeitig verarbeitbar war.',
          },
        ],
        correctOptionId: 'slower-frame',
      },
      {
        id: 'chapter-02-07-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Kleinere Zeitrahmen erklären oft, was innerhalb eines großen Bars geschah.',
          'Erklärung und live handelbarer Vorteil sind nicht dasselbe.',
          'Bei geschwindigkeitskritischen Strukturen haben Computer den klaren Vorteil.',
          'Ein verarbeitbarer Zeitrahmen macht Analyse und Ausführung reproduzierbar.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-02.lesson-08',
    title: 'Klimax ist noch keine Umkehr',
    summary:
      'Wie eine schnelle Bewegung mit der ersten Pause endet und warum für eine echte Trendwende noch ein Gegen-Breakout fehlt.',
    durationMinutes: 15,
    xp: 50,
    sourceUnit: 'Kapitel 2 · Klimax und klimaktische Umkehr',
    sourceAnchors: [
      'Trendbar als Bestandteil eines Klimax',
      'Erste Pause als Ende der schnellen einseitigen Phase',
      'Klimax als Übergang zu zweiseitigem Handel',
      'Gegen-Breakout als notwendiger Teil der klimaktischen Umkehr',
      'Äquivalente Darstellung auf kleineren und größeren Zeitebenen',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-08-explain',
        type: 'explanation',
        eyebrow: 'Begriffe trennen',
        title: 'Zu weit und zu schnell bedeutet Pause – nicht automatisch Richtungswechsel',
        paragraphs: [
          'Ein Klimax ist eine schnelle einseitige Bewegung. Jeder Trendbar ist selbst ein kleiner Klimax oder Teil einer Folge von Trendbars. Diese Phase endet mit der ersten klaren Pause: einem Doji, Inside-Bar, Gegenbar oder einem Bar mit auffälligem Tail. Ab diesem Moment ist der Markt wieder stärker zweiseitig.',
          'Nach drei kräftigen bullischen Bars kann die Pause bedeuten, dass frühe Bullen Gewinne nehmen, spätere Bullen nicht mehr jeden Preis akzeptieren und erste Bären Shorts testen. Das reicht für ein vorläufiges Gleichgewicht. Es beweist jedoch nicht, dass die Bären nun einen Abwärtstrend erzeugen.',
          'Eine klimaktische Top-Umkehr benötigt zwei Bausteine: zuerst den bullischen Klimax, danach einen überzeugenden bearischen Breakout. Beide müssen nicht direkt nebeneinanderliegen; eine Seitwärtsphase kann sie trennen. Ohne den bearischen Ausbruch bleibt der Klimax lediglich eine überdehnte Trendphase, nach der der alte Trend erneut beginnen kann.',
          'Auf einer kleineren Zeitebene findest du oft Spike und Gegenspike deutlicher, auf einer größeren erscheinen beide zusammen als einzelner Reversal-Bar. Du musst nicht jeden Zeitrahmen durchsuchen. Wenn du auf deinem Arbeitschart Pause, zweiseitigen Handel und späteren Gegen-Breakout erkennst, besitzt du die nötige Information.',
        ],
        callout:
          'Klimax + Pause = Balance. Klimax + Gegen-Breakout = mögliche klimaktische Umkehr.',
      },
      {
        id: 'chapter-02-08-diagram',
        type: 'diagram',
        title: 'Pause und Umkehr sind zwei verschiedene Stufen',
        scenario: 'climax-vs-reversal',
        caption:
          'Die erste Pause beendet den Klimax. Erst der starke Gegen-Breakout verwandelt die Struktur in eine belastbare Umkehrthese.',
        observations: [
          'Mehrere Trendbars erzeugen die schnelle Klimaxphase.',
          'Der Pause-Bar beendet die Einseitigkeit und startet zweiseitigen Handel.',
          'Eine Fortsetzung nach der Pause bleibt jederzeit möglich.',
          'Der Gegen-Breakout ist der zusätzliche Beweis für eine Richtungsänderung.',
        ],
      },
      {
        id: 'chapter-02-08-compare',
        type: 'comparison',
        title: 'Drei Zustände sauber auseinanderhalten',
        columns: [
          {
            title: 'Klimax',
            tone: 'neutral',
            points: [
              'schneller gerichteter Schub',
              'eine Seite erzeugt ungewöhnlich viel Strecke',
              'noch keine Aussage über die spätere Richtung',
            ],
          },
          {
            title: 'Pause',
            tone: 'warning',
            points: [
              'Tempo bricht sichtbar ab',
              'Gewinnmitnahmen und Gegenorders treten auf',
              'Fortsetzung und Umkehr bleiben offen',
            ],
          },
          {
            title: 'Klimaktische Umkehr',
            tone: 'positive',
            points: [
              'Klimax in alter Richtung',
              'starker Breakout in Gegenrichtung',
              'Folgebars müssen den Wechsel weiter bestätigen',
            ],
          },
        ],
      },
      {
        id: 'chapter-02-08-question',
        type: 'question',
        title: 'Was fehlt am möglichen Top?',
        prompt:
          'Drei große bullische Bars werden von einem Doji gestoppt. Was kannst du daraus noch nicht ableiten?',
        options: [
          {
            id: 'two-sided',
            label: 'Die Bewegung ist kurzfristig zweiseitiger geworden',
            explanation:
              'Das zeigt die Pause tatsächlich: Käufer besitzen nicht mehr dieselbe ununterbrochene Kontrolle.',
          },
          {
            id: 'confirmed-reversal',
            label: 'Ein bestätigter Bärentrend hat begonnen',
            explanation:
              'Richtig. Dafür fehlt der bearische Breakout und dessen Anschluss.',
          },
          {
            id: 'climax-ended',
            label: 'Die unmittelbare Klimaxphase ist beendet',
            explanation:
              'Die erste Pause beendet die schnelle Folge, auch wenn der Trend später fortgesetzt wird.',
          },
        ],
        correctOptionId: 'confirmed-reversal',
      },
      {
        id: 'chapter-02-08-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein Klimax beschreibt Tempo und Ausdehnung, keine garantierte Umkehr.',
          'Die erste Pause beendet die einseitige Klimaxphase.',
          'Eine echte Umkehr braucht zusätzlich einen Breakout der Gegenseite.',
          'Dieselbe Struktur kann je nach Zeitebene als zwei Spikes oder ein Reversal-Bar erscheinen.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-02.lesson-09',
    title: 'Der ideale Trendbar – und wann Größe warnt',
    summary:
      'Welche Merkmale echte Kontrolle zeigen und warum ein moderater Bar oft gesünder ist als die größte Kerze im Chart.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Kapitel 2 · Qualität eines Trendbars',
    sourceAnchors: [
      'Moderater Körper relativ zu den letzten Bars',
      'Open und Close nahe den gegenüberliegenden Barenden',
      'Break über frühere Hochs oder Tiefs mit kleinen Tails',
      'Extrem große Bars als mögliche Erschöpfung oder Falle',
      'Jeder Trendbar als Ausbruchsversuch',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-09-explain',
        type: 'explanation',
        eyebrow: 'Barqualität',
        title: 'Gesunde Kontrolle ist mehr als maximale Größe',
        paragraphs: [
          'Ein hochwertiger bullischer Trendbar besitzt einen klaren, aber nicht zwingend extremen Körper. Als brauchbare Vergleichsbasis dient die typische Körpergröße der letzten fünf bis zehn Bars. Liegt sein Körper etwa auf oder über diesem Niveau, zeigt er relevanten Fortschritt, ohne allein durch Ausnahmedimension verdächtig zu werden.',
          'Zusätzliche Stärkezeichen sind ein Open nahe dem Tief, ein Schluss nahe dem Hoch, kleine Tails sowie ein Hoch und Schluss oberhalb mehrerer vorheriger Bars. Die spiegelbildlichen Merkmale gelten für einen bearischen Trendbar. Gemeinsam zeigen sie, dass die kontrollierende Seite Rückläufe begrenzte und den Bar bis zum Ende dominierte.',
          'Wird der Bar in einem bereits langen Trend ungewöhnlich groß, kann er spät eintretende Trader fangen. Ein scheinbar perfekter bullischer Bar kann dann innerhalb der nächsten ein oder zwei Bars vollständig zurückgenommen werden. Position im Trend und Folgeverhalten bleiben deshalb Teil der Qualitätsprüfung.',
          'Jeder Trendbar versucht einen Ausbruch. Die meisten Ausbruchsversuche entwickeln keinen neuen Trend. Ein erfolgreicher Trend kann mit einem nur leicht überdurchschnittlichen Körper beginnen; mehrere gleichgerichtete Trendbars mit Anschluss sind meist aussagekräftiger als eine einzelne spektakuläre Kerze.',
        ],
        callout:
          'Suche kontrollierten Fortschritt und Anschluss – nicht den größten Bar des Bildschirms.',
      },
      {
        id: 'chapter-02-09-diagram',
        type: 'diagram',
        title: 'Gesunder Trendbar und späte Übertreibung',
        scenario: 'ideal-trend-bar',
        caption:
          'Der moderate Bar bündelt mehrere Stärkezeichen. Der riesige späte Bar besitzt zwar mehr Körper, trägt aber ein höheres Erschöpfungsrisiko.',
        observations: [
          'Open nahe Tief und Close nahe Hoch zeigen anhaltende bullische Kontrolle.',
          'Kleine Tails bedeuten, dass Gegenbewegungen wenig Raum erhielten.',
          'Relative Größe gegenüber den letzten Bars ist wichtiger als absolute Größe.',
          'Ein extremer Bar spät im Trend braucht Bestätigung statt reflexartiger Verfolgung.',
        ],
      },
      {
        id: 'chapter-02-09-question',
        type: 'question',
        title: 'Welcher Bar ist oft gesünder?',
        prompt:
          'Nach einer engen Range erscheint ein moderat großer bullischer Bar und erhält zwei weitere bullische Folgebars. Später im Lauf erscheint ein einzelner riesiger bullischer Bar ohne Anschluss. Welche Struktur spricht stärker für nachhaltigen Trend?',
        options: [
          {
            id: 'series',
            label: 'Der moderate Ausbruch mit mehreren Folgebars',
            explanation:
              'Richtig. Wiederholte Akzeptanz ist belastbarer als späte isolierte Extremgröße.',
          },
          {
            id: 'largest',
            label: 'Immer der größte einzelne Bar',
            explanation:
              'Ausnahmedimension spät im Trend kann eine Falle oder Erschöpfung markieren.',
          },
          {
            id: 'same',
            label: 'Beide sind unabhängig vom Kontext identisch',
            explanation:
              'Position, Vorgeschichte und Anschluss verändern die Aussage grundlegend.',
          },
        ],
        correctOptionId: 'series',
      },
      {
        id: 'chapter-02-09-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Vergleiche den Körper mit den letzten fünf bis zehn Bars.',
          'Open, Close, Tails und Bruch früherer Extreme zeigen die Qualität der Kontrolle.',
          'Extrem große Bars können besonders spät im Trend vor Erschöpfung warnen.',
          'Mehrere gute Folgebars sind meist stärker als eine isolierte Rekordkerze.',
        ],
      },
    ],
  },
] satisfies Lesson[];
