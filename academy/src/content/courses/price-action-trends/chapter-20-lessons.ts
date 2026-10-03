import type { ChapterTwentyScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterTwentyScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Ein Bein ist eine gerichtete Teilbewegung",
    "summary": "Zuerst den Maßstab festlegen, dann zählen.",
    "section": "Zwei Schübe verstehen",
    "scenario": "c20-01",
    "paragraphs": [
      "Ein Bein, auch Leg genannt, ist ein gerichteter Abschnitt des Preisverlaufs. Es kann wenige Bars oder einen längeren Swing umfassen. Die Bezeichnung sagt zunächst nur, dass du eine Bewegung von ihrer anschließenden Gegenbewegung abgrenzt.",
      "Leg deine Regel vor dem Zählen fest. Du kannst zum Beispiel sichtbare Swingwechsel oder den Bruch einer zuvor eingezeichneten Trendlinie verwenden. Ein einzelner Gegenbar muss nach einer Swingregel noch kein neues größeres Bein sein.",
      "Links steigt unser Beispiel zunächst von 24 auf 50, fällt auf 39 und steigt erneut. Auf der größeren Ebene sind zwei Aufwärtsbeine sichtbar. Rechts zeigt ein anderes eigenes Beispiel mehrere kleinere Teilbewegungen: Mehr kleine Wechsel bedeuten keine nachträgliche Änderung einer vorher festgelegten größeren Zählung."
    ],
    "callout": "Die Zählung braucht eine benannte Ebene.",
    "takeaways": [
      "Zuerst den Maßstab festlegen, dann zählen.",
      "Lege deine Regel vor dem Zählen fest.",
      "Die Zählung braucht eine benannte Ebene."
    ],
    "prompt": "Was ist vor einer nachvollziehbaren Beinzählung nötig?",
    "answers": [
      {
        "label": "Eine feste Regel und eine benannte Betrachtungsebene.",
        "explanation": "Richtig. Die Zählung braucht eine benannte Ebene."
      },
      {
        "label": "Jeden Farbwechsel als großen Trendwechsel behandeln.",
        "explanation": "Ein Barfarbwechsel kann innerhalb desselben größeren Swings liegen. Die gewählte Regel bestimmt seinen Rang."
      },
      {
        "label": "Erst das Endergebnis ansehen und dann passende Beine suchen.",
        "explanation": "Eine erst nach dem Ergebnis gewählte Zählung ist im früheren Zeitpunkt nicht prüfbar."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Zwei Versuche als Arbeitshypothese",
    "summary": "Eine zweite Bewegung ist möglich, kein Muss.",
    "section": "Zwei Schübe verstehen",
    "scenario": "c20-02",
    "paragraphs": [
      "Nach einem gerichteten ersten Schub kann der Markt pausieren und die Richtung noch einmal prüfen. Zwei getrennte Versuche sind deshalb eine hilfreiche Lesart für viele Verläufe. Sie beschreiben eine mögliche Entwicklung, keinen Fahrplan.",
      "Der zweite Versuch braucht eine erkennbare Unterbrechung. Ein ungebremster langer Anstieg wird nicht allein durch eine Linie in der Mitte zu zwei unabhängigen Schüben. Notier, welche Gegenbewegung die Trennung begründet.",
      "Im Vergleich rechts wird der erste Aufwärtsschub kräftig zurückgenommen, ohne dass ein zweiter Käuferanschluss entsteht. Das ist eine zulässige Folge. Eine offene Erwartung darfst du nicht durch beliebiges Neuzählen als erfüllt darstellen."
    ],
    "callout": "Zwei Beine sind ein Modell, keine Garantie.",
    "takeaways": [
      "Eine zweite Bewegung ist möglich, kein Muss.",
      "Der zweite Versuch braucht eine erkennbare Unterbrechung.",
      "Zwei Beine sind ein Modell, keine Garantie."
    ],
    "prompt": "Wie behandelst du eine erwartete zweite Bewegung?",
    "answers": [
      {
        "label": "Als Grund, jeden Gegenverlauf umzubenennen.",
        "explanation": "Neuzählen darf eine widerlegte Erwartung nicht nachträglich retten."
      },
      {
        "label": "Als offene Hypothese, die neue Bars bestätigen oder verwerfen können.",
        "explanation": "Richtig. Zwei Beine sind ein Modell, keine Garantie."
      },
      {
        "label": "Als sicheren Auftrag für den Markt.",
        "explanation": "Der Verlauf kann ohne zweiten Versuch in die Gegenrichtung gehen."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Trendbewegung und Gegenbewegung",
    "summary": "Beide Richtungen können sich in zwei Beine gliedern.",
    "section": "Zwei Schübe verstehen",
    "scenario": "c20-03",
    "paragraphs": [
      "Ein Bullenabschnitt kann in zwei Aufwärtsbeinen laufen, getrennt durch einen kleinen Rücklauf. Innerhalb desselben größeren Trends kann der Rücklauf selbst zwei Abwärtsbeine enthalten. Die Richtung beschreibst du deshalb immer relativ zum gewählten Kontext.",
      "Unterscheide das größere Trendbein von den kleineren Rücklaufbeinen. Der Rücklauf kann lokal abwärtsgerichtet sein, obwohl das größere höhere Tief noch hält. Zwei Verkäuferbeine allein erklären den größeren Bullentrend nicht für beendet.",
      "Unsere beiden Panels zeigen einmal die Trendfortsetzung und einmal den Gegenabschnitt. Benenne jeweils Anfang, Unterbrechung und Ende. Erst danach prüfst du, ob die jüngsten Preise die bisherige größere Struktur verändern."
    ],
    "callout": "Richtung und Größe gemeinsam benennen.",
    "takeaways": [
      "Beide Richtungen können sich in zwei Beine gliedern.",
      "Unterscheide das größere Trendbein von den kleineren Rücklaufbeinen.",
      "Richtung und Größe gemeinsam benennen."
    ],
    "prompt": "Was ist in einem größeren Bullentrend möglich?",
    "answers": [
      {
        "label": "Nur Aufwärtsbeine auf jeder Größe.",
        "explanation": "Kleinere Gegenbewegungen können innerhalb eines größeren Trends laufen."
      },
      {
        "label": "Ein sicherer Bärenwechsel nach zwei roten Bars.",
        "explanation": "Barfarbe und Anzahl belegen keinen Bruch der größeren Swingstruktur."
      },
      {
        "label": "Ein zweibeiniger Rücklauf nach unten.",
        "explanation": "Richtig. Richtung und Größe gemeinsam benennen."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "ABC-Rücklauf: A, B und C",
    "summary": "Zwei Gegenbeine werden durch eine Trenderholung getrennt.",
    "section": "Zwei Schübe verstehen",
    "scenario": "c20-04",
    "paragraphs": [
      "Im Bullentrend beschreibt A den ersten Rückgang. B ist die Erholung in Richtung des größeren Trends. C ist der erneute Rückgang. Die drei Abschnitte enthalten zwei Gegenbeine: A und C. B trennt sie.",
      "Die Zwischenbewegung B bleibt in einem typischen Rücklauf unter dem vorherigen Trendhoch. Sie muss nicht lang dauern. Entscheidend ist ein nach deiner Regel sichtbarer Richtungswechsel, der den ersten und zweiten Gegenversuch voneinander trennt.",
      "Im Beispiel liegt das Ausgangshoch bei 78. A fällt auf 60, B erholt sich auf 69, C fällt auf 54. Damit ist der Rücklauf tiefer geworden. Aus dieser fertigen Form folgt noch kein ausgeführter Longtrade; eine Käuferreaktion prüfst du gesondert."
    ],
    "callout": "ABC enthält zwei Gegenbeine und eine Zwischenbewegung.",
    "takeaways": [
      "Zwei Gegenbeine werden durch eine Trenderholung getrennt.",
      "Die Zwischenbewegung B bleibt in einem typischen Rücklauf unter dem vorherigen Trendhoch.",
      "ABC enthält zwei Gegenbeine und eine Zwischenbewegung."
    ],
    "prompt": "Welche Abschnitte sind im ABC-Rücklauf die beiden Gegenbeine?",
    "answers": [
      {
        "label": "A und C.",
        "explanation": "Richtig. ABC enthält zwei Gegenbeine und eine Zwischenbewegung."
      },
      {
        "label": "A und B.",
        "explanation": "B läuft zurück in Trendrichtung und trennt die Gegenbeine."
      },
      {
        "label": "Alle drei sind gleichgerichtete Gegenbeine.",
        "explanation": "B ist die Zwischenbewegung; A und C laufen gegen den größeren Trend."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "C muss A nicht übertreffen",
    "summary": "Ein zweiter Versuch kann kürzer bleiben.",
    "section": "Zwei Schübe verstehen",
    "scenario": "c20-05",
    "paragraphs": [
      "Ein zweites Abwärtsbein muss das Tief des ersten nicht unterschreiten. Im Bullenrücklauf kann C oberhalb von A enden. Die Zählung hängt am getrennten Richtungsversuch, nicht an einem zwingend neuen Extrem.",
      "Vergleiche die Endpunkte, ohne sie mit der Zahl der Versuche zu verwechseln. Ein tieferes C, ein ungefähr gleiches Tief und ein höheres C liefern unterschiedliche Preisstruktur. Alle können zwei getrennte Gegenbeine enthalten.",
      "Links erreicht C ein neues Rücklauftief. Rechts hält C oberhalb des ersten Tiefs. Die stärkere Käuferreaktion im rechten Beispiel ist zusätzliche Information. Das bloße Etikett C garantiert sie weder vorher noch in einem anderen Verlauf."
    ],
    "callout": "Ein zweites Bein bedeutet nicht zwingend ein neues Tief.",
    "takeaways": [
      "Ein zweiter Versuch kann kürzer bleiben.",
      "Vergleiche die Endpunkte, ohne sie mit der Zahl der Versuche zu verwechseln.",
      "Zweites Bein bedeutet nicht zwingend neues Tief."
    ],
    "prompt": "Wann kann ein höheres C trotzdem ein zweites Gegenbein sein?",
    "answers": [
      {
        "label": "Wenn die Rücklaufzählung keine Unterbrechung braucht.",
        "explanation": "Ohne trennende Gegenbewegung fehlt die Begründung für zwei Versuche."
      },
      {
        "label": "Wenn eine klare Zwischenbewegung A und C trennt.",
        "explanation": "Richtig. Zweites Bein bedeutet nicht zwingend neues Tief."
      },
      {
        "label": "Nur wenn es nachträglich unter A umbenannt wird.",
        "explanation": "Ein höheres C bleibt als zweiter Versuch erkennbar, ohne die Preise zu verändern."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "ABC im Bärentrend spiegeln",
    "summary": "Der Gegenabschnitt steigt, die Trendrichtung fällt.",
    "section": "Zwei Schübe verstehen",
    "scenario": "c20-06",
    "paragraphs": [
      "Im Bärentrend verläuft der ABC-Rücklauf spiegelbildlich: A steigt, B fällt wieder etwas, C steigt erneut. Die beiden Käuferbeine stehen hier gegen den größeren Abwärtstrend.",
      "B bleibt im typischen Rücklauf oberhalb des vorherigen Trendtiefs. Das zweite Käuferbein kann das erste Hoch erreichen, übertreffen oder darunter bleiben. Welche Variante entsteht, liest du aus den tatsächlichen Preisen.",
      "Beide Panels nutzen gespiegelte erfundene Preise. Dadurch bleibt die Struktur vergleichbar, während die Richtung wechselt. Prüf anschließend Verkäuferanschluss und größere Swingpunkte; eine fertige Gegenform ist noch kein bestätigter Short-Einstieg."
    ],
    "callout": "Die Struktur bleibt, die Richtung wird gespiegelt.",
    "takeaways": [
      "Der Gegenabschnitt steigt, die Trendrichtung fällt.",
      "B bleibt im typischen Rücklauf oberhalb des vorherigen Trendtiefs.",
      "Die Struktur bleibt, die Richtung wird gespiegelt."
    ],
    "prompt": "Welche Beine laufen beim ABC-Rücklauf im Bärentrend gegen den Trend?",
    "answers": [
      {
        "label": "Die abwärtsgerichtete Zwischenbewegung B.",
        "explanation": "B läuft hier abwärts und damit in Richtung des größeren Bärentrends."
      },
      {
        "label": "Jede grüne Kerze ist schon ein neuer Bullentrend.",
        "explanation": "Ein grüner Bar allein beendet die größere Folge tieferer Hochs nicht."
      },
      {
        "label": "Die beiden aufwärtsgerichteten Beine A und C.",
        "explanation": "Richtig. Die Struktur bleibt, die Richtung wird gespiegelt."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Trendlinie brechen und ein neues Bein beginnen",
    "summary": "Der Linienbruch betrifft zunächst die verwendete Linie.",
    "section": "Zwei Schübe verstehen",
    "scenario": "c20-07",
    "paragraphs": [
      "Eine Trendlinie verbindet vorher bekannte Bezugspunkte einer gerichteten Bewegung. Ein Bruch kann den Beginn eines Gegenbeins markieren. Wie groß dieses Bein ist, hängt davon ab, welche Linie du gewählt hast.",
      "Eine kleine innere Linie und eine größere äußere Trendstruktur sind unterschiedliche Bezüge. Der Bruch der inneren Linie beendet nicht automatisch den ganzen Trend. Auch eine seitliche Pause kann eine steigende Linie verlassen, ohne kräftigen Verkäuferdruck zu entwickeln.",
      "Links bleibt der Verlauf zunächst oberhalb einer vorab festgelegten Linie. Rechts handeln neue Bars darunter. Die alten Anker werden nicht verschoben, um den Bruch zu verstecken. Anschließend entscheidet der sichtbare Gegenanschluss über das Gewicht der Veränderung."
    ],
    "callout": "Linienbruch und große Trendumkehr getrennt prüfen.",
    "takeaways": [
      "Der Linienbruch betrifft zunächst die verwendete Linie.",
      "Eine kleine innere Linie und eine größere äußere Trendstruktur sind unterschiedliche Bezüge.",
      "Linienbruch und große Trendumkehr getrennt prüfen."
    ],
    "prompt": "Was zeigt der Bruch einer kleinen inneren Trendlinie zunächst?",
    "answers": [
      {
        "label": "Eine Veränderung an diesem Bezug und einen möglichen neuen Gegenabschnitt.",
        "explanation": "Richtig. Linienbruch und große Trendumkehr getrennt prüfen."
      },
      {
        "label": "Eine bereits sichere Umkehr jedes größeren Trends.",
        "explanation": "Der Bruch betrifft zuerst die konkret eingezeichnete kleinere Linie."
      },
      {
        "label": "Die genaue Länge des nächsten Beins.",
        "explanation": "Die spätere Strecke ist beim Linienbruch noch unbekannt."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Kräftiger erster Schub und späterer Test",
    "summary": "Momentum macht einen Test plausibel, nicht unvermeidlich.",
    "section": "Zwei Schübe verstehen",
    "scenario": "c20-08",
    "paragraphs": [
      "Ein erster kräftiger Schub gewinnt schnell Raum und wird zunächst wenig zurückgenommen. Nach einer Pause ist ein erneuter Versuch in derselben Richtung plausibel. Beobachte, ob er die erste Spitze wieder erreicht und ob dort Anschluss entsteht.",
      "Unterscheide die Stärke des ersten Schubs von der Qualität des zweiten. Der zweite kann langsamer, stärker überlappend oder kürzer sein. Diese Veränderung ist ein Befund, obwohl die beiden Abschnitte dieselbe Richtung tragen.",
      "Im Beispiel folgt auf den ersten Käuferimpuls ein Rücklauf und ein erneuter Anstieg. Links stoppt das Replay vor dem Test, rechts zeigt es die neuen Bars. Die spätere Spitze durfte zum linken Zeitpunkt noch nicht als bekannt gelten."
    ],
    "callout": "Die zweite Folge erst bei ihrem Auftreten beurteilen.",
    "takeaways": [
      "Momentum macht einen Test plausibel, nicht unvermeidlich.",
      "Unterscheide die Stärke des ersten Schubs von der Qualität des zweiten.",
      "Die zweite Folge erst bei ihrem Auftreten beurteilen."
    ],
    "prompt": "Welche Information darf vor dem zweiten Schub schon verwendet werden?",
    "answers": [
      {
        "label": "Der spätere Gewinn einer noch ungeplanten Order.",
        "explanation": "Ein späterer Gewinn ist am frühen Entscheidungspunkt nicht bekannt."
      },
      {
        "label": "Die sichtbare Stärke des ersten Schubs und der bisherige Rücklauf.",
        "explanation": "Richtig. Die zweite Folge erst bei ihrem Auftreten beurteilen."
      },
      {
        "label": "Das spätere endgültige Testhoch.",
        "explanation": "Das endgültige Testhoch ist erst später sichtbar."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Zwei Versuche scheitern: Gegenrichtung beobachten",
    "summary": "Scheitern braucht einen Bezug und eine Reaktion.",
    "section": "Zwei Schübe verstehen",
    "scenario": "c20-09",
    "paragraphs": [
      "Zwei Käuferversuche können an einem bekannten Widerstandsbereich begrenzt bleiben. Widerstand ist hier ein früherer Preisbereich, an dem Anschluss ausgeblieben ist. Eine erneute Zurückweisung macht die Gegenrichtung als nächste Möglichkeit interessant.",
      "Ein Test allein ist noch kein Scheitern. Prüf, ob der Ausbruch zurückgenommen wird und die Verkäufer neue Strecke gewinnen. Bleibt der Markt nur am Hoch seitwärts, kann weiterhin ein späterer Käuferdurchbruch folgen.",
      "Links werden beide Hochversuche zurückgenommen. Rechts gewinnt der zweite Versuch Anschluss oberhalb der Referenz. Dasselbe Zählmuster endet unterschiedlich. Trenne daher Versuchszahl, Testergebnis und einen tatsächlich ausgelösten eigenen Plan."
    ],
    "callout": "Zweimal getestet ist nicht zweimal gescheitert.",
    "takeaways": [
      "Scheitern benötigt einen Bezug und eine Reaktion.",
      "Ein Test allein ist noch kein Scheitern.",
      "Zweimal getestet ist nicht zweimal gescheitert."
    ],
    "prompt": "Was stützt die Lesart zweier gescheiterter Käuferversuche?",
    "answers": [
      {
        "label": "Allein die Zahl zwei.",
        "explanation": "Zwei Versuche können auch erfolgreichen Anschluss gewinnen."
      },
      {
        "label": "Jede kleine Pause über dem alten Hoch.",
        "explanation": "Eine Pause über dem Hoch kann zu einem gehaltenen Durchbruch gehören."
      },
      {
        "label": "Zurückweisung am Bezug mit anschließendem Verkäuferanschluss.",
        "explanation": "Richtig. Zweimal getestet ist nicht zweimal gescheitert."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Erfolgreicher zweiter Versuch",
    "summary": "Ein Test kann die bisherige Richtung verlängern.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-10",
    "paragraphs": [
      "Erreicht das zweite Bein die erste Spitze und handelt anschließend weiter darüber, unterstützt das zunächst die Fortsetzung. Den Erfolg misst du am Anschluss, nicht daran, dass ein einzelnes Hoch um einen kleinen Betrag höher liegt.",
      "Eine bloße Überschreitung und ein gehaltener Ausbruch sind unterschiedliche Folgen. Kehrt der Preis schnell durch die Referenz zurück, ist die erste Fortsetzungslesart schwächer. Notier vorab, welche Folge du dafür beobachten willst.",
      "Unsere Panels beginnen mit demselben ersten Schub und Rücklauf. Im rechten Verlauf folgen weitere höhere Preise. Das ist neue Bestätigung, aber keine Zusage unbegrenzter Strecke. Zielraum, Schutzabstand und zulässige Menge bleiben eigene Entscheidungen."
    ],
    "callout": "Der Anschluss zählt mehr als das Musteretikett.",
    "takeaways": [
      "Ein Test kann die bisherige Richtung verlängern.",
      "Eine bloße Überschreitung und ein gehaltener Ausbruch sind unterschiedliche Folgen.",
      "Anschluss zählt mehr als das Musteretikett."
    ],
    "prompt": "Was unterstützt den gelungenen zweiten Käuferdurchbruch?",
    "answers": [
      {
        "label": "Neue Käuferfolge oberhalb der bekannten ersten Spitze.",
        "explanation": "Richtig. Anschluss zählt mehr als das Musteretikett."
      },
      {
        "label": "Nur die Beschriftung zweites Bein.",
        "explanation": "Eine Beschriftung sagt nichts über den tatsächlichen Anschluss aus."
      },
      {
        "label": "Eine sofortige vollständige Rückkehr unter den Bezug.",
        "explanation": "Die sofortige Rücknahme schwächt den gelungenen Durchbruch."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Zwei Käuferbeine im Bärenkontext",
    "summary": "Ein lokaler Anstieg kann ein größerer Rücklauf bleiben.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-11",
    "paragraphs": [
      "In einem größeren Bärenverlauf kann ein lokaler Anstieg kräftig wirken und dennoch nur einen Rücklauf bilden. Das zweite Käuferbein prüft die erste lokale Spitze. Vergleiche zusätzlich das größere vorherige tiefere Hoch.",
      "Der lokale Test und die größere Trendstruktur sind getrennte Bezüge. Zwei steigende Beine unter einem alten größeren Hoch beweisen keinen vollständigen Bullentrend. Umgekehrt darfst du echten anhaltenden Käuferanschluss nicht allein wegen des alten Bärennamens ignorieren.",
      "Im Beispiel ist das größere Hoch bei 88 als bereits bekannt markiert. Der lokale Anstieg endet darunter, dann setzt Verkäuferfolge ein. Die Shortlesart gewinnt damit neue Unterstützung; die Orderauslösung war nicht schon beim Beginn des Rücklaufs sicher."
    ],
    "callout": "Lokale Stärke im größeren Kontext lesen.",
    "takeaways": [
      "Ein lokaler Anstieg kann ein größerer Rücklauf bleiben.",
      "Der lokale Test und die größere Trendstruktur sind getrennte Bezüge.",
      "Lokale Stärke im größeren Kontext lesen."
    ],
    "prompt": "Warum können zwei Käuferbeine noch ein Bärenrücklauf sein?",
    "answers": [
      {
        "label": "Weil zwei Käuferbeine jeden Abwärtstrend sicher beenden.",
        "explanation": "Zwei lokale Käuferbeine können unter dem größeren tieferen Hoch bleiben."
      },
      {
        "label": "Weil die größere Struktur weiterhin tiefere Hochs zeigt.",
        "explanation": "Richtig. Lokale Stärke im größeren Kontext lesen."
      },
      {
        "label": "Weil grüne Bars grundsätzlich bedeutungslos sind.",
        "explanation": "Grüne Bars liefern Information, deren Gewicht vom Kontext abhängt."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Wer am zweiten Test handeln könnte",
    "summary": "Teilnehmermotive sind Erklärungen, keine OHLC-Daten.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-12",
    "paragraphs": [
      "Am zweiten Käuferhoch könnten frühere Käufer Gewinne mitnehmen und Verkäufer neu aktiv werden. Frühere Shorts könnten ihre Position ergänzen. Solche Abläufe erklären plausibel, warum ein Test auf zusätzlichen Gegenhandel treffen kann.",
      "Der OHLC-Chart zeigt Preise, keine vollständigen Positionen oder Absichten. Du kannst aus ihm nicht beweisen, welche Gruppe verkauft hat oder wie viele Orders noch warten. Beschreib sichtbare Zurückweisung und Anschluss zuerst.",
      "Links steht dieselbe Teststruktur wie rechts. Rechts wird ihre anschließende Verkäuferfolge hervorgehoben. Diese Folge ist beobachtbar. Die Erklärung mit Gewinnmitnahmen oder neuen Shorts bleibt eine Interpretation und darf nicht als sichere Information zur Positionsgröße dienen."
    ],
    "callout": "Sichtbare Preise von vermuteten Motiven trennen.",
    "takeaways": [
      "Teilnehmermotive sind Erklärungen, keine OHLC-Daten.",
      "Der OHLC-Chart zeigt Preise, keine vollständigen Positionen oder Absichten.",
      "Sichtbare Preise von vermuteten Motiven trennen."
    ],
    "prompt": "Was ist am zweiten Hoch direkt im OHLC-Chart überprüfbar?",
    "answers": [
      {
        "label": "Die genaue Identität aller Verkäufer.",
        "explanation": "Preise enthalten keine vollständige Identität der handelnden Personen."
      },
      {
        "label": "Die vollständige Anzahl späterer Short-Ergänzungen.",
        "explanation": "Spätere Positionsergänzungen sind im OHLC-Verlauf nicht als vollständige Orderliste sichtbar."
      },
      {
        "label": "Ob die Preise zurückgewiesen werden und Verkäuferanschluss entsteht.",
        "explanation": "Richtig. Sichtbare Preise von vermuteten Motiven trennen."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Komplexer Verlauf, zwei größere Beine",
    "summary": "Kleine Unterbrechungen können innerhalb eines Beins liegen.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-13",
    "paragraphs": [
      "Ein größerer Schub kann mehrere kleine Rückläufe enthalten. Im Detail wirkt die Bewegung dadurch unruhig. Auf der gewählten größeren Swingebene können trotzdem ein erster Schub, eine deutlichere Gegenbewegung und ein zweiter Schub erkennbar bleiben.",
      "Vergleiche die kleinen Pausen mit der größeren Trennung. Stärke, Dauer und Form helfen bei dieser Einordnung. Es gibt keine Pflicht, dass beide größeren Beine gleich viele Bars oder gleich viele kleine Teilbewegungen enthalten.",
      "Im eigenen Beispiel enthält das zweite größere Aufwärtsbein zwei kleine Anstiege. Die erste größere Strecke bleibt einfacher. Beschreib beide Ebenen ausdrücklich, statt aus jeder kleinen Unterbrechung eine weitere große Welle zu machen."
    ],
    "callout": "Kleine Beine und große Beine getrennt zählen.",
    "takeaways": [
      "Kleine Unterbrechungen können innerhalb eines Beins liegen.",
      "Vergleiche die kleinen Pausen mit der größeren Trennung.",
      "Kleine Beine und große Beine getrennt zählen."
    ],
    "prompt": "Wie beschreibst du ein großes Bein mit zwei kleinen Schüben?",
    "answers": [
      {
        "label": "Als ein großes Bein mit zwei kleineren Teilbewegungen.",
        "explanation": "Richtig. Kleine Beine und große Beine getrennt zählen."
      },
      {
        "label": "Als Beweis, dass jede größere Zählung falsch sein muss.",
        "explanation": "Eine große Bewegung kann kleinere Beine enthalten, ohne ihren größeren Rang zu verlieren."
      },
      {
        "label": "Als zwei identische Zeitebenen ohne Unterschied.",
        "explanation": "Kleine und große Swingebene beschreiben unterschiedliche Größen."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Zeitebenen: dieselben Daten verdichten",
    "summary": "Aggregation verändert die Darstellung, nicht den Preisweg.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-14",
    "paragraphs": [
      "Ein Chart mit größeren Bars kann verschachtelte Bewegungen leichter sichtbar machen. Dabei müssen die größeren Bars tatsächlich dieselben kleineren Daten zusammenfassen. Ein anders erfundener Verlauf wäre kein Zeitebenenvergleich.",
      "In unserem Beispiel werden jeweils drei kleine Bars zusammengefasst. Der neue Open ist der erste Open, das High das höchste High, das Low das niedrigste Low und der Close der letzte Close dieser Dreiergruppe. Zwischenpreise werden nicht dazuerfunden.",
      "Links siehst du zwölf Bars, rechts vier aggregierte Bars. Ein Teil der kleinen Richtungswechsel verschwindet im Körper oder Schatten eines größeren Bars. Ein einfacheres Bild liefert deshalb keine zusätzliche unabhängige Bestätigung derselben Bewegung."
    ],
    "callout": "Der gleiche Preisweg ist keine zweite unabhängige Quelle.",
    "takeaways": [
      "Aggregation verändert die Darstellung, nicht den Preisweg.",
      "In unserem Beispiel werden jeweils drei kleine Bars zusammengefasst.",
      "Gleicher Preisweg ist keine zweite unabhängige Quelle."
    ],
    "prompt": "Wie entsteht das High eines aggregierten Dreierbars?",
    "answers": [
      {
        "label": "Aus einem passend gewählten neuen Hoch.",
        "explanation": "Ein neu erfundenes Hoch verletzt die Darstellung desselben Preiswegs."
      },
      {
        "label": "Aus dem höchsten High seiner drei Ausgangsbars.",
        "explanation": "Richtig. Gleicher Preisweg ist keine zweite unabhängige Quelle."
      },
      {
        "label": "Aus dem Durchschnitt ihrer Schlusskurse.",
        "explanation": "Der Durchschnitt der Schlüsse ist kein OHLC-High."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Beim Zeitebenenwechsel den Ablauf behalten",
    "summary": "Die Kontextprüfung braucht einen klaren Zweck.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-15",
    "paragraphs": [
      "Ein größerer Chart kann bei der Einordnung helfen, bindet aber Aufmerksamkeit. Wechselst du während eines laufenden Ablaufs ständig zwischen vielen Ansichten, verpasst du womöglich den gerade wichtigen Test oder deine eigene geplante Auslösung.",
      "Leg fest, wann du den größeren Kontext prüfst und zu welcher Frage. Ein Kontextblick vor dem Einstieg und ein ruhiger Replay-Vergleich sind andere Aufgaben als hektisches Umschalten bei jedem Gegenbar. Keine Zeitebene ist pauschal nutzlos.",
      "Beide Panels zeigen denselben aggregierten Beispielweg. Notier zuerst den größeren Bezug, kehr dann zum festgelegten Arbeitschart zurück und führe die Zählung dort weiter. Ein Zeitrahmenwechsel darf eine vorher klare Verlustgrenze nicht stillschweigend aufweichen."
    ],
    "callout": "Die Ansicht dient einer Frage, nicht der Suche nach Zustimmung.",
    "takeaways": [
      "Kontextprüfung braucht einen klaren Zweck.",
      "Lege fest, wann du den größeren Kontext prüfst und zu welcher Frage.",
      "Die Ansicht dient einer Frage, nicht der Suche nach Zustimmung."
    ],
    "prompt": "Was macht einen Zeitebenenwechsel nachvollziehbar?",
    "answers": [
      {
        "label": "So lange wechseln, bis ein passender Chart zustimmt.",
        "explanation": "Die Suche nach Zustimmung verändert die Beurteilungsregel während des Ablaufs."
      },
      {
        "label": "Mit jeder Ansicht automatisch das Risiko erhöhen.",
        "explanation": "Ein Ansichtswechsel verändert das zulässige Geldrisiko nicht."
      },
      {
        "label": "Eine vorher benannte Kontextfrage und Rückkehr zum festgelegten Ablauf.",
        "explanation": "Richtig. Die Ansicht dient einer Frage, nicht der Suche nach Zustimmung."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Doppelhoch und Doppeltief",
    "summary": "Der zweite Besuch prüft einen früheren Wendebereich.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-16",
    "paragraphs": [
      "Ein Doppelhoch entsteht aus einem ersten Hoch, einer Gegenbewegung und einem erneuten Hoch im selben Bereich. Beim Doppeltief gilt die gespiegelte Struktur. Exakte Preisgleichheit ist für den Gedanken eines Tests nicht zwingend.",
      "Das erste Extrem muss als möglicher Wendebereich erkennbar sein. Der zweite Besuch prüft diesen Bezug. Folgt dort erneut Zurückweisung, ist ein Rücklauf oder Richtungswechsel plausibler; die spätere Größe bleibt offen.",
      "Links folgt nach dem zweiten Hoch eine Verkäuferbewegung, rechts nach dem zweiten Tief eine Käuferbewegung. Diese Beispiele sind gespiegelte eigene Konstruktionen. Ein kleiner Richtungswechsel am Test genügt nicht automatisch für eine große Umkehr."
    ],
    "callout": "Der zweite Besuch ist ein Test, die Reaktion entscheidet mit.",
    "takeaways": [
      "Der zweite Besuch prüft einen früheren Wendebereich.",
      "Das erste Extrem muss als möglicher Wendebereich erkennbar sein.",
      "Der zweite Besuch ist ein Test, die Reaktion entscheidet mit."
    ],
    "prompt": "Was verbindet die beiden Hochs eines Doppelhochs?",
    "answers": [
      {
        "label": "Ein gemeinsamer früherer Preisbereich mit einer trennenden Gegenbewegung.",
        "explanation": "Richtig. Der zweite Besuch ist ein Test, die Reaktion entscheidet mit."
      },
      {
        "label": "Die Pflicht zu exakt identischen Schlusskursen.",
        "explanation": "Ein Testbereich verlangt keine exakte Gleichheit der Schlusskurse."
      },
      {
        "label": "Eine sichere große Trendumkehr ohne weitere Folge.",
        "explanation": "Die Größe einer möglichen Umkehr bleibt vom weiteren Anschluss abhängig."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Altes Extrem und zweibeiniger Test",
    "summary": "Ein Ausgangsextrem kann zwei spätere Testschübe bekommen.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-17",
    "paragraphs": [
      "Nicht jede erste Spitze ist schon ein klarer Wendepunkt. Nach ihr kann eine Gegenbewegung entstehen, und der Markt kann das alte Extrem anschließend in zwei getrennten Schüben prüfen. Das Ausgangsextrem und diese beiden Testschübe sind unterschiedliche Teile des Ablaufs.",
      "Die Gesamtform kann drei Spitzen zeigen, obwohl der spätere Test aus zwei Beinen besteht. Benenne den Start deiner Zählung. Drei Hochpunkte im gesamten Bild widersprechen zwei Aufwärtsbeinen seit dem Beginn des Tests nicht.",
      "Im Beispiel ist das alte Hoch bei 60 vor dem neuen Test bekannt. Nach dem Rücklauf steigen zwei getrennte Käuferabschnitte in seine Nähe. Zähl ihre Zwischenreaktion sichtbar mit. Erst danach prüfst du, ob die alte Zone hält oder Anschluss entsteht."
    ],
    "callout": "Der Zählstart bestimmt, welche Teile zur Testbewegung gehören.",
    "takeaways": [
      "Ein Ausgangsextrem kann zwei spätere Testschübe bekommen.",
      "Die Gesamtform kann drei Spitzen zeigen, obwohl der spätere Test aus zwei Beinen besteht.",
      "Der Zählstart bestimmt, welche Teile zur Testbewegung gehören."
    ],
    "prompt": "Wie können drei Spitzen und ein zweibeiniger Test zusammenpassen?",
    "answers": [
      {
        "label": "Drei sichtbare Spitzen verbieten jede Zweibeinlesart.",
        "explanation": "Die beiden späteren Schübe können einen Test des früheren Extrempunkts bilden."
      },
      {
        "label": "Das erste Extrem liegt vor den zwei späteren Testbeinen.",
        "explanation": "Richtig. Der Zählstart bestimmt, welche Teile zur Testbewegung gehören."
      },
      {
        "label": "Jede Spitze zählt unabhängig vom Start immer als dasselbe Bein.",
        "explanation": "Der Zählstart trennt das alte Extrem von den zwei späteren Testbeinen."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Beide Testschübe über dem alten Hoch",
    "summary": "Zwei neue Überschreitungen können drei Schübe ergeben.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-18",
    "paragraphs": [
      "Nach einem alten Hoch kann der erste neue Käuferabschnitt bereits darüber handeln. Nach einer Gegenbewegung kann ein weiterer Käuferabschnitt noch höher steigen. Zusammen mit dem alten Ausgangsschub ist eine Dreischubform erkennbar.",
      "Die beiden späteren Schübe bilden zugleich einen zweibeinigen Test des alten Extrembereichs. Dieser Zusammenhang erklärt die Überschneidung der Musterbegriffe. Er entscheidet noch nicht, ob der dritte Schub scheitert oder der Trend weiterläuft.",
      "Links endet der erste neue Testschub oberhalb der Referenz 60. Rechts kommt der zweite darüber liegende Test hinzu. Die Bars vor dem zweiten Test sind unverändert. Seine spätere Entstehung darfst du im frühen Panel nicht vorwegnehmen."
    ],
    "callout": "Drei Schübe sind kein automatischer Umkehrbefehl.",
    "takeaways": [
      "Zwei neue Überschreitungen können drei Schübe ergeben.",
      "Die beiden späteren Schübe bilden zugleich einen zweibeinigen Test des alten Extrembereichs.",
      "Drei Schübe sind kein automatischer Umkehrbefehl."
    ],
    "prompt": "Welche Form zeigt ein altes Hoch plus zwei höhere Testschübe?",
    "answers": [
      {
        "label": "Eine sichere Verkaufsorder ohne Preisplan.",
        "explanation": "Die Dreischubform ersetzt Auslösung und begrenzten Verlustplan nicht."
      },
      {
        "label": "Nur ein Hoch, weil alle Schübe dieselbe Richtung tragen.",
        "explanation": "Die trennenden Rückläufe machen mehrere Schübe erkennbar."
      },
      {
        "label": "Drei sichtbare Aufwärtsschübe und einen späteren zweibeinigen Test.",
        "explanation": "Richtig. Drei Schübe sind kein automatischer Umkehrbefehl."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Nur der zweite Test überschreitet",
    "summary": "Ein zweibeiniger Test braucht nicht zwei neue Hochs.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-19",
    "paragraphs": [
      "Der erste spätere Testschub kann unter dem alten Hoch bleiben. Nach einem kleinen Rücklauf kann erst der zweite Schub die alte Spitze übertreffen. Der spätere Test ist weiterhin zweibeinig, obwohl nur ein neues höheres Hoch entsteht.",
      "Vergleiche jeden Testschub mit derselben alten Referenz. Sonst wird womöglich ein lokales höheres Hoch irrtümlich als Überschreitung des größeren Extrempunkts beschrieben. Im gespiegelten Bärenfall gilt dieselbe Logik für ein neues tieferes Tief.",
      "Links hält der erste neue Test unter 60. Rechts handelt der zweite darüber. Ob die Überschreitung hält oder zurückgenommen wird, ist eine zusätzliche Frage. Die Anzahl der Überschreitungen darfst du nicht mit der Anzahl der Versuche gleichsetzen."
    ],
    "callout": "Versuche und neue Extrempunkte getrennt zählen.",
    "takeaways": [
      "Ein zweibeiniger Test braucht nicht zwei neue Hochs.",
      "Vergleiche jeden Testschub mit derselben alten Referenz.",
      "Versuche und neue Extrempunkte getrennt zählen."
    ],
    "prompt": "Wie viele Testbeine können vorliegen, wenn nur der zweite über das alte Hoch steigt?",
    "answers": [
      {
        "label": "Zwei, sofern eine Zwischenbewegung die Versuche trennt.",
        "explanation": "Richtig. Versuche und neue Extrempunkte getrennt zählen."
      },
      {
        "label": "Zwingend nur eines.",
        "explanation": "Der erste Versuch zählt auch dann, wenn er unter dem alten Hoch bleibt."
      },
      {
        "label": "Zwingend drei, unabhängig vom Verlauf.",
        "explanation": "Nur ein zweiter Test über der Referenz erzwingt kein drittes Testbein."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Ungleiche Beine dürfen vergleichbar sein",
    "summary": "Dauer, Stärke und Form helfen bei der Größenwahl.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-20",
    "paragraphs": [
      "Zwei größere Beine müssen weder gleich lang noch gleich schnell sein. Eines kann direkt laufen, das andere aus mehreren kleinen Abschnitten bestehen. Ihre Einordnung hängt am größeren Verlauf und der zuvor benannten Regel.",
      "Betrachte Dauer, gewonnene Strecke und Form gemeinsam. Eine winzige Gegenkerze innerhalb einer kräftigen Bewegung muss nicht denselben Rang haben wie ein langer Rücklauf. Es gibt trotzdem keinen objektiven Zwang, jede unsaubere Form perfekt zu etikettieren.",
      "Im Beispiel ist ein größeres Bein kompakt, das andere enthält eine kleine innere Zweiteilung. Schreib beide Beschreibungen auf: zwei größere Beine, innerhalb des zweiten zwei kleinere. Dadurch bleibt die Hierarchie sichtbar, ohne dass du Gleichheit erfindest."
    ],
    "callout": "Ein vergleichbarer Rang verlangt keine identische Form.",
    "takeaways": [
      "Dauer, Stärke und Form helfen bei der Größenwahl.",
      "Betrachte Dauer, gewonnene Strecke und Form gemeinsam.",
      "Vergleichbarer Rang verlangt keine identische Form."
    ],
    "prompt": "Was hilft bei ungleichen Teilbewegungen?",
    "answers": [
      {
        "label": "Alle kleinen Unterbrechungen zu großen Umkehrungen erklären.",
        "explanation": "Eine kleine Unterbrechung kann innerhalb eines größeren Beins liegen."
      },
      {
        "label": "Strecke, Dauer und Form auf derselben Ebene vergleichen.",
        "explanation": "Richtig. Vergleichbarer Rang verlangt keine identische Form."
      },
      {
        "label": "Gleich viele Bars für jedes Bein erzwingen.",
        "explanation": "Beine desselben Rangs müssen nicht gleich viele Bars enthalten."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Unklare Zählung: auslassen",
    "summary": "Ein unsicherer Mustername ist kein Handlungszwang.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-21",
    "paragraphs": [
      "Manchmal sind die Gegenbewegungen so unruhig oder ähnlich groß, dass mehrere Zählungen plausibel bleiben. Du musst dann keine scheinbar perfekte Form herstellen. Schreib die Unklarheit und den fehlenden Bezug ausdrücklich auf.",
      "Ein Trade braucht mehr als ein passendes Musterwort. Unterstützt die Zählung deinen Einstieg, die Verlustgrenze oder den Zielraum nicht klar, kann Abwarten die sinnvollere Entscheidung sein. Ein ausgelassener Verlauf ist kein ausgeführter Verlust.",
      "Links wechseln mehrere kleine Bewegungen ohne deutliche Hierarchie. Rechts ist eine spätere klare Zweiteilung sichtbar. Diese spätere Klarheit macht einen früheren ungeplanten Einstieg nicht rückwirkend korrekt. Dokumentiere den damaligen Informationsstand und entscheide erst mit neuen Bars erneut."
    ],
    "callout": "Unklarheit darf als Unklarheit stehen bleiben.",
    "takeaways": [
      "Ein unsicherer Mustername ist kein Handlungszwang.",
      "Ein Trade benötigt mehr als ein passendes Musterwort.",
      "Unklarheit darf als Unklarheit stehen bleiben."
    ],
    "prompt": "Was ist bei einer verwirrenden Zählung eine gültige Entscheidung?",
    "answers": [
      {
        "label": "Das Muster so lange ändern, bis ein Einstieg Pflicht scheint.",
        "explanation": "Eine unklare Struktur muss nicht in einen Trade umgedeutet werden."
      },
      {
        "label": "Einen Verlust durch beliebiges Nachkaufen wieder ausgleichen.",
        "explanation": "Ungeplantes Nachkaufen klärt die Struktur nicht und kann den Verlust vergrößern."
      },
      {
        "label": "Auslassen und auf eine klarere Struktur warten.",
        "explanation": "Richtig. Unklarheit darf als Unklarheit stehen bleiben."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Dein Zweibein-Protokoll im Replay",
    "summary": "Start, Ebene, Trennung und Ergebnis dokumentieren.",
    "section": "Tests und verschachtelte Bewegungen",
    "scenario": "c20-22",
    "paragraphs": [
      "Halte vor den nächsten Bars den größeren Kontext, den Zählstart und deine Trennregel fest. Benenne den ersten Schub, den sichtbaren Rücklauf und die bekannte Testreferenz. Schreib auch auf, was einen zweiten Versuch erst erkennbar machen würde.",
      "Deck anschließend Bars schrittweise auf. Unterscheide zweiten Versuch, Überschreitung, Zurückweisung und fortgesetzten Anschluss. Wechselst du die Ebene, notier den Grund und behalte den bisherigen Preisweg, statt dir eine neue passende Geschichte zu erfinden.",
      "Bewerte zum Schluss die damalige Lesart und eine mögliche Order getrennt. Einstieg, begrenzter Verlust, Menge und Zielraum gehören in einen eigenen Plan. Zwei gezählte Beine liefern keine gemessene Trefferquote; auch nicht entstandene zweite Versuche und ausgelassene Fälle gehören ins Protokoll."
    ],
    "callout": "Zählen beschreibt den Verlauf; ein Trade braucht einen eigenen Plan.",
    "takeaways": [
      "Start, Ebene, Trennung und Ergebnis dokumentieren.",
      "Decke anschließend Bars schrittweise auf.",
      "Zählen beschreibt den Verlauf; ein Trade braucht einen eigenen Plan."
    ],
    "prompt": "Welche Aufzeichnung lässt sich später fair prüfen?",
    "answers": [
      {
        "label": "Eine zeitgerecht notierte Zählregel mit offenem Testergebnis und separatem Orderplan.",
        "explanation": "Richtig. Zählen beschreibt den Verlauf; ein Trade braucht einen eigenen Plan."
      },
      {
        "label": "Nur die fertig schönsten Zweibein-Gewinner.",
        "explanation": "Nur fertige Gewinner auszuwählen verschweigt ausgebliebene und gescheiterte Versuche."
      },
      {
        "label": "Eine nachträglich an jeden Ausgang angepasste Zählung.",
        "explanation": "Eine nachträglich angepasste Regel zeigt nicht, was damals erkennbar war."
      }
    ],
    "correct": 0
  }
];

export const chapterTwentyLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-20-${number}`;
  return {
    id: `price-action-trends.chapter-20.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 20 · ${d.section}`,
    sourceAnchors: [`Kapitel 20 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 20 · Bewegungen in zwei Schüben',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Beine, Tests und Bezugspunkte beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
