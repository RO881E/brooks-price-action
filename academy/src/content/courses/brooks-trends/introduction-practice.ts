import type { Lesson } from '../../types';

export const introductionPracticeLessons = [
  {
    id: 'brooks-trends.introduction.lesson-09',
    title: 'Nachricht und Marktreaktion trennen',
    summary:
      'Warum eine Schlagzeile ohne Zeithorizont und Kursreaktion keine vollständige Handelsentscheidung liefert.',
    durationMinutes: 11,
    xp: 35,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Finanznachrichten und Expertenmeinungen',
      'Unterschiedliche Zeithorizonte',
      'Marktreaktion als handelbare Information',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-09-explain',
        type: 'explanation',
        eyebrow: 'Information richtig gewichten',
        title: 'Eine Nachricht kann wahr sein und dein Trade trotzdem falsch',
        paragraphs: [
          'Nachrichten beantworten häufig, was wirtschaftlich passiert ist. Ein Intraday-Trade braucht zusätzlich Antworten auf andere Fragen: Was war bereits eingepreist? Wie positioniert war der Markt? Auf welchem Niveau reagieren Käufer und Verkäufer? Und passt der Horizont der Analyse überhaupt zu deinem geplanten Haltedauer?',
          'Ein Fondsmanager kann mit einer mehrmonatigen bullischen These richtigliegen, während der Markt in der nächsten Stunde fällt. Seine Position darf einen großen Rücklauf aushalten; dein kurzfristiger Trade vielleicht nicht. Die Aussage des Experten ist dann nicht zwingend falsch – sie ist für deine Entscheidung schlicht auf einer anderen Zeitebene formuliert.',
          'Medien wählen verständliche Ursachen und überzeugende Gesprächspartner. Das erzeugt im Nachhinein eine glatte Geschichte, obwohl gleichzeitig ebenso kluge Marktteilnehmer die Gegenseite handeln. Für Price Action ist daher nicht die Lautstärke der Erklärung entscheidend, sondern die beobachtbare Reaktion des Preises.',
          'Das bedeutet nicht, Wirtschaftsdaten seien bedeutungslos. Sie können Volatilität, Gap-Risiko und Liquidität massiv verändern. Die praktische Regel lautet: Kenne den Termin und das Risiko – überlasse dem Chart die Bewertung der Reaktion.',
        ],
        callout:
          'Fundamentale Information und kurzfristige Handelsrichtung sind zwei verschiedene Fragen.',
      },
      {
        id: 'intro-09-comparison',
        type: 'comparison',
        title: 'Gleiche Nachricht, andere Aufgabe',
        columns: [
          {
            title: 'Investor über Monate',
            tone: 'neutral',
            points: [
              'bewertet Geschäfts- und Konjunkturentwicklung',
              'akzeptiert größere Zwischenbewegungen',
              'passt Position schrittweise an',
              'Tagesrauschen ist oft zweitrangig',
            ],
          },
          {
            title: 'Intraday-Trader',
            tone: 'positive',
            points: [
              'beobachtet unmittelbare Preisakzeptanz',
              'arbeitet mit engem Zeitfenster',
              'muss Event-Volatilität begrenzen',
              'reagiert auf Struktur statt Langfristprognose',
            ],
          },
        ],
      },
      {
        id: 'intro-09-question',
        type: 'question',
        title: 'Wann ist ein Experte für deinen Trade unbrauchbar?',
        prompt:
          'Ein Portfoliomanager erwartet über zwölf Monate steigende Kurse. Du planst einen Fünf-Minuten-Trade. Was folgt daraus?',
        options: [
          {
            id: 'buy',
            label: 'Du solltest sofort intraday kaufen',
            explanation:
              'Sein Zeithorizont erlaubt Bewegungen, die deinen kurzfristigen Trade längst invalidieren würden.',
          },
          {
            id: 'horizon',
            label: 'Die Aussage bestimmt deinen Intraday-Einstieg nicht',
            explanation:
              'Richtig. Sie kann langfristig sinnvoll sein und kurzfristig trotzdem keine konkrete Edge liefern.',
          },
          {
            id: 'false',
            label: 'Der Manager muss deshalb falschliegen',
            explanation:
              'Unterschiedliche Zeithorizonte können gleichzeitig gegensätzliche Bewegungen enthalten.',
          },
        ],
        correctOptionId: 'horizon',
      },
      {
        id: 'intro-09-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Eine Nachricht enthält noch keine vollständige Handelsanweisung.',
          'Analysen sind nur innerhalb ihres Zeithorizonts sinnvoll.',
          'Medienerklärungen können richtig und dennoch praktisch zu spät sein.',
          'Plane Event-Risiko, aber lies die Bewertung des Ereignisses im Chart.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.introduction.lesson-10',
    title: 'Gute Nachricht, schwacher Chart',
    summary:
      'Ein eigenständiger Chartfall zu Gap, gescheitertem Anschluss und der stärkeren Information in der Reaktion.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Buchfälle zu positiven Nachrichten mit schwacher Folgebewegung',
      'Gap-Test und gescheiterter bullischer Anschluss',
      'Trendmomentum und Test des Extrempunkts',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-10-explain',
        type: 'explanation',
        eyebrow: 'Eigenständiger Fall',
        title: 'Der Markt bestätigt die Schlagzeile nicht',
        paragraphs: [
          'Stell dir vor, ein Unternehmen meldet überraschend gute Zahlen. Der Markt eröffnet deutlich über dem Vortag. Dieser Gap ist zunächst bullische Information: Käufer waren bereit, sofort wesentlich höhere Preise zu akzeptieren. Aber ein Gap ist erst der Beginn der Beobachtung, nicht das Ende der Analyse.',
          'Nach der Eröffnung entsteht kein sauberer Anschluss. Der erste Anstieg wird verkauft, ein zweiter Versuch bleibt unter dem ersten Hoch und der Markt fällt zurück in Richtung des alten Schlusskurses. Jetzt hat sich die Information verändert: Trotz positiver Nachricht konnten Käufer das neue Niveau nicht verteidigen.',
          'Ein Bruch unter die Eröffnungsstruktur kann den gescheiterten Gap in eine Verkaufsgelegenheit verwandeln. Nach einem sehr steilen Abverkauf bleibt allerdings Momentum bestehen, sodass ein erster Pullback häufig noch einmal das Tief testet. Ein später kräftiger Reversal-Bar kann deshalb einen Long-Scalp rechtfertigen, ohne den vorherigen Short im Nachhinein falsch zu machen.',
          'Der Fall zeigt, weshalb Price Action keine feste Meinung verteidigt. Bullischer Gap, bearisher Fehlausbruch und anschließender Reversal-Scalp können nacheinander korrekte Entscheidungen sein.',
        ],
        callout:
          'Reagiere auf neue Evidenz. Loyalität gehört deinem Prozess, nicht deiner ersten Marktrichtung.',
      },
      {
        id: 'intro-10-diagram',
        type: 'diagram',
        title: 'Gap nach oben, Akzeptanz bleibt aus',
        scenario: 'news-reaction',
        caption:
          'Der synthetische Verlauf übernimmt keine Buchgrafik. Er zeigt dieselbe Lernidee mit eigenständig konstruierten Kursdaten.',
        observations: [
          'Das Gap liefert zunächst bullische Information.',
          'Zwei schwache Fortsetzungsversuche zeigen fehlende Akzeptanz oberhalb der Eröffnung.',
          'Der Rückfall unter die Struktur macht die tatsächliche Marktreaktion wichtiger als die Schlagzeile.',
          'Nach einem steilen Impuls bleibt ein Test des Extrempunkts wahrscheinlicher als eine sofortige V-Umkehr.',
        ],
      },
      {
        id: 'intro-10-question',
        type: 'question',
        title: 'Wann ändert sich die bullische Ausgangslage?',
        prompt:
          'Welche Beobachtung wiegt nach einem positiven Gap am stärksten gegen einen sofortigen Long?',
        options: [
          {
            id: 'gap',
            label: 'Der Markt eröffnete höher',
            explanation:
              'Das ist zunächst bullisch, beantwortet aber nicht, ob die höheren Preise gehalten werden.',
          },
          {
            id: 'failed-follow',
            label: 'Mehrere Rallyversuche scheitern und der Markt fällt in die alte Zone zurück',
            explanation:
              'Richtig. Fehlender Anschluss und Rückkehr zeigen, dass die neue Preiszone nicht akzeptiert wurde.',
          },
          {
            id: 'report',
            label: 'Die Zahlen lagen über den Erwartungen',
            explanation:
              'Die Qualität der Meldung schützt nicht vor einer bereits eingepreisten oder negativ interpretierten Reaktion.',
          },
        ],
        correctOptionId: 'failed-follow',
      },
      {
        id: 'intro-10-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein Gap ist neue Information, aber noch keine Bestätigung dauerhafter Akzeptanz.',
          'Fehlender Anschluss kann eine starke Nachricht vollständig überstimmen.',
          'Steile Impulse werden häufig nach einem Pullback am Extrempunkt getestet.',
          'Mehrere gegensätzliche Trades können nacheinander logisch sein, wenn sich die Evidenz ändert.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.introduction.lesson-11',
    title: 'Bleib auf der Zeitebene deines Plans',
    summary:
      'Warum ein kleinerer Chart nach dem Einstieg oft nicht präziser, sondern nur lauter wird.',
    durationMinutes: 9,
    xp: 30,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Klarheit abwarten',
      'Zeitrahmenkonsistenz nach dem Einstieg',
      'Ablenkung durch kleinere Charts',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-11-explain',
        type: 'explanation',
        eyebrow: 'Trade-Management',
        title: 'Ein Fünf-Minuten-Setup braucht einen Fünf-Minuten-Atem',
        paragraphs: [
          'Wenn du auf einem Fünf-Minuten-Chart ein Setup, einen strukturellen Stop und ein Ziel definierst, basiert die gesamte Idee auf Schwankungen dieser Ebene. Wechselst du nach dem Einstieg auf eine Minute, zerlegst du jeden normalen Fünf-Minuten-Bar in mehrere Gegenbewegungen. Diese Bewegung wirkt plötzlich bedrohlich, obwohl sie den ursprünglichen Plan noch gar nicht verletzt.',
          'Kleinere Zeitebenen bieten mehr Signale und kleinere nominelle Stops. Sie bieten aber auch mehr Fehlsignale, mehr Entscheidungen und mehr Gelegenheit zum selektiven Cherry-Picking. Wer erst nach dem Einstieg hineinzoomt, tut dies häufig nicht wegen neuer Analyse, sondern um Angst zu beruhigen.',
          'Das heißt nicht, dass Multi-Timeframe-Analyse grundsätzlich falsch ist. Sie braucht nur eine vorab festgelegte Hierarchie: Welche Ebene liefert Kontext, welche den Einstieg und welche darf den Trade invalidieren? Diese Regeln werden vor der Order bestimmt, nicht mitten im Rücklauf.',
          'Wenn der Chart unklar ist, ist Abwarten eine vollständige Entscheidung. Sobald dein definiertes Setup vorliegt, musst du hingegen das vorher festgelegte Risiko akzeptieren oder den Trade auslassen.',
        ],
        callout:
          'Nach dem Einstieg die Zeitebene zu wechseln, verändert oft heimlich den Vertrag deines Trades.',
      },
      {
        id: 'intro-11-diagram',
        type: 'diagram',
        title: 'Ein Pullback, zwei optische Wirkungen',
        scenario: 'timeframe-discipline',
        caption:
          'Die kleinere Ebene zeigt mehr Schwankung, aber nicht automatisch eine neue Invalidierung des übergeordneten Setups.',
        observations: [
          'Der geplante Stop gehört zur Struktur der Einstiegsebene.',
          'Das Hineinzoomen erzeugt zusätzliche Gegenbars und emotionalen Handlungsdruck.',
          'Eine kleinere Ebene darf nur dann steuern, wenn das vor dem Einstieg Teil des Systems war.',
        ],
      },
      {
        id: 'intro-11-question',
        type: 'question',
        title: 'Warum zoomst du gerade hinein?',
        prompt:
          'Ein sauber geplanter Fünf-Minuten-Trade läuft leicht gegen dich, der strukturelle Stop ist nicht erreicht. Was ist die beste Reaktion?',
        options: [
          {
            id: 'zoom',
            label: 'Auf eine Minute wechseln und beim ersten roten Bar aussteigen',
            explanation:
              'Damit ersetzt du den ursprünglichen Plan nachträglich durch eine empfindlichere Ebene.',
          },
          {
            id: 'plan',
            label: 'Den vorab definierten Fünf-Minuten-Plan befolgen',
            explanation:
              'Richtig. Solange keine geplante Invalidierung vorliegt, ist normale Schwankung Teil des Risikos.',
          },
          {
            id: 'widen',
            label: 'Den Stop weiter wegsetzen, damit er nicht getroffen wird',
            explanation:
              'Auch das ändert den Vertrag nachträglich und erhöht unkontrolliert das Risiko.',
          },
        ],
        correctOptionId: 'plan',
      },
      {
        id: 'intro-11-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Analyse, Stop und Ziel müssen auf kompatiblen Zeitebenen beruhen.',
          'Kleinere Charts zeigen mehr Details und mehr Fehlsignale.',
          'Multi-Timeframe-Regeln gehören vor den Einstieg.',
          'Unklarheit erlaubt Abwarten; ein angenommener Trade verlangt geplante Risikotoleranz.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.introduction.lesson-12',
    title: 'Trading, Wette und positiver Erwartungswert',
    summary:
      'Wo Trading dem Glücksspiel ähnelt, wo es sich unterscheidet und weshalb Geduld einen messbaren Wert besitzt.',
    durationMinutes: 12,
    xp: 35,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Trading und Glücksspiel',
      'Wettbewerb, Kosten und Skill',
      'Geduld und Setup-Selektion',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-12-explain',
        type: 'explanation',
        eyebrow: 'Erwartungswert',
        title: 'Risiko allein macht eine Handlung noch nicht zum Glücksspiel',
        paragraphs: [
          'Jede unsichere Investition enthält Zufall. Entscheidend ist, ob du über viele Wiederholungen einen nachvollziehbaren positiven Erwartungswert besitzt. In einem reinen negativen Spiel arbeitet die Mathematik dauerhaft gegen dich. Im Trading kannst du durch Auswahl, Risiko-Ertrag, Ausführung und Kosten einen kleinen Vorteil schaffen – oder ihn durch undiszipliniertes Handeln zerstören.',
          'Kurzfristiger Futures-Handel ist nach Gebühren näher an einem Nullsummen-Wettbewerb: Gewinne und Verluste werden zwischen Teilnehmern verteilt, während Kosten das Gesamtergebnis mindern. Deshalb genügt durchschnittliche Zufallsauswahl nicht. Deine Entscheidungen müssen die Kosten und Fehlerquote übertreffen.',
          'Poker und Sportwetten ähneln Trading insofern, als Können den Wettbewerb beeinflussen kann. Eine noch passendere Analogie ist Schach: Die Stellung ist sichtbar, aber ihre Interpretation und die Qualität der nächsten Entscheidung unterscheiden die Spieler. Am Markt ist zusätzlich nie die komplette Absicht aller Teilnehmer sichtbar, doch der Chart zeigt die gemeinsame Stellung.',
          'Geduld verbessert den Erwartungswert, weil du schwache Situationen auslässt. Nicht zu handeln ist kein Leerlauf, sondern aktive Selektion. Wer Unterhaltung sucht, nimmt häufiger schlechte Trades; wer Prozessqualität sucht, wartet auf eine Kombination aus Kontext, Signal und vertretbarem Risiko.',
        ],
        callout:
          'Ohne getestete Methode und Disziplin wird Trading tatsächlich zum Glücksspiel – unabhängig davon, wie professionell der Chart aussieht.',
      },
      {
        id: 'intro-12-diagram',
        type: 'diagram',
        title: 'Wahrscheinlichkeit, Gewinn und Verlust gehören zusammen',
        scenario: 'risk-reward',
        caption:
          'Ein Trade ist nur im Zusammenspiel von Trefferchance, Ziel, Stop und Kosten beurteilbar.',
        observations: [
          'Der Einstieg allein sagt nichts über den Erwartungswert.',
          'Ein kleines Ziel braucht meist eine höhere Trefferquote als ein größeres Ziel.',
          'Gebühren und Slippage treffen besonders Ansätze mit sehr kleinen Gewinnen.',
          'Positionsgröße verändert den Geldbetrag, nicht die Qualität des Setups.',
        ],
      },
      {
        id: 'intro-12-comparison',
        type: 'comparison',
        title: 'Geplanter Trade oder Hoffnung?',
        columns: [
          {
            title: 'Geplanter Trade',
            tone: 'positive',
            points: [
              'Setup vor Einstieg benannt',
              'Invalidierung und maximales Risiko festgelegt',
              'Ziel passt zur Wahrscheinlichkeit',
              'Ergebnis wird über viele Fälle bewertet',
            ],
          },
          {
            title: 'Glücksspielverhalten',
            tone: 'warning',
            points: [
              'Einstieg aus Langeweile oder Rückholzwang',
              'Stop wird nach Verlustangst verschoben',
              'Größe folgt Emotion statt Regel',
              'ein Einzelergebnis soll die Methode beweisen',
            ],
          },
        ],
      },
      {
        id: 'intro-12-question',
        type: 'question',
        title: 'Wann kippt ein Trade in eine Wette?',
        prompt:
          'Du nimmst nach zwei Verlusten ein Setup, das laut deinem Plan nicht handelbar ist, um schnell wieder auf null zu kommen. Was hat sich verändert?',
        options: [
          {
            id: 'edge',
            label: 'Dein statistischer Vorteil ist größer geworden',
            explanation:
              'Vorherige Verluste verbessern nicht automatisch die Wahrscheinlichkeit des nächsten Setups.',
          },
          {
            id: 'gamble',
            label: 'Du ersetzt die Methode durch Hoffnung und Rückholzwang',
            explanation:
              'Richtig. Der Trade wird wegen des gewünschten Ergebnisses statt wegen einer validen Gelegenheit genommen.',
          },
          {
            id: 'size',
            label: 'Nur die Positionsgröße ist relevant',
            explanation:
              'Auch mit kleiner Größe bleibt die Entscheidung außerhalb des Plans qualitativ falsch.',
          },
        ],
        correctOptionId: 'gamble',
      },
      {
        id: 'intro-12-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Unsicherheit ist nicht automatisch Glücksspiel.',
          'Ein positiver Erwartungswert muss Kosten und Ausführungsfehler übertreffen.',
          'Geduld erhöht Qualität, indem sie schwache Situationen entfernt.',
          'Wer den Plan wegen Emotion verlässt, handelt Hoffnung statt Edge.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.introduction.lesson-13',
    title: 'Warum Martingale dein Konto sprengt',
    summary:
      'Verlustserien, exponentielle Positionsgrößen und der Denkfehler hinter „Der nächste muss gewinnen“.',
    durationMinutes: 10,
    xp: 35,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Loss Chasing und emotionale Risikosteigerung',
      'Fortsetzungswahrscheinlichkeit statt Münzwurfdenken',
      'Martingale-Paradox',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-13-explain',
        type: 'explanation',
        eyebrow: 'Risikofalle',
        title: 'Vier Verluste machen den fünften Trade nicht besser',
        paragraphs: [
          'Bei unabhängigen Münzwürfen bleibt die Chance nach jeder Serie gleich. Markttrades sind jedoch nicht automatisch unabhängig und das Regime kann längere Zeit bestehen bleiben. In einem Trend scheitern Gegenbewegungen wiederholt; in einer Range scheitern Ausbrüche wiederholt. Eine Verlustserie kann daher anzeigen, dass deine aktuelle Idee nicht zum Regime passt.',
          'Martingale versucht Verluste durch immer größere Folgepositionen zurückzuholen. Die Größen wachsen exponentiell: aus einer Einheit werden zwei, vier, acht und sechzehn. Schon eine gewöhnliche Serie zwingt dich damit weit über die Größe hinaus, die du ursprünglich als sicher angesehen hast.',
          'Theoretische Modelle ignorieren oft Kapitalgrenze, Margin, Slippage, Tagesverlustlimit und menschliche Belastbarkeit. Praktisch trifft die größte Position genau dann ein, wenn dein Vertrauen und möglicherweise dein Modell am schwächsten sind.',
          'Die professionelle Reaktion auf eine Verlustserie ist deshalb nicht automatische Aggression. Reduziere Risiko, prüfe Ausführung und Regime, und stoppe, wenn dein Tages- oder Prozesslimit erreicht ist.',
        ],
        callout:
          'Positionsgröße darf aus Risiko und Setupqualität folgen – niemals aus dem Wunsch, vorherige Verluste zurückzuholen.',
      },
      {
        id: 'intro-13-diagram',
        type: 'diagram',
        title: 'Exponentielles Risiko nach wenigen Verlusten',
        scenario: 'martingale-growth',
        caption:
          'Die notwendige Folgeposition wächst schneller als Intuition, Kontogröße und psychische Belastbarkeit.',
        observations: [
          'Nach vier Verdopplungen ist die nächste Position sechzehnmal so groß wie die erste.',
          'Ein weiterer Verlust verursacht mehr Schaden als alle frühen Verluste einzeln.',
          'Prop-Firm-Limits oder Margin beenden die Reihe meist lange vor der theoretischen Erholung.',
        ],
      },
      {
        id: 'intro-13-question',
        type: 'question',
        title: 'Was sagt eine Gegenserie im Trend?',
        prompt:
          'Du hast in einem starken Aufwärtstrend dreimal erfolglos geshortet. Welche Reaktion ist logisch?',
        options: [
          {
            id: 'double',
            label: 'Shortgröße verdoppeln, weil eine Umkehr fällig ist',
            explanation:
              'Der Trend besitzt kein Gedächtnis, das dir nach drei Verlusten einen Gewinner schuldet.',
          },
          {
            id: 'reassess',
            label: 'Gegentrendthese stoppen und Regime neu bewerten',
            explanation:
              'Richtig. Wiederholtes Scheitern ist Information gegen deine aktuelle Vorgehensweise.',
          },
          {
            id: 'widen',
            label: 'Stop jedes Mal weiter entfernen',
            explanation:
              'Damit steigt das Risiko, ohne dass die Setupqualität zunimmt.',
          },
        ],
        correctOptionId: 'reassess',
      },
      {
        id: 'intro-13-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Verlustserien erzwingen keine unmittelbar folgende Gegenbewegung.',
          'Marktregime erzeugen abhängige Serien von Fortsetzungen und Fehlschlägen.',
          'Martingale lässt das Risiko exponentiell wachsen.',
          'Nach Verlusten zuerst Prozess und Regime prüfen, nicht die Größe erhöhen.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.introduction.lesson-14',
    title: 'Crash, Swing und Fraktalität',
    summary:
      'Warum dramatische Formen auf kleinen und großen Zeitebenen ähnlich aussehen und trotzdem anders riskiert werden.',
    durationMinutes: 10,
    xp: 30,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Crash als Price-Action-Muster',
      'Formähnlichkeit über Zeitebenen',
      'Fraktale Untergliederung von Mustern',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-14-explain',
        type: 'explanation',
        eyebrow: 'Skalenwechsel',
        title: 'Entferne die Achsen – die Form kann vertraut wirken',
        paragraphs: [
          'Das Wort „Crash“ wird meist für seltene, schnelle Einbrüche auf Tagescharts verwendet. Entfernt man Zeit- und Preisachse, kann dieselbe Form jedoch regelmäßig als starker bearisher Swing auf einem Intraday-Chart erscheinen: große Trendbars, geringe Überlappung, kleine Pullbacks und anhaltender Verkaufsdruck.',
          'Diese Ähnlichkeit hilft, Emotion aus der Analyse zu nehmen. Statt einen dramatischen Namen zu handeln, beobachtest du dieselben Fragen wie bei jedem Trend: Gibt es Anschluss? Wie groß und wie tief sind Pullbacks? Werden frühere Unterstützungen klar gebrochen? Wann erscheint erstmals überzeugende Gegenstärke?',
          'Fraktalität bedeutet hier keine perfekte mathematische Selbstähnlichkeit. Es ist eine praktische Beobachtung: Größere Muster bestehen aus kleineren Trends und Ranges, und ein einzelner Bar einer großen Ebene enthält auf einer kleineren Ebene eine vollständige Sequenz.',
          'Die Formähnlichkeit macht das Risiko nicht identisch. Ein Tageschart-Crash besitzt anderes Gap-, Liquiditäts- und Übernachtrisiko als ein Fünf-Minuten-Swing. Methode und Positionsgröße müssen zur gewählten Ebene passen.',
        ],
        callout:
          'Gleiche Form bedeutet ähnliche Leselogik – nicht gleiche Stopdistanz, Kosten oder Positionsgröße.',
      },
      {
        id: 'intro-14-diagram',
        type: 'diagram',
        title: 'Ein Muster auf drei Skalen',
        scenario: 'fractal-timeframes',
        caption:
          'Impuls, Pullback und Fortsetzung können sich auf unterschiedlichen Ebenen ähneln, obwohl jede Ebene ein eigenes Risikomodell braucht.',
        observations: [
          'Ein Bar auf der großen Ebene kann eine komplette Sequenz der kleinen Ebene enthalten.',
          'Regimebegriffe funktionieren auf Minuten-, Tages- und Wochencharts.',
          'Orders, Haltedauer und Risiko dürfen nicht blind zwischen Ebenen kopiert werden.',
        ],
      },
      {
        id: 'intro-14-question',
        type: 'question',
        title: 'Was darf übertragen werden?',
        prompt:
          'Ein bearisher Intraday-Swing sieht wie ein historischer Tageschart-Crash aus. Welche Aussage ist korrekt?',
        options: [
          {
            id: 'same-risk',
            label: 'Beide brauchen dieselbe Stopdistanz',
            explanation:
              'Absolute Volatilität, Liquidität und Haltedauer sind verschieden.',
          },
          {
            id: 'same-reading',
            label: 'Die Logik von Impuls, Pullback und Anschluss kann ähnlich gelesen werden',
            explanation:
              'Richtig. Die Form liefert eine ähnliche Analyse, das Risikomodell bleibt zeitebenenspezifisch.',
          },
          {
            id: 'no-relation',
            label: 'Intraday- und Tagescharts haben keinerlei gemeinsame Struktur',
            explanation:
              'Wiederkehrende Trends, Ranges und Übergänge treten auf beiden Ebenen auf.',
          },
        ],
        correctOptionId: 'same-reading',
      },
      {
        id: 'intro-14-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Ein Crash lässt sich analytisch als extremer Trend lesen.',
          'Price-Action-Strukturen wiederholen sich näherungsweise über Zeitebenen.',
          'Größere Muster enthalten kleinere Trends und Ranges.',
          'Risikoparameter bleiben immer an Instrument und Zeitebene gebunden.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.introduction.lesson-15',
    title: 'So arbeitest du mit der Buchreihe',
    summary:
      'Was Band 1, 2 und 3 abdecken und wie Hauptpfad, Vertiefung, Glossar und Chartarbeit zusammenspielen.',
    durationMinutes: 9,
    xp: 30,
    sourceUnit: 'Einleitung · How to Read These Books',
    sourceAnchors: [
      'How to Read These Books',
      'Inhaltslogik der drei Bände',
      'Glossar, Hauptanalyse und vertiefte Chartdiskussion',
    ],
    status: 'published',
    steps: [
      {
        id: 'intro-15-explain',
        type: 'explanation',
        eyebrow: 'Lernmethode',
        title: 'Erst das Gerüst, dann immer feinere Varianten',
        paragraphs: [
          'Die Buchreihe ist als aufbauende Sequenz gedacht. Band 1 behandelt Grundlagen, Kerzen, Trendlinien, Kanäle und Trends. Band 2 führt über Ausbrüche und Gaps zu Unterstützung, Widerstand, Pullbacks, Trading Ranges sowie Order-, Trade- und Wahrscheinlichkeitsmanagement. Band 3 konzentriert sich auf Umkehrungen, Tageshandel, größere Zeitebenen, Optionen und besonders selektive Setups.',
          'Die Academy erhält diese Reihenfolge. Mikro-Lektionen teilen schwierige Abschnitte, ersetzen aber keine Themen. Ein späteres Kapitel wird nicht vorgezogen, nur weil seine Grafik spannender aussieht. Damit bleiben Begriffe, die ein Kapitel voraussetzt, bereits eingeführt.',
          'Die Buchcharts enthalten neben der Hauptidee viele zusätzliche Ereignisse. Beim ersten Durchgang darfst du den zentralen Fall verstehen, ohne jede Nebenstruktur sofort zu beherrschen. Vertiefungen bringen dieselben Charts später mit mehr Vokabular zurück. Wiederholtes Sehen von Varianten ist Absicht, keine Dopplung.',
          'Unbekannte Begriffe gehören ins Glossar. Ein Ausdruck soll den Lesefluss nicht dauerhaft blockieren, aber auch nicht einfach übersprungen werden. Kurze Definition, visuelle Referenz und Verknüpfung zur ersten ausführlichen Lektion bilden zusammen die Lernspur.',
        ],
        callout:
          'Häppchen verändern die Verpackung. Die fachliche Reihenfolge und Abdeckung bleiben erhalten.',
      },
      {
        id: 'intro-15-comparison',
        type: 'comparison',
        title: 'Drei Bände, eine aufbauende Sprache',
        columns: [
          {
            title: 'Band 1 · Grundlage und Trends',
            tone: 'positive',
            points: [
              'Bars und grundlegende Price Action',
              'Trend versus Trading Range',
              'Trend- und Kanallinien',
              'Trendarten und Trendhandel',
            ],
          },
          {
            title: 'Band 2 und 3 · Anwendung',
            tone: 'neutral',
            points: [
              'Ausbrüche, Gaps, Ranges und Pullbacks',
              'Ordermanagement und Mathematik',
              'Umkehrungen und Tageshandel',
              'größere Zeitebenen, Optionen und Best Trades',
            ],
          },
        ],
      },
      {
        id: 'intro-15-question',
        type: 'question',
        title: 'Was machst du mit einer zu frühen Vertiefung?',
        prompt:
          'Eine Chartbesprechung nutzt Begriffe aus einem späteren Kapitel. Wie gehst du beim ersten Durchgang am sinnvollsten vor?',
        options: [
          {
            id: 'quit',
            label: 'Den ganzen Kurs abbrechen',
            explanation:
              'Komplexe Nebenbeobachtungen dürfen beim ersten Durchgang noch offenbleiben.',
          },
          {
            id: 'core',
            label: 'Hauptidee verstehen, Begriff markieren und später vertiefen',
            explanation:
              'Richtig. So bleibt der Lernfluss erhalten, ohne die Lücke zu verleugnen.',
          },
          {
            id: 'skip-all',
            label: 'Alle unbekannten Begriffe dauerhaft ignorieren',
            explanation:
              'Dann fehlen später Bausteine. Markieren und gezielt zurückkehren ist besser.',
          },
        ],
        correctOptionId: 'core',
      },
      {
        id: 'intro-15-recap',
        type: 'recap',
        title: 'Das nimmst du mit',
        points: [
          'Die drei Bände bauen fachlich aufeinander auf.',
          'Der Academy-Lernpfad schützt diese Reihenfolge.',
          'Hauptfall und tiefere Chartdiskussion dürfen in mehreren Durchgängen gelernt werden.',
          'Glossar und Verlinkungen schließen Verständnislücken, ohne Themen zu verschieben.',
        ],
      },
    ],
  },
] satisfies Lesson[];
