import type { Lesson } from '../../types';

// Eigenständige Produktbeispiele; alle Zahlen sind vereinfachte Lernfälle.
const drafts = [
  {
    "title": "Ein Produkt erkennen, bevor du den Preis beurteilst",
    "summary": "Name, Rechte und Pflichten gehören zusammen.",
    "paragraphs": [
      "Aktie, ETF und Future können im Chart wie ähnliche Linien aussehen. Trotzdem sind es verschiedene Produkte. Eine Aktie gibt dir einen Unternehmensanteil. Mit einem Fondsanteil bist du an einem gemeinsamen Anlageprodukt beteiligt. Ein Future ist ein Vertrag. Der Chart zeigt die Preise, aber nicht alle Rechte und Pflichten.",
      "Drei Anzeigen tragen das Wort Gold. Die erste meint einen Goldbarren. Die zweite einen Anteil an einem Anlageprodukt. Die dritte einen Vertrag mit Goldbezug. Nur beim Barren besitzt du hier direkt die Ware. Menge, Währung und Laufzeit können bei den drei Angeboten verschieden sein.",
      "Nutze einen Produktcheck: Was ist es? Was darf oder muss ich damit tun? Worauf bezieht sich der Preis? Welche Einheit und Währung gelten? Gibt es ein Enddatum? Welche Verluste sind möglich? Unsere Beispiele sind vereinfacht. Gebühren lassen wir weg, wenn nichts anderes dasteht."
    ],
    "columns": [
      {
        "title": "Der Bildschirm",
        "tone": "neutral",
        "points": [
          "Name oder Symbol.",
          "Linie und angezeigter Preis."
        ]
      },
      {
        "title": "Der Produktcheck",
        "tone": "positive",
        "points": [
          "Produktart und Rechte.",
          "Einheit, Währung, Laufzeit und Risiken."
        ]
      }
    ],
    "prompt": "Drei Produkte heißen „Gold“. Was kannst du daraus sicher schließen?",
    "answers": [
      {
        "label": "Nur, dass ich die genaue Produktart noch prüfen muss.",
        "explanation": "Richtig: Der Name allein erklärt weder Besitz noch Vertragsbedingungen."
      },
      {
        "label": "Bei allen besitze ich einen Barren.",
        "explanation": "Ein Vertrag oder Anlageprodukt ist nicht automatisch ein Barren."
      },
      {
        "label": "Alle haben denselben Geldwert pro Preisschritt.",
        "explanation": "Einheiten und Vertragsgrößen können unterschiedlich sein."
      }
    ],
    "correct": 0,
    "rule": "Erst das Produkt verstehen, dann seine Preisbewegung lesen."
  },
  {
    "title": "Aktien: ein Anteil an einem Unternehmen",
    "summary": "Beteiligung ist etwas anderes als ein Kredit.",
    "paragraphs": [
      "Eine Aktie ist ein Anteil am Eigenkapital eines Unternehmens. Eigenkapital meint hier das Kapital seiner Eigentümer. Je nach Aktienart hast du bestimmte Rechte. Du darfst vielleicht abstimmen oder erhältst eine beschlossene Auszahlung. Du kannst dir aber kein Stück des Firmengebäudes mitnehmen.",
      "Unser erfundenes Unternehmen hat 10.000 gleichartige Aktien. Dir gehören 100. Rechne 100 / 10.000 = 0,01, also 1 %. Du hältst damit 1 % dieser Aktien. Das verspricht dir nicht 1 % der Einnahmen als Auszahlung. Einnahmen, Kosten, Gewinn und Auszahlungen sind verschiedene Dinge.",
      "Eine gewöhnliche Aktie hat keinen festen Rückzahlungstag. Möchtest du aussteigen, verkaufst du sie normalerweise an einen anderen Käufer. Dafür muss ein Handel zustande kommen. Der neue Preis kann über oder unter deinem Kaufpreis liegen."
    ],
    "columns": [
      {
        "title": "Beteiligung im Beispiel",
        "tone": "neutral",
        "points": [
          "100 von 10.000 gleichen Aktien.",
          "Anteil: 1 %."
        ]
      },
      {
        "title": "Keine automatische Zusage",
        "tone": "positive",
        "points": [
          "Keine feste jährliche Auszahlung.",
          "Kein fester Verkaufspreis beim Ausstieg."
        ]
      }
    ],
    "prompt": "Was bedeuten die 100 Aktien im Beispiel?",
    "answers": [
      {
        "label": "Eine garantierte Auszahlung von 1 % der Umsätze.",
        "explanation": "Umsätze sind keine automatische Ausschüttung."
      },
      {
        "label": "Eine Beteiligung von 1 % an den gleichartigen Aktien.",
        "explanation": "Richtig: 100 geteilt durch 10.000 ergibt 1 %."
      },
      {
        "label": "Ein Kredit, der zwingend nächste Woche zurückgezahlt wird.",
        "explanation": "Eine gewöhnliche Aktie ist Eigenkapital, kein befristeter Kredit."
      }
    ],
    "correct": 1,
    "rule": "Ein Unternehmensanteil ist kein garantierter Zahlungsstrom."
  },
  {
    "title": "Aktien: Kursgewinn und Dividende unterscheiden",
    "summary": "Die gesamte Veränderung hat mehrere Bestandteile.",
    "paragraphs": [
      "Der Kurs ist der gehandelte Preis einer Aktie. Eine Dividende ist eine beschlossene Auszahlung an Aktionäre. Aktionäre sind Menschen oder Organisationen mit Aktien. Ein Unternehmen kann Gewinne behalten oder einen Teil auszahlen. Frühere Dividenden garantieren keine späteren Zahlungen.",
      "Du kaufst eine Aktie für 40 Euro. Später erhältst du 1 Euro Dividende und verkaufst für 43. Der Kursgewinn ist 43 − 40 = 3 Euro. Dazu kommt 1 Euro Auszahlung. Zusammen sind es 4 Euro vor Gebühren und Steuern. Rechne 4 / 40 = 0,10: Das sind 10 % deines Kaufpreises.",
      "Eine Dividende entsteht nicht ohne Einfluss auf den Wert der Aktie. Nach dem Wegfall des Auszahlungsanspruchs ist die Aktie unter sonst gleichen Bedingungen weniger wert. Gleichzeitig können Nachrichten den Kurs ändern. Betrachte deshalb Kursveränderung und erhaltene Auszahlungen gemeinsam. Die 10 % gelten nur für diesen Beispielzeitraum."
    ],
    "columns": [
      {
        "title": "Beispielwerte",
        "tone": "neutral",
        "points": [
          "Kauf 40 Euro; Verkauf 43 Euro.",
          "Dividende 1 Euro."
        ]
      },
      {
        "title": "Gesamtergebnis vor Kosten",
        "tone": "positive",
        "points": [
          "43 − 40 + 1 = 4 Euro.",
          "4 / 40 = 10 %."
        ]
      }
    ],
    "prompt": "Wie groß ist das Ergebnis vor Kosten im Beispiel?",
    "answers": [
      {
        "label": "Nur 1 Euro, weil allein Dividenden zählen.",
        "explanation": "Auch der Verkauf über dem Kaufpreis trägt zum Ergebnis bei."
      },
      {
        "label": "Garantiert jedes Jahr 10 %.",
        "explanation": "Ein einzelnes Beispiel ist keine Zusage für künftige Jahre."
      },
      {
        "label": "4 Euro beziehungsweise 10 % des Kaufpreises.",
        "explanation": "Richtig: Kursgewinn und Dividende werden zusammengerechnet."
      }
    ],
    "correct": 2,
    "rule": "Kursveränderung und Ausschüttung gemeinsam rechnen."
  },
  {
    "title": "Anleihen: Geld leihen statt Miteigentümer werden",
    "summary": "Eine Schuldverschreibung hat Zahlungsbedingungen.",
    "paragraphs": [
      "Mit einer Anleihe verleihst du Geld nach festen Vertragsbedingungen. Der Herausgeber heißt Emittent. Das kann ein Unternehmen oder Staat sein. Du bist dann Gläubiger: Jemand schuldet dir Zahlungen. Du wirst dadurch nicht zum gewöhnlichen Miteigentümer des Unternehmens.",
      "Unsere einfache Anleihe hat 1.000 Euro Nennwert. Nennwert ist der vertragliche Grundbetrag. Der jährliche Zins heißt Kupon und beträgt 3 %. Also sind 1.000 × 0,03 = 30 Euro Zins pro Jahr vorgesehen. Nach fünf Jahren sollen die 1.000 Euro zurückgezahlt werden.",
      "Die Zahlungen gelten nach den Regeln dieses Vertrags. Andere Anleihen können anders funktionieren. Ein Vertrag garantiert außerdem nicht, dass der Schuldner zahlen kann. Prüfe deshalb Vertragsregeln, Marktpreis und Zahlungsfähigkeit getrennt. Ein Anspruch auf Geld ist nicht schon das erhaltene Geld."
    ],
    "columns": [
      {
        "title": "Vertrag im Beispiel",
        "tone": "neutral",
        "points": [
          "Nennwert 1.000 Euro.",
          "3 % jährlicher Kupon; fünf Jahre Laufzeit."
        ]
      },
      {
        "title": "Bei vertragsgemäßer Zahlung",
        "tone": "positive",
        "points": [
          "30 Euro Zins pro Jahr.",
          "1.000 Euro Rückzahlung am Ende."
        ]
      }
    ],
    "prompt": "Was bist du als Halter dieser Anleihe?",
    "answers": [
      {
        "label": "Gläubiger mit vertraglichen Zahlungsansprüchen.",
        "explanation": "Richtig: Du verleihst Kapital nach den Anleihebedingungen."
      },
      {
        "label": "Automatisch stimmberechtigter Aktionär.",
        "explanation": "Eine Schuldverschreibung ist kein gewöhnlicher Unternehmensanteil."
      },
      {
        "label": "Besitzer eines garantiert ausfallfreien Produkts.",
        "explanation": "Auch vertragliche Zahlungen können ausbleiben."
      }
    ],
    "correct": 0,
    "rule": "Ein Zahlungsanspruch ist etwas anderes als Miteigentum."
  },
  {
    "title": "Kupon und Rendite sind nicht dieselbe Zahl",
    "summary": "Der Kaufpreis verändert das Verhältnis.",
    "paragraphs": [
      "Der Kupon ist der vereinbarte Zins einer Anleihe. Er wird hier vom Nennwert berechnet. Dein Kaufpreis kann aber höher oder niedriger sein. Deshalb ist der Kupon nicht automatisch deine Rendite. Rendite setzt einen Ertrag ins Verhältnis zum eingesetzten Geld und zum Zeitraum.",
      "Die Anleihe hat 1.000 Euro Nennwert und zahlt jährlich 30 Euro. Du kaufst sie für 950. Rechne 30 / 950 ≈ 0,0316: Der Jahreszins beträgt etwa 3,16 % deines Kaufpreises. Das heißt laufende Verzinsung. Für die vollständige Rendite fehlen noch Restlaufzeit und mögliche Rückzahlung zu 1.000.",
      "Ein Anleihekurs von 95 kann 95 % des Nennwerts meinen. Bei 1.000 Euro sind das 950, nicht 95 Euro. Unsere Rechnung lässt Gebühren und Stückzinsen weg. Stückzinsen sind Zinsen, die seit dem letzten Zahlungstermin bereits angelaufen sind. Auch der Zahlungszeitpunkt zählt für eine vollständige Rechnung."
    ],
    "columns": [
      {
        "title": "Nennwert und Kupon",
        "tone": "neutral",
        "points": [
          "1.000 Euro Nennwert.",
          "30 Euro jährliche Zinszahlung."
        ]
      },
      {
        "title": "Kauf im vereinfachten Beispiel",
        "tone": "positive",
        "points": [
          "Kurs 95 % = 950 Euro.",
          "30 / 950 ≈ 3,16 % laufende Verzinsung."
        ]
      }
    ],
    "prompt": "Was beschreibt die Zahl 3,16 % in diesem Beispiel?",
    "answers": [
      {
        "label": "Den garantierten Gesamtgewinn über alle fünf Jahre.",
        "explanation": "Laufzeit, Rückzahlung, Ausfall und Kosten sind damit nicht vollständig erfasst."
      },
      {
        "label": "Nur das Verhältnis des jährlichen Kupons zum Kaufpreis.",
        "explanation": "Richtig: Sie ist keine vollständige Renditeberechnung bis zur Fälligkeit."
      },
      {
        "label": "Eine neue vertragliche Kuponhöhe von 31,60 Euro.",
        "explanation": "Der Kupon bleibt im Beispiel 30 Euro bezogen auf den Nennwert."
      }
    ],
    "correct": 1,
    "rule": "Kupon, Marktpreis und Gesamtrendite auseinanderhalten."
  },
  {
    "title": "Anleihen können trotz festem Zins im Preis fallen",
    "summary": "Zinsänderung und Ausfall sind unterschiedliche Risiken.",
    "paragraphs": [
      "Ein fester Zins macht den Verkaufspreis einer Anleihe nicht fest. Die alte Anleihe zahlt zum Beispiel 30 Euro pro Jahr. Neue, sonst vergleichbare Anleihen zahlen nun 50. Dann ist die alte Zahlung weniger attraktiv. Ihr Marktpreis kann fallen. Restlaufzeit und weitere Zahlungsregeln beeinflussen, wie stark.",
      "Das heißt Zinsänderungsrisiko. Daneben gibt es Ausfallrisiko: Der Schuldner zahlt vielleicht zu spät, nur teilweise oder gar nicht. Auch ein Staat kann Zahlungsschwierigkeiten haben. Außerdem brauchst du für einen Verkauf einen passenden Käufer. Wenige Angebote können den Verkauf erschweren.",
      "Verkaufst du vor dem Endtermin, bekommst du den tatsächlich möglichen Marktpreis. Hältst du bis zum Ende, bist du weiterhin auf die vereinbarten Zahlungen angewiesen. Festverzinslich beschreibt die Zinsregeln. Es bedeutet nicht, dass du jederzeit ohne Verlust verkaufen kannst."
    ],
    "columns": [
      {
        "title": "Zinsänderungsrisiko",
        "tone": "neutral",
        "points": [
          "Andere Anleihen bieten attraktivere Zinsen.",
          "Der Preis der bestehenden Anleihe kann fallen."
        ]
      },
      {
        "title": "Ausfallrisiko",
        "tone": "positive",
        "points": [
          "Der Emittent kann nicht vollständig zahlen.",
          "Vertragsanspruch und erhaltene Zahlung können abweichen."
        ]
      }
    ],
    "prompt": "Was folgt aus einem festen Kupon?",
    "answers": [
      {
        "label": "Dass ein vorzeitiger Verkauf immer zum Kaufpreis erfolgt.",
        "explanation": "Ein Verkauf findet zum verfügbaren Marktpreis statt."
      },
      {
        "label": "Dass Staaten und Unternehmen niemals ausfallen können.",
        "explanation": "Die Zahlungsfähigkeit muss unabhängig von der Zinsregel beurteilt werden."
      },
      {
        "label": "Dass die vereinbarte Zinsregel fest ist, nicht der Marktpreis.",
        "explanation": "Richtig: Preisbewegungen und Zahlungsfähigkeit bleiben eigene Themen."
      }
    ],
    "correct": 2,
    "rule": "Feste Zinsbedingungen garantieren keinen festen Verkaufspreis."
  },
  {
    "title": "Fonds: viele Anlagen in einem gemeinsamen Produkt",
    "summary": "Du kaufst einen Fondsanteil.",
    "paragraphs": [
      "Ein Investmentfonds sammelt Geld und legt es nach bestimmten Regeln an. Er kann etwa Aktien, Anleihen oder beides halten. Du kaufst einen Fondsanteil. Seine Entwicklung hängt vom Fonds ab. Die einzelnen enthaltenen Aktien stehen dadurch nicht automatisch als deine eigenen Aktien im Depot. Das Depot ist dein Wertpapierkonto.",
      "Unser Fonds hat Anlagen für 100.000 Euro und schuldet 2.000. Ziehe die Schulden ab: 98.000 bleiben. Das ist sein Nettovermögen. Bei 1.000 Anteilen entfallen 98.000 / 1.000 = 98 Euro auf jeden Anteil. Dieser rechnerische Wert heißt Nettoinventarwert. Ein tatsächlicher Handelspreis kann davon abweichen.",
      "Viele Anlagen können Risiken verteilen. Sie beseitigen sie nicht. Ein Fonds mit vielen Technikfirmen hängt weiterhin stark von dieser Branche ab. Prüfe deshalb, was er kauft und was es kostet. Die bloße Zahl der Anlagen zeigt noch nicht, wie verschieden ihre Risiken sind."
    ],
    "columns": [
      {
        "title": "Erfundener Fonds",
        "tone": "neutral",
        "points": [
          "Vermögen 100.000; Verpflichtungen 2.000 Euro.",
          "1.000 ausgegebene Anteile."
        ]
      },
      {
        "title": "Rechnerischer Anteilwert",
        "tone": "positive",
        "points": [
          "Nettovermögen 98.000 Euro.",
          "98.000 / 1.000 = 98 Euro."
        ]
      }
    ],
    "prompt": "Was erwirbst du beim Kauf eines Fondsanteils?",
    "answers": [
      {
        "label": "Einen Anteil am Fonds nach dessen Bedingungen.",
        "explanation": "Richtig: Das ist nicht dasselbe wie jede Anlage einzeln im Depot zu halten."
      },
      {
        "label": "Die Garantie, dass alle enthaltenen Werte steigen.",
        "explanation": "Viele Positionen können gleichzeitig verlieren."
      },
      {
        "label": "Automatisch den ganzen Fonds für 98 Euro.",
        "explanation": "98 Euro ist im Beispiel der rechnerische Wert eines Anteils."
      }
    ],
    "correct": 0,
    "rule": "Fondsanteil und einzelne enthaltene Wertpapiere unterscheiden."
  },
  {
    "title": "ETFs: Fondsanteile, die an der Börse handeln",
    "summary": "Die Handelsform sagt nicht alles über den Inhalt.",
    "paragraphs": [
      "ETF steht für Exchange Traded Fund. Auf Deutsch: börsengehandelter Fonds. Seine Anteile können während der passenden Handelszeiten an der Börse gekauft und verkauft werden. Dort entsteht der Handelspreis. Der Nettoinventarwert ist dagegen der berechnete Anteilwert. Beide Zahlen können voneinander abweichen.",
      "Viele ETFs folgen einem Index. Das ist eine Kennzahl für eine Gruppe von Anlagen. Andere ETFs werden aktiv verwaltet: Menschen entscheiden über ihre Anlagen. ETFs können Aktien, Anleihen oder andere Konzepte betreffen. ETF heißt deshalb nicht automatisch breit gemischter Aktienfonds.",
      "Ein Fonds kann passende Anlagen direkt halten. Er kann auch Verträge für Teile der gewünschten Wertentwicklung einsetzen. Das sind verschiedene Wege mit eigenen Risiken. Frage deshalb: Was möchte der Fonds abbilden? Wie macht er das? Welche laufenden Gebühren und Handelskosten entstehen? Auch der Spread, der Abstand zwischen Kauf- und Verkaufsangebot, gehört dazu."
    ],
    "columns": [
      {
        "title": "ETF beschreibt",
        "tone": "neutral",
        "points": [
          "Einen börsengehandelten Fonds.",
          "Kauf- und Verkaufspreise im Börsenhandel."
        ]
      },
      {
        "title": "Zusätzlich prüfen",
        "tone": "positive",
        "points": [
          "Anlageziel und Umsetzung.",
          "Risiken, laufende Kosten und Spread."
        ]
      }
    ],
    "prompt": "Was verrät die Bezeichnung ETF sicher?",
    "answers": [
      {
        "label": "Dass ausschließlich Aktien enthalten sind.",
        "explanation": "Es gibt auch ETFs mit anderen Anlageinhalten."
      },
      {
        "label": "Dass es sich um einen börsengehandelten Fonds handelt.",
        "explanation": "Richtig: Inhalt und Strategie müssen zusätzlich gelesen werden."
      },
      {
        "label": "Dass sein Preis nie vom rechnerischen Anteilwert abweicht.",
        "explanation": "Marktpreis und Nettoinventarwert sind unterschiedliche Größen."
      }
    ],
    "correct": 1,
    "rule": "Die Verpackung ETF ersetzt den Blick auf die Anlagen nicht."
  },
  {
    "title": "Ein Index misst; ein Produkt macht ihn handelbar",
    "summary": "Kennzahl und Finanzinstrument sind verschieden.",
    "paragraphs": [
      "Ein Index ist eine berechnete Kennzahl. Er fasst die Entwicklung ausgewählter Anlagen zusammen. Regeln legen fest, welche dazugehören und wie stark jede zählt. Diese Stärke heißt Gewichtung. Der Indexstand ist keine Aktie, die du direkt besitzen kannst.",
      "Denk an ein Thermometer. Es zeigt zum Beispiel 23 Grad. Die Zahl beschreibt etwas, ist aber kein Gegenstand zum Kaufen. Ähnlich verwenden Finanzprodukte einen Index als Bezug. Ein Index-ETF ist ein Fonds. Ein Index-Future oder Index-CFD ist dagegen ein Vertrag. Die genaue Bedeutung dieser Verträge folgt noch.",
      "Ein Preisindex zeigt grundsätzlich die Kursentwicklung. Ein Gesamtertragsindex berücksichtigt nach seinen Regeln auch Auszahlungen. Deshalb können zwei Indizes auf ähnliche Firmen verschieden verlaufen. Prüfe die Berechnung, bevor du ihre Zahlen vergleichst."
    ],
    "columns": [
      {
        "title": "Index",
        "tone": "neutral",
        "points": [
          "Eine nach Regeln berechnete Kennzahl.",
          "Kein gewöhnlicher Unternehmensanteil."
        ]
      },
      {
        "title": "Produkte mit Indexbezug",
        "tone": "positive",
        "points": [
          "Ein Fonds kann die Entwicklung nachbilden.",
          "Ein Vertrag kann darauf Bezug nehmen."
        ]
      }
    ],
    "prompt": "Was kaufst du beim Erwerb eines Index-ETF?",
    "answers": [
      {
        "label": "Die Kennzahl selbst als Aktie.",
        "explanation": "Eine Kennzahl ist kein Unternehmensanteil."
      },
      {
        "label": "Automatisch einen Future mit gleichem Namen.",
        "explanation": "Ein Fondsanteil und ein Terminkontrakt haben verschiedene Bedingungen."
      },
      {
        "label": "Anteile eines Fonds mit Indexbezug.",
        "explanation": "Richtig: Der Fonds ist das Instrument, der Index seine Bezugsgröße."
      }
    ],
    "correct": 2,
    "rule": "Indexstand und handelbares Instrument sind zwei Ebenen."
  },
  {
    "title": "Ausschütten oder wiederanlegen",
    "summary": "Die Verwendung von Erträgen verändert nicht ihre Herkunft.",
    "paragraphs": [
      "Ein Fonds kann Erträge auszahlen oder im Fonds behalten. Erträge sind zum Beispiel erhaltene Zinsen oder Dividenden. Beim Behalten werden sie wieder angelegt. Das Fachwort dafür ist thesaurieren. Beide Wege nutzen Erträge. Keiner entfernt die Risiken der Anlagen.",
      "Ein Anteil ist im Beispiel vor einer Auszahlung 100 Euro wert. Der Fonds zahlt 2 Euro aus. Wenn sich sonst nichts ändert, ist der Anteil danach 98 wert. Dazu hast du 2 Euro Geld erhalten. Zusammen bleiben 100. Bei Wiederanlage bleibt der Ertrag im Fonds.",
      "In Wirklichkeit können gleichzeitig die Kurse schwanken. Die Tagesveränderung liegt deshalb nicht immer nur an der Auszahlung. Vergleiche Anteilwert und erhaltenes Geld gemeinsam. Steuern und die genauen Zahlungsschritte lassen wir in diesem einfachen Beispiel weg."
    ],
    "columns": [
      {
        "title": "Vor der Auszahlung",
        "tone": "neutral",
        "points": [
          "Anteilwert 100 Euro.",
          "Noch kein ausgezahltes Geld aus diesem Vorgang."
        ]
      },
      {
        "title": "Danach, sonst alles gleich",
        "tone": "positive",
        "points": [
          "Anteilwert 98 Euro.",
          "Auszahlung 2 Euro; zusammen 100 Euro."
        ]
      }
    ],
    "prompt": "Erzeugt die Auszahlung im Beispiel 2 Euro zusätzlichen Gesamtwert?",
    "answers": [
      {
        "label": "Nein, 98 Euro Anteilwert plus 2 Euro Geld ergeben weiterhin 100 Euro.",
        "explanation": "Richtig: Die Auszahlung verschiebt Wert aus dem Fonds zum Anteilhalter."
      },
      {
        "label": "Ja, der Gesamtwert beträgt zwingend 102 Euro.",
        "explanation": "Dabei würde die Wertminderung des Fondsanteils übersehen."
      },
      {
        "label": "Nein, die ausgezahlten 2 Euro verschwinden vollständig.",
        "explanation": "Sie befinden sich im Beispiel außerhalb des Fonds beim Anteilhalter."
      }
    ],
    "correct": 0,
    "rule": "Auszahlung und Wiederanlage sind verschiedene Wege für Erträge."
  },
  {
    "title": "Währungen: immer eine Währung gegen eine andere",
    "summary": "Ein Wechselkurs ist ein Verhältnis.",
    "paragraphs": [
      "Bei einem Währungstausch gibst du eine Währung ab und bekommst eine andere. Der Wechselkurs zeigt ihr Verhältnis. In EUR/USD steht der Euro zuerst. Er heißt Basiswährung. Der Dollar steht danach und heißt Preiswährung. Ein Kurs von 1,20 bedeutet: Ein Euro entspricht 1,20 US-Dollar.",
      "Ohne Gebühren ergeben 100 Euro bei diesem Kurs 120 Dollar. Steigt EUR/USD auf 1,25, erhältst du rechnerisch mehr Dollar für einen Euro. Der Euro ist gegenüber dem Dollar stärker geworden. Das sagt noch nichts über sein Verhältnis zu anderen Währungen.",
      "Die Reihenfolge ist wichtig. Umgekehrt wäre USD/EUR etwa 0,8333. Du rechnest 1 / 1,20. Dann entspricht ein Dollar etwa 0,8333 Euro. Die andere Zahl beschreibt hier dieselbe Lage aus der umgekehrten Sicht."
    ],
    "columns": [
      {
        "title": "EUR/USD = 1,20",
        "tone": "neutral",
        "points": [
          "1 Euro entspricht 1,20 US-Dollar.",
          "100 Euro entsprechen 120 US-Dollar vor Kosten."
        ]
      },
      {
        "title": "Umgekehrte Angabe",
        "tone": "positive",
        "points": [
          "USD/EUR ≈ 0,8333.",
          "1 US-Dollar entspricht etwa 0,8333 Euro."
        ]
      }
    ],
    "prompt": "Was bedeutet EUR/USD 1,20?",
    "answers": [
      {
        "label": "Ein US-Dollar entspricht 1,20 Euro.",
        "explanation": "Das würde die Reihenfolge des Paares vertauschen."
      },
      {
        "label": "Ein Euro entspricht 1,20 US-Dollar.",
        "explanation": "Richtig: Die erste Währung ist die Basis für eine Einheit."
      },
      {
        "label": "Beide Währungen sind im Verhältnis eins zu eins.",
        "explanation": "Der Kurs gibt ausdrücklich ein anderes Verhältnis an."
      }
    ],
    "correct": 1,
    "rule": "Ein Wechselkurs ergibt erst mit der Paarreihenfolge Sinn."
  },
  {
    "title": "Devisentausch und Devisentrading unterscheiden",
    "summary": "Derselbe Wechselkurs kann in verschiedene Produkte eingehen.",
    "paragraphs": [
      "Du tauschst Euro in Dollar, um später etwas in Dollar zu bezahlen. Dann bekommst du die andere Währung nach der vereinbarten Abwicklung. Abwicklung bedeutet: Die vereinbarten Leistungen werden erbracht. Dieses zeitnah erfüllte Geschäft heißt Kassageschäft. Es muss kein Austausch von Geldscheinen sein.",
      "Eine Tradingplattform kann stattdessen einen Vertrag auf das Währungspaar anbieten. Beispiele sind Future und CFD. Dann regelt der Vertrag, wie Gewinne und Verluste bezahlt werden. Der Wechselkurs auf dem Bildschirm beweist nicht, dass du frei verwendbare Dollar bekommst.",
      "Miriam tauscht Geld für ihre Reise. Robert handelt einen Vertrag mit Bezug auf EUR/USD. Beide schauen auf denselben Wechselkurs, machen aber verschiedene Geschäfte. Prüfe: Erhalte ich die Währung? Oder gehe ich eine Vertragsposition ein? Eine Position meint hier ein gehaltenes Geschäft mit seinen Rechten und Pflichten."
    ],
    "columns": [
      {
        "title": "Tausch für die Reise",
        "tone": "neutral",
        "points": [
          "Eine Währung wird abgegeben.",
          "Eine andere wird nach Abwicklung erhalten."
        ]
      },
      {
        "title": "Vertrag auf das Paar",
        "tone": "positive",
        "points": [
          "Gewinn und Verlust folgen den Bedingungen.",
          "Kein automatisches Reiseguthaben in der anderen Währung."
        ]
      }
    ],
    "prompt": "Beweist die Anzeige EUR/USD, dass dir handelbare Dollar gutgeschrieben werden?",
    "answers": [
      {
        "label": "Ja, jeder Vertrag ist ein Bargeldtausch.",
        "explanation": "Ein Derivat kann allein eine vertragliche Abrechnung vorsehen."
      },
      {
        "label": "Nein, Währungen können grundsätzlich nicht getauscht werden.",
        "explanation": "Ein tatsächlicher Währungstausch ist möglich; er muss vom Vertrag unterschieden werden."
      },
      {
        "label": "Nein, zuerst muss die Produktart geklärt werden.",
        "explanation": "Richtig: Wechselkursanzeige und tatsächlicher Währungstausch sind verschiedene Fragen."
      }
    ],
    "correct": 2,
    "rule": "Paarname und Geschäftstyp gemeinsam prüfen."
  },
  {
    "title": "Derivate: Verträge mit einer Bezugsgröße",
    "summary": "Ein Bezug ist noch kein Besitz.",
    "paragraphs": [
      "Ein Derivat ist ein Vertrag, dessen Wert von etwas anderem abhängt. Das kann zum Beispiel eine Aktie, ein Index oder eine Währung sein. Diese Bezugsgröße heißt Basiswert. Du kannst einen Vertrag auf eine Aktie halten, ohne die Aktie selbst zu besitzen.",
      "Stell dir einen Vertrag vor, dessen Auszahlung vom Goldpreis abhängt. Die Vertragsregeln legen fest, wie Preisänderungen in Geld umgerechnet werden. Sie bestimmen auch Laufzeit und Pflichten. Der Name des Basiswerts reicht deshalb nicht aus, um das Geschäft zu verstehen.",
      "Futures, Optionen und CFDs sind verschiedene Arten solcher Verträge. Sie haben unterschiedliche Regeln. Frage zuerst: Worauf bezieht sich der Vertrag? Was darf oder muss ich tun? Wann endet er? Wie entstehen Gewinne und Verluste? Ein ähnlicher Basiswert bedeutet nicht dasselbe Risiko."
    ],
    "columns": [
      {
        "title": "Basiswert",
        "tone": "neutral",
        "points": [
          "Die Bezugsgröße des Vertrags.",
          "Beispielsweise Aktie, Index oder Währung."
        ]
      },
      {
        "title": "Derivat",
        "tone": "positive",
        "points": [
          "Rechte oder Pflichten aus dem Vertrag.",
          "Keine automatische Eigentümerschaft am Basiswert."
        ]
      }
    ],
    "prompt": "Wirst du durch jeden Indexvertrag Eigentümer der enthaltenen Aktien?",
    "answers": [
      {
        "label": "Nein, zunächst besitzt du eine Vertragsposition.",
        "explanation": "Richtig: Der Index ist der Bezug; die Vertragsbedingungen bestimmen die Position."
      },
      {
        "label": "Ja, unabhängig von den Bedingungen.",
        "explanation": "Ein Derivat überträgt nicht automatisch die einzelnen Aktien."
      },
      {
        "label": "Nur weil sein Chart eine steigende Linie zeigt.",
        "explanation": "Ein Preisverlauf ändert die Art des Vertrags nicht."
      }
    ],
    "correct": 0,
    "rule": "Basiswert und Vertrag auseinanderhalten."
  },
  {
    "title": "Futures: standardisierte Terminkontrakte",
    "summary": "Bedingungen werden für die Kontraktart festgelegt.",
    "paragraphs": [
      "Ein Future ist ein Vertrag für einen späteren Termin. Seine Bedingungen sind weitgehend festgelegt. Das heißt standardisiert. Zu den Bedingungen gehören die Bezugsgröße, die Größe eines Vertrags und der Termin. Solche Verträge werden an dafür vorgesehenen Börsen gehandelt.",
      "Unser erfundener Index-Future steht bei 5.000 Punkten. Für jeden Punkt gelten 2 Euro je Vertrag. Dieser Umrechnungsfaktor heißt Multiplikator. Dieser rechnerische Vertragswert heißt Nominalwert. Er beträgt deshalb 5.000 × 2 = 10.000 Euro. Ein Vertrag bezieht sich also auf diesen Wert.",
      "Die 10.000 Euro sind nicht automatisch der Betrag, den du sofort auf das Konto einzahlen musst. Dafür gibt es eigene Regeln zur Sicherheitsleistung. Trotzdem können Preisänderungen große Geldbeträge bewegen. Prüfe deshalb immer, wie viel ein Punkt bei genau diesem Vertrag wert ist."
    ],
    "columns": [
      {
        "title": "Erfundener Future",
        "tone": "neutral",
        "points": [
          "Multiplikator: 2 Euro pro Punkt.",
          "Indexstand: 5.000 Punkte."
        ]
      },
      {
        "title": "Rechnerischer Bezug",
        "tone": "positive",
        "points": [
          "5.000 × 2 = 10.000 Euro Nominalwert.",
          "Sicherheitsleistung ist eine andere Größe."
        ]
      }
    ],
    "prompt": "Was ist der Nominalwert dieses Beispielkontrakts?",
    "answers": [
      {
        "label": "Immer genau die zu hinterlegende Sicherheitsleistung.",
        "explanation": "Nominalwert und Margin werden unterschiedlich bestimmt."
      },
      {
        "label": "10.000 Euro rechnerischer Vertragswert.",
        "explanation": "Richtig: Indexstand mal Multiplikator ergibt den Nominalwert."
      },
      {
        "label": "5.000 Aktien des Index.",
        "explanation": "Ein Index-Future ist keine Sammlung direkt gekaufter Aktien."
      }
    ],
    "correct": 1,
    "rule": "Kontraktgröße und Multiplikator bestimmen den wirtschaftlichen Bezug."
  },
  {
    "title": "Futures: Laufzeit und Abrechnung gehören zum Produkt",
    "summary": "Lieferung und Geldabrechnung sind verschiedene Formen.",
    "paragraphs": [
      "Ein Future hat einen festgelegten Endtermin. Dann wird er nach seinen Vertragsregeln abgerechnet. Manche Verträge verlangen eine Lieferung, etwa von einer Ware. Andere rechnen nur einen Geldbetrag ab. Das heißt Barausgleich. Ein Index lässt sich zum Beispiel nicht als Gegenstand liefern.",
      "Du kannst eine Position oft schon vorher durch ein entgegengesetztes Geschäft schließen. Das bedeutet: Du beendest das gehaltene Geschäft nach den geltenden Regeln. Ob und zu welchem Preis das gelingt, hängt vom Markt ab. Der Endtermin bleibt wichtig, solange die Position offen ist.",
      "Willst du über den Endtermin hinaus weiter handeln, kannst du einen später endenden Vertrag nutzen. Den Wechsel nennt man Rollen. Dabei wird der alte Vertrag geschlossen und ein neuer eröffnet. Beide können verschiedene Preise haben. Der Wechsel kann Kosten verursachen und ist keine kostenlose Verlängerung."
    ],
    "columns": [
      {
        "title": "Bis zum Vertragsende",
        "tone": "neutral",
        "points": [
          "Laufzeit und Abrechnungsregeln prüfen.",
          "Lieferung oder Geldabrechnung beachten."
        ]
      },
      {
        "title": "Wechsel in neue Laufzeit",
        "tone": "positive",
        "points": [
          "Alte Position schließen, neue eröffnen.",
          "Zwei Geschäfte mit eigenen Preisen und Kosten."
        ]
      }
    ],
    "prompt": "Was bedeutet Rollen in diesem vereinfachten Futures-Beispiel?",
    "answers": [
      {
        "label": "Dass jede Lieferung automatisch verschwindet.",
        "explanation": "Die Abrechnungsbedingungen bleiben relevant, solange die Position besteht."
      },
      {
        "label": "Dass der alte Vertrag unbegrenzt kostenlos weiterläuft.",
        "explanation": "Eine andere Laufzeit ist ein anderer Kontrakt."
      },
      {
        "label": "Die alte Position schließen und eine spätere Laufzeit neu handeln.",
        "explanation": "Richtig: Dabei entstehen getrennte Geschäfte."
      }
    ],
    "correct": 2,
    "rule": "Laufzeit und Erfüllung prüfen, bevor ein Kontrakt gehalten wird."
  },
  {
    "title": "Margin: Sicherheitsleistung statt Kaufpreis",
    "summary": "Der hinterlegte Betrag ist keine Verlustobergrenze.",
    "paragraphs": [
      "Bei einem Future musst du eine Sicherheitsleistung bereitstellen. Sie heißt Margin. Sie soll helfen, Verluste abzudecken. Sie ist kein Kaufpreis und begrenzt deinen möglichen Verlust nicht automatisch. Bei Verlusten kann zusätzliche Sicherheit nötig werden.",
      "Unser Beispiel verlangt 500 Euro Margin für einen Vertrag. Ein Punkt ist 2 Euro wert. Bewegt sich der Kurs um 100 Punkte gegen dich, verlierst du 100 × 2 = 200 Euro. Bei 300 Punkten sind es 300 × 2 = 600 Euro. Das ist mehr als die anfänglichen 500 Euro.",
      "Ein großer Vertragswert kann somit einer kleineren Sicherheitsleistung gegenüberstehen. Das nennt man Hebelwirkung. Schon eine kleine Preisänderung kann im Verhältnis zur eingezahlten Sicherheit viel ausmachen. Das gilt für Gewinne und Verluste. Berechne das Risiko aus dem Vertrag, nicht nur aus der Margin."
    ],
    "columns": [
      {
        "title": "Sicherheitsleistung",
        "tone": "neutral",
        "points": [
          "Erfundene Margin: 500 Euro.",
          "Keine vertragliche Verlustgrenze aus dieser Zahl allein."
        ]
      },
      {
        "title": "Preiswirkung der Kaufposition",
        "tone": "positive",
        "points": [
          "−100 Punkte × 2 Euro = −200 Euro.",
          "−300 Punkte × 2 Euro = −600 Euro."
        ]
      }
    ],
    "prompt": "Was begrenzt den Verlust automatisch auf 500 Euro?",
    "answers": [
      {
        "label": "Die Margin-Zahl allein tut das nicht.",
        "explanation": "Richtig: Das Beispiel zeigt einen größeren rechnerischen Verlust."
      },
      {
        "label": "Die Tatsache, dass 500 Euro hinterlegt wurden.",
        "explanation": "Die Sicherheitsleistung bestimmt nicht die gesamte Preiswirkung."
      },
      {
        "label": "Der Name Future.",
        "explanation": "Auch die Produktbezeichnung ist keine Verlustgrenze."
      }
    ],
    "correct": 0,
    "rule": "Margin ist Sicherheit für Verpflichtungen, kein maximaler Verlust."
  },
  {
    "title": "Optionen: ein Recht auf bestimmte Bedingungen",
    "summary": "Käufer und Verkäufer tragen unterschiedliche Rollen.",
    "paragraphs": [
      "Eine Option gibt dem Käufer ein Recht. Ein Call gibt das Recht, den Basiswert zu einem vereinbarten Preis zu kaufen. Ein Put gibt das Recht, ihn zu verkaufen. Der vereinbarte Preis heißt Ausübungspreis. Das Recht gilt nach den Regeln der Option nur für eine bestimmte Zeit.",
      "Für dieses Recht bezahlt der Käufer einen Preis: die Optionsprämie. Er muss sein Recht nicht nutzen. Der Verkäufer der Option erhält die Prämie. Dafür übernimmt er die Pflicht, den Vertrag zu erfüllen, wenn die Regeln das verlangen. Käufer und Verkäufer haben deshalb unterschiedliche Risiken.",
      "Der Wert einer Option hängt nicht nur vom aktuellen Preis des Basiswerts ab. Auch die verbleibende Zeit ist wichtig. Hinzu kommen Erwartungen darüber, wie stark der Preis schwanken könnte. Eine richtige Vermutung über die Kursrichtung allein garantiert deshalb keinen Gewinn mit einer Option."
    ],
    "columns": [
      {
        "title": "Optionskäufer",
        "tone": "neutral",
        "points": [
          "Zahlt eine Prämie für ein Recht.",
          "Call: kaufen; Put: verkaufen nach Bedingungen."
        ]
      },
      {
        "title": "Optionsverkäufer",
        "tone": "positive",
        "points": [
          "Erhält die Prämie.",
          "Übernimmt die entsprechende Verpflichtung."
        ]
      }
    ],
    "prompt": "Was unterscheidet den Käufer vom Verkäufer einer Option?",
    "answers": [
      {
        "label": "Beide können ihre Verpflichtungen ohne Bedingungen vergessen.",
        "explanation": "Gerade der Verkäufer übernimmt vertragliche Pflichten."
      },
      {
        "label": "Der Käufer erwirbt ein Recht; der Verkäufer übernimmt eine Verpflichtung.",
        "explanation": "Richtig: Die beiden Rollen haben unterschiedliche Zahlungs- und Risikoprofile."
      },
      {
        "label": "Jeder Put ist eine Pflicht des Käufers, eine Aktie zu kaufen.",
        "explanation": "Ein Put vermittelt dem Käufer ein Verkaufsrecht nach Bedingungen."
      }
    ],
    "correct": 1,
    "rule": "Recht und Verpflichtung nicht verwechseln."
  },
  {
    "title": "Optionsprämie: ein richtiger Ausblick kann trotzdem Verlust ergeben",
    "summary": "Am Ende zählt der Wert abzüglich des gezahlten Preises.",
    "paragraphs": [
      "Unser erfundener Call gilt für eine Aktie. Du darfst sie für 50 Euro kaufen und zahlst dafür 3 Euro Prämie. Der Endtermin heißt auch Verfall. Wir betrachten nur diesen Termin und lassen Gebühren weg. Die folgenden Zahlen gelten genau für dieses vereinfachte Beispiel.",
      "Steht die Aktie am Ende bei 52 Euro, ist das Kaufrecht 2 Euro wert: 52 − 50 = 2. Du hast aber 3 Euro bezahlt. Dein Ergebnis ist deshalb 2 − 3 = −1 Euro. Bei einem Aktienpreis von 55 Euro ist das Recht 5 Euro wert. Nach Abzug der Prämie bleiben 2 Euro Gewinn.",
      "Erst bei 53 Euro deckt der Wert des Rechts die Prämie. Bei höchstens 50 Euro endet dieser Call ohne Wert. Dann verlierst du die gezahlten 3 Euro. Dieser begrenzte Verlust betrifft die gekaufte Option. Wenn du das Recht nutzt und die Aktie kaufst, entstehen neue Risiken aus der Aktie."
    ],
    "columns": [
      {
        "title": "Aktie am Ende bei 52 Euro",
        "tone": "neutral",
        "points": [
          "Call-Wert: 52 − 50 = 2 Euro.",
          "Ergebnis: 2 − 3 = −1 Euro."
        ]
      },
      {
        "title": "Aktie am Ende bei 55 Euro",
        "tone": "positive",
        "points": [
          "Call-Wert: 55 − 50 = 5 Euro.",
          "Ergebnis: 5 − 3 = +2 Euro."
        ]
      }
    ],
    "prompt": "Die Aktie steigt bis zum Verfall auf 52 Euro. Ist der Call-Kauf profitabel?",
    "answers": [
      {
        "label": "Ja, jeder Anstieg bedeutet Optionsgewinn.",
        "explanation": "Der Kaufpreis des Rechts muss in die Rechnung eingehen."
      },
      {
        "label": "Ja, es entstehen 52 Euro Gewinn.",
        "explanation": "Der Aktienpreis ist nicht der Gewinn der Option."
      },
      {
        "label": "Nein, nach der Prämie verbleibt 1 Euro Verlust.",
        "explanation": "Richtig: Die positive Kursrichtung deckt die 3 Euro Prämie noch nicht."
      }
    ],
    "correct": 2,
    "rule": "Ein Recht kann wertvoll sein und nach Kaufkosten trotzdem Verlust bringen."
  },
  {
    "title": "CFDs: eine vertragliche Preisdifferenz",
    "summary": "Du kaufst nicht automatisch den Basiswert.",
    "paragraphs": [
      "Ein CFD ist ein Vertrag über einen Preisunterschied. Du vereinbarst mit einem Anbieter, wie eine Veränderung des Basiswerts abgerechnet wird. Du besitzt dadurch nicht automatisch den Basiswert. Solche Geschäfte finden gewöhnlich außerhalb einer Börse direkt mit dem Anbieter statt.",
      "Im Beispiel bedeutet eine Einheit: 1 Euro je Preispunkt. Du eröffnest eine Kaufposition bei 100. Beim Schließen bei 106 ergeben sich 6 Euro Gewinn. Beim Schließen bei 96 entstehen 4 Euro Verlust. Gebühren und Kosten für das Halten der Position lassen wir hier weg.",
      "In echten Angeboten können diese Kosten wichtig sein. Auch die Preisstellung und die Vertragsbedingungen hängen vom Angebot ab. Prüfe deshalb Einheit, Abrechnung und Risiko. Verlasse dich nicht auf eine allgemeine Verlustgrenze, die du nur vom Namen CFD ableitest."
    ],
    "columns": [
      {
        "title": "Preisbezug",
        "tone": "neutral",
        "points": [
          "Erfundener Wert: 1 Euro je Einheit.",
          "Kaufposition bei 100."
        ]
      },
      {
        "title": "Reine Differenz vor Kosten",
        "tone": "positive",
        "points": [
          "Schließen bei 106: +6 Euro.",
          "Schließen bei 96: −4 Euro."
        ]
      }
    ],
    "prompt": "Besitzt du mit einem Aktien-CFD automatisch die Aktie?",
    "answers": [
      {
        "label": "Nein, du hältst einen Differenzvertrag.",
        "explanation": "Richtig: Der Basiswert gibt den Bezug, der Vertrag legt Rechte und Abrechnung fest."
      },
      {
        "label": "Ja, mit allen gewöhnlichen Stimmrechten.",
        "explanation": "Ein Differenzvertrag überträgt nicht automatisch die Aktionärsrechte."
      },
      {
        "label": "Nur wenn sein Preis steigt.",
        "explanation": "Die Produktart hängt nicht von der Kursrichtung ab."
      }
    ],
    "correct": 0,
    "rule": "Ein Differenzvertrag ist kein automatischer Besitz am Basiswert."
  },
  {
    "title": "Future und CFD: gleicher Bezug, verschiedene Verträge",
    "summary": "Ein ähnlicher Chart ersetzt keine Vertragsprüfung.",
    "paragraphs": [
      "Ein Future und ein CFD können sich auf denselben Index beziehen. Trotzdem sind es verschiedene Verträge. Beim Future sind viele Bedingungen für den Börsenhandel festgelegt. Beim CFD gelten die Bedingungen des jeweiligen Anbieters. Der gemeinsame Index macht diese Unterschiede nicht unsichtbar.",
      "Vergleiche zuerst die Einheit: Wie viele Euro bedeutet ein Punkt? Prüfe dann Laufzeit und Abrechnung. Auch Preise und Handelszeiten können sich unterscheiden. Ein Future kann einen anderen Preis haben als der aktuell angezeigte Index. Ein CFD muss ebenfalls nicht genau diesen Indexstand zeigen.",
      "Vergleiche außerdem Gebühren und laufende Kosten. Gleiche Punktbewegungen können bei verschiedenen Vertragsgrößen verschiedene Geldbeträge ergeben. Beurteile deshalb den ganzen Vertrag. Zwei ähnlich aussehende Linien sagen noch nicht, ob Kosten, Rechte und Risiken gleich sind."
    ],
    "columns": [
      {
        "title": "Future",
        "tone": "neutral",
        "points": [
          "Standardisierter Kontrakt an einer Terminbörse.",
          "Laufzeit, Multiplikator und Erfüllung prüfen."
        ]
      },
      {
        "title": "CFD",
        "tone": "positive",
        "points": [
          "Typischerweise Vertrag mit einem Anbieter.",
          "Einheit, Preisbezug und Finanzierung prüfen."
        ]
      }
    ],
    "prompt": "Was reicht aus, um Future und CFD gleichzusetzen?",
    "answers": [
      {
        "label": "Ein ähnlicher Preisverlauf allein.",
        "explanation": "Ähnliche Kurse zeigen nicht die gesamten Vertragsbedingungen."
      },
      {
        "label": "Weder derselbe Indexname noch ein ähnlicher Chart.",
        "explanation": "Richtig: Organisation, Menge, Abrechnung und Kosten bleiben verschieden."
      },
      {
        "label": "Die Tatsache, dass beide Margin verwenden können.",
        "explanation": "Eine Sicherheitsleistung macht die übrigen Eigenschaften nicht identisch."
      }
    ],
    "correct": 1,
    "rule": "Gleiche Bezugsgröße bedeutet nicht gleiche Vertragsbedingungen."
  },
  {
    "title": "Rohstoffe: Ware, Fonds und Vertrag auseinanderhalten",
    "summary": "Lagerung und Vertrag sind unterschiedliche Aufgaben.",
    "paragraphs": [
      "Rohstoffe sind zum Beispiel Gold, Öl oder Weizen. Wer die Ware selbst besitzt, muss sich auch um praktische Fragen kümmern. Bei Weizen gehören dazu Qualität und Lagerung. Bei Öl spielen Transport und Lieferort eine Rolle. Ein Preis ohne diese Angaben beschreibt die Ware nur unvollständig.",
      "Ein Rohstoffvertrag legt fest, auf welche Ware er sich bezieht. Dazu können eine bestimmte Qualität, ein Lieferort und ein Termin gehören. Du kannst einen solchen Vertrag handeln, ohne heute die Ware im Lager zu haben. Die Pflichten bei Lieferung musst du trotzdem verstehen.",
      "Ein später endender Vertrag kann einen anderen Preis haben als die heute verfügbare Ware. Deren aktueller Preis heißt hier Kassapreis. Auch verschiedene Liefertermine können verschiedene Preise haben. Wenn du zwischen Verträgen wechselst, beeinflusst dieser Wechsel dein Ergebnis. Ein Anlageprodukt auf Öl bildet deshalb nicht automatisch jede Veränderung des heutigen Ölpreises genau nach."
    ],
    "columns": [
      {
        "title": "Direkte Ware",
        "tone": "neutral",
        "points": [
          "Qualität, Lagerung und Versicherung.",
          "Tatsächlicher Besitz der gekauften Ware."
        ]
      },
      {
        "title": "Produkt mit Rohstoffbezug",
        "tone": "positive",
        "points": [
          "Vertrags- oder Anlagebedingungen.",
          "Laufzeitwechsel und Abrechnung können relevant sein."
        ]
      }
    ],
    "prompt": "Warum kann ein Rohstoffprodukt anders verlaufen als ein angezeigter Kassapreis?",
    "answers": [
      {
        "label": "Weil jeder Rohstoff weltweit immer denselben Preis hat.",
        "explanation": "Sorte, Ort und Termin können Preise unterscheiden."
      },
      {
        "label": "Weil ein Fondsanteil automatisch ein voller Tank ist.",
        "explanation": "Anlageprodukt und physischer Besitz sind verschiedene Dinge."
      },
      {
        "label": "Weil es andere Laufzeiten und eine andere Produktstruktur nutzen kann.",
        "explanation": "Richtig: Bezug auf denselben Rohstoff macht die Umsetzung nicht identisch."
      }
    ],
    "correct": 2,
    "rule": "Der Rohstoffname allein beschreibt das Geschäft nicht vollständig."
  },
  {
    "title": "Punkte, Stücke und Kontrakte in Geld übersetzen",
    "summary": "Der Zahlenwert auf dem Chart ist noch kein Geldbetrag.",
    "paragraphs": [
      "Die kleinste erlaubte Preisänderung heißt Tick. Ihre Größe hängt vom Produkt ab. Ein Tick von 0,25 bedeutet, dass Preise in Schritten von einem Viertelpunkt wechseln. Das sagt noch nicht, wie viele Euro ein solcher Schritt wert ist.",
      "In unserem Vertrag ist ein ganzer Punkt 2 Euro wert. Ein Tick ist deshalb 0,25 × 2 = 0,50 Euro wert. Du hältst drei Verträge. Der Preis bewegt sich um acht Ticks. Für einen Vertrag macht das 8 × 0,50 = 4 Euro aus.",
      "Für drei Verträge sind es 3 × 4 = 12 Euro. Ob das Gewinn oder Verlust ist, hängt von der Richtung deiner Position und der Bewegung ab. Gebühren fehlen hier. Rechne zuerst den Wert eines Ticks aus und danach die Zahl der Ticks und Verträge."
    ],
    "columns": [
      {
        "title": "Erfundene Spezifikation",
        "tone": "neutral",
        "points": [
          "2 Euro pro Punkt; Tickgröße 0,25 Punkte.",
          "Tickwert: 0,50 Euro je Kontrakt."
        ]
      },
      {
        "title": "Drei Kontrakte, acht Ticks",
        "tone": "positive",
        "points": [
          "3 × 8 × 0,50 = 12 Euro.",
          "Reine Preiswirkung vor Kosten."
        ]
      }
    ],
    "prompt": "Wie groß ist die reine Preiswirkung des Beispiels?",
    "answers": [
      {
        "label": "12 Euro vor Kosten.",
        "explanation": "Richtig: Kontraktzahl, Tickzahl und Tickwert werden multipliziert."
      },
      {
        "label": "Acht Euro, weil es acht Ticks sind.",
        "explanation": "Die Tickzahl muss erst mit Tickwert und Menge umgerechnet werden."
      },
      {
        "label": "Immer zehn Prozent Gewinn.",
        "explanation": "Ohne Kapitalbezug und Richtung ergibt sich keine solche Prozentangabe."
      }
    ],
    "correct": 0,
    "rule": "Jede Preisbewegung braucht ihre Einheit und ihren Geldwert."
  },
  {
    "title": "Fremdwährung: zwei Veränderungen können zusammenwirken",
    "summary": "Anlagepreis und Wechselkurs getrennt rechnen.",
    "paragraphs": [
      "Eine Anlage kann in Dollar bewertet werden, während du ihr Ergebnis in Euro betrachtest. Dann beeinflusst auch der Wechselkurs den Eurobetrag. Der Preis der Anlage und der Wechselkurs sind zwei verschiedene Größen. Beide können sich verändern.",
      "Deine Anlage bleibt im Beispiel 120 US-Dollar wert. Bei EUR/USD 1,20 sind das 120 / 1,20 = 100 Euro. Später steht EUR/USD bei 1,25. Nun sind dieselben 120 Dollar nur 120 / 1,25 = 96 Euro wert. Der Dollarwert blieb gleich, der Eurobetrag sank.",
      "Die Währung, in der du einen Fondsanteil kaufst, verrät nicht allein sein Währungsrisiko. Entscheidend sind auch die Anlagen im Fonds und eine mögliche Absicherung. Eine Absicherung soll ein bestimmtes Risiko verringern. Prüfe deshalb, welche Währungen das Ergebnis tatsächlich beeinflussen."
    ],
    "columns": [
      {
        "title": "Beim Einstieg",
        "tone": "neutral",
        "points": [
          "120 US-Dollar; EUR/USD 1,20.",
          "120 / 1,20 = 100 Euro."
        ]
      },
      {
        "title": "Später, Dollarpreis unverändert",
        "tone": "positive",
        "points": [
          "EUR/USD 1,25.",
          "120 / 1,25 = 96 Euro."
        ]
      }
    ],
    "prompt": "Wie verändert sich der Eurowert in diesem Beispiel?",
    "answers": [
      {
        "label": "Er bleibt zwingend bei 100 Euro.",
        "explanation": "Der geänderte Wechselkurs wirkt auf die Umrechnung."
      },
      {
        "label": "Er fällt von 100 auf 96 Euro.",
        "explanation": "Richtig: Für einen Euro erhält man jetzt mehr Dollar, daher sind 120 Dollar weniger Euro wert."
      },
      {
        "label": "Er steigt auf 150 Euro.",
        "explanation": "Hier muss der Dollarwert durch Dollar je Euro geteilt werden."
      }
    ],
    "correct": 1,
    "rule": "Unveränderter Preis in einer Währung kann in einer anderen Verlust bedeuten."
  },
  {
    "title": "Dein vollständiger Produktpass",
    "summary": "Sechs Angaben machen einen Namen verständlich.",
    "paragraphs": [
      "Stell dir für jedes Produkt einen kurzen Steckbrief vor. Darin stehen die Produktart, deine Rechte und Pflichten sowie die Bezugsgröße des Preises. Dazu gehören Einheit, Währung und ein möglicher Endtermin. Erst zusammen erklären diese Angaben das Geschäft.",
      "Bei einer Aktie hältst du einen Unternehmensanteil. Bei einem Future hältst du einen Vertrag mit festgelegten Bedingungen. Beide Preise können steigen und fallen. Die Bedeutung eines Preispunkts und die entstehenden Pflichten sind aber verschieden. Eine Linie auf dem Bildschirm erklärt das nicht von selbst.",
      "Dieser Steckbrief hilft dir bei neuen Produkten. Kläre die Angaben, bevor du Gewinne oder Verluste ausrechnest. Frage auch, welche Kosten und Risiken bleiben. Im nächsten Kapitel betrachten wir die Menschen und Organisationen, die solche Produkte handeln, und ihre unterschiedlichen Gründe."
    ],
    "columns": [
      {
        "title": "Produktpass",
        "tone": "neutral",
        "points": [
          "Produktart, Rechte/Pflichten, Bezugsgröße.",
          "Menge, Währung, Laufzeit und Abrechnung."
        ]
      },
      {
        "title": "Prüfung danach",
        "tone": "positive",
        "points": [
          "Risiken und Kosten benennen.",
          "Unbekannte Bedingungen als offene Fragen markieren."
        ]
      }
    ],
    "prompt": "Du kennst den Chart, aber nicht den Geldwert je Kontrakt. Ist der Produktcheck vollständig?",
    "answers": [
      {
        "label": "Ja, der Chart garantiert gleiche Bedingungen wie bei Aktien.",
        "explanation": "Vertragsbedingungen lassen sich nicht aus der Darstellung übernehmen."
      },
      {
        "label": "Ja, fehlende Angaben kann man durch die Chartfarbe ersetzen.",
        "explanation": "Eine Farbe beschreibt keine Mengeneinheit oder Verpflichtung."
      },
      {
        "label": "Nein, die Preiswirkung in Geld fehlt noch.",
        "explanation": "Richtig: Produktname und Chart reichen für die Geldrechnung nicht."
      }
    ],
    "correct": 2,
    "rule": "Ein vollständiger Produktpass kommt vor einer Handelsentscheidung."
  }
] as const;

export const marketBasicsChapterTwoLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-02.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 2 · Was genau wird gehandelt?',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 2', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
