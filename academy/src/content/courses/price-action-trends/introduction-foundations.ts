import type { Lesson } from '../../types';

export const introductionFoundationLessons = [
  {
    id: 'price-action-trends.introduction.lesson-01',
    title: 'Der Chart ist das Ergebnis',
    summary:
      'Was Price Action leisten soll und warum jeder Bar als Information einer laufenden Auktion gelesen wird.',
    durationMinutes: 11,
    xp: 30,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Ziel und Aufbau des Kurses',
      'Chartinformation und institutionelle Gegenseiten',
      'Price Action als erlernbare Fertigkeit',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-01-explain',
        type: 'explanation',
        eyebrow: 'Arbeitsmodell',
        title: 'Nicht Kerzen auswendig lernen, sondern Entscheidungen lesen',
        paragraphs: [
          'Price Action ist in diesem Kurs keine Sammlung magischer Kerzenformen. Ziel ist, aus dem sichtbaren Verlauf abzuleiten, wie entschlossen Käufer und Verkäufer handeln, wo eine Seite Fortschritt erzielt und wo ein Versuch scheitert. Open, High, Low und Close eines Bars sind dafür Rohdaten; ihre Bedeutung entsteht erst durch die Bars davor, den Ort im Chart und die Reaktion danach.',
          'Ein ausgeführter Handel benötigt immer zwei Seiten. Wenn der Markt steigt, verschwinden Verkäufer nicht. Käufer akzeptieren lediglich höhere Preise oder greifen aggressiver zu, während Verkäufer aus anderen Gründen abgeben. Ein Kurs ist daher weder objektiver Wert noch Abstimmungsergebnis über eine Nachricht. Er ist der zuletzt akzeptierte Transaktionspreis einer fortlaufenden Auktion.',
          'Der Kurs will nicht nur zeigen, wie ein Chart im Nachhinein benannt werden kann. Er will eine Sprache für Entscheidungen unter Unsicherheit liefern. Diese Sprache wird erst nützlich, wenn du viele Bars bewusst beobachtest und deine Einschätzung in Echtzeit gegen die weitere Entwicklung prüfst.',
          'Die Analogie zu einem Instrument passt gut: Eine Erklärung kann dir Grifftechnik und Noten zeigen, aber Spielfähigkeit entsteht durch Wiederholung. Deshalb verbindet die Academy ausführliche Erklärungen mit Schaubildern, Entscheidungen und späterer Wiederholung.',
        ],
        callout:
          'Der Chart zeigt das Ergebnis vieler Entscheidungen. Er verrät nicht zuverlässig das Motiv jedes einzelnen Marktteilnehmers.',
      },
      {
        id: 'intro-01-diagram',
        type: 'diagram',
        title: 'Eine Auktion hinter jedem Bar',
        scenario: 'auction-balance',
        caption:
          'Aggressive Käufe heben den gehandelten Preis an; aggressive Verkäufe drücken ihn. Der Bar verdichtet diese Auseinandersetzung.',
        observations: [
          'Das Hoch markiert, wie weit höhere Preise innerhalb des Zeitfensters gehandelt wurden.',
          'Das Tief zeigt die tiefste akzeptierte Transaktion, bevor Nachfrage oder Zeitablauf die Bewegung begrenzten.',
          'Der Schluss ordnet ein, welche Seite am Ende mehr Kontrolle zeigte; allein genügt er trotzdem nicht.',
          'Erst Nachbarbars und Kontext machen aus vier Preisen eine handelbare Aussage.',
        ],
      },
      {
        id: 'intro-01-comparison',
        type: 'comparison',
        title: 'Beschreibung vor Erklärung',
        columns: [
          {
            title: 'Direkt beobachtbar',
            tone: 'positive',
            points: [
              'Richtung, Größe und Überlappung der Bars',
              'Lage des Schlusses innerhalb des Bars',
              'Ausbruch, Rücklauf und Anschlussbewegung',
              'Reaktion an früheren Hochs, Tiefs und Linien',
            ],
          },
          {
            title: 'Nur mögliche Geschichte',
            tone: 'warning',
            points: [
              'welche einzelne Institution gekauft hat',
              'warum ein bestimmter Algorithmus aktiv wurde',
              'ob eine Nachricht der wahre Auslöser war',
              'was jeder Beteiligte als Nächstes tun wird',
            ],
          },
        ],
      },
      {
        id: 'intro-01-question',
        type: 'question',
        title: 'Welche Aussage bleibt am belastbarsten?',
        prompt:
          'Ein Markt eröffnet nach guten Nachrichten höher, wird aber sofort verkauft und schließt nahe dem Tagestief. Was ist für eine kurzfristige Analyse die wichtigste Information?',
        options: [
          {
            id: 'headline',
            label: 'Die Nachricht war positiv, also muss der Markt steigen',
            explanation:
              'Die Nachricht erklärt einen möglichen Anlass, aber die tatsächliche Auktion akzeptierte die höheren Preise nicht.',
          },
          {
            id: 'reaction',
            label: 'Die schwache Reaktion auf eigentlich gute Nachrichten',
            explanation:
              'Richtig. Der Kursverlauf zeigt unmittelbar, dass Käufer das höhere Niveau nicht halten konnten.',
          },
          {
            id: 'seller-story',
            label: 'Ein einzelner großer Verkäufer muss verantwortlich sein',
            explanation:
              'Das ist eine mögliche Geschichte, lässt sich aus dem Bar allein aber nicht belegen.',
          },
        ],
        correctOptionId: 'reaction',
      },
      {
        id: 'intro-01-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Price Action beschreibt sichtbares Verhalten, nicht geheime Motive.',
          'Jeder Handel braucht Käufer und Verkäufer; Richtung entsteht aus ihrer unterschiedlichen Aggressivität.',
          'Ein Bar wird erst durch Sequenz, Ort und Reaktion aussagekräftig.',
          'Verstehen ist die Grundlage – flüssiges Lesen entsteht erst durch Übung.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-04',
    title: 'Institutionen, Programme und dein einzelner Stop',
    summary:
      'Wer große Märkte bewegt, weshalb beide Seiten professionell sein können und warum der Markt nicht persönlich handelt.',
    durationMinutes: 12,
    xp: 35,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Institutionelle Marktteilnehmer',
      'Computerhandel und statistische Programme',
      'Individueller Stop versus relevante Liquiditätszone',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-04-explain',
        type: 'explanation',
        eyebrow: 'Marktteilnehmer',
        title: 'Auf beiden Seiten können kluge Marktteilnehmer stehen',
        paragraphs: [
          'Große liquide Märkte werden überwiegend durch professionelle Volumenströme geprägt. Die historischen Prozentangaben stammen aus einer früheren Marktphase; die dauerhafte Kernaussage ist wichtiger als eine einzelne Zahl: Ein kleiner Privattrade bestimmt den Kurs normalerweise nicht. Damit dein Auftrag ausgeführt wird, muss am gehandelten Preis ausreichend Gegenseite vorhanden sein.',
          'Das bedeutet nicht, dass eine Seite dumm sein muss. Ein Käufer kann einen mehrmonatigen Horizont haben, während der Verkäufer nur ein Intraday-Risiko reduziert. Ein Market Maker kann Liquidität bereitstellen, ein Fonds ein Portfolio absichern und ein kurzfristiges Programm auf eine statistische Abweichung reagieren. Derselbe Preis kann für all diese Akteure logisch sein.',
          'Auch „Institution“ ist keine saubere einzelne Kategorie. Neben Banken, Fonds oder Versicherern formen automatisierte Ausführung, statistische Modelle und andere volumenstarke Akteure das kurzfristige Muster. Price Action versucht nicht, jeden Urheber zu identifizieren. Sie liest, welche Seite im Ergebnis Fortschritt erzielt.',
          'Dein persönlicher Stop ist für den Gesamtmarkt bedeutungslos. Anders ist es bei offensichtlichen Hochs, Tiefs oder Ausbruchspunkten: Dort sammeln sich viele Aufträge. Solche Zonen können getestet werden, weil dort handelbare Liquidität liegt – nicht weil der Markt Robert ärgern möchte.',
        ],
        callout:
          'Ein Liquiditätstest kann real sein. Die Vorstellung, der Markt kenne und jage deinen einzelnen kleinen Stop, ist es nicht.',
      },
      {
        id: 'intro-04-diagram',
        type: 'diagram',
        title: 'Viele Motive, ein gemeinsamer Kurs',
        scenario: 'institutional-flow',
        caption:
          'Unterschiedliche Zeithorizonte und Ziele treffen im Orderfluss zusammen. Der Chart zeigt nur das gemeinsame Resultat.',
        observations: [
          'Ein langfristiger Kauf und ein kurzfristiger Verkauf können gleichzeitig vernünftig sein.',
          'Automatisierte Programme reagieren schneller, ändern aber nicht das Grundprinzip von Angebot und Nachfrage.',
          'Sichtbare Zonen bündeln viele Aufträge und sind deshalb wichtiger als die Position eines Einzelnen.',
        ],
      },
      {
        id: 'intro-04-comparison',
        type: 'comparison',
        title: 'Persönliche Geschichte oder Marktstruktur?',
        columns: [
          {
            title: 'Unproduktive Deutung',
            tone: 'warning',
            points: [
              '„Sie holen genau meinen Stop.“',
              'jede Bewegung einem geheimen Akteur zuschreiben',
              'Gegenseite automatisch als unerfahren ansehen',
              'nach einem Verlust die sichtbare Struktur ignorieren',
            ],
          },
          {
            title: 'Nützliche Deutung',
            tone: 'positive',
            points: [
              'Wo liegen viele wahrscheinliche Aufträge?',
              'Wird ein getestetes Niveau akzeptiert oder zurückgewiesen?',
              'Welcher Zeithorizont passt zu meinem Trade?',
              'Was müsste geschehen, damit meine Idee ungültig wird?',
            ],
          },
        ],
      },
      {
        id: 'intro-04-question',
        type: 'question',
        title: 'Was ist an einem alten Tief besonders?',
        prompt:
          'Der Markt testet ein gut sichtbares Tagestief, an dem viele Stops vermutet werden. Welche Erklärung ist am saubersten?',
        options: [
          {
            id: 'personal',
            label: 'Der Markt will einen bestimmten Privattrader bestrafen',
            explanation:
              'Ein einzelner kleiner Auftrag ist für einen liquiden Markt normalerweise irrelevant.',
          },
          {
            id: 'liquidity',
            label: 'Die Zone bündelt viele Aufträge und damit Liquidität',
            explanation:
              'Richtig. Das Niveau ist wegen der Summe möglicher Orders relevant, nicht wegen einer persönlichen Absicht.',
          },
          {
            id: 'guarantee',
            label: 'Unter dem Tief muss zwingend ein neuer Abwärtstrend beginnen',
            explanation:
              'Der Test kann ausbrechen oder scheitern. Entscheidend ist die Reaktion nach dem Durchbruch.',
          },
        ],
        correctOptionId: 'liquidity',
      },
      {
        id: 'intro-04-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Professionelle Gegenseiten können wegen verschiedener Ziele gleichzeitig sinnvoll handeln.',
          'Volumenstarke Programme prägen den kurzfristigen Weg, ohne die Auktion abzuschaffen.',
          'Der Markt reagiert auf gebündelte Liquidität, nicht auf deine Person.',
          'Analysiere Fortschritt und Reaktion statt vermuteter Identitäten.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-05',
    title: 'Jeder Bar gehört zur Geschichte',
    summary:
      'Warum scheinbar langweilige Bars wichtig sind und Muster nicht als isolierte Namen gelesen werden.',
    durationMinutes: 10,
    xp: 30,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Große und kleine wiederkehrende Muster',
      'Bar-für-Bar-Lesen',
      'Rationale statt Muster-Memorisierung',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-05-explain',
        type: 'explanation',
        eyebrow: 'Bar für Bar',
        title: '„Nichts passiert“ ist oft nur „noch nicht verstanden“',
        paragraphs: [
          'Auf einem Chart wechseln große Strukturen wie Trend, Range, Kanal oder Climax mit kleinen Sequenzen aus wenigen Bars. Wer nur die spektakulären Stellen markiert, übersieht den größten Teil der Auktion. Gerade unscheinbare Bars zeigen, ob ein Pullback Druck entwickelt, ob ein Ausbruch Anschluss findet oder ob beide Seiten zunehmend ausgeglichen sind.',
          'Bar-für-Bar-Lesen bedeutet nicht, auf jedem Bar handeln zu müssen. Es bedeutet, jeden abgeschlossenen Bar als neues Beweisstück einzuordnen: Hat er die bisherige Erwartung bestätigt, geschwächt oder kaum verändert? Aus vielen kleinen Aktualisierungen entsteht eine belastbare Einschätzung.',
          'Kerzennamen sind dabei nur Abkürzungen. Zwei gleich aussehende Reversal-Bars können gegensätzliche Qualität besitzen, wenn einer nach einem erschöpften Ausbruch am Range-Rand liegt und der andere mitten in einem starken Trend. Der Name beschreibt Form; der Kontext entscheidet Funktion.',
          'Dieses genaue Lesen erweitert nicht nur die Zahl möglicher Trades. Es hilft vor allem, schwache Ideen früh zu erkennen und schlechte Trades auszulassen.',
        ],
        callout:
          'Beobachtungspflicht ist keine Handelspflicht. Du darfst jeden Bar lesen und trotzdem geduldig nichts tun.',
      },
      {
        id: 'intro-05-diagram',
        type: 'diagram',
        title: 'Information entsteht als Sequenz',
        scenario: 'trend-range-transition',
        caption:
          'Kein einzelner Bar verkündet den Regimewechsel. Zunehmende Überlappung und beidseitige Erfolge verändern die Erwartung Schritt für Schritt.',
        observations: [
          'Frühe Bars zeigen gerichteten Fortschritt und begrenzte Rückläufe.',
          'Später häufen sich Tails, Überlappung und Gegenbewegungen.',
          'Erst Anschluss außerhalb der Balance bestätigt erneut gerichtete Akzeptanz.',
        ],
      },
      {
        id: 'intro-05-comparison',
        type: 'comparison',
        title: 'Form allein gegen Form im Kontext',
        columns: [
          {
            title: 'Isoliertes Etikett',
            tone: 'warning',
            points: [
              '„Hammer bedeutet kaufen“',
              'ein Bar soll den ganzen Markt erklären',
              'Zwischenbars werden als Rauschen verworfen',
              'Treffer werden erinnert, Fehlschläge vergessen',
            ],
          },
          {
            title: 'Kontextuelle Lesart',
            tone: 'positive',
            points: [
              'Was geschah vor dem Signal?',
              'Wo liegt es innerhalb der Struktur?',
              'Welche Seite braucht Anschluss?',
              'Was würde die Interpretation widerlegen?',
            ],
          },
        ],
      },
      {
        id: 'intro-05-question',
        type: 'question',
        title: 'Warum einen kleinen Inside-Bar beachten?',
        prompt:
          'Ein kleiner Inside-Bar erscheint nach mehreren starken Trendbars. Du willst ihn nicht handeln. Warum ist er trotzdem relevant?',
        options: [
          {
            id: 'irrelevant',
            label: 'Er ist ohne direkten Einstieg bedeutungslos',
            explanation:
              'Auch ohne Trade kann er Pause, verringerte Dringlichkeit oder den Beginn einer engeren Balance anzeigen.',
          },
          {
            id: 'evidence',
            label: 'Er aktualisiert die Einschätzung von Momentum und Balance',
            explanation:
              'Richtig. Lesen und Handeln sind getrennte Entscheidungen.',
          },
          {
            id: 'reverse',
            label: 'Er beweist eine vollständige Trendumkehr',
            explanation:
              'Ein einzelner kleiner Bar ist dafür zu wenig; Folgebewegung und Kontext fehlen.',
          },
        ],
        correctOptionId: 'evidence',
      },
      {
        id: 'intro-05-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Jeder abgeschlossene Bar verändert die Beweislage zumindest geringfügig.',
          'Nicht jeder gelesene Bar erzeugt einen Trade.',
          'Kerzenformen sind Abkürzungen; Kontext bestimmt ihre Funktion.',
          'Genaue Beobachtung hilft ebenso beim Vermeiden schlechter Trades.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-06',
    title: 'Eine Methode muss zu dir passen',
    summary:
      'Warum Lernen lange dauert, Rückschau täuscht und eine persönlich tragfähige Ausführung wichtiger als die perfekte Methode ist.',
    durationMinutes: 10,
    xp: 30,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Persönlichkeitskompatibler Handelsstil',
      'Lernkurve und Rückschaufehler',
      'Chartlesen versus Ausführung',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-06-explain',
        type: 'explanation',
        eyebrow: 'Lernrealität',
        title: 'Im Rückblick ist jeder Chart großzügig',
        paragraphs: [
          'Nach Handelsschluss wirken Einstieg und Ausstieg oft offensichtlich. In Echtzeit fehlt jedoch die rechte Hälfte des Charts. Du musst handeln, während mehrere plausible Verläufe offen sind, und einen normalen Rücklauf von einer echten Invalidierung unterscheiden. Genau diese Unsicherheit macht die praktische Ausführung schwieriger als das nachträgliche Erkennen.',
          'Eine Methode kann fachlich funktionieren und trotzdem ungeeignet für dich sein. Wer schnelle Entscheidungen hasst, wird einen extrem kurzfristigen Stil kaum jahrelang sauber ausführen. Wer jedem kleinen Rücklauf emotional ausweicht, wird mit einem Ansatz scheitern, dessen Gewinner normale Schwankungen aushalten müssen.',
          'Die Quelle beschreibt eine lange Suche über Systeme, Indikatoren, Seminare und fremde Ansätze. Die übertragbare Lehre ist nicht, dass nur eine Methode richtig sei. Sie lautet: Irgendwann musst du einen belastbaren Ansatz tief genug lernen, statt bei jeder unangenehmen Phase das Instrument zu wechseln.',
          'Chartlesen und profitables Handeln bleiben zwei getrennte Fertigkeiten. Du kannst eine Struktur korrekt erkennen und trotzdem durch falsche Größe, verspäteten Einstieg, engen Stop oder impulsives Management verlieren.',
        ],
        callout:
          'Ein guter Ansatz, den du konsequent ausführst, schlägt einen theoretisch perfekten Ansatz, den du unter Druck verlässt.',
      },
      {
        id: 'intro-06-comparison',
        type: 'comparison',
        title: 'Analysekompetenz und Ausführungskompetenz',
        columns: [
          {
            title: 'Chart lesen',
            tone: 'neutral',
            points: [
              'Regime und Struktur einordnen',
              'Wahrscheinlichkeiten aktualisieren',
              'Setup und Invalidierung erkennen',
              'alternative Verläufe akzeptieren',
            ],
          },
          {
            title: 'Trade ausführen',
            tone: 'positive',
            points: [
              'passende Größe wählen',
              'Order wie geplant platzieren',
              'normalen Rücklauf aushalten',
              'Exit-Regel ohne Hoffnung befolgen',
            ],
          },
        ],
      },
      {
        id: 'intro-06-question',
        type: 'question',
        title: 'Was beweist ein perfekter Rückblick?',
        prompt:
          'Du kannst nach Handelsschluss fünf ideale Einstiege markieren, hast sie live aber nicht erkannt. Welche Schlussfolgerung ist am hilfreichsten?',
        options: [
          {
            id: 'easy',
            label: 'Der Markt war leicht und du hattest nur Pech',
            explanation:
              'Rückschau enthält Informationen, die am rechten Rand noch nicht verfügbar waren.',
          },
          {
            id: 'practice',
            label: 'Erkennung am rechten Rand muss gezielt trainiert werden',
            explanation:
              'Richtig. Replay, Vorab-Szenarien und ein Entscheidungsjournal schließen diese Lücke.',
          },
          {
            id: 'switch',
            label: 'Du brauchst sofort eine komplett neue Methode',
            explanation:
              'Ein Methodenwechsel behebt fehlende Echtzeitpraxis normalerweise nicht.',
          },
        ],
        correctOptionId: 'practice',
      },
      {
        id: 'intro-06-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Rückschau entfernt Unsicherheit und lässt Trading leichter erscheinen.',
          'Methode, Persönlichkeit und verfügbare Aufmerksamkeit müssen zusammenpassen.',
          'Chartlesen allein garantiert keine gute Orderausführung.',
          'Tiefe Wiederholung ist wertvoller als ständiges Wechseln des Ansatzes.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-07',
    title: 'Effizienter Markt, kleiner Vorteil',
    summary:
      'Warum bekannte Muster weiter existieren, weshalb Wissen allein nicht reicht und wie sich robuste Strukturen über Jahrzehnte halten.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Kleine Edges in einem wettbewerbsintensiven Markt',
      'Beständigkeit wiederkehrender Preisstrukturen',
      'Klassische technische Analyse und Einzelbars',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-07-explain',
        type: 'explanation',
        eyebrow: 'Markteffizienz',
        title: 'Bekannt heißt nicht automatisch unbrauchbar',
        paragraphs: [
          'Wenn ein Muster öffentlich bekannt ist, verschwindet es nicht zwingend. Trends, Pullbacks und Ausbrüche entstehen nicht nur, weil wenige Menschen einen Namen dafür kennen. Sie entstehen aus Positionsaufbau, Risikoabbau, unterschiedlichen Zeithorizonten und der fortlaufenden Suche nach akzeptierten Preisen.',
          'Der Wettbewerb sorgt allerdings dafür, dass der Vorteil selten riesig ist. Professionelle Käufer und Verkäufer beobachten dieselben Daten und reagieren schnell. Ein kleiner Analysevorteil kann deshalb durch Gebühren, schlechte Ausführung, zu große Positionen oder eine einzige impulsive Abweichung aufgezehrt werden.',
          'Ältere und moderne Charts zeigen ähnliche Formen. Die Aussage, dies komme „aus der DNA“, ist am besten als Metapher zu lesen: Anreize, Unsicherheit, Herdenverhalten, Risikolimits und Auktion erzeugen über verschiedene Epochen wiederkehrende Strukturen. Computer verändern Geschwindigkeit und Ausführung, aber sie handeln ebenfalls nach Regeln, Zielen und Grenzen.',
          'Klassische Trendlinien, Ausbrüche und Pullbacks bleiben deshalb eine Basis. Die detaillierte Baranalyse soll nicht eine völlig neue Marktphysik erfinden, sondern Timing, Risiko und Kontext innerhalb dieser bekannten Strukturen präzisieren.',
        ],
        callout:
          'Ein Edge kann bekannt und trotzdem schwer nutzbar sein – wie eine öffentlich bekannte Sporttechnik, die nur durch Training beherrscht wird.',
      },
      {
        id: 'intro-07-diagram',
        type: 'diagram',
        title: 'Ähnliche Struktur auf verschiedenen Zeitebenen',
        scenario: 'fractal-timeframes',
        caption:
          'Richtung, Pullback und Fortsetzung können auf Minuten-, Stunden- und Wochencharts ähnlich aussehen, obwohl Bedeutung und Risiko verschieden sind.',
        observations: [
          'Die Form kann sich wiederholen; die absolute Zeitdauer ist dafür nicht entscheidend.',
          'Liquidität, Kosten und sinnvolle Stopdistanz ändern sich mit Instrument und Zeitrahmen.',
          'Ein Muster bleibt nur dann relevant, wenn sein Kontext auf derselben Ebene gelesen wird.',
        ],
      },
      {
        id: 'intro-07-question',
        type: 'question',
        title: 'Warum verschwindet ein Pullback nicht?',
        prompt:
          'Viele Trader kennen Pullbacks. Weshalb kann die Struktur trotzdem weiter auftreten?',
        options: [
          {
            id: 'secret',
            label: 'Weil sie eigentlich geheim ist',
            explanation:
              'Pullbacks sind allgemein bekannt und kein exklusives Geheimwissen.',
          },
          {
            id: 'mechanism',
            label: 'Weil Positionsaufbau und Auktion diese Form immer wieder erzeugen',
            explanation:
              'Richtig. Bekanntheit beseitigt nicht die ökonomischen und verhaltensbedingten Ursachen.',
          },
          {
            id: 'certainty',
            label: 'Weil jeder Pullback sicher fortgesetzt wird',
            explanation:
              'Die Struktur wiederholt sich, aber jeder einzelne Fall bleibt probabilistisch.',
          },
        ],
        correctOptionId: 'mechanism',
      },
      {
        id: 'intro-07-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Wiederkehrende Marktmechanismen erhalten bekannte Chartstrukturen.',
          'Der nutzbare Vorteil ist meist klein und ausführungssensibel.',
          'Computer ändern das Tempo, nicht die Grundlogik der Auktion.',
          'Ein bekanntes Konzept wird erst durch Kontext und Übung zum Edge.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-08',
    title: 'Ein Chart, wenig Ballast',
    summary:
      'Was Indikatoren tatsächlich messen und warum zusätzliche Informationen nur helfen, wenn sie deine Entscheidung verbessern.',
    durationMinutes: 12,
    xp: 35,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Price Action im Verhältnis zu Indikatoren und Systemen',
      'Ein-Chart-Arbeitsweise und 20-Bar-EMA',
      'Primäre Price-Action-Werkzeuge',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-08-explain',
        type: 'explanation',
        eyebrow: 'Werkzeuge',
        title: 'Mehr Anzeigen bedeuten nicht automatisch mehr Information',
        paragraphs: [
          'Die meisten klassischen Indikatoren werden aus Preis, Zeit oder Volumen berechnet. Sie können dieselben Daten glätten, normalisieren oder in einer leichter lesbaren Form darstellen. Das ist nicht nutzlos. Problematisch wird es, wenn die Darstellung als unabhängige Wahrheit behandelt wird und der zugrunde liegende Kursverlauf aus dem Blick gerät.',
          'Ein Oszillator kann in einem starken Trend immer wieder „überkauft“ anzeigen. Wer daraus automatisch Gegentrades ableitet, kämpft möglicherweise stundenlang gegen eine Bewegung, deren Bars weiterhin klare Stärke zeigen. Eine Divergenz allein ersetzt weder einen kraftvollen Bruch der Trendstruktur noch eine bestätigte Reaktion beim Test des alten Extrempunkts.',
          'Die Quelle beschreibt eine bewusst reduzierte Arbeitsfläche: ein einzelner Kerzenchart und eine 20-Bar-EMA. Das ist eine persönliche Lösung, kein universelles Gesetz. Die übertragbare Regel lautet: Jedes Werkzeug muss eine konkrete Entscheidung verbessern. Wenn es nur Bestätigung sucht, Aufmerksamkeit teilt oder zu spätem Handeln führt, kostet es mehr als es bringt.',
          'Die primären Price-Action-Werkzeuge bleiben direkt sichtbar: Hochs und Tiefs, Trend- und Kanallinien, Bar-Körper und Tails, Überlappung, Ausbrüche und Fehlausbrüche sowie die Beziehung des aktuellen Bars zu den vorherigen.',
        ],
        callout:
          'Nutze einen Indikator als Darstellungshilfe – nicht als Ersatz für Marktstruktur, Kontext und Invalidierung.',
      },
      {
        id: 'intro-08-diagram',
        type: 'diagram',
        title: 'Der Indikator folgt denselben Preisen',
        scenario: 'indicator-lag',
        caption:
          'Die geglättete Linie kann Struktur sichtbar machen, reagiert aber zwangsläufig auf bereits entstandene Kursdaten.',
        observations: [
          'Die Bars zeigen Ausbruch und schwächer werdenden Anschluss unmittelbar.',
          'Eine Glättung reduziert Rauschen, reagiert dafür später.',
          'Entscheidend ist, ob das zusätzliche Werkzeug eine vorab definierte Frage beantwortet.',
        ],
      },
      {
        id: 'intro-08-comparison',
        type: 'comparison',
        title: 'Werkzeug mit Auftrag oder Werkzeug als Beruhigung?',
        columns: [
          {
            title: 'Klarer Auftrag',
            tone: 'positive',
            points: [
              'EMA visualisiert durchschnittliche Lage',
              'VWAP beantwortet eine konkrete Benchmark-Frage',
              'Volumen markiert ungewöhnliche Aktivität',
              'Regel sagt, wann das Werkzeug ignoriert wird',
            ],
          },
          {
            title: 'Bestätigungssuche',
            tone: 'warning',
            points: [
              'so lange Indikatoren wechseln, bis einer zustimmt',
              'mehrere Zeitrahmen ohne feste Hierarchie',
              'Divergenz gegen jeden starken Trend handeln',
              'nach dem Einstieg neue Signale zur Beruhigung suchen',
            ],
          },
        ],
      },
      {
        id: 'intro-08-question',
        type: 'question',
        title: 'Wann verdient ein Indikator seinen Platz?',
        prompt:
          'Welche Begründung ist am stärksten?',
        options: [
          {
            id: 'popular',
            label: 'Viele bekannte Trader benutzen ihn',
            explanation:
              'Popularität sagt wenig darüber aus, ob er deine konkrete Entscheidung verbessert.',
          },
          {
            id: 'purpose',
            label: 'Er beantwortet reproduzierbar eine klar definierte Frage',
            explanation:
              'Richtig. Dann lässt sich sein Nutzen beobachten und testen.',
          },
          {
            id: 'comfort',
            label: 'Er beruhigt dich nach einem impulsiven Einstieg',
            explanation:
              'Das fördert Bestätigungssuche statt sauberes Risikomanagement.',
          },
        ],
        correctOptionId: 'purpose',
      },
      {
        id: 'intro-08-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Indikatoren transformieren überwiegend bereits vorhandene Marktdaten.',
          'Glättung kann helfen, reagiert aber später als der Kurs selbst.',
          'Divergenz ohne strukturelle Bestätigung ist kein verlässlicher Gegentrendgrund.',
          'Reduziere Werkzeuge auf solche mit einer klaren, überprüfbaren Aufgabe.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-02',
    title: 'Wahrscheinlichkeit statt Gewissheit',
    summary:
      'Warum der Markt meist nahe am Gleichgewicht liegt und Regeln nur als flexible Leitplanken funktionieren.',
    durationMinutes: 12,
    xp: 35,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Grauzonen und probabilistisches Denken',
      'Leitlinien statt unfehlbarer Regeln',
      '50:50-Grundzustand und zeitweise Richtungsedge',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-02-explain',
        type: 'explanation',
        eyebrow: 'Entscheiden unter Unsicherheit',
        title: 'Ein Setup ist ein Vorteil, kein Versprechen',
        paragraphs: [
          'Märkte werden von vielen gut informierten Teilnehmern mit gegensätzlichen Zielen gehandelt. Deshalb liegt die kurzfristige Richtungswahrscheinlichkeit häufig nahe am Gleichgewicht. Wenn Ziel und Stop gleich weit entfernt sind, ist ein zufälliger Einstieg in vielen normalen Situationen nicht weit von 50:50 entfernt – vor Kosten und ohne Extremfälle zu betrachten.',
          'Bestimmte Strukturen verschieben diese Ausgangslage. In einem starken Trend kann Fortsetzung vorübergehend deutlich wahrscheinlicher sein. Dieser Vorteil hält nicht unbegrenzt: Mit zunehmender Bewegung werden Ziele erreicht, neue Gegenseite erscheint und der Markt kehrt häufig in einen unsichereren Zustand zurück.',
          'Starre, immer gültige Regeln passen schlecht zu einem System, das zwischen Trend, Range und Übergang wechselt. Leitlinien sind trotzdem wertvoll: Sie strukturieren Beobachtung und Risiko. Du musst sie jedoch im aktuellen Kontext anwenden und akzeptieren, dass selbst ein sehr guter Trade verlieren kann.',
          'Erwartungswert verbindet Trefferquote, durchschnittlichen Gewinn, durchschnittlichen Verlust und Kosten. Eine hohe Trefferquote allein schützt nicht vor einer Strategie, deren seltene Verluste zu groß sind.',
        ],
        callout:
          'Guter Trade und Gewinner sind nicht dasselbe. Beurteile zuerst die damalige Entscheidung, danach die Statistik vieler Wiederholungen.',
      },
      {
        id: 'intro-02-diagram',
        type: 'diagram',
        title: 'Evidenz verschiebt das Gleichgewicht',
        scenario: 'probability-spectrum',
        caption:
          'Mehrere übereinstimmende Hinweise können einen Vorteil schaffen, beseitigen das Gegenrisiko aber nie.',
        observations: [
          'Nahe 50:50 ist Nichtstun oft die beste Entscheidung.',
          'Ein Vorteil entsteht aus mehreren unabhängigen Hinweisen, nicht aus einem magischen Signal.',
          'Nach einer ausgedehnten Bewegung kann die bisherige Edge wieder abnehmen.',
        ],
      },
      {
        id: 'intro-02-comparison',
        type: 'comparison',
        title: 'Zwei profitable Profile',
        columns: [
          {
            title: 'Höhere Trefferquote',
            tone: 'positive',
            points: [
              'Gewinnziel eher kleiner oder ähnlich dem Risiko',
              'viele saubere Wiederholungen nötig',
              'ein Ausreißer-Verlust kann viel zerstören',
              'Kosten dürfen den kleinen Vorteil nicht auffressen',
            ],
          },
          {
            title: 'Größere Gewinner',
            tone: 'neutral',
            points: [
              'niedrigere Trefferquote kann genügen',
              'Verluste konsequent begrenzen',
              'Gewinner müssen Raum erhalten',
              'längere Verlustserien psychologisch möglich',
            ],
          },
        ],
      },
      {
        id: 'intro-02-question',
        type: 'question',
        title: 'Rechne nicht nur Treffer',
        prompt:
          'Von zehn Trades gewinnen vier jeweils 100 Euro. Sechs verlieren jeweils 50 Euro. Wie lautet das Ergebnis vor Kosten?',
        options: [
          {
            id: 'loss',
            label: '100 Euro Verlust',
            explanation:
              'Vier Gewinner ergeben 400 Euro, die sechs Verluste zusammen 300 Euro.',
          },
          {
            id: 'flat',
            label: 'Unverändert',
            explanation:
              'Eine Trefferquote unter 50 Prozent bedeutet nicht automatisch Breakeven.',
          },
          {
            id: 'profit',
            label: '100 Euro Gewinn',
            explanation:
              'Richtig. 400 Euro minus 300 Euro ergeben 100 Euro vor Gebühren und Slippage.',
          },
        ],
        correctOptionId: 'profit',
      },
      {
        id: 'intro-02-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Die meiste Zeit ist der Richtungsedge klein.',
          'Kontext kann Wahrscheinlichkeiten verschieben, aber nie Sicherheit erzeugen.',
          'Leitlinien müssen flexibel auf das Marktregime angewandt werden.',
          'Erwartungswert zählt Trefferquote, Gewinn, Verlust und Kosten gemeinsam.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.introduction.lesson-03',
    title: 'Trend, Range und Übergang',
    summary:
      'Wie der Markt zwischen zeitweiser Richtungsklarheit und zweiseitigem Gleichgewicht pendelt.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Markt strebt häufig zu Unsicherheit',
      'Trendwahrscheinlichkeit und Rückkehr zur Balance',
      'Unterstützung, Widerstand und gemessene Ziele',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-03-explain',
        type: 'explanation',
        eyebrow: 'Marktzustand',
        title: 'Richtung ist ein vorübergehender Zustand',
        paragraphs: [
          'In einer Trading Range besitzen Käufer und Verkäufer an vielen Stellen ähnlich gute Argumente. Ausbrüche scheitern häufiger, Preis kehrt oft zur Mitte zurück und kleine Bewegungen erzeugen wenig Anschluss. Dieses Gleichgewicht erklärt, warum die kurzfristige Richtung dort schwer prognostizierbar ist.',
          'Ein Trend entsteht, wenn der Markt neue Preise in eine Richtung wiederholt akzeptiert. Rücksetzer bleiben begrenzt, Ausbrüche erhalten Anschluss und Versuche der Gegenseite scheitern. Fortsetzung ist dann zunächst wahrscheinlicher als eine sofortige vollständige Umkehr.',
          'Mit jeder Strecke nähert sich der Markt jedoch Bereichen, an denen Gewinne realisiert, neue Positionen eröffnet oder frühere Verluste ausgeglichen werden. Unterstützung, Widerstand und gemessene Ziele sind deshalb keine Mauern. Sie sind Zonen, in denen erneut mehr Uneinigkeit und damit Balance entstehen kann.',
          'Übergänge sind normal. Mehr Überlappung, tiefere Pullbacks und erfolgreiche Gegenbewegungen zeigen, dass ein Trend an Eindeutigkeit verliert. Umgekehrt wird eine Range erst durch Ausbruch plus Akzeptanz außerhalb ihrer Grenzen zu einem belastbaren Trend.',
        ],
        callout:
          'Zuerst Regime und Ort bestimmen, danach das einzelne Signal bewerten.',
      },
      {
        id: 'intro-03-diagram',
        type: 'diagram',
        title: 'Vom Trend über Balance zum neuen Impuls',
        scenario: 'trend-range-transition',
        caption:
          'Der Beispielverlauf wechselt nicht schlagartig. Überlappung und beidseitige Erfolge markieren den Übergang.',
        observations: [
          'Im Trend schließen Bars häufiger in Bewegungsrichtung.',
          'Im Übergang nehmen Überlappung, Tails und Gegenbewegungen zu.',
          'In der Balance werden Ausbruchsversuche häufiger zurückgewiesen.',
          'Erst Anschluss außerhalb der Range schafft wieder Richtungsedge.',
        ],
      },
      {
        id: 'intro-03-comparison',
        type: 'comparison',
        title: 'Erwartung nach Regime',
        columns: [
          {
            title: 'Trendlogik',
            tone: 'positive',
            points: [
              'Fortsetzung zunächst bevorzugen',
              'Pullbacks mit der Hauptrichtung prüfen',
              'Gegenbewegung braucht strukturelle Bestätigung',
              'Gewinner können weiter laufen als erwartet',
            ],
          },
          {
            title: 'Range-Logik',
            tone: 'warning',
            points: [
              'Ausbrüche scheitern häufiger',
              'Rand, Mitte und Gegenrand unterscheiden',
              'beide Richtungen bleiben glaubwürdig',
              'Ziele konservativer behandeln',
            ],
          },
        ],
      },
      {
        id: 'intro-03-question',
        type: 'question',
        title: 'Kontext vor Kerzenform',
        prompt:
          'Ein einzelner bearisher Reversal-Bar erscheint mitten in einem starken Aufwärtstrend. Was ist die vorsichtigste erste Interpretation?',
        options: [
          {
            id: 'short',
            label: 'Der neue Abwärtstrend ist bestätigt',
            explanation:
              'Ein einzelner Gegenbar reicht in einem starken Trend selten für diese Schlussfolgerung.',
          },
          {
            id: 'pullback',
            label: 'Ein Pullback könnte beginnen',
            explanation:
              'Richtig. Für eine Umkehr braucht es weitere strukturelle Bestätigung.',
          },
          {
            id: 'ignore',
            label: 'Der Bar enthält überhaupt keine Information',
            explanation:
              'Er kann nachlassendes Momentum anzeigen, auch wenn ein Gegentrade noch nicht sinnvoll ist.',
          },
        ],
        correctOptionId: 'pullback',
      },
      {
        id: 'intro-03-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Trading Ranges liegen näher an einem kurzfristigen Gleichgewicht.',
          'Trends schaffen zeitweise eine Richtungsedge.',
          'Unterstützung und Widerstand sind Zonen möglicher Neuverhandlung.',
          'Überlappung und Anschluss zeigen, ob sich das Regime verändert.',
        ],
      },
    ],
  },
] satisfies Lesson[];
