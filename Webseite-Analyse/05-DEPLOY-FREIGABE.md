# Deploy-Freigabe und Relaunch-Sicherheit

**Nachtrag Runde 1 (24.09.2026, 11):** Status unverändert NICHT FREIGABEFÄHIG. Die Umsetzung ist freigegeben (E11), Änderungen an G05, G07, G09, G10 und G14 sind in der Matrix markiert.

**Aktueller Status (24.09.2026, Phase 5): NICHT FREIGABEFÄHIG.** Geprüft wurde der Produktionsstand `d7e1122` auf `bgs-gebaeudeservice.vercel.app` einschliesslich der Anfragestrecke in einer isolierten Testumgebung (N032). 12 der 14 Kriterien sind BEFUND, G10 ist nur geplant, G14 ist offen. Dieses Dokument ist keine Freigabe. Die Matrix gilt unverändert als Abnahmeinstrument für den späteren Umbau.

## 1. Drei getrennte Entscheidungen

**A: Audit-Abschluss.** Der vereinbarte Umfang ist vollständig dokumentiert, auch wenn Probleme oder Prüflücken verbleiben.

**B: Launch-Freigabe.** Alle für den konkreten Launch zwingenden Kriterien sind nachgewiesen. Offene Komfort-/Wachstumsthemen haben Verantwortliche und Termin. Ungeprüfte kritische Pfade sind keine bestandenen Kriterien.

**C: Markterfolg.** Sichtbarkeit, qualifizierte Anfragen und Umsatzentwicklung werden nach dem Launch überprüft. Sie sind keine technischen Deployment-Eigenschaften und nicht vorab garantiert.

**Stand der drei Entscheidungen:** A wird mit Phase 7 möglich, die Prüflücken sind dort ausgewiesen. B: **nein**. 11 Kriterien mit Blocker-Wirkung sind offen (G01–G07, G09–G11, G14), G12 und G13 hängen an Projektentscheidungen, G08 blockiert derzeit nicht (Abschnitt 2). C: erst nach einem Launch messbar, eine Baseline fehlt (GLOBAL-029).

## 2. Verbindliche Freigabematrix ausfüllen

| ID | Kriterium | Geforderter Nachweis | Status | Launch-Blocker? |
|---|---|---|---|---|
| G01 | Richtige Domain, richtiges Projekt und freigegebener Stand | Projekt-/Commit-/Domain-Zuordnung | **BEFUND:** Projekt `bgs-gebaeudeservice` und Stand `d7e1122` sind eindeutig zugeordnet (N001–N003). Eine Launch-Domain gibt es nicht, nur `*.vercel.app`. Ob `bgs-service.ch` übernommen wird, ist offen (R9, GLOBAL-018). Die Framework-Voreinstellung ist „vite“ (N002) | Ja |
| G02 | Reproduzierbarer Produktionsbuild und notwendige CI-Prüfungen | Sichere Build-/Testprotokolle ohne unterdrückte Fehler | **BEFUND:** `npm ci` scheitert (Lockfile), keine ESLint-Konfiguration, keine Tests, keine CI (GLOBAL-007, N005). Build und Typecheck laufen | Ja |
| G03 | Alle vereinbarten Inhaltsrouten funktionieren | URL-Inventar, HTTP-/Renderprüfung und Navigationsprüfung | **BEFUND:** Alle 32 Routen liefern 200 (N007). 7 defekte Links (GLOBAL-016), React-Fehler #418 auf allen Seiten (GLOBAL-013). Das Mega-Menü ist per Tastatur nicht bedienbar (N031). Die Leistungsübersicht fehlt (P02) | Ja |
| G04 | Marketingseiten nicht versehentlich blockiert | Robots-/Header-/Canonical-/Sitemap-Abgleich | **BEFUND:** `robots.txt` erlaubt alles, Sitemap = Routen (BESTANDEN). Kein Canonical, identische Metadaten, Verifizierungs-Platzhalter, widersprüchliche robots-Tags auf 404 (GLOBAL-010, -015). Die Indexierungsstrategie der Vorab-Adresse ist ungeklärt (GLOBAL-018) | Ja |
| G05 | Haupt-Conversion-Strecke funktioniert | Freigegebener End-to-End-Test bis Testempfänger/CRM | **BEFUND:** Das Formular meldet Erfolg ohne Zustellung (Testumgebung, N032). Empfänger ist die Agentur, die Absenderdomain ist nicht eingerichtet (GLOBAL-003). Der Terminweg über den Chat fällt aus (GLOBAL-002). Ein Test bis ins Kundenpostfach ist NICHT PRÜFBAR (keine Produktionsdaten) **Runde 1 (11):** Vorläufiger Empfänger `admin@brandea.de` über Resend mit Absender unter `brandea.de` (E15). Launch-Kriterium bleibt die Testanfrage bis ins Kundenpostfach mit verifizierter Kundendomain (M58). Chat bleibt und wird repariert (E14). | Ja |
| G06 | Kein bekanntes kritisches Sicherheits-/Datenleck | Scope-gerechte Sicherheitsprüfung und offene Risiken | **BEFUND:** Next.js mit kritischen Meldungen (GLOBAL-001), möglicherweise Schlüssel in öffentlichen Dokumenten (GLOBAL-035, Inhalt nicht eingesehen), kein Missbrauchsschutz der API (GLOBAL-004). Keine Exploit-Tests durchgeführt | Ja |
| G07 | Anbieterinformationen und Datenverarbeitung geklärt | Verantwortliche Fachfreigabe, technische Consent-Prüfung | **BEFUND:** Impressum nennt einen Namen, der nicht zur UID gehört (SEITE-P11-001). Die Datenschutzerklärung beschreibt eine andere Verarbeitung als die tatsächliche (GLOBAL-027). Google-Dienste laden ohne Einwilligung (GLOBAL-019, N034). Keine Rechtsprüfung (B07) **Runde 1 (11):** Vertretung bestätigt (R7a), Impressum nennt die eingetragene Firma (Art. 954a OR, S43). Rechtstexte schreibt Brandea ohne fachliche Prüfung. Das Restrisiko ist von Brandea akzeptiert (E22) und wird im Freigabevermerk geführt. Die Karte lädt nach Klick (E20). | Ja |
| G08 | Zentrale mobile und barrierefreie Bedienung möglich | Manuelle Navigation-/Formular-/Fokusprüfung | **BEFUND, Kernpfad nicht blockiert:** Formular per Tastatur bedienbar, Fokus sichtbar, kein Umbruchproblem (N031, N036). Mängel: Kontrast, Zielgrössen, Menü, Statusmeldungen (GLOBAL-026, SEITE-P10-002). Screenreader-Stichprobe NICHT PRÜFBAR | Nein (solange der Kernpfad bedienbar bleibt) |
| G09 | Keine unfreigegebenen Claims, Fake-Referenzen oder Platzhalter | Redaktioneller und unternehmerischer Freigabevermerk | **BEFUND:** Kein Beleg für die Behauptungen im Nachweisregister, ISO durch das eigene Impressum widerlegt. Kundenstimmen vermutlich erfunden, KI-Bilder als Team und Referenz, Platzhalter im Code (GLOBAL-015, -021, -022, -023, 34 Seitenbefunde) **Runde 1 (11):** Belegregel E18. Keine Stimmen, keine Referenzen, kein ISO, keine Preise, Bilder als Platzhalter (E19). | Ja |
| G10 | Relaunch verliert keine URLs ohne Entscheidung | Vollständiges Alt-neu-Mapping oder belegte URL-Beibehaltung | **Geplant, nicht umgesetzt:** Alt-neu-Mapping für alle 32 URLs und die bekannten Kunden-URLs (03, 2b). Der Altbestand der Kunden-Website ist unvollständig erfasst, weil kein Zugang besteht (R9, R11) **Runde 1 (11):** Mapping v2 (03, 2b). Beim DNS-Umzug die E-Mail-Einträge übernehmen (M58). | Ja |
| G11 | Wiederherstellung und Zuständigkeit vorhanden | Rückfallplan, erreichbare Verantwortliche, gesicherter Stand | **BEFUND:** Frühere Produktions-Deployments existieren bei Vercel, das spricht für eine mögliche Rücknahme (N003, [S31]). Es gibt aber keinen dokumentierten Rückfallplan und keine benannte Zuständigkeit (R12). Plan siehe Abschnitt 6 | Ja |
| G12 | Performance vertretbar und regressionsgeprüft | Laborberichte, vorhandene Felddaten, dokumentierte Budgets | **BEFUND (Labor):** mobiler LCP 4,4–8,5 s (N030), keine Felddaten. Budgets vorgeschlagen (01, I), nicht bestätigt | Nach vereinbartem Risiko |
| G13 | Messung und Fehlerbeobachtung vorbereitet | Event-/Monitoring-Probe ohne personenbezogene Testdaten | **BEFUND:** keine Messung, keine Fehlerüberwachung. Der Chat-Ausfall blieb unbemerkt (GLOBAL-029, N012) | Nach Projektentscheidung. Empfehlung: mindestens Fehleralarm für die Anfragewege als Blocker |
| G14 | Freigabe durch benannte Person | Name/Rolle, Datum und freigegebener Umfang | **Runde 1 (11):** Rolle benannt: Brandea (Projektleitung) gibt den Launch frei (R12b, E23). Datum und Umfang folgen beim Launch | Ja |

Diese Matrix ist unser Projektvorschlag. Einzelne optionale Fähigkeiten dürfen als „nicht anwendbar“ dokumentiert werden. Kernfunktionen nicht ohne ausdrückliche Risikoentscheidung aus dem Umfang entfernen.

**Zuordnung der Maßnahmen (06):** G01 → M08, M20 · G02 → M05 · G03 → M18, M20, M24, M27 · G04 → M08, M16, M17 · G05 → M03, M04 · G06 → M01, M02, M07 · G07 → M10, M14, M15, M50, M51 · G08 → M27 · G09 → M11, M12, M13, M17 · G10 → M20 · G11 → Abschnitt 6 · G12 → M25 · G13 → M32 · G14 → R12.

## 3. Technische und funktionale Endprüfung

- [x] Alle zwölf erwarteten Seiten mit dem tatsächlichen Bestand abgeglichen; zusätzliche Routen berücksichtigt. → *Erledigt (02): 11 von 12 erwarteten Seiten vorhanden, die Leistungsübersicht fehlt. 18 Leistungsseiten statt 5, zusätzlich Referenzen und Blog.*
- [x] Wichtige Links, Buttons, Kontaktwege und mobil zugängliche Menüs geprüft. → *BEFUND: 7 defekte Links, Chat-Buttons ins Leere, Mobil-Menü ohne Namen (GLOBAL-002, -016, -026).*
- [x] Keine kritischen Laufzeitfehler oder vollständig ausgefallenen Ressourcen auf Kernseiten. → *BEFUND: React-Fehler #418 auf allen Seiten, Chat-API ausgefallen, Karte defekt (GLOBAL-002, -013, -019).*
- [x] Fehlerseiten und Formularfehler sind verständlich; Nutzer verlieren nicht unnötig ihre Eingaben. → *Teilweise: Die 404-Seite funktioniert. BEFUND: Ein Versandfehler wird nie angezeigt, weil der Server immer Erfolg meldet. Nach dem Senden wird das Formular geleert (GLOBAL-003, SEITE-P10-002).*
- [x] Produktionsdomains öffentlich zugänglich, Preview-/Staging-Umgebungen angemessen geschützt. Vercel-Einstellungen projektbezogen prüfen. [S30] → *BESTANDEN für den Schutz: Previews per Vercel Authentication (N002, N035). BEFUND: Previews nutzen die Produktionsschlüssel, jeder Branch-Push erzeugt ein Deployment (GLOBAL-005, N035).*
- [x] Sensitive Inhalte sind durch echte Zugriffskontrolle geschützt, nicht nur durch Verstecken im Menü. → *Keine internen Bereiche vorhanden: NICHT ANWENDBAR. BEFUND: mögliche Schlüssel in öffentlichen Projektdokumenten (GLOBAL-035).*
- [x] Bildrechte, Logo-Freigabe, Schriftlizenz und freigegebene Unternehmensbehauptungen dokumentiert. → *BEFUND: Bildrechte und Logo-Freigabe nicht dokumentiert, KI-Bilder (GLOBAL-023). Schrift Inter ist selbst gehostet (Open Font License, BESTANDEN). Keine Behauptung freigegeben (GLOBAL-021).*
- [x] Kontaktprozess ist personell betreut. Ein funktionierendes Formular ohne verantwortlichen Empfänger ist kein abgeschlossener Geschäftsprozess. → *BEFUND: Anfragen gehen an die Agentur, die Zuständigkeit beim Kunden ist unbekannt (R5).*

Technische Grundlagen aus Next.js-Produktion und Anwendungssicherheit heranziehen; die tatsächliche Laufzeit und Funktionen sind maßgeblich. [S23][S28][S29]

## 4. SEO-Relaunch-Prüfung

- [x] Bestehende wichtige URLs, Rankings, Links und Anfragen vor Umbau sichern, soweit Daten zugänglich sind. → *URLs gesichert (02). Rankings, Links und Anfragedaten NICHT PRÜFBAR (R11). Die Kunden-Website ist nur teilweise erfasst (N014, N038).*
- [x] Gute URLs nach Möglichkeit beibehalten; „from scratch“ bedeutet nicht „alle URL-Signale wegwerfen“. → *Geprüft: Die heutigen Pfade mit Preisstufen-Präfixen sollen vor dem Launch in die Zielstruktur wechseln, jede mit 308. Kontakt, Über uns, Impressum, Datenschutz und Blog bleiben (03, 2b).*
- [x] Für jede entfallende oder geänderte URL passende Zielseite beziehungsweise begründeten Fehlerstatus definieren. → *Erledigt (03, 2b; 02, Empfehlung je URL).*
- [x] Permanente Weiterleitungen ohne Schleifen und unnötige Ketten planen; keine Sammelumleitung aller alten Seiten auf die Homepage. → *Geplant, direkte 308 ohne Ketten, keine Weiterleitung auf die Startseite. Abnahme nach Umsetzung: jede alte URL mit genau einem Sprung.*
- [x] Interne Links, Canonicals, Sitemap und gegebenenfalls Sprachzuordnungen auf den neuen Stand abstimmen. → *Vorgabe in M16, M17, M20. Sprachzuordnung NICHT ANWENDBAR (nur Deutsch).*
- [ ] Wichtige alte und neue Pfade auf Produktion vor und nach dem Relaunch gezielt prüfen. → *Offen bis zur Umsetzung. Prüfliste: alle Zeilen aus 03, 2b.*
- [x] Bei tatsächlichem Domainwechsel auch Hostvarianten, Search-Console-Eigenschaften und passende Migrationsschritte berücksichtigen. → *Bedingt (R9): Wechselt die Seite auf `bgs-service.ch`, braucht es die Hostvarianten mit und ohne `www`, eine Search-Console-Property und Weiterleitungen für alle alten Wix-URLs [S07].*
- [ ] Redirects nicht kurz nach dem Launch wieder entfernen; entsprechend Googles Migrationsleitfaden langfristig einplanen. → *Offen bis zur Umsetzung. Vorgabe: Weiterleitungen dauerhaft, mindestens ein Jahr.*
- [x] Vorübergehende Schwankungen als Migrationsrisiko dokumentieren, nicht sofort als Beweis einer einzelnen Designentscheidung interpretieren. → *Dokumentiert (03, Prüfverfahren: Neuindexierung, Saison).*

Begründung und Vorgehen: [S07]. Canonical-Signale müssen zum Inhalt und zur beabsichtigten URL passen. [S05]

## 5. Performance-Freigabe ohne Score-Theater

LCP ≤ 2,5 s, INP ≤ 200 ms und CLS ≤ 0,1 am 75. Perzentil sind die dokumentierten guten CWV-Schwellen. Vor dem Launch fehlen bei neuen Seiten oft Feldmessungen; dann Laborprüfung und Monitoringplan ausweisen, nicht „Feldwerte bestanden“ behaupten. [S18]

**Projektentscheidung dokumentieren:** Welche konkreten Labor-/Performance-Budgets gelten als Launch-Kriterium, welche Abweichung wird begründet akzeptiert und wer übernimmt Nacharbeit? Ein Lighthouse-Gesamtscore allein entscheidet nicht über Geschäftsfähigkeit oder Ranking. [S35][S37]

**Vorschlag (zur Entscheidung durch die verantwortliche Person, G14):** Als Launch-Kriterium gelten die Laborbudgets aus 01, Abschnitt I: mobiler LCP ≤ 2,5 s und TBT ≤ 200 ms im Median aus 3 Läufen auf Startseite, Kontakt und einer Leistungsseite, CLS ≤ 0,1, keine Drittanbieter-Anfrage vor Einwilligung. Abweichungen bis LCP 3,0 s sind mit dokumentierter Nacharbeit innerhalb von 30 Tagen akzeptabel. **Heute nicht erfüllt** (N030). Felddaten werden nach dem Launch beobachtet, erst dann gilt das 75. Perzentil.

## 6. Rückfallplan

- [x] Letzten funktionierenden Stand, Domain-/Routing-Konfiguration und relevante Betriebsinformationen sichern. → *Plan: Vor dem Launch den Deployment-Stand (ID, Commit), die Domain- und DNS-Einträge (auch MX, SPF, DKIM von `bgs-service.ch`) und die Umgebungsvariablen-Namen dokumentieren. Heute gesichert: Stand `d7e1122`, Deployment-ID (N003), Variablennamen (N011).*
- [ ] Verantwortliche Person und klaren Kommunikationsweg festlegen. → *Offen (R12).*
- [x] Auslöser für Rücknahme definieren: zum Beispiel ausgefallene Hauptanfragen, sensible Daten offengelegt oder kritische Produktionsfehler. → *Vorschlag: (1) Eine Testanfrage kommt nicht innerhalb von 15 Minuten beim Kunden an. (2) Sensible Daten oder Schlüssel sind öffentlich. (3) Eine Kernseite liefert 5xx oder zeigt keinen Inhalt. (4) Weiterleitungen führen in Schleifen oder auf 404.*
- [x] Vercel-Rollback auf tatsächliche Projekt-/Tarifmöglichkeiten prüfen. Ein Code-Rollback macht nicht automatisch externe E-Mails, CRM-Schreibvorgänge oder Datenbankänderungen rückgängig. [S31] → *Teilweise: Frühere Deployments existieren (N003, N035). Welche Rollback-Funktion der Tarif erlaubt, ist nicht geprüft (nur lesender Zugriff). Bei einem Domainwechsel betrifft eine Rücknahme auch DNS und Weiterleitungen, das braucht einen eigenen Plan.*
- [x] Im Analysemodus nur den Plan erstellen; keinen Rollback und kein Testdeployment selbst auslösen. → *Eingehalten für Rollback und manuelle Deployments. Abweichung: Die Git-Anbindung hat bei jedem Push dieses Audits automatisch ein geschütztes Preview gebaut (N035). Der Nutzer hat das nachträglich akzeptiert (E10).*

## 7. Nach dem Launch: kontrollierte Aufgaben, noch keine Ausführung

| Zeitraum ab tatsächlichem Launch | Rolle | Aufgabe | Mess-/Abnahmekriterium |
|---|---|---|---|
| Tag 0–2 | Entwicklung/QA | Produktion, wichtige alte URLs, Kontaktweg und Fehlermonitoring prüfen | Kritische Pfade nachweislich funktionsfähig; unerwartete Blockaden priorisiert |
| Tag 3–14 | SEO/Redaktion | Indexierungsverlauf, Suchintentionen, Inhaltsfehler und erste Nutzerprobleme prüfen | Alle relevanten URLs mit dokumentiertem Status; Ursachen statt bloßer Symptome bearbeitet |
| Tag 15–30 | Marketing/Vertrieb | Anfragequalität und tatsächliche Einwände auswerten | Leads korrekt zugeordnet; unqualifizierte/spamartige Anfragen getrennt |
| Tag 31–90 | Geschäftsführung/Marketing | Differenzierungsinhalte und gezielte Tests priorisieren | Entwicklung qualifizierter Anfragen und Themencluster gegenüber belastbarer Baseline |

Keine vorab erfundenen Conversion-Steigerungen oder Top-10-Fristen einsetzen. Ziele erst mit Baseline, Markt, verfügbarem Budget und erwartbarem Traffic festlegen.

**Für BGS konkret:** Tag 0–2 zusätzlich eine Testanfrage bis ins Kundenpostfach und die Weiterleitungen aus 03, 2b prüfen. Tag 3–14: Search Console auf wechselnde Ziel-URLs der Konflikte K01–K13 beobachten. Tag 31–90: erste Winter- bzw. Sommersaison für Winterdienst und Grünflächenpflege getrennt auswerten.

## 8. Freigabevermerk

**Ergebnis:** NICHT FREIGABEFÄHIG.  
**Geprüfter Stand:** `main` @ `d7e1122`, Produktion `bgs-gebaeudeservice.vercel.app` (Deployment `dpl_AFEpgW5gYCAPGcVdWH5NMn1xiPxo`), geprüft am 24.09.2026.  
**Offene Launch-Blocker:** G01–G07, G09–G11, G14. Die zugehörigen Befunde sind in 06 als Maßnahmen geführt, P0: M01–M04.  
**Ungeprüfte kritische Bereiche:** Zustellung in Produktion bis ins Kundenpostfach, Inhalt der möglichen Schlüssel in `DEPLOYMENT.md`/`EMAIL_SETUP.md` (R1), Rechtsprüfung, Screenreader, Felddaten, Search Console, Google-Unternehmensprofil, Google.ch-Suchergebnisse.  
**Akzeptierte Restrisiken:** Rechtstexte ohne fachliche Prüfung, akzeptiert von Brandea am 24.09.2026 (E22). Weitere keine.  
**Freigabe durch / Datum:** Brandea (Projektleitung), beim Launch (R12b). Noch nicht erteilt.

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S05, S07, S18, S23, S28, S29, S30, S31, S35, S37).
