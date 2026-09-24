# Deploy-Freigabe und Relaunch-Sicherheit

**Aktueller Status: NICHT BEURTEILBAR.** Es wurden noch keine Zielwebsite und keine produktive Lead-Strecke geprüft. Dieses Dokument enthält die vorgeschlagenen Abnahmekriterien, keine Freigabe.

## 1. Drei getrennte Entscheidungen

**A: Audit-Abschluss.** Der vereinbarte Umfang ist vollständig dokumentiert, auch wenn Probleme oder Prüflücken verbleiben.

**B: Launch-Freigabe.** Alle für den konkreten Launch zwingenden Kriterien sind nachgewiesen. Offene Komfort-/Wachstumsthemen haben Verantwortliche und Termin. Ungeprüfte kritische Pfade sind keine bestandenen Kriterien.

**C: Markterfolg.** Sichtbarkeit, qualifizierte Anfragen und Umsatzentwicklung werden nach dem Launch überprüft. Sie sind keine technischen Deployment-Eigenschaften und nicht vorab garantiert.

## 2. Verbindliche Freigabematrix ausfüllen

| ID | Kriterium | Geforderter Nachweis | Status | Launch-Blocker? |
|---|---|---|---|---|
| G01 | Richtige Domain, richtiges Projekt und freigegebener Stand | Projekt-/Commit-/Domain-Zuordnung | NICHT GEPRÜFT | Ja |
| G02 | Reproduzierbarer Produktionsbuild und notwendige CI-Prüfungen | Sichere Build-/Testprotokolle ohne unterdrückte Fehler | NICHT GEPRÜFT | Ja |
| G03 | Alle vereinbarten Inhaltsrouten funktionieren | URL-Inventar, HTTP-/Renderprüfung und Navigationsprüfung | NICHT GEPRÜFT | Ja |
| G04 | Marketingseiten nicht versehentlich blockiert | Robots-/Header-/Canonical-/Sitemap-Abgleich | NICHT GEPRÜFT | Ja |
| G05 | Haupt-Conversion-Strecke funktioniert | Freigegebener End-to-End-Test bis Testempfänger/CRM | NICHT GEPRÜFT | Ja |
| G06 | Kein bekanntes kritisches Sicherheits-/Datenleck | Scope-gerechte Sicherheitsprüfung und offene Risiken | NICHT GEPRÜFT | Ja |
| G07 | Anbieterinformationen und Datenverarbeitung geklärt | Verantwortliche Fachfreigabe, technische Consent-Prüfung | NICHT GEPRÜFT | Ja |
| G08 | Zentrale mobile und barrierefreie Bedienung möglich | Manuelle Navigation-/Formular-/Fokusprüfung | NICHT GEPRÜFT | Ja bei blockiertem Kernpfad |
| G09 | Keine unfreigegebenen Claims, Fake-Referenzen oder Platzhalter | Redaktioneller und unternehmerischer Freigabevermerk | NICHT GEPRÜFT | Ja |
| G10 | Relaunch verliert keine URLs ohne Entscheidung | Vollständiges Alt-neu-Mapping oder belegte URL-Beibehaltung | NICHT GEPRÜFT | Ja |
| G11 | Wiederherstellung und Zuständigkeit vorhanden | Rückfallplan, erreichbare Verantwortliche, gesicherter Stand | NICHT GEPRÜFT | Ja |
| G12 | Performance vertretbar und regressionsgeprüft | Laborberichte, vorhandene Felddaten, dokumentierte Budgets | NICHT GEPRÜFT | Nach vereinbartem Risiko |
| G13 | Messung und Fehlerbeobachtung vorbereitet | Event-/Monitoring-Probe ohne personenbezogene Testdaten | NICHT GEPRÜFT | Nach Projektentscheidung |
| G14 | Freigabe durch benannte Person | Name/Rolle, Datum und freigegebener Umfang | NICHT GEPRÜFT | Ja |

Diese Matrix ist unser Projektvorschlag. Einzelne optionale Fähigkeiten dürfen als „nicht anwendbar“ dokumentiert werden. Kernfunktionen nicht ohne ausdrückliche Risikoentscheidung aus dem Umfang entfernen.

## 3. Technische und funktionale Endprüfung

- [ ] Alle zwölf erwarteten Seiten mit dem tatsächlichen Bestand abgeglichen; zusätzliche Routen berücksichtigt.
- [ ] Wichtige Links, Buttons, Kontaktwege und mobil zugängliche Menüs geprüft.
- [ ] Keine kritischen Laufzeitfehler oder vollständig ausgefallenen Ressourcen auf Kernseiten.
- [ ] Fehlerseiten und Formularfehler sind verständlich; Nutzer verlieren nicht unnötig ihre Eingaben.
- [ ] Produktionsdomains öffentlich zugänglich, Preview-/Staging-Umgebungen angemessen geschützt. Vercel-Einstellungen projektbezogen prüfen. [S30]
- [ ] Sensitive Inhalte sind durch echte Zugriffskontrolle geschützt, nicht nur durch Verstecken im Menü.
- [ ] Bildrechte, Logo-Freigabe, Schriftlizenz und freigegebene Unternehmensbehauptungen dokumentiert.
- [ ] Kontaktprozess ist personell betreut. Ein funktionierendes Formular ohne verantwortlichen Empfänger ist kein abgeschlossener Geschäftsprozess.

Technische Grundlagen aus Next.js-Produktion und Anwendungssicherheit heranziehen; die tatsächliche Laufzeit und Funktionen sind maßgeblich. [S23][S28][S29]

## 4. SEO-Relaunch-Prüfung

- [ ] Bestehende wichtige URLs, Rankings, Links und Anfragen vor Umbau sichern, soweit Daten zugänglich sind.
- [ ] Gute URLs nach Möglichkeit beibehalten; „from scratch“ bedeutet nicht „alle URL-Signale wegwerfen“.
- [ ] Für jede entfallende oder geänderte URL passende Zielseite beziehungsweise begründeten Fehlerstatus definieren.
- [ ] Permanente Weiterleitungen ohne Schleifen und unnötige Ketten planen; keine Sammelumleitung aller alten Seiten auf die Homepage.
- [ ] Interne Links, Canonicals, Sitemap und gegebenenfalls Sprachzuordnungen auf den neuen Stand abstimmen.
- [ ] Wichtige alte und neue Pfade auf Produktion vor und nach dem Relaunch gezielt prüfen.
- [ ] Bei tatsächlichem Domainwechsel auch Hostvarianten, Search-Console-Eigenschaften und passende Migrationsschritte berücksichtigen.
- [ ] Redirects nicht kurz nach dem Launch wieder entfernen; entsprechend Googles Migrationsleitfaden langfristig einplanen.
- [ ] Vorübergehende Schwankungen als Migrationsrisiko dokumentieren, nicht sofort als Beweis einer einzelnen Designentscheidung interpretieren.

Begründung und Vorgehen: [S07]. Canonical-Signale müssen zum Inhalt und zur beabsichtigten URL passen. [S05]

## 5. Performance-Freigabe ohne Score-Theater

LCP ≤ 2,5 s, INP ≤ 200 ms und CLS ≤ 0,1 am 75. Perzentil sind die dokumentierten guten CWV-Schwellen. Vor dem Launch fehlen bei neuen Seiten oft Feldmessungen; dann Laborprüfung und Monitoringplan ausweisen, nicht „Feldwerte bestanden“ behaupten. [S18]

**Projektentscheidung dokumentieren:** Welche konkreten Labor-/Performance-Budgets gelten als Launch-Kriterium, welche Abweichung wird begründet akzeptiert und wer übernimmt Nacharbeit? Ein Lighthouse-Gesamtscore allein entscheidet nicht über Geschäftsfähigkeit oder Ranking. [S35][S37]

## 6. Rückfallplan

- [ ] Letzten funktionierenden Stand, Domain-/Routing-Konfiguration und relevante Betriebsinformationen sichern.
- [ ] Verantwortliche Person und klaren Kommunikationsweg festlegen.
- [ ] Auslöser für Rücknahme definieren: zum Beispiel ausgefallene Hauptanfragen, sensible Daten offengelegt oder kritische Produktionsfehler.
- [ ] Vercel-Rollback auf tatsächliche Projekt-/Tarifmöglichkeiten prüfen. Ein Code-Rollback macht nicht automatisch externe E-Mails, CRM-Schreibvorgänge oder Datenbankänderungen rückgängig. [S31]
- [ ] Im Analysemodus nur den Plan erstellen; keinen Rollback und kein Testdeployment selbst auslösen.

## 7. Nach dem Launch: kontrollierte Aufgaben, noch keine Ausführung

| Zeitraum ab tatsächlichem Launch | Rolle | Aufgabe | Mess-/Abnahmekriterium |
|---|---|---|---|
| Tag 0–2 | Entwicklung/QA | Produktion, wichtige alte URLs, Kontaktweg und Fehlermonitoring prüfen | Kritische Pfade nachweislich funktionsfähig; unerwartete Blockaden priorisiert |
| Tag 3–14 | SEO/Redaktion | Indexierungsverlauf, Suchintentionen, Inhaltsfehler und erste Nutzerprobleme prüfen | Alle relevanten URLs mit dokumentiertem Status; Ursachen statt bloßer Symptome bearbeitet |
| Tag 15–30 | Marketing/Vertrieb | Anfragequalität und tatsächliche Einwände auswerten | Leads korrekt zugeordnet; unqualifizierte/spamartige Anfragen getrennt |
| Tag 31–90 | Geschäftsführung/Marketing | Differenzierungsinhalte und gezielte Tests priorisieren | Entwicklung qualifizierter Anfragen und Themencluster gegenüber belastbarer Baseline |

Keine vorab erfundenen Conversion-Steigerungen oder Top-10-Fristen einsetzen. Ziele erst mit Baseline, Markt, verfügbarem Budget und erwartbarem Traffic festlegen.

## 8. Freigabevermerk

**Ergebnis:** NICHT BEURTEILBAR.  
**Geprüfter Stand:** Offen.  
**Offene Launch-Blocker:** Noch nicht erhoben.  
**Ungeprüfte kritische Bereiche:** Zielwebsite, produktiver Laufzeitzustand, Backend, rechtliche Einzelfallprüfung.  
**Akzeptierte Restrisiken:** Keine Entscheidung getroffen.  
**Freigabe durch / Datum:** Offen.

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S05, S07, S18, S23, S28, S29, S30, S31, S35, S37).
