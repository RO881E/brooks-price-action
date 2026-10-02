import type { Lesson } from '../../types';

// Eigenständige Fälle zu Preisbewegungen; Zahlen, Wissensstände und Abläufe gelten nur wie im Lernfall angegeben.
const drafts = [
  {
    "title": "Welche Preiszahl hat sich verändert?",
    "summary": "Letzter Trade, Angebote und Mittelwert sind verschiedene Daten.",
    "paragraphs": [
      "Du liest: Der Preis ist gestiegen. Bevor du den Grund suchst, prüfe die Preisart. Gemeint sein kann ein letzter Handel, ein Kaufangebot, ein Verkaufsangebot oder ein berechneter Mittelwert. Diese Zahlen können sich zu verschiedenen Zeiten verändern.",
      "Ein letzter Trade liegt bei 100. Später steigen Bid und Ask von 99 und 101 auf 101 und 103. Der neue Mittelwert ist 102. Wir legen fest, dass noch kein neuer Handel stattgefunden hat. Deshalb bleibt der letzte Trade bei 100, obwohl die Angebote höher liegen.",
      "Dieses Kapitel verbindet die bisherigen Grundlagen mit Preisbewegungen. Wir verwenden eigene vereinfachte Fälle. Preise gelten in Euro, sofern nichts anderes angegeben ist. Gebühren fehlen in den Rechnungen. Regeln und bekannte Ereignisse werden genannt. Fehlende Motive bleiben offen."
    ],
    "columns": [
      {
        "title": "Angebote im Fall",
        "tone": "neutral",
        "points": [
          "Bid/Ask vorher: 99 / 101.",
          "Bid/Ask nachher: 101 / 103; Mitte 102."
        ]
      },
      {
        "title": "Letzter Handel",
        "tone": "positive",
        "points": [
          "Letzter Trade: weiterhin 100.",
          "Noch kein neuer Trade im beschriebenen Schritt."
        ]
      }
    ],
    "prompt": "Muss der letzte Trade bereits bei 102 liegen, weil die neue Mitte 102 beträgt?",
    "answers": [
      {
        "label": "Nein, im Fall gab es noch keinen neuen Trade.",
        "explanation": "Richtig: Die berechnete Mitte ist nicht der letzte Ausführungspreis."
      },
      {
        "label": "Ja, jeder Mittelwert ist automatisch ein Trade.",
        "explanation": "Ein berechneter Wert erzeugt kein Geschäft."
      },
      {
        "label": "Ja, ein höherer Bid löscht alle vergangenen Trades.",
        "explanation": "Neue Angebote verändern nicht die Historie ausgeführter Geschäfte."
      }
    ],
    "correct": 0,
    "rule": "Erst die Preisart klären, dann die Veränderung erklären."
  },
  {
    "title": "Ein Kauf kann höhere Verkaufsstufen erreichen",
    "summary": "Der Ablauf erklärt den höheren letzten Teilpreis.",
    "paragraphs": [
      "Zwei Verkaufseinheiten stehen zu 100 bereit, drei weitere zu 101. Ein Käufer will vier sofort kaufen und erlaubt beide Preise. Wir nehmen unveränderte Angebote an. Nach unseren Regeln wird zuerst das günstigere Angebot genutzt.",
      "Zwei Einheiten kosten zusammen 200. Zwei weitere zu 101 kosten 202. Der Preisbetrag ist 402 Euro. Der Durchschnitt beträgt 402 / 4 = 100,50. Die letzte Ausführung liegt bei 101. Dort bleibt eine der angebotenen Einheiten übrig.",
      "Der höhere letzte Teilpreis entsteht hier, weil die günstige Menge nicht für vier reicht. Dafür wurden nicht mehr Einheiten gekauft als verkauft. Der Ablauf sagt auch noch nicht, warum der Käufer handeln wollte. Die beobachtete Wirkung und sein wirtschaftlicher Grund sind verschiedene Fragen."
    ],
    "columns": [
      {
        "title": "Bekannte Verkaufsangebote",
        "tone": "neutral",
        "points": [
          "100: 2 Einheiten; 101: 3 Einheiten.",
          "Käufer akzeptiert insgesamt 4."
        ]
      },
      {
        "title": "Ergebnis vor Kosten",
        "tone": "positive",
        "points": [
          "2 × 100 + 2 × 101 = 402 Euro.",
          "Durchschnitt 100,50; letzter Teilpreis 101."
        ]
      }
    ],
    "prompt": "Warum liegt der letzte Teilpreis hier bei 101?",
    "answers": [
      {
        "label": "Weil der Käufer dadurch die Zukunft sicher kennt.",
        "explanation": "Der Ablauf belegt keine sichere Zukunftskenntnis."
      },
      {
        "label": "Weil bei 100 nur zwei der vier gewünschten Einheiten verfügbar waren.",
        "explanation": "Richtig: Der Rest nutzt nach der festgelegten Regel die nächste Stufe."
      },
      {
        "label": "Weil vier gekauft, aber nur zwei verkauft wurden.",
        "explanation": "Alle vier gekauften Einheiten wurden auch verkauft."
      }
    ],
    "correct": 1,
    "rule": "Höhere Ausführungspreise aus den bekannten Mengen und Regeln erklären."
  },
  {
    "title": "Ein Verkauf kann tiefere Kaufgebote erreichen",
    "summary": "Der niedrigere Teilpreis braucht keine ungleichen Ausführungen.",
    "paragraphs": [
      "Auf der Kaufseite stehen zwei Einheiten zu 99 und drei zu 98. Ein Verkäufer will vier sofort verkaufen und erlaubt beide Preise. Die Angebote bleiben im Beispiel unverändert. Zuerst wird das höhere Gebot genutzt.",
      "Zwei Verkäufe zu 99 bringen 198 Euro. Zwei zu 98 bringen 196. Zusammen sind es 394 Euro. Der Durchschnitt beträgt 394 / 4 = 98,50. Der letzte Teilpreis ist 98. Auf dieser Stufe bleibt eine angebotene Kaufeinheit übrig.",
      "Der niedrigere letzte Preis beschreibt die Reihenfolge der Abschlüsse. Es wurden vier verkauft und dieselben vier gekauft. Der Verkauf kann viele Gründe haben, etwa Geldbedarf oder das Schließen einer Position. Ohne diese Angaben darfst du keine bestimmte Absicht als sicher darstellen."
    ],
    "columns": [
      {
        "title": "Bekannte Kaufgebote",
        "tone": "neutral",
        "points": [
          "99: 2 Einheiten; 98: 3 Einheiten.",
          "Verkäufer akzeptiert insgesamt 4."
        ]
      },
      {
        "title": "Ergebnis vor Kosten",
        "tone": "positive",
        "points": [
          "2 × 99 + 2 × 98 = 394 Euro.",
          "Durchschnitt 98,50; letzter Teilpreis 98."
        ]
      }
    ],
    "prompt": "Wie groß ist die ausgeführte Menge auf beiden Seiten?",
    "answers": [
      {
        "label": "Vier Verkäufe und nur zwei Käufe.",
        "explanation": "Jede ausgeführte Einheit braucht auch eine kaufende Seite."
      },
      {
        "label": "Acht verschiedene Einheiten, weil beide Seiten addiert werden.",
        "explanation": "Das zählt dieselben vier Einheiten doppelt."
      },
      {
        "label": "Vier gekaufte und dieselben vier verkaufte Einheiten.",
        "explanation": "Richtig: Der Preis kann sich bei gleichen ausgeführten Mengen verändern."
      }
    ],
    "correct": 2,
    "rule": "Tiefere Teilpreise nicht mit mehr Verkäufen als Käufen verwechseln."
  },
  {
    "title": "Kaufdruck beschreibt Bereitschaft, nicht zusätzliche Käufe ohne Verkäufer",
    "summary": "Gleiche ausgeführte Mengen können unterschiedliche Dringlichkeit haben.",
    "paragraphs": [
      "Kaufdruck ist oft eine kurze Beschreibung für Käufer, die verfügbare Angebote zügig annehmen oder höhere Preise erlauben. Verkaufsdruck kann entsprechend Verkäufe gegen vorhandene Kaufgebote beschreiben. Für eine genaue Erklärung musst du die beobachteten Aufträge und Bedingungen nennen.",
      "Eine Person kauft vier Einheiten von zwei Verkäuferinnen mit je zwei. Es gibt eine kaufende Person und zwei verkaufende Personen. Trotzdem werden vier gekauft und vier verkauft. Personenzahl, Stückzahl und erlaubte Preise sind unterschiedliche Angaben.",
      "Aus dem Wort Druck allein entsteht keine sichere Kursprognose. Die angebotene Gegenseite kann viel oder wenig Menge enthalten. Weitere Aufträge können die Lage verändern. Beschreibe daher erst, wer nachweislich welche Bedingungen akzeptiert hat. Unbekannte Identitäten oder Pläne bleiben unbekannt."
    ],
    "columns": [
      {
        "title": "Personen im Lernfall",
        "tone": "neutral",
        "points": [
          "1 Käufer; 2 Verkäuferinnen.",
          "Jede Verkäuferin gibt 2 Einheiten ab."
        ]
      },
      {
        "title": "Gehandelte Einheiten",
        "tone": "positive",
        "points": [
          "4 gekauft; dieselben 4 verkauft.",
          "Zahl der Personen bestimmt nicht allein den Preis."
        ]
      }
    ],
    "prompt": "Beweist eine größere Zahl von Verkäuferinnen mehr verkaufte als gekaufte Einheiten?",
    "answers": [
      {
        "label": "Nein, im Beispiel sind die ausgeführten Mengen auf beiden Seiten vier.",
        "explanation": "Richtig: Die Personenanzahl ist nicht die Stückzahl."
      },
      {
        "label": "Ja, zwei Verkäuferinnen bedeuten doppelt so viele Verkäufe wie Käufe.",
        "explanation": "Ein Käufer kann die Mengen mehrerer Verkäuferinnen übernehmen."
      },
      {
        "label": "Ja, damit ist ein fallender Preis garantiert.",
        "explanation": "Aus der Personenzahl allein folgt kein solcher Verlauf."
      }
    ],
    "correct": 0,
    "rule": "Bei Druck immer beobachtete Bedingungen statt bloßer Personenzahlen nennen."
  },
  {
    "title": "Ein besseres Gebot kann den Bid ohne Trade erhöhen",
    "summary": "Neue Bereitschaft ist zuerst eine Angebotsänderung.",
    "paragraphs": [
      "Ein neuer Kaufauftrag kann einen höheren Preis bieten als bisher. Liegt er trotzdem unter dem besten Ask, kommt in unserem einfachen Fall noch kein Handel zustande. Der beste Bid kann dennoch steigen. Diese Änderung zeigt ein neues Kaufangebot.",
      "Zuerst liegt der Bid bei 99, der Ask bei 101. Nun bietet ein neuer Auftrag 100. Kein Verkäufer nimmt das Angebot an. Der beste Bid ist danach 100. Der Spread sinkt von 2 auf 1 Euro. Der letzte Trade bleibt unverändert.",
      "Der Auftrag kann später ausgeführt, geändert oder zurückgezogen werden. Er beweist keinen sicheren nächsten Kurs. Notiere deshalb das bekannte Ereignis: neuer Bid, kleinere Spanne, kein Trade. Erst eine Ausführungsbestätigung belegt einen tatsächlichen Abschluss."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "Bid 99; Ask 101; Spread 2.",
          "Letzter Trade ist eine eigene Angabe."
        ]
      },
      {
        "title": "Nach dem neuen Kaufauftrag",
        "tone": "positive",
        "points": [
          "Bid 100; Ask 101; Spread 1.",
          "Kein neuer Trade."
        ]
      }
    ],
    "prompt": "Was ist in diesem Schritt tatsächlich passiert?",
    "answers": [
      {
        "label": "Der nächste Trade muss bei 101 stattfinden.",
        "explanation": "Die spätere Lage ist noch nicht bekannt."
      },
      {
        "label": "Ein höheres Kaufangebot wurde eingestellt; noch kein Trade.",
        "explanation": "Richtig: Die Verkaufsseite verlangt weiter mindestens 101."
      },
      {
        "label": "Ein Kauf bei 100 wurde bereits ausgeführt.",
        "explanation": "Der Fall nennt keine passende verkaufende Seite."
      }
    ],
    "correct": 1,
    "rule": "Ein höheres Gebot ist nicht automatisch eine höhere Ausführung."
  },
  {
    "title": "Eine Stornierung kann den Ask ohne Kauf erhöhen",
    "summary": "Angebote können verschwinden, ohne gehandelt zu werden.",
    "paragraphs": [
      "Ein Anbieter kann seinen noch offenen Auftrag nach den Regeln zurückziehen. Wenn die ganze beste Verkaufsstufe dadurch leer wird, erscheint die nächste belegte Stufe als bester Ask. Das braucht keinen neuen Kauf. Eine Stornierung ist ein anderes Ereignis als eine Ausführung.",
      "Zwei Einheiten stehen zu 100 bereit, drei zu 102. Die beiden Einheiten zu 100 werden vollständig storniert. Weitere Ereignisse gibt es nicht. Nun ist der beste Ask 102 mit drei Einheiten. Es wurde in diesem Schritt keine Einheit gehandelt.",
      "Siehst du nur den höheren Ask, kennst du die Ursache möglicherweise nicht. In diesem Fall ist die Stornierung aber ausdrücklich gegeben. Verwende diese Information. Eine verschwundene Zeile allein ist weder ein sicherer Trade noch der Beweis für eine bestimmte Täuschungsabsicht."
    ],
    "columns": [
      {
        "title": "Bekannte Änderung",
        "tone": "neutral",
        "points": [
          "Ask 100: 2 Einheiten werden storniert.",
          "Ask 102: 3 Einheiten bleiben."
        ]
      },
      {
        "title": "Ergebnis der Stornierung",
        "tone": "positive",
        "points": [
          "Neuer bester Ask: 102.",
          "Gehandelte Menge in diesem Schritt: 0."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten wurden durch die beschriebene Stornierung gehandelt?",
    "answers": [
      {
        "label": "Zwei.",
        "explanation": "Diese zwei Einheiten wurden ausdrücklich storniert."
      },
      {
        "label": "Fünf, weil beide Preisstufen sichtbar waren.",
        "explanation": "Sichtbare Aufträge sind noch keine abgeschlossenen Geschäfte."
      },
      {
        "label": "Keine.",
        "explanation": "Richtig: Die Menge wurde zurückgezogen statt ausgeführt."
      }
    ],
    "correct": 2,
    "rule": "Einen höheren Ask nicht automatisch als Kaufdruck ausgeben."
  },
  {
    "title": "Der letzte Preis kann zwischen Bid und Ask wechseln",
    "summary": "Eine Trade-Linie kann sich trotz unveränderter Angebote bewegen.",
    "paragraphs": [
      "Wir halten Bid 99 und Ask 101 unverändert. Beide Seiten bieten genug Menge. Ein Käufer nimmt zuerst eine Einheit zu 101. Danach verkauft jemand eine Einheit zum Bid 99. Diese Richtung der beiden Abschlüsse ist im Fall bekannt.",
      "Die Handelsliste zeigt zuerst 101 und dann 99. Der letzte Preis fällt damit um 2 Euro. Bid, Ask und ihre Mitte 100 bleiben aber gleich. Der Wechsel entsteht hier durch Geschäfte auf verschiedenen Angebotsseiten. Das wird auch Bid-Ask-Bounce genannt.",
      "Damit ist nicht jede Bewegung einer Trade-Linie bloß ein solcher Wechsel. Nachrichten und neue Angebote können ebenfalls wichtig sein. Das Beispiel zeigt nur, warum die Preisart und die Angebotslage dazugehören. Eine fallende letzte Zahl erklärt für sich noch keine geänderte Bewertung des Unternehmens."
    ],
    "columns": [
      {
        "title": "Unveränderte Angebote",
        "tone": "neutral",
        "points": [
          "Bid 99; Ask 101; Mitte 100.",
          "Genug Menge für beide kleinen Geschäfte."
        ]
      },
      {
        "title": "Zwei Ausführungen",
        "tone": "positive",
        "points": [
          "Zuerst Kauf zu 101, danach Verkauf zu 99.",
          "Letzter Trade fällt 2; Angebotsmitte bleibt 100."
        ]
      }
    ],
    "prompt": "Was hat sich im beschriebenen Fall nicht verändert?",
    "answers": [
      {
        "label": "Bid, Ask und ihr Mittelwert.",
        "explanation": "Richtig: Nur die zwei Ausführungen wechseln die Angebotsseite."
      },
      {
        "label": "Der letzte Trade; er bleibt stets bei 101.",
        "explanation": "Nach dem zweiten Geschäft liegt der letzte Trade bei 99."
      },
      {
        "label": "Die Zahl der gehandelten Einheiten; es gibt nie Trades.",
        "explanation": "Der Fall nennt zwei echte Geschäfte mit je einer Einheit."
      }
    ],
    "correct": 0,
    "rule": "Trade-Bewegungen auch im Verhältnis zu Bid und Ask lesen."
  },
  {
    "title": "Auch ein Mittelwert kann ohne Trade steigen",
    "summary": "Eine berechnete Preisänderung braucht keine Ausführung.",
    "paragraphs": [
      "Der Mittelkurs ist der Durchschnitt von bestem Bid und bestem Ask. Du addierst beide und teilst durch zwei. Er ist eine nützliche Vergleichszahl. Trotzdem ist er nicht automatisch ein Preis, zu dem jemand eine bestimmte Menge handelt.",
      "Die Angebote wechseln von 99 und 101 auf 100 und 102. Die alte Mitte ist (99 + 101) / 2 = 100. Die neue ist (100 + 102) / 2 = 101. Im Beispiel geschieht dieser Wechsel nur durch neue Angebote. Der bisher letzte Trade von 99 bleibt unverändert.",
      "Eine Grafik der Mitte würde hier steigen. Eine Grafik des letzten Trades würde in diesem Schritt nicht steigen. Beide können ihre Daten korrekt darstellen. Prüfe deshalb die Beschriftung der Grafik. Unterschiedliche Linien müssen nicht denselben Vorgang zeigen."
    ],
    "columns": [
      {
        "title": "Mitte vorher",
        "tone": "neutral",
        "points": [
          "Bid 99; Ask 101.",
          "(99 + 101) / 2 = 100."
        ]
      },
      {
        "title": "Mitte nachher",
        "tone": "positive",
        "points": [
          "Bid 100; Ask 102.",
          "Mitte 101; letzter Trade weiter 99."
        ]
      }
    ],
    "prompt": "Warum kann die Mitte steigen, obwohl kein neuer Trade stattgefunden hat?",
    "answers": [
      {
        "label": "Weil ein vergangener Trade rückwirkend verändert wird.",
        "explanation": "Die neuen Angebote ändern die alte Ausführung nicht."
      },
      {
        "label": "Weil sie aus veränderten Angeboten berechnet wird.",
        "explanation": "Richtig: Die Rechnung braucht keine neue Ausführung."
      },
      {
        "label": "Weil jede Grafik heimlich ein Geschäft abschließt.",
        "explanation": "Eine Grafik zeigt Daten und erteilt keinen Handelsauftrag."
      }
    ],
    "correct": 1,
    "rule": "Grafiken nur mit derselben Preisart direkt vergleichen."
  },
  {
    "title": "Derselbe Auftrag kann in dünner Tiefe stärker wirken",
    "summary": "Die Menge der Gegenseite beeinflusst die Teilpreise.",
    "paragraphs": [
      "Zwei erreichbare Bücher zeigen unterschiedliche Verkaufsmenge. In A liegen fünf Einheiten zu 100. In B liegt nur eine zu 100, danach vier zu 103. Du kaufst jeweils drei sofort und erlaubst die benötigten Preise. Alle Angebote bleiben unverändert.",
      "In A kosten die drei 3 × 100 = 300 Euro. Der Durchschnitt und letzte Teilpreis sind 100. In B kostet eine 100 und zwei kosten zusammen 206. Der Gesamtbetrag ist 306 Euro, der Durchschnitt 102. Der letzte Teilpreis ist 103.",
      "Derselbe Kaufumfang erreicht somit verschiedene Preisstufen. Im dünneren Buch steigt der letzte Teilpreis hier stärker. Das ist ein gegebener Vergleich und keine allgemeine Aussage über jeden späteren Auftrag. Sichtbare Menge, Zugang und Zeitpunkt müssen weiterhin passen."
    ],
    "columns": [
      {
        "title": "Buch A",
        "tone": "neutral",
        "points": [
          "Ask 100: 5 Einheiten.",
          "Kauf von 3: 300 Euro; Durchschnitt 100."
        ]
      },
      {
        "title": "Buch B",
        "tone": "positive",
        "points": [
          "Ask 100: 1; Ask 103: 4.",
          "Kauf von 3: 306 Euro; Durchschnitt 102; letzter Teilpreis 103."
        ]
      }
    ],
    "prompt": "Warum erreicht derselbe Kauf von drei in B den Preis 103?",
    "answers": [
      {
        "label": "Weil in B drei Käufe ohne Verkäufe stattfinden.",
        "explanation": "Alle drei Käufe besitzen eine verkaufende Gegenseite."
      },
      {
        "label": "Weil der Käufer automatisch eine andere Person sein muss.",
        "explanation": "Die Angebotsmenge erklärt den Unterschied ohne eine solche Annahme."
      },
      {
        "label": "Weil nur eine Einheit zu 100 bereitsteht.",
        "explanation": "Richtig: Die beiden übrigen Einheiten brauchen im Modell die nächste Stufe."
      }
    ],
    "correct": 2,
    "rule": "Preiswirkung zusammen mit der bekannten Menge auf der Gegenseite beurteilen."
  },
  {
    "title": "Eine Nachricht kann zuerst Angebote verändern",
    "summary": "Veröffentlichung, Reaktion und Trade sind getrennte Ereignisse.",
    "paragraphs": [
      "Eine Nachricht kann ändern, was Teilnehmer zu zahlen oder zu verlangen bereit sind. Sie können alte Aufträge zurückziehen und neue Preise anbieten. Deshalb können Angebote reagieren, bevor ein neuer Trade stattfindet. Die Nachricht allein kauft oder verkauft nichts.",
      "Vor einer Nachricht stehen Bid 99 und Ask 101. Danach stellen Teilnehmer im Lernfall Bid 102 und Ask 104. Wir legen fest, dass bisher nur Angebote verändert wurden. Die neue Mitte ist 103. Der letzte Trade behält zunächst seinen früheren Preis.",
      "Das beschreibt einen möglichen Ablauf mit bekannten Ereignissen. Es verspricht keine Richtung bei jeder Nachricht. Für eine echte Erklärung brauchst du Zeitangaben und passende Daten. Trenne den Zeitpunkt der Veröffentlichung, die beobachteten Angebotsänderungen und die späteren Ausführungen."
    ],
    "columns": [
      {
        "title": "Vor der Nachricht",
        "tone": "neutral",
        "points": [
          "Bid 99; Ask 101.",
          "Der letzte Trade ist getrennt gespeichert."
        ]
      },
      {
        "title": "Bekannte erste Reaktion",
        "tone": "positive",
        "points": [
          "Bid 102; Ask 104; neue Mitte 103.",
          "Bisher nur Angebotsänderungen, kein neuer Trade."
        ]
      }
    ],
    "prompt": "Muss es schon einen Trade bei 103 geben, weil die neue Mitte dort liegt?",
    "answers": [
      {
        "label": "Nein, die beschriebene Reaktion besteht zunächst nur aus Angeboten.",
        "explanation": "Richtig: Die Mitte wird berechnet und ist keine Ausführung."
      },
      {
        "label": "Ja, jede Nachricht handelt automatisch eine Einheit.",
        "explanation": "Eine Veröffentlichung ist kein Auftrag."
      },
      {
        "label": "Ja, alle Teilnehmer müssen dieselbe Nachricht gleich bewerten.",
        "explanation": "Verschiedene Einschätzungen sind möglich."
      }
    ],
    "correct": 0,
    "rule": "Nachricht, Angebotsreaktion und Trade mit eigenen Zeitpunkten beschreiben."
  },
  {
    "title": "Gute Entwicklung kann hinter Erwartungen zurückbleiben",
    "summary": "Vergangenheit und vorherige Erwartung sind zwei Vergleichsgrößen.",
    "paragraphs": [
      "Ein Unternehmen kann mehr Gewinn melden als zuvor und trotzdem hinter einer Erwartung liegen. Die erste Frage lautet: Was hat sich gegenüber früher verändert? Die zweite lautet: Was wurde vor der Meldung erwartet? Diese Rechnungen sind nicht identisch.",
      "Unser Unternehmen hatte zuvor 8 Millionen Euro Gewinn. Vor der neuen Meldung wurde im Beispiel 12 erwartet. Gemeldet werden 10. Gegenüber früher sind es 10 − 8 = 2 Millionen mehr. Gegenüber der genannten Erwartung sind es 10 − 12 = −2 Millionen.",
      "Das erklärt, warum die gleiche Zahl unterschiedlich eingeordnet werden kann. Es erzwingt keinen fallenden Aktienpreis. Weitere Informationen, Erwartungen und Handelsbedingungen können mitwirken. Die Erwartung ist hier vorgegeben, keine sichere Meinung aller Menschen am Markt."
    ],
    "columns": [
      {
        "title": "Vergleich mit früher",
        "tone": "neutral",
        "points": [
          "Früher 8; gemeldet 10 Millionen Euro.",
          "Veränderung: +2 Millionen."
        ]
      },
      {
        "title": "Vergleich mit Erwartung",
        "tone": "positive",
        "points": [
          "Vorher erwartet 12; gemeldet 10 Millionen Euro.",
          "Überraschung: −2 Millionen."
        ]
      }
    ],
    "prompt": "Ist die Meldung zugleich höher als früher und niedriger als die genannte Erwartung?",
    "answers": [
      {
        "label": "Nein, die Aktienrichtung folgt automatisch aus dem Wort Gewinn.",
        "explanation": "Die Rechnung beschreibt Vergleiche, keine sichere Preisreaktion."
      },
      {
        "label": "Ja: plus zwei gegenüber früher, minus zwei gegenüber der Erwartung.",
        "explanation": "Richtig: Die beiden Vergleichsgrößen sind verschieden."
      },
      {
        "label": "Nein, ein höherer Gewinn kann nie enttäuschen.",
        "explanation": "Eine vorher höhere Erwartung kann trotzdem verfehlt werden."
      }
    ],
    "correct": 1,
    "rule": "Veränderung und Überraschung getrennt ausrechnen."
  },
  {
    "title": "Eine Überraschung braucht eine vorher gespeicherte Erwartung",
    "summary": "Nachträglich geänderte Erwartungen verfälschen den Vergleich.",
    "paragraphs": [
      "Eine einfache Nachrichtenüberraschung ist der gemeldete Wert minus einer vorher festgehaltenen Erwartung. Wichtig ist, dass diese Erwartung wirklich vor der Veröffentlichung bekannt war. Eine nachher geänderte Zahl darf nicht still als frühere Erwartung verwendet werden.",
      "Vor der Meldung steht in unserem Datensatz 10. Der erste gemeldete Wert beträgt 12. Die Überraschung ist 12 − 10 = 2. Später aktualisiert eine Website ihre Vergleichszahl auf 12. Rechnest du dann 12 − 12 = 0, beantwortest du nicht mehr die ursprüngliche Frage.",
      "Auch verschiedene Umfragen können unterschiedliche Erwartungszahlen liefern. Eine zusammengefasste Umfrage heißt oft Konsens. Sie ist keine Meinung aller Menschen. Nenne deshalb Quelle, Zeitpunkt und Einheit. Ein später korrigierter gemeldeter Wert ist außerdem eine Revision. Das ist ein neues Ereignis. Eine positive Überraschung garantiert weiterhin keine bestimmte Kursrichtung."
    ],
    "columns": [
      {
        "title": "Vorher festgehalten",
        "tone": "neutral",
        "points": [
          "Erwartung vor Veröffentlichung: 10.",
          "Erste Meldung: 12; Überraschung +2."
        ]
      },
      {
        "title": "Später geänderte Anzeige",
        "tone": "positive",
        "points": [
          "Vergleichszahl nach Veröffentlichung: 12.",
          "12 − 12 = 0 beschreibt nicht die alte Erwartung."
        ]
      }
    ],
    "prompt": "Welche Erwartung gehört zur ursprünglichen Überraschungsrechnung?",
    "answers": [
      {
        "label": "Immer die nachher sichtbare 12.",
        "explanation": "Damit wird späteres Wissen als früheres Wissen ausgegeben."
      },
      {
        "label": "Eine beliebige Zahl ohne Quelle oder Zeitpunkt.",
        "explanation": "Der Vergleich braucht nachvollziehbare Angaben."
      },
      {
        "label": "Die vor der Meldung gespeicherte 10.",
        "explanation": "Richtig: Sie war der bekannte Vergleich vor der neuen Information."
      }
    ],
    "correct": 2,
    "rule": "Für Überraschungen nur tatsächlich vorher bekannte Erwartungen verwenden."
  },
  {
    "title": "Erwartete Zahlungen können Bewertungen verändern",
    "summary": "Heutige Meldungen können den Blick auf die Zukunft beeinflussen.",
    "paragraphs": [
      "Eine Aktie gibt dir einen Unternehmensanteil. Wer sie bewertet, betrachtet oft mögliche künftige Gewinne und Zahlungen. Eine neue Meldung kann diese Erwartungen verändern. Der heutige gemeldete Gewinn ist deshalb nicht die einzige Größe, die für eine Einschätzung wichtig sein kann.",
      "Im Lernfall meldet eine Firma einen guten aktuellen Gewinn. Gleichzeitig erklärt sie, dass künftig ein wichtiger Kunde wegfallen könnte. Eine Person hebt ihre Erwartung wegen des Gewinns an. Eine andere senkt sie wegen des Kundenrisikos. Beide haben dieselbe Meldung gelesen.",
      "Solche Einschätzungen sind keine sicheren zukünftigen Zahlungen. Auch Gewinne werden nicht automatisch vollständig ausgeschüttet. Der Marktpreis entsteht aus tatsächlichen Handelsbedingungen. Er ist nicht einfach die Ergebniszeile des letzten Berichts. Trenne Meldung, Zukunftserwartung, Werturteil und Ausführung."
    ],
    "columns": [
      {
        "title": "In derselben Meldung",
        "tone": "neutral",
        "points": [
          "Aktueller Gewinn ist gut.",
          "Ein wichtiger künftiger Kunde könnte wegfallen."
        ]
      },
      {
        "title": "Mögliche Einschätzungen",
        "tone": "positive",
        "points": [
          "Eine Person gewichtet den aktuellen Gewinn stärker.",
          "Eine andere gewichtet das künftige Risiko stärker."
        ]
      }
    ],
    "prompt": "Muss ein guter aktueller Gewinn jede Zukunftserwartung verbessern?",
    "answers": [
      {
        "label": "Nein, andere Angaben können die künftigen Aussichten belasten.",
        "explanation": "Richtig: Ein Bericht kann mehrere relevante Informationen enthalten."
      },
      {
        "label": "Ja, künftige Risiken verschwinden dadurch automatisch.",
        "explanation": "Eine gute Gegenwartszahl beseitigt nicht jedes spätere Risiko."
      },
      {
        "label": "Ja, jede Gewinnzahl wird sofort vollständig an Aktionäre bezahlt.",
        "explanation": "Gewinn und beschlossene Auszahlung sind unterschiedliche Größen."
      }
    ],
    "correct": 0,
    "rule": "Aktuelle Zahlen und erwartete zukünftige Zahlungen getrennt beurteilen."
  },
  {
    "title": "Ein späterer Geldbetrag ist nicht automatisch derselbe heutige Wert",
    "summary": "Abzinsen verbindet einen künftigen Betrag mit einem Rechenzins.",
    "paragraphs": [
      "Ein vereinbarter Betrag kann erst später ausgezahlt werden. Für eine vereinfachte Bewertung rechnen wir ihn auf heute zurück. Das heißt Abzinsen. Der berechnete heutige Wert heißt Barwert. Unser Modell betrachtet nur eine vollständig erfüllte Zahlung von 110 Euro in genau einem Jahr. Weitere Zahlungen, Kosten und Ausfallrisiken fehlen.",
      "Bei einem gewählten Jahreszins von 10 % würde ein heutiger Betrag um den Faktor 1,10 wachsen. Daher rechnen wir zurück: 110 / 1,10 = 100 Euro. Verwenden wir stattdessen 20 %, teilen wir durch 1,20. Dann ergibt sich 110 / 1,20 ≈ 91,67 Euro.",
      "Ein höherer Rechenzins senkt hier den berechneten heutigen Wert, obwohl die spätere Zahlung gleich bleibt. Das ist ein Modellvergleich, kein beobachteter Marktpreis. Echte Anlagen haben andere Risiken und Bedingungen. Die Zahlen sind keine Empfehlung für einen Zinssatz und erklären keinen gesamten Kursverlauf."
    ],
    "columns": [
      {
        "title": "Mit 10 % Rechenzins",
        "tone": "neutral",
        "points": [
          "Eine Zahlung: 110 Euro in einem Jahr.",
          "Heutiger Modellwert: 110 / 1,10 = 100 Euro."
        ]
      },
      {
        "title": "Mit 20 % Rechenzins",
        "tone": "positive",
        "points": [
          "Dieselbe spätere Zahlung von 110 Euro.",
          "Heutiger Modellwert: 110 / 1,20 ≈ 91,67 Euro."
        ]
      }
    ],
    "prompt": "Was verändert sich im Vergleich, obwohl die spätere Zahlung gleich bleibt?",
    "answers": [
      {
        "label": "Jede echte Aktie muss genau um diese Differenz fallen.",
        "explanation": "Der einfache Zahlungsfall ist kein vollständiges Aktienmodell."
      },
      {
        "label": "Der heutige Modellwert sinkt bei dem höheren Rechenzins.",
        "explanation": "Richtig: Durch einen größeren Faktor ergibt sich beim Zurückrechnen ein kleinerer Betrag."
      },
      {
        "label": "Die spätere Zahlung muss automatisch von 110 auf 100 fallen.",
        "explanation": "Sie bleibt im Modell ausdrücklich bei 110."
      }
    ],
    "correct": 1,
    "rule": "Ein Bewertungsmodell mit seinen Annahmen von einem tatsächlichen Handelspreis trennen."
  },
  {
    "title": "Dieselbe Meldung kann zu verschiedenen Entscheidungen führen",
    "summary": "Zeitraum, Bestand und Aufgabe verändern die Bedeutung eines Geschäfts.",
    "paragraphs": [
      "Menschen können dieselbe Nachricht lesen und unterschiedlich handeln. Ihre Erwartungen können sich unterscheiden. Auch ihre Ziele, Zeiträume und vorhandenen Positionen können verschieden sein. Ein Kauf und ein Verkauf beweisen deshalb noch nicht, dass jemand die Nachricht falsch verstanden hat.",
      "Miriam kauft nach einer Meldung für ihr langfristiges Sparziel. Ein anderer Anleger verkauft, weil er nächste Woche Geld braucht. Ein Fonds verkauft einen Teil, um eine feste Gewichtungsgrenze einzuhalten. Der sichtbare Vorgang allein erklärt nicht alle Aufgaben dahinter.",
      "Auch eine zutreffende Nachricht liefert keinen sicheren Gewinner. Der künftige Preis, die Kosten und der spätere Plan bleiben wichtig. Sammle deshalb bekannte Angaben. Wo sie fehlen, nenne Möglichkeiten statt behaupteter Motive. Du kennst aus Kapitel 3 bereits diese unterschiedlichen Handelsgründe."
    ],
    "columns": [
      {
        "title": "Bekannte Aufgaben",
        "tone": "neutral",
        "points": [
          "Miriam: langfristiges Sparziel.",
          "Andere Anleger: Zahlungsbedarf oder Fondsgrenze."
        ]
      },
      {
        "title": "Grenze der Schlussfolgerung",
        "tone": "positive",
        "points": [
          "Dieselbe Nachricht kann mehrere Aufgaben betreffen.",
          "Kauf oder Verkauf allein beweist keinen vollständigen Grund."
        ]
      }
    ],
    "prompt": "Beweist ein Verkauf nach der Meldung eine negative Meinung über das Unternehmen?",
    "answers": [
      {
        "label": "Ja, jeder Verkäufer muss die Meldung schlecht finden.",
        "explanation": "Verkäufe können andere Aufgaben erfüllen."
      },
      {
        "label": "Ja, Käufer und Verkäufer müssen immer denselben Zeitraum planen.",
        "explanation": "Unterschiedliche Zeiträume sind möglich."
      },
      {
        "label": "Nein, er kann auch aus einem bekannten Zahlungsbedarf oder einer Grenze entstehen.",
        "explanation": "Richtig: Nachricht und Handelsmotiv sind nicht automatisch dasselbe."
      }
    ],
    "correct": 2,
    "rule": "Bekannte Aufgaben beachten, bevor du eine Nachrichtenmeinung unterstellst."
  },
  {
    "title": "Mehr Unsicherheit kann die Preisbereitschaft ändern",
    "summary": "Eine gleiche Erwartung ist noch keine gleiche Sicherheit.",
    "paragraphs": [
      "Zwei Anlagen können im Kopf einer Person einen ähnlichen erwarteten Betrag haben. Trotzdem kann sie ihre Unsicherheit unterschiedlich einschätzen. Unsicher heißt: Das tatsächliche Ergebnis kann anders ausfallen. Diese Sorge kann verändern, was sie heute bezahlen möchte.",
      "Im Beispiel erwartet eine Person bei einer Anlage künftig 100 Euro. Neue Angaben machen das Ergebnis weniger verlässlich. Der erwartete Betrag in ihrem einfachen Plan bleibt zunächst 100. Trotzdem möchte sie wegen des höheren Risikos weniger dafür zahlen. Wir beschreiben hier ausdrücklich nur ihre Entscheidung.",
      "Andere Teilnehmer können anders reagieren. Auch Marktpreis und tatsächlich erfüllte Zahlungen sind noch offen. Die Lektion zeigt, dass Erwartungen über Höhe und Sicherheit verschiedene Dinge sind. Ein unveränderter Mittelwert oder eine unveränderte Prognose bedeutet nicht automatisch dieselbe Bewertung."
    ],
    "columns": [
      {
        "title": "Erwartete Höhe",
        "tone": "neutral",
        "points": [
          "Im persönlichen Plan weiterhin 100 Euro.",
          "Das ist noch keine garantierte Auszahlung."
        ]
      },
      {
        "title": "Geänderte Sicherheit",
        "tone": "positive",
        "points": [
          "Die Person beurteilt das Ergebnis als unsicherer.",
          "Sie setzt deshalb eine niedrigere Kaufbereitschaft."
        ]
      }
    ],
    "prompt": "Kann die Person ihre Kaufbereitschaft senken, obwohl die erwartete Höhe zunächst gleich bleibt?",
    "answers": [
      {
        "label": "Ja, weil sie die Sicherheit des Ergebnisses anders beurteilt.",
        "explanation": "Richtig: Erwartete Höhe und eingeschätztes Risiko sind getrennte Angaben."
      },
      {
        "label": "Nein, Unsicherheit kann nie eine Entscheidung beeinflussen.",
        "explanation": "Das Beispiel nennt gerade eine geänderte Risikoeinschätzung."
      },
      {
        "label": "Nein, eine Erwartung von 100 ist eine feste Zusage.",
        "explanation": "Eine Erwartung ist keine Garantie."
      }
    ],
    "correct": 0,
    "rule": "Erwartete Höhe und Sicherheit nicht gleichsetzen."
  },
  {
    "title": "Zahlungsbedarf kann einen Verkauf auslösen",
    "summary": "Ein Auftrag muss nicht aus einer neuen Wertmeinung entstehen.",
    "paragraphs": [
      "Ein Fonds kann Geld für eine Auszahlung benötigen. Er kann dafür Anlagen verkaufen, obwohl er ihre Aussichten nicht neu beurteilt hat. Solche Zahlungsflüsse können Aufträge erzeugen. Ihre Preiswirkung hängt dann auch von der vorhandenen Gegenseite ab.",
      "Unser Fonds muss 1.000 Euro auszahlen und hat 400 Euro frei verfügbar. Es fehlen 600 Euro. In diesem vereinfachten Fall verkauft er sechs Einheiten zu je 100. Das ergibt die benötigten 600. Gebühren fehlen und die Ausführung ist ausdrücklich gegeben.",
      "Der Verkaufsgrund ist hier die Auszahlung. Er beweist keine negative Nachricht über die Anlage. Ob ein anderer, größerer Verkaufsauftrag tiefere Gebote nutzt, hängt vom Buch ab. Trenne daher den bekannten Anlass vom Umfang und von der tatsächlichen Preiswirkung."
    ],
    "columns": [
      {
        "title": "Bekannter Geldbedarf",
        "tone": "neutral",
        "points": [
          "Auszahlung 1.000 Euro; verfügbar 400.",
          "Fehlbetrag: 600 Euro."
        ]
      },
      {
        "title": "Gegebener Verkauf",
        "tone": "positive",
        "points": [
          "6 × 100 = 600 Euro vor Kosten.",
          "Anlass ist die Auszahlung, keine neue Kursprognose."
        ]
      }
    ],
    "prompt": "Welcher Grund ist für diesen Verkauf ausdrücklich bekannt?",
    "answers": [
      {
        "label": "Ein garantiert fallender Preis am nächsten Tag.",
        "explanation": "Der Zahlungsbedarf belegt keine Zukunftsrichtung."
      },
      {
        "label": "Der Fonds braucht 600 Euro zusätzlich für seine Auszahlung.",
        "explanation": "Richtig: Der Fehlbetrag wird hier durch den gegebenen Verkauf gedeckt."
      },
      {
        "label": "Eine sichere neue schlechte Unternehmensnachricht.",
        "explanation": "Eine solche Nachricht ist im Fall nicht angegeben."
      }
    ],
    "correct": 1,
    "rule": "Zahlungsflüsse als möglichen Auftragsgrund beachten."
  },
  {
    "title": "Ein Kauf kann eine bestehende Verkaufsposition beenden",
    "summary": "Die Preiswirkung verrät nicht automatisch eine neue Überzeugung.",
    "paragraphs": [
      "Ein Kauf kann eine neue Kaufposition eröffnen. Er kann aber auch eine vorhandene Verkaufsposition schließen. Das Schließen durch einen passenden Kauf heißt Eindecken. Für die Wirkung auf den Bestand brauchst du deshalb die Position vor dem Auftrag.",
      "Person A hält im Vertragsbeispiel drei Verkaufseinheiten, also −3. Sie kauft drei gleiche Einheiten. Danach steht sie bei null: −3 + 3 = 0. Person B hatte vorher keine Position und kauft ebenfalls drei. Sie steht danach bei +3. Beide Kaufaufträge können Verkaufsangebote nutzen.",
      "Der sichtbare Kaufumfang ist gleich, die Bestandswirkung verschieden. Eindecken kann etwa aus einer Risikogrenze oder einem geänderten Plan folgen. Ohne die Anfangsposition weißt du nicht sicher, ob ein Kauf eine neue positive Erwartung ausdrückt. Eine Preisreaktion nennt diese fehlende Position nicht nachträglich."
    ],
    "columns": [
      {
        "title": "Person A",
        "tone": "neutral",
        "points": [
          "Vorher −3; Kauf von 3.",
          "Danach 0: Verkaufsposition geschlossen."
        ]
      },
      {
        "title": "Person B",
        "tone": "positive",
        "points": [
          "Vorher 0; Kauf von 3.",
          "Danach +3: neue Kaufposition."
        ]
      }
    ],
    "prompt": "Welche Wirkung hat der Kauf von Person A?",
    "answers": [
      {
        "label": "Er eröffnet automatisch eine neue Position von +3.",
        "explanation": "Das würde den vorherigen Bestand von −3 weglassen."
      },
      {
        "label": "Er beweist, dass A einen sicheren Anstieg erwartet.",
        "explanation": "Der Bestandsausgleich allein belegt diese Meinung nicht."
      },
      {
        "label": "Er schließt ihre vorhandene Verkaufsposition.",
        "explanation": "Richtig: Minus drei plus drei ergibt null."
      }
    ],
    "correct": 2,
    "rule": "Kaufmenge und Bestandsänderung nur mit bekannter Anfangsposition verbinden."
  },
  {
    "title": "Eine Währungsumrechnung kann deinen angezeigten Wert verändern",
    "summary": "Eine Bewegung in Euro muss keine Bewegung im Dollarpreis sein.",
    "paragraphs": [
      "Du kannst eine Anlage in Dollar bewerten und ihr Ergebnis in Euro anzeigen. Dann beeinflusst auch der Wechselkurs den Eurobetrag. Die Bewegung der Anlage und die Bewegung der Währung sind verschiedene Beiträge. Die richtige Einheit gehört deshalb zu jeder Preisgeschichte.",
      "Unsere Anlage bleibt genau 100 US-Dollar wert. Bei EUR/USD 1,20 entspricht das 100 / 1,20 ≈ 83,33 Euro. Später steht der Kurs bei 1,25. Dann sind es 100 / 1,25 = 80 Euro. Gebühren und andere Änderungen fehlen im Beispiel.",
      "Der Eurobetrag fällt, obwohl der Dollarpreis gleich bleibt. Damit ist keine negative Unternehmensnachricht belegt. In echten Anlagen können beide Preise gleichzeitig wechseln. Prüfe daher Produktpreis, Währung und Umrechnung getrennt, bevor du eine Veränderung allein der Anlage zuschreibst."
    ],
    "columns": [
      {
        "title": "Erster Wechselkurs",
        "tone": "neutral",
        "points": [
          "Anlagewert: 100 US-Dollar.",
          "EUR/USD 1,20: etwa 83,33 Euro."
        ]
      },
      {
        "title": "Zweiter Wechselkurs",
        "tone": "positive",
        "points": [
          "Anlagewert weiterhin 100 US-Dollar.",
          "EUR/USD 1,25: 80 Euro."
        ]
      }
    ],
    "prompt": "Warum fällt der Eurobetrag im gegebenen Fall?",
    "answers": [
      {
        "label": "Weil sich die Währungsumrechnung geändert hat.",
        "explanation": "Richtig: Der Dollarwert der Anlage bleibt ausdrücklich gleich."
      },
      {
        "label": "Weil der Dollarpreis der Anlage sicher gefallen ist.",
        "explanation": "Der Fall hält ihn bei 100 Dollar fest."
      },
      {
        "label": "Weil jeder Wechselkurs eine Unternehmensdividende ist.",
        "explanation": "Ein Wechselkurs ist das Verhältnis zweier Währungen."
      }
    ],
    "correct": 0,
    "rule": "Anlagepreis und Währungsumrechnung als getrennte Beiträge lesen."
  },
  {
    "title": "In einer Auktion kann ein neuer Auftrag die Preiswahl ändern",
    "summary": "Die Regel entscheidet anhand aller passenden Mengen.",
    "paragraphs": [
      "Eine Sammelauktion bündelt Aufträge und berechnet einen gemeinsamen Preis nach ihren Regeln. In unserem neuen Modell kommen nur 100 und 101 als Preise infrage. Wir wählen den Preis mit der größten handelbaren Menge. Beide Zustände haben ein eindeutiges Ergebnis.",
      "Käufer wollen zuerst vier Einheiten für höchstens 100. Verkäufer bieten zwei ab mindestens 100 und drei ab mindestens 101. Bei 100 passen vier Kauf- und zwei Verkaufseinheiten: handelbar sind zwei. Bei 101 darf keiner der Käufer kaufen. Deshalb gewinnt zunächst 100.",
      "Nun kommt ein Kaufauftrag über fünf mit Höchstpreis 101 hinzu. Bei 100 bleiben nur zwei passende Verkäufer. Bei 101 passen die fünf neuen Käufer zu allen fünf Verkäufen. Daher gewinnt jetzt 101 mit fünf Einheiten. Ein neuer Auftrag verändert hier die Preiswahl nach der festgelegten Regel, ohne einen sicheren späteren Kurs zu liefern."
    ],
    "columns": [
      {
        "title": "Vor dem neuen Auftrag",
        "tone": "neutral",
        "points": [
          "Bei 100: min(4, 2) = 2 handelbar.",
          "Bei 101: min(0, 5) = 0; Preiswahl 100."
        ]
      },
      {
        "title": "Nach dem neuen Auftrag",
        "tone": "positive",
        "points": [
          "Zusätzlich 5 Käufe mit Höchstpreis 101.",
          "Bei 100 handelbar 2; bei 101 handelbar 5; Preiswahl 101."
        ]
      }
    ],
    "prompt": "Welcher Preis gewinnt nach dem neuen Auftrag in diesem Modell?",
    "answers": [
      {
        "label": "Beide Preise müssen denselben Umfang ausführen.",
        "explanation": "Die passenden Mengen unterscheiden sich."
      },
      {
        "label": "101 Euro mit fünf handelbaren Einheiten.",
        "explanation": "Richtig: Das ist nun das eindeutige Maximum der gemeinsamen Menge."
      },
      {
        "label": "100 Euro mit neun gehandelten Einheiten.",
        "explanation": "Bei 100 bieten nur zwei Verkäufer passende Einheiten an."
      }
    ],
    "correct": 1,
    "rule": "Auktionsänderungen aus Aufträgen und der konkreten Preisregel erklären."
  },
  {
    "title": "Ein anderer Platz oder eine andere Zeit kann eine andere Zahl zeigen",
    "summary": "Passende Vergleichsdaten kommen vor einer Ursachengeschichte.",
    "paragraphs": [
      "Zwei Preisanzeigen können unterschiedliche Handelsplätze, Zeiten oder Preisarten verwenden. Auch Verzögerungen können eine Rolle spielen. Ein Unterschied zwischen den Zahlen beweist deshalb nicht sofort eine wirtschaftliche Neubewertung. Prüfe zuerst, ob du denselben Vorgang vergleichst.",
      "Anzeige A zeigt einen letzten Trade von 100 um 10:00. Anzeige B zeigt ein Verkaufsangebot von 101 um 10:01 an einem anderen Platz. Das sind unterschiedliche Daten. Aus diesen zwei Zahlen allein wissen wir nicht, ob am Platz A der nächste Trade gestiegen ist.",
      "Prüfe Produkt, Einheit, Datenquelle, Preisart und Zeitpunkt. Erst dann suchst du passende Ereignisse. Ein bestätigter anderer Preis bleibt ein echter Wert für seinen jeweiligen Vorgang. Er ist aber keine automatische Erklärung dafür, warum eine andere Anzeige vorher anders aussah."
    ],
    "columns": [
      {
        "title": "Anzeige A",
        "tone": "neutral",
        "points": [
          "Letzter Trade 100 um 10:00.",
          "Ein bestimmter Handelsplatz."
        ]
      },
      {
        "title": "Anzeige B",
        "tone": "positive",
        "points": [
          "Ask 101 um 10:01 an anderem Platz.",
          "Andere Preisart und anderer Zeitpunkt."
        ]
      }
    ],
    "prompt": "Beweisen diese Anzeigen einen neuen Trade bei 101 auf Platz A?",
    "answers": [
      {
        "label": "Ja, jede größere Zahl überschreibt überall den letzten Trade.",
        "explanation": "Jede Anzeige hat ihren eigenen Datenbezug."
      },
      {
        "label": "Ja, Preisart und Zeitpunkt sind für Vergleiche unwichtig.",
        "explanation": "Diese Angaben sind gerade für einen gültigen Vergleich nötig."
      },
      {
        "label": "Nein, B zeigt ein späteres Angebot an einem anderen Platz.",
        "explanation": "Richtig: Die Angaben beschreiben nicht dieselbe Ausführung."
      }
    ],
    "correct": 2,
    "rule": "Erst vergleichbare Daten herstellen, dann Ursachen prüfen."
  },
  {
    "title": "Gleichzeitig bewegen heißt nicht automatisch verursacht",
    "summary": "Mehrere Ereignisse können zur selben Zeit auftreten.",
    "paragraphs": [
      "Zwei Ereignisse können gleichzeitig auftreten, ohne dass eines das andere eindeutig erklärt. Wenn sich zwei Größen über mehrere Beobachtungen gemeinsam verändern, spricht man von Korrelation. Ein ursächlicher Zusammenhang heißt Kausalität. Dafür brauchst du mehr als ein einzelnes zeitliches Zusammentreffen.",
      "Nach einer Meldung steigt unser Beispielkurs. Im selben Zeitraum stellt ein Fonds einen großen Kauf ein, und mehrere Verkäufer ziehen Angebote zurück. Alle drei Ereignisse sind gegeben. Aus der Preislinie allein können wir ihren jeweiligen Beitrag nicht genau aufteilen.",
      "Es wäre ebenso falsch, jedes Ereignis als unwichtig abzutun. Wir kennen nur noch nicht seine genaue Wirkung. Nutze passende Zeit- und Auftragsdaten und prüfe andere Erklärungen. Die Aussage nach der Nachricht ist zeitlich; die Aussage allein wegen der Nachricht wäre eine stärkere Behauptung."
    ],
    "columns": [
      {
        "title": "Gleichzeitig beobachtet",
        "tone": "neutral",
        "points": [
          "Meldung, großer Kauf und Stornierungen.",
          "Kurs steigt im betrachteten Zeitraum."
        ]
      },
      {
        "title": "Noch nicht belegt",
        "tone": "positive",
        "points": [
          "Der genaue Beitrag jedes Ereignisses.",
          "Eine einzige sichere Ursache aus der Linie allein."
        ]
      }
    ],
    "prompt": "Was lässt sich aus der Preislinie allein sicher auf die drei Ereignisse verteilen?",
    "answers": [
      {
        "label": "Nicht der genaue Beitrag jedes einzelnen Ereignisses.",
        "explanation": "Richtig: Mehrere mögliche Wirkungen überlagern sich im Fall."
      },
      {
        "label": "Der gesamte Anstieg gehört automatisch nur zur Meldung.",
        "explanation": "Der Fall enthält auch Aufträge und Angebotsänderungen."
      },
      {
        "label": "Keines der Ereignisse kann überhaupt etwas beitragen.",
        "explanation": "Fehlende genaue Zuordnung beweist keine Wirkungslosigkeit."
      }
    ],
    "correct": 0,
    "rule": "Zeitliches Zusammentreffen nicht ohne weitere Belege zur alleinigen Ursache machen."
  },
  {
    "title": "Zeitangaben schützen vor einer nachträglichen Geschichte",
    "summary": "Späteres Wissen war nicht schon vorher bekannt.",
    "paragraphs": [
      "Wenn du eine Bewegung erklären möchtest, ordne die bekannten Zeitpunkte. Wann wurde eine Nachricht veröffentlicht? Wann kam sie in den Daten an? Wann änderten sich Angebote oder Trades? Unterschiedliche Uhren oder verzögerte Daten können den Vergleich erschweren. Welche Informationen damals bekannt waren, nennt man den Informationsstand.",
      "In unserem Fall sind die Zeiten ausdrücklich vergleichbar. Eine neue Meldung wird um 10:00 veröffentlicht. Die Angebotsänderung liegt schon um 9:59. Wir legen fest, dass der Inhalt vorher nicht bekannt war. Diese spätere Veröffentlichung kann dann nicht die bereits frühere Reaktion auf ihren unbekannten Inhalt erklären.",
      "Eine andere frühere Information oder ein anderer Auftrag könnte wichtig gewesen sein. Der tatsächliche Grund bleibt hier offen. Auch eine nachträglich sichtbare Überschrift beweist nicht, dass sie damals schon bekannt war. Halte die Zeitleiste fest, bevor du die bekannte Geschichte über die ganze Linie legst."
    ],
    "columns": [
      {
        "title": "Vergleichbare Zeitpunkte",
        "tone": "neutral",
        "points": [
          "Angebotsänderung um 9:59.",
          "Neue, zuvor unbekannte Meldung erst um 10:00."
        ]
      },
      {
        "title": "Grenze der Erklärung",
        "tone": "positive",
        "points": [
          "Die spätere Meldung erklärt nicht als bekannte Information den früheren Schritt.",
          "Andere frühere Gründe bleiben offen."
        ]
      }
    ],
    "prompt": "Kann die um 10:00 erstmals bekannte Meldung im gegebenen Fall schon um 9:59 als bekannte Information wirken?",
    "answers": [
      {
        "label": "Ja, die spätere Meldung beweist jeden früheren Grund.",
        "explanation": "Eine spätere Veröffentlichung belegt keine vollständige Vorgeschichte."
      },
      {
        "label": "Nein, unter den ausdrücklich genannten Zeit- und Wissensannahmen nicht.",
        "explanation": "Richtig: Späteres Wissen darf nicht in die frühere Entscheidung verschoben werden."
      },
      {
        "label": "Ja, jede passende Überschrift war automatisch vorher bekannt.",
        "explanation": "Der Fall schließt die frühere Kenntnis ausdrücklich aus."
      }
    ],
    "correct": 1,
    "rule": "Nur Informationen verwenden, die zum betrachteten Zeitpunkt bekannt sein konnten."
  },
  {
    "title": "Dein Preisbewegungscheck: Daten, Ereignisse und Grenzen",
    "summary": "Ein gemischter Fall braucht eine genaue Reihenfolge.",
    "paragraphs": [
      "Für deinen Check nennst du zuerst Produkt, Preisart, Quelle und Zeitpunkt. Ordne dann die bekannten Ereignisse. Prüfe Menge und Gegenangebote. Rechne die tatsächlichen Abschlüsse. Trenne schließlich Beobachtung, mögliche Erklärung und offenen Grund. So wird aus einer Preislinie ein nachvollziehbarer Ablauf.",
      "Im Beispiel stehen zwei Verkaufsangebote zu 101 und vier zu 103. Nach einer Nachricht wird eine Einheit bei 101 storniert. Dann kauft jemand drei und erlaubt beide Preise. Weitere Änderungen fehlen. Eine zu 101 und zwei zu 103 kosten 307 Euro. Der Durchschnitt ist etwa 102,33; der letzte Teilpreis 103.",
      "Bei 103 bleiben zwei angebotene Einheiten. Drei wurden gekauft und dieselben drei verkauft. Nachricht, Stornierung und Ausführung sind bekannt, der vollständige Grund des Käufers bleibt offen. Du kannst den höheren Teilpreis aus der verbleibenden Menge erklären. Im nächsten Kapitel betrachten wir Handelszeiten und Sessions."
    ],
    "columns": [
      {
        "title": "Bekannte Reihenfolge",
        "tone": "neutral",
        "points": [
          "Zuerst 2 zu 101 und 4 zu 103.",
          "Nachricht; 1 bei 101 storniert; danach Kauf von 3."
        ]
      },
      {
        "title": "Gerechnetes Ergebnis",
        "tone": "positive",
        "points": [
          "1 × 101 + 2 × 103 = 307 Euro.",
          "Durchschnitt etwa 102,33; letzter Teilpreis 103.",
          "Bei 103 bleiben 2; Handelsvolumen 3."
        ]
      }
    ],
    "prompt": "Welche Aussage ist vollständig durch den beschriebenen Ablauf gestützt?",
    "answers": [
      {
        "label": "Sechs gehandelte Einheiten und ein sicherer Anstieg morgen.",
        "explanation": "Die drei Einheiten werden nicht doppelt gezählt; eine Prognose fehlt."
      },
      {
        "label": "Alle drei wurden zu 101 gekauft, weil das ursprünglich der beste Ask war.",
        "explanation": "Nach der Stornierung lag dort nur noch eine Einheit."
      },
      {
        "label": "Drei Einheiten für 307 Euro; der vollständige Kaufgrund bleibt offen.",
        "explanation": "Richtig: Die Ausführungen sind bekannt, nicht die ganze Absicht des Käufers."
      }
    ],
    "correct": 2,
    "rule": "Bekannte Ereignisse erklären und unbekannte Absichten offenlassen."
  }
] as const;

export const marketBasicsChapterEightLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-08.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 8 · Warum bewegen sich Preise?', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 8', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
