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
  }
];
