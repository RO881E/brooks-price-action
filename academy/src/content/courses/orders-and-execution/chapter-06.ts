import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Eine Long-Position mit Verkäufen schließen",
    "summary": "Die tatsächliche Ausführung verändert den Bestand.",
    "paragraphs": [
      "Lea besitzt sechs Aktien der erfundenen Firma Nera. Diesen positiven Bestand nennen wir eine Long-Position. Will sie ihn vollständig schließen, braucht sie Verkäufe von insgesamt sechs Aktien. Ein weiterer Kauf würde den Bestand vergrößern.",
      "Lea sendet einen Verkaufsauftrag über sechs Stück. Noch ist keine Aktie verkauft. Erst der Ausführungsbericht meldet sechs tatsächlich gehandelte Stück. Danach beträgt der Bestand sechs minus sechs, also null.",
      "Alle Beispiele verwenden eigene Lernregeln und kleine Aktienmengen. Wir trennen den Bestand von offenen Aufträgen. Ein Knopf mit der Aufschrift Schließen ist eine Bedienfunktion; entscheidend bleiben seine Auftragsfelder und die bestätigten Ausführungen."
    ],
    "columns": [
      {
        "title": "Vor der Ausführung",
        "tone": "neutral",
        "points": [
          "Sechs Aktien im Bestand.",
          "Verkaufsauftrag über sechs gesendet."
        ]
      },
      {
        "title": "Nach voller Ausführung",
        "tone": "positive",
        "points": [
          "Sechs verkauft.",
          "Bestand null."
        ]
      }
    ],
    "prompt": "Was verändert den Bestand von sechs auf null?",
    "answers": [
      {
        "label": "Sechs tatsächlich ausgeführte Verkäufe.",
        "explanation": "Richtig: Nur ausgeführte Trades verändern die Menge."
      },
      {
        "label": "Ein weiterer Kauf über sechs Stück.",
        "explanation": "Der Kauf würde zwölf Aktien ergeben."
      },
      {
        "label": "Die Vorschau des Verkaufsauftrags.",
        "explanation": "Eine Vorschau hat noch nichts gehandelt."
      }
    ],
    "correct": 0,
    "rule": "Schließen bedeutet passende Gegengeschäfte, deren Ausführung bestätigt ist."
  },
  {
    "title": "Ein Teilausstieg lässt eine Restposition",
    "summary": "Auftragsrest und Restposition sind unterschiedliche Angaben.",
    "paragraphs": [
      "Ausgehend von sechs Nera-Aktien gibt Lea einen Verkauf über sechs Stück auf. Im nächsten Bericht sind nur zwei verkauft. Der Bestand sinkt auf vier. Die anderen vier Stück des Verkaufsauftrags bleiben in diesem Lernfall offen.",
      "Vier offene Verkaufsstücke sind noch keine vier weiteren Verkäufe. Erst wenn sie ausgeführt werden, kann die Restposition verschwinden. Eine bestätigte Stornierung des Auftragsrests würde den Bestand von vier Aktien stehen lassen.",
      "Wir nehmen keine anderen Trades an. Die Bestandsbilanz lautet sechs minus zwei gleich vier. Die Auftragsbilanz lautet sechs beauftragt gleich zwei ausgeführt plus vier offen. Beide Berichte müssen sich auf denselben Zeitpunkt beziehen."
    ],
    "columns": [
      {
        "title": "Bestandsbilanz",
        "tone": "neutral",
        "points": [
          "Sechs vorher minus zwei verkauft.",
          "Vier Aktien bleiben."
        ]
      },
      {
        "title": "Auftragsbilanz",
        "tone": "positive",
        "points": [
          "Zwei von sechs ausgeführt.",
          "Vier Verkaufsstücke noch offen."
        ]
      }
    ],
    "prompt": "Wie viele Aktien besitzt Lea nach zwei ausgeführten Verkäufen?",
    "answers": [
      {
        "label": "Acht Aktien.",
        "explanation": "Der Verkauf verkleinert den Bestand statt ihn zu vergrößern."
      },
      {
        "label": "Vier Aktien.",
        "explanation": "Richtig: Die offenen vier Stück sind noch nicht verkauft."
      },
      {
        "label": "Keine Aktie, weil sie sechs verkaufen wollte.",
        "explanation": "Der Wunsch ersetzt keine Ausführung."
      }
    ],
    "correct": 1,
    "rule": "Rechne die Restposition aus Trades und den Auftragsrest aus Statusmeldungen."
  },
  {
    "title": "Eine Short-Position braucht Käufe zum Schließen",
    "summary": "Bei einem negativen Bestand dreht sich die Schließseite um.",
    "paragraphs": [
      "In einem getrennten Lernkonto ist ein Leerverkauf erlaubt: Vier geliehene Nera-Aktien wurden verkauft. Die Positionsanzeige zeigt minus vier. Das nennen wir eine Short-Position. Die Regeln zur Leihe und Sicherheitsleistung vertiefen wir hier nicht.",
      "Um die offene Verpflichtung zu decken, kauft Lea vier Aktien zurück. Die vier bestätigten Käufe verändern die Anzeige von minus vier auf null. Ein weiterer Verkauf von vier würde dagegen minus acht ergeben.",
      "Das ist ein eigener Mengenfall ohne Zinsen oder Gebührenrechnung. Ob ein echter Anbieter Leerverkäufe erlaubt, muss separat geklärt sein. Die Aufschrift Verkaufen bedeutet nicht automatisch Schließen; die richtige Seite hängt von der bestehenden Position ab."
    ],
    "columns": [
      {
        "title": "Short offen",
        "tone": "neutral",
        "points": [
          "Position minus vier.",
          "Weitere Verkäufe vergrößern die Verpflichtung."
        ]
      },
      {
        "title": "Rückkauf",
        "tone": "positive",
        "points": [
          "Vier Käufe bestätigt.",
          "Position null."
        ]
      }
    ],
    "prompt": "Welche Seite schließt die Short-Position von minus vier?",
    "answers": [
      {
        "label": "Vier Aktien verkaufen.",
        "explanation": "Dann würde die Short-Position auf minus acht wachsen."
      },
      {
        "label": "Nur den ursprünglichen Auftrag löschen.",
        "explanation": "Ein bereits ausgeführter Verkauf wird durch Löschen nicht rückgängig."
      },
      {
        "label": "Vier Aktien kaufen.",
        "explanation": "Richtig: Minus vier plus vier ergibt null."
      }
    ],
    "correct": 2,
    "rule": "Long schließt durch Verkäufe, Short durch Rückkäufe: Prüfe zuerst die Position."
  },
  {
    "title": "Zwei einzelne Ausstiege sind noch keine Verknüpfung",
    "summary": "Unabhängige Aufträge können beide handeln.",
    "paragraphs": [
      "Lea besitzt wieder sechs Aktien. Sie stellt einen Verkauf mit Limit 42,00 Euro und einen Verkaufsstop mit Schwelle 38,00 ein, jeweils über sechs Stück. In diesem getrennten Lernfall sind die Aufträge nicht verbunden. Leerverkäufe sind erlaubt und die nötige Leihe gilt als vorhanden.",
      "Zuerst werden alle sechs Stück am Ziel verkauft. Die Position ist null. Der unabhängige Stop bleibt aber bestehen. Wird er später ausgelöst und ebenfalls vollständig ausgeführt, verkauft Lea weitere sechs und hat eine Short-Position von minus sechs.",
      "Dieser Ablauf setzt keine neue Kaufposition voraus. Gleiche Produktnamen, Mengen oder Uhrzeiten stellen noch keine Verbindung her. Bei einem echten Konto könnte ein weiterer Verkauf auch abgelehnt werden; unser Fall erlaubt ihn ausdrücklich."
    ],
    "columns": [
      {
        "title": "Zwei einzelne Aufträge",
        "tone": "neutral",
        "points": [
          "Limit und Stop jeweils sechs.",
          "Keine automatische gegenseitige Löschung."
        ]
      },
      {
        "title": "Beide ausgeführt",
        "tone": "positive",
        "points": [
          "Sechs minus sechs minus sechs.",
          "Position minus sechs."
        ]
      }
    ],
    "prompt": "Was bleibt im ausdrücklich shortfähigen Lernkonto nach beiden vollen Verkäufen?",
    "answers": [
      {
        "label": "Eine Short-Position von minus sechs.",
        "explanation": "Richtig: Zwölf Verkäufe treffen auf nur sechs vorhandene Aktien."
      },
      {
        "label": "Eine Position von null.",
        "explanation": "Das gilt nur nach dem ersten Verkauf."
      },
      {
        "label": "Zwölf Aktien im Bestand.",
        "explanation": "Verkäufe erhöhen einen Long-Bestand nicht."
      }
    ],
    "correct": 0,
    "rule": "Zwei Ausstiegsorders brauchen eine bestätigte Verknüpfung oder eine eigene Restkontrolle."
  },
  {
    "title": "OCO verbindet zwei mögliche Ausstiege",
    "summary": "Die Gruppenregel bestimmt, wann der andere Auftrag beendet wird.",
    "paragraphs": [
      "OCO steht für One Cancels Other: Eine Order soll nach einem festgelegten Ereignis die andere stornieren lassen. Für unseren Hauptfall verbindet der Lernanbieter einen Zielverkauf und einen Stop zu einer eindeutig benannten Gruppe. Beide beziehen sich auf dieselben sechs Aktien.",
      "Unsere Hauptregel lautet: Nach einer Teilausführung wird die andere Menge auf den verbleibenden Bestand reduziert. Nach einer vollständigen Schließung wird der andere Auftrag gelöscht. Der Lernanbieter verarbeitet diese Gruppenänderungen vor dem nächsten möglichen Handel und bestätigt sie.",
      "Diese geordnete Verarbeitung ist eine ausdrückliche Übungsannahme. Echte Anbieter können andere Auslöser, Mengenregeln oder Laufzeiten verwenden. Der Name OCO allein erklärt weder Teilmengen noch den Schutz vor zwei sehr schnellen Ausführungen."
    ],
    "columns": [
      {
        "title": "Hauptregel",
        "tone": "neutral",
        "points": [
          "Teilausführung verkleinert die Gegenmenge.",
          "Vollständiger Ausstieg löscht den anderen Auftrag."
        ]
      },
      {
        "title": "Nachweis",
        "tone": "positive",
        "points": [
          "Gemeinsame Gruppenkennung.",
          "Änderung oder Löschung bestätigt."
        ]
      }
    ],
    "prompt": "Welche Zusatzangabe braucht Lea neben dem Namen OCO?",
    "answers": [
      {
        "label": "Die Zusage, dass der Stop immer genau am Schwellenpreis handelt.",
        "explanation": "Eine OCO-Verbindung garantiert keinen Ausführungspreis."
      },
      {
        "label": "Die genaue Ereignis-, Teilmengen- und Löschregel.",
        "explanation": "Richtig: Der Name allein beschreibt die Verarbeitung nicht vollständig."
      },
      {
        "label": "Nur dieselbe Farbe für beide Linien.",
        "explanation": "Eine Farbe beweist keine Auftragsverbindung."
      }
    ],
    "correct": 1,
    "rule": "OCO ist eine Auftragsverbindung mit konkreten Ereignis- und Restregeln."
  },
  {
    "title": "Den Hauptausstieg vollständig vorbereiten",
    "summary": "Ziel, Stop und Gebühren gehören zum selben Plan.",
    "paragraphs": [
      "Lea hat sechs Nera-Aktien zu je 40,00 Euro gekauft. Der Kaufwert beträgt 240,00 Euro. Unser Gebührenmodell verlangt einmal 0,60 Euro für den ausgeführten Kaufauftrag und einmal 0,60 Euro für den tatsächlich ausgeführten Ausstiegsauftrag. Steuern und weitere Kosten lassen wir weg.",
      "Die bestätigte OCO-Gruppe enthält einen Verkauf über sechs mit Limit 42,00 sowie einen Verkaufsstop über sechs mit Schwelle 38,00. Der Stop verwendet ausschließlich einen neuen zulässigen letzten Handel bei 38,00 oder darunter und aktiviert dann eine Market-Verkaufsorder.",
      "Beide Ausstiege gelten in diesem Modell während der Lernsession von 9 bis 17 Uhr Marktzeit. Der Zielpreis ist eine Verkaufsuntergrenze, die Stopschwelle eine Auslösebedingung. Getrennte Ziel- und Stopfälle beginnen jeweils neu mit den sechs gekauften Aktien."
    ],
    "columns": [
      {
        "title": "Gekauft",
        "tone": "neutral",
        "points": [
          "Sechs zu 40,00: Kaufwert 240,00 Euro.",
          "Kaufgebühr 0,60 Euro."
        ]
      },
      {
        "title": "OCO bereit",
        "tone": "positive",
        "points": [
          "Ziel: Verkaufslimit 42,00.",
          "Stop: Schwelle 38,00, danach Market."
        ]
      }
    ],
    "prompt": "Was bedeutet die Stopschwelle 38,00 im Hauptfall?",
    "answers": [
      {
        "label": "Alle sechs werden garantiert zu 38,00 verkauft.",
        "explanation": "Die Schwelle ist keine Preisgarantie."
      },
      {
        "label": "Das Ziel wird automatisch auf 38,00 gesenkt.",
        "explanation": "Die Hauptregel ändert nicht den Zielpreis."
      },
      {
        "label": "Sie löst nach der festgelegten Kursregel eine Market-Verkaufsorder aus.",
        "explanation": "Richtig: Der tatsächliche Verkaufspreis wird erst durch die Ausführung bekannt."
      }
    ],
    "correct": 2,
    "rule": "Trenne Zielgrenze, Stop-Auslösung, Mengenverbindung und Gebühren."
  },
  {
    "title": "Den Zielausstieg über zwei Preisstufen rechnen",
    "summary": "Ein Verkaufsziel kann auch bessere Preise bekommen.",
    "paragraphs": [
      "Im getrennten Zielzweig stehen zwei kaufbereite Aktien zu 42,20 Euro und vier zu 42,00 bereit. Sie liegen beide innerhalb von Leas Verkaufslimit 42,00. Wir nehmen keine konkurrierenden Aufträge oder weiteren Buchänderungen an.",
      "Die sechs Verkäufe bringen 84,40 plus 168,00, zusammen 252,40 Euro. Gegenüber dem Kaufwert von 240,00 beträgt der Bruttogewinn 12,40. Nach Kauf- und Ausstiegsgebühr von zusammen 1,20 bleiben 11,20 Euro.",
      "Der Bestand ist null. Der Anbieter meldet anschließend den Stop der OCO-Gruppe als gelöscht; in unserem Hauptmodell passiert davor kein weiterer Handel. Die Löschung kostet im eigenen Gebührenmodell nichts. Ein ausgeführtes Ziel und ein bestätigter gelöschter Stop sind verschiedene Meldungen."
    ],
    "columns": [
      {
        "title": "Ziel ausgeführt",
        "tone": "neutral",
        "points": [
          "Zwei zu 42,20 plus vier zu 42,00.",
          "Erlös 252,40 Euro."
        ]
      },
      {
        "title": "Abschluss",
        "tone": "positive",
        "points": [
          "Gewinn nach Modellgebühren 11,20 Euro.",
          "Bestand null, Stop gelöscht."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Gewinn nach beiden Modellgebühren?",
    "answers": [
      {
        "label": "11,20 Euro.",
        "explanation": "Richtig: 252,40 minus 240,00 minus 1,20 ergibt 11,20."
      },
      {
        "label": "12,40 Euro.",
        "explanation": "Das ist der Bruttogewinn vor Gebühren."
      },
      {
        "label": "10,80 Euro.",
        "explanation": "Diese Zahl zieht nicht die festgelegten Gebühren von 1,20 ab."
      }
    ],
    "correct": 0,
    "rule": "Rechne Gewinne aus tatsächlichen Einzelpreisen und ziehe die vereinbarten Kosten ab."
  },
  {
    "title": "Der Stopausstieg kann unter der Schwelle handeln",
    "summary": "Die Verbindung beseitigt keine Preislücke.",
    "paragraphs": [
      "Der getrennte Stopzweig startet wieder mit sechs Aktien zu 40,00. Ein neuer zulässiger letzter Handel bei 37,90 löst den Verkaufsstop mit Schwelle 38,00 aus. Die aktive Market-Order trifft dann auf zwei Kaufangebote zu 37,80 und vier zu 37,60.",
      "Lea verkauft alle sechs für 75,60 plus 150,40, zusammen 226,00 Euro. Gegenüber 240,00 Kaufwert verliert sie brutto 14,00. Mit den beiden Gebühren von zusammen 1,20 beträgt der Verlust 15,20 Euro.",
      "Danach ist der Bestand null und der Anbieter bestätigt das gelöschte Verkaufsziel. Diese OCO-Löschung schützt nicht vor der schon entstandenen Preisabweichung. Der letzte Handel für die Auslösung, das Kaufangebot und der eigene Ausführungspreis können unterschiedlich sein."
    ],
    "columns": [
      {
        "title": "Stop ausgelöst",
        "tone": "neutral",
        "points": [
          "Neuer letzter Handel 37,90.",
          "Market verkauft zu 37,80 und 37,60."
        ]
      },
      {
        "title": "Abschluss",
        "tone": "positive",
        "points": [
          "Erlös 226,00 Euro.",
          "Verlust nach Modellgebühren 15,20 Euro."
        ]
      }
    ],
    "prompt": "Welcher Verlust passt zu den tatsächlichen Ausführungen?",
    "answers": [
      {
        "label": "Kein Verlust, weil die Orders verbunden waren.",
        "explanation": "Die Verbindung verändert die tatsächlichen Verkaufspreise nicht."
      },
      {
        "label": "15,20 Euro einschließlich der Modellgebühren.",
        "explanation": "Richtig: 240,00 minus 226,00 plus 1,20 ergibt 15,20."
      },
      {
        "label": "Genau 12,00 Euro ohne weitere Kosten.",
        "explanation": "Das setzt einen Verkauf aller Stücke zu 38,00 voraus."
      }
    ],
    "correct": 1,
    "rule": "OCO koordiniert Aufträge; ein Stop-Market bleibt ohne garantierten Verkaufspreis."
  },
  {
    "title": "Eine OCO-Teilmenge muss zur Restposition passen",
    "summary": "Im Hauptmodell werden beide Restmengen abgestimmt.",
    "paragraphs": [
      "Dieser Zielzweig startet neu mit sechs Aktien und der Haupt-OCO-Gruppe. Zunächst sind nur zwei Stück zu 42,20 kaufbereit. Lea verkauft diese zwei. Vier Aktien bleiben in der Position und vier Stück im Zielauftrag offen.",
      "Nach unserer Hauptregel reduziert der Anbieter den Stop von sechs auf vier. Die Zielrestmenge ist ebenfalls vier. Er bestätigt beide Mengen, bevor im Lernmodell ein weiterer Handel möglich ist. Vier plus vier sind alternative Ausstiege für dieselben vier Aktien, keine acht vorhandenen Aktien.",
      "Die Gebührenregel bleibt einmal 0,60 je ausgeführtem Auftrag, auch wenn dieser in mehreren Teilen handelt. In echten Systemen kann die Mengenänderung verzögert sein oder anders geregelt werden. Aus der ersten Teilausführung darfst du deshalb keine ungeprüfte Schutzmenge ableiten."
    ],
    "columns": [
      {
        "title": "Nach zwei Verkäufen",
        "tone": "neutral",
        "points": [
          "Position vier.",
          "Zielrest vier."
        ]
      },
      {
        "title": "Bestätigte Anpassung",
        "tone": "positive",
        "points": [
          "Stopmenge vier.",
          "Vier Aktien mit zwei alternativen Ausstiegen."
        ]
      }
    ],
    "prompt": "Welche Stopmenge bestätigt der Anbieter nach der Teilmenge im Hauptmodell?",
    "answers": [
      {
        "label": "Sechs Stück unverändert.",
        "explanation": "Das wäre im Hauptmodell eine nicht angepasste Menge."
      },
      {
        "label": "Acht Stück.",
        "explanation": "Alternative Ausstiegsorders werden nicht zu einem Bestand addiert."
      },
      {
        "label": "Vier Stück.",
        "explanation": "Richtig: Sie entspricht der verbliebenen Long-Position."
      }
    ],
    "correct": 2,
    "rule": "Prüfe nach Teilausführungen Position, Zielrest und bestätigte Gegenmenge zusammen."
  },
  {
    "title": "Eine andere OCO-Regel kann den Stop früher löschen",
    "summary": "Teilausführungen haben keine überall gleiche Folge.",
    "paragraphs": [
      "Ein ausdrücklich anderer Lernanbieter löscht den Gegenauftrag bereits bei der ersten Ausführung. Seine Regel lässt den nicht ausgeführten Rest des handelnden Zielauftrags weiter offen. Dieser Fall verwendet nicht die Mengenreduzierung aus dem Hauptmodell.",
      "Lea startet mit sechs Aktien, Ziel und Stop jeweils sechs. Zwei Stück werden am Ziel verkauft. Der Anbieter bestätigt nun den Stop als gelöscht. Vier Aktien und ein Zielrest von vier bleiben; eine aktive Stoporder gibt es in diesem Modell nicht mehr.",
      "Andere Varianten könnten auch den Zielrest löschen. Darum reicht die Angabe erste Ausführung allein nicht: Beide Restzustände müssen klar sein. Eine bestätigte OCO-Verarbeitung kann korrekt sein und trotzdem keine Stopabsicherung für die restliche Position übrig lassen."
    ],
    "columns": [
      {
        "title": "Alternative Regel",
        "tone": "neutral",
        "points": [
          "Erste Zielausführung löscht den Stop.",
          "Der Zielrest bleibt ausdrücklich offen."
        ]
      },
      {
        "title": "Nach zwei Verkäufen",
        "tone": "positive",
        "points": [
          "Vier Aktien bleiben.",
          "Kein aktiver Stop mehr."
        ]
      }
    ],
    "prompt": "Was bleibt nach der ersten Zielteilmenge bei diesem anderen Anbieter?",
    "answers": [
      {
        "label": "Vier Aktien, Zielrest vier und kein aktiver Stop.",
        "explanation": "Richtig: Genau das legt die alternative Restregel fest."
      },
      {
        "label": "Vier Aktien mit automatisch reduziertem Stop.",
        "explanation": "Diese Anpassung gehört zum Hauptmodell, nicht zur Alternative."
      },
      {
        "label": "Keine Position mehr.",
        "explanation": "Nur zwei von sechs wurden verkauft."
      }
    ],
    "correct": 0,
    "rule": "Lies die Regel für beide Auftragsreste statt OCO eine einzige Teilmengenfolge zuzuschreiben."
  },
  {
    "title": "Schnelle Ausführungen können eine Löschung überholen",
    "summary": "Eine Stornierungsanfrage ist noch kein gelöschter Auftrag.",
    "paragraphs": [
      "In einem separaten Verzögerungsmodell dürfen beide OCO-Aufträge gleichzeitig weitergeleitet werden. Das Konto erlaubt Short-Positionen, die nötige Leihe ist vorhanden. Es besitzt sechs Aktien; Ziel und Stop haben jeweils Menge sechs. Dieser Fall hat keine geordnete Hauptmodell-Verarbeitung.",
      "Das Ziel verkauft zunächst sechs zu 42,00. Die Gegenlöschung ist angefragt, aber noch nicht bestätigt. Bevor sie verarbeitet wird, löst der Stop aus und verkauft weitere sechs zu 37,80. Die Position wird sechs minus zwölf, also minus sechs.",
      "Die Meldungen müssen nach Auftragskennung und Ausführungszeit zugeordnet werden. Ob ein echter Anbieter gleichzeitige Weiterleitung verhindert, Mengen begrenzt oder eine Order ablehnt, hängt von seinen Regeln ab. Das Wort OCO ersetzt diese Prüfung nicht."
    ],
    "columns": [
      {
        "title": "Zeitfolge",
        "tone": "neutral",
        "points": [
          "Ziel sechs ausgeführt, Löschung angefragt.",
          "Stop sechs ausgeführt vor Löschbestätigung."
        ]
      },
      {
        "title": "Mengenfolge",
        "tone": "positive",
        "points": [
          "Zwölf Verkäufe bei sechs Aktien.",
          "Short-Position minus sechs."
        ]
      }
    ],
    "prompt": "Welche Meldung beweist die rechtzeitige Beendigung des Gegenauftrags?",
    "answers": [
      {
        "label": "Die OCO-Farbe auf dem Bildschirm.",
        "explanation": "Eine Darstellungsfarbe ist kein Statusnachweis."
      },
      {
        "label": "Eine bestätigte Löschung vor einer weiteren Ausführung.",
        "explanation": "Richtig: Die Anfrage allein belegt keinen beendeten Auftrag."
      },
      {
        "label": "Nur die gesendete Stornierungsanfrage.",
        "explanation": "Während der Verarbeitung kann noch eine Ausführung eintreffen."
      }
    ],
    "correct": 1,
    "rule": "Bei verzögerter Verarbeitung zählen Ausführungen und bestätigte Restzustände."
  },
  {
    "title": "Ein Bracket verbindet Einstieg und zwei Ausstiege",
    "summary": "Drei Aufträge bilden noch keine drei Ausführungen.",
    "paragraphs": [
      "Ein Bracket ist eine Klammer aus einem Einstiegsauftrag und vorgesehenen Ausstiegen. Der Einstieg heißt Parent, die angehängten Ausstiege heißen Children. Im neuen Lernfall lautet der Parent: sechs Nera-Aktien kaufen, Limit 40,00.",
      "Die Children sind ein Verkaufslimit 42,00 und ein Verkaufsstop 38,00, jeweils für sechs. Der Anbieter hält beide zunächst inaktiv. Unsere Bracket-Regel aktiviert sie erst nach vollständiger Parent-Ausführung und verbindet sie dann mit der Haupt-OCO-Regel.",
      "Vor der ersten Ausführung besitzt Lea null Aktien. Die drei angenommenen Aufträge bedeuten weder einen Bestand von sechs noch zwölf verkaufte Aktien. Anbieter können andere Aktivierungsregeln verwenden, besonders bei Teilmengen; hier ist die volle Parent-Ausführung ausdrücklich Voraussetzung."
    ],
    "columns": [
      {
        "title": "Parent",
        "tone": "neutral",
        "points": [
          "Kauf sechs mit Limit 40,00.",
          "Noch nicht ausgeführt."
        ]
      },
      {
        "title": "Children",
        "tone": "positive",
        "points": [
          "Ziel und Stop zunächst inaktiv.",
          "Aktivierung erst nach voller Parent-Ausführung."
        ]
      }
    ],
    "prompt": "Welcher Bestand besteht vor der ersten Parent-Ausführung?",
    "answers": [
      {
        "label": "Sechs Aktien.",
        "explanation": "Das wäre der Bestand nach vollständiger Ausführung."
      },
      {
        "label": "Minus zwölf Aktien.",
        "explanation": "Die inaktiven Children haben nichts verkauft."
      },
      {
        "label": "Null Aktien.",
        "explanation": "Richtig: Angenommene Aufträge erzeugen noch keinen Bestand."
      }
    ],
    "correct": 2,
    "rule": "Ein Bracket verknüpft einen Einstieg mit bedingten Ausstiegen; prüfe deren Aktivierung."
  },
  {
    "title": "Nach voller Parent-Ausführung die Children prüfen",
    "summary": "Eine angenommene Klammer braucht bestätigte aktive Ausstiege.",
    "paragraphs": [
      "Der Bracket-Parent aus dem neuen Fall kauft alle sechs Nera-Aktien zu 40,00. Jetzt besitzt Lea sechs. Der Anbieter meldet die Children gemäß unserer Regel als aktiv: Ziel sechs mit Limit 42,00 und Stop sechs mit Schwelle 38,00.",
      "Die Children gehören zur bestätigten OCO-Gruppe. Der Parent ist vollständig ausgeführt und hat keinen Kaufrest mehr. Ein späterer vollständiger Zielausstieg kann somit den Stop löschen, ohne dass anschließend aus einem alten Parentrest neue Aktien entstehen.",
      "Lea prüft Ausführungsbericht, aktive Mengen und Gruppenkennung. Die gezeichneten Linien allein beweisen die Annahme nicht. Unser Fall nimmt erfolgreiche Aktivierung an; eine Fehlermeldung eines Childs würde eine andere Situation bedeuten."
    ],
    "columns": [
      {
        "title": "Parent abgeschlossen",
        "tone": "neutral",
        "points": [
          "Sechs zu 40,00 gekauft.",
          "Kaufrest null."
        ]
      },
      {
        "title": "Children bestätigt",
        "tone": "positive",
        "points": [
          "Ziel sechs aktiv.",
          "Stop sechs aktiv, OCO verbunden."
        ]
      }
    ],
    "prompt": "Welche Prüfung belegt die vorgesehenen Ausstiege nach dem Einstieg?",
    "answers": [
      {
        "label": "Bestätigte aktive Child-Mengen und die OCO-Verbindung.",
        "explanation": "Richtig: Damit sind Status, Menge und Verknüpfung nachvollziehbar."
      },
      {
        "label": "Nur die beiden gezeichneten Linien.",
        "explanation": "Linien können auch vorbereitete oder abgelehnte Aufträge darstellen."
      },
      {
        "label": "Ein noch offener Parentrest von sechs.",
        "explanation": "Der Parent wurde vollständig ausgeführt und hat keinen Rest."
      }
    ],
    "correct": 0,
    "rule": "Kontrolliere nach dem Einstieg aktive Child-Orders statt nur die Bracket-Vorschau."
  },
  {
    "title": "Eine Parent-Teilmenge kann noch ohne aktive Children stehen",
    "summary": "Die Aktivierungsregel entscheidet über die ersten gekauften Stücke.",
    "paragraphs": [
      "Ein eigener Bracket-Zweig beginnt mit Parent sechs. Zunächst werden nur zwei Aktien zu 40,00 gekauft. Vier Kaufstücke bleiben offen. Nach unserer Regel volle Parent-Ausführung zuerst sind die Children weiterhin inaktiv, obwohl Lea bereits zwei Aktien besitzt.",
      "Die zwei Aktien haben dadurch in diesem Zeitfenster keine aktive Child-Stoporder. Das ist kein Widerspruch: Die vorgesehene Ausstiegsmenge sechs und ihre Aktivierungsbedingung wurden noch nicht erreicht. Die Klammer ersetzt keinen Blick auf den Zwischenzustand.",
      "Eine andere ausdrücklich festgelegte Regel könnte bereits für die ausgeführten zwei Stück Children aktivieren und später erhöhen. Diese Alternative darf nicht stillschweigend auf unseren Fall übertragen werden. Prüfe immer, welche Regel tatsächlich unterstützt und bestätigt ist."
    ],
    "columns": [
      {
        "title": "Volle-Ausführung-Regel",
        "tone": "neutral",
        "points": [
          "Zwei gekauft, vier Parentrest.",
          "Children noch inaktiv."
        ]
      },
      {
        "title": "Mögliche andere Regel",
        "tone": "positive",
        "points": [
          "Children für bestätigte Teilmenge.",
          "Nur bei ausdrücklich anderer Aktivierung."
        ]
      }
    ],
    "prompt": "Welche Child-Stopmenge ist in unserem Zwischenzustand aktiv?",
    "answers": [
      {
        "label": "Immer zwei bei jedem Anbieter.",
        "explanation": "Andere Anbieter können eine solche Regel haben, unser Fall nicht."
      },
      {
        "label": "Keine; die Children warten auf die volle Parent-Ausführung.",
        "explanation": "Richtig: Zwei gekaufte Aktien bedeuten hier noch keine aktiven Children."
      },
      {
        "label": "Automatisch sechs.",
        "explanation": "Die festgelegte Aktivierungsbedingung ist noch nicht erfüllt."
      }
    ],
    "correct": 1,
    "rule": "Parent-Teilmenge und Child-Aktivierung müssen getrennt kontrolliert werden."
  },
  {
    "title": "Den Parentrest löschen lässt gekaufte Stücke bestehen",
    "summary": "Eine Entry-Stornierung ist kein Positionsausstieg.",
    "paragraphs": [
      "Wir bleiben im Bracket-Zweig mit zwei gekauften Aktien und vier offenem Parentrest. Lea lässt die vier offenen Kaufstücke stornieren. Der Anbieter bestätigt: Kaufrest gelöscht. Die zwei bereits gekauften Aktien bleiben im Bestand.",
      "Die volle Parentmenge sechs wird nun nicht mehr erreicht. Unser Lernanbieter beendet in diesem Fall auch beide noch inaktiven Children und bestätigt diese Löschungen. Damit stehen zwei Aktien ohne aktive Bracket-Ausstiege im Konto.",
      "Diese Löschung der inaktiven Children ist eine eigene Zusatzregel. Bei anderen Anbietern können andere Folgen gelten. Wenn Lea die zwei Aktien ebenfalls schließen möchte, braucht sie einen passenden neuen Ausstieg und dessen tatsächliche Ausführung."
    ],
    "columns": [
      {
        "title": "Vor Stornierung",
        "tone": "neutral",
        "points": [
          "Position zwei, Parentrest vier.",
          "Children inaktiv."
        ]
      },
      {
        "title": "Danach bestätigt",
        "tone": "positive",
        "points": [
          "Parentrest und inaktive Children gelöscht.",
          "Position weiterhin zwei."
        ]
      }
    ],
    "prompt": "Wie groß ist die Position nach bestätigter Löschung des Parentrests?",
    "answers": [
      {
        "label": "Null Aktien.",
        "explanation": "Dazu wären zusätzlich zwei ausgeführte Verkäufe nötig."
      },
      {
        "label": "Sechs Aktien.",
        "explanation": "Die vier stornierten Kaufstücke wurden nie gekauft."
      },
      {
        "label": "Zwei Aktien.",
        "explanation": "Richtig: Die zwei ausgeführten Käufe werden nicht rückgängig gemacht."
      }
    ],
    "correct": 2,
    "rule": "Ein gelöschter Einstiegrest beendet weder ausgeführte Käufe noch automatisch deren Risiko."
  },
  {
    "title": "Ein abgelehntes Child hinterlässt eine unvollständige Klammer",
    "summary": "Die Einstiegsposition kann trotz Fehlermeldung bestehen.",
    "paragraphs": [
      "Ein separater Fehlerfall kauft alle sechs Aktien zu 40,00. Beim Aktivieren nimmt der Lernanbieter das Verkaufsziel an, lehnt den Stop aber wegen einer nicht unterstützten Bedingung ab. In diesem Modell führt die Ablehnung nicht zu einer automatischen Rückabwicklung des Kaufs.",
      "Der Bestand beträgt sechs, das Ziel ist aktiv, der Stop nicht. Der Anbieter meldet ausdrücklich eine unvollständige Ausstiegsgruppe. Dass der Bracket-Parent erfolgreich war, beweist keine erfolgreiche Annahme beider Children.",
      "Lea muss den tatsächlich bestehenden Zustand behandeln: Position und aktive Orders prüfen und einen zulässigen Schutz oder Ausstieg nach ihren Regeln veranlassen. Eine erneute Vorschau allein löst das Problem nicht. Die genauen Ablehnungsfolgen sind anbieterabhängig."
    ],
    "columns": [
      {
        "title": "Erfolgreich",
        "tone": "neutral",
        "points": [
          "Parent sechs gekauft.",
          "Ziel angenommen."
        ]
      },
      {
        "title": "Fehler",
        "tone": "positive",
        "points": [
          "Stop abgelehnt.",
          "Sechs Aktien ohne aktive Stoporder."
        ]
      }
    ],
    "prompt": "Welche Aussage passt zum Fehlerfall?",
    "answers": [
      {
        "label": "Sechs Aktien und ein aktives Ziel, aber kein aktiver Stop.",
        "explanation": "Richtig: Der Kauf bleibt trotz abgelehntem Child bestehen."
      },
      {
        "label": "Kein Bestand, weil ein Child abgelehnt wurde.",
        "explanation": "Unser Modell wickelt den Kauf ausdrücklich nicht zurück."
      },
      {
        "label": "Der Stop schützt trotzdem, weil er in der Vorschau stand.",
        "explanation": "Eine abgelehnte Order ist nicht aktiv."
      }
    ],
    "correct": 0,
    "rule": "Prüfe jedes Child einzeln; eine erfolgreiche Entry-Order garantiert keine vollständige Klammer."
  },
  {
    "title": "Ein manueller Ausstieg kann alte Ausstiege zurücklassen",
    "summary": "Schließen und Gegenorders löschen sind eigene Vorgänge.",
    "paragraphs": [
      "Lea besitzt sechs Aktien mit aktiven Bracket-Ausstiegen. In einem getrennten Lernkonto benutzt sie einen zusätzlichen manuellen Market-Verkauf über sechs. Dieser neue Auftrag ist nicht mit der Bracket-Gruppe verbunden; eine automatische Aufräumfunktion gibt es hier nicht.",
      "Der manuelle Verkauf wird vollständig ausgeführt. Lea hat null Aktien, aber Ziel und Stop der alten Gruppe stehen noch aktiv auf jeweils sechs. Sie veranlasst deren Stornierung und kontrolliert die Bestätigungen. Vor deren Verarbeitung sind die Aufträge noch nicht sicher beendet.",
      "Das Konto erlaubt Short-Positionen mit verfügbarer Leihe. Würde ein alter Ausstieg vorher sechs verkaufen, entstünde minus sechs. Manche echte Schließen-Funktionen koordinieren die Löschung anders. Deshalb muss die verwendete Funktion konkret geprüft werden."
    ],
    "columns": [
      {
        "title": "Manuell ausgeführt",
        "tone": "neutral",
        "points": [
          "Sechs verkauft, Position null.",
          "Keine automatische Verbindung zum Bracket."
        ]
      },
      {
        "title": "Aufräumen nötig",
        "tone": "positive",
        "points": [
          "Altes Ziel und alter Stop noch aktiv.",
          "Beide Löschbestätigungen prüfen."
        ]
      }
    ],
    "prompt": "Was beweist der vollständige manuelle Verkauf in diesem Konto nicht?",
    "answers": [
      {
        "label": "Dass die Position zunächst null geworden ist.",
        "explanation": "Sechs vorhandene minus sechs verkaufte Stück ergibt null."
      },
      {
        "label": "Dass die alten Bracket-Ausstiege bereits gelöscht sind.",
        "explanation": "Richtig: Der manuelle Auftrag hat keine Aufräumverknüpfung."
      },
      {
        "label": "Dass sechs Stück tatsächlich verkauft wurden.",
        "explanation": "Genau das meldet der vollständige Ausführungsbericht."
      }
    ],
    "correct": 1,
    "rule": "Nach manuellen Ausstiegen kontrolliere alte Orders zusätzlich zur Restposition."
  },
  {
    "title": "Ein manueller Teilausstieg braucht neue Mengen",
    "summary": "Zwei Verkäufe können die alten Child-Mengen zu groß machen.",
    "paragraphs": [
      "Der getrennte manuelle Teilfall beginnt mit sechs Aktien und zwei aktiven Child-Ausstiegen über jeweils sechs. Ein unabhängiger manueller Verkauf schließt zwei Stück. Vier Aktien bleiben, die Child-Mengen ändern sich in diesem Modell noch nicht automatisch.",
      "Lea beantragt beide Child-Mengen auf vier zu verkleinern. Während die Änderungen ausstehen, gelten sie noch nicht als bestätigt. Für die anschließende Übungsrechnung nehmen wir ausdrücklich an, dass in diesem Änderungsfenster kein weiterer Handel stattfindet.",
      "Danach bestätigt der Anbieter Ziel vier, Stop vier und dieselbe OCO-Gruppe. Erst dieser bestätigte Zustand passt zum Bestand von vier. Bei echter laufender Verarbeitung müsste Lea neue Ausführungen berücksichtigen; eine alte Positionsanzeige kann inzwischen überholt sein."
    ],
    "columns": [
      {
        "title": "Nach manuellem Teilverkauf",
        "tone": "neutral",
        "points": [
          "Position vier.",
          "Alte Child-Mengen zunächst sechs."
        ]
      },
      {
        "title": "Nach bestätigter Änderung",
        "tone": "positive",
        "points": [
          "Ziel vier und Stop vier.",
          "Kein weiterer Handel im Übungsfenster."
        ]
      }
    ],
    "prompt": "Ab wann passt die verringerte Child-Menge zur bestätigten Restposition?",
    "answers": [
      {
        "label": "Sobald Lea die Änderung anklickt.",
        "explanation": "Die Anfrage beweist noch keine ausgeführte Änderung."
      },
      {
        "label": "Die Menge sechs passt immer zu einer Position vier.",
        "explanation": "Ein Verkauf von sechs könnte die verbleibenden vier überschreiten."
      },
      {
        "label": "Nach bestätigter Änderung, sofern keine weiteren Trades stattgefunden haben.",
        "explanation": "Richtig: Genau diese Bedingung liegt im gerechneten Fall vor."
      }
    ],
    "correct": 2,
    "rule": "Vergleiche neue Positionsdaten mit bestätigten Ordermengen nach jedem manuellen Teilverkauf."
  },
  {
    "title": "Reduce-only braucht eine konkrete Anbieterregel",
    "summary": "Eine Mengenbegrenzung ist keine Ausführungsgarantie.",
    "paragraphs": [
      "Ein weiterer erfundener Anbieter unterstützt Reduce-only für unser Lernprodukt. Das bedeutet hier: Ein Verkauf darf eine vorhandene Long-Position verkleinern, aber keine Short-Position eröffnen. Diese Regel ist eine zusätzliche Positionsprüfung und nicht gleichbedeutend mit OCO.",
      "Lea hat vier Aktien und einen Reduce-only-Verkauf über sechs angefragt. Der Anbieter begrenzt bei jeder Verarbeitung die ausführbare Menge auf den dann vorhandenen positiven Bestand. Nach vier Verkäufen beendet er den überschüssigen Rest von zwei; eine Short-Position entsteht in diesem Modell nicht.",
      "Bei Bestand null darf dieser Verkaufsauftrag nichts ausführen. Preis, verfügbare Käufer und Annahme sind dadurch nicht garantiert. Reale Produkte können Reduce-only anders unterstützen oder gar nicht anbieten. Unsere Verarbeitung und Restbeendigung sind ausdrücklich Lernregeln."
    ],
    "columns": [
      {
        "title": "Eigene Reduce-only-Regel",
        "tone": "neutral",
        "points": [
          "Position vier, Verkaufswunsch sechs.",
          "Höchstens vorhandene vier verkaufbar."
        ]
      },
      {
        "title": "Danach",
        "tone": "positive",
        "points": [
          "Position null, Überschuss zwei beendet.",
          "Keine erlaubte neue Short-Position."
        ]
      }
    ],
    "prompt": "Was verhindert Reduce-only nach der ausdrücklich festgelegten Lernregel?",
    "answers": [
      {
        "label": "Eine neue Short-Position durch diesen Verkaufsauftrag.",
        "explanation": "Richtig: Der Anbieter begrenzt jede Verarbeitung auf den vorhandenen Long-Bestand."
      },
      {
        "label": "Jede Preisabweichung beim Verkauf.",
        "explanation": "Die Positionsprüfung garantiert keinen Preis."
      },
      {
        "label": "Jede Ablehnung bei jedem echten Anbieter.",
        "explanation": "Unterstützung und Annahme hängen vom Anbieter ab."
      }
    ],
    "correct": 0,
    "rule": "Prüfe die tatsächliche Reduce-only-Regel und verwechsle sie nicht mit einer Preisgarantie."
  },
  {
    "title": "Stop-Limit kann auch im Bracket offen bleiben",
    "summary": "Eine ausgelöste Order ist noch keine geschlossene Position.",
    "paragraphs": [
      "Ein neuer Alternativfall ersetzt den Hauptstop durch einen Verkaufs-Stop-Limit: Schwelle 38,00, Folge-Verkaufslimit 37,80. Lea besitzt sechs Aktien; das Ziel bleibt bei 42,00. Die Gruppenregel löscht das Gegenstück erst nach einem ausgeführten vollständigen Ausstieg, nicht schon bei Stop-Auslösung.",
      "Ein zulässiger letzter Handel bei 37,70 löst den Stop aus. Danach liegen alle aktuellen Kaufangebote nur bei 37,60. Sie unterschreiten die Verkaufsuntergrenze 37,80. Es wird keine Aktie verkauft; der aktive Folge-Limitauftrag über sechs bleibt offen.",
      "Der Bestand ist weiterhin sechs und das Ziel ebenfalls noch aktiv in der Gruppe. Unser Modell hält diese Verbindung nach der Umwandlung aufrecht. Der Stop-Limit begrenzt den erlaubten Preis, garantiert aber keinen Käufer und keinen rechtzeitigen Ausstieg."
    ],
    "columns": [
      {
        "title": "Stop-Limit aktiviert",
        "tone": "neutral",
        "points": [
          "Schwelle 38,00 erreicht oder unterschritten.",
          "Folgelimit mindestens 37,80."
        ]
      },
      {
        "title": "Nur Käufer bei 37,60",
        "tone": "positive",
        "points": [
          "Keine passende Ausführung.",
          "Position sechs, Folgeorder sechs offen."
        ]
      }
    ],
    "prompt": "Wie groß ist die Position nach Auslösung ohne zulässige Käufer?",
    "answers": [
      {
        "label": "Minus sechs Aktien.",
        "explanation": "Es fand überhaupt kein Verkauf statt."
      },
      {
        "label": "Sechs Aktien.",
        "explanation": "Richtig: Keine Aktie wurde tatsächlich verkauft."
      },
      {
        "label": "Null Aktien.",
        "explanation": "Auslösung allein schließt den Bestand nicht."
      }
    ],
    "correct": 1,
    "rule": "Auch im Bracket bleibt ein Stop-Limit ohne passende Ausführung eine offene Position."
  },
  {
    "title": "Den geplanten Verlust mit dem tatsächlichen vergleichen",
    "summary": "Eine Schwellenrechnung ist nur eine Annahme.",
    "paragraphs": [
      "Der Hauptfall hat Kaufpreis 40,00 und Stopschwelle 38,00 bei sechs Aktien. Wenn alle sechs genau zu 38,00 verkauft würden, wären es 12,00 Euro Bruttoverlust. Mit den Modellgebühren von 1,20 wären es 13,20. Dieses Wenn gehört zur Rechnung.",
      "Im tatsächlichen Stopzweig wurden zwei zu 37,80 und vier zu 37,60 verkauft. Der Erlös war 226,00, der Verlust nach Gebühren 15,20. Das sind 2,00 Euro mehr als in der Rechnung mit Ausführung genau an der Schwelle.",
      "Eine OCO- oder Bracket-Verbindung macht aus der ersten Annahme keine feste Verlustobergrenze. Weitere Kosten, weniger verfügbare Mengen oder stärkere Lücken können andere Ergebnisse erzeugen. Diese Rechnung beschreibt einen Lernfall und keine Empfehlung für eine passende Positionsgröße."
    ],
    "columns": [
      {
        "title": "Annahme zu 38,00",
        "tone": "neutral",
        "points": [
          "Bruttoverlust 12,00 Euro.",
          "Mit Modellgebühren 13,20 Euro."
        ]
      },
      {
        "title": "Tatsächlich im Stopzweig",
        "tone": "positive",
        "points": [
          "Verlust mit Gebühren 15,20 Euro.",
          "2,00 Euro mehr als die Annahme."
        ]
      }
    ],
    "prompt": "Um wie viel übersteigt der tatsächliche Verlust die Rechnung zu 38,00?",
    "answers": [
      {
        "label": "1,20 Euro.",
        "explanation": "Das sind die Gebühren, die in beiden Rechnungen gleich berücksichtigt wurden."
      },
      {
        "label": "0,00 Euro.",
        "explanation": "Die tatsächlichen Verkaufspreise lagen unter 38,00."
      },
      {
        "label": "2,00 Euro.",
        "explanation": "Richtig: 15,20 minus 13,20 ergibt 2,00."
      }
    ],
    "correct": 2,
    "rule": "Kennzeichne Preisannahmen und vergleiche sie anschließend mit tatsächlichen Ausführungen."
  },
  {
    "title": "Den vollständigen Ausstieg als Abschlussbericht lesen",
    "summary": "Bestand null und keine alten Ausstiege sind zwei Kontrollen.",
    "paragraphs": [
      "Zum Abschluss nehmen wir den Zielzweig des Hauptfalls: sechs Nera-Aktien zu 40,00 gekauft, danach zwei zu 42,20 und vier zu 42,00 verkauft. Es gab keine anderen Trades. Kaufwert 240,00 und Verkaufserlös 252,40 sind aus den Ausführungsberichten nachweisbar.",
      "Der Zielauftrag ist vollständig ausgeführt, der Gegenstop bestätigt gelöscht. Es gibt keinen Parentrest und keine weiteren Ausstiegsorders. Die Position beträgt null, der Nettogewinn nach unseren beiden Gebühren 11,20. Die alternativen Stop-, Teilmengen- und Fehlerfälle gehören nicht in diese gemeinsame Bilanz.",
      "Lea kontrolliert Produkt, Seite, Menge und Kennung jeder Meldung. Ein vollständiger Abschlussbericht enthält tatsächliche Trades, verbleibenden Bestand, offene oder beendete Orders und Kosten. Erst damit sind Schließen, OCO und Bracket nachvollziehbar statt nur als Bildschirmnamen bekannt."
    ],
    "columns": [
      {
        "title": "Trades und Kosten",
        "tone": "neutral",
        "points": [
          "Sechs gekauft, sechs verkauft.",
          "Gewinn nach Modellgebühren 11,20 Euro."
        ]
      },
      {
        "title": "Restkontrolle",
        "tone": "positive",
        "points": [
          "Position null, Ziel ausgeführt.",
          "Stop gelöscht, keine weiteren Orders."
        ]
      }
    ],
    "prompt": "Welcher Abschlussbericht passt zum Haupt-Zielzweig?",
    "answers": [
      {
        "label": "Position null, Stop gelöscht, keine offenen Orders, Gewinn 11,20 Euro.",
        "explanation": "Richtig: Trades, Gebühren und Restzustände passen zusammen."
      },
      {
        "label": "Position sechs, weil der Parent ursprünglich sechs kaufen sollte.",
        "explanation": "Die späteren sechs Verkäufe haben den Bestand geschlossen."
      },
      {
        "label": "Position null und Verlust 15,20 Euro aus demselben Zielzweig.",
        "explanation": "Der Verlust gehört zum getrennten Stopzweig und darf nicht dazugerechnet werden."
      }
    ],
    "correct": 0,
    "rule": "Beende die Prüfung mit tatsächlicher Position, bestätigten Orderresten und vollständiger Kostenbilanz."
  }
];
export const ordersChapterSixLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-06.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 6 · Positionen schließen, OCO und Brackets',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 6', title: draft.title,
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
