import type { ChapterNineteenScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterNineteenScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Trendstärke: mehrere Beobachtungen zusammen lesen",
    "summary": "Stärke beschreibt Kontrolle, noch keine sichere Order.",
    "section": "Grundlagen",
    "scenario": "c19-01",
    "paragraphs": [
      "Ein starker Trend gewinnt in seiner Richtung viel Raum und gibt vergleichsweise wenig zurück. Schon bevor die ganze Tagesstrecke sichtbar ist, können gerichtete Bars, kleine Rückläufe und scheiternde Gegenversuche diese Lesart stützen.",
      "Mehrere passende Merkmale helfen bei der Einordnung. Sie sind aber häufig voneinander abhängig: Kleine Rückläufe und geringe Überlappung beschreiben teilweise dieselbe Bewegung. Eine lange Merkmalliste ist deshalb keine gemessene Gewinnwahrscheinlichkeit.",
      "Prüfe anschließend einen konkreten Einstieg mit Preis, Verlustgrenze, Menge und Halteabsicht. Eine starke Richtung kann einen weiten Schutzabstand verlangen. Auch eine kleine Position am Markt braucht einen vollständigen Plan; flat bleibt möglich."
    ],
    "callout": "Stärke ersetzt keine Risikorechnung.",
    "takeaways": [
      "Kontrolle aus dem bisherigen Verlauf ableiten.",
      "Überlappende Merkmale nicht als unabhängige Beweise zählen.",
      "Stärke ersetzt keine Risikorechnung."
    ],
    "prompt": "Was liefert eine passende Sammlung von Stärkemerkmalen?",
    "answers": [
      {
        "label": "Eine begründete Arbeitshypothese über die aktuelle Kontrolle.",
        "explanation": "Richtig. Der konkrete Trade bleibt gesondert zu planen."
      },
      {
        "label": "Eine exakte garantierte Trefferquote.",
        "explanation": "Die Merkmale sind keine solche Messung."
      },
      {
        "label": "Die Erlaubnis für unbegrenzte Menge.",
        "explanation": "Das zulässige Geldrisiko bleibt begrenzt."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Großes Eröffnungsgap: Richtung braucht Anschluss",
    "summary": "Der Abstand zum Vortag ist nur der erste Schritt.",
    "section": "Preisstruktur",
    "scenario": "c19-02",
    "paragraphs": [
      "Ein großes Gap setzt den neuen Tageshandel deutlich oberhalb oder unterhalb des vorherigen Abschnitts fort. Bleibt der Sprung bestehen und entwickelt sich gerichteter Anschluss, kann das zu einem starken Trendtag passen.",
      "Wird das Gap früh kräftig zurückgenommen, ist die ursprüngliche Lesart schwächer. Ein Sprung nach oben allein garantiert weder einen Bullentag noch einen Schluss nahe dem Tageshoch. Das endgültige heutige Hoch und Tief sind am Start noch unbekannt.",
      "Benenne die Vergleichspunkte: vorheriger Schluss, neuer Eröffnungspreis und anschließende Bars. Bei einer anderen Sessioneinteilung kann der sichtbare Eröffnungsabstand anders aussehen. Verwende die im Chart dargestellte Sitzung nachvollziehbar."
    ],
    "callout": "Eröffnung legt den Tagesschluss nicht fest.",
    "takeaways": [
      "Gap mit einem bekannten vorherigen Preis vergleichen.",
      "Anschluss und frühe Rücknahme unterscheiden.",
      "Eröffnung legt den Tagesschluss nicht fest."
    ],
    "prompt": "Welche Folge stützt die ursprüngliche Gaprichtung?",
    "answers": [
      {
        "label": "Nur das Wissen um den endgültigen Tagesgewinn.",
        "explanation": "Dieses Ergebnis war am Start noch nicht verfügbar."
      },
      {
        "label": "Das Gap bleibt bestehen und gerichtete Folgebars gewinnen weiteren Raum.",
        "explanation": "Richtig. Die neuen Bars ergänzen den Sprung."
      },
      {
        "label": "Eine kräftige frühe Rückkehr durch den ganzen Abstand.",
        "explanation": "Das schwächt eher die erste Lesart."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Gerichtete Swings: Hochs und Tiefs im Verhältnis",
    "summary": "Einzelne Barfarben ersetzen keine Swingstruktur.",
    "section": "Preisstruktur",
    "scenario": "c19-03",
    "paragraphs": [
      "Im Bullenverlauf werden größere Hochs und Tiefs höher, im Bärenverlauf tiefer. Das zeigt, dass die Trendseite nach Rückläufen wieder Anschluss findet. Der Vergleich braucht benannte Swingpunkte derselben Größe.",
      "Ein lokales tieferes Tief innerhalb eines Pullbacks kann trotzdem weit über dem größeren Ursprungstief liegen. Diese Größen dürfen nicht vermischt werden. Ein bestätigter Bruch des letzten größeren höheren Tiefs hat anderes Gewicht als ein kleiner Barbruch.",
      "Markiere die Punkte erst, wenn ihre Reaktionen sichtbar sind. Im Replay darf ein später fertiges Swingtief nicht schon vorher als bekannt gelten. Die Trendlesart wird mit neuen bestätigten Swings aktualisiert."
    ],
    "callout": "Swingbestätigung braucht sichtbare Folge.",
    "takeaways": [
      "Swings derselben Größe vergleichen.",
      "Lokale und größere Bezugspunkte trennen.",
      "Swingbestätigung braucht sichtbare Folge."
    ],
    "prompt": "Was stützt eine gerichtete Bullen-Swingstruktur?",
    "answers": [
      {
        "label": "Ein beliebiger grüner Bar in einer breiten Range.",
        "explanation": "Daraus folgt noch keine gerichtete Swingstruktur."
      },
      {
        "label": "Das spätere Tagestief schon vor seiner Entstehung.",
        "explanation": "Das wäre Rückschauwissen."
      },
      {
        "label": "Höhere Hochs und höhere Tiefs derselben betrachteten Größe.",
        "explanation": "Richtig. Beide Seiten der Folge arbeiten auf höheren Preisen."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Viele Körper mit der Trendrichtung",
    "summary": "Nicht jeder Bar muss dieselbe Farbe haben.",
    "section": "Barqualität",
    "scenario": "c19-04",
    "paragraphs": [
      "Eine Folge überwiegend gerichteter Körper mit der größeren Richtung zeigt wiederholten Raumgewinn. Im Bullenfall schließen viele Bars über ihrem Open, im Bärenfall darunter. Die Größe ihrer Rückgabe und ihrer Tails ergänzt die Farbe.",
      "Einige Gegenbars oder Dojis schließen einen starken Trend nicht aus. Prüfe, ob diese Bars einen größeren Gegenabschnitt eröffnen oder nur kleine Pausen bleiben. Das Ergebnis der Gegenversuche ist oft wichtiger als ihr auffälliges Aussehen.",
      "Vergleiche die ganze Folge statt nur den größten Bar. Ein einzelner kräftiger Käuferbar in einem Bärenverlauf kann ohne Folge wieder verkauft werden. Dann bleibt er ein lokaler Gegenversuch im größeren Trend."
    ],
    "callout": "Ein einzelner großer Bar bestimmt die Kontrolle nicht allein.",
    "takeaways": [
      "Gerichtete Körper in einer Folge beurteilen.",
      "Gegenbars brauchen Anschluss für größere Bedeutung.",
      "Ein einzelner großer Bar bestimmt die Kontrolle nicht allein."
    ],
    "prompt": "Kann ein starker Bärentrend grüne Bars enthalten?",
    "answers": [
      {
        "label": "Ja, wenn ihre Gegenbewegungen klein bleiben und die Verkäufer weiter Anschluss finden.",
        "explanation": "Richtig. Die Folge zählt mehr als eine einzelne Farbe."
      },
      {
        "label": "Nein, jede grüne Kerze beendet ihn endgültig.",
        "explanation": "Damit würde lokale Farbe mit großer Kontrolle verwechselt."
      },
      {
        "label": "Ja, daher sind alle grünen Bars sichere Käufe.",
        "explanation": "Die Gegenbewegung kann scheitern."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Wenig Körperüberlappung: Preis wird kaum zurückgegeben",
    "summary": "Kerzenkörper und ganze Barspanne unterscheiden.",
    "section": "Barqualität",
    "scenario": "c19-05",
    "paragraphs": [
      "Körper liegen zwischen Open und Close. Wenn aufeinanderfolgende Körper kaum überlappen, bleibt der gerichtete Raumgewinn weitgehend erhalten. Die Tails können trotzdem bis in den vorherigen Bar reichen.",
      "In einer starken Käuferfolge liegt das neue Tief mitunter nahe am vorherigen Schluss. Ein tieferes Limitangebot erhält dann wenig oder gar keinen Preisbesuch. Im Bärenfall wird die Lage an den Hochs gespiegelt.",
      "Wenig Körperüberlappung ist etwas anderes als eine vollständig leere Preiszone zwischen ganzen Bars. Beschreibe beide Geometrien getrennt. Eine knappe Preisberührung beweist außerdem noch keine reale Limitfüllung."
    ],
    "callout": "Preisbesuch und tatsächliche Füllung trennen.",
    "takeaways": [
      "Körperüberlappung aus Open und Close bestimmen.",
      "Tails können weiter zurückreichen.",
      "Preisbesuch und tatsächliche Füllung trennen."
    ],
    "prompt": "Können Körper kaum überlappen, obwohl die ganzen Bars überlappen?",
    "answers": [
      {
        "label": "Ja, dann ist jede Limitfüllung garantiert.",
        "explanation": "Dafür fehlen unter anderem Ausführungsdaten."
      },
      {
        "label": "Ja, wenn die Tails in den vorherigen Bar reichen.",
        "explanation": "Richtig. Körper und volle Handelsspanne sind verschieden."
      },
      {
        "label": "Nein, ein Tail gehört nicht zum Bar.",
        "explanation": "Er gehört zur vollen Spanne, aber nicht zum Körper."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Kleine Tails: Dringlichkeit in beiden Richtungen",
    "summary": "Open und Close nahe den Extrempunkten lesen.",
    "section": "Barqualität",
    "scenario": "c19-06",
    "paragraphs": [
      "Ein Käuferbar, der nahe am Tief öffnet und nahe am Hoch schließt, gibt innerhalb des Bars wenig Raum zurück. Das passt zu anhaltendem Kaufdruck. Ein Verkäuferbar wird spiegelbildlich nahe dem Hoch eröffnet und nahe dem Tief geschlossen.",
      "Die Beobachtung kann als Dringlichkeit interpretiert werden. Aus OHLC-Daten lässt sich aber nicht ablesen, welche einzelne Marktgruppe mit welchen Absichten gehandelt hat. Beschreibe zuerst die sichtbaren Preise.",
      "Eine Folge solcher Bars hat mehr Gewicht als ein einzelner Bar ohne Tail. Nach langer Beschleunigung kann derselbe auffällige Körper auch zu einem möglichen Klimax gehören. Die Phase bleibt ein Teil der Einordnung."
    ],
    "callout": "Kleine Tails allein liefern keinen fertigen Trade.",
    "takeaways": [
      "Open und Close relativ zur ganzen Spanne prüfen.",
      "Dringlichkeit ist eine Interpretation der Preise.",
      "Kleine Tails allein liefern keinen fertigen Trade."
    ],
    "prompt": "Welche Käuferkerze zeigt wenig interne Rückgabe?",
    "answers": [
      {
        "label": "Kleiner Körper mitten zwischen langen Tails.",
        "explanation": "Das zeigt mehr Handel in beide Richtungen."
      },
      {
        "label": "Nur ein hoher Preis ohne Open und Close.",
        "explanation": "Damit lässt sich die Körperqualität nicht beurteilen."
      },
      {
        "label": "Open nahe am Tief und Close nahe am Hoch.",
        "explanation": "Richtig. Der Körper füllt dann einen großen Teil der Spanne."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Körpergap ist kein voller Preisgap",
    "summary": "Ein Open über dem vorherigen Schluss kann trotzdem Barüberlappung haben.",
    "section": "Gap-Arten",
    "scenario": "c19-07",
    "paragraphs": [
      "Ein Körpergap entsteht beispielsweise, wenn ein Käuferbar oberhalb des vorherigen Schlusses eröffnet und sein Körper darüber bleibt. Zwischen den Körpern liegt ein Abstand. Ein unterer Tail des neuen Bars kann trotzdem in die alte Handelsspanne zurücklaufen.",
      "Ein voller Bar-Gap verlangt dagegen, dass die gesamte neue Spanne oberhalb der vorherigen liegt. Im Bärenfall werden beide Definitionen gespiegelt. Das Wort Gap sollte deshalb immer mit der gemeinten Art verbunden werden.",
      "Im Beispiel liegt der alte Schluss bei 40, das neue Open bei 43 und das neue Tief bei 39. Die Körper können getrennt sein, die ganze Barspanne ist es nicht. Diese Geometrie ist unabhängig davon, ob später ein Trade gewinnt."
    ],
    "callout": "Ein zurückreichender Tail kann den vollen Gap verhindern.",
    "takeaways": [
      "Körperabstand und Spannenabstand getrennt prüfen.",
      "Gap-Art ausdrücklich benennen.",
      "Ein zurückreichender Tail kann den vollen Gap verhindern."
    ],
    "prompt": "Was liegt bei altem Close 40, neuem Open 43 und neuem Tief 39 vor?",
    "answers": [
      {
        "label": "Ein möglicher Körpergap, aber kein voller Abstand der Barspannen.",
        "explanation": "Richtig. Das neue Tief reicht unter den alten Schluss zurück."
      },
      {
        "label": "Zwingend eine komplett unberührte Preiszone.",
        "explanation": "Der Tail handelt bereits darin."
      },
      {
        "label": "Eine garantierte Ausbruchslücke bis zum Tagesschluss.",
        "explanation": "Die spätere Folge ist unbekannt."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Kräftiger Ausbruchsbar: funktionaler Gap-Gedanke",
    "summary": "Ein Trendbar kann die Handelslage verschieben, ohne leere Tickzone.",
    "section": "Gap-Arten",
    "scenario": "c19-08",
    "paragraphs": [
      "Ein starker Trendbar kann den Markt aus einer bisherigen Balance in einen neuen Preisbereich bewegen. Die alte Zone wird im Anschluss kaum erneut gehandelt. In diesem funktionalen Sinn kann der Bar wie eine Ausbruchslücke wirken.",
      "Das ist keine Behauptung, dass zwischen seinem Open und Close keine Umsätze stattgefunden haben. Die Preise innerhalb des Körpers wurden im Chart gerade durchlaufen. Der Begriff beschreibt hier die Verschiebung und den anschließenden Abstand zum alten Bereich.",
      "Prüfe deshalb den nächsten Rücktest. Wenn er tief in die alte Balance zurückläuft, ist die einfache Abstandslesart geschwächt. Wenn der neue Handel darüber bleibt, ist die Verschiebung klarer erhalten."
    ],
    "callout": "Späteren Rücktest beobachten.",
    "takeaways": [
      "Trendbar kann die Handelslage stark verschieben.",
      "Funktionaler Gap ist keine zwingend leere Tickzone.",
      "Späteren Rücktest beobachten."
    ],
    "prompt": "Was meint der funktionale Gap-Gedanke beim kräftigen Trendbar?",
    "answers": [
      {
        "label": "Dass Rücktests ab jetzt unmöglich sind.",
        "explanation": "Der Markt kann die alte Zone erneut prüfen."
      },
      {
        "label": "Eine starke Verschiebung aus dem alten Bereich mit wenig späterer Rückkehr.",
        "explanation": "Richtig. Es geht um die Wirkung der Folge."
      },
      {
        "label": "Dass im ganzen Kerzenkörper nie gehandelt wurde.",
        "explanation": "Das lässt sich daraus nicht ableiten."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Measuring-Gap: Rücktest hält Abstand zum Ausbruchspunkt",
    "summary": "Der benannte Bezugspunkt entscheidet über die Geometrie.",
    "section": "Gap-Arten",
    "scenario": "c19-09",
    "paragraphs": [
      "Nach dem Ausbruch über einen bekannten Preisbereich kann ein Rücklauf darüber bleiben. Im Beispiel liegt der Ausbruchspunkt bei 50 und das spätere Pullbacktief bei 54. Zwischen Referenz und Test bleibt ein Abstand.",
      "Das wird hier als Measuring-Gap geprüft: Die Gegenseite schafft keine vollständige Rückkehr zum benannten Ausbruchspunkt. Ein tieferer späterer Test kann diesen Abstand schließen. Der Trend muss deswegen nicht automatisch sofort enden.",
      "Aus der Form allein wird kein exaktes Kursziel abgeleitet. Benenne erst den Referenzpreis, dann die Testspanne und den erhaltenen Abstand. Ein festes Gewinnziel wäre eine zusätzliche, gesondert zu begründende Regel."
    ],
    "callout": "Gap-Form allein garantiert kein Ziel.",
    "takeaways": [
      "Referenz und Testpreis konkret nennen.",
      "Erhaltener Abstand zeigt fehlende vollständige Rückgabe.",
      "Gap-Form allein garantiert kein Ziel."
    ],
    "prompt": "Wie groß ist der erhaltene Abstand zwischen Ausbruchspunkt 50 und Testtief 54?",
    "answers": [
      {
        "label": "Null, weil jedes Pullback ein vollständiger Test ist.",
        "explanation": "Dieses Tief erreicht den benannten Punkt nicht."
      },
      {
        "label": "Ein garantierter späterer Gewinn von vier.",
        "explanation": "Geometrischer Abstand und Tradegewinn sind verschieden."
      },
      {
        "label": "Vier Preiseinheiten.",
        "explanation": "Richtig. Der Test bleibt darüber."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Mikro-Measuring-Gap über drei Bars",
    "summary": "Den Bar davor und danach vergleichen.",
    "section": "Gap-Arten",
    "scenario": "c19-10",
    "paragraphs": [
      "Ein kräftiger Käuferbar kann zwischen zwei Bars liegen, deren Spannen sich nicht überschneiden. Vergleiche das Hoch des Bars davor mit dem Tief des Bars danach. Bleibt das neue Tief darüber, ist ein kleiner Abstand erhalten.",
      "Im Beispiel hat der erste Bar ein Hoch von 40, der kräftige Mittelbar bewegt deutlich nach oben und der dritte Bar ein Tief von 42. Zwischen den äußeren Bars bleiben zwei Einheiten. Der Mittelbar selbst hat in diesem Bereich gehandelt.",
      "Eine exakte Berührung bei 40 beschreibt die Grenzvariante ohne offenen numerischen Abstand; ein Tief darunter bedeutet Überlappung. Im Bärenfall werden Tief davor und Hoch danach verglichen. Alle Varianten brauchen die größere Trendlesart."
    ],
    "callout": "Mittelbar handelt durch den Vergleichsbereich.",
    "takeaways": [
      "Die äußeren Bars um den kräftigen Mittelbar vergleichen.",
      "Strikter Abstand, Berührung und Überlappung unterscheiden.",
      "Mittelbar handelt durch den Vergleichsbereich."
    ],
    "prompt": "Welche Preise werden im Bullenfall direkt verglichen?",
    "answers": [
      {
        "label": "Hoch vor dem kräftigen Bar und Tief nach ihm.",
        "explanation": "Richtig. Der kleine Abstand liegt zwischen diesen äußeren Bars."
      },
      {
        "label": "Nur Open und Close des Mittelbars.",
        "explanation": "Diese definieren nicht die gezeigte äußere Geometrie."
      },
      {
        "label": "Die endgültigen Tagesextreme vor der Eröffnung.",
        "explanation": "Diese sind zu diesem Zeitpunkt unbekannt."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Ruhige Beharrlichkeit statt dauernder Klimaxe",
    "summary": "Große Trends können aus vielen kleinen Bars entstehen.",
    "section": "Verlauf und Rückgabe",
    "scenario": "c19-11",
    "paragraphs": [
      "Ein Trend muss nicht ständig riesige Körper produzieren. Viele kleine Bars und Dojis können gemeinsam stetig höher oder tiefer arbeiten, wenn die Gegenseite nur wenig Raum gewinnt. Die große Strecke entsteht dann aus der Folge.",
      "Wiederholte sehr große Schübe, abrupte Spitzen und tiefe Gegenbewegungen zeigen eine andere Lage. Eine mögliche Klimaxphase verlangt mehr Aufmerksamkeit für größere Korrekturen. Der größte Bar kann sogar gegen den Trend gerichtet sein und trotzdem ohne Folge scheitern.",
      "Vergleiche Bargrößen mit dem vorherigen Abschnitt. Vermeide die Gleichsetzung ruhig gleich schwach oder groß gleich sicher. Richtung, Rückgabe und Anschluss müssen zusammenpassen."
    ],
    "callout": "Bargröße allein bestimmt die Kontrolle nicht.",
    "takeaways": [
      "Kleine Bars können eine große Strecke bilden.",
      "Wiederholte Klimaxe sind eine andere Phase.",
      "Bargröße allein bestimmt die Kontrolle nicht."
    ],
    "prompt": "Kann eine ruhige Folge aus kleinen Bars stark gerichtet sein?",
    "answers": [
      {
        "label": "Ja, deshalb endet sie garantiert erst am Tagesschluss.",
        "explanation": "Die Folge kann später schwächer werden."
      },
      {
        "label": "Ja, wenn sie stetig Raum gewinnt und wenig zurückgibt.",
        "explanation": "Richtig. Die gemeinsame Folge trägt den Trend."
      },
      {
        "label": "Nein, nur der größte einzelne Bar zählt.",
        "explanation": "Damit würde die längere Struktur übersehen."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Kleine Kanalüberschreitung, seitliche Pause",
    "summary": "Eine äußere Grenzverletzung braucht ihre Folge.",
    "section": "Verlauf und Rückgabe",
    "scenario": "c19-12",
    "paragraphs": [
      "Eine kleine Überschreitung der äußeren Kanalgrenze kann in einem starken Trend lediglich eine seitliche Pause eröffnen. Die Gegenseite gewinnt dabei kaum gerichteten Raum. Nach der Pause kann die Trendseite weiterarbeiten.",
      "Ein großer Überschuss mit kräftiger anschließender Gegenfolge wäre anders zu bewerten. Es kommt nicht nur auf das Tick jenseits der Linie an, sondern auf Umfang und Reaktion. Die Linie muss schon vor dem Test aus bekannten Punkten begründet sein.",
      "Benenne die äußere Schubgrenze. Sie ist nicht die innere Trendseite. Eine Pause nach ihrem Test beweist weder eine neue große Umkehr noch eine garantierte Fortsetzung."
    ],
    "callout": "Grenztest und Bestätigung getrennt lesen.",
    "takeaways": [
      "Äußere Grenze und Trendseite unterscheiden.",
      "Kleine Überschreitung mit seitlicher Folge anders als starker Rückschlag.",
      "Grenztest und Bestätigung getrennt lesen."
    ],
    "prompt": "Was stützt die Lesart einer bloßen kleinen Pause?",
    "answers": [
      {
        "label": "Mehrere große Gegenbars mit weiterem Anschluss.",
        "explanation": "Diese liefern deutlichere Gegenstärke."
      },
      {
        "label": "Nur das Wort Kanal im Titel.",
        "explanation": "Eine Bezeichnung ersetzt den Verlauf nicht."
      },
      {
        "label": "Nach dem äußeren Test bleibt die Folge seitlich und gibt wenig Raum zurück.",
        "explanation": "Richtig. Große Gegenkontrolle wird dadurch noch nicht sichtbar."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Trendlinienbruch mit Seitwärtsfolge",
    "summary": "Ein Bruch kann Zeitkorrektur statt großer Preisumkehr sein.",
    "section": "Verlauf und Rückgabe",
    "scenario": "c19-13",
    "paragraphs": [
      "Wenn eine steigende Trendlinie verletzt wird und der Markt anschließend vor allem seitlich bleibt, verliert die Folge ihre ursprüngliche Steilheit. Die Verkäufer gewinnen aber möglicherweise noch keine große Abwärtsstrecke.",
      "Das kann als Zeitkorrektur gelesen werden: Die Bewegung wartet, statt viel Preis zurückzugeben. Mehrere große Bars gegen den Trend wären ein anderes Signal. Ein einzelner Linienbruch beantwortet diese Frage noch nicht.",
      "Halte die alte Linie für den Vergleich sichtbar. Eine nachträglich neu gezeichnete flachere Linie darf die Verletzung nicht verdecken. Beschreibe die neue Lage und ihre Unsicherheit mit den tatsächlich sichtbaren Bars."
    ],
    "callout": "Alte Linie für den Vergleich erhalten.",
    "takeaways": [
      "Bruch kann die Steilheit verändern.",
      "Seitwärtsfolge zeigt weniger Gegenraum als gerichtete Rückgabe.",
      "Alte Linie für den Vergleich erhalten."
    ],
    "prompt": "Was ist nach dem Linienbruch zu prüfen?",
    "answers": [
      {
        "label": "Ob die Folge seitlich bleibt oder gerichteten Gegenraum gewinnt.",
        "explanation": "Richtig. Die Folge bestimmt die Bedeutung des Bruchs."
      },
      {
        "label": "Ob die Linie automatisch jeden Preis erklärt.",
        "explanation": "Eine Linie kann die Lage nicht festlegen."
      },
      {
        "label": "Ob man den alten Bruch heimlich wegzeichnen kann.",
        "explanation": "Dann wäre die Beobachtung nicht nachvollziehbar."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Scheiternde Keile und andere Umkehrversuche",
    "summary": "Gut erkennbare Form bedeutet nicht erfolgreiche Umkehr.",
    "section": "Gegenversuche",
    "scenario": "c19-14",
    "paragraphs": [
      "Ein dritter Schub oder eine Keilform kann eine Gegenidee vorbereiten. Im starken größeren Trend kann der Versuch jedoch keine Folge erhalten. Eine erneute Trendreaktion macht den lokalen Umkehrversuch zum möglichen Fehlschlag.",
      "Der neue Einstieg mit dem Trend wird erst nach einer benannten Auslösung geprüft. Das ist ein anderer Auftrag als der frühere Gegentrade. Eine gemeinsame Preiszone kann sowohl Gegentrader zum Ausstieg als auch Trendtrader zum Einstieg veranlassen; die tatsächlichen Beteiligten bleiben im OHLC-Chart unsichtbar.",
      "Scheiternde Gegenversuche liefern Hinweise auf die weiter bestehende Kontrolle. Sie erlauben keine unbeschränkte Order. Ein später starker Gegenversuch kann die Lesart verändern."
    ],
    "callout": "Order und Ausstieg haben getrennte Pläne.",
    "takeaways": [
      "Form und tatsächlicher Gegenanschluss unterscheiden.",
      "Fehlschlag braucht eine neue sichtbare Trendreaktion.",
      "Order und Ausstieg haben getrennte Pläne."
    ],
    "prompt": "Was macht einen Keil-Umkehrversuch zum möglichen Fehlschlag?",
    "answers": [
      {
        "label": "Dass jede gezeichnete Spitze sicher gekauft wird.",
        "explanation": "Dafür fehlt eine allgemeine Grundlage."
      },
      {
        "label": "Fehlender Gegenanschluss und erneute Auslösung mit dem größeren Trend.",
        "explanation": "Richtig. Die Folge widerspricht der Umkehrhypothese."
      },
      {
        "label": "Nur die Zahl drei im Namen.",
        "explanation": "Die Zählung entscheidet nicht über das Ergebnis."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Zwanzig Bars getrennt vom Durchschnitt",
    "summary": "Die ganze Barspanne muss die Linie meiden.",
    "section": "Durchschnitt und Dauer",
    "scenario": "c19-15",
    "paragraphs": [
      "Eine Folge von zwanzig oder mehr Bars ohne Durchschnittsberührung zeigt einen lange gerichteten Abschnitt. Im Bullenfall liegen selbst die Tiefs über der Linie, im Bärenfall die Hochs darunter. Nur passende Schlusskurse reichen für dieses Merkmal nicht.",
      "Die verstrichene Zeit hängt von der Zeitebene ab. Zwanzig Fünf-Minuten-Bars entsprechen hundert Minuten. Der spätere erste Kontakt wird im Zusammenhang mit dieser Vorgeschichte geprüft, nicht als isolierter Kauf- oder Verkaufspreis.",
      "Die Linie im Diagramm wird aus synthetischen Schlusskursen berechnet. Die Barzahl liefert keine universelle Trefferquote. Ein Kontakt kann Trendfortsetzung, größere Pause oder Kontextwechsel eröffnen."
    ],
    "callout": "Erster Kontakt bleibt ergebnisoffen.",
    "takeaways": [
      "Volle Spanne statt nur Schlusskurse vergleichen.",
      "Barzahl mit der Chartdauer verbinden.",
      "Erster Kontakt bleibt ergebnisoffen."
    ],
    "prompt": "Was muss für einen Bullen-Gap-Bar über dem Durchschnitt gelten?",
    "answers": [
      {
        "label": "Nur der Schluss liegt darüber, der Tail darf weit darunter sein.",
        "explanation": "Dann wäre die ganze Spanne nicht getrennt."
      },
      {
        "label": "Der nächste Bar muss garantiert gewinnen.",
        "explanation": "Die spätere Folge ist unbekannt."
      },
      {
        "label": "Das gesamte Bartief liegt über der Durchschnittslinie.",
        "explanation": "Richtig. Der Bar berührt sie dann nicht."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Wenig Raum für Gegentrades",
    "summary": "Auffällige Gegenbars können rasch zurückgenommen werden.",
    "section": "Gegenversuche",
    "scenario": "c19-16",
    "paragraphs": [
      "In einer starken Folge erhalten viele Gegenversuche nur kleinen Zielraum. Ein optisch kräftiger Umkehrbar kann kurz reagieren und dann wieder in die Trendrichtung abgelöst werden. Die mögliche Bewegung ist dabei etwas anderes als der sichere Gewinn einer konkreten Order.",
      "Im Replay kannst du vorher festgelegte Gegenziele und Schutzabstände prüfen. Wenn die Ziele regelmäßig nicht erreicht werden und neue Trendextreme folgen, spricht das gegen die angenommene große Gegenkontrolle.",
      "Aus dem Beispiel wird kein allgemeines Verbot jedes Gegentrades abgeleitet. Der Schwerpunkt dieser Übung bleibt bei der größeren Richtung. Ein eigener Gegentrendplan braucht erkennbare Gegenstärke, ausführbare Regeln und gesonderte Auswertung."
    ],
    "callout": "Gegenidee braucht eigene belastbare Regeln.",
    "takeaways": [
      "Gegenform und tatsächlich erreichter Raum unterscheiden.",
      "Vorher festgelegte Ziele statt perfekte Rückschau prüfen.",
      "Gegenidee braucht eigene belastbare Regeln."
    ],
    "prompt": "Warum kann ein schöner Umkehrbar im Trend wenig helfen?",
    "answers": [
      {
        "label": "Weil seine Gegenbewegung kaum Anschluss oder Zielraum erhält.",
        "explanation": "Richtig. Die Folge kann ihn rasch zurücknehmen."
      },
      {
        "label": "Weil Gegenbars grundsätzlich nicht existieren.",
        "explanation": "Sie sind gerade sichtbar."
      },
      {
        "label": "Weil jede Kerzenform ihren Gewinn schon festlegt.",
        "explanation": "Der Ausgang entsteht erst in der Folge."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Kleine seltene Pullbacks und gefühlte Dringlichkeit",
    "summary": "Die erhoffte tiefe Rückgabe kann lange ausbleiben.",
    "section": "Verlauf und Rückgabe",
    "scenario": "c19-17",
    "paragraphs": [
      "Ein starker Verlauf kann über viele Bars nur kurze, überwiegend seitliche Pausen enthalten. Wer auf einen großen sauberen Pullback wartet, sieht den Markt weiterlaufen. Dieses Gefühl von Dringlichkeit ist eine Folge der beobachteten kleinen Rückgabe.",
      "Vergleiche die Rückläufe mit der aktuellen Bewegung statt mit historischen Punktwerten. Ein bisher kleiner Pullback begrenzt den nächsten nicht. Gegenstärke und Tagesphase können sich ändern.",
      "Der Wunsch, noch dabei zu sein, ist kein Ersatz für einen Auftrag. Prüfe einen beherrschten Einstieg samt Verlustgrenze und Menge. Ein verpasster Trend ist weiterhin besser dokumentiert als ein nachträglich erfundener Plan."
    ],
    "callout": "Dringlichkeit nicht mit Orderpflicht verwechseln.",
    "takeaways": [
      "Rücklaufgröße relativ zum aktuellen Verlauf lesen.",
      "Frühere Rückgaben sind keine festen Grenzen.",
      "Dringlichkeit nicht mit Orderpflicht verwechseln."
    ],
    "prompt": "Was folgt aus langem Warten auf einen tieferen Pullback?",
    "answers": [
      {
        "label": "Dass der nächste Pullback nie größer sein kann.",
        "explanation": "Die Marktphase kann wechseln."
      },
      {
        "label": "Dass die Rückgabe bisher klein war; ein neuer Einstieg bleibt separat zu planen.",
        "explanation": "Richtig. Das Gefühl ersetzt die Entscheidung nicht."
      },
      {
        "label": "Dass das erlaubte Risiko automatisch wächst.",
        "explanation": "Das Budget bleibt unabhängig vom Gefühl."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Starker Trend, starkes oder schwaches Signal",
    "summary": "Signalqualität und größere Kontrolle sind verschiedene Ebenen.",
    "section": "Barqualität",
    "scenario": "c19-18",
    "paragraphs": [
      "Ein Pullback kann einen klaren Käufer- oder Verkäufer-Umkehrbar mit der Trendrichtung liefern. Das macht den lokalen Auslöser leichter erkennbar. Ein High-2- oder Low-2-Plan benötigt dennoch eine sinnvolle Zählung und ausreichend Raum.",
      "In sehr beharrlichen Trends bleiben die Signalbars häufig unscheinbar oder sogar gegenfarbig. Im Bärenfall kann ein kleiner Käuferbar das Signal vor einer Sell-Stop-Auslösung sein; der Auslösebar kann als Outside-Down-Bar beide Seiten des Signals überschreiten.",
      "Ein schwaches Signal beweist weder einen schwachen Trend noch einen guten Einstieg. Eine große Richtung kann fortbestehen, während die vertraute Signalform fehlt. Prüfe beides getrennt, statt aus der späteren Tagesstrecke jede kleine Form als sicher darzustellen."
    ],
    "callout": "Outside-Auslösung ist nicht automatisch zuverlässiger.",
    "takeaways": [
      "Lokale Signalqualität und große Kontrolle trennen.",
      "Gegenfarbiger Signalbar kann zur Trendauslösung gehören.",
      "Outside-Auslösung ist nicht automatisch zuverlässiger."
    ],
    "prompt": "Kann ein Low-2-Verkaufssignal einen kleinen grünen Signalbar haben?",
    "answers": [
      {
        "label": "Nein, ein Verkaufsauftrag verlangt ausschließlich rote Bars.",
        "explanation": "Die Farbe allein bestimmt die Versuchszählung nicht."
      },
      {
        "label": "Ja, das garantiert dann den Gewinn.",
        "explanation": "Der konkrete Einstieg bleibt ungewiss."
      },
      {
        "label": "Ja, wenn die spätere Abwärtsauslösung im passenden Bärenkontext geprüft wird.",
        "explanation": "Richtig. Signalbarfarbe und Richtung des Auftrags sind verschieden."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Trendende Schlusskurse, Körper und Extrempunkte",
    "summary": "Nicht nur ein einziges Merkmal verfolgen.",
    "section": "Preisstruktur",
    "scenario": "c19-19",
    "paragraphs": [
      "Eine Folge kann an mehreren Preismerkmalen gerichtet sein: Schlusskurse werden höher, Körper verschieben sich oder lokale Hochs und Tiefs wandern. Diese Beobachtungen müssen nicht auf jedem einzelnen Bar gleichzeitig auftreten.",
      "Einige überlappende Bars können in einem größeren gerichteten Verlauf liegen. Umgekehrt können steigende Schlusskurse nur einen kleinen Gegenabschnitt im Bärenkontext bilden. Benenne Zeitraum und betrachtete Größe.",
      "Verwende die Merkmale als Beschreibungen statt als starre Punktzahl. Mehrere gerichtete Eigenschaften derselben Bars liefern keine voneinander unabhängigen Messungen. Die nächste größere Gegenfolge kann die Hypothese verändern."
    ],
    "callout": "Gemeinsame Daten nicht mehrfach als unabhängige Beweise werten.",
    "takeaways": [
      "Mehrere Preismerkmale können Richtung zeigen.",
      "Zeitraum und Größe ausdrücklich benennen.",
      "Gemeinsame Daten nicht mehrfach als unabhängige Beweise werten."
    ],
    "prompt": "Warum reichen drei steigende Schlusskurse allein nicht für einen großen Bullentag?",
    "answers": [
      {
        "label": "Weil sie auch ein kleiner Gegenabschnitt im größeren Bärenverlauf sein können.",
        "explanation": "Richtig. Der Zeitraum und Kontext fehlen sonst."
      },
      {
        "label": "Weil Schlusskurse keine Preise sind.",
        "explanation": "Sie sind ein wichtiges Merkmal des Bars."
      },
      {
        "label": "Weil dadurch die Hochs der Zukunft bekannt werden.",
        "explanation": "Die spätere Folge bleibt offen."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Wiederholte zweibeinige Rückläufe",
    "summary": "Gegenbewegungen können fortlaufend Trendflaggen bilden.",
    "section": "Gegenversuche",
    "scenario": "c19-20",
    "paragraphs": [
      "Ein Pullback kann aus einem ersten Gegenbein, einer Zwischenreaktion und einem zweiten Gegenbein bestehen. Wenn die größere Trendseite danach wieder Anschluss findet, wird er als mögliche Trendflagge gelesen.",
      "Wiederholt sich diese Folge, gewinnt die Trendlesart zusätzliche sichtbare Unterstützung. Das nächste zweite Bein kann trotzdem tiefer werden oder in eine Range übergehen. Wiederholung ist kein Beweis einer unendlichen Fortsetzung.",
      "Zähle die Beine anhand von Bewegung und Unterbrechung, nicht allein anhand zweier gleichfarbiger Bars. Lege für jedes Signal fest, welcher Preis tatsächlich ausgelöst werden müsste und wann die Flaggenidee beendet wird."
    ],
    "callout": "Nächster Pullback bleibt widerlegbar.",
    "takeaways": [
      "Beine durch Gegenreaktion trennen.",
      "Wiederholung kann die Trendlesart stützen.",
      "Nächster Pullback bleibt widerlegbar."
    ],
    "prompt": "Was trennt die beiden Gegenbeine?",
    "answers": [
      {
        "label": "Die Sicherheit des zweiten Gewinns.",
        "explanation": "Die Zählung liefert keine solche Sicherheit."
      },
      {
        "label": "Eine erkennbare Zwischenreaktion.",
        "explanation": "Richtig. Zwei gleichfarbige Bars können sonst nur ein Bein bilden."
      },
      {
        "label": "Nur ein anderes Farbschema der App.",
        "explanation": "Das verändert die Preisfolge nicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Keine zwei gerichteten Gegenschlüsse am Durchschnitt",
    "summary": "Ein Einzelkontakt hat anderes Gewicht als Gegenanschluss.",
    "section": "Durchschnitt und Dauer",
    "scenario": "c19-21",
    "paragraphs": [
      "In einem Bullenverlauf kann der Markt nur kurz unter den Durchschnitt schließen und rasch zurückkehren. Zwei aufeinanderfolgende gerichtete Verkäuferbars mit Schluss darunter würden mehr Gegenstärke liefern. Im Bärenfall wird die Prüfung gespiegelt.",
      "Unterscheide diese Schlussprüfung von der Folge vollständig getrennter Gap-Bars. Ein Bar kann die Linie mit seinem Tail berühren und trotzdem auf der Trendseite schließen. Ein Doji ist zudem nicht dasselbe wie ein ausgeprägter Gegen-Trendbar.",
      "Die Regel ist ein Kontextmerkmal, kein universeller Regime-Schalter. Vergleiche die tatsächliche Größe, Schlusslage und Folge. Ein zweiter Gegenschluss kann die Hypothese schwächen, ohne schon den ganzen Gegentrend zu beweisen."
    ],
    "callout": "Zwei Gegenschlüsse liefern neue Information, keine Garantie.",
    "takeaways": [
      "Schlusslage und vollständige Trennung sind verschieden.",
      "Gerichtete Gegenbars anders als Dojis bewerten.",
      "Zwei Gegenschlüsse liefern neue Information, keine Garantie."
    ],
    "prompt": "Warum sind zwei gerichtete Gegenschlüsse aussagekräftiger als ein kurzer einzelner Kontakt?",
    "answers": [
      {
        "label": "Weil jeder Tail schon zwei Bars zählt.",
        "explanation": "Barzahl und Tail sind verschiedene Dinge."
      },
      {
        "label": "Weil der Durchschnitt die Richtung vorschreibt.",
        "explanation": "Die Linie beschreibt vergangene Preise."
      },
      {
        "label": "Weil sie mehr fortgesetzten Handel auf der Gegenseite zeigen.",
        "explanation": "Richtig. Der Anschluss ergänzt den ersten Übertritt."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Mehrere Preisbarrieren werden deutlich überwunden",
    "summary": "Distanz und Anschluss statt bloßer Berührung beobachten.",
    "section": "Preisstruktur",
    "scenario": "c19-22",
    "paragraphs": [
      "Ein Trend kann nacheinander den Durchschnitt, frühere Swingpreise und eine alte Gegen-Trendlinie überwinden. Wenn die Bars jeweils deutlich außerhalb schließen und weiterarbeiten, gewinnt die neue Richtung sichtbar Raum.",
      "Ein einzelnes Tick über einer Referenz liefert weniger Information als kräftiger Anschluss. Die überwundenen Bereiche können später zu Pullbackreferenzen werden. Eine tiefe Rückkehr durch mehrere dieser Bereiche schwächt die einfache Fortsetzungsidee.",
      "Die Barrieren sind oft aus denselben Preisen abgeleitet. Ihre Zahl wird deshalb nicht als mathematische Beweiszahl verwendet. Notiere die konkrete Folge und den Bezugspunkt jeder Prüfung."
    ],
    "callout": "Referenzen aus denselben Daten sind nicht unabhängig.",
    "takeaways": [
      "Mehrere Referenzen mit wirklichem Anschluss prüfen.",
      "Späterer Rücktest kann eine andere Rolle erhalten.",
      "Referenzen aus denselben Daten sind nicht unabhängig."
    ],
    "prompt": "Was stützt die neue Richtung nach einem Levelbruch?",
    "answers": [
      {
        "label": "Deutliche Schlusslage außerhalb und weitere gerichtete Folge.",
        "explanation": "Richtig. Der Anschluss ergänzt die Grenzverletzung."
      },
      {
        "label": "Nur die Anzahl farbiger Linien.",
        "explanation": "Sie sagt noch nichts über die tatsächliche Reaktion."
      },
      {
        "label": "Ein einzelnes Tick ohne weitere Daten als Garantie.",
        "explanation": "Die Folge bleibt dabei offen."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Gegenspike wird zur Flagge",
    "summary": "Kräftiger Gegenbar ohne Fortsetzung muss neu eingeordnet werden.",
    "section": "Gegenversuche",
    "scenario": "c19-23",
    "paragraphs": [
      "Ein schneller Gegenstoß kann zunächst nach einer großen Umkehr aussehen. Wenn die Gegenseite danach kaum weiterkommt und die größere Trendseite zurückkehrt, bleibt der Spike ein Pullback im übergeordneten Verlauf.",
      "Der Abschnitt kann eine zweibeinige Flagge entwickeln: zuerst der Gegenstoß, dann eine kurze Zwischenbewegung und ein weiterer kleiner Gegenversuch. Die ursprüngliche Trendrichtung wird danach über einen eigenen Auslöser geprüft.",
      "Der Name Flagge wird nicht schon beim ersten Gegenbar als Gewissheit vergeben. Halte die beiden möglichen Folgen offen: fehlender Anschluss mit Rückkehr oder kräftige weitere Gegenstärke mit größerem Wechsel."
    ],
    "callout": "Neue Trendauslösung gesondert planen.",
    "takeaways": [
      "Gegenspike und Folge getrennt lesen.",
      "Fehlender Gegenanschluss kann Flaggenlesart stützen.",
      "Neue Trendauslösung gesondert planen."
    ],
    "prompt": "Was spricht gegen die erste große Umkehrthese?",
    "answers": [
      {
        "label": "Dass Pullbacks im Chart benannt werden können.",
        "explanation": "Eine Bezeichnung allein entscheidet nicht."
      },
      {
        "label": "Der Gegenspike erhält keinen Anschluss und die Trendseite kehrt zurück.",
        "explanation": "Richtig. Die Folge schwächt die ursprüngliche Gegenidee."
      },
      {
        "label": "Nur dass der Gegenbar groß war.",
        "explanation": "Seine Größe war gerade der Anlass zur Umkehrprüfung."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Schneller Trend: kleinere Zeitebene kann mehr Stress bringen",
    "summary": "Mehr sichtbare Pausen sind nicht automatisch bessere Entscheidungen.",
    "section": "Beobachtungsplan",
    "scenario": "c19-24",
    "paragraphs": [
      "In einer schnellen Trendfolge kann eine kleinere Zeitebene zusätzliche Insidebar- oder Ein-Bar-Pausen zeigen. Dadurch entstehen mehr lokale Einstiegsprüfungen. Die größere Kontrolle ändert sich durch den Ansichtswechsel nicht automatisch.",
      "Gleichzeitig steigt das Tempo der nötigen Entscheidungen. Sehr kleine Charts zeigen mehr Gegenformen, die vom Hauptplan ablenken können. Das kann insbesondere beim gleichzeitigen Halten eines Swingrests und Prüfen neuer Tranchen die Übersicht erschweren.",
      "Lege eine feste Kontext- und Ausführungsebene für die Übung fest. Ein Wechsel wird bewusst begründet und verändert weder das alte Risiko noch den bisherigen Verlauf. Mehr sichtbare Signale bedeuten keine Pflicht, alle zu handeln."
    ],
    "callout": "Ansichtswechsel erhöht kein Risikobudget.",
    "takeaways": [
      "Kleinere Ebene zeigt mehr lokale Formen.",
      "Mehr Tempo und Gegenformen können die Entscheidung erschweren.",
      "Ansichtswechsel erhöht kein Risikobudget."
    ],
    "prompt": "Was ist ein möglicher Nachteil der kleineren Zeitebene?",
    "answers": [
      {
        "label": "Dass die ursprüngliche Preisfolge verschwinden muss.",
        "explanation": "Die Ansichten verwenden dieselben zugrunde liegenden Preise."
      },
      {
        "label": "Dass jede Pause nun garantiert gewinnt.",
        "explanation": "Die kleinere Darstellung liefert keine solche Sicherheit."
      },
      {
        "label": "Mehr Entscheidungstempo und zusätzliche ablenkende Gegenformen.",
        "explanation": "Richtig. Mehr Details sind nicht automatisch hilfreicher."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Stärkemerkmale verschwinden: Trend wird zweiseitig",
    "summary": "Die Rolle neuer Extreme kann sich verändern.",
    "section": "Kontextwechsel",
    "scenario": "c19-25",
    "paragraphs": [
      "Mit der Zeit können Pullbacks größer werden, Körper mehr überlappen und Gegenbars stärkeren Anschluss erhalten. Neue Hochs werden im Bullenfall häufiger zur Gewinnmitnahme statt zur sofortigen Ergänzung genutzt.",
      "Ein anfänglicher Spike kann in einen breiteren Kanal und später in eine Range übergehen. Das ist eine mögliche Entwicklung, keine feste Uhrzeitregel. Die alten Stärkemerkmale werden mit dem neuen Abschnitt verglichen.",
      "Aktualisiere Ziele, Orderlogik und Halteabsicht nach sichtbaren Gründen. Der frühe Trendplan wird dadurch nicht rückwirkend gelöscht. Ausstieg und automatischer Wechsel in die Gegenposition bleiben getrennte Entscheidungen."
    ],
    "callout": "Kontextwechsel begründet neue Prüfung statt automatische Umkehr.",
    "takeaways": [
      "Nachlassende Merkmale im aktuellen Verlauf erkennen.",
      "Rolle alter Hochs und Tiefs kann sich verändern.",
      "Kontextwechsel begründet neue Prüfung statt automatische Umkehr."
    ],
    "prompt": "Was schwächt die frühe einseitige Lesart?",
    "answers": [
      {
        "label": "Größere Rückgabe, mehr Überlappung und Gegenanschluss.",
        "explanation": "Richtig. Das sind neue sichtbare Veränderungen."
      },
      {
        "label": "Nur der Ablauf einer willkürlichen Minute.",
        "explanation": "Die Preisfolge ist entscheidend."
      },
      {
        "label": "Die Tatsache, dass früher ein Trend bestand.",
        "explanation": "Die Vorgeschichte allein legt die neue Phase nicht fest."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Großes Gap, früher Hochbruch und Eröffnungstest",
    "summary": "Ein früher Fehlausbruch kann Teil des Gap-Tages bleiben.",
    "section": "Chartfall 19.1 · Eröffnung",
    "scenario": "c19-26",
    "paragraphs": [
      "Der erste Tagesfall springt über einen bereits bekannten Vortagsbereich. Ein früher Käuferausbruch wird kurz unter einem Verkäufer-Insidebar zurückgenommen. Diese lokale Rückkehr beendet die größere Gap-Lesart noch nicht automatisch.",
      "Der Markt prüft den Eröffnungstiefbereich und bildet eine mögliche kleine Doppeltief-Bullenflagge. Die enge Eröffnungsspanne lässt einen späteren Ausbruch in beide Richtungen offen. Die Gaprichtung ergänzt die Hypothese, ersetzt aber keine Auslösung.",
      "Ein früher Kauf nach der Tiefreaktion und ein später Stop über dem Eröffnungshoch kennen unterschiedlich viele Bars. Wähle eine Variante mit eigenem Schutzplan. Der später sichtbare Trendtag war am ersten Test noch nicht bekannt."
    ],
    "callout": "Früher und späterer Einstieg verwenden verschiedene Daten.",
    "takeaways": [
      "Lokalen frühen Fehlausbruch im Gapkontext lesen.",
      "Eröffnungstest kann eine Doppeltief-Prüfung liefern.",
      "Früher und späterer Einstieg verwenden verschiedene Daten."
    ],
    "prompt": "Was bleibt nach dem lokalen frühen Fehlausbruch zu prüfen?",
    "answers": [
      {
        "label": "Ob der endgültige Tagesschluss schon feststeht.",
        "explanation": "Dieser liegt noch in der Zukunft."
      },
      {
        "label": "Ob der Eröffnungsbereich hält und später gerichteter Anschluss entsteht.",
        "explanation": "Richtig. Der ganze Tageskontext ist noch offen."
      },
      {
        "label": "Dass der Gap-Tag bereits garantiert beendet ist.",
        "explanation": "Ein lokaler Fehlschlag entscheidet nicht den ganzen Tag."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Zwei Beine können in wenigen Bars stecken",
    "summary": "Tail und Barfolge müssen zur betrachteten Größe passen.",
    "section": "Chartfall 19.1 · Eröffnung",
    "scenario": "c19-27",
    "paragraphs": [
      "Der Eröffnungsrücklauf besteht aus zwei Abwärtsbeinen. Auf der gröberen Ansicht kann ein Teil der Zwischenreaktion nur als Tail eines Bars erscheinen. Die OHLC-Hülle allein zeigt die Reihenfolge innerhalb dieses Bars nicht vollständig.",
      "Ein kleinerer synthetischer Chart legt die einzelnen Bewegungen offen: erster Abwärtsabschnitt, Zwischenanstieg, zweiter Abwärtsabschnitt. Erst daraus wird die zweibeinige Lesart nachvollziehbar. Die größere Ansicht wird aus genau diesen Einzelbars zusammengefasst.",
      "Leite nicht jede gewünschte Innensequenz aus einem Tail ab. Wenn du nur einen OHLC-Bar hast, ist die konkrete Reihenfolge darin ungewiss. Der kleinere Verlauf ergänzt Daten; er wird nicht nachträglich frei erfunden."
    ],
    "callout": "Aggregation muss dieselbe Einzelbarfolge verwenden.",
    "takeaways": [
      "Gröbere Bars können Zwischenbewegungen verdecken.",
      "OHLC allein verrät nicht jede Intrabar-Reihenfolge.",
      "Aggregation muss dieselbe Einzelbarfolge verwenden."
    ],
    "prompt": "Warum hilft hier die kleinere Ansicht?",
    "answers": [
      {
        "label": "Weil jeder Tail automatisch dieselbe Reihenfolge garantiert.",
        "explanation": "OHLC-Daten allein reichen dafür nicht."
      },
      {
        "label": "Weil die alten Preise in der kleineren Ansicht anders werden.",
        "explanation": "Es wird dieselbe Folge detaillierter dargestellt."
      },
      {
        "label": "Sie zeigt die tatsächliche synthetische Reihenfolge der beiden Beine und der Zwischenreaktion.",
        "explanation": "Richtig. Die grobe Hülle zeigt nicht jeden Zwischenschritt."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Früher High 1 nach starker Käuferfolge",
    "summary": "Ein kleiner Gegenbruch ist kein gleichwertiger Shortplan.",
    "section": "Chartfall 19.1 · Frühe Stärke",
    "scenario": "c19-28",
    "paragraphs": [
      "Nach mehreren kräftigen Käuferbars entsteht der erste kleine Rücklauf. Die erneute Auslösung nach oben kann als High 1 mit der größeren Kontrolle geprüft werden. Der vorherige Abwärtsbruch einer engen Linie liefert dagegen nur ein lokales Gegensignal.",
      "Eine lokale Abwärtsauslösung ist damit nicht automatisch ein handelbarer Low-1-Shortplan. Versuchszählung, Kontext und geplanter Auftrag sind getrennte Dinge. Für eine große Gegenposition fehlt bislang ein überzeugender vorheriger Verkäuferabschnitt.",
      "Die frühe Spikephase ist außerdem anders als ein später Klimax. Prüfe den konkreten Preisabstand zum Schutz und bleibe bei einer beherrschten Variante. Ein starkes Bild rechtfertigt keine Pflichtorder."
    ],
    "callout": "Versuchsname und ausführbarer Plan unterscheiden.",
    "takeaways": [
      "High 1 im frischen Spike mit der Kontrolle prüfen.",
      "Lokaler Gegenbruch ist noch kein fertiger Gegentrade.",
      "Versuchsname und ausführbarer Plan unterscheiden."
    ],
    "prompt": "Warum wird der erste kleine Abwärtsbruch hier nicht als gleichwertiger großer Shortplan behandelt?",
    "answers": [
      {
        "label": "Weil die größere Käuferstärke bislang kaum widerlegt ist.",
        "explanation": "Richtig. Der lokale Bruch liefert noch wenig Gegenkontrolle."
      },
      {
        "label": "Weil rote Bars in Aufwärtstrends nie vorkommen.",
        "explanation": "Eine kleine Gegenbewegung ist gerade sichtbar."
      },
      {
        "label": "Weil High 1 immer ohne Schutz gehandelt werden muss.",
        "explanation": "Der Schutz gehört weiterhin zum Auftrag."
      }
    ],
    "correct": 0
  },
  {
    "number": 29,
    "title": "Zweiter Gegenversuch und Verkäufer-Spike",
    "summary": "Ein weiterer kleiner Gegenabschnitt kann noch eine Flagge sein.",
    "section": "Chartfall 19.1 · Gegenbewegung",
    "scenario": "c19-29",
    "paragraphs": [
      "Ein zweiter lokaler Gegenversuch besitzt mehr Struktur als der erste einzelne Bruch. Sein Auslösebar kann kräftig gegen den Bullenverlauf gerichtet sein. Trotzdem fehlt möglicherweise ein größerer vorheriger Trendbruch für eine weit reichende Umkehrthese.",
      "Nach einem Verkäufer-Spike ist ein weiterer Gegenabschnitt plausibel. Im starken Bullenkontext kann daraus schon eine zweibeinige Bullenflagge statt eines langen Bärenkanals entstehen. Die tatsächliche Folge muss beobachtet werden.",
      "Ein kurzer Gegentrade und eine große Swing-Umkehr sind verschiedene Pläne. In dieser Übung bleibt die Trendfortsetzung der Hauptfokus; ein Gegenspike wird nicht allein wegen seiner Größe zum neuen dominanten Tagestrend erklärt."
    ],
    "callout": "Lokaler Gegenauftrag und großer Wechsel trennen.",
    "takeaways": [
      "Zweiter Gegenversuch hat Struktur, aber keine Gewinngarantie.",
      "Gegenspike kann mit einem weiteren Bein eine Flagge bilden.",
      "Lokaler Gegenauftrag und großer Wechsel trennen."
    ],
    "prompt": "Was ist nach dem kräftigen Verkäufer-Spike möglich?",
    "answers": [
      {
        "label": "Keine weitere Bewegung irgendeiner Richtung.",
        "explanation": "Das wäre ebenfalls keine begründete Annahme."
      },
      {
        "label": "Ein weiteres Gegenbein innerhalb einer Bullenflagge.",
        "explanation": "Richtig. Der größere Trend kann weiterhin tragen."
      },
      {
        "label": "Nur ein sicherer kompletter Bärentag.",
        "explanation": "Die Folge kann viel kleiner bleiben."
      }
    ],
    "correct": 1
  },
  {
    "number": 30,
    "title": "Sechs enge Bars: Ausbrüche können rasch scheitern",
    "summary": "Kleine lokale Range im größeren Bullenverlauf lesen.",
    "section": "Chartfall 19.1 · Gegenbewegung",
    "scenario": "c19-30",
    "paragraphs": [
      "Nach dem Gegenstoß können mehrere enge Bars eine kleine Range bilden. Ein lokaler zweiter Shortversuch bricht darunter, erhält aber nur begrenzten Raum. Die enge Überlappung beeinflusst beide Ausbruchsrichtungen.",
      "Ein vorher festgelegtes großes Gegenziel passt dann möglicherweise schlecht zum erreichbaren Raum. Das gilt ebenso für einen unbestätigten Käuferausbruch, der kurz darauf in die kleine Balance zurückkehrt.",
      "Benenne die Größe der Range und die größere Käuferkontrolle separat. Sechs Bars sind hier eine Eigenschaft des synthetischen Abschnitts, keine universelle Anzahl für alle Ausbruchsfehlschläge."
    ],
    "callout": "Lokale Range und großer Trend können gleichzeitig bestehen.",
    "takeaways": [
      "Enge lokale Balance beeinflusst beide Seiten.",
      "Zielraum vom tatsächlichen Auslöser prüfen.",
      "Lokale Range und großer Trend können gleichzeitig bestehen."
    ],
    "prompt": "Warum kann der lokale Short trotz zweitem Signal wenig Raum haben?",
    "answers": [
      {
        "label": "Weil die Zahl zwei jede Marktreaktion verbietet.",
        "explanation": "Sie beschreibt nur die Versuchszählung."
      },
      {
        "label": "Weil die größere Bullenfolge rückwirkend gelöscht wird.",
        "explanation": "Sie bleibt der Kontext."
      },
      {
        "label": "Weil er aus einer engen überlappenden Range ausbricht.",
        "explanation": "Richtig. Die kleine Balance kann die Folge begrenzen."
      }
    ],
    "correct": 2
  },
  {
    "number": 31,
    "title": "Erster Durchschnittspullback nach langer Trennung",
    "summary": "Zwei Beine und Durchschnittstest zusammen prüfen.",
    "section": "Chartfall 19.1 · Trendpullback",
    "scenario": "c19-31",
    "paragraphs": [
      "Der größere Pullback erreicht nach einer langen gerichteten Folge erstmals den Durchschnitt. Seine zwei Abwärtsbeine werden von einer Zwischenreaktion getrennt. Der Kontakt liegt damit in einer bekannten starken Vorgeschichte.",
      "Ein früher Limitplan und eine spätere Stop-Bestätigung sind unterschiedliche Wege. Die Käuferreaktion kann das alte Hoch testen, ein tieferes Hoch bilden oder in weitere Überlappung übergehen. Kein Ausgang wird aus der Barzahl garantiert.",
      "Der Schutz wird aus dem geplanten Strukturbruch und der tatsächlichen Menge abgeleitet. Die lange Trendstrecke davor erlaubt keinen beliebig weiteren Stop. Ein sauber geplanter Verlust bleibt ein möglicher Ausgang."
    ],
    "callout": "Barzahl verändert keine Verlustgrenze.",
    "takeaways": [
      "Lange Vorgeschichte und neuen Test zusammen lesen.",
      "Zweibeinige Folge konkret benennen.",
      "Barzahl verändert keine Verlustgrenze."
    ],
    "prompt": "Was macht diesen ersten Kontakt besonders prüfenswert?",
    "answers": [
      {
        "label": "Die zuvor lange gerichtete Trennung plus die neue Pullbackreaktion.",
        "explanation": "Richtig. Der Ort hat eine klare Vorgeschichte."
      },
      {
        "label": "Eine garantierte Tageshoch-Wiederholung.",
        "explanation": "Die Folge bleibt offen."
      },
      {
        "label": "Ein plötzlich unbegrenztes Risiko.",
        "explanation": "Das Geldbudget bleibt unverändert."
      }
    ],
    "correct": 0
  },
  {
    "number": 32,
    "title": "Neues Hoch ohne vorherige Verkäuferfolge",
    "summary": "Umkehrform braucht größere Gegenstärke.",
    "section": "Chartfall 19.1 · Neuer Schub",
    "scenario": "c19-32",
    "paragraphs": [
      "Nach der Käuferreaktion erreicht der Markt ein neues Swinghoch. Ein lokaler Umkehrbar fällt auf, doch die vorherigen Bars zeigen kaum gerichtete Verkäuferstärke. Das schwächt die sofortige These einer großen Abwärtsumkehr.",
      "Ein späterer zweiter Gegenversuch wäre zusätzliche Information. Er müsste trotzdem im großen Trend und im verfügbaren Raum geprüft werden. Die lokale Spitze ist noch nicht das bekannte endgültige Tageshoch.",
      "Vergleiche die Gegenform mit der ganzen vorausgehenden Folge. Ein stark aussehender Signalbar und ein starker Gegenabschnitt sind verschiedene Beobachtungen. Erst Anschluss kann der Gegenseite mehr Kontrolle geben."
    ],
    "callout": "Signalbar und Gegenfolge getrennt beurteilen.",
    "takeaways": [
      "Lokale Spitze ist kein bekanntes endgültiges Hoch.",
      "Vorherige Gegenstärke gehört zur Umkehrprüfung.",
      "Signalbar und Gegenfolge getrennt beurteilen."
    ],
    "prompt": "Was fehlt der großen sofortigen Umkehrthese hier besonders?",
    "answers": [
      {
        "label": "Die Farbe der Bildschirmränder.",
        "explanation": "Sie beeinflusst die Preisfolge nicht."
      },
      {
        "label": "Eine überzeugende vorherige Verkäuferfolge oder neuer kräftiger Gegenanschluss.",
        "explanation": "Richtig. Die große Kontrolle ist bislang kaum verändert."
      },
      {
        "label": "Ein sichtbares lokales Hoch.",
        "explanation": "Dieses ist gerade entstanden."
      }
    ],
    "correct": 1
  },
  {
    "number": 33,
    "title": "Dojis am Durchschnitt: beide Ausbrüche prüfen",
    "summary": "Ein kleiner Balancebereich kann wiederholte Rückkehr anziehen.",
    "section": "Chartfall 19.1 · Seitliche Phase",
    "scenario": "c19-33",
    "paragraphs": [
      "Mehrere kleine Dojis am Durchschnitt bilden eine enge Balance. Ein Käuferausbruch kann zurückkehren, ebenso ein späterer Verkäuferausbruch. Die bisherige kleine Überlappung wird dann erneut besucht.",
      "Ein Outside-Bar kann beide Seiten eines Signalbars überschreiten, ohne eine eindeutige Kontrolle festzulegen. Seine Form allein ist deshalb kein stärkerer Beweis als die tatsächliche Schlusslage und der Anschluss.",
      "Beschreibe Magnetwirkung hier als wiederholte sichtbare Rückkehr in denselben Bereich. Aus den Bars lassen sich keine geheimen Orders ablesen. Ein kurzfristiger Zielplan braucht genug Raum nach Kosten und darf nicht stillschweigend zur großen Umkehr werden."
    ],
    "callout": "Magnetwirkung als sichtbare Rückkehr beschreiben.",
    "takeaways": [
      "Dojizone kann lokale Balance darstellen.",
      "Outside-Form ersetzt keine Folgeprüfung.",
      "Magnetwirkung als sichtbare Rückkehr beschreiben."
    ],
    "prompt": "Was zeigt die zweimalige Rückkehr nach Ausbrüchen aus der Dojizone?",
    "answers": [
      {
        "label": "Dass jede zukünftige Order dort gewinnt.",
        "explanation": "Weitere Ausbrüche können anders verlaufen."
      },
      {
        "label": "Dass ein Outside-Bar automatisch einen großen Trend startet.",
        "explanation": "Die Form allein entscheidet nicht."
      },
      {
        "label": "Dass der kleine Balancebereich im gezeigten Verlauf weiter wirkt.",
        "explanation": "Richtig. Beide Richtungen werden zurückgenommen."
      }
    ],
    "correct": 2
  },
  {
    "number": 34,
    "title": "Später schwacher Test und höheres Tief",
    "summary": "Vier Versuche und vollständiger Durchschnittsabstand trennen.",
    "section": "Chartfall 19.1 · Später Test",
    "scenario": "c19-34",
    "paragraphs": [
      "Der spätere Rücklauf erreicht den früheren Ausbruchspreis knapp und unterschreitet ihn im Beispiel um eine Einheit. Die Käuferreaktion ist mit einem größeren höheren Tief vereinbar, obwohl der zuvor offene Ausbruchsabstand geschlossen wird.",
      "Innerhalb des Rücklaufs lassen sich vier lokale Aufwärtsversuche zählen. Ein High-4-Name beschreibt diese Folge, keine eigenständige Garantie. Zusätzlich kann ein Bar vollständig unter dem berechneten Durchschnitt liegen: Sein Hoch ist dann darunter, nicht nur sein Schluss.",
      "Dieser Gap-Bar ist eine andere Beobachtung als die frühere Folge vollständig darüberliegender Bars. Eine anschließende Erholung kann das alte Hoch als tieferes oder höheres Hoch testen. Bei schwachem Anschluss bleibt eine größere Pause möglich."
    ],
    "callout": "Hoch unter Durchschnitt und Schluss darunter unterscheiden.",
    "takeaways": [
      "Knapp geschlossener Ausbruchsabstand bedeutet nicht automatisch Trendende.",
      "Vier Versuche müssen durch Rückgaben getrennt sein.",
      "Hoch unter Durchschnitt und Schluss darunter unterscheiden."
    ],
    "prompt": "Wann liegt der einzelne Bar vollständig unter dem Durchschnitt?",
    "answers": [
      {
        "label": "Wenn sogar sein Hoch darunter bleibt.",
        "explanation": "Richtig. Dann berührt die ganze Spanne die Linie nicht."
      },
      {
        "label": "Wenn nur sein Schluss darunter liegt, der obere Tail aber darüber reicht.",
        "explanation": "Dann wäre die Spanne nicht vollständig getrennt."
      },
      {
        "label": "Sobald der Name High 4 erscheint.",
        "explanation": "Versuchszählung und Durchschnittslage sind verschieden."
      }
    ],
    "correct": 0
  },
  {
    "number": 35,
    "title": "High 2 nach dem ersten Ausbruchsversuch",
    "summary": "Vorbar und erneute Rückgabe für die Zählung verwenden.",
    "section": "Chartfall 19.1 · Fortsetzung",
    "scenario": "c19-35",
    "paragraphs": [
      "Ein erster kleiner Aufwärtsdurchbruch beginnt die erneute Käuferbewegung. Ein Rücklauf unterbricht ihn. Der nächste Aufwärtsversuch kann eine High-2-Auslösung vorbereiten, solange derselbe betrachtete Abschnitt weitergezählt wird.",
      "Der erste Versuch kann unmittelbar im vorherigen Bar liegen. Die Zählung richtet sich nach der Preisfolge, nicht nach einer Mindestzahl von Minuten. Ein größerer Abstand zwischen den Versuchen ist also keine Voraussetzung.",
      "Prüfe die spätere Auslösung und ihren Schutz separat. Ein kräftiger Auslösebar kann einen weiter entfernten Preis liefern als der ursprüngliche Signalbereich. Mehr Bestätigung bedeutet deshalb nicht automatisch weniger Geldrisiko."
    ],
    "callout": "Auslösepreis und Risikobudget gesondert prüfen.",
    "takeaways": [
      "Erster Versuch kann im direkten Vorbar liegen.",
      "Rückgabe trennt die beiden Auslösungen.",
      "Auslösepreis und Risikobudget gesondert prüfen."
    ],
    "prompt": "Was trennt die beiden Käuferversuche?",
    "answers": [
      {
        "label": "Nur ein zweiter grüner Farbpunkt.",
        "explanation": "Die Farbe allein zählt keinen Versuch."
      },
      {
        "label": "Eine erkennbare erneute Gegenbewegung.",
        "explanation": "Richtig. Sie macht die zweite Auslösung unterscheidbar."
      },
      {
        "label": "Eine vorgeschriebene ganze Stunde.",
        "explanation": "Eine solche Mindestdauer wird hier nicht benötigt."
      }
    ],
    "correct": 1
  },
  {
    "number": 36,
    "title": "Final-Flag-Short bleibt ungetriggert",
    "summary": "Signalbar ist noch keine ausgeführte Position.",
    "section": "Chartfall 19.1 · Fortsetzung",
    "scenario": "c19-36",
    "paragraphs": [
      "Ein kleiner Verkäuferbar kann nach längerer Käuferfolge eine Final-Flag-Gegenidee liefern. Im gezeigten Abschnitt unterschreiten die folgenden Bars sein Tief jedoch nicht. Ein darunter liegender Einstiegsstop wird daher nicht ausgelöst.",
      "Der erste kleine Abwärtsbar kann trotzdem als erstes Gegenbein gelesen werden. Nach einem Käuferbar folgt ein zweiter kleiner Abwärtsversuch, der eine neue High-2-Prüfung mit dem größeren Trend ermöglicht.",
      "Trenne im Protokoll ungehandeltes Signal und tatsächlich ausgelöste Order. Ein nicht ausgelöster Short ist kein Shortverlust. Die neue Käuferorder ist wiederum ein eigener Plan mit eigener Unsicherheit."
    ],
    "callout": "Neue Trendauslösung gesondert planen.",
    "takeaways": [
      "Signal und Ausführung getrennt protokollieren.",
      "Ungetriggertes Gegensignal kann Teil einer Flagge bleiben.",
      "Neue Trendauslösung gesondert planen."
    ],
    "prompt": "Was ist mit dem Shortstop unter dem Signalbar passiert?",
    "answers": [
      {
        "label": "Er verlor automatisch den gesamten Schutzbetrag.",
        "explanation": "Ohne Ausführung besteht diese Position nicht."
      },
      {
        "label": "Er wurde rückwirkend am perfekten Hoch gefüllt.",
        "explanation": "Das wäre eine erfundene Ausführung."
      },
      {
        "label": "Er blieb ungehandelt, weil kein Folgebar den Preis erreichte.",
        "explanation": "Richtig. Der Signalname allein öffnet keine Position."
      }
    ],
    "correct": 2
  },
  {
    "number": 37,
    "title": "Keilförmiger Mikrokanal: Gegenversuch scheitert",
    "summary": "Ein klarer Käuferdurchbruch kann die Gegenidee widerlegen.",
    "section": "Chartfall 19.1 · Mikrostruktur",
    "scenario": "c19-37",
    "paragraphs": [
      "Ein enger Aufwärtskanal erhält eine keilartige Form. Der erste lokale Gegenbruch schafft aber keine größere Verkäuferfolge. Eine Stop-Prüfung über dem Gegen-Signalhoch wartet auf neue Käuferstärke.",
      "Ein kräftiger Käuferbar überschreitet den benannten Bereich. Dort könnten Shortausstiege und neue Käufe gemeinsam auftreten; OHLC-Daten beweisen die tatsächliche Zusammensetzung jedoch nicht. Sichtbar ist der klare Aufwärtsdurchbruch.",
      "Die geometrische Keilform wird dadurch nicht rückwirkend unsichtbar. Nur ihre erwartete Gegenfolge setzt sich im Beispiel nicht durch. Ein neuer Trade mit der Kontrolle benötigt weiterhin einen konkreten Schutz und ausreichenden Zielraum."
    ],
    "callout": "Beteiligte und Motive bleiben eine Interpretation.",
    "takeaways": [
      "Keilform und erfolgreiche Umkehr sind verschieden.",
      "Durchbruch über das Gegensignal ist neue Information.",
      "Beteiligte und Motive bleiben eine Interpretation."
    ],
    "prompt": "Was widerlegt die einfache Gegenidee im Beispiel?",
    "answers": [
      {
        "label": "Der kräftige Käuferdurchbruch nach dem erfolglosen Gegenversuch.",
        "explanation": "Richtig. Die erwartete Verkäuferfolge bleibt aus."
      },
      {
        "label": "Dass die Keilform einen Namen hat.",
        "explanation": "Der Name war schon vorher bekannt."
      },
      {
        "label": "Eine garantierte Liste realer Shortpositionen im OHLC-Chart.",
        "explanation": "Solche Positionsdaten liegen hier nicht vor."
      }
    ],
    "correct": 0
  },
  {
    "number": 38,
    "title": "Äußerer Test, kleiner Gegenbruch, Zweibarreaktion",
    "summary": "Lokale Shortnamen verlangen passenden größeren Kontext.",
    "section": "Chartfall 19.1 · Mikrostruktur",
    "scenario": "c19-38",
    "paragraphs": [
      "Ein weiterer Schub überschreitet die äußere Kanalgrenze. Ein lokaler zweiter Abwärtsversuch kann auffallen, ohne dass zuvor ein großer starker Verkäuferabschnitt entstanden ist. Die größere Käuferfolge bleibt wichtig.",
      "Ein kurzer Trendlinienbruch kehrt im Beispiel durch eine Zweibar-Käuferreaktion zurück. Erst diese Folge liefert die neue Auslösung mit dem Trend. Äußere Überschreitung und innere Trendlinienverletzung sind verschiedene Vorgänge.",
      "Halte die Grenzen und Bezugspunkte getrennt. Der erfolglose Shortname beweist keine künftige Serie risikoloser Käufe. Ein späterer stärkerer Gegenabschnitt könnte die gleiche lokale Form anders einordnen."
    ],
    "callout": "Gegenversuch im größeren Kontext prüfen.",
    "takeaways": [
      "Äußere Schubgrenze und innere Trendseite trennen.",
      "Zweibarreaktion ist neue Folgeinformation.",
      "Gegenversuch im größeren Kontext prüfen."
    ],
    "prompt": "Warum werden die beiden Linienverletzungen getrennt beschrieben?",
    "answers": [
      {
        "label": "Weil ein Linienname die Menge festlegt.",
        "explanation": "Die Menge ergibt sich aus dem Risikoplan."
      },
      {
        "label": "Weil äußere Kanalgrenze und innere Trendseite unterschiedliche Rollen haben.",
        "explanation": "Richtig. Ein Schubüberschuss ist nicht derselbe Vorgang wie ein Trendbruch."
      },
      {
        "label": "Weil jede gestrichelte Linie ein Shortverbot beweist.",
        "explanation": "Die Darstellungsart bezeichnet nur die Rolle."
      }
    ],
    "correct": 1
  },
  {
    "number": 39,
    "title": "Die schönsten Gegenbars im großen Bärenverlauf",
    "summary": "Ein schwacher Verkaufsauslöser kann neben starker Kontrolle liegen.",
    "section": "Chartfall 19.2 · Bärentrend",
    "scenario": "c19-39",
    "paragraphs": [
      "Der zweite Chartfall enthält mehrere auffällige Käuferbars und kleine Aufwärtsspikes. Trotzdem bleibt die größere Folge abwärtsgerichtet. Die lokalen Gegenversuche erhalten keine ausgedehnte Aufwärtsfortsetzung.",
      "Die Verkaufssignale wirken dagegen teilweise klein oder unklar. Das kann Trader vom Trendplan abhalten, obwohl Hochs, Tiefs und Durchschnittslage weiter nach unten arbeiten. Signalqualität und Trendkontrolle werden deshalb getrennt beurteilt.",
      "Ein Sell-Stop unter einem gescheiterten Käuferabschnitt ist eine mögliche Prüfung mit dem Trend. Der Preis ist nicht automatisch ein nachweisbarer Stop aller anderen Teilnehmer. Wähle den eigenen Auslöser und das eigene Risiko."
    ],
    "callout": "Eigene Auslösung statt angenommener fremder Stops planen.",
    "takeaways": [
      "Auffällige Käuferbars können im Bärentrend scheitern.",
      "Schwache lokale Signale bedeuten nicht zwingend schwache große Kontrolle.",
      "Eigene Auslösung statt angenommener fremder Stops planen."
    ],
    "prompt": "Warum beweisen die großen Käuferbars noch keinen Bullentrend?",
    "answers": [
      {
        "label": "Weil Käuferbars im Bärenverlauf nicht real sein können.",
        "explanation": "Sie sind sichtbar, aber lokal."
      },
      {
        "label": "Weil jeder kleine Verkaufssignalbar sicher gewinnt.",
        "explanation": "Auch ein passendes Signal kann verlieren."
      },
      {
        "label": "Weil ihre Aufwärtsfolge klein bleibt und die Verkäufer weiter neue Tiefs erreichen.",
        "explanation": "Richtig. Die größere Preisfolge widerspricht der Gegenlesart."
      }
    ],
    "correct": 2
  },
  {
    "number": 40,
    "title": "Bärenkontrolle am Durchschnitt und spätere Ausnahme",
    "summary": "Eine Serie und ihr Ende zeitgerecht vergleichen.",
    "section": "Chartfall 19.2 · Bärentrend",
    "scenario": "c19-40",
    "paragraphs": [
      "In der langen Abwärtsfolge schließen neue Käuferreaktionen nicht über längere Zeit auf der anderen Seite des Durchschnitts. Ein einzelner Kontakt oder Gegenschluss reicht noch nicht für eine fortgesetzte Gegenkontrolle.",
      "Später entwickelt sich eine größere Rally mit zwei aufeinanderfolgenden Käuferschlüssen darüber. Ein weiterer Bar kann sogar vollständig über der Linie liegen. Das ist neue Information und wird nicht in die frühere Trendphase zurückprojiziert.",
      "Die Ausnahme macht die frühe Bärenlesart nicht rückwirkend falsch. Sie fordert eine neue Prüfung der aktuell verbleibenden Stärke. Ein möglicher höherer Gegenbereich oder größerer Pullback ist noch keine garantierte dauerhafte Umkehr."
    ],
    "callout": "Vollständig darüberliegender Bar braucht Tief über der Linie.",
    "takeaways": [
      "Einzelkontakt und Serie von Gegenschlüssen unterscheiden.",
      "Spätere Ausnahme als neue Information datieren.",
      "Vollständig darüberliegender Bar braucht Tief über der Linie."
    ],
    "prompt": "Was verändert sich bei der späteren Käuferfolge?",
    "answers": [
      {
        "label": "Sie hält mehrere Schlüsse auf der Gegenseite und kann erstmals ganz darüber bleiben.",
        "explanation": "Richtig. Die neue Folge zeigt mehr Gegenraum."
      },
      {
        "label": "Die frühere Abwärtsstrecke verschwindet.",
        "explanation": "Die alten Bars bleiben erhalten."
      },
      {
        "label": "Der nächste Tag wird sicher aufwärts.",
        "explanation": "Das folgt aus dieser Ausnahme nicht."
      }
    ],
    "correct": 0
  },
  {
    "number": 41,
    "title": "Warten und gestaffeltes Handeln: plausible Erklärung",
    "summary": "Teilnehmermotive nicht mit beobachteten Daten verwechseln.",
    "section": "Chartfall 19.2 · Einordnung",
    "scenario": "c19-41",
    "paragraphs": [
      "Wer auf einen perfekten Verkaufssignalbar wartet, kann eine beharrliche Abwärtsfolge verpassen. Eine bestehende Gegenposition kann zugleich auf einen größeren Rücklauf hoffen. Beide Sichtweisen helfen, den Druck einer kleinen Rückgabe zu verstehen.",
      "Eine plausible Erklärung wäre wiederholtes Handeln in kleinen Teilen statt eine einzige große Order. Der OHLC-Chart zeigt jedoch weder die Identität der Marktgruppen noch deren Absichten oder genaue Positionsgrößen. Diese Erzählung bleibt eine Interpretation.",
      "Die überprüfbare Grundlage sind gerichtete Swings, kleine Käuferfortsetzung und fortgesetzte Verkäuferräume. Verwende den eigenen vorab begrenzten Plan. Die vermutete Psychologie anderer Teilnehmer ersetzt keine Ausführungsregel."
    ],
    "callout": "Eigener Plan statt vermuteter fremder Absicht.",
    "takeaways": [
      "Erklärungen zu Motiven als Interpretation kennzeichnen.",
      "Sichtbare Preisstruktur bleibt die überprüfbare Grundlage.",
      "Eigener Plan statt vermuteter fremder Absicht."
    ],
    "prompt": "Was kann der reine OHLC-Chart nicht belegen?",
    "answers": [
      {
        "label": "Ob der nächste Bar existiert, sobald er sichtbar ist.",
        "explanation": "Sichtbare abgeschlossene Bars sind Daten, keine Motivannahmen."
      },
      {
        "label": "Die genaue Identität und Absicht der handelnden Gruppen.",
        "explanation": "Richtig. Er zeigt Preise, keine vollständigen Positionsbücher."
      },
      {
        "label": "Die sichtbaren Hochs und Tiefs.",
        "explanation": "Diese gehören zu den verfügbaren Daten."
      }
    ],
    "correct": 1
  },
  {
    "number": 42,
    "title": "Limit am Vorbar-Schluss: Besuch ist keine garantierte Füllung",
    "summary": "Über dem Preis, Berührung und Tick darunter auseinanderhalten.",
    "section": "Chartfall 19.3 · Starke Bars",
    "scenario": "c19-42",
    "paragraphs": [
      "Ein Käuferbar schließt bei 40. Ein Limitangebot bei 40 wartet auf den nächsten Rücklauf. Liegt das nächste Tief bei 41, wird der Preis gar nicht besucht. Liegt es genau bei 40, ist eine Berührung sichtbar, aber noch keine garantierte reale Füllung.",
      "Ein späterer Bar kann einen Tick unter den Vorbar-Schluss handeln. Das zeigt einen weiteren Preisbesuch und macht eine Ausführung im einfachen Lernmodell plausibler. Queue, Liquidität und tatsächlicher Auftrag bleiben ohne zusätzliche Daten unbekannt.",
      "Schreibe daher nicht aus jeder OHLC-Berührung einen sicheren Trade. Die geringe Rückgabe selbst kann die Trendstärke stützen. Ein ungefülltes Angebot rechtfertigt keine spontane Order mit größerem Risiko."
    ],
    "callout": "Kleine Rückgabe kann den Trend beschreiben.",
    "takeaways": [
      "Nichtbesuch, Berührung und Durchhandel unterscheiden.",
      "OHLC allein garantiert keine Limitfüllung.",
      "Kleine Rückgabe kann den Trend beschreiben."
    ],
    "prompt": "Was ist bei nächstem Tief 41 und Limitpreis 40 sicher sichtbar?",
    "answers": [
      {
        "label": "Eine garantierte Füllung bei 40.",
        "explanation": "Dafür wurde der Preis nicht besucht."
      },
      {
        "label": "Eine bewiesene Orderqueue aller Teilnehmer.",
        "explanation": "Solche Daten sind nicht verfügbar."
      },
      {
        "label": "Der Preis 40 wurde in diesem Bar nicht erreicht.",
        "explanation": "Richtig. Die ganze Spanne bleibt darüber."
      }
    ],
    "correct": 2
  },
  {
    "number": 43,
    "title": "Starker Spike am Folgetag: größeres tieferes Hoch",
    "summary": "Lokale Stärke im neuen Tageskontext prüfen.",
    "section": "Chartfall 19.3 · Tageswechsel",
    "scenario": "c19-43",
    "paragraphs": [
      "Der erste Tag entwickelt sich nach einem starken Spike in einen Bullenkanal. Am Folgetag eröffnet der Markt unter dessen Trendseite. Ein neuer lokaler Käufer-Spike kann kräftig aussehen und trotzdem unter dem früheren größeren Hoch enden.",
      "Die alte Kanalstartzone kann als möglicher unterer Testbereich weiter relevant sein. Der lokale Aufwärtsabschnitt beseitigt diesen Kontext nicht automatisch. Vergleiche die neue Spitze mit dem benannten alten Hoch und beobachte die Verkäuferfolge.",
      "Die starke lokale Form garantiert deshalb nicht den gleichen Tagesverlauf wie gestern. Ein anschließendes tieferes Hoch mit Abwärtsanschluss kann die neue größere Richtung verändern. Die Entscheidung erfolgt mit den neuen Bars, nicht mit einer alten Erfolgsgeschichte."
    ],
    "callout": "Frühere Kanalstartzone ist eine Prüfzone, kein festes Ziel.",
    "takeaways": [
      "Tageswechsel verändert den größeren Kontext.",
      "Lokaler Käufer-Spike kann ein größeres tieferes Hoch bleiben.",
      "Frühere Kanalstartzone ist eine Prüfzone, kein festes Ziel."
    ],
    "prompt": "Warum kann der neue kräftige Käufer-Spike anders enden als gestern?",
    "answers": [
      {
        "label": "Weil er nach dem Bruch des alten Kanals unter einem größeren früheren Hoch liegt.",
        "explanation": "Richtig. Der neue Kontext ist verschieden."
      },
      {
        "label": "Weil alle starken Bars immer dieselbe Folge haben.",
        "explanation": "Das ist gerade keine gültige Gleichsetzung."
      },
      {
        "label": "Weil ein Tageswechsel alle alten Referenzen bedeutungslos macht.",
        "explanation": "Bekannte alte Bereiche können weiter geprüft werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 44,
    "title": "Frühe Rückkehr scheitert: zweiter Shortversuch",
    "summary": "Gedrängte Positionen als Erklärung, nicht als sichtbarer Beweis.",
    "section": "Chartfall 19.3 · Tageswechsel",
    "scenario": "c19-44",
    "paragraphs": [
      "Nach dem Eröffnungsbruch versucht ein Käuferbar, den alten Kanal zurückzugewinnen. Die Rückkehr bleibt als tieferes Hoch begrenzt. Ein Verkäufer-Spike und ein später unterbrochener zweiter Abwärtsversuch können die Ausbruchspullback-Shortlesart ergänzen.",
      "Die Zählung verwendet die neue Tagesstruktur: erster Abwärtsversuch, Käuferunterbrechung, zweite Auslösung. Der alte Kanalstartbereich bleibt eine mögliche Prüfzone. Ob die Strecke ihn erreicht, entscheidet erst der Verlauf.",
      "Eine Erklärung mit vielen bereits engagierten Käufern und späterem Ausstiegsdruck ist plausibel, aber im OHLC-Chart nicht direkt nachweisbar. Die überprüfbare Beobachtung bleibt der gescheiterte Rückgewinn des Kanals mit neuem Verkäuferanschluss."
    ],
    "callout": "Gedrängte Positionierung bleibt eine Interpretation.",
    "takeaways": [
      "Gescheiterte Rückkehr und zweite Auslösung zeitlich trennen.",
      "Neue Tagesstruktur für die Zählung verwenden.",
      "Gedrängte Positionierung bleibt eine Interpretation."
    ],
    "prompt": "Welche Beobachtung trägt die Shortlesart direkt?",
    "answers": [
      {
        "label": "Dass der alte Kanalname jeden künftigen Preis vorgibt.",
        "explanation": "Ein Name bestimmt den Verlauf nicht."
      },
      {
        "label": "Der begrenzte Rückgewinn als tieferes Hoch und neuer Verkäuferanschluss.",
        "explanation": "Richtig. Diese Preise sind sichtbar."
      },
      {
        "label": "Die sichere Kenntnis aller früheren Käuferpositionen.",
        "explanation": "Der OHLC-Chart liefert sie nicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 45,
    "title": "Dein Stärke-Protokoll: erhalten, schwächer oder verändert",
    "summary": "Mehrere Merkmale ohne starre Punktzahl führen.",
    "section": "Abschluss · Replay",
    "scenario": "c19-45",
    "paragraphs": [
      "Notiere vor dem nächsten Abschnitt gerichtete Swings, Körperqualität, Rückgabe, Gap-Art, Durchschnittslage und Gegenanschluss. Benenne die betrachtete Zeitebene und die bereits bekannten Referenzen. Wähle eine klare Hauptlesart.",
      "Decke die neuen Bars einzeln auf und vergleiche erhaltene mit verschwundenen Merkmalen. Prüfe eine passende Trendauslösung separat mit Preis, Verlustgrenze, Menge und Zielraum. Eine Gegenform kann scheitern oder neue Kontrolle entwickeln; beides bleibt offen.",
      "Führe ungefüllte und ungetriggerte Angebote ebenso wie ausgeführte Varianten auf. Jede Änderung braucht neue sichtbare Information. Mehr Stärkemerkmale, ein kleinerer Chart oder ein schöner späterer Gewinn erhöhen das alte erlaubte Geldrisiko nicht."
    ],
    "callout": "Stärke und Ausführung mit begrenztem Risiko getrennt prüfen.",
    "takeaways": [
      "Merkmale samt Bezugspunkt und Zeitebene notieren.",
      "Neue Folge kann die Lesart erhalten oder verändern.",
      "Stärke und Ausführung mit begrenztem Risiko getrennt prüfen."
    ],
    "prompt": "Was macht das Stärke-Replay nachvollziehbar?",
    "answers": [
      {
        "label": "Nachher nur die längsten Gewinner herauszusuchen.",
        "explanation": "Dann werden andere mögliche Folgen verborgen."
      },
      {
        "label": "Bei jedem neuen Gap die Menge ungeprüft zu erhöhen.",
        "explanation": "Ein Gap verändert das erlaubte Budget nicht."
      },
      {
        "label": "Zeitgerecht notierte Merkmale und ein gesonderter ausführbarer Risikoplan.",
        "explanation": "Richtig. Beschreibung und Order bleiben prüfbar."
      }
    ],
    "correct": 2
  }
];

export const chapterNineteenLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-19-${number}`;
  return {
    id: `price-action-trends.chapter-19.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 19 · ${d.section}`,
    sourceAnchors: [`Kapitel 19 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 19 · Trendstärke erkennen',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Trendstärke und Gegenversuche beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
