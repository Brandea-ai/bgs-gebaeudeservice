# Technischer Abschlussbericht, Welle 3, Runde 2

Geprüft am 29.09.2026. Unveränderter Seiten-Prüfstand: `31b5ce0a827227f624439e869b4e4bcdb7365a1f`, Build-ID `jSWEH86HZq2BbWNTjCRxP`, `LANGUAGES=true NEW_BRAND=true`. Hauptprüfung unter `http://localhost:3352`. Derselbe Build wurde für die unabhängige Node-22-Gegenprobe des Integrators unter Port 3353 gestartet. Kein Build und keine Repository-Änderung durch diesen Prüfer, kein Echtversand.

## Urteil

TECH-01 bis TECH-06 sind im geprüften Stand behoben. Im angeforderten Seitenumfang gibt es keinen neuen bestätigten Fehler der Schwere mittel oder höher. SEO, automatische Barrierefreiheitsprüfung, neue Werkzeugbedienung und mobile Navigation bestehen die zweite Runde.

Die Untersuchung hat zusätzlich eine echte Grenze des lokalen Next.js-Optimierers aufgedeckt. Sie betrifft den Betrieb über `next start` und ist unten mit Ursache, Gegenprobe und dem korrigierten Prüfablauf dokumentiert. Eine Fehlerfreiheit dieses lokalen Optimierers wird ausdrücklich nicht behauptet. Der finale Bildabruf auf Vercel bleibt Teil der anschliessenden Live-Prüfung des Integrators.

## Regression der Befunde aus Runde 1

| ID | Ergebnis | Aktueller Nachweis |
|---|---|---|
| TECH-01 | Behoben | `server/email.ts` akzeptiert nur eine nichtleere String-ID des Providers. `welle3/final-api/contact-results.json`: 21 von 21 Fälle bestanden, einschliesslich fehlender, leerer und numerischer ID. |
| TECH-02 | Behoben | Der äussere Premium-Ablauf ist ein `div`, die innere benannte Region bleibt. Alle vier Premium-Übersichten sind bei 1440 und 390 px ohne `landmark-unique`-Verstoss. |
| TECH-03 | Behoben | `npm ls next postcss sharp` ohne ungültige Auflösung. Next 15.5.26 verwendet PostCSS 8.5.28; Sharp bleibt 0.35.4. Frischer `npm audit --omit=dev`: 0. |
| TECH-04 | Behoben | Timer und Bereinigung entfernen abgelaufene IPs, Arrays bleiben bei höchstens fünf Zeitstempeln und die Map ist auf 10.000 Clients begrenzt. `welle3/integration-rate-limit/rate-limit-results.json`: fünf von fünf Fälle bestanden. |
| TECH-05 | Behoben | Nur Cormorant normal wird deklariert. Die aktuelle Startseite lädt drei statt vier Fontdateien; 39.304 Byte ungenutzter Fontinhalt entfallen. |
| TECH-06 | Behoben | Kontakt-Mail ohne Gedankenstrich oder Seitenstrich-Kästen, Radien 3 px. Gegenprüfung im Quelltext und aktuellen API-HTML-Artefakt. |

Die aktuellen API- und Ratenbegrenzungs-Artefakte wurden direkt gelesen, nicht nur aus dem Bericht des Integrators übernommen. `server/email.ts`, `app/api/contact/route.ts` und die beiden zugehörigen Prüfer wurden zusätzlich per SHA-256 zwischen Hauptrepo und diesem Prüfstand abgeglichen; sie sind gleich.

## SEO und strukturierte Daten

128 von 128 gebaute Seiten ohne Befund:

- HTTP 200, HTML-Sprache, eindeutige Titel und Beschreibungen, genau eine H1, Gliederung ohne übersprungene Ebenen und keine doppelten IDs.
- Selbstreferenzierende Canonicals; HTML- und Sitemap-hreflang stimmen vollständig überein und sind gegenseitig, einschliesslich x-default.
- Alle internen Links und Sprungziele gültig. Open Graph und X-Tags vollständig; 31 unterschiedliche OG-Dateien tatsächlich mit 1200 × 630 Pixeln geprüft.
- Bewusstes `noindex` steht weiterhin in Meta und HTTP-Header.
- Erwartete JSON-LD-Typen je Seitentyp tatsächlich vorhanden: 128 LocalBusiness, 4 WebSite, 12 ItemList, 124 BreadcrumbList, 52 Service, 20 BlogPosting, 4 AboutPage und 4 ContactPage.
- Service-Provider zeigen auf die jeweilige Organisation. Artikel-URL, Sprache, Überschrift und `dateModified` passen; Artikel-Datum und Sitemap-`lastmod` stimmen überein.

Belege: `seo-results.json`, `seo-audit.log`, `schema-audit.json`. Die Prüfung umfasst Syntax und die genannten inhaltlichen Beziehungen; sie ist kein erneuter externer Schema.org-Validatorlauf.

## Barrierefreiheit und Bedienung

- **256 vollständige Initialprüfungen:** 128 Seiten jeweils bei 1440 × 900 und 390 × 844, axe 4.11.0 mit WCAG bis 2.2 AA und Best Practice. Keine Verletzung, kein horizontaler Überlauf, kein Browser-`pageerror`.
- **88 zusätzliche Prüfungen geöffneter Werkzeuge:** 224 Klappen tatsächlich per Enter geöffnet, per Leertaste geschlossen und erneut geöffnet. Alle Zustände und `aria-expanded` korrekt. Im geöffneten Zustand erneut axe mit sichtbarem Header: keine Verletzung und kein Überlauf.
- **Vier Sprachen per Tastatur:** Sprunglink, Leistungsmenü, Gebietsmenü, Escape und Fokus-Rückkehr, Mobilmenü und Hintergrundsperre erneut geprüft. Formularfehler fokussieren die Rollenauswahl; Rolle und FAQ sind per Tastatur bedienbar.
- **15 neue Interaktionsfälle:** Footer-Akkordeons in allen Sprachen, Tab in die geöffnete Linkgruppe, Schliessen per Leertaste, direkte Werkzeuganker und Abschnittsnavigation per Enter. Die Ziele werden geöffnet und liegen unterhalb der klebenden Leiste. Alle bestanden.
- **Aktuelle Kontakt-UI-Prüfung des Integrators:** `welle3/final-contact-ui-node22/contact-ui-results.json`, 29.09.2026, 08:05:14 UTC, 27 von 27 Fälle bestanden. Datei selbst gelesen. Der erste Lauf bleibt mit 26 von 27 und dem unten erklärten Bild-Timeout dokumentiert.

Artefakte: `axe-results.json`, `tools-keyboard-visible-header-results.json`, `keyboard-results.json`, `new-interactions-results.json`.

### Widerlegter Zusatztreffer

Beim Herunterscrollen meldete axe auf deutschen Seiten eine angebliche Zielgrösse von 138 × 1 px am ausgeblendeten Logo. Die reale, stabil gemessene Geometrie widerlegt eine sichtbare Restfläche: Header von y=-94 bis -16, Logo-Link von -71 bis -27, Bild von -63 bis -35. Englisch hat exakt dieselbe Geometrie, aber keinen axe-Treffer.

Mit normaler Rückwärtsnavigation über Shift+Tab wird das Menü wieder sichtbar: Header y=0 bis 78, aktiver Knopf 44 × 44 px bei y=23. Dann ist auch `target-size` ohne Treffer. Die 88 geöffneten Werkzeugseiten wurden anschliessend nochmals bei sichtbarem Header geprüft. Rohdaten bleiben erhalten: `tools-keyboard-results.json`, `nav-hidden-diagnostic.json`, `nav-keyboard-restore.json` und Screenshots. Dieser Messbefund wurde nicht durch Abschalten der Regel verborgen.

## Mobile Ladezeit nach der Fontkorrektur

Lighthouse 13.0.1, mobiles Standardprofil. Zehn serielle Läufe über acht repräsentative Seiten: Startseite dreimal, Standardleistung, Premium-Übersicht, Premium-Leistung und Kontakt, mit allen vier Sprachen vertreten.

| Messgrösse | Runde 2 |
|---|---|
| Performance | 89 bis 93 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 69, ausschliesslich wegen des bewussten `noindex` |
| LCP, simuliert | 3,19 bis 3,69 s |
| TBT | 3 bis 10,5 ms |
| CLS | 0 in allen Läufen |
| Startseite, LCP-Median | 3,68 s, zuvor 3,91 s |
| Fontdateien auf Startseite | 3, zuvor 4 |
| Eingesparter Fontinhalt | 39.304 Byte |

Keine Runtime-Warnung in diesen zehn Läufen. Die Änderung verbessert den gemessenen Zustand; die Werte sind Labordaten und keine Core-Web-Vitals-Felddaten. Der LCP bleibt ein beobachtbarer Optimierungspunkt. `lighthouse-summary.json` und die zugehörigen HTML-/JSON-Berichte enthalten die Einzelwerte.

## Bestätigte Grenze des lokalen Bildoptimierers

Der Kontakt-UI-Test blieb nach einem Viewportwechsel auf 1100 px zweimal bei `networkidle` stehen. Der alte Prozess auf Port 3352 wurde zur Diagnose weiterlaufen gelassen.

Die Gegenproben im unveränderten Prozess:

| Anfrage | Ergebnis |
|---|---|
| Kontakt-Hero, AVIF, 1200 px, ursprünglicher Schlüssel | Wiederholt kein Antwortbyte, curl bricht nach 10 beziehungsweise 15 s ab |
| Derselbe Hero, WebP, 1200 px | HTTP 200 sofort |
| Derselbe Hero, AVIF, 1080 px | HTTP 200 sofort |
| Derselbe Hero, AVIF, 1200 px, nur zusätzlicher Source-Queryparameter | HTTP 200 in 0,096 s |
| Ursprünglicher AVIF-Schlüssel, frischer separater Node-22-Prozess, gleicher Build | HTTP 200 in 0,148 s laut direktem Integrator-Nachweis |

Der Befund entspricht dem dokumentierten Next.js-Fehler: Ein abgebrochener kalter interner Bildabruf kann einen gemeinsam genutzten Promise für genau diesen Schlüssel dauerhaft offenhalten. Der installierte Code verwendet noch den auslösenden Response-Socket. Der Fehler wurde upstream behoben, ist aber in der hier neuesten 15.5-Version 15.5.26 noch vorhanden. Quellen: [Issue 96538](https://github.com/vercel/next.js/issues/96538), [gemergter Fix 98168](https://github.com/vercel/next.js/pull/98168).

Das ist durch die unterschiedlichen Schlüssel und sofort erfolgreiche AVIF-Gegenprobe von einem allgemeinen AVIF- oder Sharp-Codecdefekt abgegrenzt. Der erste Prüfserver lief zudem unter Node 25, während das Projekt Node 22 vorsieht. Node 22 ist jetzt über `engines` und `.nvmrc` verankert. Ein neuer Prozess allein beseitigt einen alten blockierten Promise, beweist aber nicht, dass der Upstream-Fehler unter Node 22 verschwunden wäre.

Der Kontakt-Prüfer wartet nun nach Resize und Scroll sowie vor dem Schliessen auf fertige Anfragen; auf dem separaten Node-22-Prozess bestehen alle 27 unveränderten UI-Assertions. Der neue axe-Prüfer wurde ebenfalls korrigiert: feste Desktop- und Mobil-Worker verhindern die auslösende Folge Resize, neue Bildanfrage, sofortige Navigation. Der Integrator hat diese Variante in Commit `3b3e881` übernommen. Damit wird die Testursache behandelt und die Formatqualität bleibt erhalten.

Die dokumentierte Upstream-Grenze betrifft lokales beziehungsweise selbst gehostetes `next start`. Für die angeforderte Vercel-Veröffentlichung bleibt der tatsächliche Abruf der finalen optimierten Bildvarianten auf Vercel ein eigener Freigabenachweis. Es gab keine absichtlich abgebrochenen Anfragen gegen Produktion und keine Änderung am Bildformat.

## Grenzen und nachgelagerte Prüfung

- Die technischen Seitenprüfungen beziehen sich auf Build und Commit oben. Spätere Bildzuordnungen und die endgültige Veröffentlichung müssen durch deren gezielte Prüfung beziehungsweise Live-Abgleich abgedeckt werden.
- No-JS-Darstellung und A4-Werkzeugdruck wurden auf ausdrückliche Aufgabenaufteilung von UX- und Inhaltsprüfung übernommen.
- axe meldet bildabhängige Kontraste weiterhin als unvollständig. Automatische Nulltreffer ersetzen keine vollständige manuelle Barrierefreiheitsprüfung.
- Muttersprachliches Lektorat, Markenprüfung, finale Kundendomain, Kunden-Mailadresse, alte Google-Profile, Weiterleitungen und Indexierung werden durch diesen technischen Bericht nicht freigegeben.
- Kein echter Versand, keine Kundendaten und keine Produktionsmutation durch diesen Prüfer. Keine eigenen Server oder Browser offen.
