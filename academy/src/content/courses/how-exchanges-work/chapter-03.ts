import type { Lesson } from '../../types';

// Eigene Teilnehmerfälle; Zahlen dienen ausschließlich vereinfachten Lernbeispielen.
const drafts = [
  {
    "title": "Teilnehmer, Rolle und Motiv sind drei Fragen",
    "summary": "Ein Name erklärt noch keinen Auftrag.",
    "paragraphs": [
      "Beim Handel helfen dir drei Fragen. Wer handelt: eine Person, ein Fonds oder eine Bank? Welche Aufgabe übernimmt sie: selbst handeln, einen Auftrag vermitteln oder Angebote stellen? Warum handelt sie: Geld anlegen, ein Risiko verringern oder auf eine Preisänderung setzen?",
      "Eine Bank kann morgens einen Kundenauftrag weitergeben. Später kann sie ein eigenes Risiko absichern. Absichern bedeutet, einem vorhandenen Risiko gezielt entgegenzuwirken. In beiden Fällen handelt dieselbe Organisation. Ihre Aufgabe und ihr Grund sind aber verschieden.",
      "Du lernst hier typische Gründe kennen. Sie helfen dir, ein Geschäft einzuordnen. Sie verraten dir aber nicht sicher, warum jemand einen unbekannten Auftrag erteilt hat. Unsere Fälle sind erfunden und vereinfacht. Wenn eine Angabe fehlt, lassen wir die Antwort offen."
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
    "prompt": "Eine Bank kauft einen Vertrag. Kennst du allein daraus den Grund?",
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
      "Privatanleger nutzen ihr eigenes privates Vermögen. Manche sparen lange für ein Ziel. Andere brauchen ihr Geld bald wieder oder handeln eine kurzfristige Idee. Die Bezeichnung Privatanleger sagt nicht, wie erfahren jemand ist oder wie lange er eine Anlage halten will.",
      "Miriam kauft jeden Monat Fondsanteile für ein weit entferntes Sparziel. Robert will eine Preisbewegung während eines Börsentags handeln. Beide sind Privatpersonen. Ihre Pläne unterscheiden sich aber: Miriam plant für lange Zeit, Robert für einen kurzen Zeitraum.",
      "Auch ein kleiner Geldbetrag kann für seinen Besitzer sehr wichtig sein. Wer das Geld bald braucht, kann einen Verlust vielleicht schlecht verkraften. Prüfe deshalb das Ziel, die verfügbare Zeit und die möglichen Verluste. Das Wort privat allein erklärt den Plan nicht."
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
      "Der Zeithorizont ist der Zeitraum, für den jemand plant. Ein Anleger kann für viele Jahre planen. Ein kurzfristiger Trader plant vielleicht nur für Minuten. Beide müssen ihre Aufträge trotzdem zu einem bestimmten Zeitpunkt ausführen lassen. Ausführen heißt: Das Geschäft kommt tatsächlich zustande.",
      "Ein Fonds möchte Aktien mehrere Jahre halten. Er teilt den Kauf auf kleine Aufträge an einem Tag auf. Der Tag beschreibt, wann er kauft. Die Jahre beschreiben, wie lange er die Anlage halten möchte. Wer nur die kleinen Aufträge sieht, kennt den langfristigen Plan noch nicht.",
      "Wer lange plant, kann manche Schwankung anders beurteilen als jemand mit wenig Zeit. Eine lange Haltedauer macht Verluste aber nicht automatisch harmlos. Geldbedarf, Risikogrenzen und neue Informationen bleiben wichtig. Handelsgeschwindigkeit und geplanter Anlagezeitraum sind deshalb zwei verschiedene Angaben."
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
      "Ein Emittent ist der Herausgeber eines Wertpapiers. Ein Unternehmen kann neue Aktien oder Anleihen ausgeben, um Geld für ein Vorhaben zu erhalten. Aktien geben Beteiligungsrechte. Anleihen geben Ansprüche auf Zahlungen nach ihren Vertragsregeln. Diese Produkte kennst du aus Kapitel 2.",
      "Unser erfundenes Unternehmen plant eine neue Halle. Es gibt Anleihen mit insgesamt 1 Million Euro Nennwert aus. Anleger stellen ihm dafür Geld nach den Bedingungen zur Verfügung. Der Nennwert ist die im Vertrag festgelegte Bezugsgröße für die Zahlungen.",
      "Verkauft später ein Anleger seine vorhandene Anleihe an einen anderen, erhält das Unternehmen den Kaufpreis nicht automatisch noch einmal. Auch Staaten können Wertpapiere zur Finanzierung ausgeben. Ausgabe, späterer Handel und Rückzahlung sind verschiedene Vorgänge. Ein sichtbarer Handel bedeutet deshalb nicht immer neue Finanzierung."
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
      "Unternehmen handeln nicht nur wegen einer erwarteten Preisänderung. Sie können fremde Währungen für Rechnungen brauchen. Sie können auch vorübergehend freies Geld anlegen oder Risiken absichern. Die zuständige Finanzabteilung heißt häufig Treasury. Sie kümmert sich um solche Geldfragen des Unternehmens.",
      "Eine Importfirma muss 12.000 US-Dollar bezahlen. Bei EUR/USD 1,20 entspricht ein Euro 1,20 Dollar. Die Firma benötigt daher 12.000 / 1,20 = 10.000 Euro. Gebühren lassen wir weg. Der Dollarkauf kann einfach dazu dienen, die Rechnung zu bezahlen.",
      "Ist die Rechnung erst später fällig, kann der Wechselkurs bis dahin den Eurobedarf verändern. Die Firma kann dieses Risiko bestehen lassen oder durch einen Vertrag beeinflussen. Trenne deshalb drei Dinge: die Warenrechnung, den Währungstausch und eine mögliche Absicherung. Ein Dollarkauf beweist noch keine Erwartung steigender Kurse."
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
      "Eine Absicherung wirkt einem bereits vorhandenen Risiko entgegen. Ein Produzent will später Ware verkaufen. Sinkende Preise wären für ihn ungünstig. Ein Käufer muss später Ware kaufen. Für ihn wären steigende Preise ungünstig. Beide brauchen deshalb unterschiedliche Gegenwirkungen.",
      "Unser Produzent erwartet 100 Einheiten Ware. Sinkt der Verkaufspreis um 5 Euro je Einheit, erhält er 100 × 5 = 500 Euro weniger. Eine passende Verkaufsposition in unserem vereinfachten Vertrag gewinnt gleichzeitig 500 Euro. Zusammen gleichen sich die Preiswirkungen vor Kosten aus.",
      "Steigt der Warenpreis, kann der Vertrag stattdessen verlieren. Dafür bringt die Ware mehr Geld ein. Die Absicherung soll den Erlös planbarer machen. Sie soll nicht aus jeder Teilposition einen Gewinn machen. Betrachte deshalb Ware und Vertrag gemeinsam, bevor du die Wirkung beurteilst."
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
      "Eine Absicherung passt nicht immer genau zum echten Geschäft. Die abgesicherte Menge kann abweichen. Auch der Termin oder die Art der Ware kann anders sein. Das Wort abgesichert bedeutet deshalb nicht automatisch, dass kein Risiko mehr übrig ist.",
      "Unser Produzent erwartet 100 Einheiten, sichert aber nur 80 ab. Der Warenpreis fällt um 5 Euro. Mit der Ware erhält er 100 × 5 = 500 Euro weniger. Der Vertrag gewinnt 80 × 5 = 400 Euro. Zusammen bleiben 100 Euro Verlust vor Kosten. Die Absicherung deckt nur einen Teil ab.",
      "Ein Vertrag kann sich auch auf eine andere Warensorte beziehen. Beide Preise können sich unterschiedlich bewegen. Ändert sich ihr Preisabstand, passt die Gegenwirkung nicht mehr genau. Dieses Risiko heißt Basisrisiko. Prüfe deshalb: Passt die Menge? Passt der Zeitpunkt? Passt die Ware oder andere Bezugsgröße?"
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
      "Eine Fondsverwaltung betreut die Anlagen eines Fonds. Dabei muss sie vereinbarte Ziele und Grenzen beachten. Diesen Auftrag nennt man Mandat. Darin kann stehen, welche Anlagen erlaubt sind, wie das Geld verteilt werden soll und welche Risiken zulässig sind.",
      "Unser Fonds darf höchstens 10 % seines Vermögens in einer Aktie halten. Die Aktie steigt stark. Nun macht sie 12 % des Fondsvermögens aus. Die Verwaltung verkauft einen Teil, um wieder die Grenze einzuhalten. Das muss nicht bedeuten, dass sie das Unternehmen schlecht findet.",
      "Eine Organisation kann professionell im Rahmen ihrer Aufgaben handeln. Dafür verwenden wir hier das Wort institutionell. Das verspricht keinen Gewinn und keine stets richtige Entscheidung. Prüfe bei einem Fonds deshalb seine Regeln, seine vorhandenen Anlagen und seinen Geldbedarf. Vermute nicht automatisch eine bestimmte Meinung zum Kurs."
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
        "label": "Um die vorgeschriebene Grenze für den Anteil dieser Aktie einzuhalten.",
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
      "Eine aktive Fondsverwaltung entscheidet selbst, welche erlaubten Anlagen sie auswählt. Eine indexorientierte Verwaltung möchte die Entwicklung eines festgelegten Index nachbilden. Dafür kann sie Anlagen direkt halten oder passende Verträge verwenden. Die genaue Methode bestimmt, welche Geschäfte nötig sind.",
      "Unser vereinfachter Fonds hält die Aktien eines erfundenen Index direkt. Der Index nimmt eine neue Aktie auf und entfernt eine andere. Die Verwaltung passt die Anlagen daran an. Ihr Kauf kann also aus einer Indexregel entstehen. Er muss keine eigene kurzfristige Kursvorhersage ausdrücken.",
      "Auch ein indexorientierter Fonds erteilt Aufträge. Neue Einzahlungen, Auszahlungen und Änderungen im Index können Handel nötig machen. Aktiv bedeutet umgekehrt nicht automatisch erfolgreich. Diese Wörter beschreiben, wie Entscheidungen getroffen werden. Ob die Anlage später Gewinn bringt, ist eine eigene Frage."
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
      "Ein Portfolio ist die Gesamtheit der Anlagen, die wir betrachten. Rebalancing bedeutet: Die gewünschte Mischung dieser Anlagen wird wiederhergestellt. Steigen ihre Preise unterschiedlich stark, verändern sich ihre Anteile am Gesamtwert. Dazu braucht es keine neue Einzahlung.",
      "Wir starten mit 6.000 Euro Aktien und 4.000 Euro Anleihen. Zusammen sind das 10.000 Euro: 60 % Aktien und 40 % Anleihen. Die Aktien steigen auf 7.000 Euro. Die Anleihen bleiben bei 4.000. Zusammen sind es nun 11.000 Euro. Davon sind 60 % gleich 6.600 Euro und 40 % gleich 4.400 Euro.",
      "Für diese Mischung verkaufen wir 400 Euro Aktien und kaufen 400 Euro Anleihen. So erreichen wir wieder die gewünschten Anteile. Dafür müssen wir keinen Kursrückgang vorhersagen. Andere Portfolios können Einzahlungen oder andere Regeln nutzen. Kosten und die tatsächliche Ausführung kommen in echten Fällen hinzu."
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
      "Fonds können neue Einzahlungen erhalten. Sie müssen unter Umständen auch Geld auszahlen, wenn Anleger Anteile zurückgeben. Einzahlungen können Käufe ermöglichen. Für Auszahlungen kann der Fonds vorhandenes Geld verwenden oder Anlagen verkaufen. Der genaue Weg hängt von seinen Bedingungen ab.",
      "Unser Fonds soll 10.000 Euro auszahlen. Er hat schon 3.000 Euro frei verfügbares Geld. Es fehlen also 10.000 − 3.000 = 7.000 Euro. Deckt er den Rest durch Verkäufe, müssen ihm daraus 7.000 Euro nach Abzug der Kosten bleiben. Die Auszahlung erklärt hier den Verkauf.",
      "Der Verkauf beweist keine schlechte Meinung über die verkaufte Anlage. Ebenso führt nicht jede Einzahlung sofort zu einem bestimmten Kauf. Vorhandene Anlagen, Geldreserven und die Abwicklung spielen mit. Der Bedarf an verfügbarem Geld heißt Liquiditätsbedarf. Er ist ein eigener Handelsgrund neben einer Kursvorhersage."
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
      "Ein kapitalgedeckter Pensionsfonds legt Geld für spätere Versorgungszahlungen an. Kapitalgedeckt heißt hier: Dafür ist Vermögen angelegt. Auch Versicherer halten Anlagen für spätere Zahlungen. Sie achten deshalb auf Zahlungstermine und verfügbares Geld, nicht nur auf mögliche Kursgewinne.",
      "Unsere Organisation muss voraussichtlich in fünf Jahren 100.000 Euro zahlen. Eine Anleihe mit passenden Zahlungsterminen kann helfen, diesen Bedarf zu planen. Doch der Termin allein reicht nicht. Wichtig sind auch die Währung und das Risiko, dass der Schuldner nicht wie vereinbart zahlt.",
      "Auch bei langfristigen Pflichten kann früherer Handel nötig werden. Neue Pflichten, veränderte Risiken oder Auszahlungen können den Plan verändern. Nicht jede Altersversorgung funktioniert mit einem Anlagefonds. Hier betrachten wir nur die Form, bei der Vermögen für spätere Zahlungen angelegt wird."
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
        "label": "Weil die vereinbarten Zahlungen zum späteren Geldbedarf passen können.",
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
      "Banken können unterschiedliche Aufgaben haben. Sie können Zahlungen bearbeiten, Kredite vergeben und Kunden beim Wertpapierhandel helfen. Sie können auch eigene Risiken steuern. Welche Aufgaben eine Bank tatsächlich übernimmt, hängt von ihrem Geschäft ab. Ihr Name allein erklärt ihren Handelsstil nicht.",
      "Unsere Bank tauscht zunächst eine Währung für eine Firmenkundin. Dadurch kann bei der Bank eine eigene Währungsposition entstehen. Das ist ein gehaltenes Geschäft, dessen Wert vom Wechselkurs abhängt. Die Bank macht anschließend ein weiteres Geschäft, um dieses Risiko zu verringern.",
      "Die Kundin wollte vielleicht nur eine Rechnung bezahlen. Das zweite Geschäft der Bank kann dagegen eine Absicherung sein. Aus einem Bankgeschäft erkennst du deshalb nicht sicher die Meinung aller Kunden oder Abteilungen. Eine Bank ist keine einzelne Person mit nur einer Kursvorhersage."
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
    "prompt": "Warum kann die Bank nach einem Kundengeschäft ein weiteres Geschäft machen?",
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
      "Ein Broker bearbeitet oder vermittelt Kundenaufträge nach den geltenden Bedingungen. Ein Dealer handelt dagegen auf eigene Rechnung. Das Geschäft gehört dann zu seinem eigenen Bestand und Ergebnis. Er kann selbst die andere Seite eines Kundengeschäfts sein. Diese andere Seite heißt Gegenpartei.",
      "In Fall A sucht ein Vermittler jemanden, der an Miriam verkauft. In Fall B verkauft ein Händler direkt aus seinem eigenen Bestand an sie. Miriam kauft in beiden Fällen. Die Rolle ihres Anbieters und der Weg zur verkaufenden Seite unterscheiden sich aber.",
      "Eine Organisation kann beide Aufgaben übernehmen. Der Bildschirm zeigt dir nicht unbedingt, welche Rolle sie bei deinem Auftrag hat. Lies dafür die Angaben zum Auftragsweg und zur Ausführung. Keine Rolle garantiert allein einen guten Preis. Die Begriffe helfen dir, den Ablauf zu verstehen."
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
      "Ein Market Maker stellt Kauf- und Verkaufsangebote. Er kann selbst Geschäfte mit anderen abschließen. Damit hilft er ihnen beim Handeln. Die Differenz zwischen seinen Preisen kann ihm Einnahmen bringen. Preisänderungen und Kosten können aber auch Verluste verursachen.",
      "Unser Händler kauft zu 99 Euro und verkauft zu 101 Euro. Gelingt beides für je eine Einheit ohne weitere Änderungen, bleiben 101 − 99 = 2 Euro vor Kosten. Kauft er zuerst für 99 und kann später nur für 96 verkaufen, entstehen dagegen 3 Euro Verlust.",
      "Sein Bestand ist die aktuell gehaltene Position. Er kann Preise und Mengen seiner Angebote ändern, um das Risiko dieses Bestands zu steuern. Das beweist nicht, dass er den nächsten Kurs kennt. Ein jetzt angezeigtes Angebot verspricht auch keinen späteren Abschluss zu demselben Preis."
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
      "Arbitrage bedeutet, passende Preisunterschiede mit verbundenen Geschäften zu nutzen. Im einfachsten Fall kaufst du genau dieselbe Anlage an einem Ort billiger und verkaufst sie an einem anderen teurer. Damit das funktioniert, müssen die Bedingungen wirklich zusammenpassen.",
      "In unserem erfundenen Fall sind beide Geschäfte gleichzeitig möglich. Die gleiche Anlage kostet bei A 100 Euro. Bei B kannst du sie für 101 Euro verkaufen. Die Differenz beträgt 1 Euro. Bei Gesamtkosten von 0,60 Euro bleiben 0,40 Euro. Kosten von 1,20 Euro würden die Differenz übersteigen.",
      "Die Rechnung setzt gleiche Rechte und passende Mengen voraus. Beide Geschäfte müssen tatsächlich erreichbar sein. Ändert sich ein Preis vor dem Abschluss, entsteht ein Risiko. Auch Währung, Lieferung und Abwicklung können wichtig sein. Zwei ähnliche Namen und zwei Bildschirmpreise beweisen deshalb noch keinen nutzbaren Vorteil."
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
        "label": "0,40 Euro nach Abzug der Kosten.",
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
      "Beim algorithmischen Handel erledigt ein Programm Teile des Handels nach festgelegten Rechenregeln. Es kann einen großen Auftrag aufteilen. Es kann auch Angebote stellen oder eigene Geschäfte nach Signalen beginnen. Das Programm beschreibt die Arbeitsweise. Sein Handelsgrund kann unterschiedlich sein.",
      "Ein Fonds will 1.000 Einheiten kaufen. Unser Programm teilt den Auftrag in zehn Aufträge zu je 100 Einheiten auf. Die Kaufentscheidung steht bereits fest. Das Programm muss dafür keine neue Meinung über den Wert der Anlage entwickeln. Es setzt die Entscheidung um.",
      "Besonders schnelle, technisch organisierte Handelsweisen nennt man Hochfrequenzhandel. Nicht jeder Algorithmus arbeitet so. Auch schnelle Aufträge können verschiedene Ziele haben. Ein hohes Tempo garantiert kein gutes Verfahren und keinen Gewinn. Kosten und Risiken bleiben wichtig."
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
      "Manche Menschen handeln, weil sie Informationen anders bewerten als andere. Sie erwarten vielleicht höhere Unternehmensgewinne oder eine größere Nachfrage nach einer Ware. Ihre Einschätzung stützt sich auf Informationen. Das heißt aber nicht, dass sie die Zukunft sicher kennen.",
      "Zwei Personen lesen denselben öffentlichen Unternehmensbericht. Eine findet die Aussichten besser, als der aktuelle Preis vermuten lässt. Die andere erwartet hohe Kosten. Beide können Gründe nennen. Ihr Kauf oder Verkauf beweist noch nicht, wer später recht haben wird.",
      "Auch große, professionelle Teams können sich irren. Sie können Kosten übersehen oder eine Nachricht beachten, die andere schon im Preis berücksichtigt haben. Prüfe deshalb Aussage, Grundlage und Unsicherheit. Die Wörter groß, professionell und informiert versprechen keine automatische Erfolgsquote."
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
      "Ein Kauf kann eine neue Kaufposition eröffnen oder eine bestehende vergrößern. Er kann aber auch eine Verkaufsposition beenden. Ein Verkauf kann ebenfalls eine vorhandene Kaufposition verringern oder eine neue Verkaufsposition eröffnen. Zum Verständnis brauchst du den Bestand vor dem Geschäft.",
      "Person A hält in unserem Vertragsbeispiel fünf Verkaufskontrakte. Wir schreiben dafür −5. Sie kauft fünf gleiche Kontrakte: −5 + 5 = 0. Ihre Position ist geschlossen. Person B startet bei null und kauft ebenfalls fünf: 0 + 5 = 5. Sie hat nun eine neue Kaufposition.",
      "Eine Verkaufsposition durch einen Kauf zu schließen heißt Eindecken. Der Anlass kann ein Gewinn, eine Risikogrenze oder ein neuer Plan sein. Ohne den vorherigen Bestand weißt du nicht sicher, was der Kauf verändert. Gleiche Kaufmengen können daher sehr unterschiedliche Bedeutungen haben."
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
      "Zentralbanken kümmern sich um geldpolitische Aufgaben. Dabei geht es unter anderem um Geld und die Bedingungen seiner Bereitstellung. Sie können zum Beispiel Geldmittel bereitstellen oder Wertpapiergeschäfte machen. Ihre erlaubten und tatsächlich genutzten Maßnahmen hängen vom jeweiligen Rahmen ab.",
      "In unserem allgemeinen Beispiel kündigt eine Zentralbank eine Maßnahme an. Andere Teilnehmer ändern daraufhin ihre Erwartungen und Angebote. So kann schon die Nachricht Preise beeinflussen. Die angekündigten Geschäfte müssen zu diesem Zeitpunkt noch nicht stattgefunden haben.",
      "Die Aufgabe der Zentralbank unterscheidet sich vom persönlichen Gewinnziel eines kurzfristigen Traders. Eine Ankündigung verspricht keinen bestimmten Kursverlauf. Umsetzung und Reaktionen können verschieden ausfallen. Wir erklären hier die allgemeine Rolle. Eine aktuelle Einzelentscheidung ist keine dauerhaft feste Regel."
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
      "Drei Personen kaufen dieselbe Menge einer Währung. Die erste braucht sie für eine Firmenrechnung. Die zweite möchte langfristig Vermögen in dieser Währung halten. Die dritte schließt mit dem Kauf eine vorhandene Verkaufsposition. Von außen sieht man dreimal einen Kauf.",
      "Kennst du den Grund, kannst du den Zusammenhang erklären. Fehlt er, kennst du zunächst nur die gehandelte Menge und den Preis. Du kannst mögliche Gründe nennen. Du solltest aber keinen davon ohne weitere Belege als sicher darstellen. Eine plausible Geschichte ist noch kein Nachweis.",
      "In einem anonymen Markt weißt du oft nicht, wer handelt. Auch vorherige Positionen und andere Anlagen bleiben häufig unbekannt. Der Kurs zeigt gehandelte Preise, nicht alle Absichten. Schreibe deshalb getrennt auf, was du beobachtest, was du vermutest und was du noch nicht weißt."
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
        "label": "Der Kauf wurde ausgeführt. Der vollständige Grund ist damit noch nicht bekannt.",
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
      "Prüfe bei einem Teilnehmer zuerst, wer beschrieben ist. Handelt er selbst, vermittelt er oder stellt er eigene Angebote? Welcher Grund ist bekannt? Für welchen Zeitraum plant er, und welche Zahlungen muss er leisten? Wenn du die vorherige Position kennst, gehört sie ebenfalls dazu.",
      "Ein Fonds verkauft nach einem starken Anstieg einen Teil seiner größten Aktie. Seine Regeln erlauben höchstens 10 % Fondsanteil in dieser Aktie. Aktuell sind es 12 %. Der Verkauf und die einzuhaltende Grenze sind bekannt. Eine zusätzliche Erwartung fallender Kurse ist damit noch nicht belegt.",
      "Du kannst den Markt nun als Begegnung verschiedener Aufgaben verstehen. Nicht alle planen für denselben Zeitraum oder verfolgen dasselbe Ziel. Im nächsten Kapitel geht es darum, wo Handel stattfindet. Wir betrachten Börsen, Geschäfte außerhalb von Börsen und verschiedene Handelsplätze."
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
