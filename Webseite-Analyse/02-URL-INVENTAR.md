# URL-Inventar und Prüfabdeckung

**Status: Phase 1 durchgeführt am 24.09.2026, Seitenberichte aus Phase 3 ergänzt (siehe „Seitenberichte und Empfehlung je URL“).** Alle Routen des geprüften Stands (`main` @ `d7e1122`, identisch mit dem Produktions-Deployment laut N003) sind inventarisiert und auf Produktion per HTTP geprüft (N007, N008). Die individuelle Inhalts- und Metadatenprüfung je Seite folgt in Phase 3. Slugs werden weder erfunden noch stillschweigend geändert.

**Produktions-URL:** `https://bgs-gebaeudeservice.vercel.app`. Das ist die neue Website, die Brandea für den Kunden baut (E07). Eine eigene Domain ist nicht verbunden (N002). Die bisherige Website des Kunden liegt auf `www.bgs-service.ch` (Wix, N014). Sie ist nicht Teil dieses Projekts, wird hier aber als Migrationsbestand geführt (siehe unten).

## Erwartete Seiten

Zuordnung der zwölf im Auftrag erwarteten Seiten zum tatsächlichen Bestand:

| ID | Seite | Tatsächliche URL | Codepfad | Bericht | Prüfstatus |
|---|---|---|---|---|---|
| P01 | Homepage | `/` (U01) | `app/page.tsx` | Seiten/01-homepage.md | Seitenprüfung erledigt: BEFUND |
| P02 | Alle Leistungen | **Keine eigene URL** (`/leistungen` → 404, N008). Übersicht nur als Mega-Menü (18 Links in 3 Gruppen), als Startseiten-Abschnitt „Unsere Reinigungsdienstleistungen“ und im Footer | — | Seiten/02-alle-leistungen.md | Seitenprüfung erledigt: BEFUND, Seite fehlt (Vorgabe für `/leistungen` im Bericht) |
| P03–P07 | Leistung 1–5 | **18 Leistungsseiten statt 5:** 4 Premium (U07–U10), 9 Business (U11–U19), 5 Basis (U20–U24) | `app/premium/*`, `app/business/*`, `app/basis/*` | Seiten/03–07 (vorläufige Zuordnung E09), weitere 13 Leistungsseiten in Seiten/13–25 | Alle 18 geprüft: BEFUND. Endgültige Zuordnung hängt an R3 |
| P08 | Über uns | `/ueber-uns` (U02) | `app/ueber-uns/page.tsx` | Seiten/08-ueber-uns.md | Seitenprüfung erledigt: BEFUND |
| P09 | Einzugsgebiete | **Keine Übersichtsseite** (`/standorte` → 404). Drei Standortseiten: `/standorte/zuerich`, `/standorte/zug`, `/standorte/luzern` (U25–U27) | `app/standorte/*` | Seiten/09-einzugsgebiete.md (deckt U25–U27 ab) | Seitenprüfung erledigt: BEFUND |
| P10 | Kontakt | `/kontakt` (U03) | `app/kontakt/page.tsx` | Seiten/10-kontakt.md | Seitenprüfung erledigt: BEFUND |
| P11 | Impressum | `/impressum` (U04) | `app/impressum/page.tsx` | Seiten/11-impressum.md | Seitenprüfung erledigt: BEFUND |
| P12 | Datenschutz | `/datenschutz` (U05) | `app/datenschutz/page.tsx` | Seiten/12-datenschutz.md | Seitenprüfung erledigt: BEFUND |
| Zusatz | Referenzen, Blog-Übersicht, 4 Blogartikel | U06, U28–U32 | siehe unten | Seiten/26–31 | Seitenprüfung erledigt: BEFUND |

**Hinweis zum Leistungsumfang (für B03):** Die bisherige Website des Kunden nennt zwei Leistungsbereiche, Gebäudereinigung und Hauswartung, mit zusammen sieben Unterleistungen (N014). Die neue Seite führt 18 Leistungen, darunter Privatjet, Yacht, Luxusimmobilien, Maschinen- und Industriereinigung, die dort nicht vorkommen. Welche Leistungen der Kunde tatsächlich anbietet, ist eine Geschäftsfrage und bleibt bis zur Antwort offen.

## Inventarisierung

- [x] Route-Dateien und dynamisch erzeugte Pfade im bestätigten Ziel-Repository erfassen. *32 `page.tsx`, keine dynamischen Routen, dazu `not-found.tsx` und 5 API-Routen (N005).*
- [x] Navigation, Footer, interne Links, Sitemap und CMS-/Content-Daten abgleichen. *Sitemap = 32 Routen = Build-Routen. Kein CMS, Inhalte liegen fest im Code (N009).*
- [ ] Vorhandene Search-Console-Landingpages und historische URLs ergänzen, soweit zugänglich. *Search Console: NICHT PRÜFBAR (kein Zugang, B11). Historische URLs: Die Menü-URLs der bisherigen Kunden-Website sind erfasst (siehe unten), weitere Unterseiten sind unbekannt.*
- [x] Alle tatsächlich bestehenden Regional-, Branchen-, Ratgeber- oder sonstigen Unterseiten zusätzlich aufnehmen. *3 Standortseiten, 4 Blogartikel, Referenzen.*
- [x] HTTP-/Host-/Trailing-Slash- und Parameter-Varianten dokumentieren, ohne jede technische Dublette als eigene redaktionelle Seite zu zählen. *Siehe „Varianten und Systemdateien“.*
- [x] Weiterleitungen, Fehlerseiten und systemische Zustände gesondert prüfen. *Erledigt, siehe „Systemische Zustände“ (N008, N012, N020, N022, N025, N031, N032, N034).*

## Tatsächliches Inventar (Stand 24.09.2026, Quelle N005, N007, N009)

Gemeinsam für alle 32 URLs, geführt als globale Befunde in `01-GLOBALE-ANALYSE.md` und hier nicht 32-mal wiederholt: identischer `<title>` „BGS Gebäudeservice - Professionelle Reinigungsdienstleistungen in der Schweiz“, identische `meta description`, kein `canonical`, `og:url` = Startseite, keine strukturierten Daten, Verifizierungs-Platzhalter im `<head>`. Alle Seiten sind statisch vorgerendert (○) und vollständig clientseitige Komponenten (`'use client'`).

| ID | URL | Seitentyp | Codepfad | Status | Robots (Meta) | Canonical | Sitemap | Eingehende interne Links | H1 (Ist) |
|---|---|---|---|---|---|---|---|---|---|
| U01 | `/` | Startseite | `app/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Erstklassige Gebäudereinigung für Zürich, Zug und Luzern |
| U02 | `/ueber-uns` | Über uns | `app/ueber-uns/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Unsere Geschichte: Von einer Vision zu Ihrem vertrauenswürdigen Partner |
| U03 | `/kontakt` | Kontakt | `app/kontakt/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Kontaktieren Sie uns |
| U04 | `/impressum` | Impressum | `app/impressum/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Impressum |
| U05 | `/datenschutz` | Datenschutz | `app/datenschutz/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Datenschutzerklärung |
| U06 | `/referenzen` | Referenzen | `app/referenzen/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Referenzen & Kundenerfolge |
| U07 | `/premium/privatjet` | Leistung (Premium) | `app/premium/privatjet/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Privatjet Reinigung |
| U08 | `/premium/yacht` | Leistung (Premium) | `app/premium/yacht/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Yacht Reinigung |
| U09 | `/premium/housekeeping` | Leistung (Premium) | `app/premium/housekeeping/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Private Housekeeping |
| U10 | `/premium/luxusimmobilien` | Leistung (Premium) | `app/premium/luxusimmobilien/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Luxusimmobilien-Reinigung |
| U11 | `/business/bueroreinigung` | Leistung (Business) | `app/business/bueroreinigung/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Büroreinigung |
| U12 | `/business/baureinigung` | Leistung (Business) | `app/business/baureinigung/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Baureinigung |
| U13 | `/business/industriereinigung` | Leistung (Business) | `app/business/industriereinigung/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Industriereinigung |
| U14 | `/business/fassadenreinigung` | Leistung (Business) | `app/business/fassadenreinigung/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Fassadenreinigung |
| U15 | `/business/fensterreinigung` | Leistung (Business) | `app/business/fensterreinigung/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Fensterreinigung |
| U16 | `/business/aussenanlagen` | Leistung (Business) | `app/business/aussenanlagen/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Außenanlagen & Grünflächenpflege |
| U17 | `/business/hallenreinigung` | Leistung (Business) | `app/business/hallenreinigung/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Hallenreinigung |
| U18 | `/business/maschinenreinigung` | Leistung (Business) | `app/business/maschinenreinigung/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Maschinenreinigung |
| U19 | `/business/facility-management` | Leistung (Business) | `app/business/facility-management/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Ganzheitliches Facility Management |
| U20 | `/basis/unterhaltsreinigung` | Leistung (Basis) | `app/basis/unterhaltsreinigung/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Unterhaltsreinigung |
| U21 | `/basis/hausmeisterservice` | Leistung (Basis) | `app/basis/hausmeisterservice/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professioneller Hausmeisterservice |
| U22 | `/basis/winterdienst` | Leistung (Basis) | `app/basis/winterdienst/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professioneller Winterdienst |
| U23 | `/basis/beschaffung` | Leistung (Basis) | `app/basis/beschaffung/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelles Beschaffungsmanagement |
| U24 | `/basis/sonderleistungen` | Leistung (Basis) | `app/basis/sonderleistungen/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Sonderleistungen |
| U25 | `/standorte/zuerich` | Standort | `app/standorte/zuerich/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Reinigungsfirma in Zürich |
| U26 | `/standorte/zug` | Standort | `app/standorte/zug/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Reinigungsfirma in Zug für höchste Ansprüche |
| U27 | `/standorte/luzern` | Standort | `app/standorte/luzern/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Professionelle Reinigung in Luzern |
| U28 | `/blog` | Blog-Übersicht | `app/blog/page.tsx` | 200 | index, follow | fehlt | ja | 32 Seiten (Navigation/Footer) | Wissen & Ratgeber |
| U29 | `/blog/professionelle-gebaeudereinigung` | Blogartikel | `app/blog/professionelle-gebaeudereinigung/page.tsx` | 200 | index, follow | fehlt | ja | 1 Seite (nur `/blog`) | Professionelle Gebäudereinigung: Was Sie wissen müssen |
| U30 | `/blog/reinigungskosten-schweiz` | Blogartikel | `app/blog/reinigungskosten-schweiz/page.tsx` | 200 | index, follow | fehlt | ja | 1 Seite (nur `/blog`) | Reinigungskosten in der Schweiz: Ein Überblick |
| U31 | `/blog/richtige-reinigungsfirma-finden` | Blogartikel | `app/blog/richtige-reinigungsfirma-finden/page.tsx` | 200 | index, follow | fehlt | ja | 1 Seite (nur `/blog`) | Wie finde ich die richtige Reinigungsfirma? |
| U32 | `/blog/umweltfreundliche-reinigung` | Blogartikel | `app/blog/umweltfreundliche-reinigung/page.tsx` | 200 | index, follow | fehlt | ja | 1 Seite (nur `/blog`) | Umweltfreundliche Reinigung: Tipps und Tricks |

**Nicht-Inhalts-Routen (systemisch):** `/api/chat`, `/api/chat-to-specialist`, `/api/contact` (GET → 405), `/api/industry-analysis`, `/api/health` (GET → 200) sowie die Fehlerseite `/_not-found`. Keine davon ist eine Marketing-URL.

## Pro URL ergänzen

Festzuhalten sind Seitentyp, Soll-Indexierung, Ist-Statuscode, Robots-Steuerung, Canonical, Sitemap-Zugehörigkeit, Entdeckungspfad, primäre Suchintention, Haupt-CTA, kritische Backend-Abhängigkeit, Baseline und vorhandener Alt-neu-Migrationsbedarf. Für alle Werte Datum und Quelle angeben. Grundlage für technische Einordnung: [S01][S05][S06].

Stand der Felder am 24.09.2026:

| Feld | Stand | Quelle |
|---|---|---|
| Seitentyp, Ist-Statuscode, Robots, Canonical, Sitemap, Entdeckungspfad | Für alle 32 URLs erfasst (Tabelle oben) | N007, N008, N009 |
| Soll-Indexierung | Offen. Hängt an B01/B08, also daran, ob `*.vercel.app` vor dem Launch überhaupt indexiert werden soll (siehe globaler Befund in 01), und an der Entscheidung zu den Leistungsseiten (B03) | Phase 2–4 |
| Primäre Suchintention | Offen, Intent-Matrix in `03-…` (Phase 4) | — |
| Haupt-CTA | Offen, je Seite in Phase 3 | — |
| Kritische Backend-Abhängigkeit | Alle 32 Seiten: Kontaktformular im Footer (`/api/contact`) und KI-Chat (`/api/chat`, `/api/chat-to-specialist`) aus `app/layout.tsx`. `/kontakt` zusätzlich Google Maps (clientseitig). Startseite zusätzlich „KI-Branchen-Berater“ (`/api/industry-analysis`) | N010, N015 |
| Baseline | Organische Daten: NICHT PRÜFBAR (keine Search Console). Laut Runtime-Logs praktisch kein Besucherverkehr in den letzten 7 Tagen und keine Formularanfrage (N012). Keine Analytics eingebunden (N010) | N010, N012 |
| Alt-neu-Migrationsbedarf | Neue Seite: noch keine Altlasten auf eigener Domain. Bisherige Kunden-Website: siehe Migrationsbestand unten | N014 |

## Was bereits funktioniert (ausdrücklich markiert)

Diese Punkte sind belegt und sollen bei einem Umbau erhalten bleiben:

- Alle 32 Inhalts-URLs sind erreichbar (200), statisch vorgerendert und aus dem Vercel-Cache ausgeliefert (N004, N007).
- HTTPS wird erzwungen (308, HSTS mit `preload`). Abschließende Slashes werden auf die kanonische Schreibweise umgeleitet (N004, N008).
- Unbekannte Pfade liefern echten Status 404 statt einer leeren Erfolgsseite (N008).
- Die Sitemap ist vollständig und deckungsgleich mit den Routen, `robots.txt` erlaubt das Crawling und verweist auf die Sitemap (N008).
- Vorschau- und Team-URLs sind nicht öffentlich (N002, N008).
- Die Hauptinhalte stehen im ausgelieferten HTML (Vorrendering), jede Seite hat genau eine H1 und alle Bilder ein `alt`-Attribut. Die Qualität der Alt-Texte und der Umfang der nur per Klick sichtbaren Inhalte werden in Phase 2/3 geprüft (N007).
- Navigation und Footer verlinken alle Kernseiten mit echten `<a href>`-Links (N009).
- Grundlegende Sicherheits-Header sind gesetzt (N004).
- Beim Laden der Seiten gibt es keine Drittanbieter-Anfragen, die Schrift ist selbst gehostet (N010).
- Produktions-Build und Typecheck sind reproduzierbar grün (N005).
- Die URL-Struktur ist sprechend und einheitlich klein geschrieben (`/business/bueroreinigung` usw.). Für einen Umbau ist das eine gute Grundlage, um Slugs beizubehalten.

## Varianten und Systemdateien (Quelle N008)

| Prüfung | Ergebnis | Bewertung |
|---|---|---|
| `http://` → `https://` | 308 | BESTANDEN |
| Abschließender Slash `/kontakt/` | 308 → `/kontakt` | BESTANDEN |
| Groß-/Kleinschreibung `/Kontakt` | 404 | BESTANDEN (keine Dublette) |
| Parameter `/?utm_source=test` | 200, ohne `canonical` | BEFUND (globaler Canonical-Befund) |
| Unbekannter Pfad | 404, aber zwei widersprüchliche robots-Meta-Tags (`noindex` + `index, follow`) | BEFUND (gering) |
| Kategorie-Pfade `/standorte`, `/leistungen`, `/basis` | 404 | Hinweis: keine Übersichtsseiten, Breadcrumb-/Nutzererwartung in Phase 3 prüfen |
| Team-Aliase und Deployment-URLs | 302 auf Vercel-Anmeldung | BESTANDEN (Vorschauen geschützt) |
| `robots.txt` | 200, `Allow: /`, Sitemap-Verweis, `Crawl-delay: 1` (Google ignoriert das), Kopfkommentar mit anderem Markennamen | BESTANDEN mit Hinweis |
| `sitemap.xml` | 200, 32 URLs, deckungsgleich mit den Routen. `lastmod` aller Einträge 2025-01-02 | BEFUND: Änderungsdaten nicht wahrheitsgemäß [S06] |
| `manifest.json` | 200, Farbe Blau statt Markenrot, eine WebP-Datei für beide Icon-Größen | BEFUND (gering) |
| `/favicon.ico`, `/apple-touch-icon.png` | 404, obwohl im `<head>` referenziert | BEFUND |
| `/og-image.jpg` | 404, obwohl als OG- und Twitter-Bild referenziert | BEFUND |

## Migrationsbestand: bisherige Website des Kunden

Nur nachrichtlich, ohne weitere Abrufe (E07). Soll die neue Seite später die bisherige unter `bgs-service.ch` ersetzen, braucht jede dieser URLs ein fachlich passendes Ziel mit permanenter Weiterleitung [S07]. Die Liste ist unvollständig: Eine Sitemap war nicht abrufbar (404), erfasst sind nur die Menü-URLs der Startseite.

| Bisherige URL | Inhalt laut Menü | Mögliches Ziel auf der neuen Seite | Status |
|---|---|---|---|
| `https://www.bgs-service.ch/` | Startseite | `/` | Offen (B08) |
| `https://www.bgs-service.ch/gebäudereinigung` | Gebäudereinigung | Offen, abhängig von B03 | Offen |
| `https://www.bgs-service.ch/hauswartung` | Hauswartung | Offen (heute am ehesten `/basis/hausmeisterservice`) | Offen |
| `https://www.bgs-service.ch/kontakt` | Kontakt | `/kontakt` | Offen |
| `http://www.bgs-service.ch/bgs-gebaeude-serviceleistungen.html` | Ältere Seite, laut Suchtreffer „gebäudereinigung emmenbrücke, emmen, luzern, zug, zürich“ | Offen (Leistungsübersicht P02) | Nur aus Suchergebnis bekannt (N038), nicht abgerufen |
| `http://www.bgs-service.ch/gebaeude-serviceleistungen-luzern.html` | Ältere Seite „angebot, kontakt“ | Offen (`/kontakt` oder P02) | Nur aus Suchergebnis bekannt (N038), nicht abgerufen |
| `http://www.bgs-service.ch/impressum.html` | Ältere Impressumsseite | `/impressum` | Nur aus Suchergebnis bekannt (N038), nicht abgerufen |

## Seitenberichte und Empfehlung je URL (Phase 3, Stand 24.09.2026)

Alle 32 Inhalts-URLs und die fehlende Übersicht P02 haben einen Seitenbericht. **Urteil überall: BEFUND, nicht freigabefähig.** Die Spalte „Empfehlung“ fasst den Pfad zusammen, der gilt, **solange R3 (Leistungen) und R4 (Region) nicht beantwortet sind**. Bestätigt der Kunde eine Leistung, gilt der Pfad (a) des jeweiligen Berichts. Das endgültige Alt-neu-Mapping mit der Zielstruktur steht in `03-SUCHINTENTION-UND-KANNIBALISIERUNG.md`.

| ID | URL | Bericht | Empfehlung bis R3/R4 | Seitenspezifische Befunde |
|---|---|---|---|---|
| — | `/leistungen` (fehlt) | 02 | Neu anlegen (Übersicht Gebäudereinigung/Hauswartung) | SEITE-P02-001, -002 |
| U01 | `/` | 01 | Behalten, umbauen | SEITE-P01-001, -002 |
| U02 | `/ueber-uns` | 08 | Behalten, neu schreiben | SEITE-P08-001, -002 |
| U03 | `/kontakt` | 10 | Behalten, Formular auf die Seite | SEITE-P10-001, -002 |
| U04 | `/impressum` | 11 | Behalten, registrierter Name | SEITE-P11-001, -002 |
| U05 | `/datenschutz` | 12 | Behalten, zuletzt gegen die Umsetzung neu schreiben | SEITE-P12-001, -002 |
| U06 | `/referenzen` | 26 | Nicht veröffentlichen, bis echte Belege vorliegen (404, aus Navigation, Footer und Sitemap entfernen) | SEITE-P26-001 bis -004 |
| U07 | `/premium/privatjet` | 21 | 410 | SEITE-P21-001 bis -003 |
| U08 | `/premium/yacht` | 22 | 410 | SEITE-P22-001, -002 |
| U09 | `/premium/housekeeping` | 23 | 410. Nur wenn Privathaushalte bestätigt werden: 308 auf die Unterhaltsreinigung | SEITE-P23-001 bis -004 |
| U10 | `/premium/luxusimmobilien` | 24 | 308 auf die Sonderleistungen, wenn diese die Materialpflege beschreiben, sonst 410 | SEITE-P24-001 bis -004 |
| U11 | `/business/bueroreinigung` | 13 | 308 auf die Unterhaltsreinigung | SEITE-P13-001 bis -003 |
| U12 | `/business/baureinigung` | 14 | 308 auf die Sonderleistungen bei fachlicher Eignung, sonst 410 | SEITE-P14-001 bis -003 |
| U13 | `/business/industriereinigung` | 15 | 308 auf die Sonderleistungen bei fachlicher Eignung, sonst 410 | SEITE-P15-001 bis -003 |
| U14 | `/business/fassadenreinigung` | 16 | 308 (Fenster- bzw. Sonderreinigung) oder 410 | SEITE-P16-001 bis -004 |
| U15 | `/business/fensterreinigung` | 17 | 308 (Unterhalts- bzw. Fassadenreinigung) oder 410 | SEITE-P17-001 bis -003 |
| U16 | `/business/aussenanlagen` | 07 | Behalten (Kernleistung laut N014), Winterdienst-Doppelung entfernen | SEITE-P07-001, -002 |
| U17 | `/business/hallenreinigung` | 18 | 308 (Industrie- bzw. Unterhaltsreinigung) oder 410 | SEITE-P18-001 bis -003 |
| U18 | `/business/maschinenreinigung` | 19 | 308 (Industrie- bzw. Sonderreinigung) oder 410 | SEITE-P19-001 bis -004 |
| U19 | `/business/facility-management` | 20 | 308 auf den Hausmeisterservice | SEITE-P20-001 bis -004 |
| U20 | `/basis/unterhaltsreinigung` | 03 | Behalten (Kernleistung) | SEITE-P03-001, -002 |
| U21 | `/basis/hausmeisterservice` | 04 | Behalten (Kernleistung), Kundenbegriff „Hauswartung“ | SEITE-P04-001, -002 |
| U22 | `/basis/winterdienst` | 06 | Behalten (Kernleistung), einzige Winterdienst-Seite | SEITE-P06-001, -002 |
| U23 | `/basis/beschaffung` | 25 | 308 auf die Unterhaltsreinigung | SEITE-P25-001 bis -003 |
| U24 | `/basis/sonderleistungen` | 05 | Behalten nur mit Leistungsliste (R3), sonst zurückstellen | SEITE-P05-001 bis -003 |
| U25 | `/standorte/zuerich` | 09 | 308 auf die künftige Einzugsgebietsseite | SEITE-P09-001, -002 |
| U26 | `/standorte/zug` | 09 | 308 auf die Einzugsgebietsseite oder eigene Seite mit echtem lokalem Inhalt | SEITE-P09-002 |
| U27 | `/standorte/luzern` | 09 | wie Zug | SEITE-P09-002 |
| U28 | `/blog` | 27 | Behalten, überarbeiten | SEITE-P27-001 bis -003 |
| U29 | `/blog/professionelle-gebaeudereinigung` | 28 | 308 auf `/blog/richtige-reinigungsfirma-finden` (zusammenführen) | SEITE-P28-001, -002 |
| U30 | `/blog/reinigungskosten-schweiz` | 29 | Behalten nur ohne unbelegte Zahlen | SEITE-P29-001 bis -003 |
| U31 | `/blog/richtige-reinigungsfirma-finden` | 30 | Behalten, überarbeiten | SEITE-P30-001 bis -003 |
| U32 | `/blog/umweltfreundliche-reinigung` | 31 | Zurückstellen (vor Launch nicht ausliefern) | SEITE-P31-001 bis -003 |

**Summe:** 88 seitenspezifische Befunde (P1: 36, P2: 44, P3: 8). 34 davon sind als Launch-Blocker markiert, fast alle als Einzelfälle von GLOBAL-021 (unbelegte Aussagen) oder GLOBAL-022/-023 (Stimmen, Bilder).

## Systemische Zustände, soweit vorhanden

- [x] 404 und serverseitiger Fehler. *404 liefert korrekt Status 404 (N008). Widersprüchliche robots-Meta-Tags werden als Befund geführt. Ein serverseitiger Fehler bei `/api/chat` wird als HTTP 200 ausgeliefert (N012, N017).*
- [x] Formular: leer, ungültig, wird gesendet, erfolgreich, Providerfehler, Wiederholung. *Geprüft im lokalen Build (N032): leer und ungültig abgefangen, Doppelklick eine Anfrage, Providerfehler wird als Erfolg gemeldet (GLOBAL-003). Kein Absenden auf Produktion.*
- [x] Cookie-/Consent-Zustände und Widerruf. *Geprüft (N025, N034): ohne Auswahl keine Cookies, Google-Dienste auf `/kontakt` trotzdem geladen, Auswahl wirkungslos, kein Widerrufsweg (GLOBAL-019, SEITE-P12-001).*
- [x] Navigation: mobil, Tastatur, geöffnetes Menü, Fokuswechsel. *Geprüft (N031): Fokus sichtbar. Das Mega-Menü öffnet nur per Maus (GLOBAL-026, SEITE-P02-001). Der mobile Menü-Button hat weder Namen noch Zustand, die Gruppenüberschriften im mobilen Menü sind keine Links.*
- [x] Ladezustände, ausfallende API, fehlendes Bild und blockierter Drittanbieter. *Teilweise geprüft: Die Chat-API fällt in Produktion aus und meldet HTTP 200 (N012, N017). Die Karte zeigt ohne gültigen Schlüssel eine Google-Fehlermeldung (N020). Ohne JavaScript bleibt der Hero unsichtbar (N022). Ein fehlendes Bild wurde nicht simuliert (NICHT GEPRÜFT, geringe Relevanz, weil alle Bilder lokal liegen).*
- [x] Preview/Staging und geschützte interne Bereiche. *Vorschauen und Team-Aliase sind per Vercel Authentication geschützt (N002, N008). Offener Punkt: Preview und Production teilen dieselben API-Schlüssel (N011).*

Diese Zustände benötigen keine erfundenen öffentlichen Marketing-URLs. Gemeinsame Befunde im globalen Bericht führen und von betroffenen Seiten darauf verweisen.

## Vollständigkeitsnachweis

Am Ende tatsächliche Zahlen eintragen: gefundene Inhalts-URLs, geprüfte Inhalts-URLs, nur stichprobenartig geprüfte Templates, ungeprüfte URLs, gefundene Varianten und offene Systemtests. Ein Template-Test ersetzt nicht die individuelle Content-/Metadatenprüfung jeder Seite.

**Zwischenstand 24.09.2026 (nach Phase 1):**

| Kennzahl | Wert |
|---|---|
| Gefundene Inhalts-URLs | 32 (dazu 5 API-Routen und die 404-Seite) |
| Per HTTP geprüft (Status, Head-Metadaten, H1, Links) | 32 von 32 |
| Individuell inhaltlich geprüft (Phase 3) | 0 von 32 |
| Dokumentierte Varianten | 7 (Protokoll, Slash, Groß/klein, Parameter, unbekannt, Kategorie-Pfade, Aliase) |
| Offene Systemtests | Formular, Consent, Navigation/Tastatur, Ladezustände |
| Nicht prüfbar | Search-Console-Landingpages, historische Rankings |

**Endstand 24.09.2026 (nach Phase 6):**

| Kennzahl | Wert |
|---|---|
| Gefundene Inhalts-URLs | 32 (dazu 5 API-Routen, die 404-Seite und die fehlende Übersicht `/leistungen`) |
| Per HTTP geprüft | 32 von 32 (N007, N008) |
| Im Browser gerendert (Desktop und Mobil) | 32 von 32 (N020), Breiten-Matrix auf Stichprobe (N020, N036) |
| Volltext inklusive Reiter und Akkordeons | 32 von 32 (N027). Für 2 Seiten per Code-Abgleich korrigiert (N023) |
| Individuell inhaltlich geprüft (Seitenbericht) | 32 von 32 in 31 Berichten, dazu P02 als Befund |
| Nur als Template-Stichprobe geprüft | keine. Lighthouse auf 5 Seitentypen (N030), axe auf 31 Seiten (N031) |
| Ungeprüfte Inhalts-URLs | 0 |
| Dokumentierte Varianten | 9 (dazu `/business` und `/premium` → 404) |
| Systemtests | Formular (N032, Testumgebung), Consent und Speicher (N025, N034), Navigation und Tastatur (N031), Ladezustände teilweise (N012, N020, N022), Umbruch (N036) |
| Offen bzw. nicht prüfbar | Zustellung in Produktion, Screenreader, Search Console, historische Rankings, vollständiger Altbestand der Kunden-Website |

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S01, S05, S06, S07).
