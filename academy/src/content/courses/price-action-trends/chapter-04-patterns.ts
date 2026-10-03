import type { Lesson } from '../../types';

export const chapterFourPatternLessons = [
  {
    id: 'price-action-trends.chapter-04.lesson-06',
    title: 'Fortsetzungssignale brauchen Initiative und Anschluss',
    summary:
      'Wie Trendbars, kleine Pausen, Kanal-Pullbacks und Breakout-Tests die vorhandene Richtung fortsetzen können.',
    durationMinutes: 9,
    xp: 40,
    sourceUnit: 'Kapitel 4 · Fortsetzungs-Setups',
    sourceAnchors: [
      'Starker Bull- oder Bear-Trendbar am Ende eines Spikes als Fortsetzungssignal',
      'Jede Pause und jeder Pullback innerhalb einer Spike-Phase als mögliches Setup',
      'Limit-Einstiege an Bars eines Trendkanals',
      'Fortsetzung benötigt Ausbruch und Follow-through',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-06-explain',
        type: 'explanation',
        eyebrow: 'Setup-Familie · Fortsetzung',
        title: 'Die Pause unterbricht den Trend, ohne ihn automatisch zu beenden',
        paragraphs: [
          'In einer kräftigen Spike-Phase kann schon ein kleiner Pause-Bar oder ein kurzer Pullback die nächste Fortsetzung vorbereiten. Die vorherige Initiative ist so deutlich, dass die Gegenseite zunächst kaum Raum gewinnt. Der Trade setzt darauf, dass die dominante Seite nach der Pause wieder aggressiv wird.',
          'Auch ein starker Trendbar nahe dem aktuellen Extrem kann ein Fortsetzungssignal sein. Entscheidend ist nicht allein seine Größe, sondern ob er aus einer passenden Struktur ausbricht und der Markt außerhalb dieser Struktur weiterhandelt.',
          'Im Kanal sind die Pullbacks meist größer und die Bars überlappen stärker. Erfahrene Trader können dort mit Limit-Orders arbeiten: im Aufwärtskanal am oder unter einem vorherigen Bar kaufen, im Abwärtskanal am oder über einem vorherigen Bar verkaufen. Für Anfänger lässt sich der Stop-Einstieg nach einem klaren Signal leichter kontrollieren.',
          'Auch ein Breakout-Pullback ist ein Fortsetzungs-Setup. Der Markt verlässt eine Grenze, kehrt zu ihr zurück und zeigt dort, dass die alte Range den Preis nicht dauerhaft zurückgewinnt. Erst die erneute Bewegung in Ausbruchsrichtung bestätigt den Test.',
        ],
        callout:
          'Fortsetzung heißt nicht „blind hinterherlaufen“: Initiative, sinnvolle Pause und erneuter Follow-through müssen zusammenpassen.',
      },
      {
        id: 'chapter-04-06-diagram',
        type: 'diagram',
        title: 'Drei Wege zur Trendfortsetzung',
        scenario: 'continuation-setup-map',
        caption:
          'Spike-Pause, Kanal-Pullback und Breakout-Test nutzen dieselbe Grundidee: Die bestehende Richtung übernimmt nach einer Unterbrechung erneut.',
        observations: [
          'Im Spike kann eine sehr kleine Pause als Setup genügen.',
          'Im Kanal wird ein Rücklauf innerhalb der weiter intakten Struktur gehandelt.',
          'Der Breakout-Pullback prüft die überwundene Grenze von der neuen Seite.',
          'Ohne erneuten Anschluss bleibt jede Variante nur ein möglicher Fortsetzungsversuch.',
        ],
      },
      {
        id: 'chapter-04-06-question',
        type: 'question',
        title: 'Was macht die Pause handelbar?',
        prompt:
          'Nach einem starken Bull-Spike erscheint ein kleiner Pause-Bar. Welche zusätzliche Information verbessert das Long-Setup am stärksten?',
        options: [
          {
            id: 'follow',
            label: 'Ausbruch nach oben mit bullischem Follow-through',
            explanation:
              'Richtig. Die dominante Seite zeigt damit, dass die Pause tatsächlich nur eine Unterbrechung war.',
          },
          {
            id: 'name',
            label: 'Ein möglichst komplizierter Mustername',
            explanation:
              'Ein Name ersetzt weder Auslösung noch Anschluss in Trendrichtung.',
          },
          {
            id: 'counter',
            label: 'Ein sofortiger starker Breakout gegen den Spike',
            explanation:
              'Das wäre neue Gegenevidenz und würde die Fortsetzungsthese schwächen.',
          },
        ],
        correctOptionId: 'follow',
      },
      {
        id: 'chapter-04-06-recap',
        type: 'recap',
        title: 'Fortsetzung in kleinen Schritten',
        points: [
          'Starke Initiative erlaubt kleine Pausen als Setup.',
          'Kanäle bieten wiederholte Pullbacks, aber mehr Überlappung.',
          'Breakout-Pullbacks testen die Akzeptanz außerhalb einer alten Grenze.',
          'Auslösung und Follow-through trennen Versuch und erfolgreiche Fortsetzung.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-07',
    title: 'Der Ein-Bar-Reversal zeigt Ablehnung an einem Extrem',
    summary:
      'Wie ein einzelner Bar eine Gegenbewegung vorbereitet und warum seine Lage wichtiger ist als seine Form.',
    durationMinutes: 8,
    xp: 35,
    sourceUnit: 'Kapitel 4 · Ein-Bar-Reversal',
    sourceAnchors: [
      'Ein-Bar-Reversal als mögliche Umkehrformation',
      'Reversal kann einen Trend oder lediglich einen Pullback beenden',
      'Starker Schluss weg vom getesteten Extrem',
      'Auslösung jenseits des Reversal-Bars',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-07-explain',
        type: 'explanation',
        eyebrow: 'Umkehr in einem Bar',
        title: 'Der Bar weist einen Preis zurück – mehr ist zunächst nicht bewiesen',
        paragraphs: [
          'Ein bullischer Ein-Bar-Reversal handelt erst tiefer, wird dann gekauft und schließt deutlich über seinem Tief. Ein bärischer Reversal-Bar macht das Gegenteil: Er testet höhere Preise und schließt deutlich darunter. Körper, Tails und Schlussposition zeigen, welche Seite den letzten Teil des Bars kontrolliert hat.',
          'Diese sichtbare Abweisung kann den Beginn einer großen Trendumkehr markieren. Häufiger beendet sie aber nur einen Pullback und führt den übergeordneten Trend fort. Ein bullischer Reversal-Bar in einem Pullback im Bullenmarkt bedeutet deshalb funktional etwas anderes als derselbe Bar gegen einen starken Bärentrend.',
          'Der Bar selbst eröffnet noch keinen Trade. Ein Buy-Stop über einem bullischen Reversal-Bar oder ein Sell-Stop unter einem bärischen Reversal-Bar verlangt einen kleinen Fortschritt in die erwartete Richtung. Wird die Grenze nicht erreicht, bleibt die Umkehridee unbestätigt.',
          'Je mehr der Trade gegen den bestehenden Trend läuft, desto wichtiger werden eine überzeugende Abweisung, eine gute Testzone und anschließender Anschluss.',
        ],
        callout:
          'Ein Reversal-Bar zeigt Ablehnung. Ob daraus ein Pullback-Ende oder eine echte Trendumkehr wird, entscheidet der größere Chart.',
      },
      {
        id: 'chapter-04-07-diagram',
        type: 'diagram',
        title: 'Bullischer und bearisher Ein-Bar-Reversal',
        scenario: 'one-bar-reversal-setup',
        caption:
          'Beide Bars weisen ein Extrem zurück. Die gestrichelte Grenze zeigt, wo der geplante Stop-Einstieg zusätzliche Bestätigung verlangt.',
        observations: [
          'Der Tail zeigt, dass das getestete Extrem nicht bis zum Schluss gehalten wurde.',
          'Der Körper und Schluss zeigen die späte Kontrolle der Gegenseite.',
          'Der Einstieg liegt außerhalb des Reversal-Bars.',
          'Trend und Lage entscheiden, wie viel Gewicht der Form zukommt.',
        ],
      },
      {
        id: 'chapter-04-07-question',
        type: 'question',
        title: 'Was beweist der Reversal-Bar?',
        prompt:
          'Ein bullischer Reversal-Bar entsteht mitten in einem starken Bärentrend. Welche Aussage ist korrekt?',
        options: [
          {
            id: 'rejection',
            label: 'Er zeigt Ablehnung, aber noch keinen bestätigten Bullenmarkt',
            explanation:
              'Richtig. Gegen den Trend werden zusätzliche Struktur und Follow-through benötigt.',
          },
          {
            id: 'guarantee',
            label: 'Der Bärentrend ist garantiert beendet',
            explanation:
              'Ein einzelner Bar kann auch nur einen kurzen Pullback auslösen.',
          },
          {
            id: 'irrelevant',
            label: 'Der Bar besitzt überhaupt keine Information',
            explanation:
              'Er zeigt eine Zurückweisung, deren Bedeutung jedoch vom Kontext abhängt.',
          },
        ],
        correctOptionId: 'rejection',
      },
      {
        id: 'chapter-04-07-recap',
        type: 'recap',
        title: 'Eine Bar, begrenzte Aussage',
        points: [
          'Ein-Bar-Reversals weisen ein Extrem zurück.',
          'Sie können Trendwende oder Pullback-Ende vorbereiten.',
          'Der Stop-Einstieg verlangt Fortschritt außerhalb des Bars.',
          'Countertrend benötigt deutlich mehr Kontext als With-trend.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-08',
    title: 'Beim Zwei-Bar-Reversal wechselt die Kontrolle sichtbar',
    summary:
      'Wie ein zweiter Bar den ersten fast zurücknimmt und daraus eine handelbare Kontrollübergabe entsteht.',
    durationMinutes: 8,
    xp: 35,
    sourceUnit: 'Kapitel 4 · Zwei-Bar-Reversal',
    sourceAnchors: [
      'Zwei-Bar-Reversal als Umkehrformation',
      'Zweiter Bar bewegt sich kräftig gegen den ersten',
      'Bullische und bearishe Spiegelstruktur',
      'Bedeutung erst durch Lage und nachfolgenden Ausbruch',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-08-explain',
        type: 'explanation',
        eyebrow: 'Umkehr in zwei Bars',
        title: 'Der zweite Bar beantwortet die Initiative des ersten',
        paragraphs: [
          'Ein bullisches Zwei-Bar-Reversal beginnt mit einem deutlichen Bear-Bar. Der nächste Bar wird stark gekauft und nimmt einen großen Teil der vorherigen Abwärtsbewegung zurück. Bei der bärischen Variante folgt auf einen Bull-Bar eine kräftige Verkaufsantwort.',
          'Die Abfolge zeigt mehr als ein einzelner Doji: Eine Seite bekommt zunächst Raum, kann ihre Preise aber nicht verteidigen. Die Gegenseite antwortet kurz darauf mit vergleichbarer oder größerer Initiative.',
          'Perfekte Symmetrie brauchst du nicht. Die Bars dürfen unterschiedlich groß sein und sich überlappen. Wichtiger sind Lage, Schlusskurse und die Frage, ob der zweite Bar vom ersten wirklich genug zurückerobert.',
          'Auch dieses Muster kann einen ganzen Trend oder nur einen Pullback umkehren. Der Einstieg außerhalb der Zweierstruktur und der anschließende Follow-through bleiben entscheidend.',
        ],
        callout:
          'Zwei-Bar-Reversal heißt: erste Initiative, schnelle Gegenantwort. Erst der Kontext sagt, welche Marktphase dadurch endet.',
      },
      {
        id: 'chapter-04-08-diagram',
        type: 'diagram',
        title: 'Zwei spiegelbildliche Kontrollwechsel',
        scenario: 'two-bar-reversal-setup',
        caption:
          'Der zweite Bar löscht einen großen Teil des ersten. Die Order wartet außerhalb der gemeinsamen Struktur auf Bestätigung.',
        observations: [
          'Bar 1 zeigt zunächst klare Initiative.',
          'Bar 2 nimmt diese Bewegung schnell zurück.',
          'Die gemeinsame Range ist wichtiger als perfekte Kerzensymmetrie.',
          'Ein Breakout außerhalb beider Bars aktiviert die Umkehrthese.',
        ],
      },
      {
        id: 'chapter-04-08-question',
        type: 'question',
        title: 'Was ist die Kerninformation?',
        prompt:
          'Auf einen starken Bear-Bar folgt sofort ein ähnlich starker Bull-Bar. Was macht die Folge als Reversal interessant?',
        options: [
          {
            id: 'answer',
            label: 'Die Käufer nehmen die vorherige Verkäuferkontrolle schnell zurück',
            explanation:
              'Richtig. Die schnelle Gegenantwort ist die zentrale Information der Zweierfolge.',
          },
          {
            id: 'colors',
            label: 'Zwei verschiedene Farben garantieren eine Umkehr',
            explanation:
              'Viele gegensätzliche Bars entstehen in Ranges ohne nachhaltige Umkehr.',
          },
          {
            id: 'ignore',
            label: 'Der erste Bar spielt danach keine Rolle mehr',
            explanation:
              'Seine Range und Initiative bilden den Maßstab für die Gegenantwort.',
          },
        ],
        correctOptionId: 'answer',
      },
      {
        id: 'chapter-04-08-recap',
        type: 'recap',
        title: 'Die Zweierfolge lesen',
        points: [
          'Bar 1 schafft Initiative, Bar 2 beantwortet sie.',
          'Der zweite Bar sollte einen wesentlichen Teil des ersten zurücknehmen.',
          'Formen dürfen ungleich und überlappend sein.',
          'Lage, Ausbruch und Follow-through bestimmen die Qualität.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-09',
    title: 'Der Drei-Bar-Reversal zeigt Abbremsen und Übernahme',
    summary:
      'Wie drei Bars den Übergang von nachlassender Initiative zu einer kräftigen Gegenbewegung gliedern.',
    durationMinutes: 8,
    xp: 35,
    sourceUnit: 'Kapitel 4 · Drei-Bar-Reversal',
    sourceAnchors: [
      'Drei-Bar-Reversal als Umkehrformation',
      'Nachlassende erste Richtung vor Gegeninitiative',
      'Mittlerer Bar als Übergang oder Pause',
      'Dritter Bar übernimmt sichtbar in Gegenrichtung',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-09-explain',
        type: 'explanation',
        eyebrow: 'Umkehr in drei Bars',
        title: 'Der Markt benötigt einen zusätzlichen Übergangsschritt',
        paragraphs: [
          'Ein Drei-Bar-Reversal verteilt den Kontrollwechsel auf drei Abschnitte. Der erste Bar setzt die alte Richtung fort, der mittlere Bar zeigt weniger Fortschritt oder Balance, und der dritte Bar bricht kräftig in Gegenrichtung aus.',
          'Bei einer bullischen Folge verlieren die Verkäufer zuerst an Effizienz, bevor die Käufer deutlich übernehmen. Bei einer bärischen Folge lässt der Kaufdruck nach, und ein starker Bear-Bar beendet die Sequenz. Der mittlere Bar muss kein perfekter Doji sein; seine Aufgabe ist die sichtbare Unterbrechung.',
          'Der zusätzliche Bar macht das Muster nicht automatisch besser als ein Ein- oder Zwei-Bar-Reversal. Er zeigt nur einen langsameren Übergang. In einem starken Trend können drei kleine Gegenbars trotzdem nur einen unbedeutenden Pullback bilden.',
          'Die Auslösung jenseits der Struktur und der Anschluss in der neuen Richtung entscheiden, ob der Markt den Übergang akzeptiert.',
        ],
        callout:
          'Zähl nicht bloß drei Kerzen. Such die Funktionsfolge: alter Druck, Pause, überzeugende Gegeninitiative.',
      },
      {
        id: 'chapter-04-09-diagram',
        type: 'diagram',
        title: 'Druck, Übergang und Übernahme',
        scenario: 'three-bar-reversal-setup',
        caption:
          'Die bullische und bearishe Folge zeigen denselben Dreischritt mit vertauschten Marktseiten.',
        observations: [
          'Bar 1 gehört noch zur bisherigen Richtung.',
          'Bar 2 reduziert den Nettofortschritt und schafft einen Übergang.',
          'Bar 3 zeigt die neue Initiative.',
          'Die Drei-Bar-Folge bleibt ohne passenden Kontext nur ein mögliches Setup.',
        ],
      },
      {
        id: 'chapter-04-09-question',
        type: 'question',
        title: 'Welche Funktion besitzt Bar 2?',
        prompt:
          'In einer bullischen Drei-Bar-Umkehr folgt auf einen Bear-Bar ein kleiner neutraler Bar und danach ein starker Bull-Bar. Was zeigt der mittlere Bar?',
        options: [
          {
            id: 'transition',
            label: 'Eine Unterbrechung der bisherigen Verkäuferinitiative',
            explanation:
              'Richtig. Er schafft den Übergang zwischen altem Druck und neuer Kaufinitiative.',
          },
          {
            id: 'guarantee',
            label: 'Bereits die garantierte vollständige Trendumkehr',
            explanation:
              'Die neue Richtung wird erst durch den dritten Bar und weitere Folgebewegung glaubwürdiger.',
          },
          {
            id: 'entry',
            label: 'Automatisch den Entry-Bar jedes Traders',
            explanation:
              'Einstiegsart und Auslösung hängen vom konkreten Plan ab.',
          },
        ],
        correctOptionId: 'transition',
      },
      {
        id: 'chapter-04-09-recap',
        type: 'recap',
        title: 'Drei Funktionen statt drei Farben',
        points: [
          'Der erste Bar trägt noch die alte Richtung.',
          'Der zweite zeigt Abbremsen oder Balance.',
          'Der dritte übernimmt kräftig in Gegenrichtung.',
          'Der Chartkontext wiegt stärker als die exakte Optik.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-10',
    title: 'Kleine Bars werden erst durch ihre Lage interessant',
    summary:
      'Warum ein kleiner oder innerer Bar am Rand einer großen Range mehr wert sein kann als derselbe Bar in ihrer Mitte.',
    durationMinutes: 8,
    xp: 35,
    sourceUnit: 'Kapitel 4 · Kleine Bars und Inside-Bars',
    sourceAnchors: [
      'Kleiner Bar als mögliches Signal',
      'Inside-Bar innerhalb der Range des Vorgängers',
      'Kleiner Bar nahe dem Hoch oder Tief eines großen Bars',
      'Kleiner Bar am Rand einer Trading Range',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-10-explain',
        type: 'explanation',
        eyebrow: 'Kleine Range, große Kontextfrage',
        title: 'Kompression besitzt ohne Standort keine feste Richtung',
        paragraphs: [
          'Ein Inside-Bar bleibt mit Hoch und Tief innerhalb der Range seines Vorgängers. Ein kleiner Bar kann auch knapp außerhalb liegen, schafft dann aber ebenfalls nur wenig neuen Raum. Beide zeigen kurzfristig weniger Bewegung und oft mehr Balance.',
          'Nahe dem oberen Rand eines großen Bars oder einer Trading Range kann diese Pause einen Breakout oder eine Abweisung vorbereiten. Am unteren Rand gilt dasselbe spiegelbildlich. In der Mitte fehlt dagegen oft ein klarer Preisvorteil für eine Seite.',
          'Die kleine Range bietet einen nahen Auslöser und oft einen klar definierbaren Stop. Das macht den Bar für den Handel interessant, beweist aber noch keinen positiven Erwartungswert. Enge Stops werden in zweiseitigen Märkten außerdem leicht ausgelöst.',
          'Beurteile deshalb zuerst Trend und Lage, dann die kleine Barform und zuletzt Breakout und Follow-through.',
        ],
        callout:
          'Klein heißt nur: wenig Range. Erst die Lage erklärt, ob daraus Pause, Reversal oder bedeutungsloses Rauschen wird.',
      },
      {
        id: 'chapter-04-10-diagram',
        type: 'diagram',
        title: 'Ein kleiner Inside-Bar an drei Orten',
        scenario: 'small-inside-context',
        caption:
          'Form und Größe bleiben gleich. Nur die Lage im großen Mutterbar verändert die denkbare Handelsfunktion.',
        observations: [
          'Am oberen Rand treffen Breakout- und Fade-Ideen aufeinander.',
          'In der Mitte fehlt meist eine günstige Referenz.',
          'Am unteren Rand kann ein Test oder Reversal vorbereitet werden.',
          'Die nächste Auslösung und Folgebewegung entscheidet zwischen den Szenarien.',
        ],
      },
      {
        id: 'chapter-04-10-question',
        type: 'question',
        title: 'Welcher Ort liefert mehr Information?',
        prompt:
          'Drei identische kleine Inside-Bars liegen oben, mittig und unten in einer breiten Range. Welcher ist isoliert betrachtet am wenigsten attraktiv?',
        options: [
          {
            id: 'middle',
            label: 'Der Inside-Bar in der Mitte',
            explanation:
              'Richtig. Ohne Rand oder Trendreferenz besitzt er den geringsten Standortvorteil.',
          },
          {
            id: 'upper',
            label: 'Der Inside-Bar am oberen Rand',
            explanation:
              'Dort existiert zumindest eine klare Breakout- oder Fade-Referenz.',
          },
          {
            id: 'lower',
            label: 'Der Inside-Bar am unteren Rand',
            explanation:
              'Auch dort existiert eine klare Test- und Reversal-Zone.',
          },
        ],
        correctOptionId: 'middle',
      },
      {
        id: 'chapter-04-10-recap',
        type: 'recap',
        title: 'Standort vor Größe',
        points: [
          'Inside-Bars bleiben innerhalb der vorherigen Range.',
          'Kleine Bars zeigen kurzfristige Balance oder Pause.',
          'Range-Ränder und Trendkontext geben der Kompression Bedeutung.',
          'Ein enger Stop allein macht noch keinen guten Trade.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-11',
    title: 'ii und iii verschachteln die Kompression',
    summary:
      'Wie zwei oder drei aufeinander bezogene Inside-Bars die sichtbare Range verengen und Orders an ihren Grenzen bündeln.',
    durationMinutes: 8,
    xp: 35,
    sourceUnit: 'Kapitel 4 · ii- und iii-Sequenzen',
    sourceAnchors: [
      'ii als Folge zweier Inside-Bars',
      'iii als Folge dreier Inside-Bars',
      'Zunehmend verschachtelte Bar-Ranges',
      'Breakout kann in beide Richtungen erfolgen',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-11-explain',
        type: 'explanation',
        eyebrow: 'Mehrfache Kompression',
        title: 'Die Grenzen rücken zusammen, die Richtung bleibt offen',
        paragraphs: [
          'Bei einem ii folgen zwei Inside-Bars aufeinander, und jeder bleibt innerhalb seines relevanten Vorgängers. Ein iii fügt eine dritte verschachtelte Range hinzu. Hochs und Tiefs rücken dadurch sichtbar zusammen.',
          'Die Folge zeigt, dass weder Käufer noch Verkäufer gerade weit kommen. Gleichzeitig können sich Stop-Orders knapp über und unter der engsten Range sammeln. Der nächste Grenzbruch kann deshalb schnell beschleunigen.',
          'Diese Beschleunigung ist nicht automatisch verlässlich. In einer Trading Range kann der erste Breakout scheitern und die Gegenseite auslösen. Im starken Trend hat ein Ausbruch mit dem Trend meist den besseren Ausgangskontext.',
          'Die saubere Lesart lautet daher: Kompression erkannt, beide Seiten eingeplant, Kontext gewichtet und erst nach Auslösung plus Anschluss bewertet.',
        ],
        callout:
          'ii und iii sagen sicher etwas über die schrumpfende Range – aber nichts Sicheres über die spätere Ausbruchsrichtung.',
      },
      {
        id: 'chapter-04-11-diagram',
        type: 'diagram',
        title: 'Zwei und drei verschachtelte Innenbars',
        scenario: 'ii-iii-compression',
        caption:
          'Die letzten Hochs und Tiefs liegen immer enger zusammen. Die gestrichelten Linien markieren die kleinste aktuelle Ausbruchsgrenze.',
        observations: [
          'Beim ii entstehen zwei Stufen der Einengung.',
          'Beim iii kommt eine dritte, noch kleinere Range hinzu.',
          'Stop-Orders können direkt außerhalb der engsten Struktur liegen.',
          'Ein Fehlausbruch bleibt in einer Trading Range jederzeit möglich.',
        ],
      },
      {
        id: 'chapter-04-11-question',
        type: 'question',
        title: 'Was steigt mit der Verschachtelung?',
        prompt:
          'Ein iii entsteht in einer engen Trading Range. Welche Erwartung ist angemessen?',
        options: [
          {
            id: 'potential',
            label: 'Ein Breakout wird wahrscheinlicher, seine Richtung und Haltbarkeit bleiben offen',
            explanation:
              'Richtig. Die Kompression definiert enge Grenzen, garantiert aber keine erfolgreiche Seite.',
          },
          {
            id: 'bull',
            label: 'Der Ausbruch muss nach oben erfolgen',
            explanation:
              'Inside-Sequenzen besitzen ohne Kontext keine feste Richtung.',
          },
          {
            id: 'safe',
            label: 'Jeder Breakout ist wegen des engen Stops sicher',
            explanation:
              'Gerade enge Ranges produzieren häufig schnelle Fehlausbrüche.',
          },
        ],
        correctOptionId: 'potential',
      },
      {
        id: 'chapter-04-11-recap',
        type: 'recap',
        title: 'Kompression ohne Prophezeiung',
        points: [
          'ii verschachtelt zwei Inside-Bars, iii drei.',
          'Die aktuelle Ausbruchsrange wird kleiner.',
          'Orders können sich direkt außerhalb der Grenzen bündeln.',
          'Trend, Range-Lage und Follow-through entscheiden über den Trade.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-12',
    title: 'ioi verbindet Kompression und Expansion',
    summary:
      'Wie Inside-, Outside- und erneut Inside-Bar einen schnellen Wechsel der Marktbreite erzeugen.',
    durationMinutes: 8,
    xp: 35,
    sourceUnit: 'Kapitel 4 · ioi-Sequenz',
    sourceAnchors: [
      'ioi als Inside-Outside-Inside-Folge',
      'Outside-Bar erweitert beide Grenzen',
      'Letzter Inside-Bar komprimiert erneut',
      'Stop-Setups auf beiden Seiten der Folge',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-12-explain',
        type: 'explanation',
        eyebrow: 'Inside–Outside–Inside',
        title: 'Der Markt wird eng, breit und sofort wieder eng',
        paragraphs: [
          'Die ioi-Folge beginnt mit einem Inside-Bar. Danach überschreitet ein Outside-Bar sowohl dessen Hoch als auch dessen Tief. Der dritte Bar bleibt wieder innerhalb des Outside-Bars. Kompression, zweiseitige Expansion und erneute Kompression folgen direkt aufeinander.',
          'Der Outside-Bar kann Stop-Orders beider Seiten auslösen. Findet danach keine Seite Anschluss, zeigt der letzte Inside-Bar, dass der Markt wieder in Balance fällt. Trader auf beiden Seiten können dann schon schlechte Positionen haben.',
          'Dadurch kann der nächste Ausbruch schnell werden, aber das Muster bleibt zweiseitig. In einem Trend ist die Trendrichtung im Vorteil; an einem Range-Rand kann auch eine Abweisung der Expansion sinnvoll sein.',
          'Die Reihenfolge ergibt eine kompakte Karte der jüngsten Auktion. Sie ersetzt nicht die Frage, wo das Muster liegt und welche Seite nach der Auslösung tatsächlich Follow-through bekommt.',
        ],
        callout:
          'ioi ist kein Richtungsgeheimnis. Es zeigt einen schnellen Wechsel zwischen Balance und zweiseitiger Expansion.',
      },
      {
        id: 'chapter-04-12-diagram',
        type: 'diagram',
        title: 'Die drei Phasen der ioi-Folge',
        scenario: 'ioi-sequence',
        caption:
          'Der Outside-Bar erweitert beide Seiten. Der letzte Inside-Bar zieht die nächste Entscheidung wieder in eine engere Range zusammen.',
        observations: [
          'Das erste i komprimiert die Ausgangsrange.',
          'Das o überschreitet Hoch und Tief und kann beide Stop-Seiten aktivieren.',
          'Das zweite i zeigt fehlenden unmittelbaren Anschluss.',
          'Der nächste Breakout benötigt Kontext und Folgebewegung.',
        ],
      },
      {
        id: 'chapter-04-12-question',
        type: 'question',
        title: 'Was macht den mittleren Bar besonders?',
        prompt:
          'Welche Funktion besitzt das „o“ in einer ioi-Folge?',
        options: [
          {
            id: 'expands',
            label: 'Es erweitert Hoch und Tief der vorherigen Range',
            explanation:
              'Richtig. Der Outside-Bar handelt auf beiden Seiten des Vorgängers.',
          },
          {
            id: 'contracts',
            label: 'Es komprimiert die Range ein zweites Mal',
            explanation:
              'Die erneute Kompression übernimmt der letzte Inside-Bar.',
          },
          {
            id: 'direction',
            label: 'Es legt die spätere Ausbruchsrichtung sicher fest',
            explanation:
              'Der Outside-Bar kann gerade Ausdruck starken zweiseitigen Handels sein.',
          },
        ],
        correctOptionId: 'expands',
      },
      {
        id: 'chapter-04-12-recap',
        type: 'recap',
        title: 'Eng, breit, wieder eng',
        points: [
          'ioi steht für Inside–Outside–Inside.',
          'Der mittlere Bar erweitert beide Grenzen.',
          'Der letzte Bar zeigt erneute Kompression.',
          'Trend und Standort gewichten den nächsten Breakout.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-13',
    title: 'Outside und oo bedeuten Expansion, nicht Richtung',
    summary:
      'Warum ein oder zwei Outside-Bars große zweiseitige Ranges und besondere Ausführungsrisiken schaffen.',
    durationMinutes: 8,
    xp: 35,
    sourceUnit: 'Kapitel 4 · Outside- und oo-Sequenzen',
    sourceAnchors: [
      'Outside-Bar überschreitet Hoch und Tief des Vorgängers',
      'oo als zwei aufeinanderfolgende Outside-Bars',
      'Zweiter Outside-Bar kann noch größer werden',
      'Erhöhtes Risiko durch zweiseitige Expansion',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-13-explain',
        type: 'explanation',
        eyebrow: 'Range-Expansion',
        title: 'Mehr gehandelte Strecke kann mehr Unsicherheit bedeuten',
        paragraphs: [
          'Ein Outside-Bar handelt über dem Hoch und unter dem Tief seines Vorgängers. Er weitet damit beide Seiten der vorherigen Auktion aus. Buy-Stops und Sell-Stops können innerhalb desselben Bars ausgelöst werden.',
          'Bei einem oo folgt ein zweiter Outside-Bar, der wieder beide Grenzen überschreitet. Wird er noch größer, zeigt die Folge eine außergewöhnlich breite und aggressive Preisfindung. Das sieht dynamisch aus, kann aber beide Marktseiten mehrfach in die Falle locken.',
          'Die Schlussposition bleibt wichtig. Ein großer Outside-Bar mit Schluss nahe seinem Hoch hat eine andere kurzfristige Kontrolle als einer mit Schluss in der Mitte. Trotzdem braucht auch der starke Schluss einen passenden Standort und Anschluss.',
          'Große Ranges vergrößern die Stop-Distanzen und verschlechtern oft das Chance-Risiko-Verhältnis. Die Formation kann handelbar sein, verlangt aber mehr Vorsicht als eine saubere, kleine Signal-Bar-Struktur.',
        ],
        callout:
          'Outside zeigt Expansion. Erst Schluss, Kontext und Follow-through zeigen, ob daraus gerichtete Kontrolle entsteht.',
      },
      {
        id: 'chapter-04-13-diagram',
        type: 'diagram',
        title: 'Eine und zwei Expansionen',
        scenario: 'outside-oo-sequence',
        caption:
          'Beim oo erweitert der zweite Outside-Bar die bereits vergrößerte Range erneut. Dadurch steigen Bewegung und Risiko gleichzeitig.',
        observations: [
          'Ein o schafft ein neues Hoch und ein neues Tief.',
          'Ein oo wiederholt diese Expansion unmittelbar.',
          'Stops beider Seiten können in kurzer Folge ausgelöst werden.',
          'Eine größere Range ist nicht dasselbe wie eine klarere Richtung.',
        ],
      },
      {
        id: 'chapter-04-13-question',
        type: 'question',
        title: 'Was weißt du nach einem oo?',
        prompt:
          'Zwei aufeinanderfolgende Outside-Bars werden immer größer. Welche Aussage ist sicher?',
        options: [
          {
            id: 'range',
            label: 'Die kurzfristige Range hat sich zweimal auf beiden Seiten erweitert',
            explanation:
              'Richtig. Richtung und Qualität des nächsten Trades sind damit noch nicht festgelegt.',
          },
          {
            id: 'long',
            label: 'Long ist automatisch die richtige Richtung',
            explanation:
              'Outside-Bars können bullisch, bearisch oder stark zweiseitig schließen.',
          },
          {
            id: 'low-risk',
            label: 'Das Risiko ist wegen der großen Bars besonders klein',
            explanation:
              'Breite Bars vergrößern häufig die notwendige Stop-Distanz.',
          },
        ],
        correctOptionId: 'range',
      },
      {
        id: 'chapter-04-13-recap',
        type: 'recap',
        title: 'Expansion richtig einordnen',
        points: [
          'Outside-Bars überschreiten beide Grenzen des Vorgängers.',
          'oo wiederholt die Expansion ein zweites Mal.',
          'Beide Marktseiten können dabei gefangen werden.',
          'Große Range und hohe Dynamik verlangen strengere Risikoprüfung.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-14',
    title: 'Doppeltop und Doppeltief testen einen Bereich zweimal',
    summary:
      'Wie ein zweiter Hoch- oder Tieftest zeigt, ob eine bekannte Zone wieder hält oder am Ende bricht.',
    durationMinutes: 8,
    xp: 35,
    sourceUnit: 'Kapitel 4 · Doppeltop und Doppeltief',
    sourceAnchors: [
      'Doppeltop als mögliche Reversal-Grundlage',
      'Doppeltief als mögliche Reversal-Grundlage',
      'Tests müssen nicht tickgenau gleich sein',
      'Reaktion nach dem zweiten Test ist entscheidend',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-14-explain',
        type: 'explanation',
        eyebrow: 'Wiederholter Test',
        title: 'Die Zone zählt mehr als geometrische Perfektion',
        paragraphs: [
          'Ein Doppeltop entsteht, wenn der Markt einen früheren Hochbereich erneut testet und dort wieder verkauft wird. Ein Doppeltief testet einen früheren Tiefbereich und findet wieder Käufer. Die beiden Preise müssen nicht exakt gleich sein.',
          'Der zweite Test liefert neue Information. Ein schwächerer Durchbruch, ein Reversal-Bar oder fehlender Follow-through kann zeigen, dass die angreifende Seite den Bereich weiterhin nicht akzeptiert. Ein kräftiger Breakout mit Anschluss widerlegt dagegen die Reversal-Idee.',
          'In einer Trading Range gehören doppelte Tests zum normalen Verhalten an den Rändern. In einem Trend kann ein Doppeltief einen Pullback beenden oder ein Doppeltop nur eine kurze Korrektur auslösen. Auch hier entscheidet die übergeordnete Struktur über die Bedeutung.',
          'Der Trade beruht daher nicht auf zwei hübschen Punkten, sondern auf Test, Abweisung, Auslösung und Folgebewegung.',
        ],
        callout:
          'Doppeltop und Doppeltief sind Preiszonen mit zwei Prüfungen – keine millimetergenauen Buchstabenformen.',
      },
      {
        id: 'chapter-04-14-diagram',
        type: 'diagram',
        title: 'Zweiter Test, zweite Entscheidung',
        scenario: 'double-test-setup',
        caption:
          'Die markierten Tests liegen in derselben Zone. Erst die Reaktion nach dem zweiten Kontakt macht daraus ein mögliches Reversal-Setup.',
        observations: [
          'Der erste Test macht den Bereich sichtbar.',
          'Der zweite Test prüft, ob dort erneut Gegenseite eintritt.',
          'Kleine Preisabweichungen zerstören die Struktur nicht.',
          'Ein echter Breakout mit Follow-through hebt die Zurückweisungsthese auf.',
        ],
      },
      {
        id: 'chapter-04-14-question',
        type: 'question',
        title: 'Müssen beide Tiefs identisch sein?',
        prompt:
          'Der zweite Tieftest unterschreitet den ersten um wenige Ticks und dreht dann kräftig nach oben. Ist ein Doppeltief noch möglich?',
        options: [
          {
            id: 'yes-zone',
            label: 'Ja, weil Reaktionszone und Zurückweisung wichtiger sind',
            explanation:
              'Richtig. Price Action arbeitet mit Bereichen, nicht mit perfekter Geometrie.',
          },
          {
            id: 'no-exact',
            label: 'Nein, beide Tiefs müssen exakt denselben Tick besitzen',
            explanation:
              'Eine kleine Unter- oder Überschreitung kann sogar Teil eines Fehlausbruchs sein.',
          },
          {
            id: 'always-buy',
            label: 'Ja, und deshalb muss jeder zweite Test gekauft werden',
            explanation:
              'Ohne Zurückweisung und passenden Kontext bleibt der zweite Test riskant.',
          },
        ],
        correctOptionId: 'yes-zone',
      },
      {
        id: 'chapter-04-14-recap',
        type: 'recap',
        title: 'Zonen statt exakter Punkte',
        points: [
          'Doppeltops testen einen Hochbereich zweimal.',
          'Doppeltiefs testen einen Tiefbereich zweimal.',
          'Die Tests dürfen leicht unterschiedliche Preise besitzen.',
          'Zurückweisung und Follow-through entscheiden über die Formation.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-15',
    title: 'Ein gescheitertes Reversal wird zum Gegensignal',
    summary:
      'Wie ausgelöste Umkehrtrader in die Falle laufen und ihre Ausstiege die ursprüngliche Richtung verstärken können.',
    durationMinutes: 9,
    xp: 40,
    sourceUnit: 'Kapitel 4 · Gescheiterte Reversals',
    sourceAnchors: [
      'Gescheiterter Reversal-Versuch als Setup',
      'Reversal-Bar wird ausgelöst, erhält aber keinen Follow-through',
      'Gefangene Trader müssen aussteigen',
      'Fehlschlag kann Bewegung in Gegenrichtung verstärken',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-15-explain',
        type: 'explanation',
        eyebrow: 'Failure als Information',
        title: 'Die falsche Seite liefert nach dem Fehlschlag zusätzliche Orders',
        paragraphs: [
          'Ein Reversal-Setup kann zunächst korrekt ausgelöst werden und trotzdem sofort scheitern. Zum Beispiel kaufen Trader über einem bullischen Reversal-Bar, doch der Markt macht keinen weiteren Fortschritt und fällt unter die Struktur zurück.',
          'Diese neuen Longs sitzen jetzt in einer schlechten Position. Ihre Schutzstops und manuellen Ausstiege werden zu Verkaufsorders. Gleichzeitig erkennen Bären den fehlenden Kaufanschluss und eröffnen neue Shorts. Beides kann die Bewegung nach unten beschleunigen.',
          'Das Prinzip gilt spiegelbildlich für ein gescheitertes bärisches Reversal. Werden Shorts ausgelöst und der Markt dreht sofort über den Signalbereich, müssen sie zurückkaufen und können eine Rally verstärken.',
          'Nicht jeder kleine Rücklauf ist schon ein echter Fehlschlag. Du suchst eine klare Rückeroberung des Signalbereichs und idealerweise Anschluss der Gegenseite.',
        ],
        callout:
          'Der Fehlschlag verändert die Orderlage: Aus den ursprünglichen Reversal-Tradern kann Treibstoff für die Gegenseite werden.',
      },
      {
        id: 'chapter-04-15-diagram',
        type: 'diagram',
        title: 'Wenn das Reversal seine Trader fängt',
        scenario: 'contextual-failure-setups',
        caption:
          'Das erste Feld zeigt den zentralen Mechanismus. Die weiteren Felder ordnen ihn neben andere kontextabhängige Setups ein.',
        observations: [
          'Das Reversal wird zunächst attraktiv und kann Orders auslösen.',
          'Fehlender Follow-through schwächt die neue Richtung.',
          'Die Rückkehr durch den Signalbereich fängt die neuen Positionen.',
          'Ausstiege und neue Gegentrades wirken anschließend in dieselbe Richtung.',
        ],
      },
      {
        id: 'chapter-04-15-question',
        type: 'question',
        title: 'Wer verkauft nach dem Long-Fehlschlag?',
        prompt:
          'Ein bullisches Reversal wird ausgelöst und fällt sofort unter den Signalbereich zurück. Welche Orders können den Rückgang verstärken?',
        options: [
          {
            id: 'both',
            label: 'Long-Ausstiege und neue Short-Einstiege',
            explanation:
              'Richtig. Beide Ordergruppen verkaufen nach dem erkennbaren Fehlschlag.',
          },
          {
            id: 'only-buy',
            label: 'Ausschließlich weitere Buy-Stops',
            explanation:
              'Unter dem gescheiterten Bereich dominieren eher Ausstiegs- und Verkaufsorders.',
          },
          {
            id: 'none',
            label: 'Der Fehlschlag verändert keine Orders',
            explanation:
              'Gefangene Positionen müssen verwaltet werden und verändern gerade dadurch den Orderfluss.',
          },
        ],
        correctOptionId: 'both',
      },
      {
        id: 'chapter-04-15-recap',
        type: 'recap',
        title: 'Fehlschlag als Gegensignal',
        points: [
          'Ein ausgelöstes Reversal kann ohne Anschluss scheitern.',
          'Gefangene Trader erzeugen beim Ausstieg Gegenorders.',
          'Neue Trader können denselben Fehlschlag handeln.',
          'Eine klare Rückeroberung ist aussagekräftiger als ein kleiner Pullback.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.chapter-04.lesson-16',
    title: 'Auch ein Fortsetzungsversuch kann am reifen Trend scheitern',
    summary:
      'Wie ein neues Extrem ohne Anschluss die Effizienz eines späten Trends infrage stellt.',
    durationMinutes: 9,
    xp: 40,
    sourceUnit: 'Kapitel 4 · Gescheiterte Fortsetzungen',
    sourceAnchors: [
      'Gescheiterter Fortsetzungsversuch als Setup',
      'Fehlschlag eines High-1- oder Low-1-Versuchs im reifen Markt',
      'Neues Extrem ohne nachhaltigen Follow-through',
      'Trendalter und Standort als notwendiger Kontext',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-16-explain',
        type: 'explanation',
        eyebrow: 'Späte Trendphase',
        title: 'Der Markt schafft noch ein Extrem, aber kaum noch Fortschritt',
        paragraphs: [
          'In einem jungen, starken Trend sind gescheiterte Gegenbewegungen meist neue With-trend-Chancen. In einem schon weit gelaufenen Trend kann dagegen der nächste Fortsetzungsversuch zeigen, dass die dominante Seite an Effizienz verliert.',
          'Ein neues Hoch im Bullenmarkt oder ein neues Tief im Bärenmarkt reicht allein nicht. Kehrt der Breakout sofort zurück, findet er keinen Follow-through und liegt an einer wichtigen Zone, können späte Trendtrader in die Falle laufen.',
          'Auch einfache erste Versuche wie High 1 oder Low 1 können in einem reifen Markt scheitern. Entscheidend ist nicht das Kürzel, sondern dass eine erwartete Fortsetzung ausgelöst wird und danach keine Akzeptanz findet.',
          'Ein solcher Fehlschlag kann eine größere Korrektur oder Umkehr vorbereiten. Garantieren kann er sie nicht. Ohne Trendalter, Testzone und klare Gegenreaktion bleibt die bestehende Trendträgheit wichtig.',
        ],
        callout:
          'Ein neues Extrem beweist die Fortsetzung erst, wenn der Markt dort bleiben und weitere Preise durchsetzen kann.',
      },
      {
        id: 'chapter-04-16-diagram',
        type: 'diagram',
        title: 'Neues Extrem, kein Anschluss',
        scenario: 'failed-continuation-setup',
        caption:
          'Beide reifen Moves brechen noch einmal in Trendrichtung aus, verlieren aber direkt danach die neu erreichten Preise.',
        observations: [
          'Der alte Trend erreicht ein weiteres Extrem.',
          'Der Breakout erhält keinen überzeugenden Follow-through.',
          'Die schnelle Rückkehr fängt späte Trendfolger.',
          'Reife und Lage unterscheiden das Setup von einem normalen kleinen Pullback.',
        ],
      },
      {
        id: 'chapter-04-16-question',
        type: 'question',
        title: 'Wann wiegt der Fehlschlag schwerer?',
        prompt:
          'Welcher gescheiterte Bull-Breakout besitzt die stärkere Umkehrinformation?',
        options: [
          {
            id: 'mature',
            label: 'Der Breakout nach einem langen Move an einer Widerstandszone',
            explanation:
              'Richtig. Trendreife, Lage und fehlender Anschluss bündeln sich gegen die Fortsetzung.',
          },
          {
            id: 'young',
            label: 'Der erste kleine Rücklauf direkt nach einem starken neuen Bull-Spike',
            explanation:
              'In einem jungen Spike bleibt die Fortsetzungswahrscheinlichkeit häufig höher.',
          },
          {
            id: 'same',
            label: 'Beide sind unabhängig vom Kontext exakt gleich',
            explanation:
              'Trendalter und Standort verändern die Aussage des Fehlschlags wesentlich.',
          },
        ],
        correctOptionId: 'mature',
      },
      {
        id: 'chapter-04-16-recap',
        type: 'recap',
        title: 'Fortsetzung muss sich beweisen',
        points: [
          'Ein neues Extrem ohne Akzeptanz ist ein Warnsignal.',
          'Späte Trendfolger können durch die Rückkehr gefangen werden.',
          'Reifer Trend und wichtige Zone erhöhen die Bedeutung.',
          'Der Fehlschlag bereitet eine Umkehr vor, garantiert sie aber nicht.',
        ],
      },
    ],
  },
] satisfies Lesson[];
