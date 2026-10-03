import type { Lesson } from '../../types';

export const partOneContextLessons = [
  {
    id: 'price-action-trends.part-01.lesson-07',
    title: 'Muster wachsen, überlappen und wechseln ihre Rolle',
    summary:
      'Warum ein kleines Setup Teil mehrerer größerer Strukturen sein kann und Namen der Entscheidung untergeordnet bleiben.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Entwicklung kleiner Muster zu größeren Mustern',
      'Mehrere gleichzeitig gültige Strukturbezeichnungen',
      'Gegensätzliche Setups innerhalb einer Trading Range',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-07-explain',
        type: 'explanation',
        eyebrow: 'Pattern Evolution',
        title: 'Ein fehlgeschlagenes kleines Muster verschwindet nicht – es wird Teil des nächsten',
        paragraphs: [
          'Ein kleiner Flag kann weit genug ausbrechen, um einem Scalper sein Ziel zu geben, und danach wieder zurücklaufen. Für diesen Horizont hat die ursprüngliche Struktur dann funktioniert, während aus dem Rücklauf gleichzeitig ein größerer Flag wird. Der kann später in dieselbe oder in die entgegengesetzte Richtung ausbrechen.',
          'Ein einzelnes Zwischenhoch kann gleichzeitig das zweite, tiefere Hoch eines Dreiecks und die rechte Schulter einer größeren Formation sein. Beide Beschreibungen können formal stimmen. Magische Kräfte hat keine davon; die spätere Richtung entscheidet der tatsächliche Kauf- und Verkaufsdruck.',
          'Gerade in Trading Ranges gibt es oft gleichzeitig bullische und bärische Setups. Ein kleiner Bear Flag kann in einem größeren Bull Flag liegen. Dieses Nebeneinander ist kein Analysefehler, sondern genau das, was ein ausgeglichener Markt macht.',
          'Nutze Namen deshalb als schnelle Orientierung. Führen mehrere plausible Beschreibungen zu widersprüchlichen Trades und hat keine Seite klare Evidenz, ist Warten oft die professionellste Entscheidung.',
        ],
        callout:
          'Muster sind ineinander verschachtelte Arbeitsmodelle. Der Markt schuldet keinem Namen eine bestimmte Auflösung.',
      },
      {
        id: 'part-01-07-diagram',
        type: 'diagram',
        title: 'Aus einem kleinen Flag wird eine größere Struktur',
        scenario: 'pattern-evolution',
        caption:
          'Der erste Ausbruch kann für einen kleinen Zielhorizont funktionieren, obwohl die anschließende Bewegung ein größeres, noch offenes Muster bildet.',
        observations: [
          'Die Gültigkeit eines Setups hängt auch von Ziel und Zeithorizont ab.',
          'Ein kleiner Fehlschlag kann den Gegenimpuls einer größeren Struktur erzeugen.',
          'Mehrere Musternamen dürfen gleichzeitig beschreibend richtig sein.',
          'Der nächste bestätigte Ausbruch ist wichtiger als die eleganteste Bezeichnung.',
        ],
      },
      {
        id: 'part-01-07-question',
        type: 'question',
        title: 'Welcher Name gewinnt?',
        prompt:
          'Du erkennst gleichzeitig einen kleinen Bear Flag und einen größeren Bull Flag. Beide liegen mitten in einer Trading Range. Was folgt daraus?',
        options: [
          {
            id: 'bear',
            label: 'Der kleinere Bear Flag muss gewinnen',
            explanation:
              'Die kleinere Struktur kann kurzfristig wirken, entscheidet aber nicht automatisch den größeren Ausbruch.',
          },
          {
            id: 'bull',
            label: 'Der größere Bull Flag muss gewinnen',
            explanation:
              'Auch Größe allein garantiert keine Auflösung, solange die Range beide Seiten trägt.',
          },
          {
            id: 'wait',
            label: 'Der Widerspruch bestätigt die zweiseitige Lage',
            explanation:
              'Richtig. Ohne klare Evidenz darfst du auf Preisakzeptanz oder einen besseren Ort warten.',
          },
        ],
        correctOptionId: 'wait',
      },
      {
        id: 'part-01-07-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Kleine Muster können funktionieren und anschließend in größere Muster übergehen.',
          'Eine Struktur kann mehrere korrekte Namen besitzen.',
          'Gegensätzliche Setups sind in Ranges normal.',
          'Wenn der Name keine klare Entscheidung liefert, warte auf die Reaktion des Preises.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-08',
    title: 'Fundamentaler Zielraum, technischer Weg',
    summary:
      'Wie langfristige Bewertung und kurzfristige Kursbewegung auf verschiedenen Horizonten zusammenspielen.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Langfristige Fundamentaldaten und institutionelle Bewertung',
      'Kurzfristiger Weg durch Nachrichten und Algorithmen',
      'Price Action als sichtbare Suche nach Wert',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-08-explain',
        type: 'explanation',
        eyebrow: 'Zeithorizonte',
        title: 'Ziel und Weg können von verschiedenen Kräften geprägt werden',
        paragraphs: [
          'Über Monate beeinflussen Gewinne, Zinsen, Wachstum, Risiko und andere Fundamentaldaten, welchen Wert große Marktteilnehmer einem Instrument zuschreiben. Diese Einschätzungen bewegen große Kapitalströme und können die übergeordnete Richtung prägen.',
          'Der Weg zu diesem langfristigen Ziel ist aber keine Gerade. Nachrichten, Absicherung, kurzfristige Statistikmodelle, Ausführungsalgorithmen und wechselnde Liquidität bestimmen, wie schnell und über welche Zwischenschritte der Preis dort ankommt.',
          'Price Action schaut auf die sichtbare Spur dieser Wertsuche. Ein Daytrader muss nicht die komplette Unternehmensbewertung nachbauen, wenn er seine Position nur ein paar Minuten hält. Er muss erkennen, welche Preise im aktuellen Fenster angenommen oder abgewiesen werden.',
          'Die Formel „Fundamentaldaten bestimmen eher das Ziel, kurzfristige Akteure eher den Weg“ ist ein nützliches Modell, keine scharfe Grenze. Beide Ebenen beeinflussen sich auch gegenseitig. Entscheidend ist, dass Analyse und Haltedauer zusammenpassen.',
        ],
        callout:
          'Eine langfristig richtige These kann in deinem Intraday-Trade trotzdem gegen dich laufen.',
      },
      {
        id: 'part-01-08-comparison',
        type: 'comparison',
        title: 'Zwei Aufgaben, zwei Informationsgewichte',
        columns: [
          {
            title: 'Langfristige Bewertung',
            tone: 'neutral',
            points: [
              'Gewinne, Wachstum, Zinsen und Risiko',
              'Kapitalallokation über Monate oder Jahre',
              'große tolerierte Zwischenbewegungen',
              'fundamentaler Zielraum im Vordergrund',
            ],
          },
          {
            title: 'Kurzfristiger Handel',
            tone: 'positive',
            points: [
              'aktuelle Akzeptanz und Zurückweisung',
              'Liquidität, Momentum und Anschluss',
              'klar begrenztes Intraday-Risiko',
              'tatsächlicher Weg im Chart im Vordergrund',
            ],
          },
        ],
      },
      {
        id: 'part-01-08-question',
        type: 'question',
        title: 'Welche Information passt zum Trade?',
        prompt:
          'Ein Unternehmen wirkt auf Jahressicht günstig bewertet. Der Intraday-Chart bricht jedoch stark nach unten aus und bestätigt den Bruch. Was ist für einen Fünf-Minuten-Long entscheidend?',
        options: [
          {
            id: 'valuation',
            label: 'Die langfristige Bewertung garantiert den Long',
            explanation:
              'Eine langfristige These kann große kurzfristige Rückgänge enthalten und schützt deinen engen Trade nicht.',
          },
          {
            id: 'intraday',
            label: 'Der bestätigte Abwärtsimpuls widerspricht dem kurzfristigen Long',
            explanation:
              'Richtig. Für diesen Horizont besitzt die aktuelle Preisreaktion mehr Gewicht.',
          },
          {
            id: 'unrelated',
            label: 'Fundamentaldaten und Preis haben grundsätzlich nichts miteinander zu tun',
            explanation:
              'Sie wirken auf unterschiedlichen Ebenen, sind aber nicht vollständig voneinander getrennt.',
          },
        ],
        correctOptionId: 'intraday',
      },
      {
        id: 'part-01-08-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Fundamentaldaten können den langfristigen Bewertungsrahmen prägen.',
          'Kurzfristige Orders bestimmen den konkreten Weg innerhalb dieses Rahmens.',
          'Price Action liest die aktuelle Reaktion statt eine vollständige Ursache zu behaupten.',
          'Informationsquelle, Zeithorizont und Risikoplan müssen zusammenpassen.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-09',
    title: 'Der Markt hat nicht nur einen Grund',
    summary:
      'Warum Institutionen unabhängig voneinander handeln und jede Kursbewegung ein Mix aus vielen Motiven ist.',
    durationMinutes: 10,
    xp: 35,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Unabhängige institutionelle Entscheidungen',
      'Verschiedene Systeme und Zeithorizonte in derselben Bewegung',
      'Erklärung als Modell statt vollständige Ursache',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-09-explain',
        type: 'explanation',
        eyebrow: 'Ursachen',
        title: 'Eine saubere Erklärung bleibt bescheiden',
        paragraphs: [
          'Große Marktteilnehmer einigen sich nicht auf eine gemeinsame Meinung. Sogar innerhalb einer einzigen Institution können Teams mit unterschiedlichen Mandaten und Zeithorizonten gegeneinander handeln. Der eine kauft langfristig, der andere senkt ein Intraday-Risiko, ein dritter sichert ein Optionsbuch ab.',
          'Jeder Bar ist deshalb das zusammengesetzte Ergebnis unzähliger Entscheidungen. Manche Akteure nutzen Charts, andere Fundamentaldaten, relative Bewertungen, Volatilitätsmodelle oder reine Ausführungsregeln. Aus dem fertigen Bar lässt sich dieser Mix nicht eindeutig zurückrechnen.',
          'Sagen wir, Käufer hätten an einer Unterstützung übernommen, ist das ein nützliches Arbeitsmodell. Es beschreibt die sichtbare Reaktion, nicht zwingend die eine wahre Ursache. Andere Käufer können aus ganz anderen Gründen am selben Preis aktiv geworden sein.',
          'Diese Bescheidenheit schützt vor Verschwörungsgeschichten. In sehr liquiden Märkten bringt es meist mehr, auf sichtbaren Fortschritt und gebündelte Liquidität zu achten, statt jede Bewegung als gezielte Manipulation gegen Privattrader zu deuten.',
        ],
        callout:
          'Eine Erklärung soll dir bei Entscheidungen helfen. Sie muss nicht jeden Marktteilnehmer identifizieren.',
      },
      {
        id: 'part-01-09-diagram',
        type: 'diagram',
        title: 'Viele Motive treffen in einem Preis zusammen',
        scenario: 'institutional-flow',
        caption:
          'Der sichtbare Kurs ist das gemeinsame Resultat verschiedener Akteure, Horizonte und Auftragsarten.',
        observations: [
          'Gegensätzliche Positionen können für beide Seiten innerhalb ihres Mandats sinnvoll sein.',
          'Ein Chart liefert Verhalten, aber keine vollständige Teilnehmerliste.',
          'Offensichtliche Preiszonen sind relevant, weil viele unabhängige Systeme darauf reagieren können.',
        ],
      },
      {
        id: 'part-01-09-question',
        type: 'question',
        title: 'Wie formulierst du sauber?',
        prompt:
          'Ein Markt fällt zur gleitenden Durchschnittslinie und steigt danach kräftig. Welche Aussage ist am belastbarsten?',
        options: [
          {
            id: 'one-reason',
            label: 'Alle Institutionen warteten exakt auf diese Linie',
            explanation:
              'Viele Akteure können aus ganz unterschiedlichen Gründen in derselben Zone handeln.',
          },
          {
            id: 'reaction',
            label: 'Die Zone wurde sichtbar gekauft und der Rücklauf fand Anschluss',
            explanation:
              'Richtig. Das beschreibt beobachtbares Verhalten, ohne eine unbeweisbare Einheitsursache zu behaupten.',
          },
          {
            id: 'personal',
            label: 'Die Bewegung diente nur dazu, kleine Stops abzuholen',
            explanation:
              'Diese persönliche Absicht lässt sich aus der Reaktion nicht ableiten.',
          },
        ],
        correctOptionId: 'reaction',
      },
      {
        id: 'part-01-09-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Institutionen handeln unabhängig und teilweise sogar gegeneinander.',
          'Jede Bewegung enthält viele Motive und Zeithorizonte.',
          'Markterklärungen sind Modelle, keine vollständigen Täterprofile.',
          'Beschreibe Reaktion und Fortschritt, bevor du Ursachen behauptest.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-10',
    title: 'Respektiere immer den Gegenfall',
    summary:
      'Wie bullische und bärische Szenarien dich vor falscher Sicherheit und überzeugenden Mediengeschichten schützen.',
    durationMinutes: 13,
    xp: 40,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Fortlaufender bullischer und bärischer Fall',
      'Plan für die reale Gegenwahrscheinlichkeit',
      'Medienanreize und technisch formulierte Fundamentalgeschichten',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-10-explain',
        type: 'explanation',
        eyebrow: 'Szenariodenken',
        title: 'Überzeugung ist kein Ersatz für einen Gegenplan',
        paragraphs: [
          'Ein Price-Action-Trader hält gleichzeitig eine bullische und eine bärische Lesart bereit. Auch wenn eine Seite gerade stärker aussieht, bleibt die andere real. Bei einem groben Vorteil von 60 zu 40 tritt der Gegenfall oft genug ein, um jeden fehlenden Stop und jede zu große Position zu bestrafen.',
          'Die Frage lautet deshalb nicht nur: Warum könnte mein Trade funktionieren? Überlege genauso konkret, welches Verhalten die Gegenseite bestätigen würde und wie du dann reagierst. Oft ist der richtige Schritt ein Exit; manchmal entsteht nach einem klaren Fehlschlag sogar ein eigenes Setup in Gegenrichtung.',
          'Medien belohnen dagegen klare, unterhaltsame Aussagen. Eine überzeugende Person kann eine einzelne Nachricht zur Hauptursache erklären, obwohl der Markt hunderte Variablen verarbeitet. Die Empfehlung endet trotzdem oft bei einer rein technischen Idee wie „Pullback im Aufwärtstrend kaufen“ – die Geschichte drumherum ist vor allem dramatische Verpackung.',
          'Wirtschaftsdaten bleiben wichtig, besonders für Volatilität und langfristige Bewertung. Das Problem ist nicht die Info, sondern die behauptete Gewissheit. Der Chart zeigt dir, wie alle Marktteilnehmer zusammen sie tatsächlich verarbeiten.',
        ],
        callout:
          'Je überzeugender deine Geschichte klingt, desto wichtiger die Frage: Was müsste ich sehen, damit sie falsch ist?',
      },
      {
        id: 'part-01-10-comparison',
        type: 'comparison',
        title: 'Prognose oder Szenarioplan?',
        columns: [
          {
            title: 'Starre Prognose',
            tone: 'warning',
            points: [
              'eine Ursache soll alles erklären',
              'Gegenargumente werden ausgeblendet',
              'kein klarer Punkt für Ungültigkeit',
              'Überzeugung wächst mit der Lautstärke',
            ],
          },
          {
            title: 'Szenarioplan',
            tone: 'positive',
            points: [
              'bullische und bärische Evidenz benannt',
              'Trigger und Invalidierung vorab festgelegt',
              'Position passt zur Unsicherheit',
              'neue Reaktion darf die Meinung ändern',
            ],
          },
        ],
      },
      {
        id: 'part-01-10-question',
        type: 'question',
        title: 'Was fehlt der überzeugenden Prognose?',
        prompt:
          'Ein Analyst erklärt sehr sicher, warum der Markt wegen eines Ereignisses steigen muss. Welche Zusatzfrage ist für deinen Trade am wichtigsten?',
        options: [
          {
            id: 'title',
            label: 'Welchen beruflichen Titel hat der Analyst?',
            explanation:
              'Status ersetzt weder messbare Evidenz noch einen Risikoplan.',
          },
          {
            id: 'wrong',
            label: 'Welche Preisreaktion würde die bullische These widerlegen?',
            explanation:
              'Richtig. Ein handelbares Szenario braucht eine beobachtbare Grenze und eine Reaktion darauf.',
          },
          {
            id: 'repeat',
            label: 'Wie oft kann ich die Begründung wiederholen?',
            explanation:
              'Wiederholung macht eine ungetestete Erklärung nicht wahrscheinlicher.',
          },
        ],
        correctOptionId: 'wrong',
      },
      {
        id: 'part-01-10-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Halte bullischen und bärischen Fall gleichzeitig verfügbar.',
          'Die Gegenwahrscheinlichkeit verlangt Stop, passende Größe und Reaktionsplan.',
          'Medien optimieren auf Verständlichkeit und Aufmerksamkeit, nicht auf deinen Erwartungswert.',
          'Entscheidend ist die Marktreaktion auf Information, nicht die Eleganz der Geschichte.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-11',
    title: 'Wie ein einziger Tick entsteht',
    summary:
      'Was Gebote, Angebote und aggressive Orders bewegen – und warum sichtbare Markttiefe selten ein einfacher Vorteil ist.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Gebot und Angebot beim nächsten Preisschritt',
      'Neubewertung nach jeder Preisänderung',
      'Grenzen statischer Markttiefe für diskretionäre Trader',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-11-explain',
        type: 'explanation',
        eyebrow: 'Auktionsmechanik',
        title: 'Preis bewegt sich, wenn die verfügbare Gegenseite am aktuellen Niveau nicht genügt',
        paragraphs: [
          'Ein Markt steigt nicht deshalb, weil es zahlenmäßig keine Verkäufer gäbe. Jeder ausgeführte Kauf braucht eine Verkaufsseite. Der Preis steigt, wenn kaufbereite Marktteilnehmer die Kontrakte am aktuellen Angebot aufnehmen und danach auch das nächsthöhere Angebot akzeptieren.',
          'Mit jedem neuen Preis bewerten alle ihre Orders neu. Long-Trader nehmen Gewinne mit, neue Verkäufer sehen einen attraktiveren Short-Preis, andere Käufer jagen das Momentum. Wiegt das angebotene Volumen schwerer als die unmittelbare Kaufbereitschaft, wandert der beste handelbare Preis wieder nach unten.',
          'Eine Orderleiter zeigt dir sichtbare Gebote und Angebote, aber nicht verlässlich, wie lange sie halten oder was dahintersteckt. Orders lassen sich verschieben, stornieren, verstecken oder von schnelleren Systemen als Signal nutzen. Eine große Zahl im DOM ist deshalb weder garantiert echte Unterstützung noch ein vollständiger Blick auf künftige Aggression.',
          'Orderflow-Werkzeuge können in einer klar definierten Methode nützlich sein. Die Warnung richtet sich gegen die naive Annahme, sichtbare Tiefe liefere automatisch einen leicht ausnutzbaren Vorteil – vor allem im Geschwindigkeitswettbewerb mit spezialisierten Algorithmen.',
        ],
        callout:
          'Richtung entsteht durch aggressive Ausführung gegen verfügbare Liquidität, nicht dadurch, dass man Personen zählt.',
      },
      {
        id: 'part-01-11-diagram',
        type: 'diagram',
        title: 'Vom aktuellen Angebot zum nächsten Preis',
        scenario: 'tick-auction',
        caption:
          'Erst wenn Käufer das verfügbare Angebot aufnehmen und höher bezahlen, wird der nächste Preis gehandelt.',
        observations: [
          'Bid und Ask zeigen angebotene Liquidität, nicht alle zukünftigen Entscheidungen.',
          'Aggressive Market-Orders verbrauchen die Gegenseite am aktuellen Preis.',
          'Stornierungen und neue Orders verändern die sichtbare Lage fortlaufend.',
          'Ein einzelnes DOM-Bild ist nur eine Momentaufnahme.',
        ],
      },
      {
        id: 'part-01-11-question',
        type: 'question',
        title: 'Was bewegt den Preis nach oben?',
        prompt:
          'Kauforders nehmen das gesamte verfügbare Angebot am aktuellen Ask auf. Weitere Käufer akzeptieren auch einen Tick höher. Was passiert?',
        options: [
          {
            id: 'up',
            label: 'Der nächste höhere Preis wird gehandelt',
            explanation:
              'Richtig. Die vorhandene Verkaufsliquidität wurde verbraucht und Käufer akzeptieren das höhere Angebot.',
          },
          {
            id: 'no-sellers',
            label: 'Es gab überhaupt keine Verkäufer',
            explanation:
              'Ohne Verkäufer wären die bisherigen Käufe nicht ausgeführt worden.',
          },
          {
            id: 'dom-guarantee',
            label: 'Jede sichtbare DOM-Größe bleibt verbindlich liegen',
            explanation:
              'Limit-Orders können sich verändern oder verschwinden; die Momentaufnahme ist keine Garantie.',
          },
        ],
        correctOptionId: 'up',
      },
      {
        id: 'part-01-11-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Jede Ausführung benötigt Käufer und Verkäufer.',
          'Preis steigt, wenn aggressive Nachfrage die aktuelle Angebotsliquidität verbraucht.',
          'Jeder neue Preis löst eine erneute Bewertung aller Orders aus.',
          'Sichtbare Markttiefe ist veränderlich und allein kein verlässliches Handelssignal.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-12',
    title: 'Price Action ist Spur und Einstiegshilfe',
    summary:
      'Warum institutionelle Aktivität das Muster erzeugt und ein Setup den frühen Teil einer Bewegung zeigt, die schon beginnt.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Institutionelle Aktivität als Hauptursache sichtbarer Price Action',
      'Setup als frühe Phase einer laufenden Bewegung',
      'Gefangene Trader als möglicher Verstärker',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-12-explain',
        type: 'explanation',
        eyebrow: 'Ursache und Signal',
        title: 'Das Muster startet den großen Auftrag nicht – es macht seine Wirkung sichtbar',
        paragraphs: [
          'Große Institutionen warten normalerweise nicht gemeinsam auf dasselbe kleine Ein-Minuten-Muster. Sie haben Kundenaufträge, Absicherungsbedarf, Bewertungsmodelle und Ausführungspläne. Diese Aktivität erzeugt die Price Action, die du hinterher im Chart siehst.',
          'Ein gutes Setup ist deshalb nicht der magische Auslöser der Bewegung. Meist ist es ihre frühe, sichtbare Phase. Fängt der Markt an, auf einer Seite voranzukommen, kann sich der kleinere Trader dank des Musters an eine Welle hängen, die gerade erst entsteht.',
          'Mit weiterem Anschluss erkennen mehr Trader dieselbe Richtung und steigen ein. Das verstärkt das Momentum. Scheitert gleichzeitig ein gegenläufiges Setup, müssen die dort positionierten Trader raus und liefern weitere Orders in Bewegungsrichtung.',
          'Die konkreten Motive bleiben meist unbekannt, und für den Trade brauchst du sie nicht. Du brauchst einen beobachtbaren Trigger, eine Stelle, an der die Idee ungültig wird, und genug Raum für den möglichen Gewinn.',
        ],
        callout:
          'Ein Setup ist kein Zauberschalter. Es ist ein strukturierter Einstieg in eine Bewegung, deren Kräfte schon sichtbar werden.',
      },
      {
        id: 'part-01-12-diagram',
        type: 'diagram',
        title: 'Frühe Spur, Anschluss und gefangene Gegenseite',
        scenario: 'breakout-outcomes',
        caption:
          'Anschluss zieht neue Teilnehmer an. Der Fehlschlag der Gegenseite kann durch erzwungene Ausstiege zusätzlichen Schub liefern.',
        observations: [
          'Der erste Strukturbruch macht die beginnende Bewegung sichtbar.',
          'Follow-through bestätigt, dass mehr als ein kurzer Test stattfindet.',
          'Gefangene Gegenpositionen müssen in Bewegungsrichtung schließen.',
          'Trotz guter Struktur bleibt ein Stop nötig, weil andere große Orders die Bewegung jederzeit überlagern können.',
        ],
      },
      {
        id: 'part-01-12-question',
        type: 'question',
        title: 'Was leistet das Setup?',
        prompt:
          'Ein bullisches Setup erscheint, nachdem größere Kauforders bereits höhere Preise erzeugen. Welche Beschreibung passt am besten?',
        options: [
          {
            id: 'cause',
            label: 'Das kleine Muster zwingt Institutionen erst zum Kaufen',
            explanation:
              'Institutionelle Aktivität kann das Muster bereits erzeugt haben, bevor du es benennst.',
          },
          {
            id: 'entry',
            label: 'Das Muster bietet einen strukturierten Einstieg in die entstehende Bewegung',
            explanation:
              'Richtig. Es macht Fortschritt und Risiko für deinen Zeithorizont handelbar.',
          },
          {
            id: 'guarantee',
            label: 'Das Muster garantiert die vollständige Trendstrecke',
            explanation:
              'Neue Gegenorders können die Bewegung jederzeit stoppen; ein Setup bleibt probabilistisch.',
          },
        ],
        correctOptionId: 'entry',
      },
      {
        id: 'part-01-12-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Große Aufträge erzeugen Price Action häufiger, als kleine Muster große Aufträge auslösen.',
          'Ein Setup macht die frühe Phase einer Bewegung für deinen Plan nutzbar.',
          'Anschluss und gefangene Gegenseite können Momentum verstärken.',
          'Trigger, Invalidierung und Gewinnraum bleiben wichtiger als eine perfekte Ursprungsgeschichte.',
        ],
      },
    ],
  },
] satisfies Lesson[];
