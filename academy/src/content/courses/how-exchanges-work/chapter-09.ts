import type { Lesson } from '../../types';

// Eigene Übungskalender; reale Zeitzonenbeispiele beziehen sich ausdrücklich auf 2026.
const drafts = [
  {
    "title": "Die App ist offen – ist auch der Markt offen?",
    "summary": "Eine erreichbare App beweist keine mögliche Ausführung.",
    "paragraphs": [
      "Ein Geschäft braucht einen Handelsplatz und eine passende Handelszeit. Du kannst eine App öffnen, während der gewählte Platz geschlossen ist. Die App kann trotzdem alte Kurse zeigen oder einen Auftrag entgegennehmen.",
      "In unserem erfundenen Fall nimmt der Broker um 20:00 einen Auftrag an. Der gewählte Handelsplatz ist seit 18:00 geschlossen. Der Broker legt den Auftrag für später ab. Es findet um 20:00 noch kein Geschäft statt.",
      "Dieses Kapitel verwendet eigene Handelskalender und Zeitfenster. Sie sind Übungsregeln, keine Öffnungszeiten einer echten Börse. Die Zeitzonenbeispiele nennen dagegen echte Orte und feste Daten. Bei einem echten Produkt prüfst du dessen aktuellen Kalender und die Regeln des Brokers."
    ],
    "columns": [
      {
        "title": "App um 20:00",
        "tone": "neutral",
        "points": [
          "Anmeldung funktioniert.",
          "Auftrag wird für später abgelegt."
        ]
      },
      {
        "title": "Handelsplatz",
        "tone": "positive",
        "points": [
          "Seit 18:00 geschlossen.",
          "Noch keine Ausführung."
        ]
      }
    ],
    "prompt": "Was beweist die Anmeldung um 20:00?",
    "answers": [
      {
        "label": "Nur, dass die App erreichbar ist.",
        "explanation": "Richtig: Die Ausführung hängt auch vom Handelsplatz ab."
      },
      {
        "label": "Dass der Auftrag bereits ausgeführt ist.",
        "explanation": "Annahme und Ausführung sind verschiedene Schritte."
      },
      {
        "label": "Dass alle Börsen geöffnet sind.",
        "explanation": "Eine App zeigt nicht den Zustand aller Handelsplätze."
      }
    ],
    "correct": 0,
    "rule": "App-Zugang und mögliche Ausführung getrennt prüfen."
  },
  {
    "title": "Was bedeutet Session?",
    "summary": "Eine Session ist ein abgegrenzter Handelsabschnitt.",
    "paragraphs": [
      "Session ist ein englisches Wort für einen zeitlich abgegrenzten Abschnitt. Eine Handelssession kann zum Beispiel den regelmäßigen Handel eines Tages meinen. Der genaue Umfang hängt vom Handelsplatz oder vom verwendeten Datenprogramm ab.",
      "Unser Übungsplatz nennt 08:00 bis 12:00 Session A und 13:00 bis 17:00 Session B. Zwischen beiden liegt eine Pause. Der Kalendertag hat weiterhin 24 Stunden. Zwei Sessions machen daraus keine zwei Kalendertage.",
      "Lies deshalb die Definition neben der Zeitangabe. In einer anderen Darstellung kann Session den ganzen Handelstag umfassen. Derselbe Begriff garantiert weder dieselbe Dauer noch denselben Beginn."
    ],
    "columns": [
      {
        "title": "Kalendertag",
        "tone": "neutral",
        "points": [
          "00:00 bis zum nächsten 00:00.",
          "Ein Datum in einer genannten Zeitzone."
        ]
      },
      {
        "title": "Übungssessions",
        "tone": "positive",
        "points": [
          "A: 08:00–12:00.",
          "B: 13:00–17:00; dazwischen Pause."
        ]
      }
    ],
    "prompt": "Wie viele Sessions nennt unser Beispiel?",
    "answers": [
      {
        "label": "Keine, weil eine Pause vorkommt.",
        "explanation": "Eine Pause hebt die beiden Abschnitte nicht auf."
      },
      {
        "label": "Zwei.",
        "explanation": "Richtig: A und B sind getrennte Abschnitte."
      },
      {
        "label": "24, weil der Tag 24 Stunden hat.",
        "explanation": "Stunden und Sessions sind keine gleiche Einheit."
      }
    ],
    "correct": 1,
    "rule": "Den Umfang einer Session aus der angegebenen Regel lesen."
  },
  {
    "title": "Es gibt keine gemeinsame Weltöffnung",
    "summary": "Regionale Aktivität und konkrete Handelszeiten sind verschiedene Angaben.",
    "paragraphs": [
      "Menschen handeln in verschiedenen Teilen der Welt. Wenn in einem Ort der Arbeitstag beginnt, kann er anderswo enden. Darum sprechen Marktberichte oft von einer asiatischen, europäischen oder amerikanischen Session.",
      "Diese Namen beschreiben häufig regionale Aktivitätsfenster. Sie sind keine einheitlichen Öffnungszeiten aller Produkte. Ein Währungsgeschäft zwischen Banken und eine Aktie an einem bestimmten Platz folgen unterschiedlichen Regeln.",
      "Unser Beispiel nennt nur zwei Teilnehmergruppen: Gruppe A ist früher aktiv, Gruppe B später. Daraus kennen wir noch keinen Produktkalender. Frage immer nach Produkt, Handelsplatz und konkretem Zeitfenster."
    ],
    "columns": [
      {
        "title": "Regionale Beschreibung",
        "tone": "neutral",
        "points": [
          "Gruppe A früher aktiv.",
          "Gruppe B später aktiv."
        ]
      },
      {
        "title": "Noch benötigte Angaben",
        "tone": "positive",
        "points": [
          "Welches Produkt an welchem Platz?",
          "Welcher Kalender und welche Uhrzeit?"
        ]
      }
    ],
    "prompt": "Beweist „amerikanische Session“, dass jede US-Anlage handelbar ist?",
    "answers": [
      {
        "label": "Ja, alle Produkte haben identische Zeiten.",
        "explanation": "Unterschiedliche Produkte können andere Zeiten haben."
      },
      {
        "label": "Ja, auch jeder andere Kontinent ist dann geschlossen.",
        "explanation": "Aktivitätsfenster können sich überschneiden."
      },
      {
        "label": "Nein, der konkrete Kalender fehlt.",
        "explanation": "Richtig: Ein regionaler Begriff ersetzt keine Produktregel."
      }
    ],
    "correct": 2,
    "rule": "Regionale Sessionnamen nicht als universellen Börsenkalender lesen."
  },
  {
    "title": "Eine Uhrzeit braucht eine Zeitzone",
    "summary": "09:00 allein bezeichnet keinen weltweit eindeutigen Zeitpunkt.",
    "paragraphs": [
      "Eine Zeitzone legt fest, wie ein Ort seine Uhrzeit aus der Weltzeit ableitet. Berlin und New York können zur gleichen Zeit verschiedene Uhrzeiten anzeigen. Die Ereignisse passieren dadurch nicht zweimal.",
      "Eine Einladung nennt nur 09:00. Wir wissen nicht, ob die Uhr in Berlin oder New York gemeint ist. Auch das Datum fehlt. Gerade beim Wechsel zur Sommerzeit brauchen wir beides.",
      "Eindeutiger sind Datum und benannte Zeitzone zusammen. Programme verwenden dafür zum Beispiel Europe/Berlin und America/New_York. Diese Namen helfen, die Regeln des jeweiligen Datums anzuwenden."
    ],
    "columns": [
      {
        "title": "Unvollständig",
        "tone": "neutral",
        "points": [
          "09:00.",
          "Ort und Datum fehlen."
        ]
      },
      {
        "title": "Genauer",
        "tone": "positive",
        "points": [
          "20.03.2026, 09:00, Europe/Berlin.",
          "Datum und Zeitzone genannt."
        ]
      }
    ],
    "prompt": "Welche Angabe fehlt bei „09:00 morgen“ für einen sicheren Vergleich?",
    "answers": [
      {
        "label": "Die Zeitzone und ein eindeutig festgelegtes Datum.",
        "explanation": "Richtig: Auch „morgen“ hängt vom betrachteten Ort ab."
      },
      {
        "label": "Die Farbe der Uhr.",
        "explanation": "Sie ändert den Zeitpunkt nicht."
      },
      {
        "label": "Die Anzahl der Marktteilnehmer.",
        "explanation": "Sie ersetzt keine Zeitangabe."
      }
    ],
    "correct": 0,
    "rule": "Datum, Uhrzeit und Zeitzone gemeinsam notieren."
  },
  {
    "title": "UTC als gemeinsame Bezugszeit",
    "summary": "UTC hilft, denselben Zeitpunkt zwischen Orten zu vergleichen.",
    "paragraphs": [
      "UTC ist die koordinierte Weltzeit. Sie dient als gemeinsame Bezugszeit. UTC selbst wechselt nicht zwischen Sommerzeit und Normalzeit. Ortszeiten können dagegen je nach Datum einen anderen Abstand zu UTC haben.",
      "Wir nehmen einen Zeitpunkt um 14:30 UTC. Für unseren Fall gilt am betrachteten Ort UTC plus zwei Stunden. Rechne 14:30 plus zwei Stunden. Die Ortsuhr zeigt 16:30.",
      "Ein UTC-Offset ist dieser Abstand zur UTC, hier +02:00. Er beschreibt einen Abstand, nicht alle Regeln einer benannten Zeitzone. Derselbe Ort kann an einem anderen Datum einen anderen Offset haben."
    ],
    "columns": [
      {
        "title": "Bezugszeit",
        "tone": "neutral",
        "points": [
          "14:30 UTC.",
          "UTC-Offset im Fall: +02:00."
        ]
      },
      {
        "title": "Umrechnung",
        "tone": "positive",
        "points": [
          "14:30 + 2 Stunden = 16:30.",
          "Dasselbe Ereignis, andere Uhranzeige."
        ]
      }
    ],
    "prompt": "Welche Ortszeit ergibt sich?",
    "answers": [
      {
        "label": "14:32.",
        "explanation": "Der Abstand beträgt Stunden, nicht Minuten."
      },
      {
        "label": "16:30.",
        "explanation": "Richtig: Zwei Stunden werden hinzugezählt."
      },
      {
        "label": "12:30.",
        "explanation": "Das wäre ein Abstand von minus zwei Stunden."
      }
    ],
    "correct": 1,
    "rule": "Ortszeit aus UTC und dem für das Datum geltenden Offset berechnen."
  },
  {
    "title": "Von der Ortszeit zurück zu UTC",
    "summary": "Für den Rückweg wird der Offset abgezogen.",
    "paragraphs": [
      "Ein Termin liegt im Beispiel um 16:30 an einem Ort mit UTC+02:00. Du möchtest ihn in eine Liste mit UTC-Zeiten eintragen. Dafür gehst du den Rechenweg rückwärts.",
      "Ziehe zwei Stunden von 16:30 ab. Das ergibt 14:30 UTC. Bei einem negativen Offset wäre das Abziehen einer negativen Zahl ein Hinzufügen. New York mit UTC−05:00 liegt fünf Stunden hinter UTC.",
      "Ein erfundener Termin um 09:30 bei UTC−05:00 liegt deshalb um 14:30 UTC. Die beiden Rechnungen benutzen ausdrücklich genannte Offsets. Ohne Datum solltest du diese Abstände nicht für einen echten Ort voraussetzen."
    ],
    "columns": [
      {
        "title": "Ort mit +02:00",
        "tone": "neutral",
        "points": [
          "16:30 − 2 Stunden.",
          "Ergebnis 14:30 UTC."
        ]
      },
      {
        "title": "Ort mit −05:00",
        "tone": "positive",
        "points": [
          "09:30 + 5 Stunden.",
          "Ergebnis ebenfalls 14:30 UTC."
        ]
      }
    ],
    "prompt": "Was entspricht 09:30 bei UTC−05:00?",
    "answers": [
      {
        "label": "04:30 UTC.",
        "explanation": "Das wäre die falsche Rechenrichtung."
      },
      {
        "label": "09:30 UTC.",
        "explanation": "Damit würdest du den Offset weglassen."
      },
      {
        "label": "14:30 UTC.",
        "explanation": "Richtig: Die UTC-Uhr liegt fünf Stunden voraus."
      }
    ],
    "correct": 2,
    "rule": "Beim Rückweg zur UTC den angegebenen Offset abziehen."
  },
  {
    "title": "Normalzeit und Sommerzeit in Berlin",
    "summary": "Der Abstand zu UTC kann sich im Jahresverlauf ändern.",
    "paragraphs": [
      "In Berlin heißt die Normalzeit mitteleuropäische Zeit, kurz MEZ. Ihr Offset ist UTC+01:00. Die mitteleuropäische Sommerzeit heißt MESZ und hat UTC+02:00. Diese Regeln gelten für die hier genannten Daten im Jahr 2026.",
      "Am 15. Januar 2026 wird aus 14:30 UTC in Berlin 15:30. Am 15. Juli 2026 wird aus 14:30 UTC dort 16:30. Die gleiche UTC-Uhrzeit ergibt also verschiedene Ortszeiten.",
      "Bei einem zukünftigen Termin prüfst du die Regeln für dessen Datum erneut. Eine gespeicherte Differenz von zwei Stunden ist kein Ersatz für die benannte Zeitzone Europe/Berlin."
    ],
    "columns": [
      {
        "title": "15. Januar 2026",
        "tone": "neutral",
        "points": [
          "Berlin: UTC+01:00, MEZ.",
          "14:30 UTC → 15:30 Berlin."
        ]
      },
      {
        "title": "15. Juli 2026",
        "tone": "positive",
        "points": [
          "Berlin: UTC+02:00, MESZ.",
          "14:30 UTC → 16:30 Berlin."
        ]
      }
    ],
    "prompt": "Warum ergibt 14:30 UTC im Juli eine andere Berliner Ortszeit?",
    "answers": [
      {
        "label": "Weil im Juli die Sommerzeit gilt.",
        "explanation": "Richtig: Der Offset beträgt dann zwei statt einer Stunde."
      },
      {
        "label": "Weil UTC im Sommer schneller läuft.",
        "explanation": "UTC wechselt nicht zur Sommerzeit."
      },
      {
        "label": "Weil ein Termin dann zweimal stattfindet.",
        "explanation": "Eine andere Anzeige erzeugt kein zweites Ereignis."
      }
    ],
    "correct": 0,
    "rule": "Den Offset für das Datum bestimmen, nicht für den heutigen Tag."
  },
  {
    "title": "Nicht alle Orte stellen gleichzeitig um",
    "summary": "Berlin und New York haben 2026 unterschiedliche Wechseltage.",
    "paragraphs": [
      "New York beginnt seine Sommerzeit 2026 am 8. März. Berlin beginnt sie am 29. März. Dazwischen gilt in New York schon Sommerzeit, während Berlin noch Normalzeit verwendet.",
      "Unser erfundener Termin findet am 20. März 2026 um 09:30 in New York statt. Dort gilt UTC−04:00. Rechne zuerst plus vier Stunden: 13:30 UTC. Berlin hat an diesem Datum UTC+01:00. Dort ist es 14:30.",
      "Am 10. April gilt auch in Berlin Sommerzeit. Ein neuer Termin um 09:30 in New York entspricht dann 15:30 in Berlin. Der Abstand ist wieder sechs Stunden. Diese Termine sind Zeitübungen, keine zugesagten Börsenöffnungen."
    ],
    "columns": [
      {
        "title": "20. März 2026",
        "tone": "neutral",
        "points": [
          "09:30 New York = 13:30 UTC.",
          "Berlin 14:30; Abstand 5 Stunden."
        ]
      },
      {
        "title": "10. April 2026",
        "tone": "positive",
        "points": [
          "09:30 New York = 13:30 UTC.",
          "Berlin 15:30; Abstand 6 Stunden."
        ]
      }
    ],
    "prompt": "Wann zeigt Berlin den Termin vom 20. März an?",
    "answers": [
      {
        "label": "09:30.",
        "explanation": "Die beiden Ortsuhren sind nicht gleichgestellt."
      },
      {
        "label": "14:30.",
        "explanation": "Richtig: New York und Berlin haben an diesem Datum fünf Stunden Abstand."
      },
      {
        "label": "15:30.",
        "explanation": "Das wäre hier der Abstand nach dem Berliner Wechsel."
      }
    ],
    "correct": 1,
    "rule": "Zwischen unterschiedlichen Wechseltagen den Zeitabstand neu prüfen."
  },
  {
    "title": "Auch im Herbst entsteht eine Zwischenzeit",
    "summary": "Der Rückwechsel kann den Abstand erneut verändern.",
    "paragraphs": [
      "Berlin endet seine Sommerzeit 2026 am 25. Oktober. New York folgt am 1. November. Zwischen diesen Tagen verwendet Berlin bereits Normalzeit und New York noch Sommerzeit.",
      "Ein Übungstermin am 28. Oktober um 09:30 in New York entspricht 13:30 UTC. In Berlin ergibt das 14:30. Am 4. November gilt New York mit UTC−05:00. 09:30 entspricht dann 14:30 UTC und 15:30 in Berlin.",
      "Die Regel „immer sechs Stunden“ wäre für den ersten Termin falsch. Speichere den Ort und das Datum. Bei wiederholten Terminen sollte jeder Termin mit seiner eigenen Datumsregel umgerechnet werden."
    ],
    "columns": [
      {
        "title": "28. Oktober 2026",
        "tone": "neutral",
        "points": [
          "New York 09:30, UTC−04:00.",
          "Berlin 14:30."
        ]
      },
      {
        "title": "4. November 2026",
        "tone": "positive",
        "points": [
          "New York 09:30, UTC−05:00.",
          "Berlin 15:30."
        ]
      }
    ],
    "prompt": "Welche Berliner Uhrzeit gilt für den Termin am 28. Oktober?",
    "answers": [
      {
        "label": "15:30 an jedem Tag des Jahres.",
        "explanation": "Der Abstand ist nicht das ganze Jahr gleich."
      },
      {
        "label": "08:30.",
        "explanation": "Berlin liegt in diesem Beispiel vor New York."
      },
      {
        "label": "14:30.",
        "explanation": "Richtig: In dieser Zwischenzeit beträgt der Abstand fünf Stunden."
      }
    ],
    "correct": 2,
    "rule": "Auch den Herbstwechsel für das konkrete Datum berücksichtigen."
  },
  {
    "title": "Beim Umrechnen kann sich das Datum ändern",
    "summary": "Ein gleicher Zeitpunkt kann zu verschiedenen Kalendertagen gehören.",
    "paragraphs": [
      "Wir nehmen den 15. Juli 2026 um 23:30 UTC. In Berlin gilt an diesem Datum UTC+02:00. Zwei Stunden später auf der Uhr ist es 01:30. Die Uhr ist dabei über Mitternacht gegangen.",
      "In Berlin lautet das Datum deshalb bereits 16. Juli. In New York gilt UTC−04:00. Dort zeigt die Uhr am selben Zeitpunkt 19:30 am 15. Juli. Es ist überall derselbe Zeitpunkt.",
      "Schreibe beim Umrechnen das Datum mit. Sonst könnte ein Ereignis versehentlich in den falschen Tag einer Tabelle rutschen. Ein anderer Datumsname sagt allein nichts über die Reihenfolge der Geschäfte."
    ],
    "columns": [
      {
        "title": "Ausgangszeit",
        "tone": "neutral",
        "points": [
          "15. Juli 2026, 23:30 UTC.",
          "New York: 15. Juli, 19:30."
        ]
      },
      {
        "title": "Berlin",
        "tone": "positive",
        "points": [
          "Plus 2 Stunden über Mitternacht.",
          "16. Juli 2026, 01:30."
        ]
      }
    ],
    "prompt": "Welches Berliner Datum gehört zum Zeitpunkt?",
    "answers": [
      {
        "label": "16. Juli 2026.",
        "explanation": "Richtig: Die Umrechnung überschreitet Mitternacht."
      },
      {
        "label": "15. Juli um 01:30.",
        "explanation": "Damit würdest du fast einen Tag zu früh eintragen."
      },
      {
        "label": "17. Juli, weil zwei Stunden addiert werden.",
        "explanation": "Zwei Stunden sind keine zwei Tage."
      }
    ],
    "correct": 0,
    "rule": "Bei jeder Zeitumrechnung auch den Datumswechsel prüfen."
  },
  {
    "title": "Handelstag ist nicht immer Kalendertag",
    "summary": "Der Handelsplatz kann seine Abschnitte einem eigenen Handelstag zuordnen.",
    "paragraphs": [
      "Ein Handelstag ist der Tag, dem der Handelsplatz seine Geschäfte nach eigenen Regeln zuordnet. Er muss nicht genau von Mitternacht bis Mitternacht laufen. Das ist zum Beispiel bei Abschnitten wichtig, die am Vorabend beginnen.",
      "Unser erfundener Platz nennt den Abschnitt von Sonntag 18:00 bis Montag 17:00 seinen Montag-Handelstag. Alle Uhrzeiten sind hier Platzzeit. Ein Geschäft am Sonntag um 19:00 gehört nach dieser Übungsregel zum Montag-Handelstag.",
      "Das Kalenderdatum des Geschäfts bleibt trotzdem Sonntag. Für Abrechnung oder einen Bericht kann zusätzlich der zugeordnete Handelstag gebraucht werden. Welche Zuordnung wirklich gilt, steht in den Regeln des konkreten Platzes."
    ],
    "columns": [
      {
        "title": "Kalenderdatum",
        "tone": "neutral",
        "points": [
          "Geschäft: Sonntag 19:00 Platzzeit.",
          "Auf der Ortsuhr ist Sonntag."
        ]
      },
      {
        "title": "Zuordnung im Übungsfall",
        "tone": "positive",
        "points": [
          "Abschnitt beginnt Sonntag 18:00.",
          "Geschäft gehört zum Montag-Handelstag."
        ]
      }
    ],
    "prompt": "Welchem Handelstag wird Sonntag 19:00 im Fall zugeordnet?",
    "answers": [
      {
        "label": "Beiden Tagen als zwei Geschäfte.",
        "explanation": "Die Zuordnung verdoppelt das Geschäft nicht."
      },
      {
        "label": "Montag.",
        "explanation": "Richtig: So definiert es der erfundene Platz."
      },
      {
        "label": "Immer Sonntag, unabhängig von der Regel.",
        "explanation": "Handelstag und Kalenderdatum können verschieden sein."
      }
    ],
    "correct": 1,
    "rule": "Kalenderdatum und zugeordneten Handelstag auseinanderhalten."
  },
  {
    "title": "Eine tägliche Pause kann zum Kalender gehören",
    "summary": "Lange Handelszeiten bedeuten nicht lückenlose Ausführung.",
    "paragraphs": [
      "Ein Handelsplatz kann viele Stunden geöffnet sein und trotzdem eine tägliche Pause haben. Während einer geplanten Handelspause werden nach den jeweiligen Regeln keine Geschäfte abgeschlossen. Die App kann weiter erreichbar sein.",
      "Unser Übungsplatz pausiert von 10:00 bis 10:15 UTC. Der Broker nimmt um 10:05 einen Auftrag an und hält ihn bis zum Ende der Pause zurück. Das ist eine festgelegte Annahme unseres Falls, keine Regel für jeden Broker.",
      "Um 10:15 kann der nächste zulässige Schritt beginnen. Eine sofortige Ausführung ist dennoch nicht garantiert: Preisgrenze, Gegenangebote und weitere Regeln zählen weiter. „Pause vorbei“ bedeutet nur, dass diese zeitliche Sperre weg ist."
    ],
    "columns": [
      {
        "title": "Während der Pause",
        "tone": "neutral",
        "points": [
          "10:05 UTC: Auftrag beim Broker.",
          "Keine Ausführung im Fall."
        ]
      },
      {
        "title": "Danach",
        "tone": "positive",
        "points": [
          "Pause endet 10:15 UTC.",
          "Andere Ausführungsbedingungen gelten weiter."
        ]
      }
    ],
    "prompt": "Ist um 10:15 jeder Auftrag automatisch ausgeführt?",
    "answers": [
      {
        "label": "Ja, jede Preisgrenze wird dann aufgehoben.",
        "explanation": "Der Kalender löscht keine Preisgrenze."
      },
      {
        "label": "Ja, die Annahme um 10:05 war bereits der Trade.",
        "explanation": "Der Fall nennt ausdrücklich nur die Annahme."
      },
      {
        "label": "Nein, auch Gegenangebote und Auftragsregeln zählen.",
        "explanation": "Richtig: Die Zeit ist nur eine der Bedingungen."
      }
    ],
    "correct": 2,
    "rule": "Öffnungszeit ist eine Bedingung, keine Ausführungsgarantie."
  },
  {
    "title": "Wochenenden gehören in den Produktkalender",
    "summary": "24 Stunden pro Handelstag ist nicht dasselbe wie 24 Stunden jeden Tag.",
    "paragraphs": [
      "Ein Produkt kann an bestimmten Tagen sehr lange handelbar sein. Das sagt noch nicht, ob auch am Wochenende Handel möglich ist. Die Begriffe 24 Stunden und 24/7 müssen deshalb genau gelesen werden.",
      "Unser Produkt A ist an fünf festgelegten Wochentagen fast den ganzen Tag handelbar. Am Samstag ist es geschlossen. Produkt B hat im Übungsfall auch Samstagshandel. Beide Kalender sind ausdrücklich erfunden.",
      "Übertrage keinen Kalender von einem Produkt auf ein anderes. Auch bei langem Handel können Pausen oder Wartung vorkommen. Maßgeblich sind Produkt, Platz und Datum, nicht die dauerhafte Erreichbarkeit einer Internetseite."
    ],
    "columns": [
      {
        "title": "Produkt A",
        "tone": "neutral",
        "points": [
          "Samstag geschlossen.",
          "Lange Zeiten an anderen Tagen."
        ]
      },
      {
        "title": "Produkt B",
        "tone": "positive",
        "points": [
          "Samstag im Fall handelbar.",
          "Eigener Kalender erforderlich."
        ]
      }
    ],
    "prompt": "Kannst du aus langen Werktagszeiten auf Samstagshandel schließen?",
    "answers": [
      {
        "label": "Nein, dafür brauchst du den Wochenkalender.",
        "explanation": "Richtig: Die Dauer an einem Tag bestimmt nicht die geöffneten Wochentage."
      },
      {
        "label": "Ja, lange Zeiten bedeuten automatisch 24/7.",
        "explanation": "Das sind unterschiedliche Angaben."
      },
      {
        "label": "Ja, wenn die Website am Samstag lädt.",
        "explanation": "Website-Zugang beweist keine Handelsöffnung."
      }
    ],
    "correct": 0,
    "rule": "Tageszeiten und geöffnete Wochentage getrennt lesen."
  },
  {
    "title": "Feiertage richten sich nach dem konkreten Platz",
    "summary": "Ein lokaler freier Tag ist kein weltweiter Handelsschluss.",
    "paragraphs": [
      "Ein Handelskalender nennt neben regelmäßigen Zeiten auch Ausnahmen. Dazu gehören Feiertage. Ein freier Tag an deinem Wohnort muss nicht zugleich ein freier Tag am Handelsplatz sein.",
      "Am erfundenen Datum D ist Platz A wegen eines Feiertags geschlossen. Platz B handelt nach seinem üblichen Kalender. Dass beide dasselbe Produkt anbieten, macht ihre Kalender nicht gleich.",
      "Prüfe die Veröffentlichung des konkreten Handelsplatzes für das Jahr und das Produkt. Auch ein geöffnetes Geschäft in deiner Stadt ist kein Beleg. Dein eigener Kalender und der Kalender des Handelsplatzes haben unterschiedliche Aufgaben."
    ],
    "columns": [
      {
        "title": "Platz A am Datum D",
        "tone": "neutral",
        "points": [
          "Feiertag laut Übungskalender.",
          "Geschlossen."
        ]
      },
      {
        "title": "Platz B am Datum D",
        "tone": "positive",
        "points": [
          "Kein Schließtag im Fall.",
          "Übliche Zeiten gelten."
        ]
      }
    ],
    "prompt": "Welcher Kalender entscheidet über Platz A?",
    "answers": [
      {
        "label": "Allein der Kalender von Platz B.",
        "explanation": "B hat im Fall andere Regeln."
      },
      {
        "label": "Der passende Handelskalender von Platz A.",
        "explanation": "Richtig: Er nennt die für diesen Platz geltenden Ausnahmen."
      },
      {
        "label": "Der Schulkalender am Wohnort.",
        "explanation": "Schulferien bestimmen die Börsenöffnung nicht."
      }
    ],
    "correct": 1,
    "rule": "Feiertage im Kalender des Produkts und Handelsplatzes prüfen."
  },
  {
    "title": "Ein Handelstag kann früher enden",
    "summary": "Eine verkürzte Öffnung ist nicht dasselbe wie ein voller Schließtag.",
    "paragraphs": [
      "Ein verkürzter Handelstag hat weniger Handelsstunden als ein gewöhnlicher Tag. Der Kalender kann zum Beispiel einen früheren Schluss nennen. Es gibt dann Handel, aber nicht bis zur üblichen Endzeit.",
      "Unser Übungsplatz handelt normalerweise von 08:00 bis 17:00 UTC. Am Datum K endet er bereits um 13:00 UTC. Statt neun Stunden stehen fünf Stunden im Kalender. Zwischen 13:00 und 17:00 ist er an K geschlossen.",
      "Ein gespeicherter Wochenplan würde die Ausnahme übersehen. Lies deshalb zuerst den konkreten Tag. Er kann geschlossen, verkürzt oder regulär sein. Die Zahl der Stunden allein sagt noch nichts über die ausgeführte Menge."
    ],
    "columns": [
      {
        "title": "Normaler Übungstag",
        "tone": "neutral",
        "points": [
          "08:00–17:00 UTC.",
          "9 Stunden."
        ]
      },
      {
        "title": "Datum K",
        "tone": "positive",
        "points": [
          "08:00–13:00 UTC.",
          "5 Stunden; Ende 4 Stunden früher."
        ]
      }
    ],
    "prompt": "Wie lange ist der Platz am Datum K geöffnet?",
    "answers": [
      {
        "label": "Neun Stunden wie immer.",
        "explanation": "Der Kalender nennt einen früheren Schluss."
      },
      {
        "label": "Gar nicht, weil der Tag verkürzt ist.",
        "explanation": "Verkürzt ist nicht vollständig geschlossen."
      },
      {
        "label": "Fünf Stunden.",
        "explanation": "Richtig: Von 08:00 bis 13:00 liegen fünf Stunden."
      }
    ],
    "correct": 2,
    "rule": "Ausnahmen für das Datum vor dem regelmäßigen Wochenplan lesen."
  },
  {
    "title": "Reguläre und erweiterte Handelszeit",
    "summary": "Mehrere Zeitfenster können eigene Zugangsregeln haben.",
    "paragraphs": [
      "Reguläre Handelszeit nennt ein festgelegtes Hauptfenster. Daneben kann es erweiterten Handel geben. Vorbörslicher Handel liegt vor diesem Hauptfenster, nachbörslicher Handel danach. Die Begriffe müssen zum betrachteten Platz passen.",
      "Unser erfundener Platz hat das Hauptfenster 09:00 bis 16:00. Vorher gibt es ein Zusatzfenster von 07:00 bis 09:00. Der Broker im Beispiel bietet dem Nutzer aber nur das Hauptfenster an. Alle Zeiten gelten in derselben Platzzeitzone.",
      "Der Nutzer kann um 08:00 deshalb nicht über diesen Broker handeln, obwohl das Zusatzfenster existiert. Zusatzfenster können andere Auftragsarten oder Teilnehmer zulassen. Prüfe sowohl die Platzregeln als auch deinen tatsächlichen Zugang."
    ],
    "columns": [
      {
        "title": "Handelsplatz",
        "tone": "neutral",
        "points": [
          "Zusatzfenster 07:00–09:00.",
          "Hauptfenster 09:00–16:00."
        ]
      },
      {
        "title": "Broker im Fall",
        "tone": "positive",
        "points": [
          "Zugang nur zum Hauptfenster.",
          "Um 08:00 kein Handel für diesen Nutzer."
        ]
      }
    ],
    "prompt": "Kann der Nutzer über diesen Broker um 08:00 handeln?",
    "answers": [
      {
        "label": "Nein, sein Zugang umfasst nur das Hauptfenster.",
        "explanation": "Richtig: Ein vorhandenes Zusatzfenster ist nicht automatisch zugänglich."
      },
      {
        "label": "Ja, weil jedes Fenster jedem offensteht.",
        "explanation": "Der Fall nennt eine Zugangsbeschränkung."
      },
      {
        "label": "Ja, weil Hauptfenster schon 07:00 beginnt.",
        "explanation": "Das Hauptfenster beginnt laut Fall um 09:00."
      }
    ],
    "correct": 0,
    "rule": "Vorhandene Handelszeit und eigenen Zugang gemeinsam prüfen."
  },
  {
    "title": "Geöffnet kann verschiedene Handelsphasen bedeuten",
    "summary": "Aufträge sammeln und laufend ausführen sind unterschiedliche Abläufe.",
    "paragraphs": [
      "Ein Handelsabschnitt kann mit einer Sammelauktion beginnen. Dabei werden Aufträge zunächst gesammelt. Ein Geschäft entsteht erst beim vorgesehenen Auktionsschritt. Im fortlaufenden Handel können passende Aufträge laufend zusammentreffen.",
      "Unser Übungsplatz sammelt von 08:55 bis 09:00. Um 09:00 folgt die Auktion. Danach beginnt der fortlaufende Handel. Ein Auftrag um 08:57 ist damit noch kein Beleg für eine sofortige Ausführung.",
      "Die Uhrzeit gehört deshalb zusammen mit der Handelsphase gelesen. Details zu besonderen Phasen folgen im nächsten Kapitel. Hier reicht die Unterscheidung: Ein erreichbares Orderbuch kann Aufträge sammeln, ohne sie bereits auszuführen."
    ],
    "columns": [
      {
        "title": "08:57 im Fall",
        "tone": "neutral",
        "points": [
          "Sammelphase läuft.",
          "Auftrag ist noch kein sofortiger Abschluss."
        ]
      },
      {
        "title": "Ab 09:00 im Fall",
        "tone": "positive",
        "points": [
          "Vorgesehene Auktion.",
          "Danach fortlaufender Handel."
        ]
      }
    ],
    "prompt": "Was musst du neben der Öffnungszeit kennen?",
    "answers": [
      {
        "label": "Nichts, jeder angenommene Auftrag ist ein Trade.",
        "explanation": "Annahme bedeutet nicht automatisch Ausführung."
      },
      {
        "label": "Die Handelsphase und ihre Ausführungsregeln.",
        "explanation": "Richtig: Sammeln und Ausführen sind unterschiedliche Vorgänge."
      },
      {
        "label": "Nur die Farbe der Kursanzeige.",
        "explanation": "Eine Farbe erklärt keine Handelsphase."
      }
    ],
    "correct": 1,
    "rule": "Uhrzeit und Handelsphase zusammen betrachten."
  },
  {
    "title": "Überlappende Sessions ausrechnen",
    "summary": "Gemeinsame Zeitfenster lassen sich vergleichen, wenn die Zeitzone gleich ist.",
    "paragraphs": [
      "Zwei Gruppen können gleichzeitig aktiv sein. Ihre gemeinsame Zeit heißt Sessionüberlappung. Rechne sie erst aus, nachdem beide Zeitfenster in derselben Zeitzone vorliegen.",
      "Gruppe A ist im Beispiel von 08:00 bis 12:00 UTC aktiv. Gruppe B von 10:00 bis 16:00 UTC. Die gemeinsame Zeit beginnt beim späteren Beginn, also 10:00. Sie endet beim früheren Ende, also 12:00. Das sind zwei Stunden.",
      "Eine Überlappung allein beweist keine günstige Ausführung. Dafür brauchst du weiter Angebote, Mengen und Kosten. Zwei aktive Gruppen können auch ganz andere Produkte handeln. Die Rechnung beschreibt zuerst nur gemeinsame Uhrzeit."
    ],
    "columns": [
      {
        "title": "Zwei Zeitfenster",
        "tone": "neutral",
        "points": [
          "A: 08:00–12:00 UTC.",
          "B: 10:00–16:00 UTC."
        ]
      },
      {
        "title": "Gemeinsame Zeit",
        "tone": "positive",
        "points": [
          "10:00–12:00 UTC.",
          "Dauer 2 Stunden."
        ]
      }
    ],
    "prompt": "Wie groß ist die gemeinsame Zeit?",
    "answers": [
      {
        "label": "Acht Stunden.",
        "explanation": "Das wäre ein anderes Zeitmaß, nicht die Überlappung."
      },
      {
        "label": "Vier Stunden mit sicher engem Spread.",
        "explanation": "Die Dauer ist zwei Stunden; ein Spread ist nicht genannt."
      },
      {
        "label": "Zwei Stunden.",
        "explanation": "Richtig: Gemeinsam aktiv sind beide von 10:00 bis 12:00."
      }
    ],
    "correct": 2,
    "rule": "Gemeinsame Uhrzeit berechnen und Handelbarkeit zusätzlich prüfen."
  },
  {
    "title": "Eine Nachricht braucht ebenfalls eine Zeitzone",
    "summary": "Zeitangaben in Nachrichtenkalendern können anders eingestellt sein als dein Chart.",
    "paragraphs": [
      "Ein Nachrichtenkalender nennt eine geplante Veröffentlichung. Seine Uhrzeit kann in UTC, Ortszeit oder einer ausgewählten Anzeigezone stehen. Bevor du sie mit einem Chart vergleichst, prüfe diese Einstellung.",
      "Unsere erfundene Meldung ist am 15. Juli 2026 für 12:00 UTC angekündigt. Berlin liegt dann zwei Stunden voraus. Die geplante Berliner Anzeige lautet 14:00. In einem Chart mit UTC-Anzeige bleibt es 12:00.",
      "Die geplante Zeit ist außerdem nicht automatisch die Zeit, zu der deine App die Nachricht empfängt. Verzögerungen sind möglich. Für eine genaue Reihenfolge brauchst du passende Zeitstempel, also Angaben zum Zeitpunkt eines Ereignisses."
    ],
    "columns": [
      {
        "title": "Meldung im Übungsfall",
        "tone": "neutral",
        "points": [
          "Geplant: 15. Juli, 12:00 UTC.",
          "Empfangszeit noch nicht genannt."
        ]
      },
      {
        "title": "Anzeige",
        "tone": "positive",
        "points": [
          "Berlin: geplant 14:00.",
          "UTC-Chart: geplant 12:00."
        ]
      }
    ],
    "prompt": "Welche geplante Berliner Zeit entspricht der Meldung?",
    "answers": [
      {
        "label": "14:00.",
        "explanation": "Richtig: Im Juli werden zwei Stunden hinzugezählt."
      },
      {
        "label": "12:00 unabhängig von der Anzeigezone.",
        "explanation": "Die Ortsanzeige hat einen anderen Offset."
      },
      {
        "label": "Genau die spätere Empfangszeit jeder App.",
        "explanation": "Geplanter Zeitpunkt und Empfang müssen nicht identisch sein."
      }
    ],
    "correct": 0,
    "rule": "Nachrichtenzeit und Chartzeit auf dieselbe Bezugszeit bringen."
  },
  {
    "title": "Zeitstempel für Ereignis und Empfang unterscheiden",
    "summary": "Zwei verschiedene Zeitangaben können beide richtig sein.",
    "paragraphs": [
      "Ein Zeitstempel ist eine gespeicherte Zeitangabe. Er kann die Ausführung am Platz oder den Empfang beim Datenanbieter beschreiben. Deshalb gehört die Bedeutung des Stempels zu den Daten.",
      "Im Beispiel erfolgt ein Trade um 12:00:00 UTC. Die App empfängt ihn um 12:00:02 UTC. Die Verzögerung beträgt zwei Sekunden. Beide Uhren sind für den Fall gleich abgeglichen. Es handelt sich weiterhin um einen Trade.",
      "Wenn Uhren nicht abgeglichen sind, könnte ein Vergleich zusätzlich einen Uhrfehler enthalten. Eine sichtbare Empfangszeit beweist dann keine genaue Platzzeit. Nutze für Reihenfolgen die passende Zeitart und nenne offene Grenzen."
    ],
    "columns": [
      {
        "title": "Am Handelsplatz",
        "tone": "neutral",
        "points": [
          "Ausführung 12:00:00 UTC.",
          "Ereigniszeit."
        ]
      },
      {
        "title": "In der App",
        "tone": "positive",
        "points": [
          "Empfang 12:00:02 UTC.",
          "Im Fall 2 Sekunden Verzögerung."
        ]
      }
    ],
    "prompt": "Was beschreibt 12:00:02 im Beispiel?",
    "answers": [
      {
        "label": "Die ursprüngliche Platzzeit des Trades.",
        "explanation": "Dafür ist 12:00:00 angegeben."
      },
      {
        "label": "Den Empfang in der App.",
        "explanation": "Richtig: Die Ausführung erfolgte bereits zwei Sekunden früher."
      },
      {
        "label": "Eine zweite Ausführung.",
        "explanation": "Der Fall nennt nur einen Trade."
      }
    ],
    "correct": 1,
    "rule": "Bei Zeitstempeln fragen: Zeit welches Ereignisses und welcher Uhr?"
  },
  {
    "title": "Ein Tageschart braucht eine Tagesgrenze",
    "summary": "Andere Tagesgrenzen können dieselben Geschäfte anders gruppieren.",
    "paragraphs": [
      "Ein Chart fasst Geschäfte zu Zeitabschnitten zusammen. Bei Tageskerzen muss feststehen, wann ein neuer Tag beginnt. Manche Datenprogramme verwenden dafür eine Kalendergrenze, andere eine Sessionregel.",
      "Wir betrachten einfache Kalendertage. Ein Trade am 15. Juli 2026 um 23:30 UTC gehört in der UTC-Gruppierung zum 15. Juli. Bei einer Gruppierung nach Berliner Mitternacht liegt er am 16. Juli um 01:30 und gehört zum 16. Juli.",
      "Der Trade und sein Preis bleiben gleich. Nur die Zuordnung zur Tagesgruppe ändert sich. Eine andere Beschriftung beweist deshalb noch keinen fehlerhaften Kurs. Prüfe die Gruppierungsregel, bevor du Tagescharts vergleichst."
    ],
    "columns": [
      {
        "title": "UTC-Kalendertage",
        "tone": "neutral",
        "points": [
          "Trade: 15. Juli, 23:30 UTC.",
          "Tagesgruppe 15. Juli."
        ]
      },
      {
        "title": "Berliner Kalendertage",
        "tone": "positive",
        "points": [
          "Derselbe Trade: 16. Juli, 01:30.",
          "Tagesgruppe 16. Juli."
        ]
      }
    ],
    "prompt": "Warum erscheint derselbe Trade in verschiedenen Tagesgruppen?",
    "answers": [
      {
        "label": "Weil er zweimal ausgeführt wurde.",
        "explanation": "Ein anderes Datum erzeugt kein weiteres Geschäft."
      },
      {
        "label": "Weil jeder Chart einen neuen Preis erfindet.",
        "explanation": "Hier wird nur die Zeitgruppe geändert."
      },
      {
        "label": "Weil die Gruppierung andere Tagesgrenzen verwendet.",
        "explanation": "Richtig: Der Trade selbst bleibt unverändert."
      }
    ],
    "correct": 2,
    "rule": "Bei Tagescharts die Zeitzone und die Grenze des Tages prüfen."
  },
  {
    "title": "Tagesgültigkeit heißt nicht automatisch bis Mitternacht",
    "summary": "Die Gültigkeit eines Auftrags folgt der angegebenen Regel.",
    "paragraphs": [
      "Eine Tagesorder ist ein Auftrag mit begrenzter Tagesgültigkeit. Welcher Handelsabschnitt dafür zählt, legen die Auftragsregeln fest. Deine eigene Mitternacht ist nicht automatisch die Ablaufzeit.",
      "Im Übungsfall läuft eine Tagesorder mit Ende des Hauptfensters um 16:00 Platzzeit ab. Um 15:50 wird sie angenommen und bis 16:00 nicht ausgeführt. Sie verfällt dann laut Regel. Ein Zusatzfenster nach 16:00 verlängert sie hier nicht.",
      "Prüfe Gültigkeit und Status des konkreten Auftrags. Bei einem anderen Broker oder einer anderen Auftragsart kann eine andere Regel gelten. Der Kalender allein beantwortet nicht jede Frage zur Lebensdauer des Auftrags."
    ],
    "columns": [
      {
        "title": "Auftrag im Fall",
        "tone": "neutral",
        "points": [
          "Angenommen 15:50 Platzzeit.",
          "Keine Ausführung bis 16:00."
        ]
      },
      {
        "title": "Gültigkeitsregel",
        "tone": "positive",
        "points": [
          "Ende des Hauptfensters 16:00.",
          "Danach verfallen; keine automatische Verlängerung."
        ]
      }
    ],
    "prompt": "Was passiert um 16:00 mit der nicht ausgeführten Order im Fall?",
    "answers": [
      {
        "label": "Sie verfällt nach der genannten Regel.",
        "explanation": "Richtig: Das Zusatzfenster verlängert sie hier nicht."
      },
      {
        "label": "Sie bleibt immer bis deiner Mitternacht gültig.",
        "explanation": "Die Regel nennt das Ende des Hauptfensters."
      },
      {
        "label": "Sie gilt automatisch als ausgeführt.",
        "explanation": "Ablauf und Ausführung sind verschiedene Zustände."
      }
    ],
    "correct": 0,
    "rule": "Auftragsgültigkeit mit der Sessionregel und dem Status abgleichen."
  },
  {
    "title": "Dasselbe Produkt kann verschiedene Zeitfenster haben",
    "summary": "Produktname allein reicht für die Kalenderwahl nicht.",
    "paragraphs": [
      "Dasselbe Wertpapier kann an mehreren Handelsplätzen angeboten werden. Die Plätze können andere Zeitfenster verwenden. Auch dein Broker kann nur bestimmte Wege anbieten.",
      "Unser Wertpapier W ist an Platz A von 08:00 bis 16:00 UTC handelbar. Platz B hat im Fall 12:00 bis 20:00 UTC. Um 18:00 ist nur B innerhalb seines Fensters. Der Nutzer hat aber nur Zugang zu A.",
      "Dass W irgendwo angeboten wird, ermöglicht diesem Nutzer noch keine Ausführung um 18:00. Zusätzlich zu Produkt und Uhrzeit müssen Platz und Zugangsweg passen. Ein alter Kurs von A ist kein aktuelles Angebot von B."
    ],
    "columns": [
      {
        "title": "Platz A",
        "tone": "neutral",
        "points": [
          "08:00–16:00 UTC.",
          "Einziger Zugang des Nutzers."
        ]
      },
      {
        "title": "Platz B",
        "tone": "positive",
        "points": [
          "12:00–20:00 UTC.",
          "Um 18:00 offen, aber kein Zugang im Fall."
        ]
      }
    ],
    "prompt": "Kann der Nutzer um 18:00 allein wegen des offenen Platzes B handeln?",
    "answers": [
      {
        "label": "Ja, A bleibt offen, solange B offen ist.",
        "explanation": "A hat seinen eigenen Schluss um 16:00."
      },
      {
        "label": "Nein, ihm fehlt der Zugang zu B.",
        "explanation": "Richtig: Er kann im Fall nur A nutzen."
      },
      {
        "label": "Ja, der Produktname öffnet jeden Handelsweg.",
        "explanation": "Produkt und Zugang sind getrennte Bedingungen."
      }
    ],
    "correct": 1,
    "rule": "Kalender für Produkt, Platz und verfügbaren Handelsweg wählen."
  },
  {
    "title": "Dein Check für Handelszeiten",
    "summary": "Ein gemischter Fall verbindet Datum, Umrechnung und Ausführungsregeln.",
    "paragraphs": [
      "Prüfe zuerst Produkt, Handelsplatz und Datum. Lies danach Kalenderausnahmen, Handelsphase und Auftragsregeln. Rechne erst dann in deine Anzeigezone um. Für eine echte Ausführung brauchst du außerdem Zugang und passende Gegenangebote.",
      "Unser erfundener Platz beginnt sein Hauptfenster am 20. März 2026 um 09:30 New Yorker Zeit. An diesem Datum entspricht das 13:30 UTC und 14:30 in Berlin. Es gibt im Fall keine Feiertagsausnahme. Der Nutzer hat Zugang nur zu diesem Hauptfenster.",
      "Um 14:20 Berliner Zeit ist die App offen und nimmt den Auftrag für später an. Das Hauptfenster beginnt erst zehn Minuten danach. Auch um 14:30 ist eine Ausführung noch nicht sicher. Die Preisgrenze und passende Gegenangebote bleiben erforderlich. Im nächsten Kapitel betrachten wir besondere Handelsphasen."
    ],
    "columns": [
      {
        "title": "Bekannte Zeiten",
        "tone": "neutral",
        "points": [
          "20. März 2026: 09:30 New York.",
          "13:30 UTC = 14:30 Berlin."
        ]
      },
      {
        "title": "Zustand um 14:20 Berlin",
        "tone": "positive",
        "points": [
          "Noch 10 Minuten bis zum Hauptfenster.",
          "Auftrag nur angenommen; Ausführung offen."
        ]
      }
    ],
    "prompt": "Was ist um 14:20 Berliner Zeit durch den Fall belegt?",
    "answers": [
      {
        "label": "Der Auftrag ist sicher um 14:20 ausgeführt.",
        "explanation": "Das Hauptfenster hat noch nicht begonnen."
      },
      {
        "label": "Das Hauptfenster beginnt immer um 15:30 Berlin.",
        "explanation": "Am genannten Datum beträgt der Abstand fünf Stunden."
      },
      {
        "label": "Die App nimmt den Auftrag an; das Hauptfenster beginnt erst in zehn Minuten.",
        "explanation": "Richtig: Die Annahme beweist keinen Abschluss."
      }
    ],
    "correct": 2,
    "rule": "Datum, Kalender, Zeitzone, Phase, Zugang und Auftrag gemeinsam prüfen."
  }
] as const;

export const marketBasicsChapterNineLessons: Lesson[] = drafts.map((draft, index) => {
  const key = `how-exchanges-work.chapter-09.lesson-${String(index + 1).padStart(2, '0')}`;
  return {
    id: key, title: draft.title, summary: draft.summary,
    sourceUnit: 'Kapitel 9 · Handelszeiten und Sessions', sourceAnchors: [draft.title],
    durationMinutes: 6, xp: 35, status: 'published',
    steps: [
      { id: `${key}.explain`, type: 'explanation', eyebrow: 'Trading von null · Kapitel 9', title: draft.title, paragraphs: [...draft.paragraphs], callout: draft.rule },
      { id: `${key}.compare`, type: 'comparison', title: 'Das Beispiel auf einen Blick', columns: draft.columns.map((column) => ({ ...column, points: [...column.points] })) },
      { id: `${key}.question`, type: 'question', title: 'Kurz prüfen', prompt: draft.prompt, correctOptionId: `choice-${draft.correct}`, options: draft.answers.map((answer, option) => ({ id: `choice-${option}`, ...answer })) },
      { id: `${key}.recap`, type: 'recap', title: 'Das nimmst du mit', points: [draft.rule, draft.summary] },
    ],
  };
});
