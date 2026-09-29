# Technischer Prüfbericht, Welle 3, Runde 1

Prüfung am 29.09.2026. Basis: `fc6a78840757cbe1571eada505dcd5e2d184df37`, unveränderter Prüfstand `.worktrees/pruefstand-r1`, Produktionsbuild `QTMdb1_rTKbPKOXlPN0TB`, `LANGUAGES=true NEW_BRAND=true`, `http://localhost:3310`. Kein eigener Build, keine Änderung am Repository, kein echter E-Mail-Versand.

## Ergebnis

128 Seiten wurden im gebauten HTML geprüft, zusätzlich 256 axe-Läufe bei 1440 × 900 und 390 × 844. Die SEO-Struktur ist konsistent. Zwei technische Fehler sind direkt im gebauten System bestätigt: ein falscher Formularerfolg bei einer leeren Providerantwort und doppelt benannte Landmarken auf den Premium-Übersichten. Die Ratenbegrenzung hat ausserdem keine vollständige Bereinigung und keine Speichergrenze. Die Korrekturen werden vom Integrator und den zuständigen Einheiten bearbeitet; dieser Bericht bewertet die Baseline.

## Befunde

### TECH-01, mittel, Formularerfolg ohne Anbieter-ID

- Seite: `/api/contact`, mittelbar jedes Kontaktformular.
- Datei: `server/email.ts:158`, insbesondere Rückgabe `true` in Zeile 164.
- Problem: Eine formal erfolgreiche Resend-Antwort ohne `data.id` wird als bestätigter Versand ausgegeben.
- Beleg: Der echte Produktionsbuild antwortet auf Mock-Provider-HTTP-200 mit `{}` sowie `null` jeweils mit HTTP 200 und `success: true`. Der Provider bestätigt keine Nachricht mit einer ID. 18 lokale API-Fälle, 16 bestanden, genau diese zwei scheitern. `contact-results.json`, `contact-server.log`, `contact_api_audit.cjs`.
- Korrektur: Erfolg nur bei `typeof data.id === 'string'` und nichtleerem getrimmten Wert, sonst Fehlerpfad 503. Leere, fehlende und numerische IDs abdecken.
- Kundenfrage: nein.
- Einschränkung: Kein Nachweis eines bereits eingetretenen Produktionsverlusts. Die Providerantworten waren gezielt simuliert. Auch eine Anbieter-ID beweist Annahme, nicht Zustellung.

### TECH-02, mittel, doppelt benannte Premium-Landmarken

- Seiten: `/premium`, `/en/premium`, `/fr/premium`, `/it/premium`.
- Datei: `client/src/seiten/premium-uebersicht/06-ablauf.tsx:16` und `:24`.
- Problem: Die äussere `section` und die innere `ProcessScrolly`-Section sind beide mit `ablauf-titel` benannt. Screenreader bekommen zwei gleichnamige, verschachtelte Regionen.
- Beleg: axe 4.11.0, Regel `landmark-unique`, acht Trefferkonstellationen: vier Sprachseiten in beiden Breiten. Deutsch jeweils zweimal «Wie eine Premium-Anfrage abläuft». `axe-results.json`.
- Korrektur: Äusseren Container als `div` ausgeben; eine benannte Region bleibt erhalten.
- Kundenfrage: nein.

### TECH-03, mittel als Abhängigkeitswartung, veraltetes eingebettetes PostCSS

- Seite: Build- und Abhängigkeitsbaum.
- Datei: `package-lock.json:8638`, `package.json`.
- Problem: Next 15.5.26 bindet PostCSS 8.4.31 ein, obwohl direkt bereits PostCSS 8.5.28 installiert ist. `npm audit --omit=dev` meldet zwei betroffene Paketknoten, davon einen als hoch.
- Beleg: Installierter Next-Abhängigkeitsbaum und frischer npm-Audit. Relevante Primärmeldungen: [GHSA-6g55-p6wh-862q](https://github.com/postcss/postcss/security/advisories/GHSA-6g55-p6wh-862q), [GHSA-r28c-9q8g-f849](https://github.com/postcss/postcss/security/advisories/GHSA-r28c-9q8g-f849), [GHSA-fxqj-rqcc-2cmp](https://github.com/postcss/postcss/security/advisories/GHSA-fxqj-rqcc-2cmp).
- Korrektur: Direkte PostCSS-Version 8.5.28, Override `next.postcss=$postcss`, Lock nur über npm erzeugen. Der isolierte reine npm-Weg unter `npm-only-minimal` ergibt nach frischem `npm ci` Next 15.5.26 mit PostCSS 8.5.28, unverändertes Sharp 0.35.4 und Audit 0. Keine Paketversion ausser der entfernten alten verschachtelten Auflösung driftet. Die verbleibenden Lock-Änderungen sind Peer-Metadaten.
- Kundenfrage: nein.
- Einschränkung: Die Advisories setzen vom Angreifer kontrollierte CSS-Eingaben voraus. Eine solche Laufzeitverarbeitung wurde in den Formular- und API-Pfaden nicht gefunden. Ein öffentlich ausnutzbarer High-Angriff gegen diese konkrete Website ist damit nicht belegt. Build-Prüfung des Overrides bleibt Aufgabe des Integrators.

### TECH-04, mittel, Ratenbegrenzung wächst trotz Ablehnung weiter

- Seite: `/api/contact`.
- Datei: `app/api/contact/route.ts:16` bis `:26`.
- Problem: Einträge anderer IPs werden nie gelöscht. Auch oberhalb des Limits wird jeder weitere Zeitpunkt angehängt. Speicherbedarf und Filterarbeit wachsen dadurch bei einer lange warmen Instanz weiter.
- Beleg: Unverändertes Quellsegment mit kontrollierter Uhr ausgeführt. IP 1 bleibt nach 24 simulierten Stunden und einem Request von IP 2 gespeichert; 100 Requests von IP 2 erzeugen 100 Zeitstempel, obwohl nur fünf erlaubt sind. `rate-limit-retention.json`.
- Korrektur: Abgelaufene IP-Einträge vollständig entfernen, gespeicherte Einträge begrenzen und nach Erreichen des Limits kein unbegrenztes Arraywachstum zulassen. Die Sperrwirkung pro IP muss erhalten bleiben.
- Kundenfrage: nein.
- Einschränkung: Kein Lasttest gegen Produktion. Die echte Lebensdauer einer Vercel-Instanz und die dort tatsächlich gehaltene Datenmenge wurden nicht festgestellt. Daraus wird kein bereits eingetretener Datenschutzverstoss abgeleitet.

### TECH-05, niedrig, ungenutzte kursive Schrift wird vorgeladen

- Seiten: alle über `RootShell`.
- Datei: `client/src/components/RootShell.tsx:34`.
- Problem: Cormorant Garamond wird mit `style: ['normal', 'italic']` geladen. Im Seitencode wird keine kursive Darstellung genutzt.
- Beleg: Im mobilen Lighthouse-Netzwerkprotokoll wird `e18f83c737786aa7-s.p.woff2` mit 39.304 Byte Inhalt übertragen. Die erzeugte CSS-Datei ordnet sie Cormorant italic zu. Code-Suche zeigt nur die Fontdeklaration und eine `not-italic`-Adresse. Auf Start- und Premium-Seite gibt es keine kursiv berechneten Elemente. `unused-italic.json`, `lighthouse-home.report.json`.
- Korrektur: Nur den tatsächlich verwendeten normalen Schnitt deklarieren.
- Kundenfrage: nein.
- Einschränkung: Ein explorativer Lauf mit blockierter kursiver Datei verbesserte den Performance-Score nicht deutlich. Die Byte-Einsparung ist bestätigt; eine bestimmte LCP-Verbesserung wird nicht zugesagt.

### TECH-06, niedrig, altes Gestaltungsmuster in der Kontaktbenachrichtigung

- Seite: generierte administrative Kontakt-E-Mail.
- Datei: `server/email.ts:60` und `:69`.
- Problem: Die Vorlage enthält einen Gedankenstrich, farbige Seitenstriche und Radien von 5 beziehungsweise 10 px. Das widerspricht den vorgegebenen globalen Gestaltungsregeln.
- Beleg: Template-Quelltext und beim lokalen Mock aufgezeichnetes HTML in `contact-results.json`.
- Korrektur: Punkt oder Mittelpunkt, umlaufende dünne Kontur, 3 px Radius.
- Kundenfrage: nein.

## Geprüfter Umfang ohne zusätzlichen Befund

- 128 von 128 Sitemapseiten: HTTP 200, korrektes HTML-`lang`, genau eine H1, keine übersprungenen Überschriftenebenen, keine doppelten IDs.
- Eindeutige Titel und Beschreibungen, Beschreibungen innerhalb 110 bis 160 Zeichen, Titel höchstens 70 Zeichen inklusive Marke.
- Selbstreferenzierende Canonicals, fünf vollständige und gegenseitige hreflang-Einträge je Seite inklusive x-default, HTML und Sitemap identisch.
- Open Graph und X-Tags vorhanden, 31 unterschiedliche OG-Motive tatsächlich als 1200 × 630 geprüft.
- JSON-LD parsebar, LocalBusiness überall vorhanden; Artikel-URL, Sprache und Überschrift stimmen. Kein vollständiger externer Schema.org-Validatorlauf in diesem Durchgang.
- Interne Links und Sprungziele sind auf veröffentlichte Seiten beziehungsweise existierende IDs gerichtet.
- Bewusstes `noindex` in Meta und Header auf allen 128 Seiten. Sicherheitsheader stehen im gebauten System, keine unerwartete Drittanbieter-CSS-Verarbeitung in den geprüften API-Pfaden.
- 256 axe-Läufe: ausser TECH-02 keine WCAG- oder Best-Practice-Verletzung, kein horizontaler Überlauf bei 390 px, keine Browser-`pageerror`-Ereignisse. axe führt bildabhängige Kontraste als unvollständig; dieser Lauf ersetzt deshalb keine vollständige visuelle Barrierefreiheitsprüfung.
- Tastatur: Startseiten aller vier Sprachen mit Sprunglink, Leistungsmenü, Gebietsmenü, Escape und Fokus-Rückkehr. Mobilmenü hält Hauptinhalt, Footer und Mobil-CTA inert; nach 60 Tab-Schritten keine Hintergrundformular-Fokussierung. Formular setzt den ersten Fehlerfokus auf die Rollenauswahl, Pfeiltasten wählen die Rolle, FAQ öffnet per Enter. `keyboard-results.json` und `keyboard-visible-focus.json`.
- Lokale Formularfälle: JSON-Fehler, Pflichtfelder, ungültige Rolle, Datenschutzpflicht, ungültige E-Mail, Überlänge, Honeypot, HTML-Escaping, Providerfehler und Sperre beim sechsten Request funktionieren. Ausschliesslich reservierte `example.invalid`-Daten und lokaler Resend-Nachbau.
- Gemeldeter AVIF-Verdacht auf `/ueber-uns` nicht reproduziert: AVIF 1080 px HTTP 200 in 0,139 s, WebP in 0,132 s, neuer Chromium-Kontext bei 1024 px bis Network Idle in 563 ms. Kein bestätigter allgemeiner Optimiererfehler.

## Mobile Lighthouse-Messung

Lighthouse 13.0.1, mobiles Standardprofil, lokaler Produktionsbuild. 17 normale Läufe auf 15 eindeutigen Seiten, darunter alle Seitentypen und alle vier Sprachen. Die Startseite wurde dreimal gemessen. Zusätzlich ein rein explorativer Font-Blockierlauf, der nicht in diese Werte eingeht.

| Messgrösse | Ergebnis |
|---|---|
| Performance | 87 bis 92 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 69, ausschliesslich wegen bewusstem `noindex` |
| LCP, simuliert | 3,38 bis 4,03 s |
| TBT | 3 bis 14 ms |
| CLS | 0 in jedem Lauf |
| Startseite, Performance | 87, 88, 88 |
| Startseite, LCP | rund 3,9 s |

Die mobile LCP bleibt ein Optimierungspunkt. Das sind reproduzierte Labormessungen, keine Core-Web-Vitals-Felddaten. Es gibt aus dieser Prüfung keine Grundlage, einen bestimmten Wert für reale Mobilfunkbesucher zu garantieren. Detailberichte liegen als JSON und HTML im Berichtsordner, Zusammenfassung in `lighthouse-summary.json`.

## Separat geführte Launch-Gates

Diese Punkte stammen aus der Übergabe und den Projektentscheidungen. Sie sind keine mit diesem Audit automatisch aufgehobenen Freigaben:

- Eigene Kundendomain in `NEXT_PUBLIC_SITE_URL`, bisherige Domain mit den vorgesehenen Weiterleitungen.
- Empfänger- und Absenderadresse der Kundin statt der vorläufigen Agenturadresse.
- Alte Google-Unternehmensprofile mit falscher Adresse bereinigen.
- Markenprüfung und `NEW_BRAND` nach dem dafür festgelegten Ablauf.
- Muttersprachliches Lektorat und `SITE_INDEXABLE` erst nach den vorgesehenen Freigaben.

## Hinweis zur Sitemap-Datierung

Die neue Funktion `updatedFor` im Technik-Worktree ordnet Artikel und Rechtstexte ihren vorhandenen Inhaltsdaten zu und ist nachvollziehbar. Der frühere pauschale 28.09. ist aber nicht allein wegen eines sichtbaren Impressumstands vom 26.09. widerlegt: Google berücksichtigt auch wesentliche Änderungen an strukturierten Daten oder Links. Solche globalen Änderungen gab es am 28.09. Deshalb wird dies als Präzisierung und nicht als bestätigter mittlerer SEO-Fehler gewertet. Quelle: [Google zu lastmod](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Wiederholung nach Integration

`axe_bestpractice_pruefen.cjs` ist für eine Übernahme nach `Webseite-Analyse/werkzeuge/` vorbereitet. Es benötigt URL, Pfad zu `axe.min.js` und einen Ausgabeordner. Es baut nicht, sendet keine Formulare und beendet sich bei Verstössen, Überlauf oder Browserfehlern mit Exit 1.

API-Tests vor dem Lauf in einen eigenen Ergebnisordner kopieren: `contact_api_audit.cjs <gebauter-repo-pfad> <freier-port>`. Das Skript startet und beendet selbst einen lokalen Provider-Nachbau sowie einen zweiten Server desselben Builds. Die Baseline-Ergebnisse nicht überschreiben.
