import type { ChapterSeventeenScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterSeventeenScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Horizontale Linie: ein Preis bleibt gleich",
    "summary": "Ein früherer Preisbereich wird nach rechts verlängert.",
    "section": "Grundlagen",
    "scenario": "c17-01",
    "paragraphs": [
      "Eine horizontale Linie hält einen Preis fest. Anders als eine steigende oder fallende Trendlinie ändert sie ihren Wert nicht mit jedem neuen Bar. Damit kannst du einen bereits sichtbaren Swingpunkt oder einen anderen wichtigen Preisbereich auf spätere Bars beziehen.",
      "An dieser Stelle hat der Markt schon einmal reagiert. Beim nächsten Besuch kann erneut Gegenhandel entstehen, aber auch ein Ausbruch mit Anschluss. Die Linie zeigt den Ort der Prüfung; die neuen Bars zeigen ihr Ergebnis.",
      "Zeichne wenige begründete Referenzen. Bekommt jeder kleine Bar eine eigene Linie, sieht fast jeder neue Kurs bedeutsam aus. Notier zu jeder Linie, welcher frühere Punkt sie begründet und ob dieser damals schon bekannt war."
    ],
    "callout": "Jede Linie braucht einen bekannten Bezugspunkt.",
    "takeaways": [
      "Preisreferenz bleibt horizontal.",
      "Ort und Reaktion getrennt beschreiben.",
      "Jede Linie braucht einen bekannten Bezugspunkt."
    ],
    "prompt": "Was beschreibt eine horizontale Swinglinie?",
    "answers": [
      {
        "label": "Den Preis eines bereits sichtbaren Swingpunkts.",
        "explanation": "Richtig. Sie verlängert diesen Preis nach rechts."
      },
      {
        "label": "Die zwingende Richtung des nächsten Bars.",
        "explanation": "Eine Referenz legt keine zukünftige Richtung fest."
      },
      {
        "label": "Eine mit jedem Bar steigende Grenze.",
        "explanation": "Das wäre eine geneigte Linie."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Swingpunkte erst nach einer Reaktion erkennen",
    "summary": "Ein Hoch oder Tief wird durch die anschließende Bewegung zum Swing.",
    "section": "Grundlagen",
    "scenario": "c17-02",
    "paragraphs": [
      "Ein einzelnes neues Hoch ist zunächst nur der bisher höchste Preis des Abschnitts. Erst wenn der Markt davon zurückläuft, wird daraus ein erkennbarer Swinghochpunkt. Am Tief gilt die gleiche zeitliche Reihenfolge umgekehrt.",
      "Das endgültige Hoch des Tages kennst du während des Tages nicht. Eine Linie an einem bestätigten lokalen Swing ist trotzdem möglich. Du darfst sie später durch ein neues Hoch ergänzen, ohne deine frühere Beobachtung umzuschreiben.",
      "Im Replay verdeckst du die Zukunft. Markier den Punkt erst nach der sichtbaren Gegenbewegung und nutze ihn dann als Referenz. So bleibt klar, welche Information vor dem nächsten Test tatsächlich verfügbar war."
    ],
    "callout": "Die Zukunft nicht als frühere Information ausgeben.",
    "takeaways": [
      "Laufendes Extrem und bestätigter Swing unterscheiden.",
      "Bestätigung benötigt spätere Bars.",
      "Die Zukunft nicht als frühere Information ausgeben."
    ],
    "prompt": "Wann darf das lokale Hoch im Replay als bestätigter Swing gelten?",
    "answers": [
      {
        "label": "Rückwirkend schon vor dem Hochbar.",
        "explanation": "So würde späteres Wissen vorgezogen."
      },
      {
        "label": "Nach einer erkennbaren Gegenbewegung.",
        "explanation": "Richtig. Erst diese Reaktion macht den Swing sichtbar."
      },
      {
        "label": "Sobald es irgendwo ein hohes Tick gibt.",
        "explanation": "Das Hoch kann sofort weiter steigen."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Range: die Grenze als Prüfbereich",
    "summary": "Überlappung und wiederholte Rückkehr stützen die Range-Lesart.",
    "section": "Range oder Trend",
    "scenario": "c17-03",
    "paragraphs": [
      "Überlappen sich größere Abschnitte und kommen Ausflüge nach außen wieder zurück, ist eine Range-Lesart plausibel. Frühere Swinghochs und Swingtiefs können dann Bereiche markieren, an denen ein weiterer Ausbruch scheitert.",
      "Ein Tick über dem Hoch beendet diese Lesart noch nicht. Für einen Fehlausbruch brauchst du die Rückkehr und eine passende Gegenreaktion. Kräftige Bars, die außerhalb schließen und dort weiterarbeiten, sprechen dagegen für eine veränderte Lage.",
      "Beurteile die Range vor dem Grenztest. Sonst erklärst du erst nach dem Ergebnis jeden gescheiterten Ausbruch zur Range und jeden erfolgreichen zum Trend. Halte fest, welche Beobachtung deine anfängliche Erwartung widerlegen würde."
    ],
    "callout": "Anschluss außerhalb kann die Range-Lesart widerlegen.",
    "takeaways": [
      "Range aus dem bisherigen Verlauf ableiten.",
      "Kurzer Grenzübertritt ist noch kein Regimewechsel.",
      "Anschluss außerhalb kann die Range-Lesart widerlegen."
    ],
    "prompt": "Was schwächt die Erwartung eines Fehlausbruchs?",
    "answers": [
      {
        "label": "Allein die Existenz eines alten Hochs.",
        "explanation": "Dieses Hoch begründet nur die Referenz."
      },
      {
        "label": "Ein kleines Tick über der Grenze ohne weitere Daten.",
        "explanation": "Das allein zeigt noch keine dauerhafte Fortsetzung."
      },
      {
        "label": "Mehrere kräftige Bars mit Anschluss außerhalb.",
        "explanation": "Richtig. Der Markt findet dort offenbar weiteren Handel."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Höheres Hoch und Rückkehr in die Range",
    "summary": "Ein neues Hoch kann eine Umkehr vorbereiten.",
    "section": "Fehlausbrüche",
    "scenario": "c17-04",
    "paragraphs": [
      "In einer Range kann ein Versuch über dem alten Swinghoch Käufer anziehen, die eine Fortsetzung erwarten. Fällt der Markt anschließend darunter zurück, geraten diese neuen Käufe unter Druck. Eine Verkäuferreaktion kann daraus einen Umkehrversuch machen.",
      "Das neue Hoch ist höher als die alte Referenz; die mögliche Umkehr bekommt deshalb den Zusatz höheres Hoch. Dieser Zusatz beschreibt den Ort. Er ersetzt weder einen Signalbar noch die Prüfung des verfügbaren Raums nach unten.",
      "Im Diagramm erreicht der neue Versuch 76 über der Referenz 70, schließt aber wieder darunter. Erst danach folgt eine deutliche Verkäuferkerze. Beobachtung, Signal und Folge sind drei verschiedene Zeitpunkte."
    ],
    "callout": "Der Gegenanschluss bleibt gesondert zu prüfen.",
    "takeaways": [
      "Höheres Hoch beschreibt den neuen Extrempunkt.",
      "Rückkehr zeigt den möglichen Fehlschlag.",
      "Gegenanschluss bleibt gesondert zu prüfen."
    ],
    "prompt": "Was macht das höhere Hoch zum möglichen Umkehrsetup?",
    "answers": [
      {
        "label": "Die Rückkehr unter die Referenz mit Verkäuferreaktion.",
        "explanation": "Richtig. Der Grenzübertritt allein wäre noch offen."
      },
      {
        "label": "Nur der neue Höchstpreis.",
        "explanation": "Ein neues Hoch kann auch erfolgreich ausbrechen."
      },
      {
        "label": "Dass jeder Käufer dort verlieren muss.",
        "explanation": "Die einzelne Position und ihr Plan sind unbekannt."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Tieferes Tief und Käuferreaktion",
    "summary": "Unter einem alten Tief kann ein Abwärtsversuch scheitern.",
    "section": "Fehlausbrüche",
    "scenario": "c17-05",
    "paragraphs": [
      "Dieselbe Logik gilt am unteren Rand. Ein neues Tief unter einem sichtbaren Swingtief ist zunächst ein Abwärtsausbruch. Kehren die Bars in die bisherige Range zurück, wird ein Fehlausbruch nach unten möglich.",
      "Ein unterer Tail zeigt die Ablehnung eines Preises innerhalb eines Bars. Ein kräftiger Schluss zurück über der Referenz und ein weiterer Käuferbar ergänzen diese Information. Auch diese Folge kann später scheitern; sie ist keine Gewinnzusage.",
      "Im eigenen Beispiel wird die Referenz 30 bis 24 unterschritten. Der Bar schließt wieder bei 33, danach gewinnen die Käufer weiteren Raum. Beschreib beide Schritte, statt das endgültige Tief rückwirkend als sicheren Kaufpreis darzustellen."
    ],
    "callout": "Das endgültige Tief ist nicht vorher bekannt.",
    "takeaways": [
      "Tieferes Tief kann eine Umkehr vorbereiten.",
      "Tail, Schluss und Anschluss getrennt lesen.",
      "Das endgültige Tief ist nicht vorher bekannt."
    ],
    "prompt": "Welche Folge unterstützt einen Fehlausbruch nach unten?",
    "answers": [
      {
        "label": "Eine beliebige Kerzenfarbe weit von der Referenz entfernt.",
        "explanation": "Ort und Zusammenhang fehlen."
      },
      {
        "label": "Rückkehr über das alte Tief und weiterer Käuferanschluss.",
        "explanation": "Richtig. Das unterscheidet die Reaktion vom bloßen neuen Tief."
      },
      {
        "label": "Ein kräftiger Schluss unter dem Tief mit weiterer Abwärtsfolge.",
        "explanation": "Das stützt eher einen erfolgreichen Ausbruch."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Zweiter Versuch: dieselbe Struktur weiter prüfen",
    "summary": "Zweite Signale brauchen eine erkennbare erste Gegenreaktion.",
    "section": "Versuchszählung",
    "scenario": "c17-06",
    "paragraphs": [
      "Nach einem ersten Ausbruch und einer Rückkehr kann die Trendseite die Grenze erneut angreifen. Scheitert auch dieser Angriff, entsteht ein zweiter Umkehrversuch. In einer weiterhin überlappenden Range verdient diese erneute Ablehnung besondere Aufmerksamkeit.",
      "Zähl nicht einfach zwei benachbarte Hochbars als zwei Signale. Zwischen den Versuchen muss eine unterscheidbare Reaktion liegen. Die neue Spitze kann weiter außen liegen; wichtig ist, dass beide Versuche sich auf dieselbe Referenz und denselben Kontext beziehen.",
      "Die zweite Umkehr kann einen deutlicheren Extrempunkt liefern und trotzdem zu wenig Zielraum haben. Die Zahl zwei ist deshalb ein Strukturhinweis. Sie nimmt dir die Prüfung des Signalbars, der Auslösung und des möglichen Verlusts nicht ab."
    ],
    "callout": "Zweite Signale sind keine Gewinngarantie.",
    "takeaways": [
      "Versuche über dieselbe Referenz zählen.",
      "Eine Gegenreaktion trennt die Versuche.",
      "Zweite Signale sind keine Gewinngarantie."
    ],
    "prompt": "Was trennt zwei Umkehrversuche sinnvoll?",
    "answers": [
      {
        "label": "Nur zwei aufeinanderfolgende Bars mit neuen Hochs.",
        "explanation": "Diese können zur selben Ausbruchsfolge gehören."
      },
      {
        "label": "Ein Wechsel der Chartfarbe.",
        "explanation": "Das verändert die Preisstruktur nicht."
      },
      {
        "label": "Eine erkennbare Gegenreaktion zwischen den Angriffen.",
        "explanation": "Richtig. Ohne diese Trennung ist es oft nur ein laufender Schub."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Wenn die erste Rückkehr selbst scheitert",
    "summary": "Ein Fehlausbruch kann zum Ausbruchspullback werden.",
    "section": "Doppelter Fehlschlag",
    "scenario": "c17-07",
    "paragraphs": [
      "Ein Ausbruch über das Hoch kann zuerst in die Range zurückkehren. Damit entsteht eine Shortidee, aber noch keine dauerhaft erfolgreiche Umkehr. Übernehmen die Käufer rasch wieder, scheitert die erwartete Rückkehrbewegung selbst.",
      "Den kurzen Gegenabschnitt kannst du jetzt als Pullback des ursprünglichen Ausbruchs lesen. Die Käuferfortsetzung erzeugt möglicherweise ein weiteres Hoch. Auf einem Rangetag kann auch dieser zweite Ausbruchsversuch später zurückgewiesen werden.",
      "Benenne die Reihenfolge ohne Abkürzung: erster Ausbruch, Rückkehr, erneute Käuferfortsetzung. Ein gescheiterter Short rechtfertigt keinen automatischen Long. Jede neue Idee braucht ihren eigenen Auslöser und ihre eigene Verlustgrenze."
    ],
    "callout": "Eine neue Richtung braucht einen eigenen Plan.",
    "takeaways": [
      "Auch ein Umkehrversuch kann scheitern.",
      "Rückkehr kann zum Ausbruchspullback werden.",
      "Neue Richtung braucht einen eigenen Plan."
    ],
    "prompt": "Was kann aus einer gescheiterten Rückkehr in die Range entstehen?",
    "answers": [
      {
        "label": "Ein Ausbruchspullback mit Fortsetzung der ursprünglichen Richtung.",
        "explanation": "Richtig. Die erste Gegenbewegung setzt sich dann nicht durch."
      },
      {
        "label": "Die Pflicht, sofort die doppelte Menge zu handeln.",
        "explanation": "Das vergrößert den Verlust ohne strukturelle Begründung."
      },
      {
        "label": "Die Löschung aller früheren Bars.",
        "explanation": "Die Vorgeschichte bleibt Kontext."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Trendtag: alte Grenze als Pullbackbereich",
    "summary": "Im starken Trend mit der Kontrolle denken.",
    "section": "Range oder Trend",
    "scenario": "c17-08",
    "paragraphs": [
      "Eine starke gerichtete Folge verändert die Rolle alter Swingpreise. Nach einem kräftigen Ausbruch über eine Range kann die obere Grenze später von oben getestet werden. Eine Käuferreaktion dort passt zur Fortsetzung des Bullenverlaufs.",
      "Im Bärenfall kann eine gebrochene untere Grenze beim Rücklauf von unten zum Widerstandsbereich werden. Die horizontale Linie bleibt dieselbe; der aktuelle Handel auf ihrer anderen Seite verändert die Arbeitshypothese.",
      "Ein Rücklauf muss den Linienpreis nicht exakt berühren. Prüf den Bereich, die Rückgabe und die erneute Trendreaktion. Laufen die Bars kräftig durch den Bereich zurück und bleiben dort, ist die Fortsetzungsidee geschwächt."
    ],
    "callout": "Eine kräftige Rückkehr kann die Idee widerlegen.",
    "takeaways": [
      "Starke Trendfolge verändert die Rolle der Grenze.",
      "Test von der anderen Seite als Pullback prüfen.",
      "Kräftige Rückkehr kann die Idee widerlegen."
    ],
    "prompt": "Wie wird eine alte obere Rangegrenze im starken Bullenverlauf genutzt?",
    "answers": [
      {
        "label": "Als Garantie, dass der Kurs exakt dort dreht.",
        "explanation": "Der Test kann den Bereich über- oder unterschreiten."
      },
      {
        "label": "Als möglicher Pullbackbereich für eine neue Käuferreaktion.",
        "explanation": "Richtig. Das passt zur bestehenden Kontrolle."
      },
      {
        "label": "Als zwingender Shortpreis bei jedem neuen Besuch.",
        "explanation": "Der starke Trend kann weitere Hochs erzeugen."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Gegentrend: Linie allein reicht nicht",
    "summary": "Die Gegenstärke muss im Verhältnis zum Trend stehen.",
    "section": "Trendwechsel prüfen",
    "scenario": "c17-09",
    "paragraphs": [
      "Ein neues Swinghoch in einem starken Bullenverlauf ist oft bloß das nächste Trendhoch. Ein Short allein wegen dieser horizontalen Referenz geht gegen eine weiterhin starke Käuferfolge. Im starken Bärenverlauf gilt das spiegelbildlich für Käufe am alten Tief.",
      "Ein deutlicher Trendlinienbruch und eine kräftige Gegenreaktion geben mehr Anlass zur Umkehrprüfung als ein winziger Stich. Prüf außerdem, ob die Gegenseite Anschluss bekommt. Ein einzelner Gegenbar kann immer noch nur einen normalen Pullback eröffnen.",
      "Erzeugt der Bruch kaum Gegenraum, ist eine große Umkehrerwartung schlecht begründet. Ein enger kurzfristiger Gegenversuch ist etwas anderes als ein länger gehaltener Trendtrade. Lass die Suche nach kleinen Gegensignalen nicht die klareren Trendpullbacks verdecken."
    ],
    "callout": "Eine kleine Gegenreaktion begründet noch keinen großen Wechsel.",
    "takeaways": [
      "Altes Extrem ist kein automatischer Gegenpreis.",
      "Bruchqualität und Gegenanschluss gemeinsam prüfen.",
      "Kleine Gegenreaktion begründet noch keinen großen Wechsel."
    ],
    "prompt": "Welche Information trägt am wenigsten zu einer großen Umkehrthese bei?",
    "answers": [
      {
        "label": "Eine kräftige Folge gegen die bisherige Richtung.",
        "explanation": "Diese liefert mehr beobachtbare Gegenstärke."
      },
      {
        "label": "Ein klarer Bruch mit anschließend schwachem Trendtest.",
        "explanation": "Das kann die Umkehrprüfung stützen."
      },
      {
        "label": "Ein winziger Trendlinienbruch ohne Gegenanschluss.",
        "explanation": "Richtig. Die Trendkontrolle ist dadurch kaum infrage gestellt."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Vorheriger Tag und Eröffnung als Referenzen",
    "summary": "Den Zeitbezug eines Levels benennen.",
    "section": "Wichtige Preisbereiche",
    "scenario": "c17-10",
    "paragraphs": [
      "Neben lokalen Swingpunkten können das Tief des vorherigen Tages oder ein bereits sichtbarer Eröffnungsbereich beim erneuten Test relevant werden. Markier den Zeitbezug ausdrücklich. Ein vorheriges Tagestief ist bekannt; das endgültige heutige Tief noch nicht.",
      "Ein aktueller Swing kann nahe an einem solchen älteren Level entstehen. Das verbindet zwei Beobachtungen, ohne daraus zwei unabhängige Beweise zu machen. Die neue Reaktion entscheidet, ob der Bereich hält oder durchbrochen wird.",
      "Ein Doppeltief verlangt in einem schematischen Chart keine identischen Nachkommastellen. Ein kleiner Preisunterschied ist mit der Idee eines gemeinsamen Testbereichs vereinbar. Die Nähe sollte zur aktuellen Bargröße passen und vor der Folge begründet sein."
    ],
    "callout": "Zwei Beschreibungen sind keine zwei unabhängigen Beweise.",
    "takeaways": [
      "Zeitbezug jeder Referenz benennen.",
      "Nähe zum älteren Level als gemeinsamen Bereich prüfen.",
      "Zwei Beschreibungen sind keine zwei unabhängigen Beweise."
    ],
    "prompt": "Welche Referenz ist zu Tagesbeginn schon vollständig bekannt?",
    "answers": [
      {
        "label": "Das Tief des vorherigen abgeschlossenen Tages.",
        "explanation": "Richtig. Es stammt aus bereits abgeschlossenen Daten."
      },
      {
        "label": "Das endgültige Tief des gerade beginnenden Tages.",
        "explanation": "Weitere Bars können ein neues Tief erzeugen."
      },
      {
        "label": "Das nächste Umkehrhoch.",
        "explanation": "Dieses entsteht erst in der Zukunft."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Raum bis zur Mitte und eigenes Risiko",
    "summary": "Eine plausible Umkehr kann trotzdem wenig Raum bieten.",
    "section": "Handelslogik",
    "scenario": "c17-11",
    "paragraphs": [
      "Nach einem Fehlausbruch am Rand kann die Mitte der Range ein erster möglicher Rückkehrbereich sein. Dort liegt viel bisherige Überlappung. Das Bild lässt offen, ob der Markt weiter bis zum anderen Rand läuft oder vorher stockt.",
      "Im Rechenbeispiel liegt eine mögliche Shortauslösung bei 68, die Verlustgrenze bei 78 und ein erster Prüfbereich bei 50. Der geplante Preisabstand zum Schutz beträgt 10 Einheiten, zum Prüfbereich 18. Vor Kosten ergibt das ein Verhältnis von 1,8 zu 1.",
      "Diese Rechnung liefert keine Trefferquote und noch keinen handelbaren Geldbetrag. Dafür fehlen Menge, Wert pro Einheit, Gebühren und Ausführungsabweichungen. Kommt die Auslösung spät bei 54, bleibt bei gleichem Ziel und Schutz deutlich weniger sinnvoller Raum."
    ],
    "callout": "Eine späte Auslösung kann das Verhältnis verschlechtern.",
    "takeaways": [
      "Zielraum vom tatsächlichen Auslöser aus messen.",
      "Preisabstände sind noch keine Geldbeträge.",
      "Eine späte Auslösung kann das Verhältnis verschlechtern."
    ],
    "prompt": "Wie groß ist der Zielabstand von 68 bis 50 relativ zum Schutzabstand bis 78?",
    "answers": [
      {
        "label": "Das beweist eine Trefferquote von 80 Prozent.",
        "explanation": "Aus Preisabständen folgt keine Trefferquote."
      },
      {
        "label": "18 zu 10, also 1,8 zu 1 vor Kosten.",
        "explanation": "Richtig. Für den Short werden beide Abstände als positive Größen verglichen."
      },
      {
        "label": "10 zu 18, also 1,8 zu 1.",
        "explanation": "Die Abstände wurden vertauscht."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Linie vor dem Test festhalten",
    "summary": "Eine nachträglich passende Grenze ist kein früheres Signal.",
    "section": "Replay",
    "scenario": "c17-12",
    "paragraphs": [
      "Eine saubere Übung beginnt mit dem bereits bekannten Hoch oder Tief. Halte dessen Preis, den Range- oder Trendkontext und deine erwartete Reaktion vor dem nächsten Test fest. Deck danach die neuen Bars einzeln auf.",
      "Verschieb die ursprüngliche Referenz nicht heimlich an den später perfekten Wendepunkt. Entsteht ein neues Swingextrem, zeichne eine neue Linie und benenne den Zeitpunkt. So bleiben frühere Hypothese und spätere Anpassung nachvollziehbar.",
      "Die zwei Bildhälften zeigen einen bekannten Bereich und dessen spätere Prüfung. Ein positives Ergebnis heißt nicht, dass die Umkehr schon im ersten Bild sicher war. Abwarten bleibt ein gültiges Ergebnis, wenn die neue Reaktion widersprüchlich ist."
    ],
    "callout": "Das spätere Ergebnis war vorher ungewiss.",
    "takeaways": [
      "Referenz und Erwartung vor dem Test notieren.",
      "Neue Linie als neue Information kennzeichnen.",
      "Späteres Ergebnis war vorher ungewiss."
    ],
    "prompt": "Wie vermeidest du Rückschaufehler?",
    "answers": [
      {
        "label": "Die Linie nach jedem Ergebnis an den besten Wendepunkt legen.",
        "explanation": "Das erzeugt ein nachträglich perfektes Signal."
      },
      {
        "label": "Nur erfolgreiche Beispiele behalten.",
        "explanation": "Damit verschwindet ein wichtiger Teil der möglichen Folgen."
      },
      {
        "label": "Die alte Referenz vor dem Test festhalten und spätere Änderungen datieren.",
        "explanation": "Richtig. So wird die verfügbare Information nachvollziehbar."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Zweites höheres Hoch mit drei Schüben",
    "summary": "Mehrere Strukturen können denselben Umkehrversuch beschreiben.",
    "section": "Chartfall 17.1 · Range",
    "scenario": "c17-13",
    "paragraphs": [
      "Im ersten Chartfall bleibt der Markt zunächst überlappend. Eine Spitze über dem alten Hoch wird zurückgewiesen. Nach einer Gegenbewegung folgt ein weiterer Angriff, der noch etwas höher reicht und ebenfalls zurückkehrt.",
      "Innerhalb dieses zweiten Angriffs lassen sich drei Aufwärtsschübe erkennen. Eine dreiteilige Bewegung braucht keine saubere Keilkontur, um als wiederholtes Drängen in dieselbe Richtung zu gelten. Der letzte Schub und das zweite höhere Hoch beziehen sich hier auf denselben Abschnitt.",
      "Beide Namen beschreiben dieselben Bars. Sie erhöhen nicht automatisch eine vermeintliche Trefferquote. Die Verkäuferreaktion und der noch freie Raum in die Range bleiben die entscheidenden neuen Beobachtungen."
    ],
    "callout": "Mehrere Namen vervielfachen keine Beweise.",
    "takeaways": [
      "Zweiter Angriff kann drei kleinere Schübe enthalten.",
      "Keilartige Logik braucht keine perfekte Kontur.",
      "Mehrere Namen vervielfachen keine Beweise."
    ],
    "prompt": "Warum sind zweites höheres Hoch und drei Schübe hier keine unabhängigen Beweise?",
    "answers": [
      {
        "label": "Weil beide dieselbe Preisbewegung beschreiben.",
        "explanation": "Richtig. Die strukturellen Perspektiven überlappen sich."
      },
      {
        "label": "Weil drei Schübe nie vorkommen können.",
        "explanation": "Auch ohne saubere Keilkontur sind drei Schübe erkennbar."
      },
      {
        "label": "Weil zweite Versuche immer sicher gewinnen.",
        "explanation": "Das folgt aus der Zählung nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Zweiter Tiefversuch nahe dem vorherigen Tagestief",
    "summary": "Lokales tieferes Tief und älteren Testbereich zusammen lesen.",
    "section": "Chartfall 17.1 · Range",
    "scenario": "c17-14",
    "paragraphs": [
      "Nach der oberen Ablehnung erweitert sich die Bewegung nach unten. Ein erster Tiefversuch kehrt zurück, der zweite unterschreitet das lokale Tief nochmals. Gleichzeitig liegt er nahe am bereits bekannten Tief des vorherigen Tages.",
      "Die lokalen Tiefs werden tiefer, während sich der Test gegenüber dem älteren Tageslevel als Doppeltiefbereich lesen lässt. Das ist kein Widerspruch: Die beiden Beschreibungen verwenden unterschiedliche Bezugspunkte.",
      "Die breiter werdenden Schübe passen außerdem zu einer expandierenden Range. Nimm nicht die Anzahl der gezeichneten Punkte als Qualitätsbeweis. Entscheidend bleibt, ob der letzte Tiefversuch zurückkehrt und die Käufer tatsächlich weiteren Raum gewinnen."
    ],
    "callout": "Käuferanschluss bleibt erforderlich.",
    "takeaways": [
      "Lokale und ältere Bezugspunkte getrennt benennen.",
      "Tieferes lokales Tief kann am älteren Level ein Doppeltief bilden.",
      "Käuferanschluss bleibt erforderlich."
    ],
    "prompt": "Kann ein tieferes lokales Tief zugleich im Doppeltiefbereich eines älteren Tageslevels liegen?",
    "answers": [
      {
        "label": "Ja, deshalb ist jeder Kauf verlustfrei.",
        "explanation": "Die kombinierte Beschreibung garantiert keine Folge."
      },
      {
        "label": "Ja, weil die Vergleiche unterschiedliche Bezugspunkte verwenden.",
        "explanation": "Richtig. Lokal tiefer und gegenüber dem alten Tageslevel ähnlich sind vereinbar."
      },
      {
        "label": "Nein, jeder Vergleich muss denselben Punkt verwenden.",
        "explanation": "Die gewählten Referenzen können verschiedene Zeithorizonte haben."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Expandierende Range: obere und untere Tests",
    "summary": "Neue Extreme auf beiden Seiten zeigen keine einseitige Kontrolle.",
    "section": "Chartfall 17.1 · Range",
    "scenario": "c17-15",
    "paragraphs": [
      "Steigen die Swinghochs und fallen die Swingtiefs, weitet sich die Handelsspanne aus. Das unterscheidet sich von einem gleichmäßig gerichteten Trend. Der Markt erreicht außen neue Preise und kehrt anschließend wieder in die Überlappung zurück.",
      "Innerhalb eines großen Aufwärtsschubs können kleinere obere Versuche liegen. Eine neue lokale Spitze und ein weiterer, höherer Versuch bilden dann eine kleinere Struktur in der großen expandierenden Bewegung.",
      "Wähl die betrachtete Größe vor der Zählung. Ein zweiter kleiner Versuch ist nicht automatisch der zweite Versuch der gesamten Range. Ausweitung heißt außerdem größere Preisabstände; ein unverändert großer Positionsumfang kann den Geldverlust erhöhen."
    ],
    "callout": "Breitere Bars verändern den Preisabstand zum Schutz.",
    "takeaways": [
      "Neue Extreme auf beiden Seiten können Balance erweitern.",
      "Große und kleine Versuchszählung trennen.",
      "Breitere Bars verändern den Preisabstand zum Schutz."
    ],
    "prompt": "Was kennzeichnet die expandierende Range?",
    "answers": [
      {
        "label": "Nur ständig steigende Tiefs ohne größere Rückgabe.",
        "explanation": "Das passt eher zu einem engen Bullenverlauf."
      },
      {
        "label": "Eine garantiert sinkende Schwankungsbreite.",
        "explanation": "Die beschriebene Spanne wird gerade breiter."
      },
      {
        "label": "Höhere Swinghochs und tiefere Swingtiefs mit Rückkehr in Überlappung.",
        "explanation": "Richtig. Beide Seiten dehnen die Spanne aus."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Großer Doppeltief-Pullback und High 2",
    "summary": "Zwei komplexe Abwärtsbeine können einen gemeinsamen Test bilden.",
    "section": "Chartfall 17.1 · Range",
    "scenario": "c17-16",
    "paragraphs": [
      "Nach einer Käuferreaktion und einem deutlichen oberen Test läuft der Markt erneut in den unteren Bereich. Der neue Test liegt nahe an einem früheren Tief. Ein Doppeltief kann sich deshalb über einen großen Abschnitt erstrecken, statt nur aus zwei direkt benachbarten Bars zu bestehen.",
      "In derselben Bewegung lassen sich zwei größere Abwärtsbeine unterscheiden. Ihre Zwischenbewegungen bestehen aus mehreren Bars. Eine anschließende zweite Käuferauslösung kannst du als High 2 prüfen, wenn der erste Aufwärtsversuch und der erneute Rücklauf tatsächlich erkennbar waren.",
      "Wähl nachvollziehbare Tiefpunkte, ohne nachträglich jeden kleinen Zwischenbar umzubenennen. Der große Doppeltiefbereich beschreibt den Ort; die High-2-Zählung die Reihenfolge der Versuche. Die tatsächliche Auslösung liegt erst nach dem Signal."
    ],
    "callout": "Ort, Zählung und Auslösung unterscheiden.",
    "takeaways": [
      "Doppeltiefs können weit auseinanderliegen.",
      "Zwei komplexe Beine sind nicht bloß zwei rote Bars.",
      "Ort, Zählung und Auslösung unterscheiden."
    ],
    "prompt": "Was beschreibt High 2 in diesem Abschnitt?",
    "answers": [
      {
        "label": "Die zweite erkennbare Käuferauslösung nach einer Unterbrechung des ersten Versuchs.",
        "explanation": "Richtig. Die Zählung braucht eine sichtbare zeitliche Trennung."
      },
      {
        "label": "Den zweiten grünen Bar beliebiger Lage.",
        "explanation": "Eine Farbe allein zählt keinen strukturierten Versuch."
      },
      {
        "label": "Den garantiert niedrigsten Kaufpreis.",
        "explanation": "Die Auslösung folgt dem Signal und muss nicht am Tief liegen."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Steigender Gegenkanal: Abwärtsausbruch scheitert",
    "summary": "Eine Bärenflagge kann nach unten brechen und zurückkehren.",
    "section": "Chartfall 17.1 · Range",
    "scenario": "c17-17",
    "paragraphs": [
      "Einen lokalen Aufwärtskanal nach einer Abwärtsbewegung kannst du zunächst als Bärenflagge prüfen. Sein steigender Verlauf allein beweist keine dauerhafte Käuferkontrolle. Verkäufer können einen erneuten Ausbruch nach unten versuchen.",
      "Führt dieser Versuch in den unteren Testbereich und kehren die Käufer anschließend in den Kanal zurück, scheitert der erwartete Abwärtsanschluss. Das kann den größeren Doppeltief-Pullback ergänzen, ohne dessen Ergebnis im Voraus festzulegen.",
      "Das Diagramm zeigt eine lokale Kanalunterkante und den horizontalen Tiefbereich gemeinsam. Ihre Rollen sind verschieden: Die geneigte Linie beschreibt den kurzen Gegenkanal, die horizontale den älteren Preis. Beschreib genau, welche Grenze wann verletzt wurde."
    ],
    "callout": "Kanalgrenze und Swingpreis getrennt verwenden.",
    "takeaways": [
      "Lokaler Aufwärtskanal kann Bärenflagge sein.",
      "Fehlender Abwärtsanschluss schwächt die Verkäuferidee.",
      "Kanalgrenze und Swingpreis getrennt verwenden."
    ],
    "prompt": "Was schwächt die Bärenflaggen-Idee nach ihrem Abwärtsausbruch?",
    "answers": [
      {
        "label": "Die bloße Neigung des vorherigen Kanals.",
        "explanation": "Die Neigung war schon vor dem Ausbruch bekannt."
      },
      {
        "label": "Eine kräftige Rückkehr in den Kanal mit Käuferanschluss.",
        "explanation": "Richtig. Die erwartete Abwärtsfortsetzung setzt sich dann nicht durch."
      },
      {
        "label": "Ein neuer kräftiger Verkäuferbar unter dem Ausbruch.",
        "explanation": "Das stützt eher die Fortsetzung."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Drei Abwärtsversuche im breiten Pullback",
    "summary": "Ein komplexer Rücklauf kann eine Keilidee enthalten.",
    "section": "Chartfall 17.1 · Range",
    "scenario": "c17-18",
    "paragraphs": [
      "Im breiten Rücklauf lassen sich auch drei Abwärtsversuche unterscheiden. Zwischen ihnen entstehen Gegenbewegungen. Der dritte Versuch endet im bereits wichtigen unteren Bereich und kann damit eine keilartige Bullenflagge vorbereiten.",
      "Es gibt oft mehr als eine vertretbare Wahl für den ersten kleinen Tiefpunkt. Halte deine Wahl vor dem dritten Versuch fest und begründe die Größe der betrachteten Struktur. Eine alternative Zählung darfst du nicht bloß deshalb wählen, weil sie zum späteren Gewinn passt.",
      "Doppeltief, zwei größere Beine und drei kleinere Schübe können denselben Rücklauf auf unterschiedlichen Größen beschreiben. Behalte eine klare Hauptlesart. Mehr Etiketten ersetzen keine Käuferreaktion und keinen ausreichenden Zielraum."
    ],
    "callout": "Eine klare Hauptlesart erleichtert die Entscheidung.",
    "takeaways": [
      "Drei Schübe benötigen Gegenbewegungen dazwischen.",
      "Zählgröße vor der Folge begründen.",
      "Eine klare Hauptlesart erleichtert die Entscheidung."
    ],
    "prompt": "Was hilft bei mehreren möglichen Schubzählungen?",
    "answers": [
      {
        "label": "Nachher die erfolgreichste Zählung auswählen.",
        "explanation": "Damit entsteht Rückschau statt Beobachtung."
      },
      {
        "label": "Jeden roten Bar als eigenen Schub zählen.",
        "explanation": "Ein Schub kann mehrere Bars umfassen."
      },
      {
        "label": "Eine begründete Zählgröße vor dem letzten Versuch festhalten.",
        "explanation": "Richtig. So bleibt die Lesart überprüfbar."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Doppeltop-Bärenflagge wird überboten",
    "summary": "Ein starkes Ausbruchsbar kann die Gegenidee widerlegen.",
    "section": "Chartfall 17.1 · Range",
    "scenario": "c17-19",
    "paragraphs": [
      "Nach der Käuferreaktion kann ein Pullback mit zwei ähnlichen oberen Tests zunächst wie eine Doppeltop-Bärenflagge aussehen. Verkäufer erwarten dann eine neue Bewegung nach unten. Diese Erwartung bleibt eine Hypothese.",
      "Ein großer Käuferbar, der über die beiden Hochbereiche ausbricht und nahe seinem Hoch schließt, widerspricht dem Gegenplan. Arbeiten die folgenden Bars außerhalb weiter, gewinnt die Käuferfortsetzung zusätzliches Gewicht.",
      "Pass die Arbeitshypothese an die neue Stärke an. Das heißt weder, einen alten Verlustschutz zu entfernen, noch, dem großen Ausbruchsbar um jeden Preis hinterherzulaufen. Ein späterer geordneter Pullback kann die nächste Prüfung ermöglichen."
    ],
    "callout": "Neue Stärke rechtfertigt kein unbegrenztes Hinterherlaufen.",
    "takeaways": [
      "Doppeltop-Idee bleibt widerlegbar.",
      "Großer Käuferausbruch verändert die Kontrolle.",
      "Neue Stärke rechtfertigt kein unbegrenztes Hinterherlaufen."
    ],
    "prompt": "Welche neue Beobachtung widerspricht der Doppeltop-Bärenflagge?",
    "answers": [
      {
        "label": "Ein kräftiger Käuferausbruch über beide Hochbereiche mit Anschluss.",
        "explanation": "Richtig. Die Verkäufer setzen ihre erwartete Folge nicht durch."
      },
      {
        "label": "Ein erneuter schwacher Test unter den Hochs.",
        "explanation": "Der kann weiterhin zur Bärenflaggen-Idee passen."
      },
      {
        "label": "Die Tatsache, dass zwei Hochs ähnlich sind.",
        "explanation": "Das war gerade die Grundlage der bisherigen Idee."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Lokal tieferes Tief, insgesamt höherer Pullback",
    "summary": "Verschiedene Referenzen führen zu verschiedenen Beschreibungen.",
    "section": "Chartfall 17.1 · Range",
    "scenario": "c17-20",
    "paragraphs": [
      "Nach dem großen Käuferausbruch beginnt ein Rücklauf. Innerhalb dieses Rücklaufs werden die kleinen Tiefs schrittweise tiefer. Das letzte davon kann trotzdem deutlich über dem früheren großen Tief liegen.",
      "Gegenüber den lokalen Tiefs ist es ein tieferes Tief; gegenüber dem Ursprung der größeren Käuferbewegung ist es ein höheres Tief. Prüft es zugleich den früheren Ausbruchsbereich, passt es zu einem Ausbruchspullback in der neuen Käuferstruktur.",
      "Im Beispiel liegen die lokalen Tiefs bei 58, 56 und 54, das größere frühere Tief bei 30. Alle drei Rücklauftiefs bleiben darüber. Die spätere Käuferreaktion bestätigt erst nachträglich, dass dieser konkrete Test gehalten hat."
    ],
    "callout": "Die Reaktion am Ausbruchsbereich gesondert prüfen.",
    "takeaways": [
      "Den Bezugspunkt für höher und tiefer immer nennen.",
      "Lokale Tiefserie kann im größeren höheren Tief liegen.",
      "Reaktion am Ausbruchsbereich gesondert prüfen."
    ],
    "prompt": "Warum kann das Tief 54 beide Beschreibungen erhalten?",
    "answers": [
      {
        "label": "Weil Tiefpunkte beliebig bezeichnet werden dürfen.",
        "explanation": "Die Beschreibung muss durch konkrete Referenzen begründet sein."
      },
      {
        "label": "Es liegt unter 56 und 58, aber über dem größeren Tief 30.",
        "explanation": "Richtig. Die Bezugspunkte unterscheiden sich."
      },
      {
        "label": "Weil 54 größer als 58 ist.",
        "explanation": "Die lokale Vergleichsrichtung wurde vertauscht."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Von der Range zur Käuferkontrolle",
    "summary": "Die bisherige Tageslesart mit neuen Bars aktualisieren.",
    "section": "Chartfall 17.1 · Übergang",
    "scenario": "c17-21",
    "paragraphs": [
      "Der erste Chartfall beginnt mit wiederholten Fehlausbrüchen und breiter Überlappung. Später entsteht ein großer Käuferausbruch, gefolgt von einem haltenden Pullback. Diese neue Folge kann die frühere Range-Lesart Schritt für Schritt verändern.",
      "Nach dieser Entwicklung wäre es ungenau, jedes neue Hoch weiterhin als identischen Shortbereich zu behandeln. Die horizontale Referenz kann jetzt bei einem Rücklauf eher zur Prüfung eines Käuferfortsetzungsplans dienen.",
      "Die neue Lesart gilt ab der sichtbaren Veränderung. Sie macht die früheren Rangeentscheidungen nicht rückwirkend falsch oder richtig. Halte fest, welche Bars deinen Kontextwechsel ausgelöst haben und welche Gegenfolge ihn wieder infrage stellen würde."
    ],
    "callout": "Ein Kontextwechsel braucht sichtbare Gründe.",
    "takeaways": [
      "Tageskontext darf sich verändern.",
      "Rolle einer Referenz mit neuer Kontrolle prüfen.",
      "Kontextwechsel braucht sichtbare Gründe."
    ],
    "prompt": "Wann sollte die ursprüngliche Range-Lesart überprüft werden?",
    "answers": [
      {
        "label": "Nur nach dem endgültigen Tagesschluss.",
        "explanation": "Schon vorher können neue Bars eine Anpassung begründen."
      },
      {
        "label": "Bei jedem neuen Tick unabhängig vom Verlauf.",
        "explanation": "Dann fehlt eine sinnvolle strukturelle Begründung."
      },
      {
        "label": "Nach kräftigem Käuferausbruch und haltendem Pullback.",
        "explanation": "Richtig. Diese neue Folge liefert zusätzliche Information."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Trend vom Start: kaum Rückkehr zum Durchschnitt",
    "summary": "Ein Extrem nahe der Eröffnung kann starke Richtung begleiten.",
    "section": "Chartfall 17.2 · Trend",
    "scenario": "c17-22",
    "paragraphs": [
      "Der zweite Chartfall vergleicht starke gerichtete Tagesabschnitte. Ein früher Extrembereich bleibt nahe der Eröffnung, während der Markt über längere Zeit in die andere Richtung weiterarbeitet. Die fortlaufend neuen Swingpunkte sind dann überwiegend Teil des Trends.",
      "Viele aufeinanderfolgende Bars können vom verwendeten gleitenden Durchschnitt getrennt bleiben. Als Lernmerkmal kannst du zum Beispiel eine Folge von zwanzig Bars ohne Berührung beobachten. Auf einem Fünf-Minuten-Chart sind das hundert Minuten; so eine Zahl ist kein universeller Auslöser.",
      "Der erste spätere Durchschnittstest ist deshalb interessant, weil er auf eine lange gerichtete Vorgeschichte folgt. Ein bloßer Kontakt beendet den Trend nicht. Prüf die Gegenbewegung und die anschließende Reaktion mit der bisherigen Richtung."
    ],
    "callout": "Ein Durchschnittskontakt allein ist kein Trendende.",
    "takeaways": [
      "Frühes Extrem und lange gerichtete Folge zusammen lesen.",
      "Barzahl und verstrichene Zeit unterscheiden.",
      "Durchschnittskontakt allein ist kein Trendende."
    ],
    "prompt": "Wie lange dauern zwanzig vollständige Fünf-Minuten-Bars?",
    "answers": [
      {
        "label": "Hundert Minuten.",
        "explanation": "Richtig. Die Barzahl wird mit der Chartdauer multipliziert."
      },
      {
        "label": "Zwanzig Minuten auf jeder Zeitebene.",
        "explanation": "Die Dauer hängt von der Zeitebene ab."
      },
      {
        "label": "Genau zwei Stunden.",
        "explanation": "Zwanzig mal fünf ergibt hundert Minuten."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Kleiner Gegenbruch am alten Extrem",
    "summary": "Ein Umkehrbar kann im starken Trend nur eine Pause eröffnen.",
    "section": "Chartfall 17.2 · Gegensignale",
    "scenario": "c17-23",
    "paragraphs": [
      "Am neuen Hoch eines starken Bullenverlaufs kann ein Verkäuferbar entstehen. Im starken Bärenverlauf ist spiegelbildlich eine kleine Zweibar-Käuferreaktion möglich. Die Form wirkt auffällig, doch der große Kontext bleibt zunächst gerichtet.",
      "Erzeugt der zugehörige Trendlinienbruch kaum Gegenraum, ist die Umkehrthese schwach. Eine kleine Reaktion gegen den Trend rechtfertigt noch keine Erwartung bis zum gegenüberliegenden Tagesrand.",
      "Die Vergleichsbilder zeigen denselben Typ eines lokalen Gegenversuchs in beiden Richtungen. Prüf zuerst die Trendstärke. Aus einer kurzfristigen Gegenidee darf nicht unbemerkt ein großer gehaltener Umkehrtrade werden, während du klare Pullbacks mit dem Trend übersiehst."
    ],
    "callout": "Die Halteabsicht nicht nachträglich vergrößern.",
    "takeaways": [
      "Lokales Gegensignal im großen Kontext beurteilen.",
      "Kleiner Bruch liefert nur wenig Gegenstärke.",
      "Halteabsicht nicht nachträglich vergrößern."
    ],
    "prompt": "Was folgt aus einer kleinen Gegenreaktion bei weiterhin starkem Trend?",
    "answers": [
      {
        "label": "Jeder Trendpullback ist ab jetzt ungültig.",
        "explanation": "Dafür fehlt ein überzeugender Kontrollwechsel."
      },
      {
        "label": "Eine große Umkehr ist dadurch noch nicht ausreichend begründet.",
        "explanation": "Richtig. Die bisherige Kontrolle bleibt ein wesentlicher Teil des Kontexts."
      },
      {
        "label": "Das alte Extrem muss nun endgültig halten.",
        "explanation": "Neue Trendextreme bleiben möglich."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Eröffnungsbruch, Rückkehr und erneuter Abwärtsanschluss",
    "summary": "Der erste Umkehrversuch kann am Tagesstart scheitern.",
    "section": "Chartfall 17.2 · Eröffnung",
    "scenario": "c17-24",
    "paragraphs": [
      "Ein neuer Tag kann unter dem Aufwärtskanal des vorherigen Abschnitts beginnen. Ein erster Verkäuferbar zeigt Abwärtsdruck. Ein anschließender Käuferbar versucht, den Ausbruch zurückzunehmen und eine Aufwärtsbewegung vom Start zu eröffnen.",
      "Bekommt diese Rückkehr keine Fortsetzung und brechen neue Verkäuferbars unter den Eröffnungsbereich aus, scheitert die frühe Käuferidee. Den kleinen Aufwärtsabschnitt kannst du dann als Ausbruchspullback der Abwärtsbewegung lesen.",
      "Ein kräftiger Abwärtsspike kann anschließend in einen längeren Bärenkanal übergehen. Die spätere Kanallänge war beim ersten Bar unbekannt. Bewerte jede Phase nach den bis dahin sichtbaren Bars, statt die ganze Tagesform schon am Start zu unterstellen."
    ],
    "callout": "Spike und späterer Kanal entstehen nacheinander.",
    "takeaways": [
      "Erster Käuferbar ist nur ein Umkehrversuch.",
      "Erneuter Abwärtsanschluss kann ihn widerlegen.",
      "Spike und späterer Kanal entstehen nacheinander."
    ],
    "prompt": "Was macht die frühe Käuferreaktion zum gescheiterten Umkehrversuch?",
    "answers": [
      {
        "label": "Allein ein grüner zweiter Bar.",
        "explanation": "Dieser zeigt zunächst die Gegenreaktion."
      },
      {
        "label": "Die später bekannte Länge des Tageskanals.",
        "explanation": "Sie war beim frühen Versuch noch nicht verfügbar."
      },
      {
        "label": "Fehlender Aufwärtsanschluss und neue Verkäuferstärke unter dem Eröffnungsbereich.",
        "explanation": "Richtig. Die Käuferidee setzt sich nicht durch."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Doppeltief-Bullenflagge und Doppeltop-Bärenflagge",
    "summary": "Ähnliche Preise können im Pullback mit dem Trend liegen.",
    "section": "Chartfall 17.2 · Flaggen",
    "scenario": "c17-25",
    "paragraphs": [
      "In einem Bullenverlauf kann ein Rücklauf einen älteren Tiefbereich erneut testen. Zwei ähnliche lokale Tiefs bilden dann eine Doppeltief-Bullenflagge. Der ganze Rücklauf kann zugleich oberhalb des größeren Ursprungstiefs liegen.",
      "Im Bärenverlauf gilt das spiegelbildlich: Zwei ähnliche obere Tests innerhalb eines Rücklaufs können eine Doppeltop-Bärenflagge bilden. Beide Muster liest du hier als Fortsetzungsprüfungen mit der größeren Richtung.",
      "Gleiche Preise legen die Richtung nicht allein fest. Die Käuferreaktion im Bullenfall beziehungsweise die Verkäuferreaktion im Bärenfall und deren Auslösung sind entscheidend. Ein deutlicher Durchbruch gegen den Trend kann die jeweilige Flaggenidee widerlegen."
    ],
    "callout": "Ein gleicher Preis allein bestimmt keine Richtung.",
    "takeaways": [
      "Doppeltief im Bullenpullback als Fortsetzungsstruktur prüfen.",
      "Doppeltop im Bärenpullback spiegelbildlich lesen.",
      "Gleicher Preis allein bestimmt keine Richtung."
    ],
    "prompt": "Was verbindet die beiden Flaggen?",
    "answers": [
      {
        "label": "Ein erneuter Preisbereichstest im Pullback der größeren Trendrichtung.",
        "explanation": "Richtig. Die Rollen werden im Bullen- und Bärenfall gespiegelt."
      },
      {
        "label": "Sie sind beide zwingende Tagesumkehrmuster.",
        "explanation": "Im gezeigten Kontext werden sie als Fortsetzungsprüfungen gelesen."
      },
      {
        "label": "Sie benötigen immer exakt identische Tickpreise.",
        "explanation": "Ein begründeter naher Testbereich kann genügen."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Rücklauf zum Beginn des Kanals",
    "summary": "Ein späterer Test kann einen früheren Startbereich erreichen.",
    "section": "Chartfall 17.2 · Kanaltest",
    "scenario": "c17-26",
    "paragraphs": [
      "Nach einem Käufer-Spike kann ein Kanal nach oben entstehen. Eine spätere obere Ablehnung führt einen größeren Rücklauf zum Beginn dieses Kanalabschnitts. Das ist mehr als ein kleiner Barpullback, löscht aber nicht automatisch die gesamte Käuferbewegung.",
      "Am früheren Kanalstart kann eine neue Käuferreaktion einen Doppeltiefbereich herstellen. Der Spike davor und der Kanalstart sind verschiedene Referenzen. Verwechsle den Kanalbeginn nicht mit dem Ursprung der gesamten Bewegung.",
      "Im Diagramm liegt der Kanalstart bei 45 und der größere Ursprung bei 20. Der spätere Test erreicht 44, bleibt also weit über dem großen Tief. Ob die Käufer wieder Anschluss bekommen, musst du anschließend beobachten."
    ],
    "callout": "Die neue Käuferfolge entscheidet über den konkreten Test.",
    "takeaways": [
      "Kanalbeginn und Ursprung des Spikes unterscheiden.",
      "Großer Rücklauf kann am Kanalstart reagieren.",
      "Neue Käuferfolge entscheidet über den konkreten Test."
    ],
    "prompt": "Welchen Bereich prüft der Rücklauf bis 44 hier?",
    "answers": [
      {
        "label": "Eine im Voraus garantierte Gewinnzone.",
        "explanation": "Der Bereich kann auch durchbrochen werden."
      },
      {
        "label": "Den Kanalstart um 45, nicht das große Ursprungstief 20.",
        "explanation": "Richtig. Die Referenzen liegen deutlich auseinander."
      },
      {
        "label": "Das Ursprungstief 20 exakt.",
        "explanation": "Der Test bleibt deutlich darüber."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Später Durchschnittstest: Uhrzeit ist kein Signal",
    "summary": "Gegenbewegung und Trendfortsetzung anhand der Bars prüfen.",
    "section": "Chartfall 17.2 · Späte Pullbacks",
    "scenario": "c17-27",
    "paragraphs": [
      "Nach einer langen Folge ohne Durchschnittskontakt kann ein später Rücklauf kräftiger wirken als die bisherigen Pausen. Das kann frühe Trendpositionen zum Ausstieg bringen und neue Gegentrader anziehen. Eine anschließende Trendreaktion kann beide Gruppen erneut unter Druck setzen.",
      "Ein bestimmter Zeitpunkt innerhalb einer Handelssitzung erklärt die Folge nicht allein. Börse, Session und Zeitzone verändern den Zeitbezug. Nimm deshalb die sichtbare lange Trendfolge, den neuen Durchschnittstest und die Reaktion als Hauptmerkmale.",
      "Eine Fortsetzung kann ein neues Extrem erzeugen, muss es aber nicht. In den Bildern stehen gelungene Trendreaktion und scheiternder Rücklauf nebeneinander. Die spätere Uhrzeit erlaubt weder einen weiteren Stop noch eine ungeprüfte Order."
    ],
    "callout": "Trendreaktion und Fehlschlag beide offenhalten.",
    "takeaways": [
      "Später Durchschnittstest braucht gerichtete Vorgeschichte.",
      "Uhrzeit allein legt die Richtung nicht fest.",
      "Trendreaktion und Fehlschlag beide offenhalten."
    ],
    "prompt": "Was macht den späten Pullback prüfenswert?",
    "answers": [
      {
        "label": "Nur dass die Uhr einen bestimmten Wert zeigt.",
        "explanation": "Das liefert ohne Session und Preisfolge keine Richtung."
      },
      {
        "label": "Die Garantie eines neuen Tagesextrems.",
        "explanation": "Diese Folge bleibt ungewiss."
      },
      {
        "label": "Die starke Vorgeschichte plus neue Reaktion am Durchschnittsbereich.",
        "explanation": "Richtig. Sichtbare Struktur ist aussagekräftiger als eine bloße Uhrzeit."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Dein Level-Protokoll: Referenz, Kontext, Reaktion",
    "summary": "Horizontale Bereiche mit einem überprüfbaren Plan verwenden.",
    "section": "Abschluss · Replay",
    "scenario": "c17-28",
    "paragraphs": [
      "Notier vor dem Test den bekannten Swingpreis und seinen Zeitbezug. Beschreib, ob die bisherige Folge eher überlappt oder stark gerichtet ist. Leg fest, ob du einen Fehlausbruch gegen den Grenzübertritt oder einen Pullback mit dem Trend prüfen willst.",
      "Deck die Bars einzeln auf. Trenne Grenzübertritt, Rückkehr, zweiten Versuch und tatsächliche Auslösung. Beschreiben mehrere Muster denselben Abschnitt, nimm eine klare Hauptlesart und benenne die weiteren Perspektiven als Ergänzungen.",
      "Prüf den Raum zum ersten Zielbereich und den Preisabstand zur vorab gewählten Verlustgrenze. Eine neue Linie, ein zweites Signal oder ein später Kontextwechsel vergrößert dein zulässiges Geldrisiko nicht. Bei widersprüchlichem Anschluss endet die Übung mit Abwarten."
    ],
    "callout": "Eine neue Beschreibung verändert keine alte Verlustgrenze.",
    "takeaways": [
      "Referenz und Kontext vor dem Test festhalten.",
      "Reaktion und Auslösung zeitlich trennen.",
      "Neue Beschreibung verändert keine alte Verlustgrenze."
    ],
    "prompt": "Welche Reihenfolge eignet sich für das Replay?",
    "answers": [
      {
        "label": "Bekannte Referenz, Kontext, Reaktion, Auslösung und Risiko prüfen.",
        "explanation": "Richtig. Die Entscheidung bleibt mit den verfügbaren Daten nachvollziehbar."
      },
      {
        "label": "Erst das Ergebnis ansehen und dann den besten Preis markieren.",
        "explanation": "Das nutzt die Zukunft als Entscheidungsgrundlage."
      },
      {
        "label": "Bei zweiten Signalen die Verlustgrenze automatisch erweitern.",
        "explanation": "Die Zählung hebt den ursprünglichen Plan nicht auf."
      }
    ],
    "correct": 0
  }
];

export const chapterSeventeenLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-17-${number}`;
  return {
    id: `price-action-trends.chapter-17.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 17 · ${d.section}`,
    sourceAnchors: [`Kapitel 17 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 17 · Horizontale Preisbereiche',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Preisbereich und Reaktion beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
