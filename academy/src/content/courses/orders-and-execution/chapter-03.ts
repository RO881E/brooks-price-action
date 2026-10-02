import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Das Limit schützt eine Preisgrenze",
    "summary": "Es garantiert keine Ausführung.",
    "paragraphs": [
      "Lea möchte Aktien der erfundenen Firma Vela kaufen. Sie setzt ein Limit von 40,00 Euro je Aktie. Das bedeutet: Ein Kauf darf höchstens 40,00 Euro je Stück kosten. Ein niedrigerer Ausführungspreis ist ebenfalls erlaubt.",
      "Beim Verkauf ist die Richtung umgekehrt. Ein Verkaufslimit von 40,00 Euro bedeutet mindestens 40,00 Euro je Stück. Das Limit ist weder eine Gewinnzusage noch eine Grenze für alle Gebühren. Es begrenzt den Preis der einzelnen Ausführungen.",
      "Ein Limitauftrag kann teilweise, vollständig oder gar nicht ausgeführt werden. Das hängt auch von verfügbaren Gegenaufträgen und den Handelsregeln ab. In diesem Kapitel rechnen wir mit erfundenen Aktien, festen Regeln und Europreisen je Stück."
    ],
    "columns": [
      {
        "title": "Kauflimit",
        "tone": "neutral",
        "points": [
          "Höchstens 40,00 Euro je Aktie.",
          "Günstiger ist erlaubt."
        ]
      },
      {
        "title": "Verkaufslimit",
        "tone": "positive",
        "points": [
          "Mindestens 40,00 Euro je Aktie.",
          "Höherer Erlös ist erlaubt."
        ]
      }
    ],
    "prompt": "Was erlaubt ein Kauflimit von 40,00 Euro?",
    "answers": [
      {
        "label": "Eine Ausführung zu 39,90 Euro.",
        "explanation": "Richtig: Der Preis liegt unter der höchsten erlaubten Kaufgrenze."
      },
      {
        "label": "Eine Ausführung zu 40,10 Euro.",
        "explanation": "40,10 überschreitet das Kauflimit."
      },
      {
        "label": "Nur genau 40,00 Euro und keinen anderen Preis.",
        "explanation": "Ein Kauflimit erlaubt auch niedrigere Ausführungspreise."
      }
    ],
    "correct": 0,
    "rule": "Beim Kauf heißt Limit höchstens, beim Verkauf mindestens."
  },
  {
    "title": "Ein Kaufauftrag darf warten",
    "summary": "Ein passender Preis ist nicht immer vorhanden.",
    "paragraphs": [
      "Der beste Verkäufer verlangt im Lernbuch 40,20 Euro. Lea setzt ein Kauflimit von 40,00 Euro für vier Aktien. Zu ihrer Grenze gibt es im Fall noch keinen passenden Verkäufer. Ihr Auftrag kauft zunächst nichts.",
      "Der Lernmarkt nimmt diesen Limitauftrag als offenes Kaufangebot in sein Buch auf. Das nennen wir ruhend: Der Auftrag wartet auf eine mögliche Ausführung. Er bleibt nach den Übungsregeln bis zum Handel, bestätigten Stornieren oder Ablauf aktiv.",
      "Lea hat durch das Warten noch keinen neuen Bestand. Auch vier beauftragte Aktien sind nicht vier gekaufte Aktien. Sie liest die ausgeführte Menge und den offenen Rest getrennt. Der aktuelle Ask bei 40,20 macht ihre Preisgrenze nicht automatisch unwirksam."
    ],
    "columns": [
      {
        "title": "Gegenseite",
        "tone": "neutral",
        "points": [
          "Verkäufer verlangt 40,20 Euro.",
          "Kaufgrenze: 40,00 Euro."
        ]
      },
      {
        "title": "Auftrag",
        "tone": "positive",
        "points": [
          "Null gekauft, vier offen.",
          "Das Limit wartet nach den Lernregeln."
        ]
      }
    ],
    "prompt": "Warum wird zunächst nichts gekauft?",
    "answers": [
      {
        "label": "Weil Limitaufträge niemals ausgeführt werden.",
        "explanation": "Sie können handeln, sobald passende Gegenaufträge und Regeln es erlauben."
      },
      {
        "label": "Das Verkaufsangebot liegt über Leas Kaufgrenze.",
        "explanation": "Richtig: 40,20 ist für ein Limit von 40,00 zu teuer."
      },
      {
        "label": "Weil ein Auftrag sofort neuen Aktienbesitz erzeugt.",
        "explanation": "Eine offene Order ist noch keine Ausführung."
      }
    ],
    "correct": 1,
    "rule": "Ein ruhendes Limit ist ein Angebot und noch kein Geschäft."
  },
  {
    "title": "Ein Limit kann sofort zugreifen",
    "summary": "Limit bedeutet nicht automatisch passiv.",
    "paragraphs": [
      "In einem getrennten Lernfall liegen zwei Verkaufsangebote zu 39,90 Euro und drei zu 40,00 Euro bereit. Lea sendet einen Kauf über vier Aktien mit Limit 40,00 Euro. Alle Angebote bleiben bis zur Ankunft bestehen.",
      "Der Lernmarkt führt zuerst zwei Aktien zu 39,90 Euro und dann zwei zu 40,00 Euro aus. Alle Preise liegen innerhalb der Grenze. Der Kaufwert beträgt 79,80 + 80,00 = 159,80 Euro. Der Durchschnitt ist 159,80 / 4 = 39,95 Euro.",
      "Dieses Limit ist sofort ausführbar. Es nimmt vorhandene Verkaufsangebote an, statt erst als neues Kaufangebot zu warten. Ob ein Auftrag Liquidität nimmt oder anbietet, hängt daher vom Preis und vom aktuellen Buch ab. Der Name Limit allein beantwortet das nicht."
    ],
    "columns": [
      {
        "title": "Verfügbare Angebote",
        "tone": "neutral",
        "points": [
          "Zwei Stück zu 39,90 Euro.",
          "Drei zu 40,00 Euro."
        ]
      },
      {
        "title": "Vier Stück gekauft",
        "tone": "positive",
        "points": [
          "Kaufwert: 159,80 Euro.",
          "Durchschnitt: 39,95 Euro."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Kaufwert vor Gebühren?",
    "answers": [
      {
        "label": "160,00 Euro zwingend.",
        "explanation": "Das Limit erzwingt nicht den maximal erlaubten Stückpreis."
      },
      {
        "label": "Null, weil jedes Limit zuerst warten muss.",
        "explanation": "Die vorhandenen Verkäufer liegen bereits innerhalb der Grenze."
      },
      {
        "label": "159,80 Euro.",
        "explanation": "Richtig: Zwei Stück zu 39,90 und zwei zu 40,00 werden innerhalb des Limits gekauft."
      }
    ],
    "correct": 2,
    "rule": "Ein sofort ausführbares Limit kann vorhandene Angebote annehmen."
  },
  {
    "title": "Die Restmenge hält die Grenze ein",
    "summary": "Der Auftrag kauft nicht einfach über sein Limit.",
    "paragraphs": [
      "In einem neuen Fall werden vier Aktien mit Kauflimit 40,00 Euro beauftragt. Zwei sind zu 39,90 und eine zu 40,00 verfügbar. Die nächste Verkaufsstufe liegt bei 40,20 Euro. Es gibt keine weiteren Angebote.",
      "Der Lernmarkt kauft drei Aktien für 119,80 Euro. Die vierte darf nicht zu 40,20 gekauft werden. Unsere Regel lässt sie als offenen Kaufrest bei 40,00 Euro warten. Der Bestand steigt um drei, ein Stück bleibt offen.",
      "Die Preisgrenze wirkt auch auf den Rest. Eine bereits erfolgte Teilausführung erlaubt keinen späteren Kauf über der Grenze. Der Reststatus hängt zusätzlich von der Gültigkeit und Mengenregel ab. Hier ist das Weiterwarten ausdrücklich festgelegt."
    ],
    "columns": [
      {
        "title": "Gekauft",
        "tone": "neutral",
        "points": [
          "2 × 39,90 + 1 × 40,00 = 119,80 Euro.",
          "Drei Aktien im Bestand."
        ]
      },
      {
        "title": "Rest",
        "tone": "positive",
        "points": [
          "Eine Aktie weiter offen bei 40,00 Euro.",
          "40,20 Euro liegt außerhalb der Grenze."
        ]
      }
    ],
    "prompt": "Wie viele Aktien bleiben offen?",
    "answers": [
      {
        "label": "Eine Aktie.",
        "explanation": "Richtig: Drei der vier Aktien konnten innerhalb der Grenze gekauft werden."
      },
      {
        "label": "Keine, weil die vierte zu 40,20 gekauft wird.",
        "explanation": "Dieser Preis würde das Limit überschreiten."
      },
      {
        "label": "Vier, weil eine Teilmenge nicht handeln darf.",
        "explanation": "Im Lernfall sind Teilausführungen ausdrücklich erlaubt."
      }
    ],
    "correct": 0,
    "rule": "Ein offener Rest behält die bestätigte Preisgrenze."
  },
  {
    "title": "Das Verkaufslimit schützt nach unten",
    "summary": "Ein höheres Kaufangebot darf angenommen werden.",
    "paragraphs": [
      "Lea besitzt vier Aktien. In einem separaten Verkaufsbuch bieten Käufer zwei Stück zu 40,10 Euro und zwei zu 40,00 Euro an. Lea setzt für ihren Verkauf ein Limit von 40,00 Euro. Das Buch bleibt unverändert.",
      "Die beiden höheren Gebote werden zuerst genutzt. Zwei Aktien bringen 80,20 Euro, die anderen zwei 80,00 Euro. Der Erlös vor Gebühren beträgt 160,20 Euro. Alle Stückpreise liegen mindestens bei 40,00 Euro.",
      "Wäre das nächste verfügbare Kaufangebot nur bei 39,90 Euro, dürfte ein Rest mit diesem Verkaufslimit dort nicht handeln. Beim Verkauf ist die gute Richtung ein höherer Preis. Beim Kauf ist die gute Richtung ein niedrigerer."
    ],
    "columns": [
      {
        "title": "Käufer",
        "tone": "neutral",
        "points": [
          "Zwei Stück zu 40,10 Euro.",
          "Zwei Stück zu 40,00 Euro."
        ]
      },
      {
        "title": "Verkauf",
        "tone": "positive",
        "points": [
          "Erlös: 160,20 Euro.",
          "Alle Stückpreise mindestens 40,00 Euro."
        ]
      }
    ],
    "prompt": "Welcher Erlös entsteht vor Gebühren?",
    "answers": [
      {
        "label": "160,00 Euro zwingend.",
        "explanation": "Ein Verkaufslimit erlaubt auch höhere Preise."
      },
      {
        "label": "160,20 Euro.",
        "explanation": "Richtig: Zwei höhere Gebote und zwei Gebote genau am Limit."
      },
      {
        "label": "159,60 Euro.",
        "explanation": "Dafür müssten alle Stücke unter dem Limit zu 39,90 verkauft werden."
      }
    ],
    "correct": 1,
    "rule": "Ein Verkaufslimit verbietet niedrigere, erlaubt aber höhere Stückpreise."
  },
  {
    "title": "Ein Limit wartet nicht auf eine Kursrichtung",
    "summary": "Die Grenze prüft Preise, keinen späteren Auslöser.",
    "paragraphs": [
      "Lea möchte erst kaufen, wenn der Preis später auf 40,50 Euro steigt. Sie setzt aber jetzt ein Kauflimit von 40,50 Euro. Im Lernbuch sind bereits Aktien zu 40,20 Euro verfügbar. Diese Preise liegen unter ihrer höchsten Kaufgrenze.",
      "Ein normales Kauflimit prüft nur, ob der Ausführungspreis höchstens der Grenze entspricht. Es wartet nicht auf einen Anstieg bis zur Grenze. Im genannten Lernfall kann der Auftrag deshalb sofort zu 40,20 Euro kaufen.",
      "Eine Bedingung wie „erst nach einem bestimmten Preisereignis aktiv werden“ ist eine andere Anweisung. Solche Auslöser erklärt das nächste Kapitel mit Stop-Orders. Aus einem normalen Limit wird durch einen weiter entfernten Preis keine solche Bedingung."
    ],
    "columns": [
      {
        "title": "Normaler Limitauftrag",
        "tone": "neutral",
        "points": [
          "Kauflimit: höchstens 40,50 Euro.",
          "40,20 Euro ist bereits zulässig."
        ]
      },
      {
        "title": "Gewünschte spätere Bedingung",
        "tone": "positive",
        "points": [
          "Erst nach einem bestimmten Ereignis aktiv werden.",
          "Diese Bedingung steckt nicht im normalen Limit."
        ]
      }
    ],
    "prompt": "Muss das Kauflimit 40,50 auf einen Anstieg bis 40,50 warten?",
    "answers": [
      {
        "label": "Ja, ein Kauflimit ist immer ein Auslöser nach oben.",
        "explanation": "Ein normales Limit ist eine Preisgrenze und keine Aktivierungsbedingung."
      },
      {
        "label": "Ja, es darf immer nur genau zum Limit handeln.",
        "explanation": "Niedrigere Kaufpreise sind ebenfalls zulässig."
      },
      {
        "label": "Nein, es kann bereits zu 40,20 Euro handeln.",
        "explanation": "Richtig: 40,20 liegt innerhalb der Kaufgrenze; das normale Limit enthält keinen späteren Auslöser."
      }
    ],
    "correct": 2,
    "rule": "Eine Preisgrenze ist keine spätere Aktivierungsbedingung."
  },
  {
    "title": "Die Warteschlange hat feste Lernregeln",
    "summary": "Preis zuerst, Zeit danach.",
    "paragraphs": [
      "Für unseren Hauptfall legen wir einen eigenen Lernmarkt fest. Höhere Kaufgebote kommen zuerst. Bei gleichem Kaufpreis hat der früher angenommene Auftrag Vorrang. Vorrang bedeutet: Er darf vor dem späteren Auftrag ausgeführt werden.",
      "Der Lernmarkt handelt dabei zum Preis des bereits wartenden Auftrags. Alle Mengen sind sichtbar. Teilausführungen sind erlaubt. Es gibt keine versteckten Reserven und keine gleichzeitigen Ankunftszeiten. Jede Buchänderung wird ausdrücklich genannt.",
      "Diese Regeln heißen hier Preis-Zeit-Priorität. Sie sind eine Übungsregel und keine Zusage für jede Börse. Andere Systeme können Mengen anders zuteilen. Für einen echten Auftrag prüfst du die Regeln deines Produkts und Handelsplatzes."
    ],
    "columns": [
      {
        "title": "Preisregel",
        "tone": "neutral",
        "points": [
          "Höheres Kaufgebot zuerst.",
          "Niedrigeres Verkaufsangebot zuerst."
        ]
      },
      {
        "title": "Zeitregel im Lernmarkt",
        "tone": "positive",
        "points": [
          "Bei gleichem Preis: früher angenommen zuerst.",
          "Ausführung zum Preis des wartenden Auftrags."
        ]
      }
    ],
    "prompt": "Was entscheidet im Lernmarkt bei gleichem Preis?",
    "answers": [
      {
        "label": "Die frühere Annahme des Auftrags.",
        "explanation": "Richtig: Genau diese Reihenfolge ist als Übungsregel festgelegt."
      },
      {
        "label": "Die Größe des Bildschirms.",
        "explanation": "Sie verändert die Ausführungsregel nicht."
      },
      {
        "label": "Bei jeder realen Börse immer dieselbe Regel.",
        "explanation": "Die Regeln können sich zwischen Produkten und Handelsplätzen unterscheiden."
      }
    ],
    "correct": 0,
    "rule": "Eine Warteschlange lässt sich erst mit ihren Regeln erklären."
  },
  {
    "title": "Den Hauptfall vor der ersten Ausführung lesen",
    "summary": "Vor Lea warten fünf Stück zum gleichen Preis.",
    "paragraphs": [
      "Am Preis von 40,00 Euro liegt zuerst Kaufauftrag A über drei Stück. Danach liegt Kaufauftrag B über zwei Stück. Leas neuer Kaufauftrag L über vier Stück kommt als dritter an. Alle drei Limits liegen bei 40,00 Euro.",
      "Vor Lea warten 3 + 2 = 5 Aktien. Das gesamte Kaufvolumen dieser Stufe beträgt 3 + 2 + 4 = 9 Aktien. Fünf vor Lea und neun insgesamt sind verschiedene Größen. Lea besitzt noch keine neuen Aktien.",
      "Ein Verkäufer muss nach den Lernregeln zuerst die fünf früheren Stücke bedienen, bevor Lea etwas erhält. Die Wartemenge ist keine Uhr. Ohne neue Verkaufsaufträge kennen wir weder die Dauer noch die Wahrscheinlichkeit einer Ausführung."
    ],
    "columns": [
      {
        "title": "Vor Lea",
        "tone": "neutral",
        "points": [
          "A: drei Stück, dann B: zwei Stück.",
          "Fünf Stück voraus."
        ]
      },
      {
        "title": "Mit Lea",
        "tone": "positive",
        "points": [
          "L: vier Stück zuletzt.",
          "Neun Stück auf der Preisstufe insgesamt."
        ]
      }
    ],
    "prompt": "Wie viele Stück warten vor Lea?",
    "answers": [
      {
        "label": "Vier Stück.",
        "explanation": "Vier ist Leas eigene Wunschmenge."
      },
      {
        "label": "Fünf Stück.",
        "explanation": "Richtig: A hat drei und B zwei Stück vor Leas Auftrag."
      },
      {
        "label": "Neun Stück.",
        "explanation": "Neun ist die Gesamtmenge einschließlich Lea."
      }
    ],
    "correct": 1,
    "rule": "Eigene Menge, Menge vor dir und Gesamtmenge getrennt zählen."
  },
  {
    "title": "Ein Trade am Limit kann an dir vorbeigehen",
    "summary": "Der erste Verkaufsauftrag erreicht Lea noch nicht.",
    "paragraphs": [
      "Der Hauptfall startet mit A drei, B zwei und Lea vier Stück bei 40,00 Euro. Ein Market-Verkäufer kommt mit vier Aktien. Höhere Kaufgebote gibt es nicht. Die Preis-Zeit-Regel bleibt unverändert.",
      "Der Verkäufer handelt drei Aktien mit A und eine mit B. Alle vier werden zu 40,00 Euro gehandelt. Leas eigener Auftrag erhält null. Vor ihr bleibt eine Aktie von B. Ihr Kaufrest umfasst weiterhin vier Stück.",
      "Der letzte Trade und der Chart können also 40,00 Euro zeigen. Trotzdem hat Lea nicht gekauft. Der Preis wurde gehandelt, aber die verfügbare Verkaufsmenge reichte in der Reihenfolge nicht bis zu ihr."
    ],
    "columns": [
      {
        "title": "Vier verkaufte Aktien",
        "tone": "neutral",
        "points": [
          "Drei gehen an A.",
          "Eine geht an B."
        ]
      },
      {
        "title": "Lea danach",
        "tone": "positive",
        "points": [
          "Null gekauft, vier offen.",
          "Eine Aktie von B wartet noch davor."
        ]
      }
    ],
    "prompt": "Wie viele Aktien erhält Lea bei dieser ersten Verkaufsorder?",
    "answers": [
      {
        "label": "Eine, weil sie als dritte Person wartet.",
        "explanation": "Die Zuteilung richtet sich nach Stückmengen, nicht nach einem Stück je Person."
      },
      {
        "label": "Vier, weil der Preis ihr Limit berührt.",
        "explanation": "Die früheren Aufträge verbrauchen die verfügbare Menge."
      },
      {
        "label": "Null Aktien.",
        "explanation": "Richtig: Die vier verkauften Stücke werden vollständig den früheren Aufträgen zugeteilt."
      }
    ],
    "correct": 2,
    "rule": "Ein Trade am Limitpreis beweist keine Ausführung deiner Order."
  },
  {
    "title": "Der nächste Verkäufer erreicht einen Teil",
    "summary": "Die verbliebene Wartemenge zuerst bedienen.",
    "paragraphs": [
      "Wir setzen den Hauptfall fort. B hat noch eine Aktie vor Lea. Lea hat vier Stück offen. Ein neuer Market-Verkäufer bringt drei Aktien. Neue Gebote und Stornierungen gibt es zwischen diesen Ereignissen nicht.",
      "Eine Aktie wird zuerst mit B gehandelt. Die übrigen zwei werden mit Lea gehandelt. Lea kauft damit zwei Aktien zu 40,00 Euro. Der Kaufwert ist 80,00 Euro. Von ihren vier gewünschten Stück bleiben zwei offen.",
      "Für die neue Rechnung zählen die verbliebenen Mengen nach dem ersten Ereignis. Du darfst die ursprünglichen drei Stück von A nicht erneut abziehen. Eine Zeitfolge muss jeden Verbrauch genau einmal berücksichtigen."
    ],
    "columns": [
      {
        "title": "Vor dem zweiten Verkäufer",
        "tone": "neutral",
        "points": [
          "B: eine Aktie.",
          "Lea: vier Aktien."
        ]
      },
      {
        "title": "Danach",
        "tone": "positive",
        "points": [
          "Lea erhält zwei für 80,00 Euro.",
          "Zwei eigene Stück bleiben offen."
        ]
      }
    ],
    "prompt": "Wie viele Aktien kauft Lea beim zweiten Verkäufer?",
    "answers": [
      {
        "label": "Zwei Aktien.",
        "explanation": "Richtig: Von drei verkauften Stück geht eines an den noch wartenden B-Auftrag."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "B besitzt vor Lea noch Vorrang für eine Aktie."
      },
      {
        "label": "Null, weil A noch drei Stück benötigt.",
        "explanation": "A war bereits beim ersten Ereignis vollständig ausgeführt."
      }
    ],
    "correct": 0,
    "rule": "Rechne die nächste Ausführung mit der aktuellen Restwarteschlange."
  },
  {
    "title": "Ein neuer Auftrag hinten verändert deinen Vorrang nicht",
    "summary": "Später am gleichen Preis heißt hier hinter dir.",
    "paragraphs": [
      "In einem getrennten Fall beginnt die ursprüngliche Schlange erneut: A drei, B zwei, Lea vier Stück bei 40,00 Euro. Jetzt kommt Auftrag C über zehn Stück zum gleichen Preis hinzu. C ist später angenommen.",
      "Unter unserer Preis-Zeit-Regel steht C hinter Lea. Vor Lea bleiben fünf Stück. Die Gesamtmenge wächst von neun auf neunzehn Aktien. Leas Vorrang gegenüber C bleibt bestehen, solange keine andere Änderung eintritt.",
      "Eine große spätere Menge am gleichen Preis schiebt Lea nicht automatisch zurück. In einem System mit einer anderen Zuteilungsregel könnte die Wirkung anders sein. Auch die Gesamtmenge einer Anzeige allein erklärt deshalb deine genaue Reihenfolge nicht."
    ],
    "columns": [
      {
        "title": "Vor Lea",
        "tone": "neutral",
        "points": [
          "A drei plus B zwei.",
          "Weiterhin fünf Stück."
        ]
      },
      {
        "title": "Hinter Lea",
        "tone": "positive",
        "points": [
          "C zehn Stück später angenommen.",
          "Gesamtmenge jetzt neunzehn."
        ]
      }
    ],
    "prompt": "Wie viele Stück liegen nach C weiterhin vor Lea?",
    "answers": [
      {
        "label": "Neunzehn Stück.",
        "explanation": "Das ist die neue Gesamtmenge einschließlich Lea und C."
      },
      {
        "label": "Fünf Stück.",
        "explanation": "Richtig: Der spätere Auftrag C kommt im Lernmarkt hinter Lea."
      },
      {
        "label": "Fünfzehn Stück.",
        "explanation": "C steht hier hinter Lea und zählt nicht zur Menge davor."
      }
    ],
    "correct": 1,
    "rule": "Spätere Menge am gleichen Preis ist nicht automatisch Menge vor dir."
  },
  {
    "title": "Ein besseres Gebot kommt vor den alten Preis",
    "summary": "Preisvorrang kann Zeitvorrang überholen.",
    "paragraphs": [
      "Ein neuer getrennt gestarteter Fall enthält A drei, B zwei und Lea vier Aktien bei 40,00 Euro. D bietet später für zwei Aktien 40,10 Euro. Der beste Verkäufer liegt noch bei 40,20 Euro, daher handelt D zunächst nicht sofort.",
      "D hat das höhere Kaufgebot und kommt nach unserer Preisregel vor allen Aufträgen bei 40,00 Euro. Ein Market-Verkäufer bringt drei Stück. Zwei werden mit D zu 40,10 Euro gehandelt. Eines geht an A zu 40,00 Euro.",
      "Lea erhält null. Obwohl D später ankam, war sein Preis besser für den Verkäufer. Zeitvorrang entscheidet im Lernmarkt nur innerhalb derselben Preisstufe. Ein höherer Bid kann die Menge auf besseren Stufen erhöhen, ohne Leas Rang bei 40,00 zu verändern."
    ],
    "columns": [
      {
        "title": "Besserer Preis",
        "tone": "neutral",
        "points": [
          "D zwei Stück zu 40,10 Euro.",
          "Später angekommen, aber höhere Kaufgrenze."
        ]
      },
      {
        "title": "Drei verkauft",
        "tone": "positive",
        "points": [
          "Zwei an D, eines an A.",
          "Lea erhält null."
        ]
      }
    ],
    "prompt": "Wer bekommt die ersten zwei Stück des Verkäufers?",
    "answers": [
      {
        "label": "Alle erhalten automatisch gleich viel.",
        "explanation": "Die festgelegte Übungsregel sieht keine Gleichverteilung vor."
      },
      {
        "label": "Lea, weil ihr Limit älter ist.",
        "explanation": "Die ältere Zeit hilft nicht gegen ein höheres Kaufgebot."
      },
      {
        "label": "D mit dem Gebot von 40,10 Euro.",
        "explanation": "Richtig: Preisvorrang geht im Lernmarkt vor der Zeitreihenfolge einer schlechteren Stufe."
      }
    ],
    "correct": 2,
    "rule": "Zeitvorrang gilt hier erst nach dem Vergleich der Preise."
  },
  {
    "title": "Eine Stornierung vor dir kann die Menge verkleinern",
    "summary": "Bestätigte Löschung ist kein Trade.",
    "paragraphs": [
      "Wir starten wieder mit A drei, B zwei und Lea vier Stück bei 40,00 Euro. B storniert seinen vollständigen Auftrag. Der Lernmarkt bestätigt die Löschung vor dem nächsten Handelsereignis. Es gibt keine Zwischenfüllung von B.",
      "Vor Lea stehen danach nur die drei Stück von A. Insgesamt bleiben sieben Kaufstücke bei 40,00 Euro. Durch die Stornierung wird keine Aktie gehandelt. Lea hat weiterhin null gekauft und vier offen.",
      "Kommt anschließend ein Verkäufer mit vier Stück, gehen drei an A und eines an Lea. Die Buchmenge kann also ohne Trade sinken. Allein ein kleiner werdender Balken in der Anzeige beweist keinen Handel."
    ],
    "columns": [
      {
        "title": "Nach B-Stornierung",
        "tone": "neutral",
        "points": [
          "Drei Stück von A vor Lea.",
          "Sieben auf der Stufe insgesamt."
        ]
      },
      {
        "title": "Nächste vier Verkäufe",
        "tone": "positive",
        "points": [
          "Drei gehen an A.",
          "Eine Aktie geht an Lea."
        ]
      }
    ],
    "prompt": "Wie viele Stück warten nach bestätigter B-Stornierung vor Lea?",
    "answers": [
      {
        "label": "Drei Stück.",
        "explanation": "Richtig: Die zwei Stück von B wurden gelöscht; nur A bleibt davor."
      },
      {
        "label": "Fünf Stück.",
        "explanation": "Diese Zahl galt vor der bestätigten Löschung."
      },
      {
        "label": "Null, weil eine Stornierung alle Aufträge entfernt.",
        "explanation": "Die Löschung betrifft nur B, nicht A und Lea."
      }
    ],
    "correct": 0,
    "rule": "Buchmenge kann durch Stornieren sinken, ohne dass gehandelt wird."
  },
  {
    "title": "Preisänderung kann deine alte Reihenfolge beenden",
    "summary": "Eine Änderung ist kein kostenloser Zeitsprung.",
    "paragraphs": [
      "In einem neuen Fall möchte Lea ihr ruhendes Limit von 40,00 auf 40,10 Euro ändern. Am neuen Preis liegt bereits D über zwei Aktien. Der Lernmarkt bestätigt die Änderung nach einer ausdrücklich gesetzten Regel: Lea erhält am neuen Preis eine neue Annahmezeit.",
      "Lea steht deshalb bei 40,10 hinter den zwei Aktien von D. Gegenüber den Kaufaufträgen bei 40,00 hat ihr neuer Preis Vorrang. Gegenüber D am gleichen Preis hat sie dagegen keinen älteren Zeitrang.",
      "Diese Änderungsregel gilt für unseren Lernmarkt. Ob und wie eine echte Änderung die Reihenfolge beeinflusst, hängt von Produkt und Anbieter ab. Bis die Änderung bestätigt ist, muss außerdem der bisherige Auftrag weiter berücksichtigt werden."
    ],
    "columns": [
      {
        "title": "Neuer Preis",
        "tone": "neutral",
        "points": [
          "Lea jetzt 40,10 Euro.",
          "Besser als die Stufe 40,00 Euro."
        ]
      },
      {
        "title": "Neue Zeit im Lernfall",
        "tone": "positive",
        "points": [
          "D war bei 40,10 zuerst da.",
          "Lea steht hinter dessen zwei Stück."
        ]
      }
    ],
    "prompt": "Wo steht Lea nach der bestätigten Änderung bei 40,10 Euro?",
    "answers": [
      {
        "label": "Automatisch sofort im Aktienbesitz.",
        "explanation": "Eine geänderte Preisgrenze ist noch keine Ausführung."
      },
      {
        "label": "Hinter den zwei Stück von D.",
        "explanation": "Richtig: Die ausdrücklich festgelegte neue Annahmezeit ist später als Ds."
      },
      {
        "label": "Vor D, weil ihr altes 40,00-Limit älter war.",
        "explanation": "Der Lernmarkt übernimmt die alte Zeit nicht an den neuen Preis."
      }
    ],
    "correct": 1,
    "rule": "Prüfe bei Änderungen Preis, bestätigte Zeitregel und aktiven Rest."
  },
  {
    "title": "Wartende Menge lässt sich nicht in Minuten umrechnen",
    "summary": "Ein Rang sagt nichts über den nächsten Verkäufer.",
    "paragraphs": [
      "Lea hat im ursprünglichen Hauptfall fünf Stück vor sich. Das ist eine Mengenangabe. Ob sie zehn Sekunden oder eine Stunde wartet, wissen wir nicht. Es fehlt die zukünftige Folge passender Gegenaufträge.",
      "Auch ein bisher hohes Handelsvolumen liefert keine sichere Zeit. Neue bessere Gebote können auftreten. Andere Aufträge können verschwinden. Die Nachfrage oder Verkaufsbereitschaft kann wechseln. Die Schlange ist keine Terminbestätigung.",
      "Ein Modell könnte aus vielen Daten Wahrscheinlichkeiten schätzen. Eine Schätzung wäre trotzdem keine Garantie für diese einzelne Order. In unserem Kapitel rechnen wir nur die ausdrücklich bekannten Ereignisse, keine erfundenen künftigen Füllungen."
    ],
    "columns": [
      {
        "title": "Bekannt",
        "tone": "neutral",
        "points": [
          "Fünf Stück im ursprünglichen Fall voraus.",
          "Leas Menge: vier Stück."
        ]
      },
      {
        "title": "Unbekannt",
        "tone": "positive",
        "points": [
          "Nächste passende Gegenaufträge.",
          "Dauer und vollständige Füllung."
        ]
      }
    ],
    "prompt": "Was folgt sicher aus fünf Stück vor Lea?",
    "answers": [
      {
        "label": "Eine vollständige Ausführung noch heute.",
        "explanation": "Dazu fehlen zukünftige Gegenaufträge und weitere Bedingungen."
      },
      {
        "label": "Eine Ausführung in genau fünf Minuten.",
        "explanation": "Stückzahlen sind keine Zeitangaben."
      },
      {
        "label": "Nur die bekannte Wartemenge unter den genannten Regeln.",
        "explanation": "Richtig: Die Menge ist keine Zusage für eine Wartezeit."
      }
    ],
    "correct": 2,
    "rule": "Eine Wartemenge ist keine Wartezeit."
  },
  {
    "title": "Der Chart kennt deine Warteschlange nicht",
    "summary": "Eine Kerze enthält keine persönliche Zuteilung.",
    "paragraphs": [
      "Leas Kauflimit liegt bei 40,00 Euro. Eine Kerze zeigt ein Tief von 40,00 Euro. Das bedeutet nach ihrer Datenquelle, dass ein berücksichtigter Trade diesen Preis erreicht hat. Es zeigt nicht, wem die gehandelte Menge zugeteilt wurde.",
      "Im ersten Hauptfall wurden vier Stück bei 40,00 gehandelt und Lea erhielt null. Auch Handelsplatz, Zeit der Orderannahme und Quelle des Charts müssen übereinstimmen, bevor du einen Fall vergleichen kannst. Ein Trade vor Leas Order zählt nicht als verpasste eigene Füllung.",
      "Die sichere Bestätigung ihres Kaufs kommt aus dem Ausführungsbericht. Eine Kerze kann den Kontext ergänzen. Sie ersetzt weder die aktive Auftragskennung noch den tatsächlichen Füllstatus."
    ],
    "columns": [
      {
        "title": "Chart",
        "tone": "neutral",
        "points": [
          "Ein erfasster Trade bei 40,00 Euro.",
          "Keine persönliche Zuteilung."
        ]
      },
      {
        "title": "Eigene Order",
        "tone": "positive",
        "points": [
          "Annahmezeit und Handelsweg beachten.",
          "Ausführungsbericht entscheidet über den Kauf."
        ]
      }
    ],
    "prompt": "Was bestätigt Leas eigene Ausführung?",
    "answers": [
      {
        "label": "Der zu ihrer Order gehörende Ausführungsbericht.",
        "explanation": "Richtig: Ein Preis in einer Kerze allein ordnet Lea keine Menge zu."
      },
      {
        "label": "Jede Kerze mit Tief gleich ihrem Limit.",
        "explanation": "Andere früher wartende Aufträge können die Menge erhalten haben."
      },
      {
        "label": "Ein Trade am selben Preis auf irgendeinem anderen Markt.",
        "explanation": "Andere Handelswege belegen keine Ausführung ihrer Order."
      }
    ],
    "correct": 0,
    "rule": "Ein berührter Chartpreis ist kein persönlicher Ausführungsbericht."
  },
  {
    "title": "Gesamtmengen verbergen einzelne Reihenfolgen",
    "summary": "Ein Sammelbalken zeigt keine vollständige Warteliste.",
    "paragraphs": [
      "Die App meldet neun Kaufstücke bei 40,00 Euro. Ohne weitere Angaben wissen wir nicht, wie sich diese Menge auf Aufträge verteilt. Es könnten drei große oder viele kleine Aufträge sein. Auch ihre Annahmezeiten fehlen.",
      "Im Hauptfall kennen wir die Einzelaufträge ausdrücklich: A drei, B zwei, Lea vier. Nur deshalb können wir fünf vor Lea berechnen. Eine Anzeige mit derselben Gesamtzahl neun würde diesen persönlichen Rang allein nicht verraten.",
      "Zusätzlich können reale Daten nur einen Ausschnitt oder sichtbare Mengen zeigen. Versteckte Mengen und besondere Zuteilungsregeln müssen nach Handelsplatzbedingungen berücksichtigt werden. Eine genaue eigene Position in der Schlange ist daher nicht aus jeder Tiefenanzeige ableitbar."
    ],
    "columns": [
      {
        "title": "Aggregierte Anzeige",
        "tone": "neutral",
        "points": [
          "Neun Stück bei 40,00 Euro.",
          "Einzelne Aufträge und Zeiten fehlen."
        ]
      },
      {
        "title": "Unser vollständiger Lernfall",
        "tone": "positive",
        "points": [
          "A drei, B zwei, Lea vier.",
          "Fünf Stück vor Lea berechenbar."
        ]
      }
    ],
    "prompt": "Reichen neun Stück Gesamtmenge allein für Leas genauen Rang?",
    "answers": [
      {
        "label": "Ja, Lea erhält automatisch ein Drittel.",
        "explanation": "Aus der Gesamtmenge folgt keine solche Zuteilungsregel."
      },
      {
        "label": "Nein, dafür fehlen Einzelreihenfolge und eigene Einordnung.",
        "explanation": "Richtig: Eine Summe verrät nicht, welcher Anteil vor Lea wartet."
      },
      {
        "label": "Ja, alle neun stehen vor ihr.",
        "explanation": "Die Summe kann Lea selbst enthalten."
      }
    ],
    "correct": 1,
    "rule": "Eine Preisstufensumme ist keine persönliche Warteliste."
  },
  {
    "title": "Andere Zuteilungsregeln führen zu anderen Mengen",
    "summary": "Preis-Zeit ist nicht die einzige mögliche Regel.",
    "paragraphs": [
      "Ein ausdrücklich anderer Lernmarkt verteilt bei gleichem Preis proportional zur offenen Menge. Proportional heißt hier: Wer die größere offene Menge hat, bekommt den entsprechend größeren Anteil. Unsere Beispielsummen ergeben ganze Stücke, daher ist keine Rundungsregel nötig.",
      "A hat sechs Kaufstücke, Lea hat vier. Ein Verkäufer liefert fünf Stück. Insgesamt warten zehn. A erhält 5 × 6 / 10 = 3 Aktien. Lea erhält 5 × 4 / 10 = 2 Aktien. Die frühere Annahme von A gibt ihm hier nicht alle fünf.",
      "Dieser Fall ist unabhängig von unserer Preis-Zeit-Schlange. Echte proportionale Systeme können weitere Vorrang-, Mindestmengen- oder Rundungsregeln verwenden. Hier üben wir nur, warum die konkrete Zuteilungsregel vor der Mengenrechnung feststehen muss."
    ],
    "columns": [
      {
        "title": "Anderer Lernmarkt",
        "tone": "neutral",
        "points": [
          "A sechs Stück, Lea vier.",
          "Zuteilung proportional, nicht nach Zeit."
        ]
      },
      {
        "title": "Fünf verkaufte Stück",
        "tone": "positive",
        "points": [
          "A erhält drei.",
          "Lea erhält zwei."
        ]
      }
    ],
    "prompt": "Wie viele Aktien erhält Lea nach der proportionalen Übungsregel?",
    "answers": [
      {
        "label": "Vier, weil Lea vier wünscht.",
        "explanation": "Ihr Wunsch ist größer als ihre proportionale Zuteilung."
      },
      {
        "label": "Null, weil A früher ankam.",
        "explanation": "Dieser getrennte Fall verwendet ausdrücklich keine Zeitpriorität."
      },
      {
        "label": "Zwei Aktien.",
        "explanation": "Richtig: Fünf verfügbare Stück mal Leas Anteil vier von zehn."
      }
    ],
    "correct": 2,
    "rule": "Erst die Zuteilungsregel prüfen, dann die eigene Menge rechnen."
  },
  {
    "title": "Liquidität anbieten ist kein sicherer Gewinn",
    "summary": "Ein wartender Auftrag übernimmt Preisrisiko.",
    "paragraphs": [
      "Leas ruhendes Kaufangebot gibt anderen eine Gelegenheit zu verkaufen. Dadurch bietet es Liquidität an. Liquidität bedeutet hier die Möglichkeit, ein Geschäft abzuschließen. Ein sofort zugreifendes Limit nimmt dagegen ein schon bestehendes Angebot an.",
      "Nach einem Kauf zu 40,00 kann der nächste verfügbare Verkaufspreis für Lea nur 39,70 Euro betragen. Kauft sie zwei und verkauft sie im getrennten Lernfall sofort zu 39,70, entsteht vor Gebühren ein Verlust von 0,60 Euro.",
      "Ein günstiger Kauf gegenüber einem früheren Ask schützt nicht vor späteren Änderungen. Auch Preisgrenze und Warteschlangenrang erzeugen keinen garantierten Vorteil. Ein Limit steuert die Ausführung, nicht den zukünftigen Wert der Aktie."
    ],
    "columns": [
      {
        "title": "Ruhendes Limit",
        "tone": "neutral",
        "points": [
          "Andere dürfen das Angebot annehmen.",
          "Lea bietet eine Handelsmöglichkeit."
        ]
      },
      {
        "title": "Späterer Verkauf",
        "tone": "positive",
        "points": [
          "Zwei Käufe zu 40,00; Verkäufe zu 39,70 Euro.",
          "Ergebnis: minus 0,60 Euro vor Gebühren."
        ]
      }
    ],
    "prompt": "Wie lautet das Ergebnis dieses getrennten Zwei-Aktien-Falls?",
    "answers": [
      {
        "label": "Minus 0,60 Euro vor Gebühren.",
        "explanation": "Richtig: Zwei Stück mal 0,30 Euro schlechterem Verkaufspreis."
      },
      {
        "label": "Garantiert Gewinn, weil Lea ein Limit nutzte.",
        "explanation": "Eine Preisgrenze garantiert keinen späteren Erlös."
      },
      {
        "label": "Null, weil der Kauf am Limit stattfand.",
        "explanation": "Der spätere verfügbare Verkaufspreis kann niedriger liegen."
      }
    ],
    "correct": 0,
    "rule": "Ein Limit kontrolliert die Preisgrenze und keinen späteren Gewinn."
  },
  {
    "title": "Die richtige Preisstufe muss erlaubt sein",
    "summary": "Ein Limit kann wegen ungültiger Eingaben abgelehnt werden.",
    "paragraphs": [
      "Unser Lernmarkt erlaubt nur Preisschritte von 0,10 Euro. Ein Preisschritt wird auch Tick genannt. Daher sind 40,00 und 40,10 zulässig, 40,03 dagegen nicht. Das ist eine ausdrücklich erfundene Vorgabe.",
      "Lea sendet ein Limit von 40,03. Der Lernmarkt lehnt den Auftrag ab, statt ihn still auf 40,00 oder 40,10 zu ändern. Lea liest diese Rückmeldung. Aus dem eingegebenen Wert entsteht keine wartende Order.",
      "Andere Produkte können andere Schritte und Anbieter andere Eingabehilfen haben. Weder Schrittweite noch Rundung sind allgemeingültig. Prüfe den bestätigten Auftrag und den Ablehnungsgrund, statt nur das Eingabefeld anzusehen."
    ],
    "columns": [
      {
        "title": "Zulässig im Lernmarkt",
        "tone": "neutral",
        "points": [
          "40,00 und 40,10 Euro.",
          "Preisschritt: 0,10 Euro."
        ]
      },
      {
        "title": "Nicht zulässig",
        "tone": "positive",
        "points": [
          "40,03 Euro.",
          "Auftrag wird ausdrücklich abgelehnt."
        ]
      }
    ],
    "prompt": "Was passiert im genannten Lernmarkt mit 40,03 Euro?",
    "answers": [
      {
        "label": "Jeder Anbieter rundet ihn immer nach oben.",
        "explanation": "Die Lernregel lehnt ab; andere Anbieterregeln dürfen nicht angenommen werden."
      },
      {
        "label": "Der Auftrag wird wegen des ungültigen Preisschritts abgelehnt.",
        "explanation": "Richtig: Genau diese Ablehnungsregel ist für den Fall festgelegt."
      },
      {
        "label": "Er wartet automatisch zu 40,03.",
        "explanation": "Diese Stufe ist unter der genannten Regel nicht zulässig."
      }
    ],
    "correct": 1,
    "rule": "Preisgrenze und erlaubter Preisschritt müssen zusammenpassen."
  },
  {
    "title": "Den Hauptrest bestätigt stornieren",
    "summary": "Gekaufte Aktien bleiben trotz Restlöschung bestehen.",
    "paragraphs": [
      "Wir kehren zur tatsächlichen Hauptfolge zurück: Der erste Verkäufer lieferte vier Stück an A und B. Der zweite lieferte eines an B und zwei an Lea. Lea hat deshalb zwei Aktien gekauft und noch zwei offen bei 40,00 Euro.",
      "Lea fragt eine Stornierung an. Im Hauptfall findet bis zur Bestätigung kein weiterer Handel statt. Das System bestätigt die Löschung der beiden Reststücke. Die zwei zuvor gekauften Aktien bleiben bestehen.",
      "Der endgültige Status lautet: zwei ausgeführt, zwei Reststücke storniert, null offen. Ohne die Annahme „kein weiterer Handel“ könnte die Menge während der Verarbeitung anders werden. Eine Stornierungsanfrage allein reicht daher nicht für diesen Abschlussbericht."
    ],
    "columns": [
      {
        "title": "Vor der Stornierung",
        "tone": "neutral",
        "points": [
          "Zwei Aktien gekauft für 80,00 Euro.",
          "Zwei weitere Stück offen."
        ]
      },
      {
        "title": "Nach Bestätigung",
        "tone": "positive",
        "points": [
          "Zwei Reststücke gelöscht, null offen.",
          "Die zwei gekauften Aktien bleiben."
        ]
      }
    ],
    "prompt": "Wie viele Aktien besitzt Lea nach der bestätigten Reststornierung?",
    "answers": [
      {
        "label": "Vier, weil die Wunschmenge bei vier lag.",
        "explanation": "Zwei der gewünschten Stücke wurden nie gekauft."
      },
      {
        "label": "Keine, weil jede Stornierung alle Trades rückgängig macht.",
        "explanation": "Bereits abgeschlossene Ausführungen werden dadurch nicht aufgehoben."
      },
      {
        "label": "Zwei Aktien.",
        "explanation": "Richtig: Die Stornierung entfernt nur die noch offenen zwei Stück."
      }
    ],
    "correct": 2,
    "rule": "Prüfe bestätigte Ausführungen und bestätigte Restlöschung getrennt."
  },
  {
    "title": "Den Limitfall mit einem vollständigen Bericht abschließen",
    "summary": "Preisgrenze, Warteschlange und Kosten verbinden.",
    "paragraphs": [
      "Leas Hauptauftrag wollte vier Vela-Aktien mit Kauflimit 40,00 Euro. A mit drei und B mit zwei Stück warteten früher am gleichen Preis. Die zwei Verkäufer brachten zusammen sieben Aktien. Fünf gingen an A und B, zwei an Lea.",
      "Lea zahlte für ihre zwei Ausführungen insgesamt 80,00 Euro. Eine gesamte Kaufgebühr von 0,60 Euro kommt hinzu; weitere Kosten gibt es nicht. Die Kontobelastung ist 80,60 Euro. Ihre zwei Reststücke sind bestätigt storniert, daher bleibt kein offener Kaufrest.",
      "Der Bericht nennt zwei gekaufte Aktien, die erfüllte Preisgrenze und die bestätigte Restlöschung. Die Gesamtmenge von sieben verkauften Aktien darf nicht als eigene Füllmenge bezeichnet werden. Der Preis 40,00 im Chart erklärt ihren Kauf erst zusammen mit Reihenfolge, Menge und eigener Ausführungsbestätigung."
    ],
    "columns": [
      {
        "title": "Eigene Ausführung",
        "tone": "neutral",
        "points": [
          "Zwei Aktien × 40,00 Euro = 80,00 Euro.",
          "Fünf andere Stück gingen an frühere Orders."
        ]
      },
      {
        "title": "Abschluss",
        "tone": "positive",
        "points": [
          "80,00 + 0,60 = 80,60 Euro Belastung.",
          "Zwei Aktien im Bestand, null offen."
        ]
      }
    ],
    "prompt": "Welcher Abschlussbericht passt zum Hauptfall?",
    "answers": [
      {
        "label": "Zwei Aktien gekauft, null offen, 80,60 Euro belastet.",
        "explanation": "Richtig: Eigene Ausführung und Gebühr werden getrennt von fremden Zuteilungen gezählt."
      },
      {
        "label": "Sieben Aktien gekauft, weil insgesamt sieben verkauft wurden.",
        "explanation": "Fünf Aktien gingen an andere Kaufaufträge."
      },
      {
        "label": "Vier Aktien gekauft zu genau 160,00 Euro.",
        "explanation": "Das Limit garantiert keine volle Ausführung der ursprünglichen Wunschmenge."
      }
    ],
    "correct": 0,
    "rule": "Ein Limitbericht verbindet Grenze, eigene Zuteilung, Kosten und bestätigten Reststatus."
  }
];
export const ordersChapterThreeLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-03.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 3 · Limit-Orders und Warteschlangen',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 3', title: draft.title,
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
