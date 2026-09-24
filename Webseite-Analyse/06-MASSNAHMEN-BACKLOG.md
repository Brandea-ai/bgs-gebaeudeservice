# Maßnahmen-Backlog

**Status: Phase 5 durchgeführt am 24.09.2026.** Alle 37 globalen Befunde (01) und alle 88 seitenspezifischen Befunde (`Seiten/`) sind in 55 Maßnahmen überführt. **Nichts davon ist umgesetzt.** Eine Empfehlung ist keine Freigabe zur Umsetzung. Die Umsetzung braucht eine eigene Freigabe (E05).

## Priorisierung

| Priorität | Bedeutung | Typische, erst nachzuweisende Beispiele |
|---|---|---|
| P0 | Kritisch, sofortige Risikoentscheidung | Sensible Daten öffentlich, kritischer ausnutzbarer Sicherheitsfehler, zentrale Anfragefunktion vollständig ausgefallen |
| P1 | Hohe geschäftliche oder technische Bedeutung | Versehentlich blockierte Leistungsseiten, unklare zentrale Leistung, verlorene wichtige Redirects |
| P2 | Sinnvolle Optimierung | Bessere Inhaltsabgrenzung, gezielte Bildoptimierung, stärkere belegte Referenzdarstellung |
| P3 | Nachgelagerte Verbesserung | Kleine visuelle Inkonsistenz, optionale Komfortfunktion ohne Kernpfadrisiko |

Priorität und Launch-Blocker sind getrennte Felder. Nicht jede SEO-Idee ist ein Launch-Blocker. Ungeklärte Risiken werden nicht durch einen hohen Design-Score ausgeglichen.

**Aufwand (grobe Schätzung ohne Wartezeit auf Kundenangaben):** S = bis 1 Personentag, M = 2–5 Personentage, L = mehr als 5 Personentage. **Status aller Maßnahmen: offen.** Befundstatus: BEFUND = nachgewiesen, HYPOTHESE = begründete Annahme.

## Entscheidungen, von denen Maßnahmen abhängen

| Rückfrage (07) | Blockiert | Ohne Antwort gilt |
|---|---|---|
| R1 Schlüssel in öffentlichen Dokumenten | M01 | Behandeln wie echte Schlüssel (widerrufen) |
| R2 Marke | M09, M35, M39 | „BGS Gebäudeservice“ als Arbeitsmarke, registrierter Name im Impressum |
| R3 Leistungen | M20, M40–M46, M29 | Fünf Kernleistungen laut Eigenangabe, übrige Seiten nach Pfad (b) |
| R4 Region | M11, M48 | Kantone Luzern und Zug |
| R5 Kontakt, Empfänger, Rückmeldezeit | M04, M09, M30, M49 | Kein Launch ohne Antwort (Empfänger der Anfragen) |
| R6 Belege | M11, M12, M13, M47, M52 | Streichen statt behaupten |
| R7 Rechtliches | M14, M50, M51 | Kein Launch ohne Rechtsprüfung |
| R8 KI-Funktionen und Karte | M03, M15 | Chat, Berater und Karte entfernen |
| R9 Domain und Launch | M08, M20 (Altbestand) | Vorab-Adresse nicht indexieren lassen |
| R10 Ziele und Zielgruppen | M28, M41 | Arbeitshypothese Verwaltungen, Eigentümer, Gewerbe |
| R11 Datenzugänge | M32, M55 | Baseline fehlt, nach dem Launch aufbauen |
| R12 Verantwortung | G14 in 05 | Kein Launch ohne benannte Freigabe |
| E10 Push/Previews | Sicherung dieses Audits | Nur lokale Commits |

## Aufgabenmatrix

### Welle 0: sofort, unabhängig vom Umbau (Produktions- und Datenrisiken)

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis |
|---|---|---|---|---|---|---|---|---|---|---|
| M01 | Repository, `DEPLOYMENT.md`, `EMAIL_SETUP.md` | HYPOTHESE (Inhalt bewusst nicht eingesehen) | P0 | ja (G06) | Prüfen, ob dort gültige Schlüssel stehen. Falls ja: beim Anbieter widerrufen, neu erzeugen, nur in Vercel hinterlegen, Dateien bereinigen, Git-Historie bewerten (öffentliches Repository), Secret-Scanning aktivieren | Secret-Scan über Repository und Historie ohne Treffer. Alte Schlüssel beim Anbieter als widerrufen sichtbar | Operations (Brandea) | S | R1 | GLOBAL-035 |
| M02 | Abhängigkeiten, `next.config.ts` | BEFUND | P0 | ja (G06) | Next.js innerhalb 15.x auf eine Version ohne bekannte kritische Meldungen heben (Stand N006: ab 15.5.26, bei Umsetzung neu prüfen). Bildoptimierung für fremde Hosts schließen (`remotePatterns '**'`) | `npm audit --omit=dev` ohne critical/high für `next`. Build und Seitenprüfung wie N005/N007 grün | Entwicklung | S–M | M05 | GLOBAL-001, N006, N018 |
| M03 | Chat, „Termin vereinbaren“ (22 Seiten), KI-Berater | BEFUND | P0 | ja (G05) | Entscheidung R8 einholen. Bis dahin alle Chat- und Berater-Einstiege entfernen oder auf das Formular umleiten. Falls der Chat bleibt: gültiger Schlüssel, Fehler als Fehler melden (kein HTTP 200), sichtbare Ersatzkontakte, Alarm bei Ausfall | Mit absichtlich ungültigem Schlüssel in der Testumgebung erscheint eine Fehlermeldung mit Telefon und Formular. Keine CTA führt in einen nicht funktionierenden Weg | Entwicklung, Entscheidung Geschäftsführung | S | R8, M06 | GLOBAL-002, N012, N017 |
| M04 | Formular (alle Seiten), `/api/contact`, `server/email.ts`, DNS `bgs-service.ch` | BEFUND | P0 | ja (G05) | Erfolg nur nach bestätigtem Versand melden, sonst Fehler mit Ausweichkontakt. Empfänger auf die bestätigte Kundenadresse umstellen. Absenderdomain beim Versanddienst verifizieren (SPF, DKIM). Zuständige Person für Anfragen benennen | In der freigegebenen Testumgebung (1) führt ein simulierter Versandfehler zu einer Fehlermeldung, (2) kommt eine Testanfrage im Kundenpostfach an, bestätigt durch den Kunden | Entwicklung, DNS: Kunde/Hoster | S–M | R5 | GLOBAL-003, N013, N016, N032 |
| M05 | Build, CI | BEFUND | P1 | ja (G02) | Lockfile mit `package.json` abgleichen (nur ein Paketmanager), `npm ci` lauffähig machen, ESLint-Konfiguration, CI mit Build, Typecheck, Lint und Audit. Framework-Preset in Vercel auf Next.js | `npm ci && npm run build` in sauberer Umgebung ohne Fehler, CI-Lauf grün auf dem Arbeits-Branch | Entwicklung | M | — | GLOBAL-007, N003, N005 |
| M06 | Vercel-Umgebungsvariablen, Git-Anbindung | BEFUND | P1 | nein | Geheimnisse als „sensitiv“ speichern. Eigene Schlüssel oder Test-Empfänger für Preview und Development. Ungenutzten Anthropic-Schlüssel entfernen und widerrufen. Kartenschlüssel richtig benennen oder entfernen (R8). Automatische Previews für Nicht-main-Branches bewusst entscheiden (z. B. Ignored Build Step) | Vercel zeigt keine „readable-secret“-Hinweise. Preview nutzt nachweislich andere Schlüssel. Ein Test-Push auf einen Analyse-Branch erzeugt nur dann ein Deployment, wenn es gewollt ist | Operations | S | E10 | GLOBAL-005, N011, N035 |
| M07 | `/api/*` | BEFUND | P1 | ja (G06) | Ratenbegrenzung, Längenlimits, HTML-Escaping aller Formularfelder in der E-Mail, Honeypot gegen Spam | Automatischer Test: 20.000 Zeichen werden abgelehnt, HTML im Namen erscheint in der Mail als Text, schnelle Wiederholungen erhalten 429 | Entwicklung | S–M | M04 | GLOBAL-004, N032 |
| M08 | Vorab-Adresse `bgs-gebaeudeservice.vercel.app` | BEFUND | P1 | ja (G04, G10) | Entscheidung R9. Bis zum Relaunch die Vorab-Adresse vor Indexierung schützen (`X-Robots-Tag: noindex` oder Zugriffsschutz), weil dort heute unbelegte Aussagen, vermutlich erfundene Stimmen und ein falscher Firmenname öffentlich stehen. Nach dem Launch Canonical auf die echte Domain | Antwort-Header der Vorab-Adresse mit `noindex` bzw. Schutz aktiv. Nach dem Launch zeigen alle Canonicals auf die Launch-Domain | Entwicklung/SEO, Entscheidung Brandea/Kunde | S | R9 | GLOBAL-018, N007, N038 |
| M09 | Standortseiten, alle Kontaktangaben | BEFUND | P1 | ja (G09) | Sofort: `info@swiss-reinigung.ch` (geparkte Domain ohne MX) durch die bestätigte Adresse ersetzen. Danach alle Kontaktangaben aus einer zentralen Quelle speisen | Volltextsuche findet keine Adresse ohne MX. Testmail an die angezeigte Adresse kommt an (Kunde bestätigt) | Redaktion/Entwicklung | S | R5 | GLOBAL-020, N013 |

### Welle 1: Launch-Blocker für den Umbau

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis |
|---|---|---|---|---|---|---|---|---|---|---|
| M10 | Alle Seiten, Logo, Footer, Schema | BEFUND | P1 | ja (G07, G09) | Marke festlegen (R2). Registrierten Namen „BGS - Gebäudeservice GmbH“ in Impressum, Datenschutz und Footer. Marke in Logo, Titeln und Texten einheitlich. „Swiss Reinigungsfirma“ und „Powered by Brandea AI“ entfernen | Volltextsuche findet „Swiss Reinigung“ 0-mal. Name, Rechtsform, Adresse und UID stimmen mit dem Register überein | Geschäftsführung Kunde, Redaktion, Design | M | R2 | GLOBAL-020, N033, SEITE-P11-001 |
| M11 | Alle Seiten, Chat-Katalog `server/gemini.ts` | BEFUND | P1 | ja (G09) | Nachweisregister (01, Abschnitt A) Zeile für Zeile abarbeiten: belegen oder streichen. Das gilt für ISO, 24/7, Kundenzahlen, Gründung, Region, Versicherung, Preise, Fach- und Vertragszusagen. Die zentrale Faktenliste (M54) verwenden | Jede verbleibende Behauptung hat einen dokumentierten Beleg mit Datum und Freigabe. Volltextsuche nach „ISO“, „24/7“, „500“, „CHF“, „zertifiziert“, „führend“ ohne unbelegte Treffer | Geschäftsführung Kunde, Redaktion | M | R4, R6 | GLOBAL-021, Nachweisregister, SEITE-P06-001, -P09-001, -P13-001, -P13-003, -P14-001, -P15-001, -P15-002, -P16-001 bis -003, -P17-001, -P18-001, -P19-001, -P20-001, -P20-002, -P21-001 bis -003, -P22-002, -P23-002, -P24-002, -P29-001 |
| M12 | Startseite, Über uns, Referenzen | HYPOTHESE (vermutlich erfunden) | P1 | ja (G09) | Alle Kundenstimmen entfernen. Nur echte Stimmen mit schriftlicher Freigabe, Datum und Organisation wieder aufnehmen. Keine Sterne ohne Quelle | Für jede Stimme liegt eine Freigabe vor. Ohne Freigabe steht keine Stimme online | Geschäftsführung Kunde, Redaktion | S | R6 | GLOBAL-022, SEITE-P26-004 |
| M13 | Alle Seiten mit Team-, Referenz- und Vorher/Nachher-Bildern | BEFUND (Einschätzung) | P1 | ja (G09) | KI-Bilder in Vertrauenszusammenhängen (Team, Referenz, Vorher/Nachher, Gründer) durch echte, freigegebene Fotos ersetzen oder entfernen. Verbleibende Illustrationen am Bild kennzeichnen. Bildrechte dokumentieren | Bildliste mit Herkunft, Rechten und Einwilligungen. Kein KI-Bild zeigt „unser Team“ oder „unsere Arbeit“ | Kunde (Fotos), Design | M | R6 | GLOBAL-023, N029, SEITE-P05-003, -P18-003, -P19-004, -P26-003 |
| M14 | `/impressum`, `/datenschutz` | BEFUND | P1 | ja (G07) | Nach dem Umbau die tatsächliche Verarbeitung erneut inventarisieren (Vorlage: Inventar in P12). Impressum und Datenschutz neu schreiben lassen und rechtlich prüfen (B07) | Jede Zeile des Inventars ist korrekt beschrieben oder entfernt. Rechtsprüfung dokumentiert | Fachprüfung Recht, Kunde, Redaktion | M | R7, M03, M04, M15 | GLOBAL-027, SEITE-P11-001, -P11-002, -P12-001, -P12-002 |
| M15 | `/kontakt` (Karte), Cookie-Banner | BEFUND | P1 | ja (G07) | Karte entfernen oder erst nach Klick laden (R8). Banner nur, wenn einwilligungspflichtige Dienste bleiben, dann mit echter Sperre und Widerrufslink im Footer | Netzwerkprotokoll ohne Einwilligung zeigt keine Anfrage an Google. Auswahl jederzeit änderbar | Entwicklung, Fachprüfung Datenschutz | S | R8 | GLOBAL-019, N020, N034, SEITE-P10-001, -P12-001 |
| M16 | Alle Seiten | BEFUND | P1 | ja (G03) | Titel, Beschreibung und H1 je Seite aus den Seitenberichten übernehmen (nach R2–R4), selbstreferenzierendes Canonical, eigene Open-Graph-Angaben | Crawl: 0 doppelte Titel oder Beschreibungen, jede Seite mit eigenem Canonical | Redaktion/SEO, Entwicklung | M | M21, R2–R4 | GLOBAL-010, Seitenberichte Abschnitt 4 |
| M17 | `app/layout.tsx`, `robots.txt`, `sitemap.xml`, 404-Seite | BEFUND | P2 | ja (Platzhalter) | Verifizierungs-Platzhalter entfernen, widersprüchliche robots-Tags der 404-Seite beheben, Sitemap aus den echten Routen mit echtem `lastmod` erzeugen | HTML ohne Platzhalter, 404 nur mit `noindex`, Sitemap-Einträge = veröffentlichte Routen | Entwicklung | S | M20 | GLOBAL-015, N007, N008 |
| M18 | `/standorte/zuerich` | BEFUND | P1 | ja (G03) | Entfällt mit M48 (308). Falls die Seite bis dahin online bleibt: die 7 Linkziele korrigieren | Kein interner Link auf 404 (Crawl) | Entwicklung | S | M48 | GLOBAL-016, N009, N024 |
| M19 | Blog | BEFUND | P2 | ja (falsche Daten) | Veröffentlichungsdaten korrigieren (keine Scheinaktualität), unbelegte Zahlen streichen oder mit Quelle und Stand belegen | Jedes Datum entspricht der echten Veröffentlichung. Jede Zahl hat Quelle und Stand | Redaktion | S | M53 | GLOBAL-031, SEITE-P29-001, -P29-003 |
| M20 | Informationsarchitektur, alle Leistungs- und Standort-URLs | BEFUND | P1 | ja (G10) | Zielstruktur aus 03 (2a) umsetzen: `/leistungen` mit Unterseiten, Einzugsgebiet, Breadcrumbs. Alt-neu-Mapping (03, 2b) mit 308 bzw. 410, keine Sammelumleitung auf die Startseite. Bei Übernahme von `bgs-service.ch` auch die alten Kunden-URLs | Jede alte URL liefert das geplante Ziel (308 ohne Kette) oder den geplanten Status. Menü, Footer, Sitemap und Formular enthalten nur Zielseiten | Entwicklung/SEO, Entscheidung Kunde | M | R3, R4, R9 | GLOBAL-033, 03 K01–K13, SEITE-P02-001 |

### Welle 2: Qualität und Technik (vor oder kurz nach dem Launch)

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis |
|---|---|---|---|---|---|---|---|---|---|---|
| M21 | Alle Seiten (Architektur) | BEFUND | P1 | nein | Seiten als Server-Komponenten rendern, interaktive Teile als kleine Client-Inseln. Metadaten je Seite mit der Next.js-Metadaten-API | Ausgeliefertes HTML enthält je Seite eigene Metadaten und den vollständigen Inhalt | Entwicklung | L | M16 | GLOBAL-009, N015 |
| M22 | 26 Seiten mit Reitern und Akkordeons | BEFUND | P1 | nein | FAQ-Antworten und Reiter-Inhalte im HTML ausliefern (sichtbar oder per `details`), keine Inhalte erst nach Klick erzeugen | Textprobe jeder Antwort steht im ausgelieferten HTML | Entwicklung | S–M | M21 | GLOBAL-011, N023 |
| M23 | Hero aller Seiten mit Einblendung | BEFUND | P1 | nein | H1 und primäre CTA sofort sichtbar ausliefern. Animationen nur ergänzend, `prefers-reduced-motion` beachten | HTML ohne `opacity:0` an H1/CTA. Mobil-Screenshot direkt nach dem Laden zeigt H1 und CTA | Entwicklung/Design | S | — | GLOBAL-012, N022 |
| M24 | Footer (alle Seiten) | BEFUND | P1 | nein | Jahreszahl nicht beim Build berechnen (oder als Client-Wert rendern) | Konsole ohne React-Fehler #418 auf allen Seiten | Entwicklung | S | — | GLOBAL-013, N021 |
| M25 | Mobile Ladeleistung | BEFUND (Labor) | P1 | nein (Budget G12) | Budgets aus 01 (I) verbindlich machen. Umsetzung vor allem über M15, M23, M26, M21 | Lighthouse mobil (3 Läufe, Median) LCP ≤ 2,5 s auf Startseite, Kontakt und einer Leistungsseite. Nach dem Launch Felddaten beobachten | Entwicklung | M | M15, M21, M23, M26 | GLOBAL-025, N030 |
| M26 | Bilder, `public/` | BEFUND | P2 | nein | Responsive Bilder (`next/image` oder `srcset`), `loading="lazy"` unterhalb der ersten Ansicht, moderne Formate, 51 ungenutzte Dateien entfernen | Kein Bild mehr als 2-fach überdimensioniert. Offscreen-Bilder werden verzögert geladen | Entwicklung/Redaktion | M | M13 | GLOBAL-024, N029 |
| M27 | Alle Seiten, Navigation, Formular | BEFUND | P1 | nein | Kontrast der Primärfarbe, Zielgrössen, Skip-Link, `<main>`, Mega-Menü per Tastatur, Namen und Zustand des Mobil-Menüs, Banner als Dialog, Statusmeldungen mit `role`, kein Link um Button, nur ein `<footer>` | axe ohne Kontrast- und Zielgrössenfehler, Tastaturtest der Hauptstrecke, Screenreader-Stichprobe (NVDA oder VoiceOver) | Design/Entwicklung | M | R2 (Farbe) | GLOBAL-026, N031, N036, SEITE-P10-002, -P17-002, -P27-002 |
| M28 | Positionierung | BEFUND | P1 | nein | Workshop mit dem Kunden: für wen, welches Problem, welcher belegbare Grund für BGS. Ergebnis als eine Aussage für Startseite, Über uns und Übersicht | Schriftlich freigegebene Positionierung, jede Aussage darin belegt | Geschäftsführung Kunde, Marketing | M | R10 | GLOBAL-030, 04 |
| M29 | Kern-Leistungsseiten | BEFUND | P1 | nein | Inhalte der fünf Kernleistungen mit Fachinput des Kunden neu schreiben: Umfang, Grenzen, Ablauf, Rhythmus, Beispiele, FAQ mit echten Antworten. Umsetzung je Seite in M40–M45 | Jede Kernseite beantwortet die Fragen aus ihrem Seitenbericht. Keine Schablonensätze | Redaktion, Kunde | L | R3, M28 | GLOBAL-036 |
| M30 | Formular | BEFUND | P2 | nein | Leistungsauswahl aus der bestätigten Liste (keine Dubletten), Längengrenzen, Feld für Ort/PLZ des Objekts, eine einheitliche Rückmeldezeit, neutrale Platzhalter | Formular zeigt nur bestätigte Leistungen, Rückmeldezeit überall gleich | Entwicklung/Redaktion | S | R3, R5, M04 | GLOBAL-028, SEITE-P02-002, -P10-002 |
| M31 | Handlungsaufforderungen | BEFUND | P2 | nein | Eine primäre CTA („Kostenlose Offerte vor Ort anfragen“), eine sekundäre (Telefon). Keine CTA zu Chat oder Berater, solange R8 offen ist | Jede Seite hat genau eine primäre CTA, alle Ziele funktionieren | Marketing/Design | S | M03, R5 | GLOBAL-034 |
| M32 | Messung, Monitoring | BEFUND | P2 | nach Projektentscheidung (G13) | Fehlerüberwachung für Formular und Server-Routen (Alarm bei Versandfehlern), datenschutzkonforme Reichweitenmessung nach Entscheidung. Lead = serverseitig bestätigte, zugestellte Anfrage | Ein simulierter Versandfehler löst einen Alarm aus. Messkonzept dokumentiert und in der Datenschutzerklärung beschrieben | Operations/Marketing | S–M | M14, R11 | GLOBAL-029 |
| M33 | Sicherheitsheader | BEFUND | P2 | nein | Content-Security-Policy und Permissions-Policy passend zu den verbleibenden Diensten | Header vorhanden, Konsole ohne CSP-Verstösse | Entwicklung | S | M15 | GLOBAL-006, N004 |
| M34 | Repository | BEFUND | P2 | nein | Altlasten des Vite-Aufbaus, ungenutzte Pakete, doppelten Asset-Ordner und ungenutzte Komponenten entfernen (u. a. `ServiceTemplate`, Formularlogik in `app/kontakt/page.tsx`) | Build grün, keine ungenutzten Abhängigkeiten laut Prüfwerkzeug | Entwicklung | S | M05 | GLOBAL-008 |
| M35 | Favicon, Touch-Icon, Vorschaubild, Manifest | BEFUND | P2 | nein | Dateien nach der Markenentscheidung erstellen, Manifest-Farbe und Icons anpassen | Alle drei Pfade liefern 200 mit der richtigen Marke | Design/Entwicklung | S | R2 | GLOBAL-014, N008 |
| M36 | Gestaltung | BEFUND | P2 | nein | Farb- und Kontrastsystem, Bildwelt mit echten Fotos, einheitliche Icons, keine Emoji in Überschriften | Design-Abnahme mit Kontrastwerten ≥ 4,5:1 für Text | Design | M | R2, M13 | GLOBAL-032 |
| M37 | Texte | BEFUND | P2 | nein | Schweizer Hochdeutsch („ss“ statt „ß“), Schweizer Begriffe („Hauswartung“, „Offerte“, „Strafregisterauszug“) | Volltextsuche findet kein „ß“ | Redaktion | S | M29 | GLOBAL-037, SEITE-P04-001, -P23-002 |
| M38 | Blog-Verlinkung | BEFUND | P3 | nein | Artikel aus passenden Leistungsseiten verlinken (z. B. Kostenartikel aus der Unterhaltsreinigung) | Jeder Artikel hat mindestens einen Kontextlink von einer Leistungsseite | Redaktion/SEO | S | M53 | GLOBAL-017 |

### Seitenmaßnahmen nach Zielseite (03, Abschnitt 2a)

| ID | URL/Bereich | Befundstatus | Priorität | Launch-Blocker | Konkrete Maßnahme | Abnahmetest | Verantwortliche Rolle | Aufwand | Abhängigkeit | Nachweis |
|---|---|---|---|---|---|---|---|---|---|---|
| M39 | Startseite | BEFUND | P1 | über Globale | Neu aufbauen nach P01: bestätigte Kernleistungen zuerst, kein KI-Berater in der ersten Ansicht, Ablauf, Einzugsgebiet, echte Belege | Erste Ansicht zeigt H1, Nutzen, eine CTA. Erste Leistung ist eine bestätigte Kernleistung | Redaktion/Design | M | R2, R3, M28 | SEITE-P01-001, -P01-002 |
| M40 | `/leistungen` (neu) | BEFUND | P2 | nein | Übersicht mit Auswahlhilfe nach P02, zentrale Leistungsliste | `/leistungen` antwortet mit 200, ist per Tastatur aus dem Menü erreichbar, jede Leistung mit einem Klick erreichbar | Redaktion/Entwicklung | M | R3, M54 | SEITE-P02-001, -P02-002 |
| M41 | Unterhaltsreinigung (+ Büroreinigung, Nachfüllservice) | BEFUND | P1 | über Globale | Seite nach P03, Büroreinigung und Nachfüllservice als Abschnitte (K01, K08), 308 von beiden alten URLs. Nur bei eigener Zielgruppe zwei Seiten (03, Titel-/H1-Empfehlungen) | Eine URL für den Cluster, Grundreinigungs-Antwort im HTML mit Link | Redaktion, Kunde | M | R3, R10 | SEITE-P03-001, -P03-002, -P13-001 bis -003, -P25-001 bis -003 |
| M42 | Sonderreinigungen (+ Baureinigung bei Eignung) | BEFUND | P1 | über Globale | Leistungsliste vom Kunden (R3). Ohne Liste nicht veröffentlichen. Zuständig für Grund-, Bauend- und Spezialreinigung (K07). Hero-Motiv passend | Seite nennt jede angebotene Sonderreinigung mit Einsatzfall. Einheitliche Definitionen auf allen Seiten | Redaktion, Kunde | M | R3 | SEITE-P05-001 bis -003, -P14-001 bis -003 |
| M43 | Hauswartung (+ Facility Management) | BEFUND | P1 | über Globale | Seite nach P04 mit dem Kundenbegriff „Hauswartung“, Facility Management integriert (K02), 308 | Eine URL für „Hauswartung/Hausmeisterservice“, kein eigener FM-Menüpunkt | Redaktion, Kunde | M | R3 | SEITE-P04-001, -P04-002, -P20-001 bis -004 |
| M44 | Winterdienst | BEFUND | P1 | ja (G09) | Einzige Seite mit Winterdienst-Zusagen (K03). Einsatzregel, Zeiten und Dokumentation nur mit Beleg | Volltextsuche: Winterdienst-Zusagen nur hier, jede mit Beleg | Redaktion, Kunde | S–M | R6 | SEITE-P06-001, -P06-002, -P07-001 |
| M45 | Aussen- und Grünflächenpflege | BEFUND | P2 | nein | Seite nach P07 als Teil der Hauswartung, ohne eigenen Winterdienst-Teil, ein Leistungsname | Ein Name überall, Winterdienst nur als Link | Redaktion | S | R3 | SEITE-P07-001, -P07-002 |
| M46 | Bedingte Leistungen: Fenster/Fassaden, Industrie/Hallen/Maschinen, Haushalt/Luxusimmobilien, Privatjet, Yacht | BEFUND | P1 | ja (G09, solange unbestätigt online) | Je Leistung R3 einholen. Bestätigt: zusammengefasste Seite nach 03 (K04–K06) mit Pfad (a) des Berichts. Nicht bestätigt: Pfad (b), also 308 auf die fachlich nächste Kernleistung oder 410. Überall entfernen (Menü, Footer, Formular, Sitemap, Startseite, Chat-Katalog) | Für jede der 11 URLs ist der geplante Status live. Keine unbestätigte Leistung irgendwo erwähnt | Kunde (Entscheidung), Entwicklung | M | R3 | SEITE-P15-001 bis -003, -P16-001 bis -004, -P17-001 bis -003, -P18-001 bis -003, -P19-001 bis -004, -P21-001 bis -003, -P22-001 bis -003, -P23-001 bis -004, -P24-001 bis -004, 03 K04–K06 |
| M47 | Über uns | BEFUND | P1 | über Globale | Neu nach P08: registrierter Name, verantwortliche Personen mit Einwilligung, Arbeitsweise, Geschichte nur belegt (Registerdaten N037) | Mindestens eine verantwortliche Person mit Funktion und Kontaktweg. Keine unbelegte Jahreszahl | Geschäftsführung Kunde, Redaktion | S–M | R2, R6, R12 | SEITE-P08-001, -P08-002 |
| M48 | Einzugsgebiet (+ drei Standortseiten) | BEFUND | P1 | ja (G09) | `/einzugsgebiet` nach P09, 308 von allen Standortseiten, Zürich nur nach Bestätigung. Preise der Zürich-Seite entfernen | Keine Ortsseite ohne eigenen Inhalt. Keine Preisangabe ohne Freigabe | Redaktion/Entwicklung | S–M | R4 | SEITE-P09-001, -P09-002 |
| M49 | Kontakt | BEFUND | P1 | über Globale | Nach P10: Formular auf der Seite, bestätigte Kontaktdaten und Rückmeldezeit, Ablauf bis zur Offerte, Karte entfernen | Testanfrage kommt beim Kunden an (M04), keine Kartenanfrage beim Laden | Redaktion/Entwicklung | S–M | R5, M04, M15 | SEITE-P10-001, -P10-002 |
| M50 | Impressum | BEFUND | P1 | ja (G07) | Nach P11 mit Registerdaten (N033, N037), Rechtsprüfung | Name, Rechtsform, Adresse, UID zeichengenau wie im Register | Redaktion, Recht | S | R7 | SEITE-P11-001, -P11-002 |
| M51 | Datenschutz | BEFUND | P1 | ja (G07) | Nach P12 gegen die fertige Umsetzung schreiben (M14) | Inventar aus P12 wiederholt, jede Zeile korrekt | Recht, Redaktion | S–M | M14 | SEITE-P12-001, -P12-002 |
| M52 | Referenzen | BEFUND | P1 | ja (G09) | Bis zu echten, freigegebenen Fällen nicht veröffentlichen (404, aus Navigation, Footer, Sitemap). Danach nach dem Zielbild in P26 | Jede Referenz hat Freigabe, echte Fotos, nachvollziehbare Zahlen | Kunde, Redaktion | S (Entfernen), M (Neu) | R6 | SEITE-P26-001 bis -005 |
| M53 | Ratgeber (Blog) | BEFUND | P2 | ja (falsche Daten) | P27 überarbeiten, P28 in P30 zusammenführen (308), P29 ohne unbelegte Zahlen, P31 zurückstellen, P30 überarbeiten | Keine Scheinaktualität, keine unbelegten Zahlen, jeder Artikel mit Kontextlinks | Redaktion | M | M19 | SEITE-P27 bis -P31 (alle Befunde), 03 K10, K12 |
| M54 | Zentrale Fakten- und Leistungsliste, Leistungsvorlage | BEFUND | P1 | nein (Voraussetzung für M10, M11, M30) | Eine Datenquelle für Firmenname, Kontakt, Region, Erreichbarkeit, Rückmeldezeit, Versicherung, Zertifikate und Leistungen. Daraus Menü, Footer, Formular, Seiten, Chat-Katalog und Schema speisen. Eine datengetriebene Vorlage für Leistungsseiten | Volltextsuche findet je Fakt genau eine Formulierung. Neue Leistung = ein Eintrag in der Liste | Entwicklung, Redaktion | M | R2–R6 | 03 (7a, 7e), SEITE-P02-002 |
| M55 | Verzeichnisse, Google-Unternehmensprofil | HYPOTHESE (Profil nicht geprüft) | P3 | nein | Einheitliche Firmenangaben (Name, Adresse, Telefon, Website) in Google-Unternehmensprofil, local.ch, search.ch, Moneyhouse, Facebook pflegen. Echte Bewertungen erbitten, keine gekauften | Stichprobe: alle Einträge mit identischen Angaben und der neuen Website-URL | Kunde/Marketing | S | R11, Launch | 03 (Abschnitt 5), N038, [S32] |

**Summe:** 55 Maßnahmen (M01–M55). P0: 4, P1: 35, P2: 14, P3: 2. „Über Globale“ in der Spalte Launch-Blocker heißt: Die Seite ist über M10–M13 blockiert. Alle 37 globalen Befunde und alle 88 Seitenbefunde sind mindestens einer Maßnahme zugeordnet.

## Regeln

- [x] Nur nachvollziehbare Befunde oder klar benannte Hypothesen aufnehmen. → *Erledigt: Jede Maßnahme verweist auf GLOBAL-, SEITE- oder N-IDs. Hypothesen sind markiert (M01, M12, M55).*
- [x] Globale Probleme einmal führen; betroffene Seiten auf die gemeinsame Befund-ID verweisen lassen. → *Erledigt: Seitenmaßnahmen verweisen für Behauptungen, Bilder und Stimmen auf M11–M13 („über Globale“).*
- [x] Jede Aufgabe hat eine konkrete Handlung in Alltagssprache, keinen vagen Wunsch wie „SEO verbessern“. → *Erledigt.*
- [x] Messbare Abnahme passend zur Aufgabe definieren, nicht pauschal „100 % Score“. → *Erledigt, Spalte „Abnahmetest“.*
- [x] Vorgeschlagene neue Titel, Beschreibungen und CTA-Texte direkt in der betreffenden Seitenanalyse ausschreiben. → *Erledigt in `Seiten/` (Abschnitt 4 je Bericht) und 03 (Abgrenzungen).*
- [x] Aufwand als nachvollziehbare Größenklasse oder begründete Schätzung kennzeichnen. → *S/M/L, oben definiert. Grobe Schätzung, Wartezeiten auf Kundenangaben nicht eingerechnet.*
- [x] Unsichere Conversion-/SEO-Effekte als Hypothese markieren. Keine künstliche Prozentprognose. → *Erledigt: keine Prozentprognosen. SEO-Wirkung der Zusammenlegungen ist in 03 als HYPOTHESE mit Erfolgskriterium geführt.*
- [x] Eine Behebung nur dann als erledigt markieren, wenn eine spätere autorisierte Umsetzung geprüft wurde. In diesem Auftrag wird nichts behoben. → *Alle Maßnahmen offen.*

## Reihenfolge nach dem Audit

Zuerst Produktions-/Datenrisiken und funktionskritische Probleme. Danach Positionierung, Seitenzuständigkeit und globale Standards. Anschließend seitenweise Content-/UX-/SEO-Maßnahmen; zum Schluss gezielte Wachstumsversuche. Abhängigkeiten können die Reihenfolge verändern, müssen aber erklärt werden.

**Konkrete Reihenfolge für BGS:**

1. **Welle 0 (sofort, auch ohne Umbau):** M01 → M05 → M02, parallel M03, M04, M07, M08, M09, M06. Begründung: Diese Punkte betreffen die heute öffentlich erreichbare Seite (Sicherheit, verlorene Anfragen, falsche Kontaktdaten).
2. **Kundenklärung:** R2–R7 und R10 in einem Termin (07, Abschnitt 2a). Ohne R3 und R5 lassen sich weder Seitenstruktur noch Anfrageweg festlegen.
3. **Grundlagen des Umbaus:** M28 (Positionierung), M54 (Faktenliste und Vorlage), M20 (Struktur und Weiterleitungen), M21 (Rendering und Metadaten).
4. **Inhalte und Belege:** M10–M13, M29, M39–M53.
5. **Qualität:** M22–M27, M30, M31, M33–M37.
6. **Recht und Freigabe:** M14, M50, M51, danach Deploy-Freigabe (05).
7. **Nach dem Launch:** M32 (Messung, falls nicht vorher), M38, M55, Auswertung der Erfolgskriterien aus 03.

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S32 und die Quellen der verlinkten Befunde).
