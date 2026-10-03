import type { ChapterSixteenScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterSixteenScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Mikro-Trendlinie: kurze Verbindung, gleicher Grundgedanke",
    "summary": "Mikro beschreibt einen kurzen Abschnitt auf jeder Zeitebene.",
    "section": "Grundlagen",
    "scenario": "c16-01",
    "paragraphs": [
      "Eine Mikro-Trendlinie beschreibt einen kurzen Abschnitt aus wenigen aufeinanderfolgenden Bars. Meist umfasst sie ungefähr zwei bis zehn Bars. Viele Bars liegen nahe an der Linie; sie macht sichtbar, wie wenig Raum die Gegenseite in diesem Abschnitt gewinnt.",
      "Im Bullenfall liegt die Linie an den steigenden Tiefbereichen, im Bärenfall an den fallenden Hochbereichen. Das Grundprinzip ist dasselbe wie bei einer längeren Trendlinie. Mikro meint die kleine betrachtete Struktur, nicht zwingend eine bestimmte Chartzeitebene.",
      "Nimm bekannte Punkte und benenne den Abschnitt. Eine kleine Linie darfst du im Replay nicht an einem Bar verankern, der erst später sichtbar wird. Ihre Relevanz hängt von Trendstärke und Kontext ab, nicht allein von der kurzen Länge."
    ],
    "takeaways": [
      "Mikro beschreibt einen kurzen Abschnitt auf jeder Zeitebene.",
      "Trendseite wie bei größeren Linien bestimmen.",
      "Nur bereits sichtbare Bezugspunkte nutzen."
    ],
    "callout": "Nur bereits sichtbare Bezugspunkte nutzen.",
    "prompt": "Was bedeutet Mikro bei einer Mikro-Trendlinie?",
    "answers": [
      {
        "label": "Eine kurze betrachtete Barstruktur, nicht zwingend ein Ein-Minuten-Chart.",
        "explanation": "Richtig. Die Struktur kann auf verschiedenen Zeitebenen auftreten."
      },
      {
        "label": "Sie ist ausschließlich im Tickchart erlaubt.",
        "explanation": "Die Grundidee gilt auf jeder Zeitebene."
      },
      {
        "label": "Sie garantiert einen kleinen Verlust.",
        "explanation": "Das Risiko hängt vom konkreten Plan und der Menge ab."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Mikrokanal: kaum Platz für Rückläufe",
    "summary": "Fehlende oder winzige Rückläufe kennzeichnen den Mikrokanal.",
    "section": "Grundlagen",
    "scenario": "c16-02",
    "paragraphs": [
      "Passt zur Mikro-Trendlinie eine gegenüberliegende Grenze, entsteht ein sehr enger Mikrokanal. Sein wichtigstes Merkmal sind fehlende oder nur seltene winzige Rückläufe. Der Trend läuft über mehrere Bars, ohne der Gegenseite einen normalen größeren Abschnitt zu geben.",
      "Ein gewöhnlicher Kanal enthält deutliche Pullbacks. Ein Mikrokanal kann dagegen Bar für Bar weiterarbeiten, auch wenn sich die kleinen Körper teilweise überlappen. Überlappung allein macht ihn deshalb nicht automatisch schwach; die Größe der Rückgabe zählt mit.",
      "Das erklärt, warum die erste sichtbare Gegenkerze nicht sofort eine große Umkehr beweist. Sie kann bloß der ersehnte erste Rücklauf sein. Prüf ihre Stärke und den anschließenden Test, bevor du die aktuelle Kontrolle aufgibst."
    ],
    "takeaways": [
      "Fehlende oder winzige Rückläufe kennzeichnen den Mikrokanal.",
      "Kleine Barüberlappung und großer Gegenabschnitt sind verschieden.",
      "Erste Gegenkerze ist noch kein großer Kontrollwechsel."
    ],
    "callout": "Die erste Gegenkerze ist noch kein großer Kontrollwechsel.",
    "prompt": "Was unterscheidet den Mikrokanal vom gewöhnlichen Kanal?",
    "answers": [
      {
        "label": "Jede Körperüberlappung macht ihn ungültig.",
        "explanation": "Auch kleine überlappende Bars können einen starken engen Verlauf bilden."
      },
      {
        "label": "Rückläufe fehlen weitgehend oder bleiben sehr klein.",
        "explanation": "Richtig. Der Verlauf ist besonders eng."
      },
      {
        "label": "Er besitzt garantiert nur zwei Bars.",
        "explanation": "Die Länge kann variieren."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Mehr Bars, klare Körper und kleine Tails",
    "summary": "Länge und Barqualität gemeinsam lesen.",
    "section": "Trendstärke",
    "scenario": "c16-03",
    "paragraphs": [
      "Eine längere Folge mit gerichteten Körpern und kleinen Tails zeigt mehr Kontrolle als wenige unentschlossene Dojis. Im Bullen-Mikrokanal geben die Käufer wenig Raum ab, im Bären-Mikrokanal die Verkäufer. Die Qualität der Bars ergänzt die Länge.",
      "Je stärker diese Folge ist, desto eher kann der erste Gegenversuch als Pullback scheitern. Das ist eine strukturelle Erwartung, keine universelle Prozentzahl und keine Zusage für die nächste Order. Ein kräftiger Gegenstoß mit Anschluss kann die Erwartung widerlegen.",
      "Vergleiche den neuen Rücklauf mit den bisher üblichen Unterbrechungen. Eine sehr große Gegenkerze hat anderes Gewicht als ein kleiner Pausenbar. Halte den Verlustschutz trotzdem fest; eine starke Vorgeschichte erlaubt keinen grenzenlosen Stop."
    ],
    "takeaways": [
      "Länge und Barqualität gemeinsam lesen.",
      "Starker Mikrokanal stützt eher das Scheitern des ersten Gegenversuchs.",
      "Neue Gegenstärke kann die Erwartung verändern."
    ],
    "callout": "Neue Gegenstärke kann die Erwartung verändern.",
    "prompt": "Welche Folge zeigt eher starke Kontrolle?",
    "answers": [
      {
        "label": "Nur ein kleiner Doji ohne Vorgeschichte.",
        "explanation": "Daraus folgt keine starke gerichtete Folge."
      },
      {
        "label": "Ein beliebig größer gezeichneter Bildschirmwinkel.",
        "explanation": "Skalierung allein zeigt keine Marktstärke."
      },
      {
        "label": "Mehrere klare Trendkörper mit kleinen Tails und kaum Rückgabe.",
        "explanation": "Richtig. Richtung, Dauer und geringe Gegenkraft stimmen überein."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Eine Folge oder zwei Mikrokanäle? Der Plan kann gleich bleiben",
    "summary": "Mehrere Benennungen können denselben Verlauf erfassen.",
    "section": "Einordnung",
    "scenario": "c16-04",
    "paragraphs": [
      "Ein enger Verlauf kann viele Bars laufen, kurz pausieren und danach ähnlich eng fortsetzen. Du kannst ihn als einen längeren engen Kanal oder als zwei Mikrokanäle mit kleinem Rücklauf dazwischen beschreiben.",
      "Der Name verändert die aktuelle Kontrolle nicht. Bleibt die Unterbrechung klein und der Trend bekommt Anschluss, ist die Fortsetzungsidee dieselbe. Ein neuer eigenständiger Gegenabschnitt würde dagegen eine andere Struktur schaffen.",
      "Verlier keine Zeit mit der perfekten Benennung. Notier die sichtbare Folge, den Pausenbar und die neue Reaktion. Der konkrete Einstieg braucht weiterhin Ort, Auslösung und Risiko; die Zahl deiner Musternamen ist kein zusätzlicher Beleg."
    ],
    "takeaways": [
      "Mehrere Benennungen können denselben Verlauf erfassen.",
      "Kleine Pause verändert nicht zwingend die Kontrolle.",
      "Barfolge wichtiger als Namensdiskussion."
    ],
    "callout": "Die Barfolge ist wichtiger als die Namensdiskussion.",
    "prompt": "Ein enger Trend pausiert einen Bar und setzt kräftig fort. Was ist sinnvoll?",
    "answers": [
      {
        "label": "Die unveränderte Kontrolle beurteilen, auch wenn die Benennung variieren kann.",
        "explanation": "Richtig. Der Plan hängt an den Bars."
      },
      {
        "label": "Die Richtung wechseln, sobald jemand zwei Mikrokanäle statt eines zählt.",
        "explanation": "Der Name allein ändert die Kursfolge nicht."
      },
      {
        "label": "Die Pause darf bei einem Stop ignoriert werden.",
        "explanation": "Tatsächliche Kurse bleiben für das Risiko relevant."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Mikrokanäle brauchen den größeren Marktkontext",
    "summary": "Lokale Form und größeren Kontext zusammen lesen.",
    "section": "Kontext",
    "scenario": "c16-05",
    "paragraphs": [
      "Ein Bullen-Mikrokanal kann im Bullenverlauf, in einer Range oder als Rücklauf im Bärentrend entstehen. Die lokale Richtung ist gleich, aber die plausible Auflösung und der Zielraum können sehr verschieden sein.",
      "Auch ein Ausbruch des Mikrokanals hat drei Möglichkeiten: Anschluss, rasche Rückkehr oder mehr Seitwärtshandel. Vergleiche die Stärke des Ausbruchs und der Gegenreaktion. Sind beide ähnlich überzeugend, liefert erst die weitere Folge klarere Information.",
      "Aus der kleinen Form kannst du nicht auf bestimmte Computerprogramme schließen. Sichtbar sind Preise, Barqualität und Reaktion, nicht die Absichten aller Teilnehmer. Der größere Kontext ist eine überprüfbare Entscheidungsgrundlage; eine Programmgeschichte ist nur eine Vermutung."
    ],
    "takeaways": [
      "Lokale Form und größerer Kontext zusammenlesen.",
      "Anschluss, Fehlschlag und Balance offenhalten.",
      "Unbekannte Programme nicht als Signal behandeln."
    ],
    "callout": "Unbekannte Programme nicht als Signal behandeln.",
    "prompt": "Was fehlt einem Bullen-Mikrokanal allein für eine Handelsentscheidung?",
    "answers": [
      {
        "label": "Eine Garantie, dass er immer oben ausbricht.",
        "explanation": "Die Richtung bleibt offen."
      },
      {
        "label": "Sein größerer Kontext, die Auslösung und das Risiko.",
        "explanation": "Richtig. Die Form kann in unterschiedlichen Umfeldern auftreten."
      },
      {
        "label": "Ein zwingender Nachweis des konkreten Handelsprogramms.",
        "explanation": "Das ist aus dem Chart nicht bekannt und für den Plan nicht nötig."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Gegen-Mikrokanal als Flagge in Trendrichtung handeln",
    "summary": "Ein Gegenkanal kann die letzte Flaggenphase bilden.",
    "section": "Kontext · Flaggen",
    "scenario": "c16-06",
    "paragraphs": [
      "Ein kleiner Bären-Mikrokanal im kräftigen Bullenverlauf kann die letzte Phase einer Bullenflagge sein. Ein guter Käufer-Signalbar mit Auslösung über seinem Hoch kann den Bruch dieses kleinen Gegenkanals vorbereiten.",
      "Im Bärenverlauf ist ein Bullen-Mikrokanal entsprechend eine mögliche Bärenflagge. Hier ist eine Verkäuferauslösung unter einem passenden Signalbar die Trendidee. Die lokale kleine Trendrichtung und die Richtung des größeren Plans sind bewusst verschieden.",
      "Nicht jeder Gegenkanal muss sofort enden. Ein zu früher Einstieg kann gegen weiterlaufendes Gegenmomentum erfolgen. Verlang die passende Reaktion am Ort der Flagge und genug Zielraum, statt jeden geometrischen Bruch blind zu handeln."
    ],
    "takeaways": [
      "Gegenkanal kann die letzte Flaggenphase bilden.",
      "Auslösung in Richtung der größeren Kontrolle prüfen.",
      "Lokaler Linienbruch allein ist noch kein fertiger Trade."
    ],
    "callout": "Ein lokaler Linienbruch allein ist noch kein fertiger Trade.",
    "prompt": "Ein enger Bärenpullback liegt im starken Bullenverlauf. Welche Idee passt eher?",
    "answers": [
      {
        "label": "Jede kleine Verkäuferauslösung als neuen großen Bärentrend handeln.",
        "explanation": "Das ignoriert den größeren Kontext."
      },
      {
        "label": "Die Gegenbars sind aus den Kursdaten zu löschen.",
        "explanation": "Sie bleiben reale Bewegung und Teil des Risikos."
      },
      {
        "label": "Eine Käuferauslösung aus der kleinen Bullenflagge prüfen.",
        "explanation": "Richtig. Sie richtet den Plan an der größeren Kontrolle aus."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Der erste Rücklauf im Bullen-Mikrokanal",
    "summary": "Das erste tiefere Bartief kann der erste Pullback sein.",
    "section": "Erster Gegenbruch",
    "scenario": "c16-07",
    "paragraphs": [
      "Nach mehreren fast ununterbrochenen Käuferbars warten manche Käufer auf den ersten günstigeren Rücklauf. Fällt erstmals ein Tief unter das Tief des vorherigen Bars, kann das deshalb mehr Käuferinteresse anziehen, statt sofort einen Bärentrend zu beginnen.",
      "Der Bar ist ein kleiner Gegenbruch des engen Verlaufs. Kehrt der Kurs danach über sein Hoch zurück, kann daraus ein High-1-Fortsetzungssetup entstehen. Der größere Bullenkontext und die Stärke der vorherigen Folge unterstützen diese Idee.",
      "Der Rücklauf kann aber auch mehr Verkäuferanschluss bekommen. Ein erstes tieferes Bartief ist weder Umkehrbeweis noch automatische Kauforder. Beobachte die Reaktion und plane den Verlustbereich, bevor du die mögliche Fortsetzung handelst."
    ],
    "takeaways": [
      "Erster tieferer Bartiefpunkt kann der erste Pullback sein.",
      "Rückkehr über den Pullbackbar kann High 1 vorbereiten.",
      "Vorherige Stärke ersetzt keinen Verlustschutz."
    ],
    "callout": "Vorherige Stärke ersetzt keinen Verlustschutz.",
    "prompt": "Warum kann das erste tiefere Bartief Käufer anziehen?",
    "answers": [
      {
        "label": "Es bietet nach der engen Aufwärtsfolge erstmals einen sichtbaren Rücklauf.",
        "explanation": "Richtig. Der Gegenbruch kann als Pullback behandelt werden."
      },
      {
        "label": "Weil jeder tiefere Tick garantiert der Tagestiefpunkt ist.",
        "explanation": "Das ist nicht belegbar."
      },
      {
        "label": "Weil Verkäufer ab jetzt unmöglich sind.",
        "explanation": "Der Gegenbruch kann auch weiter Anschluss finden."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "High 1 ist eine Auslösung, kein Freibrief",
    "summary": "High 1 und Ausbruchspullback können denselben Vorgang beschreiben.",
    "section": "Erster Gegenbruch",
    "scenario": "c16-08",
    "paragraphs": [
      "Ein gescheiterter Bruch unter dem Bullen-Mikrokanal kann eine Longidee über dem Hoch des Rücklaufbars liefern. High 1 ist der erste entsprechende Fortsetzungsversuch im Pullback. Hat der Mikrokanal zuvor ein altes Hoch überwunden, kann derselbe Ablauf auch ein Ausbruchspullback sein.",
      "Beide Namen können denselben Einstieg beschreiben und zählen nicht als zwei unabhängige Garantien. Prüf, wie stark die Käufer zurückkehren und welcher Bereich die Idee ungültig machen würde. Ein starker Verkäuferbar nach der Auslösung ist neue Information.",
      "Ein Stop über dem Signalbar bestätigt nur, dass dieser Preis gehandelt wurde. Er garantiert keinen weiteren Käuferanschluss. Menge und Ausstiegsgrenze müssen vor der Order zum geplanten Geldrisiko passen."
    ],
    "takeaways": [
      "High 1 und Ausbruchspullback können denselben Vorgang beschreiben.",
      "Auslösung und späterer Anschluss sind verschieden.",
      "Doppelte Namen bedeuten keine doppelte Gewissheit."
    ],
    "callout": "Doppelte Namen bedeuten keine doppelte Gewissheit.",
    "prompt": "High 1 und Ausbruchspullback benennen dieselben Bars. Wie wertest du das?",
    "answers": [
      {
        "label": "Als Grund, den Stop wegzulassen.",
        "explanation": "Der Verlustbereich bleibt erforderlich."
      },
      {
        "label": "Als zusammenhängenden Ablauf mit weiterhin offenem Fehlschlagrisiko.",
        "explanation": "Richtig. Die Namen liefern nicht automatisch unabhängige Belege."
      },
      {
        "label": "Als garantierten Gewinn durch zwei Signalnamen.",
        "explanation": "Namen beseitigen kein Risiko."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Erfahrene Einstiege vor dem ersten normalen Pullback",
    "summary": "Ein Trend lässt sich auch ohne normalen Rücklauf handeln.",
    "section": "Orderlogik",
    "scenario": "c16-09",
    "paragraphs": [
      "Erfahrene Trader können schon während eines starken Mikrokanals Trendpositionen eröffnen, etwa an gerichteten Schlüssen oder mit Limits nahe kurzen Rückgabezonen. Sie warten nicht zwingend auf einen großen Pullback, der in diesem Verlauf vielleicht lange ausbleibt.",
      "Bisherige Rücklaufgrößen können dabei als Orientierung dienen. Ein späterer Einstieg trägt trotzdem das Risiko, am Ende der Folge zu kaufen. Frühere profitable Teile machen die letzte Order nicht sicher und erlauben kein unbegrenztes Ergänzen.",
      "Diese Beschreibung erklärt mögliche Orders innerhalb des engen Kanals. Sie ist kein Auftrag, jede Kerze zu handeln. Als Anfänger kannst du auf eine klare bestätigte Reaktion warten oder auslassen, wenn ein vorab begrenzter Plan nicht passt."
    ],
    "takeaways": [
      "Ein Trend kann ohne normalen Rücklauf gehandelt werden.",
      "Spätester Einstieg kann trotzdem verlieren.",
      "Jeder Teil braucht einen begrenzten Gesamtplan."
    ],
    "callout": "Jeder Teil braucht einen begrenzten Gesamtplan.",
    "prompt": "Warum ist eine letzte Longorder nach vielen früheren Gewinnen nicht automatisch sicher?",
    "answers": [
      {
        "label": "Weil die bisherigen Gewinne nie stattgefunden haben.",
        "explanation": "Sie können real sein; die neue Order ist trotzdem eigenständig."
      },
      {
        "label": "Weil Limits grundsätzlich nie ausgeführt werden.",
        "explanation": "Ausführung ist möglich, garantiert aber keine passende Folgerichtung."
      },
      {
        "label": "Der endgültige Rücklauf kann gerade danach beginnen.",
        "explanation": "Richtig. Frühere Gewinne ändern das Risiko der neuen Order nicht."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Am oberen Rangerand kann High 1 zur Falle werden",
    "summary": "Der Rangeort kann einen sonst plausiblen Long schwächen.",
    "section": "Kontext · Balance",
    "scenario": "c16-10",
    "paragraphs": [
      "Ein Bullen-Mikrokanal am oberen Ende einer größeren Range hat weniger Raum als derselbe Verlauf in einem offenen Bullenabschnitt. Ein erster unterer Bruch kann zurückkehren, aber der folgende Longversuch kann schon nach wenigen Bars wieder stocken.",
      "Eine Verkäuferreaktion nach einem kleinen höheren oder gleichen Hoch kann dann ein Mikro-Doppelhoch oder einen Ausbruchspullback des ursprünglichen Gegenbruchs bilden. Die neue Hochzahl allein widerlegt den Verkäuferplan nicht.",
      "Prüf den Rangeort, die Stärke des Rückanstiegs und den tatsächlichen Gegenanschluss. Für Anfänger ist ein automatischer Richtungswechsel aus jeder kleinen Falle zu unübersichtlich. Schließe einen gescheiterten Plan nach seinen Regeln und behandle eine neue Gegenidee eigenständig."
    ],
    "takeaways": [
      "Rangeort kann einen sonst plausiblen Long schwächen.",
      "Höherer Hochtest kann zum Gegenpullback gehören.",
      "Gescheiterten Long und neue Shortidee getrennt planen."
    ],
    "callout": "Gescheiterten Long und neue Shortidee getrennt planen.",
    "prompt": "Ein High-1-Long stockt am oberen Rangeende und dreht kräftig ab. Was ist neu?",
    "answers": [
      {
        "label": "Die Fortsetzungsidee kann zur Käuferfalle geworden sein.",
        "explanation": "Richtig. Ort und Verkäuferreaktion verändern die Einordnung."
      },
      {
        "label": "High 1 darf grundsätzlich nie scheitern.",
        "explanation": "Auch dieses Setup hat Fehlschläge."
      },
      {
        "label": "Ein höheres Hoch garantiert weiterhin Käuferkontrolle.",
        "explanation": "Die Folgereaktion kann dem widersprechen."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Wenn der Fehlschlag des Gegenbruchs ebenfalls scheitert",
    "summary": "Bruch, Fehlschlag und Fehlschlag des Fehlschlags nacheinander lesen.",
    "section": "Doppelte Fehlschläge",
    "scenario": "c16-11",
    "paragraphs": [
      "Zuerst bricht der Kurs unter einen Bullen-Mikrokanal. Dann kehrt er nach oben zurück und löst einen möglichen Fortsetzungskauf aus. Dreht er anschließend erneut kräftig nach unten, hat auch der erste Fehlschlag seinen Anschluss nicht gehalten.",
      "Für die Verkäufer kann die Rückkehr nun wie ein Ausbruchspullback des ursprünglichen unteren Bruchs aussehen. Sie kann ein tieferes oder sogar höheres Testhoch bilden. Die Abfolge aus Bruch, Rückkehr und neuem Gegenanschluss erklärt die Struktur besser als ein einzelner Hochpreis.",
      "Ein Ausstieg aus dem Long und ein neuer Short sind zwei Entscheidungen mit eigenen Risiken. Du musst nicht automatisch drehen. Wenn der neue Verlauf vor allem überlappt und keine klare Auslösung liefert, bleibt Abwarten eine vollständige Entscheidung."
    ],
    "takeaways": [
      "Bruch, Fehlschlag und Fehlschlag des Fehlschlags nacheinander lesen.",
      "Höherer Testpreis kann trotzdem ein Gegenpullback sein.",
      "Automatischer Positionswechsel ist nicht erforderlich."
    ],
    "callout": "Ein automatischer Positionswechsel ist nicht erforderlich.",
    "prompt": "Der fehlgeschlagene untere Bruch kehrt erneut kräftig nach unten. Welche Einordnung wird plausibel?",
    "answers": [
      {
        "label": "Jeder Trader muss ohne neuen Risikoentscheid sofort drehen.",
        "explanation": "Eine neue Position braucht einen eigenen Plan."
      },
      {
        "label": "Ein Ausbruchspullback für den ursprünglichen Verkäuferbruch.",
        "explanation": "Richtig. Die zweite Rückkehr kann den ersten Gegenplan wieder stützen."
      },
      {
        "label": "Alle bisherigen Bars sind ohne Bedeutung.",
        "explanation": "Ihre Reihenfolge erklärt die neue Struktur."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Beide Seiten erwischt: Trendkörper oder Dojis?",
    "summary": "Nach Fehlschlägen die Qualität der neuen Körper prüfen.",
    "section": "Doppelte Fehlschläge",
    "scenario": "c16-12",
    "paragraphs": [
      "Nach wechselnden Fehlschlägen können zuerst Shorts ausgestoppt und anschließend Longs in Verlust gebracht werden. Treten danach klare gerichtete Körper auf, kann der neue Gegenabschnitt mehr Anschluss bekommen. Die vorangegangene Folge gehört dann zu seinem Kontext.",
      "Sind die neuen Bars dagegen kleine Dojis mit langen Tails und starker Überlappung, spricht das eher für Unsicherheit und mögliche Balance. Ein neuer Ausbruch bleibt möglich, aber eine schnelle geradlinige Fortsetzung ist weniger klar.",
      "Die Beschreibung gefangener Trader erklärt mögliche Schließungsorders, nicht bekannte Einzelpositionen. Zähl nicht einfach zwei Fallen als Gewinnversprechen. Beurteile die sichtbaren Körper und den Anschluss und warte, wenn daraus kein klarer Plan folgt."
    ],
    "takeaways": [
      "Nach Fehlschlägen die Qualität der neuen Körper prüfen.",
      "Gerichteter Anschluss und Doji-Balance unterscheiden.",
      "Zwei Fallen sind keine Garantie."
    ],
    "callout": "Zwei Fallen sind keine Garantie.",
    "prompt": "Nach zwei Fehlschlägen folgen nur Dojis mit großen Tails. Was ist zunächst sichtbar?",
    "answers": [
      {
        "label": "Ein garantierter zweiter Shortgewinn.",
        "explanation": "Die Fallenfolge allein genügt nicht."
      },
      {
        "label": "Die Positionen aller Trader sind exakt bekannt.",
        "explanation": "Das lässt sich aus den Bars nicht ablesen."
      },
      {
        "label": "Mehr Unsicherheit und zweiseitiger Handel.",
        "explanation": "Richtig. Ein neuer klarer Trend ist damit noch nicht belegt."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Oberer Ausbruch aus dem Mikrokanal",
    "summary": "Ein oberer Ausbruch kann beschleunigen oder scheitern.",
    "section": "Ausbrüche",
    "scenario": "c16-13",
    "paragraphs": [
      "Ein Bullen-Mikrokanal kann über seine obere Grenze ausbrechen und versuchen, noch steiler zu werden. Starker Anschluss außerhalb kann die Beschleunigung stützen. Kehrt die Ausdehnung dagegen mit kräftiger Verkäuferreaktion zurück, kann eine späte Kaufüberdehnung vorliegen.",
      "Diese obere Umkehridee ist etwas anderes als ein kleiner Short an der unteren Trendseite. Der Ort liegt am äußeren Schubende. Trotzdem braucht der Gegenplan eine überzeugende Reaktion und einen passenden Auslöser; die obere Linie allein genügt nicht.",
      "Vergleiche die Stärke des Ausbruchs mit dem Gegenbar und der weiteren Folge. Sind beide Seiten gleich stark, warte auf mehr Information. Das Wort Climax steht für Ausdehnung und heißt nicht automatisch: sichere Gegenorder."
    ],
    "takeaways": [
      "Oberer Ausbruch kann beschleunigen oder scheitern.",
      "Schubende und untere Trendseite sind verschiedene Orte.",
      "Gegenreaktion statt nur Grenzverletzung verlangen."
    ],
    "callout": "Eine Gegenreaktion verlangen, nicht nur eine Grenzverletzung.",
    "prompt": "Wann stützt ein oberer Mikrokanalausbruch eher eine Gegenidee?",
    "answers": [
      {
        "label": "Wenn er zurückkehrt und kräftigen Verkäuferanschluss zeigt.",
        "explanation": "Richtig. Die Reaktion muss den Fehlschlag sichtbar machen."
      },
      {
        "label": "Sobald ein einzelner Tick außerhalb handelt.",
        "explanation": "Die Überschreitung kann auch beschleunigen."
      },
      {
        "label": "Immer nach exakt zwei Bars unabhängig vom Verlauf.",
        "explanation": "Es gibt keinen starren Umkehrzeitpunkt."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Lange enge Folge: auf größeren Rücklauf vorbereitet sein",
    "summary": "Eine lange enge Folge kann eine größere Korrektur vorbereiten.",
    "section": "Trenddauer",
    "scenario": "c16-14",
    "paragraphs": [
      "Ein Mikrokanal mit zehn oder mehr Bars kann weit gestreckt sein. Eine spätere größere Pause, Korrektur oder Umkehr wird dadurch als Szenario wichtiger. Die Zahl ist eine grobe Orientierung und legt keinen sicheren letzten Bar fest.",
      "Der erste Bruch kann immer noch als Pullback scheitern. Eine spätere zweite Gegenidee nach Rücklauftest liefert mehr Information als die bloße Länge. Beurteile deshalb die Abfolge und nicht nur, ob ein Zähler gerade zehn erreicht hat.",
      "Ein Trend kann länger laufen, als eine frühzeitige Gegenposition verträgt. Sich auf einen Übergang vorzubereiten heißt nicht, ihn ohne Signal vorwegzunehmen. Behalte aktuelle Kontrolle, neue Gegenstärke und tragbares Risiko gleichzeitig im Blick."
    ],
    "takeaways": [
      "Lange enge Folge kann eine größere Korrektur vorbereiten.",
      "Zehn Bars sind eine Orientierung, kein Umkehrschalter.",
      "Zweiten Gegenversuch nach Test gesondert beurteilen."
    ],
    "callout": "Den zweiten Gegenversuch nach einem Test gesondert beurteilen.",
    "prompt": "Der zehnte Bar eines Mikrokanals schließt. Was folgt daraus?",
    "answers": [
      {
        "label": "Ein Stop ist bei langem Trend nicht mehr nötig.",
        "explanation": "Die Verlustgrenze bleibt erforderlich."
      },
      {
        "label": "Auf neue Korrekturbelege achten, ohne eine Umkehr zu garantieren.",
        "explanation": "Richtig. Die Länge verändert die Aufmerksamkeit, nicht die Gewissheit."
      },
      {
        "label": "Die nächste Kerze muss in Gegenrichtung schließen.",
        "explanation": "Das ist keine feste Regel."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Im starken Bärenverlauf: kleiner Hochbruch als Low 1",
    "summary": "Ein kleiner Hochbruch kann im Bärenverlauf ein Pullback sein.",
    "section": "Mit dem Trend",
    "scenario": "c16-15",
    "paragraphs": [
      "Ein starker Bärenabschnitt mit mehreren Verkäuferbars und kleinen Rückgaben kann eine Mikro-Trendlinie an den Hochs haben. Ein kleiner Pausenbar, der diese Linie überschreitet, kann lediglich einen kurzen Rücklauf beginnen.",
      "Kehrt der Kurs unter den Tiefpunkt dieses Bars zurück, kann das ein Low-1-Trendsetup sein: der erste passende Verkäuferfortsetzungsversuch. Die größere Bärenkontrolle ist der wichtige Kontext. Ein erster kleiner Hochbruch ist für sich noch keine Longbestätigung.",
      "Prüf Barqualität und Zielraum. Hat der Verkäuferabschnitt schon einen wichtigen Tiefbereich erreicht oder tauchen neue Käuferkörper auf, beurteilst du dieselbe kleine Form anders. Low 1 ist ein Muster im Kontext, kein universeller Verkaufsbefehl."
    ],
    "takeaways": [
      "Kleiner Hochbruch kann im Bärenverlauf ein Pullback sein.",
      "Rückkehr darunter kann Low 1 vorbereiten.",
      "Ort und neue Käuferstärke mitprüfen."
    ],
    "callout": "Ort und neue Käuferstärke mitprüfen.",
    "prompt": "Ein kleiner Hochbruch im starken Bären-Mikrokanal kehrt rasch zurück. Was ist möglich?",
    "answers": [
      {
        "label": "Ein garantiert neuer Bullenmarkt.",
        "explanation": "Der kleine Bruch allein bestätigt keinen Kontrollwechsel."
      },
      {
        "label": "Eine Order ohne Verlustgrenze.",
        "explanation": "Auch eine Fortsetzungsidee kann scheitern."
      },
      {
        "label": "Ein Low-1-Fortsetzungssetup in Bärenrichtung.",
        "explanation": "Richtig. Es kann der erste gescheiterte Gegenversuch sein."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Winzige Linienverletzung und handelbarer Tick sind verschieden",
    "summary": "Der Linienwert kann zwischen handelbaren Kursstufen liegen.",
    "section": "Geometrie",
    "scenario": "c16-16",
    "paragraphs": [
      "Eine Mikro-Trendlinie kann schon aus zwei benachbarten Bars entstehen. Ein späterer Pausenbar kann sie geometrisch verletzen, obwohl die Abweichung kleiner ist als ein handelbarer Tick. Eine schräge Linie kann zwischen möglichen Kursstufen verlaufen.",
      "Das heißt nicht, dass der Markt einen Bruchteil eines Ticks gehandelt hätte. Die tatsächlichen OHLC-Preise bleiben auf den zulässigen Kursstufen. Die Linie ist eine kontinuierliche Zeichnung, die Orderauslösung ein konkreter handelbarer Preis.",
      "Verwechsle beides nicht. Die kleine geometrische Verletzung kann einen beobachtbaren Pullbackbereich markieren, aber eine Order braucht ihre reale Auslösung und ihre Verlustgrenze. Pixelgenauigkeit erhöht nicht die Gewissheit über den nächsten Bar."
    ],
    "takeaways": [
      "Linienwert kann zwischen handelbaren Kursstufen liegen.",
      "Geometrische Verletzung ist nicht ein Bruchteil-Tick-Trade.",
      "Orderauslösung braucht einen realen Preis."
    ],
    "callout": "Die Orderauslösung braucht einen realen Preis.",
    "prompt": "Eine Linie liegt bei 52,5, das tatsächliche Tief bei 52. Was ist korrekt?",
    "answers": [
      {
        "label": "Der Preis kann die Linie geometrisch verletzen, ohne dass 52,5 gehandelt wurde.",
        "explanation": "Richtig. Zeichnung und reale Kursstufen sind verschieden."
      },
      {
        "label": "Der Markt muss einen halben Tick gehandelt haben.",
        "explanation": "Der Linienwert ist kein Ausführungspreis."
      },
      {
        "label": "Die Verletzung garantiert die nächste Trendkerze.",
        "explanation": "Die Folgereaktion bleibt zu prüfen."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Bären-Mikrolinie im Bullenpullback: den falschen Short erkennen",
    "summary": "Eine kleine Gegenlinie kann nur den Bullenpullback beschreiben.",
    "section": "Kontextfehler",
    "scenario": "c16-17",
    "paragraphs": [
      "Ein Bullenpullback kann lokal eine fallende Mikro-Trendlinie bilden. Ein Bruch darüber kann kurz zurückfallen und so einen scheinbaren Short nach fehlgeschlagenem lokalen Ausbruch erzeugen. Im starken größeren Bullenverlauf nahe dem Durchschnitt geht dieser Short jedoch gegen die wichtigere Kontrolle.",
      "Scheitert er anschließend, kann der obere Bruch zum Ausbruchspullback in Bullenrichtung werden. Das neue Testtief darf etwas tiefer oder höher liegen. Entscheidend sind die Käuferreaktion und die größere Trendstruktur.",
      "Nutze die lokale Gegenlinie deshalb als Hinweis auf einen möglichen späteren Trendfortsetzungsablauf. Sie fordert dich nicht auf, jede lokale Bärenauslösung zu handeln. Als Anfänger kannst du die bestätigte Käuferreaktion abwarten und den frühen Gegenversuch auslassen."
    ],
    "takeaways": [
      "Kleine Gegenlinie kann nur den Bullenpullback beschreiben.",
      "Lokaler Shortname kann gegen den größeren Trend laufen.",
      "Gescheiterte Gegenidee kann Trendfortsetzung vorbereiten."
    ],
    "callout": "Eine gescheiterte Gegenidee kann Trendfortsetzung vorbereiten.",
    "prompt": "Ein lokaler Short liegt am Ende der Bullenflagge nahe dem steigenden Durchschnitt. Was prüfst du?",
    "answers": [
      {
        "label": "Der Durchschnitt verhindert jeden Verlust.",
        "explanation": "Er ist eine Referenz und kann gebrochen werden."
      },
      {
        "label": "Ob er gegen die größere Käuferkontrolle läuft.",
        "explanation": "Richtig. Die kleine Linienrichtung ist nicht automatisch die Planrichtung."
      },
      {
        "label": "Jede fallende Mikrolinie verlangt einen Short.",
        "explanation": "Der größere Kontext kann deutlich dagegen sprechen."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Nach bestätigtem Richtungswechsel gilt ein anderer Trendplan",
    "summary": "Mit dem Trend ist die aktuelle belegte Kontrolle gemeint.",
    "section": "Kontextwechsel",
    "scenario": "c16-18",
    "paragraphs": [
      "Mikro-Trendlinien dienen hier vor allem dazu, mit der aktuellen Trendkontrolle auszuwählen. Diese Kontrolle kann sich verändern. Nach einem deutlichen Bullenlinienbruch und einem scheiternden Hochtest kann ein Bärenplan plausibel werden.",
      "Dann sind kurze Bärenlinien und Verkäuferfortsetzungen auch in Bereichen interessant, in denen du vorher Longpullbacks gesucht hast. Ein Durchschnitt allein bestimmt die Richtung nicht. Gegenbruch, Extremtest und Verkäuferanschluss verändern die Bedeutung des Orts.",
      "Leg im Replay fest, ab wann dieser Wechsel wirklich sichtbar war. Frühe Shorts im alten Bullenverlauf werden durch die spätere Umkehr nicht rückwirkend korrekt. Jede Entscheidung musst du mit der damaligen Struktur beurteilen."
    ],
    "takeaways": [
      "Mit dem Trend meint die aktuelle belegte Kontrolle.",
      "Gegenbruch und scheiternder Extremtest können sie verändern.",
      "Spätere Umkehr rechtfertigt keine frühere unbegründete Order."
    ],
    "callout": "Eine spätere Umkehr rechtfertigt keine frühere unbegründete Order.",
    "prompt": "Wann verändert sich die Bedeutung einer Mikro-Shortidee im früheren Bullenbereich?",
    "answers": [
      {
        "label": "Sobald ich einen Short gewinnen möchte.",
        "explanation": "Wunschrichtung ist kein Strukturbeleg."
      },
      {
        "label": "Erst wenn alle bisherigen Preise gelöscht sind.",
        "explanation": "Der alte Verlauf bleibt als Vorgeschichte erhalten."
      },
      {
        "label": "Wenn eine neue Bärenkontrolle aus Gegenbruch, Test und Anschluss sichtbar wird.",
        "explanation": "Richtig. Die größere Struktur muss sich tatsächlich verändern."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Auf anderer Zeitebene sieht derselbe Abschnitt anders aus",
    "summary": "Mikrokanal, Spike und kleiner Rücklaufkanal können denselben Weg zeigen.",
    "section": "Zeitebenen",
    "scenario": "c16-19",
    "paragraphs": [
      "Ein Mikrokanal aus kleinen Bars kann auf einer größeren Zeitebene ein großer Trendbar sein. Auf einer kleineren Zeitebene kann derselbe Abschnitt viele kleine Rückläufe enthalten. Die Darstellungen unterscheiden sich, obwohl sie denselben Kursweg zusammenfassen.",
      "Du musst nicht die perfekte größere oder kleinere Grafik suchen. Zeigt die Hauptzeitebene Stärke und Fehlschlag schon sichtbar, kann zusätzliche Information die Entscheidung sogar verlangsamen. Die gewählte Ebene muss zu deinem Risiko- und Ausstiegsplan passen.",
      "Ein Wechsel der Zeitebene während einer Verlustposition darf den ursprünglichen Stop nicht heimlich vergrößern. Benenne, welche Ebene für die Auslösung und welche gegebenenfalls für den Kontext dient. Die kleinere Detailstruktur ist eine Ergänzung, keine neue Vergangenheit."
    ],
    "takeaways": [
      "Mikrokanal, Spike und kleiner Rücklaufkanal können denselben Weg zeigen.",
      "Zusatzchart ist nicht immer nötig.",
      "Zeitebenenwechsel verändert keine alte Risikogrenze."
    ],
    "callout": "Ein Zeitebenenwechsel verändert keine alte Risikogrenze.",
    "prompt": "Ein Fünf-Minuten-Mikrokanal hat auf einer kleineren Ebene mehrere Pullbacks. Was bedeutet das?",
    "answers": [
      {
        "label": "Die Aggregation zeigt denselben Weg mit anderem Detailgrad.",
        "explanation": "Richtig. Die Hauptstruktur bleibt gültig."
      },
      {
        "label": "Eine der Grafiken muss erfunden sein.",
        "explanation": "Unterschiedliche Zeitbündel zeigen verschiedene Details."
      },
      {
        "label": "Der ursprüngliche Stop darf beliebig vergrößert werden.",
        "explanation": "Mehr Detail hebt den Verlustplan nicht auf."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Rückblickend leicht, in Echtzeit schnell",
    "summary": "Rückblickende Übersicht und reale Entscheidungsgeschwindigkeit unterscheiden.",
    "section": "Arbeitsweise",
    "scenario": "c16-20",
    "paragraphs": [
      "Eine fertige Ein-Minuten-Grafik zeigt viele scheinbar offensichtliche Linienbrüche. In Echtzeit können die brauchbaren Signale aber sehr schnell entstehen und auslösen, während schwache Signale dir länger Zeit zum Grübeln geben. Rückblickende Klarheit kann daher täuschen.",
      "Die Übung soll dir beibringen, mit den damals verfügbaren Bars auszuwählen. Bleib auf einer vorab gewählten Zeitebene und deck schrittweise auf. Notier Kontext, Linie, Reaktion, Auslösung und Risiko, bevor du die nächste Bewegung kennst.",
      "Hast du ein klares Signal verpasst, ist Hinterherhandeln keine notwendige Reparatur. Bleibt die Folge überwiegend unklar, ist Abwarten sinnvoll. Ein kleiner Musterausschnitt hat nur dann praktischen Wert, wenn du ihn in deinem tatsächlichen Tempo und mit deinem Plan bearbeiten kannst."
    ],
    "takeaways": [
      "Rückblickende Übersicht und reale Entscheidungsgeschwindigkeit unterscheiden.",
      "Im Replay vor dem Aufdecken notieren.",
      "Verpasste Auslösung nicht durch ungeplantes Hinterherhandeln ersetzen."
    ],
    "callout": "Eine verpasste Auslösung nicht durch ungeplantes Hinterherhandeln ersetzen.",
    "prompt": "Warum beweist ein schöner fertiger Ein-Minuten-Chart keine einfache Umsetzung?",
    "answers": [
      {
        "label": "Weil jeder langsame Aufbau automatisch gut ist.",
        "explanation": "Gerade schwache Setups können viel Zeit zum Einstieg lassen."
      },
      {
        "label": "Die Signale mussten in Echtzeit mit begrenzter Zeit ausgewählt werden.",
        "explanation": "Richtig. Rückblickende Information war damals nicht vollständig vorhanden."
      },
      {
        "label": "Weil Mikro-Trendlinien dort grundsätzlich nicht existieren.",
        "explanation": "Die Muster können vorhanden sein; ihre Umsetzung ist schwieriger."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Chartfall 16.1: Kleine Linie im großen Barbild",
    "summary": "Detailchart und aggregiertes Barbild können denselben Ablauf zeigen.",
    "section": "Chartfall 16.1 · Zeitebenen",
    "scenario": "c16-21",
    "paragraphs": [
      "Der erste Chartfall stellt denselben Kursabschnitt auf einer kleineren und einer größeren Zeitebene gegenüber. Eine längere, klar erkennbare Linie im Detailchart kann im größeren Bild nur als winzige Mikro-Trendlinie über wenige Bars erscheinen.",
      "Die größere Grafik enthält dadurch nicht zu wenig Information. Ein kleiner Bruch mit passender Reaktion kann dort denselben Lernablauf sichtbar machen. Die Detailansicht erklärt die Entstehung, muss aber nicht für jede Order zusätzlich geöffnet werden.",
      "Das eigene Diagramm nutzt eine tatsächlich aggregierte synthetische Folge: Je fünf kleine Bars bilden einen großen Bar. Open, High, Low und Close werden entsprechend zusammengefasst. So zeigt die Gegenüberstellung denselben erfundenen Kursweg statt zwei unabhängig erfundener Bilder."
    ],
    "takeaways": [
      "Detailchart und aggregiertes Barbild können denselben Ablauf zeigen.",
      "Mikrolinie ist im größeren Bild kürzer.",
      "Mehr Detail ist nicht automatisch mehr Entscheidungswert."
    ],
    "callout": "Mehr Detail ist nicht automatisch mehr Entscheidungswert.",
    "prompt": "Wie entsteht ein großer OHLC-Bar aus fünf kleinen?",
    "answers": [
      {
        "label": "Durch den Durchschnitt aller vier Preise.",
        "explanation": "Ein OHLC-Bar beschreibt Extremwerte und Anfang/Ende, nicht deren Mittel."
      },
      {
        "label": "Durch beliebige neue Preise.",
        "explanation": "Dann wäre es nicht derselbe Kursweg."
      },
      {
        "label": "Erstes Open, höchstes High, tiefstes Low und letztes Close.",
        "explanation": "Richtig. Diese Werte fassen den Kursabschnitt zusammen."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Chartfall 16.1: Zweiter gescheiterter Hochbruch",
    "summary": "Ersten und zweiten Fehlversuch zeitlich unterscheiden.",
    "section": "Chartfall 16.1 · Zweiter Versuch",
    "scenario": "c16-22",
    "paragraphs": [
      "In einem fallenden Abschnitt kann ein erster kleiner Bruch über die Mikro-Trendlinie scheitern. Ein späterer zweiter Hochversuch mit erneuter Verkäuferreaktion liefert zusätzliche Information, dass die Käufer den Bereich noch nicht halten konnten.",
      "Manche geometrischen Brüche sind im größeren Bild sehr klein. Ihr Gewicht hängt trotzdem von Reihenfolge und Kontext ab. Der zweite Fehlversuch ist ein neu beobachteter Ablauf, keine Garantie, nur weil der erste verloren hätte.",
      "Prüf den Auslöser unter dem Signalbereich und den verfügbaren Raum. Den ersten Verlustplan darfst du bis zum zweiten Versuch nicht ungeplant verlängern. Ein zweiter Einstieg braucht sein eigenes Risiko und muss mit den dann bekannten Bars begründet sein."
    ],
    "takeaways": [
      "Ersten und zweiten Fehlversuch zeitlich unterscheiden.",
      "Kleine Geometrie kann relevante Folge enthalten.",
      "Zweiter Versuch braucht einen eigenen Plan."
    ],
    "callout": "Ein zweiter Versuch braucht einen eigenen Plan.",
    "prompt": "Was ergänzt der zweite gescheiterte Hochbruch?",
    "answers": [
      {
        "label": "Ein weiterer sichtbarer Versuch, den Käufer nicht halten konnten.",
        "explanation": "Richtig. Die Folge liefert neue Information."
      },
      {
        "label": "Eine Garantie, den ersten Verlust zurückzubekommen.",
        "explanation": "Das ist kein Marktbeleg."
      },
      {
        "label": "Eine Erlaubnis, den ersten Stop bis dahin wegzulassen.",
        "explanation": "Jede Position benötigt ihren eigenen Schutzplan."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Chartfall 16.1: Lokaler Long am Bärenpullback",
    "summary": "Eine lokale Longform kann im größeren Bärenpullback liegen.",
    "section": "Chartfall 16.1 · Kontext",
    "scenario": "c16-23",
    "paragraphs": [
      "Ein kleines steigendes Rücklaufstück kann nach einem unterbrochenen Bärenstoß entstehen. Der Bruch unter seine lokale Bullenlinie kann zurückkehren und im Detailchart wie eine Longfortsetzung aussehen. Im größeren Bild liegt der Ort aber am Ende eines Bärenpullbacks.",
      "Nahe dem Durchschnitt des Bärenverlaufs kann der erneute Anstieg stocken und zum Verkäufer-Ausbruchspullback werden. Ein Long wäre dort höchstens eine eng begrenzte lokale Idee und keine bestätigte Umkehr der großen Tageskontrolle.",
      "Für die einfache Auswahl ist es sinnvoller, den größeren Kontext zu halten und die Verkäuferreaktion abzuwarten. Verschiedene Zeitebenen können verschiedene Tradegrößen beschreiben. Ein kleiner Detailgewinn beweist keine passende große Longposition."
    ],
    "takeaways": [
      "Lokale Longform kann im größeren Bärenpullback liegen.",
      "Detailsetup und Tageskontrolle getrennt lesen.",
      "Scalpidee nicht als große Umkehr ausgeben."
    ],
    "callout": "Eine Scalpidee nicht als große Umkehr ausgeben.",
    "prompt": "Ein kleiner Longtrigger liegt am oberen Bärenpullback. Was fehlt für eine große Käuferumkehr?",
    "answers": [
      {
        "label": "Der Wunsch, den Tagesboden gefunden zu haben.",
        "explanation": "Ein Wunsch ist kein Strukturbeleg."
      },
      {
        "label": "Eine belegte Veränderung der größeren Bärenkontrolle.",
        "explanation": "Richtig. Die lokale Form allein genügt nicht."
      },
      {
        "label": "Eine sichtbare Mikro-Trendlinie.",
        "explanation": "Sie kann bereits vorhanden sein, erklärt aber nur den kleinen Abschnitt."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Chartfall 16.1: Ein kleiner Trendwechsel ist nicht der ganze Tag",
    "summary": "Ein formal ähnliches Muster kann sehr kleine Bedeutung haben.",
    "section": "Chartfall 16.1 · Strukturgröße",
    "scenario": "c16-24",
    "paragraphs": [
      "Im Detailabschnitt kann es einen winzigen Bullenverlauf, einen Bruch und einen höheren Hochtest geben. Das entspricht formal einem kleinen Trendwechsel, dessen mögliche Abwärtsstrecke im größeren Bild nur ein kurzer Scalp ist.",
      "Danach kann ein lokaler Käuferauslöser wiederum am Hoch eines größeren Bärenpullbacks liegen. Dieselbe Barfolge bekommt je nach betrachteter Größe einen anderen Stellenwert. Ein Schutzbereich, der im Detailbild gehalten hätte, beantwortet noch nicht die größere Kontextfrage.",
      "Benenne die Größenordnung deines Plans und halte ihren Ausstieg fest. Du musst nicht jede formale Umkehr im kleinsten Ausschnitt handeln. Eine Struktur korrekt zu beschreiben und sie unter realen Bedingungen passend umzusetzen sind verschiedene Fähigkeiten."
    ],
    "takeaways": [
      "Formal ähnliches Muster kann sehr kleine Bedeutung haben.",
      "Größenordnung und Ausstieg müssen zusammenpassen.",
      "Nicht jede erkannte Detailumkehr braucht eine Order."
    ],
    "callout": "Nicht jede erkannte Detailumkehr braucht eine Order.",
    "prompt": "Eine Mikro-Umkehr bringt einen kurzen Scalp im Detailbild. Was beweist sie nicht?",
    "answers": [
      {
        "label": "Dass der kleine Linienbruch sichtbar war.",
        "explanation": "Das kann korrekt beobachtet sein."
      },
      {
        "label": "Dass der Detailabschnitt beschrieben werden kann.",
        "explanation": "Beschreibung allein ist noch kein größerer Plan."
      },
      {
        "label": "Eine vollständige Umkehr des größeren Tagestrends.",
        "explanation": "Richtig. Strukturgröße ist Teil der Einordnung."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Chartfall 16.2: Erster Linienbruch wird zum Käuferpullback",
    "summary": "Kleine Brüche können erste Trendpullbacks sein.",
    "section": "Chartfall 16.2 · Fortsetzung",
    "scenario": "c16-25",
    "paragraphs": [
      "Im zweiten Chartfall steigt der Markt nach einem Gap mit deutlichem Käuferdruck. Kleine Linien über wenige Bars werden kurz unterschritten und danach wieder nach oben verlassen. Der erste untere Bruch kann so einen Fortsetzungseinstieg vorbereiten.",
      "Eine erste Linie erfasst nur einen sehr kurzen Abschnitt, eine spätere einen etwas längeren. Der nächste tiefer liegende Test kann als neuer Punkt einer flacheren Trendlinie dienen. Die Trendstruktur wird aktualisiert, ohne dass die alte Entscheidung rückwirkend anders wird.",
      "Prüf, ob der Käuferanschluss nach der Auslösung wirklich trägt und ob oben noch Raum bleibt. Gerade nach einem großen letzten Käuferbar kann der neue Rücklauf stärker werden. Ein kleiner Bruch allein ist kein universeller Kaufbefehl."
    ],
    "takeaways": [
      "Kleine Brüche können erste Trendpullbacks sein.",
      "Spätere Tests können eine flachere Referenz ergeben.",
      "Auslösung und Käuferanschluss weiter prüfen."
    ],
    "callout": "Auslösung und Käuferanschluss weiter prüfen.",
    "prompt": "Ein kleiner unterer Linienbruch kehrt im Bullenkontext zurück. Was ist möglich?",
    "answers": [
      {
        "label": "Eine High-1-Fortsetzung mit weiterhin offenem Risiko.",
        "explanation": "Richtig. Der Fehlschlag kann einen Trendpullback bilden."
      },
      {
        "label": "Ein garantiert großer Bärentrend durch die erste Verletzung.",
        "explanation": "Die Rückkehr widerspricht dieser schnellen Schlussfolgerung."
      },
      {
        "label": "Eine heimliche Änderung aller früheren Anker.",
        "explanation": "Die frühere Zeichnung bleibt dokumentiert."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Chartfall 16.2: Nicht gefüllte Order bewusst nachführen",
    "summary": "Eine ungefüllte Order ist noch keine Position.",
    "section": "Chartfall 16.2 · Auslösung",
    "scenario": "c16-26",
    "paragraphs": [
      "Ein Signalbar nach dem Rücklauf kann eine Buy-Stop-Idee über seinem Hoch liefern. Wird diese Auslösung nicht erreicht, besteht noch keine Longposition. Ein späterer geeigneter Bar kann eine neue Auslösung mit verändertem Preis und Schutzbereich ergeben.",
      "Eine ungefüllte Order nachzuführen ist nicht dasselbe, wie den Stop einer offenen Verlustposition zu verschieben. Prüf bei jedem neuen Signal, ob Käuferidee, Zielraum und Geldrisiko noch stimmen. Ein kleinerer Signalbereich kann die Distanz verändern.",
      "Im eigenen Beispiel liegen zwei konkrete Auslösungspreise nacheinander im Chart. Die erste wird nicht erreicht, die spätere ausgelöst. Die Reihenfolge macht sichtbar, wann die Position überhaupt entstanden wäre und welche Information davor wirklich verfügbar war."
    ],
    "takeaways": [
      "Ungefüllte Order ist noch keine Position.",
      "Neue Auslösung erfordert erneute Planprüfung.",
      "Ordernachführung und Stopausweitung unterscheiden."
    ],
    "callout": "Ordernachführung und Stopausweitung unterscheiden.",
    "prompt": "Die erste Buy-Stop-Marke wird nicht erreicht. Was gilt?",
    "answers": [
      {
        "label": "Ein Stop einer offenen Verlustposition darf deshalb beliebig mitwandern.",
        "explanation": "Das ist eine andere Entscheidung mit anderem Risiko."
      },
      {
        "label": "Es ist noch keine Longposition entstanden.",
        "explanation": "Richtig. Eine platzierte Idee ist nicht automatisch ausgeführt."
      },
      {
        "label": "Der Trade ist schon sicher im Gewinn.",
        "explanation": "Ohne Ausführung gibt es keinen Positionsgewinn."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Chartfall 16.2: Kleiner Insidebar unter einer winzigen Linie",
    "summary": "Insidebar und Mikro-Linienverletzung können zusammen auftreten.",
    "section": "Chartfall 16.2 · Geometrie",
    "scenario": "c16-27",
    "paragraphs": [
      "Ein kleiner Insidebar kann unter eine sehr kurze Bullenlinie reichen, obwohl er vollständig innerhalb des vorherigen Bars bleibt. Inside beschreibt seinen Vergleich zum Vorgänger, Linienbruch seinen Vergleich zur schrägen Referenz. Beides kann gleichzeitig stimmen.",
      "Ein möglicher Stop über dem Insidebar ist die Trendfortsetzungsidee im passenden Bullenkontext. Eine sehr kleine geometrische Verletzung macht ihn nicht automatisch stark. Qualität des Rücklaufs und Raum zur Schubgrenze bleiben relevant.",
      "Der Chartfall zeigt auch eine mögliche obere Grenzverletzung bei starkem Momentum. Ohne überzeugenden zweiten Gegenversuch ist ein früher Short dort schwächer begründet. Kleine Muster musst du immer gegen die sichtbare Kontrolle prüfen."
    ],
    "takeaways": [
      "Insidebar und Mikro-Linienverletzung können zusammen auftreten.",
      "Zwei Vergleiche beschreiben verschiedene Beziehungen.",
      "Starkes Momentum erschwert frühe Gegenversuche."
    ],
    "callout": "Starkes Momentum erschwert frühe Gegenversuche.",
    "prompt": "Wie kann ein Insidebar trotzdem eine Mikro-Trendlinie verletzen?",
    "answers": [
      {
        "label": "Ein Insidebar besitzt keine Hochs und Tiefs.",
        "explanation": "Er hat konkrete OHLC-Werte."
      },
      {
        "label": "Jeder Insidebar ist automatisch eine große Umkehr.",
        "explanation": "Er beschreibt zunächst nur den kleineren Barbereich."
      },
      {
        "label": "Die schräge Linie verläuft innerhalb des vorherigen Barbereichs.",
        "explanation": "Richtig. Die beiden Vergleiche beziehen sich auf verschiedene Referenzen."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Chartfall 16.2: Größerer Bruch, tieferes Hoch und Scalpgröße",
    "summary": "Größere Linie und Mikro-Linie haben eine andere Reichweite.",
    "section": "Chartfall 16.2 · Gegenplan",
    "scenario": "c16-28",
    "paragraphs": [
      "Ein späterer Bruch der größeren Bullen-Trendlinie wiegt anders als die kleinen Mikroverletzungen davor. Eine mehrteilige Korrektur wird plausibler. Der erste starke Gegenbruch eines engen Kanals ist aber noch kein idealer Anfänger-Short ohne Test.",
      "Ein späteres tieferes Hoch kann eine Verkäuferidee für den Rücklauf zum Durchschnitt vorbereiten, wenn dort genug Raum bleibt. Das ist ein begrenzter Korrekturscalp, nicht automatisch eine große Trendwende. Dafür fehlen womöglich noch der Durchschnittstest und der anschließende alte Hochtest.",
      "Viele kleine Dojis nach dem Bruch zeigen zusätzliche Unsicherheit. Warte bei fehlender Klarheit auf deutlichere Körper und Anschluss. Ein passender kleiner Gegenplan rechtfertigt kein unbegrenztes Halten auf eine große Umkehr."
    ],
    "takeaways": [
      "Größere Linie und Mikro-Linie haben andere Strukturreichweite.",
      "Raum zum Durchschnitt kann einen begrenzten Scalp erklären.",
      "Scalp und große Umkehr getrennt halten."
    ],
    "callout": "Scalp und große Umkehr getrennt halten.",
    "prompt": "Ein tieferes Hoch hat Raum bis zum Durchschnitt, aber noch keinen großen Extremtest. Was ist eher begründet?",
    "answers": [
      {
        "label": "Ein begrenzter Korrekturplan statt einer sicheren großen Trendumkehr.",
        "explanation": "Richtig. Struktur und Zielgröße müssen zusammenpassen."
      },
      {
        "label": "Ein garantiert dauerhafter Bärenmarkt.",
        "explanation": "Die größeren Umkehrbelege fehlen noch."
      },
      {
        "label": "Ein Short ohne Ausstieg, weil das Hoch tiefer ist.",
        "explanation": "Auch ein Korrekturtrade braucht Schutz und Zielraum."
      }
    ],
    "correct": 0
  },
  {
    "number": 29,
    "title": "Chartfall 16.2: Gap, frühe Käuferstärke und erster Rücklauf",
    "summary": "Gap und Signalqualität gemeinsam lesen.",
    "section": "Chartfall 16.2 · Vertiefung",
    "scenario": "c16-29",
    "paragraphs": [
      "Der Tag beginnt mit einem oberen Gap und einem Käuferbar mit unterem Tail. Zusammen mit der jüngsten Käuferstärke stützt das einen Bullenkontext. Ein sofortiger Short nur wegen des Gaps ignoriert die Qualität des ersten Bars.",
      "Ein zweiter Bar kann mit Verkäuferkörper den ersten Tiefbereich unterschreiten und trotzdem den Rücklauf eines möglichen Bullentages bilden. Spätere kräftige Käuferbars bestätigen mehr als der erste Gapname. Ein ungewöhnlich großer letzter Bar kann eine Pause vorbereiten.",
      "Eine Projektion aus dem großen Eröffnungsbereich ist ein zusätzlicher Zielhinweis, keine Zusage. Der erste Mikro-Pullback und der Ausbruch über das Eröffnungshoch können denselben Fortsetzungsablauf beschreiben. Halte die jeweiligen Anker und das Risiko vor dem Ergebnis fest."
    ],
    "takeaways": [
      "Gap und Signalqualität gemeinsam lesen.",
      "Früher Verkäuferbar kann ein Käuferpullback sein.",
      "Projektionsbereich bleibt eine Referenz."
    ],
    "callout": "Ein Projektionsbereich bleibt eine Referenz.",
    "prompt": "Ein oberes Gap startet mit klarer Käuferreaktion. Warum ist ein sofortiger Gap-Short unvollständig?",
    "answers": [
      {
        "label": "Weil der spätere Tagesgewinn schon bekannt ist.",
        "explanation": "Die weitere Folge ist noch offen."
      },
      {
        "label": "Er ignoriert die sichtbare Käuferstärke und braucht erst einen Fehlschlag.",
        "explanation": "Richtig. Gap allein legt keine Gegenrichtung fest."
      },
      {
        "label": "Weil Gaps keine Ausbrüche sein können.",
        "explanation": "Eine Lücke ist bereits eine Ausdehnung beziehungsweise ein Ausbruch."
      }
    ],
    "correct": 1
  },
  {
    "number": 30,
    "title": "Chartfall 16.3: Mikro-Pullback im starken Bullenabschnitt",
    "summary": "Frühen Bullenkontext und späteren Bärenkontext getrennt lesen.",
    "section": "Chartfall 16.3 · Fortsetzung",
    "scenario": "c16-30",
    "paragraphs": [
      "Der dritte Chartfall enthält einen früheren starken Bullenabschnitt und einen späteren starken Bärenabschnitt. Im Bullenbereich kann ein erster Bruch unter dem Mikrokanal scheitern und eine High-1-Idee vorbereiten.",
      "Ein lokaler fallender Pullback nahe dem Durchschnitt bleibt dabei eine Bullenflagge. Eine kurze Bärenlinie darin ist kein guter Grund, gegen die größere Käuferkontrolle zu verkaufen. Käufer warten auf die Fortsetzungsreaktion.",
      "Die späteren Bärenbars dürfen diese damalige Einordnung nicht rückwirkend überschreiben. Markier im Replay zuerst die damalige Käuferkontrolle und dann die spätere Veränderung. Gleiche kleine Linienformen gehören in den beiden Phasen zu unterschiedlichen Trendplänen."
    ],
    "takeaways": [
      "Früher Bullenkontext und späteren Bärenkontext getrennt lesen.",
      "Lokale Bärenlinie kann Bullenflagge sein.",
      "Späteres Ergebnis ist keine frühe Entscheidungsgrundlage."
    ],
    "callout": "Ein späteres Ergebnis ist keine frühe Entscheidungsgrundlage.",
    "prompt": "Eine Bären-Mikrolinie liegt im starken Bullenpullback am Durchschnitt. Was passt zur einfachen Auswahl?",
    "answers": [
      {
        "label": "Jede fallende Linie unabhängig vom Kontext shorten.",
        "explanation": "Das kann am unteren Ende einer Bullenflagge geschehen."
      },
      {
        "label": "Die spätere Bärenphase war schon damals sicher.",
        "explanation": "Das wäre rückwirkende Information."
      },
      {
        "label": "Auf die Käuferfortsetzung statt auf einen lokalen Gegen-Short achten.",
        "explanation": "Richtig. Die größere Kontrolle zählt."
      }
    ],
    "correct": 2
  },
  {
    "number": 31,
    "title": "Chartfall 16.3: Neuer Mikrokanal, wieder erster Gegenversuch",
    "summary": "Die Versuchszahl bezieht sich auf die konkrete Struktur.",
    "section": "Chartfall 16.3 · Zählweise",
    "scenario": "c16-31",
    "paragraphs": [
      "In der späteren Bärenphase kann ein erster Hochbruch eines engen Abschnitts scheitern. Fällt der Kurs danach mehrere Bars steil weiter, bildet sich ein neuer Mikrokanal. Ein weiterer Hochbruch kann nun dessen erster Versuch sein.",
      "Die zweite Auslösung im gesamten Abwärtsweg ist deshalb nicht zwingend ein zweiter Versuch derselben Struktur. Entscheidend ist, ob zwischenzeitlich eine neue enge Folge mit neuen Ankern entstanden ist. Der aktuelle Abschnitt bestimmt die Zählweise.",
      "Beide Hochbrüche können Low-1-Fortsetzungen vorbereiten, wenn die Bärenkontrolle trägt. Sie können trotzdem verlieren, besonders wenn schon mehr Balance entsteht. Verlang Barqualität und Platz, statt aus dem Wort erster eine automatische Erfolgsquote abzuleiten."
    ],
    "takeaways": [
      "Versuchszahl bezieht sich auf die konkrete Struktur.",
      "Neue enge Folge kann einen neuen ersten Versuch erzeugen.",
      "Zählung allein ist kein Qualitätssiegel."
    ],
    "callout": "Die Zählung allein ist kein Qualitätssiegel.",
    "prompt": "Warum kann der zweite Hochbruch des Tages trotzdem ein erster Mikrokanalversuch sein?",
    "answers": [
      {
        "label": "Dazwischen entstand ein neuer eigenständiger enger Abschnitt.",
        "explanation": "Richtig. Die Zählung gehört zur jeweiligen Struktur."
      },
      {
        "label": "Weil alle früheren Bars vergessen werden müssen.",
        "explanation": "Sie bleiben Kontext, aber die neue Struktur besitzt eigene Anker."
      },
      {
        "label": "Weil ein zweiter Versuch grundsätzlich unmöglich ist.",
        "explanation": "Er ist möglich, muss sich aber auf dieselbe Struktur beziehen."
      }
    ],
    "correct": 0
  },
  {
    "number": 32,
    "title": "Chartfall 16.3: Kleine Dreiecksflagge im Bärenverlauf",
    "summary": "Ein Dreieck kann eine kleine Bärenflagge sein.",
    "section": "Chartfall 16.3 · Signalqualität",
    "scenario": "c16-32",
    "paragraphs": [
      "Eine kurze seitwärtige Folge mit mehreren kleinen Schüben kann ein Dreieck innerhalb des Bärenverlaufs bilden. Nach den ersten Unterbrechungen ist der Name vielleicht noch nicht klar. Weitere Hoch- und Tiefschübe machen die Balanceform erkennbarer.",
      "Ein Signalbar kann als Verkäuferumkehr gelten, obwohl sein Körper leicht aufwärts gerichtet ist, wenn er nach dem Hochtest unter seiner Mitte schließt. Ein echter Verkäuferkörper würde die gerichtete Aussage stärken. Ein Dojicharakter zeigt zugleich begrenzte Signalstärke.",
      "Der größere enge Bärenkanal stützt eher den unteren Fortsetzungsplan als eine frühe Longumkehr. Prüf dennoch den tatsächlichen Ausbruch und dessen Risiko. Musterform, Körperrichtung und Schlusslage sind drei verschiedene Informationen."
    ],
    "takeaways": [
      "Dreieck kann eine kleine Bärenflagge sein.",
      "Umkehrbar braucht nicht zwingend einen Verkäuferkörper.",
      "Schlusslage und Körperqualität getrennt prüfen."
    ],
    "callout": "Schlusslage und Körperqualität getrennt prüfen.",
    "prompt": "Ein kleiner Bar mit Käuferkörper schließt nach Hochtest unter seiner Mitte. Was ist möglich?",
    "answers": [
      {
        "label": "Der Doji garantiert besonders starken Verkäuferdruck.",
        "explanation": "Ein kleiner Körper zeigt gerade weniger gerichtete Klarheit."
      },
      {
        "label": "Er kann eine Verkäuferumkehr zeigen, obwohl der Körper leicht aufwärts ist.",
        "explanation": "Richtig. Körperrichtung und Reaktion am Hoch sind verschiedene Merkmale."
      },
      {
        "label": "Ein Käuferkörper schließt jede Verkäuferreaktion aus.",
        "explanation": "Die Schlusslage und der Kontext können anders wirken."
      }
    ],
    "correct": 1
  },
  {
    "number": 33,
    "title": "Chartfall 16.3: Großes Ziel rechtfertigt keine sichere Trefferquote",
    "summary": "Ein langer Trend macht nicht jedes späte Signal automatisch gut.",
    "section": "Chartfall 16.3 · Verhältnis",
    "scenario": "c16-33",
    "paragraphs": [
      "Ein starker Bärenverlauf kann sehr weit fallen und trotzdem an einem späten Doji nur eine schwache neue Shortauslösung bieten. Mehr Tails und Überlappung deuten auf zweiseitigen Handel. Ein Short nahe dem unteren Balancebereich hat andere Qualität als der frühere Trendstart.",
      "Ein kleines geplantes Risiko im Verhältnis zu einem großen möglichen Ziel kann einen Trade rechnerisch interessant machen, obwohl die Erfolgswahrscheinlichkeit nicht hoch ist. Die Schätzung braucht aber eine belegbare Grundlage; der große spätere Gewinn liefert sie nicht rückwirkend.",
      "Wenn du nur klare Setups trainieren willst, kannst du diesen späten Versuch auslassen und auf eine überzeugende Käuferreaktion, einen besseren Verkäuferpullback oder frischen starken Verkäuferanschluss warten. Chance-Risiko-Verhältnis und Trefferwahrscheinlichkeit bleiben getrennte Größen."
    ],
    "takeaways": [
      "Langer Trend macht jedes späte Signal nicht automatisch gut.",
      "Großes Ziel und hohe Wahrscheinlichkeit sind verschieden.",
      "Ein unklarer später Einstieg kann ausgelassen werden."
    ],
    "callout": "Einen unklaren späten Einstieg darfst du auslassen.",
    "prompt": "Ein schwacher Doji-Short hätte später einen großen Gewinn gebracht. Was beweist das nicht?",
    "answers": [
      {
        "label": "Dass der Kurs später stark gefallen ist.",
        "explanation": "Das kann sichtbar stattgefunden haben."
      },
      {
        "label": "Dass ein großes Ziel möglich war.",
        "explanation": "Möglichkeit und Wahrscheinlichkeit sind verschieden."
      },
      {
        "label": "Eine hohe vorherige Erfolgswahrscheinlichkeit.",
        "explanation": "Richtig. Das spätere Ergebnis bestimmt nicht die damalige Signalqualität."
      }
    ],
    "correct": 2
  },
  {
    "number": 34,
    "title": "Chartfall 16.3: Letzte Flagge und neuer Bärentag",
    "summary": "Ein Vortagsausbruch kann am neuen Start scheitern.",
    "section": "Chartfall 16.3 · Tageswechsel",
    "scenario": "c16-34",
    "paragraphs": [
      "Eine längere Bullenphase kann am Vortag mit einem kräftigen Ausbruch aus einer eher waagerechten Flagge enden. Am nächsten Start kann dieser Ausbruch scheitern. Ein großer Verkäufer-Einstiegsbar und danach ein enger Bärenkanal stützen dann einen neuen Bären-Tageskontext.",
      "Das ist eine andere Phase als der frühere erste Bullenpullback, den die Käufer aufgenommen haben. Limitkäufer im alten Bullenabschnitt und Stopkäufer nach dessen High 1 hatten damals eine andere Grundlage als spätere Verkäufer im neuen Tagesverlauf.",
      "Markier den tatsächlichen Übergang über Gap, Auslösung und Anschluss. Die Einordnung Trend vom Tagesbeginn entsteht aus der Folge, nicht aus einem vorher bekannten Tagesnamen. Ein alter Flaggenausbruch kann zur letzten Flagge werden, muss es aber nicht immer."
    ],
    "takeaways": [
      "Vortagsausbruch kann am neuen Start scheitern.",
      "Kräftiger Verkäuferanschluss verändert den Tageskontext.",
      "Alte und neue Trendpläne zeitlich trennen."
    ],
    "callout": "Alte und neue Trendpläne zeitlich trennen.",
    "prompt": "Was stützt den neuen Bären-Tageskontext nach der alten Bullenflagge?",
    "answers": [
      {
        "label": "Fehlschlag mit kräftigem Verkäuferbar und engem Anschlusskanal.",
        "explanation": "Richtig. Die neue Kontrolle entsteht aus sichtbarer Folge."
      },
      {
        "label": "Nur das Kalenderdatum ist gewechselt.",
        "explanation": "Ein neuer Tag allein ändert keine Richtung."
      },
      {
        "label": "Der alte Käuferpullback war rückwirkend immer falsch.",
        "explanation": "Die damalige Struktur muss eigenständig beurteilt werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 35,
    "title": "Chartfall 16.4: Eine Detailansicht erklärt die Mikrolinie",
    "summary": "Unterschiedlicher Detailgrad, derselbe Kursweg.",
    "section": "Chartfall 16.4 · Auflösung",
    "scenario": "c16-35",
    "paragraphs": [
      "Im vierten Chartfall zeigt die kleinere Zeitebene viele gewöhnliche Trendlinien, die im größeren Barbild als kurze Mikro-Trendlinien erscheinen. Ein kleiner Pullback im größeren Chart kann im Detail aus mehreren Gegenbars und einem Rücklauftest bestehen.",
      "Das eigene Beispiel bündelt je fünf synthetische Detailbars zu einem großen OHLC-Bar. Dadurch bleibt der Kursweg in beiden Panels identisch. Die Linien beziehen sich auf den jeweils sichtbaren Detailgrad, nicht auf unterschiedliche Märkte.",
      "Die Detailansicht dient hier dem Verständnis. Du musst sie nicht zusätzlich zur Hauptansicht handeln. Zeigt deine gewählte Ebene schon Ort, Stärke und Fehlschlag, kann ein weiterer Chart mehr ablenken als nützen."
    ],
    "takeaways": [
      "Unterschiedlicher Detailgrad, derselbe Kursweg.",
      "Aggregation erhält Anfang, Ende und Extreme.",
      "Zusatzansicht ist eine Lernhilfe, keine Pflicht."
    ],
    "callout": "Die Zusatzansicht ist eine Lernhilfe, keine Pflicht.",
    "prompt": "Warum muss ein zusätzlicher Detailchart nicht für jede Order geöffnet werden?",
    "answers": [
      {
        "label": "Weil jeder Mikrobruch risikofrei ist.",
        "explanation": "Der Plan braucht weiterhin eine Verlustgrenze."
      },
      {
        "label": "Die Hauptansicht kann den entscheidenden Ablauf bereits zeigen.",
        "explanation": "Richtig. Mehr Information verbessert nicht automatisch die Auswahl."
      },
      {
        "label": "Weil kleine Charts keine realen Preise zeigen.",
        "explanation": "Sie zeigen denselben Markt mit kleinerer Bündelung."
      }
    ],
    "correct": 1
  },
  {
    "number": 36,
    "title": "Chartfall 16.4: Neue Linien werden flacher, später dominiert die Gegenseite",
    "summary": "Flachere neue Linien können mehr Gegenbeteiligung zeigen.",
    "section": "Chartfall 16.4 · Übergang",
    "scenario": "c16-36",
    "paragraphs": [
      "Ein kräftiger Aufwärtsverlauf kann mehrere tiefere Rücklauftests bilden. Die neu gezogenen Linien werden dabei flacher. Das zeigt mehr Rückgabe und weniger einseitige Käuferkontrolle, ohne aus jeder Verletzung sofort einen Bärentrend zu machen.",
      "Später kann eine fallende Hochverbindung die neuen Bars besser erklären als die früheren steigenden Linien. Dann gewinnt die Gegenstruktur praktisch mehr Gewicht. Der Übergang entsteht aus Rücklaufgröße, Hochtests und Verkäuferanschluss.",
      "Behalte die früheren Anker im Journal sichtbar. Eine neue flachere Linie ist eine Aktualisierung der Struktur, keine Erlaubnis, den Stop einer alten Longposition unbegrenzt auszuweiten. Die Risikoentscheidung bleibt von der neuen Beschreibung getrennt."
    ],
    "takeaways": [
      "Flachere neue Linien können mehr Gegenbeteiligung zeigen.",
      "Gegenlinien gewinnen nach sichtbarer Veränderung Gewicht.",
      "Neue Zeichnung rettet keinen alten Verlustplan."
    ],
    "callout": "Eine neue Zeichnung rettet keinen alten Verlustplan.",
    "prompt": "Was bedeutet eine Folge immer flacherer Bullenlinien zunächst?",
    "answers": [
      {
        "label": "Ein garantiert sofortiger Abwärtstrend.",
        "explanation": "Die erste Veränderung kann auch Balance sein."
      },
      {
        "label": "Die alten Stops sind automatisch ungültig.",
        "explanation": "Strukturaktualisierung hebt sie nicht auf."
      },
      {
        "label": "Mehr Rückgabe und weniger einseitige Kontrolle.",
        "explanation": "Richtig. Ein kompletter Bärentrend braucht weitere Belege."
      }
    ],
    "correct": 2
  },
  {
    "number": 37,
    "title": "Chartfall 16.4: Rückblickende Signalfülle ist keine Echtzeitbilanz",
    "summary": "Rückblickend sichtbare Fülle war in Echtzeit noch unvollständig.",
    "section": "Chartfall 16.4 · Auswahl",
    "scenario": "c16-37",
    "paragraphs": [
      "Eine fertige Detailgrafik enthält viele mögliche Randtests, Überschreitungen und Fehlschläge. Wer erst am Ende alle Linien einzeichnet, erkennt die brauchbaren Stellen leicht. Diese Übersicht hattest du während der laufenden Bars noch nicht vollständig.",
      "Schnelle gute Setups kann man verpassen, während schwache, langsamere Formen viel Zeit für einen Einstieg lassen. Diese Auswahlverzerrung kann dazu führen, dass die tatsächlichen Orders schlechter sind als die rückblickend markierten Beispiele.",
      "Trainiere deshalb mit verdeckter Folge und festem Tempo. Notier auch verpasste und ausgelassene Setups samt Grund. Die Lernfrage ist, ob du mit den damaligen Informationen einen begrenzten Plan auswählen konntest, nicht ob später viele schöne Pfeile möglich wären."
    ],
    "takeaways": [
      "Rückblickend sichtbare Fülle war in Echtzeit noch unvollständig.",
      "Schnelle Auslösungen können Auswahl verzerren.",
      "Auch Auslassen und Verpassen dokumentieren."
    ],
    "callout": "Auch Auslassen und Verpassen dokumentieren.",
    "prompt": "Was prüft ein sinnvoller Replaytest besser als eine fertige Grafik?",
    "answers": [
      {
        "label": "Die Auswahl mit damals bekannten Bars und begrenzter Entscheidungszeit.",
        "explanation": "Richtig. Das nähert sich der tatsächlichen Aufgabe an."
      },
      {
        "label": "Ob ich am Ende beliebig viele profitable Pfeile zeichnen kann.",
        "explanation": "Das nutzt das spätere Ergebnis."
      },
      {
        "label": "Ob jedes verpasste Signal sofort hinterhergehandelt werden muss.",
        "explanation": "Das würde einen neuen ungeplanten Einstieg erzeugen."
      }
    ],
    "correct": 0
  },
  {
    "number": 38,
    "title": "Chartfall 16.5: Volatiler Tag, gleiche Struktur, anderes Geldrisiko",
    "summary": "Größere Barstrecken verändern Geldrisiko und Menge.",
    "section": "Chartfall 16.5 · Risiko",
    "scenario": "c16-38",
    "paragraphs": [
      "Der fünfte Chartfall stammt aus einem ungewöhnlich volatilen historischen Tagesverlauf. Die Mikrostrukturen bleiben lesbar, aber einzelne Bars umfassen viel größere Strecken als in einem ruhigen Beispiel. Ein gleich großer Kontraktbestand hätte deshalb ein anderes Geldrisiko.",
      "Ein weiter entfernter struktureller Stop braucht bei gleichem zulässigem Geldverlust eine kleinere Menge. Verdoppelt sich die Stopdistanz bei gleicher Wertigkeit pro Preiseinheit, halbiert sich rechnerisch die mögliche Menge vor Rundung und Kosten.",
      "Die historischen Punktabstände sind keine heutigen Stopempfehlungen. Bestimm die tatsächliche Ausstiegsgrenze aus dem aktuellen Setup und die Menge aus deinem Geldrisiko. Dieselbe Musterlogik heißt nicht dieselbe Kontraktzahl oder derselbe Zielabstand."
    ],
    "takeaways": [
      "Größere Barstrecken verändern Geldrisiko und Menge.",
      "Bei doppelter Stopdistanz halbe Menge für gleiches Risiko.",
      "Historische Abstände sind keine heutige Vorgabe."
    ],
    "callout": "Historische Abstände sind keine heutige Vorgabe.",
    "prompt": "Die Stopdistanz verdoppelt sich, der zulässige Geldverlust bleibt gleich. Was passiert rechnerisch mit der Menge?",
    "answers": [
      {
        "label": "Die Bargröße spielt für das Risiko keine Rolle.",
        "explanation": "Der Verlust hängt an Distanz und Menge."
      },
      {
        "label": "Sie halbiert sich vor Rundung und Kosten.",
        "explanation": "Richtig. Menge mal Distanz muss bei gleicher Preiseinheitswertigkeit gleich bleiben."
      },
      {
        "label": "Sie verdoppelt sich automatisch.",
        "explanation": "Das würde das Risiko weiter erhöhen."
      }
    ],
    "correct": 1
  },
  {
    "number": 39,
    "title": "Chartfall 16.5: Untere Überschreitung und Zweibar-Reaktion",
    "summary": "Eine untere Überschreitung braucht sichtbare Käuferreaktion.",
    "section": "Chartfall 16.5 · Gegenreaktion",
    "scenario": "c16-39",
    "paragraphs": [
      "Ein enger Bärenabschnitt überschreitet seine untere Kanalgrenze. Ein anschließender Käuferbar kann mit dem Tiefbar eine Zweibar-Umkehr bilden. Eine passende ii-Insidefolge mit Käuferabschlüssen stützt den Eindruck neuer Käuferbeteiligung.",
      "Die untere Grenze kann als Parallele der Hochverbindung oder direkt aus Schubtiefs konstruiert werden. Beide Varianten dürfen unterschiedliche Testlagen ergeben. Ein geometrisch passender Bereich allein bestätigt keine große Umkehr.",
      "Die Folge kann zunächst nur einen Rücklauf zum Durchschnitt erzeugen, bevor ein weiterer Bärenkanal beginnt. Prüf das Ausmaß der Käuferreaktion und ihre späteren Tests. Zweibar-Reaktion, begrenzter Scalp und neuer Tagestrend sind unterschiedliche Aussagen."
    ],
    "takeaways": [
      "Untere Überschreitung braucht sichtbare Käuferreaktion.",
      "Parallele und direkte Tiefverbindung unterscheiden.",
      "Erste Reaktion kann nur Rücklauf bleiben."
    ],
    "callout": "Die erste Reaktion kann nur ein Rücklauf bleiben.",
    "prompt": "Eine Zweibar-Käuferreaktion folgt auf den tiefen Kanaltest. Was ist noch offen?",
    "answers": [
      {
        "label": "Ein neuer Bullentag ist bereits garantiert.",
        "explanation": "Die erste Reaktion allein genügt nicht."
      },
      {
        "label": "Die alten Verkäuferbars sind gelöscht.",
        "explanation": "Sie bleiben der Kontext des Tests."
      },
      {
        "label": "Ob sie nur Rücklauf oder Beginn einer größeren Umkehr ist.",
        "explanation": "Richtig. Weitere Käuferkontrolle muss sichtbar werden."
      }
    ],
    "correct": 2
  },
  {
    "number": 40,
    "title": "Chartfall 16.5: Fehlgeschlagene Shorts werden Käuferpullbacks",
    "summary": "Ein fehlgeschlagener Trendshort kann einen Käuferpullback vorbereiten.",
    "section": "Chartfall 16.5 · Gegenseitige Fehlschläge",
    "scenario": "c16-40",
    "paragraphs": [
      "Ein erster Hochbruch im Bären-Mikrokanal kann scheitern und einen kurzen Low-1-Short auslösen. Scheitert danach dieser Verkäuferanschluss, entsteht eine neue Käuferidee aus dem Fehlschlag des Fehlschlags. Ein späteres Testtief kann dabei sogar tiefer liegen.",
      "Im Chartfall wird ein kleiner Bar damit rückblickend zur letzten Flagge des alten Abwärtsabschnitts. Für die damalige Entscheidung zählt aber erst die sichtbare Rückkehr mit Käuferanschluss. Der höhere Bruch und sein tieferer Rücklauf sind kein geometrischer Widerspruch.",
      "Behandle jede Auslösung eigenständig. Ein Outside-down-Bar kann den kurzen Verkäuferplan auslösen, ein späterer Käuferbar seine Ungültigkeit zeigen. Du musst nicht jedes Umschalten sofort mit einer neuen Position handeln."
    ],
    "takeaways": [
      "Fehlgeschlagener Trendshort kann Käuferpullback vorbereiten.",
      "Ausbruchspullback kann ein tieferes Testtief besitzen.",
      "Jede neue Position braucht eigene Begründung."
    ],
    "callout": "Jede neue Position braucht eine eigene Begründung.",
    "prompt": "Ein Käuferbruch fällt auf ein tieferes Tief und kehrt dann kräftig zurück. Was ist möglich?",
    "answers": [
      {
        "label": "Ein Ausbruchspullback mit tieferem Tief.",
        "explanation": "Richtig. Der Test muss nicht höher enden."
      },
      {
        "label": "Ein Ausbruchspullback kann grundsätzlich nie ein tieferes Tief haben.",
        "explanation": "Die Reaktion und der Kontext bestimmen den Ablauf mit."
      },
      {
        "label": "Die erste Shortposition ist deshalb unbegrenzt weiterzuhalten.",
        "explanation": "Ihr Schutzplan bleibt eigenständig."
      }
    ],
    "correct": 0
  },
  {
    "number": 41,
    "title": "Chartfall 16.5: Schwaches Low 1 nach wachsendem Käuferdruck",
    "summary": "Wachsende Käuferkörper schwächen späte Gegen-Shorts.",
    "section": "Chartfall 16.5 · Neue Kontrolle",
    "scenario": "c16-41",
    "paragraphs": [
      "Nach einem späten Tief können mehrere Käuferkörper auftreten. Ein späterer kleiner Doji-Low-1-Versuch gegen diese Käuferfolge ist schwächer als frühere Shorts im starken Bärenabschnitt. Die aktuelle Stärke verändert die Bedeutung desselben Musternamens.",
      "Ein kurzer unterer Mikrobruch in der neuen Rally kann als Falle für frühe Exits wirken und danach eine High-1-Idee bilden. Käufer müssen vor der Fortsetzung nicht schon sicher wissen, dass ein großer Bullentrend folgt. Ein begrenzter Plan kann zunächst nur die nächste Käuferstrecke erwarten.",
      "Erst nach weiterem Anschluss kann die Kontrolle überzeugender long werden und ein anderer Halteplan sinnvoll sein. Zusätzliche Menge oder längeres Halten brauchen vorher festgelegte Regeln. Ein späterer großer Gewinn rechtfertigt keine ungeplante Erweiterung im Nachhinein."
    ],
    "takeaways": [
      "Wachsende Käuferkörper schwächen späte Gegen-Shorts.",
      "Kleine Exitsfalle kann High 1 vorbereiten.",
      "Scalpidee und späterer Swingplan getrennt prüfen."
    ],
    "callout": "Scalpidee und späteren Swingplan getrennt prüfen.",
    "prompt": "Nach zwei kräftigen Käuferbars entsteht ein kleiner Doji-Low-1-Short. Was ist wichtig?",
    "answers": [
      {
        "label": "Ein größerer späterer Trend war schon sicher bekannt.",
        "explanation": "Die Folge war zu diesem Zeitpunkt noch offen."
      },
      {
        "label": "Der neue Käuferdruck kann gegen diesen Verkäuferplan sprechen.",
        "explanation": "Richtig. Der gleiche Name trifft auf veränderten Kontext."
      },
      {
        "label": "Der alte Bärentrend bestimmt unabhängig von neuen Bars alles.",
        "explanation": "Aktuelle Stärke kann die Kontrolle ändern."
      }
    ],
    "correct": 1
  },
  {
    "number": 42,
    "title": "Chartfall 16.5: Gapfehlschlag und vollständiges Spike-Kanal-Muster",
    "summary": "Die erste Gapumkehr kann selbst scheitern.",
    "section": "Chartfall 16.5 · Tagesentwicklung",
    "scenario": "c16-42",
    "paragraphs": [
      "Der historische Tag beginnt mit einem großen Abwärtsgap und zunächst einem kräftigen Käuferbar. Ein früher Anstieg kann aber wieder scheitern und in einem Outside-down-Bar nach unten auslösen. Die gescheiterte Gapumkehr wird zum Pullback des ursprünglichen unteren Ausbruchs.",
      "Ein enger Verkäuferabschnitt wirkt danach wie ein Spike. Eine Rally zum Durchschnitt und ein längerer Bärenkanal können folgen, bevor das spätere Tief eine größere Käuferreaktion bildet. Der Tagesverlauf enthält so mehrere Kontrollphasen statt einer einzigen sicheren Richtung.",
      "Nach der späteren Umkehr sind das obere Ende der früheren klaren Käuferreaktion und der Beginn des Bärenkanals mögliche Testbereiche. Pflichtziele sind sie nicht. Zeichne den zeitlichen Ablauf mit damaligen Ankern, damit die spätere Rally nicht so wirkt, als hättest du sie schon am Start gewusst."
    ],
    "takeaways": [
      "Erste Gapumkehr kann selbst scheitern.",
      "Spike, Rücklauf und Kanal als Folge unterscheiden.",
      "Spätere Umkehrziele bleiben mögliche Referenzen."
    ],
    "callout": "Spätere Umkehrziele bleiben mögliche Referenzen.",
    "prompt": "Die erste Käuferreaktion auf das Abwärtsgap scheitert im Outside-down-Bar. Welche Idee wird plausibel?",
    "answers": [
      {
        "label": "Das Gap ist dadurch aus der Vorgeschichte verschwunden.",
        "explanation": "Es bleibt der ursprüngliche Ausbruchskontext."
      },
      {
        "label": "Die späte Schlussrally war am Start schon garantiert.",
        "explanation": "Sie muss sich erst später entwickeln."
      },
      {
        "label": "Ein Ausbruchspullback für die ursprüngliche Bärenrichtung.",
        "explanation": "Richtig. Der Fehlschlag kann die Gaprichtung wieder stützen."
      }
    ],
    "correct": 2
  },
  {
    "number": 43,
    "title": "Chartfall 16.6: Lokale Bärenlinie in einem starken Bullentag",
    "summary": "Lokale Bärenlinien können normale Bullenpullbacks sein.",
    "section": "Chartfall 16.6 · Kontext",
    "scenario": "c16-43",
    "paragraphs": [
      "Im sechsten Chartfall entstehen mehrere kleine fallende Mikro-Trendlinien während eines kräftigen Bullentages. Sie beschreiben normale Pullbacks nahe oder oberhalb des Durchschnitts. Der größere Verlauf zeigt noch keine überzeugende Bärenumkehr.",
      "Ein lokaler fehlgeschlagener Hochbruch dieser Bärenlinie könnte formal einen Shortnamen tragen. Als einfache Auswahl passt er aber schlecht zur größeren Käuferkontrolle. Der Ort ist oft das Ende der Bullenflagge, an dem Käufer Fortsetzung suchen.",
      "Verlang vor einem echten neuen Bärenplan die Veränderung der größeren Struktur: deutlicher Gegenbruch, Extremtest und Verkäuferanschluss. Ohne diese Folge dient die kleine Gegenlinie eher dazu, den möglichen späteren Käufer-Ausbruchspullback zu beobachten."
    ],
    "takeaways": [
      "Lokale Bärenlinien können normale Bullenpullbacks sein.",
      "Größere Käuferkontrolle hat Vorrang vor kleinem Shortnamen.",
      "Gegenplan verlangt belegten Kontrollwechsel."
    ],
    "callout": "Ein Gegenplan verlangt einen belegten Kontrollwechsel.",
    "prompt": "Was ist der wichtigste Kontext der lokalen Bärenlinie im starken Bullentag?",
    "answers": [
      {
        "label": "Sie kann nur die kleine Bullenflagge beschreiben.",
        "explanation": "Richtig. Ihre lokale Richtung bestimmt nicht allein die Planrichtung."
      },
      {
        "label": "Jede fallende Linie beweist die große Bärenumkehr.",
        "explanation": "Dafür fehlen die größeren Strukturbelege."
      },
      {
        "label": "Der Durchschnitt macht alle Setups sicher.",
        "explanation": "Er ist keine Garantie."
      }
    ],
    "correct": 0
  },
  {
    "number": 44,
    "title": "Chartfall 16.6: Den gescheiterten lokalen Short als Käufertest lesen",
    "summary": "Ein gescheiterter lokaler Short kann einen Trendlong vorbereiten.",
    "section": "Chartfall 16.6 · Ausbruchspullback",
    "scenario": "c16-44",
    "paragraphs": [
      "Die kleine Bärenlinie bricht nach oben, der Kurs fällt kurz zurück, und ein lokaler Shortversuch scheitert. Kehrt der Kurs danach wieder aufwärts, kann der ganze Abschnitt einen Käufer-Ausbruchspullback in Richtung des größeren Trends bilden.",
      "Das Rücklauftief kann etwas höher oder tiefer liegen als das vorherige lokale Tief. Die Käuferreaktion und der Kontext sind wichtiger als diese einzelne Zahl. Der Einstieg nach bestätigter Rückkehr liegt nicht automatisch exakt am selben Preis wie das Schließen aller Shorts.",
      "Das Bild möglicher Shortschließungen erklärt zusätzliche Kauforders, ohne einzelne Positionen zu kennen. Nutze den Fehlschlag als neue sichtbare Information. Eine eigene Longorder braucht Auslöser, Zielraum und eine klare Grenze, falls die Fortsetzung ebenfalls scheitert."
    ],
    "takeaways": [
      "Gescheiterter lokaler Short kann Trendlong vorbereiten.",
      "Höheres und tieferes Testtief sind möglich.",
      "Mögliche Schließungsorders sind keine bekannte Positionsliste."
    ],
    "callout": "Mögliche Schließungsorders sind keine bekannte Positionsliste.",
    "prompt": "Ein lokaler Short scheitert nach dem oberen Mikrobruch. Welche Folge passt zum Bullenkontext?",
    "answers": [
      {
        "label": "Der exakte Ausstieg aller Shorts ist damit bekannt.",
        "explanation": "Die Bars zeigen keine einzelnen Positionen."
      },
      {
        "label": "Ein Käufer-Ausbruchspullback mit erneuter Aufwärtsreaktion.",
        "explanation": "Richtig. Er verbindet lokale Folge und größere Richtung."
      },
      {
        "label": "Eine Pflicht, ohne Verlustgrenze long zu werden.",
        "explanation": "Ein neuer Plan braucht Schutz."
      }
    ],
    "correct": 1
  },
  {
    "number": 45,
    "title": "Chartfall 16.6: Mittrend-Mikrobruch und haltendes höheres Tief",
    "summary": "Ein Mittrend-Mikrobruch kann High 1 vorbereiten.",
    "section": "Chartfall 16.6 · Bestätigung",
    "scenario": "c16-45",
    "paragraphs": [
      "Auch eine steigende Mikro-Trendlinie im Bullentag kann kurz unterschritten werden. Ein erneuter Käuferanschluss kann daraus eine High-1-Fortsetzung bilden. Der kleine untere Bruch ist dann ein Pullback der aktuellen Kontrolle.",
      "Im vertieften Tagesablauf wird der Durchschnitt kurz unterschritten, aber die Käufer kehren mit mehreren deutlichen Körpern zurück. Ein früher Verkäufer-Ausbruchspullback hat dadurch weniger Unterstützung. Fehlt ein überzeugender zweiter Verkäuferversuch, ist ein automatischer Short nicht begründet.",
      "Ein haltendes höheres Tief kann anschließend die Käuferidee stützen. Durchschnittsverletzung, starke Rückkehr und Rücklauftest sind unterschiedliche Schritte. Erst die Folge macht den Plan nachvollziehbar; die erste Linienverletzung allein legt die Richtung nicht fest."
    ],
    "takeaways": [
      "Mittrend-Mikrobruch kann High 1 vorbereiten.",
      "Kräftige Rückkehr schwächt den frühen Gegenplan.",
      "Höheres Tief mit tatsächlichem Anschluss beurteilen."
    ],
    "callout": "Ein höheres Tief mit tatsächlichem Anschluss beurteilen.",
    "prompt": "Der Durchschnitt bricht kurz, danach folgen mehrere starke Käuferbars. Was fehlt für den frühen Short?",
    "answers": [
      {
        "label": "Eine Möglichkeit, die ersten Preise zu ändern.",
        "explanation": "Die Daten bleiben gleich."
      },
      {
        "label": "Ein Signalname für den Durchschnitt.",
        "explanation": "Der Name ersetzt keinen Verkäuferanschluss."
      },
      {
        "label": "Eine überzeugende neue Verkäuferreaktion statt nur der ersten Verletzung.",
        "explanation": "Richtig. Die Käuferfolge widerspricht dem vorschnellen Gegenplan."
      }
    ],
    "correct": 2
  },
  {
    "number": 46,
    "title": "Dein Mikrokanal-Protokoll: Kontext vor kleinem Signal",
    "summary": "Die größere Kontrolle bestimmen, bevor du das lokale Signal liest.",
    "section": "Abschluss · Replay",
    "scenario": "c16-46",
    "paragraphs": [
      "Notier vor dem nächsten Bar die größere Kontrolle und den lokalen Mikroabschnitt. Unterscheide Mikro-Trendlinie und äußere Kanalgrenze. Halte fest, ob du einen ersten Pullback, einen Gegenkanalbruch oder eine späte Schubüberschreitung beobachtest.",
      "Deck die Folge schrittweise auf und beschreibe Ausbruch, Gegenreaktion und Anschluss getrennt. Zähl nur Versuche derselben Struktur zusammen. Nach einer neuen engen Folge kann die Zählung neu beginnen, während die alten Bars weiterhin Kontext bleiben.",
      "Ein konkreter Trade braucht einen realen Auslösungspreis, Zielraum und einen vorab begrenzten Geldverlust. Eine neue Linie oder Zeitebene erweitert diesen Verlust nicht automatisch. Sind die Bilder widersprüchlich oder wurde die Auslösung zu schnell verpasst, ist Abwarten ein vollständiges Ergebnis der Übung."
    ],
    "takeaways": [
      "Größere Kontrolle vor lokalem Signal bestimmen.",
      "Geometrie, Versuchszählung und Anschluss getrennt notieren.",
      "Neue Zeichnung verändert keinen alten Verlustplan."
    ],
    "callout": "Eine neue Zeichnung verändert keinen alten Verlustplan.",
    "prompt": "Welche Reihenfolge hilft bei einem Mikrosetup am meisten?",
    "answers": [
      {
        "label": "Kontext, lokale Struktur, Reaktion, Auslösung und Risiko prüfen.",
        "explanation": "Richtig. Die kleine Form bekommt so eine überprüfbare Bedeutung."
      },
      {
        "label": "Zuerst handeln und den Kontext nach dem Ergebnis auswählen.",
        "explanation": "Das nutzt späteres Wissen zur Rechtfertigung."
      },
      {
        "label": "Bei jeder Linienänderung das zulässige Risiko vergrößern.",
        "explanation": "Die Zeichnung hebt den Plan nicht auf."
      }
    ],
    "correct": 0
  }
];

export const chapterSixteenLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-16-${number}`;
  return {
    id: `price-action-trends.chapter-16.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 16 · ${d.section}`,
    sourceAnchors: [`Kapitel 16 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 16 · Mikrokanäle',
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
