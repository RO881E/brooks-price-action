import type { Lesson } from '../../types';

// Eigene Teilnehmerfälle; Zahlen dienen ausschließlich vereinfachten Lernbeispielen.
const drafts = [
  {
    "title": "Teilnehmer, Rolle und Motiv sind drei Fragen",
    "summary": "Ein Name erklärt noch keinen Auftrag.",
    "paragraphs": [
      "Wer handelt? Eine Privatperson, ein Fonds oder eine Bank. Welche Rolle übernimmt die Person oder Organisation? Sie kann für sich handeln, einen Kundenauftrag vermitteln oder selbst Gegenangebote stellen. Warum handelt sie? Sie kann investieren, ein Risiko absichern oder auf eine Preisbewegung spekulieren. Diese drei Fragen sind miteinander verbunden, aber nicht identisch.",
      "Eine Bank kann morgens einen Kundenauftrag vermitteln und später das Risiko aus einem eigenen Geschäft absichern. „Bank“ bezeichnet in beiden Fällen die Organisation. Vermittlung und Absicherung sind aber unterschiedliche Tätigkeiten. Selbst ein einzelner Marktteilnehmer muss also nicht bei jedem Auftrag denselben Zweck verfolgen.",
      "In diesem Kapitel lernst du typische Zusammenhänge kennen. Sie helfen beim Verständnis des Marktes, identifizieren aber nicht sicher das Motiv hinter einer unbekannten Transaktion. Wir verwenden eigene, vereinfachte Fälle. Wo Angaben fehlen, bleibt die Absicht offen."
    ],
    "columns": [
      {
        "title": "Wer?",
        "tone": "neutral",
        "points": [
          "Privatperson, Fonds, Unternehmen oder Bank.",
          "Beschreibt die Person oder Organisation."
        ]
      },
      {
        "title": "Welche Rolle und welcher Zweck?",
        "tone": "positive",
        "points": [
          "Vermitteln, selbst handeln oder Angebote stellen.",
          "Anlegen, absichern, umschichten oder spekulieren."
        ]
      }
    ],
    "prompt": "Eine Bank kauft einen Vertrag. Kennst du allein daraus ihr Motiv?",
    "answers": [
      {
        "label": "Nein, dazu brauche ich den Zusammenhang des Geschäfts.",
        "explanation": "Richtig: Der Organisationstyp erklärt nicht den konkreten Zweck."
      },
      {
        "label": "Ja, jeder Bankkauf ist dieselbe kurzfristige Prognose.",
        "explanation": "Eine Bank kann Kundenaufträge, eigene Positionen und Absicherungen bearbeiten."
      },
      {
        "label": "Ja, der Kauf verrät ihr gesamtes Portfolio.",
        "explanation": "Eine Transaktion zeigt nicht alle übrigen Positionen."
      }
    ],
    "correct": 0,
    "rule": "Organisation, Tätigkeit und Motiv getrennt benennen."
  },
  {
    "title": "Privatanleger: Sparziel oder kurzfristige Idee?",
    "summary": "Privat bedeutet nicht automatisch kurzfristig.",
    "paragraphs": [
      "Privatanleger handeln oder investieren mit ihrem privaten Vermögen. Hinter diesem Sammelbegriff können sehr verschiedene Ziele stehen: ein langfristiges Sparziel, späterer Geldbedarf, ein geplanter Kauf oder eine kurzfristige Preisidee. Die Bezeichnung sagt weder etwas Sicheres über Erfahrung noch über Haltedauer aus.",
      "Miriam kauft jeden Monat Fondsanteile für ein weit entferntes Sparziel. Robert handelt eine erwartete Bewegung während einer Börsensitzung. Beide sind in diesem Beispiel Privatpersonen. Trotzdem unterscheiden sich ihr Zeithorizont, ihre Häufigkeit und die Frage, wann sie das Geld wieder benötigen.",
      "Kleines Kapital macht einen Auftrag nicht bedeutungslos für seinen Besitzer. Eine Preisbewegung kann für jemanden mit kurzfristigem Geldbedarf unangenehm sein, auch wenn ein anderer die Anlage lange halten möchte. Beurteile den Plan deshalb anhand von Zweck, Zeit und möglichen Verlusten, nicht nur anhand des Etiketts „privat“."
    ],
    "columns": [
      {
        "title": "Miriam im Beispiel",
        "tone": "neutral",
        "points": [
          "Regelmäßiges Sparen.",
          "Geld wird erst viel später benötigt."
        ]
      },
      {
        "title": "Robert im Beispiel",
        "tone": "positive",
        "points": [
          "Kurzfristige Preisidee.",
          "Position soll während einer Sitzung geschlossen werden."
        ]
      }
    ],
    "prompt": "Was haben die beiden Beispielpersonen gemeinsam?",
    "answers": [
      {
        "label": "Beide müssen jede Position am selben Tag schließen.",
        "explanation": "Privatanleger können sehr verschiedene Zeithorizonte haben."
      },
      {
        "label": "Sie handeln privat, verfolgen aber verschiedene Ziele.",
        "explanation": "Richtig: Die Teilnehmergruppe legt weder Strategie noch Haltedauer fest."
      },
      {
        "label": "Beide erhalten einen garantierten Gewinn.",
        "explanation": "Weder Sparziel noch kurzfristiger Plan garantieren Gewinn."
      }
    ],
    "correct": 1,
    "rule": "Privater Handel umfasst unterschiedliche Ziele und Zeithorizonte."
  },
  {
    "title": "Zeithorizonte: derselbe Preis, andere Aufgabe",
    "summary": "Zeit bis zum Ziel und Zeit der Ausführung unterscheiden.",
    "paragraphs": [
      "Der Zeithorizont ist der Zeitraum, für den eine Entscheidung gedacht ist. Ein Anleger kann viele Jahre planen, ein kurzfristiger Trader nur Minuten. Trotzdem müssen beide ihre Aufträge zu einem bestimmten Zeitpunkt ausführen. Lange Haltedauer und kurzfristige Ausführung kommen deshalb auch zusammen vor.",
      "Ein Fonds möchte eine Beteiligung mehrere Jahre halten. Er verteilt seinen Kauf auf mehrere kleinere Aufträge innerhalb eines Tages. Der Tag beschreibt die Ausführung; die Jahre beschreiben die geplante Anlage. Wer nur die kurzen Einzelaufträge sieht, könnte den langfristigen Plan leicht falsch einordnen.",
      "Verschiedene Horizonte können unterschiedliche Toleranzen gegenüber zwischenzeitlichen Bewegungen bedeuten. Ein langer Horizont macht Verluste aber nicht automatisch harmlos. Zahlungsbedarf, Risikogrenzen und veränderte Informationen bleiben wichtig. Beobachtete Handelsgeschwindigkeit und Anlagehorizont sind daher zwei eigene Angaben."
    ],
    "columns": [
      {
        "title": "Anlageentscheidung",
        "tone": "neutral",
        "points": [
          "Geplante Haltedauer: mehrere Jahre.",
          "Bezieht sich auf das wirtschaftliche Ziel."
        ]
      },
      {
        "title": "Ausführung",
        "tone": "positive",
        "points": [
          "Kleinere Teilaufträge an einem Tag.",
          "Bezieht sich auf den Weg in die Position."
        ]
      }
    ],
    "prompt": "Beweisen mehrere Käufe innerhalb eines Tages eine geplante Haltedauer von wenigen Minuten?",
    "answers": [
      {
        "label": "Ja, jeder Einzelauftrag bestimmt die spätere Haltedauer.",
        "explanation": "Ein großer langfristiger Plan kann aufgeteilt ausgeführt werden."
      },
      {
        "label": "Ja, langfristige Anleger brauchen niemals eine Ausführung.",
        "explanation": "Auch eine langfristige Anlage beginnt mit einem tatsächlich ausgeführten Geschäft."
      },
      {
        "label": "Nein, die Ausführung kann zu einer langfristigen Anlage gehören.",
        "explanation": "Richtig: Auftragstakt und wirtschaftlicher Horizont sind verschieden."
      }
    ],
    "correct": 2,
    "rule": "Ausführungsdauer und Anlagehorizont getrennt lesen."
  },
  {
    "title": "Emittenten: Kapital aufnehmen statt einen Chart handeln",
    "summary": "Neue Wertpapiere finanzieren ein Vorhaben.",
    "paragraphs": [
      "Ein Emittent gibt ein Wertpapier heraus. Ein Unternehmen kann beispielsweise neue Aktien oder eine Anleihe ausgeben, um ein Vorhaben zu finanzieren. Bei Aktien entstehen Beteiligungsrechte; bei einer Anleihe entstehen Zahlungsansprüche nach dem Vertrag. Die Produktarten kennst du aus Kapitel 2.",
      "Unser erfundenes Unternehmen plant eine neue Produktionshalle. Es gibt eine Anleihe mit insgesamt 1 Million Euro Nennwert aus. Anleger stellen Kapital nach den Bedingungen zur Verfügung. Die spätere Weitergabe einer vorhandenen Anleihe zwischen zwei Anlegern bringt dem Unternehmen nicht erneut automatisch den Kaufpreis ein.",
      "Ein staatlicher Emittent kann ebenfalls Geld aufnehmen, etwa zur Finanzierung seiner Ausgaben. Ausgabe, späterer Handel und Rückzahlung sind dabei unterschiedliche Vorgänge. Deshalb ist nicht jeder sichtbare Handel mit einem Unternehmenspapier eine neue Finanzierungsentscheidung dieses Unternehmens."
    ],
    "columns": [
      {
        "title": "Neue Ausgabe",
        "tone": "neutral",
        "points": [
          "Kapitalaufnahme durch den Emittenten.",
          "Neue Beteiligungen oder Zahlungsansprüche."
        ]
      },
      {
        "title": "Späterer Weiterverkauf",
        "tone": "positive",
        "points": [
          "Vorhandenes Wertpapier wechselt den Halter.",
          "Kaufpreis fließt nicht automatisch erneut an den Emittenten."
        ]
      }
    ],
    "prompt": "Zwei Anleger handeln eine bereits ausgegebene Anleihe. Bekommt das Unternehmen dadurch automatisch neues Kapital?",
    "answers": [
      {
        "label": "Nein, das ist zunächst ein Weiterverkauf.",
        "explanation": "Richtig: Ausgabe und Sekundärhandel sind verschiedene Vorgänge."
      },
      {
        "label": "Ja, jeder Börsentrade ist eine neue Anleiheausgabe.",
        "explanation": "Ein vorhandenes Wertpapier kann gehandelt werden, ohne neu ausgegeben zu werden."
      },
      {
        "label": "Nein, Unternehmen können grundsätzlich keine Anleihen ausgeben.",
        "explanation": "Die neue Ausgabe einer Unternehmensanleihe ist möglich, aber ein anderer Vorgang."
      }
    ],
    "correct": 0,
    "rule": "Finanzierung durch Ausgabe und Weiterhandel auseinanderhalten."
  },
  {
    "title": "Unternehmen: Geld für ein echtes Geschäft bewegen",
    "summary": "Ein Währungskauf kann eine Rechnung bezahlen.",
    "paragraphs": [
      "Unternehmen handeln nicht nur, weil sie eine Marktbewegung erwarten. Sie können Währungen für Zahlungen benötigen, kurzfristig freie Mittel anlegen oder bestehende Risiken verändern. Die zuständige Finanzfunktion wird häufig Treasury genannt. Ihre Aufgabe hängt am Geschäft des Unternehmens.",
      "Eine erfundene Importfirma muss eine Rechnung über 12.000 US-Dollar bezahlen. Bei EUR/USD 1,20 benötigt sie vereinfacht 10.000 Euro, denn 12.000 / 1,20 = 10.000. Der Dollarkauf kann schlicht der Zahlung dienen. Er beweist nicht, dass die Firma Dollar wegen eines erwarteten Kurssprungs kauft.",
      "Liegt die Zahlung erst in der Zukunft, kann eine Kursänderung den späteren Eurobedarf verändern. Die Firma kann dieses Risiko offenlassen oder vertraglich beeinflussen. Zum Verständnis trenne die Warenrechnung, den erforderlichen Währungstausch und eine mögliche Absicherung: Das sind verbundene, aber eigene Vorgänge."
    ],
    "columns": [
      {
        "title": "Wirtschaftlicher Anlass",
        "tone": "neutral",
        "points": [
          "Rechnung: 12.000 US-Dollar.",
          "Die Firma braucht Dollar für eine Zahlung."
        ]
      },
      {
        "title": "Vereinfachter Tausch",
        "tone": "positive",
        "points": [
          "EUR/USD 1,20.",
          "12.000 / 1,20 = 10.000 Euro vor Kosten."
        ]
      }
    ],
    "prompt": "Muss der Dollarkauf der Firma eine positive Dollarprognose sein?",
    "answers": [
      {
        "label": "Ja, Unternehmen handeln ausschließlich Kursprognosen.",
        "explanation": "Unternehmen benötigen Märkte auch für Zahlungen und Finanzierung."
      },
      {
        "label": "Nein, er kann allein der Zahlung einer Rechnung dienen.",
        "explanation": "Richtig: Ein Zahlungsbedarf ist ein eigener Handelsgrund."
      },
      {
        "label": "Ja, die Rechnung beweist eine kurzfristige Spekulation.",
        "explanation": "Der wirtschaftliche Anlass ist hier ausdrücklich eine Warenzahlung."
      }
    ],
    "correct": 1,
    "rule": "Handelsbedarf kann aus einem Geschäft außerhalb des Marktes entstehen."
  },
  {
    "title": "Absichern: bestehendes Risiko und Gegenwirkung",
    "summary": "Der zusätzliche Vertrag gehört zur Gesamtposition.",
    "paragraphs": [
      "Eine Absicherung soll ein bereits vorhandenes wirtschaftliches Risiko verändern. Ein Produzent, der später verkaufen wird, kann sinkende Preise fürchten. Ein Käufer, der später einkaufen muss, kann steigende Preise fürchten. Beide nutzen möglicherweise dieselbe Vertragsart, benötigen aber unterschiedliche Gegenwirkungen.",
      "Unser erfundener Produzent erwartet 100 Einheiten Ware. Fällt ihr Verkaufspreis um 5 Euro je Einheit, sinkt der Erlös um 500 Euro. Eine passende Verkaufsposition in einem vereinfachten Vertrag gewinnt gleichzeitig 500 Euro. Zusammengenommen gleichen sich diese Preiswirkungen im Beispiel vor Kosten aus.",
      "Die Absicherung soll hier den zukünftigen Erlös berechenbarer machen, nicht die maximale Freude über jede Preisbewegung liefern. Steigt der Warenpreis, kann der Vertrag verlieren, während das Warengeschäft gewinnt. Der Verlust in einer Teilposition zeigt deshalb allein noch nicht, ob die Absicherung ihren Zweck erfüllt hat."
    ],
    "columns": [
      {
        "title": "Sinkender Preis im Beispiel",
        "tone": "neutral",
        "points": [
          "Ware: 100 × −5 = −500 Euro Erlösänderung.",
          "Absicherungsvertrag: +500 Euro."
        ]
      },
      {
        "title": "Steigender Preis im Beispiel",
        "tone": "positive",
        "points": [
          "Ware: 100 × +5 = +500 Euro Erlösänderung.",
          "Absicherungsvertrag: −500 Euro."
        ]
      }
    ],
    "prompt": "Ist ein Verlust im Absicherungsvertrag allein der Beweis für eine misslungene Absicherung?",
    "answers": [
      {
        "label": "Ja, jede Teilposition muss bei jeder Bewegung gewinnen.",
        "explanation": "Gegenläufige Wirkungen sind gerade die Idee der Absicherung."
      },
      {
        "label": "Ja, die Ware verliert immer denselben Betrag zusätzlich.",
        "explanation": "Im Beispiel wirken Warenpreis und Absicherungsvertrag entgegengesetzt."
      },
      {
        "label": "Nein, die Wirkung auf das ursprüngliche Geschäft muss mitgerechnet werden.",
        "explanation": "Richtig: Der Vertrag gehört zum Gesamtzusammenhang."
      }
    ],
    "correct": 2,
    "rule": "Eine Absicherung anhand der gemeinsamen Wirkung beurteilen."
  },
  {
    "title": "Absicherungen passen nicht immer genau",
    "summary": "Menge, Termin und Bezug können abweichen.",
    "paragraphs": [
      "Das perfekte Gegenbeispiel aus der vorigen Lektion setzt passend gewählte Bedingungen voraus. In der Praxis können die Menge des Vertrags, der Zahlungstermin oder der Preisbezug vom echten Geschäft abweichen. Das verbleibende Risiko verschwindet nicht durch die Bezeichnung „abgesichert“.",
      "Unser Produzent erwartet 100 Einheiten, kann im Beispiel aber nur 80 Einheiten passend absichern. Sinkt der Warenpreis um 5 Euro, verändert sich der Erlös um −500 Euro. Der Vertrag wirkt mit +400 Euro dagegen. Es bleiben −100 Euro gemeinsame Preiswirkung vor Kosten. Die Absicherung ist hier teilweise, nicht vollständig.",
      "Ein anderer Fall: Der Vertrag bezieht sich auf eine andere Warensorte als die verkaufte Ware. Ihre Preise können sich ähnlich, aber nicht identisch entwickeln. Die Veränderung des Preisabstands erzeugt Basisrisiko. Für den Einstieg reichen drei Prüfungen: Passt die Menge? Passt der Zeitpunkt? Passt der Preisbezug?"
    ],
    "columns": [
      {
        "title": "Teilweise Absicherung",
        "tone": "neutral",
        "points": [
          "Ware: 100 Einheiten × −5 Euro = −500 Euro.",
          "Vertrag: 80 Einheiten × +5 Euro = +400 Euro."
        ]
      },
      {
        "title": "Gemeinsame Preiswirkung",
        "tone": "positive",
        "points": [
          "−500 + 400 = −100 Euro.",
          "20 Einheiten bleiben im Beispiel ohne Gegenwirkung."
        ]
      }
    ],
    "prompt": "Wie groß ist die gemeinsame Preiswirkung vor Kosten?",
    "answers": [
      {
        "label": "−100 Euro.",
        "explanation": "Richtig: Die 80 abgesicherten Einheiten gleichen nicht alle 100 Einheiten aus."
      },
      {
        "label": "Null, weil das Wort Absicherung verwendet wurde.",
        "explanation": "Die tatsächlich abgesicherte Menge muss gerechnet werden."
      },
      {
        "label": "−900 Euro, weil beide Positionen hier gleichgerichtet sind.",
        "explanation": "Der Vertrag gewinnt im Beispiel und wirkt der Erlösminderung entgegen."
      }
    ],
    "correct": 0,
    "rule": "Abgesichert ist keine Aussage über vollständige Risikofreiheit."
  },
  {
    "title": "Fondsverwaltung: innerhalb eines Auftrags handeln",
    "summary": "Ein Mandat setzt Ziele und Grenzen.",
    "paragraphs": [
      "Eine Fondsverwaltung handelt für das Vermögen eines Fonds nach dessen Anlagebedingungen. Ein Mandat ist der vereinbarte Auftrag mit Zielen und Grenzen. Es kann beispielsweise festlegen, welche Anlagen infrage kommen, wie breit gestreut werden soll und welche Risiken zulässig sind.",
      "Ein erfundener Fonds darf höchstens 10 % seines Vermögens in einer einzelnen Aktie halten. Diese Aktie steigt stark; ihre Gewichtung erreicht 12 %. Die Verwaltung verkauft einen Teil, um die vorgegebene Grenze wieder einzuhalten. Das ist keine zwingende Aussage, dass sie das Unternehmen jetzt für schlecht hält.",
      "Institutionell bedeutet hier, dass eine Organisation professionell und im Rahmen ihrer Aufgaben handelt. Es garantiert weder Gewinn noch ein überlegenes Urteil bei jedem Auftrag. Um einen Fondsauftrag zu verstehen, sind Anlagebedingungen, aktuelle Bestände und mögliche Zahlungsflüsse oft hilfreicher als eine vermutete Chartmeinung."
    ],
    "columns": [
      {
        "title": "Vorgegebener Rahmen",
        "tone": "neutral",
        "points": [
          "Maximal 10 % in einer Aktie.",
          "Mandat bestimmt die Grenze."
        ]
      },
      {
        "title": "Bewegung und Reaktion",
        "tone": "positive",
        "points": [
          "Gewichtung steigt auf 12 %.",
          "Teilverkauf stellt den Rahmen wieder her."
        ]
      }
    ],
    "prompt": "Warum kann der Fonds im Beispiel einen Teil der Aktie verkaufen?",
    "answers": [
      {
        "label": "Weil Fonds immer kurz vor einem sicheren Kurssturz verkaufen.",
        "explanation": "Die Teilnehmerart verspricht keine sichere Prognose."
      },
      {
        "label": "Um seine vorgegebene Gewichtungsgrenze einzuhalten.",
        "explanation": "Richtig: Eine Regel kann den Verkauf auslösen, ohne dass eine negative Prognose nötig ist."
      },
      {
        "label": "Weil die Aktienart durch den Kursanstieg zur Anleihe wird.",
        "explanation": "Der Kurs ändert nicht die Produktart."
      }
    ],
    "correct": 1,
    "rule": "Ein Fondsauftrag kann aus seinem Mandat entstehen."
  },
  {
    "title": "Aktiv und indexorientiert: verschiedene Entscheidungsregeln",
    "summary": "Nachbilden braucht ebenfalls tatsächliche Geschäfte.",
    "paragraphs": [
      "Eine aktive Verwaltung wählt Anlagen nach ihren Entscheidungen innerhalb des vereinbarten Rahmens. Eine indexorientierte Verwaltung versucht dagegen, eine festgelegte Indexentwicklung nachzubilden. Welche Geschäfte nötig sind, hängt von der Umsetzung ab: Anlagen können direkt gehalten oder vertraglich abgebildet werden.",
      "Ein vereinfachter Fonds hält die Aktien eines erfundenen Index direkt. Wenn die Indexregeln eine Aktie aufnehmen und eine andere entfernen, muss die Verwaltung ihre Zusammensetzung entsprechend anpassen. Der Kauf der neuen Aktie kann damit aus den Indexregeln stammen, nicht aus einer eigenen kurzfristigen Prognose.",
      "Indexorientiert heißt nicht „macht niemals eine Order“. Zahlungszuflüsse, Auszahlungen und Änderungen der Zusammensetzung können Handel erforderlich machen. Aktiv heißt wiederum nicht automatisch erfolgreich. Beide Beschreibungen sagen etwas über die Entscheidungsregeln; das spätere Ergebnis muss getrennt beurteilt werden."
    ],
    "columns": [
      {
        "title": "Aktive Verwaltung",
        "tone": "neutral",
        "points": [
          "Auswahl nach Verwaltungsentscheidungen.",
          "Innerhalb des vereinbarten Rahmens."
        ]
      },
      {
        "title": "Indexorientierte Verwaltung",
        "tone": "positive",
        "points": [
          "Nachbildung nach festgelegten Indexregeln.",
          "Anpassungen können Käufe und Verkäufe benötigen."
        ]
      }
    ],
    "prompt": "Warum kauft der vereinfachte Indexfonds die neu aufgenommene Aktie?",
    "answers": [
      {
        "label": "Weil indexorientierte Fonds nie nach Regeln handeln.",
        "explanation": "Die Indexregeln sind gerade der Bezug dieser Verwaltung."
      },
      {
        "label": "Weil eine Aufnahme einen sicheren Gewinn garantiert.",
        "explanation": "Eine Indexaufnahme ist keine Gewinnzusage."
      },
      {
        "label": "Um seine Zusammensetzung an die Indexregeln anzupassen.",
        "explanation": "Richtig: Hier ist die Nachbildung der Anlass."
      }
    ],
    "correct": 2,
    "rule": "Die Entscheidungsregel erklärt den Auftrag, nicht seinen sicheren Erfolg."
  },
  {
    "title": "Rebalancing: die Mischung wiederherstellen",
    "summary": "Gewichte ändern sich auch ohne neue Einzahlung.",
    "paragraphs": [
      "Rebalancing bedeutet, eine Portfoliomischung wieder an gewünschte Gewichte anzupassen. Ein Portfolio ist die Gesamtheit der betrachteten Anlagen. Wenn sich deren Preise unterschiedlich verändern, verschieben sich ihre Anteile am Gesamtwert, auch ohne neue Einzahlung.",
      "Unser erfundenes Portfolio beginnt mit 6.000 Euro Aktien und 4.000 Euro Anleihen: insgesamt 10.000 Euro, also 60 % und 40 %. Der Aktienwert steigt auf 7.000 Euro, die Anleihen bleiben bei 4.000. Das Portfolio hat nun 11.000 Euro. Für eine erneute 60/40-Mischung sollen 6.600 Euro in Aktien und 4.400 in Anleihen liegen.",
      "Im vereinfachten Fall werden 400 Euro Aktien verkauft und 400 Euro Anleihen gekauft. Das Rebalancing verkauft hier einen Teil der gestiegenen Anlage. Es braucht keine Prognose, dass diese Anlage morgen fallen wird. Andere Portfolios nutzen Einzahlungen oder andere Regeln; Kosten und reale Ausführung kommen hinzu."
    ],
    "columns": [
      {
        "title": "Nach dem Aktienanstieg",
        "tone": "neutral",
        "points": [
          "Aktien 7.000; Anleihen 4.000 Euro.",
          "Gesamtwert 11.000 Euro."
        ]
      },
      {
        "title": "Ziel 60/40 vor Kosten",
        "tone": "positive",
        "points": [
          "Aktien: 0,60 × 11.000 = 6.600 Euro.",
          "400 Euro Aktien verkaufen, 400 Euro Anleihen kaufen."
        ]
      }
    ],
    "prompt": "Wie viel wird im Beispiel von Aktien zu Anleihen umgeschichtet?",
    "answers": [
      {
        "label": "400 Euro.",
        "explanation": "Richtig: Aktien fallen von 7.000 auf den Zielwert 6.600 Euro."
      },
      {
        "label": "1.000 Euro, weil jede Aktiensteigerung vollständig verkauft wird.",
        "explanation": "Die Zielgewichte gelten für den neuen Gesamtwert von 11.000 Euro."
      },
      {
        "label": "Null, weil Gewichte ohne Einzahlung nicht wechseln.",
        "explanation": "Unterschiedliche Kursbewegungen verändern die Gewichte."
      }
    ],
    "correct": 0,
    "rule": "Eine Umschichtung kann aus Zielgewichten statt aus einer Prognose entstehen."
  },
  {
    "title": "Zu- und Abflüsse: handeln, weil Geld bewegt wird",
    "summary": "Ein Verkauf kann eine Auszahlung ermöglichen.",
    "paragraphs": [
      "Fonds erhalten neue Einzahlungen und müssen gegebenenfalls Geld für Rückgaben von Anteilen bereitstellen. Bei einem Zufluss können Anlagen gekauft werden. Bei einem Abfluss können vorhandene liquide Mittel genutzt oder Anlagen verkauft werden. Der konkrete Weg hängt von den Bedingungen und der Umsetzung ab.",
      "Unser vereinfachter Fonds soll 10.000 Euro auszahlen und verfügt bereits über 3.000 Euro frei verfügbare Kasse. Wenn er den übrigen Bedarf durch Verkäufe deckt, benötigt er 7.000 Euro Nettoerlös. Hier ist die Auszahlung der Anlass des Verkaufs. Er beweist allein keine negative Meinung über die verkauften Anlagen.",
      "Ob ein Zufluss oder Abfluss sofort bestimmte Orders erzeugt, lässt sich nicht aus einer einzelnen Meldung garantieren. Bestand, Reserven und Abwicklung spielen mit. Merke dir für die Marktbeobachtung: Liquiditätsbedarf, also der Bedarf an verfügbarer Zahlungsfähigkeit, ist ein eigenes Motiv neben der Preisprognose."
    ],
    "columns": [
      {
        "title": "Auszahlung im Beispiel",
        "tone": "neutral",
        "points": [
          "Benötigt: 10.000 Euro.",
          "Vorhandene Kasse: 3.000 Euro."
        ]
      },
      {
        "title": "Restbedarf",
        "tone": "positive",
        "points": [
          "10.000 − 3.000 = 7.000 Euro.",
          "Verkäufe können den fehlenden Nettoerlös beschaffen."
        ]
      }
    ],
    "prompt": "Welcher Anlass ist im Beispiel ausdrücklich angegeben?",
    "answers": [
      {
        "label": "Die Verwaltung weiß sicher, dass alle Kurse fallen.",
        "explanation": "Diese Prognose wird durch den Zahlungsbedarf nicht belegt."
      },
      {
        "label": "Der Fonds benötigt Geld für eine Auszahlung.",
        "explanation": "Richtig: Der Bedarf an verfügbaren Mitteln erklärt den Verkauf."
      },
      {
        "label": "Der Fonds erhält 10.000 Euro neue Einzahlungen.",
        "explanation": "Das Beispiel beschreibt eine Auszahlung, keinen Zufluss."
      }
    ],
    "correct": 1,
    "rule": "Auszahlungen können Verkauf erzeugen, ohne eine negative Marktmeinung."
  },
  {
    "title": "Pensionsfonds und Versicherer: heutige Anlagen, spätere Zahlungen",
    "summary": "Verpflichtungen beeinflussen die Auswahl.",
    "paragraphs": [
      "Ein kapitalgedeckter Pensionsfonds legt Mittel für spätere Versorgungszahlungen an. Ein Versicherer hält Anlagen, aus denen unter anderem spätere Leistungszahlungen finanziert werden sollen. Diese Organisationen beachten daher nicht allein mögliche Kursgewinne, sondern auch Termine, Zahlungsfähigkeit und die Art ihrer Verpflichtungen.",
      "Eine erfundene Organisation erwartet in fünf Jahren eine Zahlung von 100.000 Euro. Eine Anleihe mit passenden Zahlungsbedingungen kann helfen, diesen Bedarf zeitlich einzuordnen. Ob sie dafür geeignet ist, hängt aber auch von Ausfallrisiko, Währung und tatsächlichen Zahlungen ab. Der Fälligkeitstermin allein reicht nicht.",
      "Ein langer Verpflichtungshorizont bedeutet nicht, dass die Organisation nie früher handeln muss. Neue Verpflichtungen, geänderte Risiken oder Mittelabflüsse können Anpassungen auslösen. Nicht jede Altersversorgung ist zudem als Anlagefonds organisiert. Wir betrachten hier ausdrücklich die kapitalgedeckte Form mit angelegtem Vermögen."
    ],
    "columns": [
      {
        "title": "Wirtschaftliche Aufgabe",
        "tone": "neutral",
        "points": [
          "Heutige Mittel für spätere Zahlungen anlegen.",
          "Zahlungstermine und Verpflichtungen beachten."
        ]
      },
      {
        "title": "Produktprüfung bleibt nötig",
        "tone": "positive",
        "points": [
          "Währung, Zahlungsbedingungen und Ausfallrisiko.",
          "Passender Termin allein garantiert keine Zahlung."
        ]
      }
    ],
    "prompt": "Warum kann eine Organisation mit späteren Verpflichtungen Anleihen prüfen?",
    "answers": [
      {
        "label": "Weil jede Anleihe garantiert risikofrei ist.",
        "explanation": "Vertragliche Zahlungen können ausfallen."
      },
      {
        "label": "Weil ein langer Horizont jede spätere Anpassung verbietet.",
        "explanation": "Verpflichtungen und Bedingungen können sich ändern."
      },
      {
        "label": "Weil deren Zahlungsstruktur zum späteren Bedarf passen kann.",
        "explanation": "Richtig: Der Bezug zu Verpflichtungen ist ein möglicher Anlagegrund."
      }
    ],
    "correct": 2,
    "rule": "Anlageentscheidungen können an späteren Verpflichtungen ausgerichtet sein."
  },
  {
    "title": "Banken: mehrere Tätigkeiten unter einem Namen",
    "summary": "Kundenservice und eigenes Risiko getrennt betrachten.",
    "paragraphs": [
      "Banken können Zahlungen abwickeln, Kredite vergeben, Kunden bei Wertpapiergeschäften unterstützen und eigene Finanzrisiken steuern. Welche Tätigkeiten eine konkrete Bank betreibt, hängt von ihrem Geschäftsmodell ab. Der Name „Bank“ benennt daher noch keinen bestimmten Handelsstil.",
      "Im Beispiel übernimmt eine Bank zunächst einen Währungstausch für eine Firmenkundin. Aus dem Geschäft kann bei ihr eine eigene Währungsposition entstehen. Sie schließt anschließend ein weiteres Geschäft, um diese Position zu verringern. Dieses zweite Geschäft kann eine Absicherung sein, obwohl die erste Kundin einen Zahlungszweck hatte.",
      "Aus einer Banktransaktion kannst du nicht sicher die Meinung aller Kunden oder die Gesamtmeinung der Bank ableiten. Verschiedene Aufgaben, Bestände und Abteilungen können zusammenwirken. Behandle die Organisation deshalb nicht wie einen einzelnen Menschen mit genau einer Marktprognose."
    ],
    "columns": [
      {
        "title": "Kundengeschäft",
        "tone": "neutral",
        "points": [
          "Kundin benötigt einen Währungstausch.",
          "Bank unterstützt die Abwicklung."
        ]
      },
      {
        "title": "Risikosteuerung danach",
        "tone": "positive",
        "points": [
          "Eine eigene Währungsposition kann entstehen.",
          "Ein weiteres Geschäft kann die Position reduzieren."
        ]
      }
    ],
    "prompt": "Warum kann die Bank nach einem Kundengeschäft eine weitere Transaktion tätigen?",
    "answers": [
      {
        "label": "Um das eigene entstandene Risiko zu verändern.",
        "explanation": "Richtig: Kundenzweck und anschließende Risikosteuerung können verschieden sein."
      },
      {
        "label": "Weil jede Bankorder das Motiv aller Kunden verrät.",
        "explanation": "Eine einzelne Transaktion erlaubt diese Schlussfolgerung nicht."
      },
      {
        "label": "Weil Banken grundsätzlich nie eigene Positionen besitzen.",
        "explanation": "Eigene Positionen können aus verschiedenen Tätigkeiten entstehen."
      }
    ],
    "correct": 0,
    "rule": "Kundenauftrag und anschließende Bankposition getrennt betrachten."
  },
  {
    "title": "Broker und Dealer: vermitteln oder selbst Gegenpartei sein",
    "summary": "Die Rollen können in einer Organisation zusammenkommen.",
    "paragraphs": [
      "Ein Broker vermittelt beziehungsweise bearbeitet Kundenaufträge im vorgesehenen Rahmen. Ein Dealer handelt auf eigene Rechnung und kann selbst Gegenpartei eines Kunden werden. „Auf eigene Rechnung“ bedeutet, dass das Geschäft zum eigenen Bestand und Ergebnis gehört. Diese Rollen unterscheiden sich, auch wenn eine Organisation beide Aufgaben übernehmen kann.",
      "In Fall A sucht der Vermittler eine passende verkaufende Seite für Miriams Kaufauftrag. In Fall B verkauft ein Händler aus eigener Position direkt an sie. Miriam erhält in beiden Fällen einen Kauf, aber die Rolle des Anbieters und der Weg zur Gegenpartei unterscheiden sich.",
      "Die sichtbare Oberfläche allein erklärt nicht die konkrete Rolle. Dafür müssen Auftragsweg und Ausführungsbedingungen gelesen werden. Keine der Rollen garantiert einen guten Preis oder beschreibt automatisch unredliches Verhalten. Es geht hier darum, Vermittlung und eigenes Handeln korrekt auseinanderzuhalten."
    ],
    "columns": [
      {
        "title": "Fall A: vermitteln",
        "tone": "neutral",
        "points": [
          "Kundenauftrag wird bearbeitet.",
          "Eine passende Gegenpartei wird gesucht."
        ]
      },
      {
        "title": "Fall B: eigenes Geschäft",
        "tone": "positive",
        "points": [
          "Händler ist selbst die verkaufende Seite.",
          "Das Geschäft verändert seinen eigenen Bestand."
        ]
      }
    ],
    "prompt": "Was macht den Händler im Fall B zum Dealer?",
    "answers": [
      {
        "label": "Dass seine Oberfläche eine bestimmte Farbe besitzt.",
        "explanation": "Die Gestaltung erklärt die wirtschaftliche Rolle nicht."
      },
      {
        "label": "Er handelt selbst auf eigene Rechnung als Gegenpartei.",
        "explanation": "Richtig: Das ist eine andere Rolle als die bloße Vermittlung."
      },
      {
        "label": "Dass jeder seiner Trades risikofrei ist.",
        "explanation": "Ein eigenes Geschäft kann Preis- und Bestandsrisiken erzeugen."
      }
    ],
    "correct": 1,
    "rule": "Vermitteln und auf eigene Rechnung handeln sind verschiedene Rollen."
  },
  {
    "title": "Market Maker: Handel ermöglichen und Bestand steuern",
    "summary": "Zwei Angebote sind noch kein risikofreier Gewinn.",
    "paragraphs": [
      "Ein Market Maker stellt Kauf- und Verkaufsangebote und kann selbst Gegenpartei werden. So hilft er anderen, Handelswünsche umzusetzen. Im Gegenzug versucht er, seine Tätigkeit wirtschaftlich zu betreiben. Die Spanne zwischen Angeboten kann zu Einnahmen beitragen, aber Preisänderungen und andere Kosten können dagegen wirken.",
      "Unser erfundener Händler bietet an, zu 99 Euro zu kaufen und zu 101 Euro zu verkaufen. Werden beide Seiten für je eine Einheit ohne weitere Veränderungen ausgeführt, entsteht 2 Euro Differenz vor Kosten. Kauft er aber erst zu 99 und verkauft den Bestand nach einer Marktbewegung nur zu 96, beträgt die Differenz −3 Euro.",
      "Bestand ist die aktuell gehaltene Position. Ein Händler kann Menge und Preise seiner Angebote verändern, um Bestandsrisiko zu steuern. Daraus lässt sich nicht sicher folgern, dass er den nächsten Marktverlauf kennt. Auch angezeigte Angebote sind keine Zusage für eine spätere Ausführung."
    ],
    "columns": [
      {
        "title": "Vereinfachter günstiger Ablauf",
        "tone": "neutral",
        "points": [
          "Kauf 99; Verkauf 101 Euro.",
          "101 − 99 = +2 Euro vor Kosten."
        ]
      },
      {
        "title": "Ungünstige Bestandsbewegung",
        "tone": "positive",
        "points": [
          "Kauf 99; späterer Verkauf 96 Euro.",
          "96 − 99 = −3 Euro vor Kosten."
        ]
      }
    ],
    "prompt": "Warum garantiert der angezeigte Spread keinen Gewinn?",
    "answers": [
      {
        "label": "Weil Market Maker keine eigene Gegenpartei sein können.",
        "explanation": "Gerade das Stellen eigener Angebote gehört zu dieser Rolle."
      },
      {
        "label": "Weil 101 minus 99 immer null ergibt.",
        "explanation": "Die Differenz beträgt zwei; unsicher ist der tatsächliche Ablauf."
      },
      {
        "label": "Die zweite Ausführung und die Preisentwicklung sind noch offen.",
        "explanation": "Richtig: Der eigene Bestand kann vor dem Verkauf an Wert verlieren."
      }
    ],
    "correct": 2,
    "rule": "Angebotsspanne, Ausführung und Bestandsrisiko getrennt rechnen."
  },
  {
    "title": "Arbitrage: Preisunterschiede zwischen verbundenen Geschäften",
    "summary": "Ein sichtbarer Abstand muss tatsächlich nutzbar sein.",
    "paragraphs": [
      "Arbitrage versucht, zusammenhängende Preisunterschiede durch passende Gegengeschäfte auszunutzen. Im einfachsten Lernfall kann derselbe übertragbare Vermögenswert an einem Ort billiger gekauft und an einem anderen teurer verkauft werden. Dazu müssen die Bedingungen wirklich zusammenpassen.",
      "Unser erfundenes, gleichzeitig ausführbares Beispiel bietet den identischen Vermögenswert am Ort A zum Kauf für 100 Euro und am Ort B zum Verkauf für 101 Euro. Die Bruttodifferenz ist 1 Euro. Betragen die gesamten Kosten 0,60 Euro, verbleiben rechnerisch 0,40 Euro. Kosten von 1,20 Euro würden die Differenz dagegen übersteigen.",
      "Die einfache Rechnung setzt identische Rechte, passende Mengen und tatsächlich erreichbare Ausführungen voraus. Ändert sich eine Seite, bevor sie ausgeführt ist, kann ein Risiko entstehen. Unterschiedliche Währungen, Abwicklung oder Lieferbedingungen können ebenfalls relevant sein. Zwei ähnliche Namen und zwei angezeigte Preise reichen nicht als Beweis für einen nutzbaren Vorteil."
    ],
    "columns": [
      {
        "title": "Identischer Vermögenswert im Lernfall",
        "tone": "neutral",
        "points": [
          "Kauf 100; Verkauf 101 Euro.",
          "Bruttodifferenz: 1 Euro."
        ]
      },
      {
        "title": "Nach Gesamtkosten",
        "tone": "positive",
        "points": [
          "1 − 0,60 = +0,40 Euro.",
          "1 − 1,20 = −0,20 Euro."
        ]
      }
    ],
    "prompt": "Was bleibt bei 0,60 Euro Gesamtkosten im vollständig passenden Beispiel?",
    "answers": [
      {
        "label": "0,40 Euro rechnerische Nettodifferenz.",
        "explanation": "Richtig: Die Kosten werden von der Bruttodifferenz abgezogen."
      },
      {
        "label": "Immer 1 Euro, denn Kosten zählen bei Arbitrage nicht.",
        "explanation": "Auch ein Preisunterschied muss seine Kosten decken."
      },
      {
        "label": "Eine Garantie, dass jede beliebige ähnliche Aktie dasselbe Ergebnis bringt.",
        "explanation": "Identität, Bedingungen und erreichbare Ausführungen sind Voraussetzungen dieses Lernfalls."
      }
    ],
    "correct": 0,
    "rule": "Preisabstand nach Kosten und Ausführbarkeit prüfen."
  },
  {
    "title": "Algorithmischer Handel: eine Methode, kein einziges Motiv",
    "summary": "Automatisierung kann viele Aufgaben übernehmen.",
    "paragraphs": [
      "Algorithmischer Handel verwendet festgelegte Rechenregeln für Teile des Handels. Ein Programm kann einen großen Kundenauftrag aufteilen, Angebote stellen oder nach Signalen eigene Positionen eröffnen. Automatisierung beschreibt die Arbeitsweise, nicht automatisch den wirtschaftlichen Zweck.",
      "Ein Fonds möchte 1.000 Einheiten kaufen. Ein Ausführungsprogramm verteilt das Vorhaben im vereinfachten Beispiel auf zehn Teilaufträge von je 100 Einheiten. Das Programm muss deshalb keine neue Meinung über den Wert der Anlage entwickeln. Es bearbeitet einen Auftrag, dessen Entscheidung bereits getroffen wurde.",
      "Hochfrequenzhandel bezeichnet bestimmte besonders schnelle, technisch organisierte Handelsweisen. Nicht jeder Algorithmus arbeitet so und nicht jeder schnelle Auftrag verfolgt dieselbe Strategie. Geschwindigkeit ersetzt weder ein wirtschaftlich tragfähiges Verfahren noch die Prüfung von Kosten und Risiken."
    ],
    "columns": [
      {
        "title": "Ausführungsprogramm",
        "tone": "neutral",
        "points": [
          "Vorhaben: 1.000 Einheiten kaufen.",
          "Zehn Teilaufträge × 100 Einheiten."
        ]
      },
      {
        "title": "Mögliche andere Aufgaben",
        "tone": "positive",
        "points": [
          "Eigene Signale handeln oder Angebote stellen.",
          "Andere Ziele trotz derselben Automatisierungsform."
        ]
      }
    ],
    "prompt": "Beweist eine automatisch gesendete Order eine kurzfristige eigene Spekulation?",
    "answers": [
      {
        "label": "Ja, jeder Algorithmus ist derselbe Hochfrequenzhändler.",
        "explanation": "Automatisierung umfasst verschiedene Geschwindigkeiten und Aufgaben."
      },
      {
        "label": "Nein, sie kann auch einen vorhandenen Kundenauftrag ausführen.",
        "explanation": "Richtig: Das Programm beschreibt den Weg, nicht allein das Motiv."
      },
      {
        "label": "Ja, automatische Orders können nie einem langfristigen Fonds dienen.",
        "explanation": "Ein langfristiger Fonds kann seine Ausführung automatisieren."
      }
    ],
    "correct": 1,
    "rule": "Automatisierung und wirtschaftlichen Zweck getrennt benennen."
  },
  {
    "title": "Information, Einschätzung und Unsicherheit",
    "summary": "Eine begründete Meinung bleibt eine Hypothese.",
    "paragraphs": [
      "Manche Marktteilnehmer handeln, weil sie Informationen anders beurteilen als andere. Sie erwarten etwa eine Veränderung von Unternehmensgewinnen oder eine andere Nachfrage nach einem Rohstoff. Informiert handeln heißt hier, eine Einschätzung auf Informationen zu stützen. Es heißt nicht, über sichere Zukunftskenntnis zu verfügen.",
      "Zwei Personen lesen denselben veröffentlichten Unternehmensbericht. Eine hält die Aussichten für besser als im Preis berücksichtigt, die andere sieht hohe künftige Kosten. Beide können ihre Sicht begründen. Ein Kauf oder Verkauf beweist daher allein nicht, wer später recht haben wird.",
      "Auch ein großes Team kann Prognosefehler machen, Kosten übersehen oder bereits eingepreiste Informationen neu entdecken. Prüfe deshalb die Aussage, ihre Grundlage und ihre Grenzen. Aus „professionell“, „groß“ oder „gut informiert“ darf keine automatische Trefferquote abgeleitet werden."
    ],
    "columns": [
      {
        "title": "Beobachtete Grundlage",
        "tone": "neutral",
        "points": [
          "Derselbe veröffentlichte Bericht.",
          "Gemeinsame Information ist möglich."
        ]
      },
      {
        "title": "Verschiedene Einschätzungen",
        "tone": "positive",
        "points": [
          "Person A erwartet bessere Aussichten.",
          "Person B erwartet höhere Kosten."
        ]
      }
    ],
    "prompt": "Was beweist ein großer professioneller Kauf sicher über die Zukunft?",
    "answers": [
      {
        "label": "Dass der Kurs zwingend steigen wird.",
        "explanation": "Ein professioneller Auftrag ist keine Preisgarantie."
      },
      {
        "label": "Dass der Käufer die gesamte Zukunft kennt.",
        "explanation": "Informationen und Prognosen sind begrenzt."
      },
      {
        "label": "Keine sichere Kursrichtung; die Einschätzung kann falsch sein.",
        "explanation": "Richtig: Organisation und Größe beseitigen Unsicherheit nicht."
      }
    ],
    "correct": 2,
    "rule": "Gut begründet und sicher sind verschiedene Eigenschaften."
  },
  {
    "title": "Positionen schließen: Kauf ist nicht immer Einstieg",
    "summary": "Die Wirkung hängt am Bestand vor dem Trade.",
    "paragraphs": [
      "Ein Kauf kann eine neue Kaufposition eröffnen, eine bestehende vergrößern oder eine Verkaufsposition schließen. Ein Verkauf kann eine Kaufposition reduzieren oder eine neue Verkaufsposition eingehen. Die Transaktion wird erst zusammen mit dem vorherigen Bestand verständlich.",
      "In unserem einfachen Vertragsbeispiel hält Person A fünf Verkaufskontrakte, also eine Position von −5. Sie kauft fünf identische Kontrakte und steht danach bei null: −5 + 5 = 0. Person B startet ohne Position und kauft ebenfalls fünf. Sie steht danach bei +5. Gleiche Kaufmenge, unterschiedliche Wirkung.",
      "Das Schließen einer Verkaufsposition nennt man Eindecken. Die Entscheidung kann aus Gewinnmitnahme, einer Risikogrenze oder einem geänderten Plan stammen. Ohne Vorbestand kannst du nicht sicher unterscheiden, ob ein beobachteter Kauf einen neuen positiven Ausblick ausdrückt oder nur eine vorhandene Position beendet."
    ],
    "columns": [
      {
        "title": "Person A",
        "tone": "neutral",
        "points": [
          "Vorher −5; Kauf +5.",
          "Danach 0: Verkaufsposition geschlossen."
        ]
      },
      {
        "title": "Person B",
        "tone": "positive",
        "points": [
          "Vorher 0; Kauf +5.",
          "Danach +5: Kaufposition eröffnet."
        ]
      }
    ],
    "prompt": "Was passiert bei Person A?",
    "answers": [
      {
        "label": "Die fünf Verkaufskontrakte werden durch den Kauf geschlossen.",
        "explanation": "Richtig: −5 plus 5 ergibt null."
      },
      {
        "label": "Sie hält danach automatisch zehn Kaufkontrakte.",
        "explanation": "Die vorherige Verkaufsposition muss mitgerechnet werden."
      },
      {
        "label": "Sie eröffnet dieselbe neue Position wie Person B.",
        "explanation": "Person B hatte vorher keinen Bestand; A hatte eine Verkaufsposition."
      }
    ],
    "correct": 0,
    "rule": "Eine Order zusammen mit dem Vorbestand einordnen."
  },
  {
    "title": "Zentralbanken: geldpolitische Aufgaben statt privates Trading",
    "summary": "Ankündigung und tatsächlicher Auftrag sind verschieden.",
    "paragraphs": [
      "Zentralbanken übernehmen geldpolitische Aufgaben und können im Rahmen ihrer Instrumente am Finanzmarkt tätig werden. Sie können beispielsweise Liquidität bereitstellen oder Wertpapiergeschäfte durchführen. Welche Maßnahmen eine bestimmte Zentralbank einsetzen darf und tatsächlich nutzt, hängt von ihrem Rahmen und der jeweiligen Entscheidung ab.",
      "Für unser Verständnis reicht ein allgemeiner Fall: Eine Zentralbank kündigt eine Maßnahme an, und andere Marktteilnehmer ändern ihre Einschätzungen und Angebote. Schon die Ankündigung kann damit Preise beeinflussen, bevor die angekündigten Geschäfte stattfinden. Nachricht, Erwartungsänderung und ausgeführter Auftrag sind verschiedene Ereignisse.",
      "Die Aufgabe einer Zentralbank ist nicht dieselbe wie das persönliche Gewinnziel eines kurzfristigen Traders. Aus einer Ankündigung folgt außerdem kein garantierter Kursverlauf. Wirkung, Umsetzung und Reaktion können unterschiedlich ausfallen. Dieses Kapitel erklärt die Rolle; aktuelle Entscheidungen werden hier nicht als unveränderliche Fakten dargestellt."
    ],
    "columns": [
      {
        "title": "Ankündigung",
        "tone": "neutral",
        "points": [
          "Eine Maßnahme wird kommuniziert.",
          "Andere Teilnehmer können Erwartungen ändern."
        ]
      },
      {
        "title": "Tatsächliche Umsetzung",
        "tone": "positive",
        "points": [
          "Geschäfte finden nach ihren Bedingungen statt.",
          "Zeitpunkt und Wirkung müssen getrennt beobachtet werden."
        ]
      }
    ],
    "prompt": "Kann eine Ankündigung Preise schon vor den angekündigten Geschäften beeinflussen?",
    "answers": [
      {
        "label": "Nein, alle Preise dürfen sich bis zur Ausführung nicht bewegen.",
        "explanation": "Andere Teilnehmer können bereits auf Informationen reagieren."
      },
      {
        "label": "Ja, andere Teilnehmer können ihre Einschätzungen und Angebote ändern.",
        "explanation": "Richtig: Kommunikation und tatsächliche Ausführung sind unterschiedliche Ereignisse."
      },
      {
        "label": "Ja, deshalb ist die Richtung jeder Reaktion garantiert.",
        "explanation": "Eine mögliche Wirkung ist keine sichere Kursprognose."
      }
    ],
    "correct": 1,
    "rule": "Geldpolitische Rolle, Nachricht und ausgeführtes Geschäft unterscheiden."
  },
  {
    "title": "Drei Käufer: gleiche Order, andere Geschichten",
    "summary": "Zahlung, Anlage und Schließung können gleich aussehen.",
    "paragraphs": [
      "Drei Personen kaufen im Beispiel jeweils dieselbe Menge einer Währung. Die erste muss eine Firmenrechnung bezahlen. Die zweite möchte langfristig einen Teil ihres Vermögens in dieser Währung halten. Die dritte kauft, um eine zuvor eingegangene Verkaufsposition zu schließen. Der äußere Vorgang lautet jeweils Kauf.",
      "Das bekannte Motiv hilft, den jeweiligen Zusammenhang zu erklären. Fehlt es, zeigt der Kauf zunächst nur eine ausgeführte Menge und einen Preis. Du darfst Möglichkeiten sammeln, aber keine davon ohne weitere Belege zur sicheren Erklärung machen. Eine plausible Geschichte ist noch keine nachgewiesene Ursache.",
      "In einem anonymen Markt sind Identität, Vorbestand und restliches Portfolio häufig nicht vollständig sichtbar. Der Kursverlauf zeigt die Veränderung gehandelter Preise, nicht automatisch die Absichten aller Beteiligten. Für deinen Lernprozess ist das eine praktische Regel: Beobachtung aufschreiben, mögliche Erklärung daneben und Unbekanntes ausdrücklich offenlassen."
    ],
    "columns": [
      {
        "title": "Beobachtet",
        "tone": "neutral",
        "points": [
          "Drei ausgeführte Käufe gleicher Menge.",
          "Preis und Zeitpunkt können bekannt sein."
        ]
      },
      {
        "title": "Im Beispiel verschiedene Motive",
        "tone": "positive",
        "points": [
          "Rechnung bezahlen oder Vermögen anlegen.",
          "Eine zuvor gehaltene Verkaufsposition schließen."
        ]
      }
    ],
    "prompt": "Was ist ohne weitere Angaben durch einen Kauf nachgewiesen?",
    "answers": [
      {
        "label": "Eine neue positive Prognose aller Käufer.",
        "explanation": "Zahlungsbedarf und Positionsschließung sind Gegenbeispiele."
      },
      {
        "label": "Eine bestimmte Identität allein aus der Menge.",
        "explanation": "Die Größe eines Trades identifiziert den Teilnehmer nicht sicher."
      },
      {
        "label": "Die ausgeführte Kauftransaktion, nicht das vollständige Motiv.",
        "explanation": "Richtig: Mehrere verschiedene Geschichten sind mit dem Kauf vereinbar."
      }
    ],
    "correct": 2,
    "rule": "Beobachtung, mögliche Erklärung und unbekannte Angaben trennen."
  },
  {
    "title": "Dein Teilnehmercheck: wer, wofür und wie lange?",
    "summary": "Die Marktrolle im Zusammenhang erklären.",
    "paragraphs": [
      "Für einen Teilnehmercheck gehst du vier Fragen durch: Welche Person oder Organisation ist beschrieben? Handelt sie für sich, vermittelt sie oder stellt sie eigene Angebote? Welcher wirtschaftliche Anlass ist bekannt? Welcher Zeithorizont oder welche Verpflichtung gehört dazu? Ergänze die Vorposition, wenn du sie kennst.",
      "Abschlussfall: Ein Fonds verkauft nach einem starken Kursanstieg einen Teil seiner größten Aktie. Sein Mandat begrenzt deren Gewicht auf 10 %, aktuell sind es 12 %. Beobachtet ist der Verkauf; als Anlass ist die Gewichtungsgrenze ausdrücklich angegeben. Eine zusätzliche negative Prognose über die Aktie bleibt ohne weitere Information unbekannt.",
      "Du kannst jetzt den Markt als Begegnung unterschiedlicher Aufgaben erklären. Nicht jeder verfolgt deinen Zeithorizont oder bewertet einen einzelnen Trade nach demselben Ziel. Im nächsten Kapitel „Wo findet Handel statt?“ betrachten wir Börsen, außerbörslichen Handel und verschiedene Handelsplätze. Die Teilnehmer und ihre Aufgaben bleiben dabei unser Ausgangspunkt."
    ],
    "columns": [
      {
        "title": "Bekannt im Abschlussfall",
        "tone": "neutral",
        "points": [
          "Fonds; Teilverkauf einer Aktie.",
          "Mandat: maximal 10 %; aktuelles Gewicht: 12 %."
        ]
      },
      {
        "title": "Einordnung",
        "tone": "positive",
        "points": [
          "Verkauf kann die Gewichtungsgrenze wiederherstellen.",
          "Eine zusätzliche Kursprognose ist nicht angegeben."
        ]
      }
    ],
    "prompt": "Welche Erklärung ist im Abschlussfall durch die Angaben gestützt?",
    "answers": [
      {
        "label": "Der Fonds muss seine Gewichtungsgrenze wieder einhalten.",
        "explanation": "Richtig: Der Mandatsrahmen ist ausdrücklich Teil des Falls."
      },
      {
        "label": "Die Aktie muss morgen fallen.",
        "explanation": "Das folgt aus der Gewichtungsregel nicht."
      },
      {
        "label": "Jeder Fondsverkauf ist ein Eingriff einer Zentralbank.",
        "explanation": "Teilnehmerart und bekannte Aufgabe sind hier andere."
      }
    ],
    "correct": 0,
    "rule": "Teilnehmer verstehen, ohne ihre unbekannten Absichten zu erfinden."
  }
] as const;

export const marketBasicsChapterThreeLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-03.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 3 · Wer handelt und warum?', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 3', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
