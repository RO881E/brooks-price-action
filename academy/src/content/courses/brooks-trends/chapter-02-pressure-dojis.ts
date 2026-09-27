import type { Lesson } from '../../types';

export const chapterTwoPressureDojiLessons = [
  {
    id: 'brooks-trends.chapter-02.lesson-10',
    title: 'Druck sammelt sich Bar für Bar',
    summary:
      'Wie wiederkehrende bullische oder bearische Körper einen Regimewechsel vorbereiten, lange bevor der Ausbruch offensichtlich wird.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 2 · Kumulativer Kauf- und Verkaufsdruck',
    sourceAnchors: [
      'Bullische Körper in Range oder Bärentrend als Kaufdruck',
      'Käufe in kleinen Rückläufen und an neuen Tiefs',
      'Bearische Körper im Bullenmarkt als wachsender Verkaufsdruck',
      'Anzahl und Größe der Körper als kumulative Evidenz',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-10-explain',
        type: 'explanation',
        eyebrow: 'Kumulative Evidenz',
        title: 'Ein Regimewechsel beginnt oft vor dem sichtbaren Breakout',
        paragraphs: [
          'Wenn in einer Trading Range oder in einem Bärentrend immer mehr bullische Körper entstehen, sammeln Käufer kleine Erfolge. Sie kaufen Rückläufe innerhalb der Bars, akzeptieren Schlusskurse nahe den Hochs und werden mitunter sogar unter früheren Tiefs aktiv. Gleichzeitig verkaufen Bären an neuen Tiefs weniger aggressiv und nutzen sie häufiger zur Gewinnmitnahme.',
          'Keiner dieser Bars muss allein den Trend drehen. Ihre Wirkung addiert sich. Mit jedem bullischen Schluss steigt der Beweis, dass tiefe Preise Nachfrage anziehen und dass die Verkäufer ihre bisherige Kontrolle nicht mehr vollständig durchsetzen können. Der Markt kann dadurch erst in ein bullisches Bein und später in einen vollständigen Bullenmarkt übergehen.',
          'Im Bullenmarkt gilt die Spiegelung: Wiederkehrende oder zunehmend große bearische Körper zeigen, dass Verkäufer in Pullbacks und Schwüngen mehr Distanz gewinnen. Besonders in einer Range nach einem Trend kann diese wachsende Sequenz die spätere Abwärtsbewegung vorbereiten.',
          'Druck ist daher kein einzelnes Signal, sondern eine Bilanz. Zähle, welche Seite Körper erzeugt, wie groß diese werden, wo sie auftreten und ob ihre Gegenseite an den Extremen noch Fortschritt erzielt.',
        ],
        callout:
          'Ein Bar kann Zufall sein. Eine wiederkehrende Folge gleichartiger Erfolge verändert die Wahrscheinlichkeit.',
      },
      {
        id: 'chapter-02-10-diagram',
        type: 'diagram',
        title: 'Kleine bullische Erfolge bauen Kaufdruck auf',
        scenario: 'cumulative-pressure',
        caption:
          'Der Markt fällt noch, doch immer mehr Bars schließen deutlich über ihrem Tief. Später reicht der angesammelte Druck für einen Ausbruch aus dem Kanal.',
        observations: [
          'Untere Tails zeigen Käufer, die neue Tiefs ablehnen.',
          'Bullische Körper werden häufiger und größer.',
          'Bären nehmen an Tiefs Gewinne, statt immer neue Shorts aufzubauen.',
          'Der spätere Breakout bestätigt einen Prozess, der bereits mehrere Bars lief.',
        ],
      },
      {
        id: 'chapter-02-10-question',
        type: 'question',
        title: 'Welche Folge zeigt wachsenden Kaufdruck?',
        prompt:
          'Ein Bärentrend bildet an mehreren neuen Tiefs untere Tails, bullische Reversal-Bars und zunehmend größere bullische Körper. Was bedeutet die Kombination?',
        options: [
          {
            id: 'pressure',
            label: 'Kaufdruck sammelt sich und schwächt die Bärenthese',
            explanation:
              'Richtig. Die wiederholten Reaktionen zeigen zunehmende Nachfrage und nachlassende Verkäufe an Tiefs.',
          },
          {
            id: 'guarantee',
            label: 'Die Umkehr ist bereits garantiert',
            explanation:
              'Kumulativer Druck verschiebt Wahrscheinlichkeiten, ersetzt aber keinen bestätigten Ausbruch.',
          },
          {
            id: 'stronger-bears',
            label: 'Jeder untere Tail beweist stärkere Bären',
            explanation:
              'Der Schluss weg vom Tief zeigt gerade, dass Verkäufer dort nicht ungehindert kontrollieren.',
          },
        ],
        correctOptionId: 'pressure',
      },
      {
        id: 'chapter-02-10-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Kauf- und Verkaufsdruck entsteht kumulativ über mehrere Bars.',
          'Häufigkeit, Größe, Schlussposition und Ort der Körper zählen gemeinsam.',
          'Neue Tiefs mit bullischen Reaktionen zeigen nachlassende Verkäuferkontrolle.',
          'Der Breakout ist häufig die späte Bestätigung eines früher begonnenen Prozesses.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-02.lesson-11',
    title: 'Starke Trader handeln an den Rändern',
    summary:
      'Warum starke Bullen unten kaufen, starke Bären oben verkaufen und schwache Teilnehmer in einer Range oft genau umgekehrt reagieren.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Kapitel 2 · Starke und schwache Marktteilnehmer',
    sourceAnchors: [
      'Institutionelle Käufer an neuen Tiefs und untere Tails',
      'Institutionelle Verkäufer warten auf höhere Preise',
      'Trading Range aus Kaufen unten und Verkaufen oben',
      'Schwache Teilnehmer kaufen Hochs und verkaufen Tiefs',
      'Fortlaufende Neubewertung von Wahrscheinlichkeiten',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-11-explain',
        type: 'explanation',
        eyebrow: 'Wer handelt wo?',
        title: 'Die Schlussposition verrät, welche Seite an einem Extrem noch handeln will',
        paragraphs: [
          'In einem reifen Bärentrend zeigen untere Tails und bullische Schlusskurse, dass starke Bullen an neuen Tiefs kaufen. Sie besitzen genug Kapital und Überzeugung, bei noch tieferen Preisen weiter aufzubauen. Gleichzeitig sehen starke Bären dort weniger Wert für neue Shorts und warten lieber auf eine Rally, um höher zu verkaufen.',
          'Würden genügend starke Bären weiterhin jedes Tief aggressiv verkaufen, könnten Käufer die Bars nicht regelmäßig vom Tief wegschließen. Genau deshalb ist die Schlussposition ein Hinweis auf die veränderte Bereitschaft beider Seiten.',
          'Wenn starke Bullen unten kaufen und starke Bären erst oben verkaufen, entsteht zweiseitiger Handel: eine Trading Range. Schwache Teilnehmer reagieren häufig entgegengesetzt. Sie verkaufen am Tief aus Angst oder Stop-Zwang und kaufen am Hoch aus Angst, einen neuen Trend zu verpassen.',
          'Diese Rollen sind keine festen Personenetiketten. Ein professioneller Teilnehmer kann je nach Preis und Kontext die Seite wechseln. Auch deine Markteinschätzung muss beweglich bleiben: Ein anfänglicher Vorteil kann sich über mehrere Bars zur Balance und später sogar zum Vorteil der Gegenseite drehen.',
        ],
        callout:
          'Stark bedeutet nicht „immer richtig“, sondern: mit Plan, ausreichendem Risiko-Spielraum und am passenden Preis handeln.',
      },
      {
        id: 'chapter-02-11-diagram',
        type: 'diagram',
        title: 'Wie aus dem Trend eine Range wird',
        scenario: 'strong-weak-range',
        caption:
          'Starke Teilnehmer warten auf attraktive Ränder. Schwache Teilnehmer reagieren verspätet und liefern dort häufig die Gegenseite.',
        observations: [
          'Starke Bullen kaufen nahe der Unterkante und können tiefer ergänzen.',
          'Starke Bären vermeiden neue Shorts unten und verkaufen Erholungen.',
          'Schwache Bullen jagen Hochs; schwache Bären verkaufen verspätet Tiefs.',
          'Das wiederholte Randverhalten stabilisiert vorübergehend die Range.',
        ],
      },
      {
        id: 'chapter-02-11-question',
        type: 'question',
        title: 'Was sagen wiederholte Schlusskurse weg vom Tief?',
        prompt:
          'Ein Bärentrend macht neue Tiefs, doch mehrere Bars schließen in ihrer oberen Hälfte. Welche institutionelle Veränderung ist plausibel?',
        options: [
          {
            id: 'buyers-low',
            label: 'Starke Käufer treten unten auf, Bären werden dort selektiver',
            explanation:
              'Richtig. Sonst würden die Bars häufiger am Tief schließen.',
          },
          {
            id: 'bears-total',
            label: 'Bären kontrollieren weiterhin jeden Preis vollständig',
            explanation:
              'Die wiederholte Erholung innerhalb der Bars widerspricht vollständiger Kontrolle an den Tiefs.',
          },
          {
            id: 'certain-bull',
            label: 'Ein neuer Bullenmarkt ist sicher',
            explanation:
              'Die Information stützt Balance oder Umkehr, bestätigt aber noch keinen vollständigen Trendwechsel.',
          },
        ],
        correctOptionId: 'buyers-low',
      },
      {
        id: 'chapter-02-11-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Starke Bullen kaufen günstig und starke Bären verkaufen höher.',
          'Wiederholte Schlusskurse weg vom Tief zeigen veränderte Orderbereitschaft.',
          'Dieses Verhalten kann einen Trend in eine Trading Range überführen.',
          'Wahrscheinlichkeiten werden fortlaufend neu bewertet – bis hin zur kompletten Richtungsänderung.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-02.lesson-12',
    title: 'Dojis können gemeinsam trenden',
    summary:
      'Warum ein einzelner Doji Balance zeigt, eine steigende Folge von Dojis aber klaren Kaufdruck ausdrücken kann.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Kapitel 2 · Doji als Ein-Bar-Range',
    sourceAnchors: [
      'Kleinere Zeitrahmenbewegungen innerhalb eines Dojis',
      'Dojis als kurze Phase zweiseitigen Handels',
      'Seitwärtsreaktion nach Balancebars',
      'Steigende Schlusskurse, Hochs und Tiefs einer Doji-Folge',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-12-explain',
        type: 'explanation',
        eyebrow: 'Balance mit Richtung',
        title: 'Der einzelne Bar und die Sequenz können verschiedene Aussagen haben',
        paragraphs: [
          'Während ein Doji entsteht, läuft auf einer kleineren Zeitebene meist erst eine Bewegung in eine Richtung und anschließend eine Gegenbewegung zurück. Innerhalb des Bars gab es also einen kleinen Kauf- oder Verkaufsklimax und danach den Versuch der Gegenseite. Das Ergebnis ist ein Schluss nahe der Eröffnung: zweiseitiger Handel.',
          'Darum lässt sich ein Doji als Ein-Bar-Range behandeln. Er führt häufig zumindest kurz zu weiterer Balance, weil sowohl Käufer als auch Verkäufer gerade gezeigt haben, dass sie handeln können. Daraus folgt jedoch keine automatische Umkehr und auch keine Pflicht, dass der Markt längere Zeit seitwärts bleibt.',
          'Mehrere Dojis können als Gruppe deutlich gerichtet sein. Steigen ihre Schlusskurse nacheinander, liegen die meisten Hochs höher und bleiben auch die Tiefs zunehmend höher, dann wandert die gesamte Balancezone nach oben. Jeder einzelne Bar ist umkämpft, aber die Käufer gewinnen von Auktion zu Auktion Preisgebiet.',
          'Du analysierst deshalb auf zwei Ebenen: Kontrolle innerhalb des Bars und Fortschritt der ganzen Sequenz. „Dojis bedeuten keinen Trend“ ist nur auf die isolierte Kerze bezogen und wird falsch, sobald die Reihe klare Trendmerkmale besitzt.',
        ],
        callout:
          'Ein Patt pro Runde kann trotzdem eine Mannschaft nach vorn tragen, wenn jedes neue Patt höher stattfindet.',
      },
      {
        id: 'chapter-02-12-diagram',
        type: 'diagram',
        title: 'Vier ausgeglichene Bars wandern nach oben',
        scenario: 'trending-dojis',
        caption:
          'Die Körper bleiben klein, während Schlusskurse, Hochs und Tiefs schrittweise steigen.',
        observations: [
          'Jeder Bar allein zeigt nur geringe Schlusskontrolle.',
          'Höhere Tiefs zeigen, dass Verkäufer immer weniger Abwärtsstrecke erhalten.',
          'Höhere Hochs und Schlusskurse belegen wachsenden Kaufdruck.',
          'Die Sequenz ist bullisch, obwohl kein einzelner Bar stark aussieht.',
        ],
      },
      {
        id: 'chapter-02-12-question',
        type: 'question',
        title: 'Wann wird eine Doji-Reihe bullisch?',
        prompt:
          'Vier Dojis besitzen kleine Körper. Ihre Schlusskurse, Hochs und Tiefs steigen jedoch jeweils an. Was ist die beste Einordnung?',
        options: [
          {
            id: 'trend-sequence',
            label: 'Eine bullisch trendende Sequenz mit Kaufdruck',
            explanation:
              'Richtig. Die Lage der ganzen Bars zeigt gerichteten Fortschritt trotz kleiner Körper.',
          },
          {
            id: 'no-info',
            label: 'Vollständig richtungslos, weil alle Bars Dojis sind',
            explanation:
              'Die steigenden Extreme und Schlusskurse enthalten klare Sequenzinformation.',
          },
          {
            id: 'bearish',
            label: 'Bearisch, weil kein großer bullischer Körper vorkommt',
            explanation:
              'Kaufdruck kann sich über mehrere kleine Fortschritte statt über einen großen Körper zeigen.',
          },
        ],
        correctOptionId: 'trend-sequence',
      },
      {
        id: 'chapter-02-12-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein Doji enthält auf kleinerer Ebene Bewegung in beide Richtungen.',
          'Er ist funktional eine Ein-Bar-Range und führt oft kurz zu weiterem zweiseitigem Handel.',
          'Eine Folge von Dojis kann über höhere Hochs, Tiefs und Schlusskurse trenden.',
          'Baranalyse und Sequenzanalyse müssen gleichzeitig stimmen.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-02.lesson-13',
    title: 'Chartfall 2.1: Nahe genug ist handelbar',
    summary:
      'Wie Dojis über verschiedene Märkte vergleichbar bleiben und ein riesiger später Bullenbar in eine Zwei-Bar-Umkehr kippen kann.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 2 · Chartfall 2.1',
    sourceAnchors: [
      'Viele perfekte Dojis im kurzfristigen Future-Chart',
      'Keine exakten Dojis im langfristigen Aktienchart',
      'Funktionaler Doji als hochwertiger Signalbar',
      'Später großer Bullenbar mit bearischem Gegenbar',
      'Zweiseitiger Handel nach Aufwärts- und Abwärtsspike',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-13-explain',
        type: 'explanation',
        eyebrow: 'Eigenständige Rekonstruktion · Fall 2.1',
        title: 'Der Marktmaßstab entscheidet – danach entscheidet die Folge',
        paragraphs: [
          'Der erste Buchfall stellt zwei sehr unterschiedliche Charts nebeneinander. In einem kurzfristigen Future-Chart entstehen selbst innerhalb eines Bullenmarkts zahlreiche Bars mit exakt gleichem Open und Close. Im langfristigen Aktienchart gibt es keinen einzigen mathematisch perfekten Doji, obwohl mehrere Kerzen optisch dieselbe Balancefunktion besitzen.',
          'Ein besonders kleiner relativer Körper im Aktienchart funktioniert dort als Signalbar, obwohl zwischen Eröffnung und Schluss noch ein merklicher Geldbetrag liegt. Eine starre Definition würde die nützliche Information verwerfen: Der Markt hatte nach einer langen Bewegung keine klare Schlusskontrolle mehr.',
          'Später erscheint in demselben größeren Kontext ein außergewöhnlich großer bullischer Bar. Er kann die letzten verspäteten Käufer und Short-Eindeckungen bündeln. Der direkt folgende große bearische Bar zeigt, dass oberhalb keine dauerhafte Nachfrage mehr übrig ist. Zusammen bilden beide Bars auf einer höheren Auflösung eine kompakte Umkehrstruktur.',
          'Nach einem Spike aufwärts und einem Spike abwärts besitzen beide Seiten Beweise. Häufig folgt deshalb eine Trading Range, bis eine Seite erneut akzeptierte Distanz erzeugt. Im beschriebenen Fall entstand innerhalb dieser Balance ein tieferes Hoch über mehrere Bars.',
        ],
        callout:
          'Erst relativ klassifizieren, dann die Folge lesen: Balancebar, Klimaxbar und Umkehrbar sind Funktionen im Kontext.',
      },
      {
        id: 'chapter-02-13-diagram',
        type: 'diagram',
        title: 'Später Kaufklimax und Zwei-Bar-Umkehr',
        scenario: 'late-buy-climax',
        caption:
          'Die synthetische Grafik übernimmt nur die Lernlogik: später außergewöhnlicher Bullenbar, kräftiger Gegenbar und anschließende Balance.',
        observations: [
          'Der lange Vorlauf macht den riesigen bullischen Bar verdächtiger als am Trendbeginn.',
          'Der bearische Gegenbar entzieht dem Hoch die Akzeptanz.',
          'Auf höherer Zeitebene können beide Bars wie ein einzelner Reversal-Bar erscheinen.',
          'Nach zwei gegensätzlichen Spikes ist eine Range plausibler als sofortige Gewissheit.',
        ],
      },
      {
        id: 'chapter-02-13-question',
        type: 'question',
        title: 'Was lehrt der Marktvergleich?',
        prompt:
          'Ein langfristiger Aktienbar hat einen absolut größeren Körper als viele Intraday-Bars, ist relativ zu seiner Handelsspanne aber winzig. Welche Information ist entscheidend?',
        options: [
          {
            id: 'relative-function',
            label: 'Seine relative Balancefunktion im eigenen Chart',
            explanation:
              'Richtig. Absolute Beträge verschiedener Instrumente und Zeitrahmen sind nicht direkt vergleichbar.',
          },
          {
            id: 'absolute-money',
            label: 'Nur der absolute Geldunterschied',
            explanation:
              'Der absolute Betrag ignoriert Preisniveau, Volatilität und Zeitrahmen.',
          },
          {
            id: 'perfect-only',
            label: 'Nur exakte Gleichheit von Open und Close',
            explanation:
              'Damit würdest du funktional gleichartige Balancebars in manchen Märkten vollständig übersehen.',
          },
        ],
        correctOptionId: 'relative-function',
      },
      {
        id: 'chapter-02-13-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Perfekte Dojis treten je nach Marktmaßstab sehr unterschiedlich häufig auf.',
          'Ein relativ kleiner Körper kann auch ohne exakte Preisgleichheit als Doji funktionieren.',
          'Ein riesiger später Trendbar kann den letzten Kaufdruck bündeln statt einen neuen Trend zu starten.',
          'Gegensätzliche Spikes führen häufig zunächst zu zweiseitigem Handel.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-02.lesson-14',
    title: 'Chartfall 2.2: Der Kontext benennt den Bar',
    summary:
      'Warum derselbe kleine Körper an einer Stelle als Doji und an einer anderen als kleiner Trendbar sinnvoll eingeordnet wird.',
    durationMinutes: 10,
    xp: 35,
    sourceUnit: 'Kapitel 2 · Chartfall 2.2',
    sourceAnchors: [
      'Lockere Markierung intraday auftretender Dojis',
      'Kleiner Körper als Doji oder Trendbar je nach Umgebung',
      'Praktischer Zweck der Unterscheidung',
      'Kontrolle einer Seite im Gegensatz zum Patt',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-02-14-explain',
        type: 'explanation',
        eyebrow: 'Eigenständige Rekonstruktion · Fall 2.2',
        title: 'Die Grenze darf bewusst unscharf bleiben',
        paragraphs: [
          'Der Intraday-Fall markiert zahlreiche Bars mit kleinen Körpern als Dojis. Einige davon könnten genauso gut kleine Trendbars heißen. Diese Mehrdeutigkeit ist kein Fehler des Systems, sondern eine Erinnerung daran, dass die Kategorien Werkzeuge und keine Naturgesetze sind.',
          'In einer ruhigen Sequenz aus noch kleineren Bars kann ein bestimmter Körper merklichen Fortschritt zeigen und als Trendbar nützlich sein. Zwischen großen Bars mit kräftigen Körpern zeigt derselbe absolute Körper kaum Kontrolle und wird sinnvoller als Doji gelesen.',
          'Die Unterscheidung verfolgt nur einen Zweck: schnell zu erkennen, ob eine Seite im betreffenden Zeitfenster Kontrolle durchsetzte oder ob ein Patt entstand. Wenn beide Begriffe zur fast gleichen Handelsentscheidung führen, musst du keine Scheingenauigkeit erzwingen.',
          'Nützliche Sprache bleibt nah an der Entscheidung. „Kleiner bullischer Körper, aber viel Überlappung und kein Anschluss“ ist häufig wertvoller als die Behauptung, der Bar gehöre exakt in nur eine Schublade.',
        ],
        callout:
          'Wenn die Grenze knapp ist, beschreibe Stärke und Kontext – nicht die Sicherheit des Labels.',
      },
      {
        id: 'chapter-02-14-diagram',
        type: 'diagram',
        title: 'Gleicher Körper, andere Nachbarschaft',
        scenario: 'contextual-doji',
        caption:
          'Links sticht der Körper aus einer sehr ruhigen Umgebung heraus. Rechts wirkt er zwischen großen Trendbars wie eine Pause.',
        observations: [
          'Absolute Körpergröße allein reicht für die Klassifizierung nicht aus.',
          'Nachbarbars definieren den lokalen Maßstab.',
          'Überlappung und Anschluss zeigen, ob der Fortschritt relevant war.',
          'Eine unscharfe Einordnung darf zu „abwarten“ führen.',
        ],
      },
      {
        id: 'chapter-02-14-question',
        type: 'question',
        title: 'Was ist bei Grenzfällen sinnvoll?',
        prompt:
          'Ein Bar könnte je nach Definition sowohl kleiner Trendbar als auch Doji sein. Wie gehst du vor?',
        options: [
          {
            id: 'describe',
            label: 'Relative Stärke, Überlappung und Anschluss beschreiben',
            explanation:
              'Richtig. Damit behältst du die entscheidungsrelevante Information ohne falsche Präzision.',
          },
          {
            id: 'force',
            label: 'Ein Etikett erzwingen und den Kontext ignorieren',
            explanation:
              'Die Scheingenauigkeit verbessert weder Wahrscheinlichkeit noch Ausführung.',
          },
          {
            id: 'discard',
            label: 'Den gesamten Chart wegen des Grenzfalls verwerfen',
            explanation:
              'Mehrdeutige Bars sind normal und können mit Folgebewegung und Kontext verarbeitet werden.',
          },
        ],
        correctOptionId: 'describe',
      },
      {
        id: 'chapter-02-14-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Doji und kleiner Trendbar besitzen keine überall identische harte Grenze.',
          'Der lokale Maßstab entsteht aus Markt, Zeitrahmen und Nachbarbars.',
          'Das Label soll Kontrolle oder Patt schnell erfassbar machen.',
          'Bei Grenzfällen ist eine präzise Beschreibung besser als ein erzwungener Name.',
        ],
      },
    ],
  },
] satisfies Lesson[];
