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
