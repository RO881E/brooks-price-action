import type { Lesson } from '../../types';

// Eigenständige Abschlussfälle; alternative Szenarien, Einheiten, Regeln und bekannte Statusangaben ausdrücklich trennen.
const drafts = [
  {
    "title": "Deine Erklärung beginnt mit fünf Fragen",
    "summary": "Ein Marktbericht braucht mehr als eine Preislinie.",
    "paragraphs": [
      "Du hast Produkte, Teilnehmer, Handelsplätze, Angebote und Abwicklung kennengelernt. Jetzt setzt du die Bausteine zusammen. Beginne mit fünf Fragen: Was wird gehandelt? Wo und wann? Welche Wünsche liegen vor? Was wurde ausgeführt? Was passiert danach?",
      "Unser Abschlusskapitel arbeitet mit erfundenen Produkten und Plätzen. Alle Zahlen, Regeln und Zeitfenster gehören zu eigenen Übungsfällen. Preise sind in Euro, sofern der Fall nichts anderes nennt. Unbekannte Gründe werden nicht ergänzt.",
      "Du lernst, einen Ablauf verständlich zu beschreiben und deine Erklärung zu prüfen. Eine Erklärung muss nicht jede Absicht kennen. Sie soll zeigen, was beobachtet wurde, was gerechnet werden kann und welche Informationen fehlen."
    ],
    "columns": [
      {
        "title": "Unvollständiger Satz",
        "tone": "neutral",
        "points": [
          "Der Preis ist gestiegen.",
          "Produkt, Quelle und Ablauf fehlen."
        ]
      },
      {
        "title": "Prüfbare Erklärung",
        "tone": "positive",
        "points": [
          "Produkt, Platz, Zeit, Wünsche, Abschlüsse und Abwicklung.",
          "Bekannte Fakten und offene Fragen getrennt."
        ]
      }
    ],
    "prompt": "Was macht einen Bericht überprüfbar?",
    "answers": [
      {
        "label": "Er nennt die Daten und Schritte, auf denen seine Aussagen beruhen.",
        "explanation": "Richtig: So lassen sich Rechnung und Grenzen nachvollziehen."
      },
      {
        "label": "Er verspricht immer den nächsten Kurs.",
        "explanation": "Eine Erklärung ist keine sichere Prognose."
      },
      {
        "label": "Er ersetzt fehlende Daten durch erfundene Absichten.",
        "explanation": "Eine fehlende Information bleibt als Lücke bestehen."
      }
    ],
    "correct": 0,
    "rule": "Produkt, Ort, Zeit, Ablauf und Grenzen deiner Erklärung nennen."
  },
  {
    "title": "Einen Marktsteckbrief schreiben",
    "summary": "Eine kurze Übersicht legt fest, worüber du sprichst.",
    "paragraphs": [
      "Ein Marktsteckbrief ist eine kurze Übersicht über den betrachteten Markt. Er nennt Produkt, Einheit, Handelsplatz, Währung und wichtige Regeln. Dadurch wird klar, welche späteren Zahlen zusammengehören.",
      "Unser Produkt W ist eine erfundene Aktie. Gehandelt wird in ganzen Aktien an Platz A. Die Preiswährung ist Euro. Der erlaubte Preisschritt beträgt einen Euro. Ein Kurs von 50 bedeutet deshalb 50 Euro je Aktie, nicht 50 Euro für jeden beliebigen Auftrag.",
      "Diese Angaben beschreiben nur unseren Übungsmarkt. Für ein echtes Produkt müsstest du seine tatsächlichen Merkmale nachlesen. Eine Aktie, ein Fondsanteil und ein Future mit ähnlichem Namen sind keine automatisch gleichen Verträge."
    ],
    "columns": [
      {
        "title": "Steckbrief W",
        "tone": "neutral",
        "points": [
          "Erfundene Aktie; ganze Stücke.",
          "Platz A; Euro; Preisschritt 1 Euro."
        ]
      },
      {
        "title": "Bedeutung von 50",
        "tone": "positive",
        "points": [
          "50 Euro je Aktie.",
          "Auftragsbetrag hängt von der Stückzahl ab."
        ]
      }
    ],
    "prompt": "Was bedeutet der Kurs 50 in diesem Steckbrief?",
    "answers": [
      {
        "label": "50 Future-Punkte mit unbekanntem Multiplikator.",
        "explanation": "W ist im Fall ausdrücklich eine Aktie."
      },
      {
        "label": "50 Euro je Aktie W.",
        "explanation": "Richtig: Die Einheit steht ausdrücklich im Steckbrief."
      },
      {
        "label": "50 Euro für jede beliebige Stückzahl.",
        "explanation": "Mehr Stücke erfordern einen entsprechend größeren Betrag."
      }
    ],
    "correct": 1,
    "rule": "Produkt und Preiseinheit vor jeder Rechnung festlegen."
  },
  {
    "title": "Die Einheit einer Menge beachten",
    "summary": "Gleiche Kurszahlen können unterschiedliche Geldbezüge haben.",
    "paragraphs": [
      "Eine Zahl ohne Einheit kann in die Irre führen. Eine Aktienmenge zählt Stücke. Eine Future-Menge zählt Verträge. Bei einem Future verbindet der Multiplikator die Punkte mit einem Geldbetrag.",
      "Fünf Aktien zu 50 Euro haben einen Preisbetrag von 250 Euro. Ein erfundener Future zu 50 Punkten mit zehn Euro je Punkt hat dagegen einen Nominalwert von 500 Euro je Vertrag. Zwei solche Verträge beziehen sich rechnerisch auf 1.000 Euro.",
      "Der Future-Nominalwert ist nicht automatisch die hinterlegte Sicherheit. Auch ein Kurs von 50 macht die beiden Produkte nicht gleich. Schreibe bei Zahlen deshalb Stück, Vertrag, Punkt oder Euro dazu."
    ],
    "columns": [
      {
        "title": "Aktienfall",
        "tone": "neutral",
        "points": [
          "5 Stück × 50 Euro = 250 Euro.",
          "Preisbetrag eines Kaufs."
        ]
      },
      {
        "title": "Future-Vergleich",
        "tone": "positive",
        "points": [
          "50 Punkte × 10 Euro × 2 Verträge = 1.000 Euro.",
          "Nominalwert, nicht automatisch Margin."
        ]
      }
    ],
    "prompt": "Warum sind die beiden Kurszahlen 50 nicht direkt gleichwertig?",
    "answers": [
      {
        "label": "Weil jede Zahl 50 denselben Auftragsbetrag garantiert.",
        "explanation": "Die Mengen und Einheiten bestimmen unterschiedliche Beträge."
      },
      {
        "label": "Weil ein Nominalwert immer eine Gebühr ist.",
        "explanation": "Nominalwert und Kosten sind verschiedene Größen."
      },
      {
        "label": "Weil Produkt, Einheit und Multiplikator verschieden sind.",
        "explanation": "Richtig: Der Geldbezug ergibt sich erst aus den Merkmalen."
      }
    ],
    "correct": 2,
    "rule": "Zahlen erst mit passender Einheit und Vertragsgröße vergleichen."
  },
  {
    "title": "Teilnehmer beschreiben, ohne Motive zu erfinden",
    "summary": "Ein Auftrag zeigt einen Handelswunsch, nicht die ganze Absicht.",
    "paragraphs": [
      "Ein Käufer kann langfristig investieren, einen anderen Vertrag absichern oder eine alte Verkaufsposition schließen. Dieselbe Kaufmenge beweist nicht, welches Motiv vorliegt. Eine Teilnehmerrolle und ein konkreter Grund sind unterschiedliche Angaben.",
      "Im Fall meldet ein Ausführungsbericht einen Kauf von fünf Aktien W. Weitere Angaben zum Käufer fehlen. Du kannst Menge und Richtung nennen. Du kannst daraus aber weder seinen Beruf noch seinen Plan für die nächsten Jahre ablesen.",
      "Wenn ein Motiv im Fall ausdrücklich bekannt ist, darfst du es ergänzen. Fehlt dieser Nachweis, bleibt der Grund offen. So wird deine Erklärung genauer, auch wenn sie weniger dramatisch klingt."
    ],
    "columns": [
      {
        "title": "Bekannt",
        "tone": "neutral",
        "points": [
          "Kauf von 5 Aktien W bestätigt.",
          "Richtung und Menge genannt."
        ]
      },
      {
        "title": "Nicht bekannt",
        "tone": "positive",
        "points": [
          "Beruf und Anlageziel des Käufers.",
          "Warum genau er gekauft hat."
        ]
      }
    ],
    "prompt": "Welche Aussage ist durch den Bericht belegt?",
    "answers": [
      {
        "label": "Fünf Aktien wurden gekauft; das Motiv bleibt offen.",
        "explanation": "Richtig: Der Bericht nennt keine vollständige Absicht."
      },
      {
        "label": "Der Käufer muss langfristig investieren.",
        "explanation": "Ein Kauf allein beweist das nicht."
      },
      {
        "label": "Der Käufer kennt sicher die nächste Kursbewegung.",
        "explanation": "Der Auftrag belegt keine sichere Zukunftskenntnis."
      }
    ],
    "correct": 0,
    "rule": "Auftrag, Teilnehmerrolle und nachgewiesenes Motiv getrennt halten."
  },
  {
    "title": "Handelsplatz und Datenquelle zuordnen",
    "summary": "Eine Anzeige von Platz B beschreibt nicht automatisch Platz A.",
    "paragraphs": [
      "Eine Datenquelle ist die Stelle oder der Datenstrom, aus dem eine Angabe stammt. Sie kann Angebote, Trades oder Statusmeldungen eines bestimmten Platzes zeigen. Eine App kann mehrere Quellen nebeneinander darstellen.",
      "Unser Auftrag soll zu Platz A gehen. Die sichtbare günstige Verkaufsanzeige stammt aber von Platz B. Im Fall hat der Nutzer nur Zugang zu A. Das Angebot von B beschreibt deshalb keine zugesagte Ausführung seines Auftrags.",
      "Nenne in deinem Bericht sowohl den Handelsweg als auch die Quelle der Anzeige. Selbst beim gleichen Produkt können Preise, Mengen und Zeitpunkte zwischen Plätzen abweichen. Ein Preis ohne Quelle reicht für diesen Vergleich nicht."
    ],
    "columns": [
      {
        "title": "Auftragsweg",
        "tone": "neutral",
        "points": [
          "Produkt W an Platz A.",
          "Zugang nur zu A."
        ]
      },
      {
        "title": "Angezeigter Preis",
        "tone": "positive",
        "points": [
          "Günstiges Angebot stammt von B.",
          "Kein Nachweis für Ausführung an A."
        ]
      }
    ],
    "prompt": "Was fehlt für eine Aussage über die Ausführung an A?",
    "answers": [
      {
        "label": "Die Annahme, dass alle Plätze ein gemeinsames Buch haben.",
        "explanation": "Der Fall beschreibt getrennte Plätze."
      },
      {
        "label": "Ein passendes Angebot und die Ausführungsbedingungen an A.",
        "explanation": "Richtig: Die Anzeige von B ersetzt diese Angaben nicht."
      },
      {
        "label": "Nur ein beliebiger Preis desselben Produkts.",
        "explanation": "Er muss zum tatsächlichen Weg passen."
      }
    ],
    "correct": 1,
    "rule": "Datenquelle und tatsächlichen Ausführungsweg ausdrücklich zuordnen."
  },
  {
    "title": "Zeitfenster und Phase in den Steckbrief aufnehmen",
    "summary": "Erreichbarkeit, Handelszeit und Handelsform sind verschiedene Bedingungen.",
    "paragraphs": [
      "Ein Zeitfenster braucht eine Bezugszeit. Ein Handelsplatz braucht außerdem die passende Phase. Prüfe deshalb Öffnung, Kalenderausnahmen und Handelsform. Eine funktionierende App ist keine vollständige Statusmeldung des Marktes.",
      "Unser Platz A beginnt den fortlaufenden Handel um 08:00 UTC. Im Übungsfall hat die Ortsanzeige ausdrücklich UTC+02:00. Der Beginn erscheint dort um 10:00. Um 09:50 Ortszeit nimmt die App einen Auftrag für später an. Das ist zehn Minuten vor dem genannten Beginn.",
      "Wir behaupten damit keine echte Börsenöffnung. Auch der angenommene Offset gilt nur für diese Rechnung. Ein reales Datum braucht seine eigene Zeitzonenregel. Für die Ausführung müssen nach dem Beginn weiterhin Auftrag und Gegenangebote passen."
    ],
    "columns": [
      {
        "title": "Übungszeiten",
        "tone": "neutral",
        "points": [
          "Beginn 08:00 UTC; Offset +02:00.",
          "Ortsbeginn 10:00."
        ]
      },
      {
        "title": "Um 09:50 Ortszeit",
        "tone": "positive",
        "points": [
          "Noch 10 Minuten bis zum Beginn.",
          "Appannahme für später, keine bestätigte Ausführung."
        ]
      }
    ],
    "prompt": "Was passiert laut Fall um 09:50 Ortszeit?",
    "answers": [
      {
        "label": "Der Handel läuft seit zwei Stunden.",
        "explanation": "Der umgerechnete Beginn ist 10:00."
      },
      {
        "label": "Alle Aufträge sind bereits sicher ausgeführt.",
        "explanation": "Annahme und Ausführung bleiben getrennt."
      },
      {
        "label": "Die App nimmt den Auftrag für später an.",
        "explanation": "Richtig: Der fortlaufende Handel beginnt erst zehn Minuten danach."
      }
    ],
    "correct": 2,
    "rule": "Zeitangabe umrechnen und den passenden Phasenstatus prüfen."
  },
  {
    "title": "Sind zwei Angebote wirklich vergleichbar?",
    "summary": "Eine gemeinsame Vergleichsbasis braucht Produkt, Menge, Zeit und Zugang.",
    "paragraphs": [
      "Eine Vergleichsbasis legt fest, unter welchen gleichen Bedingungen zwei Angaben verglichen werden. Dazu gehören etwa dasselbe Produkt, dieselbe gewünschte Menge, vergleichbare Zeitpunkte und ein tatsächlich verfügbarer Handelsweg.",
      "Platz A zeigt um 10:00 ein Verkaufsangebot zu 50. Eine gespeicherte Anzeige von B zeigt 49, stammt aber von 09:30. Über den Zustand von B um 10:00 wissen wir nichts. Das ältere Angebot beweist daher nicht, dass B jetzt günstiger ausführbar ist.",
      "Auch eine aktuelle Anzeige müsste ausreichend Menge und passende Kosten nennen. Eine fehlende Angabe darf nicht stillschweigend als gleich angenommen werden. Schreibe zuerst die Vergleichsbasis, dann erst den Preisvergleich."
    ],
    "columns": [
      {
        "title": "Anzeige A",
        "tone": "neutral",
        "points": [
          "10:00; Ask 50.",
          "Aktueller betrachteter Stand."
        ]
      },
      {
        "title": "Anzeige B",
        "tone": "positive",
        "points": [
          "09:30; Ask 49.",
          "Stand um 10:00 unbekannt."
        ]
      }
    ],
    "prompt": "Beweist die ältere 49, dass B um 10:00 günstiger ist?",
    "answers": [
      {
        "label": "Nein, der aktuelle Stand von B fehlt.",
        "explanation": "Richtig: Unterschiedliche Zeitpunkte lassen diese Schlussfolgerung nicht zu."
      },
      {
        "label": "Ja, alte Angebote bleiben immer gültig.",
        "explanation": "Angebote können sich ändern oder verschwinden."
      },
      {
        "label": "Ja, eine kleinere Zahl ersetzt Mengen und Kosten.",
        "explanation": "Auch diese Bedingungen müssen passen."
      }
    ],
    "correct": 0,
    "rule": "Vergleichsbasis nennen und fehlende Bedingungen offenlassen."
  },
  {
    "title": "Preisarten vor der Erklärung sortieren",
    "summary": "Letzter Trade, Bid, Ask und Mitte können verschiedene Zahlen sein.",
    "paragraphs": [
      "Der letzte Trade ist ein vergangener Abschluss. Bid und Ask sind aktuelle Kauf- und Verkaufsangebote der genannten Quelle. Die Mitte ist ein berechneter Wert zwischen ihnen. Diese Preisarten müssen nicht gleichzeitig gleich sein.",
      "In unserem Stand ist der letzte Trade 50. Der beste Bid liegt bei 49, der beste Ask bei 51. Die Mitte ergibt sich aus 49 plus 51, geteilt durch zwei: 50. Obwohl Trade und Mitte hier dieselbe Zahl haben, entsteht dadurch kein neues Geschäft.",
      "Ein späterer Bericht sollte die Preisart ausdrücklich nennen. Bei einem Kauf zählt ein passendes Verkaufsangebot und die verfügbaren Mengen. Der alte Trade ist keine Zusage, dass du heute wieder zu genau diesem Preis kaufen kannst."
    ],
    "columns": [
      {
        "title": "Beobachtete Daten",
        "tone": "neutral",
        "points": [
          "Letzter Trade 50; Bid 49; Ask 51.",
          "Mitte (49 + 51) / 2 = 50."
        ]
      },
      {
        "title": "Bedeutung",
        "tone": "positive",
        "points": [
          "Trade: vergangener Abschluss.",
          "Mitte: Rechnung, kein neuer Abschluss."
        ]
      }
    ],
    "prompt": "Beweist die Mitte 50 eine aktuelle Kaufmöglichkeit zu 50?",
    "answers": [
      {
        "label": "Ja, dadurch wurden automatisch zwei Aktien gehandelt.",
        "explanation": "Die Berechnung erzeugt keinen Trade."
      },
      {
        "label": "Nein, die Mitte ist nur ein berechneter Wert.",
        "explanation": "Richtig: Ein Kauf braucht ein passendes Verkaufsangebot."
      },
      {
        "label": "Ja, jeder Mittelwert ist ein Angebot.",
        "explanation": "Eine Rechnung stellt keine Verkaufsmenge bereit."
      }
    ],
    "correct": 1,
    "rule": "Jede Preiszahl mit ihrer Bedeutung beschriften."
  },
  {
    "title": "Spread und Tiefe gemeinsam lesen",
    "summary": "Ein guter bester Preis reicht vielleicht nicht für deine ganze Menge.",
    "paragraphs": [
      "Der Spread ist der Abstand zwischen bestem Ask und bestem Bid. Die Tiefe beschreibt die angebotene Menge auf den Preisstufen. Für eine größere Order brauchst du beides.",
      "Unser Hauptfall hat einen Bid von 49 und einen Ask von 50. Zu 50 sind aber nur zwei Aktien W angeboten. Vier weitere stehen zu 51 bereit. Der Spread beträgt einen Euro. Für einen sofortigen Kauf von fünf reicht die erste Stufe nicht.",
      "Wir nehmen an, dass die Angebote bis zur Ausführung unverändert bleiben. Ein echtes sichtbares Buch gibt diese Zusage nicht. Die beste Stufe erklärt nur einen Teil der möglichen Ausführung einer größeren Menge."
    ],
    "columns": [
      {
        "title": "Beste Preise",
        "tone": "neutral",
        "points": [
          "Bid 49; Ask 50; Spread 1 Euro.",
          "Zu 50 nur 2 Aktien."
        ]
      },
      {
        "title": "Weitere Tiefe",
        "tone": "positive",
        "points": [
          "4 Aktien zu 51.",
          "Für einen Kauf von 5 werden weitere Stufen gebraucht."
        ]
      }
    ],
    "prompt": "Reicht der Ask 50 im Fall für fünf Aktien?",
    "answers": [
      {
        "label": "Ja, der beste Preis hat unbegrenzte Menge.",
        "explanation": "Der Fall nennt ausdrücklich nur zwei."
      },
      {
        "label": "Ja, der Spread eins bedeutet eine Million Stücke.",
        "explanation": "Der Spread ist ein Preisabstand, keine Menge."
      },
      {
        "label": "Nein, dort stehen nur zwei bereit.",
        "explanation": "Richtig: Für den Rest wird eine weitere zulässige Stufe benötigt."
      }
    ],
    "correct": 2,
    "rule": "Handelbarkeit für deine konkrete Menge statt nur den besten Preis prüfen."
  },
  {
    "title": "Die tatsächliche Ausführung nachrechnen",
    "summary": "Fünf Aktien können zu zwei verschiedenen Preisen gekauft werden.",
    "paragraphs": [
      "Wir führen den Hauptfall fort: zwei Aktien stehen zu 50 und vier zu 51 bereit. Ein Käufer will fünf sofort kaufen und erlaubt beide Preise. Unsere Regel nutzt zuerst die günstigere Stufe. Weitere Buchänderungen fehlen.",
      "Zwei zu 50 kosten 100 Euro. Drei zu 51 kosten 153 Euro. Zusammen werden fünf für 253 Euro gekauft. Der Durchschnitt ist 253 geteilt durch fünf, also 50,60. Der letzte Teilpreis ist 51. Dort bleibt eine Aktie angeboten.",
      "Fünf werden gekauft und dieselben fünf verkauft. Die beiden Seiten verdoppeln das Volumen nicht. Das Ergebnis beschreibt genau diese Ausführung, aber noch nicht die Absicht des Käufers oder eine sichere nächste Kursrichtung."
    ],
    "columns": [
      {
        "title": "Teilfüllungen",
        "tone": "neutral",
        "points": [
          "2 × 50 = 100 Euro.",
          "3 × 51 = 153 Euro."
        ]
      },
      {
        "title": "Ergebnis",
        "tone": "positive",
        "points": [
          "5 für 253 Euro; Durchschnitt 50,60.",
          "Letzter Teilpreis 51; Restangebot 1 zu 51."
        ]
      }
    ],
    "prompt": "Welche Rechnung beschreibt die Ausführung richtig?",
    "answers": [
      {
        "label": "Fünf Aktien für 253 Euro vor Kosten.",
        "explanation": "Richtig: Die beiden Teilbeträge werden addiert."
      },
      {
        "label": "Fünf für 250 Euro, weil 50 der beste Ask war.",
        "explanation": "Zu 50 standen nur zwei bereit."
      },
      {
        "label": "Zehn Aktien, weil beide Seiten fünf melden.",
        "explanation": "Kauf und Verkauf beziehen sich auf dieselben fünf."
      }
    ],
    "correct": 0,
    "rule": "Teilmengen, Gesamtbetrag, Durchschnitt und letzten Teilpreis getrennt berechnen."
  },
  {
    "title": "Mit anderer Preisgrenze entsteht ein anderer Ablauf",
    "summary": "Ein Limit kann Menge schützen, aber eine vollständige Füllung verhindern.",
    "paragraphs": [
      "Jetzt verändern wir nur den Auftrag, nicht das Buch. Der Käufer will weiterhin fünf, erlaubt aber höchstens 50 Euro je Aktie. Angebote zu 51 sind damit für diesen Auftrag unzulässig.",
      "Unsere Fallregel führt zwei Aktien zu 50 aus und lässt drei als offenen Restauftrag stehen. Der bestätigte Preisbetrag ist 100 Euro. Die offene Menge ist kein weiterer Kauf. Der Rest darf nach unserer Regel später nur bei einem passenden Preis handeln.",
      "Das ist ein eigener Vergleichsfall und folgt nicht zusätzlich nach dem vorherigen Fünferkauf. Ohne diese Trennung würden die Mengen falsch zusammengezählt. Eine Preisgrenze ist außerdem keine Zusage einer vollständigen Ausführung."
    ],
    "columns": [
      {
        "title": "Gleiches Buch",
        "tone": "neutral",
        "points": [
          "2 zu 50; 4 zu 51.",
          "Neues Kauflimit höchstens 50."
        ]
      },
      {
        "title": "Vergleichsergebnis",
        "tone": "positive",
        "points": [
          "2 zu 50 ausgeführt → 100 Euro.",
          "3 offen; nicht zusätzlich gekauft."
        ]
      }
    ],
    "prompt": "Wie viele sind in diesem Vergleichsfall bisher gekauft?",
    "answers": [
      {
        "label": "Sieben, weil beide Vergleichsfälle addiert werden.",
        "explanation": "Die Fälle sind alternative Aufträge, keine gemeinsame Folge."
      },
      {
        "label": "Zwei.",
        "explanation": "Richtig: Die drei zum unzulässigen Preis gehören nicht zur Ausführung."
      },
      {
        "label": "Fünf, weil die Wunschmenge unverändert ist.",
        "explanation": "Eine Wunschmenge garantiert keine zulässige Gegenmenge."
      }
    ],
    "correct": 1,
    "rule": "Alternative Fälle getrennt rechnen und offene Menge nicht als Trade zählen."
  },
  {
    "title": "Zwei Handelswege nach Gesamtkosten vergleichen",
    "summary": "Menge und Gebühren gehören zum Preisvergleich.",
    "paragraphs": [
      "Wir vergleichen zwei alternative Käufe derselben fünf Aktien. Beide Plätze sind erreichbar, die Angebote bleiben im Fall unverändert und beide Wege sind für den Nutzer zulässig. Unsere Vergleichsbasis ist damit ausdrücklich festgelegt.",
      "An A kosten die fünf Aktien wie im Hauptfall 253 Euro. Hinzu kommen zwei Euro Gebühr: insgesamt 255. An B sind fünf zu je 50,80 verfügbar. Das ergibt 254 Euro, plus 0,50 Gebühr: insgesamt 254,50.",
      "B ist in diesem Fall um 0,50 Euro günstiger, obwohl A den besseren ersten Ask hat. Das ist keine allgemeine Empfehlung für B. Geänderte Mengen, Gebühren oder Angebote können das Ergebnis ändern. Vergleiche stets die ganze gewünschte Menge."
    ],
    "columns": [
      {
        "title": "Weg A",
        "tone": "neutral",
        "points": [
          "Preisbetrag 253; Gebühr 2.",
          "Gesamt 255 Euro."
        ]
      },
      {
        "title": "Weg B",
        "tone": "positive",
        "points": [
          "5 × 50,80 = 254; Gebühr 0,50.",
          "Gesamt 254,50; im Fall 0,50 günstiger."
        ]
      }
    ],
    "prompt": "Welcher Weg hat unter diesen Annahmen den kleineren Gesamtbetrag?",
    "answers": [
      {
        "label": "A allein wegen des besten Ask 50.",
        "explanation": "Die restliche Menge und Gebühren verändern den Gesamtbetrag."
      },
      {
        "label": "Beide immer, unabhängig von ihren Angeboten.",
        "explanation": "Die ausdrücklich genannten Zahlen sind verschieden."
      },
      {
        "label": "B mit 254,50 Euro.",
        "explanation": "Richtig: Der Vergleich umfasst die ganze Menge und die genannten Gebühren."
      }
    ],
    "correct": 2,
    "rule": "Gleiche Menge und vollständige genannte Kosten als Vergleichsbasis nutzen."
  },
  {
    "title": "Eine Buchänderung muss kein Trade sein",
    "summary": "Stornierte Menge und gehandelte Menge sind verschiedene Ereignisse.",
    "paragraphs": [
      "Ein Orderbuch verändert sich durch neue Aufträge, Stornierungen und Ausführungen. Eine Stornierung entfernt einen offenen Wunsch. Sie ist kein Geschäft zwischen Käufer und Verkäufer.",
      "Unser eigener Fall startet mit drei Angeboten zu 50 und vier zu 51. Die drei zu 50 werden vollständig storniert. Danach ist 51 der beste Ask. In diesem Schritt wurde ausdrücklich keine Aktie gehandelt. Der letzte bestätigte Trade bleibt 50.",
      "Du kannst den höheren Ask aus dem entfernten Angebot erklären. Du darfst aber keine Ausführung zu 51 hinzufügen, die nicht gemeldet wurde. Eine Bewegung der Angebote und eine Bewegung des letzten Trades brauchen getrennte Nachweise."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "3 zu 50; 4 zu 51.",
          "Letzter Trade 50."
        ]
      },
      {
        "title": "Nach Stornierung",
        "tone": "positive",
        "points": [
          "Bestes verbleibendes Angebot 51.",
          "Volumen dieses Schritts 0; letzter Trade weiter 50."
        ]
      }
    ],
    "prompt": "Was ist in diesem Schritt gestiegen?",
    "answers": [
      {
        "label": "Der beste Ask, ohne neuen Trade.",
        "explanation": "Richtig: Die günstige Angebotsmenge wurde entfernt."
      },
      {
        "label": "Sicher der letzte Trade auf 51.",
        "explanation": "Ein solcher Abschluss wird ausdrücklich nicht genannt."
      },
      {
        "label": "Die gehandelte Menge um drei.",
        "explanation": "Die drei wurden storniert, nicht gehandelt."
      }
    ],
    "correct": 0,
    "rule": "Jede Buchänderung ihrer Ereignisart zuordnen."
  },
  {
    "title": "Einen Auktionsfall vollständig erklären",
    "summary": "Zulässige Mengen und Auswahlregel gehören vor das Ergebnis.",
    "paragraphs": [
      "Unser Auktionsfall prüft nur die Preise 100 und 101. Käufer wollen vier Einheiten bis 101. Verkäufer bieten zwei ab 100 und drei ab 101. Die Regel wählt den Prüfpreis mit der größeren gemeinsam handelbaren Menge.",
      "Bei 100 sind vier Kauf- und zwei Verkaufseinheiten zulässig: Menge zwei. Bei 101 sind vier Kauf- und fünf Verkaufseinheiten zulässig: Menge vier. Deshalb gewinnt 101. Alle vier ausgeführten Einheiten handeln zum gemeinsamen Preis 101.",
      "Der Preisbetrag beträgt 404 Euro. Eine Verkaufseinheit bleibt in dieser Auktion unerfüllt. Die Einpreisregel ist Teil unseres Modells. Eine andere echte Auktion kann zusätzliche Auswahl- und Zuteilungsregeln haben."
    ],
    "columns": [
      {
        "title": "Preisprüfung",
        "tone": "neutral",
        "points": [
          "100: Kauf 4, Verkauf 2 → Menge 2.",
          "101: Kauf 4, Verkauf 5 → Menge 4."
        ]
      },
      {
        "title": "Bestätigtes Ergebnis im Fall",
        "tone": "positive",
        "points": [
          "4 zu 101 → 404 Euro.",
          "Verkaufsüberhang 1."
        ]
      }
    ],
    "prompt": "Welches Ergebnis folgt aus unserer Preisregel?",
    "answers": [
      {
        "label": "Zwei zu 100, weil der billigere Preis immer gewinnt.",
        "explanation": "Unsere Regel maximiert die handelbare Menge."
      },
      {
        "label": "Vier Einheiten zu 101.",
        "explanation": "Richtig: Vier ist die größte gemeinsam handelbare Menge."
      },
      {
        "label": "Fünf zu 101, weil fünf Verkäufer wollen.",
        "explanation": "Die Kaufseite erlaubt nur vier."
      }
    ],
    "correct": 1,
    "rule": "Auktionsregeln und zulässige Mengen nennen, bevor du den Preis erklärst."
  },
  {
    "title": "Gesamtvolumen ist nicht deine Zuteilung",
    "summary": "Ein endgültiger Preis ersetzt keinen eigenen Ausführungsbericht.",
    "paragraphs": [
      "Ein Ausführungsnachweis ist eine bestätigte Meldung über deinen Abschluss. Eine Auktion kann vier Einheiten insgesamt ausführen, während dein eigener Auftrag nur einen Teil bekommt. Die individuelle Zuteilung hängt von den geltenden Regeln und den anderen Aufträgen ab.",
      "Im Vergleichsfall meldet die Vorschau zunächst 101 mit vier Einheiten. Später wird dieses Gesamtergebnis bestätigt. Dein Auftrag wollte zwei. Dein eigener Ausführungsbericht bestätigt aber nur eine Einheit zu 101. Der Rest bleibt nach unserer Regel offen.",
      "Du hast deshalb einen eigenen Preisbetrag von 101 Euro vor Kosten. Die vier gehören zur ganzen Auktion. Weder die Vorschau noch die Gesamtmeldung beweist, dass alle vier oder deine gewünschten zwei an dich gingen."
    ],
    "columns": [
      {
        "title": "Gesamte Auktion",
        "tone": "neutral",
        "points": [
          "Vorschau 101/4.",
          "Später bestätigt: insgesamt 4 zu 101."
        ]
      },
      {
        "title": "Eigener Auftrag",
        "tone": "positive",
        "points": [
          "2 gewünscht, 1 bestätigt.",
          "Eigener Betrag 101 Euro; Rest 1 offen."
        ]
      }
    ],
    "prompt": "Welche eigene Ausführung ist nachgewiesen?",
    "answers": [
      {
        "label": "Vier, weil die ganze Auktion vier meldet.",
        "explanation": "Gesamtvolumen und individuelle Zuteilung sind verschieden."
      },
      {
        "label": "Zwei, weil jede Vorschau deinen Wunsch erfüllt.",
        "explanation": "Eine Vorschau ist keine individuelle Füllungsgarantie."
      },
      {
        "label": "Eine Einheit zu 101.",
        "explanation": "Richtig: Dein eigener Bericht nennt diese Menge."
      }
    ],
    "correct": 2,
    "rule": "Vorschau, Gesamtergebnis und eigenen Ausführungsnachweis auseinanderhalten."
  },
  {
    "title": "Eine Gegenprobe zeigt die Rolle der Tiefe",
    "summary": "Verändere im Vergleich nur eine Annahme.",
    "paragraphs": [
      "Eine Gegenprobe ist ein Vergleich mit einem gezielt veränderten Fall. Hier lassen wir Auftrag und Preisregel gleich und verändern nur die Menge auf der ersten Verkaufsstufe. So wird deren Wirkung im Modell sichtbar.",
      "Im Hauptfall kosten fünf Aktien 253 Euro, weil zu 50 nur zwei bereitstehen. Im Vergleich stehen stattdessen fünf zu 50 bereit. Alle anderen Bedingungen des Kaufauftrags bleiben gleich. Nun werden fünf zu 50 für 250 Euro ausgeführt.",
      "Der Unterschied beträgt drei Euro vor Kosten. Diese Modellrechnung erklärt den Beitrag der ersten Stufe unter festen Annahmen. Sie beweist nicht, dass nur die Tiefe in jedem echten Markt den Preis bestimmt. In der Wirklichkeit können mehrere Bedingungen zugleich wechseln."
    ],
    "columns": [
      {
        "title": "Hauptfall",
        "tone": "neutral",
        "points": [
          "2 zu 50; Restkauf 3 zu 51.",
          "Preisbetrag 253 Euro."
        ]
      },
      {
        "title": "Gegenprobe",
        "tone": "positive",
        "points": [
          "5 zu 50 verfügbar.",
          "Preisbetrag 250; Unterschied 3 Euro."
        ]
      }
    ],
    "prompt": "Was wurde in dieser Gegenprobe gezielt verändert?",
    "answers": [
      {
        "label": "Die verfügbare Menge zu 50.",
        "explanation": "Richtig: Auftrag und Preisregel bleiben im Vergleich gleich."
      },
      {
        "label": "Alle Handelsregeln gleichzeitig.",
        "explanation": "Dann ließe sich die einzelne Änderung nicht so zuordnen."
      },
      {
        "label": "Die Geschichte aller früheren Trades.",
        "explanation": "Die Gegenprobe ist ein alternativer Modellfall."
      }
    ],
    "correct": 0,
    "rule": "Für eine Gegenprobe genau nennen, was gleich bleibt und was sich ändert."
  },
  {
    "title": "Eine Nachricht mit der vorherigen Erwartung vergleichen",
    "summary": "Ein Anstieg gegenüber früher kann unter der Erwartung liegen.",
    "paragraphs": [
      "Eine Nachrichtenüberraschung vergleicht eine erste Meldung mit einer zuvor festgehaltenen Erwartung. Sie ist etwas anderes als die Veränderung gegenüber einem älteren Wert. Beide Vergleiche brauchen ihre eigene Ausgangszahl.",
      "In unserem Fall war der frühere Umsatz acht Millionen. Vor der neuen Meldung lag die Erwartung bei 15 Millionen. Die erste Meldung nennt zwölf Millionen. Gegenüber früher sind das plus vier. Gegenüber der Erwartung sind es minus drei.",
      "Damit ist der Umsatz gestiegen und die Meldung liegt trotzdem unter der genannten Erwartung. Das allein bestimmt keine sichere Kursrichtung. Andere Informationen, Erwartungen und Aufträge können gleichzeitig wichtig sein."
    ],
    "columns": [
      {
        "title": "Vergleich mit früher",
        "tone": "neutral",
        "points": [
          "Früher 8; neu 12 Millionen.",
          "Veränderung +4 Millionen."
        ]
      },
      {
        "title": "Vergleich mit Erwartung",
        "tone": "positive",
        "points": [
          "Vorher erwartet 15; erste Meldung 12.",
          "Überraschung −3 Millionen."
        ]
      }
    ],
    "prompt": "Welche beiden Aussagen passen gleichzeitig?",
    "answers": [
      {
        "label": "Die Zahlen garantieren den nächsten Kurs.",
        "explanation": "Eine Umsatzrechnung ist keine sichere Kursprognose."
      },
      {
        "label": "Gegenüber früher plus vier; gegenüber Erwartung minus drei.",
        "explanation": "Richtig: Die Vergleichszahlen sind unterschiedlich."
      },
      {
        "label": "Jeder Anstieg muss über jeder Erwartung liegen.",
        "explanation": "Eine vorherige Erwartung kann noch höher gewesen sein."
      }
    ],
    "correct": 1,
    "rule": "Früheren Wert und vorherige Erwartung getrennt als Vergleichsbasis nennen."
  },
  {
    "title": "Beobachtung, Annahme und Hypothese markieren",
    "summary": "Deine Erklärung soll zeigen, wie sicher jeder Satz belegt ist.",
    "paragraphs": [
      "Eine Beobachtung ist eine Angabe aus den betrachteten Daten. Eine Annahme ist eine für den Fall gesetzte Voraussetzung. Eine Hypothese ist eine mögliche Erklärung, die noch weitere Belege braucht.",
      "Unsere Beobachtung lautet: Nach einer Meldung wird der Ask höher angezeigt. Unsere Annahme lautet: Die verglichenen Uhrzeiten sind abgeglichen. Eine Hypothese lautet: Ein Teilnehmer hat wegen der Meldung seine Angebote geändert. Seine Absicht wurde aber nicht bestätigt.",
      "Zeitliche Nähe allein beweist diese Hypothese nicht. Für eine stärkere Erklärung brauchst du weitere geeignete Daten. Du kannst die Buchänderung trotzdem genau beschreiben und den unbekannten Grund ausdrücklich offenlassen."
    ],
    "columns": [
      {
        "title": "Belegt oder gesetzt",
        "tone": "neutral",
        "points": [
          "Beobachtung: Ask später höher.",
          "Annahme: vergleichbare Uhren."
        ]
      },
      {
        "title": "Mögliche Erklärung",
        "tone": "positive",
        "points": [
          "Hypothese: Reaktion auf Meldung.",
          "Absicht nicht bestätigt."
        ]
      }
    ],
    "prompt": "Welcher Satz ist hier nur eine Hypothese?",
    "answers": [
      {
        "label": "Der Ask wird in den Daten später höher angezeigt.",
        "explanation": "Das ist die genannte Beobachtung."
      },
      {
        "label": "Für die Rechnung werden abgeglichene Uhren vorausgesetzt.",
        "explanation": "Das ist die ausdrücklich gesetzte Annahme."
      },
      {
        "label": "Die Meldung war der Grund für die Angebotsänderung.",
        "explanation": "Richtig: Dieser Zusammenhang ist möglich, aber nicht nachgewiesen."
      }
    ],
    "correct": 2,
    "rule": "Beobachtete Daten, gesetzte Annahmen und vermutete Gründe kennzeichnen."
  },
  {
    "title": "Eine fehlerhafte Erklärung mit einem Gegenbeispiel prüfen",
    "summary": "Mehr gekaufte als verkaufte Einheiten erklärt keinen bestätigten Trade.",
    "paragraphs": [
      "Ein Gegenbeispiel ist ein Fall, der einer allgemeinen Behauptung widerspricht. Behauptet jemand, ein höherer Trade entstehe nur durch mehr gekaufte als verkaufte Einheiten, kannst du einen vollständig gerechneten Fall dagegenhalten.",
      "Im Hauptfall werden zwei zu 50 und drei zu 51 gekauft. Der letzte Teilpreis ist höher als die erste Stufe. Trotzdem wurden fünf gekauft und dieselben fünf verkauft. Der höhere Teilpreis folgt hier aus der begrenzten günstigen Gegenmenge.",
      "Unterschiedlich sein können die nicht ausgeführten Wünsche oder die Bereitschaft, neue Preise zu erlauben. Das darfst du genauer beschreiben. Die tatsächlichen beiden Seiten eines Geschäfts bleiben mengenmäßig gleich."
    ],
    "columns": [
      {
        "title": "Problematische Behauptung",
        "tone": "neutral",
        "points": [
          "Höherer Trade braucht mehr gekaufte als verkaufte Einheiten.",
          "Vermischt Wünsche und Abschlüsse."
        ]
      },
      {
        "title": "Gegenbeispiel",
        "tone": "positive",
        "points": [
          "5 gekauft und dieselben 5 verkauft.",
          "Letzter Teilpreis dennoch 51 statt erster Stufe 50."
        ]
      }
    ],
    "prompt": "Welche Aussage ist im Hauptfall richtig?",
    "answers": [
      {
        "label": "Gekaufte und verkaufte Menge sind gleich; die günstige Menge reichte nicht.",
        "explanation": "Richtig: Die Ausführung erreicht deshalb die nächste zulässige Stufe."
      },
      {
        "label": "Fünf gekauft, aber nur zwei verkauft.",
        "explanation": "Auch die drei zu 51 brauchen eine Verkaufsseite."
      },
      {
        "label": "Der Preis muss bei gleichen Mengen unverändert bleiben.",
        "explanation": "Die Stufen können verschiedene Preise haben."
      }
    ],
    "correct": 0,
    "rule": "Wünsche, verfügbare Mengen und beidseitige Abschlüsse nicht vermischen."
  },
  {
    "title": "Einen Future-Fall in den richtigen Einheiten erklären",
    "summary": "Kursgewinn, Nominalwert und Margin sind verschiedene Größen.",
    "paragraphs": [
      "Unser eigener Future hat zehn Euro je Punkt. Eine Kaufposition umfasst zwei Verträge. Der betrachtete Preis steigt von 99 auf 100. Gebühren fehlen. Die Übungsregel fordert 80 Euro Sicherheitsleistung je Vertrag.",
      "Die Preisbewegung beträgt einen Punkt. Ein Punkt mal zehn Euro mal zwei Verträge ergibt plus 20 Euro Wertänderung. Beim Startkurs 99 beträgt der Nominalwert 99 mal zehn mal zwei, also 1.980 Euro. Die geforderte Sicherheit beträgt 160 Euro.",
      "Keiner dieser Beträge ersetzt die anderen. Die Sicherheit ist keine allgemeine Verlustobergrenze. Ob und wann der Wertausgleich tatsächlich gebucht wird, hängt von den Abrechnungsregeln ab. Eine positive Wertänderung allein beweist keine auszahlbare Kontosumme."
    ],
    "columns": [
      {
        "title": "Wertänderung",
        "tone": "neutral",
        "points": [
          "(100 − 99) × 10 × 2 = +20 Euro.",
          "Kaufposition; vor Kosten."
        ]
      },
      {
        "title": "Weitere Größen",
        "tone": "positive",
        "points": [
          "Nominalwert zu 99: 1.980 Euro.",
          "Übungssicherheit 2 × 80 = 160 Euro."
        ]
      }
    ],
    "prompt": "Welche Zahl beschreibt die Wertänderung der Kaufposition?",
    "answers": [
      {
        "label": "160 Euro als garantierter Höchstverlust.",
        "explanation": "Das ist die Übungssicherheit ohne solche Garantie."
      },
      {
        "label": "Plus 20 Euro vor Kosten.",
        "explanation": "Richtig: Punktänderung, Multiplikator und Vertragszahl werden multipliziert."
      },
      {
        "label": "1.980 Euro sicherer Gewinn.",
        "explanation": "Das ist der Startnominalwert, nicht die Bewegung."
      }
    ],
    "correct": 1,
    "rule": "Beim Future Kursänderung, Vertragsgröße, Sicherheit und Buchungsstatus trennen."
  },
  {
    "title": "Den Weg nach dem Aktienkauf beschreiben",
    "summary": "Ein bestätigter Kauf und ein gelieferter Bestand sind unterschiedliche Zustände.",
    "paragraphs": [
      "Wir kehren zum Hauptkauf von fünf Aktien für 253 Euro zurück. Die einmalige Übungsgebühr beträgt zwei Euro. Der gesamte Kaufbetrag nach dieser Kostenregel ist 255 Euro.",
      "Der Broker bestätigt die Ausführung. Im Clearing werden die passenden Zahlungs- und Lieferpflichten festgestellt. Die Übertragung von fünf Aktien und dem Preisbetrag ist zum nächsten gültigen Abwicklungstag geplant. Die Gebühr wird nach unserer Kontoregel separat abgerechnet. Noch liegt keine bestätigte Lieferung vor.",
      "Die App zeigt bereits die gekauften fünf Aktien mit dem Status nicht abgewickelt. Das ist kein Widerspruch zur bestätigten Ausführung. Deine Erklärung nennt deshalb den Handel, die Kosten und den noch offenen Übertragungsschritt getrennt."
    ],
    "columns": [
      {
        "title": "Bestätigter Kauf",
        "tone": "neutral",
        "points": [
          "5 Aktien für 253 Euro.",
          "Gebühr 2; gesamter Kaufbetrag 255."
        ]
      },
      {
        "title": "Abwicklung im Fall",
        "tone": "positive",
        "points": [
          "Pflichten festgestellt; Übertragung geplant.",
          "Aktienanzeige noch nicht abgewickelt."
        ]
      }
    ],
    "prompt": "Welche Aussage beschreibt den Status richtig?",
    "answers": [
      {
        "label": "Die Appanzeige beweist bereits jede Lieferung.",
        "explanation": "Sie nennt ausdrücklich den offenen Abwicklungsstatus."
      },
      {
        "label": "Ohne Lieferung hat es nie eine Ausführung gegeben.",
        "explanation": "Der Ausführungsbericht bestätigt den Handel."
      },
      {
        "label": "Der Kauf ist bestätigt; die Lieferung steht noch offen.",
        "explanation": "Richtig: Handel und endgültige Übertragung sind getrennte Schritte."
      }
    ],
    "correct": 2,
    "rule": "Ausführung, Kostenregel und bestätigten Lieferstatus getrennt nennen."
  },
  {
    "title": "Netting im Gesamtfall nachrechnen",
    "summary": "Ein weiterer Verkauf verändert Pflichten, aber löscht den Kauf nicht.",
    "paragraphs": [
      "In diesem neuen Gesamtfall kauft der Teilnehmer fünf Aktien für 253 Euro und verkauft danach zwei gleiche Aktien zu je 52. Beide Geschäfte sind bestätigt. Stück- und Geldpflichten dürfen nach unserer Regel gemeinsam verrechnet werden.",
      "Netto erhält er fünf minus zwei, also drei Aktien. Der Verkaufspreisbetrag ist 104 Euro. Der verbleibende Preisbetrag zu zahlen ist 253 minus 104, also 149 Euro. Zusätzlich entstehen zwei Euro Kaufgebühr und ein Euro Verkaufsgebühr. Die gesamte Nettogeldbelastung ist 152 Euro.",
      "Über beide Geschäfte wurden sieben Einheiten gehandelt, je Ausführung einmal gezählt. Das Netto von drei ist kein Handelsvolumen und keine vollständige Gewinnrechnung. Ausgangsbestand und weitere Bewertungsregeln müssten dafür bekannt sein."
    ],
    "columns": [
      {
        "title": "Einzelgeschäfte",
        "tone": "neutral",
        "points": [
          "Kauf 5 für 253; Verkauf 2 für 104 Euro.",
          "Gebühren 2 + 1 = 3 Euro."
        ]
      },
      {
        "title": "Netto im Fall",
        "tone": "positive",
        "points": [
          "3 Aktien erhalten; 149 Euro Preisnetto zahlen.",
          "Mit Gebühren 152 Euro; Handelsvolumen 7."
        ]
      }
    ],
    "prompt": "Welche Kombination passt zur zulässigen Verrechnung?",
    "answers": [
      {
        "label": "Drei Aktien netto, 152 Euro Geldbelastung mit Gebühren, sieben gehandelte Einheiten.",
        "explanation": "Richtig: Stücknetto, Geldnetto und Volumen werden getrennt berechnet."
      },
      {
        "label": "Drei gehandelte Einheiten und sicher 104 Euro Gewinn.",
        "explanation": "Netto ist nicht Volumen; Erlös ist nicht automatisch Gewinn."
      },
      {
        "label": "Sieben Aktien netto und 357 Euro zahlen.",
        "explanation": "Der Verkauf ist eine Gegenpflicht und ein Zufluss."
      }
    ],
    "correct": 0,
    "rule": "Stücknetto, Geldnetto, Kosten und Handelsvolumen getrennt rechnen."
  },
  {
    "title": "Aus den Daten einen verständlichen Marktbericht schreiben",
    "summary": "Eine gute Erklärung verbindet Zahlen mit dem Ablauf und seinen Grenzen.",
    "paragraphs": [
      "Dein Bericht soll auch ohne Vorwissen lesbar sein. Er nennt zuerst Produkt und Platz. Danach folgen Quelle, Zeitpunkt und Phase. Beschreibe Angebote, Auftrag und bestätigte Ausführung in der richtigen Reihenfolge. Ergänze Kosten und Abwicklungsstatus.",
      "Ein passender Bericht zum Hauptfall lautet sinngemäß: Am geöffneten Übungsplatz A wollte jemand fünf Aktien W kaufen. Zwei zu 50 und drei zu 51 wurden bestätigt. Das sind 253 Euro vor Gebühren und 255 nach unserer Gebührenregel. Eine Aktie blieb zu 51 angeboten. Die Lieferung ist noch geplant.",
      "Du ergänzt: Das sichtbare Angebot und der Auftrag erklären die Teilpreise unter den gesetzten Annahmen. Das persönliche Kaufmotiv und der nächste Kurs bleiben offen. So ist der Bericht vollständig für diesen Fall, ohne eine unbekannte Geschichte dazuzuerfinden."
    ],
    "columns": [
      {
        "title": "Im Bericht enthalten",
        "tone": "neutral",
        "points": [
          "Produkt W, Platz A, geöffnete passende Phase.",
          "2 zu 50 und 3 zu 51; 253 vor, 255 nach Gebühr."
        ]
      },
      {
        "title": "Ebenfalls enthalten",
        "tone": "positive",
        "points": [
          "Restangebot 1 zu 51; Lieferung noch geplant.",
          "Motiv und nächste Kursrichtung offen."
        ]
      }
    ],
    "prompt": "Welcher Zusatz hält den Bericht fachlich sauber?",
    "answers": [
      {
        "label": "Die fünf Aktien wurden bestimmt schon geliefert.",
        "explanation": "Die Lieferung ist im Fall noch geplant."
      },
      {
        "label": "Der Ablauf ist erklärt; persönliches Motiv und nächster Kurs bleiben offen.",
        "explanation": "Richtig: Eine vollständige Ablaufrechnung braucht keine erfundene Zukunft."
      },
      {
        "label": "Der Käufer muss die nächste Kursbewegung sicher kennen.",
        "explanation": "Das ist durch keinen Bericht belegt."
      }
    ],
    "correct": 1,
    "rule": "Einen nachvollziehbaren Ablauf schreiben und seine Beleggrenzen sichtbar lassen."
  },
  {
    "title": "Dein Abschlusscheck für einen neuen Markt",
    "summary": "Du kannst die Methode übertragen, musst die neuen Regeln aber nachlesen.",
    "paragraphs": [
      "Der Einführungskurs ist mit diesem Kapitel abgeschlossen. Du hast gelernt, Produkte, Rollen, Handelsplätze, Preisarten, Mengen, Handelszeiten, Phasen und Abwicklung zusammenzusetzen. Für einen neuen Markt beginnst du wieder beim Steckbrief.",
      "Prüfe die Einheit und den Vertrag. Ordne Quelle, Platz, Datum und Phase zu. Unterscheide Wünsche und bestätigte Abschlüsse. Rechne Teilmengen, Preise und Kosten. Prüfe anschließend Position, Clearing, Übertragung und Verfügbarkeit. Markiere Beobachtungen, Annahmen und offene Gründe.",
      "Eine sichere Analyse ist nicht automatisch eine profitable Strategie. Sie hilft dir, Daten und Regeln zu verstehen und falsche Erklärungen zu erkennen. Wenn eine Frage offenbleibt, suche die passende Produktregel oder einen bestätigten Bericht. Eine Wissenslücke darf in deiner Erklärung stehen."
    ],
    "columns": [
      {
        "title": "Übertragbare Methode",
        "tone": "neutral",
        "points": [
          "Steckbrief; Datenquelle; Zeit und Phase.",
          "Aufträge, Ausführungen, Kosten und Abwicklung prüfen."
        ]
      },
      {
        "title": "Neue Informationen nötig",
        "tone": "positive",
        "points": [
          "Produktregeln und konkrete Daten nachlesen.",
          "Keine Profitgarantie aus dem Kursabschluss."
        ]
      }
    ],
    "prompt": "Was ist der passende erste Schritt bei einem neuen Produkt?",
    "answers": [
      {
        "label": "Alle Zahlen des Aktienfalls unverändert übernehmen.",
        "explanation": "Ein anderes Produkt kann andere Einheiten und Regeln haben."
      },
      {
        "label": "Den Kursabschluss als sichere Gewinnzusage ansehen.",
        "explanation": "Grundlagenwissen ist keine garantierte Handelsrendite."
      },
      {
        "label": "Seine Merkmale, Einheiten und geltenden Regeln klären.",
        "explanation": "Richtig: Die Methode bleibt nutzbar, die Produktregeln können anders sein."
      }
    ],
    "correct": 2,
    "rule": "Die Methode übertragen und neue Produktregeln selbst prüfen."
  }
] as const;

export const marketBasicsChapterTwelveLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-12.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 12 · Einen Markt selbst erklären', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 12', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
