# Foto-Briefing

**Stand 26.09.2026.** Nach E19, E59 und E66 zeigen alle Bildflächen «Bild folgt», bis echte Fotos freigegeben sind. Dieses Briefing ist für den Kunden oder einen Fotografen gedacht. Es beschreibt, welche Bilder die Website braucht, wie sie aussehen sollen und was rechtlich zu beachten ist. Entscheid zur Umsetzung: E71.

## 1. Grundsätze

- **Nur echte Fotos:** Keine KI-Bilder, keine Stockfotos mit Personen, die nicht bei BGS arbeiten (E18, E19). Die Bilder sollen zeigen, was Kundinnen und Kunden wirklich erleben.
- **Einwilligung:** Personen nur mit schriftlicher Einwilligung, am besten mit einem kurzen Formular pro Person. Ohne Einwilligung Aufnahmen von hinten, von den Händen oder ohne Personen.
- **Objekte der Kunden:** Nur mit Erlaubnis der Eigentümerin oder Verwaltung. Keine Hausnummern, Namensschilder, Kennzeichen, Bootsnamen oder Flugzeugkennungen im Bild. Bei Premium-Objekten (Villen, Jets, Yachten) im Zweifel nur Details wie Materialien, Hände, Pflegemittel.
- **Arbeitskleidung:** einheitlich, sauber, gut sichtbar. Bis zum neuen Logo (E49) ohne alte Logos oder Aufschriften, die später nicht mehr stimmen.
- **Stil:** natürliches Tageslicht, ruhige Bildsprache, wenig Nachbearbeitung, keine übertriebenen Vorher-nachher-Effekte.

## 2. Liste der Bildflächen

| Nr. | Seite | Fläche | Motiv (Vorschlag) | Format |
|---|---|---|---|---|
| 1 | Startseite | Hintergrund oben, voll breit, mit dunkler Überlagerung | Team bei der Arbeit in einem hellen Treppenhaus oder Büro, Personen eher klein im Bild | Quer, mind. 2400 × 1350 px |
| 2 | Über uns | rechts neben der Überschrift | Team vor dem Sitz in Emmenbrücke oder bei einer Besprechung, nur mit Einwilligung | Quer 4:3, mind. 1600 × 1200 px |
| 3 | Unterhaltsreinigung | oben rechts | Reinigung eines Treppenhauses oder Eingangsbereichs | Quer 16:9, mind. 1200 × 675 px |
| 4 | Büro- und Praxisreinigung | oben rechts | Leeres Büro am Abend, Arbeitsplätze, Teeküche | wie 3 |
| 5 | Sonderreinigungen | oben rechts | Leere Wohnung bei der Endreinigung, Fenster, Küche | wie 3 |
| 6 | Bau- und Bauendreinigung | oben rechts | Neubau vor der Übergabe, Staubentfernung, Glas | wie 3 |
| 7 | Fenster und Fassaden | oben rechts | Fensterreinigung aussen, Glasfassade | wie 3 |
| 8 | Industrie und Hallen | oben rechts | Halle mit Reinigungsmaschine, Sicherheitsausrüstung sichtbar | wie 3 |
| 9 | Hauswartung | oben rechts | Kontrollgang, Waschküche, Umgebung | wie 3 |
| 10 | Aussen- und Grünflächen | oben rechts | Hecke, Rasen, Laub, Wege einer Liegenschaft | wie 3 |
| 11 | Facility Services | oben rechts | Übergabe mit Checkliste, Team mit mehreren Geräten | wie 3 |
| 12 | Luxusimmobilien | oben rechts | Detail: Naturstein, Parkett, Hochglanzfläche bei der Pflege | wie 3 |
| 13 | Privatjet | oben rechts | Detail der Kabine: Leder, Holz, Teppich, ohne Kennung | wie 3 |
| 14 | Yacht | oben rechts | Detail: Teak, Gelcoat, Polster, am Vierwaldstätter- oder Zugersee, ohne Bootsnamen | wie 3 |

Die Leistungsbilder (3 bis 14) erscheinen nur auf Tablet und Computer (E66). Das Startbild (1) liegt unter weisser Schrift, es braucht ruhige, eher dunkle Flächen.

## 3. Lieferung

- Dateien als JPEG in voller Auflösung, sRGB, ohne Wasserzeichen.
- Dateiname nach Nummer und Seite, zum Beispiel `03-unterhaltsreinigung.jpg`.
- Je Bild eine Zeile mit Ort, Datum, abgebildeten Personen (Einwilligung ja oder nein) und Erlaubnis der Objekteigentümer.
- Zu jedem Bild ein kurzer Satz, was darauf zu sehen ist. Daraus entsteht der Alternativtext in vier Sprachen.

## 4. Einbau

Der Agent verkleinert die Bilder, legt sie unter `public/bilder/` ab und trägt sie im Feld `image` der Inhaltsschicht ein (`content/<sprache>/`). Mit `NEXT_PUBLIC_REAL_IMAGES=true` erscheinen sie statt der Platzhalter. Alte KI-Bilder in `public/` werden danach gelöscht (M34).
