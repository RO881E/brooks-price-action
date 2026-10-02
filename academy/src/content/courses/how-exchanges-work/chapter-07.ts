import type { Lesson } from '../../types';

// Eigenständige Liquiditätsfälle; Referenzen, verfügbare Angebote und Kosten gelten nur wie im Beispiel angegeben.
const drafts = [
  {
    "title": "Liquidität heißt: passende Geschäfte ermöglichen",
    "summary": "Handelbarkeit hängt von Menge, Preis und Zeit ab.",
    "paragraphs": [
      "Du möchtest etwas kaufen. Dafür brauchst du jemanden, der dir die gewünschte Menge zu passenden Bedingungen verkauft. Beim Verkaufen brauchst du entsprechend Käufer. Liquidität meint hier, wie gut dieser Handel möglich ist. Es geht nicht einfach darum, ob eine Anlage wertvoll ist.",
      "Ein seltener Gegenstand kann viel wert sein. Trotzdem findest du vielleicht nicht sofort einen Käufer zum gewünschten Preis. Ähnlich kann ein Wertpapier schwer verkäuflich sein. Ein hoher geschätzter Wert stellt noch kein erreichbares Kaufangebot bereit.",
      "Wir prüfen in diesem Kapitel Preis, Menge, Zeit und Zugang gemeinsam. Unsere Beispiele sind erfunden. Sie verwenden gleiche Einheiten mit Europreisen und festgelegten Angebotslagen. Gebühren fehlen, wenn nichts anderes dasteht. Wir erklären Handelbarkeit, ohne daraus eine sichere Kursrichtung abzuleiten."
    ],
    "columns": [
      {
        "title": "Wert und Wunsch",
        "tone": "neutral",
        "points": [
          "Eine Anlage kann wertvoll erscheinen.",
          "Du möchtest eine bestimmte Menge handeln."
        ]
      },
      {
        "title": "Tatsächliche Handelbarkeit",
        "tone": "positive",
        "points": [
          "Eine passende Gegenseite muss erreichbar sein.",
          "Preis, Menge und Zeitpunkt gehören zusammen."
        ]
      }
    ],
    "prompt": "Beweist ein hoher geschätzter Wert, dass du sofort zu diesem Wert verkaufen kannst?",
    "answers": [
      {
        "label": "Nein, dafür brauchst du ein erreichbares passendes Kaufangebot.",
        "explanation": "Richtig: Eine Bewertung ersetzt keine handelbare Gegenseite."
      },
      {
        "label": "Ja, der geschätzte Wert verpflichtet jeden Käufer.",
        "explanation": "Eine Einschätzung ist keine Verpflichtung anderer Marktteilnehmer."
      },
      {
        "label": "Ja, der letzte Preis stellt immer unbegrenzte Menge bereit.",
        "explanation": "Ein vergangener Handel bietet keine unbegrenzte neue Menge."
      }
    ],
    "correct": 0,
    "rule": "Liquidität für ein konkretes Geschäft prüfen, nicht nur für einen Produktnamen."
  },
  {
    "title": "Vier Fragen statt einer einzelnen Zahl",
    "summary": "Spread, Tiefe, Tempo und neue Angebote wirken zusammen.",
    "paragraphs": [
      "Für Handelbarkeit helfen vier Fragen. Wie weit liegen Kauf- und Verkaufsangebot auseinander? Wie viel Menge gibt es zu passenden Preisen? Wie schnell kann ein Geschäft zustande kommen? Und wie reagiert das Angebot, nachdem Menge genutzt wurde?",
      "Ein Buch kann einen kleinen Spread haben, aber nur eine Einheit am besten Preis. Ein anderes kann mehr Menge bieten, dafür mit größerem Spread. Nach einem Kauf können neue Angebote hinzukommen. Sie können aber auch ausbleiben. Keine einzelne Eigenschaft erklärt jeden Auftrag.",
      "Besonders wichtig ist deine gewünschte Menge und Zeit. Eine Person will nur eine Einheit. Eine andere braucht sofort 100. Beide können denselben Markt unterschiedlich gut handeln. Schreibe deshalb auf, welche Frage deine Zahl beantwortet und welche Angaben noch fehlen."
    ],
    "columns": [
      {
        "title": "Die vier Prüfungen",
        "tone": "neutral",
        "points": [
          "Abstand der besten Preise und verfügbare Tiefe.",
          "Tempo des Handels und Verhalten neuer Angebote."
        ]
      },
      {
        "title": "Der konkrete Auftrag",
        "tone": "positive",
        "points": [
          "Welche Menge und welche Zeit sind gemeint?",
          "Welche Bedingungen und welcher Zugang gelten?"
        ]
      }
    ],
    "prompt": "Warum reicht der Spread allein nicht als vollständiger Liquiditätscheck?",
    "answers": [
      {
        "label": "Weil jede größere Menge automatisch zum besten Preis handelbar ist.",
        "explanation": "Am besten Preis kann nur eine kleine Menge liegen."
      },
      {
        "label": "Weil er weder die ganze Menge noch Tempo und spätere Angebote erklärt.",
        "explanation": "Richtig: Der Preisabstand ist nur ein Teil der Handelbarkeit."
      },
      {
        "label": "Weil ein Spread nie aus Angeboten berechnet wird.",
        "explanation": "Der Spread ist gerade die Differenz der besten Angebote."
      }
    ],
    "correct": 1,
    "rule": "Mehrere Eigenschaften prüfen, bevor du einen Markt leicht handelbar nennst."
  },
  {
    "title": "Ein Euro Spread kann relativ viel oder wenig sein",
    "summary": "Für Prozentvergleiche brauchst du eine genannte Bezugsgröße.",
    "paragraphs": [
      "Der Spread ist der beste Ask minus dem besten Bid. Du kannst ihn als Geldbetrag nennen. Für einen Vergleich verschiedener Preisgrößen kann auch ein Prozentwert helfen. Dafür musst du sagen, worauf du den Betrag beziehst. Wir verwenden hier den Mittelwert von Bid und Ask.",
      "Bei Produkt A liegen Bid und Ask bei 99,50 und 100,50. Der Spread beträgt 1 Euro; der Mittelwert beträgt 100. Also ist 1 / 100 = 1 %. Bei Produkt B sind es 999,50 und 1.000,50. Der Spread ist ebenfalls 1 Euro. Bezogen auf den Mittelwert 1.000 sind es aber 0,1 %.",
      "Diese Prozentrechnung macht die Produkte nicht automatisch gleich. Mengen, Rechte, Einheiten und Risiken können verschieden sein. Auch der Mittelwert ist kein festes Angebot. Die Rechnung erklärt nur den relativen Abstand unter der genannten Bezugsgröße, nicht den gesamten Handelsaufwand."
    ],
    "columns": [
      {
        "title": "Produkt A",
        "tone": "neutral",
        "points": [
          "Bid 99,50; Ask 100,50; Mitte 100.",
          "Spread 1 Euro; 1 / 100 = 1 %."
        ]
      },
      {
        "title": "Produkt B",
        "tone": "positive",
        "points": [
          "Bid 999,50; Ask 1.000,50; Mitte 1.000.",
          "Spread 1 Euro; 1 / 1.000 = 0,1 %."
        ]
      }
    ],
    "prompt": "Ist ein Spread von einem Euro bei beiden Produkten derselbe Prozentanteil des Mittelwerts?",
    "answers": [
      {
        "label": "Ja, derselbe Eurobetrag bedeutet immer denselben Prozentwert.",
        "explanation": "Ein Prozentwert hängt von seiner Bezugsgröße ab."
      },
      {
        "label": "Ja, beide Mittelwerte sind dadurch sichere Kaufangebote.",
        "explanation": "Die berechnete Mitte ist nicht automatisch handelbar."
      },
      {
        "label": "Nein, bei A sind es 1 % und bei B 0,1 %.",
        "explanation": "Richtig: Derselbe Eurobetrag wird auf unterschiedliche Mittelwerte bezogen."
      }
    ],
    "correct": 2,
    "rule": "Bei einem relativen Spread immer die Bezugsgröße nennen."
  },
  {
    "title": "Sofort kaufen und zurückverkaufen: die Spanne rechnen",
    "summary": "Ein unveränderter Markt kann trotzdem einen Preisnachteil erzeugen.",
    "paragraphs": [
      "Im Beispiel liegt der Bid bei 99 und der Ask bei 101. Auf beiden Seiten ist genug Menge verfügbar. Du kaufst vier Einheiten sofort und verkaufst sie sofort zurück. Wir nehmen unveränderte Angebote an und lassen Gebühren weg.",
      "Der Kauf kostet 4 × 101 = 404 Euro. Der Verkauf bringt 4 × 99 = 396 Euro. Die Differenz ist 396 − 404 = −8 Euro. Je Einheit sind es 2 Euro weniger. Der Spread von 2 wirkt hier auf alle vier Einheiten.",
      "Die Rechnung braucht keinen Kurswechsel zwischen den beiden Geschäften. Sie zeigt den Preisunterschied der zwei Angebotsseiten. In echten Fällen können sich die Angebote verändern. Gebühren kommen möglicherweise hinzu. Der Spread ist keine feste Rechnung für jeden späteren Handel und kein garantierter Gewinn der Gegenpartei."
    ],
    "columns": [
      {
        "title": "Kauf und Rückverkauf",
        "tone": "neutral",
        "points": [
          "Kauf: 4 × 101 = 404 Euro.",
          "Verkauf: 4 × 99 = 396 Euro."
        ]
      },
      {
        "title": "Ergebnis ohne Gebühren",
        "tone": "positive",
        "points": [
          "396 − 404 = −8 Euro.",
          "Preisnachteil: 2 Euro je Einheit."
        ]
      }
    ],
    "prompt": "Wie groß ist die Differenz dieses sofortigen Rückverkaufs?",
    "answers": [
      {
        "label": "−8 Euro vor Gebühren.",
        "explanation": "Richtig: Vier Einheiten verlieren jeweils zwei Euro durch die unveränderte Spanne."
      },
      {
        "label": "0 Euro, weil sich die Angebote nicht verändert haben.",
        "explanation": "Kauf und Verkauf nutzen unterschiedliche Seiten."
      },
      {
        "label": "−2 Euro insgesamt, unabhängig von der Menge.",
        "explanation": "Zwei Euro gelten je Einheit; hier werden vier gehandelt."
      }
    ],
    "correct": 0,
    "rule": "Bei einem Spread-Beispiel Menge und beide Handelsseiten mitrechnen."
  },
  {
    "title": "Ein Vergleichspreis ist keine zusätzliche Rechnung",
    "summary": "Preisnachteil und Spread nicht doppelt zählen.",
    "paragraphs": [
      "Ein Referenzpreis ist ein ausdrücklich genannter Vergleichspreis. Wir wählen die Mitte von Bid 99 und Ask 101: also 100. Der Käufer zahlt 101 und liegt einen Euro über dieser Mitte. Der Verkäufer erhält 99 und liegt einen Euro darunter.",
      "Für vier Einheiten beträgt der Unterschied zur Mitte beim Kauf 4 Euro. Beim Verkauf sind es ebenfalls 4 Euro. Zusammen erklären sie die 8 Euro aus dem sofortigen Rückverkauf. Sie sind keine zusätzlichen Kosten neben diesen bereits gerechneten 8 Euro.",
      "Wenn du echte Kauf- und Verkaufspreise verwendest, steckt ihre Differenz schon im Ergebnis. Du darfst nicht danach noch einmal den gleichen Spread abziehen. Eine getrennte Gebühr ist dagegen ein weiterer Betrag. Beschrifte deshalb Vergleichswerte, tatsächliche Preise und zusätzliche Rechnungen klar."
    ],
    "columns": [
      {
        "title": "Vergleich zur Mitte 100",
        "tone": "neutral",
        "points": [
          "Kauf zu 101: 4 Euro über der Mitte.",
          "Verkauf zu 99: 4 Euro unter der Mitte."
        ]
      },
      {
        "title": "Derselbe Preisunterschied",
        "tone": "positive",
        "points": [
          "4 + 4 = 8 Euro aus dem Rückverkauf.",
          "Nicht zusätzlich noch einmal 8 Euro Spread abziehen."
        ]
      }
    ],
    "prompt": "Darfst du von den bereits gerechneten −8 Euro noch einmal denselben Spread-Nachteil abziehen?",
    "answers": [
      {
        "label": "Ja, ein Spread wird immer zweimal extra berechnet.",
        "explanation": "Die zwei Seiten sind schon in Kauf- und Verkaufspreis berücksichtigt."
      },
      {
        "label": "Nein, das würde denselben Preisunterschied doppelt zählen.",
        "explanation": "Richtig: Die echten Ausführungspreise enthalten diesen Unterschied bereits."
      },
      {
        "label": "Ja, jeder Referenzpreis erzeugt eine weitere Gebühr.",
        "explanation": "Ein Vergleichspreis stellt keine zusätzliche Rechnung aus."
      }
    ],
    "correct": 1,
    "rule": "Ein Preisvergleich erklärt Kosten; er erzeugt keine zweite identische Kostenposition."
  },
  {
    "title": "Für eine Einheit günstig, für sechs vielleicht teurer",
    "summary": "Die Tiefe kann einen Platzvergleich verändern.",
    "paragraphs": [
      "Buch A zeigt Bid 99,50 und Ask 100. Am Ask liegen zwei Einheiten; acht weitere liegen bei 102. Buch B zeigt Bid 99,50 und Ask 100,50. Dort liegen zehn Einheiten. Die Angebote sind erreichbar und bleiben im Fall unverändert. Gebühren fehlen.",
      "Für eine Einheit ist A mit 100 günstiger als B mit 100,50. Für sechs kostet A dagegen 2 × 100 + 4 × 102 = 608 Euro. Der Durchschnitt beträgt etwa 101,33. Bei B kosten sechs 6 × 100,50 = 603 Euro. Dort ist der Durchschnitt 100,50.",
      "A hat hier den kleineren Spread und den besseren ersten Kaufpreis. Trotzdem ist B für alle sechs günstiger. Das Ergebnis hängt von der Menge ab. Ein echter Vergleich braucht zusätzlich Kosten und tatsächlich mögliche Ausführungen. Die beste erste Zeile erklärt nicht den ganzen Auftrag."
    ],
    "columns": [
      {
        "title": "Buch A",
        "tone": "neutral",
        "points": [
          "Ask 100: 2; nächster Ask 102: 8.",
          "Kauf von 6: 608 Euro; Durchschnitt etwa 101,33."
        ]
      },
      {
        "title": "Buch B",
        "tone": "positive",
        "points": [
          "Ask 100,50: 10 Einheiten.",
          "Kauf von 6: 603 Euro; Durchschnitt 100,50."
        ]
      }
    ],
    "prompt": "Wo ist der vollständige Kauf von sechs im gegebenen Fall günstiger?",
    "answers": [
      {
        "label": "Bei A, weil dessen erster Ask immer den ganzen Auftrag bestimmt.",
        "explanation": "Die erste Stufe bietet nur zwei Einheiten."
      },
      {
        "label": "An beiden Orten gleich, weil der Bid gleich ist.",
        "explanation": "Der Käufer nutzt die Verkaufsangebote, nicht den Bid."
      },
      {
        "label": "Bei B mit 603 Euro vor Gebühren.",
        "explanation": "Richtig: Bei A muss ein Teil der Menge zum höheren Preis 102 gekauft werden."
      }
    ],
    "correct": 2,
    "rule": "Liquiditätsvergleiche für die gewünschte Menge rechnen."
  },
  {
    "title": "Gute Kaufmöglichkeiten sind nicht automatisch gute Verkaufsmöglichkeiten",
    "summary": "Die zwei Seiten können unterschiedlich viel Tiefe haben.",
    "paragraphs": [
      "Liquidität hat eine Richtung: Willst du kaufen oder verkaufen? Für deinen Kauf zählt die passende Verkaufsseite. Für deinen Verkauf zählt die Kaufseite. Viel Menge auf einer Seite verspricht nicht dieselbe Menge auf der anderen.",
      "Im Beispiel liegen zehn Verkaufseinheiten bei 101. Auf der Kaufseite liegen nur zwei bei 99. Ein sofortiger Kauf von acht könnte bei unveränderten Angeboten vollständig zu 101 stattfinden. Für einen sofortigen Verkauf von acht reicht die bekannte Kaufstufe dagegen nicht.",
      "Weitere Kaufangebote könnten tiefer liegen oder im Ausschnitt fehlen. Deshalb kennen wir den ganzen Verkaufspreis noch nicht. Nenne die Seite bei jeder Aussage über Tiefe. Auch ein günstiger Einstieg sagt allein nicht, wie später ein Ausstieg in derselben Menge möglich sein wird."
    ],
    "columns": [
      {
        "title": "Bekannte Verkaufsseite",
        "tone": "neutral",
        "points": [
          "Ask 101: 10 Einheiten.",
          "Kauf von 8 passt auf diese Stufe."
        ]
      },
      {
        "title": "Bekannte Kaufseite",
        "tone": "positive",
        "points": [
          "Bid 99: 2 Einheiten.",
          "Für Verkauf von 8 fehlen weitere Angaben."
        ]
      }
    ],
    "prompt": "Beweisen zehn Einheiten am Ask einen sofortigen Verkauf von acht zum Bid?",
    "answers": [
      {
        "label": "Nein, am bekannten Bid liegen nur zwei Einheiten.",
        "explanation": "Richtig: Die Tiefe der anderen Seite reicht als Beleg nicht aus."
      },
      {
        "label": "Ja, beide Seiten müssen immer dieselbe Menge zeigen.",
        "explanation": "Wartende Kauf- und Verkaufswünsche können verschieden groß sein."
      },
      {
        "label": "Ja, ein guter Kaufpreis garantiert jeden späteren Ausstieg.",
        "explanation": "Spätere Angebote und die passende Seite müssen neu geprüft werden."
      }
    ],
    "correct": 0,
    "rule": "Handelbarkeit immer für Kauf oder Verkauf benennen."
  },
  {
    "title": "Sichtbare Liquidität muss auch erreichbar sein",
    "summary": "Ein fremder Preis ist keine automatische Handelsmöglichkeit.",
    "paragraphs": [
      "Ein Angebot hilft dir nur, wenn dein Auftrag es erreichen kann. Dein Zugang kann auf bestimmte Plätze oder Produkte begrenzt sein. Außerdem muss das Angebot noch gelten, wenn der Auftrag ankommt. Sichtbar und tatsächlich nutzbar sind deshalb verschiedene Angaben.",
      "Auf einer fremden Website liegen zehn Einheiten zu 100. Dein Broker erreicht diesen Platz im Fall nicht. Am erreichbaren Platz gibt es fünf zu 101. Für deinen Kauf von fünf ist hier nur der zweite Weg bekannt. Die zehn günstigeren Einheiten schaffen keinen Zugang.",
      "Prüfe deshalb Produkt, Platz, Datenzeit und Auftragsweg zusammen. Auch eine tiefere Datensicht erweitert nicht automatisch deinen Handelszugang. Kosten können ebenfalls vom Weg abhängen. Ein Vergleich ohne diese Bedingungen beschreibt zunächst Anzeigen, nicht sichere persönliche Ausführungen."
    ],
    "columns": [
      {
        "title": "Günstige fremde Anzeige",
        "tone": "neutral",
        "points": [
          "10 Einheiten zu 100.",
          "Für diesen Auftrag nicht erreichbar."
        ]
      },
      {
        "title": "Bekannter erreichbarer Weg",
        "tone": "positive",
        "points": [
          "5 Einheiten zu 101.",
          "Der tatsächliche Abschluss braucht eine Bestätigung."
        ]
      }
    ],
    "prompt": "Welche Menge darfst du allein wegen der fremden Anzeige als sicher erreichbar behandeln?",
    "answers": [
      {
        "label": "Jede Menge, sobald du ein größeres Datenpaket kaufst.",
        "explanation": "Datentiefe und Handelszugang sind unterschiedliche Leistungen."
      },
      {
        "label": "Keine; der notwendige Zugang fehlt im Fall.",
        "explanation": "Richtig: Sichtbarkeit ersetzt den Auftragsweg nicht."
      },
      {
        "label": "Die ganzen zehn Einheiten.",
        "explanation": "Der Broker erreicht diesen Platz ausdrücklich nicht."
      }
    ],
    "correct": 1,
    "rule": "Nur erreichbare, gültige Angebote als mögliche Ausführung behandeln."
  },
  {
    "title": "Warten kann den Preis verbessern, aber den Handel verhindern",
    "summary": "Sofortigkeit und Preisgrenze können sich gegenüberstehen.",
    "paragraphs": [
      "Du kannst ein verfügbares Angebot akzeptieren und schneller handeln. Oder du stellst einen eigenen Preis ein und wartest. Der günstigere Wunschpreis ist aber noch kein abgeschlossener Kauf. Sofortigkeit meint hier die Möglichkeit, ein Geschäft zeitnah umzusetzen.",
      "Bei Bid 99 und Ask 101 möchtest du eine Einheit. Ein sofortiger Kauf könnte unter unveränderten Bedingungen zu 101 erfolgen. Stellst du stattdessen ein Kaufangebot zu 100 ein, wartest du zunächst. Im Beispiel kommt kein passender Verkäufer, und dein Auftrag bleibt unausgeführt.",
      "Der wartende Auftrag hat damit nichts für 100 gekauft. Vielleicht ergeben sich später andere Angebote; vielleicht wird der Auftrag beendet. Ein verpasster Handel kann einen entgangenen Vorteil oder auch einen vermiedenen Verlust bedeuten. Der niedrigere Wunschpreis ist deshalb nicht automatisch die bessere gesamte Entscheidung."
    ],
    "columns": [
      {
        "title": "Sofortiges Annehmen",
        "tone": "neutral",
        "points": [
          "Eine Einheit am Ask 101 verfügbar.",
          "Die Ausführung hängt von gültigen Bedingungen ab."
        ]
      },
      {
        "title": "Warten mit Preisgrenze 100",
        "tone": "positive",
        "points": [
          "Kein passender Verkäufer im Beispiel.",
          "Kein Kauf und kein tatsächlicher Kaufpreis 100."
        ]
      }
    ],
    "prompt": "Was ist im beschriebenen Wartefall geschehen?",
    "answers": [
      {
        "label": "Es wurde sicher günstiger gekauft als zu 101.",
        "explanation": "Es fand überhaupt kein Kauf statt."
      },
      {
        "label": "Jeder spätere Kursgewinn wurde trotzdem verdient.",
        "explanation": "Ohne den Kauf besteht diese neue Position nicht."
      },
      {
        "label": "Der Auftrag blieb unausgeführt; es gab keinen Kauf zu 100.",
        "explanation": "Richtig: Ein günstiger Wunschpreis ersetzt keine Gegenseite."
      }
    ],
    "correct": 2,
    "rule": "Preisvorteil und tatsächliche Ausführung gemeinsam beurteilen."
  },
  {
    "title": "Slippage: tatsächlichen Preis mit einer Erwartung vergleichen",
    "summary": "Die Bezugsgröße entscheidet über die gemessene Abweichung.",
    "paragraphs": [
      "Slippage meint hier eine Preisabweichung gegenüber einem genannten Vergleichspreis. Du musst deshalb sagen, welchen Preis du erwartest und wann du ihn gesehen hast. Ein Kaufpreis allein zeigt noch nicht, ob er vom Vergleich abweicht. Wir betrachten den Durchschnitt aller Teilkäufe.",
      "Dein Vergleichspreis ist 100. Tatsächlich kaufst du vier Einheiten: zwei zu 101 und zwei zu 102. Das kostet 202 + 204 = 406 Euro. Der Durchschnitt ist 406 / 4 = 101,50. Gegenüber 100 sind das 1,50 Euro mehr je Einheit, insgesamt 6 Euro.",
      "Die Differenz belegt zunächst einen Preisnachteil gegenüber dieser Referenz. Sie erklärt nicht allein die Ursache. Angebote könnten sich geändert haben oder deine Menge könnte mehrere Stufen nutzen. Der Vergleichspreis muss auch kein vorher nutzbares Angebot gewesen sein. Gebühren sind eine weitere, getrennte Position."
    ],
    "columns": [
      {
        "title": "Vergleich und Ausführung",
        "tone": "neutral",
        "points": [
          "Referenz: 100 Euro je Einheit.",
          "2 zu 101 und 2 zu 102: insgesamt 406 Euro."
        ]
      },
      {
        "title": "Abweichung im Beispiel",
        "tone": "positive",
        "points": [
          "Durchschnitt 101,50; Differenz 1,50 je Einheit.",
          "4 × 1,50 = 6 Euro über der Referenz."
        ]
      }
    ],
    "prompt": "Wie groß ist der Preisnachteil gegenüber der ausdrücklich gewählten Referenz?",
    "answers": [
      {
        "label": "6 Euro insgesamt vor Gebühren.",
        "explanation": "Richtig: Vier Einheiten liegen durchschnittlich 1,50 Euro über 100."
      },
      {
        "label": "Nur 2 Euro, weil der letzte Teilpreis 102 war.",
        "explanation": "Für die gesamte Abweichung zählen alle Einheiten und Teilpreise."
      },
      {
        "label": "0 Euro, weil jeder Teilkauf ein eigenes Geschäft ist.",
        "explanation": "Die Teilkäufe lassen sich zu einem Gesamtergebnis zusammenrechnen."
      }
    ],
    "correct": 0,
    "rule": "Slippage nur mit genannter Referenz, Richtung und Menge beschreiben."
  },
  {
    "title": "Eine Preisabweichung kann auch günstig ausfallen",
    "summary": "Eine Verbesserung ist möglich, aber nicht versprochen.",
    "paragraphs": [
      "Ein tatsächlicher Kauf kann günstiger ausfallen als der Vergleichspreis. Eine solche Verbesserung heißt Preisverbesserung. Beim Verkauf wäre ein höherer tatsächlicher Preis günstiger. Benenne deshalb auch die Handelsrichtung, bevor du eine Abweichung gut oder schlecht nennst.",
      "Du vergleichst einen Kauf von fünf mit 101 Euro je Einheit. Die bestätigte Ausführung liegt für alle fünf bei 100,50. Der Unterschied beträgt 0,50 Euro je Einheit. Zusammen sind es 5 × 0,50 = 2,50 Euro weniger als der Vergleichsbetrag von 505.",
      "Der tatsächliche Preisbetrag ist 502,50 Euro vor Kosten. Dieses gute Ergebnis für den Kauf verspricht keine Verbesserung beim nächsten Auftrag. Es beweist auch keinen späteren Anlagegewinn. Wir messen nur, wie der bestätigte Kauf gegenüber der genannten Referenz ausgefallen ist."
    ],
    "columns": [
      {
        "title": "Genannte Referenz",
        "tone": "neutral",
        "points": [
          "5 × 101 = 505 Euro.",
          "Referenz gilt ausdrücklich für einen Kauf."
        ]
      },
      {
        "title": "Bestätigter Kauf",
        "tone": "positive",
        "points": [
          "5 × 100,50 = 502,50 Euro.",
          "2,50 Euro günstiger vor Kosten."
        ]
      }
    ],
    "prompt": "Welche Aussage beschreibt den Kauf richtig?",
    "answers": [
      {
        "label": "Er garantiert bei jedem späteren Auftrag dieselbe Verbesserung.",
        "explanation": "Der einzelne Abschluss liefert keine solche Zusage."
      },
      {
        "label": "Er war 2,50 Euro günstiger als die gewählte Referenz.",
        "explanation": "Richtig: Der niedrigere Kaufpreis gilt für alle fünf Einheiten."
      },
      {
        "label": "Er war 2,50 Euro teurer, weil der Preis niedriger liegt.",
        "explanation": "Ein niedrigerer Preis ist für den Käufer in diesem Vergleich günstiger."
      }
    ],
    "correct": 1,
    "rule": "Eine Preisverbesserung misst einen Vergleich, keinen garantierten Gewinn."
  },
  {
    "title": "Preiswirkung: ein Auftrag kann mehrere Stufen nutzen",
    "summary": "Ein veränderter Ask ist noch keine vollständige Tageserklärung.",
    "paragraphs": [
      "Ein größerer Auftrag kann günstige Angebote aufbrauchen und weitere Stufen nutzen. Wir nennen das hier die unmittelbare Preiswirkung im Orderbuch. Die Rechnung setzt einen bekannten Ablauf voraus. Ein Tageskurs allein zeigt nicht, wie viel auf genau diesen Auftrag zurückgeht.",
      "Es liegen zwei Verkaufseinheiten zu 101 und sechs zu 102. Du kaufst sechs und erlaubst beide Preise. Ohne weitere Änderungen kaufst du zwei zu 101 und vier zu 102. Das kostet 202 + 408 = 610 Euro. Bei 101 bleibt nichts. Bei 102 bleiben zwei Einheiten; dort liegt nun der beste Ask.",
      "In unserem Modell erklärt der Kauf diese Buchänderung. In einem echten Zeitraum können gleichzeitig Nachrichten, neue Aufträge und Stornierungen auftreten. Auch spätere Preisänderungen müssen nicht allein von diesem Kauf stammen. Trenne den bekannten Ablauf von einer umfassenden Ursache für den ganzen Markt."
    ],
    "columns": [
      {
        "title": "Gegebener Kauf",
        "tone": "neutral",
        "points": [
          "Ask 101: 2; Ask 102: 6.",
          "Kauf von 6: 2 zu 101 und 4 zu 102."
        ]
      },
      {
        "title": "Nach dem Modellablauf",
        "tone": "positive",
        "points": [
          "Preisbetrag: 610 Euro.",
          "Neuer bester Ask 102 mit 2 Einheiten."
        ]
      }
    ],
    "prompt": "Was erklärt der bekannte Kauf ohne weitere Änderungen?",
    "answers": [
      {
        "label": "Jede weitere Preisbewegung des ganzen Tages.",
        "explanation": "Spätere Ereignisse können andere Ursachen haben."
      },
      {
        "label": "Dass sechs gekauft, aber nur zwei verkauft wurden.",
        "explanation": "Jede gekaufte Einheit wurde von der Gegenseite verkauft."
      },
      {
        "label": "Dass die Stufe 101 leer wird und der beste Ask auf 102 wechselt.",
        "explanation": "Richtig: Der Auftrag nutzt die zwei Einheiten bei 101 vollständig."
      }
    ],
    "correct": 2,
    "rule": "Bekannte unmittelbare Preiswirkung von unbekannten weiteren Ursachen trennen."
  },
  {
    "title": "Viel Handelsvolumen ist nicht dasselbe wie viel Tiefe",
    "summary": "Vergangene Geschäfte stellen keine neue Menge bereit.",
    "paragraphs": [
      "Handelsvolumen zählt bereits ausgeführte Einheiten in einem Zeitraum. Markttiefe zeigt dagegen momentan angebotene Mengen auf Preisstufen. Ein Markt kann heute viel gehandelt haben und jetzt trotzdem wenig sichtbare Menge am besten Preis zeigen.",
      "Unser Datenbericht nennt 10.000 gehandelte Einheiten seit Tagesbeginn. Der aktuelle Ask zeigt nur zwei Einheiten zu 101. Du willst acht kaufen. Die Zahl 10.000 sagt nicht, dass du die restlichen sechs ebenfalls für 101 bekommst. Dazu fehlen aktuelle Angebote und Bedingungen.",
      "Umgekehrt kann ein Buch viel wartende Menge zeigen, ohne dass gerade viel gehandelt wird. Auch die Zahl der Trades ist nicht die Stückzahl: Ein Trade kann mehrere Einheiten umfassen. Benenne deshalb, ob du vergangene Ausführungen, aktuelle Angebote oder die Anzahl der Geschäfte misst."
    ],
    "columns": [
      {
        "title": "Vergangener Zeitraum",
        "tone": "neutral",
        "points": [
          "Seit Tagesbeginn: Volumen 10.000 Einheiten.",
          "Das sind bereits gehandelte Einheiten."
        ]
      },
      {
        "title": "Aktuelle Anzeige",
        "tone": "positive",
        "points": [
          "Ask 101: 2 sichtbare Einheiten.",
          "Für Kauf von 8 fehlen weitere Angebote."
        ]
      }
    ],
    "prompt": "Beweisen 10.000 früher gehandelte Einheiten einen jetzigen Kauf von acht zu 101?",
    "answers": [
      {
        "label": "Nein, vergangenes Volumen ersetzt keine aktuelle Menge am Preis.",
        "explanation": "Richtig: Die aktuelle beste Stufe zeigt nur zwei Einheiten."
      },
      {
        "label": "Ja, jede frühere Einheit kann nochmals sofort zu 101 gekauft werden.",
        "explanation": "Vergangene Geschäfte stellen nicht automatisch neue Angebote bereit."
      },
      {
        "label": "Ja, Volumen und Markttiefe bezeichnen immer dieselbe Zahl.",
        "explanation": "Volumen zählt Ausführungen; Tiefe beschreibt Angebote."
      }
    ],
    "correct": 0,
    "rule": "Volumen, aktuelle Tiefe und Zahl der Trades getrennt benennen."
  },
  {
    "title": "Liquidität und Schwankung sind verschiedene Fragen",
    "summary": "Viele Angebote können mit deutlichen Preisbewegungen zusammen auftreten.",
    "paragraphs": [
      "Volatilität beschreibt, wie stark Preise im betrachteten Zeitraum schwanken. Liquidität beschreibt hier die Handelbarkeit zu passenden Bedingungen. Beide können zusammenhängen. Trotzdem sind sie nicht dieselbe Eigenschaft. Ein bewegter Preis beweist allein keine schlechte Handelbarkeit.",
      "Im Beispiel ändern neue Nachrichten die Einschätzungen vieler Teilnehmer. Die Preise bewegen sich deutlich. Gleichzeitig stehen an den jeweiligen aktuellen Preisen viele passende Angebote bereit. Ein anderer Markt kann wenig Bewegung zeigen, aber kaum erreichbare Menge haben, weil wenig gehandelt wird.",
      "Prüfe deshalb die Schwankung und die tatsächlichen Angebote getrennt. Ein ruhiger Chart garantiert keinen günstigen großen Auftrag. Ein aktiver Markt mit viel Menge beseitigt umgekehrt das Risiko von Kursverlusten nicht. Du brauchst Zeitraum, Menge und Angebotsdaten, um beide Fragen zu beurteilen."
    ],
    "columns": [
      {
        "title": "Volatilität",
        "tone": "neutral",
        "points": [
          "Wie stark verändert sich der Preis?",
          "Der Zeitraum gehört zur Aussage."
        ]
      },
      {
        "title": "Liquidität",
        "tone": "positive",
        "points": [
          "Welche Menge ist zu welchen Bedingungen handelbar?",
          "Gute Handelbarkeit verspricht keine stabile Kursrichtung."
        ]
      }
    ],
    "prompt": "Beweist ein ruhiger Chart allein genug Menge für einen großen Kauf?",
    "answers": [
      {
        "label": "Ja, Volatilität ist ein anderes Wort für Angebotsmenge.",
        "explanation": "Volatilität beschreibt Preisbewegungen, nicht die Menge im Buch."
      },
      {
        "label": "Nein, dazu müssen die erreichbaren Angebote geprüft werden.",
        "explanation": "Richtig: Kleine Kursschwankungen sind kein Mengennachweis."
      },
      {
        "label": "Ja, fehlende Bewegung bedeutet unbegrenzte Tiefe.",
        "explanation": "Auch ein kaum gehandelter Markt kann einen ruhigen Chart zeigen."
      }
    ],
    "correct": 1,
    "rule": "Schwankung und Handelbarkeit als zwei eigene Fragen prüfen."
  },
  {
    "title": "Warum Anbieter den Spread verändern können",
    "summary": "Kosten und Risiken gehören zum Stellen von Angeboten.",
    "paragraphs": [
      "Wer Angebote stellt, muss mögliche Kosten und Risiken beachten. Er kann nach einem Kauf Bestand halten, dessen Wert fällt. Neue Informationen können seine Einschätzung verändern. Auch die Bearbeitung von Geschäften kostet etwas. Die Spanne kann helfen, diese Tätigkeit zu finanzieren, garantiert aber keinen Gewinn.",
      "Unser Händler bietet zunächst Bid 99 und Ask 101. Später stellt er 98 und 102. Der sichtbare Spread wächst von 2 auf 4 Euro. In diesem allgemeinen Fall ist noch nicht angegeben, warum genau er geändert wurde. Mehr Risiko wäre eine mögliche Erklärung, aber noch kein Beweis.",
      "Ebenso wenig beweist die größere Spanne eine bestimmte Absicht oder Identität. Andere Teilnehmer können außerdem eigene Angebote stellen. Prüfe die tatsächlich beste erreichbare Angebotslage, statt jeden Markt als einen einzigen Händler zu behandeln. Angebot, Kosten, Risiko und nachgewiesener Grund bleiben verschiedene Angaben."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "Bid 99; Ask 101.",
          "Spread: 101 − 99 = 2 Euro."
        ]
      },
      {
        "title": "Nachher",
        "tone": "positive",
        "points": [
          "Bid 98; Ask 102.",
          "Spread: 102 − 98 = 4 Euro; Grund nicht angegeben."
        ]
      }
    ],
    "prompt": "Was ist durch diese beiden Angebotslagen sicher?",
    "answers": [
      {
        "label": "Der Händler erzielt damit sicher vier Euro Gewinn.",
        "explanation": "Dazu müssten Geschäfte, Preisentwicklung und Kosten bekannt sein."
      },
      {
        "label": "Eine konkrete Täuschungsabsicht wurde bewiesen.",
        "explanation": "Die Preise allein belegen keine solche Absicht."
      },
      {
        "label": "Die sichtbare Spanne hat sich von zwei auf vier Euro vergrößert.",
        "explanation": "Richtig: Die Zahlen belegen die Änderung, nicht automatisch den Grund."
      }
    ],
    "correct": 2,
    "rule": "Eine veränderte Spanne beschreiben, ohne ihren Grund zu erfinden."
  },
  {
    "title": "Neue Angebote können verbrauchte Menge ergänzen",
    "summary": "Nachfüllen ist ein beobachteter Ablauf, keine feste Zusage.",
    "paragraphs": [
      "Nach einem Handel können neue Angebote hinzukommen. Wie schnell und zu welchen Preisen das geschieht, beeinflusst die weitere Handelbarkeit. Erneuerung von Angeboten ist ein Teil dessen, was als Resilienz eines Marktes untersucht wird. Das meint seine Fähigkeit, Handel aufzufangen und wieder passende Angebote bereitzustellen.",
      "Im Lernfall stehen sechs Verkaufseinheiten zu 101. Vier werden gekauft. Zwei bleiben. Danach kommt ausdrücklich ein neuer Verkaufsauftrag mit fünf Einheiten bei 101 hinzu. Nun stehen dort 2 + 5 = 7 Einheiten. Der Preis bleibt in diesem Ablauf derselbe.",
      "Das beweist nur diese Erneuerung im Beispiel. Es verspricht kein ebenso schnelles Nachfüllen beim nächsten Kauf. Auch eine Rückkehr zu einem früheren Kurs ist nicht garantiert. Ohne die ausdrücklich genannte neue Order würden die Mengenbilder allein nicht zeigen, ob neue oder versteckte Menge ergänzt wurde."
    ],
    "columns": [
      {
        "title": "Bekannte Ereignisse",
        "tone": "neutral",
        "points": [
          "6 bei 101; davon 4 gekauft: 2 bleiben.",
          "Neuer Verkaufsauftrag: 5 bei 101."
        ]
      },
      {
        "title": "Stand danach",
        "tone": "positive",
        "points": [
          "2 + 5 = 7 sichtbare Einheiten bei 101.",
          "Keine Zusage für spätere Erneuerung."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten stehen nach dem ausdrücklich genannten neuen Auftrag bei 101?",
    "answers": [
      {
        "label": "Sieben.",
        "explanation": "Richtig: Zwei verbliebene plus fünf neue Einheiten ergeben sieben."
      },
      {
        "label": "Elf, weil die ursprünglichen sechs vollständig stehen bleiben.",
        "explanation": "Vier der ursprünglichen sechs wurden schon gehandelt."
      },
      {
        "label": "Zwei, weil neue Aufträge die Menge nicht ändern können.",
        "explanation": "Der Fall nennt fünf neue Einheiten am selben Preis."
      }
    ],
    "correct": 0,
    "rule": "Erneuerung anhand bekannter Ereignisse erklären und spätere Menge neu prüfen."
  },
  {
    "title": "Weniger Menge kann den Kauf plötzlich teurer machen",
    "summary": "Ein früheres Angebot reserviert deinen späteren Preis nicht.",
    "paragraphs": [
      "Sichtbare Liquidität kann sich verändern, bevor dein Auftrag eintrifft. Dazu muss nicht erst viel gehandelt werden. Eine Stornierung kann Menge entfernen. Das Risiko, nicht rechtzeitig zu passenden Bedingungen handeln zu können, heißt Liquiditätsrisiko. Wir betrachten einen Fall, in dem genau bekannt ist, welche Menge vor dem Kauf zurückgezogen wird.",
      "Zuerst stehen fünf Einheiten zu 101 und zwei zu 105 bereit. Vier der fünf bei 101 werden storniert. Danach kaufst du drei sofort und erlaubst beide Preise. Du erhältst eine zu 101 und zwei zu 105. Der Preisbetrag ist 101 + 210 = 311 Euro. Der Durchschnitt beträgt etwa 103,67.",
      "Vor der Stornierung hätten drei unveränderte Einheiten zu 101 insgesamt 303 Euro gekostet. Das ist ein Vergleich, keine tatsächlich erfolgte frühere Ausführung. Die spätere Bestätigung zeigt den wirklichen Kauf. Ein Bildschirmfoto der ersten Lage reserviert dir die alte Menge nicht."
    ],
    "columns": [
      {
        "title": "Vor dem Kauf",
        "tone": "neutral",
        "points": [
          "Zuerst 5 zu 101 und 2 zu 105.",
          "4 bei 101 werden vor dem Auftrag storniert."
        ]
      },
      {
        "title": "Späterer Kauf von 3",
        "tone": "positive",
        "points": [
          "1 × 101 + 2 × 105 = 311 Euro.",
          "Durchschnitt etwa 103,67; früherer Vergleich 303 Euro."
        ]
      }
    ],
    "prompt": "Warum kostet der spätere Kauf im Modell mehr als 303 Euro?",
    "answers": [
      {
        "label": "Weil der Käufer insgesamt nur zwei Einheiten erhalten hat.",
        "explanation": "Er kauft eine zu 101 und zwei zu 105, insgesamt drei."
      },
      {
        "label": "Weil vor dem Kauf vier günstige Einheiten zurückgezogen wurden.",
        "explanation": "Richtig: Danach reicht die Stufe 101 nur noch für eine Einheit."
      },
      {
        "label": "Weil jeder Screenshot einen zusätzlichen Preisaufschlag verlangt.",
        "explanation": "Das Bild verursacht keine Gebühr; die Angebotslage wurde geändert."
      }
    ],
    "correct": 1,
    "rule": "Frühere Angebote und die Bedingungen beim tatsächlichen Kauf getrennt halten."
  },
  {
    "title": "Handelbarkeit kann sich im Tagesverlauf ändern",
    "summary": "Zwei Zeitpunkte sind keine feste Regel für jeden Tag.",
    "paragraphs": [
      "Derselbe Markt kann zu verschiedenen Zeiten andere Angebote haben. Teilnehmer sind unterschiedlich aktiv. Nachrichten, Handelsphasen und Aufträge können die Lage verändern. Prüfe deshalb, wann die Daten aufgenommen wurden. Eine Aussage ohne Zeitpunkt ist oft unvollständig.",
      "Unser erfundenes Produkt zeigt um 9:00 Bid 99 und Ask 101 mit fünf Einheiten je Seite. Um 14:00 zeigt es Bid 99,90 und Ask 100,10 mit 20 je Seite. Im zweiten Ausschnitt sind die Spanne kleiner und die beste Menge größer. Wir betrachten dasselbe Produkt am selben Platz.",
      "Das sind zwei vorgegebene Momentaufnahmen. Sie beweisen nicht, dass 14:00 an jedem Tag besser ist. Auch spätere Aufträge können andere Bedingungen erreichen. Konkrete Handelszeiten und Sessions betrachten wir in Kapitel 9. Hier ist wichtig: Der Zeitpunkt gehört zum Liquiditätscheck."
    ],
    "columns": [
      {
        "title": "Ausschnitt um 9:00",
        "tone": "neutral",
        "points": [
          "Bid 99; Ask 101; Spread 2 Euro.",
          "Jeweils 5 Einheiten am besten Preis."
        ]
      },
      {
        "title": "Ausschnitt um 14:00",
        "tone": "positive",
        "points": [
          "Bid 99,90; Ask 100,10; Spread 0,20 Euro.",
          "Jeweils 20 Einheiten am besten Preis."
        ]
      }
    ],
    "prompt": "Was belegt der zweite Ausschnitt sicher gegenüber dem ersten?",
    "answers": [
      {
        "label": "Jeder künftige Tag ist um 14:00 sicher besser handelbar.",
        "explanation": "Zwei Beispiele ergeben keine dauerhafte Uhrzeitregel."
      },
      {
        "label": "Es handelt sich automatisch um zwei verschiedene Produkte.",
        "explanation": "Der Fall nennt ausdrücklich dasselbe Produkt am selben Platz."
      },
      {
        "label": "In diesen Daten sind die Spanne kleiner und die besten Mengen größer.",
        "explanation": "Richtig: Die Aussage bleibt auf die genannten Zeitpunkte begrenzt."
      }
    ],
    "correct": 2,
    "rule": "Den Datenzeitpunkt nennen und daraus keine feste Tagesregel machen."
  },
  {
    "title": "Auch die genaue Laufzeit kann die Tiefe verändern",
    "summary": "Gleicher Basiswert bedeutet nicht derselbe Kontrakt.",
    "paragraphs": [
      "Zwei Futures können sich auf denselben Basiswert beziehen, aber an verschiedenen Terminen enden. Dann sind es unterschiedliche Kontrakte. Jeder kann ein eigenes Orderbuch und andere Handelsaktivität haben. Der gemeinsame Name des Basiswerts erklärt die Mengen nicht vollständig.",
      "Im Lernfall zeigt ein näher endender Vertrag 20 Einheiten am besten Ask. Ein später endender Vertrag zeigt dort nur zwei. Daraus wissen wir zunächst etwas über diese beiden Ausschnitte. Ein Kauf von zehn könnte den zweiten Vertrag auf weitere Stufen führen. Dafür fehlen hier die weiteren Angebote.",
      "Du darfst die Verträge trotzdem nicht nur nach der größten Menge austauschen. Endtermin, Preisbezug und weitere Bedingungen müssen zu deinem Vorhaben passen. Ein Wechsel kann neue Kosten und Risiken bringen. Prüfe deshalb den genauen Vertrag, bevor du seine Liquidität mit einer anderen Laufzeit vergleichst."
    ],
    "columns": [
      {
        "title": "Näheres Vertragsende",
        "tone": "neutral",
        "points": [
          "Am besten Ask: 20 Einheiten.",
          "Ein bestimmter Kontrakt mit eigenen Bedingungen."
        ]
      },
      {
        "title": "Späteres Vertragsende",
        "tone": "positive",
        "points": [
          "Am besten Ask: 2 Einheiten.",
          "Für Kauf von 10 fehlen weitere Stufen."
        ]
      }
    ],
    "prompt": "Macht derselbe Basiswert die beiden Futures vollständig austauschbar?",
    "answers": [
      {
        "label": "Nein, Laufzeit und Vertragsbedingungen bleiben verschieden.",
        "explanation": "Richtig: Die Tiefe ist nur eine der zu prüfenden Eigenschaften."
      },
      {
        "label": "Ja, größere Menge entfernt alle Unterschiede.",
        "explanation": "Die Menge verändert nicht den Endtermin des Vertrags."
      },
      {
        "label": "Ja, beide Orderbücher müssen denselben Preis und dieselbe Menge zeigen.",
        "explanation": "Verschiedene Kontrakte können unterschiedliche Angebote haben."
      }
    ],
    "correct": 0,
    "rule": "Liquidität am genauen Produkt und Kontrakt beurteilen."
  },
  {
    "title": "Gebühren gehören zum tatsächlichen Ergebnis",
    "summary": "Ausführungspreise enthalten ihren Preisunterschied bereits.",
    "paragraphs": [
      "Zum Ergebnis eines abgeschlossenen Geschäfts gehören die tatsächlich gezahlten und erhaltenen Beträge. Getrennte Gebühren musst du zusätzlich berücksichtigen. Kosten des Handels heißen Transaktionskosten. Auch weitere Kosten können je nach Produkt entstehen. In diesem vereinfachten Fall betrachten wir nur Kauf, Verkauf und zwei feste Gebühren.",
      "Du kaufst vier Einheiten zu 101: zusammen 404 Euro. Später verkaufst du alle vier zu 103: zusammen 412 Euro. Vor Gebühren beträgt die Differenz 412 − 404 = 8 Euro. Kauf und Verkauf kosten jeweils 3 Euro Gebühr. Nach insgesamt 6 Euro Gebühren bleiben 2 Euro.",
      "Die tatsächlichen Preise 101 und 103 sind schon vollständig in der Rechnung enthalten. Du ziehst nicht zusätzlich einen vermuteten Spread für dieselben Abschlüsse ab. Laufende Kosten und Steuern fehlen hier ausdrücklich. Ein positiver Preisunterschied bedeutet daher noch nicht automatisch denselben Gewinn nach allen Kosten."
    ],
    "columns": [
      {
        "title": "Tatsächliche Abschlüsse",
        "tone": "neutral",
        "points": [
          "Kauf: 404 Euro; Verkauf: 412 Euro.",
          "Differenz vor Gebühren: 8 Euro."
        ]
      },
      {
        "title": "Genannte Zusatzkosten",
        "tone": "positive",
        "points": [
          "3 Euro Kaufgebühr + 3 Euro Verkaufsgebühr = 6.",
          "8 − 6 = 2 Euro nach diesen Gebühren."
        ]
      }
    ],
    "prompt": "Was bleibt nach den ausdrücklich genannten Gebühren?",
    "answers": [
      {
        "label": "−6 Euro, weil derselbe Spread noch einmal abgezogen werden muss.",
        "explanation": "Der Preisunterschied steckt bereits in den tatsächlichen Kauf- und Verkaufspreisen."
      },
      {
        "label": "2 Euro.",
        "explanation": "Richtig: Von acht Euro Preisgewinn werden sechs Euro zusätzliche Gebühren abgezogen."
      },
      {
        "label": "8 Euro, weil Gebühren nie zum Ergebnis gehören.",
        "explanation": "Die genannten Gebühren verringern das Ergebnis."
      }
    ],
    "correct": 1,
    "rule": "Ausführungspreise und echte Zusatzkosten vollständig, aber nicht doppelt rechnen."
  },
  {
    "title": "Marktliquidität und verfügbares Geld auseinanderhalten",
    "summary": "Gut handelbare Anlagen bezahlen eine Rechnung nicht automatisch.",
    "paragraphs": [
      "Das Wort Liquidität wird auch für verfügbares Geld verwendet. Eine Firma braucht Geld, um Rechnungen zu bezahlen. Diese Zahlungsfähigkeit ist eine andere Frage als die Handelbarkeit einer Anlage. Finanzierungsliquidität meint die Möglichkeit, benötigte Geldmittel zu beschaffen.",
      "Unsere Firma hat 500 Euro sofort verfügbares Geld. Eine Rechnung über 900 Euro muss bezahlt werden. Es fehlen 900 − 500 = 400 Euro. Sie besitzt außerdem Anlagen mit einem geschätzten Wert von 10.000 Euro. Dieser Wert ist noch kein Geld auf dem Zahlungskonto.",
      "Die Firma könnte Anlagen verkaufen oder andere Geldmittel beschaffen. Ob das rechtzeitig und zu welchen Kosten gelingt, muss geprüft werden. Gut handelbare Anlagen können dabei helfen. Sie ersetzen aber weder den Verkauf noch die tatsächliche Zahlung. Benenne deshalb, ob du Handelbarkeit oder benötigtes Geld meinst."
    ],
    "columns": [
      {
        "title": "Zahlungsbedarf",
        "tone": "neutral",
        "points": [
          "Rechnung 900 Euro; verfügbar 500 Euro.",
          "Noch benötigtes Geld: 400 Euro."
        ]
      },
      {
        "title": "Andere Frage: Anlagen",
        "tone": "positive",
        "points": [
          "Geschätzter Anlagenwert 10.000 Euro.",
          "Wert, Verkauf und verfügbare Geldmittel sind getrennt."
        ]
      }
    ],
    "prompt": "Reichen die 500 Euro bereits für die Rechnung über 900?",
    "answers": [
      {
        "label": "Ja, jeder Anlagenwert wird ohne Verkauf zu Kontogeld.",
        "explanation": "Ein geschätzter Wert ist keine bereits vorhandene Zahlungssumme."
      },
      {
        "label": "Ja, ein enger Spread hebt die Rechnung auf.",
        "explanation": "Handelsbedingungen ändern nicht den fälligen Rechnungsbetrag."
      },
      {
        "label": "Nein, es fehlen 400 Euro an verfügbaren Geldmitteln.",
        "explanation": "Richtig: Der geschätzte Anlagenwert steht nicht automatisch als Zahlungsgeld bereit."
      }
    ],
    "correct": 2,
    "rule": "Handelbarkeit und verfügbare Zahlungs- oder Finanzierungsmittel getrennt prüfen."
  },
  {
    "title": "Dein Liquiditätscheck: die vollständige Menge rechnen",
    "summary": "Zugang, Zeitpunkt, Preisstufen und Gebühren gehören zusammen.",
    "paragraphs": [
      "Für deinen Check notierst du Produkt, Platz, Datenzeit und erreichbaren Weg. Nenne die gewünschte Seite und Menge. Prüfe Spread und passende Preisstufen. Rechne danach den Betrag für die ganze Menge. Trenne bestätigte Ausführungen von Erwartungen und füge die tatsächlich genannten Gebühren hinzu.",
      "Unser erreichbares Buch zeigt Bid 49,90. Am Ask liegen zwei Einheiten zu 50,10 und drei zu 50,30. Du kaufst vier sofort und erlaubst beide Preise. Die Angebote bleiben unverändert. Zwei zu 50,10 kosten 100,20; zwei zu 50,30 kosten 100,60. Zusammen sind das 200,80 Euro, im Durchschnitt 50,20.",
      "Mit einer Kaufgebühr von 1 Euro beträgt die Ausgabe 201,80 Euro. Gegenüber einer ausdrücklich gewählten Referenz von 50 je Einheit liegt der reine Preisbetrag 0,80 höher. Diese Abweichung ist schon enthalten, keine zweite Gebühr. Im nächsten Kapitel „Warum bewegen sich Preise?“ verbinden wir die Grundlagen mit neuen Aufträgen und Informationen."
    ],
    "columns": [
      {
        "title": "Gegebener Kauf",
        "tone": "neutral",
        "points": [
          "Ask 50,10: 2; Ask 50,30: 3.",
          "Kauf von 4; beide Preise erlaubt; Angebote unverändert."
        ]
      },
      {
        "title": "Vollständige Kaufrechnung",
        "tone": "positive",
        "points": [
          "Preisbetrag 200,80 Euro; Durchschnitt 50,20.",
          "Mit 1 Euro Gebühr: Ausgabe 201,80 Euro.",
          "Referenz 50: Preisabweichung insgesamt +0,80 Euro."
        ]
      }
    ],
    "prompt": "Wie viel wird einschließlich der genannten Kaufgebühr ausgegeben?",
    "answers": [
      {
        "label": "201,80 Euro.",
        "explanation": "Richtig: Der Preisbetrag 200,80 und die zusätzliche Gebühr von einem Euro werden addiert."
      },
      {
        "label": "202,60 Euro, weil die Referenzabweichung nochmals hinzukommt.",
        "explanation": "Die 0,80 Euro stecken schon im tatsächlichen Preisbetrag."
      },
      {
        "label": "200 Euro, weil vier Einheiten immer zum Referenzpreis gekauft werden.",
        "explanation": "Die Referenz 50 ist nicht der bestätigte Kaufpreis."
      }
    ],
    "correct": 0,
    "rule": "Preis, ganze Menge, Zusatzkosten und Grenzen der Daten gemeinsam erklären."
  }
] as const;

export const marketBasicsChapterSevenLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-07.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 7 · Liquidität und Markttiefe', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 7', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
