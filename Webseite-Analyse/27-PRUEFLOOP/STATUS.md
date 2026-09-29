# Prüf-Loop Welle 3

Stand 29.09.2026. Arbeit läuft, keine Abschlussfreigabe.

## Ausgangsstand

GitHub main und Arbeitszweig frisch abgefragt: fc6a78840757cbe1571eada505dcd5e2d184df37. Unveränderter Prüfstand gebaut und auf localhost:3310 gestartet. 32 deutsche Seiten in je 1440 und 390 px als Screenshots erfasst und erste Bildschirme visuell geprüft. Weitere Sektionen werden unabhängig geprüft. Mobile Maximalhöhe im Ausgangsstand: 26.388 px. Keine Aussage über vollständige Fehlerfreiheit aus diesen Screenshots.

## Vorläufige bestätigte Befunde

- TECH-01: API meldet Erfolg bei Resend HTTP200 ohne ID. Lokaler Mock mit {} und null bestätigt. Keine echte Nachricht gesendet. Korrektur und Regression bei Kontakt-Einheit.
- IH-10: Industrie-Hero und Detail wiederholen nahezu dasselbe Motiv. Neues Detailmotiv und IPTC geprüft, siehe BILD-INDUSTRIE.md.
- Sitz: company.seat = Emmen, einige Texte sagen Sitz Emmenbrücke. Inhalts- und Kontakteinheit korrigieren, Postadresse bleibt Emmenbrücke.
- Einmal-Leistungen: Formular fragt weiterhin nach Rhythmus. Kontakteinheit korrigiert.

## Gegenbelege

Die Datenschutzerklärung enthält Rolle/Grösse und Karte auf Kontakt/Einzugsgebiet bereits. Der alte pauschale Befund ist insoweit widerlegt. Erfahrung seit 2006 wurde als frühere Einzelfirma in Antwort R6a belegt, daher keine neue offene Kundenfrage ohne konkreten Widerspruch.

## Technischer Datumsabgleich

Sitemap verwendet künftig für Recht und Ratgeber deren eigenes updated-Feld, passend zu sichtbarem Stand und Artikel-JSON-LD. Sonstige Seiten behalten den bestehenden dokumentierten Inhaltsstand. Google verlangt zuverlässig belegbare Zeitpunkte wesentlicher Änderungen: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## Nachweise ausserhalb des Repos

scratchpad/welle3 enthält unabhängige Audit-Ergebnisse, lokale Mock-Tests, 64 Ausgangsscreenshots und Messwerte. Vollständige Befundmatrix, Gegenprüfungen, beide Marken-Modi, Schlussmessungen und Live-Abnahme stehen noch aus.

## Abhängigkeiten und Build

Next bleibt bei 15.5.26. Die bereits verwendete PostCSS-Version 8.5.28 wird auch für Next erzwungen, statt der dort verschachtelten 8.4.31. Der Lock wurde ausschliesslich mit npm erzeugt und frisch per npm ci installiert. Keine weitere Paketversion geändert; alter nested PostCSS- und Nanoid-Eintrag entfallen. npm audit --omit=dev: 0 Meldungen. Entwicklungsabhängigkeiten bleiben separat zu bewerten.

Der erste Technik-Build scheiterte im Google-Font-Loader beim Auswerten einer externen Schrift-URL. Kein Testabschluss daraus. Der direkte Wiederabruf lieferte gültige Dateiendungen; Der erneute Build und die vollständige Prüfkette bestanden:128 Seiten,19 Weiterleitungen,0 axe,0 Überlauf,0 deutsche Reste,0 Konsolen-/CSP-Fehler. Keine Bibliotheksdatei gepatcht. Die vier Premium-Übersichten wurden zusätzlich bei zwei Breiten mit axe Best Practice geprüft:8 Läufe ohne Befund.
