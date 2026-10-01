import type { ChapterFifteenScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterFifteenScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Kanal ist mehr als eine schräg gezeichnete Linie",
    "summary": "Kanalgrenzen beschreiben eine wiederholte Ordnung.",
    "section": "Grundlagen",
    "scenario": "c15-01",
    "paragraphs": [
      "Ein Kanal beschreibt einen Verlauf, der überwiegend zwischen zwei Grenzen handelt. Ein Trendkanal ist geneigt, eine Range eher waagerecht. Die Grenzen können parallel sein, zusammenlaufen oder auseinanderlaufen. Entscheidend ist, ob sie eine erkennbare Ordnung der Bars beschreiben.",
      "Ein Kanal enthält nicht zwingend jedes Extrem pixelgenau. Eine begründete Näherung kann die wiederholte Struktur besser sichtbar machen als eine Linie über einen einzelnen Ausreißer. Der Ausreißer bleibt trotzdem Teil der Kurse und darf beim Risiko nicht verschwinden.",
      "Du kannst auf fast jedem Chart irgendeinen Kanal finden. Das macht nicht jede Zeichnung handelbar. Benenne Zeitebene, Abschnitt und Anker. Danach prüfst du die aktuelle Reaktion und den verfügbaren Zielraum, statt aus der bloßen Existenz zweier Linien eine Order abzuleiten."
    ],
    "takeaways": [
      "Kanalgrenzen beschreiben eine wiederholte Ordnung.",
      "Range und Trendkanal unterscheiden.",
      "Eine mögliche Zeichnung ist noch kein Setup."
    ],
    "callout": "Eine mögliche Zeichnung ist noch kein Setup.",
    "prompt": "Was macht eine Kanalzeichnung für eine Entscheidung brauchbar?",
    "answers": [
      {
        "label": "Nachvollziehbare Anker, aktuelle Reaktion und ein passender Plan.",
        "explanation": "Richtig. Die Zeichnung muss eine konkrete Struktur erklären."
      },
      {
        "label": "Dass irgendwo zwei Linien in den Chart passen.",
        "explanation": "Fast überall lassen sich Linien finden; das reicht nicht."
      },
      {
        "label": "Dass jeder einzelne Tail garantiert eingeschlossen ist.",
        "explanation": "Eine begründete Näherung kann sinnvoll sein, ohne jedes Extrem einzuschließen."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Dreiecke als besondere Kanäle lesen",
    "summary": "Dreiecke enthalten Trend- und Rangeelemente.",
    "section": "Grundlagen · Dreiecke",
    "scenario": "c15-02",
    "paragraphs": [
      "Auch ein Dreieck liegt zwischen zwei Grenzen. Im zusammenlaufenden Dreieck sinken die Hochs und steigen die Tiefs: Die obere Bären-Trendlinie und die untere Bullen-Trendlinie begrenzen den kleiner werdenden Raum. Beide Seiten können lokal Trendmerkmale zeigen.",
      "Im sich ausweitenden Dreieck steigen dagegen die Hochs und fallen die Tiefs. Die äußeren Linien beschreiben dann Schubextreme, also zwei Kanalgrenzen. Ein steigendes Dreieck hat oben eher waagerechten Widerstand und unten steigende Tiefs; beim fallenden Dreieck ist es umgekehrt.",
      "Ein geneigter Keil ist ebenfalls eine zusammenlaufende Kanalform. Die Form hilft, die Struktur und mögliche Ausbrüche zu beobachten. Sie sagt nicht automatisch die spätere Richtung voraus. Gerade wenn beide Seiten aktiv sind, bleibt ein klarer Ausbruch mit Anschluss wichtiger als der Name."
    ],
    "takeaways": [
      "Dreiecke enthalten Trend- und Rangeelemente.",
      "Zusammenlaufende und ausweitende Grenzen unterscheiden.",
      "Ausbruchsrichtung nicht aus dem Namen garantieren."
    ],
    "callout": "Ausbruchsrichtung nicht aus dem Namen garantieren.",
    "prompt": "Welche Grenzen hat ein zusammenlaufendes Dreieck?",
    "answers": [
      {
        "label": "Zwei zwingend parallele Grenzen.",
        "explanation": "Zusammenlaufen bedeutet gerade unterschiedliche Steigungen."
      },
      {
        "label": "Sinkende Hochs oben und steigende Tiefs unten.",
        "explanation": "Richtig. Zwei Trendseiten begrenzen den enger werdenden Raum."
      },
      {
        "label": "Steigende Hochs und fallende Tiefs.",
        "explanation": "Das beschreibt eine sich ausweitende Struktur."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Ein Korrekturkanal steckt oft im größeren Trend",
    "summary": "Lokale Richtung und größerer Kontext sind verschieden.",
    "section": "Kontext",
    "scenario": "c15-03",
    "paragraphs": [
      "Eine zweistufige ABC-Korrektur im Bullenverlauf ist lokal ein kleiner Bärenkanal: ein Abwärtsabschnitt, ein Rücklauf und ein weiterer Abwärtsabschnitt. Im Bärenverlauf kann die Korrektur entsprechend einen kleinen Bullenkanal bilden.",
      "Ein lokaler Bullenkanal kann deshalb in einem großen Bullenverlauf, in einer Range, innerhalb eines Bärentrends oder am Beginn einer Umkehr auftreten. Die gleiche Schrägform bekommt je nach Vorgeschichte eine andere Bedeutung.",
      "Halte lokale Richtung und übergeordneten Kontext getrennt fest. Ein Anstieg innerhalb eines noch kräftigen Bärenverlaufs ist zunächst eine mögliche Bärenflagge. Eine starke Käuferreaktion nach einer späten Verkäuferausdehnung kann dagegen einen Übergang vorbereiten. Die neuen Bars müssen zeigen, welche Idee trägt."
    ],
    "takeaways": [
      "Lokale Richtung und größerer Kontext sind verschieden.",
      "ABC-Korrektur kann ein kleiner Gegenkanal sein.",
      "Dieselbe Form braucht je nach Umfeld einen anderen Plan."
    ],
    "callout": "Dieselbe Form braucht je nach Umfeld einen anderen Plan.",
    "prompt": "Ein kleiner Bullenkanal entsteht nach einem starken Verkäuferstoß. Was ist zunächst offen?",
    "answers": [
      {
        "label": "Jeder Bullenkanal bedeutet automatisch einen neuen großen Bullenmarkt.",
        "explanation": "Die lokale Richtung allein reicht nicht."
      },
      {
        "label": "Ein Korrekturkanal kann nie zum größeren Trend gehören.",
        "explanation": "Kleine Gegenkanäle sind häufig Teil von Korrekturen."
      },
      {
        "label": "Bärenflagge oder Beginn einer Käuferumkehr.",
        "explanation": "Richtig. Der Kontext und neue Bars müssen die Alternativen trennen."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Bullenkanal in der unteren oder oberen Rangehälfte",
    "summary": "Die Lage im größeren Balancebereich zählt.",
    "section": "Kontext · Range",
    "scenario": "c15-04",
    "paragraphs": [
      "In einer größeren Range kann sich zwischen den waagerechten Grenzen ein kleiner Bullenkanal entwickeln. In der unteren Hälfte ist noch mehr Platz zum oberen Rangebereich vorhanden. Weiter oben nähert sich derselbe Anstieg bereits dem Widerstand.",
      "Ein Long nahe dem oberen Rangeende hat daher einen anderen Zielraum als einer nahe dem unteren Bereich. Ein schöner lokaler Trend kann die größere Grenze nicht aus der Planung entfernen. Prüfe, ob die verbleibende Strecke zum möglichen Ziel das Risiko rechtfertigt.",
      "Die Range kann erfolgreich ausbrechen, aber dafür braucht es neue Stärke und Anschluss. Solange diese fehlen, ist ein spätes Hinterherkaufen eine andere Idee als der frühere Einstieg im unteren Bereich. Halte beides in deinem Journal getrennt, auch wenn die kleine Kanalrichtung gleich bleibt."
    ],
    "takeaways": [
      "Die Lage im größeren Balancebereich zählt.",
      "Nahe Widerstand bleibt weniger Zielraum.",
      "Später Einstieg braucht eine eigene Begründung."
    ],
    "callout": "Später Einstieg braucht eine eigene Begründung.",
    "prompt": "Was verändert sich beim gleichen Bullenkanal nahe dem oberen Rangeende?",
    "answers": [
      {
        "label": "Der Platz bis zum möglichen Widerstand wird kleiner.",
        "explanation": "Richtig. Der übergeordnete Ort verändert das Verhältnis von Zielraum zu Risiko."
      },
      {
        "label": "Die Rangegrenze ist automatisch gelöscht.",
        "explanation": "Erst ein bestätigter Ausbruch würde den Kontext verändern."
      },
      {
        "label": "Das Risiko entfällt, weil die lokale Richtung aufwärts ist.",
        "explanation": "Auch ein lokaler Trend kann scheitern."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Enge Kanäle zeigen mehr einseitige Kontrolle",
    "summary": "Enge Rückläufe und wenig Überlappung zeigen Stärke.",
    "section": "Trendstärke",
    "scenario": "c15-05",
    "paragraphs": [
      "Ein steiler Kanal mit kleinen Rückläufen zeigt stärkeren gerichteten Druck als ein flacher Verlauf mit breiten Ausschlägen. Nicht die optische Steilheit allein zählt: Chartskalierung kann sie verändern. Vergleiche vor allem Überlappung, Rücklaufgröße, Körper und Anschluss.",
      "Ein sehr enger Kanal kann auf einer größeren Zeitebene wie ein einziger kräftiger Spike aussehen. Eine breitere Kanalphase kann später folgen. Fehlen Rückläufe fast vollständig oder bleiben nur wenige winzige Unterbrechungen, nähert sich der Verlauf einem Mikrokanal.",
      "Die Einordnung hilft bei Gegenversuchen. In einem engen starken Bullenkanal ist ein kleiner Verkäuferbar oft nur der Beginn eines Rücklaufs. Ein Anfänger braucht dort keinen Short, nur weil eine Gegenkerze auftaucht. Warte auf ein passendes Trendsetup oder auf einen belegten Kontrollwechsel."
    ],
    "takeaways": [
      "Enge Rückläufe und wenig Überlappung zeigen Stärke.",
      "Ein enger Kanal kann auf größerer Ebene ein Spike sein.",
      "Kleine Gegenbars allein bestätigen keine Umkehr."
    ],
    "callout": "Kleine Gegenbars allein bestätigen keine Umkehr.",
    "prompt": "Welcher Verlauf spricht eher für einen starken Bullenkanal?",
    "answers": [
      {
        "label": "Nur ein steiler Bildschirmwinkel nach geänderter Skalierung.",
        "explanation": "Die optische Darstellung allein ist kein Stärkevergleich."
      },
      {
        "label": "Kleine Rückläufe mit kräftigem Käuferanschluss.",
        "explanation": "Richtig. Die Käufer geben wenig Raum ab."
      },
      {
        "label": "Breite überlappende Schwünge in beide Richtungen.",
        "explanation": "Das zeigt mehr zweiseitigen Handel."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Breite Kanäle verhalten sich stärker wie eine Range",
    "summary": "Breite Schwünge bedeuten mehr zweiseitigen Handel.",
    "section": "Trendstärke",
    "scenario": "c15-06",
    "paragraphs": [
      "Auch ein geneigter Kanal enthält Handel in beide Richtungen. Werden die Ausschläge größer, Rückläufe länger und Bars stärker überlappend, ähnelt er einer schrägen Range. Die Trendseite ist noch im Vorteil, aber die Gegenseite bekommt mehr Platz.",
      "Erfahrene Trader können dann beide Richtungen betrachten. Das heißt nicht, dass jeder Anfänger beide Seiten handeln sollte. Gegenpositionen benötigen genug Raum zwischen den Grenzen und einen eigenen Ausstiegsplan; ein kaum sichtbarer Rücklauf reicht dafür oft nicht.",
      "Eine Mitte, zu der der Kurs wiederholt zurückkehrt, beschreibt die Balance innerhalb des Kanals. Dieser Magneteffekt ist eine Beobachtung, kein Zwang. Wenn ein Ausbruch kräftigen Anschluss bekommt, kann der Markt die alte Balance verlassen."
    ],
    "takeaways": [
      "Breite Schwünge bedeuten mehr zweiseitigen Handel.",
      "Gegentrades benötigen zusätzlichen Raum und Erfahrung.",
      "Die Kanalmitte ist eine Referenz, keine Rückkehrpflicht."
    ],
    "callout": "Die Kanalmitte ist eine Referenz, keine Rückkehrpflicht.",
    "prompt": "Was unterscheidet einen breiten Kanal vom engen starken Verlauf?",
    "answers": [
      {
        "label": "Ein garantiert profitabler Trade in jeder Richtung.",
        "explanation": "Zweiseitiger Handel garantiert keine guten Einstiege."
      },
      {
        "label": "Dass er keine lokale Trendrichtung mehr haben kann.",
        "explanation": "Er kann weiterhin geneigt sein."
      },
      {
        "label": "Mehr Überlappung und größere Gegenabschnitte.",
        "explanation": "Richtig. Das Verhalten ähnelt stärker einer Range."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Von zwei Schüben zu einem erkennbaren Kanal",
    "summary": "Ein gescheiterter Gegenversuch kann zum zweiten Rücklauf werden.",
    "section": "Entstehung",
    "scenario": "c15-07",
    "paragraphs": [
      "Nach zwei Aufwärtsschüben kann zunächst eine größere Umkehr beginnen. Endet der neue Rücklauf jedoch ähnlich wie der vorherige und dreht wieder aufwärts, gewinnt die Idee eines Bullenkanals an Gewicht. Die gescheiterte Umkehr wird zum zweiten Rücklauf.",
      "Jetzt lassen sich die beiden bekannten Rücklauftiefs verbinden. Eine parallele obere Grenze kann am ersten passenden Schubhoch liegen. Vor dem zweiten Rücklauf waren diese konkreten Anker noch nicht vollständig bekannt; eine spätere Zeichnung darf keine frühere Order begründen.",
      "Der nächste Anstieg führt häufig zu einem dritten Schub. Das erklärt, weshalb viele erkennbare Kanäle mehrere Schübe enthalten, ohne dass drei eine magische Zahl wäre. Beobachte am dritten Bereich die Reaktion und die Trendstärke, statt die Umkehr allein zu zählen."
    ],
    "takeaways": [
      "Ein gescheiterter Gegenversuch kann zum zweiten Rücklauf werden.",
      "Erst bekannte Anker ergeben die konkrete Zeichnung.",
      "Dritter Schub ist Beobachtungsbereich, keine Umkehrgarantie."
    ],
    "callout": "Dritter Schub ist Beobachtungsbereich, keine Umkehrgarantie.",
    "prompt": "Wann lässt sich die Verbindung der ersten beiden Rücklauftiefs kennen?",
    "answers": [
      {
        "label": "Nachdem der zweite Rücklauf erkennbar entstanden ist.",
        "explanation": "Richtig. Vorher fehlt der zweite konkrete Anker."
      },
      {
        "label": "Schon vor dem ersten Schub.",
        "explanation": "Die späteren Tiefs sind dann unbekannt."
      },
      {
        "label": "Nur nach exakt drei gleich großen Anstiegen.",
        "explanation": "Die Tiefverbindung braucht zwei bekannte Bezugspunkte, keine perfekte Gleichheit."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Warum der Kurs zum Kanalrand beschleunigen kann",
    "summary": "Vorübergehend weniger Gegenorders können die Bewegung beschleunigen.",
    "section": "Vakuumeffekt",
    "scenario": "c15-08",
    "paragraphs": [
      "Eine schnelle Bewegung zum erwarteten Kanalrand kann durch vorübergehend zurückhaltende Gegenorders begünstigt werden. Erwarten Verkäufer noch höhere Preise an der oberen Grenze, können sie mit Verkäufen warten. Die vorhandenen Kauforders treffen dann auf weniger Angebot.",
      "Am oberen Bereich können Gewinnmitnahmen von Longpositionen und neue Shorts gemeinsam Verkäuferdruck erzeugen. Unten ist die Spiegelung möglich: Shortgewinnmitnahmen und neue Longs sind Kauforders. Eine starke Bewegung zum Rand ist deshalb nicht automatisch ein erfolgreicher Ausbruch.",
      "Der Vakuumeffekt ist eine mögliche Erklärung der Kursfolge, keine Kenntnis einzelner Teilnehmer. Prüfe die Bars am Rand und danach. Fortgesetzter Anschluss kann echten Ausbruch zeigen; schnelle Rückkehr kann den Randtest bestätigen. Die auffällige letzte Kerze allein entscheidet nicht."
    ],
    "takeaways": [
      "Vorübergehend weniger Gegenorders können die Bewegung beschleunigen.",
      "Starker Randtest und erfolgreicher Ausbruch sind verschieden.",
      "Teilnehmermotive bleiben eine Deutung."
    ],
    "callout": "Teilnehmermotive bleiben eine Deutung.",
    "prompt": "Ein großer Käuferbar erreicht die obere Grenze. Was prüfst du als Nächstes?",
    "answers": [
      {
        "label": "Eine Shortorder muss ohne Signal eröffnet werden.",
        "explanation": "Auch ein Randtest braucht einen passenden Plan."
      },
      {
        "label": "Anschluss oder Rückkehr nach dem Randtest.",
        "explanation": "Richtig. Die starke Annäherung allein beweist keinen Ausbruch."
      },
      {
        "label": "Alle Verkäufer haben endgültig aufgegeben.",
        "explanation": "Das ist aus einer Kerze nicht belegbar."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Schwache Verkaufssignale können Käufer anlocken",
    "summary": "Schwaches Gegenmuster kann ein Trendpullback sein.",
    "section": "Mit dem Kanal",
    "scenario": "c15-09",
    "paragraphs": [
      "In einem kontrollierten Bullenkanal kann ein kleiner Low-1- oder Low-2-Verkaufsversuch nur eine kurze Rücklaufphase beginnen. Käufer rechnen möglicherweise damit, dass dieser Versuch scheitert und der nächste Anstieg folgt. Sie suchen deshalb günstigere Preise im Rücklauf.",
      "Eine Stoporder unter einem schwachen Verkaufssignal kann genau dort ausgelöst werden, wo andere Marktteilnehmer kaufen wollen. Ein Signalname genügt nicht: Ortsbezug, Trendstärke und vorheriger Käuferanschluss müssen mitgelesen werden.",
      "Limitkäufer gehen bereits vor der bestätigten Umkehr ein anderes Risiko ein als Käufer mit einer späteren Stopauslösung. Für den Einstieg in die Methode ist Abwarten oft klarer. Die Lektion erklärt das Verhalten, ohne jeden schwachen Verkaufsbar zu einer automatischen Longorder zu machen."
    ],
    "takeaways": [
      "Schwaches Gegenmuster kann ein Trendpullback sein.",
      "Auslösung am falschen Ort kann gegen die aktuelle Kontrolle laufen.",
      "Limit- und Bestätigungseinstieg haben unterschiedliche Risiken."
    ],
    "callout": "Limit- und Bestätigungseinstieg haben unterschiedliche Risiken.",
    "prompt": "Warum reicht ein Low-2-Name im starken Bullenkanal nicht für einen Short?",
    "answers": [
      {
        "label": "Weil Low 2 nie existiert.",
        "explanation": "Das Muster kann sichtbar sein, aber der Kontext kann gegen den Short sprechen."
      },
      {
        "label": "Weil jeder Limitkäufer sicher gewinnt.",
        "explanation": "Auch ein antizipierter Einstieg kann scheitern."
      },
      {
        "label": "Die Struktur kann nur einen Käuferpullback beschreiben.",
        "explanation": "Richtig. Kontext und Trendkontrolle müssen dazugehören."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Ein klarer Anfängerplan: mit dem Trend oder abwarten",
    "summary": "Zunächst in Richtung der aktuellen Kontrolle auswählen.",
    "section": "Einstiegsqualität",
    "scenario": "c15-10",
    "paragraphs": [
      "Kanäle erzeugen viele Gegenbars und mögliche Wendepunkte. Das ist für Anfänger verwirrend und kann zu einer Reihe kleiner Verlusttrades führen. Beschränke die Auswahl zunächst auf die aktuelle Trendrichtung und besonders klare Setups.",
      "In einem Bullenkanal kann ein High-2-Rücklauf mit gutem Käufer-Signalbar am Durchschnitt eine Trendidee vorbereiten, sofern genug Raum zur oberen Grenze bleibt. Im Bärenkanal gilt die entsprechende Spiegelung. Solche Kombinationen treten nicht ständig auf.",
      "Es ist in Ordnung, einen ganzen Verlauf auszulassen, wenn kein passender Ort mit tragbarem Risiko sichtbar wird. Ein Kanal muss nicht vollständig ausgenutzt werden. Die Übung soll nachvollziehbare Auswahl lehren, nicht die maximale Zahl von Orders."
    ],
    "takeaways": [
      "Zunächst in Richtung der aktuellen Kontrolle auswählen.",
      "Signal, Ort und Zielraum gemeinsam prüfen.",
      "Ein ausgelassener Kanal kann eine gute Entscheidung sein."
    ],
    "callout": "Ein ausgelassener Kanal kann eine gute Entscheidung sein.",
    "prompt": "Ein sauberer Long liegt direkt unter der oberen Grenze. Was prüfst du?",
    "answers": [
      {
        "label": "Ob der verbleibende Zielraum das Risiko noch rechtfertigt.",
        "explanation": "Richtig. Ein Signalbar allein macht den Ort nicht passend."
      },
      {
        "label": "Die obere Grenze spielt bei High 2 keine Rolle.",
        "explanation": "Der mögliche Zielbereich bleibt wichtig."
      },
      {
        "label": "Ich muss handeln, damit der Trend nicht verpasst wird.",
        "explanation": "Fehlender Raum ist ein Grund abzuwarten."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Ein Kontrollwechsel braucht mehr als ein kleines tieferes Hoch",
    "summary": "Kleines tieferes Hoch nicht mit einem neuen Trend verwechseln.",
    "section": "Umkehr",
    "scenario": "c15-11",
    "paragraphs": [
      "Ein kleines tieferes Hoch in einem Bullenkanal ist noch kein belegter Bärentrend. Der Markt kann nach diesem Rücklauf wieder steigen. Für einen Gegenplan ist ein kräftiger Verkäuferstoß durch die untere Kanalgrenze mit Anschluss erheblich aussagekräftiger.",
      "Ein späterer Rücklauf zu einem tieferen Hoch mit gutem Verkäufer-Signalbar kann die neue Richtung stützen. Liegt der Kurs zusätzlich unter dem Durchschnitt, unterstützt das die Einordnung, ohne sie allein zu beweisen. Always-in short bedeutet hier die aktuell überzeugendere Bärenkontrolle, keine Pflichtposition.",
      "Warte auf die tatsächliche Veränderung. Die Überzeugung, ein schwach aussehender Kanal sei längst überfällig für eine Umkehr, ist keine Auslösung. Ein Trend kann länger bestehen, als wiederholte Gegenversuche mit deinem Geldrisiko vereinbar sind."
    ],
    "takeaways": [
      "Kleines tieferes Hoch nicht mit einem neuen Trend verwechseln.",
      "Gegenstoß, Anschluss und Rücklauftest prüfen.",
      "Überfälligkeit ist kein Signal."
    ],
    "callout": "Überfälligkeit ist kein Signal.",
    "prompt": "Welche Folge stützt einen echten Wechsel zur Bärenkontrolle besser?",
    "answers": [
      {
        "label": "Meine Geduld ist am Ende.",
        "explanation": "Deine Geduld ist keine Information über den Markt."
      },
      {
        "label": "Starker Gegenbruch, Anschluss und ein scheiternder Rücklauf zu tieferem Hoch.",
        "explanation": "Richtig. Mehrere neue Beobachtungen stimmen überein."
      },
      {
        "label": "Ein einzelner kleiner Verkäuferbar im Kanal.",
        "explanation": "Er kann nur einen normalen Rücklauf beginnen."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Verkäuferdruck kann sich innerhalb eines Bullenkanals aufbauen",
    "summary": "Mehr Verkäuferkörper und obere Tails mitlesen.",
    "section": "Trendveränderung",
    "scenario": "c15-12",
    "paragraphs": [
      "Ein steigender Verlauf kann zunehmend größere Verkäuferkörper, obere Tails und Bars mit Tiefs unter dem vorherigen Tief zeigen. Der Kurs steigt noch, aber die Gegenseite hinterlässt mehr Spuren. Diese Veränderung ist wichtiger als der bloße Fortbestand einer steigenden Linie.",
      "Mit mehr Überlappung und tieferen Rückläufen wird ein stärker zweiseitiger Verlauf plausibler. Nahe Widerstand oder einem Projektionsbereich kann das die Auswahl verändern: Ein früher Long hatte vielleicht guten Raum, ein späterer jetzt deutlich weniger.",
      "Die Merkmale bestätigen keine institutionellen Einzelmotive und liefern noch keinen sicheren Short. Prüfe, ob der neue Verkäuferdruck auch einen echten Gegenbruch und Anschluss erzeugt. Bis dahin ist eine schwächere Fortsetzung, eine Balancephase oder eine spätere Umkehr möglich."
    ],
    "takeaways": [
      "Mehr Verkäuferkörper und obere Tails mitlesen.",
      "Die Qualität des Trends kann sich vor dem Bruch ändern.",
      "Druck und bestätigte Umkehr getrennt halten."
    ],
    "callout": "Druck und bestätigte Umkehr getrennt halten.",
    "prompt": "Was zeigen zunehmende Verkäuferkörper im noch steigenden Kanal?",
    "answers": [
      {
        "label": "Eine garantierte sofortige Umkehr.",
        "explanation": "Der tatsächliche Gegenbruch muss erst entstehen."
      },
      {
        "label": "Dass alle bisherigen Käufer verschwunden sind.",
        "explanation": "Der Chart verrät keine vollständige Teilnehmerliste."
      },
      {
        "label": "Mehr sichtbaren Verkäuferdruck innerhalb des Verlaufs.",
        "explanation": "Richtig. Die aktuelle Trendqualität verändert sich."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Scaling verändert den Durchschnitt, aber auch das Gesamtrisiko",
    "summary": "Durchschnittspreis und Teilresultate unterscheiden.",
    "section": "Positionslogik",
    "scenario": "c15-13",
    "paragraphs": [
      "Marktteilnehmer können eine Position stufenweise aufbauen. Zwei gleich große Longs bei relativen Preisen 50 und 46 haben einen durchschnittlichen Einstieg von 48. Bei einem Ausstieg auf 50 ist der erste Teil vor Kosten ausgeglichen und der zweite im Gewinn.",
      "Das ist keine Risikobeseitigung. Fällt der Markt weiter, verlieren beide Teile gemeinsam. Für dieselbe Stopdistanz kann eine größere Gesamtmenge mehr Geld verlieren. Ein sinnvoller Plan braucht vorab Grenzen für Anzahl, Menge, gemeinsamen Stop und zulässigen Gesamtverlust.",
      "Auch Shorts können höher ergänzt und bei einer Rückkehr zum ersten Einstieg geschlossen werden. Die Erklärung macht verständlich, warum an bestimmten Rückkehrbereichen Orders auftreten können. Sie ist keine Anleitung, einen ungeplanten Verlust durch immer weitere Ergänzungen zu retten."
    ],
    "takeaways": [
      "Durchschnittspreis und Teilresultate unterscheiden.",
      "Mehr Menge kann mehr Gesamtverlust bedeuten.",
      "Ergänzungen benötigen einen vorab begrenzten Plan."
    ],
    "callout": "Ergänzungen benötigen einen vorab begrenzten Plan.",
    "prompt": "Zwei gleich große Longs bei 50 und 46 werden bei 50 geschlossen. Was gilt vor Kosten?",
    "answers": [
      {
        "label": "Der erste ist ausgeglichen, der zweite gewinnt vier Einheiten.",
        "explanation": "Richtig. Der Durchschnitt liegt bei 48; das frühere Risiko war trotzdem real."
      },
      {
        "label": "Beide waren während des Rücklaufs risikofrei.",
        "explanation": "Weitere Verluste wären möglich gewesen."
      },
      {
        "label": "Der Durchschnitt ist weiterhin 50.",
        "explanation": "Bei gleicher Menge zählt das Mittel beider Einstiege."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Zeit bis zum Handelsschluss gehört zum Positionsplan",
    "summary": "Verbleibende Zeit und nötigen Rücklauf gemeinsam prüfen.",
    "section": "Positionslogik",
    "scenario": "c15-14",
    "paragraphs": [
      "Wer gegen einen weiter steigenden Kanal mehrere Shorts aufbaut, braucht einen ausreichenden Rücklauf, um einen tiefer liegenden Durchschnitt wieder zu erreichen. Spät am Tag kann dafür deutlich weniger Zeit bleiben. Das Risiko verschwindet nicht mit dem nahenden Handelsschluss.",
      "Ein langer Kanal kann bis zum Ende weiterlaufen, ohne den gewünschten Ausstiegsbereich noch einmal zu testen. Gerade spätere Gegenpositionen dürfen daher nicht nur auf eine erhoffte Rückkehr gestützt werden. Die verbleibende Zeit ist Teil des Plans.",
      "Für Anfänger bleibt die klare Auswahl in Trendrichtung oder Abwarten sinnvoller als der Aufbau einer großen Gegenposition. Wenn eine Position vorgesehen ist, müssen Ausstieg, Schlusszeit und Geldrisiko vorher feststehen. Ein Zeitfenster ersetzt keine Verlustgrenze."
    ],
    "takeaways": [
      "Verbleibende Zeit und nötigen Rücklauf gemeinsam prüfen.",
      "Eine Rückkehr vor Handelsschluss ist nicht garantiert.",
      "Große Gegenpositionen sind kein Anfängerplan."
    ],
    "callout": "Große Gegenpositionen sind kein Anfängerplan.",
    "prompt": "Was ist an einer späten Gegenposition mit weit entferntem Durchschnitt problematisch?",
    "answers": [
      {
        "label": "Das Geldrisiko gilt nur morgens.",
        "explanation": "Es gilt während jeder offenen Position."
      },
      {
        "label": "Es kann zu wenig Zeit für den nötigen Rücklauf bleiben.",
        "explanation": "Richtig. Der Handelsschluss macht die Position nicht automatisch ausgeglichen."
      },
      {
        "label": "Der Schlusskurs muss den Durchschnitt treffen.",
        "explanation": "Es gibt keine solche Verpflichtung."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Kanäle können Widerstände länger überwinden als erwartet",
    "summary": "Erster Widerstand beendet den Kanal nicht zwingend.",
    "section": "Trenddauer",
    "scenario": "c15-15",
    "paragraphs": [
      "Ein Trendkanal kann über mehrere sichtbare Widerstände hinauslaufen. Neue Käufer und das Schließen von Shorts können weiter Kaufdruck liefern. Ein erster plausibler Zielbereich ist deshalb keine Zusage, dass dort das endgültige Hoch entstehen muss.",
      "Ein späte starke Überschreitung kann anschließend in eine tiefere Korrektur übergehen. Sie kann aber auch die Beschleunigung eines noch stärkeren Trends sein. Aussagen über die Absichten einzelner Programme oder über die letzte Gruppe panischer Käufer bleiben ungewiss.",
      "Für die Entscheidung zählt die sichtbare Reaktion am Bereich und danach. Wiederholte Gegenversuche nur deshalb, weil der Kurs weit gestiegen ist, können teuer werden. Halte die aktuelle Kontrolle fest und verlange neue Belege, bevor du die Richtung wechselst."
    ],
    "takeaways": [
      "Erster Widerstand beendet den Kanal nicht zwingend.",
      "Späte Ausdehnung und Beschleunigung bleiben Alternativen.",
      "Nicht aus Entfernung allein auf Umkehr schließen."
    ],
    "callout": "Nicht aus Entfernung allein auf Umkehr schließen.",
    "prompt": "Der Kanal steigt über zwei erwartete Ziele hinaus. Was ist daraus sicher ableitbar?",
    "answers": [
      {
        "label": "Die dritte Zielmarke muss garantiert das Hoch sein.",
        "explanation": "Die Zahl überschrittener Ziele liefert keine Garantie."
      },
      {
        "label": "Die Programme aller Institutionen sind jetzt bekannt.",
        "explanation": "Ihre Motive lassen sich aus dem Preis nicht zuverlässig rekonstruieren."
      },
      {
        "label": "Die bisherigen Ziele haben den Verlauf noch nicht beendet.",
        "explanation": "Richtig. Neue Reaktion muss geprüft werden."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Nach einer Rückkehr ist die andere Kanalseite eine Referenz",
    "summary": "Fehlausbruch kann den Gegenrand ins Blickfeld rücken.",
    "section": "Ausbrüche",
    "scenario": "c15-16",
    "paragraphs": [
      "Ein Ausbruch, der rasch in den Kanal zurückkehrt, hat zunächst seine Fortsetzung nicht bewiesen. Danach kann die gegenüberliegende Kanalseite zum nächsten Beobachtungsbereich werden. Bei einer oberen Fehlüberschreitung ist das die untere Grenze, bei einer unteren die obere.",
      "Dort kann der Kurs drehen, kurz darüber hinauslaufen oder einen neuen erfolgreichen Ausbruch beginnen. Die Rückkehr in den Kanal ist also ein wichtiger Übergang, aber kein zugesagter vollständiger Weg von Rand zu Rand.",
      "Vergleiche den verfügbaren Abstand mit deinem Risiko und möglichen Kosten. In einem extrem engen Kanal kann das gesamte erwartete Ziel schon am nächsten Bar erreicht sein, ohne genug Raum für einen brauchbaren Trade zu bieten. Mustererkennung und Handelbarkeit sind verschiedene Fragen."
    ],
    "takeaways": [
      "Fehlausbruch kann den Gegenrand ins Blickfeld rücken.",
      "Gegenrand ist ein Szenario, kein Pflichtziel.",
      "Zielraum muss zum Risiko und den Kosten passen."
    ],
    "callout": "Zielraum muss zum Risiko und den Kosten passen.",
    "prompt": "Eine enge Fehlüberschreitung erreicht sofort den Gegenrand. Was kann trotzdem fehlen?",
    "answers": [
      {
        "label": "Genug Raum für einen sinnvollen Trade nach Kosten und Risiko.",
        "explanation": "Richtig. Ein passendes Muster ist nicht automatisch handelbar."
      },
      {
        "label": "Die sichtbare Rückkehr in den Kanal.",
        "explanation": "Diese kann bereits stattgefunden haben."
      },
      {
        "label": "Eine Möglichkeit, die Bewegung zu beschreiben.",
        "explanation": "Beschreibung und profitable Umsetzung sind verschieden."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Ein erfolgreicher Ausbruch kann eine Kanalhöhe projizieren",
    "summary": "Kanalhöhe als Abstand zwischen den Grenzen messen.",
    "section": "Zielprojektion",
    "scenario": "c15-17",
    "paragraphs": [
      "Bei einem bestätigten Ausbruch kann die Höhe des Kanals als grobe Projektionsstrecke dienen. Liegt eine waagerechte obere Grenze bei 60 und die untere bei 45, beträgt die Höhe 15. Eine obere Projektion liegt dann bei 75, eine untere bei 30.",
      "Die Projektion beschreibt einen möglichen Bereich für Teilgewinn, Pause oder neue Reaktion. Sie ist weder ein garantierter Mindestgewinn noch ein Ersatz für das Ausstiegsmanagement. Ein Trend kann vorher scheitern oder weit über das Ziel hinauslaufen.",
      "Auch Doppelhochs und Dreiecke lassen sich als begrenzte Strukturen betrachten. Nach einer oberen Rückkehr prüfst du zunächst die gegenüberliegende Seite; nach einem echten Anschlussausbruch eine weitere Projektionsstrecke. Verwechsle diese beiden Stadien nicht."
    ],
    "takeaways": [
      "Kanalhöhe als Abstand zwischen den Grenzen messen.",
      "Projektion ist ein möglicher Bereich, kein Mindestgewinn.",
      "Rückkehrziel und Anschlussprojektion unterscheiden."
    ],
    "callout": "Rückkehrziel und Anschlussprojektion unterscheiden.",
    "prompt": "Eine Range liegt zwischen 45 und 60. Wo liegt die einfache obere Projektion?",
    "answers": [
      {
        "label": "Immer beim Schluss des nächsten Bars.",
        "explanation": "Die Projektion ist eine Preisreferenz, keine Zeitvorgabe."
      },
      {
        "label": "Bei 75.",
        "explanation": "Richtig. Die Höhe 15 wird zur oberen Grenze addiert."
      },
      {
        "label": "Bei 105.",
        "explanation": "Das wäre nicht eine einfache zusätzliche Kanalhöhe."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Bei schrägen Kanälen senkrecht am selben Bar messen",
    "summary": "Beide Grenzen am gleichen Bar vergleichen.",
    "section": "Zielprojektion",
    "scenario": "c15-18",
    "paragraphs": [
      "Bei einem geneigten Kanal haben die Grenzen an jedem Bar andere Werte. Für die Höhe wählst du einen konkreten Bar, etwa am Ausbruch, und misst den Preisabstand zwischen oberer und unterer Grenze genau dort. Du vergleichst nicht zwei Extreme an unterschiedlichen Zeitpunkten.",
      "Im Bullenkanal kann oben an diesem Bar 70 und unten 55 liegen. Die lokale Höhe beträgt dann 15. Für einen unteren Ausbruch wird diese Strecke unter den unteren Grenzwert projiziert; daraus ergibt sich hier ein möglicher Bereich um 40.",
      "Zusammenlaufende Grenzen verändern die Breite im Zeitverlauf. Notiere deshalb den verwendeten Zeitpunkt und die Grenzwerte. Verschiedene nachvollziehbare Konstruktionen können etwas andere Ziele ergeben. Behandle sie als Bereiche und ändere sie nicht heimlich, nachdem das Ergebnis bekannt ist."
    ],
    "takeaways": [
      "Beide Grenzen am gleichen Bar vergleichen.",
      "Bei Keilen verändert sich die Breite.",
      "Zeitpunkt und Konstruktion dokumentieren."
    ],
    "callout": "Zeitpunkt und Konstruktion dokumentieren.",
    "prompt": "Warum misst du die Breite am selben Bar?",
    "answers": [
      {
        "label": "Weil jede schräge Linie eigentlich waagerecht ist.",
        "explanation": "Ihre Preise verändern sich gerade im Zeitverlauf."
      },
      {
        "label": "Damit das Ziel garantiert exakt getroffen wird.",
        "explanation": "Auch eine korrekte Konstruktion garantiert keinen Treffer."
      },
      {
        "label": "Damit der Abstand der schrägen Grenzen für denselben Zeitpunkt gilt.",
        "explanation": "Richtig. Sonst vermischst du verschiedene Positionen im Kanal."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Ohne vorangehenden Climax kann ein Bruch erst seitwärts gehen",
    "summary": "Bruch kann zunächst Balance erzeugen.",
    "section": "Ausbrüche",
    "scenario": "c15-19",
    "paragraphs": [
      "Ein Bruch der unteren Seite eines Bullenkanals muss nicht sofort einen heftigen Bärentrend erzeugen. Fehlt vorher eine starke obere Übertreibung mit Verkäuferumkehr, entsteht häufig zunächst mehr Seitwärtshandel. Der Bruch zeigt weniger einseitige Kontrolle, nicht schon den ganzen weiteren Verlauf.",
      "Die Balance kann ein tieferes Hoch mit einem zweiten Abwärtsabschnitt vorbereiten oder als Bullenflagge in eine neue Aufwärtsfortsetzung übergehen. Ein kräftiger Verkäuferstoß mit Anschluss ist eine weitere Möglichkeit, muss aber wirklich sichtbar sein.",
      "Beobachte, ob die neuen Bars Richtung halten oder stark überlappen. Ein unbegründeter Gegenplan lässt sich nicht durch das Wort Linienbruch retten. Reaktion, Auslösung und Risiko müssen weiterhin zusammenpassen."
    ],
    "takeaways": [
      "Bruch kann zunächst Balance erzeugen.",
      "Range, Fortsetzung und Umkehr offen halten.",
      "Anschluss entscheidet über die weitere Einordnung mit."
    ],
    "callout": "Anschluss entscheidet über die weitere Einordnung mit.",
    "prompt": "Nach einem unteren Bruch folgen nur stark überlappende Bars. Welche Einordnung ist zunächst passend?",
    "answers": [
      {
        "label": "Zweiseitiger Handel nach gestörter Trendkontrolle.",
        "explanation": "Richtig. Ein neuer Bärentrend ist damit noch nicht belegt."
      },
      {
        "label": "Ein garantiert geradliniger Verkäufertrend.",
        "explanation": "Überlappung zeigt gerade fehlende einseitige Fortsetzung."
      },
      {
        "label": "Der Bruch hat bereits jeden weiteren Preis festgelegt.",
        "explanation": "Neue Bars müssen weiterhin beurteilt werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Starker Kanal: ersten Gegenbruch nicht blind kaufen",
    "summary": "Erster Gegenbruch kann noch scheitern.",
    "section": "Umkehrqualität",
    "scenario": "c15-20",
    "paragraphs": [
      "In einem engen Bärenkanal kann ein erster Bruch über die Trendseite nur einen kurzen Rücklauf beginnen. Ein einzelner Käuferbar ist deshalb ein schwacher Grund, sofort gegen die vorherige Kontrolle zu handeln. Der Kanal kann anschließend auf neue Tiefs fallen.",
      "Ein überzeugender Gegenstoß mit mehreren guten Käuferbars und ein späterer Rücklauftest bieten mehr Information. Ein höheres oder tieferes Testtief kann funktionieren, wenn die neue Reaktion deutlich ist. Ein Rücklauf, der oberhalb des Durchschnitts hält, zeigt oft mehr Käuferstärke als einer weit darunter.",
      "Wenn der Kurs ohne Rücklauf stark steigt, musst du ihn nicht verfolgen. Warte auf einen späteren passenden Ort. Kurze Zeitangaben für einen üblichen Pullback sind Orientierung, keine Einstiegspflicht nach einer bestimmten Barzahl."
    ],
    "takeaways": [
      "Erster Gegenbruch kann noch scheitern.",
      "Gegenstoß und späteren Test gemeinsam lesen.",
      "Fehlender Rücklauf ist keine Pflicht zum Hinterherkaufen."
    ],
    "callout": "Fehlender Rücklauf ist keine Pflicht zum Hinterherkaufen.",
    "prompt": "Was liefert nach einem engen Bärenkanal mehr Belege für Käuferkontrolle?",
    "answers": [
      {
        "label": "Ein Kauf allein nach Ablauf von fünf Bars.",
        "explanation": "Ein Zeitwert ersetzt kein Setup."
      },
      {
        "label": "Mehrere kräftige Käuferbars und ein haltender Rücklauftest.",
        "explanation": "Richtig. Die neue Richtung wird über mehrere Beobachtungen gestützt."
      },
      {
        "label": "Nur ein Tick über dem vorigen Bar.",
        "explanation": "Das kann ein kurzer Rücklauf bleiben."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Die Stärke des Hochtests verändert die Umkehridee",
    "summary": "Momentum des Tests wichtiger als nur sein Extrempreis.",
    "section": "Umkehrqualität",
    "scenario": "c15-21",
    "paragraphs": [
      "Nach einem starken Gegenbruch eines Bullenkanals kann der Kurs zum alten Hochbereich steigen. Ein enger steiler Anstieg mit wenig Überlappung und starkem Ausbruch über das alte Hoch stützt eine Wiederaufnahme der Bullenkontrolle.",
      "Ein langsamer Test mit vielen Gegenkörpern, klaren Rückläufen und vielleicht einer Keilform liefert weniger Käuferstärke. Ein etwas höheres Hoch kann dann trotzdem nur der letzte Test vor einer Range oder erneuten Verkäuferphase sein.",
      "Vergleiche die Qualität des Tests mit dem ursprünglichen Trend und dem Gegenstoß. Der genaue Preis des Testhochs ist nur ein Teil der Aussage. Ein erster Bruch eines starken Testkanals kann wiederum scheitern; verlange daher die tatsächliche Folge statt vorschneller Sicherheit."
    ],
    "takeaways": [
      "Momentum des Tests wichtiger als nur sein Extrempreis.",
      "Enger kräftiger Test stützt Fortsetzung eher.",
      "Schwacher Test kann Range oder erneute Verkäufe vorbereiten."
    ],
    "callout": "Schwacher Test kann Range oder erneute Verkäufe vorbereiten.",
    "prompt": "Welcher Hochtest stützt eher die Wiederaufnahme eines Bullenverlaufs?",
    "answers": [
      {
        "label": "Ein schleppender Test mit vielen Verkäuferbars.",
        "explanation": "Das zeigt weniger überzeugende Käuferkontrolle."
      },
      {
        "label": "Jedes knapp höhere Hoch unabhängig von den Bars.",
        "explanation": "Die Qualität des Wegs und die Folgereaktion gehören dazu."
      },
      {
        "label": "Ein enger starker Anstieg mit Anschluss deutlich über das alte Hoch.",
        "explanation": "Richtig. Käuferstärke ist in der Folge sichtbar."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Nach dem Ausbruch drei mögliche Antworten offenhalten",
    "summary": "Fortsetzung, Fehlschlag und Balance unterscheiden.",
    "section": "Ausbruchsqualität",
    "scenario": "c15-22",
    "paragraphs": [
      "Nach einem Kanalausbruch kann die Bewegung Anschluss bekommen, rasch scheitern oder seitwärts in eine neue Balance übergehen. Die erste Ausbruchskerze darf deshalb nicht allein den ganzen Plan festlegen. Die nächste Gegenreaktion ist besonders aufschlussreich.",
      "Ein kräftiger Ausbruchsbar mit nur schwacher Gegenkerze spricht eher für einen möglichen Ausbruchspullback. Eine starke Gegenkerze mit anschließendem Gegenanschluss spricht eher für einen Fehlschlag. Sind beide ähnlich stark, gewinnt der folgende Bar an Bedeutung.",
      "Ein einzelnes Unterschreiten einer Gegenkerze kann vorläufiges Scheitern zeigen, aber bei sofortiger starker Rückkehr ebenfalls zum Fehlschlag des Fehlschlags werden. Beurteile jede neue Auslösung mit ihrem damaligen Kontext. Der Markt muss sich nicht an deinen ersten Namen halten."
    ],
    "takeaways": [
      "Fortsetzung, Fehlschlag und Balance unterscheiden.",
      "Ausbruch und Gegenbar in ihrer Stärke vergleichen.",
      "Bei ähnlicher Stärke den Anschlussbar abwarten."
    ],
    "callout": "Bei ähnlicher Stärke den Anschlussbar abwarten.",
    "prompt": "Starker Ausbruchsbar und ebenso starker Gegenbar folgen aufeinander. Was prüfst du besonders?",
    "answers": [
      {
        "label": "Den nächsten Anschlussbar und seine Richtung.",
        "explanation": "Richtig. Die beiden ersten Bars liefern widersprüchliche Stärke."
      },
      {
        "label": "Nur den Namen des ersten Bars.",
        "explanation": "Neue Information kann die erste Deutung verändern."
      },
      {
        "label": "Eine garantierte Fortsetzung ohne weitere Bars.",
        "explanation": "Die Gegenreaktion macht die Lage gerade offen."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Vom Climax zum Ziel: Stärke bedeutet nicht sofortiges Ende",
    "summary": "Starke Ausdehnung kann weiterlaufen.",
    "section": "Ausbruchsqualität",
    "scenario": "c15-23",
    "paragraphs": [
      "Ein kräftiger Spike ist eine Ausdehnung und kann als Climax betrachtet werden. Damit ist noch keine unmittelbar folgende Umkehr bestätigt. Mehrere große Trendbars mit gutem Anschluss können weitere Strecke bis zu einer Projektion vorbereiten.",
      "Ein oberer Kanalausbruch, der dauerhaft außerhalb hält, kann als Messstelle für die weitere Bewegung dienen. Scheitert vorher ein unterer Keilausbruch und folgt danach ein kräftiger oberer Ausbruch, kann die Keilhöhe eine zusätzliche obere Referenz liefern.",
      "Das entscheidende Unterscheidungsmerkmal bleibt der Anschluss. Nach einer Korrektur kann die spätere Fortsetzung flacher und überlappender verlaufen als der ursprüngliche Spike. Passe deine Einordnung an diese neue Qualität an, statt das Wort Climax automatisch mit Short gleichzusetzen."
    ],
    "takeaways": [
      "Starke Ausdehnung kann weiterlaufen.",
      "Anschluss trennt Übertreibung und tragfähigen Ausbruch mit.",
      "Spätere Kanalphase kann langsamer werden."
    ],
    "callout": "Spätere Kanalphase kann langsamer werden.",
    "prompt": "Ein starker oberer Ausbruch hält außerhalb des Kanals. Was ist plausibel?",
    "answers": [
      {
        "label": "Die neuen Bars dürfen nicht mehr geprüft werden.",
        "explanation": "Gerade der Anschluss entscheidet mit."
      },
      {
        "label": "Eine Fortsetzung mit einem möglichen Projektionsbereich.",
        "explanation": "Richtig. Ein Climax muss nicht sofort umkehren."
      },
      {
        "label": "Das Wort Climax garantiert den nächsten Verkäuferbar.",
        "explanation": "Es beschreibt Ausdehnung, nicht einen festen Wendepunkt."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Anker, Breite und Handlungsgrund vorab notieren",
    "summary": "Kanal und Kontext mit damaligen Daten beschreiben.",
    "section": "Arbeitsweise",
    "scenario": "c15-24",
    "paragraphs": [
      "Vor dem Test hältst du fest, welche sichtbaren Punkte den Kanal bestimmen und welcher größere Kontext gilt. Notiere Stärke, Breite und Lage zu möglichen Widerstands- oder Unterstützungsbereichen. Damit wird die Zeichnung zu einer überprüfbaren Beobachtung.",
      "Trenne dann Referenz und Auslösung: Die Grenze lenkt Aufmerksamkeit, der Signalablauf bestimmt eine mögliche Order. Ein Bestätigungseinstieg, ein antizipierter Limitkauf und ein Gegenscalp sind unterschiedliche Pläne. Sie brauchen jeweils eine passende Verlustgrenze.",
      "Im Replay deckst du die Folge schrittweise auf. Ergänze neue Information, ohne alte Anker oder Stops rückwirkend umzuschreiben. Ein profitabler Zufall beweist keine saubere Entscheidung; ein begründeter Verlust kann Teil eines nachvollziehbaren Vorgehens sein."
    ],
    "takeaways": [
      "Kanal und Kontext mit damaligen Daten beschreiben.",
      "Referenz und Auslösung getrennt notieren.",
      "Die Entscheidung vor Kenntnis des Ergebnisses beurteilen."
    ],
    "callout": "Die Entscheidung vor Kenntnis des Ergebnisses beurteilen.",
    "prompt": "Welche Aussage ist im Replay überprüfbar?",
    "answers": [
      {
        "label": "Die richtige Linie ist die, die ich am Tagesende durch den Wendepunkt ziehe.",
        "explanation": "Das nutzt spätere Information."
      },
      {
        "label": "Ein Gewinn macht jede ungeplante Order korrekt.",
        "explanation": "Ergebnis und Entscheidungsqualität sind verschieden."
      },
      {
        "label": "Diese bekannten Anker bestimmen die Grenze; hier prüfe ich Signal und Risiko.",
        "explanation": "Richtig. Die Aussage trennt damalige Information und spätere Folge."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Chartfall 15.1: Kleine Kanäle im großen Kanal",
    "summary": "Mehrere Kanalgrößen können gleichzeitig bestehen.",
    "section": "Chartfall 15.1 · Verschachtelung",
    "scenario": "c15-25",
    "paragraphs": [
      "Ein größerer Kanal kann mehrere kleinere Kanäle enthalten. Ein breiter Aufwärtsabschnitt kann etwa aus einem engen Käuferstoß, einem kurzen Bärenpullback und einem weiteren Käuferkanal bestehen. Die lokale Richtung wechselt, während der größere Abschnitt noch aufwärts gerichtet ist.",
      "Im ersten Chartfall werden solche Abschnitte mit verschiedenen Grenzen beschrieben. Die Linien sind teilweise Näherungen, damit die wiederholte Struktur erkennbar bleibt. Das eigene Diagramm zeigt die große Einfassung und einen darin liegenden kleineren Abschnitt getrennt.",
      "Benenne immer, welchen Kanal dein Plan betrifft. Ein Short im kleinen Pullback ist etwas anderes als eine belegte Umkehr des großen Aufwärtsabschnitts. Mehr Linien liefern keine höhere Gewissheit; sie helfen nur, unterschiedliche Größenordnungen nicht miteinander zu vermischen."
    ],
    "takeaways": [
      "Mehrere Kanalgrößen können gleichzeitig bestehen.",
      "Lokalen Abschnitt und größeren Verlauf benennen.",
      "Kleine Gegenphase ist nicht automatisch große Umkehr."
    ],
    "callout": "Kleine Gegenphase ist nicht automatisch große Umkehr.",
    "prompt": "Ein kleiner Bärenkanal liegt im größeren Bullenkanal. Was ist korrekt?",
    "answers": [
      {
        "label": "Beide Richtungen beschreiben unterschiedliche Abschnitte.",
        "explanation": "Richtig. Die Größenordnung muss zum Plan passen."
      },
      {
        "label": "Eine der Zeichnungen muss grundsätzlich falsch sein.",
        "explanation": "Verschachtelte Strukturen können gleichzeitig sinnvoll sein."
      },
      {
        "label": "Der kleine Gegenkanal beweist das Ende des großen Trends.",
        "explanation": "Dafür braucht es weitere Strukturbelege."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Chartfall 15.1: Engen Gegenkanal erst nach der Reaktion handeln",
    "summary": "Enge lokale Kontrolle ernst nehmen.",
    "section": "Chartfall 15.1 · Stärke",
    "scenario": "c15-26",
    "paragraphs": [
      "Ein enger fallender Abschnitt kann trotz seines Flaggenpotenzials weiter nach unten arbeiten. Vor einer überzeugenden Käuferreaktion ist ein Long gegen diese lokale Kontrolle früh. Ein späterer fehlgeschlagener Tiefausbruch kann die Situation verändern.",
      "Alternativ kann ein kräftiger Gegenbruch mit danach haltendem Rücklauf einen späteren Einstieg vorbereiten. Der breite folgende Kanal hat mehr zweiseitiges Verhalten als der vorherige enge Abschnitt. Deshalb passen nicht automatisch dieselben Einstiegsregeln auf beide Phasen.",
      "Der Chartfall erklärt, warum eine steile Gegenbewegung und eine breitere Balance im selben Tagesverlauf auftreten können. Er verrät nicht, welche Programme einzelner Firmen dahinterstehen. Für die Entscheidung genügen Stärke, Fehlschlag und Folgereaktion."
    ],
    "takeaways": [
      "Enge lokale Kontrolle ernst nehmen.",
      "Fehlausbruch oder Gegenbruch mit Test abwarten.",
      "Breiter Folgekanal benötigt eine neue Einordnung."
    ],
    "callout": "Breiter Folgekanal benötigt eine neue Einordnung.",
    "prompt": "Was verändert einen frühen Long gegen den engen Bärenabschnitt?",
    "answers": [
      {
        "label": "Die Vermutung über ein bestimmtes Computerprogramm.",
        "explanation": "Das ist aus dem Chart nicht bekannt."
      },
      {
        "label": "Eine überzeugende Käuferreaktion nach Fehlschlag oder Gegenbruch.",
        "explanation": "Richtig. Neue Bars liefern zusätzliche Belege."
      },
      {
        "label": "Nur die Bezeichnung Bullenflagge.",
        "explanation": "Die Möglichkeit einer Auflösung ist noch kein Signal."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Chartfall 15.2: Obere Fehlüberschreitung, unterer Ausbruch",
    "summary": "Rückkehr zuerst zur gegenüberliegenden Grenze einordnen.",
    "section": "Chartfall 15.2 · Seitenwechsel",
    "scenario": "c15-27",
    "paragraphs": [
      "Der zweite Chartfall beginnt mit einem oberen Ausbruchsversuch aus einer kleinen Range. Der Kurs kehrt zurück und erreicht die untere Seite. Erst wenn der untere Ausbruch Anschluss erhält, kommt eine zusätzliche Kanalhöhe als tiefere Referenz in Betracht.",
      "Im eigenen Beispiel beträgt die Rangehöhe 14 relative Einheiten. Nach der Rückkehr ist die Untergrenze das erste Beobachtungsziel; bei fortgesetztem unteren Ausbruch liegt eine weitere Projektion 14 Einheiten tiefer. Beide Schritte haben unterschiedliche Voraussetzungen.",
      "Ein exakter oder beinahe exakter späterer Zieltreffer macht die Projektion nicht zur vorherigen Gewissheit. Prüfe jeden Übergang getrennt: obere Fehlüberschreitung, unterer Test und Verkäuferanschluss. Wenn der untere Bruch sofort scheitert, beginnt eine andere Idee."
    ],
    "takeaways": [
      "Rückkehr zuerst zur gegenüberliegenden Grenze einordnen.",
      "Zusätzliche Höhe erst bei Anschlussausbruch projizieren.",
      "Späterer Treffer beweist keine damalige Sicherheit."
    ],
    "callout": "Späterer Treffer beweist keine damalige Sicherheit.",
    "prompt": "Nach oberem Fehlausbruch erreicht der Kurs die untere Grenze. Was braucht die tiefere Projektion?",
    "answers": [
      {
        "label": "Nichts, das untere Ziel ist schon garantiert.",
        "explanation": "Der Verlauf kann an der unteren Grenze drehen."
      },
      {
        "label": "Ein rückwirkend verändertes oberes Hoch.",
        "explanation": "Die vorherige Höhe muss dokumentiert bleiben."
      },
      {
        "label": "Einen unteren Ausbruch mit entsprechender Fortsetzung.",
        "explanation": "Richtig. Der Randtest allein ist noch nicht derselbe Schritt."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Chartfall 15.2: Unterer Fehlausbruch wird zur Käuferidee",
    "summary": "Käufer-Insidebar im Kontext eines Tiefausbruchs lesen.",
    "section": "Chartfall 15.2 · Rückkehr",
    "scenario": "c15-28",
    "paragraphs": [
      "Später unterschreitet der Verlauf einen waagerechten Balancebereich, findet aber keinen dauerhaften Verkäuferanschluss. Ein Käufer-Insidebar nach dem Tiefausbruch kann einen Fehlschlag vorbereiten. Die Rückkehr öffnet zunächst den Blick zur oberen Rangegrenze.",
      "Bekommt anschließend der obere Ausbruch kräftigen Anschluss, kann eine weitere Rangehöhe als obere Referenz dienen. Die ursprüngliche Käuferidee aus dem Fehlausbruch und der spätere Ausbruchstrade sind zwei verschiedene Einstiegsorte mit unterschiedlichen Risiken.",
      "Mehrere mögliche Rangeanker können etwas verschiedene Grenzen ergeben. Halte die Varianten vor dem Test offen und benenne den breiteren äußersten Bereich. Ein engerer Bruch muss nicht schon den ganzen größeren Balancebereich verlassen haben."
    ],
    "takeaways": [
      "Käufer-Insidebar im Kontext eines Tiefausbruchs lesen.",
      "Rückkehr und späteren oberen Ausbruch unterscheiden.",
      "Innere und äußere Rangegrenzen offen benennen."
    ],
    "callout": "Innere und äußere Rangegrenzen offen benennen.",
    "prompt": "Eine enge untere Grenze bricht, die äußere breite Grenze hält. Was ist sinnvoll?",
    "answers": [
      {
        "label": "Den Unterschied dokumentieren und den Anschluss prüfen.",
        "explanation": "Richtig. Die Konstruktionen beschreiben verschiedene Bereiche."
      },
      {
        "label": "Jeden Bruch als vollständiges Verlassen aller Grenzen behandeln.",
        "explanation": "Die äußere Referenz kann noch halten."
      },
      {
        "label": "Die frühere Zeichnung heimlich ersetzen.",
        "explanation": "Das verändert die damalige Begründung."
      }
    ],
    "correct": 0
  },
  {
    "number": 29,
    "title": "Chartfall 15.2: Ziel erreicht, trotzdem kein brauchbarer Trade",
    "summary": "Richtige Mustererkennung bedeutet nicht genug Zielraum.",
    "section": "Chartfall 15.2 · Raum und Fehlschlag",
    "scenario": "c15-29",
    "paragraphs": [
      "Eine Fehlüberschreitung eines extrem engen Kanals kann schon im nächsten Bar die gegenüberliegende Seite erreichen. Der erwartete Ablauf kann richtig sein, während der Abstand für einen Short nach Risiko und Kosten zu klein bleibt.",
      "Im Chartfall treffen später auch zwei Projektionsbereiche aus verschiedenen Strukturen ungefähr zusammen. Das kann einen Bereich für Reaktion interessanter machen, liefert aber keine Erfolgsgarantie. Der erste Gegenversuch kann scheitern und erst ein zweiter Versuch Anschluss bekommen.",
      "Plane den zweiten Versuch eigenständig. Er ist kein Grund, den ersten Verlusttrade unbegrenzt offen zu lassen. Am Gegenrand kann danach eine neue Käuferreaktion beginnen und den nächsten Seitenwechsel vorbereiten. Jeder Abschnitt braucht seine eigene Auslösung."
    ],
    "takeaways": [
      "Richtige Mustererkennung bedeutet nicht genug Zielraum.",
      "Zusammenliegende Ziele sind ein Bereich, keine Garantie.",
      "Ersten und zweiten Versuch mit getrenntem Risiko behandeln."
    ],
    "callout": "Ersten und zweiten Versuch mit getrenntem Risiko behandeln.",
    "prompt": "Zwei Ziele liegen zusammen, aber der erste Short scheitert. Was folgt daraus?",
    "answers": [
      {
        "label": "Zwei Zielnamen garantieren den nächsten Versuch.",
        "explanation": "Auch mehrere Referenzen können überwunden werden."
      },
      {
        "label": "Ein späterer zweiter Versuch braucht einen neuen begründeten Plan.",
        "explanation": "Richtig. Der Zielbereich rettet die erste Position nicht."
      },
      {
        "label": "Der erste Stop darf unbegrenzt erweitert werden.",
        "explanation": "Das verändert den Verlustplan."
      }
    ],
    "correct": 1
  },
  {
    "number": 30,
    "title": "Chartfall 15.2: Tagesbeginn und Mikrokanalwechsel",
    "summary": "Gapkontext und Qualität des ersten Bars unterscheiden.",
    "section": "Chartfall 15.2 · Vertiefung",
    "scenario": "c15-30",
    "paragraphs": [
      "Eine große Lücke unter die vorherige Range setzt einen Ausbruchskontext. Ein erster großer Bar mit Tails an beiden Seiten zeigt aber bereits Balance und ist kein sauberer gerichteter Signalbar. Eine spätere starke Käuferreaktion liefert andere Information als der erste Bar.",
      "Ein enger früher Käuferkanal kann zunächst nur kurz nach unten brechen und dann wieder scheitern. Die folgende Seitwärtsphase ist der Kampf um die weitere Richtung. Späterer Verkäuferanschluss und anschließend kräftige Käuferbars verändern diese Einordnung erneut.",
      "Der Chartfall enthält mehrere solche kurzen Kanäle und Übergänge. Betrachte sie als Folge aus jeweils bekannter Struktur und neuer Reaktion. Die gesamte fertige Tagesgrafik darf nicht dazu verleiten, frühe Wendepunkte schon vor ihrer Bestätigung als sicher zu behandeln."
    ],
    "takeaways": [
      "Gapkontext und Qualität des ersten Bars unterscheiden.",
      "Mikrokanalbruch kann nur kurz fortsetzen.",
      "Den Tag als Folge neuer Entscheidungen lesen."
    ],
    "callout": "Den Tag als Folge neuer Entscheidungen lesen.",
    "prompt": "Großes Abwärtsgap, aber erster Bar mit zwei langen Tails: Was ist sichtbar?",
    "answers": [
      {
        "label": "Ein perfekter Verkäufer-Signalbar ohne Gegenseite.",
        "explanation": "Die Tails zeigen gerade Handel in beide Richtungen."
      },
      {
        "label": "Der spätere Tagesverlauf ist jetzt bekannt.",
        "explanation": "Weitere Bars müssen erst entstehen."
      },
      {
        "label": "Ausbruchskontext mit bereits zweiseitigem ersten Bar.",
        "explanation": "Richtig. Gap und Signalqualität sind verschiedene Informationen."
      }
    ],
    "correct": 2
  },
  {
    "number": 31,
    "title": "Chartfall 15.3: Bullenkanal im starken Bullentag",
    "summary": "Starker Bullentag stützt kleine Trendpullbacks eher.",
    "section": "Chartfall 15.3 · Trendfortsetzung",
    "scenario": "c15-31",
    "paragraphs": [
      "Der dritte Chartfall vergleicht gleich aussehende lokale Bullenkanäle in unterschiedlichen Umfeldern. Im ersten Umfeld beginnt ein starker Bullentag nach einem oberen Gap. Kleine Rückläufe mit weiterem Käuferanschluss halten die Aufwärtskontrolle sichtbar.",
      "Käufer betrachten dort Rücklaufbereiche, etwa nahe der unteren Kanalhälfte oder unter schwachen Gegenbars. Eine antizipierte Limitorder und ein späterer Bestätigungseinstieg bleiben verschiedene Pläne. Die Stärke des Tages verbessert den Kontext, ohne einzelne Orders risikofrei zu machen.",
      "Vergleiche dieses Bild mit einem Bullenkanal nach starkem Verkäuferdruck. Die lokale Richtung allein ist gleich, aber die größere Vorgeschichte verändert die plausible Fortsetzung. Genau diese Unterscheidung verhindert, jeden Anstieg mit derselben Longbegründung zu handeln."
    ],
    "takeaways": [
      "Starker Bullentag stützt kleine Trendpullbacks eher.",
      "Gute Vorgeschichte beseitigt das Orderrisiko nicht.",
      "Gleiche lokale Form kann anderen Kontext besitzen."
    ],
    "callout": "Gleiche lokale Form kann anderen Kontext besitzen.",
    "prompt": "Was stützt einen Longpullback im ersten Umfeld?",
    "answers": [
      {
        "label": "Der starke Bullentag mit kleinen Rückläufen und Käuferanschluss.",
        "explanation": "Richtig. Kontext und lokale Qualität stimmen überein."
      },
      {
        "label": "Nur das Wort Bullenkanal.",
        "explanation": "Die lokale Form allein erklärt nicht die größere Kontrolle."
      },
      {
        "label": "Eine Garantie, dass Limitorders immer gefüllt werden.",
        "explanation": "Ausführung und spätere Bewegung bleiben unsicher."
      }
    ],
    "correct": 0
  },
  {
    "number": 32,
    "title": "Chartfall 15.3: Derselbe Anstieg als Bärenflagge",
    "summary": "Steigender Keil kann Rücklauf im Bärentrend sein.",
    "section": "Chartfall 15.3 · Gegenkanal",
    "scenario": "c15-32",
    "paragraphs": [
      "Im zweiten Umfeld liegt ein kleiner steigender Keil innerhalb eines Bärenverlaufs. Hier ist der Bullenkanal eine mögliche Bärenflagge. Die Verkäufer haben davor klaren Raum gewonnen; die neue Aufwärtsphase kann lediglich der Rücklauf sein.",
      "Ein ii-Muster, also zwei aufeinanderfolgende Insidebars, kann am passenden Ort einen späteren Ausbruch vorbereiten. Bricht die Struktur nach unten mit Verkäuferanschluss, stützt das die Fortsetzung des Bärenverlaufs. Ein Mustername allein legt die Richtung aber nicht fest.",
      "Vergleiche Körperstärke, Rückläufe und größere Grenzen. Ein Long in diesem Gegenkanal benötigt eine andere Begründung als der Rücklaufkauf im starken Bullentag. Für Anfänger kann es sinnvoll sein, nur die bestätigte größere Kontrolle zu handeln oder abzuwarten."
    ],
    "takeaways": [
      "Steigender Keil kann Rücklauf im Bärentrend sein.",
      "Insidefolge braucht Ort und Ausbruchsreaktion.",
      "Nicht dieselbe Longbegründung auf jeden Anstieg übertragen."
    ],
    "callout": "Nicht dieselbe Longbegründung auf jeden Anstieg übertragen.",
    "prompt": "Was macht den kleinen Bullenkanal im zweiten Umfeld zur Bärenflaggenidee?",
    "answers": [
      {
        "label": "Dass ii automatisch immer nach unten ausbricht.",
        "explanation": "Die Insidefolge allein garantiert keine Richtung."
      },
      {
        "label": "Der vorherige klare Bärenverlauf und der Charakter als Rücklauf.",
        "explanation": "Richtig. Die Vorgeschichte verändert die Einordnung."
      },
      {
        "label": "Dass jede steigende Kerze bereits ein Shortsignal ist.",
        "explanation": "Eine einzelne Kerze reicht nicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 33,
    "title": "Chartfall 15.3: Die letzte Bärenflagge scheitert nach oben",
    "summary": "Späte Verkäuferausdehnung und Käuferreaktion bilden anderen Kontext.",
    "section": "Chartfall 15.3 · Umkehr",
    "scenario": "c15-33",
    "paragraphs": [
      "Im dritten Umfeld folgt der kleine Bullenkanal auf eine späte starke Verkäuferserie und eine kräftige Käuferreaktion am Tiefbereich. Die Form kann noch als Bärenflagge gelesen werden, aber ihre unteren Fortsetzungsversuche scheitern rasch.",
      "Ein kräftiger Ausbruch über den oberen Rand verändert die Einordnung zur klareren Käuferkontrolle. Die vorherige Flagge kann dann zur letzten Korrektur des alten Bärenverlaufs werden. Nicht jede Bärenflagge löst nach unten auf.",
      "Beobachte das Scheitern schwacher Low-1- und Low-2-Versuche und den späteren Käuferanschluss. Früh antizipierte Longs hatten andere Risiken als der bestätigte obere Ausbruch. Dokumentiere, ab welchem Bar du die neue Kontrolle wirklich erkennen konntest."
    ],
    "takeaways": [
      "Späte Verkäuferausdehnung und Käuferreaktion bilden anderen Kontext.",
      "Gescheiterte untere Versuche können Umkehr vorbereiten.",
      "Flaggenname legt die spätere Richtung nicht fest."
    ],
    "callout": "Flaggenname legt die spätere Richtung nicht fest.",
    "prompt": "Eine Bärenflagge bricht kräftig nach oben mit Anschluss. Was ist zu tun?",
    "answers": [
      {
        "label": "Weiter auf den unteren Bruch bestehen, weil sie so benannt wurde.",
        "explanation": "Der Name hat keine Vorrangstellung gegenüber dem Kurs."
      },
      {
        "label": "Alle frühen Longs waren dadurch rückwirkend risikofrei.",
        "explanation": "Sie trugen vor der Bestätigung reales Risiko."
      },
      {
        "label": "Die neue Käuferkontrolle statt des alten Namens beurteilen.",
        "explanation": "Richtig. Neue Bars können die ursprüngliche Idee widerlegen."
      }
    ],
    "correct": 2
  },
  {
    "number": 34,
    "title": "Chartfall 15.4: Kanalhöhe am letzten Hoch messen",
    "summary": "Grenzwerte am gleichen Hochbar nehmen.",
    "section": "Chartfall 15.4 · Projektion",
    "scenario": "c15-34",
    "paragraphs": [
      "Der vierte Chartfall verwendet einen größeren Zeithorizont. Ein steigender, leicht enger werdender Kanal erreicht die obere Grenze. Für eine untere Projektion werden oberer und unterer Grenzpreis direkt am selben Hochbar verglichen.",
      "Im eigenen Beispiel liegt die obere Grenze dort bei 72 und die untere bei 54. Die lokale Höhe ist 18; unter der unteren Grenze ergibt sich ein möglicher Projektionsbereich bei 36. Die Zeichnung zeigt drei waagerechte Referenzen für oben, unten und Ziel.",
      "Eine spätere Käuferreaktion um diesen Bereich kann für Gewinnmitnahmen oder einen neuen Plan interessant sein. Zusätzliche Zeichenwerkzeuge müssen nicht nötig sein, wenn die einfache Preisprojektion bereits die Frage beantwortet. Der Zielbereich bleibt trotzdem eine Näherung."
    ],
    "takeaways": [
      "Grenzwerte am gleichen Hochbar nehmen.",
      "Höhe einmal unter den unteren Rand projizieren.",
      "Einfaches Werkzeug erklärt den Bereich, nicht seine Garantie."
    ],
    "callout": "Einfaches Werkzeug erklärt den Bereich, nicht seine Garantie.",
    "prompt": "Oben 72, unten 54 am selben Bar: Wo liegt die einfache untere Projektion?",
    "answers": [
      {
        "label": "Bei 36.",
        "explanation": "Richtig. Die Höhe 18 wird von 54 abgezogen."
      },
      {
        "label": "Bei 18.",
        "explanation": "Das wäre eine weitere volle Höhe zu tief."
      },
      {
        "label": "Bei jedem beliebigen älteren Tief.",
        "explanation": "Die beschriebene Projektion nutzt konkrete Grenzwerte."
      }
    ],
    "correct": 0
  },
  {
    "number": 35,
    "title": "Chartfall 15.4: Erster Bruch des engen Kanals scheitert",
    "summary": "Gescheiterter erster Gegenbruch kann Fortsetzung vorbereiten.",
    "section": "Chartfall 15.4 · Fortsetzung",
    "scenario": "c15-35",
    "paragraphs": [
      "Ein erster Gegenbruch eines starken engen Bullenkanals kann zurückgenommen werden. Danach kann die Aufwärtsbewegung wieder ein neues Hoch testen. Für eine grobe Fortsetzungsprojektion lässt sich die Tiefe des gescheiterten Gegenversuchs zum vorherigen Hoch addieren.",
      "Eine solche Projektion kann überschritten werden oder knapp unerreicht bleiben. Im Chartfall treten beide Möglichkeiten in verschiedenen Abschnitten auf. Der Markt muss eine berechnete Strecke nicht exakt liefern, selbst wenn die neue Trendkontrolle plausibel ist.",
      "Unterscheide deshalb den strukturellen Beleg für Fortsetzung vom geplanten Ausstiegsbereich. Ein Ziel verändert keine bereits erreichte Verlustgrenze. Bei schwächerem Anschluss oder neuem Gegenstoß muss der Plan entsprechend seiner vorher festgelegten Regeln reagieren."
    ],
    "takeaways": [
      "Gescheiterter erster Gegenbruch kann Fortsetzung vorbereiten.",
      "Tiefe des Gegenversuchs ist eine mögliche Projektionsstrecke.",
      "Zieltreffer bleibt unsicher."
    ],
    "callout": "Zieltreffer bleibt unsicher.",
    "prompt": "Die Fortsetzung erreicht ein berechnetes Ziel knapp nicht. Was bedeutet das?",
    "answers": [
      {
        "label": "Ein offener Verlust darf bis zum Ziel unbegrenzt wachsen.",
        "explanation": "Ein Ziel ersetzt keinen Verlustschutz."
      },
      {
        "label": "Die Projektion war ein möglicher Bereich, keine zugesagte Strecke.",
        "explanation": "Richtig. Das Management muss solche Verläufe berücksichtigen."
      },
      {
        "label": "Der Kurs muss später exakt dorthin zurückkehren.",
        "explanation": "Es gibt keine Rückkehrpflicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 36,
    "title": "Chartfall 15.4: Umkehrform kann eine große Bullenflagge werden",
    "summary": "Umkehrform und spätere Fortsetzung können aufeinander folgen.",
    "section": "Chartfall 15.4 · Musterentwicklung",
    "scenario": "c15-36",
    "paragraphs": [
      "Mehrere Hochtests können eine Schulter-Kopf-Schulter-Form ergeben. Diese Form kann im größeren Bullenverlauf aber auch nur eine ausgedehnte Korrektur darstellen. Der spätere obere Ausbruch und ein haltender Rücklauf verändern die Einordnung zur Fortsetzung.",
      "Im Chartfall beginnt danach ein weiterer Bullenkanal. Dessen späterer unterer Bruch kann erneut ungefähr eine Kanalhöhe oder die Höhe eines ersten Gegenabschnitts projizieren. Der ursprüngliche Umkehrname erklärt nicht alle folgenden Phasen.",
      "Eine Range unter dem Durchschnitt mit vielen Tails kann vor dem letzten Verkäuferstoß entstehen. Sie wird manchmal als Barbwire beschrieben: enges, stacheliges Überlappen. Behandle sie als Balance mit möglichem späteren Ausbruch, nicht als präzises Richtungssignal."
    ],
    "takeaways": [
      "Umkehrform und spätere Fortsetzung können aufeinander folgen.",
      "Neue Kanalphase braucht eine neue Zeichnung.",
      "Viele Tails und Überlappung zeigen zunächst Balance."
    ],
    "callout": "Viele Tails und Überlappung zeigen zunächst Balance.",
    "prompt": "Eine Schulter-Kopf-Schulter-Form löst nach oben auf und hält den Rücklauf. Was zählt?",
    "answers": [
      {
        "label": "Der Musternamen verlangt trotzdem einen sicheren Bärentrend.",
        "explanation": "Der Kursverlauf hat Vorrang."
      },
      {
        "label": "Jede enge Tailfolge garantiert den nächsten Ausbruch nach unten.",
        "explanation": "Balance allein legt die Richtung nicht fest."
      },
      {
        "label": "Die sichtbare Fortsetzung kann die alte Umkehridee widerlegen.",
        "explanation": "Richtig. Muster können eine Korrektur innerhalb des größeren Trends sein."
      }
    ],
    "correct": 2
  },
  {
    "number": 37,
    "title": "Chartfall 15.4: Mehrere enge Schübe und wachsender Verkäuferdruck",
    "summary": "Mehrere enge Kanäle können eine größere Spikephase bilden.",
    "section": "Chartfall 15.4 · Vertiefung",
    "scenario": "c15-37",
    "paragraphs": [
      "Die größere Rally kann aus mehreren sehr engen Kanälen bestehen, die jeweils wie Spikes wirken. Dazwischen liegen kurze Rückläufe. Später auftauchende Verkäuferkörper zeigen, dass sich die Gegenseite stärker beteiligt, auch wenn ein weiterer Käuferstoß noch kräftig aussieht.",
      "Ein starker Verkäuferstoß zwischen mehreren oberen Ausdehnungen verändert den Kontext des nächsten Hochtests. Ein weiterer enger Anstieg kann noch ein Spike sein und zugleich am Ende einer Reihe von Kaufclimaxes liegen. Diese wiederholte Ausdehnung kann eine größere Korrektur vorbereiten.",
      "Zähle nicht jeden Spike als sofortiges Shortsignal. Vergleiche die neuen Verkäuferbars mit den früheren Rückläufen und beobachte den Hochtest. Die Kombination aus zunehmendem Druck, starker Gegenbewegung und späterer schwacher Fortsetzung liefert mehr als der Climaxname allein."
    ],
    "takeaways": [
      "Mehrere enge Kanäle können eine größere Spikephase bilden.",
      "Verkäuferdruck zwischen den Schüben verändert den Kontext.",
      "Climaxes erst mit Reaktion und Anschluss beurteilen."
    ],
    "callout": "Climaxes erst mit Reaktion und Anschluss beurteilen.",
    "prompt": "Was macht einen späten Käuferstoß nach starkem Verkäuferdruck anders als den ersten?",
    "answers": [
      {
        "label": "Die Gegenseite hat inzwischen deutlich mehr Raum gewonnen.",
        "explanation": "Richtig. Gleiche lokale Stärke trifft auf einen veränderten Kontext."
      },
      {
        "label": "Jeder spätere Spike muss auf der ersten Kerze umkehren.",
        "explanation": "Eine Ausdehnung kann weiterlaufen."
      },
      {
        "label": "Die alten Verkäuferbars sind durch ein neues Hoch gelöscht.",
        "explanation": "Sie bleiben Teil der Struktur."
      }
    ],
    "correct": 0
  },
  {
    "number": 38,
    "title": "Chartfall 15.5: Unterer Bärenausbruch wird zur Überdehnung",
    "summary": "Unterer Ausbruch kann Beschleunigung oder späte Ausdehnung sein.",
    "section": "Chartfall 15.5 · Climax",
    "scenario": "c15-38",
    "paragraphs": [
      "Der fünfte Chartfall zeigt einen Ausbruch unter die untere Grenze eines Bärenkanals. Der Schub kann noch stärker werden, findet hier aber bald Käuferanschluss zurück in die Struktur. Der schnelle Tiefstoß wird so zur späten Verkäuferausdehnung.",
      "Eine folgende Rally kann aus zwei Abschnitten bestehen. Der erste erreicht einen Rücklaufbereich, der zweite testet erneut die obere Seite. Die Zahl der Abschnitte und ein ungefährer Zeitrahmen helfen beim Beobachten, liefern aber keine Gewinn- oder Haltegarantie.",
      "Ein späteres neues Tief nach dem Gegenbruch kann trotzdem Teil einer größeren Umkehr sein. Vergleiche Verkäuferanschluss am neuen Tief mit der vorherigen Käuferstärke. Die absolute Tiefzahl allein sagt nicht, ob der alte Kanal wieder vollständig kontrolliert."
    ],
    "takeaways": [
      "Unterer Ausbruch kann Beschleunigung oder späte Ausdehnung sein.",
      "Rückkehr und zwei mögliche Käuferabschnitte beobachten.",
      "Neues Tief nach Gegenbruch im Zusammenhang lesen."
    ],
    "callout": "Neues Tief nach Gegenbruch im Zusammenhang lesen.",
    "prompt": "Nach unterem Ausbruch kehrt der Kurs kräftig in den Kanal zurück. Was ist eine mögliche Folge?",
    "answers": [
      {
        "label": "Jedes neue Tief widerlegt automatisch jede spätere Umkehr.",
        "explanation": "Ein neuer Tiefpunkt kann ein Test nach dem Gegenbruch sein."
      },
      {
        "label": "Ein Test zur oberen Seite mit mehrteiliger Käuferkorrektur.",
        "explanation": "Richtig. Es bleibt ein Szenario, keine Garantie."
      },
      {
        "label": "Der untere Ausbruch muss weiterhin als intakt gelten.",
        "explanation": "Die Rückkehr ist neue gegenteilige Information."
      }
    ],
    "correct": 1
  },
  {
    "number": 39,
    "title": "Chartfall 15.5: Starker Käuferausbruch statt sofortiger Gegenorder",
    "summary": "Mehrere starke Käuferbars nicht automatisch shorten.",
    "section": "Chartfall 15.5 · Ausbruchsstärke",
    "scenario": "c15-39",
    "paragraphs": [
      "Im weiteren Verlauf kann ein kleiner Bullenkanal kräftig nach oben ausbrechen. Mehrere große Käuferbars mit wenig Rückgabe zeigen starke Kontrolle. Auch wenn dieser Stoß als Kaufclimax bezeichnet wird, muss er nicht sofort scheitern.",
      "Eine Projektion aus dem Spike kann einen späteren Bereich erklären. Dafür werden Anfang und Ende des klaren Spikes vorab gewählt; eine Strecke vom Anfang bis zum Ende wird darüber verlängert. Unterschiedliche offene Anker wie Open oder Low ergeben leicht andere Bereiche.",
      "Ein späterer Gapstoß über den gewachsenen Kanal kann dagegen zurückkehren und eine zweistufige Korrektur beginnen. Das sind zwei verschiedene Ausbruchsergebnisse im selben Chartfall. Vergleiche die jeweiligen Bars und ihren Anschluss, statt alle Ausdehnungen gleich zu behandeln."
    ],
    "takeaways": [
      "Mehrere starke Käuferbars nicht automatisch shorten.",
      "Spikehöhe mit bekannten Anfangs- und Endpunkten bestimmen.",
      "Späterer Gapfehlschlag ist eine eigene Phase."
    ],
    "callout": "Späterer Gapfehlschlag ist eine eigene Phase.",
    "prompt": "Ein Kaufclimax besteht aus mehreren kräftigen Bars mit Anschluss. Was ist sinnvoll?",
    "answers": [
      {
        "label": "Unmittelbar jede Kerze gegen den Trend handeln.",
        "explanation": "Das ignoriert die sichtbare Stärke."
      },
      {
        "label": "Die Spikeanker später je nach Ergebnis wechseln.",
        "explanation": "Das verfälscht die ursprüngliche Projektion."
      },
      {
        "label": "Eine Fortsetzung und mögliche Projektion offenhalten.",
        "explanation": "Richtig. Der Begriff bestätigt noch keine sofortige Umkehr."
      }
    ],
    "correct": 2
  },
  {
    "number": 40,
    "title": "Chartfall 15.5: Tieftests und ausweitendes Dreieck",
    "summary": "Tieftests können in eine größere Balance übergehen.",
    "section": "Chartfall 15.5 · Vertiefung",
    "scenario": "c15-40",
    "paragraphs": [
      "Nach einem Gegenbruch kann ein Rücklauf zum Durchschnitt mit einem zweiten Verkäuferversuch noch ein letztes Tief vorbereiten. Ein erneuter Tiefbereich kann anschließend in einer Range oder einem ausweitenden Dreieck liegen. Die Struktur ist inzwischen stärker zweiseitig.",
      "Ein oberer Dreieckstest kann nach einem extrem starken Käuferstoß scheitern als Gegenidee: Die erwartete obere Umkehr kommt nicht, und der Ausbruch hält. Ohne überzeugenden zweiten Verkäuferversuch wäre ein sofortiger Short gegen diesen Stoß früh.",
      "Die spätere zweistufige Seitwärtskorrektur zum Durchschnitt kann einen Ausbruchspullback bilden. Der Durchschnitt ist dabei eine Referenz, keine garantierte Unterstützung. Der Plan stützt sich auf die vorherige Käuferstärke und die Qualität der neuen Rücklaufbars."
    ],
    "takeaways": [
      "Tieftests können in eine größere Balance übergehen.",
      "Starker Dreiecksausbruch kann die Umkehridee widerlegen.",
      "Spätere Korrektur als neue Phase beurteilen."
    ],
    "callout": "Spätere Korrektur als neue Phase beurteilen.",
    "prompt": "Das obere ausweitende Dreieck bricht mit starken Käuferbars weiter aus. Was fehlt für einen Short?",
    "answers": [
      {
        "label": "Eine überzeugende Verkäuferreaktion statt nur des oberen Musternamens.",
        "explanation": "Richtig. Sichtbare Stärke muss ernst genommen werden."
      },
      {
        "label": "Ein Beweis, dass Dreiecke existieren.",
        "explanation": "Die Form kann vorhanden sein; ihre Auflösung ist offen."
      },
      {
        "label": "Ein sofort größerer Stop ohne neuen Plan.",
        "explanation": "Das löst die fehlende Auslösung nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 41,
    "title": "Chartfall 15.6: Wiederholte Hochtests stützen eine Bärenlinie",
    "summary": "Wiederholte Tests stützen die praktische Linienwahl.",
    "section": "Chartfall 15.6 · Konstruktion",
    "scenario": "c15-41",
    "paragraphs": [
      "Im sechsten Chartfall hält eine fallende Verbindung zweier Rücklaufhochs mehrere spätere Anstiege zurück. Wiederholte Tests zeigen, dass diese Referenz den aktuellen Bärenverlauf sinnvoll beschreibt. Die Linie ist damit eine beobachtete Ordnung, kein absolutes Preisgesetz.",
      "Eine Parallele wird an ein sichtbares Zwischentief verschoben und ergibt die untere Schubgrenze. Sie soll die vorherigen Verkäuferschübe einschließen. Ein späterer Ausbruch darunter kann eine weitere lokale Kanalhöhe als Projektionsstrecke vorbereiten.",
      "Mehrere alternative Linien aus anderen Ankern oder Chartarten können existieren. Du musst nicht jede davon verfolgen. Halte die für deinen Abschnitt sinnvollen Referenzen fest und prüfe die tatsächlichen Tests; eine große Anzahl Linien macht eine Order nicht automatisch besser."
    ],
    "takeaways": [
      "Wiederholte Tests stützen die praktische Linienwahl.",
      "Parallele an einem bekannten Tief verankern.",
      "Wenige begründete Referenzen genügen."
    ],
    "callout": "Wenige begründete Referenzen genügen.",
    "prompt": "Was liefert mehr Belege für eine brauchbare Bären-Trendlinie?",
    "answers": [
      {
        "label": "Alle denkbaren Varianten wurden gleichzeitig eingezeichnet.",
        "explanation": "Viele Linien ersetzen keine klare Auswahl."
      },
      {
        "label": "Mehrere spätere Rücklaufhochs reagieren an ihrem Bereich.",
        "explanation": "Richtig. Wiederholte Struktur stützt die Zeichnung."
      },
      {
        "label": "Die Linie wurde besonders lang gezogen.",
        "explanation": "Länge allein zeigt keine Relevanz."
      }
    ],
    "correct": 1
  },
  {
    "number": 42,
    "title": "Chartfall 15.6: Starke Rally zum oberen Bärenrand",
    "summary": "Starke Annäherung an den Rand ist nicht gleich neue Kontrolle.",
    "section": "Chartfall 15.6 · Vakuum",
    "scenario": "c15-42",
    "paragraphs": [
      "Ein kurzer kräftiger Käuferstoß kann die obere Trendseite eines Bärenkanals testen. Erfahrene Verkäufer warten möglicherweise auf diesen besseren Ort, während kurzfristige Käufer den schnellen Anstieg nutzen. Die starke Annäherung ändert die größere Bärenkontrolle noch nicht allein.",
      "Am Rand können Longgewinnmitnahmen und neue Shorts gemeinsam Verkäuferdruck ergeben. Im eigenen Beispiel folgt auf die schnelle Rally wieder ein Abwärtsabschnitt. Das ist eine beobachtete Folge; die konkreten Absichten einzelner Marktteilnehmer bleiben unbekannt.",
      "Unterscheide den Handel eines Rücklaufscalps von der Annahme eines neuen Bullentrends. Wer das letzte starke Käuferbild isoliert betrachtet, kann den Ort im Bärenkanal übersehen. Für einen Kontrollwechsel braucht es einen oberen Ausbruch mit überzeugendem Anschluss."
    ],
    "takeaways": [
      "Starke Annäherung an den Rand ist nicht gleich neue Kontrolle.",
      "Ort im größeren Kanal mitlesen.",
      "Motive als mögliche Erklärung, nicht als Gewissheit behandeln."
    ],
    "callout": "Motive als mögliche Erklärung, nicht als Gewissheit behandeln.",
    "prompt": "Warum bestätigt eine schnelle Rally zum Bärenkanalrand noch keinen Bullentrend?",
    "answers": [
      {
        "label": "Käuferbars können nie in einem Bärenkanal entstehen.",
        "explanation": "Gerade Rückläufe enthalten Käuferbars."
      },
      {
        "label": "Die Linien verraten alle institutionellen Orders.",
        "explanation": "Das lässt sich nicht aus der Zeichnung ablesen."
      },
      {
        "label": "Sie kann nur der Test eines fortbestehenden Verkäuferbereichs sein.",
        "explanation": "Richtig. Ein oberer Ausbruch mit Anschluss fehlt noch."
      }
    ],
    "correct": 2
  },
  {
    "number": 43,
    "title": "Chartfall 15.6: Später Tiefstoß und nächster Tagesbeginn",
    "summary": "Starke Verkäuferserie kann trotzdem spät im Verlauf liegen.",
    "section": "Chartfall 15.6 · Tagesentwicklung",
    "scenario": "c15-43",
    "paragraphs": [
      "Ein langer Verkäuferstoß mit großen Körpern, kleinen Tails und wenig Überlappung zeigt starke aktuelle Kontrolle. Er kann dennoch eine späte Überdehnung sein. Auf einer größeren Zeitebene erscheint derselbe Abschnitt als kräftiger Spike, ohne dass du die perfekte andere Zeitebene suchen musst.",
      "Im Chartfall wird die untere Kanalprojektion später überschritten, bevor der Kurs zurückkehrt. Nach der Rückkehr kann die obere Kanalseite zum Beobachtungsbereich werden. Eine große Käuferreaktion und eine spätere Range sind möglich, aber nicht aus dem alten Tiefstoß garantiert.",
      "Der Tagesbeginn davor enthält einen Doji nach kleinem Gap, eine spätere Low-2-Idee und einen Rücklauftest des früheren Auslösungsbereichs. Die verschiedenen Phasen brauchen eigene Pläne. Ein höherer Tageskontext ersetzt weder Signalqualität noch Verlustschutz der einzelnen Order."
    ],
    "takeaways": [
      "Starke Verkäuferserie kann trotzdem spät im Verlauf liegen.",
      "Projektionsüberschreitung und Rückkehr gesondert lesen.",
      "Eröffnung, Rücklauftest und Schlussstoß nicht vermischen."
    ],
    "callout": "Eröffnung, Rücklauftest und Schlussstoß nicht vermischen.",
    "prompt": "Zehn starke Verkäuferbars sind sichtbar. Was ist trotzdem offen?",
    "answers": [
      {
        "label": "Fortsetzungskanal oder spätere Erschöpfungsreaktion.",
        "explanation": "Richtig. Die Stärke ist real, aber der nächste Abschnitt noch unbekannt."
      },
      {
        "label": "Ein sofortiges Tief ist garantiert.",
        "explanation": "Überdehnung braucht eine tatsächliche Gegenreaktion."
      },
      {
        "label": "Ein weiterer Käuferbar wäre unmöglich.",
        "explanation": "Die Gegenseite kann jederzeit wieder stärker auftreten."
      }
    ],
    "correct": 0
  },
  {
    "number": 44,
    "title": "Chartfall 15.7: Aus dem größeren Tieftest entsteht Käuferkontrolle",
    "summary": "Größeren Tiefbereich und lokale Käuferreaktion zusammen lesen.",
    "section": "Chartfall 15.7 · Übergang",
    "scenario": "c15-44",
    "paragraphs": [
      "Im siebten Chartfall endet ein mehrteiliger Abwärtsrücklauf nahe einem früheren Tief einer größeren Zeitebene. Ein leichtes Unterschreiten kann Teil eines Doppeltiefbereichs sein. Der Ort wird interessant, wenn anschließend kräftige Käuferbars auftreten.",
      "Die neue Always-in-long-Einordnung kann sich bei verschiedenen Beobachtern erst nach dem ersten Anschluss, einem weiteren Käuferstoß oder dem oberen Ausbruch eines kleinen Dreiecks ergeben. Sie ist eine Schlussfolgerung aus Stärke, keine rückwirkende Tatsache am Tief selbst.",
      "Ein früherer Bärenverlauf darf nach dieser Veränderung nicht die ganze weitere Entscheidung dominieren. Prüfe die aktuellen Käuferabschnitte und Rückläufe. Ein höherer Kontextbereich lenkt Aufmerksamkeit, bestätigt aber noch keinen fertigen Long ohne lokale Reaktion."
    ],
    "takeaways": [
      "Größeren Tiefbereich und lokale Käuferreaktion zusammen lesen.",
      "Neue Kontrolle erst aus sichtbarem Anschluss ableiten.",
      "Den vergangenen Bärenverlauf nicht unbegrenzt fortschreiben."
    ],
    "callout": "Den vergangenen Bärenverlauf nicht unbegrenzt fortschreiben.",
    "prompt": "Ein größerer Doppeltiefbereich wird knapp unterschritten. Was macht daraus eine Käuferidee?",
    "answers": [
      {
        "label": "Der neue Bullentrend war schon vor dem Test sicher.",
        "explanation": "Das würde spätere Information vorwegnehmen."
      },
      {
        "label": "Eine passende lokale Käuferreaktion mit Anschluss.",
        "explanation": "Richtig. Der Ort allein genügt nicht."
      },
      {
        "label": "Die alte Marke zwingt den Kurs sofort nach oben.",
        "explanation": "Unterstützung kann auch brechen."
      }
    ],
    "correct": 1
  },
  {
    "number": 45,
    "title": "Chartfall 15.7: Viele schlechte Shorts sind normale Pullbacks",
    "summary": "Schwache Gegenmuster können normale Bullenflaggen sein.",
    "section": "Chartfall 15.7 · Trendkontrolle",
    "scenario": "c15-45",
    "paragraphs": [
      "Im neuen Bullenkanal sehen mehrere mögliche Verkaufssignale schwach aus. Sie können bloß kleine Bullenflaggen beginnen. Käufer wollen Rückläufe nutzen, während frühe Shorts nach deren Fehlschlag wieder kaufen müssen, um ihre Position zu schließen.",
      "Vergleiche die Größen der bisherigen Rückläufe als Referenz für den neuen Pullback. Ähnliche Rücklaufstrecken können eine wiederholte Ordnung zeigen, garantieren aber keine exakte Tickzahl. Ein konkreter Schutzbereich muss vor der Order feststehen.",
      "Für Anfänger bleibt die Auswahl eines klaren Trendsetups einfacher als die Jagd nach jedem kleinen Verkaufssignal. Nach einer echten klimaktischen Umkehr kann ein Gegenstoß mit anschließendem tieferem Hoch eine neue Shortidee liefern. Vorher bleibt die aktuelle Käuferkontrolle der wichtigste Kontext."
    ],
    "takeaways": [
      "Schwache Gegenmuster können normale Bullenflaggen sein.",
      "Bisherige Pullbackgrößen als Referenz nutzen.",
      "Echte Gegenstruktur vor Shortversuchen verlangen."
    ],
    "callout": "Echte Gegenstruktur vor Shortversuchen verlangen.",
    "prompt": "Warum wirken mehrere Shorts im engen Bullenkanal unüberzeugend?",
    "answers": [
      {
        "label": "Weil der alte Bärentrend zwingend sofort zurückkehren muss.",
        "explanation": "Der aktuelle Verlauf hat sich geändert."
      },
      {
        "label": "Weil alle Pullbacks exakt gleich lang sein müssen.",
        "explanation": "Ähnliche Größen sind eine Referenz, keine feste Regel."
      },
      {
        "label": "Die Bars können nur kurze Rücklaufphasen innerhalb der Käuferkontrolle zeigen.",
        "explanation": "Richtig. Ein Musternamen reicht nicht für einen Gegenplan."
      }
    ],
    "correct": 2
  },
  {
    "number": 46,
    "title": "Chartfall 15.7: Zweiseitiger breiterer Kanal und verschiedene Ausstiege",
    "summary": "Breitere Überlappung erlaubt andere Pläne als enger Trend.",
    "section": "Chartfall 15.7 · Gegenscalps",
    "scenario": "c15-46",
    "paragraphs": [
      "Wird der Bullenkanal breiter und enthält mehr Tails und Gegenkörper, handeln beide Seiten sichtbarer. Erfahrene Verkäufer können obere Rückkehrbereiche für kurze Gegenscalps betrachten. Das ist eine andere Idee als eine dauerhafte Umkehr des ganzen Trends.",
      "Ein Rücklauf kann gleichzeitig Shortgewinnmitnahmen und neue Longkäufe auslösen. Mögliche Referenzen sind der Durchschnitt, ein vorheriger Ausbruchspreis oder ein bekannter Swingbereich. Die gemeinsame Wirkung ist aus den Bars sichtbar, der genaue Anteil jeder Ordergruppe nicht.",
      "Stufenweise Gegenpositionen können einen Durchschnittspreis verbessern, erhöhen aber die Menge und das mögliche Gesamtrisiko. Die Erklärung hilft, zweiseitigen Handel zu verstehen. Sie rechtfertigt kein ungeplantes Ergänzen und ersetzt nicht den einfachen Anfängerplan in Trendrichtung."
    ],
    "takeaways": [
      "Breitere Überlappung erlaubt andere Pläne als enger Trend.",
      "Gegenscalp und große Umkehr unterscheiden.",
      "Mehrere Ordergründe können am gleichen Ort zusammenkommen."
    ],
    "callout": "Mehrere Ordergründe können am gleichen Ort zusammenkommen.",
    "prompt": "Ein Shortscalp endet am Durchschnitt, während neue Longs beginnen. Was ist plausibel?",
    "answers": [
      {
        "label": "Beide Ordergruppen können dort Kaufdruck liefern.",
        "explanation": "Richtig. Shortschließung und neuer Long sind Kauforders."
      },
      {
        "label": "Ein Gegenscalp beweist schon einen großen Bärentrend.",
        "explanation": "Er kann nur den Rücklauf handeln."
      },
      {
        "label": "Der genaue Anteil jeder Gruppe ist im Tail ablesbar.",
        "explanation": "Der Chart zeigt keine vollständige Aufteilung."
      }
    ],
    "correct": 0
  },
  {
    "number": 47,
    "title": "Chartfall 15.8: Stopbestätigung und Limitantizipation unterscheiden",
    "summary": "Stop wartet auf Auslösung, Limit nimmt Reaktion vorweg.",
    "section": "Chartfall 15.8 · Orderarten",
    "scenario": "c15-47",
    "paragraphs": [
      "Der achte Chartfall beginnt nach einem kräftigen Käuferstoß. Ein Stopkauf über einem Signalbar wartet auf eine Auslösung nach oben. Ein Limitkauf im Rücklauf nimmt eine mögliche Käuferreaktion dagegen schon vor ihrer Bestätigung vorweg.",
      "Beide Einstiegsarten können im Kanal vorkommen, beantworten aber verschiedene Fragen. Der Limitkäufer sucht einen günstigeren Ort und kann gegen weiterlaufenden Verkäuferdruck gefüllt werden. Der Stopkäufer zahlt eventuell höher und kann nach seiner Auslösung ebenfalls in einen Fehlschlag geraten.",
      "Eine Berührung garantiert zudem nicht jede Limitfüllung. Preis, verfügbare Ausführung und Reihenfolge sind getrennte Themen. Für jeden Plan müssen Verlustgrenze, Gesamtmenge und Zielraum feststehen. Die Darstellung erklärt die Logik und behauptet keine risikofreie Orderart."
    ],
    "takeaways": [
      "Stop wartet auf Auslösung, Limit nimmt Reaktion vorweg.",
      "Günstiger Preis und bestätigte Richtung sind verschieden.",
      "Beide Orderarten benötigen Verlustschutz."
    ],
    "callout": "Beide Orderarten benötigen Verlustschutz.",
    "prompt": "Was unterscheidet den Limitkauf im Rücklauf vom Stopkauf über dem Signalbar?",
    "answers": [
      {
        "label": "Jede Berührung garantiert unabhängig von Ausführung die Füllung.",
        "explanation": "Berührung und tatsächliche Ausführung sind nicht identisch."
      },
      {
        "label": "Er kann vor einer bestätigten Käuferauslösung gefüllt werden.",
        "explanation": "Richtig. Er antizipiert die Reaktion und trägt anderes Risiko."
      },
      {
        "label": "Er ist immer risikofrei.",
        "explanation": "Der Verkäuferdruck kann weiterlaufen."
      }
    ],
    "correct": 1
  },
  {
    "number": 48,
    "title": "Chartfall 15.8: Gemeinsamer Ausstieg nach zwei Longteilen",
    "summary": "Gemeinsamen Durchschnitt aus Preis und Menge berechnen.",
    "section": "Chartfall 15.8 · Positionsrechnung",
    "scenario": "c15-48",
    "paragraphs": [
      "Nach dem starken Spike können Käufer den Rücklauf in mehreren vorher geplanten Teilen nutzen. Zwei gleich große Longs bei 58 und 52 haben vor Kosten einen Durchschnitt von 55. Eine spätere Rückkehr zu 58 erlaubt einen gemeinsamen Ausstieg mit insgesamt positivem Bruttoresultat.",
      "Der erste Teil ist dort ausgeglichen, der zweite gewinnt sechs Einheiten pro Einheit Menge. Während der Rücklaufphase waren beide Positionen dennoch im Risiko. Ein Fall unter den geplanten gemeinsamen Schutzbereich kann einen größeren Gesamtverlust erzeugen.",
      "Solche Gewinnmitnahmen können wiederum Verkäuferdruck am Rückkehrbereich liefern. Eine Erklärung der möglichen Orders ist kein Beweis, dass jeder dortige Tail von genau diesen Käufern stammt. Halte Rechenbeispiel, sichtbare Bars und unbekannte Motive getrennt."
    ],
    "takeaways": [
      "Gemeinsamen Durchschnitt aus Preis und Menge berechnen.",
      "Ausgleich eines Teils ist nicht Ausgleich des Gesamtrisikos.",
      "Rückkehrgewinn ist ein mögliches Ergebnis, keine Rettungsgarantie."
    ],
    "callout": "Rückkehrgewinn ist ein mögliches Ergebnis, keine Rettungsgarantie.",
    "prompt": "Gleich große Longs bei 58 und 52: Wo liegt ihr Durchschnitt vor Kosten?",
    "answers": [
      {
        "label": "Bei 58, weil der erste Einstieg entscheidend bleibt.",
        "explanation": "Der zweite Teil verändert den Durchschnitt."
      },
      {
        "label": "Bei 52, weil die letzte Order alles ersetzt.",
        "explanation": "Beide Teile bleiben Teil der Position."
      },
      {
        "label": "Bei 55.",
        "explanation": "Richtig. Beide gleich großen Teile werden gleich gewichtet."
      }
    ],
    "correct": 2
  },
  {
    "number": 49,
    "title": "Chartfall 15.8: Mehrere Verkäuferbars schwächen den ersten Longversuch",
    "summary": "Starker Spike garantiert keinen erfolgreichen ersten Rücklaufkauf.",
    "section": "Chartfall 15.8 · Rücklaufstärke",
    "scenario": "c15-49",
    "paragraphs": [
      "Ein starker erster Spike stützt die Erwartung eines späteren Hochtests. Trotzdem können mehrere aufeinanderfolgende Verkäuferbars den ersten neuen Longversuch schwächen. Ein kleiner Doji im Rücklauf ist dann noch keine überzeugende Käuferkontrolle.",
      "Ein erster Anstieg kann scheitern, während Käufer auf eine zweistufige Korrektur warten. Erfahrene Verkäufer können den frühen Rücklaufanstieg für einen kurzen Gegenscalp betrachten; späterer Kaufdruck aus deren Gewinnmitnahmen und neuen Longs kann einen Tail am nächsten Tief erzeugen.",
      "Die Erwartung des Hochtests und die Qualität der aktuellen Auslösung bleiben getrennt. Ein Long kann mit guter größerer Idee trotzdem zu früh oder am unpassenden Ort entstehen. Verlange für deinen gewählten Einstieg die dazu passende lokale Reaktion."
    ],
    "takeaways": [
      "Starker Spike garantiert keinen erfolgreichen ersten Rücklaufkauf.",
      "Mehrere Gegenbars zeigen kurzfristiges Gegenmomentum.",
      "Große Idee und konkrete Auslösung getrennt prüfen."
    ],
    "callout": "Große Idee und konkrete Auslösung getrennt prüfen.",
    "prompt": "Starker Käufer-Spike, danach vier Verkäuferbars und ein kleiner Doji: Was ist offen?",
    "answers": [
      {
        "label": "Der erste neue Longversuch kann noch scheitern.",
        "explanation": "Richtig. Kurzfristiges Gegenmomentum bleibt sichtbar."
      },
      {
        "label": "Jeder Kauf ist wegen des alten Spikes sicher.",
        "explanation": "Der konkrete Einstieg kann trotzdem zu früh sein."
      },
      {
        "label": "Ein Hochtest ist als Möglichkeit für immer ausgeschlossen.",
        "explanation": "Die größere Käuferidee kann nach weiterer Korrektur wieder relevant werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 50,
    "title": "Chartfall 15.8: Doppelhoch und Zweibar-Umkehr richtig auslösen",
    "summary": "Bei Zweibar-Umkehr beide Tiefpunkte berücksichtigen.",
    "section": "Chartfall 15.8 · Fallen",
    "scenario": "c15-50",
    "paragraphs": [
      "Ein Hochtest kann ein Doppelhoch und eine Zweibar-Umkehr bilden. Für deren untere Auslösung ist der tiefere Tiefpunkt der beiden Bars die vollständigere Referenz. Nur unter den Tiefpunkt des Verkäuferbars zu gehen kann die gesamte Zweibarstruktur noch nicht verlassen haben.",
      "Fällt der Kurs nur kurz unter den Verkäuferbar und dreht oberhalb des anderen Tiefpunkts zurück, können frühe Shorts in einer kleinen Falle sitzen. Im eigenen Beispiel werden die beiden Tiefreferenzen deshalb getrennt markiert.",
      "Eine spätere vollständige Auslösung kann das Fallenrisiko verringern, aber nicht beseitigen. Nach dem starken ursprünglichen Käuferstoß kann der Verlauf weiterhin in eine Range oder einen Bullenkanal übergehen. Ein Doppelhoch ist noch kein sicherer neuer Bärentrend."
    ],
    "takeaways": [
      "Bei Zweibar-Umkehr beide Tiefpunkte berücksichtigen.",
      "Nur ein Tief zu brechen kann eine frühe Falle erzeugen.",
      "Vollständige Auslösung garantiert noch keine große Umkehr."
    ],
    "callout": "Vollständige Auslösung garantiert noch keine große Umkehr.",
    "prompt": "Welche untere Referenz berücksichtigt die ganze Zweibar-Umkehr?",
    "answers": [
      {
        "label": "Ein beliebiger Preis in der Chartmitte.",
        "explanation": "Die Referenz muss zur konkreten Struktur gehören."
      },
      {
        "label": "Der tiefere Tiefpunkt beider Bars.",
        "explanation": "Richtig. Erst darunter ist die gesamte Zweibarstruktur verlassen."
      },
      {
        "label": "Immer nur das Tief des zweiten Bars.",
        "explanation": "Das andere Tief kann tiefer liegen und noch nicht gebrochen sein."
      }
    ],
    "correct": 1
  },
  {
    "number": 51,
    "title": "Chartfall 15.8: Tieferes Hoch oder entstehender Bullenkanal?",
    "summary": "Zwei Strukturideen vor der Auslösung offenhalten.",
    "section": "Chartfall 15.8 · Neue Kontrolle",
    "scenario": "c15-51",
    "paragraphs": [
      "Nach einem erneuten Abwärtsabschnitt kann ein schwacher Anstieg als tieferes Hoch eines neuen Bärenkanals oder als Anfang des nächsten Käuferabschnitts gelesen werden. Beide Deutungen sind möglich, solange die anschließende Auslösung noch offen ist.",
      "Scheitert ein Shortversuch rasch und dreht der Kurs über den Einstiegsbar zurück, stützt das die Käuferidee. Shorts müssen möglicherweise schließen, während neue Käufer eintreten. Ein späterer Bullenkanal erklärt dann die weiteren kurzen Pullbacks.",
      "Das Ergebnis macht die vorherige Unsicherheit nicht ungültig. Notiere vor dem Test, welche Verkäuferfolge den Bärenplan und welche Rückkehr den Käuferplan stützen würde. Ein antizipierter Limitkauf unter einem schwachen Shortsignal trägt anderes Risiko als der spätere bestätigte Fehlschlag."
    ],
    "takeaways": [
      "Zwei Strukturideen vor der Auslösung offenhalten.",
      "Gescheiterter Short kann Käuferkontrolle stützen.",
      "Antizipation und bestätigter Fehlschlag sind verschiedene Einstiege."
    ],
    "callout": "Antizipation und bestätigter Fehlschlag sind verschiedene Einstiege.",
    "prompt": "Ein Shortversuch kehrt rasch über seinen Einstiegsbar zurück. Was ist neue Information?",
    "answers": [
      {
        "label": "Die ursprüngliche Unsicherheit war nie vorhanden.",
        "explanation": "Vor der Rückkehr waren beide Folgen möglich."
      },
      {
        "label": "Jeder frühe Limitkauf war dadurch ohne Risiko.",
        "explanation": "Er trug das Risiko vor der Bestätigung."
      },
      {
        "label": "Die Verkäufer konnten die Auslösung nicht halten.",
        "explanation": "Richtig. Das kann die konkurrierende Käuferidee stützen."
      }
    ],
    "correct": 2
  },
  {
    "number": 52,
    "title": "Chartfall 15.8: Beide Seiten handeln, Kontrolle und Plan bleiben getrennt",
    "summary": "Gegenscalps und Trendpläne können gleichzeitig bestehen.",
    "section": "Chartfall 15.8 · Abschluss",
    "scenario": "c15-52",
    "paragraphs": [
      "Im breiteren Kanal können Käufer Rückläufe unter vorherige Bartiefs nutzen, während Verkäufer obere Swingtests für Gegenscalps betrachten. In einer Bärenphase gilt die entsprechende Spiegelung. Verschiedene Pläne können gleichzeitig Orders an derselben Struktur erzeugen.",
      "Ein starker oberer Ausbruch, der einem Käufer zunächst Gewinn ermöglicht, zeigt lokale Stärke. Liegt der Tag überwiegend in einer Range, muss diese Stärke aber nicht dauerhaft fortsetzen. Ein profitabler Teilabschnitt ist kein Beweis für einen ganzen neuen Trendtag.",
      "Fasse deinen Plan vor jeder Übung in drei Aussagen: Welcher Kanal und Kontext gelten? Welche sichtbare Auslösung handle ich? Wo endet die Idee mit festgelegtem Geldrisiko? Nach neuer Information darf die Einordnung wechseln; alte Stops und Anker werden nicht rückwirkend umgeschrieben."
    ],
    "takeaways": [
      "Gegenscalps und Trendpläne können gleichzeitig bestehen.",
      "Lokaler Ausbruchsgewinn beweist keine dauerhafte Fortsetzung.",
      "Kontext, Auslösung und Geldrisiko vorab festhalten."
    ],
    "callout": "Kontext, Auslösung und Geldrisiko vorab festhalten.",
    "prompt": "Ein oberer Ausbruch bringt kurz Gewinn, aber der Tag bleibt eine Range. Was ist korrekt?",
    "answers": [
      {
        "label": "Lokale Stärke kann vorhanden sein, ohne einen dauerhaften Trend zu bestätigen.",
        "explanation": "Richtig. Der größere Kontext bleibt relevant."
      },
      {
        "label": "Jeder profitable Ausbruch macht den ganzen Tag zum Trendtag.",
        "explanation": "Ein Teilabschnitt legt die spätere Tagesform nicht fest."
      },
      {
        "label": "Die bisherigen Grenzen dürfen nach dem Ergebnis heimlich geändert werden.",
        "explanation": "Die damalige Entscheidungsgrundlage muss überprüfbar bleiben."
      }
    ],
    "correct": 0
  }
];

export const chapterFifteenLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-15-${number}`;
  return {
    id: `price-action-trends.chapter-15.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 15 · ${d.section}`,
    sourceAnchors: [`Kapitel 15 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 15 · Kanäle',
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
