import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Vom Bildschirm bis zum Handelsplatz",
    "summary": "Ein Handelsweg hat mehrere Stationen und Rückmeldungen.",
    "paragraphs": [
      "Mira besitzt sieben Aktien der erfundenen Firma Elva. Sie will alle sieben mit einem Verkaufslimit von 40,20 Euro anbieten. Ihre App schickt den Auftrag S17 an den Broker. Der Broker ist der Anbieter, der ihren Auftrag prüft und weiterleitet.",
      "Im Lernfall sendet der Broker den Auftrag zum Handelsplatz Nord. Dort können passende Kaufangebote zu Ausführungen führen. Eine Rückmeldung läuft wieder zu Mira zurück. Das Weiterleiten einer Order nennt man Routing.",
      "Diese Stationen sind ein vereinfachter Handelsweg. Echte Anbieter können weitere Systeme und eigene Ausführungswege verwenden. Wir prüfen jede Bestätigung danach, von welcher Station sie kommt und was sie tatsächlich bestätigt."
    ],
    "columns": [
      {
        "title": "Hinweg",
        "tone": "neutral",
        "points": [
          "App → Broker → Handelsplatz Nord.",
          "S17: sieben verkaufen, Limit 40,20."
        ]
      },
      {
        "title": "Rückweg",
        "tone": "positive",
        "points": [
          "Annahme und Ausführung sind verschiedene Meldungen.",
          "Die Herkunft der Bestätigung zählt."
        ]
      }
    ],
    "prompt": "Was bedeutet Routing in diesem Fall?",
    "answers": [
      {
        "label": "Das Weiterleiten des Auftrags auf seinem Handelsweg.",
        "explanation": "Richtig: Unterscheide den Auftragsweg von den später bestätigten Geschäften."
      },
      {
        "label": "Ein bereits abgeschlossener Verkauf.",
        "explanation": "Weiterleitung allein bestätigt keinen Handel."
      },
      {
        "label": "Eine Zusage für genau 40,20 Euro.",
        "explanation": "Das Verkaufslimit ist eine Preisuntergrenze, kein Festpreis."
      }
    ],
    "correct": 0,
    "rule": "Unterscheide den Auftragsweg von den später bestätigten Geschäften."
  },
  {
    "title": "Eine Annahme ist nur für ihre Station eindeutig",
    "summary": "Brokerannahme und Platzannahme getrennt lesen.",
    "paragraphs": [
      "Der Broker meldet um 10:01:10: S17 angenommen. Damit bestätigt er in unserem Modell den Eingang und seine Prüfung. Vom Handelsplatz Nord liegt noch keine Annahme vor.",
      "Eine Sekunde später bestätigt Nord den offenen Verkaufsauftrag über sieben. Auch das ist noch kein Verkauf. Erst eine Ausführung mit Menge und Preis bestätigt ein Geschäft.",
      "Eine Oberfläche kann verschiedene Annahmen unter ähnlich kurzen Wörtern anzeigen. Mira liest deshalb die Erklärung des Status und seine Herkunft. Sie nimmt nicht an, dass jede Anzeige „angenommen“ dieselbe Station meint."
    ],
    "columns": [
      {
        "title": "Broker bestätigt",
        "tone": "neutral",
        "points": [
          "S17 beim Broker angenommen.",
          "Nord noch nicht bestätigt."
        ]
      },
      {
        "title": "Platz bestätigt",
        "tone": "positive",
        "points": [
          "Sieben am Platz offen.",
          "Noch keine Aktie verkauft."
        ]
      }
    ],
    "prompt": "Wie viele Verkäufe beweist die Brokerannahme allein?",
    "answers": [
      {
        "label": "Mindestens einen Verkauf.",
        "explanation": "Auch eine Teilmenge braucht eine Ausführungsbestätigung."
      },
      {
        "label": "Null bestätigte Verkäufe.",
        "explanation": "Richtig: Eine Annahme beweist nur den ausdrücklich genannten Zustand an ihrer Station."
      },
      {
        "label": "Sieben Verkäufe.",
        "explanation": "Die gewünschte Menge ist keine Ausführungsmenge."
      }
    ],
    "correct": 1,
    "rule": "Eine Annahme beweist nur den ausdrücklich genannten Zustand an ihrer Station."
  },
  {
    "title": "Ein Auftrag kann mehrere Teilaufträge bekommen",
    "summary": "Bei aufgeteilten Wegen Mengen und Gebühren zusammenführen.",
    "paragraphs": [
      "Dies ist ein eigener Kaufvergleich, nicht Miras Verkauf. Ben will vier Rila-Aktien kaufen. Ein erfundener Router sendet zwei zum Platz West und zwei zum Platz Ost. West bestätigt zwei zu 25,00, Ost zwei zu 25,10 Euro.",
      "Der Kaufwert beträgt 50,00 plus 50,20, also 100,20 Euro. Der eigene Tarif kostet je ausgeführtem Teilauftrag 0,20 und zusätzlich 0,01 je Aktie. Zwei Teilaufträge ergeben 0,40 feste Kosten und 0,04 Stückkosten.",
      "Damit werden 100,64 Euro belastet. Der Router hat hier eine feste Aufteilung verwendet. Wir behaupten weder den besten möglichen Weg noch eine allgemein gültige Gebührenregel. Die ursprünglichen vier Stück und die zwei Teilaufträge dürfen nicht als sechs Käufe gezählt werden."
    ],
    "columns": [
      {
        "title": "Bestätigte Teilaufträge",
        "tone": "neutral",
        "points": [
          "West: zwei zu 25,00.",
          "Ost: zwei zu 25,10."
        ]
      },
      {
        "title": "Gemeinsame Rechnung",
        "tone": "positive",
        "points": [
          "Vier gekauft; Kaufwert 100,20.",
          "Gebühren 0,44; Belastung 100,64."
        ]
      }
    ],
    "prompt": "Wie hoch ist die Belastung nach diesem Tarif?",
    "answers": [
      {
        "label": "100,44 Euro.",
        "explanation": "Bei zwei ausgeführten Teilaufträgen fallen zweimal 0,20 an."
      },
      {
        "label": "150,64 Euro.",
        "explanation": "Die Gesamtorder und ihre Teile sind keine zusätzlichen Käufe."
      },
      {
        "label": "100,64 Euro.",
        "explanation": "Richtig: Zähle jede bestätigte Ausführung einmal und rechne Gebühren nach der festgelegten Abrechnungseinheit."
      }
    ],
    "correct": 2,
    "rule": "Zähle jede bestätigte Ausführung einmal und rechne Gebühren nach der festgelegten Abrechnungseinheit."
  },
  {
    "title": "Ein fest gewählter Platz garantiert keine volle Menge",
    "summary": "Direkter Weg und Ausführbarkeit sind verschiedene Fragen.",
    "paragraphs": [
      "Ben betrachtet eine getrennte Alternative: Er schickt alle vier Rila-Käufe ausschließlich zum Platz Süd. Dort steht im Übungsbuch nur eine Aktie zu 25,00. Seine Limit-Kauforder darf höchstens 25,00 bezahlen.",
      "Eine Aktie wird bestätigt gekauft. Drei bleiben am Platz offen. Ein direkter Weg bedeutet hier, dass Süd fest vorgegeben ist. Er erzeugt keine zusätzlichen Verkaufsangebote und keine Zusage für alle vier Stück.",
      "Der Durchschnitt 25,00 dieses Teilkaufs lässt sich nicht ohne Weiteres als besserer voller Kauf mit dem vorigen Viererfall vergleichen. Mengenabdeckung, Restzustand und Gebühren gehören zum Vergleich. Beide Fälle sind Alternativen."
    ],
    "columns": [
      {
        "title": "Festes Ziel",
        "tone": "neutral",
        "points": [
          "Nur Platz Süd.",
          "Eine passende Aktie verfügbar."
        ]
      },
      {
        "title": "Bestätigtes Ergebnis",
        "tone": "positive",
        "points": [
          "Eine gekauft, drei offen.",
          "Kein vollständiger Viererkauf."
        ]
      }
    ],
    "prompt": "Wie viele der vier Aktien sind gekauft?",
    "answers": [
      {
        "label": "Eine Aktie.",
        "explanation": "Richtig: Ein festes Ziel sagt noch nichts über eine vollständige Ausführung aus."
      },
      {
        "label": "Vier Aktien.",
        "explanation": "Die gewählte Zieladresse schafft keine Menge."
      },
      {
        "label": "Null Aktien.",
        "explanation": "Eine Ausführung ist ausdrücklich bestätigt."
      }
    ],
    "correct": 0,
    "rule": "Ein festes Ziel sagt noch nichts über eine vollständige Ausführung aus."
  },
  {
    "title": "Marktdaten und Auftragsmeldungen haben eigene Wege",
    "summary": "Ein bewegter Chart beweist keine funktionierende Orderverbindung.",
    "paragraphs": [
      "Zurück zu Mira: Der Chart in ihrer App bewegt sich weiter. Gleichzeitig kommt zu S17 keine neue Auftragsmeldung an. Preise und Auftragsberichte können über unterschiedliche Verbindungen eintreffen.",
      "Die App kann also aktuelle Kurse zeigen, während die Orderverbindung gestört ist. Umgekehrt kann die Auftragsverbindung funktionieren, obwohl der Datenstrom keine neuen Kurse zeigt. Ein frischer Preis ist kein Orderstatus.",
      "Mira prüft Datenzeit, Verbindungshinweise und die bestätigten Meldungen zu S17 getrennt. Das vermeidet den Schluss, dass ein einzelnes grünes Symbol alle benötigten Wege belegt."
    ],
    "columns": [
      {
        "title": "Marktdaten",
        "tone": "neutral",
        "points": [
          "Zeigen Kurse oder Angebote.",
          "Können weiter eintreffen."
        ]
      },
      {
        "title": "Ordermeldungen",
        "tone": "positive",
        "points": [
          "Zeigen Annahme, Ausführung oder Reststatus.",
          "Müssen separat geprüft werden."
        ]
      }
    ],
    "prompt": "Was beweist ein bewegter Chart über S17?",
    "answers": [
      {
        "label": "Dass alle sieben verkauft sind.",
        "explanation": "Der Chart enthält nicht Miras Ausführungsbericht."
      },
      {
        "label": "Keine neue Annahme oder Ausführung von S17.",
        "explanation": "Richtig: Prüfe Marktdaten und Auftragsmeldungen als getrennte Informationswege."
      },
      {
        "label": "Dass S17 storniert wurde.",
        "explanation": "Kursänderungen sind keine Stornobestätigung."
      }
    ],
    "correct": 1,
    "rule": "Prüfe Marktdaten und Auftragsmeldungen als getrennte Informationswege."
  },
  {
    "title": "Alte Preise am Zeitstempel erkennen",
    "summary": "Eine Anzeige kann sichtbar bleiben und trotzdem veraltet sein.",
    "paragraphs": [
      "Miras Uhr und die Datenzeit verwenden hier dieselbe Uhrzeitbasis. Es ist 10:01:10. Das letzte Kursbild trägt 10:00:40. Das Bild ist damit 30 Sekunden alt.",
      "Die Anzeige kann weiterhin deutlich und farbig sein. Das macht das alte Angebot nicht aktuell. Wir wissen nicht, ob diese Preise oder Mengen am Handelsplatz noch verfügbar sind.",
      "In dieser Übung kennzeichnet Mira das Bild als veraltet und nutzt es nicht als aktuelle Ausführungszusage. Wie alt Daten im Einzelfall sein dürfen, braucht einen passenden Maßstab; 30 Sekunden sind keine allgemeine technische Fehlergrenze."
    ],
    "columns": [
      {
        "title": "Zeitvergleich",
        "tone": "neutral",
        "points": [
          "Jetzt 10:01:10.",
          "Letztes Kursbild 10:00:40."
        ]
      },
      {
        "title": "Aussagegrenze",
        "tone": "positive",
        "points": [
          "Datenalter 30 Sekunden.",
          "Aktuelles Angebot unbekannt."
        ]
      }
    ],
    "prompt": "Wie alt ist das Kursbild?",
    "answers": [
      {
        "label": "70 Sekunden.",
        "explanation": "Sekunden werden über die volle Minute hinweg gerechnet."
      },
      {
        "label": "Null Sekunden, weil es sichtbar ist.",
        "explanation": "Sichtbarkeit erneuert den Zeitstempel nicht."
      },
      {
        "label": "30 Sekunden.",
        "explanation": "Richtig: Prüfe die Datenzeit mit einer vergleichbaren Uhr, bevor du ein Angebot als aktuell behandelst."
      }
    ],
    "correct": 2,
    "rule": "Prüfe die Datenzeit mit einer vergleichbaren Uhr, bevor du ein Angebot als aktuell behandelst."
  },
  {
    "title": "Ein Verbindungsabbruch storniert nicht automatisch",
    "summary": "Was am Handelsplatz liegt, kann unabhängig vom Bildschirm weiterlaufen.",
    "paragraphs": [
      "Nord hat S17 als offenen Auftrag bestätigt. Danach bricht die Verbindung zwischen Miras App und dem Broker ab. Für diesen Lernfall gilt: Nord löscht offene Orders nicht allein wegen dieses Abbruchs.",
      "Während Mira keine Meldungen sieht, kann Nord passende Käufe mit S17 zusammenführen. In unserem Hauptpfad verkauft Nord zuerst zwei Aktien zu 40,30. Die Bestätigung erreicht Mira zunächst nicht.",
      "Andere Systeme können andere Regeln für einen Verbindungsverlust haben. Mira muss diese vorher kennen. Sie darf aus einem verlorenen Bildschirmkontakt weder „storniert“ noch „voll ausgeführt“ ableiten."
    ],
    "columns": [
      {
        "title": "Bekannt",
        "tone": "neutral",
        "points": [
          "Sieben waren am Platz offen.",
          "Verbindung zur App ist abgebrochen."
        ]
      },
      {
        "title": "Nicht daraus ableitbar",
        "tone": "positive",
        "points": [
          "Kein automatischer Storno im Modell.",
          "Ausführungen können weiter stattfinden."
        ]
      }
    ],
    "prompt": "Was folgt hier aus dem Abbruch?",
    "answers": [
      {
        "label": "S17 kann am Platz weiterhin aktiv sein.",
        "explanation": "Richtig: Ein Verbindungsverlust ist keine Stornobestätigung."
      },
      {
        "label": "S17 ist sicher gelöscht.",
        "explanation": "Die eigene Modellregel sieht keinen automatischen Storno vor."
      },
      {
        "label": "S17 ist sicher vollständig verkauft.",
        "explanation": "Der Abbruch beweist keine volle Menge."
      }
    ],
    "correct": 0,
    "rule": "Ein Verbindungsverlust ist keine Stornobestätigung."
  },
  {
    "title": "Keine Antwort bedeutet einen ungeklärten Zustand",
    "summary": "Ein Zeitlimit für die Antwort ist kein Ausführungsbericht.",
    "paragraphs": [
      "In einer getrennten Startvariante sendet Mira S17, bevor irgendeine Annahme zurückkommt. Nach fünf Sekunden meldet ihre App einen Timeout. Das bedeutet hier: Die erwartete Antwort kam nicht rechtzeitig an.",
      "Der Auftrag könnte den Broker nie erreicht haben. Er könnte aber auch angenommen oder bereits teilweise ausgeführt sein, während nur die Antwort fehlt. Aus dem Timeout allein lässt sich keine dieser Möglichkeiten auswählen.",
      "Mira kennzeichnet den Status als ungeklärt. Sie sucht über den vorgesehenen Abgleich nach genau S17, statt die gewünschte Menge als sicher offen oder sicher nicht gesendet zu buchen."
    ],
    "columns": [
      {
        "title": "Bekannt",
        "tone": "neutral",
        "points": [
          "S17 wurde aus der App gesendet.",
          "Antwortzeit überschritten."
        ]
      },
      {
        "title": "Ungeklärt",
        "tone": "positive",
        "points": [
          "Eingang und Ausführung noch nicht belegt.",
          "Die Kennung S17 gezielt abgleichen."
        ]
      }
    ],
    "prompt": "Welcher Zustand ist allein durch den Timeout belegt?",
    "answers": [
      {
        "label": "Es wurde sicher nichts ausgeführt.",
        "explanation": "Auch eine verlorene Antwort nach einer Ausführung ist möglich."
      },
      {
        "label": "Die Antwort fehlt; der Auftragszustand ist ungeklärt.",
        "explanation": "Richtig: Fehlende Rückmeldung ist keine bestätigte Ablehnung und keine bestätigte Nullausführung."
      },
      {
        "label": "Der Auftrag wurde sicher abgelehnt.",
        "explanation": "Eine Ablehnung braucht eine entsprechende Meldung."
      }
    ],
    "correct": 1,
    "rule": "Fehlende Rückmeldung ist keine bestätigte Ablehnung und keine bestätigte Nullausführung."
  },
  {
    "title": "Ein erneuter Klick kann eine zweite Order erzeugen",
    "summary": "Wiederholung erst nach geklärtem Verhalten des Systems.",
    "paragraphs": [
      "Dies ist ein eigener Kauf-Fehlerfall. Noah will sieben Aktien kaufen. Nach einer fehlenden Antwort klickt er erneut. Die App erzeugt K21 und K22, also zwei verschiedene Kaufaufträge über jeweils sieben.",
      "Im Lernfall nimmt der Broker beide an und beide werden vollständig ausgeführt. Noah kauft sieben plus sieben, also 14 Aktien. Sein ursprüngliches Ziel waren sieben. Die zusätzliche Menge beträgt ebenfalls sieben.",
      "Einige Systeme erkennen bestimmte Wiederholungen; andere behandeln sie als neue Orders. Noah kann keine solche Erkennung voraussetzen. Für einen erneuten Versand muss geklärt sein, was aus dem ersten Auftrag wurde und wie das System Wiederholungen behandelt."
    ],
    "columns": [
      {
        "title": "Ursprüngliches Ziel",
        "tone": "neutral",
        "points": [
          "Sieben kaufen.",
          "Eine fehlende Antwort."
        ]
      },
      {
        "title": "Eigener Fehlerfall",
        "tone": "positive",
        "points": [
          "K21 und K22 je sieben ausgeführt.",
          "14 gekauft statt sieben."
        ]
      }
    ],
    "prompt": "Wie viele Aktien wurden in diesem Fehlerfall gekauft?",
    "answers": [
      {
        "label": "Sieben Aktien.",
        "explanation": "Zwei verschiedene vollständig ausgeführte Käufe addieren sich."
      },
      {
        "label": "Null Aktien.",
        "explanation": "Die beiden Ausführungen sind ausdrücklich bestätigt."
      },
      {
        "label": "14 Aktien.",
        "explanation": "Richtig: Ein neuer Klick kann eine neue Order sein; kläre den alten Zustand vor einer Wiederholung."
      }
    ],
    "correct": 2,
    "rule": "Ein neuer Klick kann eine neue Order sein; kläre den alten Zustand vor einer Wiederholung."
  },
  {
    "title": "Doppelte Meldungen sind nicht doppelte Geschäfte",
    "summary": "Eindeutige Ausführungskennungen helfen beim Abgleich.",
    "paragraphs": [
      "Nach dem Wiederverbinden erhält Mira den Bericht E1: zwei verkauft zu 40,30. Später erhält sie denselben Bericht E1 noch einmal und den Bericht E2: drei verkauft zu 40,20. Die Kennungen sind im Modell für Geschäfte eindeutig.",
      "Für die Stückbilanz zählt E1 einmal mit zwei und E2 einmal mit drei. Das ergibt fünf verkaufte Aktien. Eine erneut gelieferte identische Nachricht zu E1 ist kein weiterer Zweierverkauf.",
      "In dieser Übung gibt es keine Handelskorrekturen. Echte Systeme können Korrekturen oder unterschiedliche Kennungsbereiche haben; dann gelten ihre dokumentierten Regeln. Gleich aussehende Mengen allein reichen nicht als Beweis einer doppelten Nachricht."
    ],
    "columns": [
      {
        "title": "Empfangene Meldungen",
        "tone": "neutral",
        "points": [
          "E1: zwei; E1 erneut: dieselben zwei.",
          "E2: drei."
        ]
      },
      {
        "title": "Eindeutige Geschäfte",
        "tone": "positive",
        "points": [
          "E1 einmal und E2 einmal.",
          "Fünf verkauft."
        ]
      }
    ],
    "prompt": "Wie viele Verkäufe sind nach den eindeutigen Kennungen bestätigt?",
    "answers": [
      {
        "label": "Fünf Aktien.",
        "explanation": "Richtig: Ordne Berichte nach eindeutigen Geschäftsdaten zu und zähle identische Wiederholungen nicht erneut."
      },
      {
        "label": "Sieben Aktien.",
        "explanation": "Die Wiederholung von E1 darf nicht nochmals gezählt werden."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "E1 und E2 sind zwei verschiedene Geschäfte."
      }
    ],
    "correct": 0,
    "rule": "Ordne Berichte nach eindeutigen Geschäftsdaten zu und zähle identische Wiederholungen nicht erneut."
  },
  {
    "title": "Gesamtstände nicht als neue Teilmengen addieren",
    "summary": "Kumuliert bedeutet: bis zu diesem Zeitpunkt insgesamt.",
    "paragraphs": [
      "Ein weiterer Bericht zu S17 lautet: insgesamt zwei ausgeführt. Der nächste lautet: insgesamt fünf ausgeführt. Solche Gesamtstände heißen kumuliert. Sie nennen keine zwei neuen, getrennten Teilverkäufe.",
      "Der zweite Stand enthält die ersten zwei bereits. Zwischen beiden Ständen kamen fünf minus zwei, also drei Verkäufe hinzu. Der neueste Gesamtstand ist fünf, nicht zwei plus fünf gleich sieben.",
      "Die Ausführungsberichte E1 und E2 passen dazu: zwei plus drei ergibt fünf. Mira liest bei jedem Mengenfeld, ob es die neue Teilmenge oder die bisherige Gesamtmenge meint."
    ],
    "columns": [
      {
        "title": "Gesamtstände",
        "tone": "neutral",
        "points": [
          "Zuerst insgesamt zwei.",
          "Danach insgesamt fünf."
        ]
      },
      {
        "title": "Veränderung",
        "tone": "positive",
        "points": [
          "Drei neu hinzugekommen.",
          "Letzter Gesamtstand fünf."
        ]
      }
    ],
    "prompt": "Wie viele neue Verkäufe kamen zwischen diesen Ständen hinzu?",
    "answers": [
      {
        "label": "Sieben Aktien.",
        "explanation": "Das addiert zwei überlappende Gesamtstände."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Richtig: Unterscheide neue Teilmengen von bereits aufsummierten Gesamtständen."
      },
      {
        "label": "Fünf Aktien.",
        "explanation": "Fünf enthält die früheren zwei bereits."
      }
    ],
    "correct": 1,
    "rule": "Unterscheide neue Teilmengen von bereits aufsummierten Gesamtständen."
  },
  {
    "title": "Stornowunsch und weitere Ausführung können sich kreuzen",
    "summary": "Nur der bestätigte Rest ist storniert.",
    "paragraphs": [
      "Mira sieht zunächst E1 mit zwei Verkäufen. Sie sendet eine Stornoanfrage für den offenen Rest von S17. Bevor die Stornierung am Platz wirksam wird, entstehen im Hauptpfad noch drei Verkäufe E2 zu 40,20.",
      "Nord bestätigt danach: zwei Reststücke storniert. Von sieben sind damit fünf verkauft und zwei storniert. Die drei später gemeldeten Verkäufe verschwinden nicht durch Miras früheren Stornowunsch.",
      "Mira besitzt noch sieben minus fünf, also zwei Aktien. Es ist keine Verkaufsmenge von S17 mehr offen. Wann die App eine Nachricht anzeigt, muss nicht dem Zeitpunkt entsprechen, an dem das Ereignis am Platz stattfand."
    ],
    "columns": [
      {
        "title": "Während der Anfrage",
        "tone": "neutral",
        "points": [
          "Zwei bereits verkauft.",
          "Drei weitere vor wirksamem Storno."
        ]
      },
      {
        "title": "Bestätigter Endstand",
        "tone": "positive",
        "points": [
          "Fünf verkauft, zwei storniert.",
          "Bestand zwei; Orderrest null."
        ]
      }
    ],
    "prompt": "Wie viele Stücke von S17 wurden storniert?",
    "answers": [
      {
        "label": "Fünf Aktien.",
        "explanation": "Drei davon wurden vor wirksamem Storno verkauft."
      },
      {
        "label": "Sieben Aktien.",
        "explanation": "Bestätigte Geschäfte werden durch die Anfrage nicht rückgängig."
      },
      {
        "label": "Zwei Aktien.",
        "explanation": "Richtig: Eine Stornoanfrage beendet noch nichts; die Bestätigung und zwischenzeitliche Geschäfte bestimmen den Rest."
      }
    ],
    "correct": 2,
    "rule": "Eine Stornoanfrage beendet noch nichts; die Bestätigung und zwischenzeitliche Geschäfte bestimmen den Rest."
  },
  {
    "title": "Eine abgelehnte Änderung lässt die alte Order nicht verschwinden",
    "summary": "Nach einem Änderungsfehler den ursprünglichen Zustand prüfen.",
    "paragraphs": [
      "In einer getrennten Variante liegen noch fünf Elva-Verkäufe mit Limit 40,20 am Platz. Mira möchte das Limit auf 40,50 erhöhen. Ihr Änderungsvorschlag wird im Modell wegen einer unzulässigen Eingabe abgelehnt.",
      "Die Regel dieser Variante lautet: Die alte Order bleibt bei einer abgelehnten Änderung bestehen. Es sind daher weiterhin fünf Verkäufe mit mindestens 40,20 offen. 40,50 wurde nicht wirksam.",
      "Die Fehlermeldung betrifft die Änderung, nicht automatisch den ursprünglichen Auftrag. Echte Abläufe und Meldungen müssen separat geprüft werden. Mira liest danach den bestätigten Stand der alten Order."
    ],
    "columns": [
      {
        "title": "Abgelehnt",
        "tone": "neutral",
        "points": [
          "Änderung auf 40,50.",
          "Keine bestätigte neue Preisregel."
        ]
      },
      {
        "title": "Weiterhin gültig im Modell",
        "tone": "positive",
        "points": [
          "Fünf offen mit Limit 40,20.",
          "Originalorder nicht storniert."
        ]
      }
    ],
    "prompt": "Welche Preisregel gilt nach dieser abgelehnten Änderung?",
    "answers": [
      {
        "label": "Das bisherige Limit 40,20 Euro.",
        "explanation": "Richtig: Ein Fehler bei einer Änderung ist nicht automatisch die Löschung des ursprünglichen Auftrags."
      },
      {
        "label": "Das gewünschte Limit 40,50 Euro.",
        "explanation": "Der Änderungswunsch wurde nicht wirksam."
      },
      {
        "label": "Gar keine Order mehr.",
        "explanation": "Die Modellregel erhält den ursprünglichen Auftrag."
      }
    ],
    "correct": 0,
    "rule": "Ein Fehler bei einer Änderung ist nicht automatisch die Löschung des ursprünglichen Auftrags."
  },
  {
    "title": "Eine Ablehnung mit Grund ist etwas anderes als Schweigen",
    "summary": "Produkt, Konto und Eingaben vor einem neuen Versuch prüfen.",
    "paragraphs": [
      "In einem eigenen Eingabefall erlaubt die Übungsaktie nur Preisstufen von 0,05 Euro. Ein Kaufauftrag R31 nennt das Limit 18,03. Der Broker meldet ausdrücklich: R31 abgelehnt, unzulässige Preisstufe. Es gab keine Ausführung.",
      "18,00 und 18,05 passen zur Preisstufe. Daraus folgt aber nicht, dass Mira eines davon einfach wählen sollte. Eine neue Eingabe braucht eine eigene Entscheidung über die gewünschte Grenze und einen neuen bestätigten Status.",
      "Andere Ablehnungen können das falsche Konto, fehlende Berechtigung oder eine Mengenregel betreffen. Wiederholtes Senden derselben ungültigen Eingabe löst den Grund nicht. Eine konkrete Ablehnung liefert mehr Wissen als ein Timeout."
    ],
    "columns": [
      {
        "title": "Übungsregel",
        "tone": "neutral",
        "points": [
          "Preisstufe 0,05.",
          "R31 mit 18,03 abgelehnt."
        ]
      },
      {
        "title": "Vor einem neuen Versuch",
        "tone": "positive",
        "points": [
          "Ablehnungsgrund verstehen.",
          "Preisgrenze bewusst neu festlegen."
        ]
      }
    ],
    "prompt": "Was ist für R31 bestätigt?",
    "answers": [
      {
        "label": "Ausgeführt bei 18,00.",
        "explanation": "Eine zulässige Stufe ist kein bestätigter Handel."
      },
      {
        "label": "Abgelehnt, keine Ausführung.",
        "explanation": "Richtig: Lies den konkreten Ablehnungsgrund, bevor du einen neuen Auftrag entscheidest."
      },
      {
        "label": "Offen bei 18,05.",
        "explanation": "Es gab keine automatische Änderung auf diesen Preis."
      }
    ],
    "correct": 1,
    "rule": "Lies den konkreten Ablehnungsgrund, bevor du einen neuen Auftrag entscheidest."
  },
  {
    "title": "Eine Handelspause ist kein Verbindungsnachweis",
    "summary": "Technischer Zugang und laufender Handel bleiben getrennt.",
    "paragraphs": [
      "Im nächsten eigenen Fall ist der Handelsplatz verbunden, aber der Handel in Elva pausiert. Die Übungsregel erlaubt während dieser Pause neue Limits, führt sie jedoch nicht aus. Das ist keine Aussage über jeden echten Handelsplatz.",
      "Der Platz bestätigt einen neuen Auftrag als offen. Mira sieht trotzdem keine Ausführung. Der Zusammenhang ist hier die Pause, nicht ein bewiesener Internetausfall. Eine spätere Wiederaufnahme kann mit anderen Angeboten beginnen.",
      "Mira prüft die Meldung für das konkrete Produkt und die Regeln zur Pause. Sie darf weder den letzten Preis als Wiederaufnahmepreis versprechen noch aus einer angenommenen Order sofortigen Handel ableiten."
    ],
    "columns": [
      {
        "title": "Während der Übungspause",
        "tone": "neutral",
        "points": [
          "Verbindung steht.",
          "Neue Limits dürfen offen bleiben."
        ]
      },
      {
        "title": "Noch nicht passiert",
        "tone": "positive",
        "points": [
          "Keine Ausführung während der Pause.",
          "Wiederaufnahmepreis unbekannt."
        ]
      }
    ],
    "prompt": "Kann der Auftrag im beschriebenen Pausenmodell angenommen, aber unausgeführt sein?",
    "answers": [
      {
        "label": "Nein, Annahme ist immer Ausführung.",
        "explanation": "Der Platz trennt diese Zustände."
      },
      {
        "label": "Nein, eine Pause beweist einen Internetausfall.",
        "explanation": "Eine Handelspause betrifft hier das Produkt am verbundenen Platz."
      },
      {
        "label": "Ja, er kann offen bleiben.",
        "explanation": "Richtig: Prüfe Produktstatus, Verbindung und Orderstatus jeweils für sich."
      }
    ],
    "correct": 2,
    "rule": "Prüfe Produktstatus, Verbindung und Orderstatus jeweils für sich."
  },
  {
    "title": "Den Ausführungsort einer Schutzregel kennen",
    "summary": "Lokale und entfernte Überwachung reagieren verschieden auf einen Geräteausfall.",
    "paragraphs": [
      "Zwei eigene Schutzmodelle beobachten dieselbe Verkaufsschwelle 39,00. Modell L prüft den Preis nur auf Miras Laptop. Modell S prüft ihn auf einem entfernten Anbietersystem. Beide erzeugen erst bei erfüllter Bedingung eine Verkaufsorder.",
      "Der Laptop fällt aus. Das entfernte System bleibt im Übungsfall aktiv und erhält einen Kurs von 38,90. Modell S kann seine Folgeorder erzeugen. Modell L beobachtet jetzt keine Preise und erzeugt in diesem Zeitraum keine Order.",
      "Auch die erzeugte Verkaufsorder ist noch keine bestätigte Ausführung. Entfernte Überwachung ist ebenfalls von Systemen und Daten abhängig. Mira klärt vorher, wo die Regel läuft und was bei einer Störung passiert."
    ],
    "columns": [
      {
        "title": "Lokales Modell L",
        "tone": "neutral",
        "points": [
          "Prüfung auf dem ausgefallenen Laptop.",
          "Keine aktive Prüfung im Ausfallzeitraum."
        ]
      },
      {
        "title": "Entferntes Modell S",
        "tone": "positive",
        "points": [
          "System und Daten im Fall verfügbar.",
          "38,90 erfüllt die Schwelle 39,00."
        ]
      }
    ],
    "prompt": "Welches Modell kann in diesem Geräteausfall seine Verkaufsorder aktivieren?",
    "answers": [
      {
        "label": "Modell S auf dem weiterhin aktiven entfernten System.",
        "explanation": "Richtig: Kenne den Ort der Überwachung und verwechsle Aktivierung nicht mit Ausführung."
      },
      {
        "label": "Modell L auf dem ausgefallenen Laptop.",
        "explanation": "L erhält und prüft im Modell keine neuen Kurse."
      },
      {
        "label": "Beide garantieren einen Verkauf zu 39,00.",
        "explanation": "Aktivierung garantiert weder Ausführung noch diesen Preis."
      }
    ],
    "correct": 0,
    "rule": "Kenne den Ort der Überwachung und verwechsle Aktivierung nicht mit Ausführung."
  },
  {
    "title": "Nach dem Wiederverbinden einen vollständigen Abgleich machen",
    "summary": "Ein grünes Verbindungssymbol ersetzt keine Bestandsprüfung.",
    "paragraphs": [
      "Im Hauptpfad verbindet Mira die App wieder. Sie gleicht S17 mit dem Broker ab: E1 zwei zu 40,30, E2 drei zu 40,20, zwei Reststücke bestätigt storniert. Außerdem prüft sie den aktuellen Bestand und die offenen Orders.",
      "Der Bestand ist zwei. Für S17 ist der offene Rest null. Die sieben ursprünglichen Stücke sind vollständig erklärt: fünf verkauft und zwei weiter im Bestand. Stornierte Verkaufsreste sind keine verkauften Aktien.",
      "Erst wenn Auftragsberichte, Bestandsdaten und Geldbuchungen zum gleichen Stand passen, ist dieser Fall geklärt. Fehlende Daten bleiben als ungeklärt markiert; eine leere Anzeige allein beweist nicht, dass es keine Orders gibt."
    ],
    "columns": [
      {
        "title": "Auftragsabgleich",
        "tone": "neutral",
        "points": [
          "S17: fünf verkauft, zwei storniert.",
          "Offener Rest null."
        ]
      },
      {
        "title": "Kontenabgleich",
        "tone": "positive",
        "points": [
          "Bestand zwei Aktien.",
          "Geldbuchungen noch separat prüfen."
        ]
      }
    ],
    "prompt": "Welcher Bestand passt zu sieben Startaktien und fünf Verkäufen?",
    "answers": [
      {
        "label": "Sieben Aktien.",
        "explanation": "Die fünf bestätigten Verkäufe verringern den Bestand."
      },
      {
        "label": "Zwei Aktien.",
        "explanation": "Richtig: Gleiche bestätigte Geschäfte, offene Reste, Bestand und Geld zum selben Stand ab."
      },
      {
        "label": "Null Aktien.",
        "explanation": "Stornierte Reststücke bleiben im Bestand."
      }
    ],
    "correct": 1,
    "rule": "Gleiche bestätigte Geschäfte, offene Reste, Bestand und Geld zum selben Stand ab."
  },
  {
    "title": "Zwei Geräte können dasselbe Konto bedienen",
    "summary": "Eine zweite Oberfläche ist kein zweites unabhängiges Konto.",
    "paragraphs": [
      "Mira öffnet Laptop und Handy für dasselbe Übungskonto. Auf beiden erscheint S17. Das sind zwei Ansichten desselben Auftrags. Die Anzeige auf zwei Geräten verdoppelt seine sieben Stücke nicht.",
      "Ein neuer Versand vom Handy kann hingegen einen weiteren Auftrag erzeugen. Manche Anbieter begrenzen gleichzeitige Sitzungen oder bieten besondere Regeln. Unser Modell erlaubt beide Ansichten, aber keine automatisch sichere Zusammenführung neuer Klicks.",
      "Mira prüft vor jeder Handlung das Konto, die Auftragskennung und den aktualisierten Zustand. Eine Änderung von einem Gerät muss erst bestätigt sein, bevor sie auf dem anderen Gerät als wirksam gilt."
    ],
    "columns": [
      {
        "title": "Zwei Ansichten",
        "tone": "neutral",
        "points": [
          "Laptop und Handy zeigen S17.",
          "Dasselbe Konto, dieselbe Kennung."
        ]
      },
      {
        "title": "Neue Handlung",
        "tone": "positive",
        "points": [
          "Kann eine zusätzliche Order erzeugen.",
          "Konto und Zustand zuvor prüfen."
        ]
      }
    ],
    "prompt": "Was bedeutet S17 auf zwei Geräten im Modell?",
    "answers": [
      {
        "label": "Zwei unabhängige Konten.",
        "explanation": "Beide Geräte sind ausdrücklich im selben Konto."
      },
      {
        "label": "Zwei bestätigte Orders mit je sieben.",
        "explanation": "Die Kennung bezeichnet denselben Auftrag."
      },
      {
        "label": "Zwei Ansichten desselben Auftrags.",
        "explanation": "Richtig: Unterscheide eine weitere Ansicht von einem weiteren Auftrag."
      }
    ],
    "correct": 2,
    "rule": "Unterscheide eine weitere Ansicht von einem weiteren Auftrag."
  },
  {
    "title": "Simulation prüft andere Dinge als echter Handel",
    "summary": "Ein gelungener Übungsablauf beweist keine spätere Live-Ausführung.",
    "paragraphs": [
      "Noah übt einen Abbruch und den anschließenden Orderabgleich in einer Simulation. Dort kann er Kennungen, Bestätigungen und seine Reaktion auf unklare Daten prüfen. Es wird kein echtes Geld gehandelt.",
      "Das Übungssystem kann Ausführungen vereinfacht erzeugen. Warteschlangen, verfügbare Mengen, Zeitverzögerungen und Gebühren können im echten Konto anders sein. Gleiche Schaltflächen beweisen kein gleiches Ausführungsergebnis.",
      "Noah prüft deshalb auch, welches Konto gerade aktiv ist. Ein Simulationsbericht gehört nicht in eine echte Kontobilanz. Die Übung hilft, den Ablauf zu verstehen; sie ist keine Zusage für Preis, Gewinn oder Zuverlässigkeit."
    ],
    "columns": [
      {
        "title": "Im Übungskonto",
        "tone": "neutral",
        "points": [
          "Abläufe und Reaktionen trainieren.",
          "Eigene simulierte Ausführungen."
        ]
      },
      {
        "title": "Für ein echtes Konto",
        "tone": "positive",
        "points": [
          "Kontokennung und tatsächliche Berichte prüfen.",
          "Übungspreise sind keine Live-Zusage."
        ]
      }
    ],
    "prompt": "Was beweist die erfolgreiche Simulation?",
    "answers": [
      {
        "label": "Dass der beschriebene Übungsablauf funktioniert hat.",
        "explanation": "Richtig: Prüfe den Kontotyp und übertrage simulierte Ausführungen nicht als Zusagen auf echten Handel."
      },
      {
        "label": "Dass derselbe Live-Preis sicher verfügbar ist.",
        "explanation": "Eine Simulation beweist kein echtes Angebot."
      },
      {
        "label": "Dass ihre Gewinne dem echten Konto gehören.",
        "explanation": "Simulierte Buchungen sind keine echten Kontobuchungen."
      }
    ],
    "correct": 0,
    "rule": "Prüfe den Kontotyp und übertrage simulierte Ausführungen nicht als Zusagen auf echten Handel."
  },
  {
    "title": "Einen Ersatzweg vorher auf seine Möglichkeiten prüfen",
    "summary": "Ein Kontaktweg kann helfen, ist aber keine garantierte Sofortstornierung.",
    "paragraphs": [
      "Mira hat vor der Übung den offiziellen Störungskontakt ihres fiktiven Anbieters geprüft. Für den Ersatzweg kennt sie Konto, Produkt und Kennung S17. Sie kann erklären, welche Bestätigung fehlt und was zuletzt bekannt war.",
      "Der Übungsanbieter erlaubt über diesen verifizierten Kontakt eine Statusprüfung und, nach Identitätsprüfung, eine Stornoanfrage. Er garantiert keine sofortige Bearbeitung. Auch eine telefonische Anfrage ist noch kein wirksamer Storno.",
      "Ob ein echter Anbieter solche Handlungen zulässt und wann er erreichbar ist, muss vorher geprüft werden. Unbekannte Kontaktadressen aus zufälligen Nachrichten sind kein verifizierter Ersatzweg. Zugangspasswörter gehören nicht in ein Fehlerprotokoll."
    ],
    "columns": [
      {
        "title": "Vorher klären",
        "tone": "neutral",
        "points": [
          "Offizieller Kontakt und seine Möglichkeiten.",
          "Konto, Produkt, Kennung bereithalten."
        ]
      },
      {
        "title": "Bei einer Anfrage",
        "tone": "positive",
        "points": [
          "Letzten bekannten Status genau nennen.",
          "Wirksames Ergebnis bestätigen lassen."
        ]
      }
    ],
    "prompt": "Was bestätigt die Ersatzweg-Anfrage allein?",
    "answers": [
      {
        "label": "Dass das Konto geschlossen ist.",
        "explanation": "Eine Status- oder Stornoanfrage schließt kein Konto."
      },
      {
        "label": "Noch keine wirksame Stornierung.",
        "explanation": "Richtig: Prüfe den Ersatzweg vorher und fordere eine Bestätigung des tatsächlich erreichten Zustands."
      },
      {
        "label": "Dass alle Restorders sicher weg sind.",
        "explanation": "Die Anfrage muss erst verarbeitet und bestätigt werden."
      }
    ],
    "correct": 1,
    "rule": "Prüfe den Ersatzweg vorher und fordere eine Bestätigung des tatsächlich erreichten Zustands."
  },
  {
    "title": "Die Geldbuchungen trotz Störung vollständig rechnen",
    "summary": "Geld und Stücke liefern getrennte Kontrollrechnungen.",
    "paragraphs": [
      "Vor dem Hauptverkauf hatte Mira 500,00 Euro. Ihr bestätigter früherer Kauf von sieben Elva zu 40,00 kostete 280,00 plus 0,50 Kaufgebühr. Danach standen 219,50 Euro und sieben Aktien im Konto.",
      "S17 verkauft zwei zu 40,30 und drei zu 40,20. Das ergibt 80,60 plus 120,60, also 201,20 Euro Verkaufswert. Der eigene Tarif für S17 kostet einmal 0,40 und zusätzlich 0,01 je verkaufter Aktie: insgesamt 0,45. Die Gutschrift ist 200,75.",
      "Der neue Geldstand beträgt 219,50 plus 200,75, also 420,25 Euro. Daneben bleiben zwei Aktien. Das ist ein Geldstand, kein abgeschlossener Gesamtgewinn: Für die restlichen Aktien wurde kein endgültiger Verkaufswert bestätigt."
    ],
    "columns": [
      {
        "title": "Tatsächliche Geldbuchungen",
        "tone": "neutral",
        "points": [
          "Kauf: 280,50 Belastung.",
          "Verkauf: 200,75 Gutschrift."
        ]
      },
      {
        "title": "Aktueller Stand",
        "tone": "positive",
        "points": [
          "420,25 Euro und zwei Aktien.",
          "Keine offenen Reste von S17."
        ]
      }
    ],
    "prompt": "Welcher Geldstand folgt aus den bestätigten Buchungen?",
    "answers": [
      {
        "label": "420,70 Euro.",
        "explanation": "Die Verkaufsgebühr 0,45 fehlt in dieser Rechnung."
      },
      {
        "label": "500,75 Euro Gewinn.",
        "explanation": "Der Geldstand ist kein Gewinn; zwei Aktien sind noch im Bestand."
      },
      {
        "label": "420,25 Euro.",
        "explanation": "Richtig: Rechne bestätigte Geldbuchungen vollständig und führe verbleibende Stücke daneben auf."
      }
    ],
    "correct": 2,
    "rule": "Rechne bestätigte Geldbuchungen vollständig und führe verbleibende Stücke daneben auf."
  },
  {
    "title": "Einen Technikfall mit Belegen abschließen",
    "summary": "Bekannte Zustände festhalten und Lücken offen lassen.",
    "paragraphs": [
      "Mira notiert zum Hauptpfad Konto, Produkt Elva, Verkaufsorder S17, Limit 40,20 und den Verbindungsabbruch. Die Geschäftsnachweise sind E1 mit zwei zu 40,30 und E2 mit drei zu 40,20. Identische Wiederholungen von E1 zählen einmal.",
      "Die Restbestätigung nennt zwei storniert. Bestand zwei, Orderrest null und Geldstand 420,25 passen zu den bekannten Buchungen. Mira trennt Ereigniszeit und Empfangszeit, soweit beide verlässlich vorhanden sind. Aus fehlenden Zeiten erfindet sie keine Reihenfolge.",
      "Das Protokoll erklärt diesen Fall, ohne Zugangsdaten zu enthalten. Wenn eine Ausführung oder ein Rest ungeklärt wäre, müsste das auch im Abschluss stehen. Wiederhergestellte Verbindung allein wäre dafür zu wenig."
    ],
    "columns": [
      {
        "title": "Belegt im Hauptpfad",
        "tone": "neutral",
        "points": [
          "E1 und E2: fünf Verkäufe.",
          "Zwei Reststücke bestätigt storniert."
        ]
      },
      {
        "title": "Abschluss",
        "tone": "positive",
        "points": [
          "Zwei Aktien, kein Orderrest, Geld 420,25.",
          "Keine unbelegten zusätzlichen Geschäfte."
        ]
      }
    ],
    "prompt": "Welcher Abschluss passt zum Hauptpfad?",
    "answers": [
      {
        "label": "Zwei Aktien, kein Orderrest, Geldstand 420,25 Euro.",
        "explanation": "Richtig: Schließe einen Fehlerfall mit belegten Aufträgen, Geschäften, Resten, Stück- und Geldständen ab."
      },
      {
        "label": "Null Aktien, weil die Stornierung den Bestand löschte.",
        "explanation": "Storno entfernt nur den offenen Auftrag, nicht die Aktien."
      },
      {
        "label": "Sieben verkauft, weil E1 zweimal angekommen ist.",
        "explanation": "Die identische Meldung E1 ist kein zusätzliches Geschäft."
      }
    ],
    "correct": 0,
    "rule": "Schließe einen Fehlerfall mit belegten Aufträgen, Geschäften, Resten, Stück- und Geldständen ab."
  }
];
export const ordersChapterNineLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-09.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 9 · Handelswege, Technik und Fehlerfälle',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 9', title: draft.title,
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
