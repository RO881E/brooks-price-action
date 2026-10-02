import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Was eine Market-Order anweist",
    "summary": "Die Order enthält keine eigene Preisgrenze.",
    "paragraphs": [
      "Lea möchte Aktien der erfundenen Firma Nera kaufen. Sie wählt Market als Auftragsart. Damit beauftragt sie einen Kauf zu verfügbaren Angeboten nach den Regeln des gewählten Handelswegs. Sie setzt selbst keinen höchsten Stückpreis.",
      "Der Auftrag soll auf Ausführung zielen. Trotzdem ist „Market“ keine Garantie für eine sofortige oder vollständige Ausführung. Angebote können fehlen. Der Handel kann unterbrochen sein. Anbieter und Handelsplatz können Schutzregeln anwenden.",
      "Wir üben zunächst in einem erfundenen fortlaufenden Markt. Dort werden ankommende Käufe mit den günstigsten noch verfügbaren Verkaufsangeboten verbunden. Alle Mengen und Preise sind Übungsdaten. In realen Systemen musst du zusätzlich die genauen Auftragsregeln lesen."
    ],
    "columns": [
      {
        "title": "Anweisung",
        "tone": "neutral",
        "points": [
          "Kaufen zu verfügbaren Angeboten.",
          "Keine eigene Kaufpreisgrenze."
        ]
      },
      {
        "title": "Keine Zusage",
        "tone": "positive",
        "points": [
          "Kein garantierter Wunschpreis.",
          "Keine Garantie für vollständige Ausführung."
        ]
      }
    ],
    "prompt": "Was bedeutet Market in diesem Kapitel?",
    "answers": [
      {
        "label": "Ein Kaufauftrag ohne eigene Preisgrenze.",
        "explanation": "Richtig: Die Anweisung zielt auf verfügbare Angebote, setzt aber keine eigene Kaufgrenze."
      },
      {
        "label": "Ein Kauf genau zum letzten Chartpreis.",
        "explanation": "Der vergangene Preis ist kein Angebot für die neue Order."
      },
      {
        "label": "Ein garantierter Kauf zu jedem Zeitpunkt.",
        "explanation": "Ohne passende Angebote oder während einer Unterbrechung fehlt diese Garantie."
      }
    ],
    "correct": 0,
    "rule": "Eine Market-Order setzt selbst keine Preisgrenze."
  },
  {
    "title": "Ein Käufer braucht die Verkaufsseite",
    "summary": "Bid und Ask aus Sicht deines Auftrags lesen.",
    "paragraphs": [
      "Im Lernmarkt bieten Käufer 49,90 Euro je Aktie. Verkäufer verlangen mindestens 50,00 Euro. Das höchste Kaufangebot heißt bester Bid oder Geldkurs. Das niedrigste Verkaufsangebot heißt bester Ask oder Briefkurs.",
      "Lea will kaufen. Dafür braucht sie jemanden, der verkauft. Im unveränderten Lernbuch greift ihr Kauf daher auf den Ask bei 50,00 Euro zu. Der Bid bei 49,90 Euro ist ein anderer Kaufwunsch. Er verkauft Lea keine Aktie.",
      "Kauft Lea eine größere Menge, kann sie weitere Verkaufsangebote benötigen. Außerdem muss das Angebot noch bestehen, wenn die Order ankommt. Der angezeigte beste Ask erklärt nur einen Preis und die zugehörige verfügbare Menge."
    ],
    "columns": [
      {
        "title": "Kaufangebote / Bid",
        "tone": "neutral",
        "points": [
          "Andere wollen zu 49,90 Euro kaufen.",
          "Das ist keine Verkaufsseite."
        ]
      },
      {
        "title": "Verkaufsangebote / Ask",
        "tone": "positive",
        "points": [
          "Andere bieten Aktien zu 50,00 Euro an.",
          "Ein sofortiger Käufer braucht diese Seite."
        ]
      }
    ],
    "prompt": "Welche Seite braucht Leas Kauf im unveränderten Lernbuch?",
    "answers": [
      {
        "label": "Automatisch die Mitte bei 49,95 Euro.",
        "explanation": "Der Mittelwert schafft kein Verkaufsangebot."
      },
      {
        "label": "Die Verkaufsseite bei 50,00 Euro.",
        "explanation": "Richtig: Damit Lea kauft, muss die Gegenseite verkaufen."
      },
      {
        "label": "Die Kaufseite bei 49,90 Euro.",
        "explanation": "Dort stehen andere Kaufwünsche, keine passenden Verkäufer."
      }
    ],
    "correct": 1,
    "rule": "Sofort kaufen greift auf Verkaufsangebote zu."
  },
  {
    "title": "Ein Verkäufer braucht die Kaufseite",
    "summary": "Beim Verkauf dreht sich die passende Seite um.",
    "paragraphs": [
      "In einem getrennten Fall besitzt Lea Nera-Aktien und möchte eine davon verkaufen. Das Lernbuch zeigt weiterhin Bid 49,90 Euro und Ask 50,00 Euro. Eine Market-Verkaufsorder braucht einen Käufer.",
      "Im unveränderten Fall erhält Lea 49,90 Euro. Der Verkäufer auf der Ask-Seite ist ebenfalls verkaufsbereit. Er ist damit keine passende Gegenseite für Leas Verkauf. Beide möchten Aktien abgeben.",
      "Für eine größere Verkaufsmenge zählt die verfügbare Kaufmenge. Falls mehrere Preisstufen gebraucht werden, kann der Verkauf auch zu niedrigeren Preisen erfolgen. Die Angebote sind keine Aussage über eine zukünftige Kursrichtung."
    ],
    "columns": [
      {
        "title": "Verkaufendes Angebot",
        "tone": "neutral",
        "points": [
          "Ask: 50,00 Euro.",
          "Diese Seite will ebenfalls verkaufen."
        ]
      },
      {
        "title": "Passender Käufer",
        "tone": "positive",
        "points": [
          "Bid: 49,90 Euro.",
          "Hier kann Lea im Lernfall verkaufen."
        ]
      }
    ],
    "prompt": "Welcher Preis gehört im Lernfall zum sofortigen Verkauf einer Aktie?",
    "answers": [
      {
        "label": "50,00 Euro.",
        "explanation": "Dieser Preis gehört zu einem Verkaufsangebot, nicht zum Käufer."
      },
      {
        "label": "Immer der letzte Chartpreis.",
        "explanation": "Der letzte Trade kann von den aktuellen Angeboten abweichen."
      },
      {
        "label": "49,90 Euro.",
        "explanation": "Richtig: Lea akzeptiert das verfügbare Kaufangebot."
      }
    ],
    "correct": 2,
    "rule": "Sofort verkaufen greift auf Kaufangebote zu."
  },
  {
    "title": "Ein kleiner Kauf auf einer Preisstufe",
    "summary": "Menge und Preis zusammen lesen.",
    "paragraphs": [
      "Für den Hauptkauffall sind zwei Nera-Aktien zu 50,00 Euro und drei zu 50,20 Euro angeboten. Weitere vier sind zu 50,50 Euro angeboten. Diese Mengen gelten vor Leas Auftrag. Wir betrachten nur die Verkaufsseite.",
      "Lea kauft zunächst in einem getrennten kleinen Fall eine Aktie. Das Angebot bei 50,00 Euro reicht. Der Kaufwert ohne Gebühren ist 1 × 50,00 = 50,00 Euro. Danach bleibt auf dieser Stufe eine Aktie angeboten.",
      "Für diese Rechnung bleibt das Buch zwischen Anzeige und Ausführung unverändert. Es gibt keine anderen Aufträge, Stornierungen oder versteckten Angebote. Spätere Fälle starten jeweils wieder mit dem vollständig genannten Buch. Wir addieren getrennte Fälle nicht zu einer einzigen Zeitfolge."
    ],
    "columns": [
      {
        "title": "Vor dem kleinen Kauf",
        "tone": "neutral",
        "points": [
          "Zwei Stück zu 50,00 Euro.",
          "Drei Stück zu 50,20 Euro."
        ]
      },
      {
        "title": "Nach einer Aktie",
        "tone": "positive",
        "points": [
          "Eine Aktie kostet 50,00 Euro.",
          "Eine bleibt bei 50,00 Euro angeboten."
        ]
      }
    ],
    "prompt": "Wie viel kostet dieser Kauf ohne Gebühren?",
    "answers": [
      {
        "label": "50,00 Euro.",
        "explanation": "Richtig: Eine Aktie wird auf der ersten verfügbaren Verkaufsstufe gehandelt."
      },
      {
        "label": "50,20 Euro.",
        "explanation": "Für eine Aktie ist die günstigere Stufe hier noch ausreichend."
      },
      {
        "label": "100,00 Euro.",
        "explanation": "Dieser Betrag wäre der Kaufwert von zwei Aktien zu 50,00 Euro."
      }
    ],
    "correct": 0,
    "rule": "Eine Preisstufe reicht nur bis zu ihrer verfügbaren Menge."
  },
  {
    "title": "Vier Aktien brauchen zwei Preisstufen",
    "summary": "Ein Auftrag kann mehrere Ausführungen erzeugen.",
    "paragraphs": [
      "Jetzt beginnt der Hauptfall mit dem ursprünglichen Buch: zwei Stück zu 50,00 Euro, drei zu 50,20 Euro, vier zu 50,50 Euro. Lea sendet eine Market-Kauforder über vier Aktien. Das Buch bleibt bis zur Ausführung unverändert.",
      "Die ersten zwei Aktien kosten zusammen 100,00 Euro. Danach braucht Lea noch zwei. Diese erhält sie zu 50,20 Euro; sie kosten zusammen 100,40 Euro. Ihr Kaufwert beträgt 100,00 + 100,40 = 200,40 Euro.",
      "Leas Auftrag ist vollständig ausgeführt. Trotzdem hat er zwei verschiedene Stückpreise. Die letzte Preisstufe von 50,50 Euro wird in diesem Fall nicht gebraucht. Vollständige Ausführung bedeutet nicht, dass jedes Stück denselben Preis erhält."
    ],
    "columns": [
      {
        "title": "Erste Stufe",
        "tone": "neutral",
        "points": [
          "2 × 50,00 Euro = 100,00 Euro.",
          "Danach fehlen zwei Aktien."
        ]
      },
      {
        "title": "Zweite Stufe",
        "tone": "positive",
        "points": [
          "2 × 50,20 Euro = 100,40 Euro.",
          "Gesamt: 200,40 Euro für vier Stück."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Kaufwert ohne Gebühren?",
    "answers": [
      {
        "label": "202,00 Euro.",
        "explanation": "50,50 Euro wird für diesen Auftrag nicht benötigt."
      },
      {
        "label": "200,40 Euro.",
        "explanation": "Richtig: Zwei Stück zu 50,00 und zwei zu 50,20 Euro ergeben diesen Betrag."
      },
      {
        "label": "200,00 Euro.",
        "explanation": "Zu 50,00 Euro waren nur zwei Aktien verfügbar."
      }
    ],
    "correct": 1,
    "rule": "Ein Auftrag kann über mehrere Preise vollständig ausgeführt werden."
  },
  {
    "title": "Den Durchschnitt des Hauptkaufs bestimmen",
    "summary": "Der Gesamtwert verteilt sich auf die Stückzahl.",
    "paragraphs": [
      "Der Hauptkauf umfasst zwei Aktien zu 50,00 Euro und zwei zu 50,20 Euro. Insgesamt wurden vier Aktien für 200,40 Euro gekauft. Wir rechnen zunächst ohne Gebühren.",
      "Der Durchschnittspreis ist 200,40 / 4 = 50,10 Euro je Aktie. Das ist ein nach Mengen gewichteter Durchschnitt. Hier sind die Teilmengen gleich groß. Deshalb entspricht er ausnahmsweise auch dem einfachen Mittel der zwei Preise.",
      "Die einzelne Ausführung lag trotzdem nicht bei 50,10 Euro. Der Durchschnitt beschreibt den gesamten Kauf. Bei verschiedenen Teilmengen darfst du nicht einfach nur die Preiszahlen mitteln. Rechne immer zuerst den Geldwert jeder Teilmenge aus."
    ],
    "columns": [
      {
        "title": "Ausführungen",
        "tone": "neutral",
        "points": [
          "Zwei Stück zu 50,00 Euro.",
          "Zwei Stück zu 50,20 Euro."
        ]
      },
      {
        "title": "Durchschnitt",
        "tone": "positive",
        "points": [
          "200,40 Euro / vier Stück.",
          "50,10 Euro je Aktie; kein einzelner Ausführungspreis."
        ]
      }
    ],
    "prompt": "Wie hoch ist der durchschnittliche Ausführungspreis?",
    "answers": [
      {
        "label": "200,40 Euro je Aktie.",
        "explanation": "Das ist der Gesamtwert aller vier Aktien."
      },
      {
        "label": "50,20 Euro je Aktie.",
        "explanation": "Das ist nur der Preis der zweiten Teilmenge."
      },
      {
        "label": "50,10 Euro je Aktie.",
        "explanation": "Richtig: Der Gesamtwert von 200,40 Euro wird durch vier geteilt."
      }
    ],
    "correct": 2,
    "rule": "Durchschnittspreis heißt Gesamtwert geteilt durch Gesamtmenge."
  },
  {
    "title": "Welche Angebote bleiben nach dem Kauf?",
    "summary": "Die verbrauchte Menge vom Buch abziehen.",
    "paragraphs": [
      "Vor dem Hauptkauf lagen zwei Aktien bei 50,00 Euro und drei bei 50,20 Euro. Lea hat die zwei günstigsten Aktien und zwei der drei nächsten gekauft. Die vier bei 50,50 Euro blieben unberührt.",
      "Nach dem Kauf sind null Stück bei 50,00 Euro übrig. Bei 50,20 Euro bleibt 3 − 2 = 1 Stück. Bei 50,50 Euro bleiben vier. Der beste verbleibende Ask ist damit 50,20 Euro für eine Aktie.",
      "Diese Änderung entsteht in unserem Fall durch die Ausführungen. In einem echten Buch können auch neue Aufträge und Stornierungen eintreffen. Dort reicht das reine Abziehen deiner Menge oft nicht, um die nächste Anzeige vorherzusagen."
    ],
    "columns": [
      {
        "title": "Verbraucht",
        "tone": "neutral",
        "points": [
          "Zwei Stück bei 50,00 Euro.",
          "Zwei Stück bei 50,20 Euro."
        ]
      },
      {
        "title": "Übrig im Lernfall",
        "tone": "positive",
        "points": [
          "Eine Aktie bei 50,20 Euro.",
          "Vier Aktien bei 50,50 Euro."
        ]
      }
    ],
    "prompt": "Wie viele Aktien bleiben bei 50,20 Euro?",
    "answers": [
      {
        "label": "Eine Aktie.",
        "explanation": "Richtig: Von drei angebotenen Aktien wurden zwei gekauft."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Diese Zahl galt vor dem Kauf, nicht danach."
      },
      {
        "label": "Keine Aktie.",
        "explanation": "Lea hat auf dieser Stufe nur zwei der drei gekauft."
      }
    ],
    "correct": 0,
    "rule": "Ziehe Ausführungen von der richtigen Preisstufe ab."
  },
  {
    "title": "Der letzte Preis und der Durchschnitt",
    "summary": "Verschiedene Anzeigen berichten Verschiedenes.",
    "paragraphs": [
      "Im Hauptfall werden zuerst die zwei Aktien zu 50,00 Euro und danach die zwei zu 50,20 Euro gekauft. Die letzte Ausführung dieser Folge liegt bei 50,20 Euro. Der Durchschnitt für alle vier beträgt 50,10 Euro.",
      "Der letzte Trade berichtet nur das zuletzt abgeschlossene Geschäft. Der Durchschnitt berücksichtigt die gesamte ausgeführte Ordermenge. Beide Angaben können richtig sein und trotzdem verschiedene Zahlen zeigen.",
      "Auch der beste verbleibende Ask ist eine eigene Information. Er beschreibt ein noch bestehendes Angebot. Im Hauptfall beträgt er ebenfalls 50,20 Euro. Diese zahlenmäßige Gleichheit macht ein vergangenes Geschäft und ein aktuelles Angebot nicht zu derselben Sache."
    ],
    "columns": [
      {
        "title": "Letzte Ausführung",
        "tone": "neutral",
        "points": [
          "50,20 Euro.",
          "Nur die letzte Teilmenge."
        ]
      },
      {
        "title": "Orderdurchschnitt",
        "tone": "positive",
        "points": [
          "50,10 Euro.",
          "Alle vier Aktien zusammen."
        ]
      }
    ],
    "prompt": "Welche Zahl beschreibt alle vier Aktien im Durchschnitt?",
    "answers": [
      {
        "label": "Immer der beste verbleibende Ask.",
        "explanation": "Ein aktuelles Angebot ist kein Durchschnitt vergangener Ausführungen."
      },
      {
        "label": "50,10 Euro.",
        "explanation": "Richtig: Der Durchschnitt bezieht beide Ausführungsstufen ein."
      },
      {
        "label": "50,20 Euro, weil das der letzte Trade ist.",
        "explanation": "Die letzte Ausführung beschreibt nicht den Durchschnitt der ganzen Order."
      }
    ],
    "correct": 1,
    "rule": "Letzter Trade, aktuelles Angebot und Orderdurchschnitt getrennt benennen."
  },
  {
    "title": "Eine größere Menge im selben Ausgangsbuch",
    "summary": "Die Auftragsgröße verändert den Durchschnitt.",
    "paragraphs": [
      "Für einen neuen Fall starten wir wieder bei zwei Stück zu 50,00 Euro, drei zu 50,20 Euro und vier zu 50,50 Euro. Lea kauft nun sechs Aktien. Nach fünf Aktien auf den ersten zwei Stufen fehlt noch eine.",
      "Die Geldwerte sind 100,00 Euro, 150,60 Euro und 50,50 Euro. Zusammen ergeben sie 301,10 Euro. Der Durchschnitt ist 301,10 / 6, ungefähr 50,1833 Euro je Aktie. Auf zwei Nachkommastellen gerundet sind das 50,18 Euro.",
      "Der Durchschnitt ist höher als beim getrennten Viererfall. Das liegt hier daran, dass eine zusätzliche, teurere Verkaufsstufe benötigt wird. Multipliziere einen gerundeten Durchschnitt nicht zur Prüfung zurück. Die ursprünglichen Ausführungswerte sind genauer."
    ],
    "columns": [
      {
        "title": "Sechs Stück",
        "tone": "neutral",
        "points": [
          "2 × 50,00 + 3 × 50,20 + 1 × 50,50.",
          "Kaufwert: 301,10 Euro."
        ]
      },
      {
        "title": "Durchschnitt",
        "tone": "positive",
        "points": [
          "301,10 / 6 ≈ 50,1833 Euro.",
          "Gerundet: 50,18 Euro je Aktie."
        ]
      }
    ],
    "prompt": "Wie hoch ist der genaue Gesamtwert vor Gebühren?",
    "answers": [
      {
        "label": "300,00 Euro.",
        "explanation": "Dieser Betrag behandelt alle sechs Aktien so, als seien sie zu 50,00 verfügbar."
      },
      {
        "label": "301,08 Euro.",
        "explanation": "Das wäre das Rückrechnen mit dem bereits gerundeten Durchschnitt von 50,18."
      },
      {
        "label": "301,10 Euro.",
        "explanation": "Richtig: Addiere die drei Geldwerte der tatsächlich benötigten Teilmengen."
      }
    ],
    "correct": 2,
    "rule": "Rechne mit den Einzelwerten und runde erst am Ende."
  },
  {
    "title": "Eine größere Verkaufsorder durchrechnen",
    "summary": "Auf der Kaufseite sind schlechtere Preise niedriger.",
    "paragraphs": [
      "In einem getrennten Verkaufsfall liegen drei Kaufangebote zu 49,90 Euro und zwei zu 49,70 Euro bereit. Lea besitzt vier Aktien und verkauft diese mit einer Market-Order. Andere Teilnehmer verändern das Buch nicht.",
      "Drei Aktien werden zu 49,90 Euro verkauft. Das ergibt 149,70 Euro. Die vierte wird zu 49,70 Euro verkauft. Insgesamt erhält Lea 199,40 Euro vor Gebühren. Der durchschnittliche Verkaufspreis beträgt 199,40 / 4 = 49,85 Euro.",
      "Beim Kauf bedeutete die nächste Stufe einen höheren Preis. Beim Verkauf liegt die nächste schlechtere Kaufstufe niedriger. Beide Fälle zeigen dieselbe Mengenfrage: Wie viel ist auf der passenden Gegenseite verfügbar?"
    ],
    "columns": [
      {
        "title": "Kaufangebote",
        "tone": "neutral",
        "points": [
          "Drei Stück zu 49,90 Euro.",
          "Zwei Stück zu 49,70 Euro."
        ]
      },
      {
        "title": "Vier Aktien verkauft",
        "tone": "positive",
        "points": [
          "149,70 + 49,70 = 199,40 Euro.",
          "Durchschnitt: 49,85 Euro je Aktie."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Verkaufserlös vor Gebühren?",
    "answers": [
      {
        "label": "199,40 Euro.",
        "explanation": "Richtig: Drei Aktien zum besten Bid und eine auf der nächsten Stufe."
      },
      {
        "label": "199,60 Euro.",
        "explanation": "Dafür müssten alle vier Aktien zu 49,90 verkauft werden; dort stehen nur drei bereit."
      },
      {
        "label": "200,00 Euro.",
        "explanation": "Ein Verkaufsangebot bei 50,00 schafft keinen Käufer zu diesem Preis."
      }
    ],
    "correct": 0,
    "rule": "Bei Verkäufen sind höhere verfügbare Kaufangebote zuerst günstiger für dich."
  },
  {
    "title": "Der Spread kostet auch ohne Kursbewegung",
    "summary": "Ein unmittelbarer Hin- und Rückhandel hat zwei Seiten.",
    "paragraphs": [
      "Ein eigener Ein-Aktien-Fall zeigt unverändert Bid 49,90 und Ask 50,00 Euro. Lea kauft eine Aktie zu 50,00 und verkauft sie direkt danach zu 49,90 Euro. Für beide Geschäfte reicht die verfügbare Menge. Das Angebotspaar bleibt ausdrücklich gleich.",
      "Ohne Gebühren zahlt Lea 50,00 Euro und bekommt 49,90 Euro zurück. Der Unterschied beträgt minus 0,10 Euro. Der Spread ist die Spanne zwischen bestem Ask und bestem Bid. Hier beträgt er 50,00 − 49,90 = 0,10 Euro.",
      "Das ist in diesem vereinfachten Fall der gesamte Preisunterschied. Addiere nicht noch einmal einen zweiten Spread. Gebühren würden gesondert hinzukommen. Für größere Mengen oder veränderte Angebote kann der tatsächliche Verlust anders ausfallen."
    ],
    "columns": [
      {
        "title": "Kauf und Verkauf",
        "tone": "neutral",
        "points": [
          "Kauf: 50,00 Euro.",
          "Verkauf: 49,90 Euro."
        ]
      },
      {
        "title": "Unverändertes Angebotspaar",
        "tone": "positive",
        "points": [
          "Spread: 0,10 Euro.",
          "Ergebnis vor Gebühren: minus 0,10 Euro."
        ]
      }
    ],
    "prompt": "Was ergibt der direkte Hin- und Rückhandel vor Gebühren?",
    "answers": [
      {
        "label": "Minus 0,20 Euro durch zwei volle Spreads.",
        "explanation": "Der gemessene Preisunterschied beträgt bereits 0,10 Euro; doppelt zählen wäre falsch."
      },
      {
        "label": "Minus 0,10 Euro.",
        "explanation": "Richtig: 49,90 Euro Erlös minus 50,00 Euro Kaufwert ergibt minus 0,10."
      },
      {
        "label": "Null, weil sich die Angebote nicht verändern.",
        "explanation": "Kauf und Verkauf greifen auf verschiedene Seiten zu."
      }
    ],
    "correct": 1,
    "rule": "Ein unverändertes Angebotspaar bedeutet keinen kostenlosen Hin- und Rückhandel."
  },
  {
    "title": "Preisabweichung braucht eine klare Referenz",
    "summary": "Slippage ist ein Vergleich mit benannter Grundlage.",
    "paragraphs": [
      "Vor dem Vierer-Hauptkauf zeigt Lea die App den besten Ask von 50,00 Euro. Ihr durchschnittlicher Ausführungspreis beträgt später 50,10 Euro. Wir verwenden ausdrücklich den angezeigten Ask vor dem Senden als Vergleichspreis.",
      "Die nachteilige Preisabweichung beträgt 50,10 − 50,00 = 0,10 Euro je Aktie. Für vier Stück sind das 0,40 Euro. Eine solche Abweichung nennt man Slippage. Sie kann aus verschiedenen Ursachen entstehen und auch günstiger als der Vergleichspreis ausfallen.",
      "Hier entsteht die Abweichung durch die benötigte Menge im unveränderten Buch. Es gab keine Verzögerung mit Preisänderung. Slippage ist keine zusätzliche Rechnung des Anbieters. Die 0,40 Euro sind bereits im Kaufwert von 200,40 Euro enthalten."
    ],
    "columns": [
      {
        "title": "Vergleich",
        "tone": "neutral",
        "points": [
          "Referenz: Ask 50,00 Euro vor dem Senden.",
          "Durchschnitt: 50,10 Euro."
        ]
      },
      {
        "title": "Preisabweichung",
        "tone": "positive",
        "points": [
          "0,10 Euro je Aktie × vier Stück.",
          "0,40 Euro bereits im Kaufwert enthalten."
        ]
      }
    ],
    "prompt": "Wie groß ist die nachteilige Abweichung für alle vier Aktien?",
    "answers": [
      {
        "label": "0,10 Euro insgesamt.",
        "explanation": "Das ist nur die Abweichung je Aktie."
      },
      {
        "label": "Eine zusätzliche Gebühr von 0,40 Euro.",
        "explanation": "Die Abweichung steckt bereits in den tatsächlichen Ausführungspreisen."
      },
      {
        "label": "0,40 Euro.",
        "explanation": "Richtig: Vier Aktien mal 0,10 Euro Abweichung vom benannten Ask."
      }
    ],
    "correct": 2,
    "rule": "Nenne bei Slippage immer Vergleichspreis, Zeitpunkt und Menge."
  },
  {
    "title": "Wenn das Buch vor Ankunft wechselt",
    "summary": "Der Bildschirm zeigt einen früheren Zustand.",
    "paragraphs": [
      "In einem neuen Fall sieht Lea vier Aktien zu 50,00 Euro. Sie sendet ihren Market-Kauf über vier Stück. Noch bevor er ankommt, zieht der Verkäufer dieses Angebot zurück. Bei Ankunft sind vier Aktien zu 50,30 Euro verfügbar.",
      "Unter unseren Übungsregeln wird die Order vollständig zu 50,30 Euro ausgeführt. Der Kaufwert beträgt 201,20 Euro. Gegenüber der Anzeige von 50,00 Euro sind es 0,30 Euro mehr je Aktie, also 1,20 Euro für die gesamte Menge.",
      "In diesem Fall ist die Änderung des Buchs als Ursache bekannt. Aus einem echten Ausführungsbericht allein würdest du nicht automatisch wissen, ob eine Stornierung, eine andere Order oder ein anderer Handelsweg dafür verantwortlich war. Eine Abweichung belegt nicht von sich aus einen technischen Fehler."
    ],
    "columns": [
      {
        "title": "Beim Blick auf die App",
        "tone": "neutral",
        "points": [
          "Vier Stück zu 50,00 Euro.",
          "Dieses Angebot wird anschließend zurückgezogen."
        ]
      },
      {
        "title": "Bei Ankunft",
        "tone": "positive",
        "points": [
          "Vier Stück zu 50,30 Euro.",
          "Kaufwert: 201,20 Euro."
        ]
      }
    ],
    "prompt": "Welche Angebote bestimmen im Lernfall die Ausführung?",
    "answers": [
      {
        "label": "Die verfügbaren Angebote bei Ankunft des Auftrags.",
        "explanation": "Richtig: Das frühere Angebot wurde vor der Ankunft zurückgezogen."
      },
      {
        "label": "Immer die früheren Bildschirmangebote.",
        "explanation": "Ein verschwundenes Angebot steht nicht mehr für den Kauf bereit."
      },
      {
        "label": "Automatisch der niedrigste Preis des Tages.",
        "explanation": "Eine Market-Order gibt kein Recht auf einen vergangenen Tagespreis."
      }
    ],
    "correct": 0,
    "rule": "Eine Anzeige und die spätere Ankunft sind verschiedene Zeitpunkte."
  },
  {
    "title": "Eine günstigere Abweichung ist ebenfalls möglich",
    "summary": "Slippage muss nicht immer nachteilig sein.",
    "paragraphs": [
      "In einem getrennten Fall zeigt die App vier Verkaufsangebote zu 50,00 Euro. Vor Ankunft von Leas Kauf kommt ein günstigeres Angebot über vier Stück zu 49,95 Euro hinzu. Es ist im Lernfall bei Ankunft noch verfügbar.",
      "Lea erhält die vier Aktien zu 49,95 Euro. Ihr Kaufwert beträgt 199,80 Euro. Gegenüber dem früher angezeigten Ask von 50,00 Euro sind das 0,05 Euro weniger je Aktie. Insgesamt kauft sie um 0,20 Euro günstiger als dieser Vergleichswert.",
      "Das Ergebnis macht Market-Orders nicht grundsätzlich günstig. Es zeigt nur, dass Angebote sich in beide Richtungen ändern können. Bei Vergleichen gehört die Richtung ausdrücklich dazu: für einen Käufer günstiger oder teurer, für einen Verkäufer höherer oder niedrigerer Erlös."
    ],
    "columns": [
      {
        "title": "Frühere Anzeige",
        "tone": "neutral",
        "points": [
          "Vier Stück zu 50,00 Euro.",
          "Vergleichswert: 200,00 Euro."
        ]
      },
      {
        "title": "Tatsächlicher Kauf",
        "tone": "positive",
        "points": [
          "Vier Stück zu 49,95 Euro.",
          "199,80 Euro; 0,20 Euro günstiger."
        ]
      }
    ],
    "prompt": "Wie viel günstiger kauft Lea gegenüber der früheren Anzeige?",
    "answers": [
      {
        "label": "Sie zahlt 0,20 Euro mehr.",
        "explanation": "49,95 ist für einen Käufer günstiger als 50,00."
      },
      {
        "label": "0,20 Euro insgesamt.",
        "explanation": "Richtig: Viermal 0,05 Euro ergibt 0,20 Euro."
      },
      {
        "label": "0,05 Euro insgesamt.",
        "explanation": "Das ist die Abweichung einer einzelnen Aktie."
      }
    ],
    "correct": 1,
    "rule": "Beschreibe die Preisabweichung aus Sicht deiner Handelsseite."
  },
  {
    "title": "Ein kleiner Spread reicht nicht als Mengenprüfung",
    "summary": "Enge Spanne und wenig Tiefe können zusammen vorkommen.",
    "paragraphs": [
      "Zwei getrennte Lernbücher zeigen denselben besten Bid von 49,99 und denselben besten Ask von 50,00 Euro. In Buch A stehen sechs Aktien zu 50,00 bereit. In Buch B steht dort nur eine; fünf weitere liegen bei 50,40 Euro.",
      "Ein Kauf über sechs Aktien kostet in A 300,00 Euro. In B kostet er 50,00 + 5 × 50,40 = 302,00 Euro. Beide Bücher zeigen zunächst einen Spread von nur 0,01 Euro. Die größere Menge trifft trotzdem auf verschiedene Tiefe.",
      "Markttiefe bezeichnet die Mengen auf mehreren Preisstufen. Du brauchst die passende Seite, die gewünschte Menge und den Zeitpunkt. Eine enge Spanne allein garantiert keinen niedrigen Durchschnittspreis für einen größeren Auftrag."
    ],
    "columns": [
      {
        "title": "Buch A",
        "tone": "neutral",
        "points": [
          "Sechs Aktien bei 50,00 Euro.",
          "Sechserkauf: 300,00 Euro."
        ]
      },
      {
        "title": "Buch B",
        "tone": "positive",
        "points": [
          "Eine bei 50,00; fünf bei 50,40 Euro.",
          "Sechserkauf: 302,00 Euro."
        ]
      }
    ],
    "prompt": "Wie viel kostet der Sechserkauf in Buch B ohne Gebühren?",
    "answers": [
      {
        "label": "300,00 Euro wie in A.",
        "explanation": "Der beste Ask ist gleich, die verfügbare Menge dort aber nicht."
      },
      {
        "label": "301,00 Euro, weil der Spread klein ist.",
        "explanation": "Der Spread liefert diese Mengenrechnung nicht."
      },
      {
        "label": "302,00 Euro.",
        "explanation": "Richtig: Nur eine Aktie ist zum besten Ask verfügbar."
      }
    ],
    "correct": 2,
    "rule": "Prüfe neben dem Spread die Menge auf mehreren Preisstufen."
  },
  {
    "title": "Sichtbare Tiefe ist eine Momentaufnahme",
    "summary": "Fehlende Daten sind keine vollständige Marktkenntnis.",
    "paragraphs": [
      "Leas Anzeige zeigt die Verkaufsstufen bis 50,50 Euro. Sie weiß damit, welche Mengen ihre Datenquelle in diesem Ausschnitt meldet. Sie weiß nicht automatisch, ob weitere Stufen oder nicht angezeigte Angebote existieren.",
      "Nicht angezeigte Menge kann je nach Handelsregeln trotzdem verfügbar sein. Sichtbare Menge kann dagegen verschwinden, bevor Lea handelt. Beides macht die Anzeige nicht nutzlos. Es begrenzt nur, welche sichere Aussage sie daraus ableiten kann.",
      "Für unsere festen Rechenfälle legen wir fest, dass es während der Rechnung keine weiteren Angebote und keine Buchänderungen gibt. Außerhalb solcher Annahmen ist eine Mengenrechnung aus der Anzeige eine Schätzung, kein garantierter späterer Ausführungspreis."
    ],
    "columns": [
      {
        "title": "Beobachtet",
        "tone": "neutral",
        "points": [
          "Gemeldete Angebote dieser Quelle.",
          "Ein bestimmter Ausschnitt zu einer bestimmten Zeit."
        ]
      },
      {
        "title": "Offen",
        "tone": "positive",
        "points": [
          "Mögliche weitere oder nicht angezeigte Mengen.",
          "Änderungen bis zur späteren Ausführung."
        ]
      }
    ],
    "prompt": "Was beweist ein begrenzter sichtbarer Buchausschnitt?",
    "answers": [
      {
        "label": "Die dort gemeldeten Angebote zu diesem Zeitpunkt.",
        "explanation": "Richtig: Er ist keine vollständige Zusage für jede spätere Ausführung."
      },
      {
        "label": "Dass außerhalb des Ausschnitts keine Angebote existieren.",
        "explanation": "Nicht angezeigte Stufen sind nicht automatisch leer."
      },
      {
        "label": "Dass alle sichtbaren Mengen bei Ankunft noch vorhanden sind.",
        "explanation": "Angebote können vorher verändert oder zurückgenommen werden."
      }
    ],
    "correct": 0,
    "rule": "Nenne Quelle, Ausschnitt und Zeitpunkt deiner Buchdaten."
  },
  {
    "title": "Zu wenig Menge: den Reststatus nachlesen",
    "summary": "Market enthält keine allgemeine Restregel.",
    "paragraphs": [
      "In einem eigenen Lernfall möchte Lea fünf Aktien kaufen. Es sind nur zwei zu 50,00 und eine zu 50,20 Euro verfügbar. Weitere Angebote gibt es in diesem Fall nicht. Drei Aktien kosten 150,20 Euro; zwei bleiben zunächst ohne Ausführung.",
      "Für diesen Lernmarkt ist ausdrücklich festgelegt: Der nicht sofort ausführbare Rest einer Market-Order wird gelöscht. Das System meldet drei ausgeführte und zwei gelöschte Stück. Lea besitzt danach drei Aktien und hat keinen offenen Kaufrest.",
      "Diese Restregel ist erfunden und gilt nur hier. Echte Anbieter können andere Regeln für Market-Aufträge verwenden oder eigene Schutzgrenzen haben. Übertrage deshalb weder „Rest wartet immer“ noch „Rest verschwindet immer“ ohne Prüfung auf dein Konto."
    ],
    "columns": [
      {
        "title": "Verfügbare Menge",
        "tone": "neutral",
        "points": [
          "Zwei Stück zu 50,00; eines zu 50,20 Euro.",
          "Drei gekauft für 150,20 Euro."
        ]
      },
      {
        "title": "Festgelegte Restregel",
        "tone": "positive",
        "points": [
          "Zwei nicht sofort handelbare Stück gelöscht.",
          "Drei im Bestand; null offen."
        ]
      }
    ],
    "prompt": "Was steht im Abschlussbericht dieses Lernfalls?",
    "answers": [
      {
        "label": "Zwei Stück warten bei jedem Anbieter immer weiter.",
        "explanation": "Die Übungsregel löscht den Rest; reale Regeln müssen einzeln geprüft werden."
      },
      {
        "label": "Drei Stück ausgeführt, zwei Reststücke gelöscht.",
        "explanation": "Richtig: Genau diese Restbehandlung ist für den Lernfall festgelegt."
      },
      {
        "label": "Fünf Stück vollständig ausgeführt.",
        "explanation": "Es waren nur drei verfügbar; weitere Angebote sind im Fall ausgeschlossen."
      }
    ],
    "correct": 1,
    "rule": "Eine fehlende Menge erklärt noch nicht den endgültigen Reststatus."
  },
  {
    "title": "Preisgrenzen des Systems können eingreifen",
    "summary": "Market kann zusätzlichen Schutzregeln unterliegen.",
    "paragraphs": [
      "Ein weiterer Lernmarkt führt Market-Käufe nur bis zu seiner festgelegten Schutzgrenze von 50,25 Euro aus. Diese Grenze hat das System gesetzt, nicht Lea. Verfügbar sind zwei Aktien zu 50,00, drei zu 50,20 und vier zu 50,50 Euro.",
      "Lea sendet einen Kauf über sechs Stück. Die fünf Aktien der ersten beiden Stufen liegen innerhalb der Schutzgrenze und kosten 250,60 Euro. Die nächste Stufe von 50,50 ist zu teuer. Im ausdrücklich festgelegten Ablauf wird das sechste Stück gelöscht.",
      "Lea besitzt fünf Aktien und hat keinen offenen Rest. Die Schutzregel verhindert in diesem Fall den Kauf auf der teureren Stufe. Sie garantiert aber weder die ursprünglich gewünschte Menge noch denselben Schutz bei einem anderen Handelsplatz. Der Wert 50,25 ist keine reale Anbieterregel."
    ],
    "columns": [
      {
        "title": "Erlaubte Stufen",
        "tone": "neutral",
        "points": [
          "Zwei zu 50,00 und drei zu 50,20 Euro.",
          "Fünf Stück kosten 250,60 Euro."
        ]
      },
      {
        "title": "Schutzregel im Lernfall",
        "tone": "positive",
        "points": [
          "Systemgrenze: 50,25 Euro.",
          "Sechstes Stück nicht gekauft; Rest gelöscht."
        ]
      }
    ],
    "prompt": "Wie viele Stück werden unter dieser Schutzregel gekauft?",
    "answers": [
      {
        "label": "Sechs Stück, Market umgeht jede Schutzregel.",
        "explanation": "Die im Fall gesetzte Systemgrenze bleibt wirksam."
      },
      {
        "label": "Null, weil Lea kein eigenes Limit gesetzt hat.",
        "explanation": "Die ersten fünf Stück dürfen nach der ausdrücklich genannten Regel ausgeführt werden."
      },
      {
        "label": "Fünf Stück.",
        "explanation": "Richtig: Die sechste Aktie wäre erst bei 50,50 Euro verfügbar und liegt über der Systemgrenze."
      }
    ],
    "correct": 2,
    "rule": "Keine eigene Preisgrenze bedeutet nicht, dass keine Systemregeln gelten."
  },
  {
    "title": "Unterbrechung und Auktion verändern den Ablauf",
    "summary": "Die Auftragsart allein erklärt nicht die Handelsphase.",
    "paragraphs": [
      "Lea möchte eine Market-Order senden, während der fortlaufende Handel unterbrochen ist. In diesem Moment können keine fortlaufenden Geschäfte stattfinden. Ob der Auftrag angenommen, abgelehnt oder für eine spätere Phase vorgemerkt wird, hängt von den Regeln ab.",
      "Eine Sammelauktion sammelt dagegen zunächst Handelswünsche und bestimmt später nach ihren Regeln einen gemeinsamen Ausführungspreis. Eine zugelassene Market-Order kann dort anders verarbeitet werden als im fortlaufenden Buch. Der Preis wird nicht einfach aus der alten Ask-Anzeige übernommen.",
      "Für einen echten Auftrag prüfst du Auftragszulassung, Handelsphase und bestätigten Status. Eine offene App bedeutet nicht, dass gerade gehandelt wird. Aus dem Wort Market folgt weder ein Preis noch ein Ausführungszeitpunkt während einer Unterbrechung."
    ],
    "columns": [
      {
        "title": "Fortlaufender Handel pausiert",
        "tone": "neutral",
        "points": [
          "Keine fortlaufende Ausführung in dieser Pause.",
          "Auftragsannahme hängt von Regeln ab."
        ]
      },
      {
        "title": "Sammelauktion",
        "tone": "positive",
        "points": [
          "Preisfindung nach den Auktionsregeln.",
          "Ein alter Ask ist keine Preiszusage."
        ]
      }
    ],
    "prompt": "Was musst du zusätzlich zum Auftragstyp prüfen?",
    "answers": [
      {
        "label": "Handelsphase, Zulassung und bestätigten Status.",
        "explanation": "Richtig: Die Phase verändert, wann und wie ein Auftrag verarbeitet werden kann."
      },
      {
        "label": "Nur ob die App offen ist.",
        "explanation": "Eine erreichbare Oberfläche beweist keinen laufenden Handel."
      },
      {
        "label": "Nichts, Market bedeutet jederzeit sofort.",
        "explanation": "Eine Market-Order setzt eine Unterbrechung nicht außer Kraft."
      }
    ],
    "correct": 0,
    "rule": "Auftragsart und Handelsphase gehören gemeinsam zur Ausführungsprüfung."
  },
  {
    "title": "Motive lassen sich aus einer Market-Order nicht ablesen",
    "summary": "Ausführungsbereitschaft ist keine Kursprognose.",
    "paragraphs": [
      "Ein Kauf greift auf verfügbare Verkaufsangebote zu. Das sagt etwas über den Ablauf. Es sagt nicht sicher, weshalb der Käufer handelt. Er könnte eine alte Position schließen, einen Bestand verändern oder eine Verpflichtung erfüllen.",
      "Ein großer Market-Kauf kann mehrere Verkaufsstufen benötigen. In unserem festen Buch verändert er dadurch den besten Ask. Trotzdem beweist dieser Ablauf weder einen späteren Aufwärtstrend noch geheimes Wissen des Käufers.",
      "Du kannst Preis, Menge und bekannte Ereignisse beschreiben. Persönliche Gründe oder kommende Kurse bleiben ohne zusätzliche Belege offen. Auch eine hohe beobachtete Handelsmenge ist keine Zusage, dass dein nächster Auftrag denselben Durchschnitt erhält."
    ],
    "columns": [
      {
        "title": "Beobachtbarer Ablauf",
        "tone": "neutral",
        "points": [
          "Ein Kauf nimmt Verkaufsangebote an.",
          "Menge kann mehrere Preisstufen benötigen."
        ]
      },
      {
        "title": "Nicht sicher bekannt",
        "tone": "positive",
        "points": [
          "Motiv und übrige Positionen des Käufers.",
          "Die nächste Kursrichtung."
        ]
      }
    ],
    "prompt": "Was beweist ein beobachteter Market-Kauf nicht?",
    "answers": [
      {
        "label": "Dass tatsächlich gehandelte Stücke einen Ausführungspreis haben.",
        "explanation": "Preis und Menge gehören zum ausgeführten Geschäft."
      },
      {
        "label": "Dass der Preis anschließend sicher steigt.",
        "explanation": "Richtig: Aus dem Auftrag folgt keine sichere spätere Kursrichtung."
      },
      {
        "label": "Dass eine ausgeführte Kaufmenge eine Verkaufsgegenseite hat.",
        "explanation": "Für das ausgeführte Geschäft gibt es eine Gegenseite."
      }
    ],
    "correct": 1,
    "rule": "Eine Ausführung zeigt einen Handel, keine sichere Prognose."
  },
  {
    "title": "Den Hauptkauf mit Kosten abschließen",
    "summary": "Slippage steckt bereits im Ausführungswert.",
    "paragraphs": [
      "Wir kehren zum Vierer-Hauptkauf zurück. Lea hat zwei Aktien zu 50,00 und zwei zu 50,20 Euro gekauft. Der Kaufwert beträgt 200,40 Euro. Eine einzige Kaufgebühr von 0,80 Euro kommt hinzu. Weitere Kosten gibt es in diesem Lernfall nicht.",
      "Die Kontobelastung beträgt 200,40 + 0,80 = 201,20 Euro. Gegenüber vier Aktien zum früher angezeigten Ask von 50,00 Euro beträgt der Mehrbetrag 1,20 Euro. Er besteht aus 0,40 Euro Preisabweichung und 0,80 Euro Gebühr.",
      "Die 0,40 Euro Slippage dürfen nicht zusätzlich auf 201,20 aufgeschlagen werden. Sie sind im tatsächlichen Kaufwert schon enthalten. Der Ausführungsdurchschnitt bleibt 50,10 Euro. Einschließlich Kaufgebühr sind es 201,20 / 4 = 50,30 Euro je Aktie."
    ],
    "columns": [
      {
        "title": "Ausführungswert",
        "tone": "neutral",
        "points": [
          "Vier Aktien für 200,40 Euro.",
          "0,40 Euro Abweichung vom Referenzwert schon enthalten."
        ]
      },
      {
        "title": "Endgültige Belastung",
        "tone": "positive",
        "points": [
          "Plus 0,80 Euro Kaufgebühr = 201,20 Euro.",
          "Kosten je Aktie einschließlich Kaufgebühr: 50,30 Euro."
        ]
      }
    ],
    "prompt": "Wie hoch ist die Kontobelastung mit der einen Kaufgebühr?",
    "answers": [
      {
        "label": "201,60 Euro.",
        "explanation": "Das würde die schon enthaltenen 0,40 Euro Slippage nochmals addieren."
      },
      {
        "label": "200,80 Euro.",
        "explanation": "Dieser Betrag ignoriert die tatsächlich höheren Ausführungspreise."
      },
      {
        "label": "201,20 Euro.",
        "explanation": "Richtig: Kaufwert plus Gebühr; die Preisabweichung wird nicht doppelt gerechnet."
      }
    ],
    "correct": 2,
    "rule": "Addiere zusätzliche Gebühren, aber keine bereits enthaltene Preisabweichung."
  },
  {
    "title": "Deine Market-Order selbst erklären",
    "summary": "Ein Bericht trennt Annahmen und bestätigte Daten.",
    "paragraphs": [
      "Leas Abschlussbericht lautet: Vier Nera-Aktien mit einer Market-Order gekauft. Vor dem Senden zeigte die Verkaufsseite zwei zu 50,00 und drei zu 50,20 Euro. Das Buch blieb im Lernfall unverändert. Zwei und zwei Stück wurden auf diesen Stufen ausgeführt.",
      "Der Bericht nennt 200,40 Euro Ausführungswert, 50,10 Euro Durchschnitt und 0,80 Euro Kaufgebühr. Die Belastung beträgt 201,20 Euro. Vier Aktien sind gekauft, kein Rest ist offen. Der Vergleich zum vorherigen Ask zeigt 0,40 Euro nachteilige Preisabweichung.",
      "Ein übertragbarer Bericht nennt Produkt, Seite, Menge, Handelsweg, Phase, Quelle und Zeitpunkt der Vergleichsdaten. Dann folgen tatsächliche Ausführungen, Kosten und bestätigter Reststatus. Fehlen Buchdaten für die Ankunft, nennt er die Ursache einer Abweichung offen statt sie zu erfinden."
    ],
    "columns": [
      {
        "title": "Belegte Daten",
        "tone": "neutral",
        "points": [
          "Vier Aktien, zwei Ausführungspreise, null Rest.",
          "200,40 Euro Kaufwert plus 0,80 Euro Gebühr."
        ]
      },
      {
        "title": "Saubere Einordnung",
        "tone": "positive",
        "points": [
          "Referenz und Zeitpunkt nennen.",
          "Unbekannte Ursachen ausdrücklich offenlassen."
        ]
      }
    ],
    "prompt": "Was gehört in einen überprüfbaren Bericht?",
    "answers": [
      {
        "label": "Ausführungen, Kosten, Reststatus und benannte Vergleichsdaten.",
        "explanation": "Richtig: Diese Angaben trennen den tatsächlichen Handel von Schätzungen und Ursachenannahmen."
      },
      {
        "label": "Nur der letzte Chartpreis.",
        "explanation": "Damit fehlen Menge, Gebühren, Durchschnitt und Reststatus."
      },
      {
        "label": "Eine sichere Kursvorhersage aus dem Auftrag.",
        "explanation": "Ein Ausführungsbericht liefert keine sichere zukünftige Kursrichtung."
      }
    ],
    "correct": 0,
    "rule": "Erkläre eine Market-Order mit bestätigten Daten und klaren Annahmen."
  }
];
export const ordersChapterTwoLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-02.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 2 · Market-Orders und verfügbare Angebote',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 2', title: draft.title,
        paragraphs: draft.paragraphs, callout: draft.rule,
      },
      {
        id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick',
        columns: draft.columns.map((column) => ({ ...column, tone: column.tone as 'neutral' | 'positive' })),
      },
      {
        id: `${key}.question`, type: 'question', title: 'Kurz prüfen',
        prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`,
        options: draft.answers.map((answer, optionIndex) => ({ id: `choice-${optionIndex}`, ...answer })),
      },
      {
        id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit',
        points: [draft.rule, draft.summary],
      },
    ],
  };
});
