export const scaleDescriptions={
 'rc8-doubling':'Eigene Sora-Schlüsse15,30,60,120 Euro je Aktie in vier gleich langen Abschnitten. Links lineare, rechts reine logarithmische Preisachse; beide Grenzen15 bis120 und gleiche Zeichenhöhe. Euro-Zuwächse15/30/60, Preisfaktor jeweils2. Logarithmisch gleiche Schritte, linear wachsende Schritte. Nur Schlüsse, keine Zwischenfolge oder Mengen.',
 'rc8-additive':'Getrennte eigene Schlussfolge15,30,45,60 Euro je Aktie. Links linear, rechts logarithmisch, gleicher Preisbereich15 bis60 und gleiche Höhe. Dreimal+15 Euro; Faktoren2,1,5,4/3. Linear gleiche Bildschritte, logarithmisch kleiner werdende Schritte.',
 'rc8-candles':'Zwei eigene OHLC-Kerzen auf linearer und logarithmischer Skala mit gleichen Grenzen12 bis120 Euro. A:O15/H30/L12/C24; B:O60/H120/L48/C96. Körper9 und36 Euro, aber gleicher Faktor1,6. Logarithmisch gleiche Körperhöhe. Originalwerte unverändert; Mengen und Einzelgeschäftsfolge nicht vorgegeben.',
} as const;
