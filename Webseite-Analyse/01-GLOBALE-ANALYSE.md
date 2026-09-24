# Globale Website-Analyse

**Status: Bestandsaufnahme (Phase 1) erfasst, globale Prüfung (Phase 2) folgt.** Die Punkte A–N sind Prüfaufträge. Befunde werden erst nach Prüfung mit ID und Nachweis eingetragen. Quellen-IDs beziehen sich auf `09-QUELLEN.md`, Nachweis-IDs (N…) auf `08-PRUEFNACHWEISE.md`.

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

- [ ] Branche, fünf Leistungen, bediente Regionen und Ausschlüsse aus bestätigten Angaben erfassen.
- [ ] Primäres wirtschaftliches Ziel festlegen: qualifizierte Anfragen, gebuchte Erstgespräche oder eine andere reale Zielhandlung.
- [ ] Für jede Leistung die tatsächlichen Entscheider, Mitentscheider, Auslöser und Einwände erfassen. Berufsrollen und Kaufsituationen sind wichtiger als erfundene Persona-Vornamen.
- [ ] Persona-Aussagen nach Herkunft trennen: Kundeninterview, Vertriebsbeobachtung, CRM-Auswertung oder noch unbestätigte Hypothese.
- [ ] Überprüfen, ob Texte den Kundenbedarf beschreiben oder überwiegend Selbstlob des Unternehmens enthalten.
- [ ] Differenzierungsbehauptungen in ein Nachweisregister aufnehmen: behaupteter Vorteil, Beleg, zulässige Formulierung und zuständige Person.
- [ ] Leistungsumfang, Grenzen, Mitwirkungspflichten und realistischer Einstieg sind verständlich.
- [ ] Untersuchen, ob die fünf Leistungen inhaltlich unterscheidbar sind und sinnvolle Auswahlhilfe bieten.
- [ ] Für das gesamte Angebot eine prägnante Positionierung formulieren lassen: für wen, welches Problem, welches Ergebnis, welche belastbare Besonderheit.
- [ ] Unbequeme Frage beantworten: **Warum sollte ein passender Kunde dieses Unternehmen wählen, wenn alle Wettbewerber ebenfalls „professionell, zuverlässig und individuell“ versprechen?**

**Ergebnis:** Eine belegte Positionierung oder eine klare Liste fehlender Unternehmensinformationen. Noch unbekannte Fakten nicht mit Werbesprache ersetzen.

## B. Unternehmensidentität und Vertrauen

Google beschreibt hilfreiche, eigenständige Inhalte und nachvollziehbare Expertise als wichtige Qualitätsorientierung. E-E-A-T ist dabei kein einzelner technischer Rankingwert. [S02]

Unser Prüfkatalog:

- [ ] Firmenname, Rechtsform, Anschrift, Telefonnummer, E-Mail und verantwortliche Personen sind konsistent.
- [ ] Unternehmensgeschichte, Teamgröße, Erfahrung, Zertifikate, Mitgliedschaften und Leistungsfähigkeit sind belegbar.
- [ ] Kundenlogos und Referenzen haben nachvollziehbare Nutzungsfreigaben. Kein Logo bedeutet automatisch eine aktuelle Kundenbeziehung.
- [ ] Testimonials stammen von echten Personen/Organisationen, stimmen mit dem Original überein und verschweigen keine relevante Gegenleistung.
- [ ] Fallbeispiele nennen nachvollziehbar Ausgangslage, Vorgehen, Ergebnis, Zeitraum, eigenen Beitrag und Grenzen. Anonymisierung ist transparent, nicht vorgetäuscht.
- [ ] Ansprechpartner und Verantwortlichkeiten sind erkennbar; keine erfundenen KI-Mitarbeiter als reale Teammitglieder.
- [ ] Aussagen wie „führend“, „Nr. 1“, „garantiert“, „zertifiziert“ oder „100 %“ auf Nachweis und rechtliche Belastbarkeit prüfen.
- [ ] Erreichbarkeit und Rückmeldeversprechen passen zur tatsächlichen Organisation.
- [ ] Professionelle Domain-E-Mail, Logo, Favicon und Social-Vorschauen wirken konsistent.
- [ ] Platzhalter, Demo-Texte, defekte Links, unpassende Übersetzungen und Template-Reste vollständig erfassen.

**Abnahmekriterium:** Jede wesentliche Vertrauensbehauptung ist belegt oder wird zur Entfernung/Abschwächung vorgeschlagen. Keine erfundenen Belege als „Design-Platzhalter“ zur Veröffentlichung vorsehen.

## C. Branding, großzügiges Layout und Designsystem

**Das sind Projekt- und Designkriterien, keine Google-Vorschriften.**

- [ ] Bestandsaufnahme von Logo, Farbpalette, Typografie, Bildstil, Icon-Stil, Radius, Schatten und Bewegung erstellen.
- [ ] Prüfen, ob die visuelle Sprache zur Branche und Entscheidungssituation passt; „hochwertig“ muss nicht dunkel, goldfarben oder animationslastig bedeuten.
- [ ] Zwei bis drei nachvollziehbare Markenrichtungen nur beschreiben: gewünschte Wirkung, Eignung, Risiken und Unterschiede. Noch nichts umsetzen.
- [ ] Zentrale Design-Tokens für Markenfarben, Oberflächen, Text, Statusfarben, Schriften, Abstände, Breiten und Interaktionszustände prüfen.
- [ ] Gemeinsame Buttons, Formularfelder, Navigation, Footer und CTA-Bereiche dürfen nicht je Seite voneinander abweichend neu gestaltet sein.
- [ ] Full-Width-Hintergründe von Textbreiten unterscheiden. Große Flächen mit relevanten Bildern, Vergleichsansichten, Fallbeispielen oder sinnvollen Mehrspaltenrastern nutzen.
- [ ] Fließtext nicht über einen kompletten Ultrawide-Monitor ziehen. Etwa 45–80 Zeichen je Zeile können als zu testende Gestaltungsheuristik dienen, nicht als feste Norm.
- [ ] Inhaltsdichte prüfen: keine identischen XXL-Karten mit einem Satz Inhalt, keine leeren Abschnitte und keine künstliche Streckung.
- [ ] Informationshierarchie ist auch ohne Farben und Animation erkennbar.
- [ ] Auf schmalen Displays bleibt eine sinnvolle Lesereihenfolge erhalten; keine Desktop-Komposition, die mobil logisch zerfällt.
- [ ] Funktionale Icons sparsam verwenden; keine Emoji-Optik und keine austauschbaren Icon-Wände.
- [ ] Animation unterstützt Orientierung und Feedback, blockiert aber weder Scrollen noch Lesen. Reduzierte Bewegung respektieren.
- [ ] Bildausschnitte, Zeilenumbrüche und Section-Übergänge bei 360, 390, 768, 1280, 1440, 1920 und 2560 CSS-Pixeln prüfen. Das ist die vorgeschlagene Testmatrix, keine gesetzliche Liste.
- [ ] Kein horizontaler Seiten-Overflow; notwendige breite Datentabellen haben eine verständliche eigene Bedienung.
- [ ] Inspiration aus FIMI konkret benennen, aber eigenständige Markenführung und passende Inhalte verlangen.

**Abnahme:** Desktop-Breite wirkt bewusst genutzt, mobile Bedienbarkeit bleibt intakt, globale Muster sind konsistent. Das Design darf nicht nur auf einer einzigen Screenshot-Größe funktionieren.

## D. Content-Qualität und natürliche Sprache

**Eigene redaktionelle Prüfung, orientiert an den Qualitätsfragen in [S02]:**

- [ ] Jede Seite beantwortet eine konkrete Frage beziehungsweise unterstützt eine konkrete Entscheidung.
- [ ] Textaussagen lassen sich auf das tatsächliche Unternehmen beziehen. Der Austauschtest wird durchgeführt: Könnte unverändert ein beliebiger Firmenname eingesetzt werden?
- [ ] Konkrete Abläufe, Zuständigkeiten, Leistungsgrenzen und Beispiele ersetzen Füllwörter.
- [ ] Fachbegriffe sind korrekt und werden bei Bedarf erklärt; Fachlichkeit nicht mit unnötiger Komplexität verwechseln.
- [ ] Satzrhythmus, Überschriften und Wortwahl klingen natürlich, nicht wie ein seriell befülltes Template.
- [ ] Kundennutzen und reale Belege stehen zusammen. Zahlen ohne Zeitraum, Bezugsgröße oder Quelle werden markiert.
- [ ] FAQs stammen aus echten Einwänden oder plausibel begründeten Recherchefragen, nicht aus dem Wunsch nach mehr Keywords.
- [ ] Einstieg, Zwischenüberschriften und CTA sind auf Suchintention und Entscheidungsreife abgestimmt.
- [ ] Keine Keyword-Dichte, Mindestwortzahl oder vermeintlicher „KI-Erkennungswert“ als Abnahmeziel.
- [ ] Keine Scheinaktualität durch automatisch geänderte Jahreszahlen; inhaltliche Pflege und echte Überarbeitung unterscheiden.
- [ ] Redaktionsverantwortung und spätere Aktualisierungsanlässe sind zugeordnet.

**Erforderlicher Befundstil:** Problematische Passage kurz zitieren, Problem erklären, eine konkrete Ersatzfassung vorschlagen und fehlende Fakten benennen. Nicht nur „Texte hochwertiger machen“ schreiben.

## E. Suchintention, Seitenarchitektur und interne Verlinkung

- [ ] Alle vorhandenen Routen, Navigationen, Footerverweise, XML-Sitemap-Einträge und dynamischen Seiten gegeneinander abgleichen.
- [ ] Jede kommerzielle Kernseite hat einen klaren Themen-/Intent-Schwerpunkt.
- [ ] Startseite und Leistungsübersicht übernehmen Orientierung; einzelne Leistungsseiten beantworten jeweils spezifische Entscheidungsfragen.
- [ ] Einzugsgebiet und konkreter Unternehmensstandort werden nicht verwechselt.
- [ ] Für jede relevante Seite mindestens einen sinnvollen internen Entdeckungspfad dokumentieren. „Nur in Sitemap vorhanden“ gesondert markieren.
- [ ] Kontextlinks unterstützen den nächsten sinnvollen Schritt und haben verständliche Linktexte.
- [ ] Navigationspfade und Breadcrumbs stimmen mit der tatsächlichen Informationsarchitektur überein.
- [ ] Verwaiste URLs, defekte Links, Weiterleitungsketten und falsche Zielvarianten erfassen.
- [ ] Rechtliche Seiten bleiben erreichbar, werden aber nicht als kommerzielle Keyword-Zielseiten missbraucht.
- [ ] Vorhandene mehrsprachige Inhalte nur bei realem Bedarf mit korrekter Sprach-/Regionszuordnung und gegenseitigen Verweisen prüfen.

Google kann Links verlässlich verarbeiten, wenn sie als echte Links mit Ziel-URL vorliegen; reine Klicklogik ist nicht gleichwertig. Technische und semantische Linkprüfung getrennt durchführen. [S04]

**Ergebnis:** Die vollständige Intent-Matrix steht in `03-SUCHINTENTION-UND-KANNIBALISIERUNG.md`.

## F. Crawlability, Rendering und Indexierungssteuerung

Crawlbar, renderbar, indexierbar, tatsächlich indexiert und gut gerankt sind unterschiedliche Zustände. Technische Eignung garantiert keine Indexierung. [S01][S03]

- [ ] Produktionsdomain, Protokoll und bevorzugte Hostvariante eindeutig dokumentieren.
- [ ] Öffentliche Inhaltsseiten liefern den vorgesehenen HTTP-Status. Nicht vorhandene Seiten zeigen keine erfolgreiche leere Inhaltsseite.
- [ ] Robots-Regeln, Meta-Robots und HTTP-Header zusammen prüfen. Widersprüchliche Regeln dokumentieren.
- [ ] Kein versehentliches `noindex` auf den freigegebenen Marketingseiten.
- [ ] Benötigte JavaScript-, CSS- und Bildressourcen sind für das Rendering erreichbar.
- [ ] Wichtigste Inhalte und Navigation im ausgelieferten HTML und im gerenderten Zustand vergleichen. Nicht pauschal behaupten, Google könne JavaScript nicht lesen.
- [ ] Texte dürfen nicht erst nach Scroll-, Klick- oder Formularaktionen nachgeladen werden, wenn sie zur indexierbaren Kerninformation gehören sollen.
- [ ] Hydration-Fehler, Client-Ausnahmen und fehlgeschlagene Datenabrufe auf jeder Kernroute erfassen.
- [ ] Consent-Banner, Bot-Schutz, WAF, Login oder Vercel-Schutz blockieren nicht versehentlich die öffentliche Produktion.
- [ ] `canonical`, interne Verlinkung, Sitemap und Weiterleitungen zeigen konsistent auf die gewünschte URL. [S05]
- [ ] Sitemap enthält die beabsichtigten kanonischen, indexierbaren Inhalts-URLs, keine Fehlerseiten oder Preview-URLs. Änderungsdaten sind wahrheitsgemäß. [S06]
- [ ] Trackingparameter und URL-Varianten auf ungewollte Duplikate prüfen.
- [ ] Preview-, Staging-, Admin-, interne Such- und sensible Seiten erhalten eine begründete eigene Zugriff-/Indexierungsstrategie. Nicht „alles muss Google-crawlbar sein“ wörtlich auf interne Bereiche anwenden.
- [ ] Search-Console-URL-Prüfung und Indexierungsberichte auswerten, sofern lesender Zugang vorhanden ist. Ohne Zugang keinen Indexierungsstatus behaupten.
- [ ] Crawl-Befunde an Versionsstand und Zeitpunkt binden; aus einer einmal erfolgreichen Anfrage keine dauerhafte Verfügbarkeit ableiten.

**Wichtig:** `robots.txt` ist weder Zugriffsschutz noch zuverlässige Entfernung aus dem Index. Ein `noindex` muss von einem Crawler gelesen werden können. [S01]

## G. Metadaten, Vorschauen und strukturierte Daten

- [ ] Pro Seite Ist-Titel, Ist-Beschreibung, sichtbare Hauptüberschrift, Canonical und Vorschauangaben erfassen.
- [ ] Doppelte oder widersprüchliche Titel mit tatsächlichem Seitenzweck abgleichen.
- [ ] Genau eine klar erkennbare Hauptüberschrift als Projektkonvention; keine angebliche Google-Strafe allein aus der Anzahl von H1 ableiten.
- [ ] Konkrete neue Titel und Beschreibungen nur aus bestätigten Informationen entwickeln; keine übertriebenen Superlative.
- [ ] Metadaten nicht gleichzeitig an mehreren Stellen widersprüchlich pflegen; Framework-Vererbung und gerenderte Ausgabe kontrollieren. [S26]
- [ ] Open-Graph-Vorschauen, Logo, Favicon und Social-Sharing testen. Das sind Darstellungs-/Vertrauensprüfungen, keine Rankinggarantie.
- [ ] Unternehmensentität mit stabiler Identität modellieren; Name, Logo und Kontaktdaten konsistent halten. [S14]
- [ ] `Service` für tatsächliche Leistungen, gegebenenfalls `BreadcrumbList` für sichtbare Hierarchie und sachlich passender Unternehmenstyp; Eigenschaften nur nach zutreffenden Fakten empfehlen. [S10][S11][S12]
- [ ] `LocalBusiness` nicht allein wegen eines Einzugsgebiets und ohne passende reale Unternehmenssituation erzwingen.
- [ ] Kein pauschales `FAQPage`-Pflichtschema; aktuelle Einstellung der Google-FAQ-Rich-Results berücksichtigen. [S13]
- [ ] Keine erfundenen Bewertungen oder Sternedarstellungen. Regeln zu selbstbezogenen Unternehmensbewertungen und incentivierten Rezensionen prüfen. [S15]
- [ ] Schema-Vokabularvalidierung und Google-Rich-Result-Test trennen. „Kein unterstütztes Rich Result erkannt“ bedeutet bei `Service` nicht automatisch „Markup kaputt“.

**Abnahme:** Je Schema-Typ sind Zweck, Datenherkunft, Sichtbarkeit, passende Properties und realistische Google-Unterstützung dokumentiert. Keine JSON-LD-Codeblöcke liefern.

## H. Bilder, KI-Medien, Schriften und Asset-Qualität

- [ ] Medieninventar nach URL, Dateipfad, Verwendungszweck, Quelle, Nutzungsrechten und tatsächlicher Auslieferungsgröße führen.
- [ ] KI-Bilder auf künstliche Gesichter, fehlerhafte Hände, erfundene Beschriftungen, unplausible Arbeitsabläufe und falsche Branchenrealität prüfen.
- [ ] Keine KI-Szene als Foto des echten Teams, eines realen Kundenobjekts oder einer echten Referenz ausgeben.
- [ ] Für vertrauensentscheidende Stellen echte, freigegebene Unternehmensbilder bevorzugen; kreative Illustrationen als solche behandeln.
- [ ] Für jedes wichtige Bild Motiv, Platzierung, Mobil-Crop und Aussage definieren. Bilder müssen Inhalt ergänzen, nicht nur große Flächen füllen.
- [ ] Responsive Auslieferung und `sizes` gegen die tatsächliche Layoutbreite prüfen; kein winziges Bild auf großem Display und keine riesige Datei auf Mobilgeräten. [S27]
- [ ] Fotoformate anhand Browserunterstützung, Qualität und Transfergröße auswählen; SVG für geeignete Vektorgrafiken gesondert behandeln. [S16]
- [ ] Kein universelles „jedes Bild maximal 100 KB“. Pro Einsatzklasse begründete Budgets festlegen und mit LCP, Qualität und realen Nutzungsgrößen validieren.
- [ ] Ladepriorität des LCP-Bildes und Lazy Loading weiter unten differenzieren. Nicht alle Bilder vorladen. [S19]
- [ ] Abmessungen beziehungsweise Seitenverhältnisse reservieren und Layoutverschiebungen messen. [S21]
- [ ] Alt-Texte je Kontext formulieren: Information, Bedienfunktion oder Dekoration. Nicht automatisch Keywords in jedes Bild einfügen. [S17]
- [ ] Fonts auf Lizenz, benötigte Schnitte, Dateigröße, Fallback-Verhalten und externe Datenübertragung prüfen.
- [ ] Überschriften und zentrale Aussagen sind echter Text, nicht nur eingebrannte Schrift im Bild.

## I. Performance und Core Web Vitals

**Dokumentierte Zielwerte für reale Nutzer:** LCP höchstens 2,5 Sekunden, INP höchstens 200 Millisekunden, CLS höchstens 0,1; jeweils am 75. Perzentil, sinnvoll nach Mobil/Desktop getrennt. [S18]

- [ ] Feldmessungen und Labormessungen klar unterscheiden; fehlende Felddaten nicht als bestanden markieren.
- [ ] Mess-URL, Geräteprofil, Netzwerklimitierung, Cache-Zustand, Toolversion, Datum und mehrere Durchläufe dokumentieren.
- [ ] Nicht nur die Homepage messen: jede Route auf offensichtliche Probleme prüfen und aufwendigere Messungen mindestens pro Seitentyp und auffälliger Einzelroute durchführen; Stichproben klar benennen.
- [ ] Größtes sichtbares Element und seine Ladeabhängigkeiten identifizieren. [S19]
- [ ] Schwere Client-Komponenten, lange Tasks, Animation, Widgets und Drittanbieterskripte auf Interaktionsprobleme prüfen. [S20]
- [ ] Schriften, Bilder, eingebettete Inhalte und Banner auf Layoutsprünge prüfen. [S21]
- [ ] Serverlatenz, Datenabrufe, Cache-Verhalten, Weiterleitungen und Fehlerquoten passend zur Architektur untersuchen.
- [ ] Unnötige Drittanbieter, doppelte Trackingbibliotheken und nie verwendete Pakete als begründete Einsparpotenziale dokumentieren.
- [ ] Leistungsbudgets für Bilder, JavaScript, Fonts und Drittanbieter individuell vorschlagen; ausdrücklich als Projektbudgets kennzeichnen.
- [ ] Kein Ziel „Lighthouse 100 = Top 10“. Gute Scores sind Diagnosehilfen und ersetzen keine tatsächliche Nutzerqualität. [S35][S37]

## J. Next.js-/TypeScript-Architektur und Wartbarkeit

- [ ] Tatsächlichen App-/Pages-Router, Next.js-/React-/Node-Version, Paketmanager und Lockfile erfassen.
- [ ] Versionsabhängige Aussagen gegen die passende offizielle Dokumentation und aktuelle Sicherheitsmeldungen prüfen; nicht automatisch die neueste Major-Version verlangen.
- [ ] Seitenstruktur mit eigenem Ordner und zusammensetzender TSX-Datei prüfen. Inhaltliche Sektionen sind eigenständige Komponenten; nicht jeder rein dekorative Wrapper braucht eine Datei. [S24]
- [ ] Seitenspezifische CSS-Dateien kapseln nur lokale Besonderheiten. Globale Farben, Typografie und gemeinsame UI bleiben zentral. [S25]
- [ ] Doppelte Header, Footer, CTA-Varianten und kopierte Designwerte erfassen.
- [ ] Server-/Client-Grenzen, Datenzugriffe und interaktive Ausnahmen nachvollziehen; nicht grundlos jede Seite vollständig clientseitig ausliefern.
- [ ] Metadata-, Bild-, Font-, Fehler- und Lade-Konventionen im Kontext der installierten Version prüfen. [S23][S26][S27]
- [ ] Daten-/Content-Modell auf eindeutige Quellen und Pflegefähigkeit prüfen; keine gleiche Telefonnummer in zehn Dateien manuell pflegen.
- [ ] Caching- und Revalidierungsregeln aus dem tatsächlich verwendeten Next.js-Modell ableiten. Kein pauschaler Cache-Schalter für alle Inhalte.
- [ ] Produktionsbuild, Typecheck, Linting und Tests nur in sicherer isolierter Umgebung prüfen oder Ergebnisse vorhandener CI-Läufe lesend auswerten.
- [ ] Tests und Fehlermeldungen dürfen nicht durch pauschale Ignorier-Einstellungen grün erscheinen.
- [ ] Empfehlung „komplett neu bauen“ gegen gezielte Überarbeitung abwägen. Bestehende gute Inhalte, URLs, Abläufe und Assets ausdrücklich bewahren.

## K. Backend, Kontaktweg, Sicherheit und Betrieb

Ein grünes Frontend beweist kein funktionierendes Backend. Prüfe nur tatsächlich vorhandene Funktionen: API-Routen, Server Actions, Formularanbieter, CRM, CMS, Datenbank, Authentifizierung oder Webhooks. Nicht vorhandene Systeme nicht als „fehlen“ bewerten. Grundlage für technische Sicherheitsfragen: [S28][S29].

- [ ] Datenfluss vom Formular über Server/Provider bis zum tatsächlichen Empfänger oder CRM beschreiben.
- [ ] Servervalidierung, Pflichtfelder, Eingabegrenzen und verständliche Fehlerzustände prüfen.
- [ ] Spam-Schutz und Rate Limits dürfen echte Nutzer nicht unnötig aussperren; Sicherheits-/Bedienungsabwägung dokumentieren.
- [ ] Wiederholtes Absenden, Netzwerkabbruch, Providerfehler und Timeout dürfen keine still verlorenen oder unkontrolliert duplizierten Anfragen erzeugen.
- [ ] Erfolgsmeldung, Bestätigung, interne Benachrichtigung und tatsächliche Zustellung getrennt verifizieren.
- [ ] SPF, DKIM und DMARC beziehungsweise Provider-Domainverifikation als Zustellbarkeitsprüfungen aufnehmen; „Mail akzeptiert“ ist noch kein Posteingangsnachweis.
- [ ] API-Schlüssel und privilegierte Tokens bleiben serverseitig; keine Geheimnisse im Browser-Bundle oder öffentlichen Repository.
- [ ] Autorisierung an jedem schützenswerten serverseitigen Zugriff prüfen. Ein versteckter Button ist kein Zugriffsschutz.
- [ ] Bei vorhandenem Login: Rollen, Sitzungen, Abmeldung, Passwort-/Reset-Prozess und geschützte API-Endpunkte prüfen.
- [ ] Bei vorhandenem Upload: Dateitypen, Größen, Zugriff, Aufbewahrung und Missbrauchsrisiken prüfen.
- [ ] Bei vorhandenen Webhooks: Signaturprüfung, Wiederholungsschutz und sichere Verarbeitung prüfen.
- [ ] HTTP-Sicherheitsheader, HTTPS, Content-Security-Policy und externe Einbindungen auf Eignung prüfen; keine vermeintlich sichere Standardliste blind einsetzen.
- [ ] Datenbank-/Mandantentrennung, Rechte und Backups nur dort prüfen, wo ein solches Backend existiert.
- [ ] Logs helfen bei Fehlerdiagnose, veröffentlichen aber keine Geheimnisse oder unnötigen personenbezogenen Angaben.
- [ ] Staging und Produktion sind getrennt; Test-Anfragen landen nicht beim echten Vertrieb.
- [ ] Monitoring, verantwortliche Person, Alarmweg, Fehlerbehebung und Wiederherstellung sind dokumentiert.
- [ ] Vercel-Runtime, Regionen, Limits, Abrechnung und Umgebungsvariablen anhand des tatsächlichen Projekts prüfen. Keine Tarifannahmen treffen.

## L. Conversion und psychologische Plausibilität

**Die folgenden Punkte sind Hypothesen für Gestaltung und Tests, keine garantierten psychologischen Wirkungen.**

- [ ] Die erste sichtbare Ansicht vermittelt Angebot, Zielgruppe, belegbaren Nutzen und einen verständlichen nächsten Schritt.
- [ ] CTA-Beschriftung sagt, was geschieht, statt nur „Mehr“ oder „Absenden“.
- [ ] Für frühe Recherche und konkrete Kaufabsicht gibt es passende nächste Schritte; nicht jeder Besucher wird sofort zur großen Anfrage gedrängt.
- [ ] Relevante Belege stehen in der Nähe riskanter Entscheidungen, nicht ausschließlich im Footer.
- [ ] Prozess, Aufwand, benötigte Informationen und mögliche Kosten beziehungsweise Angebotslogik werden soweit zutreffend erklärt.
- [ ] Formular verlangt nur Informationen, die für den nächsten Schritt wirklich gebraucht werden; spätere Qualifizierung und Spam-Risiko mitdenken.
- [ ] Vertrauensaufbau beruht auf echten Ansprechpartnern, Referenzen und Transparenz, nicht auf erfundenen Siegeln.
- [ ] Kein künstlicher Countdown, keine erfundene Knappheit und keine manipulative Zustimmungsgestaltung.
- [ ] Kontaktalternativen passen zur Zielgruppe und tatsächlichen Erreichbarkeit; nicht zehn konkurrierende Kanäle ohne Betreuung anbieten.
- [ ] Mobile Anruf-, E-Mail-, Formular- und gegebenenfalls Terminwege sind verständlich bedienbar.
- [ ] Testaufgaben mit tatsächlichen Zielpersonen planen: Angebot erklären, passende Leistung finden, Vertrauen begründen, Anfrage stellen. Eine kleine qualitative Runde findet Probleme, beweist aber keine Marktquote.
- [ ] A/B-Tests erst mit vorab definiertem Ziel, ausreichendem erwartbarem Datenumfang und Guardrails planen. Keine Sieger aus wenigen Klicks ausrufen.

**Messkonzept:** Primär qualifizierte Anfragen beziehungsweise qualifizierte Anfragen pro auswertbarer Sitzung. Sekundär erfolgreich abgeschickte Formulare, Termine und Kontaktinteraktionen. Ein Buttonklick ist noch kein Lead, ein Lead noch kein Umsatz.

## M. Datenschutz, Anbieterangaben und Barrierefreiheit

Dieser Abschnitt beschreibt Prüfaufträge, keine individuelle Rechtsfreigabe. Rechtsform, Branche, tatsächliche Trackingtechnik, Verbraucherbezug und Datenflüsse sind zuerst festzustellen. Fachliche rechtliche Prüfung bleibt ein gesonderter Abnahmeschritt.

- [ ] Impressum gegen die konkrete Anbieteridentität und erforderlichen Angaben prüfen. [S38]
- [ ] Datenschutzhinweise mit den tatsächlich eingebundenen Diensten, Empfängern, Zwecken und Formularwegen abgleichen.
- [ ] Speicherungen/Zugriffe auf Endgeräte einschließlich Cookies und ähnlicher Technik auf Einwilligungsbedarf und gesetzliche Ausnahmen prüfen. [S39]
- [ ] Ablehnen, zustimmen und später widerrufen technisch testen. Kein pauschales „Banner vorhanden = rechtskonform“.
- [ ] Tracking, Karten, Video, Chat und externe Schriftabrufe in den jeweiligen Zustimmungszuständen untersuchen.
- [ ] Auftragsverarbeitung, Datenübermittlungen, Löschfristen, Betroffenenanfragen und Verantwortlichkeiten als organisatorische Nachweise abfragen; nicht aus dem Frontend ableiten.
- [ ] Keine pauschale Pflicht-Einwilligung für jede Kontaktanfrage voraussetzen; konkrete Rechtsgrundlage und Datenverarbeitung fachlich klären.
- [ ] BFSG-Anwendungsbereich und Ausnahmen für das konkrete Angebot prüfen. Nicht pauschal behaupten, jede B2B-Unternehmenswebsite falle darunter. [S40][S41]
- [ ] WCAG 2.2 AA als technischen Projektmaßstab anwenden: semantische Struktur, Tastaturbedienbarkeit, sichtbarer Fokus, Kontrast, Formulare, verständliche Fehler und sinnvolle Statusmeldungen. [S22]
- [ ] Navigation und Dialoge auf Fokusführung, Schließen und Rückkehr zum Auslöser prüfen.
- [ ] Vergrößerung, Umbruch und mobile Bedienung testen; reine automatische Scannergebnisse sind keine vollständige Barrierefreiheitsprüfung.
- [ ] Haupt-Conversion-Strecke zusätzlich manuell per Tastatur und mit geeigneter Screenreader-Stichprobe überprüfen.

## N. Analytics, lokale Sichtbarkeit und Weiterentwicklung

- [ ] Baseline für organische Nachfrage, relevante Landingpages und qualifizierte Anfragen dokumentieren, sofern Daten vorliegen.
- [ ] Geschäftliche Zielbegriffe, Region, Sprache, Gerät und Brand-/Non-Brand-Trennung vor Rankingauswertung festlegen.
- [ ] Ereignisse auf echte Ergebnisse beziehen: Anfrage erfolgreich angenommen, Termin tatsächlich gebucht, Lead qualifiziert. Doppelte Events und interne Tests herausfiltern.
- [ ] Keine personenbezogenen Formulardaten in Analytics-Eventnamen, URLs oder frei zugängliche Logs schreiben.
- [ ] Quelle/Medium, Landingpage und gegebenenfalls CRM-Qualifizierung datenschutzgerecht verknüpfen; Messlücken offenlegen.
- [ ] Google-Unternehmensprofil, passende Kategorien, tatsächliche Einzugsgebiete und konsistente Firmenangaben prüfen, sofern das Unternehmen dafür geeignet ist. [S32]
- [ ] Reale Bewertungen, hochwertige Fachbeiträge und legitime Branchen-/Partnererwähnungen als außerhalb des Codes liegende Wachstumsaufgaben erfassen. Keine Linkpakete oder erfundenen Erwähnungen. [S33]
- [ ] Vorhandene Backlinks und erfolgreiche Landingpages vor dem Relaunch sichern; keine relevante URL aus kosmetischen Gründen verwerfen. [S07]
- [ ] Für Google-KI-Funktionen auf eigenständige hilfreiche Inhalte und normale technische Zugänglichkeit setzen. Kein besonderes „KI-Schema“ oder `llms.txt` als Pflichtaufgabe behaupten. [S34]
- [ ] Neue Funktionen nur bei konkretem Nutzen priorisieren: echte Fallstudie, transparente Leistungsabgrenzung, verständlicher Ablauf, geeignete Anfragehilfe oder hilfreiche Entscheidungsvorlage.

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

- **Betroffen:** alle Seiten (Chat-Button „Chat öffnen“ aus `app/layout.tsx`), `/api/chat`, vermutlich auch `/api/industry-analysis` (Startseite, „KI-Branchen-Berater“), `server/gemini.ts:591-596, 860-866`
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
- **Ist-Zustand:** Überschrift, Einleitung und Buttons des Heros stehen im HTML mit `opacity:0`. Auf dem Mobil-Bildschirmfoto direkt nach dem Laden sind weder H1 noch Button zu sehen, nur das Hero-Bild. Auf Desktop sind die Buttons zum Aufnahmezeitpunkt halbtransparent.
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

## O. Globales Ergebnis nach der Prüfung

| Bereich | Status | Wichtigster Nachweis/Befund | Launch-relevant? | Verantwortliche Rolle |
|---|---|---|---|---|
| Positionierung und Belege | NICHT GEPRÜFT | Offen | Offen | Geschäftsführung/Marketing |
| Branding und UX | NICHT GEPRÜFT | Offen | Offen | Design |
| Content und Suchintention | NICHT GEPRÜFT | Offen | Offen | Redaktion/SEO |
| Crawling und Metadaten | NICHT GEPRÜFT | Offen | Offen | SEO/Frontend |
| Performance | NICHT GEPRÜFT | Offen | Offen | Frontend |
| Backend und Sicherheit | NICHT GEPRÜFT | Offen | Offen | Backend/Operations |
| Datenschutz und Accessibility | NICHT GEPRÜFT | Offen | Offen | Fachprüfung/QA |
| Messung und Betrieb | NICHT GEPRÜFT | Offen | Offen | Marketing/Operations |

**Befunde hier nicht aus dieser Checkliste ableiten. Erst prüfen, dann behaupten.**

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S01, S02, S03, S04, S05, S06, S07, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20, S21, S22, S23, S24, S25, S26, S27, S28, S29, S32, S33, S34, S35, S37, S38, S39, S40, S41).
