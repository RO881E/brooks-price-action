import type { Lesson } from '../../types';

export const partOneBasicLessons = [
  {
    id: 'price-action-trends.part-01.lesson-01',
    title: 'Price Action beginnt beim kleinsten Schritt',
    summary:
      'Was mit Price Action und Tick gemeint ist – und warum schon kleine Veränderungen etwas verraten.',
    durationMinutes: 9,
    xp: 30,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Breite Definition von Price Action',
      'Zwei Bedeutungen des Begriffs Tick',
      'Kleine Informationen nicht vorschnell verwerfen',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-01-explain',
        type: 'explanation',
        eyebrow: 'Grundbegriff',
        title: 'Jede Preisänderung gehört zur Price Action',
        paragraphs: [
          'Price Action umfasst jede beobachtbare Veränderung des Preises – egal, ob du einen Tick-Chart, einen Fünf-Minuten-Chart oder einen Monatschart ansiehst. Gemeint sind also nicht nur auffällige Formationen. Auch ein unscheinbarer einzelner Preisschritt gehört zur selben laufenden Auktion.',
          'Das Wort Tick hat zwei Bedeutungen. Erstens ist ein Tick die kleinste erlaubte Preisänderung eines Marktes; beim ES sind das zum Beispiel 0,25 Indexpunkte. Zweitens kann Tick einen einzelnen ausgeführten Handel im Datenstrom meinen – auch dann, wenn dessen Preis genauso hoch ist wie der des Handels davor.',
          'Die weite Definition zwingt dich nicht, jede kleinste Bewegung zu handeln. Sie sorgt nur dafür, dass du eine Info nicht vorschnell als bedeutungslos abhakst, bevor du ihren Kontext geprüft hast. Eine winzige Überschreitung eines markanten Hochs kann belanglos sein – oder als sofort gescheiterter Ausbruch etwas Wichtiges sagen.',
          'Price Action ist deshalb zuerst eine Beobachtungssprache. Erst Ort, Abfolge, Zeitebene und Folgebewegung machen aus einer Preisänderung eine mögliche Handelsentscheidung.',
        ],
        callout:
          'Klein heißt nicht automatisch unwichtig. Die Bedeutung ergibt sich aus dem Verhältnis zum aktuellen Kontext.',
      },
      {
        id: 'part-01-01-diagram',
        type: 'diagram',
        title: 'Ein Bar verdichtet viele einzelne Preisereignisse',
        scenario: 'bar-anatomy',
        caption:
          'Open, High, Low und Close fassen zahlreiche einzelne Transaktionen zusammen. Je kleiner die Zeitebene, desto sichtbarer werden die Zwischenschritte.',
        observations: [
          'Ein Tick als Preisintervall ist eine feste Eigenschaft des Instruments.',
          'Ein Tick als Transaktion bezeichnet dagegen ein Ereignis im Handelsstrom.',
          'Der Bar speichert nur ausgewählte Eckpunkte; die Reihenfolge aller Transaktionen ist darin nicht vollständig enthalten.',
        ],
      },
      {
        id: 'part-01-01-question',
        type: 'question',
        title: 'Was zählt als Price Action?',
        prompt:
          'Der Markt handelt zweimal nacheinander zum gleichen Preis und steigt danach um den kleinstmöglichen Preisschritt. Welche Aussage ist richtig?',
        options: [
          {
            id: 'only-change',
            label: 'Nur der Preisanstieg ist ein Tick',
            explanation:
              'Als Preisintervall stimmt das teilweise. Im Transaktionsstrom können jedoch auch beide unveränderten Abschlüsse jeweils als Tick bezeichnet werden.',
          },
          {
            id: 'two-meanings',
            label: 'Tick kann Transaktion oder kleinstes Preisintervall bedeuten',
            explanation:
              'Richtig. Welche Bedeutung gemeint ist, ergibt sich aus dem Zusammenhang.',
          },
          {
            id: 'no-action',
            label: 'Solche kleinen Bewegungen gehören nicht zur Price Action',
            explanation:
              'Price Action beginnt bereits beim kleinsten beobachtbaren Preisereignis.',
          },
        ],
        correctOptionId: 'two-meanings',
      },
      {
        id: 'part-01-01-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Price Action umfasst jede Preisveränderung auf jeder Chartart und Zeitebene.',
          'Tick kann das kleinste Preisintervall oder eine einzelne Transaktion bedeuten.',
          'Kleine Bewegungen werden nicht automatisch gehandelt, aber zuerst im Kontext bewertet.',
          'Ein Bar ist eine Verdichtung und zeigt nicht den vollständigen Ablauf aller Trades.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-02',
    title: 'Zwei Seiten und ständig wechselnde Rollen',
    summary:
      'Wie Käufer, Verkäufer, Positionsauflösungen und neue Einstiege eine Bewegung gemeinsam antreiben.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Jeder Bar als potenzielles Long- und Short-Signal',
      'Verlustbegrenzung macht Käufer zu Verkäufern',
      'Neue Positionen und Eindeckungen im Bewegungszyklus',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-02-explain',
        type: 'explanation',
        eyebrow: 'Marktdynamik',
        title: 'Dieselbe Bewegung entsteht aus verschiedenen Aufträgen',
        paragraphs: [
          'Jeder abgeschlossene Bar kann von verschiedenen Marktteilnehmern gegensätzlich gelesen werden. Der eine sieht eine bullische Fortsetzung, der andere eine überdehnte Bewegung und sucht einen Short. Beide können gute Gründe haben – nur der weitere Verlauf zeigt, wer zunächst recht bekommt.',
          'Fällt der Preis gegen bestehende Käufer, ändert sich deren Rolle. Ein paar halten, andere kaufen nach, wieder andere schließen ihre Long-Position. Dieses Schließen läuft über einen Verkauf und verstärkt damit genau die Abwärtsbewegung, die den Verlust ausgelöst hat. Zu den Verkäufen der ausgestoppten Longs kommen neue Short-Einstiege dazu.',
          'Später kann sich derselbe Mechanismus umdrehen. Short-Trader nehmen Gewinne mit und müssen dafür kaufen. Auch verlierende Shorts decken sich durch Käufe ein, und neue Longs kommen dazu. Eine Bewegung wird deshalb selten von nur einer einzigen Gruppe getragen.',
          'Fürs Chartlesen ist wichtig, wann diese Rollenwechsel sichtbar werden: Verliert eine Seite ein wichtiges Niveau, kann ihre nötige Positionsauflösung der Gegenseite zusätzlichen Schub geben.',
        ],
        callout:
          'Ein ausgestoppter Käufer wird mit seiner Exit-Order zum Verkäufer; ein ausgestoppter Short wird zum Käufer.',
      },
      {
        id: 'part-01-02-diagram',
        type: 'diagram',
        title: 'Wie ein Fehlschlag neue Orders erzeugt',
        scenario: 'order-flow-cycle',
        caption:
          'Wenn eine These scheitert, kommen zu neuen Positionen häufig erzwungene Ausstiege der Gegenseite hinzu.',
        observations: [
          'Neue Shorts verkaufen aus einer frischen bärischen Erwartung heraus.',
          'Long-Exits sind ebenfalls Verkäufe und können den Impuls beschleunigen.',
          'Gewinnmitnahmen und Short-Eindeckungen erzeugen später Kaufaufträge.',
          'Der Chart zeigt die Summe dieser Entscheidungen, nicht die Identität jedes Akteurs.',
        ],
      },
      {
        id: 'part-01-02-question',
        type: 'question',
        title: 'Wer verkauft beim Bruch?',
        prompt:
          'Ein bullischer Ausbruch scheitert und der Kurs fällt unter den Einstieg vieler Käufer. Welche Gruppen können den Rückgang gleichzeitig verstärken?',
        options: [
          {
            id: 'shorts-only',
            label: 'Ausschließlich neue Short-Trader',
            explanation:
              'Neue Shorts können verkaufen, aber auch Long-Trader müssen ihre Positionen durch Verkäufe schließen.',
          },
          {
            id: 'both',
            label: 'Neue Shorts und aussteigende Longs',
            explanation:
              'Richtig. Unterschiedliche Motive führen in diesem Moment zur gleichen Orderrichtung.',
          },
          {
            id: 'buyers',
            label: 'Nur langfristige Käufer',
            explanation:
              'Käufer können den Rückgang bremsen, erklären aber nicht den zusätzlichen Verkaufsdruck aus einem Fehlschlag.',
          },
        ],
        correctOptionId: 'both',
      },
      {
        id: 'part-01-02-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Zu jeder bullischen und bärischen Lesart existiert eine Gegenseite.',
          'Positionsschließungen können eine Bewegung ebenso antreiben wie neue Einstiege.',
          'Fehlschläge sind wichtig, weil sie erzwungene Orders auslösen können.',
          'Lies den sichtbaren Rollenwechsel, statt einen einzigen Urheber zu suchen.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-03',
    title: 'Die wichtigste Entscheidung: Trend oder Range?',
    summary:
      'Warum das Marktregime entscheidet, ob Fortsetzung oder Gegenbewegung die bessere Grundidee ist.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Trendbar und Trading-Range-Bar',
      'Trend- und Range-Entscheidung über mehrere Bars',
      'Handelslogik für Fortsetzung und Fade',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-03-explain',
        type: 'explanation',
        eyebrow: 'Regime',
        title: 'Dieselbe Preiszone verlangt je nach Regime eine andere Reaktion',
        paragraphs: [
          'Die Kernfrage kehrt immer wieder: Bewegt sich der Markt gerichtet, oder wird zweiseitig gehandelt? Schon ein einzelner Bar kann wie ein kleiner Trend wirken, wenn er nahe am einen Ende eröffnet und nahe am anderen schließt. Ein Bar mit kleinem Körper und deutlichen Tails sieht dagegen aus wie eine winzige Trading Range.',
          'Über mehrere Bars wird die Unterscheidung noch wichtiger. In einem klaren Aufwärtstrend kann ein Kauf nahe am Hoch sinnvoll sein, weil die Fortsetzung wahrscheinlicher bleibt. In einer Range ist derselbe Kauf oft schlecht platziert: Dort wird eher am oberen Rand verkauft und am unteren gekauft.',
          'Dreiecke, Kopf-Schulter-Formationen und viele andere benannte Muster sind, solange sie entstehen, vor allem Ranges. Der Name beschreibt vielleicht die Form. Für die Handelslogik zählt aber zuerst, dass beide Seiten immer wieder Erfolge haben und ein nachhaltiger Ausbruch noch fehlt.',
          'Ein Trend kann auf der betrachteten Ebene nur einen Bar dauern oder einen ganzen Handelstag. Wie du ihn einordnest, hängt also immer von deinem Arbeitszeitrahmen ab.',
        ],
        callout:
          'Trendlogik kauft oder verkauft die Fortsetzung. Range-Logik handelt gegen die letzte Bewegung – besonders nahe an den Rändern.',
      },
      {
        id: 'part-01-03-diagram',
        type: 'diagram',
        title: 'Gleiche Richtung, andere Entscheidung',
        scenario: 'trend-range-choice',
        caption:
          'Ein neues Hoch besitzt im gerichteten Markt eine andere Qualität als ein kurzes Überschießen am Rand einer Balancezone.',
        observations: [
          'Im Trend bestätigen höhere Hochs und höhere Tiefs den Fortschritt der Käufer.',
          'In der Range fehlt Anschluss; Bewegungen kehren häufig zur Mitte zurück.',
          'Die Form des letzten Bars genügt nicht – Regime und Lage bestimmen die Aufgabe.',
        ],
      },
      {
        id: 'part-01-03-comparison',
        type: 'comparison',
        title: 'Zwei gegensätzliche Arbeitsmodelle',
        columns: [
          {
            title: 'Trend',
            tone: 'positive',
            points: [
              'Fortsetzung zunächst bevorzugen',
              'mit der dominanten Richtung handeln',
              'Pullbacks als mögliche Einstiege lesen',
              'Gegenbewegungen brauchen starke Beweise',
            ],
          },
          {
            title: 'Trading Range',
            tone: 'warning',
            points: [
              'Ausbrüchen zunächst skeptischer begegnen',
              'nahe Hoch eher Verkäufe prüfen',
              'nahe Tief eher Käufe prüfen',
              'in der Mitte fehlt häufig ein guter Vorteil',
            ],
          },
        ],
      },
      {
        id: 'part-01-03-question',
        type: 'question',
        title: 'Was ändert die Strategie?',
        prompt:
          'Ein Markt erreicht erneut die Oberkante einer seit Stunden stabilen Range. Es gibt noch keinen starken Ausbruch mit Anschluss. Welche Grundidee passt besser?',
        options: [
          {
            id: 'chase',
            label: 'Blind über der Oberkante kaufen',
            explanation:
              'Ohne Anschluss bleibt der Bereich ein Range-Rand, an dem Ausbrüche häufig scheitern.',
          },
          {
            id: 'range',
            label: 'Range-Logik beibehalten und Reaktion abwarten',
            explanation:
              'Richtig. Erst ein überzeugender Regimewechsel rechtfertigt die Umstellung auf Trendlogik.',
          },
          {
            id: 'name',
            label: 'Zuerst einen möglichst genauen Musternamen finden',
            explanation:
              'Der Name ist zweitrangig. Entscheidend ist, ob Preis außerhalb der Range akzeptiert wird.',
          },
        ],
        correctOptionId: 'range',
      },
      {
        id: 'part-01-03-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Trend oder Range ist die zentrale operative Einordnung.',
          'Im Trend wird Fortsetzung, in der Range eher Rückkehr bevorzugt.',
          'Benannte Chartmuster sind während ihrer Bildung oft nur besondere Formen einer Range.',
          'Regime und Zeitrahmen gehören immer zusammen.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-04',
    title: 'Der Vorteil lebt in einer grauen Zone',
    summary:
      'Warum Balance der Normalfall ist, gute Chancen nur zeitweise entstehen und Wahrscheinlichkeit nie Gewissheit heißt.',
    durationMinutes: 13,
    xp: 40,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Ausgeglichene Ausgangslage bei symmetrischem Ziel und Stop',
      'Zeitweise Verschiebung der Wahrscheinlichkeit',
      'Starke Spike-Phasen und bewusst unsichere Sprache',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-04-explain',
        type: 'explanation',
        eyebrow: 'Wahrscheinlichkeit',
        title: 'Ein handelbarer Vorteil ist meistens klein und vorübergehend',
        paragraphs: [
          'In einem liquiden, ausgeglichenen Markt liegen die Chancen für zwei symmetrische Ergebnisse oft dicht beieinander: Wird zuerst ein gleich weit entferntes Ziel oder ein gleich weit entfernter Stop erreicht? Ohne zusätzlichen Kontext hat weder Long noch Short automatisch einen großen Vorteil.',
          'Gute Setups entstehen, wenn neue Hinweise dieses Gleichgewicht verschieben. Ein starker Ausbruch, mehrere Trendbars und wenig Rücklauf können die Fortsetzung deutlich wahrscheinlicher machen. Man beschreibt solche Situationen oft mit ungefähr 60 zu 40; in einer seltenen, starken Spike-Phase kann der Vorteil kurzfristig sogar größer sein.',
          'Diese Zahlen sind ein Denkmodell und keine Konstanten, die für jeden Markt bewiesen wären. Ihr praktischer Nutzen ist klar: Du brauchst keine Sicherheit. Du brauchst eine wiederholbare Situation, in der Wahrscheinlichkeit, möglicher Gewinn und Risiko zusammen einen positiven Erwartungswert ergeben.',
          'Wörter wie wahrscheinlich, meistens oder häufig sind deshalb keine Schwäche. Sie sind ehrlicher als Versprechen. Auch das beste Setup hat eine echte Gegenwahrscheinlichkeit und braucht einen Plan für den Fall, dass genau die eintritt.',
        ],
        callout:
          'Ein Vorteil sagt nicht, was dieser eine Trade tun muss. Er beschreibt, was über viele vergleichbare Entscheidungen günstiger sein sollte.',
      },
      {
        id: 'part-01-04-diagram',
        type: 'diagram',
        title: 'Evidenz verschiebt die Erwartung',
        scenario: 'probability-spectrum',
        caption:
          'Die meiste Zeit bleibt der Markt relativ ausgeglichen. Nur zeitweise entsteht eine ausreichend deutliche Verschiebung für einen Trade.',
        observations: [
          'Nahe Balance benötigt der Trade besonders gute Preise oder ein attraktives Chance-Risiko-Verhältnis.',
          'Mehrere übereinstimmende Hinweise können einen kleinen statistischen Vorteil erzeugen.',
          'Die Gegenrichtung bleibt selbst bei einem guten Setup möglich und muss im Risiko berücksichtigt werden.',
        ],
      },
      {
        id: 'part-01-04-question',
        type: 'question',
        title: 'Was bedeutet 60 zu 40?',
        prompt:
          'Du ordnest ein Setup grob als 60-zu-40-Vorteil für Long ein. Welche Aussage ist korrekt?',
        options: [
          {
            id: 'certain',
            label: 'Der nächste Trade muss gewinnen',
            explanation:
              'Vier von zehn vergleichbaren Fällen dürfen im Modell gegen dich laufen. Ein einzelner Verlust widerspricht dem Vorteil nicht.',
          },
          {
            id: 'series',
            label: 'Long besitzt in einer Serie einen kleinen Vorteil',
            explanation:
              'Richtig. Der Wert ist eine Schätzung für wiederholte Situationen, keine Vorhersagegarantie.',
          },
          {
            id: 'ignore-risk',
            label: 'Ein Stop ist wegen der hohen Quote unnötig',
            explanation:
              'Gerade die verbleibende Gegenwahrscheinlichkeit macht kontrolliertes Risiko unverzichtbar.',
          },
        ],
        correctOptionId: 'series',
      },
      {
        id: 'part-01-04-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Symmetrische Bewegungen beginnen häufig nahe einer ausgeglichenen Erwartung.',
          'Setups verschieben Wahrscheinlichkeiten, sie beseitigen Unsicherheit nicht.',
          'Solche Quoten sind Arbeitsmodelle und müssen in der eigenen Stichprobe geprüft werden.',
          'Ein Plan für die Gegenrichtung gehört zu jedem Trade.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-05',
    title: 'Nach vorn lesen statt den letzten Trade verteidigen',
    summary:
      'Warum neue Infos wichtiger sind als dein Tagesergebnis und ein Tick je nach Zeitebene unterschiedlich viel wiegt.',
    durationMinutes: 10,
    xp: 35,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Fortlaufende Neubewertung statt Rückspiegel',
      'Trennung von Chartanalyse und Tages-P&L',
      'Relative Bedeutung eines Ticks auf verschiedenen Zeitebenen',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-05-explain',
        type: 'explanation',
        eyebrow: 'Neubewertung',
        title: 'Der nächste Tick kennt deinen letzten Verlust nicht',
        paragraphs: [
          'Deine Markteinschätzung kann sich ändern, obwohl sich der Preis kaum bewegt. Vielleicht siehst du erst jetzt eine nahe Trendlinie, einen höheren Zeitrahmen oder eine Struktur, die deiner ersten Lesart widerspricht. Die neue Info gehört sofort in die Analyse – auch wenn sie deine bisherige Meinung unbequem macht.',
          'Dein Gewinn oder Verlust des Tages ändert nichts an den Wahrscheinlichkeiten des nächsten Bars. Wer nach einem Verlust unbedingt recht behalten oder das Geld zurückholen will, liest nicht mehr den Chart, sondern die eigene Kontokurve. Die Frage in der Praxis lautet immer: Welche bullische und welche bärische Evidenz liegt jetzt vor?',
          'Auch die Bedeutung eines einzelnen Ticks ist relativ. Auf einem Monatschart geht er meist im Rauschen unter. Ist ein durchschnittlicher Ein-Minuten-Bar aber nur wenige Ticks groß, kann derselbe Schritt einen erheblichen Teil der aktuellen Struktur ausmachen.',
          'Du sollst deine Meinung nicht nach jeder Bewegung hektisch ändern. Aktualisiere nur dann, wenn neue Infos deine vorher festgelegten Bedingungen bestätigen, schwächen oder ungültig machen.',
        ],
        callout:
          'Dein Trade ist Vergangenheit. Die nächste Entscheidung leitest du allein aus dem aktuellen Zustand ab.',
      },
      {
        id: 'part-01-05-diagram',
        type: 'diagram',
        title: 'Ein Muster auf drei Auflösungen',
        scenario: 'fractal-timeframes',
        caption:
          'Die gleiche Grundbewegung enthält auf kleineren Zeitebenen mehr sichtbare Entscheidungen. Mehr Detail bedeutet nicht automatisch mehr Relevanz.',
        observations: [
          'Die Arbeitszeitebene bestimmt, welche Preisänderung erheblich ist.',
          'Ein einzelner Tick kann lokal wichtig und übergeordnet bedeutungslos sein.',
          'Neue Information wird gegen vorher festgelegte Strukturbedingungen geprüft.',
        ],
      },
      {
        id: 'part-01-05-question',
        type: 'question',
        title: 'Was darf deine Analyse verändern?',
        prompt:
          'Du hast zwei Trades verloren. Gleichzeitig zeigt der Chart einen frischen starken bullischen Ausbruch mit Anschluss. Was ist für die nächste Entscheidung relevant?',
        options: [
          {
            id: 'revenge',
            label: 'Die Verluste müssen sofort zurückverdient werden',
            explanation:
              'Das Tagesergebnis erzeugt keinen Marktvorteil und erhöht nur den emotionalen Druck.',
          },
          {
            id: 'evidence',
            label: 'Die neue bullische Evidenz und dein vorheriger Risikoplan',
            explanation:
              'Richtig. Aktueller Kontext und definierte Regeln bestimmen die Entscheidung.',
          },
          {
            id: 'same-bias',
            label: 'Du musst an deiner ersten Marktmeinung festhalten',
            explanation:
              'Price Action verlangt fortlaufende Neubewertung, nicht Loyalität zu einer alten These.',
          },
        ],
        correctOptionId: 'evidence',
      },
      {
        id: 'part-01-05-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Neue Chartinformation darf deine Einschätzung jederzeit verändern.',
          'Vergangene Gewinne und Verluste besitzen keine Prognosekraft für den nächsten Tick.',
          'Die Bedeutung einer Preisänderung hängt vom betrachteten Maßstab ab.',
          'Aktualisiere anhand klarer Bedingungen, nicht anhand spontaner Angst.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-06',
    title: 'Der Ausbruch wird erst danach beurteilt',
    summary:
      'Woran du an den Folge-Bars erkennst, ob der Preis akzeptiert wird oder ein Ausbruch schnell scheitert.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Verhalten nach dem Bruch eines Hochs oder einer Linie',
      'Steigende Hochs und Tiefs als Anschluss',
      'Inside-Bar und Gegenausbruch als Warnzeichen',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-06-explain',
        type: 'explanation',
        eyebrow: 'Follow-through',
        title: 'Nicht der Grenzübertritt, sondern die Reaktion entscheidet',
        paragraphs: [
          'Ein Preis über einem alten Hoch beweist erst einmal nur, dass dort gehandelt wurde. Ob der Markt das höhere Niveau akzeptiert, zeigt sich in den folgenden Bars. Bleiben deren Tiefs höher und kommen weitere höhere Hochs, haben die Käufer trotz möglicher kleiner Pullbacks die Kontrolle.',
          'Ein anderer Verlauf warnt früh vor einem Fehlausbruch: Auf einen großen bullischen Ausbruchsbar folgt nur ein kleiner Inside-Bar, danach fällt der Markt unter dessen Tief. Der Ausbruch hat dann keine neue Aufwärtsstruktur aufgebaut, und Käufer oberhalb der Grenze können in der Falle sitzen.',
          'Das Prinzip gilt spiegelbildlich für bärische Ausbrüche. Ein Bruch braucht Anschluss, Distanz oder einen bestandenen Test. Ohne diese Bestätigung bleibt die alte Range das stärkere Arbeitsmodell.',
          'Du musst deshalb nicht jeden Ausbruch vorwegnehmen. Oft ist es klüger, einen Teil der Bewegung zu verpassen und dafür zu sehen, ob die Gegenseite nach dem Grenzbruch noch wirksam zurückschlagen kann.',
        ],
        callout:
          'Ein Ausbruch ist ein Ereignis. Erst Follow-through und Test zeigen, ob daraus ein neues Regime wird.',
      },
      {
        id: 'part-01-06-diagram',
        type: 'diagram',
        title: 'Akzeptanz oder Rückfall?',
        scenario: 'breakout-outcomes',
        caption:
          'Beide Seiten überschreiten dieselbe Grenze. Links folgt Struktur, rechts kehrt der Markt sofort in die alte Zone zurück.',
        observations: [
          'Ein großer Ausbruchsbar ist stärker, wenn mehrere Folge-Bars in seine Richtung schließen.',
          'Höhere Tiefs nach einem bullischen Bruch zeigen, dass Käufer Rückläufe verteidigen.',
          'Ein Inside-Bar mit anschließendem Gegenausbruch erhöht die Gefahr eines Fehlschlags.',
          'Die Rückkehr in die Range kann gefangene Ausbruchstrader zu zusätzlichen Verkäufern machen.',
        ],
      },
      {
        id: 'part-01-06-question',
        type: 'question',
        title: 'Welcher Ausbruch ist glaubwürdiger?',
        prompt:
          'Zwei Märkte brechen über ein altes Hoch. Markt A bildet danach höhere Tiefs und zwei weitere bullische Schlusskurse. Markt B bildet einen Inside-Bar und fällt darunter. Wo ist Fortsetzung wahrscheinlicher?',
        options: [
          {
            id: 'a',
            label: 'Markt A',
            explanation:
              'Richtig. Anschluss und höhere Tiefs sprechen für Akzeptanz oberhalb des alten Hochs.',
          },
          {
            id: 'b',
            label: 'Markt B',
            explanation:
              'Der schnelle Gegenausbruch zeigt fehlende Akzeptanz und erhöht die Fehlschlaggefahr.',
          },
          {
            id: 'same',
            label: 'Beide sind nach dem ersten Bruch gleich stark',
            explanation:
              'Die Folgebewegung liefert neue Information und trennt die beiden Fälle deutlich.',
          },
        ],
        correctOptionId: 'a',
      },
      {
        id: 'part-01-06-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Das Überschreiten einer Grenze allein bestätigt keinen neuen Trend.',
          'Follow-through, höhere Tiefs oder tiefere Hochs zeigen Akzeptanz.',
          'Inside-Bar und schneller Rückfall sind frühe Warnzeichen eines Fehlausbruchs.',
          'Warten auf Bestätigung kostet Strecke, kann aber die Qualität der Entscheidung erhöhen.',
        ],
      },
    ],
  },
] satisfies Lesson[];
