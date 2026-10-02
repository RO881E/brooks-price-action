import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Was wird an einem Finanzmarkt gehandelt?",
    "summary": "Ein Markt bringt Handelswünsche zusammen.",
    "paragraphs": [
      "Stell dir einen Marktplatz vor. Eine Person möchte kaufen, eine andere verkaufen. Auf einem Finanzmarkt werden zum Beispiel Unternehmensanteile oder Verträge gehandelt. Das gehandelte Produkt nennt man auch Finanzinstrument. Ein Chart ist eine Grafik, die zeigt, wie sich sein Preis verändert.",
      "Eine Aktie ist ein Anteil an einem Unternehmen. Bei einer Anleihe verleihst du Geld nach festgelegten Regeln. Ein Future ist ein Vertrag für einen späteren Austausch oder eine Geldzahlung. Für die jeweilige Art von Future gelten weitgehend einheitliche Bedingungen. Das heißt standardisiert. Ähnliche Preisgrafiken können also ganz verschiedene Produkte zeigen.",
      "Frage zuerst: Was kaufe ich hier eigentlich? Jedes Produkt bringt eigene Rechte mit. Manche Verträge bringen auch Pflichten mit. Zum Beispiel kann eine spätere Zahlung nötig sein. Der Chart allein erklärt diese Regeln nicht. Die Produktarten lernst du in Kapitel 2 genauer kennen."
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
      "Du kaufst eine vorhandene Aktie von einer anderen Person. Dein Geld erhält diese Person. Die Aktie gehört danach dir. Das Unternehmen bekommt durch diesen Weiterverkauf nicht automatisch neues Geld. Diesen Handel nennt man Sekundärmarkt: Bereits vorhandene Wertpapiere wechseln den Besitzer.",
      "Ein Unternehmen kann auch neue Aktien ausgeben. So kann es Geld für seine Arbeit sammeln. Das nennt man Primärmarkt. Stell dir eine Konzertkarte vor: Beim ersten Verkauf erhält der Veranstalter Geld. Beim Weiterverkauf bekommt der bisherige Kartenbesitzer den Kaufpreis.",
      "Der Vergleich erklärt nur den Verkaufsweg. Eine Aktie ist natürlich keine Eintrittskarte. Sie gibt dir einen Unternehmensanteil mit eigenen Rechten. Merke dir die zwei Vorgänge: Ein neues Wertpapier ausgeben und ein vorhandenes weiterverkaufen. Nicht jeder Aktienkauf finanziert das Unternehmen direkt."
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
      "Menschen handeln aus verschiedenen Gründen. Manche sparen für eine spätere Ausgabe. Andere brauchen ihr Geld schon heute. Wieder andere wollen das Risiko aus einem bestehenden Geschäft kleiner machen. Nicht jeder versucht, den nächsten kleinen Preissprung vorherzusagen.",
      "Ein Anleger kauft für ein Sparziel in vielen Jahren. Ein Unternehmen nutzt einen Vertrag gegen mögliche Preisänderungen beim nächsten Einkauf. Ein kurzfristiger Trader versucht, aus einer baldigen Preisbewegung Gewinn zu erzielen. Trader ist das englische Wort für Händler. Diese Personen können trotzdem am selben Markt handeln.",
      "Ein sichtbarer Kauf verrät dir das Ziel des Käufers nicht sicher. Du siehst vielleicht Produkt, Menge und Preis. Du weißt aber nicht automatisch, wie lange die Person halten möchte. Auch ihre anderen Anlagen kennst du meist nicht. Der einzelne Trade, also das ausgeführte Geschäft, zeigt nur einen Teil."
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
      "Absichern heißt: Ein Risiko besteht bereits. Eine weitere Anlage oder ein Vertrag soll dagegen wirken. Spekulieren heißt hier: Jemand geht bewusst ein Preisrisiko ein, um Gewinn zu erzielen. Die gleiche Vertragsart kann für beide Zwecke verwendet werden. Ein gehaltenes Geschäft mit seinen Rechten und Pflichten nennt man Position.",
      "Ein Produzent will später seine Ware verkaufen. Er fürchtet, dass ihr Preis bis dahin fällt. Deshalb vereinbart er heute einen späteren Verkaufspreis. Ein anderer Händler besitzt die Ware nicht. Er handelt einen ähnlichen Vertrag, weil er eine Preisbewegung erwartet. Die Aufträge sehen ähnlich aus. Der Anlass ist verschieden.",
      "Auch eine Absicherung kann Kosten oder Verluste verursachen. Vielleicht passen Menge, Termin oder Ware nicht genau zum Vertrag. Dann bleibt ein Teil des Risikos bestehen. Frage deshalb: Welches Risiko gab es vorher? Wie soll der zusätzliche Vertrag darauf wirken? Der Vertragsname allein beantwortet das nicht."
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
        "label": "Sie soll einem Risiko entgegenwirken, das schon vorher bestand.",
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
      "Bei einem Trade passen ein Kaufwunsch und ein Verkaufswunsch zusammen. Für jede gekaufte Einheit wird dieselbe Einheit verkauft. Der Preis kann sich trotzdem ändern. Denn nicht jeder möchte zu jedem Preis handeln. Die angebotenen Mengen sind ebenfalls begrenzt.",
      "Eine Verkäuferin bietet zwei Einheiten für jeweils 100 an. Ein Käufer akzeptiert das Angebot. Zwei Einheiten werden gekauft und dieselben zwei verkauft. Es könnten auch zwei Käufer je eine Einheit nehmen. Oder ein Käufer kauft je eine von zwei Verkäuferinnen.",
      "Die ausgeführten Mengen sind auf beiden Seiten gleich. Die Zahl der Personen muss nicht gleich sein. Aus der Stückzahl allein folgt deshalb keine Preisrichtung. Dafür ist wichtig, welche Preise jemand akzeptiert. Ebenso wichtig ist, wie viel zu diesen Preisen noch verfügbar ist."
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
      "Der letzte gehandelte Preis gehört zu einem vergangenen Geschäft. Er sagt: Zu diesem Preis fand der bisher letzte Trade statt. Er verspricht dir keinen neuen Kauf zum selben Preis. Inzwischen können andere Angebote gelten.",
      "Der letzte Trade war bei 100. Nun bietet ein Käufer 99. Eine Verkäuferin verlangt 101. Ein Angebot für einen sofortigen Kauf zu 100 gibt es in diesem einfachen Fall nicht. Die frühere Zahl schafft kein neues Angebot.",
      "Unterscheide drei Dinge: einen vergangenen Trade, ein aktuelles Angebot und deinen tatsächlich ausgeführten Auftrag. Ausführung heißt: Der Handel hat wirklich stattgefunden. Lies die Beschriftung der Anzeige. Eine große Zahl auf dem Bildschirm kann verschiedene Preisarten meinen."
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
      "Der Geldkurs heißt auf Englisch Bid. Er zeigt ein Kaufangebot. Der Briefkurs heißt Ask und zeigt ein Verkaufsangebot. Im einfachen Orderbuch ist der beste Bid das höchste Kaufgebot. Der beste Ask ist der niedrigste angebotene Verkaufspreis. Das Orderbuch ist eine Übersicht über wartende Aufträge.",
      "Ein Käufer bietet 99. Eine Verkäuferin verlangt 101. Möchtest du sofort kaufen, brauchst du eine verkaufsbereite Person. Im Beispiel akzeptierst du dafür das Angebot bei 101. Möchtest du sofort verkaufen, brauchst du einen Käufer. Dessen Angebot liegt hier bei 99.",
      "Die Wörter beschreiben die Angebotsseite: Bid will kaufen, Ask will verkaufen. Achte auch auf die angebotene Menge. Ein Preis gilt nicht automatisch für unbegrenzt viele Einheiten. Angebote können außerdem verschwinden, bevor dein Auftrag ankommt."
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
      "Der Abstand zwischen bestem Ask und bestem Bid heißt Spread. Du rechnest: Ask minus Bid. Das Minuszeichen bedeutet, dass du den Bid vom Ask abziehst. Der Spread beschreibt zwei Angebote. Er ist nicht der gesamte Gewinn oder Verlust einer Handelsidee.",
      "Im Beispiel steht der Bid bei 99 und der Ask bei 101. Also: 101 − 99 = 2. Du kaufst eine Einheit sofort für 101. Danach verkaufst du sie bei unveränderten Angeboten sofort für 99. Du bekommst 2 weniger zurück, als du bezahlt hast.",
      "Wir nehmen für diese Rechnung genug Menge und unveränderte Angebote an. Gebühren sind noch nicht enthalten. In echten Geschäften können Preise wechseln und weitere Kosten entstehen. Zuerst sollst du nur verstehen: Sofort kaufen und sofort verkaufen können verschiedene Preise haben."
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
      "Ein günstiger Preis gilt oft nur für eine begrenzte Menge. Möchtest du mehr sofort kaufen, musst du vielleicht das nächste Angebot nutzen. Dieses kann teurer sein. So kann der letzte Trade steigen, obwohl jede Einheit weiterhin gekauft und verkauft wird.",
      "Hier gibt es zwei Einheiten zu 100 und zwei zu 101. Du kaufst drei. Zwei kosten zusammen 200. Die dritte kostet 101. Insgesamt bezahlst du 301. Für den Durchschnitt teilst du durch drei: 301 / 3 ≈ 100,33. Das Zeichen ≈ bedeutet ungefähr gleich.",
      "Die Rechnung nimmt unveränderte Angebote an und enthält keine Gebühren. Der erste Preis war 100. Dein Durchschnitt ist etwa 100,33. Der letzte Teil des Kaufs liegt bei 101. Das sind drei verschiedene Angaben. Prüfe bei einem echten Kauf die tatsächlichen Ausführungen."
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
      "Eine Börse organisiert einen Handelsplatz mit festen Regeln. Ein Broker gibt Kunden Zugang und bearbeitet ihre Aufträge. Broker und Börse übernehmen also verschiedene Aufgaben. Die App auf deinem Handy kann vom Broker kommen. Der eigentliche Handel kann woanders stattfinden.",
      "Du gibst einen Auftrag in der App ein. Der Broker kann ihn an einen Handelsplatz weiterleiten. Manche Anbieter übernehmen mehrere Aufgaben. Der Appname allein erklärt deshalb nicht den vollständigen Weg. Die Gegenpartei ist die Person oder Stelle auf der anderen Seite deines Geschäfts.",
      "Trenne Zugang, Handelsplatz und Gegenpartei. Wer ermöglicht dir den Auftrag? Wo wird gehandelt? Wer kauft von dir oder verkauft an dich? Die genaue Rolle eines Anbieters steht in seinen aktuellen Ausführungsbedingungen. Kapitel 4 erklärt die möglichen Wege genauer."
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
        "label": "Nein, der Zugang und der Handelsplatz haben verschiedene Aufgaben.",
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
      "Ein Market Maker stellt Kauf- und Verkaufsangebote. Der englische Begriff bezeichnet hier einen Händler, der andere mit eigenen Angeboten handeln lässt. Er kann selbst deine Gegenpartei werden. Er handelt dann für seinen eigenen Bestand. Bestand meint seine gerade gehaltenen Anlagen oder Positionen.",
      "Im Beispiel kauft der Händler zu 99 und bietet einen Verkauf zu 101 an. Gelingt beides, entsteht eine Differenz von 2 vor Kosten. Doch vielleicht fällt der Preis, bevor er wieder verkauft. Dann kann er verlieren. Zwei Angebote sind noch kein sicherer Gewinn.",
      "Ein Broker vermittelt Aufträge. Ein Market Maker bietet eigene Geschäfte an. Eine Börse organisiert den Handelsplatz. Eine Firma kann mehrere dieser Aufgaben übernehmen. Die Bezeichnungen erklären ihre Rollen. Sie sagen allein nicht, ob die Firma gute Preise bietet."
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
        "label": "Der gehaltene Bestand kann an Wert verlieren. Dazu können weitere Kosten kommen.",
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
      "Für deinen ersten Marktcheck brauchst du noch keine Linien im Chart. Prüfe zuerst das Produkt. Dann lies, welchen Preis die Anzeige meint. Suche danach die passende Angebotsseite und die verfügbare Menge. So wird klarer, was ein möglicher Handel bedeuten würde.",
      "Der letzte Trade lag bei 50. Nun ist der Bid 49 und der Ask 51. Am Ask steht nur eine Einheit bereit. Du möchtest zwei kaufen. Der letzte Trade sagt nicht, dass du zu 50 kaufen kannst. Die einzelne Einheit bei 51 sagt auch noch nichts über den Preis der zweiten.",
      "Gehe Schritt für Schritt vor: Produkt, Preisart, Angebotsseite, Menge. Fehlt eine Angabe, bleibt eine Frage offen. In Kapitel 2 lernst du die Produktarten genauer kennen: Aktien, Anleihen, Fonds, Währungen und Derivate. Derivate sind Verträge, die sich auf etwas anderes beziehen, etwa einen Aktienpreis."
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
