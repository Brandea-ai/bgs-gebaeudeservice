# Antworten auf die Rückfragen, Runde 6

**Stand 26.09.2026.** Grundlage ist der Export des Fragebogens vom 26.09.2026, 15:05:05 UTC (Schema `bgs-rueckfragen/v6`). 8 von 8 Fragen beantwortet, eine Notiz, eine globale Notiz.

| ID | Antwort | Folge |
|---|---|---|
| START | Schritt «Start» stimmt | Bestätigt, bleibt |
| PREIS | «Einen Preis nennen wir erst, wenn wir Ihr Objekt gesehen haben» bleibt | Bestätigt, bleibt |
| KURZFRIST | Frage zu kurzfristigen Einsätzen bleibt | Bestätigt, bleibt |
| REIHENFOLGE | Kernleistungen zuerst auf der Startseite | Bestätigt (M39) |
| ZAHLEN | Der Kunde hat «seit 2006», «über 120 Kunden» und «über 50 Mitarbeitende» schriftlich bestätigt | E58. Beleg liegt bei Brandea, nicht im Repository (keine Kundendokumente in der Analyse) |
| KIBILD | KI-Satz im Impressum entfernen, bis echte Bilder kommen. Notiz: «bitte benutzt Placeholder für die Build Container» | E59. Gelesen als «Bild-Container»: Bildflächen bleiben als Platzhalter stehen, statt sie zu entfernen. Der im letzten Block entfernte Bildplatz auf Über uns kommt als Platzhalter zurück |
| LIVE | Der Agent pusht die neuen Seiten nach `main` | E57 |
| NEXT | Nächster Block: Impressum und Datenschutz | E60 |

**Globale Notiz:** Jede Seite einzeln durchgehen, mit einer Checkliste, in der jede erledigte Seite angekreuzt wird. Umgesetzt als `18-SEITEN-CHECKLISTE.md` (E61).

## Entscheidungen

- **E57 · Neue Seiten in die Produktion (26.09.2026):** Der Arbeits-Branch mit `b1c7acf` geht nach `main`, weiter ohne `NEW_BRAND` und mit `noindex`.
- **E58 · Kennzahlen belegt:** «Seit 2006», «über 120 Kunden», «über 50 Mitarbeitende» sind laut Brandea schriftlich vom Kunden bestätigt. Der Hinweis auf das Register (Zweck Reinigung seit 2012, N037) ist damit kein Hindernis mehr.
- **E59 · Bildflächen als Platzhalter:** Kein KI-Hinweis im Impressum, solange keine KI-Bilder erscheinen. Bildflächen bleiben als neutrale Platzhalter im Layout, bis echte Bilder freigegeben sind (E19).
- **E60 · Nächster Block Rechtstexte:** Impressum und Datenschutz nach Schweizer Recht, ohne «ß».
- **E61 · Seiten-Checkliste:** Jede Seite wird einzeln abgearbeitet und in `18-SEITEN-CHECKLISTE.md` angekreuzt.
