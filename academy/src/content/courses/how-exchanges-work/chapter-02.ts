import type { Lesson } from '../../types';

// Eigenständige Produktbeispiele; alle Zahlen sind vereinfachte Lernfälle.
const drafts = [
  {
    "title": "Ein Produkt erkennen, bevor du den Preis beurteilst",
    "summary": "Name, Rechte und Pflichten gehören zusammen.",
    "paragraphs": [
      "Auf einem Bildschirm können Aktie, ETF und Future wie ähnliche Linien aussehen. Trotzdem kaufst du unterschiedliche Dinge. Bei einer Aktie beteiligst du dich an einem Unternehmen. Bei einem Fonds erwirbst du einen Fondsanteil. Bei einem Future gehst du einen Vertrag ein. Die Linie beschreibt Preise; das Produkt bestimmt, was diese Preise wirtschaftlich bedeuten.",
      "Stell dir drei Anzeigen mit dem Wort „Gold“ vor: ein Goldbarren, ein Anteil an einem Anlageprodukt und ein Terminkontrakt. Alle können mit dem Goldpreis zusammenhängen. Daraus folgt weder derselbe Besitz noch dieselbe Abrechnung. Auch Einheit, Währung und Laufzeit können verschieden sein.",
      "In diesem Kapitel lernst du deshalb einen Produktcheck: Was ist es? Welche Rechte oder Pflichten entstehen? Worauf bezieht sich der Preis? In welcher Einheit wird gehandelt? Gibt es eine Laufzeit? Welche Risiken bleiben? Die Beispiele sind bewusst vereinfacht und ohne Gebühren, sofern nichts anderes angegeben ist."
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
      "Eine Aktie steht für einen Anteil am Eigenkapital eines Unternehmens. Eigenkapital ist das Kapital der Eigentümer. Mit der Aktie sind Rechte verbunden, die von der Aktienart abhängen können, etwa Beteiligung an beschlossenen Ausschüttungen oder ein Stimmrecht. Du besitzt dadurch nicht ein frei herausnehmbares Stück des Firmengebäudes.",
      "Unser erfundenes Unternehmen hat 10.000 gleichartige Aktien. Du hältst 100 davon und damit 1 % dieser Aktien. Das sagt zunächst etwas über deinen Anteil aus. Es verspricht dir weder 1 % der Einnahmen auf deinem Konto noch eine bestimmte jährliche Auszahlung. Einnahmen, Kosten, Gewinne und Ausschüttungen sind verschiedene Größen.",
      "Eine gewöhnliche Aktie besitzt keinen festen Rückzahlungstermin wie ein zeitlich begrenzter Kredit. Willst du aussteigen, verkaufst du sie gewöhnlich am Markt, sofern eine Ausführung zustande kommt. Dein Verkaufspreis kann höher oder niedriger als dein Kaufpreis sein."
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
      "Der Kurs ist der gehandelte Preis einer Aktie. Eine Dividende ist eine beschlossene Ausschüttung an Aktionäre. Unternehmen können Gewinne behalten, ausschütten oder zeitweise keine Dividende zahlen. Ein hoher früherer Ausschüttungsbetrag garantiert keinen gleich hohen künftigen Betrag.",
      "Du kaufst in einem erfundenen Beispiel eine Aktie für 40 Euro, erhältst während deiner Haltedauer 1 Euro Dividende und verkaufst später für 43 Euro. Ohne Gebühren und Steuern beträgt das Ergebnis 43 − 40 + 1 = 4 Euro. Bezogen auf die eingesetzten 40 Euro sind das 10 %. Das ist eine Gesamtrechnung für diesen Beispielzeitraum.",
      "Die Dividende ist kein zusätzliches Geschenk ohne Preisbezug. Wenn eine Aktie ohne den bevorstehenden Ausschüttungsanspruch gehandelt wird, wirkt sich das unter sonst gleichen Bedingungen auf ihren Wert aus. Gleichzeitig können andere Nachrichten den Kurs bewegen. Betrachte deshalb Kursveränderung und erhaltene Zahlungen gemeinsam."
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
      "Eine Anleihe ist eine Schuldverschreibung. Ihr Herausgeber, der Emittent, verpflichtet sich zu Zahlungen nach den Vertragsbedingungen. Unternehmen oder Staaten können so Geld aufnehmen. Als Anleihehalter bist du Gläubiger: Du hast einen Zahlungsanspruch, keine gewöhnliche Beteiligung am Eigenkapital.",
      "Eine einfache festverzinsliche Beispielanleihe hat 1.000 Euro Nennwert, einen jährlichen Kupon von 3 % und eine Laufzeit von fünf Jahren. Nennwert ist hier der Betrag, auf den sich die vereinbarte Zinszahlung und Rückzahlung beziehen. Kupon bezeichnet den vertraglichen Zins. Bei vertragsgemäßer Zahlung sind das 30 Euro pro Jahr und am Laufzeitende 1.000 Euro Rückzahlung.",
      "Das Beispiel gilt für diesen einfachen Vertrag. Es gibt auch Anleihen mit anderen Zins- oder Rückzahlungsregeln. Und ein vertraglicher Anspruch garantiert nicht, dass der Emittent tatsächlich zahlen kann. Preis, Vertrag und Zahlungsfähigkeit müssen getrennt beurteilt werden."
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
      "Der Kupon unserer Beispielanleihe wird aus dem Nennwert berechnet. Der Marktpreis kann davon abweichen. Deshalb beschreibt der Kupon allein nicht deine Rendite auf den tatsächlich gezahlten Betrag. Rendite setzt Ertrag und eingesetztes Kapital ins Verhältnis; für eine vollständige Rechnung spielt auch der Zeitpunkt der Zahlungen eine Rolle.",
      "Eine Anleihe mit 1.000 Euro Nennwert und 30 Euro jährlichem Kupon wird im vereinfachten Beispiel für 950 Euro gekauft. Die laufende Verzinsung aus dem Kupon beträgt 30 / 950, also rund 3,16 %. Das ist noch keine vollständige Rendite bis zum Laufzeitende: Die mögliche Rückzahlung zu 1.000, Restlaufzeit und weitere Zahlungsdetails gehören ebenfalls dazu.",
      "Anleihekurse werden häufig in Prozent des Nennwerts angezeigt. Ein Kurs von 95 bedeutet dann 95 % und bei 1.000 Euro Nennwert 950 Euro, nicht 95 Euro. Unsere Rechnung lässt Stückzinsen, also bereits aufgelaufene Zinsen zwischen Zahlungsterminen, und Kosten ausdrücklich weg."
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
      "Ein fester Kupon macht den Marktpreis einer Anleihe nicht fest. Stell dir eine alte Anleihe mit 30 Euro Jahreszins vor. Neue, ansonsten vergleichbare Anleihen bieten jetzt 50 Euro auf denselben Nennwert. Die alte Zahlung ist relativ weniger attraktiv; ihr Preis kann fallen. Wie stark, hängt unter anderem von Restlaufzeit und Zahlungsstruktur ab.",
      "Das ist Zinsänderungsrisiko. Daneben steht das Ausfallrisiko: Der Emittent kann Zahlungen verspätet, teilweise oder gar nicht leisten. Auch ein staatlicher Emittent beseitigt dieses Risiko nicht automatisch. Zusätzlich kann der Verkauf schwierig sein, wenn nur wenig handelbare Menge verfügbar ist.",
      "Wer vor Fälligkeit verkauft, erhält den tatsächlich ausführbaren Marktpreis. Wer bis zur Fälligkeit hält, ist weiterhin auf die vertraglichen Zahlungen angewiesen. „Festverzinslich“ beschreibt bestimmte Zinsbedingungen; es bedeutet nicht „jederzeit ohne Wertverlust verkäuflich“."
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
      "Ein Investmentfonds bündelt Geld und setzt es nach seinen Anlagebedingungen ein. Er kann beispielsweise Aktien, Anleihen oder eine Mischung halten. Du erwirbst einen Fondsanteil. Damit bist du wirtschaftlich an der Entwicklung des Fonds beteiligt; du hältst nicht automatisch jede enthaltene Aktie als einzelnen eigenen Depotposten.",
      "Unser erfundener Fonds hat Vermögenswerte von 100.000 Euro und Verpflichtungen von 2.000 Euro. Sein Nettovermögen beträgt 98.000 Euro. Sind 1.000 Anteile ausgegeben, ergibt das rechnerisch 98 Euro Nettovermögen je Anteil. Der Nettoinventarwert beschreibt dieses Verhältnis. Ein tatsächlicher Kauf- oder Verkaufspreis kann je nach Fonds und Handelsweg davon abweichen.",
      "Die Mischung kann Risiken verteilen, beseitigt aber keine gemeinsamen Risiken. Ein Fonds mit vielen ähnlichen Technologieunternehmen bleibt stark von diesem Bereich abhängig. Lies deshalb Anlageziel, enthaltene Risiken und Kosten. Die Zahl der Positionen allein sagt nicht, wie breit wirklich gestreut wird."
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
      "ETF steht für Exchange Traded Fund, also börsengehandelter Fonds. Seine Anteile können während der jeweiligen Handelszeiten an der Börse gekauft oder verkauft werden. Der Preis entsteht im Handel. Der Nettoinventarwert ist dagegen der rechnerische Wert der Fondsanlagen abzüglich Verpflichtungen je Anteil; beide Größen müssen nicht jederzeit identisch sein.",
      "Viele ETFs verfolgen einen Index. Andere werden aktiv verwaltet, also nach Entscheidungen einer Verwaltung statt einer reinen Indexnachbildung. Ein ETF kann Aktien, Anleihen oder andere Anlagekonzepte betreffen. Das Wort ETF erklärt daher zunächst eine Produkt- und Handelsform; es sagt nicht automatisch „breiter Aktienmarkt“.",
      "Auch die Nachbildung kann unterschiedlich erfolgen: Ein Fonds kann Anlagen direkt halten oder für Teile der gewünschten Wertentwicklung Verträge einsetzen. Das verändert seine Struktur und Risiken. Für den Einstieg reichen drei Fragen: Was verfolgt der Fonds? Wie setzt er es um? Welche laufenden Kosten und Handelskosten entstehen?"
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
      "Ein Index fasst die Entwicklung ausgewählter Werte nach bestimmten Regeln zusammen. Diese Regeln bestimmen Auswahl, Gewichtung und Berechnung. Der angezeigte Indexstand ist eine Kennzahl. Du kannst die Kennzahl selbst nicht wie eine gewöhnliche Aktie besitzen.",
      "Denk an ein Thermometer: Der Messwert beschreibt eine Situation, ist aber kein Gegenstand, den du als „23 Grad“ kaufen kannst. Beim Index können Fonds oder Verträge die gemessene Entwicklung als Bezug verwenden. Ein Index-ETF, ein Index-Future und ein Index-CFD sind dabei verschiedene Produkte.",
      "Ein Preisindex erfasst im Grundsatz die Kursentwicklung; ein Gesamtertragsindex berücksichtigt nach seinen Regeln zusätzlich Ausschüttungen. Deshalb können selbst Indizes auf ähnliche Unternehmen unterschiedlich verlaufen. Lies, welche Berechnung gemeint ist, bevor du Zahlen vergleichst."
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
      "Ein ausschüttender Fonds zahlt nach seinen Bedingungen Erträge an seine Anteilhalter aus. Ein thesaurierender Fonds behält Erträge im Fonds und legt sie wieder an. Thesaurieren bedeutet hier also Wiederanlegen. Beide Wege ändern die Verwendung der Erträge, nicht die ursprünglichen Risiken der Anlagen.",
      "Im vereinfachten Beispiel hat ein Anteil vor einer Ausschüttung einen Wert von 100 Euro. Werden 2 Euro ausgezahlt, läge sein Wert unter sonst gleichen Bedingungen danach bei 98 Euro; daneben besitzt du 2 Euro ausgezahltes Geld. Bei Wiederanlage verbleibt der Ertrag im Fonds. Die Ausschüttung schafft nicht aus dem Nichts 2 Euro zusätzlichen Gesamtwert.",
      "In der Realität können gleichzeitig Kurse schwanken. Deshalb lässt sich die ganze Tagesbewegung nicht immer nur der Auszahlung zuschreiben. Vergleiche für deine Lerngrafiken Gesamtwert und Zahlungen gemeinsam. Steuern und konkrete Abwicklung behandeln wir in dieser vereinfachten Produktübersicht nicht."
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
      "Beim Währungstausch gibst du eine Währung ab und erhältst eine andere. Darum wird ein Wechselkurs als Paar angegeben. In EUR/USD ist der Euro die Basiswährung und der US-Dollar die Preiswährung. Ein Kurs von 1,20 bedeutet: Ein Euro entspricht 1,20 US-Dollar in dieser Kursangabe.",
      "Ohne Spread und Kosten ergeben 100 Euro bei 1,20 genau 120 US-Dollar. Steigt EUR/USD auf 1,25, entspricht ein Euro mehr US-Dollar als zuvor. In dieser Paarangabe ist der Euro relativ zum Dollar stärker geworden. Das sagt nicht, dass der Euro gleichzeitig gegen jede andere Währung stärker ist.",
      "Die Reihenfolge ist entscheidend. Das umgekehrte Verhältnis USD/EUR wäre bei EUR/USD 1,20 ungefähr 0,8333, also 1 / 1,20. Ein anderer Zahlenwert muss daher nicht eine andere wirtschaftliche Situation bedeuten. Lies immer, welche Währung als eine Einheit gesetzt wird."
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
      "Du kannst Euro in Dollar tauschen, um später eine Rechnung in Dollar zu bezahlen. In diesem einfachen Kassageschäft erhältst du die andere Währung nach der vereinbarten Abwicklung. Kassa beschreibt hier das gewöhnliche Geschäft mit zeitnaher Erfüllung, nicht zwingend einen physischen Bargeldtausch.",
      "Eine Tradingplattform kann dagegen einen Vertrag auf das Währungspaar anbieten. Das kann beispielsweise ein Future oder ein CFD sein. Dann bestimmt der Vertrag, wie Gewinne und Verluste abgerechnet werden. Der sichtbare Wechselkurs allein beweist nicht, dass ein frei verwendbares Dollar-Guthaben entsteht.",
      "Beispiel: Miriam tauscht Geld für eine Reise. Robert handelt einen Vertrag mit Bezug auf EUR/USD. Beide interessieren sich für dasselbe Verhältnis, gehen aber unterschiedliche Geschäfte ein. Prüfe deshalb ausdrücklich, ob du Währung erhältst oder eine Position in einem Vertrag eingehst."
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
      "Ein Derivat ist ein Vertrag, dessen Wert oder Zahlungen von einer Bezugsgröße abhängen. Diese Bezugsgröße wird häufig Basiswert genannt. Das kann eine Aktie, ein Rohstoff oder eine Währung sein, aber auch eine Kennzahl wie ein Index oder Zinssatz.",
      "Stell dir einen Vertrag vor, der bei einer Änderung eines Aktienindex Zahlungen vorsieht. Du hältst damit nicht automatisch alle im Index enthaltenen Unternehmensanteile. Du hältst eine Vertragsposition. Ob Rechte, Pflichten, Lieferung oder Geldzahlung entstehen, steht in den Bedingungen.",
      "Derivate können zur Absicherung oder zum bewussten Eingehen von Preisrisiken genutzt werden. Sie sind nicht allein durch ihren Namen eine bestimmte Strategie. Für dieses Kapitel unterscheiden wir vor allem Futures, Optionen und CFDs. Jeder dieser Verträge besitzt eigene Regeln."
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
      "Ein Future ist ein standardisierter, an einer Terminbörse gehandelter Vertrag. Seine Bedingungen legen unter anderem Basiswert, Kontraktgröße, Preisraster und Abrechnung fest. Standardisiert heißt: Du handelst nicht bei jeder Order eine individuelle Vertragsgröße neu aus.",
      "Ein erfundener Index-Future hat einen Multiplikator von 2 Euro je Indexpunkt. Bei einem Stand von 5.000 Punkten beträgt sein rechnerischer Nominalwert 10.000 Euro. Der Nominalwert beschreibt hier den wirtschaftlichen Bezug der Position; er ist nicht automatisch der Betrag, den du als Sicherheitsleistung hinterlegen musst.",
      "Ein Forward ist ebenfalls ein Termingeschäft, wird aber typischerweise zwischen Beteiligten mit individuell vereinbarten Bedingungen geschlossen. Diese erste Abgrenzung reicht hier: Terminvereinbarung ist die gemeinsame Idee, Standardisierung und Handelsorganisation unterscheiden die Formen."
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
        "label": "10.000 Euro wirtschaftlicher Bezug.",
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
      "Ein Terminkontrakt gehört zu einer festgelegten Laufzeit beziehungsweise einem Abrechnungstermin. Je nach Produkt sehen die Bedingungen eine Lieferung oder eine Geldabrechnung vor. Geldabrechnung bedeutet: Der vereinbarte Wertausgleich erfolgt in Geld. Lieferung bedeutet: Die vertraglich bestimmte Sache oder das Instrument wird nach den Regeln übertragen.",
      "Bei einem Rohstoff-Future kann die Erfüllung eine konkrete Ware mit bestimmten Qualitäts- und Lieferbedingungen betreffen. Ein Index-Future kann dagegen in Geld abgerechnet werden; einen Index als Kennzahl kann niemand in einer Kiste liefern. Maßgeblich sind stets die konkreten Bedingungen.",
      "Eine Position kann häufig vor dem Ende durch ein Gegengeschäft im selben Kontrakt geschlossen werden. Wer in eine spätere Laufzeit wechseln möchte, schließt die alte Position und eröffnet eine neue; das heißt Rollen. Es ist kein kostenloses Verlängern desselben Vertrags. Preise, Kosten und Handelsfähigkeit können sich unterscheiden."
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
      "Bei einem Future wird eine Sicherheitsleistung verlangt, die Margin heißt. Sie dient zur Absicherung der Verpflichtungen. Sie ist weder eine Anzahlung auf ein gewöhnliches Eigentumsrecht noch eine Garantie, dass Verluste auf diesen Betrag begrenzt bleiben.",
      "Unser erfundener Future bewegt 2 Euro je Punkt. Für die Beispielposition werden 500 Euro Margin verlangt. Ein Rückgang um 100 Punkte verursacht bei einer Kaufposition 200 Euro Verlust vor Kosten. Ein Rückgang um 300 Punkte verursacht 600 Euro. Die Preiswirkung kommt vom Multiplikator, nicht von der Höhe der hinterlegten Margin.",
      "Gewinne und Verluste werden nach den Abrechnungsregeln berücksichtigt; Anforderungen können sich ändern. Zusätzliche Mittel oder eine Schließung können nötig werden. Hebel beschreibt hier, dass der wirtschaftliche Bezug größer als das gebundene Kapital sein kann. Er verstärkt relativ zum eingesetzten Kapital sowohl Gewinne als auch Verluste."
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
      "Eine Option gibt ihrem Käufer ein Recht nach festgelegten Bedingungen. Ein Call bezieht sich auf das Recht zu kaufen, ein Put auf das Recht zu verkaufen. Der festgelegte Preis heißt Ausübungspreis oder Strike. Welche Ausübung und Abrechnung möglich sind, hängt vom konkreten Vertrag ab.",
      "Der Käufer zahlt für das Recht eine Prämie. Er ist grundsätzlich nicht verpflichtet, das Recht auszuüben. Der Optionsverkäufer, auch Stillhalter genannt, übernimmt dagegen die entsprechende Verpflichtung, wenn nach den Bedingungen ausgeübt beziehungsweise abgerechnet wird. Kauf und Verkauf einer Option sind daher keine austauschbaren Rollen.",
      "Ein steigender Basiswert kann einen Call wertvoller machen; ein fallender einen Put. Doch auch Restlaufzeit und die erwartete Schwankung beeinflussen den Optionspreis. Deshalb reicht ein kleines Plus der Aktie nicht immer, damit ein gekaufter Call insgesamt Gewinn bringt."
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
      "Wir betrachten eine erfundene, vollständig bezahlte Call-Option am Verfallstag. Sie bezieht sich zur einfachen Rechnung auf genau eine Aktie, hat Strike 50 Euro und kostet 3 Euro Prämie. Eine echte Option kann sich auf mehrere Einheiten beziehen; diese Vertragsgröße müsstest du zusätzlich berücksichtigen.",
      "Steht die Aktie am Ende bei 52 Euro, ist das Kaufrecht rechnerisch 2 Euro wert: 52 − 50. Nach der gezahlten Prämie ergibt das 2 − 3 = −1 Euro vor Kosten. Bei 55 Euro wären es 5 − 3 = +2 Euro. Der rechnerische Ausgleichspunkt liegt am Verfall bei 53 Euro, nicht schon bei 50.",
      "Bei einem Aktienpreis von höchstens 50 hat dieses Call-Recht am Ende keinen positiven Ausübungswert; die bezahlten 3 Euro können vollständig verloren sein. Vor dem Verfall ist der Marktwert anders zusammengesetzt. Der begrenzte Verlust der bezahlten Option beschreibt außerdem nicht automatisch das Risiko einer anschließend durch Ausübung entstandenen Aktienposition."
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
      "CFD steht für Contract for Difference, also Differenzkontrakt. Die Beteiligten vereinbaren einen Ausgleich aus einer Preisänderung nach den Produktbedingungen. Ein CFD auf eine Aktie ist daher nicht die Aktie selbst. Er vermittelt nicht automatisch deren Eigentums- oder Stimmrechte.",
      "Ein erfundener CFD bewegt 1 Euro je Preiseinheit. Du eröffnest eine Kaufposition bei 100 und schließt bei 106. Die reine Preisdifferenz ergibt +6 Euro; bei einer Schließung bei 96 sind es −4 Euro. Spread, weitere Gebühren und mögliche Finanzierungskosten kommen je nach Bedingungen hinzu.",
      "CFDs werden typischerweise außerbörslich mit einem Anbieter als Vertragspartner gehandelt. Preisstellung, Gegenpartei und Bedingungen sind deshalb wichtige Teile des Produktchecks. Hinterlegte Margin und wirtschaftlicher Bezug können auseinanderliegen. Welche zusätzlichen Schutzregeln gelten, hängt vom konkreten Rahmen ab; aus dem Namen CFD allein lässt sich keine universelle Verlustgrenze ableiten."
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
      "Ein Index-Future und ein Index-CFD können beide auf denselben Aktienmarkt Bezug nehmen. Trotzdem unterscheiden sie sich in ihrer Organisation: Der Future ist ein standardisierter Börsenkontrakt; der CFD ist typischerweise ein Vertrag mit einem Anbieter außerhalb einer Börse. Der konkrete Preisbezug kann ebenfalls abweichen.",
      "Beim Future prüfst du etwa Laufzeit, Multiplikator und Abrechnung. Beim CFD prüfst du unter anderem Mengeneinheit, Preisbildung und Finanzierung. Ein CFD kann sich auf einen Kassapreis oder einen Futures-Preis beziehen und entsprechende Anpassungen besitzen. Eine ähnliche Produktbezeichnung verrät diese Details noch nicht.",
      "Auch Margin, Gebühren und Anforderungen sind gesondert zu lesen. Ein kleiner angezeigter Preis pro Einheit beweist nicht, dass die gesamte Position kleiner oder günstiger ist. Vergleiche gleiche wirtschaftliche Mengen und vollständige Kosten, bevor du Produkte als gleichwertig behandelst. Hier geht es um Verständnis, noch nicht um die Auswahl eines Anbieters."
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
      "Bei Rohstoffen kannst du eine Ware selbst erwerben, etwa einen Goldbarren, oder ein Anlageprodukt beziehungsweise einen Vertrag mit Rohstoffbezug halten. Beim direkten Besitz sind Lagerung, Versicherung und Qualität relevant. Beim Vertrag sind es beispielsweise Kontraktgröße, Laufzeit und Erfüllung.",
      "Ein erfundenes Ölgeschäft kann sich auf eine bestimmte Sorte, einen Lieferort und einen Termin beziehen. „Ölpreis“ ist daher keine einzige Zahl für jede Art von Öl überall und jederzeit. Ebenso ist ein Rohstoff-Anlageprodukt mit Futures-Bezug nicht identisch mit einem Tank voller Ware.",
      "Ein Produkt, das seine Rohstoffposition regelmäßig in neue Futures-Laufzeiten verlagert, kann anders verlaufen als der heute beobachtete Kassapreis. Die Preise verschiedener Liefertermine und die Wechselkosten tragen dazu bei. Für den Anfang genügt: Ware, Bezugsgröße und Produktstruktur getrennt benennen."
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
      "Aktien werden in Stückzahlen gehandelt, Futures in Kontrakten. Bei einem Indexvertrag sind Punkte die Preisbewegung; ein Multiplikator übersetzt sie in Geld. Ein Tick ist der kleinste erlaubte Preisschritt dieses Instruments. Wie viel er wert ist, hängt von den Bedingungen ab.",
      "Unser erfundener Future hat 2 Euro je Punkt und eine Tickgröße von 0,25 Punkten. Ein Tick ist damit 0,25 × 2 = 0,50 Euro je Kontrakt wert. Bei drei Kontrakten und einer Bewegung von acht Ticks beträgt die reine Preiswirkung 3 × 8 × 0,50 = 12 Euro. Ob Gewinn oder Verlust entsteht, hängt von Positionsrichtung und Bewegung ab.",
      "Ein CFD desselben Namens kann einen anderen Wert je Einheit haben. Ein Chartanstieg um zehn Punkte ist deshalb allein keine Aussage über zehn Euro Gewinn. Schreibe bei jeder Rechnung Menge, Preisschritt und Geldwert dazu. Konkrete Positionsgrößen und Ordereingabe vertiefen wir später im Kurs zu Orders und Ausführung."
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
      "Wenn du eine Anlage in einer anderen Währung hältst und ihren Wert später in Euro betrachtest, wirken Anlagepreis und Wechselkurs zusammen. Ein unveränderter Dollarpreis bedeutet daher nicht automatisch einen unveränderten Eurowert. Das ist Währungsrisiko aus deiner Betrachtungswährung.",
      "Eine erfundene Anlage kostet 120 US-Dollar. Bei EUR/USD 1,20 entspricht das 100 Euro. Später bleibt die Anlage bei 120 Dollar, aber EUR/USD steigt auf 1,25. Nun entsprechen 120 Dollar nur 120 / 1,25 = 96 Euro. Ohne Kosten hast du in Dollar keine Preisänderung, in Euro aber 4 Euro weniger Wert.",
      "Die Währung, in der ein Fondsanteil an einer Börse angezeigt wird, sagt noch nicht allein, welche Währungsrisiken seine Anlagen tragen. Auch eine Absicherung muss ausdrücklich Teil der Bedingungen sein. Trenne deshalb Handelswährung, wirtschaftliche Anlagen und deine eigene Bewertungswährung."
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
      "Jetzt kannst du aus einem bloßen Symbol einen verständlichen Produktpass machen. Er nennt Produktart, Rechte oder Pflichten, Bezugsgröße, Mengeneinheit, Währung und Laufzeit beziehungsweise Abrechnung. Danach kannst du typische Preis-, Ausfall-, Währungs- und Kostenrisiken hinzufügen.",
      "Beispiel A: Eine gewöhnliche Aktie ist ein Unternehmensanteil, gehandelt in Stück und einer Preiswährung, ohne gewöhnlichen festen Rückzahlungstermin. Beispiel B: Unser erfundener Future ist ein Vertragsverhältnis mit Indexbezug, 2 Euro je Punkt, festgelegter Laufzeit und vertraglicher Abrechnung. Die Angaben dürfen nicht vom einen Produkt auf das andere übertragen werden.",
      "Fehlt dir eine Angabe, wird daraus eine offene Frage. Ein vertrauter Chart füllt die Lücke nicht. Im nächsten Kapitel „Wer handelt und warum?“ ordnen wir die Teilnehmer und ihre Ziele genauer ein. Für jetzt lautet dein Abschlusscheck: Kannst du erklären, was du tatsächlich hältst, wie ein Preisschritt wirkt und welche Verpflichtungen entstehen können?"
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
