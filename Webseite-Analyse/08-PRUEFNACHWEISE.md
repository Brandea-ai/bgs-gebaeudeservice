# Prüfnachweise, Datenzugänge und Grenzen

**Status: Es liegen noch keine projektspezifischen Tests vor.** Recherchierte Originalquellen belegen Prüfregeln, nicht den Zustand der Zielwebsite.

## Nachweisregister

| ID | Typ | URL/Codepfad | Commit/Deployment | Zeitpunkt | Testbedingungen | Ergebnis | Einschränkung |
|---|---|---|---|---|---|---|---|
| Noch keine projektspezifischen Nachweise | — | — | — | — | — | — | Ziel nicht bestätigt |

## Mindestnachweis je Kategorie

**Repository:** tatsächliche Datei, relevante Zeilen, Branch/Commit und beobachteter Sachverhalt. Veraltete README-Beschreibungen nicht ungeprüft als laufende Architektur ausgeben.

**HTTP/Rendering:** geprüfte URL, Status, wesentliche Header, relevante HTML-/DOM-Beobachtung, Zeitpunkt und Browser-/Crawlerbedingungen. Ein einzelner Screenshot belegt keine Crawlability.

**Performance:** Tool, Version soweit verfügbar, Geräte-/Netzwerkprofil, Cache-Zustand, Durchläufe und Messwerte. Feld-/Labordaten und URL-/Origin-Aggregation unterscheiden. [S18]

**Suchdaten:** Property, Zeitraum, Filter, Query-/URL-Zuordnung und bekannte Messgrenzen. Keine Suchvolumina aus der Formulierung eines Suchbegriffs schätzen.

**Nutzer-/Vertriebsdaten:** datensparsame Zusammenfassung realer Beobachtungen; Stichprobe, Zeitraum, Definition qualifizierter Anfrage und Unsicherheiten nennen.

**Backend:** Lesen des Datenflusses von End-to-End-Funktionsnachweisen unterscheiden. Ein echter Zustelltest benötigt sichere Testbedingungen und Freigabe.

**Rechtliches:** Abgleich der vorhandenen Technik mit dokumentierten Angaben von einer fachlichen Rechtsprüfung unterscheiden. Nie „DSGVO-konform“ allein wegen eines vorhandenen Textes behaupten.

## Sicherheitsgrenzen

Nur freigegebene Domains mit maßvoller Abrufrate prüfen. Keine aggressiven Lasttests, Exploit-Versuche, realen Buchungen oder Testmails an fremde Empfänger. Kein Schreibzugriff auf Produktionssysteme. Protokolle auf notwendige Angaben reduzieren und sensible Inhalte entfernen.

## Prüfabdeckung am Ende ausweisen

- [ ] Was wurde direkt beobachtet?
- [ ] Was nur aus dem Code abgeleitet?
- [ ] Was mit Tool gemessen?
- [ ] Welche Teile sind Stichproben?
- [ ] Welche Aussage ist nur Hypothese?
- [ ] Welche Daten fehlen und wie könnten sie die Schlussfolgerung ändern?
- [ ] Welche Empfehlungen brauchen vor Umsetzung eine weitere Freigabe?

Ohne geeignetes Werkzeug oder Zugang: genaue Ersatzprüfung benennen und Status „NICHT PRÜFBAR“ setzen. Keine Testprotokolle simulieren.

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S18).
