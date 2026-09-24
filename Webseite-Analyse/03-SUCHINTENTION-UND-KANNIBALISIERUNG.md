# Suchintention, Themenzuständigkeit und Kannibalisierung

**Status: noch keine Keyword- oder URL-Auswertung durchgeführt.** Die fünf Leistungsnamen und Zielregionen sind offen. Keine erfundenen Suchvolumina oder Rankings eintragen.

## 1. Was tatsächlich geprüft wird

Nicht jede gemeinsame Wortverwendung und nicht jedes Ranking mehrerer eigener URLs ist schädliche Kannibalisierung. Prüfe, ob mehrere Seiten dieselbe konkrete Nutzeraufgabe bedienen und dadurch die gewünschte Zielseite, interne Verlinkung oder Conversion-Strecke unklar wird. Ohne Suchdaten zunächst „Risiko/Hypothese“ schreiben.

**Eigener Analyseansatz:** Kombination aus Suchergebnisprüfung, Inhalt/Angebotsvergleich und, soweit zugänglich, Query-URL-Daten aus Search Console. Canonicals sind für gleiche beziehungsweise sehr ähnliche Inhalte vorgesehen und kein Universalwerkzeug für unterschiedliche Leistungen. [S05]

## 2. Intent-Matrix

| Seite | Primäre Nutzeraufgabe | Themen-/Query-Cluster | Nicht ihr Hauptthema | Abgrenzung/Beleg | Primärer nächster Schritt |
|---|---|---|---|---|---|
| Homepage | Unternehmen und Gesamtangebot verstehen | Nach Recherche festlegen | Nicht alle Leistungsdetails | Unternehmenspositionierung | Passende Leistung/Anfrage |
| Alle Leistungen | Geeignete Leistung auswählen | Nach Recherche festlegen | Kein Volltextduplikat der Unterseiten | Vergleich und Auswahlhilfe | Konkrete Leistungsseite |
| Leistung 1 | Spezifisches Problem 1 lösen | Offen | Andere Leistungen | Offen | Passende Anfrage |
| Leistung 2 | Spezifisches Problem 2 lösen | Offen | Andere Leistungen | Offen | Passende Anfrage |
| Leistung 3 | Spezifisches Problem 3 lösen | Offen | Andere Leistungen | Offen | Passende Anfrage |
| Leistung 4 | Spezifisches Problem 4 lösen | Offen | Andere Leistungen | Offen | Passende Anfrage |
| Leistung 5 | Spezifisches Problem 5 lösen | Offen | Andere Leistungen | Offen | Passende Anfrage |
| Über uns | Anbieter prüfen und Vertrauen gewinnen | Marken-/Unternehmensintention prüfen | Keine sechste Leistungsseite | Team und Belege | Kontakt/Leistung |
| Einzugsgebiete | Regionale Verfügbarkeit klären | Tatsächliche Regionen prüfen | Keine erfundenen Niederlassungen | Reale Abdeckung | Leistung oder Anfrage |
| Kontakt | Unternehmen erreichen | Marken-/Kontaktintention | Kein künstlicher SEO-Langtext | Echte Kontaktwege | Abgeschlossene Anfrage |
| Impressum/Datenschutz | Anbieter-/Rechtsinformationen finden | Keine kommerzielle Optimierung erzwingen | Leistungskeywords | Richtigkeit/Zugänglichkeit | Information |

Das ist eine Rollenverteilung, keine bereits validierte Keyword-Zuordnung. Ein Themencluster darf verwandte Formulierungen enthalten; nicht jede Suchphrase braucht eine eigene Seite.

## 3. Prüfverfahren

- [ ] Geeignete Suchbegriffe aus dem tatsächlichen Angebot und realen Kundenfragen ableiten.
- [ ] Land, Region, Sprache, Gerät und Prüfdatum festhalten.
- [ ] Brand, Non-Brand, Informationssuche, Anbietervergleich und konkrete Beauftragungsabsicht trennen.
- [ ] Für jeden wichtigen Cluster dokumentieren, welche Seitentypen Google tatsächlich zeigt. Ein Verzeichnis, ein Ratgeber und eine Leistungsseite erfüllen oft unterschiedliche Aufgaben.
- [ ] Überlappende eigene URLs anhand Hauptaussage, Leistungsumfang, H1, Titel, Text, CTA und internen Linkzielen vergleichen.
- [ ] Bei vorhandenen Suchdaten wechselnde Ziel-URLs, Impressionen, Klicks und qualifizierte Anfragezuordnung über einen sinnvollen Zeitraum analysieren.
- [ ] Saison, Relaunch, neue Indexierung, Suchvolumen und Messrauschen als alternative Ursachen berücksichtigen.
- [ ] Interne Links auf widersprüchliche Themenzuweisungen prüfen.
- [ ] Städteseiten auf echte regionale Informationen, Leistungserbringung und eigenen Nutzen prüfen.
- [ ] Unterschiede zwischen Homepage, Leistungsübersicht und Detailseiten nicht durch identische Texte nivellieren.

## 4. Entscheidung pro Überschneidung

| Situation | Mögliche Empfehlung | Erforderlicher Nachweis |
|---|---|---|
| Verschiedene Nutzeraufgaben, beide Seiten sinnvoll | Behalten, Abgrenzung und Links verbessern | Unterschiedlicher Zweck klar nachvollziehbar |
| Gleiche Aufgabe, eine inhaltlich schwache Dublette | Konsolidierung prüfen | Nachfrage, bestehende Signale, Inhalt und Redirect-Ziel geprüft |
| Technische URL-Varianten mit gleichem Inhalt | Konsistente Canonical-/Redirect-Strategie | Tatsächliche Gleichheit und keine legitime getrennte Nutzung |
| Regionalseiten unterscheiden sich fast nur im Ortsnamen | Eigenständigen Nutzen nachweisen oder Zusammenführung prüfen | Reale Abdeckung und inhaltliche Differenzierung |
| Zwei eigene relevante Suchtreffer ohne beobachteten Schaden | Nicht automatisch eingreifen | Sichtbarkeit und Geschäftsnutzen gemeinsam betrachten |

Keine unterschiedlichen Leistungsseiten pauschal auf die Homepage kanonisieren. Keine erfolgsrelevante Seite vorschnell auf `noindex` setzen. URLs bei Zusammenlegung mit fachlich passendem Ziel behandeln; nicht alle alten Pfade auf die Homepage umleiten. [S05][S07]

## 5. Lokal- und Spam-Risiken

Ortsseiten nur erstellen oder erhalten, wenn sie eine reale regionale Nutzerfrage besser beantworten. Austauschbare Massenvarianten zur Besetzung von Suchergebnissen können in den Bereich von Doorway- beziehungsweise skalierter Spam-Produktion fallen. [S33]

Google-Unternehmensprofil und lokales Ranking separat untersuchen. Relevanz, Entfernung und Bekanntheit lassen sich nicht durch das Wiederholen eines Ortsnamens vollständig ersetzen. [S32]

## 6. Zu liefernde Ergebnisse

- [ ] Eine eindeutige Zuständigkeitsmatrix für alle kommerziellen Kernseiten.
- [ ] Pro Konflikt: betroffene URLs, Beobachtung, Nachweis, Unsicherheit, Empfehlung und späteres Erfolgskriterium.
- [ ] Konkrete Titel-/H1-/Linktext-Empfehlungen für tatsächlich problematische Abgrenzungen.
- [ ] Ein Alt-neu-Mapping für begründet vorgeschlagene Zusammenlegungen oder URL-Änderungen.
- [ ] Keine Änderung durchführen; sämtliche Maßnahmen im Backlog dokumentieren.

---

**Quellen zu dieser Datei:** siehe 09-QUELLEN.md (S05, S07, S32, S33).
