import type { Lesson } from '../../types';

export const chapterOneCountingLessons = [
  {
    id: 'price-action-trends.chapter-01.lesson-05',
    title: 'Drei Namen für dieselben zwei Beine',
    summary:
      'Warum ABC, Elliott 1–2–3 und AB=CD dieselbe Grundstruktur nur unterschiedlich beschriften.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Kapitel 1 · Zweibeinige Bewegungen',
    sourceAnchors: [
      'ABC-Bezeichnung für einen zweibeinigen Pullback',
      'Elliott-Wellen 1 und 3 mit Welle 2 als Unterbrechung',
      'AB=CD-Bezeichnung für einen möglichen gemessenen Move',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-01-05-explain',
        type: 'explanation',
        eyebrow: 'Zwei Beine, mehrere Sprachen',
        title: 'Die Kursstruktur bleibt gleich, die Buchstaben wechseln',
        paragraphs: [
          'Zweibeinige Bewegungen gibt es ständig. Verwirrend wird es, weil verschiedene Analyseansätze dieselben Wendepunkte anders benennen. Die Bezeichnung sagt deshalb weniger über den sichtbaren Kurs als über die Theorie, mit der jemand ihn betrachtet.',
          'Ist die Bewegung ein Pullback in einem Trend, nennt man sie oft ABC-Korrektur: Das erste Gegenbein endet bei A, eine Zwischenreaktion bei B und das zweite Gegenbein bei C. Elliott-Wave-Trader nennen dagegen die ersten beiden Schübe eines entstehenden Trends Welle 1 und Welle 3; die Unterbrechung dazwischen ist Welle 2.',
          'Trader, die einen gemessenen Move suchen, markieren den ersten Schub als A nach B und den zweiten als C nach D. Sie prüfen, ob beide Beine ungefähr gleich groß werden und am Ende des zweiten eine Reaktion entsteht. So kann derselbe Wendepunkt je nach System gleichzeitig A, B oder C heißen.',
          'Für die Praxis heißt das: Fang nicht mit dem Etikett an. Beschreibe erst Richtung, Anzahl der Beine, Zwischenreaktion und Kontext. Danach kannst du das Ganze in die passende Fachsprache übersetzen.',
        ],
        callout:
          'Drei Benennungen können denselben Kursverlauf meinen. Handelbar ist die Struktur, nicht der Buchstabe.',
      },
      {
        id: 'chapter-01-05-diagram',
        type: 'diagram',
        title: 'Eine Struktur in drei Zählweisen',
        scenario: 'two-leg-labels',
        caption:
          'Die synthetische Bewegung bleibt unverändert. Nur die Beschriftung und die dahinterliegende Fragestellung wechseln.',
        observations: [
          'ABC beschreibt häufig einen Pullback relativ zum übergeordneten Trend.',
          'Elliott 1–2–3 deutet die Schübe als frühe Wellen eines neuen Trends.',
          'AB=CD richtet den Blick auf eine mögliche Größengleichheit der beiden Schübe.',
          'Keine Benennung beweist allein, dass am letzten Punkt eine Umkehr folgen muss.',
        ],
      },
      {
        id: 'chapter-01-05-compare',
        type: 'comparison',
        title: 'Was jede Sprache hervorhebt',
        columns: [
          {
            title: 'ABC-Pullback',
            tone: 'neutral',
            points: [
              'ordnet zwei Gegenbeine in einen bestehenden Trend ein',
              'fokussiert auf Korrektur und mögliche Trendfortsetzung',
            ],
          },
          {
            title: 'Elliott 1–2–3',
            tone: 'positive',
            points: [
              'liest die beiden Schübe als Wellen 1 und 3',
              'bezeichnet die Zwischenbewegung als Welle 2',
            ],
          },
          {
            title: 'AB=CD',
            tone: 'warning',
            points: [
              'vergleicht die Länge des ersten und zweiten Beins',
              'erwartet am Ziel nur eine Möglichkeit, keine sichere Umkehr',
            ],
          },
        ],
      },
      {
        id: 'chapter-01-05-question',
        type: 'question',
        title: 'Was ist die belastbare Beobachtung?',
        prompt:
          'Drei Trader nennen dieselbe Bewegung ABC, 1–2–3 und AB=CD. Welche Aussage bleibt unabhängig von ihrer Terminologie richtig?',
        options: [
          {
            id: 'structure',
            label: 'Der Kurs zeigt zwei Schübe mit einer Zwischenreaktion',
            explanation:
              'Richtig. Diese sichtbare Struktur bleibt bei allen drei Benennungen erhalten.',
          },
          {
            id: 'certain',
            label: 'Der letzte Punkt garantiert eine Umkehr',
            explanation:
              'Keines der Etiketten beseitigt Unsicherheit oder ersetzt Bestätigung.',
          },
          {
            id: 'different',
            label: 'Es müssen drei verschiedene Charts sein',
            explanation:
              'Gerade derselbe Chart kann je nach Methode unterschiedlich beschriftet werden.',
          },
        ],
        correctOptionId: 'structure',
      },
      {
        id: 'chapter-01-05-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Zweibeinige Bewegungen sind häufig, ihre traditionelle Benennung ist uneinheitlich.',
          'ABC, Elliott 1–2–3 und AB=CD betonen verschiedene Aspekte derselben Struktur.',
          'Ein gemessener Move vergleicht Strecken, garantiert aber keine Reaktion.',
          'Beschreibe den Kurs zuerst neutral und übersetze die Labels danach.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-01.lesson-06',
    title: 'Beine zählen statt Buchstaben jonglieren',
    summary:
      'Wie du mit Leg 1, Leg 2 sowie High 1 bis High 4 und Low 1 bis Low 4 eindeutiger zählst.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 1 · Beine zählen',
    sourceAnchors: [
      'Drittes und viertes Bein als Grenze einfacher ABC-Namen',
      'High 1 bis High 4 nach Abwärtsbeinen',
      'Low 1 und Low 2 nach Aufwärtsbeinen inklusive Signal- und Entry-Bar',
      'Leg-Zählung statt uneinheitlicher AB=CD-Terminologie',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-01-06-explain',
        type: 'explanation',
        eyebrow: 'Zählweise',
        title: 'Nummern wachsen mit der tatsächlichen Bewegung mit',
        paragraphs: [
          'Nicht jede Korrektur endet nach zwei Beinen. Manche bekommen einen dritten oder vierten Schub, und eine einfache ABC-Beschriftung wird schnell unklar. Deshalb spricht man neutral von Leg 1, Leg 2 und weiteren Pushes. Die Zählung beschreibt, was der Markt getan hat, ohne vorschnell ein Ende zu behaupten.',
          'In einem Bullenmarkt oder einer Trading Range beginnt die High-Zählung während einer Abwärtskorrektur. Sobald ein Bar über das Hoch seines Vorgängerbars handelt, ist das der erste Aufwärtsversuch: High 1. Scheitert er, folgt ein zweites Abwärtsbein und danach ein erneuter Bruch über ein Vorgängerhoch, ist das High 2. Dasselbe Prinzip kann bis High 3 und High 4 weiterlaufen.',
          'Spiegelbildlich zählst du in einem Bärenbein oder in einer Range die Aufwärtsbeine. Der erste Bruch unter ein Vorgängertief ist Low 1, der Versuch nach zwei Aufwärtsbeinen Low 2. Beim Low-2-Setup ist der vorbereitende Bar der Signal- oder Setup-Bar; erst der folgende Bruch nach unten erzeugt den Entry-Bar und damit den tatsächlichen Einstieg.',
          'Gemessene Bewegungen bleiben wichtig. Die Bezeichnung AB=CD vermeidet man nur, weil ihre Buchstaben mit der verbreiteten ABC-Zählung kollidieren. Strecke und Symmetrie darfst du weiter prüfen – du nennst die Abschnitte nur klarer erstes und zweites Bein.',
        ],
        callout:
          'High und Low bezeichnen den Richtungsversuch, die Zahl seine Reihenfolge innerhalb der Korrektur.',
      },
      {
        id: 'chapter-01-06-diagram',
        type: 'diagram',
        title: 'High 1 scheitert, High 2 übernimmt',
        scenario: 'high-low-count',
        caption:
          'Im bullischen Kontext markieren H1 und H2 nicht die Tiefs der Korrektur, sondern die ersten beiden Versuche, wieder nach oben zu drehen.',
        observations: [
          'H1 entsteht beim ersten Bruch über das Hoch des Vorgängerbars.',
          'Scheitert H1 und folgt ein weiteres Abwärtsbein, kann der nächste Aufwärtsversuch H2 werden.',
          'Low 1 und Low 2 funktionieren spiegelbildlich bei Aufwärtskorrekturen.',
          'Das Label beschreibt die Sequenz; Kontext und Follow-through bestimmen die Qualität.',
        ],
      },
      {
        id: 'chapter-01-06-compare',
        type: 'comparison',
        title: 'Setup und Ausführung auseinanderhalten',
        columns: [
          {
            title: 'Signal-/Setup-Bar',
            tone: 'neutral',
            points: [
              'liefert die vorbereitende Struktur',
              'macht einen möglichen Trigger planbar',
              'ist noch nicht automatisch der Einstieg',
            ],
          },
          {
            title: 'Entry-Bar',
            tone: 'positive',
            points: [
              'durchbricht das relevante Hoch oder Tief',
              'löst die vorbereitete Order aus',
              'muss danach weiterhin Anschluss beweisen',
            ],
          },
        ],
      },
      {
        id: 'chapter-01-06-question',
        type: 'question',
        title: 'Wann ist ein Low 2 vollständig?',
        prompt:
          'Ein Bärenkontext zeigt zwei Aufwärtsbeine. Ein bearischer Signal-Bar entsteht. Welches Ereignis macht daraus den Low-2-Entry?',
        options: [
          {
            id: 'break-low',
            label: 'Ein nachfolgender Bruch unter das relevante Vortief',
            explanation:
              'Richtig. Der Abwärtstrigger nach dem Signal-Bar erzeugt den Entry.',
          },
          {
            id: 'signal-alone',
            label: 'Allein das Aussehen des Signal-Bars',
            explanation:
              'Der Signal-Bar bereitet nur vor; ohne Trigger wurde keine Entry-Order ausgelöst.',
          },
          {
            id: 'third-up',
            label: 'Ein drittes deutliches Aufwärtsbein',
            explanation:
              'Das würde die Sequenz verändern, statt den beschriebenen Low-2-Trigger zu bestätigen.',
          },
        ],
        correctOptionId: 'break-low',
      },
      {
        id: 'chapter-01-06-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Leg 1, Leg 2 und weitere Pushes bleiben auch bei langen Korrekturen eindeutig.',
          'High-Zählungen markieren Aufwärtsversuche nach Abwärtsbeinen.',
          'Low-Zählungen markieren Abwärtsversuche nach Aufwärtsbeinen.',
          'Signal-Bar bereitet vor, Entry-Bar löst aus.',
          'Gemessene Moves bleiben nützlich, auch ohne das mehrdeutige AB=CD-Label.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-01.lesson-07',
    title: 'Fehlausbruch über dem Vortageshoch',
    summary:
      'Wie ein gescheiterter Eröffnungsausbruch einen Trend-from-the-Open-Tag und den späteren Tageskontext prägt.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Kapitel 1 · Vertiefung des Chartfalls',
    sourceAnchors: [
      'Eröffnungsausbruch über das Hoch des Vortags',
      'Scheitern des Ausbruchs und bärischer Trend from the Open',
      'Einordnung desselben Tages als Trend-Resumption-Tag',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-01-07-explain',
        type: 'explanation',
        eyebrow: 'Vertiefung des Chartfalls',
        title: 'Ein neues Hoch ist erst durch Akzeptanz ein erfolgreicher Ausbruch',
        paragraphs: [
          'Der Handelstag eröffnete über dem Hoch des Vortags. Auf dem Papier war das ein bullischer Breakout. Der Markt konnte die höheren Preise aber nicht halten, fiel unter die alte Grenze zurück und machte den Ausbruch damit zum Fehlausbruch.',
          'Aus dem frühen Verkaufsdruck wurde ein bärischer Trend-from-the-Open-Tag: Die vorherrschende Richtung stand schon kurz nach Handelsbeginn fest, statt sich erst nach einer langen neutralen Eröffnungsphase zu bilden. Wer nur das Gap oder das neue Hoch sah, las Absicht; wer die sofortige Abweisung sah, las das tatsächliche Ergebnis.',
          'Der Tag war zugleich ein Trend-Resumption-Tag. Nach dem ersten starken Abwärtsschub legte der Markt mehrere Stunden in einer engen Range eine Pause ein und nahm später die bärische Richtung wieder auf. Die Begriffe beschreiben also zwei Ebenen desselben Tages: den frühen Trendbeginn und die Fortsetzung nach der Pause in der Mitte.',
          'Vortageshoch, Gap und Eröffnung liefern Kontext, aber keine fertige Order. Entscheidend bleibt, ob Preise außerhalb der Grenze angenommen werden oder der Markt schnell wieder in den alten Bereich zurückkehrt.',
        ],
        callout:
          'Ein Breakout zeigt einen Versuch. Erst Halten und Follow-through zeigen den Erfolg.',
      },
      {
        id: 'chapter-01-07-diagram',
        type: 'diagram',
        title: 'Der Eröffnungsausbruch verliert sofort Akzeptanz',
        scenario: 'failed-open-breakout',
        caption:
          'Oberhalb des Vortageshochs findet der Markt keine Anschlusskäufer. Die Rückkehr unter die Grenze leitet den bärischen Trend vom Open ein.',
        observations: [
          'Die Eröffnung liegt zunächst auf der bullischen Seite der Referenz.',
          'Der fehlende Anschluss schwächt die Breakout-Hypothese.',
          'Die schnelle Rückkehr unter das Vortageshoch fängt späte Käufer ein.',
          'Große bearische Bars und weitere tiefere Preise bestätigen den Trend-from-the-Open-Kontext.',
        ],
      },
      {
        id: 'chapter-01-07-question',
        type: 'question',
        title: 'Was kippt die bullische Eröffnungsthese?',
        prompt:
          'Der Markt eröffnet über dem Vortageshoch. Welche Folge liefert den stärksten Gegenbeweis zu einem erfolgreichen bullischen Breakout?',
        options: [
          {
            id: 'failure',
            label: 'Schnelle Rückkehr unter die Grenze mit bearischem Anschluss',
            explanation:
              'Richtig. Zurückweisung plus Follow-through zeigt, dass höhere Preise nicht akzeptiert wurden.',
          },
          {
            id: 'gap',
            label: 'Allein das Gap über das Vortageshoch',
            explanation:
              'Das Gap erzeugt den Versuch, beweist aber noch keine dauerhafte Akzeptanz.',
          },
          {
            id: 'single-tail',
            label: 'Ein kleiner Tail innerhalb des ersten Bars',
            explanation:
              'Ein einzelnes Detail ist schwächer als die vollständige Rückkehr mit Anschluss.',
          },
        ],
        correctOptionId: 'failure',
      },
      {
        id: 'chapter-01-07-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein Eröffnungsausbruch kann unmittelbar scheitern.',
          'Trend from the Open beschreibt eine früh etablierte Tagesrichtung.',
          'Trend Resumption beschreibt die Wiederaufnahme nach einer Pause oder Range.',
          'Referenzniveau, Zurückweisung und Follow-through ergeben gemeinsam den Kontext.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-01.lesson-08',
    title: 'Die Falle vor der Trendwiederaufnahme',
    summary:
      'Wie ein starker Eröffnungstrend, eine stundenlange enge Range und ein Fehlausbruch zusammen ein Swing-Setup bis zum Schluss ergeben können.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 1 · Vertiefung des Chartfalls',
    sourceAnchors: [
      'Starker Eröffnungstrend gefolgt von mehrstündiger enger Range',
      'Erhöhte Chance einer Trendwiederaufnahme',
      'Fehlausbruch ungefähr zwischen 11 und 12 Uhr PST im beschriebenen Muster',
      'Gefangene Gegenseite und möglicher Swing bis zum Handelsschluss',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-01-08-explain',
        type: 'explanation',
        eyebrow: 'Tagesstruktur zusammensetzen',
        title: 'Impuls, Kompression, Falle, Wiederaufnahme',
        paragraphs: [
          'Ein starker Trend direkt nach der Eröffnung ändert die Bedeutung der Seitwärtsphase danach. Verharrt der Markt anschließend mehrere Stunden in einer sehr engen Range, ist die frühe Richtung nicht automatisch ungültig. Die Range kann einfach eine lange Pause mitten im Tagestrend sein.',
          'In diesem Kontext steigt die Chance, dass der Markt den Eröffnungstrend später wieder aufnimmt. Das ist keine Gewissheit und auch keine Aufforderung, mitten in der Range zu raten. Der Trader wartet weiter ab, welche Seite tatsächlich ausbricht und ob dieser Bruch Anschluss findet.',
          'Im historischen Chartfall kam ungefähr zwischen 11 und 12 Uhr US-Pazifikzeit ein kleiner Ausbruch gegen die frühe Trendrichtung. Er scheiterte sofort. Long-Trader, die den vermeintlichen Richtungswechsel gekauft hatten, mussten raus; gleichzeitig bekamen die Verkäufer ein klares Signal für die Wiederaufnahme.',
          'So ein gescheiterter Gegen-Ausbruch gilt als starkes Swing-Setup bis zum Handelsschluss. Die Uhrzeit ist dabei Kontext aus diesem immer wieder beobachteten Muster, kein universelles Zeitsignal. Ohne frühen Trend, enge mehrstündige Range, Fehlausbruch und bärischen Anschluss gibt es dieses konkrete Setup nicht.',
        ],
        callout:
          'Nicht die Uhrzeit handelt. Die ganze Abfolge aus Trend, Kompression, Falle und Anschluss ergibt die These.',
      },
      {
        id: 'chapter-01-08-diagram',
        type: 'diagram',
        title: 'Der Fehlausbruch fängt die falsche Seite',
        scenario: 'midday-false-breakout',
        caption:
          'Die Zeitmarke ordnet den beschriebenen Fall ein. Der Trigger entsteht erst durch die Zurückweisung oberhalb der Range und den starken Abwärtsanschluss.',
        observations: [
          'Der frühe bearische Impuls liefert die Ausgangsrichtung.',
          'Mehrstündige Kompression hält beide Möglichkeiten offen, löscht den Impuls aber nicht.',
          'Der kleine bullische Grenzbruch lockt Trader auf die Gegenseite.',
          'Rückkehr und starker Anschluss nach unten aktivieren die Trend-Resumption-These.',
        ],
      },
      {
        id: 'chapter-01-08-compare',
        type: 'comparison',
        title: 'Kontext ist noch kein Trigger',
        columns: [
          {
            title: 'Kontext spricht dafür',
            tone: 'neutral',
            points: [
              'starker Trend vom Open',
              'enge Range über mehrere Stunden',
              'Ausbruch gegen die frühe Richtung scheitert',
            ],
          },
          {
            title: 'Trigger bestätigt',
            tone: 'positive',
            points: [
              'Preis kehrt in die Range zurück',
              'Trendseite bricht die Gegengrenze',
              'starke Folgebars schaffen Distanz',
            ],
          },
          {
            title: 'These entkräftet',
            tone: 'warning',
            points: [
              'Gegenausbruch hält außerhalb',
              'Follow-through bestätigt neue Richtung',
              'Markt akzeptiert Preise jenseits der Range',
            ],
          },
        ],
      },
      {
        id: 'chapter-01-08-question',
        type: 'question',
        title: 'Was macht das Setup vollständig?',
        prompt:
          'Nach einem starken bärischen Open handelt der Markt stundenlang eng. Gegen Mittag bricht er leicht nach oben aus. Wann wird daraus das im Kapitel beschriebene bärische Swing-Setup?',
        options: [
          {
            id: 'clock',
            label: 'Automatisch um 11 Uhr PST',
            explanation:
              'Die Uhrzeit ist nur Kontext des Beispiels und niemals allein ein Entry-Signal.',
          },
          {
            id: 'failure-follow',
            label: 'Nach Zurückweisung und starkem Abwärtsanschluss',
            explanation:
              'Richtig. Erst Fehlschlag, Gegengrenzbruch und Follow-through stützen die Wiederaufnahme.',
          },
          {
            id: 'first-break',
            label: 'Sobald der erste Tick über der Range handelt',
            explanation:
              'Dieser Tick ist zunächst ein bullischer Versuch; sein späteres Scheitern liefert die entscheidende Information.',
          },
        ],
        correctOptionId: 'failure-follow',
      },
      {
        id: 'chapter-01-08-recap',
        type: 'recap',
        title: 'Kapitel 1 abgeschlossen',
        points: [
          'Trend und Range sind seltene Extreme eines kontinuierlichen Spektrums.',
          'Beide Strukturen sind verschachtelt und zeigen Trägheit.',
          'Zweibeinige Bewegungen lassen sich neutraler als Leg 1 und Leg 2 beschreiben.',
          'High-/Low-Zählungen trennen Reihenfolge, Signal und Entry.',
          'Im Tagesfall führten Fehlausbruch, enge Range und Follow-through zur bärischen Trendwiederaufnahme.',
          'Kontext erhöht Wahrscheinlichkeiten; der Markt muss die These trotzdem bestätigen.',
        ],
      },
    ],
  },
] satisfies Lesson[];
