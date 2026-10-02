import type { Lesson } from '../../types';
const drafts = [
  {
    "title": "Dein Wunsch braucht einen klaren Auftrag",
    "summary": "Eine Order ist eine Handelsanweisung.",
    "paragraphs": [
      "Lea möchte fünf Aktien der erfundenen Firma Luma kaufen. „Ich finde Luma gut“ reicht dafür nicht. Der Anbieter braucht eine genaue Anweisung. Diese Anweisung heißt Order oder Auftrag. Sie beschreibt, was gehandelt werden soll.",
      "Zu einem Auftrag gehören mindestens das Produkt, die Seite und die Menge. Seite meint Kaufen oder Verkaufen. Hinzu kommen Regeln für Preis und Gültigkeit. Gültigkeit beschreibt, wie lange der Auftrag bestehen soll. Eine App kann dafür bereits Werte einsetzen. Diese Vorgaben musst du trotzdem verstehen.",
      "In diesem Kapitel übst du mit erfundenen Aktien und vereinfachten Abläufen. Sie sind keine Kaufempfehlung. Ein klarer Auftrag drückt deinen Wunsch aus. Er beweist noch nicht, dass ein Geschäft stattgefunden hat."
    ],
    "columns": [
      {
        "title": "Wunsch",
        "tone": "neutral",
        "points": [
          "Luma gefällt mir.",
          "Die Menge ist noch offen."
        ]
      },
      {
        "title": "Auftrag",
        "tone": "positive",
        "points": [
          "Luma-Aktie kaufen: fünf Stück.",
          "Preisregel und Gültigkeit festlegen."
        ]
      }
    ],
    "prompt": "Was ist eine Order?",
    "answers": [
      {
        "label": "Eine Anweisung für einen Handel.",
        "explanation": "Richtig: Sie beschreibt den gewünschten Handel und seine Bedingungen."
      },
      {
        "label": "Ein schon sicher erzielter Gewinn.",
        "explanation": "Eine Order sagt nichts über einen späteren Gewinn."
      },
      {
        "label": "Nur eine Meinung über das Unternehmen.",
        "explanation": "Eine Meinung enthält noch keine vollständige Handelsanweisung."
      }
    ],
    "correct": 0,
    "rule": "Ein Wunsch wird erst durch klare Angaben zum Auftrag."
  },
  {
    "title": "Das richtige Produkt auswählen",
    "summary": "Ein Name allein kann mehrdeutig sein.",
    "paragraphs": [
      "Lea sucht Luma. Die Suche zeigt eine Aktie und einen Vertrag, dessen Wert von dieser Aktie abhängt. Beide tragen ähnliche Namen. Trotzdem kauft Lea mit ihnen verschiedene Rechte und geht verschiedene Pflichten ein.",
      "Das Symbol ist ein kurzes Erkennungszeichen. Es hilft bei der Suche. Zusätzlich prüft Lea die Produktart, die Währung und die genauere Kennung. Bei einem Vertrag kann auch der Verfall wichtig sein. Verfall nennt man den Termin, an dem bestimmte Vertragsrechte oder Pflichten enden.",
      "Ein ähnlicher Chart macht Produkte nicht austauschbar. Auch der gleiche Preis reicht nicht. Lea wählt im Beispiel die Luma-Aktie in Euro. Erst danach legt sie ihre Order fest."
    ],
    "columns": [
      {
        "title": "Ähnlicher Name",
        "tone": "neutral",
        "points": [
          "Luma-Aktie.",
          "Vertrag auf Luma."
        ]
      },
      {
        "title": "Eindeutige Auswahl",
        "tone": "positive",
        "points": [
          "Produktart und Kennung lesen.",
          "Währung und gegebenenfalls Laufzeit prüfen."
        ]
      }
    ],
    "prompt": "Warum reicht „Luma“ nicht immer?",
    "answers": [
      {
        "label": "Die Chartfarbe bestimmt das Produkt.",
        "explanation": "Die Farbe erklärt weder Rechte noch Vertragsbedingungen."
      },
      {
        "label": "Die Suche kann verschiedene Produkte zeigen.",
        "explanation": "Richtig: Der Produktname allein klärt die Rechte und Pflichten nicht."
      },
      {
        "label": "Alle Suchtreffer haben dieselben Bedingungen.",
        "explanation": "Ähnliche Namen können ganz verschiedene Produkte bezeichnen."
      }
    ],
    "correct": 1,
    "rule": "Prüfe das Produkt, bevor du den Auftrag ausfüllst."
  },
  {
    "title": "Kaufen und Verkaufen haben eine Richtung",
    "summary": "Der Knopf verändert deinen Bestand.",
    "paragraphs": [
      "Lea besitzt zunächst keine Luma-Aktien. Sie kauft fünf Stück. Nach vollständiger Ausführung besitzt sie fünf. Verkauft sie später zwei dieser Aktien, bleiben drei. Kaufen und Verkaufen beschreiben hier eine Änderung des Bestands.",
      "Eine Position ist dein gehaltener Bestand oder Vertrag. Ein Verkaufsauftrag kann einen vorhandenen Bestand verringern. Bei manchen Produkten und Konten kann er auch eine neue Position auf fallende Preise eröffnen. Das nennt man Shortposition. Dafür gelten zusätzliche Bedingungen.",
      "In unseren Aktienfällen verkauft Lea nur Aktien, die sie besitzt. Übertrage das nicht blind auf Futures oder andere Konten. Prüfe immer, ob dein Auftrag eine Position eröffnet, verkleinert, schließt oder in die andere Richtung dreht."
    ],
    "columns": [
      {
        "title": "Vorher",
        "tone": "neutral",
        "points": [
          "Fünf Aktien im Bestand.",
          "Zwei davon werden verkauft."
        ]
      },
      {
        "title": "Nachher",
        "tone": "positive",
        "points": [
          "Drei Aktien bleiben.",
          "Der Verkauf ist keine neue Kaufposition."
        ]
      }
    ],
    "prompt": "Lea besitzt fünf Aktien und verkauft zwei. Was bleibt?",
    "answers": [
      {
        "label": "Sieben Aktien.",
        "explanation": "Ein Verkauf verringert hier den Bestand, er erhöht ihn nicht."
      },
      {
        "label": "Immer eine Shortposition.",
        "explanation": "Lea verkauft weniger Aktien, als sie bereits besitzt."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Richtig: Fünf minus zwei ergibt drei."
      }
    ],
    "correct": 2,
    "rule": "Lies die Seite zusammen mit deinem vorhandenen Bestand."
  },
  {
    "title": "Stückzahl ist nicht der Geldbetrag",
    "summary": "Die Einheit gehört zur Menge.",
    "paragraphs": [
      "Im Auftragsfeld steht „Menge: 5 Stück“. Das heißt fünf Aktien. Es heißt nicht fünf Euro. Wenn jede Aktie für 20 Euro gekauft wird, beträgt der Kaufwert 5 × 20 = 100 Euro. Gebühren kommen gegebenenfalls hinzu.",
      "Andere Produkte verwenden andere Einheiten. Bei einem Future gibt die Menge häufig die Anzahl der Verträge an. Der Geldwert einer Preisbewegung hängt zusätzlich von den Vertragsregeln ab. Fünf Aktien und fünf Futures bedeuten deshalb nicht dasselbe Preisrisiko.",
      "Lea prüft die Einheit direkt neben dem Mengenfeld. Manche Oberflächen erlauben auch einen Geldbetrag statt einer Stückzahl. Dann kann die berechnete Menge anders ausfallen. Für unsere Beispiele bleibt die Einheit ausdrücklich Stück."
    ],
    "columns": [
      {
        "title": "Menge",
        "tone": "neutral",
        "points": [
          "5 Stück.",
          "Preis: 20 Euro je Aktie."
        ]
      },
      {
        "title": "Kaufwert",
        "tone": "positive",
        "points": [
          "5 × 20 Euro = 100 Euro.",
          "Zusätzliche Gebühren separat prüfen."
        ]
      }
    ],
    "prompt": "Wie hoch ist der Kaufwert ohne Gebühren?",
    "answers": [
      {
        "label": "100 Euro.",
        "explanation": "Richtig: Fünf Stück zu je 20 Euro ergeben 100 Euro."
      },
      {
        "label": "5 Euro.",
        "explanation": "Fünf ist die Stückzahl, kein Geldbetrag."
      },
      {
        "label": "20 Euro.",
        "explanation": "Das ist der Preis einer Aktie, nicht aller fünf."
      }
    ],
    "correct": 0,
    "rule": "Zu jeder Menge gehört eine eindeutig benannte Einheit."
  },
  {
    "title": "Den Preiswunsch als Regel ausdrücken",
    "summary": "Schnelligkeit und Preisgrenze unterscheiden.",
    "paragraphs": [
      "Lea kann sagen: „Kaufe ohne eigene Preisgrenze zu den verfügbaren Angeboten.“ Das ist die Grundidee einer Market-Order. Market heißt hier, dass der Auftrag keine selbst gesetzte Preisgrenze enthält. Anbieter und Handelsplatz können trotzdem Schutzregeln anwenden.",
      "Lea kann stattdessen sagen: „Kaufe höchstens für 20 Euro je Aktie.“ Das ist eine Limit-Order. Limit bedeutet Preisgrenze. Beim Kauf ist es der höchste akzeptierte Stückpreis. Beim Verkauf ist es der niedrigste akzeptierte Stückpreis.",
      "Die beiden Regeln lösen verschiedene Aufgaben. Eine Market-Order schützt nicht deinen Wunschpreis. Eine Limit-Order garantiert nicht, dass du überhaupt handelst. Die nächsten Kapitel erklären diese Auftragstypen ausführlich. Hier geht es zuerst darum, die Anweisung richtig zu lesen."
    ],
    "columns": [
      {
        "title": "Market",
        "tone": "neutral",
        "points": [
          "Keine eigene Preisgrenze.",
          "Der tatsächliche Preis kann abweichen."
        ]
      },
      {
        "title": "Limit",
        "tone": "positive",
        "points": [
          "Kauf höchstens 20 Euro je Stück.",
          "Ein Handel kann ausbleiben."
        ]
      }
    ],
    "prompt": "Welche Anweisung setzt eine Kaufpreisgrenze?",
    "answers": [
      {
        "label": "Kaufe garantiert mit Gewinn.",
        "explanation": "Eine Preisregel garantiert keinen Gewinn."
      },
      {
        "label": "Kaufe höchstens zu 20 Euro je Aktie.",
        "explanation": "Richtig: Sie begrenzt den Stückpreis nach oben."
      },
      {
        "label": "Kaufe zu verfügbaren Angeboten ohne eigene Grenze.",
        "explanation": "Diese Anweisung enthält gerade keine selbst gesetzte Preisgrenze."
      }
    ],
    "correct": 1,
    "rule": "Eine Preisgrenze und eine Ausführungszusage sind verschiedene Dinge."
  },
  {
    "title": "Die Preisgrenze ist kein Zielpreis",
    "summary": "Ein günstigerer Preis ist möglich.",
    "paragraphs": [
      "Lea setzt ein Kauflimit von 20,10 Euro. Im erfundenen fortlaufenden Markt sind fünf Aktien zu 20,00 Euro verfügbar. Andere Aufträge greifen nicht ein. Nach unseren Übungsregeln erhält sie die fünf Aktien zu 20,00 Euro.",
      "Das Limit erlaubt diesen Preis. Es verlangt nicht, dass Lea genau 20,10 Euro zahlt. Höchstens 20,10 heißt: 20,10 oder weniger. Der Kaufwert ist 5 × 20,00 = 100,00 Euro. Fünf Aktien genau am Limit hätten 100,50 Euro gekostet.",
      "Ein Limit gilt für den Stückpreis der Ausführung. Zusätzliche Gebühren können den Gesamtbetrag über Stückzahl mal Limit erhöhen. Auch ist ein gerade sichtbares Angebot kein Versprechen, dass es bei Ankunft des Auftrags noch verfügbar ist."
    ],
    "columns": [
      {
        "title": "Erlaubt",
        "tone": "neutral",
        "points": [
          "Kauflimit: 20,10 Euro.",
          "Ausführung: 20,00 Euro je Stück."
        ]
      },
      {
        "title": "Geldbetrag",
        "tone": "positive",
        "points": [
          "Fünf Stück kosten 100,00 Euro.",
          "Gebühren sind noch nicht enthalten."
        ]
      }
    ],
    "prompt": "Muss Lea genau 20,10 Euro zahlen?",
    "answers": [
      {
        "label": "Ja, ein Limit erzwingt genau diesen Preis.",
        "explanation": "Die Grenze ist keine Pflicht, den maximalen Preis zu zahlen."
      },
      {
        "label": "Nein, auch 20,20 Euro wäre innerhalb der Grenze.",
        "explanation": "20,20 liegt über dem Kauflimit von 20,10."
      },
      {
        "label": "Nein, 20,00 Euro liegt innerhalb ihrer Kaufgrenze.",
        "explanation": "Richtig: Ein Kauflimit erlaubt auch niedrigere Preise."
      }
    ],
    "correct": 2,
    "rule": "Beim Kauf bedeutet Limit höchstens, beim Verkauf mindestens."
  },
  {
    "title": "Wie lange soll der Auftrag gelten?",
    "summary": "Gültigkeit ist eine eigene Einstellung.",
    "paragraphs": [
      "Lea gibt ihre Preisgrenze an. Damit ist noch nicht klar, wie lange der Auftrag warten darf. Eine Tagesorder gilt nach den Regeln des Anbieters und der jeweiligen Handelsphase. Das Ende muss nicht Mitternacht deiner Ortszeit sein.",
      "Eine Order bis auf Widerruf soll grundsätzlich länger bestehen. Widerruf bedeutet, dass du sie zurücknimmst. Der Anbieter kann trotzdem eine Höchstdauer oder besondere Löschregeln festlegen. Ein Datum im Kalender allein erklärt diese Regeln nicht.",
      "Für unseren Lernmarkt gilt ausdrücklich: Tagesorders enden um 17 Uhr Marktzeit. Leas Auftrag ist um 16:59 offen. Ohne Ausführung wird der Rest um 17 Uhr gelöscht und als abgelaufen gemeldet. In einem echten System liest du die genaue Produkt- und Anbieterregel."
    ],
    "columns": [
      {
        "title": "Preisregel",
        "tone": "neutral",
        "points": [
          "Kauf höchstens 20 Euro.",
          "Sagt nichts über die Dauer."
        ]
      },
      {
        "title": "Zeitregel",
        "tone": "positive",
        "points": [
          "Im Lernmarkt bis 17 Uhr.",
          "Danach wird ein offener Rest als abgelaufen gemeldet."
        ]
      }
    ],
    "prompt": "Wann endet die Tagesorder in unserem Lernmarkt?",
    "answers": [
      {
        "label": "Um 17 Uhr Marktzeit.",
        "explanation": "Richtig: Dieses Ende ist ausdrücklich als Übungsregel festgelegt."
      },
      {
        "label": "Immer um Mitternacht in Deutschland.",
        "explanation": "Tagesorder bedeutet keine allgemeine Ortszeitregel."
      },
      {
        "label": "Nie, solange ein Limit gesetzt ist.",
        "explanation": "Eine Preisgrenze ersetzt die Gültigkeit nicht."
      }
    ],
    "correct": 0,
    "rule": "Preisregel und Gültigkeit müssen beide zu deinem Wunsch passen."
  },
  {
    "title": "Ein offener Auftrag ist noch kein Besitz",
    "summary": "Order und Position getrennt lesen.",
    "paragraphs": [
      "Lea hat fünf Aktien zum Kauf beauftragt. Der Auftragsstatus ist offen und die ausgeführte Menge ist null. Sie besitzt durch diesen Auftrag noch keine einzige neue Aktie. Der Auftrag wartet auf passende Ausführungen.",
      "In einer App können Orders und Positionen auf verschiedenen Seiten erscheinen. Eine Order zeigt eine Anweisung und ihren Bearbeitungsstand. Eine Position zeigt einen bestehenden Bestand oder Vertrag. Bei einer Teilausführung können beide gleichzeitig vorhanden sein.",
      "Lea prüft deshalb nicht nur, ob eine Zeile in der App erscheint. Sie liest die ausgeführte Menge und den Positionsbestand. Ein offener Auftrag kann später noch handeln. Er verschwindet nicht automatisch, nur weil Lea die Ansicht schließt."
    ],
    "columns": [
      {
        "title": "Order",
        "tone": "neutral",
        "points": [
          "Fünf Stück gewünscht.",
          "Null Stück ausgeführt."
        ]
      },
      {
        "title": "Position",
        "tone": "positive",
        "points": [
          "Noch keine neue Aktie erworben.",
          "Der Auftrag kann weiterhin aktiv sein."
        ]
      }
    ],
    "prompt": "Wie viele neue Aktien hat Lea bei null Ausführungen?",
    "answers": [
      {
        "label": "Eine, weil die Order in der App steht.",
        "explanation": "Eine Anzeigezeile belegt keinen Handel."
      },
      {
        "label": "Keine.",
        "explanation": "Richtig: Ein Kaufwunsch allein schafft noch keinen Bestand."
      },
      {
        "label": "Fünf, weil sie die Order abgeschickt hat.",
        "explanation": "Die gewünschte Menge ist nicht die ausgeführte Menge."
      }
    ],
    "correct": 1,
    "rule": "Offene Order und bestehende Position sind verschiedene Anzeigen."
  },
  {
    "title": "Die Vorschau ist eine Schätzung",
    "summary": "Vor dem Senden fehlen tatsächliche Ausführungen.",
    "paragraphs": [
      "Vor dem Absenden zeigt Leas App einen geschätzten Kaufwert von 100 Euro. Die App rechnet mit fünf Aktien zu 20 Euro. Die Vorschau hilft ihr, die Größenordnung zu prüfen. Sie ist noch kein Ausführungsbericht.",
      "Zwischen Vorschau und Ankunft können sich Angebote ändern. Eine Market-Order kann deshalb zu anderen Preisen ausgeführt werden. Ein Limit kann dazu führen, dass nur ein Teil oder gar nichts gehandelt wird. Auch die geschätzten Gebühren können vom endgültigen Betrag abweichen.",
      "Lea liest vor dem Senden Produkt, Seite, Menge, Preisregel und Dauer. Nach dem Handel prüft sie die tatsächlich gemeldeten Ausführungen. Eine gute Vorschau ersetzt diese zweite Prüfung nicht."
    ],
    "columns": [
      {
        "title": "Vorschau",
        "tone": "neutral",
        "points": [
          "Fünf Stück × angenommene 20 Euro.",
          "Geschätzter Wert: 100 Euro."
        ]
      },
      {
        "title": "Bericht",
        "tone": "positive",
        "points": [
          "Tatsächliche Menge und Preise.",
          "Erst nach Ausführung bekannt."
        ]
      }
    ],
    "prompt": "Was belegt die Vorschau von 100 Euro?",
    "answers": [
      {
        "label": "Den endgültigen Ausführungspreis.",
        "explanation": "Der tatsächliche Preis steht erst mit einer Ausführung fest."
      },
      {
        "label": "Dass fünf Aktien bereits gekauft sind.",
        "explanation": "Eine Vorschau findet vor dem abgeschlossenen Kauf statt."
      },
      {
        "label": "Eine Schätzung anhand der verwendeten Angaben.",
        "explanation": "Richtig: Die Anzeige ist vor dem Handel noch keine Abrechnung."
      }
    ],
    "correct": 2,
    "rule": "Lies die Vorschau vor und den Ausführungsbericht nach dem Senden."
  },
  {
    "title": "Vom Klick zur bestätigten Annahme",
    "summary": "Absenden ist ein eigener Schritt.",
    "paragraphs": [
      "Lea drückt auf Senden. Zuerst muss die Nachricht ihren Anbieter erreichen. Der prüft zum Beispiel, ob Angaben gültig sind und das Konto den Auftrag zulässt. Danach kann der Auftrag an den vorgesehenen Handelsweg gelangen.",
      "Die App meldet vielleicht erst „gesendet“, dann „angenommen“. Diese Wörter können je nach Anbieter unterschiedliche Stationen meinen. Eine Annahme durch den Broker muss nicht schon die Annahme am Handelsplatz belegen. Lies, von welchem System die Bestätigung stammt.",
      "Keine dieser Meldungen beweist allein eine Ausführung. Dafür braucht Lea einen Bericht mit tatsächlich gehandelter Menge und Preis. Der Lernfall trennt Senden, Annahme und Ausführung. Echte Systeme können zusätzliche Zwischenzustände anzeigen."
    ],
    "columns": [
      {
        "title": "Nachricht",
        "tone": "neutral",
        "points": [
          "Senden wurde ausgelöst.",
          "Die Antwort kann noch ausstehen."
        ]
      },
      {
        "title": "Bestätigung",
        "tone": "positive",
        "points": [
          "Annehmendes System beachten.",
          "Gehandelte Menge gesondert prüfen."
        ]
      }
    ],
    "prompt": "Was beweist „gesendet“ allein?",
    "answers": [
      {
        "label": "Dass das Senden ausgelöst wurde.",
        "explanation": "Richtig: Es beweist weder Annahme am Handelsplatz noch Ausführung."
      },
      {
        "label": "Dass alle fünf Aktien gekauft wurden.",
        "explanation": "Dafür fehlt ein Ausführungsbericht."
      },
      {
        "label": "Dass der Handelsplatz den Auftrag sicher akzeptiert hat.",
        "explanation": "Die Nachricht kann noch geprüft oder übertragen werden."
      }
    ],
    "correct": 0,
    "rule": "Ein Klick und ein abgeschlossenes Geschäft sind verschiedene Ereignisse."
  },
  {
    "title": "Abgelehnt ist nicht offen",
    "summary": "Eine Ablehnung verlangt eine neue Prüfung.",
    "paragraphs": [
      "Leas Auftrag wird abgelehnt. Im Lernfall ist die Stückzahl negativ eingegeben worden. Das System erlaubt diese Eingabe nicht. Es nimmt den Auftrag nicht als offenen Kaufauftrag an. Die Rückmeldung nennt den Fehler.",
      "Auch fehlende Berechtigungen oder nicht erlaubte Angaben können zu einer Ablehnung führen. Der genaue Grund steht in der Antwort des zuständigen Systems. Rate nicht allein anhand einer Farbe oder eines Tons in der App.",
      "Lea prüft zuerst, zu welcher Auftragskennung die Ablehnung gehört. Dann liest sie den Grund und kontrolliert bestehende Orders und Ausführungen. Erst danach korrigiert sie ihre Eingabe. Eine Ablehnung für diesen Auftrag sagt nichts über andere frühere Aufträge."
    ],
    "columns": [
      {
        "title": "Abgelehnter Auftrag",
        "tone": "neutral",
        "points": [
          "Ungültige Menge im Lernfall.",
          "Nicht als offener Auftrag angenommen."
        ]
      },
      {
        "title": "Nächster Schritt",
        "tone": "positive",
        "points": [
          "Kennung und Fehlermeldung prüfen.",
          "Andere Orders gesondert kontrollieren."
        ]
      }
    ],
    "prompt": "Was folgt aus der Ablehnung dieses Auftrags?",
    "answers": [
      {
        "label": "Der Kauf wurde trotzdem vollständig ausgeführt.",
        "explanation": "Die Ablehnung ist keine Ausführungsbestätigung."
      },
      {
        "label": "Dieser Auftrag wurde nicht als offene Order angenommen.",
        "explanation": "Richtig: Der Lernfall nennt eine Ablehnung wegen ungültiger Menge."
      },
      {
        "label": "Alle bisherigen Orders wurden gelöscht.",
        "explanation": "Die Meldung gehört zu diesem Auftrag, nicht zu allen anderen."
      }
    ],
    "correct": 1,
    "rule": "Eine Ablehnung liest du für den eindeutig zugeordneten Auftrag."
  },
  {
    "title": "Teilausführung: ein Teil ist schon gehandelt",
    "summary": "Der Rest kann weiter warten.",
    "paragraphs": [
      "Lea möchte fünf Aktien kaufen. Der Lernmarkt führt zuerst zwei Aktien zu 20 Euro aus. Danach bleibt der Auftrag für drei Stück offen. Teilausführung heißt, dass weniger als die gewünschte Gesamtmenge gehandelt wurde.",
      "Die Rechnung lautet: fünf beauftragt minus zwei ausgeführt ergibt drei offen. Die zwei gekauften Aktien gehören bereits zur Position. Der offene Rest ist noch ein Kaufwunsch. Wir nehmen hier an, dass die Order Teilausführungen erlaubt und nicht automatisch endet.",
      "Lea liest deshalb beide Mengen. Wenn sie später den Rest löscht, werden die bereits gekauften zwei Aktien nicht rückgängig gemacht. Zum Verkauf dieser Aktien wäre ein eigener Auftrag nötig."
    ],
    "columns": [
      {
        "title": "Bereits ausgeführt",
        "tone": "neutral",
        "points": [
          "Zwei Aktien zu je 20 Euro.",
          "Diese zwei gehören zum Bestand."
        ]
      },
      {
        "title": "Noch offen",
        "tone": "positive",
        "points": [
          "Fünf minus zwei = drei Stück.",
          "Der Rest kann noch ausgeführt werden."
        ]
      }
    ],
    "prompt": "Wie viele Stück sind nach der ersten Ausführung noch offen?",
    "answers": [
      {
        "label": "Fünf Stück.",
        "explanation": "Zwei der ursprünglich fünf sind bereits gehandelt."
      },
      {
        "label": "Null Stück.",
        "explanation": "Der Lernfall lässt den noch nicht ausgeführten Rest offen."
      },
      {
        "label": "Drei Stück.",
        "explanation": "Richtig: Fünf beauftragt minus zwei ausgeführt ergibt drei offen."
      }
    ],
    "correct": 2,
    "rule": "Bei Teilausführungen prüfst du Bestand und offenen Rest getrennt."
  },
  {
    "title": "Mehrere Preise ergeben einen Durchschnitt",
    "summary": "Mengen müssen beim Rechnen mitwirken.",
    "paragraphs": [
      "In einem getrennten Rechenfall kauft Lea fünf Aktien mit einer Market-Order. Zwei werden zu 20,00 Euro ausgeführt. Drei werden zu 20,10 Euro ausgeführt. Wir rechnen ohne Gebühren. Alle Angebote sind im Lernfall verfügbar, andere Aufträge greifen nicht ein.",
      "Der erste Teil kostet 2 × 20,00 = 40,00 Euro. Der zweite kostet 3 × 20,10 = 60,30 Euro. Zusammen sind das 100,30 Euro für fünf Aktien. Der durchschnittliche Stückpreis ist 100,30 geteilt durch 5 = 20,06 Euro.",
      "Ein einfacher Mittelwert der zwei Preise wäre 20,05 Euro. Das wäre hier falsch, weil zu 20,10 mehr Stück gehandelt wurden. Man spricht von einem nach Mengen gewichteten Durchschnitt. Gewichtet heißt: Der größere Teil zählt stärker."
    ],
    "columns": [
      {
        "title": "Einzelne Ausführungen",
        "tone": "neutral",
        "points": [
          "2 × 20,00 Euro = 40,00 Euro.",
          "3 × 20,10 Euro = 60,30 Euro."
        ]
      },
      {
        "title": "Gesamt",
        "tone": "positive",
        "points": [
          "Kaufwert: 100,30 Euro.",
          "Durchschnitt: 20,06 Euro je Aktie."
        ]
      }
    ],
    "prompt": "Wie hoch ist der durchschnittliche Stückpreis ohne Gebühren?",
    "answers": [
      {
        "label": "20,06 Euro.",
        "explanation": "Richtig: 100,30 Euro geteilt durch fünf Stück ergibt 20,06 Euro."
      },
      {
        "label": "20,05 Euro.",
        "explanation": "Dieser einfache Mittelwert ignoriert die verschiedenen Stückzahlen."
      },
      {
        "label": "100,30 Euro.",
        "explanation": "Das ist der Gesamtwert, nicht der Preis je Stück."
      }
    ],
    "correct": 0,
    "rule": "Teile den gesamten Ausführungswert durch die ausgeführte Menge."
  },
  {
    "title": "Gebühren zum Kaufwert hinzurechnen",
    "summary": "Preis und Gesamtbelastung sind verschieden.",
    "paragraphs": [
      "Leas fünf Aktien kosten im Rechenfall zusammen 100,30 Euro. Die gesamte Kaufgebühr beträgt genau 1,00 Euro. Es gibt in diesem Lernfall keine weiteren Kosten. Die Belastung auf ihrem Konto ist 101,30 Euro.",
      "Der durchschnittliche Ausführungspreis bleibt 20,06 Euro je Aktie. Verteilte Lea die Kaufgebühr rechnerisch auf fünf Stück, kämen 0,20 Euro pro Stück hinzu. Ihre Kosten einschließlich dieser Kaufgebühr betragen damit 20,26 Euro je Aktie.",
      "Das ist noch keine Gewinnschwelle für einen späteren Verkauf. Dafür wären auch mögliche Verkaufskosten zu beachten. Rechne Gebühren genau einmal. Wenn ein Bericht sie bereits in einem Gesamtbetrag enthält, darfst du sie nicht noch einmal addieren."
    ],
    "columns": [
      {
        "title": "Ausführung",
        "tone": "neutral",
        "points": [
          "Kaufwert: 100,30 Euro.",
          "Preis im Schnitt: 20,06 Euro."
        ]
      },
      {
        "title": "Mit Kaufgebühr",
        "tone": "positive",
        "points": [
          "100,30 + 1,00 = 101,30 Euro.",
          "101,30 / 5 = 20,26 Euro je Stück."
        ]
      }
    ],
    "prompt": "Wie hoch ist die Kontobelastung inklusive der einen Kaufgebühr?",
    "answers": [
      {
        "label": "102,30 Euro.",
        "explanation": "Das würde dieselbe Gebühr doppelt zählen."
      },
      {
        "label": "101,30 Euro.",
        "explanation": "Richtig: Zum Kaufwert kommt genau einmal 1,00 Euro hinzu."
      },
      {
        "label": "100,30 Euro.",
        "explanation": "Dieser Betrag enthält die genannte Kaufgebühr noch nicht."
      }
    ],
    "correct": 1,
    "rule": "Ausführungspreis und Kosten einschließlich Gebühren getrennt benennen."
  },
  {
    "title": "Stornieren ist zunächst eine Bitte",
    "summary": "Bis zur Bestätigung kann noch etwas geschehen.",
    "paragraphs": [
      "Leas Order hat zwei von fünf Aktien gekauft. Drei sind noch offen. Sie sendet eine Stornierung. Stornieren bedeutet hier, die weitere Ausführung des offenen Auftrags zurückzunehmen. Das Senden allein beendet ihn noch nicht sicher.",
      "Bevor die Stornierung verarbeitet wird, kann noch eine Aktie ausgeführt werden. Der Lernfall meldet danach drei gekaufte Aktien und eine bestätigte Löschung der übrigen zwei. Die zeitliche Reihenfolge entscheidet, welche Menge noch handelbar war.",
      "Lea prüft die Ausführungsberichte und die Stornierungsbestätigung. Der bereits gehandelte Teil bleibt bestehen. Die endgültige Bestätigung muss sich auf die richtige Order beziehen. „Stornierung angefragt“ ist etwas anderes als „Rest storniert“."
    ],
    "columns": [
      {
        "title": "Beim Senden",
        "tone": "neutral",
        "points": [
          "Zwei Stück bereits gekauft.",
          "Drei Stück noch offen."
        ]
      },
      {
        "title": "Nach Verarbeitung",
        "tone": "positive",
        "points": [
          "Eine weitere Aktie gekauft.",
          "Zwei Reststücke bestätigt storniert."
        ]
      }
    ],
    "prompt": "Wie viele Aktien besitzt Lea am Ende dieses Falls?",
    "answers": [
      {
        "label": "Keine, weil Stornieren alles rückgängig macht.",
        "explanation": "Eine Stornierung hebt bereits abgeschlossene Ausführungen nicht auf."
      },
      {
        "label": "Zwei, weil nach dem Klick nichts mehr handeln kann.",
        "explanation": "Vor Verarbeitung der Anfrage wurde noch eine Aktie gekauft."
      },
      {
        "label": "Drei Aktien.",
        "explanation": "Richtig: Zwei frühere plus eine spätere Ausführung ergeben drei."
      }
    ],
    "correct": 2,
    "rule": "Eine Stornierungsanfrage ist noch keine bestätigte Löschung."
  },
  {
    "title": "Ändern braucht eine neue Bestätigung",
    "summary": "Die bisherige Regel kann noch gelten.",
    "paragraphs": [
      "Lea möchte das Kauflimit einer offenen Order von 20,00 auf 20,10 Euro erhöhen. Sie schickt eine Änderungsanfrage. Bis die Antwort kommt, weiß sie nicht sicher, ob die neue Grenze schon gilt.",
      "Das zuständige System kann die Änderung annehmen oder ablehnen. Es kann auch den alten Auftrag ersetzen. Ob dabei die bisherige Warteschlangenposition erhalten bleibt, hängt von den konkreten Regeln ab. Das ist keine allgemeine Eigenschaft jeder Änderung.",
      "Lea liest die bestätigten Angaben statt nur das bearbeitete Eingabefeld. In unserem Fall bestätigt das System anschließend 20,10 Euro für den offenen Rest. Diese Meldung ist noch keine Ausführung. Sie bestätigt lediglich die neue Anweisung."
    ],
    "columns": [
      {
        "title": "Anfrage",
        "tone": "neutral",
        "points": [
          "Neues Wunschlimit: 20,10 Euro.",
          "Verarbeitung noch offen."
        ]
      },
      {
        "title": "Bestätigte Änderung",
        "tone": "positive",
        "points": [
          "Aktive Grenze im Lernfall: 20,10 Euro.",
          "Eine Ausführung ist gesondert nötig."
        ]
      }
    ],
    "prompt": "Was belegt die bestätigte Änderung im Lernfall?",
    "answers": [
      {
        "label": "Dass die neue Preisgrenze für den offenen Rest gilt.",
        "explanation": "Richtig: Sie bestätigt die geänderte Anweisung, keinen Kauf."
      },
      {
        "label": "Dass die Aktien schon gekauft sind.",
        "explanation": "Eine Änderung ersetzt keinen Ausführungsbericht."
      },
      {
        "label": "Dass die alte Warteschlangenposition überall erhalten bleibt.",
        "explanation": "Diese Eigenschaft hängt von den Regeln des Systems ab."
      }
    ],
    "correct": 0,
    "rule": "Nach einer Änderung liest du die bestätigten aktiven Angaben."
  },
  {
    "title": "Keine Antwort: nicht blind doppelt senden",
    "summary": "Eine fehlende Anzeige klärt den Status nicht.",
    "paragraphs": [
      "Lea sendet einen Kaufauftrag. Dann bricht ihre Verbindung ab. Der Bildschirm zeigt keine Antwort. Der Auftrag könnte den Anbieter erreicht haben oder vorher gescheitert sein. Aus dem stillen Bildschirm kann Lea das nicht sicher unterscheiden.",
      "Sendet sie denselben Kauf erneut, kann ein zweiter Auftrag entstehen. Wenn beide fünf Aktien kaufen, wären insgesamt zehn gekauft. Manche Systeme schützen vor bestimmten Wiederholungen. Darauf darf Lea ohne Kenntnis der Funktion nicht vertrauen.",
      "Lea verbindet sich wieder und prüft Orderliste, Ausführungen und Bestand. Eine Auftragskennung hilft, die Meldungen zuzuordnen. Bleibt der Status unklar, klärt sie ihn über den Anbieter. Ein neuer Klick ist keine Statusabfrage."
    ],
    "columns": [
      {
        "title": "Unklar",
        "tone": "neutral",
        "points": [
          "Keine Antwort auf dem Bildschirm.",
          "Der erste Auftrag könnte angekommen sein."
        ]
      },
      {
        "title": "Prüfen",
        "tone": "positive",
        "points": [
          "Kennung, Orders, Ausführungen, Bestand.",
          "Vor einem zweiten Auftrag Klarheit schaffen."
        ]
      }
    ],
    "prompt": "Warum ist sofortiges erneutes Senden problematisch?",
    "answers": [
      {
        "label": "Weil damit sicher nur der Status geprüft wird.",
        "explanation": "Senden kann eine neue Order erzeugen, statt bloß den Status abzurufen."
      },
      {
        "label": "Es kann einen zweiten Kaufauftrag erzeugen.",
        "explanation": "Richtig: Fehlende Rückmeldung beweist nicht, dass der erste Auftrag gescheitert ist."
      },
      {
        "label": "Weil eine fehlende Antwort immer Ablehnung bedeutet.",
        "explanation": "Ein Verbindungsproblem kann auch nach erfolgreicher Übertragung auftreten."
      }
    ],
    "correct": 1,
    "rule": "Eine fehlende Antwort bedeutet einen unklaren Status."
  },
  {
    "title": "Der Handelsweg gehört zur Ausführung",
    "summary": "Eine Anzeige nennt nicht immer den späteren Ort.",
    "paragraphs": [
      "Lea sieht Angebote von Handelsplatz A. Ihr Anbieter kann den Auftrag nach seinen Regeln an A oder an einen anderen erlaubten Handelsweg schicken. Routing nennt man die Weiterleitung eines Auftrags. Die tatsächlich verwendete Quelle muss Lea im Bericht prüfen.",
      "Ein Preis von A ist kein Versprechen für eine Ausführung auf B. Menge, Zeitpunkt und Kosten können abweichen. Selbst auf A kann sich das Angebot zwischen Anzeige und Ankunft verändern. Deshalb nennt ein sauberer Vergleich immer Quelle und Zeit.",
      "In diesem Kapitel wählen wir keine realen Anbieter aus. Unsere Lernfälle legen ihren Handelsweg ausdrücklich fest. Das hilft, die Rechnung zu verstehen. Bei echten Orders klärt Lea, welche Auswahl sie selbst trifft und welche Weiterleitung der Anbieter übernimmt."
    ],
    "columns": [
      {
        "title": "Bildschirmanzeige",
        "tone": "neutral",
        "points": [
          "Angebot von Platz A.",
          "Gehört zu einem bestimmten Zeitpunkt."
        ]
      },
      {
        "title": "Ausführungsbericht",
        "tone": "positive",
        "points": [
          "Tatsächlich genutzter Handelsweg.",
          "Gehandelte Menge, Preis und Zeitpunkt."
        ]
      }
    ],
    "prompt": "Warum reicht die Anzeige von A nicht für eine Zusage auf B?",
    "answers": [
      {
        "label": "Weil alle Handelsplätze immer denselben Preis haben.",
        "explanation": "Eine solche Gleichheit ist nicht garantiert."
      },
      {
        "label": "Weil ein angezeigter Preis bereits eine Ausführung ist.",
        "explanation": "Die Anzeige beschreibt ein Angebot oder eine Preisinformation."
      },
      {
        "label": "Weil Angebote, Mengen und Zeitpunkte verschieden sein können.",
        "explanation": "Richtig: Die Quelle der Anzeige ist Teil der Information."
      }
    ],
    "correct": 2,
    "rule": "Ordne Anzeige und Ausführung ihrer jeweiligen Quelle zu."
  },
  {
    "title": "Einen vollständigen Auftrag lesen",
    "summary": "Die Angaben müssen zusammenpassen.",
    "paragraphs": [
      "Leas Übungsauftrag lautet: Luma-Aktie in Euro, kaufen, fünf Stück, Limit 20,10 Euro je Stück, Tagesorder im Lernmarkt bis 17 Uhr. Teilausführungen sind erlaubt. Der offene Rest wartet bis zur Ausführung, bestätigten Stornierung oder zum Ablauf.",
      "Diese Angaben beantworten verschiedene Fragen. Produkt: Was? Seite: Kaufen oder Verkaufen? Menge: Wie viel? Limit: Zu welchen Preisen? Gültigkeit: Wie lange? Restregel: Was darf nach einem Teilhandel noch passieren? Keine einzelne Angabe ersetzt die anderen.",
      "Der Auftrag erlaubt fünf Aktien zu insgesamt höchstens 100,50 Euro Ausführungswert. Gebühren sind davon getrennt. Er verspricht weder fünf gekaufte Aktien noch einen zukünftigen Gewinn. Prüfe die vollständige Anweisung vor dem Senden und ihren bestätigten Stand danach."
    ],
    "columns": [
      {
        "title": "Anweisung",
        "tone": "neutral",
        "points": [
          "Luma kaufen: fünf Stück.",
          "Höchstens 20,10 Euro je Stück; bis 17 Uhr."
        ]
      },
      {
        "title": "Grenzen",
        "tone": "positive",
        "points": [
          "Ausführungswert höchstens 100,50 Euro bei fünf Stück.",
          "Gebühren extra; Ausführung nicht garantiert."
        ]
      }
    ],
    "prompt": "Was ist bei vollständiger Ausführung der höchste Kaufwert ohne Gebühren?",
    "answers": [
      {
        "label": "100,50 Euro.",
        "explanation": "Richtig: Fünf Stück mal 20,10 Euro ergibt 100,50 Euro."
      },
      {
        "label": "20,10 Euro.",
        "explanation": "Das ist die Preisgrenze für ein Stück."
      },
      {
        "label": "Garantiert genau 100,50 Euro.",
        "explanation": "Ein besserer Ausführungspreis ist erlaubt; der Betrag ist eine Obergrenze."
      }
    ],
    "correct": 0,
    "rule": "Lies Produkt, Seite, Menge, Preisregel, Dauer und Restregel zusammen."
  },
  {
    "title": "Abschlussfall: Wunsch, Handel und Rest verbinden",
    "summary": "Eine Order über mehrere Ereignisse verfolgen.",
    "paragraphs": [
      "Lea startet ohne Luma-Aktien. Sie sendet den gerade beschriebenen Kaufauftrag über fünf Stück mit Limit 20,10 Euro. Der Lernmarkt bestätigt die Annahme. Dann werden zwei Aktien zu 20,00 Euro und eine zu 20,10 Euro gekauft. Andere Ausführungen finden nicht statt.",
      "Die Ausführungen kosten 40,00 + 20,10 = 60,10 Euro. Drei Stück sind gekauft, zwei noch offen. Lea fragt die Stornierung an. Danach bestätigt das System die Löschung der zwei Reststücke. Die gesamte Kaufgebühr beträgt 0,90 Euro. Die Kontobelastung beträgt 61,00 Euro.",
      "Leas Abschlussbericht nennt drei gekaufte Aktien und keinen offenen Rest. Die Stornierung hat diese drei Aktien nicht entfernt. Ihr durchschnittlicher Ausführungspreis ist 60,10 / 3, also ungefähr 20,0333 Euro. Einschließlich Kaufgebühr sind es 61,00 / 3, ungefähr 20,3333 Euro je Aktie."
    ],
    "columns": [
      {
        "title": "Tatsächlicher Kauf",
        "tone": "neutral",
        "points": [
          "2 × 20,00 + 1 × 20,10 = 60,10 Euro.",
          "Drei Aktien erworben."
        ]
      },
      {
        "title": "Abschluss",
        "tone": "positive",
        "points": [
          "Zwei Reststücke bestätigt gelöscht.",
          "60,10 + 0,90 = 61,00 Euro Kontobelastung."
        ]
      }
    ],
    "prompt": "Welcher Abschlussbericht passt?",
    "answers": [
      {
        "label": "Fünf Aktien gekauft und 100,50 Euro belastet.",
        "explanation": "Die ursprüngliche Wunschmenge wurde nicht vollständig ausgeführt."
      },
      {
        "label": "Drei Aktien gekauft, null Stück offen, 61,00 Euro belastet.",
        "explanation": "Richtig: Die drei Ausführungen bleiben; nur die zwei Reststücke wurden gelöscht."
      },
      {
        "label": "Null Aktien, weil Lea storniert hat.",
        "explanation": "Die Stornierung betraf nur den noch nicht ausgeführten Rest."
      }
    ],
    "correct": 1,
    "rule": "Am Ende zählen die bestätigten Ausführungen und der bestätigte Reststatus."
  }
];
export const ordersChapterOneLessons: Lesson[] = drafts.map((draft, index) => {
  const number = String(index + 1).padStart(2, '0');
  const key = `orders-and-execution.chapter-01.lesson-${number}`;
  return {
    id: key,
    title: draft.title,
    summary: draft.summary,
    sourceUnit: 'Kapitel 1 · Vom Handelswunsch zum Auftrag',
    sourceAnchors: [draft.title],
    durationMinutes: 6,
    xp: 35,
    status: 'published',
    steps: [
      {
        id: `${key}.explain`, type: 'explanation',
        eyebrow: 'Orders verstehen · Kapitel 1', title: draft.title,
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
