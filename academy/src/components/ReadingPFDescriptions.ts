export const pfDescriptions={
 'rc6-columns':'Eigene Nivo-Aufnahme nach G12: vier P&F-Spalten X/O/X/O mit4/4/5/4 Zeichen. Preisstufen in Euro je Aktie auf gleicher linearer Skala; Anker50,00 ohne Zeichen, Kästchengröße0,50, inklusive Drei-Kästchen-Umkehr. Spaltenabstand ist keine Zeitdauer. Letzte Spalte aktuell, Mengen unbekannt.',
 'rc6-threshold':'Zustand nach G12: tiefstes aktuelles O50,50. Nächste O-Fortsetzung ab50,00, nächste X-Spalte ab52,00. Letzter gemeldeter Preis51,50 genügt nicht zur Umkehr. Eigene Rasterregel0,50 mal3, Euro je Aktie.',
 'rc6-methods':'Getrennte Varianten ab bestehender X-Spalte bis52,00, Anker50,00, Kästchen0,50, Umkehr3. Gleiche Original-OHLC52/53/50/52. Schlussmethode bleibt bei X52,00; erklärte Hoch-Tief-Priorität verlängert X bis53,00. Einzelpreisfolge A52,53,50,52 endet mit X52,00; Folge B52,50,53,52 mit X53,00. Keine angenommene universelle Zwischenfolge.',
} as const;
