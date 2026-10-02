import type { GlossaryEntry } from '../../glossary';
export const ordersGlossary: GlossaryEntry[] = [
  {
    "term": "Order",
    "definition": "Eine Anweisung für einen Handel. Sie nennt Produkt, Seite, Menge und weitere Bedingungen.",
    "aliases": [
      "Auftrag"
    ],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Position",
    "definition": "Ein bestehender Bestand oder Vertrag. Eine noch offene Order ist keine zusätzliche Position.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Limit",
    "definition": "Eine Preisgrenze. Beim Kauf ist sie der höchste, beim Verkauf der niedrigste akzeptierte Stückpreis.",
    "aliases": [
      "Preisgrenze"
    ],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Market-Order",
    "definition": "Ein Auftrag ohne eigene Preisgrenze, der zu verfügbaren Angeboten handeln soll. Preis und vollständige Ausführung sind nicht garantiert.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Gültigkeit",
    "definition": "Die Regel, wie lange ein Auftrag bestehen darf. Das genaue Ende hängt von Produkt und Anbieter ab.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Teilausführung",
    "definition": "Nur ein Teil der gewünschten Menge wurde gehandelt. Ob der Rest offen bleibt, hängt von den Auftragsregeln ab.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Ausführungsbericht",
    "definition": "Eine Meldung über tatsächlich gehandelte Menge, Preis und Zeitpunkt. Sie ist etwas anderes als eine Vorschau.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Stornierung",
    "definition": "Das Zurücknehmen eines noch offenen Auftrags oder Restes. Eine Anfrage allein ist noch keine bestätigte Löschung.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Auftragskennung",
    "definition": "Ein Merkmal, mit dem Meldungen dem richtigen Auftrag zugeordnet werden können.",
    "aliases": [
      "Order-ID"
    ],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Routing",
    "definition": "Die Weiterleitung eines Auftrags auf einen vorgesehenen Handelsweg.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Gewichteter Durchschnittspreis",
    "definition": "Der gesamte Ausführungswert geteilt durch die ausgeführte Menge. Größere Teilmengen wirken stärker auf den Durchschnitt.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Offener Rest",
    "definition": "Die noch nicht ausgeführte und weiterhin aktive Menge einer Order.",
    "aliases": [],
    "firstUnit": "Kapitel 1"
  },
  {
    "term": "Geldkurs",
    "definition": "Das beste gemeldete Kaufangebot einer betrachteten Quelle und Zeit. Ein sofortiger Verkäufer braucht diese Seite.",
    "aliases": [
      "Bid"
    ],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Briefkurs",
    "definition": "Das beste gemeldete Verkaufsangebot einer betrachteten Quelle und Zeit. Ein sofortiger Käufer braucht diese Seite.",
    "aliases": [
      "Ask"
    ],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Spread",
    "definition": "Die Spanne zwischen bestem Verkaufsangebot und bestem Kaufangebot. Eine enge Spanne sagt noch nicht, wie viel auf diesen Stufen verfügbar ist.",
    "aliases": [
      "Geld-Brief-Spanne"
    ],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Preisstufe",
    "definition": "Ein Preis im Orderbuch mit der dazu gemeldeten Menge.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Markttiefe",
    "definition": "Die gemeldeten Mengen auf mehreren Preisstufen einer Buchseite. Die Anzeige ist eine Momentaufnahme.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Slippage",
    "definition": "Die Abweichung der tatsächlichen Ausführung von einem ausdrücklich genannten Vergleichspreis. Zeitpunkt, Menge und Richtung gehören zum Vergleich.",
    "aliases": [
      "Preisabweichung"
    ],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Vergleichspreis",
    "definition": "Der Preis, gegen den du eine Ausführung prüfst. Seine Quelle und sein Zeitpunkt müssen bekannt sein.",
    "aliases": [
      "Preisreferenz"
    ],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Systemschutzgrenze",
    "definition": "Eine Grenze nach Anbieter- oder Handelsplatzregeln, die eine Ausführung beschränken kann. Sie ist keine selbst gesetzte Limitanweisung.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Kontobelastung",
    "definition": "Der Geldbetrag, der für den Kauf und seine zusätzlichen Kosten vom Konto abgezogen wird. Enthaltene Kosten dürfen nicht doppelt gerechnet werden.",
    "aliases": [],
    "firstUnit": "Kapitel 2"
  },
  {
    "term": "Limit-Order",
    "definition": "Ein Auftrag mit Preisgrenze. Käufe dürfen höchstens, Verkäufe mindestens zum Limitpreis ausgeführt werden. Eine Ausführung ist nicht garantiert.",
    "aliases": [],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Ruhender Auftrag",
    "definition": "Ein angenommener Auftrag, der auf passende Gegenaufträge wartet. Er kann später handeln oder nach seinen Regeln enden.",
    "aliases": [],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Sofort ausführbares Limit",
    "definition": "Ein Limit, das bei Ankunft passende vorhandene Gegenangebote innerhalb seiner Preisgrenze annehmen kann.",
    "aliases": [
      "Marketable Limit"
    ],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Preisvorrang",
    "definition": "Eine Ausführungsregel, die günstigere Gegenangebote zuerst berücksichtigt: höhere Kaufgebote oder niedrigere Verkaufsangebote.",
    "aliases": [
      "Preispriorität"
    ],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Zeitvorrang",
    "definition": "Eine Regel, die bei gleichem Preis früher angenommene Aufträge zuerst berücksichtigt. Ob sie gilt, hängt vom Handelsplatz ab.",
    "aliases": [
      "Zeitpriorität"
    ],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Wartemenge",
    "definition": "Die bekannte Stückmenge vor deinem Auftrag unter den genannten Zuteilungsregeln. Sie sagt nicht, wie viele Minuten du wartest.",
    "aliases": [],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Zuteilung",
    "definition": "Der Anteil einer verfügbaren Gegenmenge, der deinem Auftrag tatsächlich zugeordnet wird.",
    "aliases": [],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Aggregierte Menge",
    "definition": "Die zusammengezählte Menge mehrerer Aufträge auf einer Preisstufe. Sie verrät allein keine einzelnen Annahmezeiten.",
    "aliases": [],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Proportionale Zuteilung",
    "definition": "Eine Verteilung nach Mengenanteilen. Reale Systeme können zusätzliche Vorrang- und Rundungsregeln haben.",
    "aliases": [],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Tick",
    "definition": "Der erlaubte Preisschritt eines Produkts. Die konkrete Schrittweite muss aus den Produktregeln hervorgehen.",
    "aliases": [
      "Preisschritt"
    ],
    "firstUnit": "Kapitel 3"
  },
  {
    "term": "Stoppreis",
    "definition": "Die Schwelle einer ausdrücklich festgelegten Auslösebedingung. Sie ist kein garantierter Ausführungspreis.",
    "aliases": [],
    "firstUnit": "Kapitel 4"
  },
  {
    "term": "Stop-Market-Order",
    "definition": "Ein bedingter Auftrag, der nach Auslösung eine Market-Order aktiviert. Die tatsächlichen Ausführungen können vom Stoppreis abweichen.",
    "aliases": [
      "Stop-Order"
    ],
    "firstUnit": "Kapitel 4"
  },
  {
    "term": "Stop-Limit-Order",
    "definition": "Ein bedingter Auftrag, der nach Auslösung eine Limitorder aktiviert. Die Grenze kann eine vollständige Ausführung verhindern.",
    "aliases": [],
    "firstUnit": "Kapitel 4"
  },
  {
    "term": "Auslösequelle",
    "definition": "Die festgelegten Preisdaten oder Ereignisse, anhand derer ein System die Bedingung eines Auftrags prüft.",
    "aliases": [
      "Triggerquelle"
    ],
    "firstUnit": "Kapitel 4"
  },
  {
    "term": "Auslösung",
    "definition": "Das Erfüllen einer überwachten Bedingung, durch das eine Folgeorder aktiviert wird. Es ist noch keine Bestätigung einer Ausführung.",
    "aliases": [
      "Trigger"
    ],
    "firstUnit": "Kapitel 4"
  },
  {
    "term": "Folgeorder",
    "definition": "Die Order, die nach Erfüllung einer Bedingung aktiv wird. Ihre eigenen Preis-, Mengen- und Zeitregeln gelten weiter.",
    "aliases": [],
    "firstUnit": "Kapitel 4"
  },
  {
    "term": "Restbestand",
    "definition": "Der nach den bestätigten Ausführungen noch gehaltene Bestand. Eine offene Order ist etwas anderes als dieser Bestand.",
    "aliases": [],
    "firstUnit": "Kapitel 4"
  },
  {
    "term": "Preissprung",
    "definition": "In einem beschriebenen Ablauf liegt der nächste Preis deutlich vom vorherigen entfernt. Eine übersprungene Schwelle kann trotzdem auslösen.",
    "aliases": [],
    "firstUnit": "Kapitel 4"
  },
  {
    "term": "Überwachungsort",
    "definition": "Das System, das eine bedingte Anweisung hält und ihre Auslösung prüft. Sein Verhalten bei Verbindungsproblemen muss bekannt sein.",
    "aliases": [],
    "firstUnit": "Kapitel 4"
  },
  {
    "term": "Tagesorder",
    "definition": "Ein Auftrag bis zur festgelegten Tages- oder Sessiongrenze. Bereits ausgeführte Mengen werden durch den Ablauf nicht rückgängig gemacht.",
    "aliases": [
      "DAY"
    ],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "GTC",
    "definition": "Good Til Canceled: ein Auftrag, der über die aktuelle Session hinaus bestehen kann. Anbieterbedingungen können Höchstdauer und Löschereignisse festlegen.",
    "aliases": [
      "Bis auf Widerruf"
    ],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "GTD",
    "definition": "Good Til Date: ein Auftrag bis zu einem festgelegten Termin. Datum, Uhrzeit und Zeitzone müssen eindeutig sein.",
    "aliases": [],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "IOC",
    "definition": "Immediate or Cancel: sofort zulässige Menge handeln und den nicht ausgeführten Rest löschen. Teilausführungen sind möglich.",
    "aliases": [],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "FOK",
    "definition": "Fill or Kill: die gesamte gewünschte Menge sofort innerhalb der Bedingungen handeln oder gar nichts ausführen.",
    "aliases": [],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "AON",
    "definition": "All or None: keine Teilausführung zulassen. Die Gültigkeit und erlaubte Wartezeit sind zusätzliche Bedingungen.",
    "aliases": [
      "Alles oder nichts"
    ],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "Mindestmenge",
    "definition": "Eine festgelegte untere Stückzahl für eine zulässige Ausführung. Es muss klar sein, für welche Verarbeitungsschritte die Bedingung gilt.",
    "aliases": [],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "Ablauf",
    "definition": "Ein Auftrag oder sein offener Rest endet nach seiner Gültigkeitsregel. Bereits abgeschlossene Ausführungen bleiben bestehen.",
    "aliases": [],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "Mengenbilanz",
    "definition": "Eine Rechnung, die Wunschmenge, ausgeführte, beendete und noch offene Menge eines Auftrags zusammenführt.",
    "aliases": [],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "Ausführungsphase",
    "definition": "Ein zulässiger Zeitraum oder Marktabschnitt, in dem ein Auftrag tatsächlich handeln darf. Eine längere Gültigkeit erweitert ihn nicht automatisch.",
    "aliases": [],
    "firstUnit": "Kapitel 5"
  },
  {
    "term": "Long-Position",
    "definition": "Ein positiver Bestand im Lernmodell. Bestätigte Verkäufe verkleinern ihn.",
    "aliases": [
      "Long"
    ],
    "firstUnit": "Kapitel 6"
  },
  {
    "term": "Short-Position",
    "definition": "Eine offene Verkaufsverpflichtung, im Lernmodell als negative Position angezeigt. Bestätigte Rückkäufe verkleinern sie.",
    "aliases": [
      "Short"
    ],
    "firstUnit": "Kapitel 6"
  },
  {
    "term": "OCO",
    "definition": "Verknüpfte Orders, bei denen ein festgelegtes Ereignis die Stornierung des anderen Auftrags auslösen soll. Teilmengen und Löschablauf brauchen eigene Regeln.",
    "aliases": [
      "One Cancels Other"
    ],
    "firstUnit": "Kapitel 6"
  },
  {
    "term": "Bracket",
    "definition": "Eine Verbindung aus einem Einstiegsauftrag und vorgesehenen Ausstiegen, meist Ziel und Stop. Die Aktivierung der Ausstiege hängt von der Anbieterregel ab.",
    "aliases": [
      "Bracket-Order"
    ],
    "firstUnit": "Kapitel 6"
  },
  {
    "term": "Parent-Order",
    "definition": "Der übergeordnete Auftrag in einer Verbindung. Im Bracket-Lernfall ist dies der Einstieg.",
    "aliases": [
      "Parent"
    ],
    "firstUnit": "Kapitel 6"
  },
  {
    "term": "Child-Order",
    "definition": "Ein angehängter Auftrag mit eigener Menge und eigenem Status. Seine Aktivierung richtet sich nach der Verbindung zum Parent.",
    "aliases": [
      "Child"
    ],
    "firstUnit": "Kapitel 6"
  },
  {
    "term": "Zielorder",
    "definition": "Ein vorgesehener Ausstieg am Ziel. Im Long-Lernfall ist dies ein Verkaufslimit; die Ausführung ist nicht garantiert.",
    "aliases": [
      "Take-Profit"
    ],
    "firstUnit": "Kapitel 6"
  },
  {
    "term": "Restposition",
    "definition": "Der nach bestätigten Ausführungen verbliebene Bestand oder die verbleibende Verpflichtung. Sie ist von offenen Auftragsmengen zu unterscheiden.",
    "aliases": [],
    "firstUnit": "Kapitel 6"
  },
  {
    "term": "Reduce-only",
    "definition": "Eine anbieterabhängige Bedingung, nach der ein Auftrag eine bestehende Position nur verkleinern soll. Verarbeitung und Restbehandlung müssen genau geprüft werden.",
    "aliases": [],
    "firstUnit": "Kapitel 6"
  },
  {
    "term": "Überausführung",
    "definition": "Mehr ausgeführte Ausstiegsmenge als zur vorgesehenen Schließung nötig. Je nach Kontoregel kann dadurch eine neue Gegenposition entstehen.",
    "aliases": [
      "Overfill"
    ],
    "firstUnit": "Kapitel 6"
  },
];
