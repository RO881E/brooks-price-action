import type { Lesson } from '../../types';

// Eigenständige Orderbuchfälle; Preis-, Zeit- und Reserveregeln gelten nur im jeweils erklärten Lernmodell.
const drafts = [
  {
    "title": "Das Orderbuch ist eine Momentaufnahme",
    "summary": "Wartende Angebote sind noch keine abgeschlossenen Geschäfte.",
    "paragraphs": [
      "Ein Orderbuch ist eine Übersicht über wartende Kauf- und Verkaufsaufträge. Du siehst, welche Preise angeboten werden und welche Mengen dazu gehören. Die Übersicht gilt für ein bestimmtes Produkt und einen bestimmten Handelsplatz. Sie ist keine Liste aller Menschen, die irgendwann handeln möchten.",
      "Stell dir eine Momentaufnahme um 10:00 vor. Ein Käufer bietet 99 Euro für vier Einheiten. Ein Verkäufer verlangt 101 Euro für drei Einheiten. Noch passen diese Bedingungen nicht zusammen. Die sichtbaren Aufträge sind deshalb noch kein neuer Handel.",
      "Schon kurz danach kann sich die Lage ändern. Neue Aufträge kommen hinzu, andere werden zurückgezogen oder ausgeführt. In diesem Kapitel nutzen wir erfundene Beispiele für gleiche Einheiten. Preise gelten in Euro; Gebühren fehlen, wenn nichts anderes dasteht. Jede Rechnung nennt ihre Annahmen."
    ],
    "columns": [
      {
        "title": "Die Anzeige jetzt",
        "tone": "neutral",
        "points": [
          "Produkt und Handelsplatz sind festgelegt.",
          "Bid: 4 Einheiten zu 99 Euro.",
          "Ask: 3 Einheiten zu 101 Euro."
        ]
      },
      {
        "title": "Was noch offen ist",
        "tone": "positive",
        "points": [
          "Die beiden Angebote passen noch nicht.",
          "Die nächste Anzeige kann anders aussehen."
        ]
      }
    ],
    "prompt": "Was zeigt diese Momentaufnahme sicher?",
    "answers": [
      {
        "label": "Die gerade sichtbaren Kauf- und Verkaufsangebote.",
        "explanation": "Richtig: Der Ausschnitt beschreibt Angebote zu diesem Zeitpunkt."
      },
      {
        "label": "Alle künftigen Käufe und Verkäufe.",
        "explanation": "Zukünftige Aufträge sind noch nicht bekannt."
      },
      {
        "label": "Einen bereits ausgeführten Handel bei 100 Euro.",
        "explanation": "Zwischen den Angeboten entsteht nicht automatisch ein Geschäft."
      }
    ],
    "correct": 0,
    "rule": "Ein Orderbuch zeigt einen Zustand zu einem bestimmten Zeitpunkt."
  },
  {
    "title": "Kaufseite und Verkaufsseite richtig lesen",
    "summary": "Bid will kaufen; Ask will verkaufen.",
    "paragraphs": [
      "Die Kaufseite heißt Bid-Seite. Dort stehen Preise, die Käufer bieten. Die Verkaufsseite heißt Ask-Seite. Dort stehen Preise, die Verkäufer verlangen. Manche Oberflächen zeigen beides nebeneinander. Andere nutzen eine gemeinsame Preisleiter. Lies deshalb immer die Beschriftung.",
      "Unser Beispielbuch enthält Kaufangebote von vier Einheiten zu 99, sechs zu 98 und acht zu 97 Euro. Verkäufer bieten drei zu 101, fünf zu 102 und vier zu 104 Euro. Für Käufer ist ein höheres Gebot besser. Für einen sofortigen Kauf ist dagegen das niedrigere Verkaufsangebot günstiger.",
      "Der beste Bid ist hier 99, der beste Ask 101. Willst du sofort kaufen, suchst du auf der Verkaufsseite. Willst du sofort verkaufen, suchst du auf der Kaufseite. Die Menge neben dem Preis gehört genau zu dieser Stufe. Sie gilt nicht automatisch für weitere Preise."
    ],
    "columns": [
      {
        "title": "Kaufangebote · Bid",
        "tone": "neutral",
        "points": [
          "99 Euro: 4 Einheiten.",
          "98 Euro: 6 Einheiten.",
          "97 Euro: 8 Einheiten."
        ]
      },
      {
        "title": "Verkaufsangebote · Ask",
        "tone": "positive",
        "points": [
          "101 Euro: 3 Einheiten.",
          "102 Euro: 5 Einheiten.",
          "104 Euro: 4 Einheiten."
        ]
      }
    ],
    "prompt": "Welche Seite brauchst du für einen sofortigen Kauf?",
    "answers": [
      {
        "label": "Nur den letzten Handelspreis.",
        "explanation": "Ein früherer Handel stellt noch keine neue Menge bereit."
      },
      {
        "label": "Die Verkaufsseite mit ihren Ask-Angeboten.",
        "explanation": "Richtig: Du brauchst jemanden, der dir Einheiten verkauft."
      },
      {
        "label": "Die Kaufseite, weil du selbst kaufen willst.",
        "explanation": "Dort stehen andere Kaufwünsche; du brauchst die Gegenseite."
      }
    ],
    "correct": 1,
    "rule": "Lies erst die Seite und danach Preis und Menge."
  },
  {
    "title": "Eine Menge ist keine Personenanzahl",
    "summary": "Mehrere Aufträge können in einer Zeile zusammengefasst sein.",
    "paragraphs": [
      "Eine Preisstufe ist eine Zeile oder ein Bereich für einen bestimmten Preis. Die dort angezeigte Menge kann aus mehreren Aufträgen bestehen. Stehen bei 99 Euro vier Einheiten, kann ein Auftrag alle vier anbieten. Es können auch mehrere Aufträge zusammen vier ergeben.",
      "Im Beispiel bietet Auftrag A eine Einheit und Auftrag B drei Einheiten zu 99. Eine zusammengefasste Anzeige zeigt dann 1 + 3 = 4. Dieselbe Zahl könnte auch aus vier Aufträgen zu je einer Einheit entstehen. Die reine Summe verrät diese Aufteilung nicht.",
      "Auch die Zahl der Aufträge ist nicht automatisch die Zahl der Menschen. Eine Person kann mehrere Aufträge einstellen. Ein Auftrag kann für einen Kunden bearbeitet werden. Aus einer Mengenzeile erkennst du deshalb weder sicher die Personenzahl noch die Namen oder Gründe der Beteiligten."
    ],
    "columns": [
      {
        "title": "Aufträge im Lernfall",
        "tone": "neutral",
        "points": [
          "Auftrag A: 1 Einheit zu 99.",
          "Auftrag B: 3 Einheiten zu 99."
        ]
      },
      {
        "title": "Zusammengefasste Anzeige",
        "tone": "positive",
        "points": [
          "Bei 99 stehen 4 Einheiten.",
          "Die Summe ist keine Personenliste."
        ]
      }
    ],
    "prompt": "Was beweisen vier sichtbare Einheiten bei 99 Euro?",
    "answers": [
      {
        "label": "Dass genau vier verschiedene Menschen kaufen wollen.",
        "explanation": "Ein Auftrag kann mehrere Einheiten umfassen."
      },
      {
        "label": "Dass genau eine Bank den ganzen Auftrag gestellt hat.",
        "explanation": "Die zusammengefasste Menge nennt keine sichere Identität."
      },
      {
        "label": "Dass dort insgesamt vier sichtbare Einheiten angeboten werden.",
        "explanation": "Richtig: Die Menge zählt Einheiten, nicht Menschen."
      }
    ],
    "correct": 2,
    "rule": "Menge, Auftragszahl und Personenzahl sind verschiedene Angaben."
  },
  {
    "title": "Preisleiter und leere Stufen",
    "summary": "Ein erlaubter Preis muss kein Angebot enthalten.",
    "paragraphs": [
      "Die kleinste erlaubte Preisänderung heißt Tick. Für unser erfundenes Produkt beträgt sie einen Euro. Daher sind zum Beispiel 101, 102, 103 und 104 erlaubte Preisstufen. Die Tickgröße sagt noch nichts darüber, ob auf jeder Stufe ein Auftrag liegt.",
      "In unserem Buch werden drei Einheiten zu 101, fünf zu 102 und vier zu 104 angeboten. Bei 103 liegt kein sichtbares Verkaufsangebot. Manche Anzeigen zeigen eine leere Zeile. Andere lassen die Zeile weg. In beiden Fällen fehlt in diesem Ausschnitt sichtbare Menge bei 103.",
      "Ein Käufer kann nach Verbrauch der Menge bei 102 das nächste Angebot bei 104 erreichen. Das wäre hier eine Lücke von zwei Ticks zwischen den belegten Stufen. Daraus folgt kein Handel bei 103. Prüfe Tickgröße und belegte Stufen getrennt."
    ],
    "columns": [
      {
        "title": "Erlaubte Preise",
        "tone": "neutral",
        "points": [
          "Tickgröße: 1 Euro.",
          "101, 102, 103 und 104 sind erlaubt."
        ]
      },
      {
        "title": "Sichtbare Verkaufsmenge",
        "tone": "positive",
        "points": [
          "101: 3; 102: 5; 103: 0; 104: 4.",
          "Die nächste belegte Stufe nach 102 ist 104."
        ]
      }
    ],
    "prompt": "Muss bei jedem erlaubten Preis eine Einheit angeboten werden?",
    "answers": [
      {
        "label": "Nein, eine Preisstufe kann leer sein.",
        "explanation": "Richtig: Preisraster und verfügbare Menge sind verschiedene Dinge."
      },
      {
        "label": "Ja, sonst wäre der Preis verboten.",
        "explanation": "Ein erlaubter Preis kann ohne sichtbaren Auftrag bleiben."
      },
      {
        "label": "Ja, die fehlende Zeile beweist einen Trade.",
        "explanation": "Eine leere Zeile belegt allein keine Ausführung."
      }
    ],
    "correct": 0,
    "rule": "Das Preisraster legt mögliche Preise fest, nicht vorhandene Angebote."
  },
  {
    "title": "Die besten Preise sind nur der Anfang",
    "summary": "Mehr Datentiefe zeigt weitere Preisstufen.",
    "paragraphs": [
      "Manche Anzeigen zeigen nur den besten Bid und den besten Ask samt Menge. Diese Sicht heißt Top of Book: die Spitze des Orderbuchs. Eine tiefere Ansicht zeigt zusätzliche Preisstufen. Dafür wird häufig der Begriff Markttiefe verwendet.",
      "Unsere einfache Anzeige zeigt Bid 99 mit vier und Ask 101 mit drei Einheiten. Die tiefere Ansicht zeigt zusätzlich 98 und 97 auf der Kaufseite sowie 102 und 104 auf der Verkaufsseite. Damit kannst du mehr über größere Aufträge rechnen. Die zusätzlichen Angebote sind trotzdem nur eine Momentaufnahme.",
      "Anbieter verwenden Namen wie Level 1 und Level 2 nicht völlig einheitlich. Prüfe deshalb die tatsächlichen Datenfelder. Wie viele Stufen siehst du? Von welchem Platz kommen sie? Werden Mengen zusammengefasst? Mehr Tiefe bedeutet nicht automatisch eine vollständige Sicht auf alle Handelswünsche."
    ],
    "columns": [
      {
        "title": "Nur die Spitze",
        "tone": "neutral",
        "points": [
          "Bester Bid: 99 mit 4 Einheiten.",
          "Bester Ask: 101 mit 3 Einheiten."
        ]
      },
      {
        "title": "Zusätzliche Tiefe",
        "tone": "positive",
        "points": [
          "Weitere Gebote: 98 und 97.",
          "Weitere Verkaufsangebote: 102 und 104."
        ]
      }
    ],
    "prompt": "Was verrät die beste Ask-Zeile allein über einen Kauf von sechs Einheiten?",
    "answers": [
      {
        "label": "Dass die tiefere Ansicht immer alle Märkte weltweit enthält.",
        "explanation": "Tiefe und Reichweite der Daten sind getrennte Angaben."
      },
      {
        "label": "Nur, dass drei Einheiten zu 101 sichtbar sind; weitere Stufen fehlen noch.",
        "explanation": "Richtig: Für sechs Einheiten brauchst du mehr als diese Zeile."
      },
      {
        "label": "Dass alle sechs zu 101 gekauft werden können.",
        "explanation": "Die sichtbare Menge beträgt dort nur drei."
      }
    ],
    "correct": 1,
    "rule": "Prüfe den Inhalt der Daten statt nur den Namen des Datenpakets."
  },
  {
    "title": "Mengen bis zu einer Preisgrenze addieren",
    "summary": "Die aufsummierte Tiefe zählt mehrere passende Stufen.",
    "paragraphs": [
      "Du kannst fragen: Wie viel sichtbare Verkaufsmenge liegt bis zu einem bestimmten Preis? Dafür addierst du nur die passenden Stufen. Die Summe heißt kumulierte Menge. Kumuliert bedeutet hier einfach aufaddiert. Die Summe ist noch keine ausgeführte Menge.",
      "Bei 101 liegen drei Einheiten. Bis einschließlich 102 kommen fünf hinzu: 3 + 5 = 8. Bis einschließlich 104 kommen weitere vier hinzu: 8 + 4 = 12. Bei 103 liegt nichts. Deshalb bleiben es bis 103 ebenfalls acht Einheiten.",
      "Diese Rechnung gilt für unseren unveränderten Ausschnitt. Sie verspricht keinen späteren Kauf von zwölf Einheiten. Andere könnten die Angebote vorher nutzen oder zurückziehen. Auch eine Grenze von 102 erlaubt nicht, die vier Einheiten zu 104 mitzuzählen."
    ],
    "columns": [
      {
        "title": "Einzelne Verkaufsstufen",
        "tone": "neutral",
        "points": [
          "101: 3 Einheiten.",
          "102: 5 Einheiten.",
          "104: 4 Einheiten."
        ]
      },
      {
        "title": "Aufaddierte Menge",
        "tone": "positive",
        "points": [
          "Bis 101: 3; bis 102: 8.",
          "Bis 103: 8; bis 104: 12."
        ]
      }
    ],
    "prompt": "Wie viel sichtbare Verkaufsmenge liegt bis einschließlich 102 Euro?",
    "answers": [
      {
        "label": "Zwölf Einheiten.",
        "explanation": "Die vier bei 104 liegen über der Grenze von 102."
      },
      {
        "label": "Fünf Einheiten.",
        "explanation": "Du musst die drei günstigeren Einheiten bei 101 mitzählen."
      },
      {
        "label": "Acht Einheiten.",
        "explanation": "Richtig: Drei bei 101 plus fünf bei 102 ergeben acht."
      }
    ],
    "correct": 2,
    "rule": "Für eine Preisgrenze zählen nur die Stufen, die sie einhalten."
  },
  {
    "title": "Liquidität: Preis und Menge gemeinsam betrachten",
    "summary": "Ein enger Spread allein erklärt keinen großen Auftrag.",
    "paragraphs": [
      "Liquidität beschreibt hier, wie gut du eine Menge handeln kannst, ohne den Preis stark zu verändern. Mehr passende Menge kann dabei helfen. Auch der Spread ist wichtig. Er ist der Abstand zwischen bestem Verkaufs- und Kaufangebot. Eine einzelne Zahl erklärt nicht alles.",
      "Buch A zeigt Bid 99 und Ask 100. Der Spread beträgt einen Euro. Am Ask liegt aber nur eine Einheit. Buch B zeigt Bid 99 und Ask 101. Der Spread beträgt zwei Euro. Dort liegen zehn Einheiten am Ask. Für einen Kauf von acht fehlen bei A weitere Angebote.",
      "Ohne die übrigen Stufen können wir den vollständigen Kaufpreis bei A nicht bestimmen. B stellt unter unseren Annahmen acht Einheiten zu 101 bereit. Das macht B nicht für jedes Geschäft besser. Beurteile Liquidität immer für eine bestimmte Menge, einen Zeitpunkt und erreichbare Angebote."
    ],
    "columns": [
      {
        "title": "Buch A",
        "tone": "neutral",
        "points": [
          "Bid 99; Ask 100; Spread 1 Euro.",
          "Am Ask: 1 Einheit."
        ]
      },
      {
        "title": "Buch B",
        "tone": "positive",
        "points": [
          "Bid 99; Ask 101; Spread 2 Euro.",
          "Am Ask: 10 Einheiten."
        ]
      }
    ],
    "prompt": "Beweist der kleinere Spread von A den günstigeren Kauf von acht Einheiten?",
    "answers": [
      {
        "label": "Nein, dafür fehlen bei A die weiteren Angebote und Mengen.",
        "explanation": "Richtig: Der beste Preis gilt hier nur für eine Einheit."
      },
      {
        "label": "Ja, ein kleinerer Spread entscheidet jeden Mengenvergleich.",
        "explanation": "Die gewünschte Menge kann weitere Preisstufen erreichen."
      },
      {
        "label": "Ja, zehn Einheiten bei B werden automatisch gehandelt.",
        "explanation": "Ein Angebot ist noch keine Ausführung."
      }
    ],
    "correct": 0,
    "rule": "Liquidität immer zusammen mit Menge, Preis und Zeitpunkt beurteilen."
  },
  {
    "title": "Sechs Einheiten kaufen: den Durchschnitt ausrechnen",
    "summary": "Der erste Preis gilt nur für die erste Teilmenge.",
    "paragraphs": [
      "Wir verwenden wieder unser gemeinsames Buch. Verkäufer bieten drei Einheiten zu 101 und fünf zu 102 Euro. Du möchtest sofort sechs kaufen und erlaubst beide Preise. Wir nehmen unveränderte Angebote und zuerst die günstigere Stufe an. Gebühren fehlen.",
      "Zuerst kaufst du drei für je 101: 3 × 101 = 303 Euro. Danach kaufst du drei für je 102: 3 × 102 = 306 Euro. Zusammen zahlst du 609 Euro. Der Durchschnitt ist 609 / 6 = 101,50 Euro je Einheit.",
      "Der letzte Teilpreis ist 102. Von den ursprünglich fünf Einheiten dort bleiben zwei übrig. Der erste Ask war 101, dein Durchschnitt 101,50. Beide beschreiben etwas anderes als der letzte Teilpreis 102. Erst die tatsächliche Bestätigung zeigt dir die realen Ausführungen."
    ],
    "columns": [
      {
        "title": "Ausführung im Lernfall",
        "tone": "neutral",
        "points": [
          "3 × 101 = 303 Euro.",
          "3 × 102 = 306 Euro."
        ]
      },
      {
        "title": "Ergebnis vor Kosten",
        "tone": "positive",
        "points": [
          "6 Einheiten; Preisbetrag 609 Euro.",
          "Durchschnitt 101,50; letzter Teilpreis 102.",
          "Bei 102 bleiben 2 Einheiten."
        ]
      }
    ],
    "prompt": "Wie groß ist der Durchschnittspreis für diese sechs Einheiten?",
    "answers": [
      {
        "label": "102 Euro, weil das der letzte Teilpreis war.",
        "explanation": "Die drei günstigeren Käufe gehören ebenfalls in den Durchschnitt."
      },
      {
        "label": "101,50 Euro vor Kosten.",
        "explanation": "Richtig: 609 Euro geteilt durch sechs ergibt 101,50."
      },
      {
        "label": "101 Euro, weil das der erste Ask war.",
        "explanation": "Nur drei der sechs Einheiten wurden zu 101 gekauft."
      }
    ],
    "correct": 1,
    "rule": "Den Durchschnitt aus Gesamtbetrag und tatsächlich gehandelter Menge rechnen."
  },
  {
    "title": "Sieben Einheiten verkaufen: die andere Seite nutzen",
    "summary": "Ein sofortiger Verkauf erreicht die Kaufgebote.",
    "paragraphs": [
      "Auf der Kaufseite stehen vier Einheiten zu 99 und sechs zu 98 Euro. Du möchtest sieben sofort verkaufen und erlaubst beide Preise. Im Beispiel bleiben die Angebote unverändert. Die Regel nutzt zuerst das höhere Kaufgebot. Gebühren fehlen wieder.",
      "Vier Einheiten bringen 4 × 99 = 396 Euro. Die übrigen drei bringen 3 × 98 = 294 Euro. Zusammen erhältst du 690 Euro. Der Durchschnitt ist 690 / 7 ≈ 98,57 Euro. Das Zeichen ≈ bedeutet ungefähr gleich; wir runden hier auf zwei Nachkommastellen.",
      "Der letzte Teilpreis liegt bei 98. Dort bleiben drei der ursprünglich sechs Kaufwünsche übrig. Sieben Einheiten wurden verkauft und dieselben sieben gekauft. Ein niedrigerer letzter Preis bedeutet nicht mehr verkaufte als gekaufte Einheiten. Die verfügbare Menge auf den Stufen erklärt den Ablauf."
    ],
    "columns": [
      {
        "title": "Verkauf im Lernfall",
        "tone": "neutral",
        "points": [
          "4 × 99 = 396 Euro.",
          "3 × 98 = 294 Euro."
        ]
      },
      {
        "title": "Ergebnis vor Kosten",
        "tone": "positive",
        "points": [
          "7 Einheiten; Preisbetrag 690 Euro.",
          "Durchschnitt etwa 98,57; letzter Teilpreis 98.",
          "Bei 98 bleiben 3 Einheiten."
        ]
      }
    ],
    "prompt": "Wie viel erhält der Verkäufer für die sieben Einheiten vor Kosten?",
    "answers": [
      {
        "label": "693 Euro.",
        "explanation": "Sieben mal 99 setzt zu viel Menge auf der besten Stufe voraus."
      },
      {
        "label": "686 Euro.",
        "explanation": "Sieben mal 98 lässt die vier besseren Verkäufe zu 99 weg."
      },
      {
        "label": "690 Euro.",
        "explanation": "Richtig: 396 plus 294 ergibt 690."
      }
    ],
    "correct": 2,
    "rule": "Beim Verkauf zuerst die tatsächlich genutzten Kaufgebote rechnen."
  },
  {
    "title": "Eine Lücke kann den nächsten Teilpreis verändern",
    "summary": "Wenig Tiefe kann größere Preisunterschiede bedeuten.",
    "paragraphs": [
      "Verkäufer bieten drei Einheiten zu 101, fünf zu 102 und vier zu 104 Euro. Bei 103 fehlt ein sichtbares Angebot. Du willst zehn sofort kaufen und erlaubst alle genannten Preise. Unsere Regeln nutzen die günstigeren Stufen zuerst. Alle Angebote bleiben in diesem Fall bestehen.",
      "Drei zu 101 kosten 303 Euro. Fünf zu 102 kosten 510 Euro. Für die restlichen zwei musst du hier 104 akzeptieren: 2 × 104 = 208 Euro. Der Gesamtbetrag ist 303 + 510 + 208 = 1.021 Euro. Der Durchschnitt ist 1.021 / 10 = 102,10 Euro.",
      "Die letzte Ausführung liegt bei 104, ohne dass zuvor bei 103 gehandelt werden musste. Dort lag ja keine Menge. Zwei angebotene Einheiten bei 104 bleiben übrig. Diese Rechnung zeigt die Preiswirkung im Lernfall. Sie verspricht nicht, dass echte Angebote bis zu deinem Auftrag unverändert bleiben."
    ],
    "columns": [
      {
        "title": "Genutzte Verkaufsstufen",
        "tone": "neutral",
        "points": [
          "3 zu 101; 5 zu 102; 2 zu 104.",
          "Keine Ausführung bei 103."
        ]
      },
      {
        "title": "Ergebnis vor Kosten",
        "tone": "positive",
        "points": [
          "303 + 510 + 208 = 1.021 Euro.",
          "Durchschnitt 102,10; letzter Teilpreis 104.",
          "Bei 104 bleiben 2 Einheiten."
        ]
      }
    ],
    "prompt": "Muss zwischen den Ausführungen bei 102 und 104 auch ein Trade bei 103 stattfinden?",
    "answers": [
      {
        "label": "Nein, dort gibt es in diesem Fall kein sichtbares Angebot.",
        "explanation": "Richtig: Eine leere Stufe muss nicht gehandelt werden."
      },
      {
        "label": "Ja, jeder erlaubte Tick muss einmal ausgeführt werden.",
        "explanation": "Das Preisraster schreibt keine Geschäfte auf jeder Stufe vor."
      },
      {
        "label": "Ja, der Durchschnitt beweist einen Trade bei 103.",
        "explanation": "Ein Durchschnitt kann zwischen tatsächlichen Teilpreisen liegen."
      }
    ],
    "correct": 0,
    "rule": "Eine leere Preisstufe ist kein fehlender Pflicht-Trade."
  },
  {
    "title": "Eine Preisgrenze kann den Rest warten lassen",
    "summary": "Ein Limit begrenzt den Preis, nicht die Wartezeit.",
    "paragraphs": [
      "Du willst vier Einheiten kaufen, zahlst aber höchstens 101 Euro je Einheit. Diese obere Preisgrenze heißt Kauflimit. Drei Einheiten stehen zu 101 bereit. Das nächste Verkaufsangebot liegt bei 102. Es überschreitet deine Grenze und passt deshalb nicht.",
      "In unserem Fall werden drei zu 101 gekauft. Das kostet 303 Euro vor Gebühren. Eine gewünschte Einheit bleibt offen. Wir legen für dieses Beispiel fest, dass der restliche Auftrag gültig bleibt und wartet. Andere Auftragsbedingungen können den Rest anders behandeln.",
      "Das Limit verspricht keinen vollständigen Kauf. Es sagt hier nur, welchen Preis der Auftrag höchstens erlaubt. Erst neue passende Angebote könnten die übrige Einheit ermöglichen. Auch ein berührter Preis beweist keine Ausführung deines ganzen Auftrags. Die genauen Auftragsarten erklären wir später."
    ],
    "columns": [
      {
        "title": "Auftrag und Angebote",
        "tone": "neutral",
        "points": [
          "Kaufwunsch: 4 Einheiten; Limit 101.",
          "Ask 101: 3; nächster Ask 102."
        ]
      },
      {
        "title": "Ergebnis im Lernfall",
        "tone": "positive",
        "points": [
          "3 gekauft für 303 Euro.",
          "1 bleibt gültig und wartet."
        ]
      }
    ],
    "prompt": "Warum wird die vierte Einheit hier nicht zu 102 gekauft?",
    "answers": [
      {
        "label": "Weil die ersten drei Käufe schon vier Einheiten ergeben.",
        "explanation": "Drei ausgeführte Einheiten lassen eine von vier offen."
      },
      {
        "label": "Weil 102 über der erlaubten Kaufgrenze liegt.",
        "explanation": "Richtig: Das Beispiel erlaubt höchstens 101 je Einheit."
      },
      {
        "label": "Weil ein Limit immer die volle Menge zu jedem Preis kauft.",
        "explanation": "Ein Limit erlaubt gerade nicht jeden Preis."
      }
    ],
    "correct": 1,
    "rule": "Preisgrenze und vollständige Ausführung getrennt prüfen."
  },
  {
    "title": "Preisvorrang: der bessere Preis kommt zuerst",
    "summary": "Unsere Beispielregel nutzt zuerst das günstigere Gegenangebot.",
    "paragraphs": [
      "Ein Handelssystem braucht Regeln dafür, welche Aufträge zuerst zusammenkommen. Eine solche Regel ist Preisvorrang. Für unseren sofortigen Käufer wird zuerst das günstigste Verkaufsangebot genutzt. Für unseren sofortigen Verkäufer wird zuerst das höchste Kaufangebot genutzt.",
      "Verkäuferin A bietet eine Einheit zu 102. Später bietet Verkäuferin B eine zu 101. Nach unserer Regel wird bei einem passenden Kauf zuerst B bedient. Ihr günstigerer Preis hat Vorrang, obwohl ihr Auftrag später kam. Die Ankunftszeit allein entscheidet hier also nicht.",
      "Erst bei gleich guten Preisen wird eine weitere Regel nötig. Diese Regel kann je nach Markt verschieden sein. Im nächsten Beispiel legen wir zusätzlich Zeitvorrang fest. Damit unterscheiden wir klar zwischen der Wahl der Preisstufe und der Reihenfolge innerhalb derselben Stufe."
    ],
    "columns": [
      {
        "title": "Verkaufsangebote",
        "tone": "neutral",
        "points": [
          "A: früher angekommen, Preis 102.",
          "B: später angekommen, Preis 101."
        ]
      },
      {
        "title": "Preisvorrang im Modell",
        "tone": "positive",
        "points": [
          "Ein passender Käufer nutzt zuerst 101.",
          "Bei gleichem Preis braucht es eine weitere Regel."
        ]
      }
    ],
    "prompt": "Welches Angebot nutzt unser Käufer zuerst?",
    "answers": [
      {
        "label": "Das Angebot von A zu 102 Euro allein wegen seiner früheren Ankunft.",
        "explanation": "Die Zeitregel ersetzt hier nicht den Preisvorrang."
      },
      {
        "label": "Beide stets zur gleichen Zeit und zum selben Preis.",
        "explanation": "Dafür gibt es in diesem fortlaufenden Beispiel keine Regel."
      },
      {
        "label": "Das Angebot von B zu 101 Euro.",
        "explanation": "Richtig: Der günstigere Verkaufspreis hat hier Vorrang."
      }
    ],
    "correct": 2,
    "rule": "Zuerst die Preisstufe, dann die Reihenfolge auf dieser Stufe prüfen."
  },
  {
    "title": "Zeitvorrang: eine Warteschlange am selben Preis",
    "summary": "Ein passender Preis bedeutet nicht, dass du als Erster dran bist.",
    "paragraphs": [
      "Mehrere Aufträge können denselben Preis haben. Für diesen Lernfall gilt Zeitvorrang: Früher eingetroffene Aufträge kommen am selben Preis zuerst. Das wird auch FIFO genannt. Es bedeutet sinngemäß: zuerst hinein, zuerst heraus. Wir setzen hier nur sichtbare Aufträge ohne Änderungen voraus.",
      "Bei Bid 99 steht zuerst A mit drei Einheiten. Danach kommt B mit zwei. Dein Auftrag über zwei steht zuletzt. Nun verkauft jemand vier Einheiten an dieses Gebot. A erhält drei; B erhält eine. Du erhältst noch keine. Vor dir bleibt eine Einheit von B.",
      "Eine zusammengefasste Zeile mit sieben Einheiten zeigt diese Reihenfolge nicht allein. Du brauchst die passenden Auftragsdaten und Regeln. Andere Märkte können Mengen anders aufteilen. Unsere Zeitregel gilt deshalb ausdrücklich für diesen Fall und ist keine allgemeine Zusage für jedes Produkt."
    ],
    "columns": [
      {
        "title": "Warteschlange bei 99",
        "tone": "neutral",
        "points": [
          "A zuerst: 3; B danach: 2; du zuletzt: 2.",
          "Zusammen: 7 Kaufwünsche."
        ]
      },
      {
        "title": "Ein Verkauf von 4 trifft ein",
        "tone": "positive",
        "points": [
          "A kauft 3; B kauft 1; du kaufst 0.",
          "Vor dir bleibt 1 Einheit von B."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten erhält dein letzter Auftrag nach diesem Verkauf von vier?",
    "answers": [
      {
        "label": "Keine.",
        "explanation": "Richtig: Die vier Verkäufe werden zunächst den früheren Aufträgen zugeteilt."
      },
      {
        "label": "Zwei, weil dein Limit ebenfalls 99 ist.",
        "explanation": "Derselbe Preis überspringt hier nicht die Warteschlange."
      },
      {
        "label": "Vier, weil der Verkauf vier Einheiten umfasst.",
        "explanation": "Dein Auftrag hat nur zwei Einheiten und steht außerdem hinten."
      }
    ],
    "correct": 0,
    "rule": "Ein passender Preis ersetzt nicht die Prüfung deiner Warteschlange."
  },
  {
    "title": "Warteschlange und Teilausführung zusammen rechnen",
    "summary": "Erst nach der Menge vor dir ist dein Auftrag an der Reihe.",
    "paragraphs": [
      "Wir starten wieder mit A: drei, B: zwei und deinem Auftrag: zwei Einheiten bei 99. Die Zeitregel bleibt gleich. Keine Aufträge werden geändert oder zurückgezogen. Dieses Mal treffen sechs passende Verkaufseinheiten ein. Das ist ein neuer Fall mit dem ursprünglichen Buch.",
      "A erhält zunächst drei. B erhält danach zwei. Von den sechs Verkäufen bleibt nun eine Einheit: 6 − 3 − 2 = 1. Diese eine wird deinem Auftrag zugeteilt. Von deinen gewünschten zwei bleibt eine offen. Insgesamt wurden sechs Einheiten gehandelt.",
      "Für dich ist das eine Teilausführung. Der Preis 99 wurde erreicht, aber dein Auftrag ist nicht vollständig erledigt. Der restliche Auftrag wartet nach unserer festgelegten Gültigkeit weiter. Für einen echten Auftrag zählt der bestätigte Status, nicht allein eine Preisberührung im Chart."
    ],
    "columns": [
      {
        "title": "Vor deinem Auftrag",
        "tone": "neutral",
        "points": [
          "A: 3 Einheiten; B: 2 Einheiten.",
          "Insgesamt 5 Einheiten vor dir."
        ]
      },
      {
        "title": "Sechs passende Verkäufe",
        "tone": "positive",
        "points": [
          "6 − 5 = 1 Einheit für dich.",
          "1 deiner 2 Einheiten bleibt offen."
        ]
      }
    ],
    "prompt": "Wie viel deines Auftrags wird in diesem neuen Fall ausgeführt?",
    "answers": [
      {
        "label": "Keine, weil ein Auftrag nie teilweise ausgeführt werden kann.",
        "explanation": "Unser Fall erlaubt ausdrücklich eine Teilausführung."
      },
      {
        "label": "Eine Einheit; eine bleibt offen.",
        "explanation": "Richtig: Erst werden die fünf früheren Einheiten bedient."
      },
      {
        "label": "Beide Einheiten, weil der Preis 99 gehandelt wurde.",
        "explanation": "Die Menge reicht nach den früheren Aufträgen nur für eine."
      }
    ],
    "correct": 1,
    "rule": "Preisberührung, zugeteilte Menge und Auftragsstatus getrennt lesen."
  },
  {
    "title": "Einen Auftrag ändern kann seine Reihenfolge verändern",
    "summary": "Die genaue Änderungsregel gehört zum Produkt.",
    "paragraphs": [
      "Willst du einen Auftrag ändern, musst du die Regeln zur Reihenfolge beachten. Eine Änderung kann den bisherigen Vorrang verlieren lassen. Es hängt von der Art der Änderung und dem Handelssystem ab. Es gibt deshalb keine allgemeine Zusage, dass jede Änderung die Warteposition erhält.",
      "In unserem neuen Fall stehen bei 99 zuerst A mit drei Einheiten, dann du mit zwei und danach B mit einer. Du ziehst deinen Auftrag zurück und stellst ihn neu ein. Wir legen fest: Der neue Auftrag kommt ans Ende. Nun stehen A und B vor dir.",
      "Vorher lagen drei Einheiten vor dir. Jetzt sind es 3 + 1 = 4. Dass Preis und Menge deines neuen Auftrags gleich aussehen, bewahrt hier nicht den alten Platz. Die neue Zeit zählt nach unserer Regel. Für echte Änderungen musst du die konkreten Bedingungen prüfen."
    ],
    "columns": [
      {
        "title": "Vor dem Zurückziehen",
        "tone": "neutral",
        "points": [
          "Reihenfolge: A mit 3, du mit 2, B mit 1.",
          "Vor dir: 3 Einheiten."
        ]
      },
      {
        "title": "Nach dem Neueinstellen",
        "tone": "positive",
        "points": [
          "Reihenfolge: A mit 3, B mit 1, du mit 2.",
          "Vor dir: 4 Einheiten."
        ]
      }
    ],
    "prompt": "Warum steht dein Auftrag im Beispiel nun hinter B?",
    "answers": [
      {
        "label": "Weil jede unveränderte Preiszahl weltweit die Reihenfolge erhält.",
        "explanation": "Die Preiszahl allein entscheidet nicht über die Zeitregel."
      },
      {
        "label": "Weil B dadurch automatisch schon eine Einheit gekauft hat.",
        "explanation": "Die neue Reihenfolge ist noch keine Ausführung."
      },
      {
        "label": "Weil der neu eingestellte Auftrag nach unserer Regel eine neue Zeit bekommt.",
        "explanation": "Richtig: Die frühere Warteposition wurde hier nicht behalten."
      }
    ],
    "correct": 2,
    "rule": "Vor einer Änderung auch die mögliche Wirkung auf die Reihenfolge prüfen."
  },
  {
    "title": "Neue Menge: das Buch kann ohne Handel wachsen",
    "summary": "Ein neuer Auftrag verändert zuerst das Angebot.",
    "paragraphs": [
      "Ein neuer Auftrag kann die sichtbare Menge erhöhen. Dazu muss kein Handel stattfinden. Er kann hinter vorhandenen Aufträgen warten oder eine neue Preisstufe bilden. Du musst deshalb zwischen neuer Menge im Buch und bereits gehandelter Menge unterscheiden.",
      "Bei Bid 99 stehen zunächst vier Einheiten. Ein zusätzlicher Kaufauftrag stellt zwei bei demselben Preis ein. Die sichtbare Summe wächst auf 4 + 2 = 6. Der beste Ask bleibt bei 101. Beide Seiten passen weiterhin nicht unmittelbar zusammen.",
      "Wir legen fest, dass in diesem Schritt nur der neue Auftrag einging. Das Handelsvolumen steigt dadurch nicht. Handelsvolumen zählt ausgeführte Einheiten. Der letzte Handelspreis bleibt ebenfalls unverändert. Eine größere Kaufseite ist somit zunächst eine Änderung der Bereitschaft, nicht der Beweis eines Kaufs."
    ],
    "columns": [
      {
        "title": "Vorher und neu",
        "tone": "neutral",
        "points": [
          "Bei Bid 99: zuerst 4 Einheiten.",
          "Neuer Auftrag: 2 weitere bei 99."
        ]
      },
      {
        "title": "Nach dem Ereignis",
        "tone": "positive",
        "points": [
          "Bei Bid 99: nun 6 Einheiten.",
          "Kein neuer Trade; kein zusätzliches Handelsvolumen."
        ]
      }
    ],
    "prompt": "Wie viel zusätzliches Handelsvolumen entsteht durch diesen wartenden Auftrag?",
    "answers": [
      {
        "label": "Keines.",
        "explanation": "Richtig: Der Fall enthält keine Ausführung."
      },
      {
        "label": "Zwei Einheiten.",
        "explanation": "Die zwei wurden nur angeboten, noch nicht gehandelt."
      },
      {
        "label": "Sechs Einheiten.",
        "explanation": "Die Summe der wartenden Menge ist kein Handelsvolumen."
      }
    ],
    "correct": 0,
    "rule": "Neue Buchmenge und neues Handelsvolumen nicht verwechseln."
  },
  {
    "title": "Zurückgezogene Menge: der beste Bid kann fallen",
    "summary": "Ein niedrigeres Gebot braucht keinen neuen Verkauf.",
    "paragraphs": [
      "Ein offener Auftrag kann nach den Regeln zurückgezogen werden. Das heißt Stornierung. Die angebotene Menge verschwindet dann, ohne ausgeführt zu werden. Wenn dabei die ganze beste Preisstufe leer wird, kann der nächste sichtbare Preis an ihre Stelle treten.",
      "Im ursprünglichen Buch stehen vier Kaufwünsche bei 99 und sechs bei 98. Wir legen fest: Alle vier bei 99 werden storniert. Weitere Änderungen gibt es nicht. Der beste Bid fällt auf 98. Die sechs Einheiten dort bleiben angeboten.",
      "Keiner hat durch diese Stornierung die vier Einheiten verkauft. Der letzte Trade bleibt in diesem Schritt unverändert. Mit Ask 101 wächst der Spread von 2 auf 3 Euro. Ein veränderter bester Preis kann deshalb aus einer Stornierung entstehen, ohne neuen Handel."
    ],
    "columns": [
      {
        "title": "Stornierung im Beispiel",
        "tone": "neutral",
        "points": [
          "4 Kaufwünsche bei 99 werden entfernt.",
          "Bei 98 bleiben 6 Einheiten."
        ]
      },
      {
        "title": "Neue Angebotslage",
        "tone": "positive",
        "points": [
          "Bester Bid 98; bester Ask 101.",
          "Spread 3 Euro; kein neuer Trade."
        ]
      }
    ],
    "prompt": "Warum fällt hier der beste Bid auf 98?",
    "answers": [
      {
        "label": "Weil der letzte Trade automatisch auf 98 springen muss.",
        "explanation": "Ein neues Gebot ist nicht der letzte Handelspreis."
      },
      {
        "label": "Weil die gesamte sichtbare Kaufmenge bei 99 zurückgezogen wurde.",
        "explanation": "Richtig: Der Fall nennt eine Stornierung, keine Ausführung."
      },
      {
        "label": "Weil vier Einheiten sicher zu 99 verkauft wurden.",
        "explanation": "Diese Einheiten wurden ausdrücklich storniert."
      }
    ],
    "correct": 1,
    "rule": "Ein veränderter bester Preis kann auch ohne Trade entstehen."
  },
  {
    "title": "Eine Ausführung verändert Buch und Handelsliste",
    "summary": "Gehandelte Menge wird einmal gezählt.",
    "paragraphs": [
      "Die Handelsliste zeigt bereits abgeschlossene Geschäfte. Dafür wird auch der Ausdruck Time and Sales verwendet: Zeit und Verkäufe. Sie ist etwas anderes als das Orderbuch mit wartenden Angeboten. Zusammen können beide Anzeigen helfen, ein Ereignis zu verstehen.",
      "Anfangs stehen drei Verkaufseinheiten bei 101. Ein Käufer nimmt zwei davon an. Weitere Änderungen gibt es in diesem Fall nicht. Die Handelsliste meldet zwei Einheiten zu 101. Im Buch bleibt eine Einheit bei 101. Der letzte Handelspreis ist nun 101.",
      "Das Handelsvolumen beträgt hier zwei Einheiten. Du addierst die gekauften und verkauften Einheiten nicht zu vier. Es sind dieselben zwei im Austausch. Nur mit dem bekannten Ereignis können wir die Mengenänderung hier eindeutig als Ausführung erklären."
    ],
    "columns": [
      {
        "title": "Vor dem Trade",
        "tone": "neutral",
        "points": [
          "Ask 101: 3 Einheiten.",
          "Ein Käufer akzeptiert davon 2."
        ]
      },
      {
        "title": "Nach dem Trade",
        "tone": "positive",
        "points": [
          "Ask 101: 1 Einheit bleibt.",
          "Handelsliste: 2 zu 101; Volumen 2."
        ]
      }
    ],
    "prompt": "Wie viele Einheiten zählt das Handelsvolumen dieses Austauschs?",
    "answers": [
      {
        "label": "Vier.",
        "explanation": "Das würde beide Seiten desselben Austauschs doppelt zählen."
      },
      {
        "label": "Drei.",
        "explanation": "Die ursprüngliche Angebotsmenge wurde nicht vollständig gehandelt."
      },
      {
        "label": "Zwei.",
        "explanation": "Richtig: Die zwei gekauften und verkauften Einheiten sind dieselben."
      }
    ],
    "correct": 2,
    "rule": "Orderbuch für Angebote, Handelsliste für abgeschlossene Geschäfte nutzen."
  },
  {
    "title": "Zwei Bilder verraten nicht jeden Zwischenschritt",
    "summary": "Ein Rückgang kann mehrere Ursachen haben.",
    "paragraphs": [
      "Eine Momentaufnahme heißt auch Snapshot. Zwei Snapshots zeigen zwei Zustände. Sie zeigen nicht automatisch alle Ereignisse dazwischen. Weniger Menge kann durch Ausführungen, Stornierungen oder mehrere Änderungen entstanden sein. Neue Aufträge können zugleich hinzugekommen sein.",
      "Das erste Bild zeigt drei Einheiten am Ask 101. Das zweite zeigt eine. Möglich wäre ein Kauf von zwei ohne weitere Änderung. Möglich wäre auch eine Stornierung von zwei. Ein weiterer Fall wäre: ein Trade von drei und danach ein neuer Verkaufsauftrag über eine Einheit.",
      "Alle drei Abläufe passen zu denselben zwei Mengenbildern. Sie ergeben aber verschiedene Handelsvolumen. Ohne weitere Daten wissen wir nicht, welcher tatsächlich geschah. Nutze passende Ereignis- und Handelsdaten. Eine Differenz von zwei im Buch ist allein kein sicherer Trade von zwei."
    ],
    "columns": [
      {
        "title": "Nur die Bilder",
        "tone": "neutral",
        "points": [
          "Erster Snapshot: Ask 101 mit 3.",
          "Zweiter Snapshot: Ask 101 mit 1."
        ]
      },
      {
        "title": "Mögliche Abläufe",
        "tone": "positive",
        "points": [
          "2 gehandelt oder 2 storniert.",
          "Auch möglich: 3 gehandelt, danach 1 neu."
        ]
      }
    ],
    "prompt": "Was ist durch die zwei Bilder allein sicher?",
    "answers": [
      {
        "label": "Die sichtbare Menge ist von drei auf eine gesunken; der Ablauf bleibt offen.",
        "explanation": "Richtig: Die Zustände belegen nicht eindeutig die Ereignisse dazwischen."
      },
      {
        "label": "Genau zwei Einheiten wurden gehandelt.",
        "explanation": "Auch eine Stornierung könnte dieselbe Änderung erklären."
      },
      {
        "label": "Niemand hat in der Zwischenzeit einen neuen Auftrag gestellt.",
        "explanation": "Neue Aufträge können zwischen den Aufnahmen eingegangen sein."
      }
    ],
    "correct": 0,
    "rule": "Aus Zustandsbildern keine eindeutige Ereignisfolge erfinden."
  },
  {
    "title": "Versteckte Restmenge: die Anzeige kann nur einen Teil zeigen",
    "summary": "Eine Iceberg-Order veröffentlicht nicht die ganze Menge.",
    "paragraphs": [
      "Manche Aufträge zeigen nur einen Teil ihrer Gesamtmenge. Den unsichtbaren Rest nennt man Reserve. Eine solche Gestaltung heißt häufig Iceberg-Order. Der Vergleich meint einen Eisberg: Nur ein Teil ist sichtbar. Ob ein Produkt das erlaubt und wie nachgefüllt wird, bestimmen seine Regeln.",
      "Nur für unseren Lernfall ist bekannt: Eine Verkaufsorder hat zwölf Einheiten bei 101. Sie zeigt jeweils höchstens drei. Nach dem Handel der ersten drei werden drei weitere sichtbar. Davon wird noch eine gekauft. Insgesamt wurden vier gehandelt. Acht sind insgesamt übrig, davon zwei jetzt sichtbar.",
      "Dieser Ablauf ist ausdrücklich gegeben. In einer unbekannten Anzeige wäre nachkommende Menge allein kein sicherer Beweis für genau diese Order. Auch neue Aufträge könnten Menge ergänzen. Ebenso verrät der Ablauf nicht den Eigentümer oder sein Ziel. Sichtbare Tiefe ist daher nicht immer die gesamte handelbare Menge."
    ],
    "columns": [
      {
        "title": "Gegebene Beispielorder",
        "tone": "neutral",
        "points": [
          "Gesamtmenge 12; sichtbar höchstens 3.",
          "3 gehandelt, 3 nachgefüllt, davon 1 gehandelt."
        ]
      },
      {
        "title": "Stand nach 4 gehandelten Einheiten",
        "tone": "positive",
        "points": [
          "12 − 4 = 8 insgesamt übrig.",
          "Jetzt sichtbar 2; Reserve 6."
        ]
      }
    ],
    "prompt": "Wie viel der gegebenen Gesamtorder bleibt nach vier gehandelten Einheiten?",
    "answers": [
      {
        "label": "Zwölf, weil nur sichtbare Mengen zählen.",
        "explanation": "Vier Einheiten der Gesamtorder wurden tatsächlich verkauft."
      },
      {
        "label": "Acht Einheiten, davon jetzt zwei sichtbar.",
        "explanation": "Richtig: Die Reserve gehört zur bekannten Gesamtorder, steht aber nicht vollständig in der Anzeige."
      },
      {
        "label": "Keine, weil anfangs nur drei angezeigt wurden.",
        "explanation": "Im beschriebenen Fall ist die Gesamtmenge ausdrücklich zwölf."
      }
    ],
    "correct": 1,
    "rule": "Sichtbare Menge nicht automatisch mit Gesamtmenge gleichsetzen."
  },
  {
    "title": "Preiszeilen oder Einzelaufträge: verschiedene Datensichten",
    "summary": "Mehr Details zeigen nicht automatisch die Namen der Menschen.",
    "paragraphs": [
      "Eine Datensicht kann alle sichtbaren Aufträge je Preis zusammenfassen. Dafür wird der Name Market by Price verwendet. Eine andere Sicht kann einzelne Aufträge mit anonymen Kennungen zeigen. Sie heißt Market by Order. Welche Felder du bekommst, hängt vom konkreten Datenangebot ab.",
      "Bei 99 steht eine Summe von sechs Einheiten. Mit Einzelauftragsdaten könntest du zum Beispiel Auftrag X mit zwei und Auftrag Y mit vier sehen. X und Y sind hier Kennungen von Aufträgen. Sie sind keine Namen von Personen, Banken oder Fonds.",
      "Auch detaillierte Daten zeigen nicht automatisch alle anderen Anlagen eines Teilnehmers. Versteckte Mengen und andere Plätze können fehlen. Prüfe deshalb zuerst Inhalt und Reichweite deiner Daten. Eine Auftragskennung hilft beim Verfolgen eines Auftrags, nicht beim sicheren Erraten seines Eigentümers."
    ],
    "columns": [
      {
        "title": "Nach Preis zusammengefasst",
        "tone": "neutral",
        "points": [
          "Bei 99: insgesamt 6 Einheiten.",
          "Die einzelne Aufteilung fehlt."
        ]
      },
      {
        "title": "Einzelaufträge im Beispiel",
        "tone": "positive",
        "points": [
          "X: 2; Y: 4; zusammen 6.",
          "Die Kennungen nennen keinen sicheren Eigentümer."
        ]
      }
    ],
    "prompt": "Beweist die Kennung X, dass ein bestimmter Fonds dahintersteht?",
    "answers": [
      {
        "label": "Ja, jede Kennung nennt den vollständigen Kundennamen.",
        "explanation": "Unser Beispiel verwendet ausdrücklich anonyme Kennungen."
      },
      {
        "label": "Ja, sechs Einheiten können nur von einem Fonds stammen.",
        "explanation": "Die Größe allein bestimmt keine Teilnehmerart."
      },
      {
        "label": "Nein, sie kennzeichnet hier einen Auftrag, nicht sicher seinen Eigentümer.",
        "explanation": "Richtig: Anonyme Auftragsdaten sind keine Personenliste."
      }
    ],
    "correct": 2,
    "rule": "Detailgrad der Daten und bekannte Identität getrennt betrachten."
  },
  {
    "title": "Eine große Zeile ist keine feste Schutzmauer",
    "summary": "Angebotene Menge kann genutzt oder zurückgezogen werden.",
    "paragraphs": [
      "Eine besonders große sichtbare Menge wird manchmal Liquiditätswand genannt. Das ist ein Bild, keine echte Mauer. Die Zeile zeigt ein Angebot unter bestimmten Bedingungen. Sie kann gehandelt, geändert oder zurückgezogen werden. Sie verspricht keine unveränderliche Grenze für den Preis.",
      "Unser Buch zeigt 30 Kaufwünsche bei 99 und nur zwei bei 98. Das ist viel sichtbare Menge auf einer Stufe. Ein Verkäufer könnte diese Menge nutzen, wenn sie erreichbar und noch gültig ist. Der Anbieter könnte sie vorher aber auch nach den Regeln zurückziehen.",
      "Aus der Größe allein folgt weder ein sicherer Kursanstieg noch eine bekannte Person. Verschwindet die Menge, belegt das ebenfalls nicht allein eine absichtliche Täuschung. Dafür wären weitere Informationen nötig. Beschreibe zuerst Größe, Zeitpunkt und beobachtete Ereignisse, statt der Zeile eine sichere Geschichte zu geben."
    ],
    "columns": [
      {
        "title": "Sichtbare Lage",
        "tone": "neutral",
        "points": [
          "Bid 99: 30 Einheiten.",
          "Bid 98: 2 Einheiten."
        ]
      },
      {
        "title": "Grenze der Aussage",
        "tone": "positive",
        "points": [
          "Die 30 sind ein aktuelles Angebot.",
          "Keine garantierte Preisgrenze oder bekannte Absicht."
        ]
      }
    ],
    "prompt": "Was lässt sich aus den 30 Einheiten bei 99 sicher ableiten?",
    "answers": [
      {
        "label": "Dort steht im beobachteten Ausschnitt eine große sichtbare Kaufmenge.",
        "explanation": "Richtig: Mehr belegt die Mengenzeile allein nicht."
      },
      {
        "label": "Der Preis kann nie unter 99 fallen.",
        "explanation": "Ein Angebot ist keine dauerhafte Preisgarantie."
      },
      {
        "label": "Eine bestimmte Bank muss danach den Preis erhöhen.",
        "explanation": "Die Anzeige beweist weder die Identität noch einen solchen Plan."
      }
    ],
    "correct": 0,
    "rule": "Große sichtbare Menge beschreibt ein Angebot, keine sichere Zukunft."
  },
  {
    "title": "Ungleiche Buchmengen sind noch keine Kursprognose",
    "summary": "Die gewählte Tiefe bestimmt, was dein Vergleich zählt.",
    "paragraphs": [
      "Du kannst die sichtbaren Mengen beider Seiten vergleichen. Das nennt man oft Buchungleichgewicht oder Book Imbalance. Zuerst musst du festlegen, welche Stufen zählen. Die besten Preise allein können einen anderen Vergleich ergeben als mehrere Stufen zusammen.",
      "Unser gemeinsames Buch zeigt drei Bid-Stufen mit 4 + 6 + 8 = 18 Einheiten. Die drei Ask-Stufen ergeben 3 + 5 + 4 = 12. Zusammen sind es 30 sichtbare Einheiten. Davon stehen 18 / 30 = 0,60, also 60 %, auf der Kaufseite. Das zählt wartende Angebote, keine abgeschlossenen Käufe.",
      "Ein anderer Ausschnitt könnte einen anderen Anteil zeigen. Die Mengen können sich außerdem schnell ändern. Hier liegen die dritten Stufen auf beiden Seiten nicht einmal gleich weit vom besten Preis entfernt. Die 60 % versprechen daher keinen Kursanstieg. Benenne Stufen, Zeitpunkt und Datenquelle zusammen mit deiner Zahl."
    ],
    "columns": [
      {
        "title": "Drei Stufen je Seite",
        "tone": "neutral",
        "points": [
          "Bid: 4 + 6 + 8 = 18.",
          "Ask: 3 + 5 + 4 = 12."
        ]
      },
      {
        "title": "Rechnung für diesen Ausschnitt",
        "tone": "positive",
        "points": [
          "Gesamt: 30; Bid-Anteil: 18 / 30 = 60 %.",
          "Kein Beweis für mehr ausgeführte Käufe."
        ]
      }
    ],
    "prompt": "Was bedeuten die 60 % in diesem Beispiel?",
    "answers": [
      {
        "label": "Es wurden 18 gekauft und nur 12 verkauft.",
        "explanation": "Die Zahlen beschreiben wartende Angebote, keine ungleichen Ausführungen."
      },
      {
        "label": "60 % der gezählten sichtbaren Angebotsmenge stehen auf der Bid-Seite.",
        "explanation": "Richtig: Die Zahl gilt für die ausgewählten Stufen dieses Ausschnitts."
      },
      {
        "label": "60 % aller Menschen weltweit erwarten steigende Kurse.",
        "explanation": "Die Menge zählt weder Menschen noch ihre Erwartungen."
      }
    ],
    "correct": 1,
    "rule": "Bei Mengenvergleichen immer Ausschnitt und Zählweise nennen."
  },
  {
    "title": "Dein Orderbuchcheck: Zustand, Ablauf und Ergebnis",
    "summary": "Ein vollständiger Fall verbindet Angebote und bestätigte Geschäfte.",
    "paragraphs": [
      "Für deinen Check notierst du Produkt, Handelsplatz, Datenquelle und Zeitpunkt. Lies dann Kaufseite, Verkaufsseite, Preise und Mengen. Prüfe, welche Regeln im Fall gelten. Trenne neue Aufträge, Stornierungen und Ausführungen. Erst danach rechnest du das Ergebnis eines Geschäfts aus.",
      "Im ursprünglichen Buch liegen drei Verkaufseinheiten bei 101 und fünf bei 102. Du kaufst vier sofort und erlaubst beide Preise. Alles bleibt unverändert. Drei zu 101 kosten 303 Euro; eine zu 102 kostet 102 Euro. Zusammen sind es 405 Euro. Der Durchschnitt ist 405 / 4 = 101,25 Euro.",
      "Die letzte Ausführung ist 102. Dort bleiben vier Verkaufseinheiten; bei 101 bleibt keine. Die Kaufseite blieb in diesem Fall unverändert. Insgesamt wurden vier Einheiten gehandelt. Du kannst nun das sichtbare Buch von seinem Ablauf unterscheiden. In den nächsten Kapiteln vertiefen wir Liquidität, Aufträge und ihre Ausführung."
    ],
    "columns": [
      {
        "title": "Gegebener Ablauf",
        "tone": "neutral",
        "points": [
          "Ask 101: 3; Ask 102: 5.",
          "Kauf von 4; beide Preise erlaubt; Angebote unverändert."
        ]
      },
      {
        "title": "Bestätigtes Modellergebnis",
        "tone": "positive",
        "points": [
          "3 × 101 + 1 × 102 = 405 Euro.",
          "Durchschnitt 101,25; letzter Teilpreis 102.",
          "Bei 102 bleiben 4 Einheiten."
        ]
      }
    ],
    "prompt": "Welche Beschreibung passt vollständig zu diesem Abschlussfall?",
    "answers": [
      {
        "label": "Vier Einheiten für zusammen 404 Euro.",
        "explanation": "Vier mal 101 ignoriert die begrenzte Menge auf der ersten Stufe."
      },
      {
        "label": "Acht gehandelte Einheiten und keine restliche Verkaufsmenge.",
        "explanation": "Kauf und Verkauf werden nicht doppelt gezählt; bei 102 bleiben vier."
      },
      {
        "label": "Vier gehandelte Einheiten, 405 Euro Preisbetrag und 101,25 Euro Durchschnitt.",
        "explanation": "Richtig: Beide Teilpreise und die ganze ausgeführte Menge sind berücksichtigt."
      }
    ],
    "correct": 2,
    "rule": "Bekannte Bedingungen, beobachtete Ereignisse und gerechnetes Ergebnis verbinden."
  }
] as const;

export const marketBasicsChapterSixLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-06.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 6 · Das Orderbuch verstehen', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 6', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
