import type { Lesson } from '../../types';

export const partOnePracticeLessons = [
  {
    id: 'brooks-trends.part-01.lesson-19',
    title: 'Handle nicht, wenn die Gegenseite den klaren Vorteil hat',
    summary:
      'Warum die unmittelbare Nachrichtenreaktion und eigene Ermüdung zeitweise jede handelbare Edge beseitigen können.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Teil I · Price Action · High-Frequency Trading',
    sourceAnchors: [
      'Maschineller Vorteil unmittelbar nach Datenveröffentlichungen',
      'Chartreaktion als zusammengefasste Bewertung',
      'Menschliche Ermüdung gegenüber gleichbleibender Computerleistung',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-19-explain',
        type: 'explanation',
        eyebrow: 'Edge-Auswahl',
        title: 'Nicht jeder Moment muss gehandelt werden',
        paragraphs: [
          'Direkt nach einer wichtigen Veröffentlichung besitzen schnelle Systeme einen strukturellen Vorteil. Sie empfangen Daten, vergleichen sie mit Erwartungen, prüfen verwandte Märkte und senden Orders, bevor ein Mensch den Bericht vollständig lesen kann. In dieser ersten Phase fehlt dem manuellen Trader häufig jede belastbare Edge.',
          'Abwarten bedeutet nicht, die Chance vollständig aufzugeben. Die schnelle Reaktion fasst die Bewertung vieler Modelle sichtbar im Chart zusammen. Wenn danach ein Ausbruch hält, ein Pullback geordnet verläuft oder ein Fehlausbruch klar wird, kann ein späterer Trade mit definierbarem Risiko entstehen.',
          'Auch der eigene Zustand entscheidet, ob eine theoretische Edge praktisch vorhanden ist. Nach vielen Stunden sinken Aufmerksamkeit, Reaktionsfähigkeit und Bereitschaft, den Plan sauber auszuführen. Computer ermüden nicht. Ein mittelmäßiges Setup am späten Handelstag kann deshalb für dich schlechter sein als morgens, obwohl der Chart ähnlich aussieht.',
          'Die Quelle formuliert dafür eine strenge Auswahlregel: Handle nur, wenn sowohl das Setup als auch deine eigene Ausführungsfähigkeit stark genug sind. Kein Trade ist immer besser als ein Trade ohne Vorteil.',
        ],
        callout:
          'Eine Edge gehört nicht nur dem Muster. Sie hängt auch vom Zeitpunkt und von deiner Fähigkeit ab, es korrekt umzusetzen.',
      },
      {
        id: 'part-01-19-diagram',
        type: 'diagram',
        title: 'Erstreaktion und handelbare zweite Phase',
        scenario: 'news-reaction',
        caption:
          'Das Ereignis erzeugt zunächst Geschwindigkeit und Unsicherheit. Erst die spätere Akzeptanz oder Zurückweisung kann einen kontrollierbaren Trade liefern.',
        observations: [
          'Die erste Bewegung kann von mehreren schnellen Systemen gleichzeitig geprägt sein.',
          'Ein Gap oder Spike ist Information, aber noch kein sicherer Einstieg.',
          'Folge-Bars zeigen, ob das neue Niveau gehalten oder abverkauft wird.',
          'Eigene Ermüdung kann einen objektiv guten Aufbau praktisch unhandelbar machen.',
        ],
      },
      {
        id: 'part-01-19-question',
        type: 'question',
        title: 'Wann ist Abwarten eine Edge?',
        prompt:
          'Ein Bericht erscheint, Spreads weiten sich und der Markt springt in beide Richtungen. Du hast die Zahlen noch nicht eingeordnet. Was ist der sauberste Schritt?',
        options: [
          {
            id: 'guess',
            label: 'Sofort eine Richtung raten',
            explanation:
              'Du würdest ohne Informations- oder Geschwindigkeitsvorteil im riskantesten Moment handeln.',
          },
          {
            id: 'wait',
            label: 'Auf eine lesbare Reaktion und kontrollierbares Risiko warten',
            explanation:
              'Richtig. Die spätere Struktur kann dir eine realistischere Edge geben.',
          },
          {
            id: 'no-stop',
            label: 'Ohne Stop handeln, bis die Volatilität sinkt',
            explanation:
              'Gerade erhöhte Volatilität verlangt klar begrenztes Risiko oder vollständiges Auslassen.',
          },
        ],
        correctOptionId: 'wait',
      },
      {
        id: 'part-01-19-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Unmittelbar nach Daten besitzen Maschinen einen klaren Geschwindigkeitsvorteil.',
          'Die spätere Chartreaktion kann eine handelbare Zusammenfassung liefern.',
          'Müdigkeit verringert deine praktische Edge und Ausführungsqualität.',
          'Kein Trade ist eine vollständige professionelle Entscheidung.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.part-01.lesson-20',
    title: 'Liquidität hilft – bis alle dasselbe tun',
    summary:
      'Nutzen und Grenzen von HFT-Liquidität sowie die Selbstzerstörung überfüllter statistischer Vorteile.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action · High-Frequency Trading',
    sourceAnchors: [
      'HFT als Liquiditätsanbieter und Einfluss auf Spreads',
      'Überfüllte Strategien verändern ihre eigene Ausführbarkeit',
      'Kurzfristiger Pfad versus größere institutionelle Swings',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-20-explain',
        type: 'explanation',
        eyebrow: 'Liquidität und Crowding',
        title: 'Eine Edge wird schwächer, wenn zu viel Kapital sie gleichzeitig jagt',
        paragraphs: [
          'Automatisierte Market-Making- und HFT-Strategien können enge Spreads und schnelle Ausführungen ermöglichen. Davon profitieren auch kleinere Trader. Diese Liquidität ist jedoch nicht unter allen Bedingungen gleich stabil; in Stressphasen können Quotes zurückgezogen oder Preise sehr schnell angepasst werden.',
          'Statistische Strategien verändern den Markt, den sie ausnutzen. Wenn viele Firmen dieselbe Abweichung handeln, benötigen sie genügend Gegenseite. Irgendwann werden Fills schlechter, Slippage steigt oder die Gelegenheit verschwindet vollständig. Der Erfolg lockt Konkurrenz an und kann damit die eigene Edge verkleinern.',
          'Über Sekunden und Minuten können Programme den konkreten Preisweg stark prägen. Größere Intraday-Swings entstehen zugleich aus umfangreichen Kundenaufträgen, Absicherung und anderen institutionellen Strömen. Die Ebenen überlagern sich, statt sauber getrennt zu sein.',
          'Für das Chartlesen ist die Konsequenz praktisch: Hohe Liquidität erleichtert Ausführung, garantiert aber keine Richtung. Und ein lange beobachtetes Verhalten bleibt nur so lange nützlich, wie der Markt es noch zulässt.',
        ],
        callout:
          'Ein Vorteil ist eine knappe Ressource. Sobald alle ihn nutzen, verändern sie Preise, Fills und damit den Vorteil selbst.',
      },
      {
        id: 'part-01-20-diagram',
        type: 'diagram',
        title: 'Vom kleinen Vorteil zur überfüllten Strategie',
        scenario: 'liquidity-crowding',
        caption:
          'Mehr Teilnehmer erhöhen zunächst Aktivität, doch zu viele gleichgerichtete Systeme finden irgendwann zu wenig Gegenseite.',
        observations: [
          'Liquiditätsbereitstellung kann Spreads und Ausführungskosten reduzieren.',
          'Crowding verschlechtert Preise und Fills für alle, die dasselbe Signal handeln.',
          'Eine getestete Edge braucht laufende Überwachung statt ewiges Vertrauen.',
          'Liquidität kann sich in Stressphasen schneller verändern als ein statischer Backtest annimmt.',
        ],
      },
      {
        id: 'part-01-20-question',
        type: 'question',
        title: 'Warum verschwindet eine Edge?',
        prompt:
          'Viele Firmen entdecken dieselbe kleine Fehlbewertung und handeln sie gleichzeitig. Was kann folgen?',
        options: [
          {
            id: 'stronger',
            label: 'Der Vorteil wird automatisch immer größer',
            explanation:
              'Gleichgerichtete Konkurrenz kann die Fehlbewertung schneller schließen und die Ausführung verschlechtern.',
          },
          {
            id: 'crowded',
            label: 'Zu wenig Gegenseite, schlechtere Fills und sinkende Edge',
            explanation:
              'Richtig. Die Strategie verändert durch ihre Nutzung die Marktbedingungen.',
          },
          {
            id: 'unchanged',
            label: 'Marktverhalten bleibt durch Teilnehmer grundsätzlich unverändert',
            explanation:
              'Orders beeinflussen Liquidität und Preise; eine Edge ist nicht vom Markt getrennt.',
          },
        ],
        correctOptionId: 'crowded',
      },
      {
        id: 'part-01-20-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'HFT kann Liquidität bereitstellen und Spreads verkleinern.',
          'In Stressphasen ist diese Liquidität nicht garantiert.',
          'Überfüllte Strategien können ihren eigenen Vorteil abschwächen.',
          'Marktverhalten und Edge müssen fortlaufend neu validiert werden.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.part-01.lesson-21',
    title: 'Trägheit endet erst an Überdehnung',
    summary:
      'Warum Trends fortbestehen können, extreme Zustände aber schließlich Gegenpositionen und Mittelwertrückkehr anziehen.',
    durationMinutes: 13,
    xp: 45,
    sourceUnit: 'Teil I · Price Action · High-Frequency Trading',
    sourceAnchors: [
      'Algorithmen können Trend- und Range-Trägheit verstärken',
      'Extreme Abweichung von historischem Verhalten',
      'Regression zum Mittel und Gefahr verfrühter Gegenpositionen',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-21-explain',
        type: 'explanation',
        eyebrow: 'Inertia und Excess',
        title: 'Was läuft, kann länger laufen – aber nicht unbegrenzt',
        paragraphs: [
          'Märkte zeigen Trägheit. Ein Trend begünstigt zunächst weitere Trendfortsetzung, weil Teilnehmer genau dieses Verhalten handeln. In einer Range werden dagegen Ausbrüche häufig zurückverkauft. Statistische Programme können beide Muster verstärken, solange die beobachtete Regel profitabel bleibt.',
          'Mit der Zeit kann derselbe Zustand außergewöhnlich werden: ungewöhnlich viele Bars ohne Berührung eines Mittelwerts, eine Serie gleichgerichteter Schlusskurse oder Tagesranges weit außerhalb ihres typischen Bereichs. Solche Extremwerte ziehen Systeme an, die auf Rückkehr zu normalerem Verhalten setzen.',
          'Bullen beginnen in einer extremen Aufwärtsbewegung Gewinne zu sichern; neue Käufer warten auf günstigere Preise; Gegenpositionen werden schrittweise aufgebaut. Erst wenn dieses Verhalten sichtbar genug wird, verliert der Trend Kontrolle und eine Mittelwertrückkehr kann beginnen.',
          'Der gefährliche Fehler ist, „irgendwann“ mit „jetzt“ zu verwechseln. Ein Markt kann länger extrem bleiben, als dein Konto eine frühe Gegenposition aushält. Handle den noch intakten Trend oder warte auf bestätigten Kontrollverlust, statt nur wegen eines hohen Messwerts aggressiv dagegenzuhalten.',
        ],
        callout:
          'Überdehnung ist eine Warnung vor sinkender Nachhaltigkeit – kein exakter Timer für die Umkehr.',
      },
      {
        id: 'part-01-21-diagram',
        type: 'diagram',
        title: 'Fortsetzung, Überdehnung und Rückkehr',
        scenario: 'inertia-excess',
        caption:
          'Die Bewegung setzt sich zunächst selbst fort. Erst sichtbare Überdehnung plus Kontrollverlust öffnet Raum für eine Rückkehr zum Mittel.',
        observations: [
          'Trendträgheit macht frühe Gegenpositionen gefährlich.',
          'Mehrere ungewöhnliche Messwerte können gleichzeitig Überdehnung anzeigen.',
          'Gewinnmitnahmen der dominanten Seite sind ebenso wichtig wie neue Gegenpositionen.',
          'Bestätigung trennt eine bloße Extremanzeige von einer handelbaren Umkehr.',
        ],
      },
      {
        id: 'part-01-21-question',
        type: 'question',
        title: 'Was bedeutet extrem?',
        prompt:
          'Ein Aufwärtstrend ist historisch ungewöhnlich weit vom Mittelwert entfernt, zeigt aber weiterhin starke bullische Bars ohne bearischen Anschluss. Was ist die beste Schlussfolgerung?',
        options: [
          {
            id: 'short-now',
            label: 'Sofort maximal short gehen',
            explanation:
              'Überdehnung kann lange bestehen; ohne Kontrollverlust besitzt der Trend weiterhin Trägheit.',
          },
          {
            id: 'warning',
            label: 'Überdehnung beobachten, aber eine Umkehr erst nach Evidenz handeln',
            explanation:
              'Richtig. Extremwerte warnen, bestimmen jedoch nicht den exakten Wendepunkt.',
          },
          {
            id: 'never',
            label: 'Der Trend kann grundsätzlich niemals enden',
            explanation:
              'Jede extreme Bewegung endet, nur Zeitpunkt und Form bleiben ungewiss.',
          },
        ],
        correctOptionId: 'warning',
      },
      {
        id: 'part-01-21-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Trend und Range besitzen jeweils eine Tendenz zur Fortsetzung ihres aktuellen Verhaltens.',
          'Extremes Verhalten schafft irgendwann Anreize für Mittelwertrückkehr.',
          'Überdehnung allein nennt keinen verlässlichen Umkehrzeitpunkt.',
          'Warte auf sichtbaren Kontrollverlust, bevor du eine starke Bewegung bekämpfst.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.part-01.lesson-22',
    title: 'Zwei Beine und High-/Low-Zählung',
    summary:
      'Wie ABC-Korrekturen, High 1 bis High 4 und die spiegelbildliche Low-Zählung dieselbe Pullback-Logik beschreiben.',
    durationMinutes: 14,
    xp: 45,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Zweibeinige Korrektur als häufige Fortsetzungsstruktur',
      'High 1 bis High 4 im bullischen Kontext',
      'Low 1 und Low 2 im bärischen Kontext',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-22-explain',
        type: 'explanation',
        eyebrow: 'Bar-Zählung',
        title: 'Gezählt werden Versuche, den Pullback zu beenden',
        paragraphs: [
          'Viele Pullbacks besitzen zwei erkennbare Beine. In der klassischen ABC-Sprache ist das erste Gegenbein A, die kurze Reaktion in Trendrichtung B und das zweite Gegenbein C. Der Trend erhält nach diesem zweiten Test eine neue Chance zur Fortsetzung.',
          'Nicht jeder Pullback bildet ein sauberes ABC. Manche haben nur ein Bein, andere drei oder vier. Deshalb zählt Brooks die Versuche in Trendrichtung. In einem bullischen Kontext ist High 1 der erste Bar, der nach Beginn des Pullbacks über das Hoch seines Vorgängers handelt. Setzt der Pullback sich fort, wird der nächste solche Versuch zum High 2.',
          'Ein drittes und viertes Gegenbein erzeugen entsprechend High 3 und High 4. Die Zahl beschreibt nicht die Qualität und nicht die Anzahl bullischer Bars. Sie zählt, wie oft der Markt nach einem weiteren Pullback-Bein erneut nach oben drehen will.',
          'Im bärischen Kontext gilt die Logik spiegelbildlich. Nach einem Aufwärtsbein im Pullback ist der erste erneute Bruch unter das vorherige Tief ein Low 1. Nach einem zweiten Aufwärtsbein entsteht Low 2. Auch ein seitliches zweites Bein kann zählen, selbst wenn es das Hoch des ersten Beins nicht überschreitet.',
        ],
        callout:
          'High und Low bezeichnen Einstiegsversuche in Trendrichtung – nicht die absolute Höhe eines Bars.',
      },
      {
        id: 'part-01-22-diagram',
        type: 'diagram',
        title: 'Ein Pullback, zwei Versuche',
        scenario: 'high-low-count',
        caption:
          'High 1 ist der erste Aufwärtsversuch. Nach dem zweiten Abwärtsbein folgt High 2 – häufig der wichtigere Fortsetzungsversuch.',
        observations: [
          'Das erste Abwärtsbein endet vor dem High-1-Versuch.',
          'Scheitert High 1 und der Markt fällt erneut, entsteht das zweite Pullback-Bein.',
          'Der nächste Bruch über ein Vorbarhoch wird High 2 genannt.',
          'Im Abwärtstrend werden Aufwärtsbeine und erneute Tiefbrüche als Low 1, Low 2 und so weiter gezählt.',
        ],
      },
      {
        id: 'part-01-22-comparison',
        type: 'comparison',
        title: 'Zwei Sprachen für dieselbe Struktur',
        columns: [
          {
            title: 'ABC-Beschreibung',
            tone: 'neutral',
            points: [
              'A = erstes Gegenbein',
              'B = Zwischenreaktion in Trendrichtung',
              'C = zweites Gegenbein',
              'bei drei oder vier Beinen schnell unhandlich',
            ],
          },
          {
            title: 'High-/Low-Zählung',
            tone: 'positive',
            points: [
              'zählt konkrete Fortsetzungsversuche',
              'High für bullischen Kontext',
              'Low für bärischen Kontext',
              'lässt sich bis zum dritten oder vierten Bein fortführen',
            ],
          },
        ],
      },
      {
        id: 'part-01-22-question',
        type: 'question',
        title: 'Wann entsteht High 2?',
        prompt:
          'In einem Aufwärtstrend scheitert der erste Aufwärtsversuch des Pullbacks. Nach einem zweiten Abwärtsbein handelt ein Bar über dem Hoch seines Vorgängers. Wie heißt dieser Versuch?',
        options: [
          {
            id: 'h1',
            label: 'High 1',
            explanation:
              'High 1 war bereits der erste Versuch vor dem zweiten Abwärtsbein.',
          },
          {
            id: 'h2',
            label: 'High 2',
            explanation:
              'Richtig. Nach dem zweiten Pullback-Bein ist es der zweite Fortsetzungsversuch.',
          },
          {
            id: 'low2',
            label: 'Low 2',
            explanation:
              'Low-Zählungen beschreiben erneute Abwärtsversuche in einem bärischen Kontext.',
          },
        ],
        correctOptionId: 'h2',
      },
      {
        id: 'part-01-22-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Zweibeinige Pullbacks sind häufige Fortsetzungsstrukturen.',
          'ABC benennt Beine; High/Low zählt Versuche zurück in Trendrichtung.',
          'High 2 folgt auf ein zweites Gegenbein im bullischen Kontext.',
          'Low 1 und Low 2 spiegeln dieselbe Logik im bärischen Kontext.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.part-01.lesson-23',
    title: 'Der Bar ist erst am Schluss fertig',
    summary:
      'Warum Mikroziele institutionell feinjustiert werden können und ein vermeintlicher Reversal-Bar vor Schluss noch kippt.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Feinabstimmung kleiner Scalping-Bewegungen',
      'Aktivität kurz vor dem Schluss beobachteter Bars',
      'Gegen den Trend erst nach abgeschlossenem Signalbar handeln',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-23-explain',
        type: 'explanation',
        eyebrow: 'Signalbar',
        title: 'Eine schöne Kerze kann in den letzten Sekunden verschwinden',
        paragraphs: [
          'Große Bewegungsbeine wirken oft unaufhaltsam, während kleine Ziele und einzelne Ticks von kurzfristigen Programmen fein abgestimmt werden. Historische Kontraktzahlen aus dem Buch sind heute nicht als feste institutionelle Schwelle brauchbar. Das Prinzip bleibt: Reaktion auf kleine, weithin sichtbare Zielabstände kann relevantes professionelles Interesse zeigen.',
          'Besonders kurz vor dem Schluss häufig beobachteter Bars nimmt die Aktivität zu. Ein zunächst bullischer Reversal-Bar kann in den letzten Sekunden stark verkauft werden und nahe seinem Tief schließen. Wer vorzeitig gekauft hat, hält danach kein bestätigtes bullisches Signal, sondern möglicherweise eine Position gegen den dominanten Trend.',
          'Gegen einen starken Trend ist diese Gefahr besonders groß. Warte auf den vollständigen Schluss des Signalbars. Eine Stop-Entry oberhalb eines abgeschlossenen bullischen Signalbars verlangt anschließend sogar noch, dass der Markt dessen Hoch tatsächlich überschreitet.',
          'Der Ansatz verhindert nicht jeden Fehlschlag. Er trennt jedoch ein vorläufiges Aussehen von einer abgeschlossenen Information und reduziert Trades, die nur auf einem flüchtigen Zwischenzustand beruhen.',
        ],
        callout:
          'Ein laufender Bar ist ein Entwurf. Erst der Schluss liefert die endgültigen Open-High-Low-Close-Daten.',
      },
      {
        id: 'part-01-23-diagram',
        type: 'diagram',
        title: 'Bullischer Entwurf, bearischer Schluss',
        scenario: 'bar-close-trap',
        caption:
          'Der gleiche laufende Bar sieht kurz vor Schluss bullisch aus und wird anschließend vollständig verkauft. Der frühe Long handelte eine Form, die nie bestätigt wurde.',
        observations: [
          'Während der Barbildung sind Körper, Tail und Schlusskurs noch veränderlich.',
          'Ein starker Trend kann späte Gegenorders absorbieren und den Signalbar kippen.',
          'Der abgeschlossene Bar liefert das Signal; der nächste Preisbruch liefert die Aktivierung.',
          'Vorwegnahme erhöht nicht nur Trefferchance, sondern oft vor allem Fehlersignale.',
        ],
      },
      {
        id: 'part-01-23-question',
        type: 'question',
        title: 'Wann ist der Reversal-Bar bestätigt?',
        prompt:
          'In einem starken Abwärtstrend sieht der aktuelle Fünf-Minuten-Bar zehn Sekunden vor Schluss bullisch aus. Was ist für einen konservativen Countertrend-Long nötig?',
        options: [
          {
            id: 'now',
            label: 'Sofort kaufen, solange der Bar grün ist',
            explanation:
              'Der laufende Bar kann bis zum Schluss vollständig kippen.',
          },
          {
            id: 'close-entry',
            label: 'Schluss abwarten und erst über dem fertigen Signalbar aktivieren',
            explanation:
              'Richtig. Damit verlangst du sowohl eine abgeschlossene Form als auch erste Bestätigung durch den Entry.',
          },
          {
            id: 'color',
            label: 'Die Farbe allein genügt unabhängig vom Kontext',
            explanation:
              'Trendstärke, Lage, Schluss und Folgebewegung bestimmen gemeinsam die Qualität.',
          },
        ],
        correctOptionId: 'close-entry',
      },
      {
        id: 'part-01-23-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Kleine Kursziele können durch professionelles Kurzfristhandeln sichtbar beeinflusst werden.',
          'Historische Volumenschwellen der Quelle sind keine zeitlosen Grenzwerte.',
          'Ein laufender Bar kann seine Aussage bis zum Schluss vollständig ändern.',
          'Countertrend-Trades verlangen abgeschlossenen Signalbar und tatsächliche Aktivierung.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.part-01.lesson-24',
    title: 'So trainierst du Price Action wirklich',
    summary:
      'Eine konkrete Chart-Übung und die richtige Nebenrolle von Fibonacci- und Elliott-Wave-Konzepten.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Teil I · Price Action',
    sourceAnchors: [
      'Rückblickende Suche nach allen erreichbaren Bewegungen',
      'Muster, Risiko, Teilgewinn und Runner systematisch prüfen',
      'Fibonacci und Elliott Wave nur bei eigenständig tragfähigem Chartkontext',
    ],
    status: 'published',
    steps: [
      {
        id: 'part-01-24-explain',
        type: 'explanation',
        eyebrow: 'Trainingsmethode',
        title: 'Suche nicht nur perfekte Trades – untersuche jede erreichbare Bewegung',
        paragraphs: [
          'Wähle einen festen Markt, eine Zeitebene und ein realistisches Ziel. Gehe vergangene Charts Bar für Bar durch und markiere jede Bewegung, in der dieses Ziel grundsätzlich erreichbar war. Schaue anschließend rückwärts: Welche Information war vor Beginn sichtbar, wo hätte ein logisch ähnlich großer Stop gelegen und welche Fälle sahen nur im Nachhinein leicht aus?',
          'Nach mehreren Wochen entstehen wiederkehrende Familien von Situationen. Dokumentiere sie mit denselben Merkmalen, statt nur hübsche Gewinner zu sammeln. Prüfe Trefferquote, durchschnittliches Risiko, erreichbaren Gewinn, Kosten, Tageszeit und Regime. So wird aus subjektivem Wiedererkennen eine überprüfbare Übung.',
          'Die Quelle empfiehlt, anfangs besonders Setups mit Raum über das erste Ziel hinaus zu suchen. Ein Teilgewinn kann den unmittelbaren Erfolg sichern, während ein Rest der Position – ein Runner – an größeren Bewegungen teilnimmt. Stop-Anpassungen müssen vorher definiert und statistisch geprüft werden; ein mechanischer Breakeven-Stop ist nicht automatisch optimal.',
          'Fibonacci-Retracements und Elliott-Wellen gehören zwar zur technischen Beschreibung von Preisbewegungen, liefern nach Brooks aber selten allein einen ausreichend klaren Intraday-Trade. Wenn ein Fibonacci-Niveau nützlich ist, sollte dort zusätzlich ein eigenständig belastbarer Price-Action-Kontext bestehen. Eine Wellenzählung, die erst lange nach dem Einstieg eindeutig wird, hilft der Echtzeitentscheidung kaum.',
        ],
        callout:
          'Das Ziel ist nicht, im Nachhinein Recht zu haben. Das Ziel ist, vor dem nächsten Bar reproduzierbare Bedingungen benennen zu können.',
      },
      {
        id: 'part-01-24-comparison',
        type: 'comparison',
        title: 'Produktives Training und Rückschau-Falle',
        columns: [
          {
            title: 'Rückschau-Falle',
            tone: 'warning',
            points: [
              'nur spektakuläre Gewinner markieren',
              'Einstieg nachträglich perfekt verschieben',
              'Stop und Kosten ignorieren',
              'Muster nach Ausgang umbenennen',
            ],
          },
          {
            title: 'Sauberes Training',
            tone: 'positive',
            points: [
              'Ziel und Regeln vorher festlegen',
              'alle vergleichbaren Fälle erfassen',
              'Risiko und Ausführung realistisch prüfen',
              'Entscheidung mit den damals sichtbaren Daten bewerten',
            ],
          },
        ],
      },
      {
        id: 'part-01-24-question',
        type: 'question',
        title: 'Wann hilft ein Fibonacci-Level?',
        prompt:
          'Ein Pullback erreicht ungefähr ein bekanntes Fibonacci-Verhältnis. Sonst fehlen Reversal-Bar, Struktur und Anschluss. Was ist die beste Einordnung?',
        options: [
          {
            id: 'automatic',
            label: 'Das Verhältnis allein ist ein automatischer Entry',
            explanation:
              'Eine ungefähre Messung ohne bestätigenden Kontext liefert keine robuste Handelslogik.',
          },
          {
            id: 'context',
            label: 'Das Niveau ist höchstens Zusatzkontext und braucht eigenständige Price Action',
            explanation:
              'Richtig. Der Trade sollte auch ohne die Zahl strukturell begründbar sein.',
          },
          {
            id: 'guarantee',
            label: 'Jeder erste Pullback endet exakt am gleichen Verhältnis',
            explanation:
              'Retracements variieren und überschießen oder unterschreiten solche Näherungen häufig.',
          },
        ],
        correctOptionId: 'context',
      },
      {
        id: 'part-01-24-recap',
        type: 'recap',
        title: 'Teil I abgeschlossen',
        points: [
          'Trainiere mit festem Markt, Zeitrahmen, Ziel und vorher definierten Regeln.',
          'Erfasse Gewinner und Verlierer derselben Setup-Familie.',
          'Teilgewinn und Runner benötigen einen getesteten Managementplan.',
          'Fibonacci und Elliott Wave bleiben Zusatzkontext, wenn sie in Echtzeit keine klare Price Action ergänzen.',
          'Als Nächstes folgt Kapitel 1: das Spektrum vom extremen Trend bis zur extremen Trading Range.',
        ],
      },
    ],
  },
] satisfies Lesson[];
