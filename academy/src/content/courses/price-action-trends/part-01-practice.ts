import type { Lesson } from '../../types';

export const partOnePracticeLessons = [
  {
    id: 'price-action-trends.part-01.lesson-19',
    title: 'Handle nicht, wenn die Gegenseite den klaren Vorteil hat',
    summary:
      'Warum die unmittelbare Nachrichtenreaktion und deine eigene Müdigkeit zeitweise jede handelbare Edge zunichtemachen können.',
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
          'Direkt nach einer wichtigen Veröffentlichung haben schnelle Systeme einen strukturellen Vorsprung. Sie empfangen die Daten, vergleichen sie mit den Erwartungen, prüfen verwandte Märkte und schicken Orders los, bevor ein Mensch den Bericht komplett gelesen hat. In dieser ersten Phase hat der manuelle Trader oft keine belastbare Edge.',
          'Abwarten heißt nicht, die Chance ganz aufzugeben. Die schnelle Reaktion fasst die Bewertung vieler Modelle sichtbar im Chart zusammen. Hält danach ein Ausbruch, läuft ein Pullback geordnet ab oder wird ein Fehlausbruch klar, kann später ein Trade mit definierbarem Risiko entstehen.',
          'Auch dein eigener Zustand entscheidet, ob eine theoretische Edge praktisch da ist. Nach vielen Stunden lassen Aufmerksamkeit, Reaktionsfähigkeit und die Bereitschaft nach, den Plan sauber auszuführen. Computer werden nicht müde. Ein mittelmäßiges Setup am späten Handelstag kann für dich deshalb schlechter sein als morgens, obwohl der Chart ähnlich aussieht.',
          'Daraus folgt eine strenge Auswahlregel: Handle nur, wenn sowohl das Setup als auch deine eigene Ausführungsfähigkeit stark genug sind. Kein Trade ist immer besser als ein Trade ohne Vorteil.',
        ],
        callout:
          'Eine Edge steckt nicht nur im Muster. Sie hängt auch vom Zeitpunkt ab und davon, ob du das Muster korrekt umsetzen kannst.',
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
    id: 'price-action-trends.part-01.lesson-20',
    title: 'Liquidität hilft – bis alle dasselbe tun',
    summary:
      'Nutzen und Grenzen von HFT-Liquidität – und warum überfüllte statistische Vorteile sich selbst zerstören.',
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
          'Automatisierte Market-Making- und HFT-Strategien können enge Spreads und schnelle Ausführungen ermöglichen. Davon profitieren auch kleinere Trader. Diese Liquidität ist aber nicht unter allen Bedingungen gleich stabil: In Stressphasen können Quotes zurückgezogen oder Preise sehr schnell angepasst werden.',
          'Statistische Strategien verändern den Markt, den sie ausnutzen. Handeln viele Firmen dieselbe Abweichung, brauchen sie genug Gegenseite. Irgendwann werden Fills schlechter, Slippage steigt, oder die Gelegenheit verschwindet ganz. Erfolg lockt Konkurrenz an und kann so die eigene Edge verkleinern.',
          'Über Sekunden und Minuten können Programme den genauen Preisweg stark prägen. Größere Intraday-Swings entstehen gleichzeitig aus umfangreichen Kundenaufträgen, Absicherung und anderen institutionellen Strömen. Die Ebenen überlagern sich, statt sauber getrennt zu sein.',
          'Fürs Chartlesen heißt das ganz praktisch: Hohe Liquidität erleichtert die Ausführung, garantiert aber keine Richtung. Und ein Verhalten, das du lange beobachtet hast, bleibt nur so lange nützlich, wie der Markt es zulässt.',
        ],
        callout:
          'Ein Vorteil ist eine knappe Ressource. Sobald ihn alle nutzen, verändern sie Preise, Fills und damit den Vorteil selbst.',
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
    id: 'price-action-trends.part-01.lesson-21',
    title: 'Trägheit endet erst an Überdehnung',
    summary:
      'Warum Trends weiterlaufen können, extreme Zustände aber irgendwann Gegenpositionen und die Rückkehr zum Mittelwert anziehen.',
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
          'Märkte haben Trägheit. Ein Trend begünstigt zunächst weitere Fortsetzung, weil die Teilnehmer genau dieses Verhalten handeln. In einer Range werden Ausbrüche dagegen oft zurückverkauft. Statistische Programme können beide Muster verstärken, solange die beobachtete Regel profitabel bleibt.',
          'Mit der Zeit kann derselbe Zustand ungewöhnlich werden: auffällig viele Bars, ohne dass ein Mittelwert berührt wird, eine Serie gleichgerichteter Schlusskurse oder Tagesranges weit außerhalb des typischen Bereichs. Solche Extremwerte ziehen Systeme an, die auf die Rückkehr zu normalerem Verhalten setzen.',
          'In einer extremen Aufwärtsbewegung beginnen Bullen, Gewinne zu sichern; neue Käufer warten auf bessere Preise; Gegenpositionen werden Stück für Stück aufgebaut. Erst wenn dieses Verhalten sichtbar genug wird, verliert der Trend die Kontrolle, und die Rückkehr zum Mittelwert kann beginnen.',
          'Der gefährliche Fehler: „irgendwann“ mit „jetzt“ zu verwechseln. Ein Markt kann länger extrem bleiben, als dein Konto eine frühe Gegenposition aushält. Handle den noch intakten Trend oder warte auf bestätigten Kontrollverlust, statt wegen eines hohen Messwerts aggressiv dagegenzuhalten.',
        ],
        callout:
          'Überdehnung ist eine Warnung, dass die Bewegung weniger nachhaltig wird – kein exakter Timer für die Umkehr.',
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
    id: 'price-action-trends.part-01.lesson-22',
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
          'Viele Pullbacks haben zwei erkennbare Beine. In der klassischen ABC-Sprache ist das erste Gegenbein A, die kurze Reaktion in Trendrichtung B und das zweite Gegenbein C. Nach diesem zweiten Test bekommt der Trend eine neue Chance, weiterzulaufen.',
          'Nicht jeder Pullback ist ein sauberes ABC. Manche haben nur ein Bein, andere drei oder vier. Deshalb zählt man die Versuche in Trendrichtung. In einem bullischen Kontext ist High 1 der erste Bar, der nach Beginn des Pullbacks über das Hoch seines Vorgängers handelt. Geht der Pullback weiter, wird der nächste solche Versuch zum High 2.',
          'Ein drittes und ein viertes Gegenbein ergeben entsprechend High 3 und High 4. Die Zahl sagt nichts über die Qualität und auch nichts über die Anzahl bullischer Bars. Sie zählt, wie oft der Markt nach einem weiteren Pullback-Bein erneut nach oben drehen will.',
          'Im bärischen Kontext gilt das Ganze spiegelbildlich. Nach einem Aufwärtsbein im Pullback ist der erste erneute Bruch unter das vorherige Tief ein Low 1. Nach einem zweiten Aufwärtsbein entsteht Low 2. Auch ein seitliches zweites Bein kann zählen, selbst wenn es das Hoch des ersten Beins nicht überschreitet.',
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
    id: 'price-action-trends.part-01.lesson-23',
    title: 'Der Bar ist erst am Schluss fertig',
    summary:
      'Warum Mikroziele von Institutionen fein abgestimmt werden können und ein scheinbarer Reversal-Bar vor dem Schluss noch kippen kann.',
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
          'Große Bewegungsbeine wirken oft unaufhaltsam, während kleine Ziele und einzelne Ticks von kurzfristigen Programmen fein abgestimmt werden. Historische Kontraktzahlen taugen heute nicht mehr als feste institutionelle Schwelle. Das Prinzip bleibt: Eine Reaktion auf kleine, gut sichtbare Zielabstände kann professionelles Interesse anzeigen.',
          'Besonders kurz vor dem Schluss viel beobachteter Bars nimmt die Aktivität zu. Ein zunächst bullischer Reversal-Bar kann in den letzten Sekunden stark verkauft werden und nahe seinem Tief schließen. Wer vorher gekauft hat, hält danach kein bestätigtes bullisches Signal, sondern womöglich eine Position gegen den dominanten Trend.',
          'Gegen einen starken Trend ist diese Gefahr besonders groß. Warte deshalb den vollständigen Schluss des Signalbars ab. Bei einer Stop-Entry über einem abgeschlossenen bullischen Signalbar muss der Markt danach sogar noch dessen Hoch tatsächlich überschreiten.',
          'Das verhindert nicht jeden Fehlschlag. Du trennst aber einen vorläufigen Eindruck von einer abgeschlossenen Information und machst weniger Trades, die nur auf einem flüchtigen Zwischenstand beruhen.',
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
          'Historische Volumenschwellen sind keine zeitlosen Grenzwerte.',
          'Ein laufender Bar kann seine Aussage bis zum Schluss vollständig ändern.',
          'Countertrend-Trades verlangen abgeschlossenen Signalbar und tatsächliche Aktivierung.',
        ],
      },
    ],
  },
  {
    id: 'price-action-trends.part-01.lesson-24',
    title: 'So trainierst du Price Action wirklich',
    summary:
      'Eine konkrete Chart-Übung – und die richtige Nebenrolle für Fibonacci- und Elliott-Wave-Konzepte.',
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
          'Wähle einen festen Markt, eine Zeitebene und ein realistisches Ziel. Geh vergangene Charts Bar für Bar durch und markiere jede Bewegung, in der dieses Ziel grundsätzlich erreichbar war. Schau danach rückwärts: Welche Info war vor dem Beginn sichtbar? Wo hätte ein logisch ähnlich großer Stop gelegen? Und welche Fälle sahen nur im Nachhinein leicht aus?',
          'Nach ein paar Wochen entstehen wiederkehrende Gruppen von Situationen. Halte sie mit denselben Merkmalen fest, statt nur hübsche Gewinner zu sammeln. Prüfe Trefferquote, durchschnittliches Risiko, erreichbaren Gewinn, Kosten, Tageszeit und Regime. So wird aus Gefühl und Wiedererkennen eine Übung, die du nachprüfen kannst.',
          'Gerade am Anfang lohnt es sich, Setups mit Raum über das erste Ziel hinaus zu suchen. Ein Teilgewinn kann den schnellen Erfolg sichern, während ein Rest der Position – ein Runner – an größeren Bewegungen teilnimmt. Stop-Anpassungen musst du vorher festlegen und statistisch prüfen; ein mechanischer Breakeven-Stop ist nicht automatisch optimal.',
          'Fibonacci-Retracements und Elliott-Wellen gehören zwar zur technischen Beschreibung von Preisbewegungen, liefern aber selten allein einen klaren Intraday-Trade. Ist ein Fibonacci-Niveau nützlich, sollte dort zusätzlich ein eigenständig belastbarer Price-Action-Kontext vorliegen. Eine Wellenzählung, die erst lange nach dem Einstieg eindeutig wird, hilft bei Entscheidungen in Echtzeit kaum.',
        ],
        callout:
          'Das Ziel ist nicht, im Nachhinein recht zu haben. Das Ziel ist, vor dem nächsten Bar reproduzierbare Bedingungen benennen zu können.',
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
