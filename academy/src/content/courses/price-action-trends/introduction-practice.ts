import type { Lesson } from '../../types';

export const introductionPracticeLessons = [
  {
    id: 'price-action-trends.introduction.lesson-09',
    title: 'Nachricht und Marktreaktion trennen',
    summary:
      'Warum eine Schlagzeile ohne Zeithorizont und Kursreaktion noch keine Handelsentscheidung ist.',
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
          'Nachrichten beantworten meistens, was wirtschaftlich passiert ist. Für einen Intraday-Trade brauchst du aber andere Antworten: Was war schon eingepreist? Wie war der Markt positioniert? Auf welchem Niveau reagieren Käufer und Verkäufer? Und passt der Horizont der Analyse überhaupt zu deiner geplanten Haltedauer?',
          'Ein Fondsmanager kann mit einer mehrmonatigen bullischen These recht haben, während der Markt in der nächsten Stunde fällt. Seine Position hält einen großen Rücklauf aus; dein kurzfristiger Trade vielleicht nicht. Die Aussage des Experten ist dann nicht unbedingt falsch – sie gilt nur auf einer anderen Zeitebene als deine Entscheidung.',
          'Medien suchen sich verständliche Ursachen und überzeugende Gesprächspartner. Im Nachhinein entsteht so eine glatte Geschichte, obwohl gleichzeitig genauso kluge Leute die Gegenseite gehandelt haben. Für Price Action zählt deshalb nicht, wie laut die Erklärung ist, sondern wie der Preis tatsächlich reagiert.',
          'Das heißt nicht, dass Wirtschaftsdaten egal wären. Sie können Volatilität, Gap-Risiko und Liquidität stark verändern. Die Faustregel: Kenne den Termin und das Risiko – und lass den Chart beurteilen, wie der Markt reagiert.',
        ],
        callout:
          'Fundamentale Infos und die kurzfristige Handelsrichtung sind zwei verschiedene Fragen.',
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
    id: 'price-action-trends.introduction.lesson-10',
    title: 'Gute Nachricht, schwacher Chart',
    summary:
      'Ein eigener Chartfall zu Gap, gescheitertem Anschluss und der stärkeren Info in der Reaktion.',
    durationMinutes: 12,
    xp: 40,
    sourceUnit: 'Einleitung',
    sourceAnchors: [
      'Chartfälle zu positiven Nachrichten mit schwacher Folgebewegung',
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
          'Stell dir vor, ein Unternehmen meldet überraschend gute Zahlen. Der Markt eröffnet deutlich über dem Vortag. Dieser Gap ist zunächst eine bullische Info: Käufer waren bereit, sofort viel höhere Preise zu zahlen. Aber ein Gap ist erst der Anfang der Beobachtung, nicht das Ende der Analyse.',
          'Nach der Eröffnung gibt es keinen sauberen Anschluss. Der erste Anstieg wird verkauft, ein zweiter Versuch bleibt unter dem ersten Hoch, und der Markt rutscht zurück Richtung altem Schlusskurs. Jetzt hat sich die Info geändert: Trotz guter Nachricht konnten die Käufer das neue Niveau nicht halten.',
          'Ein Bruch unter die Eröffnungsstruktur kann den gescheiterten Gap zu einer Verkaufschance machen. Nach einem sehr steilen Abverkauf bleibt aber Momentum übrig, sodass ein erster Pullback oft noch einmal das Tief testet. Ein kräftiger Reversal-Bar später kann deshalb einen Long-Scalp rechtfertigen, ohne dass der Short davor im Nachhinein falsch war.',
          'Der Fall zeigt, warum Price Action keine feste Meinung verteidigt. Bullischer Gap, bärischer Fehlausbruch und danach ein Reversal-Scalp können nacheinander alle richtige Entscheidungen sein.',
        ],
        callout:
          'Reagiere auf neue Beweise. Treu bleibst du deinem Prozess, nicht deiner ersten Marktrichtung.',
      },
      {
        id: 'intro-10-diagram',
        type: 'diagram',
        title: 'Gap nach oben, Akzeptanz bleibt aus',
        scenario: 'news-reaction',
        caption:
          'Der synthetische Verlauf übernimmt keine echte Grafik. Er zeigt dieselbe Lernidee mit eigenständig konstruierten Kursdaten.',
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
    id: 'price-action-trends.introduction.lesson-11',
    title: 'Bleib auf der Zeitebene deines Plans',
    summary:
      'Warum ein kleinerer Chart nach dem Einstieg oft nicht genauer wird, sondern nur lauter.',
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
          'Definierst du auf einem Fünf-Minuten-Chart Setup, strukturellen Stop und Ziel, beruht die ganze Idee auf den Schwankungen dieser Ebene. Springst du nach dem Einstieg auf eine Minute, zerfällt jeder normale Fünf-Minuten-Bar in mehrere Gegenbewegungen. Die wirken plötzlich bedrohlich, obwohl sie deinen ursprünglichen Plan noch gar nicht verletzen.',
          'Kleinere Zeitebenen liefern mehr Signale und kleinere Stops in Zahlen. Dafür gibt es auch mehr Fehlsignale, mehr Entscheidungen und mehr Versuchung zum Rosinenpicken. Wer erst nach dem Einstieg hineinzoomt, tut das oft nicht wegen neuer Analyse, sondern um die eigene Angst zu beruhigen.',
          'Multi-Timeframe-Analyse ist deshalb nicht grundsätzlich falsch. Sie braucht nur eine Rangordnung, die vorher feststeht: Welche Ebene gibt den Kontext, welche den Einstieg, und welche darf den Trade ungültig machen? Das legst du vor der Order fest, nicht mitten im Rücklauf.',
          'Ist der Chart unklar, ist Abwarten eine vollwertige Entscheidung. Liegt dein definiertes Setup aber vor, musst du das vorher festgelegte Risiko akzeptieren – oder den Trade auslassen.',
        ],
        callout:
          'Nach dem Einstieg die Zeitebene zu wechseln, ändert oft heimlich die Spielregeln deines Trades.',
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
    id: 'price-action-trends.introduction.lesson-12',
    title: 'Trading, Wette und positiver Erwartungswert',
    summary:
      'Wo Trading dem Glücksspiel ähnelt, wo nicht, und warum Geduld einen messbaren Wert hat.',
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
          'Jede unsichere Investition enthält Zufall. Entscheidend ist, ob du über viele Wiederholungen einen nachvollziehbaren positiven Erwartungswert hast. In einem reinen Verlustspiel arbeitet die Mathematik dauerhaft gegen dich. Im Trading kannst du dir durch Auswahl, Risiko-Ertrag, Ausführung und Kosten einen kleinen Vorteil erarbeiten – oder ihn durch undiszipliniertes Handeln wieder wegwerfen.',
          'Kurzfristiger Futures-Handel ist nach Gebühren eher ein Nullsummenspiel: Gewinne und Verluste werden unter den Teilnehmern verteilt, während Kosten das Gesamtergebnis drücken. Zufällig mitzuhandeln reicht also nicht. Deine Entscheidungen müssen Kosten und Fehlerquote schlagen.',
          'Poker und Sportwetten ähneln dem Trading darin, dass Können den Ausgang beeinflussen kann. Noch besser passt Schach: Die Stellung ist sichtbar, aber wie du sie deutest und wie gut dein nächster Zug ist, macht den Unterschied. Am Markt siehst du zwar nie die komplette Absicht aller Teilnehmer, aber der Chart zeigt dir die gemeinsame Stellung.',
          'Geduld verbessert den Erwartungswert, weil du schwache Situationen auslässt. Nicht zu handeln ist kein Leerlauf, sondern aktive Auswahl. Wer Unterhaltung sucht, nimmt öfter schlechte Trades; wer einen guten Prozess will, wartet auf die Kombination aus Kontext, Signal und vertretbarem Risiko.',
        ],
        callout:
          'Ohne getestete Methode und Disziplin wird Trading wirklich zum Glücksspiel – egal, wie professionell der Chart aussieht.',
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
    id: 'price-action-trends.introduction.lesson-13',
    title: 'Warum Martingale dein Konto sprengt',
    summary:
      'Verlustserien, Positionsgrößen, die explodieren, und der Denkfehler hinter „Der nächste muss gewinnen“.',
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
          'Bei unabhängigen Münzwürfen bleibt die Chance nach jeder Serie gleich. Markttrades sind aber nicht automatisch unabhängig, und ein Regime kann lange anhalten. In einem Trend scheitern Gegenbewegungen immer wieder, in einer Range scheitern Ausbrüche immer wieder. Eine Verlustserie kann also ein Hinweis sein, dass deine aktuelle Idee nicht zum Regime passt.',
          'Beim Martingale versuchst du, Verluste mit immer größeren Folgepositionen zurückzuholen. Die Größe wächst exponentiell: aus einer Einheit werden zwei, vier, acht und sechzehn. Schon eine ganz normale Serie treibt dich damit weit über die Größe hinaus, die du ursprünglich für sicher gehalten hast.',
          'Theoretische Modelle blenden oft Kapitalgrenze, Margin, Slippage, Tagesverlustlimit und menschliche Belastbarkeit aus. In der Praxis kommt die größte Position genau dann, wenn dein Vertrauen – und womöglich auch dein Modell – am schwächsten ist.',
          'Die professionelle Antwort auf eine Verlustserie ist deshalb nicht, automatisch aggressiver zu werden. Reduziere das Risiko, prüfe Ausführung und Regime, und hör auf, sobald dein Tages- oder Prozesslimit erreicht ist.',
        ],
        callout:
          'Die Positionsgröße darf sich aus Risiko und Setupqualität ergeben – nie aus dem Wunsch, frühere Verluste zurückzuholen.',
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
    id: 'price-action-trends.introduction.lesson-14',
    title: 'Crash, Swing und Fraktalität',
    summary:
      'Warum dramatische Formen auf kleinen und großen Zeitebenen ähnlich aussehen und du sie trotzdem unterschiedlich riskierst.',
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
          '„Crash“ sagt man meist für seltene, schnelle Einbrüche auf Tagescharts. Nimmst du Zeit- und Preisachse weg, kann dieselbe Form aber ganz regelmäßig als starker bärischer Swing auf einem Intraday-Chart auftauchen: große Trendbars, wenig Überlappung, kleine Pullbacks und anhaltender Verkaufsdruck.',
          'Diese Ähnlichkeit hilft dir, die Emotion aus der Analyse zu nehmen. Statt einen dramatischen Namen zu handeln, stellst du dieselben Fragen wie bei jedem Trend: Gibt es Anschluss? Wie groß und wie tief sind die Pullbacks? Werden frühere Unterstützungen klar gebrochen? Wann zeigt sich zum ersten Mal überzeugende Gegenstärke?',
          'Fraktalität heißt hier nicht perfekte mathematische Selbstähnlichkeit. Gemeint ist eine praktische Beobachtung: Größere Muster bestehen aus kleineren Trends und Ranges, und ein einzelner Bar einer großen Ebene enthält auf einer kleineren Ebene eine ganze Sequenz.',
          'Die ähnliche Form macht das Risiko nicht gleich. Ein Crash auf dem Tageschart bringt anderes Gap-, Liquiditäts- und Übernachtrisiko mit als ein Fünf-Minuten-Swing. Methode und Positionsgröße müssen zur gewählten Ebene passen.',
        ],
        callout:
          'Gleiche Form heißt ähnliche Leselogik – nicht gleiche Stopdistanz, gleiche Kosten oder gleiche Positionsgröße.',
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
    id: 'price-action-trends.introduction.lesson-15',
    title: 'So arbeitest du mit diesem Kurs',
    summary:
      'Was Teil 1, 2 und 3 abdecken und wie Hauptpfad, Vertiefung, Glossar und Chartarbeit zusammenspielen.',
    durationMinutes: 9,
    xp: 30,
    sourceUnit: 'Einleitung · So arbeitest du mit dem Kurs',
    sourceAnchors: [
      'So arbeitest du mit dem Kurs',
      'Inhaltslogik der drei Kursteile',
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
          'Der Kurs baut Schritt für Schritt aufeinander auf. Teil 1 behandelt Grundlagen, Kerzen, Trendlinien, Kanäle und Trends. Teil 2 führt über Ausbrüche und Gaps zu Unterstützung, Widerstand, Pullbacks, Trading Ranges sowie Order-, Trade- und Wahrscheinlichkeitsmanagement. Teil 3 widmet sich Umkehrungen, Tageshandel, größeren Zeitebenen, Optionen und besonders selektiven Setups.',
          'Die Academy behält diese Reihenfolge bei. Die Mikro-Lektionen zerlegen schwierige Abschnitte, lassen aber keine Themen weg. Ein späteres Kapitel wird nicht vorgezogen, nur weil seine Grafik spannender aussieht. So sind Begriffe, die ein Kapitel voraussetzt, vorher schon eingeführt.',
          'Die Beispielcharts enthalten neben der Hauptidee viele weitere Ereignisse. Beim ersten Durchgang reicht es, den zentralen Fall zu verstehen – du musst nicht gleich jede Nebenstruktur beherrschen. Vertiefungen holen dieselben Charts später mit mehr Vokabular zurück. Dass du Varianten mehrfach siehst, ist Absicht und keine Doppelung.',
          'Unbekannte Begriffe gehören ins Glossar. Ein Ausdruck soll den Lesefluss nicht dauerhaft bremsen, aber auch nicht einfach übergangen werden. Kurze Definition, Bildbeispiel und Verknüpfung zur ersten ausführlichen Lektion bilden zusammen die Lernspur.',
        ],
        callout:
          'Die Häppchen ändern nur die Verpackung. Reihenfolge und Abdeckung der Inhalte bleiben gleich.',
      },
      {
        id: 'intro-15-comparison',
        type: 'comparison',
        title: 'Drei Kursteile, eine aufbauende Sprache',
        columns: [
          {
            title: 'Teil 1 · Grundlage und Trends',
            tone: 'positive',
            points: [
              'Bars und grundlegende Price Action',
              'Trend versus Trading Range',
              'Trend- und Kanallinien',
              'Trendarten und Trendhandel',
            ],
          },
          {
            title: 'Teil 2 und 3 · Anwendung',
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
          'Die drei Kursteile bauen fachlich aufeinander auf.',
          'Der Academy-Lernpfad schützt diese Reihenfolge.',
          'Hauptfall und tiefere Chartdiskussion dürfen in mehreren Durchgängen gelernt werden.',
          'Glossar und Verlinkungen schließen Verständnislücken, ohne Themen zu verschieben.',
        ],
      },
    ],
  },
] satisfies Lesson[];
