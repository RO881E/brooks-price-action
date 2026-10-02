import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Ein Stop beginnt mit einer Bedingung",
    "summary": "Der Auslöser kommt vor der aktiven Folgeorder.",
    "paragraphs": [
      "Lea besitzt Aktien der erfundenen Firma Arvo. Sie möchte einen Verkauf erst nach einem bestimmten Preisereignis aktivieren. Dafür gibt sie eine Stop-Anweisung ab. Der Stoppreis bezeichnet die Auslöseschwelle dieser Bedingung.",
      "Wir unterscheiden hier zwei Arten. Eine Stop-Market-Order aktiviert nach der Auslösung einen Market-Auftrag. Eine Stop-Limit-Order aktiviert einen Limitauftrag. Bei beiden ist die Auslösung ein eigener Schritt vor einer möglichen Ausführung.",
      "Alle Fälle dieses Kapitels sind erfundene Aktienbeispiele. Die genaue Bedingung und Handelsphase werden jeweils genannt. Ein Begriff oder eine Linie im Chart reicht nicht aus, um einen realen Auftrag vollständig zu verstehen."
    ],
    "columns": [
      {
        "title": "Bedingung",
        "tone": "neutral",
        "points": [
          "Eine festgelegte Preisregel beobachten.",
          "Stoppreis als Auslöseschwelle."
        ]
      },
      {
        "title": "Folgeorder",
        "tone": "positive",
        "points": [
          "Nach Auslösung Market oder Limit.",
          "Tatsächlicher Handel gesondert prüfen."
        ]
      }
    ],
    "prompt": "Was ist der Stoppreis in diesem Kapitel?",
    "answers": [
      {
        "label": "Die Schwelle der Auslösebedingung.",
        "explanation": "Richtig: Der Stoppreis aktiviert eine Folgeorder nach den festgelegten Regeln."
      },
      {
        "label": "Ein garantierter Ausführungspreis.",
        "explanation": "Auslösung und tatsächlicher Handel sind verschiedene Schritte."
      },
      {
        "label": "Eine sichere Gewinnhöhe.",
        "explanation": "Eine Stop-Anweisung verspricht keinen Gewinn."
      }
    ],
    "correct": 0,
    "rule": "Stoppreis heißt Auslöseschwelle und keine Preisgarantie."
  },
  {
    "title": "Unsere Auslösequelle ausdrücklich festlegen",
    "summary": "Im Lernmarkt zählen neue bestätigte Trades.",
    "paragraphs": [
      "Für den Hauptlernmarkt gilt: Nach Annahme der Stop-Anweisung beobachten wir neue bestätigte Trades derselben erfundenen Aktie auf demselben Handelsplatz. Ein Verkaufsstop löst bei einem Trade am Stoppreis oder darunter aus. Ein Kaufstop löst am Stoppreis oder darüber aus.",
      "Ein Kaufgebot oder Verkaufsangebot ist nach dieser Regel kein Auslöser. Auch ein alter Trade vor Annahme zählt nicht. Wir nennen diese Quelle letzter Handel. Andere Systeme können andere Auslösebedingungen und Bezeichnungen verwenden.",
      "Die Überwachung läuft im Lernfall nur während der angegebenen aktiven Handelsphase. Wir nehmen eine zuverlässige Übermittlung der genannten Ereignisse an. Diese Regeln sind ausdrücklich unser Modell. Für echte Orders prüfst du die Quelle und die Bedingungen des Anbieters."
    ],
    "columns": [
      {
        "title": "Verkaufsstop",
        "tone": "neutral",
        "points": [
          "Neuer Trade kleiner oder gleich der Schwelle.",
          "Nur die ausdrücklich gewählte Handelsquelle."
        ]
      },
      {
        "title": "Kaufstop",
        "tone": "positive",
        "points": [
          "Neuer Trade größer oder gleich der Schwelle.",
          "Angebote allein lösen im Modell nicht aus."
        ]
      }
    ],
    "prompt": "Welche Nachricht kann im Hauptlernmarkt auslösen?",
    "answers": [
      {
        "label": "Ein beliebiger alter Chartpreis.",
        "explanation": "Ein Trade vor Annahme ist kein neues Auslöseereignis."
      },
      {
        "label": "Ein passender neuer bestätigter Trade nach Annahme.",
        "explanation": "Richtig: Quelle, Zeit und Schwelle gehören hier zusammen."
      },
      {
        "label": "Jedes Kaufangebot auf irgendeinem Handelsplatz.",
        "explanation": "Unser Modell wertet bestätigte Trades derselben Quelle aus."
      }
    ],
    "correct": 1,
    "rule": "Nenne Auslösequelle, Richtung und Zeitpunkt der aktiven Überwachung."
  },
  {
    "title": "Ein Verkaufsstop reagiert nach unten",
    "summary": "Die Schwelle muss nicht exakt getroffen werden.",
    "paragraphs": [
      "Lea hält vier Arvo-Aktien. Der aktuelle Trade liegt bei 60,00 Euro. Ihr Verkaufsstop liegt bei 58,00 Euro. Die Anweisung ist angenommen und aktiv überwacht. Ein neuer Trade bei 58,10 löst noch nicht aus.",
      "Ein späterer Trade bei genau 58,00 würde auslösen. Auch ein direkter Sprung auf 57,90 löst aus. Die Regel ist kleiner oder gleich 58,00. Sie verlangt keinen vorherigen Trade exakt auf der Schwelle.",
      "Die ausgelöste Folgeorder muss anschließend auf vorhandene Kaufangebote treffen. Selbst der auslösende Trade hat seine eigene Menge und Gegenparteien. Er ist nicht automatisch eine Ausführung von Leas Auftrag."
    ],
    "columns": [
      {
        "title": "Noch nicht ausgelöst",
        "tone": "neutral",
        "points": [
          "58,10 Euro liegt über 58,00.",
          "Der Stop wartet nach seiner Regel."
        ]
      },
      {
        "title": "Ausgelöst",
        "tone": "positive",
        "points": [
          "58,00 oder 57,90 Euro als neuer Trade.",
          "Die Folgeorder wird anschließend aktiv."
        ]
      }
    ],
    "prompt": "Löst ein Sprung von 58,10 auf 57,90 den Verkaufsstop aus?",
    "answers": [
      {
        "label": "Nein, es muss zwingend genau 58,00 gehandelt werden.",
        "explanation": "Die Regel lautet am Stoppreis oder darunter."
      },
      {
        "label": "Nein, weil Verkaufsstops nur bei steigenden Preisen reagieren.",
        "explanation": "Dieser Verkaufsstop beobachtet eine Schwelle nach unten."
      },
      {
        "label": "Ja, 57,90 liegt unter der Schwelle 58,00.",
        "explanation": "Richtig: Ein exakter Trade auf 58,00 ist nicht erforderlich."
      }
    ],
    "correct": 2,
    "rule": "Ein Verkaufsstop löst hier am Stoppreis oder darunter aus."
  },
  {
    "title": "Ein Kaufstop reagiert nach oben",
    "summary": "Die spätere Kauforder hat eine andere Gegenseite.",
    "paragraphs": [
      "In einem getrennten Fall besitzt Lea keine Arvo-Aktien. Der aktuelle Trade liegt bei 60,00 Euro. Sie gibt einen Kaufstop bei 61,00 Euro ab. Ein neuer Trade bei 60,90 liegt noch unter der Auslöseschwelle.",
      "Ein Trade bei 61,00 oder darüber löst nach unseren Regeln aus. Danach braucht ein Kauf Verkaufsangebote. Ein zuvor beobachteter Trade von 61,20 verspricht Lea keinen Kauf zu 61,20. Die Ausführung erfolgt erst nach Aktivierung.",
      "Ein Kaufstop kann unterschiedliche Zwecke haben. Aus seiner Seite allein folgt nicht, ob jemand eine neue Position eröffnet oder eine andere schließen möchte. In diesem konkreten Fall will Lea eine neue Aktienposition kaufen."
    ],
    "columns": [
      {
        "title": "Vor Auslösung",
        "tone": "neutral",
        "points": [
          "Trade 60,90 bei Stop 61,00 Euro.",
          "Noch keine aktive Kauf-Folgeorder."
        ]
      },
      {
        "title": "Nach Auslösung",
        "tone": "positive",
        "points": [
          "Trade 61,00 oder höher.",
          "Der aktive Kauf braucht Verkaufsangebote."
        ]
      }
    ],
    "prompt": "Welcher neue Trade löst hier den Kaufstop aus?",
    "answers": [
      {
        "label": "61,20 Euro.",
        "explanation": "Richtig: Der Preis liegt über der Kaufstop-Schwelle von 61,00."
      },
      {
        "label": "60,90 Euro.",
        "explanation": "Dieser Preis liegt noch unter der Schwelle."
      },
      {
        "label": "Jeder Preis unter 61,00 Euro.",
        "explanation": "Damit würde die festgelegte Richtung umgekehrt."
      }
    ],
    "correct": 0,
    "rule": "Ein Kaufstop löst hier am Stoppreis oder darüber aus."
  },
  {
    "title": "Ausgelöst bedeutet noch nicht ausgeführt",
    "summary": "Drei Zustände klar auseinanderhalten.",
    "paragraphs": [
      "Leas Verkaufsstop ist zunächst angenommen und wartet auf das Preisereignis. Dann meldet das System, dass die Bedingung erfüllt ist. Die Folgeorder wurde aktiviert. Bis hier ist noch keine eigene Verkaufsmenge bestätigt.",
      "Erst ein Ausführungsbericht belegt einen tatsächlichen Handel. Er nennt die gehandelte Menge und den Preis. Die Folgeorder kann sofort, teilweise, später oder unter den jeweiligen Regeln gar nicht handeln.",
      "Ein sauberer Statusbericht unterscheidet wartende Bedingung, aktivierte Folgeorder und ausgeführten Handel. Manche Apps verteilen diese Informationen auf mehrere Anzeigen. Eine farbige Stoplinie allein zeigt keine persönliche Ausführung."
    ],
    "columns": [
      {
        "title": "Wartet / ausgelöst",
        "tone": "neutral",
        "points": [
          "Bedingung noch offen oder erfüllt.",
          "Aktivierung ist ein eigenes Ereignis."
        ]
      },
      {
        "title": "Ausgeführt",
        "tone": "positive",
        "points": [
          "Gehandelte Menge und Preis bestätigt.",
          "Erst dann wurde tatsächlich verkauft."
        ]
      }
    ],
    "prompt": "Was beweist „ausgelöst“ allein?",
    "answers": [
      {
        "label": "Dass Lea sicher den Stoppreis erhält.",
        "explanation": "Der Triggerpreis ist keine Ausführungszusage."
      },
      {
        "label": "Dass die festgelegte Bedingung erfüllt und die Folgeorder aktiviert wurde.",
        "explanation": "Richtig: Die tatsächliche Ausführungsmenge muss getrennt bestätigt werden."
      },
      {
        "label": "Dass alle Aktien bereits verkauft sind.",
        "explanation": "Die Meldung enthält noch keine vollständige Ausführungsbestätigung."
      }
    ],
    "correct": 1,
    "rule": "Bedingung erfüllt, Folgeorder aktiv und Handel ausgeführt sind drei Zustände."
  },
  {
    "title": "Den Stop-Market-Hauptfall ausführen",
    "summary": "Der Verkauf braucht aktuelle Kaufangebote.",
    "paragraphs": [
      "Lea hält vier Aktien und hat einen Verkaufsstop bei 58,00 Euro. Ein neuer Trade bei 57,90 löst ihn aus. Danach kommt die Market-Verkaufsorder im Lernbuch an. Dort stehen zwei Kaufangebote zu 57,80 und zwei zu 57,50 Euro.",
      "Andere Aufträge und Buchänderungen sind für diesen Schritt ausgeschlossen. Zwei Aktien werden zu 57,80 verkauft und bringen 115,60 Euro. Zwei werden zu 57,50 verkauft und bringen 115,00 Euro. Der gesamte Erlös vor Gebühren beträgt 230,60 Euro.",
      "Die vier Aktien sind vollständig verkauft. Kein Stück wurde zum Stoppreis 58,00 ausgeführt. Das widerspricht dem Auftrag nicht: Seine Bedingung hat ausgelöst und anschließend eine Market-Order ohne eigene Preisgrenze aktiviert."
    ],
    "columns": [
      {
        "title": "Auslösung",
        "tone": "neutral",
        "points": [
          "Stop 58,00; neuer Trade 57,90 Euro.",
          "Aktiviert einen Verkauf über vier Stück."
        ]
      },
      {
        "title": "Ausführung",
        "tone": "positive",
        "points": [
          "2 × 57,80 + 2 × 57,50 Euro.",
          "230,60 Euro Erlös vor Gebühren."
        ]
      }
    ],
    "prompt": "Wie hoch ist der tatsächliche Erlös vor Gebühren?",
    "answers": [
      {
        "label": "232,00 Euro garantiert.",
        "explanation": "Das wäre viermal der Stoppreis; dieser Preis war keine Ausführungszusage."
      },
      {
        "label": "231,60 Euro automatisch.",
        "explanation": "Das wäre viermal der auslösende Trade, nicht die beschriebenen eigenen Ausführungen."
      },
      {
        "label": "230,60 Euro.",
        "explanation": "Richtig: Die vier Stück werden auf den zwei verfügbaren Kaufstufen verkauft."
      }
    ],
    "correct": 2,
    "rule": "Der Stop-Market-Erlös ergibt sich aus den tatsächlichen Kaufangeboten."
  },
  {
    "title": "Den Verkaufsdurchschnitt bestimmen",
    "summary": "Trigger, letzte Ausführung und Durchschnitt unterscheiden.",
    "paragraphs": [
      "Im Hauptfall wurden zwei Aktien zu 57,80 und zwei zu 57,50 Euro verkauft. Zusammen sind es 230,60 Euro für vier Stück. Der durchschnittliche Ausführungspreis ist 230,60 / 4 = 57,65 Euro.",
      "Der Stoppreis war 58,00 Euro. Der auslösende Trade lag bei 57,90. Die letzte eigene Ausführung lag bei 57,50. Der Durchschnitt beträgt 57,65. Jede dieser Zahlen beantwortet eine andere Frage.",
      "Gegenüber vier Verkäufen genau am Stoppreis beträgt der geringere Erlös 232,00 − 230,60 = 1,40 Euro. Diese Abweichung ist schon in den Ausführungspreisen enthalten. Sie wird nicht als zusätzliche Gebühr nochmals abgezogen."
    ],
    "columns": [
      {
        "title": "Vier verschiedene Preise",
        "tone": "neutral",
        "points": [
          "Stop: 58,00; Auslösetrade: 57,90 Euro.",
          "Letzte eigene Ausführung: 57,50 Euro."
        ]
      },
      {
        "title": "Gesamter Verkauf",
        "tone": "positive",
        "points": [
          "Durchschnitt: 57,65 Euro.",
          "1,40 Euro weniger als der Vergleich zum Stoppreis."
        ]
      }
    ],
    "prompt": "Wie hoch ist der durchschnittliche eigene Verkaufspreis?",
    "answers": [
      {
        "label": "57,65 Euro.",
        "explanation": "Richtig: 230,60 Euro geteilt durch vier verkaufte Stück."
      },
      {
        "label": "58,00 Euro.",
        "explanation": "Das ist die Auslöseschwelle, kein bestätigter Durchschnitt."
      },
      {
        "label": "57,90 Euro.",
        "explanation": "Das ist der auslösende Trade, keine eigene Durchschnittsausführung."
      }
    ],
    "correct": 0,
    "rule": "Stoppreis, Auslösetrade und eigener Durchschnitt sind verschiedene Angaben."
  },
  {
    "title": "Der geplante Verlust ist keine Obergrenze",
    "summary": "Den vollständigen Geldfluss rechnen.",
    "paragraphs": [
      "Lea hatte die vier Aktien im Hauptfall zu je 60,00 Euro gekauft. Der Kaufwert war 240,00 Euro. Zusätzlich zahlte sie eine gesamte Kaufgebühr von 0,80 Euro. Beim Stop-Market-Verkauf erhält sie 230,60 Euro vor einer gesamten Verkaufsgebühr von 0,80 Euro.",
      "Der Geldabfluss beim Kauf betrug 240,80 Euro. Der Geldzufluss nach dem Verkauf beträgt 229,80 Euro. Die Differenz ist 229,80 − 240,80 = minus 11,00 Euro. Weitere Kosten sind im Lernfall ausgeschlossen.",
      "Viermal die Differenz von Einstieg 60,00 und Stop 58,00 wären nur 8,00 Euro vor Gebühren. Das war ein Planwert, keine gesicherte Verlustgrenze. Ausführungsabweichung und beide Gebühren gehören zum tatsächlichen Ergebnis."
    ],
    "columns": [
      {
        "title": "Geldfluss",
        "tone": "neutral",
        "points": [
          "Kauf: 240,80 Euro einschließlich Kaufgebühr.",
          "Verkauf: 229,80 Euro nach Verkaufsgebühr."
        ]
      },
      {
        "title": "Ergebnis",
        "tone": "positive",
        "points": [
          "229,80 − 240,80 = minus 11,00 Euro.",
          "Planwert am Stop: minus 8,00 Euro vor Gebühren."
        ]
      }
    ],
    "prompt": "Wie lautet das tatsächliche Ergebnis mit beiden Gebühren?",
    "answers": [
      {
        "label": "Minus 12,40 Euro.",
        "explanation": "Dabei würde die schon in den Ausführungen enthaltene Abweichung doppelt gezählt."
      },
      {
        "label": "Minus 11,00 Euro.",
        "explanation": "Richtig: Nettoverkaufserlös minus gesamte Kaufbelastung."
      },
      {
        "label": "Garantiert minus 8,00 Euro.",
        "explanation": "Das ignoriert Ausführungsabweichung und Gebühren."
      }
    ],
    "correct": 1,
    "rule": "Ein gewöhnlicher Stop macht einen geplanten Verlust nicht zur garantierten Obergrenze."
  },
  {
    "title": "Ein Preissprung kann die Abweichung vergrößern",
    "summary": "Die Schwelle muss kein handelbares Angebot sein.",
    "paragraphs": [
      "Ein neuer unabhängiger Fall beginnt ebenfalls mit vier Aktien und Verkaufsstop 58,00 Euro. Der nächste bestätigte Trade springt von über 58,00 auf 55,00 Euro. Damit ist die Bedingung erfüllt, obwohl kein Trade exakt bei 58,00 stattfand.",
      "Bei Ankunft der Folgeorder sind zwei Kaufangebote zu 54,90 und zwei zu 54,50 Euro verfügbar. Der Erlös beträgt 109,80 + 109,00 = 218,80 Euro. Gegenüber vier Verkäufen zum Stoppreis 58,00 sind das 13,20 Euro weniger vor Gebühren.",
      "Das nennen wir hier einen Preissprung: Zwischen den genannten Trades liegt kein eigener Zwischenhandel. Der Fall sagt nicht, dass jede echte Anzeige alle Trades vollständig enthält. Sein Zweck ist die Trennung zwischen erfüllter Schwelle und verfügbaren Ausführungspreisen."
    ],
    "columns": [
      {
        "title": "Auslösung",
        "tone": "neutral",
        "points": [
          "Nächster Trade: 55,00 Euro.",
          "Verkaufsstop 58,00 wird ausgelöst."
        ]
      },
      {
        "title": "Verkauf",
        "tone": "positive",
        "points": [
          "2 × 54,90 + 2 × 54,50 = 218,80 Euro.",
          "13,20 Euro weniger als die Stoppreis-Referenz."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Verkaufserlös im Sprungfall vor Gebühren?",
    "answers": [
      {
        "label": "232,00 Euro.",
        "explanation": "Der Stoppreis schafft kein verfügbares Kaufangebot bei 58,00."
      },
      {
        "label": "220,00 Euro zwingend.",
        "explanation": "Der auslösende Trade von 55,00 ist nicht der Preis aller eigenen Ausführungen."
      },
      {
        "label": "218,80 Euro.",
        "explanation": "Richtig: Die beiden aktuellen Kaufstufen liefern diesen Betrag."
      }
    ],
    "correct": 2,
    "rule": "Eine übersprungene Schwelle kann auslösen, ohne zu ihr zu handeln."
  },
  {
    "title": "Stop-Limit enthält zwei Preisangaben",
    "summary": "Auslösung und Ausführungsgrenze getrennt setzen.",
    "paragraphs": [
      "In einer Alternative hält Lea vier Aktien. Ihr Verkaufs-Stop-Limit hat Stoppreis 58,00 und Limitpreis 57,80 Euro. Ein neuer Trade bei 57,90 löst die Bedingung aus. Danach ist ein Limit-Verkauf über vier Stück aktiv.",
      "Die Verkaufsgrenze lautet mindestens 57,80 Euro je Aktie. Der Stoppreis ist weiterhin nur die Auslöseschwelle. Die zwei Preisangaben müssen nicht gleich sein. In diesem Beispiel schützt das niedrigere Verkaufslimit nach der Auslösung die akzeptierte Untergrenze.",
      "Der Auftrag garantiert weder einen Verkauf noch einen begrenzten Verlust des weiter gehaltenen Bestands. Wenn kein Käufer mindestens 57,80 anbietet, kann die aktive Limitorder warten. Die Preisgrenze gilt für die Ausführung, nicht für den zukünftigen Wert der übrigen Aktien."
    ],
    "columns": [
      {
        "title": "Stop",
        "tone": "neutral",
        "points": [
          "58,00 Euro als Schwelle.",
          "57,90-Euro-Trade löst aus."
        ]
      },
      {
        "title": "Limit nach Auslösung",
        "tone": "positive",
        "points": [
          "Verkauf mindestens 57,80 Euro.",
          "Ein Geschäft kann ausbleiben."
        ]
      }
    ],
    "prompt": "Welche Grenze gilt für den Verkauf nach Auslösung?",
    "answers": [
      {
        "label": "Mindestens 57,80 Euro je Aktie.",
        "explanation": "Richtig: Das ist das separate Verkaufslimit."
      },
      {
        "label": "Garantiert genau 58,00 Euro.",
        "explanation": "58,00 ist die Auslöseschwelle, keine feste Erlöszusage."
      },
      {
        "label": "Jeder beliebige Preis, weil Stop-Limit immer Market wird.",
        "explanation": "Diese Variante aktiviert ausdrücklich eine Limitorder."
      }
    ],
    "correct": 0,
    "rule": "Stop-Limit heißt erst auslösen und danach die eigene Preisgrenze beachten."
  },
  {
    "title": "Stop-Limit kann nur teilweise verkaufen",
    "summary": "Ein Restbestand bleibt einem weiteren Preisrisiko ausgesetzt.",
    "paragraphs": [
      "Der alternative Stop-Limit-Fall startet neu: vier gehaltene Aktien, Stop 58,00, Verkaufslimit 57,80 Euro. Nach dem Auslösetrade bei 57,90 liegen zwei Kaufangebote zu 57,80 und zwei zu 57,50 Euro bereit.",
      "Zwei Aktien werden zu 57,80 verkauft und bringen 115,60 Euro vor Gebühren. Die zwei niedrigeren Gebote dürfen nicht genutzt werden. Unsere Übungsregel lässt den offenen Verkaufsrest von zwei Stück weiter als Limit bei 57,80 warten.",
      "Lea hält deshalb noch zwei Aktien. Die Auslösung hat den Bestand nicht vollständig geschlossen. Ihr offener Verkaufsrest und ihr verbleibender Aktienbestand haben hier dieselbe Menge, sind aber verschiedene Dinge: Anweisung und gehaltenes Produkt."
    ],
    "columns": [
      {
        "title": "Ausgeführt",
        "tone": "neutral",
        "points": [
          "Zwei Stück zu 57,80 Euro.",
          "115,60 Euro Teilverkaufserlös."
        ]
      },
      {
        "title": "Noch vorhanden",
        "tone": "positive",
        "points": [
          "Zwei Aktien im Bestand.",
          "Zwei Stück offener Limit-Verkaufsrest."
        ]
      }
    ],
    "prompt": "Wie viele Aktien besitzt Lea nach dieser Teilausführung noch?",
    "answers": [
      {
        "label": "Vier, weil Limitaufträge nicht teilweise handeln dürfen.",
        "explanation": "Die Übungsregel erlaubt ausdrücklich Teilausführungen."
      },
      {
        "label": "Zwei Aktien.",
        "explanation": "Richtig: Nur zwei der gehaltenen vier wurden innerhalb des Limits verkauft."
      },
      {
        "label": "Keine, weil der Stop ausgelöst wurde.",
        "explanation": "Auslösung bedeutet keine vollständige Schließung."
      }
    ],
    "correct": 1,
    "rule": "Ein ausgelöstes Stop-Limit kann einen offenen Auftrag und Restbestand hinterlassen."
  },
  {
    "title": "Ein Stop-Limit kann vollständig ungefüllt bleiben",
    "summary": "Die Ausführungsgrenze kann einen Verkauf verhindern.",
    "paragraphs": [
      "Ein unabhängiger Sprungfall verwendet Stop 58,00 und Verkaufslimit 57,80 Euro für vier Aktien. Der neue Trade springt auf 55,00. Die Bedingung löst aus. Sämtliche Kaufangebote liegen danach unter 57,80 Euro.",
      "Keine der vier Aktien darf zu diesen Geboten verkauft werden. Nach unserer Restregel wartet der aktive Limit-Verkauf weiter bei 57,80. Lea hält alle vier Aktien. Eine Meldung „ausgelöst“ passt trotzdem zu diesem Zustand.",
      "Die Grenze hat unerwünschte niedrige Ausführungspreise verhindert. Sie hat jedoch keinen Verkauf und keinen stabilen Bestandswert gesichert. Genau deshalb braucht ein Bericht sowohl Ausführungsmenge als auch offenen Rest und verbleibende Position."
    ],
    "columns": [
      {
        "title": "Bedingung erfüllt",
        "tone": "neutral",
        "points": [
          "Neuer Trade 55,00 unter Stop 58,00 Euro.",
          "Die Limit-Folgeorder ist aktiv."
        ]
      },
      {
        "title": "Keine zulässige Gegenseite",
        "tone": "positive",
        "points": [
          "Alle Gebote unter 57,80 Euro.",
          "Null verkauft, vier weiterhin gehalten."
        ]
      }
    ],
    "prompt": "Welche Aussage passt nach dem Sprung?",
    "answers": [
      {
        "label": "Ausgelöst bedeutet vier Aktien sicher verkauft.",
        "explanation": "Die vorhandenen Käufer liegen außerhalb der Grenze."
      },
      {
        "label": "Nicht ausgelöst, weil kein Trade exakt bei 58,00 war.",
        "explanation": "Die Verkaufsbedingung gilt auch unterhalb der Schwelle."
      },
      {
        "label": "Ausgelöst, null verkauft, vier Aktien noch im Bestand.",
        "explanation": "Richtig: Der Trigger ist erfüllt, aber das Verkaufslimit verhindert die angebotenen Preise."
      }
    ],
    "correct": 2,
    "rule": "Stop-Limit kann den Preis begrenzen und zugleich vollständig ungefüllt bleiben."
  },
  {
    "title": "Nach Auslösung gibt es kein automatisches Zurückwarten",
    "summary": "Die aktive Limitorder prüft ihre eigene Grenze.",
    "paragraphs": [
      "Wir setzen den Teilverkauf aus dem Stop-Limit-Fall fort. Lea hat zwei Aktien verkauft und zwei noch offen bei Verkaufslimit 57,80 Euro. Die Bedingung wurde bereits ausgelöst. Der nächste Trade liegt wieder bei 58,10 Euro.",
      "Im Lernmodell setzt diese Erholung die Order nicht zurück in den wartenden Stopzustand. Der aktive Verkaufsrest bleibt ein Limitauftrag. Kommen zwei passende Käufer zu 57,90 hinzu, werden die zwei Stück dort verkauft.",
      "Der zweite Teil bringt 115,80 Euro. Mit dem ersten Teil von 115,60 ergibt das 231,40 Euro vor Gebühren. Die spätere Erholung ist eine ausdrücklich beschriebene Fortsetzung, keine Zusage, dass Preise nach einem Stop immer zurückkehren."
    ],
    "columns": [
      {
        "title": "Aktiver Rest",
        "tone": "neutral",
        "points": [
          "Zwei Stück Limitverkauf bei mindestens 57,80 Euro.",
          "Der Stop wurde bereits einmal ausgelöst."
        ]
      },
      {
        "title": "Spätere Ausführung",
        "tone": "positive",
        "points": [
          "Zwei Käufer zu 57,90 Euro.",
          "Gesamterlös beider Teile: 231,40 Euro."
        ]
      }
    ],
    "prompt": "Muss der aktive Rest nach der Erholung erst erneut ausgelöst werden?",
    "answers": [
      {
        "label": "Nein, er bleibt im Lernmodell eine aktive Limitorder.",
        "explanation": "Richtig: Die ursprüngliche Bedingung wurde bereits erfüllt."
      },
      {
        "label": "Ja, jede Kursänderung macht die Auslösung rückgängig.",
        "explanation": "Diese Rücksetzung gehört nicht zur festgelegten Regel."
      },
      {
        "label": "Nein, weil jeder aktive Rest sofort Market wird.",
        "explanation": "Der offene Rest bleibt ausdrücklich ein Limitauftrag."
      }
    ],
    "correct": 0,
    "rule": "Eine bereits aktivierte Limit-Folgeorder braucht hier keinen zweiten Stoptrigger."
  },
  {
    "title": "Auch beim Kaufstop zählt die spätere Verkaufsmenge",
    "summary": "Ein Kauf kann mehrere teurere Stufen brauchen.",
    "paragraphs": [
      "Ein getrennter Kauf-Stop-Market-Fall beginnt bei einem aktuellen Trade von 60,00 Euro. Lea beauftragt drei Aktien mit Kaufstop 61,00. Ein neuer Trade bei 61,20 löst aus. Bei Ankunft stehen eine Aktie zu 61,30 und zwei zu 61,50 zum Verkauf.",
      "Der Kauf kostet 61,30 + 123,00 = 184,30 Euro vor Gebühren. Der Durchschnitt beträgt 184,30 / 3, ungefähr 61,4333 Euro. Gerundet sind es 61,43 Euro. Zum Stoppreis von 61,00 wurden keine eigenen Stücke gekauft.",
      "Die Auslösung nach oben sagt also nicht, zu welchem Preis der spätere Kauf möglich ist. Die verfügbare Verkaufsmenge und die Regeln der Folgeorder zählen weiterhin. Berechne den Gesamtwert aus den tatsächlichen Teilpreisen, nicht aus einem gerundeten Durchschnitt."
    ],
    "columns": [
      {
        "title": "Trigger",
        "tone": "neutral",
        "points": [
          "Kaufstop 61,00; neuer Trade 61,20 Euro.",
          "Drei Aktien als Market-Kauf aktiv."
        ]
      },
      {
        "title": "Kauf",
        "tone": "positive",
        "points": [
          "1 × 61,30 + 2 × 61,50 = 184,30 Euro.",
          "Durchschnitt gerundet 61,43 Euro."
        ]
      }
    ],
    "prompt": "Wie viel kostet der Kauf vor Gebühren?",
    "answers": [
      {
        "label": "184,29 Euro.",
        "explanation": "Das wäre Rückrechnen aus dem gerundeten Durchschnitt; die Einzelwerte sind genauer."
      },
      {
        "label": "184,30 Euro.",
        "explanation": "Richtig: Eine Aktie auf der ersten und zwei auf der zweiten Verkaufsstufe."
      },
      {
        "label": "183,00 Euro garantiert.",
        "explanation": "Das wäre dreimal der Stoppreis, nicht die tatsächliche Ausführung."
      }
    ],
    "correct": 1,
    "rule": "Beim Kaufstop bestimmt die spätere Verkaufsseite den tatsächlichen Kaufwert."
  },
  {
    "title": "Das Kauf-Stop-Limit begrenzt nach oben",
    "summary": "Die Gegenseite muss unter der Kaufgrenze liegen.",
    "paragraphs": [
      "Eine Alternative verwendet ebenfalls drei Kaufstücke und Stoppreis 61,00 Euro. Lea ergänzt aber ein Kauflimit von 61,40. Nach Auslösung durch den Trade bei 61,20 stehen eine Aktie zu 61,30 und zwei zu 61,50 bereit.",
      "Eine Aktie zu 61,30 liegt innerhalb der Grenze und wird gekauft. Die zwei Stück zu 61,50 sind zu teuer. Unsere Restregel lässt die zwei offenen Kaufstücke bei 61,40 warten. Lea besitzt danach erst eine Aktie.",
      "Vergleiche das mit dem Stop-Market-Kauf nur als getrennten Alternativfall. Die eine Variante hat vollständig gekauft und einen höheren Durchschnitt erhalten. Die andere begrenzt jeden Kaufpreis, lässt dafür aber zwei Wunschstücke ungefüllt."
    ],
    "columns": [
      {
        "title": "Kaufgrenze",
        "tone": "neutral",
        "points": [
          "Stop 61,00; Limit höchstens 61,40 Euro.",
          "Eine Aktie zu 61,30 zulässig."
        ]
      },
      {
        "title": "Rest",
        "tone": "positive",
        "points": [
          "Zwei Angebote zu 61,50 zu teuer.",
          "Eine gekauft, zwei Kaufstücke offen."
        ]
      }
    ],
    "prompt": "Wie viele Aktien kauft Lea sofort in dieser Alternative?",
    "answers": [
      {
        "label": "Drei Aktien.",
        "explanation": "Die zwei weiteren Stücke liegen über der Kaufgrenze."
      },
      {
        "label": "Keine, weil Stop und Limit verschieden sind.",
        "explanation": "Verschiedene Schwellen sind im ausdrücklich genannten Lernfall erlaubt."
      },
      {
        "label": "Eine Aktie.",
        "explanation": "Richtig: Nur das Angebot bei 61,30 liegt unter ihrem Kauflimit."
      }
    ],
    "correct": 2,
    "rule": "Ein Kauf-Stop-Limit akzeptiert nach Auslösung nur Preise bis zur Kaufgrenze."
  },
  {
    "title": "Eine Quote ist nicht automatisch ein Triggertrade",
    "summary": "Die Art des Preisereignisses lesen.",
    "paragraphs": [
      "Leas Hauptregel beobachtet bestätigte Trades. Ihr Verkaufsstop liegt bei 58,00 Euro. Nach Annahme meldet die Quelle einen Bid von 57,90, aber den letzten neuen Trade bei 58,10. Ein Bid ist ein Kaufangebot, kein abgeschlossener Handel.",
      "Nach unserer Trade-Regel löst das Gebot allein nicht aus. Ein ausdrücklich anders definierter bedingter Auftrag könnte stattdessen eine Quote überwachen. Quote bedeutet hier eine Angebotsanzeige. Seine Regeln und möglicherweise seine Bezeichnung müssten getrennt geprüft werden.",
      "Welche Preisart einen realen Auftrag aktiviert, ergibt sich aus Produkt- und Anbieterbedingungen. Auch die Namen solcher Aufträge sind nicht überall identisch geregelt. Eine Anzeige unterhalb der Schwelle beweist daher ohne Preisart und Regel noch keine fällige Auslösung."
    ],
    "columns": [
      {
        "title": "Hauptregel",
        "tone": "neutral",
        "points": [
          "Neuer Trade: 58,10 Euro.",
          "Bid: 57,90 Euro ist nur ein Angebot."
        ]
      },
      {
        "title": "Ergebnis im Modell",
        "tone": "positive",
        "points": [
          "Trade liegt über Verkaufsstop 58,00.",
          "Noch keine Auslösung nach dieser Regel."
        ]
      }
    ],
    "prompt": "Löst der Bid 57,90 den Stop in unserem Hauptmodell allein aus?",
    "answers": [
      {
        "label": "Nein, die Regel benötigt einen passenden bestätigten Trade.",
        "explanation": "Richtig: Der genannte Trade liegt mit 58,10 noch oberhalb der Schwelle."
      },
      {
        "label": "Ja, jede Zahl unter 58,00 ist dieselbe Preisart.",
        "explanation": "Angebot und ausgeführter Handel sind verschiedene Ereignisse."
      },
      {
        "label": "Ja, jeder Anbieter benutzt immer den Bid.",
        "explanation": "Die tatsächliche Auslösequelle muss einzeln geprüft werden."
      }
    ],
    "correct": 0,
    "rule": "Auslöseschwelle und beobachtete Preisart gehören zusammen."
  },
  {
    "title": "Ein Chart aus anderer Quelle reicht nicht",
    "summary": "Eigene Überwachung an Quelle und Zeit binden.",
    "paragraphs": [
      "Ein Chart zeigt einen Trade bei 57,90 Euro, aber von einem anderen Handelsplatz als Leas überwachte Quelle. Ihr Verkaufsstop bei 58,00 ist in unserem Lernfall ausschließlich an die bestätigten Trades der festgelegten Quelle gebunden.",
      "Der fremde Trade beweist nach dieser Regel keine Auslösung. Gleiches gilt für einen Trade, der vor Annahme der Anweisung stattfand. Ein Chart kann historische Daten enthalten oder auf anderen Preisen beruhen.",
      "Lea prüft deshalb Zeitpunkt, Preisart, Produkt und Handelsquelle. Fehlt eine dieser Angaben, bleibt die Ursache einer ausbleibenden Meldung offen. Sie bezeichnet nicht automatisch jeden Unterschied zwischen Chart und Order als Fehler."
    ],
    "columns": [
      {
        "title": "Nicht genügend belegt",
        "tone": "neutral",
        "points": [
          "57,90 Euro aus anderer Handelsquelle.",
          "Oder ein Trade vor Annahme des Stops."
        ]
      },
      {
        "title": "Zu prüfen",
        "tone": "positive",
        "points": [
          "Eigene aktive Zeit und Triggerquelle.",
          "Systemmeldung und Auftragskennung."
        ]
      }
    ],
    "prompt": "Beweist ein fremder Charttrade die Auslösung nach unserer Regel?",
    "answers": [
      {
        "label": "Ja, historische Preise lösen neue Orders rückwirkend aus.",
        "explanation": "Die genannte Regel wertet neue Ereignisse nach Annahme aus."
      },
      {
        "label": "Nein, Quelle und aktive Zeit müssen zur Anweisung passen.",
        "explanation": "Richtig: Der Hauptfall beobachtet ausdrücklich eine bestimmte Quelle nach Annahme."
      },
      {
        "label": "Ja, jede Aktie mit ähnlichem Namen zählt.",
        "explanation": "Produkt und Quelle müssen eindeutig passen."
      }
    ],
    "correct": 1,
    "rule": "Ein Chartpreis wird erst mit passender Quelle und Zeit zum Auslösebeleg."
  },
  {
    "title": "Eine kurze Bewegung kann dauerhaft auslösen",
    "summary": "Die Bedingung kennt kein späteres Tagesende.",
    "paragraphs": [
      "Ein separater Verkaufsstop liegt bei 58,00 Euro. Nach Annahme erreicht ein bestätigter Trade kurz 57,95. Die Bedingung löst aus. Später liegt der Trade wieder bei 60,00 Euro.",
      "Die spätere Erholung macht eine bereits erfolgte Ausführung nicht rückgängig. Auch eine aktivierte Folgeorder wird im Lernmodell nicht automatisch wieder zur wartenden Bedingung. Der Trigger reagiert auf das genannte Ereignis, nicht erst auf den Schlusskurs.",
      "Ob du zusätzlich eine bestimmte Schlusskurs- oder Zeitbedingung verwenden darfst, ist eine andere Anweisung mit eigenen Regeln. Ein gewöhnlicher Stop in unserem Modell enthält sie nicht. Ein nachträglich schöner Chart ändert den bereits bestätigten Handelsverlauf nicht."
    ],
    "columns": [
      {
        "title": "Kurzer Ausschlag",
        "tone": "neutral",
        "points": [
          "Neuer Trade bei 57,95 unter Stop 58,00.",
          "Auslösung findet nach der Regel statt."
        ]
      },
      {
        "title": "Spätere Erholung",
        "tone": "positive",
        "points": [
          "Neuer Trade wieder bei 60,00 Euro.",
          "Vorheriger Handel wird nicht rückgängig."
        ]
      }
    ],
    "prompt": "Verhindert die spätere Erholung die frühere Auslösung?",
    "answers": [
      {
        "label": "Ja, Stops prüfen immer nur den Schlusskurs.",
        "explanation": "Unser Modell wertet ausdrücklich neue Trades während der aktiven Phase aus."
      },
      {
        "label": "Ja, jede Erholung macht bestätigte Verkäufe rückgängig.",
        "explanation": "Ausgeführte Geschäfte werden dadurch nicht aufgehoben."
      },
      {
        "label": "Nein, die Schwellenbedingung war bereits erfüllt.",
        "explanation": "Richtig: Eine spätere Bewegung ändert das damalige Ereignis nicht."
      }
    ],
    "correct": 2,
    "rule": "Ein späterer Preis ändert keine bereits erfüllte Auslösebedingung."
  },
  {
    "title": "Überwachungsort und Verbindung prüfen",
    "summary": "Die Technik gehört zu den Auftragsbedingungen.",
    "paragraphs": [
      "Eine bedingte Anweisung muss von einem System überwacht werden. Sie kann nach den jeweiligen Bedingungen beim Handelsplatz, beim Anbieter oder in deiner laufenden Software gehalten werden. Aus dem Namen Stop allein erfährst du diesen Ort nicht.",
      "Lea prüft, welches System die Annahme bestätigt und wo die Bedingung aktiv bleibt. Sie klärt auch, was bei Verbindungsabbruch oder geschlossener App passiert. Ohne diese Angaben verspricht sie sich weder sichere Weiterüberwachung noch automatische Löschung.",
      "Für unsere Rechenfälle nehmen wir ausdrücklich an, dass die genannte Überwachung funktioniert. Diese Annahme ersetzt keine Prüfung einer echten Plattform. Auch Ablehnung oder Übertragungsprobleme einer Folgeorder können andere Statusmeldungen erfordern als eine Ausführung."
    ],
    "columns": [
      {
        "title": "Zu klären",
        "tone": "neutral",
        "points": [
          "Wo liegt die Bedingung?",
          "Welche Annahme wurde bestätigt?"
        ]
      },
      {
        "title": "Bei Problemen",
        "tone": "positive",
        "points": [
          "Verbindung und aktiven Status prüfen.",
          "Keine Funktion allein aus dem Auftragsnamen ableiten."
        ]
      }
    ],
    "prompt": "Was verrät der Name Stop allein über einen App-Abbruch?",
    "answers": [
      {
        "label": "Er garantiert weder Weiterüberwachung noch Löschung.",
        "explanation": "Richtig: Das Verhalten hängt vom überwachten System und dessen Regeln ab."
      },
      {
        "label": "Dass jede geschlossene App alle Stops löscht.",
        "explanation": "Diese pauschale Regel folgt nicht aus dem Namen."
      },
      {
        "label": "Dass jeder Stop überall sicher weiterläuft.",
        "explanation": "Der Überwachungsort und seine Bedingungen müssen bekannt sein."
      }
    ],
    "correct": 0,
    "rule": "Prüfe den Überwachungsort und das bestätigte Verhalten bei Verbindungsproblemen."
  },
  {
    "title": "Gültigkeit und Handelsphase beachten",
    "summary": "Nicht jede sichtbare Preisänderung wird überwacht.",
    "paragraphs": [
      "Ein anderer Lernfall überwacht Stops ausschließlich von 9 bis 17 Uhr Marktzeit. Außerhalb dieses Fensters nimmt das System keine neuen Triggerereignisse für diese Anweisung an. Die Order läuft in diesem Fall um 17 Uhr vollständig ab.",
      "Um 17:05 erscheint ein Trade unter der früheren Stopgrenze. Die Anweisung ist aber bereits als abgelaufen bestätigt. Sie löst dadurch nicht mehr aus. Dieses Zeitfenster ist eine erfundene Übungsregel und kein allgemeiner Börsenkalender.",
      "Echte Bedingungen können andere Handelsphasen, Laufzeiten und Abläufe bei Unterbrechungen vorsehen. Eine erreichbare App oder ein laufender Chart ersetzt diese Regeln nicht. Prüfe Überwachung, Auftragsgültigkeit und mögliche Ausführungsphase getrennt."
    ],
    "columns": [
      {
        "title": "Eigene Zeitregel",
        "tone": "neutral",
        "points": [
          "Überwachung 9 bis 17 Uhr Marktzeit.",
          "Ablauf um 17 Uhr bestätigt."
        ]
      },
      {
        "title": "Danach",
        "tone": "positive",
        "points": [
          "Trade um 17:05 liegt außerhalb.",
          "Die abgelaufene Anweisung löst nicht mehr aus."
        ]
      }
    ],
    "prompt": "Löst der Trade um 17:05 die bereits abgelaufene Anweisung aus?",
    "answers": [
      {
        "label": "Ja, weil 17 Uhr überall nur eine Empfehlung ist.",
        "explanation": "Im genannten Lernfall ist der Ablauf verbindlich festgelegt."
      },
      {
        "label": "Nein, sie ist nach der Übungsregel nicht mehr aktiv.",
        "explanation": "Richtig: Der bestätigte Ablauf liegt vor dem neuen Trade."
      },
      {
        "label": "Ja, weil jeder Chartpreis ewig zählt.",
        "explanation": "Gültigkeit und aktive Überwachung sind begrenzt."
      }
    ],
    "correct": 1,
    "rule": "Ein Stop braucht eine gültige Anweisung und ein zulässiges Überwachungsereignis."
  },
  {
    "title": "Nach manueller Schließung den offenen Auftrag prüfen",
    "summary": "Ein alter Auftrag passt nicht automatisch zum neuen Bestand.",
    "paragraphs": [
      "Lea besitzt vier Aktien und hat einen noch wartenden Verkaufsstop über vier Stück. In einem getrennten Fall verkauft sie die vier Aktien mit einer anderen Order vollständig. Der Aktienbestand ist danach null.",
      "Ob die alte Stop-Anweisung damit ebenfalls gelöscht wird, hängt von einer ausdrücklich eingerichteten Verknüpfung und den Systemregeln ab. Ohne Bestätigung darf Lea das nicht annehmen. Sie prüft den aktiven Auftrag und fragt nötigenfalls eine Stornierung an.",
      "Löst ein unpassender alter Verkauf später aus, könnte das System ihn je nach Konto ablehnen oder eine andere Positionswirkung zulassen. Wir behaupten für diesen Fall keine bestimmte Kontoregel. Verbundene Orders werden in einem späteren Kapitel genauer erklärt."
    ],
    "columns": [
      {
        "title": "Bestand",
        "tone": "neutral",
        "points": [
          "Vier Aktien manuell vollständig verkauft.",
          "Jetzt null Aktien gehalten."
        ]
      },
      {
        "title": "Alte Bedingung",
        "tone": "positive",
        "points": [
          "Löschung nicht automatisch annehmen.",
          "Aktiven Status und passende Menge kontrollieren."
        ]
      }
    ],
    "prompt": "Was prüft Lea nach der manuellen Schließung zusätzlich?",
    "answers": [
      {
        "label": "Nichts, jede andere Order löscht alle Stops.",
        "explanation": "Eine solche Verknüpfung muss ausdrücklich bestehen und bestätigt sein."
      },
      {
        "label": "Dass sie weiterhin vier Aktien besitzt.",
        "explanation": "Die bestätigte manuelle Ausführung hat den Bestand auf null reduziert."
      },
      {
        "label": "Ob der alte Stop noch aktiv ist und zu ihrem Bestand passt.",
        "explanation": "Richtig: Eine andere Ausführung belegt keine automatische Löschung ohne Verknüpfungsregel."
      }
    ],
    "correct": 2,
    "rule": "Nach einer Positionsänderung prüfst du die noch aktiven bedingten Aufträge."
  },
  {
    "title": "Den Stopfall mit einem prüfbaren Bericht abschließen",
    "summary": "Bedingung, Folgeorder, Ausführungen und Rest verbinden.",
    "paragraphs": [
      "Der Stop-Market-Hauptbericht beginnt mit vier Aktien zu 60,00 Euro. Die angenommene Verkaufsbedingung beobachtet neue Trades derselben Quelle und löst unter oder bei 58,00 aus. Der Trade bei 57,90 erfüllt sie; die Market-Folgeorder verkauft zwei zu 57,80 und zwei zu 57,50.",
      "Der Erlös beträgt 230,60 Euro vor 0,80 Euro Verkaufsgebühr. Zusammen mit Kaufwert 240,00 und Kaufgebühr 0,80 ergibt sich minus 11,00 Euro. Alle vier Aktien sind verkauft. Der Ausführungsbericht bestätigt null Rest und keinen verbleibenden Aktienbestand.",
      "Die Stop-Limit-Alternative ist ein anderer Auftrag: Limit 57,80, zunächst nur zwei verkauft, zwei weiter gehalten und offen. Ein vollständiger Bericht verwechselt diese Alternative nicht mit dem Hauptfall. Er nennt auch fehlende Statusbelege und technische Annahmen statt eine sichere Schließung aus dem Wort ausgelöst abzuleiten."
    ],
    "columns": [
      {
        "title": "Stop-Market-Hauptfall",
        "tone": "neutral",
        "points": [
          "Vier tatsächlich verkauft, null Restbestand.",
          "Nettoergebnis: minus 11,00 Euro."
        ]
      },
      {
        "title": "Separate Stop-Limit-Alternative",
        "tone": "positive",
        "points": [
          "Zunächst zwei verkauft und zwei weiter gehalten.",
          "Grenze kann eine vollständige Schließung verhindern."
        ]
      }
    ],
    "prompt": "Welcher Satz beschreibt den Stop-Market-Hauptfall korrekt?",
    "answers": [
      {
        "label": "Vier verkauft, null Restbestand, minus 11,00 Euro mit Gebühren.",
        "explanation": "Richtig: Der Bericht verbindet tatsächlich ausgeführte Mengen mit beiden Gebühren."
      },
      {
        "label": "Vier sicher zu 58,00 verkauft.",
        "explanation": "Der Stoppreis war nur die Auslöseschwelle."
      },
      {
        "label": "Nur zwei verkauft, weil jedes Stop-Market ein Limit hat.",
        "explanation": "Die Teilausführung gehört zur getrennten Stop-Limit-Alternative."
      }
    ],
    "correct": 0,
    "rule": "Berichte die Auslösebedingung, die aktive Folgeorder und den bestätigten Handelsabschluss."
  }
];
export const ordersChapterFourLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-04.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 4 · Stop- und Stop-Limit-Orders',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 4', title: draft.title,
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
