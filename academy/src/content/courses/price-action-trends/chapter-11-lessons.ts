import type { ChapterElevenScenarioId, Lesson } from '../../types';

interface Draft {
  number: number; title: string; summary: string; section: string;
  scenario: ChapterElevenScenarioId; paragraphs: string[]; callout: string;
  takeaways: string[]; prompt: string; answers: string[]; correct: number;
}

const drafts: Draft[] = [
  {
    "number": 1,
    "title": "Ein verpasster Einstieg ist noch kein verpasster Trend",
    "summary": "Du öffnest den Chart und der Kurs ist schon gestiegen.",
    "section": "Grundidee",
    "scenario": "c11-missed-trend",
    "paragraphs": [
      "Du öffnest den Chart und der Kurs ist schon gestiegen. Der erste gute Einstieg liegt links von dir. Da gibt es leicht zwei extreme Reaktionen: blind hinterherspringen oder den ganzen Trend abschreiben. Beide reagieren auf den verpassten Preis, statt die jetzige Situation zu prüfen.",
      "Die nützlichere Frage lautet: Wenn ich früher eingestiegen wäre, würde ich jetzt noch einen Teil der Position halten? Gemeint ist der Anteil für eine längere Bewegung, nicht ein längst beendeter kurzer Scalp. Dafür müssen Trendrichtung, aktuelle Struktur und ein begründbarer Schutzstop weiterhin zusammenpassen.",
      "Lautet die Antwort nein, begründet der frühere Einstieg auch keinen neuen Trade. Lautet sie ja, prüfst du eine kleine spätere Teilnahme zu den heutigen Bedingungen. Das ist eine Entscheidungslogik für einen klaren Trend und keine Aufforderung, jede Bewegung nachzukaufen."
    ],
    "callout": "Prüf die Position, die du jetzt halten würdest – nicht den Preis, den du gern gehabt hättest.",
    "takeaways": [
      "Frühen Einstieg erkennen.",
      "Aktuelle Halteentscheidung prüfen.",
      "Heutigen Stop und Risiko berechnen."
    ],
    "prompt": "Was ist die erste sinnvolle Frage nach einem verpassten Einstieg?",
    "answers": [
      "Würde ich heute noch einen Trendanteil mit einem begründbaren Stop halten?",
      "Wie hole ich den verpassten Gewinn sofort nach?",
      "Wie viel größer muss meine Position werden?"
    ],
    "correct": 0
  },
  {
    "number": 2,
    "title": "Eine klare Richtung braucht sichtbare Belege",
    "summary": "Eine klare Richtung heißt: Die Fortsetzungsseite wirkt derzeit überzeugender.",
    "section": "Trendkontext",
    "scenario": "c11-clear-direction",
    "paragraphs": [
      "Eine klare Richtung heißt: Die Fortsetzungsseite wirkt derzeit überzeugender. Im Bullenfall helfen dir dabei mehrere bullische Trendbars, geringe Überlappung und kleine Gegenreaktionen. Im Bärenfall liest du die Merkmale spiegelbildlich.",
      "Der Begriff Always-in beschreibt diese bevorzugte Seite: Müsstest du eine Richtung wählen, spricht der Verlauf eher für Long oder eher für Short. Er heißt nicht, dass du ständig investiert sein musst. Eine breite Range mit wechselnden starken Gegenbars ist eine andere Ausgangslage als ein enger Trendkanal.",
      "Für einen späten Einstieg brauchst du die Belege im jetzt sichtbaren Chart. Die spätere Fortsetzung darf nicht rückwirkend zum Argument werden. Bleibt die Richtung unklar oder ist der Stop für dein Risikolimit zu weit weg, ist Abwarten eine vollständige Entscheidung."
    ],
    "callout": "Eine klare Marktseite ist eine Einschätzung aus dem Verlauf, kein Dauerauftrag zum Handeln.",
    "takeaways": [
      "Druck und Überlappung gemeinsam lesen.",
      "Long und Short spiegelbildlich prüfen.",
      "Unklare Richtung erlaubt Abwarten."
    ],
    "prompt": "Was bedeutet eine bullische Always-in-Einschätzung?",
    "answers": [
      "Jeder neue Bar muss gekauft werden.",
      "Die derzeit sichtbare Struktur bevorzugt die Käuferseite, ohne eine Garantie zu geben.",
      "Ein Schutzstop ist unnötig."
    ],
    "correct": 1
  },
  {
    "number": 3,
    "title": "Spät einsteigen heißt den Trendanteil wählen",
    "summary": "Eine normale Anfangsposition kann aus einem kurzen Gewinnziel und einem länger gehaltenen Rest bestehen.",
    "section": "Positionsanteil",
    "scenario": "c11-swing-size",
    "paragraphs": [
      "Eine normale Anfangsposition kann aus einem kurzen Gewinnziel und einem länger gehaltenen Rest bestehen. Wäre der kurze Teil nach dem früheren Einstieg schon verkauft, ist nur der Rest die sinnvolle Vergleichsposition für einen späteren Einstieg.",
      "Beispiel mit erfundenen Zahlen: Ein Trader startet sonst mit drei Einheiten, nimmt bei zwei davon früh Gewinne mit und hält eine für die größere Bewegung. Wer erst jetzt auf den Trend aufmerksam wird, vergleicht den neuen Trade mit dieser einen verbleibenden Einheit. Drei neue Einheiten wären eine andere und größere Risikoentscheidung.",
      "Der Trendanteil ist keine feste Drittelregel. Seine Größe ergibt sich aus deinem eigenen Plan und dem heutigen Stop-Abstand. Bei Futures muss die Menge in handelbare ganze Kontrakte passen; schafft selbst die kleinste Menge das Limit nicht, entfällt der Trade."
    ],
    "callout": "Vergleiche einen späten Trade mit dem verbleibenden Rest, nicht mit der ursprünglichen vollen Position.",
    "takeaways": [
      "Anfangsposition und Trendrest trennen.",
      "Keine starre Teilungsquote übernehmen.",
      "Mindestgröße am Risikolimit prüfen."
    ],
    "prompt": "Von drei ursprünglichen Einheiten wäre nur eine übrig. Welche Größe ist zunächst der passende Vergleich?",
    "answers": [
      "Sechs Einheiten, um das Versäumte aufzuholen.",
      "Wieder die vollen drei Einheiten.",
      "Der verbleibende Trendanteil, anschließend am heutigen Risiko geprüft."
    ],
    "correct": 2
  },
  {
    "number": 4,
    "title": "Ein weiter Stop verlangt eine kleinere Position",
    "summary": "Ein späterer Trendtrade braucht oft mehr Abstand zum Schutzstop als ein kurzer Scalp.",
    "section": "Risiko",
    "scenario": "c11-risk-size",
    "paragraphs": [
      "Ein späterer Trendtrade braucht oft mehr Abstand zum Schutzstop als ein kurzer Scalp. Liegt der strukturell begründete Stop weiter vom jetzigen Preis weg, steigt das mögliche Risiko je Einheit. Gleiche Stückzahl heißt dann gerade nicht gleiches Geldrisiko.",
      "Rechne vor der Order: Stop-Abstand mal Geldwert je Preiseinheit mal Positionsgröße. Bei einem Aktienbeispiel mit 120 Euro Risikolimit und 1,20 Euro Stop-Abstand sind rechnerisch 100 Stück drin. Bei 2,40 Euro Abstand bleiben 50 Stück. Gebühren und mögliche schlechtere Ausführung brauchen zusätzlich Platz im Budget.",
      "Zieh den Stop nicht künstlich an den Einstieg heran, nur damit eine große Menge bequem aussieht. Zuerst kommt der Punkt, an dem die Halteidee nicht mehr trägt; dann die Menge. Passt die kleinste handelbare Position nicht, ist der Trade für dieses Limit zu groß."
    ],
    "callout": "Größerer Stop-Abstand: weniger Einheiten, nicht mehr Hoffnung.",
    "takeaways": [
      "Risiko pro Einheit berechnen.",
      "Menge bei weiterem Stop reduzieren.",
      "Kosten und Ausführung berücksichtigen."
    ],
    "prompt": "Der Stop-Abstand verdoppelt sich. Wie hältst du das rechnerische Geldrisiko vor Kosten gleich?",
    "answers": [
      "Mit halb so vielen Einheiten.",
      "Mit doppelt so vielen Einheiten.",
      "Mit unveränderter Menge."
    ],
    "correct": 0
  },
  {
    "number": 5,
    "title": "Der gleiche Stop bedeutet nicht den gleichen bisherigen Gewinn",
    "summary": "Eine bestehende Long-Position kann schon deutlich im Gewinn sein.",
    "section": "Halteentscheidung",
    "scenario": "c11-hold-vs-enter",
    "paragraphs": [
      "Eine bestehende Long-Position kann schon deutlich im Gewinn sein. Trotzdem kann sie ab dem jetzigen Marktpreis bis zum Stop genauso viel verlieren wie eine frisch eröffnete Long-Position gleicher Größe mit demselben Stop. Für die Entscheidung ab jetzt ist der aktuelle Preis der Vergleichspunkt.",
      "Angenommen, der Kurs steht bei 106 und der Stop bei 103. Eine alte Position mit Einstieg 100 würde am Stop noch Gewinn behalten; eine neue Position mit Einstieg 106 hätte Verlust. Beide geben vom heutigen Wert aus drei Preiseinheiten je Stück ab. Die Einstiege ändern die bisherige Bilanz, nicht diesen Abstand.",
      "Die wirtschaftliche Ähnlichkeit gilt nur für die künftige Bewegung bei gleicher Menge und gleichem Stop. Kosten, tatsächliche Ausführung und steuerliche Folgen können abweichen. Und der sichtbare Buchgewinn ist schon dein eigenes Vermögen; ihn als fremdes Geld abzutun macht das Halten nicht risikolos."
    ],
    "callout": "Trenne das Risiko ab jetzt von der bisherigen Bilanz.",
    "takeaways": [
      "Aktuellen Preis als Vergleichspunkt nehmen.",
      "Buchgewinn als eigenen Wert behandeln.",
      "Gleiche Zukunft ist keine gleiche Vergangenheit."
    ],
    "prompt": "Kurs 106, Stop 103, gleiche Menge: Was ist bei altem und neuem Einstieg vergleichbar?",
    "answers": [
      "Die gesamten bisherigen Gewinne.",
      "Der mögliche Rückgang vom aktuellen Wert bis zum Stop.",
      "Die insgesamt gezahlten Gebühren."
    ],
    "correct": 1
  },
  {
    "number": 6,
    "title": "Vier Trendbars sind ein Hinweis, kein Automatismus",
    "summary": "Mehrere bullische Trendbars hintereinander können zeigen, dass die Käufer immer wieder höhere Preise akzeptieren.",
    "section": "Trendfolge",
    "scenario": "c11-four-bars",
    "paragraphs": [
      "Mehrere bullische Trendbars hintereinander können zeigen, dass die Käufer immer wieder höhere Preise akzeptieren. Eine Folge von vier oder mehr solchen Bars ist im behandelten Modell ein Anlass, eine kleine Teilnahme zu prüfen, statt nur auf den perfekten Pullback zu warten.",
      "Wichtig ist die Einschränkung: Die Bars sollen nicht auffällig groß und womöglich klimaktisch sein. Ein Kaufklimax ist eine späte Beschleunigung, nach der Gewinnmitnahmen und Gegenorders die Lage schnell drehen können. Vier normale Trendbars und vier explosionsartig größer werdende Bars erzählen deshalb unterschiedliche Geschichten.",
      "Zähl nicht nur Kerzenfarben. Schau auf Körper, Schlüsse, Überlappung und die Größe relativ zu den vorherigen Bars. Auch eine überzeugende Folge entbindet dich nicht von Stop, Menge und verbleibendem Raum. Die Zahl liefert einen Prüfpunkt, keine belegte feste Trefferquote."
    ],
    "callout": "Anhaltender Druck ist etwas anderes als eine späte Beschleunigung.",
    "takeaways": [
      "Mehrere Trendbars als Druck lesen.",
      "Größe relativ zur Vorgeschichte prüfen.",
      "Keine Order allein aus einer Zahl ableiten."
    ],
    "prompt": "Welche Folge verlangt besonders viel Vorsicht beim späten Kauf?",
    "answers": [
      "Mehrere moderate Bullenbars mit kleinen Gegenreaktionen.",
      "Ein klarer Plan mit kleiner Menge.",
      "Eine späte Folge zunehmend riesiger Bars mit möglichem Klimax."
    ],
    "correct": 2
  },
  {
    "number": 7,
    "title": "Auf den perfekten Pullback zu warten hat einen Preis",
    "summary": "In einem starken Trend kann eine tiefe Korrektur lange ausbleiben.",
    "section": "Teilnahme",
    "scenario": "c11-wait-pullback",
    "paragraphs": [
      "In einem starken Trend kann eine tiefe Korrektur lange ausbleiben. Wer nur deutlich billiger kaufen will, bekommt vielleicht gar keinen Einstieg. Das Warten senkt das Risiko nicht automatisch; zuerst verändert es nur die Chance, dabei zu sein.",
      "Eine kleine Teilnahme zum aktuellen Preis ist eine mögliche Alternative, wenn die Haltefrage positiv ausfällt und das Risiko passt. Eine spätere Pause oder ein Pullback lässt sich dann separat als Zusatzsetup prüfen. Die kleine Position ist nicht dafür da, einen unsicheren Trade schönzureden.",
      "Beide Wege kosten etwas: Sofort einsteigen kann eine Korrektur erwischen; Abwarten kann die Fortsetzung verpassen. Entscheide anhand des aktuellen Trends und deines Plans. Der Ärger über den vergangenen Einstieg darf weder die Menge aufblasen noch ein neues Risikolimit erfinden."
    ],
    "callout": "Zwischen Hinterherjagen und endlosem Warten liegt eine begrenzte, geplante Teilnahme.",
    "takeaways": [
      "Kosten des Wartens erkennen.",
      "Kleine Teilnahme nur mit Plan prüfen.",
      "Verpassten Gewinn nicht zurückfordern."
    ],
    "prompt": "Warum kann ausschließliches Warten auf einen tiefen Pullback im starken Trend scheitern?",
    "answers": [
      "Weil die erwartete Korrektur nicht kommen muss.",
      "Weil starke Trends niemals korrigieren.",
      "Weil jeder Marktpreis risikolos ist."
    ],
    "correct": 0
  },
  {
    "number": 8,
    "title": "Ein gescheiterter Ausbruch kann den Start verändern",
    "summary": "Der Übungsfall beginnt mit einer schwachen Vorgeschichte und einem möglichen Verkaufssignal nahe einer früheren Hochzone.",
    "section": "Chartfall · Eröffnung",
    "scenario": "c11-failed-bear",
    "paragraphs": [
      "Der Übungsfall beginnt mit einer schwachen Vorgeschichte und einem möglichen Verkaufssignal nahe einer früheren Hochzone. Eine bärische Fortsetzung ist dadurch erst mal nachvollziehbar. Entscheidend ist aber, ob die Verkäufer ihr Signal wirklich durchsetzen können.",
      "Scheitert der erneute Versuch nach unten und folgt eine kräftige bullische Umkehr, ändern sich die Informationen. Eine Zwei-Bar-Umkehr schaut auf die Reaktion über zwei benachbarte Bars: Der Abwärtsdruck wird zurückgenommen und die Käufer schließen kräftig dagegen. So kann der Markt von einer bärischen Ausgangsidee zu einem bullischen Trendstart wechseln.",
      "Das eigene Schaubild zeigt diese Logik mit frei erfundenen Preisen. Für die Entscheidung beobachtest du erst den Fehlschlag, dann die Umkehr und danach den Käuferanschluss. Ein alter bärischer Eindruck darf die neu sichtbaren Bars nicht ausblenden; die Umkehr allein beweist aber noch keinen ganzen Trendtag."
    ],
    "callout": "Nicht das erste mögliche Setup zählt, sondern wie gut es sich tatsächlich durchsetzt.",
    "takeaways": [
      "Bärische Ausgangsidee erkennen.",
      "Fehlschlag und Umkehr beobachten.",
      "Anschluss vor Tagesprognose prüfen."
    ],
    "prompt": "Ein zweiter Verkaufsversuch scheitert, Käufer kehren stark zurück. Was muss sich ändern?",
    "answers": [
      "Die Menge muss automatisch verdoppelt werden.",
      "Die Markteinschätzung muss die neue Käuferreaktion einbeziehen.",
      "Alle späteren Bullenbars müssen ignoriert werden."
    ],
    "correct": 1
  },
  {
    "number": 9,
    "title": "Ein kleiner Inside-Bar kann eine große Rolle haben",
    "summary": "Nach einer kräftigen bullischen Umkehr kann ein kleiner Inside-Bar folgen: Sein Hoch liegt unter dem vorherigen Hoch, sein Tief über dem vorherigen Tief.",
    "section": "Chartfall · Signal",
    "scenario": "c11-inside-signal",
    "paragraphs": [
      "Nach einer kräftigen bullischen Umkehr kann ein kleiner Inside-Bar folgen: Sein Hoch liegt unter dem vorherigen Hoch, sein Tief über dem vorherigen Tief. Die geringere Spanne zeigt erst mal nur eine Pause innerhalb des Vorgängerbars.",
      "Ein bullischer Schluss in dieser kleinen Pause kann am richtigen Ort als Signal für die Wiederaufnahme dienen. Der Markt hat gerade einen gescheiterten Abwärtsversuch zurückgekauft; ein späterer Ausbruch über den Signal-Bar prüft, ob weitere Käufer dazukommen. Die Bedeutung stammt aus Vorgeschichte und Auslösung, nicht aus der kleinen Form allein.",
      "Der Stop bleibt Teil derselben Idee. Wer den frühen Trigger verpasst, kann das frühere Signalgebiet als Referenz für die spätere Haltefrage nutzen, ohne den heutigen Einstieg mit dem damaligen Preis zu verwechseln. Ein Inside-Bar mitten in einer überlappenden Range wäre eine andere Ausgangslage."
    ],
    "callout": "Kleine Spanne, große Kontextrolle: Die Vorgeschichte gibt dem Signal Gewicht.",
    "takeaways": [
      "Inside-Bar über Hoch und Tief definieren.",
      "Umkehr davor und Anschluss danach lesen.",
      "Signalreferenz von heutigem Einstieg trennen."
    ],
    "prompt": "Was macht den kleinen Inside-Bar hier interessant?",
    "answers": [
      "Jeder Inside-Bar garantiert einen Trend.",
      "Seine Größe allein.",
      "Die vorausgehende Umkehr und eine spätere bullische Auslösung."
    ],
    "correct": 2
  },
  {
    "number": 10,
    "title": "Wenn du erst mitten im Anstieg auf den Chart schaust",
    "summary": "Stell dir vor, du siehst den Chart erst nach mehreren Bullenbars.",
    "section": "Chartfall · Späte Teilnahme",
    "scenario": "c11-late-arrival",
    "paragraphs": [
      "Stell dir vor, du siehst den Chart erst nach mehreren Bullenbars. Der frühe Signal-Bar ist schon ausgelöst und der Trend hat Raum gewonnen. Genau diese Situation behandelt der Chartfall: Die erste Chance fehlt, die Halteidee kann trotzdem noch bestehen.",
      "Du rekonstruierst keine perfekte Vergangenheit, sondern einen realistischen Plan: Welchen Anteil hättest du noch gehalten, und wo läge dessen inzwischen nachgezogener Stop? Für einen neuen Einstieg zählen der jetzt handelbare Preis und dieser heutige Stop. Ein Stop nahe dem alten Einstieg kann für einen späten Kauf trotzdem weit entfernt sein.",
      "Reicht das geplante Budget nur für eine kleine Position, bleibt es dabei. Liegt der Kurs schon im möglichen Klimax oder ist die Struktur inzwischen schwächer, kann die Haltefrage negativ ausfallen. Späte Teilnahme entsteht aus aktueller Qualität, nicht aus dem Wunsch, doch noch rechtzeitig gewesen zu sein."
    ],
    "callout": "Ein Stop nahe dem alten Einstieg ist für den neuen Einstieg nicht automatisch ein enger Stop.",
    "takeaways": [
      "Realistischen verbleibenden Anteil rekonstruieren.",
      "Aktuellen Abstand neu berechnen.",
      "Schwächere Struktur darf zum Auslassen führen."
    ],
    "prompt": "Warum kann ein Stop am früheren Einstieg für den späten Käufer trotzdem weit sein?",
    "answers": [
      "Weil der aktuelle Kaufpreis inzwischen deutlich darüber liegen kann.",
      "Weil alte Preise ihre Bedeutung verlieren müssen.",
      "Weil ein Stop oberhalb des aktuellen Long-Einstiegs liegen muss."
    ],
    "correct": 0
  },
  {
    "number": 11,
    "title": "Aufstocken ist eine neue Risikoentscheidung",
    "summary": "Eine kleine Trendposition kann später eine Pause oder einen Pullback erleben.",
    "section": "Chartfall · Ergänzen",
    "scenario": "c11-add-position",
    "paragraphs": [
      "Eine kleine Trendposition kann später eine Pause oder einen Pullback erleben. Ein neues bullisches Signal kann dann eine Ergänzung möglich machen. Die zweite Order braucht genauso eine Auslösung und einen Schutz wie die erste; sie ist kein Automatismus nach jedem roten Bar.",
      "Im Übungsablauf wird nach einem späteren Pullback-Signal aufgestockt und der Stop für die gesamte Position unter dessen Tief nachgezogen. Dieser höhere Stop kann den Rücklauf vom aktuellen Kurs begrenzen. Du darfst ihn aber nicht allein deshalb wählen, weil das Geldrisiko mit der zusätzlichen Menge sonst zu hoch wäre.",
      "Rechne nach jeder Ergänzung die gesamte Position neu. Bei mehreren Einstiegen zählen die einzelnen Mengen und Preise; ein gewichteter Durchschnitt kann beim Prüfen helfen. Gesamtmenge, gemeinsamer Stop, Kosten und mögliche schlechtere Ausführung müssen weiterhin in den Plan passen."
    ],
    "callout": "Neue Menge und neuer Stop werden gemeinsam geprüft.",
    "takeaways": [
      "Ergänzung braucht ein eigenes Setup.",
      "Gesamtposition statt Zusatzorder allein rechnen.",
      "Stop nach Struktur und Plan setzen."
    ],
    "prompt": "Was muss vor einer Zusatzorder geprüft werden?",
    "answers": [
      "Nur der Gewinn der ersten Position.",
      "Setup und Risiko der gesamten Position nach der Ergänzung.",
      "Ob die Zusatzorder den alten Einstieg nachträglich billiger macht."
    ],
    "correct": 1
  },
  {
    "number": 12,
    "title": "Ein enger Kanal zeigt mehr als steigende Preise",
    "summary": "Ein Aufwärtskanal mit kleinen Rückläufen und wenig Überlappung lässt den Verkäufern kaum längere Gegenbewegungen durchgehen.",
    "section": "Vertiefung · Trendstärke",
    "scenario": "c11-tight-channel",
    "paragraphs": [
      "Ein Aufwärtskanal mit kleinen Rückläufen und wenig Überlappung lässt den Verkäufern kaum längere Gegenbewegungen durchgehen. In so einem Verlauf entstehen höhere Preise nicht durch einen einzelnen großen Bar, sondern durch die wiederholte Kontrolle der Käufer.",
      "Bricht später die Trendlinie, ist das eine relevante Veränderung. Trotzdem ist eine erste Verletzung nach außergewöhnlich engem Verlauf nicht automatisch der Start eines Bärentrends. Die Vorgeschichte kann weiterhin einen erneuten Test der Hochzone begünstigen, bevor eine größere Korrektur kommt.",
      "Du hältst deshalb zwei Beobachtungen gleichzeitig fest: Die Käufer waren stark, und die unmittelbare Ordnung ist jetzt gestört. Das rechtfertigt weder blindes Weiterkaufen noch ein sofortiges Short-Signal. Für einen neuen Einstieg brauchst du eine neue Auslösung; für eine alte Position bleibt der festgelegte Schutz verbindlich."
    ],
    "callout": "Linienbruch und neue Trendrichtung sind zwei verschiedene Aussagen.",
    "takeaways": [
      "Enge Rückläufe als Stärke lesen.",
      "Linienbruch als Veränderung ernst nehmen.",
      "Hochtest und Trendwechsel unterscheiden."
    ],
    "prompt": "Was beweist der erste Trendlinienbruch nach einem sehr engen Bullenkanal?",
    "answers": [
      "Dass ein Bärentrend garantiert begonnen hat.",
      "Dass jeder Stop entfernt werden darf.",
      "Dass die bisherige Ordnung gestört ist, während die weitere Richtung noch geprüft wird."
    ],
    "correct": 2
  },
  {
    "number": 13,
    "title": "Der erste Abstand zum Durchschnitt ist kein gewöhnlicher Rücklauf",
    "summary": "Ein gleitender Durchschnitt glättet frühere Kurse.",
    "section": "Vertiefung · Durchschnitt",
    "scenario": "c11-ma-gap",
    "paragraphs": [
      "Ein gleitender Durchschnitt glättet frühere Kurse. Läuft ein Bullenmarkt lange oberhalb dieser Linie, kann eine spätere Korrektur zum ersten Mal einen ganzen Bar darunter bilden. Zwischen dessen Hoch und der Durchschnittslinie liegt dann Abstand; das ist mehr als ein kurzer Stich durch die Linie.",
      "Ein solcher Moving-Average-Gap-Bar kann nach einer Trendlinienverletzung zu einem erneuten Test des bisherigen Hochs führen. Danach wäre auch eine größere oder komplexere Korrektur denkbar. Die Linie sagt nicht selbst voraus, welcher Weg folgt: Der vorausgegangene Trend und die Bars der Gegenbewegung gehören mit zur Einordnung.",
      "Im vertieften Chartfall stehen ein sehr enger Anstieg und ein lange ausgebliebener Kontakt zum Durchschnitt dieser normalen Korrekturidee gegenüber. Genau diese Kombination verhindert, dass du ein einzelnes Merkmal isoliert behandelst. Das Schaubild trennt einen bloßen Kontakt von einem Bar, der ganz unter der Linie liegt."
    ],
    "callout": "Erst genau beschreiben, was Abstand hat: ein einzelner Preis oder der ganze Bar.",
    "takeaways": [
      "Durchschnitt als Referenz verstehen.",
      "Berührung und vollständigen Abstand trennen.",
      "Vorgeschichte in die Erwartung einbeziehen."
    ],
    "prompt": "Welcher Bullen-Rücklauf zeigt einen ganzen Bar unter dem Durchschnitt?",
    "answers": [
      "Auch sein Hoch bleibt unter der Durchschnittslinie.",
      "Nur sein Tief sticht unter die Linie.",
      "Nur sein Eröffnungspreis liegt darüber."
    ],
    "correct": 0
  },
  {
    "number": 14,
    "title": "Lange ohne Durchschnittskontakt: der 20-Gap-Rücklauf",
    "summary": "Ein 20-Gap-Rücklauf ist in diesem Modell die erste Rückkehr zum gleitenden Durchschnitt nach mindestens etwa zwanzig Bars ohne Kontakt.",
    "section": "Vertiefung · Langer Abstand",
    "scenario": "c11-twenty-gap",
    "paragraphs": [
      "Ein 20-Gap-Rücklauf ist in diesem Modell die erste Rückkehr zum gleitenden Durchschnitt nach mindestens etwa zwanzig Bars ohne Kontakt. Im Bullenfall lagen die Tiefs dieser Bars über der Linie; im Bärenfall lagen ihre Hochs darunter. Die Zahl beschreibt die vorausgegangene Abwesenheit, nicht zwanzig neue Einstiegssignale.",
      "Erreicht der Markt nach so einer Rückkehr ein neues Hoch, folgt häufig noch einmal ein Pullback mit erneutem Hochtest. Das ist eine qualitative Erwartung aus dem betrachteten Modell, keine feste Wahrscheinlichkeit und kein Muss. Sie hilft dir, einen ersten Kontakt nach langem Trend von einem gewöhnlichen Durchschnittsrücklauf zu unterscheiden.",
      "Im Chartfall fallen der lange Abstand und ein Gap-Bar unter dem Durchschnitt zusammen. Der starke Vortrend kann deshalb mehr Gewicht haben als die einfache Annahme einer sofort größeren Korrektur. Prüf die tatsächliche Käuferreaktion nach dem Kontakt; ohne sie bleibt die Fortsetzung nur eine Möglichkeit."
    ],
    "callout": "Zwanzig Bars ohne Kontakt beschreiben die Vorgeschichte, keine Gewissheit.",
    "takeaways": [
      "Kontaktfreie Bars korrekt zählen.",
      "Ersten Rücklauf als besonderen Kontext lesen.",
      "Erneuten Hochtest nur als Möglichkeit behandeln."
    ],
    "prompt": "Was beschreibt „20-Gap“ hier?",
    "answers": [
      "Einen vorgeschriebenen Stop von zwanzig Ticks.",
      "Viele Bars ohne Durchschnittskontakt vor der ersten Rückkehr.",
      "Zwanzig aufeinanderfolgende sichere Gewinne."
    ],
    "correct": 1
  },
  {
    "number": 15,
    "title": "Ein enger Fünf-Minuten-Kanal kann oben ein Spike sein",
    "summary": "Viele kleine Fünf-Minuten-Bars können auf einer größeren Zeitebene zu wenigen kräftigen Bullenbars zusammenfallen.",
    "section": "Vertiefung · Zeitebenen",
    "scenario": "c11-higher-timeframe",
    "paragraphs": [
      "Viele kleine Fünf-Minuten-Bars können auf einer größeren Zeitebene zu wenigen kräftigen Bullenbars zusammenfallen. Der enge Kanal im Arbeitschart wirkt dort wie ein gerichteter Impuls, also ein Spike. Das erklärt, warum eine kleine Korrektur auf der unteren Ebene das größere Bild noch nicht zwingend dreht.",
      "Nach so einem Impuls kann auf der größeren Ebene erst ein Kanal entstehen. Der kleinere Chart kann in der Zwischenzeit neue Hochtests und Pullbacks zeigen. Diese Deutung passt zur starken Vorgeschichte des Übungsfalls; sie ersetzt aber nicht die tatsächlich beobachteten Folgebars und garantiert keine bestimmte Tagesform.",
      "Bleib bei deiner festgelegten Arbeitsebene für Auslösung und Risiko. Die größere Ebene erklärt den Kontext, sie darf aber keinen bereits erreichten Stop nachträglich entschuldigen. Ein möglicher Kanal oben ist kein Grund, eine verlierende Position unten ohne Grenze weiterzuhalten."
    ],
    "callout": "Die größere Ebene erklärt den Kontext; der Ausführungsplan begrenzt das Risiko.",
    "takeaways": [
      "Zusammenfassung kleiner Bars verstehen.",
      "Spike und späteren Kanal als mögliche Folge lesen.",
      "Zeitebenen nicht zur Stop-Ausrede nutzen."
    ],
    "prompt": "Welche Verwendung der größeren Zeitebene passt zur Lektion?",
    "answers": [
      "Jeden Stop im Arbeitschart nachträglich ignorieren.",
      "Einen garantierten Trendtag vorhersagen.",
      "Die Stärke einordnen, während Auslösung und Risikogrenze verbindlich bleiben."
    ],
    "correct": 2
  },
  {
    "number": 16,
    "title": "Dein Ablauf für einen verpassten Einstieg",
    "summary": "Fang bei der aktuellen Marktseite an: Ist der Verlauf klar genug für eine Trendidee, oder siehst du vor allem Überlappung und wechselnden Druck? Prüf danach die hypothetische Restposition: Würdest du sie heute mit einem konkreten Stop noch halten? Wenn nicht, ist der verpasste Einstieg kein Argument für die neue Order..",
    "section": "Abschluss · Entscheidung",
    "scenario": "c11-checklist",
    "paragraphs": [
      "Fang bei der aktuellen Marktseite an: Ist der Verlauf klar genug für eine Trendidee, oder siehst du vor allem Überlappung und wechselnden Druck? Prüf danach die hypothetische Restposition: Würdest du sie heute mit einem konkreten Stop noch halten? Wenn nicht, ist der verpasste Einstieg kein Argument für die neue Order.",
      "Fällt die Haltefrage positiv aus, misst du den Abstand vom jetzt handelbaren Preis zum Stop und leitest daraus eine tragbare Menge ab. Sie orientiert sich höchstens am geplanten Trendrest, nicht am Ärger über versäumte Gewinne. Eine mögliche Klimaxbeschleunigung, fehlender Raum oder eine zu große Mindestposition können den Trade trotzdem ausschließen.",
      "Nach einer Teilnahme bleibt jede Ergänzung eine eigene Entscheidung. Du prüfst Setup und Gesamtrisiko erneut, ziehst Stops nur nach Plan nach und beurteilst neue Gegenreaktionen. Am Ende notierst du, ob deine Entscheidung durch aktuelle Belege getragen war oder durch den Wunsch, die Vergangenheit zu reparieren."
    ],
    "callout": "Richtung → Haltefrage → Stop-Abstand → Menge → aktuelle Auslösung oder Abwarten.",
    "takeaways": [
      "Aktuelle Qualität vor verpasstem Preis.",
      "Risiko vor Order und vor Ergänzung.",
      "Entscheidung ohne spätere Bars beurteilen."
    ],
    "prompt": "Der Trend ist klar, aber schon die kleinste handelbare Menge überschreitet dein Risikolimit. Was folgt?",
    "answers": [
      "Der Stop wird ohne strukturellen Grund enger gesetzt.",
      "Die verpasste Chance erlaubt eine Ausnahme.",
      "Dieser Einstieg entfällt bei diesem Risikolimit."
    ],
    "correct": 2
  }
];

export const chapterElevenLessons: Lesson[] = drafts.map((d) => {
  const number = String(d.number).padStart(2, '0');
  const key = `chapter-11-${number}`;
  return {
    id: `price-action-trends.chapter-11.lesson-${number}`,
    title: d.title, summary: d.summary,
    sourceUnit: `Kapitel 11 · ${d.section}`,
    sourceAnchors: [`Kapitel 11 · ${d.section}`, d.title, d.takeaways[0]],
    durationMinutes: 8, xp: 45, status: 'published',
    steps: [
      { id: `${key}-explain`, type: 'explanation', eyebrow: 'Kapitel 11 · Späte Einstiege',
        title: d.title, paragraphs: d.paragraphs, callout: d.callout },
      { id: `${key}-diagram`, type: 'diagram', title: d.title,
        scenario: d.scenario,
        caption: 'Eigenes schematisches Beispiel mit erfundenen relativen Preisen. Keine realen Kurse oder Handelssignale.',
        observations: d.takeaways },
      { id: `${key}-question`, type: 'question', title: 'Die aktuelle Entscheidung prüfen',
        prompt: d.prompt, correctOptionId: `choice-${d.correct}`,
        options: d.answers.map((label, index) => ({ id: `choice-${index}`, label,
          explanation: index === d.correct ? `Richtig. ${d.callout}` : `Prüfe noch einmal: ${d.callout}` })), },
      { id: `${key}-recap`, type: 'recap', title: 'Das nimmst du mit', points: d.takeaways },
    ],
  };
});
