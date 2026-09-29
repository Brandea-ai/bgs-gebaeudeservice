# BGS Welle 3, Einheit Kontakt

Stand: 29.09.2026. Branch `agent/fix-r1-kontakt`, Commit `dd6f3317001b28ee39a48e87407239805af0dd98`.
Arbeitskopie: `.worktrees/fix-r1-kontakt-20260928`. Commit erstellt, kein Push oder Merge. Autor-Einstellung unverändert `info@brandea.de`.

## Änderungen und bestätigte Befunde

- `client/src/components/SwissFooter.tsx`: Kontaktkanäle dürfen beim Scrollen nicht über die Formularzeile hinaus kleben. Bestätigter UX-P1: zuvor Überlagerung mit «So geht es weiter». Der klebende Inhalt liegt jetzt innerhalb einer eigenen Grid-Zelle. Unterhalt und Yacht halten bei 1024, 1100, 1279, 1440 und 1920 px durchgehend mindestens 40 px Abstand zur Folgezeile. Kontakt selbst endet ebenfalls innerhalb seines Bereichs.
- `SwissFooter.tsx`: vier native, mit Tastatur bedienbare Linkgruppen unter 640 px. Darüber stehen die Links weiterhin offen. Mobile Links mindestens 44 px hoch. Gemessener Footer bei 390 px: 1599,6 auf 964,4 px, beide Messungen im Mantena-Modus. Der gleiche Inhalt bleibt erreichbar.
- `client/src/components/ContactForm.tsx` und `content/{de,en,fr,it}/navigation.ts`: Beispiele folgen der ausgewählten Leistung. Grund-/Sonderreinigung, Umzugsreinigung und Baureinigung fragen über das Anliegen nach dem Reinigungs- oder Übergabetermin, statt einen Wochenrhythmus vorauszusetzen. Beim Leistungswechsel bleiben keine unpassenden Rhythmuswerte zurück. Es wird keine neue Datenkategorie eingeführt und kein einmaliger Einsatz zwangsweise behauptet.
- Premium-Kontaktbereich mit passendem Abstimmungsschritt statt allgemeiner kostenloser Objektbesichtigung. Keine neue Leistungszusage. Die Premium-Platzhalter waren im Basisstand bereits vorhanden; der pauschale Altbefund «Anzahl Wohnungen auf jeder Premium-Seite» war im aktuellen Stand damit widerlegt. Die Auswahl einer anderen Premium-Leistung aktualisiert die Beispiele jetzt ebenfalls.
- `content/*/navigation.ts`: rechtlicher Sitz aus `company.seat`, also Emmen LU. Die Postadresse bleibt Tannhof 10, 6020 Emmenbrücke. Die Antwortzeit steht nicht zusätzlich im Kopf und nach dem erfolgreichen Absenden; der Kontaktbereich nennt sie weiterhin einmal.
- `content/*/seiten.ts`, ausschliesslich Block `contact`: neutrale Rückmeldung statt Behauptung, der Geschäftsführer lese die Anfrage selbst. Hinweis auf Termin oder Anlass bei Einzelaufträgen; Geschäftsadresse und rechtlicher Sitz sauber unterschieden.
- `server/email.ts`, TECH-01: Provider-HTTP-200 reicht nicht mehr. Erfolg setzt eine nichtleere Zeichenkette in `data.id` voraus. Fehlende, null, leere und numerische IDs führen zu 503. Das Log bezeichnet die Antwort als Anbieterannahme, nicht als Zustellnachweis.
- `app/api/contact/route.ts`, TECH-04: maximal fünf Zeitstempel je IP und 10.000 aktive IP-Einträge. Abgewiesene Anfragen vergrössern das Array nicht und verlängern die Aufbewahrung nicht. Ein unref-Timer löscht inaktive IPs; nach suspendierter Serverless-Laufzeit bereinigt die nächste Anfrage auch fremde abgelaufene Einträge. Das vorhandene Limit von fünf Anfragen in zehn Minuten bleibt.
- `server/email.ts`: administratives Mailtemplate mit Punkt statt Gedankenstrich, umlaufenden Konturen statt Seitenstrich und 3 px Ecken.

## Datenschutz und unveränderte Grenzen

`content/{de,en,fr,it}/recht.ts` war schon vollständig für die aktuellen Datenfelder: Rolle, Grösse, Nachricht und freiwillige Zusatzangaben. Ebenso nennt jede Fassung die aktivierbare Google-Karte auf Kontakt und Einzugsgebiet. Quellcode und Browser-Verhalten wurden abgeglichen; keine Änderung oder zusätzliche Rechtszusage nötig. Der Browser-Test bestätigt für beide Kartenseiten: kein Google-Request vor dem Klick. Google-Aufrufe wurden für den Test lokal abgefangen.

Die Kontaktformular-Aufteilung zwischen 1024 und 1279 px bleibt absichtlich einspaltig, damit Felder und Beispiele lesbar sind. MobileCta blendet sich beim Formular und beim Footer aus, im Browser geprüft. Die sichtbare Adresse bleibt gemäss E31 `admin@brandea.de`; keine Umstellung und kein echter Versand. Fragen zur Haftpflichtdeckung sind weiterhin nicht durch unbelegte Zusagen beantwortet.

## Nachweise

- `logs/fix-r1-kontakt-final/`: finale vollständige Prüfkette mit `LANGUAGES=true NEW_BRAND=true` grün. 128 Seiten, 19/19 Weiterleitungen, 128 interne Ziele, 128 hreflang-Prüfungen, 0 CSP-Verstösse, 0 Konsolenfehler, 0 axe-Verstösse, 0 Überläufe bei 390 px, 0 deutsche Reste.
- `logs/fix-r1-kontakt-alt/`: vollständige Prüfkette mit `NEW_BRAND=false` ebenfalls grün. Enthält den finalen Formular-/Footer-/Textstand; die nachfolgenden API-Speicher- und Mailstilkorrekturen sind im finalen Mantena-Lauf und den spezifischen Tests geprüft. Integrierten Endstand wie vorgesehen nochmals in beiden Modi prüfen.
- `welle3/kontakt/final-api/contact-results.json`: 21/21 Fälle erfolgreich. Pflichtfelder, ungültige Rolle, Datenschutz, E-Mail-Format, Länge, Honeypot, gültiger Provider-Erfolg, HTML-Escaping, Mailstil, vier ungültige Provider-Antworten, Provider-Fehler und Rate-Limit. Kein echter Anbieteraufruf, ausschliesslich lokaler Mock, Fake-Key und `example.invalid`.
- `welle3/kontakt/final-rate/rate-limit-results.json`: 5/5 Fake-Clock-Fälle erfolgreich. 1001 abgewiesene Wiederholungen ohne Wachstum/TTL-Verlängerung, Ablauf ohne Folgeanfrage, gleitendes Zeitfenster, simulierte 24-Stunden-Suspendierung, 10.000-IP-Cap mit Erholung nach Ablauf.
- `welle3/kontakt/contact-ui-results.json`: 27/27 Browser-Fälle erfolgreich. Alle vier Sprachen; Pflichtfeldfokus, dynamische Beispiele, isolierter Submit, Erfolgs-/Fehlerfokus, Eingabeerhalt nach Fehler, Premium-Texte, Footer-Tastatur, Mobil-Leiste, Desktop-Links, beide Karten und 15 Scroll-/Breitenkombinationen. Der Test wartet auf den tatsächlichen Fokuswechsel nach requestAnimationFrame.
- `welle3/kontakt/doppelungen-de.json`: Kontakt 5,7 % doppelte Sätze, 0 innerseitige Wiederholungen, 0 Vertröstungen, 0 Gedankenstriche, 0 ß. Drei verbleibende gemeinsame Sätze sind Antwortzeit, Frage nach umweltfreundlichen Mitteln und Sprachliste.
- Sichtprüfung: `footer-vorher.png`, `footer-nachher.png`, `footer-mobile-viewport.png`, `unterhalt-footer-1440-fixed.png`, `umzug-fields-390-fixed.png`, `final-api/contact-email-preview.png`. Die erste lange Elementaufnahme enthält die schwebende Navigation; die gesonderte Viewport-Aufnahme und IntersectionObserver-Abfrage bestätigen das korrekte Ausblenden der Mobil-Leiste.
- `git diff --check` und TypeScript grün. React-Qualitätsprüfung: keine bedingten Hooks, native Tastaturbedienung, stabiler Pflichtfeldfokus, keine neuen Abhängigkeiten. Playwright aus dem vorgegebenen Tools-Ordner verwendet; `agent-browser` war nicht installiert.

## Reproduzierbare Regressionen im Repo

```bash
node Webseite-Analyse/werkzeuge/kontakt_api_pruefen.cjs "$PWD" 0 /tmp/bgs-kontakt-api
node Webseite-Analyse/werkzeuge/kontakt_rate_limit_pruefen.cjs "$PWD" /tmp/bgs-kontakt-rate
NODE_PATH=<scratchpad>/tools/node_modules node Webseite-Analyse/werkzeuge/kontakt_browser_pruefen.cjs http://127.0.0.1:PORT /tmp/bgs-kontakt-browser
```

Der API-Test startet einen eigenen Next-Prozess mit Fake-Konfiguration und einen lokalen Resend-Nachbau. Ein belegter Port führt zum Abbruch vor dem ersten API-POST; das Ready-Signal muss vom eigenen Kindprozess kommen. Port 0 wählt einen freien Port. Ausgaben liegen im angegebenen Ordner oder in einem neuen temporären Ordner. Testfehler geben einen Exitcode ungleich 0 zurück. Der Browser-Test fängt Formular-POSTs und Google-Aufrufe ab und akzeptiert ausschliesslich localhost/127.0.0.1.

Rollback der Einheit: den integrierten Kontakt-Commit beziehungsweise dessen Merge zurücknehmen. Keine Datenmigration, keine neuen Umgebungsvariablen oder externen Kontenänderungen.
