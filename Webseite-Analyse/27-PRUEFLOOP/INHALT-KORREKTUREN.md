# Inhalt Runde 1, Übergabe an Integration

Stand: 29.09.2026. Basis fc6a788. Zweig agent/fix-r1-inhalt.

## Änderungen

3b2519c korrigiert bestätigte Befunde und redaktionelle Präzisierungen in 37 Dateien. Betroffen sind Hero, Kantone, ausgewählte Leistungs-/Premium-Inhalte, Seiten-Inhalte ausser contact, Alttexte und der Premium-Kartenlink. Die Felder Problem, Beleg, Schwere, Fix und Kundenfrage stehen einzeln in befunde-korrekturen.json.

71021cf ergänzt ausschliesslich zwölf Werkzeugdateien: Formularliste beim Unterhalt-Rundgang sowie druckbare Aushänge ohne Standardkopf bei Sonder- und Fensterreinigung, jeweils in vier Sprachen. Voraussetzung ist das neue Werkzeugmodell von Vorlage: ursprünglicher Commit 1164dac, lokal als ad044b9 übernommen. Beim Zusammenführen nicht als zwei unterschiedliche Änderungen zählen.

Die Haftpflichtbehauptung über Schäden war im aktuellen Ausgangsstand bereits entfernt. about.promises war bereits ungerendert. Seine Entfernung beseitigt tote Daten und senkt die Datenmessung; sie wird nicht als Verbesserung eines zuvor sichtbaren Doppeltexts ausgegeben. Persönliche Bearbeitung durch den Geschäftsführer hat mit R5d einen Beleg. Neutrale Formulierungen sind eine redaktionelle Begrenzung während der Übergangsadresse, keine Widerlegung der Kundenangabe.

## Kompatibilität

contact-Block, navigation.ts, common.ts, recht.ts, seo.ts und technische Dateien bleiben unverändert. Kantone nach zusätzlicher Zuweisung durch den Integrator. Der Alttext detail-industrie-hallen setzt das neu erzeugte Bild des Integrators voraus. Keine neuen Preise, Leistungszusagen, Datenfelder oder Launch-Schalter.

## Prüfungen

npm run check, Build und pruefen.sh auf Port 3573 mit LANGUAGES=true NEW_BRAND=true voll: GRÜN. 128 Seiten, 19/19 Weiterleitungen, hreflang auf 128 Seiten. CSP, Konsole, axe, Überlauf bei 390 px und deutsche Reste jeweils 0. Logs: scratchpad/logs/fix-r1-inhalt.

Sichtprüfung in vier Sprachen, fünf Seitentypen bei 1440 und 390 px: keine Überläufe. Premium-Karten zeigen die konkreten Zielbezeichnungen. Bilder und JSON unter sichtpruefung/. Der Bildwechsel Industrie selbst liegt beim Integrator.

Satzmessung doppelungen.py je Sprache komplett. Leistungs-/Premiumseiten DE 2,9 %, EN 3,1 %, FR und IT je 3,7 %. Kantone DE 5,0 %, EN und FR 4,4 %, IT 3,0 %. Übrige Seiten DE 4,8 %, EN 8,1 %, FR 7,2 %, IT 6,4 %. Höchster Vertröstungsanteil je Sprache 0,6 / 2,2 / 2,5 / 3,7 %. Gedankenstriche und ß überall 0. Alle Hero-Kurzsätze höchstens 110 Zeichen. Messdateien liegen daneben. Diese Messung zählt Daten, nicht ausschliesslich gerenderten Hauptinhalt; die globale Satzschablone wird nicht mitgemessen.

Die zweite Markenvariante ist Aufgabe der anschliessenden Integrationsprüfung. Die form-/printHeader-Darstellung braucht den Vorlagenzweig; dessen Darstellung wird dort gesondert geprüft.

## Quellen und offene Punkte

96 Quell-URLs im Inventar, 18 aktuelle Fedlex-Dokumente mit den referenzierten Artikeln plus 63 weitere Abrufe. HTTP200 wurde nicht pauschal als Inhaltserfolg gewertet. WHO, eCFR, Hansgrohe, Meteo und das gescannte Fassadenschreiben sind zusätzlich beim unabhängigen Agenten audit_inhalt anhand lesbarer Primärtexte belegt. Eigenes Inventar, Texte und Abrufprotokolle liegen in quellen-* und fedlex-live-result.json.

Kundenfragen, Fachlektüre und Muttersprachen-Abnahme bleiben in befunde-korrekturen.json gesammelt. Keine Anfragen verschickt. Keine Freigaben erfunden. Nicht gepusht, nicht zusammengeführt.

## Rollback

Vor Integration Zweig nicht übernehmen. Nach Integration kann 3b2519c in einem neuen Korrektur-Commit zurückgenommen werden; 71021cf nur zusammen mit der passenden Vorlagenentscheidung behandeln. Gemeinsamer Ausgangspunkt bleibt fc6a788. Nicht den separat übernommenen Typ-Commit blind zurücknehmen, wenn der Vorlagenzweig denselben Typ bereits nutzt.

## Nachtrag Kostenratgeber

7179d35 präzisiert die Beispielzelle zu Zuschlägen in allen vier Sprachen auf werktags tagsüber. Artikel und Werkzeug zeigen neu den 29.09.2026. Der gemeinsame Gegencheck von audit_inhalt, Integrator und Inhalt ergab eine niedrige Präzisierung, keine belegte falsche Preiszusage. npm run check und git diff --check grün. Erneute Satzmessung für artikel:kosten: DE 3,9 %, EN 7,0 %, FR 7,1 %, IT 7,2 % Doppelungen; innerseitige Wiederholungen, Vertröstungen, Gedankenstriche und ß jeweils 0. Messdateien kosten-doppelungen-* und kosten-messwerte.json liegen daneben. Die volle Prüfkette folgt gemäss Auftrag am integrierten Stand.
