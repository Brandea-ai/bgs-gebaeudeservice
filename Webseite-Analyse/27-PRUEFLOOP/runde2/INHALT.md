# Welle 3, Inhaltsprüfung Runde 2

Geprüft: unveränderlicher Prüfstand `31b5ce0`, Browser `http://localhost:3352`, vier Sprachen. Die spätere Bildkorrektur `4ec8c9b` wurde zusätzlich im Code gelesen, noch nicht im Browser dieses Prüfstands. Keine Produktdatei geändert, kein Build gestartet, kein Echtversand.

## Urteil

**Alle neun eigenen R1-Inhaltsbefunde sind am integrierten Code behoben.** Die korrigierten Rechts-, Material-, Firmen- und Kostenformulierungen wurden in DE, EN, FR und IT erneut gelesen. Es gibt keine neue bestätigte falsche Fach- oder Sprachbehauptung aus dieser Prüfung.

**Die gesamte Runde ist dennoch keine Nullbefund-Runde:** Die unabhängige UX-Prüfung fand eine neue mittlere Bildzuordnung auf der Industrieseite. Nach Öffnen beider Original-JPGs und Lesen beider Abschnitte bestätige ich diesen Befund als zweiter Skeptiker. Der neue Gehäusewisch-Ausschnitt steht im R2-Build neben Hallenböden. Der inzwischen umgesetzte Tausch ist sachlich stimmig: Industriesauger auf Hallenboden für Abschnitt 1, Gehäusewischen für Maschinen-Aussenflächen in Abschnitt 2. Die Szene war vorher auch für Späne/Industriesauger im Maschinenabschnitt plausibel, also kein pauschal falsches Bild. Der nachgelagerte Browserreadback muss die neue Zuordnung belegen.

Das rechnerische Ziel «Mobil die Länge halbieren» ist auf `/leistungen` noch nicht erreicht. Aktuell: **12.704 px statt 21.491 px im Originalaudit**, also **40,9 % kürzer**. Für die Halbierung fehlen rund 1.959 px. Kompakte Werkzeuge, mobile Abschnittsnavigation, FAQ-Reduktion und Footerklappen funktionieren. Der konkrete Zielabstand bleibt sichtbar und wird nicht als vollständige Zielerfüllung gewertet.

## Die 70 zuvor aktuellen Punkte

Alle 70 Einträge wurden einzeln neu disponiert, einschliesslich der Sammelpunkte:

| Ergebnis | Anzahl |
|---|---:|
| Erledigt durch aktuellen Code und passende Prüfbelege | 47 |
| Produktkorrektur erledigt, verbleibend Kunden-/Abnahmefrage | 15 |
| Weiterhin aktuell | 8 |

Die acht aktuellen IDs sind **O036, O098, O103, O135, O136, O144, O152 und O156**. Sie bündeln nur drei verbleibende Themen: Bildzuordnung nachlesen, numerisches Mobilziel, Abschlussdokumentation. Mehrere IDs sind Wiederholungen der Integratorliste.

Die vollständige aktualisierte Matrix aller 156 Einträge liegt in `offene-punkte-r2.json` und `.md`. Sie bewahrt Originalwortlaut und R1-Entscheidung. Gesamtstand: **81 erledigt, 47 Einträge mit Kundenfragen, 20 Vorschläge, 8 aktuell**. Die 47 Einträge sind wegen der Sammelpunkte keine 47 unabhängigen Fragen. Nicht erneut als offene Pflichtfrage geführt: Erfahrung seit 2006, feste Premium-Teams, bereits bestätigte Abnahmegarantie, bereits vorhandene Datenschutzfelder.

## Quellen- und Sprachregression

`semantic-regression-r2.json` umfasst je Sprache 13 Leistungs-/Premiumseiten und 19 übrige Seiten. Der Vergleich des alten und aktuellen Inhaltsmodells zeigt **keine hinzugekommene oder entfernte Quell-URL**. Die in R1 geöffneten Primärtexte bleiben daher die passende Grundlage; ich habe die geänderten Aussagen erneut daran abgeglichen.

- Yacht: Verbot wassergefährdender Einträge jetzt ohne implizite Ausnahme für kleine Mengen; keine unbestätigte BGS-Verfahrenszusage ergänzt.
- Facility: Kündigungsfristen ausdrücklich nach Ablauf der Probezeit.
- Umzug: Zumutbarkeit, Zahlungsfähigkeit und Übernahme zu gleichen Bedingungen genannt.
- Sonderreinigung: lösbarer Schmutz von bleibenden Verfärbungen getrennt.
- Kostenratgeber: keine Zuschläge ausdrücklich nur im Beispiel werktags tagsüber.
- Firmenangaben: Sitz Emmen, Postadresse Emmenbrücke.
- Premium: feste Zuteilung statt absolut immer dasselbe Team.
- IT: direkte Höflichkeitsansprache Sua; materialbezogener Alt-Text in allen Sprachen weiches Tuch.

Kein Gedankenstrich im aktuellen Inhaltsmodell, kein ß in der deutschen Fassung. Die muttersprachliche Freigabe E72 bleibt eine eigene Abnahme und wird durch diese Regression nicht ersetzt.

## Druck: aktueller Inhalt statt nur alte grüne Seitenzahlen

Die bisherige Serie `vorlage/print-final/manifest.json` besitzt 196 einseitige PDFs. Beim direkten Lesen stellte sich heraus, dass sie noch alte Fachtexte enthielt, etwa die Yacht-Formulierung zu kleiner Menge und den Kostenhinweis ohne Werktag-Einschränkung. Deshalb wurde diese Serie nicht pauschal als finaler Inhaltsbeweis übernommen.

Der Quervergleich identifizierte **32 geänderte Werkzeugausgaben** plus **vier geänderte Luzerner Seitenköpfe**. Alle 36 wurden direkt aus dem Build `31b5ce0` neu erzeugt:

- Rundgang-Protokoll, Grundreinigungs-Checkliste, Grundreinigungs-Aushang.
- Kündigungstermine, Fenster-Aushang, Facility-Wechselcheckliste.
- Yacht-Regeln, Kosten-Rechenweg.
- Kantonsdaten Luzern mit Sitz Emmen.

Jeweils DE, EN, FR und IT. Ergebnis: **36 von 36 einseitig, A4, keine fehlende aktuelle Textzelle, keine Textbox ausserhalb der Seite**. Echte Druckknöpfe markieren jeweils ein Ziel, die Nachbereitung räumt es wieder auf. Aushänge drucken ohne Firmenkopf, der Rundgang mit lokalisierten Schreibfeldern. Sechs dichte beziehungsweise geänderte Beispiele wurden gerendert und visuell geprüft.

`pdftotext -layout` mischt bei mehrspaltigen Tabellen die Lesereihenfolge. Daraus entstanden zunächst falsche Fehlanzeigen, kein Produktbefund. Der dokumentierte Endabgleich nutzt `pdftotext -raw` mit Unicode-Normalisierung und prüft die erwarteten Textfelder.

Zusätzlich wurden die **160 unveränderten Ausgaben** gegen den aktuellen Inhaltsbaum nachgelesen. Für die unveränderten Kantonskästen wurden Daten und Seitenkopf verglichen. Die Druck-CSS ist gegenüber der getesteten Vorlagenserie unverändert; der spätere No-JS-Fix betrifft die Bildschirm-Scrollreserve. **`combined-print-evidence-r2.json` enthält damit 196 einzeln begründete Nachweise**, klar getrennt in neu gedruckt und unverändert nachgeprüft. Er behauptet nicht, alle 196 seien am neuen Build neu gedruckt worden.

## Runtime-Belege, unabhängig gelesen

- Beide Markenmodi auf `31b5ce0`: je 128 Seiten, 19 Weiterleitungen, 0 CSP-/Konsolenfehler, 0 axe-Verstösse, 0 Überlauf bei 390 px, 0 deutsche Reste. Originalausgaben unter `scratchpad/logs/welle3-final-neue-marke/` und `welle3-final-arbeitsmarke/`.
- Finale Satzmessung in vier Sprachen: Leistungs-/Premiumgruppe DE 2,9 %, EN 3,1 %, FR 3,7 %, IT 3,7 %. Kantone 5,0/4,4/4,4/3,0 %. Kein Vertröstungswert erreicht 5 %. Innenseitige Treffer wurden nicht pauschal als falsch eingestuft, viele betreffen bewusst wiederholte Tabellen-/Quellenbegriffe.
- `audit-ux/r2/secondary-check.json`: Hauswartung 14.931 px, Büro 15.243 px, Facility 14.271 px, Leistungsübersicht 12.704 px bei 390 px. Werkzeuge geschlossen und erreichbar, kein horizontaler Überlauf.
- FigureGrid bei 360, 1024 und 1279 px: alle vier Zellen und Werte mit `scrollWidth == clientWidth`. 30 Titel-/Druckknopfprüfungen ohne Kollision oder Überlauf.
- `audit-ux/r2/nojs-final-recheck.json`: 18 Ankerfälle bei 390/1440/3840, jeweils mit und ohne JavaScript, alle frei sichtbar.
- `audit-ux/r2/contact-recheck.json`: sieben Desktop-Abstände exakt 40 px, 16 Footer-Aufrufe ohne Überlauf; Mock-Formularfokus bei Validierung, Fehler und Erfolg nachgeprüft.
- Kontaktcode unverändert zwischen geprüftem Kontaktcommit `dd6f331` und `31b5ce0`. API-/UI-Prüfberichte decken 21 API-, fünf Speicher-/Limiter- und 27 UI-Fälle ab. Der integrierte Limiter-Nachweis wurde zusätzlich gelesen. Kein Versand an echte Empfänger.

Diese Belege sind dem jeweils tatsächlich geprüften Stand zugeordnet. Änderungen danach brauchen einen gezielten Readback; die korrigierte Bildzuordnung gehört dazu.

## Verbleibende Gates

Fach-/Muttersprachlerfreigaben, reale BGS-Prozesse F1 bis F7, zusätzlicher Versicherungsumfang, Standortvertragsbündelung sowie die besonderen Garantie-/Leistungsfragen bleiben im konsolidierten Fragebogen. Neue Unternehmenszusagen wurden daraus nicht abgeleitet.

Kunden-E-Mail, Zieldomain, Weiterleitungen, Google-Profile, Marke und Indexierung bleiben die getrennten Launch-Gates des Integrators. Die Hauptdokumentation `06`, `08`, `FORTSCHRITT` und E85 war am R2-Code noch nicht abgeschlossen. Sie darf nach dem Prüfloop final nachgeführt werden, ist damit aber zu diesem Prüfzeitpunkt noch nicht erledigt.
