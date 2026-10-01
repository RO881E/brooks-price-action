import type { ChapterFourteenScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterFourteenScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Kanalgrenze: die andere Seite des Trends",
    "summary": "Trendseite und Schubseite unterscheiden.",
    "section": "Grundlagen",
    "scenario": "c14-01",
    "paragraphs": [
      "Im steigenden Verlauf liegt die Trendlinie unter den Rückläufen. Die obere Kanalgrenze beschreibt, wie weit die Aufwärtsschübe bisher reichten. Im fallenden Verlauf liegt die Trendlinie oben und die Kanalgrenze unten. Beide richten sich grundsätzlich nach der Richtung des betrachteten Trends.",
      "An der Trendseite suchst du eher nach einer möglichen Fortsetzung nach einem Rücklauf. An der gegenüberliegenden Grenze prüfst du, ob der Schub an Kraft verliert oder sogar beschleunigt. Die beiden Orte beantworten unterschiedliche Fragen, obwohl sie zum selben Kanal gehören.",
      "Die Kanalgrenze ist kein automatisches Gewinnziel und keine fertige Gegenorder. Zeichne zuerst die sichtbare Struktur und beobachte danach neue Bars. Ein Kurs kann vor der Grenze drehen, sie kurz überschreiten oder dauerhaft in einen stärkeren Verlauf übergehen."
    ],
    "takeaways": [
      "Trendseite und Schubseite unterscheiden.",
      "Im Bullenkanal liegt die Kanalgrenze oben.",
      "Eine Grenze ist eine Referenz, keine automatische Order."
    ],
    "callout": "Eine Grenze ist eine Referenz, keine automatische Order.",
    "prompt": "Wo liegt die Kanalgrenze eines Bärenkanals?",
    "answers": [
      {
        "label": "Unter den fallenden Tiefbereichen.",
        "explanation": "Richtig. Sie beschreibt die äußere Seite der Abwärtsschübe."
      },
      {
        "label": "Über den fallenden Hochs.",
        "explanation": "Dort liegt die Bären-Trendlinie."
      },
      {
        "label": "Immer waagerecht in der Mitte.",
        "explanation": "Die Kanalgrenze folgt grundsätzlich der Richtung des betrachteten Kanals."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Parallel, enger oder breiter: drei Kanalformen",
    "summary": "Den Abstand beider Grenzen vergleichen.",
    "section": "Kanalformen",
    "scenario": "c14-02",
    "paragraphs": [
      "Bei parallelen Grenzen bleibt der gedachte Abstand gleich. Laufen die Grenzen zusammen, wird der Kanal enger; entfernen sie sich voneinander, wird er breiter. Entscheidend ist ihre Beziehung zueinander, nicht allein, wie steil eine Linie auf dem Bildschirm aussieht.",
      "Ein steigender oder fallender Kanal mit zusammenlaufenden Grenzen kann eine Keilform entwickeln. Die Bewegung läuft weiter in Trendrichtung, hat zwischen ihren Grenzen aber zunehmend weniger Raum. Ein breiter werdender Kanal zeigt dagegen größere Ausschläge zwischen den beiden Seiten.",
      "Die Form beschreibt den bisherigen Verlauf. Sie beweist nicht, dass der nächste Bar umkehrt. Betrachte zusätzlich Anzahl und Qualität der Schübe sowie die Reaktion an der äußeren Grenze. Maßstab und Zeitebene müssen bei einem Vergleich gleich bleiben."
    ],
    "takeaways": [
      "Den Abstand beider Grenzen vergleichen.",
      "Zusammenlaufende Grenzen können einen Keil bilden.",
      "Die Form allein liefert noch keine Auslösung."
    ],
    "callout": "Die Form allein liefert noch keine Auslösung.",
    "prompt": "Was kennzeichnet einen steigenden Keil?",
    "answers": [
      {
        "label": "Der Abstand wird zwangsläufig immer größer.",
        "explanation": "Das wäre eine auseinanderlaufende Struktur."
      },
      {
        "label": "Die steigenden Grenzen laufen aufeinander zu.",
        "explanation": "Richtig. Der Raum zwischen ihnen wird kleiner."
      },
      {
        "label": "Beide Grenzen müssen waagerecht sein.",
        "explanation": "Das wäre keine steigende Keilform."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Ein steigender Kanal kann nach unten auflösen",
    "summary": "Aktueller Aufwärtstrend und möglicher Gegenbruch koexistieren.",
    "section": "Mögliche Auflösung",
    "scenario": "c14-03",
    "paragraphs": [
      "Ein Bullenkanal kann lange steigen und zugleich anfällig für einen späteren Bruch der unteren Seite sein. In diesem Sinn lässt er sich als mögliche Bärenflagge betrachten: Die aktuelle Aufwärtsbewegung und die Möglichkeit eines späteren Gegenbruchs bestehen nebeneinander.",
      "Ein Bruch nach unten kann eine größere Korrektur, eine Range oder einen Bärentrend einleiten. Erst die Reaktion nach dem Bruch zeigt, welche Einordnung besser passt. Die Bezeichnung Bärenflagge ist keine Aufforderung, während jedes Aufwärtsschubs blind zu verkaufen.",
      "Behalte deshalb zwei getrennte Fragen: Wer kontrolliert den aktuellen Verlauf, und was würde diese Kontrolle verändern? Solange die Bullen neue Hochs mit tragfähigen Rückläufen erreichen, ist ein Gegenplan nur eine Möglichkeit. Ein realer Gegenbruch liefert zusätzliche Information."
    ],
    "takeaways": [
      "Aktueller Aufwärtstrend und möglicher Gegenbruch koexistieren.",
      "Nach dem Bruch sind Range und Umkehr möglich.",
      "Der Flaggenname ersetzt keine Verkäuferreaktion."
    ],
    "callout": "Der Flaggenname ersetzt keine Verkäuferreaktion.",
    "prompt": "Ein steigender Kanal wird als mögliche Bärenflagge betrachtet. Was folgt daraus?",
    "answers": [
      {
        "label": "Jeder neue Hochpunkt muss sofort geshortet werden.",
        "explanation": "Der Name allein liefert kein Gegensetup."
      },
      {
        "label": "Der aktuelle Verlauf ist schon eindeutig ein Bärentrend.",
        "explanation": "Er steigt noch; ein möglicher Bruch ist kein bereits bestätigter Richtungswechsel."
      },
      {
        "label": "Ein späterer Gegenbruch ist zu beobachten; sofortiges Shorten ist nicht begründet.",
        "explanation": "Richtig. Die aktuelle Kontrolle und das spätere Szenario sind verschieden."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Ein fallender Kanal kann nach oben auflösen",
    "summary": "Fallende Struktur zunächst als fallend behandeln.",
    "section": "Mögliche Auflösung",
    "scenario": "c14-04",
    "paragraphs": [
      "Ein Bärenkanal lässt sich entsprechend als mögliche Bullenflagge lesen. Die Verkäufer bestimmen noch die fallenden Schübe, während ein späterer Bruch der oberen Trendseite einen Übergang vorbereiten kann. Bis dahin bleibt die aktuelle Bewegung abwärts gerichtet.",
      "Nach dem Gegenbruch kann der Kurs seitwärts handeln oder einen Aufwärtstrend bilden. Eine Rückkehr an alte Tiefbereiche ist ebenfalls möglich. Käufer brauchen daher mehr als die Vorstellung, dass jeder fallende Kanal irgendwann enden müsse.",
      "Prüfe die Stärke des Gegenbruchs und die nächste Verkäuferreaktion. Ein schwacher Rücklauf nach einem kräftigen Käuferstoß liefert andere Information als ein sofortiger Fall auf neue Tiefs. Die Kanalform hilft beim Beobachten; gehandelt wird ein begründetes Setup."
    ],
    "takeaways": [
      "Fallende Struktur zunächst als fallend behandeln.",
      "Gegenbruch kann Range oder Aufwärtstrend vorbereiten.",
      "Die Folgereaktion entscheidet mit."
    ],
    "callout": "Die Folgereaktion entscheidet mit.",
    "prompt": "Was unterscheidet einen möglichen Aufwärtswechsel von einer bloßen Hoffnung?",
    "answers": [
      {
        "label": "Ein sichtbarer Gegenbruch mit passender Folgereaktion.",
        "explanation": "Richtig. Neue Bars müssen die Käuferidee stützen."
      },
      {
        "label": "Allein das Alter des Abwärtstrends.",
        "explanation": "Ein alter Trend kann weiterlaufen."
      },
      {
        "label": "Die Tatsache, dass die untere Grenze eingezeichnet ist.",
        "explanation": "Eine Zeichnung erzeugt noch keinen Käuferdruck."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Ausbruch in Trendrichtung: Fehlschlag oder Beschleunigung?",
    "summary": "Ein Ausbruch in Trendrichtung verstärkt zunächst den Schub.",
    "section": "Überschreitungen",
    "scenario": "c14-05",
    "paragraphs": [
      "Bricht ein Bullenkanal über seine obere Grenze, bewegt sich der Kurs zunächst noch stärker aufwärts. Der Schub kann sich als späte Übertreibung erweisen und in den Kanal zurückfallen. Er kann aber auch einen steileren, kräftigeren Aufwärtsabschnitt beginnen.",
      "Im Bärenkanal gilt die Spiegelung: Ein Stoß unter die untere Grenze kann schnell zurückgenommen werden oder weitere starke Verkäuferbars nach sich ziehen. Die Überschreitung allein trennt diese Möglichkeiten noch nicht.",
      "Beobachte, ob Schlüsse außerhalb bleiben und weiterer Anschluss entsteht. Ein schneller Rückfall mit Gegenbars spricht für einen fehlgeschlagenen Ausbruch. Fortgesetzte starke Bars außerhalb sprechen zunächst für Beschleunigung. Ein früher Gegenversuch kann deshalb gerade dort scheitern, wo die Linie besonders überzeugend aussieht."
    ],
    "takeaways": [
      "Ein Ausbruch in Trendrichtung verstärkt zunächst den Schub.",
      "Rückkehr und Anschluss getrennt prüfen.",
      "Überschreitung allein ist kein Umkehrsignal."
    ],
    "callout": "Überschreitung allein ist kein Umkehrsignal.",
    "prompt": "Nach einem oberen Kanalausbruch folgen mehrere starke Käuferbars. Was ist zunächst sichtbar?",
    "answers": [
      {
        "label": "Ein zwangsläufiger Rückfall auf dem nächsten Tick.",
        "explanation": "Die Linie liefert keinen festen Zeitpunkt."
      },
      {
        "label": "Beschleunigung statt bestätigter Rückkehr.",
        "explanation": "Richtig. Die neuen Bars setzen den Ausbruch fort."
      },
      {
        "label": "Ein sicherer Short, weil die Linie verletzt ist.",
        "explanation": "Die Verletzung in Trendrichtung kann einen stärkeren Abschnitt beginnen."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Der frühe Rückfall zählt, nicht ein starrer Countdown",
    "summary": "Schnelle Rückkehr kann fehlenden Anschluss zeigen.",
    "section": "Überschreitungen",
    "scenario": "c14-06",
    "paragraphs": [
      "Ein Ausbruch unter einen fallenden Kanal kann bereits innerhalb weniger Bars scheitern. Die frühe Rückkehr ist ein nützlicher Beobachtungspunkt, weil ein überzeugender neuer Abwärtsschub Anschluss zeigen sollte. Bleibt dieser aus, verändert sich die erste Deutung.",
      "Ein ungefährer Zeitraum von fünf Bars ist dabei eine Orientierung für einen schnellen Fehlschlag, keine Ablaufuhr. Unterschiedliche Zeitebenen, Bargrößen und Trendstärken verändern den Verlauf. Ein sechster Bar ist kein mathematischer Beweis für eine Fortsetzung oder Umkehr.",
      "Notiere beim ersten Ausbruch, ob du Rückkehr oder Anschluss erwarten würdest und woran du beides erkennst. Handel nicht nur deshalb gegen den Trend, weil eine bestimmte Anzahl Kerzen vergangen ist. Dein Signal und dein Verlustschutz bleiben erforderlich."
    ],
    "takeaways": [
      "Schnelle Rückkehr kann fehlenden Anschluss zeigen.",
      "Wenige Bars sind eine Orientierung, keine Garantie.",
      "Zeitablauf allein ist kein Einstieg."
    ],
    "callout": "Zeitablauf allein ist kein Einstieg.",
    "prompt": "Der fünfte Bar nach einer Überschreitung ist vorbei. Was entscheidet jetzt?",
    "answers": [
      {
        "label": "Eine Umkehr muss jetzt zwingend erfolgen.",
        "explanation": "Die Barzahl ist keine Marktpflicht."
      },
      {
        "label": "Ab jetzt kann es nie mehr eine Rückkehr geben.",
        "explanation": "Auch spätere Rückkehr bleibt möglich."
      },
      {
        "label": "Die tatsächliche Reaktion und das Setup.",
        "explanation": "Richtig. Ein grober Zeithinweis ersetzt keine Kursbeobachtung."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Eine Parallele über die Zwischenhochs verschieben",
    "summary": "Steigung der Tiefverbindung unverändert kopieren.",
    "section": "Konstruktion",
    "scenario": "c14-07",
    "paragraphs": [
      "Für einen Bullenkanal kannst du zuerst zwei bereits bekannte Rücklauftiefs verbinden. Kopiere dann die Steigung dieser Trendlinie und verschiebe die Kopie nach oben. Die obere Linie ist eine echte Parallele, wenn ihre Steigung unverändert bleibt.",
      "Lege sie so an ein Hoch zwischen den beiden Tiefankern, dass die übrigen Zwischenbars darunter liegen. Gesucht ist dabei nicht immer das absolut höchste Hoch, sondern das Hoch, das bei dieser Steigung die umschließende Lage bestimmt. Die schräg verlaufende Linie muss über jedem Zwischenhoch liegen.",
      "Nach dem zweiten Tiefanker ist diese Konstruktion bekannt. Verlängere sie nach rechts und beobachte spätere Schübe. Ein späterer Hochpunkt darf den damaligen Anker nicht rückwirkend ersetzen. So bleibt im Replay klar, welche Referenz wirklich verfügbar war."
    ],
    "takeaways": [
      "Steigung der Tiefverbindung unverändert kopieren.",
      "Zwischenhochs unter der Parallele einschließen.",
      "Nur bereits sichtbare Anker verwenden."
    ],
    "callout": "Nur bereits sichtbare Anker verwenden.",
    "prompt": "Was muss eine umschließende obere Parallele bei ihrer Konstruktion erfüllen?",
    "answers": [
      {
        "label": "Die Zwischenhochs liegen auf oder unter ihr.",
        "explanation": "Richtig. Ihre Lage wird bei der vorgegebenen Steigung bestimmt."
      },
      {
        "label": "Sie muss dieselben Tiefpunkte wie die untere Linie berühren.",
        "explanation": "Dann wäre sie keine gegenüberliegende Grenze."
      },
      {
        "label": "Ihre Steigung wird frei geändert, bis ein Wunschziel passt.",
        "explanation": "Eine Parallele behält die ursprüngliche Steigung."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Die Konstruktion im Bärenkanal spiegeln",
    "summary": "Hochverbindung nach unten kopieren.",
    "section": "Konstruktion",
    "scenario": "c14-08",
    "paragraphs": [
      "Im Bärenfall verbindest du zwei bekannte Rücklaufhochs. Eine Kopie mit gleicher Steigung verschiebst du nach unten an einen Tiefpunkt zwischen den Hochankern. Die übrigen Zwischenbars sollen oberhalb dieser unteren Grenze bleiben.",
      "Ein tieferer Preis an einem späteren Bar kann wegen der fallenden Linie dennoch oberhalb der Grenze liegen. Vergleiche daher jeden Tiefpunkt mit dem Linienwert an genau diesem Bar. Nur den niedrigsten Preis aus der Liste auszuwählen reicht nicht immer.",
      "Die obere Linie beschreibt Rückläufe gegen den Abwärtstrend, die untere den äußeren Bereich der Verkäuferschübe. Ein späteres Unterschreiten dieser unteren Linie ist zunächst eine Ausdehnung in Trendrichtung. Für einen Long musst du die folgende Käuferreaktion gesondert prüfen."
    ],
    "takeaways": [
      "Hochverbindung nach unten kopieren.",
      "Jeden Tiefpunkt an seinem Bar vergleichen.",
      "Unterschreiten und Käuferreaktion trennen."
    ],
    "callout": "Unterschreiten und Käuferreaktion trennen.",
    "prompt": "Wie prüfst du, ob ein Tief oberhalb der fallenden Kanalgrenze liegt?",
    "answers": [
      {
        "label": "Du ignorierst den Zeitpunkt des Tiefs.",
        "explanation": "Die schräge Linie erfordert die zeitliche Position."
      },
      {
        "label": "Du vergleichst es mit dem Linienwert an diesem Bar.",
        "explanation": "Richtig. Die fallende Grenze hat an jedem Bar einen anderen Wert."
      },
      {
        "label": "Du vergleichst nur mit dem höchsten Hoch des Tages.",
        "explanation": "Das zeigt nicht die Lage zur unteren Linie."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Ein Anker außerhalb der beiden Trendpunkte",
    "summary": "Auch außerhalb liegende sichtbare Anker sind möglich.",
    "section": "Konstruktion",
    "scenario": "c14-09",
    "paragraphs": [
      "Manchmal erklärt ein früherer oder späterer Extrempunkt die Kanalbreite besser als ein Punkt zwischen den Trendankern. Eine Parallele kann auch dort verankert werden, sofern dieser Punkt bereits sichtbar ist. Die Zwischenanker-Regel ist eine hilfreiche Ausgangsmethode, kein Verbot anderer nachvollziehbarer Linien.",
      "Prüfe danach, ob die Grenze den beobachteten Verlauf sinnvoll beschreibt. Ein weit entfernter Anker kann einen sehr breiten Kanal ergeben, der für den aktuellen Schub wenig Information liefert. Dokumentiere, welchen Abschnitt du mit ihm erfasst.",
      "Vergleiche eine alternative Zeichnung mit dem bisherigen Verlauf und den neuen Tests. Die Linie darf sich ändern, wenn neue Struktur sichtbar wird. Eine offene Position bekommt dadurch aber keinen größeren zulässigen Verlust; ihr Schutzplan bleibt eine eigene Entscheidung."
    ],
    "takeaways": [
      "Auch außerhalb liegende sichtbare Anker sind möglich.",
      "Den beschriebenen Abschnitt benennen.",
      "Neue Linien erweitern nicht automatisch das Risiko."
    ],
    "callout": "Neue Linien erweitern nicht automatisch das Risiko.",
    "prompt": "Wann ist ein außerhalb liegender Anker nachvollziehbar?",
    "answers": [
      {
        "label": "Wenn er erst morgen entstehen wird.",
        "explanation": "Diese Information war bei der heutigen Entscheidung nicht vorhanden."
      },
      {
        "label": "Wenn dadurch ein bereits gebrochener Stop ungültig wird.",
        "explanation": "Eine neue Referenz hebt keinen Verlustschutz auf."
      },
      {
        "label": "Wenn er schon bekannt ist und den betrachteten Kanal besser beschreibt.",
        "explanation": "Richtig. Sichtbarkeit und erklärender Nutzen zählen."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Einzelne Spitze oder wirklich breiter Kanal?",
    "summary": "Einzelspitze und wiederholte Kanalbreite unterscheiden.",
    "section": "Linienwahl",
    "scenario": "c14-10",
    "paragraphs": [
      "Ein einzelner langer Tail kann weit aus einem ansonsten engen Kanal ragen. Eine Grenze allein über diese Spitze kann den üblichen Verlauf unnötig breit darstellen. Du kannst die wiederholten Schübe zunächst mit einer engeren Referenz beschreiben und die Spitze als gesonderten Ausnahmebereich behalten.",
      "Erreichen spätere größere Swings wiederholt die breitere Grenze, gewinnt die frühere Spitze als Anker an Bedeutung. Dann beschreibt der breite Kanal möglicherweise die aktuelle Ordnung besser. Es geht um neue Beobachtungen, nicht um die Rettung einer Prognose.",
      "Kennzeichne beide Varianten offen. Das Wort Ausnahme bedeutet nicht, dass der tatsächlich gehandelte Preis verschwinden darf. Der Tail bleibt Teil der Kursdaten und kann bei Risiko und Auslösung wichtig sein, auch wenn eine engere Orientierungslinie ihn nicht einschließt."
    ],
    "takeaways": [
      "Einzelspitze und wiederholte Kanalbreite unterscheiden.",
      "Neue breite Swings können den äußeren Anker bestätigen.",
      "Ein ausgeblendeter Linienanker ist kein gelöschter Kurs."
    ],
    "callout": "Ein ausgeblendeter Linienanker ist kein gelöschter Kurs.",
    "prompt": "Mehrere neue Schübe enden an der Grenze über einer früheren Einzelspitze. Was prüfst du?",
    "answers": [
      {
        "label": "Ob jetzt der breitere Kanal die wiederholte Struktur beschreibt.",
        "explanation": "Richtig. Neue Tests können die äußere Referenz stützen."
      },
      {
        "label": "Ob die früheren Bars rückwirkend andere Preise hatten.",
        "explanation": "Die Daten bleiben unverändert."
      },
      {
        "label": "Ob jede engere Referenz für immer zwingend richtig bleibt.",
        "explanation": "Neue Struktur kann eine andere Kanalbreite sinnvoll machen."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Eine Kanalgrenze direkt aus Swingpunkten",
    "summary": "Schubextreme können eine eigene Grenze bilden.",
    "section": "Linienwahl",
    "scenario": "c14-11",
    "paragraphs": [
      "Die Kanalgrenze muss nicht aus einer kopierten Trendlinie entstehen. Du kannst im Bullenverlauf zwei Schubhochs direkt verbinden; im Bärenverlauf zwei Schubtiefs. Wähle die Punkte so, dass die übrigen Bars des betrachteten Abschnitts möglichst auf der inneren Seite liegen.",
      "Eine direkte Swingverbindung kann eine andere Steigung besitzen als die Trendseite. Dadurch können parallele, zusammenlaufende oder auseinanderlaufende Grenzen entstehen. Die Unterschiede sind Information über die Struktur, kein Zeichnungsfehler.",
      "Eine frei angenäherte Best-Fit-Linie ist eine weitere Orientierung, aber als Einstiegsbegründung meist schwächer als klare sichtbare Bezugspunkte. Nutze so wenige Linien wie nötig. Ein Chart mit vielen widersprüchlichen Varianten wird nicht genauer, nur schwerer zu lesen."
    ],
    "takeaways": [
      "Schubextreme können eine eigene Grenze bilden.",
      "Die Steigung muss nicht exakt zur Trendseite passen.",
      "Sichtbare Bezugspunkte sind besser prüfbar als eine beliebige Näherung."
    ],
    "callout": "Sichtbare Bezugspunkte sind besser prüfbar als eine beliebige Näherung.",
    "prompt": "Welche Verbindung ergibt eine direkte untere Bären-Kanalgrenze?",
    "answers": [
      {
        "label": "Nur eine waagerechte Linie durch den Schlusskurs.",
        "explanation": "Das ist keine direkte Verbindung der fallenden Schubtiefs."
      },
      {
        "label": "Zwei passende Swingtiefs im fallenden Abschnitt.",
        "explanation": "Richtig. Die untere Grenze kann eigenständig konstruiert werden."
      },
      {
        "label": "Zwei beliebige Punkte oberhalb aller Hochs.",
        "explanation": "Das beschreibt nicht die äußere Tiefseite."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Überschreitung und Keil oft gemeinsam lesen",
    "summary": "Keil und Kanalüberschreitung können dieselben Bars beschreiben.",
    "section": "Keile",
    "scenario": "c14-12",
    "paragraphs": [
      "Eine Umkehr nach dem Überschreiten der Kanalgrenze und eine Keilumkehr können denselben Vorgang beschreiben. Mehrere Schübe drängen in Trendrichtung, der letzte reicht über eine äußere Grenze, und anschließend übernimmt vorübergehend die Gegenseite.",
      "Nicht jeder Verlauf zeichnet ein sauberes Dreieck. Besonders eine parallel konstruierte Kanalgrenze kann eine Überschreitung zeigen, während die Keilform weniger deutlich wirkt. Prüfe deshalb Schübe und Reaktion, statt ausschließlich auf einen Musternamen zu warten.",
      "Zwei passende Namen sind nicht zwei unabhängige Bestätigungen. Wenn beide dieselben Bars beschreiben, zählen sie nicht doppelt. Für den Gegenplan bleiben eine überzeugende Reaktion, ein klarer Auslöser und ein tragbares Risiko nötig."
    ],
    "takeaways": [
      "Keil und Kanalüberschreitung können dieselben Bars beschreiben.",
      "Perfekte Geometrie ist nicht immer vorhanden.",
      "Doppelte Namen sind keine doppelten Belege."
    ],
    "callout": "Doppelte Namen sind keine doppelten Belege.",
    "prompt": "Ein Keilhoch überschreitet auch die Kanalgrenze. Wie zählst du diese Beobachtung?",
    "answers": [
      {
        "label": "Als garantierten Erfolg durch zwei Musternamen.",
        "explanation": "Namen beseitigen das Fehlschlagrisiko nicht."
      },
      {
        "label": "Als bedeutungslos, wenn kein perfektes Dreieck sichtbar ist.",
        "explanation": "Schübe und Reaktion können auch ohne perfekte Form relevant sein."
      },
      {
        "label": "Als zusammenhängende Struktur, nicht automatisch als zwei unabhängige Signale.",
        "explanation": "Richtig. Beide Namen können denselben Vorgang erfassen."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Früher gekaufte Rückläufe machen die Trendseite steiler",
    "summary": "Den zweiten Rücklauf mit der ursprünglichen Parallele vergleichen.",
    "section": "Keile · Entstehung",
    "scenario": "c14-13",
    "paragraphs": [
      "Nach zwei Aufwärtsschüben kann die obere Hochverbindung eine Kanalgrenze bestimmen. Eine Parallele durch das erste Rücklauftief zeigt, wo ein ähnlich tiefer nächster Rücklauf liegen würde. Diese Konstruktion liefert einen Vergleich für den zweiten Rücklauf.",
      "Dreht der zweite Rücklauf deutlich oberhalb der gedachten unteren Parallele, kaufen die Bullen früher. Gleichzeitig können Shortpositionen früher geschlossen werden. Beide Vorgänge lassen sich als stärkere Bereitschaft lesen, höhere Preise auf der Rücklaufseite zu akzeptieren.",
      "Verbindest du die beiden tatsächlichen Rücklauftiefs, steigt diese Trendlinie jetzt steiler als die obere Hochverbindung. Der Kanal wird enger. Die neue Steigung zeigt zuerst stärkere Aufwärtsdringlichkeit; sie ist noch kein Beweis, dass der nächste Schub scheitert."
    ],
    "takeaways": [
      "Den zweiten Rücklauf mit der ursprünglichen Parallele vergleichen.",
      "Ein höherer Rücklauf macht die Trendseite steiler.",
      "Dringlichkeit auf der Rücklaufseite beweist noch keinen Fehlschlag."
    ],
    "callout": "Dringlichkeit auf der Rücklaufseite beweist noch keinen Fehlschlag.",
    "prompt": "Der zweite Rücklauf dreht über der erwarteten unteren Parallele. Was verändert sich?",
    "answers": [
      {
        "label": "Die Verbindung der tatsächlichen Tiefs wird steiler.",
        "explanation": "Richtig. Die Käufer akzeptieren einen kleineren Rücklauf."
      },
      {
        "label": "Die alten Tiefpreise ändern sich.",
        "explanation": "Nur die neue Struktur ergänzt die Beobachtung."
      },
      {
        "label": "Der dritte Schub muss sofort scheitern.",
        "explanation": "Das muss erst an der Schubseite geprüft werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Alte Grenze oder neuer steiler Kanal?",
    "summary": "Zwei plausible obere Grenzen vor dem Test notieren.",
    "section": "Keile · Alternativen",
    "scenario": "c14-14",
    "paragraphs": [
      "Aus der steileren Trendlinie kannst du eine neue obere Parallele bilden. Jetzt stehen zwei plausible obere Bereiche zur Beobachtung: die ältere flachere Hochverbindung und die neue steilere Kanalgrenze. Das ist eine offene Strukturfrage, kein fertiger Short.",
      "Erreicht der nächste Schub die steilere Grenze mit starkem Anschluss, spricht das zunächst für einen stärkeren Kanal. Dreht er schon an der älteren Grenze, hat sich die frühere Kaufbereitschaft der Rückläufe nicht entsprechend in größere Aufwärtsschübe übersetzt.",
      "Wähle nicht im Nachhinein die Variante, an der der Kurs zufällig drehte. Notiere beide vor dem Test. So erkennst du, welche Reaktion deinen Plan wirklich verändert und welche Linie nur eine mögliche Erklärung geblieben ist."
    ],
    "takeaways": [
      "Zwei plausible obere Grenzen vor dem Test notieren.",
      "Stärkerer Kanal und Keil bleiben Alternativen.",
      "Die tatsächliche Reaktion trennt die Deutungen."
    ],
    "callout": "Die tatsächliche Reaktion trennt die Deutungen.",
    "prompt": "Warum zeichnest du die neue steilere Parallele zusätzlich?",
    "answers": [
      {
        "label": "Um den ursprünglichen Stop unbegrenzt nach oben zu verlegen.",
        "explanation": "Konstruktion und Risikogrenze sind getrennt."
      },
      {
        "label": "Um zu prüfen, ob der Markt einen stärkeren Kanal statt eines Keils bildet.",
        "explanation": "Richtig. Die Struktur kann sich weiter beschleunigen."
      },
      {
        "label": "Um schon vor dem Test einen sicheren Short zu erhalten.",
        "explanation": "Die zweite Linie schafft keine Sicherheit."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Wenn die nächste Spitze an der alten Grenze scheitert",
    "summary": "Frühe Rücklaufkäufe können am Schubende enttäuscht werden.",
    "section": "Keile · Reaktion",
    "scenario": "c14-15",
    "paragraphs": [
      "Dreht der dritte Aufwärtsschub an der älteren flacheren Grenze, obwohl die Rückläufe zuvor steiler wurden, entsteht ein Widerspruch: Die Käufer kamen früher, erreichten aber nicht die erhoffte höhere Schubgrenze. Ein sichtbarer Gegenbar kann zeigen, dass der zusätzliche Kaufdruck nicht weiterträgt.",
      "Gewinnmitnahmen von Longpositionen und neue Verkäufe können gleichzeitig wirken. Aus dem Chart lässt sich jedoch nicht ablesen, welcher Teilnehmer aus welchem Grund handelt. Sichtbar sind Rückkehr, Barstärke und Anschluss; die Erklärung über enttäuschte Käufer bleibt eine Deutung.",
      "Nach einer überzeugenden Keilreaktion wird häufig eine Korrektur mit zwei Abschnitten beobachtet. Das ist ein Szenario für die weitere Einordnung, kein zugesagtes Gewinnziel. Ein Stop darf nicht entfallen, weil ein zweiter Abwärtsschub erwartet wird."
    ],
    "takeaways": [
      "Frühe Rücklaufkäufe können am Schubende enttäuscht werden.",
      "Reaktion beobachten statt Motive als Tatsache behaupten.",
      "Zwei Korrekturabschnitte sind eine Erwartung, keine Pflicht."
    ],
    "callout": "Zwei Korrekturabschnitte sind eine Erwartung, keine Pflicht.",
    "prompt": "Was ist nach einer Drehung an der älteren Grenze direkt beobachtbar?",
    "answers": [
      {
        "label": "Jeder institutionelle Käufer hat dieselbe Meinung.",
        "explanation": "Ein Chart verrät keine einzelnen Motive."
      },
      {
        "label": "Der zweite Abwärtsschub ist schon garantiert.",
        "explanation": "Eine erwartete Korrektur muss sich erst entwickeln."
      },
      {
        "label": "Der Kurs kehrt zurück und zeigt möglicherweise Verkäuferanschluss.",
        "explanation": "Richtig. Das sind Daten aus den Bars."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Erster Gegenstoß, Extremtest, zweiter Abschnitt",
    "summary": "Erster Gegenbruch kann von einem Hochtest gefolgt werden.",
    "section": "Keile · Verlauf",
    "scenario": "c14-16",
    "paragraphs": [
      "Ein erster Abwärtsstoß nach einem Keilhoch kann die untere Trendseite brechen. Danach nehmen Verkäufer möglicherweise Gewinne mit und Käufer versuchen, den alten Aufwärtsverlauf wiederzubeleben. Daraus kann ein Anstieg zum früheren Hochbereich entstehen.",
      "Scheitert dieser Test mit erneuter Verkäuferreaktion, kann ein zweiter Abwärtsabschnitt folgen. Ein höheres, gleiches oder etwas tieferes Testhoch muss im Zusammenhang mit dem Gegenbruch gelesen werden. Der Abstand allein ersetzt kein Signal.",
      "Nach zwei Korrekturabschnitten ist die alte Keilidee weitgehend abgearbeitet. Nun kann eine Fortsetzung, eine Range oder eine neue Struktur entstehen. Bewerte neue Bars neu, statt den ursprünglichen Musternamen unbegrenzt als Begründung für weitere Shorts zu verwenden."
    ],
    "takeaways": [
      "Erster Gegenbruch kann von einem Hochtest gefolgt werden.",
      "Zweiter Abschnitt braucht neue Verkäuferreaktion.",
      "Nach der Korrektur beginnt eine neue Beurteilung."
    ],
    "callout": "Nach der Korrektur beginnt eine neue Beurteilung.",
    "prompt": "Nach zwei Abwärtsabschnitten wird der Verlauf seitwärts. Was ist sinnvoll?",
    "answers": [
      {
        "label": "Die neue Struktur beurteilen, statt den alten Keil unbegrenzt weiterzuhandeln.",
        "explanation": "Richtig. Ein Muster hat keine dauerhafte Gültigkeit."
      },
      {
        "label": "Weiter shorten, weil der alte Name bestehen bleibt.",
        "explanation": "Der aktuelle Verlauf kann inzwischen eine andere Struktur bilden."
      },
      {
        "label": "Alle neuen Bars ignorieren.",
        "explanation": "Gerade sie zeigen die nächste Phase."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Warum eine Überschreitung trotz erwarteter Umkehr entsteht",
    "summary": "Neue Trendorders und Positionsschließungen können denselben Druck erzeugen.",
    "section": "Marktmechanik",
    "scenario": "c14-17",
    "paragraphs": [
      "Ein letzter starker Schub kann durch neue Trendorders und das Schließen von Gegenpositionen verstärkt werden. Im Bullenfall sind sowohl neue Longkäufe als auch das Eindecken von Shorts Kauforders. Stopauslösungen können zu einer schnellen Ausdehnung beitragen.",
      "Die oft erzählte Erklärung über panische Anfänger ist damit noch nicht bewiesen. Gerade in großen Märkten handeln viele Teilnehmer mit unterschiedlichen Strategien und Gründen. Aus der Kerzenform lassen sich ihre Identität und Emotionen nicht zuverlässig ableiten.",
      "Für deine Entscheidung genügt die prüfbare Folge: starke Ausdehnung, fehlender weiterer Anschluss und eine sichtbare Gegenreaktion. Wenn Anschluss bleibt, kann die Beschleunigung weitergehen. Handle die Reaktion, statt eine dramatische Geschichte als Umkehrbeweis zu verwenden."
    ],
    "takeaways": [
      "Neue Trendorders und Positionsschließungen können denselben Druck erzeugen.",
      "Motive sind aus Bars nicht sicher erkennbar.",
      "Ausdehnung ohne Anschluss und Gegenreaktion prüfen."
    ],
    "callout": "Ausdehnung ohne Anschluss und Gegenreaktion prüfen.",
    "prompt": "Welche Aussage ist aus einem starken oberen Spike allein belegbar?",
    "answers": [
      {
        "label": "Es gibt ab sofort keinerlei Kauforders mehr.",
        "explanation": "Weitere Käufer können jederzeit auftreten."
      },
      {
        "label": "Der Kurs hat sich stark nach oben ausgedehnt.",
        "explanation": "Richtig. Die Identität und Motive der Käufer bleiben unbekannt."
      },
      {
        "label": "Alle Käufer sind unerfahren und panisch.",
        "explanation": "Das ist eine unbewiesene Erzählung."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Ständig neue Grenzen: Suche ich die Umkehr zu früh?",
    "summary": "Wiederholte Überschreitungen können Stärke zeigen.",
    "section": "Entscheidungsfehler",
    "scenario": "c14-18",
    "paragraphs": [
      "Wenn der Kurs jede obere Grenze überschreitet und du immer steilere Linien zeichnest, kann der Trend stärker werden, während du weiter nach einem Short suchst. Neue Linien sind dann kein Nachweis, dass die Umkehr endlich unmittelbar bevorsteht.",
      "Unterscheide eine ehrliche Strukturaktualisierung von der Suche nach einem Grund für die gewünschte Richtung. Solange starke Trendbars Anschluss bekommen, fehlt die bestätigte Gegenreaktion. Eine verlorene Gegenposition wird durch eine höhere Linie nicht besser begründet.",
      "Wechsle zurück zur Beobachtung der aktuellen Kontrolle. Du kannst mit Trendsetups arbeiten oder abwarten, wenn deren Risiko nicht passt. Wiederholte Gegenversuche und Nachkäufe gegen den Schub sind kein notwendiger Bestandteil des Lernens über Kanalgrenzen."
    ],
    "takeaways": [
      "Wiederholte Überschreitungen können Stärke zeigen.",
      "Neue Linie ist kein neues Umkehrversprechen.",
      "Eigene Richtungsfixierung rechtzeitig erkennen."
    ],
    "callout": "Eigene Richtungsfixierung rechtzeitig erkennen.",
    "prompt": "Du zeichnest zum vierten Mal eine steilere obere Grenze ohne Gegenreaktion. Was prüfst du?",
    "answers": [
      {
        "label": "Ob der vierte Versuch automatisch gewinnen muss.",
        "explanation": "Die Zahl deiner Versuche ist keine Marktinformation."
      },
      {
        "label": "Ob ich den Verlust durch größere Gegenpositionen sicher beheben kann.",
        "explanation": "Das erhöht das Risiko und bestätigt kein Setup."
      },
      {
        "label": "Ob ich gegen einen weiterhin stärker werdenden Trend argumentiere.",
        "explanation": "Richtig. Die neuen Bars können der gewünschten Umkehr widersprechen."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Am Extrem handeln verschiedene Strategien gegeneinander",
    "summary": "Jede Ausführung hat Käufer und Verkäufer.",
    "section": "Marktmechanik",
    "scenario": "c14-19",
    "paragraphs": [
      "Auch am späteren endgültigen Tief hat jeder Verkauf einen Käufer. Manche Verkäufer setzen eine bis dahin erfolgreiche Trendstrategie fort; andere sichern eine Position in einem anderen Markt ab. Käufer können neue Longs eröffnen oder Gewinne aus Shorts realisieren.",
      "Dass eine einzelne Order am endgültigen Tief verliert, beweist nicht, dass die gesamte Strategie unprofitabel ist. Eine Strategie kann viele frühere Schübe genutzt haben und trotzdem den letzten Wendepunkt verfehlen. Das endgültige Extrem ist vor der Folgereaktion nicht sicher bekannt.",
      "Hohes Volumen am Wendepunkt erklärt die Aktivität, garantiert aber keine Umkehr. Für diese Lernmethode stehen die Bars und ihre Reaktion im Vordergrund. Aussagen über bestimmte Teilnehmeranteile oder universelle institutionelle Absichten brauchst du für den konkreten Plan nicht."
    ],
    "takeaways": [
      "Jede Ausführung hat Käufer und Verkäufer.",
      "Der endgültige Wendepunkt ist erst später eindeutig.",
      "Volumen allein ist kein Richtungsbeweis."
    ],
    "callout": "Volumen allein ist kein Richtungsbeweis.",
    "prompt": "Warum kann eine sinnvolle Trendstrategie am letzten Tief einen Verlusttrade haben?",
    "answers": [
      {
        "label": "Sie konnte den endgültigen Wendepunkt noch nicht sicher kennen.",
        "explanation": "Richtig. Ein einzelner Verlust widerlegt nicht automatisch die gesamte Strategie."
      },
      {
        "label": "Weil am Tief kein Käufer existiert.",
        "explanation": "Ohne Gegenpartei gibt es keine Ausführung."
      },
      {
        "label": "Weil hohes Volumen immer eine Richtung garantiert.",
        "explanation": "Volumen misst Aktivität, keine garantierte Fortsetzung."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Chartfall 14.1: Zwei Wege zur Kanalgrenze",
    "summary": "Parallele und direkte Swingverbindung unterscheiden.",
    "section": "Chartfall 14.1",
    "scenario": "c14-20",
    "paragraphs": [
      "Der erste Chartfall vergleicht die verschobene Parallele einer Trendlinie mit einer eigenständigen Verbindung von Schubextremen. Beide beschreiben die äußere Seite des Verlaufs, können aber verschiedene Steigungen und Testbereiche liefern.",
      "Im eigenen Beispiel links entsteht die obere Grenze aus der Verbindung zweier Rücklauftiefs. Rechts werden zwei Hochpunkte direkt verbunden. Verlängere beide Varianten erst nach ihren sichtbaren Ankern. Ein späterer Schub kann die eine Grenze überschreiten und die andere noch nicht erreichen.",
      "Diese Abweichung zeigt, warum die Linie eine Beobachtungshilfe bleibt. Prüfe, ob eine Rückkehr mit Gegenanschluss entsteht oder ob der Trend die Grenze mit Stärke überwindet. Die Zahl eingezeichneter Linien ersetzt diese Reaktion nicht."
    ],
    "takeaways": [
      "Parallele und direkte Swingverbindung unterscheiden.",
      "Verschiedene Steigungen ergeben verschiedene Tests.",
      "Rückkehr oder Beschleunigung an jeder Variante beobachten."
    ],
    "callout": "Rückkehr oder Beschleunigung an jeder Variante beobachten.",
    "prompt": "Zwei Konstruktionen liefern unterschiedliche Grenzen. Was ist der nächste sinnvolle Schritt?",
    "answers": [
      {
        "label": "Beide Grenzen als sicheren Doppelbeweis zählen.",
        "explanation": "Sie sind alternative Konstruktionen derselben Struktur."
      },
      {
        "label": "Ihre Anker offen benennen und die neue Kursreaktion prüfen.",
        "explanation": "Richtig. Die Abweichung ist kein Grund für eine automatische Order."
      },
      {
        "label": "Die günstigere Linie nach dem Ergebnis heimlich auswählen.",
        "explanation": "Das verfälscht die damalige Entscheidungsgrundlage."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Die letzte Flagge kann eine spätere Steigung andeuten",
    "summary": "Alte Flaggenneigung kann grob zur neuen Richtung passen.",
    "section": "Chartfall 14.2 · Alte Referenz",
    "scenario": "c14-21",
    "paragraphs": [
      "Eine späte Korrektur im alten Trend kann bereits in die spätere Gegenrichtung geneigt sein. Ihre Steigung lässt sich als grobe Orientierung für einen folgenden Gegenkanal betrachten. Der letzte kleine Abschnitt des alten Verlaufs enthält dann einen Hinweis auf die neue Richtung.",
      "Im zweiten Chartfall dient die Neigung dieser späten Flagge als ältere Referenz für den späteren Abwärtsschub. Das ist eine Nebenbeobachtung. Es braucht keine exakte Übereinstimmung, und daraus entsteht keine verlässliche Vorhersage des neuen Kanals.",
      "Neuere Bars, ein klarer Trendlinienbruch und die nächste Reaktion sind für einen Einstieg meist wichtiger. Eine weit zurückliegende Linie sollte keine aktuelle Auslösung ersetzen. Verwende die alte Neigung allenfalls als zusätzliche Orientierung mit begrenztem Gewicht."
    ],
    "takeaways": [
      "Alte Flaggenneigung kann grob zur neuen Richtung passen.",
      "Diese Beobachtung hat begrenzten Entscheidungswert.",
      "Aktuelle Bars haben Vorrang."
    ],
    "callout": "Aktuelle Bars haben Vorrang.",
    "prompt": "Die alte Flaggenneigung passt zu einem späteren Bärenkanal. Was bedeutet das?",
    "answers": [
      {
        "label": "Ein sicherer Einstieg ohne neue Bars.",
        "explanation": "Die alte Steigung liefert keine aktuelle Auslösung."
      },
      {
        "label": "Der neue Kanal muss exakt dieselbe Breite besitzen.",
        "explanation": "Eine grobe Neigung sagt nichts über eine identische Breite."
      },
      {
        "label": "Eine ergänzende Orientierung, die aktuelle Signale nicht ersetzt.",
        "explanation": "Richtig. Die Übereinstimmung bleibt eine Nebenbeobachtung."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Neues Hoch, aber bereits veränderte Struktur",
    "summary": "Ein neues Hoch kann ein Test nach dem Gegenbruch sein.",
    "section": "Chartfall 14.2 · Übergang",
    "scenario": "c14-22",
    "paragraphs": [
      "Ein Markt kann nach dem ersten kräftigen Gegenstoß noch einmal ein höheres Hoch erreichen. Rückblickend kann dieser Hochtest bereits zu einer beginnenden Gegenstruktur gehören, statt den alten Bullenverlauf uneingeschränkt zu bestätigen.",
      "Für die damalige Entscheidung bleibt beides offen. Prüfe den ersten Abwärtsabschnitt, die Qualität des erneuten Anstiegs und die Reaktion am Hoch. Ein höherer Preis allein sagt weniger als das Zusammenspiel von Gegenbruch und schwachem oder starkem Test.",
      "Im Replay darfst du den später erkennbaren Beginn des Bärenkanals nicht als vorher bekannte Tatsache behandeln. Notiere zuerst die beobachtete Störung. Erst nach weiteren Verkäuferbars kannst du begründet sagen, dass die Gegenstruktur tatsächlich mehr Gewicht bekommt."
    ],
    "takeaways": [
      "Ein neues Hoch kann ein Test nach dem Gegenbruch sein.",
      "Preisextrem und Strukturqualität gemeinsam lesen.",
      "Rückblickende Klarheit nicht vorwegnehmen."
    ],
    "callout": "Rückblickende Klarheit nicht vorwegnehmen.",
    "prompt": "Nach einem Gegenbruch entsteht ein knapp höheres Hoch. Was prüfst du?",
    "answers": [
      {
        "label": "Die Qualität des Tests und die folgende Reaktion.",
        "explanation": "Richtig. Ein Preisextrem beantwortet nicht allein die Strukturfrage."
      },
      {
        "label": "Das höhere Hoch beweist automatisch ungebrochene Stärke.",
        "explanation": "Der vorherige Gegenbruch bleibt relevant."
      },
      {
        "label": "Der spätere Verlauf war schon vorher sicher bekannt.",
        "explanation": "Das wäre rückwirkend verwendete Information."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Früher Käuferstoß im bestehenden Bärenkanal",
    "summary": "Den bestehenden Kanal über den Tageswechsel mitlesen.",
    "section": "Chartfall 14.2 · Tagesbeginn",
    "scenario": "c14-23",
    "paragraphs": [
      "Der zweite Chartfall setzt einen bereits vorhandenen Bärenkanal über den Tageswechsel fort. Der erste neue Bar kann unter die Kanalgrenze stoßen und kräftig nach oben drehen. Das ist eine Käuferreaktion, trifft aber auf eine noch bestehende Abwärtsstruktur.",
      "Eine erste Umkehr kann nach wenigen Bars auslaufen und einen Rücklauf für einen neuen Short bilden. Prüfe daher, ob die Käufer auch die obere Trendseite überwinden und Anschluss bekommen. Eine einzelne kräftige Kerze hebt den vorherigen Kanal nicht automatisch auf.",
      "Später kann ein Trendlinienbruch zusammen mit einem erneuten Versuch nach einem Tiefausbruch eine andere Longidee ergeben. Diese spätere Auslösung ist eigenständig zu beurteilen. Früh gescheiterte Käufer und später bestätigte Käufer müssen nicht denselben Plan haben."
    ],
    "takeaways": [
      "Den bestehenden Kanal über den Tageswechsel mitlesen.",
      "Erste Reaktion kann nur ein Rücklauf sein.",
      "Spätere bestätigte Auslösung gesondert beurteilen."
    ],
    "callout": "Spätere bestätigte Auslösung gesondert beurteilen.",
    "prompt": "Ein erster starker Käuferbar entsteht in einem Bärenkanal. Was fehlt noch?",
    "answers": [
      {
        "label": "Ein späterer Tiefpreis muss rückwirkend als Stop gelten.",
        "explanation": "Ein Plan braucht damals bekannte Informationen."
      },
      {
        "label": "Die Prüfung von Gegenbruch und Käuferanschluss.",
        "explanation": "Richtig. Die erste Reaktion ist noch kein bestätigter neuer Trend."
      },
      {
        "label": "Nichts, der Bärenkanal ist automatisch gelöscht.",
        "explanation": "Der bisherige Verlauf bleibt Teil des Kontexts."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Chartfall 14.3: Lange Parallele, später Tieftest",
    "summary": "Älterer Außenanker kann eine lange Parallele bestimmen.",
    "section": "Chartfall 14.3 · Linienwahl",
    "scenario": "c14-24",
    "paragraphs": [
      "Im dritten Chartfall wird eine fallende Hochverbindung kopiert und an einem früheren Tief verankert. Dieser Tiefanker liegt außerhalb der beiden Hochpunkte. Die verlängerte untere Grenze beschreibt einen breiteren Abschnitt des Bärenverlaufs.",
      "Daneben kann eine direkte Verbindung zweier Tiefs eine andere untere Grenze ergeben. Ein späterer Tieftest unterschreitet die direkte Linie, erreicht die verschobene Parallele aber noch nicht. Beide Aussagen können gleichzeitig richtig sein, weil ihre Konstruktionen verschieden sind.",
      "Kennzeichne den Unterschied, bevor du daraus eine Umkehr ableitest. Eine überzeugende Käuferreaktion würde die Idee stützen; eine fehlende Überschreitung der breiteren Grenze bleibt dennoch sichtbar. Ein Gegenplan darf diesen schwächeren Beleg nicht heimlich als perfekten Kanaltest ausgeben."
    ],
    "takeaways": [
      "Älterer Außenanker kann eine lange Parallele bestimmen.",
      "Ein Tief kann nur eine der Grenzen unterschreiten.",
      "Abweichende Konstruktionen offen dokumentieren."
    ],
    "callout": "Abweichende Konstruktionen offen dokumentieren.",
    "prompt": "Ein Tief unterschreitet die direkte Linie, aber nicht die breitere Parallele. Was ist korrekt?",
    "answers": [
      {
        "label": "Beide wurden überschritten, weil es ein neues Tief gibt.",
        "explanation": "Ein neues Tief kann oberhalb einer fallenden Grenze bleiben."
      },
      {
        "label": "Die breitere Linie wird rückwirkend verschoben, damit der Test perfekt ist.",
        "explanation": "Das verfälscht die vorher bekannte Referenz."
      },
      {
        "label": "Nur die direkte Grenze wurde überschritten.",
        "explanation": "Richtig. Jede Variante muss an ihrer tatsächlichen Lage beurteilt werden."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Ein neuer Schub ist mehr als ein naher Nachbarbar",
    "summary": "Barzahl und Zahl eigenständiger Schübe unterscheiden.",
    "section": "Chartfall 14.3 · Testqualität",
    "scenario": "c14-25",
    "paragraphs": [
      "Wenn die beiden Anker einer Tiefverbindung weit auseinanderliegen und der neue Test direkt neben dem zweiten Anker entsteht, kann dieser Test noch zum selben Schub gehören. Drei markierte Bars sind deshalb nicht automatisch drei getrennte Abwärtsabschnitte.",
      "Eine Grenze ist aussagekräftiger, wenn spätere eigenständige Schübe sie erneut prüfen. Betrachte die Rückläufe zwischen den Tiefs: Haben sie die vorherige Bewegung erkennbar unterbrochen? Im dritten Chartfall bilden die späten Tiefpunkte eine zusammenhängende Folge kleinerer Schübe.",
      "Eine schwächere Linienbestätigung schließt eine Käuferidee nicht grundsätzlich aus. Dann braucht sie andere sichtbare Gründe und einen passenden Plan. Halte im Journal getrennt fest, welche Information der Linie und welche der aktuellen Barstruktur entstammt."
    ],
    "takeaways": [
      "Barzahl und Zahl eigenständiger Schübe unterscheiden.",
      "Rückläufe zwischen Tests prüfen.",
      "Schwache Linienbestätigung ehrlich benennen."
    ],
    "callout": "Schwache Linienbestätigung ehrlich benennen.",
    "prompt": "Warum ist ein Test direkt nach dem zweiten Linienanker weniger unabhängig?",
    "answers": [
      {
        "label": "Er kann noch Teil desselben Schubs sein.",
        "explanation": "Richtig. Eine zusätzliche Kerze ist nicht automatisch ein eigener Bewegungsabschnitt."
      },
      {
        "label": "Weil zwei benachbarte Bars nie Tiefs bilden können.",
        "explanation": "Tiefs können benachbart sein; ihre Unabhängigkeit ist die Frage."
      },
      {
        "label": "Weil jede lange Linie automatisch falsch ist.",
        "explanation": "Eine lange Linie kann sinnvoll sein, braucht aber passende Tests."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Kleinere neue Tiefschritte und ein überschaubares Signal",
    "summary": "Kleinere neue Tiefschritte zeigen weniger Ausdehnung.",
    "section": "Chartfall 14.3 · Abnehmender Druck",
    "scenario": "c14-26",
    "paragraphs": [
      "Ein fallender Verlauf kann neue Tiefs machen, obwohl jeder weitere Tiefschritt kleiner ausfällt. Die Verkäufer erreichen noch tiefere Preise, gewinnen dabei aber weniger zusätzlichen Raum. Das wird als schrumpfende Treppe beschrieben.",
      "Im dritten Chartfall kommt diese nachlassende Ausdehnung zu einem kleinen Signalbar hinzu. Ein kleiner Bar kann einen näheren strukturellen Stop ermöglichen und dadurch das Verhältnis von möglichem Ertrag zu Risiko verbessern. Er erhöht nicht automatisch die Erfolgswahrscheinlichkeit.",
      "Prüfe Zielraum, Auslösung und mögliche Fehlschläge zusammen. Ein enger Stop kann auch leichter erreicht werden. Setze die Positionsgröße aus dem geplanten Geldrisiko fest und vergrößere sie nicht allein deshalb, weil das geometrische Verhältnis attraktiv aussieht."
    ],
    "takeaways": [
      "Kleinere neue Tiefschritte zeigen weniger Ausdehnung.",
      "Kleiner Signalbar kann die Stopdistanz begrenzen.",
      "Gutes Verhältnis und hohe Wahrscheinlichkeit sind verschieden."
    ],
    "callout": "Gutes Verhältnis und hohe Wahrscheinlichkeit sind verschieden.",
    "prompt": "Ein kleiner Signalbar ermöglicht einen engen Stop. Was ist damit noch nicht bewiesen?",
    "answers": [
      {
        "label": "Dass eine konkrete Auslösung geplant werden kann.",
        "explanation": "Das ist möglich, wenn die Struktur und der Plan passen."
      },
      {
        "label": "Eine hohe Erfolgswahrscheinlichkeit.",
        "explanation": "Richtig. Stopdistanz und Trefferwahrscheinlichkeit sind verschiedene Größen."
      },
      {
        "label": "Dass der Bar tatsächlich klein ist.",
        "explanation": "Seine Größe ist direkt sichtbar."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Gap, Verkaufsschub und spätere Korrektur",
    "summary": "Großes Gap als Ausbruch in den Kontext nehmen.",
    "section": "Chartfall 14.3 · Tagesverlauf",
    "scenario": "c14-27",
    "paragraphs": [
      "Eine große Abwärtslücke ist bereits ein Ausbruch. Im dritten Chartfall folgen ein enger Eröffnungsbereich und ein kräftiger Verkäuferschub. Ein ungewöhnlich großer später Bar nach viel Abwärtsstrecke kann zugleich eine späte Ausdehnung anzeigen, statt nur frische Trendstärke.",
      "Eine starke Käuferreaktion kann dann eine seitwärts bis aufwärts gerichtete Korrektur mit zwei Abschnitten vorbereiten. Als grobe Orientierung kann diese Phase zehn oder mehr Bars beanspruchen; das ist weder eine Mindesthaltepflicht noch ein garantiertes Zeitfenster.",
      "Eine enge Range kann anschließend an ihrer oberen Seite scheitern und ungefähr ein Doppelhoch bilden. Der Tag kann zwischen höheren und tieferen Balancebereichen wechseln und dennoch nahe dem Tageshoch eröffnen und nahe dem Tagestief schließen. Seitwärtsphasen schließen eine insgesamt fallende Tagesentwicklung nicht aus."
    ],
    "takeaways": [
      "Großes Gap als Ausbruch in den Kontext nehmen.",
      "Später großer Bar kann Überdehnung zeigen.",
      "Balancebereiche können Teil eines fallenden Tages sein."
    ],
    "callout": "Balancebereiche können Teil eines fallenden Tages sein.",
    "prompt": "Warum kann ein Tag trotz langer Seitwärtsphasen insgesamt abwärts gerichtet sein?",
    "answers": [
      {
        "label": "Seitwärtsphasen bedeuten immer einen steigenden Tag.",
        "explanation": "Sie legen die Richtung des Gesamttages nicht fest."
      },
      {
        "label": "Ein Gap hat keine Bedeutung für den Anfangskontext.",
        "explanation": "Eine große Lücke ist bereits eine Ausdehnung beziehungsweise ein Ausbruch."
      },
      {
        "label": "Die Balancebereiche können nacheinander auf tieferen Niveaus liegen.",
        "explanation": "Richtig. Der Tagesverlauf und einzelne Phasen sind verschiedene Betrachtungen."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Dein Beobachtungsplan an der Kanalgrenze",
    "summary": "Anker und Konstruktionsart vor dem Test notieren.",
    "section": "Abschluss · Replay",
    "scenario": "c14-28",
    "paragraphs": [
      "Halte vor dem nächsten Schub fest, welche Zeitebene und welche bereits sichtbaren Anker deine Kanalgrenze bestimmen. Notiere, ob sie eine Parallele, eine direkte Swingverbindung oder eine begründete Näherung ist. So lässt sich der spätere Test nachvollziehbar beurteilen.",
      "Decke weitere Bars schrittweise auf. Beschreibe Überschreitung, Rückkehr und Anschluss getrennt. Eine Rückkehr mit Gegenreaktion kann einen Gegenplan vorbereiten; starker Anschluss außerhalb kann eine Beschleunigung zeigen. Bei widersprüchlichen Bars ist Abwarten eine vollständige Entscheidung.",
      "Für jede konkrete Order brauchst du eine Auslösung, eine klare Verlustgrenze und genug Zielraum. Nach einem Fehlschlag bewertet eine neue Linie nur die neue Struktur. Sie erlaubt kein ungeplantes Aufstocken oder weiteres Verschieben des Stops. Die Übung beurteilt die Entscheidung mit damaligen Informationen, nicht nur den späteren Gewinn."
    ],
    "takeaways": [
      "Anker und Konstruktionsart vor dem Test notieren.",
      "Überschreitung, Rückkehr und Anschluss trennen.",
      "Neue Zeichnung ist keine Erlaubnis für mehr Risiko."
    ],
    "callout": "Neue Zeichnung ist keine Erlaubnis für mehr Risiko.",
    "prompt": "Welche Notiz macht den Replaytest überprüfbar?",
    "answers": [
      {
        "label": "Diese sichtbaren Anker bestimmen die Grenze; Rückkehr, Anschluss und Risiko prüfe ich danach.",
        "explanation": "Richtig. Das trennt bekannte Information von späterem Ergebnis."
      },
      {
        "label": "Ich ziehe die Linie später durch den endgültigen Wendepunkt.",
        "explanation": "Das nutzt die Zukunft als frühere Begründung."
      },
      {
        "label": "Jede weitere Überschreitung erlaubt eine größere Gegenposition.",
        "explanation": "Das bestätigt keinen Gegenplan und erhöht das Risiko."
      }
    ],
    "correct": 0
  }
];

export const chapterFourteenLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-14-${number}`;
  return {
    id: `price-action-trends.chapter-14.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 14 · ${d.section}`,
    sourceAnchors: [`Kapitel 14 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 14 · Kanalgrenzen',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Kanalgrenze und Reaktion beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
