import type { ChapterThirteenScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterThirteenScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Trendlinie und Kanalgrenze unterscheiden",
    "summary": "Trendlinie auf der Rücklaufseite einzeichnen.",
    "section": "Grundlagen",
    "scenario": "c13-01",
    "paragraphs": [
      "Eine Bullen-Trendlinie verbindet die Tiefbereiche eines steigenden Verlaufs und liegt auf der unteren Seite des Trends. Eine Bären-Trendlinie verbindet die Hochbereiche eines fallenden Verlaufs und liegt oben. Sie hilft dir, Rückläufe und mögliche Veränderungen der Kontrolle einzuordnen.",
      "Die gegenüberliegende Kanalgrenze beschreibt die andere Seite: im Bullenkanal die Hochs, im Bärenkanal die Tiefs. Zwei parallele Grenzen ergeben einen Kanal. Eine Trendlinie allein braucht aber keine perfekte Gegenseite, um als Referenz nützlich zu sein.",
      "Fang bei sichtbaren Hochs und Tiefs an und nicht bei einer beliebigen Diagonale. Eine Linie zeigt eine beobachtete Ordnung; sie zwingt keine Orders und ist kein garantierter Wendepunkt. Entscheidend ist, wie die neuen Bars an ihrem Bereich reagieren."
    ],
    "takeaways": [
      "Trendlinie auf der Rücklaufseite einzeichnen.",
      "Kanalgrenze auf der gegenüberliegenden Seite erkennen.",
      "Die Reaktion zählt mehr als die Linie."
    ],
    "callout": "Die Reaktion zählt mehr als die Linie.",
    "prompt": "Wo liegt die Trendlinie eines Bullenverlaufs?",
    "answers": [
      {
        "label": "An den steigenden Tiefbereichen.",
        "explanation": "Richtig. Die Trendlinie beschreibt die untere Rücklaufseite."
      },
      {
        "label": "Immer an den steigenden Hochs.",
        "explanation": "Die obere Begrenzung gehört zur Kanalgrenze."
      },
      {
        "label": "An einer beliebigen Stelle in der Chartmitte.",
        "explanation": "Die Linie braucht nachvollziehbare Bezugspunkte."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Swingpunkte als Anker wählen",
    "summary": "Sichtbare Swingpunkte nutzen statt gewünschter Ergebnisse.",
    "section": "Grundlagen",
    "scenario": "c13-02",
    "paragraphs": [
      "Ein Swingtief entsteht, wenn ein Rücklauf ausläuft und der Kurs danach wieder steigt. Ein Swinghoch ist die umgekehrte Zwischenwende. Zwei solche Punkte können eine erste Linie bestimmen; spätere Tests zeigen, ob weitere Bars in diesem Bereich reagieren.",
      "Im Bullenfall verbindest du einen früheren Tiefpunkt mit einem späteren höheren Tief und verlängerst die Linie nach rechts. Im Bärenfall verbindest du ein Hoch mit einem späteren niedrigeren Hoch. Erst nach dem zweiten Punkt kennst du diese konkrete Linie als Referenz.",
      "Zeichne im Replay nur mit Punkten, die zu diesem Zeitpunkt schon sichtbar waren. Ein späteres Tief rückwirkend als Anker zu nehmen macht einen früheren Trade nicht begründeter. Der dritte Kontakt kann die Referenz stützen, aber genauso gut durchbrochen werden."
    ],
    "takeaways": [
      "Sichtbare Swingpunkte statt gewünschter Ergebnisse nutzen.",
      "Die zweite Referenz muss schon entstanden sein.",
      "Keine späteren Anker rückwirkend handeln."
    ],
    "callout": "Keine späteren Anker rückwirkend handeln.",
    "prompt": "Wann konntest du eine Linie aus zwei Swingtiefs erstmals kennen?",
    "answers": [
      {
        "label": "Erst nachdem der ganze Tag beendet ist.",
        "explanation": "Für die erste Verbindung genügen die beiden schon sichtbaren Bezugspunkte."
      },
      {
        "label": "Nach der Entstehung des zweiten erkennbaren Swingtiefs.",
        "explanation": "Richtig. Vorher ist gerade diese Verbindung noch nicht bekannt."
      },
      {
        "label": "Schon vor dem ersten Tief.",
        "explanation": "Dort fehlen die beiden nötigen Anker."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Best-Fit-Linie statt millimetergenauer Wahrheit",
    "summary": "Linien können sinnvolle Näherungen sein.",
    "section": "Linienwahl",
    "scenario": "c13-03",
    "paragraphs": [
      "Manche Verläufe haben keine zwei perfekten Außenpunkte. Dann kann eine bestmögliche Näherung durch mehrere Hoch- oder Tiefbereiche die Ordnung zeigen. Eine Regressionslinie berechnet so eine Annäherung; für die sichtbare Struktur reicht oft schon eine schnell gezogene Linie.",
      "Manchmal passt die Verbindung der Kerzenkörper besser als die der langen Tails. Das kann bei einem Keil sinnvoll sein, dessen Extremspitzen keine schöne Keilform ergeben. Deine Wahl muss erklären, welchen Verlauf du betrachtest; sie darf nicht heimlich wechseln, sobald eine falsche Prognose gerettet werden soll.",
      "Vergleiche nachvollziehbare Varianten und behalte die Bars im Blick. Eine leichte Abweichung zwischen zwei Linien ist weniger wichtig als kräftiger Anschluss oder klare Zurückweisung. Eine Näherung macht den Chart lesbar, aber nicht sicherer."
    ],
    "takeaways": [
      "Linien können sinnvolle Näherungen sein.",
      "Körper und Tails bewusst unterscheiden.",
      "Linienwahl erklärt den Verlauf, nicht das gewünschte Ergebnis."
    ],
    "callout": "Die Linienwahl erklärt den Verlauf, nicht das gewünschte Ergebnis.",
    "prompt": "Wann ist eine Körperlinie sinnvoll?",
    "answers": [
      {
        "label": "Wenn sie einen bereits erreichten Stop verschwinden lässt.",
        "explanation": "Linienwahl ändert den tatsächlichen Preis und Stop nicht."
      },
      {
        "label": "Wenn sie jede neue Kerze garantiert vorhersagt.",
        "explanation": "Auch eine gute Näherung liefert keine Gewissheit."
      },
      {
        "label": "Wenn sie die wiederholte Struktur nachvollziehbar beschreibt.",
        "explanation": "Richtig. Sie muss eine begründete Näherung sein."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Eine Linie ist ein Bereich für Beobachtung",
    "summary": "Vorzeitige und überschießende Tests mitlesen.",
    "section": "Tests",
    "scenario": "c13-04",
    "paragraphs": [
      "Ein Rücklauf kann knapp vor einer Trendlinie drehen oder etwas darüber hinauslaufen. Andere Teilnehmer zeichnen leicht andere Linien und legen ihre Orders anders. Eine exakt berührte Diagonale ist deshalb keine Voraussetzung für einen relevanten Test.",
      "Schau auf die Umgebung: Verlieren die Gegenbars Kraft, kehren Schlüsse in Trendrichtung zurück oder gibt es eine brauchbare Auslösung? Ein Unterschreiten der Bullenlinie kann zunächst nur die Suche nach der Gegenseite sein. Ohne Käuferreaktion bleibt es allerdings ein fortschreitender Bruch.",
      "Dass der Linienort nicht ganz exakt feststeht, erlaubt kein grenzenloses Risiko. Dein Trade braucht eine konkrete Ausstiegsgrenze aus dem Plan. Zone und Stop sind verschiedene Werkzeuge: Die Zone lenkt die Aufmerksamkeit, der Stop begrenzt den möglichen Verlust."
    ],
    "takeaways": [
      "Vorzeitige und überschießende Tests mitlesen.",
      "Reaktion im Linienbereich beobachten.",
      "Eine Beobachtungszone ersetzt keinen konkreten Stop."
    ],
    "callout": "Eine Beobachtungszone ersetzt keinen konkreten Stop.",
    "prompt": "Der Kurs dreht knapp vor der Linie. Was prüfst du?",
    "answers": [
      {
        "label": "Ob die nahe Reaktion ein gültiges Setup mit begrenztem Risiko bildet.",
        "explanation": "Richtig. Ein Test braucht keine perfekte Berührung."
      },
      {
        "label": "Nur, ob die Linie pixelgenau getroffen wurde.",
        "explanation": "Der relevante Preisbereich kann etwas vor oder hinter der Linie liegen."
      },
      {
        "label": "Ob der Stop jetzt entfallen darf.",
        "explanation": "Die Ungenauigkeit der Zone entfernt keine Verlustgrenze."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Ein Pullback an der Linie braucht ein Signal",
    "summary": "Den Linienbereich als Ort behandeln, nicht als Order.",
    "section": "Mit dem Trend",
    "scenario": "c13-05",
    "paragraphs": [
      "Solange es eine Folge steigender Hochs und Tiefs gibt, kann ein Rücklauf an die Bullenlinie eine Gelegenheit zur Fortsetzung vorbereiten. Im Bärenfall gilt dasselbe für den Anstieg an eine fallende Linie. Die Linie lenkt den Blick auf einen Ort, nicht auf eine fertige Order.",
      "Ein kräftiger Gegenbar am Linienbereich sieht erst mal bedrohlich aus. Prüf die Vorgeschichte und dann, ob die Trendseite wieder durchkommt. Für einen geplanten Einstieg wartest du auf die Auslösung deines Signals; ein Durchfallen ohne Anschluss in Trendrichtung ist etwas anderes als eine Zurückweisung.",
      "Leg vor der Order fest, was die Fortsetzungsidee ungültig machen würde. Daraus bestimmst du dann die Menge. Ein günstiger Preis nahe der Linie ist kein ausreichender Grund, wenn der Rücklauf die vorherige Struktur schon deutlich verändert hat."
    ],
    "takeaways": [
      "Linienbereich als Ort, nicht als Order behandeln.",
      "Gegenbewegung und Trendreaktion zusammen lesen.",
      "Ohne Auslösung kein fertiges Fortsetzungssetup."
    ],
    "callout": "Ohne Auslösung kein fertiges Fortsetzungssetup.",
    "prompt": "Was ergänzt die Berührung einer Bullen-Trendlinie zu einer begründeten Long-Idee?",
    "answers": [
      {
        "label": "Die Behauptung, jede Linie müsse halten.",
        "explanation": "Linien können auch dauerhaft gebrochen werden."
      },
      {
        "label": "Eine passende Käuferreaktion, Auslösung und tragbares Risiko.",
        "explanation": "Richtig. Der Ort allein reicht nicht."
      },
      {
        "label": "Nur ein möglichst großer Short-Bar.",
        "explanation": "Ein Gegenbar zeigt zunächst Druck und noch keinen Käuferanschluss."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Linienbruch heißt mehr Handel in beide Richtungen",
    "summary": "Einen Bruch als Beteiligung der Gegenseite lesen.",
    "section": "Kontrollwechsel",
    "scenario": "c13-06",
    "paragraphs": [
      "Wird eine bisher wirksame Bullenlinie nach unten gebrochen, haben die Verkäufer zum ersten Mal mehr Raum gewonnen. Bei einer Bärenlinie zeigt der Gegenbruch, dass die Käufer stärker mitmischen. Die Kontrolle einer Seite ist jetzt weniger selbstverständlich.",
      "Das ist die wichtigste erste Information des Bruchs: Zweiseitiger Handel wird plausibler. Daraus kann eine größere Korrektur, eine Range oder ein neuer Trend entstehen. Ein Linienbruch allein beweist noch keine vollständige Umkehr, auch wenn der erste Gegenbar auffällig aussieht.",
      "Für eine alte Position gilt der Schutzplan weiter. Für eine neue Gegenposition prüfst du Stärke des Bruchs, den folgenden Test und dessen Auslösung. Eine geometrisch verletzte Linie und ein belegter neuer Trend sind verschiedene Aussagen."
    ],
    "takeaways": [
      "Bruch als Beteiligung der Gegenseite lesen.",
      "Korrektur, Range und Umkehr offen halten.",
      "Eine Linienverletzung ist noch kein neuer Trend."
    ],
    "callout": "Eine Linienverletzung ist noch kein neuer Trend.",
    "prompt": "Was zeigt ein erster Bruch einer lange wirksamen Bullenlinie am ehesten?",
    "answers": [
      {
        "label": "Einen garantierten Bärentrend.",
        "explanation": "Eine neue Trendrichtung braucht weitere Belege."
      },
      {
        "label": "Dass alle bisherigen Hochs bedeutungslos sind.",
        "explanation": "Gerade die alten Extreme können nach dem Bruch erneut getestet werden."
      },
      {
        "label": "Die Verkäufer haben mehr Raum gewonnen; der weitere Verlauf bleibt zu prüfen.",
        "explanation": "Richtig. Die einseitige Kontrolle wird unsicherer."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Nach dem Bruch kann das Extrem noch einmal kommen",
    "summary": "Lange Vortrends können ihr Extrem erneut testen.",
    "section": "Extremtest",
    "scenario": "c13-07",
    "paragraphs": [
      "Hat eine Linie viele Bars lang einen Trend begleitet, kann nach ihrem Bruch noch ein Test des alten Extrembereichs folgen. Im Bullenfall kann die Erholung ein niedrigeres oder sogar höheres Hoch erreichen. Im Bärenfall gilt das spiegelbildlich für einen erneuten Tiefbereich.",
      "Der Extremtest liefert neue Information: Setzt sich die alte Richtung mit Anschluss fort, gelingt der Gegenseite eine Umkehr oder entsteht Balance? Ein höheres Hoch allein kann Teil eines Tests sein und beweist nicht, dass der vorherige Bruch bedeutungslos war.",
      "Verlass dich nicht darauf, dass ein alter Verlusttrade während des Tests schon wieder auf Einstand kommt. Zeitpunkt und Ausmaß sind offen. Der Extrembereich ist eine Referenz für die nächste Beobachtung; deine ursprüngliche Verlustgrenze bleibt verbindlich."
    ],
    "takeaways": [
      "Lange Vortrends können ihr Extrem erneut testen.",
      "Test kann niedriger, gleich oder höher enden.",
      "Ein möglicher Retest ist keine Rettungsgarantie."
    ],
    "callout": "Ein möglicher Retest ist keine Rettungsgarantie.",
    "prompt": "Nach Linienbruch erreicht der Kurs ein höheres Hoch. Was prüfst du?",
    "answers": [
      {
        "label": "Anschluss und Gegenreaktion an diesem neuen Extremtest.",
        "explanation": "Richtig. Das neue Hoch kann Fortsetzung oder Teil einer Umkehr sein."
      },
      {
        "label": "Dass ein Linienbruch rückwirkend nie stattgefunden hat.",
        "explanation": "Die vorherige Störung bleibt Teil der Vorgeschichte."
      },
      {
        "label": "Dass jeder Short jetzt automatisch profitabel wird.",
        "explanation": "Ein Extremtest garantiert kein Ergebnis."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Neue Swingpunkte, flachere Linien",
    "summary": "Neue Swings können neue Anker liefern.",
    "section": "Momentum",
    "scenario": "c13-08",
    "paragraphs": [
      "Nach einer Gegenbewegung entsteht ein neuer Swingpunkt. Wird die ursprüngliche Trendrichtung wieder aufgenommen, kann dieser Punkt einen zweiten Anker für eine längere Linie liefern. Sie ist oft flacher als die frühere steile Verbindung.",
      "Mehrere nacheinander flacher werdende Linien können auf nachlassendes Tempo hinweisen. Die alte Richtung bleibt dabei erst mal intakt: Ein langsamerer Bullenlauf ist nicht automatisch ein Bärenlauf. Steigung und Trendrichtung musst du getrennt lesen.",
      "Erst wenn die Hoch- und Tiefstruktur kippt und Gegenlinien besser erklären, wo die neuen Rückläufe stoppen, kann die andere Seite wichtiger werden. Zeichne nicht bei jedem kleinen Bar eine neue Diagonale; nutze erkennbare Swingpunkte und beobachte, wie sie tatsächlich wirken."
    ],
    "takeaways": [
      "Neue Swings können neue Anker liefern.",
      "Flachere Steigung zeigt oft weniger Tempo.",
      "Weniger Tempo ist nicht automatisch Gegenrichtung."
    ],
    "callout": "Weniger Tempo ist nicht automatisch Gegenrichtung.",
    "prompt": "Was kann eine Folge flacherer Bullenlinien anzeigen?",
    "answers": [
      {
        "label": "Dass keine Verlustgrenze mehr gebraucht wird.",
        "explanation": "Das Tempo hebt den Risikoplan nicht auf."
      },
      {
        "label": "Nachlassendes Aufwärtstempo, ohne allein eine Umkehr zu beweisen.",
        "explanation": "Richtig. Steigung und Richtung sind unterschiedliche Merkmale."
      },
      {
        "label": "Dass die Kurse schon zwingend fallen.",
        "explanation": "Auch eine flache Linie kann weiterhin steigen."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Viele enge Tests haben zwei mögliche Ausgänge",
    "summary": "Viele Tests machen eine Grenze relevant.",
    "section": "Wiederholte Tests",
    "scenario": "c13-09",
    "paragraphs": [
      "Wenn der Markt immer wieder eine Linie prüft und kaum von ihr wegkommt, fällt der Bereich auf. Die wiederholte Annäherung kann den Eindruck machen, dass die verteidigende Seite kaum noch Abstand schafft und ein Bruch sich vorbereitet.",
      "Es ist aber auch ein anderer Ausgang möglich: Die angreifende Seite gibt auf, nimmt Positionen zurück und der bisherige Trend beschleunigt von der Linie weg. Im Bärenfall können aufgegebene Kaufversuche zusätzliche Verkäufe erzeugen. Beide Wege passen zur gleichen vorherigen Häufung von Tests.",
      "Du brauchst daher den tatsächlichen Ausbruch und seinen Anschluss oder die klare Beschleunigung weg von der Grenze. Die Anzahl der Kontakte allein entscheidet die Richtung nicht. Ein späterer Klimax kann den beschleunigten Schub wiederum beenden; die Einordnung bleibt fortlaufend."
    ],
    "takeaways": [
      "Viele Tests machen eine Grenze relevant.",
      "Bruch oder Beschleunigung sind beide möglich.",
      "Die tatsächliche Reaktion entscheidet."
    ],
    "callout": "Die tatsächliche Reaktion entscheidet.",
    "prompt": "Was folgt aus vielen Tests einer Bären-Trendlinie?",
    "answers": [
      {
        "label": "Ein sicherer Ausbruch nach oben.",
        "explanation": "Die Käufer können auch aufgeben und der Bärenlauf beschleunigt."
      },
      {
        "label": "Ein sicherer Abwärtsklimax im nächsten Bar.",
        "explanation": "Zeitpunkt und Ausmaß stehen nicht fest."
      },
      {
        "label": "Die Richtung bleibt offen, bis Bruch oder erneute Abwärtskontrolle sichtbar werden.",
        "explanation": "Richtig. Mehr Kontakte garantieren kein Ergebnis."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Größe und Tempo des Gegenbruchs lesen",
    "summary": "Kleinen Stich und starken Gegenimpuls unterscheiden.",
    "section": "Bruchqualität",
    "scenario": "c13-10",
    "paragraphs": [
      "Ein knapper Stich durch eine Linie erzählt etwas anderes als mehrere große Gegenbars mit schnellen tieferen Schlusskursen. Größere und raschere Gegenbewegungen zeigen mehr Druck der angreifenden Seite und machen eine tiefere Veränderung plausibler.",
      "Trotzdem kann nach einem kräftigen Gegenbruch noch ein Test des bisherigen Trendextrems kommen. Die Stärke des ersten Schubs und die spätere Testqualität sind zwei aufeinanderfolgende Prüfungen. Einen langsamen Rücklauf ohne Anschluss bewertest du anders als eine kräftige Wiederaufnahme der alten Richtung.",
      "Vergleiche die Gegenbars mit der Vorgeschichte: Spanne, Körper, Schlüsse und Überlappung. Aus einem großen Bar allein ergibt sich keine feste Umkehrwahrscheinlichkeit. Die Qualität der späteren Reaktion bestätigt oder schwächt die erste Deutung."
    ],
    "takeaways": [
      "Kleinen Stich und starken Gegenimpuls unterscheiden.",
      "Tempo und Anschluss gemeinsam lesen.",
      "Auch ein kräftiger Bruch kann einen Extremtest nach sich ziehen."
    ],
    "callout": "Auch ein kräftiger Bruch kann einen Extremtest nach sich ziehen.",
    "prompt": "Welcher Bruch zeigt zunächst mehr Gegendruck?",
    "answers": [
      {
        "label": "Mehrere schnelle große Gegenbars mit Anschluss.",
        "explanation": "Richtig. Größe, Tempo und Folgereaktion sprechen für stärkere Beteiligung."
      },
      {
        "label": "Eine einzelne Spitze ohne Folgereaktion.",
        "explanation": "Das kann nur ein kurzer Test sein."
      },
      {
        "label": "Eine Linie mit besonders kräftiger Zeichnungsfarbe.",
        "explanation": "Die Darstellung verändert den Marktdruck nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Gap und großer Trendbar als kurzer Trend",
    "summary": "Kurzen Impuls von langem Trend unterscheiden.",
    "section": "Ein-Bar-Impulse",
    "scenario": "c13-11",
    "paragraphs": [
      "Eine Eröffnungslücke oder ein sehr großer Trendbar lässt sich als kurzer Ausbruchsimpuls betrachten. In dieser Bewegung dominiert zunächst eine Richtung. Eine extrem steile Trendlinie beschreibt dann nur diese kurze Phase und noch keinen stabilen Tagestrend.",
      "Schon ein paar Seitwärtsbars können so eine steile Verbindung verletzen. Oft entsteht dabei nur eine Flagge, die später in Impulsrichtung ausbricht. Es kann aber auch ein Fehlschlag mit Gegensignal folgen. Der geometrische Bruch kommt hier leichter zustande als bei einer lange wirksamen Linie.",
      "Prüf deshalb Pause und Auslösung getrennt. Du handelst weder jede Seitwärtsphase als Umkehr noch jede Lücke als unvermeidliche Fortsetzung. Ein Fade, also ein Trade gegen den Impuls, braucht einen passenden Signalbereich und ein begrenztes Risiko."
    ],
    "takeaways": [
      "Kurzen Impuls von langem Trend unterscheiden.",
      "Seitwärtsbars brechen steile Linien leicht.",
      "Ein Fade braucht ein echtes Gegensignal."
    ],
    "callout": "Ein Fade braucht ein echtes Gegensignal.",
    "prompt": "Nach einem großen Bullenbar laufen drei Bars seitwärts. Was ist noch offen?",
    "answers": [
      {
        "label": "Dass die Fortsetzung garantiert ist.",
        "explanation": "Auch der große Impuls kann scheitern."
      },
      {
        "label": "Ob eine Fortsetzungsflagge oder ein Ausbruchsfehlschlag entsteht.",
        "explanation": "Richtig. Die Pause allein entscheidet das nicht."
      },
      {
        "label": "Dass ein Bärentrend sicher begonnen hat.",
        "explanation": "Die steile Linie kann schon durch Seitwärtsbewegung gebrochen sein."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Linien helfen nur, solange die Bars sichtbar bleiben",
    "summary": "Einzeichnen, um etwas zu klären, nicht zur Dekoration.",
    "section": "Chartdisziplin",
    "scenario": "c13-12",
    "paragraphs": [
      "Eine offensichtlich erkennbare Linie musst du nicht immer zeichnen. Bei Unsicherheit kann eine kurze Einzeichnung zeigen, ob der aktuelle Bar den Bereich erreicht. Danach kann die Hilfe wieder verschwinden, wenn sie nichts Neues mehr liefert.",
      "Viele überlagerte Diagonalen machen es schwer, Körper, Schlüsse und Reaktionen zu sehen. Eine kleine Auswahl mit klaren Bezugspunkten ist nützlicher als ein Netz, das jeden möglichen Kurs nachträglich erklären kann. Der Chart soll dir die nächste Entscheidung erleichtern.",
      "Im Lernmodus zeichnest du bewusst und beschreibst den Test. In der späteren Anwendung reichen oft die aktuell relevanten Grenzen. Frag dich bei jeder Linie: Welche neue Beobachtung lenkt sie, und würde ich ohne sie die Reaktion übersehen? Wenn sie nur ablenkt, nimm sie weg."
    ],
    "takeaways": [
      "Einzeichnen zur Klärung statt zur Dekoration.",
      "Überladene Charts erschweren die Barlektüre.",
      "Die Linie dient den Bars, nicht umgekehrt."
    ],
    "callout": "Die Linie dient den Bars, nicht umgekehrt.",
    "prompt": "Was ist der Nutzen einer kurz eingezeichneten Linie?",
    "answers": [
      {
        "label": "Möglichst viele sich kreuzende Grenzen zu sammeln.",
        "explanation": "Das kann die entscheidenden Bars verdecken."
      },
      {
        "label": "Das spätere Ergebnis schon als sicher anzusehen.",
        "explanation": "Geometrie ersetzt keine tatsächliche Reaktion."
      },
      {
        "label": "Den aktuellen Test räumlich zu klären und die Reaktion besser zu lesen.",
        "explanation": "Richtig. Die Zeichnung ist eine Beobachtungshilfe."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Chartfall 13.1: Mehrere Linien, unterschiedliche Horizonte",
    "summary": "Kurze und lange Linien beantworten verschiedene Fragen.",
    "section": "Chartfall 13.1 · Linienfolge",
    "scenario": "c13-13",
    "paragraphs": [
      "Ein steigender Verlauf enthält kleine schnelle Abschnitte innerhalb einer länger laufenden Aufwärtsstruktur. Kurze Linien über nahe Tiefpunkte werden deshalb früher verletzt als eine flachere Linie über weiter entfernte Swings. Beide können unterschiedliche Beobachtungsfragen beantworten.",
      "Im Übungsfall entstehen nach Gegenbewegungen neue Bezugspunkte. Die neuen Aufwärtslinien sind flacher, bevor später fallende Hochlinien den Gegenverlauf besser beschreiben. Eine Linie kann für den kurzen Rücklauf gebrochen sein, während die größere Trendordnung noch besteht.",
      "Wähle die Referenz passend zu deinem Zeithorizont und kennzeichne die Anker. Dass es mehrere Linien gibt, ist kein Grund, nach einem Verlust spontan auf die weiteste auszuweichen. Ein vorher definierter Schutz gehört zur Position und nicht zur nachträglich schönsten Diagonale."
    ],
    "takeaways": [
      "Kurze und lange Linien beantworten verschiedene Fragen.",
      "Neue Swings verändern die Referenzen.",
      "Zeithorizont vor der Order festlegen."
    ],
    "callout": "Den Zeithorizont vor der Order festlegen.",
    "prompt": "Warum kann eine kurze Bullenlinie brechen, während eine längere noch hält?",
    "answers": [
      {
        "label": "Die Linien beziehen sich auf unterschiedlich große Bewegungsabschnitte.",
        "explanation": "Richtig. Der größere Aufbau kann eine stärkere Korrektur aufnehmen."
      },
      {
        "label": "Weil ein kurzer Bruch niemals zählt.",
        "explanation": "Er zeigt trotzdem eine Änderung im kurzen Verlauf."
      },
      {
        "label": "Weil man nach jedem Verlust den Zeithorizont verlängern muss.",
        "explanation": "Das wäre eine nachträgliche Änderung des Risikoplans."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Starker Verkauf an der Bullenlinie kann zurückgenommen werden",
    "summary": "Gegenimpuls mit längerem Vortrend vergleichen.",
    "section": "Chartfall 13.1 · Gegenimpuls",
    "scenario": "c13-14",
    "paragraphs": [
      "Ein schneller Abverkauf bis an eine Bullenlinie kann wie der Beginn eines neuen Bärentrends aussehen. Wer nur den letzten großen roten Körper betrachtet, übersieht allerdings die vorangegangene Folge steigender Hochs und Tiefs.",
      "Am Linienbereich kann der Markt kurz darunter handeln, um weitere Verkäufer oder Käufer zu finden. Kehren die Käufer kräftig zurück, kann die alte Richtung wieder aufgenommen werden. Ein größerer Bruch macht die Gegenseite relevanter, kann aber ebenfalls vor einem erneuten Hochtest liegen.",
      "Der Chartfall zeigt damit eine typische Versuchung: einen großen Gegenschub sehen und sofort auf eine umfassende Umkehr setzen. Beurteile stattdessen den ganzen Ablauf. Weder ein Kauf an der Linie noch ein Short darunter ist allein durch das große Momentum gerechtfertigt."
    ],
    "takeaways": [
      "Gegenimpuls mit längerem Vortrend vergleichen.",
      "Rücknahme oder Anschluss am Linienbereich beobachten.",
      "Ein großer Gegenbar ist noch keine vollständige Umkehr."
    ],
    "callout": "Ein großer Gegenbar ist noch keine vollständige Umkehr.",
    "prompt": "Was fehlt beim Short allein wegen eines großen Verkaufsbars an der Bullenlinie?",
    "answers": [
      {
        "label": "Der Wunsch, den neuen Trend als Erster zu erwischen.",
        "explanation": "Dieser Wunsch ist kein beobachtbares Setup."
      },
      {
        "label": "Die Einordnung des Vortrends und die tatsächliche Reaktion am Test.",
        "explanation": "Richtig. Die letzten Bars sind wichtig, aber nicht die ganze Vorgeschichte."
      },
      {
        "label": "Eine möglichst rote Chartfarbe.",
        "explanation": "Die Farbe verändert keine Marktinformation."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Chance, Risiko und Plausibilität gemeinsam prüfen",
    "summary": "Ein mögliches Ziel allein ist kein Vorteil.",
    "section": "Chartfall 13.1 · Entscheidung",
    "scenario": "c13-15",
    "paragraphs": [
      "Ein früher Gegentrend-Entry verspricht auf dem Papier viel Raum, falls wirklich eine Umkehr beginnt. Dieses mögliche Ziel ist nur ein Teil der Entscheidung. Stop-Abstand und die Plausibilität des angenommenen Ablaufs gehören genauso dazu.",
      "Ein großes Ziel bei geringem Käuferverlust an der Linie kann eine schwache Umkehrthese überdecken. Umgekehrt kann ein bescheidenerer Fortsetzungsplan die noch intakte Struktur besser nutzen. Dafür brauchst du keine ausgedachte Prozentzahl, sondern eine nachvollziehbare Beschreibung des aktuellen Drucks.",
      "Die Hoffnung, nach einem ungünstigen Entry wenigstens mit einer zweiten Gegenwelle auf Einstand zu kommen, ersetzt keinen Schutz. Ein Extremtest kann anders verlaufen oder ausbleiben. Plane vor dem Einstieg, wo die Idee scheitert, statt allein den möglichen Ertrag entscheiden zu lassen."
    ],
    "takeaways": [
      "Mögliches Ziel allein ist kein Vorteil.",
      "Stop-Abstand und Ablaufplausibilität mitprüfen.",
      "Einstandshoffnung ersetzt keinen Stop."
    ],
    "callout": "Einstandshoffnung ersetzt keinen Stop.",
    "prompt": "Welche Kombination gehört vor eine Order?",
    "answers": [
      {
        "label": "Nur das größtmögliche Kursziel.",
        "explanation": "Ein fernes Ziel sagt nichts darüber, ob es unter den aktuellen Bedingungen plausibel ist."
      },
      {
        "label": "Nur die Hoffnung auf eine zweite Welle.",
        "explanation": "Sie begrenzt keinen Verlust und garantiert keinen Ausstieg."
      },
      {
        "label": "Zielraum, Verlustgrenze und begründete Einschätzung des Ablaufs.",
        "explanation": "Richtig. Alle drei bestimmen die Qualität des Plans."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Chartfall 13.2: Linien funktionieren auch im Monatschart",
    "summary": "Die Linienlogik gilt auf verschiedenen Zeitebenen.",
    "section": "Chartfall 13.2 · Zeitebene",
    "scenario": "c13-16",
    "paragraphs": [
      "Eine Trendlinie ist nicht auf fünf Minuten beschränkt. Im Monatschart können zwei weit auseinanderliegende Tiefbereiche eine langfristige Referenz liefern. Eine spätere starke Korrektur kann diesen Bereich testen, obwohl die Verbindung viele Jahre umfasst.",
      "Das Grundprinzip bleibt gleich: Anker, Test und tatsächliche Reaktion. Nur die Zeit- und Preisabstände werden größer. Ein Stop aus der Monatsstruktur würde ein anderes Risiko und eine andere Haltedauer verlangen als ein Intraday-Setup; beides darfst du nicht einfach vermischen.",
      "Die Langfristansicht dient hier dem Verständnis der Methode. Sie ist kein Grund, eine kurzfristige Position nachträglich jahrelang halten zu wollen. Prüf auch bei einer alten Linie, ob neue Bars ihre Bedeutung noch stützen oder eine aktuellere Referenz wichtiger geworden ist."
    ],
    "takeaways": [
      "Die Linienlogik gilt auf verschiedenen Zeitebenen.",
      "Abstände und Haltedauer ändern sich.",
      "Eine größere Ebene rettet keinen gebrochenen Intraday-Plan."
    ],
    "callout": "Eine größere Ebene rettet keinen gebrochenen Intraday-Plan.",
    "prompt": "Was bleibt im Monatschart gleich?",
    "answers": [
      {
        "label": "Die Prüfung von Ankern, Test und Reaktion.",
        "explanation": "Richtig. Die Methode bleibt, während Größenordnung und Risiko wechseln."
      },
      {
        "label": "Die nötige Stop-Distanz eines Fünf-Minuten-Trades.",
        "explanation": "Die langfristige Struktur kann sehr viel größere Abstände haben."
      },
      {
        "label": "Die Zahl der Minuten bis zur Entscheidung.",
        "explanation": "Ein Monatsbar ist eine andere Zeiteinheit."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Alte Ausbruchszonen verlieren nicht alle gleich schnell Gewicht",
    "summary": "Ältere Zonen können als Referenz bestehen bleiben.",
    "section": "Chartfall 13.2 · Alte Referenz",
    "scenario": "c13-17",
    "paragraphs": [
      "Eine weit zurückliegende Ausbruchszone kann als möglicher Testbereich im Gedächtnis bleiben. Hat sich der Markt aber lange und weit von ihr entfernt, liefern neuere Swings oft deutlich mehr Information für die aktuelle Entscheidung.",
      "Der langfristige Chartfall vergleicht solche Referenzen: eine später getestete Tiefverbindung und eine sehr alte Ausbruchszone. Dass die alte Zone nie exakt getestet wurde, heißt nicht, dass der Markt zwingend dorthin zurückkehren muss. Mit vielen weiteren Bars kann ihre praktische Bedeutung abnehmen.",
      "Historische Erwartungen sind keine Prognose für den heutigen Markt. Auch eine breite obere Range kann mehrere Musternamen bekommen; entscheidend bleiben der sichtbare Test und die Folgereaktion. Nutze alte Preisbereiche als abgestufte Referenzen, nicht als feste Zielversprechen."
    ],
    "takeaways": [
      "Ältere Zonen können als Referenz bestehen bleiben.",
      "Neuere Swings können wichtiger werden.",
      "Ein nie erfolgter Test ist keine Rückkehrpflicht."
    ],
    "callout": "Ein nie erfolgter Test ist keine Rückkehrpflicht.",
    "prompt": "Eine sehr alte Ausbruchszone wurde nie exakt getestet. Was darfst du daraus ableiten?",
    "answers": [
      {
        "label": "Alle neueren Tiefpunkte müssen ignoriert werden.",
        "explanation": "Die neueren Punkte können die aktuelle Struktur besser erklären."
      },
      {
        "label": "Sie ist eine mögliche Referenz, aber kein garantiertes Rückkehrziel.",
        "explanation": "Richtig. Alter und neuer Verlauf beeinflussen ihre Bedeutung."
      },
      {
        "label": "Der Kurs muss dorthin zurückkehren.",
        "explanation": "Ein ausstehender Test erzeugt keine Verpflichtung des Marktes."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Chartfall 13.3: Eine Parallele zur Kanalgrenze ziehen",
    "summary": "Die Kanalgrenze kann die Steigung vorgeben.",
    "section": "Chartfall 13.3 · Konstruktion",
    "scenario": "c13-18",
    "paragraphs": [
      "Manchmal ist die Kanalgrenze leichter zu erkennen als die Trendlinie. Im Bärenfall verbindest du zwei Tiefbereiche und bekommst eine fallende untere Begrenzung. Eine Parallele dazu kannst du dann an ein dazwischenliegendes Hoch verschieben.",
      "Die verschobene Linie behält dieselbe Steigung, nur der Abstand ist ein anderer. Sie kann als obere Trendseite des gedachten Kanals dienen. Verankere sie an einem bereits sichtbaren Hoch und prüf, ob der Verlauf sinnvoll zwischen beiden Grenzen liegt.",
      "Das ist eine ergänzende Konstruktion, keine genauere Wahrheit. Sie muss etwas erklären, das die einfachen Swinglinien nicht schon zeigen. Nach dem Zeichnen beobachtest du den Test am oberen Bereich; eine geometrisch passende Parallele allein eröffnet keinen Short."
    ],
    "takeaways": [
      "Kanalgrenze kann die Steigung vorgeben.",
      "Parallele an der anderen Seite verankern.",
      "Konstruktion ist eine Hilfe, keine Order."
    ],
    "callout": "Eine Konstruktion ist eine Hilfe, keine Order.",
    "prompt": "Was bleibt beim Verschieben einer echten Parallele gleich?",
    "answers": [
      {
        "label": "Der ursprüngliche Hoch- oder Tiefpreis.",
        "explanation": "Die verschobene Linie liegt gerade auf einer anderen Seite."
      },
      {
        "label": "Die Garantie, dass jeder Bar im Kanal bleibt.",
        "explanation": "Der Markt kann beide Grenzen überschreiten."
      },
      {
        "label": "Die Steigung der ursprünglichen Linie.",
        "explanation": "Richtig. Nur der Abstand beziehungsweise Achsenabschnitt ändert sich."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Die Parallele kann dieselbe Information doppeln",
    "summary": "Nahe Linien können dieselbe Referenz doppeln.",
    "section": "Chartfall 13.3 · Zusatznutzen",
    "scenario": "c13-19",
    "paragraphs": [
      "Die aus einer Kanalgrenze abgeleitete Trendlinie kann fast mit einer gewöhnlichen Hochlinie zusammenfallen. Dann liefert die aufwendigere Konstruktion keine zweite unabhängige Bestätigung; beide zeigen nahezu denselben Preisbereich.",
      "Im Chartfall kehrt ein Rücklauf an die obere Bärengrenze zurück und der zweite Umkehrversuch wird zum Prüfpunkt für einen Short. Die gleiche Gelegenheit hättest du oft schon an einer einfachen Verbindung der relevanten Hochs erkannt.",
      "Mehr Linien sind deshalb nicht automatisch mehr Belege. Halte Konstruktion und Preisreaktion getrennt: Die Linien helfen beim Ort, die tatsächliche Zurückweisung und Auslösung liefern die neue Marktinformation. Wirf die überflüssige Variante raus, wenn sie die Bars verdeckt."
    ],
    "takeaways": [
      "Nahe Linien können dieselbe Referenz doppeln.",
      "Zweiten Umkehrversuch als neue Information lesen.",
      "Mehr Zeichnungen sind nicht automatisch mehr Bestätigung."
    ],
    "callout": "Mehr Zeichnungen sind nicht automatisch mehr Bestätigung.",
    "prompt": "Zwei fast identische Linien zeigen denselben Bereich. Was folgt?",
    "answers": [
      {
        "label": "Sie können dieselbe Information darstellen; die Preisreaktion bleibt entscheidend.",
        "explanation": "Richtig. Die Konstruktionen sind nicht zwingend unabhängige Belege."
      },
      {
        "label": "Der Trade hat nun doppelte Erfolgswahrscheinlichkeit.",
        "explanation": "Die Zahl der Zeichnungen erzeugt keine gemessene Wahrscheinlichkeit."
      },
      {
        "label": "Man muss beide Linien dauerhaft auf dem Chart behalten.",
        "explanation": "Eine überflüssige Variante kann entfernt werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Zwei Linien treffen sich im Keil-Pullback",
    "summary": "Übergeordnete Linie und Pullback-Linie unterscheiden.",
    "section": "Chartfall 13.3 · Gegenlinien",
    "scenario": "c13-20",
    "paragraphs": [
      "Ein Aufwärts-Pullback im Bärenkanal kann drei Schübe bilden. Seine eigene obere Begrenzung steigt, während die übergeordnete Bärenlinie fällt. Beide Bereiche können sich nahe dem letzten Pullback-Hoch treffen.",
      "Dieses Zusammentreffen beschreibt zwei gleichzeitig wirkende Strukturen: die übergeordnete Trendgrenze und die Begrenzung der Gegenbewegung. Eine Überschreitung der kleinen Pullback-Grenze mit anschließender Rücknahme kann dort eine mögliche Short-Idee stützen.",
      "Es zählt aber nicht die bloße Kreuzung auf dem Bildschirm. Prüf, ob der Rücklauf wirklich zurückgewiesen wird und die Verkäufer Anschluss bekommen. Der Keil kann größer werden oder nach oben ausbrechen; der Short braucht deshalb ein aktuelles Signal und begrenztes Risiko."
    ],
    "takeaways": [
      "Übergeordnete Linie und Pullback-Linie unterscheiden.",
      "Kreuzungsbereich als Beobachtungsort nutzen.",
      "Erst die tatsächliche Zurückweisung gibt neue Evidenz."
    ],
    "callout": "Erst die tatsächliche Zurückweisung liefert neue Evidenz.",
    "prompt": "Was macht die Kreuzung zweier Linien handelbar?",
    "answers": [
      {
        "label": "Die Zahl der zuvor gezeichneten Linien.",
        "explanation": "Viele Linien erzeugen keine neue Reaktion."
      },
      {
        "label": "Eine passende sichtbare Reaktion mit Trigger und begrenztem Risiko.",
        "explanation": "Richtig. Der Ort braucht ein Setup."
      },
      {
        "label": "Nur die geometrische Kreuzung.",
        "explanation": "Geometrie allein zeigt keine Verkäuferkontrolle."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Chartfall 13.4: Zwei Hochschübe skizzieren einen Bullenkanal",
    "summary": "Zwei Hochs und ein Zwischentief liefern die Skizze.",
    "section": "Chartfall 13.4 · Bullenkanal",
    "scenario": "c13-21",
    "paragraphs": [
      "Nach einem möglichen Boden entstehen zwei kräftige Aufwärtsschübe. Ihre Hochs können eine obere Kanalgrenze bestimmen. Schiebst du eine Parallele an das Tief dazwischen, hast du einen vorläufigen unteren Bereich für den neuen Aufwärtskanal.",
      "Beim nächsten Rücklauf prüfst du nun, ob die Käufer an dieser unteren Grenze zurückkommen. Im Chartfall ist ein bullischer Reversal-Bar dort der mögliche Signalpunkt. Die Konstruktion ist erst nach dem zweiten Hoch und dem Zwischentief bekannt und wird danach getestet.",
      "Ein neuer Kanal ist erst mal eine Arbeitshypothese. Ein Fall durch die Untergrenze mit starkem Anschluss würde sie schwächen. Für den möglichen Long zählen Signalqualität, Auslösung und Stop-Abstand mehr als die Schönheit des eingezeichneten Bandes."
    ],
    "takeaways": [
      "Zwei Hochs und ein Zwischentief liefern die Skizze.",
      "Nächsten Rücklauf als Test beobachten.",
      "Ein vorläufiger Kanal braucht Käuferbestätigung."
    ],
    "callout": "Ein vorläufiger Kanal braucht Käuferbestätigung.",
    "prompt": "Welche Punkte brauchst du für diese Kanal-Konstruktion?",
    "answers": [
      {
        "label": "Nur das letzte zukünftige Hoch des Tages.",
        "explanation": "Spätere Punkte sind bei der Entscheidung noch nicht bekannt."
      },
      {
        "label": "Eine beliebige waagerechte Linie.",
        "explanation": "Sie würde die beschriebene Kanalsteigung nicht abbilden."
      },
      {
        "label": "Zwei sichtbare Hochs für die Steigung und das Tief dazwischen als Gegenanker.",
        "explanation": "Richtig. Die Parallele wird auf der anderen Seite verankert."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Zwei Abwärtsschübe können einen Bärenkanal vorbereiten",
    "summary": "Zwei Tiefs können die Bärengrenze vorgeben.",
    "section": "Chartfall 13.4 · Bärenkanal",
    "scenario": "c13-22",
    "paragraphs": [
      "Ein Hochbereich nahe einem älteren Hoch kann als möglicher Doppeltest auffallen. Folgt eine Abwärtslücke und danach ein zweiter Schub nach unten, lässt sich aus den beiden Tiefs eine fallende Kanalgrenze skizzieren.",
      "Eine Parallele an das Hoch zwischen diesen Schüben liefert die obere Seite. Den anschließenden Anstieg prüfst du auf Verkäuferreaktion an diesem Bereich. Ein kräftiger bärischer Reversal-Bar kann dort einen möglichen Short vorbereiten, sofern er ausgelöst wird.",
      "Die spiegelbildliche Konstruktion ergänzt den Bullenfall. Sie behauptet nicht, dass der neue Kanal schon dauerhaft feststeht. Prüf die nächste Reaktion und plane den Verlustschutz aus dem tatsächlich handelbaren Signal statt aus einem rückwirkend optimierten Band."
    ],
    "takeaways": [
      "Zwei Tiefs können die Bärengrenze vorgeben.",
      "Zwischenhoch dient als Gegenanker.",
      "Ein neuer Kanal wird an der nächsten Reaktion geprüft."
    ],
    "callout": "Ein neuer Kanal wird an der nächsten Reaktion geprüft.",
    "prompt": "Was prüfst du am oberen Bereich des neuen Bärenkanals?",
    "answers": [
      {
        "label": "Ob Verkäufer den Rücklauf mit einem passenden Signal zurückweisen.",
        "explanation": "Richtig. Die Reaktion kann die Kanalidee stützen."
      },
      {
        "label": "Ob jedes Hoch exakt auf der Linie liegt.",
        "explanation": "Leichte Abweichungen sind möglich; entscheidend ist der Bereich und seine Reaktion."
      },
      {
        "label": "Ob der Stop weit genug entfernt werden kann.",
        "explanation": "Ein Kanal darf kein unbegrenztes Risiko begründen."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Chartfall 13.5: Schulterhöhe schätzen, Bars lesen",
    "summary": "Nackenreferenz und Schulter-Parallele unterscheiden.",
    "section": "Chartfall 13.5 · Schulterstruktur",
    "scenario": "c13-23",
    "paragraphs": [
      "Bei einer möglichen inversen Schulter-Kopf-Schulter-Struktur liegt der Kopf tiefer als die beiden Schulterbereiche. Die Hochpunkte dazwischen bilden eine Nackenreferenz. Eine Parallele durch die linke Schulter kann eine ungefähre Höhe für die rechte Schulter andeuten.",
      "Der geschätzte Bereich hilft beim Beobachten, liefert aber keine präzise Kauforder. Im Chartfall folgt auf eine starke Abwärtsbewegung am rechten Tief ein bullischer Inside-Bar. Diese neue Reaktion trägt mehr zur Einstiegsentscheidung bei als die geometrische Schätzung davor.",
      "Die Form kann sich erweitern, unvollständig bleiben oder scheitern. Prüf daher den aktuellen Tiefbereich, die Zurückweisung und die Auslösung. Eine aus der Schulterhöhe abgeleitete Linie bleibt eine ergänzende Orientierung; die jüngsten Bars führen die Entscheidung."
    ],
    "takeaways": [
      "Nackenreferenz und Schulter-Parallele unterscheiden.",
      "Rechte Schulter nur ungefähr vorzeichnen.",
      "Aktuelle Bars sind wichtiger als die Schulterhöhe."
    ],
    "callout": "Aktuelle Bars sind wichtiger als die Schulterhöhe.",
    "prompt": "Was ist am geschätzten rechten Schulterbereich am wichtigsten?",
    "answers": [
      {
        "label": "Der Name der gesamten Formation allein.",
        "explanation": "Auch eine gut benannte Form kann scheitern."
      },
      {
        "label": "Die aktuelle Reaktion und ein gültiges Signal.",
        "explanation": "Richtig. Die Schätzung lenkt Aufmerksamkeit, die Bars liefern Evidenz."
      },
      {
        "label": "Die exakte Übereinstimmung mit der Zeichnung.",
        "explanation": "Die Konstruktion ist nur eine Annäherung."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Chartfall 13.6: Ein Kanaltest kann knapp davor drehen",
    "summary": "Ein Test kann vor der exakten Linie enden.",
    "section": "Chartfall 13.6 · Testnähe",
    "scenario": "c13-24",
    "paragraphs": [
      "Im Bärenkanal wird die untere Parallele an einem früheren Tief verankert. Spätere Abwärtsschübe können nahe dieser Grenze drehen, ohne sie millimetergenau zu erreichen. Solche Annäherungen kannst du schon als ausreichenden Test werten.",
      "Andere Trader wollen eine tatsächliche Überschreitung und anschließende Rücknahme sehen. Beide Sichtweisen verlangen die Käuferreaktion, unterscheiden sich aber in der nötigen Tiefe des Tests. Der Linienort allein entscheidet nicht, ob ein neuer Long trägt.",
      "Beschreib vor der Auslösung, welchen Test dein Plan verlangt. Danach wechselst du nicht spontan die Definition, nur um jede Kerze passend zu machen. Ein neues Kaufsignal und der begrenzte Stop bleiben Pflicht, auch wenn der Abstand zur Grenze klein wirkt."
    ],
    "takeaways": [
      "Ein Test kann vor der exakten Linie enden.",
      "Penetration ist eine andere Anforderung als Nähe.",
      "Testdefinition vor der Order festlegen."
    ],
    "callout": "Die Testdefinition vor der Order festlegen.",
    "prompt": "Was unterscheidet einen nahen Test von einem Überschreiten?",
    "answers": [
      {
        "label": "Nur die Farbe der eingezeichneten Linie.",
        "explanation": "Die Unterscheidung betrifft die tatsächlich erreichten Preise."
      },
      {
        "label": "Dass ein naher Test keinen Stop braucht.",
        "explanation": "Auch er kann scheitern und braucht Verlustschutz."
      },
      {
        "label": "Der nahe Test dreht vor der Grenze; beim Überschreiten wird darüber hinaus gehandelt.",
        "explanation": "Richtig. Beides muss anschließend anhand der Reaktion beurteilt werden."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Eine sehr steile Linie braucht einen Variantenvergleich",
    "summary": "Steile Linien können Tests unterschiedlich einordnen.",
    "section": "Chartfall 13.6 · Linienwahl",
    "scenario": "c13-25",
    "paragraphs": [
      "Ein steiler Bärenkanal kann so gezeichnet sein, dass spätere Tiefs knapp vor der Untergrenze bleiben. Dann lohnt ein Vergleich mit einer anderen nachvollziehbaren Ankerwahl: Vielleicht beschreibt ein früherer Hochpunkt oder der Beginn des deutlichen Verkaufsimpulses die Struktur besser.",
      "Eine alternative Hochverbindung mit Parallele an einem sichtbaren Tief kann dieselben späteren Bars als Überschreitungen zeigen. Der Markt hat sich nicht verändert; nur die räumliche Referenz ist eine andere. Deshalb ist eine pixelgenaue Grenzverletzung kein absoluter Beweis.",
      "Behalte beide nachvollziehbaren Varianten kurz im Blick und lies die gemeinsame Preisreaktion. Such dir nicht beliebig neue Punkte, bis das gewünschte Signal herauskommt. Ein begründeter Variantenvergleich macht die Unsicherheit sichtbar, statt sie hinterher zu verstecken."
    ],
    "takeaways": [
      "Steile Linien können Tests unterschiedlich einordnen.",
      "Alternative Anker müssen nachvollziehbar bleiben.",
      "Variantenvergleich zeigt Unsicherheit, keine neue Gewissheit."
    ],
    "callout": "Ein Variantenvergleich zeigt Unsicherheit, keine neue Gewissheit.",
    "prompt": "Warum kann derselbe Tiefbar bei zwei Linien anders aussehen?",
    "answers": [
      {
        "label": "Die Ankerwahl verändert die Lage der Parallele, nicht die gehandelten Preise.",
        "explanation": "Richtig. Die geometrische Referenz unterscheidet sich."
      },
      {
        "label": "Weil der Markt rückwirkend andere Kurse hat.",
        "explanation": "Die tatsächlichen Bars bleiben dieselben."
      },
      {
        "label": "Weil nur die zuletzt gezeichnete Linie gültig ist.",
        "explanation": "Auch eine frühere nachvollziehbare Variante kann relevant sein."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Zweite Rücknahme unter der Kanalgrenze",
    "summary": "Erste und zweite Rücknahme getrennt beobachten.",
    "section": "Chartfall 13.6 · Umkehrversuch",
    "scenario": "c13-26",
    "paragraphs": [
      "Überschreitet ein Tief die untere Bärengrenze und wird danach zurückgekauft, entsteht ein erster Umkehrversuch. Ein erneuter Tiefschub mit weiterer Rücknahme kann eine zweite Gelegenheit vorbereiten. Die Zwischenreaktion liefert zusätzliche Information über die Gegenseite.",
      "Eine Käuferbewegung kann anschließend die obere Bärengrenze testen oder durchbrechen. Diese gegenüberliegende Seite ist ein möglicher Bezugspunkt für die Erholung, kein zugesichertes Kursziel. Einen Pullback nach dem oberen Bruch kannst du wiederum auf eine neue Fortsetzung prüfen.",
      "Auch der zweite Versuch braucht einen passenden Signal-Bar und eine Auslösung. Der vorherige erste Fehlschlag macht die zweite Gelegenheit weder risikolos noch in jeder Umgebung automatisch besser. Plane Stop und Menge aus dem jetzigen Aufbau."
    ],
    "takeaways": [
      "Erste und zweite Rücknahme getrennt beobachten.",
      "Gegenüberliegende Kanalgrenze als Referenz nutzen.",
      "Eine zweite Gelegenheit bleibt begrenztes Risiko."
    ],
    "callout": "Eine zweite Gelegenheit bleibt begrenztes Risiko.",
    "prompt": "Was bringt der zweite Tiefversuch zusätzlich?",
    "answers": [
      {
        "label": "Die Erlaubnis, Verluste ohne Stop auszusitzen.",
        "explanation": "Die Order braucht weiter eine konkrete Verlustgrenze."
      },
      {
        "label": "Eine weitere beobachtete Reaktion vor der neuen Auslösung.",
        "explanation": "Richtig. Die Zwischenreaktion ergänzt die Information."
      },
      {
        "label": "Eine Garantie für das obere Kanalziel.",
        "explanation": "Auch der zweite Versuch kann scheitern."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Gap nach oben scheitert, frühe Bärenphase entsteht",
    "summary": "Eröffnungsausbruch und Rücknahme auseinanderhalten.",
    "section": "Chartfall 13.6 · Eröffnung",
    "scenario": "c13-27",
    "paragraphs": [
      "Der Tagesbeginn im vertieften Fall liegt oberhalb eines alten Hochbereichs. Dieser Ausbruch wird aber zurückgenommen und mehrere Bärenbars folgen. Die zunächst bullische Eröffnung verwandelt sich dadurch in eine frühe Abwärtsphase.",
      "Ein erster Pullback nach dem Verkaufsimpuls kann eine Trendfortsetzung vorbereiten. Er ist eine andere Gelegenheit als der gescheiterte Kauf am Gap. Du prüfst den Rücklauf darauf, ob die Verkäufer erneut übernehmen; Signal und Stop liegen in der jetzt sichtbaren Struktur.",
      "Die frühe Bärenphase bestimmt nicht den ganzen späteren Tag. Neue Spikes, Kanäle und Rücknahmen kommen im Ablauf noch. Bewerte jeden Übergang mit den damaligen Bars, statt die spätere Erholung als Grund zu nehmen, den frühen Bärendruck zu ignorieren."
    ],
    "takeaways": [
      "Eröffnungsausbruch und Rücknahme auseinanderhalten.",
      "Ersten Pullback als neue Gelegenheit prüfen.",
      "Frühe Richtung beschreibt nicht jeden späteren Abschnitt."
    ],
    "callout": "Die frühe Richtung beschreibt nicht jeden späteren Abschnitt.",
    "prompt": "Welche Information verändert die bullische Gap-Idee?",
    "answers": [
      {
        "label": "Nur die Größe des ursprünglichen Gaps.",
        "explanation": "Die Lücke allein zeigt noch keinen Fehlschlag."
      },
      {
        "label": "Die spätere Kenntnis des Schlusskurses.",
        "explanation": "Sie war am frühen Entscheidungspunkt nicht vorhanden."
      },
      {
        "label": "Die sichtbare Rücknahme und die folgenden Bärenbars.",
        "explanation": "Richtig. Die Reaktion nach der Lücke ist entscheidend."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Spike und Kanal können eine zweibeinige Erholung vorbereiten",
    "summary": "Spike, Kanalende und Erholung getrennt erfassen.",
    "section": "Chartfall 13.6 · Phasenfolge",
    "scenario": "c13-28",
    "paragraphs": [
      "Ein Bärenspike kann in einen fallenden Kanal übergehen. Mehrere Abwärtsschübe am Kanalende können auf Erschöpfung hinweisen und eine Erholung ermöglichen. Dabei entsteht oft erst ein Aufwärtsbein, ein Rücklauf und ein zweites Aufwärtsbein.",
      "Die Erholung kann den Beginn oder oberen Bereich des Bärenkanals testen. Dort kann ein weiterer Hochtest erneut eine Bärenflagge vorbereiten. Eine kräftige Erholung ist deshalb nicht gleich ein schon dauerhafter Bullen-Trendtag.",
      "Im längeren Ablauf folgen weitere Verkaufsimpulse und später eine bullische Spike-und-Kanal-Phase. Nach deren Rücklauf kann ein Doppeltief eine neue Käuferidee tragen. Lies die Sequenz als wechselnde Phasen, statt jeden großen Bar isoliert zur endgültigen Richtung zu erklären."
    ],
    "takeaways": [
      "Spike, Kanalende und Erholung getrennt erfassen.",
      "Zwei Aufwärtsbeine als mögliche Testfolge lesen.",
      "Ein Kanaltest kann selbst ein neues Gegensetup bilden."
    ],
    "callout": "Ein Kanaltest kann selbst ein neues Gegensetup bilden.",
    "prompt": "Warum ist eine Erholung zur oberen Bärengrenze nicht automatisch ein Bullen-Trendtag?",
    "answers": [
      {
        "label": "Sie kann zunächst nur ein Test sein und dort wieder Verkäufer finden.",
        "explanation": "Richtig. Die weitere Reaktion bleibt offen."
      },
      {
        "label": "Weil Käufer nach einem Bärenkanal nie auftreten.",
        "explanation": "Eine Erholung kann kräftige Nachfrage zeigen."
      },
      {
        "label": "Weil jede obere Linie garantiert hält.",
        "explanation": "Auch diese Grenze kann durchbrochen werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 29,
    "title": "Tagesbewegung als Kontext, nicht als feste Wand",
    "summary": "Tagesausdehnung kann Erschöpfung plausibler machen.",
    "section": "Chartfall 13.6 · Ausdehnung",
    "scenario": "c13-29",
    "paragraphs": [
      "Eine weit ausgedehnte Tagesbewegung lenkt die Aufmerksamkeit auf Erschöpfung. Hat der Abverkauf schon einen großen Teil der zuletzt üblichen Tagesspanne durchlaufen, achten Trader besonders auf mögliche Gegenreaktionen.",
      "Die übliche Spanne ist keine Begrenzung des Tages. Ein Markt kann sie deutlich überschreiten, besonders bei starkem Druck. Aus einem historischen Durchschnitt folgt deshalb weder ein garantierter Boden noch eine fest vorgeschriebene Umkehr.",
      "Verbinde die Ausdehnung mit Kanalort, wiederholten Schüben und der tatsächlichen Käuferreaktion. Ohne Signal bleibt sie ein Kontextmerkmal. Für den neuen Trade gelten dieselben Anforderungen an Auslösung, Verlustschutz und tragbare Menge wie überall sonst."
    ],
    "takeaways": [
      "Tagesausdehnung kann Erschöpfung plausibler machen.",
      "Ein Durchschnitt ist keine Preiswand.",
      "Kontext braucht weiterhin Signal und Risiko."
    ],
    "callout": "Kontext braucht weiterhin Signal und Risiko.",
    "prompt": "Die bisherige Tagesbewegung erreicht die übliche Spanne. Was bedeutet das?",
    "answers": [
      {
        "label": "Jeder Long darf ohne Stop eröffnet werden.",
        "explanation": "Auch eine mögliche Erholung kann scheitern."
      },
      {
        "label": "Eine weitere Kontextinformation, aber kein sicherer Wendepunkt.",
        "explanation": "Richtig. Die Bewegung kann größer werden."
      },
      {
        "label": "Der Markt kann keinen weiteren Tick fallen.",
        "explanation": "Eine übliche Spanne ist keine harte Grenze."
      }
    ],
    "correct": 1
  },
  {
    "number": 30,
    "title": "Chartfall 13.7: Viele Angriffe an einer Bärenlinie",
    "summary": "Wiederholte Angriffe zeigen Konkurrenz.",
    "section": "Chartfall 13.7 · Testfolge",
    "scenario": "c13-30",
    "paragraphs": [
      "Eine fallende Best-Fit-Linie kann wiederholt durch kleine Kaufversuche getestet werden. Kommt der Markt gleichzeitig nicht weit nach unten, bleibt die Grenze eng umkämpft. Das kann einen späteren Bruch nach oben vorbereiten.",
      "Im Übungsfall endet die Konkurrenz zunächst anders: Die Käufer schaffen keine tragfähige Fortsetzung über den Bereich. Die vielen Kontakte zeigen Aktivität, aber noch keinen Erfolg. Zähl nicht jede Annäherung als zusätzliche sichere Bestätigung eines künftigen Longs.",
      "Prüf, ob Schlüsse oberhalb akzeptiert werden oder erneut die Verkäufer übernehmen. Beide möglichen Ausgänge der wiederholten Tests bleiben gültig, bis die tatsächliche Bewegung mehr Information liefert. Der Abstand zur Linie und die Stärke ihrer Gegenreaktionen gehören dazu."
    ],
    "takeaways": [
      "Wiederholte Angriffe zeigen Konkurrenz.",
      "Kontakte allein beweisen keinen Käufererfolg.",
      "Akzeptanz oberhalb oder erneute Verkäuferkontrolle beobachten."
    ],
    "callout": "Beobachten: Akzeptanz oberhalb oder erneute Verkäuferkontrolle.",
    "prompt": "Was ist nach vielen Kaufversuchen an der Bärenlinie noch zu prüfen?",
    "answers": [
      {
        "label": "Nur, ob die Kontaktzahl eine bestimmte Schwelle erreicht.",
        "explanation": "Eine Zahl allein garantiert keine Richtung."
      },
      {
        "label": "Dass eine Linie nach vielen Tests nicht mehr existieren kann.",
        "explanation": "Sie kann weiterhin als wirksamer Bereich dienen."
      },
      {
        "label": "Ob Käufer Preise oberhalb halten oder die Versuche wieder zurückfallen.",
        "explanation": "Richtig. Die Reaktion entscheidet den Ausgang."
      }
    ],
    "correct": 2
  },
  {
    "number": 31,
    "title": "Aufgegebene Kaufversuche können den Abverkauf beschleunigen",
    "summary": "Verlustausstiege können zusätzlichen Druck erzeugen.",
    "section": "Chartfall 13.7 · Aufgabe",
    "scenario": "c13-31",
    "paragraphs": [
      "Scheitern wiederholte Käufe, können Long-Trader aussteigen und erst mal keine neuen Kauforders mehr stellen. Ihre Verkäufe treffen dann auf weniger unmittelbare Nachfrage. Das kann einen raschen Abwärtsschub von der Bärenlinie weg begünstigen.",
      "Dieser Mechanismus erklärt einen möglichen Ausgang der engen Testfolge. Er ist aus dem Preisverlauf abgeleitet; der Chart zeigt keine vollständige Liste aller Teilnehmer. Die tatsächlich beschleunigten Bärenbars sind die sichtbare Information, nicht die vermutete Stimmung allein.",
      "Der neue Schub kann bis zu einer Kanalgrenze laufen und selbst klimaktisch werden. Einen späteren Gegenversuch prüfst du dann wieder als neue Situation. Deute Beschleunigung weder zur sicheren Dauerfortsetzung noch zur sicheren sofortigen Umkehr um."
    ],
    "takeaways": [
      "Verlustausstiege können zusätzlichen Druck erzeugen.",
      "Weniger neue Käufe können die Bewegung verstärken.",
      "Der sichtbare Anschluss bestätigt oder schwächt die Deutung."
    ],
    "callout": "Der sichtbare Anschluss bestätigt oder schwächt die Deutung.",
    "prompt": "Wie können aufgegebene Long-Versuche einen Abwärtsschub verstärken?",
    "answers": [
      {
        "label": "Durch Verlustverkäufe und zugleich weniger unmittelbare neue Nachfrage.",
        "explanation": "Richtig. Beides kann Verkäuferkontrolle begünstigen."
      },
      {
        "label": "Durch garantierte Käufe sämtlicher früher Longs.",
        "explanation": "Zum Schließen verkaufen diese Longs ihre Position."
      },
      {
        "label": "Nur durch die eingezeichnete Linie selbst.",
        "explanation": "Die Linie stellt keine Orders an die Börse."
      }
    ],
    "correct": 0
  },
  {
    "number": 32,
    "title": "Parallele Untergrenze und zwei Tiefüberschreitungen",
    "summary": "Die Kanaluntergrenze mit einem sichtbaren Tief verankern.",
    "section": "Chartfall 13.7 · Klimax",
    "scenario": "c13-32",
    "paragraphs": [
      "Eine Hochlinie über den Bärenverlauf kannst du mit einer Parallele durch ein früheres Tief zum Kanal ergänzen. Späte Abwärtsschübe können diese Untergrenze überschreiten und anschließend zurückkehren. Damit wird die Erschöpfungsidee räumlich nachvollziehbar.",
      "Im Übungsablauf gibt es zwei solche tiefen Versuche. Auf den späteren folgt eine bullische Umkehr über zwei Bars. Erst die neue Käuferreaktion und ihre Auslösung liefern zusätzliche Belege für eine Erholung; das bloße Überschreiten des Kanals war noch kein fertiger Long.",
      "Als nächster Bezug kommt die obere Kanalgrenze infrage. Das ist ein möglicher Testbereich, kein versprochener Gewinn. Der Schutz bleibt am aktuellen Signalplan orientiert, auch wenn der Abstand zwischen den Kanalgrenzen groß und verlockend aussieht."
    ],
    "takeaways": [
      "Kanaluntergrenze mit sichtbarem Tief verankern.",
      "Zwei Überschreitungen und Rücknahmen getrennt lesen.",
      "Umkehrreaktion statt bloßer Tiefe handeln."
    ],
    "callout": "Die Umkehrreaktion handeln, nicht die bloße Tiefe.",
    "prompt": "Was ergänzt die zweite Tiefüberschreitung zu einer möglichen Erholung?",
    "answers": [
      {
        "label": "Dass jeder Kanal höchstens zweimal unterschritten werden kann.",
        "explanation": "Es gibt keine solche feste Obergrenze."
      },
      {
        "label": "Eine beobachtete Käuferumkehr mit eigener Auslösung.",
        "explanation": "Richtig. Die neue Reaktion ist der entscheidende Zusatz."
      },
      {
        "label": "Nur der große Abstand zur oberen Linie.",
        "explanation": "Ein ferner Bezugspunkt allein ist kein Setup."
      }
    ],
    "correct": 1
  },
  {
    "number": 33,
    "title": "Bruch nach oben, Pause und Käuferanschluss",
    "summary": "Ersten Bruch und späteren Anschluss unterscheiden.",
    "section": "Chartfall 13.7 · Kanalwechsel",
    "scenario": "c13-33",
    "paragraphs": [
      "Die Erholung erreicht die obere Bärengrenze und bricht darüber. Danach kann schon eine kurze Ein-Bar-Pause einen kleinen Rücklauf bilden. Der nächste Test zeigt, ob die alte Grenze jetzt erneut Verkäufer oder stattdessen Käufer anzieht.",
      "Kommen dort kräftige Käufer zurück und folgen höhere Schlüsse, bekommt der Bruch Anschluss. Die alte Bärenlinie beschreibt dann nicht mehr dieselbe Verkäuferkontrolle wie zuvor. Das ist mehr Information als der erste kurze Stich nach oben.",
      "Auch dieser Wechsel ist kein Freibrief für beliebige neue Longs. Prüf den jetzigen Trigger und den Stop-Abstand. Eine schon weit gelaufene Erholung kann andere Risiken haben als der frühe Versuch an der Kanalunterseite."
    ],
    "takeaways": [
      "Ersten Bruch und späteren Anschluss unterscheiden.",
      "Pause als neuen Test lesen.",
      "Aktuelle Teilnahme braucht aktuellen Stop und Menge."
    ],
    "callout": "Aktuelle Teilnahme braucht aktuellen Stop und aktuelle Menge.",
    "prompt": "Was stärkt den Bruch über die Bärengrenze?",
    "answers": [
      {
        "label": "Nur der erste kurze Stich über die Linie.",
        "explanation": "Er kann sofort zurückgenommen werden."
      },
      {
        "label": "Ein immer größerer Long nach jeder Kerze.",
        "explanation": "Das ersetzt keine Prüfung des neuen Risikos."
      },
      {
        "label": "Käuferreaktion am anschließenden Test und weitere höhere Schlüsse.",
        "explanation": "Richtig. Die neue Akzeptanz ergänzt den ersten Bruch."
      }
    ],
    "correct": 2
  },
  {
    "number": 34,
    "title": "Große überlappende Bars warnen vor zweiseitigem Handel",
    "summary": "Große Spanne und geringe Überlappung getrennt prüfen.",
    "section": "Chartfall 13.7 · Tageskontext",
    "scenario": "c13-34",
    "paragraphs": [
      "Der vertiefte Tagesbeginn zeigt einen Abwärtsversuch, aber mehrere große Bars überlappen sich stark. Trotz großer Körper entsteht so Unsicherheit: Käufer und Verkäufer handeln wiederholt ähnliche Bereiche. Größe allein ist hier kein Beweis für einen sauberen Trend.",
      "Ein Short unter einem späteren Bar dieser engen Balance kann deshalb zunächst nur einen begrenzten Ausbruch liefern. Die vorherige Range bleibt ein wichtiger Bezug und kann den Kurs wieder zurückziehen. Auch ein späteres neues Tagestief muss nach dieser Vorgeschichte erst Anschluss zeigen.",
      "Der tatsächliche Tagesverlauf kehrt schließlich wieder in den früheren Bereich zurück. Diese spätere Kenntnis hast du im Replay noch nicht; sie erklärt rückblickend die Range-Kräfte, darf aber keinen früheren Stop ersetzen. Die Überlappung war die damals schon sichtbare Warninformation."
    ],
    "takeaways": [
      "Große Spanne und geringe Überlappung getrennt prüfen.",
      "Starke Überlappung kann Balance anzeigen.",
      "Ein Ausbruch braucht Akzeptanz außerhalb der Range."
    ],
    "callout": "Ein Ausbruch braucht Akzeptanz außerhalb der Range.",
    "prompt": "Mehrere große Bars liegen fast vollständig übereinander. Was spricht das an?",
    "answers": [
      {
        "label": "Zweiseitigen Handel und Unsicherheit trotz großer Einzelbars.",
        "explanation": "Richtig. Die Überlappung zeigt wiederholten Handel im selben Bereich."
      },
      {
        "label": "Einen garantierten einseitigen Trend.",
        "explanation": "Die große Überlappung widerspricht dieser Gewissheit."
      },
      {
        "label": "Dass keine Hochs und Tiefs mehr relevant sind.",
        "explanation": "Die Grenzen der Balance werden gerade dadurch wichtig."
      }
    ],
    "correct": 0
  },
  {
    "number": 35,
    "title": "Dein Linienplan vor dem nächsten Bar",
    "summary": "Anker und Zeithorizont vorab notieren.",
    "section": "Abschluss · Beobachtung",
    "scenario": "c13-35",
    "paragraphs": [
      "Notier Richtung und Zeithorizont der betrachteten Struktur. Markiere die bereits sichtbaren Anker und beschreibe, ob du eine Trendlinie, Kanalgrenze oder Parallele nutzt. Danach hältst du fest, welchen Bereich der nächste Test erreichen soll.",
      "Beim Aufdecken weiterer Bars trennst du Annäherung, Überschreitung, Rücknahme und Anschluss. Ein Bruch verändert die Kontrolle, nicht automatisch die gesamte Trendrichtung. Prüf die neue Reaktion und gegebenenfalls einen Extremtest, statt am ersten Liniennamen festzuhalten.",
      "Für eine mögliche Order definierst du Signal, Auslösung, Verlustgrenze und Menge. Alte Linien ersetzt du nur, wenn neue sichtbare Punkte die Struktur besser erklären; der Schutz einer vorhandenen Position wird dadurch nicht heimlich erweitert."
    ],
    "takeaways": [
      "Anker und Zeithorizont vorab notieren.",
      "Test, Bruch und Anschluss getrennt erfassen.",
      "Neue Zeichnung darf kein versteckter größerer Stop sein."
    ],
    "callout": "Eine neue Zeichnung darf kein versteckter größerer Stop sein.",
    "prompt": "Welche Notiz ist vor dem Aufdecken weiterer Bars brauchbar?",
    "answers": [
      {
        "label": "Bei jedem Bruch verschiebe ich den Stop zur nächsten Linie.",
        "explanation": "Das kann das ursprüngliche Risiko unbegrenzt vergrößern."
      },
      {
        "label": "Diese sichtbaren Anker bestimmen meinen Testbereich; Signal und Verlustgrenze prüfe ich dort.",
        "explanation": "Richtig. Die Aussage ist mit den damaligen Informationen überprüfbar."
      },
      {
        "label": "Ich zeichne später die Linie, an der der Markt sicher gedreht hat.",
        "explanation": "Das nutzt spätere Information für eine frühere Entscheidung."
      }
    ],
    "correct": 1
  },
  {
    "number": 36,
    "title": "Trendlinie, Gegenbruch oder Range: drei mögliche Antworten",
    "summary": "Fortsetzung, Umkehr und Balance offen unterscheiden.",
    "section": "Abschluss · Einordnung",
    "scenario": "c13-36",
    "paragraphs": [
      "Am Linienbereich kann die Trendseite zurückkehren und eine Fortsetzung vorbereiten. Ein kräftiger Gegenbruch mit späterer schwacher Trendreaktion kann dagegen den Richtungswechsel stützen. Entsteht vor allem Überlappung, wird zweiseitiger Handel zur wichtigeren Einordnung.",
      "Diese drei Möglichkeiten brauchen unterschiedliche Pläne. Ein Fortsetzungstrade, ein Gegentrend-Trade und ein Trade aus einer Range sind nicht dieselbe Order mit drei Namen. Für jede Idee brauchst du einen passenden Ort, eine Auslösung und Verlustschutz.",
      "Bewerte deine Entscheidung mit dem Bild, das damals bekannt war. Die Übung ist gelungen, wenn du Anker, Reaktion und Risiko nachvollziehbar beschreiben kannst und bei fehlender Klarheit abwartest. Ein später profitabler Ausgang macht einen unbegründeten Einstieg nicht nachträglich gut."
    ],
    "takeaways": [
      "Fortsetzung, Umkehr und Balance offen unterscheiden.",
      "Jede Idee verlangt ihren eigenen Plan.",
      "Eine gute Entscheidung ist vor dem Ergebnis begründbar."
    ],
    "callout": "Eine gute Entscheidung lässt sich schon vor dem Ergebnis begründen.",
    "prompt": "Was ist bei unklarer Reaktion an mehreren Linien eine vollständige Entscheidung?",
    "answers": [
      {
        "label": "Alle drei Richtungspläne gleichzeitig ohne Stop handeln.",
        "explanation": "Das vergrößert die Unklarheit und begrenzt keinen Verlust."
      },
      {
        "label": "Die Linie auswählen, die den größten möglichen Gewinn verspricht.",
        "explanation": "Möglicher Ertrag allein ist kein tragfähiger Ablauf."
      },
      {
        "label": "Abwarten, bis ein passendes Setup mit tragbarem Risiko sichtbar ist.",
        "explanation": "Richtig. Fehlende Klarheit muss nicht durch eine Order ersetzt werden."
      }
    ],
    "correct": 2
  }
];

export const chapterThirteenLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-13-${number}`;
  return {
    id: `price-action-trends.chapter-13.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 13 · ${d.section}`,
    sourceAnchors: [`Kapitel 13 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 13 · Trendlinien',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Linie und Reaktion beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
