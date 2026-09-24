# Globale Website-Analyse

**Status: Phase 2 durchgeführt am 24.09.2026.** Bestandsaufnahme (Phase 1), 169 Prüfpunkte A–N bearbeitet (145 mit Status abgehakt, 24 begründet offen), 35 globale Befunde. Die Punkte A–N sind Prüfaufträge. Befunde werden erst nach Prüfung mit ID und Nachweis eingetragen. Quellen-IDs beziehen sich auf `09-QUELLEN.md`, Nachweis-IDs (N…) auf `08-PRUEFNACHWEISE.md`.

## Bestandsaufnahme der aktuellen Architektur (Phase 1, Stand 24.09.2026)

Dokumentiert, nicht bewertet. Die Bewertung folgt in den Abschnitten A–N.

| Bereich | Ist-Zustand | Nachweis |
|---|---|---|
| Projektrolle | Neue Website, die Brandea für den Kunden BGS Gebäudeservice GmbH baut. Die bisherige Kunden-Website `www.bgs-service.ch` (Wix) läuft parallel | E07, N014 |
| Hosting | Vercel, Projekt `bgs-gebaeudeservice`, nur `*.vercel.app`-Domains. Build- und Funktionsregion iad1 (Washington, D.C., USA). Vorschauen per Vercel Authentication geschützt | N002, N003, N008 |
| Framework | Next.js **15.1.11** (App Router), React 19.2.0, TypeScript 5.6.3 (`strict`), Tailwind CSS 3.4, Radix UI/shadcn-Komponenten, Framer Motion | N003, N005 |
| Paketverwaltung | Vercel installiert mit `npm install`. `package-lock.json` ist nicht synchron mit `package.json`. Zusätzlich liegt ein `pnpm-lock.yaml` vor. Framework-Voreinstellung im Vercel-Projekt steht noch auf „vite“ | N002, N003, N005 |
| Qualitätssicherung | Build und Typecheck laufen. ESLint ist nicht konfiguriert, es gibt keine Tests und kein CI | N005 |
| Rendering | 32 Inhaltsseiten, alle `'use client'`, statisch vorgerendert. Keine dynamischen Routen, keine Middleware, keine Server Actions, keine Rewrites | N005, N015 |
| Metadaten | Nur global in `app/layout.tsx`. Die `SEO`-Komponente der Seiten ist wirkungslos (`return null`). Keine strukturierten Daten im HTML | N007, N015 |
| Inhalte | Fest im TSX-Code je Seite, kein CMS und keine zentrale Datenquelle für Firmendaten (Telefon/E-Mail an mehreren Stellen) | N009, N015 |
| Globale Bausteine | `SwissNavigation` (Mega-Menü), `SwissFooter` (mit Kontaktformular, Anker `#kontakt-formular`), `AIChatbot`, `CookieConsent`, `ErrorBoundary` auf jeder Seite über das Layout bzw. je Seite | N009, `app/layout.tsx:92-104` |
| Backend | 5 API-Routen: `/api/contact` (Resend, Absender `info@bgs-service.ch` → `info@brandea.de`), `/api/chat` und `/api/industry-analysis` (Google Gemini `gemini-2.5-flash`), `/api/chat-to-specialist` (Resend), `/api/health` | N016, N017 |
| Drittdienste | Resend (E-Mail), Google Gemini (KI), Google Maps JS nur auf `/kontakt`. Keine Analytics, keine externen Schriften | N010, N011 |
| Umgebungsvariablen | `ANTHROPIC_API_KEY` (ungenutzt), `GEMINI_API_KEY`, `RESEND_API_KEY`, `VITE_GOOGLE_MAPS_API_KEY`, jeweils identisch in Production, Preview und Development. `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` fehlt | N011 |
| Laufzeitzustand | KI-Chat fällt aus (ungültiger Gemini-Schlüssel), wird aber mit HTTP 200 beantwortet. Keine Formularanfrage in den letzten 7 Tagen | N012 |
| Altlasten | Vollständiger früherer Vite-Aufbau im Repository (56 Seiten-Dateien, Express-Server, Vite-Konfiguration, Wouter-Patch). Doppelter Asset-Ordner `client/public/` | N019 |
| Medien | 102 Dateien in `public/`. `next/image` wird nicht verwendet, die Bildoptimierung ist aber für beliebige Hosts offen | N018, N019 |

## A. Positionierung, Zielgruppe und Leistungsversprechen

**Eigener Prüfstandard:** Nicht mit Farben beginnen, sondern mit dem Kaufgrund.

- [x] Branche, fünf Leistungen, bediente Regionen und Ausschlüsse aus bestätigten Angaben erfassen. → *HYPOTHESE/offen: Bestätigte Angaben fehlen. Der Widerspruch zwischen neuer Seite (18 Leistungen, ZH/ZG/LU, „Schweizweit“) und Kunden-Eigenangabe (2 Bereiche, LU/ZG) ist dokumentiert → B03, B04, GLOBAL-021, GLOBAL-030*
- [ ] Primäres wirtschaftliches Ziel festlegen: qualifizierte Anfragen, gebuchte Erstgespräche oder eine andere reale Zielhandlung. → *NICHT PRÜFBAR: Geschäftsentscheidung → B05*
- [ ] Für jede Leistung die tatsächlichen Entscheider, Mitentscheider, Auslöser und Einwände erfassen. Berufsrollen und Kaufsituationen sind wichtiger als erfundene Persona-Vornamen. → *NICHT PRÜFBAR: Kundenangaben fehlen → B04*
- [x] Persona-Aussagen nach Herkunft trennen: Kundeninterview, Vertriebsbeobachtung, CRM-Auswertung oder noch unbestätigte Hypothese. → *NICHT ANWENDBAR im Bestand (die Seite enthält keine Persona-Aussagen). Zielgruppen in dieser Analyse sind als HYPOTHESE markiert (GLOBAL-030)*
- [x] Überprüfen, ob Texte den Kundenbedarf beschreiben oder überwiegend Selbstlob des Unternehmens enthalten. → *BEFUND: überwiegend Selbstlob und austauschbare Formeln → GLOBAL-030*
- [x] Differenzierungsbehauptungen in ein Nachweisregister aufnehmen: behaupteter Vorteil, Beleg, zulässige Formulierung und zuständige Person. → *BEFUND: Register siehe unten („Nachweisregister Unternehmensbehauptungen“), für keine Behauptung liegt ein Beleg vor → GLOBAL-021, GLOBAL-022*
- [ ] Leistungsumfang, Grenzen, Mitwirkungspflichten und realistischer Einstieg sind verständlich. → *Offen, je Leistungsseite in Phase 3*
- [ ] Untersuchen, ob die fünf Leistungen inhaltlich unterscheidbar sind und sinnvolle Auswahlhilfe bieten. → *Offen, Phase 4 (Kannibalisierung) nach Klärung B03*
- [ ] Für das gesamte Angebot eine prägnante Positionierung formulieren lassen: für wen, welches Problem, welches Ergebnis, welche belastbare Besonderheit. → *Offen, braucht B04–B06 → GLOBAL-030*
- [x] Unbequeme Frage beantworten: **Warum sollte ein passender Kunde dieses Unternehmen wählen, wenn alle Wettbewerber ebenfalls „professionell, zuverlässig und individuell“ versprechen?** → *BEFUND: Derzeit nicht beantwortbar, die Seite enthält keine belegte Besonderheit. Die Antwort muss vom Kunden kommen → B06, GLOBAL-030*

**Ergebnis:** Eine belegte Positionierung oder eine klare Liste fehlender Unternehmensinformationen. Noch unbekannte Fakten nicht mit Werbesprache ersetzen.


### Nachweisregister Unternehmensbehauptungen (Stand 24.09.2026)

Keine der Behauptungen ist bisher belegt. Die Spalte „Zulässige Formulierung“ ist ein Vorschlag bis zum Beleg und kein fertiger Text.

| Behauptung | Fundstelle | Beleg | Zulässige Formulierung (Vorschlag) | Zuständig |
|---|---|---|---|---|
| „ISO 9001 zertifiziert“, „Zertifizierte Qualität“, „Zertifiziertes Qualitätsmanagementsystem“ | Büroreinigung, Startseite, Baureinigung, Industriereinigung | **Widerlegt:** laut Impressum „in Bearbeitung“ | Streichen. Erst nach Zertifikat nennen, mit Norm, Stelle und Gültigkeit | Geschäftsführung Kunde |
| „500+ Kunden“ | Startseite | fehlt | Streichen oder belegte Zahl mit Stichtag | Geschäftsführung Kunde |
| „15+ Jahre Erfahrung“, Gründung 2005 | Startseite, Baureinigung, Über uns | fehlt (Rechtsform und Gründung der GmbH unbekannt) | Nur mit belegtem Gründungsjahr, z. B. Handelsregister | Geschäftsführung Kunde |
| „einer der führenden Reinigungsunternehmen in der Schweiz“, „führende Reinigungsfirma in Zug“ | Über uns, Zug | fehlt | Streichen | Redaktion |
| „Schweizweit“, Standort Zürich, „alle großen Schweizer Flughäfen“ | Startseite, Zürich-Seite, Karte, Privatjet | Widerspruch zur Eigenangabe (LU/ZG) | Nur tatsächlich bediente Regionen (B04) | Geschäftsführung Kunde |
| „24/7“, Vor Ort in 1–2 bzw. 2–4 Stunden | Startseite, Hausmeister, Winterdienst, Sonderleistungen, Privatjet | fehlt | Nur mit nachweisbarer Bereitschaftsregelung, sonst reale Erreichbarkeitszeiten | Geschäftsführung Kunde |
| „Festpreis-Garantie“ | Fassadenreinigung | fehlt | Nur mit Bedingungen, sonst streichen | Geschäftsführung Kunde |
| Kundenstimmen (Startseite, Über uns, Referenzen) | siehe GLOBAL-022 | fehlt | Nur mit Freigabe der Person/Organisation | Kunde/Redaktion |
| Referenzprojekte, Vorher/Nachher, Teambild | Referenzen, Startseite, Über uns | Impressum: KI-Bilder | Nur echte, freigegebene Fotos | Kunde/Design |
| Rückmeldung „innerhalb von 24 Stunden“ bzw. „12 Stunden (werktags)“ | Formular, Kontakt, Chat | fehlt | Eine bestätigte Zeit (B10) | Geschäftsführung Kunde |
| „Erstklassig“, „Schweizer Präzision“, „höchste Standards“ | Startseite, diverse | nicht belegbar | Durch konkrete, prüfbare Aussagen ersetzen (Ablauf, Zuständigkeit, Kontrolle) | Redaktion |

## B. Unternehmensidentität und Vertrauen

Google beschreibt hilfreiche, eigenständige Inhalte und nachvollziehbare Expertise als wichtige Qualitätsorientierung. E-E-A-T ist dabei kein einzelner technischer Rankingwert. [S02]

Unser Prüfkatalog:

- [x] Firmenname, Rechtsform, Anschrift, Telefonnummer, E-Mail und verantwortliche Personen sind konsistent. → *BEFUND → GLOBAL-020*
- [x] Unternehmensgeschichte, Teamgröße, Erfahrung, Zertifikate, Mitgliedschaften und Leistungsfähigkeit sind belegbar. → *BEFUND: unbelegt, ISO-Angabe durch das eigene Impressum widerlegt → GLOBAL-021*
- [x] Kundenlogos und Referenzen haben nachvollziehbare Nutzungsfreigaben. Kein Logo bedeutet automatisch eine aktuelle Kundenbeziehung. → *BEFUND: keine Freigaben erkennbar, Referenzbilder vermutlich KI → GLOBAL-022, GLOBAL-023. Referenzen-Seite im Detail: Phase 3*
- [x] Testimonials stammen von echten Personen/Organisationen, stimmen mit dem Original überein und verschweigen keine relevante Gegenleistung. → *HYPOTHESE (vermutlich erfunden) → GLOBAL-022*
- [ ] Fallbeispiele nennen nachvollziehbar Ausgangslage, Vorgehen, Ergebnis, Zeitraum, eigenen Beitrag und Grenzen. Anonymisierung ist transparent, nicht vorgetäuscht. → *Offen, Referenzen-Seite in Phase 3*
- [x] Ansprechpartner und Verantwortlichkeiten sind erkennbar; keine erfundenen KI-Mitarbeiter als reale Teammitglieder. → *BEFUND: KI-Teambild als eigenes Team ausgegeben → GLOBAL-023. Eine verantwortliche Person ist nur in Impressum und Über uns genannt*
- [x] Aussagen wie „führend“, „Nr. 1“, „garantiert“, „zertifiziert“ oder „100 %“ auf Nachweis und rechtliche Belastbarkeit prüfen. → *BEFUND → GLOBAL-021*
- [x] Erreichbarkeit und Rückmeldeversprechen passen zur tatsächlichen Organisation. → *BEFUND: 24 h gegenüber 12 h, 24/7 und Vor-Ort-Zeiten unbelegt → GLOBAL-021, GLOBAL-028. Operativ offen → B10*
- [x] Professionelle Domain-E-Mail, Logo, Favicon und Social-Vorschauen wirken konsistent. → *BEFUND → GLOBAL-014, GLOBAL-020*
- [x] Platzhalter, Demo-Texte, defekte Links, unpassende Übersetzungen und Template-Reste vollständig erfassen. → *BEFUND: Verifizierungs-Platzhalter, defekte Links, Vorlagenreste → GLOBAL-015, GLOBAL-016, GLOBAL-008. Kein sichtbarer Blindtext (BESTANDEN)*

**Abnahmekriterium:** Jede wesentliche Vertrauensbehauptung ist belegt oder wird zur Entfernung/Abschwächung vorgeschlagen. Keine erfundenen Belege als „Design-Platzhalter“ zur Veröffentlichung vorsehen.

## C. Branding, großzügiges Layout und Designsystem

**Das sind Projekt- und Designkriterien, keine Google-Vorschriften.**

- [x] Bestandsaufnahme von Logo, Farbpalette, Typografie, Bildstil, Icon-Stil, Radius, Schatten und Bewegung erstellen. → *Erfasst, siehe „Design-Bestandsaufnahme“ unten*
- [x] Prüfen, ob die visuelle Sprache zur Branche und Entscheidungssituation passt; „hochwertig“ muss nicht dunkel, goldfarben oder animationslastig bedeuten. → *HYPOTHESE: ordentlich, aber austauschbar, KI-Bildwelt → GLOBAL-032, GLOBAL-023*
- [x] Zwei bis drei nachvollziehbare Markenrichtungen nur beschreiben: gewünschte Wirkung, Eignung, Risiken und Unterschiede. Noch nichts umsetzen. → *Beschrieben, siehe „Markenrichtungen“ unten. Nichts umgesetzt*
- [x] Zentrale Design-Tokens für Markenfarben, Oberflächen, Text, Statusfarben, Schriften, Abstände, Breiten und Interaktionszustände prüfen. → *BEFUND: shadcn-Tokens vorhanden, das Markenrot ist mit weißer Schrift nicht barrierefrei, keine dokumentierten Rollen → GLOBAL-026, GLOBAL-032*
- [x] Gemeinsame Buttons, Formularfelder, Navigation, Footer und CTA-Bereiche dürfen nicht je Seite voneinander abweichend neu gestaltet sein. → *BESTANDEN für Komponenten (gemeinsame Navigation, Footer, Buttons). BEFUND für CTA-Beschriftungen → GLOBAL-034*
- [x] Full-Width-Hintergründe von Textbreiten unterscheiden. Große Flächen mit relevanten Bildern, Vergleichsansichten, Fallbeispielen oder sinnvollen Mehrspaltenrastern nutzen. → *BESTANDEN: Hintergrund volle Breite, Inhalt zentriert (Breiten-Matrix N020)*
- [x] Fließtext nicht über einen kompletten Ultrawide-Monitor ziehen. Etwa 45–80 Zeichen je Zeile können als zu testende Gestaltungsheuristik dienen, nicht als feste Norm. → *BESTANDEN (kein Ziehen über Ultrawide). HYPOTHESE: Zeilenlänge etwa 100 Zeichen ab 1280 px → GLOBAL-032*
- [x] Inhaltsdichte prüfen: keine identischen XXL-Karten mit einem Satz Inhalt, keine leeren Abschnitte und keine künstliche Streckung. → *HYPOTHESE: wiederkehrende Karten-Raster mit Kurztexten. Seitenweise in Phase 3*
- [x] Informationshierarchie ist auch ohne Farben und Animation erkennbar. → *BEFUND: Ohne JavaScript bzw. Animation ist der Hero der Startseite unsichtbar → GLOBAL-012*
- [x] Auf schmalen Displays bleibt eine sinnvolle Lesereihenfolge erhalten; keine Desktop-Komposition, die mobil logisch zerfällt. → *BEFUND für die erste Ansicht der Startseite (kein Text sichtbar) → GLOBAL-012. Übrige Reihenfolge laut Stichprobe logisch, Detail in Phase 3*
- [x] Funktionale Icons sparsam verwenden; keine Emoji-Optik und keine austauschbaren Icon-Wände. → *BEFUND: generische Icon-Raster → GLOBAL-032*
- [x] Animation unterstützt Orientierung und Feedback, blockiert aber weder Scrollen noch Lesen. Reduzierte Bewegung respektieren. → *BEFUND: Einblendungen verbergen Inhalte, „Bewegung reduzieren“ wird nicht berücksichtigt → GLOBAL-012*
- [x] Bildausschnitte, Zeilenumbrüche und Section-Übergänge bei 360, 390, 768, 1280, 1440, 1920 und 2560 CSS-Pixeln prüfen. Das ist die vorgeschlagene Testmatrix, keine gesetzliche Liste. → *Geprüft (N020, Bildschirmfotos der Matrix für 4 Seiten, Overflow-Messung für alle 32) → GLOBAL-032*
- [x] Kein horizontaler Seiten-Overflow; notwendige breite Datentabellen haben eine verständliche eigene Bedienung. → *BESTANDEN bis auf `/referenzen` bei 768 px → GLOBAL-032*
- [x] Inspiration aus FIMI konkret benennen, aber eigenständige Markenführung und passende Inhalte verlangen. → *Siehe „FIMI-Inspiration (Prinzipien)“ unten, nur lesend (E02, E06)*

**Abnahme:** Desktop-Breite wirkt bewusst genutzt, mobile Bedienbarkeit bleibt intakt, globale Muster sind konsistent. Das Design darf nicht nur auf einer einzigen Screenshot-Größe funktionieren.


### Design-Bestandsaufnahme (Stand 24.09.2026)

| Element | Ist-Zustand | Nachweis |
|---|---|---|
| Logo | Wappen-Symbol mit Schriftzug „SWISS REINIGUNG“ (`public/swiss-logo.webp`), nicht „BGS“ | N026 |
| Farben | shadcn-Tokens in `app/globals.css`, Primärfarbe Rot `hsl(0 84% 60%)` (≈ `#ef4444`), Neutraltöne Slate. Manifest noch Blau | N008, N031 |
| Typografie | Inter über `next/font`, fette Überschriften, Fließtext in Slate-Grau | Code |
| Bildstil | Überwiegend KI-Motive (1536×1024), Personen in wechselnder Arbeitskleidung, Schweizer Kulisse | N029 |
| Icons | Lucide-Outline-Icons in Rot, wiederkehrende Raster (Gebäude, Uhr, Schild, Funkeln) | Bildschirmfotos |
| Radius/Schatten | Abgerundete Karten mit deutlichem Schatten | Bildschirmfotos |
| Bewegung | Framer Motion (Einblenden, Parallax, Tilt, „Magnetic Hover“), Inhalte starten teils unsichtbar, keine Rücksicht auf „Bewegung reduzieren“ | N022, GLOBAL-012 |

### Markenrichtungen (nur beschrieben, keine Umsetzung)

Voraussetzung ist die Markenentscheidung des Kunden (B09). Alle drei Richtungen gehen von „BGS Gebäudeservice“ als Absender aus.

1. **Regional und verlässlich (Hauswart + Reinigung aus einer Hand).** Wirkung: nahbar, bodenständig, zuständig für Liegenschaften in LU/ZG. Eignung: passt zur Eigenangabe („Hauswart- und Reinigungsfirma“) und zu Verwaltungen und Eigentümern. Risiko: wirkt klein, wenn echte Fotos und Belege fehlen. Unterschied: echte Team- und Objektfotos, klare Zuständigkeiten, Ansprechpartner mit Gesicht.
2. **Sachlich-professionell für Gewerbe und Verwaltung.** Wirkung: strukturiert, prozessklar, dokumentationsstark. Eignung: B2B-Kunden mit Leistungsverzeichnissen und Qualitätskontrolle. Risiko: austauschbar, wenn Prozesse nur behauptet werden. Unterschied: Ablaufgrafiken, Checklisten, Reinigungsplan-Beispiele, nüchterne Farbwelt mit einem Akzent.
3. **Schweizer Präzision, reduziert.** Wirkung: hochwertig durch Klarheit statt Luxus-Sprache. Eignung: Beibehalt des Markenrots, allerdings abgedunkelt und barrierefrei, viel Weißraum, starke Typografie-Hierarchie. Risiko: Premium-Versprechen ohne Premium-Substanz wirkt unglaubwürdig (GLOBAL-021). Unterschied: wenige, große echte Bilder, kaum Animation, keine Icon-Wände.

### FIMI-Inspiration (Prinzipien, nur lesend, E02/E06)

Gelesen wurden `FIMI-STANDARDS.md`, `MASTERPLAN-WEBSITE-REDESIGN.md` und `STADT-LANDINGPAGES-REGELWERK.md` im lokalen Klon (`1143a9f`). Übernommen werden nur Prinzipien, keine Texte, Logos, Farben, Referenzen oder Assets.

| Prinzip bei FIMI | Übertragung auf BGS | Bezug |
|---|---|---|
| Farbrollen als dokumentierte Tokens (Akzent vs. Fläche, Hover-Varianten, klare Regeln) | Eigene BGS-Tokens mit Rollen und barrierefreien Kombinationen dokumentieren | GLOBAL-026, -032 |
| Texte aus Kundensicht, Format „Problem → Lösung“, Tonalität „direkt, konkret, keine Floskeln“ | Leistungsseiten von Selbstlob auf Kundenprobleme umstellen | GLOBAL-030 |
| Register erlaubter Formulierungen für Firmenfakten (z. B. „arbeitet nach Standards“ statt „zertifiziert“) | Nachweisregister oben als verbindliche Formulierungsliste führen | GLOBAL-021 |
| Einheitliche CTA-Texte und feste CTA-Positionen | Eine primäre und eine sekundäre Zielhandlung festlegen | GLOBAL-034 |
| Layout-Muster: breiter Container mit großzügigem Innenabstand, Sticky-Seitenleiste mit Überschrift und CTA neben Karten, abwechselnde Bild-/Textblöcke | Desktop-Fläche sinnvoll nutzen statt Karten-Rastern | Abschnitt C, GLOBAL-032 |
| Seitenordner mit zusammensetzender `page.tsx`, seitenspezifischen Sektionskomponenten und gemeinsamen Bausteinen (Section-Header, CTA-Section, FAQ-Section, verwandte Leistungen) | Zielstruktur für den Umbau, entspricht Abschnitt 8 der Vorgabe | GLOBAL-009 |
| Stadtseiten nur mit überwiegend eigenem Inhalt (lokale Bezüge, echte Referenzen, echte Fotos), „Stadtname austauschen“ ausdrücklich verboten | Standortseiten nur für real bediente Regionen mit eigenem Nutzen | GLOBAL-021, S33 |
| Zentrale Metadaten-Datei für alle Seiten | Ein Metadaten-Register je Seite als Grundlage für GLOBAL-010 | GLOBAL-010 |

**Nicht übernehmen (widerspricht dem goldenen Stand):** garantierte Reaktionszeiten und „100 %“-Versprechen ohne Beleg, `LocalBusiness`-Markup je Stadt ohne echte Niederlassung, starre Zeichenzahlen für Titel und Beschreibungen als Regel, FAQ-Texte primär „SEO-optimiert“ statt aus echten Einwänden, pauschal fette Fließtexte (die Lesbarkeit ist im Test zu prüfen).

## D. Content-Qualität und natürliche Sprache

**Eigene redaktionelle Prüfung, orientiert an den Qualitätsfragen in [S02]:**

- [ ] Jede Seite beantwortet eine konkrete Frage beziehungsweise unterstützt eine konkrete Entscheidung. → *Offen, Phase 3*
- [x] Textaussagen lassen sich auf das tatsächliche Unternehmen beziehen. Der Austauschtest wird durchgeführt: Könnte unverändert ein beliebiger Firmenname eingesetzt werden? → *BEFUND: Austauschtest nicht bestanden → GLOBAL-030*
- [ ] Konkrete Abläufe, Zuständigkeiten, Leistungsgrenzen und Beispiele ersetzen Füllwörter. → *Offen, Phase 3*
- [ ] Fachbegriffe sind korrekt und werden bei Bedarf erklärt; Fachlichkeit nicht mit unnötiger Komplexität verwechseln. → *Offen, Phase 3*
- [x] Satzrhythmus, Überschriften und Wortwahl klingen natürlich, nicht wie ein seriell befülltes Template. → *BEFUND: seriell befüllte Vorlage, z. B. H1-Muster „Professionelle …“ auf 12 Seiten (N007) → GLOBAL-030*
- [x] Kundennutzen und reale Belege stehen zusammen. Zahlen ohne Zeitraum, Bezugsgröße oder Quelle werden markiert. → *BEFUND: Zahlen ohne Beleg markiert → GLOBAL-021, GLOBAL-031*
- [ ] FAQs stammen aus echten Einwänden oder plausibel begründeten Recherchefragen, nicht aus dem Wunsch nach mehr Keywords. → *Offen, Phase 3 (FAQ-Inhalte liegen in Akkordeons, GLOBAL-011)*
- [ ] Einstieg, Zwischenüberschriften und CTA sind auf Suchintention und Entscheidungsreife abgestimmt. → *Offen, Phase 3/4*
- [x] Keine Keyword-Dichte, Mindestwortzahl oder vermeintlicher „KI-Erkennungswert“ als Abnahmeziel. → *Eingehalten: Diese Analyse nutzt keine solchen Abnahmeziele*
- [x] Keine Scheinaktualität durch automatisch geänderte Jahreszahlen; inhaltliche Pflege und echte Überarbeitung unterscheiden. → *BEFUND: automatisches Footer-Jahr (GLOBAL-013), Blog-Daten vor Projektbeginn (GLOBAL-031)*
- [ ] Redaktionsverantwortung und spätere Aktualisierungsanlässe sind zugeordnet. → *NICHT PRÜFBAR → B14*

**Erforderlicher Befundstil:** Problematische Passage kurz zitieren, Problem erklären, eine konkrete Ersatzfassung vorschlagen und fehlende Fakten benennen. Nicht nur „Texte hochwertiger machen“ schreiben.

## E. Suchintention, Seitenarchitektur und interne Verlinkung

- [x] Alle vorhandenen Routen, Navigationen, Footerverweise, XML-Sitemap-Einträge und dynamischen Seiten gegeneinander abgleichen. → *BESTANDEN: 32 Routen = 32 Sitemap-Einträge = Navigation/Footer (02-URL-INVENTAR)*
- [ ] Jede kommerzielle Kernseite hat einen klaren Themen-/Intent-Schwerpunkt. → *Offen, Intent-Matrix Phase 4*
- [x] Startseite und Leistungsübersicht übernehmen Orientierung; einzelne Leistungsseiten beantworten jeweils spezifische Entscheidungsfragen. → *BEFUND: Die Leistungsübersicht fehlt → GLOBAL-033*
- [x] Einzugsgebiet und konkreter Unternehmensstandort werden nicht verwechselt. → *BEFUND: „Standorte“ und Karten-Marker suggerieren Niederlassungen in Zürich und Zug, die Kunden-Eigenangabe nennt ein Arbeitsgebiet LU/ZG → GLOBAL-021. Detail Phase 3*
- [x] Für jede relevante Seite mindestens einen sinnvollen internen Entdeckungspfad dokumentieren. „Nur in Sitemap vorhanden“ gesondert markieren. → *BESTANDEN: alle Seiten verlinkt. Blogartikel nur über `/blog` → GLOBAL-017*
- [x] Kontextlinks unterstützen den nächsten sinnvollen Schritt und haben verständliche Linktexte. → *BEFUND: defekte Links (GLOBAL-016), unspezifische Linktexte (GLOBAL-034), fehlende Kontextlinks (GLOBAL-017)*
- [x] Navigationspfade und Breadcrumbs stimmen mit der tatsächlichen Informationsarchitektur überein. → *BEFUND: keine Breadcrumbs, Kategorie-Pfade 404 → GLOBAL-033*
- [x] Verwaiste URLs, defekte Links, Weiterleitungsketten und falsche Zielvarianten erfassen. → *BEFUND: 7 defekte Links (GLOBAL-016). Keine verwaisten URLs und keine Ketten (BESTANDEN)*
- [x] Rechtliche Seiten bleiben erreichbar, werden aber nicht als kommerzielle Keyword-Zielseiten missbraucht. → *BESTANDEN: im Footer jeder Seite, nicht als Keyword-Seiten genutzt*
- [x] Vorhandene mehrsprachige Inhalte nur bei realem Bedarf mit korrekter Sprach-/Regionszuordnung und gegenseitigen Verweisen prüfen. → *NICHT ANWENDBAR: nur Deutsch*

Google kann Links verlässlich verarbeiten, wenn sie als echte Links mit Ziel-URL vorliegen; reine Klicklogik ist nicht gleichwertig. Technische und semantische Linkprüfung getrennt durchführen. [S04]

**Ergebnis:** Die vollständige Intent-Matrix steht in `03-SUCHINTENTION-UND-KANNIBALISIERUNG.md`.

## F. Crawlability, Rendering und Indexierungssteuerung

Crawlbar, renderbar, indexierbar, tatsächlich indexiert und gut gerankt sind unterschiedliche Zustände. Technische Eignung garantiert keine Indexierung. [S01][S03]

- [x] Produktionsdomain, Protokoll und bevorzugte Hostvariante eindeutig dokumentieren. → *BESTANDEN (N002, N004). Die Launch-Domain ist offen → GLOBAL-018*
- [x] Öffentliche Inhaltsseiten liefern den vorgesehenen HTTP-Status. Nicht vorhandene Seiten zeigen keine erfolgreiche leere Inhaltsseite. → *BESTANDEN (N007, N008)*
- [x] Robots-Regeln, Meta-Robots und HTTP-Header zusammen prüfen. Widersprüchliche Regeln dokumentieren. → *BEFUND: Widerspruch auf der 404-Seite → GLOBAL-015. Sonst konsistent*
- [x] Kein versehentliches `noindex` auf den freigegebenen Marketingseiten. → *BESTANDEN. Strategie für die Vorab-Adresse offen → GLOBAL-018*
- [x] Benötigte JavaScript-, CSS- und Bildressourcen sind für das Rendering erreichbar. → *BESTANDEN: keine fehlenden Ressourcen außer Karten-Kacheln (GLOBAL-019). Einmaliger 502 als Proxy-Artefakt gewertet (N020)*
- [x] Wichtigste Inhalte und Navigation im ausgelieferten HTML und im gerenderten Zustand vergleichen. Nicht pauschal behaupten, Google könne JavaScript nicht lesen. → *BEFUND → GLOBAL-011, GLOBAL-012*
- [x] Texte dürfen nicht erst nach Scroll-, Klick- oder Formularaktionen nachgeladen werden, wenn sie zur indexierbaren Kerninformation gehören sollen. → *BEFUND → GLOBAL-011*
- [x] Hydration-Fehler, Client-Ausnahmen und fehlgeschlagene Datenabrufe auf jeder Kernroute erfassen. → *BEFUND → GLOBAL-013 (Hydration), GLOBAL-019 (Karte), GLOBAL-002 (Chat)*
- [x] Consent-Banner, Bot-Schutz, WAF, Login oder Vercel-Schutz blockieren nicht versehentlich die öffentliche Produktion. → *BESTANDEN: Produktion öffentlich, der Banner blockiert nicht*
- [x] `canonical`, interne Verlinkung, Sitemap und Weiterleitungen zeigen konsistent auf die gewünschte URL. [S05] → *BEFUND: kein Canonical → GLOBAL-010*
- [x] Sitemap enthält die beabsichtigten kanonischen, indexierbaren Inhalts-URLs, keine Fehlerseiten oder Preview-URLs. Änderungsdaten sind wahrheitsgemäß. [S06] → *BESTANDEN für Umfang. BEFUND für `lastmod` → GLOBAL-015*
- [x] Trackingparameter und URL-Varianten auf ungewollte Duplikate prüfen. → *BEFUND: Parameter-Varianten ohne Canonical → GLOBAL-010*
- [x] Preview-, Staging-, Admin-, interne Such- und sensible Seiten erhalten eine begründete eigene Zugriff-/Indexierungsstrategie. Nicht „alles muss Google-crawlbar sein“ wörtlich auf interne Bereiche anwenden. → *BESTANDEN für Vorschauen (geschützt). BEFUND für die Vorab-Produktion → GLOBAL-018*
- [x] Search-Console-URL-Prüfung und Indexierungsberichte auswerten, sofern lesender Zugang vorhanden ist. Ohne Zugang keinen Indexierungsstatus behaupten. → *NICHT PRÜFBAR: kein Zugang (B11)*
- [x] Crawl-Befunde an Versionsstand und Zeitpunkt binden; aus einer einmal erfolgreichen Anfrage keine dauerhafte Verfügbarkeit ableiten. → *BESTANDEN: alle Nachweise mit Datum, Commit und Bedingungen (08)*

**Wichtig:** `robots.txt` ist weder Zugriffsschutz noch zuverlässige Entfernung aus dem Index. Ein `noindex` muss von einem Crawler gelesen werden können. [S01]

## G. Metadaten, Vorschauen und strukturierte Daten

- [x] Pro Seite Ist-Titel, Ist-Beschreibung, sichtbare Hauptüberschrift, Canonical und Vorschauangaben erfassen. → *Erfasst (02-URL-INVENTAR, N007)*
- [x] Doppelte oder widersprüchliche Titel mit tatsächlichem Seitenzweck abgleichen. → *BEFUND → GLOBAL-010*
- [x] Genau eine klar erkennbare Hauptüberschrift als Projektkonvention; keine angebliche Google-Strafe allein aus der Anzahl von H1 ableiten. → *BESTANDEN: 32 von 32 mit genau einer H1*
- [ ] Konkrete neue Titel und Beschreibungen nur aus bestätigten Informationen entwickeln; keine übertriebenen Superlative. → *Offen, Phase 3, abhängig von B03/B09*
- [x] Metadaten nicht gleichzeitig an mehreren Stellen widersprüchlich pflegen; Framework-Vererbung und gerenderte Ausgabe kontrollieren. [S26] → *BEFUND: wirkungslose SEO-Komponente neben den Layout-Metadaten → GLOBAL-009*
- [x] Open-Graph-Vorschauen, Logo, Favicon und Social-Sharing testen. Das sind Darstellungs-/Vertrauensprüfungen, keine Rankinggarantie. → *BEFUND → GLOBAL-014, GLOBAL-010*
- [x] Unternehmensentität mit stabiler Identität modellieren; Name, Logo und Kontaktdaten konsistent halten. [S14] → *BEFUND: kein Organisations-Markup, Identität widersprüchlich → GLOBAL-020, GLOBAL-010*
- [x] `Service` für tatsächliche Leistungen, gegebenenfalls `BreadcrumbList` für sichtbare Hierarchie und sachlich passender Unternehmenstyp; Eigenschaften nur nach zutreffenden Fakten empfehlen. [S10][S11][S12] → *BEFUND: keinerlei strukturierte Daten → GLOBAL-010*
- [x] `LocalBusiness` nicht allein wegen eines Einzugsgebiets und ohne passende reale Unternehmenssituation erzwingen. → *BESTANDEN (keins vorhanden). Hinweis: das FIMI-Muster „LocalBusiness je Stadt“ nicht übernehmen*
- [x] Kein pauschales `FAQPage`-Pflichtschema; aktuelle Einstellung der Google-FAQ-Rich-Results berücksichtigen. [S13] → *BESTANDEN (keins vorhanden) und nicht empfohlen [S13]*
- [x] Keine erfundenen Bewertungen oder Sternedarstellungen. Regeln zu selbstbezogenen Unternehmensbewertungen und incentivierten Rezensionen prüfen. [S15] → *BESTANDEN für Sterne-Markup (keins). Testimonials → GLOBAL-022*
- [x] Schema-Vokabularvalidierung und Google-Rich-Result-Test trennen. „Kein unterstütztes Rich Result erkannt“ bedeutet bei `Service` nicht automatisch „Markup kaputt“. → *NICHT ANWENDBAR: kein Markup vorhanden*

**Abnahme:** Je Schema-Typ sind Zweck, Datenherkunft, Sichtbarkeit, passende Properties und realistische Google-Unterstützung dokumentiert. Keine JSON-LD-Codeblöcke liefern.

## H. Bilder, KI-Medien, Schriften und Asset-Qualität

- [x] Medieninventar nach URL, Dateipfad, Verwendungszweck, Quelle, Nutzungsrechten und tatsächlicher Auslieferungsgröße führen. → *Erfasst (N029). Quelle und Nutzungsrechte NICHT PRÜFBAR → B07*
- [x] KI-Bilder auf künstliche Gesichter, fehlerhafte Hände, erfundene Beschriftungen, unplausible Arbeitsabläufe und falsche Branchenrealität prüfen. → *BEFUND (Stichprobe) → GLOBAL-023*
- [x] Keine KI-Szene als Foto des echten Teams, eines realen Kundenobjekts oder einer echten Referenz ausgeben. → *BEFUND → GLOBAL-023*
- [x] Für vertrauensentscheidende Stellen echte, freigegebene Unternehmensbilder bevorzugen; kreative Illustrationen als solche behandeln. → *BEFUND → GLOBAL-023*
- [ ] Für jedes wichtige Bild Motiv, Platzierung, Mobil-Crop und Aussage definieren. Bilder müssen Inhalt ergänzen, nicht nur große Flächen füllen. → *Offen, Phase 3*
- [x] Responsive Auslieferung und `sizes` gegen die tatsächliche Layoutbreite prüfen; kein winziges Bild auf großem Display und keine riesige Datei auf Mobilgeräten. [S27] → *BEFUND → GLOBAL-024*
- [x] Fotoformate anhand Browserunterstützung, Qualität und Transfergröße auswählen; SVG für geeignete Vektorgrafiken gesondert behandeln. [S16] → *BEFUND: JPG statt AVIF/WebP → GLOBAL-024*
- [x] Kein universelles „jedes Bild maximal 100 KB“. Pro Einsatzklasse begründete Budgets festlegen und mit LCP, Qualität und realen Nutzungsgrößen validieren. → *Budgets vorgeschlagen, siehe „Leistungsbudgets (Vorschlag)“ in I*
- [x] Ladepriorität des LCP-Bildes und Lazy Loading weiter unten differenzieren. Nicht alle Bilder vorladen. [S19] → *BEFUND → GLOBAL-024*
- [x] Abmessungen beziehungsweise Seitenverhältnisse reservieren und Layoutverschiebungen messen. [S21] → *BESTANDEN: CLS ≈ 0 (N020, N030)*
- [x] Alt-Texte je Kontext formulieren: Information, Bedienfunktion oder Dekoration. Nicht automatisch Keywords in jedes Bild einfügen. [S17] → *BEFUND → GLOBAL-024, GLOBAL-023*
- [x] Fonts auf Lizenz, benötigte Schnitte, Dateigröße, Fallback-Verhalten und externe Datenübertragung prüfen. → *BESTANDEN: Inter per `next/font` selbst gehostet (Open Font License), keine externe Übertragung. Ausnahme: Google Fonts über die Karte auf `/kontakt` → GLOBAL-019*
- [x] Überschriften und zentrale Aussagen sind echter Text, nicht nur eingebrannte Schrift im Bild. → *BESTANDEN (Stichprobe)*

## I. Performance und Core Web Vitals

**Dokumentierte Zielwerte für reale Nutzer:** LCP höchstens 2,5 Sekunden, INP höchstens 200 Millisekunden, CLS höchstens 0,1; jeweils am 75. Perzentil, sinnvoll nach Mobil/Desktop getrennt. [S18]

- [x] Feldmessungen und Labormessungen klar unterscheiden; fehlende Felddaten nicht als bestanden markieren. → *Eingehalten: nur Labordaten, keine Felddaten (N030)*
- [x] Mess-URL, Geräteprofil, Netzwerklimitierung, Cache-Zustand, Toolversion, Datum und mehrere Durchläufe dokumentieren. → *Dokumentiert (N020, N030)*
- [x] Nicht nur die Homepage messen: jede Route auf offensichtliche Probleme prüfen und aufwendigere Messungen mindestens pro Seitentyp und auffälliger Einzelroute durchführen; Stichproben klar benennen. → *Eingehalten: alle 32 Routen im Browser (N020), 5 Seitentypen mit Lighthouse (N030)*
- [x] Größtes sichtbares Element und seine Ladeabhängigkeiten identifizieren. [S19] → *BEFUND: LCP = verzögerter Cookie-Banner bzw. Hero-Bild → GLOBAL-025*
- [x] Schwere Client-Komponenten, lange Tasks, Animation, Widgets und Drittanbieterskripte auf Interaktionsprobleme prüfen. [S20] → *BEFUND → GLOBAL-009, GLOBAL-025 (TBT mobil bis 252 ms)*
- [x] Schriften, Bilder, eingebettete Inhalte und Banner auf Layoutsprünge prüfen. [S21] → *BESTANDEN: CLS ≈ 0*
- [x] Serverlatenz, Datenabrufe, Cache-Verhalten, Weiterleitungen und Fehlerquoten passend zur Architektur untersuchen. → *BESTANDEN für statische Seiten (Cache HIT). API-Fehler → GLOBAL-002*
- [x] Unnötige Drittanbieter, doppelte Trackingbibliotheken und nie verwendete Pakete als begründete Einsparpotenziale dokumentieren. → *BEFUND → GLOBAL-008, GLOBAL-019*
- [x] Leistungsbudgets für Bilder, JavaScript, Fonts und Drittanbieter individuell vorschlagen; ausdrücklich als Projektbudgets kennzeichnen. → *Vorschlag siehe „Leistungsbudgets (Vorschlag)“ unten*
- [x] Kein Ziel „Lighthouse 100 = Top 10“. Gute Scores sind Diagnosehilfen und ersetzen keine tatsächliche Nutzerqualität. [S35][S37] → *Eingehalten. Beleg: Lighthouse-SEO 100 trotz GLOBAL-010 (N030)*


### Leistungsbudgets (Vorschlag, Projektbudgets, keine Google-Vorgabe)

| Kategorie | Budget je Seite (mobil) | Begründung |
|---|---|---|
| LCP (Labor, Standard-Mobilprofil) | ≤ 2,5 s | Orientierung an der guten CWV-Schwelle [S18] |
| TBT (Labor) | ≤ 200 ms | Annäherung an INP ≤ 200 ms im Labor |
| CLS | ≤ 0,1 (heute ≈ 0, halten) | [S18] |
| Hero-/LCP-Bild | ≤ 150 KB bei 390 px Breite (AVIF/WebP) | Heute bis 344 KB JPG für alle Breiten |
| Inhaltsbilder gesamt in der ersten Ansicht | ≤ 250 KB | Rest verzögert laden |
| JavaScript (First Load) | ≤ 130 kB je Seite (heute 170–181 kB auf Leistungsseiten) | Server-Komponenten, weniger Client-Code |
| Drittanbieter vor Einwilligung | 0 Anfragen | GLOBAL-019 |

Die Budgets sind Vorschläge und müssen vom Projektverantwortlichen bestätigt werden (G12). Gemessen wird immer mit dokumentierten Bedingungen, mindestens 3 Läufe je Seitentyp.

## J. Next.js-/TypeScript-Architektur und Wartbarkeit

- [x] Tatsächlichen App-/Pages-Router, Next.js-/React-/Node-Version, Paketmanager und Lockfile erfassen. → *Erfasst (Bestandsaufnahme), BEFUND → GLOBAL-007*
- [x] Versionsabhängige Aussagen gegen die passende offizielle Dokumentation und aktuelle Sicherheitsmeldungen prüfen; nicht automatisch die neueste Major-Version verlangen. → *BEFUND → GLOBAL-001*
- [x] Seitenstruktur mit eigenem Ordner und zusammensetzender TSX-Datei prüfen. Inhaltliche Sektionen sind eigenständige Komponenten; nicht jeder rein dekorative Wrapper braucht eine Datei. [S24] → *BEFUND: je Seite eine große Client-`page.tsx` ohne Sektionskomponenten → GLOBAL-009*
- [x] Seitenspezifische CSS-Dateien kapseln nur lokale Besonderheiten. Globale Farben, Typografie und gemeinsame UI bleiben zentral. [S25] → *NICHT ANWENDBAR im Bestand (nur Tailwind-Klassen). Zielstruktur → GLOBAL-009*
- [x] Doppelte Header, Footer, CTA-Varianten und kopierte Designwerte erfassen. → *BEFUND: doppelte Komponenten (Footer/SwissFooter, Navigation/SwissNavigation), viele CTA-Varianten → GLOBAL-008, GLOBAL-034*
- [x] Server-/Client-Grenzen, Datenzugriffe und interaktive Ausnahmen nachvollziehen; nicht grundlos jede Seite vollständig clientseitig ausliefern. → *BEFUND → GLOBAL-009*
- [x] Metadata-, Bild-, Font-, Fehler- und Lade-Konventionen im Kontext der installierten Version prüfen. [S23][S26][S27] → *BEFUND: Metadata (GLOBAL-009/010), Bild (GLOBAL-024). BESTANDEN: Font, Fehlerseite (mit Robots-Hinweis GLOBAL-015)*
- [x] Daten-/Content-Modell auf eindeutige Quellen und Pflegefähigkeit prüfen; keine gleiche Telefonnummer in zehn Dateien manuell pflegen. → *BEFUND: Kontaktdaten mehrfach im Code verteilt → GLOBAL-020*
- [x] Caching- und Revalidierungsregeln aus dem tatsächlich verwendeten Next.js-Modell ableiten. Kein pauschaler Cache-Schalter für alle Inhalte. → *BESTANDEN: statisch vorgerendert, keine Revalidierung nötig*
- [x] Produktionsbuild, Typecheck, Linting und Tests nur in sicherer isolierter Umgebung prüfen oder Ergebnisse vorhandener CI-Läufe lesend auswerten. → *Geprüft in isolierter Kopie (N005) → GLOBAL-007*
- [x] Tests und Fehlermeldungen dürfen nicht durch pauschale Ignorier-Einstellungen grün erscheinen. → *BESTANDEN: keine Ignorier-Schalter. Aber Lint ohne Konfiguration prüft nichts → GLOBAL-007*
- [x] Empfehlung „komplett neu bauen“ gegen gezielte Überarbeitung abwägen. Bestehende gute Inhalte, URLs, Abläufe und Assets ausdrücklich bewahren. → *Abwägung folgt in Phase 5 (Tendenz: Seitenebene neu aufbauen, Slugs und funktionierende Bausteine erhalten)*

## K. Backend, Kontaktweg, Sicherheit und Betrieb

Ein grünes Frontend beweist kein funktionierendes Backend. Prüfe nur tatsächlich vorhandene Funktionen: API-Routen, Server Actions, Formularanbieter, CRM, CMS, Datenbank, Authentifizierung oder Webhooks. Nicht vorhandene Systeme nicht als „fehlen“ bewerten. Grundlage für technische Sicherheitsfragen: [S28][S29].

- [x] Datenfluss vom Formular über Server/Provider bis zum tatsächlichen Empfänger oder CRM beschreiben. → *Beschrieben, siehe „Datenfluss“ unten*
- [x] Servervalidierung, Pflichtfelder, Eingabegrenzen und verständliche Fehlerzustände prüfen. → *BEFUND → GLOBAL-004 (Grenzen fehlen). BESTANDEN: Pflichtfelder und E-Mail-Prüfung (N032)*
- [x] Spam-Schutz und Rate Limits dürfen echte Nutzer nicht unnötig aussperren; Sicherheits-/Bedienungsabwägung dokumentieren. → *BEFUND: nicht vorhanden → GLOBAL-004*
- [x] Wiederholtes Absenden, Netzwerkabbruch, Providerfehler und Timeout dürfen keine still verlorenen oder unkontrolliert duplizierten Anfragen erzeugen. → *BEFUND: stiller Verlust bei Anbieterfehler (N032) → GLOBAL-003. BESTANDEN: Doppelklick-Schutz*
- [x] Erfolgsmeldung, Bestätigung, interne Benachrichtigung und tatsächliche Zustellung getrennt verifizieren. → *BEFUND → GLOBAL-003*
- [x] SPF, DKIM und DMARC beziehungsweise Provider-Domainverifikation als Zustellbarkeitsprüfungen aufnehmen; „Mail akzeptiert“ ist noch kein Posteingangsnachweis. → *BEFUND → GLOBAL-003 (N013)*
- [x] API-Schlüssel und privilegierte Tokens bleiben serverseitig; keine Geheimnisse im Browser-Bundle oder öffentlichen Repository. → *BESTANDEN im Code (nur serverseitig genutzt). BEFUND-Verdacht in Dokumenten → GLOBAL-035*
- [x] Autorisierung an jedem schützenswerten serverseitigen Zugriff prüfen. Ein versteckter Button ist kein Zugriffsschutz. → *NICHT ANWENDBAR: keine geschützten Bereiche*
- [x] Bei vorhandenem Login: Rollen, Sitzungen, Abmeldung, Passwort-/Reset-Prozess und geschützte API-Endpunkte prüfen. → *NICHT ANWENDBAR*
- [x] Bei vorhandenem Upload: Dateitypen, Größen, Zugriff, Aufbewahrung und Missbrauchsrisiken prüfen. → *NICHT ANWENDBAR*
- [x] Bei vorhandenen Webhooks: Signaturprüfung, Wiederholungsschutz und sichere Verarbeitung prüfen. → *NICHT ANWENDBAR*
- [x] HTTP-Sicherheitsheader, HTTPS, Content-Security-Policy und externe Einbindungen auf Eignung prüfen; keine vermeintlich sichere Standardliste blind einsetzen. → *BEFUND → GLOBAL-006*
- [x] Datenbank-/Mandantentrennung, Rechte und Backups nur dort prüfen, wo ein solches Backend existiert. → *NICHT ANWENDBAR: keine Datenbank*
- [x] Logs helfen bei Fehlerdiagnose, veröffentlichen aber keine Geheimnisse oder unnötigen personenbezogenen Angaben. → *BESTANDEN im Produktionspfad. BEFUND im schlüssellosen Zweig (personenbezogene Daten im Log, N032) → GLOBAL-004*
- [x] Staging und Produktion sind getrennt; Test-Anfragen landen nicht beim echten Vertrieb. → *BEFUND: identische Schlüssel → GLOBAL-005*
- [x] Monitoring, verantwortliche Person, Alarmweg, Fehlerbehebung und Wiederherstellung sind dokumentiert. → *BEFUND → GLOBAL-029*
- [x] Vercel-Runtime, Regionen, Limits, Abrechnung und Umgebungsvariablen anhand des tatsächlichen Projekts prüfen. Keine Tarifannahmen treffen. → *Erfasst: Region iad1 (USA), Variablen → GLOBAL-005. Tarif und Limits NICHT PRÜFBAR (keine Tarifannahmen)*


### Datenfluss (Ist, Stand 24.09.2026)

1. **Kontaktformular** (Footer jeder Seite): Browser → `POST /api/contact` (Vercel-Funktion, Region iad1/USA) → Prüfung Pflichtfelder und E-Mail-Format → Resend-API (Absender `info@bgs-service.ch`, DNS nicht eingerichtet) → Empfänger `info@brandea.de` (Agentur), Antwortadresse = anfragende Person. Keine Speicherung, kein CRM, keine Bestätigung an Anfragende. Die Antwort an den Browser ist immer „Erfolg“ (GLOBAL-003).
2. **KI-Chat** (jede Seite, auch „Termin vereinbaren“): Browser → `POST /api/chat` → Google Gemini (`gemini-2.5-flash`) mit dem gesamten Gesprächsverlauf, der personenbezogene Angaben enthalten kann. Derzeit wegen ungültigem Schlüssel defekt (GLOBAL-002). Bei „An Spezialisten senden“: `POST /api/chat-to-specialist` → Resend → `info@brandea.de` mit Zusammenfassung und vollständigem Verlauf.
3. **KI-Branchen-Berater** (Startseite): Browser → `POST /api/industry-analysis` → Google Gemini.
4. **Karte** (`/kontakt`): Browser → Google Maps JavaScript und Google Fonts direkt beim Laden, ohne Einwilligung (GLOBAL-019).
5. **Einwilligungsauswahl**: nur `localStorage` im Browser, ohne Wirkung.

## L. Conversion und psychologische Plausibilität

**Die folgenden Punkte sind Hypothesen für Gestaltung und Tests, keine garantierten psychologischen Wirkungen.**

- [x] Die erste sichtbare Ansicht vermittelt Angebot, Zielgruppe, belegbaren Nutzen und einen verständlichen nächsten Schritt. → *BEFUND: Mobil ohne Text (GLOBAL-012), belegbarer Nutzen fehlt (GLOBAL-030)*
- [x] CTA-Beschriftung sagt, was geschieht, statt nur „Mehr“ oder „Absenden“. → *BEFUND → GLOBAL-034*
- [ ] Für frühe Recherche und konkrete Kaufabsicht gibt es passende nächste Schritte; nicht jeder Besucher wird sofort zur großen Anfrage gedrängt. → *Offen, Phase 3/4*
- [x] Relevante Belege stehen in der Nähe riskanter Entscheidungen, nicht ausschließlich im Footer. → *BEFUND: vorhandene „Belege“ unbelegt → GLOBAL-021, GLOBAL-022*
- [ ] Prozess, Aufwand, benötigte Informationen und mögliche Kosten beziehungsweise Angebotslogik werden soweit zutreffend erklärt. → *Offen, Phase 3 (vereinzelte Preisangaben, Blog)*
- [x] Formular verlangt nur Informationen, die für den nächsten Schritt wirklich gebraucht werden; spätere Qualifizierung und Spam-Risiko mitdenken. → *BESTANDEN (Pflicht nur Name, E-Mail, Nachricht). Hinweise → GLOBAL-028, GLOBAL-027*
- [x] Vertrauensaufbau beruht auf echten Ansprechpartnern, Referenzen und Transparenz, nicht auf erfundenen Siegeln. → *BEFUND → GLOBAL-021, GLOBAL-022, GLOBAL-023*
- [x] Kein künstlicher Countdown, keine erfundene Knappheit und keine manipulative Zustimmungsgestaltung. → *BESTANDEN: kein Countdown, keine Knappheit, „Nur notwendige“ gleichwertig erreichbar*
- [x] Kontaktalternativen passen zur Zielgruppe und tatsächlichen Erreichbarkeit; nicht zehn konkurrierende Kanäle ohne Betreuung anbieten. → *BEFUND: viele Kanäle, davon mehrere defekt → GLOBAL-002, GLOBAL-019, GLOBAL-020, GLOBAL-034*
- [x] Mobile Anruf-, E-Mail-, Formular- und gegebenenfalls Terminwege sind verständlich bedienbar. → *Teilweise: `tel:`-Links vorhanden (BESTANDEN). Der Menü-Button ist unbenannt → GLOBAL-026. Mobile Formularbedienung folgt in Phase 3*
- [ ] Testaufgaben mit tatsächlichen Zielpersonen planen: Angebot erklären, passende Leistung finden, Vertrauen begründen, Anfrage stellen. Eine kleine qualitative Runde findet Probleme, beweist aber keine Marktquote. → *Offen, Plan in Phase 7*
- [x] A/B-Tests erst mit vorab definiertem Ziel, ausreichendem erwartbarem Datenumfang und Guardrails planen. Keine Sieger aus wenigen Klicks ausrufen. → *NICHT ANWENDBAR derzeit (keine Messung) → GLOBAL-029*

**Messkonzept:** Primär qualifizierte Anfragen beziehungsweise qualifizierte Anfragen pro auswertbarer Sitzung. Sekundär erfolgreich abgeschickte Formulare, Termine und Kontaktinteraktionen. Ein Buttonklick ist noch kein Lead, ein Lead noch kein Umsatz.

## M. Datenschutz, Anbieterangaben und Barrierefreiheit

Dieser Abschnitt beschreibt Prüfaufträge, keine individuelle Rechtsfreigabe. Rechtsform, Branche, tatsächliche Trackingtechnik, Verbraucherbezug und Datenflüsse sind zuerst festzustellen. Fachliche rechtliche Prüfung bleibt ein gesonderter Abnahmeschritt.

- [x] Impressum gegen die konkrete Anbieteridentität und erforderlichen Angaben prüfen. [S38] → *BEFUND → GLOBAL-020, GLOBAL-027*
- [x] Datenschutzhinweise mit den tatsächlich eingebundenen Diensten, Empfängern, Zwecken und Formularwegen abgleichen. → *BEFUND → GLOBAL-027*
- [x] Speicherungen/Zugriffe auf Endgeräte einschließlich Cookies und ähnlicher Technik auf Einwilligungsbedarf und gesetzliche Ausnahmen prüfen. [S39] → *BEFUND: Consent in `localStorage`, Karte ohne Einwilligung → GLOBAL-019. Rechtsbewertung fachlich*
- [x] Ablehnen, zustimmen und später widerrufen technisch testen. Kein pauschales „Banner vorhanden = rechtskonform“. → *BEFUND: Auswahl ohne Wirkung, kein dauerhafter Widerruf-Link gefunden → GLOBAL-019*
- [x] Tracking, Karten, Video, Chat und externe Schriftabrufe in den jeweiligen Zustimmungszuständen untersuchen. → *BEFUND: Karte und Fonts ohne Einwilligung, Chat-Inhalte gehen an Google Gemini → GLOBAL-019, GLOBAL-027*
- [ ] Auftragsverarbeitung, Datenübermittlungen, Löschfristen, Betroffenenanfragen und Verantwortlichkeiten als organisatorische Nachweise abfragen; nicht aus dem Frontend ableiten. → *NICHT PRÜFBAR: organisatorische Nachweise beim Kunden → B13*
- [x] Keine pauschale Pflicht-Einwilligung für jede Kontaktanfrage voraussetzen; konkrete Rechtsgrundlage und Datenverarbeitung fachlich klären. → *BEFUND: Pflicht-Checkbox „dauerhaft gespeichert“ → GLOBAL-027*
- [x] BFSG-Anwendungsbereich und Ausnahmen für das konkrete Angebot prüfen. Nicht pauschal behaupten, jede B2B-Unternehmenswebsite falle darunter. [S40][S41] → *NICHT PRÜFBAR in dieser Analyse: Schweizer Anbieter, Anwendbarkeit fachlich zu klären (B13). WCAG trotzdem als Projektmaßstab angewandt*
- [x] WCAG 2.2 AA als technischen Projektmaßstab anwenden: semantische Struktur, Tastaturbedienbarkeit, sichtbarer Fokus, Kontrast, Formulare, verständliche Fehler und sinnvolle Statusmeldungen. [S22] → *BEFUND → GLOBAL-026*
- [x] Navigation und Dialoge auf Fokusführung, Schließen und Rückkehr zum Auslöser prüfen. → *BEFUND: Mega-Menü, Menü-Button, Banner → GLOBAL-026. Chat-Dialog nicht geprüft (Chat defekt)*
- [ ] Vergrößerung, Umbruch und mobile Bedienung testen; reine automatische Scannergebnisse sind keine vollständige Barrierefreiheitsprüfung. → *Teilweise: Breiten-Matrix geprüft, Zoom 200 % offen → Phase 3*
- [ ] Haupt-Conversion-Strecke zusätzlich manuell per Tastatur und mit geeigneter Screenreader-Stichprobe überprüfen. → *Offen: Tastatur teilweise geprüft, Screenreader-Stichprobe fehlt → Phase 3/6*

## N. Analytics, lokale Sichtbarkeit und Weiterentwicklung

- [x] Baseline für organische Nachfrage, relevante Landingpages und qualifizierte Anfragen dokumentieren, sofern Daten vorliegen. → *NICHT PRÜFBAR: keine Daten, laut Runtime-Logs praktisch kein Verkehr (N012)*
- [ ] Geschäftliche Zielbegriffe, Region, Sprache, Gerät und Brand-/Non-Brand-Trennung vor Rankingauswertung festlegen. → *Offen, Phase 4, abhängig von B04*
- [x] Ereignisse auf echte Ergebnisse beziehen: Anfrage erfolgreich angenommen, Termin tatsächlich gebucht, Lead qualifiziert. Doppelte Events und interne Tests herausfiltern. → *BEFUND: keine Messung → GLOBAL-029*
- [x] Keine personenbezogenen Formulardaten in Analytics-Eventnamen, URLs oder frei zugängliche Logs schreiben. → *NICHT ANWENDBAR (keine Analytics). Logs → GLOBAL-004*
- [x] Quelle/Medium, Landingpage und gegebenenfalls CRM-Qualifizierung datenschutzgerecht verknüpfen; Messlücken offenlegen. → *BEFUND: nicht vorhanden → GLOBAL-029*
- [ ] Google-Unternehmensprofil, passende Kategorien, tatsächliche Einzugsgebiete und konsistente Firmenangaben prüfen, sofern das Unternehmen dafür geeignet ist. [S32] → *NICHT GEPRÜFT: Rückfrage an den Kunden (B11)*
- [ ] Reale Bewertungen, hochwertige Fachbeiträge und legitime Branchen-/Partnererwähnungen als außerhalb des Codes liegende Wachstumsaufgaben erfassen. Keine Linkpakete oder erfundenen Erwähnungen. [S33] → *Offen, Roadmap in Phase 7*
- [x] Vorhandene Backlinks und erfolgreiche Landingpages vor dem Relaunch sichern; keine relevante URL aus kosmetischen Gründen verwerfen. [S07] → *Teilweise: Migrationsbestand der Kunden-Website erfasst (02). Backlinks NICHT PRÜFBAR*
- [x] Für Google-KI-Funktionen auf eigenständige hilfreiche Inhalte und normale technische Zugänglichkeit setzen. Kein besonderes „KI-Schema“ oder `llms.txt` als Pflichtaufgabe behaupten. [S34] → *Eingehalten: kein `llms.txt` oder KI-Schema empfohlen*
- [x] Neue Funktionen nur bei konkretem Nutzen priorisieren: echte Fallstudie, transparente Leistungsabgrenzung, verständlicher Ablauf, geeignete Anfragehilfe oder hilfreiche Entscheidungsvorlage. → *BEFUND: KI-Chat und KI-Berater ohne belegten Nutzen und derzeit defekt → GLOBAL-002, B05*

## Befundregister (global)

Format nach `00-START-HIER.md`, Abschnitt 6. Gemeinsame Befunde stehen nur hier, Seitenberichte verweisen auf die ID. Geprüft wurden der Stand `d7e1122` und die Produktion `bgs-gebaeudeservice.vercel.app` am 24.09.2026. Der Behebungsstatus ist bei allen Befunden „offen“, in diesem Auftrag wird nichts behoben.

### GLOBAL-001 · Next.js-Version mit bekannten kritischen und hohen Sicherheitsmeldungen

- **Betroffen:** alle Routen. `package.json` (`next@15.1.11`), `next.config.ts:15-23`
- **Prüfdatum/Umgebung:** 24.09.2026, `npm audit` in der isolierten Kopie, Vercel-Build-Log der Produktion
- **Ist-Zustand:** Die Produktion läuft mit Next.js 15.1.11 (N003). Die Version liegt im betroffenen Bereich von 29 veröffentlichten Advisories, darunter 3 kritische und 9 hohe. Die Produktionsabhängigkeiten melden insgesamt 23 Meldungen (1 kritisch, 11 hoch). Zusätzlich ist die Bildoptimierung für beliebige HTTPS-Hosts und AVIF freigegeben, obwohl `next/image` nicht genutzt wird (N018).
- **Anwendbarkeit der kritischen Meldungen:** GHSA-2xp9-vwfh-vxw4 (RCE im Image-Optimierer bei AVIF): Die Konfiguration entspricht dem betroffenen Muster. Ob Vercels verwaltete Bildoptimierung betroffen ist, ist nicht geprüft. GHSA-p293-qw3h-jr36: NICHT ANWENDBAR (Vercel, kein Windows-Hosting). GHSA-f82v-jwr5-mffw: NICHT ANWENDBAR (keine Middleware). Die hohen DoS-Meldungen zu Server Components betreffen den App Router und sind anwendbar.
- **Beleg:** N003, N005, N006, N018
- **Auswirkung:** Datenrisiko und Ausfallrisiko für die öffentlich erreichbare Seite, dazu mögliche Kosten durch Missbrauch der offenen Bildoptimierung.
- **Priorität:** P0 · **Launch-Blocker:** ja (G06)
- **Konkrete Vorgabe:** Next.js innerhalb von Version 15 auf einen gepatchten Stand heben. Laut Audit vom 24.09.2026 ist das mindestens 15.5.26, vor der Umsetzung erneut gegen die aktuellen Next.js-Sicherheitsmeldungen prüfen. Die Bildoptimierung für fremde Hosts schließen, solange `next/image` nicht genutzt wird. Später nur die tatsächlich benötigten Quellen freigeben. Nicht genutzte Pakete mit Meldungen entfernen (axios, nanoid, siehe GLOBAL-008), direkt betroffene Pakete (postcss) aktualisieren.
- **Abnahmekriterium:** `npm audit --omit=dev` meldet keine kritischen und keine hohen Treffer mehr, oder jede verbleibende Meldung ist mit Begründung als nicht anwendbar dokumentiert. Das Vercel-Build-Log zeigt die gepatchte Version. Eine Anfrage an `/_next/image` mit fremder Bild-URL wird abgelehnt (Test in Preview-Umgebung).
- **Aufwand/Verantwortlich:** Entwicklung, klein bis mittel (Minor-Update innerhalb 15.x plus Regressionstest aller 32 Seiten)
- **Abhängigkeiten:** GLOBAL-007 (reproduzierbare Installation)
- **Evidenz/Sicherheit:** Codebefund aus der Advisory-Datenbank. Die Ausnutzbarkeit wurde bewusst nicht getestet (keine Exploit-Versuche).
- **Quelle:** S23, S28, S29, S42

### GLOBAL-002 · KI-Chat fällt in Produktion aus, der Fehler bleibt unsichtbar

- **Betroffen:** alle Seiten (Chat-Button „Chat öffnen“ aus `app/layout.tsx`), **die Buttons „Termin vereinbaren“ auf 22 Seiten** (sie öffnen den Chat im Terminmodus, `client/src/components/AppointmentButton.tsx:21-24`), `/api/chat`, vermutlich auch `/api/industry-analysis` (Startseite, „KI-Branchen-Berater“), `server/gemini.ts:591-596, 860-866`
- **Prüfdatum/Umgebung:** Vercel-Runtime-Logs und Fehlergruppen 17.–24.09.2026 (nur lesend)
- **Ist-Zustand:** Die Gemini-API lehnt den hinterlegten Schlüssel ab („API key not valid“, 24.09.2026 10:13:16 UTC). Der Server fängt den Fehler ab und antwortet trotzdem mit **HTTP 200** und einem Entschuldigungstext, der die Telefonnummer `+41 41 320 56 10` enthält (N017). Diese Nummer ist nicht belegt (GLOBAL-020).
- **Beleg:** N012, N017
- **Auswirkung:** Jeder Chat-Versuch scheitert, obwohl der Chat auf jeder Seite als Kontaktweg angeboten wird. Das bedeutet Lead-Verlust und Vertrauensverlust. Über HTTP-Statuscodes ist der Ausfall nicht erkennbar, eine Überwachung schlägt nicht an.
- **Priorität:** P0 · **Launch-Blocker:** ja (G05, sofern der Chat Teil der Conversion-Strecke bleibt)
- **Konkrete Vorgabe:** Zuerst entscheiden, ob der KI-Chat bleibt (Rückfrage B05/B10). Bleibt er, einen gültigen, serverseitig und als „sensitiv“ gespeicherten Schlüssel hinterlegen. Fehler des KI-Anbieters als Fehlerstatus (5xx) protokollieren und melden. Dem Besucher einen belegten Ersatzkontakt anzeigen. Entfällt er, Chat-Button und „KI-Branchen-Berater“ vollständig entfernen statt eine defekte Funktion anzubieten.
- **Abnahmekriterium:** In der freigegebenen Testumgebung beantwortet der Chat eine Testfrage. Ein erzwungener Anbieterfehler erzeugt einen 5xx-Eintrag im Log und eine sichtbare Meldung mit bestätigter Telefonnummer. Innerhalb von 7 Tagen nach Launch gibt es keine Fehlergruppe „API key not valid“ in den Vercel-Fehlergruppen.
- **Aufwand/Verantwortlich:** Entwicklung/Operations, klein. Entscheidung: Geschäftsführung/Marketing
- **Abhängigkeiten:** GLOBAL-005 (Schlüsselverwaltung), GLOBAL-020 (Kontaktdaten)
- **Evidenz/Sicherheit:** Plattformdaten (Log). Dass `/api/industry-analysis` betroffen ist, ist eine HYPOTHESE (gleicher Schlüssel, im Zeitraum nicht aufgerufen).
- **Quelle:** S28

### GLOBAL-003 · Kontaktformular meldet Erfolg ohne Zustellnachweis, der Zustellweg ist nicht eingerichtet

- **Betroffen:** Formular im Footer aller Seiten und `/kontakt`, `app/api/contact/route.ts:36-58`, `server/email.ts:27-37, 103-105`, ebenso der Chat-Weg `/api/chat-to-specialist`
- **Prüfdatum/Umgebung:** 24.09.2026, Code-Lektüre, öffentliches DNS, Vercel-Logs. Kein Absenden auf Produktion.
- **Ist-Zustand:** (1) Die Route antwortet **immer mit `success: true`**, auch wenn der Versand scheitert oder eine Ausnahme wirft. Die Meldung „Email sending failed, but form submission logged“ ist irreführend, denn gespeichert wird nichts. (2) Absender ist `info@bgs-service.ch`. Für diese Domain gibt es im DNS **keinen Resend-DKIM-Eintrag und keinen `send.`-MX**, der Versand über Resend ist damit sehr wahrscheinlich abgewiesen. (3) Empfänger ist `info@brandea.de`, also die Agentur, nicht der Kunde. (4) Anfragende erhalten keine Bestätigung. (5) Preview und Produktion nutzen denselben Schlüssel (N011).
- **Beleg:** N011, N013, N016, **N032** (End-to-End-Test in der isolierten Testumgebung: Bei Anbieterfehler 401 meldet die Oberfläche „erfolgreich versendet“). Keine Formularanfrage in den Logs der letzten 7 Tage (N012).
- **Auswirkung:** Anfragen können still verloren gehen, während Besuchern Erfolg angezeigt wird. Selbst bei Zustellung landen sie nicht beim Kunden. Das trifft die zentrale Zielhandlung der Website.
- **Priorität:** P0 · **Launch-Blocker:** ja (G05)
- **Konkrete Vorgabe:** Erfolg erst anzeigen, wenn der Versanddienst die Nachricht serverseitig angenommen hat (Nachrichten-ID protokollieren). Bei Fehler eine verständliche Meldung zeigen, die Eingaben erhalten und einen alternativen Kontaktweg nennen. Absenderdomain beim Versanddienst verifizieren (DKIM, SPF bzw. Return-Path, DMARC) oder eine bereits verifizierte Domain nutzen. Den Empfänger mit dem Kunden festlegen (B10). Getrennte Schlüssel oder Test-Empfänger für Preview. Optional eine Eingangsbestätigung an Anfragende, sofern der Kunde das will.
- **Abnahmekriterium:** End-to-End-Test in der freigegebenen Testumgebung mit Test-Empfänger: gültige Anfrage → Erfolgsmeldung, Nachricht kommt im Test-Postfach an, Nachrichten-ID im Log. Simulierter Anbieterfehler → Fehlermeldung, Eingaben bleiben erhalten, kein „success“. DNS zeigt DKIM für die Absenderdomain. Der Kunde bestätigt den Empfänger schriftlich.
- **Aufwand/Verantwortlich:** Entwicklung, klein bis mittel. DNS: Kunde bzw. dessen Hoster (Swizzonic). Empfänger: Kunde
- **Abhängigkeiten:** GLOBAL-020, B10
- **Evidenz/Sicherheit:** „Erfolg ohne Zustellnachweis“ = BEFUND (Code und End-to-End-Test N032). „Versand in Produktion scheitert“ = HYPOTHESE mit hoher Wahrscheinlichkeit (DNS), nicht mit dem Produktionsschlüssel bewiesen (Regel 5).
- **Quelle:** S28, S29

### GLOBAL-004 · API-Routen ohne Missbrauchsschutz, Formulareingaben unmaskiert im Mail-HTML

- **Betroffen:** `/api/contact`, `/api/chat-to-specialist`, `/api/chat`, `/api/industry-analysis`, `server/email.ts:75-91`
- **Prüfdatum/Umgebung:** 24.09.2026, Code-Lektüre
- **Ist-Zustand:** Kein Rate-Limit, kein Spam-Schutz, keine Längenbegrenzung der Eingaben. `/api/chat-to-specialist` prüft die E-Mail-Adresse gar nicht. Name, E-Mail, Telefon, Leistung und Nachricht werden ohne Maskierung in das HTML der Benachrichtigungsmail eingesetzt.
- **Beleg:** Codebefund (siehe Pfade). Log-Ausgaben enthalten im Produktionspfad keine personenbezogenen Daten, das ist BESTANDEN.
- **Auswirkung:** Massenhafte Spam- oder Phishing-Mails an das Empfängerpostfach über das eigene Formular. Kostenrisiko durch automatisierte Aufrufe der kostenpflichtigen KI-Schnittstelle.
- **Priorität:** P1 · **Launch-Blocker:** ja (G06)
- **Konkrete Vorgabe:** Alle Eingaben serverseitig auf Pflichtfelder, Format und Maximallänge prüfen. Werte vor dem Einsetzen in HTML maskieren. Einen nutzerfreundlichen Spam-Schutz einsetzen (z. B. unsichtbares Prüffeld plus serverseitiges Rate-Limit je IP und Zeitfenster) und die Abwägung dokumentieren. Für KI-Routen ein Kontingent pro Besucher und ein Budget-Limit beim Anbieter festlegen.
- **Abnahmekriterium:** Test in der Testumgebung: HTML-Eingabe erscheint in der Mail als Text. Über-lange Eingaben werden mit verständlicher Meldung abgelehnt. Die 11. Anfrage innerhalb einer Minute von derselben Quelle wird gebremst, echte Einzelanfragen bleiben unbeeinträchtigt.
- **Aufwand/Verantwortlich:** Entwicklung, klein bis mittel
- **Abhängigkeiten:** GLOBAL-003
- **Evidenz/Sicherheit:** Codebefund. Nicht live getestet (keine Missbrauchsversuche).
- **Quelle:** S28, S29

### GLOBAL-005 · Schlüsselverwaltung: lesbare Geheimnisse, gleiche Schlüssel in allen Umgebungen, ungenutzter Schlüssel

- **Betroffen:** Vercel-Projekt, Umgebungsvariablen
- **Prüfdatum/Umgebung:** 24.09.2026, Vercel-API (nur Namen)
- **Ist-Zustand:** `GEMINI_API_KEY`, `RESEND_API_KEY` und `ANTHROPIC_API_KEY` sind für Production, Preview und Development identisch gesetzt, Vercel markiert sie als „readable-secret“. `ANTHROPIC_API_KEY` wird nicht verwendet. Der Gemini-Schlüssel ist ungültig. Der Karten-Schlüssel liegt unter dem Vite-Namen `VITE_GOOGLE_MAPS_API_KEY` und wird vom Code nicht gelesen.
- **Beleg:** N011, N012
- **Auswirkung:** Unnötige Angriffsfläche. Aus Vorschauen können echte Mails verschickt werden. Tote und ungültige Schlüssel verschleiern den Betriebszustand.
- **Priorität:** P1 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Geheimnisse als „sensitiv“ speichern. Getrennte Schlüssel oder Test-Empfänger für Preview und Development. Ungenutzte Schlüssel entfernen und beim Anbieter widerrufen. Variablennamen an den Code anpassen. Eine kurze Liste führen: welcher Schlüssel, wofür, wer ist verantwortlich.
- **Abnahmekriterium:** Die Vercel-Liste zeigt keine „readable-secret“-Hinweise und keine ungenutzten Schlüssel mehr. Preview nutzt nachweislich andere Schlüssel oder Test-Empfänger als Production.
- **Aufwand/Verantwortlich:** Operations, klein
- **Abhängigkeiten:** GLOBAL-002, GLOBAL-019 (Kartenentscheidung)
- **Evidenz/Sicherheit:** Plattformdaten, Werte nicht eingesehen
- **Quelle:** S28, S30

### GLOBAL-006 · Keine Content-Security-Policy und keine Permissions-Policy

- **Betroffen:** alle Antworten (`next.config.ts`, `headers()`)
- **Prüfdatum/Umgebung:** 24.09.2026, HTTP-Header der Startseite
- **Ist-Zustand:** HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy und DNS-Prefetch-Control sind gesetzt (BESTANDEN). Content-Security-Policy und Permissions-Policy fehlen.
- **Beleg:** N004
- **Auswirkung:** Kein zusätzlicher Schutz gegen eingeschleuste Skripte und ungewollte Browser-Funktionen.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Eine CSP passend zu den tatsächlich genutzten Quellen definieren (eigene Domain, gegebenenfalls Kartenanbieter nach Einwilligung) und zuerst im Report-Only-Modus testen. Eine Permissions-Policy, die ungenutzte Funktionen (Kamera, Mikrofon, Standort usw.) abschaltet. Keine ungeprüfte Standardliste übernehmen.
- **Abnahmekriterium:** Header auf allen Seiten vorhanden, keine CSP-Verstöße in der Konsole beim Durchklicken aller 32 Seiten und des Formulars.
- **Aufwand/Verantwortlich:** Entwicklung, klein
- **Abhängigkeiten:** GLOBAL-019
- **Evidenz/Sicherheit:** HTTP-Befund
- **Quelle:** S28, S29

### GLOBAL-007 · Build nicht reproduzierbar abgesichert: Lockfile nicht synchron, kein Lint, keine Tests, kein CI

- **Betroffen:** Repository-Wurzel, Vercel-Projekteinstellungen
- **Prüfdatum/Umgebung:** 24.09.2026, isolierte Kopie, Vercel-Build-Log
- **Ist-Zustand:** `npm ci` bricht ab, weil `package-lock.json` nicht zu `package.json` passt (next 15.5.6 gegenüber 15.1.11). Vercel installiert mit `npm install` und löst die Versionen bei jedem Build neu auf. Zusätzlich liegt ein veraltetes `pnpm-lock.yaml` vor. ESLint ist nicht konfiguriert, der Lint-Schritt im Build prüft also nichts. Es gibt keine Tests und keinen CI-Workflow. Die Framework-Voreinstellung im Vercel-Projekt steht noch auf „vite“.
- **Beleg:** N002, N003, N005
- **Auswirkung:** Ein Build kann ohne Codeänderung andere Paketversionen ausliefern. Fehler fallen erst in Produktion auf. „Grüner Build“ ist kein Qualitätsnachweis.
- **Priorität:** P1 · **Launch-Blocker:** ja (G02)
- **Konkrete Vorgabe:** Einen Paketmanager festlegen, das andere Lockfile entfernen und ein synchrones Lockfile erzeugen. Vercel auf `npm ci` (oder das Äquivalent) umstellen. ESLint mit der Next.js-Konfiguration einrichten und bestehende Meldungen abarbeiten. Mindesttests für API-Routen (Erfolg, Validierungsfehler, Anbieterfehler) und einen Render-Test aller Routen anlegen. Einen CI-Lauf für Build, Typecheck, Lint und Tests bei jedem Pull Request einrichten. Die Framework-Voreinstellung auf Next.js setzen.
- **Abnahmekriterium:** `npm ci`, Build, Typecheck, Lint und Tests laufen im CI grün, ohne Ignorier-Schalter. Ein absichtlich eingebauter Lint-Fehler lässt den CI-Lauf scheitern.
- **Aufwand/Verantwortlich:** Entwicklung, mittel
- **Abhängigkeiten:** GLOBAL-001, GLOBAL-008
- **Evidenz/Sicherheit:** Codebefund + Build-Nachweis
- **Quelle:** S23

### GLOBAL-008 · Altlasten des Vite-Aufbaus, ungenutzte Pakete und doppelter Asset-Ordner

- **Betroffen:** `client/src/pages/` (56 Dateien), `client/src/App.tsx`, `main.tsx`, `vite.config.ts`, `server/index.ts`, `patches/`, `client/public/`, ungenutzte Komponenten (`Footer`, `Navigation`, `ManusDialog`, `AccordionSection`, `ServiceTemplate`, `ScrollPinning`), ungenutzte Abhängigkeiten (`@tanstack/react-query`, `axios`, `nanoid`, `streamdown`, `zod`)
- **Prüfdatum/Umgebung:** 24.09.2026, Code-Suche
- **Ist-Zustand:** Neben der Next.js-App liegt der komplette frühere Vite-Aufbau, dazu Seiten eines anderen Projekts (`FractionalCXO`, `KIAutomation`, `Turnaround`) und eine veraltete Projektbeschreibung (`PROJEKT_ANALYSE.md` beschreibt Vite/Wouter). `client/public/` dupliziert `public/`.
- **Beleg:** N019, Code-Suche vom 24.09.2026
- **Auswirkung:** Verwechslungsgefahr bei Änderungen (falsche Datei gepflegt), größere Angriffsfläche durch ungenutzte Pakete mit Sicherheitsmeldungen, fremde Projektinhalte im Kunden-Repository.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Nach Bestätigung, dass nichts davon ausgeliefert wird, die Vite-Reste, fremden Seiten, ungenutzten Komponenten und Pakete sowie den doppelten Asset-Ordner entfernen. Veraltete Projektdokumente aktualisieren oder entfernen.
- **Abnahmekriterium:** Build und alle Routen unverändert funktionsfähig (Render-Test aller 32 Seiten). Eine Prüfung auf ungenutzte Abhängigkeiten meldet keine Treffer. Im Repository gibt es keine Inhalte fremder Projekte mehr.
- **Aufwand/Verantwortlich:** Entwicklung, klein
- **Abhängigkeiten:** GLOBAL-007
- **Evidenz/Sicherheit:** Codebefund. Ob die fremden Seiten vertrauliche Inhalte enthalten, wurde nicht bewertet.
- **Quelle:** —

### GLOBAL-009 · Alle Seiten vollständig clientseitig, Metadaten nur global (Architektur-Ursache für GLOBAL-010)

- **Betroffen:** alle 32 `page.tsx`, `client/src/components/SEO.tsx`, `app/layout.tsx`
- **Prüfdatum/Umgebung:** 24.09.2026, Code-Lektüre
- **Ist-Zustand:** Jede Seite ist als Ganzes eine Client-Komponente (`'use client'`). Seitenbezogene Metadaten können so nicht über die Next.js-Metadaten-API exportiert werden. Die als Ersatz eingebundene `SEO`-Komponente tut nichts (`return null`), die an sie übergebenen Titel, Beschreibungen und Schema-Daten gehen verloren.
- **Beleg:** N015
- **Auswirkung:** Ursache der identischen Metadaten (GLOBAL-010). Unnötig großes JavaScript je Seite (First Load 170–181 kB auf Leistungsseiten laut Build).
- **Priorität:** P1 · **Launch-Blocker:** nein (Wirkung wird über GLOBAL-010 abgenommen)
- **Konkrete Vorgabe:** Seiten als Server-Komponenten aufbauen, die ihre eigenen Metadaten exportieren. Nur interaktive Teile (Formular, Reiter, Animationen, Chat) als Client-Komponenten einbinden. Die wirkungslose `SEO`-Komponente entfernen. Entspricht der gewünschten Struktur aus Abschnitt 8 der Vorgabe: Seitenordner mit zusammensetzender `page.tsx` und getrennten Sektionskomponenten.
- **Abnahmekriterium:** Jede Route liefert im HTML ihre eigenen Metadaten (siehe GLOBAL-010). Keine `page.tsx` beginnt mit `'use client'`. Das First-Load-JavaScript der Leistungsseiten sinkt messbar gegenüber 170–181 kB (Build-Ausgabe).
- **Aufwand/Verantwortlich:** Entwicklung, mittel bis groß (alle Seiten betroffen, gut mit dem geplanten Umbau zu verbinden)
- **Abhängigkeiten:** Umbau-Entscheidung (E05)
- **Evidenz/Sicherheit:** Codebefund + Build-Ausgabe
- **Quelle:** S24, S25, S26

### GLOBAL-010 · Alle 32 Seiten mit identischem Titel und identischer Beschreibung, ohne Canonical, mit falscher `og:url` und ohne strukturierte Daten

- **Betroffen:** alle 32 URLs
- **Prüfdatum/Umgebung:** 24.09.2026, ausgeliefertes HTML
- **Ist-Zustand:** `<title>` überall „BGS Gebäudeservice - Professionelle Reinigungsdienstleistungen in der Schweiz“, identische Beschreibung, kein `canonical`, `og:url` zeigt überall auf die Startseite, OG-/Twitter-Bild ist 404 (GLOBAL-014), keine JSON-LD-Daten. Parameter-Varianten (`?utm_source=…`) liefern denselben Inhalt ohne Canonical.
- **Beleg:** N007, N008, N015
- **Auswirkung:** Suchmaschinen und soziale Netzwerke können die Seiten nicht unterscheiden. Leistungs- und Standortseiten treten mit dem Titel der Startseite auf. Das erschwert gezielte Sichtbarkeit und begünstigt die Auswahl einer unerwünschten URL. Geteilte Links zeigen immer die Startseite ohne Bild.
- **Priorität:** P1 · **Launch-Blocker:** ja (vorgeschlagen, betrifft die Grundfunktion der Suchmaschinen-Darstellung auf allen Seiten, Entscheidung bei G14)
- **Konkrete Vorgabe:** Je Seite einen eigenen Titel und eine eigene Beschreibung aus bestätigten Inhalten. Die konkreten Formulierungen stehen in den Seitenberichten (Phase 3). Selbstreferenzierendes Canonical auf die bevorzugte URL. `og:url`, `og:title`, `og:description` und ein existierendes Vorschaubild je Seite. Strukturierte Daten nur passend zu sichtbaren, bestätigten Angaben: Organisation/Unternehmen global, `Service` auf Leistungsseiten, gegebenenfalls `BreadcrumbList`. Kein FAQ-Pflichtschema [S13].
- **Abnahmekriterium:** Ein Crawl aller Seiten zeigt 32 verschiedene Titel und Beschreibungen, Canonical = eigene URL, `og:url` = eigene URL, erreichbares OG-Bild (200). Schema.org-Validierung ohne Fehler, Rich-Result-Test getrennt dokumentiert.
- **Aufwand/Verantwortlich:** Redaktion/SEO (Texte), Entwicklung (Umsetzung), mittel
- **Abhängigkeiten:** GLOBAL-009, B03 (Leistungsumfang), GLOBAL-020 (Identität)
- **Evidenz/Sicherheit:** HTTP-/Renderbefund
- **Quelle:** S05, S08, S09, S10, S11, S12, S13, S14, S26

### GLOBAL-011 · FAQ-Antworten und Reiter-Inhalte fehlen im ausgelieferten HTML

- **Betroffen:** 26 Seiten, vor allem alle Leistungs- und Standortseiten, `/datenschutz` und drei Blogartikel
- **Prüfdatum/Umgebung:** 24.09.2026, echte Klicks im Browser, Abgleich mit dem ausgelieferten HTML
- **Ist-Zustand:** Die Inhalte geschlossener Akkordeons (0 von 100 im HTML, ca. 21.300 Zeichen, überwiegend FAQ-Antworten) und nicht aktiver Reiter (bei 20 Seiten 2 von 3, ca. 16.300 Zeichen) werden erst nach einem Klick erzeugt.
- **Beleg:** N023
- **Auswirkung:** Suchmaschinen klicken nicht. Diese Inhalte gelten daher als voraussichtlich nicht indexierbar, und die Seite wirkt dünner, als sie ist. Ohne JavaScript sind sie auch für Nutzer unerreichbar.
- **Priorität:** P1 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Alle Inhalte, die zur Seite gehören, im HTML ausliefern. Geschlossene Bereiche nur optisch einklappen, z. B. mit einem nativen Auf-/Zuklapp-Element oder Komponenten, deren Inhalt im DOM bleibt. Kerninformationen nicht hinter Reitern verstecken, wenn eine lineare Darstellung ebenso gut funktioniert.
- **Abnahmekriterium:** Für jede FAQ-Antwort und jeden Reiter-Inhalt findet sich der Text im ausgelieferten HTML (Textproben-Abgleich wie in N023). Die Bedienung per Tastatur bleibt erhalten.
- **Aufwand/Verantwortlich:** Entwicklung, klein bis mittel
- **Abhängigkeiten:** GLOBAL-009
- **Evidenz/Sicherheit:** Renderbefund. Ob Google die Texte im konkreten Fall ignoriert, ist ohne Search Console NICHT PRÜFBAR, das Risiko ist technisch belegt.
- **Quelle:** S01, S03

### GLOBAL-012 · Hero-Inhalte werden unsichtbar ausgeliefert und erst per JavaScript eingeblendet

- **Betroffen:** vor allem `/` (43 Elemente mit `opacity:0`, darunter die H1), weitere Seiten mit Einblendungen
- **Prüfdatum/Umgebung:** 24.09.2026, ausgeliefertes HTML, Bildschirmfotos Desktop/Mobil
- **Ist-Zustand:** Überschrift, Einleitung und Buttons des Heros stehen im HTML mit `opacity:0`. Auf dem Mobil-Bildschirmfoto direkt nach dem Laden sind weder H1 noch Button zu sehen, nur das Hero-Bild. Auf Desktop sind die Buttons zum Aufnahmezeitpunkt halbtransparent. Die Einstellung „Bewegung reduzieren“ wird im Code nirgends berücksichtigt (0 Fundstellen für `prefers-reduced-motion`/`useReducedMotion`).
- **Beleg:** N022, N026
- **Auswirkung:** Die erste Ansicht vermittelt auf Mobilgeräten kein Angebot und keinen nächsten Schritt, solange die Animation nicht gelaufen ist. Ohne oder bei langsamem JavaScript bleibt der Inhalt unsichtbar. Das LCP-Element verzögert sich.
- **Priorität:** P1 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Inhalte der ersten Ansicht sofort sichtbar ausliefern. Einblendungen nur als Verstärkung einsetzen, die ohne JavaScript und bei „Bewegung reduzieren“ entfällt. Keine Animation, die Text oder Handlungsaufforderung verbirgt.
- **Abnahmekriterium:** Mit deaktiviertem JavaScript sind H1, Einleitung und Haupt-Button der Startseite sichtbar. Das Mobil-Bildschirmfoto direkt nach dem Laden (390×844) zeigt H1 und Button. Mit `prefers-reduced-motion` finden keine Einblendungen statt.
- **Aufwand/Verantwortlich:** Entwicklung/Design, klein
- **Abhängigkeiten:** —
- **Evidenz/Sicherheit:** Renderbefund
- **Quelle:** S19, S22

### GLOBAL-013 · Hydration-Fehler auf allen Seiten durch das beim Build berechnete Jahr

- **Betroffen:** alle Seiten, `client/src/components/SwissFooter.tsx:8, 345`
- **Prüfdatum/Umgebung:** 24.09.2026, Browser-Test Produktion und isolierter Entwicklungsmodus
- **Ist-Zustand:** Bei 63 von 64 Seitenaufrufen tritt React-Fehler #418 auf. Ursache: Das Copyright-Jahr stammt im statischen HTML vom Build (2025), der Browser berechnet 2026. Nebenbei steht dort „Swiss Reinigungsfirma“ statt des Firmennamens (GLOBAL-020).
- **Beleg:** N020, N021
- **Auswirkung:** React verwirft die ausgelieferte Darstellung und rendert clientseitig neu. Das kostet Ladeleistung, kann sichtbares Flackern verursachen und startet Animationen neu (verstärkt GLOBAL-012). Jeder künftige Build zeigt denselben Fehler, sobald das Jahr wechselt.
- **Priorität:** P1 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Werte, die sich zwischen Build und Aufruf ändern (Jahr, Datum, Zufall, Browser-Speicher), nicht in die vorgerenderte Ausgabe schreiben. Das Jahr zentral und fest pflegen oder erst nach dem Laden setzen. Danach die Konsole aller Seiten auf weitere Hydration-Fehler prüfen.
- **Abnahmekriterium:** Browser-Test aller 32 Seiten (Desktop und Mobil) ohne Fehler #418/#423/#425. Wiederholung nach einem simulierten Jahreswechsel (Systemdatum der Testumgebung) ebenfalls fehlerfrei.
- **Aufwand/Verantwortlich:** Entwicklung, klein
- **Abhängigkeiten:** —
- **Evidenz/Sicherheit:** Renderbefund + Ursachennachweis
- **Quelle:** S23

### GLOBAL-014 · Favicon, Touch-Icon und Vorschaubild fehlen, das Manifest passt nicht zur Marke

- **Betroffen:** `app/layout.tsx:50, 61, 87-88`, `public/manifest.json`
- **Prüfdatum/Umgebung:** 24.09.2026, HTTP
- **Ist-Zustand:** `/favicon.ico`, `/apple-touch-icon.png` und `/og-image.jpg` liefern 404, sind aber im `<head>` referenziert. Das Manifest nutzt Blau (`#3b82f6`) statt des Markenrots und dieselbe WebP-Datei für 192 und 512 px.
- **Beleg:** N008
- **Auswirkung:** Browser-Tabs, Lesezeichen, Startbildschirm und geteilte Links zeigen kein oder ein generisches Symbol. Das wirkt unfertig.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Favicon (ICO/SVG), Apple-Touch-Icon (180×180 PNG) und ein Vorschaubild (1200×630) aus dem freigegebenen Logo erzeugen. Manifest-Farbe und Icon-Größen korrigieren. Erst nach der Markenentscheidung (GLOBAL-020, B09) finalisieren.
- **Abnahmekriterium:** Alle referenzierten Dateien liefern 200 mit passendem Typ. Eine Vorschau im Link-Test eines sozialen Netzwerks zeigt Titel, Beschreibung und Bild der jeweiligen Seite.
- **Aufwand/Verantwortlich:** Design/Entwicklung, klein
- **Abhängigkeiten:** B09
- **Evidenz/Sicherheit:** HTTP-Befund
- **Quelle:** S14, S26

### GLOBAL-015 · Vorlagenreste in technischen SEO-Angaben

- **Betroffen:** alle Seiten (`app/layout.tsx:74-76`), 404-Seite, `public/sitemap.xml`, `public/robots.txt`
- **Prüfdatum/Umgebung:** 24.09.2026, HTTP
- **Ist-Zustand:** Platzhalter `google-site-verification="your-google-verification-code"` auf allen 32 Seiten. Die 404-Seite enthält zwei widersprüchliche robots-Angaben (`noindex` und `index, follow`). Die Sitemap nennt für alle Seiten das Änderungsdatum 2025-01-02, das vor Projektbeginn liegt. `robots.txt` trägt den Kopfkommentar „Swiss Reinigungsfirma“ und ein von Google ignoriertes `Crawl-delay`.
- **Beleg:** N007, N008
- **Auswirkung:** Unprofessionelle Platzhalter im Quelltext. Unzuverlässige Änderungsdaten entwerten die Sitemap als Signal [S06]. Widersprüchliche robots-Angaben erschweren die Kontrolle.
- **Priorität:** P2 · **Launch-Blocker:** ja für den Platzhalter (G09, geringer Aufwand), sonst nein
- **Konkrete Vorgabe:** Verifizierung nur mit echtem Code oder gar nicht ausgeben. Auf der 404-Seite nur `noindex`. Die Sitemap aus den Routen erzeugen, mit tatsächlichen Änderungsdaten oder ohne `lastmod`. Den Kommentar in `robots.txt` korrigieren und `Crawl-delay` entfernen.
- **Abnahmekriterium:** Im HTML aller Seiten kein Platzhalter. Die 404-Seite hat genau eine robots-Angabe `noindex`. Die `lastmod`-Werte entsprechen den letzten inhaltlichen Änderungen.
- **Aufwand/Verantwortlich:** Entwicklung, klein
- **Abhängigkeiten:** GLOBAL-009
- **Evidenz/Sicherheit:** HTTP-Befund
- **Quelle:** S01, S06

### GLOBAL-016 · Sieben defekte interne Links auf der Zürich-Seite

- **Betroffen:** `/standorte/zuerich`, `app/standorte/zuerich/page.tsx:131, 148, 164`
- **Prüfdatum/Umgebung:** 24.09.2026, HTTP und Browser
- **Ist-Zustand:** Die Buttons „Mehr erfahren“, „Details“ und „Mehr Info“ in den Reitern Premium, Business und Basis führen bei 7 von 17 Leistungen auf 404-Seiten, weil die Linkziele aus den Anzeigenamen berechnet werden (z. B. `/business/büroreinigung` statt `/business/bueroreinigung`).
- **Beleg:** N009, N024
- **Auswirkung:** Besucher landen aus der Standortseite auf Fehlerseiten, Linkkraft geht verloren.
- **Priorität:** P1 · **Launch-Blocker:** ja (G03, geringer Aufwand)
- **Konkrete Vorgabe:** Linkziele aus einer zentralen Liste der tatsächlichen Leistungsseiten beziehen, nicht aus Anzeigenamen berechnen. Dasselbe Muster auf allen Standortseiten vermeiden.
- **Abnahmekriterium:** Ein Linkprüfer über alle Seiten, inklusive aller Reiter-Zustände, findet keine internen Links mit Status 404.
- **Aufwand/Verantwortlich:** Entwicklung, klein
- **Abhängigkeiten:** B03 (welche Leistungsseiten bleiben)
- **Evidenz/Sicherheit:** HTTP-/Renderbefund
- **Quelle:** S04

### GLOBAL-017 · Blogartikel nur über die Blog-Übersicht erreichbar

- **Betroffen:** `/blog/*` (U29–U32), Leistungs- und Standortseiten
- **Prüfdatum/Umgebung:** 24.09.2026, interne Verlinkung aus N007
- **Ist-Zustand:** Jeder der vier Artikel hat genau einen internen Entdeckungspfad (`/blog`). Weder Leistungs- noch Standortseiten verweisen kontextuell auf sie, und die Artikel verweisen kaum auf passende Leistungen (Detailprüfung in Phase 3/4).
- **Beleg:** N009
- **Auswirkung:** Hilfreiche Inhalte werden selten gefunden und stützen die Leistungsseiten nicht. Der Mindest-Entdeckungspfad ist erfüllt (BESTANDEN), die Verzahnung fehlt.
- **Priorität:** P3 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Erst nach der inhaltlichen Prüfung der Artikel (GLOBAL-031) je Artikel 1–2 fachlich passende Kontextlinks von Leistungsseiten und umgekehrt setzen, mit beschreibendem Linktext. Ziel-URL und Linktext stehen in den Seitenberichten.
- **Abnahmekriterium:** Jeder behaltene Artikel hat mindestens einen kontextuellen Link von einer passenden Leistungsseite und verweist selbst auf die passende Leistung.
- **Aufwand/Verantwortlich:** Redaktion/SEO, klein
- **Abhängigkeiten:** GLOBAL-031, Intent-Matrix (Phase 4)
- **Evidenz/Sicherheit:** HTTP-Befund. Nutzen = HYPOTHESE
- **Quelle:** S04

### GLOBAL-018 · Indexierungsstrategie der neuen Seite vor dem Launch ungeklärt

- **Betroffen:** alle 32 URLs unter `*.vercel.app`
- **Prüfdatum/Umgebung:** 24.09.2026, HTTP (robots, Sitemap, Meta-Robots)
- **Ist-Zustand:** Die neue Seite ist unter der vorläufigen Adresse `bgs-gebaeudeservice.vercel.app` vollständig zur Indexierung freigegeben (`index, follow`, Sitemap), während der Kunde unter `bgs-service.ch` eine andere Website betreibt (E07, N014). Ob Seiten bereits im Google-Index sind, ist ohne Search Console NICHT PRÜFBAR.
- **Beleg:** N002, N007, N008, N014
- **Auswirkung:** Eine noch nicht freigegebene Seite mit unbelegten Angaben (GLOBAL-020/021) kann unter einer Zweitadresse sichtbar werden und mit der Kunden-Domain konkurrieren. Beim späteren Umzug entstehen Doppelstrukturen.
- **Priorität:** P1 · **Launch-Blocker:** ja (G04/G10, Entscheidung nötig)
- **Konkrete Vorgabe:** Festlegen, unter welcher Domain die neue Seite startet (B08). Bis zum Launch die Vorab-Adresse von der Indexierung ausnehmen, z. B. mit Zugriffsschutz oder `noindex` (Header), und die Sitemap dort nicht bewerben. Zum Launch die eigene Domain verbinden, Canonicals und Sitemap auf sie ausrichten und die `vercel.app`-Adresse per permanenter Weiterleitung auf die Domain führen.
- **Abnahmekriterium:** Vor dem Launch liefert die Vorab-Adresse `noindex` bzw. ist geschützt. Nach dem Launch leiten alle `vercel.app`-URLs mit 308/301 auf die gleichnamige URL der eigenen Domain, Canonicals und Sitemap nennen ausschließlich die eigene Domain.
- **Aufwand/Verantwortlich:** Entwicklung/SEO, klein. Entscheidung: Kunde/Brandea
- **Abhängigkeiten:** B08, E07
- **Evidenz/Sicherheit:** HTTP-Befund, Auswirkung auf den Index = HYPOTHESE (NICHT PRÜFBAR ohne Search Console)
- **Quelle:** S01, S05, S07, S30

### GLOBAL-019 · Google Maps lädt ohne Einwilligung, der Cookie-Banner steuert nichts und beschreibt nicht die Realität

- **Betroffen:** `/kontakt` (Karte), alle Seiten (Banner), `client/src/components/CookieConsent.tsx`, `client/src/components/GoogleMap.tsx`, `app/kontakt/page.tsx:148-149`
- **Prüfdatum/Umgebung:** 24.09.2026, Browser-Test Produktion, Code-Lektüre
- **Ist-Zustand:** Beim Aufruf von `/kontakt` werden ohne jede Auswahl im Banner Google Maps und Google Fonts geladen. Dabei gehen Daten wie die IP-Adresse an Google. Die Karte funktioniert trotzdem nicht („NoApiKeys“, „InvalidKey“), denn `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` ist nicht gesetzt. Der Banner verspricht Cookies zur „Verbesserung“, die es nicht gibt, und seine Auswahl wird nirgends ausgewertet.
- **Beleg:** N010, N011, N020, N025
- **Auswirkung:** Datenübermittlung an einen Drittanbieter ohne Wahlmöglichkeit, zugleich ein sichtbar defektes Element auf der Kontaktseite. Der Banner stört auf allen Seiten, ohne einen Zweck zu erfüllen.
- **Priorität:** P1 · **Launch-Blocker:** ja (G07)
- **Konkrete Vorgabe:** Entscheiden, ob eine interaktive Karte nötig ist. Ohne Karte: durch Adresse als Text plus Link „Route in Google Maps öffnen“ ersetzen. Mit Karte: erst nach aktiver Einwilligung laden, mit gültigem, auf die Domain beschränktem Schlüssel. Den Banner nur behalten, wenn tatsächlich einwilligungsbedürftige Technik eingesetzt wird. Sein Text muss genau diese Technik nennen, und Ablehnen muss sie nachweislich verhindern. Rechtsraum und Rechtsgrundlage fachlich klären (Schweizer DSG, gegebenenfalls DSGVO).
- **Abnahmekriterium:** Netzwerkprotokoll von `/kontakt` bei Ablehnen bzw. ohne Auswahl: keine Anfragen an `*.googleapis.com` oder `*.gstatic.com`. Nach Zustimmung lädt die Karte ohne Konsolenfehler. Der Widerruf ist über einen dauerhaft erreichbaren Link möglich. Der Bannertext entspricht der eingesetzten Technik.
- **Aufwand/Verantwortlich:** Entwicklung, klein. Fachprüfung Datenschutz
- **Abhängigkeiten:** GLOBAL-027
- **Evidenz/Sicherheit:** HTTP-/Renderbefund. Die rechtliche Bewertung ist nicht Teil dieser Prüfung.
- **Quelle:** S39 (für DE/EU), Schweizer Recht fachlich zu klären

### GLOBAL-020 · Unternehmensidentität und Kontaktdaten sind widersprüchlich

- **Betroffen:** alle Seiten (Logo, Footer, Texte), `/impressum`, `/datenschutz`, `/kontakt`, Standortseiten, `server/email.ts`, `server/gemini.ts`
- **Prüfdatum/Umgebung:** 24.09.2026, Volltext aller Seiten, DNS, Eigenangabe des Kunden
- **Ist-Zustand:** Der Kunde heißt laut eigener Website „BGS Gebäudeservice GmbH“ (N014). Die neue Seite nennt „BGS“ im sichtbaren Text **kein einziges Mal**. Sie tritt als „Swiss Reinigungsfirma“ auf (42-mal), das Logo zeigt „SWISS REINIGUNG“, auch Impressum und Datenschutz nennen „Swiss Reinigungsfirma“ ohne Rechtsform als Verantwortlichen. Telefonnummer `+41 41 320 56 10` weicht von der Nummer auf der Kunden-Website ab. `info@swiss-reinigung.ch` (3 Standortseiten) liegt auf einer geparkten Domain ohne MX-Eintrag. Die Adresse (Emmenbrücke) und die UID sind nicht belegt. Anfragen gehen an die Agentur (`info@brandea.de`), das Widget trägt „Powered by Brandea AI“.
- **Beleg:** N009, N013, N014, N016, N026, N027, N028
- **Auswirkung:** Interessenten können den Anbieter nicht eindeutig zuordnen. Anfragen an die geparkte Adresse gehen verloren oder im schlimmsten Fall an einen Dritten, falls die Domain den Besitzer wechselt. Ein Markenname ohne eigene Domain und ohne Rechtsträger schwächt Vertrauen und Auffindbarkeit (Markensuche „BGS“).
- **Priorität:** P1 · **Launch-Blocker:** ja (G07, G09)
- **Konkrete Vorgabe:** Mit dem Kunden die Marke festlegen (B09). Rechtlicher Name „BGS Gebäudeservice GmbH“ in Impressum, Datenschutz, Footer und strukturierten Daten. Alle Kontaktdaten (Telefon, E-Mail, Adresse, UID, Empfänger der Anfragen) vom Kunden schriftlich bestätigen lassen und an **einer** zentralen Stelle im Code pflegen. `info@swiss-reinigung.ch` sofort entfernen. Agentur-Kennzeichnung („Powered by Brandea AI“) aus der Kundenseite entfernen oder bewusst im Impressum als Umsetzungspartner nennen.
- **Abnahmekriterium:** Volltextsuche über alle Seiten findet nur die bestätigten Angaben, keine abweichende Nummer oder Adresse und keine Domain ohne MX. Firmenname und Rechtsform stimmen in Impressum, Datenschutz, Footer und Schema überein. Eine Testmail an die angezeigte Adresse wird zugestellt (vom Kunden bestätigt).
- **Aufwand/Verantwortlich:** Geschäftsführung Kunde (Fakten), Redaktion/Entwicklung (Umsetzung), klein
- **Abhängigkeiten:** B07, B09, B10, GLOBAL-003
- **Evidenz/Sicherheit:** Inhaltsbefund + DNS. Welche Angaben richtig sind, ist offen (Kundenbestätigung nötig).
- **Quelle:** S14, S38 (DE-Referenz, Schweizer Pflichtangaben fachlich zu klären)

### GLOBAL-021 · Unbelegte und widersprüchliche Leistungs- und Erfolgsbehauptungen

- **Betroffen:** Startseite (Kennzahlen-Leiste), Leistungsseiten, Standortseiten, Über uns
- **Prüfdatum/Umgebung:** 24.09.2026, Volltext aller Seiten
- **Ist-Zustand:** Behauptet werden „ISO 9001 zertifiziert“, „Zertifizierte Qualität“ und ein „Zertifiziertes Qualitätsmanagementsystem“. **Das eigene Impressum sagt: „Die ISO-Zertifizierung befindet sich derzeit in Bearbeitung.“** Dazu kommen „500+ Kunden“, „15+ Jahre Erfahrung“, Gründung 2005, „einer der führenden Reinigungsunternehmen in der Schweiz“, „Schweizweit“, Service an „allen großen Schweizer Flughäfen“, „24/7“, Vor-Ort-Zeiten von 1–2 bzw. 2–4 Stunden und eine „Festpreis-Garantie“. Die Kunden-Website nennt dagegen nur Luzern und Zug und zwei Leistungsbereiche. Premium-Leistungen wie Privatjet, Yacht und Luxusimmobilien kommen dort nicht vor.
- **Beleg:** N014, N027, N028
- **Auswirkung:** Irreführende Aussagen, bei der ISO-Angabe sogar selbst widerlegt, gefährden Vertrauen und können rechtlich angreifbar sein. Leistungsversprechen, die nicht erfüllt werden, erzeugen unpassende Anfragen.
- **Priorität:** P1 (die ISO-Angabe ist sofort zu entscheiden, weil öffentlich sichtbar) · **Launch-Blocker:** ja (G09)
- **Konkrete Vorgabe:** Jede Behauptung ins Nachweisregister (Abschnitt A) übernehmen: Aussage, Beleg, zulässige Formulierung, verantwortliche Person. Ohne Beleg streichen oder ehrlich umformulieren, z. B. „ISO-9001-Zertifizierung in Vorbereitung“ nur, wenn ein Verfahren nachweisbar läuft. Leistungen und Regionen nur nennen, wenn der Kunde sie bestätigt (B03, B04).
- **Abnahmekriterium:** Für jede verbleibende Zahl, Zertifizierung, Zeit- oder Regionsangabe liegt ein Beleg oder eine schriftliche Kundenfreigabe vor. Keine Aussage widerspricht dem Impressum.
- **Aufwand/Verantwortlich:** Geschäftsführung Kunde (Belege), Redaktion, klein bis mittel
- **Abhängigkeiten:** B03, B04, B06, B07
- **Evidenz/Sicherheit:** Inhaltsbefund. Der Wahrheitsgehalt der übrigen Behauptungen ist offen, nur der ISO-Widerspruch ist intern belegt.
- **Quelle:** S02

### GLOBAL-022 · Testimonials und Referenzen ohne Nachweis, mit Merkmalen erfundener Stimmen

- **Betroffen:** `/` („Was unsere Kunden sagen“), `/ueber-uns`, `/referenzen`, Standortseiten (Detailprüfung Phase 3)
- **Prüfdatum/Umgebung:** 24.09.2026, Volltext
- **Ist-Zustand:** Kundenstimmen mit sehr allgemeinen Namen und Firmen („Dr. Thomas Müller, CEO, TechCorp AG“, „Anna Meier, CEO, Meier AG“, „Peter Schmidt, Schmidt & Partner“, „Maria Rossi, Rossi Boutique“) bzw. Kurzformen („Thomas M., Geschäftsführer, Zürich“). Die Zitate loben „Swiss Reinigungsfirma“, also eine Marke ohne Rechtsträger. Keine Quelle, kein Datum, keine Freigabe erkennbar.
- **Beleg:** N027
- **Auswirkung:** Sind die Stimmen nicht echt, ist das eine Täuschung von Interessenten mit rechtlichem Risiko. Auch echte Stimmen ohne Einordnung wirken austauschbar.
- **Priorität:** P1 (sofortige Entscheidung empfohlen, da öffentlich) · **Launch-Blocker:** ja (G09)
- **Konkrete Vorgabe:** Vom Kunden für jede Stimme und jede Referenz einen Nachweis anfordern: echte Person oder Organisation, Freigabe zur Veröffentlichung, Zeitraum, erbrachte Leistung. Nicht belegbare Stimmen und Referenzen entfernen. Echte Stimmen mit Kontext zeigen (Branche, Leistung, Zeitraum). Keine erfundenen Stimmen als „Platzhalter“.
- **Abnahmekriterium:** Für jede veröffentlichte Stimme und Referenz liegt eine dokumentierte Freigabe vor. Stichprobe: Die genannten Organisationen existieren und bestätigen die Zusammenarbeit.
- **Aufwand/Verantwortlich:** Geschäftsführung Kunde, Redaktion, klein
- **Abhängigkeiten:** B07
- **Evidenz/Sicherheit:** HYPOTHESE (erfunden) mit hoher Plausibilität. Ob sie echt sind, kann nur der Kunde belegen.
- **Quelle:** S02, S15

### GLOBAL-023 · KI-generierte Bilder in vertrauensentscheidenden Zusammenhängen

- **Betroffen:** Startseite (Hero-Team, „Vorher/Nachher – Erleben Sie die Qualität unserer Arbeit“), `/ueber-uns` (Alt-Text „Das Team der Swiss Reinigungsfirma“), `/referenzen` (Projektbilder), Leistungs- und Standortseiten
- **Prüfdatum/Umgebung:** 24.09.2026, Sichtprüfung einer Stichprobe, Impressum
- **Ist-Zustand:** Das Impressum bestätigt KI-generierte Bilder, die „die Qualität unserer Dienstleistungen repräsentieren“. Sichtbar werden solche Bilder als eigenes Team, als Vorher/Nachher-Beleg und als Referenzprojekt eingesetzt. Die „Team“-Kleidung wechselt je Bild (rot bzw. dunkelblau mit grünem Logo).
- **Beleg:** N026, N028, N029
- **Auswirkung:** Besucher halten die Bilder für echte Mitarbeitende und echte Arbeitsergebnisse. Die Offenlegung im Impressum hebt diesen Eindruck an der Fundstelle nicht auf. Das widerspricht der Vorgabe (H, B).
- **Priorität:** P1 · **Launch-Blocker:** ja (G09)
- **Konkrete Vorgabe:** Für Team, Referenzen und Vorher/Nachher echte, freigegebene Fotos des Kunden verwenden (Fotoshooting oder vorhandenes Material, B07). Bis dahin diese Bereiche ohne Bild, mit neutraler Grafik oder ganz ohne den Abschnitt gestalten. Illustrative KI-Bilder höchstens für neutrale Themen und dann nicht als Nachweis beschriften. Alt-Texte an den tatsächlichen Bildinhalt anpassen.
- **Abnahmekriterium:** Im Medieninventar ist für jedes Bild Quelle und Nutzungsrecht dokumentiert. Kein KI-Bild steht in den Abschnitten Team, Referenzen oder Vorher/Nachher.
- **Aufwand/Verantwortlich:** Kunde (Fotos), Design/Redaktion, mittel
- **Abhängigkeiten:** B07
- **Evidenz/Sicherheit:** BEFUND für den Einsatzkontext (Impressum und Alt-Text). Die Herkunft einzelner Bilder ist eine Einschätzung.
- **Quelle:** S16, S17

### GLOBAL-024 · Bilder weder responsiv noch verzögert geladen, viele ungenutzte Dateien

- **Betroffen:** alle Seiten, `public/`
- **Prüfdatum/Umgebung:** 24.09.2026, Browser-Messung, Dateisystem, Lighthouse
- **Ist-Zustand:** 170 `<img>` ohne `loading="lazy"` und ohne `srcset`. Mobilgeräte laden dieselben 1536-px-JPGs wie Desktops, bis 14,6-fach größer als dargestellt. Lighthouse schätzt je Seite bis 1,4 MB Einsparung durch passende Größen und bis 1,2 MB durch moderne Formate. 51 von 94 Dateien in `public/` werden nicht genutzt, dazu der doppelte Ordner `client/public/`. 62 Bilder haben leeren Alt-Text, darunter vermutlich informative.
- **Beleg:** N029, N030
- **Auswirkung:** Unnötige Datenmenge vor allem mobil, trägt zur langsamen mobilen Ladezeit bei (GLOBAL-025). Pflegeaufwand und Verwechslungsgefahr.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Bilder responsiv mit passenden Breiten ausliefern (z. B. über `next/image` mit korrekt gesetzten `sizes`), nur das LCP-Bild priorisieren, alles unterhalb der ersten Ansicht verzögert laden. Fotos als AVIF/WebP. Budgets je Einsatzklasse festlegen (Hero, Inhaltsbild, Karte). Ungenutzte Dateien entfernen. Alt-Texte je Zweck formulieren [S17].
- **Abnahmekriterium:** Lighthouse meldet keine Einsparung über 100 KB bei „responsive Bilder“ und „Offscreen-Bilder“ auf den geprüften Seitentypen. Das Medieninventar zeigt nur genutzte Dateien. Jede informative Abbildung hat einen passenden Alt-Text.
- **Aufwand/Verantwortlich:** Entwicklung/Redaktion, mittel
- **Abhängigkeiten:** GLOBAL-023 (welche Bilder bleiben), GLOBAL-009
- **Evidenz/Sicherheit:** Messung und Renderbefund
- **Quelle:** S16, S17, S19, S27

### GLOBAL-025 · Mobile Ladeleistung im Labor deutlich über den Zielwerten

- **Betroffen:** alle Seitentypen, Stichprobe von 5 URLs
- **Prüfdatum/Umgebung:** 24.09.2026, Lighthouse-Labor (siehe N030), keine Felddaten
- **Ist-Zustand:** Mobiler Median-LCP 4,4–8,5 s gegenüber dem Zielwert ≤ 2,5 s [S18]. Desktop 0,7–2,2 s. CLS ≈ 0 (BESTANDEN), TBT mobil bis 252 ms. Ursachen laut Messung: Hero-Inhalt startet unsichtbar (GLOBAL-012), dadurch wird der verzögert erscheinende Cookie-Banner zum LCP-Element. Dazu übergroße Bilder (GLOBAL-024), vollständig clientseitige Seiten (GLOBAL-009) und das Neu-Rendern nach dem Hydration-Fehler (GLOBAL-013).
- **Beleg:** N020, N022, N030
- **Auswirkung:** Schlechtere Nutzererfahrung auf Mobilgeräten. Ein Einfluss auf Anfragen ist wahrscheinlich, aber nicht gemessen.
- **Priorität:** P1 · **Launch-Blocker:** nein, soweit nicht als Projektbudget festgelegt (G12)
- **Konkrete Vorgabe:** Nach Behebung von GLOBAL-009, -012, -013, -019 und -024 erneut messen. Projektbudget vorschlagen: mobiler Labor-LCP ≤ 2,5 s und TBT ≤ 200 ms je Seitentyp mit dokumentierten Bedingungen. Nach dem Launch Felddaten (CrUX oder eigenes RUM) beobachten.
- **Abnahmekriterium:** Wiederholte Labormessung (3 Läufe je Seitentyp, gleiche Bedingungen) erreicht das vereinbarte Budget. Nach dem Launch zeigen Felddaten am 75. Perzentil LCP ≤ 2,5 s, INP ≤ 200 ms und CLS ≤ 0,1, sobald ausreichend Daten vorliegen.
- **Aufwand/Verantwortlich:** Entwicklung, mittel (größtenteils durch die genannten Befunde abgedeckt)
- **Abhängigkeiten:** GLOBAL-009, -012, -013, -019, -024
- **Evidenz/Sicherheit:** Laborwerte über einen Proxy, eher pessimistisch. Keine Felddaten, also nicht „Feldwerte nicht bestanden“.
- **Quelle:** S18, S19, S20, S21, S35, S37

### GLOBAL-026 · Barrierefreiheit: Kontrast, Zielgrößen, fehlende Orientierungshilfen, Menü per Tastatur

- **Betroffen:** alle Seiten, `SwissNavigation`, `SwissFooter`, Primär-Buttons, Cookie-Banner
- **Prüfdatum/Umgebung:** 24.09.2026, axe-core auf 31 Seiten, Lighthouse, Tastaturtest
- **Ist-Zustand:** Der Primär-Button (weiße Schrift auf Markenrot) erreicht 3,78:1 statt 4,5:1. Insgesamt 166 Kontrastverstöße, zum Teil auch in der Navigation über dem Hero-Bild. 775 zu kleine Klickziele, u. a. Footer-Links 20 px hoch. Kein Skip-Link, keine `<main>`-Landmarke. Das Mega-Menü „Leistungen“ lässt sich per Tastatur nicht öffnen. Der mobile Menü-Button hat keinen zugänglichen Namen und keinen Zustand. Der Cookie-Banner ist kein Dialog. Der Fokus ist sichtbar (BESTANDEN).
- **Beleg:** N031, N030
- **Auswirkung:** Erschwerte Nutzung für Menschen mit Seh- oder Motorikeinschränkungen und für Tastatur- und Screenreader-Nutzer. Der Kernpfad ist über den Footer erreichbar, daher kein vollständiger Ausschluss.
- **Priorität:** P1 · **Launch-Blocker:** nein (Kernpfad nicht blockiert, G08). Ob das BFSG gilt, ist fachlich zu klären [S40][S41].
- **Konkrete Vorgabe:** Markenrot für Flächen mit Text so abdunkeln, dass mindestens 4,5:1 erreicht wird (Designentscheidung, B09). Klickziele mindestens 24×24 px oder ausreichender Abstand. Skip-Link und `<main>` ergänzen. Das Mega-Menü per Tastatur bedienbar machen (Enter/Space öffnet, Escape schließt, Zustand per `aria-expanded`). Den Menü-Button benennen („Menü öffnen“) mit Zustand. Den Cookie-Banner als Dialog mit Fokusführung oder als nicht-modalen, klar erreichbaren Bereich gestalten.
- **Abnahmekriterium:** axe-core ohne Verstöße „serious/critical“ auf allen Seiten. Manueller Tastaturdurchlauf Startseite → Leistung → Formular → Absenden ohne Maus möglich. Screenreader-Stichprobe (NVDA oder VoiceOver) für Menü und Formular dokumentiert.
- **Aufwand/Verantwortlich:** Design/Entwicklung, mittel
- **Abhängigkeiten:** B09 (Farbe)
- **Evidenz/Sicherheit:** Automatisierte Messung plus Tastatursimulation. Die Screenreader-Prüfung steht aus.
- **Quelle:** S22, S40, S41

### GLOBAL-027 · Datenschutzerklärung und Impressum passen nicht zur tatsächlichen Verarbeitung und zum Anbieter

- **Betroffen:** `/datenschutz`, `/impressum`, Formular-Einwilligung (alle Seiten)
- **Prüfdatum/Umgebung:** 24.09.2026, Inhaltsbefund im Abgleich mit der technischen Bestandsaufnahme
- **Ist-Zustand:** Die Datenschutzerklärung ist ein DSGVO-Muster ohne Bezug zum Schweizer DSG. Sie nennt Nutzungsanalyse und Cookies, die es nicht gibt. Tatsächlich eingesetzte Empfänger und Orte fehlen: Vercel mit Funktionsregion USA, Resend, Google Gemini mit den Chat-Inhalten, Google Maps, Weiterleitung aller Anfragen an die Agentur. Speicherdauer fehlt. Die Pflicht-Checkbox im Formular verlangt die Zustimmung zu „dauerhaft gespeichert“, gespeichert wird aber nichts. Das Impressum nennt keinen Rechtsträger mit Rechtsform (GLOBAL-020).
- **Beleg:** N003, N010, N011, N016, N027, N028
- **Auswirkung:** Besucher werden über die Verarbeitung nicht zutreffend informiert. Rechtliches Risiko für den Kunden als Verantwortlichen.
- **Priorität:** P1 · **Launch-Blocker:** ja (G07)
- **Konkrete Vorgabe:** Erst die Technik festlegen (Chat ja/nein, Karte ja/nein, Versanddienst, Empfänger, Hosting-Region). Dann Datenschutzerklärung und Impressum von fachkundiger Stelle für den tatsächlichen Rechtsraum erstellen lassen, mit allen Empfängern, Übermittlungen ins Ausland, Zwecken, Speicherdauer und Rechten. Die Formular-Einwilligung nur verwenden, wenn die Rechtsgrundlage sie verlangt, und dann ohne „dauerhaft“.
- **Abnahmekriterium:** Jeder im Netzwerkprotokoll oder Code nachweisbare Dienst ist in der Datenschutzerklärung genannt, und umgekehrt ist kein dort genannter Dienst ungenutzt. Eine fachliche Freigabe mit Datum und Rolle ist dokumentiert (G07, G14).
- **Aufwand/Verantwortlich:** Fachprüfung Recht/Datenschutz, Kunde, Redaktion, mittel
- **Abhängigkeiten:** GLOBAL-002, -003, -019, -020, B13
- **Evidenz/Sicherheit:** Technischer Abgleich (BEFUND). Die rechtliche Bewertung ist ausdrücklich nicht Teil dieser Prüfung.
- **Quelle:** S38, S39 (DE/EU-Referenzen), Schweizer DSG fachlich zu klären

### GLOBAL-028 · Formular: doppelte Leistungsauswahl, fehlende Grenzen, uneinheitliche Rückmeldeversprechen

- **Betroffen:** Formular im Footer aller Seiten, `/kontakt`, Chat
- **Prüfdatum/Umgebung:** 24.09.2026, Volltext und lokaler Formulartest
- **Ist-Zustand:** Die Auswahl „Gewünschte Leistung“ enthält jede Business-Leistung doppelt („Büroreinigung“ und „Business Büroreinigung“ usw.), insgesamt 26 Optionen. Nachrichten mit 20.000 Zeichen werden angenommen. Formular und Kontaktseite versprechen Rückmeldung „innerhalb von 24 Stunden“, der Chat „innerhalb von 12 Stunden (werktags)“. Die Erfolgsmeldung verschwindet nach 5 Sekunden. Gut gelöst (BESTANDEN): Pflichtfeld- und E-Mail-Prüfung im Browser, Schutz vor Doppelklick, Eingaben bleiben bei Fehler erhalten.
- **Beleg:** N027, N032
- **Auswirkung:** Verwirrende Auswahl, unklare Erwartung an die Reaktionszeit.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Die Auswahl aus der zentralen, bestätigten Leistungsliste erzeugen (B03), ohne Doppelungen und mit „Sonstiges“. Eine einheitliche, vom Kunden bestätigte Rückmeldezeit (B10) an allen Stellen. Die Erfolgsmeldung dauerhaft stehen lassen und den nächsten Schritt nennen.
- **Abnahmekriterium:** Jede Option erscheint genau einmal und entspricht einer bestätigten Leistung. Die Volltextsuche findet nur eine Rückmeldezeit.
- **Aufwand/Verantwortlich:** Entwicklung/Redaktion, klein
- **Abhängigkeiten:** B03, B10, GLOBAL-003, GLOBAL-004
- **Evidenz/Sicherheit:** Inhalts- und Testbefund
- **Quelle:** —

### GLOBAL-029 · Keine Erfolgsmessung und keine Fehlerüberwachung

- **Betroffen:** gesamte Website und API
- **Prüfdatum/Umgebung:** 24.09.2026, Code, Vercel
- **Ist-Zustand:** Es gibt keine Analytics, keine Conversion-Ereignisse, keine Search Console (B11) und keine Alarmierung bei Fehlern. Der Chat-Ausfall (GLOBAL-002) wäre unbemerkt geblieben.
- **Beleg:** N010, N012
- **Auswirkung:** Weder Sichtbarkeit noch qualifizierte Anfragen oder Ausfälle sind messbar. Eine Baseline für den Relaunch fehlt.
- **Priorität:** P2 · **Launch-Blocker:** nach Projektentscheidung (G13)
- **Konkrete Vorgabe:** Search Console für die Ziel-Domain einrichten. Eine datenschutzfreundliche Messung festlegen, die „Anfrage serverseitig angenommen“ als Ereignis zählt, ohne personenbezogene Daten in Ereignissen und nur im zulässigen Einwilligungsrahmen. Fehlerüberwachung mit Benachrichtigung einer benannten Person für API-Fehler und Zustellfehler.
- **Abnahmekriterium:** Ein Testereignis „Anfrage angenommen“ erscheint in der Messung ohne personenbezogene Daten. Ein simulierter API-Fehler löst eine Benachrichtigung aus. Die Search-Console-Property ist verifiziert.
- **Aufwand/Verantwortlich:** Marketing/Operations, klein bis mittel
- **Abhängigkeiten:** GLOBAL-027 (Datenschutz), B11, B14
- **Evidenz/Sicherheit:** Codebefund
- **Quelle:** S01, S18, S36

### GLOBAL-030 · Positionierung: breites Premium-Versprechen statt belegbarem Kaufgrund

- **Betroffen:** Startseite, Leistungsarchitektur (18 Leistungen in 3 Kategorien), alle Leistungsseiten
- **Prüfdatum/Umgebung:** 24.09.2026, Volltext, Vergleich mit der Eigenangabe des Kunden
- **Ist-Zustand:** Die Seite verspricht „Erstklassige Gebäudereinigung“ mit „Schweizer Präzision“ vom Privatjet bis zum Winterdienst. Die Kunden-Website beschreibt eine „Hauswart- und Reinigungsfirma“ mit zwei Bereichen in Luzern und Zug. Der Austauschtest ist nicht bestanden: Texte wie „Qualität, Zuverlässigkeit und Kundennähe“, „Professionelle …reinigung“ und „maßgeschneiderte Lösungen“ passen unverändert zu jedem Wettbewerber. Es fehlt jede belegbare Besonderheit (Team, Arbeitsweise, Referenzen, Zahlen).
- **Beleg:** N014, N027
- **Auswirkung:** Passende Kunden erkennen nicht, warum sie diesen Anbieter wählen sollten. Unpassende Anfragen, etwa Privatjet oder Zürich, werden eher begünstigt.
- **Priorität:** P1 · **Launch-Blocker:** nein (strategisch, aber Grundlage für alle Texte)
- **Konkrete Vorgabe:** Mit dem Kunden die Positionierung klären: für wen (z. B. Verwaltungen, Gewerbe, Eigentümer in LU/ZG), welches Problem, welches Ergebnis, welche belastbare Besonderheit (B04–B06). Leistungsarchitektur danach ausrichten, Umfang und Anzahl der Leistungsseiten richten sich nach dem realen Angebot (B03). Erst danach Texte schreiben.
- **Abnahmekriterium:** Ein freigegebener Positionierungssatz mit Belegen liegt vor. Jede Leistungsseite beantwortet die Fragen „für wen“, „was genau“, „wo“ und „welche Belege“. Der Austauschtest schlägt fehl, weil die Texte nur auf BGS passen.
- **Aufwand/Verantwortlich:** Geschäftsführung Kunde, Marketing/Redaktion, mittel
- **Abhängigkeiten:** B03–B07, E05 (Umbau)
- **Evidenz/Sicherheit:** Inhaltsbefund. Die Zielgruppen sind ohne Kundenangaben HYPOTHESEN.
- **Quelle:** S02

### GLOBAL-031 · Blog: Scheinaktualität und Zahlen ohne Quelle

- **Betroffen:** `/blog` und 4 Artikel
- **Prüfdatum/Umgebung:** 24.09.2026, Volltext
- **Ist-Zustand:** Veröffentlichungsdaten 1.–15. Januar 2025, also vor Beginn des Projekts (Vercel-Projekt 04.11.2025, Repository-Historie ab November 2025). Preisangaben (z. B. CHF 8–12, CHF 45–65) und Aussagen wie „10–15 % über dem Schweizer Durchschnitt“ ohne Quelle, Zeitraum oder Bezugsgröße. Ein Artikel empfiehlt ISO-Zertifikate als Auswahlkriterium, die der Anbieter selbst nicht hat (GLOBAL-021).
- **Beleg:** N002, N027
- **Auswirkung:** Unglaubwürdige Aktualität, nicht belegte Zahlen, Widerspruch zum eigenen Angebot.
- **Priorität:** P2 · **Launch-Blocker:** ja für die falschen Daten (G09), sonst nein
- **Konkrete Vorgabe:** Datumsangaben nur mit tatsächlichem Veröffentlichungs- bzw. Überarbeitungsdatum. Zahlen belegen (Quelle, Zeitraum, Region) oder streichen. Artikel auf echte Kundenfragen ausrichten und mit eigenen Erfahrungen des Kunden anreichern. Artikel ohne Mehrwert zurückstellen. Detailvorgaben je Artikel in Phase 3.
- **Abnahmekriterium:** Jedes Datum ist korrekt. Jede Zahl hat eine Quelle oder ist als Beispielrechnung gekennzeichnet. Kein Widerspruch zu Leistungsseiten und Impressum.
- **Aufwand/Verantwortlich:** Redaktion, klein bis mittel
- **Abhängigkeiten:** GLOBAL-021, GLOBAL-030
- **Evidenz/Sicherheit:** Inhaltsbefund
- **Quelle:** S02, S34

### GLOBAL-032 · Gestaltung: solide Grundstruktur, aber Kontrast, Bildwelt und Icon-Muster schwächen den seriösen Eindruck

- **Betroffen:** alle Seiten
- **Prüfdatum/Umgebung:** 24.09.2026, Bildschirmfotos 360–2560 px, Browser-Messung
- **Ist-Zustand:** Positiv (BESTANDEN): gemeinsame Navigation, Footer und Buttons auf allen Seiten, Inhalt auf großen Monitoren zentriert statt über die volle Breite gezogen, kein horizontaler Overflow (Ausnahme `/referenzen` bei 768 px), keine Layoutsprünge. Kritisch: Navigation über dem Hero-Bild mit zu wenig Kontrast (besonders ab 1920 px). Wiederkehrende Karten-Raster mit generischen Symbolen (Gebäude, Uhr, Schild, Funkeln) auf jeder Leistungsseite. Bildwelt aus KI-Motiven mit wechselnden „Uniformen“. Geschätzte Zeilenlänge von Fließtext um 100 Zeichen ab 1280 px (Heuristik 45–80). Das Logo zeigt eine andere Marke (GLOBAL-020).
- **Beleg:** N020, N026, N029, N031, Bildschirmfotos der Breiten-Matrix
- **Auswirkung:** Der Gesamteindruck ist ordentlich, aber austauschbar. Für eine seriöse Positionierung fehlen eigene Bildsprache und Markenkonsistenz.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Nach der Markenentscheidung (B09) zwei bis drei Gestaltungsrichtungen beschreiben und auswählen (Abschnitt C). Zentrale Design-Tokens mit barrierefreien Farbkombinationen. Icons nur mit Funktion. Echte Fotos statt KI-Motiven. Fließtext auf eine Lesebreite von etwa 65–75 Zeichen begrenzen (Heuristik, im Test prüfen). Prinzipien aus FIMI nur als Inspiration übernehmen (Abschnitt „FIMI-Inspiration“, folgt).
- **Abnahmekriterium:** Bildschirmfotos der Breiten-Matrix zeigen einheitliche Muster, lesbare Navigation und Zeilenlängen im Zielbereich. Die Kontrastprüfung ist ohne Verstöße.
- **Aufwand/Verantwortlich:** Design, mittel
- **Abhängigkeiten:** B09, GLOBAL-020, GLOBAL-023, GLOBAL-026
- **Evidenz/Sicherheit:** Renderbefund plus gestalterische Einschätzung (Projektkriterium, keine Google-Vorschrift)
- **Quelle:** S25

### GLOBAL-033 · Keine Übersichtsseiten für Leistungen und Standorte, keine Breadcrumbs

- **Betroffen:** Informationsarchitektur. `/leistungen`, `/standorte`, `/premium`, `/business` und `/basis` liefern 404
- **Prüfdatum/Umgebung:** 24.09.2026, HTTP, Code-Suche
- **Ist-Zustand:** Die im Auftrag erwartete Seite „Alle Leistungen“ (P02) und eine Übersicht der Einzugsgebiete (P09) fehlen. Die Leistungsübersicht existiert nur als Mega-Menü (per Tastatur nicht zu öffnen, GLOBAL-026), als Startseitenabschnitt und im Footer. Breadcrumbs gibt es nirgends (0 Fundstellen). Die URL-Pfade `/premium/…`, `/business/…` und `/basis/…` suggerieren Ebenen, die nicht existieren.
- **Beleg:** N008, N031, Code-Suche vom 24.09.2026
- **Auswirkung:** Keine Auswahlhilfe zwischen ähnlichen Leistungen. Wer eine URL kürzt, landet auf 404. Die Hierarchie ist für Nutzer und Suchmaschinen nur indirekt erkennbar.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Nach Klärung des Leistungsumfangs (B03) eine Seite „Alle Leistungen“ als Auswahlhilfe anlegen (je Leistung: für wen, was genau, Abgrenzung) und eine Seite zum Einzugsgebiet mit der tatsächlichen Abdeckung (B04). Sichtbare Breadcrumbs auf Unterseiten, passend zur tatsächlichen Hierarchie. Kategorie-Pfade entweder mit Inhalt belegen oder in der künftigen URL-Struktur vermeiden (mit Weiterleitungsplan, [S07]).
- **Abnahmekriterium:** Jede Ebene einer URL führt zu einer sinnvollen Seite oder existiert nicht. Die Breadcrumbs entsprechen der Navigation. Nutzertest: Die passende Leistung wird von der Übersicht aus in unter einer Minute gefunden.
- **Aufwand/Verantwortlich:** Redaktion/Entwicklung, mittel
- **Abhängigkeiten:** B03, B04, GLOBAL-030
- **Evidenz/Sicherheit:** HTTP- und Codebefund
- **Quelle:** S04, S07, S11

### GLOBAL-034 · Viele konkurrierende und unklare Handlungsaufforderungen

- **Betroffen:** alle Seiten
- **Prüfdatum/Umgebung:** 24.09.2026, Volltext, erste Ansicht (N020)
- **Ist-Zustand:** Nebeneinander stehen „Kontakt aufnehmen“, „Kostenlose Beratung“, „Termin vereinbaren“ (öffnet den defekten Chat, GLOBAL-002), „Jetzt anfragen“, „Jetzt Beratung anfordern“, „Zum Kontaktformular“, „Nachricht senden“, „Chat öffnen“ und „Jetzt analysieren“ (KI-Berater). Link-Buttons heißen nur „Mehr erfahren“, „Details“ oder „Mehr Info“. Auf Mobilgeräten ist in der ersten Ansicht der Startseite und der Zürich-Seite nur „Chat öffnen“ sicher sichtbar.
- **Beleg:** N020, N027
- **Auswirkung:** Unklar, welcher Weg zum Ziel führt und was danach passiert. Mehrere Wege führen in defekte Funktionen.
- **Priorität:** P2 · **Launch-Blocker:** nein (die defekten Ziele laufen über GLOBAL-002 und GLOBAL-003)
- **Konkrete Vorgabe:** Eine primäre Zielhandlung festlegen (B05), z. B. „Unverbindliche Besichtigung anfragen“, und eine sekundäre für frühe Recherche (z. B. „Leistungen vergleichen“). Einheitliche Beschriftungen, die sagen, was passiert. Linktexte mit Ziel, z. B. „Büroreinigung ansehen“. Nur Kanäle anbieten, die betreut und funktionsfähig sind.
- **Abnahmekriterium:** Jede Seite hat höchstens eine primäre und eine sekundäre Handlungsaufforderung mit einheitlichem Wortlaut. Kein Linktext lautet nur „Mehr erfahren“, „Details“ oder „Mehr Info“. Jede Handlungsaufforderung führt nachweislich zu einem funktionierenden Ziel.
- **Aufwand/Verantwortlich:** Marketing/Redaktion/Design, klein
- **Abhängigkeiten:** B05, B10, GLOBAL-002, GLOBAL-003
- **Evidenz/Sicherheit:** Inhaltsbefund. Wirkung auf die Conversion = HYPOTHESE
- **Quelle:** S04

### GLOBAL-035 · Mögliche API-Schlüssel in öffentlich einsehbaren Projektdokumenten

- **Betroffen:** `DEPLOYMENT.md`, `EMAIL_SETUP.md` im Repository `Brandea-ai/bgs-gebaeudeservice`, das laut GitHub-Liste **öffentlich** ist
- **Prüfdatum/Umgebung:** 24.09.2026, Mustersuche über den Repository-Stand `d7e1122`
- **Ist-Zustand:** Eine Suche nach Zeichenfolgen im Format bekannter API-Schlüssel meldet Treffer in `DEPLOYMENT.md` (2) und `EMAIL_SETUP.md` (1). **Der Inhalt der Treffer wurde bewusst nicht eingesehen und nicht notiert.** Die Schutzregel der Arbeitsumgebung hat das Anzeigen (auch maskiert) verhindert, und die Vorgabe verbietet Geheimnisse in Markdown (Regel 7). Ob es sich um echte, gültige Schlüssel oder um Beispiele handelt, ist deshalb offen.
- **Beleg:** Mustersuche (Trefferzahl je Datei), Sichtbarkeit laut GitHub-Repository-Liste
- **Auswirkung:** Falls echt, kann jeder Dritte die Schlüssel nutzen (z. B. Versand über das Mail-Konto, Kosten bei KI- oder Karten-Diensten). Das gilt auch für Schlüssel, die nur in der Git-Historie liegen.
- **Priorität:** P0 · **Launch-Blocker:** ja (G06)
- **Konkrete Vorgabe:** Sofort durch eine verantwortliche Person (Brandea) prüfen lassen. Echte Schlüssel beim jeweiligen Anbieter widerrufen und neu ausstellen, danach aus Dateien und Git-Historie entfernen und die Sichtbarkeit des Repositorys prüfen (öffentlich nötig?). Künftig nur Platzhalter in Dokumentationen und eine automatische Geheimnis-Prüfung im CI (GLOBAL-007).
- **Abnahmekriterium:** Die Verantwortliche bestätigt schriftlich, dass die Treffer keine gültigen Schlüssel sind oder dass sie widerrufen und ersetzt wurden. Eine erneute Mustersuche über Dateien und Historie ergibt keine gültigen Schlüssel. Das Repository ist nur so sichtbar wie nötig.
- **Aufwand/Verantwortlich:** Operations/Entwicklung (Brandea), klein
- **Abhängigkeiten:** GLOBAL-005, GLOBAL-007
- **Evidenz/Sicherheit:** HYPOTHESE auf Basis einer Mustersuche. Inhalt nicht eingesehen, Gültigkeit unbekannt.
- **Quelle:** S28, S29

### GLOBAL-036 · Leistungsseiten inhaltlich dünn und nach einer Schablone befüllt

- **Betroffen:** alle 18 Leistungsseiten (U07–U24)
- **Prüfdatum/Umgebung:** 24.09.2026, Volltext mit allen Reitern (Phase 3, Faktenblätter)
- **Ist-Zustand:** Sichtbarer Text inklusive aller Reiter je Leistungsseite: 76 bis 447 Wörter, Median 318. `/basis/sonderleistungen` hat 76 Wörter und eine einzige FAQ. Alle Seiten folgen derselben Schablone: Hero mit „Professionelle …“, vier Merkmalskarten, drei Reiter (Leistungen / Ablauf / Service-Pakete mit „Individuelles Angebot“), vier FAQs, CTA. Die Service-Pakete „Basic/Standard/Premium“ haben keinen unterscheidbaren Inhalt.
- **Beleg:** N023, N027, Faktenblätter Phase 3
- **Auswirkung:** Die Seiten beantworten die Kaufentscheidung kaum (Umfang, Grenzen, Ablauf, Belege). Sie wirken austauschbar und bieten Suchmaschinen wenig eigenständigen Inhalt [S02].
- **Priorität:** P1 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Nach Klärung des Leistungsumfangs (R3) je bestätigter Leistung eine Seite mit echtem Inhalt: Kundenproblem, konkreter Umfang und Grenzen, Ablauf ab Anfrage, Rhythmus-Beispiele, Belege, echte FAQs, eine klare Handlungsaufforderung. Nicht bestätigte Leistungen nicht mit Schablonentext füllen. Keine Mindestwortzahl als Ziel, die Vollständigkeit der Entscheidungsinformation zählt. Die Detailvorgaben stehen in den Seitenberichten.
- **Abnahmekriterium:** Je Leistungsseite sind die Fragen „für wen“, „was genau, was nicht“, „wie läuft es ab“, „wo“ und „welche Belege“ im sichtbaren Text beantwortet. Die Redaktion bestätigt die Fakten. Der Austauschtest schlägt fehl.
- **Aufwand/Verantwortlich:** Redaktion mit Fachinput des Kunden, mittel bis groß
- **Abhängigkeiten:** R3, GLOBAL-030, GLOBAL-011
- **Evidenz/Sicherheit:** Inhaltsbefund
- **Quelle:** S02

### GLOBAL-037 · Deutschland-Deutsch statt Schweizer Hochdeutsch

- **Betroffen:** 26 von 32 Seiten, `app/layout.tsx:85` (`lang="de"`)
- **Prüfdatum/Umgebung:** 24.09.2026, Volltext
- **Ist-Zustand:** 75 Schreibungen mit „ß“ im sichtbaren Haupttext, z. B. „Außenanlagen“, „regelmäßige“, „maßgeschneidert“, „Größe“. In der Schweiz ist „ss“ üblich, die Kunden-Website schreibt selbst „Regelmässige“ und „Aussen“ (N014). Die Sprachangabe ist `lang="de"` statt `de-CH`, obwohl `og:locale` bereits `de_CH` ist.
- **Beleg:** N007, N014, Zählung Phase 3
- **Auswirkung:** Die Seite wirkt für ein Schweizer Publikum nicht lokal. Das ist ein kleiner, aber sichtbarer Vertrauensfaktor.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Konkrete Vorgabe:** Durchgehend Schweizer Rechtschreibung („ss“), Schweizer Begriffe (z. B. „Offerte“, „Hauswartung“) dort, wo sie für die Zielgruppe üblich sind, und `lang="de-CH"`. Slugs bleiben unverändert, sie enthalten bereits kein „ß“.
- **Abnahmekriterium:** Die Volltextsuche über alle Seiten findet kein „ß“. `<html lang="de-CH">` ist gesetzt. Die Redaktion bestätigt die Begriffswahl.
- **Aufwand/Verantwortlich:** Redaktion, klein
- **Abhängigkeiten:** Neutexte aus GLOBAL-036
- **Evidenz/Sicherheit:** Inhaltsbefund
- **Quelle:** —

## O. Globales Ergebnis nach der Prüfung

**Stand 24.09.2026 (Phase 2):** 35 globale Befunde, davon **P0: 4** (GLOBAL-001, -002, -003, -035), **P1: 19**, **P2: 11**, **P3: 1**. 17 Befunde sind als Launch-Blocker markiert (einschließlich vorgeschlagener). Die Priorisierung wird in Phase 5 überprüft und in `06-MASSNAHMEN-BACKLOG.md` übertragen.

| Bereich | Status | Wichtigster Nachweis/Befund | Launch-relevant? | Verantwortliche Rolle |
|---|---|---|---|---|
| Positionierung und Belege | BEFUND (Kundenangaben offen) | Kein einziger Beleg im Nachweisregister, ISO-Angabe durch das eigene Impressum widerlegt, vermutlich erfundene Kundenstimmen (GLOBAL-021, -022, -030) | Ja (G09) | Geschäftsführung Kunde/Marketing |
| Branding und UX | BEFUND | Die Seite tritt als „Swiss Reinigungsfirma“ auf, „BGS“ erscheint nicht. KI-Bildwelt, CTA-Vielfalt (GLOBAL-020, -023, -032, -034) | Ja für Identität (G09) | Design/Kunde |
| Content und Suchintention | BEFUND (Intent-Matrix folgt in Phase 4) | Austauschbare Texte, FAQ-/Reiter-Inhalte nicht im HTML, fehlende Übersichtsseiten, Blog-Scheinaktualität (GLOBAL-030, -011, -033, -031, -017) | Teilweise (G09) | Redaktion/SEO |
| Crawling und Metadaten | BEFUND | 32 identische Titel und Beschreibungen, kein Canonical, keine strukturierten Daten, 7 defekte Links, offene Indexierungsstrategie (GLOBAL-010, -016, -018, -015) | Ja (G03, G04, G10) | SEO/Frontend |
| Performance | BEFUND (Labor) | Mobiler LCP 4,4–8,5 s, unsichtbarer Hero, übergroße Bilder (GLOBAL-025, -012, -024) | Nach Budgetentscheidung (G12) | Frontend |
| Backend und Sicherheit | BEFUND (kritisch) | Next.js mit kritischen Meldungen, Chat defekt, Formular mit stillem Verlust, mögliche Schlüssel im öffentlichen Repository (GLOBAL-001, -002, -003, -035, -004, -005, -007) | Ja (G02, G05, G06) | Backend/Operations |
| Datenschutz und Accessibility | BEFUND | Karte ohne Einwilligung, wirkungsloser Banner, Datenschutzerklärung passt nicht zur Technik, Kontrast und Tastatur (GLOBAL-019, -027, -026) | Ja für Datenschutz (G07). A11y nach G08 | Fachprüfung/QA |
| Messung und Betrieb | BEFUND | Keine Messung, keine Alarmierung, der Chat-Ausfall blieb unbemerkt (GLOBAL-029, -002) | Nach Projektentscheidung (G13) | Marketing/Operations |

**Befunde hier nicht aus dieser Checkliste ableiten. Erst prüfen, dann behaupten.**

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S01, S02, S03, S04, S05, S06, S07, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20, S21, S22, S23, S24, S25, S26, S27, S28, S29, S32, S33, S34, S35, S37, S38, S39, S40, S41, S42).
