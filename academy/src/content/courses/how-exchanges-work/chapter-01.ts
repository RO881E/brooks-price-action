import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Was wird an einem Finanzmarkt gehandelt?",
    "summary": "Ein Markt bringt Handelswünsche zusammen.",
    "paragraphs": [
      "Stell dir einen Marktplatz vor: Eine Person möchte etwas kaufen, eine andere verkaufen. Ein Finanzmarkt bringt solche Wünsche für finanzielle Instrumente zusammen. Ein Instrument ist das, worüber sich beide einigen – etwa ein Unternehmensanteil oder ein Vertrag.",
      "Eine Aktie ist ein Anteil an einem Unternehmen. Eine Anleihe ist eine Schuldverschreibung mit vertraglich festgelegten Zahlungsbedingungen. Ein Future ist ein standardisierter Vertrag über einen künftigen Austausch beziehungsweise eine Abrechnung. Diese Dinge können im Chart ähnlich aussehen, besitzen aber unterschiedliche Rechte und Risiken.",
      "Bevor du einen Preis beurteilst, frage deshalb: Was genau wird gehandelt? Für den Einstieg genügt diese Unterscheidung; die Einzelheiten der Instrumente kommen später."
    ],
    "columns": [
      {
        "title": "Die Anzeige",
        "tone": "neutral",
        "points": [
          "Ein Name und ein Preis im Bildschirm.",
          "Ein Chart zeigt Preisbewegungen."
        ]
      },
      {
        "title": "Das Instrument",
        "tone": "positive",
        "points": [
          "Rechte und Pflichten gehören zum Produkt.",
          "Gleiche Preise bedeuten nicht gleiche Produkte."
        ]
      }
    ],
    "prompt": "Was solltest du zuerst wissen, wenn du ein neues Symbol siehst?",
    "answers": [
      {
        "label": "Welches Instrument hinter dem Symbol steht.",
        "explanation": "Richtig: Erst das Produkt erklärt, was du tatsächlich kaufst oder vereinbarst."
      },
      {
        "label": "Dass jedes Symbol ein Unternehmensanteil ist.",
        "explanation": "Auch Verträge und Schuldverschreibungen werden gehandelt."
      },
      {
        "label": "Dass ein ähnlicher Chart identisches Risiko bedeutet.",
        "explanation": "Der Preisverlauf allein zeigt nicht alle Produktbedingungen."
      }
    ],
    "correct": 0,
    "rule": "Ein Chart ersetzt die Kenntnis des gehandelten Produkts nicht."
  },
  {
    "title": "Eine Aktie kaufen: Was wechselt den Besitzer?",
    "summary": "Besitzwechsel und Kapitalaufnahme.",
    "paragraphs": [
      "Beim Kauf einer bereits ausgegebenen Aktie von einem anderen Anleger wechseln Anteil und Kaufpreis zwischen diesen Beteiligten. Das Unternehmen erhält bei diesem gewöhnlichen Weiterverkauf nicht automatisch neues Geld. Dieser Handel gehört zum Sekundärmarkt.",
      "Wenn ein Unternehmen neue Aktien ausgibt, kann es dadurch Kapital aufnehmen. Das gehört zum Primärmarkt. Stell dir eine Konzertkarte vor: Beim ersten Verkauf erhält der Veranstalter Geld; beim späteren Weiterverkauf zwischen Besuchern wechselt die bereits ausgegebene Karte den Besitzer.",
      "Die Kartenidee erklärt nur den Unterschied der Verkaufswege. Eine Aktie hat zusätzliche Rechte und wirtschaftliche Eigenschaften. Merke dir: Neuer Ausgabevorgang und Weiterverkauf sind unterschiedliche Ereignisse."
    ],
    "columns": [
      {
        "title": "Primärmarkt",
        "tone": "neutral",
        "points": [
          "Neue Wertpapiere werden ausgegeben.",
          "Der Emittent kann Kapital aufnehmen."
        ]
      },
      {
        "title": "Sekundärmarkt",
        "tone": "positive",
        "points": [
          "Bereits ausgegebene Wertpapiere wechseln den Besitzer.",
          "Der Kaufpreis fließt an die verkaufende Gegenpartei."
        ]
      }
    ],
    "prompt": "Du kaufst eine vorhandene Aktie von einem Anleger. Wer erhält in diesem Beispiel den Kaufpreis?",
    "answers": [
      {
        "label": "Immer das Unternehmen selbst.",
        "explanation": "Das wäre beim beschriebenen Weiterverkauf falsch."
      },
      {
        "label": "Der verkaufende Anleger.",
        "explanation": "Richtig: Es handelt sich um einen Weiterverkauf, nicht um die Ausgabe einer neuen Aktie."
      },
      {
        "label": "Niemand, weil nur der Chart geändert wird.",
        "explanation": "Ein ausgeführter Kauf ist ein wirtschaftlicher Austausch."
      }
    ],
    "correct": 1,
    "rule": "Ausgabe und späterer Handel sind zwei verschiedene Wege."
  },
  {
    "title": "Warum handeln Menschen überhaupt?",
    "summary": "Unterschiedliche Ziele am selben Markt.",
    "paragraphs": [
      "Nicht jeder Marktteilnehmer versucht, aus dem nächsten kleinen Preissprung Gewinn zu erzielen. Manche investieren für spätere Ausgaben. Andere benötigen Geld heute, tauschen Vermögenswerte oder wollen ein bestehendes Preisrisiko verringern.",
      "Ein langfristiger Anleger kauft für ein späteres Sparziel. Ein Unternehmen kann einen Vertrag nutzen, um das Preisrisiko eines geplanten Einkaufs abzusichern. Ein kurzfristiger Trader handelt eine erwartete Preisbewegung. Diese Ziele unterscheiden sich, obwohl sich die Beteiligten am selben Markt treffen können.",
      "Von einem einzelnen Kauf kannst du das Motiv des Käufers nicht sicher ablesen. Die sichtbare Transaktion zeigt den Austausch; sie verrät nicht automatisch Zeithorizont, Gesamtportfolio oder persönliche Absicht."
    ],
    "columns": [
      {
        "title": "Mögliche Ziele",
        "tone": "neutral",
        "points": [
          "Vermögen über Zeit anlegen.",
          "Ein bestehendes Risiko absichern."
        ]
      },
      {
        "title": "Was der einzelne Trade zeigt",
        "tone": "positive",
        "points": [
          "Instrument, Menge und Ausführungspreis.",
          "Das persönliche Motiv bleibt oft unbekannt."
        ]
      }
    ],
    "prompt": "Beweist ein einzelner Kauf, dass der Käufer auf den nächsten Preisanstieg spekuliert?",
    "answers": [
      {
        "label": "Ja, jeder Kauf ist derselbe kurzfristige Plan.",
        "explanation": "Die Beteiligten können unterschiedliche Horizonte und Bedürfnisse haben."
      },
      {
        "label": "Ja, der Kauf verrät das gesamte Portfolio.",
        "explanation": "Eine Transaktion zeigt nicht die übrigen Positionen."
      },
      {
        "label": "Nein, er kann auch andere Ziele verfolgen.",
        "explanation": "Richtig: Investieren, Absichern und Spekulieren sind unterschiedliche mögliche Gründe."
      }
    ],
    "correct": 2,
    "rule": "Ein sichtbarer Trade verrät nicht den vollständigen Plan dahinter."
  },
  {
    "title": "Absichern und Spekulieren unterscheiden",
    "summary": "Die Position gehört zum Gesamtzusammenhang.",
    "paragraphs": [
      "Absichern heißt, ein schon vorhandenes wirtschaftliches Risiko durch eine weitere Position zu verändern. Spekulieren heißt hier, ein Preisrisiko gezielt einzugehen, um von einer erwarteten Veränderung zu profitieren. Dieselbe Vertragsart kann für beide Zwecke verwendet werden.",
      "Ein Produzent fürchtet sinkende Verkaufspreise seiner Ware und vereinbart einen späteren Verkaufspreis. Ein anderer Händler besitzt diese Ware nicht und handelt denselben Vertrag wegen seiner Preisprognose. Die äußere Order kann ähnlich sein, ihr Zusammenhang ist verschieden.",
      "Eine Absicherung entfernt nicht unbedingt alle Risiken. Menge, Zeitpunkt und Vertragsbedingungen können vom tatsächlichen Geschäft abweichen. Für diese erste Lektion zählt: Bewerte das Motiv im Zusammenhang mit dem bereits vorhandenen Risiko."
    ],
    "columns": [
      {
        "title": "Absicherung",
        "tone": "neutral",
        "points": [
          "Ein anderes Geschäft erzeugt bereits Risiko.",
          "Die zusätzliche Position soll dieses Risiko verändern."
        ]
      },
      {
        "title": "Spekulation",
        "tone": "positive",
        "points": [
          "Eine Preisbewegung soll Gewinn bringen.",
          "Die Position geht dafür bewusst Preisrisiko ein."
        ]
      }
    ],
    "prompt": "Was macht eine Position in diesem Beispiel zur Absicherung?",
    "answers": [
      {
        "label": "Ihr Zusammenhang mit einem schon bestehenden wirtschaftlichen Risiko.",
        "explanation": "Richtig: Entscheidend ist der Gesamtzusammenhang, nicht bloß der Name des Vertrags."
      },
      {
        "label": "Dass sie garantiert ohne Verlust endet.",
        "explanation": "Auch eine Absicherung kann Kosten, Verluste und verbleibende Risiken besitzen."
      },
      {
        "label": "Dass sie auf einem Chart dargestellt werden kann.",
        "explanation": "Das gilt ebenso für spekulative Positionen."
      }
    ],
    "correct": 0,
    "rule": "Der Zweck einer Position ergibt sich aus ihrem Zusammenhang."
  },
  {
    "title": "Für jeden ausgeführten Kauf gibt es eine Gegenseite",
    "summary": "Ausführungen brauchen passende Angebote.",
    "paragraphs": [
      "Ein Handel kommt zustande, wenn passende Kauf- und Verkaufsbedingungen zusammenfinden. Zu jeder ausgeführten gekauften Einheit gehört eine verkaufte Einheit. Trotzdem kann sich der Preis bewegen: Nicht alle Beteiligten akzeptieren jeden Preis gleich bereitwillig.",
      "Eine Verkäuferin bietet zwei Einheiten für je 100 an. Ein Käufer akzeptiert diesen Preis für zwei Einheiten. Es werden zwei gekauft und zwei verkauft. Ob dafür ein Käufer auf zwei Verkäufer oder zwei Käufer auf einen Verkäufer treffen, sagt die bloße Stückzahl nicht.",
      "Die Anzahl gekaufter und verkaufter Einheiten erklärt daher allein keine Preisrichtung. Interessant wird, welche Seite verfügbare Preise akzeptiert und welche Angebote auf den nächsten Niveaus noch vorhanden sind."
    ],
    "columns": [
      {
        "title": "Ausgeführte Menge",
        "tone": "neutral",
        "points": [
          "Zwei gekaufte Einheiten.",
          "Dieselben zwei Einheiten werden verkauft."
        ]
      },
      {
        "title": "Zahl der Personen",
        "tone": "positive",
        "points": [
          "Ein oder mehrere Käufer sind möglich.",
          "Ein oder mehrere Verkäufer sind möglich."
        ]
      }
    ],
    "prompt": "Was gilt für die ausgeführten Einheiten?",
    "answers": [
      {
        "label": "Steigende Preise benötigen mehr gekaufte als verkaufte Einheiten.",
        "explanation": "Ein ausgeführter Austausch hat für dieselbe Einheit beide Seiten."
      },
      {
        "label": "Die gekaufte und verkaufte Menge stimmen überein.",
        "explanation": "Richtig: Die Zahl der beteiligten Personen kann dabei unterschiedlich sein."
      },
      {
        "label": "Es müssen genau gleich viele Personen beteiligt sein.",
        "explanation": "Eine größere Order kann mehreren Gegenparteien gegenüberstehen."
      }
    ],
    "correct": 1,
    "rule": "Gleiche gehandelte Mengen bedeuten nicht gleiche Bereitschaft."
  },
  {
    "title": "Der letzte Preis ist ein vergangener Handel",
    "summary": "Letzter Kurs und nächstes Angebot.",
    "paragraphs": [
      "Wenn ein Bildschirm den letzten gehandelten Preis zeigt, beschreibt er einen bereits erfolgten Austausch. Er garantiert nicht, dass du jetzt zum gleichen Preis handeln kannst. Angebote können inzwischen verändert oder aufgebraucht sein.",
      "Der letzte Trade fand zu 100 statt. Aktuell bietet ein Käufer 99, während eine Verkäuferin 101 verlangt. In diesem vereinfachten Moment gibt es keinen passenden sofort verfügbaren Handel zu 100, nur weil dieser Wert zuletzt angezeigt wurde.",
      "Unterscheide gehandelten Preis, aktuell angezeigte Angebote und tatsächliche Ausführung. Welche Zahl eine Plattform hervorhebt, muss man an der Beschriftung erkennen; nicht jede große Zahl bedeutet denselben Preisbezug."
    ],
    "columns": [
      {
        "title": "Vergangen",
        "tone": "neutral",
        "points": [
          "Letzter Trade: 100.",
          "Dieser Austausch ist bereits geschehen."
        ]
      },
      {
        "title": "Aktuell im Beispiel",
        "tone": "positive",
        "points": [
          "Ein Käufer bietet 99.",
          "Eine Verkäuferin verlangt 101."
        ]
      }
    ],
    "prompt": "Garantiert der letzte Trade 100 einen jetzigen Kauf zu 100?",
    "answers": [
      {
        "label": "Ja, die nächste Order muss denselben Preis erhalten.",
        "explanation": "Verfügbare Angebote können sich inzwischen verändert haben."
      },
      {
        "label": "Ja, unabhängig von der gewünschten Menge.",
        "explanation": "Auch die verfügbare Menge beeinflusst eine Ausführung."
      },
      {
        "label": "Nein, die aktuellen Angebote können anders liegen.",
        "explanation": "Richtig: Ein vergangener Ausführungspreis ist keine aktuelle Füllungszusage."
      }
    ],
    "correct": 2,
    "rule": "Der letzte Kurs ist keine Garantie für deinen nächsten Preis."
  },
  {
    "title": "Geld und Brief: zwei Seiten des Angebots",
    "summary": "Bid und Ask einfach übersetzen.",
    "paragraphs": [
      "Der Geldkurs, auch Bid genannt, ist ein angezeigtes Kaufangebot. Der Briefkurs, auch Ask genannt, ist ein angezeigtes Verkaufsangebot. In unserem einfachen Orderbuch ist der beste Bid das höchste Kaufangebot und der beste Ask das niedrigste Verkaufsangebot.",
      "Ein Käufer bietet 99, eine Verkäuferin verlangt 101. Wer sofort kaufen möchte, muss in diesem vereinfachten Beispiel ein verfügbares Verkaufsangebot akzeptieren. Wer sofort verkaufen möchte, trifft auf ein verfügbares Kaufangebot.",
      "Die Wörter beschreiben die Sicht des Angebots: Bid bietet zu kaufen, Ask bietet zu verkaufen. Lies Menge und Preis zusammen. Angezeigte Angebote können verschwinden, bevor deine Order sie tatsächlich erreicht."
    ],
    "columns": [
      {
        "title": "Geld / Bid",
        "tone": "neutral",
        "points": [
          "Kaufangebot: 99.",
          "Hier steht die kaufbereite Seite."
        ]
      },
      {
        "title": "Brief / Ask",
        "tone": "positive",
        "points": [
          "Verkaufsangebot: 101.",
          "Hier steht die verkaufsbereite Seite."
        ]
      }
    ],
    "prompt": "Welche Seite akzeptiert ein sofortiger Käufer im Beispiel?",
    "answers": [
      {
        "label": "Das verfügbare Verkaufsangebot bei 101.",
        "explanation": "Richtig: Der Käufer braucht jemanden, der ihm verkauft."
      },
      {
        "label": "Sein eigenes Kaufangebot bei 99.",
        "explanation": "Ein Kaufangebot ist noch kein Verkäufer zu diesem Preis."
      },
      {
        "label": "Immer den letzten Kurs, unabhängig vom Ask.",
        "explanation": "Der letzte Kurs und das aktuelle Verkaufsangebot sind verschieden."
      }
    ],
    "correct": 0,
    "rule": "Sofort kaufen trifft auf die verkaufsbereite Seite."
  },
  {
    "title": "Der Spread ist der Abstand zwischen den Seiten",
    "summary": "101 minus 99 ergibt zwei.",
    "paragraphs": [
      "Die Geld-Brief-Spanne heißt Spread. In unserem Beispiel berechnen wir sie als besten Ask minus besten Bid. Sie beschreibt den Abstand zwischen den beiden Angeboten, nicht den gesamten Gewinn oder Verlust einer Strategie.",
      "Bei Bid 99 und Ask 101 beträgt der Spread zwei Preiseinheiten. Wenn jemand eine Einheit sofort zu 101 kauft und bei unveränderten Angeboten sofort zu 99 verkauft, verliert er dadurch zwei Einheiten vor zusätzlichen Gebühren.",
      "Das ist eine vereinfachte Rechnung mit unveränderten Angeboten und genügend Menge. In Wirklichkeit können Preisbewegung, Gebühren und abweichende Ausführung hinzukommen. Merke dir zuerst die Differenz und die Richtung des Austauschs."
    ],
    "columns": [
      {
        "title": "Angebote",
        "tone": "neutral",
        "points": [
          "Bid 99.",
          "Ask 101."
        ]
      },
      {
        "title": "Gedachter sofortiger Rücktausch",
        "tone": "positive",
        "points": [
          "Kauf zu 101.",
          "Verkauf zu 99: Differenz −2."
        ]
      }
    ],
    "prompt": "Wie groß ist der Spread in diesem Beispiel?",
    "answers": [
      {
        "label": "100, weil das die Mitte ist.",
        "explanation": "100 ist hier der Mittelwert der zwei Angebote, nicht ihr Abstand."
      },
      {
        "label": "Zwei Preiseinheiten.",
        "explanation": "Richtig: 101 minus 99 ergibt zwei."
      },
      {
        "label": "Null, weil Kauf und Verkauf gleich viele Einheiten haben.",
        "explanation": "Die Menge kann gleich sein, obwohl die Preise verschieden sind."
      }
    ],
    "correct": 1,
    "rule": "Spread und zusätzliche Gebühren sind getrennte Größen."
  },
  {
    "title": "Warum der Preis beim Kaufen höher werden kann",
    "summary": "Verfügbare Menge auf Preisstufen.",
    "paragraphs": [
      "Ein einzelnes Preisniveau besitzt nicht unbegrenzt verfügbare Menge. Wenn ein Käufer mehr Einheiten sofort möchte, als dort angeboten werden, kann der nächste Teil auf einer höheren Stufe gehandelt werden. So kann der letzte Preis steigen, obwohl jede Einheit weiterhin Käufer und Verkäufer besitzt.",
      "In unserem vereinfachten Verkaufsangebot liegen zwei Einheiten zu 100 und zwei zu 101. Ein sofortiger Kauf von drei Einheiten nimmt zwei zu 100 und eine zu 101. Der Durchschnittspreis beträgt 301 geteilt durch drei, also rund 100,33.",
      "Das Beispiel unterstellt unveränderte Angebote ohne zusätzliche Gebühren. Es zeigt den Unterschied zwischen erster verfügbarer Stufe, durchschnittlichem Ausführungspreis und letztem gehandelten Preis. Reale Ausführungen müssen anhand ihrer eigenen Daten geprüft werden."
    ],
    "columns": [
      {
        "title": "Verkaufsangebote",
        "tone": "neutral",
        "points": [
          "2 Einheiten zu 100.",
          "2 Einheiten zu 101."
        ]
      },
      {
        "title": "Kauf von 3 Einheiten",
        "tone": "positive",
        "points": [
          "2 × 100 + 1 × 101 = 301.",
          "Durchschnitt ≈ 100,33; letzter Teil bei 101."
        ]
      }
    ],
    "prompt": "Warum landet die dritte Einheit hier bei 101?",
    "answers": [
      {
        "label": "Weil dafür keine Verkäufer gebraucht werden.",
        "explanation": "Auch die dritte Einheit wird von einer Gegenpartei verkauft."
      },
      {
        "label": "Weil der Durchschnittspreis immer der höchste Preis ist.",
        "explanation": "Der Durchschnitt aus den drei Ausführungen liegt zwischen den Stufen."
      },
      {
        "label": "Zu 100 sind nur zwei Einheiten verfügbar.",
        "explanation": "Richtig: Die nächste verfügbare Stufe liefert die zusätzliche Einheit."
      }
    ],
    "correct": 2,
    "rule": "Preis und verfügbare Menge gehören zusammen."
  },
  {
    "title": "Börse und Broker haben verschiedene Aufgaben",
    "summary": "Handelsplatz und Zugang unterscheiden.",
    "paragraphs": [
      "Die Börse organisiert einen Handelsplatz mit definierten Regeln. Ein Broker vermittelt seinem Kunden Zugang beziehungsweise führt dessen Aufträge im vorgesehenen Rahmen aus. Die Oberfläche auf deinem Handy und der Ort, an dem die Order gehandelt wird, müssen daher nicht identisch sein.",
      "Du gibst einen Auftrag in einer Brokeroberfläche ein. Der Auftrag kann anschließend an einen Handelsplatz geleitet werden. Manche Anbieter übernehmen je nach Geschäftsmodell zusätzlich andere Rollen; der Name der App erklärt diese Rollen nicht vollständig.",
      "Für den Anfang trenne Zugang, Handelsplatz und Gegenpartei. Später prüfen wir Orderwege genauer. Welche Funktion ein konkreter Anbieter ausübt, muss aus dessen aktueller Ausführungsbeschreibung hervorgehen."
    ],
    "columns": [
      {
        "title": "Broker",
        "tone": "neutral",
        "points": [
          "Kundenzugang und Auftragsabwicklung.",
          "Die sichtbare Handelsoberfläche kann von ihm kommen."
        ]
      },
      {
        "title": "Handelsplatz",
        "tone": "positive",
        "points": [
          "Organisiert das Zusammenführen von Handelsinteressen.",
          "Hat Regeln für den jeweiligen Handel."
        ]
      }
    ],
    "prompt": "Sind Brokeroberfläche und Börse automatisch dasselbe?",
    "answers": [
      {
        "label": "Nein, Zugang und Handelsplatz sind verschiedene Funktionen.",
        "explanation": "Richtig: Ein Auftrag kann über die Oberfläche an einen anderen Ort geleitet werden."
      },
      {
        "label": "Ja, jeder Bildschirm ist selbst eine Börse.",
        "explanation": "Eine Oberfläche ist nicht automatisch ein organisierter Handelsplatz."
      },
      {
        "label": "Eine Order hat grundsätzlich nie eine Gegenpartei.",
        "explanation": "Eine Ausführung setzt einen passenden Austausch voraus."
      }
    ],
    "correct": 0,
    "rule": "Die Oberfläche ist nicht automatisch der Handelsplatz."
  },
  {
    "title": "Market Maker: Angebote sind eine Dienstleistung",
    "summary": "Handel auf eigene Rechnung.",
    "paragraphs": [
      "Ein Market Maker stellt Kauf- und Verkaufsangebote und kann bei einem Handel selbst Gegenpartei werden. Das unterscheidet diese Rolle vom bloßen Vermitteln fremder Aufträge. Ein Unternehmen kann unterschiedliche Rollen übernehmen; die Rollen müssen trotzdem getrennt beschrieben werden.",
      "Im Beispiel bietet ein Händler an, zu 99 zu kaufen und zu 101 zu verkaufen. Die Spanne kann zu seinen Einnahmen beitragen. Wenn sich der Preis gegen seinen Bestand bewegt, entsteht aber Risiko. Ein sichtbarer Spread ist deshalb kein garantierter Reingewinn.",
      "Begriffe wie Market Maker, Broker und Börse erklären Funktionen. Sie sind keine automatischen Qualitätsurteile über Personen oder Anbieter. Für diesen Einstieg genügt: Vermitteln und selbst handeln sind unterschiedliche Aufgaben."
    ],
    "columns": [
      {
        "title": "Vermitteln",
        "tone": "neutral",
        "points": [
          "Fremde Handelswünsche zusammenbringen.",
          "Keine automatische eigene Gegenposition."
        ]
      },
      {
        "title": "Angebote auf eigene Rechnung",
        "tone": "positive",
        "points": [
          "Selbst zu einem Preis kaufen oder verkaufen.",
          "Bestands- und Preisrisiko können entstehen."
        ]
      }
    ],
    "prompt": "Warum ist der Spread kein garantierter Gewinn des Market Makers?",
    "answers": [
      {
        "label": "Weil er nie selbst Gegenpartei werden kann.",
        "explanation": "Gerade das Handeln auf eigene Rechnung gehört zu dieser Rolle."
      },
      {
        "label": "Bestandsrisiken und weitere Kosten können dagegen wirken.",
        "explanation": "Richtig: Zwei Angebote sind noch kein abgeschlossener risikofreier Kreislauf."
      },
      {
        "label": "Weil Bid und Ask immer identisch sein müssen.",
        "explanation": "Im Beispiel unterscheiden sich die beiden Preise ausdrücklich."
      }
    ],
    "correct": 1,
    "rule": "Eine Handelsspanne ist keine sichere Gewinnzusage."
  },
  {
    "title": "Dein erster Marktcheck ohne Chartwissen",
    "summary": "Instrument, Bezug, Angebot und Menge.",
    "paragraphs": [
      "Für einen ersten Marktcheck brauchst du noch keine Trendlinie. Du musst verstehen, welches Produkt du siehst, was die angezeigte Zahl bedeutet und welche Angebote für deine gewünschte Menge verfügbar sind. Erst danach wird eine Preisbewegung sinnvoll einzuordnen.",
      "Der letzte Trade zeigt 50. Aktuell liegen Bid 49 und Ask 51 vor; am Ask steht eine Einheit bereit. Du möchtest zwei kaufen. Der letzte Kurs und die erste Angebotsstufe reichen deshalb nicht aus, um einen sicheren Gesamtpreis für deine zwei Einheiten zu behaupten.",
      "Gehe in dieser Reihenfolge vor: Instrument erkennen, Preisbezug lesen, Angebotsseite prüfen, Menge berücksichtigen. Das nächste Kapitel vertieft Handelsplätze, außerbörslichen Handel und den Weg einer Order. Die übrigen Kapitel werden nach und nach ergänzt."
    ],
    "columns": [
      {
        "title": "Schon bekannt",
        "tone": "neutral",
        "points": [
          "Letzter Trade 50.",
          "Bid 49; Ask 51 mit einer Einheit."
        ]
      },
      {
        "title": "Noch nicht zugesichert",
        "tone": "positive",
        "points": [
          "Der Ausführungspreis für beide gewünschten Einheiten.",
          "Weitere Angebote und tatsächliche Füllung."
        ]
      }
    ],
    "prompt": "Was fehlt für eine sichere Aussage über den Kauf von zwei Einheiten?",
    "answers": [
      {
        "label": "Nur eine bestimmte Chartfarbe.",
        "explanation": "Kerzenfarben ersetzen keine Mengen- und Ausführungsinformation."
      },
      {
        "label": "Nichts, beide müssen zu 50 gekauft werden.",
        "explanation": "Der letzte Kurs ist kein Angebot für die neue Order."
      },
      {
        "label": "Weitere verfügbare Menge und die tatsächlichen Ausführungsdaten.",
        "explanation": "Richtig: Eine Einheit am ersten Ask beschreibt nicht die gesamte gewünschte Menge."
      }
    ],
    "correct": 2,
    "rule": "Erst Produkt und Ausführung verstehen, dann den Chart beurteilen."
  }
];
export const marketBasicsChapterOneLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `how-exchanges-work.chapter-01.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 1 · Handel, Preise und Teilnehmer',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Trading von null · Kapitel 1', title: draft.title,
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
