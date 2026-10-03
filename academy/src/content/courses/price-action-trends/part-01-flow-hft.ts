import type { Lesson } from '../../types';

export const partOneFlowAndHftLessons = [
  {
    id: 'price-action-trends.part-01.lesson-13',
    title: 'Warum große Käufer auch am Hoch weiterkaufen',
    summary:
      'Wie institutionelle Ausführung, Momentumprogramme und Serienlogik gerichtete Bewegungen am Laufen halten.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Große Aufträge werden über Zeit ausgeführt',
      'Käufe während steigender Preise und Momentumprogramme',
      'Einzelverlust am Extrem innerhalb einer profitablen Serie',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-13-explain',
        type: 'explanation',
        eyebrow: 'Institutionelle Ausführung',
        title: 'Ein großer Auftrag ist kein einzelner Klick',
        paragraphs: [
          'Ein Fonds, der eine große Position aufbauen muss, kauft die ganze Menge selten zu einem einzigen Preis. Er teilt den Auftrag in viele kleine Ausführungen. Steigt der Markt währenddessen weiter, muss er sich entscheiden: auf einen Rücklauf hoffen oder höhere Preise akzeptieren, damit das gewünschte Volumen überhaupt zusammenkommt.',
          'Andere Programme kaufen gezielt, solange Momentum und statistische Bedingungen passen. Dass der Kurs schon gestiegen ist, hält sie nicht auf. Der Trend endet erst, wenn genug Systeme ihr Ziel erreicht haben, die Bedingungen nicht mehr gelten oder die Gegenseite an wichtigen Zonen stark genug wird.',
          'Deshalb kann ein professionelles System sogar den höchsten Tick einer Bewegung kaufen. Dieser letzte Kauf verliert vielleicht. Das macht das System nicht unprofitabel, wenn die vielen Käufe davor in der Serie genug verdient haben. Profis denken in Verteilungen, nicht in perfekten Einzeltreffern.',
          'Für den kleineren Trader heißt das nicht, jedem Trend hinterherzulaufen. Es erklärt, warum „schon hoch“ allein kein Short-Signal ist und warum Pullbacks in starken Trends kleiner ausfallen können, als du erwartest.',
        ],
        callout:
          'Ein hoher Preis ist keine eigenständige Umkehrbedingung. Erst sichtbarer Kontrollverlust ändert die Trendlogik.',
      },
      {
        id: 'part-01-13-diagram',
        type: 'diagram',
        title: 'Großer Auftrag, viele Teilausführungen',
        scenario: 'institutional-wave',
        caption:
          'Ein institutioneller Bedarf wird entlang der Bewegung verteilt. Rückläufe werden genutzt, doch fehlende Rückläufe können Käufe zu höheren Preisen erzwingen.',
        observations: [
          'Order-Splitting verringert die sichtbare Wirkung eines einzelnen großen Auftrags.',
          'Momentumprogramme können die gleiche Richtung zusätzlich verstärken.',
          'Der letzte Kauf darf verlieren, wenn die Gesamtserie positiv bleibt.',
          'Eine Umkehr braucht mehr Evidenz als die bloße Aussage „zu weit gestiegen“.',
        ],
      },
      {
        id: 'part-01-13-question',
        type: 'question',
        title: 'Wer kauft noch am Hoch?',
        prompt:
          'Ein starker Trend steigt ohne tiefen Pullback. Warum können professionelle Käufer trotzdem weiter ausführen?',
        options: [
          {
            id: 'must-win',
            label: 'Sie wissen sicher, dass jeder einzelne Kauf gewinnt',
            explanation:
              'Auch professionelle Systeme besitzen Verlusttrades und kennen den exakten Endpunkt nicht.',
          },
          {
            id: 'program',
            label: 'Auftragsbedarf und Systembedingungen bestehen weiterhin',
            explanation:
              'Richtig. Große Aufträge und Momentumregeln können weitere Käufe trotz höherer Preise verlangen.',
          },
          {
            id: 'retail',
            label: 'Am Hoch handeln ausschließlich unerfahrene Privattrader',
            explanation:
              'Große liquide Märkte enthalten auch am Extrem professionelles Volumen auf beiden Seiten.',
          },
        ],
        correctOptionId: 'program',
      },
      {
        id: 'part-01-13-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Große Positionen werden meist in vielen Teilen aufgebaut.',
          'Institutionen können steigende Preise akzeptieren, wenn ihr Auftragsbedarf fortbesteht.',
          'Ein System darf den letzten Trade verlieren und über die Serie profitabel sein.',
          '„Zu hoch“ ersetzt kein bestätigtes Umkehrsignal.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-14',
    title: 'Scalp oder Swing: Die Mathematik muss passen',
    summary:
      'Wie Trefferquote, Stop, Ziel und Handelsstil zusammen den Erwartungswert bestimmen.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Hohe erforderliche Trefferquote bei ungünstigem Chance-Risiko-Verhältnis',
      'Mindestens ausgeglichenes Verhältnis bei hoher Setup-Qualität',
      'Swing-Ansatz mit größerem Ziel und niedrigerer Trefferquote',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-14-explain',
        type: 'explanation',
        eyebrow: 'Trade-Mathematik',
        title: 'Trefferquote allein sagt fast nichts',
        paragraphs: [
          'Ein Scalper, dessen durchschnittlicher Verlust größer ist als sein durchschnittlicher Gewinn, braucht eine sehr hohe Trefferquote. Gewinnt er zum Beispiel oft einen kleinen Betrag, verliert aber gelegentlich deutlich mehr, können wenige Fehltrades viele Erfolge auslöschen. Kosten und Slippage erhöhen die nötige Quote zusätzlich.',
          'Für die meisten Trader gilt: Den Stop wählt man nicht routinemäßig größer als das Ziel. Ein Setup mit mindestens ähnlich großem Gewinnpotenzial wie Risiko wird interessant, sobald zugleich ein belastbarer Wahrscheinlichkeitsvorteil dazukommt. Die konkreten Schwellenwerte sind Lernmodelle – prüfe sie mit echten Daten deines eigenen Setups.',
          'Anfänger können von Swing-Ideen profitieren, bei denen der mögliche Gewinn etwa doppelt so groß ist wie das anfängliche Risiko. Die Trefferquote darf dann niedriger sein, solange Auswahl, Ausführung und Kosten den positiven Erwartungswert halten. Solche Chancen sind seltener und verlangen Geduld.',
          'Starke Breakouts können eine höhere Fortsetzungswahrscheinlichkeit und viel Gewinnraum bieten. Psychologisch sind sie schwierig: Die Zeit zum Analysieren ist knapp, die Bars sind groß, und die Stops sind in Zahlen weiter weg. Pass deshalb die Positionsgröße an das strukturelle Risiko an.',
        ],
        callout:
          'Ein guter Trade ist keine hohe Trefferquote. Er ist eine tragfähige Kombination aus Wahrscheinlichkeit, Gewinn, Verlust und Kosten.',
      },
      {
        id: 'part-01-14-diagram',
        type: 'diagram',
        title: 'Risiko und Ziel als gemeinsamer Vertrag',
        scenario: 'risk-reward',
        caption:
          'Die Lage von Stop und Ziel bestimmt zusammen mit der Trefferwahrscheinlichkeit, ob eine Serie mathematisch sinnvoll sein kann.',
        observations: [
          'Ein weiter Stop und kleines Ziel verlangen eine ungewöhnlich hohe Netto-Trefferquote.',
          'Ein größeres Ziel erlaubt mehr Verlierer, sofern die Gewinner tatsächlich erreicht werden.',
          'Kosten und Slippage gehören in jede reale Erwartungswertrechnung.',
          'Die Positionsgröße richtet sich nach dem Geldrisiko, nicht nach der optischen Bargröße allein.',
        ],
      },
      {
        id: 'part-01-14-question',
        type: 'question',
        title: 'Welche Statistik fehlt?',
        prompt:
          'Strategie A gewinnt 75 Prozent ihrer Trades. Ohne welche Information kannst du ihre Qualität nicht beurteilen?',
        options: [
          {
            id: 'colors',
            label: 'Farbe der Chartkerzen',
            explanation:
              'Die Darstellung ändert den mathematischen Erwartungswert nicht.',
          },
          {
            id: 'payoff',
            label: 'Durchschnittlicher Gewinn, Verlust und Kosten',
            explanation:
              'Richtig. Eine hohe Quote kann bei großen Verlusten trotzdem unprofitabel sein.',
          },
          {
            id: 'certainty',
            label: 'Ob der nächste Trade sicher gewinnt',
            explanation:
              'Serienstatistik liefert keine Sicherheit für den einzelnen Versuch.',
          },
        ],
        correctOptionId: 'payoff',
      },
      {
        id: 'part-01-14-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Trefferquote wird erst zusammen mit durchschnittlichem Gewinn und Verlust aussagekräftig.',
          'Ungünstiges Chance-Risiko-Verhältnis verlangt eine sehr hohe Quote.',
          'Swing-Trades können eine niedrigere Quote durch größere Gewinner ausgleichen.',
          'Starke Breakouts verlangen wegen größerer Stops eine kleinere, passende Positionsgröße.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-15',
    title: 'Offensichtliche Stops und verteidigte Einstiege',
    summary:
      'Wie Tests eines Entry-Bars und das Scheitern eines High 2 die Erwartung des Marktes verändern können.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Test des Entry-Bar-Extrems ohne Stop-Auslösung',
      'High-2-Einstieg nach zweibeinigem Pullback',
      'Bruch des Pullback-Tiefs als Hinweis auf ein weiteres Bein',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-15-explain',
        type: 'explanation',
        eyebrow: 'Preisverteidigung',
        title: 'Ein Test ist erst durch seine Reaktion informativ',
        paragraphs: [
          'Nach einem Long-Einstieg liegt ein offensichtlicher Schutzstop oft knapp unter einem markanten Tief oder unter dem Entry-Bar. Läuft ein Pullback genau bis dorthin und dreht, ohne die Stops auszulösen, zeigt die Reaktion echte Kaufbereitschaft an einer gut sichtbaren Stelle.',
          'Das heißt nicht, dass eine einzelne Institution persönlich deinen Stop verteidigt. Viele unabhängige Trader und Systeme erkennen denselben Referenzpreis. Ihre gebündelten Käufe können das Niveau halten, solange die bullische These noch plausibel ist.',
          'Ein High 2 entsteht vereinfacht nach einem zweiten Abwärtsbein in einem bullischen Kontext, wenn der Markt wieder über das Hoch des vorherigen Bars steigt. Scheitert dieser Einstieg und fällt der Kurs unter das Tief des gesamten zweibeinigen Pullbacks, kippt die Info: Ein weiteres Abwärtsbein wird wahrscheinlicher.',
          'Die Lehre daraus ist nicht „jeder sichtbare Stop hält“. Beobachte lieber, ob der Markt schon vor dem Niveau reagiert, es nur antestet oder mit Anschluss durchgeht. Diese Abfolge entscheidet zwischen Verteidigung und Fehlschlag.',
        ],
        callout:
          'Offensichtliche Niveaus sind Entscheidungszonen. Das Signal kommt erst, wenn sie halten oder mit Anschluss durchbrochen werden.',
      },
      {
        id: 'part-01-15-diagram',
        type: 'diagram',
        title: 'High 1, zweites Bein und High 2',
        scenario: 'high-low-count',
        caption:
          'Die Zählung beschreibt aufeinanderfolgende Versuche, einen Pullback in Trendrichtung zu beenden.',
        observations: [
          'High 1 ist der erste neue Aufwärtsversuch innerhalb des Pullbacks.',
          'Nach einem weiteren Abwärtsbein wird der nächste Versuch zum High 2.',
          'Ein High 2 ist Kontext, keine Garantie.',
          'Der Bruch des gesamten Pullback-Tiefs zeigt, dass Käufer die sichtbare Zone nicht halten konnten.',
        ],
      },
      {
        id: 'part-01-15-question',
        type: 'question',
        title: 'Wann kippt die Information?',
        prompt:
          'Nach einem High-2-Long fällt der Markt unter das Tief des vollständigen zweibeinigen Pullbacks und schließt dort stark. Was ist die saubere Neubewertung?',
        options: [
          {
            id: 'hold',
            label: 'Der High 2 bleibt unverändert bullisch',
            explanation:
              'Der Bruch des gesamten Pullback-Tiefs widerspricht der bullischen Fortsetzung deutlich.',
          },
          {
            id: 'down-leg',
            label: 'Ein weiteres Abwärtsbein wird wahrscheinlicher',
            explanation:
              'Richtig. Der sichtbare Long-Versuch ist gescheitert und Käufer müssen möglicherweise aussteigen.',
          },
          {
            id: 'personal-stop',
            label: 'Der Markt hat nur deinen persönlichen Stop gejagt',
            explanation:
              'Das Niveau ist wegen gebündelter Orders relevant, nicht wegen deiner einzelnen Position.',
          },
        ],
        correctOptionId: 'down-leg',
      },
      {
        id: 'part-01-15-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Offensichtliche Entry- und Stop-Zonen werden von vielen Marktteilnehmern beobachtet.',
          'Ein punktgenauer Test mit Reaktion kann Verteidigung zeigen.',
          'High 2 bezeichnet den zweiten Aufwärtsversuch nach zwei Abwärtsbeinen.',
          'Ein bestätigter Bruch des Pullback-Tiefs verändert die Erwartung zugunsten eines weiteren Abwärtsbeins.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-16',
    title: 'Was Hochfrequenzhandel tatsächlich ist',
    summary:
      'Horizonte, Modelle, winzige Vorteile und wie du die genannten Größenordnungen historisch einordnest.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action · High-Frequency Trading',
    sourceAnchors: [
      'Quantitative Modelle und sehr kurze Haltedauern',
      'Latenz als Teil des Wettbewerbsvorteils',
      'Historische Volumenangaben',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-16-explain',
        type: 'explanation',
        eyebrow: 'High-Frequency Trading',
        title: 'HFT ist eine Familie automatisierter Kurzfriststrategien',
        paragraphs: [
          'Hochfrequenzhandel ist keine einzelne Strategie. Gemeint sind automatisierte Verfahren, die sehr viele Entscheidungen mit extrem kurzer Verzögerung treffen. Manche Positionen existieren nur Sekundenbruchteile, andere Modelle halten länger. Gemeinsam ist ihnen, dass Software systematisch ausführt.',
          'Die Modelle können Preisunterschiede, Orderfluss, Spreads, statistische Abweichungen, Beziehungen zwischen Märkten oder maschinenlesbare Nachrichten verarbeiten. Vor dem Einsatz werden die Ideen getestet; im Betrieb prüfen Teams laufend, ob der erwartete kleine Vorteil noch da ist.',
          'Geschwindigkeit wird besonders wichtig, wenn viele Firmen dieselbe kurzlebige Chance suchen. Rechenleistung, Datenleitung, Nähe zur Börse und effiziente Software drücken die Latenz. In diesem Wettbewerb hat ein manueller Trader keinen realistischen Geschwindigkeitsvorteil.',
          'Hier tauchen konkrete Prozentwerte und Firmenbeispiele aus der Zeit um 2010 auf. Sie zeigen die damalige Größenordnung, sind aber keine aktuelle Marktstatistik. Dauerhaft wichtig bleibt: Automatisierte Ausführung stellt einen großen Teil der Liquidität und prägt kurzfristige Preisbewegungen.',
        ],
        callout:
          'Historische Zahlen geben dir Kontext. Zeitlos ist der strukturelle Unterschied bei Geschwindigkeit und Größenordnung.',
      },
      {
        id: 'part-01-16-comparison',
        type: 'comparison',
        title: 'HFT und diskretionäres Chartlesen lösen andere Aufgaben',
        columns: [
          {
            title: 'HFT-System',
            tone: 'neutral',
            points: [
              'sehr kleine Edge pro Ausführung',
              'extrem viele Wiederholungen',
              'Millisekunden bis kurze Haltedauer',
              'Infrastruktur und Automatisierung entscheidend',
            ],
          },
          {
            title: 'Diskretionärer Trader',
            tone: 'positive',
            points: [
              'wenige ausgewählte Situationen',
              'größerer erwarteter Weg pro Trade',
              'Sekunden bis Stunden je nach Plan',
              'Kontext, Geduld und Risikosteuerung entscheidend',
            ],
          },
        ],
      },
      {
        id: 'part-01-16-question',
        type: 'question',
        title: 'Wo solltest du nicht konkurrieren?',
        prompt:
          'Eine Gelegenheit existiert nur wenige Millisekunden und wird von colocated Algorithmen gehandelt. Welche Schlussfolgerung ist sinnvoll?',
        options: [
          {
            id: 'faster-click',
            label: 'Du musst nur schneller mit der Maus klicken',
            explanation:
              'Die Infrastruktur- und Verarbeitungsgeschwindigkeit automatisierter Systeme ist manuell nicht erreichbar.',
          },
          {
            id: 'other-edge',
            label: 'Du brauchst eine Edge auf einem langsameren, beobachtbaren Horizont',
            explanation:
              'Richtig. Konkurriere dort, wo Kontext und selektive Entscheidung einen realistischen Vorteil bieten.',
          },
          {
            id: 'ignore-algos',
            label: 'Automatisierte Orders haben keinen Einfluss auf kurzfristige Preise',
            explanation:
              'Sie tragen wesentlich zu kurzfristiger Ausführung und Liquidität bei.',
          },
        ],
        correctOptionId: 'other-edge',
      },
      {
        id: 'part-01-16-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'HFT umfasst viele automatisierte Strategien, nicht ein einziges Muster.',
          'Kleine statistische Vorteile werden mit Geschwindigkeit und hoher Frequenz genutzt.',
          'Ein manueller Trader sollte nicht im Latenzwettbewerb antreten.',
          'Zeitgebundene Zahlen gelten als historischer Kontext, nicht als heutige Fakten.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-17',
    title: 'Kleine Edge, sehr viele Wiederholungen',
    summary:
      'Warum statistische Sicherheit aus einer großen Stichprobe kommt und nicht aus einem spektakulären Einzeltrade.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Teil I · Price Action · High-Frequency Trading',
    sourceAnchors: [
      'Casino-Analogie für kleine systematische Vorteile',
      'Breite Körbe und häufige Wiederholung',
      'Testen und Abschalten nachlassender Strategien',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-17-explain',
        type: 'explanation',
        eyebrow: 'Serienlogik',
        title: 'Die Zuverlässigkeit liegt in der Stichprobe',
        paragraphs: [
          'Ein statistisches System hat pro Trade vielleicht nur einen winzigen Vorteil. Wird derselbe belastbare Vorteil aber über viele Instrumente und tausende Ausführungen wiederholt, nähert sich das Gesamtergebnis eher seinem Erwartungswert. Genau darin ähnelt die Logik einem Casino: Das Haus gewinnt nicht jede Runde, aber die große Zahl ähnlicher Runden macht den kleinen strukturellen Vorteil wirtschaftlich nutzbar.',
          'Als Beispiel nutzt man breite Aktienkörbe und einfache relative Regeln. Die konkrete Strategie ist keine Empfehlung. Es geht um das Prinzip: Eine etwas bessere Verteilung von Gewinnern und Verlierern kann bei genug Wiederholungen und niedrigen Kosten relevant werden.',
          'Eine getestete Edge bleibt nicht automatisch für immer bestehen. Andere Marktteilnehmer entdecken sie, Kosten ändern sich, oder das Marktverhalten wechselt. Systematische Firmen prüfen deshalb laufend, ob die realen Ergebnisse noch zur getesteten Verteilung passen, und fahren Modelle zurück oder stellen sie ein, wenn der Vorteil verschwindet.',
          'Als manueller Trader hast du weniger Wiederholungen. Umso wichtiger sind saubere Definitionen, ein Trade-Journal und Geduld: Ohne vergleichbare Stichprobe kannst du nicht sagen, ob ein Ergebnis aus Können, Pech oder Glück kam.',
        ],
        callout:
          'Eine Edge zeigt sich durch Wiederholung. Ein einzelner Gewinner beweist genauso wenig wie ein einzelner Verlust.',
      },
      {
        id: 'part-01-17-diagram',
        type: 'diagram',
        title: 'Ein kleiner Vorteil stabilisiert sich erst über viele Versuche',
        scenario: 'hft-small-edge',
        caption:
          'Kurze Serien schwanken stark. Mit wachsender Stichprobe wird der zugrunde liegende kleine Vorteil besser erkennbar.',
        observations: [
          'Auch ein positives System enthält zufällige Verlustserien.',
          'Viele unabhängige Wiederholungen reduzieren den Einfluss einzelner Ausreißer.',
          'Kosten können eine kleine Brutto-Edge vollständig aufzehren.',
          'Laufende Validierung prüft, ob die historische Verteilung noch gilt.',
        ],
      },
      {
        id: 'part-01-17-question',
        type: 'question',
        title: 'Was beweist eine Gewinnwoche?',
        prompt:
          'Ein neues Setup gewinnt vier von fünf Trades. Was kannst du seriös daraus schließen?',
        options: [
          {
            id: 'proven',
            label: 'Die Edge ist endgültig bewiesen',
            explanation:
              'Fünf Trades sind viel zu wenig, um Zufall von einem stabilen Vorteil zu trennen.',
          },
          {
            id: 'promising',
            label: 'Das Ergebnis ist interessant, braucht aber deutlich mehr vergleichbare Daten',
            explanation:
              'Richtig. Erst eine größere Stichprobe und Kostenbetrachtung erlauben eine belastbare Aussage.',
          },
          {
            id: 'no-value',
            label: 'Statistische Auswertung ist für manuelle Trader nutzlos',
            explanation:
              'Auch diskretionäre Setups können klar definiert und über Serien geprüft werden.',
          },
        ],
        correctOptionId: 'promising',
      },
      {
        id: 'part-01-17-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein kleiner Vorteil kann durch sehr viele Wiederholungen wertvoll werden.',
          'Verlustserien widersprechen einer positiven Edge nicht automatisch.',
          'Kosten und Regimewechsel können den Vorteil zerstören.',
          'Manuelle Trader benötigen standardisierte Journaldaten statt Erinnerung und Bauchgefühl.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-18',
    title: 'Geschwindigkeit, Nachrichten und versteckte Großaufträge',
    summary:
      'Wie Algorithmen Daten in Sekundenbruchteilen verarbeiten und große Orders in kleinere Ausführungen zerlegen.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action · High-Frequency Trading',
    sourceAnchors: [
      'Standort- und Geschwindigkeitsvorteil',
      'Maschinenlesbare Nachrichten und automatisierte Analyse',
      'Aufteilung großer Orders und Erkennung durch andere Algorithmen',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-18-explain',
        type: 'explanation',
        eyebrow: 'Maschinenmarkt',
        title: 'Daten werden verarbeitet, bevor ein Mensch die Überschrift gelesen hat',
        paragraphs: [
          'Im kurzfristigsten Wettbewerb zählt jede Verzögerung. Firmen bauen ihre Infrastruktur nahe an den Börsen auf, optimieren Datenwege und nutzen spezialisierte Software, damit Marktdaten früher verarbeitet und Orders schneller bestätigt werden. Schon kleine Zeitvorteile können bei sehr vielen Ausführungen wirtschaftlich ins Gewicht fallen.',
          'Nachrichten lassen sich maschinenlesbar übertragen. Algorithmen sortieren Zahlen, Abweichungen und Textmerkmale und reagieren, bevor ein Mensch den ganzen Bericht verstanden hat. Andere Modelle verknüpfen die Meldung mit dem Kursverhalten, verwandten Märkten und bestehenden Positionen.',
          'Auch große Langfristaufträge werden algorithmisch ausgeführt. Software zerlegt sie in kleinere Teile, um den Marktimpact zu begrenzen und die volle Absicht nicht sofort zu zeigen. Gegenspieler versuchen ihrerseits, solche Muster zu erkennen und sich davor zu positionieren.',
          'Der Chart zeigt das Nettoergebnis dieses Wettkampfs. Die einzelnen Programme musst du nicht entschlüsseln. Für deinen Horizont zählt, ob nach der schnellen Erstreaktion eine klare Richtung, Akzeptanz und ein kontrollierbarer Einstieg entstehen.',
        ],
        callout:
          'Die Nachricht liest du nicht schneller als die Maschine. Aber du kannst in Ruhe beurteilen, was der Markt daraus macht.',
      },
      {
        id: 'part-01-18-diagram',
        type: 'diagram',
        title: 'Vom Datenereignis zur sichtbaren Reaktion',
        scenario: 'latency-race',
        caption:
          'Algorithmen verarbeiten und handeln die erste Information. Der diskretionäre Trader wartet auf die resultierende Struktur.',
        observations: [
          'Datenfeed, Analyse und Orderausführung laufen automatisiert in sehr kurzer Zeit.',
          'Großaufträge erscheinen häufig als Folge kleinerer Ausführungen.',
          'Andere Systeme reagieren auf dieselben Signale und verändern die Edge.',
          'Der manuelle Vorteil liegt eher in Auswahl und Kontext als in Geschwindigkeit.',
        ],
      },
      {
        id: 'part-01-18-question',
        type: 'question',
        title: 'Wo liegt dein realistischer Vorteil?',
        prompt:
          'Ein wichtiger Bericht wird veröffentlicht und Algorithmen reagieren innerhalb von Millisekunden. Was ist für einen manuellen Trader sinnvoll?',
        options: [
          {
            id: 'race',
            label: 'Die erste Marktorder ohne gelesene Daten senden',
            explanation:
              'Damit trittst du ohne Informations- oder Geschwindigkeitsvorteil in den volatilsten Moment ein.',
          },
          {
            id: 'reaction',
            label: 'Erstreaktion und entstehende Struktur abwarten',
            explanation:
              'Richtig. Nach der maschinellen Reaktion kann ein kontrollierbarer Price-Action-Kontext entstehen.',
          },
          {
            id: 'decode',
            label: 'Jeden beteiligten Algorithmus identifizieren',
            explanation:
              'Die Programme und Motive sind nicht vollständig sichtbar und für die spätere Strukturentscheidung nicht nötig.',
          },
        ],
        correctOptionId: 'reaction',
      },
      {
        id: 'part-01-18-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'HFT-Infrastruktur gewinnt den Kampf um die erste Reaktion.',
          'Maschinenlesbare Daten erlauben automatisierte Nachrichtenverarbeitung.',
          'Großaufträge werden zerlegt, während andere Systeme ihre Spur suchen.',
          'Der diskretionäre Trader kann die resultierende Struktur statt die Mikrosekunde handeln.',
        ],
      },
    ],
  },
] satisfies Lesson[];
