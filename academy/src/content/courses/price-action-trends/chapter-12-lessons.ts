import type { ChapterTwelveScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterTwelveScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string;
  answers: { label: string; explanation: string }[]; correct: number;
}

const drafts: Draft[] = [
  {
    "title": "Ein Muster ist ein Zwischenstand",
    "summary": "Ein fertiges Setup friert die nächste Marktbewegung nicht ein.",
    "section": "Grundidee",
    "scenario": "c12-current-bars",
    "paragraphs": [
      "Du erkennst einen Pullback und erwartest eine Fortsetzung. Zwei Bars später läuft der Kurs aber anders als gedacht. Das ursprüngliche Bild war nicht zwangsläufig falsch; es war eine Einschätzung der bis dahin sichtbaren Informationen. Jeder neue Bar ergänzt sie und kann eine größere Bewegung in beide Richtungen starten.",
      "Price Action lesen heißt deshalb, das Bild laufend zu aktualisieren. Beobachte Auslösung, Anschluss und Gegenreaktion: Werden neue Preise akzeptiert, kehrt der Kurs zurück, oder wächst erst mal nur die Pause? Der Name des alten Musters kann diese Fragen nicht beantworten.",
      "Für eine schon eröffnete Position gelten weiterhin die festgelegten Risikogrenzen. Neue Informationen können eine neue Entscheidung begründen, aber keinen weiter weggeschobenen Stop und keine spontan erhöhte Menge. Für eine neue Order prüfst du das jetzige Setup und nicht das längst abgeschlossene Muster links davon."
    ],
    "callout": "Die nächste Entscheidung gehört zum aktuellen Bild.",
    "takeaways": [
      "Neue Bars verändern die Informationslage.",
      "Auslösung und Anschluss getrennt lesen.",
      "Neue Einordnung lässt Risikogrenzen bestehen."
    ],
    "prompt": "Das alte Kaufsetup ist abgeschlossen, neue Bars zeigen starken Verkaufsdruck. Was zählt jetzt?",
    "answers": [
      {
        "label": "Die aktuelle Struktur und die Reaktion auf den Verkaufsdruck.",
        "explanation": "Richtig. Die nächste Entscheidung braucht die jetzt sichtbaren Belege."
      },
      {
        "label": "Nur der Name des ursprünglichen Kaufmusters.",
        "explanation": "Ein früherer Name beschreibt nicht automatisch die aktuelle Kräfteverteilung."
      },
      {
        "label": "Der Wunsch, dass die erste Analyse recht behält.",
        "explanation": "Recht behalten ist kein beobachtbares Marktsignal."
      }
    ],
    "correct": 0,
    "number": 1
  },
  {
    "title": "Größer werden oder die Richtung wechseln",
    "summary": "Eine Musterentwicklung kann die alte Handelsidee erweitern oder ersetzen.",
    "section": "Grundidee",
    "scenario": "c12-expand-or-reverse",
    "paragraphs": [
      "Eine kleine Pause kann weitere Rückläufe aufnehmen und zu einer größeren Flagge wachsen. Die Fortsetzungsrichtung bleibt dabei erst mal dieselbe. Ein erster Long-Versuch und ein späterer Long aus einer größeren Struktur sind verschiedene Gelegenheiten mit unterschiedlich viel Vorgeschichte.",
      "In einem anderen Verlauf wird die ursprüngliche Idee zurückgenommen: Ein Kaufausbruch findet keine Anschlusskäufer, der Markt fällt in die alte Zone und die Verkäufer setzen sich durch. Jetzt kann ein Setup für die Gegenrichtung entstehen. Das ist etwas anderes als eine bloß länger dauernde bullische Pause.",
      "Frag daher zuerst, was sich in den Bars geändert hat, und erst danach, welches Etikett passt. Mehr Bars allein machen ein Muster weder besser noch schlechter. Grenzen, wiederholte Tests, Druck und die Reaktion nach einer Auslösung bestimmen die neue Einordnung."
    ],
    "callout": "Mehr Bars können dieselbe Idee erweitern oder eine andere Seite stärken.",
    "takeaways": [
      "Zeitliche Erweiterung und Richtungswechsel trennen.",
      "Mustergrenzen erneut bestimmen.",
      "Neue Auslösung unabhängig prüfen."
    ],
    "prompt": "Was unterscheidet Erweiterung von Richtungswechsel?",
    "answers": [
      {
        "label": "Bei Erweiterung darf der Stop beliebig wachsen.",
        "explanation": "Eine größere Struktur braucht eine neue Risikoentscheidung, keine automatische Ausweitung."
      },
      {
        "label": "Die größere Struktur kann die alte Richtung behalten; ein Fehlschlag kann die Gegenseite stärken.",
        "explanation": "Richtig. Entscheidend ist die geänderte Marktreaktion, nicht die Anzahl der Bars."
      },
      {
        "label": "Jede zusätzliche Kerze bedeutet eine Umkehr.",
        "explanation": "Eine Pause kann größer werden und später trotzdem in der bisherigen Richtung ausbrechen."
      }
    ],
    "correct": 1,
    "number": 2
  },
  {
    "title": "Ein schneller Fehlschlag kann Trader festsetzen",
    "summary": "Eine zurückgenommene Auslösung kann Ausstiegsorders in der Gegenrichtung auslösen.",
    "section": "Fehlschläge",
    "scenario": "c12-trapped-orders",
    "paragraphs": [
      "Ein Setup wird ausgelöst, doch der erwartete kurze Gewinn kommt nicht. Der Kurs dreht schnell zurück und überschreitet die andere Seite der Struktur. Die frühen Teilnehmer sitzen jetzt auf der falschen Marktseite und müssen über einen Verlustausstieg entscheiden.",
      "Bei einem gescheiterten Long sind solche Ausstiege Verkaufsorders. Sie können mit neuen Shorts zusammentreffen und den Abwärtsdruck verstärken. Beim gescheiterten Short wirken Rückkäufe in die andere Richtung. Diese möglichen Orders erklären, warum die Rücknahme eines Signals selbst zu einem neuen Setup werden kann.",
      "Eine vollständige Liste der betroffenen Positionen siehst du im Chart allerdings nicht. Das Festsetzen ist eine Deutung der Preisfolge. Du brauchst weiterhin ein tatsächlich ausgelöstes Gegensignal und einen passenden Stop; nicht jeder misslungene Versuch führt zu einer handelbaren Umkehr."
    ],
    "callout": "Auslösung → schnelle Rücknahme → mögliche Verlustausstiege.",
    "takeaways": [
      "Festgesetzte Longs verkaufen zum Ausstieg.",
      "Festgesetzte Shorts kaufen zurück.",
      "Die Orderdeutung braucht sichtbare Bestätigung."
    ],
    "prompt": "Welche Orders können einen schnellen Fehlschlag eines Long-Setups verstärken?",
    "answers": [
      {
        "label": "Nur Käufe der ursprünglichen Longs.",
        "explanation": "Um ihre Longs zu schließen, verkaufen diese Teilnehmer."
      },
      {
        "label": "Garantiert alle Orders des Tages.",
        "explanation": "Weder Zahl noch Größe aller Marktpositionen sind aus dem Muster bekannt."
      },
      {
        "label": "Verlustverkäufe früher Longs zusammen mit neuen Shorts.",
        "explanation": "Richtig. Beide können nach der Rücknahme in dieselbe Richtung wirken."
      }
    ],
    "correct": 2,
    "number": 3
  },
  {
    "title": "Nach langer Seitwärtsphase neu anfangen",
    "summary": "Ein späteres Setup ist nicht automatisch noch eine Falle des ersten.",
    "section": "Fehlschläge",
    "scenario": "c12-reset-context",
    "paragraphs": [
      "Ein erster Ausbruch scheitert, aber der Markt läuft danach viele Bars seitwärts. Es entsteht eine neue Balance mit eigenen Hochs und Tiefs. In dieser Zeit konnten die Teilnehmer aussteigen, sich neu positionieren oder ganz auf weitere Signale verzichten.",
      "Einen späteren Ausbruch aus dieser Balance beurteilst du deshalb sinnvoll als neue Gelegenheit. Dass noch dieselben festgesetzten Trader von früher die Bewegung antreiben, wird mit der Zeit immer weniger belastbar. Ein schneller Rückstoß und ein späteres eigenständiges Setup brauchen unterschiedliche Erklärungen.",
      "Die alte Zone kann weiterhin als Preisreferenz relevant sein. Das heißt aber nicht, dass die alte Ordergeschichte unverändert weiterlebt. Zeichne die jetzigen Grenzen ein, prüf den neuen Druck und leite das Risiko aus der aktuellen Struktur ab."
    ],
    "callout": "Alte Preisreferenz und alte Teilnehmergeschichte sind nicht dasselbe.",
    "takeaways": [
      "Schnelle Rücknahme von langer Balance trennen.",
      "Nach vielen Bars die neue Struktur lesen.",
      "Keine alten Fallen ungeprüft fortschreiben."
    ],
    "prompt": "Nach vielen Seitwärtsbars bildet sich ein neues Signal. Wie beurteilst du es?",
    "answers": [
      {
        "label": "Als aktuelle Struktur mit eigener Auslösung und eigenem Risiko.",
        "explanation": "Richtig. Die ursprüngliche Falle ist kein ausreichender Grund für die neue Order."
      },
      {
        "label": "Als sicheren Beweis, dass alle frühen Trader noch feststecken.",
        "explanation": "Viele konnten inzwischen aussteigen oder ihre Position ändern."
      },
      {
        "label": "Nur anhand des ersten Ausbruchs vor der Seitwärtsphase.",
        "explanation": "Die inzwischen entstandenen Grenzen und Bars gehören zur Entscheidung."
      }
    ],
    "correct": 0,
    "number": 4
  },
  {
    "title": "Kurzer Gewinn und spätere Entwicklung sind verschiedene Fragen",
    "summary": "Ein kleines Ziel kann erreicht sein, bevor sich das Muster vergrößert oder dreht.",
    "section": "Ergebnis und Ablauf",
    "scenario": "c12-scalp-vs-swing",
    "paragraphs": [
      "Ein erstes Setup kann genug Anschluss für einen kleinen Gewinn liefern und danach trotzdem scheitern, wenn du auf eine größere Bewegung wartest. Der spätere Richtungswechsel macht nicht rückwirkend jede frühere Ausführung falsch. Ein kurzer Zieltrade und eine länger gehaltene Position brauchen unterschiedliche Erfolgskriterien.",
      "Umgekehrt kann ein scheinbar sauberes Muster sofort zurückgenommen werden, noch bevor das geplante kleine Ziel erreicht ist. Auch oft brauchbare Setups können scheitern. Eine pauschale Fehlerquote ist kein gemessener Vorteil deiner eigenen Strategie und ersetzt keine Aufzeichnung von Ziel, Stop, Gebühren und Ausführung.",
      "Für die neue Entscheidung zählt deshalb, ob das alte Setup noch arbeitet oder schon abgeschlossen ist. Notier den Ablauf in seiner Reihenfolge. Nutze ein anfangs erreichtes Ziel nicht als Beweis für jeden späteren Einstieg und deute einen späten Rücklauf nicht rückwirkend zur Gewissheit um."
    ],
    "callout": "Bewerte einen Trade am vorher festgelegten Ziel und die nächste Gelegenheit am aktuellen Chart.",
    "takeaways": [
      "Kleines Ziel und größere Halteidee trennen.",
      "Fehlschläge trotz guter Form einplanen.",
      "Keine feste Erfolgsquote aus einem Muster ableiten."
    ],
    "prompt": "Ein kleines Ziel wurde erreicht; später kehrt der Markt um. Was folgt daraus?",
    "answers": [
      {
        "label": "Alle frühen Einstiege waren zwangsläufig falsch.",
        "explanation": "Das vorher geplante kleine Ziel kann erfolgreich erreicht worden sein."
      },
      {
        "label": "Der kurze Zieltrade und die längere Halteidee müssen getrennt bewertet werden.",
        "explanation": "Richtig. Das spätere Bild entscheidet nicht allein über das frühere Ziel."
      },
      {
        "label": "Die Umkehr kann nun nicht mehr gehandelt werden.",
        "explanation": "Sie kann ein neues Setup bilden, wenn die aktuellen Bedingungen passen."
      }
    ],
    "correct": 1,
    "number": 5
  },
  {
    "title": "Ein expandierendes Dreieck hört nicht beim fünften Bein auf",
    "summary": "Neue Extreme können ein bereits erkanntes Muster weiter vergrößern.",
    "section": "Musterfamilien",
    "scenario": "c12-expanding-triangle",
    "paragraphs": [
      "Bei einer sich ausweitenden Struktur wechseln Aufwärts- und Abwärtsbeine, während die Hochs höher und die Tiefs tiefer werden. Beide Seiten drücken zeitweise durch ihre bisherige Grenze, ohne dauerhaft die Kontrolle zu halten. Das unterscheidet die Folge von einer immer enger werdenden Pause.",
      "Nach fünf Beinen kann eine Umkehr plausibel aussehen. Der Markt muss dort aber nicht aufhören: Weitere Schwünge können das Bild etwa auf sieben Beine ausdehnen. Ein früher und ein späterer Versuch gehören dann zur selben wachsenden Struktur, haben aber andere Preise und Stop-Abstände.",
      "Die Beinzahl ist eine Beschreibung, kein Ende-Signal. Prüf nach jedem zusätzlichen Schub, ob der Ausbruch Anschluss bekommt oder wieder zurückgenommen wird. Ein breiteres Muster kann auch die kleinste Position zu riskant machen; seine Erweiterung ist keine Erlaubnis, den Verlustschutz mitzuschieben."
    ],
    "callout": "Die fünfte Bewegung ist kein vertraglich vereinbartes Musterende.",
    "takeaways": [
      "Höhere Hochs und tiefere Tiefs erkennen.",
      "Weitere Beine als neue Information lesen.",
      "Breitere Struktur bedeutet neues Risikomaß."
    ],
    "prompt": "Nach fünf Beinen entstehen zwei weitere Schwünge. Was ist die passende Einordnung?",
    "answers": [
      {
        "label": "Das Muster muss unsichtbar geworden sein.",
        "explanation": "Es kann sich weiterhin als größere ausweitende Struktur lesen lassen."
      },
      {
        "label": "Die siebte Bewegung ist garantiert die letzte.",
        "explanation": "Auch sieben Beine garantieren weder Ende noch Richtung."
      },
      {
        "label": "Die Struktur hat sich erweitert; das aktuelle Signal muss neu geprüft werden.",
        "explanation": "Richtig. Beinzahl und endgültige Umkehr sind verschiedene Dinge."
      }
    ],
    "correct": 2,
    "number": 6
  },
  {
    "title": "Mikro-Trendlinienbruch, Fehlschlag und Pullback",
    "summary": "Ein sehr kleiner Gegenbruch kann scheitern und eine Trendfortsetzung vorbereiten.",
    "section": "Musterfamilien",
    "scenario": "c12-micro-line",
    "paragraphs": [
      "Eine Mikro-Trendlinie verbindet wenige, eng aufeinanderfolgende Bars. Ihr Bruch zeigt eine kleine Störung im unmittelbaren Verlauf. Weil die zugrunde liegende Trendkraft noch bestehen kann, ist dieser erste Gegenversuch oft zerbrechlich.",
      "Wird der Gegenbruch zurückgenommen und die Trendbewegung wieder aufgenommen, kann der nächste Rücklauf einen Einstieg in die ursprüngliche Richtung bilden. Der kleine Linienbruch war dann kein dauerhafter Trendwechsel, sondern ein Zwischenschritt im Ablauf: Gegenversuch, Fehlschlag, erneute Fortsetzung und Pullback.",
      "Achte auf die tatsächlichen Bezugspunkte. Ein Pullback testet die neu zurückgewonnene Zone; er ist nicht bloß irgendein späterer roter Bar. Bekommt der Gegenbruch dagegen kräftigen Anschluss, passt die Fortsetzungserklärung nicht mehr und du musst sie verwerfen."
    ],
    "callout": "Die Reaktion nach dem Linienbruch entscheidet über seine Rolle.",
    "takeaways": [
      "Kleine Störung von großer Umkehr trennen.",
      "Rücknahme und Fortsetzung beobachten.",
      "Erst den konkreten Test als Pullback prüfen."
    ],
    "prompt": "Ein Mikro-Linienbruch gegen den Trend wird zurückgenommen. Was kann der nächste Test darstellen?",
    "answers": [
      {
        "label": "Ein neues Fortsetzungssetup, wenn die Trendseite den Test hält.",
        "explanation": "Richtig. Der Gegenbruch kann zum Zwischenschritt einer Fortsetzung werden."
      },
      {
        "label": "Einen sicheren Trendwechsel allein wegen der alten Linie.",
        "explanation": "Die Rücknahme widerspricht gerade dieser Gewissheit."
      },
      {
        "label": "Einen Pullback ohne Bezug zu einer Preiszone.",
        "explanation": "Ein sinnvoller Test hat einen konkreten Bezug im aktuellen Verlauf."
      }
    ],
    "correct": 0,
    "number": 7
  },
  {
    "title": "Wenn die vermeintlich letzte Bärenflagge weiterführt",
    "summary": "Eine gescheiterte Umkehr kann zunächst wieder zum Verkaufssetup werden.",
    "section": "Musterfamilien",
    "scenario": "c12-final-flag",
    "paragraphs": [
      "Eine späte Pause im Bärenlauf wird manchmal als mögliche letzte Flagge gesehen: Ein neuer Abwärtsversuch könnte dann scheitern und eine Erholung beginnen. Das Wort letzte beschreibt eine Erwartung, keine feststehende Eigenschaft.",
      "Bleibt die Umkehr aus und drücken die Verkäufer weiter, kann dieselbe Pause als Ausbruchszone funktionieren. Einen Rücklauf an diese Zone prüfst du dann als Breakout-Pullback für eine mögliche Short-Fortsetzung. Die ursprüngliche Umkehridee wird durch den tatsächlich beobachteten Anschluss ersetzt.",
      "Später kann der Verlauf wieder wachsen: Mehrere Abwärtsschübe können einen Keilboden vorbereiten, oder eine größere Range wird zur neuen Kandidatin für eine letzte Flagge. Das sind mögliche Entwicklungswege. Du handelst den jetzt sichtbaren Übergang und wartest nicht darauf, dass die erste Bezeichnung endlich recht bekommt."
    ],
    "callout": "Eine mögliche letzte Flagge kann zuerst eine weitere Fortsetzung liefern.",
    "takeaways": [
      "Letzte Flagge als Hypothese lesen.",
      "Ausbleibende Umkehr ernst nehmen.",
      "Spätere Vergrößerung erneut einordnen."
    ],
    "prompt": "Die erwartete Umkehr einer späten Bärenflagge bleibt aus. Was kann ein späterer Rücklauf werden?",
    "answers": [
      {
        "label": "Ein garantierter Long, weil letzte im Namen steht.",
        "explanation": "Der Name kann die tatsächliche Verkäuferreaktion nicht überstimmen."
      },
      {
        "label": "Ein Short-Setup am Ausbruchs-Pullback, falls Verkäufer erneut übernehmen.",
        "explanation": "Richtig. Das alte Umkehrbild kann zunächst in eine Fortsetzung übergehen."
      },
      {
        "label": "Ein Grund, den ursprünglichen Stop zu entfernen.",
        "explanation": "Neue Muster ändern die vorab gesetzte Verlustgrenze nicht automatisch."
      }
    ],
    "correct": 1,
    "number": 8
  },
  {
    "title": "Spike, Kanal, Range und Doppeltief",
    "summary": "Eine Trendphase kann erst ausbalancieren und danach wieder fortgesetzt werden.",
    "section": "Musterfamilien",
    "scenario": "c12-channel-range",
    "paragraphs": [
      "Ein bullischer Spike ist ein gerichteter Impuls. Danach kann ein Kanal entstehen, in dem neue Hochs von kleinen Rückläufen begleitet werden. Wird der Handel schließlich zweiseitiger, nimmt die Überlappung zu und eine Trading Range bildet sich.",
      "Innerhalb dieser Range können zwei Tiefbereiche getestet und zurückgekauft werden. Die Folge lässt sich als Doppeltief-Bullenflagge lesen: eine Pause im größeren Aufwärtsbild mit einem erneuten Versuch zur Fortsetzung. Das Doppeltief allein beweist diese Rolle nicht; der frühere Impuls und der aktuelle Käuferanschluss gehören dazu.",
      "Derselbe Wechsel kann in einem anderen Umfeld anders enden. Ein kräftiger Abwärtsausbruch aus der Range würde die bullische Fortsetzungsthese stören. Halte deshalb die Etappen auseinander und aktualisiere die Grenzen, statt den ganzen Tag mit dem Namen der ersten Trendphase zu beschreiben."
    ],
    "callout": "Ein Trend kann pausieren, zweiseitig werden und erst dann eine neue Fortsetzung anbieten.",
    "takeaways": [
      "Spike und Kanal als Trendphasen erkennen.",
      "Überlappung als Balance wahrnehmen.",
      "Doppeltief nur mit Kontext beurteilen."
    ],
    "prompt": "Was gibt dem Doppeltief in einer späteren Range eine mögliche Fortsetzungsrolle?",
    "answers": [
      {
        "label": "Die Zahl zwei garantiert ein neues Hoch.",
        "explanation": "Zwei Tiefs allein garantieren weder Richtung noch Ziel."
      },
      {
        "label": "Dass jede Range ein Bullenmarkt ist.",
        "explanation": "Ranges können auch nach unten ausbrechen."
      },
      {
        "label": "Der vorausgegangene Bullenimpuls zusammen mit erneutem Käuferanschluss.",
        "explanation": "Richtig. Die Rolle entsteht aus früherer Richtung und aktueller Reaktion."
      }
    ],
    "correct": 2,
    "number": 9
  },
  {
    "title": "Frühe Flaggen können die Seite wechseln",
    "summary": "Ein Doppeltop-Verkaufssetup kann durch ein Doppeltief-Kaufsetup ersetzt werden.",
    "section": "Musterfamilien",
    "scenario": "c12-opening-flags",
    "paragraphs": [
      "In der ersten Handelsphase werden oft beide Richtungen getestet. Ein Anstieg kann in einem Doppeltop-Verkaufssetup enden; der Rücklauf daraus kann wiederum nahe einer vorherigen Tiefzone auf Käufer treffen und ein Doppeltief-Kaufsetup bilden.",
      "Die frühe bärische Gelegenheit ist damit nicht dasselbe wie die spätere bullische. Ein aktiver Trader kann beide unabhängig prüfen, statt sich den ganzen Tag an die erste Richtung zu binden. Jede Teilnahme braucht ihre eigene Auslösung und einen klaren Verlustschutz; der zweite Trade ist kein Versuch, einen ersten Verlust emotional zurückzuholen.",
      "Solange beide Seiten kräftig reagieren, kann der Markt im Breakout-Modus sein: Die Richtung des nächsten tragfähigen Ausbruchs bleibt offen. Ein markantes frühes Extrem kann Ausgangspunkt einer längeren Bewegung werden, muss es aber nicht. Entscheidend bleibt, welche Seite tatsächlich Anschluss erzeugt."
    ],
    "callout": "Ein Richtungswechsel nach neuen Belegen ist etwas anderes als Rachetrading.",
    "takeaways": [
      "Frühe Hoch- und Tieftests zusammen lesen.",
      "Beide Gelegenheiten eigenständig prüfen.",
      "Bei beidseitigem Druck Richtung offen halten."
    ],
    "prompt": "Warum darf nach einem Short später ein Long geprüft werden?",
    "answers": [
      {
        "label": "Weil neue Käuferbelege ein neues Setup bilden können.",
        "explanation": "Richtig. Die aktuelle Struktur kann eine andere Richtung unterstützen."
      },
      {
        "label": "Weil jeder Verlust sofort ausgeglichen werden muss.",
        "explanation": "Dieser Druck ist emotional und kein Setup."
      },
      {
        "label": "Weil der erste Trade die Tagesrichtung verbindlich festlegt.",
        "explanation": "Der Markt ist an die erste Position eines Traders nicht gebunden."
      }
    ],
    "correct": 0,
    "number": 10
  },
  {
    "title": "Chartfall 12.1: Low 2 wächst zum Keiltop",
    "summary": "Ein früher Verkaufsversuch kann scheitern, während sich später eine größere Hochstruktur bildet.",
    "section": "Chartfall 12.1 · Frühe Hochs",
    "scenario": "c12-121-wedge-top",
    "paragraphs": [
      "Ein Low-2-Short ist der zweite Verkaufsversuch innerhalb einer Aufwärtskorrektur oder Flagge. Im ersten Übungsfall führt die frühe Auslösung noch nicht zu einer tragfähigen Abwärtsbewegung. Die Käufer setzen den Anstieg fort und testen einen höheren Bereich.",
      "Mit dem zusätzlichen Aufwärtsschub wird die Struktur größer und lässt sich als Keiltop mit drei Schüben lesen. Die spätere Verkaufsmöglichkeit prüfst du erst unter dem Signal nach dem letzten Hoch. Sie hat mehr Vorgeschichte als der frühe Low 2 und ist eine neue Gelegenheit, nicht derselbe Entry mit einem bequemeren Namen.",
      "Unser Schaubild verwendet andere Preise und eine vereinfachte Folge. Es zeigt den frühen Versuch, den zusätzlichen Hochschub und das spätere Gegensignal. Nirgends garantiert der dritte Schub eine Umkehr; du brauchst die tatsächlich sichtbare Auslösung und den Anschluss danach."
    ],
    "callout": "Ein misslungener früher Short kann einer neuen größeren Short-Struktur vorausgehen.",
    "takeaways": [
      "Low 2 als zweiten Versuch einordnen.",
      "Zusätzlichen Hochschub wahrnehmen.",
      "Spätes Gegensignal separat prüfen."
    ],
    "prompt": "Warum ist der spätere Keil-Short eine neue Gelegenheit?",
    "answers": [
      {
        "label": "Weil der alte Stop rückwirkend ungültig wird.",
        "explanation": "Ein neuer Aufbau ändert den alten Schutz nicht nachträglich."
      },
      {
        "label": "Weil weitere Bars und ein höherer Test die Struktur verändert haben.",
        "explanation": "Richtig. Der spätere Trigger basiert auf zusätzlichen Informationen."
      },
      {
        "label": "Weil jeder dritte Hochschub sicher fällt.",
        "explanation": "Die Zahl beschreibt die Form, beweist aber keine Umkehr."
      }
    ],
    "correct": 1,
    "number": 11
  },
  {
    "title": "Ein Low 2 kann komplexer werden",
    "summary": "Ein frühes Verkaufssignal kann erst nach einem weiteren Hochtest erneut entstehen.",
    "section": "Chartfall 12.1 · Späte Flagge",
    "scenario": "c12-121-complex-low2",
    "paragraphs": [
      "Später im Übungsfall bildet sich aus einem ersten Aufwärtsschub ein Low-2-Verkaufsversuch. Die erste kleine bärische Reaktion entscheidet den Verlauf noch nicht. Ein weiterer Hochtest und eine Umkehr über zwei Bars ergänzen die Struktur.",
      "Den zweiten Short prüfst du unter der neuen Zwei-Bar-Umkehr. Bei dieser Form zählt die gemeinsame Zurückweisung: Ein erster Bar drückt noch nach oben, der nächste nimmt den Versuch sichtbar zurück. Die spätere Auslösung liegt deshalb an einer aktuelleren Grenze als der frühere Verkaufspunkt.",
      "Ob du den Aufbau erweiterten Low 2 oder neue komplexe Flagge nennst, ändert an den Orders nichts. Wichtig sind die Reihenfolge der Tests und die aktuelle Verkaufsreaktion. Eine Ergänzung zu einer bestehenden Position braucht außerdem eine erneute Prüfung des gesamten Risikos."
    ],
    "callout": "Die aktuelle Zurückweisung gibt den neuen Trigger vor.",
    "takeaways": [
      "Weitere Hochtests verändern die Flagge.",
      "Zwei-Bar-Umkehr gemeinsam lesen.",
      "Neue Position und Ergänzung getrennt rechnen."
    ],
    "prompt": "Worauf stützt sich der spätere Short in diesem Aufbau?",
    "answers": [
      {
        "label": "Auf die Tatsache, dass der erste Short schon eröffnet war.",
        "explanation": "Eine vorhandene Position ist kein neues Marktsignal."
      },
      {
        "label": "Nur auf den Namen Low 2.",
        "explanation": "Der Name allein beschreibt weder aktuellen Trigger noch Stop."
      },
      {
        "label": "Auf den erneuten Hochtest, die neue Umkehr und deren Auslösung.",
        "explanation": "Richtig. Die spätere Gelegenheit braucht die jetzige Preisfolge."
      }
    ],
    "correct": 2,
    "number": 12
  },
  {
    "title": "High 2 entwickelt sich zur Keil-Bullenflagge",
    "summary": "Ein zweiter Kaufversuch kann um einen weiteren Abwärtsschub erweitert werden.",
    "section": "Chartfall 12.1 · Tiefbereich",
    "scenario": "c12-121-wedge-bottom",
    "paragraphs": [
      "Ein High-2-Kaufversuch im Rücklauf kann zunächst zu wenig Käuferanschluss bekommen. Der Markt macht einen weiteren Abwärtsschub. Aus dem ersten kleineren Pullback wird nun eine größere Struktur mit drei Schüben nach unten.",
      "Diese Folge lässt sich als Keil-Bullenflagge an einer Durchschnittsreferenz betrachten. Gleichzeitig kannst du den Abwärtsabschnitt als Bärenspike mit anschließendem Kanal lesen; der letzte Schub liegt dann auch am möglichen Kanalende. Mehrere Beschreibungen können auf dieselben Bars passen.",
      "Dass hier mehrere Dinge zusammentreffen, ist noch kein Beweis für den Long. Prüf Zurückweisung des Tiefs, Auslösung nach oben und tragbaren Stop-Abstand. Der Durchschnitt ist eine Preisreferenz, keine Kraft, die den Kurs automatisch nach oben schiebt. Der dritte Schub erweitert die Information, nicht die Gewissheit."
    ],
    "callout": "Ein zusätzliches Tief kann die Form vergrößern, ohne allein ein Kaufsignal zu sein.",
    "takeaways": [
      "High 2 und größeren Keil unterscheiden.",
      "Dritten Abwärtsschub im Kanal einordnen.",
      "Durchschnittskontakt braucht Käuferreaktion."
    ],
    "prompt": "Was muss zum dritten Abwärtsschub hinzukommen, bevor ein Long erwogen wird?",
    "answers": [
      {
        "label": "Eine passende Zurückweisung und Auslösung mit begrenztem Risiko.",
        "explanation": "Richtig. Die Form allein reicht für die Order nicht."
      },
      {
        "label": "Nur die Berührung eines Durchschnitts.",
        "explanation": "Ein Durchschnitt kann auch ohne Umkehr unterschritten werden."
      },
      {
        "label": "Die nachträgliche Entfernung des alten Stops.",
        "explanation": "Eine größere Form rechtfertigt keine unbegrenzte alte Position."
      }
    ],
    "correct": 0,
    "number": 13
  },
  {
    "title": "Starker Käuferimpuls kann den Low 2 überstimmen",
    "summary": "Ein zählbarer Short ist nicht automatisch ein guter Short.",
    "section": "Chartfall 12.1 · Fehlschlag",
    "scenario": "c12-121-failed-low2",
    "paragraphs": [
      "Vor einem weiteren Low-2-Verkaufsversuch entsteht ein kräftiger Bullenimpuls. Dieser Schub verändert den Kontext: Die Käufer haben gerade sichtbar die Kontrolle übernommen. Eine kleine bärische Flagge kann zwar formal einen zweiten Verkaufspunkt enthalten, liegt dann aber gegen diesen Druck.",
      "Im betrachteten Ablauf setzt sich der Short nicht durch. Seine Rücknahme liest du jetzt als möglichen Kauf aus einem gescheiterten Low 2. Verkäufer, die auf die frühe Auslösung gesetzt haben, können beim Ausstieg Nachfrage erzeugen; neue Käufer können dieselbe Richtung unterstützen.",
      "Für die Gegenorder brauchst du die sichtbare Rücknahme und einen gültigen Trigger. Du kaufst nicht bloß, weil du den Short subjektiv schlecht findest. Der entscheidende Vergleich lautet: Wie stark war der vorherige Bullenimpuls, und wie viel Anschluss bekamen die Verkäufer tatsächlich?"
    ],
    "callout": "Die Vorgeschichte kann die formale Zählung überstimmen.",
    "takeaways": [
      "Momentum vor der Zählung beurteilen.",
      "Fehlschlag tatsächlich beobachten.",
      "Gegeneinstieg braucht eigene Auslösung."
    ],
    "prompt": "Was macht den Low-2-Short nach einem starken Bullenimpuls fragil?",
    "answers": [
      {
        "label": "Dass die Zahl zwei grundsätzlich falsch ist.",
        "explanation": "Die Zählung kann richtig sein; der Kontext macht die Gelegenheit trotzdem schwach."
      },
      {
        "label": "Der kräftige Käuferdruck, gegen den der Short erst Wirkung zeigen müsste.",
        "explanation": "Richtig. Formaler Versuch und tatsächliche Gegenkraft sind verschiedene Prüfungen."
      },
      {
        "label": "Dass Käufer nach einem Spike niemals korrigieren.",
        "explanation": "Auch starke Impulse können korrigieren; hier geht es um die Qualität des Gegensignals."
      }
    ],
    "correct": 1,
    "number": 14
  },
  {
    "title": "Ein gelungener Gegeneinstieg kann später selbst auslaufen",
    "summary": "Nach dem gescheiterten Short entsteht ein Anstieg mit eigenem Kanalende.",
    "section": "Chartfall 12.1 · Nächste Phase",
    "scenario": "c12-121-channel-top",
    "paragraphs": [
      "Der Kauf nach dem zurückgenommenen Short gehört zur neuen bullischen Phase. Nach einem Impuls kann ein steigender Kanal mit mehreren Schüben entstehen. Die spätere Hochstruktur liest du jetzt aus dieser Phase heraus und nicht länger nur als gescheiterten Short von früher.",
      "Am dritten Aufwärtsschub kann sich ein mögliches Kanalende oder Keiltop zeigen. Prüf dafür späte Beschleunigung, Rücknahme und Verkaufsanschluss. Ein dritter Schub ist ein Ort für Aufmerksamkeit, keine automatische Short-Order und kein sicherer Endpunkt.",
      "So laufen mehrere Entscheidungen nacheinander ab: erster Shortversuch, sein Fehlschlag, möglicher Long und später ein neues Hochsetup. Eine Position, die am ersten Übergang sinnvoll war, muss nicht jeden weiteren Übergang überleben. Der Schutzplan und die aktuellen Bars bestimmen, was du hältst oder neu eröffnest."
    ],
    "callout": "Ein guter Einstieg muss nicht zum Etikett für den ganzen weiteren Tag werden.",
    "takeaways": [
      "Jede neue Marktphase eigenständig lesen.",
      "Kanalende als Möglichkeit behandeln.",
      "Position und neue Gegenorder unterscheiden."
    ],
    "prompt": "Der Long läuft, später erscheint ein dritter Aufwärtsschub. Was folgt?",
    "answers": [
      {
        "label": "Der Tag bleibt unabhängig von allen späteren Bars zwingend bullisch.",
        "explanation": "Ein guter früher Long schützt nicht vor einer späteren Veränderung."
      },
      {
        "label": "Sofort short ohne Trigger.",
        "explanation": "Der dritte Schub allein ist noch keine Auslösung."
      },
      {
        "label": "Die neue Hochstruktur und Verkäuferreaktion prüfen, während der Schutzplan gilt.",
        "explanation": "Richtig. Der aktuelle Übergang ist die neue Entscheidungsstelle."
      }
    ],
    "correct": 2,
    "number": 15
  },
  {
    "title": "Ein High-2-Fehlschlag am Tageshoch",
    "summary": "Ein gescheiterter Kaufversuch kann einen erneuten Umkehrversuch nach unten bilden.",
    "section": "Chartfall 12.1 · Neues Hoch",
    "scenario": "c12-121-failed-high2",
    "paragraphs": [
      "Ein später High-2-Long kann an einem neuen Tageshoch ausgelöst werden und anschließend zurückfallen. Dass er ein zweiter Kaufversuch heißt, garantiert nicht, dass weitere Nachfrage kommt. Die Lage am Hoch macht die tatsächliche Reaktion besonders wichtig.",
      "Wird der Entry-Bar selbst nach unten gebrochen, kann daraus eine neue Verkaufsgelegenheit entstehen. Im beschriebenen Ablauf ist das zugleich ein weiterer Versuch, den Markt nach unten zu drehen. Festgesetzte Käufer könnten aussteigen und den Gegenschub verstärken; das bleibt eine aus den Bars abgeleitete Erklärung.",
      "Die Prüfgrenze kommt jetzt aus der gescheiterten Auslösung und dem aktuellen Umkehrbild. Du wählst sie nicht so, dass sich ein früher Verlust möglichst schnell zurückverdienen lässt. Halte Long-Fehlschlag, neuen Short-Trigger und die Größe der neuen Position sauber auseinander."
    ],
    "callout": "Auch ein High 2 kann am Hoch scheitern und die andere Seite vorbereiten.",
    "takeaways": [
      "Hochlage und Käuferanschluss prüfen.",
      "Entry-Bar als aktuelle Grenze lesen.",
      "Gegeneinstieg ohne Verlustjagd planen."
    ],
    "prompt": "Was unterscheidet den neuen Short von einem emotionalen Richtungswechsel?",
    "answers": [
      {
        "label": "Eine beobachtete Rücknahme, ein eigener Trigger und ein vorher begrenztes Risiko.",
        "explanation": "Richtig. Die Gegenorder beruht auf neuen Belegen statt dem Wunsch nach Ausgleich."
      },
      {
        "label": "Eine besonders große Menge nach dem verlorenen Long.",
        "explanation": "Das vergrößert den Druck, liefert aber kein besseres Setup."
      },
      {
        "label": "Die Behauptung, jeder High 2 müsse scheitern.",
        "explanation": "Der Fall beschreibt einen bestimmten Fehlschlag und keine allgemeine Gewissheit."
      }
    ],
    "correct": 0,
    "number": 16
  },
  {
    "title": "Chartfall 12.2: Große Lücke, kräftige Gegenreaktion",
    "summary": "Die Eröffnungslücke und die erste Reaktion müssen gemeinsam gelesen werden.",
    "section": "Chartfall 12.2 · Eröffnung",
    "scenario": "c12-122-gap-reversal",
    "paragraphs": [
      "Der zweite Übungsfall beginnt mit einer großen Abwärtslücke. Der neue Preis liegt unter einer früheren Kanalgrenze, aber die ersten Bars werden kräftig nach oben gekauft. Die Lücke allein liefert deshalb keine eindeutige Tagesrichtung.",
      "Das Zurückkaufen nach der Unterschreitung ist ein Hinweis auf Nachfrage. Mehrere starke frühe Bullenbars machen eine bullische Entwicklung plausibler als die isolierte Betrachtung der Lücke. Gleichzeitig können Verkäufer an einer fallenden Durchschnittsreferenz erneut versuchen, den Abwärtstrend durchzusetzen.",
      "Große Lücken können starke Tagesbewegungen in beide Richtungen begleiten. Du prüfst deshalb, ob die erste Gegenreaktion Anschluss bekommt oder nur ein kurzer Rücklauf bleibt. Unser Schaubild trennt die Preisverschiebung zur Eröffnung von der danach sichtbaren Käuferreaktion."
    ],
    "callout": "Eine Lücke beschreibt den Startpreis, nicht den ganzen Tagesverlauf.",
    "takeaways": [
      "Lücke und Reaktion getrennt erfassen.",
      "Starke frühe Bars als neue Information nutzen.",
      "Gegenversuche an Referenzen beobachten."
    ],
    "prompt": "Große Abwärtslücke, dann mehrere starke Bullenbars: Was ist die passende Schlussfolgerung?",
    "answers": [
      {
        "label": "Eine Abwärtslücke verbietet jede Long-Idee.",
        "explanation": "Die tatsächliche Gegenreaktion kann die frühe Richtung ändern."
      },
      {
        "label": "Die Käuferreaktion verbessert die bullische These, ohne den Tagesverlauf zu garantieren.",
        "explanation": "Richtig. Neue Bars ergänzen die Information aus der Lücke."
      },
      {
        "label": "Jede große Lücke endet sicher im Bullen-Trendtag.",
        "explanation": "Große Lücken können auch andere Verläufe erzeugen."
      }
    ],
    "correct": 1,
    "number": 17
  },
  {
    "title": "Doppeltop scheitert, Doppeltief hält",
    "summary": "Zwei frühe Gelegenheiten können nacheinander gegensätzliche Richtungen unterstützen.",
    "section": "Chartfall 12.2 · Zwei Versuche",
    "scenario": "c12-122-double-flags",
    "paragraphs": [
      "Nach dem frühen Anstieg entsteht ein erneuter Hochtest an einer fallenden Durchschnittszone. Du kannst ihn als Doppeltop-Bärenflagge mit zweitem Verkaufsversuch betrachten. Die mögliche Short-Auslösung liegt unter dessen Signalbereich.",
      "Der Rücklauf findet jedoch nahe dem früheren Tiefbereich erneut Käufer. Dieses zweite Tief bildet nun die Grundlage einer Doppeltief-Bullenflagge. Ihren möglichen Long prüfst du oberhalb des neuen Signals. Der zweite Versuch der Verkäufer hat keine anhaltende Abwärtskontrolle geschaffen; der zweite Bodenversuch bekommt dagegen Käuferanschluss.",
      "Die beiden Richtungen beurteilst du zeitlich nacheinander. Ein Trader kann beide prüfen, muss sie aber nicht beide handeln. Beim Wechsel klärst du alte Position, neuen Trigger und Gesamtrisiko bewusst. Einen Trendanteil zu halten kommt erst infrage, wenn die aktuelle Struktur und dein eigener Plan es tragen."
    ],
    "callout": "Das Ergebnis des Hochtests hilft, den späteren Tieftest einzuordnen.",
    "takeaways": [
      "Short-Signal und späteres Long-Signal trennen.",
      "Wiederholte Tiefverteidigung wahrnehmen.",
      "Richtungswechsel als neue Order planen."
    ],
    "prompt": "Welche Folge beschreibt die Entwicklung hier?",
    "answers": [
      {
        "label": "Jeder Hochtest muss sofort ein Tageshoch sein.",
        "explanation": "Der erste Hochtest kann zurückgenommen und später überschritten werden."
      },
      {
        "label": "Doppeltop und Doppeltief garantieren zusammen beide Gewinne.",
        "explanation": "Jede Auslösung kann scheitern und braucht Verlustschutz."
      },
      {
        "label": "Früher Verkaufsversuch, Rücklauf, erneute Tiefverteidigung und neuer Kauftrigger.",
        "explanation": "Richtig. Die Reihenfolge erklärt den Wechsel der Gelegenheit."
      }
    ],
    "correct": 2,
    "number": 18
  },
  {
    "title": "Zwei gültige Spike-und-Kanal-Lesarten",
    "summary": "Verschiedene Einteilungen können dieselbe sichtbare Käuferstärke beschreiben.",
    "section": "Chartfall 12.2 · Kräftevergleich",
    "scenario": "c12-122-two-readings",
    "paragraphs": [
      "In der Eröffnungsphase wechseln sich Aufwärts- und Abwärtsspikes ab. Das kann zunächst eine Range ergeben, weil beide Seiten um einen Kanal in ihrer Richtung kämpfen. Im Übungsfall ist die spätere bullische Reaktion deutlich kräftiger und entwickelt sich weiter nach oben.",
      "Du kannst den ersten Anstieg als Spike und die gesamte frühe Range als seinen Pullback lesen. Der spätere Anstieg ist dann der zugehörige Kanal. Eine zweite sinnvolle Lesart nimmt den kräftigen späteren Aufwärtsspike als Hauptimpuls und lässt den Kanal erst nach diesem beginnen.",
      "Für die Entscheidung brauchst du keine eindeutige Namenswahl. Beide Lesarten müssen den sichtbaren Käuferdruck, die schwächeren Gegenreaktionen und die aktuellen Grenzen erklären. Eine dritte Aufwärtswelle im späteren Kanal ist wieder ein Beobachtungsort; sie legt weder den ganzen Tag noch eine sofortige Umkehr fest."
    ],
    "callout": "Einteilungen können verschieden sein, obwohl die Kräftebeurteilung übereinstimmt.",
    "takeaways": [
      "Beidseitige Spikes zuerst als Konkurrenz lesen.",
      "Ersten oder späteren Spike als Bezug vergleichen.",
      "Kräfte und Grenzen vor Etiketten stellen."
    ],
    "prompt": "Zwei Trader setzen den Kanalbeginn unterschiedlich. Was hilft bei der Entscheidung am meisten?",
    "answers": [
      {
        "label": "Ob beide Lesarten den aktuellen Druck und die relevanten Grenzen erklären.",
        "explanation": "Richtig. Die Einteilung dient der Chartlektüre und nicht einem Namenswettbewerb."
      },
      {
        "label": "Wer den komplizierteren Musternamen benutzt.",
        "explanation": "Ein Name ist kein Beleg für Käufer- oder Verkäuferkontrolle."
      },
      {
        "label": "Ob die frühere Long-Position schon im Gewinn liegt.",
        "explanation": "Die aktuelle Kräfteverteilung hängt nicht vom persönlichen Einstieg ab."
      }
    ],
    "correct": 0,
    "number": 19
  },
  {
    "title": "Aus dem möglichen Trendtag werden gestaffelte Ranges",
    "summary": "Ein späterer Rücklauf kann eine frühere Balance testen, ohne den ganzen Aufwärtstag zu löschen.",
    "section": "Chartfall 12.2 · Tagesentwicklung",
    "scenario": "c12-122-trending-ranges",
    "paragraphs": [
      "Der kräftige frühe Anstieg hätte zu einem weitgehend durchgehenden Trend vom Open führen können. Der tatsächlich sichtbare Verlauf wird später zweiseitiger: Es entstehen Handelsbereiche auf unterschiedlichen Preisniveaus. Diese Staffelung lässt sich als Trending-Trading-Range-Tag beschreiben.",
      "Ein späterer Abverkauf testet den unteren früheren Bereich. Dort kehren die Käufer zurück und der Kurs steigt in Richtung der oberen Balance. Der Tag enthält somit gerichtete Bewegungen und Phasen, in denen beide Seiten handeln. Ein früher Trendschub beschreibt nicht jede spätere Minute.",
      "Aktualisiere deshalb die Grenzen beim Wechsel in die neue Range. Ein Stop oder Ziel aus einem engeren Trendsetup muss nicht zur neuen Gelegenheit passen. Die späte Erholung kennst du erst durch ihre tatsächlich sichtbare Reaktion; sie darf nicht rückwirkend zur Begründung werden, einen früher erreichten Stop zu ignorieren."
    ],
    "callout": "Der Tag entwickelt seine Form erst im Verlauf.",
    "takeaways": [
      "Gerichtete Schübe und Balancephasen trennen.",
      "Frühere Range als Testzone nutzen.",
      "Späteres Ergebnis nicht rückwirkend handeln."
    ],
    "prompt": "Warum muss die Tagesform nach einem kräftigen frühen Anstieg neu geprüft werden?",
    "answers": [
      {
        "label": "Weil der erste Spike automatisch ein falsches Signal war.",
        "explanation": "Eine frühe Bewegung kann sinnvoll gewesen sein, obwohl später Balance entsteht."
      },
      {
        "label": "Weil später zweiseitiger Handel und mehrere Preisbereiche entstehen können.",
        "explanation": "Richtig. Die aktuelle Tagesform folgt aus dem Verlauf statt aus dem ersten Etikett."
      },
      {
        "label": "Weil ein späterer Rücklauf jeden früheren Trend unsichtbar macht.",
        "explanation": "Die Vorgeschichte bleibt relevant, beschreibt aber nicht allein die aktuelle Phase."
      }
    ],
    "correct": 1,
    "number": 20
  },
  {
    "title": "So prüfst du eine Musterentwicklung",
    "summary": "Ein fester Beobachtungsablauf hilft gegen das Festhalten an der ersten Idee.",
    "section": "Abschluss",
    "scenario": "c12-observation-plan",
    "paragraphs": [
      "Halte zunächst fest, welches Signal schon ausgelöst wurde und welchen Anschluss es bekommen hat. War das alte kleine Ziel bereits erreicht, bewertest du den Trade anders als bei einer sofortigen Rücknahme. Schau dann auf die neu sichtbaren Tests und Grenzen: Wächst die alte Struktur, wechselt der Druck oder entsteht nach Balance eine eigenständige neue Gelegenheit?",
      "Für eine mögliche neue Order beschreibst du Auslösung, Stop und Menge anhand der aktuellen Bars. Bei einem schnellen Fehlschlag kannst du mögliche Ausstiegsorders der Gegenseite mitdenken; nach längerer Seitwärtsphase beginnst du mit der neuen Struktur. Du brauchst kein perfektes Etikett, aber einen nachvollziehbaren Grund.",
      "Notier deine Einschätzung, bevor du im Replay die nächsten Bars aufdeckst. Vergleiche später Beobachtung und Ergebnis: Hast du den Wandel gesehen, oder hast du auf Bestätigung der ersten Idee gewartet? Die Übung bewertet die Entscheidung mit damaligen Informationen; ein später schöner Chart darf daraus keine Gewissheit machen."
    ],
    "callout": "Alte Auslösung → Anschluss → neue Tests → aktuelle Richtung → neues Risiko.",
    "takeaways": [
      "Ablauf vor Namen festhalten.",
      "Jede neue Auslösung eigenständig prüfen.",
      "Entscheidung vor dem Aufdecken weiterer Bars notieren."
    ],
    "prompt": "Welche Notiz zeigt eine brauchbare aktualisierte Entscheidung?",
    "answers": [
      {
        "label": "Mein erster Name muss bis zum Schluss richtig bleiben.",
        "explanation": "Das hält an einer Bezeichnung statt an neuen Informationen fest."
      },
      {
        "label": "Nach dem Verlust nehme ich doppelte Menge in die Gegenrichtung.",
        "explanation": "Der Verlust liefert weder Trigger noch tragbares Risiko."
      },
      {
        "label": "Der erste Ausbruch wurde zurückgenommen; ich prüfe den neuen Trigger mit eigenem Stop und begrenzter Menge.",
        "explanation": "Richtig. Die Folge verbindet Beobachtung, aktuelle Auslösung und neuen Verlustschutz."
      }
    ],
    "correct": 2,
    "number": 21
  }
];

export const chapterTwelveLessons: Lesson[] = drafts.map((d) => {
  const key = `chapter-12-${String(d.number).padStart(2, '0')}`;
  return {
    id: `price-action-trends.chapter-12.lesson-${String(d.number).padStart(2, '0')}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 12 · ${d.section}`,
    sourceAnchors: [`Kapitel 12 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 12 · Musterentwicklung',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title, scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Die Folge zeigt Lernlogik, keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Die Entwicklung einordnen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((answer, index) => ({ id: `choice-${index}`, ...answer })) },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
