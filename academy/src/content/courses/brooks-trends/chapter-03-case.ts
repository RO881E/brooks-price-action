import type { Lesson } from '../../types';

export const chapterThreeCaseLessons = [
  {
    id: 'brooks-trends.chapter-03.lesson-09',
    title: 'Chartfall 3.1: Der gescheiterte Tiefausbruch',
    summary:
      'Wie ein neues Tief unter dem Vortagestief Käufer anzieht, Verkäufer zum Eindecken zwingt und einen bullischen Spike startet.',
    durationMinutes: 15,
    xp: 55,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Erster Abschnitt',
    sourceAnchors: [
      'Test und Fehlausbruch unter dem Vortagestief',
      'Neues Tagestief vor der scharfen Rally bis Bar 4',
      'Rückkehr zur Balance nach erfolgreichen und gescheiterten Breakouts',
      'Gewinnmitnahmen der Bären und aggressive Käufe am zu tiefen Preis',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-09-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Bars 2 bis 4',
        title: 'Das neue Tief findet keine Akzeptanz',
        paragraphs: [
          'Der Handel fällt unter das Tief des Vortages und erzeugt sogar ein neues Tief. Ein Grenzbruch allein wäre zunächst bärisch. Entscheidend ist jedoch die Reaktion: Der Markt kann die tieferen Preise nicht halten und dreht in einem scharfen bullischen Spike nach oben.',
          'Dieses Scheitern zeigt ein vorübergehendes Einverständnis beider Seiten darüber, dass der neue Preisbereich zu niedrig war. Bären, die bereits Short sind, sichern Gewinne oder verkaufen nicht weiter. Bullen sehen einen günstigen Preis und kaufen aggressiv. Beide Veränderungen verschieben den Orderstrom nach oben.',
          'Die Rally bis in den Bereich von Bar 4 ist deshalb nicht einfach eine zufällige Gegenbewegung. Sie ist die Antwort auf einen misslungenen Versuch, unter dem Vortagestief einen neuen bärischen Bereich zu etablieren.',
          'Sowohl erfolgreiche als auch gescheiterte Breakouts enden irgendwann in zweiseitigem Handel. Nach der schnellen Neubewertung braucht der Markt einen neuen Bereich, in dem Käufer und Verkäufer wieder genug Gegenseite finden. Die Frage ist nur, wie weit der Spike läuft, bevor diese Balance beginnt.',
        ],
        callout:
          'Ein neues Extrem ist keine Bestätigung. Erst die Fähigkeit, außerhalb der alten Grenze zu bleiben, zeigt Akzeptanz.',
      },
      {
        id: 'chapter-03-09-diagram',
        type: 'diagram',
        title: 'Unter dem Vortagestief entsteht eine Falle',
        scenario: 'failed-low-breakout',
        caption:
          'Der Markt bricht nach unten, wird sofort zurückgekauft und schafft mit einem bullischen Spike Abstand zur gescheiterten Zone.',
        observations: [
          'Die Referenz ist das Vortagestief, nicht irgendein isolierter Bar.',
          'Das neue Tief hält nur kurz und erhält keinen Verkaufsanschluss.',
          'Short-Gewinnmitnahmen entfernen Angebot und erzeugen Käufe beim Eindecken.',
          'Neue Bullen verstärken den Spike bis zu einem höheren Gleichgewichtsbereich.',
        ],
      },
      {
        id: 'chapter-03-09-question',
        type: 'question',
        title: 'Was macht den Tiefbruch zum Fehlausbruch?',
        prompt:
          'Der Markt fällt unter das Vortagestief, dreht aber sofort mit mehreren starken Bull-Bars. Welche Information ist am wichtigsten?',
        options: [
          {
            id: 'new-low',
            label: 'Es wurde überhaupt ein neues Tief gedruckt',
            explanation:
              'Das neue Tief beschreibt nur den Versuch; die schnelle Rückkehr beurteilt seinen Erfolg.',
          },
          {
            id: 'rejection',
            label: 'Tiefe Preise wurden deutlich zurückgewiesen',
            explanation:
              'Richtig. Fehlender Verkaufsanschluss und der starke Gegenmove zeigen mangelnde Akzeptanz.',
          },
          {
            id: 'yesterday-irrelevant',
            label: 'Das Vortagestief spielt keine Rolle',
            explanation:
              'Vortagesmarken sind oft beobachtete Referenzzonen und geben dem Breakout seinen Kontext.',
          },
        ],
        correctOptionId: 'rejection',
      },
      {
        id: 'chapter-03-09-recap',
        type: 'recap',
        title: 'Die Orderlogik hinter der Rally',
        points: [
          'Der Markt testet und unterschreitet das Vortagestief.',
          'Ohne Akzeptanz wird der Tiefbruch zum Fehlausbruch.',
          'Bären reduzieren Verkäufe und decken Shorts ein; Bullen kaufen aggressiv.',
          'Der bullische Spike sucht anschließend einen neuen Gleichgewichtsbereich.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-10',
    title: 'Chartfall 3.1: Die Hochs werden erneut geprüft',
    summary:
      'Wie Bar 4 den frühen Verkaufsbereich testet, warum ein zweiter Versuch wahrscheinlich wird und Bar 5 die neue Unterstützung prüft.',
    durationMinutes: 15,
    xp: 55,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Bars 1 bis 5',
    sourceAnchors: [
      'Bar 1 als Signalbereich des frühen Selloffs',
      'Bar 4 als Higher-High-Test des Hochs von Bar 1',
      'Starkes Momentum und Erwartung eines weiteren Tests',
      'Kurzer Pullback vor erfolgreichem Ausbruch über Bar 1',
      'Bar 5 als Higher-Low-Test des Signalbereichs von Bar 2',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-10-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Referenzen verbinden',
        title: 'Jeder neue Swing beantwortet eine ältere Frage',
        paragraphs: [
          'Bar 1 leitete am Tagesbeginn den frühen Selloff ein. Wären die Bären weiterhin klar in Kontrolle, sollte der Markt den Bereich über seinem Hoch nicht leicht zurückerobern. Nach dem Fehlausbruch am Tagestief wird genau diese Zone zur nächsten wichtigen Prüfung.',
          'Bar 4 erreicht das Hoch von Bar 1 als höheres Hoch. Der bullische Weg dorthin besitzt jedoch so viel Momentum, dass eine einzige Zurückweisung kaum genügt, um die Käufer vollständig zu stoppen. Nach einem starken Test ist mindestens ein weiterer Versuch des Bereichs plausibel.',
          'Der erste Rücklauf besteht nur aus einem Bar. Dadurch entsteht zwar ein unvollkommenes Doppeltop, aber keine tiefe bärische Umkehrstruktur. Der nächste bullische Angriff überschreitet den Bereich von Bar 1 und bestätigt, dass das frühere Verkaufssignal seine Kontrolle verloren hat.',
          'Bar 5 bildet danach ein höheres Tief. Gleichzeitig prüft sie den oberen Bereich des bullischen Signal-Bars um Bar 2. Was zunächst Widerstand oder Einstiegsschwelle war, dient nun als Unterstützungstest innerhalb der neuen Aufwärtsstruktur.',
        ],
        callout:
          'Lies einen Swing nicht allein: Frage immer, welchen früheren Einstieg, Signalbereich oder Extrempunkt er gerade überprüft.',
      },
      {
        id: 'chapter-03-10-diagram',
        type: 'diagram',
        title: 'Vom Widerstandstest zur neuen Unterstützung',
        scenario: 'repeated-high-test',
        caption:
          'Der erste Angriff auf das alte Hoch wird kurz zurückgewiesen. Das starke Momentum erzeugt einen zweiten Versuch; anschließend testet ein höheres Tief den Ausbruchsbereich.',
        observations: [
          'Das Hoch von Bar 1 ist die Kontrollmarke des frühen Selloffs.',
          'Bar 4 erreicht die Zone mit starkem bullischem Momentum.',
          'Ein flacher Ein-Bar-Pullback lässt die Käuferthese weitgehend intakt.',
          'Bar 5 prüft tiefer, ob die zuvor überwundene bullische Zone jetzt hält.',
        ],
      },
      {
        id: 'chapter-03-10-compare',
        type: 'comparison',
        title: 'Erster Test und zweiter Angriff',
        columns: [
          {
            title: 'Erster Kontakt',
            tone: 'neutral',
            points: [
              'alte Verkäufer reagieren am Hoch',
              'kurzer Rücklauf zeigt noch Gegenwehr',
              'Momentum bis zur Zone bleibt als Evidenz bestehen',
            ],
          },
          {
            title: 'Zweiter Versuch',
            tone: 'positive',
            points: [
              'Käufer greifen mit wenig verlorenem Boden erneut an',
              'altes Hoch wird überschritten',
              'späterer Higher-Low-Test prüft die neue Unterstützung',
            ],
          },
        ],
      },
      {
        id: 'chapter-03-10-question',
        type: 'question',
        title: 'Warum ist ein weiterer Test plausibel?',
        prompt:
          'Ein starker bullischer Spike erreicht alten Widerstand und zieht sich nur einen Bar zurück. Welche Erwartung passt am besten?',
        options: [
          {
            id: 'finished',
            label: 'Die Käufer sind sicher vollständig fertig',
            explanation:
              'Starkes Momentum plus flacher Pullback spricht eher dafür, dass Käufer noch einmal versuchen.',
          },
          {
            id: 'retest',
            label: 'Mindestens ein weiterer Test ist plausibel',
            explanation:
              'Richtig. Die Käufer haben kaum Boden verloren und können die Zone erneut angreifen.',
          },
          {
            id: 'ignore-level',
            label: 'Das alte Hoch darf nicht mehr betrachtet werden',
            explanation:
              'Gerade wiederholte Reaktionen machen den Bereich analytisch relevant.',
          },
        ],
        correctOptionId: 'retest',
      },
      {
        id: 'chapter-03-10-recap',
        type: 'recap',
        title: 'Tests bilden eine Kette',
        points: [
          'Bar 4 prüft, ob der Verkaufsbereich von Bar 1 noch kontrolliert.',
          'Starkes Momentum und ein flacher Rücklauf begünstigen einen zweiten Angriff.',
          'Der erfolgreiche Bruch entwertet das frühere Verkaufssignal.',
          'Bar 5 prüft als höheres Tief die neue bullische Unterstützung.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-11',
    title: 'Chartfall 3.1: Aus dem Spike wird Balance',
    summary:
      'Wie die Rally ab Bar 2 als Breakout gelesen wird, der Kanal ab Bar 5 an Qualität verliert und Bar 7 den Kanalbeginn testet.',
    durationMinutes: 15,
    xp: 55,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Bars 2 bis 7',
    sourceAnchors: [
      'Scharfer Move als Breakout aus einer vorherigen Struktur',
      'Bullischer Spike ab Bar 2 als Neubewertung zu höheren Preisen',
      'Kanal zwischen Bars 5 und 6 mit Überlappung und Gegenbewegungen',
      'Gewinnmitnahmen der Bullen und gestaffelte Shorts der Bären',
      'Rücklauf zum Kanalbeginn um Bar 7',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-11-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Struktur statt Etikett',
        title: 'Jeder scharfe Move bricht aus etwas aus',
        paragraphs: [
          'Die kräftige Rally ab Bar 2 kann auf mehreren Ebenen als Breakout verstanden werden: Sie überschreitet eine kleine fallende Trendlinie, verlässt den Bereich des bullischen Reversal-Bars und beendet die Akzeptanz am neuen Tagestief. Der genaue Name ist weniger wichtig als die Aussage, dass der Markt die tiefen Preise schnell verlässt.',
          'Der Spike transportiert den Kurs in einen Bereich, in dem wieder genügend Gegenseite vorhanden ist. Nach dem ersten Pullback bei Bar 5 setzt sich der Aufstieg fort, aber die Struktur verändert sich. Zwischen Bar 5 und Bar 6 entstehen mehr Überlappung, kleine Abwärtsbewegungen, Tails und sichtbares Zögern.',
          'Bullen realisieren in diesem Kanal zunehmend Gewinne. Bären beginnen, oberhalb alter Hochs oder nach schwachen Fortsetzungsversuchen Shorts aufzubauen. Der Kurs steigt noch, doch der Anstieg ist nicht mehr so einseitig wie der Spike.',
          'Bar 7 führt den Markt zurück zum Start dieses Kanals. Damit wird die Zone um Bar 5 getestet und die vorherige Prognose erfüllt: Der beginnende Kanal war bereits der Keim der späteren Trading Range.',
        ],
        callout:
          'Ein Kanal kann weiter in Trendrichtung laufen und gleichzeitig immer mehr Beweise für die kommende Balance sammeln.',
      },
      {
        id: 'chapter-03-11-diagram',
        type: 'diagram',
        title: 'Schneller Breakout, langsamer Kanal, vollständiger Rücktest',
        scenario: 'spike-to-overlap',
        caption:
          'Die synthetische Sequenz zeigt denselben Funktionswechsel wie der Chartfall: erst schnelle Neubewertung, dann überlappende Fortsetzung und schließlich der Test des Kanalbeginns.',
        observations: [
          'Der Spike schafft Distanz mit wenigen Unterbrechungen.',
          'Ab dem ersten Pullback sinkt die Steigung und Überlappung nimmt zu.',
          'Neue Hochs bleiben bullisch, zeigen aber weniger Effizienz.',
          'Der tiefere Rücklauf testet den Anfang der langsameren Kanalphase.',
        ],
      },
      {
        id: 'chapter-03-11-question',
        type: 'question',
        title: 'Was verrät die Überlappung?',
        prompt:
          'Der Markt macht im Bullenkanal weiter höhere Hochs, doch Tails, Gegenbars und kleine Rückläufe häufen sich. Welche Aussage passt?',
        options: [
          {
            id: 'stronger-one-sided',
            label: 'Der Trend wird immer einseitiger',
            explanation:
              'Die zunehmende Überlappung zeigt das Gegenteil: mehr zweiseitige Aktivität.',
          },
          {
            id: 'balance-growing',
            label: 'Im Trend wächst bereits die Balance',
            explanation:
              'Richtig. Die Richtung bleibt vorerst bullisch, doch die Gegenseite gewinnt Raum.',
          },
          {
            id: 'irrelevant',
            label: 'Die Barstruktur hat keine Aussage',
            explanation:
              'Überlappung, Tails und Gegenbars zeigen, wie effizient die Trendseite noch arbeitet.',
          },
        ],
        correctOptionId: 'balance-growing',
      },
      {
        id: 'chapter-03-11-recap',
        type: 'recap',
        title: 'Die Entwicklung von Bar 2 bis Bar 7',
        points: [
          'Der Move ab Bar 2 verlässt den zu tief bewerteten Bereich als Breakout.',
          'Bar 5 markiert den ersten Pullback und damit den Kanalbeginn.',
          'Bis Bar 6 wächst zweiseitiger Handel trotz höherer Preise.',
          'Bar 7 testet die Zone, an der der Kanal und die spätere Range begannen.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-12',
    title: 'Chartfall 3.1: Tests greifen ineinander',
    summary:
      'Wie Bars 7 bis 9 gleichzeitig frühere Swings, Vortagesmarken, den Durchschnitt und einen Long-Einstieg prüfen.',
    durationMinutes: 16,
    xp: 60,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Bars 7 bis 9',
    sourceAnchors: [
      'Bar 7 als Higher-Low-Test von Bar 5 und erneuter Test des Vortagestiefs',
      'Bar 8 als Lower-High-Test von Bar 6 und Vortagesschluss',
      'Doppeltop am Hoch des bearischen Inside-Bars',
      'Rücklauf zum gleitenden Durchschnitt vor neuem Tageshoch',
      'Bar 9 als Breakeven-Test eines früheren Long-Einstiegs',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-12-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Mehrfachreferenzen',
        title: 'Ein Swing kann mehrere alte Entscheidungen gleichzeitig testen',
        paragraphs: [
          'Bar 7 ist ein höheres Tief gegenüber Bar 5 und zugleich der zweite größere Test des Vortagestiefs. Der Markt lehnt die tiefe Zone erneut ab. Dadurch entsteht eine Doppeltop-ähnliche Unterstützung auf der Unterseite – praktisch ein Doppeltief, aus dem die nächste Rally startet.',
          'Bar 8 erreicht als tieferes Hoch den Bereich von Bar 6 und den Schluss des Vortages. Statt nach oben auszubrechen, reagiert der Markt dort bearisch. Zusätzlich testet die Rally das Hoch eines bearischen Inside-Bars, der zuvor den Selloff nach Bar 6 signalisiert hatte. Mehrere Referenzen bündeln sich damit in derselben Widerstandszone.',
          'Der Rückgang von Bar 8 zu Bar 9 testet den gleitenden Durchschnitt. Weil danach ein neues Tageshoch gelingt, wird der Rücklauf im Nachhinein als Pullback innerhalb des bullischen Breakout-Versuchs bestätigt und nicht als Beginn eines nachhaltigen Bärentrends.',
          'Bar 9 prüft außerdem den Long-Einstieg über einem früheren Bull-Bar nach Bar 7. Der Markt verfehlt einen typischen Breakeven-Stop knapp. Wenn Käufer ihren Einstand erfolgreich verteidigen und Verkäufer keine tiefere Akzeptanz erreichen, steigt die Chance, dass der nächste Schub ein neues Hoch erzeugt.',
        ],
        callout:
          'Je mehr unabhängige Referenzen in einer Zone zusammenfallen, desto genauer musst du die Reaktion beobachten – nicht desto sicherer ist die Richtung.',
      },
      {
        id: 'chapter-03-12-diagram',
        type: 'diagram',
        title: 'Eine Kette aus Unterstützung, Widerstand und Breakeven',
        scenario: 'breakeven-defense',
        caption:
          'Mehrere Zonen überlagern sich: Doppeltief und Vortagesreferenz unten, altes Hoch und Vortagesschluss oben, danach MA- und Einstiegstest.',
        observations: [
          'Bar 7 verbindet höheres Tief, Doppeltief und erneuten Vortagestest.',
          'Bar 8 bündelt tieferes Hoch, früheres Swing-Hoch und Vortagesschluss.',
          'Der Pullback zu Bar 9 prüft dynamische und statische Unterstützung.',
          'Ein knapp gehaltener Breakeven-Bereich zeigt, dass Longs noch nicht aufgegeben werden.',
        ],
      },
      {
        id: 'chapter-03-12-compare',
        type: 'comparison',
        title: 'Was Bar 9 entscheiden muss',
        columns: [
          {
            title: 'Unterstützung hält',
            tone: 'positive',
            points: [
              'Longs verteidigen den Einstiegsbereich',
              'Verkäufer schaffen keinen tieferen Schluss',
              'neuer Angriff auf das Tageshoch wird wahrscheinlicher',
            ],
          },
          {
            title: 'Unterstützung bricht',
            tone: 'warning',
            points: [
              'Breakeven-Stops lösen aus',
              'neue Verkäufe erhalten Anschluss',
              'die Range kann nach unten erweitert werden',
            ],
          },
        ],
      },
      {
        id: 'chapter-03-12-question',
        type: 'question',
        title: 'Was bedeutet ein geschützter Einstand?',
        prompt:
          'Ein Pullback nähert sich dem früheren Long-Einstieg, dreht knapp davor und erhält bullischen Anschluss. Welche Schlussfolgerung ist angemessen?',
        options: [
          {
            id: 'certainty',
            label: 'Ein neues Hoch ist garantiert',
            explanation:
              'Die Verteidigung verbessert die bullische Wahrscheinlichkeit, beseitigt aber kein Risiko.',
          },
          {
            id: 'strength',
            label: 'Die Käufer zeigen relative Stärke',
            explanation:
              'Richtig. Sie lassen ihre Positionen nicht bis in einen klaren Verlust kippen und übernehmen erneut.',
          },
          {
            id: 'bear-control',
            label: 'Die Bären haben bereits volle Kontrolle',
            explanation:
              'Ohne Bruch und Anschluss unter der Unterstützung ist diese Aussage nicht begründet.',
          },
        ],
        correctOptionId: 'strength',
      },
      {
        id: 'chapter-03-12-recap',
        type: 'recap',
        title: 'Nicht einen Test, sondern das Netz lesen',
        points: [
          'Bar 7 lehnt die untere Referenzzone erneut ab.',
          'Bar 8 scheitert an einer gebündelten oberen Widerstandszone.',
          'Bar 9 prüft Durchschnitt, Pullback-Struktur und früheren Long-Einstieg.',
          'Die Verteidigung des Einstands erhöht die Chance auf ein neues Hoch, garantiert es aber nicht.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-13',
    title: 'Chartfall 3.1: Den Always-in-Zustand erkennen',
    summary:
      'Wie Bar 3 die bullische Kontrolle bestätigt, Breakouts nach unten scheitern und Trader ihre Richtung am dominanten Szenario ausrichten.',
    durationMinutes: 15,
    xp: 55,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Always-in-Auswertung',
    sourceAnchors: [
      'Bar 3 als starker Bull-Bar und funktionale Breakout-Lücke',
      'Bruch des Bullenkanals als mögliche Bear Flag',
      'Bullische Körper und Überlappung während der Abwärtsversuche',
      'Gescheiterter Bruch unter Vortagesswing und Tagestief',
      'Always-in-up nach der starken Rally',
      'Long-Chancen am Markt, bei Bar 5 und bei Bar 7',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-13-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Dominante Richtung',
        title: 'Wenn eine Entscheidung erzwungen wäre: Long oder Short?',
        paragraphs: [
          'Bar 3 ist ein großer bullischer Trendbar und macht aus dem Tief-Reversal einen klaren Bullenmove. Er kann als Breakout und zugleich als funktionale Breakout-Lücke gelesen werden: Der Markt durchquert den alten Bereich so schnell, dass dort kaum ausgeglichener Handel stattfindet.',
          'Später fällt der Kurs unter die Begrenzung des Bullenkanals und zum Vortagesschluss zurück. Weil ein Bullenkanal auch als Bear Flag enden kann, verdient dieser Abwärtsversuch Aufmerksamkeit. Die Folgebars zeigen jedoch bullische Körper und deutliche Überlappung. Verkäufer schaffen keinen sauberen, einseitigen Fortschritt.',
          'Auch der Bruch unter ein früheres Swing-Tief des Vortages scheitert und markiert schließlich das Tagestief. Die bärischen Versuche testen also wichtige Referenzen, können aber keine Akzeptanz darunter herstellen.',
          'In dieser Situation ist der Markt „always-in up“: Wenn ein Trader gezwungen wäre, zu jedem Zeitpunkt nur Long oder Short zu sein, wäre Long die Seite mit der stärkeren Gesamtevidenz. Wer den Reversal-Einstieg bei Bar 2 verpasst hat, kann nach Bar 3 den Markt oder den nächsten Pullback handeln; Bar 5 und später das Doppeltief bei Bar 7 bieten strukturierte Folgechancen.',
        ],
        callout:
          'Always-in ist kein Dauerhaltebefehl. Es ist eine klare Antwort auf die Frage, welche Seite aktuell die bessere Gesamtevidenz besitzt.',
      },
      {
        id: 'chapter-03-13-diagram',
        type: 'diagram',
        title: 'Bullischer Breakout, schwache Gegenversuche, neue Long-Chancen',
        scenario: 'breakout-gap-always-in',
        caption:
          'Der starke Breakout legt die dominante Richtung fest. Spätere bärische Tests scheitern; Pullbacks werden dadurch zu möglichen Einstiegen in Trendrichtung.',
        observations: [
          'Der große Bull-Bar schafft eine funktionale Lücke und verschiebt den Always-in-Zustand.',
          'Der Bruch der Kanallinie allein reicht nicht für Always-in short.',
          'Überlappung und bullische Körper im Selloff zeigen mangelnde Verkaufseffizienz.',
          'Gescheiterte Tiefbrüche geben Trendkäufern neue Pullback-Gelegenheiten.',
        ],
      },
      {
        id: 'chapter-03-13-question',
        type: 'question',
        title: 'Wann ändert sich der Always-in-Zustand?',
        prompt:
          'Nach einem starken Bull-Breakout fällt der Markt kurz unter die Kanallinie, aber die Bars überlappen und schließen mehrfach bullisch. Reicht der Linienbruch für Always-in short?',
        options: [
          {
            id: 'yes-line',
            label: 'Ja, jede gebrochene Linie dreht den Zustand',
            explanation:
              'Eine Linie ist nur ein Hinweis. Ohne bärischen Anschluss bleibt die Gesamtstruktur bullisch.',
          },
          {
            id: 'no-followthrough',
            label: 'Nein, es fehlt bärischer Kontrollgewinn',
            explanation:
              'Richtig. Always-in bewertet die gesamte Evidenz und nicht einen einzelnen Grenzbruch.',
          },
          {
            id: 'never-change',
            label: 'Nein, Always-in kann niemals wechseln',
            explanation:
              'Der Zustand kann wechseln, sobald ein überzeugender Gegenbreakout mit Anschluss die Kontrolle übernimmt.',
          },
        ],
        correctOptionId: 'no-followthrough',
      },
      {
        id: 'chapter-03-13-recap',
        type: 'recap',
        title: 'Die dominante Seite filtern',
        points: [
          'Bar 3 bestätigt die bullische Neubewertung mit einem starken Breakout-Bar.',
          'Abwärtsversuche erhalten trotz wichtiger Testzonen keinen sauberen Anschluss.',
          'Always-in up beschreibt die bessere Gesamtrichtung, nicht Risikofreiheit.',
          'Verpasste frühe Einstiege können durch strukturierte Pullbacks ersetzt werden.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-03.lesson-14',
    title: 'Chartfall 3.1: Der komplette Spike-and-Channel-Plan',
    summary:
      'Wie Skalierung, zweibeiniger Rücklauf, Kanalbodentest und verschachtelte Wedges, Doppelböden und Flags zu einer Gesamtlesart werden.',
    durationMinutes: 18,
    xp: 65,
    sourceUnit: 'Kapitel 3 · Chartfall 3.1 · Gesamtstruktur',
    sourceAnchors: [
      'Spike als Bar 3 allein oder als gesamte Bewegung von Bar 2 bis 4',
      'Kanal ab dem Pullback bei Bar 5',
      'Gewinnmitnahmen und gestaffelte Shorts im Kanal',
      'Zweibeinige Korrektur vom Keilhoch zum Kanalboden',
      'Short-Eindeckungen und erneute Long-Käufe am Kanalbeginn',
      'Mögliche Folgen: Doppeltief, Range oder Bärentrend',
      'Wedge, Double Top, Double Bottom, Triangle und Final Flag in Bars 2 bis 9',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-03-14-explain',
        type: 'explanation',
        eyebrow: 'Chartfall 3.1 · Synthese',
        title: 'Aus vielen Mustern wird eine einzige Auktionsgeschichte',
        paragraphs: [
          'Je nach gewählter Auflösung kann Bar 3 allein als Spike gelten oder die gesamte Bewegung von Bar 2 bis Bar 4. Entscheidend ist die Funktion: schnelle bullische Neubewertung nach einem gescheiterten Tiefausbruch. Bar 5 liefert den ersten klaren Pullback; damit beginnt der weniger dringliche Kanal bis in den Bereich von Bar 6.',
          'Einige Bären verkaufen bereits unter Bar 4 und staffeln weitere Shorts an späteren Pullbacks oder Hochs. Andere warten auf den keilförmigen oberen Bereich, in dem auch Bullen Gewinne realisieren. Sobald Spike, Pullback und Kanal sichtbar sind, wird ein späterer Test des Kanaltiefs oder Kanalbeginns zu einer vernünftigen Arbeitshypothese.',
          'Der Rücklauf vom Keilhoch zum Bereich von Bar 7 besitzt zwei Beine. Dort sichern späte Shorts Gewinne; frühe Shorts können nahe ihrem durchschnittlichen Einstieg aussteigen. Gleichzeitig kaufen Bullen wieder in der Zone um Bar 5. Diese vereinten Kauforders erzeugen gewöhnlich einen Bounce. Er kann ein Doppeltief und neue Rally einleiten, eine längere Range beginnen oder nach schwachem Verlauf doch in einen Bärentrend übergehen.',
          'Innerhalb dieser großen Geschichte liegen mehrere kleinere Strukturen: Das Tief bei Bar 2 beendet einen dritten Abwärtsschub und kann als Wedge-Reversal gelesen werden. Bar 6 bildet mit dem letzten Bar des Vortages eine Double-Top-Bear-Flag. Bars 5 und 7 formen eine Double-Bottom-Bull-Flag; Bar 9 ist ein weiterer Double-Bottom-Pullback. Die Sequenz 5 bis 9 kann wie ein Dreieck aussehen, doch die vorherige bullische Stärke gibt dem neutralen Umriss einen bullischen Kontext.',
          'Bar 7 ist zugleich ein Wedge-Bull-Flag nach drei Abwärtsschüben ab Bar 6. Bar 8 kann als Final-Flag-Reversal nach der mehrbarigen bullischen Pause gelesen werden. Die vielen Namen widersprechen sich nicht. Sie beschreiben verschiedene Ausschnitte derselben Auktion. Priorität haben immer vorherige Stärke, Breakout-Qualität, Reaktion an Tests und Follow-through.',
        ],
        callout:
          'Muster sind Ebenen einer Karte. Die Route bestimmt die Gesamtgeschichte aus Spike, nachlassender Effizienz, Test und Reaktion.',
      },
      {
        id: 'chapter-03-14-diagram',
        type: 'diagram',
        title: 'Der vollständige Spike-and-Channel-Zyklus',
        scenario: 'spike-channel-playbook',
        caption:
          'Das Schaubild verbindet Spike, ersten Pullback, Keilkanal, zweibeinigen Rücklauf, Kanalbodentest und die drei möglichen Reaktionen danach.',
        observations: [
          'Der Spike kann eng oder weiter gefasst werden; seine Funktion bleibt schnelle Neubewertung.',
          'Der erste Pullback markiert den Kanalbeginn und späteren Testbereich.',
          'Der reifende Kanal enthält Gewinnmitnahmen und wachsende Gegenpositionen.',
          'Am Kanalboden treffen Short-Eindeckungen und neue Longs aufeinander.',
          'Erst die Qualität des Bounce entscheidet zwischen Rally, Range und späterem Bärentrend.',
        ],
      },
      {
        id: 'chapter-03-14-compare',
        type: 'comparison',
        title: 'Nach dem Kanalbodentest bleiben drei Pfade offen',
        columns: [
          {
            title: 'Kräftiger Bounce',
            tone: 'positive',
            points: [
              'Doppeltief oder Bull Flag bestätigt sich',
              'Käufer schaffen neues Hoch',
              'Always-in bleibt oder wird wieder bullisch',
            ],
          },
          {
            title: 'Schwacher Bounce',
            tone: 'warning',
            points: [
              'mehrere überlappende Schwünge bilden Range',
              'zweiter Test der Unterseite bleibt möglich',
              'bärischer Breakout kann später übernehmen',
            ],
          },
        ],
      },
      {
        id: 'chapter-03-14-question',
        type: 'question',
        title: 'Wie ordnest du konkurrierende Musternamen?',
        prompt:
          'Bars 5 bis 9 lassen sich gleichzeitig als Dreieck, Double-Bottom-Pullback und Wedge-Bull-Flag beschreiben. Welche Analyse ist am nützlichsten?',
        options: [
          {
            id: 'one-perfect-name',
            label: 'Nur ein Name darf richtig sein',
            explanation:
              'Verschiedene Muster können unterschiedliche Ausschnitte derselben Preisbewegung beschreiben.',
          },
          {
            id: 'context-first',
            label: 'Kontext, Tests und Follow-through gewichten',
            explanation:
              'Richtig. Die vorherige bullische Stärke und die Reaktion an den Testzonen geben den Formen ihre Bedeutung.',
          },
          {
            id: 'ignore-sequence',
            label: 'Nur die letzte Kerzenfarbe betrachten',
            explanation:
              'Damit würden Spike, Kanal, mehrfacher Test und die dominante Auktionsrichtung verloren gehen.',
          },
        ],
        correctOptionId: 'context-first',
      },
      {
        id: 'chapter-03-14-recap',
        type: 'recap',
        title: 'Kapitel 3 als Entscheidungsablauf',
        points: [
          'Breakout und Spike verlassen eine alte Balance schnell.',
          'Der erste Pullback startet den langsameren Kanal und oft die spätere Range.',
          'Kanäle werden häufig zum Ursprung zurückgetestet und können als Gegenflags enden.',
          'Tests prüfen Zonen; Reaktion und Anschluss entscheiden über Akzeptanz.',
          'Umkehrversuche führen häufiger zuerst in Balance als direkt in einen Gegentrend.',
          'Musterbegriffe ordnen Teilstrukturen – die vollständige Auktionsgeschichte hat Vorrang.',
        ],
      },
    ],
  },
] satisfies Lesson[];
