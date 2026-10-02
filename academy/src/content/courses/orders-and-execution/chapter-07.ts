import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Ein Trailing Stop zieht seine Schwelle nach",
    "summary": "Der Abstand folgt einer genau festgelegten Preisregel.",
    "paragraphs": [
      "Lea besitzt vier Aktien der erfundenen Firma Vela. Sie hat jede zu 60,00 Euro gekauft. Ein fester Verkaufsstop könnte bei 58,00 stehen bleiben. Ein Trailing Stop kann seine Auslöseschwelle dagegen nach günstigen Preisbewegungen anheben. Trailing bedeutet hier nachziehend.",
      "Unser Lernanbieter verwendet einen Abstand von 2,00 Euro zum höchsten zulässigen letzten Handel seit Aktivierung. Diesen gemerkten Höchstwert nennen wir Referenzhoch. Die Schwelle ist Referenzhoch minus 2,00. Sie wird bei fallenden Preisen nicht wieder abgesenkt.",
      "Der Auftrag soll vier Aktien verkaufen. Bei Auslösung wird er zur Market-Verkaufsorder. Das ist eine eigene Lernregel mit klarer Preisquelle. Echte Anbieter können andere Quellen, Startwerte und Überwachungszeiten verwenden. Die bewegte Schwelle ist kein garantierter Verkaufspreis."
    ],
    "columns": [
      {
        "title": "Fester Stop",
        "tone": "neutral",
        "points": [
          "Schwelle bleibt bei 58,00.",
          "Keine automatische Anhebung im Vergleichsfall."
        ]
      },
      {
        "title": "Trailing Stop",
        "tone": "positive",
        "points": [
          "Referenzhoch minus 2,00.",
          "Schwelle steigt nur bei neuem Referenzhoch."
        ]
      }
    ],
    "prompt": "Welche Größe zieht im beschriebenen Verkaufsauftrag nach?",
    "answers": [
      {
        "label": "Die Auslöseschwelle nach neuen zulässigen Höchstwerten.",
        "explanation": "Richtig: Sie wird aus Referenzhoch und Abstand berechnet."
      },
      {
        "label": "Der garantiert erzielte Verkaufspreis.",
        "explanation": "Ein Market-Verkauf hat keinen garantierten Ausführungspreis."
      },
      {
        "label": "Die Anzahl gekaufter Aktien.",
        "explanation": "Der Abstand verändert die bestehende Menge nicht."
      }
    ],
    "correct": 0,
    "rule": "Ein Trailing Stop bewegt eine Auslöseschwelle nach einer angegebenen Referenzregel."
  },
  {
    "title": "Den Startwert und den Beobachtungsbeginn festhalten",
    "summary": "Ein früheres Tageshoch zählt nicht automatisch mit.",
    "paragraphs": [
      "Der Anbieter aktiviert Leas Trailing-Auftrag um 10 Uhr Marktzeit. Der zulässige Startwert ist ein letzter Handel bei 60,00 Euro. Damit beginnt das Referenzhoch bei 60,00 und die erste Schwelle bei 58,00. Der Abstand beträgt weiterhin 2,00.",
      "Um 9 Uhr hatte Vela bereits bei 65,00 gehandelt. Unser Modell berücksichtigt jedoch nur den bestätigten Startwert und neue zulässige Meldungen nach Aktivierung. Das frühere Tageshoch 65,00 geht deshalb nicht in die Nachziehrechnung ein.",
      "Diese Auswahl ist eine ausdrückliche Übungsregel. Manche Plattformen können andere Startwerte oder bereits gesetzte Schwellen verwenden. Lea prüft die bestätigten Felder statt aus einem Tageschart den Start ihrer Order abzuleiten."
    ],
    "columns": [
      {
        "title": "Vor Aktivierung",
        "tone": "neutral",
        "points": [
          "Früheres Tageshoch 65,00.",
          "Für diese Order ausdrücklich nicht verwendet."
        ]
      },
      {
        "title": "Bestätigter Start",
        "tone": "positive",
        "points": [
          "Referenzhoch 60,00.",
          "Schwelle 60,00 minus 2,00 = 58,00."
        ]
      }
    ],
    "prompt": "Welche Anfangsschwelle gilt nach unserer Startregel?",
    "answers": [
      {
        "label": "60,00 Euro ohne Abstand.",
        "explanation": "Die Schwelle liegt 2,00 unter dem Startwert."
      },
      {
        "label": "58,00 Euro.",
        "explanation": "Richtig: Nur der bestätigte Startwert 60,00 zählt."
      },
      {
        "label": "63,00 Euro wegen des früheren Tageshochs.",
        "explanation": "Das Tageshoch vor Aktivierung ist ausdrücklich ausgeschlossen."
      }
    ],
    "correct": 1,
    "rule": "Halte Startwert, Aktivierungszeit und zulässige Preisquelle gemeinsam fest."
  },
  {
    "title": "Neue Höchstwerte Schritt für Schritt übernehmen",
    "summary": "Das Referenzhoch speichert günstige Meldungen.",
    "paragraphs": [
      "Nach dem Start bei 60,00 kommt ein zulässiger letzter Handel bei 61,00. Er ist höher als das gemerkte 60,00. Das neue Referenzhoch lautet 61,00, die Schwelle wird 59,00. Es wurde dadurch noch keine Aktie verkauft.",
      "Ein weiterer zulässiger Handel bei 63,00 hebt das Referenzhoch auf 63,00. Die Schwelle steigt auf 61,00. Wir rechnen jeweils den unveränderten Abstand von 2,00 vom neuen Referenzhoch ab.",
      "Die Kursmeldung ist eine Referenz für die Order, kein eigener Ausführungsbericht. In diesem Modell findet vor Auslösung kein Verkauf statt. Lea besitzt weiterhin vier Aktien, obwohl die angezeigte Schwelle nun höher als ihr Kaufpreis liegt."
    ],
    "columns": [
      {
        "title": "Meldung 61,00",
        "tone": "neutral",
        "points": [
          "Neues Referenzhoch 61,00.",
          "Schwelle 59,00."
        ]
      },
      {
        "title": "Meldung 63,00",
        "tone": "positive",
        "points": [
          "Neues Referenzhoch 63,00.",
          "Schwelle 61,00, Position noch vier."
        ]
      }
    ],
    "prompt": "Welche Schwelle gilt nach einem zulässigen Referenzhoch von 63,00?",
    "answers": [
      {
        "label": "58,00 Euro unverändert.",
        "explanation": "Der Trailing-Auftrag hebt die Schwelle nach dem neuen Höchstwert an."
      },
      {
        "label": "65,00 Euro.",
        "explanation": "Der Abstand liegt bei einem Verkaufsstop unter dem Referenzhoch."
      },
      {
        "label": "61,00 Euro.",
        "explanation": "Richtig: 63,00 minus 2,00 ergibt 61,00."
      }
    ],
    "correct": 2,
    "rule": "Eine höhere Referenz hebt die Schwelle, verändert aber noch keinen Bestand."
  },
  {
    "title": "Rückgänge senken die Verkaufsschwelle nicht",
    "summary": "Der gemerkte Höchstwert bleibt bei ungünstigen Meldungen stehen.",
    "paragraphs": [
      "Im Hauptpfad kommen die Meldungen nacheinander: Start 60,00, danach 61,00, 60,80, 63,00 und 62,40. Nach 61,00 ist die Schwelle 59,00. Die Meldung 60,80 ist niedriger und ändert das Referenzhoch nicht.",
      "Nach dem Referenzhoch 63,00 steht die Schwelle bei 61,00. Der nächste Wert 62,40 lässt beide Angaben bestehen. Es wird nicht neu 62,40 minus 2,00 gerechnet. Das würde die Schwelle entgegen unserer Nachziehregel lockern.",
      "62,40 liegt außerdem noch über der gültigen Schwelle 61,00. Es gibt deshalb weder eine Schwellenanhebung noch eine Stop-Auslösung. Nachziehen und Auslösen sind zwei getrennte Prüfungen derselben neuen Meldung."
    ],
    "columns": [
      {
        "title": "Nach Hoch 63,00",
        "tone": "neutral",
        "points": [
          "Referenzhoch 63,00.",
          "Schwelle 61,00."
        ]
      },
      {
        "title": "Rückgang auf 62,40",
        "tone": "positive",
        "points": [
          "Kein neues Hoch, Schwelle bleibt 61,00.",
          "62,40 löst noch nicht aus."
        ]
      }
    ],
    "prompt": "Welche Schwelle bleibt nach dem Rückgang von 63,00 auf 62,40 gültig?",
    "answers": [
      {
        "label": "61,00 Euro.",
        "explanation": "Richtig: Das gemerkte Referenzhoch bleibt 63,00."
      },
      {
        "label": "60,40 Euro.",
        "explanation": "Das wäre ein unerlaubtes Absenken nach dem aktuellen Rückgang."
      },
      {
        "label": "62,40 Euro.",
        "explanation": "Der letzte Handel ist nicht selbst die Stopschwelle."
      }
    ],
    "correct": 0,
    "rule": "Ein Verkaufstrail wird nach ungünstigen Meldungen nicht automatisch weiter nach unten gesetzt."
  },
  {
    "title": "Berühren und Unterschreiten nach der Regel prüfen",
    "summary": "Im Hauptmodell genügt Gleichheit für die Auslösung.",
    "paragraphs": [
      "Der Hauptpfad hat Referenzhoch 63,00 und Schwelle 61,00. Ein neuer zulässiger letzter Handel meldet genau 61,00. Unser Lernanbieter prüft kleiner oder gleich Schwelle. Gleichheit erfüllt die Bedingung und löst den Stop aus.",
      "Der Trailing-Auftrag wechselt jetzt einmalig zur aktiven Market-Verkaufsorder über vier Aktien. Die Nachziehphase endet in unserem Modell. Erst danach werden verfügbare Kaufangebote für die tatsächlichen Verkäufe verarbeitet.",
      "Die Meldung 61,00 ist noch kein Beleg, dass Lea zu 61,00 verkauft hat. Andere Bedingungen könnten strikt kleiner oder eine andere Preisquelle verlangen. Im Hauptfall ist die Gleichheitsregel ausdrücklich festgelegt und muss nicht erraten werden."
    ],
    "columns": [
      {
        "title": "Auslöseprüfung",
        "tone": "neutral",
        "points": [
          "Letzter Handel 61,00.",
          "61,00 ist kleiner oder gleich 61,00."
        ]
      },
      {
        "title": "Statuswechsel",
        "tone": "positive",
        "points": [
          "Trailing-Phase beendet.",
          "Market-Verkauf vier aktiv, noch kein Fill bewiesen."
        ]
      }
    ],
    "prompt": "Was geschieht bei der zulässigen Meldung genau auf der Schwelle?",
    "answers": [
      {
        "label": "Vier Verkäufe zu 61,00 sind bereits garantiert.",
        "explanation": "Auslösung und tatsächliche Ausführung sind getrennte Ereignisse."
      },
      {
        "label": "Die Market-Verkaufsorder über vier wird aktiviert.",
        "explanation": "Richtig: Unsere Auslöseregel schließt Gleichheit ein."
      },
      {
        "label": "Es muss erst ein weiterer Handel unter 61,00 kommen.",
        "explanation": "Das wäre eine strengere Regel als die festgelegte."
      }
    ],
    "correct": 1,
    "rule": "Prüfe den Vergleich genau; Auslösung aktiviert erst die festgelegte Folgeorder."
  },
  {
    "title": "Den Hauptausstieg mit echten Kaufangeboten rechnen",
    "summary": "Nachziehen ersetzt keine Ausführungsrechnung.",
    "paragraphs": [
      "Nach der Hauptauslösung stehen ein Kaufangebot über eine Aktie zu 60,90 und ein weiteres über drei zu 60,70 bereit. Wir nehmen keine konkurrierenden Aufträge oder Buchänderungen an. Die Market-Order verkauft alle vier Aktien an diese Käufer.",
      "Der Verkaufserlös lautet 60,90 plus dreimal 60,70, also 243,00 Euro. Der Kaufwert war viermal 60,00, also 240,00. Das ergibt 3,00 Euro Bruttogewinn. Der Durchschnitt der Verkäufe beträgt 243,00 geteilt durch vier, also 60,75 je Aktie.",
      "Unser eigenes Gebührenmodell verlangt einmal 0,40 Euro für den ausgeführten Kaufauftrag und einmal 0,40 für den ausgeführten Verkaufsauftrag. Andere Kosten und Steuern lassen wir weg. Nach insgesamt 0,80 Gebühren bleiben 2,20 Euro Gewinn; die Position ist null."
    ],
    "columns": [
      {
        "title": "Ausführungen",
        "tone": "neutral",
        "points": [
          "Eine zu 60,90 und drei zu 60,70.",
          "Erlös 243,00, Durchschnitt 60,75."
        ]
      },
      {
        "title": "Ergebnis",
        "tone": "positive",
        "points": [
          "Kaufwert 240,00.",
          "Gewinn nach Modellgebühren 2,20 Euro."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Gewinn nach den beiden Modellgebühren?",
    "answers": [
      {
        "label": "3,00 Euro.",
        "explanation": "Das ist der Bruttogewinn vor Gebühren."
      },
      {
        "label": "4,00 Euro.",
        "explanation": "Diese Zahl setzt alle Verkäufe genau zu 61,00 voraus und ignoriert Gebühren."
      },
      {
        "label": "2,20 Euro.",
        "explanation": "Richtig: 243,00 minus 240,00 minus 0,80 ergibt 2,20."
      }
    ],
    "correct": 2,
    "rule": "Rechne das Ergebnis aus tatsächlichen Preisen, Mengen und den vereinbarten Kosten."
  },
  {
    "title": "Eine Preislücke kann auch den angehobenen Stop überholen",
    "summary": "Eine Schwelle über dem Kaufpreis sichert keinen Nettogewinn.",
    "paragraphs": [
      "Ein getrennter Lückenzweig beginnt mit vier Aktien zu 60,00 und derselben schon bestätigten Schwelle 61,00. Der nächste zulässige letzte Handel liegt bei 59,00. Die Meldung ist unter der Schwelle und aktiviert ebenfalls einen Market-Verkauf.",
      "Die dann verfügbaren Käufer nehmen eine Aktie zu 58,80 und drei zu 58,60. Der Erlös beträgt 58,80 plus 175,80, also 234,60 Euro. Gegenüber dem Kaufwert 240,00 entsteht ein Bruttoverlust von 5,40.",
      "Mit den beiden Modellgebühren von zusammen 0,80 beträgt der Verlust 6,20 Euro. Obwohl die letzte Schwelle 61,00 über dem Kaufpreis lag, wurde darunter verkauft. Dieser Zweig ist eine eigene Alternative und wird nicht zum Gewinn des Hauptzweigs addiert."
    ],
    "columns": [
      {
        "title": "Vor der Lücke",
        "tone": "neutral",
        "points": [
          "Kaufpreis 60,00.",
          "Bestätigte Schwelle 61,00."
        ]
      },
      {
        "title": "Tatsächlicher Verkauf",
        "tone": "positive",
        "points": [
          "Erlös 234,60 Euro.",
          "Verlust nach Modellgebühren 6,20 Euro."
        ]
      }
    ],
    "prompt": "Welches Ergebnis ergibt der getrennte Lückenzweig?",
    "answers": [
      {
        "label": "6,20 Euro Verlust nach Modellgebühren.",
        "explanation": "Richtig: 240,00 minus 234,60 plus 0,80 ergibt 6,20."
      },
      {
        "label": "Mindestens Gewinn, weil die Schwelle über 60,00 lag.",
        "explanation": "Die ausgeführten Preise lagen unter dem Kaufpreis."
      },
      {
        "label": "2,20 Euro Gewinn aus dem Hauptzweig.",
        "explanation": "Der Hauptzweig hat andere Ausführungspreise und ist eine getrennte Alternative."
      }
    ],
    "correct": 0,
    "rule": "Eine nachgezogene Schwelle garantiert weder den Ausführungspreis noch einen Nettogewinn."
  },
  {
    "title": "Ein ausgelöster Rest beginnt nicht erneut zu trailen",
    "summary": "Die Folgeorder hat nun ihren eigenen Status.",
    "paragraphs": [
      "Der getrennte Teilzweig verwendet dieselbe Auslösung bei 61,00. Zunächst gibt es nur einen Käufer für eine Aktie zu 60,90. Eine Aktie wird verkauft; drei bleiben in der Position. Unser Lernanbieter hält die drei Stück der aktiven Market-Order bis zur nächsten Verarbeitung offen.",
      "Eine spätere zulässige Kursmeldung von 70,00 startet keinen neuen Trailing-Auftrag. Der ursprüngliche Auftrag hat bereits ausgelöst. Der Rest ist in diesem Modell eine aktive Market-Verkaufsorder ohne Preisgrenze und ohne neue Nachziehphase.",
      "Später werden die restlichen drei zu 60,70 verkauft. Der endgültige Erlös ist damit wieder 243,00. Der ausgeführte Verkaufsauftrag kostet auch bei diesen Teilfills nur einmal 0,40. Die Warte- und Restregel ist eine ausdrückliche Lernannahme, keine universelle Behandlung unvollständiger Market-Orders."
    ],
    "columns": [
      {
        "title": "Erste Teilmenge",
        "tone": "neutral",
        "points": [
          "Eine verkauft, Position drei.",
          "Market-Rest drei offen."
        ]
      },
      {
        "title": "Danach",
        "tone": "positive",
        "points": [
          "Keine neue Trailing-Phase bei Meldung 70,00.",
          "Drei weitere Verkäufe schließen den Bestand."
        ]
      }
    ],
    "prompt": "Welcher Auftrag bleibt nach der ersten Teilmenge im Lernfall offen?",
    "answers": [
      {
        "label": "Kein Auftrag und kein Bestand.",
        "explanation": "Nur eine von vier Aktien wurde verkauft."
      },
      {
        "label": "Eine Market-Verkaufsorder über drei ohne neue Trailing-Phase.",
        "explanation": "Richtig: Der Statuswechsel hat bereits stattgefunden."
      },
      {
        "label": "Ein neuer Trailing Stop mit Schwelle 68,00.",
        "explanation": "Unser Modell aktiviert den ausgelösten Auftrag nicht erneut."
      }
    ],
    "correct": 1,
    "rule": "Nach der Auslösung gilt die Restregel der Folgeorder statt der vorherigen Nachziehregel."
  },
  {
    "title": "Einen Prozentabstand vom Referenzhoch berechnen",
    "summary": "Der Euroabstand wächst mit der Referenz.",
    "paragraphs": [
      "Ein eigener Prozentfall startet bei 100,00 Euro. Der Verkaufsauftrag hat einen Abstand von fünf Prozent zum Referenzhoch. Fünf Prozent von 100,00 sind 5,00. Die anfängliche Schwelle lautet deshalb 95,00.",
      "Ein neues zulässiges Hoch bei 108,00 verändert die Rechnung. Fünf Prozent von 108,00 sind 5,40. Die neue Schwelle lautet 108,00 minus 5,40, also 102,60. Im Modell sind Centpreise für diese Schwelle erlaubt.",
      "Fällt die nächste Meldung auf 104,00, bleibt das Referenzhoch 108,00 und die Schwelle 102,60. Wir berechnen die fünf Prozent nicht vom Kaufpreis und nicht erneut vom niedrigeren aktuellen Preis. Die gewählte Basis gehört zur Regel."
    ],
    "columns": [
      {
        "title": "Start 100,00",
        "tone": "neutral",
        "points": [
          "Fünf Prozent = 5,00.",
          "Schwelle 95,00."
        ]
      },
      {
        "title": "Hoch 108,00",
        "tone": "positive",
        "points": [
          "Fünf Prozent = 5,40.",
          "Schwelle 102,60."
        ]
      }
    ],
    "prompt": "Welche Schwelle ergibt fünf Prozent Abstand zum Referenzhoch 108,00?",
    "answers": [
      {
        "label": "103,00 Euro.",
        "explanation": "Diese Zahl zieht einen festen Betrag von 5,00 statt fünf Prozent ab."
      },
      {
        "label": "98,80 Euro.",
        "explanation": "Das verwendet eine andere, hier nicht festgelegte Prozentbasis."
      },
      {
        "label": "102,60 Euro.",
        "explanation": "Richtig: 108,00 minus 5,40 ergibt 102,60."
      }
    ],
    "correct": 2,
    "rule": "Bei einem Prozenttrail nenne die Basis und rechne erst den Abstand, dann die Schwelle."
  },
  {
    "title": "Feste und prozentuale Abstände unterscheiden",
    "summary": "Gleiche Startschwellen können später auseinanderlaufen.",
    "paragraphs": [
      "Zwei getrennte Verkaufsmodelle starten bei Referenz 100,00. Das erste verwendet einen festen Abstand von 5,00 Euro. Das zweite fünf Prozent. Beide haben zunächst Schwelle 95,00. Die Aufträge sind Alternativen, nicht zwei Ausstiege für denselben Bestand.",
      "Bei neuem Referenzhoch 108,00 liegt der feste Abstand weiterhin bei 5,00 und die Schwelle bei 103,00. Der Prozentabstand beträgt jetzt 5,40, seine Schwelle 102,60. Die Startgleichheit legt also keine spätere Gleichheit fest.",
      "Welche Variante zu einem Handelsplan passt, wird hier nicht bewertet. Die Übung prüft nur die Berechnung. Auch eine engere Schwelle kann ungünstige Preisbewegungen auslösen und garantiert kein besseres Ergebnis."
    ],
    "columns": [
      {
        "title": "Fester Abstand",
        "tone": "neutral",
        "points": [
          "Bei Hoch 108,00: Abstand 5,00.",
          "Schwelle 103,00."
        ]
      },
      {
        "title": "Prozentabstand",
        "tone": "positive",
        "points": [
          "Bei Hoch 108,00: Abstand 5,40.",
          "Schwelle 102,60."
        ]
      }
    ],
    "prompt": "Welche Aussage stimmt nach dem neuen Hoch 108,00?",
    "answers": [
      {
        "label": "Die feste Schwelle ist 103,00, die Prozentschwelle 102,60.",
        "explanation": "Richtig: Gleiche Startwerte führen bei unterschiedlichen Regeln zu anderen neuen Schwellen."
      },
      {
        "label": "Beide bleiben zwingend bei 95,00.",
        "explanation": "Beide Regeln ziehen bei einem neuen Hoch nach."
      },
      {
        "label": "Fünf Prozent sind bei jedem Preis genau 5,00 Euro.",
        "explanation": "Der Eurobetrag hängt von der Referenz ab."
      }
    ],
    "correct": 0,
    "rule": "Ein Betrag und ein Prozentsatz sind unterschiedliche Regeln, auch bei gleichem Anfangswert."
  },
  {
    "title": "Die erlaubte Preisstufe und Rundung mitlesen",
    "summary": "Ein Rohwert ist nicht immer eine zulässige Schwelle.",
    "paragraphs": [
      "Ein anderer Lernanbieter erlaubt Stopschwellen nur in Schritten von 0,05 Euro. Er rundet berechnete Verkaufsschwellen immer auf die nächste solche Stufe nach unten. Diese Rundung ist ausdrücklich seine Übungsregel; normale Kursmeldungen können Centpreise haben.",
      "Das Referenzhoch beträgt 101,20 und der Prozentabstand 2,5 Prozent. Der Abstand ist 2,53 Euro. Der Rohwert der Schwelle lautet 101,20 minus 2,53, also 98,67. Auf dem erlaubten Raster liegt darunter 98,65.",
      "Der Anbieter bestätigt 98,65 als wirksame Schwelle. 98,70 wäre eine Aufrundung und entspricht unserer Regel nicht. Produkte und Anbieter können andere Preisraster und Rundungen verwenden; diese konkrete Regel darfst du nicht verallgemeinern."
    ],
    "columns": [
      {
        "title": "Rohrechnung",
        "tone": "neutral",
        "points": [
          "2,5 Prozent von 101,20 = 2,53.",
          "Rohe Schwelle 98,67."
        ]
      },
      {
        "title": "Anbieterregel",
        "tone": "positive",
        "points": [
          "Stopschritte 0,05, nach unten runden.",
          "Bestätigte Schwelle 98,65."
        ]
      }
    ],
    "prompt": "Welche Schwelle bestätigt der Lernanbieter nach seiner Rundungsregel?",
    "answers": [
      {
        "label": "98,70 Euro.",
        "explanation": "Das wäre Aufrunden, während die Übungsregel Abrunden verlangt."
      },
      {
        "label": "98,65 Euro.",
        "explanation": "Richtig: Das ist die erlaubte Stufe direkt unter dem Rohwert 98,67."
      },
      {
        "label": "98,67 Euro.",
        "explanation": "Dieser Wert liegt nicht auf dem erlaubten Stopraster."
      }
    ],
    "correct": 1,
    "rule": "Rechne die rohe Schwelle und prüfe danach Preisraster, Rundung und Bestätigung."
  },
  {
    "title": "Ein Kauftrail arbeitet in der anderen Richtung",
    "summary": "Zum Short-Ausstieg zählt ein gemerktes Tief.",
    "paragraphs": [
      "Ein getrenntes Konto hat eine Short-Position von minus drei Aktien der erfundenen Firma Sora. Der Leerverkauf war erlaubt, die erforderliche Leihe ist vorhanden. Ein Kauftrail soll die drei Aktien zurückkaufen. Er startet mit Referenztief 50,00 und Abstand 1,00 darüber.",
      "Die Anfangsschwelle ist 51,00. Neue zulässige letzte Handelswerte 49,00 und 47,00 senken das Referenztief und die Schwelle auf 50,00 beziehungsweise 48,00. Ein anschließender Anstieg auf 47,60 hebt die Schwelle nicht wieder an.",
      "Bei einem neuen Wert 48,00 aktiviert unsere Regel größer oder gleich eine Market-Kauforder über drei. Erst drei tatsächlich ausgeführte Rückkäufe schließen minus drei auf null. Der Kauftrail folgt günstigen Rückgängen und wird bei Gegenbewegungen nicht gelockert."
    ],
    "columns": [
      {
        "title": "Günstige Rückgänge",
        "tone": "neutral",
        "points": [
          "Referenztief 50,00 auf 47,00.",
          "Kaufschwelle 51,00 auf 48,00."
        ]
      },
      {
        "title": "Anstieg auf 48,00",
        "tone": "positive",
        "points": [
          "Kauftrail löst aus.",
          "Drei Rückkäufe können den Short schließen."
        ]
      }
    ],
    "prompt": "Welche Seite aktiviert der Kauftrail zum Schließen der Short-Position?",
    "answers": [
      {
        "label": "Eine Market-Verkaufsorder über drei.",
        "explanation": "Weitere Verkäufe würden die Short-Position vergrößern."
      },
      {
        "label": "Einen Verkaufstrail unter dem Referenzhoch.",
        "explanation": "Der beschriebene Kauftrail folgt einem Referenztief in der anderen Richtung."
      },
      {
        "label": "Eine Market-Kauforder über drei.",
        "explanation": "Richtig: Bestätigte Rückkäufe schließen die negative Position."
      }
    ],
    "correct": 2,
    "rule": "Ein Kauftrail folgt einem gemerkten Tief und löst bei der festgelegten Aufwärtsbedingung aus."
  },
  {
    "title": "Die Referenzquelle kann das Ergebnis ändern",
    "summary": "Letzter Handel und Kaufangebot sind verschiedene Meldungen.",
    "paragraphs": [
      "Zwei getrennte Übungsaufträge haben vor dem nächsten Datenbild jeweils ein bestätigtes Referenzhoch 63,00 und Schwelle 61,00. Der erste verwendet letzte Handelswerte zum Nachziehen und Auslösen. Der zweite verwendet die besten Kaufangebote, die sogenannten Bids.",
      "Das nächste vollständige Datenbild zeigt letzten Handel 62,40, bestes Kaufangebot 60,90 und bestes Verkaufsangebot 61,10. Bei beiden entsteht kein neues Referenzhoch. Der Last-Auftrag löst nicht aus, weil 62,40 über 61,00 liegt. Der Bid-Auftrag löst aus, weil 60,90 darunter liegt.",
      "Die Aufträge starten ausdrücklich mit denselben bestätigten Ausgangswerten. Wir rekonstruieren hier keine frühere Bid-Zeitreihe aus Last-Werten. Eine Chartlinie kann eine andere Preisart zeigen als die Orderquelle; deshalb muss Lea die Quelle und den Zeitpunkt jeder Meldung kennen."
    ],
    "columns": [
      {
        "title": "Last als Quelle",
        "tone": "neutral",
        "points": [
          "Neuer letzter Handel 62,40.",
          "Über Schwelle 61,00: keine Auslösung."
        ]
      },
      {
        "title": "Bid als Quelle",
        "tone": "positive",
        "points": [
          "Neues bestes Kaufangebot 60,90.",
          "Unter Schwelle 61,00: Auslösung."
        ]
      }
    ],
    "prompt": "Welcher der beiden Aufträge löst im angegebenen Datenbild aus?",
    "answers": [
      {
        "label": "Der Auftrag mit Bid als festgelegter Quelle.",
        "explanation": "Richtig: 60,90 liegt unter der bestätigten Schwelle 61,00."
      },
      {
        "label": "Nur der Last-Auftrag.",
        "explanation": "Sein letzter Handel 62,40 liegt noch über der Schwelle."
      },
      {
        "label": "Keiner, weil ein Verkaufsangebot bei 61,10 steht.",
        "explanation": "Das Verkaufsangebot ist bei keinem der zwei Aufträge die festgelegte Quelle."
      }
    ],
    "correct": 0,
    "rule": "Nutze für Nachziehen und Auslösen die bestätigte Preisquelle, nicht irgendeinen sichtbaren Kurs."
  },
  {
    "title": "Beim Trailing-Stop-Limit zwei Abstände unterscheiden",
    "summary": "Nachziehbetrag und Limitversatz erfüllen andere Aufgaben.",
    "paragraphs": [
      "Die getrennte Limit-Alternative startet wie der Hauptfall bei 60,00 und verwendet den Nachziehbetrag 2,00. Sie hat zusätzlich einen Limitversatz von 0,30 unter der Stopschwelle. Der Startstop ist 58,00, die vorgesehene Verkaufsuntergrenze 57,70.",
      "Bei Referenzhoch 63,00 steigt der Stop auf 61,00. Unser Modell zieht die Untergrenze mit: 61,00 minus 0,30 ergibt 60,70. Ein zulässiger letzter Handel genau bei 61,00 löst nun eine Verkaufs-Limitorder über vier mit Limit 60,70 aus.",
      "Der Abstand 2,00 steuert das Nachziehen. Der Versatz 0,30 bestimmt den Abstand zwischen Stop und Folgelimit. Nach Auslösung bleibt das Folgelimit in unserem Modell fest bei 60,70; weitere Meldungen starten keine neue Nachziehphase."
    ],
    "columns": [
      {
        "title": "Vor Auslösung",
        "tone": "neutral",
        "points": [
          "Referenzhoch 63,00, Stop 61,00.",
          "Limitversatz 0,30."
        ]
      },
      {
        "title": "Nach Auslösung",
        "tone": "positive",
        "points": [
          "Verkaufs-Limitorder vier aktiv.",
          "Verkaufsuntergrenze 60,70."
        ]
      }
    ],
    "prompt": "Welches Folgelimit gilt nach Auslösung bei Schwelle 61,00?",
    "answers": [
      {
        "label": "61,30 Euro.",
        "explanation": "Unser Verkaufsmodell setzt den Versatz unter die Schwelle."
      },
      {
        "label": "60,70 Euro.",
        "explanation": "Richtig: Der Limitversatz 0,30 wird von der Schwelle abgezogen."
      },
      {
        "label": "59,00 Euro.",
        "explanation": "Das zieht den Nachziehbetrag nochmals von der Schwelle ab."
      }
    ],
    "correct": 1,
    "rule": "Unterscheide Abstand zur Referenz und Versatz zwischen Stop und Folgelimit."
  },
  {
    "title": "Eine ausgelöste Limit-Alternative kann weiter offen sein",
    "summary": "Der Preisrahmen garantiert keinen vollständigen Ausstieg.",
    "paragraphs": [
      "Im eigenen Limitzweig ist die Verkaufs-Limitorder über vier mit Untergrenze 60,70 bereits aktiv. Alle ersten Kaufangebote liegen nur bei 60,60. Sie sind zu niedrig; es wird nichts verkauft. Die Position bleibt vier und die Folgeorder hat vier offene Stücke.",
      "Später gibt es zwei zulässige Käuferstücke zu 60,80. Zwei Aktien werden verkauft und zwei bleiben offen. Das Folgelimit bleibt 60,70. Unser Modell lässt den Rest bis zum Sessionende weiter bestehen; es gibt zunächst keine weiteren passenden Käufer.",
      "Der Trailing-Stop-Limit hält seine Preisgrenze ein, während die übrigen zwei Aktien weiterhin Kursschwankungen ausgesetzt sind. Das ist eine getrennte Alternative zum vollständig ausgeführten Market-Hauptfall. Keine der Auslösungen beweist allein eine geschlossene Position."
    ],
    "columns": [
      {
        "title": "Nur Käufer bei 60,60",
        "tone": "neutral",
        "points": [
          "Untergrenze 60,70 nicht erfüllt.",
          "Null verkauft, Position vier."
        ]
      },
      {
        "title": "Später zwei zu 60,80",
        "tone": "positive",
        "points": [
          "Zwei verkauft.",
          "Position zwei, Limitrest zwei offen."
        ]
      }
    ],
    "prompt": "Wie groß ist die Position nach den zwei späteren zulässigen Verkäufen?",
    "answers": [
      {
        "label": "Null Aktien, weil der Stop ausgelöst hat.",
        "explanation": "Auslösung allein und zwei Teilverkäufe schließen keine vier Aktien."
      },
      {
        "label": "Vier Aktien unverändert nach beiden Verkäufen.",
        "explanation": "Die zwei tatsächlichen Verkäufe verkleinern den Bestand."
      },
      {
        "label": "Zwei Aktien.",
        "explanation": "Richtig: Vier vorhandene minus zwei verkaufte Stück ergibt zwei."
      }
    ],
    "correct": 2,
    "rule": "Prüfe bei einer ausgelösten Limitorder Preisgrenze, tatsächliche Teilmenge und Restposition."
  },
  {
    "title": "Eine allgemeine Bedingung aktiviert erst den eigentlichen Auftrag",
    "summary": "Das Signalprodukt muss nicht das gehandelte Produkt sein.",
    "paragraphs": [
      "Ein neuer Lernfall beginnt ohne Vela-Aktien. Lea hinterlegt die Bedingung: Wenn ein neuer zulässiger Wert des erfundenen Mira-Index mindestens 1.000 erreicht, aktiviere einen Kauf von vier Vela-Aktien mit Limit 60,50 Euro. Indexwert und Aktienpreis haben unterschiedliche Einheiten.",
      "Ein Indexwert 1.002 erfüllt die Bedingung. Der Anbieter aktiviert den Kaufauftrag. Die aktuellen Vela-Verkaufsangebote liegen jedoch alle bei 60,80. Sie sind über dem Kauflimit; Lea kauft zunächst keine Aktie und der aktive Limitauftrag wartet.",
      "Unsere Bedingung ist ein Wertevergleich, keine Kursprognose und keine Pflicht, den Index zu kaufen. Der Anbieter überwacht sie bis zum festgelegten Ende. Die eigentliche Order hat zusätzlich Produkt, Seite, Menge, Preisgrenze und eigene Gültigkeit."
    ],
    "columns": [
      {
        "title": "Signal",
        "tone": "neutral",
        "points": [
          "Mira-Index neu bei 1.002.",
          "Mindestens 1.000: Bedingung erfüllt."
        ]
      },
      {
        "title": "Folgeorder",
        "tone": "positive",
        "points": [
          "Vela kaufen vier, Limit 60,50.",
          "Angebote nur 60,80: noch kein Kauf."
        ]
      }
    ],
    "prompt": "Was beweist der passende Indexwert ohne passende Aktienangebote?",
    "answers": [
      {
        "label": "Der Kaufauftrag wird aktiviert, aber es ist noch keine Aktie gekauft.",
        "explanation": "Richtig: Die Kaufpreisgrenze ist eine eigene Ausführungsbedingung."
      },
      {
        "label": "Vier Indexanteile wurden automatisch gekauft.",
        "explanation": "Der Auftrag handelt Vela-Aktien und verwendet den Index nur als Signal."
      },
      {
        "label": "Vela muss sofort für 60,80 gekauft werden.",
        "explanation": "Das Kauflimit erlaubt keinen Preis über 60,50."
      }
    ],
    "correct": 0,
    "rule": "Eine erfüllte Signalbedingung und eine ausgeführte Handelsorder sind verschiedene Ereignisse."
  },
  {
    "title": "UND-Bedingungen im selben aktuellen Datenstand prüfen",
    "summary": "Früher wahr und später wahr genügt nicht automatisch gemeinsam.",
    "paragraphs": [
      "Ein eigener Kombinationsfall verlangt Mira-Index mindestens 1.000 UND Marktzeit mindestens 10 Uhr. Das Überwachungsfenster endet um 16 Uhr. Unser Anbieter prüft beide Teilbedingungen im jeweils aktuellen vollständigen Datenstand und speichert kein früheres Wahr als erfüllt.",
      "Um 9:59 steht der Index bei 1.002: Preisbedingung wahr, Zeitbedingung falsch. Um 10:00 steht er bei 999: Zeitbedingung wahr, Preisbedingung falsch. Keiner dieser Datenstände erfüllt beide Bedingungen gleichzeitig.",
      "Erst um 10:01 mit Index 1.002 sind beide wahr, der Auftrag wird einmal aktiviert. Eine ODER-Regel wäre anders: Eine der Teilbedingungen könnte genügen. Hier ist ausdrücklich UND festgelegt; ein früherer Indexwert wird nicht mit einer späteren Uhrzeit zusammengerechnet."
    ],
    "columns": [
      {
        "title": "Noch nicht erfüllt",
        "tone": "neutral",
        "points": [
          "9:59 und Index 1.002: Zeit falsch.",
          "10:00 und Index 999: Index falsch."
        ]
      },
      {
        "title": "Beide erfüllt",
        "tone": "positive",
        "points": [
          "10:01 und Index 1.002.",
          "UND-Bedingung aktiviert die Order."
        ]
      }
    ],
    "prompt": "Wann wird der Auftrag nach der angegebenen UND-Regel aktiviert?",
    "answers": [
      {
        "label": "Um 10:00, weil der Index vorher schon 1.002 war.",
        "explanation": "Unser Modell speichert frühere Wahr-Werte ausdrücklich nicht."
      },
      {
        "label": "Um 10:01 bei Index 1.002.",
        "explanation": "Richtig: In diesem aktuellen Datenstand sind beide Teilbedingungen erfüllt."
      },
      {
        "label": "Um 9:59, weil der Index schon hoch genug ist.",
        "explanation": "Vor 10 Uhr ist die Zeitbedingung noch falsch."
      }
    ],
    "correct": 1,
    "rule": "Prüfe UND-Bedingungen gemeinsam im festgelegten Datenstand statt historische Wahr-Werte zu mischen."
  },
  {
    "title": "Eine einmal erfüllte Bedingung muss nicht immer wieder handeln",
    "summary": "Levelvergleich und erneute Aktivierung brauchen eigene Regeln.",
    "paragraphs": [
      "Die einfache Indexbedingung lautet mindestens 1.000. Der Anbieter prüft sie bei der nächsten neuen zulässigen Meldung nach Annahme. Er verlangt keinen beobachteten Wechsel von unter 1.000 auf darüber. Auch eine neue Meldung 1.002 kann daher genügen, wenn der vorherige Wert schon höher lag.",
      "Unser Lernauftrag darf nur einmal eine Folgeorder erzeugen. Nach seiner ersten Aktivierung ist die Bedingungsüberwachung verbraucht. Weitere Meldungen 1.003 oder 1.004 erzeugen keine zusätzlichen Kaufaufträge über jeweils vier.",
      "Ein späterer Rückgang auf 998 löscht die aktive Folgeorder in diesem Modell nicht automatisch. Dafür müsste eine eigene Löschregel vorhanden sein. Andere Systeme können wiederholte Signale oder Rücknahmen unterstützen; diese Funktionen dürfen nicht stillschweigend angenommen werden."
    ],
    "columns": [
      {
        "title": "Wertevergleich",
        "tone": "neutral",
        "points": [
          "Neue Meldung mindestens 1.000 genügt.",
          "Kein vorheriges Kreuzen verlangt."
        ]
      },
      {
        "title": "Einmalige Aktivierung",
        "tone": "positive",
        "points": [
          "Eine Folgeorder wird erzeugt.",
          "Weitere passende Meldungen erzeugen keine neuen Orders."
        ]
      }
    ],
    "prompt": "Wie viele Folgeorders erzeugen drei passende neue Meldungen nach unserer Einmalregel?",
    "answers": [
      {
        "label": "Drei Folgeorders über jeweils vier.",
        "explanation": "Das wäre eine Wiederholungsregel, die unser Modell nicht hat."
      },
      {
        "label": "Keine, solange der Wert nicht zuvor unter 1.000 lag.",
        "explanation": "Unser Wertevergleich verlangt keinen vorherigen Schwellenwechsel."
      },
      {
        "label": "Eine Folgeorder.",
        "explanation": "Richtig: Nach der ersten Aktivierung wird die Überwachung nicht erneut gestartet."
      }
    ],
    "correct": 2,
    "rule": "Unterscheide Wertevergleich, beobachtetes Kreuzen und einmalige oder wiederholte Aktivierung."
  },
  {
    "title": "Bedingungsfrist und Orderfrist getrennt lesen",
    "summary": "Das Ende der Überwachung löscht nicht automatisch die Folgeorder.",
    "paragraphs": [
      "Unser Signalauftrag überwacht Mira-Werte nur bis unmittelbar vor 16 Uhr Marktzeit. Seine aktivierte Folgeorder ist dagegen eine Vela-Tageslimitorder bis unmittelbar vor 17 Uhr. Die zwei Endzeiten sind eigene Lernregeln.",
      "Das Signal wird um 15:59 erfüllt und aktiviert vier Käufe mit Limit 60,50. Um 16:30 verkauft ein anderer Teilnehmer eine Aktie an Leas wartendes Limit. Lea besitzt danach eine; drei Kaufstücke bleiben offen. Das Überwachungsende um 16 Uhr hat diesen schon aktiven Auftrag nicht beendet.",
      "Um 17 Uhr bestätigt das Modell den Ablauf der drei offenen Kaufstücke. Die eine gekaufte Aktie bleibt im Bestand. Hätte es vor 16 Uhr keine passende neue Signalmeldung gegeben, wäre keine Folgeorder aktiviert worden; genau 16 Uhr wäre für die Bedingung zu spät."
    ],
    "columns": [
      {
        "title": "Bedingungsfrist",
        "tone": "neutral",
        "points": [
          "Signal um 15:59: noch zulässig.",
          "Um 16 Uhr endet nur die Signalüberwachung."
        ]
      },
      {
        "title": "Orderfrist",
        "tone": "positive",
        "points": [
          "Ein Kauf um 16:30 zulässig.",
          "Um 17 Uhr laufen drei Kaufstücke ab."
        ]
      }
    ],
    "prompt": "Welcher Bestand bleibt nach Ablauf der drei offenen Kaufstücke um 17 Uhr?",
    "answers": [
      {
        "label": "Eine Aktie.",
        "explanation": "Richtig: Der bestätigte Kauf von 16:30 wird durch den Ablauf nicht rückgängig."
      },
      {
        "label": "Keine Aktie, weil die Signalfrist um 16 Uhr endete.",
        "explanation": "Die Folgeorder hatte eine eigene Gültigkeit bis 17 Uhr."
      },
      {
        "label": "Vier Aktien, weil das Signal vier Käufe aktivierte.",
        "explanation": "Nur eine Aktie wurde tatsächlich gekauft."
      }
    ],
    "correct": 0,
    "rule": "Prüfe die Frist der Bedingung und die Frist der aktivierten Folgeorder getrennt."
  },
  {
    "title": "Den Ort der Überwachung kennen",
    "summary": "Ein ausgeschalteter Bildschirm sagt nicht, wo die Regel läuft.",
    "paragraphs": [
      "Im Haupt-Trailing-Modell überwacht der Lernanbieter die Order auf seinem Server. Er erhält weiterhin zulässige Kursmeldungen, auch wenn Leas Bildschirmverbindung ausfällt. Bei einem passenden Wert kann die Regel dort weiter auslösen. Lea sieht die Bestätigung erst nach Wiederverbindung.",
      "Ein getrenntes lokales Lernprogramm prüft seine Bedingung ausschließlich auf Leas eingeschaltetem Gerät. Wird es ausgeschaltet, erfolgen in diesem Modell keine weiteren Prüfungen und keine Weiterleitung. Dieser Fall hat ausdrücklich keinen laufenden Anbieter-Server für die Bedingung.",
      "Beide Abläufe sind eigene technische Annahmen. In echten Systemen muss klar sein, wer die Regel hält, welche Daten ankommen und was bei Störungen geschieht. Ein sichtbares Offline-Zeichen beweist weder eine gelöschte Order noch eine sichere Weiterverarbeitung."
    ],
    "columns": [
      {
        "title": "Servermodell",
        "tone": "neutral",
        "points": [
          "Anbieter überwacht mit laufenden Daten.",
          "Bildschirm offline stoppt die Serverregel nicht."
        ]
      },
      {
        "title": "Lokales Modell",
        "tone": "positive",
        "points": [
          "Nur das eingeschaltete Gerät überwacht.",
          "Gerät aus: keine neuen Prüfungen."
        ]
      }
    ],
    "prompt": "Welche Angabe entscheidet über den Unterschied der beiden Modelle?",
    "answers": [
      {
        "label": "Ob die Order im Chart als Linie gezeichnet ist.",
        "explanation": "Eine Linie beweist keine weiterlaufende Datenverarbeitung."
      },
      {
        "label": "Wo die Bedingung überwacht wird und ob dort die nötigen Daten ankommen.",
        "explanation": "Richtig: Der Bildschirmstatus allein beschreibt die Verarbeitung nicht."
      },
      {
        "label": "Nur die Farbe des Offline-Zeichens.",
        "explanation": "Die Farbe sagt nichts über den tatsächlichen Überwachungsort."
      }
    ],
    "correct": 1,
    "rule": "Kenne Überwachungsort, Datenversorgung und bestätigten Status bei Verbindungsproblemen."
  },
  {
    "title": "Ein erfülltes Signal kann eine abgelehnte Folgeorder erzeugen",
    "summary": "Bedingung erfüllt bedeutet noch nicht Order angenommen.",
    "paragraphs": [
      "Ein neuer Fehlerfall hat keinen Vela-Bestand. Der Anbieter nimmt die Indexüberwachung an. Später erfüllt ein zulässiger Wert 1.002 die Bedingung. Beim Aktivieren lehnt der Anbieter den vorbereiteten Kaufauftrag jedoch wegen einer nicht unterstützten Orderkombination ab.",
      "Unser Modell wiederholt diese Aktivierung nicht automatisch. Lea hat null Aktien und keinen aktiven Kaufauftrag. Die Meldung Bedingung erfüllt beschreibt das Signal, während Folgeorder abgelehnt die spätere Auftragsprüfung beschreibt. Beide Meldungen können zusammen richtig sein.",
      "Auch eine gewünschte Änderung der Bedingung gilt erst nach Bestätigung. Kommt vorher ein passendes Signal, kann noch die alte Regel gelten. Lea prüft deshalb die Kennung, bestätigte Regelversion, Aktivierung und Annahme getrennt statt einen abgeschickten Änderungswunsch als fertige Änderung zu behandeln."
    ],
    "columns": [
      {
        "title": "Signal erfolgreich",
        "tone": "neutral",
        "points": [
          "Index 1.002 erfüllt die Bedingung.",
          "Aktivierung wird versucht."
        ]
      },
      {
        "title": "Folgeorder scheitert",
        "tone": "positive",
        "points": [
          "Nicht unterstützte Kombination abgelehnt.",
          "Kein Kauf, kein automatischer neuer Versuch."
        ]
      }
    ],
    "prompt": "Welcher Zustand passt zum ausdrücklich abgelehnten Kaufauftrag?",
    "answers": [
      {
        "label": "Vier gekaufte Aktien.",
        "explanation": "Die Folgeorder wurde vor einer Ausführung abgelehnt."
      },
      {
        "label": "Ein garantiert laufender neuer Aktivierungsversuch.",
        "explanation": "Unser Modell wiederholt den Versuch nicht automatisch."
      },
      {
        "label": "Null Aktien und kein aktiver Kaufauftrag.",
        "explanation": "Richtig: Das Signal hat weder Annahme noch Ausführung der Order bewirkt."
      }
    ],
    "correct": 2,
    "rule": "Prüfe Signal, Regelversion, Orderannahme und Ausführungen als getrennte Zustände."
  },
  {
    "title": "Den Hauptpfad vom Start bis zum Abschluss prüfen",
    "summary": "Die Bilanz enthält nur Meldungen aus demselben Verlauf.",
    "paragraphs": [
      "Der Hauptpfad beginnt mit vier Vela-Aktien zu 60,00 und Referenzstart 60,00. Die zulässigen Last-Meldungen sind 61,00, 60,80, 63,00, 62,40 und 61,00. Die Schwellenfolge ist 59,00, 59,00, 61,00, 61,00 und Auslösung bei 61,00.",
      "Danach verkauft die Market-Order eine Aktie zu 60,90 und drei zu 60,70. Vier gekauft minus vier verkauft ergibt Bestand null. Der Auftrag ist vollständig ausgeführt und hat keinen Rest. Nach den beiden Modellgebühren bleibt ein Gewinn von 2,20 Euro.",
      "Die Lücken-, Prozent-, Short-, Limit- und Indexbeispiele sind getrennte Lernfälle. Ihre Meldungen oder Trades gehören nicht in diese Bilanz. Lea verbindet bestätigte Startfelder, Referenzverlauf, Auslösung, Folgeorder und tatsächlichen Abschluss zu einem nachvollziehbaren Bericht."
    ],
    "columns": [
      {
        "title": "Nachziehpfad",
        "tone": "neutral",
        "points": [
          "Startschwelle 58,00, später 59,00 und 61,00.",
          "Letzter Handel 61,00 aktiviert Market vier."
        ]
      },
      {
        "title": "Abschluss",
        "tone": "positive",
        "points": [
          "Eine zu 60,90 und drei zu 60,70 verkauft.",
          "Bestand null, kein Rest, Gewinn netto 2,20 Euro."
        ]
      }
    ],
    "prompt": "Welcher Bericht passt nur zum abgeschlossenen Hauptpfad?",
    "answers": [
      {
        "label": "Vier verkauft, Bestand null, kein Orderrest, Gewinn 2,20 Euro nach Modellgebühren.",
        "explanation": "Richtig: Referenzpfad, tatsächliche Preise, Mengen und Kosten passen zusammen."
      },
      {
        "label": "Vier verkauft genau zu 61,00 und Gewinn 4,00 Euro netto.",
        "explanation": "61,00 war die Schwelle; die Ausführungen und Gebühren waren anders."
      },
      {
        "label": "Zwei Aktien bleiben wegen der getrennten Limit-Alternative.",
        "explanation": "Die Limit-Alternative gehört nicht zum vollständig ausgeführten Market-Hauptpfad."
      }
    ],
    "correct": 0,
    "rule": "Verbinde Nachziehregel und Signal mit der tatsächlich aktivierten Order und ihrer vollständigen Bilanz."
  }
];
export const ordersChapterSevenLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-07.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 7 · Trailing Stops und bedingte Aufträge',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 7', title: draft.title,
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
