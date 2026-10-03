import type { ChapterTwentySixScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterTwentySixScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Mehrere Swings bilden eine Treppe",
    "summary": "Gerichtete Swings mit Überlappung.",
    "section": "Treppen erkennen",
    "scenario": "c26-01",
    "paragraphs": [
      "Eine Treppe entsteht, wenn mehrere breite Bewegungen neue Extreme erreichen und ihre Rückläufe wieder in vorherige Preisbereiche eindringen. Dadurch verbindet die Struktur eine übergeordnete Richtung mit sichtbar zweiseitigem Handel. Eine einzelne Ausbruchsbar genügt für diese Einordnung nicht.",
      "Links liegen zunächst zwei Hochanläufe vor. Rechts kommen weitere höhere Hochs und höhere Rücklauftiefs hinzu. Die neue Folge ergänzt den früheren Stand, ohne dessen Bars zu verändern.",
      "Zähl abgeschlossene Swingfolgen und benenne die überlappenden Bereiche. Während des Aufbaus bleibt die Einordnung vorläufig; erst spätere Bars zeigen, ob weitere Stufen oder eine Umkehr entstehen."
    ],
    "callout": "Die Treppe entsteht aus einer Folge, nicht aus einer einzelnen Bar.",
    "takeaways": [
      "Die Treppe entsteht aus einer Folge, nicht aus einer einzelnen Bar.",
      "Links liegen zunächst zwei Hochanläufe vor.",
      "Zähle abgeschlossene Swingfolgen und benenne die überlappenden Bereiche."
    ],
    "prompt": "Was ergänzt das rechte Panel?",
    "answers": [
      {
        "label": "Weitere gerichtete Swings mit überlappenden Rückläufen.",
        "explanation": "Richtig: Die Struktur wächst erst mit diesen späteren Bewegungen."
      },
      {
        "label": "Den Beweis einer garantierten Fortsetzung.",
        "explanation": "Auch mehrere Stufen können später scheitern."
      },
      {
        "label": "Eine rückwirkend bessere frühe Signalbar.",
        "explanation": "Die früheren Bars bleiben unverändert."
      }
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Neue Hochs trotz tiefer Rückläufe",
    "summary": "Rücktest unter dem alten Hoch.",
    "section": "Treppen erkennen",
    "scenario": "c26-02",
    "paragraphs": [
      "Im breiten Aufwärtskanal reicht ein Rücksetzer oft unter das zuvor überschrittene Hoch. Er überlappt den vorherigen Swing. Das unterscheidet diese Struktur von einem sehr engen Trend, in dem Rückgaben wenig Raum bekommen.",
      "Das erste gezeigte Swinghoch liegt bei 43. Nach dem nächsten Hoch 52 fällt der Schluss auf 43 zurück und der Wick bis 42. Der alte Ausbruchspunkt wird damit unterschritten, während die Folge später neue Hochs erreicht.",
      "Prüf Ausbruchspunkt und vorheriges Rücklauftief getrennt. Ein Rücktest unter dem alten Hoch ist nicht automatisch ein Bruch der gesamten Folge höherer Tiefs."
    ],
    "callout": "Überlappung kann zu einem gerichteten Kanal gehören.",
    "takeaways": [
      "Überlappung kann zu einem gerichteten Kanal gehören.",
      "Das erste gezeigte Swinghoch liegt bei 43.",
      "Prüfe Ausbruchspunkt und vorheriges Rücklauftief getrennt."
    ],
    "prompt": "Was passiert beim Rücklauf nach Hoch 52?",
    "answers": [
      {
        "label": "Der Preis bleibt immer über dem alten Hoch.",
        "explanation": "Der Wick widerlegt diese Aussage."
      },
      {
        "label": "Der Wick dringt unter das frühere Hoch 43 ein.",
        "explanation": "Richtig: Der Schluss 43 hat zusätzlich einen Wick bis 42."
      },
      {
        "label": "Alle vorherigen Tiefs werden gebrochen.",
        "explanation": "Der Rücklauf bleibt deutlich über dem ersten Rücklauftief 34."
      }
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Die bärische Treppe spiegeln",
    "summary": "Tiefere Extreme und Gegenrallys.",
    "section": "Treppen erkennen",
    "scenario": "c26-03",
    "paragraphs": [
      "Ein breiter Abwärtskanal hat tiefere Tiefs und überwiegend tiefere Gegenhochs. Rückläufe über ein vorheriges Ausbruchstief sind darin möglich. Käufer können einzelne Aufwärtsbeine gewinnen, obwohl Verkäufer im größeren Ausschnitt weiter Raum erobern.",
      "Die Folge links fällt zunächst von 70 auf 58, steigt auf 65 und erreicht danach 49. Rechts folgen weitere tiefere Tiefs. Die Rally nach dem neuen Tief handelt wieder oberhalb der früheren Tiefreferenz 57.",
      "Vertausch in deiner Beschreibung Hochs und Tiefs sauber. Entscheidend bleibt, wie viel Raum die Gegenbewegung zurückgewinnt und ob nach ihr neue Verkäuferwirkung folgt."
    ],
    "callout": "Eine Gegenrally beendet den Abwärtstrend nicht allein.",
    "takeaways": [
      "Eine Gegenrally beendet den Abwärtstrend nicht allein.",
      "Die Folge links fällt zunächst von 70 auf 58, steigt auf 65 und erreicht danach 49.",
      "Tausche in deiner Beschreibung Hochs und Tiefs sauber aus."
    ],
    "prompt": "Was kennzeichnet hier die übergeordnete Richtung?",
    "answers": [
      {
        "label": "Dass jede Bar rot sein muss.",
        "explanation": "Die Rallybars zeigen ausdrücklich Käuferbewegungen."
      },
      {
        "label": "Ein höherer Rücklauf erzwingt immer einen Bulltrend.",
        "explanation": "Dafür braucht es eine weitergehende neue Struktur."
      },
      {
        "label": "Weitere tiefere Tiefs trotz zwischenzeitlicher Rallys.",
        "explanation": "Richtig: Einzelne Käuferbeine und die größere Verkäuferfolge können gleichzeitig bestehen."
      }
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Versetzte Ranges und durchgehende Swings",
    "summary": "Tagesname und Preisweg trennen.",
    "section": "Treppen erkennen",
    "scenario": "c26-04",
    "paragraphs": [
      "Treppen und versetzte Handelsbereiche teilen eine Mischung aus Richtung und Balance. Die gezeichneten Kästen sind jedoch nur eine Art, die Bars zusammenzufassen. Eine breite Swingfolge muss keine sauberen rechteckigen Pausen haben.",
      "Links bewegen sich die Preise in kurzen versetzten Balancen. Rechts entsteht eine Folge breiter Rückläufe ohne längere horizontale Ruhe. Beide Varianten gewinnen nach oben Raum, aber ihr Ablauf ist verschieden.",
      "Beschreib zuerst die sichtbaren Extreme und Überlappungen. Ein Tagesname soll Beobachtungen ordnen und darf Unterschiede bei Entry, Stopabstand und Haltedauer nicht verdecken."
    ],
    "callout": "Der Preisweg zählt mehr als ein sauberer Mustername.",
    "takeaways": [
      "Der Preisweg zählt mehr als ein sauberer Mustername.",
      "Links bewegen sich die Preise in kurzen versetzten Balancen.",
      "Beschreibe zuerst die sichtbaren Extreme und Überlappungen."
    ],
    "prompt": "Was unterscheiden die beiden Panels?",
    "answers": [
      {
        "label": "Die Art der Pausen und Gegenbewegungen.",
        "explanation": "Richtig: Beide steigen, aber die Zwischenwege sind verschieden."
      },
      {
        "label": "Nur die Farbe des Hintergrunds.",
        "explanation": "Die tatsächlich gezeigten Swings unterscheiden sich."
      },
      {
        "label": "Die Garantie, dass beide identisch gehandelt werden können.",
        "explanation": "Andere Rückläufe führen zu anderen Auslösern und Risikostrecken."
      }
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Eine einzelne Trendverletzung neu einordnen",
    "summary": "Ausnahme und neue Kontrolle.",
    "section": "Treppen erkennen",
    "scenario": "c26-05",
    "paragraphs": [
      "Ein Rücklauf kann eine frühere Swingreferenz kurz überschreiten und danach wieder in die ursprüngliche Richtung drehen. Solche Ausnahmen machen die Struktur unordentlich. Die Verletzung ist neue Information, aber noch keine vollständige Umkehrfolge.",
      "Links liegt eine bärische Treppe mit Gegenhoch 57 vor. Rechts steigt die nächste Rally mit Hoch 60 darüber und fällt anschließend auf 39. Der Gegenausbruch war real; der spätere Verkäuferanschluss ebenfalls.",
      "Ein ausgelöster persönlicher Stop bleibt ein Verlust, auch wenn sich die größere Richtung später bestätigt. Beurteile Marktstruktur und eigene Ausführung getrennt, statt jede spätere Erholung zur Entschuldigung des alten Plans zu machen."
    ],
    "callout": "Eine spätere Fortsetzung löscht eine frühere Verletzung nicht.",
    "takeaways": [
      "Eine spätere Fortsetzung löscht eine frühere Verletzung nicht.",
      "Links liegt eine bärische Treppe mit Gegenhoch 57 vor.",
      "Ein ausgelöster persönlicher Stop bleibt ein Verlust, auch wenn sich die größere Richtung später bestätigt."
    ],
    "prompt": "Wie sind Hoch 60 und die spätere Abwärtsbewegung zu behandeln?",
    "answers": [
      {
        "label": "Die Verletzung hat nie stattgefunden.",
        "explanation": "Das sichtbare Hoch 60 bleibt Teil der Folge."
      },
      {
        "label": "Als zwei aufeinanderfolgende Informationen.",
        "explanation": "Richtig: Weder Verletzung noch spätere Verkäuferwirkung darf verschwinden."
      },
      {
        "label": "Ein alter Stopverlust wird rückwirkend aufgehoben.",
        "explanation": "Die spätere Richtung verändert keine frühere Ausführung."
      }
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Kanalgrenzen sind eine Arbeitshypothese",
    "summary": "Feste Linien statt Nachzeichnen.",
    "section": "Breite Kanäle lesen",
    "scenario": "c26-06",
    "paragraphs": [
      "Eine Trendlinie folgt der Seite der Rückläufe, eine parallele Kanallinie der Seite der Erweiterungen. In einer breiten Struktur passen nicht alle Wicks exakt an diese Linien. Die Zeichnung ist eine Näherung, die du an neuen Bars prüfen musst.",
      "Beide Panels verwenden dieselben zwei Linien. Ihr Abstand beträgt an jedem gemeinsamen Index 18 Einheiten. Rechts kommen weitere Bars hinzu; die Linien werden für diese Vergleichsfolge nicht nachträglich verschoben.",
      "Dokumentiere die Anker und die erlaubte Näherung. Zeichnest du Linien nach jedem unerwarteten Bar neu, kannst du einen vorher bekannten Kanalbruch nicht mehr ehrlich auswerten."
    ],
    "callout": "Ein Kanal ist eine überprüfbare Näherung.",
    "takeaways": [
      "Ein Kanal ist eine überprüfbare Näherung.",
      "Beide Panels verwenden dieselben zwei Linien.",
      "Dokumentiere die Anker und die erlaubte Näherung."
    ],
    "prompt": "Was bleibt zwischen den Panels unverändert?",
    "answers": [
      {
        "label": "Die gesamte künftige Kursfolge.",
        "explanation": "Rechts kommen unbekannte spätere Bars hinzu."
      },
      {
        "label": "Die Zusage, dass kein Wick die Linie überschreitet.",
        "explanation": "Eine Näherung kann durch einzelne Wicks verletzt werden."
      },
      {
        "label": "Die Linienanker und der parallele Abstand.",
        "explanation": "Richtig: Neue Bars prüfen dieselbe vorher festgelegte Zeichnung."
      }
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Breite messen, ohne Wahrscheinlichkeit zu erfinden",
    "summary": "Preisabstand ist keine Trefferquote.",
    "section": "Breite Kanäle lesen",
    "scenario": "c26-07",
    "paragraphs": [
      "Die Breite eines Kanals beschreibt den Abstand seiner Grenzen. Sie kann für Zielraum und Stopplanung interessant sein, liefert aber keine gemessene Wahrscheinlichkeit für einen Rücklauf. Ein breiter Kanal ist nicht automatisch ein leicht handelbarer Kanal.",
      "Links liegen am markierten Index die Grenzen bei 40 und 58. Rechts liegen sie bei 40 und 70. Die Abstände betragen 18 beziehungsweise 30 relative Einheiten; die Zahlen beschreiben ausschließlich Geometrie.",
      "Halte Breite, tatsächlich gelaufene Gegenstrecke und Trefferquote getrennt. Eine Aussage zur Erfolgsquote braucht definierte Fälle, Ausführungskosten und eine ausreichende eigene Stichprobe."
    ],
    "callout": "Die Kanalbreite misst Raum und nicht Erfolgswahrscheinlichkeit.",
    "takeaways": [
      "Kanalbreite misst Raum und nicht Erfolgswahrscheinlichkeit.",
      "Links liegen am markierten Index die Grenzen bei 40 und 58.",
      "Halte Breite, tatsächlich gelaufene Gegenstrecke und Trefferquote getrennt."
    ],
    "prompt": "Was bedeutet der Abstand 70 minus 40?",
    "answers": [
      {
        "label": "30 Einheiten Preisraum zwischen den Referenzen.",
        "explanation": "Richtig: Eine geometrische Differenz ist keine Trefferquote."
      },
      {
        "label": "70 Prozent sichere Gewinne.",
        "explanation": "Die Referenzpreise liefern keine Statistik."
      },
      {
        "label": "Ein verpflichtender Rücklauf um 30.",
        "explanation": "Die Grenze erzwingt keine bestimmte nächste Bewegung."
      }
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Lokal aufwärts, im größeren Ausschnitt abwärts",
    "summary": "Eine Treppe kann eine Gegenflagge sein.",
    "section": "Breite Kanäle lesen",
    "scenario": "c26-08",
    "paragraphs": [
      "Eine aufwärts gerichtete Treppe kann innerhalb eines größeren Abwärtstrends nur eine Erholung sein. Die lokale Richtung und die Richtung des größeren Ausschnitts beantworten verschiedene Fragen. Beide musst du mit ihrem Zeitbezug benennen.",
      "Links ist nur die Käuferfolge von 30 bis 63 sichtbar. Rechts geht ihr ein Verkäuferimpuls von 90 bis 30 voraus, danach folgt ein Abwärtsbein. Die lokale Treppe ist im längeren Verlauf ein Rücklauf gegen die frühere Verkäuferbewegung.",
      "Leg vor dem Entry fest, welche Zeitebene deine Auslöser und welche deinen Kontext liefert. Eine lokale Longidee darf die große Gegenreferenz nicht übersehen; ein großer Beartrend macht aber nicht jede kleine grüne Bar zum Shortsignal."
    ],
    "callout": "Lokale Richtung und größere Struktur können gegeneinander stehen.",
    "takeaways": [
      "Lokale Richtung und größere Struktur können gegeneinander stehen.",
      "Links ist nur die Käuferfolge von 30 bis 63 sichtbar.",
      "Lege vor dem Entry fest, welche Zeitebene deine Auslöser und welche deinen Kontext liefert."
    ],
    "prompt": "Wie lassen sich die zwei Richtungsbeschreibungen vereinbaren?",
    "answers": [
      {
        "label": "Eine von beiden muss allein wegen der anderen falsch sein.",
        "explanation": "Verschiedene Zeitebenen können gleichzeitig unterschiedliche Richtungen zeigen."
      },
      {
        "label": "Eine lokale Käufer-Treppe liegt in einem größeren Verkäuferverlauf.",
        "explanation": "Richtig: Die Aussagen verwenden verschiedene Ausschnitte."
      },
      {
        "label": "Der rechte Verlauf war im linken Panel vollständig bekannt.",
        "explanation": "Dort ist der größere Ausschnitt bewusst ausgeblendet."
      }
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Verdichten verändert die sichtbare Struktur",
    "summary": "Drei Bars zu einer Hülle bündeln.",
    "section": "Breite Kanäle lesen",
    "scenario": "c26-09",
    "paragraphs": [
      "Eine höhere Zeitebene fasst mehrere kleine Bars zu einer OHLC-Hülle zusammen. Dabei bleiben Eröffnung, höchster und tiefster Preis sowie letzter Schluss erhalten. Zwischenbewegungen verschwinden. Eine sichtbare Treppe kann im größeren Barbild dadurch wie eine kompakte Korrektur wirken.",
      "Links stehen zwölf erfundene kleine Bars. Rechts wird jeweils ein Dreierblock exakt verdichtet. Die vier großen Bars haben dieselben Block-Extreme und Schlusskurse; rechts werden keine neuen Kurse erfunden.",
      "Prüf den kleineren Verlauf für zeitliche Auslöser und den größeren für den Kontext. Ein verdichteter Bar beweist nicht, in welcher Reihenfolge seine einzelnen Tiefs und Hochs entstanden."
    ],
    "callout": "Aggregation bewahrt die Hülle und verliert Zwischenwege.",
    "takeaways": [
      "Aggregation bewahrt die Hülle und verliert Zwischenwege.",
      "Links stehen zwölf erfundene kleine Bars.",
      "Prüfe den kleineren Verlauf für zeitliche Auslöser und den größeren für den Kontext."
    ],
    "prompt": "Wie entstehen die rechten Bars?",
    "answers": [
      {
        "label": "Durch Mitteln aller Hochs und Tiefs.",
        "explanation": "Ein OHLC-High ist das höchste High, kein Durchschnitt."
      },
      {
        "label": "Durch frei erfundene größere Kurse.",
        "explanation": "Das Beispiel berechnet beide Darstellungen aus derselben Folge."
      },
      {
        "label": "Aus jeweils drei linken Bars mit denselben Block-Extremen.",
        "explanation": "Richtig: Open kommt vom ersten und Close vom letzten Bar des Blocks."
      }
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Ein früher Dreh vor der Grenze zählt als Information",
    "summary": "Nichtbesuch statt Linienberührung.",
    "section": "Breite Kanäle lesen",
    "scenario": "c26-10",
    "paragraphs": [
      "Dreht eine Gegenbewegung schon vor der angenommenen Kanalgrenze, zeigt das eine frühere Reaktion. Daraus lässt sich eine neue Hypothese über Käufer- oder Verkäuferdruck ableiten. Die Identität und Motivation einzelner Teilnehmer bleiben aus OHLC-Bars jedoch unbekannt.",
      "Links endet ein Verkäuferbein mit einem Wick bis 42 bei einer Referenz 40. Rechts folgt eine Käuferreaktion. Die Grenze wird in keinem der beiden Panels berührt; die Reaktion beginnt zwei Einheiten darüber.",
      "Notier den Nichtbesuch ausdrücklich. Eine vorgestellte perfekte Linienberührung würde den tatsächlichen Auslöser verfälschen und im Replay einen günstigeren Einstieg vortäuschen."
    ],
    "callout": "Einen früheren Dreh nicht als perfekte Berührung umdeuten.",
    "takeaways": [
      "Einen früheren Dreh nicht als perfekte Berührung umdeuten.",
      "Links endet ein Verkäuferbein mit einem Wick bis 42 bei einer Referenz 40.",
      "Notiere den Nichtbesuch ausdrücklich."
    ],
    "prompt": "Wurde die Referenz 40 erreicht?",
    "answers": [
      {
        "label": "Nein, das gezeigte Tief bleibt bei 42.",
        "explanation": "Richtig: Die Reaktion beginnt oberhalb der Linie."
      },
      {
        "label": "Ja, weil der Markt anschließend steigt.",
        "explanation": "Spätere Käuferwirkung ändert den vorherigen Tiefstpreis nicht."
      },
      {
        "label": "OHLC zeigt exakt, welcher Käufer verantwortlich war.",
        "explanation": "Daraus sind einzelne Teilnehmer nicht identifizierbar."
      }
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Richtungshandel und Gegenbewegung getrennt planen",
    "summary": "Verschiedene Haltelogiken.",
    "section": "Zweiseitige Pläne begrenzen",
    "scenario": "c26-11",
    "paragraphs": [
      "Breite Swings eröffnen unterschiedliche Ideen: eine Position mit der größeren Richtung und einen kurzen Handel der Gegenbewegung. Der geplante Weg, die Entkräftung und die Haltedauer können dabei verschieden sein. Ein erfolgreicher Gegen-Swing beweist keinen neuen Gesamttrend.",
      "Links wird nur das lokale Käuferbein im Bearkanal hervorgehoben. Rechts kommt die folgende Verkäuferstrecke hinzu. Der kurzfristige Käufergewinn und die größere Abwärtsrichtung widersprechen sich in dieser Folge nicht.",
      "Kennzeichne deinen Plan vor dem Einstieg. Wer einen kurzen Gegenhandel nach einer ungünstigen Bewegung plötzlich zum langfristigen Trendtrade erklärt, verändert seinen ursprünglichen Risikoplan."
    ],
    "callout": "Gegenbein und größere Richtung brauchen getrennte Pläne.",
    "takeaways": [
      "Gegenbein und größere Richtung brauchen getrennte Pläne.",
      "Links wird nur das lokale Käuferbein im Bearkanal hervorgehoben.",
      "Kennzeichne deinen Plan vor dem Einstieg."
    ],
    "prompt": "Was folgt aus dem lokalen Käuferbein?",
    "answers": [
      {
        "label": "Der gesamte Bearkanal ist automatisch beendet.",
        "explanation": "Das rechte Panel zeigt danach weitere Verkäuferwirkung."
      },
      {
        "label": "Eine Gegenbewegung, deren größerer Richtungswechsel offen bleibt.",
        "explanation": "Richtig: Erst die weitere Folge entscheidet über neue größere Kontrolle."
      },
      {
        "label": "Ein beliebiger Stop kann entfallen.",
        "explanation": "Auch ein kurzer Gegenhandel braucht eine Verlustgrenze."
      }
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Den Kanalrand nicht ohne Signal vorwegnehmen",
    "summary": "Preiszone und Auslöser trennen.",
    "section": "Zweiseitige Pläne begrenzen",
    "scenario": "c26-12",
    "paragraphs": [
      "Eine Grenze ist eine Beobachtungszone. Sie ist keine automatische Order. Ein Plan kann auf eine Reaktion und danach auf den Bruch eines Signalhochs warten. Dadurch sind Bezug, Signalabschluss und Trigger drei getrennte Zustände.",
      "Links endet die Rücklaufbar mit Hoch 54. Der gedachte Käufertrigger liegt bei 55 und ist noch nicht erreicht. Rechts steigt eine spätere Bar darüber. Der Preis hat sich dann bereits bewegt; der zusätzliche Auslöser kann einen schlechteren Entry bedeuten.",
      "Vergleiche den zusätzlichen Informationsstand mit dem veränderten Stopabstand. Ein Trigger verhindert weder Fehlausbrüche noch Slippage, er legt nur fest, wann dein Plan aktiv werden soll."
    ],
    "callout": "Die Nähe zum Rand ersetzt keinen festgelegten Trigger.",
    "takeaways": [
      "Die Nähe zum Rand ersetzt keinen festgelegten Trigger.",
      "Links endet die Rücklaufbar mit Hoch 54.",
      "Vergleiche den zusätzlichen Informationsstand mit dem veränderten Stopabstand."
    ],
    "prompt": "Ist der Trigger 55 links schon erreicht?",
    "answers": [
      {
        "label": "Ja, weil die letzte Bar eine Erholung zeigt.",
        "explanation": "Die Form einer Bar ersetzt keine Preisberührung."
      },
      {
        "label": "Ein späterer Trigger garantiert eine Füllung zu 55.",
        "explanation": "Eine Auslösung und die tatsächliche Ausführung sind verschieden."
      },
      {
        "label": "Nein, alle bisherigen Hochs bleiben darunter.",
        "explanation": "Richtig: Das Signalhoch 54 ist nicht der Triggerpreis 55."
      }
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Nicht ausgeführte Limits sind keine Gewinne",
    "summary": "Orderpreis und Preisbesuch.",
    "section": "Zweiseitige Pläne begrenzen",
    "scenario": "c26-13",
    "paragraphs": [
      "Wer einen Gegeneinstieg mit einer Limitorder plant, kann ohne Ausführung bleiben, wenn der Markt vorher dreht. Einen hypothetischen Gewinn aus dem späteren Rücklauf darfst du dann nicht als eigenen Trade ins Journal schreiben. Bei einer Berührung musst du zudem tatsächliche Füllung und Warteschlange getrennt prüfen.",
      "Links liegt die Kaufgrenze bei 40, der Markt dreht aber schon mit Tief 43. Rechts unterschreitet ein anderer Verlauf 40. Nur im rechten Verlauf ist der gedachte Preis überhaupt besucht; auch dort liefert das Schema keinen Brokerbeleg.",
      "Erfasse geplant, preislich besucht und tatsächlich ausgeführt getrennt. Ausbleibende Füllungen gehören in die Bewertung des Ordertyps, statt nachträglich als perfekte Entries zu erscheinen."
    ],
    "callout": "Ein verpasster Preis ist kein ausgeführter Einstieg.",
    "takeaways": [
      "Ein verpasster Preis ist kein ausgeführter Einstieg.",
      "Links liegt die Kaufgrenze bei 40, der Markt dreht aber schon mit Tief 43.",
      "Erfasse geplant, preislich besucht und tatsächlich ausgeführt getrennt."
    ],
    "prompt": "Was kann links im Journal stehen?",
    "answers": [
      {
        "label": "Geplanter Kauf 40, aber kein Preisbesuch.",
        "explanation": "Richtig: Das Tief 43 verhindert die gedachte Ausführung zu 40."
      },
      {
        "label": "Ein sicherer Kauf zu 40 mit späterem Gewinn.",
        "explanation": "Der Markt hat 40 nicht erreicht."
      },
      {
        "label": "Jede Berührung rechts beweist automatisch eine Füllung.",
        "explanation": "Eine tatsächliche Limitfüllung braucht Ausführungsdaten."
      }
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Ausdehnung beobachten, ohne feste Umkehrdistanz",
    "summary": "Historische Strecken sind Referenzen.",
    "section": "Zweiseitige Pläne begrenzen",
    "scenario": "c26-14",
    "paragraphs": [
      "Die Entfernung eines neuen Extrempunkts vom vorherigen kann als Vergleich dienen. Sie wird nicht zum vorgeschriebenen Abstand des nächsten Swings. Eine Gegenidee, die immer auf derselben Ausdehnung beruht, kann deshalb bei Beschleunigung scheitern.",
      "Links erweitert sich der zweite Hochpunkt um zehn Einheiten. Rechts vergrößert die nächste Käuferstrecke den Raum viel stärker. Die vorherige Distanz war bekannt; die nächste Extension bleibt bis zu ihrem Verlauf offen.",
      "Nutze frühere Ausdehnungen als Kontext und begrenze jeden neuen Plan. Einen steigenden Verlust immer wieder mit derselben historischen Rücklaufannahme zu erklären ersetzt keine Entkräftung."
    ],
    "callout": "Eine vorige Extension bestimmt nicht die nächste.",
    "takeaways": [
      "Eine vorige Extension bestimmt nicht die nächste.",
      "Links erweitert sich der zweite Hochpunkt um zehn Einheiten.",
      "Nutze frühere Ausdehnungen als Kontext und begrenze jeden neuen Plan."
    ],
    "prompt": "Was lässt sich aus der früheren Zehn-Einheiten-Erweiterung ableiten?",
    "answers": [
      {
        "label": "Der nächste Anstieg muss nach exakt zehn Einheiten enden.",
        "explanation": "Das rechte Beispiel zeigt eine größere Erweiterung."
      },
      {
        "label": "Eine Vergleichsstrecke, keine feste nächste Umkehrdistanz.",
        "explanation": "Richtig: Die spätere Beschleunigung kann deutlich darüber hinauslaufen."
      },
      {
        "label": "Jede Gegenposition bleibt ohne Verlustgrenze haltbar.",
        "explanation": "Eine vergangene Strecke begrenzt keinen zukünftigen Verlust."
      }
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Nachkaufen braucht ein gemeinsames Risikobudget",
    "summary": "Gesamtrisiko statt Einzelorder.",
    "section": "Zweiseitige Pläne begrenzen",
    "scenario": "c26-15",
    "paragraphs": [
      "Eine zusätzliche Position vergrößert das Gesamtrisiko. Beim Einstieg gegen eine laufende Bewegung kann ein Nachkauf zugleich eine inzwischen schwächere Handelsidee vergrößern. Ein niedrigerer Durchschnittspreis ist deshalb keine ausreichende Begründung.",
      "Im gedachten Plan wird eine Einheit bei 50 und eine weitere bei 46 gekauft. Beide haben Stop 40. Bei einem angenommenen Dollar pro Preiseinheit beträgt das Bruttorisiko 10 + 6 = 16 Dollar, noch ohne Kosten oder Slippage.",
      "Prüf jede weitere Einheit gegen das vorher festgelegte Gesamtbudget und die aktuelle Struktur. Beträgt das Budget 12 Dollar, passen die beiden geplanten Einheiten nicht zusammen in diesen Plan."
    ],
    "callout": "Ein besserer Durchschnittspreis kann trotzdem mehr Gesamtrisiko bedeuten.",
    "takeaways": [
      "Ein besserer Durchschnittspreis kann trotzdem mehr Gesamtrisiko bedeuten.",
      "Im gedachten Plan wird eine Einheit bei 50 und eine weitere bei 46 gekauft.",
      "Prüfe jede weitere Einheit gegen das vorher festgelegte Gesamtbudget und die aktuelle Struktur."
    ],
    "prompt": "Wie groß ist hier das gemeinsame Bruttorisiko?",
    "answers": [
      {
        "label": "Acht Dollar, weil der Durchschnitt der Abstände zählt.",
        "explanation": "Das wäre ein Mittelwert und ignoriert die zwei Einheiten."
      },
      {
        "label": "Null, weil der zweite Kauf günstiger ist.",
        "explanation": "Auch der günstigere Kauf kann bis zum Stop verlieren."
      },
      {
        "label": "16 Dollar vor Kosten bei dem angenommenen Punktwert.",
        "explanation": "Richtig: Beide Verluststrecken müssen addiert werden."
      }
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Eine Stufe kann den Rhythmus wechseln",
    "summary": "Ein breiter Kanal wird schneller.",
    "section": "Beschleunigung und Übertreibung",
    "scenario": "c26-16",
    "paragraphs": [
      "Eine bisher überlappende Folge kann mit einem großen gerichteten Bein ihren Rhythmus verändern. Neue Bars geben dann wenig vom gewonnenen Raum zurück. Der alte breite Kanal ist als Kontext noch sichtbar, beschreibt die neue Bewegung aber nicht mehr allein.",
      "Links endet die bekannte Treppe bei 68. Rechts steigen die nächsten Schlusskurse auf 82 und 90; die folgende Rückgabe endet bei 87. Die neue Erweiterung ist größer als die bisherigen Hochschritte.",
      "Prüf die Größe des neuen Impulses und die tatsächliche Gegenreaktion. Eine frühe Beschleunigungsannahme bleibt vorläufig, solange noch keine ausreichende Folge vorliegt."
    ],
    "callout": "Neue Geschwindigkeit verlangt eine neue Beurteilung.",
    "takeaways": [
      "Neue Geschwindigkeit verlangt eine neue Beurteilung.",
      "Links endet die bekannte Treppe bei 68.",
      "Prüfe die Größe des neuen Impulses und die tatsächliche Gegenreaktion."
    ],
    "prompt": "Welche Information spricht hier für einen Rhythmuswechsel?",
    "answers": [
      {
        "label": "Großer Raumgewinn mit anschließender kleiner Rückgabe.",
        "explanation": "Richtig: Diese neue Folge unterscheidet sich von den breiten frühen Rückläufen."
      },
      {
        "label": "Allein die Existenz von drei frühen Hochs.",
        "explanation": "Drei Hochs erzwingen keinen späteren Rhythmuswechsel."
      },
      {
        "label": "Das garantiert kleinere Risiko jeder späteren Position.",
        "explanation": "Entry und Stopabstand müssen separat gerechnet werden."
      }
    ],
    "correct": 0
  },
  {
    "number": 17,
    "title": "Eine Gegenbar kann sichtbar und unausgelöst bleiben",
    "summary": "Ein Signal ohne Verkäufertrigger.",
    "section": "Beschleunigung und Übertreibung",
    "scenario": "c26-17",
    "paragraphs": [
      "Nach einem kräftigen Käuferausbruch kann eine rote Bar wie ein Umkehrsignal aussehen. Der geplante Verkäufertrigger unter ihrem Tief kann aber unberührt bleiben. Das sichtbare Signal und ein ausgeführter Short dürfen deshalb nicht gleichgesetzt werden.",
      "Links hat die rote Gegenbar das Tief 78; der Beispieltrigger liegt bei 77. Rechts folgt eine neue Käuferbar, deren Tief bei 78 bleibt, und anschließend höhere Preise. Der Trigger wird in dieser gesamten Folge nicht besucht.",
      "Notier den unausgelösten Plan. Eine spätere Käuferfortsetzung bedeutet hier keinen Verlust aus einem nie eröffneten Short, sondern ein entkräftetes oder gelöschtes Setup."
    ],
    "callout": "Eine rote Gegenbar ist noch kein ausgelöster Short.",
    "takeaways": [
      "Eine rote Gegenbar ist noch kein ausgelöster Short.",
      "Links besitzt die rote Gegenbar Tief 78; der Beispieltrigger liegt bei 77.",
      "Notiere den unausgelösten Plan."
    ],
    "prompt": "Wurde der Verkäufertrigger 77 erreicht?",
    "answers": [
      {
        "label": "Ja, weil die Gegenbar rot ist.",
        "explanation": "Die Farbe ersetzt den festgelegten Triggerpreis nicht."
      },
      {
        "label": "Nein, die Folge bleibt mit ihren Tiefs darüber.",
        "explanation": "Richtig: Der Shortplan ist sichtbar, aber nicht ausgelöst."
      },
      {
        "label": "Der nie eröffnete Short hatte einen realen Stopverlust.",
        "explanation": "Ohne Ausführung entsteht aus diesem Plan keine eigene Position."
      }
    ],
    "correct": 1
  },
  {
    "number": 18,
    "title": "Ausbruch aus dem Kanal oder kurze Überschreitung",
    "summary": "Anschluss und Rückkehr vergleichen.",
    "section": "Beschleunigung und Übertreibung",
    "scenario": "c26-18",
    "paragraphs": [
      "Eine Bewegung jenseits einer Kanallinie kann der Beginn einer schnelleren Trendphase oder eine kurze Übertreibung sein. Während der ersten Überschreitung ist die Folge noch offen. Erst die nächste Rückgabe und weitere Bars unterscheiden die Fälle.",
      "Beide Verläufe erreichen aus derselben Treppe zunächst 82. Links folgen weitere Hochs, rechts kehrt der Preis auf 66 und 58 zurück. Die identische erste Erweiterung liefert allein noch keine Entscheidung zwischen den beiden Folgen.",
      "Warte auf neue Information oder definiere deinen frühen Plan mit passender Entkräftung. Die spätere Rückkehr darf nicht rückwirkend zur Begründung einer damals sicheren Gegenposition werden."
    ],
    "callout": "Die erste Überschreitung entscheidet den weiteren Verlauf nicht.",
    "takeaways": [
      "Die erste Überschreitung entscheidet den weiteren Verlauf nicht.",
      "Beide Verläufe erreichen aus derselben Treppe zunächst 82.",
      "Warte auf neue Information oder definiere deinen frühen Plan mit passender Entkräftung."
    ],
    "prompt": "Was unterscheidet die beiden Folgen?",
    "answers": [
      {
        "label": "Schon das erste Hoch 83 beweist beide Ausgänge.",
        "explanation": "Ein gemeinsames Hoch liefert keine eindeutige weitere Richtung."
      },
      {
        "label": "Die Kanallinie zwingt den Preis sofort zurück.",
        "explanation": "Das linke Panel zeigt weitere Erweiterung."
      },
      {
        "label": "Der Anschluss beziehungsweise die spätere Rückkehr.",
        "explanation": "Richtig: Der identische Beginn reicht für diese Unterscheidung nicht."
      }
    ],
    "correct": 2
  },
  {
    "number": 19,
    "title": "Eine parallele Projektion mit festen Ankern",
    "summary": "Gleicher Abstand, offenes Ziel.",
    "section": "Beschleunigung und Übertreibung",
    "scenario": "c26-19",
    "paragraphs": [
      "Bei einer Beschleunigung kann eine weitere parallele Linie als Projektionsanker dienen. Dafür müssen Steigung und Abstand der vorhandenen Linien bekannt sein. Die Konstruktion beschreibt ein mögliches Zielband und keine Pflichtbewegung des Marktes.",
      "Am gemeinsamen letzten Index liegen die unteren beiden Linien bei 54 und 72. Die dritte Linie liegt bei 90. Jeder Abstand beträgt 18 Einheiten; die Steigung beträgt für alle Linien drei Einheiten pro Barindex.",
      "Behalte die vorher gesetzten Anker bei und prüf später, ob der Preis die Projektion tatsächlich besucht. Ein durch Zeichnung errechneter Zielpreis ist keine gemessene Erfolgsquote."
    ],
    "callout": "Gleiche parallele Abstände sind Geometrie, keine Gewinnzusage.",
    "takeaways": [
      "Gleiche parallele Abstände sind Geometrie, keine Gewinnzusage.",
      "Am gemeinsamen letzten Index liegen die unteren beiden Linien bei 54 und 72.",
      "Behalte die vorher gesetzten Anker bei und prüfe später, ob der Preis die Projektion tatsächlich besucht."
    ],
    "prompt": "Wie entsteht hier die obere Projektion 90?",
    "answers": [
      {
        "label": "72 plus derselbe Abstand 18.",
        "explanation": "Richtig: Die drei parallelen Linien bleiben gleich weit auseinander."
      },
      {
        "label": "Durch Verdoppeln jedes aktuellen Kurswerts.",
        "explanation": "Das wäre eine andere Konstruktion ohne festen Abstand."
      },
      {
        "label": "Sie muss in jedem folgenden Bar erreicht werden.",
        "explanation": "Die Linie ist ein Plananker, kein vorgeschriebener Kurs."
      }
    ],
    "correct": 0
  },
  {
    "number": 20,
    "title": "Eine Überschreitung kann in zwei Gegenbeinen korrigieren",
    "summary": "Gegenbeine mit echter Pause.",
    "section": "Beschleunigung und Übertreibung",
    "scenario": "c26-20",
    "paragraphs": [
      "Nach einer Übertreibung kann eine Korrektur aus zwei gerichteten Beinen mit einer Zwischenreaktion entstehen. Nicht jede kurze Pause bildet bereits einen abgeschlossenen zweiten Versuch. Die Zählung muss zur gewählten Zeitebene passen.",
      "Links stehen das erste Verkäuferbein von 82 auf 66 und ein Rücklauf auf 73. Rechts folgt ein zweites Verkäuferbein bis 55. Die Zwischenreaktion trennt beide Abschnitte; der zweite Abschnitt ist links noch unbekannt.",
      "Markier Beginn, Ende und Zwischenreaktion. Die Form in diesem Beispiel zeigt eine mögliche Korrektur und legt weder die Zahl aller künftigen Beine noch einen sicheren Endpunkt fest."
    ],
    "callout": "Ein zweites Gegenbein wird erst mit seinen Bars sichtbar.",
    "takeaways": [
      "Ein zweites Gegenbein wird erst mit seinen Bars sichtbar.",
      "Links stehen das erste Verkäuferbein von 82 auf 66 und ein Rücklauf auf 73.",
      "Markiere Beginn, Ende und Zwischenreaktion."
    ],
    "prompt": "Was kommt rechts neu hinzu?",
    "answers": [
      {
        "label": "Die Garantie, dass bei 55 jedes Tief endet.",
        "explanation": "Spätere Tiefs bleiben weiterhin möglich."
      },
      {
        "label": "Ein zweites Verkäuferbein nach der Zwischenreaktion.",
        "explanation": "Richtig: Links ist nur das erste Bein mit seiner Gegenreaktion vorhanden."
      },
      {
        "label": "Ein bereits links abgeschlossener zweiter Abverkauf.",
        "explanation": "Diese Bars erscheinen erst im rechten Panel."
      }
    ],
    "correct": 1
  },
  {
    "number": 21,
    "title": "Die Extension vom alten Extrem messen",
    "summary": "Hochfortschritte 10, 6 und 3.",
    "section": "Schrumpfende Stufen prüfen",
    "scenario": "c26-21",
    "paragraphs": [
      "Schrumpfende Stufen beschreiben immer kleinere Erweiterungen jenseits des vorherigen Extrempunkts. Gemeint ist nicht einfach eine kleinere Kerze. Verglichen werden muss die ganze Strecke vom alten Swinghoch zum neuen Swinghoch.",
      "Die gezeigten Hochs liegen bei 45, 55, 61 und 64. Die Erweiterungen betragen damit zehn, sechs und drei Einheiten. Zwischen den Hochpunkten bestehen weiterhin Rückläufe und überwiegend höhere Tiefs.",
      "Miss alle Erweiterungen mit demselben Bezug und derselben Preiseinheit. Ein neues Hoch kann trotz sinkender Extension entstehen; abnehmender Fortschritt und ein beendeter Trend sind verschiedene Aussagen."
    ],
    "callout": "Weniger neuer Raum bedeutet nicht automatisch Trendende.",
    "takeaways": [
      "Weniger neuer Raum bedeutet nicht automatisch Trendende.",
      "Die gezeigten Hochs liegen bei 45, 55, 61 und 64.",
      "Miss alle Erweiterungen mit demselben Bezug und derselben Preiseinheit."
    ],
    "prompt": "Welche Zahlen beschreiben die Hochfortschritte?",
    "answers": [
      {
        "label": "Die Körpergrößen beliebiger roter Bars.",
        "explanation": "Sie messen nicht den Raum jenseits des vorherigen Hochs."
      },
      {
        "label": "Eine sichere Umkehrwahrscheinlichkeit von 3 Prozent.",
        "explanation": "Drei ist hier eine Preisstrecke und keine Wahrscheinlichkeit."
      },
      {
        "label": "10, 6 und 3 Einheiten.",
        "explanation": "Richtig: 55−45, 61−55 und 64−61 liefern dieselbe Bezugsart."
      }
    ],
    "correct": 2
  },
  {
    "number": 22,
    "title": "Auch die Tiefschritte können schrumpfen",
    "summary": "Verkäufer gewinnen weniger Raum.",
    "section": "Schrumpfende Stufen prüfen",
    "scenario": "c26-22",
    "paragraphs": [
      "Im Abwärtskanal misst du die Erweiterung als Abstand vom vorherigen Tief zum neuen tieferen Tief. Kleinere Tiefschritte zeigen weniger neuen Verkäuferraum. Ob daraus ein größerer Käuferlauf entsteht, bleibt eine eigene Frage.",
      "Die gespiegelte Folge hat Tiefs bei 55, 45, 39 und 36. Die Erweiterungen betragen wieder zehn, sechs und drei Einheiten. Rechts kommt nach dem letzten Tief eine Käuferbewegung hinzu; sie ist eine neue Beobachtung und keine im Tief enthaltene Garantie.",
      "Behandle die kleinere Extension als Warnhinweis für die bisherige Dynamik. Prüf die Stärke der Gegenbars und den Bruch einer vorher bekannten Struktur, bevor du von einer größeren Umkehr sprichst."
    ],
    "callout": "Kleinere Tiefschritte und neue Käuferkontrolle getrennt prüfen.",
    "takeaways": [
      "Kleinere Tiefschritte und neue Käuferkontrolle getrennt prüfen.",
      "Die gespiegelte Folge besitzt Tiefs bei 55, 45, 39 und 36.",
      "Behandle die kleinere Extension als Warnhinweis für die bisherige Dynamik."
    ],
    "prompt": "Was ist aus den Tiefs allein bekannt?",
    "answers": [
      {
        "label": "Der zusätzliche Verkäuferraum nimmt ab.",
        "explanation": "Richtig: Eine weitergehende Käuferumkehr braucht neue Informationen."
      },
      {
        "label": "Der endgültige Tagestiefpunkt steht fest.",
        "explanation": "Spätere Bars können weitere Tiefs bilden."
      },
      {
        "label": "Die Verkäufer haben gar keinen neuen Raum gewonnen.",
        "explanation": "Die Tiefs liegen weiterhin nacheinander tiefer."
      }
    ],
    "correct": 0
  },
  {
    "number": 23,
    "title": "Drei Anläufe allein erzwingen keine Umkehr",
    "summary": "Die Zählung braucht Gegenwirkung.",
    "section": "Schrumpfende Stufen prüfen",
    "scenario": "c26-23",
    "paragraphs": [
      "Drei gerichtete Anläufe können nachlassenden Fortschritt oder eine mögliche Übertreibung zeigen. Sie sind für sich genommen kein Gegen-Entry. Ein weiterer Trendanlauf bleibt möglich, wenn die Gegenseite wenig Wirkung erzielt.",
      "Links stehen vier Hochpunkte mit kleiner werdender Extension. Rechts endet ein kurzer Rücklauf, danach folgen neue Hochs bis 80. Die Zählung war korrekt, doch die größere Verkäuferumkehr bleibt in dieser Folge aus.",
      "Prüf den tatsächlich gewonnenen Gegenraum und ein vorher festgelegtes Triggerniveau. Wer nur die Zahl der Anläufe handelt, überspringt die Frage, ob die Gegenseite überhaupt Kontrolle bekommt."
    ],
    "callout": "Die Zahl der Anläufe ersetzt keine Gegenbestätigung.",
    "takeaways": [
      "Die Zahl der Anläufe ersetzt keine Gegenbestätigung.",
      "Links stehen vier Hochpunkte mit kleiner werdender Extension.",
      "Prüfe den tatsächlich gewonnenen Gegenraum und ein vorher festgelegtes Triggerniveau."
    ],
    "prompt": "Was zeigt das rechte Gegenbeispiel?",
    "answers": [
      {
        "label": "Dass die alten Hochpunkte nie existiert haben.",
        "explanation": "Sie bleiben in beiden Panels identisch erhalten."
      },
      {
        "label": "Weitere Käuferfortsetzung trotz schrumpfender früherer Schritte.",
        "explanation": "Richtig: Das Muster erlaubt eine Warnhypothese, keine Pflichtumkehr."
      },
      {
        "label": "Eine vorab sichere Shortchance ohne Trigger.",
        "explanation": "Die spätere Käuferwirkung widerspricht dieser Sicherheit."
      }
    ],
    "correct": 1
  },
  {
    "number": 24,
    "title": "Schrumpfende Stufen sind nicht immer ein sauberer Keil",
    "summary": "Messung statt Musterschablone.",
    "section": "Schrumpfende Stufen prüfen",
    "scenario": "c26-24",
    "paragraphs": [
      "Einen Keil beschreibt man oft über zusammenlaufende Begrenzungen oder drei Anläufe. Schrumpfende Stufen misst du dagegen an den Erweiterungen jenseits alter Extreme. Die Begriffe können sich überschneiden, müssen aber nicht dasselbe Bild bezeichnen.",
      "Beide Panels erreichen dieselben Hochpunkte 45, 55, 61 und 64. Rechts liegen die Rücklauftiefs deutlich tiefer und unregelmäßiger. Die Hochfortschritte schrumpfen trotzdem; die untere Begrenzung passt nicht zur gleichen engen Zeichnung.",
      "Benenne genau, welche Eigenschaft du misst. Ein Mustername darf die tatsächliche Breite, Stopdistanz oder unordentliche Gegenbewegung nicht verstecken."
    ],
    "callout": "Extension und geometrische Form sind getrennte Eigenschaften.",
    "takeaways": [
      "Extension und geometrische Form sind getrennte Eigenschaften.",
      "Beide Panels erreichen dieselben Hochpunkte 45, 55, 61 und 64.",
      "Benenne genau, welche Eigenschaft du misst."
    ],
    "prompt": "Was bleibt trotz anderer Rücklauftiefs gleich?",
    "answers": [
      {
        "label": "Jeder mögliche Stopabstand.",
        "explanation": "Andere Tiefs verändern die Strukturabstände."
      },
      {
        "label": "Dass beide Bilder exakt dieselbe untere Begrenzung besitzen.",
        "explanation": "Die rechte Folge gibt deutlich mehr Preisraum zurück."
      },
      {
        "label": "Die immer kleineren Erweiterungen der Hochpunkte.",
        "explanation": "Richtig: Diese Messung hängt von den Hochs ab, nicht von einer perfekten Keilform."
      }
    ],
    "correct": 2
  },
  {
    "number": 25,
    "title": "Schwäche, Bruch und Rücktest zeitlich trennen",
    "summary": "Neue Richtung in drei Ständen.",
    "section": "Schrumpfende Stufen prüfen",
    "scenario": "c26-25",
    "paragraphs": [
      "Kleinere Extensions können eine größere Korrektur vorbereiten. Der tatsächliche Strukturbruch ist ein weiteres Ereignis. Ein anschließender Rücktest mit schwacher Gegenwirkung liefert nochmals zusätzliche Information; diese drei Zustände dürfen im Replay nicht zusammenfallen.",
      "Links endet die Folge bei 55 nach dem letzten kleineren Hoch. Rechts fällt der Preis unter die Rücklauftiefreferenz 50, erholt sich auf 54 und fällt weiter auf 36. Erst rechts stehen Bruch, Rücktest und neuer Verkäuferanschluss gemeinsam zur Verfügung.",
      "Notier getrennt: Warnhinweis bekannt, Struktur gebrochen, Rücktest beendet. Auch danach bleibt eine Gegenreaktion möglich; deine Verlustgrenze gehört zu deinem konkreten Plan."
    ],
    "callout": "Warnhinweis, Bruch und Rücktest liefern nacheinander Information.",
    "takeaways": [
      "Warnhinweis, Bruch und Rücktest liefern nacheinander Information.",
      "Links endet die Folge bei 55 nach dem letzten kleineren Hoch.",
      "Notiere getrennt: Warnhinweis bekannt, Struktur gebrochen, Rücktest beendet."
    ],
    "prompt": "Welche Information gab es links noch nicht?",
    "answers": [
      {
        "label": "Den späteren Bruch unter 50 und seinen Rücktest.",
        "explanation": "Richtig: Diese Bars kommen erst rechts hinzu."
      },
      {
        "label": "Die Hochschritte 10, 6 und 3.",
        "explanation": "Die bekannten Hochpunkte erlauben diese Messung bereits links."
      },
      {
        "label": "Die zuvor gezeigten Rückläufe.",
        "explanation": "Sie gehören schon zum linken Verlauf."
      }
    ],
    "correct": 0
  },
  {
    "number": 26,
    "title": "Den Stop dem breiten Rücklauf zuordnen",
    "summary": "Signalstop und Strukturstop.",
    "section": "Entry, Schutz und Lernfälle",
    "scenario": "c26-26",
    "paragraphs": [
      "Im breiten Kanal kann der Stop unter der Entrybar deutlich enger sein als ein Stop unter dem letzten größeren Rücklauftief. Beide Bezüge beschreiben verschiedene Pläne. Ein später gehaltener Kanal beweist nicht, dass auch der engere Stop gehalten hat.",
      "Links markiert der gedachte Plan Entry 60, engen Stop 55 und weiteren Stop 47. Rechts reicht der Rücklauf mit Wick bis 51 und wird danach wieder aufgenommen. Damit ist 55 besucht, während 47 nach dem gedachten Entry unberührt bleibt.",
      "Rechne den gewählten Abstand vor dem Einstieg in Geldrisiko um. Ein weiterer Strukturstop verlangt bei gleichem Budget eine kleinere Position; einen bereits ausgelösten engen Stop rückwirkend umzudeuten ist kein Management."
    ],
    "callout": "Ein gehaltener Kanal kann trotzdem einen engen Stop auslösen.",
    "takeaways": [
      "Ein gehaltener Kanal kann trotzdem einen engen Stop auslösen.",
      "Links markiert der gedachte Plan Entry 60, engen Stop 55 und weiteren Stop 47.",
      "Rechne den gewählten Abstand vor dem Einstieg in Geldrisiko um."
    ],
    "prompt": "Welcher Stoppreis wurde rechts nach dem gedachten Entry besucht?",
    "answers": [
      {
        "label": "Beide Stops zwingend.",
        "explanation": "Das dargestellte Tief reicht nicht bis 47."
      },
      {
        "label": "55, während 47 unberührt bleibt.",
        "explanation": "Richtig: Der Wick 51 liegt zwischen beiden Planpreisen."
      },
      {
        "label": "Keiner, weil der Preis später steigt.",
        "explanation": "Die spätere Erholung löscht den vorherigen Rücklauf nicht."
      }
    ],
    "correct": 1
  },
  {
    "number": 27,
    "title": "Großer Stop begrenzt die Stückzahl",
    "summary": "Budget mit Kostenreserve.",
    "section": "Entry, Schutz und Lernfälle",
    "scenario": "c26-27",
    "paragraphs": [
      "Die Stückzahl ergibt sich aus dem verfügbaren Gesamtbudget und dem geplanten Risiko einer Einheit. Nimm den tatsächlich gewählten Strukturabstand. Eine engere Gegenbewegung in einem anderen Ausschnitt verkleinert diesen Abstand nicht nachträglich.",
      "Für Entry 60 und Stop 47 beträgt die Strecke 13 Punkte. Mit dem ausdrücklich angenommenen Punktwert zwei Dollar und vier Dollar Kostenreserve ergibt das 30 Dollar Planrisiko je Einheit. In 80 Dollar Budget passen zwei Einheiten mit zusammen 60 Dollar.",
      "Rund die Stückzahl ab und erfass Slippage separat. Drei Einheiten würden hier 90 Dollar Planrisiko ergeben. Das Budget ist eine Vorgabe des Plans; der Stop garantiert keine maximale tatsächliche Ausführung."
    ],
    "callout": "Stopstrecke, Punktwert und Kostenreserve gehören in dieselbe Rechnung.",
    "takeaways": [
      "Stopstrecke, Punktwert und Kostenreserve gehören in dieselbe Rechnung.",
      "Für Entry 60 und Stop 47 beträgt die Strecke 13 Punkte.",
      "Runde die Stückzahl ab und erfasse Slippage separat."
    ],
    "prompt": "Wie viele Einheiten passen in den Beispielplan?",
    "answers": [
      {
        "label": "Drei, weil aufgerundet werden sollte.",
        "explanation": "90 Dollar überschreiten die Vorgabe 80."
      },
      {
        "label": "40, weil nur der Punktwert zählt.",
        "explanation": "Der gesamte Stopabstand und die Reserve fehlen in dieser Rechnung."
      },
      {
        "label": "Zwei, weil 80 / 30 abgerundet wird.",
        "explanation": "Richtig: Drei würden das Budget bereits vor zusätzlicher Slippage überschreiten."
      }
    ],
    "correct": 2
  },
  {
    "number": 28,
    "title": "Ein Teilverkauf verändert den verbleibenden Plan",
    "summary": "Teilgewinn ist kein Nullrisiko.",
    "section": "Entry, Schutz und Lernfälle",
    "scenario": "c26-28",
    "paragraphs": [
      "Eine Teilgewinnmitnahme reduziert die Stückzahl, lässt die Restposition aber weiter schwanken. In einem breiten Kanal kannst du einen kurzen Zielanker für einen Teil und ein größeres Fortsetzungsziel für den Rest planen. Beide Teile brauchen nachvollziehbare Ausstiegsregeln.",
      "Im Gedankenbeispiel starten zwei Einheiten bei 50. Eine wird bei 58 geschlossen, die andere bleibt mit Stop 44 offen. Ohne Kosten ergeben acht Einheiten realisierter Preisgewinn und sechs Einheiten verbleibendes Preisrisiko vom Entry zum Stop.",
      "Trenne realisierten Gewinn, offenen Positionswert und verbleibendes Stoprisiko. Ob du den Stop danach versetzt, muss zum Plan passen; ein breiter Rücklauf kann einen hastig enggezogenen Reststop erreichen."
    ],
    "callout": "Teilgewinn und Restposition müssen getrennt gerechnet werden.",
    "takeaways": [
      "Teilgewinn und Restposition müssen getrennt gerechnet werden.",
      "Im Gedankenbeispiel starten zwei Einheiten bei 50.",
      "Trenne realisierten Gewinn, offenen Positionswert und verbleibendes Stoprisiko."
    ],
    "prompt": "Was bleibt nach dem geplanten Teilverkauf?",
    "answers": [
      {
        "label": "Eine Einheit mit eigenem Stoprisiko.",
        "explanation": "Richtig: Der Teilverkauf beendet nur eine der zwei Einheiten."
      },
      {
        "label": "Eine risikolose Restposition unabhängig von Slippage.",
        "explanation": "Der verbleibende Stop kann weiterhin Verlust und abweichende Füllung bringen."
      },
      {
        "label": "Zwei weiterhin offene Einheiten.",
        "explanation": "Eine wurde im Plan ausdrücklich geschlossen."
      }
    ],
    "correct": 0
  },
  {
    "number": 29,
    "title": "Lernfall: Gegenimpulse wechseln die Kontrolle",
    "summary": "Beide Seiten im Tagesverlauf.",
    "section": "Entry, Schutz und Lernfälle",
    "scenario": "c26-29",
    "paragraphs": [
      "Ein früher Käuferimpuls kann an einer bekannten Gegenreferenz scheitern. Ein späterer Verkäuferimpuls kann ebenfalls zurücklaufen. Im breiten Kanal ist nicht jeder schnelle Abschnitt bereits ein neuer dauerhafter Trend; die Folge nach dem Impuls entscheidet mit.",
      "Links steigt der Preis kräftig von 38 auf 59, verliert den Raum aber bis 43. Rechts folgen nach einer Zwischenrally auf 52 neue Verkäufe bis 31. Eine lokale Käuferidee und die spätere größere Verkäuferkontrolle sind zeitlich verschiedene Zustände.",
      "Beschreib jeden Wechsel mit damals sichtbaren Bars. Ersetze den Blick auf die weitere Folge nicht durch Vermutungen darüber, welche Teilnehmer gerade gewinnen müssen."
    ],
    "callout": "Ein einzelner Impuls beweist keine dauerhafte Kontrolle.",
    "takeaways": [
      "Ein einzelner Impuls beweist keine dauerhafte Kontrolle.",
      "Links steigt der Preis kräftig von 38 auf 59, verliert den Raum aber bis 43.",
      "Beschreibe jeden Wechsel mit damals sichtbaren Bars."
    ],
    "prompt": "Welche größere Folge ist erst rechts sichtbar?",
    "answers": [
      {
        "label": "Ein niemals erfolgter früher Käuferimpuls.",
        "explanation": "Der frühe Anstieg bleibt in beiden Panels vorhanden."
      },
      {
        "label": "Verkäuferanschluss nach dem Rücklauf auf 52.",
        "explanation": "Richtig: Diese weiteren Tiefs liegen außerhalb des linken Informationsstands."
      },
      {
        "label": "Ein garantierter Käufergewinn am Tagesende.",
        "explanation": "Die späteren Verkäuferbars sprechen gegen diese Behauptung."
      }
    ],
    "correct": 1
  },
  {
    "number": 30,
    "title": "Lernfall: Drei mögliche Folgen derselben Treppe",
    "summary": "Normal, schneller oder schwächer.",
    "section": "Entry, Schutz und Lernfälle",
    "scenario": "c26-30",
    "paragraphs": [
      "Dieselbe überlappende Ausgangsfolge kann normal weiterlaufen, in eine schnelle Bewegung wechseln oder nachlassenden Fortschritt zeigen. Ein sauberer Lernvergleich behält die früheren Bars bei und variiert nur die danach hinzugekommenen Informationen.",
      "Links läuft die Ausgangsfolge in vergleichbaren breiten Swings weiter. In der Mitte ist eine Beschleunigung und rechts eine Folge kleinerer Hochfortschritte dargestellt. Alle drei beginnen mit exakt derselben bekannten frühen Treppe.",
      "Halte im Replay vor der Aufdeckung fest, was deine Annahme bestätigen und was sie entkräften würde. Bewerte die damalige Entscheidung getrennt vom später günstigen oder ungünstigen Ergebnis."
    ],
    "callout": "Die nächste Stufe wird erst mit der nächsten Folge bekannt.",
    "takeaways": [
      "Die nächste Stufe wird erst mit der nächsten Folge bekannt.",
      "Links läuft die Ausgangsfolge in vergleichbaren breiten Swings weiter.",
      "Halte im Replay vor der Aufdeckung fest, was deine Annahme bestätigen und was sie entkräften würde."
    ],
    "prompt": "Was haben die drei dargestellten Wege gemeinsam?",
    "answers": [
      {
        "label": "Denselben zwingenden Schlusskurs.",
        "explanation": "Die drei Ergänzungen laufen unterschiedlich weit."
      },
      {
        "label": "Eine einzige vorher sichere Handelsrichtung ohne Exit.",
        "explanation": "Die Ausgangsfolge liefert keinen sicheren Ausgang."
      },
      {
        "label": "Dasselbe unveränderte Anfangspräfix.",
        "explanation": "Richtig: Nur die späteren Bars trennen die möglichen Folgen."
      }
    ],
    "correct": 2
  }
];

export const chapterTwentySixLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-26-${number}`;
  return {
    id: `price-action-trends.chapter-26.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 26 · ${d.section}`,
    sourceAnchors: [`Kapitel 26 · ${d.section}`],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 26 · Treppen und breite Kanäle',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Linien und Kerzen zeigen Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Swing, Auslösung und Schutz beurteilen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
