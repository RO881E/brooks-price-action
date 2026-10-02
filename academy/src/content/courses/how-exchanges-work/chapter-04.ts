import type { Lesson } from '../../types';

// Eigene Handelsplatzfälle; Zahlen sind vereinfachte Beispiele, keine Live-Angebote.
const drafts = [
  {
    "title": "Die App ist dein Zugang, nicht automatisch der Handelsplatz",
    "summary": "Oberfläche, Auftrag und Ausführung unterscheiden.",
    "paragraphs": [
      "Du öffnest eine Handelsapp und siehst eine Aktie. Das zeigt zunächst deinen Zugang zu Informationen und zur Auftragseingabe. Der Ort, an dem dein Auftrag mit einer passenden Gegenseite zusammenkommt, kann ein anderer sein. Diesen Ort beziehungsweise dieses System nennen wir Handelsplatz.",
      "In unserem erfundenen Fall nimmt eine Brokeroberfläche Miriams Auftrag an und leitet ihn an Platz A weiter. Die Preisgrafik in der Oberfläche verwendet dagegen Daten von Platz B. Ein Chart, eine Auftragseingabe und eine Ausführung können also verschiedene Wege haben. Das bedeutet nicht automatisch, dass etwas fehlerhaft ist; es muss verständlich beschriftet sein.",
      "Für den Einstieg trenne vier Angaben: Wer stellt die Oberfläche? Woher kommen die Daten? Wohin wird der Auftrag geleitet? Wo wird tatsächlich ausgeführt? Die Ausführungsbestätigung beantwortet eine andere Frage als der Name oben auf dem Chart."
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
      "Eine Börse organisiert Handel unter festgelegten Regeln. Dazu können Zulassung von Teilnehmern, handelbare Instrumente, Handelsphasen und Regeln für das Zusammenführen von Aufträgen gehören. Zusammenführen wird auch Matching genannt: Passende Handelswünsche werden nach den vorgesehenen Bedingungen miteinander ausgeführt.",
      "Unser erfundener Handelsplatz akzeptiert Aufträge nur für bestimmte Instrumente und Mengenraster. Eine Kauforder über ein dort nicht handelbares Produkt kann nicht allein durch einen Klick passend gemacht werden. Auch eine angenommene Order ist noch kein abgeschlossener Handel: Sie braucht eine passende Gegenseite und muss die Ausführungsbedingungen erfüllen.",
      "Die Börse ist dabei nicht automatisch der Verkäufer jedes Instruments. In einem einfachen Orderbuchhandel treffen Aufträge verschiedener Teilnehmer aufeinander. Die genaue Marktorganisation kann variieren. Verstehe zuerst die Aufgabe des Platzes, bevor du aus seinem Namen eine Gegenpartei ableitest."
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
      "Viele Handelsplätze arbeiten elektronisch. Teilnehmer übermitteln Aufträge über technische Verbindungen; Systeme prüfen und verarbeiten sie. Ein physischer Börsensaal ist dafür nicht erforderlich. Andere Handelsformen können menschliche Kommunikation oder Verhandlung nutzen. „Wo?“ meint daher häufig ein Handelssystem, nicht einen Raum.",
      "Stell dir zwei Teilnehmer in unterschiedlichen Städten vor. Ihre Aufträge treffen im selben elektronischen System ein. Das System führt passende Bedingungen nach seinen Regeln zusammen. Die räumliche Entfernung der Menschen erklärt noch nicht, welcher Auftrag zuerst verarbeitet wird oder wie gut eine Ausführung ist.",
      "Die Übermittlung braucht Zeit und kann technische Grenzen besitzen. Senden, Empfangen, Annehmen und Ausführen sind verschiedene Ereignisse. Die Meldung „gesendet“ auf einem Bildschirm bedeutet deshalb nicht automatisch, dass am Handelsplatz bereits ein Trade erfolgt ist."
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
      "Ein identisches Wertpapier kann an mehreren Handelsplätzen gehandelt werden. Seine Rechte ändern sich dadurch nicht automatisch. Die aktuell verfügbaren Angebote, Mengen, Handelsphasen und Kosten können jedoch zwischen den Plätzen verschieden sein. Es gibt daher nicht zwingend einen einzigen gleichzeitig ausführbaren Preis für jede Menge.",
      "Unser erfundenes Wertpapier kostet am ersten Verkaufsangebot auf Platz A 50,00 Euro und auf Platz B 50,05 Euro. Das sind zwei Angebote für denselben Zeitpunkt im vereinfachten Beispiel. Um zu vergleichen, müssen zusätzlich Menge, Zugriffsmöglichkeit und Kosten bekannt sein. Ein günstiges Angebot hilft nicht, wenn es nicht erreichbar oder nicht mehr verfügbar ist.",
      "Die Kennung des Wertpapiers hilft beim Erkennen, ersetzt aber nicht jede Prüfung. Instrument, Währung und Rechte müssen tatsächlich passen. Ähnliche Namen können auch verschiedene Aktienarten oder verschiedene Produkte mit demselben Bezug meinen."
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
      "Ein Aktienhandelsplatz und eine Terminbörse können sehr unterschiedliche Instrumente und Vertragsbedingungen anbieten. Ein Aktienindex als Kennzahl, ein Fonds mit Indexbezug und ein Future auf den Index sind verschiedene Dinge. Ihr gemeinsamer Bezug macht sie nicht an jedem Ort austauschbar handelbar.",
      "In unserem erfundenen Fall bietet Platz A Anteile eines Indexfonds an. Platz B bietet einen standardisierten Index-Future mit Laufzeit und Multiplikator an. Die Kurslinien können ähnlich verlaufen, trotzdem wird einmal ein Fondsanteil und einmal ein Vertragsverhältnis gehandelt.",
      "Ein brokerseitiger Zugang zu einem Platz beweist außerdem nicht, dass jedes dort grundsätzlich gelistete Produkt für diesen Kunden zugänglich ist. Produktangebot, Konto und Auftragsbedingungen sind zusätzliche Angaben. Prüfe deshalb Instrument und Handelsweg gemeinsam."
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
      "OTC steht für Over the Counter und bezeichnet außerbörslichen Handel. Beteiligte schließen ein Geschäft außerhalb einer Börse, etwa direkt mit einem Händler oder über eine dafür genutzte Plattform. Es können Wertpapiere oder Verträge gehandelt werden. Außerbörslich heißt daher nicht automatisch „nur CFDs“.",
      "Eine Firma vereinbart mit einer Bank ein individuell passendes Währungstermingeschäft für eine spätere Rechnung. Das ist unser vereinfachtes Beispiel für einen direkten Vertrag. Produktgröße und Termin können auf den Bedarf abgestimmt werden. Ein standardisierter Börsenkontrakt könnte diesen Bedarf anders abdecken.",
      "OTC sagt allein nichts Vollständiges über Regeln, Regulierung oder Qualität. Entscheidend sind Vertragspartner, Bedingungen, Preisbildung, Abwicklung und bestehende Risiken. Auch elektronisch organisierter Handel kann außerbörslich sein. „Elektronisch“ und „Börse“ sind keine gleichbedeutenden Wörter."
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
      "In einem dealerbasierten Lernfall stellt ein Händler ein Kauf- oder Verkaufsangebot auf eigene Rechnung. Nimmt der Kunde ein passendes Angebot an und kommt der Handel zustande, ist der Händler selbst die Gegenseite. Das unterscheidet sich vom bloßen Weiterleiten an andere Teilnehmer.",
      "Miriam möchte im Beispiel 20 Einheiten kaufen. Der Händler nennt 50,10 Euro je Einheit für genau diese Menge und die dazugehörigen Bedingungen. Daraus kann ein Handel mit einem Preisbetrag von 1.002 Euro entstehen: 20 × 50,10. Das gilt nur, wenn die Bedingungen tatsächlich angenommen und der Handel bestätigt werden.",
      "Eine indikative Preisangabe dient zunächst zur Orientierung und ist noch kein festes ausführbares Angebot. Auch bei einem konkreten Angebot sind Gültigkeit und Annahmebedingungen wichtig. Verwechsle eine Preisnachricht nicht mit einer Ausführungsbestätigung."
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
      "In einem einfachen orderbuchbasierten Markt sammeln sich Aufträge auf Preisstufen. Handelsregeln bestimmen, wann passende Bedingungen zusammenkommen. In unserem einfachen dealerbasierten Fall stellt dagegen ein Händler ein eigenes Angebot für den Kunden. Beide Formen können zu einem Kauf führen, organisieren ihn aber unterschiedlich.",
      "Der orderbuchbasierte Lernfall zeigt einen besten Ask von 50 Euro für zwei Einheiten. Ein weiterer Auftrag kann das Angebot nutzen oder verändern. Im Dealer-Lernfall erhält die Kundin ein Angebot für ihre konkret angefragte Menge. Wie lange es gilt und wie es angenommen wird, hängt von den Bedingungen ab.",
      "Reale Märkte können mehrere Mechanismen kombinieren; eigene Händlerangebote können auch in Orderbüchern stehen. Die Gegenüberstellung beschreibt deshalb Grundideen und keine vollständige Schublade für jeden Platz. Frage nach dem tatsächlichen Ablauf statt nur nach einem bekannten Namen."
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
        "label": "Unterschiedliche Mechanismen können Geschäfte organisieren und auch kombiniert werden.",
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
      "RFQ steht für Request for Quote, also eine Bitte um ein Preisangebot. Eine Person nennt beispielsweise Instrument, Menge und Kauf- oder Verkaufswunsch. Ein oder mehrere Händler können Angebote zurückgeben. Der genaue Ablauf hängt vom verwendeten System und seinen Regeln ab.",
      "Unser erfundenes Beispiel fragt 100 Einheiten an. Händler A nennt einen Verkaufspreis von 20,10 Euro, Händler B 20,08 Euro, jeweils unter vergleichbaren Bedingungen. Die Kundin kann die Angebote prüfen. Die Anfrage allein kauft noch nichts; eine gültige Annahme und tatsächliche Bestätigung müssen hinzukommen.",
      "Angebote können unterschiedliche Gültigkeiten, Mengen und Kosten besitzen. Die Auswahl sollte deshalb gleichartige Bedingungen vergleichen. Eine Zahl in der Antwort ist kein Beweis, dass die gesamte gewünschte Menge bereits ausgeführt oder später noch verfügbar ist."
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
      "Vorhandelstransparenz beschreibt hier, welche Informationen über Angebote vor einer Ausführung sichtbar sind. Nachhandelstransparenz beschreibt Informationen über bereits erfolgte Geschäfte. Ein System kann vor dem Handel wenig zeigen und trotzdem nachher bestimmte Ausführungsdaten veröffentlichen. Umfang und Zeitpunkt hängen vom konkreten Rahmen ab.",
      "Ein sogenannter Dark Pool zeigt üblicherweise keine vollständig öffentlichen Vorhandelsangebote wie ein offenes Orderbuch. Das Wort „dark“ beschreibt diese begrenzte Sichtbarkeit, nicht automatisch fehlende Regeln oder garantierte Geheimhaltung jedes späteren Trades. Auch dort braucht eine Ausführung passende Bedingungen.",
      "Wenn du nur ein öffentliches Orderbuch siehst, kennst du deshalb nicht zwingend alle Handelsinteressen im gesamten Markt. Aus fehlender Sichtbarkeit darf aber auch kein bestimmter unbekannter Auftrag erfunden werden. Halte fest, was die Daten zeigen und welche Teile sie nicht abbilden."
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
    "prompt": "Beweist ein wenig transparentes Vorhandelssystem automatisch, dass nie Ausführungsdaten veröffentlicht werden?",
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
      "Orderrouting bezeichnet die Weiterleitung von Aufträgen an einen Ausführungsort. Ein Broker kann einen Auftrag an einen Platz senden, verschiedene Orte berücksichtigen oder je nach Modell selbst eine Rolle in der Ausführung übernehmen. Welche Wege möglich sind, ergibt sich nicht allein aus dem Symbol des Instruments.",
      "In unserem erfundenen Fall kann der Broker nur die Plätze A und B erreichen. Platz C zeigt auf einer fremden Website einen günstigeren Preis, ist für diesen Auftrag aber nicht zugänglich. Das sichtbare Angebot auf C ist damit keine automatische Ausführungsmöglichkeit in dieser Brokeroberfläche.",
      "Ein automatisch ausgewählter Weg ist nicht zwangsläufig ein beliebiger oder ein garantierter Bestpreis. Menge, Bedingungen, Kosten, Geschwindigkeit und verfügbare Orte können eine Rolle spielen. Die konkreten Ausführungsregeln sind nachzulesen. Später vertiefen wir Orderarten; hier genügt die Trennung zwischen möglichem Weg und bestätigtem Ergebnis."
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
      "Du möchtest fünf identische Einheiten kaufen. Auf Platz A liegen zwei bei 100 Euro und drei bei 101 Euro. Auf Platz B sind fünf bei 100,40 Euro verfügbar. Wir unterstellen für die Rechnung erreichbare, unveränderte Angebote und lassen Kosten zunächst weg.",
      "Auf A beträgt der Preisbetrag 2 × 100 + 3 × 101 = 503 Euro. Der Durchschnitt je Einheit liegt bei 503 / 5 = 100,60 Euro. Auf B sind es 5 × 100,40 = 502 Euro, also 100,40 je Einheit. Der erste Ask auf A ist günstiger; die vollständige gewünschte Menge ist in diesem Lernfall auf B günstiger.",
      "Das Beispiel erklärt den Unterschied zwischen bester sichtbarer Preisstufe und durchschnittlicher Ausführung für eine Menge. Es sagt nicht voraus, dass reale Angebote bis zur Order unverändert bleiben. Auch Gebühren und Zeitbezug gehören später in den vollständigen Vergleich."
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
      "Ein Kaufbetrag und die zusätzlichen Kosten gehören in eine gemeinsame Rechnung. In unserem vereinfachten Beispiel kostet dieselbe Menge identischer Einheiten auf Platz A 500 Euro vor Gebühren. Auf Platz B kostet sie 500,50 Euro. Die vollständigen zusätzlichen Kaufkosten betragen 2 Euro auf A und 0,50 Euro auf B.",
      "Die Gesamtausgabe ist damit auf A 500 + 2 = 502 Euro. Auf B beträgt sie 500,50 + 0,50 = 501 Euro. Platz B hat den höheren Preisbetrag, aber die niedrigere gesamte Ausgabe. Wir betrachten ausdrücklich nur diesen Kauf, nicht einen späteren Verkauf oder laufende Finanzierung.",
      "In echten Vergleichen können Kosten anders aufgebaut sein, etwa abhängig von Menge, Mindestgebühr oder Währung. Eine Werbeaussage zu einer einzelnen Gebühr erklärt nicht alle Kosten. Rechne denselben Geschäftsumfang unter denselben Annahmen, bevor du von „günstiger“ sprichst."
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
      "Eine Order muss nicht in einem einzigen Geschäft vollständig ausgeführt werden. Teile können zu verschiedenen Zeiten und Preisen zustande kommen. Je nach Auftragsweg können auch mehrere Ausführungsorte beteiligt sein. Eine erste Meldung erklärt deshalb nicht automatisch den gesamten Auftrag.",
      "Unser erfundener Auftrag möchte zehn Einheiten kaufen. Drei werden auf A zu 20 Euro ausgeführt und sieben auf B zu 20,20 Euro. Der Preisbetrag beträgt 3 × 20 + 7 × 20,20 = 201,40 Euro. Der mengenbezogene Durchschnitt ist 201,40 / 10 = 20,14 Euro vor Kosten.",
      "Wenn zunächst nur drei ausgeführt sind, bleiben sieben noch offen, sofern sie nicht anderweitig beendet wurden. Der Status muss anhand der Meldungen gelesen werden. Gewichtete Durchschnittspreise verwenden die Menge jeder Ausführung; ein einfacher Mittelwert der beiden Preise wäre hier falsch."
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
      "Bevor zwei Angebote verglichen werden, müssen Instrument, Menge, Währung und Bedingungen zusammenpassen. Ein Europreis und ein Dollarpreis sind nicht direkt dieselbe Einheit. Auch verschiedene Anteilsarten oder Vertragsgrößen dürfen nicht allein wegen ähnlicher Namen gleichgesetzt werden.",
      "Unser identischer Beispielwert wird auf A zu 100 Euro und auf B zu 120 US-Dollar angeboten. Bei EUR/USD 1,20 entsprechen 120 Dollar rechnerisch 100 Euro. Vor Tauschkosten und anderen Kosten sind die Angebote in dieser einfachen Umrechnung gleich, obwohl die angezeigten Zahlen verschieden sind.",
      "Eine reale Währungsumrechnung benötigt ausführbare Wechselbedingungen, nicht nur einen beliebigen Referenzkurs. Zusätzlich können Handels- und Abwicklungsbedingungen abweichen. Nutze die Umrechnung zur korrekten Einordnung, aber behandle sie nicht als automatische Zusage für den tatsächlichen Gesamtpreis."
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
      "Eine Datenquelle kann Trades eines einzelnen Platzes, ausgewählte Angebote oder zusammengeführte Informationen darstellen. Auch Zeitverzögerungen und Datenfilter können eine Rolle spielen. Deshalb muss die Beschriftung erklären, welches Instrument und welchen Preisbezug die Anzeige verwendet.",
      "Im erfundenen Fall zeigt der Chart den letzten Trade auf A zu 50 Euro. Dein Kauf wird auf B zu 50,08 Euro bestätigt. Aus der Abweichung allein folgt kein Datenfehler und kein falsch ausgeführter Auftrag. Es sind zunächst ein vergangener Trade an einem Ort und eine neue Ausführung an einem anderen.",
      "Prüfe zuerst Quelle, Zeit und Preisart: letzter Trade, Kaufangebot oder Verkaufsangebot. Dann prüfe Menge und Ausführungsbedingungen. Ein unbekannter Unterschied darf weder sofort als Fehler erklärt noch ungeprüft als unproblematisch abgetan werden. Die Angaben müssen denselben Vorgang beschreiben, bevor sie direkt vergleichbar sind."
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
      "Ein Platz kann unterschiedliche Handelsphasen besitzen. Im fortlaufenden Handel können passende Aufträge laufend zusammenkommen. In einer Auktion werden Handelswünsche nach den Regeln zu einem bestimmten Ablauf zusammengeführt. Die Phasen bestimmen damit nicht nur die Uhrzeit, sondern auch den Ausführungsmechanismus.",
      "Unser erfundener Platz A befindet sich in einer Auktionsphase, Platz B handelt fortlaufend. Eine eingereichte Order kann deshalb auf A anders verarbeitet werden als auf B. Eine angezeigte Zahl während der Auktion ist nicht automatisch derselbe Preisbezug wie ein bereits ausgeführter Trade auf B.",
      "Eine erreichbare App beweist nicht, dass der gewünschte Platz gerade fortlaufend handelt. Konkrete Kalender, Zeitzonen, Feiertage und Handelsphasen müssen für den tatsächlichen Platz geprüft werden. Diese Übersicht nennt bewusst keine aktuellen Öffnungszeiten; Sessions und besondere Phasen folgen später im Kurs ausführlich."
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
        "label": "Nein, die aktuelle Handelsphase des Platzes ist gesondert zu prüfen.",
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
      "Zwischen dem Anzeigen eines Angebots und dem Eintreffen deiner Order vergeht Zeit. Andere Aufträge können die verfügbare Menge handeln; Anbieter können ihre Angebote nach den Regeln ändern. Latenz bezeichnet die Verzögerung einer Übertragung oder Verarbeitung. Sie ist ein Grund, weshalb eine Anzeige keine sichere spätere Ausführung verspricht.",
      "Zum Beobachtungszeitpunkt zeigt A einen Ask von 50 Euro für eine Einheit. Bevor deine Order dort eintrifft, wird diese Einheit anderweitig gehandelt. Das nächste Angebot liegt im Beispiel bei 50,10. Ob deine Order dort ausgeführt wird oder unausgeführt bleibt, hängt von ihrer Preisbedingung und den geltenden Regeln ab.",
      "Das Beispiel behauptet keine bestimmte Verzögerung in Millisekunden. Es trennt nur die Zeitpunkte: angezeigt, gesendet, eingetroffen, ausgeführt. Ein Screenshot kann eine frühere Situation belegen, aber nicht allein die tatsächlich erreichbaren Bedingungen deiner späteren Order."
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
      "Ein Handelsplatz kann den Handel eines Instruments oder bestimmter Bereiche zeitweise unterbrechen. Gründe und Abläufe hängen von seinen Regeln und der konkreten Situation ab. Eine Unterbrechung auf einem Platz beweist nicht allein, dass alle anderen Plätze unverändert weiterhandeln oder ebenfalls geschlossen sind.",
      "In unserem Lernfall meldet A eine Unterbrechung für eine Aktie. Auf B siehst du weiterhin eine Preisanzeige. Diese Anzeige kann aktuell, veraltet oder auf einen anderen Bezug gerichtet sein. Erst eine Prüfung von Instrument, Zeit und Handelsstatus erklärt, ob dort tatsächlich weiter gehandelt werden kann.",
      "Auch der Orderstatus ist getrennt zu prüfen. Eine Unterbrechung bedeutet nicht automatisch, dass jede bestehende Order gelöscht ist. Welche Aufträge bleiben, angenommen oder ausgeführt werden können, ergibt sich aus den Regeln. Aus einer einzelnen Meldung darf kein globaler Handelszustand erfunden werden."
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
        "label": "Zunächst nur die gemeldete Unterbrechung in ihrem angegebenen Umfang.",
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
      "Ein Trade beschreibt die zustande gekommene Vereinbarung über Instrument, Menge und Preis. Danach müssen die daraus entstehenden Verpflichtungen abgewickelt werden. Clearing betrifft unter anderem die Organisation und Behandlung dieser Verpflichtungen; Settlement meint ihre Erfüllung, etwa den Austausch von Wertpapieren und Geld.",
      "Unser einfacher Aktienkauf wird auf einem Handelsplatz ausgeführt. Die weiteren Abwicklungsschritte können durch andere Stellen organisiert werden. Der Name des Ausführungsplatzes bezeichnet deshalb nicht automatisch jede beteiligte Organisation nach dem Trade.",
      "Eine zentrale Gegenpartei kann in bestimmten Strukturen zwischen die ursprünglichen Handelsparteien treten. Ob das geschieht, hängt vom Geschäft und seiner Organisation ab. Börsenhandel und zentrale Abwicklung sind daher getrennte Angaben; OTC-Handel bedeutet umgekehrt nicht zwingend, dass niemals eine zentrale Gegenpartei beteiligt ist. Die Abwicklung vertiefen wir in Kapitel 11."
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
      "Für einen Handelsplatzcheck gehst du diese Fragen durch: Welches Instrument und welche Menge sind gemeint? Welche Orte sind über den Zugang erreichbar? Nach welchem Mechanismus wird gehandelt? Woher stammen die angezeigten Daten? Welchen Ort, Preis und Status nennt die tatsächliche Ausführungsbestätigung?",
      "Abschlussfall: Der Chart zeigt den letzten Trade auf A zu 100. Dein Broker kann B erreichen. Dort sind fünf Einheiten zu 100,40 verfügbar; bei einer vollständigen unveränderten Ausführung wären das 502 vor zusätzlichen Kosten. Erst die Bestätigung sagt, welche Menge tatsächlich zu welchen Preisen ausgeführt wurde. Der Chartpreis auf A garantiert keinen Kauf auf B zu 100.",
      "Jetzt kannst du erklären, weshalb ein Markt mehr als eine Oberfläche oder eine einzelne Zahl ist. Handelsplätze verbinden Aufgaben und Aufträge nach Regeln, während Daten eine ausgewählte Sicht zeigen. Im nächsten Kapitel „Der Markt als Auktion“ vertiefen wir, wie Handelswünsche zusammenkommen und Preise entstehen."
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
