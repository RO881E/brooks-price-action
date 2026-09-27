import type { Lesson } from '../../types';

export const chapterOneFoundationLessons = [
  {
    id: 'brooks-trends.chapter-01.lesson-01',
    title: 'Ein Spektrum, keine zwei Schubladen',
    summary:
      'Wie sich Marktverhalten zwischen extrem gerichtet und extrem ausgeglichen abstufen lässt.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Kapitel 1 · Das Spektrum von Trend bis Range',
    sourceAnchors: [
      'Extremer Trend und extreme Trading Range als Endpunkte',
      'Seltenheit und kurze Dauer reiner Extremzustände',
      'Typische Zwischenformen mit Pullbacks und Überlappung',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-01-01-explain',
        type: 'explanation',
        eyebrow: 'Kapitel 1',
        title: 'Die meisten Märkte liegen zwischen den Extremen',
        paragraphs: [
          'Auf jedem Chart findest du gerichtete Abschnitte und Phasen, in denen der Markt seitwärts handelt. Diese Zustände sind keine starren Gegensätze. Sie bilden ein Spektrum: Am einen Ende liegt ein extremer Trend, in dem fast jeder neue Preisschritt die gleiche Richtung fortsetzt. Am anderen Ende liegt eine extrem enge Trading Range, in der kleinste Bewegungen sofort zurückgenommen werden.',
          'Beide Reinformen sind selten und bleiben meist nur kurz bestehen. Viel häufiger siehst du einen klaren Trend mit kleinen Pullbacks, einen breiten Trendkanal mit starken Gegenbewegungen oder eine Range, deren einzelne Beine mehrere Bars lang gerichtet laufen. Trends erzeugen dabei leicht ein Gefühl von Gewissheit und Dringlichkeit; Ranges lassen Trader eher ratlos über die nächste Richtung zurück.',
          'Die praktische Aufgabe lautet deshalb nicht nur „Trend oder Range?“. Schätze zusätzlich ab, wie weit der aktuelle Markt in Richtung eines Extrempunkts liegt. Größe und Richtung der Körper, Überlappung, Tails, Tiefe der Pullbacks und Qualität des Follow-through liefern dafür Hinweise.',
          'Diese Abstufung verhindert zwei typische Fehler: einen schwachen Trend wie einen unaufhaltsamen Spike zu handeln oder eine fast richtungslose Range mit Breakout-Entries zu jagen.',
        ],
        callout:
          'Trend und Range sind die Endpunkte der Sprache. Der reale Markt spricht meistens in Zwischenstufen.',
      },
      {
        id: 'chapter-01-01-diagram',
        type: 'diagram',
        title: 'Vom extremen Trend zur extremen Range',
        scenario: 'price-action-spectrum',
        caption:
          'Mit zunehmender Überlappung, tieferen Rückläufen und häufigeren Richtungswechseln wandert das Marktverhalten nach rechts.',
        observations: [
          'Nahe dem Trendextrem dominieren Richtung, Dringlichkeit und geringe Überlappung.',
          'Im breiten Kanal bleibt eine Richtung erkennbar, die Gegenseite erzielt aber regelmäßig Fortschritt.',
          'In einer normalen Range wechseln kontrollierende Seiten und Ausbrüche scheitern häufiger.',
          'In der extrem engen Range werden selbst kleinste Bewegungen fast sofort zurückgenommen.',
        ],
      },
      {
        id: 'chapter-01-01-question',
        type: 'question',
        title: 'Wo liegt dieser Markt auf dem Spektrum?',
        prompt:
          'Ein Markt steigt insgesamt, besitzt aber tiefe, überlappende Rücksetzer und kräftige Gegenbewegungen. Welche Einordnung ist am präzisesten?',
        options: [
          {
            id: 'extreme',
            label: 'Extrem starker Aufwärtstrend',
            explanation:
              'Tiefe Pullbacks und starke Überlappung passen nicht zum Trendextrem.',
          },
          {
            id: 'broad',
            label: 'Breiter bullischer Trendkanal',
            explanation:
              'Richtig. Die Gesamtrichtung bleibt aufwärts, doch der Handel ist deutlich zweiseitiger.',
          },
          {
            id: 'tight',
            label: 'Extrem enge Trading Range',
            explanation:
              'Eine erkennbare steigende Gesamtstruktur enthält mehr Richtung als eine extreme Balancephase.',
          },
        ],
        correctOptionId: 'broad',
      },
      {
        id: 'chapter-01-01-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Extremer Trend und extreme Range sind seltene Endpunkte.',
          'Die meisten Charts zeigen Mischformen mit unterschiedlich viel Richtung und Überlappung.',
          'Pullbacktiefe, Tails, Körper und Follow-through helfen bei der Abstufung.',
          'Deine Strategie muss zur tatsächlichen Position auf dem Spektrum passen.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-01.lesson-02',
    title: 'Trend und Range stecken ineinander',
    summary:
      'Warum dieselbe Bewegung auf einer Zeitebene Trend und auf einer anderen nur Pullback oder Range sein kann.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Kapitel 1 · Das Spektrum von Trend bis Range',
    sourceAnchors: [
      'Kleinere Ranges innerhalb von Trends',
      'Kleinere Trends innerhalb von Trading Ranges',
      'Einordnung als Teil einer höheren Zeitebene',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-01-02-explain',
        type: 'explanation',
        eyebrow: 'Verschachtelte Struktur',
        title: 'Die Antwort hängt vom betrachteten Maßstab ab',
        paragraphs: [
          'Jeder Trend enthält kleinere Pausen und Seitwärtsphasen. Jeder Range-Schenkel besteht wiederum aus kleineren gerichteten Bewegungen. Trend und Range schließen sich deshalb nicht absolut aus – sie können gleichzeitig auf verschiedenen Ebenen wahr sein.',
          'Ein starker Abwärtstrend auf dem Fünf-Minuten-Chart kann im Stundenchart nur ein Pullback innerhalb eines Aufwärtstrends sein. Umgekehrt kann eine mehrstündige Trading Range aus mehreren sauberen Ein-Minuten-Trends bestehen, die jeweils am Range-Rand enden.',
          'Auch die großen Aktienmarkt-Abverkäufe von 1987 und 2009 lassen sich auf dem Monatschart als Rückläufe zu einer langfristigen bullischen Trendlinie einordnen. Diese Beobachtung verharmlost nicht ihre kurzfristige Gewalt. Sie zeigt, dass Richtung und Bedeutung immer an Zeitraum, Stop und geplante Haltedauer gebunden sind.',
          'Brooks ordnet die folgenden Kapitel entlang dieses Spektrums: von starken Trends zu engeren Ranges. Pullbacks sind dabei Übergänge vom Trend in vorübergehende Balance; Breakouts sind mögliche Übergänge von Balance zurück in einen Trend.',
        ],
        callout:
          'Frage immer: Trend oder Range – auf welcher Zeitebene und für welchen Trade?',
      },
      {
        id: 'chapter-01-02-diagram',
        type: 'diagram',
        title: 'Eine Bewegung, drei Auflösungen',
        scenario: 'fractal-timeframes',
        caption:
          'Was übergeordnet wie ein einzelner Swing wirkt, zerfällt im kleineren Chart in Trends, Pullbacks und kurze Ranges.',
        observations: [
          'Der höhere Zeitrahmen liefert die größere Funktion einer Bewegung.',
          'Der Arbeitszeitrahmen bestimmt Entry, Stop und unmittelbare Erwartung.',
          'Ein kleiner Trend kann lediglich ein Bein einer größeren Range sein.',
          'Ein kleiner Seitwärtsblock kann lediglich ein Pullback im größeren Trend sein.',
        ],
      },
      {
        id: 'chapter-01-02-question',
        type: 'question',
        title: 'Wie können beide Aussagen stimmen?',
        prompt:
          'Der Fünf-Minuten-Chart fällt seit einer Stunde deutlich. Der Tageschart bleibt in einem langfristigen Aufwärtstrend. Welche Aussage ist korrekt?',
        options: [
          {
            id: 'contradiction',
            label: 'Eine der beiden Einordnungen muss falsch sein',
            explanation:
              'Unterschiedliche Zeitebenen können gleichzeitig gegensätzliche lokale Richtungen zeigen.',
          },
          {
            id: 'nested',
            label: 'Der Intraday-Abwärtstrend kann ein Pullback im Tagestrend sein',
            explanation:
              'Richtig. Beide Beschreibungen gelten innerhalb ihres jeweiligen Maßstabs.',
          },
          {
            id: 'ignore',
            label: 'Der Fünf-Minuten-Trend ist wegen des Tagescharts bedeutungslos',
            explanation:
              'Für einen Intraday-Trade kann er sehr relevant sein, auch wenn seine übergeordnete Funktion nur ein Pullback ist.',
          },
        ],
        correctOptionId: 'nested',
      },
      {
        id: 'chapter-01-02-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Trends enthalten kleinere Ranges, Ranges enthalten kleinere Trends.',
          'Die Funktion einer Bewegung verändert sich mit der Zeitebene.',
          'Pullbacks führen in vorübergehende Balance; Breakouts können neue Trends starten.',
          'Kontext-, Entry- und Management-Zeitebene müssen vor dem Trade feststehen.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-01.lesson-03',
    title: 'Marktträgheit praktisch lesen',
    summary:
      'Warum Trends Fortsetzung und Trading Ranges die Rückkehr in ihre Balance begünstigen.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Kapitel 1 · Das Spektrum von Trend bis Range',
    sourceAnchors: [
      'Marktverhalten besitzt Trägheit',
      'Die meisten frühen Umkehrversuche eines Trends scheitern',
      'Die meisten Ausbruchsversuche einer Trading Range scheitern',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-01-03-explain',
        type: 'explanation',
        eyebrow: 'Inertia',
        title: 'Der aktuelle Zustand bleibt die Ausgangshypothese',
        paragraphs: [
          'Märkte zeigen Trägheit: Was gerade zuverlässig funktioniert, neigt zunächst dazu, weiter zu funktionieren. In einem Trend kaufen oder verkaufen viele Teilnehmer Pullbacks in Trendrichtung. Deshalb scheitern frühe Umkehrversuche häufig und werden selbst zu Flags für die Fortsetzung.',
          'In einer Trading Range gilt die spiegelbildliche Logik. Käufer werden nahe der Oberkante vorsichtiger, Verkäufer nahe der Unterkante. Ausbruchsversuche treffen auf Gegenorders und kehren oft in den akzeptierten Bereich zurück.',
          'Trägheit ist keine Garantie und kein Grund, spät jede Bewegung zu jagen. Sie bestimmt nur die Ausgangsannahme: Ein intakter Trend bleibt Trend, bis ausreichende Gegenbeweise entstehen. Eine intakte Range bleibt Range, bis ein Ausbruch mit Anschluss und Akzeptanz ein neues Verhalten etabliert.',
          'Das spart mentale Energie. Du musst nicht nach jedem Bar ein völlig neues Regime erfinden. Du aktualisierst die bestehende Hypothese anhand klarer Beweise.',
        ],
        callout:
          'Behalte das aktuelle Regime bei, bis der Markt durch sein Verhalten einen Wechsel verdient.',
      },
      {
        id: 'chapter-01-03-diagram',
        type: 'diagram',
        title: 'Zwei Formen von Marktträgheit',
        scenario: 'market-inertia',
        caption:
          'Links scheitert eine Gegenbewegung im Trend. Rechts scheitert ein Ausbruch aus der Range und kehrt zur Balance zurück.',
        observations: [
          'Im Trend werden Gegenbewegungen zunächst als Pullbacks behandelt.',
          'In der Range werden Grenzbrüche zunächst auf Akzeptanz geprüft.',
          'Ein Regimewechsel braucht mehr als einen einzelnen auffälligen Bar.',
          'Follow-through entscheidet, ob der alte Zustand fortbesteht oder tatsächlich endet.',
        ],
      },
      {
        id: 'chapter-01-03-question',
        type: 'question',
        title: 'Welche Ausgangsannahme ist sinnvoll?',
        prompt:
          'Ein starker Abwärtstrend bildet seinen ersten bullischen Reversal-Bar, aber der nächste Bar fällt sofort wieder. Wie ordnest du das zunächst ein?',
        options: [
          {
            id: 'reversal',
            label: 'Der Trend ist durch den Reversal-Bar sicher beendet',
            explanation:
              'Ohne Anschluss bleibt der Bar nur ein gescheiterter Umkehrversuch.',
          },
          {
            id: 'continuation',
            label: 'Die Trendträgheit bleibt intakt',
            explanation:
              'Richtig. Der fehlende bullische Anschluss bestätigt vorerst die bestehende Richtung.',
          },
          {
            id: 'range',
            label: 'Jeder Reversal-Bar erzeugt automatisch eine Trading Range',
            explanation:
              'Ein einzelner Bar genügt nicht, um einen ausgeprägten Regimewechsel zu bestätigen.',
          },
        ],
        correctOptionId: 'continuation',
      },
      {
        id: 'chapter-01-03-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Trends neigen zur Fortsetzung, Ranges zur Rückkehr in Balance.',
          'Frühe Umkehr- und Ausbruchsversuche scheitern häufig.',
          'Das bestehende Regime bleibt die Ausgangshypothese.',
          'Erst Anschluss und Akzeptanz bestätigen einen Wechsel.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-01.lesson-04',
    title: 'Extremtrend, enge Range, Trendfortsetzung',
    summary:
      'Der zentrale Chartfall des Kapitels als eigenständig rekonstruierte Abfolge dreier Marktphasen.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Kapitel 1 · Chartfall 1.1',
    sourceAnchors: [
      'Starker erster Abwärtstrend bis zum ersten Wendepunkt',
      'Ungewöhnlich enge Trading Range',
      'Minimaler Aufwärtsausbruch und außergewöhnlich starke Abwärtsfortsetzung',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-01-04-explain',
        type: 'explanation',
        eyebrow: 'Eigenständiger Chartfall',
        title: 'Drei Phasen zeigen fast das gesamte Spektrum',
        paragraphs: [
          'Der Buchfall beginnt mit einem sehr starken Abwärtstrend. Verkäufer erzielen schnell Strecke, Pullbacks bleiben klein und die Bewegung erreicht ihren ersten markanten Punkt mit klarer Richtung.',
          'Danach wechselt der Markt in eine ungewöhnlich enge Trading Range. Die Bars überlappen stark, kleine Bewegungen werden zurückgenommen und beide Seiten verlieren kurzfristig die Fähigkeit, Distanz aufzubauen. Dieser Abschnitt liegt nahe dem Range-Extrem des Spektrums.',
          'Später überschreitet der Markt die Oberkante nur minimal. Der bullische Bruch erhält keinen Anschluss, dreht um und fällt unter die Range. Der anschließende Abwärtstrend ist erneut außergewöhnlich stark und führt bis zum dritten markanten Punkt.',
          'Das Entscheidende ist nicht die exakte historische Form. Der Fall zeigt einen vollständigen Regimezyklus: gerichteter Impuls, extreme Balance, gescheiterter Ausbruch und erneute gerichtete Expansion.',
        ],
        callout:
          'Eine sehr enge Range löscht den vorherigen Trend nicht. Sie komprimiert den Markt, bis eine Seite wieder akzeptierte Distanz erzeugt.',
      },
      {
        id: 'chapter-01-04-diagram',
        type: 'diagram',
        title: 'Bärischer Impuls, Kompression und Wiederaufnahme',
        scenario: 'bear-range-resumption',
        caption:
          'Die synthetischen Kursdaten übernehmen keine Buchgrafik. Sie rekonstruieren nur die Lernlogik des beschriebenen Falls.',
        observations: [
          'Phase 1: große bärische Fortschritte und nur kleine Gegenbewegungen.',
          'Phase 2: enge Überlappung zeigt vorübergehende Balance.',
          'Der minimale bullische Ausbruch wird sofort zurückgewiesen.',
          'Der Bruch unter die Range erhält starken Anschluss und nimmt die ursprüngliche Richtung wieder auf.',
        ],
      },
      {
        id: 'chapter-01-04-question',
        type: 'question',
        title: 'Wann wird aus der Range wieder ein Trend?',
        prompt:
          'Eine enge Range wird um einen Tick nach oben überschritten, der Markt fällt jedoch sofort zurück und bricht danach mit großen bearischen Bars nach unten. Was bestätigt den neuen Trend?',
        options: [
          {
            id: 'one-tick',
            label: 'Der einzelne Tick oberhalb der Range',
            explanation:
              'Dieser Bruch scheiterte und erzeugte keine Akzeptanz oberhalb der Range.',
          },
          {
            id: 'bear-follow',
            label: 'Der Abwärtsbruch mit starkem bearischem Anschluss',
            explanation:
              'Richtig. Distanz und Follow-through etablieren wieder gerichtetes Verhalten.',
          },
          {
            id: 'time',
            label: 'Allein die lange Dauer der Range',
            explanation:
              'Dauer kann Kompression zeigen, bestimmt aber nicht Richtung oder Erfolg des Ausbruchs.',
          },
        ],
        correctOptionId: 'bear-follow',
      },
      {
        id: 'chapter-01-04-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein Handelstag kann mehrere extreme Regime nacheinander enthalten.',
          'Enge Balance kann mitten in einem größeren Trend auftreten.',
          'Ein minimaler Grenzbruch ohne Anschluss bleibt ein Fehlausbruch.',
          'Erst starke Expansion und Folgebewegung bestätigen die Trendwiederaufnahme.',
        ],
      },
    ],
  },
] satisfies Lesson[];
