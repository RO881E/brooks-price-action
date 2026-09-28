import type { Lesson } from '../../types';

export const chapterFourFoundationLessons = [
  {
    id: 'brooks-trends.chapter-04.lesson-01',
    title: 'Ein Setup ist eine Möglichkeit, noch kein Signal',
    summary:
      'Wie aus einem Chartmuster eine geplante Orderidee entsteht und warum Trendrichtung den ersten Qualitätsfilter liefert.',
    durationMinutes: 12,
    xp: 45,
    sourceUnit: 'Kapitel 4 · Setup, Trendrichtung und Gegenrichtung',
    sourceAnchors: [
      'Setup als ein- oder mehrbarige Grundlage einer möglichen Order',
      'Jeder Bar als potenzieller Ausgangspunkt eines starken Moves',
      'With-trend-Trade in Richtung der jüngsten oder dominanten Bewegung',
      'Countertrend-Trade entgegen der jüngsten oder dominanten Bewegung',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-01-explain',
        type: 'explanation',
        eyebrow: 'Kapitel 4 · Begriffe',
        title: 'Das Muster erlaubt eine Order – es verspricht keinen Gewinn',
        paragraphs: [
          'Ein Setup ist eine sichtbare Kursstruktur, aus der du eine handelbare Hypothese ableitest. Es kann nur aus einem Bar bestehen oder sich über mehrere Bars entwickeln. Sein Zweck ist praktisch: Es nennt dir einen Bereich, an dem eine Order sinnvoll vorbereitet werden könnte.',
          'Fast jeder abgeschlossene Bar kann zum Setup werden, weil der nächste Bar einen kräftigen Move nach oben oder unten beginnen kann. Das macht aber nicht jeden Bar gleich wertvoll. Erst Lage, Trend, vorherige Stärke, Tests und mögliche Folgereaktion bestimmen, ob eine Order einen kleinen statistischen Vorteil besitzt.',
          'Liegt die geplante Richtung auf derselben Seite wie der jüngste oder übergeordnete Trend, ist es ein With-trend-Setup. Du nutzt dann die Marktträgheit: In einem Bullenmarkt suchst du überwiegend Longs, in einem Bärenmarkt Shorts.',
          'Willst du gegen die dominante Bewegung handeln, planst du einen Countertrend-Trade. Damit verlangst du vom Markt einen echten Kontrollwechsel. Die Anforderungen an Kontext und Bestätigung müssen deshalb deutlich höher sein.',
        ],
        callout:
          'Setup bedeutet: Hier könnte eine Order Sinn ergeben. Erst Auslösung und Folgebewegung zeigen, ob daraus ein Trade mit Anschluss wird.',
      },
      {
        id: 'chapter-04-01-diagram',
        type: 'diagram',
        title: 'Dasselbe Tief, zwei völlig verschiedene Trade-Ideen',
        scenario: 'setup-direction',
        caption:
          'Ein Kauf nach einem Pullback im Bullenmarkt arbeitet mit der bestehenden Kontrolle. Ein Short am selben Ort verlangt, dass diese Kontrolle zuerst sichtbar bricht.',
        observations: [
          'Die Marktstruktur existiert vor dem einzelnen Signal-Bar.',
          'With-trend nutzt die wahrscheinliche Fortsetzung nach einem Pullback.',
          'Countertrend braucht Belege, dass Trendkäufer ihre Kontrolle verlieren.',
          'Die Kerzenform allein kann beide Richtungen nicht zuverlässig trennen.',
        ],
      },
      {
        id: 'chapter-04-01-compare',
        type: 'comparison',
        title: 'Richtung verändert die Beweislast',
        columns: [
          {
            title: 'Mit dem Trend',
            tone: 'positive',
            points: [
              'Marktträgheit arbeitet für den Trade',
              'Pullback kann einen besseren Einstieg liefern',
              'Signal-Bar darf in sehr starken Trends unperfekt sein',
            ],
          },
          {
            title: 'Gegen den Trend',
            tone: 'warning',
            points: [
              'bestehende Kontrolle muss erst brechen',
              'mehrere Bestätigungen sind erforderlich',
              'schwaches Signal führt häufig nur zur nächsten Trendflag',
            ],
          },
        ],
      },
      {
        id: 'chapter-04-01-question',
        type: 'question',
        title: 'Wie ordnest du die Richtung ein?',
        prompt:
          'Der Markt befindet sich in einem klaren Bullenkanal. Nach einem kleinen Rücklauf planst du einen Long-Einstieg. Was ist das?',
        options: [
          {
            id: 'with-trend',
            label: 'Ein With-trend-Setup',
            explanation:
              'Richtig. Der geplante Long folgt der aktuell dominanten Aufwärtsbewegung.',
          },
          {
            id: 'countertrend',
            label: 'Ein Countertrend-Setup',
            explanation:
              'Countertrend wäre hier ein Short gegen den bestehenden Bullenkanal.',
          },
          {
            id: 'signal-already',
            label: 'Automatisch bereits ein Signal-Bar',
            explanation:
              'Ein Setup bleibt zunächst eine Möglichkeit. Die Rolle Signal-Bar entsteht erst mit einem tatsächlich ausgelösten Einstieg.',
          },
        ],
        correctOptionId: 'with-trend',
      },
      {
        id: 'chapter-04-01-recap',
        type: 'recap',
        title: 'Das Fundament',
        points: [
          'Ein Setup begründet eine mögliche Order, nicht deren Erfolg.',
          'Fast jeder Bar kann Ausgangspunkt eines Moves sein, aber der Kontext gewichtet ihn.',
          'With-trend folgt der dominanten Richtung.',
          'Countertrend benötigt wesentlich mehr Evidenz für einen Kontrollwechsel.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-04.lesson-02',
    title: 'Barrollen entstehen erst durch den Trade',
    summary:
      'Wie derselbe Bar rückblickend vom Setup-Bar zum Signal-Bar wird und anschließend Entry- und Follow-through-Bar folgen.',
    durationMinutes: 12,
    xp: 45,
    sourceUnit: 'Kapitel 4 · Setup-, Signal-, Entry- und Follow-through-Bar',
    sourceAnchors: [
      'Signal-Bar als rückblickende Bezeichnung nach ausgelöstem Einstieg',
      'Vorheriger Bar wird durch die Ausführung zum Signal-Bar',
      'Bar der Orderausführung als Entry-Bar',
      'Nächster Richtungsbar als Follow-through-Bar',
      'Verzögerter Follow-through nach kurzer Seitwärtsphase',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-02-explain',
        type: 'explanation',
        eyebrow: 'Rollen statt feste Kerzentypen',
        title: 'Der Markt vergibt die Namen erst im Nachhinein',
        paragraphs: [
          'Während ein Bar entsteht, kann er eine interessante Form und Lage besitzen. Zu diesem Zeitpunkt ist er nur Teil eines Setups. Du kannst auf seiner Grundlage eine Order vorbereiten, aber noch ist nicht entschieden, ob der Markt diese Order überhaupt erreicht.',
          'Wird deine Entry-Order im nächsten Bar ausgeführt, erhält der vorherige Bar rückblickend die Rolle des Signal-Bars. Er war die sichtbare Grundlage, auf der du den Einstieg geplant hast. Ohne Ausführung bleibt er lediglich ein potenzieller Setup-Bar.',
          'Der Bar, in dem deine Order ausgeführt wird, ist der Entry-Bar. Der darauffolgende Bar sollte idealerweise weiteren Fortschritt in Trade-Richtung zeigen. Dann ist er der Follow-through-Bar und liefert die erste Bestätigung, dass der Markt den Ausbruch nicht sofort zurückweist.',
          'Follow-through muss nicht zwingend im allerersten Bar erscheinen. Manchmal pausiert der Markt ein oder zwei Bars seitwärts und setzt sich danach fort. Solange die Gegenseite den Einstieg nicht deutlich zurückerobert und später Anschluss entsteht, bleibt die These intakt. Schneller Anschluss ist dennoch qualitativ stärker.',
        ],
        callout:
          'Setup-Bar beschreibt eine Möglichkeit. Signal-Bar, Entry-Bar und Follow-through-Bar beschreiben, was tatsächlich danach geschah.',
      },
      {
        id: 'chapter-04-02-diagram',
        type: 'diagram',
        title: 'Vier Rollen in zeitlicher Reihenfolge',
        scenario: 'bar-role-lifecycle',
        caption:
          'Der erste Bar wird erst dann zum Signal-Bar, wenn die Order im folgenden Entry-Bar tatsächlich ausgelöst wird.',
        observations: [
          'Vor Auslösung ist der erste Bar nur ein möglicher Setup-Bar.',
          'Die Entry-Ausführung benennt den vorherigen Bar rückwirkend als Signal-Bar.',
          'Der Entry-Bar zeigt, wo der Trade tatsächlich beginnt.',
          'Follow-through bestätigt, dass die neue Richtung weitere Preise durchsetzt.',
        ],
      },
      {
        id: 'chapter-04-02-question',
        type: 'question',
        title: 'Wann wird aus dem Setup ein Signal-Bar?',
        prompt:
          'Du platzierst einen Buy-Stop über einem bullischen Bar, aber der Markt erreicht die Order nie. Welche Rolle hatte dieser Bar?',
        options: [
          {
            id: 'signal',
            label: 'Er war sicher ein Signal-Bar',
            explanation:
              'Ohne tatsächlichen Einstieg wird die rückblickende Signal-Bar-Rolle nicht aktiviert.',
          },
          {
            id: 'setup-only',
            label: 'Er blieb ein potenzieller Setup-Bar',
            explanation:
              'Richtig. Die Orderidee bestand, aber es entstand kein ausgeführter Trade.',
          },
          {
            id: 'entry',
            label: 'Er war der Entry-Bar',
            explanation:
              'Der Entry-Bar ist der Bar, in dem die Order tatsächlich ausgeführt wird.',
          },
        ],
        correctOptionId: 'setup-only',
      },
      {
        id: 'chapter-04-02-recap',
        type: 'recap',
        title: 'Die Rollenkette',
        points: [
          'Setup-Bar: mögliche Ordergrundlage.',
          'Signal-Bar: rückblickende Rolle nach tatsächlicher Ausführung.',
          'Entry-Bar: enthält den Einstiegspreis.',
          'Follow-through-Bar: schafft weiteren Fortschritt in Trade-Richtung.',
          'Eine kurze Pause vor dem Anschluss ist möglich, sofortiger Anschluss bleibt besser.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-04.lesson-03',
    title: 'Jeder Bar bietet beiden Seiten einen Plan',
    summary:
      'Warum oberhalb und unterhalb desselben Bars Stop- und Limit-Trader mit gegensätzlichen, aber rationalen Erwartungen warten.',
    durationMinutes: 14,
    xp: 50,
    sourceUnit: 'Kapitel 4 · Jeder Bar als zweiseitige Trading Range',
    sourceAnchors: [
      'Buy-Stops über und Sell-Stops unter dem vorherigen Bar',
      'Buy-Limits am oder unter dem Tief und Sell-Limits am oder über dem Hoch',
      'Jeder Bar als Signalgrundlage für Long und Short',
      'Ein-Bar-Range mit Breakout- und Fade-Erwartung',
      'Gegenseite als ebenso informierte Marktteilnehmer',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-03-explain',
        type: 'explanation',
        eyebrow: 'Orderlogik',
        title: 'Über dem Hoch warten nicht nur Käufer',
        paragraphs: [
          'Über dem Hoch des vorherigen Bars liegen Buy-Stops von Bullen, die einen Aufwärtsbreakout handeln wollen. Unter seinem Tief liegen Sell-Stops von Bären, die auf einen Abwärtsbreakout setzen. Diese Orders reagieren auf Momentum und werden erst aktiv, wenn der Markt die jeweilige Grenze überschreitet.',
          'An denselben Grenzen wartet aber die Gegenseite. Bären können am Hoch oder darüber mit Sell-Limits verkaufen, weil sie einen Fehlausbruch erwarten. Bullen können am Tief oder darunter mit Buy-Limits kaufen. Der Markt ist deshalb nicht in einfache Käufer- und Verkäuferzonen geteilt; an jeder Grenze treffen Fortsetzungs- und Umkehrthesen aufeinander.',
          'Ein einzelner Bar kann wie eine sehr kleine Trading Range betrachtet werden. Breakout-Trader erwarten nach dem Verlassen genug Anschluss für zumindest einen kleinen Gewinn. Fade-Trader erwarten, dass der Grenzbruch scheitert und der Preis in den Bar zurückkehrt.',
          'Steigt der nächste Bar knapp über das alte Hoch, können Buy-Stops ausgelöst und gleichzeitig neue Shorts eröffnet werden. Fällt der Markt anschließend unter das Tief dieses Entry-Bars, wird derselbe Bar wiederum zur Grundlage eines Short-Signals. Rollen und Kontrolle können sich schnell verschieben.',
          'Deine Überzeugung ist daher kein Beweis. Jede Ausführung benötigt eine intelligente Gegenseite, die denselben Preis mit einer anderen Erwartung handelt. Dein Vorteil entsteht nur, wenn Kontext und Folgebewegung deine Seite etwas wahrscheinlicher machen.',
        ],
        callout:
          'Stop-Trader handeln den Ausbruch; Limit-Trader handeln sein mögliches Scheitern. Beide können am exakt gleichen Preis aktiv sein.',
      },
      {
        id: 'chapter-04-03-diagram',
        type: 'diagram',
        title: 'Vier Orderideen rund um denselben Bar',
        scenario: 'one-bar-order-map',
        caption:
          'Oberhalb und unterhalb des Bars treffen Breakout-Orders auf Limit-Orders der Gegenseite.',
        observations: [
          'Buy-Stop über dem Hoch: bullische Fortsetzungsthese.',
          'Sell-Limit am Hoch: bärische Fehlausbruchsthese.',
          'Sell-Stop unter dem Tief: bärische Fortsetzungsthese.',
          'Buy-Limit am Tief: bullische Fehlausbruchsthese.',
          'Erst die Reaktion nach der Ausführung trennt die besseren von den schlechteren Erwartungen.',
        ],
      },
      {
        id: 'chapter-04-03-compare',
        type: 'comparison',
        title: 'Gleiche Grenze, gegensätzliche Logik',
        columns: [
          {
            title: 'Breakout-Trader',
            tone: 'positive',
            points: [
              'wartet auf Überschreiten des Hochs oder Tiefs',
              'nutzt Stop-Order zur Aktivierung',
              'braucht raschen Follow-through außerhalb des Bars',
            ],
          },
          {
            title: 'Fade-Trader',
            tone: 'warning',
            points: [
              'verkauft oben oder kauft unten per Limit',
              'erwartet Rückkehr in die Ein-Bar-Range',
              'braucht schnelle Zurückweisung des Grenzbruchs',
            ],
          },
        ],
      },
      {
        id: 'chapter-04-03-question',
        type: 'question',
        title: 'Wer handelt am alten Hoch?',
        prompt:
          'Der Markt erreicht das Hoch des vorherigen Bars. Welche Aussage ist vollständig?',
        options: [
          {
            id: 'only-bulls',
            label: 'Dort kaufen ausschließlich Bullen',
            explanation:
              'Auch Bären können dort oder darüber mit Limit-Orders einen Fehlausbruch handeln.',
          },
          {
            id: 'both-sides',
            label: 'Buy-Stops und Sell-Limits können zusammentreffen',
            explanation:
              'Richtig. Fortsetzungs- und Umkehrthese werden am selben Preis ausgeführt.',
          },
          {
            id: 'no-orders',
            label: 'Vorherige Bar-Hochs sind für Orders irrelevant',
            explanation:
              'Bar-Extrema sind häufige Auslöser für Stop-Einstiege und Orte für Limit-Gegentrades.',
          },
        ],
        correctOptionId: 'both-sides',
      },
      {
        id: 'chapter-04-03-recap',
        type: 'recap',
        title: 'Die Ein-Bar-Auktion',
        points: [
          'Jeder Bar kann als kleine Trading Range betrachtet werden.',
          'Stop-Orders erwarten Fortsetzung außerhalb seiner Grenzen.',
          'Limit-Orders erwarten Zurückweisung an denselben Grenzen.',
          'Ein Bar kann nacheinander Long- und Short-Signalgrundlage werden.',
          'Die Gegenseite ist nicht dumm – dein Edge bleibt klein und kontextabhängig.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-04.lesson-04',
    title: 'Kontext erzeugt das kleine Ungleichgewicht',
    summary:
      'Wie du abschätzt, ob oberhalb oder unterhalb des Signal-Bars wahrscheinlich mehr entschlossene Käufer oder Verkäufer auftreten.',
    durationMinutes: 13,
    xp: 50,
    sourceUnit: 'Kapitel 4 · Kontext und Edge',
    sourceAnchors: [
      'Mehr Käufer oder Verkäufer oberhalb beziehungsweise unterhalb des Bars',
      'Signal-Bar im passenden Kontext als Ungleichgewicht',
      'Bullischer Signal-Bar im Pullback eines Bullenmarktes',
      'Price-Action-Lesefähigkeit als kleiner statistischer Vorteil',
      'Immer vorhandene intelligente Gegenseite',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-04-explain',
        type: 'explanation',
        eyebrow: 'Der eigentliche Edge',
        title: 'Nicht die Form, sondern die erwartete Orderbalance zählt',
        paragraphs: [
          'Die wichtigste Fähigkeit besteht darin abzuschätzen, an welchen Bar-Grenzen eine Seite wahrscheinlich entschlossener ist. Du willst nicht nur sehen, dass ein Hoch überschritten werden kann. Du willst einen Grund haben, warum oberhalb dieses Hochs die Nachfrage eher stärker sein dürfte als das neue Angebot.',
          'Ein bullischer Signal-Bar in einem Pullback eines intakten Bullenmarktes ist ein gutes Beispiel. Trend, Lage und Reaktion am Pullback stützen dieselbe Richtung. Oberhalb des Bars warten wahrscheinlich genügend Käufer, während viele Bären dort nicht aggressiv gegen den Trend verkaufen wollen.',
          'Dieses Ungleichgewicht ist niemals absolut. Ohne Verkäufer könnten Käufer keine Ausführung erhalten. Auch am besten aussehenden Setup sitzen informierte Teilnehmer auf der Gegenseite. Der Vorteil liegt daher nicht in Gewissheit, sondern in einer leicht verschobenen Wahrscheinlichkeit bei kontrolliertem Risiko.',
          'Je besser du Price Action als Sequenz liest, desto häufiger erkennst du solche kleinen Verschiebungen. Einzelne Gewinne beweisen keinen Edge. Erst wiederholbare Entscheidungen, bei denen Kontext, Einstieg, Stop, Ziel und Kosten zusammenpassen, können langfristig profitabel werden.',
        ],
        callout:
          'Ein Signal-Bar ist nützlich, wenn sein Ausbruch im aktuellen Kontext wahrscheinlich auf mehr Initiative als Gegenwehr trifft.',
      },
      {
        id: 'chapter-04-04-diagram',
        type: 'diagram',
        title: 'Der Kontext kippt dieselbe Bar-Grenze',
        scenario: 'contextual-imbalance',
        caption:
          'Im bullischen Pullback spricht die Gesamtstruktur für mehr Nachfrage über dem Signal-Bar. In neutraler Balance ist dieselbe Form weit weniger aussagekräftig.',
        observations: [
          'Trendrichtung schafft eine Ausgangswahrscheinlichkeit.',
          'Pullback-Lage bietet einen logischeren Preis als ein später Einstieg weit oben.',
          'Der Signal-Bar zeigt, dass Käufer am Test wieder reagieren.',
          'In der Range können beide Seiten dieselbe Form schnell neutralisieren.',
        ],
      },
      {
        id: 'chapter-04-04-question',
        type: 'question',
        title: 'Woher kommt der Vorteil?',
        prompt:
          'Zwei identische bullische Bars erscheinen: einer am Ende eines Pullbacks im Bullenmarkt, einer mitten in einer engen Range. Welcher besitzt den besseren Long-Kontext?',
        options: [
          {
            id: 'pullback',
            label: 'Der Bar im Bullenmarkt-Pullback',
            explanation:
              'Richtig. Trend, Lage und Bar-Reaktion bündeln sich dort in derselben Richtung.',
          },
          {
            id: 'range',
            label: 'Der Bar mitten in der Range',
            explanation:
              'In der Mitte einer Range fehlt eine klare Lage und Ausbrüche werden häufiger neutralisiert.',
          },
          {
            id: 'identical',
            label: 'Beide sind wegen ihrer Form exakt gleichwertig',
            explanation:
              'Die Geometrie ist gleich, aber der umgebende Orderkontext verändert die Wahrscheinlichkeit.',
          },
        ],
        correctOptionId: 'pullback',
      },
      {
        id: 'chapter-04-04-recap',
        type: 'recap',
        title: 'Das kleine Ungleichgewicht lesen',
        points: [
          'Frage, wer oberhalb und unterhalb des Bars entschlossener sein dürfte.',
          'Trend, Lage, Tests und Bar-Reaktion müssen möglichst zusammenpassen.',
          'Auch gute Setups besitzen eine kompetente Gegenseite.',
          'Price Action verschiebt Wahrscheinlichkeiten nur leicht – Risikokontrolle bleibt unverzichtbar.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-04.lesson-05',
    title: 'Fortsetzung und Umkehr sind die zwei Grundfamilien',
    summary:
      'Wie starke Spike-Signale, Trendwenden und endende Pullbacks in eine einfache, funktionale Ordnung passen.',
    durationMinutes: 13,
    xp: 50,
    sourceUnit: 'Kapitel 4 · Häufige Signal- und Setup-Familien',
    sourceAnchors: [
      'Fortsetzungssignal in der Spike-Phase eines starken Trends',
      'Kauf am Hoch eines bullischen Spikes und Verkauf am Tief eines bärischen Spikes',
      'Starker Trendbar in Richtung des Spikes',
      'Reversal als Trendwende oder Ende eines Pullbacks',
      'Ein-, Zwei- und Drei-Bar-Umkehr',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-05-explain',
        type: 'explanation',
        eyebrow: 'Musterfamilien',
        title: 'Viele Namen lassen sich auf zwei Funktionen reduzieren',
        paragraphs: [
          'Ein Fortsetzungssignal versucht, eine bereits dominante Bewegung weiterzuhandeln. In der Spike-Phase eines starken Bullenmarktes kann das bedeuten, oberhalb eines kräftigen Bull-Bars zu kaufen. Im bärischen Spiegelbild kann ein neuer Short unter einem starken Bear-Bar entstehen. Der Einstieg wirkt spät, folgt aber hoher Dringlichkeit und braucht schnellen Anschluss.',
          'Ein Reversal-Signal versucht, eine laufende Bewegung zu beenden. Das kann eine vollständige Trendwende sein, muss es aber nicht. Häufiger endet lediglich ein Pullback und der Markt dreht zurück in Richtung des übergeordneten Trends. Funktional ist auch das eine Umkehr: Die kurzfristige Gegenbewegung verliert Kontrolle.',
          'Die Umkehr kann in einem einzelnen Reversal-Bar sichtbar werden oder sich über zwei beziehungsweise drei Bars entwickeln. Mehr Bars sind nicht automatisch besser. Entscheidend ist, ob die Sequenz tatsächlich Zurückweisung, Kontrollübergabe und sinnvolle Lage zeigt.',
          'Statt jede Form isoliert zu merken, ordnest du sie deshalb zuerst nach ihrer Aufgabe: Soll sie aktuelle Kontrolle fortsetzen oder eine laufende Bewegung zurückweisen? Danach prüfst du, ob der größere Kontext diese Aufgabe unterstützt.',
        ],
        callout:
          'Fortsetzung handelt vorhandene Initiative. Reversal handelt das Ende einer Bewegung – oft nur das Ende eines Pullbacks.',
      },
      {
        id: 'chapter-04-05-diagram',
        type: 'diagram',
        title: 'Zwei Familien, drei sichtbare Funktionen',
        scenario: 'signal-family-map',
        caption:
          'Fortsetzung im Spike, vollständige Trendwende und Pullback-Ende sehen verschieden aus, beruhen aber auf Kontrolle oder Kontrollwechsel.',
        observations: [
          'Spike-Fortsetzung braucht starke Richtung und unmittelbaren Follow-through.',
          'Trendwende muss die bisherige Marktstruktur brechen.',
          'Pullback-Reversal stellt die übergeordnete Trendrichtung wieder her.',
          'Ein-, Zwei- und Drei-Bar-Strukturen sind nur verschiedene Auflösungen des Übergangs.',
        ],
      },
      {
        id: 'chapter-04-05-compare',
        type: 'comparison',
        title: 'Was soll das Setup leisten?',
        columns: [
          {
            title: 'Fortsetzung',
            tone: 'positive',
            points: [
              'bestehende Trendseite bleibt dominant',
              'Einstieg kann am neuen Extrem liegen',
              'fehlender Sofortanschluss ist ein Warnsignal',
            ],
          },
          {
            title: 'Umkehr',
            tone: 'warning',
            points: [
              'aktuelle Bewegung wird zurückgewiesen',
              'Lage an Unterstützung oder Widerstand zählt stark',
              'Struktur muss mehr zeigen als nur eine andere Kerzenfarbe',
            ],
          },
        ],
      },
      {
        id: 'chapter-04-05-question',
        type: 'question',
        title: 'Welche Umkehr bleibt mit dem Trend?',
        prompt:
          'Ein Pullback fällt in einem Bullenmarkt. Ein Bull-Bar beendet den Pullback und startet die Rally erneut. Wie ordnest du das ein?',
        options: [
          {
            id: 'pullback-reversal',
            label: 'Reversal des Pullbacks und With-trend-Einstieg',
            explanation:
              'Richtig. Die kurzfristige Abwärtsbewegung dreht, während der Trade dem größeren Bullenmarkt folgt.',
          },
          {
            id: 'bear-continuation',
            label: 'Fortsetzung des bearischen Pullbacks',
            explanation:
              'Der Bull-Bar beendet statt bestätigt die kurzfristige Abwärtsbewegung.',
          },
          {
            id: 'major-bear-reversal',
            label: 'Große Umkehr in einen Bärentrend',
            explanation:
              'Der beschriebene Trade stellt die Aufwärtsrichtung wieder her.',
          },
        ],
        correctOptionId: 'pullback-reversal',
      },
      {
        id: 'chapter-04-05-recap',
        type: 'recap',
        title: 'Funktion vor Namen',
        points: [
          'Fortsetzungssignale handeln die vorhandene Initiative.',
          'Reversals können einen ganzen Trend oder nur einen Pullback beenden.',
          'Ein-, Zwei- und Drei-Bar-Umkehr sind Varianten derselben Kontrollübergabe.',
          'Kontext und Follow-through entscheiden mehr als die Anzahl der Bars.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-04.lesson-06',
    title: 'Inside- und Outside-Sequenzen richtig lesen',
    summary:
      'Wie i, ii, iii, ioi und oo Kompression oder Expansion darstellen, ohne selbst eine sichere Richtung vorherzusagen.',
    durationMinutes: 15,
    xp: 55,
    sourceUnit: 'Kapitel 4 · Kleine Bars, Inside- und Outside-Muster',
    sourceAnchors: [
      'Inside-Bar als kleiner Reversal- oder Pause-Bar',
      'ii- und iii-Sequenzen verschachtelter Inside-Bars',
      'Kleiner Bar am Rand eines großen Bars oder einer Trading Range',
      'ioi-Folge aus Inside-, Outside- und Inside-Bar',
      'Outside-Bar und oo-Folge mit größerem zweiten Outside-Bar',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-06-explain',
        type: 'explanation',
        eyebrow: 'Kompression und Expansion',
        title: 'Die Buchstaben beschreiben Beziehungen, keine Prophezeiung',
        paragraphs: [
          'Ein Inside-Bar besitzt ein Hoch unter oder gleich dem Hoch des Vorgängers und ein Tief über oder gleich dessen Tief. Er bleibt vollständig in der vorherigen Range. Das zeigt kurzfristige Kompression: Der Markt schafft weder oben noch unten neue Distanz.',
          'Bei einem ii liegen zwei Inside-Bars hintereinander innerhalb ihrer jeweiligen Vorgänger. Ein iii fügt einen dritten hinzu. Die Handelsspanne wird immer enger, während Orders oberhalb und unterhalb der verschachtelten Struktur warten. Das erhöht die Chance eines späteren Breakouts, legt dessen Richtung aber nicht fest.',
          'Ein ioi verbindet Inside-Bar, Outside-Bar und erneut Inside-Bar. Der mittlere Bar erweitert beide Seiten, der letzte komprimiert wieder. Diese schnelle Abfolge von Expansion und Einengung zeigt hohe Unsicherheit und benötigt besonders viel Kontext.',
          'Ein Outside-Bar überschreitet Hoch und Tief seines Vorgängers. Bei einem oo folgt darauf ein weiterer, noch größerer Outside-Bar. Hier wächst die Range statt zu schrumpfen. Das kann heftigen zweiseitigen Kampf, Stops auf beiden Seiten und erhöhtes Risiko bedeuten.',
          'Auch ein kleiner Bar nahe dem Hoch oder Tief eines sehr großen Bars oder einer breiten Range kann zum Setup werden. Seine Aussage entsteht aus der Lage am Rand; derselbe Bar in der Mitte hätte deutlich weniger Wert.',
        ],
        callout:
          'Inside bedeutet Kompression, Outside bedeutet Expansion. Die Richtung liefert erst der Kontext plus erfolgreicher Ausbruch.',
      },
      {
        id: 'chapter-04-06-diagram',
        type: 'diagram',
        title: 'i, ii, iii, ioi und oo auf einen Blick',
        scenario: 'inside-outside-sequences',
        caption:
          'Die Muster werden als Range-Beziehungen sichtbar: verschachtelt, abwechselnd erweitert oder zunehmend größer.',
        observations: [
          'i: ein Bar bleibt innerhalb des Vorgängers.',
          'ii und iii: wiederholte Kompression baut Ausbruchsenergie auf.',
          'ioi: Kompression, Expansion und erneute Kompression wechseln rasch.',
          'oo: zwei Expansionen können beide Marktseiten in kurzer Folge fangen.',
          'Keines der Muster besitzt ohne Lage und Folgebars eine feste Richtung.',
        ],
      },
      {
        id: 'chapter-04-06-question',
        type: 'question',
        title: 'Was weißt du bei einem ii sicher?',
        prompt:
          'Zwei aufeinanderfolgende Bars liegen vollständig innerhalb ihrer Vorgänger. Welche Aussage ist belastbar?',
        options: [
          {
            id: 'bull-certain',
            label: 'Der Ausbruch wird sicher bullisch',
            explanation:
              'Die Kompression zeigt keine garantierte Ausbruchsrichtung.',
          },
          {
            id: 'compression',
            label: 'Die sichtbare Range hat sich zweimal verengt',
            explanation:
              'Richtig. Richtung und Erfolg des nächsten Breakouts bleiben offen.',
          },
          {
            id: 'no-orders',
            label: 'Es gibt an den Grenzen keine wartenden Orders',
            explanation:
              'Gerade die engeren Grenzen können Stop-Orders beider Seiten bündeln.',
          },
        ],
        correctOptionId: 'compression',
      },
      {
        id: 'chapter-04-06-recap',
        type: 'recap',
        title: 'Beziehungen lesen',
        points: [
          'Inside-Bar komprimiert die vorherige Range.',
          'ii und iii verschachteln diese Kompression mehrfach.',
          'ioi wechselt Expansion und Einengung.',
          'Outside und oo erweitern die Range und erhöhen zweiseitiges Risiko.',
          'Lage am Rand sowie Breakout und Follow-through geben die Richtung.',
        ],
      },
    ],
  },
  {
    id: 'brooks-trends.chapter-04.lesson-07',
    title: 'Auch Fehlschläge und unschöne Bars werden Setups',
    summary:
      'Wie gescheiterte Umkehr- und Fortsetzungsversuche, shaved Bars, Trendbars und Kanalstrukturen neue Trades vorbereiten.',
    durationMinutes: 16,
    xp: 55,
    sourceUnit: 'Kapitel 4 · Weitere häufige Setup-Arten',
    sourceAnchors: [
      'Doppeltop und Doppeltief als Umkehrgrundlage',
      'Gescheiterter Reversal-Versuch einschließlich Reversal-Bar-Fehlschlag',
      'Gescheiterter Fortsetzungsversuch in reifendem Trend',
      'Shaved Bar ohne Tail an Hoch oder Tief',
      'Trendbar als Gegensignal im passenden Kontext',
      'Pause oder Pullback in der Spike-Phase',
      'Limit-Logik an jedem Bar eines Kanals',
      'Higher Low im Bullenmarkt und Lower High im Bärenmarkt',
    ],
    status: 'published',
    steps: [
      {
        id: 'chapter-04-07-explain',
        type: 'explanation',
        eyebrow: 'Kontext schlägt Schönheit',
        title: 'Ein gescheitertes Signal kann das bessere Gegensignal sein',
        paragraphs: [
          'Doppeltops und Doppeltiefs testen, ob ein bekannter Rand erneut zurückgewiesen wird. Ähnlich wichtig ist der Fehlschlag eines Reversal-Bars: Wenn ein vermeintlich starkes Umkehrsignal ausgelöst wird, aber sofort scheitert, sitzen neue Trader auf der falschen Seite. Ihre Ausstiege können den Move in Gegenrichtung verstärken.',
          'Auch Fortsetzungsversuche können kippen. Wenn ein Bärentrend reif und bodenverdächtig wirkt, kann ein gescheiterter Low-1-Verkauf ein Long-Setup vorbereiten. Spiegelbildlich kann ein gescheiterter High-1-Kauf in einem überdehnten Bullenmarkt Verkäufer anziehen. Der Fehlschlag ist wichtiger als das ursprüngliche Etikett.',
          'Ein shaved Bar besitzt an einem Ende keinen sichtbaren Tail und zeigt dort bis zum Schluss klare Kontrolle. Doch selbst ein Bull-Trendbar kann im Rallyabschnitt eines starken Bärenmarktes oder am oberen Range-Rand ein Short-Setup sein. Ein Bear-Trendbar kann entsprechend im Pullback eines starken Bullenmarktes oder am unteren Range-Rand ein Kaufsetup bilden.',
          'In der Spike-Phase kann fast jede kleine Pause oder jeder Pullback eine Fortsetzungschance sein. In einem Kanal handeln erfahrene Teilnehmer oft limitbasiert: im Aufwärtskanal am oder unter dem vorherigen Bar kaufen, im Abwärtskanal am oder über dem vorherigen Bar verkaufen. Diese Logik lebt von kleinen Rückläufen innerhalb der dominanten Richtung.',
          'Strukturell einfache Referenzen bleiben ebenfalls wertvoll: Ein höheres Tief im Bullenmarkt und ein tieferes Hoch im Bärenmarkt zeigen, dass der Trend nach einem Pullback wieder Kontrolle übernehmen könnte.',
        ],
        callout:
          'Fehlschlag, Lage und Trendstruktur können aus einer „falschen“ Kerzenfarbe ein starkes Setup machen.',
      },
      {
        id: 'chapter-04-07-diagram',
        type: 'diagram',
        title: 'Vier Wege, wie Kontext den Bar neu bewertet',
        scenario: 'contextual-failure-setups',
        caption:
          'Fehlgeschlagenes Reversal, falsche Fortsetzung, gegengerichteter Trendbar am Range-Rand und Higher-Low-Fortsetzung zeigen vier verschiedene Setup-Mechanismen.',
        observations: [
          'Der Reversal-Fehlschlag fängt die zuerst eingestiegene Seite.',
          'Die misslungene Trendfortsetzung kann einen reifen Move beenden.',
          'Ein Trendbar am falschen Ort kann gerade wegen seiner späten Aggressivität scheitern.',
          'Higher Low oder Lower High verbindet Pullback-Ende und Trendwiederaufnahme.',
        ],
      },
      {
        id: 'chapter-04-07-compare',
        type: 'comparison',
        title: 'Form allein und Form im Kontext',
        columns: [
          {
            title: 'Isolierte Betrachtung',
            tone: 'warning',
            points: [
              'Bull-Bar bedeutet immer kaufen',
              'Bear-Bar bedeutet immer verkaufen',
              'Auslösung wird mit Erfolg verwechselt',
            ],
          },
          {
            title: 'Kontextuelle Betrachtung',
            tone: 'positive',
            points: [
              'Trend, Range-Rand und Reife werden einbezogen',
              'Fehlschlag kann die Gegenseite aktivieren',
              'Follow-through entscheidet über die tatsächliche Kontrolle',
            ],
          },
        ],
      },
      {
        id: 'chapter-04-07-question',
        type: 'question',
        title: 'Wann kann ein Bear-Bar ein Long-Setup sein?',
        prompt:
          'Ein Bear-Trendbar entsteht nach einem kleinen Pullback am unteren Rand eines starken Bullenkanals. Welche Aussage ist sinnvoll?',
        options: [
          {
            id: 'never-long',
            label: 'Ein Bear-Bar darf niemals gekauft werden',
            explanation:
              'In einem starken Trend können Käufer bereits in schwache Pullback-Bars hinein aktiv werden.',
          },
          {
            id: 'context-long',
            label: 'Der Trendkontext kann daraus ein Long-Setup machen',
            explanation:
              'Richtig. Lage und übergeordnete Kontrolle können die Barfarbe überwiegen.',
          },
          {
            id: 'certain-long',
            label: 'Der Long ist dadurch garantiert erfolgreich',
            explanation:
              'Auch ein gutes With-trend-Setup bleibt probabilistisch und benötigt Risikokontrolle.',
          },
        ],
        correctOptionId: 'context-long',
      },
      {
        id: 'chapter-04-07-recap',
        type: 'recap',
        title: 'Die erweiterten Setup-Familien',
        points: [
          'Doppeltops und Doppeltiefs prüfen bekannte Ränder.',
          'Gescheiterte Signale können kraftvolle Gegensignale erzeugen.',
          'Shaved Bars zeigen klare Schlusskontrolle, bleiben aber kontextabhängig.',
          'Trendbars dürfen am falschen Ort gegen ihre eigene Farbe gehandelt werden.',
          'Pause, Pullback, Higher Low und Lower High strukturieren With-trend-Einstiege.',
        ],
      },
    ],
  },
] satisfies Lesson[];
