import type { Lesson } from '../../types';

// Eigene Handelsplatzfälle; Zahlen sind vereinfachte Beispiele, keine Live-Angebote.
const drafts = [
  {
    "title": "Die App ist dein Zugang, nicht automatisch der Handelsplatz",
    "summary": "Oberfläche, Auftrag und Ausführung unterscheiden.",
    "paragraphs": [
      "Du öffnest eine Handelsapp und siehst eine Aktie. Die App zeigt Informationen und nimmt deinen Auftrag entgegen. Das System, in dem dein Auftrag mit einer passenden anderen Seite zusammenkommt, heißt Handelsplatz. Die App und dieser Handelsplatz müssen nicht dasselbe sein.",
      "In unserem Beispiel leitet die Brokeroberfläche Miriams Auftrag an Platz A weiter. Die Preisgrafik nutzt dagegen Daten von Platz B. Eine Preisgrafik heißt auch Chart. Auftrag und Chart können also verschiedene Wege haben. Die Angaben müssen verständlich beschriftet sein, damit du das erkennen kannst.",
      "Prüfe vier Fragen: Wer betreibt die Oberfläche? Woher kommen die Daten? Wohin wird der Auftrag geschickt? Wo kommt das Geschäft tatsächlich zustande? Die Ausführungsbestätigung meldet den tatsächlichen Abschluss. Sie beantwortet eine andere Frage als der Name über dem Chart."
    ],
    "columns": [
      {
        "title": "Sichtbare Oberfläche",
        "tone": "neutral",
        "points": [
          "Informationen und Auftragseingabe.",
          "Daten können von einem bestimmten Platz stammen."
        ]
      },
      {
        "title": "Tatsächliches Geschäft",
        "tone": "positive",
        "points": [
          "Auftrag wird an einen Ausführungsort geleitet.",
          "Bestätigung nennt die erfolgte Ausführung."
        ]
      }
    ],
    "prompt": "Beweist der Name auf dem Chart den Ausführungsort deines Auftrags?",
    "answers": [
      {
        "label": "Nein, Datenquelle und Ausführungsort müssen getrennt geprüft werden.",
        "explanation": "Richtig: Der Chart kann Daten eines anderen Platzes zeigen."
      },
      {
        "label": "Ja, jeder Auftrag wird zwingend dort ausgeführt.",
        "explanation": "Der Auftragsweg kann vom Datenweg abweichen."
      },
      {
        "label": "Ja, die App selbst ist immer die Börse.",
        "explanation": "Eine Oberfläche ist nicht automatisch ein Handelsplatz."
      }
    ],
    "correct": 0,
    "rule": "Zugang, Datenquelle und Ausführungsort getrennt lesen."
  },
  {
    "title": "Börsen: Handel nach festgelegten Regeln organisieren",
    "summary": "Die Regeln bestimmen das Zusammenkommen von Aufträgen.",
    "paragraphs": [
      "Eine Börse organisiert Handel nach festgelegten Regeln. Diese Regeln bestimmen zum Beispiel, wer teilnehmen darf und welche Produkte handelbar sind. Sie regeln auch, wie passende Aufträge zusammenkommen. Dieses Zusammenführen heißt Matching. Ein passender Auftrag kann so tatsächlich ausgeführt werden.",
      "Unser Platz erlaubt nur bestimmte Produkte und Mengen. Ein Klick macht ein dort nicht handelbares Produkt nicht handelbar. Auch ein angenommener Auftrag ist noch kein abgeschlossenes Geschäft. Dafür braucht es eine passende andere Seite und erfüllte Ausführungsbedingungen.",
      "Die Börse verkauft deshalb nicht automatisch selbst jedes Produkt. Im einfachen Orderbuchhandel treffen Aufträge verschiedener Teilnehmer aufeinander. Ein Orderbuch sammelt Kauf- und Verkaufsaufträge. Die Organisation kann je nach Platz anders aussehen. Kläre zuerst, was der Platz macht und wer dein Geschäftspartner ist."
    ],
    "columns": [
      {
        "title": "Organisation des Platzes",
        "tone": "neutral",
        "points": [
          "Handelbare Instrumente und Regeln.",
          "Zusammenführen passender Aufträge."
        ]
      },
      {
        "title": "Konkrete Transaktion",
        "tone": "positive",
        "points": [
          "Benötigt ausführbare Bedingungen.",
          "Eine passende kaufende und verkaufende Seite."
        ]
      }
    ],
    "prompt": "Ist eine angenommene Order bereits zwingend ausgeführt?",
    "answers": [
      {
        "label": "Ja, die Börse muss jedes Instrument selbst verkaufen.",
        "explanation": "Die organisatorische Rolle macht sie nicht automatisch zur Gegenseite."
      },
      {
        "label": "Nein, sie muss noch auf passende ausführbare Bedingungen treffen.",
        "explanation": "Richtig: Annahme und tatsächlicher Handel sind verschiedene Zustände."
      },
      {
        "label": "Ja, jedes beliebige Produkt ist an jedem Platz handelbar.",
        "explanation": "Die handelbaren Instrumente gehören zu den Regeln des Platzes."
      }
    ],
    "correct": 1,
    "rule": "Börsenregeln organisieren Handel, ersetzen aber keine passende Gegenseite."
  },
  {
    "title": "Elektronischer Handel braucht keinen gemeinsamen Raum",
    "summary": "Ein Marktplatz kann ein vernetztes System sein.",
    "paragraphs": [
      "Viele Handelsplätze arbeiten elektronisch. Teilnehmer senden ihre Aufträge über technische Verbindungen. Systeme prüfen und verarbeiten sie. Dafür müssen die Menschen nicht in einem gemeinsamen Börsensaal sitzen. Andere Handelsformen können Gespräche oder Verhandlungen nutzen. Der Handelsort ist also oft ein System statt eines Raums.",
      "Zwei Personen wohnen in verschiedenen Städten. Ihre Aufträge kommen im selben elektronischen System an. Dort werden passende Bedingungen nach den Regeln zusammengeführt. Die Entfernung allein verrät nicht, welcher Auftrag zuerst verarbeitet wird oder welchen Preis jemand erhält.",
      "Die Übertragung braucht Zeit. Senden, Empfangen, Annehmen und Ausführen sind verschiedene Schritte. Ausführen heißt, dass ein Geschäft zustande kommt. Die Bildschirmmeldung gesendet beweist deshalb noch keinen Handel. Prüfe, welchen Schritt eine Meldung tatsächlich bestätigt."
    ],
    "columns": [
      {
        "title": "Beim Teilnehmer",
        "tone": "neutral",
        "points": [
          "Auftrag eingeben und senden.",
          "Eine Verbindung übermittelt die Nachricht."
        ]
      },
      {
        "title": "Im Handelssystem",
        "tone": "positive",
        "points": [
          "Nachricht empfangen und Bedingungen prüfen.",
          "Passende Aufträge gegebenenfalls ausführen."
        ]
      }
    ],
    "prompt": "Was belegt die Meldung „gesendet“ allein?",
    "answers": [
      {
        "label": "Dass der Kauf bereits bezahlt und vollständig abgewickelt ist.",
        "explanation": "Senden ist nicht gleich Ausführen oder Abwickeln."
      },
      {
        "label": "Dass Käufer und Verkäufer im selben Raum sitzen.",
        "explanation": "Elektronischer Handel kann räumlich getrennte Teilnehmer verbinden."
      },
      {
        "label": "Dass der Auftrag gesendet wurde, nicht seine tatsächliche Ausführung.",
        "explanation": "Richtig: Weitere Verarbeitungsschritte können folgen."
      }
    ],
    "correct": 2,
    "rule": "Technische Übermittlung und ausgeführtes Geschäft unterscheiden."
  },
  {
    "title": "Dasselbe Wertpapier kann an mehreren Plätzen handeln",
    "summary": "Ein Instrument, unterschiedliche verfügbare Angebote.",
    "paragraphs": [
      "Dasselbe Wertpapier kann an mehreren Plätzen gehandelt werden. Seine Rechte ändern sich dadurch nicht automatisch. Die verfügbaren Preise und Mengen können aber verschieden sein. Auch Kosten und Handelsphasen können sich unterscheiden. Nicht jede Menge ist deshalb überall gleichzeitig zum selben Preis handelbar.",
      "Für unser identisches Wertpapier zeigt A ein Verkaufsangebot von 50,00 Euro. B zeigt zur selben Zeit 50,05 Euro. Für einen Vergleich brauchen wir auch die verfügbaren Mengen und die Kosten. Ein günstigeres Angebot hilft nur, wenn du es erreichen kannst und es noch verfügbar ist.",
      "Eine Wertpapierkennung hilft dir beim Erkennen. Prüfe trotzdem Produkt, Währung und Rechte. Ähnliche Namen können verschiedene Aktienarten oder Produkte meinen. Vergleiche nur wirklich passende Dinge. Erst dann lässt sich ein Preisunterschied sinnvoll beurteilen."
    ],
    "columns": [
      {
        "title": "Gleiches Instrument im Lernfall",
        "tone": "neutral",
        "points": [
          "Platz A: erster Ask 50,00 Euro.",
          "Platz B: erster Ask 50,05 Euro."
        ]
      },
      {
        "title": "Zusätzlich vergleichen",
        "tone": "positive",
        "points": [
          "Verfügbare Menge und Erreichbarkeit.",
          "Zeitbezug, Kosten und tatsächliche Ausführung."
        ]
      }
    ],
    "prompt": "Was folgt aus dem niedrigeren ersten Ask auf Platz A allein?",
    "answers": [
      {
        "label": "Noch nicht der günstigste Gesamtpreis für meine gewünschte Menge.",
        "explanation": "Richtig: Menge, Kosten und Zugriff fehlen noch."
      },
      {
        "label": "Dass ein anderes Unternehmen hinter der Aktie stehen muss.",
        "explanation": "Identische Rechte können an mehreren Plätzen gehandelt werden."
      },
      {
        "label": "Dass der Ask unbegrenzt für jede Menge verfügbar ist.",
        "explanation": "Das erste Preisniveau besitzt keine automatisch unbegrenzte Menge."
      }
    ],
    "correct": 0,
    "rule": "Identisches Instrument heißt nicht identische Ausführungsbedingungen."
  },
  {
    "title": "Nicht jeder Platz bietet jedes Instrument",
    "summary": "Produktart und Handelsorganisation zusammen prüfen.",
    "paragraphs": [
      "Nicht jeder Platz bietet jedes Produkt an. An einem Aktienhandelsplatz findest du andere Produkte als an einer Terminbörse. Ein Index ist eine Kennzahl. Ein Fondsanteil mit Indexbezug und ein Future auf den Index sind handelbare Produkte mit unterschiedlichen Regeln.",
      "Unser Platz A bietet Anteile eines Indexfonds an. Platz B bietet einen Index-Future. Beim Future sind die Bedingungen festgelegt, darunter Endtermin und Wert je Punkt. Die Kurslinien können ähnlich verlaufen. Trotzdem kaufst du bei A einen Fondsanteil und gehst bei B einen Vertrag ein.",
      "Auch ein Brokerzugang zu einem Platz gibt dir nicht automatisch Zugang zu jedem dort angebotenen Produkt. Das Angebot für dein Konto und die Auftragsbedingungen spielen ebenfalls mit. Prüfe deshalb gemeinsam, was du handeln möchtest und auf welchem Weg das möglich ist."
    ],
    "columns": [
      {
        "title": "Platz A im Beispiel",
        "tone": "neutral",
        "points": [
          "Anteile eines Indexfonds.",
          "Produktbedingungen des Fonds."
        ]
      },
      {
        "title": "Platz B im Beispiel",
        "tone": "positive",
        "points": [
          "Index-Future mit festgelegter Laufzeit.",
          "Vertragsgröße und Abrechnung des Futures."
        ]
      }
    ],
    "prompt": "Macht der gleiche Indexbezug Fondsanteil und Future austauschbar?",
    "answers": [
      {
        "label": "Ja, dann besitzen beide dieselben Rechte und dieselbe Laufzeit.",
        "explanation": "Fondsanteil und Terminkontrakt unterscheiden sich."
      },
      {
        "label": "Nein, Produktart und Bedingungen bleiben unterschiedlich.",
        "explanation": "Richtig: Die gemeinsame Kennzahl ist nur der Bezug."
      },
      {
        "label": "Ja, jeder Broker muss beide Produkte anbieten.",
        "explanation": "Zugang und Produktangebot müssen separat geprüft werden."
      }
    ],
    "correct": 1,
    "rule": "Instrument und Handelsplatz als zusammengehörige Angaben prüfen."
  },
  {
    "title": "Außerbörslicher Handel: eine Vereinbarung außerhalb einer Börse",
    "summary": "OTC beschreibt den Handelsweg.",
    "paragraphs": [
      "OTC bedeutet außerbörslicher Handel. Die englische Abkürzung steht für Over the Counter. Die Beteiligten schließen ein Geschäft außerhalb einer Börse ab. Das kann direkt mit einem Händler oder über eine Plattform geschehen. Dabei können Wertpapiere und verschiedene Verträge gehandelt werden.",
      "Unsere Firma vereinbart mit einer Bank einen Währungstausch für einen späteren Termin. Menge und Termin passen genau zur künftigen Rechnung. Dieser direkte Vertrag ist unser Beispiel. Ein Börsenvertrag mit festgelegten Bedingungen könnte den Bedarf anders abdecken.",
      "Außerbörslich bedeutet weder nur CFDs noch automatisch ohne Regeln. Prüfe Geschäftspartner, Bedingungen, Preisbildung und Abwicklung. Dazu gehören auch die Risiken. Ein elektronisches System kann ebenfalls außerbörslich sein. Elektronisch beschreibt die Technik; Börse beschreibt eine bestimmte Organisation des Handels."
    ],
    "columns": [
      {
        "title": "OTC beschreibt",
        "tone": "neutral",
        "points": [
          "Geschäft außerhalb einer Börse.",
          "Direkt oder über eine entsprechende Plattform."
        ]
      },
      {
        "title": "Vertrag prüfen",
        "tone": "positive",
        "points": [
          "Gegenpartei und Produktbedingungen.",
          "Preisbildung, Kosten und Abwicklung."
        ]
      }
    ],
    "prompt": "Was bedeutet OTC sicher?",
    "answers": [
      {
        "label": "Dass keinerlei Regeln oder Bedingungen gelten.",
        "explanation": "Die Bezeichnung allein sagt das nicht."
      },
      {
        "label": "Dass das Geschäft niemals elektronisch sein kann.",
        "explanation": "Auch außerbörsliche Geschäfte können elektronisch organisiert sein."
      },
      {
        "label": "Dass der Handel außerhalb einer Börse stattfindet.",
        "explanation": "Richtig: Weitere Eigenschaften müssen separat geprüft werden."
      }
    ],
    "correct": 2,
    "rule": "Außerbörslich ist eine Einordnung des Handelswegs, kein vollständiges Qualitätsurteil."
  },
  {
    "title": "Dealer-Angebote: der Händler kann selbst Gegenpartei sein",
    "summary": "Preis anfragen und Handel bestätigen unterscheiden.",
    "paragraphs": [
      "Ein Dealer ist ein Händler, der auf eigene Rechnung handelt. In unserem Beispiel stellt er selbst ein Angebot. Nimmt die Kundin es gültig an und kommt das Geschäft zustande, ist er ihre Gegenpartei. Er vermittelt hier also nicht nur an andere Teilnehmer.",
      "Miriam möchte 20 Einheiten kaufen. Der Händler bietet diese Menge zu 50,10 Euro je Einheit an. Der Preisbetrag wäre 20 × 50,10 = 1.002 Euro. Das Geschäft steht aber erst fest, wenn die Bedingungen angenommen wurden und die Ausführung bestätigt ist.",
      "Eine indikative Preisangabe dient nur zur Orientierung. Sie ist noch kein festes Angebot, das du so nutzen kannst. Bei einem konkreten Angebot musst du Gültigkeit und Annahmebedingungen prüfen. Eine Nachricht mit einem Preis ist noch keine Bestätigung eines abgeschlossenen Kaufs."
    ],
    "columns": [
      {
        "title": "Konkretes Lernangebot",
        "tone": "neutral",
        "points": [
          "20 Einheiten zu 50,10 Euro.",
          "Preisbetrag: 20 × 50,10 = 1.002 Euro."
        ]
      },
      {
        "title": "Noch unterscheiden",
        "tone": "positive",
        "points": [
          "Orientierende Preisangabe oder konkretes Angebot?",
          "Annahme und tatsächliche Bestätigung erfolgt?"
        ]
      }
    ],
    "prompt": "Beweist eine indikative Preisangabe bereits einen ausgeführten Handel?",
    "answers": [
      {
        "label": "Nein, sie ist zunächst eine Orientierung.",
        "explanation": "Richtig: Ausführbarkeit, Annahme und Bestätigung sind weitere Fragen."
      },
      {
        "label": "Ja, jede Preisnachricht ist eine vollständige Ausführung.",
        "explanation": "Eine Nachricht und ein zustande gekommener Handel sind verschieden."
      },
      {
        "label": "Ja, sie gilt automatisch für jede Menge.",
        "explanation": "Menge und Bedingungen gehören zum Angebot."
      }
    ],
    "correct": 0,
    "rule": "Preisnachricht, ausführbares Angebot und Ausführung getrennt prüfen."
  },
  {
    "title": "Orderbuch und Dealer-System: zwei Organisationsideen",
    "summary": "Angebote können aus unterschiedlichen Prozessen kommen.",
    "paragraphs": [
      "Ein Orderbuch sammelt Aufträge auf verschiedenen Preisstufen. Die Regeln bestimmen, wann passende Kauf- und Verkaufsaufträge zusammenkommen. In unserem Dealer-Beispiel macht dagegen ein Händler selbst ein Angebot für die Kundin. Beide Wege können zu einem Kauf führen.",
      "Im Orderbuch steht ein bestes Verkaufsangebot von 50 Euro für zwei Einheiten. Dieses Verkaufsangebot heißt Ask. Ein weiterer Auftrag kann es nutzen oder die Lage verändern. Beim Dealer erhält die Kundin ein Angebot für ihre angefragte Menge. Wie sie es annehmen kann, bestimmen die Bedingungen.",
      "Echte Märkte können beide Ideen verbinden. Auch Angebote von Händlern können in einem Orderbuch stehen. Die Beispiele erklären deshalb Grundformen. Sie ordnen nicht jeden Platz vollständig ein. Frage immer, wie das konkrete Geschäft tatsächlich zustande kommt."
    ],
    "columns": [
      {
        "title": "Einfacher Orderbuchfall",
        "tone": "neutral",
        "points": [
          "Aufträge auf Preisstufen.",
          "Regeln verbinden passende Handelswünsche."
        ]
      },
      {
        "title": "Einfacher Dealer-Fall",
        "tone": "positive",
        "points": [
          "Ein Händler nennt eigene Bedingungen.",
          "Kunde und Händler können direkt handeln."
        ]
      }
    ],
    "prompt": "Was ist die richtige Schlussfolgerung aus dem Vergleich?",
    "answers": [
      {
        "label": "In jedem Orderbuch dürfen niemals Händlerangebote stehen.",
        "explanation": "Auch Händler können eigene Angebote in ein Orderbuch geben."
      },
      {
        "label": "Geschäfte können auf verschiedenen Wegen zustande kommen. Diese Wege können auch kombiniert werden.",
        "explanation": "Richtig: Die zwei Lernformen sind keine starre Einteilung aller realen Märkte."
      },
      {
        "label": "Ein Dealer ist automatisch dieselbe Funktion wie ein Vermittler.",
        "explanation": "Eigene Gegenpartei und Vermittlung sind verschiedene Rollen."
      }
    ],
    "correct": 1,
    "rule": "Den Ausführungsmechanismus beschreiben, nicht nur den Namen des Systems."
  },
  {
    "title": "Preis anfragen: RFQ statt sofortiger Ausführung",
    "summary": "Eine Anfrage ist noch keine Annahme.",
    "paragraphs": [
      "RFQ bedeutet eine Anfrage nach einem Preisangebot. Die Abkürzung steht für Request for Quote. Du nennst zum Beispiel das Produkt, die Menge und deinen Kaufwunsch. Ein oder mehrere Händler können darauf antworten. Der genaue Ablauf hängt vom System ab.",
      "Unsere Kundin fragt 100 Einheiten an. Händler A bietet sie für 20,10 Euro je Einheit an. Händler B nennt 20,08 Euro unter vergleichbaren Bedingungen. Die Kundin kann beide Angebote prüfen. Mit der Anfrage allein hat sie noch nichts gekauft.",
      "Zum Kauf braucht es eine gültige Annahme und eine tatsächliche Bestätigung. Vergleiche auch Menge, Gültigkeit und Kosten. Ein Preis in der Antwort bedeutet nicht, dass die ganze Menge schon gehandelt wurde. Ebenso wenig verspricht er, dass das Angebot später noch gilt."
    ],
    "columns": [
      {
        "title": "Anfrage",
        "tone": "neutral",
        "points": [
          "100 Einheiten werden angefragt.",
          "Noch kein bestätigter Kauf."
        ]
      },
      {
        "title": "Antworten im Lernfall",
        "tone": "positive",
        "points": [
          "Händler A: 20,10 Euro pro Einheit.",
          "Händler B: 20,08 Euro pro Einheit."
        ]
      }
    ],
    "prompt": "Was ist nach einer RFQ allein geschehen?",
    "answers": [
      {
        "label": "Es wurden zwingend beide Angebote vollständig gekauft.",
        "explanation": "Die Anfrage ist noch keine solche Ausführung."
      },
      {
        "label": "Der Preis ist für unbegrenzte Zeit garantiert.",
        "explanation": "Gültigkeit und Bedingungen müssen geprüft werden."
      },
      {
        "label": "Es wurde um Angebote gebeten, noch kein Handel bestätigt.",
        "explanation": "Richtig: Anfrage und Annahme sind unterschiedliche Schritte."
      }
    ],
    "correct": 2,
    "rule": "Anfragen, vergleichen, annehmen und ausführen sind eigene Ereignisse."
  },
  {
    "title": "Transparenz: nicht jedes Angebot ist vorher sichtbar",
    "summary": "Vor dem Handel und nach dem Handel sind verschiedene Zeitpunkte.",
    "paragraphs": [
      "Welche Angebote kannst du vor einem Handel sehen? Diese Frage betrifft die Vorhandelstransparenz. Welche abgeschlossenen Geschäfte werden danach sichtbar? Das betrifft die Nachhandelstransparenz. Ein System kann vorher wenig zeigen und danach bestimmte Geschäftsdaten veröffentlichen. Umfang und Zeitpunkt hängen von seinen Regeln ab.",
      "Ein Dark Pool ist ein Handelssystem mit begrenzter öffentlicher Sicht auf Angebote vor dem Handel. Du siehst dort üblicherweise kein vollständig öffentliches Orderbuch. Das Wort dark bedeutet aber nicht automatisch ohne Regeln. Es verspricht auch nicht, dass jeder spätere Handel geheim bleibt.",
      "Ein öffentliches Orderbuch zeigt deshalb nicht zwingend alle Handelswünsche im gesamten Markt. Du darfst aus fehlenden Angaben aber keinen bestimmten unsichtbaren Auftrag erfinden. Halte fest, was deine Daten zeigen. Benenne ebenso klar, welche Informationen fehlen."
    ],
    "columns": [
      {
        "title": "Vor dem Handel",
        "tone": "neutral",
        "points": [
          "Welche Angebote sind öffentlich sichtbar?",
          "Ein offenes Buch ist eine mögliche Informationsform."
        ]
      },
      {
        "title": "Nach dem Handel",
        "tone": "positive",
        "points": [
          "Welche Ausführungen werden berichtet?",
          "Zeit und Umfang der Veröffentlichung können abweichen."
        ]
      }
    ],
    "prompt": "Vor dem Handel ist wenig sichtbar. Beweist das, dass auch später keine Geschäftsdaten veröffentlicht werden?",
    "answers": [
      {
        "label": "Nein, Sichtbarkeit vor und nach dem Handel sind verschiedene Fragen.",
        "explanation": "Richtig: Das eine folgt nicht automatisch aus dem anderen."
      },
      {
        "label": "Ja, alle Geschäfte bleiben zwingend für immer unsichtbar.",
        "explanation": "Der Umfang späterer Veröffentlichungen muss gesondert geprüft werden."
      },
      {
        "label": "Ja, ein öffentliches Orderbuch zeigt sämtliche Wünsche weltweit.",
        "explanation": "Einzelne Datenquellen zeigen nicht automatisch den gesamten Markt."
      }
    ],
    "correct": 0,
    "rule": "Sichtbare Angebote und gemeldete Ausführungen auseinanderhalten."
  },
  {
    "title": "Orderrouting: wohin der Auftrag geschickt wird",
    "summary": "Der Weg hängt von Zugang und Bedingungen ab.",
    "paragraphs": [
      "Orderrouting bedeutet, Aufträge an einen Ausführungsort weiterzuleiten. Ein Broker kann einen Platz nutzen oder mehrere berücksichtigen. Je nach Angebot kann er auch selbst an der Ausführung beteiligt sein. Das Produktsymbol allein verrät den möglichen Weg nicht.",
      "Unser Broker erreicht nur A und B. Auf einer fremden Website siehst du bei C einen günstigeren Preis. Dein Auftrag kann C aber nicht erreichen. Der sichtbare Preis auf C ist deshalb keine automatische Kaufmöglichkeit über deine Brokeroberfläche.",
      "Eine automatische Auswahl verspricht nicht allein den besten denkbaren Preis. Menge, Kosten, Bedingungen, Tempo und erreichbare Orte können wichtig sein. Lies die konkreten Ausführungsregeln. Unterscheide den möglichen Auftragsweg von dem tatsächlich bestätigten Ergebnis. Verschiedene Auftragsarten vertiefen wir später."
    ],
    "columns": [
      {
        "title": "Möglicher Zugang",
        "tone": "neutral",
        "points": [
          "Broker erreicht Plätze A und B.",
          "Nicht automatisch jeden sichtbaren Platz."
        ]
      },
      {
        "title": "Auftragsweg",
        "tone": "positive",
        "points": [
          "Weiterleitung nach den geltenden Bedingungen.",
          "Tatsächliche Ausführung anhand der Bestätigung prüfen."
        ]
      }
    ],
    "prompt": "Kann der Auftrag automatisch auf Platz C ausgeführt werden, nur weil du dort einen Preis siehst?",
    "answers": [
      {
        "label": "Ja, jede Kurswebsite verbindet automatisch deinen Broker.",
        "explanation": "Ein Informationsangebot ist kein Ausführungszugang."
      },
      {
        "label": "Nein, der Platz muss für den Auftrag tatsächlich erreichbar sein.",
        "explanation": "Richtig: Sichtbarkeit und Zugang sind verschiedene Voraussetzungen."
      },
      {
        "label": "Ja, Routing bedeutet immer kostenlose Ausführung überall.",
        "explanation": "Auftragswege haben konkrete Bedingungen und Kosten."
      }
    ],
    "correct": 1,
    "rule": "Ein sichtbarer Preis ist keine automatische Zugriffsmöglichkeit."
  },
  {
    "title": "Menge vergleichen: der erste Ask ist nicht die ganze Rechnung",
    "summary": "Ein günstiger Startpreis kann für wenig Menge gelten.",
    "paragraphs": [
      "Du willst fünf gleiche Einheiten kaufen. Auf A werden zwei für je 100 Euro und drei für je 101 Euro angeboten. Auf B gibt es fünf für je 100,40 Euro. Wir nehmen an, dass du die Angebote erreichen kannst und sie unverändert bleiben. Kosten fehlen zunächst.",
      "Auf A kosten die ersten zwei 2 × 100 = 200 Euro. Die anderen drei kosten 3 × 101 = 303 Euro. Zusammen sind das 503 Euro. Je Einheit sind es im Durchschnitt 503 / 5 = 100,60 Euro. Auf B kosten alle fünf 5 × 100,40 = 502 Euro: im Durchschnitt 100,40 Euro.",
      "Der günstigste erste Preis steht auf A. Für alle fünf Einheiten ist in unserem Fall aber B günstiger. Der erste Ask, also das beste Verkaufsangebot, erklärt nicht die ganze Menge. In echten Fällen können sich Angebote ändern. Gebühren und Zeitpunkte gehören ebenfalls in den Vergleich."
    ],
    "columns": [
      {
        "title": "Platz A: Kauf von fünf",
        "tone": "neutral",
        "points": [
          "2 × 100 + 3 × 101 = 503 Euro.",
          "Durchschnitt: 100,60 Euro."
        ]
      },
      {
        "title": "Platz B: Kauf von fünf",
        "tone": "positive",
        "points": [
          "5 × 100,40 = 502 Euro.",
          "Durchschnitt: 100,40 Euro."
        ]
      }
    ],
    "prompt": "Wo ist die gesamte Menge vor Gebühren im vereinfachten Fall günstiger?",
    "answers": [
      {
        "label": "Auf A, weil sein erster Ask allein alle fünf Einheiten beschreibt.",
        "explanation": "Zu 100 Euro sind auf A nur zwei Einheiten verfügbar."
      },
      {
        "label": "Beide kosten zwingend 500 Euro.",
        "explanation": "Die verfügbare Menge auf den jeweiligen Preisstufen muss mitgerechnet werden."
      },
      {
        "label": "Auf Platz B mit insgesamt 502 Euro.",
        "explanation": "Richtig: Platz A startet niedriger, kostet für fünf Einheiten aber 503 Euro."
      }
    ],
    "correct": 2,
    "rule": "Preis und Menge gemeinsam über die ganze gewünschte Ausführung rechnen."
  },
  {
    "title": "Gebühren vergleichen: der Preis allein ist nicht die Gesamtsumme",
    "summary": "Gleichartige Kosten vollständig addieren.",
    "paragraphs": [
      "Zum Preisbetrag eines Kaufs kommen möglicherweise weitere Kosten. Dieselbe Menge kostet auf A 500 Euro vor Gebühren. Auf B kostet sie 500,50 Euro. Die gesamten zusätzlichen Kaufkosten betragen in unserem Beispiel 2 Euro bei A und 0,50 Euro bei B.",
      "Bei A gibst du insgesamt 500 + 2 = 502 Euro aus. Bei B sind es 500,50 + 0,50 = 501 Euro. Obwohl der reine Preisbetrag bei B höher ist, kostet der gesamte Kauf dort weniger. Wir betrachten nur diesen Kauf.",
      "Ein späterer Verkauf und laufende Finanzierungskosten gehören nicht zu dieser Beispielrechnung. In echten Angeboten können Kosten von der Menge oder Währung abhängen. Es kann auch Mindestgebühren geben. Eine Werbung für eine einzelne Gebühr erklärt nicht alle Kosten. Vergleiche deshalb denselben Umfang unter denselben Annahmen."
    ],
    "columns": [
      {
        "title": "Platz A im Lernfall",
        "tone": "neutral",
        "points": [
          "Kaufbetrag 500 Euro; Kosten 2 Euro.",
          "Gesamtausgabe: 502 Euro."
        ]
      },
      {
        "title": "Platz B im Lernfall",
        "tone": "positive",
        "points": [
          "Kaufbetrag 500,50 Euro; Kosten 0,50 Euro.",
          "Gesamtausgabe: 501 Euro."
        ]
      }
    ],
    "prompt": "Welche Gesamtausgabe ist niedriger?",
    "answers": [
      {
        "label": "501 Euro auf Platz B.",
        "explanation": "Richtig: Der höhere Preisbetrag wird durch die niedrigeren Kosten mehr als ausgeglichen."
      },
      {
        "label": "500 Euro auf A, weil Gebühren nie zählen.",
        "explanation": "Der Vergleich verlangt die gesamte Ausgabe."
      },
      {
        "label": "Beide kosten immer denselben Betrag.",
        "explanation": "Die angegebenen zusätzlichen Kosten unterscheiden sich."
      }
    ],
    "correct": 0,
    "rule": "Gleiche Menge und Geschäftsumfang einschließlich Kosten vergleichen."
  },
  {
    "title": "Teilausführungen und mehrere Orte",
    "summary": "Ein Auftrag kann mehrere Ausführungsmeldungen erzeugen.",
    "paragraphs": [
      "Ein Auftrag kann in mehreren Teilen ausgeführt werden. Die Teile können verschiedene Preise und Zeitpunkte haben. Je nach Auftragsweg können auch mehrere Plätze beteiligt sein. Eine erste Ausführungsnachricht sagt deshalb noch nicht, dass der ganze Auftrag erledigt ist.",
      "Du möchtest zehn Einheiten kaufen. Drei kaufst du auf A für je 20 Euro: zusammen 60 Euro. Sieben kaufst du auf B für je 20,20 Euro: zusammen 141,40 Euro. Insgesamt sind das 201,40 Euro. Geteilt durch zehn ergibt das 20,14 Euro je Einheit vor Kosten.",
      "Nach den ersten drei Käufen bleiben zunächst sieben Einheiten offen, sofern der Rest nicht anders beendet wurde. Prüfe den Status in den Meldungen. Für den Durchschnitt zählt die Menge bei jedem Preis mit. Einfach 20 und 20,20 zu mitteln wäre hier falsch."
    ],
    "columns": [
      {
        "title": "Zwei Ausführungen",
        "tone": "neutral",
        "points": [
          "3 Einheiten auf A zu 20 Euro.",
          "7 Einheiten auf B zu 20,20 Euro."
        ]
      },
      {
        "title": "Gemeinsame Rechnung",
        "tone": "positive",
        "points": [
          "60 + 141,40 = 201,40 Euro.",
          "201,40 / 10 = 20,14 Euro je Einheit."
        ]
      }
    ],
    "prompt": "Wie groß ist der Durchschnittspreis für die zehn Einheiten?",
    "answers": [
      {
        "label": "20,10 Euro, weil beide Preise gleich gewichtet werden.",
        "explanation": "Die Mengen drei und sieben sind nicht gleich groß."
      },
      {
        "label": "20,14 Euro vor Kosten.",
        "explanation": "Richtig: Die größere Ausführung bei 20,20 muss entsprechend stärker gewichtet werden."
      },
      {
        "label": "20 Euro, weil der erste Trade den ganzen Auftrag festlegt.",
        "explanation": "Die weiteren sieben Einheiten besitzen einen anderen Preis."
      }
    ],
    "correct": 1,
    "rule": "Gesamtmenge und Preisbetrag aus allen Ausführungen zusammenführen."
  },
  {
    "title": "Währungen und Bedingungen bei Platzvergleichen",
    "summary": "Ähnliche Zahlen können verschiedene Einheiten meinen.",
    "paragraphs": [
      "Vergleiche zwei Angebote erst, wenn Produkt, Menge, Währung und Bedingungen zusammenpassen. 100 Euro und 100 Dollar sind unterschiedliche Geldbeträge. Auch verschiedene Anteilsarten oder Vertragsgrößen sind nicht allein wegen ähnlicher Namen gleich. Die Zahl auf dem Bildschirm reicht nicht.",
      "Unsere gleiche Anlage kostet auf A 100 Euro und auf B 120 US-Dollar. Bei EUR/USD 1,20 entspricht ein Euro 1,20 Dollar. Daher sind 120 / 1,20 = 100 Euro. Ohne Tauschkosten und andere Kosten sind die Angebote in dieser Rechnung gleich.",
      "Ein echter Währungstausch braucht tatsächlich nutzbare Wechselbedingungen. Ein beliebiger Vergleichskurs reicht dafür nicht. Auch Handel und Abwicklung können verschieden geregelt sein. Die Umrechnung hilft, die Zahlen richtig einzuordnen. Sie verspricht noch keinen tatsächlichen Gesamtpreis."
    ],
    "columns": [
      {
        "title": "Platz A",
        "tone": "neutral",
        "points": [
          "Identisches Instrument zu 100 Euro.",
          "Preiswährung: Euro."
        ]
      },
      {
        "title": "Platz B im Rechenfall",
        "tone": "positive",
        "points": [
          "120 US-Dollar; EUR/USD 1,20.",
          "120 / 1,20 = 100 Euro vor Kosten."
        ]
      }
    ],
    "prompt": "Welches Angebot ist nach der vereinfachten Umrechnung vor Kosten günstiger?",
    "answers": [
      {
        "label": "A ist zwingend 20 Euro günstiger.",
        "explanation": "Dollar und Euro dürfen nicht ohne Umrechnung subtrahiert werden."
      },
      {
        "label": "B ist kostenlos, weil es in Dollar notiert.",
        "explanation": "Die Preiswährung macht einen Kauf nicht kostenlos."
      },
      {
        "label": "Keines; beide entsprechen 100 Euro.",
        "explanation": "Richtig: Die unterschiedlichen Zahlen haben unterschiedliche Währungseinheiten."
      }
    ],
    "correct": 2,
    "rule": "Angebote erst nach passenden Einheiten und Bedingungen vergleichen."
  },
  {
    "title": "Datenquelle: letzter Trade oder aktuelles Angebot?",
    "summary": "Ein Chart muss nicht jede mögliche Ausführung zeigen.",
    "paragraphs": [
      "Eine Datenquelle kann Geschäfte eines einzelnen Platzes zeigen. Sie kann auch Angebote oder Daten mehrerer Plätze zusammenfassen. Manche Daten kommen verzögert an oder werden gefiltert. Die Beschriftung muss erklären, welches Produkt und welche Preisart du siehst.",
      "Unser Chart zeigt den letzten Handel auf A für 50 Euro. Dein neuer Kauf auf B wird für 50,08 Euro bestätigt. Das sind zunächst verschiedene Vorgänge: ein früherer Handel auf A und ein neuer auf B. Der Unterschied allein beweist keinen Fehler.",
      "Prüfe Quelle, Zeit und Preisart. Ist es ein letzter Handel, ein Kaufangebot oder ein Verkaufsangebot? Prüfe danach Menge und Ausführungsbedingungen. Erkläre einen unbekannten Unterschied weder sofort zum Fehler noch ungeprüft für harmlos. Erst passende Angaben ermöglichen einen direkten Vergleich."
    ],
    "columns": [
      {
        "title": "Chartanzeige im Beispiel",
        "tone": "neutral",
        "points": [
          "Letzter Trade auf A: 50 Euro.",
          "Beschreibt eine vergangene Transaktion."
        ]
      },
      {
        "title": "Kaufbestätigung",
        "tone": "positive",
        "points": [
          "Neue Ausführung auf B: 50,08 Euro.",
          "Anderer Ort und möglicherweise anderer Zeitpunkt."
        ]
      }
    ],
    "prompt": "Beweist die Differenz allein eine falsche Ausführung?",
    "answers": [
      {
        "label": "Nein, Quelle, Zeit, Preisbezug und Bedingungen müssen zuerst geprüft werden.",
        "explanation": "Richtig: Die beiden Zahlen beschreiben nicht automatisch denselben Vorgang."
      },
      {
        "label": "Ja, jede neue Ausführung muss exakt den letzten Charttrade treffen.",
        "explanation": "Der letzte Trade ist kein festes Angebot für die neue Order."
      },
      {
        "label": "Nein, man darf jede Bestätigung grundsätzlich ignorieren.",
        "explanation": "Der tatsächliche Ablauf muss anhand passender Angaben geprüft werden."
      }
    ],
    "correct": 0,
    "rule": "Gleiche Vergleichsbasis herstellen, bevor eine Abweichung bewertet wird."
  },
  {
    "title": "Handelsphasen: offen ist nicht immer derselbe Ablauf",
    "summary": "Erreichbarkeit und Handelsmechanismus können wechseln.",
    "paragraphs": [
      "Ein Handelsplatz kann verschiedene Phasen haben. Im fortlaufenden Handel können passende Aufträge laufend zusammenkommen. In einer Auktion werden Handelswünsche nach einem festgelegten Ablauf gesammelt und zusammengeführt. Die Phase bestimmt also auch, wie Geschäfte zustande kommen.",
      "Unser Platz A ist gerade in einer Auktionsphase. B handelt fortlaufend. Derselbe eingereichte Auftrag kann deshalb anders verarbeitet werden. Eine angezeigte Zahl während der Auktion muss nicht dieselbe Bedeutung haben wie der Preis eines bereits abgeschlossenen Geschäfts auf B.",
      "Eine erreichbare App beweist nicht, dass der Platz gerade fortlaufend handelt. Prüfe den Kalender, die Zeitzone, Feiertage und die jeweilige Phase. Hier nennen wir keine aktuellen Öffnungszeiten. Handelszeiten und besondere Phasen betrachten wir später genauer."
    ],
    "columns": [
      {
        "title": "Fortlaufender Handel",
        "tone": "neutral",
        "points": [
          "Passende Aufträge können laufend zusammentreffen.",
          "Nach den jeweiligen Ausführungsregeln."
        ]
      },
      {
        "title": "Auktionsphase",
        "tone": "positive",
        "points": [
          "Handelswünsche werden für einen Auktionsablauf gesammelt.",
          "Preisbezug und Ausführung können sich unterscheiden."
        ]
      }
    ],
    "prompt": "Beweist eine erreichbare App fortlaufenden Handel am gewünschten Platz?",
    "answers": [
      {
        "label": "Ja, alle Plätze nutzen gleichzeitig dieselbe Phase.",
        "explanation": "Verschiedene Plätze können unterschiedliche Phasen haben."
      },
      {
        "label": "Nein, ich muss prüfen, in welcher Handelsphase der Platz gerade ist.",
        "explanation": "Richtig: Zugang zur Oberfläche und Ausführungsmechanismus sind verschieden."
      },
      {
        "label": "Ja, ein Auktionspreis ist immer bereits dein ausgeführter Kaufpreis.",
        "explanation": "Eine Anzeige während der Auktion ist nicht automatisch eine persönliche Ausführung."
      }
    ],
    "correct": 1,
    "rule": "Handelsplatz und aktuelle Handelsphase zusammen lesen."
  },
  {
    "title": "Angebote können sich auf dem Weg ändern",
    "summary": "Eine Momentaufnahme bleibt keine Reservierung.",
    "paragraphs": [
      "Zwischen einer Anzeige und dem Eintreffen deines Auftrags vergeht Zeit. Andere können inzwischen das Angebot nutzen. Anbieter können es nach den Regeln auch ändern. Die Verzögerung beim Übertragen oder Verarbeiten heißt Latenz. Deshalb ist ein angezeigter Preis keine sichere spätere Ausführung.",
      "Du siehst eine Einheit zu 50 Euro auf A. Bevor dein Auftrag ankommt, kauft jemand anderes diese Einheit. Das nächste Angebot liegt bei 50,10 Euro. Ob du dort kaufst oder dein Auftrag offen bleibt, hängt von deiner Preisbedingung und den Regeln ab.",
      "Wir behaupten hier keine bestimmte Verzögerung in Millisekunden. Wichtig sind die getrennten Schritte: angezeigt, gesendet, eingetroffen und ausgeführt. Ein Bildschirmfoto kann eine frühere Lage zeigen. Es beweist aber allein nicht, welche Bedingungen dein späterer Auftrag erreichen konnte."
    ],
    "columns": [
      {
        "title": "Frühere Anzeige",
        "tone": "neutral",
        "points": [
          "Ask 50 Euro für eine Einheit.",
          "Eine Momentaufnahme, keine automatische Reservierung."
        ]
      },
      {
        "title": "Späterer Eingang",
        "tone": "positive",
        "points": [
          "Die Einheit wurde bereits gehandelt.",
          "Nächstes Angebot im Beispiel bei 50,10 Euro."
        ]
      }
    ],
    "prompt": "Was bestimmt, ob die spätere Order 50,10 akzeptieren kann?",
    "answers": [
      {
        "label": "Allein der frühere Screenshot von 50 Euro.",
        "explanation": "Der Screenshot reserviert keine spätere Gegenmenge."
      },
      {
        "label": "Die feste Regel, dass alle Orders zum alten Preis ausgeführt werden.",
        "explanation": "Die verfügbaren Angebote können sich verändert haben."
      },
      {
        "label": "Ihre Preisbedingung und die Ausführungsregeln.",
        "explanation": "Richtig: Nicht jede Order akzeptiert beliebige andere Preise."
      }
    ],
    "correct": 2,
    "rule": "Anzeigezeit und Ausführungszeit sind verschiedene Zustände."
  },
  {
    "title": "Handelsunterbrechung: der genaue Umfang zählt",
    "summary": "Ein einzelner Platz ist nicht automatisch der ganze Markt.",
    "paragraphs": [
      "Ein Platz kann den Handel zeitweise unterbrechen. Das kann ein Produkt oder bestimmte Bereiche betreffen. Gründe und Ablauf hängen von den Regeln ab. Eine Meldung über Platz A erklärt deshalb nicht automatisch den Handelsstatus aller anderen Plätze.",
      "A meldet in unserem Fall eine Unterbrechung für eine Aktie. Bei B siehst du weiter einen Preis. Er könnte aktuell oder veraltet sein. Er könnte sich auch auf etwas anderes beziehen. Prüfe Produkt, Zeit und Handelsstatus, bevor du annimmst, dass du dort handeln kannst.",
      "Prüfe außerdem den Status deiner Aufträge. Eine Unterbrechung löscht nicht automatisch jeden Auftrag. Ob Aufträge bleiben, angenommen werden oder ausführbar sind, bestimmen die Regeln. Eine einzelne Meldung reicht nicht, um den Zustand des gesamten Marktes zu erklären."
    ],
    "columns": [
      {
        "title": "Meldung auf A",
        "tone": "neutral",
        "points": [
          "Handel einer bestimmten Aktie unterbrochen.",
          "Umfang der Meldung beachten."
        ]
      },
      {
        "title": "Weitere Prüfungen",
        "tone": "positive",
        "points": [
          "Status und Zeitbezug anderer Plätze.",
          "Eigene offene Orders und geltende Regeln."
        ]
      }
    ],
    "prompt": "Was folgt aus der Unterbrechung auf A sicher?",
    "answers": [
      {
        "label": "Nur die gemeldete Unterbrechung auf A in ihrem angegebenen Umfang.",
        "explanation": "Richtig: Der Status anderer Plätze und eigener Orders muss zusätzlich geprüft werden."
      },
      {
        "label": "Dass B garantiert ohne jede Einschränkung weiterhandelt.",
        "explanation": "Eine Anzeige allein beweist das nicht."
      },
      {
        "label": "Dass alle Orders weltweit automatisch gelöscht wurden.",
        "explanation": "Orderbehandlung und Umfang sind eigene Regelungsfragen."
      }
    ],
    "correct": 0,
    "rule": "Unterbrechungsmeldung, Handelsstatus und Orderstatus getrennt prüfen."
  },
  {
    "title": "Handeln und danach erfüllen sind zwei Aufgaben",
    "summary": "Ausführungsort und Abwicklung nicht verwechseln.",
    "paragraphs": [
      "Ein Trade ist ein abgeschlossenes Geschäft über ein Produkt, eine Menge und einen Preis. Danach müssen die Beteiligten ihre Pflichten erfüllen. Clearing betrifft die Organisation und Behandlung dieser Pflichten. Settlement bedeutet ihre tatsächliche Erfüllung, zum Beispiel den Austausch von Geld und Wertpapieren.",
      "Unser Aktienkauf kommt an einem Handelsplatz zustande. Weitere Stellen können anschließend die Abwicklung organisieren. Der Name des Handelsplatzes verrät deshalb nicht automatisch alle Organisationen, die nach dem Kauf beteiligt sind. Handeln und Erfüllen sind verschiedene Aufgaben.",
      "Manchmal tritt eine zentrale Gegenpartei zwischen die ursprünglichen Beteiligten. Das hängt von der Organisation des Geschäfts ab. Börsenhandel und zentrale Abwicklung sind getrennte Angaben. Auch ein außerbörsliches Geschäft kann eine zentrale Gegenpartei nutzen. Die einzelnen Abwicklungsschritte erklären wir in Kapitel 11 genauer."
    ],
    "columns": [
      {
        "title": "Trade",
        "tone": "neutral",
        "points": [
          "Vereinbarung über Produkt, Menge und Preis.",
          "Ausführung am vorgesehenen Ort."
        ]
      },
      {
        "title": "Danach",
        "tone": "positive",
        "points": [
          "Verpflichtungen organisieren und erfüllen.",
          "Andere Stellen können an der Abwicklung beteiligt sein."
        ]
      }
    ],
    "prompt": "Steht der Ausführungsort automatisch für jede spätere Abwicklungsaufgabe?",
    "answers": [
      {
        "label": "Ja, der Kauf ist bereits beim Senden vollständig erfüllt.",
        "explanation": "Senden, Ausführen und Erfüllen sind verschiedene Vorgänge."
      },
      {
        "label": "Nein, Ausführung und Abwicklung sind verschiedene Funktionen.",
        "explanation": "Richtig: Ein Geschäft kann mehrere beteiligte Stellen und Schritte haben."
      },
      {
        "label": "Ja, außerbörsliche Geschäfte können niemals zentral abgewickelt werden.",
        "explanation": "Handelsweg und Clearingstruktur müssen getrennt geprüft werden."
      }
    ],
    "correct": 1,
    "rule": "Ausführungsort und Abwicklungsstruktur getrennt benennen."
  },
  {
    "title": "Dein Handelsplatzcheck: den Weg vollständig erklären",
    "summary": "Produkt, Zugang, Daten und Bestätigung zusammenführen.",
    "paragraphs": [
      "Prüfe beim Handelsplatz zuerst Produkt und Menge. Welche Orte kannst du erreichen? Wie kommen Geschäfte dort zustande? Woher stammen deine Daten? Lies dann die Ausführungsbestätigung. Sie nennt, wo und zu welchem Preis tatsächlich gehandelt wurde und welchen Status der Auftrag hat.",
      "Unser Chart zeigt den letzten Handel auf A bei 100. Dein Broker erreicht B. Dort gibt es fünf Einheiten für je 100,40. Werden alle unverändert gekauft, beträgt der Preisbetrag 5 × 100,40 = 502 vor Zusatzkosten. Erst die Bestätigung nennt die tatsächlich gekaufte Menge und ihre Preise.",
      "Der Chartpreis auf A verspricht keinen Kauf auf B für 100. Du kannst jetzt erklären, warum ein Markt mehr als eine Oberfläche oder eine Zahl ist. Plätze verbinden Aufträge nach Regeln; Daten zeigen eine ausgewählte Sicht. Im nächsten Kapitel betrachten wir den Markt als Auktion."
    ],
    "columns": [
      {
        "title": "Im Abschlussfall bekannt",
        "tone": "neutral",
        "points": [
          "Chart: letzter Trade auf A bei 100.",
          "Erreichbarer Platz B: fünf Einheiten zu 100,40."
        ]
      },
      {
        "title": "Ausführung noch prüfen",
        "tone": "positive",
        "points": [
          "Vereinfachter Preisbetrag: 5 × 100,40 = 502.",
          "Tatsächliche Menge, Preise, Kosten und Status laut Bestätigung."
        ]
      }
    ],
    "prompt": "Welche Zahl garantiert der Chart auf A für deinen neuen Kauf auf B?",
    "answers": [
      {
        "label": "100 für jede beliebige Menge.",
        "explanation": "Ein früherer Trade auf A ist kein Angebot für B."
      },
      {
        "label": "502 Euro Nettogewinn.",
        "explanation": "502 ist der vereinfachte Kaufbetrag vor Kosten, kein Gewinn."
      },
      {
        "label": "Keine; der tatsächliche Kauf braucht die dort verfügbaren Bedingungen.",
        "explanation": "Richtig: Vergangener Charttrade und neue Ausführung auf B sind nicht gleichgesetzt."
      }
    ],
    "correct": 2,
    "rule": "Erst Handelsweg und Ausführung verstehen, dann Zahlen vergleichen."
  }
] as const;

export const marketBasicsChapterFourLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-04.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 4 · Wo findet Handel statt?', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 4', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
